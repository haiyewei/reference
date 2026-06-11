r[expr.block]
# 块表达式

r[expr.block.syntax]
```grammar,expressions
BlockExpression ->
    `{`
        InnerAttribute*
        Statements?
    `}`

BlockExpressionNoInnerAttributes ->
    `{`
        Statements?
    `}`

Statements ->
      Statement+
    | Statement+ ExpressionWithoutBlock
    | ExpressionWithoutBlock
```

r[expr.block.intro]
_块表达式_（或_块_）是一种控制流表达式，也是项和变量声明的匿名命名空间作用域。

r[expr.block.sequential-evaluation]
作为控制流表达式，块会顺序执行其组成的非项声明语句，然后执行其可选的最终表达式。

r[expr.block.namespace]
作为匿名命名空间作用域，项声明只在块本身内部处于作用域内，而 `let` 语句声明的变量从下一条语句开始直到块结束都处于作用域内。更多细节请参见[作用域](../names/scopes.md)章节。

r[expr.block.inner-attributes]
块的语法是 `{`，随后是任意[内部属性](../attributes.md)，随后是任意数量的[语句](../statements.md)，随后是一个可选表达式（称为最终操作数），最后是 `}`。

r[expr.block.statements]
语句通常必须后跟分号，但有两个例外：

1. 项声明语句不需要后跟分号。
2. 表达式语句通常需要后跟分号，但如果它的外层表达式是控制流表达式则例外。

r[expr.block.null-statement]
此外，语句之间允许出现额外的分号，但这些分号不影响语义。

r[expr.block.evaluation]
求值块表达式时，除项声明语句外，每条语句都会按顺序执行。

r[expr.block.result]
然后，如果给出了最终操作数，则执行该最终操作数。

r[expr.block.value-trailing-expr]
当块包含[最终操作数](block-expr.md#r-expr.block.inner-attributes)时，该块具有该最终操作数的类型和值。

```rust
let x: u8 = { 0u8 }; // `0u8` is the final operand.
assert_eq!(x, 0);
let x: u8 = { (); 0u8 }; // As above.
assert_eq!(x, 0);
```

r[expr.block.value-no-trailing-expr]
当块不包含[最终操作数](block-expr.md#r-expr.block.inner-attributes)且该块不发散时，该块具有[单元类型](../types/tuple.md#r-type.tuple.unit)和[单元值](../types/tuple.md#r-type.tuple.unit)。

```rust
let x: () = {}; // Has no final operand.
assert_eq!(x, ());
let x: () = { 0u8; }; // As above.
assert_eq!(x, ());
```

r[expr.block.value-diverges-no-trailing-expr]
当块不包含[最终操作数](block-expr.md#r-expr.block.inner-attributes)且该块[发散](block-expr.md#r-expr.block.diverging)时，该块具有 [never 类型](../types/never.md#r-type.never)，并且没有最终值（因为其类型是[无值](../glossary.md#r-glossary.uninhabited)的）。

```rust,no_run
fn f() -> ! { loop {}; } // Diverges and has no final operand.
//          ^^^^^^^^^^^^
// The body of a function is a block expression.
```

> [!NOTE]
> 注意，没有最终操作数的块不同于具有单元类型的显式最终操作数的块。例如，即使此块发散，该块的类型也是[单元](../types/tuple.md#r-type.tuple.unit)，而不是 [never](../types/never.md#r-type.never)。
>
> ```rust,compile_fail,E0308
> fn f() -> ! { loop {}; () } // ERROR: Mismatched types.
> //          ^^^^^^^^^^^^^^^ 此块具有单元类型。
> ```

> [!NOTE]
> 作为控制流表达式，如果块表达式是表达式语句的外层表达式，则预期类型是 `()`，除非它后面紧跟分号。

r[expr.block.diverging]
如果所有可达控制流路径都包含一个发散表达式，则块被认为是[发散的](../divergence.md#r-divergence)，除非该表达式是一个未被读取的[位置表达式](../expressions.md#r-expr.place-value.place-memory-location)。

```rust,no_run
# #![ feature(never_type) ]
fn no_control_flow() -> ! {
    // 没有条件语句，所以整个函数体是发散的。
    loop {}
}

fn control_flow_diverging() -> ! {
    // 所有路径都发散，所以整个函数体是发散的。
    if true {
        loop {}
    } else {
        loop {}
    }
}

fn control_flow_not_diverging() -> () {
    // 有些路径不发散，所以整个块不是发散的。
    if true {
        ()
    } else {
        loop {}
    }
}

// Note: This makes use of the unstable never type which is only available on
// Rust's nightly channel. This is done for illustration purposes. It is
// possible to encounter this scenario in stable Rust, but requires a more
// convoluted example.
struct Foo {
    x: !,
}

fn make<T>() -> T { loop {} }

fn diverging_place_read() -> ! {
    let foo = Foo { x: make() };
    // 读取位置表达式会产生发散块。
    let _x = foo.x;
}
```

```rust,compile_fail,E0308
# #![ feature(never_type) ]
# fn make<T>() -> T { loop {} }
# struct Foo {
#     x: !,
# }
fn diverging_place_not_read() -> ! {
    let foo = Foo { x: make() };
    // 对 `_` 赋值意味着该位置未被读取。
    let _ = foo.x;
} // ERROR: Mismatched types.
```

r[expr.block.value]
块始终是[值表达式](../expressions.md#place-expressions-and-value-expressions)，并在值表达式上下文中求值最后一个操作数。

> [!NOTE]
> 如果确实需要，这可以用来强制移动一个值。例如，下面的示例在调用 `consume_self` 时失败，因为结构体已在块表达式中从 `s` 移出。
>
> ```rust,compile_fail
> struct Struct;
>
> impl Struct {
>     fn consume_self(self) {}
>     fn borrow_self(&self) {}
> }
>
> fn move_by_block_expression() {
>     let s = Struct;
>
>     // 在块表达式中把值从 `s` 移出。
>     (&{ s }).borrow_self();
>
>     // 执行失败，因为 `s` 已被移出。
>     s.consume_self();
> }
> ```

r[expr.block.async]
## `async` 块

r[expr.block.async.syntax]
```grammar,expressions
AsyncBlockExpression -> `async` `move`? BlockExpression
```

r[expr.block.async.intro]
_async 块_是块表达式的一种变体，它求值为一个 future。

r[expr.block.async.future-result]
块的最终表达式（如果存在）决定该 future 的结果值。

r[expr.block.async.anonymous-type]
执行 `async` 块类似于执行闭包表达式：它的即时效果是产生并返回一个匿名类型。

r[expr.block.async.future]
不过，闭包返回的类型会实现一个或多个 [`std::ops::Fn`](../../core/ops/function/trait.Fn.html) trait，而 `async` 块返回的类型实现 [`std::future::Future`](../../core/future/future/trait.Future.html) trait。

r[expr.block.async.layout-unspecified]
此类型的实际数据格式是未指定的。

> [!NOTE]
> rustc 生成的 future 类型大致等价于一个 enum，其中每个 `await` 点对应一个变体，每个变体都存储从相应点恢复所需的数据。

r[expr.block.async.edition2018]
> [!EDITION-2018]
> `async` 块仅从 Rust 2018 开始可用。

r[expr.block.async.capture]
### 捕获模式

`async` 块使用与闭包相同的[捕获模式](../types/closure.md#capture-modes)从其环境中捕获变量。与闭包一样，写作 `async { .. }` 时，每个变量的捕获模式将从块的内容推断。不过，`async move { .. }` 块会把所有被引用的变量移动到生成的 future 中。

r[expr.block.async.context]
### async 上下文

由于 `async` 块构造一个 future，它们定义了一个 **async 上下文**，该上下文又可以包含 [`await` 表达式](await-expr.md)。async 上下文由 `async` 块以及 `async` 函数的主体建立；`async` 函数主体的语义是以 `async` 块来定义的。

r[expr.block.async.function]
### 控制流运算符

r[expr.block.async.function.intro]
`async` 块的行为类似于函数边界，很像闭包。

r[expr.block.async.function.return-try]
因此，`?` 运算符和 `return` 表达式都会影响 future 的输出，而不是外围函数或其他上下文。也就是说，在 `async` 块内部的 `return <expr>` 会把 `<expr>` 的结果作为 future 的输出返回。类似地，如果 `<expr>?` 传播错误，该错误会作为 future 的结果被传播。

r[expr.block.async.function.control-flow]
最后，`break` 和 `continue` 关键字不能用于从 `async` 块中跳出。因此，以下写法是非法的：

```rust,compile_fail
loop {
    async move {
        break; // error[E0267]: `break` inside of an `async` block
    }
}
```

r[expr.block.const]
## `const` 块

r[expr.block.const.syntax]
```grammar,expressions
ConstBlockExpression -> `const` BlockExpression
```

r[expr.block.const.intro]
_const 块_是块表达式的一种变体，其主体在编译时而不是运行时求值。

r[expr.block.const.context]
`const` 块允许你定义常量值，而无需定义新的[常量项](../items/constant-items.md)，因此它们有时也称为 _inline consts_。它们还支持类型推断，因此不同于[常量项](../items/constant-items.md)，不需要指定类型。

r[expr.block.const.generic-params]
`const` 块能够引用作用域内的泛型参数，这不同于[自由](../glossary.md#free-item)常量项。它们会被脱糖为带有作用域内泛型参数的常量项（类似关联常量，但没有与之关联的 trait 或类型）。例如，这段代码：

```rust
fn foo<T>() -> usize {
    const { std::mem::size_of::<T>() + 1 }
}
```

等价于：

```rust
fn foo<T>() -> usize {
    {
        struct Const<T>(T);
        impl<T> Const<T> {
            const CONST: usize = std::mem::size_of::<T>() + 1;
        }
        Const::<T>::CONST
    }
}
```

r[expr.block.const.evaluation]

如果 `const` 块表达式在运行时被执行，那么该常量保证会被求值，即使其返回值被忽略：

```rust
fn foo<T>() -> usize {
    // If this code ever gets executed, then the assertion has definitely
    // been evaluated at compile-time.
    const { assert!(std::mem::size_of::<T>() > 0); }
    // Here we can have unsafe code relying on the type being non-zero-sized.
    /* ... */
    42
}
```

r[expr.block.const.not-executed]

如果 `const` 块表达式在运行时未被执行，则它可能会也可能不会被求值：
```rust,compile_fail
if false {
    // 构建程序时可能会发生 panic，也可能不会发生。
    const { panic!(); }
}
```

r[expr.block.unsafe]
## `unsafe` 块

r[expr.block.unsafe.syntax]
```grammar,expressions
UnsafeBlockExpression -> `unsafe` BlockExpression
```

r[expr.block.unsafe.intro]
_有关何时使用 `unsafe` 的更多信息，请参见 [`unsafe` 块](../unsafe-keyword.md#unsafe-blocks-unsafe-)_。

可以在代码块前加上 `unsafe` 关键字，以允许[不安全操作](../unsafety.md)。示例：

```rust
unsafe {
    let b = [13u8, 17u8];
    let a = &b[0] as *const u8;
    assert_eq!(*a, 13);
    assert_eq!(*a.offset(1), 17);
}

# unsafe fn an_unsafe_fn() -> i32 { 10 }
let a = unsafe { an_unsafe_fn() };
```

r[expr.block.label]
## 带标签的块表达式

带标签的块表达式记载于[循环和其他可 `break` 表达式](loop-expr.md#r-expr.loop.block-labels)一节。

r[expr.block.attributes]
## 块表达式上的属性

r[expr.block.attributes.inner-attributes]
在以下情况下，[内部属性](../attributes.md)允许直接出现在块表达式的开花括号之后：

* [函数](../items/functions.md)和[方法](../items/associated-items.md#methods)的主体。
* 循环体（[`loop`](loop-expr.md#infinite-loops)、[`while`](loop-expr.md#predicate-loops) 和 [`for`](loop-expr.md#iterator-loops)）。
* 作为[语句](../statements.md)使用的块表达式。
* 作为[数组表达式](array-expr.md)、[元组表达式](tuple-expr.md)、[调用表达式](call-expr.md)和元组式 [struct](struct-expr.md) 表达式元素的块表达式。
* 作为另一个块表达式尾表达式的块表达式。
<!-- Keep list in sync with expressions.md -->

r[expr.block.attributes.valid]
在块表达式上有意义的属性是 [`cfg`](../conditional-compilation.md) 和 [lint 检查属性](../attributes/diagnostics.md#lint-check-attributes)。

例如，此函数在 unix 平台上返回 `true`，在其他平台上返回 `false`。

```rust
fn is_unix_platform() -> bool {
    #[cfg(unix)] { true }
    #[cfg(not(unix))] { false }
}
```

[`await` expressions]: await-expr.md
[`cfg`]: ../conditional-compilation.md
[`for`]: loop-expr.md#iterator-loops
[`loop`]: loop-expr.md#infinite-loops
[`unsafe` blocks]: ../unsafe-keyword.md#unsafe-blocks-unsafe-
[`while`]: loop-expr.md#predicate-loops
[array expressions]: array-expr.md
[call expressions]: call-expr.md
[capture modes]: ../types/closure.md#capture-modes
[constant items]: ../items/constant-items.md
[diverges]: expr.block.diverging
[final operand]: expr.block.inner-attributes
[free item]: ../glossary.md#free-item
[function]: ../items/functions.md
[inner attributes]: ../attributes.md
[method]: ../items/associated-items.md#methods
[mutable reference]: ../types/pointer.md#mutables-references-
[never type]: type.never
[never]: type.never
[place expression]: expr.place-value.place-memory-location
[scopes]: ../names/scopes.md
[shared references]: ../types/pointer.md#shared-references-
[statement]: ../statements.md
[statements]: ../statements.md
[struct]: struct-expr.md
[the lint check attributes]: ../attributes/diagnostics.md#lint-check-attributes
[tuple expressions]: tuple-expr.md
[uninhabited]: glossary.uninhabited
[unit type]: type.tuple.unit
[unit value]: type.tuple.unit
[unit]: type.tuple.unit
[unsafe operations]: ../unsafety.md
[value expressions]: ../expressions.md#place-expressions-and-value-expressions
[Loops and other breakable expressions]: expr.loop.block-labels
