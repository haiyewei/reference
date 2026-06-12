r[variable]
# 变量

r[variable.intro]
*变量*是栈帧的一个组成部分，可以是具名函数形参、匿名[临时量](expressions.md#temporaries)，或具名局部变量。

r[variable.local]
*局部变量*（或*栈局部*分配）直接持有一个值，该值分配在栈的内存中。该值是栈帧的一部分。

r[variable.local-mut]
局部变量是不可变的，除非另有声明。例如：`let mut x = ...`。

r[variable.param-mut]
函数形参是不可变的，除非用 `mut` 声明。`mut` 关键字只应用于紧随其后的形参。例如，`|mut x, y|` 和 `fn f(mut x: Box<i32>, y: Box<i32>)` 声明了一个可变变量 `x` 和一个不可变变量 `y`。

r[variable.init]
局部变量在分配时不会被初始化。相反，在进入帧时，会以未初始化状态分配整个帧所需的局部变量。函数内后续的语句可能初始化这些局部变量，也可能不初始化。只有当局部变量在所有可达控制流路径上都已经被初始化之后，才能使用它们。

在下一个示例中，`init_after_if` 在 [`if` 表达式](expressions/if-expr.md#if-expressions) 之后被初始化，而 `uninit_after_if` 没有被初始化，因为它在 `else` 情形中没有被初始化。

```rust
# fn random_bool() -> bool { true }
fn initialization_example() {
    let init_after_if: ();
    let uninit_after_if: ();

    if random_bool() {
        init_after_if = ();
        uninit_after_if = ();
    } else {
        init_after_if = ();
    }

    init_after_if; // ok
    // uninit_after_if; // err: use of possibly uninitialized `uninit_after_if`
}
```

[`if` expression]: expressions/if-expr.md#if-expressions
