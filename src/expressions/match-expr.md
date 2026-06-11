<div class="rule" id="r-expr.match"><a class="rule-link" href="#r-expr.match" title="expr.match"><span>[expr<wbr>.match]</span></a>
</div>

# `match` 表达式

<div class="rule" id="r-expr.match.syntax"><a class="rule-link" href="#r-expr.match.syntax" title="expr.match.syntax"><span>[expr<wbr>.match<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-MatchExpression" onclick="show_railroad()">[MatchExpression](match-expr.md#railroad-MatchExpression)</span> →  
    <span class="grammar-literal">match</span> <span class="grammar-text">[Scrutinee](match-expr.md#grammar-Scrutinee)</span> <span class="grammar-literal">{</span>  
        <span class="grammar-text">[InnerAttribute](../attributes.md#grammar-InnerAttribute)</span><sup>\*</sup>  
        <span class="grammar-text">[MatchArms](match-expr.md#grammar-MatchArms)</span><sup>?</sup>  
    <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-Scrutinee" onclick="show_railroad()">[Scrutinee](match-expr.md#railroad-Scrutinee)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span><sub class="grammar-text">除 [StructExpression](struct-expr.md#grammar-StructExpression) 外</sub>

<span class="grammar-text grammar-production" id="grammar-MatchArms" onclick="show_railroad()">[MatchArms](match-expr.md#railroad-MatchArms)</span> →  
    ( <span class="grammar-text">[MatchArm](match-expr.md#grammar-MatchArm)</span> <span class="grammar-literal">=></span> ( <span class="grammar-text">[ExpressionWithoutBlock](../expressions.md#grammar-ExpressionWithoutBlock)</span> <span class="grammar-literal">,</span> | <span class="grammar-text">[ExpressionWithBlock](../expressions.md#grammar-ExpressionWithBlock)</span> <span class="grammar-literal">,</span><sup>?</sup> ) )<sup>\*</sup>  
    <span class="grammar-text">[MatchArm](match-expr.md#grammar-MatchArm)</span> <span class="grammar-literal">=></span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">,</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-MatchArm" onclick="show_railroad()">[MatchArm](match-expr.md#railroad-MatchArm)</span> → <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-text">[Pattern](../patterns.md#grammar-Pattern)</span> <span class="grammar-text">[MatchArmGuard](match-expr.md#grammar-MatchArmGuard)</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-MatchArmGuard" onclick="show_railroad()">[MatchArmGuard](match-expr.md#railroad-MatchArmGuard)</span> → <span class="grammar-literal">if</span> <span class="grammar-text">[MatchConditions](match-expr.md#grammar-MatchConditions)</span>

<span class="grammar-text grammar-production" id="grammar-MatchConditions" onclick="show_railroad()">[MatchConditions](match-expr.md#railroad-MatchConditions)</span> →  
     <span class="grammar-text">[MatchGuardChain](match-expr.md#grammar-MatchGuardChain)</span>  
   \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<span class="grammar-text grammar-production" id="grammar-MatchGuardChain" onclick="show_railroad()">[MatchGuardChain](match-expr.md#railroad-MatchGuardChain)</span> → <span class="grammar-text">[MatchGuardCondition](match-expr.md#grammar-MatchGuardCondition)</span> ( <span class="grammar-literal">&&</span> <span class="grammar-text">[MatchGuardCondition](match-expr.md#grammar-MatchGuardCondition)</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-MatchGuardCondition" onclick="show_railroad()">[MatchGuardCondition](match-expr.md#railroad-MatchGuardCondition)</span> →  
     <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span><sub class="grammar-text">除 [ExcludedMatchConditions](match-expr.md#grammar-ExcludedMatchConditions) 外</sub>  
   \| <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-literal">let</span> <span class="grammar-text">[Pattern](../patterns.md#grammar-Pattern)</span> <span class="grammar-literal">=</span> <span class="grammar-text">[MatchGuardScrutinee](match-expr.md#grammar-MatchGuardScrutinee)</span>

<span class="grammar-text grammar-production" id="grammar-MatchGuardScrutinee" onclick="show_railroad()">[MatchGuardScrutinee](match-expr.md#railroad-MatchGuardScrutinee)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span><sub class="grammar-text">除 [ExcludedMatchConditions](match-expr.md#grammar-ExcludedMatchConditions) 外</sub>

<span class="grammar-text grammar-production" id="grammar-ExcludedMatchConditions" onclick="show_railroad()">[ExcludedMatchConditions](match-expr.md#railroad-ExcludedMatchConditions)</span> →  
      <span class="grammar-text">[LazyBooleanExpression](operator-expr.md#grammar-LazyBooleanExpression)</span>  
    \| <span class="grammar-text">[RangeExpr](range-expr.md#grammar-RangeExpr)</span>  
    \| <span class="grammar-text">[RangeFromExpr](range-expr.md#grammar-RangeFromExpr)</span>  
    \| <span class="grammar-text">[RangeInclusiveExpr](range-expr.md#grammar-RangeInclusiveExpr)</span>  
    \| <span class="grammar-text">[AssignmentExpression](operator-expr.md#grammar-AssignmentExpression)</span>  
    \| <span class="grammar-text">[CompoundAssignmentExpression](operator-expr.md#grammar-CompoundAssignmentExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 672px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MatchExpression"><svg class="railroad" viewBox="0 0 672 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="match-expr.md#grammar-MatchExpression">
<text class="comment" x="67" y="25">
MatchExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="35" y="55"/>
<text x="65" y="71">
match</text>
</g>
<a class="link" xlink:href="match-expr.md#railroad-Scrutinee">
<g class="nonterminal">
<rect height="22" width="92" x="105" y="55"/>
<text x="151" y="71">
Scrutinee</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="207" y="55"/>
<text x="221" y="71">
{</text>
</g>
<g class="optional">
<path d=" M 245 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 269 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-InnerAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="281" y="55"/>
<text x="347" y="71">
InnerAttribute</text>
</g>
</a>
</g>
</g>
<g class="optional">
<path d=" M 459 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 92 m -43 0 l -5 -5 m 0 10 l 5 -5 m 43 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="match-expr.md#railroad-MatchArms">
<g class="nonterminal">
<rect height="22" width="92" x="483" y="55"/>
<text x="529" y="71">
MatchArms</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="609" y="55"/>
<text x="623" y="71">
}</text>
</g>
<path d=" M 95 66 h 10"/>
<path d=" M 197 66 h 10"/>
<path d=" M 235 66 h 10"/>
<path d=" M 449 66 h 10"/>
<path d=" M 599 66 h 10"/>
</g>
<path d=" M 647 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 637 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 264px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Scrutinee"><svg class="railroad" viewBox="0 0 264 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="match-expr.md#grammar-Scrutinee">
<text class="comment" x="46" y="25">
Scrutinee</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="labeledbox">
<rect height="66" width="194" x="35" y="42"/>
<path d=" M 35 89 h 8 m 100 0 h 86 m -40 0 l -5 -5 m 0 10 l 5 -5 m 40 0"/>
<text class="comment" x="132" y="65">
except StructExpression</text>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="43" y="78"/>
<text x="93" y="94">
Expression</text>
</g>
</a>
</g>
<path d=" M 239 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 229 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 636px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MatchArms"><svg class="railroad" viewBox="0 0 636 201" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="match-expr.md#grammar-MatchArms">
<text class="comment" x="46" y="25">
MatchArms</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 66 h 12"/>
<path d=" M 565 66 a 12 12 0 0 1 12 12 v 54 m 0 -24 l -5 -5 m 10 0 l -5 5 m 0 24 a 12 12 0 0 1 -12 12 h -518 m 262 0 l 5 -5 m 0 10 l -5 -5 m -262 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 470 m -232 0 l -5 -5 m 0 10 l 5 -5 m 232 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 71 66 h 12 m 446 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 42 a 12 12 0 0 1 -12 12 m 0 0 h -446 m 226 0 l 5 -5 m 0 10 l -5 -5 m -226 0 a 12 12 0 0 1 -12 -12 v -42 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<a class="link" xlink:href="match-expr.md#railroad-MatchArm">
<g class="nonterminal">
<rect height="22" width="84" x="83" y="55"/>
<text x="125" y="71">
MatchArm</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="177" y="55"/>
<text x="195" y="71">
=&gt;</text>
</g>
<g class="choice">
<path d=" M 223 66 h 24 m 242 0 h 40"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-ExpressionWithoutBlock">
<g class="nonterminal">
<rect height="22" width="204" x="247" y="55"/>
<text x="349" y="71">
ExpressionWithoutBlock</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="461" y="55"/>
<text x="475" y="71">
,</text>
</g>
<path d=" M 451 66 h 10"/>
</g>
<path d=" M 223 66 a 12 12 0 0 1 12 12 v 9 m 282 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 235 87 v 12 a 12 12 0 0 0 12 12 m 258 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-ExpressionWithBlock">
<g class="nonterminal">
<rect height="22" width="172" x="247" y="100"/>
<text x="333" y="116">
ExpressionWithBlock</text>
</g>
</a>
<g class="optional">
<path d=" M 429 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="453" y="100"/>
<text x="467" y="116">
,</text>
</g>
</g>
<path d=" M 419 111 h 10"/>
</g>
</g>
<path d=" M 167 66 h 10"/>
<path d=" M 213 66 h 10"/>
</g>
</g>
</g>
</g>
<path d=" M 373 180 h 204 m -99 0 l -5 -5 m 0 10 l 5 -5 m 99 0 a 12 12 0 0 0 12 -12 v -90 m 0 48 l -5 5 m 10 0 l -5 -5 m 0 -48 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<a class="link" xlink:href="match-expr.md#railroad-MatchArm">
<g class="nonterminal">
<rect height="22" width="84" x="47" y="169"/>
<text x="89" y="185">
MatchArm</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="141" y="169"/>
<text x="159" y="185">
=&gt;</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="187" y="169"/>
<text x="237" y="185">
Expression</text>
</g>
</a>
<g class="optional">
<path d=" M 297 180 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="321" y="169"/>
<text x="335" y="185">
,</text>
</g>
</g>
<path d=" M 131 180 h 10"/>
<path d=" M 177 180 h 10"/>
<path d=" M 287 180 h 10"/>
</g>
</g>
<path d=" M 611 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 601 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 542px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MatchArm"><svg class="railroad" viewBox="0 0 542 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="match-expr.md#grammar-MatchArm">
<text class="comment" x="43" y="25">
MatchArm</text>
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
<a class="link" xlink:href="../patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="249" y="55"/>
<text x="287" y="71">
Pattern</text>
</g>
</a>
<g class="optional">
<path d=" M 335 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="match-expr.md#railroad-MatchArmGuard">
<g class="nonterminal">
<rect height="22" width="124" x="359" y="55"/>
<text x="421" y="71">
MatchArmGuard</text>
</g>
</a>
</g>
<path d=" M 239 66 h 10"/>
<path d=" M 325 66 h 10"/>
</g>
<path d=" M 517 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 507 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 256px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MatchArmGuard"><svg class="railroad" viewBox="0 0 256 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="match-expr.md#grammar-MatchArmGuard">
<text class="comment" x="60" y="25">
MatchArmGuard</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="42"/>
<text x="53" y="58">
if</text>
</g>
<a class="link" xlink:href="match-expr.md#railroad-MatchConditions">
<g class="nonterminal">
<rect height="22" width="140" x="81" y="42"/>
<text x="151" y="58">
MatchConditions</text>
</g>
</a>
<path d=" M 71 53 h 10"/>
</g>
<path d=" M 231 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 221 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 258px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MatchConditions"><svg class="railroad" viewBox="0 0 258 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="match-expr.md#grammar-MatchConditions">
<text class="comment" x="67" y="25">
MatchConditions</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 140 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="match-expr.md#railroad-MatchGuardChain">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="42"/>
<text x="129" y="58">
MatchGuardChain</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 164 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 100 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="75"/>
<text x="109" y="91">
Expression</text>
</g>
</a>
</g>
<path d=" M 233 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 223 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 542px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MatchGuardChain"><svg class="railroad" viewBox="0 0 542 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="match-expr.md#grammar-MatchGuardChain">
<text class="comment" x="67" y="25">
MatchGuardChain</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="match-expr.md#railroad-MatchGuardCondition">
<g class="nonterminal">
<rect height="22" width="172" x="35" y="55"/>
<text x="121" y="71">
MatchGuardCondition</text>
</g>
</a>
<g class="optional">
<path d=" M 217 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 242 m -118 0 l -5 -5 m 0 10 l 5 -5 m 118 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 241 66 h 12 m 218 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -218 m 112 0 l 5 -5 m 0 10 l -5 -5 m -112 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="253" y="55"/>
<text x="271" y="71">
&amp;&amp;</text>
</g>
<a class="link" xlink:href="match-expr.md#railroad-MatchGuardCondition">
<g class="nonterminal">
<rect height="22" width="172" x="299" y="55"/>
<text x="385" y="71">
MatchGuardCondition</text>
</g>
</a>
<path d=" M 289 66 h 10"/>
</g>
</g>
</g>
<path d=" M 207 66 h 10"/>
</g>
<path d=" M 517 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 507 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 682px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MatchGuardCondition"><svg class="railroad" viewBox="0 0 682 176" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="match-expr.md#grammar-MatchGuardCondition">
<text class="comment" x="81" y="25">
MatchGuardCondition</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 89 h 24 m 243 0 h 345 m -169 0 l -5 -5 m 0 10 l 5 -5 m 169 0"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="243" x="59" y="42"/>
<path d=" M 59 89 h 8 m 100 0 h 135 m -64 0 l -5 -5 m 0 10 l 5 -5 m 64 0"/>
<text class="comment" x="180" y="65">
except ExcludedMatchConditions</text>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="67" y="78"/>
<text x="117" y="94">
Expression</text>
</g>
</a>
</g>
</g>
<path d=" M 35 89 a 12 12 0 0 1 12 12 v 17 m 588 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 118 v 12 a 12 12 0 0 0 12 12 m 564 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="optional">
<path d=" M 59 142 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 83 142 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="95" y="131"/>
<text x="161" y="147">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="273" y="131"/>
<text x="295" y="147">
let</text>
</g>
<a class="link" xlink:href="../patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="327" y="131"/>
<text x="365" y="147">
Pattern</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="413" y="131"/>
<text x="427" y="147">
=</text>
</g>
<a class="link" xlink:href="match-expr.md#railroad-MatchGuardScrutinee">
<g class="nonterminal">
<rect height="22" width="172" x="451" y="131"/>
<text x="537" y="147">
MatchGuardScrutinee</text>
</g>
</a>
<path d=" M 263 142 h 10"/>
<path d=" M 317 142 h 10"/>
<path d=" M 403 142 h 10"/>
<path d=" M 441 142 h 10"/>
</g>
</g>
<path d=" M 657 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 647 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 313px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MatchGuardScrutinee"><svg class="railroad" viewBox="0 0 313 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="match-expr.md#grammar-MatchGuardScrutinee">
<text class="comment" x="81" y="25">
MatchGuardScrutinee</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="labeledbox">
<rect height="66" width="243" x="35" y="42"/>
<path d=" M 35 89 h 8 m 100 0 h 135 m -64 0 l -5 -5 m 0 10 l 5 -5 m 64 0"/>
<text class="comment" x="156" y="65">
except ExcludedMatchConditions</text>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="43" y="78"/>
<text x="93" y="94">
Expression</text>
</g>
</a>
</g>
<path d=" M 288 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 278 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 370px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ExcludedMatchConditions"><svg class="railroad" viewBox="0 0 370 239" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="match-expr.md#grammar-ExcludedMatchConditions">
<text class="comment" x="99" y="25">
ExcludedMatchConditions</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 196 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-LazyBooleanExpression">
<g class="nonterminal">
<rect height="22" width="196" x="59" y="42"/>
<text x="157" y="58">
LazyBooleanExpression</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 276 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 276 0 v -33"/>
<path d=" M 47 107 v 33 m 276 0 v -33"/>
<path d=" M 47 140 v 33 m 276 0 v -33"/>
<path d=" M 47 173 v 33 m 276 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 92 0 h 160 m -77 0 l -5 -5 m 0 10 l 5 -5 m 77 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="range-expr.md#railroad-RangeExpr">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="75"/>
<text x="105" y="91">
RangeExpr</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 124 0 h 128 m -61 0 l -5 -5 m 0 10 l 5 -5 m 61 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="range-expr.md#railroad-RangeFromExpr">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="108"/>
<text x="121" y="124">
RangeFromExpr</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 164 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="range-expr.md#railroad-RangeInclusiveExpr">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="141"/>
<text x="141" y="157">
RangeInclusiveExpr</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 188 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-AssignmentExpression">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="174"/>
<text x="153" y="190">
AssignmentExpression</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 252 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="operator-expr.md#railroad-CompoundAssignmentExpression">
<g class="nonterminal">
<rect height="22" width="252" x="59" y="207"/>
<text x="185" y="223">
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

<!-- TODO: The exception above isn't accurate, see https://github.com/rust-lang/reference/issues/569 -->

<div class="rule" id="r-expr.match.intro"><a class="rule-link" href="#r-expr.match.intro" title="expr.match.intro"><span>[expr<wbr>.match<wbr>.intro]</span></a>
</div>

\_`match` 表达式_会基于模式进行分支。实际发生的匹配的确切形式取决于[模式](../patterns.md)。

<div class="rule" id="r-expr.match.scrutinee"><a class="rule-link" href="#r-expr.match.scrutinee" title="expr.match.scrutinee"><span>[expr<wbr>.match<wbr>.scrutinee]</span></a>
</div>

`match` 表达式有一个 _[被匹配值](../glossary.md#scrutinee)表达式_，它是要与模式比较的值。

<div class="rule" id="r-expr.match.scrutinee-constraint"><a class="rule-link" href="#r-expr.match.scrutinee-constraint" title="expr.match.scrutinee-constraint"><span>[expr<wbr>.match<wbr>.scrutinee-constraint]</span></a>
</div>

被匹配值表达式和模式必须具有相同的类型。

<div class="rule" id="r-expr.match.scrutinee-behavior"><a class="rule-link" href="#r-expr.match.scrutinee-behavior" title="expr.match.scrutinee-behavior"><span>[expr<wbr>.match<wbr>.scrutinee-behavior]</span></a>
</div>

`match` 的行为会根据被匹配值表达式是[位置表达式还是值表达式](../expressions.md#place-expressions-and-value-expressions)而不同。

<div class="rule" id="r-expr.match.scrutinee-value"><a class="rule-link" href="#r-expr.match.scrutinee-value" title="expr.match.scrutinee-value"><span>[expr<wbr>.match<wbr>.scrutinee-value]</span></a>
</div>

如果被匹配值表达式是[值表达式](../expressions.md#place-expressions-and-value-expressions)，会先将它求值到一个临时位置中，然后将结果值按顺序与各个分支中的模式比较，直到找到匹配。第一个具有匹配模式的分支会被选为 `match` 的分支目标，模式绑定的任何变量都会被赋给该分支块中的局部变量，然后控制流进入该块。

<div class="rule" id="r-expr.match.scrutinee-place"><a class="rule-link" href="#r-expr.match.scrutinee-place" title="expr.match.scrutinee-place"><span>[expr<wbr>.match<wbr>.scrutinee-place]</span></a>
</div>

当被匹配值表达式是[位置表达式](../expressions.md#place-expressions-and-value-expressions)时，`match` 不会分配临时位置；但是，按值绑定可以从该内存位置复制或移动。在可能的情况下，最好匹配位置表达式，因为这些匹配的生命周期继承位置表达式的生命周期，而不是被限制在 `match` 内部。

`match` 表达式的示例：

```rust
let x = 1;

match x {
    1 => println!("one"),
    2 => println!("two"),
    3 => println!("three"),
    4 => println!("four"),
    5 => println!("five"),
    _ => println!("something else"),
}
```

<div class="rule" id="r-expr.match.pattern-vars"><a class="rule-link" href="#r-expr.match.pattern-vars" title="expr.match.pattern-vars"><span>[expr<wbr>.match<wbr>.pattern-vars]</span></a>
</div>

模式内绑定的变量作用域限于匹配守卫和该分支的表达式。

<div class="rule" id="r-expr.match.pattern-var-binding"><a class="rule-link" href="#r-expr.match.pattern-var-binding" title="expr.match.pattern-var-binding"><span>[expr<wbr>.match<wbr>.pattern-var-binding]</span></a>
</div>

[绑定模式](../patterns.md#binding-modes)（移动、复制或引用）取决于模式。

<div class="rule" id="r-expr.match.or-pattern"><a class="rule-link" href="#r-expr.match.or-pattern" title="expr.match.or-pattern"><span>[expr<wbr>.match<wbr>.or-pattern]</span></a>
</div>

多个匹配模式可以用 `|` 运算符连接。每个模式会按从左到右的顺序测试，直到找到成功匹配。

```rust
let x = 9;
let message = match x {
    0 | 1  => "not many",
    2 ..= 9 => "a few",
    _      => "lots"
};

assert_eq!(message, "a few");

// Demonstration of pattern match order.
struct S(i32, i32);

match S(1, 2) {
    S(z @ 1, _) | S(_, z @ 2) => assert_eq!(z, 1),
    _ => panic!(),
}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `2..=9` 是[范围模式](../patterns.md#range-patterns)，而不是[范围表达式](range-expr.md)。因此，只有范围模式支持的那些范围类型才能用于 match 分支。

</div>

<div class="rule" id="r-expr.match.or-patterns-restriction"><a class="rule-link" href="#r-expr.match.or-patterns-restriction" title="expr.match.or-patterns-restriction"><span>[expr<wbr>.match<wbr>.or-patterns-restriction]</span></a>
</div>

每个以 `|` 分隔的模式中的每个绑定，都必须在该分支的所有模式中出现。

<div class="rule" id="r-expr.match.binding-restriction"><a class="rule-link" href="#r-expr.match.binding-restriction" title="expr.match.binding-restriction"><span>[expr<wbr>.match<wbr>.binding-restriction]</span></a>
</div>

每个同名绑定都必须具有相同类型，并且具有相同的绑定模式。

<div class="rule" id="r-expr.match.type"><a class="rule-link" href="#r-expr.match.type" title="expr.match.type"><span>[expr<wbr>.match<wbr>.type]</span></a>
</div>

整个 `match` 表达式的类型是各个 match 分支的[最小上界](../type-coercions.md#r-coerce.least-upper-bound)。

<div class="rule" id="r-expr.match.empty"><a class="rule-link" href="#r-expr.match.empty" title="expr.match.empty"><span>[expr<wbr>.match<wbr>.empty]</span></a>
</div>

如果没有 match 分支，则 `match` 表达式会[发散](../divergence.md#r-divergence)，且类型为 [`!`](../types/never.md#r-type.never)。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > # fn make<T>() -> T { loop {} }
 > enum Empty {}
 > 
 > fn diverging_match_no_arms() -> ! {
 >     let e: Empty = make();
 >     match e {}
 > }
 > ```

</div>

<div class="rule" id="r-expr.match.diverging"><a class="rule-link" href="#r-expr.match.diverging" title="expr.match.diverging"><span>[expr<wbr>.match<wbr>.diverging]</span></a>
</div>

如果被匹配值表达式或所有 match 分支发散，则整个 `match` 表达式也会发散。

<div class="rule" id="r-expr.match.guard"><a class="rule-link" href="#r-expr.match.guard" title="expr.match.guard"><span>[expr<wbr>.match<wbr>.guard]</span></a>
</div>

## 匹配守卫

<div class="rule" id="r-expr.match.guard.intro"><a class="rule-link" href="#r-expr.match.guard.intro" title="expr.match.guard.intro"><span>[expr<wbr>.match<wbr>.guard<wbr>.intro]</span></a>
</div>

match 分支可以接受_匹配守卫\_，以进一步细化匹配某个情况的条件。

<div class="rule" id="r-expr.match.guard.condition"><a class="rule-link" href="#r-expr.match.guard.condition" title="expr.match.guard.condition"><span>[expr<wbr>.match<wbr>.guard<wbr>.condition]</span></a>
</div>

模式守卫出现在模式之后，并以 `if` 关键字引入，由具有[布尔类型](../types/boolean.md#r-type.bool)的 [Expression](../expressions.md#grammar-Expression) 或条件式 `let` 匹配组成。

<div class="rule" id="r-expr.match.guard.behavior"><a class="rule-link" href="#r-expr.match.guard.behavior" title="expr.match.guard.behavior"><span>[expr<wbr>.match<wbr>.guard<wbr>.behavior]</span></a>
</div>

当模式成功匹配时，会执行模式守卫。如果所有守卫条件操作数都求值为 `true`，并且所有 `let` 模式都成功匹配其[被匹配值](../glossary.md#scrutinee)，则该 match 分支匹配成功，并执行分支体。

<div class="rule" id="r-expr.match.guard.next"><a class="rule-link" href="#r-expr.match.guard.next" title="expr.match.guard.next"><span>[expr<wbr>.match<wbr>.guard<wbr>.next]</span></a>
</div>

否则，会测试下一个模式，包括同一分支中使用 `|` 运算符的其他匹配。

```rust
# let maybe_digit = Some(0);
# fn process_digit(i: i32) { }
# fn process_other(i: i32) { }
let message = match maybe_digit {
    Some(x) if x < 10 => process_digit(x),
    Some(x) => process_other(x),
    None => panic!(),
};
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 使用 `|` 运算符的多个匹配可能导致模式守卫及其副作用执行多次。例如：
 > 
 > ```rust
 > # use std::cell::Cell;
 > let i : Cell<i32> = Cell::new(0);
 > match 1 {
 >     1 | _ if { i.set(i.get() + 1); false } => {}
 >     _ => {}
 > }
 > assert_eq!(i.get(), 2);
 > ```

</div>

<div class="rule" id="r-expr.match.guard.bound-variables"><a class="rule-link" href="#r-expr.match.guard.bound-variables" title="expr.match.guard.bound-variables"><span>[expr<wbr>.match<wbr>.guard<wbr>.bound-variables]</span></a>
</div>

模式守卫可以引用其跟随的模式内所绑定的变量。

<div class="rule" id="r-expr.match.guard.shared-ref"><a class="rule-link" href="#r-expr.match.guard.shared-ref" title="expr.match.guard.shared-ref"><span>[expr<wbr>.match<wbr>.guard<wbr>.shared-ref]</span></a>
</div>

在对守卫求值之前，会取得一个指向被匹配值中该变量所匹配部分的共享引用。在对守卫求值期间，访问该变量时会使用这个共享引用。

<div class="rule" id="r-expr.match.guard.value"><a class="rule-link" href="#r-expr.match.guard.value" title="expr.match.guard.value"><span>[expr<wbr>.match<wbr>.guard<wbr>.value]</span></a>
</div>

只有当守卫成功求值时，才会将值从被匹配值移动或复制到该变量中。这样就可以在守卫内部使用共享借用，而在守卫匹配失败时不会从被匹配值中移出。

<div class="rule" id="r-expr.match.guard.no-mutation"><a class="rule-link" href="#r-expr.match.guard.no-mutation" title="expr.match.guard.no-mutation"><span>[expr<wbr>.match<wbr>.guard<wbr>.no-mutation]</span></a>
</div>

此外，通过在对守卫求值期间持有共享引用，也会阻止守卫内部的修改。

<div class="rule" id="r-expr.match.guard.let"><a class="rule-link" href="#r-expr.match.guard.let" title="expr.match.guard.let"><span>[expr<wbr>.match<wbr>.guard<wbr>.let]</span></a>
</div>

守卫可以使用 `let` 模式来有条件地匹配被匹配值，并在模式成功匹配时将新变量绑定到作用域中。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 在此示例中，会对守卫条件 `let Some(first_char) = name.chars().next()` 求值。如果 `let` 模式成功匹配（即字符串至少有一个字符），则执行该分支的主体。否则，模式匹配继续到下一个分支。
 > 
 > `let` 模式会创建一个新绑定（`first_char`），它可以与原始模式绑定（`name`）一起在分支主体中使用。
 > 
 > ```rust
 > # enum Command {
 > #     Run(String),
 > #     Stop,
 > # }
 > let cmd = Command::Run("example".to_string());
 > 
 > match cmd {
 >     Command::Run(name) if let Some(first_char) = name.chars().next() => {
 >         // Both `name` and `first_char` are available here
 >         println!("Running: {name} (starts with '{first_char}')");
 >     }
 >     Command::Run(name) => {
 >         println!("{name} is empty");
 >     }
 >     _ => {}
 > }
 > ```

</div>

<div class="rule" id="r-expr.match.guard.chains"><a class="rule-link" href="#r-expr.match.guard.chains" title="expr.match.guard.chains"><span>[expr<wbr>.match<wbr>.guard<wbr>.chains]</span></a>
</div>

## 匹配守卫链

<div class="rule" id="r-expr.match.guard.chains.intro"><a class="rule-link" href="#r-expr.match.guard.chains.intro" title="expr.match.guard.chains.intro"><span>[expr<wbr>.match<wbr>.guard<wbr>.chains<wbr>.intro]</span></a>
</div>

多个守卫条件操作数可以用 `&&` 分隔。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > # let foo = Some([123]);
 > # let already_checked = false;
 > match foo {
 >     Some(xs) if let [single] = xs && !already_checked => { dbg!(single); }
 >     _ => {}
 > }
 > ```

</div>

<div class="rule" id="r-expr.match.guard.chains.order"><a class="rule-link" href="#r-expr.match.guard.chains.order" title="expr.match.guard.chains.order"><span>[expr<wbr>.match<wbr>.guard<wbr>.chains<wbr>.order]</span></a>
</div>

类似于 `&&` [LazyBooleanExpression](operator-expr.md#grammar-LazyBooleanExpression)，每个操作数会从左到右求值，直到某个操作数求值为 `false` 或某个 `let` 匹配失败；在这种情况下，后续操作数不会被求值。

<div class="rule" id="r-expr.match.guard.chains.bindings"><a class="rule-link" href="#r-expr.match.guard.chains.bindings" title="expr.match.guard.chains.bindings"><span>[expr<wbr>.match<wbr>.guard<wbr>.chains<wbr>.bindings]</span></a>
</div>

每个 `let` 模式的绑定都会被放入作用域，以供下一个条件操作数和 match 分支主体使用。

<div class="rule" id="r-expr.match.guard.chains.or"><a class="rule-link" href="#r-expr.match.guard.chains.or" title="expr.match.guard.chains.or"><span>[expr<wbr>.match<wbr>.guard<wbr>.chains<wbr>.or]</span></a>
</div>

如果任何守卫条件操作数是 `let` 模式，则由于与 `let` 被匹配值之间存在歧义和优先级问题，所有条件操作数都不能是 `||` [惰性布尔运算符表达式](operator-expr.md#r-expr.bool-logic)。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 如果需要 `||` 表达式，则可以使用括号。例如：
 > 
 > ```rust
 > # let foo = Some([123]);
 > match foo {
 >     Some(xs) if let [x] = xs
 >         // Parentheses are required here.
 >         && (x < -100 || x > 20) => {}
 >     _ => {}
 > }
 > ```

</div>

<div class="rule" id="r-expr.match.attributes"><a class="rule-link" href="#r-expr.match.attributes" title="expr.match.attributes"><span>[expr<wbr>.match<wbr>.attributes]</span></a>
</div>

## match 分支上的属性

<div class="rule" id="r-expr.match.attributes.outer"><a class="rule-link" href="#r-expr.match.attributes.outer" title="expr.match.attributes.outer"><span>[expr<wbr>.match<wbr>.attributes<wbr>.outer]</span></a>
</div>

match 分支上允许使用外部属性。在 match 分支上具有意义的属性只有 [`cfg`](../conditional-compilation.md) 和 [lint 检查属性](../attributes/diagnostics.md#lint-check-attributes)。

<div class="rule" id="r-expr.match.attributes.inner"><a class="rule-link" href="#r-expr.match.attributes.inner" title="expr.match.attributes.inner"><span>[expr<wbr>.match<wbr>.attributes<wbr>.inner]</span></a>
</div>

[内部属性](../attributes.md)可以直接放在 match 表达式的左花括号之后，允许出现的表达式上下文与[块表达式上的属性](block-expr.md#attributes-on-block-expressions)相同。