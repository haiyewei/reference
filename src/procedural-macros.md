r[macro.proc]
# 过程宏

r[macro.proc.intro]
*过程宏* 允许通过执行函数来创建语法扩展。过程宏有三种形式：

* [类函数宏](#the-proc_macro-attribute) - `custom!(...)`
* [derive 宏](macro.proc.derive) - `#[derive(CustomDerive)]`
* [属性宏](#the-proc_macro_attribute-attribute) - `#[CustomAttribute]`

过程宏允许你在编译时运行操作 Rust 语法的代码，既消费 Rust 语法，也产生 Rust 语法。可以大致将过程宏看作从一个 AST 到另一个 AST 的函数。

r[macro.proc.def]
过程宏必须定义在 [crate 类型](linkage.md)为 `proc-macro` 的 crate 根中。这些宏不得从定义它们的 crate 中使用，只能在另一个 crate 中导入后使用。

> [!NOTE]
> 使用 Cargo 时，过程宏 crate 通过清单中的 `proc-macro` 键定义：
>
> ```toml
> [lib]
> proc-macro = true
> ```

r[macro.proc.result]
作为函数，它们必须返回语法、panic 或无限循环三者之一。返回的语法会根据过程宏的种类替换或添加语法。panic 会被编译器捕获并转换为编译器错误。无限循环不会被编译器捕获，而会使编译器挂起。

过程宏在编译期间运行，因此拥有与编译器相同的资源。例如，标准输入、标准错误和标准输出与编译器可访问的是同一组资源。类似地，文件访问也是相同的。因此，过程宏具有与 [Cargo 的构建脚本](../cargo/reference/build-scripts.html)相同的安全隐患。

r[macro.proc.error]
过程宏有两种报告错误的方式。第一种是 panic。第二种是发出 [`compile_error`] 宏调用。

r[macro.proc.proc_macro-crate]
## `proc_macro` crate

r[macro.proc.proc_macro-crate.intro]
过程宏 crate 几乎总是会链接到编译器提供的 [`proc_macro` crate](proc_macro)。`proc_macro` crate 提供编写过程宏所需的类型，以及使编写过程宏更容易的设施。

r[macro.proc.proc_macro-crate.token-stream]
这个 crate 主要包含 [`TokenStream`](proc_macro::TokenStream) 类型。过程宏操作的是 *token 流* 而不是 AST 节点；随着时间推移，对编译器和过程宏而言，token 流都是稳定得多的目标接口。*token 流* 大致等价于 `Vec<TokenTree>`，其中 `TokenTree` 大致可以看作词法 token。例如，`foo` 是 `Ident` token，`.` 是 `Punct` token，`1.2` 是 `Literal` token。与 `Vec<TokenTree>` 不同，`TokenStream` 类型的克隆成本很低。

r[macro.proc.proc_macro-crate.span]
所有 token 都有关联的 `Span`。`Span` 是一个不能被修改但可以被构造的不透明值。`Span` 表示程序中一段源代码的范围，主要用于错误报告。虽然你不能修改 `Span` 本身，但始终可以更改与任何 token *关联* 的 `Span`，例如通过从另一个 token 获取 `Span` 来更改。

r[macro.proc.hygiene]
## 过程宏卫生性

过程宏是 *非卫生的*。这意味着它们的行为就像输出 token 流被直接内联写入其旁边的代码一样。这意味着它会受到外部项的影响，也会影响外部导入。

在这种限制下，宏作者需要谨慎地确保他们的宏能在尽可能多的上下文中工作。这通常包括对库中的项使用绝对路径（例如使用 `::std::option::Option` 而不是 `Option`），或者确保生成的函数具有不太可能与其他函数冲突的名称（例如使用 `__internal_foo` 而不是 `foo`）。

<!-- TODO: rule name needs improvement -->
<!-- template:attributes -->
r[macro.proc.proc_macro]
## `proc_macro` 属性

r[macro.proc.proc_macro.intro]
*`proc_macro` [属性](attributes.md)* 定义一个 [类函数][macro.invocation] 过程宏。

> [!EXAMPLE]
> 这个宏定义会忽略其输入，并在其作用域中发出一个函数 `answer`。
>
> <!-- ignore: test doesn't support proc-macro -->
> ```rust,ignore
> # #![crate_type = "proc-macro"]
> extern crate proc_macro;
> use proc_macro::TokenStream;
>
> #[proc_macro]
> pub fn make_answer(_item: TokenStream) -> TokenStream {
>     "fn answer() -> u32 { 42 }".parse().unwrap()
> }
> ```
>
> 可以在二进制 crate 中使用它，将 "42" 打印到标准输出。
>
> <!-- ignore: requires external crates -->
> ```rust,ignore
> extern crate proc_macro_examples;
> use proc_macro_examples::make_answer;
>
> make_answer!();
>
> fn main() {
>     println!("{}", answer());
> }
> ```

r[macro.proc.proc_macro.syntax]
`proc_macro` 属性使用 [MetaWord] 语法。

r[macro.proc.proc_macro.allowed-positions]
`proc_macro` 属性只能应用于类型为 `fn(TokenStream) -> TokenStream` 的 `pub` 函数，其中 [`TokenStream`](proc_macro::TokenStream) 来自 [`proc_macro` crate](proc_macro)。它必须具有 ["Rust" ABI][items.fn.extern]。不允许使用其他函数限定符。它必须位于 crate 根。

r[macro.proc.proc_macro.duplicates]
`proc_macro` 属性在一个函数上只能指定一次。

r[macro.proc.proc_macro.namespace]
`proc_macro` 属性会在 crate 根的[宏命名空间](names/namespaces.md)中公开定义一个与该函数同名的宏。

r[macro.proc.proc_macro.behavior]
对类函数过程宏进行类函数宏调用时，会将宏调用定界符内的内容作为输入 [`TokenStream`](proc_macro::TokenStream) 实参传递，并用该函数的输出 [`TokenStream`](proc_macro::TokenStream) 替换整个宏调用。

r[macro.proc.proc_macro.invocation]
类函数过程宏可以在任何宏调用位置调用，包括：

- [语句](statements.md)
- [表达式](expressions.md)
- [模式](patterns.md)
- [类型表达式](types.md#type-expressions)
- [项](items.md)位置，包括 [`extern` 块](items/external-blocks.md)中的项
- 固有和 trait [实现](items/implementations.md)
- [Trait 定义](items/traits.md)

<!-- template:attributes -->
r[macro.proc.derive]
## `proc_macro_derive` 属性

r[macro.proc.derive.intro]
将 *`proc_macro_derive` [属性](attributes.md)* 应用于函数会定义一个 *derive 宏*，该宏可以由 [`derive` 属性](attributes/derive.md)调用。这些宏会收到 [struct](items/structs.md)、[enum](items/enumerations.md) 或 [union](items/unions.md) 定义的 token 流，并可以在其后发出新的[项](items.md)。它们还可以声明和使用 [derive 宏辅助属性](#derive-macro-helper-attributes)。

> [!EXAMPLE]
> 这个 derive 宏会忽略其输入，并追加用于定义一个函数的 token。
>
> <!-- ignore: test doesn't support proc-macro -->
> ```rust,ignore
> # #![crate_type = "proc-macro"]
> extern crate proc_macro;
> use proc_macro::TokenStream;
>
> #[proc_macro_derive(AnswerFn)]
> pub fn derive_answer_fn(_item: TokenStream) -> TokenStream {
>     "fn answer() -> u32 { 42 }".parse().unwrap()
> }
> ```
>
> 要使用它，可以这样写：
>
> <!-- ignore: requires external crates -->
> ```rust,ignore
> extern crate proc_macro_examples;
> use proc_macro_examples::AnswerFn;
>
> #[derive(AnswerFn)]
> struct Struct;
>
> fn main() {
>     assert_eq!(42, answer());
> }
> ```

r[macro.proc.derive.syntax]
`proc_macro_derive` 属性的语法为：

```grammar,attributes
@root ProcMacroDeriveAttribute ->
    `proc_macro_derive` `(` DeriveMacroName ( `,` DeriveMacroAttributes )? `,`? `)`

DeriveMacroName -> IDENTIFIER

DeriveMacroAttributes ->
    `attributes` `(` ( IDENTIFIER (`,` IDENTIFIER)* `,`?)? `)`
```

derive 宏的名称由 [DeriveMacroName] 给出。可选的 `attributes` 实参在 [macro.proc.derive.attributes] 中描述。

r[macro.proc.derive.allowed-positions]
`proc_macro_derive` 属性只能应用于在 crate 根定义、具有 [Rust ABI][items.fn.extern]、类型为 `fn(TokenStream) -> TokenStream` 的 `pub` 函数，其中 [`TokenStream`](proc_macro::TokenStream) 来自 [`proc_macro` crate](proc_macro)。该函数可以是 `const`，也可以使用 `extern` 显式指定 Rust ABI，但不得使用任何其他 [限定符][FunctionQualifiers]（例如不得为 `async` 或 `unsafe`）。

r[macro.proc.derive.duplicates]
`proc_macro_derive` 属性在一个函数上只能使用一次。

r[macro.proc.derive.namespace]
`proc_macro_derive` 属性会在 crate 根的[宏命名空间](names/namespaces.md)中公开定义该 derive 宏。

r[macro.proc.derive.output]
输入 [`TokenStream`](proc_macro::TokenStream) 是应用了 `derive` 属性的项的 token 流。输出 [`TokenStream`](proc_macro::TokenStream) 必须是一个（可能为空的）项集合。这些项会在同一[模块](items/modules.md)或[块](expressions/block-expr.md)中追加到输入项之后。

r[macro.proc.derive.attributes]
### 派生宏辅助属性

r[macro.proc.derive.attributes.intro]
derive 宏可以声明 *derive 宏辅助属性*，供应用该 derive 宏的[项](items.md)作用域内使用。这些[属性](attributes.md)是[惰性的](attributes.md#active-and-inert-attributes)。虽然它们的用途是供声明它们的宏使用，但任何宏都可以看到它们。

r[macro.proc.derive.attributes.decl]
derive 宏的辅助属性通过将其标识符添加到 `proc_macro_derive` 属性中的 `attributes` 列表来声明。

> [!EXAMPLE]
> 这会声明一个辅助属性，然后忽略它。
>
> <!-- ignore: test doesn't support proc-macro -->
> ```rust,ignore
> # #![crate_type="proc-macro"]
> # extern crate proc_macro;
> # use proc_macro::TokenStream;
> #
> #[proc_macro_derive(WithHelperAttr, attributes(helper))]
> pub fn derive_with_helper_attr(_item: TokenStream) -> TokenStream {
>     TokenStream::new()
> }
> ```
>
> 要使用它，可以这样写：
>
> <!-- ignore: requires external crates -->
> ```rust,ignore
> #[derive(WithHelperAttr)]
> struct Struct {
>     #[helper] field: (),
> }
> ```

r[macro.proc.derive.attributes.scope]
当 derive 宏调用应用于某个项时，由该 derive 宏引入的辅助属性会在以下位置进入作用域：1) 应用于该项且在词法上位于该 derive 宏调用之后的属性；2) 应用于该项内部字段和变体的属性。

> [!NOTE]
> rustc 目前允许在引入 derive 辅助属性的宏之前使用这些辅助属性。以这种乱序方式使用的 derive 辅助属性不得遮蔽其他属性宏。此行为已弃用，并计划移除。
>
> <!-- ignore: requires external crates -->
> ```rust,ignore
> #[helper] // 已弃用，将来会成为硬错误。
> #[derive(WithHelperAttr)]
> struct Struct {
>     field: (),
> }
> ```
>
> 更多详细信息，请参见 [Rust issue #79202](https://github.com/rust-lang/rust/issues/79202)。


<!-- template:attributes -->
r[macro.proc.attribute]
## `proc_macro_attribute` 属性

r[macro.proc.attribute.intro]
*`proc_macro_attribute` [属性](attributes.md)* 定义一个可用作[外部属性](attributes.md)的 *属性宏*。

> [!EXAMPLE]
> 这个属性宏接受输入流并原样发出它，实际上是一个无操作属性。
>
> <!-- ignore: test doesn't support proc-macro -->
> ```rust,ignore
> # #![crate_type = "proc-macro"]
> # extern crate proc_macro;
> # use proc_macro::TokenStream;
>
> #[proc_macro_attribute]
> pub fn return_as_is(_attr: TokenStream, item: TokenStream) -> TokenStream {
>     item
> }
> ```

> [!EXAMPLE]
> 这会在编译器输出中显示属性宏看到的 [`TokenStream`s](proc_macro::TokenStream) 的字符串化形式。
>
> <!-- ignore: test doesn't support proc-macro -->
> ```rust,ignore
> // my-macro/src/lib.rs
> # extern crate proc_macro;
> # use proc_macro::TokenStream;
> #[proc_macro_attribute]
> pub fn show_streams(attr: TokenStream, item: TokenStream) -> TokenStream {
>     println!("attr: \"{attr}\"");
>     println!("item: \"{item}\"");
>     item
> }
> ```
>
> <!-- ignore: requires external crates -->
> ```rust,ignore
> // src/lib.rs
> extern crate my_macro;
>
> use my_macro::show_streams;
>
> // 示例：基本函数。
> #[show_streams]
> fn invoke1() {}
> // out: attr: ""
> // out: item: "fn invoke1() {}"
>
> // 示例：带输入的属性。
> #[show_streams(bar)]
> fn invoke2() {}
> // out: attr: "bar"
> // out: item: "fn invoke2() {}"
>
> // 示例：输入中的多个 token。
> #[show_streams(multiple => tokens)]
> fn invoke3() {}
> // out: attr: "multiple => tokens"
> // out: item: "fn invoke3() {}"
>
> // 示例：输入中的定界符。
> #[show_streams { delimiters }]
> fn invoke4() {}
> // out: attr: "delimiters"
> // out: item: "fn invoke4() {}"
> ```

r[macro.proc.attribute.syntax]
`proc_macro_attribute` 属性使用 [MetaWord] 语法。

r[macro.proc.attribute.allowed-positions]
`proc_macro_attribute` 属性只能应用于类型为 `fn(TokenStream, TokenStream) -> TokenStream` 的 `pub` 函数，其中 [`TokenStream`](proc_macro::TokenStream) 来自 [`proc_macro` crate](proc_macro)。它必须具有 ["Rust" ABI][items.fn.extern]。不允许使用其他函数限定符。它必须位于 crate 根。

r[macro.proc.attribute.duplicates]
`proc_macro_attribute` 属性在一个函数上只能指定一次。

r[macro.proc.attribute.namespace]
`proc_macro_attribute` 属性会在 crate 根的[宏命名空间](names/namespaces.md)中定义一个与该函数同名的属性。

r[macro.proc.attribute.use-positions]
属性宏只能用于：

- [项](items.md)
- [`extern` 块](items/external-blocks.md)中的项
- 固有和 trait [实现](items/implementations.md)
- [Trait 定义](items/traits.md)

r[macro.proc.attribute.behavior]
第一个 [`TokenStream`](proc_macro::TokenStream) 参数是位于属性名称之后的带定界符 token 树，但不包含外层定界符。如果应用的属性只包含属性名称，或者属性名称后跟空定界符，则该 [`TokenStream`](proc_macro::TokenStream) 为空。

第二个 [`TokenStream`](proc_macro::TokenStream) 是该[项](items.md)的其余部分，包括该[项](items.md)上的其他[属性](attributes.md)。

应用该属性的项会被返回的 [`TokenStream`](proc_macro::TokenStream) 中的零个或多个项替换。

r[macro.proc.token]
## 声明式宏 token 与过程宏 token

r[macro.proc.token.intro]
声明式 `macro_rules` 宏和过程宏对 token（更准确地说是 [`TokenTree`s](proc_macro::TokenTree)）使用相似但不同的定义。

r[macro.proc.token.macro_rules]
`macro_rules` 中的 token 树（对应于 `tt` 匹配器）定义为：
- 带定界符的组（`(...)`、`{...}` 等）
- 语言支持的所有运算符，包括单字符和多字符运算符（`+`、`+=`）。
    - 注意，此集合不包括单引号 `'`。
- 字面量（`"string"`、`1` 等）
    - 注意，取负（例如 `-1`）绝不会是此类字面量 token 的一部分，而是一个单独的运算符 token。
- 标识符，包括关键字（`ident`、`r#ident`、`fn`）
- 生命周期（`'ident`）
- `macro_rules` 中的元变量替换（例如 `mac` 展开后 `macro_rules! mac { ($my_expr: expr) => { $my_expr } }` 中的 `$my_expr`，无论传入的表达式是什么，它都会被视为单个 token 树）

r[macro.proc.token.tree]
过程宏中的 token 树定义为：
- 带定界符的组（`(...)`、`{...}` 等）
- 语言支持的运算符中使用的所有标点字符（`+`，但不是 `+=`），以及单引号 `'` 字符（通常用于生命周期；生命周期的拆分和合并行为见下文）
- 字面量（`"string"`、`1` 等）
    - 取负（例如 `-1`）支持作为整数字面量和浮点字面量的一部分。
- 标识符，包括关键字（`ident`、`r#ident`、`fn`）

r[macro.proc.token.conversion.intro]
当 token 流传入过程宏或从过程宏传出时，会处理这两种定义之间的不匹配。注意，下面的转换可能会惰性发生，因此如果 token 未被实际检查，这些转换可能不会发生。

r[macro.proc.token.conversion.to-proc_macro]
传递给过程宏时
- 所有多字符运算符都会被拆分为单个字符。
- 生命周期会被拆分为一个 `'` 字符和一个标识符。
- 关键字元变量 [`$crate`](macro.decl.hygiene.crate) 会作为单个标识符传递。
- 所有其他元变量替换都表示为其底层 token 流。
    - 在需要保留解析优先级时，这类 token 流可以被包装进带隐式定界符（[`Delimiter::None`](proc_macro::Delimiter::None)）的带定界符组（[`Group`](proc_macro::Group)）中。
    - `tt` 和 `ident` 替换绝不会被包装进这类组中，而始终表示为其底层 token 树。

r[macro.proc.token.conversion.from-proc_macro]
从过程宏发出时
- 适用时，标点字符会被粘合为多字符运算符。
- 与标识符连接的单引号 `'` 会被粘合为生命周期。
- 负字面量会被转换为两个 token（`-` 和该字面量），并且在需要保留解析优先级时，可能被包装进带隐式定界符（[`Delimiter::None`](proc_macro::Delimiter::None)）的带定界符组（[`Group`](proc_macro::Group)）中。

r[macro.proc.token.doc-comment]
注意，声明式宏和过程宏都不支持文档注释 token（例如 `/// Doc`），因此在传给宏时，它们总是会被转换为表示等价 `#[doc = r"str"]` 属性的 token 流。

[Attribute macros]: #the-proc_macro_attribute-attribute
[Cargo's build scripts]: ../cargo/reference/build-scripts.html
[Derive macros]: macro.proc.derive
[Function-like macros]: #the-proc_macro-attribute
[`$crate`]: macro.decl.hygiene.crate
[`Delimiter::None`]: proc_macro::Delimiter::None
[`Group`]: proc_macro::Group
[`TokenStream`]: proc_macro::TokenStream
[`TokenStream`s]: proc_macro::TokenStream
[`TokenTree`s]: proc_macro::TokenTree
[`derive` attribute]: attributes/derive.md
[`extern` blocks]: items/external-blocks.md
[`macro_rules`]: macros-by-example.md
[`proc_macro` crate]: proc_macro
[attribute]: attributes.md
[attributes]: attributes.md
[block]: expressions/block-expr.md
[crate type]: linkage.md
[derive macro helper attributes]: #derive-macro-helper-attributes
[enum]: items/enumerations.md
[expressions]: expressions.md
[function]: items/functions.md
[implementations]: items/implementations.md
[inert]: attributes.md#active-and-inert-attributes
[item]: items.md
[items]: items.md
[macro namespace]: names/namespaces.md
[module]: items/modules.md
[patterns]: patterns.md
[public]: visibility-and-privacy.md
[statements]: statements.md
[struct]: items/structs.md
[trait definitions]: items/traits.md
[type expressions]: types.md#type-expressions
[type]: types.md
[union]: items/unions.md
