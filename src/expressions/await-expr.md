r[expr.await]
# await 表达式

r[expr.await.syntax]
```grammar,expressions
AwaitExpression -> Expression `.` `await`
```

r[expr.await.intro]
`await` 表达式是一种语法构造，用于挂起由 `std::future::IntoFuture` 的某个实现提供的计算，直到给定 future 准备好产生值。

r[expr.await.construct]
await 表达式的语法是：一个类型实现了 [`IntoFuture`](std::future::IntoFuture) trait 的表达式，称为 *future 操作数*，后跟 token `.`，再后跟 `await` 关键字。

r[expr.await.allowed-positions]
await 表达式仅在 [async 上下文](../expressions/block-expr.md#async-context)中合法，例如在 [`async fn`](../items/functions.md#async-functions)、[`async` 闭包](closure-expr.md#async-closures)或 [`async` 块](block-expr.md#async-blocks)中。

r[expr.await.effects]
更具体地说，await 表达式具有以下效果。

1. 通过在 future 操作数上调用 [`IntoFuture::into_future`](std::future::IntoFuture::into_future) 创建一个 future。
2. 将该 future 求值为一个 [future](std::future::Future) `tmp`；
3. 使用 [`Pin::new_unchecked`](std::pin::Pin::new_unchecked) 对 `tmp` 进行固定；
4. 随后通过调用 [`Future::poll`](std::future::Future::poll) 方法并向其传入当前[任务上下文](#task-context)来轮询这个已固定的 future；
5. 如果对 `poll` 的调用返回 [`Poll::Pending`](std::task::Poll::Pending)，则该 future 返回 `Poll::Pending`，并挂起其状态，以便在外围 async 上下文再次被轮询时，执行返回到步骤 3；
6. 否则，对 `poll` 的调用必定已返回 [`Poll::Ready`](std::task::Poll::Ready)，在这种情况下，[`Poll::Ready`](std::task::Poll::Ready) 变体中包含的值会用作 `await` 表达式本身的结果。

r[expr.await.edition2018]
> [!EDITION-2018]
> await 表达式仅从 Rust 2018 开始可用。

r[expr.await.task]
## 任务上下文

任务上下文指当前 [async 上下文](../expressions/block-expr.md#async-context)本身被轮询时提供给它的 [`Context`](std::task::Context)。因为 `await` 表达式只在 async 上下文中合法，所以必须有某个任务上下文可用。

r[expr.await.desugar]
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

[`async fn`]: ../items/functions.md#async-functions
[`async` closure]: closure-expr.md#async-closures
[`async` block]: block-expr.md#async-blocks
[`Context`]: std::task::Context
[`future::poll`]: std::future::Future::poll
[`pin::new_unchecked`]: std::pin::Pin::new_unchecked
[`poll::Pending`]: std::task::Poll::Pending
[`poll::Ready`]: std::task::Poll::Ready
[async context]: ../expressions/block-expr.md#async-context
[future]: std::future::Future
[`IntoFuture`]: std::future::IntoFuture
[`IntoFuture::into_future`]: std::future::IntoFuture::into_future
