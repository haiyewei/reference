<div class="rule" id="r-type.text"><a class="rule-link" href="#r-type.text" title="type.text"><span>[type<wbr>.text]</span></a>
</div>

# 文本类型

<div class="rule" id="r-type.text.intro"><a class="rule-link" href="#r-type.text.intro" title="type.text.intro"><span>[type<wbr>.text<wbr>.intro]</span></a>
</div>

类型 `char` 和 `str` 保存文本数据。

<div class="rule" id="r-type.text.char-value"><a class="rule-link" href="#r-type.text.char-value" title="type.text.char-value"><span>[type<wbr>.text<wbr>.char-value]</span></a>
</div>

`char` 类型的值是一个 [Unicode 标量值]（即不是代理项的码位），表示为 0x0000 到 0xD7FF 或 0xE000 到 0x10FFFF 范围内的 32 位无符号字。

<div class="rule" id="r-type.text.char-precondition"><a class="rule-link" href="#r-type.text.char-precondition" title="type.text.char-precondition"><span>[type<wbr>.text<wbr>.char-precondition]</span></a>
</div>

创建超出此范围的 `char` 会立即导致[未定义行为]。`[char]` 实际上是长度为 1 的 UCS-4 / UTF-32 字符串。

<div class="rule" id="r-type.text.str-value"><a class="rule-link" href="#r-type.text.str-value" title="type.text.str-value"><span>[type<wbr>.text<wbr>.str-value]</span></a>
</div>

`str` 类型的值与 `[u8]` 表示方式相同，即一个 8 位无符号字节的切片。不过，Rust 标准库对 `str` 作出额外假设：作用于 `str` 的方法假定并确保其中的数据是有效 UTF-8。对非 UTF-8 缓冲区调用 `str` 方法现在或将来都可能导致[未定义行为]。

<div class="rule" id="r-type.text.str-unsized"><a class="rule-link" href="#r-type.text.str-unsized" title="type.text.str-unsized"><span>[type<wbr>.text<wbr>.str-unsized]</span></a>
</div>

由于 `str` 是[动态大小类型]，它只能通过指针类型实例化，例如 `&str`。`&str` 的布局与 `&[u8]` 的布局相同。

<div class="rule" id="r-type.text.layout"><a class="rule-link" href="#r-type.text.layout" title="type.text.layout"><span>[type<wbr>.text<wbr>.layout]</span></a>
</div>

## 布局和位有效性

<div class="rule" id="r-type.layout.char-layout"><a class="rule-link" href="#r-type.layout.char-layout" title="type.layout.char-layout"><span>[type<wbr>.layout<wbr>.char-layout]</span></a>
</div>

保证 `char` 在所有平台上都具有与 `u32` 相同的大小和对齐。

<div class="rule" id="r-type.layout.char-validity"><a class="rule-link" href="#r-type.layout.char-validity" title="type.layout.char-validity"><span>[type<wbr>.layout<wbr>.char-validity]</span></a>
</div>

保证 `char` 的每个字节都已初始化（换句话说，`transmute::<char, [u8; size_of::<char>()]>(...)` 始终是可靠的；但由于某些位模式是无效的 `char`，反向转换并不总是可靠）。

[Unicode 标量值]: http://www.unicode.org/glossary/#unicode_scalar_value
[未定义行为]: ../behavior-considered-undefined.md
[动态大小类型]: ../dynamically-sized-types.md
