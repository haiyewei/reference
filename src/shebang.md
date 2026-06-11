<div class="rule" id="r-shebang"><a class="rule-link" href="#r-shebang" title="shebang"><span>[shebang]</span></a>
</div>

# Shebang

<div class="rule" id="r-shebang.intro"><a class="rule-link" href="#r-shebang.intro" title="shebang.intro"><span>[shebang<wbr>.intro]</span></a>
</div>

_[shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))_ 是一个可选的行，通常在类 Unix 系统中用于指定执行该文件的解释器。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > <!-- ignore: tests don't like shebang -->
 > 
 > ```rust,ignore
 > #!/usr/bin/env rustx
 > 
 > fn main() {
 >     println!("Hello!");
 > }
 > ```

</div>

<div class="rule" id="r-shebang.syntax"><a class="rule-link" href="#r-shebang.syntax" title="shebang.syntax"><span>[shebang<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>词法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-SHEBANG" onclick="show_railroad()">[SHEBANG](shebang.md#railroad-SHEBANG)</span> →  
    <span class="grammar-literal">\#!</span> !( ( <span class="grammar-text">[WHITESPACE](whitespace.md#grammar-WHITESPACE)</span> | <span class="grammar-text">[LINE_COMMENT](comments.md#grammar-LINE_COMMENT)</span> | <span class="grammar-text">[BLOCK_COMMENT](comments.md#grammar-BLOCK_COMMENT)</span> )<sup>\*</sup> <span class="grammar-literal">\[</span> )  
    ~<span class="grammar-text">[LF](whitespace.md#grammar-LF)</span><sup>\*</sup> ( <span class="grammar-text">[LF](whitespace.md#grammar-LF)</span> | <span class="grammar-text">[EOF](input-format.md#grammar-EOF)</span> )

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 799px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-SHEBANG"><svg class="railroad" viewBox="0 0 799 240" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="shebang.md#grammar-SHEBANG">
<text class="comment" x="39" y="25">
SHEBANG</text>
</a>
<g class="sequence">
<path d=" M 10 135 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="124"/>
<text x="53" y="140">
#!</text>
</g>
<g class="labeledbox">
<rect height="155" width="298" x="81" y="75"/>
<path d=" M 81 135 h 8 m 282 0 h 8"/>
<text class="comment" x="146" y="98">
not followed by</text>
<g class="sequence">
<g class="optional">
<path d=" M 89 135 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 196 m -95 0 l -5 -5 m 0 10 l 5 -5 m 95 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 113 135 h 12 m 172 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 63 m 0 -28 l -5 -5 m 10 0 l -5 5 m 0 28 a 12 12 0 0 1 -12 12 m 0 0 h -172 m 89 0 l 5 -5 m 0 10 l -5 -5 m -89 0 a 12 12 0 0 1 -12 -12 v -63 m 0 34 l -5 5 m 10 0 l -5 -5 m 0 -34 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 125 135 h 24 m 100 0 h 48"/>
<a class="link" xlink:href="whitespace.md#railroad-WHITESPACE">
<g class="nonterminal">
<rect height="22" width="100" x="149" y="124"/>
<text x="199" y="140">
WHITESPACE</text>
</g>
</a>
<path d=" M 125 135 a 12 12 0 0 1 12 12 v 9 m 148 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 137 156 v 33 m 148 0 v -33"/>
<path d=" M 137 156 v 0 a 12 12 0 0 0 12 12 m 116 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="comments.md#railroad-LINE_COMMENT">
<g class="nonterminal">
<rect height="22" width="116" x="149" y="157"/>
<text x="207" y="173">
LINE_COMMENT</text>
</g>
</a>
<path d=" M 137 189 v 0 a 12 12 0 0 0 12 12 m 124 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="comments.md#railroad-BLOCK_COMMENT">
<g class="nonterminal">
<rect height="22" width="124" x="149" y="190"/>
<text x="211" y="206">
BLOCK_COMMENT</text>
</g>
</a>
</g>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="343" y="124"/>
<text x="357" y="140">
[</text>
</g>
<path d=" M 333 135 h 10"/>
</g>
</g>
<g class="optional">
<path d=" M 389 135 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -69 m 0 37 l -5 5 m 10 0 l -5 -5 m 0 -37 a 12 12 0 0 1 12 -12 h 225 m -109 0 l -5 -5 m 0 10 l 5 -5 m 109 0 a 12 12 0 0 1 12 12 v 69 m 0 -31 l -5 -5 m 10 0 l -5 5 m 0 31 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 413 135 h 12 m 201 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 5 a 12 12 0 0 1 -12 12 m 0 0 h -201 m 103 0 l 5 -5 m 0 10 l -5 -5 m -103 0 a 12 12 0 0 1 -12 -12 v -5 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="labeledbox exceptbox">
<rect height="100" width="201" x="425" y="54"/>
<path d=" M 425 135 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="525" y="77">
⚠️ with the exception of</text>
<a class="link" xlink:href="whitespace.md#railroad-LF">
<g class="nonterminal">
<rect height="22" width="36" x="433" y="94"/>
<text x="451" y="110">
LF</text>
</g>
</a>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="433" y="124"/>
<text x="459" y="140">
CHAR</text>
</g>
</a>
</g>
</g>
</g>
<g class="choice">
<path d=" M 672 135 h 24 m 36 0 h 32"/>
<a class="link" xlink:href="whitespace.md#railroad-LF">
<g class="nonterminal">
<rect height="22" width="36" x="696" y="124"/>
<text x="714" y="140">
LF</text>
</g>
</a>
<path d=" M 672 135 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 684 156 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="input-format.md#railroad-EOF">
<g class="nonterminal">
<rect height="22" width="44" x="696" y="157"/>
<text x="718" y="173">
EOF</text>
</g>
</a>
</g>
<path d=" M 71 135 h 10"/>
<path d=" M 379 135 h 10"/>
<path d=" M 662 135 h 10"/>
</g>
<path d=" M 774 135 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 135 h 10"/>
<path d=" M 764 135 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-shebang.syntax-description"><a class="rule-link" href="#r-shebang.syntax-description" title="shebang.syntax-description"><span>[shebang<wbr>.syntax-description]</span></a>
</div>

shebang 以字符 `#!` 开始，并延伸到第一个 `U+000A` (LF)，如果不存在 LF，则延伸到 EOF。如果 `#!` 字符后跟着 `[`（忽略中间出现的任何 [注释](comments.md) 或[空白](whitespace.md)），则该行不被视为 shebang（以避免与[内部属性](attributes.md)产生歧义）。

<div class="rule" id="r-shebang.position"><a class="rule-link" href="#r-shebang.position" title="shebang.position"><span>[shebang<wbr>.position]</span></a>
</div>

shebang 可以紧接着出现在文件开头，或出现在可选的[字节顺序标记](https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8)之后。