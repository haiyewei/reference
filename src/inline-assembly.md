r[asm]
# 内联汇编

r[asm.intro]
内联汇编支持由 [`asm!`](core::arch::asm)、[`naked_asm!`](core::arch::naked_asm) 和 [`global_asm!`](core::arch::global_asm) 宏提供。它可用于将手写汇编嵌入编译器生成的汇编输出中。

[`asm!`]: core::arch::asm
[`naked_asm!`]: core::arch::naked_asm
[`global_asm!`]: core::arch::global_asm

r[asm.stable-targets]
以下架构上的内联汇编支持是稳定的：
- x86 和 x86-64
- ARM
- AArch64 和 Arm64EC
- RISC-V
- LoongArch
- s390x
- PowerPC 和 PowerPC64

如果在不受支持的目标上使用汇编宏，编译器会发出错误。

r[asm.example]
## 示例

```rust
# #[cfg(target_arch = "x86_64")] {
use std::arch::asm;

// 使用移位和加法将 x 乘以 6
let mut x: u64 = 4;
unsafe {
    asm!(
        "mov {tmp}, {x}",
        "shl {tmp}, 1",
        "shl {x}, 2",
        "add {x}, {tmp}",
        x = inout(reg) x,
        tmp = out(reg) _,
    );
}
assert_eq!(x, 4 * 6);
# }
```

r[asm.syntax]
## 语法

以下语法指定了可以传递给 `asm!`、`global_asm!` 和 `naked_asm!` 宏的参数。

```grammar,assembly
@root AsmArgs -> AsmAttrFormatString (`,` AsmAttrFormatString)* (`,` AsmAttrOperand)* `,`?

FormatString -> STRING_LITERAL | RAW_STRING_LITERAL | MacroInvocation

AsmAttrFormatString -> (OuterAttribute)* FormatString

AsmOperand ->
      ClobberAbi
    | AsmOptions
    | RegOperand

AsmAttrOperand -> (OuterAttribute)* AsmOperand

ClobberAbi -> `clobber_abi` `(` Abi (`,` Abi)* `,`? `)`

AsmOptions ->
    `options` `(` ( AsmOption (`,` AsmOption)* `,`? )? `)`

AsmOption ->
      `pure`
    | `nomem`
    | `readonly`
    | `preserves_flags`
    | `noreturn`
    | `nostack`
    | `att_syntax`
    | `raw`

RegOperand -> (ParamName `=`)?
    (
          DirSpec `(` RegSpec `)` Expression
        | DualDirSpec `(` RegSpec `)` DualDirSpecExpression
        | `sym` PathExpression
        | `const` Expression
        | `label` `{` Statements? `}`
    )

ParamName -> IDENTIFIER_OR_KEYWORD | RAW_IDENTIFIER

DualDirSpecExpression ->
      Expression
    | Expression `=>` Expression

RegSpec -> RegisterClass | ExplicitRegister

RegisterClass -> IDENTIFIER_OR_KEYWORD

ExplicitRegister -> STRING_LITERAL

DirSpec ->
      `in`
    | `out`
    | `lateout`

DualDirSpec ->
      `inout`
    | `inlateout`
```

r[asm.scope]
## 作用域

r[asm.scope.intro]
内联汇编可以通过三种方式之一使用。

r[asm.scope.asm]
使用 `asm!` 宏时，汇编代码会在函数作用域中发出，并集成到编译器生成的函数汇编代码中。此汇编代码必须遵守[严格规则](#rules-for-inline-assembly)，以避免未定义行为。注意，在某些情况下，编译器可能会选择将汇编代码作为单独的函数发出，并生成对它的调用。

```rust
# #[cfg(target_arch = "x86_64")] {
unsafe { core::arch::asm!("/* {} */", in(reg) 0); }
# }
```

r[asm.scope.naked_asm]
使用 `naked_asm!` 宏时，汇编代码会在函数作用域中发出，并构成函数的完整汇编代码。`naked_asm!` 宏只允许用于 [naked 函数](attributes/codegen.md#the-naked-attribute)。

```rust
# #[cfg(target_arch = "x86_64")] {
# #[unsafe(naked)]
# extern "C" fn wrapper() {
core::arch::naked_asm!("/* {} */", const 0);
# }
# }
```

r[asm.scope.global_asm]
使用 `global_asm!` 宏时，汇编代码会在函数外部的全局作用域中发出。这可用于用汇编代码手写整个函数，并且通常为使用任意寄存器和汇编器指令提供大得多的自由度。

```rust
# fn main() {}
# #[cfg(target_arch = "x86_64")]
core::arch::global_asm!("/* {} */", const 0);
```

r[asm.ts-args]
## 模板字符串参数

r[asm.ts-args.syntax]
汇编器模板使用与[格式字符串](std::fmt#syntax)相同的语法（即，占位符由花括号指定）。

r[asm.ts-args.order]
对应的参数会按顺序、按索引或按名称访问。

```rust
# #[cfg(target_arch = "x86_64")] {
let x: i64;
let y: i64;
let z: i64;
// 这个
unsafe { core::arch::asm!("mov {}, {}", out(reg) x, in(reg) 5); }
// ... 这个
unsafe { core::arch::asm!("mov {0}, {1}", out(reg) y, in(reg) 5); }
// ... 以及这个
unsafe { core::arch::asm!("mov {out}, {in}", out = out(reg) z, in = in(reg) 5); }
// 都具有相同的行为
assert_eq!(x, y);
assert_eq!(y, z);
# }
```

r[asm.ts-args.no-implicit]
但是，不支持隐式命名参数（由 [RFC #2795](https://github.com/rust-lang/rfcs/pull/2795) 引入）。

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
let x = 5;
// 不能直接引用作用域中的 `x`，需要像 `in(reg) x` 这样的操作数
unsafe { core::arch::asm!("/* {x} */"); } // ERROR: no argument named x
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.ts-args.one-or-more]
一次 `asm!` 调用可以有一个或多个模板字符串参数；带有多个模板字符串参数的 `asm!` 会被视为所有字符串之间用 `\n` 连接在一起。预期用法是每个模板字符串参数对应一行汇编代码。

```rust
# #[cfg(target_arch = "x86_64")] {
let x: i64;
let y: i64;
// 可以把多个字符串分开写，就像它们写在一起一样
unsafe { core::arch::asm!("mov eax, 5", "mov ecx, eax", out("rax") x, out("rcx") y); }
assert_eq!(x, y);
# }
```

r[asm.ts-args.before-other-args]
所有模板字符串参数都必须出现在任何其他参数之前。

```rust,compile_fail
let x = 5;
# #[cfg(target_arch = "x86_64")] {
// 模板字符串需要首先出现在 asm 调用中
unsafe { core::arch::asm!("/* {x} */", x = const 5, "ud2"); } // ERROR: unexpected token
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.ts-args.positional-first]
与格式字符串一样，位置参数必须出现在命名参数和显式[寄存器操作数](#register-operands)之前。

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
// 命名操作数需要位于位置操作数之后
unsafe { core::arch::asm!("/* {x} {} */", x = const 5, in(reg) 5); }
// ERROR: positional arguments cannot follow named arguments or explicit register arguments
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
// 也不能将显式寄存器放在位置操作数之前
unsafe { core::arch::asm!("/* {} */", in("eax") 0, in(reg) 5); }
// ERROR: positional arguments cannot follow named arguments or explicit register arguments
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.ts-args.register-operands]
模板字符串中的占位符不能引用显式寄存器操作数。

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
// 显式寄存器操作数不会被替换，请在字符串中显式使用 `eax`
unsafe { core::arch::asm!("/* {} */", in("eax") 5); }
// ERROR: invalid reference to argument at index 0
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.ts-args.at-least-once]
所有其他命名操作数和位置操作数都必须在模板字符串中至少出现一次，否则会生成编译器错误。

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
// 必须在格式字符串中命名所有操作数
unsafe { core::arch::asm!("", in(reg) 5, x = const 5); }
// ERROR: multiple unused asm arguments
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.ts-args.opaque]
确切的汇编代码语法是目标特定的，并且除了操作数被替换进模板字符串以形成传递给汇编器的代码这一方式之外，对编译器是不透明的。

r[asm.ts-args.llvm-syntax]
目前，所有受支持目标都遵循 LLVM 内部汇编器所用的汇编代码语法，该语法通常对应于 GNU 汇编器（GAS）的语法。在 x86 上，默认使用 GAS 的 `.intel_syntax noprefix` 模式。在 ARM 上，使用 `.syntax unified` 模式。这些目标对汇编代码施加一个额外限制：任何汇编器状态（例如可用 `.section` 改变的当前节）都必须在 asm 字符串结束时恢复为其原始值。不符合 GAS 语法的汇编代码会导致汇编器特定的行为。内联汇编所用汇编器指令的进一步约束由[指令支持](#directives-support)指明。

[format-syntax]: std::fmt#syntax
[rfc-2795]: https://github.com/rust-lang/rfcs/pull/2795

r[asm.attributes]
## 属性

r[asm.attributes.supported-attributes]
只有 [`cfg`](conditional-compilation.md#the-cfg-attribute) 和 [`cfg_attr`](conditional-compilation.md#the-cfg_attr-attribute) 属性在内联汇编模板字符串和操作数上会被语义上接受。其他属性会被解析，但在展开汇编宏时被拒绝。

```rust
# fn main() {}
# #[cfg(target_arch = "x86_64")]
core::arch::global_asm!(
    #[cfg(not(panic = "abort"))]
    ".cfi_startproc",
    // ...
    "ret",
    #[cfg(not(panic = "abort"))]
    ".cfi_endproc",
);
```

> [!NOTE]
> 在 `rustc` 中，汇编宏对这些属性的处理独立于语言中处理类似属性的常规系统。这解释了受支持属性种类有限的原因，也可能产生行为上的细微差异。

r[asm.attributes.starts-with-template]
从语法上讲，在第一个操作数之前必须至少有一个模板字符串。

```rust,compile_fail
// 这会被拒绝，因为 `a = out(reg) x` 不会被解析为
// 模板字符串。
core::arch::asm!(
    #[cfg(false)]
    a = out(reg) x, // ERROR.
    "",
);
```

[`cfg`]: conditional-compilation.md#the-cfg-attribute
[`cfg_attr`]: conditional-compilation.md#the-cfg_attr-attribute

r[asm.operand-type]
## 操作数类型

r[asm.operand-type.supported-operands]
支持多种类型的操作数：

r[asm.operand-type.supported-operands.in]
* `in(<reg>) <expr>`
  - `<reg>` 可以指代寄存器类或显式寄存器。分配到的寄存器名称会替换到 asm 模板字符串中。
  - 在汇编代码开始时，分配到的寄存器将包含 `<expr>` 的值。
  - 在汇编代码结束时，分配到的寄存器必须包含相同的值（除非 `lateout` 被分配到同一寄存器）。

```rust
# #[cfg(target_arch = "x86_64")] {
// ``in` 可用于把值传入内联汇编...
unsafe { core::arch::asm!("/* {} */", in(reg) 5); }
# }
```

> [!NOTE]
> 如果值的类型小于寄存器，则高位的值是平台特定的。一些目标会将高位清零，而其他目标则保持高位不变。

r[asm.operand-type.supported-operands.out]
* `out(<reg>) <expr>`
  - `<reg>` 可以指代寄存器类或显式寄存器。分配到的寄存器名称会替换到 asm 模板字符串中。
  - 在汇编代码开始时，分配到的寄存器将包含未定义值。
  - `<expr>` 必须是一个（可能未初始化的）位置表达式，汇编代码结束时，分配到的寄存器的内容会写入其中。
  - 可以指定下划线（`_`）来代替表达式，这会导致寄存器的内容在汇编代码结束时被丢弃（实际上起到 clobber 的作用）。

```rust
# #[cfg(target_arch = "x86_64")] {
let x: i64;
// 而 `out` 可用于把值传回 Rust。
unsafe { core::arch::asm!("/* {} */", out(reg) x); }
# }
```

r[asm.operand-type.supported-operands.lateout]
* `lateout(<reg>) <expr>`
  - 与 `out` 相同，只是寄存器分配器可以复用分配给某个 `in` 的寄存器。
  - 只有在读取完所有输入之后，才应该写入该寄存器；否则可能会 clobber 某个输入。

```rust
# #[cfg(target_arch = "x86_64")] {
let x: i64;
// `lateout` 与 `out` 相同，
// 但编译器知道，到我们覆盖它时，
// 我们已经不关心任何输入的值。
unsafe { core::arch::asm!("mov {}, 5", lateout(reg) x); }
assert_eq!(x, 5)
# }
```

r[asm.operand-type.supported-operands.inout]
* `inout(<reg>) <expr>`
  - `<reg>` 可以指代寄存器类或显式寄存器。分配到的寄存器名称会替换到 asm 模板字符串中。
  - 在汇编代码开始时，分配到的寄存器将包含 `<expr>` 的值。
  - `<expr>` 必须是一个已初始化的可变位置表达式，汇编代码结束时，分配到的寄存器的内容会写入其中。

```rust
# #[cfg(target_arch = "x86_64")] {
let mut x: i64 = 4;
// `inout` 可用于在寄存器中修改值
unsafe { core::arch::asm!("inc {}", inout(reg) x); }
assert_eq!(x, 5);
# }
```

r[asm.operand-type.supported-operands.inout-arrow]
* `inout(<reg>) <in expr> => <out expr>`
  - 与 `inout` 相同，只是寄存器的初始值取自 `<in expr>` 的值。
  - `<out expr>` 必须是一个（可能未初始化的）位置表达式，汇编代码结束时，分配到的寄存器的内容会写入其中。
  - 对于 `<out expr>`，可以指定下划线（`_`）来代替表达式，这会导致寄存器的内容在汇编代码结束时被丢弃（实际上起到 clobber 的作用）。
  - `<in expr>` 和 `<out expr>` 可以具有不同类型。

```rust
# #[cfg(target_arch = "x86_64")] {
let x: i64;
// `inout` 也可以把值移动到不同位置
unsafe { core::arch::asm!("inc {}", inout(reg) 4u64=>x); }
assert_eq!(x, 5);
# }
```

r[asm.operand-type.supported-operands.inlateout]
* `inlateout(<reg>) <expr>` / `inlateout(<reg>) <in expr> => <out expr>`
  - 与 `inout` 相同，只是寄存器分配器可以复用分配给某个 `in` 的寄存器（如果编译器知道该 `in` 与 `inlateout` 具有相同初始值，就可能发生这种情况）。
  - 只有在读取完所有输入之后，才应该写入该寄存器；否则可能会 clobber 某个输入。

```rust
# #[cfg(target_arch = "x86_64")] {
let mut x: i64 = 4;
// `inlateout` 是使用 `lateout` 的 `inout`
unsafe { core::arch::asm!("inc {}", inlateout(reg) x); }
assert_eq!(x, 5);
# }
```

r[asm.operand-type.supported-operands.sym]
* `sym <path>`
  - `<path>` 必须指向 `fn` 或 `static`。
  - 指向该项的经名称修饰的符号名会替换到 asm 模板字符串中。
  - 替换进去的字符串不包含任何修饰符（例如 GOT、PLT、重定位等）。
  - `<path>` 允许指向 `#[thread_local]` static；在这种情况下，汇编代码可以将该符号与重定位（例如 `@plt`、`@TPOFF`）组合起来，以读取线程局部数据。

```rust
# #[cfg(target_arch = "x86_64")] {
extern "C" fn foo() {
    println!("Hello from inline assembly")
}
// `sym` 可用于引用函数（即使它没有
// 可供我们直接书写的外部名称）
unsafe { core::arch::asm!("call {}", sym foo, clobber_abi("C")); }
# }
```

r[asm.operand-type.supported-operands.const]
* `const <expr>`
  - `<expr>` 必须是整数常量表达式。该表达式遵循与内联 `const` 块相同的规则。
  - 该表达式的类型可以是任意整数类型，但和整数字面量一样，默认是 `i32`。
  - 该表达式的值会被格式化为字符串，并直接替换到 asm 模板字符串中。

```rust
# #[cfg(target_arch = "x86_64")] {
// 重排 [0, 1, 2, 3] => [3, 2, 0, 1]
const SHUFFLE: u8 = 0b01_00_10_11;
let x: core::arch::x86_64::__m128 = unsafe { core::mem::transmute([0u32, 1u32, 2u32, 3u32]) };
let y: core::arch::x86_64::__m128;
// 将常量值传入期望像 `pshufd` 这样的立即数的指令
unsafe {
    core::arch::asm!("pshufd {xmm}, {xmm}, {shuffle}",
        xmm = inlateout(xmm_reg) x=>y,
        shuffle = const SHUFFLE
    );
}
let y: [u32; 4] = unsafe { core::mem::transmute(y) };
assert_eq!(y, [3, 2, 0, 1]);
# }
```

r[asm.operand-type.supported-operands.label]
* `label <block>`
  - 该块的地址会替换到 asm 模板字符串中。汇编代码可以跳转到替换后的地址。
  - 对于区分直接跳转和间接跳转的目标（例如启用了 `cf-protection` 的 x86-64），汇编代码不得间接跳转到替换后的地址。
  - 该块执行完毕后，`asm!` 表达式返回。
  - 该块的类型必须是单元类型或 `!`（never）。
  - 该块会开启新的安全上下文；`label` 块内的 unsafe 操作必须包裹在内部 `unsafe` 块中，即使整个 `asm!` 表达式已经包裹在 `unsafe` 中。

```rust
# #[cfg(target_arch = "x86_64")]
unsafe {
    core::arch::asm!("jmp {}", label {
        println!("Hello from inline assembly label");
    });
}
```

r[asm.operand-type.left-to-right]
操作数表达式按从左到右的顺序求值，就像函数调用实参一样。`asm!` 执行后，输出按从左到右的顺序写入。如果两个输出指向同一位置，这一点就很重要：该位置将包含最右侧输出的值。

```rust
# #[cfg(target_arch = "x86_64")] {
let mut y: i64;
// y 的值来自第二个输出，而不是第一个输出
unsafe { core::arch::asm!("mov {}, 0", "mov {}, 1", out(reg) y, out(reg) y); }
assert_eq!(y, 1);
# }
```

r[asm.operand-type.naked_asm-restriction]
由于 `naked_asm!` 定义整个函数体，而编译器无法发出任何额外代码来处理操作数，因此它只能使用 `sym` 和 `const` 操作数。

r[asm.operand-type.global_asm-restriction]
由于 `global_asm!` 位于函数之外，它只能使用 `sym` 和 `const` 操作数。

```rust,compile_fail
# fn main() {}
// 这里不在函数中，因此不允许使用寄存器操作数
# #[cfg(target_arch = "x86_64")]
core::arch::global_asm!("", in(reg) 5);
// ERROR: the `in` operand cannot be used with `global_asm!`
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

```rust
# fn main() {}
fn foo() {}

# #[cfg(target_arch = "x86_64")]
// 不过，`const` 和 `sym` 都是允许的
core::arch::global_asm!("/* {} {} */", const 0, sym foo);
```

r[asm.register-operands]
## 寄存器操作数

r[asm.register-operands.register-or-class]
输入和输出操作数既可以指定为显式寄存器，也可以指定为寄存器类，由寄存器分配器从该类中选择一个寄存器。显式寄存器用字符串字面量指定（例如 `"eax"`），而寄存器类用标识符指定（例如 `reg`）。

```rust
# #[cfg(target_arch = "x86_64")] {
let mut y: i64;
// 可以命名 `reg`，也可以命名像 `eax` 这样的显式寄存器，
// 以获得整数寄存器
unsafe { core::arch::asm!("mov eax, {:e}", in(reg) 5, lateout("eax") y); }
assert_eq!(y, 5);
# }
```

r[asm.register-operands.equivalence-to-base-register]
注意，显式寄存器会将寄存器别名（例如 ARM 上的 `r14` 与 `lr`）以及寄存器的较小视图（例如 `eax` 与 `rax`）视为等同于基寄存器。

r[asm.register-operands.error-two-operands]
为两个输入操作数或两个输出操作数使用同一个显式寄存器是编译时错误。

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
// 不能两次命名 eax
unsafe { core::arch::asm!("", in("eax") 5, in("eax") 4); }
// ERROR: register `eax` conflicts with register `eax`
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```
```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
// ... 即使使用不同的别名也不行
unsafe { core::arch::asm!("", in("ax") 5, in("rax") 4); }
// ERROR: register `rax` conflicts with register `ax`
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.register-operands.error-overlapping]
此外，在输入操作数或输出操作数中使用重叠的寄存器（例如 ARM VFP）也是编译时错误。

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
// al 与 ax 重叠，所以不能同时命名它们。
unsafe { core::arch::asm!("", in("ax") 5, in("al") 4i8); }
// ERROR: register `al` conflicts with register `ax`
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.register-operands.allowed-types]
只有以下类型可以作为内联汇编的操作数：
- 整数（有符号和无符号）
- 浮点数
- 指针（仅限瘦指针）
- 函数指针
- SIMD 向量（使用 `#[repr(simd)]` 定义且实现 `Copy` 的结构体）。这包括在 `std::arch` 中定义的架构特定向量类型，例如 `__m128`（x86）或 `int8x16_t`（ARM）。

```rust
# #[cfg(target_arch = "x86_64")] {
extern "C" fn foo() {}

// 允许使用整数...
let y: i64 = 5;
unsafe { core::arch::asm!("/* {} */", in(reg) y); }

// 也允许使用指针...
let py = &raw const y;
unsafe { core::arch::asm!("/* {} */", in(reg) py); }

// 浮点数也可以...
let f = 1.0f32;
unsafe { core::arch::asm!("/* {} */", in(xmm_reg) f); }

// 甚至函数指针和 SIMD 向量也可以。
let func: extern "C" fn() = foo;
unsafe { core::arch::asm!("/* {} */", in(reg) func); }

let z = unsafe { core::arch::x86_64::_mm_set_epi64x(1, 0) };
unsafe { core::arch::asm!("/* {} */", in(xmm_reg) z); }
# }
```

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
struct Foo;
let x: Foo = Foo;
// 不允许使用像 struct 这样的复杂类型
unsafe { core::arch::asm!("/* {} */", in(reg) x); }
// ERROR: cannot use value of type `Foo` for inline assembly
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.register-operands.supported-register-classes]
下面是当前支持的寄存器类列表：

| 架构 | 寄存器类 | 寄存器 | LLVM 约束代码 |
| ------------ | -------------- | --------- | -------------------- |
| x86 | `reg` | `ax`, `bx`, `cx`, `dx`, `si`, `di`, `bp`, `r[8-15]`（仅限 x86-64） | `r` |
| x86 | `reg_abcd` | `ax`, `bx`, `cx`, `dx` | `Q` |
| x86-32 | `reg_byte` | `al`, `bl`, `cl`, `dl`, `ah`, `bh`, `ch`, `dh` | `q` |
| x86-64 | `reg_byte`\* | `al`, `bl`, `cl`, `dl`, `sil`, `dil`, `bpl`, `r[8-15]b` | `q` |
| x86 | `xmm_reg` | `xmm[0-7]`（x86）`xmm[0-15]`（x86-64） | `x` |
| x86 | `ymm_reg` | `ymm[0-7]`（x86）`ymm[0-15]`（x86-64） | `x` |
| x86 | `zmm_reg` | `zmm[0-7]`（x86）`zmm[0-31]`（x86-64） | `v` |
| x86 | `kreg` | `k[1-7]` | `Yk` |
| x86 | `kreg0` | `k0` | 仅用于 clobber |
| x86 | `x87_reg` | `st([0-7])` | 仅用于 clobber |
| x86 | `mmx_reg` | `mm[0-7]` | 仅用于 clobber |
| x86-64 | `tmm_reg` | `tmm[0-7]` | 仅用于 clobber |
| AArch64 | `reg` | `x[0-30]` | `r` |
| AArch64 | `vreg` | `v[0-31]` | `w` |
| AArch64 | `vreg_low16` | `v[0-15]` | `x` |
| AArch64 | `preg` | `p[0-15]`, `ffr` | 仅用于 clobber |
| Arm64EC | `reg` | `x[0-12]`, `x[15-22]`, `x[25-27]`, `x30` | `r` |
| Arm64EC | `vreg` | `v[0-15]` | `w` |
| Arm64EC | `vreg_low16` | `v[0-15]` | `x` |
| ARM (ARM/Thumb2) | `reg` | `r[0-12]`, `r14` | `r` |
| ARM (Thumb1) | `reg` | `r[0-7]` | `r` |
| ARM | `sreg` | `s[0-31]` | `t` |
| ARM | `sreg_low16` | `s[0-15]` | `x` |
| ARM | `dreg` | `d[0-31]` | `w` |
| ARM | `dreg_low16` | `d[0-15]` | `t` |
| ARM | `dreg_low8` | `d[0-8]` | `x` |
| ARM | `qreg` | `q[0-15]` | `w` |
| ARM | `qreg_low8` | `q[0-7]` | `t` |
| ARM | `qreg_low4` | `q[0-3]` | `x` |
| RISC-V | `reg` | `x1`, `x[5-7]`, `x[9-15]`, `x[16-31]`（非 RV32E） | `r` |
| RISC-V | `freg` | `f[0-31]` | `f` |
| RISC-V | `vreg` | `v[0-31]` | 仅用于 clobber |
| LoongArch | `reg` | `$r1`, `$r[4-20]`, `$r[23,30]` | `r` |
| LoongArch | `freg` | `$f[0-31]` | `f` |
| s390x | `reg` | `r[0-10]`, `r[12-14]` | `r` |
| s390x | `reg_addr` | `r[1-10]`, `r[12-14]` | `a` |
| s390x | `freg` | `f[0-15]` | `f` |
| s390x | `vreg` | `v[0-31]` | `v` |
| s390x | `areg` | `a[2-15]` | 仅用于 clobber |
| PowerPC | `reg` | `r0`, `r[3-12]`, `r[14-28]` | `r` |
| PowerPC | `reg_nonzero` | `r[3-12]`, `r[14-28]` | `b` |
| PowerPC | `spe_acc` | `spe_acc` | 仅用于 clobber |
| PowerPC64 | `reg` | `r0`, `r[3-12]`, `r[14-29]` | `r` |
| PowerPC64 | `reg_nonzero` | `r[3-12]`, `r[14-29]` | `b` |
| PowerPC/PowerPC64 | `freg` | `f[0-31]` | `f` |
| PowerPC/PowerPC64 | `vreg` | `v[0-31]` | `v` |
| PowerPC/PowerPC64 | `vsreg` | `vs[0-63]` | `wa` |
| PowerPC/PowerPC64 | `cr` | `cr[0-7]`, `cr` | 仅用于 clobber |
| PowerPC/PowerPC64 | `ctr` | `ctr` | 仅用于 clobber |
| PowerPC/PowerPC64 | `lr` | `lr` | 仅用于 clobber |
| PowerPC/PowerPC64 | `xer` | `xer` | 仅用于 clobber |

> [!NOTE]
> - 在 x86 上，我们对待 `reg_byte` 和 `reg` 的方式不同，因为编译器可以分别分配 `al` 和 `ah`，而 `reg` 会保留整个寄存器。
> - 在 x86-64 上，高字节寄存器（例如 `ah`）在 `reg_byte` 寄存器类中不可用。
> - 某些寄存器类被标记为“仅用于 clobber”，这意味着这些类中的寄存器不能用于输入或输出，只能作为 `out(<explicit register>) _` 或 `lateout(<explicit register>) _` 形式的 clobber 使用。
> - `spe_acc` 寄存器仅在 PowerPC SPE 目标上可用。

r[asm.register-operands.value-type-constraints]
每个寄存器类都对可以与其一起使用的值类型有约束。这是必要的，因为将值加载到寄存器中的方式取决于值的类型。例如，在大端序系统上，将 `i32x4` 和 `i8x16` 加载到 SIMD 寄存器中时，即使这两个值的按字节内存表示相同，也可能产生不同的寄存器内容。特定寄存器类支持的类型是否可用，可能取决于当前启用的目标特性。

| 架构 | 寄存器类 | 目标特性 | 允许的类型 |
| ------------ | -------------- | -------------- | ------------- |
| x86-32 | `reg` | 无 | `i16`, `i32`, `f32` |
| x86-64 | `reg` | 无 | `i16`, `i32`, `f32`, `i64`, `f64` |
| x86 | `reg_byte` | 无 | `i8` |
| x86 | `xmm_reg` | `sse` | `i32`, `f32`, `i64`, `f64`, <br> `i8x16`, `i16x8`, `i32x4`, `i64x2`, `f32x4`, `f64x2` |
| x86 | `ymm_reg` | `avx` | `i32`, `f32`, `i64`, `f64`, <br> `i8x16`, `i16x8`, `i32x4`, `i64x2`, `f32x4`, `f64x2` <br> `i8x32`, `i16x16`, `i32x8`, `i64x4`, `f32x8`, `f64x4` |
| x86 | `zmm_reg` | `avx512f` | `i32`, `f32`, `i64`, `f64`, <br> `i8x16`, `i16x8`, `i32x4`, `i64x2`, `f32x4`, `f64x2` <br> `i8x32`, `i16x16`, `i32x8`, `i64x4`, `f32x8`, `f64x4` <br> `i8x64`, `i16x32`, `i32x16`, `i64x8`, `f32x16`, `f64x8` |
| x86 | `kreg` | `avx512f` | `i8`, `i16` |
| x86 | `kreg` | `avx512bw` | `i32`, `i64` |
| x86 | `mmx_reg` | 不适用 | 仅用于 clobber |
| x86 | `x87_reg` | 不适用 | 仅用于 clobber |
| x86 | `tmm_reg` | 不适用 | 仅用于 clobber |
| AArch64 | `reg` | 无 | `i8`, `i16`, `i32`, `f32`, `i64`, `f64` |
| AArch64 | `vreg` | `neon` | `i8`, `i16`, `i32`, `f32`, `i64`, `f64`, <br> `i8x8`, `i16x4`, `i32x2`, `i64x1`, `f32x2`, `f64x1`, <br> `i8x16`, `i16x8`, `i32x4`, `i64x2`, `f32x4`, `f64x2` |
| AArch64 | `preg` | 不适用 | 仅用于 clobber |
| Arm64EC | `reg` | 无 | `i8`, `i16`, `i32`, `f32`, `i64`, `f64` |
| Arm64EC | `vreg` | `neon` | `i8`, `i16`, `i32`, `f32`, `i64`, `f64`, <br> `i8x8`, `i16x4`, `i32x2`, `i64x1`, `f32x2`, `f64x1`, <br> `i8x16`, `i16x8`, `i32x4`, `i64x2`, `f32x4`, `f64x2` |
| ARM | `reg` | 无 | `i8`, `i16`, `i32`, `f32` |
| ARM | `sreg` | `vfp2` | `i32`, `f32` |
| ARM | `dreg` | `vfp2` | `i64`, `f64`, `i8x8`, `i16x4`, `i32x2`, `i64x1`, `f32x2` |
| ARM | `qreg` | `neon` | `i8x16`, `i16x8`, `i32x4`, `i64x2`, `f32x4` |
| RISC-V32 | `reg` | 无 | `i8`, `i16`, `i32`, `f32` |
| RISC-V64 | `reg` | 无 | `i8`, `i16`, `i32`, `f32`, `i64`, `f64` |
| RISC-V | `freg` | `f` | `f32` |
| RISC-V | `freg` | `d` | `f64` |
| RISC-V | `vreg` | 不适用 | 仅用于 clobber |
| LoongArch32 | `reg` | 无 | `i8`, `i16`, `i32`, `f32` |
| LoongArch64 | `reg` | 无 | `i8`, `i16`, `i32`, `i64`, `f32`, `f64` |
| LoongArch | `freg` | `f` | `f32` |
| LoongArch | `freg` | `d` | `f64` |
| s390x | `reg`, `reg_addr` | 无 | `i8`, `i16`, `i32`, `i64` |
| s390x | `freg` | 无 | `f32`, `f64` |
| s390x | `vreg` | `vector` | `i32`, `f32`, `i64`, `f64`, `i128`, <br> `i8x16`, `i16x8`, `i32x4`, `i64x2`, `f32x4`, `f64x2` |
| s390x | `areg` | 不适用 | 仅用于 clobber |
| PowerPC | `spe_acc` | 无 | 仅用于 clobber |
| PowerPC/PowerPC64 | `reg` | 无 | `i8`, `i16`, `i32`, `i64`（仅限 PowerPC64） |
| PowerPC/PowerPC64 | `reg_nonzero` | 无 | `i8`, `i16`, `i32`, `i64`（仅限 PowerPC64） |
| PowerPC/PowerPC64 | `freg` | 无 | `f32`, `f64` |
| PowerPC/PowerPC64 | `vreg` | `altivec` | `i8x16`, `i16x8`, `i32x4`, `f32x4` |
| PowerPC/PowerPC64 | `vreg` | `vsx` | `f32`, `f64`, `i64x2`, `f64x2` |
| PowerPC/PowerPC64 | `vsreg` | `vsx` | vsx 和 altivec 的 vreg 类型的并集 |
| PowerPC/PowerPC64 | `cr` | 无 | 仅用于 clobber |
| PowerPC/PowerPC64 | `ctr` | 无 | 仅用于 clobber |
| PowerPC/PowerPC64 | `lr` | 无 | 仅用于 clobber |
| PowerPC/PowerPC64 | `xer` | 无 | 仅用于 clobber |

> [!NOTE]
> 就上表而言，指针、函数指针以及 `isize`/`usize` 会被视为等价的整数类型（`i16`/`i32`/`i64`，具体取决于目标）。

```rust
# #[cfg(target_arch = "x86_64")] {
let x = 5i32;
let y = -1i8;
let z = unsafe { core::arch::x86_64::_mm_set_epi64x(1, 0) };

// reg 对 `i32` 有效，`reg_byte` 对 `i8` 有效，xmm_reg 对 `__m128i` 有效
// 不能把 `tmm0` 用作输入或输出，但可以将其作为 clobber。
unsafe { core::arch::asm!("/* {} {} {} */", in(reg) x, in(reg_byte) y, in(xmm_reg) z, out("tmm0") _); }
# }
```

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
let z = unsafe { core::arch::x86_64::_mm_set_epi64x(1, 0) };
// 不能将 `__m128i` 传给 `reg` 输入
unsafe { core::arch::asm!("/* {} */", in(reg) z); }
// ERROR: type `__m128i` cannot be used with this register class
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.register-operands.smaller-value]
如果某个值的大小小于分配给它的寄存器大小，则对于输入，该寄存器的高位会具有未定义值；对于输出，这些高位会被忽略。唯一例外是 RISC-V 上的 `freg` 寄存器类，其中 `f32` 值会按 RISC-V 架构要求以 NaN-boxed 形式存放在 `f64` 中。

<!--no_run, this test has a non-deterministic runtime behavior-->
```rust,no_run
# #[cfg(target_arch = "x86_64")] {
let mut x: i64;
// 将 32 位值移动到 64 位值中，糟糕。
#[allow(asm_sub_register)] // rustc 会对此行为发出警告
unsafe { core::arch::asm!("mov {}, {}", lateout(reg) x, in(reg) 4i32); }
// 高 32 位是不确定的
assert_eq!(x, 4); // 不能保证这个断言会成功
assert_eq!(x & 0xFFFFFFFF, 4); // 但是这个断言会成功
# }
```

r[asm.register-operands.separate-input-output]
当为 `inout` 操作数分别指定输入表达式和输出表达式时，两个表达式必须具有相同类型。唯一例外是两个操作数都是指针或整数的情况，此时只要求它们大小相同。存在此限制是因为 LLVM 和 GCC 中的寄存器分配器有时无法处理类型不同的绑定操作数。

```rust
# #[cfg(target_arch = "x86_64")] {
// 指针和整数可以混用（只要它们大小相同）
let x: isize = 0;
let y: *mut ();
// 使用内联汇编魔法将 `isize` transmute 为 `*mut ()`
unsafe { core::arch::asm!("/*{}*/", inout(reg) x=>y); }
assert!(y.is_null()); // 极其绕远地构造空指针
# }
```

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
let x: i32 = 0;
let y: f32;
// 但不能像这样把 `i32` 重新解释为 `f32`
unsafe { core::arch::asm!("/* {} */", inout(reg) x=>y); }
// ERROR: incompatible types for asm inout argument
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.register-names]
## 寄存器名称

r[asm.register-names.supported-register-aliases]
有些寄存器有多个名称。编译器会将这些名称都视为与基础寄存器名称相同。以下是所有受支持寄存器别名的列表：

| 架构 | 基础寄存器 | 别名 |
| ------------ | ------------- | ------- |
| x86 | `ax` | `eax`, `rax` |
| x86 | `bx` | `ebx`, `rbx` |
| x86 | `cx` | `ecx`, `rcx` |
| x86 | `dx` | `edx`, `rdx` |
| x86 | `si` | `esi`, `rsi` |
| x86 | `di` | `edi`, `rdi` |
| x86 | `bp` | `bpl`, `ebp`, `rbp` |
| x86 | `sp` | `spl`, `esp`, `rsp` |
| x86 | `ip` | `eip`, `rip` |
| x86 | `st(0)` | `st` |
| x86 | `r[8-15]` | `r[8-15]b`, `r[8-15]w`, `r[8-15]d` |
| x86 | `xmm[0-31]` | `ymm[0-31]`, `zmm[0-31]` |
| AArch64 | `x[0-30]` | `w[0-30]` |
| AArch64 | `x29` | `fp` |
| AArch64 | `x30` | `lr` |
| AArch64 | `sp` | `wsp` |
| AArch64 | `xzr` | `wzr` |
| AArch64 | `v[0-31]` | `b[0-31]`, `h[0-31]`, `s[0-31]`, `d[0-31]`, `q[0-31]` |
| Arm64EC | `x[0-30]` | `w[0-30]` |
| Arm64EC | `x29` | `fp` |
| Arm64EC | `x30` | `lr` |
| Arm64EC | `sp` | `wsp` |
| Arm64EC | `xzr` | `wzr` |
| Arm64EC | `v[0-15]` | `b[0-15]`, `h[0-15]`, `s[0-15]`, `d[0-15]`, `q[0-15]` |
| ARM | `r[0-3]` | `a[1-4]` |
| ARM | `r[4-9]` | `v[1-6]` |
| ARM | `r9` | `rfp` |
| ARM | `r10` | `sl` |
| ARM | `r11` | `fp` |
| ARM | `r12` | `ip` |
| ARM | `r13` | `sp` |
| ARM | `r14` | `lr` |
| ARM | `r15` | `pc` |
| RISC-V | `x0` | `zero` |
| RISC-V | `x1` | `ra` |
| RISC-V | `x2` | `sp` |
| RISC-V | `x3` | `gp` |
| RISC-V | `x4` | `tp` |
| RISC-V | `x[5-7]` | `t[0-2]` |
| RISC-V | `x8` | `fp`, `s0` |
| RISC-V | `x9` | `s1` |
| RISC-V | `x[10-17]` | `a[0-7]` |
| RISC-V | `x[18-27]` | `s[2-11]` |
| RISC-V | `x[28-31]` | `t[3-6]` |
| RISC-V | `f[0-7]` | `ft[0-7]` |
| RISC-V | `f[8-9]` | `fs[0-1]` |
| RISC-V | `f[10-17]` | `fa[0-7]` |
| RISC-V | `f[18-27]` | `fs[2-11]` |
| RISC-V | `f[28-31]` | `ft[8-11]` |
| LoongArch | `$r0` | `$zero` |
| LoongArch | `$r1` | `$ra` |
| LoongArch | `$r2` | `$tp` |
| LoongArch | `$r3` | `$sp` |
| LoongArch | `$r[4-11]` | `$a[0-7]` |
| LoongArch | `$r[12-20]` | `$t[0-8]` |
| LoongArch | `$r21` | |
| LoongArch | `$r22` | `$fp`, `$s9` |
| LoongArch | `$r[23-31]` | `$s[0-8]` |
| LoongArch | `$f[0-7]` | `$fa[0-7]` |
| LoongArch | `$f[8-23]` | `$ft[0-15]` |
| LoongArch | `$f[24-31]` | `$fs[0-7]` |
| PowerPC/PowerPC64 | `r1` | `sp` |
| PowerPC/PowerPC64 | `r31` | `fp` |
| PowerPC/PowerPC64 | `r[0-31]` | `[0-31]` |
| PowerPC/PowerPC64 | `f[0-31]` | `fr[0-31]`|

```rust
# #[cfg(target_arch = "x86_64")] {
let z = 0i64;
// rax 是 eax 和 ax 的别名
unsafe { core::arch::asm!("", in("rax") z); }
# }
```

r[asm.register-names.not-for-io]
有些寄存器不能用于输入或输出操作数：

| 架构 | 不受支持的寄存器 | 原因 |
| ------------ | -------------------- | ------ |
| 所有 | `sp`, `r15`（s390x）、`r1`（PowerPC 和 PowerPC64） | 栈指针必须在汇编代码结束时，或在跳转到 `label` 块之前，恢复到其原始值。 |
| 所有 | `bp`（x86）、`x29`（AArch64 和 Arm64EC）、`x8`（RISC-V）、`$fp`（LoongArch）、`r11`（s390x）、`fp`（PowerPC 和 PowerPC64） | 帧指针不能用作输入或输出。 |
| ARM | `r7` 或 `r11` | 在 ARM 上，帧指针可以是 `r7` 或 `r11`，具体取决于目标。帧指针不能用作输入或输出。 |
| 所有 | `si`（x86-32）、`bx`（x86-64）、`r6`（ARM）、`x19`（AArch64 和 Arm64EC）、`x9`（RISC-V）、`$s8`（LoongArch）、`r29` 和 `r30`（PowerPC）、`r30`（PowerPC64） | LLVM 在内部将它用作具有复杂栈帧的函数的基指针（base pointer）。 |
| x86 | `ip` | 这是程序计数器，不是真正的寄存器。 |
| AArch64 | `xzr` | 这是不能修改的常量零寄存器。 |
| AArch64 | `x18` | 这是某些 AArch64 目标上由 OS 保留的寄存器。 |
| Arm64EC | `xzr` | 这是不能修改的常量零寄存器。 |
| Arm64EC | `x18` | 这是由 OS 保留的寄存器。 |
| Arm64EC | `x13`, `x14`, `x23`, `x24`, `x28`, `v[16-31]`, `p[0-15]`, `ffr` | 这些是 Arm64EC 不支持的 AArch64 寄存器。 |
| ARM | `pc` | 这是程序计数器，不是真正的寄存器。 |
| ARM | `r9` | 这是某些 ARM 目标上由 OS 保留的寄存器。 |
| RISC-V | `x0` | 这是不能修改的常量零寄存器。 |
| RISC-V | `gp`, `tp` | 这些寄存器是保留的，不能用作输入或输出。 |
| LoongArch | `$r0` 或 `$zero` | 这是不能修改的常量零寄存器。 |
| LoongArch | `$r2` 或 `$tp` | 这是为 TLS 保留的。 |
| LoongArch | `$r21` | 这是由 ABI 保留的。 |
| s390x | `c[0-15]` | 由内核保留。 |
| s390x | `a[0-1]` | 为系统使用而保留。 |
| PowerPC/PowerPC64 | `r2`, `r13` | 这些是系统保留寄存器。 |
| PowerPC/PowerPC64 | `vrsave` | vrsave 寄存器不能用作输入或输出。 |

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
// bp 是保留的
unsafe { core::arch::asm!("", in("bp") 5i32); }
// ERROR: invalid register `bp`: the frame pointer cannot be used as an operand for inline asm
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.register-names.fp-bp-reserved]
帧指针和基指针寄存器保留给 LLVM 内部使用。虽然 `asm!` 语句不能显式指定使用保留寄存器，但在某些情况下，LLVM 会为 `reg` 操作数分配这些保留寄存器之一。使用保留寄存器的汇编代码应当小心，因为 `reg` 操作数可能会使用同一批寄存器。

r[asm.template-modifiers]
## 模板修饰符

r[asm.template-modifiers.intro]
占位符可以通过在花括号内 `:` 之后指定的修饰符来扩充。这些修饰符不会影响寄存器分配，但会改变操作数插入模板字符串时的格式化方式。

r[asm.template-modifiers.only-one]
每个模板占位符只允许使用一个修饰符。

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
// 不能同时指定 `r` 和 `e`。
unsafe { core::arch::asm!("/* {:er}", in(reg) 5i32); }
// ERROR: asm template modifier must be a single character
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.template-modifiers.supported-modifiers]
支持的修饰符是 LLVM（以及 GCC）的 [asm 模板参数修饰符](http://llvm.org/docs/LangRef.html#asm-template-argument-modifiers)的子集，但不使用相同的字母代码。

| 架构 | 寄存器类 | 修饰符 | 示例输出 | LLVM 修饰符 |
| ------------ | -------------- | -------- | -------------- | ------------- |
| x86-32 | `reg` | 无 | `eax` | `k` |
| x86-64 | `reg` | 无 | `rax` | `q` |
| x86-32 | `reg_abcd` | `l` | `al` | `b` |
| x86-64 | `reg` | `l` | `al` | `b` |
| x86 | `reg_abcd` | `h` | `ah` | `h` |
| x86 | `reg` | `x` | `ax` | `w` |
| x86 | `reg` | `e` | `eax` | `k` |
| x86-64 | `reg` | `r` | `rax` | `q` |
| x86 | `reg_byte` | 无 | `al` / `ah` | None |
| x86 | `xmm_reg` | 无 | `xmm0` | `x` |
| x86 | `ymm_reg` | 无 | `ymm0` | `t` |
| x86 | `zmm_reg` | 无 | `zmm0` | `g` |
| x86 | `*mm_reg` | `x` | `xmm0` | `x` |
| x86 | `*mm_reg` | `y` | `ymm0` | `t` |
| x86 | `*mm_reg` | `z` | `zmm0` | `g` |
| x86 | `kreg` | 无 | `k1` | None |
| AArch64/Arm64EC | `reg` | 无 | `x0` | `x` |
| AArch64/Arm64EC | `reg` | `w` | `w0` | `w` |
| AArch64/Arm64EC | `reg` | `x` | `x0` | `x` |
| AArch64/Arm64EC | `vreg` | 无 | `v0` | None |
| AArch64/Arm64EC | `vreg` | `v` | `v0` | 无 |
| AArch64/Arm64EC | `vreg` | `b` | `b0` | `b` |
| AArch64/Arm64EC | `vreg` | `h` | `h0` | `h` |
| AArch64/Arm64EC | `vreg` | `s` | `s0` | `s` |
| AArch64/Arm64EC | `vreg` | `d` | `d0` | `d` |
| AArch64/Arm64EC | `vreg` | `q` | `q0` | `q` |
| ARM | `reg` | 无 | `r0` | None |
| ARM | `sreg` | 无 | `s0` | None |
| ARM | `dreg` | 无 | `d0` | `P` |
| ARM | `qreg` | 无 | `q0` | `q` |
| ARM | `qreg` | `e` / `f` | `d0` / `d1` | `e` / `f` |
| RISC-V | `reg` | 无 | `x1` | None |
| RISC-V | `freg` | 无 | `f0` | None |
| LoongArch | `reg` | 无 | `$r1` | None |
| LoongArch | `freg` | 无 | `$f0` | None |
| s390x | `reg` | 无 | `%r0` | None |
| s390x | `reg_addr` | 无 | `%r1` | None |
| s390x | `freg` | 无 | `%f0` | None |
| s390x | `vreg` | 无 | `%v0` | None |
| PowerPC/PowerPC64 | `reg` | 无 | `0` | None |
| PowerPC/PowerPC64 | `reg_nonzero` | 无 | `3` | None |
| PowerPC/PowerPC64 | `freg` | 无 | `0` | None |
| PowerPC/PowerPC64 | `vreg` | 无 | `0` | None |
| PowerPC/PowerPC64 | `vsreg` | 无 | `0` | None |

> [!NOTE]
> - 在 ARM 上，`e` / `f`：这会打印 NEON quad（128 位）寄存器的低位或高位双字寄存器名称。
> - 在 x86 上：对于没有修饰符的 `reg`，我们的行为与 GCC 不同。GCC 会根据操作数的值类型推断修饰符，而我们默认使用完整的寄存器大小。
> - 对于 x86 `xmm_reg`：LLVM 的 `x`、`t` 和 `g` 修饰符尚未在 LLVM 中实现（它们仅受 GCC 支持），但这应当是一个简单的改动。

```rust
# #[cfg(target_arch = "x86_64")] {
let mut x = 0x10u16;

// 使用 `xchg` 实现 u16::swap_bytes
// `{x}` 的低半部分用 `{x:l}` 表示，高半部分用 `{x:h}` 表示
unsafe { core::arch::asm!("xchg {x:l}, {x:h}", x = inout(reg_abcd) x); }
assert_eq!(x, 0x1000u16);
# }
```

r[asm.template-modifiers.smaller-value]
如上一节所述，传递小于寄存器宽度的输入值会导致寄存器的高位包含未定义值。如果内联 asm 只访问寄存器的低位，这就不是问题；可以通过模板修饰符在汇编代码中使用子寄存器名称来做到这一点（例如使用 `ax` 而不是 `rax`）。由于这是一个容易出错的地方，编译器会在给定输入类型下适用时建议使用某个模板修饰符。如果对某个操作数的所有引用都已经带有修饰符，则会对此操作数抑制该警告。

[llvm-argmod]: http://llvm.org/docs/LangRef.html#asm-template-argument-modifiers

r[asm.abi-clobbers]
## ABI clobber

r[asm.abi-clobbers.intro]
`clobber_abi` 关键字可用于向汇编代码应用一组默认 clobber。这会根据调用具有特定调用约定的函数的需要，自动插入必要的 clobber 约束：如果调用约定不会在一次调用前后完整保留某个寄存器的值，则会向操作数列表隐式添加 `lateout("...") _`（其中 `...` 会替换为该寄存器的名称）。

```rust
# #[cfg(target_arch = "x86_64")] {
extern "C" fn foo() -> i32 { 0 }

let z: i32;
// 要调用函数，必须告知编译器我们会 clobber
// 被调用者保存寄存器
unsafe { core::arch::asm!("call {}", sym foo, out("rax") z, clobber_abi("C")); }
assert_eq!(z, 0);
# }
```

r[asm.abi-clobbers.many]
`clobber_abi` 可以指定任意次数。它会为所有指定调用约定的并集中的每个唯一寄存器插入一个 clobber。

```rust
# #[cfg(target_arch = "x86_64")] {
extern "sysv64" fn foo() -> i32 { 0 }
extern "win64" fn bar(x: i32) -> i32 { x + 1 }

let z: i32;
// 甚至可以调用多个采用不同约定且
// 保存寄存器也不同的函数
unsafe {
    core::arch::asm!(
        "call {}",
        "mov ecx, eax",
        "call {}",
        sym foo,
        sym bar,
        out("rax") z,
        clobber_abi("sysv64"),
        clobber_abi("win64"),
    );
}
assert_eq!(z, 1);
# }
```

r[asm.abi-clobbers.must-specify]
使用 `clobber_abi` 时，编译器不允许通用寄存器类输出：所有输出都必须指定显式寄存器。

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
extern "C" fn foo(x: i32) -> i32 { 0 }

let z: i32;
// 必须使用显式寄存器，以免意外重叠。
unsafe {
    core::arch::asm!(
        "mov eax, {:e}",
        "call {}",
        out(reg) z,
        sym foo,
        clobber_abi("C")
    );
    // ERROR: asm with `clobber_abi` must specify explicit registers for outputs
}
assert_eq!(z, 0);
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.abi-clobbers.explicit-have-precedence]
显式寄存器输出优先于 `clobber_abi` 插入的隐式 clobber：只有当某个寄存器未被用作输出时，才会为该寄存器插入 clobber。

r[asm.abi-clobbers.supported-abis]
以下 ABI 可以与 `clobber_abi` 一起使用：

| 架构 | ABI 名称 | 会被破坏的寄存器 |
| ------------ | -------- | ------------------- |
| x86-32 | `"C"`, `"system"`, `"efiapi"`, `"cdecl"`, `"stdcall"`, `"fastcall"` | `ax`, `cx`, `dx`, `xmm[0-7]`, `mm[0-7]`, `k[0-7]`, `st([0-7])` |
| x86-64 | `"C"`, `"system"`（在 Windows 上）, `"efiapi"`, `"win64"` | `ax`, `cx`, `dx`, `r[8-11]`, `xmm[0-31]`, `mm[0-7]`, `k[0-7]`, `st([0-7])`, `tmm[0-7]` |
| x86-64 | `"C"`, `"system"`（在非 Windows 上）, `"sysv64"` | `ax`, `cx`, `dx`, `si`, `di`, `r[8-11]`, `xmm[0-31]`, `mm[0-7]`, `k[0-7]`, `st([0-7])`, `tmm[0-7]` |
| AArch64 | `"C"`, `"system"`, `"efiapi"` | `x[0-17]`, `x18`\*, `x30`, `v[0-31]`, `p[0-15]`, `ffr` |
| Arm64EC | `"C"`, `"system"` | `x[0-12]`, `x[15-17]`, `x30`, `v[0-15]` |
| ARM | `"C"`, `"system"`, `"efiapi"`, `"aapcs"` | `r[0-3]`, `r12`, `r14`, `s[0-15]`, `d[0-7]`, `d[16-31]` |
| RISC-V | `"C"`, `"system"`, `"efiapi"` | `x1`, `x[5-7]`, `x[10-17]`\*, `x[28-31]`\*, `f[0-7]`, `f[10-17]`, `f[28-31]`, `v[0-31]` |
| LoongArch | `"C"`, `"system"` | `$r1`, `$r[4-20]`, `$f[0-23]` |
| s390x | `"C"`, `"system"` | `r[0-5]`, `r14`, `f[0-7]`, `v[0-31]`, `a[2-15]` |

> [!NOTE]
> - 在 AArch64 上，只有当 `x18` 在目标上不被视为保留寄存器时，它才会被包含在 clobber 列表中。
> - 在 RISC-V 上，只有当 `x[16-17]` 和 `x[28-31]` 在目标上不被视为保留寄存器时，它们才会被包含在 clobber 列表中。

随着各个架构获得新的寄存器，rustc 中每个 ABI 的 clobber 寄存器列表也会更新：这可确保当 LLVM 开始在其生成的代码中使用这些新寄存器时，`asm!` 的 clobber 仍将保持正确。

r[asm.options]
## 选项

r[asm.options.supported-options]
这些标志用于进一步影响内联汇编代码的行为。目前定义了以下选项：

r[asm.options.supported-options.pure]
- `pure`：该汇编代码没有副作用，必须最终返回，并且其输出仅依赖于它的直接输入（即值本身，而不是它们所指向的内容）或从内存中读取的值（除非也设置了 `nomem` 选项）。这允许编译器比程序中指定的次数更少地执行该汇编代码（例如把它提升出循环），如果其输出未被使用，甚至可以将其完全消除。`pure` 选项必须与 `nomem` 或 `readonly` 选项之一组合使用，否则会产生编译时错误。

```rust
# #[cfg(target_arch = "x86_64")] {
let x: i32 = 0;
let z: i32;
// 可以使用 pure，并假定汇编没有副作用来进行优化
unsafe { core::arch::asm!("inc {}", inout(reg) x => z, options(pure, nomem)); }
assert_eq!(z, 1);
# }
```

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
let x: i32 = 0;
let z: i32;
// 必须满足 nomem 或 readonly 二者之一，以表示是否
// 允许读取内存
unsafe { core::arch::asm!("inc {}", inout(reg) x => z, options(pure)); }
// ERROR: the `pure` option must be combined with either `nomem` or `readonly`
assert_eq!(z, 0);
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.options.supported-options.nomem]
- `nomem`：该汇编代码不会读取或写入任何在汇编代码之外可访问的内存。由于编译器知道这些被修改的全局变量不会被该汇编代码读取或写入，因此它可以在执行该汇编代码期间将这些全局变量的值缓存于寄存器中。编译器还会假定该汇编代码不会执行任何与其他线程同步的操作，例如通过 fence。

<!-- no_run: This test has unpredictable or undefined behavior at runtime -->
```rust,no_run
# #[cfg(target_arch = "x86_64")] {
let mut x = 0i32;
let z: i32;
// 指定 `nomem` 时，不允许从汇编访问
// 外部内存
unsafe {
    core::arch::asm!("mov {val:e}, dword ptr [{ptr}]",
        ptr = in(reg) &mut x,
        val = lateout(reg) z,
        options(nomem)
    )
}

// 指定 `nomem` 时，从汇编写入
// 外部内存也是未定义行为
unsafe {
    core::arch::asm!("mov  dword ptr [{ptr}], {val:e}",
        ptr = in(reg) &mut x,
        val = in(reg) z,
        options(nomem)
    )
}
# }
```

```rust
# #[cfg(target_arch = "x86_64")] {
let x: i32 = 0;
let z: i32;
// 但是，如果我们分配自己的内存，例如通过 `push`，
// 仍然可以使用它
unsafe {
    core::arch::asm!("push {x}", "add qword ptr [rsp], 1", "pop {x}",
        x = inout(reg) x => z,
        options(nomem)
    );
}
assert_eq!(z, 1);
# }
```

r[asm.options.supported-options.readonly]
- `readonly`：该汇编代码不会写入任何在汇编代码之外可访问的内存。由于编译器知道这些未被修改的全局变量不会被该汇编代码写入，因此它可以在执行该汇编代码期间将这些全局变量的值缓存于寄存器中。编译器还会假定该汇编代码不会执行任何与其他线程同步的操作，例如通过 fence。

<!-- no_run: This test has undefined behaviour at runtime -->
```rust,no_run
# #[cfg(target_arch = "x86_64")] {
let mut x = 0;
// 指定 `readonly` 时，不能修改外部内存
unsafe {
    core::arch::asm!("mov dword ptr[{}], 1", in(reg) &mut x, options(readonly))
}
# }
```

```rust
# #[cfg(target_arch = "x86_64")] {
let x: i64 = 0;
let z: i64;
// 不过仍然可以从中读取
unsafe {
    core::arch::asm!("mov {x}, qword ptr [{x}]",
        x = inout(reg) &x => z,
        options(readonly)
    );
}
assert_eq!(z, 0);
# }
```

```rust
# #[cfg(target_arch = "x86_64")] {
let x: i64 = 0;
let z: i64;
// 与 nomem 适用相同的例外。
unsafe {
    core::arch::asm!("push {x}", "add qword ptr [rsp], 1", "pop {x}",
        x = inout(reg) x => z,
        options(readonly)
    );
}
assert_eq!(z, 1);
# }
```

r[asm.options.supported-options.preserves_flags]
- `preserves_flags`：该汇编代码不会修改标志寄存器（定义见下文规则）。这允许编译器在执行该汇编代码后避免重新计算条件标志。

r[asm.options.supported-options.noreturn]
- `noreturn`：该汇编代码不会从末尾继续执行；如果发生这种情况，行为是未定义的。它仍然可以跳转到 `label` 块。若任一 `label` 块返回 unit，则 `asm!` 块将返回 unit。否则它将返回 `!`（never）。与调用一个不返回的函数一样，作用域中的局部变量不会在执行汇编代码之前被 drop。

<!-- no_run: This test aborts at runtime -->
```rust,no_run
fn main() -> ! {
# #[cfg(target_arch = "x86_64")] {
    // 可以用一条指令在 noreturn 块内触发陷阱
    unsafe { core::arch::asm!("ud2", options(noreturn)); }
# }
# #[cfg(not(target_arch = "x86_64"))] panic!("no return");
}
```

<!-- no_run: Test has undefined behavior at runtime -->
```rust,no_run
# #[cfg(target_arch = "x86_64")] {
// 你有责任避免执行越过 noreturn asm 块的末尾
unsafe { core::arch::asm!("", options(noreturn)); }
# }
```

```rust
# #[cfg(target_arch = "x86_64")]
let _: () = unsafe {
    // 仍然可以跳转到 `label` 块
    core::arch::asm!("jmp {}", label {
        println!();
    }, options(noreturn));
};
```

r[asm.options.supported-options.nostack]
- `nostack`：该汇编代码不会将数据压入栈中，也不会写入栈 red-zone（如果目标支持）。如果 *未* 使用该选项，那么编译器会保证栈指针在汇编代码开始时已经为函数调用进行了合适的对齐（依据目标 ABI）。

<!-- no_run: Test has undefined behavior at runtime -->
```rust,no_run
# #[cfg(target_arch = "x86_64")] {
// 将 `push` 和 `pop` 与 nostack 一起使用是 UB
unsafe { core::arch::asm!("push rax", "pop rax", options(nostack)); }
# }
```

r[asm.options.supported-options.att_syntax]
- `att_syntax`：该选项仅在 x86 上有效，并使汇编器使用 GNU assembler 的 `.att_syntax prefix` 模式。寄存器操作数在替换时会带有前导 `%`。

```rust
# #[cfg(target_arch = "x86_64")] {
let x: i32;
let y = 1i32;
// 这里需要使用 AT&T 语法。操作数顺序为 src, dest
unsafe {
    core::arch::asm!("mov {y:e}, {x:e}",
        x = lateout(reg) x,
        y = in(reg) y,
        options(att_syntax)
    );
}
assert_eq!(x, y);
# }
```

r[asm.options.supported-options.raw]
- `raw`：这会使模板字符串被解析为原始汇编字符串，对 `{` 和 `}` 不作特殊处理。这在使用 `include_str!` 从外部文件包含原始汇编代码时尤其有用。

r[asm.options.checks]
编译器还会对选项执行一些额外检查：

r[asm.options.checks.mutually-exclusive]
- `nomem` 和 `readonly` 选项互斥：同时指定这两者会产生编译时错误。

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
// nomem 严格强于 readonly，二者不能一起指定
unsafe { core::arch::asm!("", options(nomem, readonly)); }
// ERROR: the `nomem` and `readonly` options are mutually exclusive
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.options.checks.pure]
- 在没有输出或只有被丢弃的输出（`_`）的 asm 块上指定 `pure` 会产生编译时错误。

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
// pure 块至少需要一个输出
unsafe { core::arch::asm!("", options(pure)); }
// ERROR: asm with the `pure` option must have at least one output
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.options.checks.noreturn]
- 在带有输出且没有标签的 asm 块上指定 `noreturn` 会产生编译时错误。

```rust,compile_fail
# #[cfg(target_arch = "x86_64")] {
let z: i32;
// noreturn 不能有输出
unsafe { core::arch::asm!("mov {:e}, 1", out(reg) z, options(noreturn)); }
// ERROR: asm outputs are not allowed with the `noreturn` option
# }
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.options.checks.label-with-outputs]
- 在带有输出的 asm 块中包含任何 `label` 块都会产生编译时错误。

r[asm.options.naked_asm-restriction]
`naked_asm!` 仅支持 `att_syntax` 和 `raw` 选项。其余选项没有意义，因为内联汇编定义了整个函数体。

r[asm.options.global_asm-restriction]
`global_asm!` 仅支持 `att_syntax` 和 `raw` 选项。其余选项对于全局作用域的内联汇编没有意义。

```rust,compile_fail
# fn main() {}
# #[cfg(target_arch = "x86_64")]
// nomem 在 global_asm! 中没有用
core::arch::global_asm!("", options(nomem));
# #[cfg(not(target_arch = "x86_64"))] core::compile_error!("Test not supported on this arch");
```

r[asm.rules]
## 内联汇编规则

r[asm.rules.intro]
为避免未定义行为，在使用函数作用域的内联汇编（`asm!`）时，必须遵守以下规则：

r[asm.rules.reg-not-input]
- 任何未指定为输入的寄存器，在进入汇编代码时都将包含未定义值。
  - 内联汇编语境中的“未定义值”是指寄存器可以（非确定性地）拥有该架构所允许的任一可能值。特别要注意，它不同于 LLVM `undef`，后者可以在每次读取时具有不同的值（因为汇编代码中不存在这样的概念）。

r[asm.rules.reg-not-output]
- 任何未指定为输出的寄存器，在退出汇编代码时都必须与进入时具有相同的值，否则行为是未定义的。
  - 这仅适用于那些可以指定为输入或输出的寄存器。其他寄存器遵循目标特定规则。
  - 请注意，`lateout` 可能会被分配到与 `in` 相同的寄存器，在这种情况下此规则不适用。不过，代码不应依赖这一点，因为这取决于寄存器分配的结果。

r[asm.rules.unwind]
- 如果执行从汇编代码中展开出去，行为是未定义的。
  - 如果汇编代码调用了一个随后发生展开的函数，这同样适用。

r[asm.rules.mem-same-as-ffi]
- 汇编代码允许读写的内存位置集合，与 FFI 函数允许读写的内存位置集合相同。
  - 如果设置了 `readonly` 选项，则只允许读取内存。
  - 如果设置了 `nomem` 选项，则不允许对内存进行任何读取或写入。
  - 这些规则不适用于汇编代码私有的内存，例如其内部所分配的栈空间。

r[asm.rules.black-box]
- 编译器不能假定汇编代码中的指令就是最终实际会被执行的那些指令。
  - 这实际上意味着编译器必须将汇编代码视为黑盒，只考虑接口规范，而不考虑指令本身。
  - 可以通过目标特定的机制进行运行时代码修补。
  - 不过，无法保证源代码中的每个汇编代码块都直接对应目标文件中的单个指令实例；编译器可以自由地复制或去重 `asm!` 块中的汇编代码。

r[asm.rules.stack-below-sp]
- 除非设置了 `nostack` 选项，否则允许汇编代码使用栈指针以下的栈空间。
  - 在进入汇编代码时，保证栈指针已经为函数调用进行了合适的对齐（依据目标 ABI）。
  - 你有责任确保不会发生栈溢出（例如使用栈探测来确保命中保护页）。
  - 在分配栈内存时，你应当按照目标 ABI 的要求调整栈指针。
  - 在离开汇编代码之前，必须将栈指针恢复为其原始值。

r[asm.rules.stack-above-sp]
- 除非设置了 `nostack` 选项，否则当目标 ABI 要求将某些值存储在调用者的栈帧中时，允许汇编代码修改调用者的栈帧（例如在 PowerPC64 上保存 `lr` 时）。

r[asm.rules.noreturn]
- 如果设置了 `noreturn` 选项，那么当执行从汇编代码末尾继续落出时，行为是未定义的。

r[asm.rules.pure]
- 如果设置了 `pure` 选项，那么当 `asm!` 具有除其直接输出以外的副作用时，行为是未定义的。如果以相同输入执行两次 `asm!` 代码却产生不同输出，行为也是未定义的。
  - 与 `nomem` 选项一起使用时，“输入”仅指 `asm!` 的直接输入。
  - 与 `readonly` 选项一起使用时，“输入”包括汇编代码的直接输入，以及它允许读取的任何内存。

r[asm.rules.preserved-registers]
- 如果设置了 `preserves_flags` 选项，则退出汇编代码时必须恢复这些标志寄存器：
  - x86
    - `EFLAGS` 中的状态标志（CF、PF、AF、ZF、SF、OF）。
    - 浮点状态字（全部）。
    - `MXCSR` 中的浮点异常标志（PE、UE、OE、ZE、DE、IE）。
  - ARM
    - `CPSR` 中的条件标志（N、Z、C、V）
    - `CPSR` 中的饱和标志（Q）
    - `CPSR` 中的大于或等于标志（GE）。
    - `FPSCR` 中的条件标志（N、Z、C、V）
    - `FPSCR` 中的饱和标志（QC）
    - `FPSCR` 中的浮点异常标志（IDC、IXC、UFC、OFC、DZC、IOC）。
  - AArch64 和 Arm64EC
    - 条件标志（`NZCV` 寄存器）。
    - 浮点状态（`FPSR` 寄存器）。
  - RISC-V
    - `fcsr` 中的浮点异常标志（`fflags`）。
    - 向量扩展状态（`vtype`、`vl`、`vxsat` 和 `vxrm`）。
  - LoongArch
    - `$fcc[0-7]` 中的浮点条件标志。
  - PowerPC/PowerPC64
    - `fpscr` 中的浮点状态和粘滞位（除 DRN、VE、OE、UE、ZE、XE、NI 或 RN 以外的任何字段）。
    - `vscr` 中的向量状态和粘滞位（除 NJ 以外的任何字段）。
  - PowerPC SPE
    - `spefscr` 的粘滞位和状态位（除 FINXE、FINVE、FDBZE、FUNFE、FOVFE 或 FRMC 以外的任何字段）。
  - s390x
    - 条件码寄存器 `cc`。

r[asm.rules.x86-df]
- 在 x86 上，进入汇编代码时方向标志（`EFLAGS` 中的 DF）是清除的，退出时也必须是清除的。
  - 如果退出汇编代码时方向标志被设置，则行为是未定义的。

r[asm.rules.x86-x87]
- 在 x86 上，x87 浮点寄存器栈必须保持不变，除非所有 `st([0-7])` 寄存器都已用 `out("st(0)") _, out("st(1)") _, ...` 标记为 clobber。
  - 如果所有 x87 寄存器都被 clobber，则进入汇编代码时保证 x87 寄存器栈为空。汇编代码必须确保退出汇编代码时 x87 寄存器栈也为空。

```rust
# #[cfg(target_arch = "x86_64")]
pub fn fadd(x: f64, y: f64) -> f64 {
  let mut out = 0f64;
  let mut top = 0u16;
  // 如果 clobber 整个 x87 栈，就可以用 x87 做复杂的事情
  unsafe { core::arch::asm!(
    "fld qword ptr [{x}]",
    "fld qword ptr [{y}])",
    "faddp",
    "fstp qword ptr [{out}]",
    "xor eax, eax",
    "fstsw ax",
    "shl eax, 11",
    x = in(reg) &x,
    y = in(reg) &y,
    out = in(reg) &mut out,
    out("st(0)") _, out("st(1)") _, out("st(2)") _, out("st(3)") _,
    out("st(4)") _, out("st(5)") _, out("st(6)") _, out("st(7)") _,
    out("eax") top
  );}

  assert_eq!(top & 0x7, 0);
  out
}

pub fn main() {
# #[cfg(target_arch = "x86_64")]{
  assert_eq!(fadd(1.0, 1.0), 2.0);
# }
}
```

r[asm.rules.arm64ec]
- 在 arm64ec 上，调用函数时必须使用[带有适当 thunk 的调用检查器](https://learn.microsoft.com/en-us/windows/arm/arm64ec-abi#authoring-arm64ec-in-assembly)。

r[asm.rules.only-on-exit]
- 将栈指针和非输出寄存器恢复为原始值的要求，仅适用于退出汇编代码时。
  - 这意味着不会直落执行且不会跳转到任何 `label` 块的汇编代码，即使未标记为 `noreturn`，也不需要保留这些寄存器。
  - 当返回到不同于你所进入的 `asm!` 块的汇编代码时（例如用于上下文切换），这些寄存器必须包含进入你正在 *退出* 的那个 `asm!` 块时它们所具有的值。
    - 不能退出尚未进入过的 `asm!` 块的汇编代码。也不能退出其汇编代码已经被退出过的 `asm!` 块的汇编代码（除非先再次进入它）。
    - 你负责切换任何目标特定状态（例如线程局部存储、栈边界）。
    - 不能从一个 `asm!` 块中的地址跳转到另一个块中的地址，即使它们位于同一函数或同一块中也不能这样做，除非将它们的上下文视为可能不同并要求进行上下文切换。不能假定这些上下文中的任何特定值（例如当前栈指针或栈指针下方的临时值）会在两个 `asm!` 块之间保持不变。
    - 你可以访问的内存位置集合，是你进入和退出的 `asm!` 块所允许访问集合的交集。

r[asm.rules.not-successive]
- 不能假定源代码中相邻的两个 `asm!` 块，即使它们之间没有任何其他代码，也会在二进制中最终位于连续地址且中间没有任何其他指令。

r[asm.rules.not-exactly-once]
- 不能假定一个 `asm!` 块在输出二进制中只会出现一次。编译器可以实例化该 `asm!` 块的多个副本，例如当包含它的函数在多处被内联时。

r[asm.rules.x86-prefix-restriction]
- 在 x86 上，内联汇编不得以会应用到编译器生成指令的指令前缀（例如 `LOCK`）结束。
  - 由于内联汇编的编译方式，编译器目前无法检测这一点，但将来可以捕获并拒绝这种情况。

r[asm.rules.preserves_flags]
> [!NOTE]
> 一般规则是，`preserves_flags` 覆盖的标志，是执行函数调用时 *不会* 被保留的那些标志。

r[asm.naked-rules]
## 裸内联汇编规则

r[asm.naked-rules.intro]
为避免未定义行为，在裸函数中使用函数作用域内联汇编（`naked_asm!`）时，必须遵守这些规则：

r[asm.naked-rules.reg-not-input]
- 根据调用约定和函数签名未用于函数输入的任何寄存器，在进入 `naked_asm!` 块时都将包含未定义值。
  - 内联汇编语境中的“未定义值”是指寄存器可以（非确定性地）拥有该架构所允许的任一可能值。特别要注意，它不同于 LLVM `undef`，后者可以在每次读取时具有不同的值（因为汇编代码中不存在这样的概念）。

r[asm.naked-rules.callee-saved-registers]
- 所有被调用者保存寄存器在返回时必须具有与进入时相同的值。

r[asm.naked-rules.caller-saved-registers]
- 调用者保存寄存器可以自由使用。

r[asm.naked-rules.noreturn]
- 如果执行直落越过汇编代码末尾，则行为是未定义的。
  - 穿过汇编代码的每条路径都预期以返回指令终止，或发散。

r[asm.naked-rules.mem-same-as-ffi]
- 汇编代码允许读写的内存位置集合，与 FFI 函数允许读写的内存位置集合相同。

r[asm.naked-rules.black-box]
- 编译器不能假定 `naked_asm!` 块中的指令就是实际将被执行的指令。
  - 这实际上意味着编译器必须将 `naked_asm!` 视为黑盒，并且只考虑接口规范，而不是指令本身。
  - 可以通过目标特定的机制进行运行时代码修补。

r[asm.naked-rules.unwind]
- 允许从 `naked_asm!` 块中展开。
  - 为获得正确行为，必须使用会发出展开元数据的适当汇编器指令。

```rust
# #[cfg(target_arch = "x86_64")] {
#[unsafe(naked)]
extern "sysv64-unwind" fn unwinding_naked() {
    core::arch::naked_asm!(
        // 这里的 "CFI" 表示 "call frame information"（调用帧信息）。
        ".cfi_startproc",
        // CFA（canonical frame address，规范帧地址）是 `rsp` 的值
        // 在 `call` 之前，也就是返回地址 `rip`
        // 被压入 `rsp` 之前，所以在函数入口处它在内存中
        // 比 `rsp` 高 8 个字节（在 `rip` 已经
        // 被压入之后）。
        //
        // 这是默认值，所以不必写出它。
        //".cfi_def_cfa rsp, 8",
        //
        // 传统做法是保留基指针，
        // 所以这里也这样做。
        "push rbp",
        // 由于现在已经在内存中将栈向下扩展了 8 字节，
        // 我们需要把从 `rsp` 到 CFA 的偏移
        // 再调整 8 字节。
        ".cfi_adjust_cfa_offset 8",
        // 然后还要标注我们把调用者的 `rbp` 值
        // 存放在相对于 CFA 的什么位置，这样在展开到
        // 调用者时就能找到它，以备需要用它来计算
        // 调用者相对于它的 CFA。
        //
        // 这里，我们把调用者的 `rbp` 存放在 CFA
        // 下方 16 字节处。也就是说，从 CFA 开始，
        // 首先是 `rip`（它从 CFA 下方 8 字节处开始，
        // 一直延续到 CFA），然后是刚刚
        // 压入的调用者 `rbp`。
        ".cfi_offset rbp, -16",
        // 按照传统做法，我们把基指针设为
        // 栈指针的值。这样，基指针在整个
        // 函数体中都保持不变。
        "mov rbp, rsp",
        // 现在可以从基指针跟踪到 CFA 的偏移。
        // 这意味着不需要再做进一步调整，
        // 因为我们不会改变 `rbp`。
        ".cfi_def_cfa_register rbp",
        // 现在可以调用一个可能 panic 的函数。
        "call {f}",
        // 返回后，我们恢复 `rbp`，为自己返回
        // 做准备。
        "pop rbp",
        // 现在已经恢复了 `rbp`，必须再次根据
        // `rsp` 指定到 CFA 的偏移。
        ".cfi_def_cfa rsp, 8",
        // 现在可以返回。
        "ret",
        ".cfi_endproc",
        f = sym may_panic,
    )
}

extern "sysv64-unwind" fn may_panic() {
    panic!("unwind");
}
# }
```

> [!NOTE]
>
> 有关上述 `cfi` 汇编器指令的更多信息，请参阅这些资源：
>
> - [Using `as` - CFI directives](https://sourceware.org/binutils/docs/as/CFI-directives.html)
> - [DWARF Debugging Information Format Version 5](https://dwarfstd.org/doc/DWARF5.pdf)
> - [ImperialViolet - CFI directives in assembly files](https://www.imperialviolet.org/2017/01/18/cfi.html)

r[asm.validity]
### 正确性和有效性

r[asm.validity.necessary-but-not-sufficient]
除前述所有规则外，传给 `asm!` 的字符串实参最终必须在所有其他实参求值、格式化完成、操作数转换之后，成为对目标架构而言语法正确且语义有效的汇编。格式化规则允许编译器生成语法正确的汇编。关于操作数的规则允许将 Rust 操作数有效地转换进出汇编代码。遵守这些规则是最终展开后的汇编既正确又有效的必要条件，但并非充分条件。例如：

- 实参在格式化后可能被放置到语法不正确的位置
- 一条指令可能写法正确，但给定了架构上无效的操作数
- 架构未指定的指令可能被汇编成未指定的代码
- 一组各自正确且有效的指令，如果紧接排列，可能导致未定义行为

r[asm.validity.non-exhaustive]
因此，这些规则是 *非穷尽的*。编译器不需要检查初始字符串或最终生成的汇编的正确性和有效性。汇编器可以检查正确性和有效性，但不要求这样做。使用 `asm!` 时，一个排印错误就可能足以使程序不健全，而汇编规则可能包含数千页架构参考手册。程序员应当保持适当谨慎，因为调用这种 `unsafe` 能力意味着承担不违反编译器和架构双方规则的责任。

r[asm.directives]
### 指令支持

r[asm.directives.subset-supported]
内联汇编支持 GNU AS 和 LLVM 内部汇编器共同支持的指令子集，如下所示。使用其他指令的结果取决于汇编器（并且可能导致错误，也可能按原样被接受）。

r[asm.directives.stateful]
如果内联汇编包含任何会修改后续汇编处理方式的“有状态”指令，则汇编代码必须在内联汇编结束前撤销任何此类指令的影响。

r[asm.directives.supported-directives]
保证汇编器支持以下指令：

- `.2byte`
- `.4byte`
- `.8byte`
- `.align`
- `.alt_entry`
- `.ascii`
- `.asciz`
- `.balign`
- `.balignl`
- `.balignw`
- `.bss`
- `.byte`
- `.comm`
- `.data`
- `.def`
- `.double`
- `.endef`
- `.equ`
- `.equiv`
- `.eqv`
- `.fill`
- `.float`
- `.global`
- `.globl`
- `.inst`
- `.insn`
- `.lcomm`
- `.long`
- `.octa`
- `.option`
- `.p2align`
- `.popsection`
- `.private_extern`
- `.pushsection`
- `.quad`
- `.scl`
- `.section`
- `.set`
- `.short`
- `.size`
- `.skip`
- `.sleb128`
- `.space`
- `.string`
- `.text`
- `.type`
- `.uleb128`
- `.word`

```rust
# #[cfg(target_arch = "x86_64")] {
let bytes: *const u8;
let len: usize;
unsafe {
    core::arch::asm!(
        "jmp 3f", "2: .ascii \"Hello World!\"",
        "3: lea {bytes}, [2b+rip]",
        "mov {len}, 12",
        bytes = out(reg) bytes,
        len = out(reg) len
    );
}

let s = unsafe { core::str::from_utf8_unchecked(core::slice::from_raw_parts(bytes, len)) };

assert_eq!(s, "Hello World!");
# }
```

r[asm.target-specific-directives]
#### 目标特定指令支持

r[asm.target-specific-directives.dwarf-unwinding]
##### DWARF 展开

在支持 DWARF 展开信息的 ELF 目标上，支持以下指令：

- `.cfi_adjust_cfa_offset`
- `.cfi_def_cfa`
- `.cfi_def_cfa_offset`
- `.cfi_def_cfa_register`
- `.cfi_endproc`
- `.cfi_escape`
- `.cfi_lsda`
- `.cfi_offset`
- `.cfi_personality`
- `.cfi_register`
- `.cfi_rel_offset`
- `.cfi_remember_state`
- `.cfi_restore`
- `.cfi_restore_state`
- `.cfi_return_column`
- `.cfi_same_value`
- `.cfi_sections`
- `.cfi_signal_frame`
- `.cfi_startproc`
- `.cfi_undefined`
- `.cfi_window_save`

r[asm.target-specific-directives.structured-exception-handling]
##### 结构化异常处理

在具有结构化异常处理的目标上，保证支持以下附加指令：

- `.seh_endproc`
- `.seh_endprologue`
- `.seh_proc`
- `.seh_pushreg`
- `.seh_savereg`
- `.seh_setframe`
- `.seh_stackalloc`

r[asm.target-specific-directives.x86]
##### x86（32 位和 64 位）

在 x86 目标上，无论 32 位还是 64 位，保证支持以下附加指令：
- `.nops`
- `.code16`
- `.code32`
- `.code64`

只有在退出汇编代码前将状态重置为默认值时，才支持使用 `.code16`、`.code32` 和 `.code64` 指令。32 位 x86 默认使用 `.code32`，x86_64 默认使用 `.code64`。

r[asm.target-specific-directives.arm-32-bit]
##### ARM（32 位）

在 ARM 上，保证支持以下附加指令：

- `.even`
- `.fnstart`
- `.fnend`
- `.save`
- `.movsp`
- `.code`
- `.thumb`
- `.thumb_func`
