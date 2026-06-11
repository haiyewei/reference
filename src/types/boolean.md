<div class="rule" id="r-type.bool"><a class="rule-link" href="#r-type.bool" title="type.bool"><span>[type<wbr>.bool]</span></a>
</div>

# 布尔类型

```rust
let b: bool = true;
```

<div class="rule" id="r-type.bool.intro"><a class="rule-link" href="#r-type.bool.intro" title="type.bool.intro"><span>[type<wbr>.bool<wbr>.intro]</span></a>
</div>

_布尔类型_ 或 _bool_ 是一种原始数据类型，可以取两个值之一，称为 _true_ 和 _false_。

<div class="rule" id="r-type.bool.literal"><a class="rule-link" href="#r-type.bool.literal" title="type.bool.literal"><span>[type<wbr>.bool<wbr>.literal]</span></a>
</div>

此类型的值可以使用 [字面量表达式](../expressions/literal-expr.md) 创建，使用关键字 `true` 和 `false`，分别对应同名的值。

<div class="rule" id="r-type.bool.namespace"><a class="rule-link" href="#r-type.bool.namespace" title="type.bool.namespace"><span>[type<wbr>.bool<wbr>.namespace]</span></a>
</div>

此类型是 [语言 prelude](../names/preludes.md#language-prelude) 的一部分，其 [名称](../names.md) 为 `bool`。

<div class="rule" id="r-type.bool.layout"><a class="rule-link" href="#r-type.bool.layout" title="type.bool.layout"><span>[type<wbr>.bool<wbr>.layout]</span></a>
</div>

布尔类型的对象的 [大小和对齐](../type-layout.md#size-and-alignment) 均为 1。

<div class="rule" id="r-type.bool.repr"><a class="rule-link" href="#r-type.bool.repr" title="type.bool.repr"><span>[type<wbr>.bool<wbr>.repr]</span></a>
</div>

值 false 的位模式为 `0x00`，值 true 的位模式为 `0x01`。布尔类型的对象具有任何其他位模式都是 [未定义行为](../behavior-considered-undefined.md)。

<div class="rule" id="r-type.bool.use"><a class="rule-link" href="#r-type.bool.use" title="type.bool.use"><span>[type<wbr>.bool<wbr>.use]</span></a>
</div>

在各种 [表达式](../expressions.md) 中，布尔类型是许多操作数的类型：

<div class="rule" id="r-type.bool.use-in-condition"><a class="rule-link" href="#r-type.bool.use-in-condition" title="type.bool.use-in-condition"><span>[type<wbr>.bool<wbr>.use-in-condition]</span></a>
</div>

- [if 表达式](../expressions/if-expr.md#if-expressions) 和 [while 表达式](../expressions/loop-expr.md#predicate-loops) 中的条件操作数

<div class="rule" id="r-type.bool.use-in-lazy-operator"><a class="rule-link" href="#r-type.bool.use-in-lazy-operator" title="type.bool.use-in-lazy-operator"><span>[type<wbr>.bool<wbr>.use-in-lazy-operator]</span></a>
</div>

- [惰性布尔运算符表达式](../expressions/operator-expr.md#lazy-boolean-operators) 中的操作数

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 布尔类型的行为类似于 [枚举类型](enum.md)，但它不是枚举类型。实际上，这主要意味着构造器并不关联到该类型（例如 `bool::true`）。

</div>

<div class="rule" id="r-type.bool.traits"><a class="rule-link" href="#r-type.bool.traits" title="type.bool.traits"><span>[type<wbr>.bool<wbr>.traits]</span></a>
</div>

与所有原始类型一样，布尔类型 [实现](../items/implementations.md) 了 [trait](../items/traits.md) [`Clone`](../special-types-and-traits.md#clone)、[`Copy`](../special-types-and-traits.md#copy)、[`Sized`](../special-types-and-traits.md#sized)、[`Send`](../special-types-and-traits.md#send) 和 [`Sync`](../special-types-and-traits.md#sync)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 有关库操作，请参见 [标准库文档](../../std/primitive.bool.html)。

</div>

<div class="rule" id="r-type.bool.expr"><a class="rule-link" href="#r-type.bool.expr" title="type.bool.expr"><span>[type<wbr>.bool<wbr>.expr]</span></a>
</div>

## 布尔值上的操作

当使用某些以布尔类型作为其操作数的运算符表达式时，它们会按 [布尔逻辑](https://en.wikipedia.org/wiki/Boolean_algebra) 的规则求值。

<div class="rule" id="r-type.bool.expr.not"><a class="rule-link" href="#r-type.bool.expr.not" title="type.bool.expr.not"><span>[type<wbr>.bool<wbr>.expr<wbr>.not]</span></a>
</div>

### 逻辑非

|`b`|[`!b`](../expressions/operator-expr.md#negation-operators)|
|---|----|
|`true`|`false`|
|`false`|`true`|

<div class="rule" id="r-type.bool.expr.or"><a class="rule-link" href="#r-type.bool.expr.or" title="type.bool.expr.or"><span>[type<wbr>.bool<wbr>.expr<wbr>.or]</span></a>
</div>

### 逻辑或

|`a`|`b`|[`a \| b`](../expressions/operator-expr.md#arithmetic-and-logical-binary-operators)|
|---|---|-------|
|`true`|`true`|`true`|
|`true`|`false`|`true`|
|`false`|`true`|`true`|
|`false`|`false`|`false`|

<div class="rule" id="r-type.bool.expr.and"><a class="rule-link" href="#r-type.bool.expr.and" title="type.bool.expr.and"><span>[type<wbr>.bool<wbr>.expr<wbr>.and]</span></a>
</div>

### 逻辑与

|`a`|`b`|[`a & b`](../expressions/operator-expr.md#arithmetic-and-logical-binary-operators)|
|---|---|-------|
|`true`|`true`|`true`|
|`true`|`false`|`false`|
|`false`|`true`|`false`|
|`false`|`false`|`false`|

<div class="rule" id="r-type.bool.expr.xor"><a class="rule-link" href="#r-type.bool.expr.xor" title="type.bool.expr.xor"><span>[type<wbr>.bool<wbr>.expr<wbr>.xor]</span></a>
</div>

### 逻辑异或

|`a`|`b`|[`a ^ b`](../expressions/operator-expr.md#arithmetic-and-logical-binary-operators)|
|---|---|-------|
|`true`|`true`|`false`|
|`true`|`false`|`true`|
|`false`|`true`|`true`|
|`false`|`false`|`false`|

<div class="rule" id="r-type.bool.expr.cmp"><a class="rule-link" href="#r-type.bool.expr.cmp" title="type.bool.expr.cmp"><span>[type<wbr>.bool<wbr>.expr<wbr>.cmp]</span></a>
</div>

### 比较

<div class="rule" id="r-type.bool.expr.cmp.eq"><a class="rule-link" href="#r-type.bool.expr.cmp.eq" title="type.bool.expr.cmp.eq"><span>[type<wbr>.bool<wbr>.expr<wbr>.cmp<wbr>.eq]</span></a>
</div>

|`a`|`b`|[`a == b`](../expressions/operator-expr.md#comparison-operators)|
|---|---|--------|
|`true`|`true`|`true`|
|`true`|`false`|`false`|
|`false`|`true`|`false`|
|`false`|`false`|`true`|

<div class="rule" id="r-type.bool.expr.cmp.greater"><a class="rule-link" href="#r-type.bool.expr.cmp.greater" title="type.bool.expr.cmp.greater"><span>[type<wbr>.bool<wbr>.expr<wbr>.cmp<wbr>.greater]</span></a>
</div>

|`a`|`b`|[`a > b`](../expressions/operator-expr.md#comparison-operators)|
|---|---|-------|
|`true`|`true`|`false`|
|`true`|`false`|`true`|
|`false`|`true`|`false`|
|`false`|`false`|`false`|

<div class="rule" id="r-type.bool.expr.cmp.not-eq"><a class="rule-link" href="#r-type.bool.expr.cmp.not-eq" title="type.bool.expr.cmp.not-eq"><span>[type<wbr>.bool<wbr>.expr<wbr>.cmp<wbr>.not-eq]</span></a>
</div>

- `a != b` 与 `!(a == b)` 相同

<div class="rule" id="r-type.bool.expr.cmp.greater-eq"><a class="rule-link" href="#r-type.bool.expr.cmp.greater-eq" title="type.bool.expr.cmp.greater-eq"><span>[type<wbr>.bool<wbr>.expr<wbr>.cmp<wbr>.greater-eq]</span></a>
</div>

- `a >= b` 与 `a == b | a > b` 相同

<div class="rule" id="r-type.bool.expr.cmp.less"><a class="rule-link" href="#r-type.bool.expr.cmp.less" title="type.bool.expr.cmp.less"><span>[type<wbr>.bool<wbr>.expr<wbr>.cmp<wbr>.less]</span></a>
</div>

- `a < b` 与 `!(a >= b)` 相同

<div class="rule" id="r-type.bool.expr.cmp.less-eq"><a class="rule-link" href="#r-type.bool.expr.cmp.less-eq" title="type.bool.expr.cmp.less-eq"><span>[type<wbr>.bool<wbr>.expr<wbr>.cmp<wbr>.less-eq]</span></a>
</div>

- `a <= b` 与 `a == b | a < b` 相同

<div class="rule" id="r-type.bool.validity"><a class="rule-link" href="#r-type.bool.validity" title="type.bool.validity"><span>[type<wbr>.bool<wbr>.validity]</span></a>
</div>

## 位有效性

保证 `bool` 的单个字节已初始化（换言之，`transmute::<bool, u8>(...)` 始终是健全的，但由于某些位模式是无效的 `bool`，其逆向转换并不总是健全的）。