<div class="rule" id="r-items.generics"><a class="rule-link" href="#r-items.generics" title="items.generics"><span>[items<wbr>.generics]</span></a>
</div>

# 泛型参数

<div class="rule" id="r-items.generics.syntax"><a class="rule-link" href="#r-items.generics.syntax" title="items.generics.syntax"><span>[items<wbr>.generics<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-GenericParams" onclick="show_railroad()">[GenericParams](generics.md#railroad-GenericParams)</span> → <span class="grammar-literal">\<</span> ( <span class="grammar-text">[GenericParam](generics.md#grammar-GenericParam)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[GenericParam](generics.md#grammar-GenericParam)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup> )<sup>?</sup> <span class="grammar-literal">\></span>

<span class="grammar-text grammar-production" id="grammar-GenericParam" onclick="show_railroad()">[GenericParam](generics.md#railroad-GenericParam)</span> → <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> ( <span class="grammar-text">[LifetimeParam](generics.md#grammar-LifetimeParam)</span> | <span class="grammar-text">[TypeParam](generics.md#grammar-TypeParam)</span> | <span class="grammar-text">[ConstParam](generics.md#grammar-ConstParam)</span> )

<span class="grammar-text grammar-production" id="grammar-LifetimeParam" onclick="show_railroad()">[LifetimeParam](generics.md#railroad-LifetimeParam)</span> → <span class="grammar-text">[Lifetime](../trait-bounds.md#grammar-Lifetime)</span> ( <span class="grammar-literal">:</span> <span class="grammar-text">[LifetimeBounds](../trait-bounds.md#grammar-LifetimeBounds)</span> )<sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-TypeParam" onclick="show_railroad()">[TypeParam](generics.md#railroad-TypeParam)</span> → <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> ( <span class="grammar-literal">:</span> <span class="grammar-text">[Bounds](../trait-bounds.md#grammar-Bounds)</span><sup>?</sup> )<sup>?</sup> ( <span class="grammar-literal">=</span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span> )<sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-ConstParam" onclick="show_railroad()">[ConstParam](generics.md#railroad-ConstParam)</span> →  
    <span class="grammar-literal">const</span> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-literal">:</span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span>  
    ( <span class="grammar-literal">=</span> ( <span class="grammar-text">[BlockExpression](../expressions/block-expr.md#grammar-BlockExpression)</span> | <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> | <span class="grammar-literal">\-</span><sup>?</sup> <span class="grammar-text">[LiteralExpression](../expressions/literal-expr.md#grammar-LiteralExpression)</span> ) )<sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 632px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-GenericParams"><svg class="railroad" viewBox="0 0 632 112" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="generics.md#grammar-GenericParams">
<text class="comment" x="60" y="25">
GenericParams</text>
</a>
<g class="sequence">
<path d=" M 10 78 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="67"/>
<text x="49" y="83">
&lt;</text>
</g>
<g class="optional">
<path d=" M 73 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 438 m -216 0 l -5 -5 m 0 10 l 5 -5 m 216 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<a class="link" xlink:href="generics.md#railroad-GenericParam">
<g class="nonterminal">
<rect height="22" width="116" x="97" y="67"/>
<text x="155" y="83">
GenericParam</text>
</g>
</a>
<g class="optional">
<path d=" M 223 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 178 m -86 0 l -5 -5 m 0 10 l 5 -5 m 86 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 247 78 h 12 m 154 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -154 m 80 0 l 5 -5 m 0 10 l -5 -5 m -80 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="259" y="67"/>
<text x="273" y="83">
,</text>
</g>
<a class="link" xlink:href="generics.md#railroad-GenericParam">
<g class="nonterminal">
<rect height="22" width="116" x="297" y="67"/>
<text x="355" y="83">
GenericParam</text>
</g>
</a>
<path d=" M 287 78 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 459 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="483" y="67"/>
<text x="497" y="83">
,</text>
</g>
</g>
<path d=" M 213 78 h 10"/>
<path d=" M 449 78 h 10"/>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="569" y="67"/>
<text x="583" y="83">
&gt;</text>
</g>
<path d=" M 63 78 h 10"/>
<path d=" M 559 78 h 10"/>
</g>
<path d=" M 607 78 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 78 h 10"/>
<path d=" M 597 78 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 456px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-GenericParam"><svg class="railroad" viewBox="0 0 456 153" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="generics.md#grammar-GenericParam">
<text class="comment" x="57" y="25">
GenericParam</text>
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
<a class="link" xlink:href="generics.md#railroad-LifetimeParam">
<g class="nonterminal">
<rect height="22" width="124" x="273" y="55"/>
<text x="335" y="71">
LifetimeParam</text>
</g>
</a>
<path d=" M 249 66 a 12 12 0 0 1 12 12 v 9 m 148 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 261 87 v 33 m 148 0 v -33"/>
<path d=" M 261 87 v 0 a 12 12 0 0 0 12 12 m 92 0 h 32 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="generics.md#railroad-TypeParam">
<g class="nonterminal">
<rect height="22" width="92" x="273" y="88"/>
<text x="319" y="104">
TypeParam</text>
</g>
</a>
<path d=" M 261 120 v 0 a 12 12 0 0 0 12 12 m 100 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="generics.md#railroad-ConstParam">
<g class="nonterminal">
<rect height="22" width="100" x="273" y="121"/>
<text x="323" y="137">
ConstParam</text>
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
<div style="width: 382px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LifetimeParam"><svg class="railroad" viewBox="0 0 382 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="generics.md#grammar-LifetimeParam">
<text class="comment" x="60" y="25">
LifetimeParam</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../trait-bounds.md#railroad-Lifetime">
<g class="nonterminal">
<rect height="22" width="84" x="35" y="55"/>
<text x="77" y="71">
Lifetime</text>
</g>
</a>
<g class="optional">
<path d=" M 129 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 170 m -82 0 l -5 -5 m 0 10 l 5 -5 m 82 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="153" y="55"/>
<text x="167" y="71">
:</text>
</g>
<a class="link" xlink:href="../trait-bounds.md#railroad-LifetimeBounds">
<g class="nonterminal">
<rect height="22" width="132" x="191" y="55"/>
<text x="257" y="71">
LifetimeBounds</text>
</g>
</a>
<path d=" M 181 66 h 10"/>
</g>
</g>
<path d=" M 119 66 h 10"/>
</g>
<path d=" M 357 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 347 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 530px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TypeParam"><svg class="railroad" viewBox="0 0 530 99" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="generics.md#grammar-TypeParam">
<text class="comment" x="46" y="25">
TypeParam</text>
</a>
<g class="sequence">
<path d=" M 10 78 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="67"/>
<text x="85" y="83">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 145 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 154 m -74 0 l -5 -5 m 0 10 l 5 -5 m 74 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="67"/>
<text x="183" y="83">
:</text>
</g>
<g class="optional">
<path d=" M 207 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../trait-bounds.md#railroad-Bounds">
<g class="nonterminal">
<rect height="22" width="68" x="231" y="67"/>
<text x="265" y="83">
Bounds</text>
</g>
</a>
</g>
<path d=" M 197 78 h 10"/>
</g>
</g>
<g class="optional">
<path d=" M 357 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 90 m -42 0 l -5 -5 m 0 10 l 5 -5 m 42 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="381" y="67"/>
<text x="395" y="83">
=</text>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="419" y="67"/>
<text x="445" y="83">
Type</text>
</g>
</a>
<path d=" M 409 78 h 10"/>
</g>
</g>
<path d=" M 135 78 h 10"/>
<path d=" M 347 78 h 10"/>
</g>
<path d=" M 505 78 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 78 h 10"/>
<path d=" M 495 78 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 726px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ConstParam"><svg class="railroad" viewBox="0 0 726 165" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="generics.md#grammar-ConstParam">
<text class="comment" x="50" y="25">
ConstParam</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="35" y="55"/>
<text x="65" y="71">
const</text>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="105" y="55"/>
<text x="155" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="215" y="55"/>
<text x="229" y="71">
:</text>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="253" y="55"/>
<text x="279" y="71">
Type</text>
</g>
</a>
<g class="optional">
<path d=" M 315 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 328 m -161 0 l -5 -5 m 0 10 l 5 -5 m 161 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="339" y="55"/>
<text x="353" y="71">
=</text>
</g>
<g class="choice">
<path d=" M 377 66 h 24 m 140 0 h 126 m -60 0 l -5 -5 m 0 10 l 5 -5 m 60 0"/>
<a class="link" xlink:href="../expressions/block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="401" y="55"/>
<text x="471" y="71">
BlockExpression</text>
</g>
</a>
<path d=" M 377 66 a 12 12 0 0 1 12 12 v 9 m 266 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 389 87 v 33 m 266 0 v -33"/>
<path d=" M 389 87 v 0 a 12 12 0 0 0 12 12 m 100 0 h 142 m -68 0 l -5 -5 m 0 10 l 5 -5 m 68 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="401" y="88"/>
<text x="451" y="104">
IDENTIFIER</text>
</g>
</a>
<path d=" M 389 120 v 12 a 12 12 0 0 0 12 12 m 242 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="optional">
<path d=" M 401 144 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="425" y="133"/>
<text x="439" y="149">
-</text>
</g>
</g>
<a class="link" xlink:href="../expressions/literal-expr.md#railroad-LiteralExpression">
<g class="nonterminal">
<rect height="22" width="156" x="487" y="133"/>
<text x="565" y="149">
LiteralExpression</text>
</g>
</a>
<path d=" M 477 144 h 10"/>
</g>
</g>
<path d=" M 367 66 h 10"/>
</g>
</g>
<path d=" M 95 66 h 10"/>
<path d=" M 205 66 h 10"/>
<path d=" M 243 66 h 10"/>
<path d=" M 305 66 h 10"/>
</g>
<path d=" M 701 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 691 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.generics.syntax.intro"><a class="rule-link" href="#r-items.generics.syntax.intro" title="items.generics.syntax.intro"><span>[items<wbr>.generics<wbr>.syntax<wbr>.intro]</span></a>
</div>

[函数](functions.md)、[类型别名](type-aliases.md)、[结构体](structs.md)、[枚举](enumerations.md)、[联合体](unions.md)、[trait](traits.md) 和[实现](implementations.md)可以按类型、常量和生命周期进行_参数化\_。这些参数列在尖括号 <span class="parenthetical">（`<...>`）</span> 中，通常紧跟在项的名称之后、定义之前。对于没有名称的实现，它们直接位于 `impl` 之后。

<div class="rule" id="r-items.generics.syntax.decl-order"><a class="rule-link" href="#r-items.generics.syntax.decl-order" title="items.generics.syntax.decl-order"><span>[items<wbr>.generics<wbr>.syntax<wbr>.decl-order]</span></a>
</div>

泛型参数的顺序受限为先是生命周期参数，然后是类型参数和 const 参数交错排列。

<div class="rule" id="r-items.generics.syntax.duplicate-params"><a class="rule-link" href="#r-items.generics.syntax.duplicate-params" title="items.generics.syntax.duplicate-params"><span>[items<wbr>.generics<wbr>.syntax<wbr>.duplicate-params]</span></a>
</div>

同一参数名不得在 [GenericParams](generics.md#grammar-GenericParams) 列表中声明多次。

下面是带有类型、const 和生命周期参数的项的一些示例：

```rust
fn foo<'a, T>() {}
trait A<U> {}
struct Ref<'a, T> where T: 'a { r: &'a T }
struct InnerArray<T, const N: usize>([T; N]);
struct EitherOrderWorks<const N: bool, U>(U);
```

<div class="rule" id="r-items.generics.syntax.scope"><a class="rule-link" href="#r-items.generics.syntax.scope" title="items.generics.syntax.scope"><span>[items<wbr>.generics<wbr>.syntax<wbr>.scope]</span></a>
</div>

泛型参数在其声明所在的项定义内处于作用域中。对于函数体内声明的项，它们不在作用域内，如[项声明](../statements.md#item-declarations)中所述。更多细节见[泛型参数作用域](../names/scopes.md#generic-parameter-scopes)。

<div class="rule" id="r-items.generics.builtin-generic-types"><a class="rule-link" href="#r-items.generics.builtin-generic-types" title="items.generics.builtin-generic-types"><span>[items<wbr>.generics<wbr>.builtin-generic-types]</span></a>
</div>

[引用](../types/pointer.md#shared-references-)、[裸指针](../types/pointer.md#raw-pointers-const-and-mut)、[数组](../types/array.md)、[切片](../types/slice.md)、[元组](../types/tuple.md)和[函数指针](../types/function-pointer.md)也有生命周期或类型参数，但不会使用路径语法引用它们。

<div class="rule" id="r-items.generics.invalid-lifetimes"><a class="rule-link" href="#r-items.generics.invalid-lifetimes" title="items.generics.invalid-lifetimes"><span>[items<wbr>.generics<wbr>.invalid-lifetimes]</span></a>
</div>

`'_` 和 `'static` 不是有效的生命周期参数名。

<div class="rule" id="r-items.generics.const"><a class="rule-link" href="#r-items.generics.const" title="items.generics.const"><span>[items<wbr>.generics<wbr>.const]</span></a>
</div>

### const 泛型

<div class="rule" id="r-items.generics.const.intro"><a class="rule-link" href="#r-items.generics.const.intro" title="items.generics.const.intro"><span>[items<wbr>.generics<wbr>.const<wbr>.intro]</span></a>
</div>

\_const 泛型参数_允许项在常量值上泛型化。

<div class="rule" id="r-items.generics.const.namespace"><a class="rule-link" href="#r-items.generics.const.namespace" title="items.generics.const.namespace"><span>[items<wbr>.generics<wbr>.const<wbr>.namespace]</span></a>
</div>

const 标识符会在[值命名空间](../names/namespaces.md)中为常量参数引入一个名称，并且该项的所有实例都必须以给定类型的值实例化。

<div class="rule" id="r-items.generics.const.allowed-types"><a class="rule-link" href="#r-items.generics.const.allowed-types" title="items.generics.const.allowed-types"><span>[items<wbr>.generics<wbr>.const<wbr>.allowed-types]</span></a>
</div>

const 参数唯一允许的类型是 `u8`、`u16`、`u32`、`u64`、`u128`、`usize`、`i8`、`i16`、`i32`、`i64`、`i128`、`isize`、`char` 和 `bool`。

<div class="rule" id="r-items.generics.const.use"><a class="rule-link" href="#r-items.generics.const.use" title="items.generics.const.use"><span>[items<wbr>.generics<wbr>.const<wbr>.use]</span></a>
</div>

const 参数可以用在 [const 项](constant-items.md)可用的任何位置，但在[类型](../types.md)或[数组重复表达式](../expressions/array-expr.md)中使用时例外，它必须是独立的（如下所述）。也就是说，它们允许出现在以下位置：

1. 作为应用到某个类型上的 const 实参，而该类型构成所讨论项签名的一部分。
1. 作为用于定义[关联 const](associated-items.md#associated-constants) 的 const 表达式的一部分，或作为[关联类型](associated-items.md#associated-types)的参数。
1. 作为项中任意函数体内任意运行时表达式中的值。
1. 作为项中任意函数体内所用任意类型的参数。
1. 作为项中任意字段类型的一部分。

```rust
// 可以使用 const 泛型参数的示例。

// 用于项自身的签名中。
fn foo<const N: usize>(arr: [i32; N]) {
    // 在函数体内用作类型。
    let x: [i32; N];
    // Used as an expression.
    println!("{}", N * 2);
}

// 用作结构体字段。
struct Foo<const N: usize>([i32; N]);

impl<const N: usize> Foo<N> {
    // 用作关联常量。
    const CONST: usize = N * 4;
}

trait Trait {
    type Output;
}

impl<const N: usize> Trait for Foo<N> {
    // 用作关联类型。
    type Output = [i32; N];
}
```

```rust,compile_fail
// 不能使用 const 泛型参数的示例。
fn foo<const N: usize>() {
    // 不能用于函数体内的项定义。
    const BAD_CONST: [usize; N] = [1; N];
    static BAD_STATIC: [usize; N] = [1; N];
    fn inner(bad_arg: [usize; N]) {
        let bad_value = N * 2;
    }
    type BadAlias = [usize; N];
    struct BadStruct([usize; N]);
}
```

<div class="rule" id="r-items.generics.const.standalone"><a class="rule-link" href="#r-items.generics.const.standalone" title="items.generics.const.standalone"><span>[items<wbr>.generics<wbr>.const<wbr>.standalone]</span></a>
</div>

作为进一步限制，const 参数在[类型](../types.md)或[数组重复表达式](../expressions/array-expr.md)内部只能作为独立实参出现。在这些上下文中，它们只能作为单段[路径表达式](../expressions/path-expr.md)使用，可以位于[块](../expressions/block-expr.md)内（例如 `N` 或 `{N}`）。也就是说，它们不能与其他表达式组合。

```rust,compile_fail
// 不可以使用 const 参数的示例。

// 不允许在类型中与其他表达式组合，例如这里返回类型中的
// 算术表达式。
fn bad_function<const N: usize>() -> [u8; {N + 1}] {
    // 同样，也不允许用于数组重复表达式。
    [1; {N + 1}]
}
```

<div class="rule" id="r-items.generics.const.argument"><a class="rule-link" href="#r-items.generics.const.argument" title="items.generics.const.argument"><span>[items<wbr>.generics<wbr>.const<wbr>.argument]</span></a>
</div>

[路径](../paths.md)中的 const 实参指定该项要使用的 const 值。

<div class="rule" id="r-items.generics.const.argument.const-expr"><a class="rule-link" href="#r-items.generics.const.argument.const-expr" title="items.generics.const.argument.const-expr"><span>[items<wbr>.generics<wbr>.const<wbr>.argument<wbr>.const-expr]</span></a>
</div>

该实参必须要么是[推断 const](generics.md#r-items.generics.const.inferred)，要么是该 const 参数所标注类型的 [const 表达式](../const_eval.md#constant-expressions)。除非它是单段路径（[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)）或[字面量](../expressions/literal-expr.md)（可能带有前导 `-` token），否则 const 表达式必须是[块表达式](../expressions/block-expr.md)（用花括号包围）。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这种语法限制是必要的，以避免在类型内部解析表达式时需要无限前瞻。

</div>

```rust
struct S<const N: i64>;
const C: i64 = 1;
fn f<const N: i64>() -> S<N> { S }

let _ = f::<1>(); // Literal.
let _ = f::<-1>(); // 负字面量。
let _ = f::<{ 1 + 2 }>(); // 常量表达式。
let _ = f::<C>(); // 单段路径。
let _ = f::<{ C + 1 }>(); // 常量表达式。
let _: S<1> = f::<_>(); // Inferred const.
let _: S<1> = f::<(((_)))>(); // Inferred const.
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 在泛型实参列表中，[推断 const](generics.md#r-items.generics.const.inferred) 会被解析为[推断类型](../types/inferred.md#grammar-InferredType)，但随后在语义上被视为一种单独的 [const 泛型实参](generics.md#r-items.generics.const.argument)。

</div>

<div class="rule" id="r-items.generics.const.inferred"><a class="rule-link" href="#r-items.generics.const.inferred" title="items.generics.const.inferred"><span>[items<wbr>.generics<wbr>.const<wbr>.inferred]</span></a>
</div>

在预期 const 实参的位置，可以改用 `_`（可选地由任意数量匹配的括号包围），称为_推断 const\_（[路径规则](../paths.md#r-paths.expr.complex-const-params)、[数组表达式规则](../expressions/array-expr.md#r-expr.array.length-restriction)）。这会请求编译器在可能时基于周围信息推断该 const 实参。

```rust
fn make_buf<const N: usize>() -> [u8; N] {
    [0; _]
    //  ^ 推断为 `N`。
}
let _: [u8; 1024] = make_buf::<_>();
//                             ^ 推断为 `1024`。
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [推断 const](generics.md#r-items.generics.const.inferred) 在语义上不是[表达式](../expressions.md#grammar-Expression)，因此不接受在花括号内使用。
 > 
 > ```rust,compile_fail
 > fn f<const N: usize>() -> [u8; N] { [0; _] }
 > let _: [_; 1] = f::<{ _ }>();
 > //                    ^ 错误：这里不允许 `_`
 > ```

</div>

<div class="rule" id="r-items.generics.const.inferred.constraint"><a class="rule-link" href="#r-items.generics.const.inferred.constraint" title="items.generics.const.inferred.constraint"><span>[items<wbr>.generics<wbr>.const<wbr>.inferred<wbr>.constraint]</span></a>
</div>

推断 const 不能用于项签名。

```rust,compile_fail
fn f<const N: usize>(x: [u8; N]) -> [u8; _] { x }
//                                       ^ 错误：不允许
```

<div class="rule" id="r-items.generics.const.type-ambiguity"><a class="rule-link" href="#r-items.generics.const.type-ambiguity" title="items.generics.const.type-ambiguity"><span>[items<wbr>.generics<wbr>.const<wbr>.type-ambiguity]</span></a>
</div>

当存在泛型实参可能解析为类型实参或 const 实参的歧义时，它总会被解析为类型。将实参放入块表达式可以强制将其解释为 const 实参。

<!-- TODO: Rewrite the paragraph above to be in terms of namespaces, once namespaces are introduced, and it is clear which namespace each parameter lives in. -->

```rust,compile_fail
type N = u32;
struct Foo<const N: usize>;
// 下面会出错，因为 `N` 被解释为类型别名 `N`。
fn foo<const N: usize>() -> Foo<N> { todo!() } // 错误
// 可以通过用花括号包裹来修复，以强制将其解释为 `N`
// const 参数：
fn bar<const N: usize>() -> Foo<{ N }> { todo!() } // ok
```

<div class="rule" id="r-items.generics.const.variance"><a class="rule-link" href="#r-items.generics.const.variance" title="items.generics.const.variance"><span>[items<wbr>.generics<wbr>.const<wbr>.variance]</span></a>
</div>

不同于类型参数和生命周期参数，const 参数可以在参数化项内部未被使用的情况下声明，但[泛型实现](implementations.md#generic-implementations)中所述的实现除外：

```rust,compile_fail
// ok
struct Foo<const N: usize>;
enum Bar<const M: usize> { A, B }

// 错误：未使用的参数
struct Baz<T>;
struct Biz<'a>;
struct Unconstrained;
impl<const N: usize> Unconstrained {}
```

<div class="rule" id="r-items.generics.const.exhaustiveness"><a class="rule-link" href="#r-items.generics.const.exhaustiveness" title="items.generics.const.exhaustiveness"><span>[items<wbr>.generics<wbr>.const<wbr>.exhaustiveness]</span></a>
</div>

解析 trait 约束义务时，在判断约束是否满足时，不会考虑 const 参数上的所有实现是否穷尽。例如，在下面示例中，即使 `bool` 类型的所有可能 const 值都已实现，trait 约束不满足仍然是错误：

```rust,compile_fail
struct Foo<const B: bool>;
trait Bar {}
impl Bar for Foo<true> {}
impl Bar for Foo<false> {}

fn needs_bar(_: impl Bar) {}
fn generic<const B: bool>() {
    let v = Foo::<B>;
    needs_bar(v); // 错误：trait 约束 `Foo<B>: Bar` 不满足
}
```

<div class="rule" id="r-items.generics.where"><a class="rule-link" href="#r-items.generics.where" title="items.generics.where"><span>[items<wbr>.generics<wbr>.where]</span></a>
</div>

## where 子句

<div class="rule" id="r-items.generics.where.syntax"><a class="rule-link" href="#r-items.generics.where.syntax" title="items.generics.where.syntax"><span>[items<wbr>.generics<wbr>.where<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-WhereClause" onclick="show_railroad()">[WhereClause](generics.md#railroad-WhereClause)</span> → <span class="grammar-literal">where</span> ( <span class="grammar-text">[WhereClauseItem](generics.md#grammar-WhereClauseItem)</span> <span class="grammar-literal">,</span> )<sup>\*</sup> <span class="grammar-text">[WhereClauseItem](generics.md#grammar-WhereClauseItem)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-WhereClauseItem" onclick="show_railroad()">[WhereClauseItem](generics.md#railroad-WhereClauseItem)</span> →  
      <span class="grammar-text">[LifetimeWhereClauseItem](generics.md#grammar-LifetimeWhereClauseItem)</span>  
    \| <span class="grammar-text">[TypeBoundWhereClauseItem](generics.md#grammar-TypeBoundWhereClauseItem)</span>

<span class="grammar-text grammar-production" id="grammar-LifetimeWhereClauseItem" onclick="show_railroad()">[LifetimeWhereClauseItem](generics.md#railroad-LifetimeWhereClauseItem)</span> → <span class="grammar-text">[Lifetime](../trait-bounds.md#grammar-Lifetime)</span> <span class="grammar-literal">:</span> <span class="grammar-text">[LifetimeBounds](../trait-bounds.md#grammar-LifetimeBounds)</span>

<span class="grammar-text grammar-production" id="grammar-TypeBoundWhereClauseItem" onclick="show_railroad()">[TypeBoundWhereClauseItem](generics.md#railroad-TypeBoundWhereClauseItem)</span> → <span class="grammar-text">[ForLifetimes](../trait-bounds.md#grammar-ForLifetimes)</span><sup>?</sup> <span class="grammar-text">[Type](../types.md#grammar-Type)</span> <span class="grammar-literal">:</span> <span class="grammar-text">[Bounds](../trait-bounds.md#grammar-Bounds)</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 588px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-WhereClause"><svg class="railroad" viewBox="0 0 588 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="generics.md#grammar-WhereClause">
<text class="comment" x="53" y="25">
WhereClause</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="35" y="55"/>
<text x="65" y="71">
where</text>
</g>
<g class="optional">
<path d=" M 105 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 202 m -98 0 l -5 -5 m 0 10 l 5 -5 m 98 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 129 66 h 12 m 178 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -178 m 92 0 l 5 -5 m 0 10 l -5 -5 m -92 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<a class="link" xlink:href="generics.md#railroad-WhereClauseItem">
<g class="nonterminal">
<rect height="22" width="140" x="141" y="55"/>
<text x="211" y="71">
WhereClauseItem</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="291" y="55"/>
<text x="305" y="71">
,</text>
</g>
<path d=" M 281 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 365 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 140 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-WhereClauseItem">
<g class="nonterminal">
<rect height="22" width="140" x="389" y="55"/>
<text x="459" y="71">
WhereClauseItem</text>
</g>
</a>
</g>
<path d=" M 95 66 h 10"/>
<path d=" M 355 66 h 10"/>
</g>
<path d=" M 563 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 553 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 338px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-WhereClauseItem"><svg class="railroad" viewBox="0 0 338 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="generics.md#grammar-WhereClauseItem">
<text class="comment" x="67" y="25">
WhereClauseItem</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 212 0 h 32"/>
<g class="sequence">
<a class="link" xlink:href="generics.md#railroad-LifetimeWhereClauseItem">
<g class="nonterminal">
<rect height="22" width="212" x="59" y="42"/>
<text x="165" y="58">
LifetimeWhereClauseItem</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 244 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 220 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="generics.md#railroad-TypeBoundWhereClauseItem">
<g class="nonterminal">
<rect height="22" width="220" x="59" y="75"/>
<text x="169" y="91">
TypeBoundWhereClauseItem</text>
</g>
</a>
</g>
<path d=" M 313 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 303 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 334px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LifetimeWhereClauseItem"><svg class="railroad" viewBox="0 0 334 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="generics.md#grammar-LifetimeWhereClauseItem">
<text class="comment" x="99" y="25">
LifetimeWhereClauseItem</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../trait-bounds.md#railroad-Lifetime">
<g class="nonterminal">
<rect height="22" width="84" x="35" y="42"/>
<text x="77" y="58">
Lifetime</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="129" y="42"/>
<text x="143" y="58">
:</text>
</g>
<a class="link" xlink:href="../trait-bounds.md#railroad-LifetimeBounds">
<g class="nonterminal">
<rect height="22" width="132" x="167" y="42"/>
<text x="233" y="58">
LifetimeBounds</text>
</g>
</a>
<path d=" M 119 53 h 10"/>
<path d=" M 157 53 h 10"/>
</g>
<path d=" M 309 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 299 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 460px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TypeBoundWhereClauseItem"><svg class="railroad" viewBox="0 0 460 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="generics.md#grammar-TypeBoundWhereClauseItem">
<text class="comment" x="102" y="25">
TypeBoundWhereClauseItem</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../trait-bounds.md#railroad-ForLifetimes">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="55"/>
<text x="117" y="71">
ForLifetimes</text>
</g>
</a>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="209" y="55"/>
<text x="235" y="71">
Type</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="271" y="55"/>
<text x="285" y="71">
:</text>
</g>
<g class="optional">
<path d=" M 309 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../trait-bounds.md#railroad-Bounds">
<g class="nonterminal">
<rect height="22" width="68" x="333" y="55"/>
<text x="367" y="71">
Bounds</text>
</g>
</a>
</g>
<path d=" M 199 66 h 10"/>
<path d=" M 261 66 h 10"/>
<path d=" M 299 66 h 10"/>
</g>
<path d=" M 435 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 425 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.generics.where.intro"><a class="rule-link" href="#r-items.generics.where.intro" title="items.generics.where.intro"><span>[items<wbr>.generics<wbr>.where<wbr>.intro]</span></a>
</div>

\_where 子句_提供了另一种为类型和生命周期参数指定约束的方式，也提供了一种为非类型参数的类型指定约束的方式。

<div class="rule" id="r-items.generics.where.higher-ranked-lifetimes"><a class="rule-link" href="#r-items.generics.where.higher-ranked-lifetimes" title="items.generics.where.higher-ranked-lifetimes"><span>[items<wbr>.generics<wbr>.where<wbr>.higher-ranked-lifetimes]</span></a>
</div>

`for` 关键字可用于引入[高阶生命周期](../trait-bounds.md#higher-ranked-trait-bounds)。它只允许 [LifetimeParam](generics.md#grammar-LifetimeParam) 参数。

```rust
struct A<T>
where
    T: Iterator,            // 也可以改用 A<T: Iterator>
    T::Item: Copy,          // 关联类型上的约束
    String: PartialEq<T>,   // `String` 上的约束，使用类型参数
    i32: Default,           // 允许，但没有用处
{
    f: T,
}
```

<div class="rule" id="r-items.generics.attributes"><a class="rule-link" href="#r-items.generics.attributes" title="items.generics.attributes"><span>[items<wbr>.generics<wbr>.attributes]</span></a>
</div>

## 属性

泛型生命周期参数和类型参数允许带有[属性](../attributes.md)。没有内建属性会在此位置产生任何作用，不过自定义 derive 属性可以为其赋予意义。

此示例展示如何使用自定义 derive 属性修改泛型参数的含义。

<!-- ignore: requires proc macro derive -->

```rust,ignore
// 假设 MyFlexibleClone 的 derive 将 `my_flexible_clone` 声明为
// 它所理解的属性。
#[derive(MyFlexibleClone)]
struct Foo<#[my_flexible_clone(unbounded)] H> {
    a: *const H
}
```