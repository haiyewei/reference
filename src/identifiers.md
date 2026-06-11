<div class="rule" id="r-ident"><a class="rule-link" href="#r-ident" title="ident"><span>[ident]</span></a>
</div>

# 标识符

<div class="rule" id="r-ident.syntax"><a class="rule-link" href="#r-ident.syntax" title="ident.syntax"><span>[ident<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>Lexer</sup>** <br> <span class="grammar-text grammar-production" id="grammar-IDENTIFIER_OR_KEYWORD" onclick="show_railroad()">[IDENTIFIER_OR_KEYWORD](identifiers.md#railroad-IDENTIFIER_OR_KEYWORD)</span> → ( <span class="grammar-text">[XID_Start](identifiers.md#grammar-XID_Start)</span> | <span class="grammar-literal">\_</span> ) <span class="grammar-text">[XID_Continue](identifiers.md#grammar-XID_Continue)</span><sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-XID_Start" onclick="show_railroad()">[XID_Start](identifiers.md#railroad-XID_Start)</span> → <span class="grammar-text">\<由 Unicode 定义的 `XID_Start`\></span>

<span class="grammar-text grammar-production" id="grammar-XID_Continue" onclick="show_railroad()">[XID_Continue](identifiers.md#railroad-XID_Continue)</span> → <span class="grammar-text">\<由 Unicode 定义的 `XID_Continue`\></span>

<span class="grammar-text grammar-production" id="grammar-RAW_IDENTIFIER" onclick="show_railroad()">[RAW_IDENTIFIER](identifiers.md#railroad-RAW_IDENTIFIER)</span> → <span class="grammar-literal">r#</span> <span class="grammar-text">[IDENTIFIER_OR_KEYWORD](identifiers.md#grammar-IDENTIFIER_OR_KEYWORD)</span>

<span class="grammar-text grammar-production" id="grammar-NON_KEYWORD_IDENTIFIER" onclick="show_railroad()">[NON_KEYWORD_IDENTIFIER](identifiers.md#railroad-NON_KEYWORD_IDENTIFIER)</span> → <span class="grammar-text">[IDENTIFIER_OR_KEYWORD](identifiers.md#grammar-IDENTIFIER_OR_KEYWORD)</span><sub class="grammar-text">但不包括[严格](keywords.md#r-lex.keywords.strict)或[保留](keywords.md#r-lex.keywords.reserved)关键字</sub>

<span class="grammar-text grammar-production" id="grammar-IDENTIFIER" onclick="show_railroad()">[IDENTIFIER](identifiers.md#railroad-IDENTIFIER)</span> → <span class="grammar-text">[NON_KEYWORD_IDENTIFIER](identifiers.md#grammar-NON_KEYWORD_IDENTIFIER)</span> | <span class="grammar-text">[RAW_IDENTIFIER](identifiers.md#grammar-RAW_IDENTIFIER)</span>

<span class="grammar-text grammar-production" id="grammar-RESERVED_RAW_IDENTIFIER" onclick="show_railroad()">[RESERVED_RAW_IDENTIFIER](identifiers.md#railroad-RESERVED_RAW_IDENTIFIER)</span> →  
    <span class="grammar-literal">r#</span> ( <span class="grammar-literal">\_</span> | <span class="grammar-literal">crate</span> | <span class="grammar-literal">self</span> | <span class="grammar-literal">Self</span> | <span class="grammar-literal">super</span> ) !<span class="grammar-text">[XID_Continue](identifiers.md#grammar-XID_Continue)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 408px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-IDENTIFIER_OR_KEYWORD"><svg class="railroad" viewBox="0 0 408 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="identifiers.md#grammar-IDENTIFIER_OR_KEYWORD">
<text class="comment" x="92" y="25">
IDENTIFIER_OR_KEYWORD</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="choice">
<path d=" M 35 66 h 24 m 92 0 h 24"/>
<a class="link" xlink:href="identifiers.md#railroad-XID_Start">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="55"/>
<text x="105" y="71">
XID_Start</text>
</g>
</a>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 9 m 116 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 87 v 0 a 12 12 0 0 0 12 12 m 28 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="88"/>
<text x="73" y="104">
_</text>
</g>
</g>
<g class="optional">
<path d=" M 185 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 140 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 209 66 h 12 m 116 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -116 m 61 0 l 5 -5 m 0 10 l -5 -5 m -61 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="identifiers.md#railroad-XID_Continue">
<g class="nonterminal">
<rect height="22" width="116" x="221" y="55"/>
<text x="279" y="71">
XID_Continue</text>
</g>
</a>
</g>
</g>
<path d=" M 175 66 h 10"/>
</g>
<path d=" M 383 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 373 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 338px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-XID_Start"><svg class="railroad" viewBox="0 0 338 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="identifiers.md#grammar-XID_Start">
<text class="comment" x="46" y="25">
XID_Start</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="268" x="35" y="42"/>
<text x="169" y="58">
`XID_Start` defined by Unicode</text>
</g>
<path d=" M 313 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 303 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 362px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-XID_Continue"><svg class="railroad" viewBox="0 0 362 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="identifiers.md#grammar-XID_Continue">
<text class="comment" x="57" y="25">
XID_Continue</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="292" x="35" y="42"/>
<text x="181" y="58">
`XID_Continue` defined by Unicode</text>
</g>
<path d=" M 337 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 327 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 312px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RAW_IDENTIFIER"><svg class="railroad" viewBox="0 0 312 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="identifiers.md#grammar-RAW_IDENTIFIER">
<text class="comment" x="64" y="25">
RAW_IDENTIFIER</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="42"/>
<text x="53" y="58">
r#</text>
</g>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER_OR_KEYWORD">
<g class="nonterminal">
<rect height="22" width="196" x="81" y="42"/>
<text x="179" y="58">
IDENTIFIER_OR_KEYWORD</text>
</g>
</a>
<path d=" M 71 53 h 10"/>
</g>
<path d=" M 287 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 277 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 348px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-NON_KEYWORD_IDENTIFIER"><svg class="railroad" viewBox="0 0 348 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="identifiers.md#grammar-NON_KEYWORD_IDENTIFIER">
<text class="comment" x="95" y="25">
NON_KEYWORD_IDENTIFIER</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="labeledbox">
<rect height="66" width="278" x="35" y="42"/>
<path d=" M 35 89 h 8 m 196 0 h 74 m -34 0 l -5 -5 m 0 10 l 5 -5 m 34 0"/>
<text class="comment" x="174" y="65">
except a strict or reserved keyword</text>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER_OR_KEYWORD">
<g class="nonterminal">
<rect height="22" width="196" x="43" y="78"/>
<text x="141" y="94">
IDENTIFIER_OR_KEYWORD</text>
</g>
</a>
</g>
<path d=" M 323 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 313 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 322px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-IDENTIFIER"><svg class="railroad" viewBox="0 0 322 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="identifiers.md#grammar-IDENTIFIER">
<text class="comment" x="50" y="25">
IDENTIFIER</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 204 0 h 24"/>
<a class="link" xlink:href="identifiers.md#railroad-NON_KEYWORD_IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="204" x="59" y="42"/>
<text x="161" y="58">
NON_KEYWORD_IDENTIFIER</text>
</g>
</a>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 228 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 132 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="identifiers.md#railroad-RAW_IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="75"/>
<text x="125" y="91">
RAW_IDENTIFIER</text>
</g>
</a>
</g>
<path d=" M 297 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 287 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 366px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RESERVED_RAW_IDENTIFIER"><svg class="railroad" viewBox="0 0 366 242" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="identifiers.md#grammar-RESERVED_RAW_IDENTIFIER">
<text class="comment" x="99" y="25">
RESERVED_RAW_IDENTIFIER</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="78"/>
<text x="53" y="94">
r#</text>
</g>
<g class="choice">
<path d=" M 81 89 h 24 m 28 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="105" y="78"/>
<text x="119" y="94">
_</text>
</g>
<path d=" M 81 89 a 12 12 0 0 1 12 12 v 9 m 84 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 93 110 v 33 m 84 0 v -33"/>
<path d=" M 93 143 v 33 m 84 0 v -33"/>
<path d=" M 93 176 v 33 m 84 0 v -33"/>
<path d=" M 93 110 v 0 a 12 12 0 0 0 12 12 m 60 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="105" y="111"/>
<text x="135" y="127">
crate</text>
</g>
<path d=" M 93 143 v 0 a 12 12 0 0 0 12 12 m 52 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="105" y="144"/>
<text x="131" y="160">
self</text>
</g>
<path d=" M 93 176 v 0 a 12 12 0 0 0 12 12 m 52 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="105" y="177"/>
<text x="131" y="193">
Self</text>
</g>
<path d=" M 93 209 v 0 a 12 12 0 0 0 12 12 m 60 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="105" y="210"/>
<text x="135" y="226">
super</text>
</g>
</g>
<g class="labeledbox">
<rect height="66" width="132" x="199" y="42"/>
<path d=" M 199 89 h 8 m 116 0 h 8"/>
<text class="comment" x="264" y="65">
not followed by</text>
<a class="link" xlink:href="identifiers.md#railroad-XID_Continue">
<g class="nonterminal">
<rect height="22" width="116" x="207" y="78"/>
<text x="265" y="94">
XID_Continue</text>
</g>
</a>
</g>
<path d=" M 71 89 h 10"/>
<path d=" M 189 89 h 10"/>
</g>
<path d=" M 341 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 331 89 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<!-- When updating the version, update the UAX links, too. -->

<div class="rule" id="r-ident.unicode"><a class="rule-link" href="#r-ident.unicode" title="ident.unicode"><span>[ident<wbr>.unicode]</span></a>
</div>

标识符遵循 [Unicode Standard Annex #31](https://www.unicode.org/reports/tr31/tr31-43.html) 中针对 Unicode 17.0 版本的规范，并带有下文描述的补充。标识符的一些示例：

- `foo`
- `_identifier`
- `r#true`
- `Москва`
- `東京`

<div class="rule" id="r-ident.profile"><a class="rule-link" href="#r-ident.profile" title="ident.profile"><span>[ident<wbr>.profile]</span></a>
</div>

所使用的 UAX #31 profile 是：

- Start := [`XID_Start`](http://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5B%3AXID_Start%3A%5D&abb=on&g=&i=)，加上下划线字符 (U+005F)
- Continue := [`XID_Continue`](http://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5B%3AXID_Continue%3A%5D&abb=on&g=&i=)
- Medial := 空

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 以下划线开头的标识符通常用于表示有意不使用的标识符，并会抑制 `rustc` 中的未使用警告。

</div>

<div class="rule" id="r-ident.keyword"><a class="rule-link" href="#r-ident.keyword" title="ident.keyword"><span>[ident<wbr>.keyword]</span></a>
</div>

如果没有下文[原始标识符](#raw-identifiers)中描述的 `r#` 前缀，标识符不能是[严格关键字](keywords.md#strict-keywords)或[保留关键字](keywords.md#reserved-keywords)。

<div class="rule" id="r-ident.zero-width-chars"><a class="rule-link" href="#r-ident.zero-width-chars" title="ident.zero-width-chars"><span>[ident<wbr>.zero-width-chars]</span></a>
</div>

标识符中不允许出现零宽不连字字符（ZWNJ U+200C）和零宽连字字符（ZWJ U+200D）。

<div class="rule" id="r-ident.ascii-limitations"><a class="rule-link" href="#r-ident.ascii-limitations" title="ident.ascii-limitations"><span>[ident<wbr>.ascii-limitations]</span></a>
</div>

在以下情形中，标识符被限制为 [`XID_Start`](http://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5B%3AXID_Start%3A%5D&abb=on&g=&i=) 和 [`XID_Continue`](http://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5B%3AXID_Continue%3A%5D&abb=on&g=&i=) 的 ASCII 子集：

- [`extern crate`](items/extern-crates.md) 声明（[AsClause](items/extern-crates.md#grammar-AsClause) 标识符除外）
- [路径](paths.md)中引用的外部 crate 名称
- 在没有 [`path` 属性](items/modules.md#the-path-attribute)的情况下从文件系统加载的[模块](items/modules.md)名称
- 带有 [`no_mangle`](abi.md#the-no_mangle-attribute) 属性的项
- [外部块](items/external-blocks.md)中的项名称

<div class="rule" id="r-ident.normalization"><a class="rule-link" href="#r-ident.normalization" title="ident.normalization"><span>[ident<wbr>.normalization]</span></a>
</div>

## 规范化

标识符会使用 [Unicode Standard Annex #15](https://www.unicode.org/reports/tr15/tr15-57.html) 中定义的规范化形式 C（NFC）进行规范化。如果两个标识符的 NFC 形式相等，则这两个标识符相等。

[过程宏](procedural-macros.md)和[声明式宏](macros-by-example.md)在其输入中接收规范化后的标识符。

<div class="rule" id="r-ident.raw"><a class="rule-link" href="#r-ident.raw" title="ident.raw"><span>[ident<wbr>.raw]</span></a>
</div>

## 原始标识符

<div class="rule" id="r-ident.raw.intro"><a class="rule-link" href="#r-ident.raw.intro" title="ident.raw.intro"><span>[ident<wbr>.raw<wbr>.intro]</span></a>
</div>

原始标识符类似普通标识符，但带有 `r#` 前缀。（注意，`r#` 前缀不包含在实际标识符中。）

<div class="rule" id="r-ident.raw.allowed"><a class="rule-link" href="#r-ident.raw.allowed" title="ident.raw.allowed"><span>[ident<wbr>.raw<wbr>.allowed]</span></a>
</div>

与普通标识符不同，原始标识符可以是任意严格关键字或保留关键字，但上面对 `RAW_IDENTIFIER` 列出的那些除外。

<div class="rule" id="r-ident.raw.reserved"><a class="rule-link" href="#r-ident.raw.reserved" title="ident.raw.reserved"><span>[ident<wbr>.raw<wbr>.reserved]</span></a>
</div>

使用 [RESERVED_RAW_IDENTIFIER](identifiers.md#grammar-RESERVED_RAW_IDENTIFIER) 词法单元是错误。