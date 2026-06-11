r[type.char]
# 字符类型

r[type.char.intro]
`char` 类型表示单个 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)（即不是代理项的码点）。

> [!EXAMPLE]
> ```rust
> let c: char = 'a';
> let emoji: char = '😀';
> let unicode: char = '\u{1F600}';
> ```

> [!NOTE]
> 有关 `char` 类型的 impl 信息，请参见 [标准库文档](../../std/primitive.char.html)。

r[type.char.value]
`char` 类型的值表示为一个 32 位无符号字，位于 0x0000 到 0xD7FF 或 0xE000 到 0x10FFFF 范围内。创建落在此范围之外的 `char` 会立即导致 [未定义行为](../behavior-considered-undefined.md)。

r[type.char.layout]
保证 `char` 在所有平台上都具有与 `u32` 相同的大小和对齐。

r[type.char.validity]
保证 `char` 的每个字节都已初始化。换言之，`transmute::<char, [u8; size_of::<char>()]>(...)` 始终是健全的，但由于某些位模式是无效的 `char`，其逆向转换并不总是健全的。

[Unicode scalar value]: http://www.unicode.org/glossary/#unicode_scalar_value
[undefined behavior]: ../behavior-considered-undefined.md
