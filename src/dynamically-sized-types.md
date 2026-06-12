r[dynamic-sized]
# 动态大小类型

r[dynamic-sized.intro]
大多数类型都有在编译时已知的固定大小，并实现 trait [`Sized`](special-types-and-traits.md#sized)。大小只有在运行时才知道的类型称为*动态大小类型*（_DST_），非正式地也称为 unsized 类型。[切片](types/slice.md)、[trait 对象](types/trait-object.md) 和 [str](types/str.md) 是 <abbr title="dynamically sized types">DSTs</abbr> 的例子。

r[dynamic-sized.restriction]
这类类型只能在某些情况下使用：

r[dynamic-sized.pointer-types]
* 指向 <abbr title="dynamically sized types">DSTs</abbr> 的[指针类型](types/pointer.md) 是有大小的，但其大小是指向有大小类型的指针的两倍
    * 指向切片和 `str` 的指针还会存储元素数量。
    * 指向 trait 对象的指针还会存储一个指向 vtable 的指针。

r[dynamic-sized.question-sized]
* <abbr title="dynamically sized types">DSTs</abbr> 可以作为类型实参提供给具有特殊 `?Sized` 边界的泛型类型形参。当对应的关联类型声明具有 `?Sized` 边界时，它们也可以用于关联类型定义。默认情况下，任何类型形参或关联类型都有 `Sized` 边界，除非使用 `?Sized` 将其放宽。

r[dynamic-sized.trait-impl]
* 可以为 <abbr title="dynamically sized
  types">DSTs</abbr> 实现 trait。与泛型类型形参不同，在 trait 定义中 `Self: ?Sized` 是默认情况。

r[dynamic-sized.struct-field]
* 结构体可以包含一个 <abbr title="dynamically sized type">DST</abbr> 作为最后一个字段；这会使该结构体本身成为一个 <abbr title="dynamically sized type">DST</abbr>。

> [!NOTE]
> [变量](variables.md)、函数形参、[const](items/constant-items.md) 项和 [static](items/static-items.md) 项必须是 `Sized`。

[sized]: special-types-and-traits.md#sized
[Slices]: types/slice.md
[str]: types/str.md
[trait objects]: types/trait-object.md
[Pointer types]: types/pointer.md
[Variables]: variables.md
[const]: items/constant-items.md
[static]: items/static-items.md
