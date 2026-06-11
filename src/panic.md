<div class="rule" id="r-panic"><a class="rule-link" href="#r-panic" title="panic"><span>[panic]</span></a>
</div>

# Panic

<div class="rule" id="r-panic.intro"><a class="rule-link" href="#r-panic.intro" title="panic.intro"><span>[panic<wbr>.intro]</span></a>
</div>

Rust 提供了一种机制，用于阻止函数正常返回，转而发生“panic”；panic 是对一种错误条件的响应，而这种错误通常不预期能在遇到该错误的上下文中恢复。

<div class="rule" id="r-panic.lang-ops"><a class="rule-link" href="#r-panic.lang-ops" title="panic.lang-ops"><span>[panic<wbr>.lang-ops]</span></a>
</div>

某些语言构造会自动 panic，例如越界的[数组索引](expressions/array-expr.md#array-and-slice-indexing-expressions)。

<div class="rule" id="r-panic.control"><a class="rule-link" href="#r-panic.control" title="panic.control"><span>[panic<wbr>.control]</span></a>
</div>

还有一些语言特性为 panic 行为提供了一定程度的控制：

- [_panic handler_](#the-panic_handler-attribute) 定义 panic 的行为。
- [FFI ABIs](items/functions.md#unwinding) 可以改变 panic 的行为方式。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 标准库提供了通过 [`panic!` macro](../std/macro.panic.html) 显式 panic 的能力。

</div>

<div class="rule" id="r-panic.panic_handler"><a class="rule-link" href="#r-panic.panic_handler" title="panic.panic_handler"><span>[panic<wbr>.panic_handler]</span></a>
</div>

## `panic_handler` 属性

<div class="rule" id="r-panic.panic_handler.intro"><a class="rule-link" href="#r-panic.panic_handler.intro" title="panic.panic_handler.intro"><span>[panic<wbr>.panic_handler<wbr>.intro]</span></a>
</div>

\_`panic_handler` 属性_可以应用于函数，以定义 panic 的行为。

<div class="rule" id="r-panic.panic_handler.allowed-positions"><a class="rule-link" href="#r-panic.panic_handler.allowed-positions" title="panic.panic_handler.allowed-positions"><span>[panic<wbr>.panic_handler<wbr>.allowed-positions]</span></a>
</div>

`panic_handler` 属性只能应用于签名为 `fn(&PanicInfo) -> !` 的函数。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [`PanicInfo`](../core/panic/panic_info/struct.PanicInfo.html) 结构体包含有关 panic 位置的信息。

</div>

<div class="rule" id="r-panic.panic_handler.unique"><a class="rule-link" href="#r-panic.panic_handler.unique" title="panic.panic_handler.unique"><span>[panic<wbr>.panic_handler<wbr>.unique]</span></a>
</div>

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

    // logs "panicked at '$reason', src/main.rs:27:4" to some `sink`
    let _ = writeln!(sink, "{}", info);

    loop {}
}
```

<div class="rule" id="r-panic.panic_handler.std"><a class="rule-link" href="#r-panic.panic_handler.std" title="panic.panic_handler.std"><span>[panic<wbr>.panic_handler<wbr>.std]</span></a>
</div>

### 标准行为

<div class="rule" id="r-panic.panic_handler.std.kinds"><a class="rule-link" href="#r-panic.panic_handler.std.kinds" title="panic.panic_handler.std.kinds"><span>[panic<wbr>.panic_handler<wbr>.std<wbr>.kinds]</span></a>
</div>

`std` 提供两种不同的 panic handler：

- `unwind` --- 展开栈，并且可能可恢复。
- `abort` ---- 中止进程，并且不可恢复。

并非所有目标都可以提供 `unwind` handler。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 与 `std` 链接时使用的 panic handler 可以通过 [`-C panic`](../rustc/codegen-options/index.html#panic) CLI 标志设置。大多数目标的默认值是 `unwind`。
 > 
 > 标准库的 panic 行为可以在运行时通过 [`std::panic::set_hook`](../std/panicking/fn.set_hook.html) 函数修改。

</div>

<div class="rule" id="r-panic.panic_handler.std.no_std"><a class="rule-link" href="#r-panic.panic_handler.std.no_std" title="panic.panic_handler.std.no_std"><span>[panic<wbr>.panic_handler<wbr>.std<wbr>.no_std]</span></a>
</div>

链接 [`no_std`](names/preludes.md#the-no_std-attribute) 二进制文件、dylib、cdylib 或 staticlib 时，需要指定你自己的 panic handler。

<div class="rule" id="r-panic.strategy"><a class="rule-link" href="#r-panic.strategy" title="panic.strategy"><span>[panic<wbr>.strategy]</span></a>
</div>

## Panic 策略

<div class="rule" id="r-panic.strategy.intro"><a class="rule-link" href="#r-panic.strategy.intro" title="panic.strategy.intro"><span>[panic<wbr>.strategy<wbr>.intro]</span></a>
</div>

\_panic 策略_定义 crate 在构建时支持哪种 panic 行为。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 可以在 `rustc` 中通过 [`-C panic`](../rustc/codegen-options/index.html#panic) CLI 标志选择 panic 策略。
 > 
 > 在生成二进制文件、dylib、cdylib 或 staticlib 并与 `std` 链接时，`-C panic` CLI 标志还会影响使用哪个 [panic handler](#the-panic_handler-attribute)。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 使用 `abort` panic 策略编译代码时，优化器可以假定不可能跨 Rust 栈帧展开，这可能同时带来代码大小和运行时速度的改进。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 关于链接具有不同 panic 策略的 crate 时的限制，请参见 [link.unwinding](linkage.md#r-link.unwinding)。其一个推论是，使用 `unwind` 策略构建的 crate 可以使用 `abort` panic handler，但 `abort` 策略不能使用 `unwind` panic handler。

</div>

<div class="rule" id="r-panic.unwind"><a class="rule-link" href="#r-panic.unwind" title="panic.unwind"><span>[panic<wbr>.unwind]</span></a>
</div>

## 展开

<div class="rule" id="r-panic.unwind.intro"><a class="rule-link" href="#r-panic.unwind.intro" title="panic.unwind.intro"><span>[panic<wbr>.unwind<wbr>.intro]</span></a>
</div>

panic 可以是可恢复的，也可以是不可恢复的，不过可以通过选择非展开式 panic handler 将其配置为始终不可恢复。（反过来并不成立：`unwind` handler 并不保证所有 panic 都可恢复，只保证通过 `panic!` macro 和类似标准库机制触发的 panic 是可恢复的。）

<div class="rule" id="r-panic.unwind.destruction"><a class="rule-link" href="#r-panic.unwind.destruction" title="panic.unwind.destruction"><span>[panic<wbr>.unwind<wbr>.destruction]</span></a>
</div>

当 panic 发生时，`unwind` handler 会“展开”Rust 栈帧，就像 C++ 的 `throw` 展开 C++ 栈帧一样，直到 panic 到达恢复点（例如线程边界）。这意味着当 panic 穿过 Rust 栈帧时，这些栈帧中仍存活且[实现 `Drop`](destructors.md) 的对象会调用其 `drop` 方法。因此，当正常执行恢复时，不再可访问的对象已经被“清理”，就像它们正常离开作用域一样。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 只要保留这种资源清理保证，“展开”可以在不实际使用目标平台上 C++ 所用机制的情况下实现。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 标准库提供了两种从 panic 中恢复的机制：[`std::panic::catch_unwind`](../std/panic/fn.catch_unwind.html)（允许在发生 panic 的线程内恢复）和 [`std::thread::spawn`](../std/thread/functions/fn.spawn.html)（会为生成的线程自动设置 panic 恢复，使其他线程可以继续运行）。

</div>

<div class="rule" id="r-panic.unwind.ffi"><a class="rule-link" href="#r-panic.unwind.ffi" title="panic.unwind.ffi"><span>[panic<wbr>.unwind<wbr>.ffi]</span></a>
</div>

### 跨 FFI 边界展开

<div class="rule" id="r-panic.unwind.ffi.intro"><a class="rule-link" href="#r-panic.unwind.ffi.intro" title="panic.unwind.ffi.intro"><span>[panic<wbr>.unwind<wbr>.ffi<wbr>.intro]</span></a>
</div>

可以使用[适当的 ABI 声明](items/functions.md#unwinding)跨 FFI 边界展开。虽然这在某些情况下很有用，但它也为未定义行为创造了独特的机会，尤其是在涉及多个语言运行时时。

<div class="rule" id="r-panic.unwind.ffi.undefined"><a class="rule-link" href="#r-panic.unwind.ffi.undefined" title="panic.unwind.ffi.undefined"><span>[panic<wbr>.unwind<wbr>.ffi<wbr>.undefined]</span></a>
</div>

使用错误的 ABI 展开是未定义行为：

- 从一个外部函数导致展开进入 Rust 代码，而该外部函数是通过声明为非展开 ABI 的函数声明或指针调用的，例如 `"C"`、`"system"` 等。（例如，当这样一个用 C++ 编写的函数抛出未被捕获并传播到 Rust 的异常时，就会发生这种情况。）
- 从不支持展开的代码中调用会展开的 Rust `extern` 函数（带有 `extern "C-unwind"` 或另一个允许展开的 ABI），例如使用 GCC 或 Clang 并带 `-fno-exceptions` 编译的代码

<div class="rule" id="r-panic.unwind.ffi.catch-foreign"><a class="rule-link" href="#r-panic.unwind.ffi.catch-foreign" title="panic.unwind.ffi.catch-foreign"><span>[panic<wbr>.unwind<wbr>.ffi<wbr>.catch-foreign]</span></a>
</div>

使用 [`std::panic::catch_unwind`](../std/panic/fn.catch_unwind.html)、[`std::thread::JoinHandle::join`](../std/thread/join_handle/struct.JoinHandle.html#method.join) 捕获外部展开操作（例如 C++ 异常），或者让它传播超过 Rust `main()` 函数或线程根，会产生以下两种行为之一，具体发生哪一种是未指定的：

- 进程中止。
- 函数返回包含不透明类型的 [`Result::Err`](../core/result/enum.Result.html#variant.Err)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 为了此保证的目的，使用另一个 Rust 标准库实例编译或链接的 Rust 代码会被视为“外部异常”。因此，一个使用 `panic!` 并链接到某个版本 Rust 标准库的库，如果由使用另一个版本标准库的应用程序调用，即使该库只在子线程中使用，也可能导致整个应用程序中止。

</div>

<div class="rule" id="r-panic.unwind.ffi.dispose-panic"><a class="rule-link" href="#r-panic.unwind.ffi.dispose-panic" title="panic.unwind.ffi.dispose-panic"><span>[panic<wbr>.unwind<wbr>.ffi<wbr>.dispose-panic]</span></a>
</div>

目前，对于外部运行时尝试处置或重新抛出 Rust `panic` 载荷时发生的行为没有任何保证。换言之，源自 Rust 运行时的展开必须要么导致进程终止，要么被同一个运行时捕获。