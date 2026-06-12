r[divergence]
# 发散

r[divergence.intro]
*发散表达式*是永远不会完成正常执行的表达式。

```rust
fn diverges() -> ! {
    panic!("This function never returns!");
}

fn example() {
    let x: i32 = diverges(); // 这一行永不完成。
    println!("This is never printed: {x}");
}
```

有关特定表达式发散行为，请参见以下规则：

- [expr.block.diverging] --- 块表达式。
- [expr.if.diverging] --- `if` 表达式。
- [expr.loop.block-labels.type] --- 带有 `break` 的带标签块表达式。
- [expr.loop.break-value.diverging] --- 带有 `break` 的 `loop` 表达式。
- [expr.loop.break.diverging] --- `break` 表达式。
- [expr.loop.continue.diverging] --- `continue` 表达式。
- [expr.loop.infinite.diverging] --- 无限 `loop` 表达式。
- [expr.match.diverging] --- `match` 表达式。
- [expr.match.empty] --- 空 `match` 表达式。
- [expr.return.diverging] --- `return` 表达式。
- [type.never.constraint] --- 返回 `!` 的函数调用。

> [!NOTE]
> [`panic!`] 宏以及像 [`unreachable!`] 这样的相关 panic 生成宏也具有 [`!`](type.never) 类型，并且是发散的。

r[divergence.never]
任何类型为 [`!`](type.never) 的表达式都是发散表达式。不过，发散表达式并不限于类型 [`!`](type.never)；其他类型的表达式也可能发散（例如，`Some(loop {})` 的类型是 `Option<!>`）。

> [!NOTE]
> 虽然 `!` 被视为无值类型，但一个类型无值并不足以使其发散。
>
> ```rust,compile_fail,E0308
> enum Empty {}
> fn make_never() -> ! {loop{}}
> fn make_empty() -> Empty {loop{}}
>
> fn diverging() -> ! {
>     // 这具有 `!` 类型。
>     // 因此，整个函数被视为发散。
>     make_never();
>     // OK：主体的类型是 `!`，与返回类型匹配。
> }
> fn not_diverging() -> ! {
>     // 此类型无值。
>     // 然而，整个函数并不被视为发散。
>     make_empty();
>     // ERROR：主体的类型是 `()`，但期望类型是 `!`。
> }
> ```

> [!NOTE]
> 发散可以传播到外围块。请参见 [expr.block.diverging]。

r[divergence.fallback]
## 回退

如果待推断类型只与发散表达式统一，那么该类型将被推断为 [`!`](type.never)。

> [!EXAMPLE]
> ```rust,compile_fail,E0277
> fn foo() -> i32 { 22 }
> match foo() {
>     // ERROR：trait 约束 `!: Default` 未被满足。
>     4 => Default::default(),
>     _ => return,
> };
> ```

> [!EDITION-2024]
> 在 2024 edition 之前，该类型会改为被推断为 `()`。

> [!NOTE]
> 重要的是，类型统一可以*结构性地*发生，因此回退得到的 `!` 可能是更大类型的一部分。以下代码可以编译：
>
> ```rust
> fn foo() -> i32 { 22 }
> // 这具有 `Option<!>` 类型，而不是 `!`
> match foo() {
>     4 => Default::default(),
>     _ => Some(return),
> };
> ```

<!-- TODO: This last point should likely should be moved to a more general "type inference" section discussing generalization + unification. -->

[`!`]: type.never
