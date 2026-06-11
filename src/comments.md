<div class="rule" id="r-comments"><a class="rule-link" href="#r-comments" title="comments"><span>[comments]</span></a>
</div>

# 注释

<div class="rule" id="r-comments.syntax"><a class="rule-link" href="#r-comments.syntax" title="comments.syntax"><span>[comments<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>Lexer</sup>** <br> <span class="grammar-text grammar-production" id="grammar-COMMENT" onclick="show_railroad()">[COMMENT](comments.md#railroad-COMMENT)</span> →  
      <span class="grammar-text">[LINE_COMMENT](comments.md#grammar-LINE_COMMENT)</span>  
    \| <span class="grammar-text">[INNER_LINE_DOC](comments.md#grammar-INNER_LINE_DOC)</span>  
    \| <span class="grammar-text">[OUTER_LINE_DOC](comments.md#grammar-OUTER_LINE_DOC)</span>  
    \| <span class="grammar-text">[INNER_BLOCK_DOC](comments.md#grammar-INNER_BLOCK_DOC)</span>  
    \| <span class="grammar-text">[OUTER_BLOCK_DOC](comments.md#grammar-OUTER_BLOCK_DOC)</span>  
    \| <span class="grammar-text">[BLOCK_COMMENT](comments.md#grammar-BLOCK_COMMENT)</span>

<span class="grammar-text grammar-production" id="grammar-LINE_COMMENT" onclick="show_railroad()">[LINE_COMMENT](comments.md#railroad-LINE_COMMENT)</span> →  
      <span class="grammar-literal">//</span> ( ~\[<span class="grammar-literal">/</span> <span class="grammar-literal">!</span> [LF](whitespace.md#grammar-LF)\] | <span class="grammar-literal">//</span> ) ~<span class="grammar-text">[LF](whitespace.md#grammar-LF)</span><sup>\*</sup>  
    \| <span class="grammar-literal">//</span> <span class="grammar-text">[EOF](input-format.md#grammar-EOF)</span>  
    \| <span class="grammar-literal">//</span><sub class="grammar-text">紧接 LF</sub>

<span class="grammar-text grammar-production" id="grammar-BLOCK_COMMENT" onclick="show_railroad()">[BLOCK_COMMENT](comments.md#railroad-BLOCK_COMMENT)</span> →  
    <span class="grammar-literal">/\*</span> ^  
      ( <span class="grammar-text">[BLOCK_COMMENT_OR_DOC](comments.md#grammar-BLOCK_COMMENT_OR_DOC)</span> | ( !<span class="grammar-literal">\*/</span> <span class="grammar-text">[CHAR](input-format.md#grammar-CHAR)</span> ) )<sup>\*</sup>  
    <span class="grammar-literal">\*/</span>

<span class="grammar-text grammar-production" id="grammar-INNER_LINE_DOC" onclick="show_railroad()">[INNER_LINE_DOC](comments.md#railroad-INNER_LINE_DOC)</span> →  
    <span class="grammar-literal">//!</span> ^ <span class="grammar-text">[LINE_DOC_COMMENT_CONTENT](comments.md#grammar-LINE_DOC_COMMENT_CONTENT)</span> ( <span class="grammar-text">[LF](whitespace.md#grammar-LF)</span> | <span class="grammar-text">[EOF](input-format.md#grammar-EOF)</span> )

<span class="grammar-text grammar-production" id="grammar-LINE_DOC_COMMENT_CONTENT" onclick="show_railroad()">[LINE_DOC_COMMENT_CONTENT](comments.md#railroad-LINE_DOC_COMMENT_CONTENT)</span> → ( !<span class="grammar-text">[CR](whitespace.md#grammar-CR)</span> ~<span class="grammar-text">[LF](whitespace.md#grammar-LF)</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-INNER_BLOCK_DOC" onclick="show_railroad()">[INNER_BLOCK_DOC](comments.md#railroad-INNER_BLOCK_DOC)</span> →  
    <span class="grammar-literal">/\*!</span> ^ ( <span class="grammar-text">[BLOCK_COMMENT_OR_DOC](comments.md#grammar-BLOCK_COMMENT_OR_DOC)</span> | <span class="grammar-text">[BLOCK_CHAR](comments.md#grammar-BLOCK_CHAR)</span> )<sup>\*</sup> <span class="grammar-literal">\*/</span>

<span class="grammar-text grammar-production" id="grammar-OUTER_LINE_DOC" onclick="show_railroad()">[OUTER_LINE_DOC](comments.md#railroad-OUTER_LINE_DOC)</span> →  
    <span class="grammar-literal">///</span> ^ <span class="grammar-text">[LINE_DOC_COMMENT_CONTENT](comments.md#grammar-LINE_DOC_COMMENT_CONTENT)</span> ( <span class="grammar-text">[LF](whitespace.md#grammar-LF)</span> | <span class="grammar-text">[EOF](input-format.md#grammar-EOF)</span> )

<span class="grammar-text grammar-production" id="grammar-OUTER_BLOCK_DOC" onclick="show_railroad()">[OUTER_BLOCK_DOC](comments.md#railroad-OUTER_BLOCK_DOC)</span> →  
    <span class="grammar-literal">/\*\*</span> !\[<span class="grammar-literal">\*</span> <span class="grammar-literal">/</span>\]  
      ^  
      ( ~<span class="grammar-literal">\*</span> | <span class="grammar-text">[BLOCK_COMMENT_OR_DOC](comments.md#grammar-BLOCK_COMMENT_OR_DOC)</span> )  
      ( <span class="grammar-text">[BLOCK_COMMENT_OR_DOC](comments.md#grammar-BLOCK_COMMENT_OR_DOC)</span> | <span class="grammar-text">[BLOCK_CHAR](comments.md#grammar-BLOCK_CHAR)</span> )<sup>\*</sup>  
    <span class="grammar-literal">\*/</span>

<span class="grammar-text grammar-production" id="grammar-BLOCK_CHAR" onclick="show_railroad()">[BLOCK_CHAR](comments.md#railroad-BLOCK_CHAR)</span> → ( !( <span class="grammar-literal">\*/</span> | <span class="grammar-text">[CR](whitespace.md#grammar-CR)</span> ) <span class="grammar-text">[CHAR](input-format.md#grammar-CHAR)</span> )

<span class="grammar-text grammar-production" id="grammar-BLOCK_COMMENT_OR_DOC" onclick="show_railroad()">[BLOCK_COMMENT_OR_DOC](comments.md#railroad-BLOCK_COMMENT_OR_DOC)</span> →  
      <span class="grammar-text">[INNER_BLOCK_DOC](comments.md#grammar-INNER_BLOCK_DOC)</span>  
    \| <span class="grammar-text">[OUTER_BLOCK_DOC](comments.md#grammar-OUTER_BLOCK_DOC)</span>  
    \| <span class="grammar-text">[BLOCK_COMMENT](comments.md#grammar-BLOCK_COMMENT)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 258px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-COMMENT"><svg class="railroad" viewBox="0 0 258 239" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="comments.md#grammar-COMMENT">
<text class="comment" x="39" y="25">
COMMENT</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 116 0 h 48"/>
<g class="sequence">
<a class="link" xlink:href="comments.md#railroad-LINE_COMMENT">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="42"/>
<text x="117" y="58">
LINE_COMMENT</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 164 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 164 0 v -33"/>
<path d=" M 47 107 v 33 m 164 0 v -33"/>
<path d=" M 47 140 v 33 m 164 0 v -33"/>
<path d=" M 47 173 v 33 m 164 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 132 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="comments.md#railroad-INNER_LINE_DOC">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="75"/>
<text x="125" y="91">
INNER_LINE_DOC</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 132 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="comments.md#railroad-OUTER_LINE_DOC">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="108"/>
<text x="125" y="124">
OUTER_LINE_DOC</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 140 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="comments.md#railroad-INNER_BLOCK_DOC">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="141"/>
<text x="129" y="157">
INNER_BLOCK_DOC</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 140 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="comments.md#railroad-OUTER_BLOCK_DOC">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="174"/>
<text x="129" y="190">
OUTER_BLOCK_DOC</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 124 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="comments.md#railroad-BLOCK_COMMENT">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="207"/>
<text x="121" y="223">
BLOCK_COMMENT</text>
</g>
</a>
</g>
<path d=" M 233 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 223 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 696px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LINE_COMMENT"><svg class="railroad" viewBox="0 0 696 360" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="comments.md#grammar-LINE_COMMENT">
<text class="comment" x="57" y="25">
LINE_COMMENT</text>
</a>
<g class="sequence">
<path d=" M 10 189 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 189 h 24 m 578 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="178"/>
<text x="77" y="194">
//</text>
</g>
<g class="choice">
<path d=" M 105 189 h 24 m 201 0 h 24"/>
<g class="labeledbox exceptbox">
<rect height="166" width="201" x="129" y="42"/>
<path d=" M 129 189 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="229" y="65">
⚠️ with the exception of</text>
<g class="choice">
<path d=" M 137 93 h 24 m 28 0 h 32"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="161" y="82"/>
<text x="175" y="98">
/</text>
</g>
<path d=" M 137 93 a 12 12 0 0 1 12 12 v 9 m 60 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 149 114 v 33 m 60 0 v -33"/>
<path d=" M 149 114 v 0 a 12 12 0 0 0 12 12 m 28 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="161" y="115"/>
<text x="175" y="131">
!</text>
</g>
<path d=" M 149 147 v 0 a 12 12 0 0 0 12 12 m 36 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="whitespace.md#railroad-LF">
<g class="nonterminal">
<rect height="22" width="36" x="161" y="148"/>
<text x="179" y="164">
LF</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="137" y="178"/>
<text x="163" y="194">
CHAR</text>
</g>
</a>
</g>
<path d=" M 105 189 a 12 12 0 0 1 12 12 v 17 m 225 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 117 218 v 0 a 12 12 0 0 0 12 12 m 36 0 h 165 m -79 0 l -5 -5 m 0 10 l 5 -5 m 79 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="129" y="219"/>
<text x="147" y="235">
//</text>
</g>
</g>
<g class="optional">
<path d=" M 364 189 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -69 m 0 37 l -5 5 m 10 0 l -5 -5 m 0 -37 a 12 12 0 0 1 12 -12 h 225 m -109 0 l -5 -5 m 0 10 l 5 -5 m 109 0 a 12 12 0 0 1 12 12 v 69 m 0 -31 l -5 -5 m 10 0 l -5 5 m 0 31 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 388 189 h 12 m 201 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 5 a 12 12 0 0 1 -12 12 m 0 0 h -201 m 103 0 l 5 -5 m 0 10 l -5 -5 m -103 0 a 12 12 0 0 1 -12 -12 v -5 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="labeledbox exceptbox">
<rect height="100" width="201" x="400" y="108"/>
<path d=" M 400 189 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="500" y="131">
⚠️ with the exception of</text>
<a class="link" xlink:href="whitespace.md#railroad-LF">
<g class="nonterminal">
<rect height="22" width="36" x="408" y="148"/>
<text x="426" y="164">
LF</text>
</g>
</a>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="408" y="178"/>
<text x="434" y="194">
CHAR</text>
</g>
</a>
</g>
</g>
</g>
<path d=" M 95 189 h 10"/>
<path d=" M 354 189 h 10"/>
</g>
<path d=" M 35 189 a 12 12 0 0 1 12 12 v 50 m 602 0 v -50 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 251 v 33 m 602 0 v -33"/>
<path d=" M 47 251 v 0 a 12 12 0 0 0 12 12 m 90 0 h 488 m -241 0 l -5 -5 m 0 10 l 5 -5 m 241 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="252"/>
<text x="77" y="268">
//</text>
</g>
<a class="link" xlink:href="input-format.md#railroad-EOF">
<g class="nonterminal">
<rect height="22" width="44" x="105" y="252"/>
<text x="127" y="268">
EOF</text>
</g>
</a>
<path d=" M 95 263 h 10"/>
</g>
<path d=" M 47 284 v 35 a 12 12 0 0 0 12 12 m 215 0 h 363 m -178 0 l -5 -5 m 0 10 l 5 -5 m 178 0 a 12 12 0 0 0 12 -12 v -35"/>
<g class="labeledbox">
<rect height="66" width="215" x="59" y="284"/>
<path d=" M 59 331 h 8 m 36 0 h 171 m -82 0 l -5 -5 m 0 10 l 5 -5 m 82 0"/>
<text class="comment" x="166" y="307">
immediately followed by LF</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="67" y="320"/>
<text x="85" y="336">
//</text>
</g>
</g>
</g>
<path d=" M 671 189 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 189 h 10"/>
<path d=" M 661 189 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 491px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BLOCK_COMMENT"><svg class="railroad" viewBox="0 0 491 217" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="comments.md#grammar-BLOCK_COMMENT">
<text class="comment" x="60" y="25">
BLOCK_COMMENT</text>
</a>
<g class="sequence">
<path d=" M 10 102 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="91"/>
<text x="53" y="107">
/*</text>
</g>
<g class="labeledbox">
<rect height="165" width="375" x="81" y="42"/>
<path d=" M 81 102 h 8 m 359 0 h 8"/>
<text class="comment" x="146" y="65">
no backtracking</text>
<g class="sequence">
<g class="optional">
<path d=" M 89 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 265 m -129 0 l -5 -5 m 0 10 l 5 -5 m 129 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 113 102 h 12 m 241 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 73 m 0 -33 l -5 -5 m 10 0 l -5 5 m 0 33 a 12 12 0 0 1 -12 12 m 0 0 h -241 m 123 0 l 5 -5 m 0 10 l -5 -5 m -123 0 a 12 12 0 0 1 -12 -12 v -73 m 0 39 l -5 5 m 10 0 l -5 -5 m 0 -39 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 125 102 h 24 m 188 0 h 29"/>
<a class="link" xlink:href="comments.md#railroad-BLOCK_COMMENT_OR_DOC">
<g class="nonterminal">
<rect height="22" width="188" x="149" y="91"/>
<text x="243" y="107">
BLOCK_COMMENT_OR_DOC</text>
</g>
</a>
<path d=" M 125 102 a 12 12 0 0 1 12 12 v 9 m 217 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 137 123 v 35 a 12 12 0 0 0 12 12 m 193 0 h 0 a 12 12 0 0 0 12 -12 v -35"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="131" x="149" y="123"/>
<path d=" M 149 170 h 8 m 36 0 h 87 m -40 0 l -5 -5 m 0 10 l 5 -5 m 40 0"/>
<text class="comment" x="214" y="146">
not followed by</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="157" y="159"/>
<text x="175" y="175">
*/</text>
</g>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="290" y="159"/>
<text x="316" y="175">
CHAR</text>
</g>
</a>
<path d=" M 280 170 h 10"/>
</g>
</g>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="412" y="91"/>
<text x="430" y="107">
*/</text>
</g>
<path d=" M 402 102 h 10"/>
</g>
</g>
<path d=" M 71 102 h 10"/>
</g>
<path d=" M 466 102 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 102 h 10"/>
<path d=" M 456 102 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 462px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-INNER_LINE_DOC"><svg class="railroad" viewBox="0 0 462 151" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="comments.md#grammar-INNER_LINE_DOC">
<text class="comment" x="64" y="25">
INNER_LINE_DOC</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="78"/>
<text x="57" y="94">
//!</text>
</g>
<g class="labeledbox">
<rect height="99" width="338" x="89" y="42"/>
<path d=" M 89 89 h 8 m 322 0 h 8"/>
<text class="comment" x="154" y="65">
no backtracking</text>
<g class="sequence">
<a class="link" xlink:href="comments.md#railroad-LINE_DOC_COMMENT_CONTENT">
<g class="nonterminal">
<rect height="22" width="220" x="97" y="78"/>
<text x="207" y="94">
LINE_DOC_COMMENT_CONTENT</text>
</g>
</a>
<g class="choice">
<path d=" M 327 89 h 24 m 36 0 h 32"/>
<a class="link" xlink:href="whitespace.md#railroad-LF">
<g class="nonterminal">
<rect height="22" width="36" x="351" y="78"/>
<text x="369" y="94">
LF</text>
</g>
</a>
<path d=" M 327 89 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 339 110 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="input-format.md#railroad-EOF">
<g class="nonterminal">
<rect height="22" width="44" x="351" y="111"/>
<text x="373" y="127">
EOF</text>
</g>
</a>
</g>
<path d=" M 317 89 h 10"/>
</g>
</g>
<path d=" M 79 89 h 10"/>
</g>
<path d=" M 437 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 427 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 484px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LINE_DOC_COMMENT_CONTENT"><svg class="railroad" viewBox="0 0 484 174" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="comments.md#grammar-LINE_DOC_COMMENT_CONTENT">
<text class="comment" x="102" y="25">
LINE_DOC_COMMENT_CONTENT</text>
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
<path d=" M 71 135 h 8 m 36 0 h 87 m -40 0 l -5 -5 m 0 10 l 5 -5 m 40 0"/>
<text class="comment" x="136" y="111">
not followed by</text>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="79" y="124"/>
<text x="97" y="140">
CR</text>
</g>
</a>
</g>
<g class="labeledbox exceptbox">
<rect height="100" width="201" x="212" y="54"/>
<path d=" M 212 135 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="312" y="77">
⚠️ with the exception of</text>
<a class="link" xlink:href="whitespace.md#railroad-LF">
<g class="nonterminal">
<rect height="22" width="36" x="220" y="94"/>
<text x="238" y="110">
LF</text>
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
<div style="width: 494px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-INNER_BLOCK_DOC"><svg class="railroad" viewBox="0 0 494 174" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="comments.md#grammar-INNER_BLOCK_DOC">
<text class="comment" x="67" y="25">
INNER_BLOCK_DOC</text>
</a>
<g class="sequence">
<path d=" M 10 102 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="91"/>
<text x="57" y="107">
/*!</text>
</g>
<g class="labeledbox">
<rect height="122" width="370" x="89" y="42"/>
<path d=" M 89 102 h 8 m 354 0 h 8"/>
<text class="comment" x="154" y="65">
no backtracking</text>
<g class="sequence">
<g class="optional">
<path d=" M 97 102 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 260 m -127 0 l -5 -5 m 0 10 l 5 -5 m 127 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 121 102 h 12 m 236 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 30 a 12 12 0 0 1 -12 12 m 0 0 h -236 m 121 0 l 5 -5 m 0 10 l -5 -5 m -121 0 a 12 12 0 0 1 -12 -12 v -30 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 133 102 h 24 m 188 0 h 24"/>
<a class="link" xlink:href="comments.md#railroad-BLOCK_COMMENT_OR_DOC">
<g class="nonterminal">
<rect height="22" width="188" x="157" y="91"/>
<text x="251" y="107">
BLOCK_COMMENT_OR_DOC</text>
</g>
</a>
<path d=" M 133 102 a 12 12 0 0 1 12 12 v 9 m 212 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 145 123 v 0 a 12 12 0 0 0 12 12 m 100 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="comments.md#railroad-BLOCK_CHAR">
<g class="nonterminal">
<rect height="22" width="100" x="157" y="124"/>
<text x="207" y="140">
BLOCK_CHAR</text>
</g>
</a>
</g>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="415" y="91"/>
<text x="433" y="107">
*/</text>
</g>
<path d=" M 405 102 h 10"/>
</g>
</g>
<path d=" M 79 102 h 10"/>
</g>
<path d=" M 469 102 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 102 h 10"/>
<path d=" M 459 102 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 462px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-OUTER_LINE_DOC"><svg class="railroad" viewBox="0 0 462 151" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="comments.md#grammar-OUTER_LINE_DOC">
<text class="comment" x="64" y="25">
OUTER_LINE_DOC</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="78"/>
<text x="57" y="94">
///</text>
</g>
<g class="labeledbox">
<rect height="99" width="338" x="89" y="42"/>
<path d=" M 89 89 h 8 m 322 0 h 8"/>
<text class="comment" x="154" y="65">
no backtracking</text>
<g class="sequence">
<a class="link" xlink:href="comments.md#railroad-LINE_DOC_COMMENT_CONTENT">
<g class="nonterminal">
<rect height="22" width="220" x="97" y="78"/>
<text x="207" y="94">
LINE_DOC_COMMENT_CONTENT</text>
</g>
</a>
<g class="choice">
<path d=" M 327 89 h 24 m 36 0 h 32"/>
<a class="link" xlink:href="whitespace.md#railroad-LF">
<g class="nonterminal">
<rect height="22" width="36" x="351" y="78"/>
<text x="369" y="94">
LF</text>
</g>
</a>
<path d=" M 327 89 a 12 12 0 0 1 12 12 v 9 m 68 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 339 110 v 0 a 12 12 0 0 0 12 12 m 44 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="input-format.md#railroad-EOF">
<g class="nonterminal">
<rect height="22" width="44" x="351" y="111"/>
<text x="373" y="127">
EOF</text>
</g>
</a>
</g>
<path d=" M 317 89 h 10"/>
</g>
</g>
<path d=" M 79 89 h 10"/>
</g>
<path d=" M 437 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 427 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 894px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-OUTER_BLOCK_DOC"><svg class="railroad" viewBox="0 0 894 231" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="comments.md#grammar-OUTER_BLOCK_DOC">
<text class="comment" x="67" y="25">
OUTER_BLOCK_DOC</text>
</a>
<g class="sequence">
<path d=" M 10 159 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="148"/>
<text x="57" y="164">
/**</text>
</g>
<g class="labeledbox">
<rect height="99" width="131" x="89" y="112"/>
<path d=" M 89 159 h 8 m 76 0 h 47"/>
<text class="comment" x="154" y="135">
not followed by</text>
<g class="choice">
<path d=" M 97 159 h 24 m 28 0 h 24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="121" y="148"/>
<text x="135" y="164">
*</text>
</g>
<path d=" M 97 159 a 12 12 0 0 1 12 12 v 9 m 52 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 109 180 v 0 a 12 12 0 0 0 12 12 m 28 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="121" y="181"/>
<text x="135" y="197">
/</text>
</g>
</g>
</g>
<g class="labeledbox">
<rect height="179" width="629" x="230" y="42"/>
<path d=" M 230 159 h 8 m 613 0 h 8"/>
<text class="comment" x="295" y="65">
no backtracking</text>
<g class="sequence">
<g class="choice">
<path d=" M 238 159 h 24 m 201 0 h 24"/>
<g class="labeledbox exceptbox">
<rect height="100" width="201" x="262" y="78"/>
<path d=" M 262 159 h 8 m 52 0 h 141 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<g class="verticalgrid">
<text class="comment" x="362" y="101">
⚠️ with the exception of</text>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="270" y="118"/>
<text x="284" y="134">
*</text>
</g>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="270" y="148"/>
<text x="296" y="164">
CHAR</text>
</g>
</a>
</g>
<path d=" M 238 159 a 12 12 0 0 1 12 12 v 17 m 225 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 250 188 v 0 a 12 12 0 0 0 12 12 m 188 0 h 13 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="comments.md#railroad-BLOCK_COMMENT_OR_DOC">
<g class="nonterminal">
<rect height="22" width="188" x="262" y="189"/>
<text x="356" y="205">
BLOCK_COMMENT_OR_DOC</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 497 159 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 260 m -127 0 l -5 -5 m 0 10 l 5 -5 m 127 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 521 159 h 12 m 236 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 30 a 12 12 0 0 1 -12 12 m 0 0 h -236 m 121 0 l 5 -5 m 0 10 l -5 -5 m -121 0 a 12 12 0 0 1 -12 -12 v -30 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="choice">
<path d=" M 533 159 h 24 m 188 0 h 24"/>
<a class="link" xlink:href="comments.md#railroad-BLOCK_COMMENT_OR_DOC">
<g class="nonterminal">
<rect height="22" width="188" x="557" y="148"/>
<text x="651" y="164">
BLOCK_COMMENT_OR_DOC</text>
</g>
</a>
<path d=" M 533 159 a 12 12 0 0 1 12 12 v 9 m 212 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 545 180 v 0 a 12 12 0 0 0 12 12 m 100 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="comments.md#railroad-BLOCK_CHAR">
<g class="nonterminal">
<rect height="22" width="100" x="557" y="181"/>
<text x="607" y="197">
BLOCK_CHAR</text>
</g>
</a>
</g>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="815" y="148"/>
<text x="833" y="164">
*/</text>
</g>
<path d=" M 487 159 h 10"/>
<path d=" M 805 159 h 10"/>
</g>
</g>
<path d=" M 79 159 h 10"/>
<path d=" M 220 159 h 10"/>
</g>
<path d=" M 869 159 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 159 h 10"/>
<path d=" M 859 159 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 263px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BLOCK_CHAR"><svg class="railroad" viewBox="0 0 263 151" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="comments.md#grammar-BLOCK_CHAR">
<text class="comment" x="50" y="25">
BLOCK_CHAR</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="labeledbox">
<rect height="99" width="131" x="35" y="42"/>
<path d=" M 35 89 h 8 m 84 0 h 39"/>
<text class="comment" x="100" y="65">
not followed by</text>
<g class="choice">
<path d=" M 43 89 h 24 m 36 0 h 24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="67" y="78"/>
<text x="85" y="94">
*/</text>
</g>
<path d=" M 43 89 a 12 12 0 0 1 12 12 v 9 m 60 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 55 110 v 0 a 12 12 0 0 0 12 12 m 36 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="whitespace.md#railroad-CR">
<g class="nonterminal">
<rect height="22" width="36" x="67" y="111"/>
<text x="85" y="127">
CR</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="input-format.md#railroad-CHAR">
<g class="nonterminal">
<rect height="22" width="52" x="176" y="78"/>
<text x="202" y="94">
CHAR</text>
</g>
</a>
<path d=" M 166 89 h 10"/>
</g>
<path d=" M 238 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 228 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 258px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BLOCK_COMMENT_OR_DOC"><svg class="railroad" viewBox="0 0 258 140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="comments.md#grammar-BLOCK_COMMENT_OR_DOC">
<text class="comment" x="88" y="25">
BLOCK_COMMENT_OR_DOC</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 140 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="comments.md#railroad-INNER_BLOCK_DOC">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="42"/>
<text x="129" y="58">
INNER_BLOCK_DOC</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 164 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 164 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 140 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="comments.md#railroad-OUTER_BLOCK_DOC">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="75"/>
<text x="129" y="91">
OUTER_BLOCK_DOC</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 124 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="comments.md#railroad-BLOCK_COMMENT">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="108"/>
<text x="121" y="124">
BLOCK_COMMENT</text>
</g>
</a>
</g>
<path d=" M 233 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 223 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-comments.normal"><a class="rule-link" href="#r-comments.normal" title="comments.normal"><span>[comments<wbr>.normal]</span></a>
</div>

## 非文档注释

注释遵循常见的 C++ 风格的行注释（`//`）和块注释（`/* ... */`）形式。支持嵌套的块注释。

<div class="rule" id="r-comments.normal.tokenization"><a class="rule-link" href="#r-comments.normal.tokenization" title="comments.normal.tokenization"><span>[comments<wbr>.normal<wbr>.tokenization]</span></a>
</div>

非文档注释会被解释为空白的一种形式。

<div class="rule" id="r-comments.doc"><a class="rule-link" href="#r-comments.doc" title="comments.doc"><span>[comments<wbr>.doc]</span></a>
</div>

## 文档注释

<div class="rule" id="r-comments.doc.syntax"><a class="rule-link" href="#r-comments.doc.syntax" title="comments.doc.syntax"><span>[comments<wbr>.doc<wbr>.syntax]</span></a>
</div>

以恰好 _三个_ 斜杠（`///`）开头的行文档注释，以及块文档注释（`/** ... */`）都是外部文档注释，会被解释为 [`doc` 属性](../rustdoc/the-doc-attribute.html)的特殊语法。

<div class="rule" id="r-comments.doc.attributes"><a class="rule-link" href="#r-comments.doc.attributes" title="comments.doc.attributes"><span>[comments<wbr>.doc<wbr>.attributes]</span></a>
</div>

也就是说，它们等价于围绕注释正文书写 `#[doc="..."]`，即 `/// Foo` 会变成 `#[doc=" Foo"]`，而 `/** Bar */` 会变成 `#[doc=" Bar "]`。因此，它们必须出现在接受外部属性的对象之前。

<div class="rule" id="r-comments.doc.inner-syntax"><a class="rule-link" href="#r-comments.doc.inner-syntax" title="comments.doc.inner-syntax"><span>[comments<wbr>.doc<wbr>.inner-syntax]</span></a>
</div>

以 `//!` 开头的行注释和块注释 `/*! ... */` 是文档注释，它们应用于该注释的父级，而不是后面的项。

<div class="rule" id="r-comments.doc.inner-attributes"><a class="rule-link" href="#r-comments.doc.inner-attributes" title="comments.doc.inner-attributes"><span>[comments<wbr>.doc<wbr>.inner-attributes]</span></a>
</div>

也就是说，它们等价于围绕注释正文书写 `#![doc="..."]`。`//!` 注释通常用于为占据一个源文件的模块编写文档。

<div class="rule" id="r-comments.doc.bare-crs"><a class="rule-link" href="#r-comments.doc.bare-crs" title="comments.doc.bare-crs"><span>[comments<wbr>.doc<wbr>.bare-crs]</span></a>
</div>

文档注释中不允许出现字符 `U+000D` (CR)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 按照 `rustdoc` 的预期，文档注释通常包含 Markdown。然而，注释语法并不识别任何内部 Markdown。``/** `glob = "*/*.rs";` */`` 会在第一个 `*/` 处终止注释，剩余代码则会导致语法错误。与行文档注释相比，这会稍微限制块文档注释的内容。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 紧跟在 `U+000D` (CR) 之后的 `U+000A` (LF) 序列此前会已被转换为单个 `U+000A` (LF)。

</div>

## 示例

```rust
//! A doc comment that applies to the implicit anonymous module of this crate

pub mod outer_module {

    //!  - Inner line doc
    //!! - Still an inner line doc (but with a bang at the beginning)

    /*!  - Inner block doc */
    /*!! - Still an inner block doc (but with a bang at the beginning) */

    //   - Only a comment
    ///  - Outer line doc (exactly 3 slashes)
    //// - Only a comment

    /*   - Only a comment */
    /**  - Outer block doc (exactly) 2 asterisks */
    /*** - Only a comment */

    pub mod inner_module {}

    pub mod nested_comments {
        /* In Rust /* we can /* nest comments */ */ */

        // All three types of block comments can contain or be nested inside
        // any other type:

        /*   /* */  /** */  /*! */  */
        /*!  /* */  /** */  /*! */  */
        /**  /* */  /** */  /*! */  */
        pub mod dummy_item {}
    }

    pub mod degenerate_cases {
        // empty inner line doc
        //!

        // empty inner block doc
        /*!*/

        // empty line comment
        //

        // empty outer line doc
        ///

        // empty block comment
        /**/

        pub mod dummy_item {}

        // empty 2-asterisk block isn't a doc block, it is a block comment
        /***/

    }

    /* The next one isn't allowed because outer doc comments
       require an item that will receive the doc */

    /// Where is my item?
#   mod boo {}
}
```