<div class="rule" id="r-input"><a class="rule-link" href="#r-input" title="input"><span>[input]</span></a>
</div>

# 输入格式

<div class="rule" id="r-input.syntax"><a class="rule-link" href="#r-input.syntax" title="input.syntax"><span>[input<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>Lexer</sup>** <br> <span class="grammar-text grammar-production" id="grammar-CHAR" onclick="show_railroad()">[CHAR](input-format.md#railroad-CHAR)</span> → \[U+0000-U+D7FF U+E000-U+10FFFF\] <span class="grammar-comment">//  Unicode 标量值</span>

<span class="grammar-text grammar-production" id="grammar-ASCII" onclick="show_railroad()">[ASCII](input-format.md#railroad-ASCII)</span> → \[U+0000-U+007F\]

<span class="grammar-text grammar-production" id="grammar-NUL" onclick="show_railroad()">[NUL](input-format.md#railroad-NUL)</span> → U+0000

<span class="grammar-text grammar-production" id="grammar-EOF" onclick="show_railroad()">[EOF](input-format.md#railroad-EOF)</span> → !<span class="grammar-text">[CHAR](input-format.md#grammar-CHAR)</span> <span class="grammar-comment">//  文件或输入结束</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 258px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CHAR"><svg class="railroad" viewBox="0 0 258 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="input-format.md#grammar-CHAR">
<text class="comment" x="29" y="25">
CHAR</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="choice">
<path d=" M 35 53 h 24 m 124 0 h 40"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="124" x="59" y="42"/>
<text x="121" y="58">
U+0000-U+D7FF</text>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 164 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 140 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="140" x="59" y="75"/>
<text x="129" y="91">
U+E000-U+10FFFF</text>
</g>
</g>
</g>
<path d=" M 233 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 223 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 194px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ASCII"><svg class="railroad" viewBox="0 0 194 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="input-format.md#grammar-ASCII">
<text class="comment" x="32" y="25">
ASCII</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 0 m 124 0 h 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="124" x="35" y="42"/>
<text x="97" y="58">
U+0000-U+007F</text>
</g>
</g>
<path d=" M 169 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 159 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 138px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-NUL"><svg class="railroad" viewBox="0 0 138 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="input-format.md#grammar-NUL">
<text class="comment" x="25" y="25">
NUL</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="35" y="42"/>
<text x="69" y="58">
U+0000</text>
</g>
<path d=" M 113 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 103 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 201px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-EOF"><svg class="railroad" viewBox="0 0 201 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="input-format.md#grammar-EOF">
<text class="comment" x="25" y="25">
EOF</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="131" x="35" y="42"/>
<path d=" M 35 89 h 8 m 52 0 h 71 m -32 0 l -5 -5 m 0 10 l 5 -5 m 32 0"/>
<text class="comment" x="100" y="65">
not followed by</text>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="43" y="78"/>
<text x="69" y="94">
CHAR</text>
</g>
</a>
</g>
</g>
<path d=" M 176 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 166 89 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-input.intro"><a class="rule-link" href="#r-input.intro" title="input.intro"><span>[input<wbr>.intro]</span></a>
</div>

本章描述如何将源文件解释为一系列词法单元。

关于程序如何组织成文件，参见 [crate 和源文件](crates-and-source-files.md)。

<div class="rule" id="r-input.encoding"><a class="rule-link" href="#r-input.encoding" title="input.encoding"><span>[input<wbr>.encoding]</span></a>
</div>

## 源码编码

<div class="rule" id="r-input.encoding.utf8"><a class="rule-link" href="#r-input.encoding.utf8" title="input.encoding.utf8"><span>[input<wbr>.encoding<wbr>.utf8]</span></a>
</div>

每个源文件都被解释为一个以 UTF-8 编码的 Unicode 字符序列。

<div class="rule" id="r-input.encoding.invalid"><a class="rule-link" href="#r-input.encoding.invalid" title="input.encoding.invalid"><span>[input<wbr>.encoding<wbr>.invalid]</span></a>
</div>

如果文件不是有效的 UTF-8，则为错误。

<div class="rule" id="r-input.byte-order-mark"><a class="rule-link" href="#r-input.byte-order-mark" title="input.byte-order-mark"><span>[input<wbr>.byte-order-mark]</span></a>
</div>

## 字节顺序标记移除

如果序列中的第一个字符是 `U+FEFF` ([BYTE ORDER MARK](https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8))，则移除它。

<div class="rule" id="r-input.crlf"><a class="rule-link" href="#r-input.crlf" title="input.crlf"><span>[input<wbr>.crlf]</span></a>
</div>

## CRLF 规范化

每一对由 `U+000D` (CR) 后紧跟 `U+000A` (LF) 组成的字符都会替换为单个 `U+000A` (LF)。此操作只发生一次，而非反复进行，因此在规范化之后，输入中仍可能存在 `U+000D` (CR) 后紧跟 `U+000A` (LF) 的情况（例如原始输入包含 "CR CR LF LF" 时）。

字符 `U+000D` (CR) 的其他出现位置会保留原样（它们会被视为 [空白](whitespace.md)）。

<div class="rule" id="r-input.shebang"><a class="rule-link" href="#r-input.shebang" title="input.shebang"><span>[input<wbr>.shebang]</span></a>
</div>

## Shebang 移除

<div class="rule" id="r-input.shebang.removal"><a class="rule-link" href="#r-input.shebang.removal" title="input.shebang.removal"><span>[input<wbr>.shebang<wbr>.removal]</span></a>
</div>

如果存在 [shebang](shebang.md)，则会从输入序列中移除它（因而会忽略它）。

<div class="rule" id="r-input.tokenization"><a class="rule-link" href="#r-input.tokenization" title="input.tokenization"><span>[input<wbr>.tokenization]</span></a>
</div>

## 词法单元化

然后，得到的字符序列会按照本章其余部分的描述转换为词法单元。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 标准库 [`include!`](../core/macro.include.html) 宏会对其读取的文件应用以下转换：
 > 
 > - 字节顺序标记移除。
 > - CRLF 规范化。
 > - 在条目上下文中调用时移除 shebang（区别于表达式或语句上下文）。
 > 
 > [`include_str!`](../core/macro.include_str.html) 和 [`include_bytes!`](../core/macro.include_bytes.html) 宏不会应用这些转换。

</div>
