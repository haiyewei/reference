r[crate]
# crate 和源文件

r[crate.syntax]
```grammar,items
@root Crate ->
    InnerAttribute*
    Item*
```

> [!NOTE]
> 虽然 Rust 和任何其他语言一样，既可以由解释器实现，也可以由编译器实现，但现有的唯一实现是编译器，并且该语言一直被设计为用于编译。基于这些原因，本节假定使用编译器。

r[crate.compile-time]
Rust 的语义遵循编译时和运行时之间的_阶段区分_。[^phase-distinction] 具有_静态解释_的语义规则支配编译的成功或失败，而具有_动态解释_的语义规则支配程序在运行时的行为。

r[crate.unit]
编译模型以称为 _crate_ 的制品为中心。每次编译都会处理一个源代码形式的 crate，并且如果成功，就生成一个二进制形式的 crate：要么是可执行文件，要么是某种库。[^cratesourcefile]

r[crate.module]
_crate_ 是编译和链接的单元，也是版本控制、分发和运行时加载的单元。crate 包含一个嵌套的[模块](items/modules.md)作用域_树_。这棵树的顶层是一个匿名模块（从该模块内的路径角度来看），并且 crate 内的任何项都有一个规范[模块路径](paths.md)，表示其在 crate 模块树中的位置。

r[crate.input-source]
调用 Rust 编译器时，始终以单个源文件作为输入，并且始终生成单个输出 crate。处理该源文件可能导致其他源文件作为模块被加载。源文件使用 `.rs` 扩展名。

r[crate.module-def]
Rust 源文件描述一个模块；该模块在当前 crate 的模块树中的名称和位置由源文件之外决定：要么由引用它的源文件中的显式 [Module][grammar-Module] 项决定，要么由 crate 本身的名称决定。

r[crate.inline-module]
每个源文件都是一个模块，但并非每个模块都需要自己的源文件：[模块定义](items/modules.md)可以嵌套在一个文件内。

r[crate.items]
每个源文件都包含由零个或多个 [Item](items.md#grammar-Item) 定义组成的序列，并且可以可选地以任意数量的[属性](attributes.md)开始，这些属性应用于包含它们的模块，其中大多数会影响编译器的行为。

r[crate.attributes]
匿名 crate 模块可以拥有额外的属性，这些属性应用于整个 crate。

> [!NOTE]
> 文件内容之前可以有一个 [shebang](shebang.md)。

```rust
// Specify the crate name.
#![crate_name = "projx"]

// Specify the type of output artifact.
#![crate_type = "lib"]

// Turn on a warning.
// This can be done in any module, not just the anonymous crate module.
#![warn(non_camel_case_types)]
```

r[crate.main]
## main 函数

r[crate.main.executable]
包含 `main` [函数](items/functions.md)的 crate 可以被编译为可执行文件。

r[crate.main.restriction]
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

r[crate.main.import]
`main` 函数可以是导入项，例如来自外部 crate 或当前 crate。

```rust
mod foo {
    pub fn bar() {
        println!("Hello, world!");
    }
}
use foo::bar as main;
```

> [!NOTE]
> 标准库中具有 [`Termination`](../std/process/trait.Termination.html) 实现的类型包括：
>
> * `()`
> * [`!`]
> * [`Infallible`]
> * [`ExitCode`]
> * `Result<T, E> where T: Termination, E: Debug`

<!-- If the previous section needs updating (from "must take no arguments" onwards, also update it in the testing.md file -->

r[crate.uncaught-foreign-unwinding]
### 未捕获的外部展开

当“外部”展开（例如从 C++ 代码抛出的异常，或使用不同 panic handler 的 Rust 代码中的 `panic!`）传播越过 `main` 函数时，进程会被安全终止。这可能采取 abort 的形式，在这种情况下，不保证会执行任何 `Drop` 调用，并且错误输出可能不如由“原生”Rust `panic` 终止运行时时那样信息丰富。

更多信息请参阅 [panic 文档](panic.md#unwinding-across-ffi-boundaries)。

r[crate.no_main]
### `no_main` 属性

_`no_main` [属性](attributes.md)_ 可以应用在 crate 级别，用于禁止为可执行二进制文件发出 `main` 符号。当要链接的某个其他对象定义了 `main` 时，这很有用。

r[crate.crate_name]
## `crate_name` 属性

r[crate.crate_name.general]
_`crate_name` [属性](attributes.md)_ 可以应用在 crate 级别，用 [MetaNameValueStr](attributes.md#grammar-MetaNameValueStr) 语法指定 crate 的名称。

```rust
#![crate_name = "mycrate"]
```

r[crate.crate_name.restriction]
crate 名称不得为空，并且必须只包含 [Unicode 字母数字](../std/primitive.char.html#method.is_alphanumeric)或 `_` (U+005F) 字符。

[^phase-distinction]: This distinction would also exist in an interpreter. Static checks like syntactic analysis, type checking, and lints should happen before the program is executed regardless of when it is executed.

[^cratesourcefile]: A crate is somewhat analogous to an *assembly* in the ECMA-335 CLI model, a *library* in the SML/NJ Compilation Manager, a *unit* in the Owens and Flatt module system, or a *configuration* in Mesa.

[Unicode alphanumeric]: char::is_alphanumeric
[`!`]: types/never.md
[`ExitCode`]: std::process::ExitCode
[`Infallible`]: std::convert::Infallible
[`Termination`]: std::process::Termination
[attribute]: attributes.md
[attributes]: attributes.md
[function]: items/functions.md
[module]: items/modules.md
[module path]: paths.md
[panic-docs]: panic.md#unwinding-across-ffi-boundaries
[shebang]: shebang.md
[trait or lifetime bounds]: trait-bounds.md
[where clauses]: items/generics.md#where-clauses
