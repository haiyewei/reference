<div class="rule" id="r-expr.closure"><a class="rule-link" href="#r-expr.closure" title="expr.closure"><span>[expr<wbr>.closure]</span></a>
</div>

# 闭包表达式

<div class="rule" id="r-expr.closure.syntax"><a class="rule-link" href="#r-expr.closure.syntax" title="expr.closure.syntax"><span>[expr<wbr>.closure<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ClosureExpression" onclick="show_railroad()">[ClosureExpression](closure-expr.md#railroad-ClosureExpression)</span> →  
    <span class="grammar-literal">async</span><sup>?</sup>​[^cl-async-edition]  
    <span class="grammar-literal">move</span><sup>?</sup>  
    ( <span class="grammar-literal">\||</span> | <span class="grammar-literal">\|</span> <span class="grammar-text">[ClosureParameters](closure-expr.md#grammar-ClosureParameters)</span><sup>?</sup> <span class="grammar-literal">\|</span> )  
    ( <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> | <span class="grammar-literal">\-></span> <span class="grammar-text">[TypeNoBounds](../types.md#grammar-TypeNoBounds)</span> <span class="grammar-text">[BlockExpression](block-expr.md#grammar-BlockExpression)</span> )

<span class="grammar-text grammar-production" id="grammar-ClosureParameters" onclick="show_railroad()">[ClosureParameters](closure-expr.md#railroad-ClosureParameters)</span> → <span class="grammar-text">[ClosureParam](closure-expr.md#grammar-ClosureParam)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[ClosureParam](closure-expr.md#grammar-ClosureParam)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-ClosureParam" onclick="show_railroad()">[ClosureParam](closure-expr.md#railroad-ClosureParam)</span> → <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> <span class="grammar-text">[PatternNoTopAlt](../patterns.md#grammar-PatternNoTopAlt)</span> ( <span class="grammar-literal">:</span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span> )<sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 466px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ClosureExpression"><svg class="railroad" viewBox="0 0 466 320" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="closure-expr.md#grammar-ClosureExpression">
<text class="comment" x="74" y="25">
ClosureExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 66 h 12"/>
<path d=" M 155 66 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -108 m 57 0 l 5 -5 m 0 10 l -5 -5 m -57 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 60 m -27 0 l -5 -5 m 0 10 l 5 -5 m 27 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="71" y="55"/>
<text x="101" y="71">
async</text>
</g>
</g>
</g>
<path d=" M 147 126 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -100 m 53 0 l 5 -5 m 0 10 l -5 -5 m -53 0 a 12 12 0 0 0 -12 12 v 0 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 126 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 52 m -23 0 l -5 -5 m 0 10 l 5 -5 m 23 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="71" y="115"/>
<text x="97" y="131">
move</text>
</g>
</g>
</g>
<path d=" M 375 174 a 12 12 0 0 1 12 12 v 44 a 12 12 0 0 1 -12 12 h -328 m 167 0 l 5 -5 m 0 10 l -5 -5 m -167 0 a 12 12 0 0 0 -12 12 v 0 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="choice">
<path d=" M 47 174 h 24 m 36 0 h 268 m -131 0 l -5 -5 m 0 10 l 5 -5 m 131 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="71" y="163"/>
<text x="89" y="179">
||</text>
</g>
<path d=" M 47 174 a 12 12 0 0 1 12 12 v 9 m 304 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 59 195 v 12 a 12 12 0 0 0 12 12 m 280 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="71" y="208"/>
<text x="85" y="224">
|</text>
</g>
<g class="optional">
<path d=" M 109 219 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="closure-expr.md#railroad-ClosureParameters">
<g class="nonterminal">
<rect height="22" width="156" x="133" y="208"/>
<text x="211" y="224">
ClosureParameters</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="323" y="208"/>
<text x="337" y="224">
|</text>
</g>
<path d=" M 99 219 h 10"/>
<path d=" M 313 219 h 10"/>
</g>
</g>
</g>
<path d=" M 407 266 h 0 a 12 12 0 0 0 12 -12 v -176 m 0 91 l -5 5 m 10 0 l -5 -5 m 0 -91 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<g class="choice">
<path d=" M 47 266 h 24 m 100 0 h 236 m -115 0 l -5 -5 m 0 10 l 5 -5 m 115 0"/>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="71" y="255"/>
<text x="121" y="271">
Expression</text>
</g>
</a>
<path d=" M 47 266 a 12 12 0 0 1 12 12 v 9 m 336 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 59 287 v 0 a 12 12 0 0 0 12 12 m 312 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="71" y="288"/>
<text x="89" y="304">
-&gt;</text>
</g>
<a class="link" xlink:href="../types.md#railroad-TypeNoBounds">
<g class="nonterminal">
<rect height="22" width="116" x="117" y="288"/>
<text x="175" y="304">
TypeNoBounds</text>
</g>
</a>
<a class="link" xlink:href="block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="243" y="288"/>
<text x="313" y="304">
BlockExpression</text>
</g>
</a>
<path d=" M 107 299 h 10"/>
<path d=" M 233 299 h 10"/>
</g>
</g>
</g>
</g>
<path d=" M 441 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 431 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 508px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ClosureParameters"><svg class="railroad" viewBox="0 0 508 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="closure-expr.md#grammar-ClosureParameters">
<text class="comment" x="74" y="25">
ClosureParameters</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="closure-expr.md#railroad-ClosureParam">
<g class="nonterminal">
<rect height="22" width="116" x="35" y="55"/>
<text x="93" y="71">
ClosureParam</text>
</g>
</a>
<g class="optional">
<path d=" M 161 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 178 m -86 0 l -5 -5 m 0 10 l 5 -5 m 86 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 185 66 h 12 m 154 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -154 m 80 0 l 5 -5 m 0 10 l -5 -5 m -80 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="197" y="55"/>
<text x="211" y="71">
,</text>
</g>
<a class="link" xlink:href="closure-expr.md#railroad-ClosureParam">
<g class="nonterminal">
<rect height="22" width="116" x="235" y="55"/>
<text x="293" y="71">
ClosureParam</text>
</g>
</a>
<path d=" M 225 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 397 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="421" y="55"/>
<text x="435" y="71">
,</text>
</g>
</g>
<path d=" M 151 66 h 10"/>
<path d=" M 387 66 h 10"/>
</g>
<path d=" M 483 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 473 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 572px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ClosureParam"><svg class="railroad" viewBox="0 0 572 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="closure-expr.md#grammar-ClosureParam">
<text class="comment" x="57" y="25">
ClosureParam</text>
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
<a class="link" xlink:href="../patterns.md#railroad-PatternNoTopAlt">
<g class="nonterminal">
<rect height="22" width="140" x="249" y="55"/>
<text x="319" y="71">
PatternNoTopAlt</text>
</g>
</a>
<g class="optional">
<path d=" M 399 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 90 m -42 0 l -5 -5 m 0 10 l 5 -5 m 42 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="423" y="55"/>
<text x="437" y="71">
:</text>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="461" y="55"/>
<text x="487" y="71">
Type</text>
</g>
</a>
<path d=" M 451 66 h 10"/>
</g>
</g>
<path d=" M 239 66 h 10"/>
<path d=" M 389 66 h 10"/>
</g>
<path d=" M 547 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 537 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

[^cl-async-edition]: 2015 edition 中不允许使用 `async` 限定符。

<div class="rule" id="r-expr.closure.intro"><a class="rule-link" href="#r-expr.closure.intro" title="expr.closure.intro"><span>[expr<wbr>.closure<wbr>.intro]</span></a>
</div>

_闭包表达式_，也称为 lambda 表达式或 lambda，定义一个[闭包类型](../types/closure.md)，并求值为该类型的值。闭包表达式的语法为：一个可选的 `async` 关键字、一个可选的 `move` 关键字，然后是一个由管道符号（`|`）分隔的、以逗号分隔的[模式](../patterns.md)列表，称为_闭包形参\_，其中每个形参都可以可选地跟随一个 `:` 和一个类型；然后是一个可选的 `->` 和类型，称为_返回类型\_；最后是一个表达式，称为_闭包体操作数\_。

<div class="rule" id="r-expr.closure.param-type"><a class="rule-link" href="#r-expr.closure.param-type" title="expr.closure.param-type"><span>[expr<wbr>.closure<wbr>.param-type]</span></a>
</div>

每个模式之后的可选类型是该模式的类型标注。

<div class="rule" id="r-expr.closure.explicit-type-body"><a class="rule-link" href="#r-expr.closure.explicit-type-body" title="expr.closure.explicit-type-body"><span>[expr<wbr>.closure<wbr>.explicit-type-body]</span></a>
</div>

如果存在返回类型，则闭包体必须是一个[块](block-expr.md)。

<div class="rule" id="r-expr.closure.parameter-restriction"><a class="rule-link" href="#r-expr.closure.parameter-restriction" title="expr.closure.parameter-restriction"><span>[expr<wbr>.closure<wbr>.parameter-restriction]</span></a>
</div>

闭包表达式表示一个函数，它将形参列表映射到形参之后的表达式。与 [`let` 绑定](../statements.md#let-statements)一样，闭包形参是不可反驳的[模式](../patterns.md)，其类型标注是可选的；如果未给出，则会从上下文推断。

<div class="rule" id="r-expr.closure.unique-type"><a class="rule-link" href="#r-expr.closure.unique-type" title="expr.closure.unique-type"><span>[expr<wbr>.closure<wbr>.unique-type]</span></a>
</div>

每个闭包表达式都有一个唯一的匿名类型。

<div class="rule" id="r-expr.closure.captures"><a class="rule-link" href="#r-expr.closure.captures" title="expr.closure.captures"><span>[expr<wbr>.closure<wbr>.captures]</span></a>
</div>

重要的是，闭包表达式会_捕获其环境\_，而普通的[函数定义](../items/functions.md)不会。

<div class="rule" id="r-expr.closure.capture-inference"><a class="rule-link" href="#r-expr.closure.capture-inference" title="expr.closure.capture-inference"><span>[expr<wbr>.closure<wbr>.capture-inference]</span></a>
</div>

没有 `move` 关键字时，闭包表达式会[推断如何从其环境中捕获每个变量](../types/closure.md#capture-modes)，并优先以共享引用进行捕获，实际上会借用闭包体中提到的所有外部变量。

<div class="rule" id="r-expr.closure.capture-mut-ref"><a class="rule-link" href="#r-expr.closure.capture-mut-ref" title="expr.closure.capture-mut-ref"><span>[expr<wbr>.closure<wbr>.capture-mut-ref]</span></a>
</div>

如果需要，编译器会转而推断应取得可变引用，或者应从环境中移动或复制这些值（取决于它们的类型）。

<div class="rule" id="r-expr.closure.capture-move"><a class="rule-link" href="#r-expr.closure.capture-move" title="expr.closure.capture-move"><span>[expr<wbr>.closure<wbr>.capture-move]</span></a>
</div>

可以通过在闭包前加上 `move` 关键字，强制闭包通过复制或移动值来捕获其环境。这常用于确保闭包的生命周期为 `'static`。

<div class="rule" id="r-expr.closure.trait-impl"><a class="rule-link" href="#r-expr.closure.trait-impl" title="expr.closure.trait-impl"><span>[expr<wbr>.closure<wbr>.trait-impl]</span></a>
</div>

## 闭包 trait 实现

闭包类型实现哪些 trait，取决于变量如何被捕获、被捕获变量的类型，以及是否存在 `async`。关于闭包如何以及何时实现 `Fn`、`FnMut` 和 `FnOnce`，请参见[调用 trait 与强转](../types/closure.md#call-traits-and-coercions)一章。如果每个被捕获变量的类型也实现了相应 trait，则闭包类型会实现 [`Send`](../special-types-and-traits.md#send) 和 [`Sync`](../special-types-and-traits.md#sync)。

<div class="rule" id="r-expr.closure.async"><a class="rule-link" href="#r-expr.closure.async" title="expr.closure.async"><span>[expr<wbr>.closure<wbr>.async]</span></a>
</div>

## async 闭包

<div class="rule" id="r-expr.closure.async.intro"><a class="rule-link" href="#r-expr.closure.async.intro" title="expr.closure.async.intro"><span>[expr<wbr>.closure<wbr>.async<wbr>.intro]</span></a>
</div>

用 `async` 关键字标记的闭包表示它们以类似于 [async 函数](../items/functions.md#r-items.fn.async)的方式是异步的。

<div class="rule" id="r-expr.closure.async.future"><a class="rule-link" href="#r-expr.closure.async.future" title="expr.closure.async.future"><span>[expr<wbr>.closure<wbr>.async<wbr>.future]</span></a>
</div>

调用 async 闭包不会执行任何工作，而是求值为一个实现 [`Future`](../../core/future/future/trait.Future.html) 的值，该值对应于闭包体的计算。

```rust
async fn takes_async_callback(f: impl AsyncFn(u64)) {
    f(0).await;
    f(1).await;
}

async fn example() {
    takes_async_callback(async |i| {
        core::future::ready(i).await;
        println!("done with {i}.");
    }).await;
}
```

<div class="rule" id="r-expr.closure.async.edition2018"><a class="rule-link" href="#r-expr.closure.async.edition2018" title="expr.closure.async.edition2018"><span>[expr<wbr>.closure<wbr>.async<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > async 闭包仅从 Rust 2018 开始可用。

</div>

## 示例

在此示例中，我们定义了一个函数 `ten_times`，它接受一个高阶函数实参；随后我们先用一个闭包表达式作为实参来调用它，再用一个从其环境中移动值的闭包表达式来调用它。

```rust
fn ten_times<F>(f: F) where F: Fn(i32) {
    for index in 0..10 {
        f(index);
    }
}

ten_times(|j| println!("hello, {}", j));
// With type annotations
ten_times(|j: i32| -> () { println!("hello, {}", j) });

let word = "konnichiwa".to_owned();
ten_times(move |j| println!("{}, {}", word, j));
```

## 闭包形参上的属性

<div class="rule" id="r-expr.closure.param-attributes"><a class="rule-link" href="#r-expr.closure.param-attributes" title="expr.closure.param-attributes"><span>[expr<wbr>.closure<wbr>.param-attributes]</span></a>
</div>

闭包形参上的属性遵循与[常规函数形参](../items/functions.md#attributes-on-function-parameters)相同的规则和限制。