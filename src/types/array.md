r[type.array]
# 数组类型

r[type.array.syntax]
```grammar,types
ArrayType -> `[` Type `;` Expression `]`
```

r[type.array.intro]
数组是由 `N` 个 `T` 类型元素组成的固定大小序列。数组类型写作 `[T; N]`。

r[type.array.constraint]
大小是一个 [常量表达式](../const_eval.md#constant-expressions)，其求值结果为 [`usize`](numeric.md#machine-dependent-integer-types)。

示例：

```rust
// 栈上分配的数组
let array: [i32; 3] = [1, 2, 3];

// 堆上分配的数组，被强制转换为切片
let boxed_array: Box<[i32]> = Box::new([1, 2, 3]);
```

r[type.array.index]
数组的所有元素始终已初始化，并且在安全方法和运算符中访问数组始终会进行边界检查。

> [!NOTE]
> [`Vec<T>`] 标准库类型提供了一种堆分配的可调整大小数组类型。

[`usize`]: numeric.md#machine-dependent-integer-types
[constant expression]: ../const_eval.md#constant-expressions
