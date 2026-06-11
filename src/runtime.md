r[runtime]
# Rust 运行时

本节记录定义 Rust 运行时某些方面的特性。

<!-- template:attributes -->
r[runtime.global_allocator]
## `global_allocator` 属性

r[runtime.global_allocator.intro]
_`global_allocator` [属性](attributes.md#r-attributes)_ 会选择一个[内存分配器](../std/alloc/index.html)。

> [!EXAMPLE]
> ```rust
> use core::alloc::{GlobalAlloc, Layout};
> use std::alloc::System;
>
> struct MyAllocator;
>
> unsafe impl GlobalAlloc for MyAllocator {
>     unsafe fn alloc(&self, layout: Layout) -> *mut u8 {
>         unsafe { System.alloc(layout) }
>     }
>     unsafe fn dealloc(&self, ptr: *mut u8, layout: Layout) {
>         unsafe { System.dealloc(ptr, layout) }
>     }
> }
>
> #[global_allocator]
> static GLOBAL: MyAllocator = MyAllocator;
> ```

r[runtime.global_allocator.syntax]
`global_allocator` 属性使用 [MetaWord](attributes.md#grammar-MetaWord) 语法。

r[runtime.global_allocator.allowed-positions]
`global_allocator` 属性只能应用于类型实现 [`GlobalAlloc`](../core/alloc/global/trait.GlobalAlloc.html) trait 的[静态项](items/static-items.md)。

r[runtime.global_allocator.duplicates]
`global_allocator` 属性在一个项上只能使用一次。

r[runtime.global_allocator.single]
`global_allocator` 属性在 crate 图中只能使用一次。

r[runtime.global_allocator.stdlib]
`global_allocator` 属性从[标准库 prelude](../core/prelude/v1/index.html)中导出。

<!-- template:attributes -->
r[runtime.windows_subsystem]
## `windows_subsystem` 属性

r[runtime.windows_subsystem.intro]
_`windows_subsystem` [属性](attributes.md#r-attributes)_ 会在链接 Windows 目标时设置[子系统](https://msdn.microsoft.com/en-us/library/fcc1zstk.aspx)。

> [!EXAMPLE]
> ```rust
> #![windows_subsystem = "windows"]
> ```

r[runtime.windows_subsystem.syntax]
`windows_subsystem` 属性使用 [MetaNameValueStr](attributes.md#grammar-MetaNameValueStr) 语法。接受的值为 `"console"` 和 `"windows"`。

r[runtime.windows_subsystem.allowed-positions]
`windows_subsystem` 属性只能应用于 crate 根。

r[runtime.windows_subsystem.duplicates]
只有第一次使用 `windows_subsystem` 会生效。

> [!NOTE]
> `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

r[runtime.windows_subsystem.ignored]
`windows_subsystem` 属性在非 Windows 目标和非 `bin` [crate 类型](linkage.md)上会被忽略。

r[runtime.windows_subsystem.console]
`"console"` 子系统是默认值。如果控制台进程从已有控制台运行，它会附加到该控制台；否则会创建一个新的控制台窗口。

r[runtime.windows_subsystem.windows]
`"windows"` 子系统会以脱离任何已有控制台的方式运行。

> [!NOTE]
> `"windows"` 子系统通常由不希望在启动时显示控制台窗口的 GUI 应用程序使用。

[`GlobalAlloc`]: alloc::alloc::GlobalAlloc
[crate types]: linkage.md
[static item]: items/static-items.md
[subsystem]: https://msdn.microsoft.com/en-us/library/fcc1zstk.aspx
