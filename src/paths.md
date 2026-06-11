<div class="rule" id="r-paths"><a class="rule-link" href="#r-paths" title="paths"><span>[paths]</span></a>
</div>

# 路径

<div class="rule" id="r-paths.intro"><a class="rule-link" href="#r-paths.intro" title="paths.intro"><span>[paths<wbr>.intro]</span></a>
</div>

_路径_ 是由一个或多个路径段组成的序列，路径段之间由 `::` token 分隔。路径用于引用[项](items.md)、值、[类型](types.md)、[宏](macros.md)和[属性](attributes.md)。

两个仅由标识符段组成的简单路径示例：

<!-- ignore: syntax fragment -->

```rust,ignore
x;
x::y::z;
```

## 路径的类型

<div class="rule" id="r-paths.simple"><a class="rule-link" href="#r-paths.simple" title="paths.simple"><span>[paths<wbr>.simple]</span></a>
</div>

### 简单路径

<div class="rule" id="r-paths.simple.syntax"><a class="rule-link" href="#r-paths.simple.syntax" title="paths.simple.syntax"><span>[paths<wbr>.simple<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-SimplePath" onclick="show_railroad()">[SimplePath](paths.md#railroad-SimplePath)</span> →  
    <span class="grammar-literal">::</span><sup>?</sup> <span class="grammar-text">[SimplePathSegment](paths.md#grammar-SimplePathSegment)</span> ( <span class="grammar-literal">::</span> <span class="grammar-text">[SimplePathSegment](paths.md#grammar-SimplePathSegment)</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-SimplePathSegment" onclick="show_railroad()">[SimplePathSegment](paths.md#railroad-SimplePathSegment)</span> →  
    <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> | <span class="grammar-literal">super</span> | <span class="grammar-literal">self</span> | <span class="grammar-literal">crate</span> | <span class="grammar-literal">$crate</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 604px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-SimplePath"><svg class="railroad" viewBox="0 0 604 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-SimplePath">
<text class="comment" x="50" y="25">
SimplePath</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 36 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="55"/>
<text x="77" y="71">
::</text>
</g>
</g>
<a class="link" xlink:href="paths.md#railroad-SimplePathSegment">
<g class="nonterminal">
<rect height="22" width="156" x="129" y="55"/>
<text x="207" y="71">
SimplePathSegment</text>
</g>
</a>
<g class="optional">
<path d=" M 295 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 226 m -110 0 l -5 -5 m 0 10 l 5 -5 m 110 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 319 66 h 12 m 202 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -202 m 104 0 l 5 -5 m 0 10 l -5 -5 m -104 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="331" y="55"/>
<text x="349" y="71">
::</text>
</g>
<a class="link" xlink:href="paths.md#railroad-SimplePathSegment">
<g class="nonterminal">
<rect height="22" width="156" x="377" y="55"/>
<text x="455" y="71">
SimplePathSegment</text>
</g>
</a>
<path d=" M 367 66 h 10"/>
</g>
</g>
</g>
<path d=" M 119 66 h 10"/>
<path d=" M 285 66 h 10"/>
</g>
<path d=" M 579 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 569 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 218px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-SimplePathSegment"><svg class="railroad" viewBox="0 0 218 206" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-SimplePathSegment">
<text class="comment" x="74" y="25">
SimplePathSegment</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 100 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="42"/>
<text x="109" y="58">
IDENTIFIER</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 124 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 124 0 v -33"/>
<path d=" M 47 107 v 33 m 124 0 v -33"/>
<path d=" M 47 140 v 33 m 124 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 60 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="59" y="75"/>
<text x="89" y="91">
super</text>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 52 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="108"/>
<text x="85" y="124">
self</text>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 60 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="59" y="141"/>
<text x="89" y="157">
crate</text>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 68 0 h 32 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="174"/>
<text x="93" y="190">
$crate</text>
</g>
</g>
<path d=" M 193 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 183 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-paths.simple.intro"><a class="rule-link" href="#r-paths.simple.intro" title="paths.simple.intro"><span>[paths<wbr>.simple<wbr>.intro]</span></a>
</div>

简单路径用于[可见性](visibility-and-privacy.md)标记、[属性](attributes.md)、[宏](macros-by-example.md)和 [`use`](items/use-declarations.md) 项。例如：

```rust
use std::io::{self, Write};
mod m {
    #[clippy::cyclomatic_complexity = "0"]
    pub (in super) fn f1() {}
}
```

<div class="rule" id="r-paths.expr"><a class="rule-link" href="#r-paths.expr" title="paths.expr"><span>[paths<wbr>.expr]</span></a>
</div>

### 表达式中的路径

<div class="rule" id="r-paths.expr.syntax"><a class="rule-link" href="#r-paths.expr.syntax" title="paths.expr.syntax"><span>[paths<wbr>.expr<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-PathInExpression" onclick="show_railroad()">[PathInExpression](paths.md#railroad-PathInExpression)</span> →  
    <span class="grammar-literal">::</span><sup>?</sup> <span class="grammar-text">[PathExprSegment](paths.md#grammar-PathExprSegment)</span> ( <span class="grammar-literal">::</span> <span class="grammar-text">[PathExprSegment](paths.md#grammar-PathExprSegment)</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-PathExprSegment" onclick="show_railroad()">[PathExprSegment](paths.md#railroad-PathExprSegment)</span> →  
    <span class="grammar-text">[PathIdentSegment](paths.md#grammar-PathIdentSegment)</span> ( <span class="grammar-literal">::</span> <span class="grammar-text">[GenericArgs](paths.md#grammar-GenericArgs)</span> )<sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-PathIdentSegment" onclick="show_railroad()">[PathIdentSegment](paths.md#railroad-PathIdentSegment)</span> →  
    <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> | <span class="grammar-literal">super</span> | <span class="grammar-literal">self</span> | <span class="grammar-literal">Self</span> | <span class="grammar-literal">crate</span> | <span class="grammar-literal">$crate</span>

<span class="grammar-text grammar-production" id="grammar-GenericArgs" onclick="show_railroad()">[GenericArgs](paths.md#railroad-GenericArgs)</span> →  
      <span class="grammar-literal">\<</span> <span class="grammar-text">[GenericArgList](paths.md#grammar-GenericArgList)</span><sup>?</sup> <span class="grammar-literal">\></span>  
    \| <span class="grammar-literal">(</span> <span class="grammar-text">[TypeList](paths.md#grammar-TypeList)</span><sup>?</sup> <span class="grammar-literal">)</span> ( <span class="grammar-literal">\-></span> <span class="grammar-text">[TypeNoBounds](types.md#grammar-TypeNoBounds)</span> )<sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-GenericArgList" onclick="show_railroad()">[GenericArgList](paths.md#railroad-GenericArgList)</span> →  
    ( <span class="grammar-text">[GenericArg](paths.md#grammar-GenericArg)</span> <span class="grammar-literal">,</span> )<sup>\*</sup> <span class="grammar-text">[GenericArg](paths.md#grammar-GenericArg)</span> <span class="grammar-literal">,</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-TypeList" onclick="show_railroad()">[TypeList](paths.md#railroad-TypeList)</span> →  
    ( <span class="grammar-text">[Type](types.md#grammar-Type)</span> <span class="grammar-literal">,</span> )<sup>\*</sup> <span class="grammar-text">[Type](types.md#grammar-Type)</span> <span class="grammar-literal">,</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-GenericArg" onclick="show_railroad()">[GenericArg](paths.md#railroad-GenericArg)</span> →  
    <span class="grammar-text">[Lifetime](trait-bounds.md#grammar-Lifetime)</span> | <span class="grammar-text">[Type](types.md#grammar-Type)</span> | <span class="grammar-text">[GenericArgsConst](paths.md#grammar-GenericArgsConst)</span> | <span class="grammar-text">[GenericArgsBinding](paths.md#grammar-GenericArgsBinding)</span> | <span class="grammar-text">[GenericArgsBounds](paths.md#grammar-GenericArgsBounds)</span>

<span class="grammar-text grammar-production" id="grammar-GenericArgsConst" onclick="show_railroad()">[GenericArgsConst](paths.md#railroad-GenericArgsConst)</span> →  
      <span class="grammar-text">[BlockExpression](expressions/block-expr.md#grammar-BlockExpression)</span>  
    \| <span class="grammar-text">[LiteralExpression](expressions/literal-expr.md#grammar-LiteralExpression)</span>  
    \| <span class="grammar-literal">\-</span> <span class="grammar-text">[LiteralExpression](expressions/literal-expr.md#grammar-LiteralExpression)</span>  
    \| <span class="grammar-text">[SimplePathSegment](paths.md#grammar-SimplePathSegment)</span>

<span class="grammar-text grammar-production" id="grammar-GenericArgsBinding" onclick="show_railroad()">[GenericArgsBinding](paths.md#railroad-GenericArgsBinding)</span> →  
    <span class="grammar-text">[TypePathSegment](paths.md#grammar-TypePathSegment)</span> <span class="grammar-literal">=</span> <span class="grammar-text">[Type](types.md#grammar-Type)</span>

<span class="grammar-text grammar-production" id="grammar-GenericArgsBounds" onclick="show_railroad()">[GenericArgsBounds](paths.md#railroad-GenericArgsBounds)</span> →  
    <span class="grammar-text">[TypePathSegment](paths.md#grammar-TypePathSegment)</span> <span class="grammar-literal">:</span> <span class="grammar-text">[Bounds](trait-bounds.md#grammar-Bounds)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 572px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-PathInExpression"><svg class="railroad" viewBox="0 0 572 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-PathInExpression">
<text class="comment" x="71" y="25">
PathInExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 36 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="55"/>
<text x="77" y="71">
::</text>
</g>
</g>
<a class="link" xlink:href="paths.md#railroad-PathExprSegment">
<g class="nonterminal">
<rect height="22" width="140" x="129" y="55"/>
<text x="199" y="71">
PathExprSegment</text>
</g>
</a>
<g class="optional">
<path d=" M 279 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 210 m -102 0 l -5 -5 m 0 10 l 5 -5 m 102 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 303 66 h 12 m 186 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -186 m 96 0 l 5 -5 m 0 10 l -5 -5 m -96 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="315" y="55"/>
<text x="333" y="71">
::</text>
</g>
<a class="link" xlink:href="paths.md#railroad-PathExprSegment">
<g class="nonterminal">
<rect height="22" width="140" x="361" y="55"/>
<text x="431" y="71">
PathExprSegment</text>
</g>
</a>
<path d=" M 351 66 h 10"/>
</g>
</g>
</g>
<path d=" M 119 66 h 10"/>
<path d=" M 269 66 h 10"/>
</g>
<path d=" M 547 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 537 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 430px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-PathExprSegment"><svg class="railroad" viewBox="0 0 430 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-PathExprSegment">
<text class="comment" x="67" y="25">
PathExprSegment</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-PathIdentSegment">
<g class="nonterminal">
<rect height="22" width="148" x="35" y="55"/>
<text x="109" y="71">
PathIdentSegment</text>
</g>
</a>
<g class="optional">
<path d=" M 193 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 154 m -74 0 l -5 -5 m 0 10 l 5 -5 m 74 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="217" y="55"/>
<text x="235" y="71">
::</text>
</g>
<a class="link" xlink:href="paths.md#railroad-GenericArgs">
<g class="nonterminal">
<rect height="22" width="108" x="263" y="55"/>
<text x="317" y="71">
GenericArgs</text>
</g>
</a>
<path d=" M 253 66 h 10"/>
</g>
</g>
<path d=" M 183 66 h 10"/>
</g>
<path d=" M 405 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 395 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 218px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-PathIdentSegment"><svg class="railroad" viewBox="0 0 218 239" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-PathIdentSegment">
<text class="comment" x="71" y="25">
PathIdentSegment</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 100 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="42"/>
<text x="109" y="58">
IDENTIFIER</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 124 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 124 0 v -33"/>
<path d=" M 47 107 v 33 m 124 0 v -33"/>
<path d=" M 47 140 v 33 m 124 0 v -33"/>
<path d=" M 47 173 v 33 m 124 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 60 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="59" y="75"/>
<text x="89" y="91">
super</text>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 52 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="108"/>
<text x="85" y="124">
self</text>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 52 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="141"/>
<text x="85" y="157">
Self</text>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 60 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="59" y="174"/>
<text x="89" y="190">
crate</text>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 68 0 h 32 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="207"/>
<text x="93" y="223">
$crate</text>
</g>
</g>
<path d=" M 193 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 183 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 546px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-GenericArgs"><svg class="railroad" viewBox="0 0 546 132" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-GenericArgs">
<text class="comment" x="53" y="25">
GenericArgs</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 66 h 24 m 256 0 h 196 m -95 0 l -5 -5 m 0 10 l 5 -5 m 95 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="55"/>
<text x="73" y="71">
&lt;</text>
</g>
<g class="optional">
<path d=" M 97 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 132 m -63 0 l -5 -5 m 0 10 l 5 -5 m 63 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="paths.md#railroad-GenericArgList">
<g class="nonterminal">
<rect height="22" width="132" x="121" y="55"/>
<text x="187" y="71">
GenericArgList</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="287" y="55"/>
<text x="301" y="71">
&gt;</text>
</g>
<path d=" M 87 66 h 10"/>
<path d=" M 277 66 h 10"/>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 9 m 452 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 87 v 12 a 12 12 0 0 0 12 12 m 428 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="100"/>
<text x="73" y="116">
(</text>
</g>
<g class="optional">
<path d=" M 97 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 84 m -39 0 l -5 -5 m 0 10 l 5 -5 m 39 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="paths.md#railroad-TypeList">
<g class="nonterminal">
<rect height="22" width="84" x="121" y="100"/>
<text x="163" y="116">
TypeList</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="239" y="100"/>
<text x="253" y="116">
)</text>
</g>
<g class="optional">
<path d=" M 277 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 162 m -78 0 l -5 -5 m 0 10 l 5 -5 m 78 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="301" y="100"/>
<text x="319" y="116">
-&gt;</text>
</g>
<a class="link" xlink:href="types.md#railroad-TypeNoBounds">
<g class="nonterminal">
<rect height="22" width="116" x="347" y="100"/>
<text x="405" y="116">
TypeNoBounds</text>
</g>
</a>
<path d=" M 337 111 h 10"/>
</g>
</g>
<path d=" M 87 111 h 10"/>
<path d=" M 229 111 h 10"/>
<path d=" M 267 111 h 10"/>
</g>
</g>
<path d=" M 521 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 511 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 476px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-GenericArgList"><svg class="railroad" viewBox="0 0 476 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-GenericArgList">
<text class="comment" x="64" y="25">
GenericArgList</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 162 m -78 0 l -5 -5 m 0 10 l 5 -5 m 78 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 66 h 12 m 138 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -138 m 72 0 l 5 -5 m 0 10 l -5 -5 m -72 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-GenericArg">
<g class="nonterminal">
<rect height="22" width="100" x="71" y="55"/>
<text x="121" y="71">
GenericArg</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="181" y="55"/>
<text x="195" y="71">
,</text>
</g>
<path d=" M 171 66 h 10"/>
</g>
</g>
</g>
<a class="link" xlink:href="paths.md#railroad-GenericArg">
<g class="nonterminal">
<rect height="22" width="100" x="255" y="55"/>
<text x="305" y="71">
GenericArg</text>
</g>
</a>
<g class="optional">
<path d=" M 365 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="389" y="55"/>
<text x="403" y="71">
,</text>
</g>
</g>
<path d=" M 245 66 h 10"/>
<path d=" M 355 66 h 10"/>
</g>
<path d=" M 451 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 441 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 380px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TypeList"><svg class="railroad" viewBox="0 0 380 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-TypeList">
<text class="comment" x="43" y="25">
TypeList</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 114 m -54 0 l -5 -5 m 0 10 l 5 -5 m 54 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 66 h 12 m 90 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -90 m 48 0 l 5 -5 m 0 10 l -5 -5 m -48 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<a class="link" xlink:href="types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="71" y="55"/>
<text x="97" y="71">
Type</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="133" y="55"/>
<text x="147" y="71">
,</text>
</g>
<path d=" M 123 66 h 10"/>
</g>
</g>
</g>
<a class="link" xlink:href="types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="207" y="55"/>
<text x="233" y="71">
Type</text>
</g>
</a>
<g class="optional">
<path d=" M 269 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="293" y="55"/>
<text x="307" y="71">
,</text>
</g>
</g>
<path d=" M 197 66 h 10"/>
<path d=" M 259 66 h 10"/>
</g>
<path d=" M 355 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 345 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 282px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-GenericArg"><svg class="railroad" viewBox="0 0 282 206" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-GenericArg">
<text class="comment" x="50" y="25">
GenericArg</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 84 0 h 104 m -49 0 l -5 -5 m 0 10 l 5 -5 m 49 0"/>
<g class="sequence">
<a class="link" xlink:href="trait-bounds.md#railroad-Lifetime">
<g class="nonterminal">
<rect height="22" width="84" x="59" y="42"/>
<text x="101" y="58">
Lifetime</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 188 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 188 0 v -33"/>
<path d=" M 47 107 v 33 m 188 0 v -33"/>
<path d=" M 47 140 v 33 m 188 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 52 0 h 112 m -53 0 l -5 -5 m 0 10 l 5 -5 m 53 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="59" y="75"/>
<text x="85" y="91">
Type</text>
</g>
</a>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 148 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="paths.md#railroad-GenericArgsConst">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="108"/>
<text x="133" y="124">
GenericArgsConst</text>
</g>
</a>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 164 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="paths.md#railroad-GenericArgsBinding">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="141"/>
<text x="141" y="157">
GenericArgsBinding</text>
</g>
</a>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 156 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="paths.md#railroad-GenericArgsBounds">
<g class="nonterminal">
<rect height="22" width="156" x="59" y="174"/>
<text x="137" y="190">
GenericArgsBounds</text>
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
<div style="width: 312px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-GenericArgsConst"><svg class="railroad" viewBox="0 0 312 173" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-GenericArgsConst">
<text class="comment" x="71" y="25">
GenericArgsConst</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 140 0 h 78 m -36 0 l -5 -5 m 0 10 l 5 -5 m 36 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="42"/>
<text x="129" y="58">
BlockExpression</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 218 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 218 0 v -33"/>
<path d=" M 47 107 v 33 m 218 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 156 0 h 38 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/literal-expr.md#railroad-LiteralExpression">
<g class="nonterminal">
<rect height="22" width="156" x="59" y="75"/>
<text x="137" y="91">
LiteralExpression</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 194 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="108"/>
<text x="73" y="124">
-</text>
</g>
<a class="link" xlink:href="expressions/literal-expr.md#railroad-LiteralExpression">
<g class="nonterminal">
<rect height="22" width="156" x="97" y="108"/>
<text x="175" y="124">
LiteralExpression</text>
</g>
</a>
<path d=" M 87 119 h 10"/>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 156 0 h 38 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="paths.md#railroad-SimplePathSegment">
<g class="nonterminal">
<rect height="22" width="156" x="59" y="141"/>
<text x="137" y="157">
SimplePathSegment</text>
</g>
</a>
</g>
<path d=" M 287 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 277 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 310px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-GenericArgsBinding"><svg class="railroad" viewBox="0 0 310 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-GenericArgsBinding">
<text class="comment" x="78" y="25">
GenericArgsBinding</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-TypePathSegment">
<g class="nonterminal">
<rect height="22" width="140" x="35" y="42"/>
<text x="105" y="58">
TypePathSegment</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="185" y="42"/>
<text x="199" y="58">
=</text>
</g>
<a class="link" xlink:href="types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="223" y="42"/>
<text x="249" y="58">
Type</text>
</g>
</a>
<path d=" M 175 53 h 10"/>
<path d=" M 213 53 h 10"/>
</g>
<path d=" M 285 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 275 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 326px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-GenericArgsBounds"><svg class="railroad" viewBox="0 0 326 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-GenericArgsBounds">
<text class="comment" x="74" y="25">
GenericArgsBounds</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-TypePathSegment">
<g class="nonterminal">
<rect height="22" width="140" x="35" y="42"/>
<text x="105" y="58">
TypePathSegment</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="185" y="42"/>
<text x="199" y="58">
:</text>
</g>
<a class="link" xlink:href="trait-bounds.md#railroad-Bounds">
<g class="nonterminal">
<rect height="22" width="68" x="223" y="42"/>
<text x="257" y="58">
Bounds</text>
</g>
</a>
<path d=" M 175 53 h 10"/>
<path d=" M 213 53 h 10"/>
</g>
<path d=" M 301 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 291 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-paths.expr.intro"><a class="rule-link" href="#r-paths.expr.intro" title="paths.expr.intro"><span>[paths<wbr>.expr<wbr>.intro]</span></a>
</div>

表达式中的路径允许指定带有泛型实参的路径。它们用于[表达式](expressions.md)和[模式](patterns.md)中的多种位置。

<div class="rule" id="r-paths.expr.turbofish"><a class="rule-link" href="#r-paths.expr.turbofish" title="paths.expr.turbofish"><span>[paths<wbr>.expr<wbr>.turbofish]</span></a>
</div>

为避免与小于运算符产生歧义，泛型实参的开头 `<` 前必须有 `::` token。这通常称为 “turbofish” 语法。

```rust
(0..10).collect::<Vec<_>>();
Vec::<u8>::with_capacity(1024);
```

<div class="rule" id="r-paths.expr.argument-order"><a class="rule-link" href="#r-paths.expr.argument-order" title="paths.expr.argument-order"><span>[paths<wbr>.expr<wbr>.argument-order]</span></a>
</div>

泛型实参的顺序限定为：先是生命周期实参，然后是类型实参，然后是 const 实参，最后是等式约束。

<div class="rule" id="r-paths.expr.complex-const-params"><a class="rule-link" href="#r-paths.expr.complex-const-params" title="paths.expr.complex-const-params"><span>[paths<wbr>.expr<wbr>.complex-const-params]</span></a>
</div>

const 实参必须用花括号括起来，除非它们是[字面量](expressions/literal-expr.md)、[推断 const](items/generics.md#r-items.generics.const.inferred)或单段路径。[推断 const](items/generics.md#r-items.generics.const.inferred) 不能用花括号括起来。

```rust
mod m {
    pub const C: usize = 1;
}
const C: usize = m::C;
fn f<const N: usize>() -> [u8; N] { [0; N] }

let _ = f::<1>(); // Literal.
let _: [_; 1] = f::<_>(); // Inferred const.
let _: [_; 1] = f::<(((_)))>(); // Inferred const.
let _ = f::<C>(); // 单段路径。
let _ = f::<{ m::C }>(); // Multi-segment path must be braced.
```

```rust,compile_fail
fn f<const N: usize>() -> [u8; N] { [0; _] }
let _: [_; 1] = f::<{ _ }>();
//                    ^ 错误：这里不允许 `_`
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 在泛型实参列表中，[推断 const](items/generics.md#r-items.generics.const.inferred) 会被解析为[推断类型](types/inferred.md#grammar-InferredType)，但随后在语义上被视为一种单独的 [const 泛型实参](items/generics.md#r-items.generics.const.argument)。

</div>

<div class="rule" id="r-paths.expr.impl-trait-params"><a class="rule-link" href="#r-paths.expr.impl-trait-params" title="paths.expr.impl-trait-params"><span>[paths<wbr>.expr<wbr>.impl-trait-params]</span></a>
</div>

与 `impl Trait` 类型对应的合成类型参数是隐式的，不能显式指定这些参数。

<div class="rule" id="r-paths.qualified"><a class="rule-link" href="#r-paths.qualified" title="paths.qualified"><span>[paths<wbr>.qualified]</span></a>
</div>

## 限定路径

<div class="rule" id="r-paths.qualified.syntax"><a class="rule-link" href="#r-paths.qualified.syntax" title="paths.qualified.syntax"><span>[paths<wbr>.qualified<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-QualifiedPathInExpression" onclick="show_railroad()">[QualifiedPathInExpression](paths.md#railroad-QualifiedPathInExpression)</span> → <span class="grammar-text">[QualifiedPathType](paths.md#grammar-QualifiedPathType)</span> ( <span class="grammar-literal">::</span> <span class="grammar-text">[PathExprSegment](paths.md#grammar-PathExprSegment)</span> )<sup>+</sup>

<span class="grammar-text grammar-production" id="grammar-QualifiedPathType" onclick="show_railroad()">[QualifiedPathType](paths.md#railroad-QualifiedPathType)</span> → <span class="grammar-literal">\<</span> <span class="grammar-text">[Type](types.md#grammar-Type)</span> ( <span class="grammar-literal">as</span> <span class="grammar-text">[TypePath](paths.md#grammar-TypePath)</span> )<sup>?</sup> <span class="grammar-literal">\></span>

<span class="grammar-text grammar-production" id="grammar-QualifiedPathInType" onclick="show_railroad()">[QualifiedPathInType](paths.md#railroad-QualifiedPathInType)</span> → <span class="grammar-text">[QualifiedPathType](paths.md#grammar-QualifiedPathType)</span> ( <span class="grammar-literal">::</span> <span class="grammar-text">[TypePathSegment](paths.md#grammar-TypePathSegment)</span> )<sup>+</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 446px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-QualifiedPathInExpression"><svg class="railroad" viewBox="0 0 446 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-QualifiedPathInExpression">
<text class="comment" x="106" y="25">
QualifiedPathInExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-QualifiedPathType">
<g class="nonterminal">
<rect height="22" width="156" x="35" y="42"/>
<text x="113" y="58">
QualifiedPathType</text>
</g>
</a>
<g class="repeat">
<path d=" M 201 53 h 12 m 186 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -186 m 96 0 l 5 -5 m 0 10 l -5 -5 m -96 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="213" y="42"/>
<text x="231" y="58">
::</text>
</g>
<a class="link" xlink:href="paths.md#railroad-PathExprSegment">
<g class="nonterminal">
<rect height="22" width="140" x="259" y="42"/>
<text x="329" y="58">
PathExprSegment</text>
</g>
</a>
<path d=" M 249 53 h 10"/>
</g>
</g>
<path d=" M 191 53 h 10"/>
</g>
<path d=" M 421 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 411 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 386px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-QualifiedPathType"><svg class="railroad" viewBox="0 0 386 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-QualifiedPathType">
<text class="comment" x="74" y="25">
QualifiedPathType</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="55"/>
<text x="49" y="71">
&lt;</text>
</g>
<a class="link" xlink:href="types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="73" y="55"/>
<text x="99" y="71">
Type</text>
</g>
</a>
<g class="optional">
<path d=" M 135 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 130 m -62 0 l -5 -5 m 0 10 l 5 -5 m 62 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="159" y="55"/>
<text x="177" y="71">
as</text>
</g>
<a class="link" xlink:href="paths.md#railroad-TypePath">
<g class="nonterminal">
<rect height="22" width="84" x="205" y="55"/>
<text x="247" y="71">
TypePath</text>
</g>
</a>
<path d=" M 195 66 h 10"/>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="323" y="55"/>
<text x="337" y="71">
&gt;</text>
</g>
<path d=" M 63 66 h 10"/>
<path d=" M 125 66 h 10"/>
<path d=" M 313 66 h 10"/>
</g>
<path d=" M 361 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 351 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 446px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-QualifiedPathInType"><svg class="railroad" viewBox="0 0 446 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-QualifiedPathInType">
<text class="comment" x="81" y="25">
QualifiedPathInType</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-QualifiedPathType">
<g class="nonterminal">
<rect height="22" width="156" x="35" y="42"/>
<text x="113" y="58">
QualifiedPathType</text>
</g>
</a>
<g class="repeat">
<path d=" M 201 53 h 12 m 186 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -186 m 96 0 l 5 -5 m 0 10 l -5 -5 m -96 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="213" y="42"/>
<text x="231" y="58">
::</text>
</g>
<a class="link" xlink:href="paths.md#railroad-TypePathSegment">
<g class="nonterminal">
<rect height="22" width="140" x="259" y="42"/>
<text x="329" y="58">
TypePathSegment</text>
</g>
</a>
<path d=" M 249 53 h 10"/>
</g>
</g>
<path d=" M 191 53 h 10"/>
</g>
<path d=" M 421 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 411 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-paths.qualified.intro"><a class="rule-link" href="#r-paths.qualified.intro" title="paths.qualified.intro"><span>[paths<wbr>.qualified<wbr>.intro]</span></a>
</div>

完全限定路径可用于消除[trait 实现](items/implementations.md#trait-implementations)中路径的歧义，并用于指定[规范路径](#canonical-paths)。当用于类型说明时，它支持使用下面指定的类型语法。

```rust
struct S;
impl S {
    fn f() { println!("S"); }
}
trait T1 {
    fn f() { println!("T1 f"); }
}
impl T1 for S {}
trait T2 {
    fn f() { println!("T2 f"); }
}
impl T2 for S {}
S::f();  // Calls the inherent impl.
<S as T1>::f();  // Calls the T1 trait function.
<S as T2>::f();  // Calls the T2 trait function.
```

<div class="rule" id="r-paths.type"><a class="rule-link" href="#r-paths.type" title="paths.type"><span>[paths<wbr>.type]</span></a>
</div>

### 类型中的路径

<div class="rule" id="r-paths.type.syntax"><a class="rule-link" href="#r-paths.type.syntax" title="paths.type.syntax"><span>[paths<wbr>.type<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-TypePath" onclick="show_railroad()">[TypePath](paths.md#railroad-TypePath)</span> → <span class="grammar-literal">::</span><sup>?</sup> <span class="grammar-text">[TypePathSegment](paths.md#grammar-TypePathSegment)</span> ( <span class="grammar-literal">::</span> <span class="grammar-text">[TypePathSegment](paths.md#grammar-TypePathSegment)</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-TypePathSegment" onclick="show_railroad()">[TypePathSegment](paths.md#railroad-TypePathSegment)</span> → <span class="grammar-text">[PathIdentSegment](paths.md#grammar-PathIdentSegment)</span> ( <span class="grammar-literal">::</span><sup>?</sup> <span class="grammar-text">[GenericArgs](paths.md#grammar-GenericArgs)</span> )<sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 572px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TypePath"><svg class="railroad" viewBox="0 0 572 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-TypePath">
<text class="comment" x="43" y="25">
TypePath</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 36 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="55"/>
<text x="77" y="71">
::</text>
</g>
</g>
<a class="link" xlink:href="paths.md#railroad-TypePathSegment">
<g class="nonterminal">
<rect height="22" width="140" x="129" y="55"/>
<text x="199" y="71">
TypePathSegment</text>
</g>
</a>
<g class="optional">
<path d=" M 279 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 210 m -102 0 l -5 -5 m 0 10 l 5 -5 m 102 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 303 66 h 12 m 186 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -186 m 96 0 l 5 -5 m 0 10 l -5 -5 m -96 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="315" y="55"/>
<text x="333" y="71">
::</text>
</g>
<a class="link" xlink:href="paths.md#railroad-TypePathSegment">
<g class="nonterminal">
<rect height="22" width="140" x="361" y="55"/>
<text x="431" y="71">
TypePathSegment</text>
</g>
</a>
<path d=" M 351 66 h 10"/>
</g>
</g>
</g>
<path d=" M 119 66 h 10"/>
<path d=" M 269 66 h 10"/>
</g>
<path d=" M 547 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 537 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 478px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TypePathSegment"><svg class="railroad" viewBox="0 0 478 99" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="paths.md#grammar-TypePathSegment">
<text class="comment" x="67" y="25">
TypePathSegment</text>
</a>
<g class="sequence">
<path d=" M 10 78 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-PathIdentSegment">
<g class="nonterminal">
<rect height="22" width="148" x="35" y="67"/>
<text x="109" y="83">
PathIdentSegment</text>
</g>
</a>
<g class="optional">
<path d=" M 193 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 202 m -98 0 l -5 -5 m 0 10 l 5 -5 m 98 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="optional">
<path d=" M 217 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 36 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="241" y="67"/>
<text x="259" y="83">
::</text>
</g>
</g>
<a class="link" xlink:href="paths.md#railroad-GenericArgs">
<g class="nonterminal">
<rect height="22" width="108" x="311" y="67"/>
<text x="365" y="83">
GenericArgs</text>
</g>
</a>
<path d=" M 301 78 h 10"/>
</g>
</g>
<path d=" M 183 78 h 10"/>
</g>
<path d=" M 453 78 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 78 h 10"/>
<path d=" M 443 78 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-paths.type.intro"><a class="rule-link" href="#r-paths.type.intro" title="paths.type.intro"><span>[paths<wbr>.type<wbr>.intro]</span></a>
</div>

类型路径用于类型定义、trait 边界和限定路径。

<div class="rule" id="r-paths.type.turbofish"><a class="rule-link" href="#r-paths.type.turbofish" title="paths.type.turbofish"><span>[paths<wbr>.type<wbr>.turbofish]</span></a>
</div>

虽然允许在泛型实参前使用 `::` token，但这不是必需的，因为不存在像 [PathInExpression](paths.md#grammar-PathInExpression) 中那样的歧义。

```rust
# mod ops {
#     pub struct Range<T> {f1: T}
#     pub trait Index<T> {}
#     pub struct Example<'a> {f1: &'a i32}
# }
# struct S;
impl ops::Index<ops::Range<usize>> for S { /*...*/ }
fn i<'a>() -> impl Iterator<Item = ops::Example<'a>> {
    // ...
#    const EXAMPLE: Vec<ops::Example<'static>> = Vec::new();
#    EXAMPLE.into_iter()
}
type G = std::boxed::Box<dyn std::ops::FnOnce(isize) -> isize>;
```

<div class="rule" id="r-paths.qualifiers"><a class="rule-link" href="#r-paths.qualifiers" title="paths.qualifiers"><span>[paths<wbr>.qualifiers]</span></a>
</div>

## 路径限定符

路径可以用各种前导限定符表示，以改变其被解析的含义。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [`use` 声明](items/use-declarations.md) 对 `self`、`super`、`crate` 和 `$crate` 有额外的行为和限制。

</div>

<div class="rule" id="r-paths.qualifiers.global-root"><a class="rule-link" href="#r-paths.qualifiers.global-root" title="paths.qualifiers.global-root"><span>[paths<wbr>.qualifiers<wbr>.global-root]</span></a>
</div>

### `::`

<div class="rule" id="r-paths.qualifiers.global-root.intro"><a class="rule-link" href="#r-paths.qualifiers.global-root.intro" title="paths.qualifiers.global-root.intro"><span>[paths<wbr>.qualifiers<wbr>.global-root<wbr>.intro]</span></a>
</div>

以 `::` 开头的路径被视为_全局路径\_，其中路径段开始解析的位置会因 edition 而异。路径中的每个标识符都必须解析为一个项。

<div class="rule" id="r-paths.qualifiers.global-root.edition2018"><a class="rule-link" href="#r-paths.qualifiers.global-root.edition2018" title="paths.qualifiers.global-root.edition2018"><span>[paths<wbr>.qualifiers<wbr>.global-root<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2015 edition 中，标识符从“crate 根”（2018 edition 中为 `crate::`）解析；crate 根包含各种不同项，包括外部 crate、`std` 或 `core` 等默认 crate，以及 crate 顶层中的项（包括 `use` 导入）。
 > 
 > 从 2018 edition 开始，以 `::` 开头的路径会从 [extern prelude](names/preludes.md#extern-prelude) 中的 crate 解析。也就是说，它们后面必须跟随一个 crate 的名称。

</div>

```rust
pub fn foo() {
    // In the 2018 edition, this accesses `std` via the extern prelude.
    // In the 2015 edition, this accesses `std` via the crate root.
    let now = ::std::time::Instant::now();
    println!("{:?}", now);
}
```

```rust,edition2015
// 2015 Edition
mod a {
    pub fn foo() {}
}
mod b {
    pub fn foo() {
        ::a::foo(); // call `a`'s foo function
        // In Rust 2018, `::a` would be interpreted as the crate `a`.
    }
}
# fn main() {}
```

<div class="rule" id="r-paths.qualifiers.mod-self"><a class="rule-link" href="#r-paths.qualifiers.mod-self" title="paths.qualifiers.mod-self"><span>[paths<wbr>.qualifiers<wbr>.mod-self]</span></a>
</div>

### `self`

<div class="rule" id="r-paths.qualifiers.mod-self.intro"><a class="rule-link" href="#r-paths.qualifiers.mod-self.intro" title="paths.qualifiers.mod-self.intro"><span>[paths<wbr>.qualifiers<wbr>.mod-self<wbr>.intro]</span></a>
</div>

`self` 会相对于当前模块解析路径。

<div class="rule" id="r-paths.qualifiers.mod-self.restriction"><a class="rule-link" href="#r-paths.qualifiers.mod-self.restriction" title="paths.qualifiers.mod-self.restriction"><span>[paths<wbr>.qualifiers<wbr>.mod-self<wbr>.restriction]</span></a>
</div>

`self` 只能作为路径的第一段（前面没有 `::`）使用，或者作为最后一段（前面有 `::`）使用。

<div class="rule" id="r-paths.qualifiers.mod-self.trailing"><a class="rule-link" href="#r-paths.qualifiers.mod-self.trailing" title="paths.qualifiers.mod-self.trailing"><span>[paths<wbr>.qualifiers<wbr>.mod-self<wbr>.trailing]</span></a>
</div>

当 `self` 作为路径的最后一段出现时，它指代由前一段命名的实体。前面的路径必须解析为[模块](items/modules.md)、[枚举](items/enumerations.md)或 [trait](items/traits.md)。

```rust
mod m {
    pub enum E { V1 }
    pub trait Tr {}
    pub(in crate::m::self) fn g() {} // OK: Modules can be parents of `self`.
}
type Ty = m::E::self; // OK: Enumerations can be parents of `self`.
fn f<T: m::Tr::self>() {} // OK: Traits can be parents of `self`.
# fn main() { let _: Ty = m::E::V1; }
```

```rust,compile_fail,E0223
struct S;
type Ty = S::self; // ERROR: Structs cannot be parents of `self`.
# fn main() {}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 有关 `use` 声明中 `self` 的额外规则，参见 [items.use.self](items/use-declarations.md#r-items.use.self)。

</div>

<div class="rule" id="r-paths.qualifiers.self-pat"><a class="rule-link" href="#r-paths.qualifiers.self-pat" title="paths.qualifiers.self-pat"><span>[paths<wbr>.qualifiers<wbr>.self-pat]</span></a>
</div>

在方法体中，由单个 `self` 段组成的路径会解析为该方法的 self 参数。

```rust
fn foo() {}
fn bar() {
    self::foo();
}
struct S(bool);
impl S {
  fn baz(self) {
        self.0;
    }
}
# fn main() {}
```

<div class="rule" id="r-paths.qualifiers.type-self"><a class="rule-link" href="#r-paths.qualifiers.type-self" title="paths.qualifiers.type-self"><span>[paths<wbr>.qualifiers<wbr>.type-self]</span></a>
</div>

### `Self`

<div class="rule" id="r-paths.qualifiers.type-self.intro"><a class="rule-link" href="#r-paths.qualifiers.type-self.intro" title="paths.qualifiers.type-self.intro"><span>[paths<wbr>.qualifiers<wbr>.type-self<wbr>.intro]</span></a>
</div>

首字母大写的 `Self` 用于指代当前正在实现或定义的类型。它可以在以下情况下使用：

<div class="rule" id="r-paths.qualifiers.type-self.trait"><a class="rule-link" href="#r-paths.qualifiers.type-self.trait" title="paths.qualifiers.type-self.trait"><span>[paths<wbr>.qualifiers<wbr>.type-self<wbr>.trait]</span></a>
</div>

- 在 [trait](items/traits.md) 定义中，它指代实现该 trait 的类型。

<div class="rule" id="r-paths.qualifiers.type-self.impl"><a class="rule-link" href="#r-paths.qualifiers.type-self.impl" title="paths.qualifiers.type-self.impl"><span>[paths<wbr>.qualifiers<wbr>.type-self<wbr>.impl]</span></a>
</div>

- 在[实现](items/implementations.md)中，它指代正在实现的类型。当实现元组[结构体](items/structs.md)或单元[结构体](items/structs.md)时，它还指代[值命名空间](names/namespaces.md)中的构造器。

<div class="rule" id="r-paths.qualifiers.type-self.type"><a class="rule-link" href="#r-paths.qualifiers.type-self.type" title="paths.qualifiers.type-self.type"><span>[paths<wbr>.qualifiers<wbr>.type-self<wbr>.type]</span></a>
</div>

- 在[结构体](items/structs.md)、[枚举](items/enumerations.md)或[联合体](items/unions.md)的定义中，它指代正在定义的类型。该定义不允许无限递归（必须有一层间接性）。

<div class="rule" id="r-paths.qualifiers.type-self.scope"><a class="rule-link" href="#r-paths.qualifiers.type-self.scope" title="paths.qualifiers.type-self.scope"><span>[paths<wbr>.qualifiers<wbr>.type-self<wbr>.scope]</span></a>
</div>

`Self` 的作用域行为类似于泛型参数；更多细节见 [`Self` 作用域](names/scopes.md#self-scope)章节。

<div class="rule" id="r-paths.qualifiers.type-self.allowed-positions"><a class="rule-link" href="#r-paths.qualifiers.type-self.allowed-positions" title="paths.qualifiers.type-self.allowed-positions"><span>[paths<wbr>.qualifiers<wbr>.type-self<wbr>.allowed-positions]</span></a>
</div>

`Self` 只能作为第一段使用，前面不能有 `::`。

<div class="rule" id="r-paths.qualifiers.type-self.no-generics"><a class="rule-link" href="#r-paths.qualifiers.type-self.no-generics" title="paths.qualifiers.type-self.no-generics"><span>[paths<wbr>.qualifiers<wbr>.type-self<wbr>.no-generics]</span></a>
</div>

`Self` 路径不能包含泛型实参（如 `Self::<i32>`）。

```rust
trait T {
    type Item;
    const C: i32;
    // `Self` will be whatever type that implements `T`.
    fn new() -> Self;
    // `Self::Item` will be the type alias in the implementation.
    fn f(&self) -> Self::Item;
}
struct S;
impl T for S {
    type Item = i32;
    const C: i32 = 9;
    fn new() -> Self {           // `Self` is the type `S`.
        S
    }
    fn f(&self) -> Self::Item {  // `Self::Item` is the type `i32`.
        Self::C                  // `Self::C` is the constant value `9`.
    }
}

// `Self` is in scope within the generics of a trait definition,
// to refer to the type being defined.
trait Add<Rhs = Self> {
    type Output;
    // `Self` can also reference associated items of the
    // type being implemented.
    fn add(self, rhs: Rhs) -> Self::Output;
}

struct NonEmptyList<T> {
    head: T,
    // A struct can reference itself (as long as it is not
    // infinitely recursive).
    tail: Option<Box<Self>>,
}
```

<div class="rule" id="r-paths.qualifiers.super"><a class="rule-link" href="#r-paths.qualifiers.super" title="paths.qualifiers.super"><span>[paths<wbr>.qualifiers<wbr>.super]</span></a>
</div>

### `super`

<div class="rule" id="r-paths.qualifiers.super.intro"><a class="rule-link" href="#r-paths.qualifiers.super.intro" title="paths.qualifiers.super.intro"><span>[paths<wbr>.qualifiers<wbr>.super<wbr>.intro]</span></a>
</div>

路径中的 `super` 解析为父模块。

<div class="rule" id="r-paths.qualifiers.super.allowed-positions"><a class="rule-link" href="#r-paths.qualifiers.super.allowed-positions" title="paths.qualifiers.super.allowed-positions"><span>[paths<wbr>.qualifiers<wbr>.super<wbr>.allowed-positions]</span></a>
</div>

它只能用于路径的前导段，可能跟在初始的 `self` 段之后。

```rust
mod a {
    pub fn foo() {}
}
mod b {
    pub fn foo() {
        super::a::foo(); // call a's foo function
    }
}
# fn main() {}
```

<div class="rule" id="r-paths.qualifiers.super.repetition"><a class="rule-link" href="#r-paths.qualifiers.super.repetition" title="paths.qualifiers.super.repetition"><span>[paths<wbr>.qualifiers<wbr>.super<wbr>.repetition]</span></a>
</div>

在第一个 `super` 或 `self` 之后，可以重复使用 `super` 多次以指代祖先模块。

```rust
mod a {
    fn foo() {}

    mod b {
        mod c {
            fn foo() {
                super::super::foo(); // call a's foo function
                self::super::super::foo(); // call a's foo function
            }
        }
    }
}
# fn main() {}
```

<div class="rule" id="r-paths.qualifiers.crate"><a class="rule-link" href="#r-paths.qualifiers.crate" title="paths.qualifiers.crate"><span>[paths<wbr>.qualifiers<wbr>.crate]</span></a>
</div>

### `crate`

<div class="rule" id="r-paths.qualifiers.crate.intro"><a class="rule-link" href="#r-paths.qualifiers.crate.intro" title="paths.qualifiers.crate.intro"><span>[paths<wbr>.qualifiers<wbr>.crate<wbr>.intro]</span></a>
</div>

`crate` 会相对于当前 crate 解析路径。

<div class="rule" id="r-paths.qualifiers.crate.allowed-positions"><a class="rule-link" href="#r-paths.qualifiers.crate.allowed-positions" title="paths.qualifiers.crate.allowed-positions"><span>[paths<wbr>.qualifiers<wbr>.crate<wbr>.allowed-positions]</span></a>
</div>

`crate` 只能作为第一段使用，前面不能有 `::`。

```rust
fn foo() {}
mod a {
    fn bar() {
        crate::foo();
    }
}
# fn main() {}
```

<div class="rule" id="r-paths.qualifiers.macro-crate"><a class="rule-link" href="#r-paths.qualifiers.macro-crate" title="paths.qualifiers.macro-crate"><span>[paths<wbr>.qualifiers<wbr>.macro-crate]</span></a>
</div>

### `$crate`

<div class="rule" id="r-paths.qualifiers.macro-crate.allowed-positions"><a class="rule-link" href="#r-paths.qualifiers.macro-crate.allowed-positions" title="paths.qualifiers.macro-crate.allowed-positions"><span>[paths<wbr>.qualifiers<wbr>.macro-crate<wbr>.allowed-positions]</span></a>
</div>

[`$crate`](macros-by-example.md#r-macro.decl.hygiene.crate) 只在[宏转录器](macros-by-example.md)中使用，并且只能作为第一段使用，前面不能有 `::`。

<div class="rule" id="r-paths.qualifiers.macro-crate.hygiene"><a class="rule-link" href="#r-paths.qualifiers.macro-crate.hygiene" title="paths.qualifiers.macro-crate.hygiene"><span>[paths<wbr>.qualifiers<wbr>.macro-crate<wbr>.hygiene]</span></a>
</div>

[`$crate`](macros-by-example.md#r-macro.decl.hygiene.crate) 会展开为一条路径，用于访问定义该宏的 crate 顶层中的项，而不管该宏是在哪个 crate 中被调用的。

```rust
pub fn increment(x: u32) -> u32 {
    x + 1
}

#[macro_export]
macro_rules! inc {
    ($x:expr) => ( $crate::increment($x) )
}
# fn main() { }
```

<div class="rule" id="r-paths.canonical"><a class="rule-link" href="#r-paths.canonical" title="paths.canonical"><span>[paths<wbr>.canonical]</span></a>
</div>

## 规范路径

<div class="rule" id="r-paths.canonical.intro"><a class="rule-link" href="#r-paths.canonical.intro" title="paths.canonical.intro"><span>[paths<wbr>.canonical<wbr>.intro]</span></a>
</div>

模块或实现中定义的每个项都有一条_规范路径\_，对应它在其 crate 内的定义位置。

<div class="rule" id="r-paths.canonical.alias"><a class="rule-link" href="#r-paths.canonical.alias" title="paths.canonical.alias"><span>[paths<wbr>.canonical<wbr>.alias]</span></a>
</div>

指向这些项的所有其他路径都是别名。

<div class="rule" id="r-paths.canonical.def"><a class="rule-link" href="#r-paths.canonical.def" title="paths.canonical.def"><span>[paths<wbr>.canonical<wbr>.def]</span></a>
</div>

规范路径定义为：由_路径前缀_附加该项自身定义的路径段组成。

<div class="rule" id="r-paths.canonical.non-canonical"><a class="rule-link" href="#r-paths.canonical.non-canonical" title="paths.canonical.non-canonical"><span>[paths<wbr>.canonical<wbr>.non-canonical]</span></a>
</div>

[实现](items/implementations.md)和 [use 声明](items/use-declarations.md)没有规范路径，尽管实现所定义的项确实有规范路径。在块表达式中定义的项没有规范路径。在没有规范路径的模块中定义的项也没有规范路径。在实现中定义的关联项，如果该实现引用了一个没有规范路径的项，例如作为被实现类型、被实现的 trait、类型参数或类型参数上的边界，则这些关联项没有规范路径。

<div class="rule" id="r-paths.canonical.module-prefix"><a class="rule-link" href="#r-paths.canonical.module-prefix" title="paths.canonical.module-prefix"><span>[paths<wbr>.canonical<wbr>.module-prefix]</span></a>
</div>

模块的路径前缀是指向该模块的规范路径。

<div class="rule" id="r-paths.canonical.bare-impl-prefix"><a class="rule-link" href="#r-paths.canonical.bare-impl-prefix" title="paths.canonical.bare-impl-prefix"><span>[paths<wbr>.canonical<wbr>.bare-impl-prefix]</span></a>
</div>

对于不带 trait 的实现，它是被实现项的规范路径，并用 <span class="parenthetical">尖括号（`<>`）</span> 括起来。

<div class="rule" id="r-paths.canonical.trait-impl-prefix"><a class="rule-link" href="#r-paths.canonical.trait-impl-prefix" title="paths.canonical.trait-impl-prefix"><span>[paths<wbr>.canonical<wbr>.trait-impl-prefix]</span></a>
</div>

对于 [trait 实现](items/implementations.md#trait-implementations)，它是被实现项的规范路径，后接 `as`，再后接指向该 trait 的规范路径，整体用 <span class="parenthetical">尖括号（`<>`）</span> 括起来。

<div class="rule" id="r-paths.canonical.local-canonical-path"><a class="rule-link" href="#r-paths.canonical.local-canonical-path" title="paths.canonical.local-canonical-path"><span>[paths<wbr>.canonical<wbr>.local-canonical-path]</span></a>
</div>

规范路径只在给定 crate 内有意义。跨 crate 不存在全局命名空间；项的规范路径仅在该 crate 内标识该项。

```rust
// Comments show the canonical path of the item.

mod a { // crate::a
    pub struct Struct; // crate::a::Struct

    pub trait Trait { // crate::a::Trait
        fn f(&self); // crate::a::Trait::f
    }

    impl Trait for Struct {
        fn f(&self) {} // <crate::a::Struct as crate::a::Trait>::f
    }

    impl Struct {
        fn g(&self) {} // <crate::a::Struct>::g
    }
}

mod without { // crate::without
    fn canonicals() { // crate::without::canonicals
        struct OtherStruct; // None

        trait OtherTrait { // None
            fn g(&self); // None
        }

        impl OtherTrait for OtherStruct {
            fn g(&self) {} // None
        }

        impl OtherTrait for crate::a::Struct {
            fn g(&self) {} // None
        }

        impl crate::a::Trait for OtherStruct {
            fn f(&self) {} // None
        }
    }
}

# fn main() {}
```