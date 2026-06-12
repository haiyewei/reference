r[expr.array]
# 数组和数组索引表达式

## 数组表达式

r[expr.array.syntax]
```grammar,expressions
ArrayExpression -> `[` ArrayElements? `]`

ArrayElements ->
      Expression ( `,` Expression )* `,`?
    | Expression `;` Expression
```

r[expr.array.constructor]
*数组表达式*构造[数组](../types/array.md)。数组表达式有两种形式。

r[expr.array.array]
第一种形式列出数组中的每个值。

r[expr.array.array-syntax]
这种形式的语法是用方括号括起、以逗号分隔的同一类型表达式列表。

r[expr.array.array-behavior]
这会生成一个数组，其中按写出的顺序包含这些值。

r[expr.array.repeat]
第二种形式的语法是用方括号括起的两个表达式，二者以分号（`;`）分隔。

r[expr.array.repeat-operand]
`;` 前面的表达式称为*重复操作数*。

r[expr.array.length-operand]
`;` 后面的表达式称为*长度操作数*。

r[expr.array.length-restriction]
长度操作数必须是[推断 const](items.generics.const.inferred)，或者是类型为 `usize` 的[常量表达式](../const_eval.md#constant-expressions)（例如[字面量](../tokens.md#literals)或[常量项](../items/constant-items.md)）。

```rust
const C: usize = 1;
let _: [u8; C] = [0; 1]; // 字面量。
let _: [u8; C] = [0; C]; // 常量项。
let _: [u8; C] = [0; _]; // 推断 const。
let _: [u8; C] = [0; (((_)))]; // 推断 const。
```

> [!NOTE]
> 在数组表达式中，[推断 const](items.generics.const.inferred) 会被解析为[表达式][Expression]，但随后在语义上会被视为另一类[const 泛型实参](items.generics.const.argument)。

r[expr.array.repeat-behavior]
这种形式的数组表达式会创建一个数组，其长度为长度操作数的值，并且每个元素都是重复操作数的副本。也就是说，`[a; b]` 会创建一个包含 `b` 个 `a` 的值的副本的数组。

r[expr.array.repeat-copy]
如果长度操作数的值大于 1，那么这要求重复操作数的类型实现 [`Copy`](../special-types-and-traits.md#copy)，或者重复操作数是 [const 块表达式](expr.block.const)，或者是指向常量项的[路径](path-expr.md)。

r[expr.array.repeat-const-item]
当重复操作数是 const 块或指向常量项的路径时，会按长度操作数指定的次数对它求值。

r[expr.array.repeat-evaluation-zero]
如果该值为 `0`，则根本不会对 const 块或常量项求值。

r[expr.array.repeat-non-const]
对于既不是 const 块也不是指向常量项路径的表达式，会对它恰好求值一次，然后将结果复制长度操作数的值所指定的次数。

```rust
[1, 2, 3, 4];
["a", "b", "c", "d"];
[0; 128];              // 含有 128 个零的数组
[0u8, 0u8, 0u8, 0u8,];
[[1, 0, 0], [0, 1, 0], [0, 0, 1]]; // 2D 数组
const EMPTY: Vec<i32> = Vec::new();
[EMPTY; 2];
```

r[expr.array.index]
## 数组和切片索引表达式

r[expr.array.index.syntax]
```grammar,expressions
IndexExpression -> Expression `[` Expression `]`
```

r[expr.array.index.array]
[数组](../types/array.md)和[切片](../types/slice.md)类型的值可以通过在其后写一个用方括号括起、类型为 `usize` 的表达式（索引）来进行索引。当数组可变时，可以对产生的[内存位置](../expressions.md#place-expressions-and-value-expressions)赋值。

r[expr.array.index.trait]
对于其他类型，索引表达式 `a[b]` 等价于 `*std::ops::Index::index(&a, b)`，在可变位置表达式上下文中则等价于 `*std::ops::IndexMut::index_mut(&mut a, b)`；但例外的是，当索引表达式经历[临时生命周期延长](destructors.scope.lifetime-extension)时，被索引的表达式 `a` 的[临时作用域](destructors.scope.temporary)也会被延长。与方法一样，Rust 也会反复在 `a` 上插入解引用操作以查找实现。

```rust
// 保存 `vec![()]` 结果的临时值会被延长到
// 存活至块的末尾，因此 `x` 可以在后续
// 语句中使用。
let x = &vec![()][0];
# x;
```

```rust,compile_fail,E0716
// 保存 `vec![()]` 结果的临时值会在
// 语句末尾被丢弃，因此之后使用 `y` 是错误的。
let y = &*std::ops::Index::index(&vec![()], 0); // 错误
# y;
```

r[expr.array.index.zero-index]
数组和切片的索引从零开始。

r[expr.array.index.const]
数组访问是[常量表达式](../const_eval.md#constant-expressions)，因此在索引值为常量时，可以在编译时检查边界。否则会在运行时执行检查；如果检查失败，会使线程进入 [*panic 状态*](../panic.md)。

```rust,should_panic
// lint 默认是 deny。
#![warn(unconditional_panic)]

([1, 2, 3, 4])[2];        // 求值为 3

let b = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
b[1][2];                  // 多维数组索引

let x = (["a", "b"])[10]; // warning: index out of bounds

let n = 10;
let y = (["a", "b"])[n];  // 会 panic

let arr = ["a", "b"];
arr[10];                  // warning: index out of bounds
```

r[expr.array.index.trait-impl]
通过实现 [Index](std::ops::Index) 和 [IndexMut](std::ops::IndexMut) trait，可以为数组和切片以外的类型实现数组索引表达式。

[`Copy`]: ../special-types-and-traits.md#copy
[IndexMut]: std::ops::IndexMut
[Index]: std::ops::Index
[array]: ../types/array.md
[const generic argument]: items.generics.const.argument
[const block expression]: expr.block.const
[constant expression]: ../const_eval.md#constant-expressions
[constant item]: ../items/constant-items.md
[inferred const]: items.generics.const.inferred
[literal]: ../tokens.md#literals
[memory location]: ../expressions.md#place-expressions-and-value-expressions
[panic]: ../panic.md
[path]: path-expr.md
[slice]: ../types/slice.md
[temporary lifetime extension]: destructors.scope.lifetime-extension
[temporary scope]: destructors.scope.temporary
