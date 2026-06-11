<div class="rule" id="r-items.use"><a class="rule-link" href="#r-items.use" title="items.use"><span>[items<wbr>.use]</span></a>
</div>

# Use 声明

<div class="rule" id="r-items.use.syntax"><a class="rule-link" href="#r-items.use.syntax" title="items.use.syntax"><span>[items<wbr>.use<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-UseDeclaration" onclick="show_railroad()">[UseDeclaration](use-declarations.md#railroad-UseDeclaration)</span> → <span class="grammar-literal">use</span> <span class="grammar-text">[UseTree](use-declarations.md#grammar-UseTree)</span> <span class="grammar-literal">;</span>

<span class="grammar-text grammar-production" id="grammar-UseTree" onclick="show_railroad()">[UseTree](use-declarations.md#railroad-UseTree)</span> →  
      ( <span class="grammar-text">[SimplePath](../paths.md#grammar-SimplePath)</span><sup>?</sup> <span class="grammar-literal">::</span> )<sup>?</sup> <span class="grammar-literal">\*</span>  
    \| ( <span class="grammar-text">[SimplePath](../paths.md#grammar-SimplePath)</span><sup>?</sup> <span class="grammar-literal">::</span> )<sup>?</sup> <span class="grammar-literal">{</span> ( <span class="grammar-text">[UseTree](use-declarations.md#grammar-UseTree)</span> ( <span class="grammar-literal">,</span> <span class="grammar-text">[UseTree](use-declarations.md#grammar-UseTree)</span> )<sup>\*</sup> <span class="grammar-literal">,</span><sup>?</sup> )<sup>?</sup> <span class="grammar-literal">}</span>  
    \| <span class="grammar-text">[SimplePath](../paths.md#grammar-SimplePath)</span> ( <span class="grammar-literal">as</span> ( <span class="grammar-text">[IDENTIFIER](../identifiers.md#grammar-IDENTIFIER)</span> | <span class="grammar-literal">\_</span> ) )<sup>?</sup>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 238px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-UseDeclaration"><svg class="railroad" viewBox="0 0 238 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="use-declarations.md#grammar-UseDeclaration">
<text class="comment" x="64" y="25">
UseDeclaration</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="35" y="42"/>
<text x="57" y="58">
use</text>
</g>
<a class="link" xlink:href="use-declarations.md#railroad-UseTree">
<g class="nonterminal">
<rect height="22" width="76" x="89" y="42"/>
<text x="127" y="58">
UseTree</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="175" y="42"/>
<text x="189" y="58">
;</text>
</g>
<path d=" M 79 53 h 10"/>
<path d=" M 165 53 h 10"/>
</g>
<path d=" M 213 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 203 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 852px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-UseTree"><svg class="railroad" viewBox="0 0 852 247" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="use-declarations.md#grammar-UseTree">
<text class="comment" x="39" y="25">
UseTree</text>
</a>
<g class="sequence">
<path d=" M 10 78 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 78 h 24 m 280 0 h 478 m -236 0 l -5 -5 m 0 10 l 5 -5 m 236 0"/>
<g class="sequence">
<g class="optional">
<path d=" M 59 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 194 m -94 0 l -5 -5 m 0 10 l 5 -5 m 94 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="optional">
<path d=" M 83 78 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="107" y="67"/>
<text x="157" y="83">
SimplePath</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="241" y="67"/>
<text x="259" y="83">
::</text>
</g>
<path d=" M 231 78 h 10"/>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="311" y="67"/>
<text x="325" y="83">
*</text>
</g>
<path d=" M 301 78 h 10"/>
</g>
<path d=" M 35 78 a 12 12 0 0 1 12 12 v 9 m 758 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 123 v 46 m 758 0 v -46"/>
<path d=" M 47 99 v 24 a 12 12 0 0 0 12 12 m 734 0 h 0 a 12 12 0 0 0 12 -12 v -24"/>
<g class="sequence">
<g class="optional">
<path d=" M 59 135 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 194 m -94 0 l -5 -5 m 0 10 l 5 -5 m 94 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="optional">
<path d=" M 83 135 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 100 m -47 0 l -5 -5 m 0 10 l 5 -5 m 47 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="../paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="107" y="124"/>
<text x="157" y="140">
SimplePath</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="241" y="124"/>
<text x="259" y="140">
::</text>
</g>
<path d=" M 231 135 h 10"/>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="311" y="124"/>
<text x="325" y="140">
{</text>
</g>
<g class="optional">
<path d=" M 349 135 h 24 m -24 0 a 12 12 0 0 0 12 -12 v -12 a 12 12 0 0 1 12 -12 h 358 m -176 0 l -5 -5 m 0 10 l 5 -5 m 176 0 a 12 12 0 0 1 12 12 v 12 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<a class="link" xlink:href="use-declarations.md#railroad-UseTree">
<g class="nonterminal">
<rect height="22" width="76" x="373" y="124"/>
<text x="411" y="140">
UseTree</text>
</g>
</a>
<g class="optional">
<path d=" M 459 135 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 138 m -66 0 l -5 -5 m 0 10 l 5 -5 m 66 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 483 135 h 12 m 114 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -114 m 60 0 l 5 -5 m 0 10 l -5 -5 m -60 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="495" y="124"/>
<text x="509" y="140">
,</text>
</g>
<a class="link" xlink:href="use-declarations.md#railroad-UseTree">
<g class="nonterminal">
<rect height="22" width="76" x="533" y="124"/>
<text x="571" y="140">
UseTree</text>
</g>
</a>
<path d=" M 523 135 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 655 135 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="679" y="124"/>
<text x="693" y="140">
,</text>
</g>
</g>
<path d=" M 449 135 h 10"/>
<path d=" M 645 135 h 10"/>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="765" y="124"/>
<text x="779" y="140">
}</text>
</g>
<path d=" M 301 135 h 10"/>
<path d=" M 339 135 h 10"/>
<path d=" M 755 135 h 10"/>
</g>
<path d=" M 47 169 v 12 a 12 12 0 0 0 12 12 m 352 0 h 382 m -188 0 l -5 -5 m 0 10 l 5 -5 m 188 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<a class="link" xlink:href="../paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="182"/>
<text x="109" y="198">
SimplePath</text>
</g>
</a>
<g class="optional">
<path d=" M 169 193 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 194 m -94 0 l -5 -5 m 0 10 l 5 -5 m 94 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="193" y="182"/>
<text x="211" y="198">
as</text>
</g>
<g class="choice">
<path d=" M 239 193 h 24 m 100 0 h 24"/>
<a class="link" xlink:href="../identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="263" y="182"/>
<text x="313" y="198">
IDENTIFIER</text>
</g>
</a>
<path d=" M 239 193 a 12 12 0 0 1 12 12 v 9 m 124 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 251 214 v 0 a 12 12 0 0 0 12 12 m 28 0 h 72 m -33 0 l -5 -5 m 0 10 l 5 -5 m 33 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="263" y="215"/>
<text x="277" y="231">
_</text>
</g>
</g>
<path d=" M 229 193 h 10"/>
</g>
</g>
<path d=" M 159 193 h 10"/>
</g>
</g>
<path d=" M 827 78 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 78 h 10"/>
<path d=" M 817 78 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-items.use.intro"><a class="rule-link" href="#r-items.use.intro" title="items.use.intro"><span>[items<wbr>.use<wbr>.intro]</span></a>
</div>

<em><code>use</code> 声明</em>会创建一个或多个局部名称绑定，它们与某个其他[路径](../paths.md)同义。通常，`use` 声明用于缩短引用模块项所需的路径。这些声明可以出现在[模块](modules.md)和[块](../expressions/block-expr.md)中，通常位于开头。`use` 声明有时也称为<em>导入</em>；如果它是公开的，则称为<em>重导出</em>。

<div class="rule" id="r-items.use.forms"><a class="rule-link" href="#r-items.use.forms" title="items.use.forms"><span>[items<wbr>.use<wbr>.forms]</span></a>
</div>

`use` 声明支持若干便捷的简写形式：

<div class="rule" id="r-items.use.forms.multiple"><a class="rule-link" href="#r-items.use.forms.multiple" title="items.use.forms.multiple"><span>[items<wbr>.use<wbr>.forms<wbr>.multiple]</span></a>
</div>

- 使用花括号语法 `use a::b::{c, d, e::f, g::h::i};`，同时绑定一组具有共同前缀的路径

<div class="rule" id="r-items.use.forms.self"><a class="rule-link" href="#r-items.use.forms.self" title="items.use.forms.self"><span>[items<wbr>.use<wbr>.forms<wbr>.self]</span></a>
</div>

- 使用 `self` 关键字，同时绑定一组具有共同前缀的路径及其共同父模块，例如 `use a::b::{self, c, d::e};`

<div class="rule" id="r-items.use.forms.as"><a class="rule-link" href="#r-items.use.forms.as" title="items.use.forms.as"><span>[items<wbr>.use<wbr>.forms<wbr>.as]</span></a>
</div>

- 使用语法 `use p::q::r as x;`，将目标名称重新绑定为新的局部名称。这也可以与前两个特性结合使用：`use a::b::{self as ab, c as abc}`。

<div class="rule" id="r-items.use.forms.glob"><a class="rule-link" href="#r-items.use.forms.glob" title="items.use.forms.glob"><span>[items<wbr>.use<wbr>.forms<wbr>.glob]</span></a>
</div>

- 使用星号通配符语法 `use a::b::*;`，绑定所有匹配给定前缀的路径。

<div class="rule" id="r-items.use.forms.nesting"><a class="rule-link" href="#r-items.use.forms.nesting" title="items.use.forms.nesting"><span>[items<wbr>.use<wbr>.forms<wbr>.nesting]</span></a>
</div>

- 多次嵌套前述特性的分组，例如 `use a::b::{self as ab, c, d::{*, e::f}};`

`use` 声明的示例：

```rust
use std::collections::hash_map::{self, HashMap};

fn foo<T>(_: T){}
fn bar(map1: HashMap<String, usize>, map2: hash_map::HashMap<String, usize>){}

fn main() {
    // use declarations can also exist inside of functions
    use std::option::Option::{Some, None};

    // Equivalent to 'foo(vec![std::option::Option::Some(1.0f64),
    // std::option::Option::None]);'
    foo(vec![Some(1.0f64), None]);

    // Both `hash_map` and `HashMap` are in scope.
    let map1 = HashMap::new();
    let map2 = hash_map::HashMap::new();
    bar(map1, map2);
}
```

<div class="rule" id="r-items.use.visibility"><a class="rule-link" href="#r-items.use.visibility" title="items.use.visibility"><span>[items<wbr>.use<wbr>.visibility]</span></a>
</div>

## `use` 可见性

<div class="rule" id="r-items.use.visibility.intro"><a class="rule-link" href="#r-items.use.visibility.intro" title="items.use.visibility.intro"><span>[items<wbr>.use<wbr>.visibility<wbr>.intro]</span></a>
</div>

与项一样，`use` 声明默认对包含它的模块私有。同样与项一样，如果带有 `pub` 关键字限定，`use` 声明可以是公开的。这样的 `use` 声明用于<em>重导出</em>一个名称。因此，公开的 `use` 声明可以将某个公开名称<em>重定向</em>到不同的目标定义：甚至可以是另一个模块中、具有私有规范路径的定义。

<div class="rule" id="r-items.use.visibility.unambiguous"><a class="rule-link" href="#r-items.use.visibility.unambiguous" title="items.use.visibility.unambiguous"><span>[items<wbr>.use<wbr>.visibility<wbr>.unambiguous]</span></a>
</div>

如果这样的一系列重定向形成循环，或者不能无歧义地解析，则它们表示一个编译时错误。

重导出的示例：

```rust
mod quux {
    pub use self::foo::{bar, baz};
    pub mod foo {
        pub fn bar() {}
        pub fn baz() {}
    }
}

fn main() {
    quux::bar();
    quux::baz();
}
```

在此示例中，模块 `quux` 重导出了在 `foo` 中定义的两个公开名称。

<div class="rule" id="r-items.use.path"><a class="rule-link" href="#r-items.use.path" title="items.use.path"><span>[items<wbr>.use<wbr>.path]</span></a>
</div>

## `use` 路径

<div class="rule" id="r-items.use.path.intro"><a class="rule-link" href="#r-items.use.path.intro" title="items.use.path.intro"><span>[items<wbr>.use<wbr>.path<wbr>.intro]</span></a>
</div>

`use` 项中允许的[路径](../paths.md)遵循 [SimplePath](../paths.md#grammar-SimplePath) 语法，并且类似于可以在表达式中使用的路径。它们可以为以下内容创建绑定：

- 可命名的[项](../items.md)
- [枚举变体](enumerations.md)
- [内置类型](../types.md)
- [属性](../attributes.md)
- [Derive 宏](../procedural-macros.md#r-macro.proc.derive)
- [`macro_rules`](../macros-by-example.md)

<div class="rule" id="r-items.use.path.disallowed"><a class="rule-link" href="#r-items.use.path.disallowed" title="items.use.path.disallowed"><span>[items<wbr>.use<wbr>.path<wbr>.disallowed]</span></a>
</div>

它们不能导入[关联项](associated-items.md)、[泛型参数](generics.md)、[局部变量](../variables.md)、带有 [`Self`](../paths.md#self) 的路径，或[工具属性](../attributes.md#tool-attributes)。下面还会描述更多限制。

<div class="rule" id="r-items.use.path.namespace"><a class="rule-link" href="#r-items.use.path.namespace" title="items.use.path.namespace"><span>[items<wbr>.use<wbr>.path<wbr>.namespace]</span></a>
</div>

`use` 会为被导入实体的所有[命名空间](../names/namespaces.md)创建绑定，但 `self` 导入除外，它只会从类型命名空间导入（如下所述）。例如，下面展示了如何在两个命名空间中为同一个名称创建绑定：

```rust
mod stuff {
    pub struct Foo(pub i32);
}

// Imports the `Foo` type and the `Foo` constructor.
use stuff::Foo;

fn example() {
    let ctor = Foo; // Uses `Foo` from the value namespace.
    let x: Foo = ctor(123); // Uses `Foo` From the type namespace.
}
```

<div class="rule" id="r-items.use.path.edition2018"><a class="rule-link" href="#r-items.use.path.edition2018" title="items.use.path.edition2018"><span>[items<wbr>.use<wbr>.path<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2015 edition 中，`use` 路径相对于 crate 根。例如：
 > 
 > ```rust,edition2015
 > mod foo {
 >     pub mod example { pub mod iter {} }
 >     pub mod baz { pub fn foobaz() {} }
 > }
 > mod bar {
 >     // Resolves `foo` from the crate root.
 >     use foo::example::iter;
 >     // The `::` prefix explicitly resolves `foo`
 >     // from the crate root.
 >     use ::foo::baz::foobaz;
 > }
 > 
 > # fn main() {}
 > ```
 > 
 > 2015 edition 不允许 `use` 声明引用 [extern prelude](../names/preludes.md#extern-prelude)。因此，在 2015 中，若要在 `use` 声明中引用外部 crate，仍然需要 [`extern crate`](extern-crates.md) 声明。从 2018 edition 开始，`use` 声明可以像 `extern crate` 一样指定外部 crate 依赖。

</div>

<div class="rule" id="r-items.use.as"><a class="rule-link" href="#r-items.use.as" title="items.use.as"><span>[items<wbr>.use<wbr>.as]</span></a>
</div>

## `as` 重命名

`as` 关键字可用于更改被导入实体的名称。例如：

```rust
// Creates a non-public alias `bar` for the function `foo`.
use inner::foo as bar;

mod inner {
    pub fn foo() {}
}
```

<div class="rule" id="r-items.use.multiple-syntax"><a class="rule-link" href="#r-items.use.multiple-syntax" title="items.use.multiple-syntax"><span>[items<wbr>.use<wbr>.multiple-syntax]</span></a>
</div>

## 花括号语法

<div class="rule" id="r-items.use.multiple-syntax.intro"><a class="rule-link" href="#r-items.use.multiple-syntax.intro" title="items.use.multiple-syntax.intro"><span>[items<wbr>.use<wbr>.multiple-syntax<wbr>.intro]</span></a>
</div>

花括号可以用在路径的最后一个段中，以从前一个段导入多个实体；如果没有前面的段，则从当前作用域导入。花括号可以嵌套，从而创建一个路径树，其中每组段都会在逻辑上与其父级组合，以创建完整路径。

```rust
// Creates bindings to:
// - `std::collections::BTreeSet`
// - `std::collections::hash_map`
// - `std::collections::hash_map::HashMap`
use std::collections::{BTreeSet, hash_map::{self, HashMap}};
```

<div class="rule" id="r-items.use.multiple-syntax.empty"><a class="rule-link" href="#r-items.use.multiple-syntax.empty" title="items.use.multiple-syntax.empty"><span>[items<wbr>.use<wbr>.multiple-syntax<wbr>.empty]</span></a>
</div>

空花括号不会导入任何内容，但会验证前导路径是可访问的。

<!-- This is slightly wrong, see: https://github.com/rust-lang/rust/issues/61826 -->

<div class="rule" id="r-items.use.multiple-syntax.edition2018"><a class="rule-link" href="#r-items.use.multiple-syntax.edition2018" title="items.use.multiple-syntax.edition2018"><span>[items<wbr>.use<wbr>.multiple-syntax<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2015 edition 中，路径相对于 crate 根，因此像 `use {foo, bar};` 这样的导入会从 crate 根导入名称 `foo` 和 `bar`；而从 2018 edition 开始，这些名称相对于当前作用域。

</div>

<div class="rule" id="r-items.use.self"><a class="rule-link" href="#r-items.use.self" title="items.use.self"><span>[items<wbr>.use<wbr>.self]</span></a>
</div>

## `self` 导入

<div class="rule" id="r-items.use.self.intro"><a class="rule-link" href="#r-items.use.self.intro" title="items.use.self.intro"><span>[items<wbr>.use<wbr>.self<wbr>.intro]</span></a>
</div>

关键字 `self` 可以在[花括号语法](use-declarations.md#r-items.use.multiple-syntax)中使用，以父实体自身的名称创建其绑定。

```rust
mod stuff {
    pub fn foo() {}
    pub fn bar() {}
}
mod example {
    // Creates a binding for `stuff` and `foo`.
    use crate::stuff::{self, foo};
    pub fn baz() {
        foo();
        stuff::bar();
    }
}
# fn main() {}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `self` 也可以用作路径的第一个段。将 `self` 用作第一个段，与在 `use` 的花括号内使用它在逻辑上是相同的；它表示父段的当前模块，或者在没有父段时表示当前模块。关于前导 `self` 含义的更多信息，参见路径章节中的 [`self`](../paths.md#self)。

</div>

<div class="rule" id="r-items.use.self.trailing"><a class="rule-link" href="#r-items.use.self.trailing" title="items.use.self.trailing"><span>[items<wbr>.use<wbr>.self<wbr>.trailing]</span></a>
</div>

`self` 可以出现在 `use` 路径的最后一个段，前面带有 `::`。形式为 `P::self` 的路径等价于 `P::{self}`，而 `P::self as name` 等价于 `P::{self as name}`。

```rust
mod m {
    pub enum E { V1, V2 }
}
use m::self as _; // Equivalent to `use m::{self as _};`.
use m::E::self; // Equivalent to `use m::E::{self};`.
# fn main() {}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 关于前置路径的限制，参见 [paths.qualifiers.mod-self.trailing](../paths.md#r-paths.qualifiers.mod-self.trailing)。

</div>

<div class="rule" id="r-items.use.self.module"><a class="rule-link" href="#r-items.use.self.module" title="items.use.self.module"><span>[items<wbr>.use<wbr>.self<wbr>.module]</span></a>
</div>

当 `self` 在[花括号语法](use-declarations.md#r-items.use.multiple-syntax)中使用时，花括号组之前的路径必须解析为[模块](modules.md#r-items.mod)、[枚举](enumerations.md#r-items.enum)或 [trait](traits.md#r-items.traits)。

```rust
mod m {
    pub enum E { V1, V2 }
    pub trait Tr { fn f(&self); }
}
use m::{self as _}; // OK: Modules can be parents of `self`.
use m::E::{self, V1}; // OK: Enums can be parents of `self`.
use m::Tr::{self}; // OK: Traits can be parents of `self`.
# fn main() {}
```

```rust,compile_fail,E0432
struct S {}
use S::{self as _}; // ERROR: Structs cannot be parents of `self`.
# fn main() {}
```

<div class="rule" id="r-items.use.self.namespace"><a class="rule-link" href="#r-items.use.self.namespace" title="items.use.self.namespace"><span>[items<wbr>.use<wbr>.self<wbr>.namespace]</span></a>
</div>

`self` 只会从父实体的[类型命名空间](../names/namespaces.md)创建绑定。例如，在下面的代码中，只导入了 `foo` mod：

```rust,compile_fail
mod bar {
    pub mod foo {}
    pub fn foo() {}
}

// This only imports the module `foo`. The function `foo` lives in
// the value namespace and is not imported.
use bar::foo::{self};

fn main() {
    foo(); //~ ERROR `foo` is a module
}
```

<div class="rule" id="r-items.use.glob"><a class="rule-link" href="#r-items.use.glob" title="items.use.glob"><span>[items<wbr>.use<wbr>.glob]</span></a>
</div>

## glob 导入

<div class="rule" id="r-items.use.glob.intro"><a class="rule-link" href="#r-items.use.glob.intro" title="items.use.glob.intro"><span>[items<wbr>.use<wbr>.glob<wbr>.intro]</span></a>
</div>

字符 `*` 可以用作 `use` 路径的最后一个段，以从前一个段所指的实体导入所有可导入实体。例如：

```rust
// Creates a non-public alias to `bar`.
use foo::*;

mod foo {
    fn i_am_private() {}
    enum Example {
        V1,
        V2,
    }
    pub fn bar() {
        // Creates local aliases to `V1` and `V2`
        // of the `Example` enum.
        use Example::*;
        let x = V1;
    }
}
```

<div class="rule" id="r-items.use.glob.shadowing"><a class="rule-link" href="#r-items.use.glob.shadowing" title="items.use.glob.shadowing"><span>[items<wbr>.use<wbr>.glob<wbr>.shadowing]</span></a>
</div>

项和命名导入允许遮蔽同一[命名空间](../names/namespaces.md)中来自 glob 导入的名称。也就是说，如果同一命名空间中已有由另一个项定义的名称，则 glob 导入会被遮蔽。例如：

```rust
// This creates a binding to the `clashing::Foo` tuple struct
// constructor, but does not import its type because that would
// conflict with the `Foo` struct defined here.
//
// Note that the order of definition here is unimportant.
use clashing::*;
struct Foo {
    field: f32,
}

fn do_stuff() {
    // Uses the constructor from `clashing::Foo`.
    let f1 = Foo(123);
    // The struct expression uses the type from
    // the `Foo` struct defined above.
    let f2 = Foo { field: 1.0 };
    // `Bar` is also in scope due to the glob import.
    let z = Bar {};
}

mod clashing {
    pub struct Foo(pub i32);
    pub struct Bar {}
}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 对于不允许遮蔽的区域，请参见[名称解析歧义](../names/name-resolution.md#r-names.resolution.expansion.imports.ambiguity)。

</div>

<div class="rule" id="r-items.use.glob.last-segment-only"><a class="rule-link" href="#r-items.use.glob.last-segment-only" title="items.use.glob.last-segment-only"><span>[items<wbr>.use<wbr>.glob<wbr>.last-segment-only]</span></a>
</div>

`*` 不能用作第一个段或中间段。

<div class="rule" id="r-items.use.glob.self-import"><a class="rule-link" href="#r-items.use.glob.self-import" title="items.use.glob.self-import"><span>[items<wbr>.use<wbr>.glob<wbr>.self-import]</span></a>
</div>

`*` 不能用于将模块的内容导入其自身（例如 `use self::*;`）。

<div class="rule" id="r-items.use.glob.edition2018"><a class="rule-link" href="#r-items.use.glob.edition2018" title="items.use.glob.edition2018"><span>[items<wbr>.use<wbr>.glob<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2015 edition 中，路径相对于 crate 根，因此像 `use *;` 这样的导入是有效的，其含义是从 crate 根导入所有内容。这不能在 crate 根自身中使用。

</div>

<div class="rule" id="r-items.use.as-underscore"><a class="rule-link" href="#r-items.use.as-underscore" title="items.use.as-underscore"><span>[items<wbr>.use<wbr>.as-underscore]</span></a>
</div>

## 下划线导入

<div class="rule" id="r-items.use.as-underscore.intro"><a class="rule-link" href="#r-items.use.as-underscore.intro" title="items.use.as-underscore.intro"><span>[items<wbr>.use<wbr>.as-underscore<wbr>.intro]</span></a>
</div>

可以使用下划线以 `use path as _` 的形式导入项，而不将其绑定到名称。这对于导入 trait 尤其有用，这样就可以使用其方法而不导入该 trait 的符号，例如当该 trait 的符号可能与另一个符号冲突时。另一个例子是链接外部 crate 而不导入其名称。

<div class="rule" id="r-items.use.as-underscore.glob"><a class="rule-link" href="#r-items.use.as-underscore.glob" title="items.use.as-underscore.glob"><span>[items<wbr>.use<wbr>.as-underscore<wbr>.glob]</span></a>
</div>

星号 glob 导入会以不可命名的形式导入通过 `_` 导入的项。

```rust
mod foo {
    pub trait Zoo {
        fn zoo(&self) {}
    }

    impl<T> Zoo for T {}
}

use self::foo::Zoo as _;
struct Zoo;  // Underscore import avoids name conflict with this item.

fn main() {
    let z = Zoo;
    z.zoo();
}
```

<div class="rule" id="r-items.use.as-underscore.macro"><a class="rule-link" href="#r-items.use.as-underscore.macro" title="items.use.as-underscore.macro"><span>[items<wbr>.use<wbr>.as-underscore<wbr>.macro]</span></a>
</div>

唯一且不可命名的符号会在宏展开之后创建，因此宏可以安全地发出对 `_` 导入的多个引用。例如，以下代码不应产生错误：

```rust
macro_rules! m {
    ($item: item) => { $item $item }
}

m!(use std as _;);
// This expands to:
// use std as _;
// use std as _;
```

<div class="rule" id="r-items.use.restrictions"><a class="rule-link" href="#r-items.use.restrictions" title="items.use.restrictions"><span>[items<wbr>.use<wbr>.restrictions]</span></a>
</div>

## 限制

以下规则是对有效 `use` 声明的限制。

<div class="rule" id="r-items.use.restrictions.crate-alias"><a class="rule-link" href="#r-items.use.restrictions.crate-alias" title="items.use.restrictions.crate-alias"><span>[items<wbr>.use<wbr>.restrictions<wbr>.crate-alias]</span></a>
</div>

使用 `crate` 导入当前 crate 时，必须使用 `as` 定义绑定名称。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > use crate as root;
 > use crate::{self as root2};
 > 
 > // Not allowed:
 > // use crate;
 > // use crate::{self};
 > ```

</div>

<div class="rule" id="r-items.use.restrictions.macro-crate-alias"><a class="rule-link" href="#r-items.use.restrictions.macro-crate-alias" title="items.use.restrictions.macro-crate-alias"><span>[items<wbr>.use<wbr>.restrictions<wbr>.macro-crate-alias]</span></a>
</div>

在宏转录器中使用 [`$crate`](../paths.md#r-paths.qualifiers.macro-crate) 导入当前 crate 时，必须使用 `as` 定义绑定名称。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > macro_rules! import_crate_root {
 >     () => {
 >         use $crate as my_crate;
 >         use $crate::{self as my_crate2};
 >     };
 > }
 > ```

</div>

<div class="rule" id="r-items.use.restrictions.self-alias"><a class="rule-link" href="#r-items.use.restrictions.self-alias" title="items.use.restrictions.self-alias"><span>[items<wbr>.use<wbr>.restrictions<wbr>.self-alias]</span></a>
</div>

使用 `self` 导入当前模块时，必须使用 `as` 定义绑定名称。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > use {self as this_module};
 > use self as this_module2;
 > use self::{self as this_module3};
 > 
 > // Not allowed:
 > // use {self};
 > // use self;
 > // use self::{self};
 > ```

</div>

<div class="rule" id="r-items.use.restrictions.super-alias"><a class="rule-link" href="#r-items.use.restrictions.super-alias" title="items.use.restrictions.super-alias"><span>[items<wbr>.use<wbr>.restrictions<wbr>.super-alias]</span></a>
</div>

使用 `super` 导入父模块时，必须使用 `as` 定义绑定名称。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > mod a {
 >     mod b {
 >         use super as parent;
 >         use super::{self as parent2};
 >         use self::super as parent3;
 >         use super::super as grandparent;
 >         use super::super::{self as grandparent2};
 > 
 >         // Not allowed:
 >         // use super;
 >         // use super::{self};
 >         // use self::super;
 >         // use super::super;
 >         // use super::super::{self};
 >     }
 > }
 > ```

</div>

<div class="rule" id="r-items.use.restrictions.extern-prelude"><a class="rule-link" href="#r-items.use.restrictions.extern-prelude" title="items.use.restrictions.extern-prelude"><span>[items<wbr>.use<wbr>.restrictions<wbr>.extern-prelude]</span></a>
</div>

作为 [extern prelude](../names/preludes.md#extern-prelude) 的 `::` 不能被导入。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust,edition2018,compile_fail
 > use ::{self as root}; //~ Error
 > ```

</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2015 edition 中，前缀 `::` 指 crate 根，因此允许 `use ::{self as root};`，因为它与 `use crate::{self as root};` 相同。从 2018 edition 开始，`::` 前缀指 extern prelude，而它不能被直接导入。
 > 
 > ```rust,edition2015
 > use ::{self as root}; //~ Ok
 > ```

</div>

<div class="rule" id="r-items.use.restrictions.duplicate-name"><a class="rule-link" href="#r-items.use.restrictions.duplicate-name" title="items.use.restrictions.duplicate-name"><span>[items<wbr>.use<wbr>.restrictions<wbr>.duplicate-name]</span></a>
</div>

与任何项定义一样，`use` 导入不能在模块或块中的同一命名空间内创建同名的重复绑定。

<div class="rule" id="r-items.use.restrictions.variant"><a class="rule-link" href="#r-items.use.restrictions.variant" title="items.use.restrictions.variant"><span>[items<wbr>.use<wbr>.restrictions<wbr>.variant]</span></a>
</div>

`use` 路径不能通过[类型别名](type-aliases.md)引用枚举变体。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust,compile_fail
 > enum MyEnum {
 >   MyVariant
 > }
 > type TypeAlias = MyEnum;
 > 
 > use MyEnum::MyVariant; //~ OK
 > use TypeAlias::MyVariant; //~ ERROR
 > ```

</div>
