r[type.tuple]
# 元组类型

r[type.tuple.syntax]
```grammar,types
TupleType ->
      `(` `)`
    | `(` ( Type `,` )+ Type? `)`
```

r[type.tuple.intro]
*元组类型*是一族结构类型[^1]，用于由其他类型组成的异构列表。

元组类型的语法是一个用括号括起、以逗号分隔的类型列表。

r[type.tuple.restriction]
一元元组要求在其元素类型后带有逗号，以便与[带括号类型](../types.md#parenthesized-types)区分开。

r[type.tuple.field-number]
元组类型的字段数等于类型列表的长度。该字段数决定元组的*元数*。具有 `n` 个字段的元组称为 *n 元元组*。例如，具有 2 个字段的元组是二元元组。

r[type.tuple.field-name]
元组的字段使用与它们在类型列表中位置相匹配的递增数字名称来命名。第一个字段是 `0`。第二个字段是 `1`。以此类推。每个字段的类型是元组类型列表中相同位置的类型。

r[type.tuple.unit]
出于便利和历史原因，没有字段的元组类型（`()`）通常称为 _unit_ 或 _the unit type_（单元类型）。它的唯一值也称为 _unit_ 或 _the unit value_（单元值）。

元组类型的一些示例：

* `()`（单元）
* `(i32,)`（1-ary 元组）
* `(f64, f64)`
* `(String, i32)`
* `(i32, String)`（与前一个示例是不同的类型）
* `(i32, f64, Vec<String>, Option<bool>)`

r[type.tuple.constructor]
此类型的值使用[元组表达式](../expressions/tuple-expr.md#tuple-expressions)构造。此外，当没有其他有意义的求值结果时，各种表达式会产生单元值。

r[type.tuple.access]
元组字段可以通过[元组索引表达式](../expressions/tuple-expr.md#tuple-indexing-expressions)或[模式匹配](../patterns.md#tuple-patterns)访问。

[^1]: 如果结构类型的内部类型等价，那么它们总是等价的。关于元组的名义版本，请参见 [元组结构体](./struct.md)。

[parenthesized type]: ../types.md#parenthesized-types
[pattern matching]: ../patterns.md#tuple-patterns
[tuple expression]: ../expressions/tuple-expr.md#tuple-expressions
[tuple index expression]: ../expressions/tuple-expr.md#tuple-indexing-expressions
[tuple structs]: ./struct.md
