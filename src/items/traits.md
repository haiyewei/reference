r[items.traits]
# Trait

r[items.traits.syntax]
```grammar,items
Trait ->
    `unsafe`? `trait` IDENTIFIER GenericParams? ( `:` Bounds? )? WhereClause?
    `{`
        InnerAttribute*
        AssociatedItem*
    `}`
```

r[items.traits.intro]
_trait_ 描述类型可以实现的抽象接口。此接口由[关联项](associated-items.md)组成，关联项分为三类：

- [函数](associated-items.md#associated-functions-and-methods)
- [类型](associated-items.md#associated-types)
- [常量](associated-items.md#associated-constants)

r[items.traits.namespace]
trait 声明会在其所在模块或块的[类型命名空间](../names/namespaces.md)中定义一个 trait。

r[items.traits.associated-item-namespaces]
关联项在各自的命名空间中定义为 trait 的成员。关联类型在类型命名空间中定义。关联常量和关联函数在值命名空间中定义。

r[items.traits.self-param]
所有 trait 都定义一个隐式类型参数 `Self`，它指代“正在实现此接口的类型”。trait 也可以包含额外的类型参数。这些类型参数（包括 `Self`）可以[像通常那样](generics.md)受其他 trait 等约束。

r[items.traits.impls]
trait 通过单独的[实现](implementations.md)为特定类型实现。

r[items.traits.associated-item-decls]
trait 函数可以通过用分号替代函数体来省略函数体。这表示实现必须定义该函数。如果 trait 函数定义了函数体，则该定义会作为任何未覆盖它的实现的默认定义。类似地，关联常量可以省略等号和表达式，以表示实现必须定义该常量值。关联类型绝不能定义类型；类型只能在实现中指定。

```rust
// 带定义和不带定义的关联 trait 项示例。
trait Example {
    const CONST_NO_DEFAULT: i32;
    const CONST_WITH_DEFAULT: i32 = 99;
    type TypeNoDefault;
    fn method_without_default(&self);
    fn method_with_default(&self) {}
}
```

r[items.traits.const-fn]
trait 函数不得是 [`const`](functions.md#const-functions)。

r[items.traits.bounds]
## trait 约束

泛型项可以将 trait 用作其类型参数上的[约束](../trait-bounds.md)。

r[items.traits.generic]
## 泛型 trait

可以为 trait 指定类型参数，使其成为泛型。它们出现在 trait 名称之后，使用与[泛型函数](functions.md#generic-functions)相同的语法。

```rust
trait Seq<T> {
    fn len(&self) -> u32;
    fn elt_at(&self, n: u32) -> T;
    fn iter<F>(&self, f: F) where F: Fn(T);
}
```

<a id="object-safety"></a>
r[items.traits.dyn-compatible]
## dyn 兼容性

r[items.traits.dyn-compatible.intro]
dyn 兼容 trait 可以作为 [trait 对象](../types/trait-object.md)的基础 trait。如果 trait 具有以下性质，则它是 *dyn 兼容* 的：

r[items.traits.dyn-compatible.supertraits]
* 所有 [supertrait](#supertraits) 也必须是 dyn 兼容的。

r[items.traits.dyn-compatible.sized]
* `Sized` 不得是 [supertrait](#supertraits)。换言之，它不得要求 `Self: Sized`。

r[items.traits.dyn-compatible.associated-consts]
* 它不得有任何关联常量。

r[items.traits.dyn-compatible.associated-types]
* 它不得有任何带泛型的关联类型。

r[items.traits.dyn-compatible.associated-functions]
* 所有关联函数必须要么可从 trait 对象分派，要么显式不可分派：
    * 可分派函数必须：
        * 没有任何类型参数（但允许生命周期参数）。
        * 是一个[方法](associated-items.md#methods)，并且除了在接收者类型中之外不使用 `Self`。
        * 具有以下类型之一的接收者：
            * `&Self`（即 `&self`）
            * `&mut Self`（即 `&mut self`）
            * [`Box<Self>`]
            * [`Rc<Self>`]
            * [`Arc<Self>`]
            * [`Pin<P>`](../special-types-and-traits.md#pinp)，其中 `P` 是上述类型之一
        * 没有不透明返回类型；也就是说，
            * 不是 `async fn`（它有隐藏的 `Future` 类型）。
            * 没有返回位置 `impl Trait` 类型（`fn example(&self) -> impl Trait`）。
        * 没有 `where Self: Sized` 约束（类型为 `Self` 的接收者（即 `self`）会隐含此约束）。
    * 显式不可分派函数要求：
        * 具有 `where Self: Sized` 约束（类型为 `Self` 的接收者（即 `self`）会隐含此约束）。

r[items.traits.dyn-compatible.async-traits]
* [`AsyncFn`]、[`AsyncFnMut`] 和 [`AsyncFnOnce`] trait 不是 dyn 兼容的。

> [!NOTE]
> 此概念以前称为 _object safety_。

```rust
# use std::rc::Rc;
# use std::sync::Arc;
# use std::pin::Pin;
// dyn 兼容方法示例。
trait TraitMethods {
    fn by_ref(self: &Self) {}
    fn by_ref_mut(self: &mut Self) {}
    fn by_box(self: Box<Self>) {}
    fn by_rc(self: Rc<Self>) {}
    fn by_arc(self: Arc<Self>) {}
    fn by_pin(self: Pin<&Self>) {}
    fn with_lifetime<'a>(self: &'a Self) {}
    fn nested_pin(self: Pin<Arc<Self>>) {}
}
# struct S;
# impl TraitMethods for S {}
# let t: Box<dyn TraitMethods> = Box::new(S);
```

```rust,compile_fail
// 此 trait 是 dyn 兼容的，但这些方法不能在 trait 对象上分派。
trait NonDispatchable {
    // 非方法不能分派。
    fn foo() where Self: Sized {}
    // Self 类型直到运行时才可知。
    fn returns(&self) -> Self where Self: Sized;
    // `other` 可能是与接收者不同的具体类型。
    fn param(&self, other: Self) where Self: Sized {}
    // 泛型与 vtable 不兼容。
    fn typed<T>(&self, x: T) where Self: Sized {}
}

struct S;
impl NonDispatchable for S {
    fn returns(&self) -> Self where Self: Sized { S }
}
let obj: Box<dyn NonDispatchable> = Box::new(S);
obj.returns(); // 错误：不能以 Self 作为返回类型调用
obj.param(S);  // 错误：不能以 Self 作为参数调用
obj.typed(1);  // 错误：不能以泛型类型调用
```

```rust,compile_fail
# use std::rc::Rc;
// dyn 不兼容 trait 示例。
trait DynIncompatible {
    const CONST: i32 = 1;  // 错误：不能有关联 const

    fn foo() {}  // 错误：没有 Sized 的关联函数
    fn returns(&self) -> Self; // 错误：返回类型中有 Self
    fn typed<T>(&self, x: T) {} // 错误：具有泛型类型参数
    fn nested(self: Rc<Box<Self>>) {} // 错误：不能在嵌套接收者上分派
}

struct S;
impl DynIncompatible for S {
    fn returns(&self) -> Self { S }
}
let obj: Box<dyn DynIncompatible> = Box::new(S); // 错误
```

```rust,compile_fail
// `Self: Sized` trait 是 dyn 不兼容的。
trait TraitWithSize where Self: Sized {}

struct S;
impl TraitWithSize for S {}
let obj: Box<dyn TraitWithSize> = Box::new(S); // 错误
```

```rust,compile_fail
// 如果 `Self` 是类型实参，则 dyn 不兼容。
trait Super<A> {}
trait WithSelf: Super<Self> where Self: Sized {}

struct S;
impl<A> Super<A> for S {}
impl WithSelf for S {}
let obj: Box<dyn WithSelf> = Box::new(S); // 错误：不能使用 `Self` 类型参数
```

r[items.traits.supertraits]
## Supertrait

r[items.traits.supertraits.intro]
**Supertrait** 是某个类型若要实现特定 trait 就必须实现的 trait。此外，任何受某个 trait 约束的[泛型](generics.md)或 [trait 对象](../types/trait-object.md)，都可以访问该 trait 的 supertrait 的关联项。

r[items.traits.supertraits.decl]
Supertrait 通过 trait 的 `Self` 类型上的 trait 约束声明，并且还传递地包括这些 trait 约束中所声明 trait 的 supertrait。trait 不能成为它自己的 supertrait，否则是错误。

r[items.traits.supertraits.subtrait]
带有 supertrait 的 trait 称为其 supertrait 的 **subtrait**。

下面的示例将 `Shape` 声明为 `Circle` 的 supertrait。

```rust
trait Shape { fn area(&self) -> f64; }
trait Circle: Shape { fn radius(&self) -> f64; }
```

下面是相同示例，不过使用 [where 子句](generics.md#where-clauses)。

```rust
trait Shape { fn area(&self) -> f64; }
trait Circle where Self: Shape { fn radius(&self) -> f64; }
```

下一个示例使用来自 `Shape` 的 `area` 函数为 `radius` 提供默认实现。

```rust
# trait Shape { fn area(&self) -> f64; }
trait Circle where Self: Shape {
    fn radius(&self) -> f64 {
        // A = pi * r^2
        // 因此按代数变换，
        // r = sqrt(A / pi)
        (self.area() / std::f64::consts::PI).sqrt()
    }
}
```

下一个示例在泛型参数上调用 supertrait 方法。

```rust
# trait Shape { fn area(&self) -> f64; }
# trait Circle: Shape { fn radius(&self) -> f64; }
fn print_area_and_radius<C: Circle>(c: C) {
    // 这里调用 `Circle` 的 supertrait `Shape` 中的 area 方法。
    println!("Area: {}", c.area());
    println!("Radius: {}", c.radius());
}
```

类似地，这里是一个在 trait 对象上调用 supertrait 方法的示例。

```rust
# trait Shape { fn area(&self) -> f64; }
# trait Circle: Shape { fn radius(&self) -> f64; }
# struct UnitCircle;
# impl Shape for UnitCircle { fn area(&self) -> f64 { std::f64::consts::PI } }
# impl Circle for UnitCircle { fn radius(&self) -> f64 { 1.0 } }
# let circle = UnitCircle;
let circle = Box::new(circle) as Box<dyn Circle>;
let nonsense = circle.radius() * circle.area();
```

r[items.traits.safety]
## Unsafe trait

r[items.traits.safety.intro]
以 `unsafe` 关键字开头的 trait 项表示*实现*该 trait 可能是[不安全](../unsafety.md)的。使用正确实现的 unsafe trait 是安全的。[trait 实现](implementations.md#trait-implementations)也必须以 `unsafe` 关键字开头。

[`Sync`](../special-types-and-traits.md#sync) 和 [`Send`](../special-types-and-traits.md#send) 是 unsafe trait 的示例。

r[items.traits.params]
## 参数模式

r[items.traits.params.patterns-no-body]
没有函数体的关联函数中的参数只允许 [IDENTIFIER] 或 `_` [通配符](../patterns.md#wildcard-pattern)模式，以及 [SelfParam] 所允许的形式。当前允许 `mut` [IDENTIFIER]，但它已弃用，并将在未来成为硬错误。
<!-- https://github.com/rust-lang/rust/issues/35203 -->

```rust
trait T {
    fn f1(&self);
    fn f2(x: Self, _: i32);
}
```

```rust,compile_fail,E0642
trait T {
    fn f2(&x: &i32); // 错误：无函数体的函数中不允许使用模式
}
```

r[items.traits.params.patterns-with-body]
带有函数体的关联函数中的参数只允许不可反驳模式。

```rust
trait T {
    fn f1((a, b): (i32, i32)) {} // OK：不可反驳
}
```

```rust,compile_fail,E0005
trait T {
    fn f1(123: i32) {} // 错误：模式可反驳
    fn f2(Some(x): Option<i32>) {} // 错误：模式可反驳
}
```

r[items.traits.params.pattern-required.edition2018]
> [!EDITION-2018]
> 在 2018 edition 之前，关联函数参数的模式是可选的：
>
> ```rust,edition2015
> // 2015 版
> trait T {
>     fn f(i32); // OK：不要求参数标识符
> }
> ```
>
> 从 2018 edition 开始，模式不再是可选的。

r[items.traits.params.restriction-patterns.edition2018]
> [!EDITION-2018]
> 在 2018 edition 之前，带有函数体的关联函数中的参数仅限于以下种类的模式：
>
> * [IDENTIFIER]
> * `mut` [IDENTIFIER]
> * [`_`][WildcardPattern]
> * `&` [IDENTIFIER]
> * `&&` [IDENTIFIER]
>
> ```rust,edition2015,compile_fail,E0642
> // 2015 版
> trait T {
>     fn f1((a, b): (i32, i32)) {} // 错误：不允许使用模式
> }
> ```
>
> 从 2018 开始，允许 [items.traits.params.patterns-with-body] 中所述的所有不可反驳模式。

r[items.traits.associated-visibility]
## 项可见性

r[items.traits.associated-visibility.intro]
trait 项在语法上允许使用 [Visibility] 注解，但在验证 trait 时会拒绝这种注解。这允许在不同使用上下文中用统一语法解析项。例如，可以对 trait 项使用空的 `vis` 宏片段说明符，而该宏规则还可以用于其他允许可见性的场景。

```rust
macro_rules! create_method {
    ($vis:vis $name:ident) => {
        $vis fn $name(&self) {}
    };
}

trait T1 {
    // 允许空的 `vis`。
    create_method! { method_of_t1 }
}

struct S;

impl S {
    // 这里允许可见性。
    create_method! { pub method_of_s }
}

impl T1 for S {}

fn main() {
    let s = S;
    s.method_of_t1();
    s.method_of_s();
}
```

[WildcardPattern]: ../patterns.md#wildcard-pattern
[bounds]: ../trait-bounds.md
[trait object]: ../types/trait-object.md
[associated items]: associated-items.md
[method]: associated-items.md#methods
[supertraits]: #supertraits
[implementations]: implementations.md
[generics]: generics.md
[where clauses]: generics.md#where-clauses
[generic functions]: functions.md#generic-functions
[unsafe]: ../unsafety.md
[trait implementation]: implementations.md#trait-implementations
[`Send`]: ../special-types-and-traits.md#send
[`Sync`]: ../special-types-and-traits.md#sync
[`Arc<Self>`]: ../special-types-and-traits.md#arct
[`Box<Self>`]: ../special-types-and-traits.md#boxt
[`Pin<P>`]: ../special-types-and-traits.md#pinp
[`Rc<Self>`]: ../special-types-and-traits.md#rct
[`async`]: functions.md#async-functions
[`const`]: functions.md#const-functions
[type namespace]: ../names/namespaces.md
