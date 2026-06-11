r[unsafe]
# `unsafe` 关键字

r[unsafe.intro]
`unsafe` 关键字用于创建或履行证明某事物安全的义务。具体而言：

- 它用于标记_定义_额外安全条件的代码，这些条件必须在别处得到维护。
  - 这包括 `unsafe fn`、`unsafe static` 和 `unsafe trait`。
- 它用于标记程序员_断言_满足别处所定义安全条件的代码。
  - 这包括 `unsafe {}`、`unsafe impl`、没有 [`unsafe_op_in_unsafe_fn`](../rustc/lints/listing/allowed-by-default.html#unsafe-op-in-unsafe-fn) 的 `unsafe fn`、`unsafe extern` 和 `#[unsafe(attr)]`。

下文讨论这些情形中的每一种。若要查看一些说明性示例，请参见[关键字文档](../std/keyword.unsafe.html)。

r[unsafe.positions]
`unsafe` 关键字可以出现在几种不同的上下文中：

- unsafe 函数（`unsafe fn`）
- unsafe 块（`unsafe {}`）
- unsafe trait（`unsafe trait`）
- unsafe trait 实现（`unsafe impl`）
- unsafe 外部块（`unsafe extern`）
- unsafe 外部静态项（`unsafe static`）
- unsafe 属性（`#[unsafe(attr)]`）

r[unsafe.fn]
## Unsafe 函数（`unsafe fn`）

r[unsafe.fn.intro]
unsafe 函数是在并非所有上下文和/或并非所有可能输入下都安全的函数。我们说它们具有_额外安全条件_，这些条件是所有调用者都必须维护、且编译器不会检查的要求。例如，[`get_unchecked`](../std/primitive.slice.html#method.get_unchecked) 具有索引必须在边界内这一额外安全条件。unsafe 函数应当附带说明这些额外安全条件是什么的文档。

r[unsafe.fn.safety]
这样的函数必须以关键字 `unsafe` 作为前缀，并且只能从 `unsafe` 块内部调用，或者在没有 [`unsafe_op_in_unsafe_fn`](../rustc/lints/listing/allowed-by-default.html#unsafe-op-in-unsafe-fn) lint 的 `unsafe fn` 内部调用。

r[unsafe.block]
## Unsafe 块（`unsafe {}`）

r[unsafe.block.intro]
代码块可以带有 `unsafe` 关键字前缀，以允许使用 [Unsafety](unsafety.md) 一章中定义的 unsafe 动作，例如调用其他 unsafe 函数或解引用裸指针。

r[unsafe.block.fn-body]
默认情况下，unsafe 函数的函数体也被视为一个 unsafe 块；这可以通过启用 [`unsafe_op_in_unsafe_fn`](../rustc/lints/listing/allowed-by-default.html#unsafe-op-in-unsafe-fn) lint 来改变。

通过将操作放入 unsafe 块，程序员声明自己已经负责满足该块中所有操作的额外安全条件。

unsafe 块在逻辑上与 unsafe 函数对偶：unsafe 函数定义调用者必须维护的证明义务，而 unsafe 块声明块内所调用函数或操作的所有相关证明义务已经被履行。履行证明义务有很多方式；例如，可以有运行时检查或数据结构不变式来保证某些性质一定为真，或者 unsafe 块可以位于 `unsafe fn` 内部，此时该块可以使用该函数的证明义务来履行块内部产生的证明义务。

unsafe 块用于包装外部库、直接使用硬件，或实现语言中并未直接提供的特性。例如，Rust 提供了在语言中实现内存安全并发所需的语言特性，但标准库中线程和消息传递的实现使用了 unsafe 块。

Rust 的类型系统是对动态安全要求的保守近似，因此在某些情况下，使用安全代码会有性能成本。例如，双向链表不是树结构，在安全代码中只能用引用计数指针表示。通过使用 `unsafe` 块将反向链接表示为裸指针，可以在不使用引用计数的情况下实现它。（关于这个特定示例的更深入探讨，请参见 ["Learn Rust With Entirely Too Many Linked Lists"](https://rust-unofficial.github.io/too-many-lists/)。）

[Unsafety]: unsafety.md

r[unsafe.trait]
## Unsafe trait（`unsafe trait`）

r[unsafe.trait.intro]
unsafe trait 是带有额外安全条件的 trait，这些条件必须由该 trait 的_实现_来维护。unsafe trait 应当附带说明这些额外安全条件是什么的文档。

r[unsafe.trait.safety]
这样的 trait 必须以关键字 `unsafe` 作为前缀，并且只能由 `unsafe impl` 块实现。

r[unsafe.impl]
## Unsafe trait 实现（`unsafe impl`）

实现 unsafe trait 时，该实现需要以 `unsafe` 关键字作为前缀。通过写下 `unsafe impl`，程序员声明自己已经负责满足该 trait 所要求的额外安全条件。

unsafe trait 实现在逻辑上与 unsafe trait 对偶：unsafe trait 定义实现必须维护的证明义务，而 unsafe 实现声明所有相关证明义务已经被履行。

[keyword]: ../std/keyword.unsafe.html
[`get_unchecked`]: slice::get_unchecked
[`unsafe_op_in_unsafe_fn`]: ../rustc/lints/listing/allowed-by-default.html#unsafe-op-in-unsafe-fn

r[unsafe.extern]
## Unsafe 外部块（`unsafe extern`）

声明[外部块](items/external-blocks.md)的程序员必须确保其中所含项的签名是正确的。未能做到这一点可能导致未定义行为。写下 `unsafe extern` 表示这一义务已经得到履行。

r[unsafe.extern.edition2024]
> [!EDITION-2024]
> 在 edition 2024 之前，允许 `extern` 块不被限定为 `unsafe`。

[external block]: items/external-blocks.md

r[unsafe.attribute]
## Unsafe 属性（`#[unsafe(attr)]`）

[unsafe 属性](attributes.md)是带有额外安全条件的属性，在使用该属性时必须维护这些条件。编译器无法检查这些条件是否已经得到维护。要断言它们已经得到维护，这些属性必须包裹在 `unsafe(..)` 中，例如 `#[unsafe(no_mangle)]`。

[unsafe attribute]: attributes.md
