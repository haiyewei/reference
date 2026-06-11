<div class="rule" id="r-type.slice"><a class="rule-link" href="#r-type.slice" title="type.slice"><span>[type<wbr>.slice]</span></a>
</div>

# 切片类型

<div class="rule" id="r-type.slice.syntax"><a class="rule-link" href="#r-type.slice.syntax" title="type.slice.syntax"><span>[type<wbr>.slice<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-SliceType" onclick="show_railroad()">[SliceType](slice.md#railroad-SliceType)</span> → <span class="grammar-literal">\[</span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span> <span class="grammar-literal">\]</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 198px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-SliceType"><svg class="railroad" viewBox="0 0 198 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="slice.md#grammar-SliceType">
<text class="comment" x="46" y="25">
SliceType</text>
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
]</text>
</g>
<path d=" M 63 53 h 10"/>
<path d=" M 125 53 h 10"/>
</g>
<path d=" M 173 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 163 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-type.slice.intro"><a class="rule-link" href="#r-type.slice.intro" title="type.slice.intro"><span>[type<wbr>.slice<wbr>.intro]</span></a>
</div>

切片是一种 [动态大小类型](../dynamically-sized-types.md)，表示对 `T` 类型元素序列的一个“视图”。切片类型写作 `[T]`。

<div class="rule" id="r-type.slice.unsized"><a class="rule-link" href="#r-type.slice.unsized" title="type.slice.unsized"><span>[type<wbr>.slice<wbr>.unsized]</span></a>
</div>

切片类型通常通过指针类型使用。例如：

- `&[T]`：一个“共享切片”，通常简称为“切片”。它不拥有其所指向的数据；它借用了这些数据。
- `&mut [T]`：一个“可变切片”。它可变地借用其所指向的数据。
- `Box<[T]>`：一个“装箱切片”

示例：

```rust
// A heap-allocated array, coerced to a slice
let boxed_array: Box<[i32]> = Box::new([1, 2, 3]);

// A (shared) slice into an array
let slice: &[i32] = &boxed_array[..];
```

<div class="rule" id="r-type.slice.safe"><a class="rule-link" href="#r-type.slice.safe" title="type.slice.safe"><span>[type<wbr>.slice<wbr>.safe]</span></a>
</div>

切片的所有元素始终已初始化，并且在安全方法和运算符中访问切片始终会进行边界检查。