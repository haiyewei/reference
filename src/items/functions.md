<div class="rule" id="r-items.fn"><a class="rule-link" href="#r-items.fn" title="items.fn"><span>[items<wbr>.fn]</span></a>
</div>

# 函数

<div class="rule" id="r-items.fn.syntax"><a class="rule-link" href="#r-items.fn.syntax" title="items.fn.syntax"><span>[items<wbr>.fn<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Function" onclick="show_railroad()">[Function](functions.md#railroad-Function)</span> →  
    <span class="grammar-text">[FunctionQualifiers](functions.md#grammar-FunctionQualifiers)</span> <span class="grammar-literal">fn</span> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-text">[GenericParams](generics.md#grammar-GenericParams)</span><sup>?</sup>  
        <span class="grammar-literal">(</span> <span class="grammar-text">[FunctionParameters](functions.md#grammar-FunctionParameters)</span><sup>?</sup> <span class="grammar-literal">)</span>  
        <span class="grammar-text">[FunctionReturnType](functions.md#grammar-FunctionReturnType)</span><sup>?</sup> <span class="grammar-text">[WhereClause](generics.md#grammar-WhereClause)</span><sup>?</sup>  
        ( <span class="grammar-text">[BlockExpression](../expressions/block-expr.md#grammar-BlockExpression)</span> | <span class="grammar-literal">;</span> )

<span class="grammar-text grammar-production" id="grammar-FunctionQualifiers" onclick="show_railroad()">[FunctionQualifiers](functions.md#railroad-FunctionQualifiers)</span> → <span class="grammar-literal">const</span><sup>?</sup> <span class="grammar-literal">async</span><sup>?</sup>​[^async-edition] <span class="grammar-text">[ItemSafety](functions.md#grammar-ItemSafety)</span><sup>?</sup>​[^extern-qualifiers] ( <span class="grammar-literal">extern</span> <span class="grammar-text">[Abi](functions.md#grammar-Abi)</span><sup>?</sup> )<sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-ItemSafety" onclick="show_railroad()">[ItemSafety](functions.md#railroad-ItemSafety)</span> → <span class="grammar-literal">safe</span>​[^extern-safe] | <span class="grammar-literal">unsafe</span>

<span class="grammar-text grammar-production" id="grammar-Abi" onclick="show_railroad()">[Abi](functions.md#railroad-Abi)</span> → <span class="grammar-text">[STRING_LITERAL](../tokens.md#grammar-STRING_LITERAL)</span> | <span class="grammar-text">[RAW_STRING_LITERAL](../tokens.md#grammar-RAW_STRING_LITERAL)</span>

<span class="grammar-text grammar-production" id="grammar-FunctionParameters" onclick="show_railroad()">[FunctionParameters](functions.md#railroad-FunctionParameters)</span> →  
      <span class="grammar-text">[SelfParam](functions.md#grammar-SelfParam)</span> <span class="grammar-literal">,</span><sup>?</sup>  
    \| ( <span class="grammar-text">[SelfParam](functions.md#grammar-SelfParam)</span> <span class="grammar-literal">,</span> )<sup>?</sup> <span class="grammar-text">[FunctionParam](functions.md#grammar-FunctionParam)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[FunctionParam](functions.md#grammar-FunctionParam)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-SelfParam" onclick="show_railroad()">[SelfParam](functions.md#railroad-SelfParam)</span> → <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> ( <span class="grammar-text">[ShorthandSelf](functions.md#grammar-ShorthandSelf)</span> | <span class="grammar-text">[TypedSelf](functions.md#grammar-TypedSelf)</span> )

<span class="grammar-text grammar-production" id="grammar-ShorthandSelf" onclick="show_railroad()">[ShorthandSelf](functions.md#railroad-ShorthandSelf)</span> → ( <span class="grammar-literal">&</span> | <span class="grammar-literal">&</span> <span class="grammar-text">[Lifetime](../trait-bounds.md#grammar-Lifetime)</span> )<sup>?</sup> <span class="grammar-literal">mut</span><sup>?</sup> <span class="grammar-literal">self</span>

<span class="grammar-text grammar-production" id="grammar-TypedSelf" onclick="show_railroad()">[TypedSelf](functions.md#railroad-TypedSelf)</span> → <span class="grammar-literal">mut</span><sup>?</sup> <span class="grammar-literal">self</span> <span class="grammar-literal">:</span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span>

<span class="grammar-text grammar-production" id="grammar-FunctionParam" onclick="show_railroad()">[FunctionParam](functions.md#railroad-FunctionParam)</span> → <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> ( <span class="grammar-text">[FunctionParamPattern](functions.md#grammar-FunctionParamPattern)</span> | <span class="grammar-literal">...</span> | <span class="grammar-text">[Type](../types.md#grammar-Type)</span>​[^fn-param-2015] )

<span class="grammar-text grammar-production" id="grammar-FunctionParamPattern" onclick="show_railroad()">[FunctionParamPattern](functions.md#railroad-FunctionParamPattern)</span> → <span class="grammar-text">[PatternNoTopAlt](../patterns.md#grammar-PatternNoTopAlt)</span> <span class="grammar-literal">:</span> ( <span class="grammar-text">[Type](../types.md#grammar-Type)</span> | <span class="grammar-literal">...</span> )

<span class="grammar-text grammar-production" id="grammar-FunctionReturnType" onclick="show_railroad()">[FunctionReturnType](functions.md#railroad-FunctionReturnType)</span> → <span class="grammar-literal">\-></span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 620px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Function"><svg class="railroad" viewBox="0 0 620 288" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="functions.md#grammar-Function">
<text class="comment" x="43" y="25">
Function</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 66 h 12"/>
<path d=" M 549 66 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -502 m 254 0 l 5 -5 m 0 10 l -5 -5 m -254 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<a class="link" xlink:href="functions.md#railroad-FunctionQualifiers">
<g class="nonterminal">
<rect height="22" width="164" x="47" y="55"/>
<text x="129" y="71">
FunctionQualifiers</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="221" y="55"/>
<text x="239" y="71">
fn</text>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="267" y="55"/>
<text x="317" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 377 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-GenericParams">
<g class="nonterminal">
<rect height="22" width="124" x="401" y="55"/>
<text x="463" y="71">
GenericParams</text>
</g>
</a>
</g>
<path d=" M 211 66 h 10"/>
<path d=" M 257 66 h 10"/>
<path d=" M 367 66 h 10"/>
</g>
<path d=" M 335 126 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -288 m 147 0 l 5 -5 m 0 10 l -5 -5 m -147 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="47" y="115"/>
<text x="61" y="131">
(</text>
</g>
<g class="optional">
<path d=" M 85 126 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 164 m -79 0 l -5 -5 m 0 10 l 5 -5 m 79 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="functions.md#railroad-FunctionParameters">
<g class="nonterminal">
<rect height="22" width="164" x="109" y="115"/>
<text x="191" y="131">
FunctionParameters</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="307" y="115"/>
<text x="321" y="131">
)</text>
</g>
<path d=" M 75 126 h 10"/>
<path d=" M 297 126 h 10"/>
</g>
<path d=" M 425 186 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -378 m 192 0 l 5 -5 m 0 10 l -5 -5 m -192 0 a 12 12 0 0 0 -12 12 v 0 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 186 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 164 m -79 0 l -5 -5 m 0 10 l 5 -5 m 79 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="functions.md#railroad-FunctionReturnType">
<g class="nonterminal">
<rect height="22" width="164" x="71" y="175"/>
<text x="153" y="191">
FunctionReturnType</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 269 186 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-WhereClause">
<g class="nonterminal">
<rect height="22" width="108" x="293" y="175"/>
<text x="347" y="191">
WhereClause</text>
</g>
</a>
</g>
<path d=" M 259 186 h 10"/>
</g>
<path d=" M 235 234 h 326 m -160 0 l -5 -5 m 0 10 l 5 -5 m 160 0 a 12 12 0 0 0 12 -12 v -144 m 0 75 l -5 5 m 10 0 l -5 -5 m 0 -75 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<g class="choice">
<path d=" M 47 234 h 24 m 140 0 h 24"/>
<a class="link" xlink:href="../expressions/block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="71" y="223"/>
<text x="141" y="239">
BlockExpression</text>
</g>
</a>
<path d=" M 47 234 a 12 12 0 0 1 12 12 v 9 m 164 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 59 255 v 0 a 12 12 0 0 0 12 12 m 28 0 h 112 m -53 0 l -5 -5 m 0 10 l 5 -5 m 53 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="71" y="256"/>
<text x="85" y="272">
;</text>
</g>
</g>
</g>
</g>
<path d=" M 595 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 585 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 682px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-FunctionQualifiers"><svg class="railroad" viewBox="0 0 682 99" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="functions.md#grammar-FunctionQualifiers">
<text class="comment" x="78" y="25">
FunctionQualifiers</text>
</a>
<g class="sequence">
<path d=" M 10 78 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 60 m -27 0 l -5 -5 m 0 10 l 5 -5 m 27 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="59" y="67"/>
<text x="89" y="83">
const</text>
</g>
</g>
<g class="optional">
<path d=" M 153 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 60 m -27 0 l -5 -5 m 0 10 l 5 -5 m 27 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="177" y="67"/>
<text x="207" y="83">
async</text>
</g>
</g>
<g class="optional">
<path d=" M 271 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="functions.md#railroad-ItemSafety">
<g class="nonterminal">
<rect height="22" width="100" x="295" y="67"/>
<text x="345" y="83">
ItemSafety</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 429 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 170 m -82 0 l -5 -5 m 0 10 l 5 -5 m 82 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="453" y="67"/>
<text x="487" y="83">
extern</text>
</g>
<g class="optional">
<path d=" M 531 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="functions.md#railroad-Abi">
<g class="nonterminal">
<rect height="22" width="44" x="555" y="67"/>
<text x="577" y="83">
Abi</text>
</g>
</a>
</g>
<path d=" M 521 78 h 10"/>
</g>
</g>
<path d=" M 143 78 h 10"/>
<path d=" M 261 78 h 10"/>
<path d=" M 419 78 h 10"/>
</g>
<path d=" M 657 78 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 78 h 10"/>
<path d=" M 647 78 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 186px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ItemSafety"><svg class="railroad" viewBox="0 0 186 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="functions.md#grammar-ItemSafety">
<text class="comment" x="50" y="25">
ItemSafety</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 52 0 h 40"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="42"/>
<text x="85" y="58">
safe</text>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 92 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 68 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="75"/>
<text x="93" y="91">
unsafe</text>
</g>
</g>
<path d=" M 161 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 151 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 282px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Abi"><svg class="railroad" viewBox="0 0 282 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="functions.md#grammar-Abi">
<text class="comment" x="25" y="25">
Abi</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 132 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0"/>
<a class="link" xlink:href="../tokens.md#railroad-STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="42"/>
<text x="125" y="58">
STRING_LITERAL</text>
</g>
</a>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 188 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 164 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="../tokens.md#railroad-RAW_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="75"/>
<text x="141" y="91">
RAW_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 257 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 247 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 760px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-FunctionParameters"><svg class="railroad" viewBox="0 0 760 145" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="functions.md#grammar-FunctionParameters">
<text class="comment" x="78" y="25">
FunctionParameters</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 66 h 24 m 178 0 h 488 m -241 0 l -5 -5 m 0 10 l 5 -5 m 241 0"/>
<g class="sequence">
<a class="link" xlink:href="functions.md#railroad-SelfParam">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="55"/>
<text x="105" y="71">
SelfParam</text>
</g>
</a>
<g class="optional">
<path d=" M 161 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="185" y="55"/>
<text x="199" y="71">
,</text>
</g>
</g>
<path d=" M 151 66 h 10"/>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 9 m 666 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 87 v 12 a 12 12 0 0 0 12 12 m 642 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="optional">
<path d=" M 59 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 130 m -62 0 l -5 -5 m 0 10 l 5 -5 m 62 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<a class="link" xlink:href="functions.md#railroad-SelfParam">
<g class="nonterminal">
<rect height="22" width="92" x="83" y="100"/>
<text x="129" y="116">
SelfParam</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="185" y="100"/>
<text x="199" y="116">
,</text>
</g>
<path d=" M 175 111 h 10"/>
</g>
</g>
<a class="link" xlink:href="functions.md#railroad-FunctionParam">
<g class="nonterminal">
<rect height="22" width="124" x="247" y="100"/>
<text x="309" y="116">
FunctionParam</text>
</g>
</a>
<g class="optional">
<path d=" M 381 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 186 m -90 0 l -5 -5 m 0 10 l 5 -5 m 90 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 405 111 h 12 m 162 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -162 m 84 0 l 5 -5 m 0 10 l -5 -5 m -84 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="417" y="100"/>
<text x="431" y="116">
,</text>
</g>
<a class="link" xlink:href="functions.md#railroad-FunctionParam">
<g class="nonterminal">
<rect height="22" width="124" x="455" y="100"/>
<text x="517" y="116">
FunctionParam</text>
</g>
</a>
<path d=" M 445 111 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 625 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="649" y="100"/>
<text x="663" y="116">
,</text>
</g>
</g>
<path d=" M 237 111 h 10"/>
<path d=" M 371 111 h 10"/>
<path d=" M 615 111 h 10"/>
</g>
</g>
<path d=" M 735 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 725 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 456px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-SelfParam"><svg class="railroad" viewBox="0 0 456 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="functions.md#grammar-SelfParam">
<text class="comment" x="46" y="25">
SelfParam</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="71" y="55"/>
<text x="137" y="71">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<g class="choice">
<path d=" M 249 66 h 24 m 124 0 h 24"/>
<a class="link" xlink:href="functions.md#railroad-ShorthandSelf">
<g class="nonterminal">
<rect height="22" width="124" x="273" y="55"/>
<text x="335" y="71">
ShorthandSelf</text>
</g>
</a>
<path d=" M 249 66 a 12 12 0 0 1 12 12 v 9 m 148 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 261 87 v 0 a 12 12 0 0 0 12 12 m 92 0 h 32 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="functions.md#railroad-TypedSelf">
<g class="nonterminal">
<rect height="22" width="92" x="273" y="88"/>
<text x="319" y="104">
TypedSelf</text>
</g>
</a>
</g>
<path d=" M 239 66 h 10"/>
</g>
<path d=" M 431 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 421 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 452px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ShorthandSelf"><svg class="railroad" viewBox="0 0 452 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="functions.md#grammar-ShorthandSelf">
<text class="comment" x="60" y="25">
ShorthandSelf</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 170 m -82 0 l -5 -5 m 0 10 l 5 -5 m 82 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="choice">
<path d=" M 59 66 h 24 m 28 0 h 118 m -56 0 l -5 -5 m 0 10 l 5 -5 m 56 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="83" y="55"/>
<text x="97" y="71">
&amp;</text>
</g>
<path d=" M 59 66 a 12 12 0 0 1 12 12 v 9 m 146 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 71 87 v 0 a 12 12 0 0 0 12 12 m 122 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="83" y="88"/>
<text x="97" y="104">
&amp;</text>
</g>
<a class="link" xlink:href="../trait-bounds.md#railroad-Lifetime">
<g class="nonterminal">
<rect height="22" width="84" x="121" y="88"/>
<text x="163" y="104">
Lifetime</text>
</g>
</a>
<path d=" M 111 99 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 263 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="287" y="55"/>
<text x="309" y="71">
mut</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="365" y="55"/>
<text x="391" y="71">
self</text>
</g>
<path d=" M 253 66 h 10"/>
<path d=" M 355 66 h 10"/>
</g>
<path d=" M 427 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 417 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 324px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TypedSelf"><svg class="railroad" viewBox="0 0 324 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="functions.md#grammar-TypedSelf">
<text class="comment" x="46" y="25">
TypedSelf</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="55"/>
<text x="81" y="71">
mut</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="137" y="55"/>
<text x="163" y="71">
self</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="199" y="55"/>
<text x="213" y="71">
:</text>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="237" y="55"/>
<text x="263" y="71">
Type</text>
</g>
</a>
<path d=" M 127 66 h 10"/>
<path d=" M 189 66 h 10"/>
<path d=" M 227 66 h 10"/>
</g>
<path d=" M 299 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 289 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 520px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-FunctionParam"><svg class="railroad" viewBox="0 0 520 153" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="functions.md#grammar-FunctionParam">
<text class="comment" x="60" y="25">
FunctionParam</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="71" y="55"/>
<text x="137" y="71">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<g class="choice">
<path d=" M 249 66 h 24 m 188 0 h 24"/>
<a class="link" xlink:href="functions.md#railroad-FunctionParamPattern">
<g class="nonterminal">
<rect height="22" width="188" x="273" y="55"/>
<text x="367" y="71">
FunctionParamPattern</text>
</g>
</a>
<path d=" M 249 66 a 12 12 0 0 1 12 12 v 9 m 212 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 261 87 v 33 m 212 0 v -33"/>
<path d=" M 261 87 v 0 a 12 12 0 0 0 12 12 m 44 0 h 144 m -69 0 l -5 -5 m 0 10 l 5 -5 m 69 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="273" y="88"/>
<text x="295" y="104">
...</text>
</g>
<path d=" M 261 120 v 0 a 12 12 0 0 0 12 12 m 52 0 h 136 m -65 0 l -5 -5 m 0 10 l 5 -5 m 65 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="273" y="121"/>
<text x="299" y="137">
Type</text>
</g>
</a>
</g>
<path d=" M 239 66 h 10"/>
</g>
<path d=" M 495 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 485 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 358px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-FunctionParamPattern"><svg class="railroad" viewBox="0 0 358 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="functions.md#grammar-FunctionParamPattern">
<text class="comment" x="88" y="25">
FunctionParamPattern</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../patterns.md#railroad-PatternNoTopAlt">
<g class="nonterminal">
<rect height="22" width="140" x="35" y="42"/>
<text x="105" y="58">
PatternNoTopAlt</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="185" y="42"/>
<text x="199" y="58">
:</text>
</g>
<g class="choice">
<path d=" M 223 53 h 24 m 52 0 h 24"/>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="247" y="42"/>
<text x="273" y="58">
Type</text>
</g>
</a>
<path d=" M 223 53 a 12 12 0 0 1 12 12 v 9 m 76 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 235 74 v 0 a 12 12 0 0 0 12 12 m 44 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="247" y="75"/>
<text x="269" y="91">
...</text>
</g>
</g>
<path d=" M 175 53 h 10"/>
<path d=" M 213 53 h 10"/>
</g>
<path d=" M 333 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 323 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 168px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-FunctionReturnType"><svg class="railroad" viewBox="0 0 168 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="functions.md#grammar-FunctionReturnType">
<text class="comment" x="78" y="25">
FunctionReturnType</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="42"/>
<text x="53" y="58">
-&gt;</text>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="81" y="42"/>
<text x="107" y="58">
Type</text>
</g>
</a>
<path d=" M 71 53 h 10"/>
</g>
<path d=" M 143 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 133 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

[^async-edition]: 2015 edition 中不允许使用 `async` 限定符。

[^extern-safe]: `safe` 函数限定符在语义上只允许用于 `extern` 块内。

[^extern-qualifiers]: _与 Rust 2024 之前的 edition 相关_：在 `extern` 块内，只有当 `extern` 限定为 `unsafe` 时，才允许使用 `safe` 或 `unsafe` 函数限定符。

[^fn-param-2015]: 仅含类型的函数参数只允许出现在 2015 edition 中 [trait 项](traits.md)的关联函数里。

<div class="rule" id="r-items.fn.intro"><a class="rule-link" href="#r-items.fn.intro" title="items.fn.intro"><span>[items<wbr>.fn<wbr>.intro]</span></a>
</div>

<em>函数</em>由一个[块](../expressions/block-expr.md)（即函数的<em>主体</em>）、一个名称、一组参数和一个输出类型组成。除名称外，所有这些部分都是可选的。

<div class="rule" id="r-items.fn.namespace"><a class="rule-link" href="#r-items.fn.namespace" title="items.fn.namespace"><span>[items<wbr>.fn<wbr>.namespace]</span></a>
</div>

函数使用关键字 `fn` 声明，该关键字会在函数所在模块或块的[值命名空间](../names/namespaces.md)中定义给定名称。

<div class="rule" id="r-items.fn.signature"><a class="rule-link" href="#r-items.fn.signature" title="items.fn.signature"><span>[items<wbr>.fn<wbr>.signature]</span></a>
</div>

函数可以声明一组作为参数的输入[变量](../variables.md)，调用者通过这些参数向函数传入实参；函数还可以声明完成时返回给调用者的值的输出[类型](../types.md#type-expressions)。

<div class="rule" id="r-items.fn.implicit-return"><a class="rule-link" href="#r-items.fn.implicit-return" title="items.fn.implicit-return"><span>[items<wbr>.fn<wbr>.implicit-return]</span></a>
</div>

如果未显式声明输出类型，则它是 [unit 类型](../types/tuple.md)。

<div class="rule" id="r-items.fn.fn-item-type"><a class="rule-link" href="#r-items.fn.fn-item-type" title="items.fn.fn-item-type"><span>[items<wbr>.fn<wbr>.fn-item-type]</span></a>
</div>

当被引用时，<em>函数</em>会产生对应[零大小](../glossary.md#r-glossary.zst)[函数项类型](../types/function-item.md)的一等<em>值</em>；调用该值时，会求值为对该函数的直接调用。

例如，这是一个简单函数：

```rust
fn answer_to_life_the_universe_and_everything() -> i32 {
    return 42;
}
```

<div class="rule" id="r-items.fn.safety-qualifiers"><a class="rule-link" href="#r-items.fn.safety-qualifiers" title="items.fn.safety-qualifiers"><span>[items<wbr>.fn<wbr>.safety-qualifiers]</span></a>
</div>

`safe` 函数在语义上只允许用于 [`extern` 块](external-blocks.md)中。

<div class="rule" id="r-items.fn.params"><a class="rule-link" href="#r-items.fn.params" title="items.fn.params"><span>[items<wbr>.fn<wbr>.params]</span></a>
</div>

## 函数参数

<div class="rule" id="r-items.fn.params.intro"><a class="rule-link" href="#r-items.fn.params.intro" title="items.fn.params.intro"><span>[items<wbr>.fn<wbr>.params<wbr>.intro]</span></a>
</div>

函数参数是不可反驳的[模式](../patterns.md)，因此任何在不带 `else` 的 `let` 绑定中有效的模式，也都可以作为参数：

```rust
fn first((value, _): (i32, i32)) -> i32 { value }
```

<div class="rule" id="r-items.fn.params.self-pat"><a class="rule-link" href="#r-items.fn.params.self-pat" title="items.fn.params.self-pat"><span>[items<wbr>.fn<wbr>.params<wbr>.self-pat]</span></a>
</div>

如果第一个参数是 [SelfParam](functions.md#grammar-SelfParam)，则表示该函数是一个[方法](associated-items.md#methods)。

<div class="rule" id="r-items.fn.params.self-restriction"><a class="rule-link" href="#r-items.fn.params.self-restriction" title="items.fn.params.self-restriction"><span>[items<wbr>.fn<wbr>.params<wbr>.self-restriction]</span></a>
</div>

带有 self 参数的函数只能作为 [trait](traits.md) 或[实现](implementations.md)中的[关联函数](associated-items.md#associated-functions-and-methods)出现。

<div class="rule" id="r-items.fn.params.varargs"><a class="rule-link" href="#r-items.fn.params.varargs" title="items.fn.params.varargs"><span>[items<wbr>.fn<wbr>.params<wbr>.varargs]</span></a>
</div>

带有 `...` token 的参数表示一个[变参函数](external-blocks.md#variadic-functions)，并且只能用作[外部块](external-blocks.md)函数的最后一个参数。变参参数可以带有可选的标识符，例如 `args: ...`。

<div class="rule" id="r-items.fn.body"><a class="rule-link" href="#r-items.fn.body" title="items.fn.body"><span>[items<wbr>.fn<wbr>.body]</span></a>
</div>

## 函数体

<div class="rule" id="r-items.fn.body.intro"><a class="rule-link" href="#r-items.fn.body.intro" title="items.fn.body.intro"><span>[items<wbr>.fn<wbr>.body<wbr>.intro]</span></a>
</div>

从概念上说，函数的主体块会被包裹在另一个块中，该块先绑定实参模式，然后 `return` 函数主体的值。这意味着，如果块的尾表达式被求值，最终会将其返回给调用者。和通常一样，如果执行到函数体中的显式 return 表达式，它会提前结束这个隐式返回。

例如，上面的函数行为就像写成如下形式：

<!-- ignore: example expansion -->

```rust,ignore
// argument_0 is the actual first argument passed from the caller
let (value, _) = argument_0;
return {
    value
};
```

<div class="rule" id="r-items.fn.body.bodyless"><a class="rule-link" href="#r-items.fn.body.bodyless" title="items.fn.body.bodyless"><span>[items<wbr>.fn<wbr>.body<wbr>.bodyless]</span></a>
</div>

没有主体块的函数以分号结束。这种形式只能出现在 [trait](traits.md) 或[外部块](external-blocks.md)中。

<div class="rule" id="r-items.fn.generics"><a class="rule-link" href="#r-items.fn.generics" title="items.fn.generics"><span>[items<wbr>.fn<wbr>.generics]</span></a>
</div>

## 泛型函数

<div class="rule" id="r-items.fn.generics.intro"><a class="rule-link" href="#r-items.fn.generics.intro" title="items.fn.generics.intro"><span>[items<wbr>.fn<wbr>.generics<wbr>.intro]</span></a>
</div>

<em>泛型函数</em>允许一个或多个<em>参数化类型</em>出现在其签名中。每个类型参数都必须在函数名之后、由尖括号包围且以逗号分隔的列表中显式声明。

```rust
// foo is generic over A and B

fn foo<A, B>(x: A, y: B) {
# }
```

<div class="rule" id="r-items.fn.generics.param-names"><a class="rule-link" href="#r-items.fn.generics.param-names" title="items.fn.generics.param-names"><span>[items<wbr>.fn<wbr>.generics<wbr>.param-names]</span></a>
</div>

在函数签名和函数体内，类型参数的名称可以作为类型名称使用。

<div class="rule" id="r-items.fn.generics.param-bounds"><a class="rule-link" href="#r-items.fn.generics.param-bounds" title="items.fn.generics.param-bounds"><span>[items<wbr>.fn<wbr>.generics<wbr>.param-bounds]</span></a>
</div>

可以为类型参数指定 [trait](traits.md) 约束，以允许在该类型的值上调用来自该 trait 的方法。这使用 `where` 语法指定：

```rust
# use std::fmt::Debug;
fn foo<T>(x: T) where T: Debug {
# }
```

<div class="rule" id="r-items.fn.generics.mono"><a class="rule-link" href="#r-items.fn.generics.mono" title="items.fn.generics.mono"><span>[items<wbr>.fn<wbr>.generics<wbr>.mono]</span></a>
</div>

当泛型函数被引用时，会根据该引用的上下文实例化其类型。例如，在这里调用 `foo` 函数：

```rust
use std::fmt::Debug;

fn foo<T>(x: &[T]) where T: Debug {
    // details elided
}

foo(&[1, 2]);
```

会用 `i32` 实例化类型参数 `T`。

<div class="rule" id="r-items.fn.generics.explicit-arguments"><a class="rule-link" href="#r-items.fn.generics.explicit-arguments" title="items.fn.generics.explicit-arguments"><span>[items<wbr>.fn<wbr>.generics<wbr>.explicit-arguments]</span></a>
</div>

类型参数也可以在函数名之后的尾随[路径](../paths.md)组件中显式提供。如果没有足够的上下文来确定类型参数，这可能是必要的。例如，`mem::size_of::<u32>() == 4`。

<div class="rule" id="r-items.fn.extern"><a class="rule-link" href="#r-items.fn.extern" title="items.fn.extern"><span>[items<wbr>.fn<wbr>.extern]</span></a>
</div>

## Extern 函数限定符

<div class="rule" id="r-items.fn.extern.intro"><a class="rule-link" href="#r-items.fn.extern.intro" title="items.fn.extern.intro"><span>[items<wbr>.fn<wbr>.extern<wbr>.intro]</span></a>
</div>

`extern` 函数限定符允许提供可用特定 ABI 调用的函数<em>定义</em>：

<!-- ignore: fake ABI -->

```rust,ignore
extern "ABI" fn foo() { /* ... */ }
```

<div class="rule" id="r-items.fn.extern.def"><a class="rule-link" href="#r-items.fn.extern.def" title="items.fn.extern.def"><span>[items<wbr>.fn<wbr>.extern<wbr>.def]</span></a>
</div>

这些函数定义常与[外部块](external-blocks.md)项结合使用；外部块项提供函数<em>声明</em>，可在不提供其<em>定义</em>的情况下调用函数：

<!-- ignore: fake ABI -->

```rust,ignore
unsafe extern "ABI" {
  unsafe fn foo(); /* no body */
  safe fn bar(); /* no body */
}
unsafe { foo() };
bar();
```

<div class="rule" id="r-items.fn.extern.default-abi"><a class="rule-link" href="#r-items.fn.extern.default-abi" title="items.fn.extern.default-abi"><span>[items<wbr>.fn<wbr>.extern<wbr>.default-abi]</span></a>
</div>

当函数项的 `FunctionQualifiers` 中省略 `"extern" Abi?*` 时，会分配 ABI `"Rust"`。例如：

```rust
fn foo() {}
```

等价于：

```rust
extern "Rust" fn foo() {}
```

<div class="rule" id="r-items.fn.extern.foreign-call"><a class="rule-link" href="#r-items.fn.extern.foreign-call" title="items.fn.extern.foreign-call"><span>[items<wbr>.fn<wbr>.extern<wbr>.foreign-call]</span></a>
</div>

函数可以由外部代码调用；使用不同于 Rust 的 ABI，例如可以提供能从 C 等其他编程语言调用的函数：

```rust
// Declares a function with the "C" ABI
extern "C" fn new_i32() -> i32 { 0 }

// Declares a function with the "stdcall" ABI
# #[cfg(any(windows, target_arch = "x86"))]
extern "stdcall" fn new_i32_stdcall() -> i32 { 0 }
```

<div class="rule" id="r-items.fn.extern.default-extern"><a class="rule-link" href="#r-items.fn.extern.default-extern" title="items.fn.extern.default-extern"><span>[items<wbr>.fn<wbr>.extern<wbr>.default-extern]</span></a>
</div>

与[外部块](external-blocks.md)一样，当使用 `extern` 关键字且省略 `"ABI"` 时，所用 ABI 默认为 `"C"`。也就是说，下面这样：

```rust
extern fn new_i32() -> i32 { 0 }
let fptr: extern fn() -> i32 = new_i32;
```

等价于：

```rust
extern "C" fn new_i32() -> i32 { 0 }
let fptr: extern "C" fn() -> i32 = new_i32;
```

<div class="rule" id="r-items.fn.extern.unwind"><a class="rule-link" href="#r-items.fn.extern.unwind" title="items.fn.extern.unwind"><span>[items<wbr>.fn<wbr>.extern<wbr>.unwind]</span></a>
</div>

### 展开

<div class="rule" id="r-items.fn.extern.unwind.intro"><a class="rule-link" href="#r-items.fn.extern.unwind.intro" title="items.fn.extern.unwind.intro"><span>[items<wbr>.fn<wbr>.extern<wbr>.unwind<wbr>.intro]</span></a>
</div>

大多数 ABI 字符串都有两个变体：一个带有 `-unwind` 后缀，另一个不带。`Rust` ABI 总是允许展开，因此不存在 `Rust-unwind` ABI。ABI 的选择与运行时 [panic handler](../panic.md#the-panic_handler-attribute) 一起决定从函数中展开时的行为。

<div class="rule" id="r-items.fn.extern.unwind.behavior"><a class="rule-link" href="#r-items.fn.extern.unwind.behavior" title="items.fn.extern.unwind.behavior"><span>[items<wbr>.fn<wbr>.extern<wbr>.unwind<wbr>.behavior]</span></a>
</div>

下表说明展开操作到达每类 ABI 边界（使用相应 ABI 字符串的函数声明或定义）时的行为。注意，Rust 运行时既不受完全发生在另一种语言运行时内部的任何展开影响，也不能影响这种展开；也就是说，这类展开在未到达 Rust ABI 边界的情况下被抛出并捕获。

`panic`\-unwind 列指通过 `panic!` 宏和类似标准库机制发生的 [panicking](../panic.md)，也指任何其他会导致 panic 的 Rust 操作，例如数组索引越界或整数溢出。

“unwinding” ABI 类别指 `"Rust"`（未标记为 `extern` 的 Rust 函数的隐式 ABI）、`"C-unwind"`，以及名称中带有 `-unwind` 的任何其他 ABI。“non-unwinding” ABI 类别指所有其他 ABI 字符串，包括 `"C"` 和 `"stdcall"`。

原生展开按目标定义。在支持抛出和捕获 C++ 异常的目标上，它指用于实现此功能的机制。一些平台实现了一种称为 ["forced unwinding"](https://rust-lang.github.io/rfcs/2945-c-unwind-abi.html#forced-unwinding) 的展开形式；Windows 上的 `longjmp` 和 `glibc` 中的 `pthread_exit` 就是以这种方式实现的。强制展开被明确排除在表中的 “Native unwind” 列之外。

|panic 运行时|ABI|`panic`\-unwind|原生展开（非强制）|
|---------|---|--------------|---------|
|`panic=unwind`|展开式|展开|展开|
|`panic=unwind`|非展开式|中止（见下方注释）|[未定义行为](../behavior-considered-undefined.md)|
|`panic=abort`|展开式|`panic` 不展开而中止|中止|
|`panic=abort`|非展开式|`panic` 不展开而中止|[未定义行为](../behavior-considered-undefined.md)|

<div class="rule" id="r-items.fn.extern.abort"><a class="rule-link" href="#r-items.fn.extern.abort" title="items.fn.extern.abort"><span>[items<wbr>.fn<wbr>.extern<wbr>.abort]</span></a>
</div>

使用 `panic=unwind` 时，当 `panic` 被非展开式 ABI 边界转变为中止时，要么不会运行任何析构器（`Drop` 调用），要么会运行直到 ABI 边界为止的所有析构器。会发生这两种行为中的哪一种是未指定的。

有关跨 FFI 边界展开的其他考虑事项和限制，请参阅 [Panic 文档中的相关小节](../panic.md#unwinding-across-ffi-boundaries)。

<div class="rule" id="r-items.fn.const"><a class="rule-link" href="#r-items.fn.const" title="items.fn.const"><span>[items<wbr>.fn<wbr>.const]</span></a>
</div>

## const 函数

const 函数的定义见 [const functions](../const_eval.md#const-functions)。

<div class="rule" id="r-items.fn.async"><a class="rule-link" href="#r-items.fn.async" title="items.fn.async"><span>[items<wbr>.fn<wbr>.async]</span></a>
</div>

## 异步函数

<div class="rule" id="r-items.fn.async.intro"><a class="rule-link" href="#r-items.fn.async.intro" title="items.fn.async.intro"><span>[items<wbr>.fn<wbr>.async<wbr>.intro]</span></a>
</div>

函数可以限定为 async，并且这也可以与 `unsafe` 限定符组合使用：

```rust
async fn regular_example() { }
async unsafe fn unsafe_example() { }
```

<div class="rule" id="r-items.fn.async.future"><a class="rule-link" href="#r-items.fn.async.future" title="items.fn.async.future"><span>[items<wbr>.fn<wbr>.async<wbr>.future]</span></a>
</div>

调用异步函数时并不会执行工作：相反，它们会把实参捕获到一个 future 中。当该 future 被轮询时，它会执行函数体。

<div class="rule" id="r-items.fn.async.desugar-brief"><a class="rule-link" href="#r-items.fn.async.desugar-brief" title="items.fn.async.desugar-brief"><span>[items<wbr>.fn<wbr>.async<wbr>.desugar-brief]</span></a>
</div>

异步函数大致等价于一个返回 [`impl Future`](../types/impl-trait.md)、并以 [`async move` 块](../expressions/block-expr.md#async-blocks)作为其主体的函数：

```rust
// Source
async fn example(x: &str) -> usize {
    x.len()
}
```

大致等价于：

```rust
# use std::future::Future;
// Desugared
fn example<'a>(x: &'a str) -> impl Future<Output = usize> + 'a {
    async move { x.len() }
}
```

<div class="rule" id="r-items.fn.async.desugar"><a class="rule-link" href="#r-items.fn.async.desugar" title="items.fn.async.desugar"><span>[items<wbr>.fn<wbr>.async<wbr>.desugar]</span></a>
</div>

实际的脱糖更复杂：

<div class="rule" id="r-items.fn.async.lifetime-capture"><a class="rule-link" href="#r-items.fn.async.lifetime-capture" title="items.fn.async.lifetime-capture"><span>[items<wbr>.fn<wbr>.async<wbr>.lifetime-capture]</span></a>
</div>

- 脱糖后的返回类型会被假定捕获 `async fn` 声明中的所有生命周期参数。这可以在上面的脱糖示例中看到：它显式地 outlive `'a`，因而捕获了 `'a`。

<div class="rule" id="r-items.fn.async.param-capture"><a class="rule-link" href="#r-items.fn.async.param-capture" title="items.fn.async.param-capture"><span>[items<wbr>.fn<wbr>.async<wbr>.param-capture]</span></a>
</div>

- 主体中的 [`async move` 块](../expressions/block-expr.md#async-blocks)会捕获所有函数参数，包括未使用的参数或绑定到 `_` 模式的参数。这确保函数参数按与该函数不是 async 时相同的顺序被丢弃，只是丢弃发生在返回的 future 被完全 await 之后。

有关 async 效果的更多信息，请参阅 [`async` 块](../expressions/block-expr.md#async-blocks)。

<div class="rule" id="r-items.fn.async.edition2018"><a class="rule-link" href="#r-items.fn.async.edition2018" title="items.fn.async.edition2018"><span>[items<wbr>.fn<wbr>.async<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 异步函数从 Rust 2018 开始才可用。

</div>

<div class="rule" id="r-items.fn.async.safety"><a class="rule-link" href="#r-items.fn.async.safety" title="items.fn.async.safety"><span>[items<wbr>.fn<wbr>.async<wbr>.safety]</span></a>
</div>

### 组合 `async` 和 `unsafe`

<div class="rule" id="r-items.fn.async.safety.intro"><a class="rule-link" href="#r-items.fn.async.safety.intro" title="items.fn.async.safety.intro"><span>[items<wbr>.fn<wbr>.async<wbr>.safety<wbr>.intro]</span></a>
</div>

声明一个同时为 async 和 unsafe 的函数是合法的。所得函数在调用时是不安全的，并且（和任何异步函数一样）会返回一个 future。这个 future 只是普通 future，因此 “await” 它不需要 `unsafe` 上下文：

```rust
// Returns a future that, when awaited, dereferences `x`.
//
// Soundness condition: `x` must be safe to dereference until
// the resulting future is complete.
async unsafe fn unsafe_example(x: *const i32) -> i32 {
  *x
}

async fn safe_example() {
    // An `unsafe` block is required to invoke the function initially:
    let p = 22;
    let future = unsafe { unsafe_example(&p) };

    // But no `unsafe` block required here. This will
    // read the value of `p`:
    let q = future.await;
}
```

注意，此行为是脱糖为返回 `impl Future` 的函数所导致的结果；在这种情况下，脱糖得到的函数是一个 `unsafe` 函数，但返回值保持不变。

在异步函数上使用 unsafe 的方式与在其他函数上使用它的方式完全相同：它表示该函数为了确保健全性，会对其调用者施加一些额外义务。与任何其他 unsafe 函数一样，这些条件可能延伸到初始调用本身之外；例如，在上面的片段中，`unsafe_example` 函数接受指针 `x` 作为实参，然后（在被 await 时）解引用该指针。这意味着 `x` 必须在 future 完成执行之前一直有效，而确保这一点是调用者的责任。

<div class="rule" id="r-items.fn.attributes"><a class="rule-link" href="#r-items.fn.attributes" title="items.fn.attributes"><span>[items<wbr>.fn<wbr>.attributes]</span></a>
</div>

## 函数上的属性

<div class="rule" id="r-items.fn.attributes.intro"><a class="rule-link" href="#r-items.fn.attributes.intro" title="items.fn.attributes.intro"><span>[items<wbr>.fn<wbr>.attributes<wbr>.intro]</span></a>
</div>

函数上允许使用[外部属性](../attributes.md)。[内部属性](../attributes.md)允许直接出现在其主体[块](../expressions/block-expr.md)内部的 `{` 之后。

这个示例展示函数上的一个内部属性。该函数的文档仅包含单词 "Example"。

```rust
fn documented() {
    #![doc = "Example"]
}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 除 lint 外，惯用做法是只在函数项上使用外部属性。

</div>

<div class="rule" id="r-items.fn.attributes.builtin-attributes"><a class="rule-link" href="#r-items.fn.attributes.builtin-attributes" title="items.fn.attributes.builtin-attributes"><span>[items<wbr>.fn<wbr>.attributes<wbr>.builtin-attributes]</span></a>
</div>

在函数上有意义的属性包括：

- [`cfg_attr`](../conditional-compilation.md#the-cfg_attr-attribute)
- [`cfg`](../conditional-compilation.md#the-cfg-attribute)
- [`cold`](../attributes/codegen.md#the-cold-attribute)
- [`deprecated`](../attributes/diagnostics.md#the-deprecated-attribute)
- [`doc`](../../rustdoc/the-doc-attribute.html)
- [`export_name`](../abi.md#the-export_name-attribute)
- [`inline`](../attributes/codegen.md#the-inline-attribute)
- [`link_section`](../abi.md#the-link_section-attribute)
- [`must_use`](../attributes/diagnostics.md#the-must_use-attribute)
- [`no_mangle`](../abi.md#the-no_mangle-attribute)
- [Lint 检查属性](../attributes/diagnostics.md#lint-check-attributes)
- [过程宏属性](../procedural-macros.md#r-macro.proc.attribute)
- [测试属性](../attributes/testing.md)

<div class="rule" id="r-items.fn.param-attributes"><a class="rule-link" href="#r-items.fn.param-attributes" title="items.fn.param-attributes"><span>[items<wbr>.fn<wbr>.param-attributes]</span></a>
</div>

## 函数形参上的属性

<div class="rule" id="r-items.fn.param-attributes.intro"><a class="rule-link" href="#r-items.fn.param-attributes.intro" title="items.fn.param-attributes.intro"><span>[items<wbr>.fn<wbr>.param-attributes<wbr>.intro]</span></a>
</div>

函数参数上允许使用[外部属性](../attributes.md)，且允许的[内置属性](../attributes.md#built-in-attributes-index)限于 `cfg`、`cfg_attr`、`allow`、`warn`、`deny` 和 `forbid`。

```rust
fn len(
    #[cfg(windows)] slice: &[u16],
    #[cfg(not(windows))] slice: &[u8],
) -> usize {
    slice.len()
}
```

<div class="rule" id="r-items.fn.param-attributes.parsed-attributes"><a class="rule-link" href="#r-items.fn.param-attributes.parsed-attributes" title="items.fn.param-attributes.parsed-attributes"><span>[items<wbr>.fn<wbr>.param-attributes<wbr>.parsed-attributes]</span></a>
</div>

也允许使用由应用于项的过程宏属性所使用的惰性辅助属性，但要注意不要把这些惰性属性包含在最终的 `TokenStream` 中。

例如，以下代码定义了一个惰性 `some_inert_attribute` 属性，它并未在任何地方被正式定义，而 `some_proc_macro_attribute` 过程宏负责检测它是否存在，并将其从输出 token stream 中移除。

<!-- ignore: requires proc macro -->

```rust,ignore
#[some_proc_macro_attribute]
fn foo_oof(#[some_inert_attribute] arg: u8) {
}
```