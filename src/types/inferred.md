<div class="rule" id="r-type.inferred"><a class="rule-link" href="#r-type.inferred" title="type.inferred"><span>[type<wbr>.inferred]</span></a>
</div>

# 推断类型

<div class="rule" id="r-type.inferred.syntax"><a class="rule-link" href="#r-type.inferred.syntax" title="type.inferred.syntax"><span>[type<wbr>.inferred<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-InferredType" onclick="show_railroad()">[InferredType](inferred.md#railroad-InferredType)</span> → <span class="grammar-literal">\_</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 114px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-InferredType"><svg class="railroad" viewBox="0 0 114 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="inferred.md#grammar-InferredType">
<text class="comment" x="57" y="25">
InferredType</text>
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

<div class="rule" id="r-type.inferred.intro"><a class="rule-link" href="#r-type.inferred.intro" title="type.inferred.intro"><span>[type<wbr>.inferred<wbr>.intro]</span></a>
</div>

推断类型要求编译器在可能时基于周围可用的信息推断类型。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 推断类型常用于泛型实参：
 > 
 > ```rust
 > let x: Vec<_> = (0..10).collect();
 > ```

</div>

<div class="rule" id="r-type.inferred.constraint"><a class="rule-link" href="#r-type.inferred.constraint" title="type.inferred.constraint"><span>[type<wbr>.inferred<wbr>.constraint]</span></a>
</div>

推断类型不能用于项签名。

<!--
  What else should be said here?
  The only documentation I am aware of is https://rustc-dev-guide.rust-lang.org/type-inference.html
  There should be a broader discussion of type inference somewhere.
-->
