<div class="rule" id="r-items.enum"><a class="rule-link" href="#r-items.enum" title="items.enum"><span>[items<wbr>.enum]</span></a>
</div>

# 枚举

<div class="rule" id="r-items.enum.syntax"><a class="rule-link" href="#r-items.enum.syntax" title="items.enum.syntax"><span>[items<wbr>.enum<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Enumeration" onclick="show_railroad()">[Enumeration](enumerations.md#railroad-Enumeration)</span> →  
    <span class="grammar-literal">enum</span> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-text">[GenericParams](generics.md#grammar-GenericParams)</span><sup>?</sup> <span class="grammar-text">[WhereClause](generics.md#grammar-WhereClause)</span><sup>?</sup> <span class="grammar-literal">{</span> <span class="grammar-text">[EnumVariants](enumerations.md#grammar-EnumVariants)</span><sup>?</sup> <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-EnumVariants" onclick="show_railroad()">[EnumVariants](enumerations.md#railroad-EnumVariants)</span> → <span class="grammar-text">[EnumVariant](enumerations.md#grammar-EnumVariant)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[EnumVariant](enumerations.md#grammar-EnumVariant)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-EnumVariant" onclick="show_railroad()">[EnumVariant](enumerations.md#railroad-EnumVariant)</span> →  
    <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-text">[Visibility](../visibility-and-privacy.md#grammar-Visibility)</span><sup>?</sup>  
    <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> ( <span class="grammar-text">[EnumVariantTuple](enumerations.md#grammar-EnumVariantTuple)</span> | <span class="grammar-text">[EnumVariantStruct](enumerations.md#grammar-EnumVariantStruct)</span> )<sup>?</sup> <span class="grammar-text">[EnumVariantDiscriminant](enumerations.md#grammar-EnumVariantDiscriminant)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-EnumVariantTuple" onclick="show_railroad()">[EnumVariantTuple](enumerations.md#railroad-EnumVariantTuple)</span> → <span class="grammar-literal">(</span> <span class="grammar-text">[TupleFields](structs.md#grammar-TupleFields)</span><sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-EnumVariantStruct" onclick="show_railroad()">[EnumVariantStruct](enumerations.md#railroad-EnumVariantStruct)</span> → <span class="grammar-literal">{</span> <span class="grammar-text">[StructFields](structs.md#grammar-StructFields)</span><sup>?</sup> <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-EnumVariantDiscriminant" onclick="show_railroad()">[EnumVariantDiscriminant](enumerations.md#railroad-EnumVariantDiscriminant)</span> → <span class="grammar-literal">=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 830px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Enumeration"><svg class="railroad" viewBox="0 0 830 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="enumerations.md#grammar-Enumeration">
<text class="comment" x="53" y="25">
Enumeration</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="35" y="55"/>
<text x="61" y="71">
enum</text>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="97" y="55"/>
<text x="147" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 207 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-GenericParams">
<g class="nonterminal">
<rect height="22" width="124" x="231" y="55"/>
<text x="293" y="71">
GenericParams</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 389 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-WhereClause">
<g class="nonterminal">
<rect height="22" width="108" x="413" y="55"/>
<text x="467" y="71">
WhereClause</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="555" y="55"/>
<text x="569" y="71">
{</text>
</g>
<g class="optional">
<path d=" M 593 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="enumerations.md#railroad-EnumVariants">
<g class="nonterminal">
<rect height="22" width="116" x="617" y="55"/>
<text x="675" y="71">
EnumVariants</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="767" y="55"/>
<text x="781" y="71">
}</text>
</g>
<path d=" M 87 66 h 10"/>
<path d=" M 197 66 h 10"/>
<path d=" M 379 66 h 10"/>
<path d=" M 545 66 h 10"/>
<path d=" M 583 66 h 10"/>
<path d=" M 757 66 h 10"/>
</g>
<path d=" M 805 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 795 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 492px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-EnumVariants"><svg class="railroad" viewBox="0 0 492 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="enumerations.md#grammar-EnumVariants">
<text class="comment" x="57" y="25">
EnumVariants</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="enumerations.md#railroad-EnumVariant">
<g class="nonterminal">
<rect height="22" width="108" x="35" y="55"/>
<text x="89" y="71">
EnumVariant</text>
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
<a class="link" xlink:href="enumerations.md#railroad-EnumVariant">
<g class="nonterminal">
<rect height="22" width="108" x="227" y="55"/>
<text x="281" y="71">
EnumVariant</text>
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
<div style="width: 738px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-EnumVariant"><svg class="railroad" viewBox="0 0 738 192" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="enumerations.md#grammar-EnumVariant">
<text class="comment" x="53" y="25">
EnumVariant</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 66 h 12"/>
<path d=" M 409 66 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 1 -12 12 h -362 m 184 0 l 5 -5 m 0 10 l -5 -5 m -184 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 71 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="83" y="55"/>
<text x="149" y="71">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<g class="optional">
<path d=" M 261 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../visibility-and-privacy.md#railroad-Visibility">
<g class="nonterminal">
<rect height="22" width="100" x="285" y="55"/>
<text x="335" y="71">
Visibility</text>
</g>
</a>
</g>
<path d=" M 251 66 h 10"/>
</g>
<path d=" M 679 138 h 0 a 12 12 0 0 0 12 -12 v -48 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="47" y="127"/>
<text x="97" y="143">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 157 138 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="choice">
<path d=" M 181 138 h 24 m 148 0 h 32"/>
<a class="link" xlink:href="enumerations.md#railroad-EnumVariantTuple">
<g class="nonterminal">
<rect height="22" width="148" x="205" y="127"/>
<text x="279" y="143">
EnumVariantTuple</text>
</g>
</a>
<path d=" M 181 138 a 12 12 0 0 1 12 12 v 9 m 180 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 193 159 v 0 a 12 12 0 0 0 12 12 m 156 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="enumerations.md#railroad-EnumVariantStruct">
<g class="nonterminal">
<rect height="22" width="156" x="205" y="160"/>
<text x="283" y="176">
EnumVariantStruct</text>
</g>
</a>
</g>
</g>
<g class="optional">
<path d=" M 419 138 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 212 m -103 0 l -5 -5 m 0 10 l 5 -5 m 103 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="enumerations.md#railroad-EnumVariantDiscriminant">
<g class="nonterminal">
<rect height="22" width="212" x="443" y="127"/>
<text x="549" y="143">
EnumVariantDiscriminant</text>
</g>
</a>
</g>
<path d=" M 147 138 h 10"/>
<path d=" M 409 138 h 10"/>
</g>
</g>
<path d=" M 713 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 703 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 302px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-EnumVariantTuple"><svg class="railroad" viewBox="0 0 302 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="enumerations.md#grammar-EnumVariantTuple">
<text class="comment" x="71" y="25">
EnumVariantTuple</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="55"/>
<text x="49" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 73 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="structs.md#railroad-TupleFields">
<g class="nonterminal">
<rect height="22" width="108" x="97" y="55"/>
<text x="151" y="71">
TupleFields</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="239" y="55"/>
<text x="253" y="71">
)</text>
</g>
<path d=" M 63 66 h 10"/>
<path d=" M 229 66 h 10"/>
</g>
<path d=" M 277 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 267 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 310px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-EnumVariantStruct"><svg class="railroad" viewBox="0 0 310 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="enumerations.md#grammar-EnumVariantStruct">
<text class="comment" x="74" y="25">
EnumVariantStruct</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="55"/>
<text x="49" y="71">
{</text>
</g>
<g class="optional">
<path d=" M 73 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="structs.md#railroad-StructFields">
<g class="nonterminal">
<rect height="22" width="116" x="97" y="55"/>
<text x="155" y="71">
StructFields</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="247" y="55"/>
<text x="261" y="71">
}</text>
</g>
<path d=" M 63 66 h 10"/>
<path d=" M 237 66 h 10"/>
</g>
<path d=" M 285 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 275 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 208px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-EnumVariantDiscriminant"><svg class="railroad" viewBox="0 0 208 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="enumerations.md#grammar-EnumVariantDiscriminant">
<text class="comment" x="99" y="25">
EnumVariantDiscriminant</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="73" y="42"/>
<text x="123" y="58">
Expression</text>
</g>
</a>
<path d=" M 63 53 h 10"/>
</g>
<path d=" M 183 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 173 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.enum.intro"><a class="rule-link" href="#r-items.enum.intro" title="items.enum.intro"><span>[items<wbr>.enum<wbr>.intro]</span></a>
</div>

<em>枚举</em>（也称为 <em>enum</em>）是对一种名义[枚举类型](../types/enum.md)以及一组<em>构造器</em>的同时定义，这些构造器可用于创建或模式匹配相应枚举类型的值。

<div class="rule" id="r-items.enum.decl"><a class="rule-link" href="#r-items.enum.decl" title="items.enum.decl"><span>[items<wbr>.enum<wbr>.decl]</span></a>
</div>

枚举使用关键字 `enum` 声明。

<div class="rule" id="r-items.enum.namespace"><a class="rule-link" href="#r-items.enum.namespace" title="items.enum.namespace"><span>[items<wbr>.enum<wbr>.namespace]</span></a>
</div>

`enum` 声明会在其所在模块或块的[类型命名空间](../names/namespaces.md)中定义该枚举类型。

下面是一个 `enum` 项及其用法示例：

```rust
enum Animal {
    Dog,
    Cat,
}

let mut a: Animal = Animal::Dog;
a = Animal::Cat;
```

<div class="rule" id="r-items.enum.constructor"><a class="rule-link" href="#r-items.enum.constructor" title="items.enum.constructor"><span>[items<wbr>.enum<wbr>.constructor]</span></a>
</div>

枚举构造器可以具有具名字段或未命名字段：

```rust
enum Animal {
    Dog(String, f64),
    Cat { name: String, weight: f64 },
}

let mut a: Animal = Animal::Dog("Cocoa".to_string(), 37.2);
a = Animal::Cat { name: "Spotty".to_string(), weight: 2.7 };
```

在这个示例中，`Cat` 是<em>类结构体枚举变体</em>，而 `Dog` 只是称为枚举变体。

<div class="rule" id="r-items.enum.fieldless"><a class="rule-link" href="#r-items.enum.fieldless" title="items.enum.fieldless"><span>[items<wbr>.enum<wbr>.fieldless]</span></a>
</div>

没有构造器包含字段的枚举称为 _<span id="field-less-enum">无字段枚举</span>_。例如，这是一个无字段枚举：

```rust
enum Fieldless {
    Tuple(),
    Struct{},
    Unit,
}
```

<div class="rule" id="r-items.enum.unit-only"><a class="rule-link" href="#r-items.enum.unit-only" title="items.enum.unit-only"><span>[items<wbr>.enum<wbr>.unit-only]</span></a>
</div>

如果无字段枚举只包含单元变体，则该枚举称为 _<span id="unit-only-enum">仅单元枚举</span>_。例如：

```rust
enum Enum {
    Foo = 3,
    Bar = 2,
    Baz = 1,
}
```

<div class="rule" id="r-items.enum.constructor-names"><a class="rule-link" href="#r-items.enum.constructor-names" title="items.enum.constructor-names"><span>[items<wbr>.enum<wbr>.constructor-names]</span></a>
</div>

变体构造器类似于 [struct](structs.md) 定义，并且可以通过从枚举名称开始的路径来引用，包括在 [use 声明](use-declarations.md)中。

<div class="rule" id="r-items.enum.constructor-namespace"><a class="rule-link" href="#r-items.enum.constructor-namespace" title="items.enum.constructor-namespace"><span>[items<wbr>.enum<wbr>.constructor-namespace]</span></a>
</div>

每个变体都会在[类型命名空间](../names/namespaces.md)中定义其类型，不过该类型不能用作类型说明符。类元组和类单元变体还会在[值命名空间](../names/namespaces.md)中定义一个构造器。

<div class="rule" id="r-items.enum.struct-expr"><a class="rule-link" href="#r-items.enum.struct-expr" title="items.enum.struct-expr"><span>[items<wbr>.enum<wbr>.struct-expr]</span></a>
</div>

类结构体变体可以使用[结构体表达式](../expressions/struct-expr.md)实例化。

<div class="rule" id="r-items.enum.tuple-expr"><a class="rule-link" href="#r-items.enum.tuple-expr" title="items.enum.tuple-expr"><span>[items<wbr>.enum<wbr>.tuple-expr]</span></a>
</div>

类元组变体可以使用[调用表达式](../expressions/call-expr.md)或[结构体表达式](../expressions/struct-expr.md)实例化。

<div class="rule" id="r-items.enum.path-expr"><a class="rule-link" href="#r-items.enum.path-expr" title="items.enum.path-expr"><span>[items<wbr>.enum<wbr>.path-expr]</span></a>
</div>

类单元变体可以使用[路径表达式](../expressions/path-expr.md)或[结构体表达式](../expressions/struct-expr.md)实例化。例如：

```rust
enum Examples {
    UnitLike,
    TupleLike(i32),
    StructLike { value: i32 },
}

use Examples::*; // Creates aliases to all variants.
let x = UnitLike; // Path expression of the const item.
let x = UnitLike {}; // Struct expression.
let y = TupleLike(123); // Call expression.
let y = TupleLike { 0: 123 }; // Struct expression using integer field names.
let z = StructLike { value: 123 }; // Struct expression.
```

<span id="custom-discriminant-values-for-fieldless-enumerations"></span>

<div class="rule" id="r-items.enum.discriminant"><a class="rule-link" href="#r-items.enum.discriminant" title="items.enum.discriminant"><span>[items<wbr>.enum<wbr>.discriminant]</span></a>
</div>

## 判别值

<div class="rule" id="r-items.enum.discriminant.intro"><a class="rule-link" href="#r-items.enum.discriminant.intro" title="items.enum.discriminant.intro"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.intro]</span></a>
</div>

每个枚举实例都有一个<em>判别值</em>：它是在逻辑上与该实例关联的整数，用于确定该实例持有哪个变体。

<div class="rule" id="r-items.enum.discriminant.repr-rust"><a class="rule-link" href="#r-items.enum.discriminant.repr-rust" title="items.enum.discriminant.repr-rust"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.repr-rust]</span></a>
</div>

在 [`Rust` 表示](../type-layout.md#the-rust-representation)下，判别值被解释为 `isize` 值。不过，编译器允许在实际内存布局中使用更小的类型（或用另一种方式区分变体）。

### 赋予判别值

<div class="rule" id="r-items.enum.discriminant.explicit"><a class="rule-link" href="#r-items.enum.discriminant.explicit" title="items.enum.discriminant.explicit"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.explicit]</span></a>
</div>

#### 显式判别值

<div class="rule" id="r-items.enum.discriminant.explicit.intro"><a class="rule-link" href="#r-items.enum.discriminant.explicit.intro" title="items.enum.discriminant.explicit.intro"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.explicit<wbr>.intro]</span></a>
</div>

在两种情况下，可以通过在变体名称后跟随 `=` 和[常量表达式](../const_eval.md#constant-expressions)来显式设置变体的判别值：

<div class="rule" id="r-items.enum.discriminant.explicit.unit-only"><a class="rule-link" href="#r-items.enum.discriminant.explicit.unit-only" title="items.enum.discriminant.explicit.unit-only"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.explicit<wbr>.unit-only]</span></a>
</div>

1. 如果枚举是“[仅单元](#unit-only-enum)”的。

<div class="rule" id="r-items.enum.discriminant.explicit.primitive-repr"><a class="rule-link" href="#r-items.enum.discriminant.explicit.primitive-repr" title="items.enum.discriminant.explicit.primitive-repr"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.explicit<wbr>.primitive-repr]</span></a>
</div>

2. 如果使用了[原始表示](../type-layout.md#primitive-representations)。例如：
   
   ```rust
   #[repr(u8)]
   enum Enum {
       Unit = 3,
       Tuple(u16),
       Struct {
           a: u8,
           b: u16,
       } = 1,
   }
   ```

<div class="rule" id="r-items.enum.discriminant.implicit"><a class="rule-link" href="#r-items.enum.discriminant.implicit" title="items.enum.discriminant.implicit"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.implicit]</span></a>
</div>

#### 隐式判别值

如果没有为某个变体指定判别值，则将其设为比声明中前一个变体的判别值大一。如果声明中第一个变体的判别值未指定，则将其设为零。

```rust
enum Foo {
    Bar,            // 0
    Baz = 123,      // 123
    Quux,           // 124
}

let baz_discriminant = Foo::Baz as u32;
assert_eq!(baz_discriminant, 123);
```

<div class="rule" id="r-items.enum.discriminant.restrictions"><a class="rule-link" href="#r-items.enum.discriminant.restrictions" title="items.enum.discriminant.restrictions"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.restrictions]</span></a>
</div>

#### 限制

<div class="rule" id="r-items.enum.discriminant.restrictions.same-discriminant"><a class="rule-link" href="#r-items.enum.discriminant.restrictions.same-discriminant" title="items.enum.discriminant.restrictions.same-discriminant"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.restrictions<wbr>.same-discriminant]</span></a>
</div>

如果两个变体共享同一判别值，则会出错。

```rust,compile_fail
enum SharedDiscriminantError {
    SharedA = 1,
    SharedB = 1,
}

enum SharedDiscriminantError2 {
    Zero,       // 0
    One,        // 1
    OneToo = 1, // 1 (collision with previous!)
}
```

<div class="rule" id="r-items.enum.discriminant.restrictions.above-max-discriminant"><a class="rule-link" href="#r-items.enum.discriminant.restrictions.above-max-discriminant" title="items.enum.discriminant.restrictions.above-max-discriminant"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.restrictions<wbr>.above-max-discriminant]</span></a>
</div>

如果前一个判别值是该判别值大小所能表示的最大值，而当前判别值未指定，也会出错。

```rust,compile_fail
#[repr(u8)]
enum OverflowingDiscriminantError {
    Max = 255,
    MaxPlusOne, // Would be 256, but that overflows the enum.
}

#[repr(u8)]
enum OverflowingDiscriminantError2 {
    MaxMinusOne = 254, // 254
    Max,               // 255
    MaxPlusOne,        // Would be 256, but that overflows the enum.
}
```

<div class="rule" id="r-items.enum.discriminant.restrictions.generics"><a class="rule-link" href="#r-items.enum.discriminant.restrictions.generics" title="items.enum.discriminant.restrictions.generics"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.restrictions<wbr>.generics]</span></a>
</div>

显式 enum 判别值初始化式不能使用外围 enum 的泛型参数。

```rust,compile_fail
#[repr(u32)]
enum E<'a, T, const N: u32> {
    Lifetime(&'a T) = {
        let a: &'a (); // ERROR.
        1
    },
    Type(T) = {
        let x: T; // ERROR.
        2
    },
    Const = N, // ERROR.
}
```

### 访问判别值

#### 通过 `mem::discriminant`

<div class="rule" id="r-items.enum.discriminant.access-opaque"><a class="rule-link" href="#r-items.enum.discriminant.access-opaque" title="items.enum.discriminant.access-opaque"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.access-opaque]</span></a>
</div>

[`std::mem::discriminant`](../../core/mem/fn.discriminant.html) 返回一个对 enum 值判别值的不透明引用，可用于比较。它不能用于取得判别值的值。

<div class="rule" id="r-items.enum.discriminant.coercion"><a class="rule-link" href="#r-items.enum.discriminant.coercion" title="items.enum.discriminant.coercion"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.coercion]</span></a>
</div>

#### 转换

<div class="rule" id="r-items.enum.discriminant.coercion.intro"><a class="rule-link" href="#r-items.enum.discriminant.coercion.intro" title="items.enum.discriminant.coercion.intro"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.coercion<wbr>.intro]</span></a>
</div>

如果枚举是[仅单元](#unit-only-enum)的（没有元组变体和结构体变体），则可以通过[数值转换](../expressions/operator-expr.md#semantics)直接访问其判别值；例如：

```rust
enum Enum {
    Foo,
    Bar,
    Baz,
}

assert_eq!(0, Enum::Foo as isize);
assert_eq!(1, Enum::Bar as isize);
assert_eq!(2, Enum::Baz as isize);
```

<div class="rule" id="r-items.enum.discriminant.coercion.fieldless"><a class="rule-link" href="#r-items.enum.discriminant.coercion.fieldless" title="items.enum.discriminant.coercion.fieldless"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.coercion<wbr>.fieldless]</span></a>
</div>

[无字段枚举](#field-less-enum)在没有显式判别值，或仅单元变体具有显式判别值时，可以进行转换。

```rust
enum Fieldless {
    Tuple(),
    Struct{},
    Unit,
}

assert_eq!(0, Fieldless::Tuple() as isize);
assert_eq!(1, Fieldless::Struct{} as isize);
assert_eq!(2, Fieldless::Unit as isize);

#[repr(u8)]
enum FieldlessWithDiscriminants {
    First = 10,
    Tuple(),
    Second = 20,
    Struct{},
    Unit,
}

assert_eq!(10, FieldlessWithDiscriminants::First as u8);
assert_eq!(11, FieldlessWithDiscriminants::Tuple() as u8);
assert_eq!(20, FieldlessWithDiscriminants::Second as u8);
assert_eq!(21, FieldlessWithDiscriminants::Struct{} as u8);
assert_eq!(22, FieldlessWithDiscriminants::Unit as u8);
```

#### 指针转换

<div class="rule" id="r-items.enum.discriminant.access-memory"><a class="rule-link" href="#r-items.enum.discriminant.access-memory" title="items.enum.discriminant.access-memory"><span>[items<wbr>.enum<wbr>.discriminant<wbr>.access-memory]</span></a>
</div>

如果枚举指定了[原始表示](../type-layout.md#primitive-representations)，则可以通过 unsafe 指针转换可靠地访问判别值：

```rust
#[repr(u8)]
enum Enum {
    Unit,
    Tuple(bool),
    Struct{a: bool},
}

impl Enum {
    fn discriminant(&self) -> u8 {
        unsafe { *(self as *const Self as *const u8) }
    }
}

let unit_like = Enum::Unit;
let tuple_like = Enum::Tuple(true);
let struct_like = Enum::Struct{a: false};

assert_eq!(0, unit_like.discriminant());
assert_eq!(1, tuple_like.discriminant());
assert_eq!(2, struct_like.discriminant());
```

<div class="rule" id="r-items.enum.empty"><a class="rule-link" href="#r-items.enum.empty" title="items.enum.empty"><span>[items<wbr>.enum<wbr>.empty]</span></a>
</div>

## 零变体枚举

<div class="rule" id="r-items.enum.empty.intro"><a class="rule-link" href="#r-items.enum.empty.intro" title="items.enum.empty.intro"><span>[items<wbr>.enum<wbr>.empty<wbr>.intro]</span></a>
</div>

具有零个变体的枚举称为<em>零变体枚举</em>。由于它们没有有效值，因此不能被实例化。

```rust
enum ZeroVariants {}
```

<div class="rule" id="r-items.enum.empty.uninhabited"><a class="rule-link" href="#r-items.enum.empty.uninhabited" title="items.enum.empty.uninhabited"><span>[items<wbr>.enum<wbr>.empty<wbr>.uninhabited]</span></a>
</div>

零变体枚举等价于 [never 类型](../types/never.md)，但它们不能被强制转换为其他类型。

```rust,compile_fail
# enum ZeroVariants {}
let x: ZeroVariants = panic!();
let y: u32 = x; // mismatched type error
```

<div class="rule" id="r-items.enum.variant-visibility"><a class="rule-link" href="#r-items.enum.variant-visibility" title="items.enum.variant-visibility"><span>[items<wbr>.enum<wbr>.variant-visibility]</span></a>
</div>

## 变体可见性

枚举变体在语法上允许 [Visibility](../visibility-and-privacy.md#grammar-Visibility) 标注，但这会在验证 enum 时被拒绝。这使得项在其使用的不同上下文中可以用统一语法解析。

```rust
macro_rules! mac_variant {
    ($vis:vis $name:ident) => {
        enum $name {
            $vis Unit,

            $vis Tuple(u8, u16),

            $vis Struct { f: u8 },
        }
    }
}

// Empty `vis` is allowed.
mac_variant! { E }

// This is allowed, since it is removed before being validated.
#[cfg(false)]
enum E {
    pub U,
    pub(crate) T(u8),
    pub(super) T { f: String },
}
```