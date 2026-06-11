r[type.pointer]
# 指针类型

r[type.pointer.intro]
所有指针都是显式的一等值。它们可以被移动或复制，可以存储到数据结构中，也可以从函数返回。

r[type.pointer.reference]
## 引用（`&` 和 `&mut`）

r[type.pointer.reference.syntax]
```grammar,types
ReferenceType -> `&` Lifetime? `mut`? TypeNoBounds
```

r[type.pointer.reference.shared]
### 共享引用（`&`）

r[type.pointer.reference.shared.intro]
共享引用指向由某个其他值拥有的内存。

r[type.pointer.reference.shared.constraint-mutation]
创建指向某个值的共享引用后，它会阻止对该值的直接变更。[内部可变性](../interior-mutability.md)在某些情况下为此提供例外。顾名思义，可以存在任意数量的指向同一个值的共享引用。共享引用类型写作 `&type`，在需要指定显式生命周期时写作 `&'a type`。

r[type.pointer.reference.shared.copy]
复制引用是一种“浅”操作：它只涉及复制指针本身，也就是说，指针是 `Copy` 的。释放一个引用不会影响它所指向的值，但对[临时值](../expressions.md#temporaries)的引用会让该临时值在引用本身的作用域期间保持存活。

r[type.pointer.reference.mut]
### 可变引用（`&mut`）

r[type.pointer.reference.mut.intro]
可变引用指向由某个其他值拥有的内存。可变引用类型写作 `&mut type` 或 `&'a mut type`。

r[type.pointer.reference.mut.copy]
一个（尚未被借用的）可变引用是访问其所指向值的唯一方式，因此它不是 `Copy` 的。

r[type.pointer.raw]
## 裸指针（`*const` 和 `*mut`）

r[type.pointer.raw.syntax]
```grammar,types
RawPointerType -> `*` ( `mut` | `const` ) TypeNoBounds
```

r[type.pointer.raw.intro]
裸指针是没有安全性或存活性保证的指针。裸指针写作 `*const T` 或 `*mut T`。例如，`*const i32` 表示指向 32 位整数的裸指针。

r[type.pointer.raw.copy]
复制或丢弃裸指针不会影响任何其他值的生命周期。

r[type.pointer.raw.safety]
解引用裸指针是一种 [`unsafe` 操作](../unsafety.md)。

这也可以通过重新借用裸指针（`&*` 或 `&mut *`）来将它转换为引用。通常不鼓励使用裸指针；它们的存在是为了支持与外部代码的互操作，以及编写性能关键或低层级函数。

r[type.pointer.raw.cmp]
比较裸指针时，比较的是它们的地址，而不是它们所指向的内容。比较指向[动态大小类型](../dynamically-sized-types.md)的裸指针时，还会比较它们的附加数据。

r[type.pointer.raw.constructor]
可以直接使用 `&raw const` 创建 `*const` 指针，使用 `&raw mut` 创建 `*mut` 指针。

r[type.pointer.smart]
## 智能指针

除了引用和裸指针之外，标准库还包含额外的“智能指针”类型。

r[type.pointer.validity]
## 位有效性

r[type.pointer.validity.pointer-fragment]
尽管在大多数平台生成的机器码中，指针和引用与 `usize` 类似，但将引用或指针类型转换为非指针类型的语义目前尚未确定。因此，将指针或引用类型 `P` 转换为 `[u8; size_of::<P>()]` 可能不是有效的。

r[type.pointer.validity.raw]
对于薄裸指针（即当 `T: Sized` 时，`P = *const T` 或 `P = *mut T`），反方向（从整数或整数数组转换为 `P`）始终是有效的。不过，通过这种转换生成的指针不得被解引用（即使 `T` 具有[零大小](../glossary.md#r-glossary.zst)也不行）。

[Interior mutability]: ../interior-mutability.md
[`unsafe` operation]: ../unsafety.md
[dynamically sized types]: ../dynamically-sized-types.md
[size zero]: glossary.zst
[temporary value]: ../expressions.md#temporaries
