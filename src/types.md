r[type]
# 类型

r[type.intro]
Rust 程序中的每个变量、项和值都有类型。*值* 的 *类型* 定义了如何解释保存该值的内存，以及可以对该值执行哪些操作。

r[type.builtin]
内置类型以非平凡的方式紧密集成到语言中，这些方式无法用用户定义类型来模拟。

r[type.user-defined]
用户定义类型具有有限的能力。

r[type.kinds]
类型列表如下：

* 原始类型：
    * [布尔](types/boolean.md) --- `bool`
    * [数值](types/numeric.md) --- 整数和浮点数
    * [`char`]
    * [`str`]
    * [never](types/never.md) --- `!` --- 没有值的类型
* 序列类型：
    * [元组](types/tuple.md)
    * [数组](types/array.md)
    * [切片](types/slice.md)
* 用户定义类型：
    * [结构体](types/struct.md)
    * [枚举](types/enum.md)
    * [联合体](types/union.md)
* 函数类型：
    * [函数](types/function-item.md)
    * [闭包](types/closure.md)
* 指针类型：
    * [引用](types/pointer.md#shared-references-)
    * [裸指针](types/pointer.md#raw-pointers-const-and-mut)
    * [函数指针](types/function-pointer.md)
* trait 类型：
    * [Trait 对象](types/trait-object.md)
    * [Impl trait]

r[type.name]
## 类型表达式

r[type.name.syntax]
```grammar,types
Type ->
      TypeNoBounds
    | ImplTraitType
    | TraitObjectType

TypeNoBounds ->
      ParenthesizedType
    | ImplTraitTypeOneBound
    | TraitObjectTypeOneBound
    | TypePath
    | TupleType
    | NeverType
    | RawPointerType
    | ReferenceType
    | ArrayType
    | SliceType
    | InferredType
    | QualifiedPathInType
    | BareFunctionType
    | MacroInvocation
```

r[type.name.intro]
上方 [Type] 语法规则所定义的 *类型表达式* 是引用类型的语法。它可以指代：

r[type.name.sequence]
* 序列类型（[元组](types/tuple.md)、[数组](types/array.md)、[切片](types/slice.md)）。

r[type.name.path]
* 可以引用以下内容的[类型路径](paths.md#paths-in-types)：
    * 原始类型（[布尔](types/boolean.md)、[数值](types/numeric.md)、[`char`](types/char.md)、[`str`](types/str.md)）。
    * 指向[项](items.md)的路径（[结构体](types/struct.md)、[枚举](types/enum.md)、[联合体](types/union.md)、[类型别名](items/type-aliases.md)、[trait](types/trait-object.md)）。
    * [`Self` 路径](paths.md#self-1)，其中 `Self` 是实现类型。
    * 泛型[类型参数](types/parameters.md)。

r[type.name.pointer]
* 指针类型（[引用](types/pointer.md#shared-references-)、[裸指针](types/pointer.md#raw-pointers-const-and-mut)、[函数指针](types/function-pointer.md)）。

r[type.name.inference]
* 要求编译器确定类型的[推断类型](types/inferred.md)。

r[type.name.grouped]
* 用于消除歧义的[圆括号](#parenthesized-types)。

r[type.name.trait]
* trait 类型：[Trait 对象](types/trait-object.md)和 [impl trait](types/impl-trait.md)。

r[type.name.never]
* [never](types/never.md) 类型。

r[type.name.macro-expansion]
* 展开为类型表达式的[宏](macros.md)。

r[type.name.parenthesized]
### 带圆括号的类型

r[type.name.parenthesized.syntax]
```grammar,types
ParenthesizedType -> `(` Type `)`
```

r[type.name.parenthesized.intro]
在某些情况下，类型的组合可能存在歧义。可以在类型周围使用圆括号来避免歧义。例如，在[引用类型](types/pointer.md#shared-references-)中，用于[类型边界](trait-bounds.md)的 `+` 运算符不清楚边界应用于何处，因此必须使用圆括号。需要这种消歧的语法规则会使用 [TypeNoBounds] 规则，而不是 [Type][grammar-Type]。

```rust
# use std::any::Any;
type T<'a> = &'a (dyn Any + Send);
```

r[type.recursive]
## 递归类型

r[type.recursive.intro]
名义类型，即[结构体](types/struct.md)、[枚举](types/enum.md)和[联合体](types/union.md)，可以是递归的。也就是说，每个 `enum` 变体或 `struct` 或 `union` 字段都可以直接或间接地引用包围它的 `enum` 或 `struct` 类型本身。

r[type.recursive.constraint]
这种递归有以下限制：

* 递归类型必须在递归中包含名义类型（不能只是[类型别名](items/type-aliases.md)，也不能是其他结构类型，例如[数组](types/array.md)或[元组](types/tuple.md)）。因此不允许 `type Rec = &'static [Rec]`。
* 递归类型的大小必须是有限的；换句话说，该类型中的递归字段必须是[指针类型](types/pointer.md)。

*递归* 类型及其用法的一个示例：

```rust
enum List<T> {
    Nil,
    Cons(T, Box<List<T>>)
}

let a: List<i32> = List::Cons(7, Box::new(List::Cons(13, Box::new(List::Nil))));
```

[`char`]: types/char.md
[`str`]: types/str.md
[Array]: types/array.md
[Boolean]: types/boolean.md
[Closures]: types/closure.md
[Enum]: types/enum.md
[Function pointers]: types/function-pointer.md
[Functions]: types/function-item.md
[Impl trait]: types/impl-trait.md
[Macros]: macros.md
[Numeric]: types/numeric.md
[Parentheses]: #parenthesized-types
[Raw pointers]: types/pointer.md#raw-pointers-const-and-mut
[References]: types/pointer.md#shared-references-
[Slice]: types/slice.md
[Struct]: types/struct.md
[Trait objects]: types/trait-object.md
[Tuple]: types/tuple.md
[Type paths]: paths.md#paths-in-types
[Union]: types/union.md
[`Self` path]: paths.md#self-1
[arrays]: types/array.md
[enumerations]: types/enum.md
[function pointer]: types/function-pointer.md
[inferred type]: types/inferred.md
[item]: items.md
[never]: types/never.md
[pointer types]: types/pointer.md
[raw pointer]: types/pointer.md#raw-pointers-const-and-mut
[reference type]: types/pointer.md#shared-references-
[reference]: types/pointer.md#shared-references-
[structs]: types/struct.md
[trait]: types/trait-object.md
[tuples]: types/tuple.md
[type alias]: items/type-aliases.md
[type aliases]: items/type-aliases.md
[type boundaries]: trait-bounds.md
[type parameters]: types/parameters.md
[unions]: types/union.md
