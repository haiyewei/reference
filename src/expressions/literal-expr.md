<div class="rule" id="r-expr.literal"><a class="rule-link" href="#r-expr.literal" title="expr.literal"><span>[expr<wbr>.literal]</span></a>
</div>

# 字面量表达式

<div class="rule" id="r-expr.literal.syntax"><a class="rule-link" href="#r-expr.literal.syntax" title="expr.literal.syntax"><span>[expr<wbr>.literal<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-LiteralExpression" onclick="show_railroad()">[LiteralExpression](literal-expr.md#railroad-LiteralExpression)</span> →  
      <span class="grammar-text">[CHAR_LITERAL](../tokens.md#grammar-CHAR_LITERAL)</span>  
    \| <span class="grammar-text">[STRING_LITERAL](../tokens.md#grammar-STRING_LITERAL)</span>  
    \| <span class="grammar-text">[RAW_STRING_LITERAL](../tokens.md#grammar-RAW_STRING_LITERAL)</span>  
    \| <span class="grammar-text">[BYTE_LITERAL](../tokens.md#grammar-BYTE_LITERAL)</span>  
    \| <span class="grammar-text">[BYTE_STRING_LITERAL](../tokens.md#grammar-BYTE_STRING_LITERAL)</span>  
    \| <span class="grammar-text">[RAW_BYTE_STRING_LITERAL](../tokens.md#grammar-RAW_BYTE_STRING_LITERAL)</span>  
    \| <span class="grammar-text">[C_STRING_LITERAL](../tokens.md#grammar-C_STRING_LITERAL)</span>  
    \| <span class="grammar-text">[RAW_C_STRING_LITERAL](../tokens.md#grammar-RAW_C_STRING_LITERAL)</span>  
    \| <span class="grammar-text">[INTEGER_LITERAL](../tokens.md#grammar-INTEGER_LITERAL)</span>  
    \| <span class="grammar-text">[FLOAT_LITERAL](../tokens.md#grammar-FLOAT_LITERAL)</span>  
    \| <span class="grammar-literal">true</span>  
    \| <span class="grammar-literal">false</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 330px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LiteralExpression"><svg class="railroad" viewBox="0 0 330 437" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="literal-expr.md#grammar-LiteralExpression">
<text class="comment" x="74" y="25">
LiteralExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 116 0 h 120 m -57 0 l -5 -5 m 0 10 l 5 -5 m 57 0"/>
<g class="sequence">
<a class="link" xlink:href="../tokens.md#railroad-CHAR_LITERAL">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="42"/>
<text x="117" y="58">
CHAR_LITERAL</text>
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
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 132 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../tokens.md#railroad-STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="75"/>
<text x="125" y="91">
STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 164 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../tokens.md#railroad-RAW_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="108"/>
<text x="141" y="124">
RAW_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 116 0 h 96 m -45 0 l -5 -5 m 0 10 l 5 -5 m 45 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../tokens.md#railroad-BYTE_LITERAL">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="141"/>
<text x="117" y="157">
BYTE_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 172 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../tokens.md#railroad-BYTE_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="172" x="59" y="174"/>
<text x="145" y="190">
BYTE_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 212 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../tokens.md#railroad-RAW_BYTE_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="212" x="59" y="207"/>
<text x="165" y="223">
RAW_BYTE_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 148 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../tokens.md#railroad-C_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="240"/>
<text x="133" y="256">
C_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 188 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../tokens.md#railroad-RAW_C_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="273"/>
<text x="153" y="289">
RAW_C_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 305 v 0 a 12 12 0 0 0 12 12 m 140 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../tokens.md#railroad-INTEGER_LITERAL">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="306"/>
<text x="129" y="322">
INTEGER_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 338 v 0 a 12 12 0 0 0 12 12 m 124 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../tokens.md#railroad-FLOAT_LITERAL">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="339"/>
<text x="121" y="355">
FLOAT_LITERAL</text>
</g>
</a>
</g>
<path d=" M 47 371 v 0 a 12 12 0 0 0 12 12 m 52 0 h 160 m -77 0 l -5 -5 m 0 10 l 5 -5 m 77 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="372"/>
<text x="85" y="388">
true</text>
</g>
</g>
<path d=" M 47 404 v 0 a 12 12 0 0 0 12 12 m 60 0 h 152 m -73 0 l -5 -5 m 0 10 l 5 -5 m 73 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="59" y="405"/>
<text x="89" y="421">
false</text>
</g>
</g>
<path d=" M 305 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 295 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.literal.intro"><a class="rule-link" href="#r-expr.literal.intro" title="expr.literal.intro"><span>[expr<wbr>.literal<wbr>.intro]</span></a>
</div>

\_字面量表达式_是由单个 token 而不是 token 序列组成的表达式；它立即且直接表示其求值结果，而不是通过名称或其他求值规则来引用该值。

<div class="rule" id="r-expr.literal.const-expr"><a class="rule-link" href="#r-expr.literal.const-expr" title="expr.literal.const-expr"><span>[expr<wbr>.literal<wbr>.const-expr]</span></a>
</div>

字面量是一种[常量表达式](../const_eval.md#constant-expressions)，因此（主要）在编译时求值。

<div class="rule" id="r-expr.literal.literal-token"><a class="rule-link" href="#r-expr.literal.literal-token" title="expr.literal.literal-token"><span>[expr<wbr>.literal<wbr>.literal-token]</span></a>
</div>

前面描述的每种词法[字面量](../tokens.md#literals)形式都可以构成字面量表达式，关键字 `true` 和 `false` 也可以。

```rust
"hello";   // string type
'5';       // character type
5;         // integer type
```

<div class="rule" id="r-expr.literal.string-representation"><a class="rule-link" href="#r-expr.literal.string-representation" title="expr.literal.string-representation"><span>[expr<wbr>.literal<wbr>.string-representation]</span></a>
</div>

在下面的描述中，token 的_字符串表示_是输入中与该 token 在 _Lexer_ 语法片段中的产生式相匹配的字符序列。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这种字符串表示绝不会包含后面紧跟 `U+000A` (LF) 的 `U+000D` (CR) 字符：这一对字符此前已经被转换为单个 `U+000A` (LF)。

</div>

<div class="rule" id="r-expr.literal.escape"><a class="rule-link" href="#r-expr.literal.escape" title="expr.literal.escape"><span>[expr<wbr>.literal<wbr>.escape]</span></a>
</div>

## 转义

<div class="rule" id="r-expr.literal.escape.intro"><a class="rule-link" href="#r-expr.literal.escape.intro" title="expr.literal.escape.intro"><span>[expr<wbr>.literal<wbr>.escape<wbr>.intro]</span></a>
</div>

下面对文本字面量表达式的描述使用了若干形式的_转义\_。

<div class="rule" id="r-expr.literal.escape.sequence"><a class="rule-link" href="#r-expr.literal.escape.sequence" title="expr.literal.escape.sequence"><span>[expr<wbr>.literal<wbr>.escape<wbr>.sequence]</span></a>
</div>

每种转义形式都由以下内容刻画：

- 一个_转义序列\_：一串字符，它总是以 `U+005C` (`\`) 开头
- 一个_转义后的值\_：单个字符或一个空字符序列

在下面的转义定义中：

- \_八进制数字_是范围 \[`0`\-`7`\] 内的任意字符。
- \_十六进制数字_是范围 \[`0`\-`9`\]、\[`a`\-`f`\] 或 \[`A`\-`F`\] 内的任意字符。

<div class="rule" id="r-expr.literal.escape.simple"><a class="rule-link" href="#r-expr.literal.escape.simple" title="expr.literal.escape.simple"><span>[expr<wbr>.literal<wbr>.escape<wbr>.simple]</span></a>
</div>

### 简单转义

下表第一列中出现的每个字符序列都是一个转义序列。

在每种情况下，转义后的值都是第二列对应条目给出的字符。

|转义序列|转义后的值|
|----|-----|
|`\0`|U+0000 (NUL)|
|`\t`|U+0009 (HT)|
|`\n`|U+000A (LF)|
|`\r`|U+000D (CR)|
|`\"`|U+0022 (QUOTATION MARK)|
|`\'`|U+0027 (APOSTROPHE)|
|`\\`|U+005C (REVERSE SOLIDUS)|

<div class="rule" id="r-expr.literal.escape.hex-octet"><a class="rule-link" href="#r-expr.literal.escape.hex-octet" title="expr.literal.escape.hex-octet"><span>[expr<wbr>.literal<wbr>.escape<wbr>.hex-octet]</span></a>
</div>

### 8 位转义

该转义序列由 `\x` 后跟两个十六进制数字组成。

转义后的值是这样一个字符：它的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)是将该转义序列中最后两个字符解释为十六进制整数的结果，如同以基数 16 调用 [`u8::from_str_radix`](../../std/primitive.u8.html#method.from_str_radix) 一样。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 因此，转义后的值具有位于 [`u8`](../types/numeric.md) 范围内的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)。

</div>

<div class="rule" id="r-expr.literal.escape.hex-ascii"><a class="rule-link" href="#r-expr.literal.escape.hex-ascii" title="expr.literal.escape.hex-ascii"><span>[expr<wbr>.literal<wbr>.escape<wbr>.hex-ascii]</span></a>
</div>

### 7 位转义

该转义序列由 `\x` 后跟一个八进制数字，再后跟一个十六进制数字组成。

转义后的值是这样一个字符：它的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)是将该转义序列中最后两个字符解释为十六进制整数的结果，如同以基数 16 调用 [`u8::from_str_radix`](../../std/primitive.u8.html#method.from_str_radix) 一样。

<div class="rule" id="r-expr.literal.escape.unicode"><a class="rule-link" href="#r-expr.literal.escape.unicode" title="expr.literal.escape.unicode"><span>[expr<wbr>.literal<wbr>.escape<wbr>.unicode]</span></a>
</div>

### Unicode 转义

该转义序列由 `\u{` 后跟一串字符，再后跟 `}` 组成；这串字符中的每个字符都是十六进制数字或 `_`。

转义后的值是这样一个字符：它的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)是将该转义序列中包含的十六进制数字解释为十六进制整数的结果，如同以基数 16 调用 [`u32::from_str_radix`](../../std/primitive.u32.html#method.from_str_radix) 一样。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [CHAR_LITERAL](../tokens.md#grammar-CHAR_LITERAL) 或 [STRING_LITERAL](../tokens.md#grammar-STRING_LITERAL) token 的允许形式保证存在这样的字符。

</div>

<div class="rule" id="r-expr.literal.continuation"><a class="rule-link" href="#r-expr.literal.continuation" title="expr.literal.continuation"><span>[expr<wbr>.literal<wbr>.continuation]</span></a>
</div>

### 字符串续行转义

该转义序列由 `\` 后面立即跟随的 `U+000A` (LF)，以及在下一个非空白字符之前所有随后出现的空白字符组成。就此而言，空白字符是 `U+0009` (HT)、`U+000A` (LF)、`U+000D` (CR) 和 `U+0020` (SPACE)。

转义后的值是一个空字符序列。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这种转义形式的效果是，字符串续行会跳过随后的空白，包括额外的换行。因此，`a`、`b` 和 `c` 相等：
 > 
 > ```rust
 > let a = "foobar";
 > let b = "foo\
 >          bar";
 > let c = "foo\
 > 
 >      bar";
 > 
 > assert_eq!(a, b);
 > assert_eq!(b, c);
 > ```
 > 
 > 跳过额外的换行（如示例 c 中所示）可能令人困惑且出乎意料。这个行为将来可能会调整。在作出决定之前，建议避免依赖通过续行跳过多个换行。更多信息见[此议题](https://github.com/rust-lang/reference/pull/1042)。

</div>

<div class="rule" id="r-expr.literal.char"><a class="rule-link" href="#r-expr.literal.char" title="expr.literal.char"><span>[expr<wbr>.literal<wbr>.char]</span></a>
</div>

## 字符字面量表达式

<div class="rule" id="r-expr.literal.char.intro"><a class="rule-link" href="#r-expr.literal.char.intro" title="expr.literal.char.intro"><span>[expr<wbr>.literal<wbr>.char<wbr>.intro]</span></a>
</div>

字符字面量表达式由单个 [CHAR_LITERAL](../tokens.md#grammar-CHAR_LITERAL) token 组成。

<div class="rule" id="r-expr.literal.char.type"><a class="rule-link" href="#r-expr.literal.char.type" title="expr.literal.char.type"><span>[expr<wbr>.literal<wbr>.char<wbr>.type]</span></a>
</div>

该表达式的类型是基本类型 [`char`](../types/char.md)。

<div class="rule" id="r-expr.literal.char.no-suffix"><a class="rule-link" href="#r-expr.literal.char.no-suffix" title="expr.literal.char.no-suffix"><span>[expr<wbr>.literal<wbr>.char<wbr>.no-suffix]</span></a>
</div>

该 token 不得带有后缀。

<div class="rule" id="r-expr.literal.char.literal-content"><a class="rule-link" href="#r-expr.literal.char.literal-content" title="expr.literal.char.literal-content"><span>[expr<wbr>.literal<wbr>.char<wbr>.literal-content]</span></a>
</div>

该 token 的_字面量内容_是其字符串表示中第一个 `U+0027` (`'`) 之后、最后一个 `U+0027` (`'`) 之前的字符序列。

<div class="rule" id="r-expr.literal.char.represented"><a class="rule-link" href="#r-expr.literal.char.represented" title="expr.literal.char.represented"><span>[expr<wbr>.literal<wbr>.char<wbr>.represented]</span></a>
</div>

字面量表达式_所表示的字符_按如下方式从字面量内容派生：

<div class="rule" id="r-expr.literal.char.escape"><a class="rule-link" href="#r-expr.literal.char.escape" title="expr.literal.char.escape"><span>[expr<wbr>.literal<wbr>.char<wbr>.escape]</span></a>
</div>

- 如果字面量内容是以下形式之一的转义序列，则所表示的字符是该转义序列的转义后的值：
  - [简单转义](#simple-escapes)
  - [7 位转义](#7-bit-escapes)
  - [Unicode 转义](#unicode-escapes)

<div class="rule" id="r-expr.literal.char.single"><a class="rule-link" href="#r-expr.literal.char.single" title="expr.literal.char.single"><span>[expr<wbr>.literal<wbr>.char<wbr>.single]</span></a>
</div>

- 否则，所表示的字符就是组成该字面量内容的单个字符。

<div class="rule" id="r-expr.literal.char.result"><a class="rule-link" href="#r-expr.literal.char.result" title="expr.literal.char.result"><span>[expr<wbr>.literal<wbr>.char<wbr>.result]</span></a>
</div>

该表达式的值是与所表示字符的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)相对应的 [`char`](../types/char.md)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [CHAR_LITERAL](../tokens.md#grammar-CHAR_LITERAL) token 的允许形式保证这些规则总是产生单个字符。

</div>

字符字面量表达式的示例：

```rust
'R';                               // R
'\'';                              // '
'\x52';                            // R
'\u{00E6}';                        // LATIN SMALL LETTER AE (U+00E6)
```

<div class="rule" id="r-expr.literal.string"><a class="rule-link" href="#r-expr.literal.string" title="expr.literal.string"><span>[expr<wbr>.literal<wbr>.string]</span></a>
</div>

## 字符串字面量表达式

<div class="rule" id="r-expr.literal.string.intro"><a class="rule-link" href="#r-expr.literal.string.intro" title="expr.literal.string.intro"><span>[expr<wbr>.literal<wbr>.string<wbr>.intro]</span></a>
</div>

字符串字面量表达式由单个 [STRING_LITERAL](../tokens.md#grammar-STRING_LITERAL) 或 [RAW_STRING_LITERAL](../tokens.md#grammar-RAW_STRING_LITERAL) token 组成。

<div class="rule" id="r-expr.literal.string.type"><a class="rule-link" href="#r-expr.literal.string.type" title="expr.literal.string.type"><span>[expr<wbr>.literal<wbr>.string<wbr>.type]</span></a>
</div>

该表达式的类型是指向基本类型 [`str`](../types/str.md) 的共享引用（具有 `static` 生命周期）。也就是说，该类型是 `&'static str`。

<div class="rule" id="r-expr.literal.string.no-suffix"><a class="rule-link" href="#r-expr.literal.string.no-suffix" title="expr.literal.string.no-suffix"><span>[expr<wbr>.literal<wbr>.string<wbr>.no-suffix]</span></a>
</div>

该 token 不得带有后缀。

<div class="rule" id="r-expr.literal.string.literal-content"><a class="rule-link" href="#r-expr.literal.string.literal-content" title="expr.literal.string.literal-content"><span>[expr<wbr>.literal<wbr>.string<wbr>.literal-content]</span></a>
</div>

该 token 的_字面量内容_是其字符串表示中第一个 `U+0022` (`"`) 之后、最后一个 `U+0022` (`"`) 之前的字符序列。

<div class="rule" id="r-expr.literal.string.represented"><a class="rule-link" href="#r-expr.literal.string.represented" title="expr.literal.string.represented"><span>[expr<wbr>.literal<wbr>.string<wbr>.represented]</span></a>
</div>

字面量表达式_所表示的字符串_是按如下方式从字面量内容派生出的字符序列：

<div class="rule" id="r-expr.literal.string.escape"><a class="rule-link" href="#r-expr.literal.string.escape" title="expr.literal.string.escape"><span>[expr<wbr>.literal<wbr>.string<wbr>.escape]</span></a>
</div>

- 如果该 token 是 [STRING_LITERAL](../tokens.md#grammar-STRING_LITERAL)，则字面量内容中出现的以下任一形式的每个转义序列都会被替换为该转义序列的转义后的值。
  
  - [简单转义](#simple-escapes)
  - [7 位转义](#7-bit-escapes)
  - [Unicode 转义](#unicode-escapes)
  - [字符串续行转义](#string-continuation-escapes)
  这些替换按从左到右的顺序进行。例如，token `"\\x41"` 会被转换为字符 `\` `x` `4` `1`。

<div class="rule" id="r-expr.literal.string.raw"><a class="rule-link" href="#r-expr.literal.string.raw" title="expr.literal.string.raw"><span>[expr<wbr>.literal<wbr>.string<wbr>.raw]</span></a>
</div>

- 如果该 token 是 [RAW_STRING_LITERAL](../tokens.md#grammar-RAW_STRING_LITERAL)，则所表示的字符串与字面量内容相同。

<div class="rule" id="r-expr.literal.string.result"><a class="rule-link" href="#r-expr.literal.string.result" title="expr.literal.string.result"><span>[expr<wbr>.literal<wbr>.string<wbr>.result]</span></a>
</div>

该表达式的值是对一个静态分配的 [`str`](../types/str.md) 的引用，该 [`str`](../types/str.md) 包含所表示字符串的 UTF-8 编码。

字符串字面量表达式的示例：

```rust
"foo"; r"foo";                     // foo
"\"foo\""; r#""foo""#;             // "foo"

"foo #\"# bar";
r##"foo #"# bar"##;                // foo #"# bar

"\x52"; "R"; r"R";                 // R
"\\x52"; r"\x52";                  // \x52
```

<div class="rule" id="r-expr.literal.byte-char"><a class="rule-link" href="#r-expr.literal.byte-char" title="expr.literal.byte-char"><span>[expr<wbr>.literal<wbr>.byte-char]</span></a>
</div>

## 字节字面量表达式

<div class="rule" id="r-expr.literal.byte-char.intro"><a class="rule-link" href="#r-expr.literal.byte-char.intro" title="expr.literal.byte-char.intro"><span>[expr<wbr>.literal<wbr>.byte-char<wbr>.intro]</span></a>
</div>

字节字面量表达式由单个 [BYTE_LITERAL](../tokens.md#grammar-BYTE_LITERAL) token 组成。

<div class="rule" id="r-expr.literal.byte-char.literal"><a class="rule-link" href="#r-expr.literal.byte-char.literal" title="expr.literal.byte-char.literal"><span>[expr<wbr>.literal<wbr>.byte-char<wbr>.literal]</span></a>
</div>

该表达式的类型是基本类型 [`u8`](../types/numeric.md)。

<div class="rule" id="r-expr.literal.byte-char.no-suffix"><a class="rule-link" href="#r-expr.literal.byte-char.no-suffix" title="expr.literal.byte-char.no-suffix"><span>[expr<wbr>.literal<wbr>.byte-char<wbr>.no-suffix]</span></a>
</div>

该 token 不得带有后缀。

<div class="rule" id="r-expr.literal.byte-char.literal-content"><a class="rule-link" href="#r-expr.literal.byte-char.literal-content" title="expr.literal.byte-char.literal-content"><span>[expr<wbr>.literal<wbr>.byte-char<wbr>.literal-content]</span></a>
</div>

该 token 的_字面量内容_是其字符串表示中第一个 `U+0027` (`'`) 之后、最后一个 `U+0027` (`'`) 之前的字符序列。

<div class="rule" id="r-expr.literal.byte-char.represented"><a class="rule-link" href="#r-expr.literal.byte-char.represented" title="expr.literal.byte-char.represented"><span>[expr<wbr>.literal<wbr>.byte-char<wbr>.represented]</span></a>
</div>

字面量表达式_所表示的字符_按如下方式从字面量内容派生：

<div class="rule" id="r-expr.literal.byte-char.escape"><a class="rule-link" href="#r-expr.literal.byte-char.escape" title="expr.literal.byte-char.escape"><span>[expr<wbr>.literal<wbr>.byte-char<wbr>.escape]</span></a>
</div>

- 如果字面量内容是以下形式之一的转义序列，则所表示的字符是该转义序列的转义后的值：
  - [简单转义](#simple-escapes)
  - [8 位转义](#8-bit-escapes)

<div class="rule" id="r-expr.literal.byte-char.single"><a class="rule-link" href="#r-expr.literal.byte-char.single" title="expr.literal.byte-char.single"><span>[expr<wbr>.literal<wbr>.byte-char<wbr>.single]</span></a>
</div>

- 否则，所表示的字符就是组成该字面量内容的单个字符。

<div class="rule" id="r-expr.literal.byte-char.result"><a class="rule-link" href="#r-expr.literal.byte-char.result" title="expr.literal.byte-char.result"><span>[expr<wbr>.literal<wbr>.byte-char<wbr>.result]</span></a>
</div>

该表达式的值是所表示字符的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [BYTE_LITERAL](../tokens.md#grammar-BYTE_LITERAL) token 的允许形式保证这些规则总是产生单个字符，且其 Unicode 标量值位于 [`u8`](../types/numeric.md) 的范围内。

</div>

字节字面量表达式的示例：

```rust
b'R';                              // 82
b'\'';                             // 39
b'\x52';                           // 82
b'\xA0';                           // 160
```

<div class="rule" id="r-expr.literal.byte-string"><a class="rule-link" href="#r-expr.literal.byte-string" title="expr.literal.byte-string"><span>[expr<wbr>.literal<wbr>.byte-string]</span></a>
</div>

## 字节字符串字面量表达式

<div class="rule" id="r-expr.literal.byte-string.intro"><a class="rule-link" href="#r-expr.literal.byte-string.intro" title="expr.literal.byte-string.intro"><span>[expr<wbr>.literal<wbr>.byte-string<wbr>.intro]</span></a>
</div>

字节字符串字面量表达式由单个 [BYTE_STRING_LITERAL](../tokens.md#grammar-BYTE_STRING_LITERAL) 或 [RAW_BYTE_STRING_LITERAL](../tokens.md#grammar-RAW_BYTE_STRING_LITERAL) token 组成。

<div class="rule" id="r-expr.literal.byte-string.type"><a class="rule-link" href="#r-expr.literal.byte-string.type" title="expr.literal.byte-string.type"><span>[expr<wbr>.literal<wbr>.byte-string<wbr>.type]</span></a>
</div>

该表达式的类型是指向某个数组的共享引用（具有 `static` 生命周期），该数组的元素类型为 [`u8`](../types/numeric.md)。也就是说，该类型是 `&'static [u8; N]`，其中 `N` 是下面描述的所表示字符串中的字节数。

<div class="rule" id="r-expr.literal.byte-string.no-suffix"><a class="rule-link" href="#r-expr.literal.byte-string.no-suffix" title="expr.literal.byte-string.no-suffix"><span>[expr<wbr>.literal<wbr>.byte-string<wbr>.no-suffix]</span></a>
</div>

该 token 不得带有后缀。

<div class="rule" id="r-expr.literal.byte-string.literal-content"><a class="rule-link" href="#r-expr.literal.byte-string.literal-content" title="expr.literal.byte-string.literal-content"><span>[expr<wbr>.literal<wbr>.byte-string<wbr>.literal-content]</span></a>
</div>

该 token 的_字面量内容_是其字符串表示中第一个 `U+0022` (`"`) 之后、最后一个 `U+0022` (`"`) 之前的字符序列。

<div class="rule" id="r-expr.literal.byte-string.represented"><a class="rule-link" href="#r-expr.literal.byte-string.represented" title="expr.literal.byte-string.represented"><span>[expr<wbr>.literal<wbr>.byte-string<wbr>.represented]</span></a>
</div>

字面量表达式_所表示的字符串_是按如下方式从字面量内容派生出的字符序列：

<div class="rule" id="r-expr.literal.byte-string.escape"><a class="rule-link" href="#r-expr.literal.byte-string.escape" title="expr.literal.byte-string.escape"><span>[expr<wbr>.literal<wbr>.byte-string<wbr>.escape]</span></a>
</div>

- 如果该 token 是 [BYTE_STRING_LITERAL](../tokens.md#grammar-BYTE_STRING_LITERAL)，则字面量内容中出现的以下任一形式的每个转义序列都会被替换为该转义序列的转义后的值。
  
  - [简单转义](#simple-escapes)
  - [8 位转义](#8-bit-escapes)
  - [字符串续行转义](#string-continuation-escapes)
  这些替换按从左到右的顺序进行。例如，token `b"\\x41"` 会被转换为字符 `\` `x` `4` `1`。

<div class="rule" id="r-expr.literal.byte-string.raw"><a class="rule-link" href="#r-expr.literal.byte-string.raw" title="expr.literal.byte-string.raw"><span>[expr<wbr>.literal<wbr>.byte-string<wbr>.raw]</span></a>
</div>

- 如果该 token 是 [RAW_BYTE_STRING_LITERAL](../tokens.md#grammar-RAW_BYTE_STRING_LITERAL)，则所表示的字符串与字面量内容相同。

<div class="rule" id="r-expr.literal.byte-string.result"><a class="rule-link" href="#r-expr.literal.byte-string.result" title="expr.literal.byte-string.result"><span>[expr<wbr>.literal<wbr>.byte-string<wbr>.result]</span></a>
</div>

该表达式的值是对一个静态分配数组的引用，该数组按相同顺序包含所表示字符串中各字符的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [BYTE_STRING_LITERAL](../tokens.md#grammar-BYTE_STRING_LITERAL) 和 [RAW_BYTE_STRING_LITERAL](../tokens.md#grammar-RAW_BYTE_STRING_LITERAL) token 的允许形式保证这些规则总是产生位于 [`u8`](../types/numeric.md) 范围内的数组元素值。

</div>

字节字符串字面量表达式的示例：

```rust
b"foo"; br"foo";                     // foo
b"\"foo\""; br#""foo""#;             // "foo"

b"foo #\"# bar";
br##"foo #"# bar"##;                 // foo #"# bar

b"\x52"; b"R"; br"R";                // R
b"\\x52"; br"\x52";                  // \x52
```

<div class="rule" id="r-expr.literal.c-string"><a class="rule-link" href="#r-expr.literal.c-string" title="expr.literal.c-string"><span>[expr<wbr>.literal<wbr>.c-string]</span></a>
</div>

## C 字符串字面量表达式

<div class="rule" id="r-expr.literal.c-string.intro"><a class="rule-link" href="#r-expr.literal.c-string.intro" title="expr.literal.c-string.intro"><span>[expr<wbr>.literal<wbr>.c-string<wbr>.intro]</span></a>
</div>

C 字符串字面量表达式由单个 [C_STRING_LITERAL](../tokens.md#grammar-C_STRING_LITERAL) 或 [RAW_C_STRING_LITERAL](../tokens.md#grammar-RAW_C_STRING_LITERAL) token 组成。

<div class="rule" id="r-expr.literal.c-string.type"><a class="rule-link" href="#r-expr.literal.c-string.type" title="expr.literal.c-string.type"><span>[expr<wbr>.literal<wbr>.c-string<wbr>.type]</span></a>
</div>

该表达式的类型是指向标准库 [CStr](../../core/ffi/c_str/struct.CStr.html) 类型的共享引用（具有 `static` 生命周期）。也就是说，该类型是 `&'static core::ffi::CStr`。

<div class="rule" id="r-expr.literal.c-string.no-suffix"><a class="rule-link" href="#r-expr.literal.c-string.no-suffix" title="expr.literal.c-string.no-suffix"><span>[expr<wbr>.literal<wbr>.c-string<wbr>.no-suffix]</span></a>
</div>

该 token 不得带有后缀。

<div class="rule" id="r-expr.literal.c-string.literal-content"><a class="rule-link" href="#r-expr.literal.c-string.literal-content" title="expr.literal.c-string.literal-content"><span>[expr<wbr>.literal<wbr>.c-string<wbr>.literal-content]</span></a>
</div>

该 token 的_字面量内容_是其字符串表示中第一个 `"` 之后、最后一个 `"` 之前的字符序列。

<div class="rule" id="r-expr.literal.c-string.represented"><a class="rule-link" href="#r-expr.literal.c-string.represented" title="expr.literal.c-string.represented"><span>[expr<wbr>.literal<wbr>.c-string<wbr>.represented]</span></a>
</div>

字面量表达式_所表示的字节_是按如下方式从字面量内容派生出的字节序列：

<div class="rule" id="r-expr.literal.c-string.escape"><a class="rule-link" href="#r-expr.literal.c-string.escape" title="expr.literal.c-string.escape"><span>[expr<wbr>.literal<wbr>.c-string<wbr>.escape]</span></a>
</div>

- 如果该 token 是 [C_STRING_LITERAL](../tokens.md#grammar-C_STRING_LITERAL)，则字面量内容会被视为一串项，其中每一项要么是除 `\` 以外的单个 Unicode 字符，要么是一个[转义](#escapes)。这串项按如下方式转换为字节序列：
  - 每个单独的 Unicode 字符贡献其 UTF-8 表示。
  - 每个[简单转义](#simple-escapes)贡献其转义后的值的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)。
  - 每个 [8 位转义](#8-bit-escapes)贡献一个字节，该字节包含其转义后的值的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)。
  - 每个 [unicode 转义](#unicode-escapes)贡献其转义后的值的 UTF-8 表示。
  - 每个[字符串续行转义](#string-continuation-escapes)不贡献任何字节。

<div class="rule" id="r-expr.literal.c-string.raw"><a class="rule-link" href="#r-expr.literal.c-string.raw" title="expr.literal.c-string.raw"><span>[expr<wbr>.literal<wbr>.c-string<wbr>.raw]</span></a>
</div>

- 如果该 token 是 [RAW_C_STRING_LITERAL](../tokens.md#grammar-RAW_C_STRING_LITERAL)，则所表示的字节是字面量内容的 UTF-8 编码。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [C_STRING_LITERAL](../tokens.md#grammar-C_STRING_LITERAL) 和 [RAW_C_STRING_LITERAL](../tokens.md#grammar-RAW_C_STRING_LITERAL) token 的允许形式保证所表示的字节绝不会包含 null 字节。

</div>

<div class="rule" id="r-expr.literal.c-string.result"><a class="rule-link" href="#r-expr.literal.c-string.result" title="expr.literal.c-string.result"><span>[expr<wbr>.literal<wbr>.c-string<wbr>.result]</span></a>
</div>

该表达式的值是对一个静态分配的 [CStr](../../core/ffi/c_str/struct.CStr.html) 的引用，其字节数组包含所表示的字节，并在其后跟有一个 null 字节。

C 字符串字面量表达式的示例：

```rust
c"foo"; cr"foo";                     // foo
c"\"foo\""; cr#""foo""#;             // "foo"

c"foo #\"# bar";
cr##"foo #"# bar"##;                 // foo #"# bar

c"\x52"; c"R"; cr"R";                // R
c"\\x52"; cr"\x52";                  // \x52

c"æ";                                // LATIN SMALL LETTER AE (U+00E6)
c"\u{00E6}";                         // LATIN SMALL LETTER AE (U+00E6)
c"\xC3\xA6";                         // LATIN SMALL LETTER AE (U+00E6)

c"\xE6".to_bytes();                  // [230]
c"\u{00E6}".to_bytes();              // [195, 166]
```

<div class="rule" id="r-expr.literal.int"><a class="rule-link" href="#r-expr.literal.int" title="expr.literal.int"><span>[expr<wbr>.literal<wbr>.int]</span></a>
</div>

## 整数字面量表达式

<div class="rule" id="r-expr.literal.int.intro"><a class="rule-link" href="#r-expr.literal.int.intro" title="expr.literal.int.intro"><span>[expr<wbr>.literal<wbr>.int<wbr>.intro]</span></a>
</div>

整数字面量表达式由单个 [INTEGER_LITERAL](../tokens.md#grammar-INTEGER_LITERAL) token 组成。

<div class="rule" id="r-expr.literal.int.suffix"><a class="rule-link" href="#r-expr.literal.int.suffix" title="expr.literal.int.suffix"><span>[expr<wbr>.literal<wbr>.int<wbr>.suffix]</span></a>
</div>

如果该 token 带有[后缀](../tokens.md#suffixes)，则后缀必须是某个[基本整数类型](../types/numeric.md)的名称：`u8`、`i8`、`u16`、`i16`、`u32`、`i32`、`u64`、`i64`、`u128`、`i128`、`usize` 或 `isize`，且该表达式具有该类型。

<div class="rule" id="r-expr.literal.int.infer"><a class="rule-link" href="#r-expr.literal.int.infer" title="expr.literal.int.infer"><span>[expr<wbr>.literal<wbr>.int<wbr>.infer]</span></a>
</div>

如果该 token 没有后缀，则表达式的类型由类型推断决定：

<div class="rule" id="r-expr.literal.int.inference-unique-type"><a class="rule-link" href="#r-expr.literal.int.inference-unique-type" title="expr.literal.int.inference-unique-type"><span>[expr<wbr>.literal<wbr>.int<wbr>.inference-unique-type]</span></a>
</div>

- 如果可以从周围程序上下文_唯一_确定一个整数类型，则该表达式具有该类型。

<div class="rule" id="r-expr.literal.int.inference-default"><a class="rule-link" href="#r-expr.literal.int.inference-default" title="expr.literal.int.inference-default"><span>[expr<wbr>.literal<wbr>.int<wbr>.inference-default]</span></a>
</div>

- 如果程序上下文对该类型的约束不足，则默认使用有符号 32 位整数 `i32`。

<div class="rule" id="r-expr.literal.int.inference-error"><a class="rule-link" href="#r-expr.literal.int.inference-error" title="expr.literal.int.inference-error"><span>[expr<wbr>.literal<wbr>.int<wbr>.inference-error]</span></a>
</div>

- 如果程序上下文对该类型约束过度，则视为静态类型错误。

整数字面量表达式的示例：

```rust
123;                               // type i32
123i32;                            // type i32
123u32;                            // type u32
123_u32;                           // type u32
let a: u64 = 123;                  // type u64

0xff;                              // type i32
0xff_u8;                           // type u8

0o70;                              // type i32
0o70_i16;                          // type i16

0b1111_1111_1001_0000;             // type i32
0b1111_1111_1001_0000i64;          // type i64

0usize;                            // type usize
```

<div class="rule" id="r-expr.literal.int.representation"><a class="rule-link" href="#r-expr.literal.int.representation" title="expr.literal.int.representation"><span>[expr<wbr>.literal<wbr>.int<wbr>.representation]</span></a>
</div>

该表达式的值按如下方式从该 token 的字符串表示确定：

<div class="rule" id="r-expr.literal.int.radix"><a class="rule-link" href="#r-expr.literal.int.radix" title="expr.literal.int.radix"><span>[expr<wbr>.literal<wbr>.int<wbr>.radix]</span></a>
</div>

- 通过检查该字符串的前两个字符来选择整数基数，如下所示：
  
  - `0b` 表示基数 2
  - `0o` 表示基数 8
  - `0x` 表示基数 16
  - 否则基数为 10。

<div class="rule" id="r-expr.literal.int.radix-prefix-stripped"><a class="rule-link" href="#r-expr.literal.int.radix-prefix-stripped" title="expr.literal.int.radix-prefix-stripped"><span>[expr<wbr>.literal<wbr>.int<wbr>.radix-prefix-stripped]</span></a>
</div>

- 如果基数不是 10，则从该字符串中移除前两个字符。

<div class="rule" id="r-expr.literal.int.type-suffix-stripped"><a class="rule-link" href="#r-expr.literal.int.type-suffix-stripped" title="expr.literal.int.type-suffix-stripped"><span>[expr<wbr>.literal<wbr>.int<wbr>.type-suffix-stripped]</span></a>
</div>

- 从该字符串中移除任何后缀。

<div class="rule" id="r-expr.literal.int.separators-stripped"><a class="rule-link" href="#r-expr.literal.int.separators-stripped" title="expr.literal.int.separators-stripped"><span>[expr<wbr>.literal<wbr>.int<wbr>.separators-stripped]</span></a>
</div>

- 从该字符串中移除任何下划线。

<div class="rule" id="r-expr.literal.int.u128-value"><a class="rule-link" href="#r-expr.literal.int.u128-value" title="expr.literal.int.u128-value"><span>[expr<wbr>.literal<wbr>.int<wbr>.u128-value]</span></a>
</div>

- 该字符串会按所选择的基数转换为一个 `u128` 值，如同调用 [`u128::from_str_radix`](../../std/primitive.u128.html#method.from_str_radix) 一样。如果该值无法放入 `u128`，则为编译器错误。

<div class="rule" id="r-expr.literal.int.cast"><a class="rule-link" href="#r-expr.literal.int.cast" title="expr.literal.int.cast"><span>[expr<wbr>.literal<wbr>.int<wbr>.cast]</span></a>
</div>

- 该 `u128` 值通过[数值转换](operator-expr.md#numeric-cast)转换为表达式的类型。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 如果字面量的值无法放入表达式的类型，最终转换会截断该值。`rustc` 包含一个名为 `overflowing_literals` 的 [lint 检查](../attributes/diagnostics.md#lint-check-attributes)，其默认级别为 `deny`，会拒绝发生这种情况的表达式。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 例如，`-1i8` 是将[取负运算符](operator-expr.md#negation-operators)应用于字面量表达式 `1i8`，而不是单个整数字面量表达式。关于如何表示有符号类型的最小负值，见[溢出](operator-expr.md#overflow)中的说明。

</div>

<div class="rule" id="r-expr.literal.float"><a class="rule-link" href="#r-expr.literal.float" title="expr.literal.float"><span>[expr<wbr>.literal<wbr>.float]</span></a>
</div>

## 浮点数字面量表达式

<div class="rule" id="r-expr.literal.float.intro"><a class="rule-link" href="#r-expr.literal.float.intro" title="expr.literal.float.intro"><span>[expr<wbr>.literal<wbr>.float<wbr>.intro]</span></a>
</div>

浮点数字面量表达式具有以下两种形式之一：

- 单个 [FLOAT_LITERAL](../tokens.md#grammar-FLOAT_LITERAL) token
- 单个 [INTEGER_LITERAL](../tokens.md#grammar-INTEGER_LITERAL) token，它带有后缀且没有进制指示符

<div class="rule" id="r-expr.literal.float.suffix"><a class="rule-link" href="#r-expr.literal.float.suffix" title="expr.literal.float.suffix"><span>[expr<wbr>.literal<wbr>.float<wbr>.suffix]</span></a>
</div>

如果该 token 带有[后缀](../tokens.md#suffixes)，则后缀必须是某个[基本浮点数类型](../types/numeric.md#floating-point-types)的名称：`f32` 或 `f64`，且该表达式具有该类型。

<div class="rule" id="r-expr.literal.float.infer"><a class="rule-link" href="#r-expr.literal.float.infer" title="expr.literal.float.infer"><span>[expr<wbr>.literal<wbr>.float<wbr>.infer]</span></a>
</div>

如果该 token 没有后缀，则表达式的类型由类型推断决定：

<div class="rule" id="r-expr.literal.float.inference-unique-type"><a class="rule-link" href="#r-expr.literal.float.inference-unique-type" title="expr.literal.float.inference-unique-type"><span>[expr<wbr>.literal<wbr>.float<wbr>.inference-unique-type]</span></a>
</div>

- 如果可以从周围程序上下文_唯一_确定一个浮点数类型，则该表达式具有该类型。

<div class="rule" id="r-expr.literal.float.inference-default"><a class="rule-link" href="#r-expr.literal.float.inference-default" title="expr.literal.float.inference-default"><span>[expr<wbr>.literal<wbr>.float<wbr>.inference-default]</span></a>
</div>

- 如果程序上下文对该类型的约束不足，则默认使用 `f64`。

<div class="rule" id="r-expr.literal.float.inference-error"><a class="rule-link" href="#r-expr.literal.float.inference-error" title="expr.literal.float.inference-error"><span>[expr<wbr>.literal<wbr>.float<wbr>.inference-error]</span></a>
</div>

- 如果程序上下文对该类型约束过度，则视为静态类型错误。

浮点数字面量表达式的示例：

```rust
123.0f64;        // type f64
0.1f64;          // type f64
0.1f32;          // type f32
12E+99_f64;      // type f64
5f32;            // type f32
let x: f64 = 2.; // type f64
```

<div class="rule" id="r-expr.literal.float.result"><a class="rule-link" href="#r-expr.literal.float.result" title="expr.literal.float.result"><span>[expr<wbr>.literal<wbr>.float<wbr>.result]</span></a>
</div>

该表达式的值按如下方式从该 token 的字符串表示确定：

<div class="rule" id="r-expr.literal.float.type-suffix-stripped"><a class="rule-link" href="#r-expr.literal.float.type-suffix-stripped" title="expr.literal.float.type-suffix-stripped"><span>[expr<wbr>.literal<wbr>.float<wbr>.type-suffix-stripped]</span></a>
</div>

- 从该字符串中移除任何后缀。

<div class="rule" id="r-expr.literal.float.separators-stripped"><a class="rule-link" href="#r-expr.literal.float.separators-stripped" title="expr.literal.float.separators-stripped"><span>[expr<wbr>.literal<wbr>.float<wbr>.separators-stripped]</span></a>
</div>

- 从该字符串中移除任何下划线。

<div class="rule" id="r-expr.literal.float.value"><a class="rule-link" href="#r-expr.literal.float.value" title="expr.literal.float.value"><span>[expr<wbr>.literal<wbr>.float<wbr>.value]</span></a>
</div>

- 该字符串会转换为表达式的类型，如同调用 [`f32::from_str`](../../core/primitive.f32.md#method.from_str) 或 [`f64::from_str`](../../core/primitive.f64.md#method.from_str) 一样。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 例如，`-1.0` 是将[取负运算符](operator-expr.md#negation-operators)应用于字面量表达式 `1.0`，而不是单个浮点数字面量表达式。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `inf` 和 `NaN` 不是字面量 token。可以使用 [`f32::INFINITY`](../../std/primitive.f32.html#associatedconstant.INFINITY)、[`f64::INFINITY`](../../std/primitive.f64.html#associatedconstant.INFINITY)、[`f32::NAN`](../../std/primitive.f32.html#associatedconstant.NAN) 和 [`f64::NAN`](../../std/primitive.f64.html#associatedconstant.NAN) 常量来代替字面量表达式。在 `rustc` 中，大到足以被求值为无穷大的字面量会触发 `overflowing_literals` lint 检查。

</div>

<div class="rule" id="r-expr.literal.bool"><a class="rule-link" href="#r-expr.literal.bool" title="expr.literal.bool"><span>[expr<wbr>.literal<wbr>.bool]</span></a>
</div>

## 布尔字面量表达式

<div class="rule" id="r-expr.literal.bool.intro"><a class="rule-link" href="#r-expr.literal.bool.intro" title="expr.literal.bool.intro"><span>[expr<wbr>.literal<wbr>.bool<wbr>.intro]</span></a>
</div>

布尔字面量表达式由关键字 `true` 或 `false` 之一组成。

<div class="rule" id="r-expr.literal.bool.result"><a class="rule-link" href="#r-expr.literal.bool.result" title="expr.literal.bool.result"><span>[expr<wbr>.literal<wbr>.bool<wbr>.result]</span></a>
</div>

该表达式的类型是基本[布尔类型](../types/boolean.md)，其值为：

- 如果关键字是 `true`，则为 true
- 如果关键字是 `false`，则为 false