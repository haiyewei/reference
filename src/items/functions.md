r[items.fn]
# 函数

r[items.fn.syntax]
```grammar,items
Function ->
    FunctionQualifiers `fn` IDENTIFIER GenericParams?
        `(` FunctionParameters? `)`
        FunctionReturnType? WhereClause?
        ( BlockExpression | `;` )

FunctionQualifiers -> `const`? `async`?[^async-edition] ItemSafety?[^extern-qualifiers] (`extern` Abi?)?

ItemSafety -> `safe`[^extern-safe] | `unsafe`

Abi -> STRING_LITERAL | RAW_STRING_LITERAL

FunctionParameters ->
      SelfParam `,`?
    | (SelfParam `,`)? FunctionParam (`,` FunctionParam)* `,`?

SelfParam -> OuterAttribute* ( ShorthandSelf | TypedSelf )

ShorthandSelf -> (`&` | `&` Lifetime)? `mut`? `self`

TypedSelf -> `mut`? `self` `:` Type

FunctionParam -> OuterAttribute* ( FunctionParamPattern | `...` | Type[^fn-param-2015] )

FunctionParamPattern -> PatternNoTopAlt `:` ( Type | `...` )

FunctionReturnType -> `->` Type
```

[^async-edition]: The `async` qualifier is not allowed in the 2015 edition.

[^extern-safe]: The `safe` function qualifier is only allowed semantically within `extern` blocks.

[^extern-qualifiers]: *Relevant to editions earlier than Rust 2024*: Within `extern` blocks, the `safe` or `unsafe` function qualifier is only allowed when the `extern` is qualified as `unsafe`.

[^fn-param-2015]: Function parameters with only a type are only allowed in an associated function of a [trait item] in the 2015 edition.

r[items.fn.intro]
<em>函数</em>由一个[块](../expressions/block-expr.md)（即函数的<em>主体</em>）、一个名称、一组参数和一个输出类型组成。除名称外，所有这些部分都是可选的。

r[items.fn.namespace]
函数使用关键字 `fn` 声明，该关键字会在函数所在模块或块的[值命名空间](../names/namespaces.md)中定义给定名称。

r[items.fn.signature]
函数可以声明一组作为参数的输入[变量](../variables.md)，调用者通过这些参数向函数传入实参；函数还可以声明完成时返回给调用者的值的输出[类型](../types.md#type-expressions)。

r[items.fn.implicit-return]
如果未显式声明输出类型，则它是 [unit 类型](../types/tuple.md)。

r[items.fn.fn-item-type]
当被引用时，<em>函数</em>会产生对应[零大小](../glossary.md#r-glossary.zst)[函数项类型](../types/function-item.md)的一等<em>值</em>；调用该值时，会求值为对该函数的直接调用。

例如，这是一个简单函数：

```rust
fn answer_to_life_the_universe_and_everything() -> i32 {
    return 42;
}
```

r[items.fn.safety-qualifiers]
`safe` 函数在语义上只允许用于 [`extern` 块](external-blocks.md)中。

r[items.fn.params]
## 函数参数

r[items.fn.params.intro]
函数参数是不可反驳的[模式](../patterns.md)，因此任何在不带 `else` 的 `let` 绑定中有效的模式，也都可以作为参数：

```rust
fn first((value, _): (i32, i32)) -> i32 { value }
```

r[items.fn.params.self-pat]
如果第一个参数是 [SelfParam](functions.md#grammar-SelfParam)，则表示该函数是一个[方法](associated-items.md#methods)。

r[items.fn.params.self-restriction]
带有 self 参数的函数只能作为 [trait](traits.md) 或[实现](implementations.md)中的[关联函数](associated-items.md#associated-functions-and-methods)出现。

r[items.fn.params.varargs]
带有 `...` token 的参数表示一个[变参函数](external-blocks.md#variadic-functions)，并且只能用作[外部块](external-blocks.md)函数的最后一个参数。变参参数可以带有可选的标识符，例如 `args: ...`。

r[items.fn.body]
## 函数体

r[items.fn.body.intro]
从概念上说，函数的主体块会被包裹在另一个块中，该块先绑定实参模式，然后 `return` 函数主体的值。这意味着，如果块的尾表达式被求值，最终会将其返回给调用者。和通常一样，如果执行到函数体中的显式 return 表达式，它会提前结束这个隐式返回。

例如，上面的函数行为就像写成如下形式：

<!-- ignore: example expansion -->
```rust,ignore
// argument_0 is the actual first argument passed from the caller
let (value, _) = argument_0;
return {
    value
};
```

r[items.fn.body.bodyless]
没有主体块的函数以分号结束。这种形式只能出现在 [trait](traits.md) 或[外部块](external-blocks.md)中。

r[items.fn.generics]
## 泛型函数

r[items.fn.generics.intro]
<em>泛型函数</em>允许一个或多个<em>参数化类型</em>出现在其签名中。每个类型参数都必须在函数名之后、由尖括号包围且以逗号分隔的列表中显式声明。

```rust
// foo is generic over A and B

fn foo<A, B>(x: A, y: B) {
# }
```

r[items.fn.generics.param-names]
在函数签名和函数体内，类型参数的名称可以作为类型名称使用。

r[items.fn.generics.param-bounds]
可以为类型参数指定 [trait](traits.md) 约束，以允许在该类型的值上调用来自该 trait 的方法。这使用 `where` 语法指定：

```rust
# use std::fmt::Debug;
fn foo<T>(x: T) where T: Debug {
# }
```

r[items.fn.generics.mono]
当泛型函数被引用时，会根据该引用的上下文实例化其类型。例如，在这里调用 `foo` 函数：

```rust
use std::fmt::Debug;

fn foo<T>(x: &[T]) where T: Debug {
    // details elided
}

foo(&[1, 2]);
```

会用 `i32` 实例化类型参数 `T`。

r[items.fn.generics.explicit-arguments]
类型参数也可以在函数名之后的尾随[路径](../paths.md)组件中显式提供。如果没有足够的上下文来确定类型参数，这可能是必要的。例如，`mem::size_of::<u32>() == 4`。

r[items.fn.extern]
## Extern 函数限定符

r[items.fn.extern.intro]
`extern` 函数限定符允许提供可用特定 ABI 调用的函数<em>定义</em>：

<!-- ignore: fake ABI -->
```rust,ignore
extern "ABI" fn foo() { /* ... */ }
```

r[items.fn.extern.def]
这些函数定义常与[外部块](external-blocks.md)项结合使用；外部块项提供函数<em>声明</em>，可在不提供其<em>定义</em>的情况下调用函数：

<!-- ignore: fake ABI -->
```rust,ignore
unsafe extern "ABI" {
  unsafe fn foo(); /* no body */
  safe fn bar(); /* no body */
}
unsafe { foo() };
bar();
```

r[items.fn.extern.default-abi]
当函数项的 `FunctionQualifiers` 中省略 `"extern" Abi?*` 时，会分配 ABI `"Rust"`。例如：

```rust
fn foo() {}
```

等价于：

```rust
extern "Rust" fn foo() {}
```

r[items.fn.extern.foreign-call]
函数可以由外部代码调用；使用不同于 Rust 的 ABI，例如可以提供能从 C 等其他编程语言调用的函数：

```rust
// Declares a function with the "C" ABI
extern "C" fn new_i32() -> i32 { 0 }

// Declares a function with the "stdcall" ABI
# #[cfg(any(windows, target_arch = "x86"))]
extern "stdcall" fn new_i32_stdcall() -> i32 { 0 }
```

r[items.fn.extern.default-extern]
与[外部块](external-blocks.md)一样，当使用 `extern` 关键字且省略 `"ABI"` 时，所用 ABI 默认为 `"C"`。也就是说，下面这样：

```rust
extern fn new_i32() -> i32 { 0 }
let fptr: extern fn() -> i32 = new_i32;
```

等价于：

```rust
extern "C" fn new_i32() -> i32 { 0 }
let fptr: extern "C" fn() -> i32 = new_i32;
```

r[items.fn.extern.unwind]
### 展开

r[items.fn.extern.unwind.intro]
大多数 ABI 字符串都有两个变体：一个带有 `-unwind` 后缀，另一个不带。`Rust` ABI 总是允许展开，因此不存在 `Rust-unwind` ABI。ABI 的选择与运行时 [panic handler](../panic.md#the-panic_handler-attribute) 一起决定从函数中展开时的行为。

r[items.fn.extern.unwind.behavior]
下表说明展开操作到达每类 ABI 边界（使用相应 ABI 字符串的函数声明或定义）时的行为。注意，Rust 运行时既不受完全发生在另一种语言运行时内部的任何展开影响，也不能影响这种展开；也就是说，这类展开在未到达 Rust ABI 边界的情况下被抛出并捕获。

The `panic`-unwind column refers to [panicking] via the `panic!` macro and similar standard library mechanisms, as well as to any other Rust operations that cause a panic, such as out-of-bounds array indexing or integer overflow.

“unwinding” ABI 类别指 `"Rust"`（未标记为 `extern` 的 Rust 函数的隐式 ABI）、`"C-unwind"`，以及名称中带有 `-unwind` 的任何其他 ABI。“non-unwinding” ABI 类别指所有其他 ABI 字符串，包括 `"C"` 和 `"stdcall"`。

原生展开按目标定义。在支持抛出和捕获 C++ 异常的目标上，它指用于实现此功能的机制。一些平台实现了一种称为 ["forced unwinding"](https://rust-lang.github.io/rfcs/2945-c-unwind-abi.html#forced-unwinding) 的展开形式；Windows 上的 `longjmp` 和 `glibc` 中的 `pthread_exit` 就是以这种方式实现的。强制展开被明确排除在表中的 “Native unwind” 列之外。

| panic 运行时 | ABI | `panic`-unwind | 原生展开（非强制） |
| -------------- | ------------  | ------------------------------------- | -----------------------  |
| `panic=unwind` | 展开式 | 展开 | 展开 |
| `panic=unwind` | 非展开式 | 中止（见下方注释） | [未定义行为](../behavior-considered-undefined.md) |
| `panic=abort` | 展开式 | `panic` 不展开而中止 | 中止 |
| `panic=abort` | 非展开式 | `panic` 不展开而中止 | [未定义行为](../behavior-considered-undefined.md) |

r[items.fn.extern.abort]
使用 `panic=unwind` 时，当 `panic` 被非展开式 ABI 边界转变为中止时，要么不会运行任何析构器（`Drop` 调用），要么会运行直到 ABI 边界为止的所有析构器。会发生这两种行为中的哪一种是未指定的。

有关跨 FFI 边界展开的其他考虑事项和限制，请参阅 [Panic 文档中的相关小节](../panic.md#unwinding-across-ffi-boundaries)。

[forced-unwinding]: https://rust-lang.github.io/rfcs/2945-c-unwind-abi.html#forced-unwinding
[panic handler]: ../panic.md#the-panic_handler-attribute
[panic-ffi]: ../panic.md#unwinding-across-ffi-boundaries
[panicking]: ../panic.md
[undefined behavior]: ../behavior-considered-undefined.md

r[items.fn.const]
## const 函数

const 函数的定义见 [const functions](../const_eval.md#const-functions)。

r[items.fn.async]
## 异步函数

r[items.fn.async.intro]
函数可以限定为 async，并且这也可以与 `unsafe` 限定符组合使用：

```rust
async fn regular_example() { }
async unsafe fn unsafe_example() { }
```

r[items.fn.async.future]
调用异步函数时并不会执行工作：相反，它们会把实参捕获到一个 future 中。当该 future 被轮询时，它会执行函数体。

r[items.fn.async.desugar-brief]
异步函数大致等价于一个返回 [`impl Future`](../types/impl-trait.md)、并以 [`async move` 块](../expressions/block-expr.md#async-blocks)作为其主体的函数：

```rust
// Source
async fn example(x: &str) -> usize {
    x.len()
}
```

大致等价于：

```rust
# use std::future::Future;
// Desugared
fn example<'a>(x: &'a str) -> impl Future<Output = usize> + 'a {
    async move { x.len() }
}
```

r[items.fn.async.desugar]
实际的脱糖更复杂：

r[items.fn.async.lifetime-capture]
- 脱糖后的返回类型会被假定捕获 `async fn` 声明中的所有生命周期参数。这可以在上面的脱糖示例中看到：它显式地 outlive `'a`，因而捕获了 `'a`。

r[items.fn.async.param-capture]
- 主体中的 [`async move` 块](../expressions/block-expr.md#async-blocks)会捕获所有函数参数，包括未使用的参数或绑定到 `_` 模式的参数。这确保函数参数按与该函数不是 async 时相同的顺序被丢弃，只是丢弃发生在返回的 future 被完全 await 之后。

有关 async 效果的更多信息，请参阅 [`async` 块](../expressions/block-expr.md#async-blocks)。

[async-blocks]: ../expressions/block-expr.md#async-blocks
[`impl Future`]: ../types/impl-trait.md

r[items.fn.async.edition2018]
> [!EDITION-2018]
> 异步函数从 Rust 2018 开始才可用。

r[items.fn.async.safety]
### 组合 `async` 和 `unsafe`

r[items.fn.async.safety.intro]
声明一个同时为 async 和 unsafe 的函数是合法的。所得函数在调用时是不安全的，并且（和任何异步函数一样）会返回一个 future。这个 future 只是普通 future，因此 “await” 它不需要 `unsafe` 上下文：

```rust
// Returns a future that, when awaited, dereferences `x`.
//
// Soundness condition: `x` must be safe to dereference until
// the resulting future is complete.
async unsafe fn unsafe_example(x: *const i32) -> i32 {
  *x
}

async fn safe_example() {
    // An `unsafe` block is required to invoke the function initially:
    let p = 22;
    let future = unsafe { unsafe_example(&p) };

    // But no `unsafe` block required here. This will
    // read the value of `p`:
    let q = future.await;
}
```

注意，此行为是脱糖为返回 `impl Future` 的函数所导致的结果；在这种情况下，脱糖得到的函数是一个 `unsafe` 函数，但返回值保持不变。

在异步函数上使用 unsafe 的方式与在其他函数上使用它的方式完全相同：它表示该函数为了确保健全性，会对其调用者施加一些额外义务。与任何其他 unsafe 函数一样，这些条件可能延伸到初始调用本身之外；例如，在上面的片段中，`unsafe_example` 函数接受指针 `x` 作为实参，然后（在被 await 时）解引用该指针。这意味着 `x` 必须在 future 完成执行之前一直有效，而确保这一点是调用者的责任。

r[items.fn.attributes]
## 函数上的属性

r[items.fn.attributes.intro]
函数上允许使用[外部属性](../attributes.md)。[内部属性](../attributes.md)允许直接出现在其主体[块](../expressions/block-expr.md)内部的 `{` 之后。

这个示例展示函数上的一个内部属性。该函数的文档仅包含单词 "Example"。

```rust
fn documented() {
    #![doc = "Example"]
}
```

> [!NOTE]
> 除 lint 外，惯用做法是只在函数项上使用外部属性。

r[items.fn.attributes.builtin-attributes]
在函数上有意义的属性包括：

- [`cfg_attr`](../conditional-compilation.md#the-cfg_attr-attribute)
- [`cfg`](../conditional-compilation.md#the-cfg-attribute)
- [`cold`](../attributes/codegen.md#the-cold-attribute)
- [`deprecated`](../attributes/diagnostics.md#the-deprecated-attribute)
- [`doc`](../../rustdoc/the-doc-attribute.html)
- [`export_name`](../abi.md#the-export_name-attribute)
- [`inline`](../attributes/codegen.md#the-inline-attribute)
- [`link_section`](../abi.md#the-link_section-attribute)
- [`must_use`](../attributes/diagnostics.md#the-must_use-attribute)
- [`no_mangle`](../abi.md#the-no_mangle-attribute)
- [Lint 检查属性](../attributes/diagnostics.md#lint-check-attributes)
- [过程宏属性](../procedural-macros.md#r-macro.proc.attribute)
- [测试属性](../attributes/testing.md)

r[items.fn.param-attributes]
## 函数形参上的属性

r[items.fn.param-attributes.intro]
函数参数上允许使用[外部属性](../attributes.md)，且允许的[内置属性](../attributes.md#built-in-attributes-index)限于 `cfg`、`cfg_attr`、`allow`、`warn`、`deny` 和 `forbid`。

```rust
fn len(
    #[cfg(windows)] slice: &[u16],
    #[cfg(not(windows))] slice: &[u8],
) -> usize {
    slice.len()
}
```

r[items.fn.param-attributes.parsed-attributes]
也允许使用由应用于项的过程宏属性所使用的惰性辅助属性，但要注意不要把这些惰性属性包含在最终的 `TokenStream` 中。

例如，以下代码定义了一个惰性 `some_inert_attribute` 属性，它并未在任何地方被正式定义，而 `some_proc_macro_attribute` 过程宏负责检测它是否存在，并将其从输出 token stream 中移除。

<!-- ignore: requires proc macro -->
```rust,ignore
#[some_proc_macro_attribute]
fn foo_oof(#[some_inert_attribute] arg: u8) {
}
```

[const contexts]: ../const_eval.md#const-context
[const functions]: ../const_eval.md#const-functions
[external block]: external-blocks.md
[path]: ../paths.md
[block]: ../expressions/block-expr.md
[variables]: ../variables.md
[type]: ../types.md#type-expressions
[unit type]: ../types/tuple.md
[*function item type*]: ../types/function-item.md
[Trait]: traits.md
[attributes]: ../attributes.md
[`cfg`]: ../conditional-compilation.md#the-cfg-attribute
[`cfg_attr`]: ../conditional-compilation.md#the-cfg_attr-attribute
[lint check attributes]: ../attributes/diagnostics.md#lint-check-attributes
[procedural macro attributes]: macro.proc.attribute
[testing attributes]: ../attributes/testing.md
[`cold`]: ../attributes/codegen.md#the-cold-attribute
[`inline`]: ../attributes/codegen.md#the-inline-attribute
[`deprecated`]: ../attributes/diagnostics.md#the-deprecated-attribute
[`doc`]: ../../rustdoc/the-doc-attribute.html
[`must_use`]: ../attributes/diagnostics.md#the-must_use-attribute
[patterns]: ../patterns.md
[`export_name`]: ../abi.md#the-export_name-attribute
[`link_section`]: ../abi.md#the-link_section-attribute
[`no_mangle`]: ../abi.md#the-no_mangle-attribute
[built-in attributes]: ../attributes.md#built-in-attributes-index
[trait item]: traits.md
[method]: associated-items.md#methods
[associated function]: associated-items.md#associated-functions-and-methods
[implementation]: implementations.md
[value namespace]: ../names/namespaces.md
[variadic function]: external-blocks.md#variadic-functions
[`extern` block]: external-blocks.md
[zero-sized]: glossary.zst
