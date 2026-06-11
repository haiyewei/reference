<div class="rule" id="r-expr.paren"><a class="rule-link" href="#r-expr.paren" title="expr.paren"><span>[expr<wbr>.paren]</span></a>
</div>

# 分组表达式

<div class="rule" id="r-expr.paren.syntax"><a class="rule-link" href="#r-expr.paren.syntax" title="expr.paren.syntax"><span>[expr<wbr>.paren<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-GroupedExpression" onclick="show_railroad()">[GroupedExpression](grouped-expr.md#railroad-GroupedExpression)</span> → <span class="grammar-literal">(</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 246px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-GroupedExpression"><svg class="railroad" viewBox="0 0 246 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="grouped-expr.md#grammar-GroupedExpression">
<text class="comment" x="74" y="25">
GroupedExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
(</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="73" y="42"/>
<text x="123" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="183" y="42"/>
<text x="197" y="58">
)</text>
</g>
<path d=" M 63 53 h 10"/>
<path d=" M 173 53 h 10"/>
</g>
<path d=" M 221 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 211 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.paren.intro"><a class="rule-link" href="#r-expr.paren.intro" title="expr.paren.intro"><span>[expr<wbr>.paren<wbr>.intro]</span></a>
</div>

\_带括号表达式_包装单个表达式，并求值为该表达式。带括号表达式的语法是一个 `(`，随后是一个称为_被包围操作数_的表达式，最后是一个 `)`。

<div class="rule" id="r-expr.paren.evaluation"><a class="rule-link" href="#r-expr.paren.evaluation" title="expr.paren.evaluation"><span>[expr<wbr>.paren<wbr>.evaluation]</span></a>
</div>

带括号表达式求值为被包围操作数的值。

<div class="rule" id="r-expr.paren.place-or-value"><a class="rule-link" href="#r-expr.paren.place-or-value" title="expr.paren.place-or-value"><span>[expr<wbr>.paren<wbr>.place-or-value]</span></a>
</div>

如果被包围操作数是位置表达式，则带括号表达式是[位置表达式](../expressions.md#place-expressions-and-value-expressions)；如果被包围操作数是值表达式，则带括号表达式是值表达式。

<div class="rule" id="r-expr.paren.override-precedence"><a class="rule-link" href="#r-expr.paren.override-precedence" title="expr.paren.override-precedence"><span>[expr<wbr>.paren<wbr>.override-precedence]</span></a>
</div>

括号可用于显式修改表达式内子表达式的优先级顺序。

带括号表达式的示例：

```rust
let x: i32 = 2 + 3 * 4; // not parenthesized
let y: i32 = (2 + 3) * 4; // parenthesized
assert_eq!(x, 14);
assert_eq!(y, 20);
```

必须使用括号的一个示例是调用作为结构体成员的函数指针：

```rust
# struct A {
#    f: fn() -> &'static str
# }
# impl A {
#    fn f(&self) -> &'static str {
#        "The method f"
#    }
# }
# let a = A{f: || "The field f"};
#
assert_eq!( a.f (), "The method f");
assert_eq!((a.f)(), "The field f");
```