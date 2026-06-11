<div class="rule" id="r-type.pointer"><a class="rule-link" href="#r-type.pointer" title="type.pointer"><span>[type<wbr>.pointer]</span></a>
</div>

# 指针类型

<div class="rule" id="r-type.pointer.intro"><a class="rule-link" href="#r-type.pointer.intro" title="type.pointer.intro"><span>[type<wbr>.pointer<wbr>.intro]</span></a>
</div>

所有指针都是显式的一等值。它们可以被移动或复制，可以存储到数据结构中，也可以从函数返回。

<div class="rule" id="r-type.pointer.reference"><a class="rule-link" href="#r-type.pointer.reference" title="type.pointer.reference"><span>[type<wbr>.pointer<wbr>.reference]</span></a>
</div>

## 引用（`&` 和 `&mut`）

<div class="rule" id="r-type.pointer.reference.syntax"><a class="rule-link" href="#r-type.pointer.reference.syntax" title="type.pointer.reference.syntax"><span>[type<wbr>.pointer<wbr>.reference<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ReferenceType" onclick="show_railroad()">[ReferenceType](pointer.md#railroad-ReferenceType)</span> → <span class="grammar-literal">&</span> <span class="grammar-text">[Lifetime](../trait-bounds.md#grammar-Lifetime)</span><sup>?</sup> <span class="grammar-literal">mut</span><sup>?</sup> <span class="grammar-text">[TypeNoBounds](../types.md#grammar-TypeNoBounds)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 468px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ReferenceType"><svg class="railroad" viewBox="0 0 468 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="pointer.md#grammar-ReferenceType">
<text class="comment" x="60" y="25">
ReferenceType</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="55"/>
<text x="49" y="71">
&amp;</text>
</g>
<g class="optional">
<path d=" M 73 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 84 m -39 0 l -5 -5 m 0 10 l 5 -5 m 39 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../trait-bounds.md#railroad-Lifetime">
<g class="nonterminal">
<rect height="22" width="84" x="97" y="55"/>
<text x="139" y="71">
Lifetime</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 215 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="239" y="55"/>
<text x="261" y="71">
mut</text>
</g>
</g>
<a class="link" xlink:href="../types.md#railroad-TypeNoBounds">
<g class="nonterminal">
<rect height="22" width="116" x="317" y="55"/>
<text x="375" y="71">
TypeNoBounds</text>
</g>
</a>
<path d=" M 63 66 h 10"/>
<path d=" M 205 66 h 10"/>
<path d=" M 307 66 h 10"/>
</g>
<path d=" M 443 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 433 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-type.pointer.reference.shared"><a class="rule-link" href="#r-type.pointer.reference.shared" title="type.pointer.reference.shared"><span>[type<wbr>.pointer<wbr>.reference<wbr>.shared]</span></a>
</div>

### 共享引用（`&`）

<div class="rule" id="r-type.pointer.reference.shared.intro"><a class="rule-link" href="#r-type.pointer.reference.shared.intro" title="type.pointer.reference.shared.intro"><span>[type<wbr>.pointer<wbr>.reference<wbr>.shared<wbr>.intro]</span></a>
</div>

共享引用指向由某个其他值拥有的内存。

<div class="rule" id="r-type.pointer.reference.shared.constraint-mutation"><a class="rule-link" href="#r-type.pointer.reference.shared.constraint-mutation" title="type.pointer.reference.shared.constraint-mutation"><span>[type<wbr>.pointer<wbr>.reference<wbr>.shared<wbr>.constraint-mutation]</span></a>
</div>

创建指向某个值的共享引用后，它会阻止对该值的直接变更。[内部可变性](../interior-mutability.md)在某些情况下为此提供例外。顾名思义，可以存在任意数量的指向同一个值的共享引用。共享引用类型写作 `&type`，在需要指定显式生命周期时写作 `&'a type`。

<div class="rule" id="r-type.pointer.reference.shared.copy"><a class="rule-link" href="#r-type.pointer.reference.shared.copy" title="type.pointer.reference.shared.copy"><span>[type<wbr>.pointer<wbr>.reference<wbr>.shared<wbr>.copy]</span></a>
</div>

复制引用是一种“浅”操作：它只涉及复制指针本身，也就是说，指针是 `Copy` 的。释放一个引用不会影响它所指向的值，但对[临时值](../expressions.md#temporaries)的引用会让该临时值在引用本身的作用域期间保持存活。

<div class="rule" id="r-type.pointer.reference.mut"><a class="rule-link" href="#r-type.pointer.reference.mut" title="type.pointer.reference.mut"><span>[type<wbr>.pointer<wbr>.reference<wbr>.mut]</span></a>
</div>

### 可变引用（`&mut`）

<div class="rule" id="r-type.pointer.reference.mut.intro"><a class="rule-link" href="#r-type.pointer.reference.mut.intro" title="type.pointer.reference.mut.intro"><span>[type<wbr>.pointer<wbr>.reference<wbr>.mut<wbr>.intro]</span></a>
</div>

可变引用指向由某个其他值拥有的内存。可变引用类型写作 `&mut type` 或 `&'a mut type`。

<div class="rule" id="r-type.pointer.reference.mut.copy"><a class="rule-link" href="#r-type.pointer.reference.mut.copy" title="type.pointer.reference.mut.copy"><span>[type<wbr>.pointer<wbr>.reference<wbr>.mut<wbr>.copy]</span></a>
</div>

一个（尚未被借用的）可变引用是访问其所指向值的唯一方式，因此它不是 `Copy` 的。

<div class="rule" id="r-type.pointer.raw"><a class="rule-link" href="#r-type.pointer.raw" title="type.pointer.raw"><span>[type<wbr>.pointer<wbr>.raw]</span></a>
</div>

## 裸指针（`*const` 和 `*mut`）

<div class="rule" id="r-type.pointer.raw.syntax"><a class="rule-link" href="#r-type.pointer.raw.syntax" title="type.pointer.raw.syntax"><span>[type<wbr>.pointer<wbr>.raw<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-RawPointerType" onclick="show_railroad()">[RawPointerType](pointer.md#railroad-RawPointerType)</span> → <span class="grammar-literal">\*</span> ( <span class="grammar-literal">mut</span> | <span class="grammar-literal">const</span> ) <span class="grammar-text">[TypeNoBounds](../types.md#grammar-TypeNoBounds)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 342px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RawPointerType"><svg class="railroad" viewBox="0 0 342 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="pointer.md#grammar-RawPointerType">
<text class="comment" x="64" y="25">
RawPointerType</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
*</text>
</g>
<g class="choice">
<path d=" M 73 53 h 24 m 44 0 h 40"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="97" y="42"/>
<text x="119" y="58">
mut</text>
</g>
<path d=" M 73 53 a 12 12 0 0 1 12 12 v 9 m 84 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 85 74 v 0 a 12 12 0 0 0 12 12 m 60 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="97" y="75"/>
<text x="127" y="91">
const</text>
</g>
</g>
<a class="link" xlink:href="../types.md#railroad-TypeNoBounds">
<g class="nonterminal">
<rect height="22" width="116" x="191" y="42"/>
<text x="249" y="58">
TypeNoBounds</text>
</g>
</a>
<path d=" M 63 53 h 10"/>
<path d=" M 181 53 h 10"/>
</g>
<path d=" M 317 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 307 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-type.pointer.raw.intro"><a class="rule-link" href="#r-type.pointer.raw.intro" title="type.pointer.raw.intro"><span>[type<wbr>.pointer<wbr>.raw<wbr>.intro]</span></a>
</div>

裸指针是没有安全性或存活性保证的指针。裸指针写作 `*const T` 或 `*mut T`。例如，`*const i32` 表示指向 32 位整数的裸指针。

<div class="rule" id="r-type.pointer.raw.copy"><a class="rule-link" href="#r-type.pointer.raw.copy" title="type.pointer.raw.copy"><span>[type<wbr>.pointer<wbr>.raw<wbr>.copy]</span></a>
</div>

复制或丢弃裸指针不会影响任何其他值的生命周期。

<div class="rule" id="r-type.pointer.raw.safety"><a class="rule-link" href="#r-type.pointer.raw.safety" title="type.pointer.raw.safety"><span>[type<wbr>.pointer<wbr>.raw<wbr>.safety]</span></a>
</div>

解引用裸指针是一种 [`unsafe` 操作](../unsafety.md)。

这也可以通过重新借用裸指针（`&*` 或 `&mut *`）来将它转换为引用。通常不鼓励使用裸指针；它们的存在是为了支持与外部代码的互操作，以及编写性能关键或低层级函数。

<div class="rule" id="r-type.pointer.raw.cmp"><a class="rule-link" href="#r-type.pointer.raw.cmp" title="type.pointer.raw.cmp"><span>[type<wbr>.pointer<wbr>.raw<wbr>.cmp]</span></a>
</div>

比较裸指针时，比较的是它们的地址，而不是它们所指向的内容。比较指向[动态大小类型](../dynamically-sized-types.md)的裸指针时，还会比较它们的附加数据。

<div class="rule" id="r-type.pointer.raw.constructor"><a class="rule-link" href="#r-type.pointer.raw.constructor" title="type.pointer.raw.constructor"><span>[type<wbr>.pointer<wbr>.raw<wbr>.constructor]</span></a>
</div>

可以直接使用 `&raw const` 创建 `*const` 指针，使用 `&raw mut` 创建 `*mut` 指针。

<div class="rule" id="r-type.pointer.smart"><a class="rule-link" href="#r-type.pointer.smart" title="type.pointer.smart"><span>[type<wbr>.pointer<wbr>.smart]</span></a>
</div>

## 智能指针

除了引用和裸指针之外，标准库还包含额外的“智能指针”类型。

<div class="rule" id="r-type.pointer.validity"><a class="rule-link" href="#r-type.pointer.validity" title="type.pointer.validity"><span>[type<wbr>.pointer<wbr>.validity]</span></a>
</div>

## 位有效性

<div class="rule" id="r-type.pointer.validity.pointer-fragment"><a class="rule-link" href="#r-type.pointer.validity.pointer-fragment" title="type.pointer.validity.pointer-fragment"><span>[type<wbr>.pointer<wbr>.validity<wbr>.pointer-fragment]</span></a>
</div>

尽管在大多数平台生成的机器码中，指针和引用与 `usize` 类似，但将引用或指针类型转换为非指针类型的语义目前尚未确定。因此，将指针或引用类型 `P` 转换为 `[u8; size_of::<P>()]` 可能不是有效的。

<div class="rule" id="r-type.pointer.validity.raw"><a class="rule-link" href="#r-type.pointer.validity.raw" title="type.pointer.validity.raw"><span>[type<wbr>.pointer<wbr>.validity<wbr>.raw]</span></a>
</div>

对于薄裸指针（即当 `T: Sized` 时，`P = *const T` 或 `P = *mut T`），反方向（从整数或整数数组转换为 `P`）始终是有效的。不过，通过这种转换生成的指针不得被解引用（即使 `T` 具有[零大小](../glossary.md#r-glossary.zst)也不行）。