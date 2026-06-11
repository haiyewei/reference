r[items.use]
# Use 声明

r[items.use.syntax]
```grammar,items
UseDeclaration -> `use` UseTree `;`

UseTree ->
      (SimplePath? `::`)? `*`
    | (SimplePath? `::`)? `{` (UseTree ( `,`  UseTree )* `,`?)? `}`
    | SimplePath ( `as` ( IDENTIFIER | `_` ) )?
```

r[items.use.intro]
<em><code>use</code> 声明</em>会创建一个或多个局部名称绑定，它们与某个其他[路径](../paths.md)同义。通常，`use` 声明用于缩短引用模块项所需的路径。这些声明可以出现在[模块](modules.md)和[块](../expressions/block-expr.md)中，通常位于开头。`use` 声明有时也称为<em>导入</em>；如果它是公开的，则称为<em>重导出</em>。

[path]: ../paths.md
[modules]: modules.md
[blocks]: ../expressions/block-expr.md

r[items.use.forms]
`use` 声明支持若干便捷的简写形式：

r[items.use.forms.multiple]
* 使用花括号语法 `use a::b::{c, d, e::f, g::h::i};`，同时绑定一组具有共同前缀的路径

r[items.use.forms.self]
* 使用 `self` 关键字，同时绑定一组具有共同前缀的路径及其共同父模块，例如 `use a::b::{self, c, d::e};`

r[items.use.forms.as]
* 使用语法 `use p::q::r as x;`，将目标名称重新绑定为新的局部名称。这也可以与前两个特性结合使用：`use a::b::{self as ab, c as abc}`。

r[items.use.forms.glob]
* 使用星号通配符语法 `use a::b::*;`，绑定所有匹配给定前缀的路径。

r[items.use.forms.nesting]
* 多次嵌套前述特性的分组，例如 `use a::b::{self as ab, c, d::{*, e::f}};`

`use` 声明的示例：

```rust
use std::collections::hash_map::{self, HashMap};

fn foo<T>(_: T){}
fn bar(map1: HashMap<String, usize>, map2: hash_map::HashMap<String, usize>){}

fn main() {
    // use declarations can also exist inside of functions
    use std::option::Option::{Some, None};

    // Equivalent to 'foo(vec![std::option::Option::Some(1.0f64),
    // std::option::Option::None]);'
    foo(vec![Some(1.0f64), None]);

    // Both `hash_map` and `HashMap` are in scope.
    let map1 = HashMap::new();
    let map2 = hash_map::HashMap::new();
    bar(map1, map2);
}
```

r[items.use.visibility]
## `use` 可见性

r[items.use.visibility.intro]
与项一样，`use` 声明默认对包含它的模块私有。同样与项一样，如果带有 `pub` 关键字限定，`use` 声明可以是公开的。这样的 `use` 声明用于<em>重导出</em>一个名称。因此，公开的 `use` 声明可以将某个公开名称<em>重定向</em>到不同的目标定义：甚至可以是另一个模块中、具有私有规范路径的定义。

r[items.use.visibility.unambiguous]
如果这样的一系列重定向形成循环，或者不能无歧义地解析，则它们表示一个编译时错误。

重导出的示例：

```rust
mod quux {
    pub use self::foo::{bar, baz};
    pub mod foo {
        pub fn bar() {}
        pub fn baz() {}
    }
}

fn main() {
    quux::bar();
    quux::baz();
}
```

在此示例中，模块 `quux` 重导出了在 `foo` 中定义的两个公开名称。

r[items.use.path]
## `use` 路径

r[items.use.path.intro]
`use` 项中允许的[路径](../paths.md)遵循 [SimplePath](../paths.md#grammar-SimplePath) 语法，并且类似于可以在表达式中使用的路径。它们可以为以下内容创建绑定：

* 可命名的[项](../items.md)
* [枚举变体](enumerations.md)
* [内置类型](../types.md)
* [属性](../attributes.md)
* [Derive 宏](../procedural-macros.md#r-macro.proc.derive)
* [`macro_rules`](../macros-by-example.md)

r[items.use.path.disallowed]
它们不能导入[关联项](associated-items.md)、[泛型参数](generics.md)、[局部变量](../variables.md)、带有 [`Self`](../paths.md#self) 的路径，或[工具属性](../attributes.md#tool-attributes)。下面还会描述更多限制。

r[items.use.path.namespace]
`use` 会为被导入实体的所有[命名空间](../names/namespaces.md)创建绑定，但 `self` 导入除外，它只会从类型命名空间导入（如下所述）。例如，下面展示了如何在两个命名空间中为同一个名称创建绑定：

```rust
mod stuff {
    pub struct Foo(pub i32);
}

// Imports the `Foo` type and the `Foo` constructor.
use stuff::Foo;

fn example() {
    let ctor = Foo; // Uses `Foo` from the value namespace.
    let x: Foo = ctor(123); // Uses `Foo` From the type namespace.
}
```

r[items.use.path.edition2018]
> [!EDITION-2018]
> 在 2015 edition 中，`use` 路径相对于 crate 根。例如：
>
> ```rust,edition2015
> mod foo {
>     pub mod example { pub mod iter {} }
>     pub mod baz { pub fn foobaz() {} }
> }
> mod bar {
>     // Resolves `foo` from the crate root.
>     use foo::example::iter;
>     // The `::` prefix explicitly resolves `foo`
>     // from the crate root.
>     use ::foo::baz::foobaz;
> }
>
> # fn main() {}
> ```
>
> 2015 edition 不允许 `use` 声明引用 [extern prelude](../names/preludes.md#extern-prelude)。因此，在 2015 中，若要在 `use` 声明中引用外部 crate，仍然需要 [`extern crate`](extern-crates.md) 声明。从 2018 edition 开始，`use` 声明可以像 `extern crate` 一样指定外部 crate 依赖。

r[items.use.as]
## `as` 重命名

`as` 关键字可用于更改被导入实体的名称。例如：

```rust
// Creates a non-public alias `bar` for the function `foo`.
use inner::foo as bar;

mod inner {
    pub fn foo() {}
}
```

r[items.use.multiple-syntax]
## 花括号语法

r[items.use.multiple-syntax.intro]
花括号可以用在路径的最后一个段中，以从前一个段导入多个实体；如果没有前面的段，则从当前作用域导入。花括号可以嵌套，从而创建一个路径树，其中每组段都会在逻辑上与其父级组合，以创建完整路径。

```rust
// Creates bindings to:
// - `std::collections::BTreeSet`
// - `std::collections::hash_map`
// - `std::collections::hash_map::HashMap`
use std::collections::{BTreeSet, hash_map::{self, HashMap}};
```

r[items.use.multiple-syntax.empty]
空花括号不会导入任何内容，但会验证其前导路径是否可访问。 <!-- This is slightly wrong, see: https://github.com/rust-lang/rust/issues/61826 -->

r[items.use.multiple-syntax.edition2018]
> [!EDITION-2018]
> 在 2015 edition 中，路径相对于 crate 根，因此像 `use {foo, bar};` 这样的导入会从 crate 根导入名称 `foo` 和 `bar`；而从 2018 edition 开始，这些名称相对于当前作用域。

r[items.use.self]
## `self` 导入

r[items.use.self.intro]
关键字 `self` 可以在[花括号语法](use-declarations.md#r-items.use.multiple-syntax)中使用，以父实体自身的名称创建其绑定。

```rust
mod stuff {
    pub fn foo() {}
    pub fn bar() {}
}
mod example {
    // Creates a binding for `stuff` and `foo`.
    use crate::stuff::{self, foo};
    pub fn baz() {
        foo();
        stuff::bar();
    }
}
# fn main() {}
```

> [!NOTE]
> `self` 也可以用作路径的第一个段。将 `self` 用作第一个段，与在 `use` 的花括号内使用它在逻辑上是相同的；它表示父段的当前模块，或者在没有父段时表示当前模块。关于前导 `self` 含义的更多信息，参见路径章节中的 [`self`](../paths.md#self)。

r[items.use.self.trailing]
`self` 可以出现在 `use` 路径的最后一个段，前面带有 `::`。形式为 `P::self` 的路径等价于 `P::{self}`，而 `P::self as name` 等价于 `P::{self as name}`。

```rust
mod m {
    pub enum E { V1, V2 }
}
use m::self as _; // Equivalent to `use m::{self as _};`.
use m::E::self; // Equivalent to `use m::E::{self};`.
# fn main() {}
```

> [!NOTE]
> 关于前置路径的限制，参见 [paths.qualifiers.mod-self.trailing](../paths.md#r-paths.qualifiers.mod-self.trailing)。

r[items.use.self.module]
当 `self` 在[花括号语法](use-declarations.md#r-items.use.multiple-syntax)中使用时，花括号组之前的路径必须解析为[模块](modules.md#r-items.mod)、[枚举](enumerations.md#r-items.enum)或 [trait](traits.md#r-items.traits)。

```rust
mod m {
    pub enum E { V1, V2 }
    pub trait Tr { fn f(&self); }
}
use m::{self as _}; // OK: Modules can be parents of `self`.
use m::E::{self, V1}; // OK: Enums can be parents of `self`.
use m::Tr::{self}; // OK: Traits can be parents of `self`.
# fn main() {}
```

```rust,compile_fail,E0432
struct S {}
use S::{self as _}; // ERROR: Structs cannot be parents of `self`.
# fn main() {}
```

r[items.use.self.namespace]
`self` 只会从父实体的[类型命名空间](../names/namespaces.md)创建绑定。例如，在下面的代码中，只导入了 `foo` mod：

```rust,compile_fail
mod bar {
    pub mod foo {}
    pub fn foo() {}
}

// This only imports the module `foo`. The function `foo` lives in
// the value namespace and is not imported.
use bar::foo::{self};

fn main() {
    foo(); //~ ERROR `foo` is a module
}
```

r[items.use.glob]
## glob 导入

r[items.use.glob.intro]
字符 `*` 可以用作 `use` 路径的最后一个段，以从前一个段所指的实体导入所有可导入实体。例如：

```rust
// Creates a non-public alias to `bar`.
use foo::*;

mod foo {
    fn i_am_private() {}
    enum Example {
        V1,
        V2,
    }
    pub fn bar() {
        // Creates local aliases to `V1` and `V2`
        // of the `Example` enum.
        use Example::*;
        let x = V1;
    }
}
```

r[items.use.glob.shadowing]
项和命名导入允许遮蔽同一[命名空间](../names/namespaces.md)中来自 glob 导入的名称。也就是说，如果同一命名空间中已有由另一个项定义的名称，则 glob 导入会被遮蔽。例如：

```rust
// This creates a binding to the `clashing::Foo` tuple struct
// constructor, but does not import its type because that would
// conflict with the `Foo` struct defined here.
//
// Note that the order of definition here is unimportant.
use clashing::*;
struct Foo {
    field: f32,
}

fn do_stuff() {
    // Uses the constructor from `clashing::Foo`.
    let f1 = Foo(123);
    // The struct expression uses the type from
    // the `Foo` struct defined above.
    let f2 = Foo { field: 1.0 };
    // `Bar` is also in scope due to the glob import.
    let z = Bar {};
}

mod clashing {
    pub struct Foo(pub i32);
    pub struct Bar {}
}
```

> [!NOTE]
> 对于不允许遮蔽的区域，见[名称解析歧义](names/name-resolution.md#r-names.resolution.expansion.imports.ambiguity)。

r[items.use.glob.last-segment-only]
`*` 不能用作第一个段或中间段。

r[items.use.glob.self-import]
`*` 不能用于将模块的内容导入其自身（例如 `use self::*;`）。

r[items.use.glob.edition2018]
> [!EDITION-2018]
> 在 2015 edition 中，路径相对于 crate 根，因此像 `use *;` 这样的导入是有效的，其含义是从 crate 根导入所有内容。这不能在 crate 根自身中使用。

r[items.use.as-underscore]
## 下划线导入

r[items.use.as-underscore.intro]
可以使用下划线以 `use path as _` 的形式导入项，而不将其绑定到名称。这对于导入 trait 尤其有用，这样就可以使用其方法而不导入该 trait 的符号，例如当该 trait 的符号可能与另一个符号冲突时。另一个例子是链接外部 crate 而不导入其名称。

r[items.use.as-underscore.glob]
星号 glob 导入会以不可命名的形式导入通过 `_` 导入的项。

```rust
mod foo {
    pub trait Zoo {
        fn zoo(&self) {}
    }

    impl<T> Zoo for T {}
}

use self::foo::Zoo as _;
struct Zoo;  // Underscore import avoids name conflict with this item.

fn main() {
    let z = Zoo;
    z.zoo();
}
```

r[items.use.as-underscore.macro]
唯一且不可命名的符号会在宏展开之后创建，因此宏可以安全地发出对 `_` 导入的多个引用。例如，以下代码不应产生错误：

```rust
macro_rules! m {
    ($item: item) => { $item $item }
}

m!(use std as _;);
// This expands to:
// use std as _;
// use std as _;
```

r[items.use.restrictions]
## 限制

以下规则是对有效 `use` 声明的限制。

r[items.use.restrictions.crate-alias]
使用 `crate` 导入当前 crate 时，必须使用 `as` 定义绑定名称。

> [!EXAMPLE]
> ```rust
> use crate as root;
> use crate::{self as root2};
>
> // Not allowed:
> // use crate;
> // use crate::{self};
> ```

r[items.use.restrictions.macro-crate-alias]
在宏转录器中使用 [`$crate`](../paths.md#r-paths.qualifiers.macro-crate) 导入当前 crate 时，必须使用 `as` 定义绑定名称。

> [!EXAMPLE]
> ```rust
> macro_rules! import_crate_root {
>     () => {
>         use $crate as my_crate;
>         use $crate::{self as my_crate2};
>     };
> }
> ```

r[items.use.restrictions.self-alias]
使用 `self` 导入当前模块时，必须使用 `as` 定义绑定名称。

> [!EXAMPLE]
> ```rust
> use {self as this_module};
> use self as this_module2;
> use self::{self as this_module3};
>
> // Not allowed:
> // use {self};
> // use self;
> // use self::{self};
> ```

r[items.use.restrictions.super-alias]
使用 `super` 导入父模块时，必须使用 `as` 定义绑定名称。

> [!EXAMPLE]
> ```rust
> mod a {
>     mod b {
>         use super as parent;
>         use super::{self as parent2};
>         use self::super as parent3;
>         use super::super as grandparent;
>         use super::super::{self as grandparent2};
>
>         // Not allowed:
>         // use super;
>         // use super::{self};
>         // use self::super;
>         // use super::super;
>         // use super::super::{self};
>     }
> }
> ```

r[items.use.restrictions.extern-prelude]
作为 [extern prelude](../names/preludes.md#extern-prelude) 的 `::` 不能被导入。

> [!EXAMPLE]
> ```rust,edition2018,compile_fail
> use ::{self as root}; //~ Error
> ```

> [!EDITION-2018]
> 在 2015 edition 中，前缀 `::` 指 crate 根，因此允许 `use ::{self as root};`，因为它与 `use crate::{self as root};` 相同。从 2018 edition 开始，`::` 前缀指 extern prelude，而它不能被直接导入。
>
> ```rust,edition2015
> use ::{self as root}; //~ Ok
> ```

r[items.use.restrictions.duplicate-name]
与任何项定义一样，`use` 导入不能在模块或块中的同一命名空间内创建同名的重复绑定。

r[items.use.restrictions.variant]
`use` 路径不能通过[类型别名](type-aliases.md)引用枚举变体。

> [!EXAMPLE]
> ```rust,compile_fail
> enum MyEnum {
>   MyVariant
> }
> type TypeAlias = MyEnum;
>
> use MyEnum::MyVariant; //~ OK
> use TypeAlias::MyVariant; //~ ERROR
> ```

[`$crate`]: paths.qualifiers.macro-crate
[Attributes]: ../attributes.md
[brace syntax]: items.use.multiple-syntax
[Built-in types]: ../types.md
[Derive macros]: macro.proc.derive
[Enum variants]: enumerations.md
[enumeration]: items.enum
[`extern crate`]: extern-crates.md
[`macro_rules`]: ../macros-by-example.md
[`self`]: ../paths.md#self
[associated items]: associated-items.md
[extern prelude]: ../names/preludes.md#extern-prelude
[generic parameters]: generics.md
[items]: ../items.md
[local variables]: ../variables.md
[module]: items.mod
[name resolution ambiguities]: names.resolution.expansion.imports.ambiguity
[namespace]: ../names/namespaces.md
[namespaces]: ../names/namespaces.md
[paths]: ../paths.md
[tool attributes]: ../attributes.md#tool-attributes
[trait]: items.traits
[type alias]: type-aliases.md
[type namespace]: ../names/namespaces.md
