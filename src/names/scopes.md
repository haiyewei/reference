r[names.scopes]
# 作用域

r[names.scopes.intro]
*作用域* 是源文本中的一个区域，在该区域内，具名[实体](../names.md)可以通过该名称被引用。以下各节详细说明作用域规则和行为，这些规则和行为取决于实体的种类及其声明位置。名称如何解析为实体的过程在[名称解析](name-resolution.md)一章中描述。关于用于运行析构器的 "drop 作用域" 的更多信息，可以在[析构器](../destructors.md)一章中找到。

r[names.scopes.items]
## 项作用域

r[names.scopes.items.module]
直接在[模块](../items/modules.md)中声明的[项](../items.md)的名称，其作用域从该模块的开头延伸到该模块的末尾。这些项也是该模块的成员，并且可以通过从其模块引出的[路径](../paths.md)来引用。

r[names.scopes.items.statement]
作为[语句](../statements.md)声明的项的名称，其作用域从该项语句所在块的开头延伸到该块的末尾。

r[names.scopes.items.duplicate]
在同一模块或块内，如果在同一[命名空间](namespaces.md)中引入一个与另一项名称重复的项，则是错误。[星号 glob 导入](../items/use-declarations.md)在处理重复名称和遮蔽时具有特殊行为，更多细节见链接章节。

r[names.scopes.items.shadow-prelude]
模块中的项可以遮蔽 [prelude](#prelude-scopes) 中的项。

r[names.scopes.items.nested-modules]
外层模块中的项名称在嵌套模块内不在作用域中。可以使用[路径](../paths.md)来引用另一个模块中的项。

r[names.scopes.associated-items]
### 关联项作用域

r[names.scopes.associated-items.scope]
[关联项](../items/associated-items.md)没有作用域，只能通过从其关联的类型或 trait 引出的[路径](../paths.md)来引用。[方法](../items/associated-items.md#methods)也可以通过[调用表达式](../expressions/call-expr.md)来引用。

r[names.scopes.associated-items.duplicate]
与模块或块内的项类似，如果在 trait 或实现内引入的项与该 trait 或 impl 中同一命名空间内的另一项重复，则是错误。

r[names.scopes.pattern-bindings]
## 模式绑定作用域

局部变量[模式](../patterns.md)绑定的作用域取决于其使用位置：

r[names.scopes.pattern-bindings.let]
* [`let` 语句](../statements.md#let-statements)绑定的范围从该 `let` 语句之后开始，直到其声明所在块的末尾。
r[names.scopes.pattern-bindings.parameter]
* [函数参数](../items/functions.md#function-parameters)绑定位于函数体内。
r[names.scopes.pattern-bindings.closure]
* [闭包参数](../expressions/closure-expr.md)绑定位于闭包体内。
r[names.scopes.pattern-bindings.loop]
* [`for`](../expressions/loop-expr.md#iterator-loops) 绑定位于循环体内。
r[names.scopes.pattern-bindings.let-chains]
* [`if let`](../expressions/if-expr.md#if-let-patterns) 和 [`while let`](../expressions/loop-expr.md#while-let-patterns) 绑定在后续条件以及结果块中有效。
r[names.scopes.pattern-bindings.match-arm]
* [`match` 分支](../expressions/match-expr.md)绑定位于 [match 守卫](../expressions/match-expr.md#match-guards)和 match 分支表达式内。
r[names.scopes.pattern-bindings.match-guard-let]
* [`match` 守卫 `let`](expr.match.guard.let) 绑定在后续守卫条件和 match 分支表达式中有效。

r[names.scopes.pattern-bindings.items]
局部变量作用域不会延伸到项声明中。
<!-- Not entirely, see https://github.com/rust-lang/rust/issues/33118 -->

### 模式绑定遮蔽

r[names.scopes.pattern-bindings.shadow]
模式绑定允许遮蔽作用域内的任何名称，但以下例外会构成错误：

* [const 泛型参数](../items/generics.md#const-generics)
* [静态项](../items/static-items.md)
* [常量项](../items/constant-items.md)
* [结构体](../items/structs.md)和[枚举](../items/enumerations.md)的构造器

以下示例展示局部绑定如何遮蔽项声明：

```rust
fn shadow_example() {
    // 由于作用域中尚无局部变量，因此这里解析为函数。
    foo(); // 打印 `function`
    let foo = || println!("closure");
    fn foo() { println!("function"); }
    // 这里解析为局部闭包，因为它遮蔽了该项。
    foo(); // 打印 `closure`
}
```

r[names.scopes.generic-parameters]
## 泛型参数作用域

r[names.scopes.generic-parameters.param-list]
泛型参数在 [GenericParams] 列表中声明。泛型参数的作用域位于声明它的项内。

r[names.scopes.generic-parameters.order-independent]
无论声明顺序如何，所有参数都在泛型参数列表内的作用域中。以下展示一些参数可以在声明前被引用的示例：

```rust
// 'b 约束在声明前被引用。
fn params_scope<'a: 'b, 'b>() {}

# trait SomeTrait<const Z: usize> {}
// const N 在声明前于 trait 约束中被引用。
fn f<T: SomeTrait<N>, const N: usize>() {}
```

r[names.scopes.generic-parameters.bounds]
泛型参数也在类型约束和 where 子句的作用域中，例如：

```rust
# trait SomeTrait<'a, T> {}
// `SomeTrait` 的 <'a, U> 指代 `bounds_scope` 的 'a 和 U 参数。
fn bounds_scope<'a, T: SomeTrait<'a, U>, U>() {}

fn where_scope<'a, T, U>()
    where T: SomeTrait<'a, U>
{}
```

r[names.scopes.generic-parameters.inner-items]
在函数内部声明的[项](../items.md)引用其外层作用域中的泛型参数是错误。

```rust,compile_fail
fn example<T>() {
    fn inner(x: T) {} // ERROR: 不能使用外层函数的泛型参数
}
```

### 泛型参数遮蔽

r[names.scopes.generic-parameters.shadow]
遮蔽泛型参数是错误，但有一个例外：在函数内声明的项允许遮蔽来自该函数的泛型参数名称。

```rust
fn example<'a, T, const N: usize>() {
    // 函数内的项允许遮蔽作用域中的泛型参数。
    fn inner_lifetime<'a>() {} // 可以
    fn inner_type<T>() {} // 可以
    fn inner_const<const N: usize>() {} // 可以
}
```

```rust,compile_fail
trait SomeTrait<'a, T, const N: usize> {
    fn example_lifetime<'a>() {} // ERROR: 'a 已被使用
    fn example_type<T>() {} // ERROR: T 已被使用
    fn example_const<const N: usize>() {} // ERROR: N 已被使用
    fn example_mixed<const T: usize>() {} // ERROR: T 已被使用
}
```

r[names.scopes.lifetimes]
### 生命周期作用域

生命周期参数在 [GenericParams] 列表和[高阶 trait 约束](../trait-bounds.md#higher-ranked-trait-bounds)中声明。

r[names.scopes.lifetimes.special]
`'static` 生命周期和[占位生命周期](../lifetime-elision.md) `'_` 具有特殊含义，不能声明为参数。

#### 生命周期泛型参数作用域

r[names.scopes.lifetimes.generic]
[常量](../items/constant-items.md)项、[static](../items/static-items.md)项以及 [const 上下文](../const_eval.md#const-context)始终只允许 `'static` 生命周期引用，因此其中不能有其他生命周期在作用域中。[关联常量](../items/associated-items.md#associated-constants)确实允许引用在其 trait 或实现中声明的生命周期。

#### 高阶 trait 约束作用域

r[names.scopes.lifetimes.higher-ranked]
声明为[高阶 trait 约束](../trait-bounds.md#higher-ranked-trait-bounds)的生命周期参数，其作用域取决于它的使用场景。

* 作为 [TypeBoundWhereClauseItem] 时，声明的生命周期在类型和类型约束中处于作用域内。
* 作为 [TraitBound] 时，声明的生命周期在约束类型路径内处于作用域内。
* 作为 [BareFunctionType] 时，声明的生命周期在函数参数和返回类型内处于作用域内。

```rust
# trait Trait<'a>{}

fn where_clause<T>()
    // 'a 在类型和类型约束中都处于作用域内。
    where for <'a> &'a T: Trait<'a>
{}

fn bound<T>()
    // 'a 在约束内处于作用域内。
    where T: for <'a> Trait<'a>
{}

# struct Example<'a> {
#     field: &'a u32
# }

// 'a 在参数和返回类型中都处于作用域内。
type FnExample = for<'a> fn(x: Example<'a>) -> Example<'a>;
```

#### impl Trait 限制

r[names.scopes.lifetimes.impl-trait]
[impl Trait](../types/impl-trait.md) 类型只能引用在函数或实现上声明的生命周期。

<!-- not able to demonstrate the scope error because the compiler panics
     https://github.com/rust-lang/rust/issues/67830
-->
```rust
# trait Trait1 {
#     type Item;
# }
# trait Trait2<'a> {}
#
# struct Example;
#
# impl Trait1 for Example {
#     type Item = Element;
# }
#
# struct Element;
# impl<'a> Trait2<'a> for Element {}
#
// 这里的 `impl Trait2` 不允许引用 'b，但允许
// 引用 'a。
fn foo<'a>() -> impl for<'b> Trait1<Item = impl Trait2<'a> + use<'a>> {
    // ...
#    Example
}
```

r[names.scopes.loop-label]
## 循环标签作用域

r[names.scopes.loop-label.scope]
[循环标签](../expressions/loop-expr.md#loop-labels)可以由[循环表达式](../expressions/loop-expr.md)声明。循环标签的作用域从其声明点开始，直到循环表达式的末尾。该作用域不会延伸到[项](../items.md)、[闭包](../expressions/closure-expr.md)、[async 块](../expressions/block-expr.md#async-blocks)、[const 实参](../items/generics.md#const-generics)、[const 上下文](../const_eval.md#const-context)，以及定义该标签的 [`for` 循环](../expressions/loop-expr.md#iterator-loops)的迭代表达式中。

```rust
'a: for n in 0..3 {
    if n % 2 == 0 {
        break 'a;
    }
    fn inner() {
        // 在这里使用 'a 会是错误。
        // break 'a;
    }
}

// 该标签在 `while` 循环的表达式中处于作用域内。
'a: while break 'a {}         // 循环不会运行。
'a: while let _ = break 'a {} // 循环不会运行。

// 该标签在定义它的 `for` 循环中不在作用域内：
'a: for outer in 0..5 {
    // 这会跳出外层循环，跳过内层循环并停止
    // 外层循环。
    'a: for inner in { break 'a; 0..1 } {
        println!("{}", inner); // 这里不会运行。
    }
    println!("{}", outer); // 这里也不会运行。
}

```

r[names.scopes.loop-label.shadow]
循环标签可以遮蔽外层作用域中同名的标签。对标签的引用指向最近的定义。

```rust
// 循环标签遮蔽示例。
'a: for outer in 0..5 {
    'a: for inner in 0..5 {
        // 这会终止内层循环，但外层循环会继续运行。
        break 'a;
    }
}
```

r[names.scopes.prelude]
## Prelude 作用域

r[names.scopes.prelude.intro]
[Preludes](preludes.md) 将实体带入每个模块的作用域中。这些实体不是模块的成员，但会在[名称解析](name-resolution.md)期间被隐式查询。

r[names.scopes.prelude.shadow]
prelude 名称可以被模块中的声明遮蔽。

r[names.scopes.prelude.layers]
prelude 是分层的，因此如果它们包含同名实体，一个 prelude 会遮蔽另一个 prelude。prelude 可以遮蔽其他 prelude 的顺序如下，其中较早的条目可以遮蔽较后的条目：

1. [Extern prelude]
2. [Tool prelude]
3. [`macro_use` prelude]
4. [标准库 prelude](preludes.md#standard-library-prelude)
5. [语言 prelude](preludes.md#language-prelude)

r[names.scopes.macro_rules]
## `macro_rules` 作用域

`macro_rules` 宏的作用域在 [Macros By Example](../macros-by-example.md) 章节中描述。其行为取决于 [`macro_use`](../macros-by-example.md#the-macro_use-attribute) 和 [`macro_export`](../macros-by-example.md#the-macro_export-attribute) 属性的使用。

r[names.scopes.derive]
## 派生宏辅助属性

r[names.scopes.derive.scope]
[派生宏辅助属性](../procedural-macros.md#derive-macro-helper-attributes)在指定其对应 [`derive` 属性](../attributes/derive.md)的项中处于作用域内。该作用域从 `derive` 属性之后开始，延伸到该项的末尾。<!-- 注：并非严格如此，见 https://github.com/rust-lang/rust/issues/79202，但这是预期行为。 -->

r[names.scopes.derive.shadow]
辅助属性会遮蔽作用域中同名的其他属性。

r[names.scopes.self]
## `Self` 作用域

r[names.scopes.self.intro]
虽然 [`Self`](../paths.md#self-1) 是具有特殊含义的关键字，但它以类似普通名称的方式与名称解析交互。

r[names.scopes.self.def-scope]
[结构体](../items/structs.md)、[枚举](../items/enumerations.mdr)、[联合体](../items/unions.md)、[trait](../items/traits.md)或[实现](../items/implementations.md)定义中的隐式 `Self` 类型，会被类似[泛型参数](#generic-parameter-scopes)地处理，并以与泛型类型参数相同的方式处于作用域内。

r[names.scopes.self.impl-scope]
[实现](../items/implementations.md)的值[命名空间](namespaces.md)中的隐式 `Self` 构造器，在该实现的主体（该实现的[关联项](../items/associated-items.md)）内处于作用域内。

```rust
// 结构体定义内的 Self 类型。
struct Recursive {
    f1: Option<Box<Self>>
}

// 泛型参数内的 Self 类型。
struct SelfGeneric<T: Into<Self>>(T);

// 实现内的 Self 值构造器。
struct ImplExample();
impl ImplExample {
    fn example() -> Self { // Self 类型
        Self() // Self 值构造器
    }
}
```

[`derive` attribute]: ../attributes/derive.md
[`for` loop]: ../expressions/loop-expr.md#iterator-loops
[`for`]: ../expressions/loop-expr.md#iterator-loops
[`if let`]: ../expressions/if-expr.md#if-let-patterns
[`while let`]: ../expressions/loop-expr.md#while-let-patterns
[`let` statement]: ../statements.md#let-statements
[`macro_export`]: ../macros-by-example.md#the-macro_export-attribute
[`macro_use` prelude]: preludes.md#macro_use-prelude
[`macro_use`]: ../macros-by-example.md#the-macro_use-attribute
[`match` arms]: ../expressions/match-expr.md
[`match` guard `let`]: expr.match.guard.let
[`Self`]: ../paths.md#self-1
[Associated consts]: ../items/associated-items.md#associated-constants
[associated items]: ../items/associated-items.md
[Asterisk glob imports]: ../items/use-declarations.md
[async blocks]: ../expressions/block-expr.md#async-blocks
[call expressions]: ../expressions/call-expr.md
[Closure parameter]: ../expressions/closure-expr.md
[closures]: ../expressions/closure-expr.md
[const arguments]: ../items/generics.md#const-generics
[const contexts]: ../const_eval.md#const-context
[Const generic parameters]: ../items/generics.md#const-generics
[Const items]: ../items/constant-items.md
[Constant]: ../items/constant-items.md
[Derive macro helper attributes]: ../procedural-macros.md#derive-macro-helper-attributes
[destructors]: ../destructors.md
[entity]: ../names.md
[enum]: ../items/enumerations.mdr
[enums]: ../items/enumerations.md
[Extern prelude]: preludes.md#extern-prelude
[Function parameter]: ../items/functions.md#function-parameters
[hrtb]: ../trait-bounds.md#higher-ranked-trait-bounds
[Impl trait]: ../types/impl-trait.md
[implementation]: ../items/implementations.md
[items]: ../items.md
[Language prelude]: preludes.md#language-prelude
[loop expression]: ../expressions/loop-expr.md
[Loop labels]: ../expressions/loop-expr.md#loop-labels
[Macros By Example]: ../macros-by-example.md
[match guard]: ../expressions/match-expr.md#match-guards
[methods]: ../items/associated-items.md#methods
[module]: ../items/modules.md
[name resolution]: name-resolution.md
[namespace]: namespaces.md
[path]: ../paths.md
[pattern]: ../patterns.md
[placeholder lifetime]: ../lifetime-elision.md
[preludes]: preludes.md
[Standard library prelude]: preludes.md#standard-library-prelude
[statement]: ../statements.md
[Static items]: ../items/static-items.md
[static]: ../items/static-items.md
[struct]: ../items/structs.md
[structs]: ../items/structs.md
[Tool prelude]: preludes.md#tool-prelude
[trait]: ../items/traits.md
[union]: ../items/unions.md
