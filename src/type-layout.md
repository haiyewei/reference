r[layout]
# 类型布局

r[layout.intro]
类型的布局包括它的大小、对齐以及其字段的相对偏移量。对于 enum，判别值如何布局和解释也属于类型布局的一部分。

r[layout.guarantees]
类型布局可能随每次编译而改变。我们不试图记录实际具体做了什么，而只记录目前保证的内容。

注意，即使两个类型具有相同布局，它们跨函数边界传递的方式仍可能不同。关于类型的函数调用 ABI 兼容性，见[这里](../core/primitive.fn.md#abi-compatibility)。

r[layout.properties]
## 大小和对齐

所有值都有对齐和大小。

r[layout.properties.align]
值的 _对齐_ 指定了哪些地址可用于存储该值。对齐为 `n` 的值只能存储在地址值为 n 的倍数的地址处。例如，对齐为 2 的值必须存储在偶数地址，而对齐为 1 的值可以存储在任意地址。对齐以字节为单位，必须至少为 1，并且始终是 2 的幂。可以使用 [`align_of_val`](../core/mem/fn.align_of_val.html) 函数检查值的对齐。

r[layout.properties.size]
值的 _大小_ 是具有该元素类型的数组中相邻元素之间的字节偏移量，包括对齐填充。值的大小始终是其对齐的倍数。注意，某些类型是[零大小](glossary.md#r-glossary.zst)；0 被视为任何对齐的倍数（例如，在某些平台上，类型 `[u16; 0]` 的大小为 0、对齐为 2）。可以使用 [`size_of_val`](../core/mem/fn.size_of_val.html) 函数检查值的大小。

r[layout.properties.sized]
所有值都具有相同大小和对齐，且二者在编译时已知的类型，实现 [`Sized`](../core/marker/trait.Sized.html) trait，并可用 [`size_of`](../core/mem/fn.size_of.html) 和 [`align_of`](../core/mem/fn.align_of.html) 函数检查。不是 [`Sized`](../core/marker/trait.Sized.html) 的类型称为[动态大小类型](dynamically-sized-types.md)。由于 `Sized` 类型的所有值共享相同的大小和对齐，我们分别将这些共享的量称为该类型的大小和该类型的对齐。

r[layout.primitive]
## 原始数据布局

r[layout.primitive.size]
大多数原始类型的大小见下表。

| 类型 | `size_of::<Type>()` |
|--                 |--                  |
| `bool` | 1 |
| `u8` / `i8` | 1 |
| `u16` / `i16` | 2 |
| `u32` / `i32` | 4 |
| `u64` / `i64` | 8 |
| `u128` / `i128` | 16 |
| `usize` / `isize` | 见下文 |
| `f32` | 4 |
| `f64` | 8 |
| `char` | 4 |

r[layout.primitive.size-minimum]
`usize` 和 `isize` 的大小足以容纳目标平台上的每个地址。例如，在 32 位目标上为 4 字节，在 64 位目标上为 8 字节。

r[layout.primitive.size-align]
`usize` 和 `isize` 具有相同的大小和对齐。

r[layout.primitive.platform-specific-alignment]
原始类型的对齐是平台特定的。大多数情况下，它们的对齐等于其大小，但也可能更小。特别是，`i128` 和 `u128` 虽然大小为 16，却通常按 4 或 8 字节对齐；在许多 32 位平台上，`i64`、`u64` 和 `f64` 只按 4 字节而不是 8 字节对齐。

r[layout.primitive.integer-alignment]
保证同一指定位宽的定宽有符号和无符号整数变体具有相同对齐——也就是说，对于给定大小 `N`，`align_of::<uN>() == align_of::<iN>()`。

r[layout.pointer]
## 指针和引用布局

r[layout.pointer.intro]
指针和引用具有相同布局。指针或引用的可变性不会改变布局。

r[layout.pointer.thin]
指向有大小类型的指针具有与 `usize` 相同的大小和对齐。

r[layout.pointer.unsized]
指向无大小类型的指针是有大小的。保证指向无大小类型的指针的大小和对齐分别大于或等于指向有大小类型的指针的大小和对齐。

> [!NOTE]
> 尽管你不应依赖这一点，但目前所有指向 <abbr title="Dynamically Sized Types">DSTs</abbr> 的指针的大小都是 `usize` 大小的两倍，并具有相同的对齐。

r[layout.array]
## 数组布局

`[T; N]` 数组的大小为 `size_of::<T>() * N`，并具有与 `T` 相同的对齐。数组的布局使得数组中从零开始计数的 `nth` 元素相对于数组开头的偏移量为 `n * size_of::<T>()` 字节。

r[layout.slice]
## 切片布局

切片与其切取的数组区段具有相同布局。

> [!NOTE]
> 这里说的是原始 `[T]` 类型，而不是指向切片的指针（`&[T]`、`Box<[T]>` 等）。

r[layout.str]
## `str` 布局

字符串切片是字符的 UTF-8 表示，其布局与类型 `[u8]` 的切片相同。引用 `&str` 与引用 `&[u8]` 具有相同布局。

r[layout.tuple]
## 元组布局

r[layout.tuple.def]
元组按照 [`Rust` 表示](#the-rust-representation)进行布局。

r[layout.tuple.unit]
例外是单元元组（`()`），保证它作为[零大小类型](glossary.md#r-glossary.zst)具有大小 0 和对齐 1。

r[layout.trait-object]
## trait 对象布局

trait 对象与其所表示的值具有相同布局。

> [!NOTE]
> 这里说的是原始 trait 对象类型，而不是指向 trait 对象的指针（`&dyn Trait`、`Box<dyn Trait>` 等）。

r[layout.closure]
## 闭包布局

闭包没有布局保证。

r[layout.repr]
## 表示

r[layout.repr.intro]
所有用户定义的复合类型（`struct`、`enum` 和 `union`）都有一个 _表示_，用于指定该类型的布局。

r[layout.repr.kinds]
类型可能具有的表示有：

- [`Rust`](#the-rust-representation)（默认）
- [`C`](#the-c-representation)
- [原始表示](#primitive-representations)
- [`transparent`](#the-transparent-representation)

r[layout.repr.attribute]
可以通过对类型应用 `repr` 属性来改变类型的表示。下面的示例展示了一个具有 `C` 表示的 struct。

```rust
#[repr(C)]
struct ThreeInts {
    first: i16,
    second: i8,
    third: i32
}
```

r[layout.repr.align-packed]
可以分别使用 `align` 和 `packed` 修饰符提高或降低对齐。它们会更改属性中指定的表示。如果未指定表示，则会更改默认表示。

```rust
// 默认表示，对齐降低为 2。
#[repr(packed(2))]
struct PackedStruct {
    first: i16,
    second: i8,
    third: i32
}

// C 表示，对齐提高为 8
#[repr(C, align(8))]
struct AlignedStruct {
    first: i16,
    second: i8,
    third: i32
}
```

> [!NOTE]
> 由于表示是项上的属性，表示不依赖于泛型参数。任何两个具有相同名称的类型都有相同表示。例如，`Foo<Bar>` 和 `Foo<Baz>` 都具有相同表示。

r[layout.repr.inter-field]
类型的表示可以改变字段之间的填充，但不会改变字段本身的布局。例如，一个具有 `C` 表示的 struct，如果包含一个具有 `Rust` 表示的 struct `Inner`，则不会改变 `Inner` 的布局。

<a id="the-default-representation"></a>
r[layout.repr.rust]
### `Rust` 表示

r[layout.repr.rust.intro]
`Rust` 表示是没有 `repr` 属性的名义类型的默认表示。通过 `repr` 属性显式使用此表示，保证与完全省略该属性相同。

r[layout.repr.rust.layout]
此表示作出的数据布局保证只有健全性所要求的那些。它们是：

 1. 字段的偏移量可被该字段的对齐整除。
 2. 类型的对齐至少是其字段的最大对齐。

r[layout.repr.rust.layout.struct]
对于 [struct](items/structs.md)，还进一步保证字段不重叠。也就是说，可以对字段排序，使得任意字段的偏移量加上其大小小于或等于该排序中下一个字段的偏移量。该排序不必与类型声明中指定字段的顺序相同。

注意，此保证并不意味着字段具有不同地址：[零大小类型](glossary.md#r-glossary.zst) 可能与同一 struct 中的其他字段具有相同地址。

r[layout.repr.rust.unspecified]
此表示不作其他数据布局保证。

r[layout.repr.c]
### `C` 表示

r[layout.repr.c.intro]
`C` 表示有双重目的。一个目的是创建可与 C 语言互操作的类型。第二个目的是创建可以健全地在其上执行依赖数据布局的操作（例如将值重新解释为不同类型）的类型。

由于这种双重目的，可以创建出不适合与 C 编程语言交互的类型。

r[layout.repr.c.constraint]
此表示可以应用于 struct、union 和 enum。例外是[零变体枚举](items/enumerations.md#zero-variant-enums)，对它们使用 `C` 表示会出错。

r[layout.repr.c.struct]
#### `#[repr(C)]` struct

r[layout.repr.c.struct.align]
struct 的对齐是其中对齐要求最高的字段的对齐；如果没有字段，则为 1。

r[layout.repr.c.struct.size-field-offset]
字段的大小和偏移量由以下算法确定。

从当前偏移量 0 字节开始。

对于 struct 中按声明顺序排列的每个字段，首先确定该字段的大小和对齐。如果当前偏移量不是该字段对齐的倍数，则向当前偏移量添加填充字节，直到它成为该字段对齐的倍数。该字段的偏移量就是此时的当前偏移量。然后将当前偏移量增加该字段的大小。

最后，struct 的大小是将当前偏移量向上取整到最接近的 struct 对齐倍数后的值。

下面用伪代码描述此算法。

<!-- ignore: pseudocode -->
```rust,ignore
/// Returns the amount of padding needed after `offset` to ensure that the
/// following address will be aligned to `alignment`.
fn padding_needed_for(offset: usize, alignment: usize) -> usize {
    let misalignment = offset % alignment;
    if misalignment > 0 {
        // 向上取整到下一个 `alignment` 的倍数
        alignment - misalignment
    } else {
        // 已经是 `alignment` 的倍数
        0
    }
}

struct.alignment = struct.fields().map(|field| field.alignment).max();

let current_offset = 0;

for field in struct.fields_in_declaration_order() {
    // Increase the current offset so that it's a multiple of the alignment
    // of this field. For the first field, this will always be zero.
    // The skipped bytes are called padding bytes.
    current_offset += padding_needed_for(current_offset, field.alignment);

    struct[field].offset = current_offset;

    current_offset += field.size;
}

struct.size = current_offset + padding_needed_for(current_offset, struct.alignment);
```

> [!WARNING]
> 为了清晰起见，此伪代码使用忽略溢出问题的朴素算法。要在实际代码中执行内存布局计算，请使用 [`Layout`](../core/alloc/layout/struct.Layout.html)。

> [!NOTE]
> 此算法可以产生[零大小](glossary.md#r-glossary.zst) struct。在 C 中，像 `struct Foo { }` 这样的空 struct 声明是非法的。不过，gcc 和 clang 都支持启用这类 struct 的选项，并赋予它们零大小。相比之下，C++ 会给空 struct 大小 1，除非它们被继承，或者它们是具有 `[[no_unique_address]]` 属性的字段；在这些情况下，它们不会增加 struct 的整体大小。

r[layout.repr.c.union]
#### `#[repr(C)]` union

r[layout.repr.c.union.intro]
使用 `#[repr(C)]` 声明的 union 将具有与目标平台上 C 语言中等价的 C union 声明相同的大小和对齐。

r[layout.repr.c.union.size-align]
union 的大小是其所有字段最大大小按其对齐向上取整后的值，对齐是其所有字段的最大对齐。这两个最大值可能来自不同字段。每个字段都位于从 union 开头起的字节偏移量 0 处。

```rust
#[repr(C)]
union Union {
    f1: u16,
    f2: [u8; 4],
}

assert_eq!(std::mem::size_of::<Union>(), 4);  // From f2
assert_eq!(std::mem::align_of::<Union>(), 2); // From f1

assert_eq!(std::mem::offset_of!(Union, f1), 0);
assert_eq!(std::mem::offset_of!(Union, f2), 0);

#[repr(C)]
union SizeRoundedUp {
   a: u32,
   b: [u16; 3],
}

assert_eq!(std::mem::size_of::<SizeRoundedUp>(), 8);  // Size of 6 from b,
                                                      // rounded up to 8 from
                                                      // alignment of a.
assert_eq!(std::mem::align_of::<SizeRoundedUp>(), 4); // From a

assert_eq!(std::mem::offset_of!(SizeRoundedUp, a), 0);
assert_eq!(std::mem::offset_of!(SizeRoundedUp, b), 0);
```

r[layout.repr.c.enum]
#### `#[repr(C)]` 无字段 enum

对于[无字段枚举](items/enumerations.md#field-less-enum)，`C` 表示的大小和对齐等同于目标平台 C ABI 中默认的 `enum` 大小和对齐。

> [!NOTE]
> C 中的 enum 表示由实现定义，因此这实际上只是“最佳猜测”。特别是，当相关 C 代码使用某些标志编译时，这可能不正确。

> [!WARNING]
> C 语言中的 `enum` 与 Rust 中使用此表示的[无字段枚举](items/enumerations.md#field-less-enum)之间存在关键差异。C 中的 `enum` 大多是一个 `typedef` 加上一些具名常量；换句话说，`enum` 类型的对象可以持有任何整数值。例如，这在 `C` 中常用于 bitflags。相比之下，Rust 的[无字段枚举](items/enumerations.md#field-less-enum)只能合法地持有判别值，其他一切都是[未定义行为](behavior-considered-undefined.md)。因此，在 FFI 中使用无字段枚举来模拟 C `enum` 往往是错误的。

r[layout.repr.c.adt]
#### `#[repr(C)]` 带字段 enum

r[layout.repr.c.adt.intro]
带字段的 `repr(C)` enum 的表示是一个有两个字段的 `repr(C)` struct，在 C 中也称为“tagged union”：

r[layout.repr.c.adt.tag]
- 该 enum 移除所有字段后的 `repr(C)` 版本（“标签”）

r[layout.repr.c.adt.fields]
- 由每个带字段变体的字段所对应的 `repr(C)` struct 构成的 `repr(C)` union（“载荷”）

> [!NOTE]
> 由于 `repr(C)` struct 和 union 的表示，如果某个变体只有一个字段，那么将该字段直接放入 union 与将其包装在 struct 中没有区别；因此，任何希望操作这种 `enum` 表示的系统都可以使用对它们来说更方便或更一致的形式。

```rust
// 此 Enum 具有与以下内容相同的表示...
#[repr(C)]
enum MyEnum {
    A(u32),
    B(f32, u64),
    C { x: u32, y: u8 },
    D,
 }

// ...这个 struct。
#[repr(C)]
struct MyEnumRepr {
    tag: MyEnumDiscriminant,
    payload: MyEnumFields,
}

// 这是判别值 enum。
#[repr(C)]
enum MyEnumDiscriminant { A, B, C, D }

// 这是变体 union。
#[repr(C)]
union MyEnumFields {
    A: MyAFields,
    B: MyBFields,
    C: MyCFields,
    D: MyDFields,
}

#[repr(C)]
#[derive(Copy, Clone)]
struct MyAFields(u32);

#[repr(C)]
#[derive(Copy, Clone)]
struct MyBFields(f32, u64);

#[repr(C)]
#[derive(Copy, Clone)]
struct MyCFields { x: u32, y: u8 }

// This struct could be omitted (it is a zero-sized type), and it must be in
// C/C++ headers.
#[repr(C)]
#[derive(Copy, Clone)]
struct MyDFields;
```

r[layout.repr.primitive]
### 原始表示

r[layout.repr.primitive.intro]
_原始表示_ 是与原始整数类型同名的表示。也就是：`u8`、`u16`、`u32`、`u64`、`u128`、`usize`、`i8`、`i16`、`i32`、`i64`、`i128` 和 `isize`。

r[layout.repr.primitive.constraint]
原始表示只能应用于枚举，并且根据 enum 是否有字段而有不同的行为。对[零变体枚举](items/enumerations.md#zero-variant-enums)使用原始表示是错误。将两个原始表示组合在一起是错误。

r[layout.repr.primitive.enum]
#### 无字段枚举的原始表示

对于[无字段枚举](items/enumerations.md#field-less-enum)，原始表示会将大小和对齐设为与同名原始类型相同。例如，具有 `u8` 表示的无字段枚举只能具有 0 到 255（含）之间的判别值。

r[layout.repr.primitive.adt]
#### 带字段枚举的原始表示

原始表示枚举的表示是一个 `repr(C)` union，其中包含每个带字段变体对应的 `repr(C)` struct。union 中每个 struct 的第一个字段是该 enum 移除所有字段后的原始表示版本（“标签”），其余字段是该变体的字段。

> [!NOTE]
> 如果将标签作为自己的成员放在 union 中，此表示不变；如果这能让操作对你更清晰的话可以这样做（不过，为了遵循 C++ 标准，标签成员应包装在 `struct` 中）。

```rust
// 此 enum 具有与以下内容相同的表示...
#[repr(u8)]
enum MyEnum {
    A(u32),
    B(f32, u64),
    C { x: u32, y: u8 },
    D,
 }

// ...这个 union。
#[repr(C)]
union MyEnumRepr {
    A: MyVariantA,
    B: MyVariantB,
    C: MyVariantC,
    D: MyVariantD,
}

// 这是判别值 enum。
#[repr(u8)]
#[derive(Copy, Clone)]
enum MyEnumDiscriminant { A, B, C, D }

#[repr(C)]
#[derive(Clone, Copy)]
struct MyVariantA(MyEnumDiscriminant, u32);

#[repr(C)]
#[derive(Clone, Copy)]
struct MyVariantB(MyEnumDiscriminant, f32, u64);

#[repr(C)]
#[derive(Clone, Copy)]
struct MyVariantC { tag: MyEnumDiscriminant, x: u32, y: u8 }

#[repr(C)]
#[derive(Clone, Copy)]
struct MyVariantD(MyEnumDiscriminant);
```

r[layout.repr.primitive-c]
#### 组合带字段枚举的原始表示和 `#[repr(C)]`

对于带字段枚举，也可以组合 `repr(C)` 和原始表示（例如 `repr(C, u8)`）。这会修改 [`repr(C)`](#reprc-enums-with-fields)，将判别值 enum 的表示改为所选原始类型。因此，如果选择 `u8` 表示，判别值 enum 的大小和对齐将为 1 字节。

前面[示例](#reprc-enums-with-fields)中的判别值 enum 随后变为：

```rust
#[repr(C, u8)] // `u8` was added
enum MyEnum {
    A(u32),
    B(f32, u64),
    C { x: u32, y: u8 },
    D,
 }

// ...

#[repr(u8)] // So `u8` is used here instead of `C`
enum MyEnumDiscriminant { A, B, C, D }

// ...
```

例如，对于 `repr(C, u8)` enum，不可能有 257 个唯一判别值（“标签”）；而同一个 enum 如果只有 `repr(C)` 属性，则会顺利编译。

除了 `repr(C)` 之外再使用原始表示，可能会改变 enum 相对于 `repr(C)` 形式的大小：

```rust
#[repr(C)]
enum EnumC {
    Variant0(u8),
    Variant1,
}

#[repr(C, u8)]
enum Enum8 {
    Variant0(u8),
    Variant1,
}

#[repr(C, u16)]
enum Enum16 {
    Variant0(u8),
    Variant1,
}

// C 表示的大小依赖平台
assert_eq!(std::mem::size_of::<EnumC>(), 8);
// 判别值一个字节，Enum8::Variant0 中的值一个字节
assert_eq!(std::mem::size_of::<Enum8>(), 2);
// Two bytes for the discriminant and one byte for the value in Enum16::Variant0
// plus one byte of padding.
assert_eq!(std::mem::size_of::<Enum16>(), 4);
```

[`repr(C)`]: #reprc-enums-with-fields

r[layout.repr.alignment]
### 对齐修饰符

r[layout.repr.alignment.intro]
`align` 和 `packed` 修饰符可分别用于提高或降低 `struct` 和 `union` 的对齐。`packed` 也可能改变字段之间的填充（不过它不会改变任何字段内部的填充）。`align` 和 `packed` 本身不保证 struct 布局或 enum 变体布局中字段的顺序，不过它们可以与确实提供此类保证的表示（如 `C`）组合使用。

r[layout.repr.alignment.constraint-alignment]
对齐以 `#[repr(align(x))]` 或 `#[repr(packed(x))]` 形式的整数参数指定。对齐值必须是从 1 到 2<sup>29</sup> 的 2 的幂。对于 `packed`，如果未给出值，如 `#[repr(packed)]`，则该值为 1。

r[layout.repr.alignment.align]
对于 `align`，如果指定的对齐小于没有 `align` 修饰符时该类型的对齐，则对齐不受影响。

r[layout.repr.alignment.packed]
对于 `packed`，如果指定的对齐大于没有 `packed` 修饰符时该类型的对齐，则对齐和布局不受影响。

r[layout.repr.alignment.packed-fields]
为放置字段而使用的每个字段的对齐，是指定对齐和该字段类型对齐两者中的较小者。

r[layout.repr.alignment.packed-padding]
保证字段间填充是满足每个字段（可能已更改的）对齐所需的最小填充（不过请注意，`packed` 本身不提供任何字段排序保证）。这些规则的一个重要后果是，具有 `#[repr(packed(1))]`（或 `#[repr(packed)]`）的类型没有字段间填充。

r[layout.repr.alignment.constraint-exclusive]
`align` 和 `packed` 修饰符不能应用于同一类型，且 `packed` 类型不能传递地包含另一个已 `align` 的类型。`align` 和 `packed` 只能应用于 [`Rust`](#the-rust-representation) 和 [`C`](#the-c-representation) 表示。

r[layout.repr.alignment.enum]
`align` 修饰符也可以应用于 `enum`。这样做时，它对 `enum` 对齐的影响，就像将该 `enum` 包装在具有相同 `align` 修饰符的 newtype `struct` 中一样。

> [!NOTE]
> 不允许引用未对齐字段，因为这是[未定义行为](behavior-considered-undefined.md)。当字段因对齐修饰符而未对齐时，使用引用和解引用可考虑以下选项：
>
> ```rust
> #[repr(packed)]
> struct Packed {
>     f1: u8,
>     f2: u16,
> }
> let mut e = Packed { f1: 1, f2: 2 };
> // 不要创建指向字段的引用，而是将值复制到局部变量。
> let x = e.f2;
> // 或者在 `println!` 这类会创建引用的情形中，使用花括号
> // 将它改为值的副本。
> println!("{}", {e.f2});
> // 或者如果需要指针，使用用于读写的未对齐方法，
> // 而不是直接解引用指针。
> let ptr: *const u16 = &raw const e.f2;
> let value = unsafe { ptr.read_unaligned() };
> let mut_ptr: *mut u16 = &raw mut e.f2;
> unsafe { mut_ptr.write_unaligned(3) }
> ```

r[layout.repr.transparent]
### `transparent` 表示

r[layout.repr.transparent.constraint-field]
`transparent` 表示只能用于 [`struct`](items/structs.md)，或用于具有单个变体的 [`enum`](items/enumerations.md)，并且其具有：
- 任意数量大小为 0 且对齐为 1 的字段（例如 [`PhantomData<T>`](special-types-and-traits.md#phantomdatat)），以及
- 至多一个其他字段。

r[layout.repr.transparent.layout-abi]
具有此表示的 struct 和 enum，如果存在唯一一个不属于大小 0 且对齐 1 的字段，则具有与该字段相同的布局和 ABI；否则具有与单元类型相同的布局和 ABI。

这不同于 `C` 表示，因为具有 `C` 表示的 struct 总是具有 `C` `struct` 的 ABI；而例如，具有 `transparent` 表示且包含原始字段的 struct 将具有该原始字段的 ABI。

r[layout.repr.transparent.constraint-exclusive]
由于此表示将类型布局委托给另一个类型，因此不能与任何其他表示一起使用。

[`align_of_val`]: std::mem::align_of_val
[`size_of_val`]: std::mem::size_of_val
[`align_of`]: std::mem::align_of
[`size_of`]: std::mem::size_of
[`Sized`]: std::marker::Sized
[`Copy`]: std::marker::Copy
[dynamically sized types]: dynamically-sized-types.md
[field-less enums]: items/enumerations.md#field-less-enum
[fn-abi-compatibility]: ../core/primitive.fn.md#abi-compatibility
[enumerations]: items/enumerations.md
[zero-variant enums]: items/enumerations.md#zero-variant-enums
[undefined behavior]: behavior-considered-undefined.md
[zero-sized]: glossary.zst
[zero-sized type]: glossary.zst
[zero-sized types]: glossary.zst
[`PhantomData<T>`]: special-types-and-traits.md#phantomdatat
[`Rust`]: #the-rust-representation
[`C`]: #the-c-representation
[primitive representations]: #primitive-representations
[structs]: items/structs.md
[`transparent`]: #the-transparent-representation
[`Layout`]: std::alloc::Layout
