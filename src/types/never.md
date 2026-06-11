<div class="rule" id="r-type.never"><a class="rule-link" href="#r-type.never" title="type.never"><span>[type<wbr>.never]</span></a>
</div>

# never 类型

<div class="rule" id="r-type.never.syntax"><a class="rule-link" href="#r-type.never.syntax" title="type.never.syntax"><span>[type<wbr>.never<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-NeverType" onclick="show_railroad()">[NeverType](never.md#railroad-NeverType)</span> → <span class="grammar-literal">!</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 98px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-NeverType"><svg class="railroad" viewBox="0 0 98 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="never.md#grammar-NeverType">
<text class="comment" x="46" y="25">
NeverType</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
!</text>
</g>
<path d=" M 73 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 63 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-type.never.intro"><a class="rule-link" href="#r-type.never.intro" title="type.never.intro"><span>[type<wbr>.never<wbr>.intro]</span></a>
</div>

never 类型 `!` 是一种没有值的类型，表示永不完成的计算的结果。

<div class="rule" id="r-type.never.coercion"><a class="rule-link" href="#r-type.never.coercion" title="type.never.coercion"><span>[type<wbr>.never<wbr>.coercion]</span></a>
</div>

类型为 `!` 的表达式可以被强制转换为任何其他类型。

<div class="rule" id="r-type.never.constraint"><a class="rule-link" href="#r-type.never.constraint" title="type.never.constraint"><span>[type<wbr>.never<wbr>.constraint]</span></a>
</div>

目前，`!` 类型**只能**出现在函数返回类型中，表示该函数是一个永不返回的发散函数。

```rust
fn foo() -> ! {
    panic!("This call never returns.");
}
```

```rust
unsafe extern "C" {
    pub safe fn no_return_extern_func() -> !;
}
```