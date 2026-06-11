<div class="rule" id="r-type.fn-pointer"><a class="rule-link" href="#r-type.fn-pointer" title="type.fn-pointer"><span>[type<wbr>.fn-pointer]</span></a>
</div>

# 函数指针类型

<div class="rule" id="r-type.fn-pointer.syntax"><a class="rule-link" href="#r-type.fn-pointer.syntax" title="type.fn-pointer.syntax"><span>[type<wbr>.fn-pointer<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-BareFunctionType" onclick="show_railroad()">[BareFunctionType](function-pointer.md#railroad-BareFunctionType)</span> →  
    <span class="grammar-text">[ForLifetimes](../trait-bounds.md#grammar-ForLifetimes)</span><sup>?</sup> <span class="grammar-text">[FunctionTypeQualifiers](function-pointer.md#grammar-FunctionTypeQualifiers)</span> <span class="grammar-literal">fn</span>  
       <span class="grammar-literal">(</span> <span class="grammar-text">[FunctionParametersMaybeNamedVariadic](function-pointer.md#grammar-FunctionParametersMaybeNamedVariadic)</span><sup>?</sup> <span class="grammar-literal">)</span> <span class="grammar-text">[BareFunctionReturnType](function-pointer.md#grammar-BareFunctionReturnType)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-FunctionTypeQualifiers" onclick="show_railroad()">[FunctionTypeQualifiers](function-pointer.md#railroad-FunctionTypeQualifiers)</span> → <span class="grammar-literal">unsafe</span><sup>?</sup> ( <span class="grammar-literal">extern</span> <span class="grammar-text">[Abi](../items/functions.md#grammar-Abi)</span><sup>?</sup> )<sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-BareFunctionReturnType" onclick="show_railroad()">[BareFunctionReturnType](function-pointer.md#railroad-BareFunctionReturnType)</span> → <span class="grammar-literal">\-></span> <span class="grammar-text">[TypeNoBounds](../types.md#grammar-TypeNoBounds)</span>

<span class="grammar-text grammar-production" id="grammar-FunctionParametersMaybeNamedVariadic" onclick="show_railroad()">[FunctionParametersMaybeNamedVariadic](function-pointer.md#railroad-FunctionParametersMaybeNamedVariadic)</span> →  
    <span class="grammar-text">[MaybeNamedFunctionParameters](function-pointer.md#grammar-MaybeNamedFunctionParameters)</span> | <span class="grammar-text">[MaybeNamedFunctionParametersVariadic](function-pointer.md#grammar-MaybeNamedFunctionParametersVariadic)</span>

<span class="grammar-text grammar-production" id="grammar-MaybeNamedFunctionParameters" onclick="show_railroad()">[MaybeNamedFunctionParameters](function-pointer.md#railroad-MaybeNamedFunctionParameters)</span> →  
    <span class="grammar-text">[MaybeNamedParam](function-pointer.md#grammar-MaybeNamedParam)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[MaybeNamedParam](function-pointer.md#grammar-MaybeNamedParam)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-MaybeNamedParam" onclick="show_railroad()">[MaybeNamedParam](function-pointer.md#railroad-MaybeNamedParam)</span> →  
    <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> ( ( <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> | <span class="grammar-literal">\_</span> ) <span class="grammar-literal">:</span> )<sup>?</sup> <span class="grammar-text">[Type](../types.md#grammar-Type)</span>

<span class="grammar-text grammar-production" id="grammar-MaybeNamedFunctionParametersVariadic" onclick="show_railroad()">[MaybeNamedFunctionParametersVariadic](function-pointer.md#railroad-MaybeNamedFunctionParametersVariadic)</span> →  
    ( <span class="grammar-text">[MaybeNamedParam](function-pointer.md#grammar-MaybeNamedParam)</span> <span class="grammar-literal">,</span> )<sup>\*</sup> <span class="grammar-text">[MaybeNamedParam](function-pointer.md#grammar-MaybeNamedParam)</span> <span class="grammar-literal">,</span> <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-literal">...</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 808px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BareFunctionType"><svg class="railroad" viewBox="0 0 808 147" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="function-pointer.md#grammar-BareFunctionType">
<text class="comment" x="71" y="25">
BareFunctionType</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 66 h 12"/>
<path d=" M 471 66 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -424 m 215 0 l 5 -5 m 0 10 l -5 -5 m -215 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../trait-bounds.md#railroad-ForLifetimes">
<g class="nonterminal">
<rect height="22" width="116" x="71" y="55"/>
<text x="129" y="71">
ForLifetimes</text>
</g>
</a>
</g>
<a class="link" xlink:href="function-pointer.md#railroad-FunctionTypeQualifiers">
<g class="nonterminal">
<rect height="22" width="204" x="221" y="55"/>
<text x="323" y="71">
FunctionTypeQualifiers</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="435" y="55"/>
<text x="453" y="71">
fn</text>
</g>
<path d=" M 211 66 h 10"/>
<path d=" M 425 66 h 10"/>
</g>
<path d=" M 749 126 h 0 a 12 12 0 0 0 12 -12 v -36 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="47" y="115"/>
<text x="61" y="131">
(</text>
</g>
<g class="optional">
<path d=" M 85 126 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 316 m -155 0 l -5 -5 m 0 10 l 5 -5 m 155 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="function-pointer.md#railroad-FunctionParametersMaybeNamedVariadic">
<g class="nonterminal">
<rect height="22" width="316" x="109" y="115"/>
<text x="267" y="131">
FunctionParametersMaybeNamedVariadic</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="459" y="115"/>
<text x="473" y="131">
)</text>
</g>
<g class="optional">
<path d=" M 497 126 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="function-pointer.md#railroad-BareFunctionReturnType">
<g class="nonterminal">
<rect height="22" width="204" x="521" y="115"/>
<text x="623" y="131">
BareFunctionReturnType</text>
</g>
</a>
</g>
<path d=" M 75 126 h 10"/>
<path d=" M 449 126 h 10"/>
<path d=" M 487 126 h 10"/>
</g>
</g>
<path d=" M 783 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 773 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 414px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-FunctionTypeQualifiers"><svg class="railroad" viewBox="0 0 414 99" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="function-pointer.md#grammar-FunctionTypeQualifiers">
<text class="comment" x="95" y="25">
FunctionTypeQualifiers</text>
</a>
<g class="sequence">
<path d=" M 10 78 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="67"/>
<text x="93" y="83">
unsafe</text>
</g>
</g>
<g class="optional">
<path d=" M 161 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 170 m -82 0 l -5 -5 m 0 10 l 5 -5 m 82 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="185" y="67"/>
<text x="219" y="83">
extern</text>
</g>
<g class="optional">
<path d=" M 263 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../items/functions.md#railroad-Abi">
<g class="nonterminal">
<rect height="22" width="44" x="287" y="67"/>
<text x="309" y="83">
Abi</text>
</g>
</a>
</g>
<path d=" M 253 78 h 10"/>
</g>
</g>
<path d=" M 151 78 h 10"/>
</g>
<path d=" M 389 78 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 78 h 10"/>
<path d=" M 379 78 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 232px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BareFunctionReturnType"><svg class="railroad" viewBox="0 0 232 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="function-pointer.md#grammar-BareFunctionReturnType">
<text class="comment" x="95" y="25">
BareFunctionReturnType</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="42"/>
<text x="53" y="58">
-&gt;</text>
</g>
<a class="link" xlink:href="../types.md#railroad-TypeNoBounds">
<g class="nonterminal">
<rect height="22" width="116" x="81" y="42"/>
<text x="139" y="58">
TypeNoBounds</text>
</g>
</a>
<path d=" M 71 53 h 10"/>
</g>
<path d=" M 207 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 197 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 434px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-FunctionParametersMaybeNamedVariadic"><svg class="railroad" viewBox="0 0 434 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="function-pointer.md#grammar-FunctionParametersMaybeNamedVariadic">
<text class="comment" x="144" y="25">
FunctionParametersMaybeNamedVariadic</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 252 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0"/>
<g class="sequence">
<a class="link" xlink:href="function-pointer.md#railroad-MaybeNamedFunctionParameters">
<g class="nonterminal">
<rect height="22" width="252" x="59" y="42"/>
<text x="185" y="58">
MaybeNamedFunctionParameters</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 340 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 316 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="function-pointer.md#railroad-MaybeNamedFunctionParametersVariadic">
<g class="nonterminal">
<rect height="22" width="316" x="59" y="75"/>
<text x="217" y="91">
MaybeNamedFunctionParametersVariadic</text>
</g>
</a>
</g>
<path d=" M 409 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 399 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 556px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MaybeNamedFunctionParameters"><svg class="railroad" viewBox="0 0 556 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="function-pointer.md#grammar-MaybeNamedFunctionParameters">
<text class="comment" x="116" y="25">
MaybeNamedFunctionParameters</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="function-pointer.md#railroad-MaybeNamedParam">
<g class="nonterminal">
<rect height="22" width="140" x="35" y="55"/>
<text x="105" y="71">
MaybeNamedParam</text>
</g>
</a>
<g class="optional">
<path d=" M 185 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 202 m -98 0 l -5 -5 m 0 10 l 5 -5 m 98 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 209 66 h 12 m 178 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -178 m 92 0 l 5 -5 m 0 10 l -5 -5 m -92 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="221" y="55"/>
<text x="235" y="71">
,</text>
</g>
<a class="link" xlink:href="function-pointer.md#railroad-MaybeNamedParam">
<g class="nonterminal">
<rect height="22" width="140" x="259" y="55"/>
<text x="329" y="71">
MaybeNamedParam</text>
</g>
</a>
<path d=" M 249 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 445 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="469" y="55"/>
<text x="483" y="71">
,</text>
</g>
</g>
<path d=" M 175 66 h 10"/>
<path d=" M 435 66 h 10"/>
</g>
<path d=" M 531 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 521 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 580px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MaybeNamedParam"><svg class="railroad" viewBox="0 0 580 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="function-pointer.md#grammar-MaybeNamedParam">
<text class="comment" x="67" y="25">
MaybeNamedParam</text>
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
<g class="optional">
<path d=" M 249 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 186 m -90 0 l -5 -5 m 0 10 l 5 -5 m 90 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="choice">
<path d=" M 273 66 h 24 m 100 0 h 24"/>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="297" y="55"/>
<text x="347" y="71">
IDENTIFIER</text>
</g>
</a>
<path d=" M 273 66 a 12 12 0 0 1 12 12 v 9 m 124 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 285 87 v 0 a 12 12 0 0 0 12 12 m 28 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="297" y="88"/>
<text x="311" y="104">
_</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="431" y="55"/>
<text x="445" y="71">
:</text>
</g>
<path d=" M 421 66 h 10"/>
</g>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="493" y="55"/>
<text x="519" y="71">
Type</text>
</g>
</a>
<path d=" M 239 66 h 10"/>
<path d=" M 483 66 h 10"/>
</g>
<path d=" M 555 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 545 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 776px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MaybeNamedFunctionParametersVariadic"><svg class="railroad" viewBox="0 0 776 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="function-pointer.md#grammar-MaybeNamedFunctionParametersVariadic">
<text class="comment" x="144" y="25">
MaybeNamedFunctionParametersVariadic</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 202 m -98 0 l -5 -5 m 0 10 l 5 -5 m 98 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 66 h 12 m 178 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -178 m 92 0 l 5 -5 m 0 10 l -5 -5 m -92 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<a class="link" xlink:href="function-pointer.md#railroad-MaybeNamedParam">
<g class="nonterminal">
<rect height="22" width="140" x="71" y="55"/>
<text x="141" y="71">
MaybeNamedParam</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="221" y="55"/>
<text x="235" y="71">
,</text>
</g>
<path d=" M 211 66 h 10"/>
</g>
</g>
</g>
<a class="link" xlink:href="function-pointer.md#railroad-MaybeNamedParam">
<g class="nonterminal">
<rect height="22" width="140" x="295" y="55"/>
<text x="365" y="71">
MaybeNamedParam</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="445" y="55"/>
<text x="459" y="71">
,</text>
</g>
<g class="optional">
<path d=" M 483 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 507 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="519" y="55"/>
<text x="585" y="71">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="697" y="55"/>
<text x="719" y="71">
...</text>
</g>
<path d=" M 285 66 h 10"/>
<path d=" M 435 66 h 10"/>
<path d=" M 473 66 h 10"/>
<path d=" M 687 66 h 10"/>
</g>
<path d=" M 751 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 741 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-type.fn-pointer.intro"><a class="rule-link" href="#r-type.fn-pointer.intro" title="type.fn-pointer.intro"><span>[type<wbr>.fn-pointer<wbr>.intro]</span></a>
</div>

函数指针类型使用 `fn` 关键字书写，指代一个其身份不一定在编译时已知的函数。

下面是将 `Binop` 定义为函数指针类型的示例：

```rust
fn add(x: i32, y: i32) -> i32 {
    x + y
}

let mut x = add(5,7);

type Binop = fn(i32, i32) -> i32;
let bo: Binop = add;
x = bo(5,7);
```

<div class="rule" id="r-type.fn-pointer.coercion"><a class="rule-link" href="#r-type.fn-pointer.coercion" title="type.fn-pointer.coercion"><span>[type<wbr>.fn-pointer<wbr>.coercion]</span></a>
</div>

函数指针可以通过从[函数项](function-item.md)以及非捕获、非 async 的[闭包](closure.md)进行强制转换来创建。

<div class="rule" id="r-type.fn-pointer.qualifiers"><a class="rule-link" href="#r-type.fn-pointer.qualifiers" title="type.fn-pointer.qualifiers"><span>[type<wbr>.fn-pointer<wbr>.qualifiers]</span></a>
</div>

`unsafe` 限定符表示该类型的值是一个 [unsafe 函数](../unsafe-keyword.md)，而 `extern` 限定符表示它是一个 [extern 函数](../items/functions.md#extern-function-qualifier)。

<div class="rule" id="r-type.fn-pointer.constraint-variadic"><a class="rule-link" href="#r-type.fn-pointer.constraint-variadic" title="type.fn-pointer.constraint-variadic"><span>[type<wbr>.fn-pointer<wbr>.constraint-variadic]</span></a>
</div>

要使函数成为变参函数，它的 `extern` ABI 必须是 [items.extern.variadic.conventions](../items/external-blocks.md#r-items.extern.variadic.conventions) 中列出的 ABI 之一。

<div class="rule" id="r-type.fn-pointer.attributes"><a class="rule-link" href="#r-type.fn-pointer.attributes" title="type.fn-pointer.attributes"><span>[type<wbr>.fn-pointer<wbr>.attributes]</span></a>
</div>

## 函数指针形参上的属性

函数指针形参上的属性遵循与[常规函数形参](../items/functions.md#attributes-on-function-parameters)相同的规则和限制。