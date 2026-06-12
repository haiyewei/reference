r[items.generics]
# 泛型参数

r[items.generics.syntax]
```grammar,items
GenericParams -> `<` ( GenericParam (`,` GenericParam)* `,`? )? `>`

GenericParam -> OuterAttribute* ( LifetimeParam | TypeParam | ConstParam )

LifetimeParam -> Lifetime ( `:` LifetimeBounds )?

TypeParam -> IDENTIFIER ( `:` Bounds? )? ( `=` Type )?

ConstParam ->
    `const` IDENTIFIER `:` Type
    ( `=` ( BlockExpression | IDENTIFIER | `-`?LiteralExpression ) )?
```

r[items.generics.syntax.intro]
[函数](functions.md)、[类型别名](type-aliases.md)、[结构体](structs.md)、[枚举](enumerations.md)、[联合体](unions.md)、[trait](traits.md) 和[实现](implementations.md)可以按类型、常量和生命周期进行*参数化*。这些参数列在尖括号 <span class="parenthetical">（`<...>`）</span> 中，通常紧跟在项的名称之后、定义之前。对于没有名称的实现，它们直接位于 `impl` 之后。

r[items.generics.syntax.decl-order]
泛型参数的顺序受限为先是生命周期参数，然后是类型参数和 const 参数交错排列。

r[items.generics.syntax.duplicate-params]
同一参数名不得在 [GenericParams] 列表中声明多次。

下面是带有类型、const 和生命周期参数的项的一些示例：

```rust
fn foo<'a, T>() {}
trait A<U> {}
struct Ref<'a, T> where T: 'a { r: &'a T }
struct InnerArray<T, const N: usize>([T; N]);
struct EitherOrderWorks<const N: bool, U>(U);
```

r[items.generics.syntax.scope]
泛型参数在其声明所在的项定义内处于作用域中。对于函数体内声明的项，它们不在作用域内，如[项声明](../statements.md#r-statement.item)中所述。更多细节见[泛型参数作用域](../names/scopes.md#r-names.scopes.generic-parameters)。

r[items.generics.builtin-generic-types]
[引用](../types/pointer.md#r-type.pointer.reference.shared)、[裸指针](../types/pointer.md#r-type.pointer.raw)、[数组](../types/array.md)、[切片](../types/slice.md)、[元组](../types/tuple.md)和[函数指针](../types/function-pointer.md)也有生命周期或类型参数，但不会使用路径语法引用它们。

r[items.generics.invalid-lifetimes]
`'_` 和 `'static` 不是有效的生命周期参数名。

r[items.generics.const]
### const 泛型

r[items.generics.const.intro]
*const 泛型参数*允许项针对常量值泛型化。

r[items.generics.const.namespace]
const 标识符会在[值命名空间](../names/namespaces.md)中为常量参数引入一个名称，并且该项的所有实例都必须以给定类型的值实例化。

r[items.generics.const.allowed-types]
const 参数唯一允许的类型是 `u8`、`u16`、`u32`、`u64`、`u128`、`usize`、`i8`、`i16`、`i32`、`i64`、`i128`、`isize`、`char` 和 `bool`。

r[items.generics.const.use]
const 参数可以用在 [const 项](constant-items.md)可用的任何位置，但在[类型](../types.md)或[数组重复表达式](../expressions/array-expr.md)中使用时例外，它必须独立出现（如下所述）。也就是说，它们允许出现在以下位置：

1. 作为应用到某个类型上的 const 实参，而该类型构成所讨论项签名的一部分。
2. 作为用于定义[关联 const](associated-items.md#associated-constants) 的 const 表达式的一部分，或作为[关联类型](associated-items.md#associated-types)的参数。
3. 作为项中任意函数体内任意运行时表达式中的值。
4. 作为项中任意函数体内所用任意类型的参数。
5. 作为项中任意字段类型的一部分。

```rust
// 可以使用 const 泛型参数的示例。

// 用于项自身的签名中。
fn foo<const N: usize>(arr: [i32; N]) {
    // 在函数体内用作类型。
    let x: [i32; N];
    // 用作表达式。
    println!("{}", N * 2);
}

// 用作结构体字段。
struct Foo<const N: usize>([i32; N]);

impl<const N: usize> Foo<N> {
    // 用作关联常量。
    const CONST: usize = N * 4;
}

trait Trait {
    type Output;
}

impl<const N: usize> Trait for Foo<N> {
    // 用作关联类型。
    type Output = [i32; N];
}
```

```rust,compile_fail
// 不能使用 const 泛型参数的示例。
fn foo<const N: usize>() {
    // 不能用于函数体内的项定义。
    const BAD_CONST: [usize; N] = [1; N];
    static BAD_STATIC: [usize; N] = [1; N];
    fn inner(bad_arg: [usize; N]) {
        let bad_value = N * 2;
    }
    type BadAlias = [usize; N];
    struct BadStruct([usize; N]);
}
```

r[items.generics.const.standalone]
作为进一步限制，const 参数在[类型](../types.md)或[数组重复表达式](../expressions/array-expr.md)内部只能作为独立实参出现。在这些上下文中，它们只能作为单段[路径表达式](../expressions/path-expr.md)使用，可以位于[块](../expressions/block-expr.md)内（例如 `N` 或 `{N}`）。也就是说，它们不能与其他表达式组合。

```rust,compile_fail
// 不可以使用 const 参数的示例。

// 不允许在类型中与其他表达式组合，例如这里返回类型中的
// 算术表达式。
fn bad_function<const N: usize>() -> [u8; {N + 1}] {
    // 同样，也不允许用于数组重复表达式。
    [1; {N + 1}]
}
```

r[items.generics.const.argument]
[路径](../paths.md)中的 const 实参指定该项要使用的 const 值。

r[items.generics.const.argument.const-expr]
该实参必须要么是[推断 const](items.generics.const.inferred)，要么是该 const 参数所标注类型的 [const 表达式](../const_eval.md#r-const-eval.const-expr)。除非它是单段路径（[IDENTIFIER]）或[字面量](../expressions/literal-expr.md)（可能带有前导 `-` token），否则 const 表达式必须是[块表达式](../expressions/block-expr.md)（用花括号包围）。

> [!NOTE]
> 这种语法限制是必要的，以避免在类型内部解析表达式时需要无限前瞻。

```rust
struct S<const N: i64>;
const C: i64 = 1;
fn f<const N: i64>() -> S<N> { S }

let _ = f::<1>(); // 字面量。
let _ = f::<-1>(); // 负字面量。
let _ = f::<{ 1 + 2 }>(); // 常量表达式。
let _ = f::<C>(); // 单段路径。
let _ = f::<{ C + 1 }>(); // 常量表达式。
let _: S<1> = f::<_>(); // 推断 const。
let _: S<1> = f::<(((_)))>(); // 推断 const。
```

> [!NOTE]
> 在泛型实参列表中，[推断 const](items.generics.const.inferred) 会被解析为[推断类型][InferredType]，但随后在语义上被视为一种单独的 [const 泛型实参](items.generics.const.argument)。

r[items.generics.const.inferred]
在预期 const 实参的位置，可以改用 `_`（可选地由任意数量匹配的括号包围），称为*推断 const*（[路径规则][paths.expr.complex-const-params]、[数组表达式规则][expr.array.length-restriction]）。这会请求编译器在可能时基于周围信息推断该 const 实参。

```rust
fn make_buf<const N: usize>() -> [u8; N] {
    [0; _]
    //  ^ 推断为 `N`。
}
let _: [u8; 1024] = make_buf::<_>();
//                             ^ 推断为 `1024`。
```

> [!NOTE]
> [推断 const](items.generics.const.inferred) 在语义上不是[表达式][Expression]，因此不接受在花括号内使用。
>
> ```rust,compile_fail
> fn f<const N: usize>() -> [u8; N] { [0; _] }
> let _: [_; 1] = f::<{ _ }>();
> //                    ^ 错误：这里不允许 `_`
> ```

r[items.generics.const.inferred.constraint]
推断 const 不能用于项签名。

```rust,compile_fail
fn f<const N: usize>(x: [u8; N]) -> [u8; _] { x }
//                                       ^ 错误：不允许
```

r[items.generics.const.type-ambiguity]
当存在泛型实参可能解析为类型实参或 const 实参的歧义时，它总会被解析为类型。将实参放入块表达式可以强制将其解释为 const 实参。

<!-- TODO: Rewrite the paragraph above to be in terms of namespaces, once namespaces are introduced, and it is clear which namespace each parameter lives in. -->

```rust,compile_fail
type N = u32;
struct Foo<const N: usize>;
// 下面会出错，因为 `N` 被解释为类型别名 `N`。
fn foo<const N: usize>() -> Foo<N> { todo!() } // 错误
// 可以通过用花括号包裹来修复，以强制将其解释为 `N`
// const 参数：
fn bar<const N: usize>() -> Foo<{ N }> { todo!() } // ok
```

r[items.generics.const.variance]
不同于类型参数和生命周期参数，const 参数可以在参数化项内部未被使用的情况下声明，但[泛型实现](implementations.md#r-items.impl.generics)中所述的实现除外：

```rust,compile_fail
// ok
struct Foo<const N: usize>;
enum Bar<const M: usize> { A, B }

// 错误：未使用的参数
struct Baz<T>;
struct Biz<'a>;
struct Unconstrained;
impl<const N: usize> Unconstrained {}
```

r[items.generics.const.exhaustiveness]
解析 trait 约束义务时，在判断约束是否满足时，不会考虑 const 参数的所有实现是否穷尽。例如，在下面示例中，即使 `bool` 类型的所有可能 const 值都已实现，trait 约束不满足仍然是错误：

```rust,compile_fail
struct Foo<const B: bool>;
trait Bar {}
impl Bar for Foo<true> {}
impl Bar for Foo<false> {}

fn needs_bar(_: impl Bar) {}
fn generic<const B: bool>() {
    let v = Foo::<B>;
    needs_bar(v); // 错误：trait 约束 `Foo<B>: Bar` 不满足
}
```

r[items.generics.where]
## where 子句

r[items.generics.where.syntax]
```grammar,items
WhereClause -> `where` ( WhereClauseItem `,` )* WhereClauseItem?

WhereClauseItem ->
      LifetimeWhereClauseItem
    | TypeBoundWhereClauseItem

LifetimeWhereClauseItem -> Lifetime `:` LifetimeBounds

TypeBoundWhereClauseItem -> ForLifetimes? Type `:` Bounds?
```

r[items.generics.where.intro]
*where 子句*提供了另一种为类型和生命周期参数指定约束的方式，也提供了一种为不是类型参数的类型指定约束的方式。

r[items.generics.where.higher-ranked-lifetimes]
`for` 关键字可用于引入[高阶生命周期](../trait-bounds.md#r-bound.higher-ranked)。它只允许 [LifetimeParam] 参数。

```rust
struct A<T>
where
    T: Iterator,            // 也可以改用 A<T: Iterator>
    T::Item: Copy,          // 关联类型上的约束
    String: PartialEq<T>,   // `String` 上的约束，使用类型参数
    i32: Default,           // 允许，但没有用处
{
    f: T,
}
```

r[items.generics.attributes]
## 属性

泛型生命周期参数和类型参数允许带有[属性](../attributes.md)。没有内建属性会在此位置产生任何作用，不过自定义 derive 属性可以为其赋予意义。

此示例展示如何使用自定义 derive 属性修改泛型参数的含义。

<!-- ignore: requires proc macro derive -->
```rust,ignore
// 假设 MyFlexibleClone 的 derive 将 `my_flexible_clone` 声明为
// 它所理解的属性。
#[derive(MyFlexibleClone)]
struct Foo<#[my_flexible_clone(unbounded)] H> {
    a: *const H
}
```

[array repeat expression]: ../expressions/array-expr.md
[arrays]: ../types/array.md
[slices]: ../types/slice.md
[associated const]: associated-items.md#associated-constants
[associated type]: associated-items.md#associated-types
[attributes]: ../attributes.md
[block]: ../expressions/block-expr.md
[const contexts]: ../const_eval.md#const-context
[const expression]: ../const_eval.md#constant-expressions
[const generic argument]: items.generics.const.argument
[const item]: constant-items.md
[enumerations]: enumerations.md
[functions]: functions.md
[function pointers]: ../types/function-pointer.md
[generic implementations]: implementations.md#generic-implementations
[generic parameter scopes]: ../names/scopes.md#generic-parameter-scopes
[higher-ranked lifetimes]: ../trait-bounds.md#higher-ranked-trait-bounds
[implementations]: implementations.md
[inferred const]: items.generics.const.inferred
[item declarations]: ../statements.md#item-declarations
[item]: ../items.md
[literal]: ../expressions/literal-expr.md
[path]: ../paths.md
[path expression]: ../expressions/path-expr.md
[raw pointers]: ../types/pointer.md#raw-pointers-const-and-mut
[references]: ../types/pointer.md#shared-references-
[structs]: structs.md
[tuples]: ../types/tuple.md
[trait object]: ../types/trait-object.md
[traits]: traits.md
[type aliases]: type-aliases.md
[type]: ../types.md
[unions]: unions.md
[value namespace]: ../names/namespaces.md
