<div class="rule" id="r-expr.field"><a class="rule-link" href="#r-expr.field" title="expr.field"><span>[expr<wbr>.field]</span></a>
</div>

# 字段访问表达式

<div class="rule" id="r-expr.field.syntax"><a class="rule-link" href="#r-expr.field.syntax" title="expr.field.syntax"><span>[expr<wbr>.field<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-FieldExpression" onclick="show_railroad()">[FieldExpression](field-expr.md#railroad-FieldExpression)</span> → <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> <span class="grammar-literal">.</span> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 318px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-FieldExpression"><svg class="railroad" viewBox="0 0 318 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="field-expr.md#grammar-FieldExpression">
<text class="comment" x="67" y="25">
FieldExpression</text>
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
.</text>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="183" y="42"/>
<text x="233" y="58">
IDENTIFIER</text>
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

<div class="rule" id="r-expr.field.intro"><a class="rule-link" href="#r-expr.field.intro" title="expr.field.intro"><span>[expr<wbr>.field<wbr>.intro]</span></a>
</div>

\_字段表达式_是[位置表达式](../expressions.md#place-expressions-and-value-expressions)，其求值结果为 [struct](../items/structs.md) 或 [union](../items/unions.md) 的字段位置。

<div class="rule" id="r-expr.field.mut"><a class="rule-link" href="#r-expr.field.mut" title="expr.field.mut"><span>[expr<wbr>.field<wbr>.mut]</span></a>
</div>

当操作数是[可变的](../expressions.md#mutability)时，字段表达式也是可变的。

<div class="rule" id="r-expr.field.form"><a class="rule-link" href="#r-expr.field.form" title="expr.field.form"><span>[expr<wbr>.field<wbr>.form]</span></a>
</div>

字段表达式的语法是一个称为_容器操作数_的表达式，随后是一个 `.`，最后是一个[标识符](../identifiers.md)。

<div class="rule" id="r-expr.field.not-method-call"><a class="rule-link" href="#r-expr.field.not-method-call" title="expr.field.not-method-call"><span>[expr<wbr>.field<wbr>.not-method-call]</span></a>
</div>

字段表达式后面不能跟随一个用括号括起、以逗号分隔的表达式列表，因为那会改为解析为[方法调用表达式](method-call-expr.md)。也就是说，它们不能作为[调用表达式](call-expr.md)的函数操作数。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 若要在调用表达式中使用字段表达式，请将字段表达式包在[带括号表达式](grouped-expr.md)中。
 > 
 > ```rust
 > # struct HoldsCallable<F: Fn()> { callable: F }
 > let holds_callable = HoldsCallable { callable: || () };
 > 
 > // Invalid: Parsed as calling the method "callable"
 > // holds_callable.callable();
 > 
 > // Valid
 > (holds_callable.callable)();
 > ```

</div>

示例：

<!-- ignore: needs lots of support code -->

```rust,ignore
mystruct.myfield;
foo().x;
(Struct {a: 10, b: 20}).a;
(mystruct.function_field)() // Call expression containing a field expression
```

<div class="rule" id="r-expr.field.autoref-deref"><a class="rule-link" href="#r-expr.field.autoref-deref" title="expr.field.autoref-deref"><span>[expr<wbr>.field<wbr>.autoref-deref]</span></a>
</div>

## 自动解引用

如果容器操作数的类型根据该操作数是否[可变](../expressions.md#mutability)而实现了 [`Deref`](../special-types-and-traits.md#deref-and-derefmut) 或 [`DerefMut`](../special-types-and-traits.md#deref-and-derefmut)，则它会被_自动解引用_所需的次数，以使字段访问成为可能。这个过程也简称为 _autoderef_。

<div class="rule" id="r-expr.field.borrow"><a class="rule-link" href="#r-expr.field.borrow" title="expr.field.borrow"><span>[expr<wbr>.field<wbr>.borrow]</span></a>
</div>

## 借用

借用时，struct 的字段或指向 struct 的引用的字段会被视为独立实体。如果该 struct 未实现 [`Drop`](../special-types-and-traits.md#drop) 且存储在局部变量中，这也适用于从其各个字段中移出。若自动解引用是通过 [`Box`](../special-types-and-traits.md#boxt) 以外的用户定义类型完成的，则这也不适用。

```rust
struct A { f1: String, f2: String, f3: String }
let mut x: A;
# x = A {
#     f1: "f1".to_string(),
#     f2: "f2".to_string(),
#     f3: "f3".to_string()
# };
let a: &mut String = &mut x.f1; // x.f1 borrowed mutably
let b: &String = &x.f2;         // x.f2 borrowed immutably
let c: &String = &x.f2;         // Can borrow again
let d: String = x.f3;           // Move out of x.f3
```