<div class="rule" id="r-items.associated"><a class="rule-link" href="#r-items.associated" title="items.associated"><span>[items<wbr>.associated]</span></a>
</div>

# 关联项

<div class="rule" id="r-items.associated.syntax"><a class="rule-link" href="#r-items.associated.syntax" title="items.associated.syntax"><span>[items<wbr>.associated<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-AssociatedItem" onclick="show_railroad()">[AssociatedItem](associated-items.md#railroad-AssociatedItem)</span> →  
    <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> (  
        <span class="grammar-text">[MacroInvocationSemi](../macros.md#grammar-MacroInvocationSemi)</span>  
      \| ( <span class="grammar-text">[Visibility](../visibility-and-privacy.md#grammar-Visibility)</span><sup>?</sup> ( <span class="grammar-text">[TypeAlias](type-aliases.md#grammar-TypeAlias)</span> | <span class="grammar-text">[ConstantItem](constant-items.md#grammar-ConstantItem)</span> | <span class="grammar-text">[Function](functions.md#grammar-Function)</span> ) )  
    )

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 654px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-AssociatedItem"><svg class="railroad" viewBox="0 0 654 198" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="associated-items.md#grammar-AssociatedItem">
<text class="comment" x="64" y="25">
AssociatedItem</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="71" y="55"/>
<text x="137" y="71">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<g class="choice">
<path d=" M 249 66 h 24 m 172 0 h 174 m -84 0 l -5 -5 m 0 10 l 5 -5 m 84 0"/>
<g class="sequence">
<a class="link" xlink:href="../macros.md#railroad-MacroInvocationSemi">
<g class="nonterminal">
<rect height="22" width="172" x="273" y="55"/>
<text x="359" y="71">
MacroInvocationSemi</text>
</g>
</a>
</g>
<path d=" M 249 66 a 12 12 0 0 1 12 12 v 9 m 346 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 261 87 v 12 a 12 12 0 0 0 12 12 m 322 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="sequence">
<g class="optional">
<path d=" M 273 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../visibility-and-privacy.md#railroad-Visibility">
<g class="nonterminal">
<rect height="22" width="100" x="297" y="100"/>
<text x="347" y="116">
Visibility</text>
</g>
</a>
</g>
<g class="choice">
<path d=" M 431 111 h 24 m 92 0 h 48"/>
<a class="link" xlink:href="type-aliases.md#railroad-TypeAlias">
<g class="nonterminal">
<rect height="22" width="92" x="455" y="100"/>
<text x="501" y="116">
TypeAlias</text>
</g>
</a>
<path d=" M 431 111 a 12 12 0 0 1 12 12 v 9 m 140 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 443 132 v 33 m 140 0 v -33"/>
<path d=" M 443 132 v 0 a 12 12 0 0 0 12 12 m 116 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="constant-items.md#railroad-ConstantItem">
<g class="nonterminal">
<rect height="22" width="116" x="455" y="133"/>
<text x="513" y="149">
ConstantItem</text>
</g>
</a>
<path d=" M 443 165 v 0 a 12 12 0 0 0 12 12 m 84 0 h 32 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="functions.md#railroad-Function">
<g class="nonterminal">
<rect height="22" width="84" x="455" y="166"/>
<text x="497" y="182">
Function</text>
</g>
</a>
</g>
<path d=" M 421 111 h 10"/>
</g>
</g>
</g>
<path d=" M 239 66 h 10"/>
</g>
<path d=" M 629 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 619 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.associated.intro"><a class="rule-link" href="#r-items.associated.intro" title="items.associated.intro"><span>[items<wbr>.associated<wbr>.intro]</span></a>
</div>

<em>关联项</em>是在 [trait](traits.md) 中声明或在[实现](implementations.md)中定义的项。之所以这样称呼，是因为它们定义在一个关联类型上，即该实现中的类型。

<div class="rule" id="r-items.associated.kinds"><a class="rule-link" href="#r-items.associated.kinds" title="items.associated.kinds"><span>[items<wbr>.associated<wbr>.kinds]</span></a>
</div>

它们是可以在模块中声明的项种类的一个子集。具体来说，有[关联函数](#associated-functions-and-methods)（包括方法）、[关联类型](#associated-types)和[关联常量](#associated-constants)。

<div class="rule" id="r-items.associated.related"><a class="rule-link" href="#r-items.associated.related" title="items.associated.related"><span>[items<wbr>.associated<wbr>.related]</span></a>
</div>

当关联项在逻辑上与其所关联的项相关时，关联项很有用。例如，`Option` 上的 `is_some` 方法与 Option 有内在关联，因此应该作为关联项。

<div class="rule" id="r-items.associated.decl-def"><a class="rule-link" href="#r-items.associated.decl-def" title="items.associated.decl-def"><span>[items<wbr>.associated<wbr>.decl-def]</span></a>
</div>

每种关联项都有两种形式：包含实际实现的定义，以及为定义声明签名的声明。

<div class="rule" id="r-items.associated.trait-items"><a class="rule-link" href="#r-items.associated.trait-items" title="items.associated.trait-items"><span>[items<wbr>.associated<wbr>.trait-items]</span></a>
</div>

这些声明构成了 trait 的契约，以及泛型类型上可用的内容。

<div class="rule" id="r-items.associated.fn"><a class="rule-link" href="#r-items.associated.fn" title="items.associated.fn"><span>[items<wbr>.associated<wbr>.fn]</span></a>
</div>

## 关联函数和方法

<div class="rule" id="r-items.associated.fn.intro"><a class="rule-link" href="#r-items.associated.fn.intro" title="items.associated.fn.intro"><span>[items<wbr>.associated<wbr>.fn<wbr>.intro]</span></a>
</div>

<em>关联函数</em>是与某个类型关联的[函数](functions.md)。

<div class="rule" id="r-items.associated.fn.decl"><a class="rule-link" href="#r-items.associated.fn.decl" title="items.associated.fn.decl"><span>[items<wbr>.associated<wbr>.fn<wbr>.decl]</span></a>
</div>

<em>关联函数声明</em>为关联函数定义声明签名。它的写法与函数项相同，只是函数体替换为 `;`。

<div class="rule" id="r-items.associated.name"><a class="rule-link" href="#r-items.associated.name" title="items.associated.name"><span>[items<wbr>.associated<wbr>.name]</span></a>
</div>

该标识符是函数的名称。

<div class="rule" id="r-items.associated.same-signature"><a class="rule-link" href="#r-items.associated.same-signature" title="items.associated.same-signature"><span>[items<wbr>.associated<wbr>.same-signature]</span></a>
</div>

关联函数的泛型、参数列表、返回类型和 where 子句必须与关联函数声明中的对应部分相同。

<div class="rule" id="r-items.associated.fn.def"><a class="rule-link" href="#r-items.associated.fn.def" title="items.associated.fn.def"><span>[items<wbr>.associated<wbr>.fn<wbr>.def]</span></a>
</div>

<em>关联函数定义</em>定义一个与另一类型关联的函数。它的写法与[函数项](../types/function-item.md)相同。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 一个常见示例是名为 `new` 的关联函数，它返回与其关联的类型的值。

</div>

```rust
struct Struct {
    field: i32
}

impl Struct {
    fn new() -> Struct {
        Struct {
            field: 0i32
        }
    }
}

fn main () {
    let _struct = Struct::new();
}
```

<div class="rule" id="r-items.associated.fn.qualified-self"><a class="rule-link" href="#r-items.associated.fn.qualified-self" title="items.associated.fn.qualified-self"><span>[items<wbr>.associated<wbr>.fn<wbr>.qualified-self]</span></a>
</div>

当关联函数在 trait 上声明时，也可以用一个[路径](../paths.md)来调用该函数，该路径是在指向该 trait 的路径后附加该 trait 的名称。发生这种情况时，它会被替换为 `<_ as Trait>::function_name`。

```rust
trait Num {
    fn from_i32(n: i32) -> Self;
}

impl Num for f64 {
    fn from_i32(n: i32) -> f64 { n as f64 }
}

// 在这个情况下，这 4 种写法都是等价的。
let _: f64 = Num::from_i32(42);
let _: f64 = <_ as Num>::from_i32(42);
let _: f64 = <f64 as Num>::from_i32(42);
let _: f64 = f64::from_i32(42);
```

<div class="rule" id="r-items.associated.fn.method"><a class="rule-link" href="#r-items.associated.fn.method" title="items.associated.fn.method"><span>[items<wbr>.associated<wbr>.fn<wbr>.method]</span></a>
</div>

### 方法

<div class="rule" id="r-items.associated.fn.method.intro"><a class="rule-link" href="#r-items.associated.fn.method.intro" title="items.associated.fn.method.intro"><span>[items<wbr>.associated<wbr>.fn<wbr>.method<wbr>.intro]</span></a>
</div>

第一个参数名为 `self` 的关联函数称为<em>方法</em>，可以使用[方法调用运算符](../expressions/method-call-expr.md)来调用，例如 `x.foo()`；也可以使用通常的函数调用记法。

<div class="rule" id="r-items.associated.fn.method.self-ty"><a class="rule-link" href="#r-items.associated.fn.method.self-ty" title="items.associated.fn.method.self-ty"><span>[items<wbr>.associated<wbr>.fn<wbr>.method<wbr>.self-ty]</span></a>
</div>

如果指定了 `self` 参数的类型，则该类型限于能解析为由以下语法生成的某种类型（其中 `'lt` 表示某个任意生命周期）：

```text
P = &'lt S | &'lt mut S | Box<S> | Rc<S> | Arc<S> | Pin<P>
S = Self | P
```

此语法中的 `Self` 终结符表示解析为实现类型的类型。这也可以包括上下文类型别名 `Self`、其他类型别名，或解析为实现类型的关联类型投影。

```rust
# use std::rc::Rc;
# use std::sync::Arc;
# use std::pin::Pin;
// 在结构体 `Example` 上实现的方法示例。
struct Example;
type Alias = Example;
trait Trait { type Output; }
impl Trait for Example { type Output = Example; }
impl Example {
    fn by_value(self: Self) {}
    fn by_ref(self: &Self) {}
    fn by_ref_mut(self: &mut Self) {}
    fn by_box(self: Box<Self>) {}
    fn by_rc(self: Rc<Self>) {}
    fn by_arc(self: Arc<Self>) {}
    fn by_pin(self: Pin<&Self>) {}
    fn explicit_type(self: Arc<Example>) {}
    fn with_lifetime<'a>(self: &'a Self) {}
    fn nested<'a>(self: &mut &'a Arc<Rc<Box<Alias>>>) {}
    fn via_projection(self: <Example as Trait>::Output) {}
}
```

<div class="rule" id="r-associated.fn.method.self-pat-shorthands"><a class="rule-link" href="#r-associated.fn.method.self-pat-shorthands" title="associated.fn.method.self-pat-shorthands"><span>[associated<wbr>.fn<wbr>.method<wbr>.self-pat-shorthands]</span></a>
</div>

可以使用不指定类型的简写语法，其等价形式如下：

|简写|等价形式|
|--|----|
|`self`|`self: Self`|
|`&'lifetime self`|`self: &'lifetime Self`|
|`&'lifetime mut self`|`self: &'lifetime mut Self`|

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 使用这种简写时，生命周期可以省略，而且通常会省略。

</div>

<div class="rule" id="r-associated.fn.method.self-pat-mut"><a class="rule-link" href="#r-associated.fn.method.self-pat-mut" title="associated.fn.method.self-pat-mut"><span>[associated<wbr>.fn<wbr>.method<wbr>.self-pat-mut]</span></a>
</div>

如果 `self` 参数带有 `mut` 前缀，它就会成为可变变量，类似于使用 `mut` [标识符模式](../patterns.md#identifier-patterns)的常规参数。例如：

```rust
trait Changer: Sized {
    fn change(mut self) {}
    fn modify(mut self: Box<Self>) {}
}
```

作为 trait 上方法的示例，请考虑以下代码：

```rust
# type Surface = i32;
# type BoundingBox = i32;
trait Shape {
    fn draw(&self, surface: Surface);
    fn bounding_box(&self) -> BoundingBox;
}
```

这定义了一个带有两个方法的 trait。当该 trait 在作用域内时，所有具有此 trait [实现](implementations.md)的值都可以调用其 `draw` 和 `bounding_box` 方法。

```rust
# type Surface = i32;
# type BoundingBox = i32;
# trait Shape {
#     fn draw(&self, surface: Surface);
#     fn bounding_box(&self) -> BoundingBox;
# }
#
struct Circle {
    // ...
}

impl Shape for Circle {
    // ...
#   fn draw(&self, _: Surface) {}
#   fn bounding_box(&self) -> BoundingBox { 0i32 }
}

# impl Circle {
#     fn new() -> Circle { Circle{} }
# }
#
let circle_shape = Circle::new();
let bounding_box = circle_shape.bounding_box();
```

<div class="rule" id="r-items.associated.fn.params.edition2018"><a class="rule-link" href="#r-items.associated.fn.params.edition2018" title="items.associated.fn.params.edition2018"><span>[items<wbr>.associated<wbr>.fn<wbr>.params<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2015 edition 中，可以使用匿名参数声明 trait 方法（例如 `fn foo(u8)`）。这已被弃用，并且从 2018 edition 起是错误。所有参数都必须具有实参名称。

</div>

<div class="rule" id="r-items.associated.fn.param-attributes"><a class="rule-link" href="#r-items.associated.fn.param-attributes" title="items.associated.fn.param-attributes"><span>[items<wbr>.associated<wbr>.fn<wbr>.param-attributes]</span></a>
</div>

#### 方法参数上的属性

方法参数上的属性遵循与[常规函数参数](functions.md#attributes-on-function-parameters)相同的规则和限制。

<div class="rule" id="r-items.associated.type"><a class="rule-link" href="#r-items.associated.type" title="items.associated.type"><span>[items<wbr>.associated<wbr>.type]</span></a>
</div>

## 关联类型

<div class="rule" id="r-items.associated.type.intro"><a class="rule-link" href="#r-items.associated.type.intro" title="items.associated.type.intro"><span>[items<wbr>.associated<wbr>.type<wbr>.intro]</span></a>
</div>

<em>关联类型</em>是与另一类型关联的[类型别名](type-aliases.md)。

<div class="rule" id="r-items.associated.type.restrictions"><a class="rule-link" href="#r-items.associated.type.restrictions" title="items.associated.type.restrictions"><span>[items<wbr>.associated<wbr>.type<wbr>.restrictions]</span></a>
</div>

关联类型不能在[固有实现](implementations.md#inherent-implementations)中定义，也不能在 trait 中给出默认实现。

<div class="rule" id="r-items.associated.type.decl"><a class="rule-link" href="#r-items.associated.type.decl" title="items.associated.type.decl"><span>[items<wbr>.associated<wbr>.type<wbr>.decl]</span></a>
</div>

<em>关联类型声明</em>为关联类型定义声明签名。它写成以下形式之一，其中 `Assoc` 是关联类型的名称，`Params` 是以逗号分隔的类型、生命周期或 const 参数列表，`Bounds` 是以加号分隔的、关联类型必须满足的 trait 约束列表，`WhereBounds` 是以逗号分隔的、参数必须满足的约束列表：

<!-- ignore: illustrative example forms -->

```rust,ignore
type Assoc;
type Assoc: Bounds;
type Assoc<Params>;
type Assoc<Params>: Bounds;
type Assoc<Params> where WhereBounds;
type Assoc<Params>: Bounds where WhereBounds;
```

<div class="rule" id="r-items.associated.type.name"><a class="rule-link" href="#r-items.associated.type.name" title="items.associated.type.name"><span>[items<wbr>.associated<wbr>.type<wbr>.name]</span></a>
</div>

该标识符是所声明类型别名的名称。

<div class="rule" id="r-items.associated.type.impl-fulfillment"><a class="rule-link" href="#r-items.associated.type.impl-fulfillment" title="items.associated.type.impl-fulfillment"><span>[items<wbr>.associated<wbr>.type<wbr>.impl-fulfillment]</span></a>
</div>

可选的 trait 约束必须由该类型别名的实现满足。

<div class="rule" id="r-items.associated.type.sized"><a class="rule-link" href="#r-items.associated.type.sized" title="items.associated.type.sized"><span>[items<wbr>.associated<wbr>.type<wbr>.sized]</span></a>
</div>

关联类型上有一个隐式的 [`Sized`](../special-types-and-traits.md#sized) 约束，可以使用特殊的 `?Sized` 约束放宽它。

<div class="rule" id="r-items.associated.type.def"><a class="rule-link" href="#r-items.associated.type.def" title="items.associated.type.def"><span>[items<wbr>.associated<wbr>.type<wbr>.def]</span></a>
</div>

<em>关联类型定义</em>为某个类型上的 trait 实现定义类型别名。

<div class="rule" id="r-items.associated.type.def.restriction"><a class="rule-link" href="#r-items.associated.type.def.restriction" title="items.associated.type.def.restriction"><span>[items<wbr>.associated<wbr>.type<wbr>.def<wbr>.restriction]</span></a>
</div>

它们的写法类似于<em>关联类型声明</em>，但不能包含 `Bounds`，而是必须包含 `Type`：

<!-- ignore: illustrative example forms -->

```rust,ignore
type Assoc = Type;
type Assoc<Params> = Type; // 这里的类型 `Type` 可以引用 `Params`
type Assoc<Params> = Type where WhereBounds;
type Assoc<Params> where WhereBounds = Type; // 已弃用，优先使用上面的形式
```

<div class="rule" id="r-items.associated.type.alias"><a class="rule-link" href="#r-items.associated.type.alias" title="items.associated.type.alias"><span>[items<wbr>.associated<wbr>.type<wbr>.alias]</span></a>
</div>

如果类型 `Item` 拥有来自 trait `Trait` 的关联类型 `Assoc`，那么 `<Item as Trait>::Assoc` 就是一个类型，它是关联类型定义中指定类型的别名。

<div class="rule" id="r-items.associated.type.param"><a class="rule-link" href="#r-items.associated.type.param" title="items.associated.type.param"><span>[items<wbr>.associated<wbr>.type<wbr>.param]</span></a>
</div>

此外，如果 `Item` 是类型参数，那么 `Item::Assoc` 可以用于类型参数中。

<div class="rule" id="r-items.associated.type.generic"><a class="rule-link" href="#r-items.associated.type.generic" title="items.associated.type.generic"><span>[items<wbr>.associated<wbr>.type<wbr>.generic]</span></a>
</div>

关联类型可以包含[泛型参数](generics.md)和 [where 子句](generics.md#where-clauses)；这些通常称为<em>泛型关联类型</em>，或 <em>GAT</em>。如果类型 `Thing` 拥有来自 trait `Trait`、带有泛型 `<'a>` 的关联类型 `Item`，则该类型可以命名为类似 `<Thing as Trait>::Item<'x>` 的形式，其中 `'x` 是作用域内的某个生命周期。在这种情况下，impl 上的关联类型定义中凡是出现 `'a` 的位置都会使用 `'x`。

```rust
trait AssociatedType {
    // 关联类型声明
    type Assoc;
}

struct Struct;

struct OtherStruct;

impl AssociatedType for Struct {
    // 关联类型定义
    type Assoc = OtherStruct;
}

impl OtherStruct {
    fn new() -> OtherStruct {
        OtherStruct
    }
}

fn main() {
    // 使用关联类型通过 <Struct as AssociatedType>::Assoc 指代 OtherStruct
    let _other_struct: OtherStruct = <Struct as AssociatedType>::Assoc::new();
}
```

带有泛型和 where 子句的关联类型示例：

```rust
struct ArrayLender<'a, T>(&'a mut [T; 16]);

trait Lend {
    // 泛型关联类型声明
    type Lender<'a> where Self: 'a;
    fn lend<'a>(&'a mut self) -> Self::Lender<'a>;
}

impl<T> Lend for [T; 16] {
    // 泛型关联类型定义
    type Lender<'a> = ArrayLender<'a, T> where Self: 'a;

    fn lend<'a>(&'a mut self) -> Self::Lender<'a> {
        ArrayLender(self)
    }
}

fn borrow<'a, T: Lend>(array: &'a mut T) -> <T as Lend>::Lender<'a> {
    array.lend()
}

fn main() {
    let mut array = [0usize; 16];
    let lender = borrow(&mut array);
}
```

### 关联类型容器示例

请考虑下面这个 `Container` trait 的示例。注意，该类型可以在方法签名中使用：

```rust
trait Container {
    type E;
    fn empty() -> Self;
    fn insert(&mut self, elem: Self::E);
}
```

为了让一个类型实现此 trait，它不仅必须为每个方法提供实现，还必须指定类型 `E`。下面是为标准库类型 `Vec` 实现 `Container` 的示例：

```rust
# trait Container {
#     type E;
#     fn empty() -> Self;
#     fn insert(&mut self, elem: Self::E);
# }
impl<T> Container for Vec<T> {
    type E = T;
    fn empty() -> Vec<T> { Vec::new() }
    fn insert(&mut self, x: T) { self.push(x); }
}
```

### `Bounds` 与 `WhereBounds` 之间的关系

在这个示例中：

```rust
# use std::fmt::Debug;
trait Example {
    type Output<T>: Ord where T: Debug;
}
```

给定一个形如 `<X as Example>::Output<Y>` 的关联类型引用，关联类型本身必须是 `Ord`，并且类型 `Y` 必须是 `Debug`。

<div class="rule" id="r-items.associated.type.generic-where-clause"><a class="rule-link" href="#r-items.associated.type.generic-where-clause" title="items.associated.type.generic-where-clause"><span>[items<wbr>.associated<wbr>.type<wbr>.generic-where-clause]</span></a>
</div>

### 泛型关联类型上必需的 where 子句

<div class="rule" id="r-items.associated.type.generic-where-clause.intro"><a class="rule-link" href="#r-items.associated.type.generic-where-clause.intro" title="items.associated.type.generic-where-clause.intro"><span>[items<wbr>.associated<wbr>.type<wbr>.generic-where-clause<wbr>.intro]</span></a>
</div>

trait 上的泛型关联类型声明目前可能需要一个 where 子句列表，这取决于 trait 中的函数以及 GAT 的使用方式。这些规则未来可能会放宽；更新可见于[泛型关联类型倡议仓库](https://rust-lang.github.io/generic-associated-types-initiative/explainer/required_bounds.html)。

<div class="rule" id="r-items.associated.type.generic-where-clause.valid-fn"><a class="rule-link" href="#r-items.associated.type.generic-where-clause.valid-fn" title="items.associated.type.generic-where-clause.valid-fn"><span>[items<wbr>.associated<wbr>.type<wbr>.generic-where-clause<wbr>.valid-fn]</span></a>
</div>

简言之，需要这些 where 子句，是为了最大化 impl 中允许的关联类型定义。为此，在 GAT 作为输入或输出出现的函数上，任何（使用函数或 trait 的参数）<em>可以证明成立</em>的子句，也必须写在 GAT 本身上。

```rust
trait LendingIterator {
    type Item<'x> where Self: 'x;
    fn next<'a>(&'a mut self) -> Self::Item<'a>;
}
```

在上面的例子中，对于 `next` 函数，由于 `&'a mut self` 所产生的隐含约束，我们可以证明 `Self: 'a`；因此，必须在 GAT 本身上写出等价约束：`where Self: 'x`。

<div class="rule" id="r-items.associated.type.generic-where-clause.intersection"><a class="rule-link" href="#r-items.associated.type.generic-where-clause.intersection" title="items.associated.type.generic-where-clause.intersection"><span>[items<wbr>.associated<wbr>.type<wbr>.generic-where-clause<wbr>.intersection]</span></a>
</div>

当 trait 中有多个函数使用该 GAT 时，会使用来自不同函数的约束的<em>交集</em>，而不是并集。

```rust
trait Check<T> {
    type Checker<'x>;
    fn create_checker<'a>(item: &'a T) -> Self::Checker<'a>;
    fn do_check(checker: Self::Checker<'_>);
}
```

在这个示例中，`type Checker<'a>;` 上不需要任何约束。虽然我们知道在 `create_checker` 上有 `T: 'a`，但在 `do_check` 上并不知道这一点。不过，如果将 `do_check` 注释掉，那么 `Checker` 上就需要 `where T: 'x` 约束。

<div class="rule" id="r-items.associated.type.generic-where-clause.forward"><a class="rule-link" href="#r-items.associated.type.generic-where-clause.forward" title="items.associated.type.generic-where-clause.forward"><span>[items<wbr>.associated<wbr>.type<wbr>.generic-where-clause<wbr>.forward]</span></a>
</div>

关联类型上的约束也会传播必需的 where 子句。

```rust
trait Iterable {
    type Item<'a> where Self: 'a;
    type Iterator<'a>: Iterator<Item = Self::Item<'a>> where Self: 'a;
    fn iter<'a>(&'a self) -> Self::Iterator<'a>;
}
```

这里，由于 `iter`，`Item` 上需要 `where Self: 'a`。不过，`Item` 被用于 `Iterator` 的约束中，因此那里也需要 `where Self: 'a` 子句。

<div class="rule" id="r-items.associated.type.generic-where-clause.static"><a class="rule-link" href="#r-items.associated.type.generic-where-clause.static" title="items.associated.type.generic-where-clause.static"><span>[items<wbr>.associated<wbr>.type<wbr>.generic-where-clause<wbr>.static]</span></a>
</div>

最后，trait 中对 GAT 的任何显式 `'static` 使用都不计入必需约束。

```rust
trait StaticReturn {
    type Y<'a>;
    fn foo(&self) -> Self::Y<'static>;
}
```

<div class="rule" id="r-items.associated.const"><a class="rule-link" href="#r-items.associated.const" title="items.associated.const"><span>[items<wbr>.associated<wbr>.const]</span></a>
</div>

## 关联常量

<div class="rule" id="r-items.associated.const.intro"><a class="rule-link" href="#r-items.associated.const.intro" title="items.associated.const.intro"><span>[items<wbr>.associated<wbr>.const<wbr>.intro]</span></a>
</div>

<em>关联常量</em>是与某个类型关联的[常量](constant-items.md)。

<div class="rule" id="r-items.associated.const.decl"><a class="rule-link" href="#r-items.associated.const.decl" title="items.associated.const.decl"><span>[items<wbr>.associated<wbr>.const<wbr>.decl]</span></a>
</div>

<em>关联常量声明</em>为关联常量定义声明签名。它写作 `const`，后接标识符，再接 `:`，再接一个类型，并以 `;` 结束。

<div class="rule" id="r-items.associated.const.name"><a class="rule-link" href="#r-items.associated.const.name" title="items.associated.const.name"><span>[items<wbr>.associated<wbr>.const<wbr>.name]</span></a>
</div>

该标识符是路径中使用的常量名称。该类型是定义必须实现的类型。

<div class="rule" id="r-items.associated.const.def"><a class="rule-link" href="#r-items.associated.const.def" title="items.associated.const.def"><span>[items<wbr>.associated<wbr>.const<wbr>.def]</span></a>
</div>

<em>关联常量定义</em>定义一个与某个类型关联的常量。它的写法与[常量项](constant-items.md)相同。

<div class="rule" id="r-items.associated.const.eval"><a class="rule-link" href="#r-items.associated.const.eval" title="items.associated.const.eval"><span>[items<wbr>.associated<wbr>.const<wbr>.eval]</span></a>
</div>

关联常量定义只有在被引用时才会进行[常量求值](../const_eval.md)。此外，包含[泛型参数](generics.md)的定义会在单态化之后求值。

```rust,compile_fail
struct Struct;
struct GenericStruct<const ID: i32>;

impl Struct {
    // 定义不会立即求值
    const PANIC: () = panic!("compile-time panic");
}

impl<const ID: i32> GenericStruct<ID> {
    // 定义不会立即求值
    const NON_ZERO: () = if ID == 0 {
        panic!("contradiction")
    };
}

fn main() {
    // 引用 Struct::PANIC 会导致编译错误
    let _ = Struct::PANIC;

    // 没问题，ID 不是 0
    let _ = GenericStruct::<1>::NON_ZERO;

    // 以 ID=0 对 NON_ZERO 求值会产生编译错误
    let _ = GenericStruct::<0>::NON_ZERO;
}
```

### 关联常量示例

一个基本示例：

```rust
trait ConstantId {
    const ID: i32;
}

struct Struct;

impl ConstantId for Struct {
    const ID: i32 = 1;
}

fn main() {
    assert_eq!(1, Struct::ID);
}
```

使用默认值：

```rust
trait ConstantIdDefault {
    const ID: i32 = 1;
}

struct Struct;
struct OtherStruct;

impl ConstantIdDefault for Struct {}

impl ConstantIdDefault for OtherStruct {
    const ID: i32 = 5;
}

fn main() {
    assert_eq!(1, Struct::ID);
    assert_eq!(5, OtherStruct::ID);
}
```