r[memory]
# 内存模型

> [!WARNING]
> Rust 的内存模型尚不完整，也尚未完全确定。

r[memory.bytes]
## 字节

r[memory.bytes.intro]
Rust 中最基本的内存单元是字节。

> [!NOTE]
> 虽然字节通常会被降低为硬件字节，但 Rust 使用一种“抽象”的字节概念，可以作出硬件中不存在的区分，例如处于未初始化状态，或者存储指针的一部分。这些区分可能影响你的程序是否具有未定义行为，因此它们仍会对编译后的 Rust 程序的行为产生实际影响。

r[memory.bytes.contents]
每个字节可以具有以下值之一：

r[memory.bytes.init]
* 包含一个 `u8` 值和可选 [provenance（来源）](../core/ptr/index.html#provenance)的已初始化字节，

r[memory.bytes.uninit]
* 未初始化的字节。

> [!NOTE]
> 上述列表尚不保证是穷尽的。
