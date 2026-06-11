<div class="rule" id="r-interior-mut"><a class="rule-link" href="#r-interior-mut" title="interior-mut"><span>[interior-mut]</span></a>
</div>

# 内部可变性

<div class="rule" id="r-interior-mut.intro"><a class="rule-link" href="#r-interior-mut.intro" title="interior-mut.intro"><span>[interior-mut<wbr>.intro]</span></a>
</div>

有时，一个类型需要在具有多个别名的同时被修改。在 Rust 中，这是通过一种称为_内部可变性_的模式实现的。

<div class="rule" id="r-interior-mut.shared-ref"><a class="rule-link" href="#r-interior-mut.shared-ref" title="interior-mut.shared-ref"><span>[interior-mut<wbr>.shared-ref]</span></a>
</div>

如果一个类型的内部状态可以通过指向它的[共享引用](types/pointer.md#shared-references-) 来改变，则该类型具有内部可变性。

<div class="rule" id="r-interior-mut.no-constraint"><a class="rule-link" href="#r-interior-mut.no-constraint" title="interior-mut.no-constraint"><span>[interior-mut<wbr>.no-constraint]</span></a>
</div>

这违背了通常的[要求](behavior-considered-undefined.md)：共享引用所指向的值不会被修改。

<div class="rule" id="r-interior-mut.unsafe-cell"><a class="rule-link" href="#r-interior-mut.unsafe-cell" title="interior-mut.unsafe-cell"><span>[interior-mut<wbr>.unsafe-cell]</span></a>
</div>

[`std::cell::UnsafeCell<T>`](../core/cell/struct.UnsafeCell.html) 类型是唯一允许用来禁用此要求的方式。当 `UnsafeCell<T>` 被不可变地别名化时，修改其包含的 `T`，或取得指向该 `T` 的可变引用，仍然是安全的。

<div class="rule" id="r-interior-mut.mut-unsafe-cell"><a class="rule-link" href="#r-interior-mut.mut-unsafe-cell" title="interior-mut.mut-unsafe-cell"><span>[interior-mut<wbr>.mut-unsafe-cell]</span></a>
</div>

与所有其他类型一样，拥有多个 `&mut UnsafeCell<T>` 别名是未定义行为。

<div class="rule" id="r-interior-mut.abstraction"><a class="rule-link" href="#r-interior-mut.abstraction" title="interior-mut.abstraction"><span>[interior-mut<wbr>.abstraction]</span></a>
</div>

可以通过将 `UnsafeCell<T>` 用作字段来创建其他具有内部可变性的类型。标准库提供了多种类型，它们提供安全的内部可变性 API。

<div class="rule" id="r-interior-mut.ref-cell"><a class="rule-link" href="#r-interior-mut.ref-cell" title="interior-mut.ref-cell"><span>[interior-mut<wbr>.ref-cell]</span></a>
</div>

例如，[`std::cell::RefCell<T>`](../core/cell/struct.RefCell.html) 使用运行时借用检查来确保关于多个引用的通常规则。

<div class="rule" id="r-interior-mut.atomic"><a class="rule-link" href="#r-interior-mut.atomic" title="interior-mut.atomic"><span>[interior-mut<wbr>.atomic]</span></a>
</div>

[`std::sync::atomic`](../core/sync/atomic/index.html) 模块包含一些类型，它们包装只能通过原子操作访问的值，从而允许该值在线程之间共享和修改。