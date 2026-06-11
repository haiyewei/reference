<div class="rule" id="r-items.impl"><a class="rule-link" href="#r-items.impl" title="items.impl"><span>[items<wbr>.impl]</span></a>
</div>

# 实现

<div class="rule" id="r-items.impl.syntax"><a class="rule-link" href="#r-items.impl.syntax" title="items.impl.syntax"><span>[items<wbr>.impl<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Implementation" onclick="show_railroad()">[Implementation](implementations.md#railroad-Implementation)</span> → <span class="grammar-text">[InherentImpl](implementations.md#grammar-InherentImpl)</span> | <span class="grammar-text">[TraitImpl](implementations.md#grammar-TraitImpl)</span>

<span class="grammar-text grammar-production" id="grammar-InherentImpl" onclick="show_railroad()">[InherentImpl](implementations.md#railroad-InherentImpl)</span> →  
    <span class="grammar-literal">impl</span> <span class="grammar-text">[GenericParams](generics.md#grammar-GenericParams)</span><sup>?</sup> <span class="grammar-text">[Type](../types.md#grammar-Type)</span> <span class="grammar-text">[WhereClause](generics.md#grammar-WhereClause)</span><sup>?</sup> <span class="grammar-literal">{</span>  
        <span class="grammar-text">[InnerAttribute](../attributes.md#grammar-InnerAttribute)</span><sup>\*</sup>  
        <span class="grammar-text">[AssociatedItem](associated-items.md#grammar-AssociatedItem)</span><sup>\*</sup>  
    <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-TraitImpl" onclick="show_railroad()">[TraitImpl](implementations.md#railroad-TraitImpl)</span> →  
    <span class="grammar-literal">unsafe</span><sup>?</sup> <span class="grammar-literal">impl</span> <span class="grammar-text">[GenericParams](generics.md#grammar-GenericParams)</span><sup>?</sup> <span class="grammar-literal">!</span><sup>?</sup> <span class="grammar-text">[TypePath](../paths.md#grammar-TypePath)</span> <span class="grammar-literal">for</span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span>  
    <span class="grammar-text">[WhereClause](generics.md#grammar-WhereClause)</span><sup>?</sup>  
    <span class="grammar-literal">{</span>  
        <span class="grammar-text">[InnerAttribute](../attributes.md#grammar-InnerAttribute)</span><sup>\*</sup>  
        <span class="grammar-text">[AssociatedItem](associated-items.md#grammar-AssociatedItem)</span><sup>\*</sup>  
    <span class="grammar-literal">}</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 234px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Implementation"><svg class="railroad" viewBox="0 0 234 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="implementations.md#grammar-Implementation">
<text class="comment" x="64" y="25">
Implementation</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 116 0 h 24"/>
<a class="link" xlink:href="implementations.md#railroad-InherentImpl">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="42"/>
<text x="117" y="58">
InherentImpl</text>
</g>
</a>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 140 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 92 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="implementations.md#railroad-TraitImpl">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="75"/>
<text x="105" y="91">
TraitImpl</text>
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
<div style="width: 618px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-InherentImpl"><svg class="railroad" viewBox="0 0 618 279" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="implementations.md#grammar-InherentImpl">
<text class="comment" x="57" y="25">
InherentImpl</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 66 h 12"/>
<path d=" M 547 66 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -500 m 253 0 l 5 -5 m 0 10 l -5 -5 m -253 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="47" y="55"/>
<text x="73" y="71">
impl</text>
</g>
<g class="optional">
<path d=" M 109 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-GenericParams">
<g class="nonterminal">
<rect height="22" width="124" x="133" y="55"/>
<text x="195" y="71">
GenericParams</text>
</g>
</a>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="291" y="55"/>
<text x="317" y="71">
Type</text>
</g>
</a>
<g class="optional">
<path d=" M 353 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-WhereClause">
<g class="nonterminal">
<rect height="22" width="108" x="377" y="55"/>
<text x="431" y="71">
WhereClause</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="519" y="55"/>
<text x="533" y="71">
{</text>
</g>
<path d=" M 99 66 h 10"/>
<path d=" M 281 66 h 10"/>
<path d=" M 343 66 h 10"/>
<path d=" M 509 66 h 10"/>
</g>
<path d=" M 251 126 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 1 -12 12 h -204 m 105 0 l 5 -5 m 0 10 l -5 -5 m -105 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 126 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 71 126 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-InnerAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="83" y="115"/>
<text x="149" y="131">
InnerAttribute</text>
</g>
</a>
</g>
</g>
</g>
<path d=" M 251 198 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 1 -12 12 h -204 m 105 0 l 5 -5 m 0 10 l -5 -5 m -105 0 a 12 12 0 0 0 -12 12 v 0 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 198 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 71 198 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="associated-items.md#railroad-AssociatedItem">
<g class="nonterminal">
<rect height="22" width="132" x="83" y="187"/>
<text x="149" y="203">
AssociatedItem</text>
</g>
</a>
</g>
</g>
</g>
<path d=" M 75 258 h 484 m -239 0 l -5 -5 m 0 10 l 5 -5 m 239 0 a 12 12 0 0 0 12 -12 v -168 m 0 87 l -5 5 m 10 0 l -5 -5 m 0 -87 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="47" y="247"/>
<text x="61" y="263">
}</text>
</g>
</g>
</g>
<path d=" M 593 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 583 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 774px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TraitImpl"><svg class="railroad" viewBox="0 0 774 387" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="implementations.md#grammar-TraitImpl">
<text class="comment" x="46" y="25">
TraitImpl</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 66 h 12"/>
<path d=" M 703 66 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -656 m 331 0 l 5 -5 m 0 10 l -5 -5 m -331 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="71" y="55"/>
<text x="105" y="71">
unsafe</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="173" y="55"/>
<text x="199" y="71">
impl</text>
</g>
<g class="optional">
<path d=" M 235 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-GenericParams">
<g class="nonterminal">
<rect height="22" width="124" x="259" y="55"/>
<text x="321" y="71">
GenericParams</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 417 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="441" y="55"/>
<text x="455" y="71">
!</text>
</g>
</g>
<a class="link" xlink:href="../paths.md#railroad-TypePath">
<g class="nonterminal">
<rect height="22" width="84" x="503" y="55"/>
<text x="545" y="71">
TypePath</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="597" y="55"/>
<text x="619" y="71">
for</text>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="651" y="55"/>
<text x="677" y="71">
Type</text>
</g>
</a>
<path d=" M 163 66 h 10"/>
<path d=" M 225 66 h 10"/>
<path d=" M 407 66 h 10"/>
<path d=" M 493 66 h 10"/>
<path d=" M 587 66 h 10"/>
<path d=" M 641 66 h 10"/>
</g>
<path d=" M 203 126 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -156 m 81 0 l 5 -5 m 0 10 l -5 -5 m -81 0 a 12 12 0 0 0 -12 12 v 0 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 126 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-WhereClause">
<g class="nonterminal">
<rect height="22" width="108" x="71" y="115"/>
<text x="125" y="131">
WhereClause</text>
</g>
</a>
</g>
</g>
<path d=" M 75 174 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -28 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="47" y="163"/>
<text x="61" y="179">
{</text>
</g>
</g>
<path d=" M 251 234 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 1 -12 12 h -204 m 105 0 l 5 -5 m 0 10 l -5 -5 m -105 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 234 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 71 234 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-InnerAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="83" y="223"/>
<text x="149" y="239">
InnerAttribute</text>
</g>
</a>
</g>
</g>
</g>
<path d=" M 251 306 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 1 -12 12 h -204 m 105 0 l 5 -5 m 0 10 l -5 -5 m -105 0 a 12 12 0 0 0 -12 12 v 0 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 306 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 71 306 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="associated-items.md#railroad-AssociatedItem">
<g class="nonterminal">
<rect height="22" width="132" x="83" y="295"/>
<text x="149" y="311">
AssociatedItem</text>
</g>
</a>
</g>
</g>
</g>
<path d=" M 75 366 h 640 m -317 0 l -5 -5 m 0 10 l 5 -5 m 317 0 a 12 12 0 0 0 12 -12 v -276 m 0 141 l -5 5 m 10 0 l -5 -5 m 0 -141 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="47" y="355"/>
<text x="61" y="371">
}</text>
</g>
</g>
</g>
<path d=" M 749 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 739 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.impl.intro"><a class="rule-link" href="#r-items.impl.intro" title="items.impl.intro"><span>[items<wbr>.impl<wbr>.intro]</span></a>
</div>

\_实现_是将项与_实现类型_关联起来的项。实现使用关键字 `impl` 定义，并包含属于被实现类型的某个实例或静态属于该类型的函数。

<div class="rule" id="r-items.impl.kinds"><a class="rule-link" href="#r-items.impl.kinds" title="items.impl.kinds"><span>[items<wbr>.impl<wbr>.kinds]</span></a>
</div>

实现分为两类：

- 固有实现
- [trait](traits.md) 实现

<div class="rule" id="r-items.impl.inherent"><a class="rule-link" href="#r-items.impl.inherent" title="items.impl.inherent"><span>[items<wbr>.impl<wbr>.inherent]</span></a>
</div>

## 固有实现

<div class="rule" id="r-items.impl.inherent.intro"><a class="rule-link" href="#r-items.impl.inherent.intro" title="items.impl.inherent.intro"><span>[items<wbr>.impl<wbr>.inherent<wbr>.intro]</span></a>
</div>

固有实现被定义为依次由 `impl` 关键字、泛型类型声明、到名义类型的路径、where 子句以及一组用花括号括起的可关联项组成。

<div class="rule" id="r-items.impl.inherent.implementing-type"><a class="rule-link" href="#r-items.impl.inherent.implementing-type" title="items.impl.inherent.implementing-type"><span>[items<wbr>.impl<wbr>.inherent<wbr>.implementing-type]</span></a>
</div>

该名义类型称为_实现类型\_，可关联项是该实现类型的_关联项\_。

<div class="rule" id="r-items.impl.inherent.associated-items"><a class="rule-link" href="#r-items.impl.inherent.associated-items" title="items.impl.inherent.associated-items"><span>[items<wbr>.impl<wbr>.inherent<wbr>.associated-items]</span></a>
</div>

固有实现将所包含的项关联到实现类型。

<div class="rule" id="r-items.impl.inherent.associated-items.allowed-items"><a class="rule-link" href="#r-items.impl.inherent.associated-items.allowed-items" title="items.impl.inherent.associated-items.allowed-items"><span>[items<wbr>.impl<wbr>.inherent<wbr>.associated-items<wbr>.allowed-items]</span></a>
</div>

固有实现可以包含[关联函数](associated-items.md#associated-functions-and-methods)（包括[方法](associated-items.md#methods)）和[关联常量](associated-items.md#associated-constants)。

<div class="rule" id="r-items.impl.inherent.type-alias"><a class="rule-link" href="#r-items.impl.inherent.type-alias" title="items.impl.inherent.type-alias"><span>[items<wbr>.impl<wbr>.inherent<wbr>.type-alias]</span></a>
</div>

它们不能包含关联类型别名。

<div class="rule" id="r-items.impl.inherent.associated-item-path"><a class="rule-link" href="#r-items.impl.inherent.associated-item-path" title="items.impl.inherent.associated-item-path"><span>[items<wbr>.impl<wbr>.inherent<wbr>.associated-item-path]</span></a>
</div>

到关联项的[路径](../paths.md)是到实现类型的任意路径，后跟作为最终路径组件的关联项标识符。

<div class="rule" id="r-items.impl.inherent.coherence"><a class="rule-link" href="#r-items.impl.inherent.coherence" title="items.impl.inherent.coherence"><span>[items<wbr>.impl<wbr>.inherent<wbr>.coherence]</span></a>
</div>

一个类型也可以有多个固有实现。实现类型必须与原始类型定义在同一 crate 内定义。

```rust
pub mod color {
    pub struct Color(pub u8, pub u8, pub u8);

    impl Color {
        pub const WHITE: Color = Color(255, 255, 255);
    }
}

mod values {
    use super::color::Color;
    impl Color {
        pub fn red() -> Color {
            Color(255, 0, 0)
        }
    }
}

pub use self::color::Color;
fn main() {
    // 到同一模块中实现类型和 impl 的实际路径。
    color::Color::WHITE;

    // 不同模块中的 impl 块仍然通过到该类型的路径访问。
    color::Color::red();

    // 到实现类型的重导出路径也可用。
    Color::red();

    // 不工作，因为 `values` 中的 use 不是 pub。
    // values::Color::red();
}
```

<div class="rule" id="r-items.impl.trait"><a class="rule-link" href="#r-items.impl.trait" title="items.impl.trait"><span>[items<wbr>.impl<wbr>.trait]</span></a>
</div>

## trait 实现

<div class="rule" id="r-items.impl.trait.intro"><a class="rule-link" href="#r-items.impl.trait.intro" title="items.impl.trait.intro"><span>[items<wbr>.impl<wbr>.trait<wbr>.intro]</span></a>
</div>

\_trait 实现_的定义方式类似于固有实现，不同之处在于可选的泛型类型声明后面跟着一个 [trait](traits.md)，再跟关键字 `for`，再跟到名义类型的路径。

<!-- To understand this, you have to back-reference to the previous section. :( -->

<div class="rule" id="r-items.impl.trait.implemented-trait"><a class="rule-link" href="#r-items.impl.trait.implemented-trait" title="items.impl.trait.implemented-trait"><span>[items<wbr>.impl<wbr>.trait<wbr>.implemented-trait]</span></a>
</div>

该 trait 称为_被实现 trait\_。实现类型实现该被实现 trait。

<div class="rule" id="r-items.impl.trait.def-requirement"><a class="rule-link" href="#r-items.impl.trait.def-requirement" title="items.impl.trait.def-requirement"><span>[items<wbr>.impl<wbr>.trait<wbr>.def-requirement]</span></a>
</div>

trait 实现必须定义由被实现 trait 声明的所有非默认关联项，可以重新定义由被实现 trait 定义的默认关联项，并且不能定义任何其他项。

<div class="rule" id="r-items.impl.trait.associated-item-path"><a class="rule-link" href="#r-items.impl.trait.associated-item-path" title="items.impl.trait.associated-item-path"><span>[items<wbr>.impl<wbr>.trait<wbr>.associated-item-path]</span></a>
</div>

到关联项的路径是 `<`，后跟到实现类型的路径，再跟 `as`，再跟到 trait 的路径，再跟作为路径组件的 `>`，最后跟关联项的路径组件。

<div class="rule" id="r-items.impl.trait.safety"><a class="rule-link" href="#r-items.impl.trait.safety" title="items.impl.trait.safety"><span>[items<wbr>.impl<wbr>.trait<wbr>.safety]</span></a>
</div>

[Unsafe traits](traits.md#unsafe-traits) 要求 trait 实现以 `unsafe` 关键字开头。

```rust
# #[derive(Copy, Clone)]
# struct Point {x: f64, y: f64};
# type Surface = i32;
# struct BoundingBox {x: f64, y: f64, width: f64, height: f64};
# trait Shape { fn draw(&self, s: Surface); fn bounding_box(&self) -> BoundingBox; }
# fn do_draw_circle(s: Surface, c: Circle) { }
struct Circle {
    radius: f64,
    center: Point,
}

impl Copy for Circle {}

impl Clone for Circle {
    fn clone(&self) -> Circle { *self }
}

impl Shape for Circle {
    fn draw(&self, s: Surface) { do_draw_circle(s, *self); }
    fn bounding_box(&self) -> BoundingBox {
        let r = self.radius;
        BoundingBox {
            x: self.center.x - r,
            y: self.center.y - r,
            width: 2.0 * r,
            height: 2.0 * r,
        }
    }
}
```

<div class="rule" id="r-items.impl.trait.coherence"><a class="rule-link" href="#r-items.impl.trait.coherence" title="items.impl.trait.coherence"><span>[items<wbr>.impl<wbr>.trait<wbr>.coherence]</span></a>
</div>

### trait 实现一致性

<div class="rule" id="r-items.impl.trait.coherence.intro"><a class="rule-link" href="#r-items.impl.trait.coherence.intro" title="items.impl.trait.coherence.intro"><span>[items<wbr>.impl<wbr>.trait<wbr>.coherence<wbr>.intro]</span></a>
</div>

如果孤儿规则检查失败，或者存在重叠的实现实例，则认为 trait 实现是不一致的。

<div class="rule" id="r-items.impl.trait.coherence.overlapping"><a class="rule-link" href="#r-items.impl.trait.coherence.overlapping" title="items.impl.trait.coherence.overlapping"><span>[items<wbr>.impl<wbr>.trait<wbr>.coherence<wbr>.overlapping]</span></a>
</div>

当两个 trait 实现所针对的 trait 存在非空交集，并且这些实现可以用同一类型实例化时，这两个 trait 实现重叠。 <!-- This is probably wrong? Source: No two implementations can be instantiable with the same set of types for the input type parameters. -->

<div class="rule" id="r-items.impl.trait.orphan-rule"><a class="rule-link" href="#r-items.impl.trait.orphan-rule" title="items.impl.trait.orphan-rule"><span>[items<wbr>.impl<wbr>.trait<wbr>.orphan-rule]</span></a>
</div>

#### 孤儿规则

<div class="rule" id="r-items.impl.trait.orphan-rule.intro"><a class="rule-link" href="#r-items.impl.trait.orphan-rule.intro" title="items.impl.trait.orphan-rule.intro"><span>[items<wbr>.impl<wbr>.trait<wbr>.orphan-rule<wbr>.intro]</span></a>
</div>

\_孤儿规则_规定，只有当 trait 或实现中的至少一个类型在当前 crate 中定义时，才允许 trait 实现。它可以防止不同 crate 之间发生冲突的 trait 实现，是确保一致性的关键。

孤儿实现是指为外部类型实现外部 trait 的实现。如果自由允许这些实现，两个 crate 就可以用不兼容的方式为同一类型实现同一 trait，从而造成这样一种情况：添加或更新依赖可能因实现冲突而破坏编译。

孤儿规则使库作者能够向自己的 trait 添加新实现，而不必担心破坏下游代码。没有这些限制，库就无法添加像 `impl<T: Display> MyTrait for T` 这样的实现，因为它可能与下游实现冲突。

<div class="rule" id="r-items.impl.trait.orphan-rule.def"><a class="rule-link" href="#r-items.impl.trait.orphan-rule.def" title="items.impl.trait.orphan-rule.def"><span>[items<wbr>.impl<wbr>.trait<wbr>.orphan-rule<wbr>.def]</span></a>
</div>

给定 `impl<P1..=Pn> Trait<T1..=Tn> for T0`，只有至少满足以下条件之一时，`impl` 才有效：

- `Trait` 是[本地 trait](../glossary.md#local-trait)
- 全部满足
  - 类型 `T0..=Tn` 中必须至少有一个是[本地类型](../glossary.md#local-type)。令 `Ti` 为第一个这样的类型。
  - 不得有[未覆盖类型](../glossary.md#uncovered-type)参数 `P1..=Pn` 出现在 `T0..Ti` 中（不包括 `Ti`）

<div class="rule" id="r-items.impl.trait.uncovered-param"><a class="rule-link" href="#r-items.impl.trait.uncovered-param" title="items.impl.trait.uncovered-param"><span>[items<wbr>.impl<wbr>.trait<wbr>.uncovered-param]</span></a>
</div>

只限制_未覆盖_类型参数的出现。

<div class="rule" id="r-items.impl.trait.fundamental"><a class="rule-link" href="#r-items.impl.trait.fundamental" title="items.impl.trait.fundamental"><span>[items<wbr>.impl<wbr>.trait<wbr>.fundamental]</span></a>
</div>

注意，出于一致性的目的，[基本类型](../glossary.md#fundamental-type-constructors)是特殊的。`Box<T>` 中的 `T` 不被视为已覆盖，而 `Box<LocalType>` 被视为本地的。

<div class="rule" id="r-items.impl.generics"><a class="rule-link" href="#r-items.impl.generics" title="items.impl.generics"><span>[items<wbr>.impl<wbr>.generics]</span></a>
</div>

## 泛型实现

<div class="rule" id="r-items.impl.generics.intro"><a class="rule-link" href="#r-items.impl.generics.intro" title="items.impl.generics.intro"><span>[items<wbr>.impl<wbr>.generics<wbr>.intro]</span></a>
</div>

实现可以接受[泛型参数](generics.md)，这些参数可以在实现的其余部分中使用。实现参数直接写在 `impl` 关键字之后。

```rust
# trait Seq<T> { fn dummy(&self, _: T) { } }
impl<T> Seq<T> for Vec<T> {
    /* ... */
}
impl Seq<bool> for u32 {
    /* 将整数视为位序列 */
}
```

<div class="rule" id="r-items.impl.generics.use"><a class="rule-link" href="#r-items.impl.generics.use" title="items.impl.generics.use"><span>[items<wbr>.impl<wbr>.generics<wbr>.use]</span></a>
</div>

如果参数至少在以下任一位置出现一次，则泛型参数_约束_一个实现：

- 被实现的 trait（如果有）
- 实现类型
- 作为某个类型的[约束](../trait-bounds.md)中的[关联类型](associated-items.md#associated-types)，且该类型包含另一个约束该实现的参数

<div class="rule" id="r-items.impl.generics.constrain"><a class="rule-link" href="#r-items.impl.generics.constrain" title="items.impl.generics.constrain"><span>[items<wbr>.impl<wbr>.generics<wbr>.constrain]</span></a>
</div>

类型参数和 const 参数必须始终约束该实现。如果生命周期用于关联类型中，则生命周期必须约束该实现。

约束情况示例：

```rust
# trait Trait{}
# trait GenericTrait<T> {}
# trait HasAssocType { type Ty; }
# struct Struct;
# struct GenericStruct<T>(T);
# struct ConstGenericStruct<const N: usize>([(); N]);
// T 通过作为 GenericTrait 的实参来形成约束。
impl<T> GenericTrait<T> for i32 { /* ... */ }

// T 通过作为 GenericStruct 的实参来形成约束
impl<T> Trait for GenericStruct<T> { /* ... */ }

// 同样，N 通过作为 ConstGenericStruct 的实参来形成约束
impl<const N: usize> Trait for ConstGenericStruct<N> { /* ... */ }

// T 通过位于类型 `U` 的约束中的关联类型内来形成约束，而 `U`
// 本身是约束该 trait 的泛型参数。
impl<T, U> GenericTrait<U> for u32 where U: HasAssocType<Ty = T> { /* ... */ }

// 与前例类似，但该类型是 `(U, isize)`。`U` 出现在包含 `T` 的类型内部，
// 而不是该类型本身。
impl<T, U> GenericStruct<U> where (U, isize): HasAssocType<Ty = T> { /* ... */ }
```

非约束情况示例：

```rust,compile_fail
// 其余这些都是错误，因为它们有未形成约束的类型参数或
// const 参数。

// T 不形成约束，因为它完全没有出现。
impl<T> Struct { /* ... */ }

// N 因同样原因不形成约束。
impl<const N: usize> Struct { /* ... */ }

// 在实现内部使用 T 不会约束该 impl。
impl<T> Struct {
    fn uses_t(t: &T) { /* ... */ }
}

// T 被用作 U 的约束中的关联类型，但 U 不形成约束。
impl<T, U> Struct where U: HasAssocType<Ty = T> { /* ... */ }

// T 用在约束中，但不是作为关联类型使用，因此它不形成约束。
impl<T, U> GenericTrait<U> for u32 where U: GenericTrait<T> {}
```

允许的不形成约束的生命周期参数示例：

```rust
# struct Struct;
impl<'a> Struct {}
```

不允许的不形成约束的生命周期参数示例：

```rust,compile_fail
# struct Struct;
# trait HasAssocType { type Ty; }
impl<'a> HasAssocType for Struct {
    type Ty = &'a Struct;
}
```

<div class="rule" id="r-items.impl.attributes"><a class="rule-link" href="#r-items.impl.attributes" title="items.impl.attributes"><span>[items<wbr>.impl<wbr>.attributes]</span></a>
</div>

## 实现上的属性

实现可以在 `impl` 关键字之前包含外部[属性](../attributes.md)，并在包含关联项的花括号内部包含内部[属性](../attributes.md)。内部属性必须位于任何关联项之前。在此处有意义的属性是 [`cfg`](../conditional-compilation.md)、[`deprecated`](../attributes/diagnostics.md#the-deprecated-attribute)、[`doc`](../../rustdoc/the-doc-attribute.html) 和 [lint 检查属性](../attributes/diagnostics.md#lint-check-attributes)。