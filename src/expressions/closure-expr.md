r[expr.closure]
# 闭包表达式

r[expr.closure.syntax]
```grammar,expressions
ClosureExpression ->
    `async`?[^cl-async-edition]
    `move`?
    ( `||` | `|` ClosureParameters? `|` )
    (Expression | `->` TypeNoBounds BlockExpression)

ClosureParameters -> ClosureParam (`,` ClosureParam)* `,`?

ClosureParam -> OuterAttribute* PatternNoTopAlt ( `:` Type )?
```

[^cl-async-edition]: 2015 edition 中不允许使用 `async` 限定符。

r[expr.closure.intro]
*闭包表达式*，也称为 lambda 表达式或 lambda，定义一个[闭包类型](../types/closure.md)，并求值为该类型的值。闭包表达式的语法为：一个可选的 `async` 关键字、一个可选的 `move` 关键字，然后是一个由管道符号（`|`）括定的、以逗号分隔的[模式](../patterns.md)列表，称为*闭包形参*，每个形参都可后接一个 `:` 和一个类型；然后是一个可选的 `->` 和类型，称为*返回类型*；最后是一个表达式，称为*闭包体操作数*。

r[expr.closure.param-type]
每个模式之后的可选类型是该模式的类型标注。

r[expr.closure.explicit-type-body]
如果存在返回类型，则闭包体必须是一个[块](block-expr.md)。

r[expr.closure.parameter-restriction]
闭包表达式表示一个函数，它将形参列表映射到形参之后的表达式。与 [`let` 绑定](../statements.md#let-statements)一样，闭包形参是不可反驳的[模式](../patterns.md)，其类型标注是可选的；如果未给出，则会从上下文推断。

r[expr.closure.unique-type]
每个闭包表达式都有一个唯一的匿名类型。

r[expr.closure.captures]
重要的是，闭包表达式会*捕获其环境*，而普通的[函数定义](../items/functions.md)不会。

r[expr.closure.capture-inference]
没有 `move` 关键字时，闭包表达式会[推断如何从其环境中捕获每个变量](../types/closure.md#capture-modes)，并优先以共享引用进行捕获，实际上会借用闭包体中提到的所有外部变量。

r[expr.closure.capture-mut-ref]
如果需要，编译器会转而推断应取得可变引用，或者应从环境中移动或复制这些值（取决于它们的类型）。

r[expr.closure.capture-move]
可以通过在闭包前加上 `move` 关键字，强制闭包通过复制或移动值来捕获其环境。这常用于确保闭包的生命周期为 `'static`。

r[expr.closure.trait-impl]
## 闭包 trait 实现

闭包类型实现哪些 trait，取决于变量如何被捕获、被捕获变量的类型，以及是否存在 `async`。关于闭包如何以及何时实现 `Fn`、`FnMut` 和 `FnOnce`，请参见[调用 trait 与强转](../types/closure.md#call-traits-and-coercions)一章。如果每个被捕获变量的类型也实现了相应 trait，则闭包类型会实现 [`Send`](../special-types-and-traits.md#send) 和 [`Sync`](../special-types-and-traits.md#sync)。

r[expr.closure.async]
## async 闭包

r[expr.closure.async.intro]
用 `async` 关键字标记的闭包表示它们以类似于 [async 函数][items.fn.async] 的方式是异步的。

r[expr.closure.async.future]
调用 async 闭包不会执行任何工作，而是求值为一个实现 [`Future`] 的值，该值对应于闭包体的计算。

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

r[expr.closure.async.edition2018]
> [!EDITION-2018]
> async 闭包仅从 Rust 2018 开始可用。

## 示例

在此示例中，我们定义了一个函数 `ten_times`，它接受一个高阶函数实参；随后我们先用一个闭包表达式作为实参来调用它，再用一个从其环境中移动值的闭包表达式来调用它。

```rust
fn ten_times<F>(f: F) where F: Fn(i32) {
    for index in 0..10 {
        f(index);
    }
}

ten_times(|j| println!("hello, {}", j));
// 带有类型标注
ten_times(|j: i32| -> () { println!("hello, {}", j) });

let word = "konnichiwa".to_owned();
ten_times(move |j| println!("{}, {}", word, j));
```

## 闭包形参上的属性

r[expr.closure.param-attributes]
闭包形参上的属性遵循与[常规函数形参](../items/functions.md#attributes-on-function-parameters)相同的规则和限制。

[`let` binding]: ../statements.md#let-statements
[`Send`]: ../special-types-and-traits.md#send
[`Sync`]: ../special-types-and-traits.md#sync
[block]: block-expr.md
[call traits and coercions]: ../types/closure.md#call-traits-and-coercions
[closure type]: ../types/closure.md
[function definitions]: ../items/functions.md
[patterns]: ../patterns.md
[regular function parameters]: ../items/functions.md#attributes-on-function-parameters
