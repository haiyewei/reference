<div class="rule" id="r-runtime"><a class="rule-link" href="#r-runtime" title="runtime"><span>[runtime]</span></a>
</div>

# Rust 运行时

本节记录定义 Rust 运行时某些方面的特性。

<!-- template:attributes -->

<div class="rule" id="r-runtime.global_allocator"><a class="rule-link" href="#r-runtime.global_allocator" title="runtime.global_allocator"><span>[runtime<wbr>.global_allocator]</span></a>
</div>

## `global_allocator` 属性

<div class="rule" id="r-runtime.global_allocator.intro"><a class="rule-link" href="#r-runtime.global_allocator.intro" title="runtime.global_allocator.intro"><span>[runtime<wbr>.global_allocator<wbr>.intro]</span></a>
</div>

_`global_allocator` [属性](attributes.md#r-attributes)_ 会选择一个[内存分配器](../std/alloc/index.html)。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
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

</div>

<div class="rule" id="r-runtime.global_allocator.syntax"><a class="rule-link" href="#r-runtime.global_allocator.syntax" title="runtime.global_allocator.syntax"><span>[runtime<wbr>.global_allocator<wbr>.syntax]</span></a>
</div>

`global_allocator` 属性使用 [MetaWord](attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-runtime.global_allocator.allowed-positions"><a class="rule-link" href="#r-runtime.global_allocator.allowed-positions" title="runtime.global_allocator.allowed-positions"><span>[runtime<wbr>.global_allocator<wbr>.allowed-positions]</span></a>
</div>

`global_allocator` 属性只能应用于类型实现 [`GlobalAlloc`](../core/alloc/global/trait.GlobalAlloc.html) trait 的[静态项](items/static-items.md)。

<div class="rule" id="r-runtime.global_allocator.duplicates"><a class="rule-link" href="#r-runtime.global_allocator.duplicates" title="runtime.global_allocator.duplicates"><span>[runtime<wbr>.global_allocator<wbr>.duplicates]</span></a>
</div>

`global_allocator` 属性在一个项上只能使用一次。

<div class="rule" id="r-runtime.global_allocator.single"><a class="rule-link" href="#r-runtime.global_allocator.single" title="runtime.global_allocator.single"><span>[runtime<wbr>.global_allocator<wbr>.single]</span></a>
</div>

`global_allocator` 属性在 crate 图中只能使用一次。

<div class="rule" id="r-runtime.global_allocator.stdlib"><a class="rule-link" href="#r-runtime.global_allocator.stdlib" title="runtime.global_allocator.stdlib"><span>[runtime<wbr>.global_allocator<wbr>.stdlib]</span></a>
</div>

`global_allocator` 属性从[标准库 prelude](../core/prelude/v1/index.html)中导出。

<!-- template:attributes -->

<div class="rule" id="r-runtime.windows_subsystem"><a class="rule-link" href="#r-runtime.windows_subsystem" title="runtime.windows_subsystem"><span>[runtime<wbr>.windows_subsystem]</span></a>
</div>

## `windows_subsystem` 属性

<div class="rule" id="r-runtime.windows_subsystem.intro"><a class="rule-link" href="#r-runtime.windows_subsystem.intro" title="runtime.windows_subsystem.intro"><span>[runtime<wbr>.windows_subsystem<wbr>.intro]</span></a>
</div>

_`windows_subsystem` [属性](attributes.md#r-attributes)_ 会在链接 Windows 目标时设置[子系统](https://msdn.microsoft.com/en-us/library/fcc1zstk.aspx)。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > #![windows_subsystem = "windows"]
 > ```

</div>

<div class="rule" id="r-runtime.windows_subsystem.syntax"><a class="rule-link" href="#r-runtime.windows_subsystem.syntax" title="runtime.windows_subsystem.syntax"><span>[runtime<wbr>.windows_subsystem<wbr>.syntax]</span></a>
</div>

`windows_subsystem` 属性使用 [MetaNameValueStr](attributes.md#grammar-MetaNameValueStr) 语法。接受的值为 `"console"` 和 `"windows"`。

<div class="rule" id="r-runtime.windows_subsystem.allowed-positions"><a class="rule-link" href="#r-runtime.windows_subsystem.allowed-positions" title="runtime.windows_subsystem.allowed-positions"><span>[runtime<wbr>.windows_subsystem<wbr>.allowed-positions]</span></a>
</div>

`windows_subsystem` 属性只能应用于 crate 根。

<div class="rule" id="r-runtime.windows_subsystem.duplicates"><a class="rule-link" href="#r-runtime.windows_subsystem.duplicates" title="runtime.windows_subsystem.duplicates"><span>[runtime<wbr>.windows_subsystem<wbr>.duplicates]</span></a>
</div>

只有第一次使用 `windows_subsystem` 会生效。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

</div>

<div class="rule" id="r-runtime.windows_subsystem.ignored"><a class="rule-link" href="#r-runtime.windows_subsystem.ignored" title="runtime.windows_subsystem.ignored"><span>[runtime<wbr>.windows_subsystem<wbr>.ignored]</span></a>
</div>

`windows_subsystem` 属性在非 Windows 目标和非 `bin` [crate 类型](linkage.md)上会被忽略。

<div class="rule" id="r-runtime.windows_subsystem.console"><a class="rule-link" href="#r-runtime.windows_subsystem.console" title="runtime.windows_subsystem.console"><span>[runtime<wbr>.windows_subsystem<wbr>.console]</span></a>
</div>

`"console"` 子系统是默认值。如果控制台进程从已有控制台运行，它会附加到该控制台；否则会创建一个新的控制台窗口。

<div class="rule" id="r-runtime.windows_subsystem.windows"><a class="rule-link" href="#r-runtime.windows_subsystem.windows" title="runtime.windows_subsystem.windows"><span>[runtime<wbr>.windows_subsystem<wbr>.windows]</span></a>
</div>

`"windows"` 子系统会以脱离任何已有控制台的方式运行。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `"windows"` 子系统通常由不希望在启动时显示控制台窗口的 GUI 应用程序使用。

</div>
