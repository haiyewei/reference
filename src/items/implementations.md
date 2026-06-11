r[items.impl]
# 实现

r[items.impl.syntax]
```grammar,items
Implementation -> InherentImpl | TraitImpl

InherentImpl ->
    `impl` GenericParams? Type WhereClause? `{`
        InnerAttribute*
        AssociatedItem*
    `}`

TraitImpl ->
    `unsafe`? `impl` GenericParams? `!`? TypePath `for` Type
    WhereClause?
    `{`
        InnerAttribute*
        AssociatedItem*
    `}`
```

r[items.impl.intro]
_实现_是将项与_实现类型_关联起来的项。实现使用关键字 `impl` 定义，并包含属于被实现类型的某个实例或静态属于该类型的函数。

r[items.impl.kinds]
实现分为两类：

- 固有实现
- [trait](traits.md) 实现

r[items.impl.inherent]
## 固有实现

r[items.impl.inherent.intro]
固有实现被定义为依次由 `impl` 关键字、泛型类型声明、到名义类型的路径、where 子句以及一组用花括号括起的可关联项组成。

r[items.impl.inherent.implementing-type]
该名义类型称为_实现类型_，可关联项是该实现类型的_关联项_。

r[items.impl.inherent.associated-items]
固有实现将所包含的项关联到实现类型。

r[items.impl.inherent.associated-items.allowed-items]
固有实现可以包含[关联函数](associated-items.md#associated-functions-and-methods)（包括[方法](associated-items.md#methods)）和[关联常量](associated-items.md#associated-constants)。

r[items.impl.inherent.type-alias]
它们不能包含关联类型别名。

r[items.impl.inherent.associated-item-path]
到关联项的[路径](../paths.md)是到实现类型的任意路径，后跟作为最终路径组件的关联项标识符。

r[items.impl.inherent.coherence]
一个类型也可以有多个固有实现。实现类型必须与原始类型定义在同一 crate 内定义。

``` rust
pub mod color {
    pub struct Color(pub u8, pub u8, pub u8);

    impl Color {
        pub const WHITE: Color = Color(255, 255, 255);
    }
}

mod values {
    use super::color::Color;
    impl Color {
        pub fn red() -> Color {
            Color(255, 0, 0)
        }
    }
}

pub use self::color::Color;
fn main() {
    // 到同一模块中实现类型和 impl 的实际路径。
    color::Color::WHITE;

    // 不同模块中的 impl 块仍然通过到该类型的路径访问。
    color::Color::red();

    // 到实现类型的重导出路径也可用。
    Color::red();

    // Does not work, because use in `values` is not pub.
    // values::Color::red();
}
```

r[items.impl.trait]
## trait 实现

r[items.impl.trait.intro]
_trait 实现_的定义方式类似于固有实现，不同之处在于可选的泛型类型声明后面跟着一个 [trait](traits.md)，再跟关键字 `for`，再跟到名义类型的路径。

<!-- To understand this, you have to back-reference to the previous section. :( -->

r[items.impl.trait.implemented-trait]
该 trait 称为_被实现 trait_。实现类型实现该被实现 trait。

r[items.impl.trait.def-requirement]
trait 实现必须定义由被实现 trait 声明的所有非默认关联项，可以重新定义由被实现 trait 定义的默认关联项，并且不能定义任何其他项。

r[items.impl.trait.associated-item-path]
到关联项的路径是 `<`，后跟到实现类型的路径，再跟 `as`，再跟到 trait 的路径，再跟作为路径组件的 `>`，最后跟关联项的路径组件。

r[items.impl.trait.safety]
[Unsafe traits](traits.md#unsafe-traits) 要求 trait 实现以 `unsafe` 关键字开头。

```rust
# #[derive(Copy, Clone)]
# struct Point {x: f64, y: f64};
# type Surface = i32;
# struct BoundingBox {x: f64, y: f64, width: f64, height: f64};
# trait Shape { fn draw(&self, s: Surface); fn bounding_box(&self) -> BoundingBox; }
# fn do_draw_circle(s: Surface, c: Circle) { }
struct Circle {
    radius: f64,
    center: Point,
}

impl Copy for Circle {}

impl Clone for Circle {
    fn clone(&self) -> Circle { *self }
}

impl Shape for Circle {
    fn draw(&self, s: Surface) { do_draw_circle(s, *self); }
    fn bounding_box(&self) -> BoundingBox {
        let r = self.radius;
        BoundingBox {
            x: self.center.x - r,
            y: self.center.y - r,
            width: 2.0 * r,
            height: 2.0 * r,
        }
    }
}
```

r[items.impl.trait.coherence]
### trait 实现一致性

r[items.impl.trait.coherence.intro]
如果孤儿规则检查失败，或者存在重叠的实现实例，则认为 trait 实现是不一致的。

r[items.impl.trait.coherence.overlapping]
当两个 trait 实现所针对的 trait 存在非空交集，并且这些实现可以用同一类型实例化时，这两个 trait 实现重叠。 <!-- This is probably wrong? Source: No two implementations can be instantiable with the same set of types for the input type parameters. -->

r[items.impl.trait.orphan-rule]
#### 孤儿规则

r[items.impl.trait.orphan-rule.intro]
_孤儿规则_规定，只有当 trait 或实现中的至少一个类型在当前 crate 中定义时，才允许 trait 实现。它可以防止不同 crate 之间发生冲突的 trait 实现，是确保一致性的关键。

孤儿实现是指为外部类型实现外部 trait 的实现。如果自由允许这些实现，两个 crate 就可以用不兼容的方式为同一类型实现同一 trait，从而造成这样一种情况：添加或更新依赖可能因实现冲突而破坏编译。

孤儿规则使库作者能够向自己的 trait 添加新实现，而不必担心破坏下游代码。没有这些限制，库就无法添加像 `impl<T: Display> MyTrait for T` 这样的实现，因为它可能与下游实现冲突。

r[items.impl.trait.orphan-rule.def]
给定 `impl<P1..=Pn> Trait<T1..=Tn> for T0`，只有至少满足以下条件之一时，`impl` 才有效：

- `Trait` 是[本地 trait](../glossary.md#local-trait)
- 全部满足
  - 类型 `T0..=Tn` 中必须至少有一个是[本地类型](../glossary.md#local-type)。令 `Ti` 为第一个这样的类型。
  - 不得有[未覆盖类型](../glossary.md#uncovered-type)参数 `P1..=Pn` 出现在 `T0..Ti` 中（不包括 `Ti`）

r[items.impl.trait.uncovered-param]
只限制_未覆盖_类型参数的出现。

r[items.impl.trait.fundamental]
注意，出于一致性的目的，[基本类型](../glossary.md#fundamental-type-constructors)是特殊的。`Box<T>` 中的 `T` 不被视为已覆盖，而 `Box<LocalType>` 被视为本地的。

r[items.impl.generics]
## 泛型实现

r[items.impl.generics.intro]
实现可以接受[泛型参数](generics.md)，这些参数可以在实现的其余部分中使用。实现参数直接写在 `impl` 关键字之后。

```rust
# trait Seq<T> { fn dummy(&self, _: T) { } }
impl<T> Seq<T> for Vec<T> {
    /* ... */
}
impl Seq<bool> for u32 {
    /* 将整数视为位序列 */
}
```

r[items.impl.generics.use]
如果参数至少在以下任一位置出现一次，则泛型参数_约束_一个实现：

* 被实现的 trait（如果有）
* 实现类型
* 作为某个类型的[约束](../trait-bounds.md)中的[关联类型](associated-items.md#associated-types)，且该类型包含另一个约束该实现的参数

r[items.impl.generics.constrain]
类型参数和 const 参数必须始终约束该实现。如果生命周期用于关联类型中，则生命周期必须约束该实现。

约束情况示例：

```rust
# trait Trait{}
# trait GenericTrait<T> {}
# trait HasAssocType { type Ty; }
# struct Struct;
# struct GenericStruct<T>(T);
# struct ConstGenericStruct<const N: usize>([(); N]);
// T 通过作为 GenericTrait 的实参来形成约束。
impl<T> GenericTrait<T> for i32 { /* ... */ }

// T 通过作为 GenericStruct 的实参来形成约束
impl<T> Trait for GenericStruct<T> { /* ... */ }

// 同样，N 通过作为 ConstGenericStruct 的实参来形成约束
impl<const N: usize> Trait for ConstGenericStruct<N> { /* ... */ }

// T constrains by being in an associated type in a bound for type `U` which is
// itself a generic parameter constraining the trait.
impl<T, U> GenericTrait<U> for u32 where U: HasAssocType<Ty = T> { /* ... */ }

// Like previous, except the type is `(U, isize)`. `U` appears inside the type
// that includes `T`, and is not the type itself.
impl<T, U> GenericStruct<U> where (U, isize): HasAssocType<Ty = T> { /* ... */ }
```

非约束情况示例：

```rust,compile_fail
// The rest of these are errors, since they have type or const parameters that
// do not constrain.

// T 不形成约束，因为它完全没有出现。
impl<T> Struct { /* ... */ }

// N 因同样原因不形成约束。
impl<const N: usize> Struct { /* ... */ }

// 在实现内部使用 T 不会约束该 impl。
impl<T> Struct {
    fn uses_t(t: &T) { /* ... */ }
}

// T 被用作 U 的约束中的关联类型，但 U 不形成约束。
impl<T, U> Struct where U: HasAssocType<Ty = T> { /* ... */ }

// T 用在约束中，但不是作为关联类型使用，因此它不形成约束。
impl<T, U> GenericTrait<U> for u32 where U: GenericTrait<T> {}
```

允许的不形成约束的生命周期参数示例：

```rust
# struct Struct;
impl<'a> Struct {}
```

不允许的不形成约束的生命周期参数示例：

```rust,compile_fail
# struct Struct;
# trait HasAssocType { type Ty; }
impl<'a> HasAssocType for Struct {
    type Ty = &'a Struct;
}
```

r[items.impl.attributes]
## 实现上的属性

实现可以在 `impl` 关键字之前包含外部[属性](../attributes.md)，并在包含关联项的花括号内部包含内部[属性](../attributes.md)。内部属性必须位于任何关联项之前。在此处有意义的属性是 [`cfg`](../conditional-compilation.md)、[`deprecated`](../attributes/diagnostics.md#the-deprecated-attribute)、[`doc`](../../rustdoc/the-doc-attribute.html) 和 [lint 检查属性](../attributes/diagnostics.md#lint-check-attributes)。

[trait]: traits.md
[associated constants]: associated-items.md#associated-constants
[associated functions]: associated-items.md#associated-functions-and-methods
[associated type]: associated-items.md#associated-types
[attributes]: ../attributes.md
[bounds]: ../trait-bounds.md
[`cfg`]: ../conditional-compilation.md
[`deprecated`]: ../attributes/diagnostics.md#the-deprecated-attribute
[`doc`]: ../../rustdoc/the-doc-attribute.html
[generic parameters]: generics.md
[methods]: associated-items.md#methods
[path]: ../paths.md
[the lint check attributes]: ../attributes/diagnostics.md#lint-check-attributes
[Unsafe traits]: traits.md#unsafe-traits
[local trait]: ../glossary.md#local-trait
[local type]: ../glossary.md#local-type
[fundamental types]: ../glossary.md#fundamental-type-constructors
[uncovered type]: ../glossary.md#uncovered-type
