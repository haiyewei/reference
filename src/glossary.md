# 术语表

r[glossary.ast]
### 抽象语法树

“抽象语法树”，或称 “AST”，是编译器编译程序时程序结构的一种中间表示。

### 对齐

值的对齐指定了值优先从哪些地址开始存放。它始终是 2 的幂。对值的引用必须是对齐的。[更多信息](type-layout.md#size-and-alignment)。

r[glossary.abi]
### 应用二进制接口（ABI）

*应用程序二进制接口*（ABI）定义编译后的代码如何与其他编译后的代码交互。对于 [`extern` 块](items.extern)和 [`extern fn`](items.fn.extern)，*ABI 字符串*会影响：

- **调用约定**：函数实参如何传递、值如何返回（例如在寄存器中或在栈上），以及由谁负责清理栈。
- **展开**：是否允许栈展开。例如，`"C-unwind"` ABI 允许跨 FFI 边界展开，而 `"C"` ABI 不允许。

### 元数

元数指函数或运算符接受的实参数量。例如，`f(2, 3)` 和 `g(4, 6)` 的元数为 2，而 `h(8, 2, 6)` 的元数为 3。`!` 运算符的元数为 1。

### 数组

数组有时也称为固定大小数组或内联数组，是一个表示元素集合的值；每个元素由索引选择，而该索引可由程序在运行时计算。数组占据一段连续的内存区域。

### 关联项

关联项是与另一个项相关联的项。关联项定义在[实现](items/implementations.md)中，并声明在 [trait](items/traits.md) 中。只有函数、常量和类型别名可以成为关联项。对比[自由项](#free-item)。

### 毯式实现

任何有某个类型以[未覆盖](#uncovered-type)形式出现的实现。`impl<T> Foo for T`、`impl<T> Bar<T> for T`、`impl<T> Bar<Vec<T>> for T` 和 `impl<T> Bar<T> for Vec<T>` 都被视为毯式 impl。不过，`impl<T> Bar<Vec<T>> for Vec<T>` 不是毯式 impl，因为此 `impl` 中出现的所有 `T` 都由 `Vec` 覆盖。

### 约束

约束是施加在类型或 trait 上的限制。例如，如果对函数接受的参数施加约束，则传递给该函数的类型必须遵守该约束。

### 组合子

组合子是高阶函数，它们只应用函数和先前定义的组合子，根据它们的参数产生结果。它们可用于以模块化方式管理控制流。

### crate

crate 是编译和链接的单位。crate 有不同的 [crate 类型](linkage.md)，例如库或可执行文件。crate 可以链接并引用其他库 crate，这些库 crate 称为外部 crate。crate 拥有一个自包含的[模块](items/modules.md)树，从一个未命名的根模块开始，该根模块称为 crate 根。可以通过在 crate 根中将[项](items.md)标记为公开，使其对其他 crate 可见；这也包括通过公开模块的[路径](paths.md)使其可见。[更多信息](crates-and-source-files.md)。

### 分派

分派是在涉及多态时，确定实际运行代码的哪个具体版本的机制。分派的两种主要形式是静态分派和动态分派。Rust 通过使用[trait 对象][type.trait-object]支持动态分派。

### 动态大小类型

动态大小类型（DST）是没有静态已知大小或对齐的类型。

### 实体

[*实体*](names.md)是一种语言构造，可在源程序中以某种方式引用，通常是通过[路径](paths.md)引用。实体包括[类型](types.md)、[项](items.md)、[泛型参数](items/generics.md)、[变量绑定](patterns.md)、[循环标签](tokens.md#lifetimes-and-loop-labels)、[生命周期](tokens.md#lifetimes-and-loop-labels)、[字段](expressions/field-expr.md)、[属性](attributes.md)和 [lint](attributes/diagnostics.md#lint-check-attributes)。

### 表达式

表达式是值、常量、变量、运算符和函数的组合，会求值为单个值，可以带有或不带有副作用。

例如，`2 + (3 * 4)` 是一个返回值 14 的表达式。

### 自由项

不属于[实现](items/implementations.md)成员的[项](items.md)，例如*自由函数*或*自由 const*。对比[关联项](#associated-item)。

### 基本 trait

基本 trait 指这样一种 trait：如果为某个既有类型添加它的 impl，就会造成破坏性变更。`Fn` trait 和 `Sized` 都是基本 trait。

### 基本类型构造器

基本类型构造器指这样一种类型：如果在它之上实现[毯式实现](#blanket-implementation)，就会造成破坏性变更。`&`、`&mut`、`Box` 和 `Pin` 都是基本类型构造器。

每当类型 `T` 被认为是[本地](#local-type)类型时，`&T`、`&mut T`、`Box<T>` 和 `Pin<T>` 也被认为是本地的。基本类型构造器不能[覆盖](#uncovered-type)其他类型。每当使用术语“已覆盖类型”时，`&T`、`&mut T`、`Box<T>` 和 `Pin<T>` 中的 `T` 都不被视为已覆盖。

### 有值类型

如果一个类型具有构造器，因而可以被实例化，则它是有值类型。有值类型在可以存在该类型的值这一意义上不是“空”的。与[无值类型](#uninhabited)相对。

### 固有实现

适用于名义类型而不是 trait-类型对的[实现](items/implementations.md)。[更多信息](items/implementations.md#inherent-implementations)。

### 固有方法

定义在[固有实现](items/implementations.md#inherent-implementations)中，而不是定义在 trait 实现中的[方法](items/associated-items.md#methods)。

### 已初始化

如果变量已被赋值，并且此后未被移出，则它是已初始化的。所有其他内存位置都假定为未初始化。只有 unsafe Rust 能创建未初始化的内存位置。

### 本地 trait

在当前 crate 中定义的 `trait`。一个 trait 定义是否本地，不取决于所应用的类型实参。给定 `trait Foo<T, U>`，无论替换 `T` 和 `U` 的类型是什么，`Foo` 始终是本地的。

### 本地类型

在当前 crate 中定义的 `struct`、`enum` 或 `union`。这不受所应用的类型实参影响。`struct Foo` 被认为是本地的，但 `Vec<Foo>` 不是。`LocalType<ForeignType>` 是本地的。类型别名不影响本地性。

### 模块

模块是包含零个或多个[项](items.md)的容器。模块组织成一棵树，从根部一个未命名模块开始，该模块称为 crate 根或根模块。[路径](paths.md)可用于引用其他模块中的项，这种引用可能受到[可见性规则](visibility-and-privacy.md)限制。[更多信息](items/modules.md)

### 名称

[*名称*](names.md)是指称某个[实体](#entity)的[标识符](identifiers.md)或[生命周期或循环标签](tokens.md#lifetimes-and-loop-labels)。当实体声明引入一个与该实体关联的标识符或标签时，就形成了*名称绑定*。[路径](paths.md)、标识符和标签用于指称实体。

### 名称解析

[*名称解析*](names/name-resolution.md)是在编译时将[路径](paths.md)、[标识符](identifiers.md)和[标签](tokens.md#lifetimes-and-loop-labels)关联到[实体](#entity)声明的过程。

### 命名空间

*命名空间*是根据名称所指称的[实体](#entity)种类，对已声明[名称](#name)进行的逻辑分组。命名空间允许一个命名空间中出现的名称不与另一个命名空间中的同名名称冲突。

在一个命名空间内，名称按层次结构组织，该层次结构的每一级都有自己的具名实体集合。

### 名义类型

可以由路径直接引用的类型。具体而言，包括[枚举](items/enumerations.md)、[结构体](items/structs.md)、[联合体](items/unions.md)和 [trait 对象类型](types/trait-object.md)。

### dyn 兼容 trait

可用于 [trait 对象类型](types/trait-object.md)（`dyn Trait`）的 [trait](items/traits.md)。只有遵循特定[规则](items/traits.md#dyn-compatibility)的 trait 才是 *dyn 兼容* 的。

这些过去称为 _object safe_ trait（对象安全 trait）。

### 路径

[*路径*](paths.md)是由一个或多个路径段组成的序列，用于指称当前作用域或[命名空间](#namespace)层次结构其他层级中的[实体](#entity)。

### Prelude

Prelude，或称 The Rust Prelude，是一小组项（主要是 trait），会导入到每个 crate 的每个模块中。prelude 中的 trait 是普遍可用的。

### 作用域

[*作用域*](names/scopes.md)是源文本中的区域，在该区域内，可以用某个名称引用具名[实体](#entity)。

### 被匹配值

被匹配值是在 `match` 表达式和类似模式匹配构造中被匹配的表达式。例如，在 `match x { A => 1, B => 2 }` 中，表达式 `x` 就是被匹配值。

### 大小

值的大小有两个定义。

第一个定义是：存储该值必须分配多少内存。

第二个定义是：在以该值的类型作为元素类型的数组中，相邻元素之间的字节偏移量。

它是对齐的倍数，零也包括在内。大小可能随编译器版本（随着新的优化实现）和目标平台而改变（类似于 `usize` 随平台而异）。

[更多信息](type-layout.md#size-and-alignment)。

### 切片

切片是对一个连续序列的动态大小视图，写作 `[T]`。

它通常以借用形式出现，可以是可变借用或共享借用。共享切片类型是 `&[T]`，而可变切片类型是 `&mut [T]`，其中 `T` 表示元素类型。

### 语句

语句是编程语言中最小的独立元素，用于命令计算机执行一个动作。

### 字符串字面量

字符串字面量是直接存储在最终二进制文件中的字符串，因此会在 `'static` 生命周期内有效。

它的类型是具有 `'static` 生命周期的借用字符串切片，`&'static str`。

### 字符串切片

字符串切片是 Rust 中最原始的字符串类型，写作 `str`。它通常以借用形式出现，可以是可变借用或共享借用。共享字符串切片类型是 `&str`，而可变字符串切片类型是 `&mut str`。

字符串切片始终是有效的 UTF-8。

### Trait

trait 是一种语言项，用于描述类型必须提供的功能。它允许类型对其行为作出某些承诺。

泛型函数和泛型结构体可以使用 trait 来约束，或者说限定，其接受的类型。

### Turbofish

表达式中带有泛型参数的路径必须在起始尖括号前加上 `::`。与泛型的尖括号结合后，这看起来像一条鱼 `::<>`。因此，这种语法俗称 turbofish 语法。

示例：

```rust
let ok_num = Ok::<_, ()>(5);
let vec = [1, 2, 3].iter().map(|n| n * 2).collect::<Vec<_>>();
```

此 `::` 前缀是必需的，用于消除泛型路径与逗号分隔列表中的多个比较之间的歧义。请参见 [the bastion of the turbofish](https://github.com/rust-lang/rust/blob/1.58.0/src/test/ui/parser/bastion-of-the-turbofish.rs)，其中给出了没有该前缀时会产生歧义的示例。

### 未覆盖类型

未作为另一种类型的实参出现的类型。例如，`T` 是未覆盖的，但 `Vec<T>` 中的 `T` 是已覆盖的。这只与类型实参有关。

### 未定义行为

编译时或运行时未指定的行为。这可能导致但不限于：进程终止或损坏；不当、错误或非预期的计算；或平台特定的结果。[更多信息](behavior-considered-undefined.md)。

r[glossary.uninhabited]
### 无值类型

如果一个类型没有构造器，因而永远不能被实例化，则它是无值类型。无值类型在不存在该类型的任何值这一意义上是“空”的。无值类型的标准示例是 [never 类型](types/never.md) `!`，或没有变体的 enum `enum Never { }`。与[有值类型](#inhabited)相对。

r[glossary.zst]
### 零大小类型 (ZST)

如果某个类型的大小为 0，则它是零大小类型（ZST）。这类类型最多只有一个可能的值。例子包括：

- [单元类型](type.tuple.unit)（见 [layout.tuple.unit]）。
- [函数项](type.fn-item)（见 [type.fn-item.intro]）。
- [类元组结构体](items.struct.tuple)的构造器（见 [type.fn-item.intro]）。
- [类元组 enum 变体](items.enum.constructor-namespace)的构造器（见 [type.fn-item.intro]）。
- 无字段或所有字段均为零大小的 `repr(C)` [结构体](items/structs.md)（见 [layout.repr.c.struct.size-field-offset]）。
- 无字段或所有字段均为零大小的 `repr(transparent)` [结构体](items/structs.md)（见 [layout.repr.transparent.layout-abi]）。
- 零大小类型的[数组](type.array)（见 [layout.array]）。
- 长度为零的[数组](type.array)（见 [layout.array]）。
- 由零大小类型组成的[联合体](items/unions.md)（见 [items.union.common-storage]）。

```rust
# use core::mem::{size_of, size_of_val};
fn f() {}
struct S(u8);
enum E { V(u8) }
#[repr(C)]
struct C1 {}
#[repr(C)]
struct C2 {
    f1: (),
    f2: [(); 10],
    f3: [u8; 0],
    f4: C1,
}
#[repr(transparent)]
struct T1 {}
#[repr(transparent)]
struct T2 {
    f1: (),
    f2: [(); 10],
    f3: [u8; 0],
}
union U {
    f1: (),
    f2: [(); 10],
    f3: [u8; 0],
}
assert_eq!(0, size_of::<()>());
assert_eq!(0, size_of_val(&f));
assert_eq!(0, size_of_val(&S));
assert_eq!(0, size_of_val(&E::V));
assert_eq!(0, size_of::<C1>());
assert_eq!(0, size_of::<C2>());
assert_eq!(0, size_of::<T1>());
assert_eq!(0, size_of::<T2>());
assert_eq!(0, size_of::<[(); 10]>());
assert_eq!(0, size_of::<[u8; 0]>());
assert_eq!(0, size_of::<U>());
```

[`extern` blocks]: items.extern
[`extern fn`]: items.fn.extern
[alignment]: type-layout.md#size-and-alignment
[arrays]: type.array
[associated item]: #associated-item
[attributes]: attributes.md
[*entity*]: names.md
[crate]: crates-and-source-files.md
[dyn compatibility]: items/traits.md#dyn-compatibility
[enums]: items/enumerations.md
[fields]: expressions/field-expr.md
[free item]: #free-item
[function items]: type.fn-item
[generic parameters]: items/generics.md
[identifier]: identifiers.md
[identifiers]: identifiers.md
[implementation]: items/implementations.md
[implementations]: items/implementations.md
[inherent implementation]: items/implementations.md#inherent-implementations
[item]: items.md
[items]: items.md
[labels]: tokens.md#lifetimes-and-loop-labels
[lifetime or loop label]: tokens.md#lifetimes-and-loop-labels
[lifetimes]: tokens.md#lifetimes-and-loop-labels
[lints]: attributes/diagnostics.md#lint-check-attributes
[loop labels]: tokens.md#lifetimes-and-loop-labels
[method]: items/associated-items.md#methods
[modules]: items/modules.md
[*Name resolution*]: names/name-resolution.md
[*name*]: names.md
[*namespace*]: names/namespaces.md
[never type]: types/never.md
[*path*]: paths.md
[Paths]: paths.md
[*scope*]: names/scopes.md
[structs]: items/structs.md
[tuple-like enum variants]: items.enum.constructor-namespace
[tuple-like structs]: items.struct.tuple
[trait object types]: types/trait-object.md
[traits]: items/traits.md
[turbofish test]: https://github.com/rust-lang/rust/blob/1.58.0/src/test/ui/parser/bastion-of-the-turbofish.rs
[types of crates]: linkage.md
[types]: types.md
[undefined-behavior]: behavior-considered-undefined.md
[unions]: items/unions.md
[unit type]: type.tuple.unit
[variable bindings]: patterns.md
[visibility rules]: visibility-and-privacy.md
