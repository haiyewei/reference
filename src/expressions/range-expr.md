<div class="rule" id="r-expr.range"><a class="rule-link" href="#r-expr.range" title="expr.range"><span>[expr<wbr>.range]</span></a>
</div>

# 范围表达式

<div class="rule" id="r-expr.range.syntax"><a class="rule-link" href="#r-expr.range.syntax" title="expr.range.syntax"><span>[expr<wbr>.range<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>Syntax</sup>** <br> <span class="grammar-text grammar-production" id="grammar-RangeExpression" onclick="show_railroad()">[RangeExpression](range-expr.md#railroad-RangeExpression)</span> →  
      <span class="grammar-text">[RangeExpr](range-expr.md#grammar-RangeExpr)</span>  
    \| <span class="grammar-text">[RangeFromExpr](range-expr.md#grammar-RangeFromExpr)</span>  
    \| <span class="grammar-text">[RangeToExpr](range-expr.md#grammar-RangeToExpr)</span>  
    \| <span class="grammar-text">[RangeFullExpr](range-expr.md#grammar-RangeFullExpr)</span>  
    \| <span class="grammar-text">[RangeInclusiveExpr](range-expr.md#grammar-RangeInclusiveExpr)</span>  
    \| <span class="grammar-text">[RangeToInclusiveExpr](range-expr.md#grammar-RangeToInclusiveExpr)</span>

<span class="grammar-text grammar-production" id="grammar-RangeExpr" onclick="show_railroad()">[RangeExpr](range-expr.md#railroad-RangeExpr)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">..</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<span class="grammar-text grammar-production" id="grammar-RangeFromExpr" onclick="show_railroad()">[RangeFromExpr](range-expr.md#railroad-RangeFromExpr)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">..</span>

<span class="grammar-text grammar-production" id="grammar-RangeToExpr" onclick="show_railroad()">[RangeToExpr](range-expr.md#railroad-RangeToExpr)</span> → <span class="grammar-literal">..</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<span class="grammar-text grammar-production" id="grammar-RangeFullExpr" onclick="show_railroad()">[RangeFullExpr](range-expr.md#railroad-RangeFullExpr)</span> → <span class="grammar-literal">..</span>

<span class="grammar-text grammar-production" id="grammar-RangeInclusiveExpr" onclick="show_railroad()">[RangeInclusiveExpr](range-expr.md#railroad-RangeInclusiveExpr)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">..=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<span class="grammar-text grammar-production" id="grammar-RangeToInclusiveExpr" onclick="show_railroad()">[RangeToInclusiveExpr](range-expr.md#railroad-RangeToInclusiveExpr)</span> → <span class="grammar-literal">..=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 306px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeExpression"><svg class="railroad" viewBox="0 0 306 239" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="range-expr.md#grammar-RangeExpression">
<text class="comment" x="67" y="25">
RangeExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 92 0 h 120 m -57 0 l -5 -5 m 0 10 l 5 -5 m 57 0"/>
<g class="sequence">
<a class="link" xlink:href="range-expr.md#railroad-RangeExpr">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="42"/>
<text x="105" y="58">
RangeExpr</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 212 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 212 0 v -33"/>
<path d=" M 47 107 v 33 m 212 0 v -33"/>
<path d=" M 47 140 v 33 m 212 0 v -33"/>
<path d=" M 47 173 v 33 m 212 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 124 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="range-expr.md#railroad-RangeFromExpr">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="75"/>
<text x="121" y="91">
RangeFromExpr</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 108 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="range-expr.md#railroad-RangeToExpr">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="108"/>
<text x="113" y="124">
RangeToExpr</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 124 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="range-expr.md#railroad-RangeFullExpr">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="141"/>
<text x="121" y="157">
RangeFullExpr</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 164 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="range-expr.md#railroad-RangeInclusiveExpr">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="174"/>
<text x="141" y="190">
RangeInclusiveExpr</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 188 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="range-expr.md#railroad-RangeToInclusiveExpr">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="207"/>
<text x="153" y="223">
RangeToInclusiveExpr</text>
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
<div style="width: 326px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeExpr"><svg class="railroad" viewBox="0 0 326 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="range-expr.md#grammar-RangeExpr">
<text class="comment" x="46" y="25">
RangeExpr</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="42"/>
<text x="85" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="145" y="42"/>
<text x="163" y="58">
..</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="191" y="42"/>
<text x="241" y="58">
Expression</text>
</g>
</a>
<path d=" M 135 53 h 10"/>
<path d=" M 181 53 h 10"/>
</g>
<path d=" M 301 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 291 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 216px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeFromExpr"><svg class="railroad" viewBox="0 0 216 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="range-expr.md#grammar-RangeFromExpr">
<text class="comment" x="60" y="25">
RangeFromExpr</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="42"/>
<text x="85" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="145" y="42"/>
<text x="163" y="58">
..</text>
</g>
<path d=" M 135 53 h 10"/>
</g>
<path d=" M 191 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 181 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 216px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeToExpr"><svg class="railroad" viewBox="0 0 216 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="range-expr.md#grammar-RangeToExpr">
<text class="comment" x="53" y="25">
RangeToExpr</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="42"/>
<text x="53" y="58">
..</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="81" y="42"/>
<text x="131" y="58">
Expression</text>
</g>
</a>
<path d=" M 71 53 h 10"/>
</g>
<path d=" M 191 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 181 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 121px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeFullExpr"><svg class="railroad" viewBox="0 0 121 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="range-expr.md#grammar-RangeFullExpr">
<text class="comment" x="60" y="25">
RangeFullExpr</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="42"/>
<text x="53" y="58">
..</text>
</g>
<path d=" M 81 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 71 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 334px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeInclusiveExpr"><svg class="railroad" viewBox="0 0 334 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="range-expr.md#grammar-RangeInclusiveExpr">
<text class="comment" x="78" y="25">
RangeInclusiveExpr</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="42"/>
<text x="85" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="145" y="42"/>
<text x="167" y="58">
..=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="199" y="42"/>
<text x="249" y="58">
Expression</text>
</g>
</a>
<path d=" M 135 53 h 10"/>
<path d=" M 189 53 h 10"/>
</g>
<path d=" M 309 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 299 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 224px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeToInclusiveExpr"><svg class="railroad" viewBox="0 0 224 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="range-expr.md#grammar-RangeToInclusiveExpr">
<text class="comment" x="88" y="25">
RangeToInclusiveExpr</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="42"/>
<text x="57" y="58">
..=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="89" y="42"/>
<text x="139" y="58">
Expression</text>
</g>
</a>
<path d=" M 79 53 h 10"/>
</g>
<path d=" M 199 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 189 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.range.behavior"><a class="rule-link" href="#r-expr.range.behavior" title="expr.range.behavior"><span>[expr<wbr>.range<wbr>.behavior]</span></a>
</div>

`..` 和 `..=` 运算符会根据下表构造某个 `std::ops::Range`（或 `core::ops::Range`）变体的对象：

|产生式|语法|类型|范围|
|---|--|--|--|
|[RangeExpr](range-expr.md#grammar-RangeExpr)|start`..`end|[std::ops::Range](../../core/ops/range/struct.Range.html)|start ≤ x \< end|
|[RangeFromExpr](range-expr.md#grammar-RangeFromExpr)|start`..`|[std::ops::RangeFrom](../../core/ops/range/struct.RangeFrom.html)|start ≤ x|
|[RangeToExpr](range-expr.md#grammar-RangeToExpr)|`..`end|[std::ops::RangeTo](../../core/ops/range/struct.RangeTo.html)|x \< end|
|[RangeFullExpr](range-expr.md#grammar-RangeFullExpr)|`..`|[std::ops::RangeFull](../../core/ops/range/struct.RangeFull.html)|\-|
|[RangeInclusiveExpr](range-expr.md#grammar-RangeInclusiveExpr)|start`..=`end|[std::ops::RangeInclusive](../../core/ops/range/struct.RangeInclusive.html)|start ≤ x ≤ end|
|[RangeToInclusiveExpr](range-expr.md#grammar-RangeToInclusiveExpr)|`..=`end|[std::ops::RangeToInclusive](../../core/ops/range/struct.RangeToInclusive.html)|x ≤ end|

示例：

```rust
1..2;   // std::ops::Range
3..;    // std::ops::RangeFrom
..4;    // std::ops::RangeTo
..;     // std::ops::RangeFull
5..=6;  // std::ops::RangeInclusive
..=7;   // std::ops::RangeToInclusive
```

<div class="rule" id="r-expr.range.equivalence"><a class="rule-link" href="#r-expr.range.equivalence" title="expr.range.equivalence"><span>[expr<wbr>.range<wbr>.equivalence]</span></a>
</div>

以下表达式是等价的。

```rust
let x = std::ops::Range {start: 0, end: 10};
let y = 0..10;

assert_eq!(x, y);
```

<div class="rule" id="r-expr.range.for"><a class="rule-link" href="#r-expr.range.for" title="expr.range.for"><span>[expr<wbr>.range<wbr>.for]</span></a>
</div>

范围可以用于 `for` 循环：

```rust
for i in 1..11 {
    println!("{}", i);
}
```