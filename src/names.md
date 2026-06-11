<div class="rule" id="r-names"><a class="rule-link" href="#r-names" title="names"><span>[names]</span></a>
</div>

# 名称

<div class="rule" id="r-names.intro"><a class="rule-link" href="#r-names.intro" title="names.intro"><span>[names<wbr>.intro]</span></a>
</div>

\_实体_是源程序中可以通过某种方式引用的语言构造，通常经由[路径](paths.md)引用。实体包括[类型](types.md)、[项](items.md)、[泛型参数](items/generics.md)、[变量绑定](patterns.md)、[循环标签](expressions/loop-expr.md#loop-labels)、[生命周期](tokens.md#lifetimes-and-loop-labels)、[字段](expressions/field-expr.md)、[属性](attributes.md)和 [lint](attributes/diagnostics.md#lint-check-attributes)。

\_声明_是一种可以引入_名称_来指代实体的语法构造。实体名称在[_作用域_](names/scopes.md)内有效 --- 作用域是源文本中可以引用该名称的一片区域。

有些实体在源代码中[显式声明](#explicitly-declared-entities)，有些实体则作为语言或编译器扩展的一部分[隐式声明](#implicitly-declared-entities)。

[_路径_](paths.md)用于引用实体，该实体可能位于另一个模块或类型中。

生命周期和循环标签使用带有前导引号的[专用语法](tokens.md#lifetimes-and-loop-labels)。

名称被划分到不同的[_命名空间_](names/namespaces.md)中，从而允许不同命名空间中的实体共享同一名称而不发生冲突。

[_名称解析_](names/name-resolution.md)是在编译时将路径、标识符和标签关联到实体声明的过程。

对某些名称的访问可以根据其[_可见性_](visibility-and-privacy.md)而受到限制。

<div class="rule" id="r-names.explicit"><a class="rule-link" href="#r-names.explicit" title="names.explicit"><span>[names<wbr>.explicit]</span></a>
</div>

## 显式声明的实体

<div class="rule" id="r-names.explicit.list"><a class="rule-link" href="#r-names.explicit.list" title="names.explicit.list"><span>[names<wbr>.explicit<wbr>.list]</span></a>
</div>

在源代码中显式引入名称的实体包括：

<div class="rule" id="r-names.explicit.item-decl"><a class="rule-link" href="#r-names.explicit.item-decl" title="names.explicit.item-decl"><span>[names<wbr>.explicit<wbr>.item-decl]</span></a>
</div>

- [项](items.md)：
  - [模块声明](items/modules.md)
  - [外部 crate 声明](items/extern-crates.md)
  - [use 声明](items/use-declarations.md)
  - [函数声明](items/functions.md)和[函数参数](items/functions.md#function-parameters)
  - [类型别名](items/type-aliases.md)
  - [struct](items/structs.md)、[union](items/unions.md)、[enum](items/enumerations.md)、enum 变体声明及其具名字段
  - [常量项声明](items/constant-items.md)
  - [静态项声明](items/static-items.md)
  - [trait 项声明](items/traits.md)及其[关联项](items/associated-items.md)
  - [外部块项](items/external-blocks.md)
  - [`macro_rules` 声明](macros-by-example.md)和[匹配器元变量](macros-by-example.md#metavariables)
  - [实现](items/implementations.md)关联项

<div class="rule" id="r-names.explicit.expr"><a class="rule-link" href="#r-names.explicit.expr" title="names.explicit.expr"><span>[names<wbr>.explicit<wbr>.expr]</span></a>
</div>

- [表达式](expressions.md)：
  - [闭包](expressions/closure-expr.md)参数
  - [`while let`](expressions/loop-expr.md#while-let-patterns) 模式绑定
  - [`for`](expressions/loop-expr.md#iterator-loops) 模式绑定
  - [`if let`](expressions/if-expr.md#if-let-patterns) 模式绑定
  - [`match`](expressions/match-expr.md) 模式绑定
  - [循环标签](expressions/loop-expr.md#loop-labels)

<div class="rule" id="r-names.explicit.generics"><a class="rule-link" href="#r-names.explicit.generics" title="names.explicit.generics"><span>[names<wbr>.explicit<wbr>.generics]</span></a>
</div>

- [泛型参数](items/generics.md)

<div class="rule" id="r-names.explicit.higher-ranked-bounds"><a class="rule-link" href="#r-names.explicit.higher-ranked-bounds" title="names.explicit.higher-ranked-bounds"><span>[names<wbr>.explicit<wbr>.higher-ranked-bounds]</span></a>
</div>

- [高阶 trait 约束](trait-bounds.md#higher-ranked-trait-bounds)

<div class="rule" id="r-names.explicit.binding"><a class="rule-link" href="#r-names.explicit.binding" title="names.explicit.binding"><span>[names<wbr>.explicit<wbr>.binding]</span></a>
</div>

- [`let` 语句](statements.md#let-statements)模式绑定

<div class="rule" id="r-names.explicit.macro_use"><a class="rule-link" href="#r-names.explicit.macro_use" title="names.explicit.macro_use"><span>[names<wbr>.explicit<wbr>.macro_use]</span></a>
</div>

- [`macro_use` 属性](macros-by-example.md#the-macro_use-attribute)可以从另一个 crate 引入宏名称

<div class="rule" id="r-names.explicit.macro_export"><a class="rule-link" href="#r-names.explicit.macro_export" title="names.explicit.macro_export"><span>[names<wbr>.explicit<wbr>.macro_export]</span></a>
</div>

- [`macro_export` 属性](macros-by-example.md#the-macro_export-attribute)可以将宏的别名引入到 crate 根中

<div class="rule" id="r-names.explicit.macro-invocation"><a class="rule-link" href="#r-names.explicit.macro-invocation" title="names.explicit.macro-invocation"><span>[names<wbr>.explicit<wbr>.macro-invocation]</span></a>
</div>

此外，[宏调用](macros.md#macro-invocation)和[属性](attributes.md)可以通过展开为上述项之一来引入名称。

<div class="rule" id="r-names.implicit"><a class="rule-link" href="#r-names.implicit" title="names.implicit"><span>[names<wbr>.implicit]</span></a>
</div>

## 隐式声明的实体

<div class="rule" id="r-names.implicit.list"><a class="rule-link" href="#r-names.implicit.list" title="names.implicit.list"><span>[names<wbr>.implicit<wbr>.list]</span></a>
</div>

下列实体由语言隐式定义，或由编译器选项和扩展引入：

<div class="rule" id="r-names.implicit.primitive-types"><a class="rule-link" href="#r-names.implicit.primitive-types" title="names.implicit.primitive-types"><span>[names<wbr>.implicit<wbr>.primitive-types]</span></a>
</div>

- [语言 prelude](names/preludes.md#language-prelude)：
  - [布尔类型](types/boolean.md) --- `bool`
  - 文本类型 --- [`char`](types/char.md) 和 [`str`](types/str.md)
  - [整数类型](types/numeric.md#integer-types) --- `i8`、`i16`、`i32`、`i64`、`i128`、`u8`、`u16`、`u32`、`u64`、`u128`
  - [机器相关整数类型](types/numeric.md#machine-dependent-integer-types) --- `usize` 和 `isize`
  - [浮点类型](types/numeric.md#floating-point-types) --- `f32` 和 `f64`

<div class="rule" id="r-names.implicit.builtin-attributes"><a class="rule-link" href="#r-names.implicit.builtin-attributes" title="names.implicit.builtin-attributes"><span>[names<wbr>.implicit<wbr>.builtin-attributes]</span></a>
</div>

- [内置属性](attributes.md#built-in-attributes-index)

<div class="rule" id="r-names.implicit.prelude"><a class="rule-link" href="#r-names.implicit.prelude" title="names.implicit.prelude"><span>[names<wbr>.implicit<wbr>.prelude]</span></a>
</div>

- [标准库 prelude](names/preludes.md#standard-library-prelude) 的项、属性和宏

<div class="rule" id="r-names.implicit.stdlib"><a class="rule-link" href="#r-names.implicit.stdlib" title="names.implicit.stdlib"><span>[names<wbr>.implicit<wbr>.stdlib]</span></a>
</div>

- 根模块中的[标准库](names/preludes.md#extern-prelude) crate

<div class="rule" id="r-names.implicit.extern-prelude"><a class="rule-link" href="#r-names.implicit.extern-prelude" title="names.implicit.extern-prelude"><span>[names<wbr>.implicit<wbr>.extern-prelude]</span></a>
</div>

- 由编译器链接的[外部 crate](names/preludes.md#extern-prelude)

<div class="rule" id="r-names.implicit.tool-attributes"><a class="rule-link" href="#r-names.implicit.tool-attributes" title="names.implicit.tool-attributes"><span>[names<wbr>.implicit<wbr>.tool-attributes]</span></a>
</div>

- [工具属性](attributes.md#tool-attributes)

<div class="rule" id="r-names.implicit.lints"><a class="rule-link" href="#r-names.implicit.lints" title="names.implicit.lints"><span>[names<wbr>.implicit<wbr>.lints]</span></a>
</div>

- [Lint](attributes/diagnostics.md#lint-check-attributes) 和[工具 lint 属性](attributes/diagnostics.md#tool-lint-attributes)

<div class="rule" id="r-names.implicit.derive-helpers"><a class="rule-link" href="#r-names.implicit.derive-helpers" title="names.implicit.derive-helpers"><span>[names<wbr>.implicit<wbr>.derive-helpers]</span></a>
</div>

- [Derive 辅助属性](procedural-macros.md#derive-macro-helper-attributes)无需显式导入即可在项内有效

<div class="rule" id="r-names.implicit.lifetime-static"><a class="rule-link" href="#r-names.implicit.lifetime-static" title="names.implicit.lifetime-static"><span>[names<wbr>.implicit<wbr>.lifetime-static]</span></a>
</div>

- [`'static`](keywords.md#weak-keywords) 生命周期

<div class="rule" id="r-names.implicit.root"><a class="rule-link" href="#r-names.implicit.root" title="names.implicit.root"><span>[names<wbr>.implicit<wbr>.root]</span></a>
</div>

此外，crate 根模块没有名称，但可以用某些[路径限定符](paths.md#path-qualifiers)或别名引用。