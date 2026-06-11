<div class="rule" id="r-expr.await"><a class="rule-link" href="#r-expr.await" title="expr.await"><span>[expr<wbr>.await]</span></a>
</div>

# await 表达式

<div class="rule" id="r-expr.await.syntax"><a class="rule-link" href="#r-expr.await.syntax" title="expr.await.syntax"><span>[expr<wbr>.await<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-AwaitExpression" onclick="show_railroad()">[AwaitExpression](await-expr.md#railroad-AwaitExpression)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">.</span> <span class="grammar-literal">await</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 278px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-AwaitExpression"><svg class="railroad" viewBox="0 0 278 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="await-expr.md#grammar-AwaitExpression">
<text class="comment" x="67" y="25">
AwaitExpression</text>
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
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="183" y="42"/>
<text x="213" y="58">
await</text>
</g>
<path d=" M 135 53 h 10"/>
<path d=" M 173 53 h 10"/>
</g>
<path d=" M 253 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 243 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.await.intro"><a class="rule-link" href="#r-expr.await.intro" title="expr.await.intro"><span>[expr<wbr>.await<wbr>.intro]</span></a>
</div>

`await` 表达式是一种语法构造，用于挂起由 `std::future::IntoFuture` 的某个实现提供的计算，直到给定 future 准备好产生值。

<div class="rule" id="r-expr.await.construct"><a class="rule-link" href="#r-expr.await.construct" title="expr.await.construct"><span>[expr<wbr>.await<wbr>.construct]</span></a>
</div>

await 表达式的语法是：一个类型实现了 [`IntoFuture`](../../core/future/into_future/trait.IntoFuture.html) trait 的表达式，称为 _future 操作数_，后跟词法单元 `.`，再后跟 `await` 关键字。

<div class="rule" id="r-expr.await.allowed-positions"><a class="rule-link" href="#r-expr.await.allowed-positions" title="expr.await.allowed-positions"><span>[expr<wbr>.await<wbr>.allowed-positions]</span></a>
</div>

await 表达式仅在 [async 上下文](../expressions/block-expr.md#async-context)中合法，例如在 [`async fn`](../items/functions.md#async-functions)、[`async` 闭包](closure-expr.md#async-closures)或 [`async` 块](block-expr.md#async-blocks)中。

<div class="rule" id="r-expr.await.effects"><a class="rule-link" href="#r-expr.await.effects" title="expr.await.effects"><span>[expr<wbr>.await<wbr>.effects]</span></a>
</div>

更具体地说，await 表达式具有以下效果。

1. 通过在 future 操作数上调用 [`IntoFuture::into_future`](../../core/future/into_future/trait.IntoFuture.html#tymethod.into_future) 创建一个 future。
1. 将该 future 求值为一个 [future](../../core/future/future/trait.Future.html) `tmp`；
1. 使用 [`Pin::new_unchecked`](../../core/pin/struct.Pin.html#method.new_unchecked) 固定 `tmp`；
1. 随后通过调用 [`Future::poll`](../../core/future/future/trait.Future.html#tymethod.poll) 方法并向其传入当前[任务上下文](#task-context)来轮询这个已固定的 future；
1. 如果对 `poll` 的调用返回 [`Poll::Pending`](../../core/task/poll/enum.Poll.html#variant.Pending)，则该 future 返回 `Poll::Pending`，并挂起其状态，以便在外围 async 上下文再次被轮询时，执行返回到步骤 3；
1. 否则，对 `poll` 的调用必定已返回 [`Poll::Ready`](../../core/task/poll/enum.Poll.html#variant.Ready)，在这种情况下，[`Poll::Ready`](../../core/task/poll/enum.Poll.html#variant.Ready) 变体中包含的值会用作 `await` 表达式本身的结果。

<div class="rule" id="r-expr.await.edition2018"><a class="rule-link" href="#r-expr.await.edition2018" title="expr.await.edition2018"><span>[expr<wbr>.await<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > await 表达式仅从 Rust 2018 开始可用。

</div>

<div class="rule" id="r-expr.await.task"><a class="rule-link" href="#r-expr.await.task" title="expr.await.task"><span>[expr<wbr>.await<wbr>.task]</span></a>
</div>

## 任务上下文

任务上下文指当前 [async 上下文](../expressions/block-expr.md#async-context)本身被轮询时提供给它的 [`Context`](../../core/task/wake/struct.Context.html)。因为 `await` 表达式只在 async 上下文中合法，所以必须有某个任务上下文可用。

<div class="rule" id="r-expr.await.desugar"><a class="rule-link" href="#r-expr.await.desugar" title="expr.await.desugar"><span>[expr<wbr>.await<wbr>.desugar]</span></a>
</div>

## 近似脱糖

实际上，await 表达式大致等价于以下非规范性的脱糖形式：

<!-- ignore: example expansion -->

```rust,ignore
match operand.into_future() {
    mut pinned => loop {
        let mut pin = unsafe { Pin::new_unchecked(&mut pinned) };
        match Pin::future::poll(Pin::borrow(&mut pin), &mut current_context) {
            Poll::Ready(r) => break r,
            Poll::Pending => yield Poll::Pending,
        }
    }
}
```

其中 `yield` 伪代码返回 `Poll::Pending`，并在再次被调用时从该点恢复执行。变量 `current_context` 指的是从 async 环境取得的上下文。