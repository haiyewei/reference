<div class="rule" id="r-expr.placeholder"><a class="rule-link" href="#r-expr.placeholder" title="expr.placeholder"><span>[expr<wbr>.placeholder]</span></a>
</div>

# `_` 表达式

<div class="rule" id="r-expr.placeholder.syntax"><a class="rule-link" href="#r-expr.placeholder.syntax" title="expr.placeholder.syntax"><span>[expr<wbr>.placeholder<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-UnderscoreExpression" onclick="show_railroad()">[UnderscoreExpression](underscore-expr.md#railroad-UnderscoreExpression)</span> → <span class="grammar-literal">\_</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 177px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-UnderscoreExpression"><svg class="railroad" viewBox="0 0 177 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="underscore-expr.md#grammar-UnderscoreExpression">
<text class="comment" x="88" y="25">
UnderscoreExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
_</text>
</g>
<path d=" M 73 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 63 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.placeholder.intro"><a class="rule-link" href="#r-expr.placeholder.intro" title="expr.placeholder.intro"><span>[expr<wbr>.placeholder<wbr>.intro]</span></a>
</div>

下划线表达式以符号 `_` 表示，用于在解构赋值中表示占位符。

<div class="rule" id="r-expr.placeholder.lhs-assignment-only"><a class="rule-link" href="#r-expr.placeholder.lhs-assignment-only" title="expr.placeholder.lhs-assignment-only"><span>[expr<wbr>.placeholder<wbr>.lhs-assignment-only]</span></a>
</div>

它们只能出现在赋值的左侧。

<div class="rule" id="r-expr.placeholder.pattern"><a class="rule-link" href="#r-expr.placeholder.pattern" title="expr.placeholder.pattern"><span>[expr<wbr>.placeholder<wbr>.pattern]</span></a>
</div>

注意，这不同于[通配符模式](../patterns.md#wildcard-pattern)。

`_` 表达式的示例：

```rust
let p = (1, 2);
let mut a = 0;
(_, a) = p;

struct Position {
    x: u32,
    y: u32,
}

Position { x: a, y: _ } = Position{ x: 2, y: 3 };

// unused result, assignment to `_` used to declare intent and remove a warning
_ = 2 + 2;
// triggers unused_must_use warning
// 2 + 2;

// equivalent technique using a wildcard pattern in a let-binding
let _ = 2 + 2;
```