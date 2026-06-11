<div class="rule" id="r-type.enum"><a class="rule-link" href="#r-type.enum" title="type.enum"><span>[type<wbr>.enum]</span></a>
</div>

# 枚举类型

<div class="rule" id="r-type.enum.intro"><a class="rule-link" href="#r-type.enum.intro" title="type.enum.intro"><span>[type<wbr>.enum<wbr>.intro]</span></a>
</div>

_枚举类型_ 是一种名义的异构不交联合类型，由 [`enum` 项](../items/enumerations.md) 的名称表示。[^enumtype]

<div class="rule" id="r-type.enum.declaration"><a class="rule-link" href="#r-type.enum.declaration" title="type.enum.declaration"><span>[type<wbr>.enum<wbr>.declaration]</span></a>
</div>

一个 [`enum` 项](../items/enumerations.md) 同时声明类型和若干 _变体_，每个变体都有独立名称，并具有结构体、元组结构体或类单元结构体的语法。

<div class="rule" id="r-type.enum.constructor"><a class="rule-link" href="#r-type.enum.constructor" title="type.enum.constructor"><span>[type<wbr>.enum<wbr>.constructor]</span></a>
</div>

可以使用 [结构体表达式](../expressions/struct-expr.md) 构造 `enum` 的新实例。

<div class="rule" id="r-type.enum.value"><a class="rule-link" href="#r-type.enum.value" title="type.enum.value"><span>[type<wbr>.enum<wbr>.value]</span></a>
</div>

任何 `enum` 值消耗的内存都等于其对应 `enum` 类型中最大变体所需的内存，再加上存储判别值所需的大小。

<div class="rule" id="r-type.enum.name"><a class="rule-link" href="#r-type.enum.name" title="type.enum.name"><span>[type<wbr>.enum<wbr>.name]</span></a>
</div>

枚举类型不能作为类型被 _结构性地_ 表示，而必须通过对 [`enum` 项](../items/enumerations.md) 的具名引用来表示。

[^enumtype]: `enum` 类型类似于 Haskell 中的 `data` 构造器声明，或 Limbo 中的 _pick ADT_。