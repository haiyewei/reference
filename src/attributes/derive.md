<!-- template:attributes -->

<div class="rule" id="r-attributes.derive"><a class="rule-link" href="#r-attributes.derive" title="attributes.derive"><span>[attributes<wbr>.derive]</span></a>
</div>

# 派生

<div class="rule" id="r-attributes.derive.intro"><a class="rule-link" href="#r-attributes.derive.intro" title="attributes.derive.intro"><span>[attributes<wbr>.derive<wbr>.intro]</span></a>
</div>

_`derive` [属性](../attributes.md#r-attributes)_ 会调用一个或多个[派生宏](../procedural-macros.md#r-macro.proc.derive)，允许为数据结构自动生成新的[项](../items.md)。可以使用[过程宏](../procedural-macros.md#r-macro.proc.derive)创建 `derive` 宏。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
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

</div>

<div class="rule" id="r-attributes.derive.syntax"><a class="rule-link" href="#r-attributes.derive.syntax" title="attributes.derive.syntax"><span>[attributes<wbr>.derive<wbr>.syntax]</span></a>
</div>

`derive` 属性使用 [MetaListPaths](../attributes.md#grammar-MetaListPaths) 语法来指定要调用的[派生宏](../procedural-macros.md#r-macro.proc.derive)路径列表。

<div class="rule" id="r-attributes.derive.allowed-positions"><a class="rule-link" href="#r-attributes.derive.allowed-positions" title="attributes.derive.allowed-positions"><span>[attributes<wbr>.derive<wbr>.allowed-positions]</span></a>
</div>

`derive` 属性只能应用于 [struct](../items/structs.md#r-items.struct)、[enum](../items/enumerations.md#r-items.enum) 和 [union](../items/unions.md#r-items.union)。

<div class="rule" id="r-attributes.derive.duplicates"><a class="rule-link" href="#r-attributes.derive.duplicates" title="attributes.derive.duplicates"><span>[attributes<wbr>.derive<wbr>.duplicates]</span></a>
</div>

`derive` 属性可以在一个项上使用任意次数。所有属性中列出的全部派生宏都会被调用。

<div class="rule" id="r-attributes.derive.stdlib"><a class="rule-link" href="#r-attributes.derive.stdlib" title="attributes.derive.stdlib"><span>[attributes<wbr>.derive<wbr>.stdlib]</span></a>
</div>

`derive` 属性在标准库中以下列名称导出：

- [`core::derive`](../../core/macros/builtin/attr.derive.html)
- [`std::derive`](../../core/macros/builtin/attr.derive.html)
- [`core::prelude::v1::derive`](../../core/macros/builtin/attr.derive.html)
- [`std::prelude::v1::derive`](../../core/macros/builtin/attr.derive.html)

<div class="rule" id="r-attributes.derive.built-in"><a class="rule-link" href="#r-attributes.derive.built-in" title="attributes.derive.built-in"><span>[attributes<wbr>.derive<wbr>.built-in]</span></a>
</div>

内置派生定义在[语言 prelude](../names/preludes.md#r-names.preludes.lang) 中。内置派生的列表如下：

- [`Clone`](../../core/clone/trait.Clone.html)
- [`Copy`](../../core/marker/trait.Copy.html)
- [`Debug`](../../core/fmt/macros/derive.Debug.html)
- [`Default`](../../core/default/trait.Default.html)
- [`Eq`](../../core/cmp/trait.Eq.html)
- [`Hash`](../../core/hash/macros/derive.Hash.html)
- [`Ord`](../../core/cmp/trait.Ord.html)
- [`PartialEq`](../../core/cmp/trait.PartialEq.html)
- [`PartialOrd`](../../core/cmp/trait.PartialOrd.html)

<div class="rule" id="r-attributes.derive.built-in-automatically_derived"><a class="rule-link" href="#r-attributes.derive.built-in-automatically_derived" title="attributes.derive.built-in-automatically_derived"><span>[attributes<wbr>.derive<wbr>.built-in-automatically_derived]</span></a>
</div>

内置派生会在它们生成的实现上包含 [`automatically_derived` 属性](derive.md#r-attributes.derive.automatically_derived)。

<div class="rule" id="r-attributes.derive.behavior"><a class="rule-link" href="#r-attributes.derive.behavior" title="attributes.derive.behavior"><span>[attributes<wbr>.derive<wbr>.behavior]</span></a>
</div>

在宏展开期间，对于派生列表中的每个元素，相应的派生宏会展开为零个或多个[项](../items.md)。

<!-- template:attributes -->

<div class="rule" id="r-attributes.derive.automatically_derived"><a class="rule-link" href="#r-attributes.derive.automatically_derived" title="attributes.derive.automatically_derived"><span>[attributes<wbr>.derive<wbr>.automatically_derived]</span></a>
</div>

## `automatically_derived` 属性

<div class="rule" id="r-attributes.derive.automatically_derived.intro"><a class="rule-link" href="#r-attributes.derive.automatically_derived.intro" title="attributes.derive.automatically_derived.intro"><span>[attributes<wbr>.derive<wbr>.automatically_derived<wbr>.intro]</span></a>
</div>

_`automatically_derived` [属性](../attributes.md#r-attributes)_ 用于标注[实现](../items/implementations.md)，以表明该实现是由[派生宏](../procedural-macros.md#r-macro.proc.derive)自动创建的。它没有直接效果，但工具和诊断 lint 可以使用它来检测这些自动生成的实现。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 给定 `struct Example` 上的 [`#[derive(Clone)]`](../../core/clone/derive.Clone.html)，[派生宏](../procedural-macros.md#r-macro.proc.derive)可以生成：
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

</div>

<div class="rule" id="r-attributes.derive.automatically_derived.syntax"><a class="rule-link" href="#r-attributes.derive.automatically_derived.syntax" title="attributes.derive.automatically_derived.syntax"><span>[attributes<wbr>.derive<wbr>.automatically_derived<wbr>.syntax]</span></a>
</div>

`automatically_derived` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-attributes.derive.automatically_derived.allowed-positions"><a class="rule-link" href="#r-attributes.derive.automatically_derived.allowed-positions" title="attributes.derive.automatically_derived.allowed-positions"><span>[attributes<wbr>.derive<wbr>.automatically_derived<wbr>.allowed-positions]</span></a>
</div>

`automatically_derived` 属性只能应用于[实现](../items/implementations.md)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="rule" id="r-attributes.derive.automatically_derived.duplicates"><a class="rule-link" href="#r-attributes.derive.automatically_derived.duplicates" title="attributes.derive.automatically_derived.duplicates"><span>[attributes<wbr>.derive<wbr>.automatically_derived<wbr>.duplicates]</span></a>
</div>

在一个实现上多次使用 `automatically_derived` 与使用一次具有相同效果。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次之后的任何使用发出 lint。

</div>

<div class="rule" id="r-attributes.derive.automatically_derived.behavior"><a class="rule-link" href="#r-attributes.derive.automatically_derived.behavior" title="attributes.derive.automatically_derived.behavior"><span>[attributes<wbr>.derive<wbr>.automatically_derived<wbr>.behavior]</span></a>
</div>

`automatically_derived` 属性没有任何行为。