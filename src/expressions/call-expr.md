<div class="rule" id="r-expr.call"><a class="rule-link" href="#r-expr.call" title="expr.call"><span>[expr<wbr>.call]</span></a>
</div>

# 调用表达式

<div class="rule" id="r-expr.call.syntax"><a class="rule-link" href="#r-expr.call.syntax" title="expr.call.syntax"><span>[expr<wbr>.call<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-CallExpression" onclick="show_railroad()">[CallExpression](call-expr.md#railroad-CallExpression)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">(</span> <span class="grammar-text">[CallParams](call-expr.md#grammar-CallParams)</span><sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-CallParams" onclick="show_railroad()">[CallParams](call-expr.md#railroad-CallParams)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 404px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CallExpression"><svg class="railroad" viewBox="0 0 404 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="call-expr.md#grammar-CallExpression">
<text class="comment" x="64" y="25">
CallExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="55"/>
<text x="85" y="71">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="145" y="55"/>
<text x="159" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 183 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="call-expr.md#railroad-CallParams">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="55"/>
<text x="257" y="71">
CallParams</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="341" y="55"/>
<text x="355" y="71">
)</text>
</g>
<path d=" M 135 66 h 10"/>
<path d=" M 173 66 h 10"/>
<path d=" M 331 66 h 10"/>
</g>
<path d=" M 379 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 369 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 476px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CallParams"><svg class="railroad" viewBox="0 0 476 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="call-expr.md#grammar-CallParams">
<text class="comment" x="50" y="25">
CallParams</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="55"/>
<text x="85" y="71">
Expression</text>
</g>
</a>
<g class="optional">
<path d=" M 145 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 162 m -78 0 l -5 -5 m 0 10 l 5 -5 m 78 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 169 66 h 12 m 138 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -138 m 72 0 l 5 -5 m 0 10 l -5 -5 m -72 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="181" y="55"/>
<text x="195" y="71">
,</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="219" y="55"/>
<text x="269" y="71">
Expression</text>
</g>
</a>
<path d=" M 209 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 365 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="389" y="55"/>
<text x="403" y="71">
,</text>
</g>
</g>
<path d=" M 135 66 h 10"/>
<path d=" M 355 66 h 10"/>
</g>
<path d=" M 451 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 441 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.call.intro"><a class="rule-link" href="#r-expr.call.intro" title="expr.call.intro"><span>[expr<wbr>.call<wbr>.intro]</span></a>
</div>

_调用表达式_调用函数。调用表达式的语法是一个称为_函数操作数_的表达式，后跟一个用括号括起、以逗号分隔的表达式列表，该列表称为_实参操作数_。

<div class="rule" id="r-expr.call.convergence"><a class="rule-link" href="#r-expr.call.convergence" title="expr.call.convergence"><span>[expr<wbr>.call<wbr>.convergence]</span></a>
</div>

如果函数最终返回，则该表达式完成。

<div class="rule" id="r-expr.call.trait"><a class="rule-link" href="#r-expr.call.trait" title="expr.call.trait"><span>[expr<wbr>.call<wbr>.trait]</span></a>
</div>

对于[非函数类型](../types/function-item.md)，表达式 `f(...)` 会根据函数操作数，使用以下 trait 之一上的方法：

- [`Fn`](../../core/ops/function/trait.Fn.html) 或 [`AsyncFn`](../../core/ops/async_function/trait.AsyncFn.html) --- 共享引用。
- [`FnMut`](../../core/ops/function/trait.FnMut.html) 或 [`AsyncFnMut`](../../core/ops/async_function/trait.AsyncFnMut.html) --- 可变引用。
- [`FnOnce`](../../core/ops/function/trait.FnOnce.html) 或 [`AsyncFnOnce`](../../core/ops/async_function/trait.AsyncFnOnce.html) --- 值。

<div class="rule" id="r-expr.call.autoref-deref"><a class="rule-link" href="#r-expr.call.autoref-deref" title="expr.call.autoref-deref"><span>[expr<wbr>.call<wbr>.autoref-deref]</span></a>
</div>

如果需要，将进行自动借用。函数操作数也会按需被[自动解引用](field-expr.md#automatic-dereferencing)。

调用表达式的一些示例：

```rust
# fn add(x: i32, y: i32) -> i32 { 0 }
let three: i32 = add(1i32, 2i32);
let name: &'static str = (|| "Rust")();
```

<div class="rule" id="r-expr.call.desugar"><a class="rule-link" href="#r-expr.call.desugar" title="expr.call.desugar"><span>[expr<wbr>.call<wbr>.desugar]</span></a>
</div>

## 消除函数调用歧义

<div class="rule" id="r-expr.call.desugar.fully-qualified"><a class="rule-link" href="#r-expr.call.desugar.fully-qualified" title="expr.call.desugar.fully-qualified"><span>[expr<wbr>.call<wbr>.desugar<wbr>.fully-qualified]</span></a>
</div>

所有函数调用都是更显式的[完全限定语法](../paths.md#qualified-paths)的语法糖。

<div class="rule" id="r-expr.call.desugar.ambiguity"><a class="rule-link" href="#r-expr.call.desugar.ambiguity" title="expr.call.desugar.ambiguity"><span>[expr<wbr>.call<wbr>.desugar<wbr>.ambiguity]</span></a>
</div>

根据作用域内项所造成的调用歧义，函数调用可能需要完全限定。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 过去，文档、议题、RFC 和其他社区文字中曾使用过 "Unambiguous Function Call Syntax"、"Universal Function Call Syntax" 或 "UFCS" 这些术语。然而，这些术语描述力不足，并且可能混淆当前问题。我们在这里提及它们是为了便于搜索。

</div>

<div class="rule" id="r-expr.call.desugar.limits"><a class="rule-link" href="#r-expr.call.desugar.limits" title="expr.call.desugar.limits"><span>[expr<wbr>.call<wbr>.desugar<wbr>.limits]</span></a>
</div>

有几种经常出现的情形会导致方法调用或关联函数调用的接收者或所指对象产生歧义。这些情形可以包括：

- 多个作用域内的 trait 为相同类型定义了同名方法
- 不希望发生自动 `deref`；例如，要区分智能指针本身上的方法和该指针所指对象上的方法
- 不接受实参并返回某个类型属性的方法，例如 [`default()`](../../core/default/trait.Default.html#tymethod.default) 和 [`size_of()`](../../core/mem/fn.size_of.html)

<div class="rule" id="r-expr.call.desugar.explicit-path"><a class="rule-link" href="#r-expr.call.desugar.explicit-path" title="expr.call.desugar.explicit-path"><span>[expr<wbr>.call<wbr>.desugar<wbr>.explicit-path]</span></a>
</div>

为解决歧义，程序员可以使用更具体的路径、类型或 trait 来指称所需的方法或函数。

例如，

```rust
trait Pretty {
    fn print(&self);
}

trait Ugly {
    fn print(&self);
}

struct Foo;
impl Pretty for Foo {
    fn print(&self) {}
}

struct Bar;
impl Pretty for Bar {
    fn print(&self) {}
}
impl Ugly for Bar {
    fn print(&self) {}
}

fn main() {
    let f = Foo;
    let b = Bar;

    // we can do this because we only have one item called `print` for `Foo`s
    f.print();
    // more explicit, and, in the case of `Foo`, not necessary
    Foo::print(&f);
    // if you're not into the whole brevity thing
    <Foo as Pretty>::print(&f);

    // b.print(); // Error: multiple 'print' found
    // Bar::print(&b); // Still an error: multiple `print` found

    // necessary because of in-scope items defining `print`
    <Bar as Pretty>::print(&b);
}
```

有关更多细节和动机，请参见 [RFC 132](https://github.com/rust-lang/rfcs/blob/master/text/0132-ufcs.md)。