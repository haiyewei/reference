<div class="rule" id="r-items.const"><a class="rule-link" href="#r-items.const" title="items.const"><span>[items<wbr>.const]</span></a>
</div>

# 常量项

<div class="rule" id="r-items.const.syntax"><a class="rule-link" href="#r-items.const.syntax" title="items.const.syntax"><span>[items<wbr>.const<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-ConstantItem" onclick="show_railroad()">[ConstantItem](constant-items.md#railroad-ConstantItem)</span> →  
    <span class="grammar-literal">const</span> ( <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> | <span class="grammar-literal">\_</span> ) <span class="grammar-literal">:</span> <span class="grammar-text">[Type](../types.md#grammar-Type)</span> ( <span class="grammar-literal">=</span> <span class="grammar-text">[Expression](../expressions.md#grammar-Expression)</span> )<sup>?</sup> <span class="grammar-literal">;</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 622px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-ConstantItem"><svg class="railroad" viewBox="0 0 622 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="constant-items.md#grammar-ConstantItem">
<text class="comment" x="57" y="25">
ConstantItem</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="35" y="55"/>
<text x="65" y="71">
const</text>
</g>
<g class="choice">
<path d=" M 105 66 h 24 m 100 0 h 24"/>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="129" y="55"/>
<text x="179" y="71">
IDENTIFIER</text>
</g>
</a>
<path d=" M 105 66 a 12 12 0 0 1 12 12 v 9 m 124 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 117 87 v 0 a 12 12 0 0 0 12 12 m 28 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="129" y="88"/>
<text x="143" y="104">
_</text>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="263" y="55"/>
<text x="277" y="71">
:</text>
</g>
<a class="link" xlink:href="../types.md#railroad-Type">
<g class="nonterminal">
<rect height="22" width="52" x="301" y="55"/>
<text x="327" y="71">
Type</text>
</g>
</a>
<g class="optional">
<path d=" M 363 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 138 m -66 0 l -5 -5 m 0 10 l 5 -5 m 66 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="387" y="55"/>
<text x="401" y="71">
=</text>
</g>
<a class="link" xlink:href="../expressions.md#railroad-Expression">
<g class="nonterminal">
<rect height="22" width="100" x="425" y="55"/>
<text x="475" y="71">
Expression</text>
</g>
</a>
<path d=" M 415 66 h 10"/>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="559" y="55"/>
<text x="573" y="71">
;</text>
</g>
<path d=" M 95 66 h 10"/>
<path d=" M 253 66 h 10"/>
<path d=" M 291 66 h 10"/>
<path d=" M 353 66 h 10"/>
<path d=" M 549 66 h 10"/>
</g>
<path d=" M 597 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 587 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.const.intro"><a class="rule-link" href="#r-items.const.intro" title="items.const.intro"><span>[items<wbr>.const<wbr>.intro]</span></a>
</div>

_常量项_ 是一个可以有名称也可以没有名称的 _[常量值](../const_eval.md#constant-expressions)_，它不与程序中的特定内存位置关联。

<div class="rule" id="r-items.const.behavior"><a class="rule-link" href="#r-items.const.behavior" title="items.const.behavior"><span>[items<wbr>.const<wbr>.behavior]</span></a>
</div>

常量本质上会在使用处内联，也就是说，使用常量时会将它们直接复制到相关上下文中。这包括来自外部 crate 的常量以及非 [`Copy`](../special-types-and-traits.md#copy) 类型。对同一常量的引用不一定保证指向同一内存地址。

<div class="rule" id="r-items.const.namespace"><a class="rule-link" href="#r-items.const.namespace" title="items.const.namespace"><span>[items<wbr>.const<wbr>.namespace]</span></a>
</div>

常量声明会在其所在模块或块的[值命名空间](../names/namespaces.md)中定义该常量值。

<div class="rule" id="r-items.const.static"><a class="rule-link" href="#r-items.const.static" title="items.const.static"><span>[items<wbr>.const<wbr>.static]</span></a>
</div>

常量必须显式标注类型。其类型必须具有 `'static` 生命周期：初始化式中的任何引用都必须具有 `'static` 生命周期。常量类型中的引用默认采用 `'static` 生命周期；参见[static 生命周期省略](../lifetime-elision.md#const-and-static-elision)。

<div class="rule" id="r-items.const.static-temporary"><a class="rule-link" href="#r-items.const.static-temporary" title="items.const.static-temporary"><span>[items<wbr>.const<wbr>.static-temporary]</span></a>
</div>

如果常量值符合[提升](../destructors.md#r-destructors.scope.const-promotion)条件，对该常量的引用将具有 `'static` 生命周期；否则，将创建一个临时值。

```rust
const BIT1: u32 = 1 << 0;
const BIT2: u32 = 1 << 1;

const BITS: [u32; 2] = [BIT1, BIT2];
const STRING: &'static str = "bitstring";

struct BitsNStrings<'a> {
    mybits: [u32; 2],
    mystring: &'a str,
}

const BITS_N_STRINGS: BitsNStrings<'static> = BitsNStrings {
    mybits: BITS,
    mystring: STRING,
};
```

<div class="rule" id="r-items.const.expr-omission"><a class="rule-link" href="#r-items.const.expr-omission" title="items.const.expr-omission"><span>[items<wbr>.const<wbr>.expr-omission]</span></a>
</div>

只有在 [trait 定义](traits.md) 中才可以省略常量表达式。

<div class="rule" id="r-items.const.destructor"><a class="rule-link" href="#r-items.const.destructor" title="items.const.destructor"><span>[items<wbr>.const<wbr>.destructor]</span></a>
</div>

## 带析构器的常量

常量可以包含析构器。当值离开作用域时会运行析构器。

```rust
struct TypeWithDestructor(i32);

impl Drop for TypeWithDestructor {
    fn drop(&mut self) {
        println!("Dropped. Held {}.", self.0);
    }
}

const ZERO_WITH_DESTRUCTOR: TypeWithDestructor = TypeWithDestructor(0);

fn create_and_drop_zero_with_destructor() {
    let x = ZERO_WITH_DESTRUCTOR;
    // x gets dropped at end of function, calling drop.
    // prints "Dropped. Held 0.".
}
```

<div class="rule" id="r-items.const.unnamed"><a class="rule-link" href="#r-items.const.unnamed" title="items.const.unnamed"><span>[items<wbr>.const<wbr>.unnamed]</span></a>
</div>

## 未命名常量

<div class="rule" id="r-items.const.unnamed.intro"><a class="rule-link" href="#r-items.const.unnamed.intro" title="items.const.unnamed.intro"><span>[items<wbr>.const<wbr>.unnamed<wbr>.intro]</span></a>
</div>

与[关联常量](../items/associated-items.md#associated-constants)不同，[自由](../glossary.md#free-item)常量可以通过使用下划线代替名称而成为未命名常量。例如：

```rust
const _: () =  { struct _SameNameTwice; };

// OK although it is the same name as above:
const _: () =  { struct _SameNameTwice; };
```

<div class="rule" id="r-items.const.unnamed.repetition"><a class="rule-link" href="#r-items.const.unnamed.repetition" title="items.const.unnamed.repetition"><span>[items<wbr>.const<wbr>.unnamed<wbr>.repetition]</span></a>
</div>

与[下划线导入](use-declarations.md#underscore-imports)一样，宏可以在同一作用域中安全地多次发出相同的未命名常量。例如，以下代码不应产生错误：

```rust
macro_rules! m {
    ($item: item) => { $item $item }
}

m!(const _: () = (););
// This expands to:
// const _: () = ();
// const _: () = ();
```

<div class="rule" id="r-items.const.eval"><a class="rule-link" href="#r-items.const.eval" title="items.const.eval"><span>[items<wbr>.const<wbr>.eval]</span></a>
</div>

## 求值

[自由](../glossary.md#free-item)常量总是在编译时[求值](../const_eval.md)以暴露 panic。即使位于未使用的函数中也是如此：

```rust,compile_fail
// Compile-time panic
const PANIC: () = std::unimplemented!();

fn unused_generic_function<T>() {
    // A failing compile-time assertion
    const _: () = assert!(usize::BITS == 0);
}
```