<!-- template:attributes -->
r[attributes.derive]
# 派生

r[attributes.derive.intro]
_`derive` [属性](../attributes.md#r-attributes)_ 会调用一个或多个[派生宏](../procedural-macros.md#r-macro.proc.derive)，允许为数据结构自动生成新的[项](../items.md)。可以使用[过程宏](../procedural-macros.md#r-macro.proc.derive)创建 `derive` 宏。

> [!EXAMPLE]
> [`PartialEq`](../../core/cmp/derive.PartialEq.html) 派生宏会为 `Foo<T> where T: PartialEq` 生成 [`PartialEq`](../../core/cmp/trait.PartialEq.html) 的[实现](../items/implementations.md)。[`Clone`](../../core/clone/derive.Clone.html) 派生宏同样会为 [`Clone`](../../core/clone/trait.Clone.html) 生成相应实现。
>
> ```rust
> #[derive(PartialEq, Clone)]
> struct Foo<T> {
>     a: i32,
>     b: T,
> }
> ```
>
> 生成的 `impl` 项等价于：
>
> ```rust
> # struct Foo<T> { a: i32, b: T }
> impl<T: PartialEq> PartialEq for Foo<T> {
>     fn eq(&self, other: &Foo<T>) -> bool {
>         self.a == other.a && self.b == other.b
>     }
> }
>
> impl<T: Clone> Clone for Foo<T> {
>     fn clone(&self) -> Self {
>         Foo { a: self.a.clone(), b: self.b.clone() }
>     }
> }
> ```

r[attributes.derive.syntax]
`derive` 属性使用 [MetaListPaths](../attributes.md#grammar-MetaListPaths) 语法来指定要调用的[派生宏](../procedural-macros.md#r-macro.proc.derive)路径列表。

r[attributes.derive.allowed-positions]
`derive` 属性只能应用于 [struct](../items/structs.md#r-items.struct)、[enum](../items/enumerations.md#r-items.enum) 和 [union](../items/unions.md#r-items.union)。

r[attributes.derive.duplicates]
`derive` 属性可以在一个项上使用任意次数。所有属性中列出的全部派生宏都会被调用。

r[attributes.derive.stdlib]
`derive` 属性在标准库中以下列名称导出：

- [`core::derive`](../../core/macros/builtin/attr.derive.html)
- [`std::derive`](../../core/macros/builtin/attr.derive.html)
- [`core::prelude::v1::derive`](../../core/macros/builtin/attr.derive.html)
- [`std::prelude::v1::derive`](../../core/macros/builtin/attr.derive.html)

r[attributes.derive.built-in]
内置派生定义在[语言 prelude](../names/preludes.md#r-names.preludes.lang) 中。内置派生的列表如下：

- [`Clone`]
- [`Copy`]
- [`Debug`](../../core/fmt/macros/derive.Debug.html)
- [`Default`](../../core/default/trait.Default.html)
- [`Eq`](../../core/cmp/trait.Eq.html)
- [`Hash`](../../core/hash/macros/derive.Hash.html)
- [`Ord`](../../core/cmp/trait.Ord.html)
- [`PartialEq`](../../core/cmp/trait.PartialEq.html)
- [`PartialOrd`](../../core/cmp/trait.PartialOrd.html)

r[attributes.derive.built-in-automatically_derived]
内置派生会在它们生成的实现上包含 [`automatically_derived` 属性](derive.md#r-attributes.derive.automatically_derived)。

r[attributes.derive.behavior]
在宏展开期间，对于派生列表中的每个元素，相应的派生宏会展开为零个或多个[项](../items.md)。

<!-- template:attributes -->
r[attributes.derive.automatically_derived]
## `automatically_derived` 属性

r[attributes.derive.automatically_derived.intro]
_`automatically_derived` [属性](../attributes.md#r-attributes)_ 用于标注[实现](../items/implementations.md)，以表明该实现是由[派生宏](../procedural-macros.md#r-macro.proc.derive)自动创建的。它没有直接效果，但工具和诊断 lint 可以使用它来检测这些自动生成的实现。

> [!EXAMPLE]
> Given [`#[derive(Clone)]`][macro@Clone] on `struct Example`, the [derive macro] may produce:
>
> ```rust
> # struct Example;
> #[automatically_derived]
> impl ::core::clone::Clone for Example {
>     #[inline]
>     fn clone(&self) -> Self {
>         示例
>     }
> }
> ```

r[attributes.derive.automatically_derived.syntax]
`automatically_derived` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

r[attributes.derive.automatically_derived.allowed-positions]
`automatically_derived` 属性只能应用于[实现](../items/implementations.md)。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

r[attributes.derive.automatically_derived.duplicates]
在一个实现上多次使用 `automatically_derived` 与使用一次具有相同效果。

> [!NOTE]
> `rustc` 会对第一次之后的任何使用发出 lint。

r[attributes.derive.automatically_derived.behavior]
`automatically_derived` 属性没有任何行为。

[items]: ../items.md
[derive macro]: macro.proc.derive
[derive macros]: macro.proc.derive
[implementation]: ../items/implementations.md
[items]: ../items.md
[procedural macros]: macro.proc.derive
