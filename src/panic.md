r[panic]
# Panic

r[panic.intro]
Rust 提供了一种机制，用于阻止函数正常返回，转而发生 "panic"；panic 是对一种错误条件的响应，而这种错误通常不预期能在遇到该错误的上下文中恢复。

r[panic.lang-ops]
某些语言构造会自动 panic，例如越界的[数组索引](expressions/array-expr.md#array-and-slice-indexing-expressions)。

r[panic.control]
还有一些语言特性为 panic 行为提供了一定程度的控制：

* [_panic handler_](#the-panic_handler-attribute) 定义 panic 的行为。
* [FFI ABIs](items/functions.md#unwinding) 可以改变 panic 的行为方式。

> [!NOTE]
> 标准库提供了通过 [`panic!` 宏][panic!] 显式 panic 的能力。

r[panic.panic_handler]
## `panic_handler` 属性

r[panic.panic_handler.intro]
*`panic_handler` 属性*可以应用于函数，以定义 panic 的行为。

r[panic.panic_handler.allowed-positions]
`panic_handler` 属性只能应用于签名为 `fn(&PanicInfo) -> !` 的函数。

> [!NOTE]
> [`PanicInfo`](core::panic::PanicInfo) 结构体包含有关 panic 位置的信息。

r[panic.panic_handler.unique]
依赖图中必须有且只有一个 `panic_handler` 函数。

下面展示了一个 `panic_handler` 函数，它记录 panic 消息，然后暂停线程。

<!-- ignore: test infrastructure can't handle no_std -->
```rust,ignore
#![no_std]

use core::fmt::{self, Write};
use core::panic::PanicInfo;

struct Sink {
    // ..
#    _0: (),
}
#
# impl Sink {
#     fn new() -> Sink { Sink { _0: () }}
# }
#
# impl fmt::Write for Sink {
#     fn write_str(&mut self, _: &str) -> fmt::Result { Ok(()) }
# }

#[panic_handler]
fn panic(info: &PanicInfo) -> ! {
    let mut sink = Sink::new();

    // 将 "panicked at '$reason', src/main.rs:27:4" 记录到某个 `sink`
    let _ = writeln!(sink, "{}", info);

    loop {}
}
```

r[panic.panic_handler.std]
### 标准行为

r[panic.panic_handler.std.kinds]
`std` 提供两种不同的 panic handler：

* `unwind` --- 展开栈，并且可能可恢复。
* `abort` ---- 中止进程，并且不可恢复。

并非所有目标都可以提供 `unwind` handler。

> [!NOTE]
> 与 `std` 链接时使用的 panic handler 可以通过 [`-C panic`](../rustc/codegen-options/index.html#panic) CLI 标志设置。大多数目标的默认值是 `unwind`。
>
> 标准库的 panic 行为可以在运行时通过 [`std::panic::set_hook`] 函数修改。

r[panic.panic_handler.std.no_std]
链接 [`no_std`](names/preludes.md#the-no_std-attribute) 二进制文件、dylib、cdylib 或 staticlib 时，需要指定你自己的 panic handler。

r[panic.strategy]
## Panic 策略

r[panic.strategy.intro]
*panic 策略*定义 crate 在构建时支持哪种 panic 行为。

> [!NOTE]
> 可以在 `rustc` 中通过 [`-C panic`](../rustc/codegen-options/index.html#panic) CLI 标志选择 panic 策略。
>
> 在生成二进制文件、dylib、cdylib 或 staticlib 并与 `std` 链接时，`-C panic` CLI 标志还会影响使用哪个 [panic handler](#the-panic_handler-attribute)。

> [!NOTE]
> 使用 `abort` panic 策略编译代码时，优化器可以假定不可能跨 Rust 栈帧展开，这可能同时带来代码大小和运行时速度的改进。

> [!NOTE]
> 关于链接具有不同 panic 策略的 crate 时的限制，请参见 [link.unwinding]。其一个推论是，使用 `unwind` 策略构建的 crate 可以使用 `abort` panic handler，但 `abort` 策略不能使用 `unwind` panic handler。

r[panic.unwind]
## 展开

r[panic.unwind.intro]
panic 可以是可恢复的，也可以是不可恢复的，不过可以通过选择非展开式 panic handler 将其配置为始终不可恢复。（反过来并不成立：`unwind` handler 并不保证所有 panic 都可恢复，只保证通过 `panic!` 宏和类似标准库机制触发的 panic 是可恢复的。）

r[panic.unwind.destruction]
当 panic 发生时，`unwind` handler 会“展开”Rust 栈帧，就像 C++ 的 `throw` 展开 C++ 栈帧一样，直到 panic 到达恢复点（例如线程边界）。这意味着当 panic 穿过 Rust 栈帧时，这些栈帧中仍存活且[实现 `Drop`](destructors.md) 的对象会调用其 `drop` 方法。因此，当正常执行恢复时，不再可访问的对象已经被“清理”，就像它们正常离开作用域一样。

> [!NOTE]
> 只要保留这种资源清理保证，“展开”可以在不实际使用目标平台上 C++ 所用机制的情况下实现。

> [!NOTE]
> 标准库提供了两种从 panic 中恢复的机制：[`std::panic::catch_unwind`]（允许在发生 panic 的线程内恢复）和 [`std::thread::spawn`]（会为生成的线程自动设置 panic 恢复，使其他线程可以继续运行）。

r[panic.unwind.ffi]
### 跨 FFI 边界展开

r[panic.unwind.ffi.intro]
可以使用[适当的 ABI 声明](items/functions.md#unwinding)跨 FFI 边界展开。虽然这在某些情况下很有用，但它也为未定义行为创造了独特的机会，尤其是在涉及多个语言运行时时。

r[panic.unwind.ffi.undefined]
使用错误的 ABI 展开是未定义行为：

* 从一个外部函数导致展开进入 Rust 代码，而该外部函数是通过声明为非展开 ABI 的函数声明或指针调用的，例如 `"C"`、`"system"` 等。（例如，当这样一个用 C++ 编写的函数抛出未被捕获并传播到 Rust 的异常时，就会发生这种情况。）
* 从不支持展开的代码中调用会展开的 Rust `extern` 函数（带有 `extern "C-unwind"` 或另一个允许展开的 ABI），例如使用 GCC 或 Clang 并带 `-fno-exceptions` 编译的代码

r[panic.unwind.ffi.catch-foreign]
使用 [`std::panic::catch_unwind`]、[`std::thread::JoinHandle::join`] 捕获外部展开操作（例如 C++ 异常），或者让它传播超过 Rust `main()` 函数或线程根，会产生以下两种行为之一，具体发生哪一种是未指定的：

* 进程中止。
* 函数返回包含不透明类型的 [`Result::Err`]。

> [!NOTE]
> 为了此保证的目的，使用另一个 Rust 标准库实例编译或链接的 Rust 代码会被视为“外部异常”。因此，一个使用 `panic!` 并链接到某个版本 Rust 标准库的库，如果由使用另一个版本标准库的应用程序调用，即使该库只在子线程中使用，也可能导致整个应用程序中止。

r[panic.unwind.ffi.dispose-panic]
目前，对于外部运行时尝试处置或重新抛出 Rust `panic` 载荷时发生的行为没有任何保证。换言之，源自 Rust 运行时的展开必须要么导致进程终止，要么被同一个运行时捕获。

[`-C panic`]: ../rustc/codegen-options/index.html#panic
[`no_std`]: names/preludes.md#the-no_std-attribute
[`PanicInfo`]: core::panic::PanicInfo
[array indexing]: expressions/array-expr.md#array-and-slice-indexing-expressions
[attribute]: attributes.md
[destructors]: destructors.md
[panic handler]: #the-panic_handler-attribute
[runtime]: runtime.md
[unwind-abi]: items/functions.md#unwinding
