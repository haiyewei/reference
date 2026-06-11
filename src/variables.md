<div class="rule" id="r-variable"><a class="rule-link" href="#r-variable" title="variable"><span>[variable]</span></a>
</div>

# 变量

<div class="rule" id="r-variable.intro"><a class="rule-link" href="#r-variable.intro" title="variable.intro"><span>[variable<wbr>.intro]</span></a>
</div>

\_变量_是栈帧的一个组成部分，可以是具名函数形参、匿名[临时量](expressions.md#temporaries)，或具名局部变量。

<div class="rule" id="r-variable.local"><a class="rule-link" href="#r-variable.local" title="variable.local"><span>[variable<wbr>.local]</span></a>
</div>

_局部变量_（或_栈局部_分配）直接持有一个值，该值分配在栈的内存中。该值是栈帧的一部分。

<div class="rule" id="r-variable.local-mut"><a class="rule-link" href="#r-variable.local-mut" title="variable.local-mut"><span>[variable<wbr>.local-mut]</span></a>
</div>

局部变量是不可变的，除非另有声明。例如：`let mut x = ...`。

<div class="rule" id="r-variable.param-mut"><a class="rule-link" href="#r-variable.param-mut" title="variable.param-mut"><span>[variable<wbr>.param-mut]</span></a>
</div>

函数形参是不可变的，除非用 `mut` 声明。`mut` 关键字只应用于紧随其后的形参。例如，`|mut x, y|` 和 `fn f(mut x: Box<i32>, y: Box<i32>)` 声明了一个可变变量 `x` 和一个不可变变量 `y`。

<div class="rule" id="r-variable.init"><a class="rule-link" href="#r-variable.init" title="variable.init"><span>[variable<wbr>.init]</span></a>
</div>

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