<div class="rule" id="r-items.extern-crate"><a class="rule-link" href="#r-items.extern-crate" title="items.extern-crate"><span>[items<wbr>.extern-crate]</span></a>
</div>

# `extern crate` 声明

<div class="rule" id="r-items.extern-crate.syntax"><a class="rule-link" href="#r-items.extern-crate.syntax" title="items.extern-crate.syntax"><span>[items<wbr>.extern-crate<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ExternCrate" onclick="show_railroad()">[ExternCrate](extern-crates.md#railroad-ExternCrate)</span> → <span class="grammar-literal">extern</span> <span class="grammar-literal">crate</span> <span class="grammar-text">[CrateRef](extern-crates.md#grammar-CrateRef)</span> <span class="grammar-text">[AsClause](extern-crates.md#grammar-AsClause)</span><sup>?</sup> <span class="grammar-literal">;</span>

<span class="grammar-text grammar-production" id="grammar-CrateRef" onclick="show_railroad()">[CrateRef](extern-crates.md#railroad-CrateRef)</span> → <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> | <span class="grammar-literal">self</span>

<span class="grammar-text grammar-production" id="grammar-AsClause" onclick="show_railroad()">[AsClause](extern-crates.md#railroad-AsClause)</span> → <span class="grammar-literal">as</span> ( <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> | <span class="grammar-literal">\_</span> )

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 482px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ExternCrate"><svg class="railroad" viewBox="0 0 482 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="extern-crates.md#grammar-ExternCrate">
<text class="comment" x="53" y="25">
ExternCrate</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="35" y="55"/>
<text x="69" y="71">
extern</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="113" y="55"/>
<text x="143" y="71">
crate</text>
</g>
<a class="link" xlink:href="extern-crates.md#railroad-CrateRef">
<g class="nonterminal">
<rect height="22" width="84" x="183" y="55"/>
<text x="225" y="71">
CrateRef</text>
</g>
</a>
<g class="optional">
<path d=" M 277 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 84 m -39 0 l -5 -5 m 0 10 l 5 -5 m 39 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="extern-crates.md#railroad-AsClause">
<g class="nonterminal">
<rect height="22" width="84" x="301" y="55"/>
<text x="343" y="71">
AsClause</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="419" y="55"/>
<text x="433" y="71">
;</text>
</g>
<path d=" M 103 66 h 10"/>
<path d=" M 173 66 h 10"/>
<path d=" M 267 66 h 10"/>
<path d=" M 409 66 h 10"/>
</g>
<path d=" M 457 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 447 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 218px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CrateRef"><svg class="railroad" viewBox="0 0 218 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="extern-crates.md#grammar-CrateRef">
<text class="comment" x="43" y="25">
CrateRef</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 100 0 h 24"/>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="42"/>
<text x="109" y="58">
IDENTIFIER</text>
</g>
</a>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 124 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 52 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="75"/>
<text x="85" y="91">
self</text>
</g>
</g>
<path d=" M 193 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 183 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 264px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-AsClause"><svg class="railroad" viewBox="0 0 264 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="extern-crates.md#grammar-AsClause">
<text class="comment" x="43" y="25">
AsClause</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="42"/>
<text x="53" y="58">
as</text>
</g>
<g class="choice">
<path d=" M 81 53 h 24 m 100 0 h 24"/>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="105" y="42"/>
<text x="155" y="58">
IDENTIFIER</text>
</g>
</a>
<path d=" M 81 53 a 12 12 0 0 1 12 12 v 9 m 124 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 93 74 v 0 a 12 12 0 0 0 12 12 m 28 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="105" y="75"/>
<text x="119" y="91">
_</text>
</g>
</g>
<path d=" M 71 53 h 10"/>
</g>
<path d=" M 239 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 229 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.extern-crate.intro"><a class="rule-link" href="#r-items.extern-crate.intro" title="items.extern-crate.intro"><span>[items<wbr>.extern-crate<wbr>.intro]</span></a>
</div>

_`extern crate` 声明_ 指定对外部 crate 的依赖。

<div class="rule" id="r-items.extern-crate.namespace"><a class="rule-link" href="#r-items.extern-crate.namespace" title="items.extern-crate.namespace"><span>[items<wbr>.extern-crate<wbr>.namespace]</span></a>
</div>

随后，该外部 crate 会在声明所在作用域中，作为给定的[标识符](../identifiers.md)绑定到[类型命名空间](../names/namespaces.md)。

<div class="rule" id="r-items.extern-crate.extern-prelude"><a class="rule-link" href="#r-items.extern-crate.extern-prelude" title="items.extern-crate.extern-prelude"><span>[items<wbr>.extern-crate<wbr>.extern-prelude]</span></a>
</div>

此外，如果 `extern crate` 出现在 crate 根中，则 crate 名也会被加入 [extern prelude](../names/preludes.md#extern-prelude)，使其在所有模块中自动进入作用域。

<div class="rule" id="r-items.extern-crate.as"><a class="rule-link" href="#r-items.extern-crate.as" title="items.extern-crate.as"><span>[items<wbr>.extern-crate<wbr>.as]</span></a>
</div>

`as` 子句可用于将导入的 crate 绑定到另一个名称。

<div class="rule" id="r-items.extern-crate.lookup"><a class="rule-link" href="#r-items.extern-crate.lookup" title="items.extern-crate.lookup"><span>[items<wbr>.extern-crate<wbr>.lookup]</span></a>
</div>

外部 crate 会在编译时解析为特定的 `soname`，并且对该 `soname` 的运行时链接需求会被传递给链接器，以便在运行时加载。`soname` 的编译时解析方式是扫描编译器的库路径，并将可选提供的 `crate_name` 与外部 crate 编译时声明的 [`crate_name` 属性](../crates-and-source-files.md#the-crate_name-attribute)进行匹配。如果未提供 `crate_name`，则假定有一个默认的 `name` 属性，其值等于 `extern crate` 声明中给出的[标识符](../identifiers.md)。

<div class="rule" id="r-items.extern-crate.self"><a class="rule-link" href="#r-items.extern-crate.self" title="items.extern-crate.self"><span>[items<wbr>.extern-crate<wbr>.self]</span></a>
</div>

可以导入 `self` crate，这会创建到当前 crate 的绑定。在这种情况下，必须使用 `as` 子句指定要将其绑定到的名称。

`extern crate` 声明的三个示例：

<!-- ignore: requires external crates -->

```rust,ignore
extern crate pcre;

extern crate std; // equivalent to: extern crate std as std;

extern crate std as ruststd; // linking to 'std' under another name
```

<div class="rule" id="r-items.extern-crate.name-restrictions"><a class="rule-link" href="#r-items.extern-crate.name-restrictions" title="items.extern-crate.name-restrictions"><span>[items<wbr>.extern-crate<wbr>.name-restrictions]</span></a>
</div>

命名 Rust crate 时，不允许使用连字符。不过，Cargo 包可以使用连字符。在这种情况下，如果 `Cargo.toml` 未指定 crate 名，Cargo 会透明地将 `-` 替换为 `_`（更多细节参见 [RFC 940](https://github.com/rust-lang/rfcs/blob/master/text/0940-hyphens-considered-harmful.md)）。

下面是一个示例：

<!-- ignore: requires external crates -->

```rust,ignore
// Importing the Cargo package hello-world
extern crate hello_world; // hyphen replaced with an underscore
```

<div class="rule" id="r-items.extern-crate.underscore"><a class="rule-link" href="#r-items.extern-crate.underscore" title="items.extern-crate.underscore"><span>[items<wbr>.extern-crate<wbr>.underscore]</span></a>
</div>

## 下划线导入

<div class="rule" id="r-items.extern-crate.underscore.intro"><a class="rule-link" href="#r-items.extern-crate.underscore.intro" title="items.extern-crate.underscore.intro"><span>[items<wbr>.extern-crate<wbr>.underscore<wbr>.intro]</span></a>
</div>

可以使用下划线以 `extern crate foo as _` 的形式声明外部 crate 依赖，而不在作用域中绑定其名称。对于只需要被链接、但从不被引用的 crate，这可能很有用，并且可以避免被报告为未使用。

<div class="rule" id="r-items.extern-crate.underscore.macro_use"><a class="rule-link" href="#r-items.extern-crate.underscore.macro_use" title="items.extern-crate.underscore.macro_use"><span>[items<wbr>.extern-crate<wbr>.underscore<wbr>.macro_use]</span></a>
</div>

[`macro_use` 属性](../macros-by-example.md#the-macro_use-attribute)照常工作，并将宏名称导入 [`macro_use` prelude](../names/preludes.md#macro_use-prelude)。

<!-- template:attributes -->

<div class="rule" id="r-items.extern-crate.no_link"><a class="rule-link" href="#r-items.extern-crate.no_link" title="items.extern-crate.no_link"><span>[items<wbr>.extern-crate<wbr>.no_link]</span></a>
</div>

## `no_link` 属性

<div class="rule" id="r-items.extern-crate.no_link.intro"><a class="rule-link" href="#r-items.extern-crate.no_link.intro" title="items.extern-crate.no_link.intro"><span>[items<wbr>.extern-crate<wbr>.no_link<wbr>.intro]</span></a>
</div>

_`no_link` [属性](../attributes.md#r-attributes)_ 可以应用于 `extern crate` 项，以阻止链接该 crate。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 例如，当只需要某个 crate 的宏时，这会很有用。

</div>

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > <!-- ignore: requires external crates -->
 > 
 > ```rust,ignore
 > #[no_link]
 > extern crate other_crate;
 > 
 > other_crate::some_macro!();
 > ```

</div>

<div class="rule" id="r-items.extern-crate.no_link.syntax"><a class="rule-link" href="#r-items.extern-crate.no_link.syntax" title="items.extern-crate.no_link.syntax"><span>[items<wbr>.extern-crate<wbr>.no_link<wbr>.syntax]</span></a>
</div>

`no_link` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-items.extern-crate.no_link.allowed-positions"><a class="rule-link" href="#r-items.extern-crate.no_link.allowed-positions" title="items.extern-crate.no_link.allowed-positions"><span>[items<wbr>.extern-crate<wbr>.no_link<wbr>.allowed-positions]</span></a>
</div>

`no_link` 属性只能应用于 `extern crate` 声明。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="rule" id="r-items.extern-crate.no_link.duplicates"><a class="rule-link" href="#r-items.extern-crate.no_link.duplicates" title="items.extern-crate.no_link.duplicates"><span>[items<wbr>.extern-crate<wbr>.no_link<wbr>.duplicates]</span></a>
</div>

在 `extern crate` 声明上，只有第一次使用 `no_link` 会产生效果。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

</div>
