<div class="rule" id="r-type.array"><a class="rule-link" href="#r-type.array" title="type.array"><span>[type<wbr>.array]</span></a>
</div>

# 数组类型

<div class="rule" id="r-type.array.syntax"><a class="rule-link" href="#r-type.array.syntax" title="type.array.syntax"><span>[type<wbr>.array<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ArrayType" onclick="show_railroad()">[ArrayType](array.md#railroad-ArrayType)</span> → <span class="grammar-literal">\[</span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span> <span class="grammar-literal">;</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">\]</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 346px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ArrayType"><svg class="railroad" viewBox="0 0 346 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="array.md#grammar-ArrayType">
<text class="comment" x="46" y="25">
ArrayType</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
[</text>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="73" y="42"/>
<text x="99" y="58">
Type</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="135" y="42"/>
<text x="149" y="58">
;</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="173" y="42"/>
<text x="223" y="58">
Expression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="283" y="42"/>
<text x="297" y="58">
]</text>
</g>
<path d=" M 63 53 h 10"/>
<path d=" M 125 53 h 10"/>
<path d=" M 163 53 h 10"/>
<path d=" M 273 53 h 10"/>
</g>
<path d=" M 321 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 311 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-type.array.intro"><a class="rule-link" href="#r-type.array.intro" title="type.array.intro"><span>[type<wbr>.array<wbr>.intro]</span></a>
</div>

数组是由 `N` 个 `T` 类型元素组成的固定大小序列。数组类型写作 `[T; N]`。

<div class="rule" id="r-type.array.constraint"><a class="rule-link" href="#r-type.array.constraint" title="type.array.constraint"><span>[type<wbr>.array<wbr>.constraint]</span></a>
</div>

大小是一个 [常量表达式](../const_eval.md#constant-expressions)，其求值结果为 [`usize`](numeric.md#machine-dependent-integer-types)。

示例：

```rust
// A stack-allocated array
let array: [i32; 3] = [1, 2, 3];

// A heap-allocated array, coerced to a slice
let boxed_array: Box<[i32]> = Box::new([1, 2, 3]);
```

<div class="rule" id="r-type.array.index"><a class="rule-link" href="#r-type.array.index" title="type.array.index"><span>[type<wbr>.array<wbr>.index]</span></a>
</div>

数组的所有元素始终已初始化，并且在安全方法和运算符中访问数组始终会进行边界检查。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 标准库类型 [`Vec<T>`](../../alloc/vec/struct.Vec.html) 提供了一种堆分配的可调整大小数组类型。

</div>
