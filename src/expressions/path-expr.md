<div class="rule" id="r-expr.path"><a class="rule-link" href="#r-expr.path" title="expr.path"><span>[expr<wbr>.path]</span></a>
</div>

# 路径表达式

<div class="rule" id="r-expr.path.syntax"><a class="rule-link" href="#r-expr.path.syntax" title="expr.path.syntax"><span>[expr<wbr>.path<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-PathExpression" onclick="show_railroad()">[PathExpression](path-expr.md#railroad-PathExpression)</span> →  
      <span class="grammar-text">[PathInExpression](../paths.md#grammar-PathInExpression)</span>  
    \| <span class="grammar-text">[QualifiedPathInExpression](../paths.md#grammar-QualifiedPathInExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 346px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-PathExpression"><svg class="railroad" viewBox="0 0 346 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="path-expr.md#grammar-PathExpression">
<text class="comment" x="64" y="25">
PathExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 148 0 h 104 m -49 0 l -5 -5 m 0 10 l 5 -5 m 49 0"/>
<g class="sequence">
<a class="link" xlink:href="../paths.md#railroad-PathInExpression">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="42"/>
<text x="133" y="58">
PathInExpression</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 252 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 228 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="../paths.md#railroad-QualifiedPathInExpression">
<g class="nonterminal">
<rect height="22" width="228" x="59" y="75"/>
<text x="173" y="91">
QualifiedPathInExpression</text>
</g>
</a>
</g>
<path d=" M 321 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 311 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.path.intro"><a class="rule-link" href="#r-expr.path.intro" title="expr.path.intro"><span>[expr<wbr>.path<wbr>.intro]</span></a>
</div>

在表达式上下文中使用的[路径](../paths.md)表示局部变量或项。

<div class="rule" id="r-expr.path.place"><a class="rule-link" href="#r-expr.path.place" title="expr.path.place"><span>[expr<wbr>.path<wbr>.place]</span></a>
</div>

解析为局部变量或静态变量的路径表达式是[位置表达式](../expressions.md#place-expressions-and-value-expressions)；其他路径是[值表达式](../expressions.md#place-expressions-and-value-expressions)。

<div class="rule" id="r-expr.path.safety"><a class="rule-link" href="#r-expr.path.safety" title="expr.path.safety"><span>[expr<wbr>.path<wbr>.safety]</span></a>
</div>

使用 [`static mut`](../items/static-items.md#mutable-statics) 变量需要 [`unsafe` 块](block-expr.md#unsafe-blocks)。

```rust
# mod globals {
#     pub static STATIC_VAR: i32 = 5;
#     pub static mut STATIC_MUT_VAR: i32 = 7;
# }
# let local_var = 3;
local_var;
globals::STATIC_VAR;
unsafe { globals::STATIC_MUT_VAR };
let some_constructor = Some::<i32>;
let push_integer = Vec::<i32>::push;
let slice_reverse = <[i32]>::reverse;
```

<div class="rule" id="r-expr.path.const"><a class="rule-link" href="#r-expr.path.const" title="expr.path.const"><span>[expr<wbr>.path<wbr>.const]</span></a>
</div>

关联常量的求值以与 [`const` 块](block-expr.md#const-blocks)相同的方式处理。