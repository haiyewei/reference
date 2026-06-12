r[expr.loop]
# 循环和其他可 `break` 的表达式

r[expr.loop.syntax]
```grammar,expressions
LoopExpression ->
    LoopLabel? (
        InfiniteLoopExpression
      | PredicateLoopExpression
      | IteratorLoopExpression
      | LabelBlockExpression
    )
```

r[expr.loop.intro]
Rust 支持四种循环表达式：

*   [`loop` 表达式](#infinite-loops)表示无限循环。
*   [`while` 表达式](#predicate-loops)会循环，直到谓词为 false。
*   [`for` 表达式](#iterator-loops)从迭代器提取值，并循环直到该迭代器为空。
*   [带标签的块表达式][expr.loop.block-labels]会运行一个恰好执行一次的循环，但允许使用 `break` 提前退出该循环。

r[expr.loop.break-label]
所有四种循环都支持 [`break` 表达式](#break-expressions)和[标签](#loop-labels)。

r[expr.loop.continue-label]
除带标签的块表达式外，其他所有类型都支持 [`continue` 表达式](#continue-expressions)。

r[expr.loop.explicit-result]
只有 `loop` 和带标签的块表达式支持[求值为非平凡值](#break-and-loop-values)。

r[expr.loop.infinite]
## 无限循环

r[expr.loop.infinite.syntax]
```grammar,expressions
InfiniteLoopExpression -> `loop` BlockExpression
```

r[expr.loop.infinite.intro]
`loop` 表达式会持续重复执行其主体：`loop { println!("I live."); }`。

r[expr.loop.infinite.diverging]
没有关联 `break` 表达式的 `loop` 表达式是[发散的](divergence)，并具有 [`!`](type.never) 类型。

r[expr.loop.infinite.break]
包含一个或多个关联 [`break` 表达式](#break-expressions)的 `loop` 表达式可能会终止，并且类型必须与这些 `break` 表达式的值兼容。

r[expr.loop.while]
## 谓词循环

r[expr.loop.while.syntax]
```grammar,expressions
PredicateLoopExpression -> `while` Conditions BlockExpression
```

r[expr.loop.while.intro]
`while` 循环表达式允许在一组条件保持为 true 时重复求值一个块。

r[expr.loop.while.condition]
条件操作数必须是具有[布尔类型](../types/boolean.md)的 [Expression]，或者是条件式 `let` 匹配。如果所有条件操作数都求值为 `true`，并且所有 `let` 模式都成功匹配其[被匹配值](../glossary.md#scrutinee)，则执行循环体块。

r[expr.loop.while.repeat]
循环体成功执行之后，会重新求值条件操作数，以确定是否应再次执行主体。

r[expr.loop.while.exit]
如果任何条件操作数求值为 `false`，或者任何 `let` 模式没有匹配其被匹配值，则不执行主体，并在 `while` 表达式之后继续执行。

r[expr.loop.while.eval]
`while` 表达式求值为 `()`。

示例：

```rust
let mut i = 0;

while i < 10 {
    println!("hello");
    i = i + 1;
}
```

r[expr.loop.while.let]
### `while let` 模式

r[expr.loop.while.let.intro]
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

r[expr.loop.while.let.desugar]
`while let` 循环等价于如下包含 [`match` 表达式](match-expr.md)的 `loop` 表达式。

<!-- ignore: expansion example -->
```rust,ignore
'label: while let PATS = EXPR {
    /* loop body */
}
```

等价于

<!-- ignore: expansion example -->
```rust,ignore
'label: loop {
    match EXPR {
        PATS => { /* loop body */ },
        _ => break,
    }
}
```

r[expr.loop.while.let.or-pattern]
可以用 `|` 运算符指定多个模式。这与 `match` 表达式中的 `|` 具有相同语义：

```rust
let mut vals = vec![2, 3, 1, 2, 2];
while let Some(v @ 1) | Some(v @ 2) = vals.pop() {
    // 打印 2, 2，然后打印 1
    println!("{}", v);
}
```

r[expr.loop.while.chains]
### `while` 条件链

r[expr.loop.while.chains.intro]
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

r[expr.loop.for]
## 迭代器循环

r[expr.loop.for.syntax]
```grammar,expressions
IteratorLoopExpression ->
    `for` Pattern `in` Expression _except [StructExpression]_ BlockExpression
```
<!-- TODO: The exception above isn't accurate, see https://github.com/rust-lang/reference/issues/569 -->

r[expr.loop.for.intro]
`for` 表达式是一种语法构造，用于遍历由 `std::iter::IntoIterator` 的实现提供的元素。

r[expr.loop.for.condition]
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

r[expr.loop.for.desugar]
`for` 循环等价于如下包含 [`match` 表达式](match-expr.md)的 `loop` 表达式：

<!-- ignore: expansion example -->
```rust,ignore
'label: for PATTERN in iter_expr {
    /* loop body */
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
            let () = { /* loop body */ };
        },
    };
    result
}
```

r[expr.loop.for.lang-items]
这里的 `IntoIterator`、`Iterator` 和 `Option` 始终是标准库项，而不是这些名称在当前作用域中解析到的任何项。

变量名 `next`、`iter` 和 `val` 仅用于说明，它们实际上并没有用户可键入的名称。

> [!NOTE]
> 外层 `match` 用于确保 `iter_expr` 中的任何[临时值](../expressions.md#temporaries)不会在循环结束前被丢弃。`next` 在赋值前声明，是因为这样更常能让类型被正确推断。

r[expr.loop.label]
## 循环标签

r[expr.loop.label.syntax]
```grammar,expressions
LoopLabel -> LIFETIME_OR_LABEL `:`
```

r[expr.loop.label.intro]
循环表达式可以带有一个可选的*标签*。标签写作位于循环表达式之前的生命周期，如 `'foo: loop { break 'foo; }`、`'bar: while false {}`、`'humbug: for _ in 0..0 {}`。

r[expr.loop.label.control-flow]
如果存在标签，则嵌套在此循环内的带标签 `break` 和 `continue` 表达式可以退出此循环，或将控制流返回到其首部。见 [break 表达式](#break-expressions)和 [continue 表达式](#continue-expressions)。

r[expr.loop.label.ref]
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

r[expr.loop.break]
## `break` 表达式

r[expr.loop.break.syntax]
```grammar,expressions
BreakExpression -> `break` LIFETIME_OR_LABEL? Expression?
```

r[expr.loop.break.intro]
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

r[expr.loop.break.diverging]
`break` 表达式是[发散的](divergence)，并具有 [`!`](type.never) 类型。

r[expr.loop.break.label]
`break` 表达式通常与包含该 `break` 表达式的最内层 `loop`、`for` 或 `while` 循环关联，但可以使用[标签](#loop-labels)指定受影响的外围循环。示例：

```rust
'outer: loop {
    while true {
        break 'outer;
    }
}
```

r[expr.loop.break.value]
`break` 表达式只允许出现在循环体内，并具有 `break`、`break 'label` 或（[见下文](#break-and-loop-values)）`break EXPR` 或 `break 'label EXPR` 这些形式之一。

r[expr.loop.break-value.implicit-value]
在[带有 `break` 表达式的 `loop`][expr.loop.break-value]或[带标签的块表达式](expr.loop.block-labels)中，不带表达式的 `break` 等价于 `break ()`。

r[expr.loop.block-labels]
## 带标签的块表达式

r[expr.loop.block-labels.syntax]
```grammar,expressions
LabelBlockExpression -> BlockExpression
```

r[expr.loop.block-labels.intro]
带标签的块表达式与块表达式完全相同，只是它们允许在块内使用 `break` 表达式。

r[expr.loop.block-labels.break]
不同于循环，带标签的块表达式内部的 `break` 表达式 *必须* 带有标签（即标签不是可选的）。

r[expr.loop.block-labels.label-required]
类似地，带标签的块表达式 *必须* 以标签开头。

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

r[expr.loop.block-labels.type]
带标签的块表达式的类型是所有 `break` 操作数和最终操作数的[最小上界](coerce.least-upper-bound)。如果省略最终操作数，则最终操作数的类型默认为[单元类型](type.tuple.unit)，除非该块[发散][expr.block.diverging]，此时为[never 类型](type.never)。

> [!EXAMPLE]
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

r[expr.loop.continue]
## `continue` 表达式

r[expr.loop.continue.syntax]
```grammar,expressions
ContinueExpression -> `continue` LIFETIME_OR_LABEL?
```

r[expr.loop.continue.intro]
遇到 `continue` 时，会立即终止关联循环体的当前迭代，并把控制流返回到循环*首部*。

r[expr.loop.continue.diverging]
`continue` 表达式是[发散的](divergence)，并具有 [`!`](type.never) 类型。

r[expr.loop.continue.while]
对于 `while` 循环，首部是控制该循环的条件操作数。

r[expr.loop.continue.for]
对于 `for` 循环，首部是控制该循环的调用表达式。

r[expr.loop.continue.label]
与 `break` 类似，`continue` 通常与最内层外围循环关联，但可以使用 `continue 'label` 指定受影响的循环。

r[expr.loop.continue.in-loop-only]
`continue` 表达式只允许出现在循环体内。

r[expr.loop.break-value]
## `break` 和循环值

r[expr.loop.break-value.intro]
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
// Fibonacci 序列中大于 10 的第一个数：
assert_eq!(result, 13);
```

r[expr.loop.break-value.type]
带有关联 `break` 表达式的 `loop` 的类型是所有 `break` 操作数的[最小上界](coerce.least-upper-bound)。

> [!EXAMPLE]
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

r[expr.loop.break-value.diverging]
如果任何 `break` 操作数不发散，则带有关联 `break` 表达式的 `loop` 不会[发散](divergence)。如果所有 `break` 操作数都发散，那么该 `loop` 表达式也会发散。

> [!EXAMPLE]
> ```rust
> fn diverging_loop_with_break(condition: bool) -> ! {
>     // 此循环是发散的，因为所有 `break` 操作数都是发散的。
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
>     // 此循环的类型是 i32，尽管其中一个 break 是
>     // 发散的。
>     loop {
>         if condition {
>             break loop {};
>         } else {
>             break 123i32;
>         }
>     } // 错误：预期为 `!`，却找到 `i32`
> }
> ```

[`!`]: type.never
[`if` condition chains]: if-expr.md#chains-of-conditions
[`if` expressions]: if-expr.md
[`match` expression]: match-expr.md
[boolean type]: ../types/boolean.md
[diverge]: divergence
[diverging]: divergence
[labeled block expression]: expr.loop.block-labels
[least upper bound]: coerce.least-upper-bound
[never type]: type.never
[scrutinee]: ../glossary.md#scrutinee
[temporary values]: ../expressions.md#temporaries
[unit type]: type.tuple.unit
