<div class="rule" id="r-expr.array"><a class="rule-link" href="#r-expr.array" title="expr.array"><span>[expr<wbr>.array]</span></a>
</div>

# 数组和数组索引表达式

## 数组表达式

<div class="rule" id="r-expr.array.syntax"><a class="rule-link" href="#r-expr.array.syntax" title="expr.array.syntax"><span>[expr<wbr>.array<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ArrayExpression" onclick="show_railroad()">[ArrayExpression](array-expr.md#railroad-ArrayExpression)</span> → <span class="grammar-literal">\[</span> <span class="grammar-text">[ArrayElements](array-expr.md#grammar-ArrayElements)</span><sup>?</sup> <span class="grammar-literal">\]</span>

<span class="grammar-text grammar-production" id="grammar-ArrayElements" onclick="show_railroad()">[ArrayElements](array-expr.md#railroad-ArrayElements)</span> →  
      <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>  
    \| <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">;</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 318px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ArrayExpression"><svg class="railroad" viewBox="0 0 318 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="array-expr.md#grammar-ArrayExpression">
<text class="comment" x="67" y="25">
ArrayExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="55"/>
<text x="49" y="71">
[</text>
</g>
<g class="optional">
<path d=" M 73 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="array-expr.md#railroad-ArrayElements">
<g class="nonterminal">
<rect height="22" width="124" x="97" y="55"/>
<text x="159" y="71">
ArrayElements</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="255" y="55"/>
<text x="269" y="71">
]</text>
</g>
<path d=" M 63 66 h 10"/>
<path d=" M 245 66 h 10"/>
</g>
<path d=" M 293 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 283 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 524px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ArrayElements"><svg class="railroad" viewBox="0 0 524 133" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="array-expr.md#grammar-ArrayElements">
<text class="comment" x="60" y="25">
ArrayElements</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 66 h 24 m 406 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="55"/>
<text x="109" y="71">
Expression</text>
</g>
</a>
<g class="optional">
<path d=" M 169 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 162 m -78 0 l -5 -5 m 0 10 l 5 -5 m 78 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 193 66 h 12 m 138 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -138 m 72 0 l 5 -5 m 0 10 l -5 -5 m -72 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="205" y="55"/>
<text x="219" y="71">
,</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="243" y="55"/>
<text x="293" y="71">
Expression</text>
</g>
</a>
<path d=" M 233 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 389 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="413" y="55"/>
<text x="427" y="71">
,</text>
</g>
</g>
<path d=" M 159 66 h 10"/>
<path d=" M 379 66 h 10"/>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 22 m 430 0 v -22 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 100 v 0 a 12 12 0 0 0 12 12 m 248 0 h 158 m -76 0 l -5 -5 m 0 10 l 5 -5 m 76 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="101"/>
<text x="109" y="117">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="101"/>
<text x="183" y="117">
;</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="207" y="101"/>
<text x="257" y="117">
Expression</text>
</g>
</a>
<path d=" M 159 112 h 10"/>
<path d=" M 197 112 h 10"/>
</g>
</g>
<path d=" M 499 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 489 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.array.constructor"><a class="rule-link" href="#r-expr.array.constructor" title="expr.array.constructor"><span>[expr<wbr>.array<wbr>.constructor]</span></a>
</div>

\_数组表达式_构造[数组](../types/array.md)。数组表达式有两种形式。

<div class="rule" id="r-expr.array.array"><a class="rule-link" href="#r-expr.array.array" title="expr.array.array"><span>[expr<wbr>.array<wbr>.array]</span></a>
</div>

第一种形式列出数组中的每个值。

<div class="rule" id="r-expr.array.array-syntax"><a class="rule-link" href="#r-expr.array.array-syntax" title="expr.array.array-syntax"><span>[expr<wbr>.array<wbr>.array-syntax]</span></a>
</div>

这种形式的语法是用方括号括起、以逗号分隔的同一类型表达式列表。

<div class="rule" id="r-expr.array.array-behavior"><a class="rule-link" href="#r-expr.array.array-behavior" title="expr.array.array-behavior"><span>[expr<wbr>.array<wbr>.array-behavior]</span></a>
</div>

这会生成一个数组，其中按写出的顺序包含这些值。

<div class="rule" id="r-expr.array.repeat"><a class="rule-link" href="#r-expr.array.repeat" title="expr.array.repeat"><span>[expr<wbr>.array<wbr>.repeat]</span></a>
</div>

第二种形式的语法是用方括号括起的两个表达式，二者以分号（`;`）分隔。

<div class="rule" id="r-expr.array.repeat-operand"><a class="rule-link" href="#r-expr.array.repeat-operand" title="expr.array.repeat-operand"><span>[expr<wbr>.array<wbr>.repeat-operand]</span></a>
</div>

`;` 前面的表达式称为_重复操作数\_。

<div class="rule" id="r-expr.array.length-operand"><a class="rule-link" href="#r-expr.array.length-operand" title="expr.array.length-operand"><span>[expr<wbr>.array<wbr>.length-operand]</span></a>
</div>

`;` 后面的表达式称为_长度操作数\_。

<div class="rule" id="r-expr.array.length-restriction"><a class="rule-link" href="#r-expr.array.length-restriction" title="expr.array.length-restriction"><span>[expr<wbr>.array<wbr>.length-restriction]</span></a>
</div>

长度操作数必须是[推断 const](../items/generics.md#r-items.generics.const.inferred)，或者是类型为 `usize` 的[常量表达式](../const_eval.md#constant-expressions)（例如[字面量](../tokens.md#literals)或[常量项](../items/constant-items.md)）。

```rust
const C: usize = 1;
let _: [u8; C] = [0; 1]; // Literal.
let _: [u8; C] = [0; C]; // Constant item.
let _: [u8; C] = [0; _]; // Inferred const.
let _: [u8; C] = [0; (((_)))]; // Inferred const.
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 在数组表达式中，[推断 const](../items/generics.md#r-items.generics.const.inferred) 会被解析为[表达式](../expressions.md#grammar-Expression)，但随后在语义上会被视为另一类[const 泛型实参](../items/generics.md#r-items.generics.const.argument)。

</div>

<div class="rule" id="r-expr.array.repeat-behavior"><a class="rule-link" href="#r-expr.array.repeat-behavior" title="expr.array.repeat-behavior"><span>[expr<wbr>.array<wbr>.repeat-behavior]</span></a>
</div>

这种形式的数组表达式会创建一个数组，其长度为长度操作数的值，并且每个元素都是重复操作数的副本。也就是说，`[a; b]` 会创建一个包含 `b` 个 `a` 的值的副本的数组。

<div class="rule" id="r-expr.array.repeat-copy"><a class="rule-link" href="#r-expr.array.repeat-copy" title="expr.array.repeat-copy"><span>[expr<wbr>.array<wbr>.repeat-copy]</span></a>
</div>

如果长度操作数的值大于 1，那么这要求重复操作数的类型实现 [`Copy`](../special-types-and-traits.md#copy)，或者重复操作数是 [const 块表达式](block-expr.md#r-expr.block.const)，或者是指向常量项的[路径](path-expr.md)。

<div class="rule" id="r-expr.array.repeat-const-item"><a class="rule-link" href="#r-expr.array.repeat-const-item" title="expr.array.repeat-const-item"><span>[expr<wbr>.array<wbr>.repeat-const-item]</span></a>
</div>

当重复操作数是 const 块或指向常量项的路径时，会按长度操作数指定的次数对它求值。

<div class="rule" id="r-expr.array.repeat-evaluation-zero"><a class="rule-link" href="#r-expr.array.repeat-evaluation-zero" title="expr.array.repeat-evaluation-zero"><span>[expr<wbr>.array<wbr>.repeat-evaluation-zero]</span></a>
</div>

如果该值为 `0`，则根本不会对 const 块或常量项求值。

<div class="rule" id="r-expr.array.repeat-non-const"><a class="rule-link" href="#r-expr.array.repeat-non-const" title="expr.array.repeat-non-const"><span>[expr<wbr>.array<wbr>.repeat-non-const]</span></a>
</div>

对于既不是 const 块也不是指向常量项路径的表达式，会对它恰好求值一次，然后将结果复制长度操作数的值所指定的次数。

```rust
[1, 2, 3, 4];
["a", "b", "c", "d"];
[0; 128];              // array with 128 zeros
[0u8, 0u8, 0u8, 0u8,];
[[1, 0, 0], [0, 1, 0], [0, 0, 1]]; // 2D array
const EMPTY: Vec<i32> = Vec::new();
[EMPTY; 2];
```

<div class="rule" id="r-expr.array.index"><a class="rule-link" href="#r-expr.array.index" title="expr.array.index"><span>[expr<wbr>.array<wbr>.index]</span></a>
</div>

## 数组和切片索引表达式

<div class="rule" id="r-expr.array.index.syntax"><a class="rule-link" href="#r-expr.array.index.syntax" title="expr.array.index.syntax"><span>[expr<wbr>.array<wbr>.index<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-IndexExpression" onclick="show_railroad()">[IndexExpression](array-expr.md#railroad-IndexExpression)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\[</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\]</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 356px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-IndexExpression"><svg class="railroad" viewBox="0 0 356 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="array-expr.md#grammar-IndexExpression">
<text class="comment" x="67" y="25">
IndexExpression</text>
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
[</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="183" y="42"/>
<text x="233" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="293" y="42"/>
<text x="307" y="58">
]</text>
</g>
<path d=" M 135 53 h 10"/>
<path d=" M 173 53 h 10"/>
<path d=" M 283 53 h 10"/>
</g>
<path d=" M 331 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 321 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.array.index.array"><a class="rule-link" href="#r-expr.array.index.array" title="expr.array.index.array"><span>[expr<wbr>.array<wbr>.index<wbr>.array]</span></a>
</div>

类型为 [Array](../types/array.md) 和 [slice](../types/slice.md) 的值可以通过在其后写一个用方括号括起、类型为 `usize` 的表达式（索引）来进行索引。当数组可变时，可以对产生的[内存位置](../expressions.md#place-expressions-and-value-expressions)赋值。

<div class="rule" id="r-expr.array.index.trait"><a class="rule-link" href="#r-expr.array.index.trait" title="expr.array.index.trait"><span>[expr<wbr>.array<wbr>.index<wbr>.trait]</span></a>
</div>

对于其他类型，索引表达式 `a[b]` 等价于 `*std::ops::Index::index(&a, b)`，在可变位置表达式上下文中则等价于 `*std::ops::IndexMut::index_mut(&mut a, b)`；但例外的是，当索引表达式经历[临时生命周期延长](../destructors.md#r-destructors.scope.lifetime-extension)时，被索引的表达式 `a` 的[临时作用域](../destructors.md#r-destructors.scope.temporary)也会被延长。与方法一样，Rust 也会反复在 `a` 上插入解引用操作以查找实现。

```rust
// The temporary holding the result of `vec![()]` is extended to
// live to the end of the block, so `x` may be used in subsequent
// statements.
let x = &vec![()][0];
# x;
```

```rust,compile_fail,E0716
// The temporary holding the result of `vec![()]` is dropped at the
// end of the statement, so it's an error to use `y` after.
let y = &*std::ops::Index::index(&vec![()], 0); // ERROR
# y;
```

<div class="rule" id="r-expr.array.index.zero-index"><a class="rule-link" href="#r-expr.array.index.zero-index" title="expr.array.index.zero-index"><span>[expr<wbr>.array<wbr>.index<wbr>.zero-index]</span></a>
</div>

数组和切片的索引从零开始。

<div class="rule" id="r-expr.array.index.const"><a class="rule-link" href="#r-expr.array.index.const" title="expr.array.index.const"><span>[expr<wbr>.array<wbr>.index<wbr>.const]</span></a>
</div>

数组访问是[常量表达式](../const_eval.md#constant-expressions)，因此在索引值为常量时，可以在编译时检查边界。否则会在运行时执行检查；如果检查失败，会使线程进入 [_panic 状态_](../panic.md)。

```rust,should_panic
// lint is deny by default.
#![warn(unconditional_panic)]

([1, 2, 3, 4])[2];        // Evaluates to 3

let b = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
b[1][2];                  // multidimensional array indexing

let x = (["a", "b"])[10]; // warning: index out of bounds

let n = 10;
let y = (["a", "b"])[n];  // panics

let arr = ["a", "b"];
arr[10];                  // warning: index out of bounds
```

<div class="rule" id="r-expr.array.index.trait-impl"><a class="rule-link" href="#r-expr.array.index.trait-impl" title="expr.array.index.trait-impl"><span>[expr<wbr>.array<wbr>.index<wbr>.trait-impl]</span></a>
</div>

通过实现 [Index](../../core/ops/index/trait.Index.html) 和 [IndexMut](../../core/ops/index/trait.IndexMut.html) trait，可以为数组和切片以外的类型实现数组索引表达式。