<div class="rule" id="r-type.char"><a class="rule-link" href="#r-type.char" title="type.char"><span>[type<wbr>.char]</span></a>
</div>

# 字符类型

<div class="rule" id="r-type.char.intro"><a class="rule-link" href="#r-type.char.intro" title="type.char.intro"><span>[type<wbr>.char<wbr>.intro]</span></a>
</div>

`char` 类型表示单个 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)（即不是代理项的码点）。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > let c: char = 'a';
 > let emoji: char = '😀';
 > let unicode: char = '\u{1F600}';
 > ```

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 有关 `char` 类型的 impl 信息，请参见 [标准库文档](../../std/primitive.char.html)。

</div>

<div class="rule" id="r-type.char.value"><a class="rule-link" href="#r-type.char.value" title="type.char.value"><span>[type<wbr>.char<wbr>.value]</span></a>
</div>

`char` 类型的值表示为一个 32 位无符号字，位于 0x0000 到 0xD7FF 或 0xE000 到 0x10FFFF 范围内。创建落在此范围之外的 `char` 会立即导致 [未定义行为](../behavior-considered-undefined.md)。

<div class="rule" id="r-type.char.layout"><a class="rule-link" href="#r-type.char.layout" title="type.char.layout"><span>[type<wbr>.char<wbr>.layout]</span></a>
</div>

保证 `char` 在所有平台上都具有与 `u32` 相同的大小和对齐。

<div class="rule" id="r-type.char.validity"><a class="rule-link" href="#r-type.char.validity" title="type.char.validity"><span>[type<wbr>.char<wbr>.validity]</span></a>
</div>

保证 `char` 的每个字节都已初始化。换言之，`transmute::<char, [u8; size_of::<char>()]>(...)` 始终是健全的，但由于某些位模式是无效的 `char`，其逆向转换并不总是健全的。