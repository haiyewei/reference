<div class="rule" id="r-lang-types"><a class="rule-link" href="#r-lang-types" title="lang-types"><span>[lang-types]</span></a>
</div>

# 特殊类型和 trait

<div class="rule" id="r-lang-types.intro"><a class="rule-link" href="#r-lang-types.intro" title="lang-types.intro"><span>[lang-types<wbr>.intro]</span></a>
</div>

存在于[标准库](../std/index.html)中的某些类型和 trait 是 Rust 编译器知晓的。本章记录这些类型和 trait 的特殊特性。

<div class="rule" id="r-lang-types.box"><a class="rule-link" href="#r-lang-types.box" title="lang-types.box"><span>[lang-types<wbr>.box]</span></a>
</div>

## `Box<T>`

<div class="rule" id="r-lang-types.box.intro"><a class="rule-link" href="#r-lang-types.box.intro" title="lang-types.box.intro"><span>[lang-types<wbr>.box<wbr>.intro]</span></a>
</div>

[`Box<T>`](../alloc/boxed/struct.Box.html) 具有一些 Rust 目前不允许用户定义类型拥有的特殊特性。

<div class="rule" id="r-lang-types.box.deref"><a class="rule-link" href="#r-lang-types.box.deref" title="lang-types.box.deref"><span>[lang-types<wbr>.box<wbr>.deref]</span></a>
</div>

- `Box<T>` 的[解引用运算符](expressions/operator-expr.md#the-dereference-operator)会产生一个可以[从中移动](expressions.md#r-expr.move.movable-place)的位置。这意味着 `*` 运算符和 `Box<T>` 的析构器是内建于语言中的。

<div class="rule" id="r-lang-types.box.receiver"><a class="rule-link" href="#r-lang-types.box.receiver" title="lang-types.box.receiver"><span>[lang-types<wbr>.box<wbr>.receiver]</span></a>
</div>

- [方法](items/associated-items.md#associated-functions-and-methods)可以接受 `Box<Self>` 作为接收者。

<div class="rule" id="r-lang-types.box.fundamental"><a class="rule-link" href="#r-lang-types.box.fundamental" title="lang-types.box.fundamental"><span>[lang-types<wbr>.box<wbr>.fundamental]</span></a>
</div>

- 可以在与 `T` 相同的 crate 中为 `Box<T>` 实现 trait，而[孤儿规则](items/implementations.md#trait-implementation-coherence)会禁止对其他泛型类型这样做。

<!-- Editor Note: This is nowhere close to an exhaustive list -->

<div class="rule" id="r-lang-types.rc"><a class="rule-link" href="#r-lang-types.rc" title="lang-types.rc"><span>[lang-types<wbr>.rc]</span></a>
</div>

## `Rc<T>`

<div class="rule" id="r-lang-types.rc.receiver"><a class="rule-link" href="#r-lang-types.rc.receiver" title="lang-types.rc.receiver"><span>[lang-types<wbr>.rc<wbr>.receiver]</span></a>
</div>

[方法](items/associated-items.md#associated-functions-and-methods)可以接受 [`Rc<Self>`](../alloc/rc/struct.Rc.html) 作为接收者。

<div class="rule" id="r-lang-types.arc"><a class="rule-link" href="#r-lang-types.arc" title="lang-types.arc"><span>[lang-types<wbr>.arc]</span></a>
</div>

## `Arc<T>`

<div class="rule" id="r-lang-types.arc.receiver"><a class="rule-link" href="#r-lang-types.arc.receiver" title="lang-types.arc.receiver"><span>[lang-types<wbr>.arc<wbr>.receiver]</span></a>
</div>

[方法](items/associated-items.md#associated-functions-and-methods)可以接受 [`Arc<Self>`](../alloc/sync/struct.Arc.html) 作为接收者。

<div class="rule" id="r-lang-types.pin"><a class="rule-link" href="#r-lang-types.pin" title="lang-types.pin"><span>[lang-types<wbr>.pin]</span></a>
</div>

## `Pin<P>`

<div class="rule" id="r-lang-types.pin.receiver"><a class="rule-link" href="#r-lang-types.pin.receiver" title="lang-types.pin.receiver"><span>[lang-types<wbr>.pin<wbr>.receiver]</span></a>
</div>

[方法](items/associated-items.md#associated-functions-and-methods)可以接受 [`Pin<P>`](../core/pin/struct.Pin.html) 作为接收者。

<div class="rule" id="r-lang-types.unsafe-cell"><a class="rule-link" href="#r-lang-types.unsafe-cell" title="lang-types.unsafe-cell"><span>[lang-types<wbr>.unsafe-cell]</span></a>
</div>

## `UnsafeCell<T>`

<div class="rule" id="r-lang-types.unsafe-cell.interior-mut"><a class="rule-link" href="#r-lang-types.unsafe-cell.interior-mut" title="lang-types.unsafe-cell.interior-mut"><span>[lang-types<wbr>.unsafe-cell<wbr>.interior-mut]</span></a>
</div>

[`std::cell::UnsafeCell<T>`](../core/cell/struct.UnsafeCell.html) 用于[内部可变性](interior-mutability.md)。它确保编译器不会执行对这类类型而言不正确的优化。

<div class="rule" id="r-lang-types.unsafe-cell.read-only-alloc"><a class="rule-link" href="#r-lang-types.unsafe-cell.read-only-alloc" title="lang-types.unsafe-cell.read-only-alloc"><span>[lang-types<wbr>.unsafe-cell<wbr>.read-only-alloc]</span></a>
</div>

它还确保类型具有内部可变性的 [`static` 条目](items/static-items.md)不会被放置在标记为只读的内存中。

<div class="rule" id="r-lang-types.phantom-data"><a class="rule-link" href="#r-lang-types.phantom-data" title="lang-types.phantom-data"><span>[lang-types<wbr>.phantom-data]</span></a>
</div>

## `PhantomData<T>`

[`std::marker::PhantomData<T>`](../core/marker/struct.PhantomData.html) 是一种[零大小](glossary.md#r-glossary.zst)、最小对齐的类型；出于[型变](subtyping.md#variance)、[drop 检查](../nomicon/dropck.html)和[auto trait](#auto-traits)的目的，它被视为拥有一个 `T`。

<div class="rule" id="r-lang-types.ops"><a class="rule-link" href="#r-lang-types.ops" title="lang-types.ops"><span>[lang-types<wbr>.ops]</span></a>
</div>

## 运算符 trait

[`std::ops`](../core/ops/index.html) 和 [`std::cmp`](../core/cmp/index.html) 中的 trait 用于重载[运算符](expressions/operator-expr.md)、[索引表达式](expressions/array-expr.md#array-and-slice-indexing-expressions)和[调用表达式](expressions/call-expr.md)。

<div class="rule" id="r-lang-types.deref"><a class="rule-link" href="#r-lang-types.deref" title="lang-types.deref"><span>[lang-types<wbr>.deref]</span></a>
</div>

## `Deref` 和 `DerefMut`

除了重载一元 `*` 运算符外，[`Deref`](../core/ops/deref/trait.Deref.html) 和 [`DerefMut`](../core/ops/deref/trait.DerefMut.html) 还用于[方法解析](expressions/method-call-expr.md)和[deref 强制转换](type-coercions.md#coercion-types)。

<div class="rule" id="r-lang-types.drop"><a class="rule-link" href="#r-lang-types.drop" title="lang-types.drop"><span>[lang-types<wbr>.drop]</span></a>
</div>

## `Drop`

[`Drop`](../core/ops/drop/trait.Drop.html) trait 提供一个[析构器](destructors.md)，每当该类型的值即将被销毁时运行。

<div class="rule" id="r-lang-types.copy"><a class="rule-link" href="#r-lang-types.copy" title="lang-types.copy"><span>[lang-types<wbr>.copy]</span></a>
</div>

## `Copy`

<div class="rule" id="r-lang-types.copy.intro"><a class="rule-link" href="#r-lang-types.copy.intro" title="lang-types.copy.intro"><span>[lang-types<wbr>.copy<wbr>.intro]</span></a>
</div>

[`Copy`](../core/marker/trait.Copy.html) trait 会改变实现它的类型的语义。

<div class="rule" id="r-lang-types.copy.behavior"><a class="rule-link" href="#r-lang-types.copy.behavior" title="lang-types.copy.behavior"><span>[lang-types<wbr>.copy<wbr>.behavior]</span></a>
</div>

类型实现了 `Copy` 的值在赋值时会被复制，而不是被移动。

<div class="rule" id="r-lang-types.copy.constraint"><a class="rule-link" href="#r-lang-types.copy.constraint" title="lang-types.copy.constraint"><span>[lang-types<wbr>.copy<wbr>.constraint]</span></a>
</div>

`Copy` 只能为未实现 `Drop` 且其字段全都是 `Copy` 的类型实现。对于枚举，这意味着所有变体的所有字段都必须是 `Copy`。对于联合体，这意味着所有变体都必须是 `Copy`。

<div class="rule" id="r-lang-types.copy.builtin-types"><a class="rule-link" href="#r-lang-types.copy.builtin-types" title="lang-types.copy.builtin-types"><span>[lang-types<wbr>.copy<wbr>.builtin-types]</span></a>
</div>

编译器为以下类型实现了 `Copy`：

<div class="rule" id="r-lang-types.copy.tuple"><a class="rule-link" href="#r-lang-types.copy.tuple" title="lang-types.copy.tuple"><span>[lang-types<wbr>.copy<wbr>.tuple]</span></a>
</div>

- `Copy` 类型组成的[元组](types/tuple.md)

<div class="rule" id="r-lang-types.copy.fn-pointer"><a class="rule-link" href="#r-lang-types.copy.fn-pointer" title="lang-types.copy.fn-pointer"><span>[lang-types<wbr>.copy<wbr>.fn-pointer]</span></a>
</div>

- [函数指针](types/function-pointer.md)

<div class="rule" id="r-lang-types.copy.fn-item"><a class="rule-link" href="#r-lang-types.copy.fn-item" title="lang-types.copy.fn-item"><span>[lang-types<wbr>.copy<wbr>.fn-item]</span></a>
</div>

- [函数项](types/function-item.md)

<div class="rule" id="r-lang-types.copy.closure"><a class="rule-link" href="#r-lang-types.copy.closure" title="lang-types.copy.closure"><span>[lang-types<wbr>.copy<wbr>.closure]</span></a>
</div>

- 不捕获任何值或只捕获 `Copy` 类型的值的[闭包](types/closure.md)

<div class="rule" id="r-lang-types.clone"><a class="rule-link" href="#r-lang-types.clone" title="lang-types.clone"><span>[lang-types<wbr>.clone]</span></a>
</div>

## `Clone`

<div class="rule" id="r-lang-types.clone.intro"><a class="rule-link" href="#r-lang-types.clone.intro" title="lang-types.clone.intro"><span>[lang-types<wbr>.clone<wbr>.intro]</span></a>
</div>

[`Clone`](../core/clone/trait.Clone.html) trait 是 `Copy` 的 supertrait，因此它也需要由编译器生成的实现。

<div class="rule" id="r-lang-types.clone.builtin-types"><a class="rule-link" href="#r-lang-types.clone.builtin-types" title="lang-types.clone.builtin-types"><span>[lang-types<wbr>.clone<wbr>.builtin-types]</span></a>
</div>

编译器会为以下类型实现它：

<div class="rule" id="r-lang-types.clone.builtin-copy"><a class="rule-link" href="#r-lang-types.clone.builtin-copy" title="lang-types.clone.builtin-copy"><span>[lang-types<wbr>.clone<wbr>.builtin-copy]</span></a>
</div>

- 具有内置 `Copy` 实现的类型（见上文）

<div class="rule" id="r-lang-types.clone.tuple"><a class="rule-link" href="#r-lang-types.clone.tuple" title="lang-types.clone.tuple"><span>[lang-types<wbr>.clone<wbr>.tuple]</span></a>
</div>

- `Clone` 类型组成的[元组](types/tuple.md)

<div class="rule" id="r-lang-types.clone.closure"><a class="rule-link" href="#r-lang-types.clone.closure" title="lang-types.clone.closure"><span>[lang-types<wbr>.clone<wbr>.closure]</span></a>
</div>

- 只捕获 `Clone` 类型的值或不从环境中捕获任何值的[闭包](types/closure.md)

<div class="rule" id="r-lang-types.send"><a class="rule-link" href="#r-lang-types.send" title="lang-types.send"><span>[lang-types<wbr>.send]</span></a>
</div>

## `Send`

[`Send`](../core/marker/trait.Send.html) trait 表示此类型的值可以安全地从一个线程发送到另一个线程。

<div class="rule" id="r-lang-types.sync"><a class="rule-link" href="#r-lang-types.sync" title="lang-types.sync"><span>[lang-types<wbr>.sync]</span></a>
</div>

## `Sync`

<div class="rule" id="r-lang-types.sync.intro"><a class="rule-link" href="#r-lang-types.sync.intro" title="lang-types.sync.intro"><span>[lang-types<wbr>.sync<wbr>.intro]</span></a>
</div>

[`Sync`](../core/marker/trait.Sync.html) trait 表示此类型的值可以安全地在多个线程之间共享。

<div class="rule" id="r-lang-types.sync.static-constraint"><a class="rule-link" href="#r-lang-types.sync.static-constraint" title="lang-types.sync.static-constraint"><span>[lang-types<wbr>.sync<wbr>.static-constraint]</span></a>
</div>

所有用于不可变 [`static` 项](items/static-items.md)的类型都必须实现此 trait。

<div class="rule" id="r-lang-types.termination"><a class="rule-link" href="#r-lang-types.termination" title="lang-types.termination"><span>[lang-types<wbr>.termination]</span></a>
</div>

## `Termination`

[`Termination`](../std/process/trait.Termination.html) trait 表示[main 函数](crates-and-source-files.md#main-functions)和[测试函数](attributes/testing.md#the-test-attribute)可接受的返回类型。

<div class="rule" id="r-lang-types.auto-traits"><a class="rule-link" href="#r-lang-types.auto-traits" title="lang-types.auto-traits"><span>[lang-types<wbr>.auto-traits]</span></a>
</div>

## auto trait

[`Send`](../core/marker/trait.Send.html)、[`Sync`](../core/marker/trait.Sync.html)、[`Unpin`](../core/marker/trait.Unpin.html)、[`UnwindSafe`](../core/panic/unwind_safe/trait.UnwindSafe.html) 和 [`RefUnwindSafe`](../core/panic/unwind_safe/trait.RefUnwindSafe.html) trait 是 _auto trait_。auto trait 具有特殊属性。

<div class="rule" id="r-lang-types.auto-traits.auto-impl"><a class="rule-link" href="#r-lang-types.auto-traits.auto-impl" title="lang-types.auto-traits.auto-impl"><span>[lang-types<wbr>.auto-traits<wbr>.auto-impl]</span></a>
</div>

如果没有为给定类型写出某个 auto trait 的显式实现或否定实现，那么编译器会根据以下规则自动实现它：

<div class="rule" id="r-lang-types.auto-traits.builtin-composite"><a class="rule-link" href="#r-lang-types.auto-traits.builtin-composite" title="lang-types.auto-traits.builtin-composite"><span>[lang-types<wbr>.auto-traits<wbr>.builtin-composite]</span></a>
</div>

- 如果 `T` 实现该 trait，则 `&T`、`&mut T`、`*const T`、`*mut T`、`[T; n]` 和 `[T]` 也实现该 trait。

<div class="rule" id="r-lang-types.auto-traits.fn-item-pointer"><a class="rule-link" href="#r-lang-types.auto-traits.fn-item-pointer" title="lang-types.auto-traits.fn-item-pointer"><span>[lang-types<wbr>.auto-traits<wbr>.fn-item-pointer]</span></a>
</div>

- 函数项类型和函数指针会自动实现该 trait。

<div class="rule" id="r-lang-types.auto-traits.aggregate"><a class="rule-link" href="#r-lang-types.auto-traits.aggregate" title="lang-types.auto-traits.aggregate"><span>[lang-types<wbr>.auto-traits<wbr>.aggregate]</span></a>
</div>

- 如果结构体、枚举、联合体和元组的所有字段都实现该 trait，则它们也实现该 trait。

<div class="rule" id="r-lang-types.auto-traits.closure"><a class="rule-link" href="#r-lang-types.auto-traits.closure" title="lang-types.auto-traits.closure"><span>[lang-types<wbr>.auto-traits<wbr>.closure]</span></a>
</div>

- 如果闭包所有捕获项的类型都实现该 trait，则闭包也实现该 trait。通过共享引用捕获一个 `T` 并按值捕获一个 `U` 的闭包，会实现 `&T` 和 `U` 二者都实现的任何 auto trait。

<div class="rule" id="r-lang-types.auto-traits.generic-impl"><a class="rule-link" href="#r-lang-types.auto-traits.generic-impl" title="lang-types.auto-traits.generic-impl"><span>[lang-types<wbr>.auto-traits<wbr>.generic-impl]</span></a>
</div>

对于泛型类型（将上述内置类型视为关于 `T` 的泛型类型），如果存在可用的泛型实现，那么对于本可以使用该实现、只是未满足所需 trait 约束的类型，编译器不会自动实现它。例如，标准库为所有满足 `T` 为 `Sync` 的 `&T` 实现 `Send`；这意味着如果 `T` 是 `Send` 但不是 `Sync`，编译器不会为 `&T` 实现 `Send`。

<div class="rule" id="r-lang-types.auto-traits.negative"><a class="rule-link" href="#r-lang-types.auto-traits.negative" title="lang-types.auto-traits.negative"><span>[lang-types<wbr>.auto-traits<wbr>.negative]</span></a>
</div>

auto trait 也可以有否定实现，在标准库文档中显示为 `impl !AutoTrait for T`，它们会覆盖自动实现。例如，`*mut T` 有一个 `Send` 的否定实现，因此即使 `T` 是 `Send`，`*mut T` 也不是 `Send`。目前没有稳定方式指定额外的否定实现；它们只存在于标准库中。

<div class="rule" id="r-lang-types.auto-traits.trait-object-marker"><a class="rule-link" href="#r-lang-types.auto-traits.trait-object-marker" title="lang-types.auto-traits.trait-object-marker"><span>[lang-types<wbr>.auto-traits<wbr>.trait-object-marker]</span></a>
</div>

auto trait 可以作为附加约束添加到任何 [trait object](types/trait-object.md) 上，即使通常只允许一个 trait。例如，`Box<dyn Debug + Send + UnwindSafe>` 是一个有效类型。

<div class="rule" id="r-lang-types.sized"><a class="rule-link" href="#r-lang-types.sized" title="lang-types.sized"><span>[lang-types<wbr>.sized]</span></a>
</div>

## `Sized`

<div class="rule" id="r-lang-types.sized.intro"><a class="rule-link" href="#r-lang-types.sized.intro" title="lang-types.sized.intro"><span>[lang-types<wbr>.sized<wbr>.intro]</span></a>
</div>

[`Sized`](../core/marker/trait.Sized.html) trait 表示此类型的大小在编译时已知；也就是说，它不是[动态大小类型](dynamically-sized-types.md)。

<div class="rule" id="r-lang-types.sized.implicit-sized"><a class="rule-link" href="#r-lang-types.sized.implicit-sized" title="lang-types.sized.implicit-sized"><span>[lang-types<wbr>.sized<wbr>.implicit-sized]</span></a>
</div>

[类型参数](types/parameters.md)（trait 中的 `Self` 除外）默认是 `Sized`，[关联类型](items/associated-items.md#associated-types)也是如此。

<div class="rule" id="r-lang-types.sized.implicit-impl"><a class="rule-link" href="#r-lang-types.sized.implicit-impl" title="lang-types.sized.implicit-impl"><span>[lang-types<wbr>.sized<wbr>.implicit-impl]</span></a>
</div>

`Sized` 始终由编译器自动实现，而不是由[实现项](items/implementations.md)实现。

<div class="rule" id="r-lang-types.sized.relaxation"><a class="rule-link" href="#r-lang-types.sized.relaxation" title="lang-types.sized.relaxation"><span>[lang-types<wbr>.sized<wbr>.relaxation]</span></a>
</div>

这些隐式 `Sized` 约束可以通过使用特殊的 `?Sized` 约束来放宽。