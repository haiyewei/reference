<div class="rule" id="r-items.traits"><a class="rule-link" href="#r-items.traits" title="items.traits"><span>[items<wbr>.traits]</span></a>
</div>

# Trait

<div class="rule" id="r-items.traits.syntax"><a class="rule-link" href="#r-items.traits.syntax" title="items.traits.syntax"><span>[items<wbr>.traits<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Trait" onclick="show_railroad()">[Trait](traits.md#railroad-Trait)</span> →  
    <span class="grammar-literal">unsafe</span><sup>?</sup> <span class="grammar-literal">trait</span> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-text">[GenericParams](generics.md#grammar-GenericParams)</span><sup>?</sup> ( <span class="grammar-literal">:</span> <span class="grammar-text">[Bounds](../trait-bounds.md#grammar-Bounds)</span><sup>?</sup> )<sup>?</sup> <span class="grammar-text">[WhereClause](generics.md#grammar-WhereClause)</span><sup>?</sup>  
    <span class="grammar-literal">{</span>  
        <span class="grammar-text">[InnerAttribute](../attributes.md#grammar-InnerAttribute)</span><sup>\*</sup>  
        <span class="grammar-text">[AssociatedItem](associated-items.md#grammar-AssociatedItem)</span><sup>\*</sup>  
    <span class="grammar-literal">}</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 974px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Trait"><svg class="railroad" viewBox="0 0 974 339" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="traits.md#grammar-Trait">
<text class="comment" x="32" y="25">
Trait</text>
</a>
<g class="sequence">
<path d=" M 10 78 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 78 h 12"/>
<path d=" M 903 78 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -856 m 431 0 l 5 -5 m 0 10 l -5 -5 m -431 0 a 12 12 0 0 0 -12 12 v 0 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="71" y="67"/>
<text x="105" y="83">
unsafe</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="173" y="67"/>
<text x="203" y="83">
trait</text>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="243" y="67"/>
<text x="293" y="83">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 353 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-GenericParams">
<g class="nonterminal">
<rect height="22" width="124" x="377" y="67"/>
<text x="439" y="83">
GenericParams</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 535 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 154 m -74 0 l -5 -5 m 0 10 l 5 -5 m 74 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="559" y="67"/>
<text x="573" y="83">
:</text>
</g>
<g class="optional">
<path d=" M 597 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../trait-bounds.md#railroad-Bounds">
<g class="nonterminal">
<rect height="22" width="68" x="621" y="67"/>
<text x="655" y="83">
Bounds</text>
</g>
</a>
</g>
<path d=" M 587 78 h 10"/>
</g>
</g>
<g class="optional">
<path d=" M 747 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-WhereClause">
<g class="nonterminal">
<rect height="22" width="108" x="771" y="67"/>
<text x="825" y="83">
WhereClause</text>
</g>
</a>
</g>
<path d=" M 163 78 h 10"/>
<path d=" M 233 78 h 10"/>
<path d=" M 343 78 h 10"/>
<path d=" M 525 78 h 10"/>
<path d=" M 737 78 h 10"/>
</g>
<path d=" M 75 126 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -28 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="47" y="115"/>
<text x="61" y="131">
{</text>
</g>
</g>
<path d=" M 251 186 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 1 -12 12 h -204 m 105 0 l 5 -5 m 0 10 l -5 -5 m -105 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 186 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 71 186 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-InnerAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="83" y="175"/>
<text x="149" y="191">
InnerAttribute</text>
</g>
</a>
</g>
</g>
</g>
<path d=" M 251 258 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 1 -12 12 h -204 m 105 0 l 5 -5 m 0 10 l -5 -5 m -105 0 a 12 12 0 0 0 -12 12 v 0 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 258 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 71 258 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="associated-items.md#railroad-AssociatedItem">
<g class="nonterminal">
<rect height="22" width="132" x="83" y="247"/>
<text x="149" y="263">
AssociatedItem</text>
</g>
</a>
</g>
</g>
</g>
<path d=" M 75 318 h 840 m -417 0 l -5 -5 m 0 10 l 5 -5 m 417 0 a 12 12 0 0 0 12 -12 v -216 m 0 111 l -5 5 m 10 0 l -5 -5 m 0 -111 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="47" y="307"/>
<text x="61" y="323">
}</text>
</g>
</g>
</g>
<path d=" M 949 78 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 78 h 10"/>
<path d=" M 939 78 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.traits.intro"><a class="rule-link" href="#r-items.traits.intro" title="items.traits.intro"><span>[items<wbr>.traits<wbr>.intro]</span></a>
</div>

_trait_ 描述类型可以实现的抽象接口。此接口由[关联项](associated-items.md)组成，关联项分为三类：

- [函数](associated-items.md#associated-functions-and-methods)
- [类型](associated-items.md#associated-types)
- [常量](associated-items.md#associated-constants)

<div class="rule" id="r-items.traits.namespace"><a class="rule-link" href="#r-items.traits.namespace" title="items.traits.namespace"><span>[items<wbr>.traits<wbr>.namespace]</span></a>
</div>

trait 声明会在其所在模块或块的[类型命名空间](../names/namespaces.md)中定义一个 trait。

<div class="rule" id="r-items.traits.associated-item-namespaces"><a class="rule-link" href="#r-items.traits.associated-item-namespaces" title="items.traits.associated-item-namespaces"><span>[items<wbr>.traits<wbr>.associated-item-namespaces]</span></a>
</div>

关联项在各自的命名空间中定义为 trait 的成员。关联类型在类型命名空间中定义。关联常量和关联函数在值命名空间中定义。

<div class="rule" id="r-items.traits.self-param"><a class="rule-link" href="#r-items.traits.self-param" title="items.traits.self-param"><span>[items<wbr>.traits<wbr>.self-param]</span></a>
</div>

所有 trait 都定义一个隐式类型参数 `Self`，它指代“正在实现此接口的类型”。trait 也可以包含额外的类型参数。这些类型参数（包括 `Self`）可以[像通常那样](generics.md)受其他 trait 等约束。

<div class="rule" id="r-items.traits.impls"><a class="rule-link" href="#r-items.traits.impls" title="items.traits.impls"><span>[items<wbr>.traits<wbr>.impls]</span></a>
</div>

trait 通过单独的[实现](implementations.md)为特定类型实现。

<div class="rule" id="r-items.traits.associated-item-decls"><a class="rule-link" href="#r-items.traits.associated-item-decls" title="items.traits.associated-item-decls"><span>[items<wbr>.traits<wbr>.associated-item-decls]</span></a>
</div>

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

<div class="rule" id="r-items.traits.const-fn"><a class="rule-link" href="#r-items.traits.const-fn" title="items.traits.const-fn"><span>[items<wbr>.traits<wbr>.const-fn]</span></a>
</div>

trait 函数不得是 [`const`](functions.md#const-functions)。

<div class="rule" id="r-items.traits.bounds"><a class="rule-link" href="#r-items.traits.bounds" title="items.traits.bounds"><span>[items<wbr>.traits<wbr>.bounds]</span></a>
</div>

## trait 约束

泛型项可以将 trait 用作其类型参数上的[约束](../trait-bounds.md)。

<div class="rule" id="r-items.traits.generic"><a class="rule-link" href="#r-items.traits.generic" title="items.traits.generic"><span>[items<wbr>.traits<wbr>.generic]</span></a>
</div>

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

<div class="rule" id="r-items.traits.dyn-compatible"><a class="rule-link" href="#r-items.traits.dyn-compatible" title="items.traits.dyn-compatible"><span>[items<wbr>.traits<wbr>.dyn-compatible]</span></a>
</div>

## dyn 兼容性

<div class="rule" id="r-items.traits.dyn-compatible.intro"><a class="rule-link" href="#r-items.traits.dyn-compatible.intro" title="items.traits.dyn-compatible.intro"><span>[items<wbr>.traits<wbr>.dyn-compatible<wbr>.intro]</span></a>
</div>

dyn 兼容 trait 可以作为 [trait 对象](../types/trait-object.md)的基础 trait。如果 trait 具有以下性质，则它是 _dyn 兼容_ 的：

<div class="rule" id="r-items.traits.dyn-compatible.supertraits"><a class="rule-link" href="#r-items.traits.dyn-compatible.supertraits" title="items.traits.dyn-compatible.supertraits"><span>[items<wbr>.traits<wbr>.dyn-compatible<wbr>.supertraits]</span></a>
</div>

- 所有 [supertrait](#supertraits) 也必须是 dyn 兼容的。

<div class="rule" id="r-items.traits.dyn-compatible.sized"><a class="rule-link" href="#r-items.traits.dyn-compatible.sized" title="items.traits.dyn-compatible.sized"><span>[items<wbr>.traits<wbr>.dyn-compatible<wbr>.sized]</span></a>
</div>

- `Sized` 不得是 [supertrait](#supertraits)。换言之，它不得要求 `Self: Sized`。

<div class="rule" id="r-items.traits.dyn-compatible.associated-consts"><a class="rule-link" href="#r-items.traits.dyn-compatible.associated-consts" title="items.traits.dyn-compatible.associated-consts"><span>[items<wbr>.traits<wbr>.dyn-compatible<wbr>.associated-consts]</span></a>
</div>

- 它不得有任何关联常量。

<div class="rule" id="r-items.traits.dyn-compatible.associated-types"><a class="rule-link" href="#r-items.traits.dyn-compatible.associated-types" title="items.traits.dyn-compatible.associated-types"><span>[items<wbr>.traits<wbr>.dyn-compatible<wbr>.associated-types]</span></a>
</div>

- 它不得有任何带泛型的关联类型。

<div class="rule" id="r-items.traits.dyn-compatible.associated-functions"><a class="rule-link" href="#r-items.traits.dyn-compatible.associated-functions" title="items.traits.dyn-compatible.associated-functions"><span>[items<wbr>.traits<wbr>.dyn-compatible<wbr>.associated-functions]</span></a>
</div>

- 所有关联函数必须要么可从 trait 对象分派，要么显式不可分派：
  - 可分派函数必须：
    - 没有任何类型参数（但允许生命周期参数）。
    - 是一个[方法](associated-items.md#methods)，并且除了在接收者类型中之外不使用 `Self`。
    - 具有以下类型之一的接收者：
      - `&Self`（即 `&self`）
      - `&mut Self`（即 `&mut self`）
      - [`Box<Self>`](../special-types-and-traits.md#boxt)
      - [`Rc<Self>`](../special-types-and-traits.md#rct)
      - [`Arc<Self>`](../special-types-and-traits.md#arct)
      - [`Pin<P>`](../special-types-and-traits.md#pinp)，其中 `P` 是上述类型之一
    - 没有不透明返回类型；也就是说，
      - 不是 `async fn`（它有隐藏的 `Future` 类型）。
      - 没有返回位置 `impl Trait` 类型（`fn example(&self) -> impl Trait`）。
    - 没有 `where Self: Sized` 约束（类型为 `Self` 的接收者（即 `self`）会隐含此约束）。
  - 显式不可分派函数要求：
    - 具有 `where Self: Sized` 约束（类型为 `Self` 的接收者（即 `self`）会隐含此约束）。

<div class="rule" id="r-items.traits.dyn-compatible.async-traits"><a class="rule-link" href="#r-items.traits.dyn-compatible.async-traits" title="items.traits.dyn-compatible.async-traits"><span>[items<wbr>.traits<wbr>.dyn-compatible<wbr>.async-traits]</span></a>
</div>

- [`AsyncFn`](../../core/ops/async_function/trait.AsyncFn.html)、[`AsyncFnMut`](../../core/ops/async_function/trait.AsyncFnMut.html) 和 [`AsyncFnOnce`](../../core/ops/async_function/trait.AsyncFnOnce.html) trait 不是 dyn 兼容的。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 此概念以前称为 _object safety_。

</div>

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
let obj: Box<dyn DynIncompatible> = Box::new(S); // ERROR
```

```rust,compile_fail
// `Self: Sized` trait 是 dyn 不兼容的。
trait TraitWithSize where Self: Sized {}

struct S;
impl TraitWithSize for S {}
let obj: Box<dyn TraitWithSize> = Box::new(S); // ERROR
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

<div class="rule" id="r-items.traits.supertraits"><a class="rule-link" href="#r-items.traits.supertraits" title="items.traits.supertraits"><span>[items<wbr>.traits<wbr>.supertraits]</span></a>
</div>

## Supertrait

<div class="rule" id="r-items.traits.supertraits.intro"><a class="rule-link" href="#r-items.traits.supertraits.intro" title="items.traits.supertraits.intro"><span>[items<wbr>.traits<wbr>.supertraits<wbr>.intro]</span></a>
</div>

**Supertrait** 是为使某个类型实现特定 trait 而要求该类型必须实现的 trait。此外，在任何由某个 trait 约束的[泛型](generics.md)或 [trait 对象](../types/trait-object.md)处，都可以访问该 trait 的 supertrait 的关联项。

<div class="rule" id="r-items.traits.supertraits.decl"><a class="rule-link" href="#r-items.traits.supertraits.decl" title="items.traits.supertraits.decl"><span>[items<wbr>.traits<wbr>.supertraits<wbr>.decl]</span></a>
</div>

Supertrait 通过 trait 的 `Self` 类型上的 trait 约束声明，并且还传递地包括这些 trait 约束中所声明 trait 的 supertrait。trait 不能成为它自己的 supertrait，否则是错误。

<div class="rule" id="r-items.traits.supertraits.subtrait"><a class="rule-link" href="#r-items.traits.supertraits.subtrait" title="items.traits.supertraits.subtrait"><span>[items<wbr>.traits<wbr>.supertraits<wbr>.subtrait]</span></a>
</div>

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

<div class="rule" id="r-items.traits.safety"><a class="rule-link" href="#r-items.traits.safety" title="items.traits.safety"><span>[items<wbr>.traits<wbr>.safety]</span></a>
</div>

## Unsafe trait

<div class="rule" id="r-items.traits.safety.intro"><a class="rule-link" href="#r-items.traits.safety.intro" title="items.traits.safety.intro"><span>[items<wbr>.traits<wbr>.safety<wbr>.intro]</span></a>
</div>

以 `unsafe` 关键字开头的 trait 项表示_实现_该 trait 可能是[不安全](../unsafety.md)的。使用正确实现的 unsafe trait 是安全的。[trait 实现](implementations.md#trait-implementations)也必须以 `unsafe` 关键字开头。

[`Sync`](../special-types-and-traits.md#sync) 和 [`Send`](../special-types-and-traits.md#send) 是 unsafe trait 的示例。

<div class="rule" id="r-items.traits.params"><a class="rule-link" href="#r-items.traits.params" title="items.traits.params"><span>[items<wbr>.traits<wbr>.params]</span></a>
</div>

## 参数模式

<div class="rule" id="r-items.traits.params.patterns-no-body"><a class="rule-link" href="#r-items.traits.params.patterns-no-body" title="items.traits.params.patterns-no-body"><span>[items<wbr>.traits<wbr>.params<wbr>.patterns-no-body]</span></a>
</div>

没有函数体的关联函数中的参数只允许 [IDENTIFIER](../identifiers.md#grammar-IDENTIFIER) 或 `_` [通配符](../patterns.md#wildcard-pattern)模式，以及 [SelfParam](functions.md#grammar-SelfParam) 所允许的形式。当前允许 `mut` [IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)，但它已弃用，并将在未来成为硬错误。

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

<div class="rule" id="r-items.traits.params.patterns-with-body"><a class="rule-link" href="#r-items.traits.params.patterns-with-body" title="items.traits.params.patterns-with-body"><span>[items<wbr>.traits<wbr>.params<wbr>.patterns-with-body]</span></a>
</div>

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

<div class="rule" id="r-items.traits.params.pattern-required.edition2018"><a class="rule-link" href="#r-items.traits.params.pattern-required.edition2018" title="items.traits.params.pattern-required.edition2018"><span>[items<wbr>.traits<wbr>.params<wbr>.pattern-required<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2018 edition 之前，关联函数参数的模式是可选的：
 > 
 > ```rust,edition2015
 > // 2015 Edition
 > trait T {
 >     fn f(i32); // OK：不要求参数标识符
 > }
 > ```
 > 
 > 从 2018 edition 开始，模式不再是可选的。

</div>

<div class="rule" id="r-items.traits.params.restriction-patterns.edition2018"><a class="rule-link" href="#r-items.traits.params.restriction-patterns.edition2018" title="items.traits.params.restriction-patterns.edition2018"><span>[items<wbr>.traits<wbr>.params<wbr>.restriction-patterns<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2018 edition 之前，带有函数体的关联函数中的参数仅限于以下种类的模式：
 > 
 > - [IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)
 > - `mut` [IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)
 > - [`_`](../patterns.md#wildcard-pattern)
 > - `&` [IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)
 > - `&&` [IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)
 > 
 > ```rust,edition2015,compile_fail,E0642
 > // 2015 Edition
 > trait T {
 >     fn f1((a, b): (i32, i32)) {} // 错误：不允许使用模式
 > }
 > ```
 > 
 > 从 2018 开始，允许 [items.traits.params.patterns-with-body](traits.md#r-items.traits.params.patterns-with-body) 中所述的所有不可反驳模式。

</div>

<div class="rule" id="r-items.traits.associated-visibility"><a class="rule-link" href="#r-items.traits.associated-visibility" title="items.traits.associated-visibility"><span>[items<wbr>.traits<wbr>.associated-visibility]</span></a>
</div>

## 项可见性

<div class="rule" id="r-items.traits.associated-visibility.intro"><a class="rule-link" href="#r-items.traits.associated-visibility.intro" title="items.traits.associated-visibility.intro"><span>[items<wbr>.traits<wbr>.associated-visibility<wbr>.intro]</span></a>
</div>

trait 项在语法上允许使用 [Visibility](../visibility-and-privacy.md#grammar-Visibility) 注解，但在验证 trait 时会拒绝这种注解。这允许在不同使用上下文中用统一语法解析项。例如，可以对 trait 项使用空的 `vis` 宏片段说明符，而该宏规则还可以用于其他允许可见性的场景。

```rust
macro_rules! create_method {
    ($vis:vis $name:ident) => {
        $vis fn $name(&self) {}
    };
}

trait T1 {
    // Empty `vis` is allowed.
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