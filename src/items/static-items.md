r[items.static]
# 静态项

r[items.static.syntax]
```grammar,items
StaticItem ->
    ItemSafety?[^extern-safety] `static` `mut`? IDENTIFIER `:` Type ( `=` Expression )? `;`
```

[^extern-safety]: The `safe` and `unsafe` function qualifiers are only allowed semantically within `extern` blocks.

r[items.static.intro]
_静态项_ 类似于[常量](constant-items.md)，但它表示程序中的一块分配，该分配由初始化式初始化。指向该静态项的所有引用和裸指针都指向同一块分配。

r[items.static.lifetime]
静态项具有 `static` 生命周期，它比 Rust 程序中的所有其他生命周期都长。静态项不会在程序结束时调用 [`drop`](../destructors.md)。

r[items.static.storage-disjointness]
如果该 `static` 的大小至少为 1 字节，则这块分配与所有其他此类 `static` 分配、堆分配以及栈分配变量互不重叠。然而，不可变 `static` 项的存储可以与自身没有唯一地址的分配重叠，例如[提升值](../destructors.md#constant-promotion)和 [`const` 项](constant-items.md)。

r[items.static.namespace]
静态声明会在其所在模块或块的[值命名空间](../names/namespaces.md)中定义静态值。

r[items.static.init]
静态初始化式是一个在编译时求值的[常量表达式](../const_eval.md#constant-expressions)。静态初始化式可以引用并读取其他静态项。从可变静态项读取时，它们读取的是该静态项的初始值。

r[items.static.read-only]
其类型不是[内部可变](../interior-mutability.md)的非 `mut` 静态项可以放在只读内存中。

r[items.static.safety]
对静态项的所有访问都是安全的，但静态项有若干限制：

r[items.static.sync]
* 该类型必须满足 [`Sync`](../../core/marker/trait.Sync.html) trait 约束，以允许线程安全访问。

r[items.static.init.omission]
在[外部块](external-blocks.md)中必须省略初始化式；对于自由静态项，必须提供初始化式。

r[items.static.safety-qualifiers]
`safe` 和 `unsafe` 限定符在语义上只允许用于[外部块](external-blocks.md)中。

r[items.static.generics]
## 静态项与泛型

在泛型作用域中（例如 blanket 实现或默认实现中）定义的静态项只会导致定义一个静态项，就好像该静态定义被从当前作用域提到模块中一样。它<em>不会</em>为每个单态化各生成一个项。

这段代码：

```rust
use std::sync::atomic::{AtomicUsize, Ordering};

trait Tr {
    fn default_impl() {
        static COUNTER: AtomicUsize = AtomicUsize::new(0);
        println!("default_impl: counter was {}", COUNTER.fetch_add(1, Ordering::Relaxed));
    }

    fn blanket_impl();
}

struct Ty1 {}
struct Ty2 {}

impl<T> Tr for T {
    fn blanket_impl() {
        static COUNTER: AtomicUsize = AtomicUsize::new(0);
        println!("blanket_impl: counter was {}", COUNTER.fetch_add(1, Ordering::Relaxed));
    }
}

fn main() {
    <Ty1 as Tr>::default_impl();
    <Ty2 as Tr>::default_impl();
    <Ty1 as Tr>::blanket_impl();
    <Ty2 as Tr>::blanket_impl();
}
```

打印

```text
default_impl: counter was 0
default_impl: counter was 1
blanket_impl: counter was 0
blanket_impl: counter was 1
```

r[items.static.mut]
## 可变静态项

r[items.static.mut.intro]
如果静态项使用 `mut` 关键字声明，那么程序就可以修改它。Rust 的目标之一是让并发 bug 难以出现，而这显然是竞态条件或其他 bug 的一个巨大来源。

r[items.static.mut.safety]
因此，读取或写入可变静态变量时都需要 `unsafe` 块。应当谨慎确保对可变静态项的修改相对于同一进程中运行的其他线程是安全的。

r[items.static.mut.extern]
不过，可变静态项仍然非常有用。它们可以与 C 库一起使用，也可以在 `extern` 块中从 C 库绑定。

```rust
# fn atomic_add(_: *mut u32, _: u32) -> u32 { 2 }

static mut LEVELS: u32 = 0;

// This violates the idea of no shared state, and this doesn't internally
// protect against races, so this function is `unsafe`
unsafe fn bump_levels_unsafe() -> u32 {
    unsafe {
        let ret = LEVELS;
        LEVELS += 1;
        return ret;
    }
}

// As an alternative to `bump_levels_unsafe`, this function is safe, assuming
// that we have an atomic_add function which returns the old value. This
// function is safe only if no other code accesses the static in a non-atomic
// fashion. If such accesses are possible (such as in `bump_levels_unsafe`),
// then this would need to be `unsafe` to indicate to the caller that they
// must still guard against concurrent access.
fn bump_levels_safe() -> u32 {
    unsafe {
        return atomic_add(&raw mut LEVELS, 1);
    }
}
```

r[items.static.mut.sync]
可变静态项具有与普通静态项相同的限制，除了其类型不必实现 `Sync` trait。

r[items.static.alternate]
## 使用静态项还是常量项

你可能会困惑应当使用常量项还是静态项。一般来说，除非以下情况之一为真，否则应优先使用常量项而不是静态项：

* 正在存储大量数据。
* 需要静态项的单一地址属性。
* 需要内部可变性。

[constant]: constant-items.md
[`drop`]: ../destructors.md
[constant expression]: ../const_eval.md#constant-expressions
[external block]: external-blocks.md
[interior mutable]: ../interior-mutability.md
[value namespace]: ../names/namespaces.md
[promoteds]: ../destructors.md#constant-promotion
