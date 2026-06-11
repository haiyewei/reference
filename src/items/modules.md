<div class="rule" id="r-items.mod"><a class="rule-link" href="#r-items.mod" title="items.mod"><span>[items<wbr>.mod]</span></a>
</div>

# 模块

<div class="rule" id="r-items.mod.syntax"><a class="rule-link" href="#r-items.mod.syntax" title="items.mod.syntax"><span>[items<wbr>.mod<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Module" onclick="show_railroad()">[Module](modules.md#railroad-Module)</span> →  
      <span class="grammar-literal">unsafe</span><sup>?</sup> <span class="grammar-literal">mod</span> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-literal">;</span>  
    \| <span class="grammar-literal">unsafe</span><sup>?</sup> <span class="grammar-literal">mod</span> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-literal">{</span>  
        <span class="grammar-text">[InnerAttribute](../attributes.md#grammar-InnerAttribute)</span><sup>\*</sup>  
        <span class="grammar-text">[Item](../items.md#grammar-Item)</span><sup>\*</sup>  
      <span class="grammar-literal">}</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 822px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Module"><svg class="railroad" viewBox="0 0 822 145" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="modules.md#grammar-Module">
<text class="comment" x="36" y="25">
Module</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 66 h 24 m 318 0 h 410 m -202 0 l -5 -5 m 0 10 l 5 -5 m 202 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 59 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="83" y="55"/>
<text x="117" y="71">
unsafe</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="185" y="55"/>
<text x="207" y="71">
mod</text>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="239" y="55"/>
<text x="289" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="349" y="55"/>
<text x="363" y="71">
;</text>
</g>
<path d=" M 175 66 h 10"/>
<path d=" M 229 66 h 10"/>
<path d=" M 339 66 h 10"/>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 9 m 728 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 87 v 12 a 12 12 0 0 0 12 12 m 704 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="optional">
<path d=" M 59 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 68 m -31 0 l -5 -5 m 0 10 l 5 -5 m 31 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="83" y="100"/>
<text x="117" y="116">
unsafe</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="185" y="100"/>
<text x="207" y="116">
mod</text>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="239" y="100"/>
<text x="289" y="116">
IDENTIFIER</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="349" y="100"/>
<text x="363" y="116">
{</text>
</g>
<g class="optional">
<path d=" M 387 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 411 111 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-InnerAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="423" y="100"/>
<text x="489" y="116">
InnerAttribute</text>
</g>
</a>
</g>
</g>
<g class="optional">
<path d=" M 601 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 76 m -35 0 l -5 -5 m 0 10 l 5 -5 m 35 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 625 111 h 12 m 52 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -52 m 29 0 l 5 -5 m 0 10 l -5 -5 m -29 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../items.md#railroad-Item">
<g class="nonterminal">
<rect height="22" width="52" x="637" y="100"/>
<text x="663" y="116">
Item</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="735" y="100"/>
<text x="749" y="116">
}</text>
</g>
<path d=" M 175 111 h 10"/>
<path d=" M 229 111 h 10"/>
<path d=" M 339 111 h 10"/>
<path d=" M 377 111 h 10"/>
<path d=" M 591 111 h 10"/>
<path d=" M 725 111 h 10"/>
</g>
</g>
<path d=" M 797 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 787 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.mod.intro"><a class="rule-link" href="#r-items.mod.intro" title="items.mod.intro"><span>[items<wbr>.mod<wbr>.intro]</span></a>
</div>

模块是零个或多个[项](../items.md)的容器。

<div class="rule" id="r-items.mod.def"><a class="rule-link" href="#r-items.mod.def" title="items.mod.def"><span>[items<wbr>.mod<wbr>.def]</span></a>
</div>

_模块项_ 是一个带有名称、用花括号包围并以关键字 `mod` 为前缀的模块。模块项会向构成 crate 的模块树中引入一个新的具名模块。

<div class="rule" id="r-items.mod.nesting"><a class="rule-link" href="#r-items.mod.nesting" title="items.mod.nesting"><span>[items<wbr>.mod<wbr>.nesting]</span></a>
</div>

模块可以任意嵌套。

模块示例：

```rust
mod math {
    type Complex = (f64, f64);
    fn sin(f: f64) -> f64 {
        /* ... */
#       unimplemented!();
    }
    fn cos(f: f64) -> f64 {
        /* ... */
#       unimplemented!();
    }
    fn tan(f: f64) -> f64 {
        /* ... */
#       unimplemented!();
    }
}
```

<div class="rule" id="r-items.mod.namespace"><a class="rule-link" href="#r-items.mod.namespace" title="items.mod.namespace"><span>[items<wbr>.mod<wbr>.namespace]</span></a>
</div>

模块定义在其所在模块或块的[类型命名空间](../names/namespaces.md)中。

<div class="rule" id="r-items.mod.multiple-items"><a class="rule-link" href="#r-items.mod.multiple-items" title="items.mod.multiple-items"><span>[items<wbr>.mod<wbr>.multiple-items]</span></a>
</div>

在一个模块内的同一命名空间中定义多个同名项是错误。关于限制和遮蔽行为的更多细节，参见[作用域章节](../names/scopes.md)。

<div class="rule" id="r-items.mod.unsafe"><a class="rule-link" href="#r-items.mod.unsafe" title="items.mod.unsafe"><span>[items<wbr>.mod<wbr>.unsafe]</span></a>
</div>

`unsafe` 关键字在语法上允许出现在 `mod` 关键字之前，但会在语义层面被拒绝。这允许宏先消费该语法并使用 `unsafe` 关键字，然后再将其从 token 流中移除。

<div class="rule" id="r-items.mod.outlined"><a class="rule-link" href="#r-items.mod.outlined" title="items.mod.outlined"><span>[items<wbr>.mod<wbr>.outlined]</span></a>
</div>

## 模块源文件名

<div class="rule" id="r-items.mod.outlined.intro"><a class="rule-link" href="#r-items.mod.outlined.intro" title="items.mod.outlined.intro"><span>[items<wbr>.mod<wbr>.outlined<wbr>.intro]</span></a>
</div>

没有主体的模块会从外部文件加载。当模块没有 `path` 属性时，文件路径会映射逻辑上的[模块路径](../paths.md)。

<div class="rule" id="r-items.mod.outlined.search"><a class="rule-link" href="#r-items.mod.outlined.search" title="items.mod.outlined.search"><span>[items<wbr>.mod<wbr>.outlined<wbr>.search]</span></a>
</div>

祖先模块路径组件是目录，而模块内容位于以模块名加 `.rs` 扩展名命名的文件中。例如，以下模块结构可以有与之对应的文件系统结构：

|模块路径|文件系统路径|文件内容|
|----|------|----|
|`crate`|`lib.rs`|`mod util;`|
|`crate::util`|`util.rs`|`mod config;`|
|`crate::util::config`|`util/config.rs`||

<div class="rule" id="r-items.mod.outlined.search-mod"><a class="rule-link" href="#r-items.mod.outlined.search-mod" title="items.mod.outlined.search-mod"><span>[items<wbr>.mod<wbr>.outlined<wbr>.search-mod]</span></a>
</div>

模块文件名也可以是以模块名命名的目录，内容则位于该目录内名为 `mod.rs` 的文件中。上面的示例也可以改为用名为 `util/mod.rs` 的文件表示 `crate::util` 的内容。不允许同时存在 `util.rs` 和 `util/mod.rs`。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 在 `rustc` 1.30 之前，使用 `mod.rs` 文件是加载带有嵌套子模块的模块的方式。推荐使用新的命名约定，因为它更加一致，并避免项目中出现许多名为 `mod.rs` 的文件。

</div>

<div class="rule" id="r-items.mod.outlined.path"><a class="rule-link" href="#r-items.mod.outlined.path" title="items.mod.outlined.path"><span>[items<wbr>.mod<wbr>.outlined<wbr>.path]</span></a>
</div>

### `path` 属性

<div class="rule" id="r-items.mod.outlined.path.intro"><a class="rule-link" href="#r-items.mod.outlined.path.intro" title="items.mod.outlined.path.intro"><span>[items<wbr>.mod<wbr>.outlined<wbr>.path<wbr>.intro]</span></a>
</div>

用于加载外部文件模块的目录和文件可以受到 `path` 属性的影响。

<div class="rule" id="r-items.mod.outlined.path.search"><a class="rule-link" href="#r-items.mod.outlined.path.search" title="items.mod.outlined.path.search"><span>[items<wbr>.mod<wbr>.outlined<wbr>.path<wbr>.search]</span></a>
</div>

对于不在内联模块块内的模块上的 `path` 属性，文件路径相对于源文件所在的目录。例如，以下代码片段会根据其所在位置使用所示路径：

<!-- ignore: requires external files -->

```rust,ignore
#[path = "foo.rs"]
mod c;
```

|源文件|`c` 的文件位置|`c` 的模块路径|
|---|---------|---------|
|`src/a/b.rs`|`src/a/foo.rs`|`crate::a::b::c`|
|`src/a/mod.rs`|`src/a/foo.rs`|`crate::a::c`|

<div class="rule" id="r-items.mod.outlined.path.search-nested"><a class="rule-link" href="#r-items.mod.outlined.path.search-nested" title="items.mod.outlined.path.search-nested"><span>[items<wbr>.mod<wbr>.outlined<wbr>.path<wbr>.search-nested]</span></a>
</div>

对于内联模块块内的 `path` 属性，文件路径的相对位置取决于 `path` 属性所在源文件的种类。“mod-rs” 源文件是根模块（如 `lib.rs` 或 `main.rs`）以及文件名为 `mod.rs` 的模块。“non-mod-rs” 源文件是所有其他模块文件。在 mod-rs 文件中，内联模块块内 `path` 属性的路径相对于 mod-rs 文件所在目录，并将内联模块组件作为目录包含在内。对于 non-mod-rs 文件，规则相同，只是路径以一个按该 non-mod-rs 模块命名的目录开头。例如，以下代码片段会根据其所在位置使用所示路径：

<!-- ignore: requires external files -->

```rust,ignore
mod inline {
    #[path = "other.rs"]
    mod inner;
}
```

|源文件|`inner` 的文件位置|`inner` 的模块路径|
|---|-------------|-------------|
|`src/a/b.rs`|`src/a/b/inline/other.rs`|`crate::a::b::inline::inner`|
|`src/a/mod.rs`|`src/a/inline/other.rs`|`crate::a::inline::inner`|

下面是一个组合使用内联模块上的 `path` 属性规则以及其中嵌套模块规则的示例（适用于 mod-rs 和 non-mod-rs 文件）：

<!-- ignore: requires external files -->

```rust,ignore
#[path = "thread_files"]
mod thread {
    // Load the `local_data` module from `thread_files/tls.rs` relative to
    // this source file's directory.
    #[path = "tls.rs"]
    mod local_data;
}
```

<div class="rule" id="r-items.mod.attributes"><a class="rule-link" href="#r-items.mod.attributes" title="items.mod.attributes"><span>[items<wbr>.mod<wbr>.attributes]</span></a>
</div>

## 模块上的属性

<div class="rule" id="r-items.mod.attributes.intro"><a class="rule-link" href="#r-items.mod.attributes.intro" title="items.mod.attributes.intro"><span>[items<wbr>.mod<wbr>.attributes<wbr>.intro]</span></a>
</div>

模块与所有项一样，接受外部属性。它们也接受内部属性：对于带有主体的模块，内部属性位于 `{` 之后；或者位于源文件开头，在可选的 BOM 和 shebang 之后。

<div class="rule" id="r-items.mod.attributes.supported"><a class="rule-link" href="#r-items.mod.attributes.supported" title="items.mod.attributes.supported"><span>[items<wbr>.mod<wbr>.attributes<wbr>.supported]</span></a>
</div>

在模块上有意义的内置属性包括 [`cfg`](../conditional-compilation.md)、[`deprecated`](../attributes/diagnostics.md#the-deprecated-attribute)、[`doc`](../../rustdoc/the-doc-attribute.html)、[lint 检查属性](../attributes/diagnostics.md#lint-check-attributes)、[`path`](#the-path-attribute) 和 [`no_implicit_prelude`](../names/preludes.md#the-no_implicit_prelude-attribute)。模块也接受宏属性。