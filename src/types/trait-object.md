<div class="rule" id="r-type.trait-object"><a class="rule-link" href="#r-type.trait-object" title="type.trait-object"><span>[type<wbr>.trait-object]</span></a>
</div>

# trait 对象

<div class="rule" id="r-type.trait-object.syntax"><a class="rule-link" href="#r-type.trait-object.syntax" title="type.trait-object.syntax"><span>[type<wbr>.trait-object<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-TraitObjectType" onclick="show_railroad()">[TraitObjectType](trait-object.md#railroad-TraitObjectType)</span> → <span class="grammar-literal">dyn</span><sup>?</sup> <span class="grammar-text">[Bounds](../trait-bounds.md#grammar-Bounds)</span>

<span class="grammar-text grammar-production" id="grammar-TraitObjectTypeOneBound" onclick="show_railroad()">[TraitObjectTypeOneBound](trait-object.md#railroad-TraitObjectTypeOneBound)</span> → <span class="grammar-literal">dyn</span><sup>?</sup> <span class="grammar-text">[TraitBound](../trait-bounds.md#grammar-TraitBound)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 240px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TraitObjectType"><svg class="railroad" viewBox="0 0 240 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="trait-object.md#grammar-TraitObjectType">
<text class="comment" x="67" y="25">
TraitObjectType</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="55"/>
<text x="81" y="71">
dyn</text>
</g>
</g>
<a class="link" xlink:href="../trait-bounds.md#railroad-Bounds">
<g class="nonterminal">
<rect height="22" width="68" x="137" y="55"/>
<text x="171" y="71">
Bounds</text>
</g>
</a>
<path d=" M 127 66 h 10"/>
</g>
<path d=" M 215 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 205 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 272px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TraitObjectTypeOneBound"><svg class="railroad" viewBox="0 0 272 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="trait-object.md#grammar-TraitObjectTypeOneBound">
<text class="comment" x="99" y="25">
TraitObjectTypeOneBound</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="optional">
<path d=" M 35 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 44 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="55"/>
<text x="81" y="71">
dyn</text>
</g>
</g>
<a class="link" xlink:href="../trait-bounds.md#railroad-TraitBound">
<g class="nonterminal">
<rect height="22" width="100" x="137" y="55"/>
<text x="187" y="71">
TraitBound</text>
</g>
</a>
<path d=" M 127 66 h 10"/>
</g>
<path d=" M 247 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 237 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-type.trait-object.intro"><a class="rule-link" href="#r-type.trait-object.intro" title="type.trait-object.intro"><span>[type<wbr>.trait-object<wbr>.intro]</span></a>
</div>

_trait 对象_ 是实现一组 trait 的某个其他类型的不透明值。这组 trait 由一个 [dyn 兼容](../items/traits.md#dyn-compatibility)的 _基 trait_ 加任意数量的 [auto trait](../special-types-and-traits.md#auto-traits)组成。

<div class="rule" id="r-type.trait-object.impls"><a class="rule-link" href="#r-type.trait-object.impls" title="type.trait-object.impls"><span>[type<wbr>.trait-object<wbr>.impls]</span></a>
</div>

trait 对象会实现基 trait、它的 auto trait，以及基 trait 的任何 [supertrait](../items/traits.md#supertraits)。

<div class="rule" id="r-type.trait-object.name"><a class="rule-link" href="#r-type.trait-object.name" title="type.trait-object.name"><span>[type<wbr>.trait-object<wbr>.name]</span></a>
</div>

trait 对象写作关键字 `dyn` 后跟一组 trait 约束，但这些 trait 约束有以下限制。

<div class="rule" id="r-type.trait-object.constraint"><a class="rule-link" href="#r-type.trait-object.constraint" title="type.trait-object.constraint"><span>[type<wbr>.trait-object<wbr>.constraint]</span></a>
</div>

非 auto trait 不得超过一个，生命周期不得超过一个，并且不允许使用选择退出的约束（例如 `?Sized`）。此外，指向 trait 的路径可以加括号。

例如，给定一个 trait `Trait`，以下都是 trait 对象：

- `dyn Trait`
- `dyn Trait + Send`
- `dyn Trait + Send + Sync`
- `dyn Trait + 'static`
- `dyn Trait + Send + 'static`
- `dyn Trait +`
- `dyn 'static + Trait`.
- `dyn (Trait)`

<div class="rule" id="r-type.trait-object.syntax-edition2021"><a class="rule-link" href="#r-type.trait-object.syntax-edition2021" title="type.trait-object.syntax-edition2021"><span>[type<wbr>.trait-object<wbr>.syntax-edition2021]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2021</span> Edition differences</p>
 > 
 > 在 2021 edition 之前，`dyn` 关键字可以省略。

</div>

<div class="rule" id="r-type.trait-object.syntax-edition2018"><a class="rule-link" href="#r-type.trait-object.syntax-edition2018" title="type.trait-object.syntax-edition2018"><span>[type<wbr>.trait-object<wbr>.syntax-edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2015 edition 中，如果 trait 对象的第一个约束是以 `::` 开头的路径，那么 `dyn` 会被视为该路径的一部分。可以将第一个路径放入括号中来绕过这一点。因此，如果你想要一个带有 trait `::your_module::Trait` 的 trait 对象，应写作 `dyn (::your_module::Trait)`。
 > 
 > 自 2018 edition 起，`dyn` 是真正的关键字，且不允许出现在路径中，因此括号不再必要。

</div>

<div class="rule" id="r-type.trait-object.alias"><a class="rule-link" href="#r-type.trait-object.alias" title="type.trait-object.alias"><span>[type<wbr>.trait-object<wbr>.alias]</span></a>
</div>

如果基 trait 互为别名，auto trait 的集合相同，并且生命周期约束相同，则两个 trait 对象类型互为别名。例如，`dyn Trait + Send + UnwindSafe` 与 `dyn Trait + UnwindSafe + Send` 相同。

<div class="rule" id="r-type.trait-object.unsized"><a class="rule-link" href="#r-type.trait-object.unsized" title="type.trait-object.unsized"><span>[type<wbr>.trait-object<wbr>.unsized]</span></a>
</div>

由于该值属于哪个具体类型是不透明的，trait 对象是[动态大小类型](../dynamically-sized-types.md)。与所有 <abbr title="dynamically sized types">DST</abbr> 一样，trait 对象通过某种指针间接使用；例如 `&dyn SomeTrait` 或 `Box<dyn SomeTrait>`。指向 trait 对象的指针的每个实例都包含：

- 一个指向类型 `T` 的实例的指针，该类型实现了 `SomeTrait`
- 一个_虚方法表\_，通常直接称为 _vtable_，它针对 `T` 所实现的 `SomeTrait` 及其 [supertrait](../items/traits.md#supertraits) 的每个方法，包含一个指向 `T` 的实现的指针（即函数指针）。

trait 对象的目的是允许方法的“后期绑定”。在 trait 对象上调用方法会在运行时产生虚分派：也就是说，从 trait 对象的 vtable 中加载一个函数指针，并间接调用它。每个 vtable 条目的实际实现可以因对象而异。

trait 对象的示例：

```rust
trait Printable {
    fn stringify(&self) -> String;
}

impl Printable for i32 {
    fn stringify(&self) -> String { self.to_string() }
}

fn print(a: Box<dyn Printable>) {
    println!("{}", a.stringify());
}

fn main() {
    print(Box::new(10) as Box<dyn Printable>);
}
```

在此示例中，trait `Printable` 在 `print` 的类型签名和 `main` 中的转换表达式里都作为 trait 对象出现。

<div class="rule" id="r-type.trait-object.lifetime-bounds"><a class="rule-link" href="#r-type.trait-object.lifetime-bounds" title="type.trait-object.lifetime-bounds"><span>[type<wbr>.trait-object<wbr>.lifetime-bounds]</span></a>
</div>

## trait 对象生命周期约束

由于 trait 对象可以包含引用，这些引用的生命周期需要作为 trait 对象的一部分表达出来。这个生命周期写作 `Trait + 'a`。存在一些[默认值](../lifetime-elision.md#default-trait-object-lifetimes)，使得该生命周期通常可以被推断为一个合理的选择。