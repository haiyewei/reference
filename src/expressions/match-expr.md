r[expr.match]
# `match` 表达式

r[expr.match.syntax]
```grammar,expressions
MatchExpression ->
    `match` Scrutinee `{`
        InnerAttribute*
        MatchArms?
    `}`

Scrutinee -> Expression _except [StructExpression]_

MatchArms ->
    ( MatchArm `=>` ( ExpressionWithoutBlock `,` | ExpressionWithBlock `,`? ) )*
    MatchArm `=>` Expression `,`?

MatchArm -> OuterAttribute* Pattern MatchArmGuard?

MatchArmGuard -> `if` MatchConditions

MatchConditions ->
     MatchGuardChain
   | Expression

MatchGuardChain -> MatchGuardCondition ( `&&` MatchGuardCondition )*

MatchGuardCondition ->
     Expression _except [ExcludedMatchConditions]_
   | OuterAttribute* `let` Pattern `=` MatchGuardScrutinee

MatchGuardScrutinee -> Expression _except [ExcludedMatchConditions]_

@root ExcludedMatchConditions ->
      LazyBooleanExpression
    | RangeExpr
    | RangeFromExpr
    | RangeInclusiveExpr
    | AssignmentExpression
    | CompoundAssignmentExpression
```
<!-- TODO: The exception above isn't accurate, see https://github.com/rust-lang/reference/issues/569 -->

r[expr.match.intro]
_`match` 表达式_会基于模式进行分支。实际发生的匹配的确切形式取决于[模式](../patterns.md)。

r[expr.match.scrutinee]
`match` 表达式有一个 _[被匹配值](../glossary.md#scrutinee)表达式_，它是要与模式比较的值。

r[expr.match.scrutinee-constraint]
被匹配值表达式和模式必须具有相同的类型。

r[expr.match.scrutinee-behavior]
`match` 的行为会根据被匹配值表达式是[位置表达式还是值表达式](../expressions.md#place-expressions-and-value-expressions)而不同。

r[expr.match.scrutinee-value]
如果被匹配值表达式是[值表达式](../expressions.md#place-expressions-and-value-expressions)，会先将它求值到一个临时位置中，然后将结果值按顺序与各个分支中的模式比较，直到找到匹配。第一个具有匹配模式的分支会被选为 `match` 的分支目标，模式绑定的任何变量都会被赋给该分支块中的局部变量，然后控制流进入该块。

r[expr.match.scrutinee-place]
当被匹配值表达式是[位置表达式](../expressions.md#place-expressions-and-value-expressions)时，`match` 不会分配临时位置；但是，按值绑定可以从该内存位置复制或移动。在可能的情况下，最好匹配位置表达式，因为这些匹配的生命周期继承位置表达式的生命周期，而不是被限制在 `match` 内部。

`match` 表达式的示例：

```rust
let x = 1;

match x {
    1 => println!("one"),
    2 => println!("two"),
    3 => println!("three"),
    4 => println!("four"),
    5 => println!("five"),
    _ => println!("something else"),
}
```

r[expr.match.pattern-vars]
模式内绑定的变量作用域限于匹配守卫和该分支的表达式。

r[expr.match.pattern-var-binding]
[绑定模式](../patterns.md#binding-modes)（移动、复制或引用）取决于模式。

r[expr.match.or-pattern]
多个匹配模式可以用 `|` 运算符连接。每个模式会按从左到右的顺序测试，直到找到成功匹配。

```rust
let x = 9;
let message = match x {
    0 | 1  => "not many",
    2 ..= 9 => "a few",
    _      => "lots"
};

assert_eq!(message, "a few");

// Demonstration of pattern match order.
struct S(i32, i32);

match S(1, 2) {
    S(z @ 1, _) | S(_, z @ 2) => assert_eq!(z, 1),
    _ => panic!(),
}
```

> [!NOTE]
> `2..=9` 是[范围模式](../patterns.md#range-patterns)，而不是[范围表达式](range-expr.md)。因此，只有范围模式支持的那些范围类型才能用于 match 分支。

r[expr.match.or-patterns-restriction]
每个以 `|` 分隔的模式中的每个绑定，都必须在该分支的所有模式中出现。

r[expr.match.binding-restriction]
每个同名绑定都必须具有相同类型，并且具有相同的绑定模式。

r[expr.match.type]
整个 `match` 表达式的类型是各个 match 分支的[最小上界](../type-coercions.md#r-coerce.least-upper-bound)。

r[expr.match.empty]
如果没有 match 分支，则 `match` 表达式会[发散](../divergence.md#r-divergence)，且类型为 [`!`](../types/never.md#r-type.never)。

> [!EXAMPLE]
> ```rust
> # fn make<T>() -> T { loop {} }
> enum Empty {}
>
> fn diverging_match_no_arms() -> ! {
>     let e: Empty = make();
>     match e {}
> }
> ```


r[expr.match.diverging]
如果被匹配值表达式或所有 match 分支发散，则整个 `match` 表达式也会发散。

r[expr.match.guard]
## 匹配守卫

r[expr.match.guard.intro]
match 分支可以接受_匹配守卫_，以进一步细化匹配某个情况的条件。

r[expr.match.guard.condition]
模式守卫出现在模式之后，并以 `if` 关键字引入，由具有[布尔类型](../types/boolean.md#r-type.bool)的 [Expression](../expressions.md#grammar-Expression) 或条件式 `let` 匹配组成。

r[expr.match.guard.behavior]
当模式成功匹配时，会执行模式守卫。如果所有守卫条件操作数都求值为 `true`，并且所有 `let` 模式都成功匹配其[被匹配值](../glossary.md#scrutinee)，则该 match 分支匹配成功，并执行分支体。

r[expr.match.guard.next]
否则，会测试下一个模式，包括同一分支中使用 `|` 运算符的其他匹配。

```rust
# let maybe_digit = Some(0);
# fn process_digit(i: i32) { }
# fn process_other(i: i32) { }
let message = match maybe_digit {
    Some(x) if x < 10 => process_digit(x),
    Some(x) => process_other(x),
    None => panic!(),
};
```

> [!NOTE]
> 使用 `|` 运算符的多个匹配可能导致模式守卫及其副作用执行多次。例如：
>
> ```rust
> # use std::cell::Cell;
> let i : Cell<i32> = Cell::new(0);
> match 1 {
>     1 | _ if { i.set(i.get() + 1); false } => {}
>     _ => {}
> }
> assert_eq!(i.get(), 2);
> ```

r[expr.match.guard.bound-variables]
模式守卫可以引用其跟随的模式内所绑定的变量。

r[expr.match.guard.shared-ref]
在对守卫求值之前，会取得一个指向被匹配值中该变量所匹配部分的共享引用。在对守卫求值期间，访问该变量时会使用这个共享引用。

r[expr.match.guard.value]
只有当守卫成功求值时，才会将值从被匹配值移动或复制到该变量中。这样就可以在守卫内部使用共享借用，而在守卫匹配失败时不会从被匹配值中移出。

r[expr.match.guard.no-mutation]
此外，通过在对守卫求值期间持有共享引用，也会阻止守卫内部的修改。

r[expr.match.guard.let]
守卫可以使用 `let` 模式来有条件地匹配被匹配值，并在模式成功匹配时将新变量绑定到作用域中。

> [!EXAMPLE]
> 在此示例中，会对守卫条件 `let Some(first_char) = name.chars().next()` 求值。如果 `let` 模式成功匹配（即字符串至少有一个字符），则执行该分支的主体。否则，模式匹配继续到下一个分支。
>
> `let` 模式会创建一个新绑定（`first_char`），它可以与原始模式绑定（`name`）一起在分支主体中使用。
> ```rust
> # enum Command {
> #     Run(String),
> #     Stop,
> # }
> let cmd = Command::Run("example".to_string());
>
> match cmd {
>     Command::Run(name) if let Some(first_char) = name.chars().next() => {
>         // Both `name` and `first_char` are available here
>         println!("Running: {name} (starts with '{first_char}')");
>     }
>     Command::Run(name) => {
>         println!("{name} is empty");
>     }
>     _ => {}
> }
> ```

r[expr.match.guard.chains]
## 匹配守卫链

r[expr.match.guard.chains.intro]
多个守卫条件操作数可以用 `&&` 分隔。

> [!EXAMPLE]
> ```rust
> # let foo = Some([123]);
> # let already_checked = false;
> match foo {
>     Some(xs) if let [single] = xs && !already_checked => { dbg!(single); }
>     _ => {}
> }
> ```

r[expr.match.guard.chains.order]
类似于 `&&` [LazyBooleanExpression](operator-expr.md#grammar-LazyBooleanExpression)，每个操作数会从左到右求值，直到某个操作数求值为 `false` 或某个 `let` 匹配失败；在这种情况下，后续操作数不会被求值。

r[expr.match.guard.chains.bindings]
每个 `let` 模式的绑定都会被放入作用域，以供下一个条件操作数和 match 分支主体使用。

r[expr.match.guard.chains.or]
如果任何守卫条件操作数是 `let` 模式，则由于与 `let` 被匹配值之间存在歧义和优先级问题，所有条件操作数都不能是 `||` [惰性布尔运算符表达式](operator-expr.md#r-expr.bool-logic)。

> [!EXAMPLE]
> 如果需要 `||` 表达式，则可以使用括号。例如：
>
> ```rust
> # let foo = Some([123]);
> match foo {
>     Some(xs) if let [x] = xs
>         // Parentheses are required here.
>         && (x < -100 || x > 20) => {}
>     _ => {}
> }
> ```

r[expr.match.attributes]
## match 分支上的属性

r[expr.match.attributes.outer]
match 分支上允许使用外部属性。在 match 分支上具有意义的属性只有 [`cfg`](../conditional-compilation.md) 和 [lint 检查属性](../attributes/diagnostics.md#lint-check-attributes)。

r[expr.match.attributes.inner]
[内部属性](../attributes.md)可以直接放在 match 表达式的左花括号之后，允许出现的表达式上下文与[块表达式上的属性](block-expr.md#attributes-on-block-expressions)相同。

[`!`]: type.never
[`cfg`]: ../conditional-compilation.md
[attributes on block expressions]: block-expr.md#attributes-on-block-expressions
[binding mode]: ../patterns.md#binding-modes
[diverging]: divergence
[Inner attributes]: ../attributes.md
[least upper bound]: coerce.least-upper-bound
[lint check attributes]: ../attributes/diagnostics.md#lint-check-attributes
[pattern]: ../patterns.md
[place expression]: ../expressions.md#place-expressions-and-value-expressions
[Range Expression]: range-expr.md
[Range Pattern]: ../patterns.md#range-patterns
[scrutinee]: ../glossary.md#scrutinee
[value expression]: ../expressions.md#place-expressions-and-value-expressions
