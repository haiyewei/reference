r[type.enum]
# 枚举类型

r[type.enum.intro]
*枚举类型*是一种名义的异构不交联合类型，由 [`enum` 项](../items/enumerations.md)的名称表示。[^enumtype]

r[type.enum.declaration]
一个 [`enum` 项](../items/enumerations.md)同时声明类型和若干*变体*，每个变体都有独立名称，并具有结构体、元组结构体或类单元结构体的语法。

r[type.enum.constructor]
可以使用 [结构体表达式](../expressions/struct-expr.md)构造 `enum` 的新实例。

r[type.enum.value]
任何 `enum` 值消耗的内存都等于其对应 `enum` 类型中最大变体所需的内存，再加上存储判别值所需的大小。

r[type.enum.name]
枚举类型不能作为类型被*结构性地*表示，而必须通过对 [`enum` 项](../items/enumerations.md)的具名引用来表示。

[^enumtype]: `enum` 类型类似于 Haskell 中的 `data` 构造器声明，或 Limbo 中的 _pick ADT_。

[`enum` item]: ../items/enumerations.md
[struct expression]: ../expressions/struct-expr.md
