r[type.union]
# 联合体类型

r[type.union.intro]
*联合体类型*是一种名义的异构类 C union，由 [`union` 项](../items/unions.md)的名称表示。

r[type.union.access]
联合体没有“活动字段”的概念。相反，每次访问联合体时，都会将联合体内容的一部分 transmute 为被访问字段的类型。

r[type.union.safety]
由于 transmute 可能导致意外行为或未定义行为，从联合体字段读取需要 `unsafe`。

r[type.union.constraint]
联合体字段类型也被限制为类型的一个子集，以确保它们永远不需要析构。更多细节请参见[项](../items/unions.md)文档。

r[type.union.layout]
`union` 的内存布局默认未定义（特别是，字段*不*必须位于偏移量 0），但可以使用 `#[repr(...)]` 属性来固定布局。

[`Copy`]: ../special-types-and-traits.md#copy
[item]: ../items/unions.md
