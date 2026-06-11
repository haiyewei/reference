r[names.preludes]
# Prelude

r[names.preludes.intro]
<em>prelude</em>（预导入集）是一组会自动引入到 crate 中每个模块作用域内的名称。

这些 prelude 名称并不是模块本身的一部分：它们会在[名称解析](name-resolution.md)期间被隐式查询。例如，尽管像 [`Box`](../../alloc/boxed/struct.Box.html) 这样的名称在每个模块中都在作用域内，但你不能用 `self::Box` 指代它，因为它不是当前模块的成员。

r[names.preludes.kinds]
存在几种不同的 prelude：

- [Standard library prelude]
- [Extern prelude](#extern-prelude)
- [语言 prelude](#language-prelude)
- [`macro_use` prelude](#macro_use-prelude)
- [工具 prelude](#tool-prelude)

r[names.preludes.std]
## 标准库 prelude

r[names.preludes.std.intro]
每个 crate 都有一个标准库 prelude，它由单个标准库模块中的名称组成。

r[names.preludes.std.module]
所使用的模块取决于 crate 的 edition，以及是否对该 crate 应用了 [`no_std` 属性](#the-no_std-attribute)：

 Edition | 未应用 `no_std` | 已应用 `no_std`
--------| --------------------------- | ----------------------------
 2015 | [`std::prelude::rust_2015`](../../std/prelude/rust_2015/index.html) | [`core::prelude::rust_2015`](../../core/prelude/rust_2015/index.html)
 2018 | [`std::prelude::rust_2018`](../../std/prelude/rust_2018/index.html) | [`core::prelude::rust_2018`](../../core/prelude/rust_2018/index.html)
 2021 | [`std::prelude::rust_2021`](../../std/prelude/rust_2021/index.html) | [`core::prelude::rust_2021`](../../core/prelude/rust_2021/index.html)
 2024 | [`std::prelude::rust_2024`](../../std/prelude/rust_2024/index.html) | [`core::prelude::rust_2024`](../../core/prelude/rust_2024/index.html)

> [!NOTE]
> [`std::prelude::rust_2015`](../../std/prelude/rust_2015/index.html) 和 [`std::prelude::rust_2018`](../../std/prelude/rust_2018/index.html) 与 [`std::prelude::v1`](../../std/prelude/v1/index.html) 具有相同的内容。
>
> [`core::prelude::rust_2015`](../../core/prelude/rust_2015/index.html) 和 [`core::prelude::rust_2018`](../../core/prelude/rust_2018/index.html) 与 [`core::prelude::v1`](../../core/prelude/v1/index.html) 具有相同的内容。

> [!NOTE]
> When one of [`core::panic!`] or [`std::panic!`] is brought into scope due to the [standard library prelude], and a user-written [glob import] brings the other into scope, `rustc` currently allows use of `panic!`, even though it is ambiguous. The user-written glob import takes precedence to resolve this ambiguity.
>
> 有关详情，请参见 [names.resolution.expansion.imports.ambiguity.panic-hack](name-resolution.md#r-names.resolution.expansion.imports.ambiguity.panic-hack)。

r[names.preludes.extern]
## Extern prelude

r[names.preludes.extern.intro]
在根模块中用 [`extern crate`](../items/extern-crates.md) 导入的外部 crate，或提供给编译器的外部 crate（例如通过 `rustc` 的 `--extern` 标志提供），会被加入<em>extern prelude</em>。如果使用诸如 `extern crate orig_name as new_name` 的别名导入，则改为将符号 `new_name` 加入该 prelude。

r[names.preludes.extern.core]
[`core`](../../core/index.html) crate 总是会被加入 extern prelude。

r[names.preludes.extern.std]
只要 crate 根中未指定 [`no_std` 属性](#the-no_std-attribute)，[`std`](../../std/index.html) crate 就会被加入。

r[names.preludes.extern.edition2018]
> [!EDITION-2018]
> 在 2015 edition 中，extern prelude 中的 crate 不能通过 [use 声明](../items/use-declarations.md)引用，因此通常的标准做法是包含 `extern crate` 声明，以将它们引入作用域。
>
> 从 2018 edition 开始，[use 声明](../items/use-declarations.md)可以引用 extern prelude 中的 crate，因此使用 `extern crate` 被认为不符合惯用写法。

> [!NOTE]
> 随 `rustc` 一同提供的其他 crate，例如 [`alloc`](../../alloc/index.html) 和 [`test`](../../test/index.html)，在使用 Cargo 时不会通过 `--extern` 标志自动包含进来。即使在 2018 edition 中，也必须用 `extern crate` 声明将它们引入作用域。
>
> ```rust
> extern crate alloc;
> use alloc::rc::Rc;
> ```
>
> Cargo 确实会把 `proc_macro` 引入 extern prelude，但仅限 proc-macro crate。

<!-- See https://github.com/rust-lang/rust/issues/57288 for more about the alloc/test limitation. -->

<!-- template:attributes -->
r[names.preludes.extern.no_std]
### `no_std` 属性

r[names.preludes.extern.no_std.intro]
_`no_std` [属性](../attributes.md#r-attributes)_ 会使 [`std`](../../std/index.html) crate 不再被自动链接，并使[标准库 prelude](preludes.md#r-names.preludes.std)改为使用 `core` prelude。

> [!EXAMPLE]
> <!-- ignore: test infrastructure can't handle no_std -->
> ```rust,ignore
> #![no_std]
> ```

> [!NOTE]
> 当 crate 面向不支持标准库的平台，或者有意不使用标准库能力时，使用 `no_std` 很有用。这些能力主要包括动态内存分配（例如 `Box` 和 `Vec`）以及文件和网络能力（例如 `std::fs` 和 `std::io`）。

> [!WARNING]
> 使用 `no_std` 并不会阻止标准库被链接。在 crate 或其某个依赖中编写 `extern crate std` 仍然是有效的；这会导致编译器将 `std` crate 链接到程序中。

r[names.preludes.extern.no_std.syntax]
`no_std` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

r[names.preludes.extern.no_std.allowed-positions]
`no_std` 属性只能应用于 crate 根。

r[names.preludes.extern.no_std.duplicates]
`no_std` 属性可以在一个形式上使用任意多次。

> [!NOTE]
> `rustc` 会对第一次之后的任何使用发出 lint。

r[names.preludes.extern.no_std.module]
`no_std` 属性会更改[标准库 prelude](preludes.md#r-names.preludes.std)，使其使用 `core` prelude 而不是 `std` prelude。

r[names.preludes.extern.no_std.edition2018]
> [!EDITION-2018]
> 在 2018 edition 之前，`std` 默认会被注入 crate 根。如果指定了 `no_std`，则改为注入 `core`。从 2018 edition 开始，无论是否指定 `no_std`，二者都不会被注入 crate 根。

r[names.preludes.lang]
## 语言 prelude

r[names.preludes.lang.intro]
语言 prelude 包含语言内建的类型和属性名称。语言 prelude 始终在作用域内。

r[names.preludes.lang.entities]
它包括以下内容：

* [类型命名空间](namespaces.md)
    * [布尔类型](../types/boolean.md) --- `bool`
    * [`char`](../types/char.md)
    * [`str`](../types/str.md)
    * [整数类型](../types/numeric.md#integer-types) --- `i8`, `i16`, `i32`, `i64`, `i128`, `u8`, `u16`, `u32`, `u64`, `u128`
    * [机器相关整数类型](../types/numeric.md#machine-dependent-integer-types) --- `usize` 和 `isize`
    * [浮点类型](../types/numeric.md#floating-point-types) --- `f32` 和 `f64`
* [宏命名空间](namespaces.md)
    * [内置属性](../attributes.md#built-in-attributes-index)
    * [内建派生宏](../attributes/derive.md#r-attributes.derive.built-in)

r[names.preludes.macro_use]
## `macro_use` prelude

r[names.preludes.macro_use.intro]
`macro_use` prelude 包含来自外部 crate 的宏，这些宏是由应用于 [`extern crate`](../items/extern-crates.md) 的 [`macro_use` 属性](../macros-by-example.md#the-macro_use-attribute)导入的。

r[names.preludes.tool]
## 工具 prelude

r[names.preludes.tool.intro]
工具 prelude 包含[类型命名空间](namespaces.md)中外部工具的工具名称。更多详情见[工具属性](../attributes.md#tool-attributes)一节。

<!-- template:attributes -->
r[names.preludes.no_implicit_prelude]
## `no_implicit_prelude` 属性

r[names.preludes.no_implicit_prelude.intro]
_`no_implicit_prelude` [属性](../attributes.md)_ 用于阻止隐式 prelude 被引入作用域。

> [!EXAMPLE]
> ```rust
> // 该属性可以应用于 crate 根，以影响
> // 所有模块。
> #![no_implicit_prelude]
>
> // 或者可以将其应用于某个模块，从而只影响该模块
> // 及其后代。
> #[no_implicit_prelude]
> mod example {
>     // ...
> }
> ```

r[names.preludes.no_implicit_prelude.syntax]
`no_implicit_prelude` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

r[names.preludes.no_implicit_prelude.allowed-positions]
`no_implicit_prelude` 属性只能应用于 crate 或模块。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

r[names.preludes.no_implicit_prelude.duplicates]
`no_implicit_prelude` 属性可以在一个形式上使用任意多次。

> [!NOTE]
> `rustc` 会对第一次之后的任何使用发出 lint。

r[names.preludes.no_implicit_prelude.excluded-preludes]
`no_implicit_prelude` 属性会阻止[标准库 prelude](preludes.md#r-names.preludes.std)、[extern prelude](#extern-prelude)、[`macro_use` prelude](#macro_use-prelude)和[工具 prelude](#tool-prelude)被引入该模块及其后代的作用域。

r[names.preludes.no_implicit_prelude.implicitly-imported-macros]
> [!NOTE]
> 尽管有 `#![no_implicit_prelude]`，`rustc` 目前仍会将某些宏隐式引入作用域。这些宏是：
>
> - [`assert!`] - [`cfg!`] - [`cfg_select!`] - [`column!`] - [`compile_error!`] - [`concat!`] - [`concat_bytes!`] - [`env!`] - [`file!`] - [`format_args!`] - [`include!`] - [`include_bytes!`] - [`include_str!`] - [`line!`] - [`module_path!`] - [`option_env!`] - [`panic!`] - [`stringify!`] - [`unreachable!`]
>
> 例如，这可以工作：
>
> ```rust
> #![no_implicit_prelude]
> fn main() { assert!(true); }
> ```
>
> 不要依赖此行为；它将来可能会被移除。使用 `#![no_implicit_prelude]` 时，始终要显式地将你需要的项引入作用域。
>
> 有关详情，请参见 [Rust PR #62086](https://github.com/rust-lang/rust/pull/62086) 和 [Rust PR #139493](https://github.com/rust-lang/rust/pull/139493)。

r[names.preludes.no_implicit_prelude.lang]
`no_implicit_prelude` 属性不会影响[语言 prelude](#language-prelude)。

r[names.preludes.no_implicit_prelude.edition2018]
> [!EDITION-2018]
> 在 2015 edition 中，`no_implicit_prelude` 属性不会影响 [`macro_use` prelude](#macro_use-prelude)，并且标准库导出的所有宏仍会包含在 `macro_use` prelude 中。从 2018 edition 开始，该属性确实会移除 `macro_use` prelude。

[`char`]: ../types/char.md
[`extern crate`]: ../items/extern-crates.md
[`macro_use` attribute]: ../macros-by-example.md#the-macro_use-attribute
[`macro_use` prelude]: #macro_use-prelude
[`no_std` attribute]: #the-no_std-attribute
[`str`]: ../types/str.md
[attribute]: ../attributes.md
[Boolean type]: ../types/boolean.md
[Built-in attributes]: ../attributes.md#built-in-attributes-index
[extern prelude]: #extern-prelude
[floating-point types]: ../types/numeric.md#floating-point-types
[glob import]: items.use.glob
[Integer types]: ../types/numeric.md#integer-types
[Language prelude]: #language-prelude
[Machine-dependent integer types]: ../types/numeric.md#machine-dependent-integer-types
[Macro namespace]: namespaces.md
[name resolution]: name-resolution.md
[standard library prelude]: names.preludes.std
[tool attributes]: ../attributes.md#tool-attributes
[Tool prelude]: #tool-prelude
[Type namespace]: namespaces.md
[use declarations]: ../items/use-declarations.md
