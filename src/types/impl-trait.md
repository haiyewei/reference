r[type.impl-trait]
# impl Trait

r[type.impl-trait.syntax]
```grammar,types
ImplTraitType -> `impl` Bounds

ImplTraitTypeOneBound -> `impl` TraitBound
```

r[type.impl-trait.intro]
`impl Trait` 提供了指定未命名但具体、且实现某个特定 trait 的类型的方式。它可以出现在两类位置：实参位置（此时它可以充当函数的匿名类型形参）和返回位置（此时它可以充当抽象返回类型）。

```rust
trait Trait {}
# impl Trait for () {}

// 实参位置：匿名类型形参
fn foo(arg: impl Trait) {
}

// 返回位置：抽象返回类型
fn bar() -> impl Trait {
}
```
r[type.impl-trait.param]
## 匿名类型形参

> [!NOTE]
> 这通常称为“实参位置中的 impl Trait”。（这里使用“形参”这个术语更准确，但“实参位置中的 impl Trait”是此特性开发期间使用的表述，并且仍保留在部分实现中。）

r[type.impl-trait.param.intro]
函数可以使用 `impl` 后跟一组 trait 约束，将一个形参声明为具有匿名类型。调用者必须提供满足该匿名类型形参所声明约束的类型，而函数只能使用通过该匿名类型形参的 trait 约束可用的方法。

例如，这两种形式几乎等价：

```rust
trait Trait {}

// 泛型类型形参
fn with_generic_type<T: Trait>(arg: T) {
}

// 实参位置中的 impl Trait
fn with_impl_trait(arg: impl Trait) {
}
```

r[type.impl-trait.param.generic]
也就是说，实参位置中的 `impl Trait` 是类似 `<T: Trait>` 的泛型类型形参的语法糖，只不过该类型是匿名的，并且不会出现在 [GenericParams] 列表中。

> [!NOTE]
> 对于函数形参，泛型类型形参和 `impl Trait` 并不完全等价。对于像 `<T: Trait>` 这样的泛型形参，调用者可以选择在调用点使用 [GenericArgs] 显式指定 `T` 的泛型实参，例如 `foo::<usize>(1)`。将一个形参从其中一种形式改为另一种形式，可能构成对函数调用者的破坏性变更，因为这会改变泛型实参的数量。

r[type.impl-trait.return]
## 抽象返回类型

> [!NOTE]
> 这通常称为“返回位置中的 impl Trait”。

r[type.impl-trait.return.intro]
函数可以使用 `impl Trait` 来返回抽象返回类型。这些类型代表另一个具体类型，而调用者只能使用由指定 `Trait` 声明的方法。

r[type.impl-trait.return.constraint-body]
函数中每一个可能的返回值都必须解析为同一个具体类型。

返回位置中的 `impl Trait` 允许函数返回未装箱的抽象类型。这对[闭包](closure.md)和迭代器特别有用。例如，闭包具有唯一且无法写出的类型。以前，从函数返回闭包的唯一方式是使用 [trait 对象](trait-object.md)：

```rust
fn returns_closure() -> Box<dyn Fn(i32) -> i32> {
    Box::new(|x| x + 1)
}
```

这可能因堆分配和动态分派而带来性能损耗。以前无法完整指定闭包的类型，只能使用 `Fn` trait。这意味着 trait 对象是必要的。然而，使用 `impl Trait` 可以更简单地写成：

```rust
fn returns_closure() -> impl Fn(i32) -> i32 {
    |x| x + 1
}
```

这也避免了使用装箱 trait 对象的缺点。

类似地，迭代器的具体类型可能变得非常复杂，包含链中所有先前迭代器的类型。返回 `impl Iterator` 意味着函数只在其返回类型上暴露 `Iterator` trait 作为约束，而不是显式指定所涉及的所有其他迭代器类型。

r[type.impl-trait.return-in-trait]
## trait 和 trait 实现中的返回位置 `impl Trait`

r[type.impl-trait.return-in-trait.intro]
trait 中的函数也可以使用 `impl Trait` 作为匿名关联类型的语法。

r[type.impl-trait.return-in-trait.desugaring]
trait 中关联函数返回类型里的每个 `impl Trait` 都会被脱糖为一个匿名关联类型。实现的函数签名中出现的返回类型用于确定该关联类型的值。

r[type.impl-trait.generic-captures]
## 捕获

每个返回位置 `impl Trait` 抽象类型背后都有某个隐藏的具体类型。要让这个具体类型使用某个泛型形参，该泛型形参必须被该抽象类型 *捕获*。

r[type.impl-trait.generic-capture.auto]
## 自动捕获

r[type.impl-trait.generic-capture.auto.intro]
返回位置 `impl Trait` 抽象类型会自动捕获所有作用域内泛型形参，包括泛型类型、const 和生命周期形参（包括高阶生命周期形参）。

r[type.impl-trait.generic-capture.edition2024]
> [!EDITION-2024]
> 在 2024 edition 之前，对于自由函数以及固有 impl 的关联函数和方法，未出现在抽象返回类型约束中的泛型生命周期形参不会被自动捕获。

r[type.impl-trait.generic-capture.precise]
## 精确捕获

r[type.impl-trait.generic-capture.precise.use]
返回位置 `impl Trait` 抽象类型所捕获的泛型形参集合，可以通过 [`use<..>` 约束](../trait-bounds.md#r-bound.use)显式控制。如果存在该约束，则只有列在 `use<..>` 约束中的泛型形参会被捕获。例如：

```rust
fn capture<'a, 'b, T>(x: &'a (), y: T) -> impl Sized + use<'a, T> {
  //                                      ~~~~~~~~~~~~~~~~~~~~~~~
  //                                     只捕获 `'a` 和 `T`。
  (x, y)
}
```

r[type.impl-trait.generic-capture.precise.constraint-single]
目前，一个约束列表中最多只能出现一个 `use<..>` 约束，必须包含所有作用域内类型和 const 泛型形参，并且必须包含所有出现在该抽象类型其他约束中的生命周期形参。

r[type.impl-trait.generic-capture.precise.constraint-lifetime]
在 `use<..>` 约束内，任何出现的生命周期形参都必须位于所有类型和 const 泛型形参之前；如果省略生命周期 (`'_`) 原本允许出现在 `impl Trait` 返回类型内，那么它可以出现。

r[type.impl-trait.generic-capture.precise.constraint-param-impl-trait]
由于所有作用域内类型形参都必须按名称包含，`use<..>` 约束不得用于使用实参位置 `impl Trait` 的项的签名中，因为这些项的作用域内有匿名类型形参。

r[type.impl-trait.generic-capture.precise.constraint-in-trait]
trait 定义中的关联函数里出现的任何 `use<..>` 约束，都必须包含该 trait 的所有泛型形参，包括该 trait 隐式的 `Self` 泛型类型形参。

## 返回位置中泛型与 `impl Trait` 的差异

在实参位置，`impl Trait` 在语义上非常类似于泛型类型形参。然而，二者在返回位置中存在显著差异。使用 `impl Trait` 时，与使用泛型类型形参不同，函数会选择返回类型，而调用者不能选择返回类型。

函数：

```rust
# trait Trait {}
fn foo<T: Trait>() -> T {
    // ...
# panic!()
}
```

允许调用者确定返回类型 `T`，并且该函数返回该类型。

函数：

```rust
# trait Trait {}
# impl Trait for () {}
fn foo() -> impl Trait {
    // ...
}
```

不允许调用者确定返回类型。相反，该函数会选择返回类型，但只承诺它会实现 `Trait`。

r[type.impl-trait.constraint]
## 限制

`impl Trait` 只能作为非 `extern` 函数的形参或返回类型出现。它不能作为 `let` 绑定的类型、字段类型，也不能出现在类型别名内部。

[`use<..>` bound]: ../trait-bounds.md#use-bounds
[closures]: closure.md
[trait object]: trait-object.md
