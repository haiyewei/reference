r[names]
# 名称

r[names.intro]
*实体*是一种语言构造，可以在源程序中以某种方式引用，通常经由[路径](paths.md)引用。实体包括[类型](types.md)、[项](items.md)、[泛型参数](items/generics.md)、[变量绑定](patterns.md)、[循环标签](expressions/loop-expr.md#loop-labels)、[生命周期](tokens.md#lifetimes-and-loop-labels)、[字段](expressions/field-expr.md)、[属性](attributes.md)和 [lint](attributes/diagnostics.md#lint-check-attributes)。

*声明*是一种可以引入*名称*来指代实体的语法构造。实体名称在[*作用域*](names/scopes.md)内有效 --- 作用域是源文本中可以引用该名称的一片区域。

有些实体在源代码中[显式声明](#r-names.explicit)，有些实体则作为语言或编译器扩展的一部分[隐式声明](#r-names.implicit)。

[*路径*](paths.md)用于引用实体，该实体可能位于另一个模块或类型中。

生命周期和循环标签使用带有前导引号的[专用语法](tokens.md#lifetimes-and-loop-labels)。

名称被划分到不同的[*命名空间*](names/namespaces.md)中，从而允许不同命名空间中的实体共享同一名称而不发生冲突。

[*名称解析*](names/name-resolution.md)是在编译时将路径、标识符和标签关联到实体声明的过程。

对某些名称的访问可以根据其[*可见性*](visibility-and-privacy.md)而受到限制。

r[names.explicit]
## 显式声明的实体

r[names.explicit.list]
在源代码中显式引入名称的实体包括：

r[names.explicit.item-decl]
* [项](items.md)：
    * [模块声明](items/modules.md)
    * [外部 crate 声明](items/extern-crates.md)
    * [use 声明](items/use-declarations.md)
    * [函数声明](items/functions.md)和[函数参数](items/functions.md#function-parameters)
    * [类型别名](items/type-aliases.md)
    * [struct](items/structs.md)、[union](items/unions.md)、[enum](items/enumerations.md)、enum 变体声明及其具名字段
    * [常量项声明](items/constant-items.md)
    * [静态项声明](items/static-items.md)
    * [trait 项声明](items/traits.md)及其[关联项](items/associated-items.md)
    * [外部块项](items/external-blocks.md)
    * [`macro_rules` 声明](macros-by-example.md)和[匹配器元变量](macros-by-example.md#metavariables)
    * [实现](items/implementations.md)关联项

r[names.explicit.expr]
* [表达式](expressions.md)：
    * [闭包](expressions/closure-expr.md)参数
    * [`while let`](expressions/loop-expr.md#while-let-patterns) 模式绑定
    * [`for`](expressions/loop-expr.md#iterator-loops) 模式绑定
    * [`if let`](expressions/if-expr.md#if-let-patterns) 模式绑定
    * [`match`](expressions/match-expr.md) 模式绑定
    * [循环标签](expressions/loop-expr.md#loop-labels)

r[names.explicit.generics]
* [泛型参数](items/generics.md)

r[names.explicit.higher-ranked-bounds]
* [高阶 trait 约束](trait-bounds.md#higher-ranked-trait-bounds)

r[names.explicit.binding]
* [`let` 语句](statements.md#let-statements)模式绑定

r[names.explicit.macro_use]
* [`macro_use` 属性](macros-by-example.md#the-macro_use-attribute)可以从另一个 crate 引入宏名称

r[names.explicit.macro_export]
* [`macro_export` 属性](macros-by-example.md#the-macro_export-attribute)可以将宏的别名引入到 crate 根中

r[names.explicit.macro-invocation]
此外，[宏调用](macros.md#r-macro.invocation)和[属性](attributes.md)可以通过展开为上述项之一来引入名称。

r[names.implicit]
## 隐式声明的实体

r[names.implicit.list]
下列实体由语言隐式定义，或由编译器选项和扩展引入：

r[names.implicit.primitive-types]
* [语言 prelude](names/preludes.md#language-prelude)：
    * [布尔类型](types/boolean.md) --- `bool`
    * 文本类型 --- [`char`](types/char.md) 和 [`str`](types/str.md)
    * [整数类型](types/numeric.md#integer-types) --- `i8`、`i16`、`i32`、`i64`、`i128`、`u8`、`u16`、`u32`、`u64`、`u128`
    * [机器相关整数类型](types/numeric.md#machine-dependent-integer-types) --- `usize` 和 `isize`
    * [浮点类型](types/numeric.md#floating-point-types) --- `f32` 和 `f64`

r[names.implicit.builtin-attributes]
* [内置属性](attributes.md#built-in-attributes-index)

r[names.implicit.prelude]
* [标准库 prelude](names/preludes.md#standard-library-prelude) 的项、属性和宏

r[names.implicit.stdlib]
* 根模块中的[标准库](names/preludes.md#extern-prelude) crate

r[names.implicit.extern-prelude]
* 由编译器链接的[外部 crate](names/preludes.md#extern-prelude)

r[names.implicit.tool-attributes]
* [工具属性](attributes.md#tool-attributes)

r[names.implicit.lints]
* [Lint](attributes/diagnostics.md#lint-check-attributes) 和[工具 lint 属性](attributes/diagnostics.md#tool-lint-attributes)

r[names.implicit.derive-helpers]
* [Derive 辅助属性](procedural-macros.md#derive-macro-helper-attributes)无需显式导入即可在项内有效

r[names.implicit.lifetime-static]
* [`'static`](keywords.md#weak-keywords) 生命周期

r[names.implicit.root]
此外，crate 根模块没有名称，但可以通过某些[路径限定符](paths.md#r-paths.qualifiers)或别名引用。

[*Name resolution*]: names/name-resolution.md
[*namespaces*]: names/namespaces.md
[*paths*]: paths.md
[*scope*]: names/scopes.md
[*visibility*]: visibility-and-privacy.md
[`'static`]: keywords.md#weak-keywords
[`char`]: types/char.md
[`for`]: expressions/loop-expr.md#iterator-loops
[`if let`]: expressions/if-expr.md#if-let-patterns
[`let` statement]: statements.md#let-statements
[`macro_export` attribute]: macros-by-example.md#the-macro_export-attribute
[`macro_rules` declarations]: macros-by-example.md
[`macro_use` attribute]: macros-by-example.md#the-macro_use-attribute
[`match`]: expressions/match-expr.md
[`str`]: types/str.md
[`while let`]: expressions/loop-expr.md#while-let-patterns
[associated items]: items/associated-items.md
[attributes]: attributes.md
[Boolean type]: types/boolean.md
[Built-in attributes]: attributes.md#built-in-attributes-index
[Closure]: expressions/closure-expr.md
[Constant item declarations]: items/constant-items.md
[Derive helper attributes]: procedural-macros.md#derive-macro-helper-attributes
[enum]: items/enumerations.md
[Expressions]: expressions.md
[extern-prelude]: names/preludes.md#extern-prelude
[External block items]: items/external-blocks.md
[External crate declarations]: items/extern-crates.md
[fields]: expressions/field-expr.md
[floating-point types]: types/numeric.md#floating-point-types
[Function declarations]: items/functions.md
[function parameters]: items/functions.md#function-parameters
[Generic parameters]: items/generics.md
[Higher ranked trait bounds]: trait-bounds.md#higher-ranked-trait-bounds
[Implementation]: items/implementations.md
[Integer types]: types/numeric.md#integer-types
[Items]: items.md
[Language prelude]: names/preludes.md#language-prelude
[lifetimes-and-loop-labels]: tokens.md#lifetimes-and-loop-labels
[lifetimes]: tokens.md#lifetimes-and-loop-labels
[Lints]: attributes/diagnostics.md#lint-check-attributes
[Loop labels]: expressions/loop-expr.md#loop-labels
[Machine-dependent integer types]: types/numeric.md#machine-dependent-integer-types
[macro invocations]: macros.md#macro-invocation
[matcher metavariables]: macros-by-example.md#metavariables
[Module declarations]: items/modules.md
[path]: paths.md
[path qualifiers]: paths.md#path-qualifiers
[Standard library prelude]: names/preludes.md#standard-library-prelude
[Static item declarations]: items/static-items.md
[struct]: items/structs.md
[Tool attributes]: attributes.md#tool-attributes
[tool lint attributes]: attributes/diagnostics.md#tool-lint-attributes
[Trait item declarations]: items/traits.md
[Type aliases]: items/type-aliases.md
[types]: types.md
[union]: items/unions.md
[Use declarations]: items/use-declarations.md
[variable bindings]: patterns.md
