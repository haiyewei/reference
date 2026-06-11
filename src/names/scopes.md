<div class="rule" id="r-names.scopes"><a class="rule-link" href="#r-names.scopes" title="names.scopes"><span>[names<wbr>.scopes]</span></a>
</div>

# 作用域

<div class="rule" id="r-names.scopes.intro"><a class="rule-link" href="#r-names.scopes.intro" title="names.scopes.intro"><span>[names<wbr>.scopes<wbr>.intro]</span></a>
</div>

_作用域_ 是源文本中的一个区域，在该区域内，具名[实体](../names.md)可以通过该名称被引用。以下各节详细说明作用域规则和行为，这些规则和行为取决于实体的种类及其声明位置。名称如何解析为实体的过程在[名称解析](name-resolution.md)一章中描述。关于用于运行析构器的 "drop scopes" 的更多信息，可以在[析构器](../destructors.md)一章中找到。

<div class="rule" id="r-names.scopes.items"><a class="rule-link" href="#r-names.scopes.items" title="names.scopes.items"><span>[names<wbr>.scopes<wbr>.items]</span></a>
</div>

## 项作用域

<div class="rule" id="r-names.scopes.items.module"><a class="rule-link" href="#r-names.scopes.items.module" title="names.scopes.items.module"><span>[names<wbr>.scopes<wbr>.items<wbr>.module]</span></a>
</div>

直接在[模块](../items/modules.md)中声明的[项](../items.md)的名称，其作用域从该模块的开头延伸到该模块的末尾。这些项也是该模块的成员，并且可以通过从其模块引出的[路径](../paths.md)来引用。

<div class="rule" id="r-names.scopes.items.statement"><a class="rule-link" href="#r-names.scopes.items.statement" title="names.scopes.items.statement"><span>[names<wbr>.scopes<wbr>.items<wbr>.statement]</span></a>
</div>

作为[语句](../statements.md)声明的项的名称，其作用域从该项语句所在块的开头延伸到该块的末尾。

<div class="rule" id="r-names.scopes.items.duplicate"><a class="rule-link" href="#r-names.scopes.items.duplicate" title="names.scopes.items.duplicate"><span>[names<wbr>.scopes<wbr>.items<wbr>.duplicate]</span></a>
</div>

在同一模块或块内，如果在同一[命名空间](namespaces.md)中引入一个与另一项名称重复的项，则是错误。[星号 glob 导入](../items/use-declarations.md)在处理重复名称和遮蔽时具有特殊行为，更多细节见链接章节。

<div class="rule" id="r-names.scopes.items.shadow-prelude"><a class="rule-link" href="#r-names.scopes.items.shadow-prelude" title="names.scopes.items.shadow-prelude"><span>[names<wbr>.scopes<wbr>.items<wbr>.shadow-prelude]</span></a>
</div>

模块中的项可以遮蔽 [prelude](#prelude-scopes) 中的项。

<div class="rule" id="r-names.scopes.items.nested-modules"><a class="rule-link" href="#r-names.scopes.items.nested-modules" title="names.scopes.items.nested-modules"><span>[names<wbr>.scopes<wbr>.items<wbr>.nested-modules]</span></a>
</div>

外层模块中的项名称在嵌套模块内不在作用域中。可以使用[路径](../paths.md)来引用另一个模块中的项。

<div class="rule" id="r-names.scopes.associated-items"><a class="rule-link" href="#r-names.scopes.associated-items" title="names.scopes.associated-items"><span>[names<wbr>.scopes<wbr>.associated-items]</span></a>
</div>

### 关联项作用域

<div class="rule" id="r-names.scopes.associated-items.scope"><a class="rule-link" href="#r-names.scopes.associated-items.scope" title="names.scopes.associated-items.scope"><span>[names<wbr>.scopes<wbr>.associated-items<wbr>.scope]</span></a>
</div>

[关联项](../items/associated-items.md)没有作用域，只能通过从其关联的类型或 trait 引出的[路径](../paths.md)来引用。[方法](../items/associated-items.md#methods)也可以通过[调用表达式](../expressions/call-expr.md)来引用。

<div class="rule" id="r-names.scopes.associated-items.duplicate"><a class="rule-link" href="#r-names.scopes.associated-items.duplicate" title="names.scopes.associated-items.duplicate"><span>[names<wbr>.scopes<wbr>.associated-items<wbr>.duplicate]</span></a>
</div>

与模块或块内的项类似，如果在 trait 或实现内引入的项与该 trait 或 impl 中同一命名空间内的另一项重复，则是错误。

<div class="rule" id="r-names.scopes.pattern-bindings"><a class="rule-link" href="#r-names.scopes.pattern-bindings" title="names.scopes.pattern-bindings"><span>[names<wbr>.scopes<wbr>.pattern-bindings]</span></a>
</div>

## 模式绑定作用域

局部变量[模式](../patterns.md)绑定的作用域取决于其使用位置：

<div class="rule" id="r-names.scopes.pattern-bindings.let"><a class="rule-link" href="#r-names.scopes.pattern-bindings.let" title="names.scopes.pattern-bindings.let"><span>[names<wbr>.scopes<wbr>.pattern-bindings<wbr>.let]</span></a>
</div>

- [`let` 语句](../statements.md#let-statements)绑定的范围从该 `let` 语句之后开始，直到其声明所在块的末尾。

<div class="rule" id="r-names.scopes.pattern-bindings.parameter"><a class="rule-link" href="#r-names.scopes.pattern-bindings.parameter" title="names.scopes.pattern-bindings.parameter"><span>[names<wbr>.scopes<wbr>.pattern-bindings<wbr>.parameter]</span></a>
</div>

- [函数参数](../items/functions.md#function-parameters)绑定位于函数体内。

<div class="rule" id="r-names.scopes.pattern-bindings.closure"><a class="rule-link" href="#r-names.scopes.pattern-bindings.closure" title="names.scopes.pattern-bindings.closure"><span>[names<wbr>.scopes<wbr>.pattern-bindings<wbr>.closure]</span></a>
</div>

- [闭包参数](../expressions/closure-expr.md)绑定位于闭包体内。

<div class="rule" id="r-names.scopes.pattern-bindings.loop"><a class="rule-link" href="#r-names.scopes.pattern-bindings.loop" title="names.scopes.pattern-bindings.loop"><span>[names<wbr>.scopes<wbr>.pattern-bindings<wbr>.loop]</span></a>
</div>

- [`for`](../expressions/loop-expr.md#iterator-loops) 绑定位于循环体内。

<div class="rule" id="r-names.scopes.pattern-bindings.let-chains"><a class="rule-link" href="#r-names.scopes.pattern-bindings.let-chains" title="names.scopes.pattern-bindings.let-chains"><span>[names<wbr>.scopes<wbr>.pattern-bindings<wbr>.let-chains]</span></a>
</div>

- [`if let`](../expressions/if-expr.md#if-let-patterns) 和 [`while let`](../expressions/loop-expr.md#while-let-patterns) 绑定在后续条件以及结果块中有效。

<div class="rule" id="r-names.scopes.pattern-bindings.match-arm"><a class="rule-link" href="#r-names.scopes.pattern-bindings.match-arm" title="names.scopes.pattern-bindings.match-arm"><span>[names<wbr>.scopes<wbr>.pattern-bindings<wbr>.match-arm]</span></a>
</div>

- [`match` 分支](../expressions/match-expr.md)绑定位于 [match 守卫](../expressions/match-expr.md#match-guards)和 match 分支表达式内。

<div class="rule" id="r-names.scopes.pattern-bindings.match-guard-let"><a class="rule-link" href="#r-names.scopes.pattern-bindings.match-guard-let" title="names.scopes.pattern-bindings.match-guard-let"><span>[names<wbr>.scopes<wbr>.pattern-bindings<wbr>.match-guard-let]</span></a>
</div>

- [`match` 守卫 `let`](../expressions/match-expr.md#r-expr.match.guard.let) 绑定在后续守卫条件和 match 分支表达式中有效。

<div class="rule" id="r-names.scopes.pattern-bindings.items"><a class="rule-link" href="#r-names.scopes.pattern-bindings.items" title="names.scopes.pattern-bindings.items"><span>[names<wbr>.scopes<wbr>.pattern-bindings<wbr>.items]</span></a>
</div>

局部变量作用域不会延伸到项声明中。

<!-- Not entirely, see https://github.com/rust-lang/rust/issues/33118 -->

### 模式绑定遮蔽

<div class="rule" id="r-names.scopes.pattern-bindings.shadow"><a class="rule-link" href="#r-names.scopes.pattern-bindings.shadow" title="names.scopes.pattern-bindings.shadow"><span>[names<wbr>.scopes<wbr>.pattern-bindings<wbr>.shadow]</span></a>
</div>

模式绑定允许遮蔽作用域内的任何名称，但以下例外会构成错误：

- [const 泛型参数](../items/generics.md#const-generics)
- [静态项](../items/static-items.md)
- [常量项](../items/constant-items.md)
- [结构体](../items/structs.md)和[枚举](../items/enumerations.md)的构造器

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

<div class="rule" id="r-names.scopes.generic-parameters"><a class="rule-link" href="#r-names.scopes.generic-parameters" title="names.scopes.generic-parameters"><span>[names<wbr>.scopes<wbr>.generic-parameters]</span></a>
</div>

## 泛型参数作用域

<div class="rule" id="r-names.scopes.generic-parameters.param-list"><a class="rule-link" href="#r-names.scopes.generic-parameters.param-list" title="names.scopes.generic-parameters.param-list"><span>[names<wbr>.scopes<wbr>.generic-parameters<wbr>.param-list]</span></a>
</div>

泛型参数在 [GenericParams](../items/generics.md#grammar-GenericParams) 列表中声明。泛型参数的作用域位于声明它的项内。

<div class="rule" id="r-names.scopes.generic-parameters.order-independent"><a class="rule-link" href="#r-names.scopes.generic-parameters.order-independent" title="names.scopes.generic-parameters.order-independent"><span>[names<wbr>.scopes<wbr>.generic-parameters<wbr>.order-independent]</span></a>
</div>

无论声明顺序如何，所有参数都在泛型参数列表内的作用域中。以下展示一些参数可以在声明前被引用的示例：

```rust
// 'b 约束在声明前被引用。
fn params_scope<'a: 'b, 'b>() {}

# trait SomeTrait<const Z: usize> {}
// const N 在声明前于 trait 约束中被引用。
fn f<T: SomeTrait<N>, const N: usize>() {}
```

<div class="rule" id="r-names.scopes.generic-parameters.bounds"><a class="rule-link" href="#r-names.scopes.generic-parameters.bounds" title="names.scopes.generic-parameters.bounds"><span>[names<wbr>.scopes<wbr>.generic-parameters<wbr>.bounds]</span></a>
</div>

泛型参数也在类型约束和 where 子句的作用域中，例如：

```rust
# trait SomeTrait<'a, T> {}
// `SomeTrait` 的 <'a, U> 指代 `bounds_scope` 的 'a 和 U 参数。
fn bounds_scope<'a, T: SomeTrait<'a, U>, U>() {}

fn where_scope<'a, T, U>()
    where T: SomeTrait<'a, U>
{}
```

<div class="rule" id="r-names.scopes.generic-parameters.inner-items"><a class="rule-link" href="#r-names.scopes.generic-parameters.inner-items" title="names.scopes.generic-parameters.inner-items"><span>[names<wbr>.scopes<wbr>.generic-parameters<wbr>.inner-items]</span></a>
</div>

在函数内部声明的[项](../items.md)引用其外层作用域中的泛型参数是错误。

```rust,compile_fail
fn example<T>() {
    fn inner(x: T) {} // ERROR: 不能使用外层函数的泛型参数
}
```

### 泛型参数遮蔽

<div class="rule" id="r-names.scopes.generic-parameters.shadow"><a class="rule-link" href="#r-names.scopes.generic-parameters.shadow" title="names.scopes.generic-parameters.shadow"><span>[names<wbr>.scopes<wbr>.generic-parameters<wbr>.shadow]</span></a>
</div>

遮蔽泛型参数是错误，但有一个例外：在函数内声明的项允许遮蔽来自该函数的泛型参数名称。

```rust
fn example<'a, T, const N: usize>() {
    // 函数内的项允许遮蔽作用域中的泛型参数。
    fn inner_lifetime<'a>() {} // OK
    fn inner_type<T>() {} // OK
    fn inner_const<const N: usize>() {} // OK
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

<div class="rule" id="r-names.scopes.lifetimes"><a class="rule-link" href="#r-names.scopes.lifetimes" title="names.scopes.lifetimes"><span>[names<wbr>.scopes<wbr>.lifetimes]</span></a>
</div>

### 生命周期作用域

生命周期参数在 [GenericParams](../items/generics.md#grammar-GenericParams) 列表和[高阶 trait 约束](../trait-bounds.md#higher-ranked-trait-bounds)中声明。

<div class="rule" id="r-names.scopes.lifetimes.special"><a class="rule-link" href="#r-names.scopes.lifetimes.special" title="names.scopes.lifetimes.special"><span>[names<wbr>.scopes<wbr>.lifetimes<wbr>.special]</span></a>
</div>

`'static` 生命周期和[占位生命周期](../lifetime-elision.md) `'_` 具有特殊含义，不能声明为参数。

#### 生命周期泛型参数作用域

<div class="rule" id="r-names.scopes.lifetimes.generic"><a class="rule-link" href="#r-names.scopes.lifetimes.generic" title="names.scopes.lifetimes.generic"><span>[names<wbr>.scopes<wbr>.lifetimes<wbr>.generic]</span></a>
</div>

[常量](../items/constant-items.md)项、[静态](../items/static-items.md)项以及 [const 上下文](../const_eval.md#const-context)始终只允许 `'static` 生命周期引用，因此其中不能有其他生命周期在作用域中。[关联常量](../items/associated-items.md#associated-constants)确实允许引用在其 trait 或实现中声明的生命周期。

#### 高阶 trait 约束作用域

<div class="rule" id="r-names.scopes.lifetimes.higher-ranked"><a class="rule-link" href="#r-names.scopes.lifetimes.higher-ranked" title="names.scopes.lifetimes.higher-ranked"><span>[names<wbr>.scopes<wbr>.lifetimes<wbr>.higher-ranked]</span></a>
</div>

声明为[高阶 trait 约束](../trait-bounds.md#higher-ranked-trait-bounds)的生命周期参数，其作用域取决于它的使用场景。

- 作为 [TypeBoundWhereClauseItem](../items/generics.md#grammar-TypeBoundWhereClauseItem) 时，声明的生命周期在类型和类型约束中处于作用域内。
- 作为 [TraitBound](../trait-bounds.md#grammar-TraitBound) 时，声明的生命周期在约束类型路径内处于作用域内。
- 作为 [BareFunctionType](../types/function-pointer.md#grammar-BareFunctionType) 时，声明的生命周期在函数参数和返回类型内处于作用域内。

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

#### Impl trait 限制

<div class="rule" id="r-names.scopes.lifetimes.impl-trait"><a class="rule-link" href="#r-names.scopes.lifetimes.impl-trait" title="names.scopes.lifetimes.impl-trait"><span>[names<wbr>.scopes<wbr>.lifetimes<wbr>.impl-trait]</span></a>
</div>

[Impl trait](../types/impl-trait.md) 类型只能引用在函数或实现上声明的生命周期。

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

<div class="rule" id="r-names.scopes.loop-label"><a class="rule-link" href="#r-names.scopes.loop-label" title="names.scopes.loop-label"><span>[names<wbr>.scopes<wbr>.loop-label]</span></a>
</div>

## 循环标签作用域

<div class="rule" id="r-names.scopes.loop-label.scope"><a class="rule-link" href="#r-names.scopes.loop-label.scope" title="names.scopes.loop-label.scope"><span>[names<wbr>.scopes<wbr>.loop-label<wbr>.scope]</span></a>
</div>

[循环标签](../expressions/loop-expr.md#loop-labels)可以由[循环表达式](../expressions/loop-expr.md)声明。循环标签的作用域从其声明点开始，直到循环表达式的末尾。该作用域不会延伸到[项](../items.md)、[闭包](../expressions/closure-expr.md)、[async 块](../expressions/block-expr.md#async-blocks)、[const 参数](../items/generics.md#const-generics)、[const 上下文](../const_eval.md#const-context)，以及定义该标签的 [`for` 循环](../expressions/loop-expr.md#iterator-loops)的迭代表达式中。

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

<div class="rule" id="r-names.scopes.loop-label.shadow"><a class="rule-link" href="#r-names.scopes.loop-label.shadow" title="names.scopes.loop-label.shadow"><span>[names<wbr>.scopes<wbr>.loop-label<wbr>.shadow]</span></a>
</div>

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

<div class="rule" id="r-names.scopes.prelude"><a class="rule-link" href="#r-names.scopes.prelude" title="names.scopes.prelude"><span>[names<wbr>.scopes<wbr>.prelude]</span></a>
</div>

## Prelude 作用域

<div class="rule" id="r-names.scopes.prelude.intro"><a class="rule-link" href="#r-names.scopes.prelude.intro" title="names.scopes.prelude.intro"><span>[names<wbr>.scopes<wbr>.prelude<wbr>.intro]</span></a>
</div>

[Preludes](preludes.md) 将实体带入每个模块的作用域中。这些实体不是模块的成员，但会在[名称解析](name-resolution.md)期间被隐式查询。

<div class="rule" id="r-names.scopes.prelude.shadow"><a class="rule-link" href="#r-names.scopes.prelude.shadow" title="names.scopes.prelude.shadow"><span>[names<wbr>.scopes<wbr>.prelude<wbr>.shadow]</span></a>
</div>

prelude 名称可以被模块中的声明遮蔽。

<div class="rule" id="r-names.scopes.prelude.layers"><a class="rule-link" href="#r-names.scopes.prelude.layers" title="names.scopes.prelude.layers"><span>[names<wbr>.scopes<wbr>.prelude<wbr>.layers]</span></a>
</div>

prelude 是分层的，因此如果它们包含同名实体，一个 prelude 会遮蔽另一个 prelude。prelude 可以遮蔽其他 prelude 的顺序如下，其中较早的条目可以遮蔽较后的条目：

1. [Extern prelude](preludes.md#extern-prelude)
1. [Tool prelude](preludes.md#tool-prelude)
1. [`macro_use` prelude](preludes.md#macro_use-prelude)
1. [标准库 prelude](preludes.md#standard-library-prelude)
1. [语言 prelude](preludes.md#language-prelude)

<div class="rule" id="r-names.scopes.macro_rules"><a class="rule-link" href="#r-names.scopes.macro_rules" title="names.scopes.macro_rules"><span>[names<wbr>.scopes<wbr>.macro_rules]</span></a>
</div>

## `macro_rules` 作用域

`macro_rules` 宏的作用域在 [Macros By Example](../macros-by-example.md) 章节中描述。其行为取决于 [`macro_use`](../macros-by-example.md#the-macro_use-attribute) 和 [`macro_export`](../macros-by-example.md#the-macro_export-attribute) 属性的使用。

<div class="rule" id="r-names.scopes.derive"><a class="rule-link" href="#r-names.scopes.derive" title="names.scopes.derive"><span>[names<wbr>.scopes<wbr>.derive]</span></a>
</div>

## 派生宏辅助属性

<div class="rule" id="r-names.scopes.derive.scope"><a class="rule-link" href="#r-names.scopes.derive.scope" title="names.scopes.derive.scope"><span>[names<wbr>.scopes<wbr>.derive<wbr>.scope]</span></a>
</div>

[派生宏辅助属性](../procedural-macros.md#derive-macro-helper-attributes)在指定其对应 [`derive` 属性](../attributes/derive.md)的项中处于作用域内。该作用域从 `derive` 属性之后开始，延伸到该项的末尾。<!-- Note: Not strictly true, see https://github.com/rust-lang/rust/issues/79202, but this is the intention. -->

<div class="rule" id="r-names.scopes.derive.shadow"><a class="rule-link" href="#r-names.scopes.derive.shadow" title="names.scopes.derive.shadow"><span>[names<wbr>.scopes<wbr>.derive<wbr>.shadow]</span></a>
</div>

辅助属性会遮蔽作用域中同名的其他属性。

<div class="rule" id="r-names.scopes.self"><a class="rule-link" href="#r-names.scopes.self" title="names.scopes.self"><span>[names<wbr>.scopes<wbr>.self]</span></a>
</div>

## `Self` 作用域

<div class="rule" id="r-names.scopes.self.intro"><a class="rule-link" href="#r-names.scopes.self.intro" title="names.scopes.self.intro"><span>[names<wbr>.scopes<wbr>.self<wbr>.intro]</span></a>
</div>

虽然 [`Self`](../paths.md#self-1) 是具有特殊含义的关键字，但它以类似普通名称的方式与名称解析交互。

<div class="rule" id="r-names.scopes.self.def-scope"><a class="rule-link" href="#r-names.scopes.self.def-scope" title="names.scopes.self.def-scope"><span>[names<wbr>.scopes<wbr>.self<wbr>.def-scope]</span></a>
</div>

[结构体](../items/structs.md)、[枚举](../items/enumerations.mdr)、[联合体](../items/unions.md)、[trait](../items/traits.md)或[实现](../items/implementations.md)定义中的隐式 `Self` 类型，会被类似[泛型参数](#generic-parameter-scopes)地处理，并以与泛型类型参数相同的方式处于作用域内。

<div class="rule" id="r-names.scopes.self.impl-scope"><a class="rule-link" href="#r-names.scopes.self.impl-scope" title="names.scopes.self.impl-scope"><span>[names<wbr>.scopes<wbr>.self<wbr>.impl-scope]</span></a>
</div>

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