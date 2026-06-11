<div class="rule" id="r-names.namespaces"><a class="rule-link" href="#r-names.namespaces" title="names.namespaces"><span>[names<wbr>.namespaces]</span></a>
</div>

# 命名空间

<div class="rule" id="r-names.namespaces.intro"><a class="rule-link" href="#r-names.namespaces.intro" title="names.namespaces.intro"><span>[names<wbr>.namespaces<wbr>.intro]</span></a>
</div>

\_命名空间_是对已声明[名称](../names.md)的逻辑分组。名称会根据该名称所指称的实体种类而被分隔到不同的命名空间中。命名空间允许一个命名空间中出现的名称不与另一个命名空间中的同名名称冲突。

存在若干不同的命名空间，每个命名空间都包含不同种类的实体。名称的使用会根据上下文，在不同命名空间中查找该名称的声明，如[名称解析](name-resolution.md)一章所述。

<div class="rule" id="r-names.namespaces.kinds"><a class="rule-link" href="#r-names.namespaces.kinds" title="names.namespaces.kinds"><span>[names<wbr>.namespaces<wbr>.kinds]</span></a>
</div>

以下是命名空间及其对应实体的列表：

- 类型命名空间
  - [模块声明](../items/modules.md)
  - [外部 crate 声明](../items/extern-crates.md)
  - [外部 crate prelude](preludes.md#extern-prelude) 项
  - [结构体](../items/structs.md)、[union](../items/unions.md)、[enum](../items/enumerations.md)、enum 变体声明
  - [Trait 项声明](../items/traits.md)
  - [类型别名](../items/type-aliases.md)
  - [关联类型声明](../items/associated-items.md#associated-types)
  - 内置类型：[布尔](../types/boolean.md)、[数值](../types/numeric.md)、[`char`](../types/char.md) 和 [`str`](../types/str.md)
  - [泛型类型参数](../items/generics.md)
  - [`Self` 类型](../paths.md#self-1)
  - [工具属性模块](../attributes.md#tool-attributes)
- 值命名空间
  - [函数声明](../items/functions.md)
  - [常量项声明](../items/constant-items.md)
  - [静态项声明](../items/static-items.md)
  - [结构体构造器](../items/structs.md)
  - [Enum 变体构造器](../items/enumerations.md)
  - [`Self` 构造器](../paths.md#self-1)
  - [泛型 const 参数](../items/generics.md#const-generics)
  - [关联 const 声明](../items/associated-items.md#associated-constants)
  - [关联函数声明](../items/associated-items.md#associated-functions-and-methods)
  - 局部绑定 --- [`let`](../statements.md#let-statements)、[`if let`](../expressions/if-expr.md#if-let-patterns)、[`while let`](../expressions/loop-expr.md#while-let-patterns)、[`for`](../expressions/loop-expr.md#iterator-loops)、[`match`](../expressions/match-expr.md) 分支、[函数参数](../items/functions.md#function-parameters)、[闭包参数](../expressions/closure-expr.md)
  - 捕获的[闭包](../expressions/closure-expr.md)变量
- 宏命名空间
  - [`macro_rules` 声明](../macros-by-example.md)
  - [内置属性](../attributes.md#built-in-attributes-index)
  - [工具属性](../attributes.md#tool-attributes)
  - [类函数过程宏](../procedural-macros.md#the-proc_macro-attribute)
  - [Derive 宏](../procedural-macros.md#r-macro.proc.derive)
  - [Derive 宏辅助属性](../procedural-macros.md#derive-macro-helper-attributes)
  - [属性宏](../procedural-macros.md#the-proc_macro_attribute-attribute)
- 生命周期命名空间
  - [泛型生命周期参数](../items/generics.md)
- 标签命名空间
  - [循环标签](../expressions/loop-expr.md#loop-labels)
  - [块标签](../expressions/loop-expr.md#r-expr.loop.block-labels)

以下示例展示了不同命名空间中的重叠名称如何能被无歧义地使用：

```rust
// Foo 在类型命名空间中引入一个类型，并在值命名空间中引入一个构造器。
struct Foo(u32);

// `Foo` 宏声明在宏命名空间中。
macro_rules! Foo {
    () => {};
}

// `f` 参数类型中的 `Foo` 指称类型命名空间中的 `Foo`。
// `'Foo` 在生命周期命名空间中引入一个新的生命周期。
fn example<'Foo>(f: Foo) {
    // `Foo` 指称值命名空间中的 `Foo` 构造器。
    let ctor = Foo;
    // `Foo` 指称宏命名空间中的 `Foo` 宏。
    Foo!{}
    // `'Foo` 在标签命名空间中引入一个标签。
    'Foo: loop {
        // `'Foo` 指称 `'Foo` 生命周期参数，而 `Foo`
        // 指称类型命名空间。
        let x: &'Foo Foo;
        // `'Foo` 指称该标签。
        break 'Foo;
    }
}
```

<div class="rule" id="r-names.namespaces.without"><a class="rule-link" href="#r-names.namespaces.without" title="names.namespaces.without"><span>[names<wbr>.namespaces<wbr>.without]</span></a>
</div>

## 没有命名空间的具名实体

以下实体具有显式名称，但这些名称不属于任何特定命名空间。

### 字段

<div class="rule" id="r-names.namespaces.without.fields"><a class="rule-link" href="#r-names.namespaces.without.fields" title="names.namespaces.without.fields"><span>[names<wbr>.namespaces<wbr>.without<wbr>.fields]</span></a>
</div>

尽管 struct、enum 和 union 字段都有名称，但这些具名字段并不位于显式命名空间中。它们只能通过[字段表达式](../expressions/field-expr.md)访问，而字段表达式只检查正在被访问的特定类型的字段名称。

### Use 声明

<div class="rule" id="r-names.namespaces.without.use"><a class="rule-link" href="#r-names.namespaces.without.use" title="names.namespaces.without.use"><span>[names<wbr>.namespaces<wbr>.without<wbr>.use]</span></a>
</div>

[use 声明](../items/use-declarations.md)具有它导入到作用域中的具名别名，但 `use` 项本身不属于特定命名空间。相反，它可以根据所导入的项的种类，将别名引入多个命名空间。

<div class="rule" id="r-names.namespaces.sub-namespaces"><a class="rule-link" href="#r-names.namespaces.sub-namespaces" title="names.namespaces.sub-namespaces"><span>[names<wbr>.namespaces<wbr>.sub-namespaces]</span></a>
</div>

## 子命名空间

<div class="rule" id="r-names.namespaces.sub-namespaces.intro"><a class="rule-link" href="#r-names.namespaces.sub-namespaces.intro" title="names.namespaces.sub-namespaces.intro"><span>[names<wbr>.namespaces<wbr>.sub-namespaces<wbr>.intro]</span></a>
</div>

宏命名空间被划分为两个子命名空间：一个用于[感叹号风格宏](../macros.md)，另一个用于[属性](../attributes.md)。解析属性时，作用域中的任何感叹号风格宏都会被忽略。反过来，解析感叹号风格宏时，也会忽略作用域中的属性宏。这会防止一种风格遮蔽另一种风格。

例如，[`cfg` 属性](../conditional-compilation.md#the-cfg-attribute)和 [`cfg` 宏](../conditional-compilation.md#the-cfg-macro)是宏命名空间中两个同名的不同实体，但它们仍然可以在各自对应的上下文中使用。

<!-- ignore: requires external crates -->

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 无论子命名空间如何，`use` 导入仍然不能在模块或块中创建同名的重复绑定。
 > 
 > ```rust,ignore
 > #[macro_export]
 > macro_rules! mymac {
 >     () => {};
 > }
 > 
 > use myattr::mymac; // error[E0252]: 名称 `mymac` 被定义了多次。
 > ```

</div>
