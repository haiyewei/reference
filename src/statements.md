r[statement]
# 语句

r[statement.syntax]
```grammar,statements
Statement ->
      `;`
    | Item
    | LetStatement
    | ExpressionStatement
    | OuterAttribute* MacroInvocationSemi
```

r[statement.intro]
_语句_是[块](expressions/block-expr.md)的组成部分，而块又是外层[表达式](expressions.md)或[函数](items/functions.md)的组成部分。

r[statement.kind]
Rust 有两种语句：[声明语句](#declaration-statements)和[表达式语句](#expression-statements)。

r[statement.decl]
## 声明语句

_声明语句_会向外围语句块中引入一个或多个_名称_。被声明的名称可以表示新的变量或新的[项](items.md)。

声明语句有两种：项声明和 `let` 语句。

r[statement.item]
### 项声明

r[statement.item.intro]
_项声明语句_的语法形式与[模块](items/modules.md)内的[项声明](items.md)相同。

r[statement.item.scope]
在语句块内声明项会将其[作用域](names/scopes.md)限制为包含该语句的块。该项不会被赋予[规范路径](paths.md#canonical-paths)，它可能声明的任何子项也不会被赋予规范路径。

r[statement.item.associated-scope]
对此的例外是，由[实现](items/implementations.md)定义的关联项，只要该项以及适用时的 trait 可访问，就仍可在外层作用域中访问。除此之外，它的含义与在模块内声明该项相同。

r[statement.item.outer-generics]
不会隐式捕获所在函数的泛型参数、参数和局部变量。例如，`inner` 不能访问 `outer_var`。

```rust
fn outer() {
  let outer_var = true;

  fn inner() { /* outer_var is not in scope here */ }

  inner();
}
```

r[statement.let]
### `let` 语句

r[statement.let.syntax]
```grammar,statements
LetStatement ->
    OuterAttribute* `let` PatternNoTopAlt ( `:` Type )?
    (
          `=` Expression
        | `=` Expression _except [LazyBooleanExpression] or end with a `}`_
              `else` BlockExpressionNoInnerAttributes
    )? `;`
```

r[statement.let.intro]
_`let` 语句_会引入一组新的[变量](variables.md)，这些变量由[模式](patterns.md)给出。模式后面可以可选地跟随类型标注，然后要么结束，要么跟随一个初始化表达式以及可选的 `else` 块。

r[statement.let.inference]
如果未给出类型标注，编译器会推断类型；如果可用于明确推断的类型信息不足，则会报错。

r[statement.let.scope]
由变量声明引入的任何变量，从声明点开始到外围块作用域结束为止都是可见的，除非它们被另一个变量声明遮蔽。

r[statement.let.constraint]
如果不存在 `else` 块，则模式必须是不可反驳的。如果存在 `else` 块，则模式可以是可反驳的。

r[statement.let.behavior]
如果模式不匹配（这要求它是可反驳的），则执行 `else` 块。`else` 块必须始终发散（求值为 [never 类型](types/never.md)）。

```rust
let (mut v, w) = (vec![1, 2, 3], 42); // The bindings may be mut or const
let Some(t) = v.pop() else { // Refutable patterns require an else block
    panic!(); // The else block must diverge
};
let [u, v] = [v[0], v[1]] else { // This pattern is irrefutable, so the compiler
                                 // will lint as the else block is redundant.
    panic!();
};
```

r[statement.expr]
## 表达式语句

r[statement.expr.syntax]
```grammar,statements
ExpressionStatement ->
      ExpressionWithoutBlock `;`
    | ExpressionWithBlock `;`?
```

r[statement.expr.intro]
_表达式语句_会对一个[表达式](expressions.md)求值并忽略其结果。通常，表达式语句的目的是触发对其表达式求值所产生的效果。

r[statement.expr.restriction-semicolon]
如果一个表达式仅由[块表达式](expressions/block-expr.md)或控制流表达式组成，并且用于允许语句的上下文中，则可以省略尾随分号。这可能导致歧义：它既可能被解析为独立语句，也可能被解析为另一个表达式的一部分；在这种情况下，它会被解析为语句。

r[statement.expr.constraint-block]
[ExpressionWithBlock](expressions.md#grammar-ExpressionWithBlock) 表达式在用作语句时，其类型必须是单元类型。

```rust
# let mut v = vec![1, 2, 3];
v.pop();          // Ignore the element returned from pop
if v.is_empty() {
    v.push(5);
} else {
    v.remove(0);
}                 // Semicolon can be omitted.
[1];              // Separate expression statement, not an indexing expression.
```

当省略尾随分号时，结果必须是类型 `()`。

```rust
// bad: the block's type is i32, not ()
// Error: expected `()` because of default return type
// if true {
//   1
// }

// good: the block's type is i32
if true {
  1
} else {
  2
};
```

r[statement.attribute]
## 语句上的属性

语句接受[外部属性](attributes.md)。在语句上有意义的属性是 [`cfg`](conditional-compilation.md) 和 [lint 检查属性](attributes/diagnostics.md#lint-check-attributes)。

[block]: expressions/block-expr.md
[expression]: expressions.md
[function]: items/functions.md
[item]: items.md
[module]: items/modules.md
[never type]: types/never.md
[canonical path]: paths.md#canonical-paths
[implementations]: items/implementations.md
[variables]: variables.md
[outer attributes]: attributes.md
[`cfg`]: conditional-compilation.md
[the lint check attributes]: attributes/diagnostics.md#lint-check-attributes
[pattern]: patterns.md
[scope]: names/scopes.md
