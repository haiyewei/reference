<div class="rule" id="r-expr.loop"><a class="rule-link" href="#r-expr.loop" title="expr.loop"><span>[expr<wbr>.loop]</span></a>
</div>

# 循环和其他可 `break` 表达式

<div class="rule" id="r-expr.loop.syntax"><a class="rule-link" href="#r-expr.loop.syntax" title="expr.loop.syntax"><span>[expr<wbr>.loop<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-LoopExpression" onclick="show_railroad()">[LoopExpression](loop-expr.md#railroad-LoopExpression)</span> →  
    <span class="grammar-text">[LoopLabel](loop-expr.md#grammar-LoopLabel)</span><sup>?</sup> (  
        <span class="grammar-text">[InfiniteLoopExpression](loop-expr.md#grammar-InfiniteLoopExpression)</span>  
      \| <span class="grammar-text">[PredicateLoopExpression](loop-expr.md#grammar-PredicateLoopExpression)</span>  
      \| <span class="grammar-text">[IteratorLoopExpression](loop-expr.md#grammar-IteratorLoopExpression)</span>  
      \| <span class="grammar-text">[LabelBlockExpression](loop-expr.md#grammar-LabelBlockExpression)</span>  
    )

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 480px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LoopExpression"><svg class="railroad" viewBox="0 0 480 186" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="loop-expr.md#grammar-LoopExpression">
<text class="comment" x="64" y="25">
LoopExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 92 m -43 0 l -5 -5 m 0 10 l 5 -5 m 43 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="loop-expr.md#railroad-LoopLabel">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="55"/>
<text x="105" y="71">
LoopLabel</text>
</g>
</a>
</g>
<g class="choice">
<path d=" M 185 66 h 24 m 204 0 h 32"/>
<g class="sequence">
<a class="link" xlink:href="loop-expr.md#railroad-InfiniteLoopExpression">
<g class="nonterminal">
<rect height="22" width="204" x="209" y="55"/>
<text x="311" y="71">
InfiniteLoopExpression</text>
</g>
</a>
</g>
<path d=" M 185 66 a 12 12 0 0 1 12 12 v 9 m 236 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 197 87 v 33 m 236 0 v -33"/>
<path d=" M 197 120 v 33 m 236 0 v -33"/>
<path d=" M 197 87 v 0 a 12 12 0 0 0 12 12 m 212 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="loop-expr.md#railroad-PredicateLoopExpression">
<g class="nonterminal">
<rect height="22" width="212" x="209" y="88"/>
<text x="315" y="104">
PredicateLoopExpression</text>
</g>
</a>
</g>
<path d=" M 197 120 v 0 a 12 12 0 0 0 12 12 m 204 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="loop-expr.md#railroad-IteratorLoopExpression">
<g class="nonterminal">
<rect height="22" width="204" x="209" y="121"/>
<text x="311" y="137">
IteratorLoopExpression</text>
</g>
</a>
</g>
<path d=" M 197 153 v 0 a 12 12 0 0 0 12 12 m 188 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="loop-expr.md#railroad-LabelBlockExpression">
<g class="nonterminal">
<rect height="22" width="188" x="209" y="154"/>
<text x="303" y="170">
LabelBlockExpression</text>
</g>
</a>
</g>
</g>
<path d=" M 175 66 h 10"/>
</g>
<path d=" M 455 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 445 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.loop.intro"><a class="rule-link" href="#r-expr.loop.intro" title="expr.loop.intro"><span>[expr<wbr>.loop<wbr>.intro]</span></a>
</div>

Rust 支持四种循环表达式：

- [`loop` 表达式](#infinite-loops)表示无限循环。
- [`while` 表达式](#predicate-loops)会循环，直到谓词为 false。
- [`for` 表达式](#iterator-loops)从迭代器提取值，并循环直到该迭代器为空。
- [带标签的块表达式](loop-expr.md#r-expr.loop.block-labels)会运行一个恰好执行一次的循环，但允许使用 `break` 提前退出该循环。

<div class="rule" id="r-expr.loop.break-label"><a class="rule-link" href="#r-expr.loop.break-label" title="expr.loop.break-label"><span>[expr<wbr>.loop<wbr>.break-label]</span></a>
</div>

所有四种循环都支持 [`break` 表达式](#break-expressions)和[标签](#loop-labels)。

<div class="rule" id="r-expr.loop.continue-label"><a class="rule-link" href="#r-expr.loop.continue-label" title="expr.loop.continue-label"><span>[expr<wbr>.loop<wbr>.continue-label]</span></a>
</div>

除带标签的块表达式外，其他所有类型都支持 [`continue` 表达式](#continue-expressions)。

<div class="rule" id="r-expr.loop.explicit-result"><a class="rule-link" href="#r-expr.loop.explicit-result" title="expr.loop.explicit-result"><span>[expr<wbr>.loop<wbr>.explicit-result]</span></a>
</div>

只有 `loop` 和带标签的块表达式支持[求值为非平凡值](#break-and-loop-values)。

<div class="rule" id="r-expr.loop.infinite"><a class="rule-link" href="#r-expr.loop.infinite" title="expr.loop.infinite"><span>[expr<wbr>.loop<wbr>.infinite]</span></a>
</div>

## 无限循环

<div class="rule" id="r-expr.loop.infinite.syntax"><a class="rule-link" href="#r-expr.loop.infinite.syntax" title="expr.loop.infinite.syntax"><span>[expr<wbr>.loop<wbr>.infinite<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-InfiniteLoopExpression" onclick="show_railroad()">[InfiniteLoopExpression](loop-expr.md#railroad-InfiniteLoopExpression)</span> → <span class="grammar-literal">loop</span> <span class="grammar-text">[BlockExpression](block-expr.md#grammar-BlockExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 272px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-InfiniteLoopExpression"><svg class="railroad" viewBox="0 0 272 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="loop-expr.md#grammar-InfiniteLoopExpression">
<text class="comment" x="95" y="25">
InfiniteLoopExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="35" y="42"/>
<text x="61" y="58">
loop</text>
</g>
<a class="link" xlink:href="block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="97" y="42"/>
<text x="167" y="58">
BlockExpression</text>
</g>
</a>
<path d=" M 87 53 h 10"/>
</g>
<path d=" M 247 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 237 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.loop.infinite.intro"><a class="rule-link" href="#r-expr.loop.infinite.intro" title="expr.loop.infinite.intro"><span>[expr<wbr>.loop<wbr>.infinite<wbr>.intro]</span></a>
</div>

`loop` 表达式会持续重复执行其主体：`loop { println!("I live."); }`。

<div class="rule" id="r-expr.loop.infinite.diverging"><a class="rule-link" href="#r-expr.loop.infinite.diverging" title="expr.loop.infinite.diverging"><span>[expr<wbr>.loop<wbr>.infinite<wbr>.diverging]</span></a>
</div>

没有关联 `break` 表达式的 `loop` 表达式是[发散的](../divergence.md#r-divergence)，并具有 [`!`](../types/never.md#r-type.never) 类型。

<div class="rule" id="r-expr.loop.infinite.break"><a class="rule-link" href="#r-expr.loop.infinite.break" title="expr.loop.infinite.break"><span>[expr<wbr>.loop<wbr>.infinite<wbr>.break]</span></a>
</div>

包含一个或多个关联 [`break` 表达式](#break-expressions)的 `loop` 表达式可能会终止，并且必须具有与这些 `break` 表达式的值兼容的类型。

<div class="rule" id="r-expr.loop.while"><a class="rule-link" href="#r-expr.loop.while" title="expr.loop.while"><span>[expr<wbr>.loop<wbr>.while]</span></a>
</div>

## 谓词循环

<div class="rule" id="r-expr.loop.while.syntax"><a class="rule-link" href="#r-expr.loop.while.syntax" title="expr.loop.while.syntax"><span>[expr<wbr>.loop<wbr>.while<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-PredicateLoopExpression" onclick="show_railroad()">[PredicateLoopExpression](loop-expr.md#railroad-PredicateLoopExpression)</span> → <span class="grammar-literal">while</span> <span class="grammar-text">[Conditions](if-expr.md#grammar-Conditions)</span> <span class="grammar-text">[BlockExpression](block-expr.md#grammar-BlockExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 390px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-PredicateLoopExpression"><svg class="railroad" viewBox="0 0 390 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="loop-expr.md#grammar-PredicateLoopExpression">
<text class="comment" x="99" y="25">
PredicateLoopExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="35" y="42"/>
<text x="65" y="58">
while</text>
</g>
<a class="link" xlink:href="if-expr.md#railroad-Conditions">
<g class="nonterminal">
<rect height="22" width="100" x="105" y="42"/>
<text x="155" y="58">
Conditions</text>
</g>
</a>
<a class="link" xlink:href="block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="215" y="42"/>
<text x="285" y="58">
BlockExpression</text>
</g>
</a>
<path d=" M 95 53 h 10"/>
<path d=" M 205 53 h 10"/>
</g>
<path d=" M 365 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 355 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.loop.while.intro"><a class="rule-link" href="#r-expr.loop.while.intro" title="expr.loop.while.intro"><span>[expr<wbr>.loop<wbr>.while<wbr>.intro]</span></a>
</div>

`while` 循环表达式允许在一组条件保持为 true 时重复求值一个块。

<div class="rule" id="r-expr.loop.while.condition"><a class="rule-link" href="#r-expr.loop.while.condition" title="expr.loop.while.condition"><span>[expr<wbr>.loop<wbr>.while<wbr>.condition]</span></a>
</div>

条件操作数必须是具有[布尔类型](../types/boolean.md)的 [Expression](../expressions.md#grammar-Expression)，或者是条件式 `let` 匹配。如果所有条件操作数都求值为 `true`，并且所有 `let` 模式都成功匹配其[被匹配值](../glossary.md#scrutinee)，则执行循环体块。

<div class="rule" id="r-expr.loop.while.repeat"><a class="rule-link" href="#r-expr.loop.while.repeat" title="expr.loop.while.repeat"><span>[expr<wbr>.loop<wbr>.while<wbr>.repeat]</span></a>
</div>

循环体成功执行之后，会重新求值条件操作数，以确定是否应再次执行主体。

<div class="rule" id="r-expr.loop.while.exit"><a class="rule-link" href="#r-expr.loop.while.exit" title="expr.loop.while.exit"><span>[expr<wbr>.loop<wbr>.while<wbr>.exit]</span></a>
</div>

如果任何条件操作数求值为 `false`，或者任何 `let` 模式没有匹配其被匹配值，则不执行主体，并在 `while` 表达式之后继续执行。

<div class="rule" id="r-expr.loop.while.eval"><a class="rule-link" href="#r-expr.loop.while.eval" title="expr.loop.while.eval"><span>[expr<wbr>.loop<wbr>.while<wbr>.eval]</span></a>
</div>

`while` 表达式求值为 `()`。

示例：

```rust
let mut i = 0;

while i < 10 {
    println!("hello");
    i = i + 1;
}
```

<div class="rule" id="r-expr.loop.while.let"><a class="rule-link" href="#r-expr.loop.while.let" title="expr.loop.while.let"><span>[expr<wbr>.loop<wbr>.while<wbr>.let]</span></a>
</div>

### `while let` 模式

<div class="rule" id="r-expr.loop.while.let.intro"><a class="rule-link" href="#r-expr.loop.while.let.intro" title="expr.loop.while.let.intro"><span>[expr<wbr>.loop<wbr>.while<wbr>.let<wbr>.intro]</span></a>
</div>

`while` 条件中的 `let` 模式允许在模式成功匹配时将新变量绑定进作用域。以下示例展示使用 `let` 模式的绑定：

```rust
let mut x = vec![1, 2, 3];

while let Some(y) = x.pop() {
    println!("y = {}", y);
}

while let _ = 5 {
    println!("Irrefutable patterns are always true");
    break;
}
```

<div class="rule" id="r-expr.loop.while.let.desugar"><a class="rule-link" href="#r-expr.loop.while.let.desugar" title="expr.loop.while.let.desugar"><span>[expr<wbr>.loop<wbr>.while<wbr>.let<wbr>.desugar]</span></a>
</div>

`while let` 循环等价于如下包含 [`match` 表达式](match-expr.md)的 `loop` 表达式。

<!-- ignore: expansion example -->

```rust,ignore
'label: while let PATS = EXPR {
    /* 循环体 */
}
```

等价于

<!-- ignore: expansion example -->

```rust,ignore
'label: loop {
    match EXPR {
        PATS => { /* 循环体 */ },
        _ => break,
    }
}
```

<div class="rule" id="r-expr.loop.while.let.or-pattern"><a class="rule-link" href="#r-expr.loop.while.let.or-pattern" title="expr.loop.while.let.or-pattern"><span>[expr<wbr>.loop<wbr>.while<wbr>.let<wbr>.or-pattern]</span></a>
</div>

可以用 `|` 运算符指定多个模式。这与 `match` 表达式中的 `|` 具有相同语义：

```rust
let mut vals = vec![2, 3, 1, 2, 2];
while let Some(v @ 1) | Some(v @ 2) = vals.pop() {
    // 依次打印 2、2，然后 1
    println!("{}", v);
}
```

<div class="rule" id="r-expr.loop.while.chains"><a class="rule-link" href="#r-expr.loop.while.chains" title="expr.loop.while.chains"><span>[expr<wbr>.loop<wbr>.while<wbr>.chains]</span></a>
</div>

### `while` 条件链

<div class="rule" id="r-expr.loop.while.chains.intro"><a class="rule-link" href="#r-expr.loop.while.chains.intro" title="expr.loop.while.chains.intro"><span>[expr<wbr>.loop<wbr>.while<wbr>.chains<wbr>.intro]</span></a>
</div>

多个条件操作数可以用 `&&` 分隔。它们具有与 [`if` 条件链](if-expr.md#chains-of-conditions)相同的语义和限制。

以下是链接多个表达式的示例，其中混合了 `let` 绑定和布尔表达式，并且表达式能够引用来自前面表达式的模式绑定：

```rust
fn main() {
    let outer_opt = Some(Some(1i32));

    while let Some(inner_opt) = outer_opt
        && let Some(number) = inner_opt
        && number == 1
    {
        println!("Peek a boo");
        break;
    }
}
```

<div class="rule" id="r-expr.loop.for"><a class="rule-link" href="#r-expr.loop.for" title="expr.loop.for"><span>[expr<wbr>.loop<wbr>.for]</span></a>
</div>

## 迭代器循环

<div class="rule" id="r-expr.loop.for.syntax"><a class="rule-link" href="#r-expr.loop.for.syntax" title="expr.loop.for.syntax"><span>[expr<wbr>.loop<wbr>.for<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-IteratorLoopExpression" onclick="show_railroad()">[IteratorLoopExpression](loop-expr.md#railroad-IteratorLoopExpression)</span> →  
    <span class="grammar-literal">for</span> <span class="grammar-text">[Pattern](../patterns.md#grammar-Pattern)</span> <span class="grammar-literal">in</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span><sub class="grammar-text">except [StructExpression](struct-expr.md#grammar-StructExpression)</sub> <span class="grammar-text">[BlockExpression](block-expr.md#grammar-BlockExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 600px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-IteratorLoopExpression"><svg class="railroad" viewBox="0 0 600 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="loop-expr.md#grammar-IteratorLoopExpression">
<text class="comment" x="95" y="25">
IteratorLoopExpression</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="78"/>
<text x="57" y="94">
for</text>
</g>
<a class="link" xlink:href="../patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="89" y="78"/>
<text x="127" y="94">
Pattern</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="175" y="78"/>
<text x="193" y="94">
in</text>
</g>
<g class="labeledbox">
<rect height="66" width="194" x="221" y="42"/>
<path d=" M 221 89 h 8 m 100 0 h 86 m -40 0 l -5 -5 m 0 10 l 5 -5 m 40 0"/>
<text class="comment" x="318" y="65">
except StructExpression</text>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="229" y="78"/>
<text x="279" y="94">
Expression</text>
</g>
</a>
</g>
<a class="link" xlink:href="block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="425" y="78"/>
<text x="495" y="94">
BlockExpression</text>
</g>
</a>
<path d=" M 79 89 h 10"/>
<path d=" M 165 89 h 10"/>
<path d=" M 211 89 h 10"/>
<path d=" M 415 89 h 10"/>
</g>
<path d=" M 575 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 565 89 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<!-- TODO: The exception above isn't accurate, see https://github.com/rust-lang/reference/issues/569 -->

<div class="rule" id="r-expr.loop.for.intro"><a class="rule-link" href="#r-expr.loop.for.intro" title="expr.loop.for.intro"><span>[expr<wbr>.loop<wbr>.for<wbr>.intro]</span></a>
</div>

`for` 表达式是一种语法构造，用于遍历由 `std::iter::IntoIterator` 的实现提供的元素。

<div class="rule" id="r-expr.loop.for.condition"><a class="rule-link" href="#r-expr.loop.for.condition" title="expr.loop.for.condition"><span>[expr<wbr>.loop<wbr>.for<wbr>.condition]</span></a>
</div>

如果迭代器产出一个值，则该值会与不可反驳模式匹配，循环体会被执行，然后控制流返回到 `for` 循环的首部。如果迭代器为空，则 `for` 表达式完成。

对数组内容进行 `for` 循环的示例：

```rust
let v = &["apples", "cake", "coffee"];

for text in v {
    println!("I like {}.", text);
}
```

对一系列整数进行 `for` 循环的示例：

```rust
let mut sum = 0;
for n in 1..11 {
    sum += n;
}
assert_eq!(sum, 55);
```

<div class="rule" id="r-expr.loop.for.desugar"><a class="rule-link" href="#r-expr.loop.for.desugar" title="expr.loop.for.desugar"><span>[expr<wbr>.loop<wbr>.for<wbr>.desugar]</span></a>
</div>

`for` 循环等价于如下包含 [`match` 表达式](match-expr.md)的 `loop` 表达式：

<!-- ignore: expansion example -->

```rust,ignore
'label: for PATTERN in iter_expr {
    /* 循环体 */
}
```

等价于

<!-- ignore: expansion example -->

```rust,ignore
{
    let result = match IntoIterator::into_iter(iter_expr) {
        mut iter => 'label: loop {
            let mut next;
            match Iterator::next(&mut iter) {
                Option::Some(val) => next = val,
                Option::None => break,
            };
            let PATTERN = next;
            let () = { /* 循环体 */ };
        },
    };
    result
}
```

<div class="rule" id="r-expr.loop.for.lang-items"><a class="rule-link" href="#r-expr.loop.for.lang-items" title="expr.loop.for.lang-items"><span>[expr<wbr>.loop<wbr>.for<wbr>.lang-items]</span></a>
</div>

这里的 `IntoIterator`、`Iterator` 和 `Option` 始终是标准库项，而不是这些名称在当前作用域中解析到的任何项。

变量名 `next`、`iter` 和 `val` 仅用于说明，它们实际上并没有用户可键入的名称。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 外层 `match` 用于确保 `iter_expr` 中的任何[临时值](../expressions.md#temporaries)不会在循环结束前被丢弃。`next` 在赋值前声明，是因为这样更常能让类型被正确推断。

</div>

<div class="rule" id="r-expr.loop.label"><a class="rule-link" href="#r-expr.loop.label" title="expr.loop.label"><span>[expr<wbr>.loop<wbr>.label]</span></a>
</div>

## 循环标签

<div class="rule" id="r-expr.loop.label.syntax"><a class="rule-link" href="#r-expr.loop.label.syntax" title="expr.loop.label.syntax"><span>[expr<wbr>.loop<wbr>.label<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-LoopLabel" onclick="show_railroad()">[LoopLabel](loop-expr.md#railroad-LoopLabel)</span> → <span class="grammar-text">[LIFETIME_OR_LABEL](../tokens.md#grammar-LIFETIME_OR_LABEL)</span> <span class="grammar-literal">:</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 264px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LoopLabel"><svg class="railroad" viewBox="0 0 264 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="loop-expr.md#grammar-LoopLabel">
<text class="comment" x="46" y="25">
LoopLabel</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../tokens.md#railroad-LIFETIME_OR_LABEL">
<g class="nonterminal">
<rect height="22" width="156" x="35" y="42"/>
<text x="113" y="58">
LIFETIME_OR_LABEL</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="201" y="42"/>
<text x="215" y="58">
:</text>
</g>
<path d=" M 191 53 h 10"/>
</g>
<path d=" M 239 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 229 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.loop.label.intro"><a class="rule-link" href="#r-expr.loop.label.intro" title="expr.loop.label.intro"><span>[expr<wbr>.loop<wbr>.label<wbr>.intro]</span></a>
</div>

循环表达式可以带有一个可选的_标签\_。标签写作位于循环表达式之前的生命周期，如 `'foo: loop { break 'foo; }`、`'bar: while false {}`、`'humbug: for _ in 0..0 {}`。

<div class="rule" id="r-expr.loop.label.control-flow"><a class="rule-link" href="#r-expr.loop.label.control-flow" title="expr.loop.label.control-flow"><span>[expr<wbr>.loop<wbr>.label<wbr>.control-flow]</span></a>
</div>

如果存在标签，则嵌套在此循环内的带标签 `break` 和 `continue` 表达式可以退出此循环，或将控制流返回到其首部。见 [break 表达式](#break-expressions)和 [continue 表达式](#continue-expressions)。

<div class="rule" id="r-expr.loop.label.ref"><a class="rule-link" href="#r-expr.loop.label.ref" title="expr.loop.label.ref"><span>[expr<wbr>.loop<wbr>.label<wbr>.ref]</span></a>
</div>

标签遵循局部变量的卫生性和遮蔽规则。例如，这段代码会打印 "outer loop"：

```rust
'a: loop {
    'a: loop {
        break 'a;
    }
    print!("outer loop");
    break 'a;
}
```

`'_` 不是有效的循环标签。

<div class="rule" id="r-expr.loop.break"><a class="rule-link" href="#r-expr.loop.break" title="expr.loop.break"><span>[expr<wbr>.loop<wbr>.break]</span></a>
</div>

## `break` 表达式

<div class="rule" id="r-expr.loop.break.syntax"><a class="rule-link" href="#r-expr.loop.break.syntax" title="expr.loop.break.syntax"><span>[expr<wbr>.loop<wbr>.break<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-BreakExpression" onclick="show_railroad()">[BreakExpression](loop-expr.md#railroad-BreakExpression)</span> → <span class="grammar-literal">break</span> <span class="grammar-text">[LIFETIME_OR_LABEL](../tokens.md#grammar-LIFETIME_OR_LABEL)</span><sup>?</sup> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 502px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BreakExpression"><svg class="railroad" viewBox="0 0 502 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="loop-expr.md#grammar-BreakExpression">
<text class="comment" x="67" y="25">
BreakExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="35" y="55"/>
<text x="65" y="71">
break</text>
</g>
<g class="optional">
<path d=" M 105 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../tokens.md#railroad-LIFETIME_OR_LABEL">
<g class="nonterminal">
<rect height="22" width="156" x="129" y="55"/>
<text x="207" y="71">
LIFETIME_OR_LABEL</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 319 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="343" y="55"/>
<text x="393" y="71">
Expression</text>
</g>
</a>
</g>
<path d=" M 95 66 h 10"/>
<path d=" M 309 66 h 10"/>
</g>
<path d=" M 477 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 467 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.loop.break.intro"><a class="rule-link" href="#r-expr.loop.break.intro" title="expr.loop.break.intro"><span>[expr<wbr>.loop<wbr>.break<wbr>.intro]</span></a>
</div>

遇到 `break` 时，会立即终止关联循环体的执行，例如：

```rust
let mut last = 0;
for x in 1..100 {
    if x > 12 {
        break;
    }
    last = x;
}
assert_eq!(last, 12);
```

<div class="rule" id="r-expr.loop.break.diverging"><a class="rule-link" href="#r-expr.loop.break.diverging" title="expr.loop.break.diverging"><span>[expr<wbr>.loop<wbr>.break<wbr>.diverging]</span></a>
</div>

`break` 表达式是[发散的](../divergence.md#r-divergence)，并具有 [`!`](../types/never.md#r-type.never) 类型。

<div class="rule" id="r-expr.loop.break.label"><a class="rule-link" href="#r-expr.loop.break.label" title="expr.loop.break.label"><span>[expr<wbr>.loop<wbr>.break<wbr>.label]</span></a>
</div>

`break` 表达式通常与包含该 `break` 表达式的最内层 `loop`、`for` 或 `while` 循环关联，但可以使用[标签](#loop-labels)指定受影响的外围循环。示例：

```rust
'outer: loop {
    while true {
        break 'outer;
    }
}
```

<div class="rule" id="r-expr.loop.break.value"><a class="rule-link" href="#r-expr.loop.break.value" title="expr.loop.break.value"><span>[expr<wbr>.loop<wbr>.break<wbr>.value]</span></a>
</div>

`break` 表达式只允许出现在循环体内，并具有 `break`、`break 'label` 或（[见下文](#break-and-loop-values)）`break EXPR` 或 `break 'label EXPR` 这些形式之一。

<div class="rule" id="r-expr.loop.break-value.implicit-value"><a class="rule-link" href="#r-expr.loop.break-value.implicit-value" title="expr.loop.break-value.implicit-value"><span>[expr<wbr>.loop<wbr>.break-value<wbr>.implicit-value]</span></a>
</div>

在[带有 `break` 表达式的 `loop`](loop-expr.md#r-expr.loop.break-value)或[带标签的块表达式](loop-expr.md#r-expr.loop.block-labels)中，不带表达式的 `break` 等价于 `break ()`。

<div class="rule" id="r-expr.loop.block-labels"><a class="rule-link" href="#r-expr.loop.block-labels" title="expr.loop.block-labels"><span>[expr<wbr>.loop<wbr>.block-labels]</span></a>
</div>

## 带标签的块表达式

<div class="rule" id="r-expr.loop.block-labels.syntax"><a class="rule-link" href="#r-expr.loop.block-labels.syntax" title="expr.loop.block-labels.syntax"><span>[expr<wbr>.loop<wbr>.block-labels<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-LabelBlockExpression" onclick="show_railroad()">[LabelBlockExpression](loop-expr.md#railroad-LabelBlockExpression)</span> → <span class="grammar-text">[BlockExpression](block-expr.md#grammar-BlockExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 210px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LabelBlockExpression"><svg class="railroad" viewBox="0 0 210 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="loop-expr.md#grammar-LabelBlockExpression">
<text class="comment" x="88" y="25">
LabelBlockExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<a class="link" xlink:href="block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="35" y="42"/>
<text x="105" y="58">
BlockExpression</text>
</g>
</a>
<path d=" M 185 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 175 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.loop.block-labels.intro"><a class="rule-link" href="#r-expr.loop.block-labels.intro" title="expr.loop.block-labels.intro"><span>[expr<wbr>.loop<wbr>.block-labels<wbr>.intro]</span></a>
</div>

带标签的块表达式与块表达式完全相同，只是它们允许在块内使用 `break` 表达式。

<div class="rule" id="r-expr.loop.block-labels.break"><a class="rule-link" href="#r-expr.loop.block-labels.break" title="expr.loop.block-labels.break"><span>[expr<wbr>.loop<wbr>.block-labels<wbr>.break]</span></a>
</div>

不同于循环，带标签的块表达式内部的 `break` 表达式_必须_带有标签（即标签不是可选的）。

<div class="rule" id="r-expr.loop.block-labels.label-required"><a class="rule-link" href="#r-expr.loop.block-labels.label-required" title="expr.loop.block-labels.label-required"><span>[expr<wbr>.loop<wbr>.block-labels<wbr>.label-required]</span></a>
</div>

类似地，带标签的块表达式_必须_以标签开头。

```rust
# fn do_thing() {}
# fn condition_not_met() -> bool { true }
# fn do_next_thing() {}
# fn do_last_thing() {}
let result = 'block: {
    do_thing();
    if condition_not_met() {
        break 'block 1;
    }
    do_next_thing();
    if condition_not_met() {
        break 'block 2;
    }
    do_last_thing();
    3
};
```

<div class="rule" id="r-expr.loop.block-labels.type"><a class="rule-link" href="#r-expr.loop.block-labels.type" title="expr.loop.block-labels.type"><span>[expr<wbr>.loop<wbr>.block-labels<wbr>.type]</span></a>
</div>

带标签的块表达式的类型是所有 `break` 操作数和最终操作数的[最小上界](../type-coercions.md#r-coerce.least-upper-bound)。如果省略最终操作数，则最终操作数的类型默认为[单元类型](../types/tuple.md#r-type.tuple.unit)，除非该块[发散](block-expr.md#r-expr.block.diverging)，此时为 [never 类型](../types/never.md#r-type.never)。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > fn example(condition: bool) {
 >     let s = String::from("owned");
 > 
 >     let _: &str = 'block: {
 >         if condition {
 >             break 'block &s;  // &String 通过 Deref 强制转换为 &str
 >         }
 >         break 'block "literal";  // &'static str 强制转换为 &str
 >     };
 > }
 > ```

</div>

<div class="rule" id="r-expr.loop.continue"><a class="rule-link" href="#r-expr.loop.continue" title="expr.loop.continue"><span>[expr<wbr>.loop<wbr>.continue]</span></a>
</div>

## `continue` 表达式

<div class="rule" id="r-expr.loop.continue.syntax"><a class="rule-link" href="#r-expr.loop.continue.syntax" title="expr.loop.continue.syntax"><span>[expr<wbr>.loop<wbr>.continue<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ContinueExpression" onclick="show_railroad()">[ContinueExpression](loop-expr.md#railroad-ContinueExpression)</span> → <span class="grammar-literal">continue</span> <span class="grammar-text">[LIFETIME_OR_LABEL](../tokens.md#grammar-LIFETIME_OR_LABEL)</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 368px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ContinueExpression"><svg class="railroad" viewBox="0 0 368 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="loop-expr.md#grammar-ContinueExpression">
<text class="comment" x="78" y="25">
ContinueExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="84" x="35" y="55"/>
<text x="77" y="71">
continue</text>
</g>
<g class="optional">
<path d=" M 129 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../tokens.md#railroad-LIFETIME_OR_LABEL">
<g class="nonterminal">
<rect height="22" width="156" x="153" y="55"/>
<text x="231" y="71">
LIFETIME_OR_LABEL</text>
</g>
</a>
</g>
<path d=" M 119 66 h 10"/>
</g>
<path d=" M 343 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 333 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.loop.continue.intro"><a class="rule-link" href="#r-expr.loop.continue.intro" title="expr.loop.continue.intro"><span>[expr<wbr>.loop<wbr>.continue<wbr>.intro]</span></a>
</div>

遇到 `continue` 时，会立即终止关联循环体的当前迭代，并把控制流返回到循环_首部\_。

<div class="rule" id="r-expr.loop.continue.diverging"><a class="rule-link" href="#r-expr.loop.continue.diverging" title="expr.loop.continue.diverging"><span>[expr<wbr>.loop<wbr>.continue<wbr>.diverging]</span></a>
</div>

`continue` 表达式是[发散的](../divergence.md#r-divergence)，并具有 [`!`](../types/never.md#r-type.never) 类型。

<div class="rule" id="r-expr.loop.continue.while"><a class="rule-link" href="#r-expr.loop.continue.while" title="expr.loop.continue.while"><span>[expr<wbr>.loop<wbr>.continue<wbr>.while]</span></a>
</div>

对于 `while` 循环，首部是控制该循环的条件操作数。

<div class="rule" id="r-expr.loop.continue.for"><a class="rule-link" href="#r-expr.loop.continue.for" title="expr.loop.continue.for"><span>[expr<wbr>.loop<wbr>.continue<wbr>.for]</span></a>
</div>

对于 `for` 循环，首部是控制该循环的调用表达式。

<div class="rule" id="r-expr.loop.continue.label"><a class="rule-link" href="#r-expr.loop.continue.label" title="expr.loop.continue.label"><span>[expr<wbr>.loop<wbr>.continue<wbr>.label]</span></a>
</div>

与 `break` 类似，`continue` 通常与最内层外围循环关联，但可以使用 `continue 'label` 指定受影响的循环。

<div class="rule" id="r-expr.loop.continue.in-loop-only"><a class="rule-link" href="#r-expr.loop.continue.in-loop-only" title="expr.loop.continue.in-loop-only"><span>[expr<wbr>.loop<wbr>.continue<wbr>.in-loop-only]</span></a>
</div>

`continue` 表达式只允许出现在循环体内。

<div class="rule" id="r-expr.loop.break-value"><a class="rule-link" href="#r-expr.loop.break-value" title="expr.loop.break-value"><span>[expr<wbr>.loop<wbr>.break-value]</span></a>
</div>

## `break` 和循环值

<div class="rule" id="r-expr.loop.break-value.intro"><a class="rule-link" href="#r-expr.loop.break-value.intro" title="expr.loop.break-value.intro"><span>[expr<wbr>.loop<wbr>.break-value<wbr>.intro]</span></a>
</div>

当与 `loop` 关联时，`break` 表达式可以用于从该循环返回一个值，形式为 `break EXPR` 或 `break 'label EXPR`；其中 `EXPR` 是一个表达式，其结果会从该 `loop` 返回。例如：

```rust
let (mut a, mut b) = (1, 1);
let result = loop {
    if b > 10 {
        break b;
    }
    let c = a + b;
    a = b;
    b = c;
};
// Fibonacci 数列中第一个超过 10 的数：
assert_eq!(result, 13);
```

<div class="rule" id="r-expr.loop.break-value.type"><a class="rule-link" href="#r-expr.loop.break-value.type" title="expr.loop.break-value.type"><span>[expr<wbr>.loop<wbr>.break-value<wbr>.type]</span></a>
</div>

带有关联 `break` 表达式的 `loop` 的类型是所有 `break` 操作数的[最小上界](../type-coercions.md#r-coerce.least-upper-bound)。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > fn example(condition: bool) {
 >     let s = String::from("owned");
 > 
 >     let _: &str = loop {
 >         if condition {
 >             break &s; // &String 通过 Deref 强制转换为 &str
 >         }
 >         break "literal"; // &'static str 强制转换为 &str
 >     };
 > }
 > ```

</div>

<div class="rule" id="r-expr.loop.break-value.diverging"><a class="rule-link" href="#r-expr.loop.break-value.diverging" title="expr.loop.break-value.diverging"><span>[expr<wbr>.loop<wbr>.break-value<wbr>.diverging]</span></a>
</div>

如果任何 `break` 操作数不发散，则带有关联 `break` 表达式的 `loop` 不会[发散](../divergence.md#r-divergence)。如果所有 `break` 操作数都发散，那么该 `loop` 表达式也会发散。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > fn diverging_loop_with_break(condition: bool) -> ! {
 >     // 此循环是发散的，因为所有 `break` 操作数都发散。
 >     loop {
 >         if condition {
 >             break loop {};
 >         } else {
 >             break panic!();
 >         }
 >     }
 > }
 > ```
 > 
 > ```rust,compile_fail,E0308
 > fn loop_with_non_diverging_break(condition: bool) -> ! {
 >     // 此循环的类型是 i32，即使其中一个 `break` 是
 >     // 发散的。
 >     loop {
 >         if condition {
 >             break loop {};
 >         } else {
 >             break 123i32;
 >         }
 >     } // ERROR: 预期 `!`，但找到 `i32`
 > }
 > ```

</div>
