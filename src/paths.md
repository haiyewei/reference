r[paths]
# 路径

r[paths.intro]
*路径* 是由一个或多个路径段组成的序列，路径段之间由 `::` token 分隔。路径用于引用[项](items.md)、值、[类型](types.md)、[宏](macros.md)和[属性](attributes.md)。

两个仅由标识符段组成的简单路径示例：

<!-- ignore: syntax fragment -->
```rust,ignore
x;
x::y::z;
```

## 路径的类型

r[paths.simple]
### 简单路径

r[paths.simple.syntax]
```grammar,paths
SimplePath ->
    `::`? SimplePathSegment (`::` SimplePathSegment)*

SimplePathSegment ->
    IDENTIFIER | `super` | `self` | `crate` | `$crate`
```

r[paths.simple.intro]
简单路径用于[可见性](visibility-and-privacy.md)标记、[属性](attributes.md)、[宏](macros-by-example.md)和 [`use`](items/use-declarations.md) 项。例如：

```rust
use std::io::{self, Write};
mod m {
    #[clippy::cyclomatic_complexity = "0"]
    pub (in super) fn f1() {}
}
```

r[paths.expr]
### 表达式中的路径

r[paths.expr.syntax]
```grammar,paths
PathInExpression ->
    `::`? PathExprSegment (`::` PathExprSegment)*

PathExprSegment ->
    PathIdentSegment (`::` GenericArgs)?

PathIdentSegment ->
    IDENTIFIER | `super` | `self` | `Self` | `crate` | `$crate`

GenericArgs ->
      `<` GenericArgList? `>`
    | `(` TypeList? `)` (`->` TypeNoBounds)?

GenericArgList ->
    ( GenericArg `,` )* GenericArg `,`?

TypeList ->
    ( Type `,` )* Type `,`?

GenericArg ->
    Lifetime | Type | GenericArgsConst | GenericArgsBinding | GenericArgsBounds

GenericArgsConst ->
      BlockExpression
    | LiteralExpression
    | `-` LiteralExpression
    | SimplePathSegment

GenericArgsBinding ->
    TypePathSegment `=` Type

GenericArgsBounds ->
    TypePathSegment `:` Bounds
```

r[paths.expr.intro]
表达式中的路径允许指定带有泛型实参的路径。它们用于[表达式](expressions.md)和[模式](patterns.md)中的多种位置。

r[paths.expr.turbofish]
为避免与小于运算符产生歧义，泛型实参的开头 `<` 前必须有 `::` token。这通常称为 “turbofish” 语法。

```rust
(0..10).collect::<Vec<_>>();
Vec::<u8>::with_capacity(1024);
```

r[paths.expr.argument-order]
泛型实参的顺序限定为：先是生命周期实参，然后是类型实参，然后是 const 实参，最后是等式约束。

r[paths.expr.complex-const-params]
const 实参必须用花括号括起来，除非它们是[字面量](expressions/literal-expr.md)、[推断 const](items.generics.const.inferred)或单段路径。[推断 const](items.generics.const.inferred) 不能用花括号括起来。

```rust
mod m {
    pub const C: usize = 1;
}
const C: usize = m::C;
fn f<const N: usize>() -> [u8; N] { [0; N] }

let _ = f::<1>(); // 字面量。
let _: [_; 1] = f::<_>(); // 推断 const。
let _: [_; 1] = f::<(((_)))>(); // 推断 const。
let _ = f::<C>(); // 单段路径。
let _ = f::<{ m::C }>(); // 多段路径必须用花括号括起。
```

```rust,compile_fail
fn f<const N: usize>() -> [u8; N] { [0; _] }
let _: [_; 1] = f::<{ _ }>();
//                    ^ 错误：这里不允许 `_`
```

> [!NOTE]
> 在泛型实参列表中，[推断 const](items.generics.const.inferred) 会被解析为[推断类型][InferredType]，但随后在语义上被视为一种单独的 [const 泛型实参](items.generics.const.argument)。

r[paths.expr.impl-trait-params]
与 `impl Trait` 类型对应的合成类型参数是隐式的，不能显式指定这些参数。

r[paths.qualified]
## 限定路径

r[paths.qualified.syntax]
```grammar,paths
QualifiedPathInExpression -> QualifiedPathType (`::` PathExprSegment)+

QualifiedPathType -> `<` Type (`as` TypePath)? `>`

QualifiedPathInType -> QualifiedPathType (`::` TypePathSegment)+
```

r[paths.qualified.intro]
完全限定路径可用于消除[trait 实现](items/implementations.md#trait-implementations)中路径的歧义，并用于指定[规范路径](#canonical-paths)。当用于类型说明时，它支持使用下面指定的类型语法。

```rust
struct S;
impl S {
    fn f() { println!("S"); }
}
trait T1 {
    fn f() { println!("T1 f"); }
}
impl T1 for S {}
trait T2 {
    fn f() { println!("T2 f"); }
}
impl T2 for S {}
S::f();  // 调用固有 impl。
<S as T1>::f();  // 调用 T1 trait 函数。
<S as T2>::f();  // 调用 T2 trait 函数。
```

r[paths.type]
### 类型中的路径

r[paths.type.syntax]
```grammar,paths
TypePath -> `::`? TypePathSegment (`::` TypePathSegment)*

TypePathSegment -> PathIdentSegment (`::`? GenericArgs)?
```

r[paths.type.intro]
类型路径用于类型定义、trait 约束和限定路径。

r[paths.type.turbofish]
虽然允许在泛型实参前使用 `::` token，但这不是必需的，因为不存在像 [PathInExpression] 中那样的歧义。

```rust
# mod ops {
#     pub struct Range<T> {f1: T}
#     pub trait Index<T> {}
#     pub struct Example<'a> {f1: &'a i32}
# }
# struct S;
impl ops::Index<ops::Range<usize>> for S { /*...*/ }
fn i<'a>() -> impl Iterator<Item = ops::Example<'a>> {
    // ...
#    const EXAMPLE: Vec<ops::Example<'static>> = Vec::new();
#    EXAMPLE.into_iter()
}
type G = std::boxed::Box<dyn std::ops::FnOnce(isize) -> isize>;
```

r[paths.qualifiers]
## 路径限定符

路径可以用各种前导限定符表示，以改变其被解析的含义。

> [!NOTE]
> [`use` 声明](items/use-declarations.md) 对 `self`、`super`、`crate` 和 `$crate` 有额外的行为和限制。

r[paths.qualifiers.global-root]
### `::`

r[paths.qualifiers.global-root.intro]
以 `::` 开头的路径被视为 *全局路径*，其中路径段开始解析的位置会因 edition 而异。路径中的每个标识符都必须解析为一个项。

r[paths.qualifiers.global-root.edition2018]
> [!EDITION-2018]
> 在 2015 edition 中，标识符从“crate 根”（2018 edition 中为 `crate::`）解析；crate 根包含各种不同项，包括外部 crate、`std` 或 `core` 等默认 crate，以及 crate 顶层中的项（包括 `use` 导入）。
>
> 从 2018 edition 开始，以 `::` 开头的路径会从 [extern prelude](names/preludes.md#extern-prelude) 中的 crate 解析。也就是说，它们后面必须跟随一个 crate 的名称。

```rust
pub fn foo() {
    // 在 2018 edition 中，这会通过 extern prelude 访问 `std`。
    // 在 2015 edition 中，这会通过 crate root 访问 `std`。
    let now = ::std::time::Instant::now();
    println!("{:?}", now);
}
```

```rust,edition2015
// 2015 版
mod a {
    pub fn foo() {}
}
mod b {
    pub fn foo() {
        ::a::foo(); // 调用 `a` 的 foo 函数
        // 在 Rust 2018 中，`::a` 会被解释为 crate `a`。
    }
}
# fn main() {}
```

r[paths.qualifiers.mod-self]
### `self`

r[paths.qualifiers.mod-self.intro]
`self` 会相对于当前模块解析路径。

r[paths.qualifiers.mod-self.restriction]
`self` 只能作为路径的第一段（前面没有 `::`）使用，或者作为最后一段（前面有 `::`）使用。

r[paths.qualifiers.mod-self.trailing]
当 `self` 作为路径的最后一段出现时，它指代由前一段命名的实体。前面的路径必须解析为[模块](items/modules.md)、[枚举](items/enumerations.md)或 [trait](items/traits.md)。

```rust
mod m {
    pub enum E { V1 }
    pub trait Tr {}
    pub(in crate::m::self) fn g() {} // OK: 模块可以作为 `self` 的父项。
}
type Ty = m::E::self; // OK: Enumerations can be parents of `self`.
fn f<T: m::Tr::self>() {} // OK: trait 可以作为 `self` 的父项。
# fn main() { let _: Ty = m::E::V1; }
```

```rust,compile_fail,E0223
struct S;
type Ty = S::self; // ERROR: 结构体不能作为 `self` 的父项。
# fn main() {}
```

> [!NOTE]
> 有关 `use` 声明中 `self` 的额外规则，参见 [items.use.self]。

r[paths.qualifiers.self-pat]
在方法体中，由单个 `self` 段组成的路径会解析为该方法的 self 参数。

```rust
fn foo() {}
fn bar() {
    self::foo();
}
struct S(bool);
impl S {
  fn baz(self) {
        self.0;
    }
}
# fn main() {}
```

r[paths.qualifiers.type-self]
### `Self`

r[paths.qualifiers.type-self.intro]
首字母大写的 `Self` 用于指代当前正在实现或定义的类型。它可以在以下情况下使用：

r[paths.qualifiers.type-self.trait]
* 在 [trait](items/traits.md) 定义中，它指代实现该 trait 的类型。

r[paths.qualifiers.type-self.impl]
* 在[实现](items/implementations.md)中，它指代正在实现的类型。当实现元组[结构体](items/structs.md)或单元[结构体](items/structs.md)时，它还指代[值命名空间](names/namespaces.md)中的构造器。

r[paths.qualifiers.type-self.type]
* 在[结构体](items/structs.md)、[枚举](items/enumerations.md)或[联合体](items/unions.md)的定义中，它指代正在定义的类型。该定义不允许无限递归（必须有一层间接性）。

r[paths.qualifiers.type-self.scope]
`Self` 的作用域行为类似于泛型参数；更多细节见 [`Self` 作用域](names/scopes.md#self-scope)章节。

r[paths.qualifiers.type-self.allowed-positions]
`Self` 只能作为第一段使用，前面不能有 `::`。

r[paths.qualifiers.type-self.no-generics]
`Self` 路径不能包含泛型实参（如 `Self::<i32>`）。

```rust
trait T {
    type Item;
    const C: i32;
    // `Self` 将是实现 `T` 的任意类型。
    fn new() -> Self;
    // `Self::Item` 将是实现中的类型别名。
    fn f(&self) -> Self::Item;
}
struct S;
impl T for S {
    type Item = i32;
    const C: i32 = 9;
    fn new() -> Self {           // `Self` 是类型 `S`。
        S
    }
    fn f(&self) -> Self::Item {  // `Self::Item` 是类型 `i32`。
        Self::C                  // `Self::C` 是常量值 `9`。
    }
}

// `Self` 在 trait 定义的泛型中处于作用域内，
// 用来指代正在定义的类型。
trait Add<Rhs = Self> {
    type Output;
    // `Self` 也可以引用正在实现的
    // 类型的关联项。
    fn add(self, rhs: Rhs) -> Self::Output;
}

struct NonEmptyList<T> {
    head: T,
    // struct 可以引用自身（只要它不是
    // 无限递归的）。
    tail: Option<Box<Self>>,
}
```

r[paths.qualifiers.super]
### `super`

r[paths.qualifiers.super.intro]
路径中的 `super` 解析为父模块。

r[paths.qualifiers.super.allowed-positions]
它只能用于路径的前导段，可能跟在初始的 `self` 段之后。

```rust
mod a {
    pub fn foo() {}
}
mod b {
    pub fn foo() {
        super::a::foo(); // 调用 a 的 foo 函数
    }
}
# fn main() {}
```

r[paths.qualifiers.super.repetition]
在第一个 `super` 或 `self` 之后，可以重复使用 `super` 多次以指代祖先模块。

```rust
mod a {
    fn foo() {}

    mod b {
        mod c {
            fn foo() {
                super::super::foo(); // 调用 a 的 foo 函数
                self::super::super::foo(); // 调用 a 的 foo 函数
            }
        }
    }
}
# fn main() {}
```

r[paths.qualifiers.crate]
### `crate`

r[paths.qualifiers.crate.intro]
`crate` 会相对于当前 crate 解析路径。

r[paths.qualifiers.crate.allowed-positions]
`crate` 只能作为第一段使用，前面不能有 `::`。

```rust
fn foo() {}
mod a {
    fn bar() {
        crate::foo();
    }
}
# fn main() {}
```

r[paths.qualifiers.macro-crate]
### `$crate`

r[paths.qualifiers.macro-crate.allowed-positions]
[`$crate`](macro.decl.hygiene.crate) 只在[宏转录器](macros-by-example.md)中使用，并且只能作为第一段使用，前面不能有 `::`。

r[paths.qualifiers.macro-crate.hygiene]
[`$crate`](macro.decl.hygiene.crate) 会展开为一条路径，用于访问定义该宏的 crate 顶层中的项，而不管该宏是在哪个 crate 中被调用的。

```rust
pub fn increment(x: u32) -> u32 {
    x + 1
}

#[macro_export]
macro_rules! inc {
    ($x:expr) => ( $crate::increment($x) )
}
# fn main() { }
```

r[paths.canonical]
## 规范路径

r[paths.canonical.intro]
模块或实现中定义的每个项都有一条 *规范路径*，对应它在其 crate 内的定义位置。

r[paths.canonical.alias]
指向这些项的所有其他路径都是别名。

r[paths.canonical.def]
规范路径定义为：由 *路径前缀* 附加该项自身定义的路径段组成。

r[paths.canonical.non-canonical]
[实现](items/implementations.md)和 [use 声明](items/use-declarations.md)没有规范路径，尽管实现所定义的项确实有规范路径。在块表达式中定义的项没有规范路径。在没有规范路径的模块中定义的项也没有规范路径。在实现中定义的关联项，如果该实现引用了一个没有规范路径的项，例如作为被实现类型、被实现的 trait、类型参数或类型参数上的约束，则这些关联项没有规范路径。

r[paths.canonical.module-prefix]
模块的路径前缀是指向该模块的规范路径。

r[paths.canonical.bare-impl-prefix]
对于不带 trait 的实现，它是被实现项的规范路径，并用 <span class="parenthetical">尖括号（`<>`）</span> 括起来。

r[paths.canonical.trait-impl-prefix]
对于 [trait 实现](items/implementations.md#trait-implementations)，它是被实现项的规范路径，后接 `as`，再后接指向该 trait 的规范路径，整体用 <span class="parenthetical">尖括号（`<>`）</span> 括起来。

r[paths.canonical.local-canonical-path]
规范路径只在给定 crate 内有意义。跨 crate 不存在全局命名空间；项的规范路径仅在该 crate 内标识该项。

```rust
// 注释显示该项的规范路径。

mod a { // crate::a
    pub struct Struct; // crate::a::Struct

    pub trait Trait { // crate::a::Trait
        fn f(&self); // crate::a::Trait::f
    }

    impl Trait for Struct {
        fn f(&self) {} // <crate::a::Struct as crate::a::Trait>::f
    }

    impl Struct {
        fn g(&self) {} // <crate::a::Struct>::g
    }
}

mod without { // crate::without
    fn canonicals() { // crate::without::canonicals
        struct OtherStruct; // None

        trait OtherTrait { // None
            fn g(&self); // None
        }

        impl OtherTrait for OtherStruct {
            fn g(&self) {} // None
        }

        impl OtherTrait for crate::a::Struct {
            fn g(&self) {} // None
        }

        impl crate::a::Trait for OtherStruct {
            fn f(&self) {} // None
        }
    }
}

# fn main() {}
```

[`$crate`]: macro.decl.hygiene.crate
[implementations]: items/implementations.md
[items]: items.md
[literal]: expressions/literal-expr.md
[use declarations]: items/use-declarations.md
[`Self` scope]: names/scopes.md#self-scope
[`use`]: items/use-declarations.md
[attributes]: attributes.md
[const generic argument]: items.generics.const.argument
[enumeration]: items/enumerations.md
[expressions]: expressions.md
[extern prelude]: names/preludes.md#extern-prelude
[implementation]: items/implementations.md
[inferred const]: items.generics.const.inferred
[macro transcribers]: macros-by-example.md
[macros]: macros.md
[mbe]: macros-by-example.md
[module]: items/modules.md
[patterns]: patterns.md
[struct]: items/structs.md
[trait implementations]: items/implementations.md#trait-implementations
[trait]: items/traits.md
[traits]: items/traits.md
[types]: types.md
[union]: items/unions.md
[`use` declarations]: items/use-declarations.md
[value namespace]: names/namespaces.md
[visibility]: visibility-and-privacy.md
