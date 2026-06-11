<div class="rule" id="r-items.type"><a class="rule-link" href="#r-items.type" title="items.type"><span>[items<wbr>.type]</span></a>
</div>

# 类型别名

<div class="rule" id="r-items.type.syntax"><a class="rule-link" href="#r-items.type.syntax" title="items.type.syntax"><span>[items<wbr>.type<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-TypeAlias" onclick="show_railroad()">[TypeAlias](type-aliases.md#railroad-TypeAlias)</span> →  
    <span class="grammar-literal">type</span> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-text">[GenericParams](generics.md#grammar-GenericParams)</span><sup>?</sup> ( <span class="grammar-literal">:</span> <span class="grammar-text">[Bounds](../trait-bounds.md#grammar-Bounds)</span> )<sup>?</sup>  
        <span class="grammar-text">[WhereClause](generics.md#grammar-WhereClause)</span><sup>?</sup>  
        ( <span class="grammar-literal">=</span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span> <span class="grammar-text">[WhereClause](generics.md#grammar-WhereClause)</span><sup>?</sup> )<sup>?</sup> <span class="grammar-literal">;</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 626px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TypeAlias"><svg class="railroad" viewBox="0 0 626 219" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="type-aliases.md#grammar-TypeAlias">
<text class="comment" x="46" y="25">
TypeAlias</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="stack">
<path d=" M 35 66 h 12"/>
<path d=" M 555 66 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -508 m 257 0 l 5 -5 m 0 10 l -5 -5 m -257 0 a 12 12 0 0 0 -12 12 v 12 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="47" y="55"/>
<text x="73" y="71">
type</text>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="109" y="55"/>
<text x="159" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 219 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-GenericParams">
<g class="nonterminal">
<rect height="22" width="124" x="243" y="55"/>
<text x="305" y="71">
GenericParams</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 401 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 106 m -50 0 l -5 -5 m 0 10 l 5 -5 m 50 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="425" y="55"/>
<text x="439" y="71">
:</text>
</g>
<a class="link" xlink:href="../trait-bounds.md#railroad-Bounds">
<g class="nonterminal">
<rect height="22" width="68" x="463" y="55"/>
<text x="497" y="71">
Bounds</text>
</g>
</a>
<path d=" M 453 66 h 10"/>
</g>
</g>
<path d=" M 99 66 h 10"/>
<path d=" M 209 66 h 10"/>
<path d=" M 391 66 h 10"/>
</g>
<path d=" M 203 126 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 h -156 m 81 0 l 5 -5 m 0 10 l -5 -5 m -81 0 a 12 12 0 0 0 -12 12 v 24 v 0 a 12 12 0 0 0 12 12 h 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 126 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-WhereClause">
<g class="nonterminal">
<rect height="22" width="108" x="71" y="115"/>
<text x="125" y="131">
WhereClause</text>
</g>
</a>
</g>
</g>
<path d=" M 389 198 h 178 m -86 0 l -5 -5 m 0 10 l 5 -5 m 86 0 a 12 12 0 0 0 12 -12 v -108 m 0 57 l -5 5 m 10 0 l -5 -5 m 0 -57 a 12 12 0 0 1 12 -12"/>
<g class="sequence">
<g class="optional">
<path d=" M 47 198 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 256 m -125 0 l -5 -5 m 0 10 l 5 -5 m 125 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="71" y="187"/>
<text x="85" y="203">
=</text>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="109" y="187"/>
<text x="135" y="203">
Type</text>
</g>
</a>
<g class="optional">
<path d=" M 171 198 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-WhereClause">
<g class="nonterminal">
<rect height="22" width="108" x="195" y="187"/>
<text x="249" y="203">
WhereClause</text>
</g>
</a>
</g>
<path d=" M 99 198 h 10"/>
<path d=" M 161 198 h 10"/>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="361" y="187"/>
<text x="375" y="203">
;</text>
</g>
<path d=" M 351 198 h 10"/>
</g>
</g>
<path d=" M 601 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 591 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.type.intro"><a class="rule-link" href="#r-items.type.intro" title="items.type.intro"><span>[items<wbr>.type<wbr>.intro]</span></a>
</div>

_类型别名_ 在其所在模块或块的[类型命名空间](../names/namespaces.md)中，为现有[类型](../types.md)定义一个新名称。类型别名使用关键字 `type` 声明。每个值都有一个单一、具体的类型，但可以实现若干不同的 trait，也可以与若干不同的类型约束兼容。

例如，以下代码将类型 `Point` 定义为类型 `(u8, u8)` 的同义名；后者是由一对 8 位无符号整数组成的类型：

```rust
type Point = (u8, u8);
let p: Point = (41, 68);
```

<div class="rule" id="r-items.type.constructor-alias"><a class="rule-link" href="#r-items.type.constructor-alias" title="items.type.constructor-alias"><span>[items<wbr>.type<wbr>.constructor-alias]</span></a>
</div>

指向元组结构体或单元结构体的类型别名不能用于限定该类型的构造器：

```rust,compile_fail
struct MyStruct(u32);

use MyStruct as UseAlias;
type TypeAlias = MyStruct;

let _ = UseAlias(5); // OK
let _ = TypeAlias(5); // Doesn't work
```

<div class="rule" id="r-items.type.associated-type"><a class="rule-link" href="#r-items.type.associated-type" title="items.type.associated-type"><span>[items<wbr>.type<wbr>.associated-type]</span></a>
</div>

类型别名在不作为[关联类型](associated-items.md#associated-types)使用时，必须包含一个 [Type](../types.md#grammar-Type)，且不得包含 [Bounds](../trait-bounds.md#grammar-Bounds)。

<div class="rule" id="r-items.type.associated-trait"><a class="rule-link" href="#r-items.type.associated-trait" title="items.type.associated-trait"><span>[items<wbr>.type<wbr>.associated-trait]</span></a>
</div>

类型别名在作为 [trait](traits.md) 中的[关联类型](associated-items.md#associated-types)使用时，不得包含 [Type](../types.md#grammar-Type) 说明，但可以包含 [Bounds](../trait-bounds.md#grammar-Bounds)。

<div class="rule" id="r-items.type.associated-impl"><a class="rule-link" href="#r-items.type.associated-impl" title="items.type.associated-impl"><span>[items<wbr>.type<wbr>.associated-impl]</span></a>
</div>

类型别名在作为 [trait impl](implementations.md#trait-implementations) 中的[关联类型](associated-items.md#associated-types)使用时，必须包含 [Type](../types.md#grammar-Type) 说明，且不得包含 [Bounds](../trait-bounds.md#grammar-Bounds)。

<div class="rule" id="r-items.type.deprecated"><a class="rule-link" href="#r-items.type.deprecated" title="items.type.deprecated"><span>[items<wbr>.type<wbr>.deprecated]</span></a>
</div>

[trait impl](implementations.md#trait-implementations) 中类型别名等号之前的 where 子句（如 `type TypeAlias<T> where T: Foo = Bar<T>`）已弃用。优先使用等号之后的 where 子句（如 `type TypeAlias<T> = Bar<T> where T: Foo`）。