<div class="rule" id="r-macro.proc"><a class="rule-link" href="#r-macro.proc" title="macro.proc"><span>[macro<wbr>.proc]</span></a>
</div>

# 过程宏

<div class="rule" id="r-macro.proc.intro"><a class="rule-link" href="#r-macro.proc.intro" title="macro.proc.intro"><span>[macro<wbr>.proc<wbr>.intro]</span></a>
</div>

<em>过程宏</em>允许通过执行函数来创建语法扩展。过程宏有以下三种形式：

- [类函数宏](#the-proc_macro-attribute) - `custom!(...)`
- [derive 宏](procedural-macros.md#r-macro.proc.derive) - `#[derive(CustomDerive)]`
- [属性宏](#the-proc_macro_attribute-attribute) - `#[CustomAttribute]`

过程宏允许你在编译时运行操作 Rust 语法的代码，既消费 Rust 语法，也产生 Rust 语法。可以大致将过程宏看作从一个 AST 到另一个 AST 的函数。

<div class="rule" id="r-macro.proc.def"><a class="rule-link" href="#r-macro.proc.def" title="macro.proc.def"><span>[macro<wbr>.proc<wbr>.def]</span></a>
</div>

过程宏必须定义在 [crate 类型](linkage.md)为 `proc-macro` 的 crate 根。这些宏不得在定义它们的 crate 中使用，并且只能在另一个 crate 中导入后使用。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 使用 Cargo 时，过程宏 crate 通过清单中的 `proc-macro` 键定义：
 > 
 > ```toml
 > [lib]
 > proc-macro = true
 > ```

</div>

<div class="rule" id="r-macro.proc.result"><a class="rule-link" href="#r-macro.proc.result" title="macro.proc.result"><span>[macro<wbr>.proc<wbr>.result]</span></a>
</div>

作为函数，它们必须返回语法、panic，或者无限循环。返回的语法会根据过程宏的种类替换或添加语法。panic 会被编译器捕获并转换为编译器错误。无限循环不会被编译器捕获，从而会使编译器挂起。

过程宏在编译期间运行，因此拥有与编译器相同的资源。例如，标准输入、标准错误和标准输出与编译器可访问的是同一组资源。类似地，文件访问也是相同的。因此，过程宏具有与 [Cargo 的构建脚本](../cargo/reference/build-scripts.html)相同的安全隐患。

<div class="rule" id="r-macro.proc.error"><a class="rule-link" href="#r-macro.proc.error" title="macro.proc.error"><span>[macro<wbr>.proc<wbr>.error]</span></a>
</div>

过程宏有两种报告错误的方式。第一种是 panic。第二种是发出 [`compile_error`](../core/macro.compile_error.html) 宏调用。

<div class="rule" id="r-macro.proc.proc_macro-crate"><a class="rule-link" href="#r-macro.proc.proc_macro-crate" title="macro.proc.proc_macro-crate"><span>[macro<wbr>.proc<wbr>.proc_macro-crate]</span></a>
</div>

## `proc_macro` crate

<div class="rule" id="r-macro.proc.proc_macro-crate.intro"><a class="rule-link" href="#r-macro.proc.proc_macro-crate.intro" title="macro.proc.proc_macro-crate.intro"><span>[macro<wbr>.proc<wbr>.proc_macro-crate<wbr>.intro]</span></a>
</div>

过程宏 crate 几乎总是会链接到编译器提供的 [`proc_macro` crate](../proc_macro/index.html)。`proc_macro` crate 提供编写过程宏所需的类型，以及让编写过程宏更容易的工具。

<div class="rule" id="r-macro.proc.proc_macro-crate.token-stream"><a class="rule-link" href="#r-macro.proc.proc_macro-crate.token-stream" title="macro.proc.proc_macro-crate.token-stream"><span>[macro<wbr>.proc<wbr>.proc_macro-crate<wbr>.token-stream]</span></a>
</div>

这个 crate 主要包含 [`TokenStream`](../proc_macro/struct.TokenStream.html) 类型。过程宏操作的是<em>token 流</em>而不是 AST 节点；随着时间推移，对编译器和过程宏而言，token 流都是更稳定得多的目标接口。<em>token 流</em>大致等价于 `Vec<TokenTree>`，其中 `TokenTree` 大致可以看作词法 token。例如，`foo` 是 `Ident` token，`.` 是 `Punct` token，`1.2` 是 `Literal` token。与 `Vec<TokenTree>` 不同，`TokenStream` 类型的克隆成本很低。

<div class="rule" id="r-macro.proc.proc_macro-crate.span"><a class="rule-link" href="#r-macro.proc.proc_macro-crate.span" title="macro.proc.proc_macro-crate.span"><span>[macro<wbr>.proc<wbr>.proc_macro-crate<wbr>.span]</span></a>
</div>

所有 token 都有关联的 `Span`。`Span` 是一个不能被修改但可以被构造的不透明值。`Span` 表示程序中一段源代码的范围，主要用于错误报告。虽然你不能修改 `Span` 本身，但始终可以更改与任何 token <em>关联</em>的 `Span`，例如通过从另一个 token 获取 `Span` 来更改。

<div class="rule" id="r-macro.proc.hygiene"><a class="rule-link" href="#r-macro.proc.hygiene" title="macro.proc.hygiene"><span>[macro<wbr>.proc<wbr>.hygiene]</span></a>
</div>

## 过程宏卫生性

过程宏是<em>非卫生的</em>。这意味着它们的行为就像输出 token 流被直接内联写入其旁边的代码一样。这意味着它会受到外部项的影响，也会影响外部导入。

在这种限制下，宏作者需要谨慎地确保他们的宏能在尽可能多的上下文中工作。这通常包括对库中的项使用绝对路径（例如使用 `::std::option::Option` 而不是 `Option`），或者确保生成的函数具有不太可能与其他函数冲突的名称（例如使用 `__internal_foo` 而不是 `foo`）。

<!-- TODO: rule name needs improvement -->

<!-- template:attributes -->

<div class="rule" id="r-macro.proc.proc_macro"><a class="rule-link" href="#r-macro.proc.proc_macro" title="macro.proc.proc_macro"><span>[macro<wbr>.proc<wbr>.proc_macro]</span></a>
</div>

## `proc_macro` 属性

<div class="rule" id="r-macro.proc.proc_macro.intro"><a class="rule-link" href="#r-macro.proc.proc_macro.intro" title="macro.proc.proc_macro.intro"><span>[macro<wbr>.proc<wbr>.proc_macro<wbr>.intro]</span></a>
</div>

<em>`proc_macro` [属性](attributes.md)</em>定义一个[类函数](macros.md#r-macro.invocation)过程宏。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 这个宏定义会忽略其输入，并在其作用域中发出一个函数 `answer`。
 > 
 > <!-- ignore: test doesn't support proc-macro -->
 > 
 > ```rust,ignore
 > # #![crate_type = "proc-macro"]
 > extern crate proc_macro;
 > use proc_macro::TokenStream;
 > 
 > #[proc_macro]
 > pub fn make_answer(_item: TokenStream) -> TokenStream {
 >     "fn answer() -> u32 { 42 }".parse().unwrap()
 > }
 > ```
 > 
 > 可以在二进制 crate 中使用它，将 "42" 打印到标准输出。
 > 
 > <!-- ignore: requires external crates -->
 > 
 > ```rust,ignore
 > extern crate proc_macro_examples;
 > use proc_macro_examples::make_answer;
 > 
 > make_answer!();
 > 
 > fn main() {
 >     println!("{}", answer());
 > }
 > ```

</div>

<div class="rule" id="r-macro.proc.proc_macro.syntax"><a class="rule-link" href="#r-macro.proc.proc_macro.syntax" title="macro.proc.proc_macro.syntax"><span>[macro<wbr>.proc<wbr>.proc_macro<wbr>.syntax]</span></a>
</div>

`proc_macro` 属性使用 [MetaWord](attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-macro.proc.proc_macro.allowed-positions"><a class="rule-link" href="#r-macro.proc.proc_macro.allowed-positions" title="macro.proc.proc_macro.allowed-positions"><span>[macro<wbr>.proc<wbr>.proc_macro<wbr>.allowed-positions]</span></a>
</div>

`proc_macro` 属性只能应用于类型为 `fn(TokenStream) -> TokenStream` 的 `pub` 函数，其中 [`TokenStream`](../proc_macro/struct.TokenStream.html) 来自 [`proc_macro` crate](../proc_macro/index.html)。它必须具有 ["Rust" ABI](items/functions.md#r-items.fn.extern)。不允许使用其他函数限定符。它必须位于 crate 根。

<div class="rule" id="r-macro.proc.proc_macro.duplicates"><a class="rule-link" href="#r-macro.proc.proc_macro.duplicates" title="macro.proc.proc_macro.duplicates"><span>[macro<wbr>.proc<wbr>.proc_macro<wbr>.duplicates]</span></a>
</div>

`proc_macro` 属性在一个函数上只能指定一次。

<div class="rule" id="r-macro.proc.proc_macro.namespace"><a class="rule-link" href="#r-macro.proc.proc_macro.namespace" title="macro.proc.proc_macro.namespace"><span>[macro<wbr>.proc<wbr>.proc_macro<wbr>.namespace]</span></a>
</div>

`proc_macro` 属性会在 crate 根的[宏命名空间](names/namespaces.md)中公开定义一个与该函数同名的宏。

<div class="rule" id="r-macro.proc.proc_macro.behavior"><a class="rule-link" href="#r-macro.proc.proc_macro.behavior" title="macro.proc.proc_macro.behavior"><span>[macro<wbr>.proc<wbr>.proc_macro<wbr>.behavior]</span></a>
</div>

对类函数过程宏进行类函数宏调用时，会将宏调用定界符内的内容作为输入 [`TokenStream`](../proc_macro/struct.TokenStream.html) 参数传递，并用该函数的输出 [`TokenStream`](../proc_macro/struct.TokenStream.html) 替换整个宏调用。

<div class="rule" id="r-macro.proc.proc_macro.invocation"><a class="rule-link" href="#r-macro.proc.proc_macro.invocation" title="macro.proc.proc_macro.invocation"><span>[macro<wbr>.proc<wbr>.proc_macro<wbr>.invocation]</span></a>
</div>

类函数过程宏可以在任何宏调用位置调用，包括：

- [语句](statements.md)
- [表达式](expressions.md)
- [模式](patterns.md)
- [类型表达式](types.md#type-expressions)
- [项](items.md)位置，包括 [`extern` 块](items/external-blocks.md)中的项
- 固有[实现](items/implementations.md)和 trait [实现](items/implementations.md)
- [Trait 定义](items/traits.md)

<!-- template:attributes -->

<div class="rule" id="r-macro.proc.derive"><a class="rule-link" href="#r-macro.proc.derive" title="macro.proc.derive"><span>[macro<wbr>.proc<wbr>.derive]</span></a>
</div>

## `proc_macro_derive` 属性

<div class="rule" id="r-macro.proc.derive.intro"><a class="rule-link" href="#r-macro.proc.derive.intro" title="macro.proc.derive.intro"><span>[macro<wbr>.proc<wbr>.derive<wbr>.intro]</span></a>
</div>

将 <em>`proc_macro_derive` [属性](attributes.md)</em>应用于函数，会定义一个可由 [`derive` 属性](attributes/derive.md)调用的 <em>derive 宏</em>。这些宏会得到 [struct](items/structs.md)、[enum](items/enumerations.md) 或 [union](items/unions.md) 定义的 token 流，并可以在其后发出新的[项](items.md)。它们还可以声明和使用 [derive 宏辅助属性](#derive-macro-helper-attributes)。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 这个 derive 宏会忽略其输入，并追加用于定义一个函数的 token。
 > 
 > <!-- ignore: test doesn't support proc-macro -->
 > 
 > ```rust,ignore
 > # #![crate_type = "proc-macro"]
 > extern crate proc_macro;
 > use proc_macro::TokenStream;
 > 
 > #[proc_macro_derive(AnswerFn)]
 > pub fn derive_answer_fn(_item: TokenStream) -> TokenStream {
 >     "fn answer() -> u32 { 42 }".parse().unwrap()
 > }
 > ```
 > 
 > 要使用它，可以这样写：
 > 
 > <!-- ignore: requires external crates -->
 > 
 > ```rust,ignore
 > extern crate proc_macro_examples;
 > use proc_macro_examples::AnswerFn;
 > 
 > #[derive(AnswerFn)]
 > struct Struct;
 > 
 > fn main() {
 >     assert_eq!(42, answer());
 > }
 > ```

</div>

<div class="rule" id="r-macro.proc.derive.syntax"><a class="rule-link" href="#r-macro.proc.derive.syntax" title="macro.proc.derive.syntax"><span>[macro<wbr>.proc<wbr>.derive<wbr>.syntax]</span></a>
</div>

`proc_macro_derive` 属性的语法为：

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ProcMacroDeriveAttribute" onclick="show_railroad()">[ProcMacroDeriveAttribute](procedural-macros.md#railroad-ProcMacroDeriveAttribute)</span> →  
    <span class="grammar-literal">proc\_macro\_derive</span> <span class="grammar-literal">(</span> <span class="grammar-text">[DeriveMacroName](procedural-macros.md#grammar-DeriveMacroName)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[DeriveMacroAttributes](procedural-macros.md#grammar-DeriveMacroAttributes)</span> )<sup>?</sup> <span class="grammar-literal">,</span><sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-DeriveMacroName" onclick="show_railroad()">[DeriveMacroName](procedural-macros.md#railroad-DeriveMacroName)</span> → <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span>

<span class="grammar-text grammar-production" id="grammar-DeriveMacroAttributes" onclick="show_railroad()">[DeriveMacroAttributes](procedural-macros.md#railroad-DeriveMacroAttributes)</span> →  
    <span class="grammar-literal">attributes</span> <span class="grammar-literal">(</span> ( <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup> )<sup>?</sup> <span class="grammar-literal">)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 830px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ProcMacroDeriveAttribute"><svg class="railroad" viewBox="0 0 830 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="procedural-macros.md#grammar-ProcMacroDeriveAttribute">
<text class="comment" x="102" y="25">
ProcMacroDeriveAttribute</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="156" x="35" y="55"/>
<text x="113" y="71">
proc_macro_derive</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="201" y="55"/>
<text x="215" y="71">
(</text>
</g>
<a class="link" xlink:href="procedural-macros.md#railroad-DeriveMacroName">
<g class="nonterminal">
<rect height="22" width="140" x="239" y="55"/>
<text x="309" y="71">
DeriveMacroName</text>
</g>
</a>
<g class="optional">
<path d=" M 389 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 234 m -114 0 l -5 -5 m 0 10 l 5 -5 m 114 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="413" y="55"/>
<text x="427" y="71">
,</text>
</g>
<a class="link" xlink:href="procedural-macros.md#railroad-DeriveMacroAttributes">
<g class="nonterminal">
<rect height="22" width="196" x="451" y="55"/>
<text x="549" y="71">
DeriveMacroAttributes</text>
</g>
</a>
<path d=" M 441 66 h 10"/>
</g>
</g>
<g class="optional">
<path d=" M 681 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="705" y="55"/>
<text x="719" y="71">
,</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="767" y="55"/>
<text x="781" y="71">
)</text>
</g>
<path d=" M 191 66 h 10"/>
<path d=" M 229 66 h 10"/>
<path d=" M 379 66 h 10"/>
<path d=" M 671 66 h 10"/>
<path d=" M 757 66 h 10"/>
</g>
<path d=" M 805 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 795 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 170px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-DeriveMacroName"><svg class="railroad" viewBox="0 0 170 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="procedural-macros.md#grammar-DeriveMacroName">
<text class="comment" x="67" y="25">
DeriveMacroName</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="42"/>
<text x="85" y="58">
IDENTIFIER</text>
</g>
</a>
<path d=" M 145 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 135 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 710px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-DeriveMacroAttributes"><svg class="railroad" viewBox="0 0 710 112" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="procedural-macros.md#grammar-DeriveMacroAttributes">
<text class="comment" x="92" y="25">
DeriveMacroAttributes</text>
</a>
<g class="sequence">
<path d=" M 10 78 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="100" x="35" y="67"/>
<text x="85" y="83">
attributes</text>
</g>
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
</div>

derive 宏的名称由 [DeriveMacroName](procedural-macros.md#grammar-DeriveMacroName) 给出。可选的 `attributes` 实参在 [macro.proc.derive.attributes](procedural-macros.md#r-macro.proc.derive.attributes) 中描述。

<div class="rule" id="r-macro.proc.derive.allowed-positions"><a class="rule-link" href="#r-macro.proc.derive.allowed-positions" title="macro.proc.derive.allowed-positions"><span>[macro<wbr>.proc<wbr>.derive<wbr>.allowed-positions]</span></a>
</div>

`proc_macro_derive` 属性只能应用于在 crate 根定义、具有 [Rust ABI](items/functions.md#r-items.fn.extern)、类型为 `fn(TokenStream) -> TokenStream` 的 `pub` 函数，其中 [`TokenStream`](../proc_macro/struct.TokenStream.html) 来自 [`proc_macro` crate](../proc_macro/index.html)。该函数可以是 `const`，也可以使用 `extern` 显式指定 Rust ABI，但不得使用任何其他[限定符](items/functions.md#grammar-FunctionQualifiers)（例如不得为 `async` 或 `unsafe`）。

<div class="rule" id="r-macro.proc.derive.duplicates"><a class="rule-link" href="#r-macro.proc.derive.duplicates" title="macro.proc.derive.duplicates"><span>[macro<wbr>.proc<wbr>.derive<wbr>.duplicates]</span></a>
</div>

`proc_macro_derive` 属性在一个函数上只能使用一次。

<div class="rule" id="r-macro.proc.derive.namespace"><a class="rule-link" href="#r-macro.proc.derive.namespace" title="macro.proc.derive.namespace"><span>[macro<wbr>.proc<wbr>.derive<wbr>.namespace]</span></a>
</div>

`proc_macro_derive` 属性会在 crate 根的[宏命名空间](names/namespaces.md)中公开定义该 derive 宏。

<div class="rule" id="r-macro.proc.derive.output"><a class="rule-link" href="#r-macro.proc.derive.output" title="macro.proc.derive.output"><span>[macro<wbr>.proc<wbr>.derive<wbr>.output]</span></a>
</div>

输入 [`TokenStream`](../proc_macro/struct.TokenStream.html) 是应用了 `derive` 属性的项的 token 流。输出 [`TokenStream`](../proc_macro/struct.TokenStream.html) 必须是一个（可能为空的）项集合。这些项会在同一[模块](items/modules.md)或[块](expressions/block-expr.md)中追加到输入项之后。

<div class="rule" id="r-macro.proc.derive.attributes"><a class="rule-link" href="#r-macro.proc.derive.attributes" title="macro.proc.derive.attributes"><span>[macro<wbr>.proc<wbr>.derive<wbr>.attributes]</span></a>
</div>

### 派生宏辅助属性

<div class="rule" id="r-macro.proc.derive.attributes.intro"><a class="rule-link" href="#r-macro.proc.derive.attributes.intro" title="macro.proc.derive.attributes.intro"><span>[macro<wbr>.proc<wbr>.derive<wbr>.attributes<wbr>.intro]</span></a>
</div>

derive 宏可以声明 <em>derive 宏辅助属性</em>，供应用该 derive 宏的[项](items.md)作用域内使用。这些[属性](attributes.md)是[惰性的](attributes.md#active-and-inert-attributes)。虽然它们的用途是供声明它们的宏使用，但任何宏都可以看到它们。

<div class="rule" id="r-macro.proc.derive.attributes.decl"><a class="rule-link" href="#r-macro.proc.derive.attributes.decl" title="macro.proc.derive.attributes.decl"><span>[macro<wbr>.proc<wbr>.derive<wbr>.attributes<wbr>.decl]</span></a>
</div>

derive 宏的辅助属性通过将其标识符添加到 `proc_macro_derive` 属性中的 `attributes` 列表来声明。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 这会声明一个辅助属性，然后忽略它。
 > 
 > <!-- ignore: test doesn't support proc-macro -->
 > 
 > ```rust,ignore
 > # #![crate_type="proc-macro"]
 > # extern crate proc_macro;
 > # use proc_macro::TokenStream;
 > #
 > #[proc_macro_derive(WithHelperAttr, attributes(helper))]
 > pub fn derive_with_helper_attr(_item: TokenStream) -> TokenStream {
 >     TokenStream::new()
 > }
 > ```
 > 
 > 要使用它，可以这样写：
 > 
 > <!-- ignore: requires external crates -->
 > 
 > ```rust,ignore
 > #[derive(WithHelperAttr)]
 > struct Struct {
 >     #[helper] field: (),
 > }
 > ```

</div>

<div class="rule" id="r-macro.proc.derive.attributes.scope"><a class="rule-link" href="#r-macro.proc.derive.attributes.scope" title="macro.proc.derive.attributes.scope"><span>[macro<wbr>.proc<wbr>.derive<wbr>.attributes<wbr>.scope]</span></a>
</div>

当 derive 宏调用应用于某个项时，由该 derive 宏引入的辅助属性会在以下位置进入作用域：1) 应用于该项且在词法上位于该 derive 宏调用之后的属性；2) 应用于该项内部字段和变体的属性。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > rustc 目前允许在引入 derive 辅助属性的宏之前使用这些辅助属性。以这种乱序方式使用的 derive 辅助属性不得遮蔽其他属性宏。此行为已弃用，并计划移除。
 > 
 > <!-- ignore: requires external crates -->
 > 
 > ```rust,ignore
 > #[helper] // Deprecated, hard error in the future.
 > #[derive(WithHelperAttr)]
 > struct Struct {
 >     field: (),
 > }
 > ```
 > 
 > 更多详细信息，请参见 [Rust issue #79202](https://github.com/rust-lang/rust/issues/79202)。

</div>

<!-- template:attributes -->

<div class="rule" id="r-macro.proc.attribute"><a class="rule-link" href="#r-macro.proc.attribute" title="macro.proc.attribute"><span>[macro<wbr>.proc<wbr>.attribute]</span></a>
</div>

## `proc_macro_attribute` 属性

<div class="rule" id="r-macro.proc.attribute.intro"><a class="rule-link" href="#r-macro.proc.attribute.intro" title="macro.proc.attribute.intro"><span>[macro<wbr>.proc<wbr>.attribute<wbr>.intro]</span></a>
</div>

<em>`proc_macro_attribute` [属性](attributes.md)</em>定义一个可用作[外部属性](attributes.md)的<em>属性宏</em>。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 这个属性宏接受输入流并原样发出它，实际上是一个无操作属性。
 > 
 > <!-- ignore: test doesn't support proc-macro -->
 > 
 > ```rust,ignore
 > # #![crate_type = "proc-macro"]
 > # extern crate proc_macro;
 > # use proc_macro::TokenStream;
 > 
 > #[proc_macro_attribute]
 > pub fn return_as_is(_attr: TokenStream, item: TokenStream) -> TokenStream {
 >     item
 > }
 > ```

</div>

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 这会在编译器输出中显示属性宏看到的 [`TokenStream`](../proc_macro/struct.TokenStream.html) 字符串化形式。
 > 
 > <!-- ignore: test doesn't support proc-macro -->
 > 
 > ```rust,ignore
 > // my-macro/src/lib.rs
 > # extern crate proc_macro;
 > # use proc_macro::TokenStream;
 > #[proc_macro_attribute]
 > pub fn show_streams(attr: TokenStream, item: TokenStream) -> TokenStream {
 >     println!("attr: \"{attr}\"");
 >     println!("item: \"{item}\"");
 >     item
 > }
 > ```
 > 
 > <!-- ignore: requires external crates -->
 > 
 > ```rust,ignore
 > // src/lib.rs
 > extern crate my_macro;
 > 
 > use my_macro::show_streams;
 > 
 > // Example: Basic function.
 > #[show_streams]
 > fn invoke1() {}
 > // out: attr: ""
 > // out: item: "fn invoke1() {}"
 > 
 > // Example: Attribute with input.
 > #[show_streams(bar)]
 > fn invoke2() {}
 > // out: attr: "bar"
 > // out: item: "fn invoke2() {}"
 > 
 > // Example: Multiple tokens in the input.
 > #[show_streams(multiple => tokens)]
 > fn invoke3() {}
 > // out: attr: "multiple => tokens"
 > // out: item: "fn invoke3() {}"
 > 
 > // Example: Delimiters in the input.
 > #[show_streams { delimiters }]
 > fn invoke4() {}
 > // out: attr: "delimiters"
 > // out: item: "fn invoke4() {}"
 > ```

</div>

<div class="rule" id="r-macro.proc.attribute.syntax"><a class="rule-link" href="#r-macro.proc.attribute.syntax" title="macro.proc.attribute.syntax"><span>[macro<wbr>.proc<wbr>.attribute<wbr>.syntax]</span></a>
</div>

`proc_macro_attribute` 属性使用 [MetaWord](attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-macro.proc.attribute.allowed-positions"><a class="rule-link" href="#r-macro.proc.attribute.allowed-positions" title="macro.proc.attribute.allowed-positions"><span>[macro<wbr>.proc<wbr>.attribute<wbr>.allowed-positions]</span></a>
</div>

`proc_macro_attribute` 属性只能应用于类型为 `fn(TokenStream, TokenStream) -> TokenStream` 的 `pub` 函数，其中 [`TokenStream`](../proc_macro/struct.TokenStream.html) 来自 [`proc_macro` crate](../proc_macro/index.html)。它必须具有 ["Rust" ABI](items/functions.md#r-items.fn.extern)。不允许使用其他函数限定符。它必须位于 crate 根。

<div class="rule" id="r-macro.proc.attribute.duplicates"><a class="rule-link" href="#r-macro.proc.attribute.duplicates" title="macro.proc.attribute.duplicates"><span>[macro<wbr>.proc<wbr>.attribute<wbr>.duplicates]</span></a>
</div>

`proc_macro_attribute` 属性在一个函数上只能指定一次。

<div class="rule" id="r-macro.proc.attribute.namespace"><a class="rule-link" href="#r-macro.proc.attribute.namespace" title="macro.proc.attribute.namespace"><span>[macro<wbr>.proc<wbr>.attribute<wbr>.namespace]</span></a>
</div>

`proc_macro_attribute` 属性会在 crate 根的[宏命名空间](names/namespaces.md)中定义一个与该函数同名的属性。

<div class="rule" id="r-macro.proc.attribute.use-positions"><a class="rule-link" href="#r-macro.proc.attribute.use-positions" title="macro.proc.attribute.use-positions"><span>[macro<wbr>.proc<wbr>.attribute<wbr>.use-positions]</span></a>
</div>

属性宏只能用于：

- [项](items.md)
- [`extern` 块](items/external-blocks.md)中的项
- 固有[实现](items/implementations.md)和 trait [实现](items/implementations.md)
- [Trait 定义](items/traits.md)

<div class="rule" id="r-macro.proc.attribute.behavior"><a class="rule-link" href="#r-macro.proc.attribute.behavior" title="macro.proc.attribute.behavior"><span>[macro<wbr>.proc<wbr>.attribute<wbr>.behavior]</span></a>
</div>

第一个 [`TokenStream`](../proc_macro/struct.TokenStream.html) 参数是位于属性名称之后的带定界符 token 树，但不包含外层定界符。如果应用的属性只包含属性名称，或者属性名称后跟空定界符，则该 [`TokenStream`](../proc_macro/struct.TokenStream.html) 为空。

第二个 [`TokenStream`](../proc_macro/struct.TokenStream.html) 是该[项](items.md)的其余部分，包括该[项](items.md)上的其他[属性](attributes.md)。

应用该属性的项会被返回的 [`TokenStream`](../proc_macro/struct.TokenStream.html) 中的零个或多个项替换。

<div class="rule" id="r-macro.proc.token"><a class="rule-link" href="#r-macro.proc.token" title="macro.proc.token"><span>[macro<wbr>.proc<wbr>.token]</span></a>
</div>

## 声明式宏 token 与过程宏 token

<div class="rule" id="r-macro.proc.token.intro"><a class="rule-link" href="#r-macro.proc.token.intro" title="macro.proc.token.intro"><span>[macro<wbr>.proc<wbr>.token<wbr>.intro]</span></a>
</div>

声明式 `macro_rules` 宏和过程宏对 token（更准确地说是 [`TokenTree`](../proc_macro/enum.TokenTree.html)）使用相似但不同的定义。

<div class="rule" id="r-macro.proc.token.macro_rules"><a class="rule-link" href="#r-macro.proc.token.macro_rules" title="macro.proc.token.macro_rules"><span>[macro<wbr>.proc<wbr>.token<wbr>.macro_rules]</span></a>
</div>

`macro_rules` 中的 token 树（对应于 `tt` 匹配器）定义为：

- 带定界符的组（`(...)`、`{...}` 等）
- 语言支持的所有运算符，包括单字符和多字符运算符（`+`、`+=`）。
  - 注意，此集合不包括单引号 `'`。
- 字面量（`"string"`、`1` 等）
  - 注意，取负（例如 `-1`）绝不会是此类字面量 token 的一部分，而是一个单独的运算符 token。
- 标识符，包括关键字（`ident`、`r#ident`、`fn`）
- 生命周期（`'ident`）
- `macro_rules` 中的元变量替换（例如 `mac` 展开后 `macro_rules! mac { ($my_expr: expr) => { $my_expr } }` 中的 `$my_expr`，无论传入的表达式是什么，它都会被视为单个 token 树）

<div class="rule" id="r-macro.proc.token.tree"><a class="rule-link" href="#r-macro.proc.token.tree" title="macro.proc.token.tree"><span>[macro<wbr>.proc<wbr>.token<wbr>.tree]</span></a>
</div>

过程宏中的 token 树定义为：

- 带定界符的组（`(...)`、`{...}` 等）
- 语言支持的运算符中使用的所有标点字符（`+`，但不是 `+=`），以及单引号 `'` 字符（通常用于生命周期；生命周期的拆分和合并行为见下文）
- 字面量（`"string"`、`1` 等）
  - 取负（例如 `-1`）支持作为整数字面量和浮点字面量的一部分。
- 标识符，包括关键字（`ident`、`r#ident`、`fn`）

<div class="rule" id="r-macro.proc.token.conversion.intro"><a class="rule-link" href="#r-macro.proc.token.conversion.intro" title="macro.proc.token.conversion.intro"><span>[macro<wbr>.proc<wbr>.token<wbr>.conversion<wbr>.intro]</span></a>
</div>

当 token 流传入过程宏或从过程宏传出时，会处理这两种定义之间的不匹配。注意，下面的转换可能会惰性发生，因此如果 token 未被实际检查，这些转换可能不会发生。

<div class="rule" id="r-macro.proc.token.conversion.to-proc_macro"><a class="rule-link" href="#r-macro.proc.token.conversion.to-proc_macro" title="macro.proc.token.conversion.to-proc_macro"><span>[macro<wbr>.proc<wbr>.token<wbr>.conversion<wbr>.to-proc_macro]</span></a>
</div>

传给过程宏时

- 所有多字符运算符都会被拆分为单个字符。
- 生命周期会被拆分为一个 `'` 字符和一个标识符。
- 关键字元变量 [`$crate`](macros-by-example.md#r-macro.decl.hygiene.crate) 会作为单个标识符传递。
- 所有其他元变量替换都表示为其底层 token 流。
  - 当需要保留解析优先级时，这类 token 流可以被包装进具有隐式定界符（[`Delimiter::None`](../proc_macro/enum.Delimiter.html#variant.None)）的带定界符组（[`Group`](../proc_macro/struct.Group.html)）中。
  - `tt` 和 `ident` 替换绝不会被包装进这类组中，而始终表示为其底层 token 树。

<div class="rule" id="r-macro.proc.token.conversion.from-proc_macro"><a class="rule-link" href="#r-macro.proc.token.conversion.from-proc_macro" title="macro.proc.token.conversion.from-proc_macro"><span>[macro<wbr>.proc<wbr>.token<wbr>.conversion<wbr>.from-proc_macro]</span></a>
</div>

从过程宏发出时

- 适用时，标点字符会被粘合为多字符运算符。
- 与标识符连接的单引号 `'` 会被粘合为生命周期。
- 负字面量会被转换为两个 token（`-` 和该字面量）；当需要保留解析优先级时，这两个 token 可能被包装进具有隐式定界符（[`Delimiter::None`](../proc_macro/enum.Delimiter.html#variant.None)）的带定界符组（[`Group`](../proc_macro/struct.Group.html)）中。

<div class="rule" id="r-macro.proc.token.doc-comment"><a class="rule-link" href="#r-macro.proc.token.doc-comment" title="macro.proc.token.doc-comment"><span>[macro<wbr>.proc<wbr>.token<wbr>.doc-comment]</span></a>
</div>

注意，声明式宏和过程宏都不支持文档注释 token（例如 `/// Doc`），因此在传给宏时，它们总是会被转换为表示等价 `#[doc = r"str"]` 属性的 token 流。