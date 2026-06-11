<div class="rule" id="r-expr.return"><a class="rule-link" href="#r-expr.return" title="expr.return"><span>[expr<wbr>.return]</span></a>
</div>

# `return` 表达式

<div class="rule" id="r-expr.return.syntax"><a class="rule-link" href="#r-expr.return.syntax" title="expr.return.syntax"><span>[expr<wbr>.return<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ReturnExpression" onclick="show_railroad()">[ReturnExpression](return-expr.md#railroad-ReturnExpression)</span> → <span class="grammar-literal">return</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 296px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ReturnExpression"><svg class="railroad" viewBox="0 0 296 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="return-expr.md#grammar-ReturnExpression">
<text class="comment" x="71" y="25">
ReturnExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="68" x="35" y="55"/>
<text x="69" y="71">
return</text>
</g>
<g class="optional">
<path d=" M 113 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="137" y="55"/>
<text x="187" y="71">
Expression</text>
</g>
</a>
</g>
<path d=" M 103 66 h 10"/>
</g>
<path d=" M 271 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 261 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.return.intro"><a class="rule-link" href="#r-expr.return.intro" title="expr.return.intro"><span>[expr<wbr>.return<wbr>.intro]</span></a>
</div>

返回表达式用关键字 `return` 表示。

<div class="rule" id="r-expr.return.behavior"><a class="rule-link" href="#r-expr.return.behavior" title="expr.return.behavior"><span>[expr<wbr>.return<wbr>.behavior]</span></a>
</div>

对 `return` 表达式求值会将其实参移动到当前函数调用的指定输出位置，销毁当前函数激活帧，并将控制转移到调用者帧。

<div class="rule" id="r-expr.return.diverging"><a class="rule-link" href="#r-expr.return.diverging" title="expr.return.diverging"><span>[expr<wbr>.return<wbr>.diverging]</span></a>
</div>

`return` 表达式是[发散的](../divergence.md#r-divergence)，并具有 [`!`](../types/never.md#r-type.never) 类型。

`return` 表达式的示例：

```rust
fn max(a: i32, b: i32) -> i32 {
    if a > b {
        return a;
    }
    return b;
}
```