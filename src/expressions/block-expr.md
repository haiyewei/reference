<div class="rule" id="r-expr.block"><a class="rule-link" href="#r-expr.block" title="expr.block"><span>[expr<wbr>.block]</span></a>
</div>

# 块表达式

<div class="rule" id="r-expr.block.syntax"><a class="rule-link" href="#r-expr.block.syntax" title="expr.block.syntax"><span>[expr<wbr>.block<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-BlockExpression" onclick="show_railroad()">[BlockExpression](block-expr.md#railroad-BlockExpression)</span> →  
    <span class="grammar-literal">{</span>  
        <span class="grammar-text">[InnerAttribute](../attributes.md#grammar-InnerAttribute)</span><sup>\*</sup>  
        <span class="grammar-text">[Statements](block-expr.md#grammar-Statements)</span><sup>?</sup>  
    <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-BlockExpressionNoInnerAttributes" onclick="show_railroad()">[BlockExpressionNoInnerAttributes](block-expr.md#railroad-BlockExpressionNoInnerAttributes)</span> →  
    <span class="grammar-literal">{</span>  
        <span class="grammar-text">[Statements](block-expr.md#grammar-Statements)</span><sup>?</sup>  
    <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-Statements" onclick="show_railroad()">[Statements](block-expr.md#railroad-Statements)</span> →  
      <span class="grammar-text">[Statement](../statements.md#grammar-Statement)</span><sup>+</sup>  
    \| <span class="grammar-text">[Statement](../statements.md#grammar-Statement)</span><sup>+</sup> <span class="grammar-text">[ExpressionWithoutBlock](../expressions.md#grammar-ExpressionWithoutBlock)</span>  
    \| <span class="grammar-text">[ExpressionWithoutBlock](../expressions.md#grammar-ExpressionWithoutBlock)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 508px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BlockExpression"><svg class="railroad" viewBox="0 0 508 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="block-expr.md#grammar-BlockExpression">
<text class="comment" x="67" y="25">
BlockExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="55"/>
<text x="49" y="71">
{</text>
</g>
<g class="optional">
<path d=" M 73 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 97 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-InnerAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="109" y="55"/>
<text x="175" y="71">
InnerAttribute</text>
</g>
</a>
</g>
</g>
<g class="optional">
<path d=" M 287 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="block-expr.md#railroad-Statements">
<g class="nonterminal">
<rect height="22" width="100" x="311" y="55"/>
<text x="361" y="71">
Statements</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="445" y="55"/>
<text x="459" y="71">
}</text>
</g>
<path d=" M 63 66 h 10"/>
<path d=" M 277 66 h 10"/>
<path d=" M 435 66 h 10"/>
</g>
<path d=" M 483 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 473 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 294px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BlockExpressionNoInnerAttributes"><svg class="railroad" viewBox="0 0 294 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="block-expr.md#grammar-BlockExpressionNoInnerAttributes">
<text class="comment" x="130" y="25">
BlockExpressionNoInnerAttributes</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="55"/>
<text x="49" y="71">
{</text>
</g>
<g class="optional">
<path d=" M 73 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="block-expr.md#railroad-Statements">
<g class="nonterminal">
<rect height="22" width="100" x="97" y="55"/>
<text x="147" y="71">
Statements</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="231" y="55"/>
<text x="245" y="71">
}</text>
</g>
<path d=" M 63 66 h 10"/>
<path d=" M 221 66 h 10"/>
</g>
<path d=" M 269 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 259 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 448px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Statements"><svg class="railroad" viewBox="0 0 448 166" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="block-expr.md#grammar-Statements">
<text class="comment" x="50" y="25">
Statements</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 116 0 h 238 m -116 0 l -5 -5 m 0 10 l 5 -5 m 116 0"/>
<g class="sequence">
<g class="repeat">
<path d=" M 59 53 h 12 m 92 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -92 m 49 0 l 5 -5 m 0 10 l -5 -5 m -49 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../statements.md#railroad-Statement">
<g class="nonterminal">
<rect height="22" width="92" x="71" y="42"/>
<text x="117" y="58">
Statement</text>
</g>
</a>
</g>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 22 m 354 0 v -22 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 87 v 46 m 354 0 v -46"/>
<path d=" M 47 87 v 0 a 12 12 0 0 0 12 12 m 330 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="repeat">
<path d=" M 59 99 h 12 m 92 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -92 m 49 0 l 5 -5 m 0 10 l -5 -5 m -49 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../statements.md#railroad-Statement">
<g class="nonterminal">
<rect height="22" width="92" x="71" y="88"/>
<text x="117" y="104">
Statement</text>
</g>
</a>
</g>
<a class="link" xlink:href="../expressions.md#railroad-ExpressionWithoutBlock">
<g class="nonterminal">
<rect height="22" width="204" x="185" y="88"/>
<text x="287" y="104">
ExpressionWithoutBlock</text>
</g>
</a>
<path d=" M 175 99 h 10"/>
</g>
<path d=" M 47 133 v 0 a 12 12 0 0 0 12 12 m 204 0 h 126 m -60 0 l -5 -5 m 0 10 l 5 -5 m 60 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="../expressions.md#railroad-ExpressionWithoutBlock">
<g class="nonterminal">
<rect height="22" width="204" x="59" y="134"/>
<text x="161" y="150">
ExpressionWithoutBlock</text>
</g>
</a>
</g>
<path d=" M 423 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 413 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.block.intro"><a class="rule-link" href="#r-expr.block.intro" title="expr.block.intro"><span>[expr<wbr>.block<wbr>.intro]</span></a>
</div>

_块表达式_（或_块\_）是一种控制流表达式，也是项和变量声明的匿名命名空间作用域。

<div class="rule" id="r-expr.block.sequential-evaluation"><a class="rule-link" href="#r-expr.block.sequential-evaluation" title="expr.block.sequential-evaluation"><span>[expr<wbr>.block<wbr>.sequential-evaluation]</span></a>
</div>

作为控制流表达式，块会顺序执行其组成的非项声明语句，然后执行其可选的最终表达式。

<div class="rule" id="r-expr.block.namespace"><a class="rule-link" href="#r-expr.block.namespace" title="expr.block.namespace"><span>[expr<wbr>.block<wbr>.namespace]</span></a>
</div>

作为匿名命名空间作用域，项声明只在块本身内部处于作用域内，而 `let` 语句声明的变量从下一条语句开始直到块结束都处于作用域内。更多细节请参见[作用域](../names/scopes.md)章节。

<div class="rule" id="r-expr.block.inner-attributes"><a class="rule-link" href="#r-expr.block.inner-attributes" title="expr.block.inner-attributes"><span>[expr<wbr>.block<wbr>.inner-attributes]</span></a>
</div>

块的语法是 `{`，随后是任意[内部属性](../attributes.md)，随后是任意数量的[语句](../statements.md)，随后是一个可选表达式（称为最终操作数），最后是 `}`。

<div class="rule" id="r-expr.block.statements"><a class="rule-link" href="#r-expr.block.statements" title="expr.block.statements"><span>[expr<wbr>.block<wbr>.statements]</span></a>
</div>

语句通常必须后跟分号，但有两个例外：

1. 项声明语句不需要后跟分号。
1. 表达式语句通常需要后跟分号，但如果它的外层表达式是控制流表达式则例外。

<div class="rule" id="r-expr.block.null-statement"><a class="rule-link" href="#r-expr.block.null-statement" title="expr.block.null-statement"><span>[expr<wbr>.block<wbr>.null-statement]</span></a>
</div>

此外，语句之间允许出现额外的分号，但这些分号不影响语义。

<div class="rule" id="r-expr.block.evaluation"><a class="rule-link" href="#r-expr.block.evaluation" title="expr.block.evaluation"><span>[expr<wbr>.block<wbr>.evaluation]</span></a>
</div>

求值块表达式时，除项声明语句外，每条语句都会按顺序执行。

<div class="rule" id="r-expr.block.result"><a class="rule-link" href="#r-expr.block.result" title="expr.block.result"><span>[expr<wbr>.block<wbr>.result]</span></a>
</div>

然后，如果给出了最终操作数，则执行该最终操作数。

<div class="rule" id="r-expr.block.value-trailing-expr"><a class="rule-link" href="#r-expr.block.value-trailing-expr" title="expr.block.value-trailing-expr"><span>[expr<wbr>.block<wbr>.value-trailing-expr]</span></a>
</div>

当块包含[最终操作数](block-expr.md#r-expr.block.inner-attributes)时，该块具有该最终操作数的类型和值。

```rust
let x: u8 = { 0u8 }; // `0u8` 是最终操作数。
assert_eq!(x, 0);
let x: u8 = { (); 0u8 }; // As above.
assert_eq!(x, 0);
```

<div class="rule" id="r-expr.block.value-no-trailing-expr"><a class="rule-link" href="#r-expr.block.value-no-trailing-expr" title="expr.block.value-no-trailing-expr"><span>[expr<wbr>.block<wbr>.value-no-trailing-expr]</span></a>
</div>

当块不包含[最终操作数](block-expr.md#r-expr.block.inner-attributes)且该块不发散时，该块具有[单元类型](../types/tuple.md#r-type.tuple.unit)和[单元值](../types/tuple.md#r-type.tuple.unit)。

```rust
let x: () = {}; // 没有最终操作数。
assert_eq!(x, ());
let x: () = { 0u8; }; // As above.
assert_eq!(x, ());
```

<div class="rule" id="r-expr.block.value-diverges-no-trailing-expr"><a class="rule-link" href="#r-expr.block.value-diverges-no-trailing-expr" title="expr.block.value-diverges-no-trailing-expr"><span>[expr<wbr>.block<wbr>.value-diverges-no-trailing-expr]</span></a>
</div>

当块不包含[最终操作数](block-expr.md#r-expr.block.inner-attributes)且该块[发散](block-expr.md#r-expr.block.diverging)时，该块具有 [never 类型](../types/never.md#r-type.never)，并且没有最终值（因为其类型是[无值](../glossary.md#r-glossary.uninhabited)的）。

```rust,no_run
fn f() -> ! { loop {}; } // 发散且没有最终操作数。
//          ^^^^^^^^^^^^
// 函数的主体是块表达式。
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 注意，没有最终操作数的块不同于具有单元类型的显式最终操作数的块。例如，即使此块发散，该块的类型也是[单元](../types/tuple.md#r-type.tuple.unit)，而不是 [never](../types/never.md#r-type.never)。
 > 
 > ```rust,compile_fail,E0308
 > fn f() -> ! { loop {}; () } // ERROR：类型不匹配。
 > //          ^^^^^^^^^^^^^^^ 此块具有单元类型。
 > ```

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 作为控制流表达式，如果块表达式是表达式语句的外层表达式，则预期类型是 `()`，除非它后面紧跟分号。

</div>

<div class="rule" id="r-expr.block.diverging"><a class="rule-link" href="#r-expr.block.diverging" title="expr.block.diverging"><span>[expr<wbr>.block<wbr>.diverging]</span></a>
</div>

如果所有可达控制流路径都包含一个发散表达式，则块被认为是[发散的](../divergence.md#r-divergence)，除非该表达式是一个未被读取的[位置表达式](../expressions.md#r-expr.place-value.place-memory-location)。

```rust,no_run
# #![ feature(never_type) ]
fn no_control_flow() -> ! {
    // 没有条件语句，所以整个函数体是发散的。
    loop {}
}

fn control_flow_diverging() -> ! {
    // 所有路径都发散，所以整个函数体是发散的。
    if true {
        loop {}
    } else {
        loop {}
    }
}

fn control_flow_not_diverging() -> () {
    // 有些路径不发散，所以整个块不是发散的。
    if true {
        ()
    } else {
        loop {}
    }
}

// 注意：这里使用了不稳定的 never 类型，它只在
// Rust 的 nightly channel 上可用。这样做是为了说明。
// 在 stable Rust 中也可能遇到这种场景，但需要一个更
// 曲折的示例。
struct Foo {
    x: !,
}

fn make<T>() -> T { loop {} }

fn diverging_place_read() -> ! {
    let foo = Foo { x: make() };
    // 读取位置表达式会产生发散块。
    let _x = foo.x;
}
```

```rust,compile_fail,E0308
# #![ feature(never_type) ]
# fn make<T>() -> T { loop {} }
# struct Foo {
#     x: !,
# }
fn diverging_place_not_read() -> ! {
    let foo = Foo { x: make() };
    // 对 `_` 赋值意味着该位置未被读取。
    let _ = foo.x;
} // ERROR：类型不匹配。
```

<div class="rule" id="r-expr.block.value"><a class="rule-link" href="#r-expr.block.value" title="expr.block.value"><span>[expr<wbr>.block<wbr>.value]</span></a>
</div>

块始终是[值表达式](../expressions.md#place-expressions-and-value-expressions)，并在值表达式上下文中求值最后一个操作数。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 如果确实需要，这可以用来强制移动一个值。例如，下面的示例在调用 `consume_self` 时失败，因为结构体已在块表达式中从 `s` 移出。
 > 
 > ```rust,compile_fail
 > struct Struct;
 > 
 > impl Struct {
 >     fn consume_self(self) {}
 >     fn borrow_self(&self) {}
 > }
 > 
 > fn move_by_block_expression() {
 >     let s = Struct;
 > 
 >     // 在块表达式中把值从 `s` 移出。
 >     (&{ s }).borrow_self();
 > 
 >     // 执行失败，因为 `s` 已被移出。
 >     s.consume_self();
 > }
 > ```

</div>

<div class="rule" id="r-expr.block.async"><a class="rule-link" href="#r-expr.block.async" title="expr.block.async"><span>[expr<wbr>.block<wbr>.async]</span></a>
</div>

## `async` 块

<div class="rule" id="r-expr.block.async.syntax"><a class="rule-link" href="#r-expr.block.async.syntax" title="expr.block.async.syntax"><span>[expr<wbr>.block<wbr>.async<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-AsyncBlockExpression" onclick="show_railroad()">[AsyncBlockExpression](block-expr.md#railroad-AsyncBlockExpression)</span> → <span class="grammar-literal">async</span> <span class="grammar-literal">move</span><sup>?</sup> <span class="grammar-text">[BlockExpression](block-expr.md#grammar-BlockExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 390px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-AsyncBlockExpression"><svg class="railroad" viewBox="0 0 390 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="block-expr.md#grammar-AsyncBlockExpression">
<text class="comment" x="88" y="25">
AsyncBlockExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="35" y="55"/>
<text x="65" y="71">
async</text>
</g>
<g class="optional">
<path d=" M 105 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 52 m -23 0 l -5 -5 m 0 10 l 5 -5 m 23 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="129" y="55"/>
<text x="155" y="71">
move</text>
</g>
</g>
<a class="link" xlink:href="block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="215" y="55"/>
<text x="285" y="71">
BlockExpression</text>
</g>
</a>
<path d=" M 95 66 h 10"/>
<path d=" M 205 66 h 10"/>
</g>
<path d=" M 365 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 355 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.block.async.intro"><a class="rule-link" href="#r-expr.block.async.intro" title="expr.block.async.intro"><span>[expr<wbr>.block<wbr>.async<wbr>.intro]</span></a>
</div>

\_async 块_是块表达式的一种变体，它求值为一个 future。

<div class="rule" id="r-expr.block.async.future-result"><a class="rule-link" href="#r-expr.block.async.future-result" title="expr.block.async.future-result"><span>[expr<wbr>.block<wbr>.async<wbr>.future-result]</span></a>
</div>

块的最终表达式（如果存在）决定该 future 的结果值。

<div class="rule" id="r-expr.block.async.anonymous-type"><a class="rule-link" href="#r-expr.block.async.anonymous-type" title="expr.block.async.anonymous-type"><span>[expr<wbr>.block<wbr>.async<wbr>.anonymous-type]</span></a>
</div>

执行 `async` 块类似于执行闭包表达式：它的即时效果是产生并返回一个匿名类型。

<div class="rule" id="r-expr.block.async.future"><a class="rule-link" href="#r-expr.block.async.future" title="expr.block.async.future"><span>[expr<wbr>.block<wbr>.async<wbr>.future]</span></a>
</div>

不过，闭包返回的类型会实现一个或多个 [`std::ops::Fn`](../../core/ops/function/trait.Fn.html) trait，而 `async` 块返回的类型实现 [`std::future::Future`](../../core/future/future/trait.Future.html) trait。

<div class="rule" id="r-expr.block.async.layout-unspecified"><a class="rule-link" href="#r-expr.block.async.layout-unspecified" title="expr.block.async.layout-unspecified"><span>[expr<wbr>.block<wbr>.async<wbr>.layout-unspecified]</span></a>
</div>

此类型的实际数据格式是未指定的。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > rustc 生成的 future 类型大致等价于一个 enum，其中每个 `await` 点对应一个变体，每个变体都存储从相应点恢复所需的数据。

</div>

<div class="rule" id="r-expr.block.async.edition2018"><a class="rule-link" href="#r-expr.block.async.edition2018" title="expr.block.async.edition2018"><span>[expr<wbr>.block<wbr>.async<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > `async` 块仅从 Rust 2018 开始可用。

</div>

<div class="rule" id="r-expr.block.async.capture"><a class="rule-link" href="#r-expr.block.async.capture" title="expr.block.async.capture"><span>[expr<wbr>.block<wbr>.async<wbr>.capture]</span></a>
</div>

### 捕获模式

`async` 块使用与闭包相同的[捕获模式](../types/closure.md#capture-modes)从其环境中捕获变量。与闭包一样，写作 `async { .. }` 时，每个变量的捕获模式将从块的内容推断。不过，`async move { .. }` 块会把所有被引用的变量移动到生成的 future 中。

<div class="rule" id="r-expr.block.async.context"><a class="rule-link" href="#r-expr.block.async.context" title="expr.block.async.context"><span>[expr<wbr>.block<wbr>.async<wbr>.context]</span></a>
</div>

### async 上下文

由于 `async` 块构造一个 future，它们定义了一个 **async 上下文**，该上下文又可以包含 [`await` 表达式](await-expr.md)。async 上下文由 `async` 块以及 `async` 函数的主体建立；`async` 函数主体的语义是以 `async` 块来定义的。

<div class="rule" id="r-expr.block.async.function"><a class="rule-link" href="#r-expr.block.async.function" title="expr.block.async.function"><span>[expr<wbr>.block<wbr>.async<wbr>.function]</span></a>
</div>

### 控制流运算符

<div class="rule" id="r-expr.block.async.function.intro"><a class="rule-link" href="#r-expr.block.async.function.intro" title="expr.block.async.function.intro"><span>[expr<wbr>.block<wbr>.async<wbr>.function<wbr>.intro]</span></a>
</div>

`async` 块的行为类似于函数边界，很像闭包。

<div class="rule" id="r-expr.block.async.function.return-try"><a class="rule-link" href="#r-expr.block.async.function.return-try" title="expr.block.async.function.return-try"><span>[expr<wbr>.block<wbr>.async<wbr>.function<wbr>.return-try]</span></a>
</div>

因此，`?` 运算符和 `return` 表达式都会影响 future 的输出，而不是外围函数或其他上下文。也就是说，在 `async` 块内部的 `return <expr>` 会把 `<expr>` 的结果作为 future 的输出返回。类似地，如果 `<expr>?` 传播错误，该错误会作为 future 的结果被传播。

<div class="rule" id="r-expr.block.async.function.control-flow"><a class="rule-link" href="#r-expr.block.async.function.control-flow" title="expr.block.async.function.control-flow"><span>[expr<wbr>.block<wbr>.async<wbr>.function<wbr>.control-flow]</span></a>
</div>

最后，`break` 和 `continue` 关键字不能用于从 `async` 块中跳出。因此，以下写法是非法的：

```rust,compile_fail
loop {
    async move {
        break; // error[E0267]: `async` 块内部的 `break`
    }
}
```

<div class="rule" id="r-expr.block.const"><a class="rule-link" href="#r-expr.block.const" title="expr.block.const"><span>[expr<wbr>.block<wbr>.const]</span></a>
</div>

## `const` 块

<div class="rule" id="r-expr.block.const.syntax"><a class="rule-link" href="#r-expr.block.const.syntax" title="expr.block.const.syntax"><span>[expr<wbr>.block<wbr>.const<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ConstBlockExpression" onclick="show_railroad()">[ConstBlockExpression](block-expr.md#railroad-ConstBlockExpression)</span> → <span class="grammar-literal">const</span> <span class="grammar-text">[BlockExpression](block-expr.md#grammar-BlockExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 280px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ConstBlockExpression"><svg class="railroad" viewBox="0 0 280 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="block-expr.md#grammar-ConstBlockExpression">
<text class="comment" x="88" y="25">
ConstBlockExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="35" y="42"/>
<text x="65" y="58">
const</text>
</g>
<a class="link" xlink:href="block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="105" y="42"/>
<text x="175" y="58">
BlockExpression</text>
</g>
</a>
<path d=" M 95 53 h 10"/>
</g>
<path d=" M 255 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 245 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.block.const.intro"><a class="rule-link" href="#r-expr.block.const.intro" title="expr.block.const.intro"><span>[expr<wbr>.block<wbr>.const<wbr>.intro]</span></a>
</div>

\_const 块_是块表达式的一种变体，其主体在编译时而不是运行时求值。

<div class="rule" id="r-expr.block.const.context"><a class="rule-link" href="#r-expr.block.const.context" title="expr.block.const.context"><span>[expr<wbr>.block<wbr>.const<wbr>.context]</span></a>
</div>

`const` 块允许你定义常量值，而无需定义新的[常量项](../items/constant-items.md)，因此它们有时也称为 _inline consts_。它们还支持类型推断，因此不同于[常量项](../items/constant-items.md)，不需要指定类型。

<div class="rule" id="r-expr.block.const.generic-params"><a class="rule-link" href="#r-expr.block.const.generic-params" title="expr.block.const.generic-params"><span>[expr<wbr>.block<wbr>.const<wbr>.generic-params]</span></a>
</div>

`const` 块能够引用作用域内的泛型参数，这不同于[自由](../glossary.md#free-item)常量项。它们会被脱糖为带有作用域内泛型参数的常量项（类似关联常量，但没有与之关联的 trait 或类型）。例如，这段代码：

```rust
fn foo<T>() -> usize {
    const { std::mem::size_of::<T>() + 1 }
}
```

等价于：

```rust
fn foo<T>() -> usize {
    {
        struct Const<T>(T);
        impl<T> Const<T> {
            const CONST: usize = std::mem::size_of::<T>() + 1;
        }
        Const::<T>::CONST
    }
}
```

<div class="rule" id="r-expr.block.const.evaluation"><a class="rule-link" href="#r-expr.block.const.evaluation" title="expr.block.const.evaluation"><span>[expr<wbr>.block<wbr>.const<wbr>.evaluation]</span></a>
</div>

如果 `const` 块表达式在运行时被执行，那么该常量保证会被求值，即使其返回值被忽略：

```rust
fn foo<T>() -> usize {
    // 如果这段代码曾被执行，那么该断言就肯定
    // 已在编译时求值。
    const { assert!(std::mem::size_of::<T>() > 0); }
    // 这里可以有依赖该类型为非零大小的 unsafe 代码。
    /* ... */
    42
}
```

<div class="rule" id="r-expr.block.const.not-executed"><a class="rule-link" href="#r-expr.block.const.not-executed" title="expr.block.const.not-executed"><span>[expr<wbr>.block<wbr>.const<wbr>.not-executed]</span></a>
</div>

如果 `const` 块表达式在运行时未被执行，则它可能会也可能不会被求值：

```rust,compile_fail
if false {
    // 构建程序时可能会发生 panic，也可能不会发生。
    const { panic!(); }
}
```

<div class="rule" id="r-expr.block.unsafe"><a class="rule-link" href="#r-expr.block.unsafe" title="expr.block.unsafe"><span>[expr<wbr>.block<wbr>.unsafe]</span></a>
</div>

## `unsafe` 块

<div class="rule" id="r-expr.block.unsafe.syntax"><a class="rule-link" href="#r-expr.block.unsafe.syntax" title="expr.block.unsafe.syntax"><span>[expr<wbr>.block<wbr>.unsafe<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-UnsafeBlockExpression" onclick="show_railroad()">[UnsafeBlockExpression](block-expr.md#railroad-UnsafeBlockExpression)</span> → <span class="grammar-literal">unsafe</span> <span class="grammar-text">[BlockExpression](block-expr.md#grammar-BlockExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 288px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-UnsafeBlockExpression"><svg class="railroad" viewBox="0 0 288 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="block-expr.md#grammar-UnsafeBlockExpression">
<text class="comment" x="92" y="25">
UnsafeBlockExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="35" y="42"/>
<text x="69" y="58">
unsafe</text>
</g>
<a class="link" xlink:href="block-expr.md#railroad-BlockExpression">
<g class="nonterminal">
<rect height="22" width="140" x="113" y="42"/>
<text x="183" y="58">
BlockExpression</text>
</g>
</a>
<path d=" M 103 53 h 10"/>
</g>
<path d=" M 263 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 253 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.block.unsafe.intro"><a class="rule-link" href="#r-expr.block.unsafe.intro" title="expr.block.unsafe.intro"><span>[expr<wbr>.block<wbr>.unsafe<wbr>.intro]</span></a>
</div>

_有关何时使用 `unsafe` 的更多信息，请参见 [`unsafe` 块](../unsafe-keyword.md#unsafe-blocks-unsafe-)_。

可以在代码块前加上 `unsafe` 关键字，以允许[不安全操作](../unsafety.md)。示例：

```rust
unsafe {
    let b = [13u8, 17u8];
    let a = &b[0] as *const u8;
    assert_eq!(*a, 13);
    assert_eq!(*a.offset(1), 17);
}

# unsafe fn an_unsafe_fn() -> i32 { 10 }
let a = unsafe { an_unsafe_fn() };
```

<div class="rule" id="r-expr.block.label"><a class="rule-link" href="#r-expr.block.label" title="expr.block.label"><span>[expr<wbr>.block<wbr>.label]</span></a>
</div>

## 带标签的块表达式

带标签的块表达式记载于[循环和其他可 `break` 表达式](loop-expr.md#r-expr.loop.block-labels)一节。

<div class="rule" id="r-expr.block.attributes"><a class="rule-link" href="#r-expr.block.attributes" title="expr.block.attributes"><span>[expr<wbr>.block<wbr>.attributes]</span></a>
</div>

## 块表达式上的属性

<div class="rule" id="r-expr.block.attributes.inner-attributes"><a class="rule-link" href="#r-expr.block.attributes.inner-attributes" title="expr.block.attributes.inner-attributes"><span>[expr<wbr>.block<wbr>.attributes<wbr>.inner-attributes]</span></a>
</div>

在以下情况下，[内部属性](../attributes.md)允许直接出现在块表达式的开花括号之后：

- [函数](../items/functions.md)和[方法](../items/associated-items.md#methods)的主体。
- 循环体（[`loop`](loop-expr.md#infinite-loops)、[`while`](loop-expr.md#predicate-loops) 和 [`for`](loop-expr.md#iterator-loops)）。
- 作为[语句](../statements.md)使用的块表达式。
- 作为[数组表达式](array-expr.md)、[元组表达式](tuple-expr.md)、[调用表达式](call-expr.md)和元组式 [struct](struct-expr.md) 表达式元素的块表达式。
- 作为另一个块表达式尾表达式的块表达式。

<!-- Keep list in sync with expressions.md -->

<div class="rule" id="r-expr.block.attributes.valid"><a class="rule-link" href="#r-expr.block.attributes.valid" title="expr.block.attributes.valid"><span>[expr<wbr>.block<wbr>.attributes<wbr>.valid]</span></a>
</div>

在块表达式上有意义的属性是 [`cfg`](../conditional-compilation.md) 和 [lint 检查属性](../attributes/diagnostics.md#lint-check-attributes)。

例如，此函数在 unix 平台上返回 `true`，在其他平台上返回 `false`。

```rust
fn is_unix_platform() -> bool {
    #[cfg(unix)] { true }
    #[cfg(not(unix))] { false }
}
```