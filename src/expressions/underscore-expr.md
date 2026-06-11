r[expr.placeholder]
# `_` 表达式

r[expr.placeholder.syntax]
```grammar,expressions
UnderscoreExpression -> `_`
```

r[expr.placeholder.intro]
下划线表达式以符号 `_` 表示，用于在解构赋值中表示占位符。

r[expr.placeholder.lhs-assignment-only]
它们只能出现在赋值的左侧。

r[expr.placeholder.pattern]
注意，这不同于[通配符模式](../patterns.md#wildcard-pattern)。

`_` 表达式的示例：

```rust
let p = (1, 2);
let mut a = 0;
(_, a) = p;

struct Position {
    x: u32,
    y: u32,
}

Position { x: a, y: _ } = Position{ x: 2, y: 3 };

// unused result, assignment to `_` used to declare intent and remove a warning
_ = 2 + 2;
// triggers unused_must_use warning
// 2 + 2;

// equivalent technique using a wildcard pattern in a let-binding
let _ = 2 + 2;
```
