r[type.fn-pointer]
# 函数指针类型

r[type.fn-pointer.syntax]
```grammar,types
BareFunctionType ->
    ForLifetimes? FunctionTypeQualifiers `fn`
       `(` FunctionParametersMaybeNamedVariadic? `)` BareFunctionReturnType?

FunctionTypeQualifiers -> `unsafe`? (`extern` Abi?)?

BareFunctionReturnType -> `->` TypeNoBounds

FunctionParametersMaybeNamedVariadic ->
    MaybeNamedFunctionParameters | MaybeNamedFunctionParametersVariadic

MaybeNamedFunctionParameters ->
    MaybeNamedParam ( `,` MaybeNamedParam )* `,`?

MaybeNamedParam ->
    OuterAttribute* ( ( IDENTIFIER | `_` ) `:` )? Type

MaybeNamedFunctionParametersVariadic ->
    ( MaybeNamedParam `,` )* MaybeNamedParam `,` OuterAttribute* `...`
```

r[type.fn-pointer.intro]
函数指针类型使用 `fn` 关键字书写，指代一个其身份不一定在编译时已知的函数。

下面是将 `Binop` 定义为函数指针类型的示例：

```rust
fn add(x: i32, y: i32) -> i32 {
    x + y
}

let mut x = add(5,7);

type Binop = fn(i32, i32) -> i32;
let bo: Binop = add;
x = bo(5,7);
```

r[type.fn-pointer.coercion]
函数指针可以通过从[函数项](function-item.md)以及非捕获、非 async 的[闭包](closure.md)进行强制转换来创建。

r[type.fn-pointer.qualifiers]
`unsafe` 限定符表示该类型的值是一个 [unsafe 函数](../unsafe-keyword.md)，而 `extern` 限定符表示它是一个 [extern 函数](../items/functions.md#extern-function-qualifier)。

r[type.fn-pointer.constraint-variadic]
要使函数成为变参函数，它的 `extern` ABI 必须是 [items.extern.variadic.conventions](../items/external-blocks.md#r-items.extern.variadic.conventions) 中列出的 ABI 之一。

r[type.fn-pointer.attributes]
## 函数指针形参上的属性

函数指针形参上的属性遵循与[常规函数形参](../items/functions.md#attributes-on-function-parameters)相同的规则和限制。

[`extern`]: ../items/external-blocks.md
[closures]: closure.md
[extern function]: ../items/functions.md#extern-function-qualifier
[function items]: function-item.md
[unsafe function]: ../unsafe-keyword.md
[regular function parameters]: ../items/functions.md#attributes-on-function-parameters
