r[macro]
# 宏

r[macro.intro]
Rust 的功能和语法可以通过称为宏的自定义定义来扩展。宏具有名称，并通过一致的语法调用：`some_extension!(...)`。

定义新宏有两种方式：

* [示例宏](macros-by-example.md)以更高层次的声明式方式定义新的语法。
* [过程宏](procedural-macros.md)使用对输入 token 进行操作的函数，定义类函数宏、自定义派生和自定义属性。

r[macro.invocation]
## 宏调用

r[macro.invocation.syntax]
```grammar,macros
MacroInvocation ->
    SimplePath `!` DelimTokenTree

DelimTokenTree ->
      `(` TokenTree* `)`
    | `[` TokenTree* `]`
    | `{` TokenTree* `}`

TokenTree ->
    Token _except [delimiters][lex.token.delim]_ | DelimTokenTree

MacroInvocationSemi ->
      SimplePath `!` `(` TokenTree* `)` `;`
    | SimplePath `!` `[` TokenTree* `]` `;`
    | SimplePath `!` `{` TokenTree* `}`
```

r[macro.invocation.intro]
宏调用会在编译时展开宏，并用宏的结果替换该调用。宏可以在以下情形中调用：

r[macro.invocation.expr]
* [表达式](expressions.md)和[语句](statements.md)

r[macro.invocation.pattern]
* [模式](patterns.md)

r[macro.invocation.type]
* [类型](types.md)

r[macro.invocation.item]
* [项](items.md)，包括[关联项](items/associated-items.md)

r[macro.invocation.nested]
* [`macro_rules`](macros-by-example.md) 转录器

r[macro.invocation.extern]
* [外部块](items/external-blocks.md)

r[macro.invocation.item-statement]
用作项或语句时，如果没有使用花括号且末尾需要分号，则使用 [MacroInvocationSemi](macros.md#grammar-MacroInvocationSemi) 形式。[可见性限定符](visibility-and-privacy.md)绝不允许出现在宏调用或 [`macro_rules`](macros-by-example.md) 定义之前。

```rust
// Used as an expression.
let x = vec![1,2,3];

// Used as a statement.
println!("Hello!");

// Used in a pattern.
macro_rules! pat {
    ($i:ident) => (Some($i))
}

if let pat!(x) = Some(1) {
    assert_eq!(x, 1);
}

// Used in a type.
macro_rules! Tuple {
    { $A:ty, $B:ty } => { ($A, $B) };
}

type N2 = Tuple!(i32, i32);

// Used as an item.
# use std::cell::RefCell;
thread_local!(static FOO: RefCell<u32> = RefCell::new(1));

// Used as an associated item.
macro_rules! const_maker {
    ($t:ty, $v:tt) => { const CONST: $t = $v; };
}
trait T {
    const_maker!{i32, 7}
}

// Macro calls within macros.
macro_rules! example {
    () => { println!("Macro call in a macro!") };
}
// Outer macro `example` is expanded, then inner macro `println` is expanded.
example!();
```

r[macro.invocation.name-resolution]

宏调用可以通过两类作用域解析：

- 文本作用域
  - [文本作用域 `macro_rules`](macros-by-example.md#r-macro.decl.scope.textual)
- 基于路径的作用域
  - [基于路径的作用域 `macro_rules`](macros-by-example.md#r-macro.decl.scope.path-based)
  - [过程宏](procedural-macros.md)

[External blocks]: items/external-blocks.md
[Macros by Example]: macros-by-example.md
[Procedural Macros]: procedural-macros.md
[`macro_rules`]: macros-by-example.md
[associated items]: items/associated-items.md
[delimiters]: tokens.md#delimiters
[expressions]: expressions.md
[items]: items.md
[patterns]: patterns.md
[statements]: statements.md
[types]: types.md
[visibility qualifiers]: visibility-and-privacy.md
