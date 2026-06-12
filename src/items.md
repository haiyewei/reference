r[items]
# 项

r[items.syntax]
```grammar,items
Item ->
    OuterAttribute* ( VisItem | MacroItem )

VisItem ->
    Visibility?
    (
        Module
      | ExternCrate
      | UseDeclaration
      | Function
      | TypeAlias
      | Struct
      | Enumeration
      | Union
      | ConstantItem
      | StaticItem
      | Trait
      | Implementation
      | ExternBlock
    )

MacroItem ->
      MacroInvocationSemi
    | MacroRulesDefinition
```

r[items.intro]
*项*是 crate 的组成部分。项在 crate 中由一组嵌套的[模块](items/modules.md)组织起来。每个 crate 都有一个单一的“最外层”匿名模块；crate 中的所有其他项都在该 crate 的模块树中具有[路径](paths.md)。

r[items.static-def]
项完全在编译时确定，通常在执行期间保持固定，并且可以驻留在只读内存中。

r[items.kinds]
项有若干种：

* [模块](items/modules.md)
* [`extern crate` 声明](items/extern-crates.md)
* [`use` 声明](items/use-declarations.md)
* [函数定义](items/functions.md)
* [类型别名定义](items/type-aliases.md)
* [结构体定义](items/structs.md)
* [枚举定义](items/enumerations.md)
* [联合体定义](items/unions.md)
* [常量项](items/constant-items.md)
* [静态项](items/static-items.md)
* [trait 定义](items/traits.md)
* [实现](items/implementations.md)
* [`extern` 块](items/external-blocks.md)

r[items.locations]
项可以在 [crate 的根](crates-and-source-files.md)、[模块](items/modules.md)或[块表达式](expressions/block-expr.md)中声明。

r[items.associated-locations]
项的一个子集称为[关联项](items/associated-items.md)，可以在 [trait](items/traits.md) 和[实现](items/implementations.md)中声明。

r[items.extern-locations]
项的一个子集称为外部项，可以在 [`extern` 块](items/external-blocks.md)中声明。

r[items.decl-order]
项可以按任意顺序定义，但具有自身作用域行为的 [`macro_rules`](macros-by-example.md) 除外。

r[items.name-resolution]
项名称的[名称解析](names/name-resolution.md)允许项定义在模块或块中引用该项的位置之前或之后。

有关项的作用域规则的信息，参见[项作用域](names/scopes.md#item-scopes)。

[`extern crate` declarations]: items/extern-crates.md
[`extern` blocks]: items/external-blocks.md
[`macro_rules`]: macros-by-example.md
[`use` declarations]: items/use-declarations.md
[associated items]: items/associated-items.md
[block expression]: expressions/block-expr.md
[constant items]: items/constant-items.md
[enumeration definitions]: items/enumerations.md
[function definitions]: items/functions.md
[implementations]: items/implementations.md
[item scopes]: names/scopes.md#item-scopes
[modules]: items/modules.md
[name resolution]: names/name-resolution.md
[paths]: paths.md
[root of the crate]: crates-and-source-files.md
[statement]: statements.md
[static items]: items/static-items.md
[struct definitions]: items/structs.md
[trait definitions]: items/traits.md
[traits]: items/traits.md
[type alias definitions]: items/type-aliases.md
[union definitions]: items/unions.md
