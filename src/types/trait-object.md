r[type.trait-object]
# trait 对象

r[type.trait-object.syntax]
```grammar,types
TraitObjectType -> `dyn`? Bounds

TraitObjectTypeOneBound -> `dyn`? TraitBound
```

r[type.trait-object.intro]
_trait 对象_ 是实现一组 trait 的某个其他类型的不透明值。这组 trait 由一个 [dyn 兼容](../items/traits.md#dyn-compatibility)的 _基 trait_ 加任意数量的 [auto trait](../special-types-and-traits.md#auto-traits)组成。

r[type.trait-object.impls]
trait 对象会实现基 trait、它的 auto trait，以及基 trait 的任何 [supertrait](../items/traits.md#supertraits)。

r[type.trait-object.name]
trait 对象写作关键字 `dyn` 后跟一组 trait 约束，但这些 trait 约束有以下限制。

r[type.trait-object.constraint]
非 auto trait 不得超过一个，生命周期不得超过一个，并且不允许使用选择退出的约束（例如 `?Sized`）。此外，指向 trait 的路径可以加括号。

例如，给定一个 trait `Trait`，以下都是 trait 对象：

* `dyn Trait`
* `dyn Trait + Send`
* `dyn Trait + Send + Sync`
* `dyn Trait + 'static`
* `dyn Trait + Send + 'static`
* `dyn Trait +`
* `dyn 'static + Trait`.
* `dyn (Trait)`

r[type.trait-object.syntax-edition2021]
> [!EDITION-2021]
> 在 2021 edition 之前，`dyn` 关键字可以省略。

r[type.trait-object.syntax-edition2018]
> [!EDITION-2018]
> 在 2015 edition 中，如果 trait 对象的第一个约束是以 `::` 开头的路径，那么 `dyn` 会被视为该路径的一部分。可以将第一个路径放入括号中来绕过这一点。因此，如果你想要一个带有 trait `::your_module::Trait` 的 trait 对象，应写作 `dyn (::your_module::Trait)`。
>
> 自 2018 edition 起，`dyn` 是真正的关键字，且不允许出现在路径中，因此括号不再必要。

r[type.trait-object.alias]
如果基 trait 互为别名，auto trait 的集合相同，并且生命周期约束相同，则两个 trait 对象类型互为别名。例如，`dyn Trait + Send + UnwindSafe` 与 `dyn Trait + UnwindSafe + Send` 相同。

r[type.trait-object.unsized]
由于该值属于哪个具体类型是不透明的，trait 对象是[动态大小类型](../dynamically-sized-types.md)。与所有 <abbr title="dynamically sized types">DST</abbr> 一样，trait 对象通过某种指针间接使用；例如 `&dyn SomeTrait` 或 `Box<dyn SomeTrait>`。指向 trait 对象的指针的每个实例都包含：

 - 一个指向类型 `T` 的实例的指针，该类型实现了 `SomeTrait`
 - 一个_虚方法表_，通常直接称为 _vtable_，它针对 `T` 所实现的 `SomeTrait` 及其 [supertrait](../items/traits.md#supertraits) 的每个方法，包含一个指向 `T` 的实现的指针（即函数指针）。

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

r[type.trait-object.lifetime-bounds]
## trait 对象生命周期约束

由于 trait 对象可以包含引用，这些引用的生命周期需要作为 trait 对象的一部分表达出来。这个生命周期写作 `Trait + 'a`。存在一些[默认值](../lifetime-elision.md#default-trait-object-lifetimes)，使得该生命周期通常可以被推断为一个合理的选择。

[auto traits]: ../special-types-and-traits.md#auto-traits
[defaults]: ../lifetime-elision.md#default-trait-object-lifetimes
[dyn compatible]: ../items/traits.md#dyn-compatibility
[dynamically sized types]: ../dynamically-sized-types.md
[supertraits]: ../items/traits.md#supertraits
