r[macro.decl]
# 示例宏

r[macro.decl.syntax]
```grammar,macros
MacroRulesDefinition ->
    `macro_rules` `!` IDENTIFIER MacroRulesDef

MacroRulesDef ->
      `(` MacroRules `)` `;`
    | `[` MacroRules `]` `;`
    | `{` MacroRules `}`

MacroRules ->
    MacroRule ( `;` MacroRule )* `;`?

MacroRule ->
    MacroMatcher `=>` MacroTranscriber

MacroMatcher ->
      `(` MacroMatch* `)`
    | `[` MacroMatch* `]`
    | `{` MacroMatch* `}`

MacroMatch ->
      Token _except `$` and [delimiters][lex.token.delim]_
    | MacroMatcher
    | `$` ( IDENTIFIER_OR_KEYWORD _except `crate`_ | RAW_IDENTIFIER ) `:` MacroFragSpec
    | `$` `(` MacroMatch+ `)` MacroRepSep? MacroRepOp

MacroFragSpec ->
      `block` | `expr` | `expr_2021` | `ident` | `item` | `lifetime` | `literal`
    | `meta` | `pat` | `pat_param` | `path` | `stmt` | `tt` | `ty` | `vis`

MacroRepSep -> Token _except [delimiters][lex.token.delim] and [MacroRepOp]_

MacroRepOp -> `*` | `+` | `?`

MacroTranscriber -> DelimTokenTree
```

r[macro.decl.intro]
`macro_rules` 允许用户以声明式方式定义语法扩展。我们称这类扩展为“示例宏”或简称“宏”。

每个示例宏都有一个名称，以及一条或多条*规则*。每条规则有两部分：*匹配器*，描述它所匹配的语法；以及*转录器*，描述将替换成功匹配的调用的语法。匹配器和转录器都必须由定界符包围。宏可以展开为表达式、语句、项（包括 trait、impl 和外部项）、类型或模式。

r[macro.decl.transcription]
## 转录

r[macro.decl.transcription.intro]
调用宏时，宏展开器会按名称查找宏调用，并依次尝试每条宏规则。它会转录第一个成功匹配的规则；如果这导致错误，则不会再尝试后续匹配。

r[macro.decl.transcription.lookahead]
匹配时不会进行向前看；如果编译器无法一次一个 token 地无歧义确定如何解析宏调用，那么这就是错误。在下面的示例中，编译器不会越过标识符向前查看下一个 token 是否为 `)`，即使那样能让它无歧义地解析该调用：

```rust,compile_fail
macro_rules! ambiguity {
    ($($i:ident)* $j:ident) => { };
}

ambiguity!(error); // Error: 局部歧义
```

r[macro.decl.transcription.syntax]
在匹配器和转录器中，`$` token 用于调用宏引擎的特殊行为（下文的[元变量](#metavariables)和[重复](#repetitions)中会描述）。不属于这类调用的 token 会按字面方式匹配和转录，但有一个例外。例外是，匹配器的外层定界符会匹配任意一对定界符。因此，例如匹配器 `(())` 会匹配 `{()}`，但不会匹配 `{{}}`。字符 `$` 不能按字面方式匹配或转录。

r[macro.decl.transcription.fragment]
### 转发已匹配的片段

将已匹配的片段转发给另一个示例宏时，第二个宏中的匹配器会看到该片段类型的不透明 AST。第二个宏不能用字面 token 来匹配匹配器中的这些片段，只能使用相同类型的片段说明符。`ident`、`lifetime` 和 `tt` 片段类型是例外，*可以*由字面 token 匹配。下面展示了这一限制：

```rust,compile_fail
macro_rules! foo {
    ($l:expr) => { bar!($l); }
// ERROR:               ^^ 宏调用中没有规则预期此记号
}

macro_rules! bar {
    (3) => {}
}

foo!(3);
```

下面展示了在匹配 `tt` 片段之后，token 如何可以被直接匹配：

```rust
// 编译通过
macro_rules! foo {
    ($l:tt) => { bar!($l); }
}

macro_rules! bar {
    (3) => {}
}

foo!(3);
```

r[macro.decl.meta]
## 元变量

r[macro.decl.meta.intro]
在匹配器中，`$` _name_ `:` _fragment-specifier_ 会匹配指定种类的 Rust 语法片段，并将其绑定到元变量 `$`_name_。

r[macro.decl.meta.specifier]
有效的片段说明符包括：

  * `block`：一个 [BlockExpressionNoInnerAttributes]
  * `expr`：一个 [Expression]
  * `expr_2021`：一个 [Expression]，但不包括 [UnderscoreExpression] 和 [ConstBlockExpression]（见 [macro.decl.meta.edition2024]）
  * `ident`：一个 [IDENTIFIER_OR_KEYWORD]，但不包括 `_`、[RAW_IDENTIFIER] 或 [`$crate`](macro.decl.hygiene.crate)
  * `item`：一个 [Item]
  * `lifetime`：一个 [LIFETIME_TOKEN]
  * `literal`：匹配 `-`<sup>?</sup>[LiteralExpression]
  * `meta`：一个 [Attr]，即属性的内容
  * `pat`：一个 [Pattern]（见 [macro.decl.meta.edition2021]）
  * `pat_param`：一个 [PatternNoTopAlt]
  * `path`：一个 [TypePath]
  * `stmt`：一个不带尾随分号的 [Statement][grammar-Statement]（需要分号的项语句除外）
  * `tt`：一个 [TokenTree]（单个 [token](tokens.md)，或匹配定界符 `()`、`[]` 或 `{}` 中的 token）
  * `ty`：一个 [Type][grammar-Type]
  * `vis`：一个可能为空的 [Visibility] 限定符

r[macro.decl.meta.transcription]
在转录器中，元变量只需用 `$`_name_ 引用，因为片段种类已在匹配器中指定。元变量会被替换为与之匹配的语法元素。元变量可以被转录多次，也可以完全不被转录。

r[macro.decl.meta.dollar-crate]
关键字元变量 [`$crate`](macro.decl.hygiene.crate) 可用于指代当前 crate。

r[macro.decl.meta.edition2021]
> [!EDITION-2021]
> 从 2021 edition 开始，`pat` 片段说明符会匹配顶层 or-pattern（也就是说，它们接受 [Pattern]）。
>
> 在 2021 edition 之前，它们匹配的片段与 `pat_param` 完全相同（也就是说，它们接受 [PatternNoTopAlt]）。
>
> 相关 edition 是 `macro_rules!` 定义所处的 edition。

r[macro.decl.meta.edition2024]
> [!EDITION-2024]
> 在 2024 edition 之前，`expr` 片段说明符在顶层不匹配 [UnderscoreExpression] 或 [ConstBlockExpression]。它们允许出现在子表达式内部。
>
> `expr_2021` 片段说明符的存在是为了维持与 2024 之前 edition 的向后兼容性。

r[macro.decl.repetition]
## 重复

r[macro.decl.repetition.intro]
在匹配器和转录器中，重复通过将要重复的 token 放在 `$(`…`)` 内并跟随一个重复运算符来表示，中间还可以选择性地带有一个分隔符 token。

r[macro.decl.repetition.separator]
分隔符 token 可以是除定界符或重复运算符之外的任何 token，但 `;` 和 `,` 最常见。例如，`$( $i:ident ),*` 表示任意数量的标识符，以逗号分隔。允许嵌套重复。

r[macro.decl.repetition.operators]
重复运算符包括：

- `*` —— 表示任意次数的重复。
- `+` —— 表示任意次数，但至少一次。
- `?` —— 表示出现零次或一次的可选片段。

r[macro.decl.repetition.optional-restriction]
由于 `?` 表示至多出现一次，所以它不能与分隔符一起使用。

r[macro.decl.repetition.fragment]
重复片段会匹配并转录为指定数量的片段，这些片段由分隔符 token 分隔。元变量会匹配其对应片段的每一次重复。例如，上面的 `$( $i:ident ),*` 例子会将 `$i` 匹配到列表中的所有标识符。

转录期间，对重复还会施加额外限制，以便编译器知道如何正确展开它们：

1.  元变量在转录器中出现时，必须与它在匹配器中一样，处于完全相同数量、种类和嵌套顺序的重复中。因此，对于匹配器 `$( $i:ident ),*`，转录器 `=> { $i }`、`=> { $( $( $i )* )* }` 和 `=> { $( $i )+ }` 都是非法的，但 `=> { $( $i );* }` 是正确的，它会把逗号分隔的标识符列表替换为分号分隔的列表。
2.  转录器中的每个重复都必须包含至少一个元变量，以决定它应展开多少次。如果同一个重复中出现多个元变量，它们必须绑定到相同数量的片段。例如，`( $( $i:ident ),* ; $( $j:ident ),* ) => (( $( ($i,$j) ),* ))` 必须将 `$i` 片段和 `$j` 片段绑定到相同数量。这意味着用 `(a, b, c; d, e, f)` 调用该宏是合法的，并会展开为 `((a,d), (b,e), (c,f))`，但 `(a, b, c; d, e)` 是非法的，因为它们的数量不相同。此要求适用于嵌套重复的每一层。

r[macro.decl.scope]
## 作用域、导出和导入

r[macro.decl.scope.intro]
由于历史原因，示例宏的作用域并不完全像项那样工作。宏有两种形式的作用域：文本作用域和基于路径的作用域。文本作用域基于事物在源文件中出现的顺序，甚至可以跨多个文件，并且是默认作用域。下文会进一步说明它。基于路径的作用域与项作用域的工作方式完全相同。宏的作用域、导出和导入很大程度上由属性控制。

r[macro.decl.scope.unqualified]
当通过非限定标识符（不是多段路径的一部分）调用宏时，会首先在文本作用域中查找。如果这没有产生任何结果，则会在基于路径的作用域中查找。如果宏的名称带有路径限定，则只会在基于路径的作用域中查找。

<!-- ignore: requires external crates -->
```rust,ignore
use lazy_static::lazy_static; // 基于路径的导入。

macro_rules! lazy_static { // 文本定义。
    (lazy) => {};
}

lazy_static!{lazy} // 文本查找首先找到我们的宏。
self::lazy_static!{} // 基于路径的查找会忽略我们的宏，找到导入的宏。
```

r[macro.decl.scope.textual]
### 文本作用域

r[macro.decl.scope.textual.intro]
文本作用域很大程度上基于事物在源文件中出现的顺序，其工作方式类似于用 `let` 声明的局部变量的作用域，只不过它也适用于模块级别。当使用 `macro_rules!` 定义宏时，该宏会在定义之后进入作用域（注意，它仍然可以递归使用，因为名称是从调用位置查找的），直到其外围作用域（通常是一个模块）闭合为止。这可以进入子模块，甚至跨越多个文件：

<!-- ignore: requires external modules -->
```rust,ignore
//// src/lib.rs
mod has_macro {
    // m!{} // 错误：m 不在作用域内。

    macro_rules! m {
        () => {};
    }
    m!{} // OK：出现在 m 的声明之后。

    mod uses_macro;
}

// m!{} // 错误：m 不在作用域内。

//// src/has_macro/uses_macro.rs

m!{} // OK：出现在 src/lib.rs 中 m 的声明之后
```

r[macro.decl.scope.textual.shadow]
多次定义同一个宏并不是错误；除非最近的声明已经离开作用域，否则它会遮蔽之前的声明。

```rust
macro_rules! m {
    (1) => {};
}

m!(1);

mod inner {
    m!(1);

    macro_rules! m {
        (2) => {};
    }
    // m!(1); // 错误：没有规则匹配 '1'
    m!(2);

    macro_rules! m {
        (3) => {};
    }
    m!(3);
}

m!(1);
```

宏也可以在函数内部局部声明和使用，其工作方式类似：

```rust
fn foo() {
    // m!(); // 错误：m 不在作用域内。
    macro_rules! m {
        () => {};
    }
    m!();
}

// m!(); // 错误：m 不在作用域内。
```

r[macro.decl.scope.textual.shadow.path-based]
宏的文本作用域名称绑定会遮蔽宏的基于路径的作用域绑定。

```rust
macro_rules! m2 {
    () => {
        println!("m2");
    };
}

// 解析为来自下方 use 声明的基于路径的候选项。
m!(); // 打印 "m2\n"

// 引入具有文本作用域的 `m` 的第二个候选项。
//
// 这会在本示例余下部分中遮蔽来自下方的
// 基于路径的候选项。
macro_rules! m {
    () => {
        println!("m");
    };
}

// 引入 `m2` 宏作为基于路径的候选项。
//
// 此项在整个示例中都在作用域内，不仅仅是在
// use 声明下方。
use m2 as m;

// 解析为来自 use 声明
// 上方的文本宏候选项。
m!(); // 打印 "m\n"
```

> [!NOTE]
> 对于不允许遮蔽的区域，见[名称解析歧义](names/name-resolution.md#r-names.resolution.expansion.imports.ambiguity)。

r[macro.decl.scope.path-based]
### 基于路径的作用域

r[macro.decl.scope.path-based.intro]
默认情况下，宏没有基于路径的作用域。宏可以通过两种方式获得基于路径的作用域：

- [use 声明重导出](items/use-declarations.md#use-visibility)
- [`macro_export`]

r[macro.decl.scope.path.reexport]
宏可以被重导出，从而让它们从 crate 根以外的模块获得基于路径的作用域。

```rust
mac::m!(); // OK：基于路径的查找会在 mac 模块中找到 `m`。

mod mac {
    // 引入具有文本作用域的宏 `m`。
    macro_rules! m {
        () => {};
    }

    // 从 `m` 的文本作用域内以基于路径的作用域重新导出。
    pub(crate) use m;
}
```

r[macro.decl.scope.path-based.visibility]
宏具有隐式的 `pub(crate)` 可见性。`#[macro_export]` 会将隐式可见性改为 `pub`。

```rust
// 隐式可见性为 `pub(crate)`。
macro_rules! private_m {
    () => {};
}

// 隐式可见性为 `pub`。
#[macro_export]
macro_rules! pub_m {
    () => {};
}

pub(crate) use private_m as private_macro; // 正确。
pub use pub_m as pub_macro; // 正确。
```

```rust,compile_fail,E0364
# // 隐式可见性为 `pub(crate)`。
# macro_rules! private_m {
#     () => {};
# }
#
# // 隐式可见性为 `pub`。
# #[macro_export]
# macro_rules! pub_m {
#     () => {};
# }
#
# pub(crate) use private_m as private_macro; // 正确。
# pub use pub_m as pub_macro; // 正确。
#
pub use private_m; // 错误：`private_m` 仅在
                   // crate 内是公开的，不能重新导出到外部。
```

<!-- template:attributes -->
r[macro.decl.scope.macro_use]
### `macro_use` 属性

r[macro.decl.scope.macro_use.intro]
*`macro_use` [属性][attributes]* 有两个用途：它可以用在模块上，以扩展其中定义的宏的作用域；也可以用在 [`extern crate`][items.extern-crate] 上，以将另一个 crate 中的宏导入 [`macro_use` prelude](names/preludes.md#macro_use-prelude)。

> [!EXAMPLE]
> ```rust
> #[macro_use]
> mod inner {
>     macro_rules! m {
>         () => {};
>     }
> }
> m!();
> ```
>
> ```rust,ignore
> #[macro_use]
> extern crate log;
> ```

r[macro.decl.scope.macro_use.syntax]
用在模块上时，`macro_use` 属性使用 [MetaWord] 语法。

用在 `extern crate` 上时，它使用 [MetaWord] 和 [MetaListIdents] 语法。关于这些语法可如何使用的更多信息，见 [macro.decl.scope.macro_use.prelude]。

r[macro.decl.scope.macro_use.allowed-positions]
`macro_use` 属性可以应用于模块或 `extern crate`。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

r[macro.decl.scope.macro_use.extern-crate-self]
`macro_use` 属性不能用于 [`extern crate self`](items.extern-crate.self)。

r[macro.decl.scope.macro_use.duplicates]
`macro_use` 属性可以在一种形式上使用任意多次。

可以指定多个使用 [MetaListIdents] 语法的 `macro_use` 实例。所有指定宏的并集将被导入。

> [!NOTE]
> 在模块上，`rustc` 会对第一个之后的任何 [MetaWord] `macro_use` 属性发出 lint。
>
> 在 `extern crate` 上，`rustc` 会对任何无效果的 `macro_use` 属性发出 lint；这些属性之所以无效果，是因为它们没有导入任何尚未由另一个 `macro_use` 属性导入的宏。如果两个或更多 [MetaListIdents] `macro_use` 属性导入同一个宏，则会对第一个发出 lint。如果存在任何 [MetaWord] `macro_use` 属性，则会对所有 [MetaListIdents] `macro_use` 属性发出 lint。如果存在两个或更多 [MetaWord] `macro_use` 属性，则会对第一个之后的那些发出 lint。

r[macro.decl.scope.macro_use.mod-decl]
当 `macro_use` 用在模块上时，该模块的宏作用域会延伸到模块的词法作用域之外。

> [!EXAMPLE]
> ```rust
> #[macro_use]
> mod inner {
>     macro_rules! m {
>         () => {};
>     }
> }
> m!(); // 可以
> ```

r[macro.decl.scope.macro_use.prelude]
在 crate 根中的 `extern crate` 声明上指定 `macro_use`，会从该 crate 导入已导出的宏。

以这种方式导入的宏会导入到 [`macro_use` prelude](names/preludes.md#macro_use-prelude)，而不是按文本方式导入；这意味着它们可以被任何其他名称遮蔽。由 `macro_use` 导入的宏可以在导入语句之前使用。

> [!NOTE]
> 发生冲突时，`rustc` 目前偏向最后导入的宏。不要依赖这一点。此行为并不寻常，因为 Rust 中的导入通常与顺序无关。`macro_use` 的此行为将来可能会改变。
>
> 详情见 [Rust issue #148025](https://github.com/rust-lang/rust/issues/148025)。

使用 [MetaWord] 语法时，会导入所有已导出的宏。使用 [MetaListIdents] 语法时，只会导入指定的宏。

> [!EXAMPLE]
> <!-- ignore: requires external crates -->
> ```rust,ignore
> #[macro_use(lazy_static)] // 或使用 `#[macro_use]` 导入所有宏。
> extern crate lazy_static;
>
> lazy_static!{}
> // self::lazy_static!{} // 错误：lazy_static 未在 `self` 中定义。
> ```

r[macro.decl.scope.macro_use.export]
要用 `macro_use` 导入的宏必须用 [`macro_export`][macro.decl.scope.macro_export] 导出。

<!-- template:attributes -->
r[macro.decl.scope.macro_export]
### `macro_export` 属性

r[macro.decl.scope.macro_export.intro]
*`macro_export` [属性][attributes]* 会从 crate 中导出宏，并使其可在 crate 根中用于基于路径的解析。

> [!EXAMPLE]
> ```rust
> self::m!();
> //  ^^^^ OK：基于路径的查找会在当前模块中找到 `m`。
> m!(); // 同上。
>
> mod inner {
>     super::m!();
>     crate::m!();
> }
>
> mod mac {
>     #[macro_export]
>     macro_rules! m {
>         () => {};
>     }
> }
> ```

r[macro.decl.scope.macro_export.syntax]
`macro_export` 属性使用 [MetaWord] 和 [MetaListIdents] 语法。使用 [MetaListIdents] 语法时，它接受单个 [`local_inner_macros`][macro.decl.scope.macro_export.local_inner_macros] 值。

r[macro.decl.scope.macro_export.allowed-positions]
`macro_export` 属性可以应用于 `macro_rules` 定义。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

r[macro.decl.scope.macro_export.duplicates]
在一个宏上，只有第一次使用 `macro_export` 会有效果。

> [!NOTE]
> `rustc` 会对第一次之后的任何使用发出 lint。

r[macro.decl.scope.macro_export.path-based]
默认情况下，宏只有[文本作用域][macro.decl.scope.textual]，不能通过路径解析。使用 `macro_export` 属性时，宏会在 crate 根中可用，并且可以通过它的路径引用。

> [!EXAMPLE]
> 没有 `macro_export` 时，宏只有文本作用域，因此该宏的基于路径的解析会失败。
>
> ```rust,compile_fail,E0433
> macro_rules! m {
>     () => {};
> }
> self::m!(); // 错误
> crate::m!(); // 错误
> # fn main() {}
> ```
>
> 有了 `macro_export`，基于路径的解析就能工作。
>
> ```rust
> #[macro_export]
> macro_rules! m {
>     () => {};
> }
> self::m!(); // 可以
> crate::m!(); // 可以
> # fn main() {}
> ```

r[macro.decl.scope.macro_export.export]
`macro_export` 属性会使宏从 crate 根导出，从而可以在其他 crate 中通过路径引用它。

> [!EXAMPLE]
> 给定 `log` crate 中的以下内容：
>
> ```rust
> #[macro_export]
> macro_rules! warn {
>     ($message:expr) => { eprintln!("WARN: {}", $message) };
> }
> ```
>
> 在另一个 crate 中，可以通过路径引用该宏：
>
> <!-- ignore: requires external crates -->
> ```rust,ignore
> fn main() {
>     log::warn!("example warning");
> }
> ```

r[macro.decl.scope.macro_export.macro_use]
`macro_export` 允许在 `extern crate` 上使用 [`macro_use`][macro.decl.scope.macro_use]，以将该宏导入 [`macro_use` prelude](names/preludes.md#macro_use-prelude)。

> [!EXAMPLE]
> 给定 `log` crate 中的以下内容：
>
> ```rust
> #[macro_export]
> macro_rules! warn {
>     ($message:expr) => { eprintln!("WARN: {}", $message) };
> }
> ```
>
> 在依赖 crate 中使用 `macro_use`，可以让你从 prelude 使用该宏：
>
> <!-- ignore: requires external crates -->
> ```rust,ignore
> #[macro_use]
> extern crate log;
>
> pub mod util {
>     pub fn do_thing() {
>         // 通过宏 prelude 解析。
>         warn!("example warning");
>     }
> }
> ```

r[macro.decl.scope.macro_export.local_inner_macros]
向 `macro_export` 属性添加 `local_inner_macros`，会使宏定义中的所有单段宏调用都带有隐式的 `$crate::` 前缀。

> [!NOTE]
> 这主要是作为一种迁移工具，用于迁移在 [`$crate`](macro.decl.hygiene.crate) 加入语言之前编写的代码，使其能够与 Rust 2018 的基于路径的宏导入配合工作。不鼓励在新代码中使用它。

> [!EXAMPLE]
> ```rust
> #[macro_export(local_inner_macros)]
> macro_rules! helped {
>     () => { helper!() } // 自动转换为 $crate::helper!()。
> }
>
> #[macro_export]
> macro_rules! helper {
>     () => { () }
> }
> ```

r[macro.decl.hygiene]
## 卫生性

r[macro.decl.hygiene.intro]
示例宏具有*混合位置卫生性*。这意味着[循环标签](expressions/loop-expr.md#loop-labels)、[块标签](expr.loop.block-labels)和局部变量会在宏定义位置查找，而其他符号会在宏调用位置查找。例如：

```rust
let x = 1;
fn func() {
    unreachable!("this is never called")
}

macro_rules! check {
    () => {
        assert_eq!(x, 1); // 使用定义位置的 `x`。
        func();           // 使用调用位置的 `func`。
    };
}

{
    let x = 2;
    fn func() { /* does not panic */ }
    check!();
}
```

宏展开中定义的标签和局部变量不会在各次调用之间共享，因此这段代码无法编译：

```rust,compile_fail,E0425
macro_rules! m {
    (define) => {
        let x = 1;
    };
    (refer) => {
        dbg!(x);
    };
}

m!(define);
m!(refer);
```

r[macro.decl.hygiene.crate]
一个特殊情况是 `$crate` 元变量。它指代定义该宏的 crate，并且可以用在路径开头，用于查找在调用位置不在作用域内的条目或宏。

<!-- ignore: requires external crates -->
```rust,ignore
//// `helper_macro` crate 中的定义。
#[macro_export]
macro_rules! helped {
    // () => { helper!() } // 这可能因 'helper' 不在作用域内而导致错误。
    () => { $crate::helper!() }
}

#[macro_export]
macro_rules! helper {
    () => { () }
}

//// 在另一个 crate 中的用法。
// 注意，未导入 `helper_macro::helper`！
use helper_macro::helped;

fn unit() {
    helped!();
}
```

注意，因为 `$crate` 指代当前 crate，所以引用非宏条目时必须将它与完全限定模块路径一起使用：

```rust
pub mod inner {
    #[macro_export]
    macro_rules! call_foo {
        () => { $crate::inner::foo() };
    }

    pub fn foo() {}
}
```

r[macro.decl.hygiene.vis]
此外，即使 `$crate` 允许宏在展开时引用其自身 crate 内的条目，它的使用也不会影响可见性。被引用的条目或宏仍然必须从调用位置可见。在下面的示例中，任何从其 crate 外部调用 `call_foo!()` 的尝试都会失败，因为 `foo()` 不是公开的。

```rust
#[macro_export]
macro_rules! call_foo {
    () => { $crate::foo() };
}

fn foo() {}
```

> [!NOTE]
> 在 Rust 1.30 之前，`$crate` 和 [`local_inner_macros`][macro.decl.scope.macro_export.local_inner_macros] 尚不受支持。它们是与[宏的基于路径的导入][macro.decl.scope.macro_export]一同加入的，以确保导出宏的 crate 的用户不需要手动导入辅助宏。为较早 Rust 版本编写且使用辅助宏的 crate，需要修改为使用 `$crate` 或 `local_inner_macros`，才能与基于路径的导入良好配合。

r[macro.decl.follow-set]
## Follow 集歧义限制

r[macro.decl.follow-set.intro]
宏系统使用的解析器相当强大，但为了防止当前或未来语言版本中的歧义，它也受到限制。

r[macro.decl.follow-set.token-restriction]
特别是，除了关于歧义展开的规则外，由元变量匹配的非终结符后面必须跟随一个已被判定可安全用于该类匹配之后的 token。

举例来说，像 `$i:expr [ , ]` 这样的宏匹配器在今天的 Rust 中理论上可以被接受，因为 `[,]` 不能成为合法表达式的一部分，因此解析总是无歧义的。不过，因为 `[` 可以开始尾随表达式，不能安全地排除 `[` 出现在表达式之后的可能性。如果在较后的 Rust 版本中接受了 `[,]`，这个匹配器就会变得有歧义，或被错误解析，从而破坏可工作的代码。不过，像 `$i:expr,` 或 `$i:expr;` 这样的匹配器是合法的，因为 `,` 和 `;` 是合法的表达式分隔符。具体规则如下：

r[macro.decl.follow-set.token-expr-stmt]
  * `expr` 和 `stmt` 后面只能跟随以下之一：`=>`、`,` 或 `;`。

r[macro.decl.follow-set.token-pat_param]
  * `pat_param` 后面只能跟随以下之一：`=>`、`,`、`=`、`|`、`if` 或 `in`。

r[macro.decl.follow-set.token-pat]
  * `pat` 后面只能跟随以下之一：`=>`、`,`、`=`、`if` 或 `in`。

r[macro.decl.follow-set.token-path-ty]
  * `path` 和 `ty` 后面只能跟随以下之一：`=>`、`,`、`=`、`|`、`;`、`:`、`>`、`>>`、`[`、`{`、`as`、`where`，或片段说明符为 `block` 的宏变量。

r[macro.decl.follow-set.token-vis]
  * `vis` 后面只能跟随以下之一：`,`、除一个非 raw 的 `priv` 之外的标识符、任何可以开始类型的 token，或带有 `ident`、`ty` 或 `path` 片段说明符的元变量。

r[macro.decl.follow-set.token-other]
  * 所有其他片段说明符没有限制。

r[macro.decl.follow-set.edition2021]
> [!EDITION-2021]
> 在 2021 edition 之前，`pat` 后面也可以跟随 `|`。

r[macro.decl.follow-set.repetition]
涉及重复时，这些规则会在考虑分隔符的情况下应用于每一种可能的展开次数。这意味着：

  * 如果重复包含分隔符，则该分隔符必须能够跟随在重复内容之后。
  * 如果重复可以重复多次（`*` 或 `+`），则其内容必须能够跟随其自身。
  * 重复的内容必须能够跟随在其前面的任何内容之后，而其后面的任何内容也必须能够跟随在重复内容之后。
  * 如果重复可以匹配零次（`*` 或 `?`），则其后面的任何内容必须能够跟随在其前面的任何内容之后。

更多细节见[形式化规约](macro-ambiguity.md)。

[Metavariables]: #metavariables
[Repetitions]: #repetitions
[`macro_export`]: #the-macro_export-attribute
[`$crate`]: macro.decl.hygiene.crate
[`extern crate self`]: items.extern-crate.self
[`macro_use` prelude]: names/preludes.md#macro_use-prelude
[block labels]: expr.loop.block-labels
[delimiters]: tokens.md#delimiters
[formal specification]: macro-ambiguity.md
[loop labels]: expressions/loop-expr.md#loop-labels
[name resolution ambiguities]: names/name-resolution.md#r-names.resolution.expansion.imports.ambiguity
[token]: tokens.md
[use declaration re-export]: items/use-declarations.md#use-visibility
