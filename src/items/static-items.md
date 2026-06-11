<div class="rule" id="r-items.static"><a class="rule-link" href="#r-items.static" title="items.static"><span>[items<wbr>.static]</span></a>
</div>

# 静态项

<div class="rule" id="r-items.static.syntax"><a class="rule-link" href="#r-items.static.syntax" title="items.static.syntax"><span>[items<wbr>.static<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-StaticItem" onclick="show_railroad()">[StaticItem](static-items.md#railroad-StaticItem)</span> →  
    <span class="grammar-text">[ItemSafety](functions.md#grammar-ItemSafety)</span><sup>?</sup>​[^extern-safety] <span class="grammar-literal">static</span> <span class="grammar-literal">mut</span><sup>?</sup> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-literal">:</span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span> ( <span class="grammar-literal">=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> )<sup>?</sup> <span class="grammar-literal">;</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 842px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StaticItem"><svg class="railroad" viewBox="0 0 842 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="static-items.md#grammar-StaticItem">
<text class="comment" x="50" y="25">
StaticItem</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="functions.md#railroad-ItemSafety">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="55"/>
<text x="109" y="71">
ItemSafety</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="193" y="55"/>
<text x="227" y="71">
static</text>
</g>
<g class="optional">
<path d=" M 271 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="295" y="55"/>
<text x="317" y="71">
mut</text>
</g>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="373" y="55"/>
<text x="423" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="483" y="55"/>
<text x="497" y="71">
:</text>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="521" y="55"/>
<text x="547" y="71">
Type</text>
</g>
</a>
<g class="optional">
<path d=" M 583 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 138 m -66 0 l -5 -5 m 0 10 l 5 -5 m 66 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="607" y="55"/>
<text x="621" y="71">
=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="645" y="55"/>
<text x="695" y="71">
Expression</text>
</g>
</a>
<path d=" M 635 66 h 10"/>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="779" y="55"/>
<text x="793" y="71">
;</text>
</g>
<path d=" M 183 66 h 10"/>
<path d=" M 261 66 h 10"/>
<path d=" M 363 66 h 10"/>
<path d=" M 473 66 h 10"/>
<path d=" M 511 66 h 10"/>
<path d=" M 573 66 h 10"/>
<path d=" M 769 66 h 10"/>
</g>
<path d=" M 817 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 807 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

[^extern-safety]: `safe` 和 `unsafe` 函数限定符在语义上只允许出现在 `extern` 块内。

<div class="rule" id="r-items.static.intro"><a class="rule-link" href="#r-items.static.intro" title="items.static.intro"><span>[items<wbr>.static<wbr>.intro]</span></a>
</div>

_静态项_ 类似于[常量](constant-items.md)，但它表示程序中的一块分配，该分配由初始化式初始化。指向该静态项的所有引用和裸指针都指向同一块分配。

<div class="rule" id="r-items.static.lifetime"><a class="rule-link" href="#r-items.static.lifetime" title="items.static.lifetime"><span>[items<wbr>.static<wbr>.lifetime]</span></a>
</div>

静态项具有 `static` 生命周期，它比 Rust 程序中的所有其他生命周期都长。静态项不会在程序结束时调用 [`drop`](../destructors.md)。

<div class="rule" id="r-items.static.storage-disjointness"><a class="rule-link" href="#r-items.static.storage-disjointness" title="items.static.storage-disjointness"><span>[items<wbr>.static<wbr>.storage-disjointness]</span></a>
</div>

如果该 `static` 的大小至少为 1 字节，则这块分配与所有其他此类 `static` 分配、堆分配以及栈分配变量互不重叠。然而，不可变 `static` 项的存储可以与自身没有唯一地址的分配重叠，例如[提升值](../destructors.md#constant-promotion)和 [`const` 项](constant-items.md)。

<div class="rule" id="r-items.static.namespace"><a class="rule-link" href="#r-items.static.namespace" title="items.static.namespace"><span>[items<wbr>.static<wbr>.namespace]</span></a>
</div>

静态声明会在其所在模块或块的[值命名空间](../names/namespaces.md)中定义静态值。

<div class="rule" id="r-items.static.init"><a class="rule-link" href="#r-items.static.init" title="items.static.init"><span>[items<wbr>.static<wbr>.init]</span></a>
</div>

静态初始化式是一个在编译时求值的[常量表达式](../const_eval.md#constant-expressions)。静态初始化式可以引用并读取其他静态项。从可变静态项读取时，它们读取的是该静态项的初始值。

<div class="rule" id="r-items.static.read-only"><a class="rule-link" href="#r-items.static.read-only" title="items.static.read-only"><span>[items<wbr>.static<wbr>.read-only]</span></a>
</div>

其类型不是[内部可变](../interior-mutability.md)的非 `mut` 静态项可以放在只读内存中。

<div class="rule" id="r-items.static.safety"><a class="rule-link" href="#r-items.static.safety" title="items.static.safety"><span>[items<wbr>.static<wbr>.safety]</span></a>
</div>

对静态项的所有访问都是安全的，但静态项有若干限制：

<div class="rule" id="r-items.static.sync"><a class="rule-link" href="#r-items.static.sync" title="items.static.sync"><span>[items<wbr>.static<wbr>.sync]</span></a>
</div>

- 该类型必须满足 [`Sync`](../../core/marker/trait.Sync.html) trait 约束，以允许线程安全访问。

<div class="rule" id="r-items.static.init.omission"><a class="rule-link" href="#r-items.static.init.omission" title="items.static.init.omission"><span>[items<wbr>.static<wbr>.init<wbr>.omission]</span></a>
</div>

在[外部块](external-blocks.md)中必须省略初始化式；对于自由静态项，必须提供初始化式。

<div class="rule" id="r-items.static.safety-qualifiers"><a class="rule-link" href="#r-items.static.safety-qualifiers" title="items.static.safety-qualifiers"><span>[items<wbr>.static<wbr>.safety-qualifiers]</span></a>
</div>

`safe` 和 `unsafe` 限定符在语义上只允许用于[外部块](external-blocks.md)中。

<div class="rule" id="r-items.static.generics"><a class="rule-link" href="#r-items.static.generics" title="items.static.generics"><span>[items<wbr>.static<wbr>.generics]</span></a>
</div>

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

<div class="rule" id="r-items.static.mut"><a class="rule-link" href="#r-items.static.mut" title="items.static.mut"><span>[items<wbr>.static<wbr>.mut]</span></a>
</div>

## 可变静态项

<div class="rule" id="r-items.static.mut.intro"><a class="rule-link" href="#r-items.static.mut.intro" title="items.static.mut.intro"><span>[items<wbr>.static<wbr>.mut<wbr>.intro]</span></a>
</div>

如果静态项使用 `mut` 关键字声明，那么程序就可以修改它。Rust 的目标之一是让并发 bug 难以出现，而这显然是竞态条件或其他 bug 的一个巨大来源。

<div class="rule" id="r-items.static.mut.safety"><a class="rule-link" href="#r-items.static.mut.safety" title="items.static.mut.safety"><span>[items<wbr>.static<wbr>.mut<wbr>.safety]</span></a>
</div>

因此，读取或写入可变静态变量时都需要 `unsafe` 块。应当谨慎确保对可变静态项的修改相对于同一进程中运行的其他线程是安全的。

<div class="rule" id="r-items.static.mut.extern"><a class="rule-link" href="#r-items.static.mut.extern" title="items.static.mut.extern"><span>[items<wbr>.static<wbr>.mut<wbr>.extern]</span></a>
</div>

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

<div class="rule" id="r-items.static.mut.sync"><a class="rule-link" href="#r-items.static.mut.sync" title="items.static.mut.sync"><span>[items<wbr>.static<wbr>.mut<wbr>.sync]</span></a>
</div>

可变静态项具有与普通静态项相同的限制，除了其类型不必实现 `Sync` trait。

<div class="rule" id="r-items.static.alternate"><a class="rule-link" href="#r-items.static.alternate" title="items.static.alternate"><span>[items<wbr>.static<wbr>.alternate]</span></a>
</div>

## 使用静态项还是常量项

你可能会困惑应当使用常量项还是静态项。一般来说，除非以下情况之一为真，否则应优先使用常量项而不是静态项：

- 正在存储大量数据。
- 需要静态项的单一地址属性。
- 需要内部可变性。