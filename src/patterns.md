<div class="rule" id="r-patterns"><a class="rule-link" href="#r-patterns" title="patterns"><span>[patterns]</span></a>
</div>

# 模式

<div class="rule" id="r-patterns.syntax"><a class="rule-link" href="#r-patterns.syntax" title="patterns.syntax"><span>[patterns<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Pattern" onclick="show_railroad()">[Pattern](patterns.md#railroad-Pattern)</span> → <span class="grammar-literal">\|</span><sup>?</sup> <span class="grammar-text">[PatternNoTopAlt](patterns.md#grammar-PatternNoTopAlt)</span> ( <span class="grammar-literal">\|</span> <span class="grammar-text">[PatternNoTopAlt](patterns.md#grammar-PatternNoTopAlt)</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-PatternNoTopAlt" onclick="show_railroad()">[PatternNoTopAlt](patterns.md#railroad-PatternNoTopAlt)</span> →  
      <span class="grammar-text">[PatternWithoutModernRange](patterns.md#grammar-PatternWithoutModernRange)</span>  
    \| <span class="grammar-text">[ModernRangePattern](patterns.md#grammar-ModernRangePattern)</span>

<span class="grammar-text grammar-production" id="grammar-PatternWithoutModernRange" onclick="show_railroad()">[PatternWithoutModernRange](patterns.md#railroad-PatternWithoutModernRange)</span> →  
      <span class="grammar-text">[LiteralPattern](patterns.md#grammar-LiteralPattern)</span>  
    \| <span class="grammar-text">[IdentifierPattern](patterns.md#grammar-IdentifierPattern)</span>  
    \| <span class="grammar-text">[WildcardPattern](patterns.md#grammar-WildcardPattern)</span>  
    \| <span class="grammar-text">[RestPattern](patterns.md#grammar-RestPattern)</span>  
    \| <span class="grammar-text">[ReferencePattern](patterns.md#grammar-ReferencePattern)</span>  
    \| <span class="grammar-text">[StructPattern](patterns.md#grammar-StructPattern)</span>  
    \| <span class="grammar-text">[TupleStructPattern](patterns.md#grammar-TupleStructPattern)</span>  
    \| <span class="grammar-text">[TuplePattern](patterns.md#grammar-TuplePattern)</span>  
    \| <span class="grammar-text">[GroupedPattern](patterns.md#grammar-GroupedPattern)</span>  
    \| <span class="grammar-text">[SlicePattern](patterns.md#grammar-SlicePattern)</span>  
    \| <span class="grammar-text">[PathPattern](patterns.md#grammar-PathPattern)</span>  
    \| <span class="grammar-text">[MacroInvocation](macros.md#grammar-MacroInvocation)</span>  
    \| <span class="grammar-text">[ObsoleteRangePattern](patterns.md#grammar-ObsoleteRangePattern)</span>​[^obsolete-range-edition]

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 556px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Pattern"><svg class="railroad" viewBox="0 0 556 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-Pattern">
<text class="comment" x="39" y="25">
Pattern</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="55"/>
<text x="73" y="71">
|</text>
</g>
</g>
<a class="link" xlink:href="patterns.md#railroad-PatternNoTopAlt">
<g class="nonterminal">
<rect height="22" width="140" x="121" y="55"/>
<text x="191" y="71">
PatternNoTopAlt</text>
</g>
</a>
<g class="optional">
<path d=" M 271 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 202 m -98 0 l -5 -5 m 0 10 l 5 -5 m 98 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 295 66 h 12 m 178 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -178 m 92 0 l 5 -5 m 0 10 l -5 -5 m -92 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="307" y="55"/>
<text x="321" y="71">
|</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-PatternNoTopAlt">
<g class="nonterminal">
<rect height="22" width="140" x="345" y="55"/>
<text x="415" y="71">
PatternNoTopAlt</text>
</g>
</a>
<path d=" M 335 66 h 10"/>
</g>
</g>
</g>
<path d=" M 111 66 h 10"/>
<path d=" M 261 66 h 10"/>
</g>
<path d=" M 531 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 521 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 346px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-PatternNoTopAlt"><svg class="railroad" viewBox="0 0 346 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-PatternNoTopAlt">
<text class="comment" x="67" y="25">
PatternNoTopAlt</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 228 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-PatternWithoutModernRange">
<g class="nonterminal">
<rect height="22" width="228" x="59" y="42"/>
<text x="173" y="58">
PatternWithoutModernRange</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 252 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 164 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="patterns.md#railroad-ModernRangePattern">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="75"/>
<text x="141" y="91">
ModernRangePattern</text>
</g>
</a>
</g>
<path d=" M 321 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 311 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 306px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-PatternWithoutModernRange"><svg class="railroad" viewBox="0 0 306 470" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-PatternWithoutModernRange">
<text class="comment" x="106" y="25">
PatternWithoutModernRange</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 132 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-LiteralPattern">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="42"/>
<text x="125" y="58">
LiteralPattern</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 212 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 212 0 v -33"/>
<path d=" M 47 107 v 33 m 212 0 v -33"/>
<path d=" M 47 140 v 33 m 212 0 v -33"/>
<path d=" M 47 173 v 33 m 212 0 v -33"/>
<path d=" M 47 206 v 33 m 212 0 v -33"/>
<path d=" M 47 239 v 33 m 212 0 v -33"/>
<path d=" M 47 272 v 33 m 212 0 v -33"/>
<path d=" M 47 305 v 33 m 212 0 v -33"/>
<path d=" M 47 338 v 33 m 212 0 v -33"/>
<path d=" M 47 371 v 33 m 212 0 v -33"/>
<path d=" M 47 404 v 33 m 212 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 156 0 h 32 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-IdentifierPattern">
<g class="nonterminal">
<rect height="22" width="156" x="59" y="75"/>
<text x="137" y="91">
IdentifierPattern</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 140 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-WildcardPattern">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="108"/>
<text x="129" y="124">
WildcardPattern</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 108 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-RestPattern">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="141"/>
<text x="113" y="157">
RestPattern</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 148 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-ReferencePattern">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="174"/>
<text x="133" y="190">
ReferencePattern</text>
</g>
</a>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 124 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-StructPattern">
<g class="nonterminal">
<rect height="22" width="124" x="59" y="207"/>
<text x="121" y="223">
StructPattern</text>
</g>
</a>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 164 0 h 24 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-TupleStructPattern">
<g class="nonterminal">
<rect height="22" width="164" x="59" y="240"/>
<text x="141" y="256">
TupleStructPattern</text>
</g>
</a>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 116 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-TuplePattern">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="273"/>
<text x="117" y="289">
TuplePattern</text>
</g>
</a>
</g>
<path d=" M 47 305 v 0 a 12 12 0 0 0 12 12 m 132 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-GroupedPattern">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="306"/>
<text x="125" y="322">
GroupedPattern</text>
</g>
</a>
</g>
<path d=" M 47 338 v 0 a 12 12 0 0 0 12 12 m 116 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-SlicePattern">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="339"/>
<text x="117" y="355">
SlicePattern</text>
</g>
</a>
</g>
<path d=" M 47 371 v 0 a 12 12 0 0 0 12 12 m 108 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-PathPattern">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="372"/>
<text x="113" y="388">
PathPattern</text>
</g>
</a>
</g>
<path d=" M 47 404 v 0 a 12 12 0 0 0 12 12 m 140 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="macros.md#railroad-MacroInvocation">
<g class="nonterminal">
<rect height="22" width="140" x="59" y="405"/>
<text x="129" y="421">
MacroInvocation</text>
</g>
</a>
</g>
<path d=" M 47 437 v 0 a 12 12 0 0 0 12 12 m 188 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="patterns.md#railroad-ObsoleteRangePattern">
<g class="nonterminal">
<rect height="22" width="188" x="59" y="438"/>
<text x="153" y="454">
ObsoleteRangePattern</text>
</g>
</a>
</g>
<path d=" M 281 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 271 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

[^obsolete-range-edition]: [ObsoleteRangePattern](patterns.md#grammar-ObsoleteRangePattern) 语法在 2021 edition 及以后版本中在语义上无效。

<div class="rule" id="r-patterns.intro"><a class="rule-link" href="#r-patterns.intro" title="patterns.intro"><span>[patterns<wbr>.intro]</span></a>
</div>

模式用于将值与结构相匹配，并可选地把变量绑定到这些结构内部的值。它们也用于变量声明以及函数和闭包的参数。

以下示例中的模式做了四件事：

- 测试 `person` 的 `car` 字段是否填有某个值。
- 测试这个人的 `age` 字段是否在 13 到 19 之间，并将其值绑定到 `person_age` 变量。
- 将指向 `name` 字段的引用绑定到变量 `person_name`。
- 忽略 `person` 的其余字段。剩余字段可以具有任意值，且不会绑定到任何变量。

```rust
# struct Car;
# struct Computer;
# struct Person {
#     name: String,
#     car: Option<Car>,
#     computer: Option<Computer>,
#     age: u8,
# }
# let person = Person {
#     name: String::from("John"),
#     car: Some(Car),
#     computer: None,
#     age: 15,
# };
if let
    Person {
        car: Some(_),
        age: person_age @ 13..=19,
        name: ref person_name,
        ..
    } = person
{
    println!("{} has a car and is {} years old.", person_name, person_age);
}
```

<div class="rule" id="r-patterns.use"><a class="rule-link" href="#r-patterns.use" title="patterns.use"><span>[patterns<wbr>.use]</span></a>
</div>

模式用于：

<div class="rule" id="r-patterns.let"><a class="rule-link" href="#r-patterns.let" title="patterns.let"><span>[patterns<wbr>.let]</span></a>
</div>

- [`let` 声明](statements.md#let-statements)

<div class="rule" id="r-patterns.param"><a class="rule-link" href="#r-patterns.param" title="patterns.param"><span>[patterns<wbr>.param]</span></a>
</div>

- [函数](items/functions.md)和[闭包](expressions/closure-expr.md)参数

<div class="rule" id="r-patterns.match"><a class="rule-link" href="#r-patterns.match" title="patterns.match"><span>[patterns<wbr>.match]</span></a>
</div>

- [`match` 表达式](expressions/match-expr.md)

<div class="rule" id="r-patterns.if-let"><a class="rule-link" href="#r-patterns.if-let" title="patterns.if-let"><span>[patterns<wbr>.if-let]</span></a>
</div>

- [`if let` 表达式](expressions/if-expr.md)

<div class="rule" id="r-patterns.while-let"><a class="rule-link" href="#r-patterns.while-let" title="patterns.while-let"><span>[patterns<wbr>.while-let]</span></a>
</div>

- [`while let` 表达式](expressions/loop-expr.md#while-let-patterns)

<div class="rule" id="r-patterns.for"><a class="rule-link" href="#r-patterns.for" title="patterns.for"><span>[patterns<wbr>.for]</span></a>
</div>

- [`for` 表达式](expressions/loop-expr.md#iterator-loops)

<div class="rule" id="r-patterns.destructure"><a class="rule-link" href="#r-patterns.destructure" title="patterns.destructure"><span>[patterns<wbr>.destructure]</span></a>
</div>

## 解构

<div class="rule" id="r-patterns.destructure.intro"><a class="rule-link" href="#r-patterns.destructure.intro" title="patterns.destructure.intro"><span>[patterns<wbr>.destructure<wbr>.intro]</span></a>
</div>

模式可以用来_解构\_ [struct](items/structs.md)、[enum](items/enumerations.md) 和[元组](types/tuple.md)。解构会把一个值拆分为它的组成部分。所用语法几乎与创建这些值时相同。

<div class="rule" id="r-patterns.destructure.wildcard"><a class="rule-link" href="#r-patterns.destructure.wildcard" title="patterns.destructure.wildcard"><span>[patterns<wbr>.destructure<wbr>.wildcard]</span></a>
</div>

在[被匹配值](glossary.md#scrutinee)表达式具有 `struct`、`enum` 或 `tuple` 类型的模式中，[通配符模式](#wildcard-pattern)（`_`）代表_单个_数据字段，而 [et cetera](#grammar-StructPatternEtCetera) 或[剩余模式](patterns.md#r-patterns.rest)（`..`）代表某个特定变体的_所有_剩余字段。

<div class="rule" id="r-patterns.destructure.named-field-shorthand"><a class="rule-link" href="#r-patterns.destructure.named-field-shorthand" title="patterns.destructure.named-field-shorthand"><span>[patterns<wbr>.destructure<wbr>.named-field-shorthand]</span></a>
</div>

解构带有命名字段（但不是编号字段）的数据结构时，允许将 `fieldname` 写作 `fieldname: fieldname` 的简写。

```rust
# enum Message {
#     Quit,
#     WriteString(String),
#     Move { x: i32, y: i32 },
#     ChangeColor(u8, u8, u8),
# }
# let message = Message::Quit;
match message {
    Message::Quit => println!("Quit"),
    Message::WriteString(write) => println!("{}", &write),
    Message::Move{ x, y: 0 } => println!("move {} horizontally", x),
    Message::Move{ .. } => println!("other move"),
    Message::ChangeColor { 0: red, 1: green, 2: _ } => {
        println!("color change, red: {}, green: {}", red, green);
    }
};
```

<div class="rule" id="r-patterns.refutable"><a class="rule-link" href="#r-patterns.refutable" title="patterns.refutable"><span>[patterns<wbr>.refutable]</span></a>
</div>

## 可反驳性

当一个模式有可能不匹配它所匹配的值时，称该模式是_可反驳的\_。另一方面，\_不可反驳的_模式始终匹配它所匹配的值。示例：

```rust
let (x, y) = (1, 2);               // "(x, y)" is an irrefutable pattern

if let (a, 3) = (1, 2) {           // "(a, 3)" is refutable, and will not match
    panic!("Shouldn't reach here");
} else if let (a, 4) = (3, 4) {    // "(a, 4)" is refutable, and will match
    println!("Matched ({}, 4)", a);
}
```

<div class="rule" id="r-patterns.literal"><a class="rule-link" href="#r-patterns.literal" title="patterns.literal"><span>[patterns<wbr>.literal]</span></a>
</div>

## 字面量模式

<div class="rule" id="r-patterns.literal.syntax"><a class="rule-link" href="#r-patterns.literal.syntax" title="patterns.literal.syntax"><span>[patterns<wbr>.literal<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-LiteralPattern" onclick="show_railroad()">[LiteralPattern](patterns.md#railroad-LiteralPattern)</span> → <span class="grammar-literal">\-</span><sup>?</sup> <span class="grammar-text">[LiteralExpression](expressions/literal-expr.md#grammar-LiteralExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 312px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-LiteralPattern"><svg class="railroad" viewBox="0 0 312 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-LiteralPattern">
<text class="comment" x="64" y="25">
LiteralPattern</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="55"/>
<text x="73" y="71">
-</text>
</g>
</g>
<a class="link" xlink:href="expressions/literal-expr.md#railroad-LiteralExpression">
<g class="nonterminal">
<rect height="22" width="156" x="121" y="55"/>
<text x="199" y="71">
LiteralExpression</text>
</g>
</a>
<path d=" M 111 66 h 10"/>
</g>
<path d=" M 287 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 277 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-patterns.literal.intro"><a class="rule-link" href="#r-patterns.literal.intro" title="patterns.literal.intro"><span>[patterns<wbr>.literal<wbr>.intro]</span></a>
</div>

\_字面量模式_精确匹配由该字面量创建的同一个值。由于负数不是[字面量](expressions/literal-expr.md)，模式中的字面量可以带有一个可选的前置减号，其作用类似于取负运算符。

<div class="alert alert-warning">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
 > 
 > 字面量模式接受 C 字符串和原始 C 字符串字面量，但 `&CStr` 没有实现结构相等性（`#[derive(Eq, PartialEq)]`），因此任何这类针对 `&CStr` 的 `match` 都会因类型错误而被拒绝。

</div>

<div class="rule" id="r-patterns.literal.refutable"><a class="rule-link" href="#r-patterns.literal.refutable" title="patterns.literal.refutable"><span>[patterns<wbr>.literal<wbr>.refutable]</span></a>
</div>

字面量模式始终是可反驳的。

示例：

```rust
for i in -2..5 {
    match i {
        -1 => println!("It's minus one"),
        1 => println!("It's a one"),
        2|4 => println!("It's either a two or a four"),
        _ => println!("Matched none of the arms"),
    }
}
```

<div class="rule" id="r-patterns.ident"><a class="rule-link" href="#r-patterns.ident" title="patterns.ident"><span>[patterns<wbr>.ident]</span></a>
</div>

## 标识符模式

<div class="rule" id="r-patterns.ident.syntax"><a class="rule-link" href="#r-patterns.ident.syntax" title="patterns.ident.syntax"><span>[patterns<wbr>.ident<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-IdentifierPattern" onclick="show_railroad()">[IdentifierPattern](patterns.md#railroad-IdentifierPattern)</span> → <span class="grammar-literal">ref</span><sup>?</sup> <span class="grammar-literal">mut</span><sup>?</sup> <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> ( <span class="grammar-literal">@</span> <span class="grammar-text">[PatternNoTopAlt](patterns.md#grammar-PatternNoTopAlt)</span> )<sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 610px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-IdentifierPattern"><svg class="railroad" viewBox="0 0 610 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-IdentifierPattern">
<text class="comment" x="74" y="25">
IdentifierPattern</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="55"/>
<text x="81" y="71">
ref</text>
</g>
</g>
<g class="optional">
<path d=" M 137 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="161" y="55"/>
<text x="183" y="71">
mut</text>
</g>
</g>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="239" y="55"/>
<text x="289" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 349 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 178 m -86 0 l -5 -5 m 0 10 l 5 -5 m 86 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="373" y="55"/>
<text x="387" y="71">
@</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-PatternNoTopAlt">
<g class="nonterminal">
<rect height="22" width="140" x="411" y="55"/>
<text x="481" y="71">
PatternNoTopAlt</text>
</g>
</a>
<path d=" M 401 66 h 10"/>
</g>
</g>
<path d=" M 127 66 h 10"/>
<path d=" M 229 66 h 10"/>
<path d=" M 339 66 h 10"/>
</g>
<path d=" M 585 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 575 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-patterns.ident.intro"><a class="rule-link" href="#r-patterns.ident.intro" title="patterns.ident.intro"><span>[patterns<wbr>.ident<wbr>.intro]</span></a>
</div>

标识符模式会把它们匹配的值绑定到[值命名空间](names/namespaces.md#r-names.namespaces.kinds)中的一个变量。

<div class="rule" id="r-patterns.ident.unique"><a class="rule-link" href="#r-patterns.ident.unique" title="patterns.ident.unique"><span>[patterns<wbr>.ident<wbr>.unique]</span></a>
</div>

该标识符在模式中必须是唯一的。

<div class="rule" id="r-patterns.ident.scope"><a class="rule-link" href="#r-patterns.ident.scope" title="patterns.ident.scope"><span>[patterns<wbr>.ident<wbr>.scope]</span></a>
</div>

该变量会遮蔽作用域内任何同名变量。新绑定的[作用域](names/scopes.md)取决于模式使用位置的上下文（例如 `let` 绑定或 `match` 分支）。

<div class="rule" id="r-patterns.ident.bare"><a class="rule-link" href="#r-patterns.ident.bare" title="patterns.ident.bare"><span>[patterns<wbr>.ident<wbr>.bare]</span></a>
</div>

仅由一个标识符组成、可能带有 `mut` 的模式会匹配任何值，并将其绑定到该标识符。这是变量声明以及函数和闭包参数中最常用的模式。

```rust
let mut variable = 10;
fn sum(x: i32, y: i32) -> i32 {
#    x + y
# }
```

<div class="rule" id="r-patterns.ident.scrutinized"><a class="rule-link" href="#r-patterns.ident.scrutinized" title="patterns.ident.scrutinized"><span>[patterns<wbr>.ident<wbr>.scrutinized]</span></a>
</div>

若要把模式匹配到的值绑定到变量，请使用语法 `variable @ subpattern`。例如，以下代码会把值 2 绑定到 `e`（不是整个范围：这里的范围是一个范围子模式）。

```rust
let x = 2;

match x {
    e @ 1 ..= 5 => println!("got a range element {}", e),
    _ => println!("anything"),
}
```

<div class="rule" id="r-patterns.ident.move"><a class="rule-link" href="#r-patterns.ident.move" title="patterns.ident.move"><span>[patterns<wbr>.ident<wbr>.move]</span></a>
</div>

默认情况下，标识符模式会根据被匹配值是否实现 [`Copy`](special-types-and-traits.md#copy)，把变量绑定到被匹配值的副本，或者从被匹配值移动而来。

<div class="rule" id="r-patterns.ident.ref"><a class="rule-link" href="#r-patterns.ident.ref" title="patterns.ident.ref"><span>[patterns<wbr>.ident<wbr>.ref]</span></a>
</div>

可以使用 `ref` 关键字将其改为绑定到引用，或使用 `ref mut` 绑定到可变引用。例如：

```rust
# let a = Some(10);
match a {
    None => (),
    Some(value) => (),
}

match a {
    None => (),
    Some(ref value) => (),
}
```

在第一个 match 表达式中，该值会被复制（或移动）。在第二个 match 中，指向同一内存位置的引用会被绑定到变量 value。需要这种语法，是因为在解构子模式中，`&` 运算符不能应用到值的字段。例如，以下代码无效：

```rust,compile_fail
# struct Person {
#    name: String,
#    age: u8,
# }
# let value = Person { name: String::from("John"), age: 23 };
if let Person { name: &person_name, age: 18..=150 } = value { }
```

若要使其有效，请写成以下形式：

```rust
# struct Person {
#    name: String,
#    age: u8,
# }
# let value = Person { name: String::from("John"), age: 23 };
if let Person { name: ref person_name, age: 18..=150 } = value { }
```

<div class="rule" id="r-patterns.ident.ref-ignored"><a class="rule-link" href="#r-patterns.ident.ref-ignored" title="patterns.ident.ref-ignored"><span>[patterns<wbr>.ident<wbr>.ref-ignored]</span></a>
</div>

因此，`ref` 并不是被匹配的内容。它的目的仅仅是让匹配到的绑定成为引用，而不是可能复制或移动被匹配的内容。

<div class="rule" id="r-patterns.ident.precedent"><a class="rule-link" href="#r-patterns.ident.precedent" title="patterns.ident.precedent"><span>[patterns<wbr>.ident<wbr>.precedent]</span></a>
</div>

[路径模式](#path-patterns)优先于标识符模式。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 当一个模式是单段标识符时，语法上无法确定它表示 [IdentifierPattern](patterns.md#grammar-IdentifierPattern) 还是 [PathPattern](patterns.md#grammar-PathPattern)。这种歧义只能在[名称解析](names/name-resolution.md)之后解决。
 > 
 > ```rust
 > const EXPECTED_VALUE: u8 = 42;
 > //    ^^^^^^^^^^^^^^ That this constant is in scope affects how the
 > //                   patterns below are treated.
 > 
 > fn check_value(x: u8) -> Result<u8, u8> {
 >     match x {
 >         EXPECTED_VALUE => Ok(x),
 >     //  ^^^^^^^^^^^^^^ Parsed as a `PathPattern` that resolves to
 >     //                 the constant `42`.
 >         other_value => Err(x),
 >     //  ^^^^^^^^^^^ Parsed as an `IdentifierPattern`.
 >     }
 > }
 > 
 > // If `EXPECTED_VALUE` were treated as an `IdentifierPattern` above,
 > // that pattern would always match, making the function always return
 > // `Ok(_) regardless of the input.
 > assert_eq!(check_value(42), Ok(42));
 > assert_eq!(check_value(43), Err(43));
 > ```

</div>

<div class="rule" id="r-patterns.ident.constraint"><a class="rule-link" href="#r-patterns.ident.constraint" title="patterns.ident.constraint"><span>[patterns<wbr>.ident<wbr>.constraint]</span></a>
</div>

如果指定了 `ref` 或 `ref mut`，且该标识符遮蔽了一个常量，则这是错误。

<div class="rule" id="r-patterns.ident.refutable"><a class="rule-link" href="#r-patterns.ident.refutable" title="patterns.ident.refutable"><span>[patterns<wbr>.ident<wbr>.refutable]</span></a>
</div>

如果 `@` 子模式不可反驳，或者未指定该子模式，则标识符模式是不可反驳的。

<div class="rule" id="r-patterns.ident.binding"><a class="rule-link" href="#r-patterns.ident.binding" title="patterns.ident.binding"><span>[patterns<wbr>.ident<wbr>.binding]</span></a>
</div>

### 绑定模式

<div class="rule" id="r-patterns.ident.binding.intro"><a class="rule-link" href="#r-patterns.ident.binding.intro" title="patterns.ident.binding.intro"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.intro]</span></a>
</div>

为了改善易用性，模式会以不同的_绑定模式_运行，以便更容易将引用绑定到值。当一个引用值由非引用模式匹配时，它会被自动视为 `ref` 或 `ref mut` 绑定。示例：

```rust
let x: &Option<i32> = &Some(3);
if let Some(y) = x {
    // y was converted to `ref y` and its type is &i32
}
```

<div class="rule" id="r-patterns.ident.binding.non-reference"><a class="rule-link" href="#r-patterns.ident.binding.non-reference" title="patterns.ident.binding.non-reference"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.non-reference]</span></a>
</div>

\_非引用模式_包括除绑定、[通配符模式](#wildcard-pattern)（`_`）、引用类型的 [`const` 模式](#path-patterns)以及[引用模式](#reference-patterns)之外的所有模式。

<div class="rule" id="r-patterns.ident.binding.default-mode"><a class="rule-link" href="#r-patterns.ident.binding.default-mode" title="patterns.ident.binding.default-mode"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.default-mode]</span></a>
</div>

如果一个绑定型模式没有显式带有 `ref`、`ref mut` 或 `mut`，则它会使用_默认绑定模式_来确定变量如何绑定。

<div class="rule" id="r-patterns.ident.binding.move"><a class="rule-link" href="#r-patterns.ident.binding.move" title="patterns.ident.binding.move"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.move]</span></a>
</div>

默认绑定模式从 "move" 模式开始，该模式使用移动语义。

<div class="rule" id="r-patterns.ident.binding.top-down"><a class="rule-link" href="#r-patterns.ident.binding.top-down" title="patterns.ident.binding.top-down"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.top-down]</span></a>
</div>

匹配模式时，编译器会从模式外层开始并向内处理。

<div class="rule" id="r-patterns.ident.binding.auto-deref"><a class="rule-link" href="#r-patterns.ident.binding.auto-deref" title="patterns.ident.binding.auto-deref"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.auto-deref]</span></a>
</div>

每当使用非引用模式匹配一个引用时，它都会自动解引用该值并更新默认绑定模式。

<div class="rule" id="r-patterns.ident.binding.ref"><a class="rule-link" href="#r-patterns.ident.binding.ref" title="patterns.ident.binding.ref"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.ref]</span></a>
</div>

引用会将默认绑定模式设为 `ref`。

<div class="rule" id="r-patterns.ident.binding.ref-mut"><a class="rule-link" href="#r-patterns.ident.binding.ref-mut" title="patterns.ident.binding.ref-mut"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.ref-mut]</span></a>
</div>

可变引用会将模式设为 `ref mut`，除非该模式已经是 `ref`，在这种情况下它会保持为 `ref`。

<div class="rule" id="r-patterns.ident.binding.nested-references"><a class="rule-link" href="#r-patterns.ident.binding.nested-references" title="patterns.ident.binding.nested-references"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.nested-references]</span></a>
</div>

如果自动解引用后的值仍然是引用，则会继续解引用，并重复此过程。

<div class="rule" id="r-patterns.ident.binding.mode-limitations-binding"><a class="rule-link" href="#r-patterns.ident.binding.mode-limitations-binding" title="patterns.ident.binding.mode-limitations-binding"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.mode-limitations-binding]</span></a>
</div>

只有当默认绑定模式为 "move" 时，绑定型模式才可以显式指定 `ref` 或 `ref mut` 绑定模式，或用 `mut` 指定可变性。例如，以下形式不被接受：

```rust,edition2024,compile_fail
let [mut x] = &[()]; //~ ERROR
let [ref x] = &[()]; //~ ERROR
let [ref mut x] = &mut [()]; //~ ERROR
```

<div class="rule" id="r-patterns.ident.binding.mode-limitations.edition2024"><a class="rule-link" href="#r-patterns.ident.binding.mode-limitations.edition2024" title="patterns.ident.binding.mode-limitations.edition2024"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.mode-limitations<wbr>.edition2024]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2024</span> Edition differences</p>
 > 
 > 在 2024 edition 之前，即使默认绑定模式不是 "move"，绑定也可以显式指定 `ref` 或 `ref mut` 绑定模式，并且可以在这类绑定上用 `mut` 指定可变性。在这些 edition 中，无论当前默认绑定模式如何，在绑定上指定 `mut` 都会把绑定模式设为 "move"。

</div>

<div class="rule" id="r-patterns.ident.binding.mode-limitations-reference"><a class="rule-link" href="#r-patterns.ident.binding.mode-limitations-reference" title="patterns.ident.binding.mode-limitations-reference"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.mode-limitations-reference]</span></a>
</div>

类似地，引用模式只可以在默认绑定模式为 "move" 时出现。例如，以下形式不被接受：

```rust,edition2024,compile_fail
let [&x] = &[&()]; //~ ERROR
```

<div class="rule" id="r-patterns.ident.binding.mode-limitations-reference.edition2024"><a class="rule-link" href="#r-patterns.ident.binding.mode-limitations-reference.edition2024" title="patterns.ident.binding.mode-limitations-reference.edition2024"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.mode-limitations-reference<wbr>.edition2024]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2024</span> Edition differences</p>
 > 
 > 在 2024 edition 之前，即使默认绑定模式不是 "move"，引用模式也可以出现，并且同时具有匹配被匹配值以及导致默认绑定模式重置为 "move" 的效果。

</div>

<div class="rule" id="r-patterns.ident.binding.mixed"><a class="rule-link" href="#r-patterns.ident.binding.mixed" title="patterns.ident.binding.mixed"><span>[patterns<wbr>.ident<wbr>.binding<wbr>.mixed]</span></a>
</div>

移动绑定和引用绑定可以混合出现在同一个模式中。这样做会导致被绑定对象发生部分移动，该对象之后不能再使用。只有当该类型不能被复制时，这一点才适用。

在下面的示例中，`name` 被从 `person` 中移出。尝试把 `person` 作为整体使用或使用 `person.name` 会因为_部分移动_而导致错误。

示例：

```rust
# struct Person {
#    name: String,
#    age: u8,
# }
# let person = Person{ name: String::from("John"), age: 23 };
// `name` is moved from person and `age` referenced
let Person { name, ref age } = person;
```

<div class="rule" id="r-patterns.wildcard"><a class="rule-link" href="#r-patterns.wildcard" title="patterns.wildcard"><span>[patterns<wbr>.wildcard]</span></a>
</div>

## 通配符模式

<div class="rule" id="r-patterns.wildcard.syntax"><a class="rule-link" href="#r-patterns.wildcard.syntax" title="patterns.wildcard.syntax"><span>[patterns<wbr>.wildcard<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-WildcardPattern" onclick="show_railroad()">[WildcardPattern](patterns.md#railroad-WildcardPattern)</span> → <span class="grammar-literal">\_</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 135px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-WildcardPattern"><svg class="railroad" viewBox="0 0 135 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-WildcardPattern">
<text class="comment" x="67" y="25">
WildcardPattern</text>
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

<div class="rule" id="r-patterns.wildcard.intro"><a class="rule-link" href="#r-patterns.wildcard.intro" title="patterns.wildcard.intro"><span>[patterns<wbr>.wildcard<wbr>.intro]</span></a>
</div>

_通配符模式_（下划线符号）匹配任何值。它用于忽略无关紧要的值。

<div class="rule" id="r-patterns.wildcard.struct-matcher"><a class="rule-link" href="#r-patterns.wildcard.struct-matcher" title="patterns.wildcard.struct-matcher"><span>[patterns<wbr>.wildcard<wbr>.struct-matcher]</span></a>
</div>

在其他模式内部，它匹配单个数据字段（相对于匹配剩余字段的 `..`）。

<div class="rule" id="r-patterns.wildcard.no-binding"><a class="rule-link" href="#r-patterns.wildcard.no-binding" title="patterns.wildcard.no-binding"><span>[patterns<wbr>.wildcard<wbr>.no-binding]</span></a>
</div>

不同于标识符模式，它不会复制、移动或借用它所匹配的值。

示例：

```rust
# let x = 20;
let (a, _) = (10, x);   // the x is always matched by _
# assert_eq!(a, 10);

// ignore a function/closure param
let real_part = |a: f64, _: f64| { a };

// ignore a field from a struct
# struct RGBA {
#    r: f32,
#    g: f32,
#    b: f32,
#    a: f32,
# }
# let color = RGBA{r: 0.4, g: 0.1, b: 0.9, a: 0.5};
let RGBA{r: red, g: green, b: blue, a: _} = color;
# assert_eq!(color.r, red);
# assert_eq!(color.g, green);
# assert_eq!(color.b, blue);

// accept any Some, with any value
# let x = Some(10);
if let Some(_) = x {}
```

<div class="rule" id="r-patterns.wildcard.refutable"><a class="rule-link" href="#r-patterns.wildcard.refutable" title="patterns.wildcard.refutable"><span>[patterns<wbr>.wildcard<wbr>.refutable]</span></a>
</div>

通配符模式始终是不可反驳的。

<div class="rule" id="r-patterns.rest"><a class="rule-link" href="#r-patterns.rest" title="patterns.rest"><span>[patterns<wbr>.rest]</span></a>
</div>

## 剩余模式

<div class="rule" id="r-patterns.rest.syntax"><a class="rule-link" href="#r-patterns.rest.syntax" title="patterns.rest.syntax"><span>[patterns<wbr>.rest<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-RestPattern" onclick="show_railroad()">[RestPattern](patterns.md#railroad-RestPattern)</span> → <span class="grammar-literal">..</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 107px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RestPattern"><svg class="railroad" viewBox="0 0 107 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-RestPattern">
<text class="comment" x="53" y="25">
RestPattern</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="42"/>
<text x="53" y="58">
..</text>
</g>
<path d=" M 81 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 71 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-patterns.rest.intro"><a class="rule-link" href="#r-patterns.rest.intro" title="patterns.rest.intro"><span>[patterns<wbr>.rest<wbr>.intro]</span></a>
</div>

_剩余模式_（`..` token）作为可变长度模式，匹配其前后尚未被匹配的零个或多个元素。

<div class="rule" id="r-patterns.rest.allowed-patterns"><a class="rule-link" href="#r-patterns.rest.allowed-patterns" title="patterns.rest.allowed-patterns"><span>[patterns<wbr>.rest<wbr>.allowed-patterns]</span></a>
</div>

它只可以用于[元组](#tuple-patterns)、[元组结构体](#tuple-struct-patterns)和[切片](#slice-patterns)模式，并且在这些模式中只能作为其中一个元素出现一次。它也允许出现在[标识符模式](#identifier-patterns)中，但仅限于[切片模式](#slice-patterns)。

<div class="rule" id="r-patterns.rest.refutable"><a class="rule-link" href="#r-patterns.rest.refutable" title="patterns.rest.refutable"><span>[patterns<wbr>.rest<wbr>.refutable]</span></a>
</div>

剩余模式始终是不可反驳的。

示例：

```rust
# let words = vec!["a", "b", "c"];
# let slice = &words[..];
match slice {
    [] => println!("slice is empty"),
    [one] => println!("single element {}", one),
    [head, tail @ ..] => println!("head={} tail={:?}", head, tail),
}

match slice {
    // Ignore everything but the last element, which must be "!".
    [.., "!"] => println!("!!!"),

    // `start` is a slice of everything except the last element, which must be "z".
    [start @ .., "z"] => println!("starts with: {:?}", start),

    // `end` is a slice of everything but the first element, which must be "a".
    ["a", end @ ..] => println!("ends with: {:?}", end),

    // 'whole' is the entire slice and `last` is the final element
    whole @ [.., last] => println!("the last element of {:?} is {}", whole, last),

    rest => println!("{:?}", rest),
}

if let [.., penultimate, _] = slice {
    println!("next to last is {}", penultimate);
}

# let tuple = (1, 2, 3, 4, 5);
// The rest pattern may also be used in tuple and tuple
// struct patterns.
match tuple {
    (1, .., y, z) => println!("y={} z={}", y, z),
    (.., 5) => println!("tail must be 5"),
    (..) => println!("matches everything else"),
}
```

<div class="rule" id="r-patterns.range"><a class="rule-link" href="#r-patterns.range" title="patterns.range"><span>[patterns<wbr>.range]</span></a>
</div>

## 范围模式

<div class="rule" id="r-patterns.range.syntax"><a class="rule-link" href="#r-patterns.range.syntax" title="patterns.range.syntax"><span>[patterns<wbr>.range<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ModernRangePattern" onclick="show_railroad()">[ModernRangePattern](patterns.md#railroad-ModernRangePattern)</span> →  
      <span class="grammar-text">[RangeExclusivePattern](patterns.md#grammar-RangeExclusivePattern)</span>  
    \| <span class="grammar-text">[RangeInclusivePattern](patterns.md#grammar-RangeInclusivePattern)</span>  
    \| <span class="grammar-text">[RangeFromPattern](patterns.md#grammar-RangeFromPattern)</span>  
    \| <span class="grammar-text">[RangeToExclusivePattern](patterns.md#grammar-RangeToExclusivePattern)</span>  
    \| <span class="grammar-text">[RangeToInclusivePattern](patterns.md#grammar-RangeToInclusivePattern)</span>

<span class="grammar-text grammar-production" id="grammar-RangeExclusivePattern" onclick="show_railroad()">[RangeExclusivePattern](patterns.md#railroad-RangeExclusivePattern)</span> →  
      <span class="grammar-text">[RangePatternBound](patterns.md#grammar-RangePatternBound)</span> <span class="grammar-literal">..</span> <span class="grammar-text">[RangePatternBound](patterns.md#grammar-RangePatternBound)</span>

<span class="grammar-text grammar-production" id="grammar-RangeInclusivePattern" onclick="show_railroad()">[RangeInclusivePattern](patterns.md#railroad-RangeInclusivePattern)</span> →  
      <span class="grammar-text">[RangePatternBound](patterns.md#grammar-RangePatternBound)</span> <span class="grammar-literal">..=</span> <span class="grammar-text">[RangePatternBound](patterns.md#grammar-RangePatternBound)</span>

<span class="grammar-text grammar-production" id="grammar-RangeFromPattern" onclick="show_railroad()">[RangeFromPattern](patterns.md#railroad-RangeFromPattern)</span> →  
      <span class="grammar-text">[RangePatternBound](patterns.md#grammar-RangePatternBound)</span> <span class="grammar-literal">..</span>

<span class="grammar-text grammar-production" id="grammar-RangeToExclusivePattern" onclick="show_railroad()">[RangeToExclusivePattern](patterns.md#railroad-RangeToExclusivePattern)</span> →  
      <span class="grammar-literal">..</span> <span class="grammar-text">[RangePatternBound](patterns.md#grammar-RangePatternBound)</span>

<span class="grammar-text grammar-production" id="grammar-RangeToInclusivePattern" onclick="show_railroad()">[RangeToInclusivePattern](patterns.md#railroad-RangeToInclusivePattern)</span> →  
      <span class="grammar-literal">..=</span> <span class="grammar-text">[RangePatternBound](patterns.md#grammar-RangePatternBound)</span>

<span class="grammar-text grammar-production" id="grammar-ObsoleteRangePattern" onclick="show_railroad()">[ObsoleteRangePattern](patterns.md#railroad-ObsoleteRangePattern)</span> →  
    <span class="grammar-text">[RangePatternBound](patterns.md#grammar-RangePatternBound)</span> <span class="grammar-literal">...</span> <span class="grammar-text">[RangePatternBound](patterns.md#grammar-RangePatternBound)</span>

<span class="grammar-text grammar-production" id="grammar-RangePatternBound" onclick="show_railroad()">[RangePatternBound](patterns.md#railroad-RangePatternBound)</span> →  
      <span class="grammar-text">[LiteralPattern](patterns.md#grammar-LiteralPattern)</span>  
    \| <span class="grammar-text">[PathExpression](expressions/path-expr.md#grammar-PathExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 330px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ModernRangePattern"><svg class="railroad" viewBox="0 0 330 206" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-ModernRangePattern">
<text class="comment" x="78" y="25">
ModernRangePattern</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 196 0 h 40"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-RangeExclusivePattern">
<g class="nonterminal">
<rect height="22" width="196" x="59" y="42"/>
<text x="157" y="58">
RangeExclusivePattern</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 236 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 236 0 v -33"/>
<path d=" M 47 107 v 33 m 236 0 v -33"/>
<path d=" M 47 140 v 33 m 236 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 196 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-RangeInclusivePattern">
<g class="nonterminal">
<rect height="22" width="196" x="59" y="75"/>
<text x="157" y="91">
RangeInclusivePattern</text>
</g>
</a>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 148 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-RangeFromPattern">
<g class="nonterminal">
<rect height="22" width="148" x="59" y="108"/>
<text x="133" y="124">
RangeFromPattern</text>
</g>
</a>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 212 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-RangeToExclusivePattern">
<g class="nonterminal">
<rect height="22" width="212" x="59" y="141"/>
<text x="165" y="157">
RangeToExclusivePattern</text>
</g>
</a>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 212 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="patterns.md#railroad-RangeToInclusivePattern">
<g class="nonterminal">
<rect height="22" width="212" x="59" y="174"/>
<text x="165" y="190">
RangeToInclusivePattern</text>
</g>
</a>
</g>
<path d=" M 305 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 295 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 438px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeExclusivePattern"><svg class="railroad" viewBox="0 0 438 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-RangeExclusivePattern">
<text class="comment" x="92" y="25">
RangeExclusivePattern</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-RangePatternBound">
<g class="nonterminal">
<rect height="22" width="156" x="35" y="42"/>
<text x="113" y="58">
RangePatternBound</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="201" y="42"/>
<text x="219" y="58">
..</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-RangePatternBound">
<g class="nonterminal">
<rect height="22" width="156" x="247" y="42"/>
<text x="325" y="58">
RangePatternBound</text>
</g>
</a>
<path d=" M 191 53 h 10"/>
<path d=" M 237 53 h 10"/>
</g>
<path d=" M 413 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 403 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 446px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeInclusivePattern"><svg class="railroad" viewBox="0 0 446 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-RangeInclusivePattern">
<text class="comment" x="92" y="25">
RangeInclusivePattern</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-RangePatternBound">
<g class="nonterminal">
<rect height="22" width="156" x="35" y="42"/>
<text x="113" y="58">
RangePatternBound</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="201" y="42"/>
<text x="223" y="58">
..=</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-RangePatternBound">
<g class="nonterminal">
<rect height="22" width="156" x="255" y="42"/>
<text x="333" y="58">
RangePatternBound</text>
</g>
</a>
<path d=" M 191 53 h 10"/>
<path d=" M 245 53 h 10"/>
</g>
<path d=" M 421 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 411 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 272px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeFromPattern"><svg class="railroad" viewBox="0 0 272 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-RangeFromPattern">
<text class="comment" x="71" y="25">
RangeFromPattern</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-RangePatternBound">
<g class="nonterminal">
<rect height="22" width="156" x="35" y="42"/>
<text x="113" y="58">
RangePatternBound</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="201" y="42"/>
<text x="219" y="58">
..</text>
</g>
<path d=" M 191 53 h 10"/>
</g>
<path d=" M 247 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 237 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 272px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeToExclusivePattern"><svg class="railroad" viewBox="0 0 272 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-RangeToExclusivePattern">
<text class="comment" x="99" y="25">
RangeToExclusivePattern</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="42"/>
<text x="53" y="58">
..</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-RangePatternBound">
<g class="nonterminal">
<rect height="22" width="156" x="81" y="42"/>
<text x="159" y="58">
RangePatternBound</text>
</g>
</a>
<path d=" M 71 53 h 10"/>
</g>
<path d=" M 247 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 237 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 280px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangeToInclusivePattern"><svg class="railroad" viewBox="0 0 280 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-RangeToInclusivePattern">
<text class="comment" x="99" y="25">
RangeToInclusivePattern</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="42"/>
<text x="57" y="58">
..=</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-RangePatternBound">
<g class="nonterminal">
<rect height="22" width="156" x="89" y="42"/>
<text x="167" y="58">
RangePatternBound</text>
</g>
</a>
<path d=" M 79 53 h 10"/>
</g>
<path d=" M 255 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 245 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 446px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ObsoleteRangePattern"><svg class="railroad" viewBox="0 0 446 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-ObsoleteRangePattern">
<text class="comment" x="88" y="25">
ObsoleteRangePattern</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-RangePatternBound">
<g class="nonterminal">
<rect height="22" width="156" x="35" y="42"/>
<text x="113" y="58">
RangePatternBound</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="201" y="42"/>
<text x="223" y="58">
...</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-RangePatternBound">
<g class="nonterminal">
<rect height="22" width="156" x="255" y="42"/>
<text x="333" y="58">
RangePatternBound</text>
</g>
</a>
<path d=" M 191 53 h 10"/>
<path d=" M 245 53 h 10"/>
</g>
<path d=" M 421 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 411 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 250px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-RangePatternBound"><svg class="railroad" viewBox="0 0 250 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-RangePatternBound">
<text class="comment" x="74" y="25">
RangePatternBound</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 132 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-LiteralPattern">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="42"/>
<text x="125" y="58">
LiteralPattern</text>
</g>
</a>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 156 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 132 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="expressions/path-expr.md#railroad-PathExpression">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="75"/>
<text x="125" y="91">
PathExpression</text>
</g>
</a>
</g>
<path d=" M 225 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 215 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-patterns.range.intro"><a class="rule-link" href="#r-patterns.range.intro" title="patterns.range.intro"><span>[patterns<wbr>.range<wbr>.intro]</span></a>
</div>

\_范围模式_匹配由其边界定义的范围内的标量值。它们由一个 _sigil_（符号标记，`..` 或 `..=`）以及一侧或两侧的边界组成。

该 sigil 左侧的边界称为_下界\_。右侧的边界称为_上界\_。

<div class="rule" id="r-patterns.range.exclusive"><a class="rule-link" href="#r-patterns.range.exclusive" title="patterns.range.exclusive"><span>[patterns<wbr>.range<wbr>.exclusive]</span></a>
</div>

\_排除上界的范围模式_匹配从下界开始直到上界、但不包括上界的所有值。它写作下界，后接 `..`，再后接上界。

例如，模式 `'m'..'p'` 只会匹配 `'m'`、`'n'` 和 `'o'`，明确**不**包括 `'p'`。

<div class="rule" id="r-patterns.range.inclusive"><a class="rule-link" href="#r-patterns.range.inclusive" title="patterns.range.inclusive"><span>[patterns<wbr>.range<wbr>.inclusive]</span></a>
</div>

\_包含上界的范围模式_匹配从下界开始直到并包括上界的所有值。它写作下界，后接 `..=`，再后接上界。

例如，模式 `'m'..='p'` 只会匹配值 `'m'`、`'n'`、`'o'` 和 `'p'`。

<div class="rule" id="r-patterns.range.from"><a class="rule-link" href="#r-patterns.range.from" title="patterns.range.from"><span>[patterns<wbr>.range<wbr>.from]</span></a>
</div>

\_起始范围模式_匹配所有大于或等于下界的值。它写作下界后接 `..`。

例如，`1..` 会匹配任何大于或等于 1 的整数，例如 1、9、9001，或者 9007199254740991（如果它的大小合适），但不匹配 0；对于有符号整数，也不匹配负数。

<div class="rule" id="r-patterns.range.to-exclusive"><a class="rule-link" href="#r-patterns.range.to-exclusive" title="patterns.range.to-exclusive"><span>[patterns<wbr>.range<wbr>.to-exclusive]</span></a>
</div>

\_排除终止范围模式_匹配所有小于上界的值。它写作 `..` 后接上界。

例如，`..10` 会匹配任何小于 10 的整数，例如 9、1、0；对于有符号整数类型，还会匹配所有负值。

<div class="rule" id="r-patterns.range.to-inclusive"><a class="rule-link" href="#r-patterns.range.to-inclusive" title="patterns.range.to-inclusive"><span>[patterns<wbr>.range<wbr>.to-inclusive]</span></a>
</div>

\_包含终止范围模式_匹配所有小于或等于上界的值。它写作 `..=` 后接上界。

例如，`..=10` 会匹配任何小于或等于 10 的整数，例如 10、1、0；对于有符号整数类型，还会匹配所有负值。

<div class="rule" id="r-patterns.range.constraint-nonempty"><a class="rule-link" href="#r-patterns.range.constraint-nonempty" title="patterns.range.constraint-nonempty"><span>[patterns<wbr>.range<wbr>.constraint-nonempty]</span></a>
</div>

范围模式必须非空；它必须覆盖其类型的可能值集合中的至少一个值。换言之：

- 在 `a..=b` 中，必须满足 a ≤ b。例如，范围模式 `10..=0` 是错误，但允许 `10..=10`。
- 在 `a..b` 中，必须满足 a \< b。例如，范围模式 `10..0` 或 `10..10` 是错误。
- 在 `..b` 中，b 不得是其类型的最小值。例如，范围模式 `..-128i8` 或 `..f64::NEG_INFINITY` 是错误。

<div class="rule" id="r-patterns.range.bound"><a class="rule-link" href="#r-patterns.range.bound" title="patterns.range.bound"><span>[patterns<wbr>.range<wbr>.bound]</span></a>
</div>

边界写作以下形式之一：

- 字符、字节、整数或浮点数字面量。
- 一个 `-` 后接整数或浮点数字面量。
- 一个[路径](expressions/path-expr.md)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 对于 _[RangePatternBound](patterns.md#grammar-RangePatternBound)_，我们在语法上接受的内容多于这些。其他内容随后会在语义上被拒绝。

</div>

<div class="rule" id="r-patterns.range.constraint-bound-path"><a class="rule-link" href="#r-patterns.range.constraint-bound-path" title="patterns.range.constraint-bound-path"><span>[patterns<wbr>.range<wbr>.constraint-bound-path]</span></a>
</div>

如果边界写作路径，则在宏解析之后，该路径必须解析为类型为 `char`、整数类型或浮点数类型的常量项。

<div class="rule" id="r-patterns.range.type"><a class="rule-link" href="#r-patterns.range.type" title="patterns.range.type"><span>[patterns<wbr>.range<wbr>.type]</span></a>
</div>

范围模式匹配其上界和下界的类型，二者必须是同一类型。

<div class="rule" id="r-patterns.range.path-value"><a class="rule-link" href="#r-patterns.range.path-value" title="patterns.range.path-value"><span>[patterns<wbr>.range<wbr>.path-value]</span></a>
</div>

如果边界是[路径](expressions/path-expr.md)，则该边界匹配该路径所解析到的[常量](items/constant-items.md)的类型，并具有该常量的值。

<div class="rule" id="r-patterns.range.literal-value"><a class="rule-link" href="#r-patterns.range.literal-value" title="patterns.range.literal-value"><span>[patterns<wbr>.range<wbr>.literal-value]</span></a>
</div>

如果边界是字面量，则该边界匹配对应[字面量表达式](expressions/literal-expr.md)的类型，并具有该字面量表达式的值。

<div class="rule" id="r-patterns.range.negation"><a class="rule-link" href="#r-patterns.range.negation" title="patterns.range.negation"><span>[patterns<wbr>.range<wbr>.negation]</span></a>
</div>

如果边界是前面带有 `-` 的字面量，则该边界匹配对应[字面量表达式](expressions/literal-expr.md)的相同类型，并具有对该字面量表达式的值进行[取负](expressions/operator-expr.md#negation-operators)后的值。

<div class="rule" id="r-patterns.range.float-restriction"><a class="rule-link" href="#r-patterns.range.float-restriction" title="patterns.range.float-restriction"><span>[patterns<wbr>.range<wbr>.float-restriction]</span></a>
</div>

对于浮点数范围模式，该常量不可以是 `NaN`。

示例：

```rust
# let c = 'f';
let valid_variable = match c {
    'a'..='z' => true,
    'A'..='Z' => true,
    'α'..='ω' => true,
    _ => false,
};

# let ph = 10;
println!("{}", match ph {
    0..7 => "acid",
    7 => "neutral",
    8..=14 => "base",
    _ => unreachable!(),
});

# let uint: u32 = 5;
match uint {
    0 => "zero!",
    1.. => "positive number!",
};

// using paths to constants:
# const TROPOSPHERE_MIN : u8 = 6;
# const TROPOSPHERE_MAX : u8 = 20;
#
# const STRATOSPHERE_MIN : u8 = TROPOSPHERE_MAX + 1;
# const STRATOSPHERE_MAX : u8 = 50;
#
# const MESOSPHERE_MIN : u8 = STRATOSPHERE_MAX + 1;
# const MESOSPHERE_MAX : u8 = 85;
#
# let altitude = 70;
#
println!("{}", match altitude {
    TROPOSPHERE_MIN..=TROPOSPHERE_MAX => "troposphere",
    STRATOSPHERE_MIN..=STRATOSPHERE_MAX => "stratosphere",
    MESOSPHERE_MIN..=MESOSPHERE_MAX => "mesosphere",
    _ => "outer space, maybe",
});

# pub mod binary {
#     pub const MEGA : u64 = 1024*1024;
#     pub const GIGA : u64 = 1024*1024*1024;
# }
# let n_items = 20_832_425;
# let bytes_per_item = 12;
if let size @ binary::MEGA..=binary::GIGA = n_items * bytes_per_item {
    println!("It fits and occupies {} bytes", size);
}

# trait MaxValue {
#     const MAX: u64;
# }
# impl MaxValue for u8 {
#     const MAX: u64 = (1 << 8) - 1;
# }
# impl MaxValue for u16 {
#     const MAX: u64 = (1 << 16) - 1;
# }
# impl MaxValue for u32 {
#     const MAX: u64 = (1 << 32) - 1;
# }
// using qualified paths:
println!("{}", match 0xfacade {
    0 ..= <u8 as MaxValue>::MAX => "fits in a u8",
    0 ..= <u16 as MaxValue>::MAX => "fits in a u16",
    0 ..= <u32 as MaxValue>::MAX => "fits in a u32",
    _ => "too big",
});
```

<div class="rule" id="r-patterns.range.refutable"><a class="rule-link" href="#r-patterns.range.refutable" title="patterns.range.refutable"><span>[patterns<wbr>.range<wbr>.refutable]</span></a>
</div>

对于固定宽度整数和 `char` 类型，如果范围模式覆盖某个类型的整个可能值集合，则它们是不可反驳的。例如，`0u8..=255u8` 是不可反驳的。

<div class="rule" id="r-patterns.range.refutable-integer"><a class="rule-link" href="#r-patterns.range.refutable-integer" title="patterns.range.refutable-integer"><span>[patterns<wbr>.range<wbr>.refutable-integer]</span></a>
</div>

整数类型的取值范围是从其最小值到最大值的闭区间。

<div class="rule" id="r-patterns.range.refutable-char"><a class="rule-link" href="#r-patterns.range.refutable-char" title="patterns.range.refutable-char"><span>[patterns<wbr>.range<wbr>.refutable-char]</span></a>
</div>

`char` 类型的取值范围恰好是包含所有 Unicode 标量值的那些范围：`'\u{0000}'..='\u{D7FF}'` 和 `'\u{E000}'..='\u{10FFFF}'`。

<div class="rule" id="r-patterns.range.constraint-slice"><a class="rule-link" href="#r-patterns.range.constraint-slice" title="patterns.range.constraint-slice"><span>[patterns<wbr>.range<wbr>.constraint-slice]</span></a>
</div>

[RangeFromPattern](patterns.md#grammar-RangeFromPattern) 不能用作[切片模式](#slice-patterns)中子模式的顶层模式。例如，模式 `[1.., _]` 不是有效模式。

<div class="rule" id="r-patterns.range.edition2021"><a class="rule-link" href="#r-patterns.range.edition2021" title="patterns.range.edition2021"><span>[patterns<wbr>.range<wbr>.edition2021]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2021</span> Edition differences</p>
 > 
 > 在 2021 edition 之前，同时具有下界和上界的范围模式也可以使用 `...` 代替 `..=` 来书写，含义相同。

</div>

<div class="rule" id="r-patterns.ref"><a class="rule-link" href="#r-patterns.ref" title="patterns.ref"><span>[patterns<wbr>.ref]</span></a>
</div>

## 引用模式

<div class="rule" id="r-patterns.ref.syntax"><a class="rule-link" href="#r-patterns.ref.syntax" title="patterns.ref.syntax"><span>[patterns<wbr>.ref<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ReferencePattern" onclick="show_railroad()">[ReferencePattern](patterns.md#railroad-ReferencePattern)</span> → ( <span class="grammar-literal">&</span> | <span class="grammar-literal">&&</span> ) <span class="grammar-literal">mut</span><sup>?</sup> <span class="grammar-text">[PatternWithoutModernRange](patterns.md#grammar-PatternWithoutModernRange)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 494px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ReferencePattern"><svg class="railroad" viewBox="0 0 494 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-ReferencePattern">
<text class="comment" x="71" y="25">
ReferencePattern</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="choice">
<path d=" M 35 66 h 24 m 28 0 h 32"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="55"/>
<text x="73" y="71">
&amp;</text>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 9 m 60 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 87 v 0 a 12 12 0 0 0 12 12 m 36 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="88"/>
<text x="77" y="104">
&amp;&amp;</text>
</g>
</g>
<g class="optional">
<path d=" M 129 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="153" y="55"/>
<text x="175" y="71">
mut</text>
</g>
</g>
<a class="link" xlink:href="patterns.md#railroad-PatternWithoutModernRange">
<g class="nonterminal">
<rect height="22" width="228" x="231" y="55"/>
<text x="345" y="71">
PatternWithoutModernRange</text>
</g>
</a>
<path d=" M 119 66 h 10"/>
<path d=" M 221 66 h 10"/>
</g>
<path d=" M 469 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 459 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-patterns.ref.intro"><a class="rule-link" href="#r-patterns.ref.intro" title="patterns.ref.intro"><span>[patterns<wbr>.ref<wbr>.intro]</span></a>
</div>

引用模式会解引用正在被匹配的指针，并因此借用它们。

例如，以下两个针对 `x: &i32` 的匹配是等价的：

```rust
let int_reference = &3;

let a = match *int_reference { 0 => "zero", _ => "some" };
let b = match int_reference { &0 => "zero", _ => "some" };

assert_eq!(a, b);
```

<div class="rule" id="r-patterns.ref.ref-ref"><a class="rule-link" href="#r-patterns.ref.ref-ref" title="patterns.ref.ref-ref"><span>[patterns<wbr>.ref<wbr>.ref-ref]</span></a>
</div>

引用模式的语法产生式必须匹配 token `&&` 才能匹配对引用的引用，因为它本身就是一个 token，而不是两个 `&` token。

<div class="rule" id="r-patterns.ref.mut"><a class="rule-link" href="#r-patterns.ref.mut" title="patterns.ref.mut"><span>[patterns<wbr>.ref<wbr>.mut]</span></a>
</div>

添加 `mut` 关键字会解引用可变引用。可变性必须与该引用的可变性匹配。

<div class="rule" id="r-patterns.ref.refutable"><a class="rule-link" href="#r-patterns.ref.refutable" title="patterns.ref.refutable"><span>[patterns<wbr>.ref<wbr>.refutable]</span></a>
</div>

引用模式始终是不可反驳的。

<div class="rule" id="r-patterns.struct"><a class="rule-link" href="#r-patterns.struct" title="patterns.struct"><span>[patterns<wbr>.struct]</span></a>
</div>

## 结构体模式

<div class="rule" id="r-patterns.struct.syntax"><a class="rule-link" href="#r-patterns.struct.syntax" title="patterns.struct.syntax"><span>[patterns<wbr>.struct<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-StructPattern" onclick="show_railroad()">[StructPattern](patterns.md#railroad-StructPattern)</span> →  
    <span class="grammar-text">[PathInExpression](paths.md#grammar-PathInExpression)</span> <span class="grammar-literal">{</span>  
        <span class="grammar-text">[StructPatternElements](patterns.md#grammar-StructPatternElements)</span><sup>?</sup>  
    <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-StructPatternElements" onclick="show_railroad()">[StructPatternElements](patterns.md#railroad-StructPatternElements)</span> →  
      <span class="grammar-text">[StructPatternFields](patterns.md#grammar-StructPatternFields)</span> ( <span class="grammar-literal">,</span> | <span class="grammar-literal">,</span> <span class="grammar-text">[StructPatternEtCetera](patterns.md#grammar-StructPatternEtCetera)</span> )<sup>?</sup>  
    \| <span class="grammar-text">[StructPatternEtCetera](patterns.md#grammar-StructPatternEtCetera)</span>

<span class="grammar-text grammar-production" id="grammar-StructPatternFields" onclick="show_railroad()">[StructPatternFields](patterns.md#railroad-StructPatternFields)</span> →  
    <span class="grammar-text">[StructPatternField](patterns.md#grammar-StructPatternField)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[StructPatternField](patterns.md#grammar-StructPatternField)</span> )<sup>\*</sup>

<span class="grammar-text grammar-production" id="grammar-StructPatternField" onclick="show_railroad()">[StructPatternField](patterns.md#railroad-StructPatternField)</span> →  
    <span class="grammar-text">[OuterAttribute](attributes.md#grammar-OuterAttribute)</span><sup>\*</sup>  
    (  
        <span class="grammar-text">[TUPLE_INDEX](tokens.md#grammar-TUPLE_INDEX)</span> <span class="grammar-literal">:</span> <span class="grammar-text">[Pattern](patterns.md#grammar-Pattern)</span>  
      \| <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-literal">:</span> <span class="grammar-text">[Pattern](patterns.md#grammar-Pattern)</span>  
      \| <span class="grammar-literal">ref</span><sup>?</sup> <span class="grammar-literal">mut</span><sup>?</sup> <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span>  
    )

<span class="grammar-text grammar-production" id="grammar-StructPatternEtCetera" onclick="show_railroad()">[StructPatternEtCetera](patterns.md#railroad-StructPatternEtCetera)</span> → <span class="grammar-literal">..</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 548px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructPattern"><svg class="railroad" viewBox="0 0 548 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-StructPattern">
<text class="comment" x="60" y="25">
StructPattern</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-PathInExpression">
<g class="nonterminal">
<rect height="22" width="148" x="35" y="55"/>
<text x="109" y="71">
PathInExpression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="193" y="55"/>
<text x="207" y="71">
{</text>
</g>
<g class="optional">
<path d=" M 231 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 196 m -95 0 l -5 -5 m 0 10 l 5 -5 m 95 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="patterns.md#railroad-StructPatternElements">
<g class="nonterminal">
<rect height="22" width="196" x="255" y="55"/>
<text x="353" y="71">
StructPatternElements</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="485" y="55"/>
<text x="499" y="71">
}</text>
</g>
<path d=" M 183 66 h 10"/>
<path d=" M 221 66 h 10"/>
<path d=" M 475 66 h 10"/>
</g>
<path d=" M 523 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 513 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 630px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructPatternElements"><svg class="railroad" viewBox="0 0 630 153" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-StructPatternElements">
<text class="comment" x="92" y="25">
StructPatternElements</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 66 h 24 m 512 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-StructPatternFields">
<g class="nonterminal">
<rect height="22" width="172" x="59" y="55"/>
<text x="145" y="71">
StructPatternFields</text>
</g>
</a>
<g class="optional">
<path d=" M 241 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 282 m -138 0 l -5 -5 m 0 10 l 5 -5 m 138 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="choice">
<path d=" M 265 66 h 24 m 28 0 h 230 m -112 0 l -5 -5 m 0 10 l 5 -5 m 112 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="289" y="55"/>
<text x="303" y="71">
,</text>
</g>
<path d=" M 265 66 a 12 12 0 0 1 12 12 v 9 m 258 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 277 87 v 0 a 12 12 0 0 0 12 12 m 234 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="289" y="88"/>
<text x="303" y="104">
,</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-StructPatternEtCetera">
<g class="nonterminal">
<rect height="22" width="196" x="327" y="88"/>
<text x="425" y="104">
StructPatternEtCetera</text>
</g>
</a>
<path d=" M 317 99 h 10"/>
</g>
</g>
</g>
<path d=" M 231 66 h 10"/>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 42 m 536 0 v -42 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 120 v 0 a 12 12 0 0 0 12 12 m 196 0 h 316 m -155 0 l -5 -5 m 0 10 l 5 -5 m 155 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="patterns.md#railroad-StructPatternEtCetera">
<g class="nonterminal">
<rect height="22" width="196" x="59" y="121"/>
<text x="157" y="137">
StructPatternEtCetera</text>
</g>
</a>
</g>
<path d=" M 605 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 595 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 518px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructPatternFields"><svg class="railroad" viewBox="0 0 518 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-StructPatternFields">
<text class="comment" x="81" y="25">
StructPatternFields</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-StructPatternField">
<g class="nonterminal">
<rect height="22" width="164" x="35" y="55"/>
<text x="117" y="71">
StructPatternField</text>
</g>
</a>
<g class="optional">
<path d=" M 209 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 226 m -110 0 l -5 -5 m 0 10 l 5 -5 m 110 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 233 66 h 12 m 202 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -202 m 104 0 l 5 -5 m 0 10 l -5 -5 m -104 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="245" y="55"/>
<text x="259" y="71">
,</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-StructPatternField">
<g class="nonterminal">
<rect height="22" width="164" x="283" y="55"/>
<text x="365" y="71">
StructPatternField</text>
</g>
</a>
<path d=" M 273 66 h 10"/>
</g>
</g>
</g>
<path d=" M 199 66 h 10"/>
</g>
<path d=" M 493 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 483 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 636px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructPatternField"><svg class="railroad" viewBox="0 0 636 165" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-StructPatternField">
<text class="comment" x="78" y="25">
StructPatternField</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="71" y="55"/>
<text x="137" y="71">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<g class="choice">
<path d=" M 249 66 h 24 m 232 0 h 96 m -45 0 l -5 -5 m 0 10 l 5 -5 m 45 0"/>
<g class="sequence">
<a class="link" xlink:href="tokens.md#railroad-TUPLE_INDEX">
<g class="nonterminal">
<rect height="22" width="108" x="273" y="55"/>
<text x="327" y="71">
TUPLE_INDEX</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="391" y="55"/>
<text x="405" y="71">
:</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="429" y="55"/>
<text x="467" y="71">
Pattern</text>
</g>
</a>
<path d=" M 381 66 h 10"/>
<path d=" M 419 66 h 10"/>
</g>
<path d=" M 249 66 a 12 12 0 0 1 12 12 v 9 m 328 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 261 87 v 33 m 328 0 v -33"/>
<path d=" M 261 87 v 0 a 12 12 0 0 0 12 12 m 224 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="273" y="88"/>
<text x="323" y="104">
IDENTIFIER</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="383" y="88"/>
<text x="397" y="104">
:</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="421" y="88"/>
<text x="459" y="104">
Pattern</text>
</g>
</a>
<path d=" M 373 99 h 10"/>
<path d=" M 411 99 h 10"/>
</g>
<path d=" M 261 120 v 12 a 12 12 0 0 0 12 12 m 304 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="optional">
<path d=" M 273 144 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="297" y="133"/>
<text x="319" y="149">
ref</text>
</g>
</g>
<g class="optional">
<path d=" M 375 144 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="399" y="133"/>
<text x="421" y="149">
mut</text>
</g>
</g>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="477" y="133"/>
<text x="527" y="149">
IDENTIFIER</text>
</g>
</a>
<path d=" M 365 144 h 10"/>
<path d=" M 467 144 h 10"/>
</g>
</g>
<path d=" M 239 66 h 10"/>
</g>
<path d=" M 611 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 601 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 184px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructPatternEtCetera"><svg class="railroad" viewBox="0 0 184 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-StructPatternEtCetera">
<text class="comment" x="92" y="25">
StructPatternEtCetera</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="42"/>
<text x="53" y="58">
..</text>
</g>
<path d=" M 81 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 71 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-patterns.struct.intro"><a class="rule-link" href="#r-patterns.struct.intro" title="patterns.struct.intro"><span>[patterns<wbr>.struct<wbr>.intro]</span></a>
</div>

结构体模式匹配满足其子模式所定义全部条件的 struct、enum 和 union 值。它们也用于[解构](#destructuring) struct、enum 或 union 值。

<div class="rule" id="r-patterns.struct.ignore-rest"><a class="rule-link" href="#r-patterns.struct.ignore-rest" title="patterns.struct.ignore-rest"><span>[patterns<wbr>.struct<wbr>.ignore-rest]</span></a>
</div>

在结构体模式中，字段通过名称、索引（对于元组结构体）引用，或通过使用 `..` 忽略：

```rust
# struct Point {
#     x: u32,
#     y: u32,
# }
# let s = Point {x: 1, y: 1};
#
match s {
    Point {x: 10, y: 20} => (),
    Point {y: 10, x: 20} => (),    // order doesn't matter
    Point {x: 10, ..} => (),
    Point {..} => (),
}

# struct PointTuple (
#     u32,
#     u32,
# );
# let t = PointTuple(1, 2);
#
match t {
    PointTuple {0: 10, 1: 20} => (),
    PointTuple {1: 10, 0: 20} => (),   // order doesn't matter
    PointTuple {0: 10, ..} => (),
    PointTuple {..} => (),
}

# enum Message {
#     Quit,
#     Move { x: i32, y: i32 },
# }
# let m = Message::Quit;
#
match m {
    Message::Quit => (),
    Message::Move {x: 10, y: 20} => (),
    Message::Move {..} => (),
}
```

<div class="rule" id="r-patterns.struct.constraint-struct"><a class="rule-link" href="#r-patterns.struct.constraint-struct" title="patterns.struct.constraint-struct"><span>[patterns<wbr>.struct<wbr>.constraint-struct]</span></a>
</div>

如果未使用 `..`，则用于匹配 struct 的结构体模式必须指定所有字段：

```rust
# struct Struct {
#    a: i32,
#    b: char,
#    c: bool,
# }
# let mut struct_value = Struct{a: 10, b: 'X', c: false};
#
match struct_value {
    Struct{a: 10, b: 'X', c: false} => (),
    Struct{a: 10, b: 'X', ref c} => (),
    Struct{a: 10, b: 'X', ref mut c} => (),
    Struct{a: 10, b: 'X', c: _} => (),
    Struct{a: _, b: _, c: _} => (),
}
```

<div class="rule" id="r-patterns.struct.constraint-union"><a class="rule-link" href="#r-patterns.struct.constraint-union" title="patterns.struct.constraint-union"><span>[patterns<wbr>.struct<wbr>.constraint-union]</span></a>
</div>

用于匹配 union 的结构体模式必须恰好指定一个字段（见 [union 上的模式匹配](items/unions.md#pattern-matching-on-unions)）。

<div class="rule" id="r-patterns.struct.binding-shorthand"><a class="rule-link" href="#r-patterns.struct.binding-shorthand" title="patterns.struct.binding-shorthand"><span>[patterns<wbr>.struct<wbr>.binding-shorthand]</span></a>
</div>

[IDENTIFIER](identifiers.md#grammar-IDENTIFIER) 语法匹配任何值，并将其绑定到与给定字段同名的变量。它是 `fieldname: fieldname` 的简写。可以包含 `ref` 和 `mut` 限定符，其行为如 [patterns.ident.ref](patterns.md#r-patterns.ident.ref) 所述。

```rust
# struct Struct {
#    a: i32,
#    b: char,
#    c: bool,
# }
# let struct_value = Struct{a: 10, b: 'X', c: false};
#
let Struct { a, b, c } = struct_value;
```

<div class="rule" id="r-patterns.struct.refutable"><a class="rule-link" href="#r-patterns.struct.refutable" title="patterns.struct.refutable"><span>[patterns<wbr>.struct<wbr>.refutable]</span></a>
</div>

如果 [PathInExpression](paths.md#grammar-PathInExpression) 解析到具有多个变体的 enum 的构造器，或者其某个子模式是可反驳的，则结构体模式是可反驳的。

<div class="rule" id="r-patterns.struct.namespace"><a class="rule-link" href="#r-patterns.struct.namespace" title="patterns.struct.namespace"><span>[patterns<wbr>.struct<wbr>.namespace]</span></a>
</div>

结构体模式匹配其构造器由 [PathInExpression](paths.md#grammar-PathInExpression) 在[类型命名空间](names/namespaces.md#r-names.namespaces.kinds)中解析得到的 struct、union 或 enum 变体。更多细节见 [patterns.tuple-struct.namespace](patterns.md#r-patterns.tuple-struct.namespace)。

<div class="rule" id="r-patterns.tuple-struct"><a class="rule-link" href="#r-patterns.tuple-struct" title="patterns.tuple-struct"><span>[patterns<wbr>.tuple-struct]</span></a>
</div>

## 元组结构体模式

<div class="rule" id="r-patterns.tuple-struct.syntax"><a class="rule-link" href="#r-patterns.tuple-struct.syntax" title="patterns.tuple-struct.syntax"><span>[patterns<wbr>.tuple-struct<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-TupleStructPattern" onclick="show_railroad()">[TupleStructPattern](patterns.md#railroad-TupleStructPattern)</span> → <span class="grammar-text">[PathInExpression](paths.md#grammar-PathInExpression)</span> <span class="grammar-literal">(</span> <span class="grammar-text">[TupleStructItems](patterns.md#grammar-TupleStructItems)</span><sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-TupleStructItems" onclick="show_railroad()">[TupleStructItems](patterns.md#railroad-TupleStructItems)</span> → <span class="grammar-text">[Pattern](patterns.md#grammar-Pattern)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[Pattern](patterns.md#grammar-Pattern)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 500px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TupleStructPattern"><svg class="railroad" viewBox="0 0 500 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-TupleStructPattern">
<text class="comment" x="78" y="25">
TupleStructPattern</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-PathInExpression">
<g class="nonterminal">
<rect height="22" width="148" x="35" y="55"/>
<text x="109" y="71">
PathInExpression</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="193" y="55"/>
<text x="207" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 231 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 148 m -71 0 l -5 -5 m 0 10 l 5 -5 m 71 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="patterns.md#railroad-TupleStructItems">
<g class="nonterminal">
<rect height="22" width="148" x="255" y="55"/>
<text x="329" y="71">
TupleStructItems</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="437" y="55"/>
<text x="451" y="71">
)</text>
</g>
<path d=" M 183 66 h 10"/>
<path d=" M 221 66 h 10"/>
<path d=" M 427 66 h 10"/>
</g>
<path d=" M 475 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 465 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 428px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TupleStructItems"><svg class="railroad" viewBox="0 0 428 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-TupleStructItems">
<text class="comment" x="71" y="25">
TupleStructItems</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="35" y="55"/>
<text x="73" y="71">
Pattern</text>
</g>
</a>
<g class="optional">
<path d=" M 121 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 138 m -66 0 l -5 -5 m 0 10 l 5 -5 m 66 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 145 66 h 12 m 114 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -114 m 60 0 l 5 -5 m 0 10 l -5 -5 m -60 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="157" y="55"/>
<text x="171" y="71">
,</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="195" y="55"/>
<text x="233" y="71">
Pattern</text>
</g>
</a>
<path d=" M 185 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 317 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="341" y="55"/>
<text x="355" y="71">
,</text>
</g>
</g>
<path d=" M 111 66 h 10"/>
<path d=" M 307 66 h 10"/>
</g>
<path d=" M 403 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 393 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-patterns.tuple-struct.intro"><a class="rule-link" href="#r-patterns.tuple-struct.intro" title="patterns.tuple-struct.intro"><span>[patterns<wbr>.tuple-struct<wbr>.intro]</span></a>
</div>

元组结构体模式匹配满足其子模式所定义全部条件的元组结构体和 enum 值。它们也用于[解构](#destructuring)元组结构体或 enum 值。

<div class="rule" id="r-patterns.tuple-struct.refutable"><a class="rule-link" href="#r-patterns.tuple-struct.refutable" title="patterns.tuple-struct.refutable"><span>[patterns<wbr>.tuple-struct<wbr>.refutable]</span></a>
</div>

如果 [PathInExpression](paths.md#grammar-PathInExpression) 解析到具有多个变体的 enum 的构造器，或者其某个子模式是可反驳的，则元组结构体模式是可反驳的。

<div class="rule" id="r-patterns.tuple-struct.namespace"><a class="rule-link" href="#r-patterns.tuple-struct.namespace" title="patterns.tuple-struct.namespace"><span>[patterns<wbr>.tuple-struct<wbr>.namespace]</span></a>
</div>

元组结构体模式匹配其构造器由 [PathInExpression](paths.md#grammar-PathInExpression) 在[值命名空间](names/namespaces.md#r-names.namespaces.kinds)中解析得到的元组结构体或[类元组 enum 变体](items/enumerations.md#r-items.enum.tuple-expr)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 反过来，用于元组结构体或[类元组 enum 变体](items/enumerations.md#r-items.enum.tuple-expr)的结构体模式，例如 `S { 0: _ }`，会匹配其构造器在[类型命名空间](names/namespaces.md#r-names.namespaces.kinds)中解析得到的元组结构体或变体。
 > 
 > ```rust,no_run
 > enum E1 { V(u16) }
 > enum E2 { V(u32) }
 > 
 > // Import `E1::V` from the type namespace only.
 > mod _0 {
 >     const V: () = (); // For namespace masking.
 >     pub(super) use super::E1::*;
 > }
 > use _0::*;
 > 
 > // Import `E2::V` from the value namespace only.
 > mod _1 {
 >     struct V {} // For namespace masking.
 >     pub(super) use super::E2::*;
 > }
 > use _1::*;
 > 
 > fn f() {
 >     // This struct pattern matches against the tuple-like
 >     // enum variant whose constructor was found in the type
 >     // namespace.
 >     let V { 0: ..=u16::MAX } = (loop {}) else { loop {} };
 >     // This tuple struct pattern matches against the tuple-like
 >     // enum variant whose constructor was found in the value
 >     // namespace.
 >     let V(..=u32::MAX) = (loop {}) else { loop {} };
 > }
 > # // Required due to the odd behavior of `super` within functions.
 > # fn main() {}
 > ```
 > 
 > 语言团队（Lang team）已作出某些决定，例如 [PR #138458](https://github.com/rust-lang/rust/pull/138458) 中的决定，这些决定引发了关于在模式中以这种方式使用值命名空间是否可取的问题，如 [PR #140593](https://github.com/rust-lang/rust/pull/140593#issuecomment-2972338457) 所述。在你的代码中不刻意依赖这种细微行为，可能是较为谨慎的做法。

</div>

<div class="rule" id="r-patterns.tuple"><a class="rule-link" href="#r-patterns.tuple" title="patterns.tuple"><span>[patterns<wbr>.tuple]</span></a>
</div>

## 元组模式

<div class="rule" id="r-patterns.tuple.syntax"><a class="rule-link" href="#r-patterns.tuple.syntax" title="patterns.tuple.syntax"><span>[patterns<wbr>.tuple<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-TuplePattern" onclick="show_railroad()">[TuplePattern](patterns.md#railroad-TuplePattern)</span> → <span class="grammar-literal">(</span> <span class="grammar-text">[TuplePatternItems](patterns.md#grammar-TuplePatternItems)</span><sup>?</sup> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-TuplePatternItems" onclick="show_railroad()">[TuplePatternItems](patterns.md#railroad-TuplePatternItems)</span> →  
      <span class="grammar-text">[Pattern](patterns.md#grammar-Pattern)</span> <span class="grammar-literal">,</span>  
    \| <span class="grammar-text">[RestPattern](patterns.md#grammar-RestPattern)</span>  
    \| <span class="grammar-text">[Pattern](patterns.md#grammar-Pattern)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[Pattern](patterns.md#grammar-Pattern)</span> )<sup>+</sup> <span class="grammar-literal">,</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 350px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TuplePattern"><svg class="railroad" viewBox="0 0 350 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-TuplePattern">
<text class="comment" x="57" y="25">
TuplePattern</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="55"/>
<text x="49" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 73 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="patterns.md#railroad-TuplePatternItems">
<g class="nonterminal">
<rect height="22" width="156" x="97" y="55"/>
<text x="175" y="71">
TuplePatternItems</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="287" y="55"/>
<text x="301" y="71">
)</text>
</g>
<path d=" M 63 66 h 10"/>
<path d=" M 277 66 h 10"/>
</g>
<path d=" M 325 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 315 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 428px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TuplePatternItems"><svg class="railroad" viewBox="0 0 428 165" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-TuplePatternItems">
<text class="comment" x="74" y="25">
TuplePatternItems</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 114 0 h 220 m -107 0 l -5 -5 m 0 10 l 5 -5 m 107 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="59" y="42"/>
<text x="97" y="58">
Pattern</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="145" y="42"/>
<text x="159" y="58">
,</text>
</g>
<path d=" M 135 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 334 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 334 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 108 0 h 202 m -98 0 l -5 -5 m 0 10 l 5 -5 m 98 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-RestPattern">
<g class="nonterminal">
<rect height="22" width="108" x="59" y="75"/>
<text x="113" y="91">
RestPattern</text>
</g>
</a>
</g>
<path d=" M 47 107 v 12 a 12 12 0 0 0 12 12 m 310 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="59" y="120"/>
<text x="97" y="136">
Pattern</text>
</g>
</a>
<g class="repeat">
<path d=" M 145 131 h 12 m 114 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -114 m 60 0 l 5 -5 m 0 10 l -5 -5 m -60 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="157" y="120"/>
<text x="171" y="136">
,</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="195" y="120"/>
<text x="233" y="136">
Pattern</text>
</g>
</a>
<path d=" M 185 131 h 10"/>
</g>
</g>
<g class="optional">
<path d=" M 293 131 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="317" y="120"/>
<text x="331" y="136">
,</text>
</g>
</g>
<path d=" M 135 131 h 10"/>
<path d=" M 283 131 h 10"/>
</g>
</g>
<path d=" M 403 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 393 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-patterns.tuple.intro"><a class="rule-link" href="#r-patterns.tuple.intro" title="patterns.tuple.intro"><span>[patterns<wbr>.tuple<wbr>.intro]</span></a>
</div>

元组模式匹配满足其子模式所定义全部条件的元组值。它们也用于[解构](#destructuring)元组。

<div class="rule" id="r-patterns.tuple.rest-syntax"><a class="rule-link" href="#r-patterns.tuple.rest-syntax" title="patterns.tuple.rest-syntax"><span>[patterns<wbr>.tuple<wbr>.rest-syntax]</span></a>
</div>

带有单个 [RestPattern](patterns.md#grammar-RestPattern) 的形式 `(..)` 是一种特殊形式，它不需要逗号，并匹配任意大小的元组。

<div class="rule" id="r-patterns.tuple.refutable"><a class="rule-link" href="#r-patterns.tuple.refutable" title="patterns.tuple.refutable"><span>[patterns<wbr>.tuple<wbr>.refutable]</span></a>
</div>

当元组模式的某个子模式可反驳时，该元组模式是可反驳的。

使用元组模式的示例：

```rust
let pair = (10, "ten");
let (a, b) = pair;

assert_eq!(a, 10);
assert_eq!(b, "ten");
```

<div class="rule" id="r-patterns.paren"><a class="rule-link" href="#r-patterns.paren" title="patterns.paren"><span>[patterns<wbr>.paren]</span></a>
</div>

## 分组模式

<div class="rule" id="r-patterns.paren.syntax"><a class="rule-link" href="#r-patterns.paren.syntax" title="patterns.paren.syntax"><span>[patterns<wbr>.paren<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-GroupedPattern" onclick="show_railroad()">[GroupedPattern](patterns.md#railroad-GroupedPattern)</span> → <span class="grammar-literal">(</span> <span class="grammar-text">[Pattern](patterns.md#grammar-Pattern)</span> <span class="grammar-literal">)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 222px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-GroupedPattern"><svg class="railroad" viewBox="0 0 222 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-GroupedPattern">
<text class="comment" x="64" y="25">
GroupedPattern</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="35" y="42"/>
<text x="49" y="58">
(</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="73" y="42"/>
<text x="111" y="58">
Pattern</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="159" y="42"/>
<text x="173" y="58">
)</text>
</g>
<path d=" M 63 53 h 10"/>
<path d=" M 149 53 h 10"/>
</g>
<path d=" M 197 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 187 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-patterns.paren.intro"><a class="rule-link" href="#r-patterns.paren.intro" title="patterns.paren.intro"><span>[patterns<wbr>.paren<wbr>.intro]</span></a>
</div>

将模式括在圆括号中可以用于显式控制复合模式的优先级。例如，像 `&0..=5` 这样引用模式紧邻范围模式的形式是有歧义的，因而不允许使用，但可以用圆括号表达。

```rust
let int_reference = &3;
match int_reference {
    &(0..=5) => (),
    _ => (),
}
```

<div class="rule" id="r-patterns.slice"><a class="rule-link" href="#r-patterns.slice" title="patterns.slice"><span>[patterns<wbr>.slice]</span></a>
</div>

## 切片模式

<div class="rule" id="r-patterns.slice.syntax"><a class="rule-link" href="#r-patterns.slice.syntax" title="patterns.slice.syntax"><span>[patterns<wbr>.slice<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-SlicePattern" onclick="show_railroad()">[SlicePattern](patterns.md#railroad-SlicePattern)</span> → <span class="grammar-literal">\[</span> <span class="grammar-text">[SlicePatternItems](patterns.md#grammar-SlicePatternItems)</span><sup>?</sup> <span class="grammar-literal">\]</span>

<span class="grammar-text grammar-production" id="grammar-SlicePatternItems" onclick="show_railroad()">[SlicePatternItems](patterns.md#railroad-SlicePatternItems)</span> → <span class="grammar-text">[Pattern](patterns.md#grammar-Pattern)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[Pattern](patterns.md#grammar-Pattern)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 350px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-SlicePattern"><svg class="railroad" viewBox="0 0 350 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-SlicePattern">
<text class="comment" x="57" y="25">
SlicePattern</text>
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
<path d=" M 73 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="patterns.md#railroad-SlicePatternItems">
<g class="nonterminal">
<rect height="22" width="156" x="97" y="55"/>
<text x="175" y="71">
SlicePatternItems</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="287" y="55"/>
<text x="301" y="71">
]</text>
</g>
<path d=" M 63 66 h 10"/>
<path d=" M 277 66 h 10"/>
</g>
<path d=" M 325 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 315 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 428px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-SlicePatternItems"><svg class="railroad" viewBox="0 0 428 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-SlicePatternItems">
<text class="comment" x="74" y="25">
SlicePatternItems</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="35" y="55"/>
<text x="73" y="71">
Pattern</text>
</g>
</a>
<g class="optional">
<path d=" M 121 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 138 m -66 0 l -5 -5 m 0 10 l 5 -5 m 66 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 145 66 h 12 m 114 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -114 m 60 0 l 5 -5 m 0 10 l -5 -5 m -60 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="157" y="55"/>
<text x="171" y="71">
,</text>
</g>
<a class="link" xlink:href="patterns.md#railroad-Pattern">
<g class="nonterminal">
<rect height="22" width="76" x="195" y="55"/>
<text x="233" y="71">
Pattern</text>
</g>
</a>
<path d=" M 185 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 317 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="341" y="55"/>
<text x="355" y="71">
,</text>
</g>
</g>
<path d=" M 111 66 h 10"/>
<path d=" M 307 66 h 10"/>
</g>
<path d=" M 403 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 393 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-patterns.slice.intro"><a class="rule-link" href="#r-patterns.slice.intro" title="patterns.slice.intro"><span>[patterns<wbr>.slice<wbr>.intro]</span></a>
</div>

切片模式既可以匹配固定大小的数组，也可以匹配动态大小的切片。

```rust
// Fixed size
let arr = [1, 2, 3];
match arr {
    [1, _, _] => "starts with one",
    [a, b, c] => "starts with something else",
};
```

```rust
// Dynamic size
let v = vec![1, 2, 3];
match v[..] {
    [a, b] => { /* this arm will not apply because the length doesn't match */ }
    [a, b, c] => { /* this arm will apply */ }
    _ => { /* this wildcard is required, since the length is not known statically */ }
};
```

<div class="rule" id="r-patterns.slice.refutable-array"><a class="rule-link" href="#r-patterns.slice.refutable-array" title="patterns.slice.refutable-array"><span>[patterns<wbr>.slice<wbr>.refutable-array]</span></a>
</div>

匹配数组时，只要每个元素都是不可反驳的，切片模式就是不可反驳的。

<div class="rule" id="r-patterns.slice.refutable-slice"><a class="rule-link" href="#r-patterns.slice.refutable-slice" title="patterns.slice.refutable-slice"><span>[patterns<wbr>.slice<wbr>.refutable-slice]</span></a>
</div>

匹配切片时，只有带有单个 `..` [剩余模式](patterns.md#r-patterns.rest)的形式，或以 `..` 剩余模式作为子模式的[标识符模式](#identifier-patterns)，才是不可反驳的。

<div class="rule" id="r-patterns.slice.restriction"><a class="rule-link" href="#r-patterns.slice.restriction" title="patterns.slice.restriction"><span>[patterns<wbr>.slice<wbr>.restriction]</span></a>
</div>

在切片内部，没有同时具备下界和上界的范围模式必须括在圆括号中，如 `(a..)`，以明确它意在匹配单个切片元素。像 `a..=b` 这样同时具有下界和上界的范围模式不需要括在圆括号中。

<div class="rule" id="r-patterns.path"><a class="rule-link" href="#r-patterns.path" title="patterns.path"><span>[patterns<wbr>.path]</span></a>
</div>

## 路径模式

<div class="rule" id="r-patterns.path.syntax"><a class="rule-link" href="#r-patterns.path.syntax" title="patterns.path.syntax"><span>[patterns<wbr>.path<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-PathPattern" onclick="show_railroad()">[PathPattern](patterns.md#railroad-PathPattern)</span> → <span class="grammar-text">[PathExpression](expressions/path-expr.md#grammar-PathExpression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 202px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-PathPattern"><svg class="railroad" viewBox="0 0 202 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="patterns.md#grammar-PathPattern">
<text class="comment" x="53" y="25">
PathPattern</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<a class="link" xlink:href="expressions/path-expr.md#railroad-PathExpression">
<g class="nonterminal">
<rect height="22" width="132" x="35" y="42"/>
<text x="101" y="58">
PathExpression</text>
</g>
</a>
<path d=" M 177 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 167 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-patterns.path.intro"><a class="rule-link" href="#r-patterns.path.intro" title="patterns.path.intro"><span>[patterns<wbr>.path<wbr>.intro]</span></a>
</div>

\_路径模式_是指向常量值，或者指向没有字段的 struct 或 enum 变体的模式。

<div class="rule" id="r-patterns.path.unqualified"><a class="rule-link" href="#r-patterns.path.unqualified" title="patterns.path.unqualified"><span>[patterns<wbr>.path<wbr>.unqualified]</span></a>
</div>

非限定路径模式可以指向：

- enum 变体
- struct
- 常量
- 关联常量

<div class="rule" id="r-patterns.path.qualified"><a class="rule-link" href="#r-patterns.path.qualified" title="patterns.path.qualified"><span>[patterns<wbr>.path<wbr>.qualified]</span></a>
</div>

限定路径模式只能指向关联常量。

<div class="rule" id="r-patterns.path.refutable"><a class="rule-link" href="#r-patterns.path.refutable" title="patterns.path.refutable"><span>[patterns<wbr>.path<wbr>.refutable]</span></a>
</div>

当路径模式指向 struct、仅有一个变体的 enum 的某个 enum 变体，或类型不可反驳的常量时，它们是不可反驳的。当它们指向可反驳常量，或具有多个变体的 enum 的 enum 变体时，它们是可反驳的。

<div class="rule" id="r-patterns.const"><a class="rule-link" href="#r-patterns.const" title="patterns.const"><span>[patterns<wbr>.const]</span></a>
</div>

### 常量模式

<div class="rule" id="r-patterns.const.partial-eq"><a class="rule-link" href="#r-patterns.const.partial-eq" title="patterns.const.partial-eq"><span>[patterns<wbr>.const<wbr>.partial-eq]</span></a>
</div>

当类型为 `T` 的常量 `C` 被用作模式时，我们首先检查 `T: PartialEq`。

<div class="rule" id="r-patterns.const.structural-equality"><a class="rule-link" href="#r-patterns.const.structural-equality" title="patterns.const.structural-equality"><span>[patterns<wbr>.const<wbr>.structural-equality]</span></a>
</div>

此外，我们要求 `C` 的值_具有（递归的）结构相等性\_，其递归定义如下：

<div class="rule" id="r-patterns.const.primitive"><a class="rule-link" href="#r-patterns.const.primitive" title="patterns.const.primitive"><span>[patterns<wbr>.const<wbr>.primitive]</span></a>
</div>

- 整数以及 `str`、`bool` 和 `char` 值始终具有结构相等性。

<div class="rule" id="r-patterns.const.builtin-aggregate"><a class="rule-link" href="#r-patterns.const.builtin-aggregate" title="patterns.const.builtin-aggregate"><span>[patterns<wbr>.const<wbr>.builtin-aggregate]</span></a>
</div>

- 如果元组、数组和切片的所有字段/元素都具有结构相等性，则它们具有结构相等性。（特别是，`()` 和 `[]` 始终具有结构相等性。）

<div class="rule" id="r-patterns.const.ref"><a class="rule-link" href="#r-patterns.const.ref" title="patterns.const.ref"><span>[patterns<wbr>.const<wbr>.ref]</span></a>
</div>

- 如果引用所指向的值具有结构相等性，则该引用具有结构相等性。

<div class="rule" id="r-patterns.const.aggregate"><a class="rule-link" href="#r-patterns.const.aggregate" title="patterns.const.aggregate"><span>[patterns<wbr>.const<wbr>.aggregate]</span></a>
</div>

- 如果 `struct` 或 `enum` 类型的值的 `PartialEq` 实例是通过 `#[derive(PartialEq)]` 派生的，并且所有字段（对于 enum：活动变体的所有字段）都具有结构相等性，则该值具有结构相等性。

<div class="rule" id="r-patterns.const.pointer"><a class="rule-link" href="#r-patterns.const.pointer" title="patterns.const.pointer"><span>[patterns<wbr>.const<wbr>.pointer]</span></a>
</div>

- 如果原始指针被定义为常量整数（然后被强制转换/transmute），则它具有结构相等性。

<div class="rule" id="r-patterns.const.float"><a class="rule-link" href="#r-patterns.const.float" title="patterns.const.float"><span>[patterns<wbr>.const<wbr>.float]</span></a>
</div>

- 如果浮点数值不是 `NaN`，则它具有结构相等性。

<div class="rule" id="r-patterns.const.exhaustive"><a class="rule-link" href="#r-patterns.const.exhaustive" title="patterns.const.exhaustive"><span>[patterns<wbr>.const<wbr>.exhaustive]</span></a>
</div>

- 其他任何东西都不具有结构相等性。

<div class="rule" id="r-patterns.const.generic"><a class="rule-link" href="#r-patterns.const.generic" title="patterns.const.generic"><span>[patterns<wbr>.const<wbr>.generic]</span></a>
</div>

特别是，`C` 的值必须在模式构建时已知（即单态化前，pre-monomorphization）。这意味着涉及泛型参数的关联 const 不能用作模式。

<div class="rule" id="r-patterns.const.immutable"><a class="rule-link" href="#r-patterns.const.immutable" title="patterns.const.immutable"><span>[patterns<wbr>.const<wbr>.immutable]</span></a>
</div>

`C` 的值不得包含任何指向可变静态项（`static mut` 项或内部可变的 `static` 项）或 `extern` 静态项的引用。

<div class="rule" id="r-patterns.const.translation"><a class="rule-link" href="#r-patterns.const.translation" title="patterns.const.translation"><span>[patterns<wbr>.const<wbr>.translation]</span></a>
</div>

在确保所有条件都满足之后，该常量值会被转换为一个模式，并且现在的行为完全如同直接写出了该模式一样。特别是，它会完整参与穷尽性检查。（对于原始指针，常量是书写这类模式的唯一方式。对于这些类型，只有 `_` 会被认为是穷尽的。）

<div class="rule" id="r-patterns.or"><a class="rule-link" href="#r-patterns.or" title="patterns.or"><span>[patterns<wbr>.or]</span></a>
</div>

## Or-patterns（或模式）

\_Or-patterns（或模式）\_是匹配两个或多个子模式之一的模式（例如 `A | B | C`）。它们可以任意嵌套。在语法上，or-patterns 可以出现在允许其他模式出现的任何位置（由 [Pattern](patterns.md#grammar-Pattern) 产生式表示），但 `let`\-绑定以及函数和闭包参数例外（由 [PatternNoTopAlt](patterns.md#grammar-PatternNoTopAlt) 产生式表示）。

<div class="rule" id="r-patterns.constraints"><a class="rule-link" href="#r-patterns.constraints" title="patterns.constraints"><span>[patterns<wbr>.constraints]</span></a>
</div>

### 静态语义

<div class="rule" id="r-patterns.constraints.pattern"><a class="rule-link" href="#r-patterns.constraints.pattern" title="patterns.constraints.pattern"><span>[patterns<wbr>.constraints<wbr>.pattern]</span></a>
</div>

1. 给定某个深度处的模式 `p | q`，其中 `p` 和 `q` 是任意模式；如果满足以下情况，则该模式被认为是形式不良的：
   
   - 为 `p` 推断出的类型不能与为 `q` 推断出的类型合一，或
   - `p` 和 `q` 中引入的不是同一组绑定，或
   - `p` 和 `q` 中任何两个同名绑定的类型在类型或绑定模式方面不能合一。
   上述所有情况下，类型合一都是精确的，隐式[类型强制转换](type-coercions.md)不适用。

<div class="rule" id="r-patterns.constraints.match-type-check"><a class="rule-link" href="#r-patterns.constraints.match-type-check" title="patterns.constraints.match-type-check"><span>[patterns<wbr>.constraints<wbr>.match-type-check]</span></a>
</div>

2. 对表达式 `match e_s { a_1 => e_1, ... a_n => e_n }` 进行类型检查时，对于每个包含 `p_i | q_i` 形式模式的 match 分支 `a_i`，如果在它所在的深度 `d` 处，`e_s` 在深度 `d` 的表达式片段的类型不能与 `p_i | q_i` 合一，则模式 `p_i | q_i` 被认为是形式不良的。

<div class="rule" id="r-patterns.constraints.exhaustiveness-or-pattern"><a class="rule-link" href="#r-patterns.constraints.exhaustiveness-or-pattern" title="patterns.constraints.exhaustiveness-or-pattern"><span>[patterns<wbr>.constraints<wbr>.exhaustiveness-or-pattern]</span></a>
</div>

3. 就穷尽性检查而言，模式 `p | q` 被认为既覆盖 `p`，也覆盖 `q`。对于某个构造器 `c(x, ..)`，分配律适用，使得 `c(p | q, ..rest)` 覆盖与 `c(p, ..rest) | c(q, ..rest)` 相同的值集合。这可以递归应用，直到除了位于顶层的 `p | q` 形式模式之外，不再存在嵌套的这类模式。
   
   注意，所谓 _"构造器"_ 并不是指元组结构体模式，而是指任何积类型的模式。这包括 enum 变体、元组结构体、带命名字段的 struct、数组、元组和切片。

<div class="rule" id="r-patterns.behavior"><a class="rule-link" href="#r-patterns.behavior" title="patterns.behavior"><span>[patterns<wbr>.behavior]</span></a>
</div>

### 动态语义

<div class="rule" id="r-patterns.behavior.nested-or-patterns"><a class="rule-link" href="#r-patterns.behavior.nested-or-patterns" title="patterns.behavior.nested-or-patterns"><span>[patterns<wbr>.behavior<wbr>.nested-or-patterns]</span></a>
</div>

1. 在深度 `d` 处，将被匹配值表达式 `e_s` 与模式 `c(p | q, ..rest)` 进行模式匹配的动态语义，被定义为与 `c(p, ..rest) | c(q, ..rest)` 的动态语义相同；其中 `c` 是某个构造器，`p` 和 `q` 是任意模式，`rest` 可选地表示 `c` 中任何剩余的潜在因子。

<div class="rule" id="r-patterns.precedence"><a class="rule-link" href="#r-patterns.precedence" title="patterns.precedence"><span>[patterns<wbr>.precedence]</span></a>
</div>

### 与其他无定界模式的优先级

如本章其他地方所示，有几类模式在语法上是无定界的，包括标识符模式、引用模式和 or-patterns（或模式）。Or-patterns 始终具有最低优先级。这使我们能够为未来可能的类型标注特性保留语法空间，也能减少歧义。例如，`x @ A(..) | B(..)` 会导致错误，因为 `x` 并未在所有模式中绑定。`&A(x) | B(x)` 会导致不同子模式中的 `x` 之间出现类型不匹配。