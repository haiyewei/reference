<div class="rule" id="r-expr.struct"><a class="rule-link" href="#r-expr.struct" title="expr.struct"><span>[expr<wbr>.struct]</span></a>
</div>

# 结构体表达式

<div class="rule" id="r-expr.struct.syntax"><a class="rule-link" href="#r-expr.struct.syntax" title="expr.struct.syntax"><span>[expr<wbr>.struct<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-StructExpression" onclick="show_railroad()">[StructExpression](struct-expr.md#railroad-StructExpression)</span> →  
    <span class="grammar-text">[PathInExpression](../paths.md#grammar-PathInExpression)</span> <span class="grammar-literal">{</span> ( <span class="grammar-text">[StructExprFields](struct-expr.md#grammar-StructExprFields)</span> | <span class="grammar-text">[StructBase](struct-expr.md#grammar-StructBase)</span> )<sup>?</sup> <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-StructExprFields" onclick="show_railroad()">[StructExprFields](struct-expr.md#railroad-StructExprFields)</span> →  
    <span class="grammar-text">[StructExprField](struct-expr.md#grammar-StructExprField)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[StructExprField](struct-expr.md#grammar-StructExprField)</span> )<sup>\*</sup> ( <span class="grammar-literal">,</span> <span class="grammar-text">[StructBase](struct-expr.md#grammar-StructBase)</span> | <span class="grammar-literal">,</span><sup>?</sup> )

<span class="grammar-text grammar-production" id="grammar-StructExprField" onclick="show_railroad()">[StructExprField](struct-expr.md#railroad-StructExprField)</span> →  
    <span class="grammar-text">[OuterAttribute](../attributes.md#grammar-OuterAttribute)</span><sup>\*</sup>  
    (  
        <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span>  
      \| ( <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> | <span class="grammar-text">[TUPLE_INDEX](../tokens.md#grammar-TUPLE_INDEX)</span> ) <span class="grammar-literal">:</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>  
    )

<span class="grammar-text grammar-production" id="grammar-StructBase" onclick="show_railroad()">[StructBase](struct-expr.md#railroad-StructBase)</span> → <span class="grammar-literal">..</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 548px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructExpression"><svg class="railroad" viewBox="0 0 548 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="struct-expr.md#grammar-StructExpression">
<text class="comment" x="71" y="25">
StructExpression</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="../paths.md#railroad-PathInExpression">
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
<g class="choice">
<path d=" M 255 66 h 24 m 148 0 h 24"/>
<a class="link" xlink:href="struct-expr.md#railroad-StructExprFields">
<g class="nonterminal">
<rect height="22" width="148" x="279" y="55"/>
<text x="353" y="71">
StructExprFields</text>
</g>
</a>
<path d=" M 255 66 a 12 12 0 0 1 12 12 v 9 m 172 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 267 87 v 0 a 12 12 0 0 0 12 12 m 100 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="struct-expr.md#railroad-StructBase">
<g class="nonterminal">
<rect height="22" width="100" x="279" y="88"/>
<text x="329" y="104">
StructBase</text>
</g>
</a>
</g>
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
<div style="width: 666px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructExprFields"><svg class="railroad" viewBox="0 0 666 132" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="struct-expr.md#grammar-StructExprFields">
<text class="comment" x="71" y="25">
StructExprFields</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="struct-expr.md#railroad-StructExprField">
<g class="nonterminal">
<rect height="22" width="140" x="35" y="55"/>
<text x="105" y="71">
StructExprField</text>
</g>
</a>
<g class="optional">
<path d=" M 185 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 202 m -98 0 l -5 -5 m 0 10 l 5 -5 m 98 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 209 66 h 12 m 178 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -178 m 92 0 l 5 -5 m 0 10 l -5 -5 m -92 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="221" y="55"/>
<text x="235" y="71">
,</text>
</g>
<a class="link" xlink:href="struct-expr.md#railroad-StructExprField">
<g class="nonterminal">
<rect height="22" width="140" x="259" y="55"/>
<text x="329" y="71">
StructExprField</text>
</g>
</a>
<path d=" M 249 66 h 10"/>
</g>
</g>
</g>
<g class="choice">
<path d=" M 445 66 h 24 m 138 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="469" y="55"/>
<text x="483" y="71">
,</text>
</g>
<a class="link" xlink:href="struct-expr.md#railroad-StructBase">
<g class="nonterminal">
<rect height="22" width="100" x="507" y="55"/>
<text x="557" y="71">
StructBase</text>
</g>
</a>
<path d=" M 497 66 h 10"/>
</g>
<path d=" M 445 66 a 12 12 0 0 1 12 12 v 9 m 162 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 457 87 v 12 a 12 12 0 0 0 12 12 m 76 0 h 62 m -28 0 l -5 -5 m 0 10 l 5 -5 m 28 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="optional">
<path d=" M 469 111 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="493" y="100"/>
<text x="507" y="116">
,</text>
</g>
</g>
</g>
<path d=" M 175 66 h 10"/>
<path d=" M 435 66 h 10"/>
</g>
<path d=" M 641 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 631 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 636px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructExprField"><svg class="railroad" viewBox="0 0 636 153" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="struct-expr.md#grammar-StructExprField">
<text class="comment" x="67" y="25">
StructExprField</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 156 m -75 0 l -5 -5 m 0 10 l 5 -5 m 75 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 59 66 h 12 m 132 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -132 m 69 0 l 5 -5 m 0 10 l -5 -5 m -69 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="../attributes.md#railroad-OuterAttribute">
<g class="nonterminal">
<rect height="22" width="132" x="71" y="55"/>
<text x="137" y="71">
OuterAttribute</text>
</g>
</a>
</g>
</g>
<g class="choice">
<path d=" M 249 66 h 24 m 100 0 h 228 m -111 0 l -5 -5 m 0 10 l 5 -5 m 111 0"/>
<g class="sequence">
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="273" y="55"/>
<text x="323" y="71">
IDENTIFIER</text>
</g>
</a>
</g>
<path d=" M 249 66 a 12 12 0 0 1 12 12 v 9 m 328 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 261 87 v 0 a 12 12 0 0 0 12 12 m 304 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="choice">
<path d=" M 273 99 h 24 m 100 0 h 32"/>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="297" y="88"/>
<text x="347" y="104">
IDENTIFIER</text>
</g>
</a>
<path d=" M 273 99 a 12 12 0 0 1 12 12 v 9 m 132 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 285 120 v 0 a 12 12 0 0 0 12 12 m 108 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="../tokens.md#railroad-TUPLE_INDEX">
<g class="nonterminal">
<rect height="22" width="108" x="297" y="121"/>
<text x="351" y="137">
TUPLE_INDEX</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="439" y="88"/>
<text x="453" y="104">
:</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="477" y="88"/>
<text x="527" y="104">
Expression</text>
</g>
</a>
<path d=" M 429 99 h 10"/>
<path d=" M 467 99 h 10"/>
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
<div style="width: 216px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-StructBase"><svg class="railroad" viewBox="0 0 216 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="struct-expr.md#grammar-StructBase">
<text class="comment" x="50" y="25">
StructBase</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="35" y="42"/>
<text x="53" y="58">
..</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="81" y="42"/>
<text x="131" y="58">
Expression</text>
</g>
</a>
<path d=" M 71 53 h 10"/>
</g>
<path d=" M 191 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 181 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-expr.struct.intro"><a class="rule-link" href="#r-expr.struct.intro" title="expr.struct.intro"><span>[expr<wbr>.struct<wbr>.intro]</span></a>
</div>

\_结构体表达式_创建 struct、enum 或 union 值。它由指向 [struct](../items/structs.md)、[枚举变体](../items/enumerations.md)或 [union](../items/unions.md) 项的路径，后跟该项各字段的值组成。

以下是结构体表达式的示例：

```rust
# struct Point { x: f64, y: f64 }
# struct NothingInMe { }
# mod game { pub struct User<'a> { pub name: &'a str, pub age: u32, pub score: usize } }
# enum Enum { Variant {} }
Point {x: 10.0, y: 20.0};
NothingInMe {};
let u = game::User {name: "Joe", age: 35, score: 100_000};
Enum::Variant {};
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 元组结构体和元组枚举变体通常使用[调用表达式](call-expr.md#r-expr.call)实例化，该调用表达式引用[值命名空间中的构造器](../items/structs.md#r-items.struct.tuple)。这不同于使用花括号、引用类型命名空间中的构造器的结构体表达式。
 > 
 > ```rust
 > struct Position(i32, i32, i32);
 > Position(0, 0, 0);  // Typical way of creating a tuple struct.
 > let c = Position;  // `c` is a function that takes 3 arguments.
 > let pos = c(8, 6, 7);  // Creates a `Position` value.
 > 
 > enum Version { Triple(i32, i32, i32) };
 > Version::Triple(0, 0, 0);
 > let f = Version::Triple;
 > let ver = f(8, 6, 7);
 > ```
 > 
 > 调用路径的最后一段不能指向类型别名：
 > 
 > ```rust
 > trait Tr { type T; }
 > impl<T> Tr for T { type T = T; }
 > 
 > struct Tuple();
 > enum Enum { Tuple() }
 > 
 > // <Unit as Tr>::T(); // causes an error -- `::T` is a type, not a value
 > <Enum as Tr>::T::Tuple(); // OK
 > ```
 > 
 > ---
 > 
 > 单元结构体和单元枚举变体通常使用[路径表达式](path-expr.md#r-expr.path)实例化，该路径表达式引用[值命名空间中的常量](../items/structs.md#r-items.struct.unit)。
 > 
 > ```rust
 > struct Gamma;
 > // Gamma unit value, referring to the const in the value namespace.
 > let a = Gamma;
 > // Exact same value as `a`, but constructed using a struct expression
 > // referring to the type namespace.
 > let b = Gamma {};
 > 
 > enum ColorSpace { Oklch }
 > let c = ColorSpace::Oklch;
 > let d = ColorSpace::Oklch {};
 > ```

</div>

<div class="rule" id="r-expr.struct.field"><a class="rule-link" href="#r-expr.struct.field" title="expr.struct.field"><span>[expr<wbr>.struct<wbr>.field]</span></a>
</div>

## 字段结构体表达式

<div class="rule" id="r-expr.struct.field.intro"><a class="rule-link" href="#r-expr.struct.field.intro" title="expr.struct.field.intro"><span>[expr<wbr>.struct<wbr>.field<wbr>.intro]</span></a>
</div>

字段用花括号括起的结构体表达式允许以任意顺序为每个单独字段指定值。字段名与其值之间用冒号分隔。

<div class="rule" id="r-expr.struct.field.union-constraint"><a class="rule-link" href="#r-expr.struct.field.union-constraint" title="expr.struct.field.union-constraint"><span>[expr<wbr>.struct<wbr>.field<wbr>.union-constraint]</span></a>
</div>

[union](../items/unions.md) 类型的值只能使用这种语法创建，并且必须恰好指定一个字段。

<div class="rule" id="r-expr.struct.update"><a class="rule-link" href="#r-expr.struct.update" title="expr.struct.update"><span>[expr<wbr>.struct<wbr>.update]</span></a>
</div>

## 函数式更新语法

<div class="rule" id="r-expr.struct.update.intro"><a class="rule-link" href="#r-expr.struct.update.intro" title="expr.struct.update.intro"><span>[expr<wbr>.struct<wbr>.update<wbr>.intro]</span></a>
</div>

构造结构体类型值的结构体表达式可以用语法 `..` 后跟一个表达式结尾，以表示函数式更新。

<div class="rule" id="r-expr.struct.update.base-same-type"><a class="rule-link" href="#r-expr.struct.update.base-same-type" title="expr.struct.update.base-same-type"><span>[expr<wbr>.struct<wbr>.update<wbr>.base-same-type]</span></a>
</div>

`..` 后面的表达式（基底）必须与正在形成的新结构体类型具有相同的结构体类型。

<div class="rule" id="r-expr.struct.update.fields"><a class="rule-link" href="#r-expr.struct.update.fields" title="expr.struct.update.fields"><span>[expr<wbr>.struct<wbr>.update<wbr>.fields]</span></a>
</div>

整个表达式对已指定的字段使用给定值，并从基底表达式移动或复制其余字段。

<div class="rule" id="r-expr.struct.update.visibility-constraint"><a class="rule-link" href="#r-expr.struct.update.visibility-constraint" title="expr.struct.update.visibility-constraint"><span>[expr<wbr>.struct<wbr>.update<wbr>.visibility-constraint]</span></a>
</div>

与所有结构体表达式一样，结构体的所有字段都必须是[可见的](../visibility-and-privacy.md)，即使是那些没有显式命名的字段。

```rust
# struct Point3d { x: i32, y: i32, z: i32 }
let mut base = Point3d {x: 1, y: 2, z: 3};
let y_ref = &mut base.y;
Point3d {y: 0, z: 10, .. base}; // OK, only base.x is accessed
drop(y_ref);
```

<div class="rule" id="r-expr.struct.brace-restricted-positions"><a class="rule-link" href="#r-expr.struct.brace-restricted-positions" title="expr.struct.brace-restricted-positions"><span>[expr<wbr>.struct<wbr>.brace-restricted-positions]</span></a>
</div>

结构体表达式不能直接用于 [loop](loop-expr.md) 或 [if](if-expr.md#if-expressions) 表达式的头部，也不能直接用于 [if let](if-expr.md#if-let-patterns) 或 [match](match-expr.md) 表达式的[被匹配表达式](../glossary.md#scrutinee)中。不过，如果结构体表达式位于另一个表达式内部，例如位于[带括号表达式](grouped-expr.md)内部，则可以在这些情形中使用。

<div class="rule" id="r-expr.struct.tuple-field"><a class="rule-link" href="#r-expr.struct.tuple-field" title="expr.struct.tuple-field"><span>[expr<wbr>.struct<wbr>.tuple-field]</span></a>
</div>

字段名可以是十进制整数值，以指定构造元组结构体时使用的索引。这可以与基底结构体一起使用，以填充未指定的其余索引：

```rust
struct Color(u8, u8, u8);
let c1 = Color(0, 0, 0);  // Typical way of creating a tuple struct.
let c2 = Color{0: 255, 1: 127, 2: 0};  // Specifying fields by index.
let c3 = Color{1: 0, ..c2};  // Fill out all other fields using a base struct.
```

<div class="rule" id="r-expr.struct.field.named"><a class="rule-link" href="#r-expr.struct.field.named" title="expr.struct.field.named"><span>[expr<wbr>.struct<wbr>.field<wbr>.named]</span></a>
</div>

### 结构体字段初始化简写

在初始化带有命名（而非编号）字段的数据结构（struct、enum、union）时，允许写 `fieldname` 作为 `fieldname: fieldname` 的简写。这样可以使用更紧凑、重复更少的语法。例如：

```rust
# struct Point3d { x: i32, y: i32, z: i32 }
# let x = 0;
# let y_value = 0;
# let z = 0;
Point3d { x: x, y: y_value, z: z };
Point3d { x, y: y_value, z };
```