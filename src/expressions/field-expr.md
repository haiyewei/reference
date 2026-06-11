r[expr.field]
# 字段访问表达式

r[expr.field.syntax]
```grammar,expressions
FieldExpression -> Expression `.` IDENTIFIER
```

r[expr.field.intro]
_字段表达式_是[位置表达式](../expressions.md#place-expressions-and-value-expressions)，其求值结果为 [struct](../items/structs.md) 或 [union](../items/unions.md) 的字段位置。

r[expr.field.mut]
当操作数是[可变的](../expressions.md#mutability)时，字段表达式也是可变的。

r[expr.field.form]
字段表达式的语法是一个称为_容器操作数_的表达式，随后是一个 `.`，最后是一个[标识符](../identifiers.md)。

r[expr.field.not-method-call]
字段表达式后面不能跟随一个用括号括起、以逗号分隔的表达式列表，因为那会改为解析为[方法调用表达式](method-call-expr.md)。也就是说，它们不能作为[调用表达式](call-expr.md)的函数操作数。

> [!NOTE]
> 若要在调用表达式中使用字段表达式，请将字段表达式包在[带括号表达式](grouped-expr.md)中。
>
> ```rust
> # struct HoldsCallable<F: Fn()> { callable: F }
> let holds_callable = HoldsCallable { callable: || () };
>
> // Invalid: Parsed as calling the method "callable"
> // holds_callable.callable();
>
> // Valid
> (holds_callable.callable)();
> ```

示例：

<!-- ignore: needs lots of support code -->
```rust,ignore
mystruct.myfield;
foo().x;
(Struct {a: 10, b: 20}).a;
(mystruct.function_field)() // Call expression containing a field expression
```

r[expr.field.autoref-deref]
## 自动解引用

如果容器操作数的类型根据该操作数是否[可变](../expressions.md#mutability)而实现了 [`Deref`](../special-types-and-traits.md#deref-and-derefmut) 或 [`DerefMut`](../special-types-and-traits.md#deref-and-derefmut)，则它会被_自动解引用_所需的次数，以使字段访问成为可能。这个过程也简称为 _autoderef_。

r[expr.field.borrow]
## 借用

借用时，struct 的字段或指向 struct 的引用的字段会被视为独立实体。如果该 struct 未实现 [`Drop`](../special-types-and-traits.md#drop) 且存储在局部变量中，这也适用于从其各个字段中移出。若自动解引用是通过 [`Box`](../special-types-and-traits.md#boxt) 以外的用户定义类型完成的，则这也不适用。

```rust
struct A { f1: String, f2: String, f3: String }
let mut x: A;
# x = A {
#     f1: "f1".to_string(),
#     f2: "f2".to_string(),
#     f3: "f3".to_string()
# };
let a: &mut String = &mut x.f1; // x.f1 borrowed mutably
let b: &String = &x.f2;         // x.f2 borrowed immutably
let c: &String = &x.f2;         // Can borrow again
let d: String = x.f3;           // Move out of x.f3
```

[`Box`]: ../special-types-and-traits.md#boxt
[`Deref`]: ../special-types-and-traits.md#deref-and-derefmut
[`drop`]: ../special-types-and-traits.md#drop
[identifier]: ../identifiers.md
[call expression]: call-expr.md
[method call expression]: method-call-expr.md
[mutable]: ../expressions.md#mutability
[parenthesized expression]: grouped-expr.md
[place expression]: ../expressions.md#place-expressions-and-value-expressions
[struct]: ../items/structs.md
[union]: ../items/unions.md
