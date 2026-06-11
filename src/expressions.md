<div class="rule" id="r-expr"><a class="rule-link" href="#r-expr" title="expr"><span>[expr]</span></a>
</div>

# 表达式

<div class="rule" id="r-expr.syntax"><a class="rule-link" href="#r-expr.syntax" title="expr.syntax"><span>[expr<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Expression" onclick="show_railroad()">[Expression](expressions.md#railroad-Expression)</span> →  
      <span class="grammar-text">[ExpressionWithoutBlock](expressions.md#grammar-ExpressionWithoutBlock)</span>  
    \| <span class="grammar-text">[ExpressionWithBlock](expressions.md#grammar-ExpressionWithBlock)</span>

<span class="grammar-text grammar-production" id="grammar-ExpressionWithoutBlock" onclick="show_railroad()">[ExpressionWithoutBlock](expressions.md#railroad-ExpressionWithoutBlock)</span> →  
    <span class="grammar-text">[OuterAttribute](attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-text">[ExpressionWithoutBlockNoAttrs](expressions.md#grammar-ExpressionWithoutBlockNoAttrs)</span>

<span class="grammar-text grammar-production" id="grammar-ExpressionWithoutBlockNoAttrs" onclick="show_railroad()">[ExpressionWithoutBlockNoAttrs](expressions.md#railroad-ExpressionWithoutBlockNoAttrs)</span> →  
      <span class="grammar-text">[LiteralExpression](expressions/literal-expr.md#grammar-LiteralExpression)</span>  
    \| <span class="grammar-text">[PathExpression](expressions/path-expr.md#grammar-PathExpression)</span>  
    \| <span class="grammar-text">[OperatorExpression](expressions/operator-expr.md#grammar-OperatorExpression)</span>  
    \| <span class="grammar-text">[GroupedExpression](expressions/grouped-expr.md#grammar-GroupedExpression)</span>  
    \| <span class="grammar-text">[ArrayExpression](expressions/array-expr.md#grammar-ArrayExpression)</span>  
    \| <span class="grammar-text">[AwaitExpression](expressions/await-expr.md#grammar-AwaitExpression)</span>  
    \| <span class="grammar-text">[IndexExpression](expressions/array-expr.md#grammar-IndexExpression)</span>  
    \| <span class="grammar-text">[TupleExpression](expressions/tuple-expr.md#grammar-TupleExpression)</span>  
    \| <span class="grammar-text">[TupleIndexingExpression](expressions/tuple-expr.md#grammar-TupleIndexingExpression)</span>  
    \| <span class="grammar-text">[StructExpression](expressions/struct-expr.md#grammar-StructExpression)</span>  
    \| <span class="grammar-text">[CallExpression](expressions/call-expr.md#grammar-CallExpression)</span>  
    \| <span class="grammar-text">[MethodCallExpression](expressions/method-call-expr.md#grammar-MethodCallExpression)</span>  
    \| <span class="grammar-text">[FieldExpression](expressions/field-expr.md#grammar-FieldExpression)</span>  
    \| <span class="grammar-text">[ClosureExpression](expressions/closure-expr.md#grammar-ClosureExpression)</span>  
    \| <span class="grammar-text">[AsyncBlockExpression](expressions/block-expr.md#grammar-AsyncBlockExpression)</span>  
    \| <span class="grammar-text">[ContinueExpression](expressions/loop-expr.md#grammar-ContinueExpression)</span>  
    \| <span class="grammar-text">[BreakExpression](expressions/loop-expr.md#grammar-BreakExpression)</span>  
    \| <span class="grammar-text">[RangeExpression](expressions/range-expr.md#grammar-RangeExpression)</span>  
    \| <span class="grammar-text">[ReturnExpression](expressions/return-expr.md#grammar-ReturnExpression)</span>  
    \| <span class="grammar-text">[UnderscoreExpression](expressions/underscore-expr.md#grammar-UnderscoreExpression)</span>  
    \| <span class="grammar-text">[MacroInvocation](macros.md#grammar-MacroInvocation)</span>

<span class="grammar-text grammar-production" id="grammar-ExpressionWithBlock" onclick="show_railroad()">[ExpressionWithBlock](expressions.md#railroad-ExpressionWithBlock)</span> →  
    <span class="grammar-text">[OuterAttribute](attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-text">[ExpressionWithBlockNoAttrs](expressions.md#grammar-ExpressionWithBlockNoAttrs)</span>

<span class="grammar-text grammar-production" id="grammar-ExpressionWithBlockNoAttrs" onclick="show_railroad()">[ExpressionWithBlockNoAttrs](expressions.md#railroad-ExpressionWithBlockNoAttrs)</span> →  
      <span class="grammar-text">[BlockExpression](expressions/block-expr.md#grammar-BlockExpression)</span>  
    \| <span class="grammar-text">[ConstBlockExpression](expressions/block-expr.md#grammar-ConstBlockExpression)</span>  
    \| <span class="grammar-text">[UnsafeBlockExpression](expressions/block-expr.md#grammar-UnsafeBlockExpression)</span>  
    \| <span class="grammar-text">[LoopExpression](expressions/loop-expr.md#grammar-LoopExpression)</span>  
    \| <span class="grammar-text">[IfExpression](expressions/if-expr.md#grammar-IfExpression)</span>  
    \| <span class="grammar-text">[MatchExpression](expressions/match-expr.md#grammar-MatchExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 322px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Expression"><svg class="railroad" viewBox="0 0 322 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="expressions.md#grammar-Expression">
<text class="comment" x="50" y="25">
Expression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 204 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="expressions.md#railroad-ExpressionWithoutBlock">
<g class="nonterminal">
<rect height="22" width="204" x="59" y="42"/>
<text x="161" y="58">
ExpressionWithoutBlock</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 228 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 172 0 h 32 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="expressions.md#railroad-ExpressionWithBlock">
<g class="nonterminal">
<rect height="22" width="172" x="59" y="75"/>
<text x="145" y="91">
ExpressionWithBlock</text>
</g>
</a>
</g>
<path d=" M 297 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 287 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 544px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ExpressionWithoutBlock"><svg class="railroad" viewBox="0 0 544 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="expressions.md#grammar-ExpressionWithoutBlock">
<text class="comment" x="95" y="25">
ExpressionWithoutBlock</text>
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
<a class="link" xlink:href="expressions.md#railroad-ExpressionWithoutBlockNoAttrs">
<g class="nonterminal">
<rect height="22" width="260" x="249" y="55"/>
<text x="379" y="71">
ExpressionWithoutBlockNoAttrs</text>
</g>
</a>
<path d=" M 239 66 h 10"/>
</g>
<path d=" M 519 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 509 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 330px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ExpressionWithoutBlockNoAttrs"><svg class="railroad" viewBox="0 0 330 734" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="expressions.md#grammar-ExpressionWithoutBlockNoAttrs">
<text class="comment" x="120" y="25">
ExpressionWithoutBlockNoAttrs</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 156 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/literal-expr.md#railroad-LiteralExpression">
<g class="nonterminal">
<rect height="22" width="156" x="59" y="42"/>
<text x="137" y="58">
LiteralExpression</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 236 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 236 0 v -33"/>
<path d=" M 47 107 v 33 m 236 0 v -33"/>
<path d=" M 47 140 v 33 m 236 0 v -33"/>
<path d=" M 47 173 v 33 m 236 0 v -33"/>
<path d=" M 47 206 v 33 m 236 0 v -33"/>
<path d=" M 47 239 v 33 m 236 0 v -33"/>
<path d=" M 47 272 v 33 m 236 0 v -33"/>
<path d=" M 47 305 v 33 m 236 0 v -33"/>
<path d=" M 47 338 v 33 m 236 0 v -33"/>
<path d=" M 47 371 v 33 m 236 0 v -33"/>
<path d=" M 47 404 v 33 m 236 0 v -33"/>
<path d=" M 47 437 v 33 m 236 0 v -33"/>
<path d=" M 47 470 v 33 m 236 0 v -33"/>
<path d=" M 47 503 v 33 m 236 0 v -33"/>
<path d=" M 47 536 v 33 m 236 0 v -33"/>
<path d=" M 47 569 v 33 m 236 0 v -33"/>
<path d=" M 47 602 v 33 m 236 0 v -33"/>
<path d=" M 47 635 v 33 m 236 0 v -33"/>
<path d=" M 47 668 v 33 m 236 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 132 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/path-expr.md#railroad-PathExpression">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="75"/>
<text x="125" y="91">
PathExpression</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 164 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/operator-expr.md#railroad-OperatorExpression">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="108"/>
<text x="141" y="124">
OperatorExpression</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 156 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/grouped-expr.md#railroad-GroupedExpression">
<g class="nonterminal">
<rect height="22" width="156" x="59" y="141"/>
<text x="137" y="157">
GroupedExpression</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 140 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/array-expr.md#railroad-ArrayExpression">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="174"/>
<text x="129" y="190">
ArrayExpression</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 140 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/await-expr.md#railroad-AwaitExpression">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="207"/>
<text x="129" y="223">
AwaitExpression</text>
</g>
</a>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 140 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/array-expr.md#railroad-IndexExpression">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="240"/>
<text x="129" y="256">
IndexExpression</text>
</g>
</a>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 140 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/tuple-expr.md#railroad-TupleExpression">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="273"/>
<text x="129" y="289">
TupleExpression</text>
</g>
</a>
</g>
<path d=" M 47 305 v 0 a 12 12 0 0 0 12 12 m 212 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/tuple-expr.md#railroad-TupleIndexingExpression">
<g class="nonterminal">
<rect height="22" width="212" x="59" y="306"/>
<text x="165" y="322">
TupleIndexingExpression</text>
</g>
</a>
</g>
<path d=" M 47 338 v 0 a 12 12 0 0 0 12 12 m 148 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/struct-expr.md#railroad-StructExpression">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="339"/>
<text x="133" y="355">
StructExpression</text>
</g>
</a>
</g>
<path d=" M 47 371 v 0 a 12 12 0 0 0 12 12 m 132 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/call-expr.md#railroad-CallExpression">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="372"/>
<text x="125" y="388">
CallExpression</text>
</g>
</a>
</g>
<path d=" M 47 404 v 0 a 12 12 0 0 0 12 12 m 188 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/method-call-expr.md#railroad-MethodCallExpression">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="405"/>
<text x="153" y="421">
MethodCallExpression</text>
</g>
</a>
</g>
<path d=" M 47 437 v 0 a 12 12 0 0 0 12 12 m 140 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/field-expr.md#railroad-FieldExpression">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="438"/>
<text x="129" y="454">
FieldExpression</text>
</g>
</a>
</g>
<path d=" M 47 470 v 0 a 12 12 0 0 0 12 12 m 156 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/closure-expr.md#railroad-ClosureExpression">
<g class="nonterminal">
<rect height="22" width="156" x="59" y="471"/>
<text x="137" y="487">
ClosureExpression</text>
</g>
</a>
</g>
<path d=" M 47 503 v 0 a 12 12 0 0 0 12 12 m 188 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/block-expr.md#railroad-AsyncBlockExpression">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="504"/>
<text x="153" y="520">
AsyncBlockExpression</text>
</g>
</a>
</g>
<path d=" M 47 536 v 0 a 12 12 0 0 0 12 12 m 164 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/loop-expr.md#railroad-ContinueExpression">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="537"/>
<text x="141" y="553">
ContinueExpression</text>
</g>
</a>
</g>
<path d=" M 47 569 v 0 a 12 12 0 0 0 12 12 m 140 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/loop-expr.md#railroad-BreakExpression">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="570"/>
<text x="129" y="586">
BreakExpression</text>
</g>
</a>
</g>
<path d=" M 47 602 v 0 a 12 12 0 0 0 12 12 m 140 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/range-expr.md#railroad-RangeExpression">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="603"/>
<text x="129" y="619">
RangeExpression</text>
</g>
</a>
</g>
<path d=" M 47 635 v 0 a 12 12 0 0 0 12 12 m 148 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/return-expr.md#railroad-ReturnExpression">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="636"/>
<text x="133" y="652">
ReturnExpression</text>
</g>
</a>
</g>
<path d=" M 47 668 v 0 a 12 12 0 0 0 12 12 m 188 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/underscore-expr.md#railroad-UnderscoreExpression">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="669"/>
<text x="153" y="685">
UnderscoreExpression</text>
</g>
</a>
</g>
<path d=" M 47 701 v 0 a 12 12 0 0 0 12 12 m 140 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="macros.md#railroad-MacroInvocation">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="702"/>
<text x="129" y="718">
MacroInvocation</text>
</g>
</a>
</g>
<path d=" M 305 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 295 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 520px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ExpressionWithBlock"><svg class="railroad" viewBox="0 0 520 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="expressions.md#grammar-ExpressionWithBlock">
<text class="comment" x="81" y="25">
ExpressionWithBlock</text>
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
<a class="link" xlink:href="expressions.md#railroad-ExpressionWithBlockNoAttrs">
<g class="nonterminal">
<rect height="22" width="236" x="249" y="55"/>
<text x="367" y="71">
ExpressionWithBlockNoAttrs</text>
</g>
</a>
<path d=" M 239 66 h 10"/>
</g>
<path d=" M 495 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 485 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 314px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ExpressionWithBlockNoAttrs"><svg class="railroad" viewBox="0 0 314 239" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="expressions.md#grammar-ExpressionWithBlockNoAttrs">
<text class="comment" x="109" y="25">
ExpressionWithBlockNoAttrs</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 140 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="42"/>
<text x="129" y="58">
BlockExpression</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 220 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 220 0 v -33"/>
<path d=" M 47 107 v 33 m 220 0 v -33"/>
<path d=" M 47 140 v 33 m 220 0 v -33"/>
<path d=" M 47 173 v 33 m 220 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 188 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/block-expr.md#railroad-ConstBlockExpression">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="75"/>
<text x="153" y="91">
ConstBlockExpression</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 196 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/block-expr.md#railroad-UnsafeBlockExpression">
<g class="nonterminal">
<rect height="22" width="196" x="59" y="108"/>
<text x="157" y="124">
UnsafeBlockExpression</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 132 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/loop-expr.md#railroad-LoopExpression">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="141"/>
<text x="125" y="157">
LoopExpression</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 116 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="expressions/if-expr.md#railroad-IfExpression">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="174"/>
<text x="117" y="190">
IfExpression</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 140 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="expressions/match-expr.md#railroad-MatchExpression">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="207"/>
<text x="129" y="223">
MatchExpression</text>
</g>
</a>
</g>
<path d=" M 289 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 279 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.intro"><a class="rule-link" href="#r-expr.intro" title="expr.intro"><span>[expr<wbr>.intro]</span></a>
</div>

表达式可以有两种作用：它总会产生一个_值\_，并且可以具有_效果\_（也称为“副作用”）。

<div class="rule" id="r-expr.evaluation"><a class="rule-link" href="#r-expr.evaluation" title="expr.evaluation"><span>[expr<wbr>.evaluation]</span></a>
</div>

表达式会_求值为_一个值，并在_求值_期间产生效果。

<div class="rule" id="r-expr.operands"><a class="rule-link" href="#r-expr.operands" title="expr.operands"><span>[expr<wbr>.operands]</span></a>
</div>

许多表达式包含子表达式，这些子表达式称为该表达式的_操作数\_。

<div class="rule" id="r-expr.behavior"><a class="rule-link" href="#r-expr.behavior" title="expr.behavior"><span>[expr<wbr>.behavior]</span></a>
</div>

每种表达式的含义决定了若干事项：

- 在求值表达式时是否求值其操作数
- 求值操作数的顺序
- 如何组合操作数的值以获得表达式的值

<div class="rule" id="r-expr.structure"><a class="rule-link" href="#r-expr.structure" title="expr.structure"><span>[expr<wbr>.structure]</span></a>
</div>

以这种方式，表达式的结构决定了执行的结构。块只是另一种表达式，因此块、语句、表达式以及再次出现的块可以递归地相互嵌套到任意深度。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 我们为表达式的操作数赋予名称，以便讨论它们，但这些名称并不稳定，可能会改变。

</div>

<div class="rule" id="r-expr.precedence"><a class="rule-link" href="#r-expr.precedence" title="expr.precedence"><span>[expr<wbr>.precedence]</span></a>
</div>

## 表达式优先级

Rust 运算符和表达式的优先级按如下顺序排列，从强到弱。同一优先级层级的二元运算符按其结合性给出的顺序分组。

|运算符/表达式|结合性|
|-------|---|
|[路径](expressions/path-expr.md#r-expr.path)||
|[方法调用](expressions/method-call-expr.md#r-expr.method)||
|[字段表达式](expressions/field-expr.md#r-expr.field)|从左到右|
|[函数调用](expressions/call-expr.md#r-expr.call)、[数组索引](expressions/array-expr.md#r-expr.array.index)||
|[`?`](expressions/operator-expr.md#r-expr.try)||
|一元 [`-`](expressions/operator-expr.md#r-expr.negate) [`!`](expressions/operator-expr.md#r-expr.negate) [`*`](expressions/operator-expr.md#r-expr.deref) [借用](expressions/operator-expr.md#r-expr.operator.borrow)||
|[`as`](expressions/operator-expr.md#r-expr.as)|从左到右|
|[`*`](expressions/operator-expr.md#r-expr.arith-logic) [`/`](expressions/operator-expr.md#r-expr.arith-logic) [`%`](expressions/operator-expr.md#r-expr.arith-logic)|从左到右|
|[`+`](expressions/operator-expr.md#r-expr.arith-logic) [`-`](expressions/operator-expr.md#r-expr.arith-logic)|从左到右|
|[`<<`](expressions/operator-expr.md#r-expr.arith-logic) [`>>`](expressions/operator-expr.md#r-expr.arith-logic)|从左到右|
|[`&`](expressions/operator-expr.md#r-expr.arith-logic)|从左到右|
|[`^`](expressions/operator-expr.md#r-expr.arith-logic)|从左到右|
|[<code>\|</code>](expressions/operator-expr.md#r-expr.arith-logic)|从左到右|
|[`==`](expressions/operator-expr.md#r-expr.cmp) [`!=`](expressions/operator-expr.md#r-expr.cmp) [`<`](expressions/operator-expr.md#r-expr.cmp) [`>`](expressions/operator-expr.md#r-expr.cmp) [`<=`](expressions/operator-expr.md#r-expr.cmp) [`>=`](expressions/operator-expr.md#r-expr.cmp)|需要括号|
|[`&&`](expressions/operator-expr.md#r-expr.bool-logic)|从左到右|
|[<code>\|\|</code>](expressions/operator-expr.md#r-expr.bool-logic)|从左到右|
|[`..`](expressions/range-expr.md#r-expr.range) [`..=`](expressions/range-expr.md#r-expr.range)|需要括号|
|[`=`](expressions/operator-expr.md#r-expr.assign) [`+=`](expressions/operator-expr.md#r-expr.compound-assign) [`-=`](expressions/operator-expr.md#r-expr.compound-assign) [`*=`](expressions/operator-expr.md#r-expr.compound-assign) [`/=`](expressions/operator-expr.md#r-expr.compound-assign) [`%=`](expressions/operator-expr.md#r-expr.compound-assign) <br> [`&=`](expressions/operator-expr.md#r-expr.compound-assign) [<code>\|=</code>](expressions/operator-expr.md#r-expr.compound-assign) [`^=`](expressions/operator-expr.md#r-expr.compound-assign) [`<<=`](expressions/operator-expr.md#r-expr.compound-assign) [`>>=`](expressions/operator-expr.md#r-expr.compound-assign)|从右到左|
|[`return`](expressions/return-expr.md#r-expr.return) [`break`](expressions/loop-expr.md#r-expr.loop.break) [闭包](expressions/closure-expr.md#r-expr.closure)||

<div class="rule" id="r-expr.operand-order"><a class="rule-link" href="#r-expr.operand-order" title="expr.operand-order"><span>[expr<wbr>.operand-order]</span></a>
</div>

## 操作数的求值顺序

<div class="rule" id="r-expr.operand-order.default"><a class="rule-link" href="#r-expr.operand-order.default" title="expr.operand-order.default"><span>[expr<wbr>.operand-order<wbr>.default]</span></a>
</div>

下列各类表达式都以相同方式求值其操作数，具体见列表之后的说明。其他表达式要么不接受操作数，要么按其各自页面所述有条件地求值操作数。

- 解引用表达式
- 错误传播表达式
- 否定表达式
- 算术和逻辑二元运算符
- 比较运算符
- 类型转换表达式
- 分组表达式
- 数组表达式
- await 表达式
- 索引表达式
- 元组表达式
- 元组索引表达式
- struct 表达式
- 调用表达式
- 方法调用表达式
- 字段表达式
- break 表达式
- 范围表达式
- return 表达式

<div class="rule" id="r-expr.operand-order.operands-before-primary"><a class="rule-link" href="#r-expr.operand-order.operands-before-primary" title="expr.operand-order.operands-before-primary"><span>[expr<wbr>.operand-order<wbr>.operands-before-primary]</span></a>
</div>

这些表达式的操作数会在应用该表达式的效果之前求值。接受多个操作数的表达式会按照源代码中写出的顺序从左到右求值。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 哪些子表达式是某个表达式的操作数，由上一节所述的表达式优先级决定。

</div>

例如，两个 `next` 方法调用总会以相同顺序被调用：

```rust
# // 使用 vec 而不是数组，以避免引用
# // 因为在编写此示例时
# // 还没有稳定的拥有所有权的数组迭代器。
let mut one_two = vec![1, 2].into_iter();
assert_eq!(
    (1, 2),
    (one_two.next().unwrap(), one_two.next().unwrap())
);
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 由于这一规则会递归应用，这些表达式也会从最内层到最外层求值，并且会忽略同级表达式，直到不再有内部子表达式。

</div>

<div class="rule" id="r-expr.place-value"><a class="rule-link" href="#r-expr.place-value" title="expr.place-value"><span>[expr<wbr>.place-value]</span></a>
</div>

## 位置表达式和值表达式

<div class="rule" id="r-expr.place-value.intro"><a class="rule-link" href="#r-expr.place-value.intro" title="expr.place-value.intro"><span>[expr<wbr>.place-value<wbr>.intro]</span></a>
</div>

表达式分为两大类：位置表达式和值表达式；另外还有第三个较小的表达式类别，称为赋值目标表达式。在每个表达式内部，操作数同样可能出现在位置上下文或值上下文中。表达式的求值既取决于它自身的类别，也取决于它所处的上下文。

<div class="rule" id="r-expr.place-value.place-memory-location"><a class="rule-link" href="#r-expr.place-value.place-memory-location" title="expr.place-value.place-memory-location"><span>[expr<wbr>.place-value<wbr>.place-memory-location]</span></a>
</div>

\_位置表达式_是表示内存位置的表达式。

<div class="rule" id="r-expr.place-value.place-expr-kinds"><a class="rule-link" href="#r-expr.place-value.place-expr-kinds" title="expr.place-value.place-expr-kinds"><span>[expr<wbr>.place-value<wbr>.place-expr-kinds]</span></a>
</div>

这些表达式包括引用局部变量的[路径](expressions/path-expr.md)、[静态变量](items/static-items.md)、[解引用](expressions/operator-expr.md#the-dereference-operator)（`*expr`）、[数组索引](expressions/array-expr.md#array-and-slice-indexing-expressions)表达式（`expr[expr]`）、[字段](expressions/field-expr.md)引用（`expr.f`），以及带括号的位置表达式。

<div class="rule" id="r-expr.place-value.value-expr-kinds"><a class="rule-link" href="#r-expr.place-value.value-expr-kinds" title="expr.place-value.value-expr-kinds"><span>[expr<wbr>.place-value<wbr>.value-expr-kinds]</span></a>
</div>

所有其他表达式都是值表达式。

<div class="rule" id="r-expr.place-value.value-result"><a class="rule-link" href="#r-expr.place-value.value-result" title="expr.place-value.value-result"><span>[expr<wbr>.place-value<wbr>.value-result]</span></a>
</div>

\_值表达式_是表示实际值的表达式。

<div class="rule" id="r-expr.place-value.place-context"><a class="rule-link" href="#r-expr.place-value.place-context" title="expr.place-value.place-context"><span>[expr<wbr>.place-value<wbr>.place-context]</span></a>
</div>

以下上下文是_位置表达式_上下文：

- [复合赋值](expressions/operator-expr.md#compound-assignment-expressions)表达式的左操作数。
- 一元[借用](expressions/operator-expr.md#borrow-operators)、[原始借用](expressions/operator-expr.md#raw-borrow-operators)或[解引用](expressions/operator-expr.md#the-dereference-operator)运算符的操作数。
- [字段表达式](expressions/field-expr.md#r-expr.field)的操作数。
- [数组索引表达式](expressions/array-expr.md#r-expr.array.index)中被索引的操作数。
- [元组索引表达式](expressions/tuple-expr.md#r-expr.tuple-index)的元组操作数。
- 任何[隐式借用](#implicit-borrows)的操作数。
- [let 语句](statements.md#let-statements)的初始化器。
- [`if let`](expressions/if-expr.md#if-let-patterns)、[`match`](expressions/match-expr.md) 或 [`while let`](expressions/loop-expr.md#while-let-patterns) 表达式的[被匹配值](glossary.md#scrutinee)。
- [函数式更新](expressions/struct-expr.md#functional-update-syntax) struct 表达式的基底。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 从历史上看，位置表达式曾称为 _lvalues_，值表达式曾称为 _rvalues_。

</div>

<div class="rule" id="r-expr.place-value.assignee"><a class="rule-link" href="#r-expr.place-value.assignee" title="expr.place-value.assignee"><span>[expr<wbr>.place-value<wbr>.assignee]</span></a>
</div>

\_赋值目标表达式_是出现在[赋值](expressions/operator-expr.md#assignment-expressions)表达式左操作数中的表达式。明确地说，赋值目标表达式包括：

- 位置表达式。
- [下划线](expressions/underscore-expr.md)。
- 由赋值目标表达式组成的[元组](expressions/tuple-expr.md)。
- 由赋值目标表达式组成的[切片](expressions/array-expr.md#r-expr.array.index)。
- 由赋值目标表达式组成的[元组 struct](items/structs.md#r-items.struct.tuple)。
- 由赋值目标表达式组成的 [struct](expressions/struct-expr.md#r-expr.struct)（带有可选的命名字段）。
- [单元 struct](items/structs.md#r-items.struct.unit)

<div class="rule" id="r-expr.place-value.parenthesis"><a class="rule-link" href="#r-expr.place-value.parenthesis" title="expr.place-value.parenthesis"><span>[expr<wbr>.place-value<wbr>.parenthesis]</span></a>
</div>

赋值目标表达式内部允许任意加括号。

<div class="rule" id="r-expr.move"><a class="rule-link" href="#r-expr.move" title="expr.move"><span>[expr<wbr>.move]</span></a>
</div>

### 移动和复制类型

<div class="rule" id="r-expr.move.intro"><a class="rule-link" href="#r-expr.move.intro" title="expr.move.intro"><span>[expr<wbr>.move<wbr>.intro]</span></a>
</div>

当位置表达式在值表达式上下文中求值，或在模式中按值绑定时，它表示该内存位置_中_保存的值。

<div class="rule" id="r-expr.move.copy"><a class="rule-link" href="#r-expr.move.copy" title="expr.move.copy"><span>[expr<wbr>.move<wbr>.copy]</span></a>
</div>

如果该值的类型实现了 [`Copy`](special-types-and-traits.md#copy)，则该值会被复制。

<div class="rule" id="r-expr.move.requires-sized"><a class="rule-link" href="#r-expr.move.requires-sized" title="expr.move.requires-sized"><span>[expr<wbr>.move<wbr>.requires-sized]</span></a>
</div>

在其余情况下，如果该类型是 [`Sized`](special-types-and-traits.md#sized)，则可能可以移动该值。

<div class="rule" id="r-expr.move.movable-place"><a class="rule-link" href="#r-expr.move.movable-place" title="expr.move.movable-place"><span>[expr<wbr>.move<wbr>.movable-place]</span></a>
</div>

只有以下位置表达式可以被移出：

- 当前未被借用的[变量](variables.md)。
- [临时值](#temporaries)。
- 可以被移出且未实现 [`Drop`](special-types-and-traits.md#drop) 的位置表达式的[字段](expressions/field-expr.md)。
- 对类型为 [`Box<T>`](special-types-and-traits.md#boxt) 且本身也可以被移出的表达式进行[解引用](expressions/operator-expr.md#the-dereference-operator)所得的结果。

<div class="rule" id="r-expr.move.deinitialization"><a class="rule-link" href="#r-expr.move.deinitialization" title="expr.move.deinitialization"><span>[expr<wbr>.move<wbr>.deinitialization]</span></a>
</div>

从求值为局部变量的位置表达式中移出后，该位置会被反初始化，并且在重新初始化之前不能再次读取。

<div class="rule" id="r-expr.move.place-invalid"><a class="rule-link" href="#r-expr.move.place-invalid" title="expr.move.place-invalid"><span>[expr<wbr>.move<wbr>.place-invalid]</span></a>
</div>

在所有其他情况下，尝试在值表达式上下文中使用位置表达式都是错误。

<div class="rule" id="r-expr.mut"><a class="rule-link" href="#r-expr.mut" title="expr.mut"><span>[expr<wbr>.mut]</span></a>
</div>

### 可变性

<div class="rule" id="r-expr.mut.intro"><a class="rule-link" href="#r-expr.mut.intro" title="expr.mut.intro"><span>[expr<wbr>.mut<wbr>.intro]</span></a>
</div>

若要对一个位置表达式进行[赋值](expressions/operator-expr.md#assignment-expressions)、进行可变[借用](expressions/operator-expr.md#borrow-operators)、进行[隐式可变借用](#implicit-borrows)，或将其绑定到包含 `ref mut` 的模式，它必须是_可变的\_。我们称这些表达式为_可变位置表达式\_。相对地，其他位置表达式称为_不可变位置表达式\_。

<div class="rule" id="r-expr.mut.valid-places"><a class="rule-link" href="#r-expr.mut.valid-places" title="expr.mut.valid-places"><span>[expr<wbr>.mut<wbr>.valid-places]</span></a>
</div>

以下表达式可以是可变位置表达式上下文：

- 当前未被借用的可变[变量](variables.md)。
- [可变 `static` 条目](items/static-items.md#mutable-statics)。
- [临时值](#temporaries)。
- [字段](expressions/field-expr.md)：这会在可变位置表达式上下文中求值子表达式。
- 对 `*mut T` 指针的[解引用](expressions/operator-expr.md#the-dereference-operator)。
- 对类型为 `&mut T` 的变量或变量字段的解引用。注意：这是下一条规则要求的例外。
- 对实现了 `DerefMut` 的类型进行解引用：这随后要求被解引用的值在可变位置表达式上下文中求值。
- 对实现了 `IndexMut` 的类型进行[数组索引](expressions/array-expr.md#array-and-slice-indexing-expressions)：这随后会在可变位置表达式上下文中求值被索引的值，但不会在该上下文中求值索引。

<div class="rule" id="r-expr.temporary"><a class="rule-link" href="#r-expr.temporary" title="expr.temporary"><span>[expr<wbr>.temporary]</span></a>
</div>

### 临时值

在大多数位置表达式上下文中使用值表达式时，会创建一个临时的未命名内存位置，并用该值初始化它。该表达式随后会求值为这个位置，除非它被[提升](destructors.md#constant-promotion)为 `static`。该临时值的[drop 作用域](destructors.md#drop-scopes)通常是外围语句的末尾。

<div class="rule" id="r-expr.super-macros"><a class="rule-link" href="#r-expr.super-macros" title="expr.super-macros"><span>[expr<wbr>.super-macros]</span></a>
</div>

### super 宏

<div class="rule" id="r-expr.super-macros.intro"><a class="rule-link" href="#r-expr.super-macros.intro" title="expr.super-macros.intro"><span>[expr<wbr>.super-macros<wbr>.intro]</span></a>
</div>

某些内置宏可以创建[临时值](expressions.md#r-expr.temporary)，其[作用域](destructors.md#r-destructors.scope.temporary)可以被[延长](destructors.md#r-destructors.scope.lifetime-extension)。这些临时值是 _super 临时值_，这些宏是 _super 宏_。这些宏的[调用](macros.md#r-macro.invocation)是 _super 宏调用表达式_。这些宏的实参可以是 _super 操作数_。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 当 super 宏调用表达式是[延长表达式](destructors.md#r-destructors.scope.lifetime-extension.exprs)时，它的 super 操作数是[延长表达式](destructors.md#r-destructors.scope.lifetime-extension.exprs)，并且 super 临时值的[作用域](destructors.md#r-destructors.scope.temporary)会被[延长](destructors.md#r-destructors.scope.lifetime-extension)。见 [destructors.scope.lifetime-extension.exprs](destructors.md#r-destructors.scope.lifetime-extension.exprs)。

</div>

<div class="rule" id="r-expr.super-macros.format_args"><a class="rule-link" href="#r-expr.super-macros.format_args" title="expr.super-macros.format_args"><span>[expr<wbr>.super-macros<wbr>.format_args]</span></a>
</div>

#### `format_args!`

<div class="rule" id="r-expr.super-macros.format_args.super-operands"><a class="rule-link" href="#r-expr.super-macros.format_args.super-operands" title="expr.super-macros.format_args.super-operands"><span>[expr<wbr>.super-macros<wbr>.format_args<wbr>.super-operands]</span></a>
</div>

除格式字符串实参外，传给 [`format_args!`](../core/macro.format_args.html) 的所有实参都是 _super 操作数_。

```rust,edition2024
# fn temp() -> String { String::from("") }
// 由于该调用是延长表达式，且该实参
// 是 super 操作数，内部块就是延长表达式，
// 因此其尾表达式中创建的临时值的作用域
// 会被延长。
let _ = format_args!("{}", { &temp() }); // OK
```

<div class="rule" id="r-expr.super-macros.format_args.super-temporaries"><a class="rule-link" href="#r-expr.super-macros.format_args.super-temporaries" title="expr.super-macros.format_args.super-temporaries"><span>[expr<wbr>.super-macros<wbr>.format_args<wbr>.super-temporaries]</span></a>
</div>

[`format_args!`](../core/macro.format_args.html) 的 super 操作数会被[隐式借用](expressions.md#r-expr.implicit-borrow)，因此是[位置表达式上下文](expressions.md#r-expr.place-value)。当[值表达式](expressions.md#r-expr.place-value)作为实参传入时，它会创建一个 _super 临时值_。

```rust
# fn temp() -> String { String::from("") }
let x = format_args!("{}", temp());
x; // <-- 临时值的作用域被延长，因此允许在这里使用。
```

对 [`format_args!`](../core/macro.format_args.html) 的调用进行展开时，有时会创建其他内部 _super 临时值_。

```rust,compile_fail,E0716
let x = {
    // 此调用会创建一个内部临时值。
    let x = format_args!("{:?}", 0);
    x // <-- 临时值的作用域被延长，因此允许在这里使用它。
}; // <-- 临时值在这里被丢弃。
x; // ERROR
```

```rust
// 此调用不会创建内部临时值。
let x = { let x = format_args!("{}", 0); x };
x; // OK
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [`format_args!`](../core/macro.format_args.html) 何时会或不会创建内部临时值，其细节目前未指定。

</div>

<div class="rule" id="r-expr.super-macros.pin"><a class="rule-link" href="#r-expr.super-macros.pin" title="expr.super-macros.pin"><span>[expr<wbr>.super-macros<wbr>.pin]</span></a>
</div>

#### `pin!`

<div class="rule" id="r-expr.super-macros.pin.super-operands"><a class="rule-link" href="#r-expr.super-macros.pin.super-operands" title="expr.super-macros.pin.super-operands"><span>[expr<wbr>.super-macros<wbr>.pin<wbr>.super-operands]</span></a>
</div>

[`pin!`](../core/pin/macro.pin.html) 的实参是 _super 操作数_。

```rust,edition2024
# use core::pin::pin;
# fn temp() {}
// 与上面的 `format_args!` 相同。
let _ = pin!({ &temp() }); // OK
```

<div class="rule" id="r-expr.super-macros.pin.super-temporaries"><a class="rule-link" href="#r-expr.super-macros.pin.super-temporaries" title="expr.super-macros.pin.super-temporaries"><span>[expr<wbr>.super-macros<wbr>.pin<wbr>.super-temporaries]</span></a>
</div>

[`pin!`](../core/pin/macro.pin.html) 的实参是[值表达式上下文](expressions.md#r-expr.place-value)，并会创建一个 _super 临时值_。

```rust
# use core::pin::pin;
# fn temp() {}
// 该实参会求值到一个 super 临时值中。
let x = pin!(temp());
// 临时值的作用域被延长，因此允许在这里使用它。
x; // OK
```

<div class="rule" id="r-expr.implicit-borrow"><a class="rule-link" href="#r-expr.implicit-borrow" title="expr.implicit-borrow"><span>[expr<wbr>.implicit-borrow]</span></a>
</div>

### 隐式借用

<div class="rule" id="r-expr.implicit-borrow-intro"><a class="rule-link" href="#r-expr.implicit-borrow-intro" title="expr.implicit-borrow-intro"><span>[expr<wbr>.implicit-borrow-intro]</span></a>
</div>

某些表达式会通过隐式借用一个表达式而将其视为位置表达式。例如，可以直接比较两个未定大小的[切片](types/slice.md)是否相等，因为 `==` 运算符会隐式借用其操作数：

```rust
# let c = [1, 2, 3];
# let d = vec![1, 2, 3];
let a: &[i32];
let b: &[i32];
# a = &c;
# b = &d;
// ...
*a == *b;
// 等价形式：
::std::cmp::PartialEq::eq(&*a, &*b);
```

<div class="rule" id="r-expr.implicit-borrow.application"><a class="rule-link" href="#r-expr.implicit-borrow.application" title="expr.implicit-borrow.application"><span>[expr<wbr>.implicit-borrow<wbr>.application]</span></a>
</div>

以下表达式中可能会发生隐式借用：

- [方法调用](expressions/method-call-expr.md)表达式中的左操作数。
- [字段](expressions/field-expr.md)表达式中的左操作数。
- [调用表达式](expressions/call-expr.md)中的左操作数。
- [数组索引](expressions/array-expr.md#array-and-slice-indexing-expressions)表达式中的左操作数。
- [解引用运算符](expressions/operator-expr.md#the-dereference-operator)（`*`）的操作数。
- [比较](expressions/operator-expr.md#comparison-operators)的操作数。
- [复合赋值](expressions/operator-expr.md#compound-assignment-expressions)的左操作数。
- 传给 [`format_args!`](../core/macro.format_args.html) 的实参，但格式字符串除外。

<div class="rule" id="r-expr.overload"><a class="rule-link" href="#r-expr.overload" title="expr.overload"><span>[expr<wbr>.overload]</span></a>
</div>

## 重载 trait

以下许多运算符和表达式也可以使用 `std::ops` 或 `std::cmp` 中的 trait 为其他类型重载。这些 trait 也以相同名称存在于 `core::ops` 和 `core::cmp` 中。

<div class="rule" id="r-expr.attr"><a class="rule-link" href="#r-expr.attr" title="expr.attr"><span>[expr<wbr>.attr]</span></a>
</div>

## 表达式属性

<div class="rule" id="r-expr.attr.restriction"><a class="rule-link" href="#r-expr.attr.restriction" title="expr.attr.restriction"><span>[expr<wbr>.attr<wbr>.restriction]</span></a>
</div>

表达式前的[外部属性](attributes.md)只允许出现在少数特定情形中：

- 出现在用作[语句](statements.md)的表达式之前。
- [数组表达式](expressions/array-expr.md)、[元组表达式](expressions/tuple-expr.md)、[调用表达式](expressions/call-expr.md)和元组式 [struct](expressions/struct-expr.md) 表达式的元素。
- [块表达式](expressions/block-expr.md)的尾表达式。

<!-- Keep list in sync with block-expr.md -->

<div class="rule" id="r-expr.attr.never-before"><a class="rule-link" href="#r-expr.attr.never-before" title="expr.attr.never-before"><span>[expr<wbr>.attr<wbr>.never-before]</span></a>
</div>

它们绝不允许出现在以下内容之前：

- [范围](expressions/range-expr.md)表达式。
- 二元运算符表达式（[ArithmeticOrLogicalExpression](expressions/operator-expr.md#grammar-ArithmeticOrLogicalExpression)、[ComparisonExpression](expressions/operator-expr.md#grammar-ComparisonExpression)、[LazyBooleanExpression](expressions/operator-expr.md#grammar-LazyBooleanExpression)、[TypeCastExpression](expressions/operator-expr.md#grammar-TypeCastExpression)、[AssignmentExpression](expressions/operator-expr.md#grammar-AssignmentExpression)、[CompoundAssignmentExpression](expressions/operator-expr.md#grammar-CompoundAssignmentExpression)）。