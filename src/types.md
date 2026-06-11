<div class="rule" id="r-type"><a class="rule-link" href="#r-type" title="type"><span>[type]</span></a>
</div>

# 类型

<div class="rule" id="r-type.intro"><a class="rule-link" href="#r-type.intro" title="type.intro"><span>[type<wbr>.intro]</span></a>
</div>

Rust 程序中的每个变量、项和值都有类型。_值_ 的 _类型_ 定义了如何解释保存该值的内存，以及可以对该值执行哪些操作。

<div class="rule" id="r-type.builtin"><a class="rule-link" href="#r-type.builtin" title="type.builtin"><span>[type<wbr>.builtin]</span></a>
</div>

内置类型以非平凡的方式紧密集成到语言中，这些方式无法用用户定义类型来模拟。

<div class="rule" id="r-type.user-defined"><a class="rule-link" href="#r-type.user-defined" title="type.user-defined"><span>[type<wbr>.user-defined]</span></a>
</div>

用户定义类型具有有限的能力。

<div class="rule" id="r-type.kinds"><a class="rule-link" href="#r-type.kinds" title="type.kinds"><span>[type<wbr>.kinds]</span></a>
</div>

类型列表如下：

- 原始类型：
  - [布尔](types/boolean.md) --- `bool`
  - [数值](types/numeric.md) --- 整数和浮点数
  - [`char`](types/char.md)
  - [`str`](types/str.md)
  - [never](types/never.md) --- `!` --- 没有值的类型
- 序列类型：
  - [元组](types/tuple.md)
  - [数组](types/array.md)
  - [切片](types/slice.md)
- 用户定义类型：
  - [结构体](types/struct.md)
  - [枚举](types/enum.md)
  - [联合体](types/union.md)
- 函数类型：
  - [函数](types/function-item.md)
  - [闭包](types/closure.md)
- 指针类型：
  - [引用](types/pointer.md#shared-references-)
  - [裸指针](types/pointer.md#raw-pointers-const-and-mut)
  - [函数指针](types/function-pointer.md)
- trait 类型：
  - [Trait 对象](types/trait-object.md)
  - [Impl trait](types/impl-trait.md)

<div class="rule" id="r-type.name"><a class="rule-link" href="#r-type.name" title="type.name"><span>[type<wbr>.name]</span></a>
</div>

## 类型表达式

<div class="rule" id="r-type.name.syntax"><a class="rule-link" href="#r-type.name.syntax" title="type.name.syntax"><span>[type<wbr>.name<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Type" onclick="show_railroad()">[Type](types.md#railroad-Type)</span> →  
      <span class="grammar-text">[TypeNoBounds](types.md#grammar-TypeNoBounds)</span>  
    \| <span class="grammar-text">[ImplTraitType](types/impl-trait.md#grammar-ImplTraitType)</span>  
    \| <span class="grammar-text">[TraitObjectType](types/trait-object.md#grammar-TraitObjectType)</span>

<span class="grammar-text grammar-production" id="grammar-TypeNoBounds" onclick="show_railroad()">[TypeNoBounds](types.md#railroad-TypeNoBounds)</span> →  
      <span class="grammar-text">[ParenthesizedType](types.md#grammar-ParenthesizedType)</span>  
    \| <span class="grammar-text">[ImplTraitTypeOneBound](types/impl-trait.md#grammar-ImplTraitTypeOneBound)</span>  
    \| <span class="grammar-text">[TraitObjectTypeOneBound](types/trait-object.md#grammar-TraitObjectTypeOneBound)</span>  
    \| <span class="grammar-text">[TypePath](paths.md#grammar-TypePath)</span>  
    \| <span class="grammar-text">[TupleType](types/tuple.md#grammar-TupleType)</span>  
    \| <span class="grammar-text">[NeverType](types/never.md#grammar-NeverType)</span>  
    \| <span class="grammar-text">[RawPointerType](types/pointer.md#grammar-RawPointerType)</span>  
    \| <span class="grammar-text">[ReferenceType](types/pointer.md#grammar-ReferenceType)</span>  
    \| <span class="grammar-text">[ArrayType](types/array.md#grammar-ArrayType)</span>  
    \| <span class="grammar-text">[SliceType](types/slice.md#grammar-SliceType)</span>  
    \| <span class="grammar-text">[InferredType](types/inferred.md#grammar-InferredType)</span>  
    \| <span class="grammar-text">[QualifiedPathInType](paths.md#grammar-QualifiedPathInType)</span>  
    \| <span class="grammar-text">[BareFunctionType](types/function-pointer.md#grammar-BareFunctionType)</span>  
    \| <span class="grammar-text">[MacroInvocation](macros.md#grammar-MacroInvocation)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 258px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Type"><svg class="railroad" viewBox="0 0 258 140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="types.md#grammar-Type">
<text class="comment" x="29" y="25">
Type</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 116 0 h 48"/>
<g class="sequence">
<a class="link" xlink:href="types.md#railroad-TypeNoBounds">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="42"/>
<text x="117" y="58">
TypeNoBounds</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 164 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 164 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 124 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="types/impl-trait.md#railroad-ImplTraitType">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="75"/>
<text x="121" y="91">
ImplTraitType</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 140 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="types/trait-object.md#railroad-TraitObjectType">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="108"/>
<text x="129" y="124">
TraitObjectType</text>
</g>
</a>
</g>
<path d=" M 233 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 223 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 330px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TypeNoBounds"><svg class="railroad" viewBox="0 0 330 503" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="types.md#grammar-TypeNoBounds">
<text class="comment" x="57" y="25">
TypeNoBounds</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 156 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0"/>
<g class="sequence">
<a class="link" xlink:href="types.md#railroad-ParenthesizedType">
<g class="nonterminal">
<rect height="22" width="156" x="59" y="42"/>
<text x="137" y="58">
ParenthesizedType</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 236 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 236 0 v -33"/>
<path d=" M 47 107 v 33 m 236 0 v -33"/>
<path d=" M 47 140 v 33 m 236 0 v -33"/>
<path d=" M 47 173 v 33 m 236 0 v -33"/>
<path d=" M 47 206 v 33 m 236 0 v -33"/>
<path d=" M 47 239 v 33 m 236 0 v -33"/>
<path d=" M 47 272 v 33 m 236 0 v -33"/>
<path d=" M 47 305 v 33 m 236 0 v -33"/>
<path d=" M 47 338 v 33 m 236 0 v -33"/>
<path d=" M 47 371 v 33 m 236 0 v -33"/>
<path d=" M 47 404 v 33 m 236 0 v -33"/>
<path d=" M 47 437 v 33 m 236 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 196 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="types/impl-trait.md#railroad-ImplTraitTypeOneBound">
<g class="nonterminal">
<rect height="22" width="196" x="59" y="75"/>
<text x="157" y="91">
ImplTraitTypeOneBound</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 212 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="types/trait-object.md#railroad-TraitObjectTypeOneBound">
<g class="nonterminal">
<rect height="22" width="212" x="59" y="108"/>
<text x="165" y="124">
TraitObjectTypeOneBound</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 84 0 h 128 m -61 0 l -5 -5 m 0 10 l 5 -5 m 61 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-TypePath">
<g class="nonterminal">
<rect height="22" width="84" x="59" y="141"/>
<text x="101" y="157">
TypePath</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 92 0 h 120 m -57 0 l -5 -5 m 0 10 l 5 -5 m 57 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="types/tuple.md#railroad-TupleType">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="174"/>
<text x="105" y="190">
TupleType</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 92 0 h 120 m -57 0 l -5 -5 m 0 10 l 5 -5 m 57 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="types/never.md#railroad-NeverType">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="207"/>
<text x="105" y="223">
NeverType</text>
</g>
</a>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 132 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="types/pointer.md#railroad-RawPointerType">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="240"/>
<text x="125" y="256">
RawPointerType</text>
</g>
</a>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 124 0 h 88 m -41 0 l -5 -5 m 0 10 l 5 -5 m 41 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="types/pointer.md#railroad-ReferenceType">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="273"/>
<text x="121" y="289">
ReferenceType</text>
</g>
</a>
</g>
<path d=" M 47 305 v 0 a 12 12 0 0 0 12 12 m 92 0 h 120 m -57 0 l -5 -5 m 0 10 l 5 -5 m 57 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="types/array.md#railroad-ArrayType">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="306"/>
<text x="105" y="322">
ArrayType</text>
</g>
</a>
</g>
<path d=" M 47 338 v 0 a 12 12 0 0 0 12 12 m 92 0 h 120 m -57 0 l -5 -5 m 0 10 l 5 -5 m 57 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="types/slice.md#railroad-SliceType">
<g class="nonterminal">
<rect height="22" width="92" x="59" y="339"/>
<text x="105" y="355">
SliceType</text>
</g>
</a>
</g>
<path d=" M 47 371 v 0 a 12 12 0 0 0 12 12 m 116 0 h 96 m -45 0 l -5 -5 m 0 10 l 5 -5 m 45 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="types/inferred.md#railroad-InferredType">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="372"/>
<text x="117" y="388">
InferredType</text>
</g>
</a>
</g>
<path d=" M 47 404 v 0 a 12 12 0 0 0 12 12 m 172 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-QualifiedPathInType">
<g class="nonterminal">
<rect height="22" width="172" x="59" y="405"/>
<text x="145" y="421">
QualifiedPathInType</text>
</g>
</a>
</g>
<path d=" M 47 437 v 0 a 12 12 0 0 0 12 12 m 148 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="types/function-pointer.md#railroad-BareFunctionType">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="438"/>
<text x="133" y="454">
BareFunctionType</text>
</g>
</a>
</g>
<path d=" M 47 470 v 0 a 12 12 0 0 0 12 12 m 140 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="macros.md#railroad-MacroInvocation">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="471"/>
<text x="129" y="487">
MacroInvocation</text>
</g>
</a>
</g>
<path d=" M 305 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 295 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-type.name.intro"><a class="rule-link" href="#r-type.name.intro" title="type.name.intro"><span>[type<wbr>.name<wbr>.intro]</span></a>
</div>

上方 [Type](types.md#r-type) 语法规则所定义的 _类型表达式_ 是引用类型的语法。它可以指代：

<div class="rule" id="r-type.name.sequence"><a class="rule-link" href="#r-type.name.sequence" title="type.name.sequence"><span>[type<wbr>.name<wbr>.sequence]</span></a>
</div>

- 序列类型（[元组](types/tuple.md)、[数组](types/array.md)、[切片](types/slice.md)）。

<div class="rule" id="r-type.name.path"><a class="rule-link" href="#r-type.name.path" title="type.name.path"><span>[type<wbr>.name<wbr>.path]</span></a>
</div>

- 可以引用以下内容的[类型路径](paths.md#paths-in-types)：
  - 原始类型（[布尔](types/boolean.md)、[数值](types/numeric.md)、[`char`](types/char.md)、[`str`](types/str.md)）。
  - 指向[项](items.md)的路径（[结构体](types/struct.md)、[枚举](types/enum.md)、[联合体](types/union.md)、[类型别名](items/type-aliases.md)、[trait](types/trait-object.md)）。
  - [`Self` 路径](paths.md#self-1)，其中 `Self` 是实现类型。
  - 泛型[类型参数](types/parameters.md)。

<div class="rule" id="r-type.name.pointer"><a class="rule-link" href="#r-type.name.pointer" title="type.name.pointer"><span>[type<wbr>.name<wbr>.pointer]</span></a>
</div>

- 指针类型（[引用](types/pointer.md#shared-references-)、[裸指针](types/pointer.md#raw-pointers-const-and-mut)、[函数指针](types/function-pointer.md)）。

<div class="rule" id="r-type.name.inference"><a class="rule-link" href="#r-type.name.inference" title="type.name.inference"><span>[type<wbr>.name<wbr>.inference]</span></a>
</div>

- 要求编译器确定类型的[推断类型](types/inferred.md)。

<div class="rule" id="r-type.name.grouped"><a class="rule-link" href="#r-type.name.grouped" title="type.name.grouped"><span>[type<wbr>.name<wbr>.grouped]</span></a>
</div>

- 用于消除歧义的[圆括号](#parenthesized-types)。

<div class="rule" id="r-type.name.trait"><a class="rule-link" href="#r-type.name.trait" title="type.name.trait"><span>[type<wbr>.name<wbr>.trait]</span></a>
</div>

- trait 类型：[Trait 对象](types/trait-object.md)和 [impl trait](types/impl-trait.md)。

<div class="rule" id="r-type.name.never"><a class="rule-link" href="#r-type.name.never" title="type.name.never"><span>[type<wbr>.name<wbr>.never]</span></a>
</div>

- [never](types/never.md) 类型。

<div class="rule" id="r-type.name.macro-expansion"><a class="rule-link" href="#r-type.name.macro-expansion" title="type.name.macro-expansion"><span>[type<wbr>.name<wbr>.macro-expansion]</span></a>
</div>

- 展开为类型表达式的[宏](macros.md)。

<div class="rule" id="r-type.name.parenthesized"><a class="rule-link" href="#r-type.name.parenthesized" title="type.name.parenthesized"><span>[type<wbr>.name<wbr>.parenthesized]</span></a>
</div>

### 带圆括号的类型

<div class="rule" id="r-type.name.parenthesized.syntax"><a class="rule-link" href="#r-type.name.parenthesized.syntax" title="type.name.parenthesized.syntax"><span>[type<wbr>.name<wbr>.parenthesized<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ParenthesizedType" onclick="show_railroad()">[ParenthesizedType](types.md#railroad-ParenthesizedType)</span> → <span class="grammar-literal">(</span> <span class="grammar-text">[Type](types.md#grammar-Type)</span> <span class="grammar-literal">)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 198px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ParenthesizedType"><svg class="railroad" viewBox="0 0 198 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="types.md#grammar-ParenthesizedType">
<text class="comment" x="74" y="25">
ParenthesizedType</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
(</text>
</g>
<a class="link" xlink:href="types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="73" y="42"/>
<text x="99" y="58">
Type</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="135" y="42"/>
<text x="149" y="58">
)</text>
</g>
<path d=" M 63 53 h 10"/>
<path d=" M 125 53 h 10"/>
</g>
<path d=" M 173 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 163 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-type.name.parenthesized.intro"><a class="rule-link" href="#r-type.name.parenthesized.intro" title="type.name.parenthesized.intro"><span>[type<wbr>.name<wbr>.parenthesized<wbr>.intro]</span></a>
</div>

在某些情况下，类型的组合可能存在歧义。可以在类型周围使用圆括号来避免歧义。例如，在[引用类型](types/pointer.md#shared-references-)中，用于[类型边界](trait-bounds.md)的 `+` 运算符不清楚边界应用于何处，因此必须使用圆括号。需要这种消歧的语法规则会使用 [TypeNoBounds](types.md#grammar-TypeNoBounds) 规则，而不是 [Type](types.md#grammar-Type)。

```rust
# use std::any::Any;
type T<'a> = &'a (dyn Any + Send);
```

<div class="rule" id="r-type.recursive"><a class="rule-link" href="#r-type.recursive" title="type.recursive"><span>[type<wbr>.recursive]</span></a>
</div>

## 递归类型

<div class="rule" id="r-type.recursive.intro"><a class="rule-link" href="#r-type.recursive.intro" title="type.recursive.intro"><span>[type<wbr>.recursive<wbr>.intro]</span></a>
</div>

名义类型，即[结构体](types/struct.md)、[枚举](types/enum.md)和[联合体](types/union.md)，可以是递归的。也就是说，每个 `enum` 变体或 `struct` 或 `union` 字段都可以直接或间接地引用包围它的 `enum` 或 `struct` 类型本身。

<div class="rule" id="r-type.recursive.constraint"><a class="rule-link" href="#r-type.recursive.constraint" title="type.recursive.constraint"><span>[type<wbr>.recursive<wbr>.constraint]</span></a>
</div>

这种递归有以下限制：

- 递归类型必须在递归中包含名义类型（不能只是[类型别名](items/type-aliases.md)，也不能是其他结构类型，例如[数组](types/array.md)或[元组](types/tuple.md)）。因此不允许 `type Rec = &'static [Rec]`。
- 递归类型的大小必须是有限的；换句话说，该类型中的递归字段必须是[指针类型](types/pointer.md)。

_递归_ 类型及其用法的一个示例：

```rust
enum List<T> {
    Nil,
    Cons(T, Box<List<T>>)
}

let a: List<i32> = List::Cons(7, Box::new(List::Cons(13, Box::new(List::Nil))));
```