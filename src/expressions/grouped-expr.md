r[expr.paren]
# 分组表达式

r[expr.paren.syntax]
```grammar,expressions
GroupedExpression -> `(` Expression `)`
```

r[expr.paren.intro]
*带括号表达式*包装单个表达式，并求值为该表达式。带括号表达式的语法是一个 `(`，随后是一个称为*被包围操作数*的表达式，最后是一个 `)`。

r[expr.paren.evaluation]
带括号表达式求值为被包围操作数的值。

r[expr.paren.place-or-value]
如果被包围操作数是位置表达式，则带括号表达式是[位置表达式](../expressions.md#place-expressions-and-value-expressions)；如果被包围操作数是值表达式，则带括号表达式是值表达式。

r[expr.paren.override-precedence]
括号可用于显式修改表达式内子表达式的优先级顺序。

带括号表达式的示例：

```rust
let x: i32 = 2 + 3 * 4; // 未加括号
let y: i32 = (2 + 3) * 4; // 带括号
assert_eq!(x, 14);
assert_eq!(y, 20);
```

必须使用括号的一个示例是调用作为结构体成员的函数指针：

```rust
# struct A {
#    f: fn() -> &'static str
# }
# impl A {
#    fn f(&self) -> &'static str {
#        "The method f"
#    }
# }
# let a = A{f: || "The field f"};
#
assert_eq!( a.f (), "The method f");
assert_eq!((a.f)(), "The field f");
```

[place]: ../expressions.md#place-expressions-and-value-expressions
