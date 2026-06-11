<div class="rule" id="r-expr.method"><a class="rule-link" href="#r-expr.method" title="expr.method"><span>[expr<wbr>.method]</span></a>
</div>

# 方法调用表达式

<div class="rule" id="r-expr.method.syntax"><a class="rule-link" href="#r-expr.method.syntax" title="expr.method.syntax"><span>[expr<wbr>.method<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-MethodCallExpression" onclick="show_railroad()">[MethodCallExpression](method-call-expr.md#railroad-MethodCallExpression)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">.</span> <span class="grammar-text">[PathExprSegment](../paths.md#grammar-PathExprSegment)</span> <span class="grammar-literal">(</span> <span class="grammar-text">[CallParams](call-expr.md#grammar-CallParams)</span><sup>?</sup> <span class="grammar-literal">)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 592px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MethodCallExpression"><svg class="railroad" viewBox="0 0 592 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="method-call-expr.md#grammar-MethodCallExpression">
<text class="comment" x="88" y="25">
MethodCallExpression</text>
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
.</text>
</g>
<a class="link" xlink:href="../paths.md#railroad-PathExprSegment">
<g class="nonterminal">
<rect height="22" width="140" x="183" y="55"/>
<text x="253" y="71">
PathExprSegment</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="333" y="55"/>
<text x="347" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 371 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="call-expr.md#railroad-CallParams">
<g class="nonterminal">
<rect height="22" width="100" x="395" y="55"/>
<text x="445" y="71">
CallParams</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="529" y="55"/>
<text x="543" y="71">
)</text>
</g>
<path d=" M 135 66 h 10"/>
<path d=" M 173 66 h 10"/>
<path d=" M 323 66 h 10"/>
<path d=" M 361 66 h 10"/>
<path d=" M 519 66 h 10"/>
</g>
<path d=" M 567 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 557 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.method.intro"><a class="rule-link" href="#r-expr.method.intro" title="expr.method.intro"><span>[expr<wbr>.method<wbr>.intro]</span></a>
</div>

\_方法调用_由一个表达式（_接收者_）后跟单个点号、一个表达式路径段以及带括号的表达式列表组成。

<div class="rule" id="r-expr.method.target"><a class="rule-link" href="#r-expr.method.target" title="expr.method.target"><span>[expr<wbr>.method<wbr>.target]</span></a>
</div>

方法调用会被解析为特定 trait 上的关联[方法](../items/associated-items.md#methods)：如果左侧的确切 `self`\-类型已知，则静态分派到某个方法；如果左侧表达式是间接的 [trait 对象](../types/trait-object.md)，则动态分派。

```rust
let pi: Result<f32, _> = "3.14".parse();
let log_pi = pi.unwrap_or(1.0).log(2.72);
# assert!(1.14 < log_pi && log_pi < 1.15)
```

<div class="rule" id="r-expr.method.autoref-deref"><a class="rule-link" href="#r-expr.method.autoref-deref" title="expr.method.autoref-deref"><span>[expr<wbr>.method<wbr>.autoref-deref]</span></a>
</div>

查找方法调用时，可以对接收者自动解引用或借用，以便调用方法。由于可能有多个可调用的方法，这需要比其他函数更复杂的查找过程。使用以下过程：

<div class="rule" id="r-expr.method.candidate-receivers"><a class="rule-link" href="#r-expr.method.candidate-receivers" title="expr.method.candidate-receivers"><span>[expr<wbr>.method<wbr>.candidate-receivers]</span></a>
</div>

第一步是构建候选接收者类型列表。通过反复对接收者表达式的类型进行[解引用](operator-expr.md#the-dereference-operator)来获得这些类型，将遇到的每个类型添加到列表中，然后最后尝试一次数组的 [unsized 强制转换](../type-coercions.md#unsized-coercions)，如果成功，则添加结果类型。

<div class="rule" id="r-expr.method.candidate-receivers-refs"><a class="rule-link" href="#r-expr.method.candidate-receivers-refs" title="expr.method.candidate-receivers-refs"><span>[expr<wbr>.method<wbr>.candidate-receivers-refs]</span></a>
</div>

然后，对于每个候选类型 `T`，在列表中紧接 `T` 之后添加 `&T` 和 `&mut T`。

例如，如果接收者的类型是 `Box<[i32;2]>`，则候选类型将是 `Box<[i32;2]>`、`&Box<[i32;2]>`、`&mut Box<[i32;2]>`、`[i32; 2]`（通过解引用）、`&[i32; 2]`、`&mut [i32; 2]`、`[i32]`（通过 unsized 强制转换）、`&[i32]`，最后是 `&mut [i32]`。

<div class="rule" id="r-expr.method.candidate-search"><a class="rule-link" href="#r-expr.method.candidate-search" title="expr.method.candidate-search"><span>[expr<wbr>.method<wbr>.candidate-search]</span></a>
</div>

然后，对于每个候选类型 `T`，在以下位置搜索具有该类型接收者的[可见](../visibility-and-privacy.md)方法：

1. `T` 的固有方法（直接在 `T` 上实现的方法）。
1. 由 `T` 所实现的任何[可见](../visibility-and-privacy.md) trait 提供的方法。如果 `T` 是类型参数，则先查找 `T` 上 trait 约束提供的方法。然后查找作用域中的所有其余方法。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 查找会按顺序对每个类型进行，这有时可能导致意外的结果。下面的代码将打印 "In trait impl!"，因为会先查找 `&self` 方法，所以会在找到结构体的 `&mut self` 方法之前找到 trait 方法。
 > 
 > ```rust
 > struct Foo {}
 > 
 > trait Bar {
 >   fn bar(&self);
 > }
 > 
 > impl Foo {
 >   fn bar(&mut self) {
 >     println!("In struct impl!")
 >   }
 > }
 > 
 > impl Bar for Foo {
 >   fn bar(&self) {
 >     println!("In trait impl!")
 >   }
 > }
 > 
 > fn main() {
 >   let mut f = Foo{};
 >   f.bar();
 > }
 > ```

</div>

<div class="rule" id="r-expr.method.ambiguous-target"><a class="rule-link" href="#r-expr.method.ambiguous-target" title="expr.method.ambiguous-target"><span>[expr<wbr>.method<wbr>.ambiguous-target]</span></a>
</div>

如果这导致多个可能的候选项，则为错误，并且必须将接收者[转换](call-expr.md#disambiguating-function-calls)为合适的接收者类型，才能进行方法调用。

<div class="rule" id="r-expr.method.receiver-constraints"><a class="rule-link" href="#r-expr.method.receiver-constraints" title="expr.method.receiver-constraints"><span>[expr<wbr>.method<wbr>.receiver-constraints]</span></a>
</div>

此过程不会考虑接收者的可变性或生命周期，也不会考虑方法是否为 `unsafe`。一旦查找到某个方法，如果由于其中一个（或多个）原因而无法调用它，则结果是编译器错误。

<div class="rule" id="r-expr.method.ambiguous-search"><a class="rule-link" href="#r-expr.method.ambiguous-search" title="expr.method.ambiguous-search"><span>[expr<wbr>.method<wbr>.ambiguous-search]</span></a>
</div>

如果到达某个步骤时存在多个可能的方法，例如泛型方法或 trait 被认为相同的情况，则为编译器错误。这些情况要求对方法和函数调用使用[消歧函数调用语法](call-expr.md#disambiguating-function-calls)。

<div class="rule" id="r-expr.method.edition2021"><a class="rule-link" href="#r-expr.method.edition2021" title="expr.method.edition2021"><span>[expr<wbr>.method<wbr>.edition2021]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2021</span> Edition differences</p>
 > 
 > 在 2021 edition 之前，在搜索可见方法期间，如果候选接收者类型是[数组类型](../types/array.md)，则会忽略标准库 [`IntoIterator`](../../core/iter/traits/collect/trait.IntoIterator.html) trait 提供的方法。
 > 
 > 为此目的使用的 edition 由表示方法名的词法单元决定。
 > 
 > 这个特殊情况将来可能会被移除。

</div>

<div class="alert alert-warning">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
 > 
 > 对于 [trait 对象](../types/trait-object.md)，如果存在与 trait 方法同名的固有方法，那么尝试在方法调用表达式中调用该方法时会产生编译器错误。相反，可以使用[消歧函数调用语法](call-expr.md#disambiguating-function-calls)调用该方法；在这种情况下，调用的是 trait 方法，而不是固有方法。没有办法调用该固有方法。不要在 trait 对象上定义与 trait 方法同名的固有方法即可。

</div>
