r[type.text]
# 文本类型

r[type.text.intro]
类型 `char` 和 `str` 保存文本数据。

r[type.text.char-value]
`char` 类型的值是一个 [Unicode 标量值]（即不是代理项的码位），表示为 0x0000 到 0xD7FF 或 0xE000 到 0x10FFFF 范围内的 32 位无符号字。

r[type.text.char-precondition]
创建超出此范围的 `char` 会立即导致[未定义行为]。`[char]` 实际上是长度为 1 的 UCS-4 / UTF-32 字符串。

r[type.text.str-value]
`str` 类型的值与 `[u8]` 表示方式相同，即一个 8 位无符号字节的切片。不过，Rust 标准库对 `str` 作出额外假设：作用于 `str` 的方法假定并确保其中的数据是有效 UTF-8。对非 UTF-8 缓冲区调用 `str` 方法现在或将来都可能导致[未定义行为]。

r[type.text.str-unsized]
由于 `str` 是[动态大小类型]，它只能通过指针类型实例化，例如 `&str`。`&str` 的布局与 `&[u8]` 的布局相同。

r[type.text.layout]
## 布局和位有效性

r[type.layout.char-layout]
保证 `char` 在所有平台上都具有与 `u32` 相同的大小和对齐。

r[type.layout.char-validity]
保证 `char` 的每个字节都已初始化（换句话说，`transmute::<char, [u8; size_of::<char>()]>(...)` 始终是可靠的；但由于某些位模式是无效的 `char`，反向转换并不总是可靠）。

[Unicode scalar value]: http://www.unicode.org/glossary/#unicode_scalar_value
[undefined behavior]: ../behavior-considered-undefined.md
[dynamically sized type]: ../dynamically-sized-types.md
