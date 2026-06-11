<div class="rule" id="r-items.struct"><a class="rule-link" href="#r-items.struct" title="items.struct"><span>[items<wbr>.struct]</span></a>
</div>

# 结构体

<div class="rule" id="r-items.struct.syntax"><a class="rule-link" href="#r-items.struct.syntax" title="items.struct.syntax"><span>[items<wbr>.struct<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Struct" onclick="show_railroad()">[Struct](structs.md#railroad-Struct)</span> →  
      <span class="grammar-text">[StructStruct](structs.md#grammar-StructStruct)</span>  
    \| <span class="grammar-text">[TupleStruct](structs.md#grammar-TupleStruct)</span>

<span class="grammar-text grammar-production" id="grammar-StructStruct" onclick="show_railroad()">[StructStruct](structs.md#railroad-StructStruct)</span> →  
    <span class="grammar-literal">struct</span> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-text">[GenericParams](generics.md#grammar-GenericParams)</span><sup>?</sup> <span class="grammar-text">[WhereClause](generics.md#grammar-WhereClause)</span><sup>?</sup> ( <span class="grammar-literal">{</span> <span class="grammar-text">[StructFields](structs.md#grammar-StructFields)</span><sup>?</sup> <span class="grammar-literal">}</span> | <span class="grammar-literal">;</span> )

<span class="grammar-text grammar-production" id="grammar-TupleStruct" onclick="show_railroad()">[TupleStruct](structs.md#railroad-TupleStruct)</span> →  
    <span class="grammar-literal">struct</span> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-text">[GenericParams](generics.md#grammar-GenericParams)</span><sup>?</sup> <span class="grammar-literal">(</span> <span class="grammar-text">[TupleFields](structs.md#grammar-TupleFields)</span><sup>?</sup> <span class="grammar-literal">)</span> <span class="grammar-text">[WhereClause](generics.md#grammar-WhereClause)</span><sup>?</sup> <span class="grammar-literal">;</span>

<span class="grammar-text grammar-production" id="grammar-StructFields" onclick="show_railroad()">[StructFields](structs.md#railroad-StructFields)</span> → <span class="grammar-text">[StructField](structs.md#grammar-StructField)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[StructField](structs.md#grammar-StructField)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-StructField" onclick="show_railroad()">[StructField](structs.md#railroad-StructField)</span> → <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-text">[Visibility](../visibility-and-privacy.md#grammar-Visibility)</span><sup>?</sup> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-literal">:</span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span>

<span class="grammar-text grammar-production" id="grammar-TupleFields" onclick="show_railroad()">[TupleFields](structs.md#railroad-TupleFields)</span> → <span class="grammar-text">[TupleField](structs.md#grammar-TupleField)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[TupleField](structs.md#grammar-TupleField)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-TupleField" onclick="show_railroad()">[TupleField](structs.md#railroad-TupleField)</span> → <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-text">[Visibility](../visibility-and-privacy.md#grammar-Visibility)</span><sup>?</sup> <span class="grammar-text">[Type](../types.md#grammar-Type)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 234px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Struct"><svg class="railroad" viewBox="0 0 234 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="structs.md#grammar-Struct">
<text class="comment" x="36" y="25">
Struct</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 116 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="structs.md#railroad-StructStruct">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="42"/>
<text x="117" y="58">
StructStruct</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 140 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 108 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="structs.md#railroad-TupleStruct">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="75"/>
<text x="113" y="91">
TupleStruct</text>
</g>
</a>
</g>
<path d=" M 209 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 199 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 894px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructStruct"><svg class="railroad" viewBox="0 0 894 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="structs.md#grammar-StructStruct">
<text class="comment" x="57" y="25">
StructStruct</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="35" y="55"/>
<text x="69" y="71">
struct</text>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="113" y="55"/>
<text x="163" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 223 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-GenericParams">
<g class="nonterminal">
<rect height="22" width="124" x="247" y="55"/>
<text x="309" y="71">
GenericParams</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 405 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-WhereClause">
<g class="nonterminal">
<rect height="22" width="108" x="429" y="55"/>
<text x="483" y="71">
WhereClause</text>
</g>
</a>
</g>
<g class="choice">
<path d=" M 571 66 h 24 m 240 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="595" y="55"/>
<text x="609" y="71">
{</text>
</g>
<g class="optional">
<path d=" M 633 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="structs.md#railroad-StructFields">
<g class="nonterminal">
<rect height="22" width="116" x="657" y="55"/>
<text x="715" y="71">
StructFields</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="807" y="55"/>
<text x="821" y="71">
}</text>
</g>
<path d=" M 623 66 h 10"/>
<path d=" M 797 66 h 10"/>
</g>
<path d=" M 571 66 a 12 12 0 0 1 12 12 v 9 m 264 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 583 87 v 0 a 12 12 0 0 0 12 12 m 28 0 h 212 m -103 0 l -5 -5 m 0 10 l 5 -5 m 103 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="595" y="88"/>
<text x="609" y="104">
;</text>
</g>
</g>
<path d=" M 103 66 h 10"/>
<path d=" M 213 66 h 10"/>
<path d=" M 395 66 h 10"/>
<path d=" M 561 66 h 10"/>
</g>
<path d=" M 869 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 859 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 876px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TupleStruct"><svg class="railroad" viewBox="0 0 876 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="structs.md#grammar-TupleStruct">
<text class="comment" x="53" y="25">
TupleStruct</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="35" y="55"/>
<text x="69" y="71">
struct</text>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="113" y="55"/>
<text x="163" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 223 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-GenericParams">
<g class="nonterminal">
<rect height="22" width="124" x="247" y="55"/>
<text x="309" y="71">
GenericParams</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="405" y="55"/>
<text x="419" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 443 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="structs.md#railroad-TupleFields">
<g class="nonterminal">
<rect height="22" width="108" x="467" y="55"/>
<text x="521" y="71">
TupleFields</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="609" y="55"/>
<text x="623" y="71">
)</text>
</g>
<g class="optional">
<path d=" M 647 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-WhereClause">
<g class="nonterminal">
<rect height="22" width="108" x="671" y="55"/>
<text x="725" y="71">
WhereClause</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="813" y="55"/>
<text x="827" y="71">
;</text>
</g>
<path d=" M 103 66 h 10"/>
<path d=" M 213 66 h 10"/>
<path d=" M 395 66 h 10"/>
<path d=" M 433 66 h 10"/>
<path d=" M 599 66 h 10"/>
<path d=" M 637 66 h 10"/>
<path d=" M 803 66 h 10"/>
</g>
<path d=" M 851 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 841 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 492px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructFields"><svg class="railroad" viewBox="0 0 492 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="structs.md#grammar-StructFields">
<text class="comment" x="57" y="25">
StructFields</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="structs.md#railroad-StructField">
<g class="nonterminal">
<rect height="22" width="108" x="35" y="55"/>
<text x="89" y="71">
StructField</text>
</g>
</a>
<g class="optional">
<path d=" M 153 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 170 m -82 0 l -5 -5 m 0 10 l 5 -5 m 82 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 177 66 h 12 m 146 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -146 m 76 0 l 5 -5 m 0 10 l -5 -5 m -76 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="189" y="55"/>
<text x="203" y="71">
,</text>
</g>
<a class="link" xlink:href="structs.md#railroad-StructField">
<g class="nonterminal">
<rect height="22" width="108" x="227" y="55"/>
<text x="281" y="71">
StructField</text>
</g>
</a>
<path d=" M 217 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 381 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="405" y="55"/>
<text x="419" y="71">
,</text>
</g>
</g>
<path d=" M 143 66 h 10"/>
<path d=" M 371 66 h 10"/>
</g>
<path d=" M 467 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 457 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 642px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructField"><svg class="railroad" viewBox="0 0 642 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="structs.md#grammar-StructField">
<text class="comment" x="53" y="25">
StructField</text>
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
<path d=" M 249 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../visibility-and-privacy.md#railroad-Visibility">
<g class="nonterminal">
<rect height="22" width="100" x="273" y="55"/>
<text x="323" y="71">
Visibility</text>
</g>
</a>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="407" y="55"/>
<text x="457" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="517" y="55"/>
<text x="531" y="71">
:</text>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="555" y="55"/>
<text x="581" y="71">
Type</text>
</g>
</a>
<path d=" M 239 66 h 10"/>
<path d=" M 397 66 h 10"/>
<path d=" M 507 66 h 10"/>
<path d=" M 545 66 h 10"/>
</g>
<path d=" M 617 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 607 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 476px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TupleFields"><svg class="railroad" viewBox="0 0 476 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="structs.md#grammar-TupleFields">
<text class="comment" x="53" y="25">
TupleFields</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="structs.md#railroad-TupleField">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="55"/>
<text x="85" y="71">
TupleField</text>
</g>
</a>
<g class="optional">
<path d=" M 145 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 162 m -78 0 l -5 -5 m 0 10 l 5 -5 m 78 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 169 66 h 12 m 138 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -138 m 72 0 l 5 -5 m 0 10 l -5 -5 m -72 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="181" y="55"/>
<text x="195" y="71">
,</text>
</g>
<a class="link" xlink:href="structs.md#railroad-TupleField">
<g class="nonterminal">
<rect height="22" width="100" x="219" y="55"/>
<text x="269" y="71">
TupleField</text>
</g>
</a>
<path d=" M 209 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 365 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="389" y="55"/>
<text x="403" y="71">
,</text>
</g>
</g>
<path d=" M 135 66 h 10"/>
<path d=" M 355 66 h 10"/>
</g>
<path d=" M 451 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 441 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 494px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TupleField"><svg class="railroad" viewBox="0 0 494 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="structs.md#grammar-TupleField">
<text class="comment" x="50" y="25">
TupleField</text>
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
<path d=" M 249 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../visibility-and-privacy.md#railroad-Visibility">
<g class="nonterminal">
<rect height="22" width="100" x="273" y="55"/>
<text x="323" y="71">
Visibility</text>
</g>
</a>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="407" y="55"/>
<text x="433" y="71">
Type</text>
</g>
</a>
<path d=" M 239 66 h 10"/>
<path d=" M 397 66 h 10"/>
</g>
<path d=" M 469 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 459 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.struct.intro"><a class="rule-link" href="#r-items.struct.intro" title="items.struct.intro"><span>[items<wbr>.struct<wbr>.intro]</span></a>
</div>

_结构体_ 是一种名义[结构体类型](../types/struct.md)，使用关键字 `struct` 定义。

<div class="rule" id="r-items.struct.namespace"><a class="rule-link" href="#r-items.struct.namespace" title="items.struct.namespace"><span>[items<wbr>.struct<wbr>.namespace]</span></a>
</div>

结构体声明会在其所在模块或块的[类型命名空间](../names/namespaces.md)中定义给定名称。

下面是一个 `struct` 项及其用法示例：

```rust
struct Point {x: i32, y: i32}
let p = Point {x: 10, y: 11};
let px: i32 = p.x;
```

<div class="rule" id="r-items.struct.tuple"><a class="rule-link" href="#r-items.struct.tuple" title="items.struct.tuple"><span>[items<wbr>.struct<wbr>.tuple]</span></a>
</div>

_元组结构体_ 是一种名义[元组类型](../types/tuple.md)，也使用关键字 `struct` 定义。除定义一个类型之外，它还会在[值命名空间](../names/namespaces.md)中定义一个同名构造器。该构造器是一个可被调用以创建结构体新实例的函数。例如：

```rust
struct Point(i32, i32);
let p = Point(10, 11);
let px: i32 = match p { Point(x, _) => x };
```

<div class="rule" id="r-items.struct.unit"><a class="rule-link" href="#r-items.struct.unit" title="items.struct.unit"><span>[items<wbr>.struct<wbr>.unit]</span></a>
</div>

_类单元结构体_ 是没有任何字段的结构体，通过完全省略字段列表来定义。这样的结构体会隐式定义一个同名的、类型为该结构体的[常量](constant-items.md)。例如：

```rust
struct Cookie;
let c = [Cookie, Cookie {}, Cookie, Cookie {}];
```

等价于

```rust
struct Cookie {}
const Cookie: Cookie = Cookie {};
let c = [Cookie, Cookie {}, Cookie, Cookie {}];
```

<div class="rule" id="r-items.struct.layout"><a class="rule-link" href="#r-items.struct.layout" title="items.struct.layout"><span>[items<wbr>.struct<wbr>.layout]</span></a>
</div>

结构体的精确内存布局未指定。可以使用 [`repr` 属性](../type-layout.md#representations)指定特定布局。