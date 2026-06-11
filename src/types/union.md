<div class="rule" id="r-type.union"><a class="rule-link" href="#r-type.union" title="type.union"><span>[type<wbr>.union]</span></a>
</div>

# 联合体类型

<div class="rule" id="r-type.union.intro"><a class="rule-link" href="#r-type.union.intro" title="type.union.intro"><span>[type<wbr>.union<wbr>.intro]</span></a>
</div>

_联合体类型_ 是一种名义的异构类 C 联合体，由 [`union` 项](../items/unions.md) 的名称表示。

<div class="rule" id="r-type.union.access"><a class="rule-link" href="#r-type.union.access" title="type.union.access"><span>[type<wbr>.union<wbr>.access]</span></a>
</div>

联合体没有“活动字段”的概念。相反，每次访问联合体时，都会将联合体内容的一部分转换为被访问字段的类型。

<div class="rule" id="r-type.union.safety"><a class="rule-link" href="#r-type.union.safety" title="type.union.safety"><span>[type<wbr>.union<wbr>.safety]</span></a>
</div>

由于转换可能导致意外行为或未定义行为，从联合体字段读取需要 `unsafe`。

<div class="rule" id="r-type.union.constraint"><a class="rule-link" href="#r-type.union.constraint" title="type.union.constraint"><span>[type<wbr>.union<wbr>.constraint]</span></a>
</div>

联合体字段类型也被限制为类型的一个子集，以确保它们永远不需要析构。更多细节请参见 [项](../items/unions.md) 的文档。

<div class="rule" id="r-type.union.layout"><a class="rule-link" href="#r-type.union.layout" title="type.union.layout"><span>[type<wbr>.union<wbr>.layout]</span></a>
</div>

`union` 的内存布局默认未定义（特别是，字段_不_必须位于偏移量 0），但可以使用 `#[repr(...)]` 属性来固定布局。