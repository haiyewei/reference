<div class="rule" id="r-expr.tuple"><a class="rule-link" href="#r-expr.tuple" title="expr.tuple"><span>[expr<wbr>.tuple]</span></a>
</div>

# 元组和元组索引表达式

## 元组表达式

<div class="rule" id="r-expr.tuple.syntax"><a class="rule-link" href="#r-expr.tuple.syntax" title="expr.tuple.syntax"><span>[expr<wbr>.tuple<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-TupleExpression" onclick="show_railroad()">[TupleExpression](tuple-expr.md#railroad-TupleExpression)</span> → <span class="grammar-literal">(</span> <span class="grammar-text">[TupleElements](tuple-expr.md#grammar-TupleElements)</span><sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-TupleElements" onclick="show_railroad()">[TupleElements](tuple-expr.md#railroad-TupleElements)</span> → ( <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">,</span> )<sup>+</sup> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 318px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TupleExpression"><svg class="railroad" viewBox="0 0 318 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tuple-expr.md#grammar-TupleExpression">
<text class="comment" x="67" y="25">
TupleExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="55"/>
<text x="49" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 73 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="tuple-expr.md#railroad-TupleElements">
<g class="nonterminal">
<rect height="22" width="124" x="97" y="55"/>
<text x="159" y="71">
TupleElements</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="255" y="55"/>
<text x="269" y="71">
)</text>
</g>
<path d=" M 63 66 h 10"/>
<path d=" M 245 66 h 10"/>
</g>
<path d=" M 293 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 283 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 390px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TupleElements"><svg class="railroad" viewBox="0 0 390 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tuple-expr.md#grammar-TupleElements">
<text class="comment" x="60" y="25">
TupleElements</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="repeat">
<path d=" M 35 66 h 12 m 138 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -138 m 72 0 l 5 -5 m 0 10 l -5 -5 m -72 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="47" y="55"/>
<text x="97" y="71">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="157" y="55"/>
<text x="171" y="71">
,</text>
</g>
<path d=" M 147 66 h 10"/>
</g>
</g>
<g class="optional">
<path d=" M 207 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="231" y="55"/>
<text x="281" y="71">
Expression</text>
</g>
</a>
</g>
<path d=" M 197 66 h 10"/>
</g>
<path d=" M 365 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 355 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.tuple.result"><a class="rule-link" href="#r-expr.tuple.result" title="expr.tuple.result"><span>[expr<wbr>.tuple<wbr>.result]</span></a>
</div>

\_元组表达式_构造[元组值](../types/tuple.md)。

<div class="rule" id="r-expr.tuple.intro"><a class="rule-link" href="#r-expr.tuple.intro" title="expr.tuple.intro"><span>[expr<wbr>.tuple<wbr>.intro]</span></a>
</div>

元组表达式的语法是用括号括起、以逗号分隔的表达式列表，称为_元组初始化器操作数\_。

<div class="rule" id="r-expr.tuple.unary-tuple-restriction"><a class="rule-link" href="#r-expr.tuple.unary-tuple-restriction" title="expr.tuple.unary-tuple-restriction"><span>[expr<wbr>.tuple<wbr>.unary-tuple-restriction]</span></a>
</div>

一元元组表达式要求在其元组初始化器操作数后有一个逗号，以便与[带括号表达式](grouped-expr.md)消除歧义。

<div class="rule" id="r-expr.tuple.value"><a class="rule-link" href="#r-expr.tuple.value" title="expr.tuple.value"><span>[expr<wbr>.tuple<wbr>.value]</span></a>
</div>

元组表达式是[值表达式](../expressions.md#place-expressions-and-value-expressions)，会求值为一个新构造的元组类型的值。

<div class="rule" id="r-expr.tuple.type"><a class="rule-link" href="#r-expr.tuple.type" title="expr.tuple.type"><span>[expr<wbr>.tuple<wbr>.type]</span></a>
</div>

元组初始化器操作数的数量就是所构造元组的元数。

<div class="rule" id="r-expr.tuple.unit"><a class="rule-link" href="#r-expr.tuple.unit" title="expr.tuple.unit"><span>[expr<wbr>.tuple<wbr>.unit]</span></a>
</div>

没有任何元组初始化器操作数的元组表达式会生成单元元组。

<div class="rule" id="r-expr.tuple.fields"><a class="rule-link" href="#r-expr.tuple.fields" title="expr.tuple.fields"><span>[expr<wbr>.tuple<wbr>.fields]</span></a>
</div>

对于其他元组表达式，第一个写出的元组初始化器操作数初始化字段 `0`，后续操作数依次初始化下一个编号更高的字段。例如，在元组表达式 `('a', 'b', 'c')` 中，`'a'` 初始化字段 `0` 的值，`'b'` 初始化字段 `1`，`'c'` 初始化字段 `2`。

元组表达式及其类型的示例：

|表达式|类型|
|---|--|
|`()`|`()`（单元）|
|`(0.0, 4.5)`|`(f64, f64)`|
|`("x".to_string(), )`|`(String, )`|
|`("a", 4usize, true)`|`(&'static str, usize, bool)`|

<div class="rule" id="r-expr.tuple-index"><a class="rule-link" href="#r-expr.tuple-index" title="expr.tuple-index"><span>[expr<wbr>.tuple-index]</span></a>
</div>

## 元组索引表达式

<div class="rule" id="r-expr.tuple-index.syntax"><a class="rule-link" href="#r-expr.tuple-index.syntax" title="expr.tuple-index.syntax"><span>[expr<wbr>.tuple-index<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-TupleIndexingExpression" onclick="show_railroad()">[TupleIndexingExpression](tuple-expr.md#railroad-TupleIndexingExpression)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">.</span> <span class="grammar-text">[TUPLE_INDEX](../tokens.md#grammar-TUPLE_INDEX)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 326px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TupleIndexingExpression"><svg class="railroad" viewBox="0 0 326 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tuple-expr.md#grammar-TupleIndexingExpression">
<text class="comment" x="99" y="25">
TupleIndexingExpression</text>
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
<rect height="22" rx="10" ry="10" width="28" x="145" y="42"/>
<text x="159" y="58">
.</text>
</g>
<a class="link" xlink:href="../tokens.md#railroad-TUPLE_INDEX">
<g class="nonterminal">
<rect height="22" width="108" x="183" y="42"/>
<text x="237" y="58">
TUPLE_INDEX</text>
</g>
</a>
<path d=" M 135 53 h 10"/>
<path d=" M 173 53 h 10"/>
</g>
<path d=" M 301 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 291 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.tuple-index.intro"><a class="rule-link" href="#r-expr.tuple-index.intro" title="expr.tuple-index.intro"><span>[expr<wbr>.tuple-index<wbr>.intro]</span></a>
</div>

\_元组索引表达式_访问[元组](../types/tuple.md)和[元组结构体](../types/struct.md)的字段。

元组索引表达式的语法是一个称为_元组操作数_的表达式，后跟一个 `.`，最后跟一个元组索引。

<div class="rule" id="r-expr.tuple-index.index-syntax"><a class="rule-link" href="#r-expr.tuple-index.index-syntax" title="expr.tuple-index.index-syntax"><span>[expr<wbr>.tuple-index<wbr>.index-syntax]</span></a>
</div>

\_元组索引_的语法是不带前导零、下划线或后缀的[十进制字面量](../tokens.md#integer-literals)。例如，`0` 和 `2` 是有效的元组索引，而 `01`、`0_` 和 `0i32` 不是。

<div class="rule" id="r-expr.tuple-index.required-type"><a class="rule-link" href="#r-expr.tuple-index.required-type" title="expr.tuple-index.required-type"><span>[expr<wbr>.tuple-index<wbr>.required-type]</span></a>
</div>

元组操作数的类型必须是[元组类型](../types/tuple.md)或[元组结构体](../types/struct.md)。

<div class="rule" id="r-expr.tuple-index.index-name-operand"><a class="rule-link" href="#r-expr.tuple-index.index-name-operand" title="expr.tuple-index.index-name-operand"><span>[expr<wbr>.tuple-index<wbr>.index-name-operand]</span></a>
</div>

元组索引必须是元组操作数类型的某个字段名。

<div class="rule" id="r-expr.tuple-index.result"><a class="rule-link" href="#r-expr.tuple-index.result" title="expr.tuple-index.result"><span>[expr<wbr>.tuple-index<wbr>.result]</span></a>
</div>

元组索引表达式的求值除了求值其元组操作数外，没有其他副作用。作为[位置表达式](../expressions.md#place-expressions-and-value-expressions)，它求值为元组操作数中与元组索引同名字段的位置。

元组索引表达式的示例：

```rust
// Indexing a tuple
let pair = ("a string", 2);
assert_eq!(pair.1, 2);

// Indexing a tuple struct
# struct Point(f32, f32);
let point = Point(1.0, 0.0);
assert_eq!(point.0, 1.0);
assert_eq!(point.1, 0.0);
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 与字段访问表达式不同，元组索引表达式可以作为[调用表达式](./call-expr.md)的函数操作数，因为方法名不能是数字，所以它不会与方法调用混淆。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 虽然数组和切片也有元素，但必须使用[数组或切片索引表达式](array-expr.md#array-and-slice-indexing-expressions)或[切片模式](../patterns.md#slice-patterns)来访问它们的元素。

</div>
