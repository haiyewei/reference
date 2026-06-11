# 语法索引

本附录提供 token 和常见形式的索引，并链接到定义这些元素的位置。

## 关键字

|关键字|用途|
|---|--|
|`_`|[通配符模式](patterns.md#r-patterns.wildcard)、[推断的 const](items/generics.md#r-items.generics.const.inferred)、[推断类型](types/inferred.md#r-type.inferred)、[占位生命周期](lifetime-elision.md#r-lifetime-elision.function.explicit-placeholder)、[常量项](items/constant-items.md#r-items.const)、[extern crate](items/extern-crates.md#r-items.extern-crate)、[use 声明](items/use-declarations.md#r-items.use)、[解构赋值](expressions/underscore-expr.md#r-expr.placeholder)|
|`abstract`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`as`|[extern crate](items/extern-crates.md#r-items.extern-crate.as)、[use 声明](items/use-declarations.md#r-items.use.forms.as)、[类型转换表达式](expressions/operator-expr.md#r-expr.as)、[限定路径](paths.md#r-paths.qualified)|
|`async`|[async 函数](items/functions.md#r-items.fn.async)、[async 块](expressions/block-expr.md#r-expr.block.async)、[async 闭包](expressions/closure-expr.md#r-expr.closure.async)|
|`await`|[await 表达式](expressions/await-expr.md#r-expr.await)|
|`become`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`box`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`break`|[break 表达式](expressions/loop-expr.md#r-expr.loop.break)|
|`const`|[const 函数](const_eval.md#r-const-eval.const-fn)、[常量项](items/constant-items.md#r-items.const)、[const 泛型](items/generics.md#r-items.generics.const)、[const 块](expressions/block-expr.md#r-expr.block.const)、[原始借用运算符](expressions/operator-expr.md#r-expr.borrow.raw)、[裸指针类型](types/pointer.md#r-type.pointer.raw)、[const 汇编操作数](inline-assembly.md#r-asm.operand-type.supported-operands.const)|
|`continue`|[continue 表达式](expressions/loop-expr.md#r-expr.loop.continue)|
|`crate`|[extern crate](items/extern-crates.md#r-items.extern-crate)、[可见性](visibility-and-privacy.md#r-vis)、[路径](paths.md#r-paths)|
|`do`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`dyn`|[trait 对象](types/trait-object.md#r-type.trait-object)|
|`else`|[let 语句](statements.md#r-statement.let)、[if 表达式](expressions/if-expr.md#r-expr.if)|
|`enum`|[枚举](items/enumerations.md#r-items.enum)|
|`extern`|[extern crate](items/extern-crates.md#r-items.extern-crate)、[extern 函数限定符](items/functions.md#r-items.fn.extern)、[外部块](items/external-blocks.md#r-items.extern)、[extern 函数指针类型](types/function-pointer.md#r-type.fn-pointer.qualifiers)|
|`false`|[布尔类型](types/boolean.md#r-type.bool)、[布尔表达式](expressions/literal-expr.md#r-expr.literal)、[配置谓词](conditional-compilation.md#r-cfg)|
|`final`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`fn`|[函数](items/functions.md#r-items.fn)、[函数指针类型](types/function-pointer.md#r-type.fn-pointer)|
|`for`|[trait 实现](items/implementations.md#r-items.impl.trait)、[迭代器循环](expressions/loop-expr.md#r-expr.loop.for)、[高阶 trait 约束](trait-bounds.md#r-bound.higher-ranked)|
|`gen`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`if`|[if 表达式](expressions/if-expr.md#r-expr.if)、[match 守卫](expressions/match-expr.md#r-expr.match.guard)|
|`impl`|[固有 impl](items/implementations.md#r-items.impl.inherent)、[trait impl](items/implementations.md#r-items.impl.trait)、[impl trait 类型](types/impl-trait.md#r-type.impl-trait.return)、[匿名类型形参](types/impl-trait.md#r-type.impl-trait.param)|
|`in`|[可见性](visibility-and-privacy.md#r-vis)、[迭代器循环](expressions/loop-expr.md#r-expr.loop.for)、[汇编操作数](inline-assembly.md#r-asm.operand-type.supported-operands.in)|
|`let`|[let 语句](statements.md#r-statement.let)、[`if let` 模式](expressions/if-expr.md#r-expr.if.let)|
|`loop`|[无限循环](expressions/loop-expr.md#r-expr.loop.infinite)|
|`macro_rules`|[示例宏](macros-by-example.md#r-macro.decl)|
|`macro`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`match`|[match 表达式](expressions/match-expr.md#r-expr.match)|
|`mod`|[模块](items/modules.md#r-items.mod)|
|`move`|[闭包表达式](expressions/closure-expr.md#r-expr.closure)、[async 块](expressions/block-expr.md#r-expr.block.async)|
|`mut`|[借用表达式](expressions/operator-expr.md#r-expr.operator.borrow)、[标识符模式](patterns.md#r-patterns.ident)、[引用模式](patterns.md#r-patterns.ref)、[结构体模式](patterns.md#r-patterns.struct)、[引用类型](types/pointer.md#r-type.pointer.reference)、[裸指针类型](types/pointer.md#r-type.pointer.raw)、[self 形参](items/functions.md#r-items.fn.params.self-pat)、[静态项](items/static-items.md#r-items.static)|
|`override`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`priv`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`pub`|[可见性](visibility-and-privacy.md#r-vis)|
|`raw`|[借用表达式](expressions/operator-expr.md#r-expr.operator.borrow)、[原始汇编](inline-assembly.md#r-asm.options.supported-options.raw)|
|`ref`|[标识符模式](patterns.md#r-patterns.ident)、[结构体模式](patterns.md#r-patterns.struct)|
|`return`|[return 表达式](expressions/return-expr.md#r-expr.return)|
|`safe`|[外部块函数](items/external-blocks.md#r-items.extern.fn)、[外部块静态项](items/external-blocks.md#r-items.extern.static)|
|`self`|[extern crate](items/extern-crates.md#r-items.extern-crate.self)、[self 形参](items/functions.md#r-items.fn.params.self-pat)、[可见性](visibility-and-privacy.md#r-vis)、[`self` 路径](paths.md#r-paths.qualifiers.mod-self)|
|`Self`|[`Self` 类型路径](paths.md#r-paths.qualifiers.type-self)、[use 约束](trait-bounds.md#r-bound.use)|
|`static`|[静态项](items/static-items.md#r-items.static)、[`'static` 生命周期](trait-bounds.md#r-bound)|
|`struct`|[结构体](items/structs.md#r-items.struct)|
|`super`|[super 路径](paths.md#r-paths.qualifiers.super)、[可见性](visibility-and-privacy.md#r-vis)|
|`trait`|[trait 项](items/traits.md#r-items.traits)|
|`true`|[布尔类型](types/boolean.md#r-type.bool)、[布尔表达式](expressions/literal-expr.md#r-expr.literal)、[配置谓词](conditional-compilation.md#r-cfg)|
|`try`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`type`|[类型别名](items/type-aliases.md#r-items.type)|
|`typeof`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`union`|[联合体项](items/unions.md#r-items.union)|
|`unsafe`|[unsafe 块](expressions/block-expr.md#r-expr.block.unsafe)、[unsafe 属性](attributes.md#r-attributes.safety)、[unsafe 模块](items/modules.md#r-items.mod.unsafe)、[unsafe 函数](unsafe-keyword.md#r-unsafe.fn)、[unsafe 外部块](unsafe-keyword.md#r-unsafe.extern)、[unsafe 外部函数](items/external-blocks.md#r-items.extern.fn.safety)、[unsafe 外部静态项](items/external-blocks.md#r-items.extern.static.safety)、[unsafe trait](items/traits.md#r-items.traits.safety)、[unsafe trait 实现](items/implementations.md#r-items.impl.trait.safety)|
|`unsized`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`use`|[use 项](items/use-declarations.md#r-items.use)、[use 约束](trait-bounds.md#r-bound.use)|
|`virtual`|[保留关键字](keywords.md#r-lex.keywords.reserved)|
|`where`|[where 子句](items/generics.md#r-items.generics.where)|
|`while`|[谓词循环](expressions/loop-expr.md#r-expr.loop.while)|
|`yield`|[保留关键字](keywords.md#r-lex.keywords.reserved)|

## 运算符和标点

|符号|名称|用途|
|--|--|--|
|`+`|Plus|[加法](expressions/operator-expr.md#r-expr.arith-logic)、[trait 约束](trait-bounds.md#r-bound)、[宏 Kleene 匹配器](macros-by-example.md#r-macro.decl.repetition)|
|`-`|Minus|[减法](expressions/operator-expr.md#r-expr.arith-logic)、[求负](expressions/operator-expr.md#r-expr.negate)|
|`*`|Star|[乘法](expressions/operator-expr.md#r-expr.arith-logic)、[解引用](expressions/operator-expr.md#r-expr.deref)、[裸指针](types/pointer.md#r-type.pointer.raw)、[宏 Kleene 匹配器](macros-by-example.md#r-macro.decl.repetition)、[glob 导入](items/use-declarations.md#r-items.use.glob)|
|`/`|Slash|[除法](expressions/operator-expr.md#r-expr.arith-logic)|
|`%`|Percent|[余数](expressions/operator-expr.md#r-expr.arith-logic)|
|`^`|Caret|[按位和逻辑 XOR](expressions/operator-expr.md#r-expr.arith-logic)|
|`!`|Not|[按位和逻辑 NOT](expressions/operator-expr.md#r-expr.negate)、[宏调用](macros.md#r-macro.invocation)、[内部属性](attributes.md#r-attributes)、[never 类型](types/never.md#r-type.never)、[否定 impl](items/implementations.md#r-items.impl)|
|`&`|And|[按位和逻辑 AND](expressions/operator-expr.md#r-expr.arith-logic)、[借用](expressions/operator-expr.md#r-expr.operator.borrow)、[引用](types/pointer.md#r-type.pointer.reference)、[引用模式](patterns.md#r-patterns.ref)|
|`\|`|Or|[按位和逻辑 OR](expressions/operator-expr.md#r-expr.arith-logic)、[闭包](expressions/closure-expr.md#r-expr.closure)、[or 模式](patterns.md#r-patterns.or)、[if let](expressions/if-expr.md#r-expr.if.let)、[while let](expressions/loop-expr.md#r-expr.loop.while.let)|
|`&&`|AndAnd|[惰性 AND](expressions/operator-expr.md#r-expr.bool-logic)、[借用](expressions/operator-expr.md#r-expr.operator.borrow)、[引用](types/pointer.md#r-type.pointer.reference)、[引用模式](patterns.md#r-patterns.ref)|
|`\|\|`|OrOr|[惰性 OR](expressions/operator-expr.md#r-expr.bool-logic)、[闭包](expressions/closure-expr.md#r-expr.closure)|
|`<<`|Shl|[左移](expressions/operator-expr.md#r-expr.arith-logic)、[嵌套泛型](items/generics.md#r-items.generics)|
|`>>`|Shr|[右移](expressions/operator-expr.md#r-expr.arith-logic)、[嵌套泛型](items/generics.md#r-items.generics)|
|`+=`|PlusEq|[加法赋值](expressions/operator-expr.md#r-expr.compound-assign)|
|`-=`|MinusEq|[减法赋值](expressions/operator-expr.md#r-expr.compound-assign)|
|`*=`|StarEq|[乘法赋值](expressions/operator-expr.md#r-expr.compound-assign)|
|`/=`|SlashEq|[除法赋值](expressions/operator-expr.md#r-expr.compound-assign)|
|`%=`|PercentEq|[取余赋值](expressions/operator-expr.md#r-expr.compound-assign)|
|`^=`|CaretEq|[按位 XOR 赋值](expressions/operator-expr.md#r-expr.compound-assign)|
|`&=`|AndEq|[按位 AND 赋值](expressions/operator-expr.md#r-expr.compound-assign)|
|`\|=`|OrEq|[按位 OR 赋值](expressions/operator-expr.md#r-expr.compound-assign)|
|`<<=`|ShlEq|[左移赋值](expressions/operator-expr.md#r-expr.compound-assign)|
|`>>=`|ShrEq|[右移赋值](expressions/operator-expr.md#r-expr.compound-assign)、[嵌套泛型](items/generics.md#r-items.generics)|
|`=`|Eq|[赋值](expressions/operator-expr.md#r-expr.assign)、[let 语句](statements.md#r-statement.let)、[属性](attributes.md#r-attributes)、各种类型定义|
|`==`|EqEq|[等于](expressions/operator-expr.md#r-expr.cmp)|
|`!=`|Ne|[不等于](expressions/operator-expr.md#r-expr.cmp)|
|`>`|Gt|[大于](expressions/operator-expr.md#r-expr.cmp)、[泛型](items/generics.md#r-items.generics)、[路径](paths.md#r-paths)、[use 约束](trait-bounds.md#r-bound.use)|
|`<`|Lt|[小于](expressions/operator-expr.md#r-expr.cmp)、[泛型](items/generics.md#r-items.generics)、[路径](paths.md#r-paths)、[use 约束](trait-bounds.md#r-bound.use)|
|`>=`|Ge|[大于等于](expressions/operator-expr.md#r-expr.cmp)、[泛型](items/generics.md#r-items.generics)|
|`<=`|Le|[小于等于](expressions/operator-expr.md#r-expr.cmp)|
|`@`|At|[子模式绑定](patterns.md#r-patterns.ident.scrutinized)|
|`.`|Dot|[字段访问](expressions/field-expr.md#r-expr.field)、[元组索引](expressions/tuple-expr.md#r-expr.tuple-index)、[方法调用](expressions/method-call-expr.md#r-expr.method)、[await 表达式](expressions/await-expr.md#r-expr.await)|
|`..`|DotDot|[范围表达式](expressions/range-expr.md#r-expr.range)、[结构体表达式](expressions/struct-expr.md#r-expr.struct)、[剩余模式](patterns.md#r-patterns.rest)、[范围模式](patterns.md#r-patterns.range)、[结构体模式](patterns.md#r-patterns.struct)|
|`...`|DotDotDot|[可变参数函数](items/external-blocks.md#r-items.extern.variadic)、[范围模式](patterns.md#r-patterns.range)|
|`..=`|DotDotEq|[闭区间范围表达式](expressions/range-expr.md#r-expr.range)、[范围模式](patterns.md#r-patterns.range)|
|`,`|Comma|各种分隔符|
|`;`|Semi|各种项和语句的终止符、[数组表达式](expressions/array-expr.md#r-expr.array)、[数组类型](types/array.md#r-type.array)|
|`:`|Colon|各种分隔符|
|`::`|PathSep|[路径分隔符](paths.md#r-paths)|
|`->`|RArrow|[函数](items/functions.md#r-items.fn)、[闭包](expressions/closure-expr.md#r-expr.closure)、[函数指针类型](types/function-pointer.md#r-type.fn-pointer)|
|`=>`|FatArrow|[match 分支](expressions/match-expr.md#r-expr.match)、[宏](macros-by-example.md#r-macro.decl)|
|`<-`|LArrow|左箭头符号自 Rust 1.0 之前起就未被使用，但它仍被视为单个 token。|
|`#`|Pound|[属性](attributes.md#r-attributes)、[原始字符串字面量](tokens.md#r-lex.token.literal.str-raw)、[原始字节字符串字面量](tokens.md#r-lex.token.str-byte-raw)、[原始 C 字符串字面量](tokens.md#r-lex.token.str-c-raw)|
|`$`|Dollar|[宏](macros-by-example.md#r-macro.decl)|
|`?`|Question|[try 传播表达式](expressions/operator-expr.md#r-expr.try)、[放宽的 trait 约束](trait-bounds.md#r-bound.sized)、[宏 Kleene 匹配器](macros-by-example.md#r-macro.decl.repetition)|
|`~`|Tilde|波浪号运算符自 Rust 1.0 之前起就未被使用，但它的 token 仍可以使用。|

## 注释

|注释|用途|
|--|--|
|`//`|[行注释](comments.md#r-comments)|
|`//!`|[内部行注释](comments.md#r-comments)|
|`///`|[外部行文档注释](comments.md#r-comments)|
|`/*…*/`|[块注释](comments.md#r-comments)|
|`/*!…*/`|[内部块文档注释](comments.md#r-comments)|
|`/**…*/`|[外部块文档注释](comments.md#r-comments)|

## 其他 token

|Token|用途|
|-----|--|
|`ident`|[标识符](identifiers.md#r-ident)|
|`r#ident`|[原始标识符](identifiers.md#r-ident.raw)|
|`'ident`|[生命周期和循环标签](tokens.md#r-lex.token.life)|
|`'r#ident`|[原始生命周期和循环标签](tokens.md#r-lex.token.life)|
|`…u8`, `…i32`, `…f64`, `…usize`, …|[数字字面量](tokens.md#r-lex.token.literal.num)|
|`"…"`|[字符串字面量](tokens.md#r-lex.token.literal.str)|
|`r"…"`, `r#"…"#`, `r##"…"##`, …|[原始字符串字面量](tokens.md#r-lex.token.literal.str-raw)|
|`b"…"`|[字节字符串字面量](tokens.md#r-lex.token.str-byte)|
|`br"…"`, `br#"…"#`, `br##"…"##`, …|[原始字节字符串字面量](tokens.md#r-lex.token.str-byte-raw)|
|`'…'`|[字符字面量](tokens.md#r-lex.token.literal.char)|
|`b'…'`|[字节字面量](tokens.md#r-lex.token.byte)|
|`c"…"`|[C 字符串字面量](tokens.md#r-lex.token.str-c)|
|`cr"…"`, `cr#"…"#`, `cr##"…"##`, …|[原始 C 字符串字面量](tokens.md#r-lex.token.str-c-raw)|

## 宏

|语法|用途|
|--|--|
|`ident!(…)`<br>`ident! {…}`<br>`ident![…]`|[宏调用](macros.md#r-macro.invocation)|
|`$ident`|[宏元变量](macros-by-example.md#r-macro.decl.meta)|
|`$ident:kind`|[宏匹配器片段说明符](macros-by-example.md#r-macro.decl.meta.specifier)|
|`$(…)…`|[宏重复](macros-by-example.md#r-macro.decl.repetition)|

## 属性

|语法|用途|
|--|--|
|`#[meta]`|[外部属性](attributes.md#r-attributes.outer)|
|`#![meta]`|[内部属性](attributes.md#r-attributes.inner)|

## 表达式

|表达式|用途|
|---|--|
|`\|…\| expr`<br>`\|…\| -> Type { … }`|[闭包](expressions/closure-expr.md#r-expr.closure)|
|`ident::…`|[路径](paths.md#r-paths)|
|`::crate_name::…`|[显式 crate 路径](paths.md#r-paths.qualifiers.global-root)|
|`crate::…`|[crate 相对路径](paths.md#r-paths.qualifiers.crate)|
|`self::…`|[模块相对路径](paths.md#r-paths.qualifiers.mod-self)|
|`super::…`|[父模块路径](paths.md#r-paths.qualifiers.super)|
|`Type::…`<br>`<Type as Trait>::ident`|[关联项](items/associated-items.md#r-items.associated)|
|`<Type>::…`|[限定路径](paths.md#r-paths.qualified)，可用于没有名称的类型，例如 `<&T>::…`、`<[T]>::…` 等。|
|`Trait::method(…)`<br>`Type::method(…)`<br>`<Type as Trait>::method(…)`|[消歧方法调用](expressions/call-expr.md#r-expr.call.desugar)|
|`method::<…>(…)`<br>`path::<…>`|[泛型实参](items/generics.md#r-items.generics)，也称为 turbofish|
|`()`|[单元](types/tuple.md#r-type.tuple.unit)|
|`(expr)`|[带括号表达式](expressions/grouped-expr.md#r-expr.paren)|
|`(expr,)`|[单元素元组表达式](expressions/tuple-expr.md#r-expr.tuple)|
|`(expr, …)`|[元组表达式](expressions/tuple-expr.md#r-expr.tuple)|
|`expr(expr, …)`|[调用表达式](expressions/call-expr.md#r-expr.call)|
|`expr.0`, `expr.1`, …|[元组索引表达式](expressions/tuple-expr.md#r-expr.tuple-index)|
|`expr.ident`|[字段访问表达式](expressions/field-expr.md#r-expr.field)|
|`{…}`|[块表达式](expressions/block-expr.md#r-expr.block)|
|`Type {…}`|[结构体表达式](expressions/struct-expr.md#r-expr.struct)|
|`Type(…)`|[元组结构体构造器](items/structs.md#r-items.struct.tuple)|
|`[…]`|[数组表达式](expressions/array-expr.md#r-expr.array)|
|`[expr; len]`|[重复数组表达式](expressions/array-expr.md#r-expr.array)|
|`expr[..]`, `expr[a..]`, `expr[..b]`, `expr[a..b]`, `expr[a..=b]`, `expr[..=b]`|[数组和切片索引表达式](expressions/array-expr.md#r-expr.array.index)|
|`if expr {…} else {…}`|[if 表达式](expressions/if-expr.md#r-expr.if)|
|`match expr { pattern => {…} }`|[match 表达式](expressions/match-expr.md#r-expr.match)|
|`loop {…}`|[无限循环表达式](expressions/loop-expr.md#r-expr.loop.infinite)|
|`while expr {…}`|[谓词循环表达式](expressions/loop-expr.md#r-expr.loop.while)|
|`for pattern in expr {…}`|[迭代器循环](expressions/loop-expr.md#r-expr.loop.for)|
|`&expr`<br>`&mut expr`|[借用表达式](expressions/operator-expr.md#r-expr.operator.borrow)|
|`&raw const expr`<br>`&raw mut expr`|[原始借用表达式](expressions/operator-expr.md#r-expr.borrow.raw)|
|`*expr`|[解引用表达式](expressions/operator-expr.md#r-expr.deref)|
|`expr?`|[try 传播表达式](expressions/operator-expr.md#r-expr.try)|
|`-expr`|[求负表达式](expressions/operator-expr.md#r-expr.negate)|
|`!expr`|[按位和逻辑 NOT 表达式](expressions/operator-expr.md#r-expr.negate)|
|`expr as Type`|[类型转换表达式](expressions/operator-expr.md#r-expr.as)|

## 项

[项](items.md#r-items)是 crate 的组成部分。

|项|用途|
|-|--|
|`mod ident;`<br>`mod ident {…}`|[模块](items/modules.md#r-items.mod)|
|`use path;`|[use 声明](items/use-declarations.md#r-items.use)|
|`fn ident(…) {…}`|[函数](items/functions.md#r-items.fn)|
|`type Type = Type;`|[类型别名](items/type-aliases.md#r-items.type)|
|`struct ident {…}`|[结构体](items/structs.md#r-items.struct)|
|`enum ident {…}`|[枚举](items/enumerations.md#r-items.enum)|
|`union ident {…}`|[联合体](items/unions.md#r-items.union)|
|`trait ident {…}`|[trait](items/traits.md#r-items.traits)|
|`impl Type {…}`<br>`impl Type for Trait {…}`|[实现](items/implementations.md#r-items.impl)|
|`const ident = expr;`|[常量项](items/constant-items.md#r-items.const)|
|`static ident = expr;`|[静态项](items/static-items.md#r-items.static)|
|`extern "C" {…}`|[外部块](items/external-blocks.md#r-items.extern)|
|`fn ident<…>(…) …`<br>`struct ident<…> {…}`<br>`enum ident<…> {…}`<br>`impl<…> Type<…> {…}`|[泛型定义](items/generics.md#r-items.generics)|

## 类型表达式

[类型表达式](types.md#r-type.name)用于指代类型。

|类型|用途|
|--|--|
|`bool`, `u8`, `f64`, `str`, …|[原始类型](types.md#r-type.kinds)|
|`for<…>`|[高阶 trait 约束](trait-bounds.md#r-bound.higher-ranked)|
|`T: TraitA + TraitB`|[trait 约束](trait-bounds.md#r-bound)|
|`T: 'a + 'b`|[生命周期约束](trait-bounds.md#r-bound.lifetime)|
|`T: TraitA + 'a`|[trait 和生命周期约束](trait-bounds.md#r-bound)|
|`T: ?Sized`|[放宽的 trait 约束](trait-bounds.md#r-bound.sized)|
|`[Type; len]`|[数组类型](types/array.md#r-type.array)|
|`(Type, …)`|[元组类型](types/tuple.md#r-type.tuple)|
|`[Type]`|[切片类型](types/slice.md#r-type.slice)|
|`(Type)`|[带括号类型](types.md#r-type.name.parenthesized)|
|`impl Trait`|[impl trait 类型](types/impl-trait.md#r-type.impl-trait.return)、[匿名类型形参](types/impl-trait.md#r-type.impl-trait.param)|
|`dyn Trait`|[trait 对象类型](types/trait-object.md#r-type.trait-object)|
|`ident`<br>`ident::…`|[类型路径](types.md#r-type.name.path)（可以指代[结构体](items/structs.md#r-items.struct)、[枚举](items/enumerations.md#r-items.enum)、[联合体](items/unions.md#r-items.union)、[类型别名](items/type-aliases.md#r-items.type)、[trait](items/traits.md#r-items.traits)、[泛型](items/generics.md#r-items.generics)等）|
|`Type<…>`<br>`Trait<…>`|[泛型实参](items/generics.md#r-items.generics)（例如 `Vec<u8>`）|
|`Trait<ident = Type>`|[关联类型绑定](paths.md#r-paths.expr)（例如 `Iterator<Item = T>`）|
|`Trait<ident: …>`|[关联类型约束](paths.md#r-paths.expr)（例如 `Iterator<Item: Send>`）|
|`&Type`<br>`&mut Type`|[引用类型](types/pointer.md#r-type.pointer.reference)|
|`*mut Type`<br>`*const Type`|[裸指针类型](types/pointer.md#r-type.pointer.raw)|
|`fn(…) -> Type`|[函数指针类型](types/function-pointer.md#r-type.fn-pointer)|
|`_`|[推断类型](types/inferred.md#r-type.inferred)、[推断的 const](items/generics.md#r-items.generics.const.inferred)|
|`'_`|[占位生命周期](lifetime-elision.md#r-lifetime-elision.function.explicit-placeholder)|
|`!`|[never 类型](types/never.md#r-type.never)|

## 模式

[模式](patterns.md#r-patterns)用于匹配值。

|模式|用途|
|--|--|
|`"foo"`, `'a'`, `123`, `2.4`, …|[字面量模式](patterns.md#r-patterns.literal)|
|`ident`|[标识符模式](patterns.md#r-patterns.ident)|
|`_`|[通配符模式](patterns.md#r-patterns.wildcard)|
|`..`|[剩余模式](patterns.md#r-patterns.rest)|
|`a..`, `..b`, `a..b`, `a..=b`, `..=b`|[范围模式](patterns.md#r-patterns.range)|
|`&pattern`<br>`&mut pattern`|[引用模式](patterns.md#r-patterns.ref)|
|`path {…}`|[结构体模式](patterns.md#r-patterns.struct)|
|`path(…)`|[元组结构体模式](patterns.md#r-patterns.tuple-struct)|
|`(pattern, …)`|[元组模式](patterns.md#r-patterns.tuple)|
|`(pattern)`|[分组模式](patterns.md#r-patterns.paren)|
|`[pattern, …]`|[切片模式](patterns.md#r-patterns.slice)|
|`CONST`, `Enum::Variant`, …|[路径模式](patterns.md#r-patterns.path)|