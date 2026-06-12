r[expr.range]
# 范围表达式

r[expr.range.syntax]
```grammar,expressions
RangeExpression ->
      RangeExpr
    | RangeFromExpr
    | RangeToExpr
    | RangeFullExpr
    | RangeInclusiveExpr
    | RangeToInclusiveExpr

RangeExpr -> Expression `..` Expression

RangeFromExpr -> Expression `..`

RangeToExpr -> `..` Expression

RangeFullExpr -> `..`

RangeInclusiveExpr -> Expression `..=` Expression

RangeToInclusiveExpr -> `..=` Expression
```

r[expr.range.behavior]
`..` 和 `..=` 运算符会根据下表构造某个 `std::ops::Range`（或 `core::ops::Range`）变体的对象：

| 产生式 | 语法 | 类型 | 范围 |
|------------------------|---------------|------------------------------|-----------------------|
| [RangeExpr]            | start`..`end  | [std::ops::Range]            | start &le; x &lt; end |
| [RangeFromExpr]        | start`..`     | [std::ops::RangeFrom]        | start &le; x          |
| [RangeToExpr]          | `..`end       | [std::ops::RangeTo]          |            x &lt; end |
| [RangeFullExpr]        | `..`          | [std::ops::RangeFull]        |            -          |
| [RangeInclusiveExpr]   | start`..=`end | [std::ops::RangeInclusive]   | start &le; x &le; end |
| [RangeToInclusiveExpr] | `..=`end      | [std::ops::RangeToInclusive] |            x &le; end |

示例：

```rust
1..2;   // std::ops::Range
3..;    // std::ops::RangeFrom
..4;    // std::ops::RangeTo
..;     // std::ops::RangeFull
5..=6;  // std::ops::RangeInclusive
..=7;   // std::ops::RangeToInclusive
```

r[expr.range.equivalence]
以下表达式是等价的。

```rust
let x = std::ops::Range {start: 0, end: 10};
let y = 0..10;

assert_eq!(x, y);
```

r[expr.range.for]
范围可以用于 `for` 循环：

```rust
for i in 1..11 {
    println!("{}", i);
}
```
