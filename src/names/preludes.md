<div class="rule" id="r-names.preludes"><a class="rule-link" href="#r-names.preludes" title="names.preludes"><span>[names<wbr>.preludes]</span></a>
</div>

# Prelude

<div class="rule" id="r-names.preludes.intro"><a class="rule-link" href="#r-names.preludes.intro" title="names.preludes.intro"><span>[names<wbr>.preludes<wbr>.intro]</span></a>
</div>

<em>prelude</em>（预导入集）是一组会自动引入到 crate 中每个模块作用域内的名称。

这些 prelude 名称并不是模块本身的一部分：它们会在[名称解析](name-resolution.md)期间被隐式查询。例如，尽管像 [`Box`](../../alloc/boxed/struct.Box.html) 这样的名称在每个模块中都在作用域内，但你不能用 `self::Box` 指代它，因为它不是当前模块的成员。

<div class="rule" id="r-names.preludes.kinds"><a class="rule-link" href="#r-names.preludes.kinds" title="names.preludes.kinds"><span>[names<wbr>.preludes<wbr>.kinds]</span></a>
</div>

存在几种不同的 prelude：

- [标准库 prelude](preludes.md#r-names.preludes.std)
- [Extern prelude](#extern-prelude)
- [语言 prelude](#language-prelude)
- [`macro_use` prelude](#macro_use-prelude)
- [工具 prelude](#tool-prelude)

<div class="rule" id="r-names.preludes.std"><a class="rule-link" href="#r-names.preludes.std" title="names.preludes.std"><span>[names<wbr>.preludes<wbr>.std]</span></a>
</div>

## 标准库 prelude

<div class="rule" id="r-names.preludes.std.intro"><a class="rule-link" href="#r-names.preludes.std.intro" title="names.preludes.std.intro"><span>[names<wbr>.preludes<wbr>.std<wbr>.intro]</span></a>
</div>

每个 crate 都有一个标准库 prelude，它由单个标准库模块中的名称组成。

<div class="rule" id="r-names.preludes.std.module"><a class="rule-link" href="#r-names.preludes.std.module" title="names.preludes.std.module"><span>[names<wbr>.preludes<wbr>.std<wbr>.module]</span></a>
</div>

所使用的模块取决于 crate 的 edition，以及是否对该 crate 应用了 [`no_std` 属性](#the-no_std-attribute)：

|Edition|未应用 `no_std`|已应用 `no_std`|
|-------|------------|------------|
|2015|[`std::prelude::rust_2015`](../../std/prelude/rust_2015/index.html)|[`core::prelude::rust_2015`](../../core/prelude/rust_2015/index.html)|
|2018|[`std::prelude::rust_2018`](../../std/prelude/rust_2018/index.html)|[`core::prelude::rust_2018`](../../core/prelude/rust_2018/index.html)|
|2021|[`std::prelude::rust_2021`](../../std/prelude/rust_2021/index.html)|[`core::prelude::rust_2021`](../../core/prelude/rust_2021/index.html)|
|2024|[`std::prelude::rust_2024`](../../std/prelude/rust_2024/index.html)|[`core::prelude::rust_2024`](../../core/prelude/rust_2024/index.html)|

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [`std::prelude::rust_2015`](../../std/prelude/rust_2015/index.html) 和 [`std::prelude::rust_2018`](../../std/prelude/rust_2018/index.html) 与 [`std::prelude::v1`](../../std/prelude/v1/index.html) 具有相同的内容。
 > 
 > [`core::prelude::rust_2015`](../../core/prelude/rust_2015/index.html) 和 [`core::prelude::rust_2018`](../../core/prelude/rust_2018/index.html) 与 [`core::prelude::v1`](../../core/prelude/v1/index.html) 具有相同的内容。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 当 [`core::panic!`](../../core/macro.panic.html) 或 [`std::panic!`](../../std/macro.panic.html) 中的一个因[标准库 prelude](preludes.md#r-names.preludes.std)而被引入作用域，而用户编写的 [glob 导入](../items/use-declarations.md#r-items.use.glob)又将另一个引入作用域时，即使这存在歧义，`rustc` 目前也允许使用 `panic!`。用户编写的 glob 导入优先用于解析此歧义。
 > 
 > 有关详情，请参见 [names.resolution.expansion.imports.ambiguity.panic-hack](name-resolution.md#r-names.resolution.expansion.imports.ambiguity.panic-hack)。

</div>

<div class="rule" id="r-names.preludes.extern"><a class="rule-link" href="#r-names.preludes.extern" title="names.preludes.extern"><span>[names<wbr>.preludes<wbr>.extern]</span></a>
</div>

## Extern prelude

<div class="rule" id="r-names.preludes.extern.intro"><a class="rule-link" href="#r-names.preludes.extern.intro" title="names.preludes.extern.intro"><span>[names<wbr>.preludes<wbr>.extern<wbr>.intro]</span></a>
</div>

在根模块中用 [`extern crate`](../items/extern-crates.md) 导入的外部 crate，或提供给编译器的外部 crate（例如通过 `rustc` 的 `--extern` 标志提供），会被加入<em>extern prelude</em>。如果使用诸如 `extern crate orig_name as new_name` 的别名导入，则改为将符号 `new_name` 加入该 prelude。

<div class="rule" id="r-names.preludes.extern.core"><a class="rule-link" href="#r-names.preludes.extern.core" title="names.preludes.extern.core"><span>[names<wbr>.preludes<wbr>.extern<wbr>.core]</span></a>
</div>

[`core`](../../core/index.html) crate 总是会被加入 extern prelude。

<div class="rule" id="r-names.preludes.extern.std"><a class="rule-link" href="#r-names.preludes.extern.std" title="names.preludes.extern.std"><span>[names<wbr>.preludes<wbr>.extern<wbr>.std]</span></a>
</div>

只要 crate 根中未指定 [`no_std` 属性](#the-no_std-attribute)，[`std`](../../std/index.html) crate 就会被加入。

<div class="rule" id="r-names.preludes.extern.edition2018"><a class="rule-link" href="#r-names.preludes.extern.edition2018" title="names.preludes.extern.edition2018"><span>[names<wbr>.preludes<wbr>.extern<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2015 edition 中，extern prelude 中的 crate 不能通过 [use 声明](../items/use-declarations.md)引用，因此通常的标准做法是包含 `extern crate` 声明，以将它们引入作用域。
 > 
 > 从 2018 edition 开始，[use 声明](../items/use-declarations.md)可以引用 extern prelude 中的 crate，因此使用 `extern crate` 被认为不符合惯用写法。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 随 `rustc` 一同提供的其他 crate，例如 [`alloc`](../../alloc/index.html) 和 [`test`](../../test/index.html)，在使用 Cargo 时不会通过 `--extern` 标志自动包含进来。即使在 2018 edition 中，也必须用 `extern crate` 声明将它们引入作用域。
 > 
 > ```rust
 > extern crate alloc;
 > use alloc::rc::Rc;
 > ```
 > 
 > Cargo 确实会把 `proc_macro` 引入 extern prelude，但仅限 proc-macro crate。

</div>

<!--
See https://github.com/rust-lang/rust/issues/57288 for more about the alloc/test limitation.
-->

<!-- template:attributes -->

<div class="rule" id="r-names.preludes.extern.no_std"><a class="rule-link" href="#r-names.preludes.extern.no_std" title="names.preludes.extern.no_std"><span>[names<wbr>.preludes<wbr>.extern<wbr>.no_std]</span></a>
</div>

### `no_std` 属性

<div class="rule" id="r-names.preludes.extern.no_std.intro"><a class="rule-link" href="#r-names.preludes.extern.no_std.intro" title="names.preludes.extern.no_std.intro"><span>[names<wbr>.preludes<wbr>.extern<wbr>.no_std<wbr>.intro]</span></a>
</div>

_`no_std` [属性](../attributes.md#r-attributes)_ 会使 [`std`](../../std/index.html) crate 不再被自动链接，并使[标准库 prelude](preludes.md#r-names.preludes.std)改为使用 `core` prelude。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > <!-- ignore: test infrastructure can't handle no_std -->
 > 
 > ```rust,ignore
 > #![no_std]
 > ```

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 当 crate 面向不支持标准库的平台，或者有意不使用标准库能力时，使用 `no_std` 很有用。这些能力主要包括动态内存分配（例如 `Box` 和 `Vec`）以及文件和网络能力（例如 `std::fs` 和 `std::io`）。

</div>

<div class="alert alert-warning">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
 > 
 > 使用 `no_std` 并不会阻止标准库被链接。在 crate 或其某个依赖中编写 `extern crate std` 仍然是有效的；这会导致编译器将 `std` crate 链接到程序中。

</div>

<div class="rule" id="r-names.preludes.extern.no_std.syntax"><a class="rule-link" href="#r-names.preludes.extern.no_std.syntax" title="names.preludes.extern.no_std.syntax"><span>[names<wbr>.preludes<wbr>.extern<wbr>.no_std<wbr>.syntax]</span></a>
</div>

`no_std` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-names.preludes.extern.no_std.allowed-positions"><a class="rule-link" href="#r-names.preludes.extern.no_std.allowed-positions" title="names.preludes.extern.no_std.allowed-positions"><span>[names<wbr>.preludes<wbr>.extern<wbr>.no_std<wbr>.allowed-positions]</span></a>
</div>

`no_std` 属性只能应用于 crate 根。

<div class="rule" id="r-names.preludes.extern.no_std.duplicates"><a class="rule-link" href="#r-names.preludes.extern.no_std.duplicates" title="names.preludes.extern.no_std.duplicates"><span>[names<wbr>.preludes<wbr>.extern<wbr>.no_std<wbr>.duplicates]</span></a>
</div>

`no_std` 属性可以在一个形式上使用任意多次。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次之后的任何使用发出 lint。

</div>

<div class="rule" id="r-names.preludes.extern.no_std.module"><a class="rule-link" href="#r-names.preludes.extern.no_std.module" title="names.preludes.extern.no_std.module"><span>[names<wbr>.preludes<wbr>.extern<wbr>.no_std<wbr>.module]</span></a>
</div>

`no_std` 属性会更改[标准库 prelude](preludes.md#r-names.preludes.std)，使其使用 `core` prelude 而不是 `std` prelude。

<div class="rule" id="r-names.preludes.extern.no_std.edition2018"><a class="rule-link" href="#r-names.preludes.extern.no_std.edition2018" title="names.preludes.extern.no_std.edition2018"><span>[names<wbr>.preludes<wbr>.extern<wbr>.no_std<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2018 edition 之前，`std` 默认会被注入 crate 根。如果指定了 `no_std`，则改为注入 `core`。从 2018 edition 开始，无论是否指定 `no_std`，二者都不会被注入 crate 根。

</div>

<div class="rule" id="r-names.preludes.lang"><a class="rule-link" href="#r-names.preludes.lang" title="names.preludes.lang"><span>[names<wbr>.preludes<wbr>.lang]</span></a>
</div>

## 语言 prelude

<div class="rule" id="r-names.preludes.lang.intro"><a class="rule-link" href="#r-names.preludes.lang.intro" title="names.preludes.lang.intro"><span>[names<wbr>.preludes<wbr>.lang<wbr>.intro]</span></a>
</div>

语言 prelude 包含语言内建的类型和属性名称。语言 prelude 始终在作用域内。

<div class="rule" id="r-names.preludes.lang.entities"><a class="rule-link" href="#r-names.preludes.lang.entities" title="names.preludes.lang.entities"><span>[names<wbr>.preludes<wbr>.lang<wbr>.entities]</span></a>
</div>

它包括以下内容：

- [类型命名空间](namespaces.md)
  - [布尔类型](../types/boolean.md) --- `bool`
  - [`char`](../types/char.md)
  - [`str`](../types/str.md)
  - [整数类型](../types/numeric.md#integer-types) --- `i8`, `i16`, `i32`, `i64`, `i128`, `u8`, `u16`, `u32`, `u64`, `u128`
  - [机器相关整数类型](../types/numeric.md#machine-dependent-integer-types) --- `usize` 和 `isize`
  - [浮点类型](../types/numeric.md#floating-point-types) --- `f32` 和 `f64`
- [宏命名空间](namespaces.md)
  - [内置属性](../attributes.md#built-in-attributes-index)
  - [内建派生宏](../attributes/derive.md#r-attributes.derive.built-in)

<div class="rule" id="r-names.preludes.macro_use"><a class="rule-link" href="#r-names.preludes.macro_use" title="names.preludes.macro_use"><span>[names<wbr>.preludes<wbr>.macro_use]</span></a>
</div>

## `macro_use` prelude

<div class="rule" id="r-names.preludes.macro_use.intro"><a class="rule-link" href="#r-names.preludes.macro_use.intro" title="names.preludes.macro_use.intro"><span>[names<wbr>.preludes<wbr>.macro_use<wbr>.intro]</span></a>
</div>

`macro_use` prelude 包含来自外部 crate 的宏，这些宏是由应用于 [`extern crate`](../items/extern-crates.md) 的 [`macro_use` 属性](../macros-by-example.md#the-macro_use-attribute)导入的。

<div class="rule" id="r-names.preludes.tool"><a class="rule-link" href="#r-names.preludes.tool" title="names.preludes.tool"><span>[names<wbr>.preludes<wbr>.tool]</span></a>
</div>

## 工具 prelude

<div class="rule" id="r-names.preludes.tool.intro"><a class="rule-link" href="#r-names.preludes.tool.intro" title="names.preludes.tool.intro"><span>[names<wbr>.preludes<wbr>.tool<wbr>.intro]</span></a>
</div>

工具 prelude 包含[类型命名空间](namespaces.md)中外部工具的工具名称。更多详情见[工具属性](../attributes.md#tool-attributes)一节。

<!-- template:attributes -->

<div class="rule" id="r-names.preludes.no_implicit_prelude"><a class="rule-link" href="#r-names.preludes.no_implicit_prelude" title="names.preludes.no_implicit_prelude"><span>[names<wbr>.preludes<wbr>.no_implicit_prelude]</span></a>
</div>

## `no_implicit_prelude` 属性

<div class="rule" id="r-names.preludes.no_implicit_prelude.intro"><a class="rule-link" href="#r-names.preludes.no_implicit_prelude.intro" title="names.preludes.no_implicit_prelude.intro"><span>[names<wbr>.preludes<wbr>.no_implicit_prelude<wbr>.intro]</span></a>
</div>

_`no_implicit_prelude` [属性](../attributes.md)_ 用于阻止隐式 prelude 被引入作用域。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
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

</div>

<div class="rule" id="r-names.preludes.no_implicit_prelude.syntax"><a class="rule-link" href="#r-names.preludes.no_implicit_prelude.syntax" title="names.preludes.no_implicit_prelude.syntax"><span>[names<wbr>.preludes<wbr>.no_implicit_prelude<wbr>.syntax]</span></a>
</div>

`no_implicit_prelude` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-names.preludes.no_implicit_prelude.allowed-positions"><a class="rule-link" href="#r-names.preludes.no_implicit_prelude.allowed-positions" title="names.preludes.no_implicit_prelude.allowed-positions"><span>[names<wbr>.preludes<wbr>.no_implicit_prelude<wbr>.allowed-positions]</span></a>
</div>

`no_implicit_prelude` 属性只能应用于 crate 或模块。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="rule" id="r-names.preludes.no_implicit_prelude.duplicates"><a class="rule-link" href="#r-names.preludes.no_implicit_prelude.duplicates" title="names.preludes.no_implicit_prelude.duplicates"><span>[names<wbr>.preludes<wbr>.no_implicit_prelude<wbr>.duplicates]</span></a>
</div>

`no_implicit_prelude` 属性可以在一个形式上使用任意多次。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次之后的任何使用发出 lint。

</div>

<div class="rule" id="r-names.preludes.no_implicit_prelude.excluded-preludes"><a class="rule-link" href="#r-names.preludes.no_implicit_prelude.excluded-preludes" title="names.preludes.no_implicit_prelude.excluded-preludes"><span>[names<wbr>.preludes<wbr>.no_implicit_prelude<wbr>.excluded-preludes]</span></a>
</div>

`no_implicit_prelude` 属性会阻止[标准库 prelude](preludes.md#r-names.preludes.std)、[extern prelude](#extern-prelude)、[`macro_use` prelude](#macro_use-prelude)和[工具 prelude](#tool-prelude)被引入该模块及其后代的作用域。

<div class="rule" id="r-names.preludes.no_implicit_prelude.implicitly-imported-macros"><a class="rule-link" href="#r-names.preludes.no_implicit_prelude.implicitly-imported-macros" title="names.preludes.no_implicit_prelude.implicitly-imported-macros"><span>[names<wbr>.preludes<wbr>.no_implicit_prelude<wbr>.implicitly-imported-macros]</span></a>
</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 尽管有 `#![no_implicit_prelude]`，`rustc` 目前仍会将某些宏隐式引入作用域。这些宏是：
 > 
 > - [`assert!`](../../core/macro.assert.html)
 > - [`cfg!`](../../core/macro.cfg.html)
 > - [`cfg_select!`](../../core/macros/macro.cfg_select.html)
 > - [`column!`](../../core/macro.column.html)
 > - [`compile_error!`](../../core/macro.compile_error.html)
 > - [`concat!`](../../core/macro.concat.html)
 > - [`concat_bytes!`](../../core/macro.concat_bytes.html)
 > - [`env!`](../../core/macro.env.html)
 > - [`file!`](../../core/macro.file.html)
 > - [`format_args!`](../../core/macro.format_args.html)
 > - [`include!`](../../core/macro.include.html)
 > - [`include_bytes!`](../../core/macro.include_bytes.html)
 > - [`include_str!`](../../core/macro.include_str.html)
 > - [`line!`](../../core/macro.line.html)
 > - [`module_path!`](../../core/macro.module_path.html)
 > - [`option_env!`](../../core/macro.option_env.html)
 > - [`panic!`](../../std/macro.panic.html)
 > - [`stringify!`](../../core/macro.stringify.html)
 > - [`unreachable!`](../../core/macro.unreachable.html)
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

</div>

<div class="rule" id="r-names.preludes.no_implicit_prelude.lang"><a class="rule-link" href="#r-names.preludes.no_implicit_prelude.lang" title="names.preludes.no_implicit_prelude.lang"><span>[names<wbr>.preludes<wbr>.no_implicit_prelude<wbr>.lang]</span></a>
</div>

`no_implicit_prelude` 属性不会影响[语言 prelude](#language-prelude)。

<div class="rule" id="r-names.preludes.no_implicit_prelude.edition2018"><a class="rule-link" href="#r-names.preludes.no_implicit_prelude.edition2018" title="names.preludes.no_implicit_prelude.edition2018"><span>[names<wbr>.preludes<wbr>.no_implicit_prelude<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2015 edition 中，`no_implicit_prelude` 属性不会影响 [`macro_use` prelude](#macro_use-prelude)，并且标准库导出的所有宏仍会包含在 `macro_use` prelude 中。从 2018 edition 开始，该属性确实会移除 `macro_use` prelude。

</div>
