r[type.slice]
# 切片类型

r[type.slice.syntax]
```grammar,types
SliceType -> `[` Type `]`
```

r[type.slice.intro]
切片是一种 [动态大小类型](../dynamically-sized-types.md)，表示对 `T` 类型元素序列的一个“视图”。切片类型写作 `[T]`。

r[type.slice.unsized]
切片类型通常通过指针类型使用。例如：

* `&[T]`：一个“共享切片”，通常简称为“切片”。它不拥有其所指向的数据；它借用了这些数据。
* `&mut [T]`：一个“可变切片”。它可变地借用其所指向的数据。
* `Box<[T]>`：一个“装箱切片”

示例：

```rust
// A heap-allocated array, coerced to a slice
let boxed_array: Box<[i32]> = Box::new([1, 2, 3]);

// A (shared) slice into an array
let slice: &[i32] = &boxed_array[..];
```

r[type.slice.safe]
切片的所有元素始终已初始化，并且在安全方法和运算符中访问切片始终会进行边界检查。

[dynamically sized type]: ../dynamically-sized-types.md
