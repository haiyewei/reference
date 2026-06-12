r[expr.if]
# `if` 表达式

r[expr.if.syntax]
```grammar,expressions
IfExpression ->
    `if` Conditions BlockExpressionNoInnerAttributes
    (`else` ( BlockExpressionNoInnerAttributes | IfExpression ) )?

Conditions ->
      Expression _except [StructExpression]_
    | LetChain

LetChain -> LetChainCondition ( `&&` LetChainCondition )*

LetChainCondition ->
      Expression _except [ExcludedConditions]_
    | OuterAttribute* `let` Pattern `=` Scrutinee _except [ExcludedConditions]_

@root ExcludedConditions ->
      StructExpression
    | LazyBooleanExpression
    | RangeExpr
    | RangeFromExpr
    | RangeInclusiveExpr
    | AssignmentExpression
    | CompoundAssignmentExpression
```
<!-- TODO: The struct exception above needs clarification, see https://github.com/rust-lang/reference/issues/1808
     The chain grammar could use some work, see https://github.com/rust-lang/reference/issues/1811
-->

r[expr.if.intro]
`if` 表达式的语法是一个或多个以 `&&` 分隔的条件操作数序列，后跟一个结果块、任意数量的 `else if` 条件和块，以及一个可选的尾随 `else` 块。

r[expr.if.condition]
条件操作数必须是具有[布尔类型](../types/boolean.md)的 [Expression]，或者是条件式 `let` 匹配。

r[expr.if.condition-true]
如果所有条件操作数都求值为 `true`，并且所有 `let` 模式都成功匹配其[被匹配值](../glossary.md#scrutinee)，则执行结果块，并跳过任何后续的 `else if` 或 `else` 块。

r[expr.if.else-if]
如果任何条件操作数求值为 `false`，或者任何 `let` 模式没有匹配其被匹配值，则跳过结果块，并对任何后续的 `else if` 条件求值。

r[expr.if.else]
如果所有 `if` 和 `else if` 条件都求值为 `false`，则执行存在的 `else` 块。

r[expr.if.result]
`if` 表达式的求值结果与被执行块相同；如果没有块被求值，则求值为 `()`。

r[expr.if.type]
`if` 表达式在所有情况下必须具有相同的类型。

```rust
# let x = 3;
if x == 4 {
    println!("x is four");
} else if x == 3 {
    println!("x is three");
} else {
    println!("x is something else");
}

// `if` 可用作表达式。
let y = if 12 * 15 > 150 {
    "Bigger"
} else {
    "Smaller"
};
assert_eq!(y, "Bigger");
```

r[expr.if.diverging]
如果条件表达式发散，或者所有分支都发散，则 `if` 表达式[发散](divergence)。

```rust,no_run
fn diverging_condition() -> ! {
    // 发散，因为条件表达式发散
    if loop {} {
        ()
    } else {
        ()
    };
    // 上面的分号很重要：`if` 表达式的类型是
    // `()`，尽管它会发散。当最终的函数体表达式
    // 被省略时，函数体的类型会被推断为 !，因为函数体
    // 发散。没有分号时，`if` 将成为尾表达式，
    // 其类型为 `()`，这将无法匹配返回类型 `!`。
}

fn diverging_arms() -> ! {
    // 发散，因为所有分支都发散
    if true {
        loop {}
    } else {
        loop {}
    }
}
```

r[expr.if.let]
## `if let` 模式

r[expr.if.let.intro]
`if` 条件中的 `let` 模式允许在模式成功匹配时将新变量绑定到作用域中。

以下示例展示了使用 `let` 模式进行绑定：

```rust
let dish = ("Ham", "Eggs");

// 此函数体会被跳过，因为该模式被驳回。
if let ("Bacon", b) = dish {
    println!("Bacon is served with {}", b);
} else {
    // 改为对这个块求值。
    println!("No bacon will be served");
}

// 此函数体将会执行。
if let ("Ham", b) = dish {
    println!("Ham is served with {}", b);
}

if let _ = 5 {
    println!("Irrefutable patterns are always true");
}
```

r[expr.if.let.or-pattern]
可以用 `|` 运算符指定多个模式。这与 [`match` 表达式](match-expr.md)中 `|` 的语义相同：

```rust
enum E {
    X(u8),
    Y(u8),
    Z(u8),
}
let v = E::Y(12);
if let E::X(n) | E::Y(n) = v {
    assert_eq!(n, 12);
}
```

r[expr.if.chains]
## 条件链

r[expr.if.chains.intro]
多个条件操作数可以用 `&&` 分隔。

r[expr.if.chains.order]
类似于 `&&` [LazyBooleanExpression]，每个操作数会从左到右求值，直到某个操作数求值为 `false` 或某个 `let` 匹配失败；在这种情况下，后续操作数不会被求值。

r[expr.if.chains.bindings]
每个模式的绑定都会被放入作用域，以供下一个条件操作数和结果块使用。

以下是链接多个表达式的示例，其中混合了 `let` 绑定和布尔表达式，并且表达式能够引用来自前面表达式的模式绑定：

```rust
fn single() {
    let outer_opt = Some(Some(1i32));

    if let Some(inner_opt) = outer_opt
        && let Some(number) = inner_opt
        && number == 1
    {
        println!("Peek a boo");
    }
}
```

上面的代码等价于以下不使用条件链的代码：

```rust
fn nested() {
    let outer_opt = Some(Some(1i32));

    if let Some(inner_opt) = outer_opt {
        if let Some(number) = inner_opt {
            if number == 1 {
                println!("Peek a boo");
            }
        }
    }
}
```

r[expr.if.chains.or]
如果任何条件操作数是 `let` 模式，则由于与 `let` 被匹配值之间存在歧义和优先级问题，所有条件操作数都不能是 `||` [惰性布尔运算符表达式][expr.bool-logic]。

> [!EXAMPLE]
> 如果需要 `||` 表达式，则可以使用括号。例如：
>
> ```rust
> # let foo = Some(123);
> # let condition1 = true;
> # let condition2 = false;
> if let Some(x) = foo
>     // 这里需要括号。
>     && (condition1 || condition2)
> {}
> ```

r[expr.if.edition2024]
> [!EDITION-2024]
> 在 2024 edition 之前，不支持 let chains。也就是说，`if` 表达式中不允许使用 [LetChain] 语法。

[`match` expressions]: match-expr.md
[boolean type]: ../types/boolean.md
[diverges]: divergence
[scrutinee]: ../glossary.md#scrutinee
