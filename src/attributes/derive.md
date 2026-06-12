<!-- template:attributes -->
r[attributes.derive]
# 派生

r[attributes.derive.intro]
*`derive` [属性][attributes]* 会调用一个或多个[派生宏](macro.proc.derive)，允许为数据结构自动生成新的[项](../items.md)。可以使用[过程宏](macro.proc.derive)创建 `derive` 宏。

> [!EXAMPLE]
> [`PartialEq`][macro@PartialEq] 派生宏会为 `Foo<T> where T: PartialEq` 生成 [`PartialEq`] 的[实现](../items/implementations.md)。[`Clone`][macro@Clone] 派生宏同样会为 [`Clone`] 生成相应实现。
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
`derive` 属性使用 [MetaListPaths] 语法来指定要调用的[派生宏](macro.proc.derive)路径列表。

r[attributes.derive.allowed-positions]
`derive` 属性只能应用于 [structs][items.struct]、[enums][items.enum] 和 [unions][items.union]。

r[attributes.derive.duplicates]
`derive` 属性可以在一个项上使用任意次数。所有属性中列出的全部派生宏都会被调用。

r[attributes.derive.stdlib]
`derive` 属性在标准库中以下列名称导出：

- [`core::derive`]
- [`std::derive`]
- [`core::prelude::v1::derive`]
- [`std::prelude::v1::derive`]

r[attributes.derive.built-in]
内置派生定义在[语言 prelude][names.preludes.lang] 中。内置派生的列表如下：

- [`Clone`]
- [`Copy`]
- [`Debug`]
- [`Default`]
- [`Eq`]
- [`Hash`]
- [`Ord`]
- [`PartialEq`]
- [`PartialOrd`]

r[attributes.derive.built-in-automatically_derived]
内置派生会在它们生成的实现上包含 [`automatically_derived` 属性][attributes.derive.automatically_derived]。

r[attributes.derive.behavior]
在宏展开期间，对于派生列表中的每个元素，相应的派生宏会展开为零个或多个[项](../items.md)。

<!-- template:attributes -->
r[attributes.derive.automatically_derived]
## `automatically_derived` 属性

r[attributes.derive.automatically_derived.intro]
*`automatically_derived` [属性][attributes]* 用于标注[实现](../items/implementations.md)，以表明该实现是由[派生宏](macro.proc.derive)自动创建的。它没有直接效果，但工具和诊断 lint 可以使用它来检测这些自动生成的实现。

> [!EXAMPLE]
> 给定 `struct Example` 上的 [`#[derive(Clone)]`][macro@Clone]，[派生宏](macro.proc.derive)可以生成：
>
> ```rust
> # struct Example;
> #[automatically_derived]
> impl ::core::clone::Clone for Example {
>     #[inline]
>     fn clone(&self) -> Self {
>         Example
>     }
> }
> ```

r[attributes.derive.automatically_derived.syntax]
`automatically_derived` 属性使用 [MetaWord] 语法。

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
