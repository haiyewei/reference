r[lang-types]
# 特殊类型和 trait

r[lang-types.intro]
存在于[标准库](std)中的某些类型和 trait 是 Rust 编译器知晓的。本章记录这些类型和 trait 的特殊特性。

r[lang-types.box]
## `Box<T>`

r[lang-types.box.intro]
[`Box<T>`] 具有一些 Rust 目前不允许用户定义类型拥有的特殊特性。

r[lang-types.box.deref]
* `Box<T>` 的[解引用运算符](expressions/operator-expr.md#the-dereference-operator)会产生一个可以[从中移动](expr.move.movable-place)的位置。这意味着 `*` 运算符和 `Box<T>` 的析构器是内建于语言中的。

r[lang-types.box.receiver]
* [方法](items/associated-items.md#associated-functions-and-methods)可以接受 `Box<Self>` 作为接收者。

r[lang-types.box.fundamental]
* 可以在与 `T` 相同的 crate 中为 `Box<T>` 实现 trait，而[孤儿规则](items/implementations.md#trait-implementation-coherence)会禁止对其他泛型类型这样做。

<!-- Editor Note: This is nowhere close to an exhaustive list -->

r[lang-types.rc]
## `Rc<T>`

r[lang-types.rc.receiver]
[方法](items/associated-items.md#associated-functions-and-methods)可以接受 [`Rc<Self>`](std::rc::Rc) 作为接收者。

r[lang-types.arc]
## `Arc<T>`

r[lang-types.arc.receiver]
[方法](items/associated-items.md#associated-functions-and-methods)可以接受 [`Arc<Self>`](std::sync::Arc) 作为接收者。

r[lang-types.pin]
## `Pin<P>`

r[lang-types.pin.receiver]
[方法](items/associated-items.md#associated-functions-and-methods)可以接受 [`Pin<P>`](std::pin::Pin) 作为接收者。

r[lang-types.unsafe-cell]
## `UnsafeCell<T>`

r[lang-types.unsafe-cell.interior-mut]
[`std::cell::UnsafeCell<T>`] 用于[内部可变性](interior-mutability.md)。它确保编译器不会执行对这类类型而言不正确的优化。

r[lang-types.unsafe-cell.read-only-alloc]
它还确保具有内部可变性类型的 [`static` 项](items/static-items.md)不会被放置在标记为只读的内存中。

r[lang-types.phantom-data]
## `PhantomData<T>`

[`std::marker::PhantomData<T>`] 是一种[零大小](glossary.zst)、最小对齐的类型；出于[型变](subtyping.md#variance)、[drop 检查](../nomicon/dropck.html)和[auto trait](#auto-traits)的目的，它被视为拥有一个 `T`。

r[lang-types.ops]
## 运算符 trait

[`std::ops`] 和 [`std::cmp`] 中的 trait 用于重载[运算符](expressions/operator-expr.md)、[索引表达式](expressions/array-expr.md#array-and-slice-indexing-expressions)和[调用表达式](expressions/call-expr.md)。

r[lang-types.deref]
## `Deref` 和 `DerefMut`

除了重载一元 `*` 运算符外，[`Deref`](std::ops::Deref) 和 [`DerefMut`](std::ops::DerefMut) 还用于[方法解析](expressions/method-call-expr.md)和[deref 强制转换](type-coercions.md#coercion-types)。

r[lang-types.drop]
## `Drop`

[`Drop`] trait 提供一个[析构器](destructors.md)，每当该类型的值即将被销毁时运行。

r[lang-types.copy]
## `Copy`

r[lang-types.copy.intro]
[`Copy`] trait 会改变实现它的类型的语义。

r[lang-types.copy.behavior]
类型实现了 `Copy` 的值在赋值时会被复制，而不是被移动。

r[lang-types.copy.constraint]
`Copy` 只能为未实现 `Drop` 且其字段全都是 `Copy` 的类型实现。对于枚举，这意味着所有变体的所有字段都必须是 `Copy`。对于联合体，这意味着所有变体都必须是 `Copy`。

r[lang-types.copy.builtin-types]
编译器为以下类型实现了 `Copy`：

r[lang-types.copy.tuple]
* `Copy` 类型组成的[元组](types/tuple.md)

r[lang-types.copy.fn-pointer]
* [函数指针](types/function-pointer.md)

r[lang-types.copy.fn-item]
* [函数项](types/function-item.md)

r[lang-types.copy.closure]
* 不捕获任何值或只捕获 `Copy` 类型的值的[闭包](types/closure.md)

r[lang-types.clone]
## `Clone`

r[lang-types.clone.intro]
[`Clone`] trait 是 `Copy` 的 supertrait，因此它也需要由编译器生成的实现。

r[lang-types.clone.builtin-types]
编译器会为以下类型实现它：

r[lang-types.clone.builtin-copy]
* 具有内置 `Copy` 实现的类型（见上文）

r[lang-types.clone.tuple]
* `Clone` 类型组成的[元组](types/tuple.md)

r[lang-types.clone.closure]
* 只捕获 `Clone` 类型的值或不从环境中捕获任何值的[闭包](types/closure.md)

r[lang-types.send]
## `Send`

[`Send`] trait 表示此类型的值可以安全地从一个线程发送到另一个线程。

r[lang-types.sync]
## `Sync`

r[lang-types.sync.intro]
[`Sync`] trait 表示此类型的值可以安全地在多个线程之间共享。

r[lang-types.sync.static-constraint]
所有用于不可变 [`static` 项](items/static-items.md)的类型都必须实现此 trait。

r[lang-types.termination]
## `Termination`

[`Termination`](std::process::Termination) trait 表示[main 函数](crates-and-source-files.md#main-functions)和[测试函数](attributes/testing.md#the-test-attribute)可接受的返回类型。

r[lang-types.auto-traits]
## auto trait

[`Send`]、[`Sync`]、[`Unpin`](std::marker::Unpin)、[`UnwindSafe`](std::panic::UnwindSafe) 和 [`RefUnwindSafe`](std::panic::RefUnwindSafe) trait 是 _auto trait_。auto trait 具有特殊属性。

r[lang-types.auto-traits.auto-impl]
如果没有为给定类型写出某个 auto trait 的显式实现或否定实现，那么编译器会根据以下规则自动实现它：

r[lang-types.auto-traits.builtin-composite]
* 如果 `T` 实现该 trait，则 `&T`、`&mut T`、`*const T`、`*mut T`、`[T; n]` 和 `[T]` 也实现该 trait。

r[lang-types.auto-traits.fn-item-pointer]
* 函数项类型和函数指针会自动实现该 trait。

r[lang-types.auto-traits.aggregate]
* 如果结构体、枚举、联合体和元组的所有字段都实现该 trait，则它们也实现该 trait。

r[lang-types.auto-traits.closure]
* 如果闭包所有捕获项的类型都实现该 trait，则闭包也实现该 trait。通过共享引用捕获一个 `T` 并按值捕获一个 `U` 的闭包，会实现 `&T` 和 `U` 二者都实现的任何 auto trait。

r[lang-types.auto-traits.generic-impl]
对于泛型类型（将上述内置类型视为关于 `T` 的泛型类型），如果存在可用的泛型实现，那么对于本可以使用该实现、只是未满足所需 trait 约束的类型，编译器不会自动实现它。例如，标准库为所有满足 `T` 为 `Sync` 的 `&T` 实现 `Send`；这意味着如果 `T` 是 `Send` 但不是 `Sync`，编译器不会为 `&T` 实现 `Send`。

r[lang-types.auto-traits.negative]
auto trait 也可以有否定实现，在标准库文档中显示为 `impl !AutoTrait for T`，它们会覆盖自动实现。例如，`*mut T` 有一个 `Send` 的否定实现，因此即使 `T` 是 `Send`，`*mut T` 也不是 `Send`。目前没有稳定方式指定额外的否定实现；它们只存在于标准库中。

r[lang-types.auto-traits.trait-object-marker]
auto trait 可以作为附加约束添加到任何 [trait 对象](types/trait-object.md) 上，即使通常只允许一个 trait。例如，`Box<dyn Debug + Send + UnwindSafe>` 是一个有效类型。

r[lang-types.sized]
## `Sized`

r[lang-types.sized.intro]
[`Sized`] trait 表示此类型的大小在编译时已知；也就是说，它不是[动态大小类型](dynamically-sized-types.md)。

r[lang-types.sized.implicit-sized]
[类型参数](types/parameters.md)（trait 中的 `Self` 除外）默认是 `Sized`，[关联类型](items/associated-items.md#associated-types)也是如此。

r[lang-types.sized.implicit-impl]
`Sized` 始终由编译器自动实现，而不是由[实现项](items/implementations.md)实现。

r[lang-types.sized.relaxation]
这些隐式 `Sized` 约束可以通过使用特殊的 `?Sized` 约束来放宽。

[`Arc<Self>`]: std::sync::Arc
[`Deref`]: std::ops::Deref
[`DerefMut`]: std::ops::DerefMut
[`Pin<P>`]: std::pin::Pin
[`Rc<Self>`]: std::rc::Rc
[`RefUnwindSafe`]: std::panic::RefUnwindSafe
[`Termination`]: std::process::Termination
[`UnwindSafe`]: std::panic::UnwindSafe
[`Unpin`]: std::marker::Unpin

[Arrays]: types/array.md
[associated types]: items/associated-items.md#associated-types
[call expressions]: expressions/call-expr.md
[deref coercions]: type-coercions.md#coercion-types
[dereference operator]: expressions/operator-expr.md#the-dereference-operator
[destructor]: destructors.md
[drop check]: ../nomicon/dropck.html
[dynamically sized type]: dynamically-sized-types.md
[Function pointers]: types/function-pointer.md
[Function items]: types/function-item.md
[implementation items]: items/implementations.md
[indexing expressions]: expressions/array-expr.md#array-and-slice-indexing-expressions
[interior mutability]: interior-mutability.md
[main function]: crates-and-source-files.md#main-functions
[Methods]: items/associated-items.md#associated-functions-and-methods
[method resolution]: expressions/method-call-expr.md
[moved from]: expr.move.movable-place
[operators]: expressions/operator-expr.md
[orphan rules]: items/implementations.md#trait-implementation-coherence
[`static` items]: items/static-items.md
[test functions]: attributes/testing.md#the-test-attribute
[the standard library]: std
[trait object]: types/trait-object.md
[Tuples]: types/tuple.md
[Type parameters]: types/parameters.md
[variance]: subtyping.md#variance
[zero-sized]: glossary.zst
[Closures]: types/closure.md
