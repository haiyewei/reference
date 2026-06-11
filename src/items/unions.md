<div class="rule" id="r-items.union"><a class="rule-link" href="#r-items.union" title="items.union"><span>[items<wbr>.union]</span></a>
</div>

# 联合体

<div class="rule" id="r-items.union.syntax"><a class="rule-link" href="#r-items.union.syntax" title="items.union.syntax"><span>[items<wbr>.union<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Union" onclick="show_railroad()">[Union](unions.md#railroad-Union)</span> →  
    <span class="grammar-literal">union</span> <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-text">[GenericParams](generics.md#grammar-GenericParams)</span><sup>?</sup> <span class="grammar-text">[WhereClause](generics.md#grammar-WhereClause)</span><sup>?</sup> <span class="grammar-literal">{</span> <span class="grammar-text">[StructFields](structs.md#grammar-StructFields)</span><sup>?</sup> <span class="grammar-literal">}</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 838px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Union"><svg class="railroad" viewBox="0 0 838 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="unions.md#grammar-Union">
<text class="comment" x="32" y="25">
Union</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="35" y="55"/>
<text x="65" y="71">
union</text>
</g>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="105" y="55"/>
<text x="155" y="71">
IDENTIFIER</text>
</g>
</a>
<g class="optional">
<path d=" M 215 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-GenericParams">
<g class="nonterminal">
<rect height="22" width="124" x="239" y="55"/>
<text x="301" y="71">
GenericParams</text>
</g>
</a>
</g>
<g class="optional">
<path d=" M 397 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="generics.md#railroad-WhereClause">
<g class="nonterminal">
<rect height="22" width="108" x="421" y="55"/>
<text x="475" y="71">
WhereClause</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="563" y="55"/>
<text x="577" y="71">
{</text>
</g>
<g class="optional">
<path d=" M 601 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="structs.md#railroad-StructFields">
<g class="nonterminal">
<rect height="22" width="116" x="625" y="55"/>
<text x="683" y="71">
StructFields</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="775" y="55"/>
<text x="789" y="71">
}</text>
</g>
<path d=" M 95 66 h 10"/>
<path d=" M 205 66 h 10"/>
<path d=" M 387 66 h 10"/>
<path d=" M 553 66 h 10"/>
<path d=" M 591 66 h 10"/>
<path d=" M 765 66 h 10"/>
</g>
<path d=" M 813 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 803 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.union.intro"><a class="rule-link" href="#r-items.union.intro" title="items.union.intro"><span>[items<wbr>.union<wbr>.intro]</span></a>
</div>

联合体声明使用与结构体声明相同的语法，只是用 `union` 代替 `struct`。

<div class="rule" id="r-items.union.namespace"><a class="rule-link" href="#r-items.union.namespace" title="items.union.namespace"><span>[items<wbr>.union<wbr>.namespace]</span></a>
</div>

联合体声明会在其所在模块或块的[类型命名空间](../names/namespaces.md)中定义给定名称。

```rust
#[repr(C)]
union MyUnion {
    f1: u32,
    f2: f32,
}
```

<div class="rule" id="r-items.union.common-storage"><a class="rule-link" href="#r-items.union.common-storage" title="items.union.common-storage"><span>[items<wbr>.union<wbr>.common-storage]</span></a>
</div>

联合体的关键性质是，联合体的所有字段共享同一份存储。因此，写入联合体的一个字段可能覆盖其其他字段，并且联合体的大小由其最大字段的大小决定。

<div class="rule" id="r-items.union.field-restrictions"><a class="rule-link" href="#r-items.union.field-restrictions" title="items.union.field-restrictions"><span>[items<wbr>.union<wbr>.field-restrictions]</span></a>
</div>

联合体字段类型被限制为以下类型子集：

<div class="rule" id="r-items.union.field-copy"><a class="rule-link" href="#r-items.union.field-copy" title="items.union.field-copy"><span>[items<wbr>.union<wbr>.field-copy]</span></a>
</div>

- `Copy` 类型

<div class="rule" id="r-items.union.field-references"><a class="rule-link" href="#r-items.union.field-references" title="items.union.field-references"><span>[items<wbr>.union<wbr>.field-references]</span></a>
</div>

- 引用（任意 `T` 的 `&T` 和 `&mut T`）

<div class="rule" id="r-items.union.field-manually-drop"><a class="rule-link" href="#r-items.union.field-manually-drop" title="items.union.field-manually-drop"><span>[items<wbr>.union<wbr>.field-manually-drop]</span></a>
</div>

- `ManuallyDrop<T>`（任意 `T`）

<div class="rule" id="r-items.union.field-tuple"><a class="rule-link" href="#r-items.union.field-tuple" title="items.union.field-tuple"><span>[items<wbr>.union<wbr>.field-tuple]</span></a>
</div>

- 仅包含允许的联合体字段类型的元组和数组

<div class="rule" id="r-items.union.drop"><a class="rule-link" href="#r-items.union.drop" title="items.union.drop"><span>[items<wbr>.union<wbr>.drop]</span></a>
</div>

这项限制尤其确保联合体字段永远不需要被丢弃。与结构体和枚举一样，可以为联合体 `impl Drop`，以手动定义它被丢弃时发生什么。

<div class="rule" id="r-items.union.fieldless"><a class="rule-link" href="#r-items.union.fieldless" title="items.union.fieldless"><span>[items<wbr>.union<wbr>.fieldless]</span></a>
</div>

没有任何字段的联合体不会被编译器接受，但可以被宏接受。

<div class="rule" id="r-items.union.init"><a class="rule-link" href="#r-items.union.init" title="items.union.init"><span>[items<wbr>.union<wbr>.init]</span></a>
</div>

## 联合体的初始化

<div class="rule" id="r-items.union.init.intro"><a class="rule-link" href="#r-items.union.init.intro" title="items.union.init.intro"><span>[items<wbr>.union<wbr>.init<wbr>.intro]</span></a>
</div>

可以使用与结构体类型相同的语法创建联合体类型的值，只是必须恰好指定一个字段：

```rust
# union MyUnion { f1: u32, f2: f32 }
#
let u = MyUnion { f1: 1 };
```

<div class="rule" id="r-items.union.init.result"><a class="rule-link" href="#r-items.union.init.result" title="items.union.init.result"><span>[items<wbr>.union<wbr>.init<wbr>.result]</span></a>
</div>

上面的表达式创建一个 `MyUnion` 类型的值，并使用字段 `f1` 初始化存储。可以使用与结构体字段相同的语法访问该联合体：

```rust
# union MyUnion { f1: u32, f2: f32 }
#
# let u = MyUnion { f1: 1 };
let f = unsafe { u.f1 };
```

<div class="rule" id="r-items.union.fields"><a class="rule-link" href="#r-items.union.fields" title="items.union.fields"><span>[items<wbr>.union<wbr>.fields]</span></a>
</div>

## 读取和写入联合体字段

<div class="rule" id="r-items.union.fields.intro"><a class="rule-link" href="#r-items.union.fields.intro" title="items.union.fields.intro"><span>[items<wbr>.union<wbr>.fields<wbr>.intro]</span></a>
</div>

联合体没有“活动字段”的概念。相反，每次联合体访问都只是将该存储解释为用于此次访问的字段的类型。

<div class="rule" id="r-items.union.fields.read"><a class="rule-link" href="#r-items.union.fields.read" title="items.union.fields.read"><span>[items<wbr>.union<wbr>.fields<wbr>.read]</span></a>
</div>

读取联合体字段会按该字段的类型读取联合体的位。

<div class="rule" id="r-items.union.fields.offset"><a class="rule-link" href="#r-items.union.fields.offset" title="items.union.fields.offset"><span>[items<wbr>.union<wbr>.fields<wbr>.offset]</span></a>
</div>

字段可能具有非零偏移量（使用 [C 表示](../type-layout.md#reprc-unions)时除外）；在这种情况下，会读取从这些字段偏移量开始的位。

<div class="rule" id="r-items.union.fields.validity"><a class="rule-link" href="#r-items.union.fields.validity" title="items.union.fields.validity"><span>[items<wbr>.union<wbr>.fields<wbr>.validity]</span></a>
</div>

程序员有责任确保数据对于该字段的类型是有效的。未能做到这一点会导致[未定义行为](../behavior-considered-undefined.md)。例如，从[布尔类型](../types/boolean.md)的字段读取值 `3` 是未定义行为。实际上，对于具有 [C 表示](../type-layout.md#reprc-unions)的联合体，先写入再读取类似于从写入所用类型到读取所用类型的 [`transmute`](../../core/intrinsics/fn.transmute.html)。

<div class="rule" id="r-items.union.fields.read-safety"><a class="rule-link" href="#r-items.union.fields.read-safety" title="items.union.fields.read-safety"><span>[items<wbr>.union<wbr>.fields<wbr>.read-safety]</span></a>
</div>

因此，所有对联合体字段的读取都必须放在 `unsafe` 块中：

```rust
# union MyUnion { f1: u32, f2: f32 }
# let u = MyUnion { f1: 1 };
#
unsafe {
    let f = u.f1;
}
```

通常，使用联合体的代码会围绕不安全的联合体字段访问提供安全封装。

<div class="rule" id="r-items.union.fields.write-safety"><a class="rule-link" href="#r-items.union.fields.write-safety" title="items.union.fields.write-safety"><span>[items<wbr>.union<wbr>.fields<wbr>.write-safety]</span></a>
</div>

相比之下，写入联合体字段是安全的，因为它们只是覆盖任意数据，而不能导致未定义行为。（注意，联合体字段类型永远不会有 drop glue，因此写入联合体字段永远不会隐式丢弃任何东西。）

<div class="rule" id="r-items.union.pattern"><a class="rule-link" href="#r-items.union.pattern" title="items.union.pattern"><span>[items<wbr>.union<wbr>.pattern]</span></a>
</div>

## 对联合体进行模式匹配

<div class="rule" id="r-items.union.pattern.intro"><a class="rule-link" href="#r-items.union.pattern.intro" title="items.union.pattern.intro"><span>[items<wbr>.union<wbr>.pattern<wbr>.intro]</span></a>
</div>

访问联合体字段的另一种方式是使用模式匹配。

<div class="rule" id="r-items.union.pattern.one-field"><a class="rule-link" href="#r-items.union.pattern.one-field" title="items.union.pattern.one-field"><span>[items<wbr>.union<wbr>.pattern<wbr>.one-field]</span></a>
</div>

对联合体字段进行模式匹配使用与结构体模式相同的语法，只是该模式必须恰好指定一个字段。

<div class="rule" id="r-items.union.pattern.safety"><a class="rule-link" href="#r-items.union.pattern.safety" title="items.union.pattern.safety"><span>[items<wbr>.union<wbr>.pattern<wbr>.safety]</span></a>
</div>

由于模式匹配就像用特定字段读取联合体，因此它也必须放在 `unsafe` 块中。

```rust
# union MyUnion { f1: u32, f2: f32 }
#
fn f(u: MyUnion) {
    unsafe {
        match u {
            MyUnion { f1: 10 } => { println!("ten"); }
            MyUnion { f2 } => { println!("{}", f2); }
        }
    }
}
```

<div class="rule" id="r-items.union.pattern.subpattern"><a class="rule-link" href="#r-items.union.pattern.subpattern" title="items.union.pattern.subpattern"><span>[items<wbr>.union<wbr>.pattern<wbr>.subpattern]</span></a>
</div>

模式匹配可以将联合体作为更大结构的一个字段来匹配。特别是，当通过 FFI 使用 Rust 联合体实现 C 的 tagged union 时，这允许同时匹配标签和相应字段：

```rust
#[repr(u32)]
enum Tag { I, F }

#[repr(C)]
union U {
    i: i32,
    f: f32,
}

#[repr(C)]
struct Value {
    tag: Tag,
    u: U,
}

fn is_zero(v: Value) -> bool {
    unsafe {
        match v {
            Value { tag: Tag::I, u: U { i: 0 } } => true,
            Value { tag: Tag::F, u: U { f: num } } if num == 0.0 => true,
            _ => false,
        }
    }
}
```

<div class="rule" id="r-items.union.ref"><a class="rule-link" href="#r-items.union.ref" title="items.union.ref"><span>[items<wbr>.union<wbr>.ref]</span></a>
</div>

## 对联合体字段的引用

<div class="rule" id="r-items.union.ref.intro"><a class="rule-link" href="#r-items.union.ref.intro" title="items.union.ref.intro"><span>[items<wbr>.union<wbr>.ref<wbr>.intro]</span></a>
</div>

由于联合体字段共享同一份存储，获得对联合体某个字段的写访问可能会获得对其所有剩余字段的写访问。

<div class="rule" id="r-items.union.ref.borrow"><a class="rule-link" href="#r-items.union.ref.borrow" title="items.union.ref.borrow"><span>[items<wbr>.union<wbr>.ref<wbr>.borrow]</span></a>
</div>

借用检查规则必须调整以考虑这一事实。因此，如果联合体的一个字段被借用，其所有剩余字段也会在相同生命周期内被借用。

```rust,compile_fail
# union MyUnion { f1: u32, f2: f32 }
// ERROR: cannot borrow `u` (via `u.f2`) as mutable more than once at a time
fn test() {
    let mut u = MyUnion { f1: 1 };
    unsafe {
        let b1 = &mut u.f1;
//                    ---- first mutable borrow occurs here (via `u.f1`)
        let b2 = &mut u.f2;
//                    ^^^^ second mutable borrow occurs here (via `u.f2`)
        *b1 = 5;
    }
//  - first borrow ends here
    assert_eq!(unsafe { u.f1 }, 5);
}
```

<div class="rule" id="r-items.union.ref.use"><a class="rule-link" href="#r-items.union.ref.use" title="items.union.ref.use"><span>[items<wbr>.union<wbr>.ref<wbr>.use]</span></a>
</div>

可以看到，在许多方面（除布局、安全性和所有权之外），联合体的行为与结构体完全相同，这很大程度上是因为它们继承了结构体的语法形态。对于 Rust 语言中许多未提及的方面（如隐私性、名称解析、类型推断、泛型、trait 实现、固有实现、一致性、模式检查等等）也是如此。