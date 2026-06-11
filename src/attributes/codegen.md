<div class="rule" id="r-attributes.codegen"><a class="rule-link" href="#r-attributes.codegen" title="attributes.codegen"><span>[attributes<wbr>.codegen]</span></a>
</div>

# 代码生成属性

以下[属性](../attributes.md)用于控制代码生成。

<!-- template:attributes -->

<div class="rule" id="r-attributes.codegen.inline"><a class="rule-link" href="#r-attributes.codegen.inline" title="attributes.codegen.inline"><span>[attributes<wbr>.codegen<wbr>.inline]</span></a>
</div>

### `inline` 属性

<div class="rule" id="r-attributes.codegen.inline.intro"><a class="rule-link" href="#r-attributes.codegen.inline.intro" title="attributes.codegen.inline.intro"><span>[attributes<wbr>.codegen<wbr>.inline<wbr>.intro]</span></a>
</div>

_`inline` [属性](../attributes.md)_ 建议是否应将带属性函数的代码副本放置到调用者中，而不是生成对该函数的调用。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > #[inline]
 > pub fn example1() {}
 > 
 > #[inline(always)]
 > pub fn example2() {}
 > 
 > #[inline(never)]
 > pub fn example3() {}
 > ```

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会在认为值得时自动内联函数。请谨慎使用此属性，因为对内联内容作出不佳决策可能会让程序变慢。

</div>

<div class="rule" id="r-attributes.codegen.inline.syntax"><a class="rule-link" href="#r-attributes.codegen.inline.syntax" title="attributes.codegen.inline.syntax"><span>[attributes<wbr>.codegen<wbr>.inline<wbr>.syntax]</span></a>
</div>

`inline` 属性的语法为：

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-InlineAttribute" onclick="show_railroad()">[InlineAttribute](codegen.md#railroad-InlineAttribute)</span> →  
      <span class="grammar-literal">inline</span> <span class="grammar-literal">(</span> <span class="grammar-literal">always</span> <span class="grammar-literal">)</span>  
    \| <span class="grammar-literal">inline</span> <span class="grammar-literal">(</span> <span class="grammar-literal">never</span> <span class="grammar-literal">)</span>  
    \| <span class="grammar-literal">inline</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 340px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-InlineAttribute"><svg class="railroad" viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="codegen.md#grammar-InlineAttribute">
<text class="comment" x="67" y="25">
InlineAttribute</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 222 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="42"/>
<text x="93" y="58">
inline</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="137" y="42"/>
<text x="151" y="58">
(</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="175" y="42"/>
<text x="209" y="58">
always</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="253" y="42"/>
<text x="267" y="58">
)</text>
</g>
<path d=" M 127 53 h 10"/>
<path d=" M 165 53 h 10"/>
<path d=" M 243 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 246 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 246 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 214 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="75"/>
<text x="93" y="91">
inline</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="137" y="75"/>
<text x="151" y="91">
(</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="175" y="75"/>
<text x="205" y="91">
never</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="245" y="75"/>
<text x="259" y="91">
)</text>
</g>
<path d=" M 127 86 h 10"/>
<path d=" M 165 86 h 10"/>
<path d=" M 235 86 h 10"/>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 68 0 h 154 m -74 0 l -5 -5 m 0 10 l 5 -5 m 74 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="59" y="108"/>
<text x="93" y="124">
inline</text>
</g>
</g>
<path d=" M 315 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 305 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-attributes.codegen.inline.allowed-positions"><a class="rule-link" href="#r-attributes.codegen.inline.allowed-positions" title="attributes.codegen.inline.allowed-positions"><span>[attributes<wbr>.codegen<wbr>.inline<wbr>.allowed-positions]</span></a>
</div>

`inline` 属性只能应用于具有[函数体](../items/functions.md#r-items.fn.body)的函数 --- [闭包](../expressions/closure-expr.md#r-expr.closure)、[async 块](../expressions/block-expr.md#r-expr.block.async)、[自由函数](../items/functions.md#r-items.fn)、[固有 impl](../items/implementations.md#r-items.impl.inherent)或 [trait impl](../items/implementations.md#r-items.impl.trait) 中的[关联函数](../items/associated-items.md#r-items.associated.fn)，以及 [trait 定义](../items/traits.md#r-items.traits)中那些具有[默认定义](../items/traits.md#r-items.traits.associated-item-decls)的关联函数。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 尽管该属性可以应用于[闭包](../expressions/closure-expr.md#r-expr.closure)和[async 块](../expressions/block-expr.md#r-expr.block.async)，但其用途有限，因为我们尚不支持在表达式上使用属性。
 > 
 > ```rust
 > // 我们允许语句上有属性。
 > #[inline] || (); // OK
 > #[inline] async {}; // OK
 > ```
 > 
 > ```rust,compile_fail,E0658
 > // 我们尚不允许表达式上有属性。
 > let f = #[inline] || (); // ERROR
 > ```

</div>

<div class="rule" id="r-attributes.codegen.inline.duplicates"><a class="rule-link" href="#r-attributes.codegen.inline.duplicates" title="attributes.codegen.inline.duplicates"><span>[attributes<wbr>.codegen<wbr>.inline<wbr>.duplicates]</span></a>
</div>

在一个函数上，只有第一次使用 `inline` 会产生效果。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

</div>

<div class="rule" id="r-attributes.codegen.inline.modes"><a class="rule-link" href="#r-attributes.codegen.inline.modes" title="attributes.codegen.inline.modes"><span>[attributes<wbr>.codegen<wbr>.inline<wbr>.modes]</span></a>
</div>

`inline` 属性支持以下模式：

- `#[inline]` \_建议_执行内联展开。
- `#[inline(always)]` \_建议_始终执行内联展开。
- `#[inline(never)]` \_建议_永不执行内联展开。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 无论是哪种形式，该属性都是一种提示。编译器可以忽略它。

</div>

<div class="rule" id="r-attributes.codegen.inline.trait"><a class="rule-link" href="#r-attributes.codegen.inline.trait" title="attributes.codegen.inline.trait"><span>[attributes<wbr>.codegen<wbr>.inline<wbr>.trait]</span></a>
</div>

当 `inline` 应用于 [trait](../items/traits.md#r-items.traits) 中的函数时，它只应用于[默认定义](../items/traits.md#r-items.traits.associated-item-decls)的代码。

<div class="rule" id="r-attributes.codegen.inline.async"><a class="rule-link" href="#r-attributes.codegen.inline.async" title="attributes.codegen.inline.async"><span>[attributes<wbr>.codegen<wbr>.inline<wbr>.async]</span></a>
</div>

当 `inline` 应用于 [async 函数](../items/functions.md#r-items.fn.async)或 [async 闭包](../expressions/closure-expr.md#r-expr.closure.async)时，它只应用于生成的 `poll` 函数的代码。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 更多细节见 [Rust issue #129347](https://github.com/rust-lang/rust/issues/129347)。

</div>

<div class="rule" id="r-attributes.codegen.inline.externally-exported"><a class="rule-link" href="#r-attributes.codegen.inline.externally-exported" title="attributes.codegen.inline.externally-exported"><span>[attributes<wbr>.codegen<wbr>.inline<wbr>.externally-exported]</span></a>
</div>

如果函数通过 [`no_mangle`](../abi.md#r-abi.no_mangle) 或 [`export_name`](../abi.md#r-abi.export_name) 对外导出，则 `inline` 属性会被忽略。

<!-- template:attributes -->

<div class="rule" id="r-attributes.codegen.cold"><a class="rule-link" href="#r-attributes.codegen.cold" title="attributes.codegen.cold"><span>[attributes<wbr>.codegen<wbr>.cold]</span></a>
</div>

### `cold` 属性

<div class="rule" id="r-attributes.codegen.cold.intro"><a class="rule-link" href="#r-attributes.codegen.cold.intro" title="attributes.codegen.cold.intro"><span>[attributes<wbr>.codegen<wbr>.cold<wbr>.intro]</span></a>
</div>

_`cold` [属性](../attributes.md)_ 建议带属性函数不太可能被调用，这可以帮助编译器生成更好的代码。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > #[cold]
 > pub fn example() {}
 > ```

</div>

<div class="rule" id="r-attributes.codegen.cold.syntax"><a class="rule-link" href="#r-attributes.codegen.cold.syntax" title="attributes.codegen.cold.syntax"><span>[attributes<wbr>.codegen<wbr>.cold<wbr>.syntax]</span></a>
</div>

`cold` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-attributes.codegen.cold.allowed-positions"><a class="rule-link" href="#r-attributes.codegen.cold.allowed-positions" title="attributes.codegen.cold.allowed-positions"><span>[attributes<wbr>.codegen<wbr>.cold<wbr>.allowed-positions]</span></a>
</div>

`cold` 属性只能应用于具有[函数体](../items/functions.md#r-items.fn.body)的函数 --- [闭包](../expressions/closure-expr.md#r-expr.closure)、[async 块](../expressions/block-expr.md#r-expr.block.async)、[自由函数](../items/functions.md#r-items.fn)、[固有 impl](../items/implementations.md#r-items.impl.inherent)或 [trait impl](../items/implementations.md#r-items.impl.trait) 中的[关联函数](../items/associated-items.md#r-items.associated.fn)，以及 [trait 定义](../items/traits.md#r-items.traits)中那些具有[默认定义](../items/traits.md#r-items.traits.associated-item-decls)的关联函数。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 尽管该属性可以应用于[闭包](../expressions/closure-expr.md#r-expr.closure)和[async 块](../expressions/block-expr.md#r-expr.block.async)，但其用途有限，因为我们尚不支持在表达式上使用属性。

</div>

<!-- TODO: rustc currently seems to allow cold on a trait function without a body, but it appears to be ignored. I think that may be a bug, and it should at least warn if not reject (like inline does). -->

<div class="rule" id="r-attributes.codegen.cold.duplicates"><a class="rule-link" href="#r-attributes.codegen.cold.duplicates" title="attributes.codegen.cold.duplicates"><span>[attributes<wbr>.codegen<wbr>.cold<wbr>.duplicates]</span></a>
</div>

在一个函数上，只有第一次使用 `cold` 会产生效果。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

</div>

<div class="rule" id="r-attributes.codegen.cold.trait"><a class="rule-link" href="#r-attributes.codegen.cold.trait" title="attributes.codegen.cold.trait"><span>[attributes<wbr>.codegen<wbr>.cold<wbr>.trait]</span></a>
</div>

当 `cold` 应用于 [trait](../items/traits.md#r-items.traits) 中的函数时，它只应用于[默认定义](../items/traits.md#r-items.traits.associated-item-decls)的代码。

<!-- template:attributes -->

<div class="rule" id="r-attributes.codegen.naked"><a class="rule-link" href="#r-attributes.codegen.naked" title="attributes.codegen.naked"><span>[attributes<wbr>.codegen<wbr>.naked]</span></a>
</div>

## `naked` 属性

<div class="rule" id="r-attributes.codegen.naked.intro"><a class="rule-link" href="#r-attributes.codegen.naked.intro" title="attributes.codegen.naked.intro"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.intro]</span></a>
</div>

_`naked` [属性](../attributes.md)_ 会阻止编译器为带属性函数发出函数序言和尾声 --- 这样的函数称为 _naked function_。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > # #[cfg(target_arch = "x86_64")] {
 > /// 将给定的数加 3。
 > // SAFETY: 函数体遵循 "sysv64" 调用约定，
 > // 满足该签名的要求，并且不会直通执行。
 > #[unsafe(naked)]
 > pub extern "sysv64" fn add_n(number: u64) -> u64 {
 >     core::arch::naked_asm!(
 >         "add rdi, {}",
 >         "mov rax, rdi",
 >         "ret",
 >         const 3,
 >     )
 > }
 > # }
 > ```

</div>

<div class="rule" id="r-attributes.codegen.naked.syntax"><a class="rule-link" href="#r-attributes.codegen.naked.syntax" title="attributes.codegen.naked.syntax"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.syntax]</span></a>
</div>

`naked` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-attributes.codegen.naked.allowed-positions"><a class="rule-link" href="#r-attributes.codegen.naked.allowed-positions" title="attributes.codegen.naked.allowed-positions"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.allowed-positions]</span></a>
</div>

`naked` 属性只能应用于[自由函数](../items/functions.md#r-items.fn)、[固有 impl](../items/implementations.md#r-items.impl.inherent)或 [trait impl](../items/implementations.md#r-items.impl.trait) 中的[关联函数](../items/associated-items.md#r-items.associated.fn)，以及 [trait 定义](../items/traits.md#r-items.traits)中那些具有[默认定义](../items/traits.md#r-items.traits.associated-item-decls)的关联函数。

<div class="rule" id="r-attributes.codegen.naked.duplicates"><a class="rule-link" href="#r-attributes.codegen.naked.duplicates" title="attributes.codegen.naked.duplicates"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.duplicates]</span></a>
</div>

在一个函数上，只有第一次使用 `naked` 会产生效果。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次之后的任何使用发出 lint。

</div>

<div class="rule" id="r-attributes.codegen.naked.unsafe"><a class="rule-link" href="#r-attributes.codegen.naked.unsafe" title="attributes.codegen.naked.unsafe"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.unsafe]</span></a>
</div>

`naked` 属性必须标记为 [`unsafe`](../attributes.md#r-attributes.safety)，因为函数体必须遵守函数的调用约定、满足其签名，并且要么返回，要么发散（即不会直通执行到汇编代码末尾之后）。

<div class="rule" id="r-attributes.codegen.naked.body"><a class="rule-link" href="#r-attributes.codegen.naked.body" title="attributes.codegen.naked.body"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.body]</span></a>
</div>

[函数体](../items/functions.md#r-items.fn.body)必须正好由一个 [`naked_asm!`](../inline-assembly.md#r-asm) 宏调用组成。

<div class="rule" id="r-attributes.codegen.naked.prologue-epilogue"><a class="rule-link" href="#r-attributes.codegen.naked.prologue-epilogue" title="attributes.codegen.naked.prologue-epilogue"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.prologue-epilogue]</span></a>
</div>

编译器不会为 naked function 发出序言或尾声：[`naked_asm!`](../inline-assembly.md#r-asm) 调用中的汇编代码构成其整个函数体。

<div class="rule" id="r-attributes.codegen.naked.call-stack"><a class="rule-link" href="#r-attributes.codegen.naked.call-stack" title="attributes.codegen.naked.call-stack"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.call-stack]</span></a>
</div>

进入时，汇编代码可以假定调用栈和寄存器状态按照该函数的签名和调用约定是有效的。

<div class="rule" id="r-attributes.codegen.naked.no-duplication"><a class="rule-link" href="#r-attributes.codegen.naked.no-duplication" title="attributes.codegen.naked.no-duplication"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.no-duplication]</span></a>
</div>

除非在单态化多态函数时，否则编译器不得复制该汇编代码。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这一保证对于定义符号的 naked function 很重要。

</div>

<div class="rule" id="r-attributes.codegen.naked.unused-variables"><a class="rule-link" href="#r-attributes.codegen.naked.unused-variables" title="attributes.codegen.naked.unused-variables"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.unused-variables]</span></a>
</div>

naked function 中会抑制 [`unused_variables` lint](../../rustc/lints/listing/warn-by-default.html#unused-variables)。

<div class="rule" id="r-attributes.codegen.naked.inline"><a class="rule-link" href="#r-attributes.codegen.naked.inline" title="attributes.codegen.naked.inline"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.inline]</span></a>
</div>

[`inline` 属性](codegen.md#r-attributes.codegen.inline)不能应用于 naked function。

<div class="rule" id="r-attributes.codegen.naked.track_caller"><a class="rule-link" href="#r-attributes.codegen.naked.track_caller" title="attributes.codegen.naked.track_caller"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.track_caller]</span></a>
</div>

[`track_caller` 属性](codegen.md#r-attributes.codegen.track_caller)不能应用于 naked function。

<div class="rule" id="r-attributes.codegen.naked.testing"><a class="rule-link" href="#r-attributes.codegen.naked.testing" title="attributes.codegen.naked.testing"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.testing]</span></a>
</div>

[测试属性](testing.md#r-attributes.testing)不能应用于 naked function。

<div class="rule" id="r-attributes.codegen.naked.target_feature"><a class="rule-link" href="#r-attributes.codegen.naked.target_feature" title="attributes.codegen.naked.target_feature"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.target_feature]</span></a>
</div>

[`target_feature` 属性](codegen.md#r-attributes.codegen.target_feature)不能应用于 naked function。

<!-- TODO: Reflexive rules? -->

<div class="rule" id="r-attributes.codegen.naked.abi"><a class="rule-link" href="#r-attributes.codegen.naked.abi" title="attributes.codegen.naked.abi"><span>[attributes<wbr>.codegen<wbr>.naked<wbr>.abi]</span></a>
</div>

naked function 不能使用 ["Rust" ABI](../items/external-blocks.md#r-items.extern.abi.rust)。

<!-- template:attributes -->

<div class="rule" id="r-attributes.codegen.no_builtins"><a class="rule-link" href="#r-attributes.codegen.no_builtins" title="attributes.codegen.no_builtins"><span>[attributes<wbr>.codegen<wbr>.no_builtins]</span></a>
</div>

## `no_builtins` 属性

<div class="rule" id="r-attributes.codegen.no_builtins.intro"><a class="rule-link" href="#r-attributes.codegen.no_builtins.intro" title="attributes.codegen.no_builtins.intro"><span>[attributes<wbr>.codegen<wbr>.no_builtins<wbr>.intro]</span></a>
</div>

_`no_builtins` [属性](../attributes.md)_ 会禁用某些代码模式的优化，这些代码模式与调用被假定存在的库函数有关。

<!-- TODO: This needs expanding, see <https://github.com/rust-lang/reference/issues/542>. -->

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > #![no_builtins]
 > ```

</div>

<div class="rule" id="r-attributes.codegen.no_builtins.syntax"><a class="rule-link" href="#r-attributes.codegen.no_builtins.syntax" title="attributes.codegen.no_builtins.syntax"><span>[attributes<wbr>.codegen<wbr>.no_builtins<wbr>.syntax]</span></a>
</div>

`no_builtins` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-attributes.codegen.no_builtins.allowed-positions"><a class="rule-link" href="#r-attributes.codegen.no_builtins.allowed-positions" title="attributes.codegen.no_builtins.allowed-positions"><span>[attributes<wbr>.codegen<wbr>.no_builtins<wbr>.allowed-positions]</span></a>
</div>

`no_builtins` 属性只能应用于 crate 根。

<div class="rule" id="r-attributes.codegen.no_builtins.duplicates"><a class="rule-link" href="#r-attributes.codegen.no_builtins.duplicates" title="attributes.codegen.no_builtins.duplicates"><span>[attributes<wbr>.codegen<wbr>.no_builtins<wbr>.duplicates]</span></a>
</div>

只有第一次使用 `no_builtins` 属性会产生效果。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次之后的任何使用发出 lint。

</div>

<div class="rule" id="r-attributes.codegen.target_feature"><a class="rule-link" href="#r-attributes.codegen.target_feature" title="attributes.codegen.target_feature"><span>[attributes<wbr>.codegen<wbr>.target_feature]</span></a>
</div>

## `target_feature` 属性

<div class="rule" id="r-attributes.codegen.target_feature.intro"><a class="rule-link" href="#r-attributes.codegen.target_feature.intro" title="attributes.codegen.target_feature.intro"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.intro]</span></a>
</div>

_`target_feature` [属性](../attributes.md)_ 可以应用于函数，以便为特定平台架构特性启用该函数的代码生成。它使用 [MetaListNameValueStr](../attributes.md#grammar-MetaListNameValueStr) 语法，带有单个 `enable` 键，其值是一个由逗号分隔的、要启用的特性名称字符串。

```rust
# #[cfg(target_feature = "avx2")]
#[target_feature(enable = "avx2")]
fn foo_avx2() {}
```

<div class="rule" id="r-attributes.codegen.target_feature.arch"><a class="rule-link" href="#r-attributes.codegen.target_feature.arch" title="attributes.codegen.target_feature.arch"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.arch]</span></a>
</div>

每个[目标架构](../conditional-compilation.md#target_arch)都有一组可以启用的特性。为 crate 并未针对其编译的目标架构指定特性是错误。

<div class="rule" id="r-attributes.codegen.target_feature.closures"><a class="rule-link" href="#r-attributes.codegen.target_feature.closures" title="attributes.codegen.target_feature.closures"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.closures]</span></a>
</div>

在带有 `target_feature` 注解的函数内定义的闭包，会从外围函数继承该属性。

<div class="rule" id="r-attributes.codegen.target_feature.target-ub"><a class="rule-link" href="#r-attributes.codegen.target_feature.target-ub" title="attributes.codegen.target_feature.target-ub"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.target-ub]</span></a>
</div>

调用一个使用当前代码运行平台不支持的特性编译的函数是[未定义行为](../behavior-considered-undefined.md)，\_除非_该平台明确将这种情况记录为安全。

<div class="rule" id="r-attributes.codegen.target_feature.safety-restrictions"><a class="rule-link" href="#r-attributes.codegen.target_feature.safety-restrictions" title="attributes.codegen.target_feature.safety-restrictions"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.safety-restrictions]</span></a>
</div>

除非下文平台规则另有规定，否则适用以下限制：

- 安全的 `#[target_feature]` 函数（以及继承该属性的闭包）只能在启用了被调用方所启用的全部 `target_feature` 的调用方中安全调用。此限制不适用于 `unsafe` 上下文。
- 安全的 `#[target_feature]` 函数（以及继承该属性的闭包）只能在启用了被强制转换对象所启用的全部 `target_feature` 的上下文中，被强制转换为_安全_函数指针。此限制不适用于 `unsafe` 函数指针。

隐式启用的特性也包含在此规则内。例如，`sse2` 函数可以调用标记为 `sse` 的函数。

```rust
# #[cfg(target_feature = "sse2")] {
#[target_feature(enable = "sse")]
fn foo_sse() {}

fn bar() {
    // 在这里调用 `foo_sse` 是 unsafe 的，因为我们必须先确保
    // SSE 可用，即使 `sse` 在目标平台上默认启用，
    // 或者作为编译器标志手动启用。
    unsafe {
        foo_sse();
    }
}

#[target_feature(enable = "sse")]
fn bar_sse() {
    // 在这里调用 `foo_sse` 是安全的。
    foo_sse();
    || foo_sse();
}

#[target_feature(enable = "sse2")]
fn bar_sse2() {
    // 在这里调用 `foo_sse` 是安全的，因为 `sse2` 蕴含 `sse`。
    foo_sse();
}
# }
```

<div class="rule" id="r-attributes.codegen.target_feature.fn-traits"><a class="rule-link" href="#r-attributes.codegen.target_feature.fn-traits" title="attributes.codegen.target_feature.fn-traits"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.fn-traits]</span></a>
</div>

带有 `#[target_feature]` 属性的函数_永远不会_实现 `Fn` trait 家族，但从外围函数继承特性的闭包会实现。

<div class="rule" id="r-attributes.codegen.target_feature.allowed-positions"><a class="rule-link" href="#r-attributes.codegen.target_feature.allowed-positions" title="attributes.codegen.target_feature.allowed-positions"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.allowed-positions]</span></a>
</div>

`#[target_feature]` 属性不允许用于以下位置：

- [`main` 函数](../crates-and-source-files.md#r-crate.main)
- [`panic_handler` 函数](../panic.md#r-panic.panic_handler)
- 安全 trait 方法
- trait 中的安全默认函数

<div class="rule" id="r-attributes.codegen.target_feature.inline"><a class="rule-link" href="#r-attributes.codegen.target_feature.inline" title="attributes.codegen.target_feature.inline"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.inline]</span></a>
</div>

标记有 `target_feature` 的函数不会被内联到不支持给定特性的上下文中。`#[inline(always)]` 属性不得与 `target_feature` 属性一起使用。

<div class="rule" id="r-attributes.codegen.target_feature.availability"><a class="rule-link" href="#r-attributes.codegen.target_feature.availability" title="attributes.codegen.target_feature.availability"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.availability]</span></a>
</div>

### 可用特性

以下是可用特性名称列表。

<div class="rule" id="r-attributes.codegen.target_feature.cfg-only"><a class="rule-link" href="#r-attributes.codegen.target_feature.cfg-only" title="attributes.codegen.target_feature.cfg-only"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.cfg-only]</span></a>
</div>

此列表中标记为 "(cfg only)" 的目标特性名称只能与 [`target_feature`](../conditional-compilation.md#r-cfg.target_feature) 条件编译选项一起使用，不能与 `target_feature` 属性一起使用。

<div class="rule" id="r-attributes.codegen.target_feature.x86"><a class="rule-link" href="#r-attributes.codegen.target_feature.x86" title="attributes.codegen.target_feature.x86"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.x86]</span></a>
</div>

#### `x86` 或 `x86_64`

在此平台上，执行带有不受支持特性的代码是未定义行为。因此，在此平台上使用 `#[target_feature]` 函数遵循[上述限制](codegen.md#r-attributes.codegen.target_feature.safety-restrictions)。

|特性|隐式启用|说明|
|--|----|--|
|`adx`||[ADX](https://en.wikipedia.org/wiki/Intel_ADX) --- 多精度带进位加法指令扩展|
|`aes`|`sse2`|[AES](https://en.wikipedia.org/wiki/AES_instruction_set) --- 高级加密标准|
|`avx`|`sse4.2`|[AVX](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions) --- 高级向量扩展|
|`avx2`|`avx`|[AVX2](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX2) --- 高级向量扩展 2|
|`avx512bf16`|`avx512bw`|[AVX512-BF16](https://en.wikipedia.org/wiki/AVX-512#BF16) --- 高级向量扩展 512 位 - Bfloat16 扩展|
|`avx512bitalg`|`avx512bw`|[AVX512-BITALG](https://en.wikipedia.org/wiki/AVX-512#VPOPCNTDQ_and_BITALG) --- 高级向量扩展 512 位 - 位算法|
|`avx512bw`|`avx512f`|[AVX512-BW](https://en.wikipedia.org/wiki/AVX-512#BW,_DQ_and_VBMI) --- 高级向量扩展 512 位 - 字节和字指令|
|`avx512cd`|`avx512f`|[AVX512-CD](https://en.wikipedia.org/wiki/AVX-512#Conflict_detection) --- 高级向量扩展 512 位 - 冲突检测指令|
|`avx512dq`|`avx512f`|[AVX512-DQ](https://en.wikipedia.org/wiki/AVX-512#BW,_DQ_and_VBMI) --- 高级向量扩展 512 位 - 双字和四字指令|
|`avx512f`|`avx2`, `fma`, `f16c`|[AVX512-F](https://en.wikipedia.org/wiki/AVX-512) --- 高级向量扩展 512 位 - 基础|
|`avx512fp16`|`avx512bw`|[AVX512-FP16](https://en.wikipedia.org/wiki/AVX-512#FP16) --- 高级向量扩展 512 位 - Float16 扩展|
|`avx512ifma`|`avx512f`|[AVX512-IFMA](https://en.wikipedia.org/wiki/AVX-512#IFMA) --- 高级向量扩展 512 位 - 整数融合乘加|
|`avx512vbmi`|`avx512bw`|[AVX512-VBMI](https://en.wikipedia.org/wiki/AVX-512#BW,_DQ_and_VBMI) --- 高级向量扩展 512 位 - 向量字节操作指令|
|`avx512vbmi2`|`avx512bw`|[AVX512-VBMI2](https://en.wikipedia.org/wiki/AVX-512#VBMI2) --- 高级向量扩展 512 位 - 向量字节操作指令 2|
|`avx512vl`|`avx512f`|[AVX512-VL](https://en.wikipedia.org/wiki/AVX-512) --- 高级向量扩展 512 位 - 向量长度扩展|
|`avx512vnni`|`avx512f`|[AVX512-VNNI](https://en.wikipedia.org/wiki/AVX-512#VNNI) --- 高级向量扩展 512 位 - 向量神经网络指令|
|`avx512vp2intersect`|`avx512f`|[AVX512-VP2INTERSECT](https://en.wikipedia.org/wiki/AVX-512#VP2INTERSECT) --- 高级向量扩展 512 位 - 向量对求交到一对掩码寄存器|
|`avx512vpopcntdq`|`avx512f`|[AVX512-VPOPCNTDQ](https://en.wikipedia.org/wiki/AVX-512#VPOPCNTDQ_and_BITALG) --- 高级向量扩展 512 位 - 向量置位计数指令|
|`avxifma`|`avx2`|[AVX-IFMA](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA) --- 高级向量扩展 - 整数融合乘加|
|`avxneconvert`|`avx2`|[AVX-NE-CONVERT](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA) --- 高级向量扩展 - 无异常浮点转换指令|
|`avxvnni`|`avx2`|[AVX-VNNI](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA) --- 高级向量扩展 - 向量神经网络指令|
|`avxvnniint16`|`avx2`|[AVX-VNNI-INT16](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA) --- 高级向量扩展 - 使用 16 位整数的向量神经网络指令|
|`avxvnniint8`|`avx2`|[AVX-VNNI-INT8](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA) --- 高级向量扩展 - 使用 8 位整数的向量神经网络指令|
|`bmi1`||[BMI1](https://en.wikipedia.org/wiki/Bit_Manipulation_Instruction_Sets) --- 位操作指令集|
|`bmi2`||[BMI2](https://en.wikipedia.org/wiki/Bit_Manipulation_Instruction_Sets#BMI2) --- 位操作指令集 2|
|`cmpxchg16b`||[`cmpxchg16b`](https://www.felixcloutier.com/x86/cmpxchg8b:cmpxchg16b) --- 以原子方式比较并交换 16 字节（128 位）数据|
|`f16c`|`avx`|[F16C](https://en.wikipedia.org/wiki/F16C) --- 16 位浮点转换指令|
|`fma`|`avx`|[FMA3](https://en.wikipedia.org/wiki/FMA_instruction_set) --- 三操作数融合乘加|
|`fxsr`||[`fxsave`](https://www.felixcloutier.com/x86/fxsave) and [`fxrstor`](https://www.felixcloutier.com/x86/fxrstor) --- 保存和恢复 x87 FPU、MMX 技术和 SSE 状态|
|`gfni`|`sse2`|[GFNI](https://en.wikipedia.org/wiki/AVX-512#GFNI) --- 伽罗瓦域新指令|
|`kl`|`sse2`|[KEYLOCKER](https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_Key_Locker_instructions) --- Intel Key Locker 指令|
|`lzcnt`||[`lzcnt`](https://www.felixcloutier.com/x86/lzcnt) --- 前导零计数|
|`movbe`||[`movbe`](https://www.felixcloutier.com/x86/movbe) --- 交换字节后移动数据|
|`pclmulqdq`|`sse2`|[`pclmulqdq`](https://www.felixcloutier.com/x86/pclmulqdq) --- 打包四字无进位乘法|
|`popcnt`||[`popcnt`](https://www.felixcloutier.com/x86/popcnt) --- 置位为 1 的位数|
|`rdrand`||[`rdrand`](https://en.wikipedia.org/wiki/RdRand) --- 读取随机数|
|`rdseed`||[`rdseed`](https://en.wikipedia.org/wiki/RdRand) --- 读取随机种子|
|`sha`|`sse2`|[SHA](https://en.wikipedia.org/wiki/Intel_SHA_extensions) --- 安全散列算法|
|`sha512`|`avx2`|[SHA512](https://en.wikipedia.org/wiki/Intel_SHA_extensions) --- 使用 512 位摘要的安全散列算法|
|`sm3`|`avx`|[SM3](https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_SHA_and_SM3_instructions) --- 商密 3 散列算法|
|`sm4`|`avx2`|[SM4](https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_SHA_and_SM3_instructions) --- 商密 4 密码算法|
|`sse`||[SSE](https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions) --- 流式 <abbr title="Single Instruction Multiple Data">SIMD</abbr> 扩展|
|`sse2`|`sse`|[SSE2](https://en.wikipedia.org/wiki/SSE2) --- 流式 SIMD 扩展 2|
|`sse3`|`sse2`|[SSE3](https://en.wikipedia.org/wiki/SSE3) --- 流式 SIMD 扩展 3|
|`sse4.1`|`ssse3`|[SSE4.1](https://en.wikipedia.org/wiki/SSE4#SSE4.1) --- 流式 SIMD 扩展 4.1|
|`sse4.2`|`sse4.1`|[SSE4.2](https://en.wikipedia.org/wiki/SSE4#SSE4.2) --- 流式 SIMD 扩展 4.2|
|`sse4a`|`sse3`|[SSE4a](https://en.wikipedia.org/wiki/SSE4#SSE4a) --- 流式 SIMD 扩展 4a|
|`ssse3`|`sse3`|[SSSE3](https://en.wikipedia.org/wiki/SSSE3) --- 补充流式 SIMD 扩展 3|
|`tbm`||[TBM](https://en.wikipedia.org/wiki/X86_Bit_manipulation_instruction_set#TBM_(Trailing_Bit_Manipulation)) --- 尾随位操作|
|`vaes`|`avx2`, `aes`|[VAES](https://en.wikipedia.org/wiki/AVX-512#VAES) --- 向量 AES 指令|
|`vpclmulqdq`|`avx`, `pclmulqdq`|[VPCLMULQDQ](https://en.wikipedia.org/wiki/AVX-512#VPCLMULQDQ) --- 向量四字无进位乘法|
|`widekl`|`kl`|[KEYLOCKER_WIDE](https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_Key_Locker_instructions) --- Intel Wide Keylocker 指令|
|`xsave`||[`xsave`](https://www.felixcloutier.com/x86/xsave) --- 保存处理器扩展状态|
|`xsavec`||[`xsavec`](https://www.felixcloutier.com/x86/xsavec) --- 以压缩形式保存处理器扩展状态|
|`xsaveopt`||[`xsaveopt`](https://www.felixcloutier.com/x86/xsaveopt) --- 优化地保存处理器扩展状态|
|`xsaves`||[`xsaves`](https://www.felixcloutier.com/x86/xsaves) --- 保存处理器 supervisor 扩展状态|

<!-- Keep links near each table to make it easier to move and update. -->

<div class="rule" id="r-attributes.codegen.target_feature.aarch64"><a class="rule-link" href="#r-attributes.codegen.target_feature.aarch64" title="attributes.codegen.target_feature.aarch64"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.aarch64]</span></a>
</div>

#### `aarch64`

在此平台上，使用 `#[target_feature]` 函数遵循[上述限制](codegen.md#r-attributes.codegen.target_feature.safety-restrictions)。

关于这些特性的更多文档可在 [ARM 架构参考手册](https://developer.arm.com/documentation/ddi0487/latest) 中找到，或在 [developer.arm.com](https://developer.arm.com) 上的其他位置找到。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 如果使用以下成对特性，应将它们同时标记为启用或禁用：
 > 
 > - `paca` 和 `pacg`，LLVM 目前将它们作为一个特性实现。

</div>

|特性|隐式启用|特性名称|
|--|----|----|
|`aes`|`neon`|FEAT_AES & FEAT_PMULL --- 高级 <abbr title="Single Instruction Multiple Data">SIMD</abbr> AES 和 PMULL 指令|
|`bf16`||FEAT_BF16 --- BFloat16 指令|
|`bti`||FEAT_BTI --- 分支目标标识|
|`crc`||FEAT_CRC --- CRC32 校验和指令|
|`dit`||FEAT_DIT  --- 数据无关时序指令|
|`dotprod`|`neon`|FEAT_DotProd --- 高级 SIMD Int8 点积指令|
|`dpb`||FEAT_DPB --- 将数据缓存清理到持久点|
|`dpb2`|`dpb`|FEAT_DPB2 --- 将数据缓存清理到深度持久点|
|`f32mm`|`sve`|FEAT_F32MM --- SVE 单精度浮点矩阵乘法指令|
|`f64mm`|`sve`|FEAT_F64MM --- SVE 双精度浮点矩阵乘法指令|
|`fcma`|`neon`|FEAT_FCMA --- 浮点复数支持|
|`fhm`|`fp16`|FEAT_FHM --- 半精度浮点 FMLAL 指令|
|`flagm`||FEAT_FLAGM --- 条件标志操作|
|`fp16`|`neon`|FEAT_FP16 --- 半精度浮点数据处理|
|`frintts`||FEAT_FRINTTS --- 浮点到整数辅助指令|
|`i8mm`||FEAT_I8MM --- Int8 矩阵乘法|
|`jsconv`|`neon`|FEAT_JSCVT --- JavaScript 转换指令|
|`lor`||FEAT_LOR --- 有限排序区域扩展|
|`lse`||FEAT_LSE --- 大系统扩展|
|`mte`||FEAT_MTE & FEAT_MTE2 --- 内存标记扩展|
|`neon`||FEAT_AdvSimd & FEAT_FP --- 浮点和高级 SIMD 扩展|
|`paca`||FEAT_PAUTH --- 指针认证（地址认证）|
|`pacg`||FEAT_PAUTH --- 指针认证（通用认证）|
|`pan`||FEAT_PAN --- 特权访问禁止扩展|
|`pmuv3`||FEAT_PMUv3 --- 性能监视器扩展（v3）|
|`rand`||FEAT_RNG --- 随机数生成器|
|`ras`||FEAT_RAS & FEAT_RASv1p1 --- 可靠性、可用性和可服务性扩展|
|`rcpc`||FEAT_LRCPC --- 释放一致的处理器一致性|
|`rcpc2`|`rcpc`|FEAT_LRCPC2 --- 带立即数偏移的 RcPc|
|`rdm`|`neon`|FEAT_RDM --- 舍入双倍乘法累加|
|`sb`||FEAT_SB --- 推测屏障|
|`sha2`|`neon`|FEAT_SHA1 & FEAT_SHA256 --- 高级 SIMD SHA 指令|
|`sha3`|`sha2`|FEAT_SHA512 & FEAT_SHA3 --- 高级 SIMD SHA 指令|
|`sm4`|`neon`|FEAT_SM3 & FEAT_SM4 --- 高级 SIMD SM3/4 指令|
|`spe`||FEAT_SPE --- 统计剖析扩展|
|`ssbs`||FEAT_SSBS & FEAT_SSBS2 --- 推测性存储绕过安全|
|`sve`|`neon`|FEAT_SVE --- 可伸缩向量扩展|
|`sve2`|`sve`|FEAT_SVE2 --- 可伸缩向量扩展 2|
|`sve2-aes`|`sve2`, `aes`|FEAT_SVE_AES & FEAT_SVE_PMULL128 --- SVE AES 指令|
|`sve2-bitperm`|`sve2`|FEAT_SVE2_BitPerm --- SVE 位排列|
|`sve2-sha3`|`sve2`, `sha3`|FEAT_SVE2_SHA3 --- SVE SHA3 指令|
|`sve2-sm4`|`sve2`, `sm4`|FEAT_SVE2_SM4 --- SVE SM4 指令|
|`tme`||FEAT_TME --- 事务内存扩展|
|`vh`||FEAT_VHE --- 虚拟化主机扩展|

<div class="rule" id="r-attributes.codegen.target_feature.loongarch"><a class="rule-link" href="#r-attributes.codegen.target_feature.loongarch" title="attributes.codegen.target_feature.loongarch"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.loongarch]</span></a>
</div>

#### `loongarch`

在此平台上，使用 `#[target_feature]` 函数遵循[上述限制](codegen.md#r-attributes.codegen.target_feature.safety-restrictions)。

|特性|隐式启用|说明|
|--|----|--|
|`f`||[F](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-fp_sp) --- 单精度浮点指令|
|`d`|`f`|[D](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-fp_dp) --- 双精度浮点指令|
|`frecipe`||[FRECIPE](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-frecipe) --- 倒数近似指令|
|`lasx`|`lsx`|[LASX](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lasx) --- 256 位向量指令|
|`lbt`||[LBT](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lbt_x86) --- 二进制翻译指令|
|`lsx`|`d`|[LSX](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lsx) --- 128 位向量指令|
|`lvz`||[LVZ](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lvz) --- 虚拟化指令|
|`div32`||[DIV32](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-div32) --- 接受非符号扩展 32 位操作数的除法指令|
|`lam-bh`||[LAM-BH](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lam_bh) --- 面向字节和半字的原子交换与加法指令|
|`lamcas`||[LAMCAS](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lamcas) --- 面向字节、半字、字和双字的原子比较并交换指令|
|`ld-seq-sa`||[LD-SEQ-SA](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-ld_seq_sa) --- 对同一地址的加载操作进行顺序排序|
|`scq`||[SCQ](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-scq) --- 条件存储四字指令|

<!-- Keep links near each table to make it easier to move and update. -->

<div class="rule" id="r-attributes.codegen.target_feature.riscv"><a class="rule-link" href="#r-attributes.codegen.target_feature.riscv" title="attributes.codegen.target_feature.riscv"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.riscv]</span></a>
</div>

#### `riscv32` 或 `riscv64`

在此平台上，使用 `#[target_feature]` 函数遵循[上述限制](codegen.md#r-attributes.codegen.target_feature.safety-restrictions)。

关于这些特性的更多文档可在其各自的规范中找到。许多规范在 [RISC-V ISA 手册](https://github.com/riscv/riscv-isa-manual)、[版本 20250508](https://github.com/riscv/riscv-isa-manual/tree/20250508) 中说明，或在 [RISC-V GitHub 账户](https://github.com/riscv) 托管的其他手册中说明。

|特性|隐式启用|说明|
|--|----|--|
|`a`|`zaamo`, `zalrsc`|[A](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/a-st-ext.adoc) --- 原子指令|
|`b`|`zba`, `zbc`, `zbs`|[B](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 位操作指令|
|`c`|`zca`|[C](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/c-st-ext.adoc) --- 压缩指令|
|`d`|`f`|[D](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/d-st-ext.adoc) --- [仅 cfg](codegen.md#r-attributes.codegen.target_feature.cfg-only) 双精度浮点|
|`e`||[E](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/rv32e.adoc) --- [仅 cfg](codegen.md#r-attributes.codegen.target_feature.cfg-only) 具有 16 个 GPR 的嵌入式指令集|
|`f`|`zicsr`|[F](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/f-st-ext.adoc) --- [仅 cfg](codegen.md#r-attributes.codegen.target_feature.cfg-only) 单精度浮点|
|`m`||[M](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/m-st-ext.adoc) --- 整数乘法和除法指令|
|`za64rs`|`za128rs`|[Za64rs](https://github.com/riscv/riscv-profiles/blob/rva23-rvb23-ratified/src/rva23-profile.adoc) --- 平台行为：自然对齐的保留集，大小 ≦ 64 字节|
|`za128rs`||[Za128rs](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：自然对齐的保留集，大小 ≦ 128 字节|
|`zaamo`||[Zaamo](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/a-st-ext.adoc) --- 原子内存操作指令|
|`zabha`|`zaamo`|[Zabha](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zabha.adoc) --- 字节和半字原子内存操作指令|
|`zacas`|`zaamo`|[Zacas](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zacas.adoc) --- 原子比较并交换（CAS）指令|
|`zalrsc`||[Zalrsc](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/a-st-ext.adoc) --- 加载保留/条件存储指令|
|`zama16b`||[Zama16b](https://github.com/riscv/riscv-profiles/blob/rva23-rvb23-ratified/src/rva23-profile.adoc) --- 平台行为：对未跨越自然对齐 16 字节边界的主内存区域执行的未对齐加载、存储和 AMO 是原子的|
|`zawrs`||[Zawrs](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zawrs.adoc) --- 等待保留集指令|
|`zba`||[Zba](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 地址生成指令|
|`zbb`||[Zbb](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 基本位操作|
|`zbc`|`zbkc`|[Zbc](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 无进位乘法|
|`zbkb`||[Zbkb](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 密码学位操作指令|
|`zbkc`||[Zbkc](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 用于密码学的无进位乘法|
|`zbkx`||[Zbkx](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 交叉开关置换|
|`zbs`||[Zbs](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 单比特指令|
|`zca`||[Zca](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zc.adoc) --- 压缩指令：整数部分子集|
|`zcb`|`zca`|[Zcb](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zc.adoc) --- 简单节省代码大小的压缩指令|
|`zcmop`|`zca`|[Zcmop](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zimop.adoc) --- 压缩 May-Be-Operations|
|`zic64b`||[Zic64b](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：自然对齐的 64 字节缓存块|
|`zicbom`||[Zicbom](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/cmo.adoc) --- 缓存块管理指令|
|`zicbop`||[Zicbop](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/cmo.adoc) --- 缓存块预取提示指令|
|`zicboz`||[Zicboz](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/cmo.adoc) --- 缓存块清零指令|
|`ziccamoa`||[Ziccamoa](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：可缓存且一致的主内存支持所有基本原子操作|
|`ziccif`||[Ziccif](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：可缓存且一致的主内存支持取指，且最大为 `min(ILEN,XLEN)` 的自然对齐 2 的幂大小获取是原子的|
|`zicclsm`||[Zicclsm](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：可缓存且一致的主内存支持未对齐加载/存储访问|
|`ziccrse`||[Ziccrse](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：可缓存且一致的主内存保证 LR/SC 序列最终成功|
|`zicntr`|`zicsr`|[Zicntr](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/counters.adoc) --- 基础计数器和定时器|
|`zicond`||[Zicond](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zicond.adoc) --- 整数条件操作指令|
|`zicsr`||[Zicsr](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zicsr.adoc) --- 控制与状态寄存器（CSR）指令|
|`zifencei`||[Zifencei](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zifencei.adoc) --- 取指栅栏指令|
|`zihintntl`||[Zihintntl](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zihintntl.adoc) --- 非时序局部性提示指令|
|`zihintpause`||[Zihintpause](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zihintpause.adoc) --- 暂停提示指令|
|`zihpm`|`zicsr`|[Zihpm](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/counters.adoc) --- 硬件性能计数器|
|`zimop`||[Zimop](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zimop.adoc) --- May-Be-Operations|
|`zk`|`zkn`, `zkr`, `zks`, `zkt`, `zbkb`, `zbkc`, `zkbx`|[Zk](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 标量密码学|
|`zkn`|`zknd`, `zkne`, `zknh`, `zbkb`, `zbkc`, `zkbx`|[Zkn](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- NIST 算法套件扩展|
|`zknd`||[Zknd](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- NIST 套件：AES 解密|
|`zkne`||[Zkne](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- NIST 套件：AES 加密|
|`zknh`||[Zknh](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- NIST 套件：哈希函数指令|
|`zkr`||[Zkr](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 熵源扩展|
|`zks`|`zksed`, `zksh`, `zbkb`, `zbkc`, `zkbx`|[Zks](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 商密算法套件|
|`zksed`||[Zksed](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 商密套件：SM4 分组密码指令|
|`zksh`||[Zksh](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 商密套件：SM3 哈希函数指令|
|`zkt`||[Zkt](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 数据无关执行延迟子集|
|`ztso`||[Ztso](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/ztso-st-ext.adoc) --- 总存储排序|

<!-- Keep links near each table to make it easier to move and update. -->

<div class="rule" id="r-attributes.codegen.target_feature.wasm"><a class="rule-link" href="#r-attributes.codegen.target_feature.wasm" title="attributes.codegen.target_feature.wasm"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.wasm]</span></a>
</div>

#### `wasm32` 或 `wasm64`

在 Wasm 平台上，安全的 `#[target_feature]` 函数始终可以在安全上下文中使用。无法通过 `#[target_feature]` 属性导致未定义行为，因为尝试使用 Wasm 引擎不支持的指令会在加载时失败，不会有被解释为与编译器预期不同方式的风险。

|特性|隐式启用|说明|
|--|----|--|
|`bulk-memory`||[WebAssembly 批量内存操作提案](https://github.com/WebAssembly/bulk-memory-operations)|
|`extended-const`||[WebAssembly 扩展 const 表达式提案](https://github.com/WebAssembly/extended-const)|
|`mutable-globals`||[WebAssembly 可变全局提案](https://github.com/WebAssembly/mutable-global)|
|`nontrapping-fptoint`||[WebAssembly 非陷入式浮点到整数转换提案](https://github.com/WebAssembly/nontrapping-float-to-int-conversions)|
|`relaxed-simd`|`simd128`|[WebAssembly 宽松 simd 提案](https://github.com/WebAssembly/relaxed-simd)|
|`sign-ext`||[WebAssembly 符号扩展运算符提案](https://github.com/WebAssembly/sign-extension-ops)|
|`simd128`||[WebAssembly simd 提案](https://github.com/webassembly/simd)|
|`multivalue`||[WebAssembly 多值提案](https://github.com/webassembly/multi-value)|
|`reference-types`||[WebAssembly 引用类型提案](https://github.com/webassembly/reference-types)|
|`tail-call`||[WebAssembly 尾调用提案](https://github.com/webassembly/tail-call)|

<div class="rule" id="r-attributes.codegen.target_feature.s390x"><a class="rule-link" href="#r-attributes.codegen.target_feature.s390x" title="attributes.codegen.target_feature.s390x"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.s390x]</span></a>
</div>

#### `s390x`

在 `s390x` 目标上，使用带有 `#[target_feature]` 属性的函数时，需遵循[上述限制](codegen.md#r-attributes.codegen.target_feature.safety-restrictions)。

关于这些特性的更多文档，可参见 _[z/Architecture Principles of Operation](https://publibfp.dhe.ibm.com/epubs/pdf/a227832d.pdf)_ 第一章中的 “Additions to z/Architecture” 一节。

|特性|隐式启用|说明|
|--|----|--|
|`vector`||128 位向量指令|
|`vector-enhancements-1`|`vector`|向量增强 1|
|`vector-enhancements-2`|`vector-enhancements-1`|向量增强 2|
|`vector-enhancements-3`|`vector-enhancements-2`|向量增强 3|
|`vector-packed-decimal`|`vector`|向量密集十进制|
|`vector-packed-decimal-enhancement`|`vector-packed-decimal`|向量密集十进制增强|
|`vector-packed-decimal-enhancement-2`|`vector-packed-decimal-enhancement-2`|向量密集十进制增强 2|
|`vector-packed-decimal-enhancement-3`|`vector-packed-decimal-enhancement-3`|向量密集十进制增强 3|
|`nnp-assist`|`vector`|nnp 辅助|
|`miscellaneous-extensions-2`||杂项扩展 2|
|`miscellaneous-extensions-3`||杂项扩展 3|
|`miscellaneous-extensions-4`||杂项扩展 4|

<div class="rule" id="r-attributes.codegen.target_feature.info"><a class="rule-link" href="#r-attributes.codegen.target_feature.info" title="attributes.codegen.target_feature.info"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.info]</span></a>
</div>

### 附加信息

<div class="rule" id="r-attributes.codegen.target_feature.remark-cfg"><a class="rule-link" href="#r-attributes.codegen.target_feature.remark-cfg" title="attributes.codegen.target_feature.remark-cfg"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.remark-cfg]</span></a>
</div>

有关基于编译时设置选择性启用或禁用代码编译，请参见[`target_feature` 条件编译选项](../conditional-compilation.md#target_feature)。请注意，该选项不受 `target_feature` 属性影响，而仅由为整个 crate 启用的特性驱动。

<div class="rule" id="r-attributes.codegen.target_feature.remark-rt"><a class="rule-link" href="#r-attributes.codegen.target_feature.remark-rt" title="attributes.codegen.target_feature.remark-rt"><span>[attributes<wbr>.codegen<wbr>.target_feature<wbr>.remark-rt]</span></a>
</div>

是否启用了某项特性，可以在运行时使用标准库中平台特定的宏进行检查，例如 [`is_x86_feature_detected`](../../std/arch/macro.is_x86_feature_detected.html) 或 [`is_aarch64_feature_detected`](../../std/arch/macro.is_aarch64_feature_detected.html)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会为每个目标和 CPU 默认启用一组特性。可以使用 [`-C target-cpu`](../../rustc/codegen-options/index.html#target-cpu) 标志选择 CPU。还可以使用 [`-C target-feature`](../../rustc/codegen-options/index.html#target-feature) 标志为整个 crate 启用或禁用单独的特性。

</div>

<div class="rule" id="r-attributes.codegen.track_caller"><a class="rule-link" href="#r-attributes.codegen.track_caller" title="attributes.codegen.track_caller"><span>[attributes<wbr>.codegen<wbr>.track_caller]</span></a>
</div>

## `track_caller` 属性

<div class="rule" id="r-attributes.codegen.track_caller.allowed-positions"><a class="rule-link" href="#r-attributes.codegen.track_caller.allowed-positions" title="attributes.codegen.track_caller.allowed-positions"><span>[attributes<wbr>.codegen<wbr>.track_caller<wbr>.allowed-positions]</span></a>
</div>

`track_caller` 属性可以应用于任何具有 [`"Rust"` ABI](../items/external-blocks.md#abi) 的函数，但入口点 `fn main` 除外。

<div class="rule" id="r-attributes.codegen.track_caller.traits"><a class="rule-link" href="#r-attributes.codegen.track_caller.traits" title="attributes.codegen.track_caller.traits"><span>[attributes<wbr>.codegen<wbr>.track_caller<wbr>.traits]</span></a>
</div>

当该属性应用于 trait 声明中的函数和方法时，它会适用于所有实现。如果该 trait 提供了带有该属性的默认实现，那么该属性也适用于覆盖实现。

<div class="rule" id="r-attributes.codegen.track_caller.extern"><a class="rule-link" href="#r-attributes.codegen.track_caller.extern" title="attributes.codegen.track_caller.extern"><span>[attributes<wbr>.codegen<wbr>.track_caller<wbr>.extern]</span></a>
</div>

当该属性应用于 `extern` 块中的函数时，任何链接到的实现也必须应用该属性，否则会导致未定义行为。当该属性应用于某个向 `extern` 块提供的函数时，`extern` 块中的声明也必须带有该属性，否则会导致未定义行为。

<div class="rule" id="r-attributes.codegen.track_caller.behavior"><a class="rule-link" href="#r-attributes.codegen.track_caller.behavior" title="attributes.codegen.track_caller.behavior"><span>[attributes<wbr>.codegen<wbr>.track_caller<wbr>.behavior]</span></a>
</div>

### 行为

将该属性应用于函数 `f` 后，`f` 内部的代码便可以获得导致调用 `f` 的“最顶层”已追踪调用的 [`Location`](../../core/panic/location/struct.Location.html) 提示。在观察点上，某个实现的行为如同它从 `f` 的栈帧向上遍历调用栈，找到最近的未带属性函数 `outer` 的栈帧，并返回 `outer` 中该已追踪调用的 [`Location`](../../core/panic/location/struct.Location.html)。

```rust
#[track_caller]
fn f() {
    println!("{}", std::panic::Location::caller());
}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `core` 提供了 [`core::panic::Location::caller`](../../core/panic/location/struct.Location.html#method.caller) 用于观测调用者位置。它封装了由 `rustc` 实现的 [`core::intrinsics::caller_location`](../../core/intrinsics/fn.caller_location.html) 内在函数。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 由于得到的 `Location` 只是一个提示，实现可以提前停止向上遍历调用栈。重要注意事项请参见[局限性](#limitations)。

</div>

#### 示例

`calls_f` 直接调用 `f` 时，`f` 中的代码会观测到它在 `calls_f` 中的调用位置：

```rust
# #[track_caller]
# fn f() {
#     println!("{}", std::panic::Location::caller());
# }
fn calls_f() {
    f(); // <-- f() prints this location
}
```

当 `f` 由另一个带属性的函数 `g` 调用，而 `g` 又由 `calls_g` 调用时，`f` 和 `g` 中的代码都会观测到 `g` 在 `calls_g` 中的调用位置：

```rust
# #[track_caller]
# fn f() {
#     println!("{}", std::panic::Location::caller());
# }
#[track_caller]
fn g() {
    println!("{}", std::panic::Location::caller());
    f();
}

fn calls_g() {
    g(); // <-- g() prints this location twice, once itself and once from f()
}
```

当 `g` 由另一个带属性的函数 `h` 调用，而 `h` 又由 `calls_h` 调用时，`f`、`g` 和 `h` 中的所有代码都会观测到 `h` 在 `calls_h` 中的调用位置：

```rust
# #[track_caller]
# fn f() {
#     println!("{}", std::panic::Location::caller());
# }
# #[track_caller]
# fn g() {
#     println!("{}", std::panic::Location::caller());
#     f();
# }
#[track_caller]
fn h() {
    println!("{}", std::panic::Location::caller());
    g();
}

fn calls_h() {
    h(); // <-- prints this location three times, once itself, once from g(), once from f()
}
```

以此类推。

<div class="rule" id="r-attributes.codegen.track_caller.limits"><a class="rule-link" href="#r-attributes.codegen.track_caller.limits" title="attributes.codegen.track_caller.limits"><span>[attributes<wbr>.codegen<wbr>.track_caller<wbr>.limits]</span></a>
</div>

### 限制

<div class="rule" id="r-attributes.codegen.track_caller.hint"><a class="rule-link" href="#r-attributes.codegen.track_caller.hint" title="attributes.codegen.track_caller.hint"><span>[attributes<wbr>.codegen<wbr>.track_caller<wbr>.hint]</span></a>
</div>

该信息只是提示，实现不必保留它。

<div class="rule" id="r-attributes.codegen.track_caller.decay"><a class="rule-link" href="#r-attributes.codegen.track_caller.decay" title="attributes.codegen.track_caller.decay"><span>[attributes<wbr>.codegen<wbr>.track_caller<wbr>.decay]</span></a>
</div>

尤其是，将带有 `#[track_caller]` 的函数强制转换为函数指针时，会创建一个 shim；对观察者来说，它似乎是在该带属性函数的定义位置被调用的，从而在虚调用间丢失实际的调用者信息。这种强制转换的一个常见例子，是创建其方法带有该属性的 trait 对象。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 上述用于函数指针的 shim 是必要的，因为 `rustc` 在代码生成上下文中通过向函数 ABI 追加一个隐式参数来实现 `track_caller`，但这对于间接调用来说是不健全的，因为该参数不是函数类型的一部分，而给定的函数指针类型既可能引用带有该属性的函数，也可能不引用。创建 shim 会向函数指针的调用者隐藏这个隐式参数，从而保持健全性。

</div>

<!-- template:attributes -->

<div class="rule" id="r-attributes.codegen.instruction_set"><a class="rule-link" href="#r-attributes.codegen.instruction_set" title="attributes.codegen.instruction_set"><span>[attributes<wbr>.codegen<wbr>.instruction_set]</span></a>
</div>

## `instruction_set` 属性

<div class="rule" id="r-attributes.codegen.instruction_set.intro"><a class="rule-link" href="#r-attributes.codegen.instruction_set.intro" title="attributes.codegen.instruction_set.intro"><span>[attributes<wbr>.codegen<wbr>.instruction_set<wbr>.intro]</span></a>
</div>

_`instruction_set` [属性](../attributes.md)_ 指定函数在代码生成期间将使用的指令集。这允许在单个程序中混用多种指令集。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > <!-- ignore: arm-only -->
 > 
 > ```rust,ignore
 > #[instruction_set(arm::a32)]
 > fn arm_code() {}
 > 
 > #[instruction_set(arm::t32)]
 > fn thumb_code() {}
 > ```

</div>

<div class="rule" id="r-attributes.codegen.instruction_set.syntax"><a class="rule-link" href="#r-attributes.codegen.instruction_set.syntax" title="attributes.codegen.instruction_set.syntax"><span>[attributes<wbr>.codegen<wbr>.instruction_set<wbr>.syntax]</span></a>
</div>

`instruction_set` 属性使用 [MetaListPaths](../attributes.md#grammar-MetaListPaths) 语法来指定单一路径，该路径由架构族名称和指令集名称组成。

<div class="rule" id="r-attributes.codegen.instruction_set.allowed-positions"><a class="rule-link" href="#r-attributes.codegen.instruction_set.allowed-positions" title="attributes.codegen.instruction_set.allowed-positions"><span>[attributes<wbr>.codegen<wbr>.instruction_set<wbr>.allowed-positions]</span></a>
</div>

`instruction_set` 属性只能应用于具有[函数体](../items/functions.md#r-items.fn.body)的函数，包括[闭包](../expressions/closure-expr.md#r-expr.closure)、[async 块](../expressions/block-expr.md#r-expr.block.async)、[自由函数](../items/functions.md#r-items.fn)、[固有 impl](../items/implementations.md#r-items.impl.inherent) 或 [trait impl](../items/implementations.md#r-items.impl.trait) 中的[关联函数](../items/associated-items.md#r-items.associated.fn)，以及在这些函数具有[默认定义](../items/traits.md#r-items.traits.associated-item-decls)时，[trait 定义](../items/traits.md#r-items.traits)中的关联函数。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 尽管该属性可以应用于[闭包](../expressions/closure-expr.md#r-expr.closure)和[async 块](../expressions/block-expr.md#r-expr.block.async)，但其用途有限，因为我们尚不支持在表达式上使用属性。

</div>

<div class="rule" id="r-attributes.codegen.instruction_set.duplicates"><a class="rule-link" href="#r-attributes.codegen.instruction_set.duplicates" title="attributes.codegen.instruction_set.duplicates"><span>[attributes<wbr>.codegen<wbr>.instruction_set<wbr>.duplicates]</span></a>
</div>

`instruction_set` 属性在一个函数上只能使用一次。

<div class="rule" id="r-attributes.codegen.instruction_set.target-limits"><a class="rule-link" href="#r-attributes.codegen.instruction_set.target-limits" title="attributes.codegen.instruction_set.target-limits"><span>[attributes<wbr>.codegen<wbr>.instruction_set<wbr>.target-limits]</span></a>
</div>

`instruction_set` 属性只能用于支持给定值的目标。

<div class="rule" id="r-attributes.codegen.instruction_set.inline-asm"><a class="rule-link" href="#r-attributes.codegen.instruction_set.inline-asm" title="attributes.codegen.instruction_set.inline-asm"><span>[attributes<wbr>.codegen<wbr>.instruction_set<wbr>.inline-asm]</span></a>
</div>

当使用 `instruction_set` 属性时，函数中的任何内联汇编都必须使用指定的指令集，而不是目标默认指令集。

<div class="rule" id="r-attributes.codegen.instruction_set.arm"><a class="rule-link" href="#r-attributes.codegen.instruction_set.arm" title="attributes.codegen.instruction_set.arm"><span>[attributes<wbr>.codegen<wbr>.instruction_set<wbr>.arm]</span></a>
</div>

### ARM 上的 `instruction_set`

以 `ARMv4T` 和 `ARMv5te` 架构为目标时，`instruction_set` 支持的值为：

- `arm::a32` --- 将函数生成为 A32 “ARM” 代码。
- `arm::t32` --- 将函数生成为 T32 “Thumb” 代码。

如果取出该函数的地址作为函数指针，则地址的最低位将取决于所选的指令集：

- 对于 `arm::a32`（“ARM”），它将为 0。
- 对于 `arm::t32`（“Thumb”），它将为 1。