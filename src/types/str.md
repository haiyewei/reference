r[type.str]
# 字符串切片类型

r[type.str.intro]
字符串切片（`str`）类型表示一个字符序列。

```rust
let greeting1: &str = "Hello, world!";
let greeting2: &str = "你好，世界";
```

> [!NOTE]
> 有关 `str` 类型的 impl 信息，请参见 [标准库文档](../../std/primitive.str.html)。

r[type.str.value]
`str` 类型的值以与 `[u8]` 相同的方式表示，即一个 8 位无符号字节的切片。

> [!NOTE]
> 标准库对 `str` 作出额外假设：作用于 `str` 的方法会假设并确保它包含的数据是有效的 UTF-8。现在或将来，使用非 UTF-8 缓冲区调用 `str` 方法都可能导致 [未定义行为](../behavior-considered-undefined.md)。

r[type.str.unsized]
`str` 是一种 [动态大小类型](../dynamically-sized-types.md)。它只能通过指针类型来实例化，例如 `&str`。`&str` 的布局与 `&[u8]` 的布局相同。

[undefined behavior]: ../behavior-considered-undefined.md
[dynamically sized type]: ../dynamically-sized-types.md
