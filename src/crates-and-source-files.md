<div class="rule" id="r-crate"><a class="rule-link" href="#r-crate" title="crate"><span>[crate]</span></a>
</div>

# crate 和源文件

<div class="rule" id="r-crate.syntax"><a class="rule-link" href="#r-crate.syntax" title="crate.syntax"><span>[crate<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Crate" onclick="show_railroad()">[Crate](crates-and-source-files.md#railroad-Crate)</span> →  
    <span class="grammar-text">[InnerAttribute](attributes.md#grammar-InnerAttribute)</span><sup>\*</sup>  
    <span class="grammar-text">[Item](items.md#grammar-Item)</span><sup>\*</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 408px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Crate"><svg class="railroad" viewBox="0 0 408 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="crates-and-source-files.md#grammar-Crate">
<text class="comment" x="32" y="25">
Crate</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="attributes.md#railroad-InnerAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="71" y="55"/>
<text x="137" y="71">
InnerAttribute</text>
</g>
</a>
</g>
</g>
<g class="optional">
<path d=" M 249 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 76 m -35 0 l -5 -5 m 0 10 l 5 -5 m 35 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 273 66 h 12 m 52 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -52 m 29 0 l 5 -5 m 0 10 l -5 -5 m -29 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="items.md#railroad-Item">
<g class="nonterminal">
<rect height="22" width="52" x="285" y="55"/>
<text x="311" y="71">
Item</text>
</g>
</a>
</g>
</g>
<path d=" M 239 66 h 10"/>
</g>
<path d=" M 383 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 373 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 虽然 Rust 和任何其他语言一样，既可以由解释器实现，也可以由编译器实现，但现有的唯一实现是编译器，并且该语言一直被设计为用于编译。基于这些原因，本节假定使用编译器。

</div>

<div class="rule" id="r-crate.compile-time"><a class="rule-link" href="#r-crate.compile-time" title="crate.compile-time"><span>[crate<wbr>.compile-time]</span></a>
</div>

Rust 的语义遵循编译时和运行时之间的_阶段区分\_。[^phase-distinction] 具有_静态解释_的语义规则支配编译的成功或失败，而具有_动态解释_的语义规则支配程序在运行时的行为。

<div class="rule" id="r-crate.unit"><a class="rule-link" href="#r-crate.unit" title="crate.unit"><span>[crate<wbr>.unit]</span></a>
</div>

编译模型以称为 _crate_ 的制品为中心。每次编译都会处理一个源代码形式的 crate，并且如果成功，就生成一个二进制形式的 crate：要么是可执行文件，要么是某种库。[^cratesourcefile]

<div class="rule" id="r-crate.module"><a class="rule-link" href="#r-crate.module" title="crate.module"><span>[crate<wbr>.module]</span></a>
</div>

_crate_ 是编译和链接的单元，也是版本控制、分发和运行时加载的单元。crate 包含一个嵌套的[模块](items/modules.md)作用域_树\_。这棵树的顶层是一个匿名模块（从该模块内的路径角度来看），并且 crate 内的任何项都有一个规范[模块路径](paths.md)，表示其在 crate 模块树中的位置。

<div class="rule" id="r-crate.input-source"><a class="rule-link" href="#r-crate.input-source" title="crate.input-source"><span>[crate<wbr>.input-source]</span></a>
</div>

调用 Rust 编译器时，始终以单个源文件作为输入，并且始终生成单个输出 crate。处理该源文件可能导致其他源文件作为模块被加载。源文件使用 `.rs` 扩展名。

<div class="rule" id="r-crate.module-def"><a class="rule-link" href="#r-crate.module-def" title="crate.module-def"><span>[crate<wbr>.module-def]</span></a>
</div>

Rust 源文件描述一个模块；该模块在当前 crate 的模块树中的名称和位置，是从源文件外部定义的：要么由引用它的源文件中的显式 [Module](items/modules.md#grammar-Module) 项定义，要么由 crate 本身的名称定义。

<div class="rule" id="r-crate.inline-module"><a class="rule-link" href="#r-crate.inline-module" title="crate.inline-module"><span>[crate<wbr>.inline-module]</span></a>
</div>

每个源文件都是一个模块，但并非每个模块都需要自己的源文件：[模块定义](items/modules.md)可以嵌套在一个文件内。

<div class="rule" id="r-crate.items"><a class="rule-link" href="#r-crate.items" title="crate.items"><span>[crate<wbr>.items]</span></a>
</div>

每个源文件都包含由零个或多个 [Item](items.md#grammar-Item) 定义组成的序列，并且可以可选地以任意数量的[属性](attributes.md)开始，这些属性应用于包含它们的模块，其中大多数会影响编译器的行为。

<div class="rule" id="r-crate.attributes"><a class="rule-link" href="#r-crate.attributes" title="crate.attributes"><span>[crate<wbr>.attributes]</span></a>
</div>

匿名 crate 模块可以拥有额外的属性，这些属性应用于整个 crate。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 文件内容之前可以有一个 [shebang](shebang.md)。

</div>

```rust
// Specify the crate name.
#![crate_name = "projx"]

// Specify the type of output artifact.
#![crate_type = "lib"]

// Turn on a warning.
// This can be done in any module, not just the anonymous crate module.
#![warn(non_camel_case_types)]
```

<div class="rule" id="r-crate.main"><a class="rule-link" href="#r-crate.main" title="crate.main"><span>[crate<wbr>.main]</span></a>
</div>

## main 函数

<div class="rule" id="r-crate.main.executable"><a class="rule-link" href="#r-crate.main.executable" title="crate.main.executable"><span>[crate<wbr>.main<wbr>.executable]</span></a>
</div>

包含 `main` [函数](items/functions.md)的 crate 可以被编译为可执行文件。

<div class="rule" id="r-crate.main.restriction"><a class="rule-link" href="#r-crate.main.restriction" title="crate.main.restriction"><span>[crate<wbr>.main<wbr>.restriction]</span></a>
</div>

如果存在 `main` 函数，则它必须不接受任何参数，不得声明任何 [trait 或生命周期约束](trait-bounds.md)，不得有任何 [where 子句](items/generics.md#where-clauses)，并且其返回类型必须实现 [`Termination`](../std/process/trait.Termination.html) trait。

```rust
fn main() {}
```

```rust
fn main() -> ! {
    std::process::exit(0);
}
```

```rust
fn main() -> impl std::process::Termination {
    std::process::ExitCode::SUCCESS
}
```

<div class="rule" id="r-crate.main.import"><a class="rule-link" href="#r-crate.main.import" title="crate.main.import"><span>[crate<wbr>.main<wbr>.import]</span></a>
</div>

`main` 函数可以是导入项，例如来自外部 crate 或当前 crate。

```rust
mod foo {
    pub fn bar() {
        println!("Hello, world!");
    }
}
use foo::bar as main;
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 标准库中具有 [`Termination`](../std/process/trait.Termination.html) 实现的类型包括：
 > 
 > - `()`
 > - [`!`](types/never.md)
 > - [`Infallible`](../core/convert/enum.Infallible.html)
 > - [`ExitCode`](../std/process/struct.ExitCode.html)
 > - `Result<T, E> where T: Termination, E: Debug`

</div>

<!-- If the previous section needs updating (from "must take no arguments"
  onwards, also update it in the testing.md file -->

<div class="rule" id="r-crate.uncaught-foreign-unwinding"><a class="rule-link" href="#r-crate.uncaught-foreign-unwinding" title="crate.uncaught-foreign-unwinding"><span>[crate<wbr>.uncaught-foreign-unwinding]</span></a>
</div>

### 未捕获的外部展开

当“外部”展开（例如从 C++ 代码抛出的异常，或使用不同 panic handler 的 Rust 代码中的 `panic!`）传播越过 `main` 函数时，进程会被安全终止。这可能采取 abort 的形式，在这种情况下，不保证会执行任何 `Drop` 调用，并且错误输出可能不如由“原生”Rust `panic` 终止运行时时那样信息丰富。

更多信息请参阅 [panic 文档](panic.md#unwinding-across-ffi-boundaries)。

<div class="rule" id="r-crate.no_main"><a class="rule-link" href="#r-crate.no_main" title="crate.no_main"><span>[crate<wbr>.no_main]</span></a>
</div>

### `no_main` 属性

_`no_main` [属性](attributes.md)_ 可以应用在 crate 级别，用于禁止为可执行二进制文件发出 `main` 符号。当要链接的某个其他对象定义了 `main` 时，这很有用。

<div class="rule" id="r-crate.crate_name"><a class="rule-link" href="#r-crate.crate_name" title="crate.crate_name"><span>[crate<wbr>.crate_name]</span></a>
</div>

## `crate_name` 属性

<div class="rule" id="r-crate.crate_name.general"><a class="rule-link" href="#r-crate.crate_name.general" title="crate.crate_name.general"><span>[crate<wbr>.crate_name<wbr>.general]</span></a>
</div>

_`crate_name` [属性](attributes.md)_ 可以应用在 crate 级别，用 [MetaNameValueStr](attributes.md#grammar-MetaNameValueStr) 语法指定 crate 的名称。

```rust
#![crate_name = "mycrate"]
```

<div class="rule" id="r-crate.crate_name.restriction"><a class="rule-link" href="#r-crate.crate_name.restriction" title="crate.crate_name.restriction"><span>[crate<wbr>.crate_name<wbr>.restriction]</span></a>
</div>

crate 名称不得为空，并且必须只包含 [Unicode 字母数字](../std/primitive.char.html#method.is_alphanumeric)或 `_` (U+005F) 字符。

[^phase-distinction]: 这种区分在解释器中同样存在。无论程序何时执行，语法分析、类型检查和 lint 等静态检查都应当在程序执行之前发生。

[^cratesourcefile]: crate 在某种程度上类似于 ECMA-335 CLI 模型中的 _assembly_、SML/NJ Compilation Manager 中的 _library_、Owens 和 Flatt 模块系统中的 _unit_，或 Mesa 中的 _configuration_。