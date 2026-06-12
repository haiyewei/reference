r[type.struct]
# 结构体类型

r[type.struct.intro]
`struct` *类型*是其他类型的异构积，这些其他类型称为该类型的*字段*。[^structtype]

r[type.struct.constructor]
可以使用[结构体表达式](../expressions/struct-expr.md)构造 `struct` 的新实例。

r[type.struct.layout]
`struct` 的内存布局默认未定义，以允许字段重排等编译器优化，但可以通过 [`repr` 属性](../type-layout.md#representations)固定其布局。在任一情况下，都可以在相应的 struct *表达式*中以任意顺序给出字段；生成的 `struct` 值始终具有相同的内存布局。

r[type.struct.field-visibility]
`struct` 的字段可以由[可见性修饰符](../visibility-and-privacy.md)限定，以允许在模块外部访问结构体中的数据。

r[type.struct.tuple]
*元组结构体*类型与结构体类型类似，只是字段是匿名的。

r[type.struct.unit]
*类单元结构体*类型与结构体类型类似，只是它没有字段。由关联的[结构体表达式](../expressions/struct-expr.md)构造的那一个值，是这种类型唯一拥有的值。

[^structtype]: `struct` 类型类似于 C 中的 `struct` 类型、ML 家族中的 _record_ 类型，或 Lisp 家族中的 _struct_ 类型。

[`repr` attribute]: ../type-layout.md#representations
[struct expression]: ../expressions/struct-expr.md
[visibility modifiers]: ../visibility-and-privacy.md
