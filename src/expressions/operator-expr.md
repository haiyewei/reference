<div class="rule" id="r-expr.operator"><a class="rule-link" href="#r-expr.operator" title="expr.operator"><span>[expr<wbr>.operator]</span></a>
</div>

# 运算符表达式

<div class="rule" id="r-expr.operator.syntax"><a class="rule-link" href="#r-expr.operator.syntax" title="expr.operator.syntax"><span>[expr<wbr>.operator<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-OperatorExpression" onclick="show_railroad()">[OperatorExpression](operator-expr.md#railroad-OperatorExpression)</span> →  
      <span class="grammar-text">[BorrowExpression](operator-expr.md#grammar-BorrowExpression)</span>  
    \| <span class="grammar-text">[DereferenceExpression](operator-expr.md#grammar-DereferenceExpression)</span>  
    \| <span class="grammar-text">[TryPropagationExpression](operator-expr.md#grammar-TryPropagationExpression)</span>  
    \| <span class="grammar-text">[NegationExpression](operator-expr.md#grammar-NegationExpression)</span>  
    \| <span class="grammar-text">[ArithmeticOrLogicalExpression](operator-expr.md#grammar-ArithmeticOrLogicalExpression)</span>  
    \| <span class="grammar-text">[ComparisonExpression](operator-expr.md#grammar-ComparisonExpression)</span>  
    \| <span class="grammar-text">[LazyBooleanExpression](operator-expr.md#grammar-LazyBooleanExpression)</span>  
    \| <span class="grammar-text">[TypeCastExpression](operator-expr.md#grammar-TypeCastExpression)</span>  
    \| <span class="grammar-text">[AssignmentExpression](operator-expr.md#grammar-AssignmentExpression)</span>  
    \| <span class="grammar-text">[CompoundAssignmentExpression](operator-expr.md#grammar-CompoundAssignmentExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 378px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-OperatorExpression"><svg class="railroad" viewBox="0 0 378 371" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="operator-expr.md#grammar-OperatorExpression">
<text class="comment" x="78" y="25">
OperatorExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 148 0 h 136 m -65 0 l -5 -5 m 0 10 l 5 -5 m 65 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-BorrowExpression">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="42"/>
<text x="133" y="58">
BorrowExpression</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 284 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 284 0 v -33"/>
<path d=" M 47 107 v 33 m 284 0 v -33"/>
<path d=" M 47 140 v 33 m 284 0 v -33"/>
<path d=" M 47 173 v 33 m 284 0 v -33"/>
<path d=" M 47 206 v 33 m 284 0 v -33"/>
<path d=" M 47 239 v 33 m 284 0 v -33"/>
<path d=" M 47 272 v 33 m 284 0 v -33"/>
<path d=" M 47 305 v 33 m 284 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 196 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-DereferenceExpression">
<g class="nonterminal">
<rect height="22" width="196" x="59" y="75"/>
<text x="157" y="91">
DereferenceExpression</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 220 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-TryPropagationExpression">
<g class="nonterminal">
<rect height="22" width="220" x="59" y="108"/>
<text x="169" y="124">
TryPropagationExpression</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 164 0 h 96 m -45 0 l -5 -5 m 0 10 l 5 -5 m 45 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-NegationExpression">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="141"/>
<text x="141" y="157">
NegationExpression</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 260 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-ArithmeticOrLogicalExpression">
<g class="nonterminal">
<rect height="22" width="260" x="59" y="174"/>
<text x="189" y="190">
ArithmeticOrLogicalExpression</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 188 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-ComparisonExpression">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="207"/>
<text x="153" y="223">
ComparisonExpression</text>
</g>
</a>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 196 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-LazyBooleanExpression">
<g class="nonterminal">
<rect height="22" width="196" x="59" y="240"/>
<text x="157" y="256">
LazyBooleanExpression</text>
</g>
</a>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 164 0 h 96 m -45 0 l -5 -5 m 0 10 l 5 -5 m 45 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-TypeCastExpression">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="273"/>
<text x="141" y="289">
TypeCastExpression</text>
</g>
</a>
</g>
<path d=" M 47 305 v 0 a 12 12 0 0 0 12 12 m 188 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="operator-expr.md#railroad-AssignmentExpression">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="306"/>
<text x="153" y="322">
AssignmentExpression</text>
</g>
</a>
</g>
<path d=" M 47 338 v 0 a 12 12 0 0 0 12 12 m 252 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="operator-expr.md#railroad-CompoundAssignmentExpression">
<g class="nonterminal">
<rect height="22" width="252" x="59" y="339"/>
<text x="185" y="355">
CompoundAssignmentExpression</text>
</g>
</a>
</g>
<path d=" M 353 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 343 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.operator.intro"><a class="rule-link" href="#r-expr.operator.intro" title="expr.operator.intro"><span>[expr<wbr>.operator<wbr>.intro]</span></a>
</div>

运算符由 Rust 语言为内置类型定义。

<div class="rule" id="r-expr.operator.trait"><a class="rule-link" href="#r-expr.operator.trait" title="expr.operator.trait"><span>[expr<wbr>.operator<wbr>.trait]</span></a>
</div>

下面许多运算符也可以使用 `std::ops` 或 `std::cmp` 中的 trait 进行重载。

<div class="rule" id="r-expr.operator.int-overflow"><a class="rule-link" href="#r-expr.operator.int-overflow" title="expr.operator.int-overflow"><span>[expr<wbr>.operator<wbr>.int-overflow]</span></a>
</div>

## 溢出

<div class="rule" id="r-expr.operator.int-overflow.intro"><a class="rule-link" href="#r-expr.operator.int-overflow.intro" title="expr.operator.int-overflow.intro"><span>[expr<wbr>.operator<wbr>.int-overflow<wbr>.intro]</span></a>
</div>

整数运算符在调试模式编译时发生溢出将会 panic。可以使用 `-C debug-assertions` 和 `-C overflow-checks` 编译器标志更直接地控制此行为。以下情况被视为溢出：

<div class="rule" id="r-expr.operator.int-overflow.binary-arith"><a class="rule-link" href="#r-expr.operator.int-overflow.binary-arith" title="expr.operator.int-overflow.binary-arith"><span>[expr<wbr>.operator<wbr>.int-overflow<wbr>.binary-arith]</span></a>
</div>

- 当 `+`、`*` 或二元 `-` 产生的值大于可存储的最大值，或小于可存储的最小值时。

<div class="rule" id="r-expr.operator.int-overflow.unary-neg"><a class="rule-link" href="#r-expr.operator.int-overflow.unary-neg" title="expr.operator.int-overflow.unary-neg"><span>[expr<wbr>.operator<wbr>.int-overflow<wbr>.unary-neg]</span></a>
</div>

- 对任意有符号整数类型的最小值应用一元 `-`，除非操作数是[字面量表达式](literal-expr.md#integer-literal-expressions)（或单独位于一个或多个[分组表达式](grouped-expr.md)内的字面量表达式）。

<div class="rule" id="r-expr.operator.int-overflow.div"><a class="rule-link" href="#r-expr.operator.int-overflow.div" title="expr.operator.int-overflow.div"><span>[expr<wbr>.operator<wbr>.int-overflow<wbr>.div]</span></a>
</div>

- 使用 `/` 或 `%` 时，左操作数是某个有符号整数类型的最小整数，且右操作数是 `-1`。出于历史原因，即使禁用了 `-C overflow-checks`，也会执行这些检查。

<div class="rule" id="r-expr.operator.int-overflow.shift"><a class="rule-link" href="#r-expr.operator.int-overflow.shift" title="expr.operator.int-overflow.shift"><span>[expr<wbr>.operator<wbr>.int-overflow<wbr>.shift]</span></a>
</div>

- 使用 `<<` 或 `>>` 时，右操作数大于或等于左操作数类型的位数，或为负数。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 一元 `-` 后的字面量表达式例外意味着，像 `-128_i8` 或 `let j: i8 = -(128)` 这样的形式永远不会导致 panic，并具有预期值 -128。
 > 
 > 在这些情况下，根据[整数字面量表达式](literal-expr.md#integer-literal-expressions)中的说明，整数字面量会被截断为其类型，因此该字面量表达式已经具有其类型的最小值（例如，`128_i8` 的值是 -128）。
 > 
 > 由于二进制补码的溢出约定，对这些最小值取负会使值保持不变。
 > 
 > 在 `rustc` 中，这些最小值表达式也会被 `overflowing_literals` lint 检查忽略。

</div>

<div class="rule" id="r-expr.operator.borrow"><a class="rule-link" href="#r-expr.operator.borrow" title="expr.operator.borrow"><span>[expr<wbr>.operator<wbr>.borrow]</span></a>
</div>

## 借用运算符

<div class="rule" id="r-expr.operator.borrow.syntax"><a class="rule-link" href="#r-expr.operator.borrow.syntax" title="expr.operator.borrow.syntax"><span>[expr<wbr>.operator<wbr>.borrow<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-BorrowExpression" onclick="show_railroad()">[BorrowExpression](operator-expr.md#railroad-BorrowExpression)</span> →  
      ( <span class="grammar-literal">&</span> | <span class="grammar-literal">&&</span> ) <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| ( <span class="grammar-literal">&</span> | <span class="grammar-literal">&&</span> ) <span class="grammar-literal">mut</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| ( <span class="grammar-literal">&</span> | <span class="grammar-literal">&&</span> ) <span class="grammar-literal">raw</span> <span class="grammar-literal">const</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| ( <span class="grammar-literal">&</span> | <span class="grammar-literal">&&</span> ) <span class="grammar-literal">raw</span> <span class="grammar-literal">mut</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 436px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-BorrowExpression"><svg class="railroad" viewBox="0 0 436 305" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="operator-expr.md#grammar-BorrowExpression">
<text class="comment" x="71" y="25">
BorrowExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 194 0 h 148 m -71 0 l -5 -5 m 0 10 l 5 -5 m 71 0"/>
<g class="sequence">
<g class="choice">
<path d=" M 59 53 h 24 m 28 0 h 32"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="83" y="42"/>
<text x="97" y="58">
&amp;</text>
</g>
<path d=" M 59 53 a 12 12 0 0 1 12 12 v 9 m 60 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 71 74 v 0 a 12 12 0 0 0 12 12 m 36 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="83" y="75"/>
<text x="101" y="91">
&amp;&amp;</text>
</g>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="153" y="42"/>
<text x="203" y="58">
Expression</text>
</g>
</a>
<path d=" M 143 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 42 m 342 0 v -42 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 107 v 66 m 0 -30 l -5 -5 m 10 0 l -5 5 m 0 30 m 342 0 v -66 m 0 36 l -5 5 m 10 0 l -5 -5 m 0 -36"/>
<path d=" M 47 173 v 66 m 0 -30 l -5 -5 m 10 0 l -5 5 m 0 30 m 342 0 v -66 m 0 36 l -5 5 m 10 0 l -5 -5 m 0 -36"/>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 248 0 h 70 m -32 0 l -5 -5 m 0 10 l 5 -5 m 32 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="choice">
<path d=" M 59 119 h 24 m 28 0 h 32"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="83" y="108"/>
<text x="97" y="124">
&amp;</text>
</g>
<path d=" M 59 119 a 12 12 0 0 1 12 12 v 9 m 60 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 71 140 v 0 a 12 12 0 0 0 12 12 m 36 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="83" y="141"/>
<text x="101" y="157">
&amp;&amp;</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="153" y="108"/>
<text x="175" y="124">
mut</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="108"/>
<text x="257" y="124">
Expression</text>
</g>
</a>
<path d=" M 143 119 h 10"/>
<path d=" M 197 119 h 10"/>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 318 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="choice">
<path d=" M 59 185 h 24 m 28 0 h 32"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="83" y="174"/>
<text x="97" y="190">
&amp;</text>
</g>
<path d=" M 59 185 a 12 12 0 0 1 12 12 v 9 m 60 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 71 206 v 0 a 12 12 0 0 0 12 12 m 36 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="83" y="207"/>
<text x="101" y="223">
&amp;&amp;</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="153" y="174"/>
<text x="175" y="190">
raw</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="207" y="174"/>
<text x="237" y="190">
const</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="277" y="174"/>
<text x="327" y="190">
Expression</text>
</g>
</a>
<path d=" M 143 185 h 10"/>
<path d=" M 197 185 h 10"/>
<path d=" M 267 185 h 10"/>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 302 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="choice">
<path d=" M 59 251 h 24 m 28 0 h 32"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="83" y="240"/>
<text x="97" y="256">
&amp;</text>
</g>
<path d=" M 59 251 a 12 12 0 0 1 12 12 v 9 m 60 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 71 272 v 0 a 12 12 0 0 0 12 12 m 36 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="83" y="273"/>
<text x="101" y="289">
&amp;&amp;</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="153" y="240"/>
<text x="175" y="256">
raw</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="207" y="240"/>
<text x="229" y="256">
mut</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="261" y="240"/>
<text x="311" y="256">
Expression</text>
</g>
</a>
<path d=" M 143 251 h 10"/>
<path d=" M 197 251 h 10"/>
<path d=" M 251 251 h 10"/>
</g>
</g>
<path d=" M 411 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 401 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.operator.borrow.intro"><a class="rule-link" href="#r-expr.operator.borrow.intro" title="expr.operator.borrow.intro"><span>[expr<wbr>.operator<wbr>.borrow<wbr>.intro]</span></a>
</div>

`&`（共享借用）和 `&mut`（可变借用）运算符是一元前缀运算符。

<div class="rule" id="r-expr.operator.borrow.result"><a class="rule-link" href="#r-expr.operator.borrow.result" title="expr.operator.borrow.result"><span>[expr<wbr>.operator<wbr>.borrow<wbr>.result]</span></a>
</div>

当应用于[位置表达式](../expressions.md#place-expressions-and-value-expressions)时，此表达式会产生指向该值所引用位置的引用（指针）。

<div class="rule" id="r-expr.operator.borrow.lifetime"><a class="rule-link" href="#r-expr.operator.borrow.lifetime" title="expr.operator.borrow.lifetime"><span>[expr<wbr>.operator<wbr>.borrow<wbr>.lifetime]</span></a>
</div>

在该引用的持续期间，内存位置也会处于被借用状态。对于共享借用（`&`），这意味着该位置不能被修改，但可以被读取或再次共享。对于可变借用（`&mut`），在借用期结束之前，该位置不能以任何方式访问。

<div class="rule" id="r-expr.operator.borrow.mut"><a class="rule-link" href="#r-expr.operator.borrow.mut" title="expr.operator.borrow.mut"><span>[expr<wbr>.operator<wbr>.borrow<wbr>.mut]</span></a>
</div>

`&mut` 在可变位置表达式上下文中求值其操作数。

<div class="rule" id="r-expr.operator.borrow.temporary"><a class="rule-link" href="#r-expr.operator.borrow.temporary" title="expr.operator.borrow.temporary"><span>[expr<wbr>.operator<wbr>.borrow<wbr>.temporary]</span></a>
</div>

如果 `&` 或 `&mut` 运算符应用于[值表达式](../expressions.md#place-expressions-and-value-expressions)，则会创建一个[临时值](../expressions.md#temporaries)。

这些运算符不能被重载。

```rust
{
    // 会创建一个值为 7 的临时值，其生命周期持续到此作用域结束。
    let shared_reference = &7;
}
let mut array = [-2, 3, 9];
{
    // 在此作用域内可变借用 `array`。
    // `array` 只能通过 `mutable_reference` 使用。
    let mutable_reference = &mut array;
}
```

<div class="rule" id="r-expr.borrow.and-and-syntax"><a class="rule-link" href="#r-expr.borrow.and-and-syntax" title="expr.borrow.and-and-syntax"><span>[expr<wbr>.borrow<wbr>.and-and-syntax]</span></a>
</div>

尽管 `&&` 是单个 token（[惰性 “and” 运算符](#lazy-boolean-operators)），但在借用表达式上下文中使用时，它会作为两次借用工作：

```rust
// 含义相同：
let a = &&  10;
let a = & & 10;

// 含义相同：
let a = &&&&  mut 10;
let a = && && mut 10;
let a = & & & & mut 10;
```

<div class="rule" id="r-expr.borrow.raw"><a class="rule-link" href="#r-expr.borrow.raw" title="expr.borrow.raw"><span>[expr<wbr>.borrow<wbr>.raw]</span></a>
</div>

### 原始借用运算符

<div class="rule" id="r-expr.borrow.raw.intro"><a class="rule-link" href="#r-expr.borrow.raw.intro" title="expr.borrow.raw.intro"><span>[expr<wbr>.borrow<wbr>.raw<wbr>.intro]</span></a>
</div>

`&raw const` 和 `&raw mut` 是_原始借用运算符\_。

<div class="rule" id="r-expr.borrow.raw.place"><a class="rule-link" href="#r-expr.borrow.raw.place" title="expr.borrow.raw.place"><span>[expr<wbr>.borrow<wbr>.raw<wbr>.place]</span></a>
</div>

这些运算符的操作数表达式在位置表达式上下文中求值。

<div class="rule" id="r-expr.borrow.raw.result"><a class="rule-link" href="#r-expr.borrow.raw.result" title="expr.borrow.raw.result"><span>[expr<wbr>.borrow<wbr>.raw<wbr>.result]</span></a>
</div>

`&raw const expr` 会为给定位置创建类型为 `*const T` 的 const 裸指针，而 `&raw mut expr` 会创建类型为 `*mut T` 的可变裸指针。

<div class="rule" id="r-expr.borrow.raw.invalid-ref"><a class="rule-link" href="#r-expr.borrow.raw.invalid-ref" title="expr.borrow.raw.invalid-ref"><span>[expr<wbr>.borrow<wbr>.raw<wbr>.invalid-ref]</span></a>
</div>

只要位置表达式可能求值为未正确对齐的位置、按其类型判定未存储有效值的位置，或创建引用会引入不正确的别名假设，就必须使用原始借用运算符，而不是借用运算符。在这些情形中，使用借用运算符会通过创建无效引用而导致[未定义行为](../behavior-considered-undefined.md)，但仍可以构造裸指针。

下面是通过 `packed` 结构体创建指向未对齐位置的裸指针的示例：

```rust
#[repr(packed)]
struct Packed {
    f1: u8,
    f2: u16,
}

let packed = Packed { f1: 1, f2: 2 };
// `&packed.f2` 会创建未对齐引用，因此是未定义行为！
let raw_f2 = &raw const packed.f2;
assert_eq!(unsafe { raw_f2.read_unaligned() }, 2);
```

下面是创建指向不包含有效值的位置的裸指针的示例：

```rust
use std::mem::MaybeUninit;

struct Demo {
    field: bool,
}

let mut uninit = MaybeUninit::<Demo>::uninit();
// `&uninit.as_mut().field` 会创建指向未初始化 `bool` 的引用，
// 因此是未定义行为！
let f1_ptr = unsafe { &raw mut (*uninit.as_mut_ptr()).field };
unsafe { f1_ptr.write(true); }
let init = unsafe { uninit.assume_init() };
```

<div class="rule" id="r-expr.deref"><a class="rule-link" href="#r-expr.deref" title="expr.deref"><span>[expr<wbr>.deref]</span></a>
</div>

## 解引用运算符

<div class="rule" id="r-expr.deref.syntax"><a class="rule-link" href="#r-expr.deref.syntax" title="expr.deref.syntax"><span>[expr<wbr>.deref<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-DereferenceExpression" onclick="show_railroad()">[DereferenceExpression](operator-expr.md#railroad-DereferenceExpression)</span> → <span class="grammar-literal">\*</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 208px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-DereferenceExpression"><svg class="railroad" viewBox="0 0 208 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="operator-expr.md#grammar-DereferenceExpression">
<text class="comment" x="92" y="25">
DereferenceExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
*</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="73" y="42"/>
<text x="123" y="58">
Expression</text>
</g>
</a>
<path d=" M 63 53 h 10"/>
</g>
<path d=" M 183 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 173 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.deref.intro"><a class="rule-link" href="#r-expr.deref.intro" title="expr.deref.intro"><span>[expr<wbr>.deref<wbr>.intro]</span></a>
</div>

`*`（解引用）运算符也是一元前缀运算符。

<div class="rule" id="r-expr.deref.result"><a class="rule-link" href="#r-expr.deref.result" title="expr.deref.result"><span>[expr<wbr>.deref<wbr>.result]</span></a>
</div>

当应用于[指针](../types/pointer.md)或 [`Box`](../special-types-and-traits.md#boxt) 时，它表示被指向的位置。

<div class="rule" id="r-expr.deref.mut"><a class="rule-link" href="#r-expr.deref.mut" title="expr.deref.mut"><span>[expr<wbr>.deref<wbr>.mut]</span></a>
</div>

如果表达式的类型为 `&mut T`、`*mut T` 或 `Box<T>`，并且它是局部变量、局部变量的（嵌套）字段，或者是可变[位置表达式](../expressions.md#place-expressions-and-value-expressions)，则所得内存位置可以被赋值。

<div class="rule" id="r-expr.deref.box"><a class="rule-link" href="#r-expr.deref.box" title="expr.deref.box"><span>[expr<wbr>.deref<wbr>.box]</span></a>
</div>

当应用于 [`Box`](../special-types-and-traits.md#boxt) 时，所得位置可以[从中移出](../expressions.md#r-expr.move.movable-place)。

<div class="rule" id="r-expr.deref.safety"><a class="rule-link" href="#r-expr.deref.safety" title="expr.deref.safety"><span>[expr<wbr>.deref<wbr>.safety]</span></a>
</div>

解引用裸指针需要 `unsafe`。

<div class="rule" id="r-expr.deref.traits"><a class="rule-link" href="#r-expr.deref.traits" title="expr.deref.traits"><span>[expr<wbr>.deref<wbr>.traits]</span></a>
</div>

对于非指针类型，`*x` 在[不可变位置表达式上下文](../expressions.md#mutability)中等价于 `*std::ops::Deref::deref(&x)`，在可变位置表达式上下文中等价于 `*std::ops::DerefMut::deref_mut(&mut x)`；但当 `*x` 经历[临时生命周期延长](../destructors.md#r-destructors.scope.lifetime-extension)时，被解引用的表达式 `x` 的[临时作用域](../destructors.md#r-destructors.scope.temporary)也会被延长。

```rust
# struct NoCopy;
let a = &7;
assert_eq!(*a, 7);
let b = &mut 9;
*b = 11;
assert_eq!(*b, 11);
let c = Box::new(NoCopy);
let d: NoCopy = *c;
```

```rust
// 保存 `String::new()` 结果的临时值会被延长，
// 存活到块结束，因此 `x` 可以在后续
// 语句中使用。
let x = &*String::new();
# x;
```

```rust,compile_fail,E0716
// 保存 `String::new()` 结果的临时值会在
// 语句末尾被丢弃，因此之后使用 `y` 是错误。
let y = &*std::ops::Deref::deref(&String::new()); // ERROR
# y;
```

<div class="rule" id="r-expr.try"><a class="rule-link" href="#r-expr.try" title="expr.try"><span>[expr<wbr>.try]</span></a>
</div>

## try 传播表达式

<div class="rule" id="r-expr.try.syntax"><a class="rule-link" href="#r-expr.try.syntax" title="expr.try.syntax"><span>[expr<wbr>.try<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-TryPropagationExpression" onclick="show_railroad()">[TryPropagationExpression](operator-expr.md#railroad-TryPropagationExpression)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">?</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 208px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TryPropagationExpression"><svg class="railroad" viewBox="0 0 208 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="operator-expr.md#grammar-TryPropagationExpression">
<text class="comment" x="102" y="25">
TryPropagationExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="42"/>
<text x="85" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="145" y="42"/>
<text x="159" y="58">
?</text>
</g>
<path d=" M 135 53 h 10"/>
</g>
<path d=" M 183 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 173 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.try.intro"><a class="rule-link" href="#r-expr.try.intro" title="expr.try.intro"><span>[expr<wbr>.try<wbr>.intro]</span></a>
</div>

try 传播表达式会使用内部表达式的值和 [`Try`](../../core/ops/try_trait/trait.Try.html) trait 来决定是否产生一个值以及产生什么值，或者是否向调用者返回一个值以及返回什么值。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > # use std::num::ParseIntError;
 > fn try_to_parse() -> Result<i32, ParseIntError> {
 >     let x: i32 = "123".parse()?; // `x` 为 `123`。
 >     let y: i32 = "24a".parse()?; // 立即返回 `Err()`。
 >     Ok(x + y)                    // 不会运行。
 > }
 > 
 > let res = try_to_parse();
 > println!("{res:?}");
 > # assert!(res.is_err())
 > ```
 > 
 > ```rust
 > fn try_option_some() -> Option<u8> {
 >     let val = Some(1)?;
 >     Some(val)
 > }
 > assert_eq!(try_option_some(), Some(1));
 > 
 > fn try_option_none() -> Option<u8> {
 >     let val = None?;
 >     Some(val)
 > }
 > assert_eq!(try_option_none(), None);
 > ```
 > 
 > ```rust
 > use std::ops::ControlFlow;
 > 
 > pub struct TreeNode<T> {
 >     value: T,
 >     left: Option<Box<TreeNode<T>>>,
 >     right: Option<Box<TreeNode<T>>>,
 > }
 > 
 > impl<T> TreeNode<T> {
 >     pub fn traverse_inorder<B>(&self, f: &mut impl FnMut(&T) -> ControlFlow<B>) -> ControlFlow<B> {
 >         if let Some(left) = &self.left {
 >             left.traverse_inorder(f)?;
 >         }
 >         f(&self.value)?;
 >         if let Some(right) = &self.right {
 >             right.traverse_inorder(f)?;
 >         }
 >         ControlFlow::Continue(())
 >     }
 > }
 > #
 > # fn main() {
 > #     let n = TreeNode {
 > #         value: 1,
 > #         left: Some(Box::new(TreeNode{value: 2, left: None, right: None})),
 > #         right: None,
 > #     };
 > #     let v = n.traverse_inorder(&mut |t| {
 > #         if *t == 2 {
 > #             ControlFlow::Break("found")
 > #         } else {
 > #             ControlFlow::Continue(())
 > #         }
 > #     });
 > #     assert_eq!(v, ControlFlow::Break("found"));
 > # }
 > ```

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [`Try`](../../core/ops/try_trait/trait.Try.html) trait 目前是不稳定的，因此不能为用户类型实现。
 > 
 > try 传播表达式目前大致等价于：
 > 
 > ```rust
 > # #![ feature(try_trait_v2) ]
 > # fn example() -> Result<(), ()> {
 > # let expr = Ok(());
 > match core::ops::Try::branch(expr) {
 >     core::ops::ControlFlow::Continue(val) => val,
 >     core::ops::ControlFlow::Break(residual) =>
 >         return core::ops::FromResidual::from_residual(residual),
 > }
 > # Ok(())
 > # }
 > ```

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > try 传播运算符有时称为_问号运算符\_、\_`?` 运算符_或 _try 运算符_。

</div>

<div class="rule" id="r-expr.try.restricted-types"><a class="rule-link" href="#r-expr.try.restricted-types" title="expr.try.restricted-types"><span>[expr<wbr>.try<wbr>.restricted-types]</span></a>
</div>

try 传播运算符可以应用于具有以下类型的表达式：

- [`Result<T, E>`](../../core/result/enum.Result.html)
  - `Result::Ok(val)` 求值为 `val`。
  - `Result::Err(e)` 返回 `Result::Err(From::from(e))`。
- [`Option<T>`](../../core/option/enum.Option.html)
  - `Option::Some(val)` 求值为 `val`。
  - `Option::None` 返回 `Option::None`。
- [`ControlFlow<B, C>`](../../core/ops/control_flow/enum.ControlFlow.html)
  - `ControlFlow::Continue(c)` 求值为 `c`。
  - `ControlFlow::Break(b)` 返回 `ControlFlow::Break(b)`。
- [`Poll<Result<T, E>>`](../../core/task/poll/enum.Poll.html)
  - `Poll::Ready(Ok(val))` 求值为 `Poll::Ready(val)`。
  - `Poll::Ready(Err(e))` 返回 `Poll::Ready(Err(From::from(e)))`。
  - `Poll::Pending` 求值为 `Poll::Pending`。
- [`Poll<Option<Result<T, E>>>`](../../core/task/poll/enum.Poll.html)
  - `Poll::Ready(Some(Ok(val)))` 求值为 `Poll::Ready(Some(val))`。
  - `Poll::Ready(Some(Err(e)))` 返回 `Poll::Ready(Some(Err(From::from(e))))`。
  - `Poll::Ready(None)` 求值为 `Poll::Ready(None)`。
  - `Poll::Pending` 求值为 `Poll::Pending`。

<div class="rule" id="r-expr.negate"><a class="rule-link" href="#r-expr.negate" title="expr.negate"><span>[expr<wbr>.negate]</span></a>
</div>

## 取反运算符

<div class="rule" id="r-expr.negate.syntax"><a class="rule-link" href="#r-expr.negate.syntax" title="expr.negate.syntax"><span>[expr<wbr>.negate<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-NegationExpression" onclick="show_railroad()">[NegationExpression](operator-expr.md#railroad-NegationExpression)</span> →  
      <span class="grammar-literal">\-</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-literal">!</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 256px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-NegationExpression"><svg class="railroad" viewBox="0 0 256 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="operator-expr.md#grammar-NegationExpression">
<text class="comment" x="78" y="25">
NegationExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 138 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="42"/>
<text x="73" y="58">
-</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="97" y="42"/>
<text x="147" y="58">
Expression</text>
</g>
</a>
<path d=" M 87 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 162 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 138 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="75"/>
<text x="73" y="91">
!</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="97" y="75"/>
<text x="147" y="91">
Expression</text>
</g>
</a>
<path d=" M 87 86 h 10"/>
</g>
</g>
<path d=" M 231 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 221 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.negate.intro"><a class="rule-link" href="#r-expr.negate.intro" title="expr.negate.intro"><span>[expr<wbr>.negate<wbr>.intro]</span></a>
</div>

这是最后两个一元运算符。

<div class="rule" id="r-expr.negate.results"><a class="rule-link" href="#r-expr.negate.results" title="expr.negate.results"><span>[expr<wbr>.negate<wbr>.results]</span></a>
</div>

此表总结了它们在基本类型上的行为，以及用于为其他类型重载这些运算符的 trait。请记住，有符号整数始终使用二进制补码表示。所有这些运算符的操作数都会在[值表达式上下文](../expressions.md#place-expressions-and-value-expressions)中求值，因此会被移动或复制。

|符号|整数|`bool`|浮点数|重载 trait|
|--|--|------|---|--------|
|`-`|取负\*||取负|`std::ops::Neg`|
|`!`|按位非|[逻辑非](../types/boolean.md#logical-not)||`std::ops::Not`|

\* 仅适用于有符号整数类型。

下面是这些运算符的一些示例

```rust
let x = 6;
assert_eq!(-x, -6);
assert_eq!(!x, -7);
assert_eq!(true, !false);
```

<div class="rule" id="r-expr.arith-logic"><a class="rule-link" href="#r-expr.arith-logic" title="expr.arith-logic"><span>[expr<wbr>.arith-logic]</span></a>
</div>

## 算术和逻辑二元运算符

<div class="rule" id="r-expr.arith-logic.syntax"><a class="rule-link" href="#r-expr.arith-logic.syntax" title="expr.arith-logic.syntax"><span>[expr<wbr>.arith-logic<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ArithmeticOrLogicalExpression" onclick="show_railroad()">[ArithmeticOrLogicalExpression](operator-expr.md#railroad-ArithmeticOrLogicalExpression)</span> →  
      <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">+</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\-</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\*</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">/</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">%</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">&</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\|</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">^</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\<\<</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\>></span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 374px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ArithmeticOrLogicalExpression"><svg class="railroad" viewBox="0 0 374 371" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="operator-expr.md#grammar-ArithmeticOrLogicalExpression">
<text class="comment" x="120" y="25">
ArithmeticOrLogicalExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 248 0 h 32"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="42"/>
<text x="109" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="42"/>
<text x="183" y="58">
+</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="42"/>
<text x="257" y="58">
Expression</text>
</g>
</a>
<path d=" M 159 53 h 10"/>
<path d=" M 197 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 280 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 280 0 v -33"/>
<path d=" M 47 107 v 33 m 280 0 v -33"/>
<path d=" M 47 140 v 33 m 280 0 v -33"/>
<path d=" M 47 173 v 33 m 280 0 v -33"/>
<path d=" M 47 206 v 33 m 280 0 v -33"/>
<path d=" M 47 239 v 33 m 280 0 v -33"/>
<path d=" M 47 272 v 33 m 280 0 v -33"/>
<path d=" M 47 305 v 33 m 280 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 248 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="75"/>
<text x="109" y="91">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="75"/>
<text x="183" y="91">
-</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="75"/>
<text x="257" y="91">
Expression</text>
</g>
</a>
<path d=" M 159 86 h 10"/>
<path d=" M 197 86 h 10"/>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 248 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="108"/>
<text x="109" y="124">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="108"/>
<text x="183" y="124">
*</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="108"/>
<text x="257" y="124">
Expression</text>
</g>
</a>
<path d=" M 159 119 h 10"/>
<path d=" M 197 119 h 10"/>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 248 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="141"/>
<text x="109" y="157">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="141"/>
<text x="183" y="157">
/</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="141"/>
<text x="257" y="157">
Expression</text>
</g>
</a>
<path d=" M 159 152 h 10"/>
<path d=" M 197 152 h 10"/>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 248 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="174"/>
<text x="109" y="190">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="174"/>
<text x="183" y="190">
%</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="174"/>
<text x="257" y="190">
Expression</text>
</g>
</a>
<path d=" M 159 185 h 10"/>
<path d=" M 197 185 h 10"/>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 248 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="207"/>
<text x="109" y="223">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="207"/>
<text x="183" y="223">
&amp;</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="207"/>
<text x="257" y="223">
Expression</text>
</g>
</a>
<path d=" M 159 218 h 10"/>
<path d=" M 197 218 h 10"/>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 248 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="240"/>
<text x="109" y="256">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="240"/>
<text x="183" y="256">
|</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="240"/>
<text x="257" y="256">
Expression</text>
</g>
</a>
<path d=" M 159 251 h 10"/>
<path d=" M 197 251 h 10"/>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 248 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="273"/>
<text x="109" y="289">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="273"/>
<text x="183" y="289">
^</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="273"/>
<text x="257" y="289">
Expression</text>
</g>
</a>
<path d=" M 159 284 h 10"/>
<path d=" M 197 284 h 10"/>
</g>
<path d=" M 47 305 v 0 a 12 12 0 0 0 12 12 m 256 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="306"/>
<text x="109" y="322">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="306"/>
<text x="187" y="322">
&lt;&lt;</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="306"/>
<text x="265" y="322">
Expression</text>
</g>
</a>
<path d=" M 159 317 h 10"/>
<path d=" M 205 317 h 10"/>
</g>
<path d=" M 47 338 v 0 a 12 12 0 0 0 12 12 m 256 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="339"/>
<text x="109" y="355">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="339"/>
<text x="187" y="355">
&gt;&gt;</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="339"/>
<text x="265" y="355">
Expression</text>
</g>
</a>
<path d=" M 159 350 h 10"/>
<path d=" M 205 350 h 10"/>
</g>
</g>
<path d=" M 349 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 339 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.arith-logic.intro"><a class="rule-link" href="#r-expr.arith-logic.intro" title="expr.arith-logic.intro"><span>[expr<wbr>.arith-logic<wbr>.intro]</span></a>
</div>

二元运算符表达式都使用中缀表示法书写。

<div class="rule" id="r-expr.arith-logic.behavior"><a class="rule-link" href="#r-expr.arith-logic.behavior" title="expr.arith-logic.behavior"><span>[expr<wbr>.arith-logic<wbr>.behavior]</span></a>
</div>

此表总结了算术和逻辑二元运算符在基本类型上的行为，以及用于为其他类型重载这些运算符的 trait。请记住，有符号整数始终使用二进制补码表示。所有这些运算符的操作数都会在[值表达式上下文](../expressions.md#place-expressions-and-value-expressions)中求值，因此会被移动或复制。

|符号|整数|`bool`|浮点数|重载 trait|复合赋值重载 trait|
|--|--|------|---|--------|------------|
|`+`|加法||加法|`std::ops::Add`|`std::ops::AddAssign`|
|`-`|减法||减法|`std::ops::Sub`|`std::ops::SubAssign`|
|`*`|乘法||乘法|`std::ops::Mul`|`std::ops::MulAssign`|
|`/`|除法\*†||除法|`std::ops::Div`|`std::ops::DivAssign`|
|`%`|余数\*\*†||余数|`std::ops::Rem`|`std::ops::RemAssign`|
|`&`|按位与|[逻辑与](../types/boolean.md#logical-and)||`std::ops::BitAnd`|`std::ops::BitAndAssign`|
|`\|`|按位或|[逻辑或](../types/boolean.md#logical-or)||`std::ops::BitOr`|`std::ops::BitOrAssign`|
|`^`|按位异或|[逻辑异或](../types/boolean.md#logical-xor)||`std::ops::BitXor`|`std::ops::BitXorAssign`|
|`<<`|左移|||`std::ops::Shl`|`std::ops::ShlAssign`|
|`>>`|右移\*\*\*|||`std::ops::Shr`|`std::ops::ShrAssign`|

\* 整数除法向零取整。

\*\* Rust 使用以[截断除法](https://en.wikipedia.org/wiki/Modulo_operation#Variants_of_the_definition)定义的余数。给定 `remainder = dividend % divisor`，余数将与被除数具有相同符号。

\*\*\* 对有符号整数类型执行算术右移，对无符号整数类型执行逻辑右移。

† 对于整数类型，除以零会 panic。

下面是这些运算符的使用示例。

```rust
assert_eq!(3 + 6, 9);
assert_eq!(5.5 - 1.25, 4.25);
assert_eq!(-5 * 14, -70);
assert_eq!(14 / 3, 4);
assert_eq!(100 % 7, 2);
assert_eq!(0b1010 & 0b1100, 0b1000);
assert_eq!(0b1010 | 0b1100, 0b1110);
assert_eq!(0b1010 ^ 0b1100, 0b110);
assert_eq!(13 << 3, 104);
assert_eq!(-10 >> 2, -3);
```

<div class="rule" id="r-expr.cmp"><a class="rule-link" href="#r-expr.cmp" title="expr.cmp"><span>[expr<wbr>.cmp]</span></a>
</div>

## 比较运算符

<div class="rule" id="r-expr.cmp.syntax"><a class="rule-link" href="#r-expr.cmp.syntax" title="expr.cmp.syntax"><span>[expr<wbr>.cmp<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ComparisonExpression" onclick="show_railroad()">[ComparisonExpression](operator-expr.md#railroad-ComparisonExpression)</span> →  
      <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">==</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">!=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\></span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\<</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\>=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\<=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 374px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ComparisonExpression"><svg class="railroad" viewBox="0 0 374 239" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="operator-expr.md#grammar-ComparisonExpression">
<text class="comment" x="88" y="25">
ComparisonExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 256 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="42"/>
<text x="109" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="42"/>
<text x="187" y="58">
==</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="42"/>
<text x="265" y="58">
Expression</text>
</g>
</a>
<path d=" M 159 53 h 10"/>
<path d=" M 205 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 280 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 280 0 v -33"/>
<path d=" M 47 107 v 33 m 280 0 v -33"/>
<path d=" M 47 140 v 33 m 280 0 v -33"/>
<path d=" M 47 173 v 33 m 280 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 256 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="75"/>
<text x="109" y="91">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="75"/>
<text x="187" y="91">
!=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="75"/>
<text x="265" y="91">
Expression</text>
</g>
</a>
<path d=" M 159 86 h 10"/>
<path d=" M 205 86 h 10"/>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 248 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="108"/>
<text x="109" y="124">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="108"/>
<text x="183" y="124">
&gt;</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="108"/>
<text x="257" y="124">
Expression</text>
</g>
</a>
<path d=" M 159 119 h 10"/>
<path d=" M 197 119 h 10"/>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 248 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="141"/>
<text x="109" y="157">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="141"/>
<text x="183" y="157">
&lt;</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="141"/>
<text x="257" y="157">
Expression</text>
</g>
</a>
<path d=" M 159 152 h 10"/>
<path d=" M 197 152 h 10"/>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 256 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="174"/>
<text x="109" y="190">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="174"/>
<text x="187" y="190">
&gt;=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="174"/>
<text x="265" y="190">
Expression</text>
</g>
</a>
<path d=" M 159 185 h 10"/>
<path d=" M 205 185 h 10"/>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 256 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="207"/>
<text x="109" y="223">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="207"/>
<text x="187" y="223">
&lt;=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="207"/>
<text x="265" y="223">
Expression</text>
</g>
</a>
<path d=" M 159 218 h 10"/>
<path d=" M 205 218 h 10"/>
</g>
</g>
<path d=" M 349 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 339 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.cmp.intro"><a class="rule-link" href="#r-expr.cmp.intro" title="expr.cmp.intro"><span>[expr<wbr>.cmp<wbr>.intro]</span></a>
</div>

比较运算符也同时为基本类型和标准库中的许多类型定义。

<div class="rule" id="r-expr.cmp.paren-chaining"><a class="rule-link" href="#r-expr.cmp.paren-chaining" title="expr.cmp.paren-chaining"><span>[expr<wbr>.cmp<wbr>.paren-chaining]</span></a>
</div>

链式使用比较运算符时需要括号。例如，表达式 `a == b == c` 是无效的，可以写成 `(a == b) == c`。

<div class="rule" id="r-expr.cmp.trait"><a class="rule-link" href="#r-expr.cmp.trait" title="expr.cmp.trait"><span>[expr<wbr>.cmp<wbr>.trait]</span></a>
</div>

与算术和逻辑运算符不同，用于重载这些运算符的 trait 会更一般地用于表明一个类型如何比较，并且使用这些 trait 作为约束的函数很可能会假定它们定义了实际比较。标准库中的许多函数和宏随后可以利用这一假定（虽然不是为了保证安全性）。

<div class="rule" id="r-expr.cmp.place"><a class="rule-link" href="#r-expr.cmp.place" title="expr.cmp.place"><span>[expr<wbr>.cmp<wbr>.place]</span></a>
</div>

与上面的算术和逻辑运算符不同，这些运算符会隐式地对其操作数进行共享借用，并在[位置表达式上下文](../expressions.md#place-expressions-and-value-expressions)中求值：

```rust
# let a = 1;
# let b = 1;
a == b;
// 等价于
::std::cmp::PartialEq::eq(&a, &b);
```

这意味着不必从操作数中移出值。

<div class="rule" id="r-expr.cmp.behavior"><a class="rule-link" href="#r-expr.cmp.behavior" title="expr.cmp.behavior"><span>[expr<wbr>.cmp<wbr>.behavior]</span></a>
</div>

|符号|含义|重载方法|
|--|--|----|
|`==`|相等|`std::cmp::PartialEq::eq`|
|`!=`|不相等|`std::cmp::PartialEq::ne`|
|`>`|大于|`std::cmp::PartialOrd::gt`|
|`<`|小于|`std::cmp::PartialOrd::lt`|
|`>=`|大于等于|`std::cmp::PartialOrd::ge`|
|`<=`|小于等于|`std::cmp::PartialOrd::le`|

下面是比较运算符的使用示例。

```rust
assert!(123 == 123);
assert!(23 != -12);
assert!(12.5 > 12.2);
assert!([1, 2, 3] < [1, 3, 4]);
assert!('A' <= 'B');
assert!("World" >= "Hello");
```

<div class="rule" id="r-expr.bool-logic"><a class="rule-link" href="#r-expr.bool-logic" title="expr.bool-logic"><span>[expr<wbr>.bool-logic]</span></a>
</div>

## 惰性布尔运算符

<div class="rule" id="r-expr.bool-logic.syntax"><a class="rule-link" href="#r-expr.bool-logic.syntax" title="expr.bool-logic.syntax"><span>[expr<wbr>.bool-logic<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-LazyBooleanExpression" onclick="show_railroad()">[LazyBooleanExpression](operator-expr.md#railroad-LazyBooleanExpression)</span> →  
      <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\||</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">&&</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 374px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LazyBooleanExpression"><svg class="railroad" viewBox="0 0 374 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="operator-expr.md#grammar-LazyBooleanExpression">
<text class="comment" x="92" y="25">
LazyBooleanExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 256 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="42"/>
<text x="109" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="42"/>
<text x="187" y="58">
||</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="42"/>
<text x="265" y="58">
Expression</text>
</g>
</a>
<path d=" M 159 53 h 10"/>
<path d=" M 205 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 280 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 256 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="75"/>
<text x="109" y="91">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="75"/>
<text x="187" y="91">
&amp;&amp;</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="75"/>
<text x="265" y="91">
Expression</text>
</g>
</a>
<path d=" M 159 86 h 10"/>
<path d=" M 205 86 h 10"/>
</g>
</g>
<path d=" M 349 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 339 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.bool-logic.intro"><a class="rule-link" href="#r-expr.bool-logic.intro" title="expr.bool-logic.intro"><span>[expr<wbr>.bool-logic<wbr>.intro]</span></a>
</div>

运算符 `||` 和 `&&` 可以应用于布尔类型的操作数。`||` 运算符表示逻辑“或”，`&&` 运算符表示逻辑“与”。

<div class="rule" id="r-expr.bool-logic.conditional-evaluation"><a class="rule-link" href="#r-expr.bool-logic.conditional-evaluation" title="expr.bool-logic.conditional-evaluation"><span>[expr<wbr>.bool-logic<wbr>.conditional-evaluation]</span></a>
</div>

它们与 `|` 和 `&` 的不同之处在于，只有当左操作数尚未确定表达式结果时，才会求值右操作数。也就是说，`||` 仅在左操作数求值为 `false` 时才求值其右操作数，而 `&&` 仅在左操作数求值为 `true` 时才这样做。

```rust
let x = false || true; // true
let y = false && panic!(); // false，不求值 `panic!()`
```

<div class="rule" id="r-expr.as"><a class="rule-link" href="#r-expr.as" title="expr.as"><span>[expr<wbr>.as]</span></a>
</div>

## 类型转换表达式

<div class="rule" id="r-expr.as.syntax"><a class="rule-link" href="#r-expr.as.syntax" title="expr.as.syntax"><span>[expr<wbr>.as<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-TypeCastExpression" onclick="show_railroad()">[TypeCastExpression](operator-expr.md#railroad-TypeCastExpression)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">as</span> <span class="grammar-text">[TypeNoBounds](../types.md#grammar-TypeNoBounds)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 342px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TypeCastExpression"><svg class="railroad" viewBox="0 0 342 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="operator-expr.md#grammar-TypeCastExpression">
<text class="comment" x="78" y="25">
TypeCastExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="42"/>
<text x="85" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="145" y="42"/>
<text x="163" y="58">
as</text>
</g>
<a class="link" xlink:href="../types.md#railroad-TypeNoBounds">
<g class="nonterminal">
<rect height="22" width="116" x="191" y="42"/>
<text x="249" y="58">
TypeNoBounds</text>
</g>
</a>
<path d=" M 135 53 h 10"/>
<path d=" M 181 53 h 10"/>
</g>
<path d=" M 317 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 307 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.as.intro"><a class="rule-link" href="#r-expr.as.intro" title="expr.as.intro"><span>[expr<wbr>.as<wbr>.intro]</span></a>
</div>

类型转换表达式用二元运算符 `as` 表示。

<div class="rule" id="r-expr.as.result"><a class="rule-link" href="#r-expr.as.result" title="expr.as.result"><span>[expr<wbr>.as<wbr>.result]</span></a>
</div>

执行 `as` 表达式会将左侧的值转换为右侧的类型。

`as` 表达式的一个示例：

```rust
# fn sum(values: &[f64]) -> f64 { 0.0 }
# fn len(values: &[f64]) -> i32 { 0 }
fn average(values: &[f64]) -> f64 {
    let sum: f64 = sum(values);
    let size: f64 = len(values) as f64;
    sum / size
}
```

<div class="rule" id="r-expr.as.coercions"><a class="rule-link" href="#r-expr.as.coercions" title="expr.as.coercions"><span>[expr<wbr>.as<wbr>.coercions]</span></a>
</div>

`as` 可以用于显式执行[强制转换](../type-coercions.md)，以及下列额外转换。任何不符合强制转换规则或表中条目的转换都是编译器错误。这里，`*T` 表示 `*const T` 或 `*mut T`。`m` 在引用类型中代表可选的 `mut`，在指针类型中代表 `mut` 或 `const`。

|`e` 的类型|`U`|`e as U` 执行的转换|
|-------|---|--------------|
|整数或浮点数类型|整数或浮点数类型|[数值转换](operator-expr.md#r-expr.as.numeric)|
|枚举|整数类型|[枚举转换](operator-expr.md#r-expr.as.enum)|
|`bool` 或 `char`|整数类型|[基本类型到整数转换](operator-expr.md#r-expr.as.bool-char-as-int)|
|`u8`|`char`|[`u8` 到 `char` 的转换](operator-expr.md#r-expr.as.u8-as-char)|
|`*T`|`*V`（当[兼容](operator-expr.md#r-expr.as.pointer)时）|[指针到指针转换](operator-expr.md#r-expr.as.pointer)|
|`*T`，其中 `T: Sized`|整数类型|[指针到地址转换](operator-expr.md#r-expr.as.pointer-as-int)|
|整数类型|`*V`，其中 `V: Sized`|[地址到指针转换](operator-expr.md#r-expr.as.int-as-pointer)|
|`&m₁ [T; n]`|`*m₂ T` [^lessmut]|数组到指针转换|
|`*m₁ [T; n]`|`*m₂ T` [^lessmut]|数组到指针转换|
|[函数项](../types/function-item.md)|[函数指针](../types/function-pointer.md)|函数项到函数指针转换|
|[函数项](../types/function-item.md)|`*V`，其中 `V: Sized`|函数项到指针转换|
|[函数项](../types/function-item.md)|整数|函数项到地址转换|
|[函数指针](../types/function-pointer.md)|`*V`，其中 `V: Sized`|函数指针到指针转换|
|[函数指针](../types/function-pointer.md)|整数|函数指针到地址转换|
|闭包 [^no-capture]|函数指针|闭包到函数指针转换|

[^lessmut]: 仅当 `m₁` 为 `mut` 或 `m₂` 为 `const` 时。允许将 `mut` 引用/指针转换为 `const` 指针。

[^no-capture]: 只有不捕获（close over）任何局部变量的闭包才能转换为函数指针。

### 语义

<div class="rule" id="r-expr.as.numeric"><a class="rule-link" href="#r-expr.as.numeric" title="expr.as.numeric"><span>[expr<wbr>.as<wbr>.numeric]</span></a>
</div>

#### 数值转换

<div class="rule" id="r-expr.as.numeric.int-same-size"><a class="rule-link" href="#r-expr.as.numeric.int-same-size" title="expr.as.numeric.int-same-size"><span>[expr<wbr>.as<wbr>.numeric<wbr>.int-same-size]</span></a>
</div>

- 在两个大小相同的整数之间转换（例如 i32 -> u32）是空操作（Rust 对定长整数的负值使用二进制补码）
  
  ```rust
  assert_eq!(42i8 as u8, 42u8);
  assert_eq!(-1i8 as u8, 255u8);
  assert_eq!(255u8 as i8, -1i8);
  assert_eq!(-1i16 as u16, 65535u16);
  ```

<div class="rule" id="r-expr.as.numeric.int-truncation"><a class="rule-link" href="#r-expr.as.numeric.int-truncation" title="expr.as.numeric.int-truncation"><span>[expr<wbr>.as<wbr>.numeric<wbr>.int-truncation]</span></a>
</div>

- 从较大整数转换为较小整数（例如 u32 -> u8）会截断
  
  ```rust
  assert_eq!(42u16 as u8, 42u8);
  assert_eq!(1234u16 as u8, 210u8);
  assert_eq!(0xabcdu16 as u8, 0xcdu8);
  
  assert_eq!(-42i16 as i8, -42i8);
  assert_eq!(1234u16 as i8, -46i8);
  assert_eq!(0xabcdi32 as i8, -51i8);
  ```

<div class="rule" id="r-expr.as.numeric.int-extension"><a class="rule-link" href="#r-expr.as.numeric.int-extension" title="expr.as.numeric.int-extension"><span>[expr<wbr>.as<wbr>.numeric<wbr>.int-extension]</span></a>
</div>

- 从较小整数转换为较大整数（例如 u8 -> u32）会
  
  - 如果源类型是无符号的，则进行零扩展
  - 如果源类型是有符号的，则进行符号扩展
  ```rust
  assert_eq!(42i8 as i16, 42i16);
  assert_eq!(-17i8 as i16, -17i16);
  assert_eq!(0b1000_1010u8 as u16, 0b0000_0000_1000_1010u16, "Zero-extend");
  assert_eq!(0b0000_1010i8 as i16, 0b0000_0000_0000_1010i16, "Sign-extend 0");
  assert_eq!(0b1000_1010u8 as i8 as i16, 0b1111_1111_1000_1010u16 as i16, "Sign-extend 1");
  ```

<div class="rule" id="r-expr.as.numeric.float-as-int"><a class="rule-link" href="#r-expr.as.numeric.float-as-int" title="expr.as.numeric.float-as-int"><span>[expr<wbr>.as<wbr>.numeric<wbr>.float-as-int]</span></a>
</div>

- 从浮点数转换为整数会将浮点数向零舍入
  
  - `NaN` 将返回 `0`
  - 大于最大整数值的值（包括 `INFINITY`）将饱和为该整数类型的最大值。
  - 小于最小整数值的值（包括 `NEG_INFINITY`）将饱和为该整数类型的最小值。
  ```rust
  assert_eq!(42.9f32 as i32, 42);
  assert_eq!(-42.9f32 as i32, -42);
  assert_eq!(42_000_000f32 as i32, 42_000_000);
  assert_eq!(std::f32::NAN as i32, 0);
  assert_eq!(1_000_000_000_000_000f32 as i32, 0x7fffffffi32);
  assert_eq!(std::f32::NEG_INFINITY as i32, -0x80000000i32);
  ```

<div class="rule" id="r-expr.as.numeric.int-as-float"><a class="rule-link" href="#r-expr.as.numeric.int-as-float" title="expr.as.numeric.int-as-float"><span>[expr<wbr>.as<wbr>.numeric<wbr>.int-as-float]</span></a>
</div>

- 从整数转换为浮点数会产生最接近的可表示浮点数 \*
  
  - 必要时，舍入按照 `roundTiesToEven` 模式进行 \*\*\*
  - 发生溢出时，会产生（与输入符号相同的）无穷大
  - 注意：对于当前这组数值类型，溢出只会发生在 `u128 as f32` 且值大于或等于 `f32::MAX + (0.5 ULP)` 的情况下
  ```rust
  assert_eq!(1337i32 as f32, 1337f32);
  assert_eq!(123_456_789i32 as f32, 123_456_790f32, "Rounded");
  assert_eq!(0xffffffff_ffffffff_ffffffff_ffffffff_u128 as f32, std::f32::INFINITY);
  ```

<div class="rule" id="r-expr.as.numeric.float-widening"><a class="rule-link" href="#r-expr.as.numeric.float-widening" title="expr.as.numeric.float-widening"><span>[expr<wbr>.as<wbr>.numeric<wbr>.float-widening]</span></a>
</div>

- 从 f32 转换到 f64 是精确且无损的
  
  ```rust
  assert_eq!(1_234.5f32 as f64, 1_234.5f64);
  assert_eq!(std::f32::INFINITY as f64, std::f64::INFINITY);
  assert!((std::f32::NAN as f64).is_nan());
  ```

<div class="rule" id="r-expr.as.numeric.float-narrowing"><a class="rule-link" href="#r-expr.as.numeric.float-narrowing" title="expr.as.numeric.float-narrowing"><span>[expr<wbr>.as<wbr>.numeric<wbr>.float-narrowing]</span></a>
</div>

- 从 f64 转换到 f32 会产生最接近的可表示 f32 \*\*
  
  - 必要时，舍入按照 `roundTiesToEven` 模式进行 \*\*\*
  - 发生溢出时，会产生（与输入符号相同的）无穷大
  ```rust
  assert_eq!(1_234.5f64 as f32, 1_234.5f32);
  assert_eq!(1_234_567_891.123f64 as f32, 1_234_567_890f32, "Rounded");
  assert_eq!(std::f64::INFINITY as f32, std::f32::INFINITY);
  assert!((std::f64::NAN as f32).is_nan());
  ```

\* 如果硬件本身不支持采用这种舍入模式和溢出行为的整数到浮点数转换，这些转换很可能比预期更慢。

\*\* 如果硬件本身不支持采用这种舍入模式和溢出行为的 f64 到 f32 转换，这些转换很可能比预期更慢。

\*\*\* 如 IEEE 754-2008 §4.3.1 所定义：选择最近的浮点数；如果恰好位于两个浮点数正中间，则优先选择最低有效位为偶数的那个。

<div class="rule" id="r-expr.as.enum"><a class="rule-link" href="#r-expr.as.enum" title="expr.as.enum"><span>[expr<wbr>.as<wbr>.enum]</span></a>
</div>

#### 枚举转换

<div class="rule" id="r-expr.as.enum.discriminant"><a class="rule-link" href="#r-expr.as.enum.discriminant" title="expr.as.enum.discriminant"><span>[expr<wbr>.as<wbr>.enum<wbr>.discriminant]</span></a>
</div>

将枚举转换为其判别值，然后在需要时使用数值转换。转换仅限于以下几类枚举：

- [仅含单元变体的枚举](../items/enumerations.md#unit-only-enum)
- [无字段枚举](../items/enumerations.md#field-less-enum)，且没有[显式判别值](../items/enumerations.md#explicit-discriminants)，或者只有单元变体具有显式判别值

```rust
enum Enum { A, B, C }
assert_eq!(Enum::A as i32, 0);
assert_eq!(Enum::B as i32, 1);
assert_eq!(Enum::C as i32, 2);
```

<div class="rule" id="r-expr.as.enum.no-drop"><a class="rule-link" href="#r-expr.as.enum.no-drop" title="expr.as.enum.no-drop"><span>[expr<wbr>.as<wbr>.enum<wbr>.no-drop]</span></a>
</div>

如果枚举实现了 [`Drop`](../../core/ops/drop/trait.Drop.html)，则不允许转换。

<div class="rule" id="r-expr.as.bool-char-as-int"><a class="rule-link" href="#r-expr.as.bool-char-as-int" title="expr.as.bool-char-as-int"><span>[expr<wbr>.as<wbr>.bool-char-as-int]</span></a>
</div>

#### 基本类型到整数转换

- `false` 转换为 `0`，`true` 转换为 `1`
- `char` 转换为码点的值，然后在需要时使用数值转换。

```rust
assert_eq!(false as i32, 0);
assert_eq!(true as i32, 1);
assert_eq!('A' as i32, 65);
assert_eq!('Ö' as i32, 214);
```

<div class="rule" id="r-expr.as.u8-as-char"><a class="rule-link" href="#r-expr.as.u8-as-char" title="expr.as.u8-as-char"><span>[expr<wbr>.as<wbr>.u8-as-char]</span></a>
</div>

#### `u8` 到 `char` 的转换

转换为具有相应码点的 `char`。

```rust
assert_eq!(65u8 as char, 'A');
assert_eq!(214u8 as char, 'Ö');
```

<div class="rule" id="r-expr.as.pointer-as-int"><a class="rule-link" href="#r-expr.as.pointer-as-int" title="expr.as.pointer-as-int"><span>[expr<wbr>.as<wbr>.pointer-as-int]</span></a>
</div>

#### 指针到地址转换

从裸指针转换为整数会产生所引用内存的机器地址。如果整数类型小于指针类型，该地址可能被截断；使用 `usize` 可以避免这种情况。

<div class="rule" id="r-expr.as.int-as-pointer"><a class="rule-link" href="#r-expr.as.int-as-pointer" title="expr.as.int-as-pointer"><span>[expr<wbr>.as<wbr>.int-as-pointer]</span></a>
</div>

#### 地址到指针转换

从整数转换为裸指针会将该整数解释为内存地址，并产生一个引用该内存的指针。

<div class="alert alert-warning">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
 > 
 > 这会与仍在开发中的 Rust 内存模型相互作用。通过这种转换获得的指针即使与有效指针按位相等，也可能受到额外限制。如果没有遵守别名规则，解引用这样的指针可能是[未定义行为](../behavior-considered-undefined.md)。

</div>

健全地址算术的一个简单示例：

```rust
let mut values: [i32; 2] = [1, 2];
let p1: *mut i32 = values.as_mut_ptr();
let first_address = p1 as usize;
let second_address = first_address + 4; // 4 == size_of::<i32>()
let p2 = second_address as *mut i32;
unsafe {
    *p2 += 1;
}
assert_eq!(values[1], 3);
```

<div class="rule" id="r-expr.as.pointer"><a class="rule-link" href="#r-expr.as.pointer" title="expr.as.pointer"><span>[expr<wbr>.as<wbr>.pointer]</span></a>
</div>

#### 指针到指针转换

<div class="rule" id="r-expr.as.pointer.behavior"><a class="rule-link" href="#r-expr.as.pointer.behavior" title="expr.as.pointer.behavior"><span>[expr<wbr>.as<wbr>.pointer<wbr>.behavior]</span></a>
</div>

`*const T` / `*mut T` 可以转换为 `*const U` / `*mut U`，行为如下：

<div class="rule" id="r-expr.as.pointer.sized"><a class="rule-link" href="#r-expr.as.pointer.sized" title="expr.as.pointer.sized"><span>[expr<wbr>.as<wbr>.pointer<wbr>.sized]</span></a>
</div>

- 如果 `T` 和 `U` 都是确定大小类型，则原样返回指针。
  
  <div class="alert alert-example">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
   > 
   > ```rust
   > let x: i32 = 42;
   > let p1: *const i32 = &x;
   > let p2: *const u8 = p1 as *const u8;
   > // 指针地址保持不变。
   > assert_eq!(p1 as usize, p2 as usize);
   > ```
  
  </div>
  

<div class="rule" id="r-expr.as.pointer.discard-metadata"><a class="rule-link" href="#r-expr.as.pointer.discard-metadata" title="expr.as.pointer.discard-metadata"><span>[expr<wbr>.as<wbr>.pointer<wbr>.discard-metadata]</span></a>
</div>

- 如果 `T` 是未确定大小类型而 `U` 是确定大小类型，则该转换会丢弃补全指向 `T` 的宽指针所需的所有元数据，并产生一个指向 `U` 的瘦指针，其内容由该未确定大小指针的数据部分组成。
  
  <div class="alert alert-example">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
   > 
   > ```rust
   > let slice: &[i32] = &[1, 2, 3];
   > let ptr: *const [i32] = slice as *const [i32];
   > // 从宽指针 (*const [i32]) 转换到瘦指针 (*const i32)
   > // 丢弃长度元数据。
   > let data_ptr: *const i32 = ptr as *const i32;
   > assert_eq!(unsafe { *data_ptr }, 1);
   > ```
  
  </div>
  

<div class="rule" id="r-expr.as.pointer.unsized.unchanged"><a class="rule-link" href="#r-expr.as.pointer.unsized.unchanged" title="expr.as.pointer.unsized.unchanged"><span>[expr<wbr>.as<wbr>.pointer<wbr>.unsized<wbr>.unchanged]</span></a>
</div>

- 如果 `T` 和 `U` 都是未确定大小类型，也会原样返回指针。特别是，元数据会被精确保留。只有当元数据按以下规则兼容时，才能执行该转换：

<div class="rule" id="r-expr.as.pointer.unsized.slice"><a class="rule-link" href="#r-expr.as.pointer.unsized.slice" title="expr.as.pointer.unsized.slice"><span>[expr<wbr>.as<wbr>.pointer<wbr>.unsized<wbr>.slice]</span></a>
</div>

- 当 `T` 和 `U` 都是带有切片元数据的未确定大小类型时，它们总是兼容。切片的元数据是元素数量，因此转换 `*[u16] -> *[u8]` 是合法的，但会导致字节数减半。
  
  <div class="alert alert-example">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
   > 
   > ```rust
   > let slice: &[u16] = &[1, 2, 3];
   > let ptr: *const [u16] = slice as *const [u16];
   > let byte_ptr: *const [u8] = ptr as *const [u8];
   > assert_eq!(byte_ptr.len(), 3);
   > ```
  
  </div>
  

<div class="rule" id="r-expr.as.pointer.unsized.trait"><a class="rule-link" href="#r-expr.as.pointer.unsized.trait" title="expr.as.pointer.unsized.trait"><span>[expr<wbr>.as<wbr>.pointer<wbr>.unsized<wbr>.trait]</span></a>
</div>

- 当 `T` 和 `U` 都是带有 trait 对象元数据的未确定大小类型时，只有满足以下所有条件，元数据才兼容：
  1. principal trait（主体 trait）必须相同。
     
     <div class="alert alert-example">
     
      > 
      > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
      > 
      > ```rust,compile_fail,E0606
      > trait Foo {}
      > trait Bar {}
      > impl Foo for i32 {}
      > impl Bar for i32 {}
      > 
      > let x: i32 = 42;
      > let ptr_foo: *const dyn Foo = &x as *const dyn Foo;
      > // 不能转换到不同的 principal trait。
      > let ptr_bar: *const dyn Bar = ptr_foo as *const dyn Bar; // ERROR
      > ```
     
     </div>
     
  1. 可以移除 auto trait。
     
     <div class="alert alert-example">
     
      > 
      > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
      > 
      > ```rust
      > trait Foo {}
      > struct S;
      > impl Foo for S {}
      > unsafe impl Send for S {}
      > 
      > let s = S;
      > let ptr_send: *const (dyn Foo + Send) = &s;
      > // 移除 auto trait。
      > let ptr_no_send: *const dyn Foo = ptr_send as *const dyn Foo;
      > ```
     
     </div>
     
  1. 只有当 auto trait 是 principal trait（主体 trait）的 super trait 时，才可以添加该 auto trait。
     
     <div class="alert alert-example">
     
      > 
      > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
      > 
      > ```rust
      > trait Foo: Send {}
      > struct S;
      > impl Foo for S {}
      > unsafe impl Send for S {}
      > 
      > let s = S;
      > let ptr_no_send: *const dyn Foo = &s;
      > // 添加 auto trait。
      > let ptr_send: *const (dyn Foo + Send) = ptr_no_send as *const (dyn Foo + Send);
      > ```
      > 
      > ```rust,compile_fail,E0804
      > trait Foo {}
      > # struct S;
      > # impl Foo for S {}
      > # unsafe impl Send for S {}
      > #
      > # let s = S;
      > # let ptr_no_send: *const dyn Foo = &s;
      > // 与上面相同，只是 trait Foo 没有将 Send 作为 super trait。
      > let ptr_send: *const (dyn Foo + Send) = ptr_no_send as *const (dyn Foo + Send); // ERROR
      > ```
     
     </div>
     
  1. 尾随生命周期只能缩短。
     
     <div class="alert alert-example">
     
      > 
      > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
      > 
      > ```rust
      > trait Foo {}
      > 
      > fn shorten_lifetime<'long: 'short, 'short>(
      >     ptr: *const (dyn Foo + 'long),
      > ) -> *const (dyn Foo + 'short) {
      >     // 允许缩短生命周期。
      >     ptr as *const (dyn Foo + 'short)
      > }
      > ```
      > 
      > ```rust,compile_fail
      > trait Foo {}
      > 
      > fn lengthen_lifetime<'long: 'short, 'short>(
      >     ptr: *const (dyn Foo + 'short),
      > ) -> *const (dyn Foo + 'long) {
      >     // 不允许转换到更长的生命周期。
      >     ptr as *const (dyn Foo + 'long) // ERROR
      > }
      > ```
     
     </div>
     
  1. 泛型（包括生命周期）和关联类型必须精确匹配。
     
     <div class="alert alert-example">
     
      > 
      > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
      > 
      > ```rust,compile_fail,E0606
      > trait Generic<T> {}
      > impl Generic<i32> for () {}
      > impl Generic<u32> for () {}
      > 
      > let x = ();
      > let ptr_i32: *const dyn Generic<i32> = &x;
      > // 不能转换到不同的泛型参数。
      > let ptr_u32: *const dyn Generic<u32> = ptr_i32 as *const dyn Generic<u32>; // ERROR
      > ```
      > 
      > ```rust
      > trait HasType {
      >     type Output;
      > }
      > 
      > trait Generic<'x, T> {}
      > 
      > fn cast_via_associated<'a, 'b, A, B>(
      >     ptr: *const dyn Generic<'a, A::Output>,
      > ) -> *const dyn Generic<'b, B::Output>
      > where
      >     'a: 'b,
      >     'b: 'a,
      >     A: HasType,
      >     B: HasType<Output = A::Output>, // 强制相等
      > {
      >     ptr as *const dyn Generic<'b, B::Output>
      > }
      > ```
     
     </div>
     

<div class="rule" id="r-expr.as.pointer.unsized.compound"><a class="rule-link" href="#r-expr.as.pointer.unsized.compound" title="expr.as.pointer.unsized.compound"><span>[expr<wbr>.as<wbr>.pointer<wbr>.unsized<wbr>.compound]</span></a>
</div>

- 当 `T` 或 `U` 是最后一个字段为未确定大小类型的结构体或元组类型时，它与其最后一个字段具有相同的元数据和兼容性规则。
  
  <div class="alert alert-example">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
   > 
   > ```rust
   > struct Wrapper(u32, [u8]);
   > 
   > let slice: &[u8] = &[1, 2, 3];
   > let ptr: *const [u8] = slice;
   > 
   > // 转换到结构体时保留元数据（长度 3）
   > // 其中最后一个字段是未确定大小类型 `[u8]`。
   > let wrapper_ptr: *const Wrapper = ptr as *const Wrapper;
   > 
   > // 转换回来时也会保留。
   > let ptr_back: *const [u8] = wrapper_ptr as *const [u8];
   > assert_eq!(ptr_back.len(), 3);
   > ```
  
  </div>
  

<div class="rule" id="r-expr.assign"><a class="rule-link" href="#r-expr.assign" title="expr.assign"><span>[expr<wbr>.assign]</span></a>
</div>

## 赋值表达式

<div class="rule" id="r-expr.assign.syntax"><a class="rule-link" href="#r-expr.assign.syntax" title="expr.assign.syntax"><span>[expr<wbr>.assign<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-AssignmentExpression" onclick="show_railroad()">[AssignmentExpression](operator-expr.md#railroad-AssignmentExpression)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 318px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-AssignmentExpression"><svg class="railroad" viewBox="0 0 318 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="operator-expr.md#grammar-AssignmentExpression">
<text class="comment" x="88" y="25">
AssignmentExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="42"/>
<text x="85" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="145" y="42"/>
<text x="159" y="58">
=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="183" y="42"/>
<text x="233" y="58">
Expression</text>
</g>
</a>
<path d=" M 135 53 h 10"/>
<path d=" M 173 53 h 10"/>
</g>
<path d=" M 293 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 283 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.assign.intro"><a class="rule-link" href="#r-expr.assign.intro" title="expr.assign.intro"><span>[expr<wbr>.assign<wbr>.intro]</span></a>
</div>

\_赋值表达式_会将一个值移动到指定位置。

<div class="rule" id="r-expr.assign.assignee"><a class="rule-link" href="#r-expr.assign.assignee" title="expr.assign.assignee"><span>[expr<wbr>.assign<wbr>.assignee]</span></a>
</div>

赋值表达式由[可变](../expressions.md#mutability) [赋值目标表达式](../expressions.md#place-expressions-and-value-expressions)（即_赋值目标操作数\_）后接等号（`=`）和[值表达式](../expressions.md#place-expressions-and-value-expressions)（即_被赋的值操作数\_）组成。

<div class="rule" id="r-expr.assign.behavior-basic"><a class="rule-link" href="#r-expr.assign.behavior-basic" title="expr.assign.behavior-basic"><span>[expr<wbr>.assign<wbr>.behavior-basic]</span></a>
</div>

在最基本的形式中，赋值目标表达式是[位置表达式](../expressions.md#place-expressions-and-value-expressions)，我们先讨论这种情况。

<div class="rule" id="r-expr.assign.behavior-destructuring"><a class="rule-link" href="#r-expr.assign.behavior-destructuring" title="expr.assign.behavior-destructuring"><span>[expr<wbr>.assign<wbr>.behavior-destructuring]</span></a>
</div>

更一般的解构赋值情况会在下文讨论，但这种情况总是分解为对位置表达式的顺序赋值，而这可以被视为更基础的情况。

<div class="rule" id="r-expr.assign.basic"><a class="rule-link" href="#r-expr.assign.basic" title="expr.assign.basic"><span>[expr<wbr>.assign<wbr>.basic]</span></a>
</div>

### 基本赋值

<div class="rule" id="r-expr.assign.evaluation-order"><a class="rule-link" href="#r-expr.assign.evaluation-order" title="expr.assign.evaluation-order"><span>[expr<wbr>.assign<wbr>.evaluation-order]</span></a>
</div>

赋值表达式的求值从求值其操作数开始。先求值被赋的值操作数，然后求值赋值目标表达式。

<div class="rule" id="r-expr.assign.destructuring-order"><a class="rule-link" href="#r-expr.assign.destructuring-order" title="expr.assign.destructuring-order"><span>[expr<wbr>.assign<wbr>.destructuring-order]</span></a>
</div>

对于解构赋值，赋值目标表达式的子表达式按从左到右的顺序求值。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这与其他表达式不同，因为右操作数会先于左操作数求值。

</div>

<div class="rule" id="r-expr.assign.drop-target"><a class="rule-link" href="#r-expr.assign.drop-target" title="expr.assign.drop-target"><span>[expr<wbr>.assign<wbr>.drop-target]</span></a>
</div>

然后，它的效果是先[丢弃](../destructors.md)被赋值位置处的值，除非该位置是未初始化的局部变量或局部变量的未初始化字段。

<div class="rule" id="r-expr.assign.behavior"><a class="rule-link" href="#r-expr.assign.behavior" title="expr.assign.behavior"><span>[expr<wbr>.assign<wbr>.behavior]</span></a>
</div>

接着，它会将被赋的值[复制或移动](../expressions.md#moved-and-copied-types)到被赋值位置。

<div class="rule" id="r-expr.assign.result"><a class="rule-link" href="#r-expr.assign.result" title="expr.assign.result"><span>[expr<wbr>.assign<wbr>.result]</span></a>
</div>

赋值表达式始终产生[单元值](../types/tuple.md)。

示例：

```rust
let mut x = 0;
let y = 0;
x = y;
```

<div class="rule" id="r-expr.assign.destructure"><a class="rule-link" href="#r-expr.assign.destructure" title="expr.assign.destructure"><span>[expr<wbr>.assign<wbr>.destructure]</span></a>
</div>

### 解构赋值

<div class="rule" id="r-expr.assign.destructure.intro"><a class="rule-link" href="#r-expr.assign.destructure.intro" title="expr.assign.destructure.intro"><span>[expr<wbr>.assign<wbr>.destructure<wbr>.intro]</span></a>
</div>

解构赋值对应于变量声明中的解构模式匹配，允许对复杂值（如元组或结构体）赋值。例如，我们可以交换两个可变变量：

```rust
let (mut a, mut b) = (0, 1);
// 使用解构赋值交换 `a` 和 `b`。
(b, a) = (a, b);
```

<div class="rule" id="r-expr.assign.destructure.assignee"><a class="rule-link" href="#r-expr.assign.destructure.assignee" title="expr.assign.destructure.assignee"><span>[expr<wbr>.assign<wbr>.destructure<wbr>.assignee]</span></a>
</div>

与使用 `let` 的解构声明不同，由于语法歧义，模式不能出现在赋值左侧。相反，与模式对应的一组表达式会被指定为[赋值目标表达式](../expressions.md#place-expressions-and-value-expressions)，并允许出现在赋值左侧。随后，赋值目标表达式会脱糖为模式匹配，接着进行顺序赋值。

<div class="rule" id="r-expr.assign.destructure.irrefutable"><a class="rule-link" href="#r-expr.assign.destructure.irrefutable" title="expr.assign.destructure.irrefutable"><span>[expr<wbr>.assign<wbr>.destructure<wbr>.irrefutable]</span></a>
</div>

脱糖后的模式必须是不可反驳的：具体来说，这意味着只有长度在编译时已知的切片模式，以及平凡切片 `[..]`，才允许用于解构赋值。

脱糖方法很直接，用示例最容易说明。

```rust
# struct Struct { x: u32, y: u32 }
# let (mut a, mut b) = (0, 0);
(a, b) = (3, 4);

[a, b] = [3, 4];

Struct { x: a, y: b } = Struct { x: 3, y: 4};

// 脱糖为：

{
    let (_a, _b) = (3, 4);
    a = _a;
    b = _b;
}

{
    let [_a, _b] = [3, 4];
    a = _a;
    b = _b;
}

{
    let Struct { x: _a, y: _b } = Struct { x: 3, y: 4};
    a = _a;
    b = _b;
}
```

<div class="rule" id="r-expr.assign.destructure.repeat-ident"><a class="rule-link" href="#r-expr.assign.destructure.repeat-ident" title="expr.assign.destructure.repeat-ident"><span>[expr<wbr>.assign<wbr>.destructure<wbr>.repeat-ident]</span></a>
</div>

标识符并不禁止在单个赋值目标表达式中多次使用。

<div class="rule" id="r-expr.assign.destructure.discard-value"><a class="rule-link" href="#r-expr.assign.destructure.discard-value" title="expr.assign.destructure.discard-value"><span>[expr<wbr>.assign<wbr>.destructure<wbr>.discard-value]</span></a>
</div>

[下划线表达式](./underscore-expr.md)和空[范围表达式](./range-expr.md)可用于忽略某些值，而不绑定它们。

<div class="rule" id="r-expr.assign.destructure.default-binding"><a class="rule-link" href="#r-expr.assign.destructure.default-binding" title="expr.assign.destructure.default-binding"><span>[expr<wbr>.assign<wbr>.destructure<wbr>.default-binding]</span></a>
</div>

注意，默认绑定模式不适用于脱糖后的表达式。

<div class="rule" id="r-expr.assign.destructure.tmp-scopes"><a class="rule-link" href="#r-expr.assign.destructure.tmp-scopes" title="expr.assign.destructure.tmp-scopes"><span>[expr<wbr>.assign<wbr>.destructure<wbr>.tmp-scopes]</span></a>
</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 脱糖会限制解构赋值的被赋的值操作数（RHS）的[临时作用域](../destructors.md#r-destructors.scope.temporary)。
 > 
 > 在基本赋值中，[临时值](../expressions.md#r-expr.temporary)会在外围临时作用域的末尾被丢弃。在下面的例子中，也就是语句末尾。因此，赋值和使用是允许的。
 > 
 > ```rust
 > # fn temp() {}
 > fn f<T>(x: T) -> T { x }
 > let x;
 > (x = f(&temp()), x); // OK
 > ```
 > 
 > 相反，在解构赋值中，临时值会在脱糖中 `let` 语句的末尾被丢弃。由于这发生在下面我们尝试赋值给 `x` 之前，因此会失败。
 > 
 > ```rust,compile_fail,E0716
 > # fn temp() {}
 > # fn f<T>(x: T) -> T { x }
 > # let x;
 > [x] = [f(&temp())]; // ERROR
 > ```
 > 
 > 这会脱糖为：
 > 
 > ```rust,compile_fail,E0716
 > # fn temp() {}
 > # fn f<T>(x: T) -> T { x }
 > # let x;
 > {
 >     let [_x] = [f(&temp())];
 >     //                     ^
 >     //      临时值在这里被丢弃。
 >     x = _x; // ERROR
 > }
 > ```

</div>

<div class="rule" id="r-expr.assign.destructure.tmp-ext"><a class="rule-link" href="#r-expr.assign.destructure.tmp-ext" title="expr.assign.destructure.tmp-ext"><span>[expr<wbr>.assign<wbr>.destructure<wbr>.tmp-ext]</span></a>
</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 由于脱糖，解构赋值的被赋的值操作数（RHS）是在新引入块内的[延长表达式](../destructors.md#r-destructors.scope.lifetime-extension.exprs)。
 > 
 > 下面，因为[临时作用域](../destructors.md#r-destructors.scope.temporary)被延长到这个引入块的末尾，所以赋值是允许的。
 > 
 > ```rust
 > # fn temp() {}
 > # let x;
 > [x] = [&temp()]; // OK
 > ```
 > 
 > 这会脱糖为：
 > 
 > ```rust
 > # fn temp() {}
 > # let x;
 > { let [_x] = [&temp()]; x = _x; } // OK
 > ```
 > 
 > 然而，如果我们尝试使用 `x`，即使是在同一条语句内，也会得到错误，因为[临时值](../expressions.md#r-expr.temporary)会在这个引入块的末尾被丢弃。
 > 
 > ```rust,compile_fail,E0716
 > # fn temp() {}
 > # let x;
 > ([x] = [&temp()], x); // ERROR
 > ```
 > 
 > 这会脱糖为：
 > 
 > ```rust,compile_fail,E0716
 > # fn temp() {}
 > # let x;
 > (
 >     {
 >         let [_x] = [&temp()];
 >         x = _x;
 >     }, // <-- 临时值在这里被丢弃。
 >     x, // ERROR
 > );
 > ```

</div>

<div class="rule" id="r-expr.compound-assign"><a class="rule-link" href="#r-expr.compound-assign" title="expr.compound-assign"><span>[expr<wbr>.compound-assign]</span></a>
</div>

## 复合赋值表达式

<div class="rule" id="r-expr.compound-assign.syntax"><a class="rule-link" href="#r-expr.compound-assign.syntax" title="expr.compound-assign.syntax"><span>[expr<wbr>.compound-assign<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-CompoundAssignmentExpression" onclick="show_railroad()">[CompoundAssignmentExpression](operator-expr.md#railroad-CompoundAssignmentExpression)</span> →  
      <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">+=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\-=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\*=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">/=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">%=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">&=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\|=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">^=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\<\<=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\>>=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 382px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CompoundAssignmentExpression"><svg class="railroad" viewBox="0 0 382 371" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="operator-expr.md#grammar-CompoundAssignmentExpression">
<text class="comment" x="116" y="25">
CompoundAssignmentExpression</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 256 0 h 32"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="42"/>
<text x="109" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="42"/>
<text x="187" y="58">
+=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="42"/>
<text x="265" y="58">
Expression</text>
</g>
</a>
<path d=" M 159 53 h 10"/>
<path d=" M 205 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 288 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 288 0 v -33"/>
<path d=" M 47 107 v 33 m 288 0 v -33"/>
<path d=" M 47 140 v 33 m 288 0 v -33"/>
<path d=" M 47 173 v 33 m 288 0 v -33"/>
<path d=" M 47 206 v 33 m 288 0 v -33"/>
<path d=" M 47 239 v 33 m 288 0 v -33"/>
<path d=" M 47 272 v 33 m 288 0 v -33"/>
<path d=" M 47 305 v 33 m 288 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 256 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="75"/>
<text x="109" y="91">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="75"/>
<text x="187" y="91">
-=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="75"/>
<text x="265" y="91">
Expression</text>
</g>
</a>
<path d=" M 159 86 h 10"/>
<path d=" M 205 86 h 10"/>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 256 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="108"/>
<text x="109" y="124">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="108"/>
<text x="187" y="124">
*=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="108"/>
<text x="265" y="124">
Expression</text>
</g>
</a>
<path d=" M 159 119 h 10"/>
<path d=" M 205 119 h 10"/>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 256 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="141"/>
<text x="109" y="157">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="141"/>
<text x="187" y="157">
/=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="141"/>
<text x="265" y="157">
Expression</text>
</g>
</a>
<path d=" M 159 152 h 10"/>
<path d=" M 205 152 h 10"/>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 256 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="174"/>
<text x="109" y="190">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="174"/>
<text x="187" y="190">
%=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="174"/>
<text x="265" y="190">
Expression</text>
</g>
</a>
<path d=" M 159 185 h 10"/>
<path d=" M 205 185 h 10"/>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 256 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="207"/>
<text x="109" y="223">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="207"/>
<text x="187" y="223">
&amp;=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="207"/>
<text x="265" y="223">
Expression</text>
</g>
</a>
<path d=" M 159 218 h 10"/>
<path d=" M 205 218 h 10"/>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 256 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="240"/>
<text x="109" y="256">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="240"/>
<text x="187" y="256">
|=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="240"/>
<text x="265" y="256">
Expression</text>
</g>
</a>
<path d=" M 159 251 h 10"/>
<path d=" M 205 251 h 10"/>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 256 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="273"/>
<text x="109" y="289">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="169" y="273"/>
<text x="187" y="289">
^=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="215" y="273"/>
<text x="265" y="289">
Expression</text>
</g>
</a>
<path d=" M 159 284 h 10"/>
<path d=" M 205 284 h 10"/>
</g>
<path d=" M 47 305 v 0 a 12 12 0 0 0 12 12 m 264 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="306"/>
<text x="109" y="322">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="169" y="306"/>
<text x="191" y="322">
&lt;&lt;=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="223" y="306"/>
<text x="273" y="322">
Expression</text>
</g>
</a>
<path d=" M 159 317 h 10"/>
<path d=" M 213 317 h 10"/>
</g>
<path d=" M 47 338 v 0 a 12 12 0 0 0 12 12 m 264 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="339"/>
<text x="109" y="355">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="169" y="339"/>
<text x="191" y="355">
&gt;&gt;=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="223" y="339"/>
<text x="273" y="355">
Expression</text>
</g>
</a>
<path d=" M 159 350 h 10"/>
<path d=" M 213 350 h 10"/>
</g>
</g>
<path d=" M 357 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 347 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.compound-assign.intro"><a class="rule-link" href="#r-expr.compound-assign.intro" title="expr.compound-assign.intro"><span>[expr<wbr>.compound-assign<wbr>.intro]</span></a>
</div>

\_复合赋值表达式_将算术和逻辑二元运算符与赋值表达式结合起来。

例如：

```rust
let mut x = 5;
x += 1;
assert!(x == 6);
```

复合赋值的语法是一个[可变](../expressions.md#mutability) [位置表达式](../expressions.md#place-expressions-and-value-expressions)（即_被赋值操作数\_），然后是某个运算符后接 `=` 作为单个 token（没有空白），再后接一个[值表达式](../expressions.md#place-expressions-and-value-expressions)（即_修改操作数\_）。

<div class="rule" id="r-expr.compound-assign.place"><a class="rule-link" href="#r-expr.compound-assign.place" title="expr.compound-assign.place"><span>[expr<wbr>.compound-assign<wbr>.place]</span></a>
</div>

与其他位置操作数不同，被赋值位置操作数必须是位置表达式。

<div class="rule" id="r-expr.compound-assign.no-value"><a class="rule-link" href="#r-expr.compound-assign.no-value" title="expr.compound-assign.no-value"><span>[expr<wbr>.compound-assign<wbr>.no-value]</span></a>
</div>

尝试使用值表达式会产生编译器错误，而不是将其提升为临时值。

<div class="rule" id="r-expr.compound-assign.operand-order"><a class="rule-link" href="#r-expr.compound-assign.operand-order" title="expr.compound-assign.operand-order"><span>[expr<wbr>.compound-assign<wbr>.operand-order]</span></a>
</div>

复合赋值表达式的求值取决于操作数的类型。

<div class="rule" id="r-expr.compound-assign.primitives"><a class="rule-link" href="#r-expr.compound-assign.primitives" title="expr.compound-assign.primitives"><span>[expr<wbr>.compound-assign<wbr>.primitives]</span></a>
</div>

如果在单态化之前即可知道两个操作数的类型都是基本类型，则先求值右侧，再求值左侧，并通过将运算符应用于两侧的值来修改由左侧求值得到的位置。

```rust
# use core::{num::Wrapping, ops::AddAssign};
#
trait Equate {}
impl<T> Equate for (T, T) {}

fn f1(x: (u8,)) {
    let mut order = vec![];
    // 由于两个操作数都是基本类型，右侧（RHS）
    // 先求值。
    { order.push(2); x }.0 += { order.push(1); x }.0;
    assert!(order.is_sorted());
}

fn f2(x: (Wrapping<u8>,)) {
    let mut order = vec![];
    // 由于 `Wrapping<_>` 不是基本类型，左侧（LHS）
    // 先求值。
    { order.push(1); x }.0 += { order.push(2); (0u8,) }.0;
    assert!(order.is_sorted());
}

fn f3<T: AddAssign<u8> + Copy>(x: (T,)) where (T, u8): Equate {
    let mut order = vec![];
    // 由于其中一个操作数是泛型参数，左侧（LHS）先求值，
    // 即使由于 where 子句约束，该泛型参数可以与
    // 基本类型统一。
    { order.push(1); x }.0 += { order.push(2); (0u8,) }.0;
    assert!(order.is_sorted());
}

fn main() {
    f1((0u8,));
    f2((Wrapping(0u8),));
    // 我们提供基本类型作为泛型实参，
    // 但这不会影响单态化后 `f3` 中的
    // 求值顺序。
    f3::<u8>((0u8,));
}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这并不常见。在其他地方，从左到右求值是常规做法。
 > 
 > 更多示例见 [eval order test](https://github.com/rust-lang/rust/blob/1.58.0/src/test/ui/expr/compound-assignment/eval-order.rs)。

</div>

<div class="rule" id="r-expr.compound-assign.trait"><a class="rule-link" href="#r-expr.compound-assign.trait" title="expr.compound-assign.trait"><span>[expr<wbr>.compound-assign<wbr>.trait]</span></a>
</div>

否则，此表达式是使用该运算符对应 trait（见 [expr.arith-logic.behavior](operator-expr.md#r-expr.arith-logic.behavior)）的语法糖，并以左侧作为[接收者](method-call-expr.md#r-expr.method.intro)、右侧作为下一个参数来调用其方法。

例如，下面两个语句是等价的：

```rust
# use std::ops::AddAssign;
fn f<T: AddAssign + Copy>(mut x: T, y: T) {
    x += y; // 语句 1。
    x.add_assign(y); // 语句 2。
}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 令人意外的是，进一步将其脱糖为完全限定的方法调用并不等价，因为当第一个操作数的可变引用通过 [autoref](method-call-expr.md#r-expr.method.candidate-receivers-refs) 获取时，借用检查器有特殊行为。
 > 
 > ```rust
 > # use std::ops::AddAssign;
 > fn f<T: AddAssign + Copy>(mut x: T) {
 >     // 这里我们同时将 `x` 用作 LHS 和 RHS。由于
 >     // 调用 trait 方法所需的 LHS 可变借用
 >     // 是通过 autoref 隐式获取的，所以这是可以的。
 >     x += x; //~ OK
 >     x.add_assign(x); //~ OK
 > }
 > ```
 > 
 > ```rust,compile_fail,E0503
 > # use std::ops::AddAssign;
 > fn f<T: AddAssign + Copy>(mut x: T) {
 >     // 不能将上面的代码脱糖为下面的代码，因为一旦我们获取
 >     // `x` 的可变借用以传递第一个参数，就不能再
 >     // 在第二个参数中按值传递 `x`，因为该可变
 >     // 引用仍然存活。
 >     <T as AddAssign>::add_assign(&mut x, x);
 >     //~^ ERROR cannot use `x` because it was mutably borrowed
 > }
 > ```
 > 
 > ```rust,compile_fail,E0503
 > # use std::ops::AddAssign;
 > fn f<T: AddAssign + Copy>(mut x: T) {
 >     // As above.
 >     (&mut x).add_assign(x);
 >     //~^ ERROR cannot use `x` because it was mutably borrowed
 > }
 > ```

</div>

<div class="rule" id="r-expr.compound-assign.result"><a class="rule-link" href="#r-expr.compound-assign.result" title="expr.compound-assign.result"><span>[expr<wbr>.compound-assign<wbr>.result]</span></a>
</div>

与普通赋值表达式一样，复合赋值表达式始终产生[单元值](../types/tuple.md)。

<div class="alert alert-warning">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
 > 
 > 避免编写依赖复合赋值中操作数求值顺序的代码，因为该顺序可能不常见且令人意外。

</div>
