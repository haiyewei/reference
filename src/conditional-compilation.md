<div class="rule" id="r-cfg"><a class="rule-link" href="#r-cfg" title="cfg"><span>[cfg]</span></a>
</div>

# 条件编译

<div class="rule" id="r-cfg.syntax"><a class="rule-link" href="#r-cfg.syntax" title="cfg.syntax"><span>[cfg<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ConfigurationPredicate" onclick="show_railroad()">[ConfigurationPredicate](conditional-compilation.md#railroad-ConfigurationPredicate)</span> →  
      <span class="grammar-text">[ConfigurationOption](conditional-compilation.md#grammar-ConfigurationOption)</span>  
    \| <span class="grammar-text">[ConfigurationAll](conditional-compilation.md#grammar-ConfigurationAll)</span>  
    \| <span class="grammar-text">[ConfigurationAny](conditional-compilation.md#grammar-ConfigurationAny)</span>  
    \| <span class="grammar-text">[ConfigurationNot](conditional-compilation.md#grammar-ConfigurationNot)</span>  
    \| <span class="grammar-literal">true</span>  
    \| <span class="grammar-literal">false</span>

<span class="grammar-text grammar-production" id="grammar-ConfigurationOption" onclick="show_railroad()">[ConfigurationOption](conditional-compilation.md#railroad-ConfigurationOption)</span> →  
    <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> ( <span class="grammar-literal">=</span> ( <span class="grammar-text">[STRING_LITERAL](tokens.md#grammar-STRING_LITERAL)</span> | <span class="grammar-text">[RAW_STRING_LITERAL](tokens.md#grammar-RAW_STRING_LITERAL)</span> ) )<sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-ConfigurationAll" onclick="show_railroad()">[ConfigurationAll](conditional-compilation.md#railroad-ConfigurationAll)</span> →  
    <span class="grammar-literal">all</span> <span class="grammar-literal">(</span> <span class="grammar-text">[ConfigurationPredicateList](conditional-compilation.md#grammar-ConfigurationPredicateList)</span><sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-ConfigurationAny" onclick="show_railroad()">[ConfigurationAny](conditional-compilation.md#railroad-ConfigurationAny)</span> →  
    <span class="grammar-literal">any</span> <span class="grammar-literal">(</span> <span class="grammar-text">[ConfigurationPredicateList](conditional-compilation.md#grammar-ConfigurationPredicateList)</span><sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-ConfigurationNot" onclick="show_railroad()">[ConfigurationNot](conditional-compilation.md#railroad-ConfigurationNot)</span> →  
    <span class="grammar-literal">not</span> <span class="grammar-literal">(</span> <span class="grammar-text">[ConfigurationPredicate](conditional-compilation.md#grammar-ConfigurationPredicate)</span> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-ConfigurationPredicateList" onclick="show_railroad()">[ConfigurationPredicateList](conditional-compilation.md#railroad-ConfigurationPredicateList)</span> →  
    <span class="grammar-text">[ConfigurationPredicate](conditional-compilation.md#grammar-ConfigurationPredicate)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[ConfigurationPredicate](conditional-compilation.md#grammar-ConfigurationPredicate)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 290px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ConfigurationPredicate"><svg class="railroad" viewBox="0 0 290 239" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-ConfigurationPredicate">
<text class="comment" x="95" y="25">
ConfigurationPredicate</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 172 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationOption">
<g class="nonterminal">
<rect height="22" width="172" x="59" y="42"/>
<text x="145" y="58">
ConfigurationOption</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 196 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 196 0 v -33"/>
<path d=" M 47 107 v 33 m 196 0 v -33"/>
<path d=" M 47 140 v 33 m 196 0 v -33"/>
<path d=" M 47 173 v 33 m 196 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 148 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationAll">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="75"/>
<text x="133" y="91">
ConfigurationAll</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 148 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationAny">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="108"/>
<text x="133" y="124">
ConfigurationAny</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 148 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationNot">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="141"/>
<text x="133" y="157">
ConfigurationNot</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 52 0 h 120 m -57 0 l -5 -5 m 0 10 l 5 -5 m 57 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="174"/>
<text x="85" y="190">
true</text>
</g>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 60 0 h 112 m -53 0 l -5 -5 m 0 10 l 5 -5 m 53 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="59" y="207"/>
<text x="89" y="223">
false</text>
</g>
</g>
<path d=" M 265 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 255 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 478px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ConfigurationOption"><svg class="railroad" viewBox="0 0 478 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-ConfigurationOption">
<text class="comment" x="81" y="25">
ConfigurationOption</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="55"/>
<text x="85" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 145 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 250 m -122 0 l -5 -5 m 0 10 l 5 -5 m 122 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="55"/>
<text x="183" y="71">
=</text>
</g>
<g class="choice">
<path d=" M 207 66 h 24 m 132 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0"/>
<a class="link" xlink:href="tokens.md#railroad-STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="132" x="231" y="55"/>
<text x="297" y="71">
STRING_LITERAL</text>
</g>
</a>
<path d=" M 207 66 a 12 12 0 0 1 12 12 v 9 m 188 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 219 87 v 0 a 12 12 0 0 0 12 12 m 164 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-RAW_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="164" x="231" y="88"/>
<text x="313" y="104">
RAW_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 197 66 h 10"/>
</g>
</g>
<path d=" M 135 66 h 10"/>
</g>
<path d=" M 453 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 443 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 484px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ConfigurationAll"><svg class="railroad" viewBox="0 0 484 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-ConfigurationAll">
<text class="comment" x="71" y="25">
ConfigurationAll</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="55"/>
<text x="57" y="71">
all</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="89" y="55"/>
<text x="103" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 127 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 236 m -115 0 l -5 -5 m 0 10 l 5 -5 m 115 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationPredicateList">
<g class="nonterminal">
<rect height="22" width="236" x="151" y="55"/>
<text x="269" y="71">
ConfigurationPredicateList</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="421" y="55"/>
<text x="435" y="71">
)</text>
</g>
<path d=" M 79 66 h 10"/>
<path d=" M 117 66 h 10"/>
<path d=" M 411 66 h 10"/>
</g>
<path d=" M 459 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 449 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 484px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ConfigurationAny"><svg class="railroad" viewBox="0 0 484 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-ConfigurationAny">
<text class="comment" x="71" y="25">
ConfigurationAny</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="55"/>
<text x="57" y="71">
any</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="89" y="55"/>
<text x="103" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 127 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 236 m -115 0 l -5 -5 m 0 10 l 5 -5 m 115 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationPredicateList">
<g class="nonterminal">
<rect height="22" width="236" x="151" y="55"/>
<text x="269" y="71">
ConfigurationPredicateList</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="421" y="55"/>
<text x="435" y="71">
)</text>
</g>
<path d=" M 79 66 h 10"/>
<path d=" M 117 66 h 10"/>
<path d=" M 411 66 h 10"/>
</g>
<path d=" M 459 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 449 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 404px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ConfigurationNot"><svg class="railroad" viewBox="0 0 404 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-ConfigurationNot">
<text class="comment" x="71" y="25">
ConfigurationNot</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="42"/>
<text x="57" y="58">
not</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="89" y="42"/>
<text x="103" y="58">
(</text>
</g>
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationPredicate">
<g class="nonterminal">
<rect height="22" width="204" x="127" y="42"/>
<text x="229" y="58">
ConfigurationPredicate</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="341" y="42"/>
<text x="355" y="58">
)</text>
</g>
<path d=" M 79 53 h 10"/>
<path d=" M 117 53 h 10"/>
<path d=" M 331 53 h 10"/>
</g>
<path d=" M 379 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 369 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 684px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ConfigurationPredicateList"><svg class="railroad" viewBox="0 0 684 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-ConfigurationPredicateList">
<text class="comment" x="109" y="25">
ConfigurationPredicateList</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationPredicate">
<g class="nonterminal">
<rect height="22" width="204" x="35" y="55"/>
<text x="137" y="71">
ConfigurationPredicate</text>
</g>
</a>
<g class="optional">
<path d=" M 249 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 266 m -130 0 l -5 -5 m 0 10 l 5 -5 m 130 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 273 66 h 12 m 242 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -242 m 124 0 l 5 -5 m 0 10 l -5 -5 m -124 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="285" y="55"/>
<text x="299" y="71">
,</text>
</g>
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationPredicate">
<g class="nonterminal">
<rect height="22" width="204" x="323" y="55"/>
<text x="425" y="71">
ConfigurationPredicate</text>
</g>
</a>
<path d=" M 313 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 573 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="597" y="55"/>
<text x="611" y="71">
,</text>
</g>
</g>
<path d=" M 239 66 h 10"/>
<path d=" M 563 66 h 10"/>
</g>
<path d=" M 659 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 649 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-cfg.intro"><a class="rule-link" href="#r-cfg.intro" title="cfg.intro"><span>[cfg<wbr>.intro]</span></a>
</div>

_条件编译的源代码_ 是只在特定条件下才编译的源代码。

<div class="rule" id="r-cfg.attributes-macro"><a class="rule-link" href="#r-cfg.attributes-macro" title="cfg.attributes-macro"><span>[cfg<wbr>.attributes-macro]</span></a>
</div>

可以使用 [`cfg`](#the-cfg-attribute) 和 [`cfg_attr`](#the-cfg_attr-attribute) [属性](attributes.md)，以及内置的 [`cfg!`](#the-cfg-macro) 和 [`cfg_select!`](#the-cfg_select-macro) [宏](macros.md)，使源代码进行条件编译。

<div class="rule" id="r-cfg.conditional"><a class="rule-link" href="#r-cfg.conditional" title="cfg.conditional"><span>[cfg<wbr>.conditional]</span></a>
</div>

是否编译可以取决于被编译 crate 的目标架构、传递给编译器的任意值，以及下文进一步描述的其他因素。

<div class="rule" id="r-cfg.predicate"><a class="rule-link" href="#r-cfg.predicate" title="cfg.predicate"><span>[cfg<wbr>.predicate]</span></a>
</div>

每种条件编译形式都接受一个求值为 true 或 false 的_配置谓词\_。该谓词是以下之一：

<div class="rule" id="r-cfg.predicate.option"><a class="rule-link" href="#r-cfg.predicate.option" title="cfg.predicate.option"><span>[cfg<wbr>.predicate<wbr>.option]</span></a>
</div>

- 配置选项。如果该选项已设置，则谓词为 true；如果未设置，则为 false。

<div class="rule" id="r-cfg.predicate.all"><a class="rule-link" href="#r-cfg.predicate.all" title="cfg.predicate.all"><span>[cfg<wbr>.predicate<wbr>.all]</span></a>
</div>

- `all()` 加上以逗号分隔的配置谓词列表。如果给定的所有谓词均为 true，或者列表为空，则它为 true。

<div class="rule" id="r-cfg.predicate.any"><a class="rule-link" href="#r-cfg.predicate.any" title="cfg.predicate.any"><span>[cfg<wbr>.predicate<wbr>.any]</span></a>
</div>

- `any()` 加上以逗号分隔的配置谓词列表。如果给定谓词中至少一个为 true，则它为 true。如果没有谓词，则它为 false。

<div class="rule" id="r-cfg.predicate.not"><a class="rule-link" href="#r-cfg.predicate.not" title="cfg.predicate.not"><span>[cfg<wbr>.predicate<wbr>.not]</span></a>
</div>

- `not()` 加上一个配置谓词。如果其谓词为 false，则它为 true；如果其谓词为 true，则它为 false。

<div class="rule" id="r-cfg.predicate.literal"><a class="rule-link" href="#r-cfg.predicate.literal" title="cfg.predicate.literal"><span>[cfg<wbr>.predicate<wbr>.literal]</span></a>
</div>

- `true` 或 `false` 字面量，分别始终为 true 或 false。

<div class="rule" id="r-cfg.option-spec"><a class="rule-link" href="#r-cfg.option-spec" title="cfg.option-spec"><span>[cfg<wbr>.option-spec]</span></a>
</div>

_配置选项_ 要么是名称，要么是键值对，并且要么已设置，要么未设置。

<div class="rule" id="r-cfg.option-name"><a class="rule-link" href="#r-cfg.option-name" title="cfg.option-name"><span>[cfg<wbr>.option-name]</span></a>
</div>

名称写作单个标识符，例如 `unix`。

<div class="rule" id="r-cfg.option-key-value"><a class="rule-link" href="#r-cfg.option-key-value" title="cfg.option-key-value"><span>[cfg<wbr>.option-key-value]</span></a>
</div>

键值对写作一个标识符、`=`，然后是一个字符串，例如 `target_arch = "x86_64"`。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `=` 周围的空白会被忽略，因此 `foo="bar"` 与 `foo = "bar"` 等价。

</div>

<div class="rule" id="r-cfg.option-key-uniqueness"><a class="rule-link" href="#r-cfg.option-key-uniqueness" title="cfg.option-key-uniqueness"><span>[cfg<wbr>.option-key-uniqueness]</span></a>
</div>

键不需要唯一。例如，`feature = "std"` 和 `feature = "serde"` 可以同时被设置。

<div class="rule" id="r-cfg.options.set"><a class="rule-link" href="#r-cfg.options.set" title="cfg.options.set"><span>[cfg<wbr>.options<wbr>.set]</span></a>
</div>

## 设置配置选项

<div class="rule" id="r-cfg.options.intro"><a class="rule-link" href="#r-cfg.options.intro" title="cfg.options.intro"><span>[cfg<wbr>.options<wbr>.intro]</span></a>
</div>

哪些配置选项被设置，是在 crate 编译期间静态确定的。

<div class="rule" id="r-cfg.options.target"><a class="rule-link" href="#r-cfg.options.target" title="cfg.options.target"><span>[cfg<wbr>.options<wbr>.target]</span></a>
</div>

某些选项会基于编译相关数据而_由编译器设置\_。

<div class="rule" id="r-cfg.options.other"><a class="rule-link" href="#r-cfg.options.other" title="cfg.options.other"><span>[cfg<wbr>.options<wbr>.other]</span></a>
</div>

其他选项会基于代码之外传递给编译器的输入而_任意设置\_。

<div class="rule" id="r-cfg.options.crate"><a class="rule-link" href="#r-cfg.options.crate" title="cfg.options.crate"><span>[cfg<wbr>.options<wbr>.crate]</span></a>
</div>

无法从正在编译的 crate 的源代码内部设置配置选项。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 对于 `rustc`，任意设置的配置选项使用 [`--cfg`](../rustc/command-line-arguments.html#--cfg-configure-the-compilation-environment) 标志设置。可以用 `rustc --print cfg --target $TARGET` 显示指定目标的配置值。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 键为 `feature` 的配置选项是 [Cargo](../cargo/reference/features.html) 用来指定编译时选项和可选依赖项的一种约定。

</div>

<div class="rule" id="r-cfg.target_arch"><a class="rule-link" href="#r-cfg.target_arch" title="cfg.target_arch"><span>[cfg<wbr>.target_arch]</span></a>
</div>

### `target_arch`

<div class="rule" id="r-cfg.target_arch.def"><a class="rule-link" href="#r-cfg.target_arch.def" title="cfg.target_arch.def"><span>[cfg<wbr>.target_arch<wbr>.def]</span></a>
</div>

键值选项，按目标的 CPU 架构设置一次。该值类似于平台目标三元组的第一个元素，但并不完全相同。

<div class="rule" id="r-cfg.target_arch.values"><a class="rule-link" href="#r-cfg.target_arch.values" title="cfg.target_arch.values"><span>[cfg<wbr>.target_arch<wbr>.values]</span></a>
</div>

示例值：

- `"x86"`
- `"x86_64"`
- `"mips"`
- `"powerpc"`
- `"powerpc64"`
- `"arm"`
- `"aarch64"`

<div class="rule" id="r-cfg.target_feature"><a class="rule-link" href="#r-cfg.target_feature" title="cfg.target_feature"><span>[cfg<wbr>.target_feature]</span></a>
</div>

### `target_feature`

<div class="rule" id="r-cfg.target_feature.def"><a class="rule-link" href="#r-cfg.target_feature.def" title="cfg.target_feature.def"><span>[cfg<wbr>.target_feature<wbr>.def]</span></a>
</div>

键值选项，会为当前编译目标可用的每个平台特性分别设置。

<div class="rule" id="r-cfg.target_feature.values"><a class="rule-link" href="#r-cfg.target_feature.values" title="cfg.target_feature.values"><span>[cfg<wbr>.target_feature<wbr>.values]</span></a>
</div>

示例值：

- `"avx"`
- `"avx2"`
- `"crt-static"`
- `"rdrand"`
- `"sse"`
- `"sse2"`
- `"sse4.1"`

关于可用特性的更多细节，见 [`target_feature` 属性](attributes/codegen.md#the-target_feature-attribute)。

<div class="rule" id="r-cfg.target_feature.crt_static"><a class="rule-link" href="#r-cfg.target_feature.crt_static" title="cfg.target_feature.crt_static"><span>[cfg<wbr>.target_feature<wbr>.crt_static]</span></a>
</div>

`target_feature` 选项还可使用一个附加特性 `crt-static`，用于表示有[静态 C 运行时](linkage.md#static-and-dynamic-c-runtimes)可用。

<div class="rule" id="r-cfg.target_os"><a class="rule-link" href="#r-cfg.target_os" title="cfg.target_os"><span>[cfg<wbr>.target_os]</span></a>
</div>

### `target_os`

<div class="rule" id="r-cfg.target_os.def"><a class="rule-link" href="#r-cfg.target_os.def" title="cfg.target_os.def"><span>[cfg<wbr>.target_os<wbr>.def]</span></a>
</div>

键值选项，按目标的操作系统设置一次。该值类似于平台目标三元组的第二和第三个元素。

<div class="rule" id="r-cfg.target_os.values"><a class="rule-link" href="#r-cfg.target_os.values" title="cfg.target_os.values"><span>[cfg<wbr>.target_os<wbr>.values]</span></a>
</div>

示例值：

- `"windows"`
- `"macos"`
- `"ios"`
- `"linux"`
- `"android"`
- `"freebsd"`
- `"dragonfly"`
- `"openbsd"`
- `"netbsd"`
- `"none"`（嵌入式目标的典型值）

<div class="rule" id="r-cfg.target_family"><a class="rule-link" href="#r-cfg.target_family" title="cfg.target_family"><span>[cfg<wbr>.target_family]</span></a>
</div>

### `target_family`

<div class="rule" id="r-cfg.target_family.def"><a class="rule-link" href="#r-cfg.target_family.def" title="cfg.target_family.def"><span>[cfg<wbr>.target_family<wbr>.def]</span></a>
</div>

键值选项，提供对目标更通用的描述，例如目标通常所属的操作系统族或架构族。可以设置任意数量的 `target_family` 键值对。

<div class="rule" id="r-cfg.target_family.values"><a class="rule-link" href="#r-cfg.target_family.values" title="cfg.target_family.values"><span>[cfg<wbr>.target_family<wbr>.values]</span></a>
</div>

示例值：

- `"unix"`
- `"windows"`
- `"wasm"`
- 同时为 `"unix"` 和 `"wasm"`

<div class="rule" id="r-cfg.target_family.unix"><a class="rule-link" href="#r-cfg.target_family.unix" title="cfg.target_family.unix"><span>[cfg<wbr>.target_family<wbr>.unix]</span></a>
</div>

### `unix` 和 `windows`

如果设置了 `target_family = "unix"`，则会设置 `unix`。

<div class="rule" id="r-cfg.target_family.windows"><a class="rule-link" href="#r-cfg.target_family.windows" title="cfg.target_family.windows"><span>[cfg<wbr>.target_family<wbr>.windows]</span></a>
</div>

如果设置了 `target_family = "windows"`，则会设置 `windows`。

<div class="rule" id="r-cfg.target_env"><a class="rule-link" href="#r-cfg.target_env" title="cfg.target_env"><span>[cfg<wbr>.target_env]</span></a>
</div>

### `target_env`

<div class="rule" id="r-cfg.target_env.def"><a class="rule-link" href="#r-cfg.target_env.def" title="cfg.target_env.def"><span>[cfg<wbr>.target_env<wbr>.def]</span></a>
</div>

键值选项，设置为关于目标平台的进一步消歧信息，包括所用 ABI 或 `libc` 的信息。出于历史原因，只有在确实需要消歧时，该值才被定义为非空字符串。因此，例如在许多 GNU 平台上，该值会为空。该值类似于平台目标三元组的第四个元素。一个区别是，诸如 `gnueabihf` 这样的嵌入式 ABI 只会将 `target_env` 定义为 `"gnu"`。

<div class="rule" id="r-cfg.target_env.values"><a class="rule-link" href="#r-cfg.target_env.values" title="cfg.target_env.values"><span>[cfg<wbr>.target_env<wbr>.values]</span></a>
</div>

示例值：

- `""`
- `"gnu"`
- `"msvc"`
- `"musl"`
- `"sgx"`
- `"sim"`
- `"macabi"`

<div class="rule" id="r-cfg.target_abi"><a class="rule-link" href="#r-cfg.target_abi" title="cfg.target_abi"><span>[cfg<wbr>.target_abi]</span></a>
</div>

### `target_abi`

<div class="rule" id="r-cfg.target_abi.def"><a class="rule-link" href="#r-cfg.target_abi.def" title="cfg.target_abi.def"><span>[cfg<wbr>.target_abi<wbr>.def]</span></a>
</div>

键值选项，设置为关于目标 ABI 的信息，用于进一步消除目标的歧义。

<div class="rule" id="r-cfg.target_abi.disambiguation"><a class="rule-link" href="#r-cfg.target_abi.disambiguation" title="cfg.target_abi.disambiguation"><span>[cfg<wbr>.target_abi<wbr>.disambiguation]</span></a>
</div>

出于历史原因，只有在确实需要消歧时，该值才被定义为非空字符串。因此，例如在许多 GNU 平台上，该值会为空。

<div class="rule" id="r-cfg.target_abi.values"><a class="rule-link" href="#r-cfg.target_abi.values" title="cfg.target_abi.values"><span>[cfg<wbr>.target_abi<wbr>.values]</span></a>
</div>

示例值：

- `""`
- `"llvm"`
- `"eabihf"`
- `"abi64"`

<div class="rule" id="r-cfg.target_endian"><a class="rule-link" href="#r-cfg.target_endian" title="cfg.target_endian"><span>[cfg<wbr>.target_endian]</span></a>
</div>

### `target_endian`

键值选项，根据目标 CPU 的字节序设置一次，其值为 "little" 或 "big"。

<div class="rule" id="r-cfg.target_pointer_width"><a class="rule-link" href="#r-cfg.target_pointer_width" title="cfg.target_pointer_width"><span>[cfg<wbr>.target_pointer_width]</span></a>
</div>

### `target_pointer_width`

<div class="rule" id="r-cfg.target_pointer_width.def"><a class="rule-link" href="#r-cfg.target_pointer_width.def" title="cfg.target_pointer_width.def"><span>[cfg<wbr>.target_pointer_width<wbr>.def]</span></a>
</div>

键值选项，按目标的指针宽度（位数）设置一次。

<div class="rule" id="r-cfg.target_pointer_width.values"><a class="rule-link" href="#r-cfg.target_pointer_width.values" title="cfg.target_pointer_width.values"><span>[cfg<wbr>.target_pointer_width<wbr>.values]</span></a>
</div>

示例值：

- `"16"`
- `"32"`
- `"64"`

<div class="rule" id="r-cfg.target_vendor"><a class="rule-link" href="#r-cfg.target_vendor" title="cfg.target_vendor"><span>[cfg<wbr>.target_vendor]</span></a>
</div>

### `target_vendor`

<div class="rule" id="r-cfg.target_vendor.def"><a class="rule-link" href="#r-cfg.target_vendor.def" title="cfg.target_vendor.def"><span>[cfg<wbr>.target_vendor<wbr>.def]</span></a>
</div>

键值选项，按目标的供应商设置一次。

<div class="rule" id="r-cfg.target_vendor.values"><a class="rule-link" href="#r-cfg.target_vendor.values" title="cfg.target_vendor.values"><span>[cfg<wbr>.target_vendor<wbr>.values]</span></a>
</div>

示例值：

- `"apple"`
- `"fortanix"`
- `"pc"`
- `"unknown"`

<div class="rule" id="r-cfg.target_has_atomic"><a class="rule-link" href="#r-cfg.target_has_atomic" title="cfg.target_has_atomic"><span>[cfg<wbr>.target_has_atomic]</span></a>
</div>

### `target_has_atomic`

<div class="rule" id="r-cfg.target_has_atomic.def"><a class="rule-link" href="#r-cfg.target_has_atomic.def" title="cfg.target_has_atomic.def"><span>[cfg<wbr>.target_has_atomic<wbr>.def]</span></a>
</div>

键值选项，会为目标支持原子加载、存储和比较并交换操作的每个位宽分别设置。

<div class="rule" id="r-cfg.target_has_atomic.stdlib"><a class="rule-link" href="#r-cfg.target_has_atomic.stdlib" title="cfg.target_has_atomic.stdlib"><span>[cfg<wbr>.target_has_atomic<wbr>.stdlib]</span></a>
</div>

当存在此 cfg 时，所有与相关原子宽度对应的稳定 [`core::sync::atomic`](../core/sync/atomic/index.html) API 都可用。

<div class="rule" id="r-cfg.target_has_atomic.values"><a class="rule-link" href="#r-cfg.target_has_atomic.values" title="cfg.target_has_atomic.values"><span>[cfg<wbr>.target_has_atomic<wbr>.values]</span></a>
</div>

可能的值：

- `"8"`
- `"16"`
- `"32"`
- `"64"`
- `"128"`
- `"ptr"`

<div class="rule" id="r-cfg.target_has_atomic_primitive_alignment"><a class="rule-link" href="#r-cfg.target_has_atomic_primitive_alignment" title="cfg.target_has_atomic_primitive_alignment"><span>[cfg<wbr>.target_has_atomic_primitive_alignment]</span></a>
</div>

### `target_has_atomic_primitive_alignment`

<div class="rule" id="r-cfg.target_has_atomic_primitive_alignment.def"><a class="rule-link" href="#r-cfg.target_has_atomic_primitive_alignment.def" title="cfg.target_has_atomic_primitive_alignment.def"><span>[cfg<wbr>.target_has_atomic_primitive_alignment<wbr>.def]</span></a>
</div>

键值选项，会为 [atomic](../core/sync/atomic/index.html) 类型与对应整数类型具有相同对齐的每个位宽分别设置。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 对于给定位宽，对齐通常相同。但是，在某些目标（例如 32 位 x86）上，诸如 [`AtomicI64`](../core/sync/atomic/type.AtomicI64.html) 的 64 位原子类型具有 8 字节对齐，而 `i64` 只对齐到 4 字节。在这种情况下，不会设置 `target_has_atomic_primitive_alignment = "64"`。

</div>

<div class="rule" id="r-cfg.target_has_atomic_primitive_alignment.values"><a class="rule-link" href="#r-cfg.target_has_atomic_primitive_alignment.values" title="cfg.target_has_atomic_primitive_alignment.values"><span>[cfg<wbr>.target_has_atomic_primitive_alignment<wbr>.values]</span></a>
</div>

可能的值：

- `"8"`
- `"16"`
- `"32"`
- `"64"`
- `"128"`
- `"ptr"`

<div class="rule" id="r-cfg.test"><a class="rule-link" href="#r-cfg.test" title="cfg.test"><span>[cfg<wbr>.test]</span></a>
</div>

### `test`

编译测试框架时启用。使用 `rustc` 时，通过 [`--test`](../rustc/command-line-arguments.html#--test-build-a-test-harness) 标志完成。关于测试支持的更多内容，见 [Testing](attributes/testing.md)。

<div class="rule" id="r-cfg.debug_assertions"><a class="rule-link" href="#r-cfg.debug_assertions" title="cfg.debug_assertions"><span>[cfg<wbr>.debug_assertions]</span></a>
</div>

### `debug_assertions`

默认在不启用优化进行编译时启用。可用于在开发中启用额外调试代码，而不在生产中启用。例如，它控制标准库 [`debug_assert!`](../core/macro.debug_assert.html) 宏的行为。

<div class="rule" id="r-cfg.proc_macro"><a class="rule-link" href="#r-cfg.proc_macro" title="cfg.proc_macro"><span>[cfg<wbr>.proc_macro]</span></a>
</div>

### `proc_macro`

当正在编译的 crate 使用 `proc_macro` [crate 类型](linkage.md)编译时设置。

<div class="rule" id="r-cfg.panic"><a class="rule-link" href="#r-cfg.panic" title="cfg.panic"><span>[cfg<wbr>.panic]</span></a>
</div>

### `panic`

<div class="rule" id="r-cfg.panic.def"><a class="rule-link" href="#r-cfg.panic.def" title="cfg.panic.def"><span>[cfg<wbr>.panic<wbr>.def]</span></a>
</div>

键值选项，会根据 [panic 策略](panic.md#panic-strategy)设置。注意，未来可能会添加更多值。

<div class="rule" id="r-cfg.panic.values"><a class="rule-link" href="#r-cfg.panic.values" title="cfg.panic.values"><span>[cfg<wbr>.panic<wbr>.values]</span></a>
</div>

示例值：

- `"abort"`
- `"unwind"`

## 条件编译的形式

<!-- template:attributes -->

<div class="rule" id="r-cfg.attr"><a class="rule-link" href="#r-cfg.attr" title="cfg.attr"><span>[cfg<wbr>.attr]</span></a>
</div>

### `cfg` 属性

<div class="rule" id="r-cfg.attr.intro"><a class="rule-link" href="#r-cfg.attr.intro" title="cfg.attr.intro"><span>[cfg<wbr>.attr<wbr>.intro]</span></a>
</div>

_`cfg` [属性](attributes.md)_ 会基于配置谓词有条件地包含它所附加到的形式。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > // The function is only included in the build when compiling for macOS
 > #[cfg(target_os = "macos")]
 > fn macos_only() {
 >   // ...
 > }
 > 
 > // This function is only included when either foo or bar is defined
 > #[cfg(any(foo, bar))]
 > fn needs_foo_or_bar() {
 >   // ...
 > }
 > 
 > // This function is only included when compiling for a unixish OS with a 32-bit
 > // architecture
 > #[cfg(all(unix, target_pointer_width = "32"))]
 > fn on_32bit_unix() {
 >   // ...
 > }
 > 
 > // This function is only included when foo is not defined
 > #[cfg(not(foo))]
 > fn needs_not_foo() {
 >   // ...
 > }
 > 
 > // This function is only included when the panic strategy is set to unwind
 > #[cfg(panic = "unwind")]
 > fn when_unwinding() {
 >   // ...
 > }
 > ```

</div>

<div class="rule" id="r-cfg.attr.syntax"><a class="rule-link" href="#r-cfg.attr.syntax" title="cfg.attr.syntax"><span>[cfg<wbr>.attr<wbr>.syntax]</span></a>
</div>

`cfg` 属性的语法是：

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-CfgAttribute" onclick="show_railroad()">[CfgAttribute](conditional-compilation.md#railroad-CfgAttribute)</span> → <span class="grammar-literal">cfg</span> <span class="grammar-literal">(</span> <span class="grammar-text">[ConfigurationPredicate](conditional-compilation.md#grammar-ConfigurationPredicate)</span> <span class="grammar-literal">)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 404px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CfgAttribute"><svg class="railroad" viewBox="0 0 404 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-CfgAttribute">
<text class="comment" x="57" y="25">
CfgAttribute</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="42"/>
<text x="57" y="58">
cfg</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="89" y="42"/>
<text x="103" y="58">
(</text>
</g>
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationPredicate">
<g class="nonterminal">
<rect height="22" width="204" x="127" y="42"/>
<text x="229" y="58">
ConfigurationPredicate</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="341" y="42"/>
<text x="355" y="58">
)</text>
</g>
<path d=" M 79 53 h 10"/>
<path d=" M 117 53 h 10"/>
<path d=" M 331 53 h 10"/>
</g>
<path d=" M 379 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 369 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-cfg.attr.allowed-positions"><a class="rule-link" href="#r-cfg.attr.allowed-positions" title="cfg.attr.allowed-positions"><span>[cfg<wbr>.attr<wbr>.allowed-positions]</span></a>
</div>

`cfg` 属性可以用在任何允许属性的位置。

<div class="rule" id="r-cfg.attr.duplicates"><a class="rule-link" href="#r-cfg.attr.duplicates" title="cfg.attr.duplicates"><span>[cfg<wbr>.attr<wbr>.duplicates]</span></a>
</div>

`cfg` 属性可以在一个形式上使用任意多次。如果任意一个 `cfg` 谓词为 false，则这些属性所附加到的形式不会被包含，但 [cfg.attr.crate-level-attrs](conditional-compilation.md#r-cfg.attr.crate-level-attrs) 中所述情形除外。

<div class="rule" id="r-cfg.attr.effect"><a class="rule-link" href="#r-cfg.attr.effect" title="cfg.attr.effect"><span>[cfg<wbr>.attr<wbr>.effect]</span></a>
</div>

如果谓词为 true，该形式会被重写为不带有这些 `cfg` 属性。如果任意谓词为 false，该形式会从源代码中移除。

<div class="rule" id="r-cfg.attr.crate-level-attrs"><a class="rule-link" href="#r-cfg.attr.crate-level-attrs" title="cfg.attr.crate-level-attrs"><span>[cfg<wbr>.attr<wbr>.crate-level-attrs]</span></a>
</div>

当 crate 级 `cfg` 的谓词为 false 时，crate 本身仍然存在。位于该 `cfg` 之前的所有 crate 属性会保留，位于该 `cfg` 之后的所有 crate 属性会被移除，后续的全部 crate 内容也会被移除。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 不移除前置属性的这种行为，使你可以执行诸如包含 `#![no_std]` 以避免链接 `std` 之类的操作，即使 `#![cfg(...)]` 以其他方式移除了 crate 的内容。例如：
 > 
 > <!-- ignore: test infrastructure can't handle no_std -->
 > 
 > ```rust,ignore
 > // This `no_std` attribute is kept even though the crate-level `cfg`
 > // attribute is false.
 > #![no_std]
 > #![cfg(false)]
 > 
 > // This function is not included.
 > pub fn example() {}
 > ```

</div>

<!-- template:attributes -->

<div class="rule" id="r-cfg.cfg_attr"><a class="rule-link" href="#r-cfg.cfg_attr" title="cfg.cfg_attr"><span>[cfg<wbr>.cfg_attr]</span></a>
</div>

### `cfg_attr` 属性

<div class="rule" id="r-cfg.cfg_attr.intro"><a class="rule-link" href="#r-cfg.cfg_attr.intro" title="cfg.cfg_attr.intro"><span>[cfg<wbr>.cfg_attr<wbr>.intro]</span></a>
</div>

_`cfg_attr` [属性](attributes.md)_ 会基于配置谓词有条件地包含属性。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 以下模块会基于目标在 `linux.rs` 或 `windows.rs` 中被找到。
 > 
 > <!-- ignore: `mod` needs multiple files -->
 > 
 > ```rust,ignore
 > #[cfg_attr(target_os = "linux", path = "linux.rs")]
 > #[cfg_attr(windows, path = "windows.rs")]
 > mod os;
 > ```

</div>

<div class="rule" id="r-cfg.cfg_attr.syntax"><a class="rule-link" href="#r-cfg.cfg_attr.syntax" title="cfg.cfg_attr.syntax"><span>[cfg<wbr>.cfg_attr<wbr>.syntax]</span></a>
</div>

`cfg_attr` 属性的语法是：

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-CfgAttrAttribute" onclick="show_railroad()">[CfgAttrAttribute](conditional-compilation.md#railroad-CfgAttrAttribute)</span> → <span class="grammar-literal">cfg\_attr</span> <span class="grammar-literal">(</span> <span class="grammar-text">[ConfigurationPredicate](conditional-compilation.md#grammar-ConfigurationPredicate)</span> <span class="grammar-literal">,</span> <span class="grammar-text">[CfgAttrs](conditional-compilation.md#grammar-CfgAttrs)</span><sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-CfgAttrs" onclick="show_railroad()">[CfgAttrs](conditional-compilation.md#railroad-CfgAttrs)</span> → <span class="grammar-text">[Attr](attributes.md#grammar-Attr)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[Attr](attributes.md#grammar-Attr)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 624px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CfgAttrAttribute"><svg class="railroad" viewBox="0 0 624 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-CfgAttrAttribute">
<text class="comment" x="71" y="25">
CfgAttrAttribute</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="84" x="35" y="55"/>
<text x="77" y="71">
cfg_attr</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="129" y="55"/>
<text x="143" y="71">
(</text>
</g>
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationPredicate">
<g class="nonterminal">
<rect height="22" width="204" x="167" y="55"/>
<text x="269" y="71">
ConfigurationPredicate</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="381" y="55"/>
<text x="395" y="71">
,</text>
</g>
<g class="optional">
<path d=" M 419 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 84 m -39 0 l -5 -5 m 0 10 l 5 -5 m 39 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="conditional-compilation.md#railroad-CfgAttrs">
<g class="nonterminal">
<rect height="22" width="84" x="443" y="55"/>
<text x="485" y="71">
CfgAttrs</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="561" y="55"/>
<text x="575" y="71">
)</text>
</g>
<path d=" M 119 66 h 10"/>
<path d=" M 157 66 h 10"/>
<path d=" M 371 66 h 10"/>
<path d=" M 409 66 h 10"/>
<path d=" M 551 66 h 10"/>
</g>
<path d=" M 599 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 589 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 380px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CfgAttrs"><svg class="railroad" viewBox="0 0 380 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-CfgAttrs">
<text class="comment" x="43" y="25">
CfgAttrs</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="attributes.md#railroad-Attr">
<g class="nonterminal">
<rect height="22" width="52" x="35" y="55"/>
<text x="61" y="71">
Attr</text>
</g>
</a>
<g class="optional">
<path d=" M 97 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 114 m -54 0 l -5 -5 m 0 10 l 5 -5 m 54 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 121 66 h 12 m 90 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -90 m 48 0 l 5 -5 m 0 10 l -5 -5 m -48 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="133" y="55"/>
<text x="147" y="71">
,</text>
</g>
<a class="link" xlink:href="attributes.md#railroad-Attr">
<g class="nonterminal">
<rect height="22" width="52" x="171" y="55"/>
<text x="197" y="71">
Attr</text>
</g>
</a>
<path d=" M 161 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 269 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="293" y="55"/>
<text x="307" y="71">
,</text>
</g>
</g>
<path d=" M 87 66 h 10"/>
<path d=" M 259 66 h 10"/>
</g>
<path d=" M 355 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 345 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-cfg.cfg_attr.allowed-positions"><a class="rule-link" href="#r-cfg.cfg_attr.allowed-positions" title="cfg.cfg_attr.allowed-positions"><span>[cfg<wbr>.cfg_attr<wbr>.allowed-positions]</span></a>
</div>

`cfg_attr` 属性可以用在任何允许属性的位置。

<div class="rule" id="r-cfg.cfg_attr.duplicates"><a class="rule-link" href="#r-cfg.cfg_attr.duplicates" title="cfg.cfg_attr.duplicates"><span>[cfg<wbr>.cfg_attr<wbr>.duplicates]</span></a>
</div>

`cfg_attr` 属性可以在一个形式上使用任意多次。

<div class="rule" id="r-cfg.cfg_attr.attr-restriction"><a class="rule-link" href="#r-cfg.cfg_attr.attr-restriction" title="cfg.cfg_attr.attr-restriction"><span>[cfg<wbr>.cfg_attr<wbr>.attr-restriction]</span></a>
</div>

[`crate_type`](linkage.md) 和 [`crate_name`](crates-and-source-files.md#the-crate_name-attribute) 属性不能与 `cfg_attr` 一起使用。

<div class="rule" id="r-cfg.cfg_attr.behavior"><a class="rule-link" href="#r-cfg.cfg_attr.behavior" title="cfg.cfg_attr.behavior"><span>[cfg<wbr>.cfg_attr<wbr>.behavior]</span></a>
</div>

当配置谓词为 true 时，`cfg_attr` 会展开为谓词之后列出的属性。

<div class="rule" id="r-cfg.cfg_attr.attribute-list"><a class="rule-link" href="#r-cfg.cfg_attr.attribute-list" title="cfg.cfg_attr.attribute-list"><span>[cfg<wbr>.cfg_attr<wbr>.attribute-list]</span></a>
</div>

可以列出零个、一个或多个属性。多个属性会分别展开为独立的属性。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > <!-- ignore: fake attributes -->
 > 
 > ```rust,ignore
 > #[cfg_attr(feature = "magic", sparkles, crackles)]
 > fn bewitched() {}
 > 
 > // When the `magic` feature flag is enabled, the above will expand to:
 > #[sparkles]
 > #[crackles]
 > fn bewitched() {}
 > ```

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `cfg_attr` 可以展开为另一个 `cfg_attr`。例如，`#[cfg_attr(target_os = "linux", cfg_attr(feature = "multithreaded", some_other_attribute))]` 是有效的。此示例等价于 `#[cfg_attr(all(target_os = "linux", feature = "multithreaded"), some_other_attribute)]`。

</div>

<div class="rule" id="r-cfg.macro"><a class="rule-link" href="#r-cfg.macro" title="cfg.macro"><span>[cfg<wbr>.macro]</span></a>
</div>

### `cfg` 宏

内置的 `cfg` 宏接受单个配置谓词，并在该谓词为 true 时求值为 `true` 字面量，在其为 false 时求值为 `false` 字面量。

例如：

```rust
let machine_kind = if cfg!(unix) {
  "unix"
} else if cfg!(windows) {
  "windows"
} else {
  "unknown"
};

println!("I'm running on a {} machine!", machine_kind);
```

<div class="rule" id="r-cfg.cfg_select"><a class="rule-link" href="#r-cfg.cfg_select" title="cfg.cfg_select"><span>[cfg<wbr>.cfg_select]</span></a>
</div>

### `cfg_select` 宏

<div class="rule" id="r-cfg.cfg_select.intro"><a class="rule-link" href="#r-cfg.cfg_select.intro" title="cfg.cfg_select.intro"><span>[cfg<wbr>.cfg_select<wbr>.intro]</span></a>
</div>

内置的 [`cfg_select!`](../core/macros/macro.cfg_select.html) 宏可用于基于多个配置谓词在编译时选择代码。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > cfg_select! {
 >     unix => {
 >         fn foo() { /* unix specific functionality */ }
 >     }
 >     target_pointer_width = "32" => {
 >         fn foo() { /* non-unix, 32-bit functionality */ }
 >     }
 >     _ => {
 >         fn foo() { /* fallback implementation */ }
 >     }
 > }
 > 
 > let is_unix_str = cfg_select! {
 >     unix => "unix",
 >     _ => "not unix",
 > };
 > ```

</div>

<div class="rule" id="r-cfg.cfg_select.syntax"><a class="rule-link" href="#r-cfg.cfg_select.syntax" title="cfg.cfg_select.syntax"><span>[cfg<wbr>.cfg_select<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-CfgSelect" onclick="show_railroad()">[CfgSelect](conditional-compilation.md#railroad-CfgSelect)</span> → <span class="grammar-text">[CfgSelectArms](conditional-compilation.md#grammar-CfgSelectArms)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-CfgSelectArms" onclick="show_railroad()">[CfgSelectArms](conditional-compilation.md#railroad-CfgSelectArms)</span> →  
    <span class="grammar-text">[CfgSelectConfigurationPredicate](conditional-compilation.md#grammar-CfgSelectConfigurationPredicate)</span> <span class="grammar-literal">=></span>  
    (  
        <span class="grammar-literal">{</span> ^ <span class="grammar-text">[TokenTree](macros.md#grammar-TokenTree)</span> <span class="grammar-literal">}</span> <span class="grammar-literal">,</span><sup>?</sup> <span class="grammar-text">[CfgSelectArms](conditional-compilation.md#grammar-CfgSelectArms)</span><sup>?</sup>  
      \| <span class="grammar-text">[ExpressionWithBlockNoAttrs](expressions.md#grammar-ExpressionWithBlockNoAttrs)</span> <span class="grammar-literal">,</span><sup>?</sup> <span class="grammar-text">[CfgSelectArms](conditional-compilation.md#grammar-CfgSelectArms)</span><sup>?</sup>  
      \| <span class="grammar-text">[ExpressionWithoutBlockNoAttrs](expressions.md#grammar-ExpressionWithoutBlockNoAttrs)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[CfgSelectArms](conditional-compilation.md#grammar-CfgSelectArms)</span><sup>?</sup> )<sup>?</sup>  
    )

<span class="grammar-text grammar-production" id="grammar-CfgSelectConfigurationPredicate" onclick="show_railroad()">[CfgSelectConfigurationPredicate](conditional-compilation.md#railroad-CfgSelectConfigurationPredicate)</span> →  
    <span class="grammar-text">[ConfigurationPredicate](conditional-compilation.md#grammar-ConfigurationPredicate)</span> | <span class="grammar-literal">\_</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 242px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CfgSelect"><svg class="railroad" viewBox="0 0 242 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-CfgSelect">
<text class="comment" x="46" y="25">
CfgSelect</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="conditional-compilation.md#railroad-CfgSelectArms">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="55"/>
<text x="121" y="71">
CfgSelectArms</text>
</g>
</a>
</g>
<path d=" M 217 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 207 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 682px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CfgSelectArms"><svg class="railroad" viewBox="0 0 682 280" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-CfgSelectArms">
<text class="comment" x="60" y="25">
CfgSelectArms</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 53 h 12"/>
<path d=" M 369 53 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -322 m 164 0 l 5 -5 m 0 10 l -5 -5 m -164 0 a 12 12 0 0 0 -12 12 v 48 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<a class="link" xlink:href="conditional-compilation.md#railroad-CfgSelectConfigurationPredicate">
<g class="nonterminal">
<rect height="22" width="276" x="47" y="42"/>
<text x="185" y="58">
CfgSelectConfigurationPredicate</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="333" y="42"/>
<text x="351" y="58">
=&gt;</text>
</g>
<path d=" M 323 53 h 10"/>
</g>
<path d=" M 623 149 h 0 a 12 12 0 0 0 12 -12 v -72 m 0 39 l -5 5 m 10 0 l -5 -5 m 0 -39 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<g class="choice">
<path d=" M 47 149 h 24 m 452 0 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="71" y="138"/>
<text x="85" y="154">
{</text>
</g>
<g class="labeledbox">
<rect height="79" width="414" x="109" y="89"/>
<path d=" M 109 149 h 8 m 398 0 h 8"/>
<text class="comment" x="174" y="112">
no backtracking</text>
<g class="sequence">
<a class="link" xlink:href="macros.md#railroad-TokenTree">
<g class="nonterminal">
<rect height="22" width="92" x="117" y="138"/>
<text x="163" y="154">
TokenTree</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="219" y="138"/>
<text x="233" y="154">
}</text>
</g>
<g class="optional">
<path d=" M 257 149 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="281" y="138"/>
<text x="295" y="154">
,</text>
</g>
</g>
<g class="optional">
<path d=" M 343 149 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="conditional-compilation.md#railroad-CfgSelectArms">
<g class="nonterminal">
<rect height="22" width="124" x="367" y="138"/>
<text x="429" y="154">
CfgSelectArms</text>
</g>
</a>
</g>
<path d=" M 209 149 h 10"/>
<path d=" M 247 149 h 10"/>
<path d=" M 333 149 h 10"/>
</g>
</g>
<path d=" M 99 149 h 10"/>
</g>
<path d=" M 47 149 a 12 12 0 0 1 12 12 v 17 m 552 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 59 190 v 33 m 552 0 v -33"/>
<path d=" M 59 178 v 12 a 12 12 0 0 0 12 12 m 504 0 h 24 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<a class="link" xlink:href="expressions.md#railroad-ExpressionWithBlockNoAttrs">
<g class="nonterminal">
<rect height="22" width="236" x="71" y="191"/>
<text x="189" y="207">
ExpressionWithBlockNoAttrs</text>
</g>
</a>
<g class="optional">
<path d=" M 317 202 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="341" y="191"/>
<text x="355" y="207">
,</text>
</g>
</g>
<g class="optional">
<path d=" M 403 202 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="conditional-compilation.md#railroad-CfgSelectArms">
<g class="nonterminal">
<rect height="22" width="124" x="427" y="191"/>
<text x="489" y="207">
CfgSelectArms</text>
</g>
</a>
</g>
<path d=" M 307 202 h 10"/>
<path d=" M 393 202 h 10"/>
</g>
<path d=" M 59 223 v 24 a 12 12 0 0 0 12 12 m 528 0 h 0 a 12 12 0 0 0 12 -12 v -24"/>
<g class="sequence">
<a class="link" xlink:href="expressions.md#railroad-ExpressionWithoutBlockNoAttrs">
<g class="nonterminal">
<rect height="22" width="260" x="71" y="248"/>
<text x="201" y="264">
ExpressionWithoutBlockNoAttrs</text>
</g>
</a>
<g class="optional">
<path d=" M 341 259 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 210 m -102 0 l -5 -5 m 0 10 l 5 -5 m 102 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="365" y="248"/>
<text x="379" y="264">
,</text>
</g>
<g class="optional">
<path d=" M 403 259 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="conditional-compilation.md#railroad-CfgSelectArms">
<g class="nonterminal">
<rect height="22" width="124" x="427" y="248"/>
<text x="489" y="264">
CfgSelectArms</text>
</g>
</a>
</g>
<path d=" M 393 259 h 10"/>
</g>
</g>
<path d=" M 331 259 h 10"/>
</g>
</g>
</g>
</g>
<path d=" M 657 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 647 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 322px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CfgSelectConfigurationPredicate"><svg class="railroad" viewBox="0 0 322 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="conditional-compilation.md#grammar-CfgSelectConfigurationPredicate">
<text class="comment" x="127" y="25">
CfgSelectConfigurationPredicate</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 204 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="conditional-compilation.md#railroad-ConfigurationPredicate">
<g class="nonterminal">
<rect height="22" width="204" x="59" y="42"/>
<text x="161" y="58">
ConfigurationPredicate</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 228 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 28 0 h 176 m -85 0 l -5 -5 m 0 10 l 5 -5 m 85 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="75"/>
<text x="73" y="91">
_</text>
</g>
</g>
<path d=" M 297 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 287 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-cfg.cfg_select.first-arm"><a class="rule-link" href="#r-cfg.cfg_select.first-arm" title="cfg.cfg_select.first-arm"><span>[cfg<wbr>.cfg_select<wbr>.first-arm]</span></a>
</div>

`cfg_select` 会展开为第一个配置谓词求值为 true 的分支的载荷。

<div class="rule" id="r-cfg.cfg_select.braces"><a class="rule-link" href="#r-cfg.cfg_select.braces" title="cfg.cfg_select.braces"><span>[cfg<wbr>.cfg_select<wbr>.braces]</span></a>
</div>

如果整个载荷包裹在花括号中，则在展开期间会移除这些花括号。

<div class="rule" id="r-cfg.cfg_select.wildcard"><a class="rule-link" href="#r-cfg.cfg_select.wildcard" title="cfg.cfg_select.wildcard"><span>[cfg<wbr>.cfg_select<wbr>.wildcard]</span></a>
</div>

配置谓词 `_` 始终求值为 true。

<div class="rule" id="r-cfg.cfg_select.fallthrough"><a class="rule-link" href="#r-cfg.cfg_select.fallthrough" title="cfg.cfg_select.fallthrough"><span>[cfg<wbr>.cfg_select<wbr>.fallthrough]</span></a>
</div>

如果没有任何谓词求值为 true，则为编译错误。

<div class="rule" id="r-cfg.cfg_select.well-formed"><a class="rule-link" href="#r-cfg.cfg_select.well-formed" title="cfg.cfg_select.well-formed"><span>[cfg<wbr>.cfg_select<wbr>.well-formed]</span></a>
</div>

每个右侧都必须是在调用该宏的位置处语法有效的展开。