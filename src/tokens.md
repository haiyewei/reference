<div class="rule" id="r-lex.token"><a class="rule-link" href="#r-lex.token" title="lex.token"><span>[lex<wbr>.token]</span></a>
</div>

# Token

<div class="rule" id="r-lex.token.syntax"><a class="rule-link" href="#r-lex.token.syntax" title="lex.token.syntax"><span>[lex<wbr>.token<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Token" onclick="show_railroad()">[Token](tokens.md#railroad-Token)</span> →  
      <span class="grammar-text">[RESERVED_TOKEN](tokens.md#grammar-RESERVED_TOKEN)</span>  
    \| <span class="grammar-text">[RAW_IDENTIFIER](identifiers.md#grammar-RAW_IDENTIFIER)</span>  
    \| <span class="grammar-text">[CHAR_LITERAL](tokens.md#grammar-CHAR_LITERAL)</span>  
    \| <span class="grammar-text">[STRING_LITERAL](tokens.md#grammar-STRING_LITERAL)</span>  
    \| <span class="grammar-text">[RAW_STRING_LITERAL](tokens.md#grammar-RAW_STRING_LITERAL)</span>  
    \| <span class="grammar-text">[BYTE_LITERAL](tokens.md#grammar-BYTE_LITERAL)</span>  
    \| <span class="grammar-text">[BYTE_STRING_LITERAL](tokens.md#grammar-BYTE_STRING_LITERAL)</span>  
    \| <span class="grammar-text">[RAW_BYTE_STRING_LITERAL](tokens.md#grammar-RAW_BYTE_STRING_LITERAL)</span>  
    \| <span class="grammar-text">[C_STRING_LITERAL](tokens.md#grammar-C_STRING_LITERAL)</span>  
    \| <span class="grammar-text">[RAW_C_STRING_LITERAL](tokens.md#grammar-RAW_C_STRING_LITERAL)</span>  
    \| <span class="grammar-text">[FLOAT_LITERAL](tokens.md#grammar-FLOAT_LITERAL)</span>  
    \| <span class="grammar-text">[INTEGER_LITERAL](tokens.md#grammar-INTEGER_LITERAL)</span>  
    \| <span class="grammar-text">[LIFETIME_TOKEN](tokens.md#grammar-LIFETIME_TOKEN)</span>  
    \| <span class="grammar-text">[PUNCTUATION](tokens.md#grammar-PUNCTUATION)</span>  
    \| <span class="grammar-text">[IDENTIFIER_OR_KEYWORD](identifiers.md#grammar-IDENTIFIER_OR_KEYWORD)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 330px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Token"><svg class="railroad" viewBox="0 0 330 536" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-Token">
<text class="comment" x="32" y="25">
Token</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 132 0 h 104 m -49 0 l -5 -5 m 0 10 l 5 -5 m 49 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RESERVED_TOKEN">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="42"/>
<text x="125" y="58">
RESERVED_TOKEN</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 236 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 236 0 v -33"/>
<path d=" M 47 107 v 33 m 236 0 v -33"/>
<path d=" M 47 140 v 33 m 236 0 v -33"/>
<path d=" M 47 173 v 33 m 236 0 v -33"/>
<path d=" M 47 206 v 33 m 236 0 v -33"/>
<path d=" M 47 239 v 33 m 236 0 v -33"/>
<path d=" M 47 272 v 33 m 236 0 v -33"/>
<path d=" M 47 305 v 33 m 236 0 v -33"/>
<path d=" M 47 338 v 33 m 236 0 v -33"/>
<path d=" M 47 371 v 33 m 236 0 v -33"/>
<path d=" M 47 404 v 33 m 236 0 v -33"/>
<path d=" M 47 437 v 33 m 236 0 v -33"/>
<path d=" M 47 470 v 33 m 236 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 132 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-RAW_IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="75"/>
<text x="125" y="91">
RAW_IDENTIFIER</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 116 0 h 96 m -45 0 l -5 -5 m 0 10 l 5 -5 m 45 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-CHAR_LITERAL">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="108"/>
<text x="117" y="124">
CHAR_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 132 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="141"/>
<text x="125" y="157">
STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 164 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RAW_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="174"/>
<text x="141" y="190">
RAW_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 116 0 h 96 m -45 0 l -5 -5 m 0 10 l 5 -5 m 45 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-BYTE_LITERAL">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="207"/>
<text x="117" y="223">
BYTE_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 172 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-BYTE_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="172" x="59" y="240"/>
<text x="145" y="256">
BYTE_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 212 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RAW_BYTE_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="212" x="59" y="273"/>
<text x="165" y="289">
RAW_BYTE_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 305 v 0 a 12 12 0 0 0 12 12 m 148 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-C_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="306"/>
<text x="133" y="322">
C_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 338 v 0 a 12 12 0 0 0 12 12 m 188 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RAW_C_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="339"/>
<text x="153" y="355">
RAW_C_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 371 v 0 a 12 12 0 0 0 12 12 m 124 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-FLOAT_LITERAL">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="372"/>
<text x="121" y="388">
FLOAT_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 404 v 0 a 12 12 0 0 0 12 12 m 140 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-INTEGER_LITERAL">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="405"/>
<text x="129" y="421">
INTEGER_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 437 v 0 a 12 12 0 0 0 12 12 m 132 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-LIFETIME_TOKEN">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="438"/>
<text x="125" y="454">
LIFETIME_TOKEN</text>
</g>
</a>
</g>
<path d=" M 47 470 v 0 a 12 12 0 0 0 12 12 m 108 0 h 104 m -49 0 l -5 -5 m 0 10 l 5 -5 m 49 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-PUNCTUATION">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="471"/>
<text x="113" y="487">
PUNCTUATION</text>
</g>
</a>
</g>
<path d=" M 47 503 v 0 a 12 12 0 0 0 12 12 m 196 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER_OR_KEYWORD">
<g class="nonterminal">
<rect height="22" width="196" x="59" y="504"/>
<text x="157" y="520">
IDENTIFIER_OR_KEYWORD</text>
</g>
</a>
</g>
<path d=" M 305 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 295 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.intro"><a class="rule-link" href="#r-lex.token.intro" title="lex.token.intro"><span>[lex<wbr>.token<wbr>.intro]</span></a>
</div>

token 是由正则（非递归）语言定义的语法中的基础产生式。Rust 源输入可以分解为下列几类 token：

- [关键字](keywords.md)
- [标识符](identifiers.md)
- [字面量](#literals)
- [生命周期](#lifetimes-and-loop-labels)
- [标点符号](#punctuation)
- [定界符](#delimiters)

在本文档的语法中，"simple" token 以[字符串表产生式](notation.md#string-table-productions)的形式给出，并以 `monospace` 等宽字体显示。

<div class="rule" id="r-lex.token.literal"><a class="rule-link" href="#r-lex.token.literal" title="lex.token.literal"><span>[lex<wbr>.token<wbr>.literal]</span></a>
</div>

## 字面量

字面量是用于[字面量表达式](expressions/literal-expr.md)中的 token。

### 示例

#### 字符与字符串

||示例|`#` 组数[^nsets]|字符|转义|
|-|--|------|--|--|
|[字符](#character-literals)|`'H'`|0|所有 Unicode 字符|[引号](#quote-escapes) & [ASCII](#ascii-escapes) & [Unicode](#unicode-escapes)|
|[字符串](#string-literals)|`"hello"`|0|所有 Unicode 字符|[引号](#quote-escapes) & [ASCII](#ascii-escapes) & [Unicode](#unicode-escapes)|
|[原始字符串](#raw-string-literals)|`r#"hello"#`|\<256|所有 Unicode 字符|`N/A`|
|[字节](#byte-literals)|`b'H'`|0|所有 ASCII 字符|[引号](#quote-escapes) & [字节](#byte-escapes)|
|[字节字符串](#byte-string-literals)|`b"hello"`|0|所有 ASCII 字符|[引号](#quote-escapes) & [字节](#byte-escapes)|
|[原始字节字符串](#raw-byte-string-literals)|`br#"hello"#`|\<256|所有 ASCII 字符|`N/A`|
|[C 字符串](#c-string-literals)|`c"hello"`|0|所有 Unicode 字符|[引号](#quote-escapes) & [字节](#byte-escapes) & [Unicode](#unicode-escapes)|
|[原始 C 字符串](#raw-c-string-literals)|`cr#"hello"#`|\<256|所有 Unicode 字符|`N/A`|

[^nsets]: 同一字面量两侧的 `#` 数量必须相同。

#### ASCII 转义

||名称|
|-|--|
|`\x41`|7 位字符码（恰好 2 个十六进制数字，最大到 0x7F）|
|`\n`|换行|
|`\r`|回车|
|`\t`|制表符|
|`\\`|反斜杠|
|`\0`|空字符|

#### 字节转义

||名称|
|-|--|
|`\x7F`|8 位字符码（恰好 2 个十六进制数字）|
|`\n`|换行|
|`\r`|回车|
|`\t`|制表符|
|`\\`|反斜杠|
|`\0`|空字符|

#### Unicode 转义

||名称|
|-|--|
|`\u{7FFF}`|24 位 Unicode 字符码（最多 6 个十六进制数字）|

#### 引号转义

||名称|
|-|--|
|`\'`|单引号|
|`\"`|双引号|

#### 数值

|[数值字面量](#number-literals)[^nl]|示例|指数部分|
|-----|--|----|
|十进制整数|`98_222`|`N/A`|
|十六进制整数|`0xff`|`N/A`|
|八进制整数|`0o77`|`N/A`|
|二进制整数|`0b1111_0000`|`N/A`|
|浮点数|`123.0E+77`|`Optional`|

[^nl]: 所有数值字面量都允许使用 `_` 作为视觉分隔符：`1_234.0E+18f64`

<div class="rule" id="r-lex.token.literal.suffix"><a class="rule-link" href="#r-lex.token.literal.suffix" title="lex.token.literal.suffix"><span>[lex<wbr>.token<wbr>.literal<wbr>.suffix]</span></a>
</div>

#### 后缀

<div class="rule" id="r-lex.token.literal.literal.suffix.intro"><a class="rule-link" href="#r-lex.token.literal.literal.suffix.intro" title="lex.token.literal.literal.suffix.intro"><span>[lex<wbr>.token<wbr>.literal<wbr>.literal<wbr>.suffix<wbr>.intro]</span></a>
</div>

后缀是紧跟在字面量主体部分之后（中间不得有空白）的字符序列，其形式与非原始标识符或关键字相同。

<div class="rule" id="r-lex.token.literal.suffix.syntax"><a class="rule-link" href="#r-lex.token.literal.suffix.syntax" title="lex.token.literal.suffix.syntax"><span>[lex<wbr>.token<wbr>.literal<wbr>.suffix<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-SUFFIX" onclick="show_railroad()">[SUFFIX](tokens.md#railroad-SUFFIX)</span> →  
      <span class="grammar-literal">\_</span> ^ <span class="grammar-text">[XID_Continue](identifiers.md#grammar-XID_Continue)</span><sup>+</sup>  
    \| <span class="grammar-text">[XID_Start](identifiers.md#grammar-XID_Start)</span> <span class="grammar-text">[XID_Continue](identifiers.md#grammar-XID_Continue)</span><sup>\*</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 408px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-SUFFIX"><svg class="railroad" viewBox="0 0 408 189" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-SUFFIX">
<text class="comment" x="36" y="25">
SUFFIX</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 89 h 24 m 194 0 h 120 m -57 0 l -5 -5 m 0 10 l 5 -5 m 57 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="78"/>
<text x="73" y="94">
_</text>
</g>
<g class="labeledbox">
<rect height="79" width="156" x="97" y="42"/>
<path d=" M 97 89 h 8 m 140 0 h 8"/>
<text class="comment" x="162" y="65">
no backtracking</text>
<g class="sequence">
<g class="repeat">
<path d=" M 105 89 h 12 m 116 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -116 m 61 0 l 5 -5 m 0 10 l -5 -5 m -61 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="identifiers.md#railroad-XID_Continue">
<g class="nonterminal">
<rect height="22" width="116" x="117" y="78"/>
<text x="175" y="94">
XID_Continue</text>
</g>
</a>
</g>
</g>
</g>
<path d=" M 87 89 h 10"/>
</g>
<path d=" M 35 89 a 12 12 0 0 1 12 12 v 30 m 314 0 v -30 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 131 v 12 a 12 12 0 0 0 12 12 m 290 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-XID_Start">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="144"/>
<text x="105" y="160">
XID_Start</text>
</g>
</a>
<g class="optional">
<path d=" M 161 155 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 140 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 185 155 h 12 m 116 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -116 m 61 0 l 5 -5 m 0 10 l -5 -5 m -61 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="identifiers.md#railroad-XID_Continue">
<g class="nonterminal">
<rect height="22" width="116" x="197" y="144"/>
<text x="255" y="160">
XID_Continue</text>
</g>
</a>
</g>
</g>
<path d=" M 151 155 h 10"/>
</g>
</g>
<path d=" M 383 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 373 89 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.literal.suffix.validity"><a class="rule-link" href="#r-lex.token.literal.suffix.validity" title="lex.token.literal.suffix.validity"><span>[lex<wbr>.token<wbr>.literal<wbr>.suffix<wbr>.validity]</span></a>
</div>

带有任意后缀的任意种类字面量（字符串、整数等）都是有效的 token。

带有任意后缀的字面量 token 都可以传给宏而不产生错误。宏自身将决定如何解释这样的 token，以及是否产生错误。特别是，示例宏中的 `literal` 片段说明符会匹配带有任意后缀的字面量 token。

```rust
macro_rules! blackhole { ($tt:tt) => () }
macro_rules! blackhole_lit { ($l:literal) => () }

blackhole!("string"suffix); // OK
blackhole_lit!(1suffix); // OK
```

<div class="rule" id="r-lex.token.literal.suffix.parse"><a class="rule-link" href="#r-lex.token.literal.suffix.parse" title="lex.token.literal.suffix.parse"><span>[lex<wbr>.token<wbr>.literal<wbr>.suffix<wbr>.parse]</span></a>
</div>

然而，被解释为字面量表达式或模式的字面量 token，其后缀会受到限制。非数值字面量 token 上的任何后缀都会被拒绝，而数值字面量 token 只接受下列后缀。

|整数|浮点数|
|--|---|
|`u8`, `i8`, `u16`, `i16`, `u32`, `i32`, `u64`, `i64`, `u128`, `i128`, `usize`, `isize`|`f32`, `f64`|

### 字符和字符串字面量

<div class="rule" id="r-lex.token.literal.char"><a class="rule-link" href="#r-lex.token.literal.char" title="lex.token.literal.char"><span>[lex<wbr>.token<wbr>.literal<wbr>.char]</span></a>
</div>

#### 字符字面量

<div class="rule" id="r-lex.token.literal.char.syntax"><a class="rule-link" href="#r-lex.token.literal.char.syntax" title="lex.token.literal.char.syntax"><span>[lex<wbr>.token<wbr>.literal<wbr>.char<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-CHAR_LITERAL" onclick="show_railroad()">[CHAR_LITERAL](tokens.md#railroad-CHAR_LITERAL)</span> →  
    <span class="grammar-literal">'</span>  
        ( ~\[<span class="grammar-literal">'</span> <span class="grammar-literal">\\</span> [LF](whitespace.md#grammar-LF) [CR](whitespace.md#grammar-CR) [TAB](whitespace.md#grammar-TAB)\] | <span class="grammar-text">[QUOTE_ESCAPE](tokens.md#grammar-QUOTE_ESCAPE)</span> | <span class="grammar-text">[ASCII_ESCAPE](tokens.md#grammar-ASCII_ESCAPE)</span> | <span class="grammar-text">[UNICODE_ESCAPE](tokens.md#grammar-UNICODE_ESCAPE)</span> )  
    <span class="grammar-literal">'</span> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-QUOTE_ESCAPE" onclick="show_railroad()">[QUOTE_ESCAPE](tokens.md#railroad-QUOTE_ESCAPE)</span> → <span class="grammar-literal">\\'</span> | <span class="grammar-literal">\\"</span>

<span class="grammar-text grammar-production" id="grammar-ASCII_ESCAPE" onclick="show_railroad()">[ASCII_ESCAPE](tokens.md#railroad-ASCII_ESCAPE)</span> →  
      <span class="grammar-literal">\\x</span> <span class="grammar-text">[OCT_DIGIT](tokens.md#grammar-OCT_DIGIT)</span> <span class="grammar-text">[HEX_DIGIT](tokens.md#grammar-HEX_DIGIT)</span>  
    \| <span class="grammar-literal">\\n</span> | <span class="grammar-literal">\\r</span> | <span class="grammar-literal">\\t</span> | <span class="grammar-literal">\\\\</span> | <span class="grammar-literal">\\0</span>

<span class="grammar-text grammar-production" id="grammar-UNICODE_ESCAPE" onclick="show_railroad()">[UNICODE_ESCAPE](tokens.md#railroad-UNICODE_ESCAPE)</span> →  
    <span class="grammar-literal">\\u{</span> ( <span class="grammar-text">[HEX_DIGIT](tokens.md#grammar-HEX_DIGIT)</span> <span class="grammar-literal">\_</span><sup>\*</sup> )<sup>1..=6</sup><sub class="grammar-text">valid hex char value</sub> <span class="grammar-literal">}</span>​[^valid-hex-char]

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 521px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CHAR_LITERAL"><svg class="railroad" viewBox="0 0 521 383" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-CHAR_LITERAL">
<text class="comment" x="57" y="25">
CHAR_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 255 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="244"/>
<text x="49" y="260">
&#x27;</text>
</g>
<g class="choice">
<path d=" M 73 255 h 24 m 201 0 h 24"/>
<g class="labeledbox exceptbox">
<rect height="232" width="201" x="97" y="42"/>
<path d=" M 97 255 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="197" y="65">
⚠️ with the exception of</text>
<g class="choice">
<path d=" M 105 93 h 24 m 28 0 h 40"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="129" y="82"/>
<text x="143" y="98">
&#x27;</text>
</g>
<path d=" M 105 93 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 117 114 v 33 m 68 0 v -33"/>
<path d=" M 117 147 v 33 m 68 0 v -33"/>
<path d=" M 117 180 v 33 m 68 0 v -33"/>
<path d=" M 117 114 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="129" y="115"/>
<text x="143" y="131">
\</text>
</g>
<path d=" M 117 147 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="whitespace.md#railroad-LF">
<g class="nonterminal">
<rect height="22" width="36" x="129" y="148"/>
<text x="147" y="164">
LF</text>
</g>
</a>
<path d=" M 117 180 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="129" y="181"/>
<text x="147" y="197">
CR</text>
</g>
</a>
<path d=" M 117 213 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="whitespace.md#railroad-TAB">
<g class="nonterminal">
<rect height="22" width="44" x="129" y="214"/>
<text x="151" y="230">
TAB</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="105" y="244"/>
<text x="131" y="260">
CHAR</text>
</g>
</a>
</g>
<path d=" M 73 255 a 12 12 0 0 1 12 12 v 17 m 225 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 85 284 v 33 m 225 0 v -33"/>
<path d=" M 85 317 v 33 m 225 0 v -33"/>
<path d=" M 85 284 v 0 a 12 12 0 0 0 12 12 m 116 0 h 85 m -39 0 l -5 -5 m 0 10 l 5 -5 m 39 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-QUOTE_ESCAPE">
<g class="nonterminal">
<rect height="22" width="116" x="97" y="285"/>
<text x="155" y="301">
QUOTE_ESCAPE</text>
</g>
</a>
<path d=" M 85 317 v 0 a 12 12 0 0 0 12 12 m 116 0 h 85 m -39 0 l -5 -5 m 0 10 l 5 -5 m 39 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-ASCII_ESCAPE">
<g class="nonterminal">
<rect height="22" width="116" x="97" y="318"/>
<text x="155" y="334">
ASCII_ESCAPE</text>
</g>
</a>
<path d=" M 85 350 v 0 a 12 12 0 0 0 12 12 m 132 0 h 69 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-UNICODE_ESCAPE">
<g class="nonterminal">
<rect height="22" width="132" x="97" y="351"/>
<text x="163" y="367">
UNICODE_ESCAPE</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="332" y="244"/>
<text x="346" y="260">
&#x27;</text>
</g>
<g class="optional">
<path d=" M 370 255 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="394" y="244"/>
<text x="428" y="260">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 63 255 h 10"/>
<path d=" M 322 255 h 10"/>
<path d=" M 360 255 h 10"/>
</g>
<path d=" M 496 255 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 255 h 10"/>
<path d=" M 486 255 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 154px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-QUOTE_ESCAPE"><svg class="railroad" viewBox="0 0 154 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-QUOTE_ESCAPE">
<text class="comment" x="57" y="25">
QUOTE_ESCAPE</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 36 0 h 24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="42"/>
<text x="77" y="58">
\&#x27;</text>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 60 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 36 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="75"/>
<text x="77" y="91">
\&quot;</text>
</g>
</g>
<path d=" M 129 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 119 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 358px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ASCII_ESCAPE"><svg class="railroad" viewBox="0 0 358 239" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-ASCII_ESCAPE">
<text class="comment" x="57" y="25">
ASCII_ESCAPE</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 240 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="42"/>
<text x="77" y="58">
\x</text>
</g>
<a class="link" xlink:href="tokens.md#railroad-OCT_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="105" y="42"/>
<text x="151" y="58">
OCT_DIGIT</text>
</g>
</a>
<a class="link" xlink:href="tokens.md#railroad-HEX_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="207" y="42"/>
<text x="253" y="58">
HEX_DIGIT</text>
</g>
</a>
<path d=" M 95 53 h 10"/>
<path d=" M 197 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 264 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 264 0 v -33"/>
<path d=" M 47 107 v 33 m 264 0 v -33"/>
<path d=" M 47 140 v 33 m 264 0 v -33"/>
<path d=" M 47 173 v 33 m 264 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="75"/>
<text x="77" y="91">
\n</text>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="108"/>
<text x="77" y="124">
\r</text>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="141"/>
<text x="77" y="157">
\t</text>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="174"/>
<text x="77" y="190">
\\</text>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="207"/>
<text x="77" y="223">
\0</text>
</g>
</g>
<path d=" M 333 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 323 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 404px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-UNICODE_ESCAPE"><svg class="railroad" viewBox="0 0 404 174" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-UNICODE_ESCAPE">
<text class="comment" x="64" y="25">
UNICODE_ESCAPE</text>
</a>
<g class="sequence">
<path d=" M 10 102 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="91"/>
<text x="57" y="107">
\u{</text>
</g>
<g class="labeledbox">
<rect height="122" width="242" x="89" y="42"/>
<path d=" M 89 102 h 8 m 226 0 h 8"/>
<text class="comment" x="175" y="65">
valid hex char value</text>
<g class="repeat">
<path d=" M 97 102 h 12 m 202 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 20 a 12 12 0 0 1 -12 12 m -157 0 h -45 a 12 12 0 0 1 -12 -12 v -20 a 12 12 0 0 1 12 -12"/>
<text class="comment" x="232" y="151">
at most 5 more times</text>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-HEX_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="109" y="91"/>
<text x="155" y="107">
HEX_DIGIT</text>
</g>
</a>
<g class="optional">
<path d=" M 211 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 52 m -23 0 l -5 -5 m 0 10 l 5 -5 m 23 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 235 102 h 12 m 28 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -28 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="247" y="91"/>
<text x="261" y="107">
_</text>
</g>
</g>
</g>
<path d=" M 201 102 h 10"/>
</g>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="341" y="91"/>
<text x="355" y="107">
}</text>
</g>
<path d=" M 79 102 h 10"/>
<path d=" M 331 102 h 10"/>
</g>
<path d=" M 379 102 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 102 h 10"/>
<path d=" M 369 102 h 10"/>
</g>
</g>
</svg>
</div>
</div>

[^valid-hex-char]: 见 [lex.token.literal.char-escape.unicode](tokens.md#r-lex.token.literal.char-escape.unicode)。

<div class="rule" id="r-lex.token.literal.char.intro"><a class="rule-link" href="#r-lex.token.literal.char.intro" title="lex.token.literal.char.intro"><span>[lex<wbr>.token<wbr>.literal<wbr>.char<wbr>.intro]</span></a>
</div>

_字符字面量_是由两个 `U+0027`（单引号）字符包围的单个 Unicode 字符；`U+0027` 本身除外，它必须通过前置的 `U+005C` 字符（`\`）进行_转义_。

<div class="rule" id="r-lex.token.literal.str"><a class="rule-link" href="#r-lex.token.literal.str" title="lex.token.literal.str"><span>[lex<wbr>.token<wbr>.literal<wbr>.str]</span></a>
</div>

#### 字符串字面量

<div class="rule" id="r-lex.token.literal.str.syntax"><a class="rule-link" href="#r-lex.token.literal.str.syntax" title="lex.token.literal.str.syntax"><span>[lex<wbr>.token<wbr>.literal<wbr>.str<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-STRING_LITERAL" onclick="show_railroad()">[STRING_LITERAL](tokens.md#railroad-STRING_LITERAL)</span> →  
    <span class="grammar-literal">"</span> (  
        ~\[<span class="grammar-literal">"</span> <span class="grammar-literal">\\</span> [CR](whitespace.md#grammar-CR)\]  
      \| <span class="grammar-text">[QUOTE_ESCAPE](tokens.md#grammar-QUOTE_ESCAPE)</span>  
      \| <span class="grammar-text">[ASCII_ESCAPE](tokens.md#grammar-ASCII_ESCAPE)</span>  
      \| <span class="grammar-text">[UNICODE_ESCAPE](tokens.md#grammar-UNICODE_ESCAPE)</span>  
      \| <span class="grammar-text">[STRING_CONTINUE](tokens.md#grammar-STRING_CONTINUE)</span>  
    )<sup>\*</sup> <span class="grammar-literal">"</span> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-STRING_CONTINUE" onclick="show_railroad()">[STRING_CONTINUE](tokens.md#railroad-STRING_CONTINUE)</span> → <span class="grammar-literal">\\</span> <span class="grammar-text">[LF](whitespace.md#grammar-LF)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 593px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-STRING_LITERAL"><svg class="railroad" viewBox="0 0 593 372" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-STRING_LITERAL">
<text class="comment" x="64" y="25">
STRING_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 201 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="190"/>
<text x="49" y="206">
&quot;</text>
</g>
<g class="optional">
<path d=" M 73 201 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -135 m 0 70 l -5 5 m 10 0 l -5 -5 m 0 -70 a 12 12 0 0 1 12 -12 h 273 m -133 0 l -5 -5 m 0 10 l 5 -5 m 133 0 a 12 12 0 0 1 12 12 v 135 m 0 -64 l -5 -5 m 10 0 l -5 5 m 0 64 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 97 201 h 12 m 249 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 137 m 0 -65 l -5 -5 m 10 0 l -5 5 m 0 65 a 12 12 0 0 1 -12 12 m 0 0 h -249 m 127 0 l 5 -5 m 0 10 l -5 -5 m -127 0 a 12 12 0 0 1 -12 -12 v -137 m 0 71 l -5 5 m 10 0 l -5 -5 m 0 -71 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 109 201 h 24 m 201 0 h 24"/>
<g class="sequence">
<g class="labeledbox exceptbox">
<rect height="166" width="201" x="133" y="54"/>
<path d=" M 133 201 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="233" y="77">
⚠️ with the exception of</text>
<g class="choice">
<path d=" M 141 105 h 24 m 28 0 h 32"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="165" y="94"/>
<text x="179" y="110">
&quot;</text>
</g>
<path d=" M 141 105 a 12 12 0 0 1 12 12 v 9 m 60 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 153 126 v 33 m 60 0 v -33"/>
<path d=" M 153 126 v 0 a 12 12 0 0 0 12 12 m 28 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="165" y="127"/>
<text x="179" y="143">
\</text>
</g>
<path d=" M 153 159 v 0 a 12 12 0 0 0 12 12 m 36 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="165" y="160"/>
<text x="183" y="176">
CR</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="141" y="190"/>
<text x="167" y="206">
CHAR</text>
</g>
</a>
</g>
</g>
<path d=" M 109 201 a 12 12 0 0 1 12 12 v 17 m 225 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 121 230 v 33 m 225 0 v -33"/>
<path d=" M 121 263 v 33 m 225 0 v -33"/>
<path d=" M 121 296 v 33 m 225 0 v -33"/>
<path d=" M 121 230 v 0 a 12 12 0 0 0 12 12 m 116 0 h 85 m -39 0 l -5 -5 m 0 10 l 5 -5 m 39 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-QUOTE_ESCAPE">
<g class="nonterminal">
<rect height="22" width="116" x="133" y="231"/>
<text x="191" y="247">
QUOTE_ESCAPE</text>
</g>
</a>
</g>
<path d=" M 121 263 v 0 a 12 12 0 0 0 12 12 m 116 0 h 85 m -39 0 l -5 -5 m 0 10 l 5 -5 m 39 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-ASCII_ESCAPE">
<g class="nonterminal">
<rect height="22" width="116" x="133" y="264"/>
<text x="191" y="280">
ASCII_ESCAPE</text>
</g>
</a>
</g>
<path d=" M 121 296 v 0 a 12 12 0 0 0 12 12 m 132 0 h 69 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-UNICODE_ESCAPE">
<g class="nonterminal">
<rect height="22" width="132" x="133" y="297"/>
<text x="199" y="313">
UNICODE_ESCAPE</text>
</g>
</a>
</g>
<path d=" M 121 329 v 0 a 12 12 0 0 0 12 12 m 140 0 h 61 m -27 0 l -5 -5 m 0 10 l 5 -5 m 27 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-STRING_CONTINUE">
<g class="nonterminal">
<rect height="22" width="140" x="133" y="330"/>
<text x="203" y="346">
STRING_CONTINUE</text>
</g>
</a>
</g>
</g>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="404" y="190"/>
<text x="418" y="206">
&quot;</text>
</g>
<g class="optional">
<path d=" M 442 201 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="466" y="190"/>
<text x="500" y="206">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 63 201 h 10"/>
<path d=" M 394 201 h 10"/>
<path d=" M 432 201 h 10"/>
</g>
<path d=" M 568 201 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 201 h 10"/>
<path d=" M 558 201 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 144px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-STRING_CONTINUE"><svg class="railroad" viewBox="0 0 144 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-STRING_CONTINUE">
<text class="comment" x="67" y="25">
STRING_CONTINUE</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
\</text>
</g>
<a class="link" xlink:href="whitespace.md#railroad-LF">
<g class="nonterminal">
<rect height="22" width="36" x="73" y="42"/>
<text x="91" y="58">
LF</text>
</g>
</a>
<path d=" M 63 53 h 10"/>
</g>
<path d=" M 119 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 109 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.literal.str.intro"><a class="rule-link" href="#r-lex.token.literal.str.intro" title="lex.token.literal.str.intro"><span>[lex<wbr>.token<wbr>.literal<wbr>.str<wbr>.intro]</span></a>
</div>

_字符串字面量_是由两个 `U+0022`（双引号）字符包围的任意 Unicode 字符序列；`U+0022` 本身除外，它必须通过前置的 `U+005C` 字符（`\`）进行_转义_。

<div class="rule" id="r-lex.token.literal.str.linefeed"><a class="rule-link" href="#r-lex.token.literal.str.linefeed" title="lex.token.literal.str.linefeed"><span>[lex<wbr>.token<wbr>.literal<wbr>.str<wbr>.linefeed]</span></a>
</div>

字符串字面量中允许出现换行，换行由字符 `U+000A`（LF）表示。字符 `U+000D`（CR）不得出现在字符串字面量中。当未转义的 `U+005C` 字符（`\`）紧接在换行之前时，该换行不会出现在这个 token 所表示的字符串中。详见[字符串续行转义](expressions/literal-expr.md#string-continuation-escapes)。

<div class="rule" id="r-lex.token.literal.char-escape"><a class="rule-link" href="#r-lex.token.literal.char-escape" title="lex.token.literal.char-escape"><span>[lex<wbr>.token<wbr>.literal<wbr>.char-escape]</span></a>
</div>

#### 字符转义

<div class="rule" id="r-lex.token.literal.char-escape.intro"><a class="rule-link" href="#r-lex.token.literal.char-escape.intro" title="lex.token.literal.char-escape.intro"><span>[lex<wbr>.token<wbr>.literal<wbr>.char-escape<wbr>.intro]</span></a>
</div>

字符字面量或非原始字符串字面量中还可以使用一些额外的_转义\_。转义以 `U+005C`（`\`）开头，并继续为以下形式之一：

<div class="rule" id="r-lex.token.literal.char-escape.ascii"><a class="rule-link" href="#r-lex.token.literal.char-escape.ascii" title="lex.token.literal.char-escape.ascii"><span>[lex<wbr>.token<wbr>.literal<wbr>.char-escape<wbr>.ascii]</span></a>
</div>

- _7 位码点转义_以 `U+0078`（`x`）开头，后跟恰好两个值不超过 `0x7F` 的_十六进制数字_。它表示值等于所给十六进制值的 ASCII 字符。更大的值是不允许的，因为它们究竟表示 Unicode 码点还是字节值会产生歧义。

<div class="rule" id="r-lex.token.literal.char-escape.unicode"><a class="rule-link" href="#r-lex.token.literal.char-escape.unicode" title="lex.token.literal.char-escape.unicode"><span>[lex<wbr>.token<wbr>.literal<wbr>.char-escape<wbr>.unicode]</span></a>
</div>

- _24 位码点转义_以 `U+0075`（`u`）开头，后跟由花括号 `U+007B`（`{`）和 `U+007D`（`}`）包围的至多六个_十六进制数字_。它表示等于所给十六进制值的 Unicode 码点。该值必须是有效的 Unicode 标量值。

<div class="rule" id="r-lex.token.literal.char-escape.whitespace"><a class="rule-link" href="#r-lex.token.literal.char-escape.whitespace" title="lex.token.literal.char-escape.whitespace"><span>[lex<wbr>.token<wbr>.literal<wbr>.char-escape<wbr>.whitespace]</span></a>
</div>

- \_空白转义_是字符 `U+006E`（`n`）、`U+0072`（`r`）或 `U+0074`（`t`）之一，分别表示 Unicode 值 `U+000A`（LF）、`U+000D`（CR）或 `U+0009`（HT）。

<div class="rule" id="r-lex.token.literal.char-escape.null"><a class="rule-link" href="#r-lex.token.literal.char-escape.null" title="lex.token.literal.char-escape.null"><span>[lex<wbr>.token<wbr>.literal<wbr>.char-escape<wbr>.null]</span></a>
</div>

- \_空值转义_是字符 `U+0030`（`0`），表示 Unicode 值 `U+0000`（NUL）。

<div class="rule" id="r-lex.token.literal.char-escape.slash"><a class="rule-link" href="#r-lex.token.literal.char-escape.slash" title="lex.token.literal.char-escape.slash"><span>[lex<wbr>.token<wbr>.literal<wbr>.char-escape<wbr>.slash]</span></a>
</div>

- \_反斜杠转义_是字符 `U+005C`（`\`），它必须被转义才能表示其自身。

<div class="rule" id="r-lex.token.literal.str-raw"><a class="rule-link" href="#r-lex.token.literal.str-raw" title="lex.token.literal.str-raw"><span>[lex<wbr>.token<wbr>.literal<wbr>.str-raw]</span></a>
</div>

#### 原始字符串字面量

<div class="rule" id="r-lex.token.literal.str-raw.syntax"><a class="rule-link" href="#r-lex.token.literal.str-raw.syntax" title="lex.token.literal.str-raw.syntax"><span>[lex<wbr>.token<wbr>.literal<wbr>.str-raw<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-RAW_STRING_LITERAL" onclick="show_railroad()">[RAW_STRING_LITERAL](tokens.md#railroad-RAW_STRING_LITERAL)</span> →  
      <span class="grammar-literal">r</span> <span class="grammar-literal">"</span> ^ <span class="grammar-text">[RAW_STRING_CONTENT](tokens.md#grammar-RAW_STRING_CONTENT)</span> <span class="grammar-literal">"</span> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>  
    \| <span class="grammar-literal">r</span> <span class="grammar-literal">\#</span><sup>n:1..=255</sup> ^ <span class="grammar-literal">"</span> <span class="grammar-text">[RAW_STRING_CONTENT_HASHED](tokens.md#grammar-RAW_STRING_CONTENT_HASHED)</span> <span class="grammar-literal">"</span> <span class="grammar-literal">\#</span><sup>n</sup> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-RAW_STRING_CONTENT" onclick="show_railroad()">[RAW_STRING_CONTENT](tokens.md#railroad-RAW_STRING_CONTENT)</span> → ( !<span class="grammar-literal">"</span> ~<span class="grammar-text">[CR](whitespace.md#grammar-CR)</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-RAW_STRING_CONTENT_HASHED" onclick="show_railroad()">[RAW_STRING_CONTENT_HASHED](tokens.md#railroad-RAW_STRING_CONTENT_HASHED)</span> → ( !( <span class="grammar-literal">"</span> <span class="grammar-literal">\#</span><sup>n</sup> ) ~<span class="grammar-text">[CR](whitespace.md#grammar-CR)</span> )<sup>\*</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 1020px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RAW_STRING_LITERAL"><svg class="railroad" viewBox="0 0 1020 273" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RAW_STRING_LITERAL">
<text class="comment" x="78" y="25">
RAW_STRING_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 102 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 102 h 24 m 420 0 h 506 m -250 0 l -5 -5 m 0 10 l 5 -5 m 250 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="91"/>
<text x="73" y="107">
r</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="97" y="91"/>
<text x="111" y="107">
&quot;</text>
</g>
<g class="labeledbox">
<rect height="79" width="344" x="135" y="42"/>
<path d=" M 135 102 h 8 m 328 0 h 8"/>
<text class="comment" x="200" y="65">
no backtracking</text>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RAW_STRING_CONTENT">
<g class="nonterminal">
<rect height="22" width="164" x="143" y="91"/>
<text x="225" y="107">
RAW_STRING_CONTENT</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="317" y="91"/>
<text x="331" y="107">
&quot;</text>
</g>
<g class="optional">
<path d=" M 355 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="379" y="91"/>
<text x="413" y="107">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 307 102 h 10"/>
<path d=" M 345 102 h 10"/>
</g>
</g>
<path d=" M 87 102 h 10"/>
<path d=" M 125 102 h 10"/>
</g>
<path d=" M 35 102 a 12 12 0 0 1 12 12 v 17 m 926 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 131 v 71 m 0 -32 l -5 -5 m 10 0 l -5 5 m 0 32 a 12 12 0 0 0 12 12 m 902 0 h 0 a 12 12 0 0 0 12 -12 v -71 m 0 38 l -5 5 m 10 0 l -5 -5 m 0 -38"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="203"/>
<text x="73" y="219">
r</text>
</g>
<g class="labeledbox">
<rect height="96" width="211" x="97" y="167"/>
<path d=" M 97 214 h 8 m 195 0 h 8"/>
<text class="comment" x="159" y="190">
repeat count n</text>
<g class="repeat">
<path d=" M 105 214 h 12 m 28 0 h 155 m -74 0 l -5 -5 m 0 10 l 5 -5 m 74 0 m -12 0 a 12 12 0 0 1 12 12 v 7 a 12 12 0 0 1 -12 12 m -171 0 h 0 a 12 12 0 0 1 -12 -12 v -7 a 12 12 0 0 1 12 -12"/>
<text class="comment" x="202" y="250">
at most 254 more times</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="117" y="203"/>
<text x="131" y="219">
#</text>
</g>
</g>
</g>
<g class="labeledbox">
<rect height="110" width="643" x="318" y="131"/>
<path d=" M 318 214 h 8 m 627 0 h 8"/>
<text class="comment" x="383" y="154">
no backtracking</text>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="326" y="203"/>
<text x="340" y="219">
&quot;</text>
</g>
<a class="link" xlink:href="tokens.md#railroad-RAW_STRING_CONTENT_HASHED">
<g class="nonterminal">
<rect height="22" width="228" x="364" y="203"/>
<text x="478" y="219">
RAW_STRING_CONTENT_HASHED</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="602" y="203"/>
<text x="616" y="219">
&quot;</text>
</g>
<g class="labeledbox">
<rect height="66" width="187" x="640" y="167"/>
<path d=" M 640 214 h 8 m 28 0 h 151 m -72 0 l -5 -5 m 0 10 l 5 -5 m 72 0"/>
<text class="comment" x="733" y="190">
repeat exactly n times</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="648" y="203"/>
<text x="662" y="219">
#</text>
</g>
</g>
<g class="optional">
<path d=" M 837 214 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="861" y="203"/>
<text x="895" y="219">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 354 214 h 10"/>
<path d=" M 592 214 h 10"/>
<path d=" M 630 214 h 10"/>
<path d=" M 827 214 h 10"/>
</g>
</g>
<path d=" M 87 214 h 10"/>
<path d=" M 308 214 h 10"/>
</g>
</g>
<path d=" M 995 102 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 102 h 10"/>
<path d=" M 985 102 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 484px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RAW_STRING_CONTENT"><svg class="railroad" viewBox="0 0 484 174" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RAW_STRING_CONTENT">
<text class="comment" x="78" y="25">
RAW_STRING_CONTENT</text>
</a>
<g class="sequence">
<path d=" M 10 135 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="optional">
<path d=" M 35 135 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -69 m 0 37 l -5 5 m 10 0 l -5 -5 m 0 -37 a 12 12 0 0 1 12 -12 h 366 m -180 0 l -5 -5 m 0 10 l 5 -5 m 180 0 a 12 12 0 0 1 12 12 v 69 m 0 -31 l -5 -5 m 10 0 l -5 5 m 0 31 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 135 h 12 m 342 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 5 a 12 12 0 0 1 -12 12 m 0 0 h -342 m 174 0 l 5 -5 m 0 10 l -5 -5 m -174 0 a 12 12 0 0 1 -12 -12 v -5 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="131" x="71" y="88"/>
<path d=" M 71 135 h 8 m 28 0 h 95 m -44 0 l -5 -5 m 0 10 l 5 -5 m 44 0"/>
<text class="comment" x="136" y="111">
not followed by</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="79" y="124"/>
<text x="93" y="140">
&quot;</text>
</g>
</g>
<g class="labeledbox exceptbox">
<rect height="100" width="201" x="212" y="54"/>
<path d=" M 212 135 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="312" y="77">
⚠️ with the exception of</text>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="220" y="94"/>
<text x="238" y="110">
CR</text>
</g>
</a>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="220" y="124"/>
<text x="246" y="140">
CHAR</text>
</g>
</a>
</g>
<path d=" M 202 135 h 10"/>
</g>
</g>
</g>
<path d=" M 459 135 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 135 h 10"/>
<path d=" M 449 135 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 594px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RAW_STRING_CONTENT_HASHED"><svg class="railroad" viewBox="0 0 594 184" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RAW_STRING_CONTENT_HASHED">
<text class="comment" x="106" y="25">
RAW_STRING_CONTENT_HASHED</text>
</a>
<g class="sequence">
<path d=" M 10 137 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="optional">
<path d=" M 35 137 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -71 m 0 38 l -5 5 m 10 0 l -5 -5 m 0 -38 a 12 12 0 0 1 12 -12 h 476 m -235 0 l -5 -5 m 0 10 l 5 -5 m 235 0 a 12 12 0 0 1 12 12 v 71 m 0 -32 l -5 -5 m 10 0 l -5 5 m 0 32 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 137 h 12 m 452 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 13 a 12 12 0 0 1 -12 12 m 0 0 h -452 m 229 0 l 5 -5 m 0 10 l -5 -5 m -229 0 a 12 12 0 0 1 -12 -12 v -13 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="labeledbox">
<rect height="110" width="241" x="71" y="54"/>
<path d=" M 71 137 h 8 m 225 0 h 8"/>
<text class="comment" x="136" y="77">
not followed by</text>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="79" y="126"/>
<text x="93" y="142">
&quot;</text>
</g>
<g class="labeledbox">
<rect height="66" width="187" x="117" y="90"/>
<path d=" M 117 137 h 8 m 28 0 h 151 m -72 0 l -5 -5 m 0 10 l 5 -5 m 72 0"/>
<text class="comment" x="210" y="113">
repeat exactly n times</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="125" y="126"/>
<text x="139" y="142">
#</text>
</g>
</g>
<path d=" M 107 137 h 10"/>
</g>
</g>
<g class="labeledbox exceptbox">
<rect height="100" width="201" x="322" y="56"/>
<path d=" M 322 137 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="422" y="79">
⚠️ with the exception of</text>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="330" y="96"/>
<text x="348" y="112">
CR</text>
</g>
</a>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="330" y="126"/>
<text x="356" y="142">
CHAR</text>
</g>
</a>
</g>
<path d=" M 312 137 h 10"/>
</g>
</g>
</g>
<path d=" M 569 137 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 137 h 10"/>
<path d=" M 559 137 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.literal.str-raw.intro"><a class="rule-link" href="#r-lex.token.literal.str-raw.intro" title="lex.token.literal.str-raw.intro"><span>[lex<wbr>.token<wbr>.literal<wbr>.str-raw<wbr>.intro]</span></a>
</div>

原始字符串字面量不处理任何转义。它们以字符 `U+0072`（`r`）开头，后跟少于 256 个字符 `U+0023`（`#`）以及一个 `U+0022`（双引号）字符。

<div class="rule" id="r-lex.token.literal.str-raw.body"><a class="rule-link" href="#r-lex.token.literal.str-raw.body" title="lex.token.literal.str-raw.body"><span>[lex<wbr>.token<wbr>.literal<wbr>.str-raw<wbr>.body]</span></a>
</div>

\_原始字符串体_可以包含除 `U+000D`（CR）之外的任意 Unicode 字符序列。它只会由另一个 `U+0022`（双引号）字符终止，且该字符后面必须跟着与起始 `U+0022`（双引号）字符之前相同数量的 `U+0023`（`#`）字符。

<div class="rule" id="r-lex.token.literal.str-raw.content"><a class="rule-link" href="#r-lex.token.literal.str-raw.content" title="lex.token.literal.str-raw.content"><span>[lex<wbr>.token<wbr>.literal<wbr>.str-raw<wbr>.content]</span></a>
</div>

原始字符串体中包含的所有 Unicode 字符都表示其自身；字符 `U+0022`（双引号）（除非后面跟着至少与启动该原始字符串字面量时相同数量的 `U+0023`（`#`）字符）或 `U+005C`（`\`）没有任何特殊含义。

字符串字面量的示例：

```rust
"foo"; r"foo";                     // foo
"\"foo\""; r#""foo""#;             // "foo"

"foo #\"# bar";
r##"foo #"# bar"##;                // foo #"# bar

"\x52"; "R"; r"R";                 // R
"\\x52"; r"\x52";                  // \x52
```

### 字节和字节字符串字面量

<div class="rule" id="r-lex.token.byte"><a class="rule-link" href="#r-lex.token.byte" title="lex.token.byte"><span>[lex<wbr>.token<wbr>.byte]</span></a>
</div>

#### 字节字面量

<div class="rule" id="r-lex.token.byte.syntax"><a class="rule-link" href="#r-lex.token.byte.syntax" title="lex.token.byte.syntax"><span>[lex<wbr>.token<wbr>.byte<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-BYTE_LITERAL" onclick="show_railroad()">[BYTE_LITERAL](tokens.md#railroad-BYTE_LITERAL)</span> →  
    <span class="grammar-literal">b'</span> ^ ( <span class="grammar-text">[ASCII_FOR_CHAR](tokens.md#grammar-ASCII_FOR_CHAR)</span> | <span class="grammar-text">[BYTE_ESCAPE](tokens.md#grammar-BYTE_ESCAPE)</span> ) <span class="grammar-literal">'</span> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-ASCII_FOR_CHAR" onclick="show_railroad()">[ASCII_FOR_CHAR](tokens.md#railroad-ASCII_FOR_CHAR)</span> → !\[<span class="grammar-literal">'</span> <span class="grammar-literal">\\</span> [LF](whitespace.md#grammar-LF) [CR](whitespace.md#grammar-CR) [TAB](whitespace.md#grammar-TAB)\] <span class="grammar-text">[ASCII](input-format.md#grammar-ASCII)</span>

<span class="grammar-text grammar-production" id="grammar-BYTE_ESCAPE" onclick="show_railroad()">[BYTE_ESCAPE](tokens.md#railroad-BYTE_ESCAPE)</span> →  
      <span class="grammar-literal">\\x</span> <span class="grammar-text">[HEX_DIGIT](tokens.md#grammar-HEX_DIGIT)</span> <span class="grammar-text">[HEX_DIGIT](tokens.md#grammar-HEX_DIGIT)</span>  
    \| <span class="grammar-literal">\\n</span> | <span class="grammar-literal">\\r</span> | <span class="grammar-literal">\\t</span> | <span class="grammar-literal">\\\\</span> | <span class="grammar-literal">\\0</span> | <span class="grammar-literal">\\'</span> | <span class="grammar-literal">\\"</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 476px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BYTE_LITERAL"><svg class="railroad" viewBox="0 0 476 164" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-BYTE_LITERAL">
<text class="comment" x="57" y="25">
BYTE_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 102 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="91"/>
<text x="53" y="107">
b&#x27;</text>
</g>
<g class="labeledbox">
<rect height="112" width="360" x="81" y="42"/>
<path d=" M 81 102 h 8 m 344 0 h 8"/>
<text class="comment" x="146" y="65">
no backtracking</text>
<g class="sequence">
<g class="choice">
<path d=" M 89 102 h 24 m 132 0 h 24"/>
<a class="link" xlink:href="tokens.md#railroad-ASCII_FOR_CHAR">
<g class="nonterminal">
<rect height="22" width="132" x="113" y="91"/>
<text x="179" y="107">
ASCII_FOR_CHAR</text>
</g>
</a>
<path d=" M 89 102 a 12 12 0 0 1 12 12 v 9 m 156 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 101 123 v 0 a 12 12 0 0 0 12 12 m 108 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-BYTE_ESCAPE">
<g class="nonterminal">
<rect height="22" width="108" x="113" y="124"/>
<text x="167" y="140">
BYTE_ESCAPE</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="279" y="91"/>
<text x="293" y="107">
&#x27;</text>
</g>
<g class="optional">
<path d=" M 317 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="341" y="91"/>
<text x="375" y="107">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 269 102 h 10"/>
<path d=" M 307 102 h 10"/>
</g>
</g>
<path d=" M 71 102 h 10"/>
</g>
<path d=" M 451 102 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 102 h 10"/>
<path d=" M 441 102 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 271px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ASCII_FOR_CHAR"><svg class="railroad" viewBox="0 0 271 250" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-ASCII_FOR_CHAR">
<text class="comment" x="64" y="25">
ASCII_FOR_CHAR</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="labeledbox">
<rect height="198" width="131" x="35" y="42"/>
<path d=" M 35 89 h 8 m 92 0 h 31"/>
<text class="comment" x="100" y="65">
not followed by</text>
<g class="choice">
<path d=" M 43 89 h 24 m 28 0 h 40"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="67" y="78"/>
<text x="81" y="94">
&#x27;</text>
</g>
<path d=" M 43 89 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 55 110 v 33 m 68 0 v -33"/>
<path d=" M 55 143 v 33 m 68 0 v -33"/>
<path d=" M 55 176 v 33 m 68 0 v -33"/>
<path d=" M 55 110 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="67" y="111"/>
<text x="81" y="127">
\</text>
</g>
<path d=" M 55 143 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="whitespace.md#railroad-LF">
<g class="nonterminal">
<rect height="22" width="36" x="67" y="144"/>
<text x="85" y="160">
LF</text>
</g>
</a>
<path d=" M 55 176 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="67" y="177"/>
<text x="85" y="193">
CR</text>
</g>
</a>
<path d=" M 55 209 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="whitespace.md#railroad-TAB">
<g class="nonterminal">
<rect height="22" width="44" x="67" y="210"/>
<text x="89" y="226">
TAB</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="input-format.md#railroad-ASCII">
<g class="nonterminal">
<rect height="22" width="60" x="176" y="78"/>
<text x="206" y="94">
ASCII</text>
</g>
</a>
<path d=" M 166 89 h 10"/>
</g>
<path d=" M 246 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 236 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 358px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BYTE_ESCAPE"><svg class="railroad" viewBox="0 0 358 305" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-BYTE_ESCAPE">
<text class="comment" x="53" y="25">
BYTE_ESCAPE</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 240 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="42"/>
<text x="77" y="58">
\x</text>
</g>
<a class="link" xlink:href="tokens.md#railroad-HEX_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="105" y="42"/>
<text x="151" y="58">
HEX_DIGIT</text>
</g>
</a>
<a class="link" xlink:href="tokens.md#railroad-HEX_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="207" y="42"/>
<text x="253" y="58">
HEX_DIGIT</text>
</g>
</a>
<path d=" M 95 53 h 10"/>
<path d=" M 197 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 264 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 264 0 v -33"/>
<path d=" M 47 107 v 33 m 264 0 v -33"/>
<path d=" M 47 140 v 33 m 264 0 v -33"/>
<path d=" M 47 173 v 33 m 264 0 v -33"/>
<path d=" M 47 206 v 33 m 264 0 v -33"/>
<path d=" M 47 239 v 33 m 264 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="75"/>
<text x="77" y="91">
\n</text>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="108"/>
<text x="77" y="124">
\r</text>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="141"/>
<text x="77" y="157">
\t</text>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="174"/>
<text x="77" y="190">
\\</text>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="207"/>
<text x="77" y="223">
\0</text>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="240"/>
<text x="77" y="256">
\&#x27;</text>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 36 0 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="273"/>
<text x="77" y="289">
\&quot;</text>
</g>
</g>
<path d=" M 333 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 323 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.byte.intro"><a class="rule-link" href="#r-lex.token.byte.intro" title="lex.token.byte.intro"><span>[lex<wbr>.token<wbr>.byte<wbr>.intro]</span></a>
</div>

_字节字面量_是单个 ASCII 字符（在 `U+0000` 到 `U+007F` 范围内）或单个_转义_，其前面是字符 `U+0062`（`b`）和 `U+0027`（单引号），后面跟着字符 `U+0027`。如果字符 `U+0027` 出现在字面量内部，则必须通过前置的 `U+005C`（`\`）字符进行_转义\_。它等价于 `u8` 无符号 8 位整数_数字字面量\_。

<div class="rule" id="r-lex.token.str-byte"><a class="rule-link" href="#r-lex.token.str-byte" title="lex.token.str-byte"><span>[lex<wbr>.token<wbr>.str-byte]</span></a>
</div>

#### 字节字符串字面量

<div class="rule" id="r-lex.token.str-byte.syntax"><a class="rule-link" href="#r-lex.token.str-byte.syntax" title="lex.token.str-byte.syntax"><span>[lex<wbr>.token<wbr>.str-byte<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-BYTE_STRING_LITERAL" onclick="show_railroad()">[BYTE_STRING_LITERAL](tokens.md#railroad-BYTE_STRING_LITERAL)</span> →  
    <span class="grammar-literal">b"</span> ^ ( <span class="grammar-text">[ASCII_FOR_STRING](tokens.md#grammar-ASCII_FOR_STRING)</span> | <span class="grammar-text">[BYTE_ESCAPE](tokens.md#grammar-BYTE_ESCAPE)</span> | <span class="grammar-text">[STRING_CONTINUE](tokens.md#grammar-STRING_CONTINUE)</span> )<sup>\*</sup> <span class="grammar-literal">"</span> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-ASCII_FOR_STRING" onclick="show_railroad()">[ASCII_FOR_STRING](tokens.md#railroad-ASCII_FOR_STRING)</span> → !\[<span class="grammar-literal">"</span> <span class="grammar-literal">\\</span> [CR](whitespace.md#grammar-CR)\] <span class="grammar-text">[ASCII](input-format.md#grammar-ASCII)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 564px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BYTE_STRING_LITERAL"><svg class="railroad" viewBox="0 0 564 207" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-BYTE_STRING_LITERAL">
<text class="comment" x="81" y="25">
BYTE_STRING_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 102 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="91"/>
<text x="53" y="107">
b&quot;</text>
</g>
<g class="labeledbox">
<rect height="155" width="448" x="81" y="42"/>
<path d=" M 81 102 h 8 m 432 0 h 8"/>
<text class="comment" x="146" y="65">
no backtracking</text>
<g class="sequence">
<g class="optional">
<path d=" M 89 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 220 m -107 0 l -5 -5 m 0 10 l 5 -5 m 107 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 113 102 h 12 m 196 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 63 m 0 -28 l -5 -5 m 10 0 l -5 5 m 0 28 a 12 12 0 0 1 -12 12 m 0 0 h -196 m 101 0 l 5 -5 m 0 10 l -5 -5 m -101 0 a 12 12 0 0 1 -12 -12 v -63 m 0 34 l -5 5 m 10 0 l -5 -5 m 0 -34 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 125 102 h 24 m 148 0 h 24"/>
<a class="link" xlink:href="tokens.md#railroad-ASCII_FOR_STRING">
<g class="nonterminal">
<rect height="22" width="148" x="149" y="91"/>
<text x="223" y="107">
ASCII_FOR_STRING</text>
</g>
</a>
<path d=" M 125 102 a 12 12 0 0 1 12 12 v 9 m 172 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 137 123 v 33 m 172 0 v -33"/>
<path d=" M 137 123 v 0 a 12 12 0 0 0 12 12 m 108 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-BYTE_ESCAPE">
<g class="nonterminal">
<rect height="22" width="108" x="149" y="124"/>
<text x="203" y="140">
BYTE_ESCAPE</text>
</g>
</a>
<path d=" M 137 156 v 0 a 12 12 0 0 0 12 12 m 140 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-STRING_CONTINUE">
<g class="nonterminal">
<rect height="22" width="140" x="149" y="157"/>
<text x="219" y="173">
STRING_CONTINUE</text>
</g>
</a>
</g>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="367" y="91"/>
<text x="381" y="107">
&quot;</text>
</g>
<g class="optional">
<path d=" M 405 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="429" y="91"/>
<text x="463" y="107">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 357 102 h 10"/>
<path d=" M 395 102 h 10"/>
</g>
</g>
<path d=" M 71 102 h 10"/>
</g>
<path d=" M 539 102 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 102 h 10"/>
<path d=" M 529 102 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 271px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ASCII_FOR_STRING"><svg class="railroad" viewBox="0 0 271 184" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-ASCII_FOR_STRING">
<text class="comment" x="71" y="25">
ASCII_FOR_STRING</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="labeledbox">
<rect height="132" width="131" x="35" y="42"/>
<path d=" M 35 89 h 8 m 84 0 h 39"/>
<text class="comment" x="100" y="65">
not followed by</text>
<g class="choice">
<path d=" M 43 89 h 24 m 28 0 h 32"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="67" y="78"/>
<text x="81" y="94">
&quot;</text>
</g>
<path d=" M 43 89 a 12 12 0 0 1 12 12 v 9 m 60 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 55 110 v 33 m 60 0 v -33"/>
<path d=" M 55 110 v 0 a 12 12 0 0 0 12 12 m 28 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="67" y="111"/>
<text x="81" y="127">
\</text>
</g>
<path d=" M 55 143 v 0 a 12 12 0 0 0 12 12 m 36 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="67" y="144"/>
<text x="85" y="160">
CR</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="input-format.md#railroad-ASCII">
<g class="nonterminal">
<rect height="22" width="60" x="176" y="78"/>
<text x="206" y="94">
ASCII</text>
</g>
</a>
<path d=" M 166 89 h 10"/>
</g>
<path d=" M 246 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 236 89 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.str-byte.intro"><a class="rule-link" href="#r-lex.token.str-byte.intro" title="lex.token.str-byte.intro"><span>[lex<wbr>.token<wbr>.str-byte<wbr>.intro]</span></a>
</div>

非原始_字节字符串字面量_是 ASCII 字符和_转义_的序列，其前面是字符 `U+0062`（`b`）和 `U+0022`（双引号），后面跟着字符 `U+0022`。如果字符 `U+0022` 出现在字面量内部，则必须通过前置的 `U+005C`（`\`）字符进行_转义\_。另外，字节字符串字面量也可以是下面定义的_原始字节字符串字面量\_。

<div class="rule" id="r-lex.token.str-byte.linefeed"><a class="rule-link" href="#r-lex.token.str-byte.linefeed" title="lex.token.str-byte.linefeed"><span>[lex<wbr>.token<wbr>.str-byte<wbr>.linefeed]</span></a>
</div>

字节字符串字面量中允许出现换行，换行由字符 `U+000A`（LF）表示。字符 `U+000D`（CR）不得出现在字节字符串字面量中。当未转义的 `U+005C` 字符（`\`）紧接在换行之前时，该换行不会出现在这个 token 所表示的字符串中。详见[字符串续行转义](expressions/literal-expr.md#string-continuation-escapes)。

<div class="rule" id="r-lex.token.str-byte.escape"><a class="rule-link" href="#r-lex.token.str-byte.escape" title="lex.token.str-byte.escape"><span>[lex<wbr>.token<wbr>.str-byte<wbr>.escape]</span></a>
</div>

字节字面量或非原始字节字符串字面量中还可以使用一些额外的_转义\_。转义以 `U+005C`（`\`）开头，并继续为以下形式之一：

<div class="rule" id="r-lex.token.str-byte.escape-byte"><a class="rule-link" href="#r-lex.token.str-byte.escape-byte" title="lex.token.str-byte.escape-byte"><span>[lex<wbr>.token<wbr>.str-byte<wbr>.escape-byte]</span></a>
</div>

- _字节转义_以 `U+0078`（`x`）开头，后跟恰好两个_十六进制数字_。它表示等于所给十六进制值的字节。

<div class="rule" id="r-lex.token.str-byte.escape-whitespace"><a class="rule-link" href="#r-lex.token.str-byte.escape-whitespace" title="lex.token.str-byte.escape-whitespace"><span>[lex<wbr>.token<wbr>.str-byte<wbr>.escape-whitespace]</span></a>
</div>

- \_空白转义_是字符 `U+006E`（`n`）、`U+0072`（`r`）或 `U+0074`（`t`）之一，分别表示字节值 `0x0A`（ASCII LF）、`0x0D`（ASCII CR）或 `0x09`（ASCII HT）。

<div class="rule" id="r-lex.token.str-byte.escape-null"><a class="rule-link" href="#r-lex.token.str-byte.escape-null" title="lex.token.str-byte.escape-null"><span>[lex<wbr>.token<wbr>.str-byte<wbr>.escape-null]</span></a>
</div>

- \_空值转义_是字符 `U+0030`（`0`），表示字节值 `0x00`（ASCII NUL）。

<div class="rule" id="r-lex.token.str-byte.escape-slash"><a class="rule-link" href="#r-lex.token.str-byte.escape-slash" title="lex.token.str-byte.escape-slash"><span>[lex<wbr>.token<wbr>.str-byte<wbr>.escape-slash]</span></a>
</div>

- \_反斜杠转义_是字符 `U+005C`（`\`），它必须被转义才能表示其 ASCII 编码 `0x5C`。

<div class="rule" id="r-lex.token.str-byte-raw"><a class="rule-link" href="#r-lex.token.str-byte-raw" title="lex.token.str-byte-raw"><span>[lex<wbr>.token<wbr>.str-byte-raw]</span></a>
</div>

#### 原始字节字符串字面量

<div class="rule" id="r-lex.token.str-byte-raw.syntax"><a class="rule-link" href="#r-lex.token.str-byte-raw.syntax" title="lex.token.str-byte-raw.syntax"><span>[lex<wbr>.token<wbr>.str-byte-raw<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-RAW_BYTE_STRING_LITERAL" onclick="show_railroad()">[RAW_BYTE_STRING_LITERAL](tokens.md#railroad-RAW_BYTE_STRING_LITERAL)</span> →  
      <span class="grammar-literal">br</span> <span class="grammar-literal">"</span> ^ <span class="grammar-text">[RAW_BYTE_STRING_CONTENT](tokens.md#grammar-RAW_BYTE_STRING_CONTENT)</span> <span class="grammar-literal">"</span> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>  
    \| <span class="grammar-literal">br</span> <span class="grammar-literal">\#</span><sup>n:1..=255</sup> ^ <span class="grammar-literal">"</span> <span class="grammar-text">[RAW_BYTE_STRING_CONTENT_HASHED](tokens.md#grammar-RAW_BYTE_STRING_CONTENT_HASHED)</span> <span class="grammar-literal">"</span> <span class="grammar-literal">\#</span><sup>n</sup> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-RAW_BYTE_STRING_CONTENT" onclick="show_railroad()">[RAW_BYTE_STRING_CONTENT](tokens.md#railroad-RAW_BYTE_STRING_CONTENT)</span> → ( !<span class="grammar-literal">"</span> <span class="grammar-text">[ASCII_FOR_RAW](tokens.md#grammar-ASCII_FOR_RAW)</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-RAW_BYTE_STRING_CONTENT_HASHED" onclick="show_railroad()">[RAW_BYTE_STRING_CONTENT_HASHED](tokens.md#railroad-RAW_BYTE_STRING_CONTENT_HASHED)</span> → ( !( <span class="grammar-literal">"</span> <span class="grammar-literal">\#</span><sup>n</sup> ) <span class="grammar-text">[ASCII_FOR_RAW](tokens.md#grammar-ASCII_FOR_RAW)</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-ASCII_FOR_RAW" onclick="show_railroad()">[ASCII_FOR_RAW](tokens.md#railroad-ASCII_FOR_RAW)</span> → !<span class="grammar-text">[CR](whitespace.md#grammar-CR)</span> <span class="grammar-text">[ASCII](input-format.md#grammar-ASCII)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 1068px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RAW_BYTE_STRING_LITERAL"><svg class="railroad" viewBox="0 0 1068 273" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RAW_BYTE_STRING_LITERAL">
<text class="comment" x="99" y="25">
RAW_BYTE_STRING_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 102 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 102 h 24 m 476 0 h 498 m -246 0 l -5 -5 m 0 10 l 5 -5 m 246 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="91"/>
<text x="77" y="107">
br</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="105" y="91"/>
<text x="119" y="107">
&quot;</text>
</g>
<g class="labeledbox">
<rect height="79" width="392" x="143" y="42"/>
<path d=" M 143 102 h 8 m 376 0 h 8"/>
<text class="comment" x="208" y="65">
no backtracking</text>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RAW_BYTE_STRING_CONTENT">
<g class="nonterminal">
<rect height="22" width="212" x="151" y="91"/>
<text x="257" y="107">
RAW_BYTE_STRING_CONTENT</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="373" y="91"/>
<text x="387" y="107">
&quot;</text>
</g>
<g class="optional">
<path d=" M 411 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="435" y="91"/>
<text x="469" y="107">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 363 102 h 10"/>
<path d=" M 401 102 h 10"/>
</g>
</g>
<path d=" M 95 102 h 10"/>
<path d=" M 133 102 h 10"/>
</g>
<path d=" M 35 102 a 12 12 0 0 1 12 12 v 17 m 974 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 131 v 71 m 0 -32 l -5 -5 m 10 0 l -5 5 m 0 32 a 12 12 0 0 0 12 12 m 950 0 h 0 a 12 12 0 0 0 12 -12 v -71 m 0 38 l -5 5 m 10 0 l -5 -5 m 0 -38"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="203"/>
<text x="77" y="219">
br</text>
</g>
<g class="labeledbox">
<rect height="96" width="211" x="105" y="167"/>
<path d=" M 105 214 h 8 m 195 0 h 8"/>
<text class="comment" x="167" y="190">
repeat count n</text>
<g class="repeat">
<path d=" M 113 214 h 12 m 28 0 h 155 m -74 0 l -5 -5 m 0 10 l 5 -5 m 74 0 m -12 0 a 12 12 0 0 1 12 12 v 7 a 12 12 0 0 1 -12 12 m -171 0 h 0 a 12 12 0 0 1 -12 -12 v -7 a 12 12 0 0 1 12 -12"/>
<text class="comment" x="210" y="250">
at most 254 more times</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="125" y="203"/>
<text x="139" y="219">
#</text>
</g>
</g>
</g>
<g class="labeledbox">
<rect height="110" width="683" x="326" y="131"/>
<path d=" M 326 214 h 8 m 667 0 h 8"/>
<text class="comment" x="391" y="154">
no backtracking</text>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="334" y="203"/>
<text x="348" y="219">
&quot;</text>
</g>
<a class="link" xlink:href="tokens.md#railroad-RAW_BYTE_STRING_CONTENT_HASHED">
<g class="nonterminal">
<rect height="22" width="268" x="372" y="203"/>
<text x="506" y="219">
RAW_BYTE_STRING_CONTENT_HASHED</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="650" y="203"/>
<text x="664" y="219">
&quot;</text>
</g>
<g class="labeledbox">
<rect height="66" width="187" x="688" y="167"/>
<path d=" M 688 214 h 8 m 28 0 h 151 m -72 0 l -5 -5 m 0 10 l 5 -5 m 72 0"/>
<text class="comment" x="781" y="190">
repeat exactly n times</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="696" y="203"/>
<text x="710" y="219">
#</text>
</g>
</g>
<g class="optional">
<path d=" M 885 214 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="909" y="203"/>
<text x="943" y="219">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 362 214 h 10"/>
<path d=" M 640 214 h 10"/>
<path d=" M 678 214 h 10"/>
<path d=" M 875 214 h 10"/>
</g>
</g>
<path d=" M 95 214 h 10"/>
<path d=" M 316 214 h 10"/>
</g>
</g>
<path d=" M 1043 102 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 102 h 10"/>
<path d=" M 1033 102 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 407px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RAW_BYTE_STRING_CONTENT"><svg class="railroad" viewBox="0 0 407 140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RAW_BYTE_STRING_CONTENT">
<text class="comment" x="99" y="25">
RAW_BYTE_STRING_CONTENT</text>
</a>
<g class="sequence">
<path d=" M 10 101 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="optional">
<path d=" M 35 101 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -35 a 12 12 0 0 1 12 -12 h 289 m -141 0 l -5 -5 m 0 10 l 5 -5 m 141 0 a 12 12 0 0 1 12 12 v 35 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 101 h 12 m 265 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 5 a 12 12 0 0 1 -12 12 m 0 0 h -265 m 135 0 l 5 -5 m 0 10 l -5 -5 m -135 0 a 12 12 0 0 1 -12 -12 v -5 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="131" x="71" y="54"/>
<path d=" M 71 101 h 8 m 28 0 h 95 m -44 0 l -5 -5 m 0 10 l 5 -5 m 44 0"/>
<text class="comment" x="136" y="77">
not followed by</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="79" y="90"/>
<text x="93" y="106">
&quot;</text>
</g>
</g>
<a class="link" xlink:href="tokens.md#railroad-ASCII_FOR_RAW">
<g class="nonterminal">
<rect height="22" width="124" x="212" y="90"/>
<text x="274" y="106">
ASCII_FOR_RAW</text>
</g>
</a>
<path d=" M 202 101 h 10"/>
</g>
</g>
</g>
<path d=" M 382 101 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 101 h 10"/>
<path d=" M 372 101 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 517px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RAW_BYTE_STRING_CONTENT_HASHED"><svg class="railroad" viewBox="0 0 517 184" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RAW_BYTE_STRING_CONTENT_HASHED">
<text class="comment" x="123" y="25">
RAW_BYTE_STRING_CONTENT_HASHED</text>
</a>
<g class="sequence">
<path d=" M 10 137 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="optional">
<path d=" M 35 137 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -71 m 0 38 l -5 5 m 10 0 l -5 -5 m 0 -38 a 12 12 0 0 1 12 -12 h 399 m -196 0 l -5 -5 m 0 10 l 5 -5 m 196 0 a 12 12 0 0 1 12 12 v 71 m 0 -32 l -5 -5 m 10 0 l -5 5 m 0 32 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 137 h 12 m 375 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 13 a 12 12 0 0 1 -12 12 m 0 0 h -375 m 190 0 l 5 -5 m 0 10 l -5 -5 m -190 0 a 12 12 0 0 1 -12 -12 v -13 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="labeledbox">
<rect height="110" width="241" x="71" y="54"/>
<path d=" M 71 137 h 8 m 225 0 h 8"/>
<text class="comment" x="136" y="77">
not followed by</text>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="79" y="126"/>
<text x="93" y="142">
&quot;</text>
</g>
<g class="labeledbox">
<rect height="66" width="187" x="117" y="90"/>
<path d=" M 117 137 h 8 m 28 0 h 151 m -72 0 l -5 -5 m 0 10 l 5 -5 m 72 0"/>
<text class="comment" x="210" y="113">
repeat exactly n times</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="125" y="126"/>
<text x="139" y="142">
#</text>
</g>
</g>
<path d=" M 107 137 h 10"/>
</g>
</g>
<a class="link" xlink:href="tokens.md#railroad-ASCII_FOR_RAW">
<g class="nonterminal">
<rect height="22" width="124" x="322" y="126"/>
<text x="384" y="142">
ASCII_FOR_RAW</text>
</g>
</a>
<path d=" M 312 137 h 10"/>
</g>
</g>
</g>
<path d=" M 492 137 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 137 h 10"/>
<path d=" M 482 137 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 271px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ASCII_FOR_RAW"><svg class="railroad" viewBox="0 0 271 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-ASCII_FOR_RAW">
<text class="comment" x="60" y="25">
ASCII_FOR_RAW</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="131" x="35" y="42"/>
<path d=" M 35 89 h 8 m 36 0 h 87 m -40 0 l -5 -5 m 0 10 l 5 -5 m 40 0"/>
<text class="comment" x="100" y="65">
not followed by</text>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="43" y="78"/>
<text x="61" y="94">
CR</text>
</g>
</a>
</g>
<a class="link" xlink:href="input-format.md#railroad-ASCII">
<g class="nonterminal">
<rect height="22" width="60" x="176" y="78"/>
<text x="206" y="94">
ASCII</text>
</g>
</a>
<path d=" M 166 89 h 10"/>
</g>
<path d=" M 246 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 236 89 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.str-byte-raw.intro"><a class="rule-link" href="#r-lex.token.str-byte-raw.intro" title="lex.token.str-byte-raw.intro"><span>[lex<wbr>.token<wbr>.str-byte-raw<wbr>.intro]</span></a>
</div>

原始字节字符串字面量不处理任何转义。它们以字符 `U+0062`（`b`）开头，后跟 `U+0072`（`r`），再后跟少于 256 个字符 `U+0023`（`#`）以及一个 `U+0022`（双引号）字符。

<div class="rule" id="r-lex.token.str-byte-raw.body"><a class="rule-link" href="#r-lex.token.str-byte-raw.body" title="lex.token.str-byte-raw.body"><span>[lex<wbr>.token<wbr>.str-byte-raw<wbr>.body]</span></a>
</div>

\_原始字符串体_可以包含除 `U+000D`（CR）之外的任意 ASCII 字符序列。它只会由另一个 `U+0022`（双引号）字符终止，且该字符后面必须跟着与起始 `U+0022`（双引号）字符之前相同数量的 `U+0023`（`#`）字符。原始字节字符串字面量不能包含任何非 ASCII 字节。

<div class="rule" id="r-lex.token.literal.str-byte-raw.content"><a class="rule-link" href="#r-lex.token.literal.str-byte-raw.content" title="lex.token.literal.str-byte-raw.content"><span>[lex<wbr>.token<wbr>.literal<wbr>.str-byte-raw<wbr>.content]</span></a>
</div>

原始字符串体中包含的所有字符都表示其 ASCII 编码；字符 `U+0022`（双引号）（除非后面跟着至少与启动该原始字符串字面量时相同数量的 `U+0023`（`#`）字符）或 `U+005C`（`\`）没有任何特殊含义。

字节字符串字面量的示例：

```rust
b"foo"; br"foo";                     // foo
b"\"foo\""; br#""foo""#;             // "foo"

b"foo #\"# bar";
br##"foo #"# bar"##;                 // foo #"# bar

b"\x52"; b"R"; br"R";                // R
b"\\x52"; br"\x52";                  // \x52
```

### C 字符串和原始 C 字符串字面量

<div class="rule" id="r-lex.token.str-c"><a class="rule-link" href="#r-lex.token.str-c" title="lex.token.str-c"><span>[lex<wbr>.token<wbr>.str-c]</span></a>
</div>

#### C 字符串字面量

<div class="rule" id="r-lex.token.str-c.syntax"><a class="rule-link" href="#r-lex.token.str-c.syntax" title="lex.token.str-c.syntax"><span>[lex<wbr>.token<wbr>.str-c<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-C_STRING_LITERAL" onclick="show_railroad()">[C_STRING_LITERAL](tokens.md#railroad-C_STRING_LITERAL)</span> →  
    <span class="grammar-literal">c"</span> ^ (  
        ~\[<span class="grammar-literal">"</span> <span class="grammar-literal">\\</span> [CR](whitespace.md#grammar-CR) [NUL](input-format.md#grammar-NUL)\]  
      \| <span class="grammar-text">[BYTE_ESCAPE](tokens.md#grammar-BYTE_ESCAPE)</span><sub class="grammar-text">但不包括 `\0` 或 `\x00`</sub>  
      \| <span class="grammar-text">[UNICODE_ESCAPE](tokens.md#grammar-UNICODE_ESCAPE)</span><sub class="grammar-text">但不包括 `\u{0}`、`\u{00}`、…、`\u{000000}`</sub>  
      \| <span class="grammar-text">[STRING_CONTINUE](tokens.md#grammar-STRING_CONTINUE)</span>  
    )<sup>\*</sup> <span class="grammar-literal">"</span> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 743px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-C_STRING_LITERAL"><svg class="railroad" viewBox="0 0 743 502" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-C_STRING_LITERAL">
<text class="comment" x="71" y="25">
C_STRING_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 270 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="259"/>
<text x="53" y="275">
c&quot;</text>
</g>
<g class="labeledbox">
<rect height="450" width="627" x="81" y="42"/>
<path d=" M 81 270 h 8 m 611 0 h 8"/>
<text class="comment" x="146" y="65">
no backtracking</text>
<g class="sequence">
<g class="optional">
<path d=" M 89 270 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -168 m 0 87 l -5 5 m 10 0 l -5 -5 m 0 -87 a 12 12 0 0 1 12 -12 h 399 m -196 0 l -5 -5 m 0 10 l 5 -5 m 196 0 a 12 12 0 0 1 12 12 v 168 m 0 -81 l -5 -5 m 10 0 l -5 5 m 0 81 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 113 270 h 12 m 375 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 190 m 0 -92 l -5 -5 m 10 0 l -5 5 m 0 92 a 12 12 0 0 1 -12 12 m 0 0 h -375 m 190 0 l 5 -5 m 0 10 l -5 -5 m -190 0 a 12 12 0 0 1 -12 -12 v -190 m 0 98 l -5 5 m 10 0 l -5 -5 m 0 -98 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 125 270 h 24 m 201 0 h 150 m -72 0 l -5 -5 m 0 10 l 5 -5 m 72 0"/>
<g class="sequence">
<g class="labeledbox exceptbox">
<rect height="199" width="201" x="149" y="90"/>
<path d=" M 149 270 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="249" y="113">
⚠️ with the exception of</text>
<g class="choice">
<path d=" M 157 141 h 24 m 28 0 h 40"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="181" y="130"/>
<text x="195" y="146">
&quot;</text>
</g>
<path d=" M 157 141 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 169 162 v 33 m 68 0 v -33"/>
<path d=" M 169 195 v 33 m 68 0 v -33"/>
<path d=" M 169 162 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="181" y="163"/>
<text x="195" y="179">
\</text>
</g>
<path d=" M 169 195 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="181" y="196"/>
<text x="199" y="212">
CR</text>
</g>
</a>
<path d=" M 169 228 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="input-format.md#railroad-NUL">
<g class="nonterminal">
<rect height="22" width="44" x="181" y="229"/>
<text x="203" y="245">
NUL</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="157" y="259"/>
<text x="183" y="275">
CHAR</text>
</g>
</a>
</g>
</g>
<path d=" M 125 270 a 12 12 0 0 1 12 12 v 17 m 351 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 137 334 v 41 m 351 0 v -41"/>
<path d=" M 137 410 v 41 m 351 0 v -41"/>
<path d=" M 137 299 v 35 a 12 12 0 0 0 12 12 m 180 0 h 147 m -70 0 l -5 -5 m 0 10 l 5 -5 m 70 0 a 12 12 0 0 0 12 -12 v -35"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="180" x="149" y="299"/>
<path d=" M 149 346 h 8 m 108 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0"/>
<text class="comment" x="239" y="322">
except `\0` or `\x00`</text>
<a class="link" xlink:href="tokens.md#railroad-BYTE_ESCAPE">
<g class="nonterminal">
<rect height="22" width="108" x="157" y="335"/>
<text x="211" y="351">
BYTE_ESCAPE</text>
</g>
</a>
</g>
</g>
<path d=" M 137 375 v 35 a 12 12 0 0 0 12 12 m 327 0 h 0 a 12 12 0 0 0 12 -12 v -35"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="327" x="149" y="375"/>
<path d=" M 149 422 h 8 m 132 0 h 187 m -90 0 l -5 -5 m 0 10 l 5 -5 m 90 0"/>
<text class="comment" x="312" y="398">
except `\u{0}`, `\u{00}`, …, `\u{000000}`</text>
<a class="link" xlink:href="tokens.md#railroad-UNICODE_ESCAPE">
<g class="nonterminal">
<rect height="22" width="132" x="157" y="411"/>
<text x="223" y="427">
UNICODE_ESCAPE</text>
</g>
</a>
</g>
</g>
<path d=" M 137 451 v 0 a 12 12 0 0 0 12 12 m 140 0 h 187 m -90 0 l -5 -5 m 0 10 l 5 -5 m 90 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-STRING_CONTINUE">
<g class="nonterminal">
<rect height="22" width="140" x="149" y="452"/>
<text x="219" y="468">
STRING_CONTINUE</text>
</g>
</a>
</g>
</g>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="546" y="259"/>
<text x="560" y="275">
&quot;</text>
</g>
<g class="optional">
<path d=" M 584 270 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="608" y="259"/>
<text x="642" y="275">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 536 270 h 10"/>
<path d=" M 574 270 h 10"/>
</g>
</g>
<path d=" M 71 270 h 10"/>
</g>
<path d=" M 718 270 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 270 h 10"/>
<path d=" M 708 270 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.str-c.intro"><a class="rule-link" href="#r-lex.token.str-c.intro" title="lex.token.str-c.intro"><span>[lex<wbr>.token<wbr>.str-c<wbr>.intro]</span></a>
</div>

_C 字符串字面量_是 Unicode 字符和_转义_的序列，其前面是字符 `U+0063`（`c`）和 `U+0022`（双引号），后面跟着字符 `U+0022`。如果字符 `U+0022` 出现在字面量内部，则必须通过前置的 `U+005C`（`\`）字符进行_转义_。另外，C 字符串字面量也可以是下面定义的_原始 C 字符串字面量\_。

<div class="rule" id="r-lex.token.str-c.null"><a class="rule-link" href="#r-lex.token.str-c.null" title="lex.token.str-c.null"><span>[lex<wbr>.token<wbr>.str-c<wbr>.null]</span></a>
</div>

C 字符串会隐式地以字节 `0x00` 终止，因此 C 字符串字面量 `c""` 等价于从字节字符串字面量 `b"\x00"` 手动构造 `&CStr`。除隐式终止符之外，C 字符串中不允许出现字节 `0x00`。

<div class="rule" id="r-lex.token.str-c.linefeed"><a class="rule-link" href="#r-lex.token.str-c.linefeed" title="lex.token.str-c.linefeed"><span>[lex<wbr>.token<wbr>.str-c<wbr>.linefeed]</span></a>
</div>

C 字符串字面量中允许出现换行，换行由字符 `U+000A`（LF）表示。字符 `U+000D`（CR）不得出现在 C 字符串字面量中。当未转义的 `U+005C` 字符（`\`）紧接在换行之前时，该换行不会出现在这个 token 所表示的字符串中。详见[字符串续行转义](expressions/literal-expr.md#string-continuation-escapes)。

<div class="rule" id="r-lex.token.str-c.escape"><a class="rule-link" href="#r-lex.token.str-c.escape" title="lex.token.str-c.escape"><span>[lex<wbr>.token<wbr>.str-c<wbr>.escape]</span></a>
</div>

非原始 C 字符串字面量中还可以使用一些额外的_转义\_。转义以 `U+005C`（`\`）开头，并继续为以下形式之一：

<div class="rule" id="r-lex.token.str-c.escape-byte"><a class="rule-link" href="#r-lex.token.str-c.escape-byte" title="lex.token.str-c.escape-byte"><span>[lex<wbr>.token<wbr>.str-c<wbr>.escape-byte]</span></a>
</div>

- _字节转义_以 `U+0078`（`x`）开头，后跟恰好两个_十六进制数字_。它表示等于所给十六进制值的字节。

<div class="rule" id="r-lex.token.str-c.escape-unicode"><a class="rule-link" href="#r-lex.token.str-c.escape-unicode" title="lex.token.str-c.escape-unicode"><span>[lex<wbr>.token<wbr>.str-c<wbr>.escape-unicode]</span></a>
</div>

- _24 位码点转义_以 `U+0075`（`u`）开头，后跟由花括号 `U+007B`（`{`）和 `U+007D`（`}`）包围的至多六个_十六进制数字_。它表示等于所给十六进制值的 Unicode 码点，并编码为 UTF-8。

<div class="rule" id="r-lex.token.str-c.escape-whitespace"><a class="rule-link" href="#r-lex.token.str-c.escape-whitespace" title="lex.token.str-c.escape-whitespace"><span>[lex<wbr>.token<wbr>.str-c<wbr>.escape-whitespace]</span></a>
</div>

- \_空白转义_是字符 `U+006E`（`n`）、`U+0072`（`r`）或 `U+0074`（`t`）之一，分别表示字节值 `0x0A`（ASCII LF）、`0x0D`（ASCII CR）或 `0x09`（ASCII HT）。

<div class="rule" id="r-lex.token.str-c.escape-slash"><a class="rule-link" href="#r-lex.token.str-c.escape-slash" title="lex.token.str-c.escape-slash"><span>[lex<wbr>.token<wbr>.str-c<wbr>.escape-slash]</span></a>
</div>

- \_反斜杠转义_是字符 `U+005C`（`\`），它必须被转义才能表示其 ASCII 编码 `0x5C`。

<div class="rule" id="r-lex.token.str-c.char-unicode"><a class="rule-link" href="#r-lex.token.str-c.char-unicode" title="lex.token.str-c.char-unicode"><span>[lex<wbr>.token<wbr>.str-c<wbr>.char-unicode]</span></a>
</div>

C 字符串表示没有已定义编码的字节，但 C 字符串字面量可以包含高于 `U+007F` 的 Unicode 字符。这样的字符会被替换为该字符 UTF-8 表示中的字节。

以下 C 字符串字面量是等价的：

```rust
c"æ";        // LATIN SMALL LETTER AE (U+00E6)
c"\u{00E6}";
c"\xC3\xA6";
```

<div class="rule" id="r-lex.token.str-c.edition2021"><a class="rule-link" href="#r-lex.token.str-c.edition2021" title="lex.token.str-c.edition2021"><span>[lex<wbr>.token<wbr>.str-c<wbr>.edition2021]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2021</span> Edition differences</p>
 > 
 > C 字符串字面量在 2021 edition 或更新 edition 中被接受。在更早的 edition 中，token `c""` 会被词法分析为 `c ""`。

</div>

<div class="rule" id="r-lex.token.str-c-raw"><a class="rule-link" href="#r-lex.token.str-c-raw" title="lex.token.str-c-raw"><span>[lex<wbr>.token<wbr>.str-c-raw]</span></a>
</div>

#### 原始 C 字符串字面量

<div class="rule" id="r-lex.token.str-c-raw.syntax"><a class="rule-link" href="#r-lex.token.str-c-raw.syntax" title="lex.token.str-c-raw.syntax"><span>[lex<wbr>.token<wbr>.str-c-raw<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-RAW_C_STRING_LITERAL" onclick="show_railroad()">[RAW_C_STRING_LITERAL](tokens.md#railroad-RAW_C_STRING_LITERAL)</span> →  
      <span class="grammar-literal">cr</span> <span class="grammar-literal">"</span> ^ <span class="grammar-text">[RAW_C_STRING_CONTENT](tokens.md#grammar-RAW_C_STRING_CONTENT)</span> <span class="grammar-literal">"</span> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>  
    \| <span class="grammar-literal">cr</span> <span class="grammar-literal">\#</span><sup>n:1..=255</sup> ^ <span class="grammar-literal">"</span> <span class="grammar-text">[RAW_C_STRING_CONTENT_HASHED](tokens.md#grammar-RAW_C_STRING_CONTENT_HASHED)</span> <span class="grammar-literal">"</span> <span class="grammar-literal">\#</span><sup>n</sup> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-RAW_C_STRING_CONTENT" onclick="show_railroad()">[RAW_C_STRING_CONTENT](tokens.md#railroad-RAW_C_STRING_CONTENT)</span> → ( !<span class="grammar-literal">"</span> ~\[[CR](whitespace.md#grammar-CR) [NUL](input-format.md#grammar-NUL)\] )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-RAW_C_STRING_CONTENT_HASHED" onclick="show_railroad()">[RAW_C_STRING_CONTENT_HASHED](tokens.md#railroad-RAW_C_STRING_CONTENT_HASHED)</span> → ( !( <span class="grammar-literal">"</span> <span class="grammar-literal">\#</span><sup>n</sup> ) ~\[[CR](whitespace.md#grammar-CR) [NUL](input-format.md#grammar-NUL)\] )<sup>\*</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 1044px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RAW_C_STRING_LITERAL"><svg class="railroad" viewBox="0 0 1044 273" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RAW_C_STRING_LITERAL">
<text class="comment" x="88" y="25">
RAW_C_STRING_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 102 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 102 h 24 m 452 0 h 498 m -246 0 l -5 -5 m 0 10 l 5 -5 m 246 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="91"/>
<text x="77" y="107">
cr</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="105" y="91"/>
<text x="119" y="107">
&quot;</text>
</g>
<g class="labeledbox">
<rect height="79" width="368" x="143" y="42"/>
<path d=" M 143 102 h 8 m 352 0 h 8"/>
<text class="comment" x="208" y="65">
no backtracking</text>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RAW_C_STRING_CONTENT">
<g class="nonterminal">
<rect height="22" width="188" x="151" y="91"/>
<text x="245" y="107">
RAW_C_STRING_CONTENT</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="349" y="91"/>
<text x="363" y="107">
&quot;</text>
</g>
<g class="optional">
<path d=" M 387 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="411" y="91"/>
<text x="445" y="107">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 339 102 h 10"/>
<path d=" M 377 102 h 10"/>
</g>
</g>
<path d=" M 95 102 h 10"/>
<path d=" M 133 102 h 10"/>
</g>
<path d=" M 35 102 a 12 12 0 0 1 12 12 v 17 m 950 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 131 v 71 m 0 -32 l -5 -5 m 10 0 l -5 5 m 0 32 a 12 12 0 0 0 12 12 m 926 0 h 0 a 12 12 0 0 0 12 -12 v -71 m 0 38 l -5 5 m 10 0 l -5 -5 m 0 -38"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="203"/>
<text x="77" y="219">
cr</text>
</g>
<g class="labeledbox">
<rect height="96" width="211" x="105" y="167"/>
<path d=" M 105 214 h 8 m 195 0 h 8"/>
<text class="comment" x="167" y="190">
repeat count n</text>
<g class="repeat">
<path d=" M 113 214 h 12 m 28 0 h 155 m -74 0 l -5 -5 m 0 10 l 5 -5 m 74 0 m -12 0 a 12 12 0 0 1 12 12 v 7 a 12 12 0 0 1 -12 12 m -171 0 h 0 a 12 12 0 0 1 -12 -12 v -7 a 12 12 0 0 1 12 -12"/>
<text class="comment" x="210" y="250">
at most 254 more times</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="125" y="203"/>
<text x="139" y="219">
#</text>
</g>
</g>
</g>
<g class="labeledbox">
<rect height="110" width="659" x="326" y="131"/>
<path d=" M 326 214 h 8 m 643 0 h 8"/>
<text class="comment" x="391" y="154">
no backtracking</text>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="334" y="203"/>
<text x="348" y="219">
&quot;</text>
</g>
<a class="link" xlink:href="tokens.md#railroad-RAW_C_STRING_CONTENT_HASHED">
<g class="nonterminal">
<rect height="22" width="244" x="372" y="203"/>
<text x="494" y="219">
RAW_C_STRING_CONTENT_HASHED</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="626" y="203"/>
<text x="640" y="219">
&quot;</text>
</g>
<g class="labeledbox">
<rect height="66" width="187" x="664" y="167"/>
<path d=" M 664 214 h 8 m 28 0 h 151 m -72 0 l -5 -5 m 0 10 l 5 -5 m 72 0"/>
<text class="comment" x="757" y="190">
repeat exactly n times</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="672" y="203"/>
<text x="686" y="219">
#</text>
</g>
</g>
<g class="optional">
<path d=" M 861 214 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="885" y="203"/>
<text x="919" y="219">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 362 214 h 10"/>
<path d=" M 616 214 h 10"/>
<path d=" M 654 214 h 10"/>
<path d=" M 851 214 h 10"/>
</g>
</g>
<path d=" M 95 214 h 10"/>
<path d=" M 316 214 h 10"/>
</g>
</g>
<path d=" M 1019 102 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 102 h 10"/>
<path d=" M 1009 102 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 484px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RAW_C_STRING_CONTENT"><svg class="railroad" viewBox="0 0 484 207" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RAW_C_STRING_CONTENT">
<text class="comment" x="88" y="25">
RAW_C_STRING_CONTENT</text>
</a>
<g class="sequence">
<path d=" M 10 168 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="optional">
<path d=" M 35 168 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -102 m 0 54 l -5 5 m 10 0 l -5 -5 m 0 -54 a 12 12 0 0 1 12 -12 h 366 m -180 0 l -5 -5 m 0 10 l 5 -5 m 180 0 a 12 12 0 0 1 12 12 v 102 m 0 -48 l -5 -5 m 10 0 l -5 5 m 0 48 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 168 h 12 m 342 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 5 a 12 12 0 0 1 -12 12 m 0 0 h -342 m 174 0 l 5 -5 m 0 10 l -5 -5 m -174 0 a 12 12 0 0 1 -12 -12 v -5 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="131" x="71" y="121"/>
<path d=" M 71 168 h 8 m 28 0 h 95 m -44 0 l -5 -5 m 0 10 l 5 -5 m 44 0"/>
<text class="comment" x="136" y="144">
not followed by</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="79" y="157"/>
<text x="93" y="173">
&quot;</text>
</g>
</g>
<g class="labeledbox exceptbox">
<rect height="133" width="201" x="212" y="54"/>
<path d=" M 212 168 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="312" y="77">
⚠️ with the exception of</text>
<g class="choice">
<path d=" M 220 105 h 24 m 36 0 h 32"/>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="244" y="94"/>
<text x="262" y="110">
CR</text>
</g>
</a>
<path d=" M 220 105 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 232 126 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="input-format.md#railroad-NUL">
<g class="nonterminal">
<rect height="22" width="44" x="244" y="127"/>
<text x="266" y="143">
NUL</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="220" y="157"/>
<text x="246" y="173">
CHAR</text>
</g>
</a>
</g>
<path d=" M 202 168 h 10"/>
</g>
</g>
</g>
<path d=" M 459 168 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 168 h 10"/>
<path d=" M 449 168 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 594px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RAW_C_STRING_CONTENT_HASHED"><svg class="railroad" viewBox="0 0 594 215" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RAW_C_STRING_CONTENT_HASHED">
<text class="comment" x="113" y="25">
RAW_C_STRING_CONTENT_HASHED</text>
</a>
<g class="sequence">
<path d=" M 10 168 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="optional">
<path d=" M 35 168 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -102 m 0 54 l -5 5 m 10 0 l -5 -5 m 0 -54 a 12 12 0 0 1 12 -12 h 476 m -235 0 l -5 -5 m 0 10 l 5 -5 m 235 0 a 12 12 0 0 1 12 12 v 102 m 0 -48 l -5 -5 m 10 0 l -5 5 m 0 48 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 168 h 12 m 452 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 13 a 12 12 0 0 1 -12 12 m 0 0 h -452 m 229 0 l 5 -5 m 0 10 l -5 -5 m -229 0 a 12 12 0 0 1 -12 -12 v -13 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="labeledbox">
<rect height="110" width="241" x="71" y="85"/>
<path d=" M 71 168 h 8 m 225 0 h 8"/>
<text class="comment" x="136" y="108">
not followed by</text>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="79" y="157"/>
<text x="93" y="173">
&quot;</text>
</g>
<g class="labeledbox">
<rect height="66" width="187" x="117" y="121"/>
<path d=" M 117 168 h 8 m 28 0 h 151 m -72 0 l -5 -5 m 0 10 l 5 -5 m 72 0"/>
<text class="comment" x="210" y="144">
repeat exactly n times</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="125" y="157"/>
<text x="139" y="173">
#</text>
</g>
</g>
<path d=" M 107 168 h 10"/>
</g>
</g>
<g class="labeledbox exceptbox">
<rect height="133" width="201" x="322" y="54"/>
<path d=" M 322 168 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="422" y="77">
⚠️ with the exception of</text>
<g class="choice">
<path d=" M 330 105 h 24 m 36 0 h 32"/>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="354" y="94"/>
<text x="372" y="110">
CR</text>
</g>
</a>
<path d=" M 330 105 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 342 126 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="input-format.md#railroad-NUL">
<g class="nonterminal">
<rect height="22" width="44" x="354" y="127"/>
<text x="376" y="143">
NUL</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="330" y="157"/>
<text x="356" y="173">
CHAR</text>
</g>
</a>
</g>
<path d=" M 312 168 h 10"/>
</g>
</g>
</g>
<path d=" M 569 168 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 168 h 10"/>
<path d=" M 559 168 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.str-c-raw.intro"><a class="rule-link" href="#r-lex.token.str-c-raw.intro" title="lex.token.str-c-raw.intro"><span>[lex<wbr>.token<wbr>.str-c-raw<wbr>.intro]</span></a>
</div>

原始 C 字符串字面量不处理任何转义。它们以字符 `U+0063`（`c`）开头，后跟 `U+0072`（`r`），再后跟少于 256 个字符 `U+0023`（`#`）以及一个 `U+0022`（双引号）字符。

<div class="rule" id="r-lex.token.str-c-raw.body"><a class="rule-link" href="#r-lex.token.str-c-raw.body" title="lex.token.str-c-raw.body"><span>[lex<wbr>.token<wbr>.str-c-raw<wbr>.body]</span></a>
</div>

\_原始 C 字符串体_可以包含除 `U+0000`（NUL）和 `U+000D`（CR）之外的任意 Unicode 字符序列。它只会由另一个 `U+0022`（双引号）字符终止，且该字符后面必须跟着与起始 `U+0022`（双引号）字符之前相同数量的 `U+0023`（`#`）字符。

<div class="rule" id="r-lex.token.str-c-raw.content"><a class="rule-link" href="#r-lex.token.str-c-raw.content" title="lex.token.str-c-raw.content"><span>[lex<wbr>.token<wbr>.str-c-raw<wbr>.content]</span></a>
</div>

原始 C 字符串体中包含的所有字符都以 UTF-8 编码表示其自身。字符 `U+0022`（双引号）（除非后面跟着至少与启动该原始 C 字符串字面量时相同数量的 `U+0023`（`#`）字符）或 `U+005C`（`\`）没有任何特殊含义。

<div class="rule" id="r-lex.token.str-c-raw.edition2021"><a class="rule-link" href="#r-lex.token.str-c-raw.edition2021" title="lex.token.str-c-raw.edition2021"><span>[lex<wbr>.token<wbr>.str-c-raw<wbr>.edition2021]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2021</span> Edition differences</p>
 > 
 > 原始 C 字符串字面量在 2021 edition 或更新 edition 中被接受。在更早的 edition 中，token `cr""` 会被词法分析为 `cr ""`，而 `cr#""#` 会被词法分析为 `cr #""#`（这不符合语法）。

</div>

#### C 字符串和原始 C 字符串字面量的示例

```rust
c"foo"; cr"foo";                     // foo
c"\"foo\""; cr#""foo""#;             // "foo"

c"foo #\"# bar";
cr##"foo #"# bar"##;                 // foo #"# bar

c"\x52"; c"R"; cr"R";                // R
c"\\x52"; cr"\x52";                  // \x52
```

<div class="rule" id="r-lex.token.literal.num"><a class="rule-link" href="#r-lex.token.literal.num" title="lex.token.literal.num"><span>[lex<wbr>.token<wbr>.literal<wbr>.num]</span></a>
</div>

### 数字字面量

_数字字面量_是_整数字面量_或_浮点字面量_。用于识别这两类字面量的语法是混合在一起的。

<div class="rule" id="r-lex.token.literal.int"><a class="rule-link" href="#r-lex.token.literal.int" title="lex.token.literal.int"><span>[lex<wbr>.token<wbr>.literal<wbr>.int]</span></a>
</div>

#### 整数字面量

<div class="rule" id="r-lex.token.literal.int.syntax"><a class="rule-link" href="#r-lex.token.literal.int.syntax" title="lex.token.literal.int.syntax"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-INTEGER_LITERAL" onclick="show_railroad()">[INTEGER_LITERAL](tokens.md#railroad-INTEGER_LITERAL)</span> →  
    ( <span class="grammar-text">[BIN_LITERAL](tokens.md#grammar-BIN_LITERAL)</span> | <span class="grammar-text">[OCT_LITERAL](tokens.md#grammar-OCT_LITERAL)</span> | <span class="grammar-text">[HEX_LITERAL](tokens.md#grammar-HEX_LITERAL)</span> | <span class="grammar-text">[DEC_LITERAL](tokens.md#grammar-DEC_LITERAL)</span> )  
    ^ !<span class="grammar-text">[RESERVED_FLOAT](tokens.md#grammar-RESERVED_FLOAT)</span> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-DEC_LITERAL" onclick="show_railroad()">[DEC_LITERAL](tokens.md#railroad-DEC_LITERAL)</span> → <span class="grammar-text">[DEC_DIGIT](tokens.md#grammar-DEC_DIGIT)</span> ( <span class="grammar-text">[DEC_DIGIT](tokens.md#grammar-DEC_DIGIT)</span> | <span class="grammar-literal">\_</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-BIN_LITERAL" onclick="show_railroad()">[BIN_LITERAL](tokens.md#railroad-BIN_LITERAL)</span> → <span class="grammar-literal">0b</span> ^ <span class="grammar-literal">\_</span><sup>\*</sup> <span class="grammar-text">[BIN_DIGIT](tokens.md#grammar-BIN_DIGIT)</span> ( <span class="grammar-text">[BIN_DIGIT](tokens.md#grammar-BIN_DIGIT)</span> | <span class="grammar-literal">\_</span> )<sup>\*</sup> !\[<span class="grammar-literal">e</span> <span class="grammar-literal">E</span> <span class="grammar-literal">2</span>\-<span class="grammar-literal">9</span>\]

<span class="grammar-text grammar-production" id="grammar-OCT_LITERAL" onclick="show_railroad()">[OCT_LITERAL](tokens.md#railroad-OCT_LITERAL)</span> → <span class="grammar-literal">0o</span> ^ <span class="grammar-literal">\_</span><sup>\*</sup> <span class="grammar-text">[OCT_DIGIT](tokens.md#grammar-OCT_DIGIT)</span> ( <span class="grammar-text">[OCT_DIGIT](tokens.md#grammar-OCT_DIGIT)</span> | <span class="grammar-literal">\_</span> )<sup>\*</sup> !\[<span class="grammar-literal">e</span> <span class="grammar-literal">E</span> <span class="grammar-literal">8</span>\-<span class="grammar-literal">9</span>\]

<span class="grammar-text grammar-production" id="grammar-HEX_LITERAL" onclick="show_railroad()">[HEX_LITERAL](tokens.md#railroad-HEX_LITERAL)</span> → <span class="grammar-literal">0x</span> ^ <span class="grammar-literal">\_</span><sup>\*</sup> <span class="grammar-text">[HEX_DIGIT](tokens.md#grammar-HEX_DIGIT)</span> ( <span class="grammar-text">[HEX_DIGIT](tokens.md#grammar-HEX_DIGIT)</span> | <span class="grammar-literal">\_</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-BIN_DIGIT" onclick="show_railroad()">[BIN_DIGIT](tokens.md#railroad-BIN_DIGIT)</span> → \[<span class="grammar-literal">0</span>\-<span class="grammar-literal">1</span>\]

<span class="grammar-text grammar-production" id="grammar-OCT_DIGIT" onclick="show_railroad()">[OCT_DIGIT](tokens.md#railroad-OCT_DIGIT)</span> → \[<span class="grammar-literal">0</span>\-<span class="grammar-literal">7</span>\]

<span class="grammar-text grammar-production" id="grammar-DEC_DIGIT" onclick="show_railroad()">[DEC_DIGIT](tokens.md#railroad-DEC_DIGIT)</span> → \[<span class="grammar-literal">0</span>\-<span class="grammar-literal">9</span>\]

<span class="grammar-text grammar-production" id="grammar-HEX_DIGIT" onclick="show_railroad()">[HEX_DIGIT](tokens.md#railroad-HEX_DIGIT)</span> → \[<span class="grammar-literal">0</span>\-<span class="grammar-literal">9</span> <span class="grammar-literal">a</span>\-<span class="grammar-literal">f</span> <span class="grammar-literal">A</span>\-<span class="grammar-literal">F</span>\]

<span class="grammar-text grammar-production" id="grammar-RESERVED_FLOAT" onclick="show_railroad()">[RESERVED_FLOAT](tokens.md#railroad-RESERVED_FLOAT)</span> → <span class="grammar-literal">.</span> !( <span class="grammar-literal">.</span> | <span class="grammar-literal">\_</span> | <span class="grammar-text">[XID_Start](identifiers.md#grammar-XID_Start)</span> )

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 526px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-INTEGER_LITERAL"><svg class="railroad" viewBox="0 0 526 245" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-INTEGER_LITERAL">
<text class="comment" x="67" y="25">
INTEGER_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 125 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="choice">
<path d=" M 35 125 h 24 m 108 0 h 24"/>
<a class="link" xlink:href="tokens.md#railroad-BIN_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="114"/>
<text x="113" y="130">
BIN_LITERAL</text>
</g>
</a>
<path d=" M 35 125 a 12 12 0 0 1 12 12 v 9 m 132 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 146 v 33 m 132 0 v -33"/>
<path d=" M 47 179 v 33 m 132 0 v -33"/>
<path d=" M 47 146 v 0 a 12 12 0 0 0 12 12 m 108 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-OCT_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="147"/>
<text x="113" y="163">
OCT_LITERAL</text>
</g>
</a>
<path d=" M 47 179 v 0 a 12 12 0 0 0 12 12 m 108 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-HEX_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="180"/>
<text x="113" y="196">
HEX_LITERAL</text>
</g>
</a>
<path d=" M 47 212 v 0 a 12 12 0 0 0 12 12 m 108 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-DEC_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="213"/>
<text x="113" y="229">
DEC_LITERAL</text>
</g>
</a>
</g>
<g class="labeledbox">
<rect height="110" width="290" x="201" y="42"/>
<path d=" M 201 125 h 8 m 274 0 h 8"/>
<text class="comment" x="266" y="65">
no backtracking</text>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="148" x="209" y="78"/>
<path d=" M 209 125 h 8 m 132 0 h 8"/>
<text class="comment" x="274" y="101">
not followed by</text>
<a class="link" xlink:href="tokens.md#railroad-RESERVED_FLOAT">
<g class="nonterminal">
<rect height="22" width="132" x="217" y="114"/>
<text x="283" y="130">
RESERVED_FLOAT</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 367 125 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="391" y="114"/>
<text x="425" y="130">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 357 125 h 10"/>
</g>
</g>
<path d=" M 191 125 h 10"/>
</g>
<path d=" M 501 125 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 125 h 10"/>
<path d=" M 491 125 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 384px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-DEC_LITERAL"><svg class="railroad" viewBox="0 0 384 130" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-DEC_LITERAL">
<text class="comment" x="53" y="25">
DEC_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-DEC_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="35" y="55"/>
<text x="81" y="71">
DEC_DIGIT</text>
</g>
</a>
<g class="optional">
<path d=" M 137 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 164 m -79 0 l -5 -5 m 0 10 l 5 -5 m 79 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 161 66 h 12 m 140 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 30 a 12 12 0 0 1 -12 12 m 0 0 h -140 m 73 0 l 5 -5 m 0 10 l -5 -5 m -73 0 a 12 12 0 0 1 -12 -12 v -30 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 173 66 h 24 m 92 0 h 24"/>
<a class="link" xlink:href="tokens.md#railroad-DEC_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="197" y="55"/>
<text x="243" y="71">
DEC_DIGIT</text>
</g>
</a>
<path d=" M 173 66 a 12 12 0 0 1 12 12 v 9 m 116 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 185 87 v 0 a 12 12 0 0 0 12 12 m 28 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="197" y="88"/>
<text x="211" y="104">
_</text>
</g>
</g>
</g>
</g>
<path d=" M 127 66 h 10"/>
</g>
<path d=" M 359 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 349 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 697px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BIN_LITERAL"><svg class="railroad" viewBox="0 0 697 228" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-BIN_LITERAL">
<text class="comment" x="53" y="25">
BIN_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 125 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="114"/>
<text x="53" y="130">
0b</text>
</g>
<g class="labeledbox">
<rect height="176" width="581" x="81" y="42"/>
<path d=" M 81 125 h 8 m 565 0 h 8"/>
<text class="comment" x="146" y="65">
no backtracking</text>
<g class="sequence">
<g class="optional">
<path d=" M 89 125 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 52 m -23 0 l -5 -5 m 0 10 l 5 -5 m 23 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 113 125 h 12 m 28 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -28 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="125" y="114"/>
<text x="139" y="130">
_</text>
</g>
</g>
</g>
<a class="link" xlink:href="tokens.md#railroad-BIN_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="199" y="114"/>
<text x="245" y="130">
BIN_DIGIT</text>
</g>
</a>
<g class="optional">
<path d=" M 301 125 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 164 m -79 0 l -5 -5 m 0 10 l 5 -5 m 79 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 325 125 h 12 m 140 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 30 a 12 12 0 0 1 -12 12 m 0 0 h -140 m 73 0 l 5 -5 m 0 10 l -5 -5 m -73 0 a 12 12 0 0 1 -12 -12 v -30 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 337 125 h 24 m 92 0 h 24"/>
<a class="link" xlink:href="tokens.md#railroad-BIN_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="361" y="114"/>
<text x="407" y="130">
BIN_DIGIT</text>
</g>
</a>
<path d=" M 337 125 a 12 12 0 0 1 12 12 v 9 m 116 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 349 146 v 0 a 12 12 0 0 0 12 12 m 28 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="361" y="147"/>
<text x="375" y="163">
_</text>
</g>
</g>
</g>
</g>
<g class="labeledbox">
<rect height="132" width="131" x="523" y="78"/>
<path d=" M 523 125 h 8 m 92 0 h 31"/>
<text class="comment" x="588" y="101">
not followed by</text>
<g class="choice">
<path d=" M 531 125 h 24 m 28 0 h 40"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="555" y="114"/>
<text x="569" y="130">
e</text>
</g>
<path d=" M 531 125 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 543 146 v 33 m 68 0 v -33"/>
<path d=" M 543 146 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="555" y="147"/>
<text x="569" y="163">
E</text>
</g>
<path d=" M 543 179 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="555" y="180"/>
<text x="577" y="196">
2-9</text>
</g>
</g>
</g>
<path d=" M 189 125 h 10"/>
<path d=" M 291 125 h 10"/>
<path d=" M 513 125 h 10"/>
</g>
</g>
<path d=" M 71 125 h 10"/>
</g>
<path d=" M 672 125 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 125 h 10"/>
<path d=" M 662 125 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 697px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-OCT_LITERAL"><svg class="railroad" viewBox="0 0 697 228" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-OCT_LITERAL">
<text class="comment" x="53" y="25">
OCT_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 125 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="114"/>
<text x="53" y="130">
0o</text>
</g>
<g class="labeledbox">
<rect height="176" width="581" x="81" y="42"/>
<path d=" M 81 125 h 8 m 565 0 h 8"/>
<text class="comment" x="146" y="65">
no backtracking</text>
<g class="sequence">
<g class="optional">
<path d=" M 89 125 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 52 m -23 0 l -5 -5 m 0 10 l 5 -5 m 23 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 113 125 h 12 m 28 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -28 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="125" y="114"/>
<text x="139" y="130">
_</text>
</g>
</g>
</g>
<a class="link" xlink:href="tokens.md#railroad-OCT_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="199" y="114"/>
<text x="245" y="130">
OCT_DIGIT</text>
</g>
</a>
<g class="optional">
<path d=" M 301 125 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 164 m -79 0 l -5 -5 m 0 10 l 5 -5 m 79 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 325 125 h 12 m 140 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 30 a 12 12 0 0 1 -12 12 m 0 0 h -140 m 73 0 l 5 -5 m 0 10 l -5 -5 m -73 0 a 12 12 0 0 1 -12 -12 v -30 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 337 125 h 24 m 92 0 h 24"/>
<a class="link" xlink:href="tokens.md#railroad-OCT_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="361" y="114"/>
<text x="407" y="130">
OCT_DIGIT</text>
</g>
</a>
<path d=" M 337 125 a 12 12 0 0 1 12 12 v 9 m 116 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 349 146 v 0 a 12 12 0 0 0 12 12 m 28 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="361" y="147"/>
<text x="375" y="163">
_</text>
</g>
</g>
</g>
</g>
<g class="labeledbox">
<rect height="132" width="131" x="523" y="78"/>
<path d=" M 523 125 h 8 m 92 0 h 31"/>
<text class="comment" x="588" y="101">
not followed by</text>
<g class="choice">
<path d=" M 531 125 h 24 m 28 0 h 40"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="555" y="114"/>
<text x="569" y="130">
e</text>
</g>
<path d=" M 531 125 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 543 146 v 33 m 68 0 v -33"/>
<path d=" M 543 146 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="555" y="147"/>
<text x="569" y="163">
E</text>
</g>
<path d=" M 543 179 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="555" y="180"/>
<text x="577" y="196">
8-9</text>
</g>
</g>
</g>
<path d=" M 189 125 h 10"/>
<path d=" M 291 125 h 10"/>
<path d=" M 513 125 h 10"/>
</g>
</g>
<path d=" M 71 125 h 10"/>
</g>
<path d=" M 672 125 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 125 h 10"/>
<path d=" M 662 125 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 556px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-HEX_LITERAL"><svg class="railroad" viewBox="0 0 556 174" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-HEX_LITERAL">
<text class="comment" x="53" y="25">
HEX_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 102 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="91"/>
<text x="53" y="107">
0x</text>
</g>
<g class="labeledbox">
<rect height="122" width="440" x="81" y="42"/>
<path d=" M 81 102 h 8 m 424 0 h 8"/>
<text class="comment" x="146" y="65">
no backtracking</text>
<g class="sequence">
<g class="optional">
<path d=" M 89 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 52 m -23 0 l -5 -5 m 0 10 l 5 -5 m 23 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 113 102 h 12 m 28 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -28 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="125" y="91"/>
<text x="139" y="107">
_</text>
</g>
</g>
</g>
<a class="link" xlink:href="tokens.md#railroad-HEX_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="199" y="91"/>
<text x="245" y="107">
HEX_DIGIT</text>
</g>
</a>
<g class="optional">
<path d=" M 301 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 164 m -79 0 l -5 -5 m 0 10 l 5 -5 m 79 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 325 102 h 12 m 140 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 30 a 12 12 0 0 1 -12 12 m 0 0 h -140 m 73 0 l 5 -5 m 0 10 l -5 -5 m -73 0 a 12 12 0 0 1 -12 -12 v -30 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 337 102 h 24 m 92 0 h 24"/>
<a class="link" xlink:href="tokens.md#railroad-HEX_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="361" y="91"/>
<text x="407" y="107">
HEX_DIGIT</text>
</g>
</a>
<path d=" M 337 102 a 12 12 0 0 1 12 12 v 9 m 116 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 349 123 v 0 a 12 12 0 0 0 12 12 m 28 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="361" y="124"/>
<text x="375" y="140">
_</text>
</g>
</g>
</g>
</g>
<path d=" M 189 102 h 10"/>
<path d=" M 291 102 h 10"/>
</g>
</g>
<path d=" M 71 102 h 10"/>
</g>
<path d=" M 531 102 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 102 h 10"/>
<path d=" M 521 102 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 114px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BIN_DIGIT"><svg class="railroad" viewBox="0 0 114 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-BIN_DIGIT">
<text class="comment" x="46" y="25">
BIN_DIGIT</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 0 m 44 0 h 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="42"/>
<text x="57" y="58">
0-1</text>
</g>
</g>
<path d=" M 89 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 79 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 114px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-OCT_DIGIT"><svg class="railroad" viewBox="0 0 114 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-OCT_DIGIT">
<text class="comment" x="46" y="25">
OCT_DIGIT</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 0 m 44 0 h 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="42"/>
<text x="57" y="58">
0-7</text>
</g>
</g>
<path d=" M 89 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 79 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 114px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-DEC_DIGIT"><svg class="railroad" viewBox="0 0 114 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-DEC_DIGIT">
<text class="comment" x="46" y="25">
DEC_DIGIT</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 0 m 44 0 h 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="42"/>
<text x="57" y="58">
0-9</text>
</g>
</g>
<path d=" M 89 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 79 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 162px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-HEX_DIGIT"><svg class="railroad" viewBox="0 0 162 140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-HEX_DIGIT">
<text class="comment" x="46" y="25">
HEX_DIGIT</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 44 0 h 24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="42"/>
<text x="81" y="58">
0-9</text>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 68 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="75"/>
<text x="81" y="91">
a-f</text>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="108"/>
<text x="81" y="124">
A-F</text>
</g>
</g>
<path d=" M 137 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 127 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 264px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RESERVED_FLOAT"><svg class="railroad" viewBox="0 0 264 184" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RESERVED_FLOAT">
<text class="comment" x="64" y="25">
RESERVED_FLOAT</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="78"/>
<text x="49" y="94">
.</text>
</g>
<g class="labeledbox">
<rect height="132" width="156" x="73" y="42"/>
<path d=" M 73 89 h 8 m 140 0 h 8"/>
<text class="comment" x="138" y="65">
not followed by</text>
<g class="choice">
<path d=" M 81 89 h 24 m 28 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="105" y="78"/>
<text x="119" y="94">
.</text>
</g>
<path d=" M 81 89 a 12 12 0 0 1 12 12 v 9 m 116 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 93 110 v 33 m 116 0 v -33"/>
<path d=" M 93 110 v 0 a 12 12 0 0 0 12 12 m 28 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="105" y="111"/>
<text x="119" y="127">
_</text>
</g>
<path d=" M 93 143 v 0 a 12 12 0 0 0 12 12 m 92 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="identifiers.md#railroad-XID_Start">
<g class="nonterminal">
<rect height="22" width="92" x="105" y="144"/>
<text x="151" y="160">
XID_Start</text>
</g>
</a>
</g>
</g>
<path d=" M 63 89 h 10"/>
</g>
<path d=" M 239 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 229 89 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.literal.int.kind"><a class="rule-link" href="#r-lex.token.literal.int.kind" title="lex.token.literal.int.kind"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.kind]</span></a>
</div>

\_整数字面量_有四种形式之一：

<div class="rule" id="r-lex.token.literal.int.kind-dec"><a class="rule-link" href="#r-lex.token.literal.int.kind-dec" title="lex.token.literal.int.kind-dec"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.kind-dec]</span></a>
</div>

- \_十进制字面量_以_十进制数字_开头，并继续为_十进制数字_和_下划线_的任意混合。

<div class="rule" id="r-lex.token.literal.int.kind-hex"><a class="rule-link" href="#r-lex.token.literal.int.kind-hex" title="lex.token.literal.int.kind-hex"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.kind-hex]</span></a>
</div>

- \_十六进制字面量_以字符序列 `U+0030` `U+0078`（`0x`）开头，并继续为十六进制数字和下划线的任意混合（其中至少有一个数字）。

<div class="rule" id="r-lex.token.literal.int.kind-oct"><a class="rule-link" href="#r-lex.token.literal.int.kind-oct" title="lex.token.literal.int.kind-oct"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.kind-oct]</span></a>
</div>

- \_八进制字面量_以字符序列 `U+0030` `U+006F`（`0o`）开头，并继续为八进制数字和下划线的任意混合（其中至少有一个数字）。

<div class="rule" id="r-lex.token.literal.int.kind-bin"><a class="rule-link" href="#r-lex.token.literal.int.kind-bin" title="lex.token.literal.int.kind-bin"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.kind-bin]</span></a>
</div>

- \_二进制字面量_以字符序列 `U+0030` `U+0062`（`0b`）开头，并继续为二进制数字和下划线的任意混合（其中至少有一个数字）。

<div class="rule" id="r-lex.token.literal.int.suffix"><a class="rule-link" href="#r-lex.token.literal.int.suffix" title="lex.token.literal.int.suffix"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.suffix]</span></a>
</div>

与任何字面量一样，整数字面量后面可以（立即、无任何空格地）跟随上文所述的后缀。后缀不得以 `e` 或 `E` 开头，因为那会被解释为浮点字面量的指数。关于这些后缀的效果，见[整数字面量表达式](expressions/literal-expr.md#integer-literal-expressions)。

作为字面量表达式被接受的整数字面量示例：

```rust
# #![allow(overflowing_literals)]
123;
123i32;
123u32;
123_u32;

0xff;
0xff_u8;
0x01_f32; // integer 7986, not floating-point 1.0
0x01_e3;  // integer 483, not floating-point 1000.0

0o70;
0o70_i16;

0b1111_1111_1001_0000;
0b1111_1111_1001_0000i64;
0b________1;

0usize;

// These are too big for their type, but are accepted as literal expressions.
128_i8;
256_u8;

// This is an integer literal, accepted as a floating-point literal expression.
5f32;
```

注意，例如 `-1i8` 会被分析为两个 token：`-` 后跟 `1i8`。

不作为字面量表达式被接受的整数字面量示例：

```rust
# #[cfg(false)] {
0invalidSuffix;
123AFB43;
0b010a;
0xAB_CD_EF_GH;
0b1111_f32;
# }
```

<div class="rule" id="r-lex.token.literal.int.invalid"><a class="rule-link" href="#r-lex.token.literal.int.invalid" title="lex.token.literal.int.invalid"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.invalid]</span></a>
</div>

##### 无效整数字面量

<div class="rule" id="r-lex.token.literal.int.invalid.intro"><a class="rule-link" href="#r-lex.token.literal.int.invalid.intro" title="lex.token.literal.int.invalid.intro"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.invalid<wbr>.intro]</span></a>
</div>

某些整数字面量形式是无效的。为避免歧义，词法切分器会拒绝它们，而不是将它们拆分为多个独立 token。

```rust,compile_fail
0b0102;  // This is not `0b010` followed by `2`.
0o1279;  // This is not `0o127` followed by `9`.
0x80.0;  // This is not `0x80` followed by `.` and `0`.
0b101e;  // This is not a suffixed literal or `0b101` followed by `e`.
0b;      // This is not an integer literal or `0` followed by `b`.
0b_;     // This is not an integer literal or `0` followed by `b_`.
2em;     // This is not a suffixed literal or `2` followed by `em`.
2.0em;   // This is not a suffixed literal or `2.0` followed by `em`.
```

<div class="rule" id="r-lex.token.literal.int.out-of-range"><a class="rule-link" href="#r-lex.token.literal.int.out-of-range" title="lex.token.literal.int.out-of-range"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.out-of-range]</span></a>
</div>

无后缀二进制或八进制字面量后面若无间隔空白地跟随一个超出其进制范围的十进制数字，则是错误。

<div class="rule" id="r-lex.token.literal.int.period"><a class="rule-link" href="#r-lex.token.literal.int.period" title="lex.token.literal.int.period"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.period]</span></a>
</div>

无后缀二进制、八进制或十六进制字面量后面若无间隔空白地跟随一个句点字符，则是错误（句点后可跟随的内容受到与浮点字面量中相同的限制）。

<div class="rule" id="r-lex.token.literal.int.exp"><a class="rule-link" href="#r-lex.token.literal.int.exp" title="lex.token.literal.int.exp"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.exp]</span></a>
</div>

无后缀二进制或八进制字面量后面若无间隔空白地跟随字符 `e` 或 `E`，则是错误。

<div class="rule" id="r-lex.token.literal.int.empty-with-radix"><a class="rule-link" href="#r-lex.token.literal.int.empty-with-radix" title="lex.token.literal.int.empty-with-radix"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.empty-with-radix]</span></a>
</div>

基数前缀后面在任意可选的前导下划线之后，若未跟随至少一个对其进制有效的数字，则是错误。

<div class="rule" id="r-lex.token.literal.int.tuple-field"><a class="rule-link" href="#r-lex.token.literal.int.tuple-field" title="lex.token.literal.int.tuple-field"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.tuple-field]</span></a>
</div>

#### 元组索引

<div class="rule" id="r-lex.token.literal.int.tuple-field.syntax"><a class="rule-link" href="#r-lex.token.literal.int.tuple-field.syntax" title="lex.token.literal.int.tuple-field.syntax"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.tuple-field<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-TUPLE_INDEX" onclick="show_railroad()">[TUPLE_INDEX](tokens.md#railroad-TUPLE_INDEX)</span> → <span class="grammar-text">[DEC_LITERAL](tokens.md#grammar-DEC_LITERAL)</span> | <span class="grammar-text">[BIN_LITERAL](tokens.md#grammar-BIN_LITERAL)</span> | <span class="grammar-text">[OCT_LITERAL](tokens.md#grammar-OCT_LITERAL)</span> | <span class="grammar-text">[HEX_LITERAL](tokens.md#grammar-HEX_LITERAL)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 226px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TUPLE_INDEX"><svg class="railroad" viewBox="0 0 226 173" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-TUPLE_INDEX">
<text class="comment" x="53" y="25">
TUPLE_INDEX</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 108 0 h 24"/>
<a class="link" xlink:href="tokens.md#railroad-DEC_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="42"/>
<text x="113" y="58">
DEC_LITERAL</text>
</g>
</a>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 132 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 132 0 v -33"/>
<path d=" M 47 107 v 33 m 132 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 108 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-BIN_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="75"/>
<text x="113" y="91">
BIN_LITERAL</text>
</g>
</a>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 108 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-OCT_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="108"/>
<text x="113" y="124">
OCT_LITERAL</text>
</g>
</a>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 108 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-HEX_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="141"/>
<text x="113" y="157">
HEX_LITERAL</text>
</g>
</a>
</g>
<path d=" M 201 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 191 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.literal.int.tuple-field.intro"><a class="rule-link" href="#r-lex.token.literal.int.tuple-field.intro" title="lex.token.literal.int.tuple-field.intro"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.tuple-field<wbr>.intro]</span></a>
</div>

元组索引用于引用[元组](types/tuple.md)、[元组结构体](items/structs.md)和[元组枚举变体](items/enumerations.md)的字段。

<div class="rule" id="r-lex.token.literal.int.tuple-field.eq"><a class="rule-link" href="#r-lex.token.literal.int.tuple-field.eq" title="lex.token.literal.int.tuple-field.eq"><span>[lex<wbr>.token<wbr>.literal<wbr>.int<wbr>.tuple-field<wbr>.eq]</span></a>
</div>

元组索引会直接与字面量 token 进行比较。元组索引从 `0` 开始，之后每个索引都按十进制值递增 `1`。因此，只有十进制值会匹配，并且该值不得带有任何额外的 `0` 前缀字符。

元组索引不得包含任何后缀（例如 `usize`）。

```rust,compile_fail
let example = ("dog", "cat", "horse");
let dog = example.0;
let cat = example.1;
// The following examples are invalid.
let cat = example.01;  // ERROR no field named `01`
let horse = example.0b10;  // ERROR no field named `0b10`
let unicorn = example.0usize; // ERROR suffixes on a tuple index are invalid
let underscore = example.0_0; // ERROR no field `0_0` on type `(&str, &str, &str)`
```

<div class="rule" id="r-lex.token.literal.float"><a class="rule-link" href="#r-lex.token.literal.float" title="lex.token.literal.float"><span>[lex<wbr>.token<wbr>.literal<wbr>.float]</span></a>
</div>

#### 浮点字面量

<div class="rule" id="r-lex.token.literal.float.syntax"><a class="rule-link" href="#r-lex.token.literal.float.syntax" title="lex.token.literal.float.syntax"><span>[lex<wbr>.token<wbr>.literal<wbr>.float<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-FLOAT_LITERAL" onclick="show_railroad()">[FLOAT_LITERAL](tokens.md#railroad-FLOAT_LITERAL)</span> →  
      <span class="grammar-text">[DEC_LITERAL](tokens.md#grammar-DEC_LITERAL)</span> ( <span class="grammar-literal">.</span> <span class="grammar-text">[DEC_LITERAL](tokens.md#grammar-DEC_LITERAL)</span> )<sup>?</sup> <span class="grammar-text">[FLOAT_EXPONENT](tokens.md#grammar-FLOAT_EXPONENT)</span> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>  
    \| <span class="grammar-text">[DEC_LITERAL](tokens.md#grammar-DEC_LITERAL)</span> <span class="grammar-literal">.</span> <span class="grammar-text">[DEC_LITERAL](tokens.md#grammar-DEC_LITERAL)</span> <span class="grammar-text">[SUFFIX](tokens.md#grammar-SUFFIX)</span><sup>?</sup>  
    \| <span class="grammar-text">[DEC_LITERAL](tokens.md#grammar-DEC_LITERAL)</span> <span class="grammar-literal">.</span> !( <span class="grammar-literal">.</span> | <span class="grammar-literal">\_</span> | <span class="grammar-text">[XID_Start](identifiers.md#grammar-XID_Start)</span> )

<span class="grammar-text grammar-production" id="grammar-FLOAT_EXPONENT" onclick="show_railroad()">[FLOAT_EXPONENT](tokens.md#railroad-FLOAT_EXPONENT)</span> →  
    ( <span class="grammar-literal">e</span> | <span class="grammar-literal">E</span> ) ^ ( <span class="grammar-literal">+</span> | <span class="grammar-literal">\-</span> )<sup>?</sup> <span class="grammar-literal">\_</span><sup>\*</sup> <span class="grammar-text">[DEC_DIGIT](tokens.md#grammar-DEC_DIGIT)</span> ( <span class="grammar-text">[DEC_DIGIT](tokens.md#grammar-DEC_DIGIT)</span> | <span class="grammar-literal">\_</span> )<sup>\*</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 698px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-FLOAT_LITERAL"><svg class="railroad" viewBox="0 0 698 274" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-FLOAT_LITERAL">
<text class="comment" x="60" y="25">
FLOAT_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 66 h 24 m 580 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-DEC_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="55"/>
<text x="113" y="71">
DEC_LITERAL</text>
</g>
</a>
<g class="optional">
<path d=" M 177 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 146 m -70 0 l -5 -5 m 0 10 l 5 -5 m 70 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="201" y="55"/>
<text x="215" y="71">
.</text>
</g>
<a class="link" xlink:href="tokens.md#railroad-DEC_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="239" y="55"/>
<text x="293" y="71">
DEC_LITERAL</text>
</g>
</a>
<path d=" M 229 66 h 10"/>
</g>
</g>
<a class="link" xlink:href="tokens.md#railroad-FLOAT_EXPONENT">
<g class="nonterminal">
<rect height="22" width="132" x="381" y="55"/>
<text x="447" y="71">
FLOAT_EXPONENT</text>
</g>
</a>
<g class="optional">
<path d=" M 523 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="547" y="55"/>
<text x="581" y="71">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 167 66 h 10"/>
<path d=" M 371 66 h 10"/>
<path d=" M 513 66 h 10"/>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 9 m 604 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 99 v 33 m 604 0 v -33"/>
<path d=" M 47 87 v 12 a 12 12 0 0 0 12 12 m 390 0 h 190 m -92 0 l -5 -5 m 0 10 l 5 -5 m 92 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-DEC_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="100"/>
<text x="113" y="116">
DEC_LITERAL</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="177" y="100"/>
<text x="191" y="116">
.</text>
</g>
<a class="link" xlink:href="tokens.md#railroad-DEC_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="215" y="100"/>
<text x="269" y="116">
DEC_LITERAL</text>
</g>
</a>
<g class="optional">
<path d=" M 333 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tokens.md#railroad-SUFFIX">
<g class="nonterminal">
<rect height="22" width="68" x="357" y="100"/>
<text x="391" y="116">
SUFFIX</text>
</g>
</a>
</g>
<path d=" M 167 111 h 10"/>
<path d=" M 205 111 h 10"/>
<path d=" M 323 111 h 10"/>
</g>
<path d=" M 47 132 v 35 a 12 12 0 0 0 12 12 m 312 0 h 268 m -131 0 l -5 -5 m 0 10 l 5 -5 m 131 0 a 12 12 0 0 0 12 -12 v -35"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-DEC_LITERAL">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="168"/>
<text x="113" y="184">
DEC_LITERAL</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="177" y="168"/>
<text x="191" y="184">
.</text>
</g>
<g class="labeledbox">
<rect height="132" width="156" x="215" y="132"/>
<path d=" M 215 179 h 8 m 140 0 h 8"/>
<text class="comment" x="280" y="155">
not followed by</text>
<g class="choice">
<path d=" M 223 179 h 24 m 28 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="247" y="168"/>
<text x="261" y="184">
.</text>
</g>
<path d=" M 223 179 a 12 12 0 0 1 12 12 v 9 m 116 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 235 200 v 33 m 116 0 v -33"/>
<path d=" M 235 200 v 0 a 12 12 0 0 0 12 12 m 28 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="247" y="201"/>
<text x="261" y="217">
_</text>
</g>
<path d=" M 235 233 v 0 a 12 12 0 0 0 12 12 m 92 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="identifiers.md#railroad-XID_Start">
<g class="nonterminal">
<rect height="22" width="92" x="247" y="234"/>
<text x="293" y="250">
XID_Start</text>
</g>
</a>
</g>
</g>
<path d=" M 167 179 h 10"/>
<path d=" M 205 179 h 10"/>
</g>
</g>
<path d=" M 673 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 663 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 730px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-FLOAT_EXPONENT"><svg class="railroad" viewBox="0 0 730 174" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-FLOAT_EXPONENT">
<text class="comment" x="64" y="25">
FLOAT_EXPONENT</text>
</a>
<g class="sequence">
<path d=" M 10 102 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="choice">
<path d=" M 35 102 h 24 m 28 0 h 24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="91"/>
<text x="73" y="107">
e</text>
</g>
<path d=" M 35 102 a 12 12 0 0 1 12 12 v 9 m 52 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 123 v 0 a 12 12 0 0 0 12 12 m 28 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="124"/>
<text x="73" y="140">
E</text>
</g>
</g>
<g class="labeledbox">
<rect height="122" width="574" x="121" y="42"/>
<path d=" M 121 102 h 8 m 558 0 h 8"/>
<text class="comment" x="186" y="65">
no backtracking</text>
<g class="sequence">
<g class="optional">
<path d=" M 129 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 76 m -35 0 l -5 -5 m 0 10 l 5 -5 m 35 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="choice">
<path d=" M 153 102 h 24 m 28 0 h 24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="177" y="91"/>
<text x="191" y="107">
+</text>
</g>
<path d=" M 153 102 a 12 12 0 0 1 12 12 v 9 m 52 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 165 123 v 0 a 12 12 0 0 0 12 12 m 28 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="177" y="124"/>
<text x="191" y="140">
-</text>
</g>
</g>
</g>
<g class="optional">
<path d=" M 263 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 52 m -23 0 l -5 -5 m 0 10 l 5 -5 m 23 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 287 102 h 12 m 28 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -28 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="299" y="91"/>
<text x="313" y="107">
_</text>
</g>
</g>
</g>
<a class="link" xlink:href="tokens.md#railroad-DEC_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="373" y="91"/>
<text x="419" y="107">
DEC_DIGIT</text>
</g>
</a>
<g class="optional">
<path d=" M 475 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 164 m -79 0 l -5 -5 m 0 10 l 5 -5 m 79 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 499 102 h 12 m 140 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 30 a 12 12 0 0 1 -12 12 m 0 0 h -140 m 73 0 l 5 -5 m 0 10 l -5 -5 m -73 0 a 12 12 0 0 1 -12 -12 v -30 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 511 102 h 24 m 92 0 h 24"/>
<a class="link" xlink:href="tokens.md#railroad-DEC_DIGIT">
<g class="nonterminal">
<rect height="22" width="92" x="535" y="91"/>
<text x="581" y="107">
DEC_DIGIT</text>
</g>
</a>
<path d=" M 511 102 a 12 12 0 0 1 12 12 v 9 m 116 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 523 123 v 0 a 12 12 0 0 0 12 12 m 28 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="535" y="124"/>
<text x="549" y="140">
_</text>
</g>
</g>
</g>
</g>
<path d=" M 253 102 h 10"/>
<path d=" M 363 102 h 10"/>
<path d=" M 465 102 h 10"/>
</g>
</g>
<path d=" M 111 102 h 10"/>
</g>
<path d=" M 705 102 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 102 h 10"/>
<path d=" M 695 102 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.literal.float.form"><a class="rule-link" href="#r-lex.token.literal.float.form" title="lex.token.literal.float.form"><span>[lex<wbr>.token<wbr>.literal<wbr>.float<wbr>.form]</span></a>
</div>

\_浮点字面量_有两种形式之一：

- _十进制字面量_后跟一个句点字符 `U+002E`（`.`）。其后可以可选地跟随另一个十进制字面量，并带有可选的_指数_。
- 单个_十进制字面量_后跟一个_指数\_。

<div class="rule" id="r-lex.token.literal.float.suffix"><a class="rule-link" href="#r-lex.token.literal.float.suffix" title="lex.token.literal.float.suffix"><span>[lex<wbr>.token<wbr>.literal<wbr>.float<wbr>.suffix]</span></a>
</div>

与整数字面量一样，浮点字面量可以跟随后缀，只要后缀前的部分不以 `U+002E`（`.`）结尾。如果字面量不包含指数，则后缀不得以 `e` 或 `E` 开头。关于这些后缀的效果，见[浮点字面量表达式](expressions/literal-expr.md#floating-point-literal-expressions)。

作为字面量表达式被接受的浮点字面量示例：

```rust
123.0f64;
0.1f64;
0.1f32;
12E+99_f64;
let x: f64 = 2.;
```

最后一个示例不同，因为不能对以句点结尾的浮点字面量使用后缀语法。`2.f64` 会尝试在 `2` 上调用名为 `f64` 的方法。

注意，例如 `-1.0` 会被分析为两个 token：`-` 后跟 `1.0`。

不作为字面量表达式被接受的浮点字面量示例：

```rust
# #[cfg(false)] {
2.0f80;
2e5f80;
2e5e6;
2.0e5e6;
1.3e10u64;
# }
```

<div class="rule" id="r-lex.token.literal.float.invalid-exponent"><a class="rule-link" href="#r-lex.token.literal.float.invalid-exponent" title="lex.token.literal.float.invalid-exponent"><span>[lex<wbr>.token<wbr>.literal<wbr>.float<wbr>.invalid-exponent]</span></a>
</div>

浮点字面量具有不含数字的指数是错误。

```rust,compile_fail
2e;   // This is not a floating-point literal or `2` followed by `e`.
2.0e; // This is not a floating-point literal or `2.0` followed by `e`.
```

<div class="rule" id="r-lex.token.life"><a class="rule-link" href="#r-lex.token.life" title="lex.token.life"><span>[lex<wbr>.token<wbr>.life]</span></a>
</div>

## 生命周期和循环标签

<div class="rule" id="r-lex.token.life.syntax"><a class="rule-link" href="#r-lex.token.life.syntax" title="lex.token.life.syntax"><span>[lex<wbr>.token<wbr>.life<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-LIFETIME_TOKEN" onclick="show_railroad()">[LIFETIME_TOKEN](tokens.md#railroad-LIFETIME_TOKEN)</span> →  
      <span class="grammar-text">[RAW_LIFETIME](tokens.md#grammar-RAW_LIFETIME)</span>  
    \| <span class="grammar-literal">'</span> <span class="grammar-text">[IDENTIFIER_OR_KEYWORD](identifiers.md#grammar-IDENTIFIER_OR_KEYWORD)</span> !<span class="grammar-literal">'</span>

<span class="grammar-text grammar-production" id="grammar-LIFETIME_OR_LABEL" onclick="show_railroad()">[LIFETIME_OR_LABEL](tokens.md#railroad-LIFETIME_OR_LABEL)</span> →  
      <span class="grammar-text">[RAW_LIFETIME](tokens.md#grammar-RAW_LIFETIME)</span>  
    \| <span class="grammar-literal">'</span> <span class="grammar-text">[NON_KEYWORD_IDENTIFIER](identifiers.md#grammar-NON_KEYWORD_IDENTIFIER)</span> !<span class="grammar-literal">'</span>

<span class="grammar-text grammar-production" id="grammar-RAW_LIFETIME" onclick="show_railroad()">[RAW_LIFETIME](tokens.md#railroad-RAW_LIFETIME)</span> →  
    <span class="grammar-literal">'r#</span> ^ <span class="grammar-text">[IDENTIFIER_OR_KEYWORD](identifiers.md#grammar-IDENTIFIER_OR_KEYWORD)</span> !<span class="grammar-literal">'</span>

<span class="grammar-text grammar-production" id="grammar-RESERVED_RAW_LIFETIME" onclick="show_railroad()">[RESERVED_RAW_LIFETIME](tokens.md#railroad-RESERVED_RAW_LIFETIME)</span> → <span class="grammar-literal">'r#</span> ( <span class="grammar-literal">\_</span> | <span class="grammar-literal">crate</span> | <span class="grammar-literal">self</span> | <span class="grammar-literal">Self</span> | <span class="grammar-literal">super</span> ) !( <span class="grammar-literal">'</span> | <span class="grammar-text">[XID_Continue](identifiers.md#grammar-XID_Continue)</span> )

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 493px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LIFETIME_TOKEN"><svg class="railroad" viewBox="0 0 493 150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-LIFETIME_TOKEN">
<text class="comment" x="64" y="25">
LIFETIME_TOKEN</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 116 0 h 283 m -138 0 l -5 -5 m 0 10 l 5 -5 m 138 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RAW_LIFETIME">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="42"/>
<text x="117" y="58">
RAW_LIFETIME</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 399 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 35 a 12 12 0 0 0 12 12 m 375 0 h 0 a 12 12 0 0 0 12 -12 v -35"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="110"/>
<text x="73" y="126">
&#x27;</text>
</g>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER_OR_KEYWORD">
<g class="nonterminal">
<rect height="22" width="196" x="97" y="110"/>
<text x="195" y="126">
IDENTIFIER_OR_KEYWORD</text>
</g>
</a>
<g class="labeledbox">
<rect height="66" width="131" x="303" y="74"/>
<path d=" M 303 121 h 8 m 28 0 h 95 m -44 0 l -5 -5 m 0 10 l 5 -5 m 44 0"/>
<text class="comment" x="368" y="97">
not followed by</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="311" y="110"/>
<text x="325" y="126">
&#x27;</text>
</g>
</g>
<path d=" M 87 121 h 10"/>
<path d=" M 293 121 h 10"/>
</g>
</g>
<path d=" M 468 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 458 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 501px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LIFETIME_OR_LABEL"><svg class="railroad" viewBox="0 0 501 150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-LIFETIME_OR_LABEL">
<text class="comment" x="74" y="25">
LIFETIME_OR_LABEL</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 116 0 h 291 m -142 0 l -5 -5 m 0 10 l 5 -5 m 142 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RAW_LIFETIME">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="42"/>
<text x="117" y="58">
RAW_LIFETIME</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 407 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 35 a 12 12 0 0 0 12 12 m 383 0 h 0 a 12 12 0 0 0 12 -12 v -35"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="110"/>
<text x="73" y="126">
&#x27;</text>
</g>
<a class="link" xlink:href="identifiers.md#railroad-NON_KEYWORD_IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="204" x="97" y="110"/>
<text x="199" y="126">
NON_KEYWORD_IDENTIFIER</text>
</g>
</a>
<g class="labeledbox">
<rect height="66" width="131" x="311" y="74"/>
<path d=" M 311 121 h 8 m 28 0 h 95 m -44 0 l -5 -5 m 0 10 l 5 -5 m 44 0"/>
<text class="comment" x="376" y="97">
not followed by</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="319" y="110"/>
<text x="333" y="126">
&#x27;</text>
</g>
</g>
<path d=" M 87 121 h 10"/>
<path d=" M 301 121 h 10"/>
</g>
</g>
<path d=" M 476 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 466 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 477px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RAW_LIFETIME"><svg class="railroad" viewBox="0 0 477 162" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RAW_LIFETIME">
<text class="comment" x="57" y="25">
RAW_LIFETIME</text>
</a>
<g class="sequence">
<path d=" M 10 125 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="114"/>
<text x="57" y="130">
&#x27;r#</text>
</g>
<g class="labeledbox">
<rect height="110" width="353" x="89" y="42"/>
<path d=" M 89 125 h 8 m 337 0 h 8"/>
<text class="comment" x="154" y="65">
no backtracking</text>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER_OR_KEYWORD">
<g class="nonterminal">
<rect height="22" width="196" x="97" y="114"/>
<text x="195" y="130">
IDENTIFIER_OR_KEYWORD</text>
</g>
</a>
<g class="labeledbox">
<rect height="66" width="131" x="303" y="78"/>
<path d=" M 303 125 h 8 m 28 0 h 95 m -44 0 l -5 -5 m 0 10 l 5 -5 m 44 0"/>
<text class="comment" x="368" y="101">
not followed by</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="311" y="114"/>
<text x="325" y="130">
&#x27;</text>
</g>
</g>
<path d=" M 293 125 h 10"/>
</g>
</g>
<path d=" M 79 125 h 10"/>
</g>
<path d=" M 452 125 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 125 h 10"/>
<path d=" M 442 125 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 422px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RESERVED_RAW_LIFETIME"><svg class="railroad" viewBox="0 0 422 242" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RESERVED_RAW_LIFETIME">
<text class="comment" x="92" y="25">
RESERVED_RAW_LIFETIME</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="78"/>
<text x="57" y="94">
&#x27;r#</text>
</g>
<g class="choice">
<path d=" M 89 89 h 24 m 28 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="113" y="78"/>
<text x="127" y="94">
_</text>
</g>
<path d=" M 89 89 a 12 12 0 0 1 12 12 v 9 m 84 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 101 110 v 33 m 84 0 v -33"/>
<path d=" M 101 143 v 33 m 84 0 v -33"/>
<path d=" M 101 176 v 33 m 84 0 v -33"/>
<path d=" M 101 110 v 0 a 12 12 0 0 0 12 12 m 60 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="113" y="111"/>
<text x="143" y="127">
crate</text>
</g>
<path d=" M 101 143 v 0 a 12 12 0 0 0 12 12 m 52 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="113" y="144"/>
<text x="139" y="160">
self</text>
</g>
<path d=" M 101 176 v 0 a 12 12 0 0 0 12 12 m 52 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="113" y="177"/>
<text x="139" y="193">
Self</text>
</g>
<path d=" M 101 209 v 0 a 12 12 0 0 0 12 12 m 60 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="113" y="210"/>
<text x="143" y="226">
super</text>
</g>
</g>
<g class="labeledbox">
<rect height="99" width="180" x="207" y="42"/>
<path d=" M 207 89 h 8 m 164 0 h 8"/>
<text class="comment" x="272" y="65">
not followed by</text>
<g class="choice">
<path d=" M 215 89 h 24 m 28 0 h 112 m -53 0 l -5 -5 m 0 10 l 5 -5 m 53 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="239" y="78"/>
<text x="253" y="94">
&#x27;</text>
</g>
<path d=" M 215 89 a 12 12 0 0 1 12 12 v 9 m 140 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 227 110 v 0 a 12 12 0 0 0 12 12 m 116 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="identifiers.md#railroad-XID_Continue">
<g class="nonterminal">
<rect height="22" width="116" x="239" y="111"/>
<text x="297" y="127">
XID_Continue</text>
</g>
</a>
</g>
</g>
<path d=" M 79 89 h 10"/>
<path d=" M 197 89 h 10"/>
</g>
<path d=" M 397 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 387 89 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.life.intro"><a class="rule-link" href="#r-lex.token.life.intro" title="lex.token.life.intro"><span>[lex<wbr>.token<wbr>.life<wbr>.intro]</span></a>
</div>

生命周期参数和[循环标签](expressions/loop-expr.md#loop-labels)使用 LIFETIME_OR_LABEL token。任何 LIFETIME_TOKEN 都会被词法分析器接受，例如可以在宏中使用。

<div class="rule" id="r-lex.token.life.raw.intro"><a class="rule-link" href="#r-lex.token.life.raw.intro" title="lex.token.life.raw.intro"><span>[lex<wbr>.token<wbr>.life<wbr>.raw<wbr>.intro]</span></a>
</div>

原始生命周期类似于普通生命周期，但其标识符带有 `r#` 前缀。（注意，`r#` 前缀不作为实际生命周期的一部分。）

<div class="rule" id="r-lex.token.life.raw.allowed"><a class="rule-link" href="#r-lex.token.life.raw.allowed" title="lex.token.life.raw.allowed"><span>[lex<wbr>.token<wbr>.life<wbr>.raw<wbr>.allowed]</span></a>
</div>

不同于普通生命周期，原始生命周期可以是任何严格关键字或保留关键字，但上面为 `RAW_LIFETIME` 列出的那些关键字除外。

<div class="rule" id="r-lex.token.life.raw.reserved"><a class="rule-link" href="#r-lex.token.life.raw.reserved" title="lex.token.life.raw.reserved"><span>[lex<wbr>.token<wbr>.life<wbr>.raw<wbr>.reserved]</span></a>
</div>

使用 [RESERVED_RAW_LIFETIME](tokens.md#grammar-RESERVED_RAW_LIFETIME) token 是错误。

<div class="rule" id="r-lex.token.life.raw.edition2021"><a class="rule-link" href="#r-lex.token.life.raw.edition2021" title="lex.token.life.raw.edition2021"><span>[lex<wbr>.token<wbr>.life<wbr>.raw<wbr>.edition2021]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2021</span> Edition differences</p>
 > 
 > 原始生命周期在 2021 edition 或更新 edition 中被接受。在更早的 edition 中，token `'r#lt` 会被词法分析为 `'r # lt`。

</div>

<div class="rule" id="r-lex.token.punct"><a class="rule-link" href="#r-lex.token.punct" title="lex.token.punct"><span>[lex<wbr>.token<wbr>.punct]</span></a>
</div>

## 标点

<div class="rule" id="r-lex.token.punct.intro"><a class="rule-link" href="#r-lex.token.punct.intro" title="lex.token.punct.intro"><span>[lex<wbr>.token<wbr>.punct<wbr>.intro]</span></a>
</div>

标点 token 用作运算符、分隔符以及语法中的其他部分。

<div class="rule" id="r-lex.token.punct.syntax"><a class="rule-link" href="#r-lex.token.punct.syntax" title="lex.token.punct.syntax"><span>[lex<wbr>.token<wbr>.punct<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-PUNCTUATION" onclick="show_railroad()">[PUNCTUATION](tokens.md#railroad-PUNCTUATION)</span> →  
      <span class="grammar-literal">...</span>  
    \| <span class="grammar-literal">..=</span>  
    \| <span class="grammar-literal">\<\<=</span>  
    \| <span class="grammar-literal">\>>=</span>  
    \| <span class="grammar-literal">!=</span>  
    \| <span class="grammar-literal">%=</span>  
    \| <span class="grammar-literal">&&</span>  
    \| <span class="grammar-literal">&=</span>  
    \| <span class="grammar-literal">\*=</span>  
    \| <span class="grammar-literal">+=</span>  
    \| <span class="grammar-literal">\-=</span>  
    \| <span class="grammar-literal">\-></span>  
    \| <span class="grammar-literal">..</span>  
    \| <span class="grammar-literal">/=</span>  
    \| <span class="grammar-literal">::</span>  
    \| <span class="grammar-literal">\<\-</span>  
    \| <span class="grammar-literal">\<\<</span>  
    \| <span class="grammar-literal">\<=</span>  
    \| <span class="grammar-literal">==</span>  
    \| <span class="grammar-literal">=></span>  
    \| <span class="grammar-literal">\>=</span>  
    \| <span class="grammar-literal">\>></span>  
    \| <span class="grammar-literal">^=</span>  
    \| <span class="grammar-literal">\|=</span>  
    \| <span class="grammar-literal">\||</span>  
    \| <span class="grammar-literal">!</span>  
    \| <span class="grammar-literal">\#</span>  
    \| <span class="grammar-literal">$</span>  
    \| <span class="grammar-literal">%</span>  
    \| <span class="grammar-literal">&</span>  
    \| <span class="grammar-literal">(</span>  
    \| <span class="grammar-literal">)</span>  
    \| <span class="grammar-literal">\*</span>  
    \| <span class="grammar-literal">+</span>  
    \| <span class="grammar-literal">,</span>  
    \| <span class="grammar-literal">\-</span>  
    \| <span class="grammar-literal">.</span>  
    \| <span class="grammar-literal">/</span>  
    \| <span class="grammar-literal">:</span>  
    \| <span class="grammar-literal">;</span>  
    \| <span class="grammar-literal">\<</span>  
    \| <span class="grammar-literal">=</span>  
    \| <span class="grammar-literal">\></span>  
    \| <span class="grammar-literal">?</span>  
    \| <span class="grammar-literal">@</span>  
    \| <span class="grammar-literal">\[</span>  
    \| <span class="grammar-literal">\]</span>  
    \| <span class="grammar-literal">^</span>  
    \| <span class="grammar-literal">{</span>  
    \| <span class="grammar-literal">\|</span>  
    \| <span class="grammar-literal">}</span>  
    \| <span class="grammar-literal">~</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 162px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-PUNCTUATION"><svg class="railroad" viewBox="0 0 162 1757" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-PUNCTUATION">
<text class="comment" x="53" y="25">
PUNCTUATION</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 44 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="42"/>
<text x="81" y="58">
...</text>
</g>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 68 0 v -33"/>
<path d=" M 47 107 v 33 m 68 0 v -33"/>
<path d=" M 47 140 v 33 m 68 0 v -33"/>
<path d=" M 47 173 v 33 m 68 0 v -33"/>
<path d=" M 47 206 v 33 m 68 0 v -33"/>
<path d=" M 47 239 v 33 m 68 0 v -33"/>
<path d=" M 47 272 v 33 m 68 0 v -33"/>
<path d=" M 47 305 v 33 m 68 0 v -33"/>
<path d=" M 47 338 v 33 m 68 0 v -33"/>
<path d=" M 47 371 v 33 m 68 0 v -33"/>
<path d=" M 47 404 v 33 m 68 0 v -33"/>
<path d=" M 47 437 v 33 m 68 0 v -33"/>
<path d=" M 47 470 v 33 m 68 0 v -33"/>
<path d=" M 47 503 v 33 m 68 0 v -33"/>
<path d=" M 47 536 v 33 m 68 0 v -33"/>
<path d=" M 47 569 v 33 m 68 0 v -33"/>
<path d=" M 47 602 v 33 m 68 0 v -33"/>
<path d=" M 47 635 v 33 m 68 0 v -33"/>
<path d=" M 47 668 v 33 m 68 0 v -33"/>
<path d=" M 47 701 v 33 m 68 0 v -33"/>
<path d=" M 47 734 v 33 m 68 0 v -33"/>
<path d=" M 47 767 v 33 m 68 0 v -33"/>
<path d=" M 47 800 v 33 m 68 0 v -33"/>
<path d=" M 47 833 v 33 m 68 0 v -33"/>
<path d=" M 47 866 v 33 m 68 0 v -33"/>
<path d=" M 47 899 v 33 m 68 0 v -33"/>
<path d=" M 47 932 v 33 m 68 0 v -33"/>
<path d=" M 47 965 v 33 m 68 0 v -33"/>
<path d=" M 47 998 v 33 m 68 0 v -33"/>
<path d=" M 47 1031 v 33 m 68 0 v -33"/>
<path d=" M 47 1064 v 33 m 68 0 v -33"/>
<path d=" M 47 1097 v 33 m 68 0 v -33"/>
<path d=" M 47 1130 v 33 m 68 0 v -33"/>
<path d=" M 47 1163 v 33 m 68 0 v -33"/>
<path d=" M 47 1196 v 33 m 68 0 v -33"/>
<path d=" M 47 1229 v 33 m 68 0 v -33"/>
<path d=" M 47 1262 v 33 m 68 0 v -33"/>
<path d=" M 47 1295 v 33 m 68 0 v -33"/>
<path d=" M 47 1328 v 33 m 68 0 v -33"/>
<path d=" M 47 1361 v 33 m 68 0 v -33"/>
<path d=" M 47 1394 v 33 m 68 0 v -33"/>
<path d=" M 47 1427 v 33 m 68 0 v -33"/>
<path d=" M 47 1460 v 33 m 68 0 v -33"/>
<path d=" M 47 1493 v 33 m 68 0 v -33"/>
<path d=" M 47 1526 v 33 m 68 0 v -33"/>
<path d=" M 47 1559 v 33 m 68 0 v -33"/>
<path d=" M 47 1592 v 33 m 68 0 v -33"/>
<path d=" M 47 1625 v 33 m 68 0 v -33"/>
<path d=" M 47 1658 v 33 m 68 0 v -33"/>
<path d=" M 47 1691 v 33 m 68 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="75"/>
<text x="81" y="91">
..=</text>
</g>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="108"/>
<text x="81" y="124">
&lt;&lt;=</text>
</g>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="141"/>
<text x="81" y="157">
&gt;&gt;=</text>
</g>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="174"/>
<text x="77" y="190">
!=</text>
</g>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="207"/>
<text x="77" y="223">
%=</text>
</g>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="240"/>
<text x="77" y="256">
&amp;&amp;</text>
</g>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="273"/>
<text x="77" y="289">
&amp;=</text>
</g>
</g>
<path d=" M 47 305 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="306"/>
<text x="77" y="322">
*=</text>
</g>
</g>
<path d=" M 47 338 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="339"/>
<text x="77" y="355">
+=</text>
</g>
</g>
<path d=" M 47 371 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="372"/>
<text x="77" y="388">
-=</text>
</g>
</g>
<path d=" M 47 404 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="405"/>
<text x="77" y="421">
-&gt;</text>
</g>
</g>
<path d=" M 47 437 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="438"/>
<text x="77" y="454">
..</text>
</g>
</g>
<path d=" M 47 470 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="471"/>
<text x="77" y="487">
/=</text>
</g>
</g>
<path d=" M 47 503 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="504"/>
<text x="77" y="520">
::</text>
</g>
</g>
<path d=" M 47 536 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="537"/>
<text x="77" y="553">
&lt;-</text>
</g>
</g>
<path d=" M 47 569 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="570"/>
<text x="77" y="586">
&lt;&lt;</text>
</g>
</g>
<path d=" M 47 602 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="603"/>
<text x="77" y="619">
&lt;=</text>
</g>
</g>
<path d=" M 47 635 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="636"/>
<text x="77" y="652">
==</text>
</g>
</g>
<path d=" M 47 668 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="669"/>
<text x="77" y="685">
=&gt;</text>
</g>
</g>
<path d=" M 47 701 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="702"/>
<text x="77" y="718">
&gt;=</text>
</g>
</g>
<path d=" M 47 734 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="735"/>
<text x="77" y="751">
&gt;&gt;</text>
</g>
</g>
<path d=" M 47 767 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="768"/>
<text x="77" y="784">
^=</text>
</g>
</g>
<path d=" M 47 800 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="801"/>
<text x="77" y="817">
|=</text>
</g>
</g>
<path d=" M 47 833 v 0 a 12 12 0 0 0 12 12 m 36 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="834"/>
<text x="77" y="850">
||</text>
</g>
</g>
<path d=" M 47 866 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="867"/>
<text x="73" y="883">
!</text>
</g>
</g>
<path d=" M 47 899 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="900"/>
<text x="73" y="916">
#</text>
</g>
</g>
<path d=" M 47 932 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="933"/>
<text x="73" y="949">
$</text>
</g>
</g>
<path d=" M 47 965 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="966"/>
<text x="73" y="982">
%</text>
</g>
</g>
<path d=" M 47 998 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="999"/>
<text x="73" y="1015">
&amp;</text>
</g>
</g>
<path d=" M 47 1031 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1032"/>
<text x="73" y="1048">
(</text>
</g>
</g>
<path d=" M 47 1064 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1065"/>
<text x="73" y="1081">
)</text>
</g>
</g>
<path d=" M 47 1097 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1098"/>
<text x="73" y="1114">
*</text>
</g>
</g>
<path d=" M 47 1130 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1131"/>
<text x="73" y="1147">
+</text>
</g>
</g>
<path d=" M 47 1163 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1164"/>
<text x="73" y="1180">
,</text>
</g>
</g>
<path d=" M 47 1196 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1197"/>
<text x="73" y="1213">
-</text>
</g>
</g>
<path d=" M 47 1229 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1230"/>
<text x="73" y="1246">
.</text>
</g>
</g>
<path d=" M 47 1262 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1263"/>
<text x="73" y="1279">
/</text>
</g>
</g>
<path d=" M 47 1295 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1296"/>
<text x="73" y="1312">
:</text>
</g>
</g>
<path d=" M 47 1328 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1329"/>
<text x="73" y="1345">
;</text>
</g>
</g>
<path d=" M 47 1361 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1362"/>
<text x="73" y="1378">
&lt;</text>
</g>
</g>
<path d=" M 47 1394 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1395"/>
<text x="73" y="1411">
=</text>
</g>
</g>
<path d=" M 47 1427 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1428"/>
<text x="73" y="1444">
&gt;</text>
</g>
</g>
<path d=" M 47 1460 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1461"/>
<text x="73" y="1477">
?</text>
</g>
</g>
<path d=" M 47 1493 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1494"/>
<text x="73" y="1510">
@</text>
</g>
</g>
<path d=" M 47 1526 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1527"/>
<text x="73" y="1543">
[</text>
</g>
</g>
<path d=" M 47 1559 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1560"/>
<text x="73" y="1576">
]</text>
</g>
</g>
<path d=" M 47 1592 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1593"/>
<text x="73" y="1609">
^</text>
</g>
</g>
<path d=" M 47 1625 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1626"/>
<text x="73" y="1642">
{</text>
</g>
</g>
<path d=" M 47 1658 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1659"/>
<text x="73" y="1675">
|</text>
</g>
</g>
<path d=" M 47 1691 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1692"/>
<text x="73" y="1708">
}</text>
</g>
</g>
<path d=" M 47 1724 v 0 a 12 12 0 0 0 12 12 m 28 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="1725"/>
<text x="73" y="1741">
~</text>
</g>
</g>
<path d=" M 137 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 127 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 关于标点字符用法的链接，见[语法索引](syntax-index.md#operators-and-punctuation)。

</div>

<div class="rule" id="r-lex.token.delim"><a class="rule-link" href="#r-lex.token.delim" title="lex.token.delim"><span>[lex<wbr>.token<wbr>.delim]</span></a>
</div>

## 定界符

括号标点用于语法的多个部分。开括号必须始终与闭括号配对。括号以及其中的 token 在[宏](macros-by-example.md)中称为“token 树”。三种括号是：

|括号|类型|
|--|--|
|`{` `}`|花括号|
|`[` `]`|方括号|
|`(` `)`|圆括号|

<div class="rule" id="r-lex.token.reserved"><a class="rule-link" href="#r-lex.token.reserved" title="lex.token.reserved"><span>[lex<wbr>.token<wbr>.reserved]</span></a>
</div>

## 保留 token

<div class="rule" id="r-lex.token.reserved.intro"><a class="rule-link" href="#r-lex.token.reserved.intro" title="lex.token.reserved.intro"><span>[lex<wbr>.token<wbr>.reserved<wbr>.intro]</span></a>
</div>

有几种 token 形式被保留以供将来使用或避免混淆。源输入匹配这些形式之一是错误。

<div class="rule" id="r-lex.token.reserved.syntax"><a class="rule-link" href="#r-lex.token.reserved.syntax" title="lex.token.reserved.syntax"><span>[lex<wbr>.token<wbr>.reserved<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-RESERVED_TOKEN" onclick="show_railroad()">[RESERVED_TOKEN](tokens.md#railroad-RESERVED_TOKEN)</span> →  
      <span class="grammar-text">[RESERVED_GUARDED_STRING_LITERAL](tokens.md#grammar-RESERVED_GUARDED_STRING_LITERAL)</span>  
    \| <span class="grammar-text">[RESERVED_POUNDS](tokens.md#grammar-RESERVED_POUNDS)</span>  
    \| <span class="grammar-text">[RESERVED_RAW_IDENTIFIER](identifiers.md#grammar-RESERVED_RAW_IDENTIFIER)</span>  
    \| <span class="grammar-text">[RESERVED_RAW_LIFETIME](tokens.md#grammar-RESERVED_RAW_LIFETIME)</span>  
    \| <span class="grammar-text">[RESERVED_TOKEN_DOUBLE_QUOTE](tokens.md#grammar-RESERVED_TOKEN_DOUBLE_QUOTE)</span>  
    \| <span class="grammar-text">[RESERVED_TOKEN_LIFETIME](tokens.md#grammar-RESERVED_TOKEN_LIFETIME)</span>  
    \| <span class="grammar-text">[RESERVED_TOKEN_POUND](tokens.md#grammar-RESERVED_TOKEN_POUND)</span>  
    \| <span class="grammar-text">[RESERVED_TOKEN_SINGLE_QUOTE](tokens.md#grammar-RESERVED_TOKEN_SINGLE_QUOTE)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 394px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RESERVED_TOKEN"><svg class="railroad" viewBox="0 0 394 305" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RESERVED_TOKEN">
<text class="comment" x="64" y="25">
RESERVED_TOKEN</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 276 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RESERVED_GUARDED_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="276" x="59" y="42"/>
<text x="197" y="58">
RESERVED_GUARDED_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 300 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 300 0 v -33"/>
<path d=" M 47 107 v 33 m 300 0 v -33"/>
<path d=" M 47 140 v 33 m 300 0 v -33"/>
<path d=" M 47 173 v 33 m 300 0 v -33"/>
<path d=" M 47 206 v 33 m 300 0 v -33"/>
<path d=" M 47 239 v 33 m 300 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 140 0 h 136 m -65 0 l -5 -5 m 0 10 l 5 -5 m 65 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RESERVED_POUNDS">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="75"/>
<text x="129" y="91">
RESERVED_POUNDS</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 212 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-RESERVED_RAW_IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="212" x="59" y="108"/>
<text x="165" y="124">
RESERVED_RAW_IDENTIFIER</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 196 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RESERVED_RAW_LIFETIME">
<g class="nonterminal">
<rect height="22" width="196" x="59" y="141"/>
<text x="157" y="157">
RESERVED_RAW_LIFETIME</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 244 0 h 32 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RESERVED_TOKEN_DOUBLE_QUOTE">
<g class="nonterminal">
<rect height="22" width="244" x="59" y="174"/>
<text x="181" y="190">
RESERVED_TOKEN_DOUBLE_QUOTE</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 212 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RESERVED_TOKEN_LIFETIME">
<g class="nonterminal">
<rect height="22" width="212" x="59" y="207"/>
<text x="165" y="223">
RESERVED_TOKEN_LIFETIME</text>
</g>
</a>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 188 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-RESERVED_TOKEN_POUND">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="240"/>
<text x="153" y="256">
RESERVED_TOKEN_POUND</text>
</g>
</a>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 244 0 h 32 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-RESERVED_TOKEN_SINGLE_QUOTE">
<g class="nonterminal">
<rect height="22" width="244" x="59" y="273"/>
<text x="181" y="289">
RESERVED_TOKEN_SINGLE_QUOTE</text>
</g>
</a>
</g>
<path d=" M 369 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 359 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.reserved-prefix"><a class="rule-link" href="#r-lex.token.reserved-prefix" title="lex.token.reserved-prefix"><span>[lex<wbr>.token<wbr>.reserved-prefix]</span></a>
</div>

## 保留前缀

<div class="rule" id="r-lex.token.reserved-prefix.syntax"><a class="rule-link" href="#r-lex.token.reserved-prefix.syntax" title="lex.token.reserved-prefix.syntax"><span>[lex<wbr>.token<wbr>.reserved-prefix<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-RESERVED_TOKEN_DOUBLE_QUOTE" onclick="show_railroad()">[RESERVED_TOKEN_DOUBLE_QUOTE](tokens.md#railroad-RESERVED_TOKEN_DOUBLE_QUOTE)</span> →  
    <span class="grammar-text">[IDENTIFIER_OR_KEYWORD](identifiers.md#grammar-IDENTIFIER_OR_KEYWORD)</span><sub class="grammar-text">但不包括 `b`、`c`、`r`、`br` 或 `cr`</sub> <span class="grammar-literal">"</span>

<span class="grammar-text grammar-production" id="grammar-RESERVED_TOKEN_SINGLE_QUOTE" onclick="show_railroad()">[RESERVED_TOKEN_SINGLE_QUOTE](tokens.md#railroad-RESERVED_TOKEN_SINGLE_QUOTE)</span> →  
    <span class="grammar-text">[IDENTIFIER_OR_KEYWORD](identifiers.md#grammar-IDENTIFIER_OR_KEYWORD)</span><sub class="grammar-text">except `b`</sub> <span class="grammar-literal">'</span>

<span class="grammar-text grammar-production" id="grammar-RESERVED_TOKEN_POUND" onclick="show_railroad()">[RESERVED_TOKEN_POUND](tokens.md#railroad-RESERVED_TOKEN_POUND)</span> →  
    <span class="grammar-text">[IDENTIFIER_OR_KEYWORD](identifiers.md#grammar-IDENTIFIER_OR_KEYWORD)</span><sub class="grammar-text">except `r` or `br` or `cr`</sub> <span class="grammar-literal">\#</span>

<span class="grammar-text grammar-production" id="grammar-RESERVED_TOKEN_LIFETIME" onclick="show_railroad()">[RESERVED_TOKEN_LIFETIME](tokens.md#railroad-RESERVED_TOKEN_LIFETIME)</span> →  
    <span class="grammar-literal">'</span> <span class="grammar-text">[IDENTIFIER_OR_KEYWORD](identifiers.md#grammar-IDENTIFIER_OR_KEYWORD)</span><sub class="grammar-text">except `r`</sub> <span class="grammar-literal">\#</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 428px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RESERVED_TOKEN_DOUBLE_QUOTE"><svg class="railroad" viewBox="0 0 428 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RESERVED_TOKEN_DOUBLE_QUOTE">
<text class="comment" x="113" y="25">
RESERVED_TOKEN_DOUBLE_QUOTE</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="320" x="35" y="42"/>
<path d=" M 35 89 h 8 m 196 0 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0"/>
<text class="comment" x="195" y="65">
except `b` or `c` or `r` or `br` or `cr`</text>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER_OR_KEYWORD">
<g class="nonterminal">
<rect height="22" width="196" x="43" y="78"/>
<text x="141" y="94">
IDENTIFIER_OR_KEYWORD</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="365" y="78"/>
<text x="379" y="94">
&quot;</text>
</g>
<path d=" M 355 89 h 10"/>
</g>
<path d=" M 403 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 393 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 320px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RESERVED_TOKEN_SINGLE_QUOTE"><svg class="railroad" viewBox="0 0 320 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RESERVED_TOKEN_SINGLE_QUOTE">
<text class="comment" x="113" y="25">
RESERVED_TOKEN_SINGLE_QUOTE</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="212" x="35" y="42"/>
<path d=" M 35 89 h 8 m 196 0 h 8"/>
<text class="comment" x="83" y="65">
except `b`</text>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER_OR_KEYWORD">
<g class="nonterminal">
<rect height="22" width="196" x="43" y="78"/>
<text x="141" y="94">
IDENTIFIER_OR_KEYWORD</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="257" y="78"/>
<text x="271" y="94">
&#x27;</text>
</g>
<path d=" M 247 89 h 10"/>
</g>
<path d=" M 295 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 285 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 323px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RESERVED_TOKEN_POUND"><svg class="railroad" viewBox="0 0 323 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RESERVED_TOKEN_POUND">
<text class="comment" x="88" y="25">
RESERVED_TOKEN_POUND</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="215" x="35" y="42"/>
<path d=" M 35 89 h 8 m 196 0 h 11"/>
<text class="comment" x="142" y="65">
except `r` or `br` or `cr`</text>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER_OR_KEYWORD">
<g class="nonterminal">
<rect height="22" width="196" x="43" y="78"/>
<text x="141" y="94">
IDENTIFIER_OR_KEYWORD</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="260" y="78"/>
<text x="274" y="94">
#</text>
</g>
<path d=" M 250 89 h 10"/>
</g>
<path d=" M 298 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 288 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 358px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RESERVED_TOKEN_LIFETIME"><svg class="railroad" viewBox="0 0 358 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RESERVED_TOKEN_LIFETIME">
<text class="comment" x="99" y="25">
RESERVED_TOKEN_LIFETIME</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="78"/>
<text x="49" y="94">
&#x27;</text>
</g>
<g class="labeledbox">
<rect height="66" width="212" x="73" y="42"/>
<path d=" M 73 89 h 8 m 196 0 h 8"/>
<text class="comment" x="121" y="65">
except `r`</text>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER_OR_KEYWORD">
<g class="nonterminal">
<rect height="22" width="196" x="81" y="78"/>
<text x="179" y="94">
IDENTIFIER_OR_KEYWORD</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="295" y="78"/>
<text x="309" y="94">
#</text>
</g>
<path d=" M 63 89 h 10"/>
<path d=" M 285 89 h 10"/>
</g>
<path d=" M 333 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 323 89 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.reserved-prefix.intro"><a class="rule-link" href="#r-lex.token.reserved-prefix.intro" title="lex.token.reserved-prefix.intro"><span>[lex<wbr>.token<wbr>.reserved-prefix<wbr>.intro]</span></a>
</div>

某些称为_保留前缀_的词法形式被保留以供将来使用。

<div class="rule" id="r-lex.token.reserved-prefix.id"><a class="rule-link" href="#r-lex.token.reserved-prefix.id" title="lex.token.reserved-prefix.id"><span>[lex<wbr>.token<wbr>.reserved-prefix<wbr>.id]</span></a>
</div>

如果源输入本来会被词法解释为非原始标识符（或关键字），并且其后立即跟随 `#`、`'` 或 `"` 字符（中间没有空白），则会被识别为保留前缀。

<div class="rule" id="r-lex.token.reserved-prefix.raw-token"><a class="rule-link" href="#r-lex.token.reserved-prefix.raw-token" title="lex.token.reserved-prefix.raw-token"><span>[lex<wbr>.token<wbr>.reserved-prefix<wbr>.raw-token]</span></a>
</div>

注意，原始标识符、原始字符串字面量和原始字节字符串字面量可以包含 `#` 字符，但不会被解释为包含保留前缀。

<div class="rule" id="r-lex.token.reserved-prefix.strings"><a class="rule-link" href="#r-lex.token.reserved-prefix.strings" title="lex.token.reserved-prefix.strings"><span>[lex<wbr>.token<wbr>.reserved-prefix<wbr>.strings]</span></a>
</div>

类似地，在原始字符串字面量、字节字面量、字节字符串字面量、原始字节字符串字面量、C 字符串字面量和原始 C 字符串字面量中使用的 `r`、`b`、`br`、`c` 和 `cr` 前缀，不会被解释为保留前缀。

<div class="rule" id="r-lex.token.reserved-prefix.life"><a class="rule-link" href="#r-lex.token.reserved-prefix.life" title="lex.token.reserved-prefix.life"><span>[lex<wbr>.token<wbr>.reserved-prefix<wbr>.life]</span></a>
</div>

如果源输入本来会被词法解释为非原始生命周期（或关键字），并且其后立即跟随 `#` 字符（中间没有空白），则会被识别为保留生命周期前缀。

<div class="rule" id="r-lex.token.reserved-prefix.edition2021"><a class="rule-link" href="#r-lex.token.reserved-prefix.edition2021" title="lex.token.reserved-prefix.edition2021"><span>[lex<wbr>.token<wbr>.reserved-prefix<wbr>.edition2021]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2021</span> Edition differences</p>
 > 
 > 从 2021 edition 开始，保留前缀会由词法分析器报告为错误（特别是，它们不能传给宏）。
 > 
 > 在 2021 edition 之前，保留前缀会被词法分析器接受，并解释为多个 token（例如，一个表示标识符或关键字的 token，后跟一个 `#` token）。
 > 
 > 在所有 edition 中都被接受的示例：
 > 
 > ```rust
 > macro_rules! lexes {($($_:tt)*) => {}}
 > lexes!{a #foo}
 > lexes!{continue 'foo}
 > lexes!{match "..." {}}
 > lexes!{r#let#foo}         // three tokens: r#let # foo
 > lexes!{'prefix #lt}
 > ```
 > 
 > 在 2021 edition 之前被接受、但之后被拒绝的示例：
 > 
 > ```rust,edition2018
 > macro_rules! lexes {($($_:tt)*) => {}}
 > lexes!{a#foo}
 > lexes!{continue'foo}
 > lexes!{match"..." {}}
 > lexes!{'prefix#lt}
 > ```

</div>

<div class="rule" id="r-lex.token.reserved-guards"><a class="rule-link" href="#r-lex.token.reserved-guards" title="lex.token.reserved-guards"><span>[lex<wbr>.token<wbr>.reserved-guards]</span></a>
</div>

## 保留防护

<div class="rule" id="r-lex.token.reserved-guards.syntax"><a class="rule-link" href="#r-lex.token.reserved-guards.syntax" title="lex.token.reserved-guards.syntax"><span>[lex<wbr>.token<wbr>.reserved-guards<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-RESERVED_GUARDED_STRING_LITERAL" onclick="show_railroad()">[RESERVED_GUARDED_STRING_LITERAL](tokens.md#railroad-RESERVED_GUARDED_STRING_LITERAL)</span> → <span class="grammar-literal">\#</span><sup>+</sup> <span class="grammar-text">[STRING_LITERAL](tokens.md#grammar-STRING_LITERAL)</span>

<span class="grammar-text grammar-production" id="grammar-RESERVED_POUNDS" onclick="show_railroad()">[RESERVED_POUNDS](tokens.md#railroad-RESERVED_POUNDS)</span> → <span class="grammar-literal">\#</span><sup>2..</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 264px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RESERVED_GUARDED_STRING_LITERAL"><svg class="railroad" viewBox="0 0 264 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RESERVED_GUARDED_STRING_LITERAL">
<text class="comment" x="127" y="25">
RESERVED_GUARDED_STRING_LITERAL</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="repeat">
<path d=" M 35 53 h 12 m 28 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -28 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="47" y="42"/>
<text x="61" y="58">
#</text>
</g>
</g>
<a class="link" xlink:href="tokens.md#railroad-STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="132" x="97" y="42"/>
<text x="163" y="58">
STRING_LITERAL</text>
</g>
</a>
<path d=" M 87 53 h 10"/>
</g>
<path d=" M 239 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 229 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 160px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RESERVED_POUNDS"><svg class="railroad" viewBox="0 0 160 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tokens.md#grammar-RESERVED_POUNDS">
<text class="comment" x="67" y="25">
RESERVED_POUNDS</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
#</text>
</g>
<g class="repeat">
<path d=" M 73 53 h 12 m 28 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -28 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="85" y="42"/>
<text x="99" y="58">
#</text>
</g>
</g>
<path d=" M 63 53 h 10"/>
</g>
<path d=" M 135 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 125 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.token.reserved-guards.intro"><a class="rule-link" href="#r-lex.token.reserved-guards.intro" title="lex.token.reserved-guards.intro"><span>[lex<wbr>.token<wbr>.reserved-guards<wbr>.intro]</span></a>
</div>

保留防护是为将来使用而保留的语法；如果使用，将产生编译错误。

<div class="rule" id="r-lex.token.reserved-guards.string-literal"><a class="rule-link" href="#r-lex.token.reserved-guards.string-literal" title="lex.token.reserved-guards.string-literal"><span>[lex<wbr>.token<wbr>.reserved-guards<wbr>.string-literal]</span></a>
</div>

\_保留带防护字符串字面量_是由一个或多个 `U+0023`（`#`）后面立即跟随一个 [STRING_LITERAL](tokens.md#grammar-STRING_LITERAL) 所构成的 token。

<div class="rule" id="r-lex.token.reserved-guards.pounds"><a class="rule-link" href="#r-lex.token.reserved-guards.pounds" title="lex.token.reserved-guards.pounds"><span>[lex<wbr>.token<wbr>.reserved-guards<wbr>.pounds]</span></a>
</div>

\_保留井号序列_是由两个或更多 `U+0023`（`#`）构成的 token。

<div class="rule" id="r-lex.token.reserved-guards.edition2024"><a class="rule-link" href="#r-lex.token.reserved-guards.edition2024" title="lex.token.reserved-guards.edition2024"><span>[lex<wbr>.token<wbr>.reserved-guards<wbr>.edition2024]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2024</span> Edition differences</p>
 > 
 > 在 2024 edition 之前，保留防护会被词法分析器接受，并解释为多个 token。例如，`#"foo"#` 形式会被解释为三个 token。`##` 会被解释为两个 token。

</div>
