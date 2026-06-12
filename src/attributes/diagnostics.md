r[attributes.diagnostics]
# 诊断属性

以下[属性](../attributes.md)用于在编译期间控制或生成诊断消息。

r[attributes.diagnostics.lint]
## Lint 检查属性

lint 检查命名一种可能不合需要的编码模式，例如不可达代码或缺失文档。

r[attributes.diagnostics.lint.level]
`allow`、`expect`、`warn`、`deny` 和 `forbid` 这些 lint 属性使用 [MetaListPaths] 语法来指定 lint 名称列表，以更改该属性所适用实体的 lint 级别。

对于任意 lint 检查 `C`：

r[attributes.diagnostics.lint.allow]
* `#[allow(C)]` 会覆盖对 `C` 的检查，使违规不会被报告。

r[attributes.diagnostics.lint.expect]
* `#[expect(C)]` 表示预期会发出 lint `C`。该属性会抑制 `C` 的发出；如果期望未满足，则会发出警告。

r[attributes.diagnostics.lint.warn]
* `#[warn(C)]` 会对 `C` 的违规发出警告，但继续编译。

r[attributes.diagnostics.lint.deny]
* `#[deny(C)]` 在遇到 `C` 的违规后发出错误，

r[attributes.diagnostics.lint.forbid]
* `#[forbid(C)]` 与 `deny(C)` 相同，但还禁止之后更改 lint 级别，

> [!NOTE]
> `rustc` 支持的 lint 检查及其默认设置可通过 `rustc -W help` 查看，并记录在 [rustc book](../../rustc/lints/index.html) 中。

```rust
pub mod m1 {
    // 此处会忽略缺失文档
    #[allow(missing_docs)]
    pub fn undocumented_one() -> i32 { 1 }

    // 此处缺失文档会发出警告
    #[warn(missing_docs)]
    pub fn undocumented_too() -> i32 { 2 }

    // 此处缺失文档会发出错误
    #[deny(missing_docs)]
    pub fn undocumented_end() -> i32 { 3 }
}
```

r[attributes.diagnostics.lint.override]
只要该级别不会试图更改已被 `forbid` 的 lint（`deny` 例外，它在 `forbid` 上下文内允许使用，但会被忽略），lint 属性就可以覆盖先前属性指定的级别。先前属性是指语法树中更高层级的属性，或同一实体上按源码从左到右顺序列出的较早属性。

此示例展示如何使用 `allow` 和 `warn` 开关某个特定检查：

```rust
#[warn(missing_docs)]
pub mod m2 {
    #[allow(missing_docs)]
    pub mod nested {
        // 此处会忽略缺失文档
        pub fn undocumented_one() -> i32 { 1 }

        // 此处缺失文档会发出警告，
        // 尽管上方有 allow。
        #[warn(missing_docs)]
        pub fn undocumented_two() -> i32 { 2 }
    }

    // 此处缺失文档会发出警告
    pub fn undocumented_too() -> i32 { 3 }
}
```

此示例展示如何使用 `forbid` 来禁止为该 lint 检查使用 `allow` 或 `expect`：

```rust,compile_fail
#[forbid(missing_docs)]
pub mod m3 {
    // 试图切换警告级别会在此处发出错误
    #[allow(missing_docs)]
    /// 返回 2。
    pub fn undocumented_too() -> i32 { 2 }
}
```

> [!NOTE]
> `rustc` 允许在[命令行](../../rustc/lints/levels.html#via-compiler-flag)上设置 lint 级别，也支持对已报告的 lint [设置上限](../../rustc/lints/levels.html#capping-lints)。

r[attributes.diagnostics.lint.reason]
### Lint 原因

所有 lint 属性都支持额外的 `reason` 参数，用于说明添加某个属性的上下文。如果该 lint 按定义的级别发出，此原因会作为 lint 消息的一部分显示。

```rust,edition2015,compile_fail
// 默认允许 `keyword_idents`。这里将其设为 deny，
// 以避免更新 edition 时迁移标识符。
#![deny(
    keyword_idents,
    reason = "we want to avoid these idents to be future compatible"
)]

// 此名称在 Rust 2015 edition 中是允许的。我们仍希望避免
// 这样做，以保持未来兼容性并避免困惑最终用户。
fn dyn() {}
```

这里还有一个示例，其中 lint 带有原因地被允许：

```rust
use std::path::PathBuf;

pub fn get_path() -> PathBuf {
    // `allow` 属性上的 `reason` 参数充当给读者看的文档。
    #[allow(unused_mut, reason = "this is only modified on some platforms")]
    let mut file_name = PathBuf::from("git");

    #[cfg(target_os = "windows")]
    file_name.set_extension("exe");

    file_name
}
```

r[attributes.diagnostics.expect]
### `#[expect]` 属性

r[attributes.diagnostics.expect.intro]
`#[expect(C)]` 属性会为 lint `C` 创建一个 lint 期望。如果同一位置的 `#[warn(C)]` 属性会导致 lint 发出，则该期望会被满足。如果由于 lint `C` 不会被发出而导致期望未满足，则会在该属性处发出 `unfulfilled_lint_expectations` lint。

```rust
fn main() {
    // 此 `#[expect]` 属性创建一个 lint 期望，即以下语句会发出
    // `unused_variables` lint。由于 `question` 变量被 `println!` 宏使用，
    // 此期望未满足。因此，会在该属性处发出
    // `unfulfilled_lint_expectations` lint。
    #[expect(unused_variables)]
    let question = "who lives in a pineapple under the sea?";
    println!("{question}");

    // 此 `#[expect]` 属性创建一个会被满足的 lint 期望，因为
    // `answer` 变量从未被使用。通常会发出的 `unused_variables` lint
    // 会被抑制。该语句或属性不会产生警告。
    #[expect(unused_variables)]
    let answer = "SpongeBob SquarePants!";
}
```

r[attributes.diagnostics.expect.fulfillment]
lint 期望只会由已被 `expect` 属性抑制的 lint 发出满足。如果作用域中的 lint 级别被 `allow` 或 `warn` 等其他级别属性修改，则该 lint 发出会按相应方式处理，而该期望仍保持未满足。

```rust
#[expect(unused_variables)]
fn select_song() {
    // 这会按 `warn` 属性定义，以 warn 级别发出 `unused_variables` lint。
    // 这不会满足函数上方的期望。
    #[warn(unused_variables)]
    let song_name = "Crab Rave";

    // `allow` 属性会抑制 lint 发出。这不会满足期望，
    // 因为它是被 `allow` 属性抑制的，而不是被函数上方的
    // `expect` 属性抑制的。
    #[allow(unused_variables)]
    let song_creator = "Noisestorm";

    // 此 `expect` 属性会在变量处抑制 `unused_variables` lint 的发出。
    // 函数上方的 `expect` 属性仍不会被满足，
    // 因为此 lint 发出已被局部 `expect` 属性抑制。
    #[expect(unused_variables)]
    let song_version = "Monstercat Release";
}
```

r[attributes.diagnostics.expect.independent]
如果 `expect` 属性包含多个 lint，则会分别对每个 lint 建立期望。对于 lint 组，只要组内有一个 lint 已被发出就足够了：

```rust
// 此期望会由函数内部的未使用值满足，
// 因为发出的 `unused_variables` lint 属于 `unused` lint 组。
#[expect(unused)]
pub fn thoughts() {
    let unused = "I'm running out of examples";
}

pub fn another_example() {
    // 此属性创建两个 lint 期望。`unused_mut` lint 会被
    // 抑制，并由此满足第一个期望。`unused_variables`
    // 不会被发出，因为该变量被使用了。因此该期望
    // 会未满足，并会发出警告。
    #[expect(unused_mut, unused_variables)]
    let mut link = "https://www.rust-lang.org/";

    println!("Welcome to our community: {link}");
}
```

> [!NOTE]
> `#[expect(unfulfilled_lint_expectations)]` 的行为目前定义为始终生成 `unfulfilled_lint_expectations` lint。

r[attributes.diagnostics.lint.group]
### Lint 组

lint 可以组织成具名组，以便一起调整相关 lint 的级别。使用具名组等价于列出该组内的所有 lint。

```rust,compile_fail
// 这允许 "unused" 组中的所有 lint。
#[allow(unused)]
// 这会把 "unused" 组中的 "unused_must_use" lint
// 覆盖为 deny。
#[deny(unused_must_use)]
fn example() {
    // 这不会生成警告，因为 "unused_variables"
    // lint 位于 "unused" 组中。
    let x = 1;
    // 这会生成错误，因为结果未被使用，且
    // "unused_must_use" 被标记为 "deny"。
    std::fs::remove_file("some_file"); // 错误：未使用必须使用的 `Result`
}
```

r[attributes.diagnostics.lint.group.warnings]
有一个名为 "warnings" 的特殊组，它包括所有处于 "warn" 级别的 lint。"warnings" 组会忽略属性顺序，并应用于实体中所有在其他情况下会发出警告的 lint。

```rust,compile_fail
# unsafe fn an_unsafe_fn() {}
// 这两个属性的顺序并不重要。
#[deny(warnings)]
// unsafe_code lint 通常默认为 "allow"。
#[warn(unsafe_code)]
fn example_err() {
    // 这是错误，因为 `unsafe_code` 警告已被
    // 提升到 "deny"。
    unsafe { an_unsafe_fn() } // 错误：使用 `unsafe` 块
}
```

r[attributes.diagnostics.lint.tool]
### 工具 lint 属性

r[attributes.diagnostics.lint.tool.intro]
工具 lint 允许使用带作用域的 lint，来对特定工具的 lint 设置 `allow`、`warn`、`deny` 或 `forbid`。

r[attributes.diagnostics.lint.tool.activation]
工具 lint 只有在关联工具处于活动状态时才会被检查。如果 `allow` 等 lint 属性引用了不存在的工具 lint，编译器在你使用该工具之前不会对这个不存在的 lint 发出警告。

除此之外，它们的工作方式与常规 lint 属性相同：

```rust
// 将整个 `pedantic` clippy lint 组设为 warn
#![warn(clippy::pedantic)]
// 静默来自 `filter_map` clippy lint 的警告
#![allow(clippy::filter_map)]

fn main() {
    // ...
}

// 仅对这个函数静默 `cmp_nan` clippy lint
#[allow(clippy::cmp_nan)]
fn foo() {
    // ...
}
```

> [!NOTE]
> `rustc` 目前识别 "[clippy](https://github.com/rust-lang/rust-clippy)" 和 "[rustdoc](../../rustdoc/lints.html)" 的工具 lint。

r[attributes.diagnostics.deprecated]
## `deprecated` 属性

r[attributes.diagnostics.deprecated.intro]
*`deprecated` 属性* 将项标记为已弃用。使用 `#[deprecated]` 项时，`rustc` 会发出警告。`rustdoc` 会显示项的弃用信息，包括 `since` 版本和 `note`（如果可用）。

r[attributes.diagnostics.deprecated.syntax]
`deprecated` 属性有几种形式：

- `deprecated` --- 发出通用消息。
- `deprecated = "message"` --- 在弃用消息中包含给定字符串。
- 带有两个可选字段的 [MetaListNameValueStr] 语法：
  - `since` --- 指定项被弃用时的版本号。`rustc` 目前不会解释该字符串，但 [Clippy](https://github.com/rust-lang/rust-clippy) 等外部工具可以检查该值的有效性。
  - `note` --- 指定应包含在弃用消息中的字符串。这通常用于提供关于弃用和首选替代方案的说明。

r[attributes.diagnostic.deprecated.allowed-positions]
`deprecated` 属性可以应用于任何[项](../items.md)、[trait 项](../items/traits.md)、[enum 变体](../items/enumerations.md)、[struct 字段](../items/structs.md)、[外部块项](../items/external-blocks.md)或[宏定义](../macros-by-example.md)。它不能应用于 [trait 实现项](../items/implementations.md#trait-implementations)。当应用于包含其他项的项（如[模块](../items/modules.md)或[实现](../items/implementations.md)）时，所有子项都会继承该弃用属性。
<!-- NOTE: It is only rejected for trait impl items
(AnnotationKind::Prohibited). In all other locations, it is silently ignored.
Tuple struct fields are ignored.
-->

下面是一个示例：

```rust
#[deprecated(since = "5.2.0", note = "foo was rarely used. Users should instead use bar")]
pub fn foo() {}

pub fn bar() {}
```

[RFC](https://github.com/rust-lang/rfcs/blob/master/text/1270-deprecation.md) 包含动机和更多细节。

[1270-deprecation.md]: https://github.com/rust-lang/rfcs/blob/master/text/1270-deprecation.md

<!-- template:attributes -->
r[attributes.diagnostics.must_use]
## `must_use` 属性

r[attributes.diagnostics.must_use.intro]
*`must_use` [属性](../attributes.md)* 标记一个应当被使用的值。

r[attributes.diagnostics.must_use.syntax]
`must_use` 属性使用 [MetaWord] 和 [MetaNameValueStr] 语法。

> [!EXAMPLE]
> ```rust
> #[must_use]
> fn use_me1() -> u8 { 0 }
>
> #[must_use = "explanation of why it should be used"]
> fn use_me2() -> u8 { 0 }
> ```

r[attributes.diagnostics.must_use.allowed-positions]
`must_use` 属性可以应用于：

- [struct](../items/structs.md)
- [enum](../items/enumerations.md)
- [union](../items/unions.md)
- [Function]
- [Trait]

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

r[attributes.diagnostics.must_use.duplicates]
`must_use` 属性在一个项上只能使用一次。

> [!NOTE]
> `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

r[attributes.diagnostics.must_use.message]
`must_use` 属性可以使用 [MetaNameValueStr] 语法包含一条消息，例如 `#[must_use = "example message"]`。该消息可以作为 lint 的一部分发出。

r[attributes.diagnostics.must_use.type]
当该属性应用于 [struct](../items/structs.md)、[enum](../items/enumerations.md) 或 [union](../items/unions.md) 时，如果[表达式语句](../statements.md#expression-statements)的[表达式](../expressions.md)具有该类型，则该使用会触发 `unused_must_use` lint。

```rust,compile_fail
#![deny(unused_must_use)]
#[must_use]
struct MustUse();
MustUse(); // 错误：未使用必须使用的值。
```

r[attributes.diagnostics.must_use.type.uninhabited]
作为 [attributes.diagnostics.must_use.type] 的例外，当 `E` 是[无值的](glossary.uninhabited)时，lint 不会针对 `Result<(), E>` 触发；当 `B` 是[无值的](glossary.uninhabited)时，也不会针对 `ControlFlow<B, ()>` 触发。来自外部 crate 的 `#[non_exhaustive]` 类型在此目的下不被认为是无值类型，因为它将来可能获得构造器。

```rust
#![deny(unused_must_use)]
# use core::ops::ControlFlow;
enum Empty {}
fn f1() -> Result<(), Empty> { Ok(()) }
f1(); // OK：`Empty` 是无值类型。
fn f2() -> ControlFlow<Empty, ()> { ControlFlow::Continue(()) }
f2(); // OK：`Empty` 是无值类型。
```

r[attributes.diagnostics.must_use.fn]
如果[表达式语句](../statements.md#expression-statements)的[表达式](../expressions.md)是[调用表达式](../expressions/call-expr.md)或[方法调用表达式](../expressions/method-call-expr.md)，且其函数操作数是应用了该属性的函数，则该使用会触发 `unused_must_use` lint。

```rust,compile_fail
#![deny(unused_must_use)]
#[must_use]
fn f() {}
f(); // 错误：未使用必须使用的返回值。
```

r[attributes.diagnostics.must_use.trait]
如果[表达式语句](../statements.md#expression-statements)的[表达式](../expressions.md)是[调用表达式](../expressions/call-expr.md)或[方法调用表达式](../expressions/method-call-expr.md)，且其函数操作数是一个返回 [impl trait](../types/impl-trait.md) 或 [dyn trait](../types/trait-object.md) 类型的函数，并且约束中的一个或多个 trait 标记了该属性，则该使用会触发 `unused_must_use` lint。

```rust,compile_fail
#![deny(unused_must_use)]
#[must_use]
trait Tr {}
impl Tr for () {}
fn f() -> impl Tr {}
f(); // 错误：未使用必须使用的实现者。
```

r[attributes.diagnostics.must_use.trait-function]
当该属性应用于 trait 声明中的函数时，如果[调用表达式](../expressions/call-expr.md)或[方法调用表达式](../expressions/method-call-expr.md)的函数操作数是该函数的实现，[attributes.diagnostics.must_use.fn] 中描述的规则也适用。

```rust,compile_fail
#![deny(unused_must_use)]
trait Tr {
    #[must_use]
    fn use_me(&self);
}

impl Tr for () {
    fn use_me(&self) {}
}

().use_me(); // 错误：未使用必须使用的返回值。
```

```rust,compile_fail
# #![deny(unused_must_use)]
# trait Tr {
#     #[must_use]
#     fn use_me(&self);
# }
#
# impl Tr for () {
#     fn use_me(&self) {}
# }
#
<() as Tr>::use_me(&());
//          ^^^^^^^^^^^ 错误：未使用必须使用的返回值。
```

r[attributes.diagnostics.must_use.block-expr]
在针对 [attributes.diagnostics.must_use.type]、[attributes.diagnostics.must_use.fn]、[attributes.diagnostics.must_use.trait] 和 [attributes.diagnostics.must_use.trait-function] 检查[表达式语句](../statements.md#expression-statements)的[表达式](../expressions.md)时，lint 会透过[块表达式](../expressions/block-expr.md)（包括 [`unsafe` 块](../expressions/block-expr.md#unsafe-blocks)和[带标签块表达式](../expressions/block-expr.md#labeled-block-expressions)）查看每个块的尾随表达式。这会递归应用于嵌套块表达式。

```rust,compile_fail
#![deny(unused_must_use)]
#[must_use]
fn f() {}

{ f() };        // 错误：lint 会透过块表达式。
unsafe { f() }; // 错误：lint 会透过 `unsafe` 块。
{ { f() } };    // 错误：lint 会透过嵌套块。
```

r[attributes.diagnostics.must_use.trait-impl-function]
当用于 trait 实现中的函数时，该属性没有效果。

```rust
#![deny(unused_must_use)]
trait Tr {
    fn f(&self);
}

impl Tr for () {
    #[must_use] // 这没有效果。
    fn f(&self) {}
}

().f(); // 正确。
```

> [!NOTE]
> `rustc` 会对 trait 实现中函数上的使用发出 lint。这在将来可能会变成错误。

r[attributes.diagnostics.must_use.wrapping-suppression]
> [!NOTE]
> 将 `#[must_use]` 函数的结果包裹在某些表达式中可能会抑制 [基于 fn 的检查][attributes.diagnostics.must_use.fn]，因为[表达式语句](../statements.md#expression-statements)的[表达式](../expressions.md)不是对 `#[must_use]` 函数的[调用表达式](../expressions/call-expr.md)或[方法调用表达式](../expressions/method-call-expr.md)。如果整体表达式的类型为 `#[must_use]`，[基于类型的检查][attributes.diagnostics.must_use.type] 仍然适用。
>
> ```rust
> #![deny(unused_must_use)]
> #[must_use]
> fn f() {}
>
> // 对于下面这些情况，基于 fn 的检查都不会触发，因为
> // 表达式语句的表达式不是对
> // `#[must_use]` 函数的调用。
> (f(),);                    // 表达式是元组，不是调用。
> Some(f());                 // 被调用者 `Some` 不是 `#[must_use]`。
> if true { f() } else {};   // 表达式是 `if`，不是调用。
> match true {               // 表达式是 `match`，不是调用。
>     _ => f()
> };
> ```
>
> ```rust,compile_fail
> #![deny(unused_must_use)]
> #[must_use]
> struct MustUse;
> fn g() -> MustUse { MustUse }
>
> // 尽管 `if` 表达式不是调用，基于类型的检查
> // 仍会触发，因为表达式的类型是 `MustUse`，而该类型具有
> // `#[must_use]` 属性。
> if true { g() } else { MustUse }; // 错误：必须使用。
> ```

r[attributes.diagnostics.must_use.underscore-idiom]
> [!NOTE]
> 当有意丢弃必须使用的值时，使用带 `_` 模式的 [let 语句](../statements.md#let-statements)或[解构赋值](expr.assign.destructure)是惯用做法。
>
> ```rust
> #![deny(unused_must_use)]
> #[must_use]
> fn f() {}
> let _ = f(); // 正确。
> _ = f(); // 正确。
> ```

r[attributes.diagnostic.namespace]
## `diagnostic` 工具属性命名空间

r[attributes.diagnostic.namespace.intro]
`#[diagnostic]` 属性命名空间用于放置影响编译时错误消息的属性。这些属性提供的提示不保证会被使用。

r[attributes.diagnostic.namespace.unknown-invalid-syntax]
此命名空间中的未知属性会被接受，但它们可能会因未使用属性而发出警告。此外，对已知属性的无效输入通常会是警告（详见属性定义）。这样做是为了允许未来添加或丢弃属性以及更改输入，从而允许作出更改，而不需要保持无意义的属性或选项继续可用。

r[attributes.diagnostic.on_unimplemented]
### `diagnostic::on_unimplemented` 属性

r[attributes.diagnostic.on_unimplemented.intro]
`#[diagnostic::on_unimplemented]` 属性是给编译器的提示，用于在需要某个 trait 但某个类型未实现它的场景中，补充通常会生成的错误消息。

r[attributes.diagnostic.on_unimplemented.allowed-positions]
该属性应放在 [trait 声明](../items/traits.md)上，不过位于其他位置也不是错误。

r[attributes.diagnostic.on_unimplemented.syntax]
该属性使用 [MetaListNameValueStr] 语法指定其输入，不过为同时提供向前和向后兼容性，任何格式错误的属性输入都不被视为错误。

r[attributes.diagnostic.on_unimplemented.keys]
以下键具有给定含义：
* `message` --- 顶层错误消息的文本。
* `label` --- 错误消息中在出错代码内联显示的标签文本。
* `note` --- 提供附加注释。

r[attributes.diagnostic.on_unimplemented.note-repetition]
`note` 选项可以出现多次，这会导致发出多条 note 消息。

r[attributes.diagnostic.on_unimplemented.repetition]
如果任何其他选项出现多次，相关选项的第一次出现指定实际使用的值。后续出现会生成警告。

r[attributes.diagnostic.on_unimplemented.unknown-keys]
任何未知键都会生成警告。

r[attributes.diagnostic.on_unimplemented.format-string]
三个选项都接受字符串作为实参，并使用与 [`std::fmt`] 字符串相同的格式化方式解释。

r[attributes.diagnostic.on_unimplemented.format-parameters]
带有给定命名参数的格式参数会被替换为以下文本：
* `{Self}` --- 实现该 trait 的类型名称。
* `{` _GenericParameterName_ `}` --- 给定泛型参数对应的泛型实参类型名称。

r[attributes.diagnostic.on_unimplemented.invalid-formats]
任何其他格式参数都会生成警告，但除此之外会按原样包含在字符串中。

r[attributes.diagnostic.on_unimplemented.invalid-string]
无效的格式字符串可能生成警告，但除此之外是允许的，不过可能不会按预期显示。格式说明符可能生成警告，但除此之外会被忽略。

在这个示例中：

```rust,compile_fail,E0277
#[diagnostic::on_unimplemented(
    message = "My Message for `ImportantTrait<{A}>` implemented for `{Self}`",
    label = "My Label",
    note = "Note 1",
    note = "Note 2"
)]
trait ImportantTrait<A> {}

fn use_my_trait(_: impl ImportantTrait<i32>) {}

fn main() {
    use_my_trait(String::new());
}
```

编译器可能生成如下所示的错误消息：

```text
error[E0277]: My Message for `ImportantTrait<i32>` implemented for `String`
  --> src/main.rs:14:18
   |
14 |     use_my_trait(String::new());
   |     ------------ ^^^^^^^^^^^^^ My Label
   |     |
   |     required by a bound introduced by this call
   |
   = help: the trait `ImportantTrait<i32>` is not implemented for `String`
   = note: Note 1
   = note: Note 2
```

r[attributes.diagnostic.do_not_recommend]
### `diagnostic::do_not_recommend` 属性

r[attributes.diagnostic.do_not_recommend.intro]
`#[diagnostic::do_not_recommend]` 属性是给编译器的提示，使其不要将带注解的 trait 实现作为诊断消息的一部分显示。

> [!NOTE]
> 如果你知道推荐通常对程序员没有用，抑制该推荐可能很有用。这经常发生在宽泛的 blanket impl 中。推荐可能会把程序员引向错误方向，或者该 trait 实现可能是你不想暴露的内部细节，或者程序员可能无法满足这些约束。
>
> 例如，在关于某个类型未实现所需 trait 的错误消息中，编译器可能找到一个 trait 实现：如果不是该 trait 实现中的特定约束，它本可以满足要求。编译器可能告诉用户存在一个 impl，但问题在于该 trait 实现中的约束。可以使用 `#[diagnostic::do_not_recommend]` 属性告诉编译器 *不要* 把该 trait 实现告诉用户，而只是告诉用户该类型没有实现所需 trait。

r[attributes.diagnostic.do_not_recommend.allowed-positions]
该属性应放在 [trait 实现项](../items/implementations.md#trait-implementations)上，不过位于其他位置也不是错误。

r[attributes.diagnostic.do_not_recommend.syntax]
该属性不接受任何实参，不过非预期实参不被视为错误。

在下面的示例中，有一个名为 `AsExpression` 的 trait，用于把任意类型转换为 SQL 库中使用的 `Expression` 类型。有一个名为 `check` 的方法，它接受一个 `AsExpression`。

```rust,compile_fail,E0277
# pub trait Expression {
#     type SqlType;
# }
#
# pub trait AsExpression<ST> {
#     type Expression: Expression<SqlType = ST>;
# }
#
# pub struct Text;
# pub struct Integer;
#
# pub struct Bound<T>(T);
# pub struct SelectInt;
#
# impl Expression for SelectInt {
#     type SqlType = Integer;
# }
#
# impl<T> Expression for Bound<T> {
#     type SqlType = T;
# }
#
# impl AsExpression<Integer> for i32 {
#     type Expression = Bound<Integer>;
# }
#
# impl AsExpression<Text> for &'_ str {
#     type Expression = Bound<Text>;
# }
#
# impl<T> Foo for T where T: Expression {}

// 取消注释此行以更改推荐。
// #[diagnostic::do_not_recommend]
impl<T, ST> AsExpression<ST> for T
where
    T: Expression<SqlType = ST>,
{
    type Expression = T;
}

trait Foo: Expression + Sized {
    fn check<T>(&self, _: T) -> <T as AsExpression<<Self as Expression>::SqlType>>::Expression
    where
        T: AsExpression<Self::SqlType>,
    {
        todo!()
    }
}

fn main() {
    SelectInt.check("bar");
}
```

`SelectInt` 类型的 `check` 方法期望一个 `Integer` 类型。用 i32 类型调用它可以工作，因为该值会通过 `AsExpression` trait 转换为 `Integer`。然而，用字符串调用它则不行，并会生成一个可能如下所示的错误：

```text
error[E0277]: the trait bound `&str: Expression` is not satisfied
  --> src/main.rs:53:15
   |
53 |     SelectInt.check("bar");
   |               ^^^^^ the trait `Expression` is not implemented for `&str`
   |
   = help: the following other types implement trait `Expression`:
             Bound<T>
             SelectInt
note: required for `&str` to implement `AsExpression<Integer>`
  --> src/main.rs:45:13
   |
45 | impl<T, ST> AsExpression<ST> for T
   |             ^^^^^^^^^^^^^^^^     ^
46 | where
47 |     T: Expression<SqlType = ST>,
   |        ------------------------ unsatisfied trait bound introduced here
```

通过向 `AsExpression` 的 blanket `impl` 添加 `#[diagnostic::do_not_recommend]` 属性，消息会变为：

```text
error[E0277]: the trait bound `&str: AsExpression<Integer>` is not satisfied
  --> src/main.rs:53:15
   |
53 |     SelectInt.check("bar");
   |               ^^^^^ the trait `AsExpression<Integer>` is not implemented for `&str`
   |
   = help: the trait `AsExpression<Integer>` is not implemented for `&str`
           but trait `AsExpression<Text>` is implemented for it
   = help: for that trait implementation, expected `Text`, found `Integer`
```

第一条错误消息包含一段有些令人困惑的错误消息，涉及 `&str` 与 `Expression` 的关系，以及 blanket impl 中未满足的 trait 约束。添加 `#[diagnostic::do_not_recommend]` 后，它在推荐中不再考虑该 blanket impl。该消息应该会清楚一些，并指出字符串不能转换为 `Integer`。

[Clippy]: https://github.com/rust-lang/rust-clippy
[`Drop`]: ../special-types-and-traits.md#drop
[`unsafe` blocks]: ../expressions/block-expr.md#unsafe-blocks
[attribute]: ../attributes.md
[attributes]: ../attributes.md
[block expression]: ../expressions/block-expr.md
[call expression]: ../expressions/call-expr.md
[destructuring assignment]: expr.assign.destructure
[method call expression]: ../expressions/method-call-expr.md
[dyn trait]: ../types/trait-object.md
[enum variant]: ../items/enumerations.md
[enumeration]: ../items/enumerations.md
[expression statement]: ../statements.md#expression-statements
[expression]: ../expressions.md
[external block item]: ../items/external-blocks.md
[functions]: ../items/functions.md
[impl trait]: ../types/impl-trait.md
[implementation]: ../items/implementations.md
[item]: ../items.md
[labeled block expressions]: ../expressions/block-expr.md#labeled-block-expressions
[let statement]: ../statements.md#let-statements
[macro definition]: ../macros-by-example.md
[module]: ../items/modules.md
[rustc book]: ../../rustc/lints/index.html
[rustc-lint-caps]: ../../rustc/lints/levels.html#capping-lints
[rustc-lint-cli]: ../../rustc/lints/levels.html#via-compiler-flag
[rustdoc]: ../../rustdoc/lints.html
[struct field]: ../items/structs.md
[struct]: ../items/structs.md
[external block]: ../items/external-blocks.md
[trait declaration]: ../items/traits.md
[trait item]: ../items/traits.md
[trait-impl]: ../items/implementations.md#trait-implementations
[traits]: ../items/traits.md
[uninhabited]: glossary.uninhabited
[union]: ../items/unions.md
