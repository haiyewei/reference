r[type.bool]
# 布尔类型

```rust
let b: bool = true;
```

r[type.bool.intro]
_布尔类型_ 或 _bool_ 是一种原始数据类型，可以取两个值之一，称为 _true_ 和 _false_。

r[type.bool.literal]
此类型的值可以使用 [字面量表达式](../expressions/literal-expr.md) 创建，使用关键字 `true` 和 `false`，分别对应同名的值。

r[type.bool.namespace]
此类型是 [语言 prelude](../names/preludes.md#language-prelude) 的一部分，其 [名称](../names.md) 为 `bool`。

r[type.bool.layout]
布尔类型的对象的 [大小和对齐](../type-layout.md#size-and-alignment) 均为 1。

r[type.bool.repr]
值 false 的位模式为 `0x00`，值 true 的位模式为 `0x01`。布尔类型的对象具有任何其他位模式都是 [未定义行为](../behavior-considered-undefined.md)。

r[type.bool.use]
在各种 [表达式](../expressions.md) 中，布尔类型是许多操作数的类型：

r[type.bool.use-in-condition]
* [if 表达式](../expressions/if-expr.md#if-expressions) 和 [while 表达式](../expressions/loop-expr.md#predicate-loops) 中的条件操作数

r[type.bool.use-in-lazy-operator]
* [惰性布尔运算符表达式](../expressions/operator-expr.md#lazy-boolean-operators) 中的操作数

> [!NOTE]
> 布尔类型的行为类似于 [枚举类型](enum.md)，但它不是枚举类型。实际上，这主要意味着构造器并不关联到该类型（例如 `bool::true`）。

r[type.bool.traits]
与所有原始类型一样，布尔类型 [实现](../items/implementations.md) 了 [trait](../items/traits.md) [`Clone`](../special-types-and-traits.md#clone)、[`Copy`](../special-types-and-traits.md#copy)、[`Sized`](../special-types-and-traits.md#sized)、[`Send`](../special-types-and-traits.md#send) 和 [`Sync`](../special-types-and-traits.md#sync)。

> [!NOTE]
> 有关库操作，请参见 [标准库文档](../../std/primitive.bool.html)。

r[type.bool.expr]
## 布尔值上的操作

当使用某些以布尔类型作为其操作数的运算符表达式时，它们会按 [布尔逻辑](https://en.wikipedia.org/wiki/Boolean_algebra) 的规则求值。

r[type.bool.expr.not]
### 逻辑非

| `b` | [`!b`][op-not] | |- | - | | `true` | `false` | | `false` | `true` |

r[type.bool.expr.or]
### 逻辑或

| `a` | `b` | [`a \| b`][op-or] | |- | - | - | | `true` | `true` | `true` | | `true` | `false` | `true` | | `false` | `true` | `true` | | `false` | `false` | `false` |

r[type.bool.expr.and]
### 逻辑与

| `a` | `b` | [`a & b`][op-and] | |- | - | - | | `true` | `true` | `true` | | `true` | `false` | `false` | | `false` | `true` | `false` | | `false` | `false` | `false` |

r[type.bool.expr.xor]
### 逻辑异或

| `a` | `b` | [`a ^ b`][op-xor] | |- | - | - | | `true` | `true` | `false` | | `true` | `false` | `true` | | `false` | `true` | `true` | | `false` | `false` | `false` |

r[type.bool.expr.cmp]
### 比较

r[type.bool.expr.cmp.eq]
| `a` | `b` | [`a == b`][op-compare] | |- | - | - | | `true` | `true` | `true` | | `true` | `false` | `false` | | `false` | `true` | `false` | | `false` | `false` | `true` |

r[type.bool.expr.cmp.greater]
| `a` | `b` | [`a > b`][op-compare] | |- | - | - | | `true` | `true` | `false` | | `true` | `false` | `true` | | `false` | `true` | `false` | | `false` | `false` | `false` |

r[type.bool.expr.cmp.not-eq]
* `a != b` 与 `!(a == b)` 相同

r[type.bool.expr.cmp.greater-eq]
* `a >= b` 与 `a == b | a > b` 相同

r[type.bool.expr.cmp.less]
* `a < b` 与 `!(a >= b)` 相同

r[type.bool.expr.cmp.less-eq]
* `a <= b` 与 `a == b | a < b` 相同

r[type.bool.validity]
## 位有效性

保证 `bool` 的单个字节已初始化（换言之，`transmute::<bool, u8>(...)` 始终是健全的，但由于某些位模式是无效的 `bool`，其逆向转换并不总是健全的）。

[boolean logic]: https://en.wikipedia.org/wiki/Boolean_algebra
[enumerated type]: enum.md
[expressions]: ../expressions.md
[if expressions]: ../expressions/if-expr.md#if-expressions
[language prelude]: ../names/preludes.md#language-prelude
[lazy]: ../expressions/operator-expr.md#lazy-boolean-operators
[literal expression]: ../expressions/literal-expr.md
[name]: ../names.md
[op-and]: ../expressions/operator-expr.md#arithmetic-and-logical-binary-operators
[op-compare]: ../expressions/operator-expr.md#comparison-operators
[op-not]: ../expressions/operator-expr.md#negation-operators
[op-or]: ../expressions/operator-expr.md#arithmetic-and-logical-binary-operators
[op-xor]: ../expressions/operator-expr.md#arithmetic-and-logical-binary-operators
[p-clone]: ../special-types-and-traits.md#clone
[p-copy]: ../special-types-and-traits.md#copy
[p-impl]: ../items/implementations.md
[p-send]: ../special-types-and-traits.md#send
[p-sized]: ../special-types-and-traits.md#sized
[p-sync]: ../special-types-and-traits.md#sync
[p-traits]: ../items/traits.md
[size and alignment]: ../type-layout.md#size-and-alignment
[undefined behavior]: ../behavior-considered-undefined.md
[while expressions]: ../expressions/loop-expr.md#predicate-loops
