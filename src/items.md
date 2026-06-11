<div class="rule" id="r-items"><a class="rule-link" href="#r-items" title="items"><span>[items]</span></a>
</div>

# 项

<div class="rule" id="r-items.syntax"><a class="rule-link" href="#r-items.syntax" title="items.syntax"><span>[items<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Item" onclick="show_railroad()">[Item](items.md#railroad-Item)</span> →  
    <span class="grammar-text">[OuterAttribute](attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> ( <span class="grammar-text">[VisItem](items.md#grammar-VisItem)</span> | <span class="grammar-text">[MacroItem](items.md#grammar-MacroItem)</span> )

<span class="grammar-text grammar-production" id="grammar-VisItem" onclick="show_railroad()">[VisItem](items.md#railroad-VisItem)</span> →  
    <span class="grammar-text">[Visibility](visibility-and-privacy.md#grammar-Visibility)</span><sup>?</sup>  
    (  
        <span class="grammar-text">[Module](items/modules.md#grammar-Module)</span>  
      \| <span class="grammar-text">[ExternCrate](items/extern-crates.md#grammar-ExternCrate)</span>  
      \| <span class="grammar-text">[UseDeclaration](items/use-declarations.md#grammar-UseDeclaration)</span>  
      \| <span class="grammar-text">[Function](items/functions.md#grammar-Function)</span>  
      \| <span class="grammar-text">[TypeAlias](items/type-aliases.md#grammar-TypeAlias)</span>  
      \| <span class="grammar-text">[Struct](items/structs.md#grammar-Struct)</span>  
      \| <span class="grammar-text">[Enumeration](items/enumerations.md#grammar-Enumeration)</span>  
      \| <span class="grammar-text">[Union](items/unions.md#grammar-Union)</span>  
      \| <span class="grammar-text">[ConstantItem](items/constant-items.md#grammar-ConstantItem)</span>  
      \| <span class="grammar-text">[StaticItem](items/static-items.md#grammar-StaticItem)</span>  
      \| <span class="grammar-text">[Trait](items/traits.md#grammar-Trait)</span>  
      \| <span class="grammar-text">[Implementation](items/implementations.md#grammar-Implementation)</span>  
      \| <span class="grammar-text">[ExternBlock](items/external-blocks.md#grammar-ExternBlock)</span>  
    )

<span class="grammar-text grammar-production" id="grammar-MacroItem" onclick="show_railroad()">[MacroItem](items.md#railroad-MacroItem)</span> →  
      <span class="grammar-text">[MacroInvocationSemi](macros.md#grammar-MacroInvocationSemi)</span>  
    \| <span class="grammar-text">[MacroRulesDefinition](macros-by-example.md#grammar-MacroRulesDefinition)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 424px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Item"><svg class="railroad" viewBox="0 0 424 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="items.md#grammar-Item">
<text class="comment" x="29" y="25">
Item</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="71" y="55"/>
<text x="137" y="71">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<g class="choice">
<path d=" M 249 66 h 24 m 76 0 h 40"/>
<a class="link" xlink:href="items.md#railroad-VisItem">
<g class="nonterminal">
<rect height="22" width="76" x="273" y="55"/>
<text x="311" y="71">
VisItem</text>
</g>
</a>
<path d=" M 249 66 a 12 12 0 0 1 12 12 v 9 m 116 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 261 87 v 0 a 12 12 0 0 0 12 12 m 92 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="items.md#railroad-MacroItem">
<g class="nonterminal">
<rect height="22" width="92" x="273" y="88"/>
<text x="319" y="104">
MacroItem</text>
</g>
</a>
</g>
<path d=" M 239 66 h 10"/>
</g>
<path d=" M 399 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 389 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 408px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-VisItem"><svg class="railroad" viewBox="0 0 408 483" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="items.md#grammar-VisItem">
<text class="comment" x="39" y="25">
VisItem</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="visibility-and-privacy.md#railroad-Visibility">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="55"/>
<text x="109" y="71">
Visibility</text>
</g>
</a>
</g>
<g class="choice">
<path d=" M 193 66 h 24 m 68 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0"/>
<g class="sequence">
<a class="link" xlink:href="items/modules.md#railroad-Module">
<g class="nonterminal">
<rect height="22" width="68" x="217" y="55"/>
<text x="251" y="71">
Module</text>
</g>
</a>
</g>
<path d=" M 193 66 a 12 12 0 0 1 12 12 v 9 m 156 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 205 87 v 33 m 156 0 v -33"/>
<path d=" M 205 120 v 33 m 156 0 v -33"/>
<path d=" M 205 153 v 33 m 156 0 v -33"/>
<path d=" M 205 186 v 33 m 156 0 v -33"/>
<path d=" M 205 219 v 33 m 156 0 v -33"/>
<path d=" M 205 252 v 33 m 156 0 v -33"/>
<path d=" M 205 285 v 33 m 156 0 v -33"/>
<path d=" M 205 318 v 33 m 156 0 v -33"/>
<path d=" M 205 351 v 33 m 156 0 v -33"/>
<path d=" M 205 384 v 33 m 156 0 v -33"/>
<path d=" M 205 417 v 33 m 156 0 v -33"/>
<path d=" M 205 87 v 0 a 12 12 0 0 0 12 12 m 108 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/extern-crates.md#railroad-ExternCrate">
<g class="nonterminal">
<rect height="22" width="108" x="217" y="88"/>
<text x="271" y="104">
ExternCrate</text>
</g>
</a>
</g>
<path d=" M 205 120 v 0 a 12 12 0 0 0 12 12 m 132 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/use-declarations.md#railroad-UseDeclaration">
<g class="nonterminal">
<rect height="22" width="132" x="217" y="121"/>
<text x="283" y="137">
UseDeclaration</text>
</g>
</a>
</g>
<path d=" M 205 153 v 0 a 12 12 0 0 0 12 12 m 84 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/functions.md#railroad-Function">
<g class="nonterminal">
<rect height="22" width="84" x="217" y="154"/>
<text x="259" y="170">
Function</text>
</g>
</a>
</g>
<path d=" M 205 186 v 0 a 12 12 0 0 0 12 12 m 92 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/type-aliases.md#railroad-TypeAlias">
<g class="nonterminal">
<rect height="22" width="92" x="217" y="187"/>
<text x="263" y="203">
TypeAlias</text>
</g>
</a>
</g>
<path d=" M 205 219 v 0 a 12 12 0 0 0 12 12 m 68 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/structs.md#railroad-Struct">
<g class="nonterminal">
<rect height="22" width="68" x="217" y="220"/>
<text x="251" y="236">
Struct</text>
</g>
</a>
</g>
<path d=" M 205 252 v 0 a 12 12 0 0 0 12 12 m 108 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/enumerations.md#railroad-Enumeration">
<g class="nonterminal">
<rect height="22" width="108" x="217" y="253"/>
<text x="271" y="269">
Enumeration</text>
</g>
</a>
</g>
<path d=" M 205 285 v 0 a 12 12 0 0 0 12 12 m 60 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/unions.md#railroad-Union">
<g class="nonterminal">
<rect height="22" width="60" x="217" y="286"/>
<text x="247" y="302">
Union</text>
</g>
</a>
</g>
<path d=" M 205 318 v 0 a 12 12 0 0 0 12 12 m 116 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/constant-items.md#railroad-ConstantItem">
<g class="nonterminal">
<rect height="22" width="116" x="217" y="319"/>
<text x="275" y="335">
ConstantItem</text>
</g>
</a>
</g>
<path d=" M 205 351 v 0 a 12 12 0 0 0 12 12 m 100 0 h 32 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/static-items.md#railroad-StaticItem">
<g class="nonterminal">
<rect height="22" width="100" x="217" y="352"/>
<text x="267" y="368">
StaticItem</text>
</g>
</a>
</g>
<path d=" M 205 384 v 0 a 12 12 0 0 0 12 12 m 60 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/traits.md#railroad-Trait">
<g class="nonterminal">
<rect height="22" width="60" x="217" y="385"/>
<text x="247" y="401">
Trait</text>
</g>
</a>
</g>
<path d=" M 205 417 v 0 a 12 12 0 0 0 12 12 m 132 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/implementations.md#railroad-Implementation">
<g class="nonterminal">
<rect height="22" width="132" x="217" y="418"/>
<text x="283" y="434">
Implementation</text>
</g>
</a>
</g>
<path d=" M 205 450 v 0 a 12 12 0 0 0 12 12 m 108 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items/external-blocks.md#railroad-ExternBlock">
<g class="nonterminal">
<rect height="22" width="108" x="217" y="451"/>
<text x="271" y="467">
ExternBlock</text>
</g>
</a>
</g>
</g>
<path d=" M 183 66 h 10"/>
</g>
<path d=" M 383 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 373 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 306px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroItem"><svg class="railroad" viewBox="0 0 306 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="items.md#grammar-MacroItem">
<text class="comment" x="46" y="25">
MacroItem</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 172 0 h 40"/>
<g class="sequence">
<a class="link" xlink:href="macros.md#railroad-MacroInvocationSemi">
<g class="nonterminal">
<rect height="22" width="172" x="59" y="42"/>
<text x="145" y="58">
MacroInvocationSemi</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 212 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 188 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroRulesDefinition">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="75"/>
<text x="153" y="91">
MacroRulesDefinition</text>
</g>
</a>
</g>
<path d=" M 281 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 271 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.intro"><a class="rule-link" href="#r-items.intro" title="items.intro"><span>[items<wbr>.intro]</span></a>
</div>

_项_ 是 crate 的组成部分。项在 crate 中由一组嵌套的[模块](items/modules.md)组织起来。每个 crate 都有一个单一的“最外层”匿名模块；crate 中的所有其他项都在该 crate 的模块树中具有[路径](paths.md)。

<div class="rule" id="r-items.static-def"><a class="rule-link" href="#r-items.static-def" title="items.static-def"><span>[items<wbr>.static-def]</span></a>
</div>

项完全在编译时确定，通常在执行期间保持固定，并且可以驻留在只读内存中。

<div class="rule" id="r-items.kinds"><a class="rule-link" href="#r-items.kinds" title="items.kinds"><span>[items<wbr>.kinds]</span></a>
</div>

项有若干种：

- [模块](items/modules.md)
- [`extern crate` 声明](items/extern-crates.md)
- [`use` 声明](items/use-declarations.md)
- [函数定义](items/functions.md)
- [类型别名定义](items/type-aliases.md)
- [结构体定义](items/structs.md)
- [枚举定义](items/enumerations.md)
- [联合体定义](items/unions.md)
- [常量项](items/constant-items.md)
- [静态项](items/static-items.md)
- [trait 定义](items/traits.md)
- [实现](items/implementations.md)
- [`extern` 块](items/external-blocks.md)

<div class="rule" id="r-items.locations"><a class="rule-link" href="#r-items.locations" title="items.locations"><span>[items<wbr>.locations]</span></a>
</div>

项可以在 [crate 的根](crates-and-source-files.md)、[模块](items/modules.md)或[块表达式](expressions/block-expr.md)中声明。

<div class="rule" id="r-items.associated-locations"><a class="rule-link" href="#r-items.associated-locations" title="items.associated-locations"><span>[items<wbr>.associated-locations]</span></a>
</div>

项的一个子集称为[关联项](items/associated-items.md)，可以在 [trait](items/traits.md) 和[实现](items/implementations.md)中声明。

<div class="rule" id="r-items.extern-locations"><a class="rule-link" href="#r-items.extern-locations" title="items.extern-locations"><span>[items<wbr>.extern-locations]</span></a>
</div>

项的一个子集称为外部项，可以在 [`extern` 块](items/external-blocks.md)中声明。

<div class="rule" id="r-items.decl-order"><a class="rule-link" href="#r-items.decl-order" title="items.decl-order"><span>[items<wbr>.decl-order]</span></a>
</div>

项可以按任意顺序定义，但具有自身作用域行为的 [`macro_rules`](macros-by-example.md) 除外。

<div class="rule" id="r-items.name-resolution"><a class="rule-link" href="#r-items.name-resolution" title="items.name-resolution"><span>[items<wbr>.name-resolution]</span></a>
</div>

项名称的[名称解析](names/name-resolution.md)允许项定义在模块或块中引用该项的位置之前或之后。

有关项的作用域规则的信息，参见[项作用域](names/scopes.md#item-scopes)。