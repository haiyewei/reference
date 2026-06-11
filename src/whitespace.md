<div class="rule" id="r-lex.whitespace"><a class="rule-link" href="#r-lex.whitespace" title="lex.whitespace"><span>[lex<wbr>.whitespace]</span></a>
</div>

# 空白

<div class="rule" id="r-whitespace.syntax"><a class="rule-link" href="#r-whitespace.syntax" title="whitespace.syntax"><span>[whitespace<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>Lexer</sup>** <br> <span class="grammar-text grammar-production" id="grammar-WHITESPACE" onclick="show_railroad()">[WHITESPACE](whitespace.md#railroad-WHITESPACE)</span> →  
      U+0009 <span class="grammar-comment">//  水平制表符，`'\t'`</span>  
    \| U+000A <span class="grammar-comment">//  换行，`'\n'`</span>  
    \| U+000B <span class="grammar-comment">//  垂直制表符</span>  
    \| U+000C <span class="grammar-comment">//  换页符</span>  
    \| U+000D <span class="grammar-comment">//  回车，`'\r'`</span>  
    \| U+0020 <span class="grammar-comment">//  空格，`' '`</span>  
    \| U+0085 <span class="grammar-comment">//  下一行</span>  
    \| U+200E <span class="grammar-comment">//  从左到右标记</span>  
    \| U+200F <span class="grammar-comment">//  从右到左标记</span>  
    \| U+2028 <span class="grammar-comment">//  行分隔符</span>  
    \| U+2029 <span class="grammar-comment">//  段落分隔符</span>

<span class="grammar-text grammar-production" id="grammar-TAB" onclick="show_railroad()">[TAB](whitespace.md#railroad-TAB)</span> → U+0009 <span class="grammar-comment">//  水平制表符，`'\t'`</span>

<span class="grammar-text grammar-production" id="grammar-LF" onclick="show_railroad()">[LF](whitespace.md#railroad-LF)</span> → U+000A <span class="grammar-comment">//  换行，`'\n'`</span>

<span class="grammar-text grammar-production" id="grammar-CR" onclick="show_railroad()">[CR](whitespace.md#railroad-CR)</span> → U+000D <span class="grammar-comment">//  回车，`'\r'`</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 186px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-WHITESPACE"><svg class="railroad" viewBox="0 0 186 404" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="whitespace.md#grammar-WHITESPACE">
<text class="comment" x="50" y="25">
WHITESPACE</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 68 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="42"/>
<text x="93" y="58">
U+0009</text>
</g>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 92 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 92 0 v -33"/>
<path d=" M 47 107 v 33 m 92 0 v -33"/>
<path d=" M 47 140 v 33 m 92 0 v -33"/>
<path d=" M 47 173 v 33 m 92 0 v -33"/>
<path d=" M 47 206 v 33 m 92 0 v -33"/>
<path d=" M 47 239 v 33 m 92 0 v -33"/>
<path d=" M 47 272 v 33 m 92 0 v -33"/>
<path d=" M 47 305 v 33 m 92 0 v -33"/>
<path d=" M 47 338 v 33 m 92 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 68 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="75"/>
<text x="93" y="91">
U+000A</text>
</g>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 68 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="108"/>
<text x="93" y="124">
U+000B</text>
</g>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 68 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="141"/>
<text x="93" y="157">
U+000C</text>
</g>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 68 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="174"/>
<text x="93" y="190">
U+000D</text>
</g>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 68 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="207"/>
<text x="93" y="223">
U+0020</text>
</g>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 68 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="240"/>
<text x="93" y="256">
U+0085</text>
</g>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 68 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="273"/>
<text x="93" y="289">
U+200E</text>
</g>
</g>
<path d=" M 47 305 v 0 a 12 12 0 0 0 12 12 m 68 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="306"/>
<text x="93" y="322">
U+200F</text>
</g>
</g>
<path d=" M 47 338 v 0 a 12 12 0 0 0 12 12 m 68 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="339"/>
<text x="93" y="355">
U+2028</text>
</g>
</g>
<path d=" M 47 371 v 0 a 12 12 0 0 0 12 12 m 68 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="372"/>
<text x="93" y="388">
U+2029</text>
</g>
</g>
</g>
<path d=" M 161 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 151 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 138px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TAB"><svg class="railroad" viewBox="0 0 138 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="whitespace.md#grammar-TAB">
<text class="comment" x="25" y="25">
TAB</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="35" y="42"/>
<text x="69" y="58">
U+0009</text>
</g>
</g>
<path d=" M 113 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 103 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 138px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LF"><svg class="railroad" viewBox="0 0 138 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="whitespace.md#grammar-LF">
<text class="comment" x="22" y="25">
LF</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="35" y="42"/>
<text x="69" y="58">
U+000A</text>
</g>
</g>
<path d=" M 113 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 103 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 138px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CR"><svg class="railroad" viewBox="0 0 138 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="whitespace.md#grammar-CR">
<text class="comment" x="22" y="25">
CR</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="35" y="42"/>
<text x="69" y="58">
U+000D</text>
</g>
</g>
<path d=" M 113 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 103 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-lex.whitespace.intro"><a class="rule-link" href="#r-lex.whitespace.intro" title="lex.whitespace.intro"><span>[lex<wbr>.whitespace<wbr>.intro]</span></a>
</div>

空白是任何非空字符串，且该字符串仅包含具有 [`Pattern_White_Space`](https://www.unicode.org/reports/tr31/) Unicode 属性的字符。

<div class="rule" id="r-lex.whitespace.token-sep"><a class="rule-link" href="#r-lex.whitespace.token-sep" title="lex.whitespace.token-sep"><span>[lex<wbr>.whitespace<wbr>.token-sep]</span></a>
</div>

Rust 是一种“自由格式”语言，这意味着所有形式的空白在语法中仅用于分隔 _token_，而没有语义意义。

<div class="rule" id="r-lex.whitespace.replacement"><a class="rule-link" href="#r-lex.whitespace.replacement" title="lex.whitespace.replacement"><span>[lex<wbr>.whitespace<wbr>.replacement]</span></a>
</div>

如果将每个空白元素替换为任何其他合法的空白元素，例如单个空格字符，Rust 程序的含义保持不变。