<div class="rule" id="r-alloc"><a class="rule-link" href="#r-alloc" title="alloc"><span>[alloc]</span></a>
</div>

# 内存分配和生命周期

<div class="rule" id="r-alloc.static"><a class="rule-link" href="#r-alloc.static" title="alloc.static"><span>[alloc<wbr>.static]</span></a>
</div>

程序的_项_是那些在编译时计算其值，并唯一地存储在 Rust 进程内存映像中的函数、模块和类型。项既不是动态分配的，也不会被释放。

<div class="rule" id="r-alloc.dynamic"><a class="rule-link" href="#r-alloc.dynamic" title="alloc.dynamic"><span>[alloc<wbr>.dynamic]</span></a>
</div>

\_堆_是描述 box 的通用术语。堆中某个分配的生命周期取决于指向它的 box 值的生命周期。由于 box 值自身可能被传入或传出栈帧，或者存储在堆中，堆分配可能比进行该分配的栈帧存活更久。堆中的一个分配保证在该分配的整个生命周期内驻留在堆中的单一位置；它绝不会因为移动 box 值而被重新定位。