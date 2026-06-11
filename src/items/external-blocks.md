<div class="rule" id="r-items.extern"><a class="rule-link" href="#r-items.extern" title="items.extern"><span>[items<wbr>.extern]</span></a>
</div>

# 外部块

<div class="rule" id="r-items.extern.syntax"><a class="rule-link" href="#r-items.extern.syntax" title="items.extern.syntax"><span>[items<wbr>.extern<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ExternBlock" onclick="show_railroad()">[ExternBlock](external-blocks.md#railroad-ExternBlock)</span> →  
    <span class="grammar-literal">unsafe</span><sup>?</sup>​[^unsafe-2024] <span class="grammar-literal">extern</span> <span class="grammar-text">[Abi](functions.md#grammar-Abi)</span><sup>?</sup> <span class="grammar-literal">{</span>  
        <span class="grammar-text">[InnerAttribute](../attributes.md#grammar-InnerAttribute)</span><sup>\*</sup>  
        <span class="grammar-text">[ExternalItem](external-blocks.md#grammar-ExternalItem)</span><sup>\*</sup>  
    <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-ExternalItem" onclick="show_railroad()">[ExternalItem](external-blocks.md#railroad-ExternalItem)</span> →  
    <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup> (  
        <span class="grammar-text">[MacroInvocationSemi](../macros.md#grammar-MacroInvocationSemi)</span>  
      \| <span class="grammar-text">[Visibility](../visibility-and-privacy.md#grammar-Visibility)</span><sup>?</sup> <span class="grammar-text">[StaticItem](static-items.md#grammar-StaticItem)</span>  
      \| <span class="grammar-text">[Visibility](../visibility-and-privacy.md#grammar-Visibility)</span><sup>?</sup> <span class="grammar-text">[Function](functions.md#grammar-Function)</span>  
    )

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 854px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ExternBlock"><svg class="railroad" viewBox="0 0 854 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="external-blocks.md#grammar-ExternBlock">
<text class="comment" x="53" y="25">
ExternBlock</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="55"/>
<text x="93" y="71">
unsafe</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="161" y="55"/>
<text x="195" y="71">
extern</text>
</g>
<g class="optional">
<path d=" M 239 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="functions.md#railroad-Abi">
<g class="nonterminal">
<rect height="22" width="44" x="263" y="55"/>
<text x="285" y="71">
Abi</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="341" y="55"/>
<text x="355" y="71">
{</text>
</g>
<g class="optional">
<path d=" M 379 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 403 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-InnerAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="415" y="55"/>
<text x="481" y="71">
InnerAttribute</text>
</g>
</a>
</g>
</g>
<g class="optional">
<path d=" M 593 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 140 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 617 66 h 12 m 116 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -116 m 61 0 l 5 -5 m 0 10 l -5 -5 m -61 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="external-blocks.md#railroad-ExternalItem">
<g class="nonterminal">
<rect height="22" width="116" x="629" y="55"/>
<text x="687" y="71">
ExternalItem</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="791" y="55"/>
<text x="805" y="71">
}</text>
</g>
<path d=" M 151 66 h 10"/>
<path d=" M 229 66 h 10"/>
<path d=" M 331 66 h 10"/>
<path d=" M 369 66 h 10"/>
<path d=" M 583 66 h 10"/>
<path d=" M 781 66 h 10"/>
</g>
<path d=" M 829 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 819 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 590px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ExternalItem"><svg class="railroad" viewBox="0 0 590 177" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="external-blocks.md#grammar-ExternalItem">
<text class="comment" x="57" y="25">
ExternalItem</text>
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
<path d=" M 249 66 h 24 m 172 0 h 110 m -52 0 l -5 -5 m 0 10 l 5 -5 m 52 0"/>
<g class="sequence">
<a class="link" xlink:href="../macros.md#railroad-MacroInvocationSemi">
<g class="nonterminal">
<rect height="22" width="172" x="273" y="55"/>
<text x="359" y="71">
MacroInvocationSemi</text>
</g>
</a>
</g>
<path d=" M 249 66 a 12 12 0 0 1 12 12 v 9 m 282 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 261 99 v 33 m 282 0 v -33"/>
<path d=" M 261 87 v 12 a 12 12 0 0 0 12 12 m 258 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
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
<a class="link" xlink:href="static-items.md#railroad-StaticItem">
<g class="nonterminal">
<rect height="22" width="100" x="431" y="100"/>
<text x="481" y="116">
StaticItem</text>
</g>
</a>
<path d=" M 421 111 h 10"/>
</g>
<path d=" M 261 132 v 12 a 12 12 0 0 0 12 12 m 242 0 h 16 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="optional">
<path d=" M 273 156 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../visibility-and-privacy.md#railroad-Visibility">
<g class="nonterminal">
<rect height="22" width="100" x="297" y="145"/>
<text x="347" y="161">
Visibility</text>
</g>
</a>
</g>
<a class="link" xlink:href="functions.md#railroad-Function">
<g class="nonterminal">
<rect height="22" width="84" x="431" y="145"/>
<text x="473" y="161">
Function</text>
</g>
</a>
<path d=" M 421 156 h 10"/>
</g>
</g>
<path d=" M 239 66 h 10"/>
</g>
<path d=" M 565 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 555 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

[^unsafe-2024]: 从 2024 Edition 开始，语义上要求使用 `unsafe` 关键字。

<div class="rule" id="r-items.extern.intro"><a class="rule-link" href="#r-items.extern.intro" title="items.extern.intro"><span>[items<wbr>.extern<wbr>.intro]</span></a>
</div>

外部块提供当前 crate 中未_定义_的项的_声明\_，并且是 Rust 外部函数接口（FFI）的基础。它们类似于未经检查的导入。

<div class="rule" id="r-items.extern.allowed-kinds"><a class="rule-link" href="#r-items.extern.allowed-kinds" title="items.extern.allowed-kinds"><span>[items<wbr>.extern<wbr>.allowed-kinds]</span></a>
</div>

外部块中允许两种项_声明\_：[函数](functions.md)和[静态项](static-items.md)。

<div class="rule" id="r-items.extern.safety"><a class="rule-link" href="#r-items.extern.safety" title="items.extern.safety"><span>[items<wbr>.extern<wbr>.safety]</span></a>
</div>

调用外部块中声明的 unsafe 函数，或访问其中声明的 unsafe 静态项，只允许在 [`unsafe` 上下文](../unsafe-keyword.md)中进行。

<div class="rule" id="r-items.extern.namespace"><a class="rule-link" href="#r-items.extern.namespace" title="items.extern.namespace"><span>[items<wbr>.extern<wbr>.namespace]</span></a>
</div>

外部块会在其所在模块或块的[值命名空间](../names/namespaces.md)中定义它的函数和静态项。

<div class="rule" id="r-items.extern.unsafe-required"><a class="rule-link" href="#r-items.extern.unsafe-required" title="items.extern.unsafe-required"><span>[items<wbr>.extern<wbr>.unsafe-required]</span></a>
</div>

对于外部块，语义上要求 `unsafe` 关键字出现在 `extern` 关键字之前。

<div class="rule" id="r-items.extern.edition2024"><a class="rule-link" href="#r-items.extern.edition2024" title="items.extern.edition2024"><span>[items<wbr>.extern<wbr>.edition2024]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2024</span> Edition differences</p>
 > 
 > 在 2024 edition 之前，`unsafe` 关键字是可选的。只有当外部块本身被标记为 `unsafe` 时，才允许使用 `safe` 和 `unsafe` 项限定符。

</div>

<div class="rule" id="r-items.extern.fn"><a class="rule-link" href="#r-items.extern.fn" title="items.extern.fn"><span>[items<wbr>.extern<wbr>.fn]</span></a>
</div>

## 函数

<div class="rule" id="r-items.extern.fn.body"><a class="rule-link" href="#r-items.extern.fn.body" title="items.extern.fn.body"><span>[items<wbr>.extern<wbr>.fn<wbr>.body]</span></a>
</div>

外部块中的函数以与其他 Rust 函数相同的方式声明，区别在于它们不得有函数体，而是以分号结束。

<div class="rule" id="r-items.extern.fn.param-patterns"><a class="rule-link" href="#r-items.extern.fn.param-patterns" title="items.extern.fn.param-patterns"><span>[items<wbr>.extern<wbr>.fn<wbr>.param-patterns]</span></a>
</div>

参数中不允许使用模式，只可以使用 [IDENTIFIER](../identifiers.md#grammar-IDENTIFIER) 或 `_`。

<div class="rule" id="r-items.extern.fn.qualifiers"><a class="rule-link" href="#r-items.extern.fn.qualifiers" title="items.extern.fn.qualifiers"><span>[items<wbr>.extern<wbr>.fn<wbr>.qualifiers]</span></a>
</div>

允许使用 `safe` 和 `unsafe` 函数限定符，但不允许使用其他函数限定符（例如 `const`、`async`、`extern`）。

<div class="rule" id="r-items.extern.fn.foreign-abi"><a class="rule-link" href="#r-items.extern.fn.foreign-abi" title="items.extern.fn.foreign-abi"><span>[items<wbr>.extern<wbr>.fn<wbr>.foreign-abi]</span></a>
</div>

外部块中的函数可以由 Rust 代码调用，就像在 Rust 中定义的函数一样。Rust 编译器会自动在 Rust ABI 与外部 ABI 之间转换。

<div class="rule" id="r-items.extern.fn.safety"><a class="rule-link" href="#r-items.extern.fn.safety" title="items.extern.fn.safety"><span>[items<wbr>.extern<wbr>.fn<wbr>.safety]</span></a>
</div>

在 extern 块中声明的函数默认隐式为 `unsafe`，除非存在 `safe` 函数限定符。

<div class="rule" id="r-items.extern.fn.fn-ptr"><a class="rule-link" href="#r-items.extern.fn.fn-ptr" title="items.extern.fn.fn-ptr"><span>[items<wbr>.extern<wbr>.fn<wbr>.fn-ptr]</span></a>
</div>

当被强制转换为函数指针时，在 extern 块中声明的函数具有类型 `for<'l1, ..., 'lm> extern "abi" fn(A1, ..., An) -> R`，其中 `'l1`、...、`'lm` 是它的生命周期参数，`A1`、...、`An` 是其参数的声明类型，`R` 是声明的返回类型。

<div class="rule" id="r-items.extern.static"><a class="rule-link" href="#r-items.extern.static" title="items.extern.static"><span>[items<wbr>.extern<wbr>.static]</span></a>
</div>

## 静态项

<div class="rule" id="r-items.extern.static.intro"><a class="rule-link" href="#r-items.extern.static.intro" title="items.extern.static.intro"><span>[items<wbr>.extern<wbr>.static<wbr>.intro]</span></a>
</div>

外部块中的静态项以与外部块之外的[静态项](static-items.md)相同的方式声明，但它们没有用于初始化其值的表达式。

<div class="rule" id="r-items.extern.static.safety"><a class="rule-link" href="#r-items.extern.static.safety" title="items.extern.static.safety"><span>[items<wbr>.extern<wbr>.static<wbr>.safety]</span></a>
</div>

除非在 extern 块中声明的静态项被限定为 `safe`，否则访问该项就是 `unsafe`，无论它是否可变；因为没有任何东西能保证该静态项内存中的位模式对其声明类型是有效的，这是因为某些任意代码（例如 C 代码）负责初始化该静态项。

<div class="rule" id="r-items.extern.static.mut"><a class="rule-link" href="#r-items.extern.static.mut" title="items.extern.static.mut"><span>[items<wbr>.extern<wbr>.static<wbr>.mut]</span></a>
</div>

extern 静态项可以是不可变的，也可以是可变的，就像外部块之外的[静态项](static-items.md)一样。

<div class="rule" id="r-items.extern.static.read-only"><a class="rule-link" href="#r-items.extern.static.read-only" title="items.extern.static.read-only"><span>[items<wbr>.extern<wbr>.static<wbr>.read-only]</span></a>
</div>

不可变静态项_必须_在任何 Rust 代码执行之前初始化。仅在 Rust 代码从该静态项读取之前完成初始化是不够的。一旦 Rust 代码运行，修改不可变静态项（无论从 Rust 内部还是外部修改）都是 UB，除非修改发生在 `UnsafeCell` 内部的字节上。

<div class="rule" id="r-items.extern.abi"><a class="rule-link" href="#r-items.extern.abi" title="items.extern.abi"><span>[items<wbr>.extern<wbr>.abi]</span></a>
</div>

## ABI

<div class="rule" id="r-items.extern.abi.intro"><a class="rule-link" href="#r-items.extern.abi.intro" title="items.extern.abi.intro"><span>[items<wbr>.extern<wbr>.abi<wbr>.intro]</span></a>
</div>

`extern` 关键字后可以跟一个可选的 [ABI](../glossary.md#r-glossary.abi) 字符串。ABI 指定块中函数的调用约定。调用约定为函数定义低层接口，例如参数如何放入寄存器或栈中、返回值如何传递，以及由谁负责清理栈。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > // Windows API 的接口。
 > unsafe extern "system" { /* ... */ }
 > ```

</div>

<div class="rule" id="r-items.extern.abi.default"><a class="rule-link" href="#r-items.extern.abi.default" title="items.extern.abi.default"><span>[items<wbr>.extern<wbr>.abi<wbr>.default]</span></a>
</div>

如果未指定 ABI 字符串，则默认为 `"C"`。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 不带显式 ABI 的 `extern` 语法正在逐步淘汰，因此最好始终显式写出 ABI。
 > 
 > 更多细节见 [Rust issue #134986](https://github.com/rust-lang/rust/issues/134986)。

</div>

<div class="rule" id="r-items.extern.abi.standard"><a class="rule-link" href="#r-items.extern.abi.standard" title="items.extern.abi.standard"><span>[items<wbr>.extern<wbr>.abi<wbr>.standard]</span></a>
</div>

以下 ABI 字符串在所有平台上都受支持：

<div class="rule" id="r-items.extern.abi.rust"><a class="rule-link" href="#r-items.extern.abi.rust" title="items.extern.abi.rust"><span>[items<wbr>.extern<wbr>.abi<wbr>.rust]</span></a>
</div>

- `unsafe extern "Rust"` --- Rust 函数和闭包的原生调用约定。当函数声明未使用 [`extern fn`](functions.md#r-items.fn.extern) 时，这是默认值。Rust ABI 不提供稳定性保证。

<div class="rule" id="r-items.extern.abi.c"><a class="rule-link" href="#r-items.extern.abi.c" title="items.extern.abi.c"><span>[items<wbr>.extern<wbr>.abi<wbr>.c]</span></a>
</div>

- `unsafe extern "C"` --- "C" ABI 与目标平台上主流 C 编译器所选择的默认 ABI 匹配。

<div class="rule" id="r-items.extern.abi.system"><a class="rule-link" href="#r-items.extern.abi.system" title="items.extern.abi.system"><span>[items<wbr>.extern<wbr>.abi<wbr>.system]</span></a>
</div>

- `unsafe extern "system"` --- 这等价于 `extern "C"`，但在 Windows x86_32 上例外：对于非变参函数，它等价于 `"stdcall"`；对于变参函数，它等价于 `"C"`。
  
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > 由于 Windows 上正确的底层 ABI 与目标相关，在尝试链接未使用显式定义 ABI 的 Windows API 函数时，最好使用 `extern "system"`。
  
  </div>
  

<div class="rule" id="r-items.extern.abi.unwind"><a class="rule-link" href="#r-items.extern.abi.unwind" title="items.extern.abi.unwind"><span>[items<wbr>.extern<wbr>.abi<wbr>.unwind]</span></a>
</div>

- `extern "C-unwind"` 和 `extern "system-unwind"` --- 分别与 `"C"` 和 `"system"` 相同，但当被调用方进行 unwind（通过 panic 或抛出 C++ 风格异常）时具有[不同的行为](functions.md#unwinding)。

<div class="rule" id="r-items.extern.abi.platform"><a class="rule-link" href="#r-items.extern.abi.platform" title="items.extern.abi.platform"><span>[items<wbr>.extern<wbr>.abi<wbr>.platform]</span></a>
</div>

还有一些平台特定的 ABI 字符串：

<div class="rule" id="r-items.extern.abi.cdecl"><a class="rule-link" href="#r-items.extern.abi.cdecl" title="items.extern.abi.cdecl"><span>[items<wbr>.extern<wbr>.abi<wbr>.cdecl]</span></a>
</div>

- `unsafe extern "cdecl"` --- x86_32 C 代码通常使用的调用约定。
  
  - 仅在 x86_32 目标上可用。
  - 对应于 MSVC 的 `__cdecl` 以及 GCC 和 clang 的 `__attribute__((cdecl))`。
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > 详情见：
   > 
   > - <https://learn.microsoft.com/en-us/cpp/cpp/cdecl>
   > - <https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl>
  
  </div>
  

<div class="rule" id="r-items.extern.abi.stdcall"><a class="rule-link" href="#r-items.extern.abi.stdcall" title="items.extern.abi.stdcall"><span>[items<wbr>.extern<wbr>.abi<wbr>.stdcall]</span></a>
</div>

- `unsafe extern "stdcall"` --- [Win32 API](https://learn.microsoft.com/en-us/windows/win32/api/) 在 x86_32 上通常使用的调用约定。
  
  - 仅在 x86_32 目标上可用。
  - 对应于 MSVC 的 `__stdcall` 以及 GCC 和 clang 的 `__attribute__((stdcall))`。
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > 详情见：
   > 
   > - <https://learn.microsoft.com/en-us/cpp/cpp/stdcall>
   > - <https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall>
  
  </div>
  

<div class="rule" id="r-items.extern.abi.win64"><a class="rule-link" href="#r-items.extern.abi.win64" title="items.extern.abi.win64"><span>[items<wbr>.extern<wbr>.abi<wbr>.win64]</span></a>
</div>

- `unsafe extern "win64"` --- Windows x64 ABI。
  
  - 仅在 x86_64 目标上可用。
  - 在 Windows x86_64 目标上，"win64" 与 "C" ABI 相同。
  - 对应于 GCC 和 clang 的 `__attribute__((ms_abi))`。
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > 详情见：
   > 
   > - <https://learn.microsoft.com/en-us/cpp/build/x64-software-conventions>
   > - <https://en.wikipedia.org/wiki/X86_calling_conventions#Microsoft_x64_calling_convention>
  
  </div>
  

<div class="rule" id="r-items.extern.abi.sysv64"><a class="rule-link" href="#r-items.extern.abi.sysv64" title="items.extern.abi.sysv64"><span>[items<wbr>.extern<wbr>.abi<wbr>.sysv64]</span></a>
</div>

- `unsafe extern "sysv64"` --- System V ABI。
  
  - 仅在 x86_64 目标上可用。
  - 在非 Windows x86_64 目标上，"sysv64" 与 "C" ABI 相同。
  - 对应于 GCC 和 clang 的 `__attribute__((sysv_abi))`。
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > 详情见：
   > 
   > - <https://wiki.osdev.org/System_V_ABI>
   > - <https://en.wikipedia.org/wiki/X86_calling_conventions#System_V_AMD64_ABI>
  
  </div>
  

<div class="rule" id="r-items.extern.abi.aapcs"><a class="rule-link" href="#r-items.extern.abi.aapcs" title="items.extern.abi.aapcs"><span>[items<wbr>.extern<wbr>.abi<wbr>.aapcs]</span></a>
</div>

- `unsafe extern "aapcs"` --- ARM 的软浮点 ABI。
  
  - 仅在 ARM32 目标上可用。
  - 在软浮点 ARM32 上，"aapcs" 与 "C" ABI 相同。
  - 对应于 clang 的 `__attribute__((pcs("aapcs")))`。
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > 详情见：
   > 
   > - [Arm Procedure Call Standard](https://developer.arm.com/documentation/107656/0101/Getting-started-with-Armv8-M-based-systems/Procedure-Call-Standard-for-Arm-Architecture--AAPCS-)
  
  </div>
  

<div class="rule" id="r-items.extern.abi.fastcall"><a class="rule-link" href="#r-items.extern.abi.fastcall" title="items.extern.abi.fastcall"><span>[items<wbr>.extern<wbr>.abi<wbr>.fastcall]</span></a>
</div>

- `unsafe extern "fastcall"` --- stdcall 的一种“快速”变体，会在寄存器中传递某些参数。
  
  - 仅在 x86_32 目标上可用。
  - 对应于 MSVC 的 `__fastcall` 以及 GCC 和 clang 的 `__attribute__((fastcall))`。
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > 详情见：
   > 
   > - <https://learn.microsoft.com/en-us/cpp/cpp/fastcall>
   > - <https://en.wikipedia.org/wiki/X86_calling_conventions#Microsoft_fastcall>
  
  </div>
  

<div class="rule" id="r-items.extern.abi.thiscall"><a class="rule-link" href="#r-items.extern.abi.thiscall" title="items.extern.abi.thiscall"><span>[items<wbr>.extern<wbr>.abi<wbr>.thiscall]</span></a>
</div>

- `unsafe extern "thiscall"` --- x86_32 MSVC 上 C++ 类成员函数通常使用的调用约定。
  
  - 仅在 x86_32 目标上可用。
  - 对应于 MSVC 的 `__thiscall` 以及 GCC 和 clang 的 `__attribute__((thiscall))`。
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > 详情见：
   > 
   > - <https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall>
   > - <https://learn.microsoft.com/en-us/cpp/cpp/thiscall>
  
  </div>
  

<div class="rule" id="r-items.extern.abi.efiapi"><a class="rule-link" href="#r-items.extern.abi.efiapi" title="items.extern.abi.efiapi"><span>[items<wbr>.extern<wbr>.abi<wbr>.efiapi]</span></a>
</div>

- `unsafe extern "efiapi"` --- [UEFI](https://uefi.org/specifications) 函数使用的 ABI。
  - 仅在 x86 和 ARM 目标（32 位和 64 位）上可用。

<div class="rule" id="r-items.extern.abi.platform-unwind-variants"><a class="rule-link" href="#r-items.extern.abi.platform-unwind-variants" title="items.extern.abi.platform-unwind-variants"><span>[items<wbr>.extern<wbr>.abi<wbr>.platform-unwind-variants]</span></a>
</div>

与 `"C"` 和 `"system"` 一样，大多数平台特定 ABI 字符串也有[对应的 `-unwind` 变体](functions.md#unwinding)；具体包括：

- `"aapcs-unwind"`
- `"cdecl-unwind"`
- `"fastcall-unwind"`
- `"stdcall-unwind"`
- `"sysv64-unwind"`
- `"thiscall-unwind"`
- `"win64-unwind"`

<div class="rule" id="r-items.extern.variadic"><a class="rule-link" href="#r-items.extern.variadic" title="items.extern.variadic"><span>[items<wbr>.extern<wbr>.variadic]</span></a>
</div>

## 变参函数

外部块中的函数可以通过将 `...` 指定为最后一个实参来成为变参函数。变参参数可以选择性地用标识符指定。

```rust
unsafe extern "C" {
    unsafe fn foo(...);
    unsafe fn bar(x: i32, ...);
    unsafe fn with_name(format: *const u8, args: ...);
    // SAFETY：此函数保证它不会访问
    // 变参实参。
    safe fn ignores_variadic_arguments(x: i32, ...);
}
```

<div class="alert alert-warning">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
 > 
 > 除非 `extern` 块中的函数保证它完全不会访问变参实参，否则不应在该函数上使用 `safe` 限定符。向变参函数传递意外数量的实参或意外类型的实参可能导致[未定义行为](../behavior-considered-undefined.md#r-undefined)。

</div>

<div class="rule" id="r-items.extern.variadic.conventions"><a class="rule-link" href="#r-items.extern.variadic.conventions" title="items.extern.variadic.conventions"><span>[items<wbr>.extern<wbr>.variadic<wbr>.conventions]</span></a>
</div>

变参参数只能在带有以下 ABI 字符串或其对应 [`-unwind` 变体](functions.md#r-items.fn.extern.unwind)的 `extern` 块中指定：

- `"aapcs"`
- `"C"`
- `"cdecl"`
- `"efiapi"`
- `"system"`
- `"sysv64"`
- `"win64"`

<div class="rule" id="r-items.extern.attributes"><a class="rule-link" href="#r-items.extern.attributes" title="items.extern.attributes"><span>[items<wbr>.extern<wbr>.attributes]</span></a>
</div>

## extern 块上的属性

<div class="rule" id="r-items.extern.attributes.intro"><a class="rule-link" href="#r-items.extern.attributes.intro" title="items.extern.attributes.intro"><span>[items<wbr>.extern<wbr>.attributes<wbr>.intro]</span></a>
</div>

以下[属性](../attributes.md)控制外部块的行为。

<div class="rule" id="r-items.extern.attributes.link"><a class="rule-link" href="#r-items.extern.attributes.link" title="items.extern.attributes.link"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link]</span></a>
</div>

### `link` 属性

<div class="rule" id="r-items.extern.attributes.link.intro"><a class="rule-link" href="#r-items.extern.attributes.link.intro" title="items.extern.attributes.link.intro"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.intro]</span></a>
</div>

\_`link` 属性_指定编译器应为 `extern` 块中的项链接的原生库名称。

<div class="rule" id="r-items.extern.attributes.link.syntax"><a class="rule-link" href="#r-items.extern.attributes.link.syntax" title="items.extern.attributes.link.syntax"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.syntax]</span></a>
</div>

它使用 [MetaListNameValueStr](../attributes.md#grammar-MetaListNameValueStr) 语法来指定其输入。`name` 键是要链接的原生库名称。`kind` 键是一个可选值，用于指定库的种类，可能的值如下：

<div class="rule" id="r-items.extern.attributes.link.dylib"><a class="rule-link" href="#r-items.extern.attributes.link.dylib" title="items.extern.attributes.link.dylib"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.dylib]</span></a>
</div>

- `dylib` --- 表示动态库。如果未指定 `kind`，这是默认值。

<div class="rule" id="r-items.extern.attributes.link.static"><a class="rule-link" href="#r-items.extern.attributes.link.static" title="items.extern.attributes.link.static"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.static]</span></a>
</div>

- `static` --- 表示静态库。

<div class="rule" id="r-items.extern.attributes.link.framework"><a class="rule-link" href="#r-items.extern.attributes.link.framework" title="items.extern.attributes.link.framework"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.framework]</span></a>
</div>

- `framework` --- 表示 macOS framework。这仅对 macOS 目标有效。

<div class="rule" id="r-items.extern.attributes.link.raw-dylib"><a class="rule-link" href="#r-items.extern.attributes.link.raw-dylib" title="items.extern.attributes.link.raw-dylib"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.raw-dylib]</span></a>
</div>

- `raw-dylib` --- 表示一种动态库，编译器会为其生成要链接的导入库（详情见下文的 [`dylib` versus `raw-dylib`](#dylib-versus-raw-dylib)）。这仅对 Windows 目标有效。

<div class="rule" id="r-items.extern.attributes.link.name-requirement"><a class="rule-link" href="#r-items.extern.attributes.link.name-requirement" title="items.extern.attributes.link.name-requirement"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.name-requirement]</span></a>
</div>

如果指定了 `kind`，则必须包含 `name` 键。

<div class="rule" id="r-items.extern.attributes.link.modifiers"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers" title="items.extern.attributes.link.modifiers"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers]</span></a>
</div>

可选的 `modifiers` 参数用于为要链接的库指定链接修饰符。

<div class="rule" id="r-items.extern.attributes.link.modifiers.syntax"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.syntax" title="items.extern.attributes.link.modifiers.syntax"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.syntax]</span></a>
</div>

修饰符被指定为以逗号分隔的字符串，每个修饰符前带有 `+` 或 `-` 前缀，分别表示启用或禁用该修饰符。

<div class="rule" id="r-items.extern.attributes.link.modifiers.multiple"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.multiple" title="items.extern.attributes.link.modifiers.multiple"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.multiple]</span></a>
</div>

目前不支持在单个 `link` 属性中指定多个 `modifiers` 参数，也不支持在同一个 `modifiers` 参数中指定多个相同的修饰符。例如：`#[link(name = "mylib", kind = "static", modifiers = "+whole-archive")]`。

<div class="rule" id="r-items.extern.attributes.link.wasm_import_module"><a class="rule-link" href="#r-items.extern.attributes.link.wasm_import_module" title="items.extern.attributes.link.wasm_import_module"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.wasm_import_module]</span></a>
</div>

从宿主环境导入符号时，可以使用 `wasm_import_module` 键为 `extern` 块中的项指定 [WebAssembly module](https://webassembly.github.io/spec/core/syntax/modules.html) 名称。如果未指定 `wasm_import_module`，默认模块名为 `env`。

<!-- ignore: requires extern linking -->

```rust,ignore
#[link(name = "crypto")]
unsafe extern {
    // …
}

#[link(name = "CoreFoundation", kind = "framework")]
unsafe extern {
    // …
}

#[link(wasm_import_module = "foo")]
unsafe extern {
    // …
}
```

<div class="rule" id="r-items.extern.attributes.link.empty-block"><a class="rule-link" href="#r-items.extern.attributes.link.empty-block" title="items.extern.attributes.link.empty-block"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.empty-block]</span></a>
</div>

可以在空 extern 块上添加 `link` 属性。你可以用这种方式满足代码中其他位置（包括上游 crate）extern 块的链接要求，而不必为每个 extern 块添加该属性。

<div class="rule" id="r-items.extern.attributes.link.modifiers.bundle"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.bundle" title="items.extern.attributes.link.modifiers.bundle"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.bundle]</span></a>
</div>

#### 链接修饰符：`bundle`

<div class="rule" id="r-items.extern.attributes.link.modifiers.bundle.allowed-kinds"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.bundle.allowed-kinds" title="items.extern.attributes.link.modifiers.bundle.allowed-kinds"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.bundle<wbr>.allowed-kinds]</span></a>
</div>

此修饰符只与 `static` 链接种类兼容。使用任何其他种类都会导致编译器错误。

<div class="rule" id="r-items.extern.attributes.link.modifiers.bundle.behavior"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.bundle.behavior" title="items.extern.attributes.link.modifiers.bundle.behavior"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.bundle<wbr>.behavior]</span></a>
</div>

构建 rlib 或 staticlib 时，`+bundle` 表示原生静态库会被打包进 rlib 或 staticlib 归档中，然后在链接最终二进制文件时从中取出。

<div class="rule" id="r-items.extern.attributes.link.modifiers.bundle.behavior-negative"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.bundle.behavior-negative" title="items.extern.attributes.link.modifiers.bundle.behavior-negative"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.bundle<wbr>.behavior-negative]</span></a>
</div>

构建 rlib 时，`-bundle` 表示原生静态库会“按名称”注册为该 rlib 的依赖，并且其中的目标文件只会在链接最终二进制文件时包含进来，对该名称的文件搜索也会在最终链接期间执行。构建 staticlib 时，`-bundle` 表示原生静态库不会被包含进归档中，某个更高层的构建系统之后需要在链接最终二进制文件时添加它。

<div class="rule" id="r-items.extern.attributes.link.modifiers.bundle.no-effect"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.bundle.no-effect" title="items.extern.attributes.link.modifiers.bundle.no-effect"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.bundle<wbr>.no-effect]</span></a>
</div>

构建可执行文件或动态库等其他目标时，此修饰符没有效果。

<div class="rule" id="r-items.extern.attributes.link.modifiers.bundle.default"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.bundle.default" title="items.extern.attributes.link.modifiers.bundle.default"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.bundle<wbr>.default]</span></a>
</div>

此修饰符的默认值是 `+bundle`。

关于此修饰符的更多实现细节，可在 [rustc 的 `bundle` 文档](../../rustc/command-line-arguments.html#linking-modifiers-bundle)中找到。

<div class="rule" id="r-items.extern.attributes.link.modifiers.whole-archive"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.whole-archive" title="items.extern.attributes.link.modifiers.whole-archive"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.whole-archive]</span></a>
</div>

#### 链接修饰符：`whole-archive`

<div class="rule" id="r-items.extern.attributes.link.modifiers.whole-archive.allowed-kinds"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.whole-archive.allowed-kinds" title="items.extern.attributes.link.modifiers.whole-archive.allowed-kinds"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.whole-archive<wbr>.allowed-kinds]</span></a>
</div>

此修饰符只与 `static` 链接种类兼容。使用任何其他种类都会导致编译器错误。

<div class="rule" id="r-items.extern.attributes.link.modifiers.whole-archive.behavior"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.whole-archive.behavior" title="items.extern.attributes.link.modifiers.whole-archive.behavior"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.whole-archive<wbr>.behavior]</span></a>
</div>

`+whole-archive` 表示将静态库作为完整归档进行链接，而不会丢弃任何目标文件。

<div class="rule" id="r-items.extern.attributes.link.modifiers.whole-archive.default"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.whole-archive.default" title="items.extern.attributes.link.modifiers.whole-archive.default"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.whole-archive<wbr>.default]</span></a>
</div>

此修饰符的默认值是 `-whole-archive`。

关于此修饰符的更多实现细节，可在 [rustc 的 `whole-archive` 文档](../../rustc/command-line-arguments.html#linking-modifiers-whole-archive)中找到。

<div class="rule" id="r-items.extern.attributes.link.modifiers.verbatim"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.verbatim" title="items.extern.attributes.link.modifiers.verbatim"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.verbatim]</span></a>
</div>

### 链接修饰符：`verbatim`

<div class="rule" id="r-items.extern.attributes.link.modifiers.verbatim.allowed-kinds"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.verbatim.allowed-kinds" title="items.extern.attributes.link.modifiers.verbatim.allowed-kinds"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.verbatim<wbr>.allowed-kinds]</span></a>
</div>

此修饰符与所有链接种类兼容。

<div class="rule" id="r-items.extern.attributes.link.modifiers.verbatim.behavior"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.verbatim.behavior" title="items.extern.attributes.link.modifiers.verbatim.behavior"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.verbatim<wbr>.behavior]</span></a>
</div>

`+verbatim` 表示 rustc 本身不会向库名称添加任何目标指定的库前缀或后缀（如 `lib` 或 `.a`），并且会尽力要求链接器做同样的事情。

<div class="rule" id="r-items.extern.attributes.link.modifiers.verbatim.behavior-negative"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.verbatim.behavior-negative" title="items.extern.attributes.link.modifiers.verbatim.behavior-negative"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.verbatim<wbr>.behavior-negative]</span></a>
</div>

`-verbatim` 表示 rustc 会在将库名称传递给链接器之前添加目标特定的前缀和后缀，或者不会阻止链接器隐式添加它们。

<div class="rule" id="r-items.extern.attributes.link.modifiers.verbatim.default"><a class="rule-link" href="#r-items.extern.attributes.link.modifiers.verbatim.default" title="items.extern.attributes.link.modifiers.verbatim.default"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.modifiers<wbr>.verbatim<wbr>.default]</span></a>
</div>

此修饰符的默认值是 `-verbatim`。

关于此修饰符的更多实现细节，可在 [rustc 的 `verbatim` 文档](../../rustc/command-line-arguments.html#linking-modifiers-verbatim)中找到。

<div class="rule" id="r-items.extern.attributes.link.kind-raw-dylib"><a class="rule-link" href="#r-items.extern.attributes.link.kind-raw-dylib" title="items.extern.attributes.link.kind-raw-dylib"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.kind-raw-dylib]</span></a>
</div>

#### `dylib` 与 `raw-dylib`

<div class="rule" id="r-items.extern.attributes.link.kind-raw-dylib.intro"><a class="rule-link" href="#r-items.extern.attributes.link.kind-raw-dylib.intro" title="items.extern.attributes.link.kind-raw-dylib.intro"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.kind-raw-dylib<wbr>.intro]</span></a>
</div>

在 Windows 上，链接动态库要求向链接器提供导入库：这是一种特殊的静态库，它以某种方式声明动态库导出的所有符号，使链接器知道这些符号必须在运行时动态加载。

<div class="rule" id="r-items.extern.attributes.link.kind-raw-dylib.import"><a class="rule-link" href="#r-items.extern.attributes.link.kind-raw-dylib.import" title="items.extern.attributes.link.kind-raw-dylib.import"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.kind-raw-dylib<wbr>.import]</span></a>
</div>

指定 `kind = "dylib"` 会指示 Rust 编译器基于 `name` 键链接一个导入库。随后链接器会使用其正常的库解析逻辑来查找该导入库。或者，指定 `kind = "raw-dylib"` 会指示编译器在编译期间生成一个导入库，并将其提供给链接器。

<div class="rule" id="r-items.extern.attributes.link.kind-raw-dylib.platform-specific"><a class="rule-link" href="#r-items.extern.attributes.link.kind-raw-dylib.platform-specific" title="items.extern.attributes.link.kind-raw-dylib.platform-specific"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.kind-raw-dylib<wbr>.platform-specific]</span></a>
</div>

`raw-dylib` 仅在 Windows 上受支持。以其他平台为目标时使用它会导致编译器错误。

<div class="rule" id="r-items.extern.attributes.link.import_name_type"><a class="rule-link" href="#r-items.extern.attributes.link.import_name_type" title="items.extern.attributes.link.import_name_type"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.import_name_type]</span></a>
</div>

#### `import_name_type` 键

<div class="rule" id="r-items.extern.attributes.link.import_name_type.intro"><a class="rule-link" href="#r-items.extern.attributes.link.import_name_type.intro" title="items.extern.attributes.link.import_name_type.intro"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.import_name_type<wbr>.intro]</span></a>
</div>

在 x86 Windows 上，函数名称会被“修饰”（即添加特定前缀和/或后缀）以表示其调用约定。例如，名为 `fn1` 且没有参数的 `stdcall` 调用约定函数会被修饰为 `_fn1@0`。不过，[PE Format](https://learn.microsoft.com/windows/win32/debug/pe-format#import-name-type) 也允许名称没有前缀或不被修饰。此外，MSVC 和 GNU 工具链对相同调用约定使用不同的修饰方式，这意味着默认情况下，某些 Win32 函数无法通过 GNU 工具链使用 `raw-dylib` 链接种类来调用。

<div class="rule" id="r-items.extern.attributes.link.import_name_type.values"><a class="rule-link" href="#r-items.extern.attributes.link.import_name_type.values" title="items.extern.attributes.link.import_name_type.values"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.import_name_type<wbr>.values]</span></a>
</div>

为了适应这些差异，使用 `raw-dylib` 链接种类时，还可以为 `import_name_type` 键指定以下值之一，以改变生成的导入库中函数的命名方式：

- `decorated`：函数名称将使用 MSVC 工具链格式进行完整修饰。
- `noprefix`：函数名称将使用 MSVC 工具链格式进行修饰，但跳过开头的 `?`、`@` 或可选的 `_`。
- `undecorated`：函数名称不会被修饰。

<div class="rule" id="r-items.extern.attributes.link.import_name_type.default"><a class="rule-link" href="#r-items.extern.attributes.link.import_name_type.default" title="items.extern.attributes.link.import_name_type.default"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.import_name_type<wbr>.default]</span></a>
</div>

如果未指定 `import_name_type` 键，则函数名称将使用目标工具链的格式进行完整修饰。

<div class="rule" id="r-items.extern.attributes.link.import_name_type.variables"><a class="rule-link" href="#r-items.extern.attributes.link.import_name_type.variables" title="items.extern.attributes.link.import_name_type.variables"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.import_name_type<wbr>.variables]</span></a>
</div>

变量从不会被修饰，因此 `import_name_type` 键不会影响它们在生成的导入库中的命名方式。

<div class="rule" id="r-items.extern.attributes.link.import_name_type.platform-specific"><a class="rule-link" href="#r-items.extern.attributes.link.import_name_type.platform-specific" title="items.extern.attributes.link.import_name_type.platform-specific"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link<wbr>.import_name_type<wbr>.platform-specific]</span></a>
</div>

`import_name_type` 键仅在 x86 Windows 上受支持。以其他平台为目标时使用它会导致编译器错误。

<!-- template:attributes -->

<div class="rule" id="r-items.extern.attributes.link_name"><a class="rule-link" href="#r-items.extern.attributes.link_name" title="items.extern.attributes.link_name"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link_name]</span></a>
</div>

### `link_name` 属性

<div class="rule" id="r-items.extern.attributes.link_name.intro"><a class="rule-link" href="#r-items.extern.attributes.link_name.intro" title="items.extern.attributes.link_name.intro"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link_name<wbr>.intro]</span></a>
</div>

\_`link_name` [属性](../attributes.md)\_可以应用于 `extern` 块内的声明，以指定要为给定函数或静态项导入的符号。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > unsafe extern "C" {
 >     #[link_name = "actual_symbol_name"]
 >     safe fn name_in_rust();
 > }
 > ```

</div>

<div class="rule" id="r-items.extern.attributes.link_name.syntax"><a class="rule-link" href="#r-items.extern.attributes.link_name.syntax" title="items.extern.attributes.link_name.syntax"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link_name<wbr>.syntax]</span></a>
</div>

`link_name` 属性使用 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 语法。

<div class="rule" id="r-items.extern.attributes.link_name.invalid-names"><a class="rule-link" href="#r-items.extern.attributes.link_name.invalid-names" title="items.extern.attributes.link_name.invalid-names"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link_name<wbr>.invalid-names]</span></a>
</div>

符号名称不得为空字符串，也不得包含任何 `U+0000`（NUL）字节。

<div class="rule" id="r-items.extern.attributes.link_name.allowed-positions"><a class="rule-link" href="#r-items.extern.attributes.link_name.allowed-positions" title="items.extern.attributes.link_name.allowed-positions"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link_name<wbr>.allowed-positions]</span></a>
</div>

`link_name` 属性只能应用于 `extern` 块中的函数或静态项。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="rule" id="r-items.extern.attributes.link_name.duplicates"><a class="rule-link" href="#r-items.extern.attributes.link_name.duplicates" title="items.extern.attributes.link_name.duplicates"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link_name<wbr>.duplicates]</span></a>
</div>

在一个项上，只有首次使用的 `link_name` 会生效。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次之后的任何使用发出未来兼容性警告。将来这可能会变成错误。

</div>

<div class="rule" id="r-items.extern.attributes.link_name.link_ordinal"><a class="rule-link" href="#r-items.extern.attributes.link_name.link_ordinal" title="items.extern.attributes.link_name.link_ordinal"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link_name<wbr>.link_ordinal]</span></a>
</div>

`link_name` 属性不能与 [`link_ordinal`](external-blocks.md#r-items.extern.attributes.link_ordinal) 属性一起使用。

<div class="rule" id="r-items.extern.attributes.link_ordinal"><a class="rule-link" href="#r-items.extern.attributes.link_ordinal" title="items.extern.attributes.link_ordinal"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link_ordinal]</span></a>
</div>

### `link_ordinal` 属性

<div class="rule" id="r-items.extern.attributes.link_ordinal.intro"><a class="rule-link" href="#r-items.extern.attributes.link_ordinal.intro" title="items.extern.attributes.link_ordinal.intro"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link_ordinal<wbr>.intro]</span></a>
</div>

\_`link_ordinal` 属性_可以应用于 `extern` 块内的声明，以表示生成要链接的导入库时使用的数字序号。在 Windows 上，序号是动态库导出的每个符号对应的唯一数字；加载该库时，可以使用它来查找该符号，而不必按名称查找。

<div class="alert alert-warning">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
 > 
 > `link_ordinal` 只应在已知符号序号稳定的情况下使用：如果构建包含该符号的二进制文件时没有显式设置该符号的序号，则会自动为它分配一个序号，而该分配的序号可能会在该二进制文件的不同构建之间变化。

</div>

```rust
# #[cfg(all(windows, target_arch = "x86"))]
#[link(name = "exporter", kind = "raw-dylib")]
unsafe extern "stdcall" {
    #[link_ordinal(15)]
    safe fn imported_function_stdcall(i: i32);
}
```

<div class="rule" id="r-items.extern.attributes.link_ordinal.allowed-kinds"><a class="rule-link" href="#r-items.extern.attributes.link_ordinal.allowed-kinds" title="items.extern.attributes.link_ordinal.allowed-kinds"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link_ordinal<wbr>.allowed-kinds]</span></a>
</div>

此属性只与 `raw-dylib` 链接种类一起使用。使用任何其他种类都会导致编译器错误。

<div class="rule" id="r-items.extern.attributes.link_ordinal.exclusive"><a class="rule-link" href="#r-items.extern.attributes.link_ordinal.exclusive" title="items.extern.attributes.link_ordinal.exclusive"><span>[items<wbr>.extern<wbr>.attributes<wbr>.link_ordinal<wbr>.exclusive]</span></a>
</div>

将此属性与 `link_name` 属性一起使用会导致编译器错误。

<div class="rule" id="r-items.extern.attributes.fn-parameters"><a class="rule-link" href="#r-items.extern.attributes.fn-parameters" title="items.extern.attributes.fn-parameters"><span>[items<wbr>.extern<wbr>.attributes<wbr>.fn-parameters]</span></a>
</div>

### 函数形参上的属性

extern 函数参数上的属性遵循与[常规函数参数](functions.md#attributes-on-function-parameters)相同的规则和限制。