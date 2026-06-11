r[bound]
# Trait 和生命周期约束

r[bound.syntax]
```grammar,miscellaneous
Bounds -> Bound ( `+` Bound )* `+`?

Bound -> Lifetime | TraitBound | UseBound

TraitBound ->
      ( `?` | ForLifetimes )? TypePath
    | `(` ( `?` | ForLifetimes )? TypePath `)`

LifetimeBounds -> ( Lifetime `+` )* Lifetime?

Lifetime ->
      LIFETIME_OR_LABEL
    | `'static`
    | `'_`

UseBound -> `use` UseBoundGenericArgs

UseBoundGenericArgs ->
      `<` `>`
    | `<` ( UseBoundGenericArg `,`)* UseBoundGenericArg `,`? `>`

UseBoundGenericArg ->
      Lifetime
    | IDENTIFIER
    | `Self`
```

r[bound.intro]
[Trait](items/traits.md#trait-bounds) 约束和生命周期约束为[泛型项](items/generics.md)提供了一种方式，用于限制哪些类型和生命周期可用作其参数。约束可以在 [where 子句](items/generics.md#where-clauses)中的任何类型上给出。对于某些常见情况，也有较短的形式：

* 写在声明[泛型形参](items/generics.md)之后的约束：`fn f<A: Copy>() {}` 与 `fn f<A>() where A: Copy {}` 相同。
* 在 trait 声明中作为 [supertrait](items/traits.md#supertraits)：`trait Circle : Shape {}` 等价于 `trait Circle where Self : Shape {}`。
* 在 trait 声明中作为[关联类型](items/associated-items.md#associated-types)上的约束：`trait A { type B: Copy; }` 等价于 `trait A where Self::B: Copy { type B; }`。

r[bound.satisfaction]
使用某个项时，必须满足该项上的约束。在对泛型项进行类型检查和借用检查时，可以使用这些约束来判定某个类型实现了某个 trait。例如，给定 `Ty: Trait`

* 在泛型函数体中，可以在 `Ty` 值上调用来自 `Trait` 的方法。同样，也可以使用 `Trait` 上的关联常量。
* 可以使用来自 `Trait` 的关联类型。
* 带有 `T: Trait` 约束的泛型函数和类型可以在以 `Ty` 作为 `T` 的情况下使用。

```rust
# type Surface = i32;
trait Shape {
    fn draw(&self, surface: Surface);
    fn name() -> &'static str;
}

fn draw_twice<T: Shape>(surface: Surface, sh: T) {
    sh.draw(surface);           // Can call method because T: Shape
    sh.draw(surface);
}

fn copy_and_draw_twice<T: Copy>(surface: Surface, sh: T) where T: Shape {
    let shape_copy = sh;        // doesn't move sh because T: Copy
    draw_twice(surface, sh);    // Can use generic function because T: Shape
}

struct Figure<S: Shape>(S, S);

fn name_figure<U: Shape>(
    figure: Figure<U>,          // Type Figure<U> is well-formed because U: Shape
) {
    println!(
        "Figure of two {}",
        U::name(),              // Can use associated function
    );
}
```

r[bound.trivial]
不使用该项的参数或[高阶生命周期](#higher-ranked-trait-bounds)的约束，会在定义该项时被检查。这样的约束若为假，则是错误。

r[bound.special]
对于某些泛型类型，在使用该项时也会检查 [`Copy`](../core/marker/trait.Copy.html)、[`Clone`](../core/clone/trait.Clone.html) 和 [`Sized`](../core/marker/trait.Sized.html) 约束，即使该使用没有提供具体类型。在可变引用、[trait 对象](types/trait-object.md)或[切片](types/slice.md)上以 `Copy` 或 `Clone` 作为约束是错误。在 trait 对象或切片上以 `Sized` 作为约束也是错误。

```rust,compile_fail
struct A<'a, T>
where
    i32: Default,           // Allowed, but not useful
    i32: Iterator,          // Error: `i32` is not an iterator
    &'a mut T: Copy,        // (at use) Error: the trait bound is not satisfied
    [T]: Sized,             // (at use) Error: size cannot be known at compilation
{
    f: &'a T,
}
struct UsesA<'a, T>(A<'a, T>);
```

r[bound.trait-object]
Trait 约束和生命周期约束也用于命名 [trait 对象](types/trait-object.md)。

r[bound.sized]
## `?Sized`

`?` 只用于放宽[类型形参](types/parameters.md)或[关联类型](items/associated-items.md#associated-types)的隐式 [`Sized`](../core/marker/trait.Sized.html) trait 约束。`?Sized` 不得用作其他类型的约束。

r[bound.lifetime]
## 生命周期约束

r[bound.lifetime.intro]
生命周期约束可以应用于类型，也可以应用于其他生命周期。

r[bound.lifetime.outlive-lifetime]
约束 `'a: 'b` 通常读作 `'a` _outlives_ `'b`。`'a: 'b` 表示 `'a` 至少与 `'b` 一样长，因此只要 `&'b ()` 有效，引用 `&'a ()` 就有效。

```rust
fn f<'a, 'b>(x: &'a i32, mut y: &'b i32) where 'a: 'b {
    y = x;                      // &'a i32 is a subtype of &'b i32 because 'a: 'b
    let r: &'b &'a i32 = &&0;   // &'b &'a i32 is well formed because 'a: 'b
}
```

r[bound.lifetime.outlive-type]
`T: 'a` 表示 `T` 的所有生命周期参数都比 `'a` 活得更久。例如，如果 `'a` 是一个未受约束的生命周期参数，那么 `i32: 'static` 和 `&'static str: 'a` 得到满足，但 `Vec<&'a ()>: 'static` 不满足。

r[bound.higher-ranked]
## 高阶 trait 约束

r[bound.higher-ranked.syntax]
```grammar,miscellaneous
ForLifetimes -> `for` GenericParams
```

r[bound.higher-ranked.intro]
Trait 约束可以在生命周期上是_高阶_的。这些约束指定了对_所有_生命周期都为真的约束。例如，像 `for<'a> &'a T: PartialEq<i32>` 这样的约束会要求有如下实现

```rust
# struct T;
impl<'a> PartialEq<i32> for &'a T {
    // ...
#    fn eq(&self, other: &i32) -> bool {true}
}
```

然后可用于将具有任意生命周期的 `&'a T` 与 `i32` 进行比较。

这里只能使用高阶约束，因为该引用的生命周期短于函数上任何可能的生命周期参数：

```rust
fn call_on_ref_zero<F>(f: F) where for<'a> F: Fn(&'a i32) {
    let zero = 0;
    f(&zero);
}
```

r[bound.higher-ranked.trait]
高阶生命周期也可以正好指定在 trait 之前：唯一的区别是生命周期参数的[作用域](names/scopes.md#higher-ranked-trait-bound-scopes)，它只延伸到后续 trait 的末尾，而不是整个约束的末尾。此函数等价于上一个函数。

```rust
fn call_on_ref_zero<F>(f: F) where F: for<'a> Fn(&'a i32) {
    let zero = 0;
    f(&zero);
}
```

r[bound.implied]
## 隐含约束

r[bound.implied.intro]
类型成为良构类型所需的生命周期约束有时会被推断出来。

```rust
fn requires_t_outlives_a<'a, T>(x: &'a T) {}
```

为了使类型 `&'a T` 成为良构类型，类型参数 `T` 必须比 `'a` 活得更久。这会被推断出来，因为函数签名包含类型 `&'a T`，而该类型只有在 `T: 'a` 成立时才有效。

r[bound.implied.context]
隐含约束会为函数的所有参数和输出添加。在 `requires_t_outlives_a` 内部，即使没有显式指定这一点，也可以假定 `T: 'a` 成立：

```rust
fn requires_t_outlives_a_not_implied<'a, T: 'a>() {}

fn requires_t_outlives_a<'a, T>(x: &'a T) {
    // This compiles, because `T: 'a` is implied by
    // the reference type `&'a T`.
    requires_t_outlives_a_not_implied::<'a, T>();
}
```

```rust,compile_fail,E0309
# fn requires_t_outlives_a_not_implied<'a, T: 'a>() {}
fn not_implied<'a, T>() {
    // This errors, because `T: 'a` is not implied by
    // the function signature.
    requires_t_outlives_a_not_implied::<'a, T>();
}
```

r[bound.implied.trait]
只有生命周期约束会被隐含，trait 约束仍然必须显式添加。因此，下面的示例会导致错误：

```rust,compile_fail,E0277
use std::fmt::Debug;
struct IsDebug<T: Debug>(T);
// error[E0277]：`T` 未实现 `Debug`
fn doesnt_specify_t_debug<T>(x: IsDebug<T>) {}
```

r[bound.implied.def]
也会为类型定义以及任何类型的 impl 块推断生命周期约束：

```rust
struct Struct<'a, T> {
    // This requires `T: 'a` to be well-formed
    // which is inferred by the compiler.
    field: &'a T,
}

enum Enum<'a, T> {
    // This requires `T: 'a` to be well-formed,
    // which is inferred by the compiler.
    //
    // Note that `T: 'a` is required even when only
    // using `Enum::OtherVariant`.
    SomeVariant(&'a T),
    OtherVariant,
}

trait Trait<'a, T: 'a> {}

// This would error because `T: 'a` is not implied by any type
// in the impl header.
//     impl<'a, T> Trait<'a, T> for () {}

// 这可以编译，因为 `T: 'a` 由 self 类型 `&'a T` 隐含。
impl<'a, T> Trait<'a, T> for &'a T {}
```

r[bound.use]
## Use 约束

某些约束列表可以包含 `use<..>` 约束，用于控制哪些泛型参数会被 `impl Trait` [抽象返回类型](types/impl-trait.md#abstract-return-types)捕获。更多细节请参见[精确捕获](types/impl-trait.md#precise-capturing)。

[abstract return type]: types/impl-trait.md#abstract-return-types
[arrays]: types/array.md
[associated types]: items/associated-items.md#associated-types
[hrtb-scopes]: names/scopes.md#higher-ranked-trait-bound-scopes
[supertraits]: items/traits.md#supertraits
[generic]: items/generics.md
[higher-ranked lifetimes]: #higher-ranked-trait-bounds
[precise capturing]: types/impl-trait.md#precise-capturing
[slice]: types/slice.md
[Trait]: items/traits.md#trait-bounds
[trait object]: types/trait-object.md
[trait objects]: types/trait-object.md
[type parameters]: types/parameters.md
[where clause]: items/generics.md#where-clauses
