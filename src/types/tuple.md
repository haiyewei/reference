<div class="rule" id="r-type.tuple"><a class="rule-link" href="#r-type.tuple" title="type.tuple"><span>[type<wbr>.tuple]</span></a>
</div>

# 元组类型

<div class="rule" id="r-type.tuple.syntax"><a class="rule-link" href="#r-type.tuple.syntax" title="type.tuple.syntax"><span>[type<wbr>.tuple<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-TupleType" onclick="show_railroad()">[TupleType](tuple.md#railroad-TupleType)</span> →  
      <span class="grammar-literal">(</span> <span class="grammar-literal">)</span>  
    \| <span class="grammar-literal">(</span> ( <span class="grammar-text">[Type](../types.md#grammar-Type)</span> <span class="grammar-literal">,</span> )<sup>+</sup> <span class="grammar-text">[Type](../types.md#grammar-Type)</span><sup>?</sup> <span class="grammar-literal">)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 418px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TupleType"><svg class="railroad" viewBox="0 0 418 132" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="tuple.md#grammar-TupleType">
<text class="comment" x="46" y="25">
TupleType</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 66 0 h 258 m -126 0 l -5 -5 m 0 10 l 5 -5 m 126 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="42"/>
<text x="73" y="58">
(</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="97" y="42"/>
<text x="111" y="58">
)</text>
</g>
<path d=" M 87 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 324 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 12 a 12 12 0 0 0 12 12 m 300 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="87"/>
<text x="73" y="103">
(</text>
</g>
<g class="repeat">
<path d=" M 97 98 h 12 m 90 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -90 m 48 0 l 5 -5 m 0 10 l -5 -5 m -48 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="109" y="87"/>
<text x="135" y="103">
Type</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="171" y="87"/>
<text x="185" y="103">
,</text>
</g>
<path d=" M 161 98 h 10"/>
</g>
</g>
<g class="optional">
<path d=" M 221 98 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 52 m -23 0 l -5 -5 m 0 10 l 5 -5 m 23 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="245" y="87"/>
<text x="271" y="103">
Type</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="331" y="87"/>
<text x="345" y="103">
)</text>
</g>
<path d=" M 87 98 h 10"/>
<path d=" M 211 98 h 10"/>
<path d=" M 321 98 h 10"/>
</g>
</g>
<path d=" M 393 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 383 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-type.tuple.intro"><a class="rule-link" href="#r-type.tuple.intro" title="type.tuple.intro"><span>[type<wbr>.tuple<wbr>.intro]</span></a>
</div>

_元组类型_ 是一族结构类型[^1]，用于由其他类型组成的异构列表。

元组类型的语法是一个用括号括起、以逗号分隔的类型列表。

<div class="rule" id="r-type.tuple.restriction"><a class="rule-link" href="#r-type.tuple.restriction" title="type.tuple.restriction"><span>[type<wbr>.tuple<wbr>.restriction]</span></a>
</div>

1-ary 元组要求在其元素类型后带有逗号，以便与 [带括号类型](../types.md#parenthesized-types) 区分开。

<div class="rule" id="r-type.tuple.field-number"><a class="rule-link" href="#r-type.tuple.field-number" title="type.tuple.field-number"><span>[type<wbr>.tuple<wbr>.field-number]</span></a>
</div>

元组类型的字段数等于类型列表的长度。该字段数决定元组的 _arity_（元数）。具有 `n` 个字段的元组称为 _n-ary tuple_（n 元元组）。例如，具有 2 个字段的元组是 2-ary 元组。

<div class="rule" id="r-type.tuple.field-name"><a class="rule-link" href="#r-type.tuple.field-name" title="type.tuple.field-name"><span>[type<wbr>.tuple<wbr>.field-name]</span></a>
</div>

元组的字段使用与它们在类型列表中位置相匹配的递增数字名称来命名。第一个字段是 `0`。第二个字段是 `1`。以此类推。每个字段的类型是元组类型列表中相同位置的类型。

<div class="rule" id="r-type.tuple.unit"><a class="rule-link" href="#r-type.tuple.unit" title="type.tuple.unit"><span>[type<wbr>.tuple<wbr>.unit]</span></a>
</div>

出于便利和历史原因，没有字段的元组类型（`()`）通常称为 _unit_ 或 _the unit type_（单元类型）。它的唯一值也称为 _unit_ 或 _the unit value_（单元值）。

元组类型的一些示例：

- `()`（单元）
- `(i32,)`（1-ary 元组）
- `(f64, f64)`
- `(String, i32)`
- `(i32, String)`（与前一个示例是不同的类型）
- `(i32, f64, Vec<String>, Option<bool>)`

<div class="rule" id="r-type.tuple.constructor"><a class="rule-link" href="#r-type.tuple.constructor" title="type.tuple.constructor"><span>[type<wbr>.tuple<wbr>.constructor]</span></a>
</div>

此类型的值使用 [元组表达式](../expressions/tuple-expr.md#tuple-expressions) 构造。此外，当没有其他有意义的求值结果时，各种表达式会产生单元值。

<div class="rule" id="r-type.tuple.access"><a class="rule-link" href="#r-type.tuple.access" title="type.tuple.access"><span>[type<wbr>.tuple<wbr>.access]</span></a>
</div>

元组字段可以通过 [元组索引表达式](../expressions/tuple-expr.md#tuple-indexing-expressions) 或 [模式匹配](../patterns.md#tuple-patterns) 访问。

[^1]: 如果结构类型的内部类型等价，那么它们总是等价的。关于元组的名义版本，请参见 [元组结构体](./struct.md)。