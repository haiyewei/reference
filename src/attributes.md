<div class="rule" id="r-attributes"><a class="rule-link" href="#r-attributes" title="attributes"><span>[attributes]</span></a>
</div>

# 属性

<div class="rule" id="r-attributes.syntax"><a class="rule-link" href="#r-attributes.syntax" title="attributes.syntax"><span>[attributes<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-InnerAttribute" onclick="show_railroad()">[InnerAttribute](attributes.md#railroad-InnerAttribute)</span> → <span class="grammar-literal">\#</span> <span class="grammar-literal">!</span> <span class="grammar-literal">\[</span> <span class="grammar-text">[Attr](attributes.md#grammar-Attr)</span> <span class="grammar-literal">\]</span>

<span class="grammar-text grammar-production" id="grammar-OuterAttribute" onclick="show_railroad()">[OuterAttribute](attributes.md#railroad-OuterAttribute)</span> → <span class="grammar-literal">\#</span> <span class="grammar-literal">\[</span> <span class="grammar-text">[Attr](attributes.md#grammar-Attr)</span> <span class="grammar-literal">\]</span>

<span class="grammar-text grammar-production" id="grammar-Attr" onclick="show_railroad()">[Attr](attributes.md#railroad-Attr)</span> →  
      <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span> <span class="grammar-text">[AttrInput](attributes.md#grammar-AttrInput)</span><sup>?</sup>  
    \| <span class="grammar-literal">unsafe</span> <span class="grammar-literal">(</span> <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span> <span class="grammar-text">[AttrInput](attributes.md#grammar-AttrInput)</span><sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-AttrInput" onclick="show_railroad()">[AttrInput](attributes.md#railroad-AttrInput)</span> →  
      <span class="grammar-text">[DelimTokenTree](macros.md#grammar-DelimTokenTree)</span>  
    \| <span class="grammar-literal">=</span> <span class="grammar-text">[Expression](expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 274px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-InnerAttribute"><svg class="railroad" viewBox="0 0 274 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-InnerAttribute">
<text class="comment" x="64" y="25">
InnerAttribute</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
#</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="73" y="42"/>
<text x="87" y="58">
!</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="111" y="42"/>
<text x="125" y="58">
[</text>
</g>
<a class="link" xlink:href="attributes.md#railroad-Attr">
<g class="nonterminal">
<rect height="22" width="52" x="149" y="42"/>
<text x="175" y="58">
Attr</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="211" y="42"/>
<text x="225" y="58">
]</text>
</g>
<path d=" M 63 53 h 10"/>
<path d=" M 101 53 h 10"/>
<path d=" M 139 53 h 10"/>
<path d=" M 201 53 h 10"/>
</g>
<path d=" M 249 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 239 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 236px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-OuterAttribute"><svg class="railroad" viewBox="0 0 236 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-OuterAttribute">
<text class="comment" x="64" y="25">
OuterAttribute</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
#</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="73" y="42"/>
<text x="87" y="58">
[</text>
</g>
<a class="link" xlink:href="attributes.md#railroad-Attr">
<g class="nonterminal">
<rect height="22" width="52" x="111" y="42"/>
<text x="137" y="58">
Attr</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="173" y="42"/>
<text x="187" y="58">
]</text>
</g>
<path d=" M 63 53 h 10"/>
<path d=" M 101 53 h 10"/>
<path d=" M 163 53 h 10"/>
</g>
<path d=" M 211 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 201 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 522px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Attr"><svg class="railroad" viewBox="0 0 522 132" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-Attr">
<text class="comment" x="29" y="25">
Attr</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 66 h 24 m 250 0 h 178 m -86 0 l -5 -5 m 0 10 l 5 -5 m 86 0"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="55"/>
<text x="109" y="71">
SimplePath</text>
</g>
</a>
<g class="optional">
<path d=" M 169 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 92 m -43 0 l -5 -5 m 0 10 l 5 -5 m 43 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="attributes.md#railroad-AttrInput">
<g class="nonterminal">
<rect height="22" width="92" x="193" y="55"/>
<text x="239" y="71">
AttrInput</text>
</g>
</a>
</g>
<path d=" M 159 66 h 10"/>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 9 m 428 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 87 v 12 a 12 12 0 0 0 12 12 m 404 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="100"/>
<text x="93" y="116">
unsafe</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="137" y="100"/>
<text x="151" y="116">
(</text>
</g>
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="175" y="100"/>
<text x="225" y="116">
SimplePath</text>
</g>
</a>
<g class="optional">
<path d=" M 285 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 92 m -43 0 l -5 -5 m 0 10 l 5 -5 m 43 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="attributes.md#railroad-AttrInput">
<g class="nonterminal">
<rect height="22" width="92" x="309" y="100"/>
<text x="355" y="116">
AttrInput</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="435" y="100"/>
<text x="449" y="116">
)</text>
</g>
<path d=" M 127 111 h 10"/>
<path d=" M 165 111 h 10"/>
<path d=" M 275 111 h 10"/>
<path d=" M 425 111 h 10"/>
</g>
</g>
<path d=" M 497 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 487 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 256px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-AttrInput"><svg class="railroad" viewBox="0 0 256 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-AttrInput">
<text class="comment" x="46" y="25">
AttrInput</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 132 0 h 30"/>
<g class="sequence">
<a class="link" xlink:href="macros.md#railroad-DelimTokenTree">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="42"/>
<text x="125" y="58">
DelimTokenTree</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 162 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 138 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="75"/>
<text x="73" y="91">
=</text>
</g>
<a class="link" xlink:href="expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="97" y="75"/>
<text x="147" y="91">
Expression</text>
</g>
</a>
<path d=" M 87 86 h 10"/>
</g>
</g>
<path d=" M 231 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 221 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-attributes.intro"><a class="rule-link" href="#r-attributes.intro" title="attributes.intro"><span>[attributes<wbr>.intro]</span></a>
</div>

一个 _属性_ 是一种通用的、自由形式的元数据，会根据名称、约定、语言和编译器版本来解释。属性借鉴了 [ECMA-335](https://www.ecma-international.org/publications-and-standards/standards/ecma-335/) 中的 Attributes，其语法来自 [ECMA-334](https://www.ecma-international.org/publications-and-standards/standards/ecma-334/) (C#)。

<div class="rule" id="r-attributes.inner"><a class="rule-link" href="#r-attributes.inner" title="attributes.inner"><span>[attributes<wbr>.inner]</span></a>
</div>

_内部属性_ 写作在井号 (`#`) 之后带一个感叹号 (`!`)，应用于声明该属性所在的形式。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > // 应用于外围模块或 crate 的通用元数据。
 > #![crate_type = "lib"]
 > 
 > // 内部属性应用于整个函数。
 > fn some_unused_variables() {
 >   #![allow(unused_variables)]
 > 
 >   let x = ();
 >   let y = ();
 >   let z = ();
 > }
 > ```

</div>

<div class="rule" id="r-attributes.outer"><a class="rule-link" href="#r-attributes.outer" title="attributes.outer"><span>[attributes<wbr>.outer]</span></a>
</div>

_外部属性_ 写作时不在井号之后带感叹号，应用于该属性后面的形式。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > // 标记为单元测试的函数
 > #[test]
 > fn test_foo() {
 >     /* ... */
 > }
 > 
 > // 按条件编译的模块
 > #[cfg(target_os = "linux")]
 > mod bar {
 >     /* ... */
 > }
 > 
 > // 用于抑制警告/错误的 lint 属性
 > #[allow(non_camel_case_types)]
 > type int8_t = i8;
 > ```

</div>

<div class="rule" id="r-attributes.input"><a class="rule-link" href="#r-attributes.input" title="attributes.input"><span>[attributes<wbr>.input]</span></a>
</div>

属性由指向该属性的路径组成，后面可以跟一个可选的带定界符的 token 树，其解释由该属性定义。除宏属性以外的属性还允许输入为等号 (`=`) 后跟一个表达式。更多细节见下方的[元项语法](#meta-item-attribute-syntax)。

<div class="rule" id="r-attributes.safety"><a class="rule-link" href="#r-attributes.safety" title="attributes.safety"><span>[attributes<wbr>.safety]</span></a>
</div>

属性在应用时可能是不安全的。为避免在使用这些属性时产生未定义行为，必须满足某些编译器无法检查的义务。为断言这些义务已经满足，需要将属性包裹在 `unsafe(..)` 中，例如 `#[unsafe(no_mangle)]`。

以下属性是不安全的：

- [`export_name`](abi.md#the-export_name-attribute)
- [`link_section`](abi.md#the-link_section-attribute)
- [`naked`](attributes/codegen.md#the-naked-attribute)
- [`no_mangle`](abi.md#the-no_mangle-attribute)

<div class="rule" id="r-attributes.kind"><a class="rule-link" href="#r-attributes.kind" title="attributes.kind"><span>[attributes<wbr>.kind]</span></a>
</div>

属性可以分为以下几类：

- [内置属性](#built-in-attributes-index)
- [过程宏属性](procedural-macros.md#the-proc_macro_attribute-attribute)
- [派生宏辅助属性](procedural-macros.md#derive-macro-helper-attributes)
- [工具属性](#tool-attributes)

<div class="rule" id="r-attributes.allowed-position"><a class="rule-link" href="#r-attributes.allowed-position" title="attributes.allowed-position"><span>[attributes<wbr>.allowed-position]</span></a>
</div>

属性可以应用于语言中的许多形式：

- 所有[项声明](items.md)都接受外部属性，而[外部块](items/external-blocks.md)、[函数](items/functions.md)、[实现](items/implementations.md)和[模块](items/modules.md)接受内部属性。
- 大多数[语句](statements.md)接受外部属性（表达式语句的限制见[表达式属性](expressions.md#expression-attributes)）。
- [块表达式](expressions/block-expr.md)接受外部属性和内部属性，但仅限于该块表达式是[表达式语句](statements.md#expression-statements)的外层表达式或另一个块表达式的最终表达式时。
- [枚举](items/enumerations.md)变体以及[结构体](items/structs.md)和[联合体](items/unions.md)字段接受外部属性。
- [match 表达式分支](expressions/match-expr.md)接受外部属性。
- [泛型生命周期或类型形参](items/generics.md)接受外部属性。
- 表达式在有限情形下接受外部属性，详情见[表达式属性](expressions.md#expression-attributes)。
- [函数](items/functions.md)、[闭包](expressions/closure-expr.md)和[函数指针](types/function-pointer.md)形参接受外部属性。这包括函数指针和[外部块](items/external-blocks.html#variadic-functions)中用 `...` 表示的变参形参上的属性。
- [内联汇编](inline-assembly.md)模板字符串和操作数接受外部属性。语义上只接受某些属性；详情见 [asm.attributes.supported-attributes](inline-assembly.md#r-asm.attributes.supported-attributes)。

<div class="rule" id="r-attributes.meta"><a class="rule-link" href="#r-attributes.meta" title="attributes.meta"><span>[attributes<wbr>.meta]</span></a>
</div>

## 元项属性语法

<div class="rule" id="r-attributes.meta.intro"><a class="rule-link" href="#r-attributes.meta.intro" title="attributes.meta.intro"><span>[attributes<wbr>.meta<wbr>.intro]</span></a>
</div>

“元项”是大多数[内置属性](#built-in-attributes-index)用于 [Attr](attributes.md#grammar-Attr) 规则的语法。其语法如下：

<div class="rule" id="r-attributes.meta.syntax"><a class="rule-link" href="#r-attributes.meta.syntax" title="attributes.meta.syntax"><span>[attributes<wbr>.meta<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-MetaItem" onclick="show_railroad()">[MetaItem](attributes.md#railroad-MetaItem)</span> →  
      <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span>  
    \| <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span> <span class="grammar-literal">=</span> <span class="grammar-text">[Expression](expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span> <span class="grammar-literal">(</span> <span class="grammar-text">[MetaSeq](attributes.md#grammar-MetaSeq)</span><sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-MetaSeq" onclick="show_railroad()">[MetaSeq](attributes.md#railroad-MetaSeq)</span> →  
    <span class="grammar-text">[MetaItemInner](attributes.md#grammar-MetaItemInner)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[MetaItemInner](attributes.md#grammar-MetaItemInner)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-MetaItemInner" onclick="show_railroad()">[MetaItemInner](attributes.md#railroad-MetaItemInner)</span> →  
      <span class="grammar-text">[MetaItem](attributes.md#grammar-MetaItem)</span>  
    \| <span class="grammar-text">[Expression](expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 428px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MetaItem"><svg class="railroad" viewBox="0 0 428 152" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-MetaItem">
<text class="comment" x="43" y="25">
MetaItem</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 100 0 h 234 m -114 0 l -5 -5 m 0 10 l 5 -5 m 114 0"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="42"/>
<text x="109" y="58">
SimplePath</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 334 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 334 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 248 0 h 62 m -28 0 l -5 -5 m 0 10 l 5 -5 m 28 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="75"/>
<text x="109" y="91">
SimplePath</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="75"/>
<text x="183" y="91">
=</text>
</g>
<a class="link" xlink:href="expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="75"/>
<text x="257" y="91">
Expression</text>
</g>
</a>
<path d=" M 159 86 h 10"/>
<path d=" M 197 86 h 10"/>
</g>
<path d=" M 47 107 v 12 a 12 12 0 0 0 12 12 m 310 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="120"/>
<text x="109" y="136">
SimplePath</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="120"/>
<text x="183" y="136">
(</text>
</g>
<g class="optional">
<path d=" M 207 131 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 76 m -35 0 l -5 -5 m 0 10 l 5 -5 m 35 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="attributes.md#railroad-MetaSeq">
<g class="nonterminal">
<rect height="22" width="76" x="231" y="120"/>
<text x="269" y="136">
MetaSeq</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="341" y="120"/>
<text x="355" y="136">
)</text>
</g>
<path d=" M 159 131 h 10"/>
<path d=" M 197 131 h 10"/>
<path d=" M 331 131 h 10"/>
</g>
</g>
<path d=" M 403 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 393 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 524px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MetaSeq"><svg class="railroad" viewBox="0 0 524 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-MetaSeq">
<text class="comment" x="39" y="25">
MetaSeq</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="attributes.md#railroad-MetaItemInner">
<g class="nonterminal">
<rect height="22" width="124" x="35" y="55"/>
<text x="97" y="71">
MetaItemInner</text>
</g>
</a>
<g class="optional">
<path d=" M 169 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 186 m -90 0 l -5 -5 m 0 10 l 5 -5 m 90 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 193 66 h 12 m 162 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -162 m 84 0 l 5 -5 m 0 10 l -5 -5 m -84 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="205" y="55"/>
<text x="219" y="71">
,</text>
</g>
<a class="link" xlink:href="attributes.md#railroad-MetaItemInner">
<g class="nonterminal">
<rect height="22" width="124" x="243" y="55"/>
<text x="305" y="71">
MetaItemInner</text>
</g>
</a>
<path d=" M 233 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 413 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="437" y="55"/>
<text x="451" y="71">
,</text>
</g>
</g>
<path d=" M 159 66 h 10"/>
<path d=" M 403 66 h 10"/>
</g>
<path d=" M 499 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 489 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 218px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MetaItemInner"><svg class="railroad" viewBox="0 0 218 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-MetaItemInner">
<text class="comment" x="60" y="25">
MetaItemInner</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 84 0 h 40"/>
<g class="sequence">
<a class="link" xlink:href="attributes.md#railroad-MetaItem">
<g class="nonterminal">
<rect height="22" width="84" x="59" y="42"/>
<text x="101" y="58">
MetaItem</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 124 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 100 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="75"/>
<text x="109" y="91">
Expression</text>
</g>
</a>
</g>
<path d=" M 193 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 183 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-attributes.meta.literal-expr"><a class="rule-link" href="#r-attributes.meta.literal-expr" title="attributes.meta.literal-expr"><span>[attributes<wbr>.meta<wbr>.literal-expr]</span></a>
</div>

元项中的表达式必须经宏展开为字面量表达式，且这些字面量表达式不得包含整数或浮点类型后缀。不是字面量表达式的表达式会在语法上被接受（并且可以传给过程宏），但会在解析之后被拒绝。

<div class="rule" id="r-attributes.meta.order"><a class="rule-link" href="#r-attributes.meta.order" title="attributes.meta.order"><span>[attributes<wbr>.meta<wbr>.order]</span></a>
</div>

注意，如果属性出现在另一个宏内部，它将在那个外层宏之后展开。例如，以下代码会先展开 `Serialize` 过程宏；为了让 `include_str!` 调用能够展开，该过程宏必须保留此调用：

```rust ignore
#[derive(Serialize)]
struct Foo {
    #[doc = include_str!("x.md")]
    x: u32
}
```

<div class="rule" id="r-attributes.meta.order-macro"><a class="rule-link" href="#r-attributes.meta.order-macro" title="attributes.meta.order-macro"><span>[attributes<wbr>.meta<wbr>.order-macro]</span></a>
</div>

另外，属性中的宏只会在应用到该项的所有其他属性之后展开：

```rust ignore
#[macro_attr1] // expanded first
#[doc = mac!()] // `mac!` is expanded fourth.
#[macro_attr2] // expanded second
#[derive(MacroDerive1, MacroDerive2)] // expanded third
fn foo() {}
```

<div class="rule" id="r-attributes.meta.builtin"><a class="rule-link" href="#r-attributes.meta.builtin" title="attributes.meta.builtin"><span>[attributes<wbr>.meta<wbr>.builtin]</span></a>
</div>

各种内置属性使用元项语法的不同子集来指定其输入。以下语法规则展示了一些常用形式：

<div class="rule" id="r-attributes.meta.builtin.syntax"><a class="rule-link" href="#r-attributes.meta.builtin.syntax" title="attributes.meta.builtin.syntax"><span>[attributes<wbr>.meta<wbr>.builtin<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-MetaWord" onclick="show_railroad()">[MetaWord](attributes.md#railroad-MetaWord)</span> →  
    <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span>

<span class="grammar-text grammar-production" id="grammar-MetaNameValueStr" onclick="show_railroad()">[MetaNameValueStr](attributes.md#railroad-MetaNameValueStr)</span> →  
    <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-literal">=</span> ( <span class="grammar-text">[STRING_LITERAL](tokens.md#grammar-STRING_LITERAL)</span> | <span class="grammar-text">[RAW_STRING_LITERAL](tokens.md#grammar-RAW_STRING_LITERAL)</span> )

<span class="grammar-text grammar-production" id="grammar-MetaListPaths" onclick="show_railroad()">[MetaListPaths](attributes.md#railroad-MetaListPaths)</span> →  
    <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-literal">(</span> ( <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup> )<sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-MetaListIdents" onclick="show_railroad()">[MetaListIdents](attributes.md#railroad-MetaListIdents)</span> →  
    <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-literal">(</span> ( <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup> )<sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-MetaListNameValueStr" onclick="show_railroad()">[MetaListNameValueStr](attributes.md#railroad-MetaListNameValueStr)</span> →  
    <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-literal">(</span> ( <span class="grammar-text">[MetaNameValueStr](attributes.md#grammar-MetaNameValueStr)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[MetaNameValueStr](attributes.md#grammar-MetaNameValueStr)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup> )<sup>?</sup> <span class="grammar-literal">)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 170px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MetaWord"><svg class="railroad" viewBox="0 0 170 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-MetaWord">
<text class="comment" x="43" y="25">
MetaWord</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="42"/>
<text x="85" y="58">
IDENTIFIER</text>
</g>
</a>
</g>
<path d=" M 145 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 135 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 430px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MetaNameValueStr"><svg class="railroad" viewBox="0 0 430 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-MetaNameValueStr">
<text class="comment" x="71" y="25">
MetaNameValueStr</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="42"/>
<text x="85" y="58">
IDENTIFIER</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="145" y="42"/>
<text x="159" y="58">
=</text>
</g>
<g class="choice">
<path d=" M 183 53 h 24 m 132 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0"/>
<a class="link" xlink:href="tokens.md#railroad-STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="132" x="207" y="42"/>
<text x="273" y="58">
STRING_LITERAL</text>
</g>
</a>
<path d=" M 183 53 a 12 12 0 0 1 12 12 v 9 m 188 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 195 74 v 0 a 12 12 0 0 0 12 12 m 164 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="tokens.md#railroad-RAW_STRING_LITERAL">
<g class="nonterminal">
<rect height="22" width="164" x="207" y="75"/>
<text x="289" y="91">
RAW_STRING_LITERAL</text>
</g>
</a>
</g>
<path d=" M 135 53 h 10"/>
<path d=" M 173 53 h 10"/>
</g>
<path d=" M 405 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 395 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 710px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MetaListPaths"><svg class="railroad" viewBox="0 0 710 112" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-MetaListPaths">
<text class="comment" x="60" y="25">
MetaListPaths</text>
</a>
<g class="sequence">
<path d=" M 10 78 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="67"/>
<text x="85" y="83">
IDENTIFIER</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="145" y="67"/>
<text x="159" y="83">
(</text>
</g>
<g class="optional">
<path d=" M 183 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 406 m -200 0 l -5 -5 m 0 10 l 5 -5 m 200 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="67"/>
<text x="257" y="83">
SimplePath</text>
</g>
</a>
<g class="optional">
<path d=" M 317 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 162 m -78 0 l -5 -5 m 0 10 l 5 -5 m 78 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 341 78 h 12 m 138 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -138 m 72 0 l 5 -5 m 0 10 l -5 -5 m -72 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="353" y="67"/>
<text x="367" y="83">
,</text>
</g>
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="391" y="67"/>
<text x="441" y="83">
SimplePath</text>
</g>
</a>
<path d=" M 381 78 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 537 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="561" y="67"/>
<text x="575" y="83">
,</text>
</g>
</g>
<path d=" M 307 78 h 10"/>
<path d=" M 527 78 h 10"/>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="647" y="67"/>
<text x="661" y="83">
)</text>
</g>
<path d=" M 135 78 h 10"/>
<path d=" M 173 78 h 10"/>
<path d=" M 637 78 h 10"/>
</g>
<path d=" M 685 78 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 78 h 10"/>
<path d=" M 675 78 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 710px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MetaListIdents"><svg class="railroad" viewBox="0 0 710 112" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-MetaListIdents">
<text class="comment" x="64" y="25">
MetaListIdents</text>
</a>
<g class="sequence">
<path d=" M 10 78 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="67"/>
<text x="85" y="83">
IDENTIFIER</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="145" y="67"/>
<text x="159" y="83">
(</text>
</g>
<g class="optional">
<path d=" M 183 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 406 m -200 0 l -5 -5 m 0 10 l 5 -5 m 200 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="67"/>
<text x="257" y="83">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 317 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 162 m -78 0 l -5 -5 m 0 10 l 5 -5 m 78 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 341 78 h 12 m 138 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -138 m 72 0 l 5 -5 m 0 10 l -5 -5 m -72 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="353" y="67"/>
<text x="367" y="83">
,</text>
</g>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="391" y="67"/>
<text x="441" y="83">
IDENTIFIER</text>
</g>
</a>
<path d=" M 381 78 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 537 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="561" y="67"/>
<text x="575" y="83">
,</text>
</g>
</g>
<path d=" M 307 78 h 10"/>
<path d=" M 527 78 h 10"/>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="647" y="67"/>
<text x="661" y="83">
)</text>
</g>
<path d=" M 135 78 h 10"/>
<path d=" M 173 78 h 10"/>
<path d=" M 637 78 h 10"/>
</g>
<path d=" M 685 78 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 78 h 10"/>
<path d=" M 675 78 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 806px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MetaListNameValueStr"><svg class="railroad" viewBox="0 0 806 112" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="attributes.md#grammar-MetaListNameValueStr">
<text class="comment" x="88" y="25">
MetaListNameValueStr</text>
</a>
<g class="sequence">
<path d=" M 10 78 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="67"/>
<text x="85" y="83">
IDENTIFIER</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="145" y="67"/>
<text x="159" y="83">
(</text>
</g>
<g class="optional">
<path d=" M 183 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 502 m -248 0 l -5 -5 m 0 10 l 5 -5 m 248 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<a class="link" xlink:href="attributes.md#railroad-MetaNameValueStr">
<g class="nonterminal">
<rect height="22" width="148" x="207" y="67"/>
<text x="281" y="83">
MetaNameValueStr</text>
</g>
</a>
<g class="optional">
<path d=" M 365 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 210 m -102 0 l -5 -5 m 0 10 l 5 -5 m 102 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 389 78 h 12 m 186 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -186 m 96 0 l 5 -5 m 0 10 l -5 -5 m -96 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="401" y="67"/>
<text x="415" y="83">
,</text>
</g>
<a class="link" xlink:href="attributes.md#railroad-MetaNameValueStr">
<g class="nonterminal">
<rect height="22" width="148" x="439" y="67"/>
<text x="513" y="83">
MetaNameValueStr</text>
</g>
</a>
<path d=" M 429 78 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 633 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="657" y="67"/>
<text x="671" y="83">
,</text>
</g>
</g>
<path d=" M 355 78 h 10"/>
<path d=" M 623 78 h 10"/>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="743" y="67"/>
<text x="757" y="83">
)</text>
</g>
<path d=" M 135 78 h 10"/>
<path d=" M 173 78 h 10"/>
<path d=" M 733 78 h 10"/>
</g>
<path d=" M 781 78 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 78 h 10"/>
<path d=" M 771 78 h 10"/>
</g>
</g>
</svg>
</div>
</div>

元项的一些示例如下：

|样式|示例|
|--|--|
|[MetaWord](attributes.md#grammar-MetaWord)|`no_std`|
|[MetaNameValueStr](attributes.md#grammar-MetaNameValueStr)|`doc = "example"`|
|[MetaListPaths](attributes.md#grammar-MetaListPaths)|`allow(unused, clippy::inline_always)`|
|[MetaListIdents](attributes.md#grammar-MetaListIdents)|`macro_use(foo, bar)`|
|[MetaListNameValueStr](attributes.md#grammar-MetaListNameValueStr)|`link(name = "CoreFoundation", kind = "framework")`|

<div class="rule" id="r-attributes.activity"><a class="rule-link" href="#r-attributes.activity" title="attributes.activity"><span>[attributes<wbr>.activity]</span></a>
</div>

## 活跃属性和惰性属性

<div class="rule" id="r-attributes.activity.intro"><a class="rule-link" href="#r-attributes.activity.intro" title="attributes.activity.intro"><span>[attributes<wbr>.activity<wbr>.intro]</span></a>
</div>

属性要么是活跃的，要么是惰性的。在属性处理过程中，_活跃属性_ 会从其所在的形式上移除自身，而 _惰性属性_ 会保留下来。

[`cfg`](conditional-compilation.md#the-cfg-attribute) 和 [`cfg_attr`](conditional-compilation.md#the-cfg_attr-attribute) 属性是活跃的。[属性宏](procedural-macros.md#the-proc_macro_attribute-attribute)是活跃的。所有其他属性都是惰性的。

<div class="rule" id="r-attributes.tool"><a class="rule-link" href="#r-attributes.tool" title="attributes.tool"><span>[attributes<wbr>.tool]</span></a>
</div>

## 工具属性

<div class="rule" id="r-attributes.tool.intro"><a class="rule-link" href="#r-attributes.tool.intro" title="attributes.tool.intro"><span>[attributes<wbr>.tool<wbr>.intro]</span></a>
</div>

编译器可以允许外部工具使用属性，其中每个工具都位于 [tool prelude](names/preludes.md#tool-prelude) 中自己的模块内。属性路径的第一个段是工具名称，后面可以有一个或多个附加段，其解释由工具决定。

<div class="rule" id="r-attributes.tool.ignored"><a class="rule-link" href="#r-attributes.tool.ignored" title="attributes.tool.ignored"><span>[attributes<wbr>.tool<wbr>.ignored]</span></a>
</div>

未使用某个工具时，该工具的属性会被接受且不发出警告。使用该工具时，该工具负责处理和解释它的属性。

<div class="rule" id="r-attributes.tool.prelude"><a class="rule-link" href="#r-attributes.tool.prelude" title="attributes.tool.prelude"><span>[attributes<wbr>.tool<wbr>.prelude]</span></a>
</div>

如果使用了 [`no_implicit_prelude`](names/preludes.md#the-no_implicit_prelude-attribute) 属性，则工具属性不可用。

```rust
// 告诉 rustfmt 工具不要格式化以下元素。
#[rustfmt::skip]
struct S {
}

// 控制 clippy 工具的“圈复杂度”阈值。
#[clippy::cyclomatic_complexity = "100"]
pub fn f() {}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 目前识别工具 "clippy"、"rustfmt"、"diagnostic"、"miri" 和 "rust_analyzer"。

</div>

<div class="rule" id="r-attributes.builtin"><a class="rule-link" href="#r-attributes.builtin" title="attributes.builtin"><span>[attributes<wbr>.builtin]</span></a>
</div>

## 内置属性索引

以下是所有内置属性的索引。

- 条件编译
  
  - [`cfg`](conditional-compilation.md#the-cfg-attribute) --- 控制条件编译。
  - [`cfg_attr`](conditional-compilation.md#the-cfg_attr-attribute) --- 有条件地包含属性。
- 测试
  
  - [`test`](attributes/testing.md#the-test-attribute) --- 将函数标记为测试。
  - [`ignore`](attributes/testing.md#the-ignore-attribute) --- 禁用测试函数。
  - [`should_panic`](attributes/testing.md#the-should_panic-attribute) --- 指示测试应产生 panic。
- 派生
  
  - [`derive`](attributes/derive.md) --- 自动实现 trait。
  - [`automatically_derived`](attributes/derive.md#the-automatically_derived-attribute) --- 由 `derive` 创建的实现的标记。
- 宏
  
  - [`macro_export`](macros-by-example.md#the-macro_export-attribute) --- 导出 `macro_rules` 宏，以供跨 crate 使用。
  - [`macro_use`](macros-by-example.md#the-macro_use-attribute) --- 扩展宏可见性，或从其他 crate 导入宏。
  - [`proc_macro`](procedural-macros.md#the-proc_macro-attribute) --- 定义类函数宏。
  - [`proc_macro_derive`](procedural-macros.md#r-macro.proc.derive) --- 定义派生宏。
  - [`proc_macro_attribute`](procedural-macros.md#the-proc_macro_attribute-attribute) --- 定义属性宏。
- 诊断
  
  - [`allow`](attributes/diagnostics.md#lint-check-attributes), [`expect`](attributes/diagnostics.md#lint-check-attributes), [`warn`](attributes/diagnostics.md#lint-check-attributes), [`deny`](attributes/diagnostics.md#lint-check-attributes), [`forbid`](attributes/diagnostics.md#lint-check-attributes) --- 更改默认 lint 级别。
  - [`deprecated`](attributes/diagnostics.md#the-deprecated-attribute) --- 生成弃用通知。
  - [`must_use`](attributes/diagnostics.md#the-must_use-attribute) --- 为未使用的值生成 lint。
  - [`diagnostic::on_unimplemented`](attributes/diagnostics.md#the-diagnosticon_unimplemented-attribute) --- 如果某个 trait 未实现，则提示编译器发出特定错误消息。
  - [`diagnostic::do_not_recommend`](attributes/diagnostics.md#the-diagnosticdo_not_recommend-attribute) --- 提示编译器不要在错误消息中显示某个 trait impl。
- ABI、链接、符号和 FFI
  
  - [`link`](items/external-blocks.md#the-link-attribute) --- 指定要与 `extern` 块链接的原生库。
  - [`link_name`](items/external-blocks.md#the-link_name-attribute) --- 指定 `extern` 块中函数或静态项的符号名称。
  - [`link_ordinal`](items/external-blocks.md#the-link_ordinal-attribute) --- 指定 `extern` 块中函数或静态项的符号序号。
  - [`no_link`](items/extern-crates.md#the-no_link-attribute) --- 阻止链接 extern crate。
  - [`repr`](type-layout.md#representations) --- 控制类型布局。
  - [`crate_type`](linkage.md) --- 指定 crate 的类型（库、可执行文件等）。
  - [`no_main`](crates-and-source-files.md#the-no_main-attribute) --- 禁用发出 `main` 符号。
  - [`export_name`](abi.md#the-export_name-attribute) --- 指定函数或静态项的导出符号名称。
  - [`link_section`](abi.md#the-link_section-attribute) --- 指定函数或静态项要使用的目标文件节。
  - [`no_mangle`](abi.md#the-no_mangle-attribute) --- 禁用符号名称编码。
  - [`used`](abi.md#the-used-attribute) --- 强制编译器在输出目标文件中保留静态项。
  - [`crate_name`](crates-and-source-files.md#the-crate_name-attribute) --- 指定 crate 名称。
- 代码生成
  
  - [`inline`](attributes/codegen.md#the-inline-attribute) --- 提示内联代码。
  - [`cold`](attributes/codegen.md#the-cold-attribute) --- 提示某函数不太可能被调用。
  - [`naked`](attributes/codegen.md#the-naked-attribute) --- 防止编译器发出函数序言和尾声。
  - [`no_builtins`](attributes/codegen.md#the-no_builtins-attribute) --- 禁用某些内置函数的使用。
  - [`target_feature`](attributes/codegen.md#the-target_feature-attribute) --- 配置平台特定的代码生成。
  - [`track_caller`](attributes/codegen.md#the-track_caller-attribute) --- 将父级调用位置传递给 `std::panic::Location::caller()`。
  - [`instruction_set`](attributes/codegen.md#the-instruction_set-attribute) --- 指定用于生成函数代码的指令集。
- 文档
  
  - `doc` --- 指定文档。更多信息见 [The Rustdoc Book](../rustdoc/the-doc-attribute.html)。[文档注释](comments.md#doc-comments)会转换为 `doc` 属性。
- Prelude
  
  - [`no_std`](names/preludes.md#the-no_std-attribute) --- 从 prelude 中移除 std。
  - [`no_implicit_prelude`](names/preludes.md#the-no_implicit_prelude-attribute) --- 禁用模块内的 prelude 查找。
- 模块
  
  - [`path`](items/modules.md#the-path-attribute) --- 指定模块的文件名。
- 限制
  
  - [`recursion_limit`](attributes/limits.md#the-recursion_limit-attribute) --- 设置某些编译期操作的最大递归限制。
  - [`type_length_limit`](attributes/limits.md#the-type_length_limit-attribute) --- 设置多态类型的最大大小。
- 运行时
  
  - [`panic_handler`](panic.md#the-panic_handler-attribute) --- 设置用于处理 panic 的函数。
  - [`global_allocator`](runtime.md#the-global_allocator-attribute) --- 设置全局内存分配器。
  - [`windows_subsystem`](runtime.md#the-windows_subsystem-attribute) --- 指定要链接的 Windows 子系统。
- 特性
  
  - `feature` --- 用于启用不稳定或实验性编译器特性。有关 `rustc` 中实现的特性，见 [The Unstable Book](../unstable-book/index.html)。
- 类型系统
  
  - [`non_exhaustive`](attributes/type_system.md#the-non_exhaustive-attribute) --- 指示未来会为类型添加更多字段/变体。
- 调试器
  
  - [`debugger_visualizer`](attributes/debugger.md#the-debugger_visualizer-attribute) --- 嵌入一个指定类型调试器输出的文件。
  - [`collapse_debuginfo`](attributes/debugger.md#the-collapse_debuginfo-attribute) --- 控制宏调用如何编码到 debuginfo 中。