<div class="rule" id="r-bound"><a class="rule-link" href="#r-bound" title="bound"><span>[bound]</span></a>
</div>

# Trait 和生命周期约束

<div class="rule" id="r-bound.syntax"><a class="rule-link" href="#r-bound.syntax" title="bound.syntax"><span>[bound<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Bounds" onclick="show_railroad()">[Bounds](trait-bounds.md#railroad-Bounds)</span> → <span class="grammar-text">[Bound](trait-bounds.md#grammar-Bound)</span> ( <span class="grammar-literal">+</span> <span class="grammar-text">[Bound](trait-bounds.md#grammar-Bound)</span> )<sup>\*</sup> <span class="grammar-literal">+</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-Bound" onclick="show_railroad()">[Bound](trait-bounds.md#railroad-Bound)</span> → <span class="grammar-text">[Lifetime](trait-bounds.md#grammar-Lifetime)</span> | <span class="grammar-text">[TraitBound](trait-bounds.md#grammar-TraitBound)</span> | <span class="grammar-text">[UseBound](trait-bounds.md#grammar-UseBound)</span>

<span class="grammar-text grammar-production" id="grammar-TraitBound" onclick="show_railroad()">[TraitBound](trait-bounds.md#railroad-TraitBound)</span> →  
      ( <span class="grammar-literal">?</span> | <span class="grammar-text">[ForLifetimes](trait-bounds.md#grammar-ForLifetimes)</span> )<sup>?</sup> <span class="grammar-text">[TypePath](paths.md#grammar-TypePath)</span>  
    \| <span class="grammar-literal">(</span> ( <span class="grammar-literal">?</span> | <span class="grammar-text">[ForLifetimes](trait-bounds.md#grammar-ForLifetimes)</span> )<sup>?</sup> <span class="grammar-text">[TypePath](paths.md#grammar-TypePath)</span> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-LifetimeBounds" onclick="show_railroad()">[LifetimeBounds](trait-bounds.md#railroad-LifetimeBounds)</span> → ( <span class="grammar-text">[Lifetime](trait-bounds.md#grammar-Lifetime)</span> <span class="grammar-literal">+</span> )<sup>\*</sup> <span class="grammar-text">[Lifetime](trait-bounds.md#grammar-Lifetime)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-Lifetime" onclick="show_railroad()">[Lifetime](trait-bounds.md#railroad-Lifetime)</span> →  
      <span class="grammar-text">[LIFETIME_OR_LABEL](tokens.md#grammar-LIFETIME_OR_LABEL)</span>  
    \| <span class="grammar-literal">'static</span>  
    \| <span class="grammar-literal">'\_</span>

<span class="grammar-text grammar-production" id="grammar-UseBound" onclick="show_railroad()">[UseBound](trait-bounds.md#railroad-UseBound)</span> → <span class="grammar-literal">use</span> <span class="grammar-text">[UseBoundGenericArgs](trait-bounds.md#grammar-UseBoundGenericArgs)</span>

<span class="grammar-text grammar-production" id="grammar-UseBoundGenericArgs" onclick="show_railroad()">[UseBoundGenericArgs](trait-bounds.md#railroad-UseBoundGenericArgs)</span> →  
      <span class="grammar-literal">\<</span> <span class="grammar-literal">\></span>  
    \| <span class="grammar-literal">\<</span> ( <span class="grammar-text">[UseBoundGenericArg](trait-bounds.md#grammar-UseBoundGenericArg)</span> <span class="grammar-literal">,</span> )<sup>\*</sup> <span class="grammar-text">[UseBoundGenericArg](trait-bounds.md#grammar-UseBoundGenericArg)</span> <span class="grammar-literal">,</span><sup>?</sup> <span class="grammar-literal">\></span>

<span class="grammar-text grammar-production" id="grammar-UseBoundGenericArg" onclick="show_railroad()">[UseBoundGenericArg](trait-bounds.md#railroad-UseBoundGenericArg)</span> →  
      <span class="grammar-text">[Lifetime](trait-bounds.md#grammar-Lifetime)</span>  
    \| <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span>  
    \| <span class="grammar-literal">Self</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 396px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Bounds"><svg class="railroad" viewBox="0 0 396 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="trait-bounds.md#grammar-Bounds">
<text class="comment" x="36" y="25">
Bounds</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="trait-bounds.md#railroad-Bound">
<g class="nonterminal">
<rect height="22" width="60" x="35" y="55"/>
<text x="65" y="71">
Bound</text>
</g>
</a>
<g class="optional">
<path d=" M 105 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 122 m -58 0 l -5 -5 m 0 10 l 5 -5 m 58 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 129 66 h 12 m 98 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -98 m 52 0 l 5 -5 m 0 10 l -5 -5 m -52 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="141" y="55"/>
<text x="155" y="71">
+</text>
</g>
<a class="link" xlink:href="trait-bounds.md#railroad-Bound">
<g class="nonterminal">
<rect height="22" width="60" x="179" y="55"/>
<text x="209" y="71">
Bound</text>
</g>
</a>
<path d=" M 169 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 285 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="309" y="55"/>
<text x="323" y="71">
+</text>
</g>
</g>
<path d=" M 95 66 h 10"/>
<path d=" M 275 66 h 10"/>
</g>
<path d=" M 371 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 361 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 218px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Bound"><svg class="railroad" viewBox="0 0 218 140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="trait-bounds.md#grammar-Bound">
<text class="comment" x="32" y="25">
Bound</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 84 0 h 40"/>
<a class="link" xlink:href="trait-bounds.md#railroad-Lifetime">
<g class="nonterminal">
<rect height="22" width="84" x="59" y="42"/>
<text x="101" y="58">
Lifetime</text>
</g>
</a>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 124 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 124 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 100 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="trait-bounds.md#railroad-TraitBound">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="75"/>
<text x="109" y="91">
TraitBound</text>
</g>
</a>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 84 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="trait-bounds.md#railroad-UseBound">
<g class="nonterminal">
<rect height="22" width="84" x="59" y="108"/>
<text x="101" y="124">
UseBound</text>
</g>
</a>
</g>
<path d=" M 193 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 183 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 500px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TraitBound"><svg class="railroad" viewBox="0 0 500 198" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="trait-bounds.md#grammar-TraitBound">
<text class="comment" x="50" y="25">
TraitBound</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 66 h 24 m 306 0 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 59 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 164 m -79 0 l -5 -5 m 0 10 l 5 -5 m 79 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="choice">
<path d=" M 83 66 h 24 m 28 0 h 112 m -53 0 l -5 -5 m 0 10 l 5 -5 m 53 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="107" y="55"/>
<text x="121" y="71">
?</text>
</g>
<path d=" M 83 66 a 12 12 0 0 1 12 12 v 9 m 140 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 95 87 v 0 a 12 12 0 0 0 12 12 m 116 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="trait-bounds.md#railroad-ForLifetimes">
<g class="nonterminal">
<rect height="22" width="116" x="107" y="88"/>
<text x="165" y="104">
ForLifetimes</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="paths.md#railroad-TypePath">
<g class="nonterminal">
<rect height="22" width="84" x="281" y="55"/>
<text x="323" y="71">
TypePath</text>
</g>
</a>
<path d=" M 271 66 h 10"/>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 42 m 406 0 v -42 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 120 v 12 a 12 12 0 0 0 12 12 m 382 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="133"/>
<text x="73" y="149">
(</text>
</g>
<g class="optional">
<path d=" M 97 144 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 164 m -79 0 l -5 -5 m 0 10 l 5 -5 m 79 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="choice">
<path d=" M 121 144 h 24 m 28 0 h 112 m -53 0 l -5 -5 m 0 10 l 5 -5 m 53 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="145" y="133"/>
<text x="159" y="149">
?</text>
</g>
<path d=" M 121 144 a 12 12 0 0 1 12 12 v 9 m 140 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 133 165 v 0 a 12 12 0 0 0 12 12 m 116 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="trait-bounds.md#railroad-ForLifetimes">
<g class="nonterminal">
<rect height="22" width="116" x="145" y="166"/>
<text x="203" y="182">
ForLifetimes</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="paths.md#railroad-TypePath">
<g class="nonterminal">
<rect height="22" width="84" x="319" y="133"/>
<text x="361" y="149">
TypePath</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="413" y="133"/>
<text x="427" y="149">
)</text>
</g>
<path d=" M 87 144 h 10"/>
<path d=" M 309 144 h 10"/>
<path d=" M 403 144 h 10"/>
</g>
</g>
<path d=" M 475 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 465 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 406px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LifetimeBounds"><svg class="railroad" viewBox="0 0 406 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="trait-bounds.md#grammar-LifetimeBounds">
<text class="comment" x="64" y="25">
LifetimeBounds</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 146 m -70 0 l -5 -5 m 0 10 l 5 -5 m 70 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 66 h 12 m 122 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -122 m 64 0 l 5 -5 m 0 10 l -5 -5 m -64 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<a class="link" xlink:href="trait-bounds.md#railroad-Lifetime">
<g class="nonterminal">
<rect height="22" width="84" x="71" y="55"/>
<text x="113" y="71">
Lifetime</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="165" y="55"/>
<text x="179" y="71">
+</text>
</g>
<path d=" M 155 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 239 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 84 m -39 0 l -5 -5 m 0 10 l 5 -5 m 39 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="trait-bounds.md#railroad-Lifetime">
<g class="nonterminal">
<rect height="22" width="84" x="263" y="55"/>
<text x="305" y="71">
Lifetime</text>
</g>
</a>
</g>
<path d=" M 229 66 h 10"/>
</g>
<path d=" M 381 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 371 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 274px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Lifetime"><svg class="railroad" viewBox="0 0 274 140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="trait-bounds.md#grammar-Lifetime">
<text class="comment" x="43" y="25">
Lifetime</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 156 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-LIFETIME_OR_LABEL">
<g class="nonterminal">
<rect height="22" width="156" x="59" y="42"/>
<text x="137" y="58">
LIFETIME_OR_LABEL</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 180 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 180 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 76 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="76" x="59" y="75"/>
<text x="97" y="91">
&#x27;static</text>
</g>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 36 0 h 120 m -57 0 l -5 -5 m 0 10 l 5 -5 m 57 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="108"/>
<text x="77" y="124">
&#x27;_</text>
</g>
</g>
<path d=" M 249 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 239 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 296px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-UseBound"><svg class="railroad" viewBox="0 0 296 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="trait-bounds.md#grammar-UseBound">
<text class="comment" x="43" y="25">
UseBound</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="42"/>
<text x="57" y="58">
use</text>
</g>
<a class="link" xlink:href="trait-bounds.md#railroad-UseBoundGenericArgs">
<g class="nonterminal">
<rect height="22" width="172" x="89" y="42"/>
<text x="175" y="58">
UseBoundGenericArgs</text>
</g>
</a>
<path d=" M 79 53 h 10"/>
</g>
<path d=" M 271 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 261 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 728px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-UseBoundGenericArgs"><svg class="railroad" viewBox="0 0 728 132" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="trait-bounds.md#grammar-UseBoundGenericArgs">
<text class="comment" x="81" y="25">
UseBoundGenericArgs</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 66 0 h 568 m -281 0 l -5 -5 m 0 10 l 5 -5 m 281 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="42"/>
<text x="73" y="58">
&lt;</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="97" y="42"/>
<text x="111" y="58">
&gt;</text>
</g>
<path d=" M 87 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 634 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 12 a 12 12 0 0 0 12 12 m 610 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="87"/>
<text x="73" y="103">
&lt;</text>
</g>
<g class="optional">
<path d=" M 97 98 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 226 m -110 0 l -5 -5 m 0 10 l 5 -5 m 110 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 121 98 h 12 m 202 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -202 m 104 0 l 5 -5 m 0 10 l -5 -5 m -104 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<a class="link" xlink:href="trait-bounds.md#railroad-UseBoundGenericArg">
<g class="nonterminal">
<rect height="22" width="164" x="133" y="87"/>
<text x="215" y="103">
UseBoundGenericArg</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="307" y="87"/>
<text x="321" y="103">
,</text>
</g>
<path d=" M 297 98 h 10"/>
</g>
</g>
</g>
<a class="link" xlink:href="trait-bounds.md#railroad-UseBoundGenericArg">
<g class="nonterminal">
<rect height="22" width="164" x="381" y="87"/>
<text x="463" y="103">
UseBoundGenericArg</text>
</g>
</a>
<g class="optional">
<path d=" M 555 98 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="579" y="87"/>
<text x="593" y="103">
,</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="641" y="87"/>
<text x="655" y="103">
&gt;</text>
</g>
<path d=" M 87 98 h 10"/>
<path d=" M 371 98 h 10"/>
<path d=" M 545 98 h 10"/>
<path d=" M 631 98 h 10"/>
</g>
</g>
<path d=" M 703 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 693 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 218px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-UseBoundGenericArg"><svg class="railroad" viewBox="0 0 218 140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="trait-bounds.md#grammar-UseBoundGenericArg">
<text class="comment" x="78" y="25">
UseBoundGenericArg</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 84 0 h 40"/>
<g class="sequence">
<a class="link" xlink:href="trait-bounds.md#railroad-Lifetime">
<g class="nonterminal">
<rect height="22" width="84" x="59" y="42"/>
<text x="101" y="58">
Lifetime</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 124 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 124 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 100 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="75"/>
<text x="109" y="91">
IDENTIFIER</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 52 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="108"/>
<text x="85" y="124">
Self</text>
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

<div class="rule" id="r-bound.intro"><a class="rule-link" href="#r-bound.intro" title="bound.intro"><span>[bound<wbr>.intro]</span></a>
</div>

[Trait](items/traits.md#trait-bounds) 约束和生命周期约束为[泛型项](items/generics.md)提供了一种方式，用于限制哪些类型和生命周期可用作其参数。约束可以在 [where 子句](items/generics.md#where-clauses)中的任何类型上给出。对于某些常见情况，也有较短的形式：

- 写在声明[泛型形参](items/generics.md)之后的约束：`fn f<A: Copy>() {}` 与 `fn f<A>() where A: Copy {}` 相同。
- 在 trait 声明中作为 [supertrait](items/traits.md#supertraits)：`trait Circle : Shape {}` 等价于 `trait Circle where Self : Shape {}`。
- 在 trait 声明中作为[关联类型](items/associated-items.md#associated-types)上的约束：`trait A { type B: Copy; }` 等价于 `trait A where Self::B: Copy { type B; }`。

<div class="rule" id="r-bound.satisfaction"><a class="rule-link" href="#r-bound.satisfaction" title="bound.satisfaction"><span>[bound<wbr>.satisfaction]</span></a>
</div>

使用某个项时，必须满足该项上的约束。在对泛型项进行类型检查和借用检查时，可以使用这些约束来判定某个类型实现了某个 trait。例如，给定 `Ty: Trait`

- 在泛型函数体中，可以在 `Ty` 值上调用来自 `Trait` 的方法。同样，也可以使用 `Trait` 上的关联常量。
- 可以使用来自 `Trait` 的关联类型。
- 带有 `T: Trait` 约束的泛型函数和类型可以在以 `Ty` 作为 `T` 的情况下使用。

```rust
# type Surface = i32;
trait Shape {
    fn draw(&self, surface: Surface);
    fn name() -> &'static str;
}

fn draw_twice<T: Shape>(surface: Surface, sh: T) {
    sh.draw(surface);           // 可以调用方法，因为 T: Shape
    sh.draw(surface);
}

fn copy_and_draw_twice<T: Copy>(surface: Surface, sh: T) where T: Shape {
    let shape_copy = sh;        // 不会移动 sh，因为 T: Copy
    draw_twice(surface, sh);    // 可以使用泛型函数，因为 T: Shape
}

struct Figure<S: Shape>(S, S);

fn name_figure<U: Shape>(
    figure: Figure<U>,          // 类型 Figure<U> 是良构的，因为 U: Shape
) {
    println!(
        "两个 {} 组成的 Figure",
        U::name(),              // 可以使用关联函数
    );
}
```

<div class="rule" id="r-bound.trivial"><a class="rule-link" href="#r-bound.trivial" title="bound.trivial"><span>[bound<wbr>.trivial]</span></a>
</div>

不使用该项的参数或[高阶生命周期](#higher-ranked-trait-bounds)的约束，会在定义该项时被检查。这样的约束若为假，则是错误。

<div class="rule" id="r-bound.special"><a class="rule-link" href="#r-bound.special" title="bound.special"><span>[bound<wbr>.special]</span></a>
</div>

对于某些泛型类型，在使用该项时也会检查 [`Copy`](../core/marker/trait.Copy.html)、[`Clone`](../core/clone/trait.Clone.html) 和 [`Sized`](../core/marker/trait.Sized.html) 约束，即使该使用没有提供具体类型。在可变引用、[trait 对象](types/trait-object.md)或[切片](types/slice.md)上以 `Copy` 或 `Clone` 作为约束是错误。在 trait 对象或切片上以 `Sized` 作为约束也是错误。

```rust,compile_fail
struct A<'a, T>
where
    i32: Default,           // 允许，但没有用处
    i32: Iterator,          // 错误：`i32` 不是迭代器
    &'a mut T: Copy,        // （使用时）错误：未满足 trait 约束
    [T]: Sized,             // （使用时）错误：无法在编译时知道大小
{
    f: &'a T,
}
struct UsesA<'a, T>(A<'a, T>);
```

<div class="rule" id="r-bound.trait-object"><a class="rule-link" href="#r-bound.trait-object" title="bound.trait-object"><span>[bound<wbr>.trait-object]</span></a>
</div>

Trait 约束和生命周期约束也用于命名 [trait 对象](types/trait-object.md)。

<div class="rule" id="r-bound.sized"><a class="rule-link" href="#r-bound.sized" title="bound.sized"><span>[bound<wbr>.sized]</span></a>
</div>

## `?Sized`

`?` 只用于放宽[类型形参](types/parameters.md)或[关联类型](items/associated-items.md#associated-types)的隐式 [`Sized`](../core/marker/trait.Sized.html) trait 约束。`?Sized` 不得用作其他类型的约束。

<div class="rule" id="r-bound.lifetime"><a class="rule-link" href="#r-bound.lifetime" title="bound.lifetime"><span>[bound<wbr>.lifetime]</span></a>
</div>

## 生命周期约束

<div class="rule" id="r-bound.lifetime.intro"><a class="rule-link" href="#r-bound.lifetime.intro" title="bound.lifetime.intro"><span>[bound<wbr>.lifetime<wbr>.intro]</span></a>
</div>

生命周期约束可以应用于类型，也可以应用于其他生命周期。

<div class="rule" id="r-bound.lifetime.outlive-lifetime"><a class="rule-link" href="#r-bound.lifetime.outlive-lifetime" title="bound.lifetime.outlive-lifetime"><span>[bound<wbr>.lifetime<wbr>.outlive-lifetime]</span></a>
</div>

约束 `'a: 'b` 通常读作 `'a` _outlives_ `'b`。`'a: 'b` 表示 `'a` 至少与 `'b` 一样长，因此只要 `&'b ()` 有效，引用 `&'a ()` 就有效。

```rust
fn f<'a, 'b>(x: &'a i32, mut y: &'b i32) where 'a: 'b {
    y = x;                      // &'a i32 是 &'b i32 的子类型，因为 'a: 'b
    let r: &'b &'a i32 = &&0;   // &'b &'a i32 是良构的，因为 'a: 'b
}
```

<div class="rule" id="r-bound.lifetime.outlive-type"><a class="rule-link" href="#r-bound.lifetime.outlive-type" title="bound.lifetime.outlive-type"><span>[bound<wbr>.lifetime<wbr>.outlive-type]</span></a>
</div>

`T: 'a` 表示 `T` 的所有生命周期参数都比 `'a` 活得更久。例如，如果 `'a` 是一个未受约束的生命周期参数，那么 `i32: 'static` 和 `&'static str: 'a` 得到满足，但 `Vec<&'a ()>: 'static` 不满足。

<div class="rule" id="r-bound.higher-ranked"><a class="rule-link" href="#r-bound.higher-ranked" title="bound.higher-ranked"><span>[bound<wbr>.higher-ranked]</span></a>
</div>

## 高阶 trait 约束

<div class="rule" id="r-bound.higher-ranked.syntax"><a class="rule-link" href="#r-bound.higher-ranked.syntax" title="bound.higher-ranked.syntax"><span>[bound<wbr>.higher-ranked<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ForLifetimes" onclick="show_railroad()">[ForLifetimes](trait-bounds.md#railroad-ForLifetimes)</span> → <span class="grammar-literal">for</span> <span class="grammar-text">[GenericParams](items/generics.md#grammar-GenericParams)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 248px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ForLifetimes"><svg class="railroad" viewBox="0 0 248 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="trait-bounds.md#grammar-ForLifetimes">
<text class="comment" x="57" y="25">
ForLifetimes</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="42"/>
<text x="57" y="58">
for</text>
</g>
<a class="link" xlink:href="items/generics.md#railroad-GenericParams">
<g class="nonterminal">
<rect height="22" width="124" x="89" y="42"/>
<text x="151" y="58">
GenericParams</text>
</g>
</a>
<path d=" M 79 53 h 10"/>
</g>
<path d=" M 223 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 213 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-bound.higher-ranked.intro"><a class="rule-link" href="#r-bound.higher-ranked.intro" title="bound.higher-ranked.intro"><span>[bound<wbr>.higher-ranked<wbr>.intro]</span></a>
</div>

Trait 约束可以在生命周期上是_高阶_的。这些约束指定了对_所有_生命周期都为真的约束。例如，像 `for<'a> &'a T: PartialEq<i32>` 这样的约束会要求有如下实现

```rust
# struct T;
impl<'a> PartialEq<i32> for &'a T {
    // ...
#    fn eq(&self, other: &i32) -> bool {true}
}
```

然后可用于将具有任意生命周期的 `&'a T` 与 `i32` 进行比较。

这里只能使用高阶约束，因为该引用的生命周期短于函数上任何可能的生命周期参数：

```rust
fn call_on_ref_zero<F>(f: F) where for<'a> F: Fn(&'a i32) {
    let zero = 0;
    f(&zero);
}
```

<div class="rule" id="r-bound.higher-ranked.trait"><a class="rule-link" href="#r-bound.higher-ranked.trait" title="bound.higher-ranked.trait"><span>[bound<wbr>.higher-ranked<wbr>.trait]</span></a>
</div>

高阶生命周期也可以正好指定在 trait 之前：唯一的区别是生命周期参数的[作用域](names/scopes.md#higher-ranked-trait-bound-scopes)，它只延伸到后续 trait 的末尾，而不是整个约束的末尾。此函数等价于上一个函数。

```rust
fn call_on_ref_zero<F>(f: F) where F: for<'a> Fn(&'a i32) {
    let zero = 0;
    f(&zero);
}
```

<div class="rule" id="r-bound.implied"><a class="rule-link" href="#r-bound.implied" title="bound.implied"><span>[bound<wbr>.implied]</span></a>
</div>

## 隐含约束

<div class="rule" id="r-bound.implied.intro"><a class="rule-link" href="#r-bound.implied.intro" title="bound.implied.intro"><span>[bound<wbr>.implied<wbr>.intro]</span></a>
</div>

类型成为良构类型所需的生命周期约束有时会被推断出来。

```rust
fn requires_t_outlives_a<'a, T>(x: &'a T) {}
```

为了使类型 `&'a T` 成为良构类型，类型参数 `T` 必须比 `'a` 活得更久。这会被推断出来，因为函数签名包含类型 `&'a T`，而该类型只有在 `T: 'a` 成立时才有效。

<div class="rule" id="r-bound.implied.context"><a class="rule-link" href="#r-bound.implied.context" title="bound.implied.context"><span>[bound<wbr>.implied<wbr>.context]</span></a>
</div>

隐含约束会为函数的所有参数和输出添加。在 `requires_t_outlives_a` 内部，即使没有显式指定这一点，也可以假定 `T: 'a` 成立：

```rust
fn requires_t_outlives_a_not_implied<'a, T: 'a>() {}

fn requires_t_outlives_a<'a, T>(x: &'a T) {
    // 这可以编译，因为 `T: 'a` 由
    // 引用类型 `&'a T` 隐含。
    requires_t_outlives_a_not_implied::<'a, T>();
}
```

```rust,compile_fail,E0309
# fn requires_t_outlives_a_not_implied<'a, T: 'a>() {}
fn not_implied<'a, T>() {
    // 这会出错，因为 `T: 'a` 并不由
    // 函数签名隐含。
    requires_t_outlives_a_not_implied::<'a, T>();
}
```

<div class="rule" id="r-bound.implied.trait"><a class="rule-link" href="#r-bound.implied.trait" title="bound.implied.trait"><span>[bound<wbr>.implied<wbr>.trait]</span></a>
</div>

只有生命周期约束会被隐含，trait 约束仍然必须显式添加。因此，下面的示例会导致错误：

```rust,compile_fail,E0277
use std::fmt::Debug;
struct IsDebug<T: Debug>(T);
// error[E0277]：`T` 未实现 `Debug`
fn doesnt_specify_t_debug<T>(x: IsDebug<T>) {}
```

<div class="rule" id="r-bound.implied.def"><a class="rule-link" href="#r-bound.implied.def" title="bound.implied.def"><span>[bound<wbr>.implied<wbr>.def]</span></a>
</div>

也会为类型定义以及任何类型的 impl 块推断生命周期约束：

```rust
struct Struct<'a, T> {
    // 这要求 `T: 'a` 才能成为良构类型，
    // 这一点由编译器推断。
    field: &'a T,
}

enum Enum<'a, T> {
    // 这要求 `T: 'a` 才能成为良构类型，
    // 这一点由编译器推断。
    //
    // 注意，即使只使用 `Enum::OtherVariant`，
    // 也要求 `T: 'a`。
    SomeVariant(&'a T),
    OtherVariant,
}

trait Trait<'a, T: 'a> {}

// 这会出错，因为 `T: 'a` 不由 impl 头部中的
// 任何类型隐含。
//     impl<'a, T> Trait<'a, T> for () {}

// 这可以编译，因为 `T: 'a` 由 self 类型 `&'a T` 隐含。
impl<'a, T> Trait<'a, T> for &'a T {}
```

<div class="rule" id="r-bound.use"><a class="rule-link" href="#r-bound.use" title="bound.use"><span>[bound<wbr>.use]</span></a>
</div>

## Use 约束

某些约束列表可以包含 `use<..>` 约束，用于控制哪些泛型参数会被 `impl Trait` [抽象返回类型](types/impl-trait.md#abstract-return-types)捕获。更多细节请参见[精确捕获](types/impl-trait.md#precise-capturing)。