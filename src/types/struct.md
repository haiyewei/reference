<div class="rule" id="r-type.struct"><a class="rule-link" href="#r-type.struct" title="type.struct"><span>[type<wbr>.struct]</span></a>
</div>

# 结构体类型

<div class="rule" id="r-type.struct.intro"><a class="rule-link" href="#r-type.struct.intro" title="type.struct.intro"><span>[type<wbr>.struct<wbr>.intro]</span></a>
</div>

`struct` _类型_ 是其他类型的异构积，这些其他类型称为该类型的 _字段_。[^structtype]

<div class="rule" id="r-type.struct.constructor"><a class="rule-link" href="#r-type.struct.constructor" title="type.struct.constructor"><span>[type<wbr>.struct<wbr>.constructor]</span></a>
</div>

可以使用 [结构体表达式](../expressions/struct-expr.md) 构造 `struct` 的新实例。

<div class="rule" id="r-type.struct.layout"><a class="rule-link" href="#r-type.struct.layout" title="type.struct.layout"><span>[type<wbr>.struct<wbr>.layout]</span></a>
</div>

`struct` 的内存布局默认未定义，以允许字段重排等编译器优化，但可以通过 [`repr` 属性](../type-layout.md#representations) 固定其布局。在任一情况下，都可以在相应的结构体 _表达式_ 中以任意顺序给出字段；生成的 `struct` 值始终具有相同的内存布局。

<div class="rule" id="r-type.struct.field-visibility"><a class="rule-link" href="#r-type.struct.field-visibility" title="type.struct.field-visibility"><span>[type<wbr>.struct<wbr>.field-visibility]</span></a>
</div>

`struct` 的字段可以由 [可见性修饰符](../visibility-and-privacy.md) 限定，以允许在模块外部访问结构体中的数据。

<div class="rule" id="r-type.struct.tuple"><a class="rule-link" href="#r-type.struct.tuple" title="type.struct.tuple"><span>[type<wbr>.struct<wbr>.tuple]</span></a>
</div>

_元组结构体_ 类型与结构体类型类似，只是字段是匿名的。

<div class="rule" id="r-type.struct.unit"><a class="rule-link" href="#r-type.struct.unit" title="type.struct.unit"><span>[type<wbr>.struct<wbr>.unit]</span></a>
</div>

_类单元结构体_ 类型与结构体类型类似，只是它没有字段。由关联的 [结构体表达式](../expressions/struct-expr.md) 构造的那一个值，是这种类型唯一拥有的值。

[^structtype]: `struct` 类型类似于 C 中的 `struct` 类型、ML 家族中的 _record_ 类型，或 Lisp 家族中的 _struct_ 类型。