<div class="rule" id="r-statement"><a class="rule-link" href="#r-statement" title="statement"><span>[statement]</span></a>
</div>

# 语句

<div class="rule" id="r-statement.syntax"><a class="rule-link" href="#r-statement.syntax" title="statement.syntax"><span>[statement<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Statement" onclick="show_railroad()">[Statement](statements.md#railroad-Statement)</span> →  
      <span class="grammar-literal">;</span>  
    \| <span class="grammar-text">[Item](items.md#grammar-Item)</span>  
    \| <span class="grammar-text">[LetStatement](statements.md#grammar-LetStatement)</span>  
    \| <span class="grammar-text">[ExpressionStatement](statements.md#grammar-ExpressionStatement)</span>  
    \| <span class="grammar-text">[OuterAttribute](attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-text">[MacroInvocationSemi](macros.md#grammar-MacroInvocationSemi)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 504px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Statement"><svg class="railroad" viewBox="0 0 504 231" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="statements.md#grammar-Statement">
<text class="comment" x="46" y="25">
Statement</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 28 0 h 382 m -188 0 l -5 -5 m 0 10 l 5 -5 m 188 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="42"/>
<text x="73" y="58">
;</text>
</g>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 410 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 410 0 v -33"/>
<path d=" M 47 107 v 33 m 410 0 v -33"/>
<path d=" M 47 140 v 33 m 410 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 52 0 h 334 m -164 0 l -5 -5 m 0 10 l 5 -5 m 164 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="items.md#railroad-Item">
<g class="nonterminal">
<rect height="22" width="52" x="59" y="75"/>
<text x="85" y="91">
Item</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 116 0 h 270 m -132 0 l -5 -5 m 0 10 l 5 -5 m 132 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="statements.md#railroad-LetStatement">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="108"/>
<text x="117" y="124">
LetStatement</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 172 0 h 214 m -104 0 l -5 -5 m 0 10 l 5 -5 m 104 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="statements.md#railroad-ExpressionStatement">
<g class="nonterminal">
<rect height="22" width="172" x="59" y="141"/>
<text x="145" y="157">
ExpressionStatement</text>
</g>
</a>
</g>
<path d=" M 47 173 v 12 a 12 12 0 0 0 12 12 m 386 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="optional">
<path d=" M 59 197 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 83 197 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="95" y="186"/>
<text x="161" y="202">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<a class="link" xlink:href="macros.md#railroad-MacroInvocationSemi">
<g class="nonterminal">
<rect height="22" width="172" x="273" y="186"/>
<text x="359" y="202">
MacroInvocationSemi</text>
</g>
</a>
<path d=" M 263 197 h 10"/>
</g>
</g>
<path d=" M 479 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 469 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-statement.intro"><a class="rule-link" href="#r-statement.intro" title="statement.intro"><span>[statement<wbr>.intro]</span></a>
</div>

\_语句_是[块](expressions/block-expr.md)的组成部分，而块又是外层[表达式](expressions.md)或[函数](items/functions.md)的组成部分。

<div class="rule" id="r-statement.kind"><a class="rule-link" href="#r-statement.kind" title="statement.kind"><span>[statement<wbr>.kind]</span></a>
</div>

Rust 有两种语句：[声明语句](#declaration-statements)和[表达式语句](#expression-statements)。

<div class="rule" id="r-statement.decl"><a class="rule-link" href="#r-statement.decl" title="statement.decl"><span>[statement<wbr>.decl]</span></a>
</div>

## 声明语句

_声明语句_会向外围语句块中引入一个或多个_名称_。被声明的名称可以表示新的变量或新的[项](items.md)。

声明语句有两种：项声明和 `let` 语句。

<div class="rule" id="r-statement.item"><a class="rule-link" href="#r-statement.item" title="statement.item"><span>[statement<wbr>.item]</span></a>
</div>

### 项声明

<div class="rule" id="r-statement.item.intro"><a class="rule-link" href="#r-statement.item.intro" title="statement.item.intro"><span>[statement<wbr>.item<wbr>.intro]</span></a>
</div>

\_项声明语句_的语法形式与[模块](items/modules.md)内的[项声明](items.md)相同。

<div class="rule" id="r-statement.item.scope"><a class="rule-link" href="#r-statement.item.scope" title="statement.item.scope"><span>[statement<wbr>.item<wbr>.scope]</span></a>
</div>

在语句块内声明项会将其[作用域](names/scopes.md)限制为包含该语句的块。该项不会被赋予[规范路径](paths.md#canonical-paths)，它可能声明的任何子项也不会被赋予规范路径。

<div class="rule" id="r-statement.item.associated-scope"><a class="rule-link" href="#r-statement.item.associated-scope" title="statement.item.associated-scope"><span>[statement<wbr>.item<wbr>.associated-scope]</span></a>
</div>

对此的例外是，由[实现](items/implementations.md)定义的关联项，只要该项以及适用时的 trait 可访问，就仍可在外层作用域中访问。除此之外，它的含义与在模块内声明该项相同。

<div class="rule" id="r-statement.item.outer-generics"><a class="rule-link" href="#r-statement.item.outer-generics" title="statement.item.outer-generics"><span>[statement<wbr>.item<wbr>.outer-generics]</span></a>
</div>

不会隐式捕获所在函数的泛型参数、参数和局部变量。例如，`inner` 不能访问 `outer_var`。

```rust
fn outer() {
  let outer_var = true;

  fn inner() { /* outer_var is not in scope here */ }

  inner();
}
```

<div class="rule" id="r-statement.let"><a class="rule-link" href="#r-statement.let" title="statement.let"><span>[statement<wbr>.let]</span></a>
</div>

### `let` 语句

<div class="rule" id="r-statement.let.syntax"><a class="rule-link" href="#r-statement.let.syntax" title="statement.let.syntax"><span>[statement<wbr>.let<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-LetStatement" onclick="show_railroad()">[LetStatement](statements.md#railroad-LetStatement)</span> →  
    <span class="grammar-text">[OuterAttribute](attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-literal">let</span> <span class="grammar-text">[PatternNoTopAlt](patterns.md#grammar-PatternNoTopAlt)</span> ( <span class="grammar-literal">:</span> <span class="grammar-text">[Type](types.md#grammar-Type)</span> )<sup>?</sup>  
    (  
          <span class="grammar-literal">=</span> <span class="grammar-text">[Expression](expressions.md#grammar-Expression)</span>  
        \| <span class="grammar-literal">=</span> <span class="grammar-text">[Expression](expressions.md#grammar-Expression)</span><sub class="grammar-text">除 [LazyBooleanExpression](expressions/operator-expr.md#grammar-LazyBooleanExpression) 外，或者以 `}` 结尾</sub>  
              <span class="grammar-literal">else</span> <span class="grammar-text">[BlockExpressionNoInnerAttributes](expressions/block-expr.md#grammar-BlockExpressionNoInnerAttributes)</span>  
    )<sup>?</sup> <span class="grammar-literal">;</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 688px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LetStatement"><svg class="railroad" viewBox="0 0 688 282" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="statements.md#grammar-LetStatement">
<text class="comment" x="57" y="25">
LetStatement</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 66 h 12"/>
<path d=" M 603 66 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 1 -12 12 h -556 m 281 0 l 5 -5 m 0 10 l -5 -5 m -281 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 71 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="83" y="55"/>
<text x="149" y="71">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="261" y="55"/>
<text x="283" y="71">
let</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-PatternNoTopAlt">
<g class="nonterminal">
<rect height="22" width="140" x="315" y="55"/>
<text x="385" y="71">
PatternNoTopAlt</text>
</g>
</a>
<g class="optional">
<path d=" M 465 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 90 m -42 0 l -5 -5 m 0 10 l 5 -5 m 42 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="489" y="55"/>
<text x="503" y="71">
:</text>
</g>
<a class="link" xlink:href="types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="527" y="55"/>
<text x="553" y="71">
Type</text>
</g>
</a>
<path d=" M 517 66 h 10"/>
</g>
</g>
<path d=" M 251 66 h 10"/>
<path d=" M 305 66 h 10"/>
<path d=" M 455 66 h 10"/>
</g>
<path d=" M 629 138 h 0 a 12 12 0 0 0 12 -12 v -48 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 138 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 496 m -245 0 l -5 -5 m 0 10 l 5 -5 m 245 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="choice">
<path d=" M 71 138 h 24 m 138 0 h 334 m -164 0 l -5 -5 m 0 10 l 5 -5 m 164 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="95" y="127"/>
<text x="109" y="143">
=</text>
</g>
<a class="link" xlink:href="expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="133" y="127"/>
<text x="183" y="143">
Expression</text>
</g>
</a>
<path d=" M 123 138 h 10"/>
</g>
<path d=" M 71 138 a 12 12 0 0 1 12 12 v 9 m 472 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 83 159 v 35 a 12 12 0 0 0 12 12 m 448 0 h 0 a 12 12 0 0 0 12 -12 v -35"/>
<g class="stack">
<path d=" M 95 206 h 12"/>
<path d=" M 507 206 a 12 12 0 0 1 12 12 v 7 a 12 12 0 0 1 -12 12 h -400 m 203 0 l 5 -5 m 0 10 l -5 -5 m -203 0 a 12 12 0 0 0 -12 12 v 0 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="107" y="195"/>
<text x="121" y="211">
=</text>
</g>
<g class="labeledbox">
<rect height="66" width="362" x="145" y="159"/>
<path d=" M 145 206 h 8 m 100 0 h 254 m -124 0 l -5 -5 m 0 10 l 5 -5 m 124 0"/>
<text class="comment" x="326" y="182">
except LazyBooleanExpression or end with a `}`</text>
<a class="link" xlink:href="expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="153" y="195"/>
<text x="203" y="211">
Expression</text>
</g>
</a>
</g>
<path d=" M 135 206 h 10"/>
</g>
<path d=" M 453 261 h 66 m -30 0 l -5 -5 m 0 10 l 5 -5 m 30 0 a 12 12 0 0 0 12 -12 v -31 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="107" y="250"/>
<text x="133" y="266">
else</text>
</g>
<a class="link" xlink:href="expressions/block-expr.md#railroad-BlockExpressionNoInnerAttributes">
<g class="nonterminal">
<rect height="22" width="284" x="169" y="250"/>
<text x="311" y="266">
BlockExpressionNoInnerAttributes</text>
</g>
</a>
<path d=" M 159 261 h 10"/>
</g>
</g>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="601" y="127"/>
<text x="615" y="143">
;</text>
</g>
<path d=" M 591 138 h 10"/>
</g>
</g>
<path d=" M 663 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 653 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-statement.let.intro"><a class="rule-link" href="#r-statement.let.intro" title="statement.let.intro"><span>[statement<wbr>.let<wbr>.intro]</span></a>
</div>

\_`let` 语句_会引入一组新的[变量](variables.md)，这些变量由[模式](patterns.md)给出。模式后面可以可选地跟随类型标注，然后要么结束，要么跟随一个初始化表达式以及可选的 `else` 块。

<div class="rule" id="r-statement.let.inference"><a class="rule-link" href="#r-statement.let.inference" title="statement.let.inference"><span>[statement<wbr>.let<wbr>.inference]</span></a>
</div>

如果未给出类型标注，编译器会推断类型；如果可用于明确推断的类型信息不足，则会报错。

<div class="rule" id="r-statement.let.scope"><a class="rule-link" href="#r-statement.let.scope" title="statement.let.scope"><span>[statement<wbr>.let<wbr>.scope]</span></a>
</div>

由变量声明引入的任何变量，从声明点开始到外围块作用域结束为止都是可见的，除非它们被另一个变量声明遮蔽。

<div class="rule" id="r-statement.let.constraint"><a class="rule-link" href="#r-statement.let.constraint" title="statement.let.constraint"><span>[statement<wbr>.let<wbr>.constraint]</span></a>
</div>

如果不存在 `else` 块，则模式必须是不可反驳的。如果存在 `else` 块，则模式可以是可反驳的。

<div class="rule" id="r-statement.let.behavior"><a class="rule-link" href="#r-statement.let.behavior" title="statement.let.behavior"><span>[statement<wbr>.let<wbr>.behavior]</span></a>
</div>

如果模式不匹配（这要求它是可反驳的），则执行 `else` 块。`else` 块必须始终发散（求值为 [never 类型](types/never.md)）。

```rust
let (mut v, w) = (vec![1, 2, 3], 42); // The bindings may be mut or const
let Some(t) = v.pop() else { // Refutable patterns require an else block
    panic!(); // The else block must diverge
};
let [u, v] = [v[0], v[1]] else { // This pattern is irrefutable, so the compiler
                                 // will lint as the else block is redundant.
    panic!();
};
```

<div class="rule" id="r-statement.expr"><a class="rule-link" href="#r-statement.expr" title="statement.expr"><span>[statement<wbr>.expr]</span></a>
</div>

## 表达式语句

<div class="rule" id="r-statement.expr.syntax"><a class="rule-link" href="#r-statement.expr.syntax" title="statement.expr.syntax"><span>[statement<wbr>.expr<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ExpressionStatement" onclick="show_railroad()">[ExpressionStatement](statements.md#railroad-ExpressionStatement)</span> →  
      <span class="grammar-text">[ExpressionWithoutBlock](expressions.md#grammar-ExpressionWithoutBlock)</span> <span class="grammar-literal">;</span>  
    \| <span class="grammar-text">[ExpressionWithBlock](expressions.md#grammar-ExpressionWithBlock)</span> <span class="grammar-literal">;</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 376px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ExpressionStatement"><svg class="railroad" viewBox="0 0 376 119" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="statements.md#grammar-ExpressionStatement">
<text class="comment" x="81" y="25">
ExpressionStatement</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 242 0 h 40"/>
<g class="sequence">
<a class="link" xlink:href="expressions.md#railroad-ExpressionWithoutBlock">
<g class="nonterminal">
<rect height="22" width="204" x="59" y="42"/>
<text x="161" y="58">
ExpressionWithoutBlock</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="273" y="42"/>
<text x="287" y="58">
;</text>
</g>
<path d=" M 263 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 282 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 12 a 12 12 0 0 0 12 12 m 258 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<a class="link" xlink:href="expressions.md#railroad-ExpressionWithBlock">
<g class="nonterminal">
<rect height="22" width="172" x="59" y="87"/>
<text x="145" y="103">
ExpressionWithBlock</text>
</g>
</a>
<g class="optional">
<path d=" M 241 98 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="265" y="87"/>
<text x="279" y="103">
;</text>
</g>
</g>
<path d=" M 231 98 h 10"/>
</g>
</g>
<path d=" M 351 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 341 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-statement.expr.intro"><a class="rule-link" href="#r-statement.expr.intro" title="statement.expr.intro"><span>[statement<wbr>.expr<wbr>.intro]</span></a>
</div>

\_表达式语句_会对一个[表达式](expressions.md)求值并忽略其结果。通常，表达式语句的目的是触发对其表达式求值所产生的效果。

<div class="rule" id="r-statement.expr.restriction-semicolon"><a class="rule-link" href="#r-statement.expr.restriction-semicolon" title="statement.expr.restriction-semicolon"><span>[statement<wbr>.expr<wbr>.restriction-semicolon]</span></a>
</div>

如果一个表达式仅由[块表达式](expressions/block-expr.md)或控制流表达式组成，并且用于允许语句的上下文中，则可以省略尾随分号。这可能导致歧义：它既可能被解析为独立语句，也可能被解析为另一个表达式的一部分；在这种情况下，它会被解析为语句。

<div class="rule" id="r-statement.expr.constraint-block"><a class="rule-link" href="#r-statement.expr.constraint-block" title="statement.expr.constraint-block"><span>[statement<wbr>.expr<wbr>.constraint-block]</span></a>
</div>

[ExpressionWithBlock](expressions.md#grammar-ExpressionWithBlock) 表达式在用作语句时，其类型必须是单元类型。

```rust
# let mut v = vec![1, 2, 3];
v.pop();          // Ignore the element returned from pop
if v.is_empty() {
    v.push(5);
} else {
    v.remove(0);
}                 // Semicolon can be omitted.
[1];              // Separate expression statement, not an indexing expression.
```

当省略尾随分号时，结果必须是类型 `()`。

```rust
// bad: the block's type is i32, not ()
// Error: expected `()` because of default return type
// if true {
//   1
// }

// good: the block's type is i32
if true {
  1
} else {
  2
};
```

<div class="rule" id="r-statement.attribute"><a class="rule-link" href="#r-statement.attribute" title="statement.attribute"><span>[statement<wbr>.attribute]</span></a>
</div>

## 语句上的属性

语句接受[外部属性](attributes.md)。在语句上有意义的属性是 [`cfg`](conditional-compilation.md) 和 [lint 检查属性](attributes/diagnostics.md#lint-check-attributes)。