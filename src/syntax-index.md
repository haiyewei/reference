# 语法索引

本附录提供 token 和常见形式的索引，并链接到定义这些元素的位置。

## 关键字

| 关键字 | 用途 |
|---------------|-----|
| `_` | [通配符模式](patterns.wildcard)、[推断的 const](items.generics.const.inferred)、[推断类型](type.inferred)、[占位生命周期](lifetime-elision.function.explicit-placeholder)、[常量项](items.const)、[extern crate](items.extern-crate)、[use 声明](items.use)、[解构赋值](expr.placeholder) |
| `abstract` | [保留关键字](lex.keywords.reserved) |
| `as` | [extern crate](items.extern-crate.as)、[use 声明](items.use.forms.as)、[类型转换表达式](expr.as)、[限定路径](paths.qualified) |
| `async` | [async 函数](items.fn.async)、[async 块](expr.block.async)、[async 闭包](expr.closure.async) |
| `await` | [await 表达式](expr.await) |
| `become` | [保留关键字](lex.keywords.reserved) |
| `box` | [保留关键字](lex.keywords.reserved) |
| `break` | [break 表达式](expr.loop.break) |
| `const` | [const 函数](const-eval.const-fn)、[常量项](items.const)、[const 泛型](items.generics.const)、[const 块](expr.block.const)、[原始借用运算符](expr.borrow.raw)、[裸指针类型](type.pointer.raw)、[const 汇编操作数](asm.operand-type.supported-operands.const) |
| `continue` | [continue 表达式](expr.loop.continue) |
| `crate` | [extern crate](items.extern-crate)、[可见性](vis)、[路径](paths) |
| `do` | [保留关键字](lex.keywords.reserved) |
| `dyn` | [trait 对象](type.trait-object) |
| `else` | [let 语句](statement.let)、[if 表达式](expr.if) |
| `enum` | [枚举](items.enum) |
| `extern` | [extern crate](items.extern-crate)、[extern 函数限定符](items.fn.extern)、[外部块](items.extern)、[extern 函数指针类型](type.fn-pointer.qualifiers) |
| `false` | [布尔类型](type.bool)、[布尔表达式](expr.literal)、[配置谓词](cfg) |
| `final` | [保留关键字](lex.keywords.reserved) |
| `fn` | [函数](items.fn)、[函数指针类型](type.fn-pointer) |
| `for` | [trait 实现](items.impl.trait)、[迭代器循环](expr.loop.for)、[高阶 trait 约束](bound.higher-ranked) |
| `gen` | [保留关键字](lex.keywords.reserved) |
| `if` | [if 表达式](expr.if)、[match 守卫](expr.match.guard) |
| `impl` | [固有 impl](items.impl.inherent)、[trait impl](items.impl.trait)、[impl trait 类型](type.impl-trait.return)、[匿名类型形参](type.impl-trait.param) |
| `in` | [可见性](vis)、[迭代器循环](expr.loop.for)、[汇编操作数](asm.operand-type.supported-operands.in) |
| `let` | [let 语句](statement.let)、[`if let` 模式](expr.if.let) |
| `loop` | [无限循环](expr.loop.infinite) |
| `macro_rules` | [示例宏](macro.decl) |
| `macro` | [保留关键字](lex.keywords.reserved) |
| `match` | [match 表达式](expr.match) |
| `mod` | [模块](items.mod) |
| `move` | [闭包表达式](expr.closure)、[async 块](expr.block.async) |
| `mut` | [借用表达式](expr.operator.borrow)、[标识符模式](patterns.ident)、[引用模式](patterns.ref)、[结构体模式](patterns.struct)、[引用类型](type.pointer.reference)、[裸指针类型](type.pointer.raw)、[self 形参](items.fn.params.self-pat)、[静态项](items.static) |
| `override` | [保留关键字](lex.keywords.reserved) |
| `priv` | [保留关键字](lex.keywords.reserved) |
| `pub` | [可见性](vis) |
| `raw` | [借用表达式](expr.operator.borrow)、[原始汇编](asm.options.supported-options.raw) |
| `ref` | [标识符模式](patterns.ident)、[结构体模式](patterns.struct) |
| `return` | [return 表达式](expr.return) |
| `safe` | [外部块函数](items.extern.fn)、[外部块静态项](items.extern.static) |
| `self` | [extern crate](items.extern-crate.self)、[self 形参](items.fn.params.self-pat)、[可见性](vis)、[`self` 路径](paths.qualifiers.mod-self) |
| `Self` | [`Self` 类型路径](paths.qualifiers.type-self)、[use 约束](bound.use) |
| `static` | [静态项](items.static)、[`'static` 生命周期](bound) |
| `struct` | [结构体](items.struct) |
| `super` | [super 路径](paths.qualifiers.super)、[可见性](vis) |
| `trait` | [trait 项](items.traits) |
| `true` | [布尔类型](type.bool)、[布尔表达式](expr.literal)、[配置谓词](cfg) |
| `try` | [保留关键字](lex.keywords.reserved) |
| `type` | [类型别名](items.type) |
| `typeof` | [保留关键字](lex.keywords.reserved) |
| `union` | [联合体项](items.union) |
| `unsafe` | [unsafe 块](expr.block.unsafe)、[unsafe 属性](attributes.safety)、[unsafe 模块](items.mod.unsafe)、[unsafe 函数](unsafe.fn)、[unsafe 外部块](unsafe.extern)、[unsafe 外部函数](items.extern.fn.safety)、[unsafe 外部静态项](items.extern.static.safety)、[unsafe trait](items.traits.safety)、[unsafe trait 实现](items.impl.trait.safety) |
| `unsized` | [保留关键字](lex.keywords.reserved) |
| `use` | [use 项](items.use)、[use 约束](bound.use) |
| `virtual` | [保留关键字](lex.keywords.reserved) |
| `where` | [where 子句](items.generics.where) |
| `while` | [谓词循环](expr.loop.while) |
| `yield` | [保留关键字](lex.keywords.reserved) |

## 运算符和标点

| 符号 | 名称 | 用途 |
|--------|-------------|-----|
| `+` | Plus | [加法](expr.arith-logic)、[trait 约束](bound)、[宏 Kleene 匹配器](macro.decl.repetition) |
| `-` | Minus | [减法](expr.arith-logic)、[求负](expr.negate) |
| `*` | Star | [乘法](expr.arith-logic)、[解引用](expr.deref)、[裸指针](type.pointer.raw)、[宏 Kleene 匹配器](macro.decl.repetition)、[glob 导入](items.use.glob) |
| `/` | Slash | [除法](expr.arith-logic) |
| `%` | Percent | [余数](expr.arith-logic) |
| `^` | Caret | [按位和逻辑 XOR](expr.arith-logic) |
| `!` | Not | [按位和逻辑 NOT](expr.negate)、[宏调用](macro.invocation)、[内部属性](attributes)、[never 类型](type.never)、[否定 impl](items.impl) |
| `&` | And | [按位和逻辑 AND](expr.arith-logic)、[借用](expr.operator.borrow)、[引用](type.pointer.reference)、[引用模式](patterns.ref) |
| `\|` | Or | [按位和逻辑 OR](expr.arith-logic)、[闭包](expr.closure)、[or 模式](patterns.or)、[if let](expr.if.let)、[while let](expr.loop.while.let) |
| `&&` | AndAnd | [惰性 AND](expr.bool-logic)、[借用](expr.operator.borrow)、[引用](type.pointer.reference)、[引用模式](patterns.ref) |
| `\|\|` | OrOr | [惰性 OR](expr.bool-logic)、[闭包](expr.closure) |
| `<<` | Shl | [左移](expr.arith-logic)、[嵌套泛型](items.generics) |
| `>>` | Shr | [右移](expr.arith-logic)、[嵌套泛型](items.generics) |
| `+=` | PlusEq | [加法赋值](expr.compound-assign) |
| `-=` | MinusEq | [减法赋值](expr.compound-assign) |
| `*=` | StarEq | [乘法赋值](expr.compound-assign) |
| `/=` | SlashEq | [除法赋值](expr.compound-assign) |
| `%=` | PercentEq | [取余赋值](expr.compound-assign) |
| `^=` | CaretEq | [按位 XOR 赋值](expr.compound-assign) |
| `&=` | AndEq | [按位 AND 赋值](expr.compound-assign) |
| `\|=` | OrEq | [按位 OR 赋值](expr.compound-assign) |
| `<<=` | ShlEq | [左移赋值](expr.compound-assign) |
| `>>=` | ShrEq | [右移赋值](expr.compound-assign)、[嵌套泛型](items.generics) |
| `=` | Eq | [赋值](expr.assign)、[let 语句](statement.let)、[属性](attributes)、各种类型定义 |
| `==` | EqEq | [等于](expr.cmp) |
| `!=` | Ne | [不等于](expr.cmp) |
| `>` | Gt | [大于](expr.cmp)、[泛型](items.generics)、[路径](paths)、[use 约束](bound.use) |
| `<` | Lt | [小于](expr.cmp)、[泛型](items.generics)、[路径](paths)、[use 约束](bound.use) |
| `>=` | Ge | [大于等于](expr.cmp)、[泛型](items.generics) |
| `<=` | Le | [小于等于](expr.cmp) |
| `@` | At | [子模式绑定](patterns.ident.scrutinized) |
| `.` | Dot | [字段访问](expr.field)、[元组索引](expr.tuple-index)、[方法调用](expr.method)、[await 表达式](expr.await) |
| `..` | DotDot | [范围表达式](expr.range)、[结构体表达式](expr.struct)、[剩余模式](patterns.rest)、[范围模式](patterns.range)、[结构体模式](patterns.struct) |
| `...` | DotDotDot | [可变参数函数](items.extern.variadic)、[范围模式](patterns.range) |
| `..=` | DotDotEq | [闭区间范围表达式](expr.range)、[范围模式](patterns.range) |
| `,` | Comma | 各种分隔符 |
| `;` | Semi | 各种项和语句的终止符、[数组表达式](expr.array)、[数组类型](type.array) |
| `:` | Colon | 各种分隔符 |
| `::` | PathSep | [路径分隔符](paths) |
| `->` | RArrow | [函数](items.fn)、[闭包](expr.closure)、[函数指针类型](type.fn-pointer) |
| `=>` | FatArrow | [match 分支](expr.match)、[宏](macro.decl) |
| `<-` | LArrow | 左箭头符号自 Rust 1.0 之前起就未被使用，但它仍被视为单个 token。 |
| `#` | Pound | [属性](attributes)、[原始字符串字面量](lex.token.literal.str-raw)、[原始字节字符串字面量](lex.token.str-byte-raw)、[原始 C 字符串字面量](lex.token.str-c-raw) |
| `$` | Dollar | [宏](macro.decl) |
| `?` | Question | [try 传播表达式](expr.try)、[放宽的 trait 约束](bound.sized)、[宏 Kleene 匹配器](macro.decl.repetition) |
| `~` | Tilde | 波浪号运算符自 Rust 1.0 之前起就未被使用，但它的 token 仍可以使用。 |

## 注释

| 注释 | 用途 |
|----------|-----|
| `//` | [行注释](comments) |
| `//!` | [内部行注释](comments) |
| `///` | [外部行文档注释](comments) |
| `/*…*/` | [块注释](comments) |
| `/*!…*/` | [内部块文档注释](comments) |
| `/**…*/` | [外部块文档注释](comments) |

## 其他 token

| Token | 用途 |
|--------------|-----|
| `ident` | [标识符](ident) |
| `r#ident` | [原始标识符](ident.raw) |
| `'ident` | [生命周期和循环标签](lex.token.life) |
| `'r#ident` | [原始生命周期和循环标签](lex.token.life) |
| `…u8`, `…i32`, `…f64`, `…usize`, … | [数字字面量](lex.token.literal.num) |
| `"…"` | [字符串字面量](lex.token.literal.str) |
| `r"…"`, `r#"…"#`, `r##"…"##`, … | [原始字符串字面量](lex.token.literal.str-raw) |
| `b"…"` | [字节字符串字面量](lex.token.str-byte) |
| `br"…"`, `br#"…"#`, `br##"…"##`, … | [原始字节字符串字面量](lex.token.str-byte-raw) |
| `'…'` | [字符字面量](lex.token.literal.char) |
| `b'…'` | [字节字面量](lex.token.byte) |
| `c"…"` | [C 字符串字面量](lex.token.str-c) |
| `cr"…"`, `cr#"…"#`, `cr##"…"##`, … | [原始 C 字符串字面量](lex.token.str-c-raw) |

## 宏

| 语法 | 用途 |
|--------------------------------------------|-----|
| `ident!(…)`<br>`ident! {…}`<br>`ident![…]` | [宏调用](macro.invocation) |
| `$ident` | [宏元变量](macro.decl.meta) |
| `$ident:kind` | [宏匹配器片段说明符](macro.decl.meta.specifier) |
| `$(…)…` | [宏重复](macro.decl.repetition) |

## 属性

| 语法 | 用途 |
|------------|-----|
| `#[meta]` | [外部属性](attributes.outer) |
| `#![meta]` | [内部属性](attributes.inner) |

## 表达式

| 表达式 | 用途 |
|---------------------------|-----|
| `\|…\| expr`<br>`\|…\| -> Type { … }` | [闭包](expr.closure) |
| `ident::…` | [路径](paths) |
| `::crate_name::…` | [显式 crate 路径](paths.qualifiers.global-root) |
| `crate::…` | [crate 相对路径](paths.qualifiers.crate) |
| `self::…` | [模块相对路径](paths.qualifiers.mod-self) |
| `super::…` | [父模块路径](paths.qualifiers.super) |
| `Type::…`<br>`<Type as Trait>::ident` | [关联项](items.associated) |
| `<Type>::…` | [限定路径](paths.qualified)，可用于没有名称的类型，例如 `<&T>::…`、`<[T]>::…` 等。 |
| `Trait::method(…)`<br>`Type::method(…)`<br>`<Type as Trait>::method(…)` | [消歧方法调用](expr.call.desugar) |
| `method::<…>(…)`<br>`path::<…>` | [泛型实参](items.generics)，也称为 turbofish |
| `()` | [单元](type.tuple.unit) |
| `(expr)` | [带括号表达式](expr.paren) |
| `(expr,)` | [单元素元组表达式](expr.tuple) |
| `(expr, …)` | [元组表达式](expr.tuple) |
| `expr(expr, …)` | [调用表达式](expr.call) |
| `expr.0`, `expr.1`, … | [元组索引表达式](expr.tuple-index) |
| `expr.ident` | [字段访问表达式](expr.field) |
| `{…}` | [块表达式](expr.block) |
| `Type {…}` | [结构体表达式](expr.struct) |
| `Type(…)` | [元组结构体构造器](items.struct.tuple) |
| `[…]` | [数组表达式](expr.array) |
| `[expr; len]` | [重复数组表达式](expr.array) |
| `expr[..]`, `expr[a..]`, `expr[..b]`, `expr[a..b]`, `expr[a..=b]`, `expr[..=b]` | [数组和切片索引表达式](expr.array.index) |
| `if expr {…} else {…}` | [if 表达式](expr.if) |
| `match expr { pattern => {…} }` | [match 表达式](expr.match) |
| `loop {…}` | [无限循环表达式](expr.loop.infinite) |
| `while expr {…}` | [谓词循环表达式](expr.loop.while) |
| `for pattern in expr {…}` | [迭代器循环](expr.loop.for) |
| `&expr`<br>`&mut expr` | [借用表达式](expr.operator.borrow) |
| `&raw const expr`<br>`&raw mut expr` | [原始借用表达式](expr.borrow.raw) |
| `*expr` | [解引用表达式](expr.deref) |
| `expr?` | [try 传播表达式](expr.try) |
| `-expr` | [求负表达式](expr.negate) |
| `!expr` | [按位和逻辑 NOT 表达式](expr.negate) |
| `expr as Type` | [类型转换表达式](expr.as) |

## 项

[项](items)是 crate 的组成部分。

| 项 | 用途 |
|-------------------------------|-----|
| `mod ident;`<br>`mod ident {…}` | [模块](items.mod) |
| `use path;` | [use 声明](items.use) |
| `fn ident(…) {…}` | [函数](items.fn) |
| `type Type = Type;` | [类型别名](items.type) |
| `struct ident {…}` | [结构体](items.struct) |
| `enum ident {…}` | [枚举](items.enum) |
| `union ident {…}` | [联合体](items.union) |
| `trait ident {…}` | [trait](items.traits) |
| `impl Type {…}`<br>`impl Type for Trait {…}` | [实现](items.impl) |
| `const ident = expr;` | [常量项](items.const) |
| `static ident = expr;` | [静态项](items.static) |
| `extern "C" {…}` | [外部块](items.extern) |
| `fn ident<…>(…) …`<br>`struct ident<…> {…}`<br>`enum ident<…> {…}`<br>`impl<…> Type<…> {…}` | [泛型定义](items.generics) |

## 类型表达式

[类型表达式](type.name)用于指代类型。

| 类型 | 用途 |
|---------------------------------------|-----|
| `bool`, `u8`, `f64`, `str`, … | [原始类型](type.kinds) |
| `for<…>` | [高阶 trait 约束](bound.higher-ranked) |
| `T: TraitA + TraitB` | [trait 约束](bound) |
| `T: 'a + 'b` | [生命周期约束](bound.lifetime) |
| `T: TraitA + 'a` | [trait 和生命周期约束](bound) |
| `T: ?Sized` | [放宽的 trait 约束](bound.sized) |
| `[Type; len]` | [数组类型](type.array) |
| `(Type, …)` | [元组类型](type.tuple) |
| `[Type]` | [切片类型](type.slice) |
| `(Type)` | [带括号类型](type.name.parenthesized) |
| `impl Trait` | [impl trait 类型](type.impl-trait.return)、[匿名类型形参](type.impl-trait.param) |
| `dyn Trait` | [trait 对象类型](type.trait-object) |
| `ident`<br>`ident::…` | [类型路径](type.name.path)（可以指代[结构体](items.struct)、[枚举](items.enum)、[联合体](items.union)、[类型别名](items.type)、[trait](items.traits)、[泛型](items.generics)等） |
| `Type<…>`<br>`Trait<…>` | [泛型实参](items.generics)（例如 `Vec<u8>`） |
| `Trait<ident = Type>` | [关联类型绑定](paths.expr)（例如 `Iterator<Item = T>`） |
| `Trait<ident: …>` | [关联类型约束](paths.expr)（例如 `Iterator<Item: Send>`） |
| `&Type`<br>`&mut Type` | [引用类型](type.pointer.reference) |
| `*mut Type`<br>`*const Type` | [裸指针类型](type.pointer.raw) |
| `fn(…) -> Type` | [函数指针类型](type.fn-pointer) |
| `_` | [推断类型](type.inferred)、[推断的 const](items.generics.const.inferred) |
| `'_` | [占位生命周期](lifetime-elision.function.explicit-placeholder) |
| `!` | [never 类型](type.never) |

## 模式

[模式](patterns)用于匹配值。

| 模式 | 用途 |
|-----------------------------------|-----|
| `"foo"`, `'a'`, `123`, `2.4`, … | [字面量模式](patterns.literal) |
| `ident` | [标识符模式](patterns.ident) |
| `_` | [通配符模式](patterns.wildcard) |
| `..` | [剩余模式](patterns.rest) |
| `a..`, `..b`, `a..b`, `a..=b`, `..=b` | [范围模式](patterns.range) |
| `&pattern`<br>`&mut pattern` | [引用模式](patterns.ref) |
| `path {…}` | [结构体模式](patterns.struct) |
| `path(…)` | [元组结构体模式](patterns.tuple-struct) |
| `(pattern, …)` | [元组模式](patterns.tuple) |
| `(pattern)` | [分组模式](patterns.paren) |
| `[pattern, …]` | [切片模式](patterns.slice) |
| `CONST`, `Enum::Variant`, … | [路径模式](patterns.path) |

[`'static` lifetimes]: bound
[`if let` patterns]: expr.if.let
[`self` paths]: paths.qualifiers.mod-self
[`Self` type paths]: paths.qualifiers.type-self
[anonymous type parameters]: type.impl-trait.param
[arith]: expr.arith-logic
[array and slice indexing expressions]: expr.array.index
[array expressions]: expr.array
[array types]: type.array
[assembly operands]: asm.operand-type.supported-operands.in
[assignment]: expr.assign
[associated items]: items.associated
[associated type bindings]: paths.expr
[associated type bounds]: paths.expr
[async blocks]: expr.block.async
[async closures]: expr.closure.async
[async functions]: items.fn.async
[await expressions]: expr.await
[bitwise and logical NOT expressions]: expr.negate
[block expressions]: expr.block
[boolean expressions]: expr.literal
[boolean type]: type.bool
[borrow expressions]: expr.operator.borrow
[borrow]: expr.operator.borrow
[break expressions]: expr.loop.break
[byte literals]: lex.token.byte
[byte string literals]: lex.token.str-byte
[C string literals]: lex.token.str-c
[call expressions]: expr.call
[character literals]: lex.token.literal.char
[closure expressions]: expr.closure
[closures]: expr.closure
[comparison]: expr.cmp
[compound]: expr.compound-assign
[configuration predicates]: cfg
[const assembly operands]: asm.operand-type.supported-operands.const
[const blocks]: expr.block.const
[const functions]: const-eval.const-fn
[const generics]: items.generics.const
[const items]: items.const
[constant items]: items.const
[continue expressions]: expr.loop.continue
[crate-relative paths]: paths.qualifiers.crate
[dereference expressions]: expr.deref
[dereference]: expr.deref
[destructuring assignment]: expr.placeholder
[disambiguated method calls]: expr.call.desugar
[enumerations]: items.enum
[explicit crate paths]: paths.qualifiers.global-root
[extern crate]: items.extern-crate
[extern function pointer types]: type.fn-pointer.qualifiers
[extern function qualifier]: items.fn.extern
[external block functions]: items.extern.fn
[external block statics]: items.extern.static
[external blocks]: items.extern
[field access expressions]: expr.field
[field]: expr.field
[function pointer type]: type.fn-pointer
[function pointer types]: type.fn-pointer
[functions]: items.fn
[generic arguments]: items.generics
[generic definitions]: items.generics
[generics]: items.generics
[glob imports]: items.use.glob
[grouped patterns]: patterns.paren
[higher-ranked trait bounds]: bound.higher-ranked
[identifier patterns]: patterns.ident
[identifiers]: ident
[if expressions]: expr.if
[if let]: expr.if.let
[impl trait types]: type.impl-trait.return
[implementations]: items.impl
[inferred const]: items.generics.const.inferred
[inferred type]: type.inferred
[infinite loop expressions]: expr.loop.infinite
[infinite loops]: expr.loop.infinite
[inherent impls]: items.impl.inherent
[inner attribute]: attributes.inner
[iterator loops]: expr.loop.for
[lazy-bool]: expr.bool-logic
[let statements]: statement.let
[lifetime bounds]: bound.lifetime
[lifetimes and loop labels]: lex.token.life
[literal patterns]: patterns.literal
[macro calls]: macro.invocation
[macro invocations]: macro.invocation
[macro Kleene matcher]: macro.decl.repetition
[macro matcher fragment specifier]: macro.decl.meta.specifier
[macro metavariable]: macro.decl.meta
[macro repetition]: macro.decl.repetition
[macros by example]: macro.decl
[macros]: macro.decl
[match expressions]: expr.match
[match guards]: expr.match.guard
[match]: expr.match
[method calls]: expr.method
[module-relative paths]: paths.qualifiers.mod-self
[modules]: items.mod
[negation expressions]: expr.negate
[negation]: expr.negate
[negative impls]: items.impl
[never type]: type.never
[number literals]: lex.token.literal.num
[or patterns]: patterns.or
[outer attribute]: attributes.outer
[parent module paths]: paths.qualifiers.super
[parenthesized expressions]: expr.paren
[parenthesized types]: type.name.parenthesized
[path patterns]: patterns.path
[placeholder lifetime]: lifetime-elision.function.explicit-placeholder
[predicate loop expressions]: expr.loop.while
[predicate loops]: expr.loop.while
[primitive types]: type.kinds
[qualified paths]: paths.qualified
[question]: expr.try
[range patterns]: patterns.range
[raw assembly]: asm.options.supported-options.raw
[raw borrow expressions]: expr.borrow.raw
[raw borrow operator]: expr.borrow.raw
[raw byte string literals]: lex.token.str-byte-raw
[raw C string literals]: lex.token.str-c-raw
[raw identifiers]: ident.raw
[raw lifetimes and loop labels]: lex.token.life
[raw pointer type]: type.pointer.raw
[raw pointer types]: type.pointer.raw
[raw pointers]: type.pointer.raw
[raw string literals]: lex.token.literal.str-raw
[reference patterns]: patterns.ref
[reference types]: type.pointer.reference
[references]: type.pointer.reference
[relaxed trait bounds]: bound.sized
[repeat array expressions]: expr.array
[reserved keyword]: lex.keywords.reserved
[rest pattern]: patterns.rest
[return expressions]: expr.return
[self parameters]: items.fn.params.self-pat
[single-element tuple expressions]: expr.tuple
[slice patterns]: patterns.slice
[slice types]: type.slice
[static items]: items.static
[string literals]: lex.token.literal.str
[struct expressions]: expr.struct
[struct patterns]: patterns.struct
[structs]: items.struct
[subpattern binding]: patterns.ident.scrutinized
[super paths]: paths.qualifiers.super
[trait and lifetime bounds]: bound
[trait bounds]: bound
[trait implementations]: items.impl.trait
[trait impls]: items.impl.trait
[trait items]: items.traits
[trait object types]: type.trait-object
[trait objects]: type.trait-object
[traits]: items.traits
[try propagation expressions]: expr.try
[tuple expressions]: expr.tuple
[tuple index]: expr.tuple-index
[tuple indexing expressions]: expr.tuple-index
[tuple patterns]: patterns.tuple
[tuple struct constructors]: items.struct.tuple
[tuple struct patterns]: patterns.tuple-struct
[tuple types]: type.tuple
[type aliases]: items.type
[type cast expressions]: expr.as
[Type expressions]: type.name
[type paths]: type.name.path
[union items]: items.union
[unions]: items.union
[unit]: type.tuple.unit
[unsafe attributes]: attributes.safety
[unsafe blocks]: expr.block.unsafe
[unsafe external blocks]: unsafe.extern
[unsafe external functions]: items.extern.fn.safety
[unsafe external statics]: items.extern.static.safety
[unsafe functions]: unsafe.fn
[unsafe modules]: items.mod.unsafe
[unsafe trait implementations]: items.impl.trait.safety
[unsafe traits]: items.traits.safety
[use bounds]: bound.use
[use declarations]: items.use
[use items]: items.use
[variadic functions]: items.extern.variadic
[visibility]: vis
[where clauses]: items.generics.where
[while let]: expr.loop.while.let
[wildcard pattern]: patterns.wildcard
