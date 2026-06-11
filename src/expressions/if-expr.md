<div class="rule" id="r-expr.if"><a class="rule-link" href="#r-expr.if" title="expr.if"><span>[expr<wbr>.if]</span></a>
</div>

# `if` 表达式

<div class="rule" id="r-expr.if.syntax"><a class="rule-link" href="#r-expr.if.syntax" title="expr.if.syntax"><span>[expr<wbr>.if<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-IfExpression" onclick="show_railroad()">[IfExpression](if-expr.md#railroad-IfExpression)</span> →  
    <span class="grammar-literal">if</span> <span class="grammar-text">[Conditions](if-expr.md#grammar-Conditions)</span> <span class="grammar-text">[BlockExpressionNoInnerAttributes](block-expr.md#grammar-BlockExpressionNoInnerAttributes)</span>  
    ( <span class="grammar-literal">else</span> ( <span class="grammar-text">[BlockExpressionNoInnerAttributes](block-expr.md#grammar-BlockExpressionNoInnerAttributes)</span> | <span class="grammar-text">[IfExpression](if-expr.md#grammar-IfExpression)</span> ) )<sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-Conditions" onclick="show_railroad()">[Conditions](if-expr.md#railroad-Conditions)</span> →  
      <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span><sub class="grammar-text">除 [StructExpression](struct-expr.md#grammar-StructExpression)</sub>  
    \| <span class="grammar-text">[LetChain](if-expr.md#grammar-LetChain)</span>

<span class="grammar-text grammar-production" id="grammar-LetChain" onclick="show_railroad()">[LetChain](if-expr.md#railroad-LetChain)</span> → <span class="grammar-text">[LetChainCondition](if-expr.md#grammar-LetChainCondition)</span> ( <span class="grammar-literal">&&</span> <span class="grammar-text">[LetChainCondition](if-expr.md#grammar-LetChainCondition)</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-LetChainCondition" onclick="show_railroad()">[LetChainCondition](if-expr.md#railroad-LetChainCondition)</span> →  
      <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span><sub class="grammar-text">除 [ExcludedConditions](if-expr.md#grammar-ExcludedConditions)</sub>  
    \| <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-literal">let</span> <span class="grammar-text">[Pattern](../patterns.md#grammar-Pattern)</span> <span class="grammar-literal">=</span> <span class="grammar-text">[Scrutinee](match-expr.md#grammar-Scrutinee)</span><sub class="grammar-text">除 [ExcludedConditions](if-expr.md#grammar-ExcludedConditions)</sub>

<span class="grammar-text grammar-production" id="grammar-ExcludedConditions" onclick="show_railroad()">[ExcludedConditions](if-expr.md#railroad-ExcludedConditions)</span> →  
      <span class="grammar-text">[StructExpression](struct-expr.md#grammar-StructExpression)</span>  
    \| <span class="grammar-text">[LazyBooleanExpression](operator-expr.md#grammar-LazyBooleanExpression)</span>  
    \| <span class="grammar-text">[RangeExpr](range-expr.md#grammar-RangeExpr)</span>  
    \| <span class="grammar-text">[RangeFromExpr](range-expr.md#grammar-RangeFromExpr)</span>  
    \| <span class="grammar-text">[RangeInclusiveExpr](range-expr.md#grammar-RangeInclusiveExpr)</span>  
    \| <span class="grammar-text">[AssignmentExpression](operator-expr.md#grammar-AssignmentExpression)</span>  
    \| <span class="grammar-text">[CompoundAssignmentExpression](operator-expr.md#grammar-CompoundAssignmentExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 548px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-IfExpression"><svg class="railroad" viewBox="0 0 548 167" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="if-expr.md#grammar-IfExpression">
<text class="comment" x="57" y="25">
IfExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 53 h 12"/>
<path d=" M 487 53 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -440 m 223 0 l 5 -5 m 0 10 l -5 -5 m -223 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="47" y="42"/>
<text x="65" y="58">
if</text>
</g>
<a class="link" xlink:href="if-expr.md#railroad-Conditions">
<g class="nonterminal">
<rect height="22" width="100" x="93" y="42"/>
<text x="143" y="58">
Conditions</text>
</g>
</a>
<a class="link" xlink:href="block-expr.md#railroad-BlockExpressionNoInnerAttributes">
<g class="nonterminal">
<rect height="22" width="284" x="203" y="42"/>
<text x="345" y="58">
BlockExpressionNoInnerAttributes</text>
</g>
</a>
<path d=" M 83 53 h 10"/>
<path d=" M 193 53 h 10"/>
</g>
<path d=" M 489 113 h 0 a 12 12 0 0 0 12 -12 v -36 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 113 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 394 m -194 0 l -5 -5 m 0 10 l 5 -5 m 194 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="71" y="102"/>
<text x="97" y="118">
else</text>
</g>
<g class="choice">
<path d=" M 133 113 h 24 m 284 0 h 24"/>
<a class="link" xlink:href="block-expr.md#railroad-BlockExpressionNoInnerAttributes">
<g class="nonterminal">
<rect height="22" width="284" x="157" y="102"/>
<text x="299" y="118">
BlockExpressionNoInnerAttributes</text>
</g>
</a>
<path d=" M 133 113 a 12 12 0 0 1 12 12 v 9 m 308 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 145 134 v 0 a 12 12 0 0 0 12 12 m 116 0 h 168 m -81 0 l -5 -5 m 0 10 l 5 -5 m 81 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="if-expr.md#railroad-IfExpression">
<g class="nonterminal">
<rect height="22" width="116" x="157" y="135"/>
<text x="215" y="151">
IfExpression</text>
</g>
</a>
</g>
<path d=" M 123 113 h 10"/>
</g>
</g>
</g>
</g>
<path d=" M 523 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 513 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 312px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Conditions"><svg class="railroad" viewBox="0 0 312 151" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="if-expr.md#grammar-Conditions">
<text class="comment" x="50" y="25">
Conditions</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 89 h 24 m 194 0 h 24"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="194" x="59" y="42"/>
<path d=" M 59 89 h 8 m 100 0 h 86 m -40 0 l -5 -5 m 0 10 l 5 -5 m 40 0"/>
<text class="comment" x="156" y="65">
except StructExpression</text>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="67" y="78"/>
<text x="117" y="94">
Expression</text>
</g>
</a>
</g>
</g>
<path d=" M 35 89 a 12 12 0 0 1 12 12 v 17 m 218 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 118 v 0 a 12 12 0 0 0 12 12 m 84 0 h 110 m -52 0 l -5 -5 m 0 10 l 5 -5 m 52 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="if-expr.md#railroad-LetChain">
<g class="nonterminal">
<rect height="22" width="84" x="59" y="119"/>
<text x="101" y="135">
LetChain</text>
</g>
</a>
</g>
<path d=" M 287 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 277 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 510px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LetChain"><svg class="railroad" viewBox="0 0 510 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="if-expr.md#grammar-LetChain">
<text class="comment" x="43" y="25">
LetChain</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="if-expr.md#railroad-LetChainCondition">
<g class="nonterminal">
<rect height="22" width="156" x="35" y="55"/>
<text x="113" y="71">
LetChainCondition</text>
</g>
</a>
<g class="optional">
<path d=" M 201 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 226 m -110 0 l -5 -5 m 0 10 l 5 -5 m 110 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 225 66 h 12 m 202 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -202 m 104 0 l 5 -5 m 0 10 l -5 -5 m -104 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="237" y="55"/>
<text x="255" y="71">
&amp;&amp;</text>
</g>
<a class="link" xlink:href="if-expr.md#railroad-LetChainCondition">
<g class="nonterminal">
<rect height="22" width="156" x="283" y="55"/>
<text x="361" y="71">
LetChainCondition</text>
</g>
</a>
<path d=" M 273 66 h 10"/>
</g>
</g>
</g>
<path d=" M 191 66 h 10"/>
</g>
<path d=" M 485 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 475 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 718px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LetChainCondition"><svg class="railroad" viewBox="0 0 718 199" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="if-expr.md#grammar-LetChainCondition">
<text class="comment" x="74" y="25">
LetChainCondition</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 89 h 24 m 208 0 h 416 m -205 0 l -5 -5 m 0 10 l 5 -5 m 205 0"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="208" x="59" y="42"/>
<path d=" M 59 89 h 8 m 100 0 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0"/>
<text class="comment" x="163" y="65">
except ExcludedConditions</text>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="67" y="78"/>
<text x="117" y="94">
Expression</text>
</g>
</a>
</g>
</g>
<path d=" M 35 89 a 12 12 0 0 1 12 12 v 17 m 624 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 118 v 35 a 12 12 0 0 0 12 12 m 600 0 h 0 a 12 12 0 0 0 12 -12 v -35"/>
<g class="sequence">
<g class="optional">
<path d=" M 59 165 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 83 165 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="95" y="154"/>
<text x="161" y="170">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="273" y="154"/>
<text x="295" y="170">
let</text>
</g>
<a class="link" xlink:href="../patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="327" y="154"/>
<text x="365" y="170">
Pattern</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="413" y="154"/>
<text x="427" y="170">
=</text>
</g>
<g class="labeledbox">
<rect height="66" width="208" x="451" y="118"/>
<path d=" M 451 165 h 8 m 92 0 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0"/>
<text class="comment" x="555" y="141">
except ExcludedConditions</text>
<a class="link" xlink:href="match-expr.md#railroad-Scrutinee">
<g class="nonterminal">
<rect height="22" width="92" x="459" y="154"/>
<text x="505" y="170">
Scrutinee</text>
</g>
</a>
</g>
<path d=" M 263 165 h 10"/>
<path d=" M 317 165 h 10"/>
<path d=" M 403 165 h 10"/>
<path d=" M 441 165 h 10"/>
</g>
</g>
<path d=" M 693 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 683 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 370px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ExcludedConditions"><svg class="railroad" viewBox="0 0 370 272" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="if-expr.md#grammar-ExcludedConditions">
<text class="comment" x="78" y="25">
ExcludedConditions</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 148 0 h 128 m -61 0 l -5 -5 m 0 10 l 5 -5 m 61 0"/>
<g class="sequence">
<a class="link" xlink:href="struct-expr.md#railroad-StructExpression">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="42"/>
<text x="133" y="58">
StructExpression</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 276 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 276 0 v -33"/>
<path d=" M 47 107 v 33 m 276 0 v -33"/>
<path d=" M 47 140 v 33 m 276 0 v -33"/>
<path d=" M 47 173 v 33 m 276 0 v -33"/>
<path d=" M 47 206 v 33 m 276 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 196 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-LazyBooleanExpression">
<g class="nonterminal">
<rect height="22" width="196" x="59" y="75"/>
<text x="157" y="91">
LazyBooleanExpression</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 92 0 h 160 m -77 0 l -5 -5 m 0 10 l 5 -5 m 77 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="range-expr.md#railroad-RangeExpr">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="108"/>
<text x="105" y="124">
RangeExpr</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 124 0 h 128 m -61 0 l -5 -5 m 0 10 l 5 -5 m 61 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="range-expr.md#railroad-RangeFromExpr">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="141"/>
<text x="121" y="157">
RangeFromExpr</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 164 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="range-expr.md#railroad-RangeInclusiveExpr">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="174"/>
<text x="141" y="190">
RangeInclusiveExpr</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 188 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-AssignmentExpression">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="207"/>
<text x="153" y="223">
AssignmentExpression</text>
</g>
</a>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 252 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="operator-expr.md#railroad-CompoundAssignmentExpression">
<g class="nonterminal">
<rect height="22" width="252" x="59" y="240"/>
<text x="185" y="256">
CompoundAssignmentExpression</text>
</g>
</a>
</g>
<path d=" M 345 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 335 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<!-- TODO: The struct exception above needs clarification, see https://github.com/rust-lang/reference/issues/1808
     The chain grammar could use some work, see https://github.com/rust-lang/reference/issues/1811
-->

<div class="rule" id="r-expr.if.intro"><a class="rule-link" href="#r-expr.if.intro" title="expr.if.intro"><span>[expr<wbr>.if<wbr>.intro]</span></a>
</div>

`if` 表达式的语法是一个或多个以 `&&` 分隔的条件操作数序列，后跟一个结果块、任意数量的 `else if` 条件和块，以及一个可选的尾随 `else` 块。

<div class="rule" id="r-expr.if.condition"><a class="rule-link" href="#r-expr.if.condition" title="expr.if.condition"><span>[expr<wbr>.if<wbr>.condition]</span></a>
</div>

条件操作数必须是具有[布尔类型](../types/boolean.md)的 [Expression](../expressions.md#grammar-Expression)，或者是条件式 `let` 匹配。

<div class="rule" id="r-expr.if.condition-true"><a class="rule-link" href="#r-expr.if.condition-true" title="expr.if.condition-true"><span>[expr<wbr>.if<wbr>.condition-true]</span></a>
</div>

如果所有条件操作数都求值为 `true`，并且所有 `let` 模式都成功匹配其[被匹配值](../glossary.md#scrutinee)，则执行结果块，并跳过任何后续的 `else if` 或 `else` 块。

<div class="rule" id="r-expr.if.else-if"><a class="rule-link" href="#r-expr.if.else-if" title="expr.if.else-if"><span>[expr<wbr>.if<wbr>.else-if]</span></a>
</div>

如果任何条件操作数求值为 `false`，或者任何 `let` 模式没有匹配其被匹配值，则跳过结果块，并对任何后续的 `else if` 条件求值。

<div class="rule" id="r-expr.if.else"><a class="rule-link" href="#r-expr.if.else" title="expr.if.else"><span>[expr<wbr>.if<wbr>.else]</span></a>
</div>

如果所有 `if` 和 `else if` 条件都求值为 `false`，则执行存在的 `else` 块。

<div class="rule" id="r-expr.if.result"><a class="rule-link" href="#r-expr.if.result" title="expr.if.result"><span>[expr<wbr>.if<wbr>.result]</span></a>
</div>

`if` 表达式求值为被执行块的同一值；如果没有块被求值，则求值为 `()`。

<div class="rule" id="r-expr.if.type"><a class="rule-link" href="#r-expr.if.type" title="expr.if.type"><span>[expr<wbr>.if<wbr>.type]</span></a>
</div>

`if` 表达式在所有情况下必须具有相同的类型。

```rust
# let x = 3;
if x == 4 {
    println!("x is four");
} else if x == 3 {
    println!("x is three");
} else {
    println!("x is something else");
}

// `if` can be used as an expression.
let y = if 12 * 15 > 150 {
    "Bigger"
} else {
    "Smaller"
};
assert_eq!(y, "Bigger");
```

<div class="rule" id="r-expr.if.diverging"><a class="rule-link" href="#r-expr.if.diverging" title="expr.if.diverging"><span>[expr<wbr>.if<wbr>.diverging]</span></a>
</div>

如果条件表达式发散，或者所有分支都发散，则 `if` 表达式[发散](../divergence.md#r-divergence)。

```rust,no_run
fn diverging_condition() -> ! {
    // Diverges because the condition expression diverges
    if loop {} {
        ()
    } else {
        ()
    };
    // The semicolon above is important: The type of the `if` expression is
    // `()`, despite being diverging. When the final body expression is
    // elided, the type of the body is inferred to ! because the function body
    // diverges. Without the semicolon, the `if` would be the tail expression
    // with type `()`, which would fail to match the return type `!`.
}

fn diverging_arms() -> ! {
    // Diverges because all arms diverge
    if true {
        loop {}
    } else {
        loop {}
    }
}
```

<div class="rule" id="r-expr.if.let"><a class="rule-link" href="#r-expr.if.let" title="expr.if.let"><span>[expr<wbr>.if<wbr>.let]</span></a>
</div>

## `if let` 模式

<div class="rule" id="r-expr.if.let.intro"><a class="rule-link" href="#r-expr.if.let.intro" title="expr.if.let.intro"><span>[expr<wbr>.if<wbr>.let<wbr>.intro]</span></a>
</div>

`if` 条件中的 `let` 模式允许在模式成功匹配时将新变量绑定到作用域中。

以下示例展示了使用 `let` 模式进行绑定：

```rust
let dish = ("Ham", "Eggs");

// This body will be skipped because the pattern is refuted.
if let ("Bacon", b) = dish {
    println!("Bacon is served with {}", b);
} else {
    // This block is evaluated instead.
    println!("No bacon will be served");
}

// This body will execute.
if let ("Ham", b) = dish {
    println!("Ham is served with {}", b);
}

if let _ = 5 {
    println!("Irrefutable patterns are always true");
}
```

<div class="rule" id="r-expr.if.let.or-pattern"><a class="rule-link" href="#r-expr.if.let.or-pattern" title="expr.if.let.or-pattern"><span>[expr<wbr>.if<wbr>.let<wbr>.or-pattern]</span></a>
</div>

可以用 `|` 运算符指定多个模式。这与 [`match` 表达式](match-expr.md)中 `|` 的语义相同：

```rust
enum E {
    X(u8),
    Y(u8),
    Z(u8),
}
let v = E::Y(12);
if let E::X(n) | E::Y(n) = v {
    assert_eq!(n, 12);
}
```

<div class="rule" id="r-expr.if.chains"><a class="rule-link" href="#r-expr.if.chains" title="expr.if.chains"><span>[expr<wbr>.if<wbr>.chains]</span></a>
</div>

## 条件链

<div class="rule" id="r-expr.if.chains.intro"><a class="rule-link" href="#r-expr.if.chains.intro" title="expr.if.chains.intro"><span>[expr<wbr>.if<wbr>.chains<wbr>.intro]</span></a>
</div>

多个条件操作数可以用 `&&` 分隔。

<div class="rule" id="r-expr.if.chains.order"><a class="rule-link" href="#r-expr.if.chains.order" title="expr.if.chains.order"><span>[expr<wbr>.if<wbr>.chains<wbr>.order]</span></a>
</div>

类似于 `&&` [LazyBooleanExpression](operator-expr.md#grammar-LazyBooleanExpression)，每个操作数会从左到右求值，直到某个操作数求值为 `false` 或某个 `let` 匹配失败；在这种情况下，后续操作数不会被求值。

<div class="rule" id="r-expr.if.chains.bindings"><a class="rule-link" href="#r-expr.if.chains.bindings" title="expr.if.chains.bindings"><span>[expr<wbr>.if<wbr>.chains<wbr>.bindings]</span></a>
</div>

每个模式的绑定都会被放入作用域，以供下一个条件操作数和结果块使用。

以下是链接多个表达式的示例，其中混合了 `let` 绑定和布尔表达式，并且表达式能够引用来自前面表达式的模式绑定：

```rust
fn single() {
    let outer_opt = Some(Some(1i32));

    if let Some(inner_opt) = outer_opt
        && let Some(number) = inner_opt
        && number == 1
    {
        println!("Peek a boo");
    }
}
```

上面的代码等价于以下不使用条件链的代码：

```rust
fn nested() {
    let outer_opt = Some(Some(1i32));

    if let Some(inner_opt) = outer_opt {
        if let Some(number) = inner_opt {
            if number == 1 {
                println!("Peek a boo");
            }
        }
    }
}
```

<div class="rule" id="r-expr.if.chains.or"><a class="rule-link" href="#r-expr.if.chains.or" title="expr.if.chains.or"><span>[expr<wbr>.if<wbr>.chains<wbr>.or]</span></a>
</div>

如果任何条件操作数是 `let` 模式，则由于与 `let` 被匹配值之间存在歧义和优先级问题，所有条件操作数都不能是 `||` [惰性布尔运算符表达式](operator-expr.md#r-expr.bool-logic)。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 如果需要 `||` 表达式，则可以使用括号。例如：
 > 
 > ```rust
 > # let foo = Some(123);
 > # let condition1 = true;
 > # let condition2 = false;
 > if let Some(x) = foo
 >     // Parentheses are required here.
 >     && (condition1 || condition2)
 > {}
 > ```

</div>

<div class="rule" id="r-expr.if.edition2024"><a class="rule-link" href="#r-expr.if.edition2024" title="expr.if.edition2024"><span>[expr<wbr>.if<wbr>.edition2024]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2024</span> Edition differences</p>
 > 
 > 在 2024 edition 之前，不支持 let chains。也就是说，`if` 表达式中不允许使用 [LetChain](if-expr.md#grammar-LetChain) 语法。

</div>
