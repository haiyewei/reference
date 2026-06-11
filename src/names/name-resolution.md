<div class="rule" id="r-names.resolution"><a class="rule-link" href="#r-names.resolution" title="names.resolution"><span>[names<wbr>.resolution]</span></a>
</div>

# 名称解析

<div class="rule" id="r-names.resolution.intro"><a class="rule-link" href="#r-names.resolution.intro" title="names.resolution.intro"><span>[names<wbr>.resolution<wbr>.intro]</span></a>
</div>

_名称解析_ 是将路径和其他标识符关联到这些实体的声明的过程。名称被分隔到不同的[命名空间](../names/namespaces.md)中，使不同命名空间中的实体可以共享同一个名称而不冲突。每个名称在某个[作用域](../names/scopes.md)内有效，也就是该名称可以被引用的一段源文本区域。对名称的访问可能会基于其[可见性](../visibility-and-privacy.md)受到限制。

名称解析在整个编译过程中分为三个阶段。第一阶段，_展开时解析_，解析所有 [`use` 声明](../items/use-declarations.md)和[宏调用](../macros.md#macro-invocation)。第二阶段，_主解析_，解析所有尚未解析且其解析不依赖类型信息的名称。最后阶段，_类型相对解析_，在类型信息可用后解析剩余名称。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 展开时解析也称为_早期解析\_。主解析也称为_后期解析\_。

</div>

<div class="rule" id="r-names.resolution.general"><a class="rule-link" href="#r-names.resolution.general" title="names.resolution.general"><span>[names<wbr>.resolution<wbr>.general]</span></a>
</div>

## 通用

<div class="rule" id="r-names.resolution.general.intro"><a class="rule-link" href="#r-names.resolution.general.intro" title="names.resolution.general.intro"><span>[names<wbr>.resolution<wbr>.general<wbr>.intro]</span></a>
</div>

本节中的规则适用于名称解析的所有阶段。

<div class="rule" id="r-names.resolution.general.scopes"><a class="rule-link" href="#r-names.resolution.general.scopes" title="names.resolution.general.scopes"><span>[names<wbr>.resolution<wbr>.general<wbr>.scopes]</span></a>
</div>

### 作用域

<div class="rule" id="r-names.resolution.general.scopes.intro"><a class="rule-link" href="#r-names.resolution.general.scopes.intro" title="names.resolution.general.scopes.intro"><span>[names<wbr>.resolution<wbr>.general<wbr>.scopes<wbr>.intro]</span></a>
</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这是一个占位内容，供日后扩展各种作用域内名称解析的说明。

</div>

<div class="rule" id="r-names.resolution.expansion"><a class="rule-link" href="#r-names.resolution.expansion" title="names.resolution.expansion"><span>[names<wbr>.resolution<wbr>.expansion]</span></a>
</div>

## 展开时名称解析

<div class="rule" id="r-names.resolution.expansion.intro"><a class="rule-link" href="#r-names.resolution.expansion.intro" title="names.resolution.expansion.intro"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.intro]</span></a>
</div>

展开时名称解析是完成宏展开并完整生成 crate 的 [AST](../glossary.md#r-glossary.ast) 所必需的名称解析阶段。此阶段需要解析宏调用和 `use` 声明。对于通过[基于路径的作用域](../macros.md#r-macro.invocation.name-resolution)解析的宏调用，必须解析 `use` 声明。必须解析宏调用才能展开它们。

<div class="rule" id="r-names.resolution.expansion.unresolved-invocations"><a class="rule-link" href="#r-names.resolution.expansion.unresolved-invocations" title="names.resolution.expansion.unresolved-invocations"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.unresolved-invocations]</span></a>
</div>

在展开时名称解析之后，AST 不得包含任何未展开的宏调用。每个宏调用都会解析为一个有效定义，该定义存在于最终 AST 或外部 crate 中。

```rust,compile_fail
m!(); // ERROR: Cannot find macro `m` in this scope.
```

<div class="rule" id="r-names.resolution.expansion.expansion-order-stability"><a class="rule-link" href="#r-names.resolution.expansion.expansion-order-stability" title="names.resolution.expansion.expansion-order-stability"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.expansion-order-stability]</span></a>
</div>

名称解析必须是稳定的。展开之后，完全展开的 AST 中的名称必须解析为同一定义，而不受宏展开和导入解析顺序影响。

<div class="rule" id="r-names.resolution.expansion.speculation"><a class="rule-link" href="#r-names.resolution.expansion.speculation" title="names.resolution.expansion.speculation"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.speculation]</span></a>
</div>

宏展开期间选择的所有名称解析候选都被视为推测性的。一旦 crate 已完全展开，所有推测性的导入解析都会被验证，以确保宏展开没有引入任何新的歧义。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 由于宏展开具有迭代性质，这会造成所谓的时间旅行歧义，例如当宏或 glob 导入引入了一个与其自身基路径存在歧义的项时。
 > 
 > ```rust,compile_fail,E0659
 > # fn main() {}
 > macro_rules! f {
 >     () => {
 >         mod m {
 >             pub(crate) use f;
 >         }
 >     }
 > }
 > f!();
 > 
 > const _: () = {
 >     // Initially, we speculatively resolve `m` to the module in
 >     // the crate root.
 >     //
 >     // Expansion of `f` introduces a second `m` module inside this
 >     // body.
 >     //
 >     // Expansion-time resolution finalizes resolutions by re-
 >     // resolving all imports and macro invocations, sees the
 >     // introduced ambiguity and reports it as an error.
 >     m::f!(); // ERROR: `m` is ambiguous.
 > };
 > ```

</div>

<div class="rule" id="r-names.resolution.expansion.imports"><a class="rule-link" href="#r-names.resolution.expansion.imports" title="names.resolution.expansion.imports"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.imports]</span></a>
</div>

### 导入

<div class="rule" id="r-names.resolution.expansion.imports.intro"><a class="rule-link" href="#r-names.resolution.expansion.imports.intro" title="names.resolution.expansion.imports.intro"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.imports<wbr>.intro]</span></a>
</div>

所有 `use` 声明都会在此解析阶段中完全解析。[类型相对路径](name-resolution.md#r-names.resolution.type-relative)不能在此阶段解析，并会产生错误。

```rust,no_run
mod m {
    pub const C: () = ();
    pub enum E { V }
    pub type A = E;
    impl E {
        pub const C: () = ();
    }
}

// Valid imports resolved at expansion-time:
use m::C; // OK.
use m::E; // OK.
use m::A; // OK.
use m::E::V; // OK.

// Valid expressions resolved during type-relative resolution:
let _ = m::A::V; // OK.
let _ = m::E::C; // OK.
```

```rust,compile_fail,E0432
# mod m {
#     pub const C: () = ();
#     pub enum E { V }
#     pub type A = E;
#     impl E {
#         pub const C: () = ();
#     }
# }
// Invalid type-relative imports that can't resolve at expansion-time:
use m::A::V; // ERROR: Unresolved import `m::A::V`.
use m::E::C; // ERROR: Unresolved import `m::E::C`.
```

<div class="rule" id="r-names.resolution.expansion.imports.shadowing"><a class="rule-link" href="#r-names.resolution.expansion.imports.shadowing" title="names.resolution.expansion.imports.shadowing"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.imports<wbr>.shadowing]</span></a>
</div>

通过[外层作用域](#r-names.resolution.general.scopes)中的 `use` 声明引入的名称，会被内层作用域中同一命名空间内同名的候选遮蔽，但受[名称解析歧义](#r-names.resolution.expansion.imports.ambiguity)另有限制的情况除外。

```rust,no_run
pub mod m1 {
    pub mod ambig {
        pub const C: u8 = 1;
    }
}

pub mod m2 {
    pub mod ambig {
        pub const C: u8 = 2;
    }
}

// This introduces the name `ambig` in the outer scope.
use m1::ambig;
const _: () = {
    // This shadows `ambig` in the inner scope.
    use m2::ambig;
    // The inner candidate is selected here
    // as the resolution of `ambig`.
    use ambig::C;
    assert!(C == 2);
};
```

<div class="rule" id="r-names.resolution.expansion.imports.shadowing.shared-scope"><a class="rule-link" href="#r-names.resolution.expansion.imports.shadowing.shared-scope" title="names.resolution.expansion.imports.shadowing.shared-scope"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.imports<wbr>.shadowing<wbr>.shared-scope]</span></a>
</div>

在单个作用域内，允许在以下情况下遮蔽通过 `use` 声明引入的名称：

- [`use` glob 遮蔽](../items/use-declarations.md#r-items.use.glob.shadowing)
- [宏文本作用域遮蔽](../macros-by-example.md#r-macro.decl.scope.textual.shadow)

<div class="rule" id="r-names.resolution.expansion.imports.ambiguity"><a class="rule-link" href="#r-names.resolution.expansion.imports.ambiguity" title="names.resolution.expansion.imports.ambiguity"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.imports<wbr>.ambiguity]</span></a>
</div>

#### 歧义

<div class="rule" id="r-names.resolution.expansion.imports.ambiguity.intro"><a class="rule-link" href="#r-names.resolution.expansion.imports.ambiguity.intro" title="names.resolution.expansion.imports.ambiguity.intro"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.imports<wbr>.ambiguity<wbr>.intro]</span></a>
</div>

在展开时解析期间，有些情况下，一个导入或宏调用的名称可能指向多个宏定义、`use` 声明或模块，而编译器无法一致地确定哪个候选应遮蔽另一个候选。在这些情况下不能允许遮蔽，编译器会改为发出歧义错误。

<div class="rule" id="r-names.resolution.expansion.imports.ambiguity.glob-vs-glob"><a class="rule-link" href="#r-names.resolution.expansion.imports.ambiguity.glob-vs-glob" title="names.resolution.expansion.imports.ambiguity.glob-vs-glob"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.imports<wbr>.ambiguity<wbr>.glob-vs-glob]</span></a>
</div>

名称不得通过有歧义的 glob 导入来解析。只要名称未被使用，glob 导入允许在同一命名空间中导入相互冲突的名称。来自有歧义 glob 导入且具有冲突候选的名称，仍可被非 glob 导入遮蔽，并且可以使用而不产生错误。错误发生在使用时，而不是导入时。

```rust,compile_fail,E0659
mod m1 {
    pub struct Ambig;
}

mod m2 {
    pub struct Ambig;
}

// OK: This brings conficting names in the same namespace into scope
// but they have not been used yet.
use m1::*;
use m2::*;

const _: () = {
    // The error happens when the name with the conflicting candidates
    // is used.
    let x = Ambig; // ERROR: `Ambig` is ambiguous.
};
```

```rust,no_run
# mod m1 {
#     pub struct Ambig;
# }
#
# mod m2 {
#     pub struct Ambig;
# }
#
# use m1::*;
# use m2::*; // OK: No name conflict.
const _: () = {
    // This is permitted, since resolution is not through the
    // ambiguous globs.
    struct Ambig;
    let x = Ambig; // OK.
};
```

允许多个 glob 导入导入同一个名称；如果这些导入（跟随重导出后）指向同一个项，则该名称允许被使用。该名称的可见性是这些导入中的最大可见性。

```rust,no_run
mod m1 {
    pub struct Ambig;
}

mod m2 {
    // This reexports the same `Ambig` item from a second module.
    pub use super::m1::Ambig;
}

mod m3 {
    // These both import the same `Ambig`.
    //
    // The visibility of `Ambig` is `pub` because that is the
    // maximum visibility between these two `use` declarations.
    pub use super::m1::*;
    use super::m2::*;
}

mod m4 {
    // `Ambig` can be used through the `m3` globs and still has
    // `pub` visibility.
    pub use crate::m3::Ambig;
}

const _: () = {
    // Therefore, we can use it here.
    let _ = m4::Ambig; // OK.
};
# fn main() {}
```

<div class="rule" id="r-names.resolution.expansion.imports.ambiguity.glob-vs-outer"><a class="rule-link" href="#r-names.resolution.expansion.imports.ambiguity.glob-vs-outer" title="names.resolution.expansion.imports.ambiguity.glob-vs-outer"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.imports<wbr>.ambiguity<wbr>.glob-vs-outer]</span></a>
</div>

当[外层作用域](#r-names.resolution.general.scopes)中有另一个可用候选时，导入和宏调用中的名称不得通过 glob 导入解析。

<div class="rule" id="r-names.resolution.expansion.imports.ambiguity.panic-hack"><a class="rule-link" href="#r-names.resolution.expansion.imports.ambiguity.panic-hack" title="names.resolution.expansion.imports.ambiguity.panic-hack"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.imports<wbr>.ambiguity<wbr>.panic-hack]</span></a>
</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 当 [`core::panic!`](../../core/macro.panic.html) 或 [`std::panic!`](../../std/macro.panic.html) 之一由于[标准库 prelude](./preludes.md#r-names.preludes.std)进入作用域，并且用户编写的 [glob 导入](../items/use-declarations.md#r-items.use.glob)将另一个带入作用域时，即使存在歧义，`rustc` 目前也允许使用 `panic!`。用户编写的 glob 导入会优先用于解析此歧义。
 > 
 > 在 Rust 2021 及以后，[`core::panic!`](../../core/macro.panic.html) 和 [`std::panic!`](../../std/macro.panic.html) 的行为相同。但在更早的 edition 中它们不同；只有 [`std::panic!`](../../std/macro.panic.html) 接受 [`String`](../../alloc/string/struct.String.html) 作为格式实参。
 > 
 > 例如，这是一个错误：
 > 
 > ```rust,edition2018,compile_fail,E0308
 > extern crate core;
 > use ::core::prelude::v1::*;
 > fn main() {
 >     panic!(std::string::String::new()); // ERROR.
 > }
 > ```
 > 
 > 而这是被接受的：
 > 
 > <!-- ignore: Can't test with `no_std`. -->
 > 
 > ```rust,edition2018,ignore
 > #![no_std]
 > extern crate std;
 > use ::std::prelude::v1::*;
 > fn main() {
 >     panic!(std::string::String::new()); // OK.
 > }
 > ```
 > 
 > 不要依赖这种行为；计划是移除它。
 > 
 > 详情见 [Rust issue #147319](https://github.com/rust-lang/rust/issues/147319)。

</div>

```rust,compile_fail,E0659
mod glob {
    pub mod ambig {
        pub struct Name;
    }
}

// Outer `ambig` candidate.
pub mod ambig {
    pub struct Name;
}

const _: () = {
    // Cannot resolve `ambig` through this glob
    // because of the outer `ambig` candidate above.
    use glob::*;
    use ambig::Name; // ERROR: `ambig` is ambiguous.
};
```

```rust,compile_fail,E0659
// As above, but with macros.
pub mod m {
    macro_rules! f {
        () => {};
    }
    pub(crate) use f;
}
pub mod glob {
    macro_rules! f {
        () => {};
    }
    pub(crate) use f as ambig;
}

use m::f as ambig;

const _: () = {
    use glob::*;
    ambig!(); // ERROR: `ambig` is ambiguous.
};
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这些歧义错误是展开时解析特有的。在解析的后续阶段中，给定名称有多个可用候选并不视为错误。只要导入本身没有歧义，总会有一个单一且无歧义的最近解析。
 > 
 > ```rust,no_run
 > mod glob {
 >     pub const AMBIG: u8 = 1;
 > }
 > 
 > mod outer {
 >     pub const AMBIG: u8 = 2;
 > }
 > 
 > use outer::AMBIG;
 > 
 > const C: () = {
 >     use glob::*;
 >     assert!(AMBIG == 1);
 >     //      ^---- This `AMBIG` is resolved during primary resolution.
 > };
 > ```

</div>

<div class="rule" id="r-names.resolution.expansion.imports.ambiguity.path-vs-textual-macro"><a class="rule-link" href="#r-names.resolution.expansion.imports.ambiguity.path-vs-textual-macro" title="names.resolution.expansion.imports.ambiguity.path-vs-textual-macro"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.imports<wbr>.ambiguity<wbr>.path-vs-textual-macro]</span></a>
</div>

名称不得通过有歧义的宏重导出来解析。当宏重导出会遮蔽[外层作用域](#r-names.resolution.general.scopes)中同名的文本宏候选时，这些宏重导出就是有歧义的。

```rust,compile_fail,E0659
// Textual macro candidate.
macro_rules! ambig {
    () => {}
}

// Path-based macro candidate.
macro_rules! path_based {
    () => {}
}

pub fn f() {
    // This reexport of the `path_based` macro definition
    // as `ambig` may not shadow the `ambig` macro definition
    // which is resolved via textual macro scope.
    use path_based as ambig;
    ambig!(); // ERROR: `ambig` is ambiguous.
}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 需要这项限制是由于编译器中的实现细节，具体来说是当前的作用域访问逻辑以及支持此行为的复杂性。此歧义错误将来可能会被移除。

</div>

<div class="rule" id="r-names.resolution.expansion.macros"><a class="rule-link" href="#r-names.resolution.expansion.macros" title="names.resolution.expansion.macros"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.macros]</span></a>
</div>

### 宏

<div class="rule" id="r-names.resolution.expansion.macros.intro"><a class="rule-link" href="#r-names.resolution.expansion.macros.intro" title="names.resolution.expansion.macros.intro"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.macros<wbr>.intro]</span></a>
</div>

解析宏时，会遍历可用作用域以查找可用候选。宏分为两个子命名空间，一个用于类函数宏，另一个用于属性和 derive。来自错误子命名空间的解析候选会被忽略。

<div class="rule" id="r-names.resolution.expansion.macros.visitation-order"><a class="rule-link" href="#r-names.resolution.expansion.macros.visitation-order" title="names.resolution.expansion.macros.visitation-order"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.macros<wbr>.visitation-order]</span></a>
</div>

可用的作用域种类会按以下顺序访问。每种作用域种类都代表一个或多个作用域。

- [derive 辅助属性](../procedural-macros.md#r-macro.proc.derive.attributes)
- [文本作用域宏](../macros-by-example.md#r-macro.decl.scope.textual)
- [基于路径的作用域宏](../macros.md#r-macro.invocation.name-resolution)
- [`macro_use` prelude](./preludes.md#r-names.preludes.macro_use)
- [标准库 prelude](./preludes.md#r-names.preludes.std)
- [内置属性](./preludes.md#r-names.preludes.lang)

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 编译器会尝试解析在其关联宏将它们引入作用域之前使用的 derive 辅助属性。这个作用域会在用于解析已正确进入作用域的 derive 辅助属性候选的作用域之后访问。此行为计划移除。
 > 
 > 更多信息见 [derive 辅助属性作用域](../procedural-macros.md#r-macro.proc.derive.attributes.scope)。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 此访问顺序将来可能会改变，例如根据文本作用域候选和基于路径的作用域候选的词法作用域交错访问它们。

</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 从 edition 2018 开始，当存在 [`#[no_implicit_prelude]`](preludes.md#r-names.preludes.no_implicit_prelude) 时，不会访问 `#[macro_use]` prelude。

</div>

<div class="rule" id="r-names.resolution.expansion.macros.reserved-names"><a class="rule-link" href="#r-names.resolution.expansion.macros.reserved-names" title="names.resolution.expansion.macros.reserved-names"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.macros<wbr>.reserved-names]</span></a>
</div>

名称 `cfg` 和 `cfg_attr` 保留在宏属性[子命名空间](../names/namespaces.md#r-names.namespaces.sub-namespaces)中。

<div class="rule" id="r-names.resolution.expansion.macros.ambiguity"><a class="rule-link" href="#r-names.resolution.expansion.macros.ambiguity" title="names.resolution.expansion.macros.ambiguity"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.macros<wbr>.ambiguity]</span></a>
</div>

#### 歧义

<div class="rule" id="r-names.resolution.expansion.macros.ambiguity.more-expanded-vs-outer"><a class="rule-link" href="#r-names.resolution.expansion.macros.ambiguity.more-expanded-vs-outer" title="names.resolution.expansion.macros.ambiguity.more-expanded-vs-outer"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.macros<wbr>.ambiguity<wbr>.more-expanded-vs-outer]</span></a>
</div>

名称不得通过宏展开内的有歧义候选来解析。当宏展开内的候选会遮蔽来自第一个候选的宏展开之外的同名候选，并且正在解析的名称的调用也来自第一个候选的宏展开之外时，宏展开内的这些候选就是有歧义的。

```rust,compile_fail,E0659
macro_rules! define_ambig {
    () => {
        macro_rules! ambig {
            () => {}
        }
    }
}

// Introduce outer candidate definition for `ambig` macro invocation.
macro_rules! ambig {
    () => {}
}

// Introduce a second candidate definition for `ambig` inside of a
// macro expansion.
define_ambig!();

// The definition of `ambig` from the second invocation
// of `define_ambig` is the innermost canadidate.
//
// The definition of `ambig` from the first invocation of
// `define_ambig` is the second candidate.
//
// The compiler checks that the first candidate is inside of a macro
// expansion, that the second candidate is not from within the same
// macro expansion, and that the name being resolved is not from
// within the same macro expansion.
ambig!(); // ERROR: `ambig` is ambiguous.
```

相反的情况不被视为有歧义。

```rust,no_run
# macro_rules! define_ambig {
#     () => {
#         macro_rules! ambig {
#             () => {}
#         }
#     }
# }
// Swap order of definitions.
define_ambig!();
macro_rules! ambig {
    () => {}
}
// The innermost candidate is now less expanded so it may shadow more
// the macro expanded definition above it.
ambig!();
```

如果正在解析的调用位于最内层候选的展开之内，也不构成歧义。

```rust,no_run
macro_rules! ambig {
    () => {}
}

macro_rules! define_and_invoke_ambig {
    () => {
        // Define innermost candidate.
        macro_rules! ambig {
            () => {}
        }

        // Invocation of `ambig` is in the same expansion as the
        // innermost candidate.
        ambig!(); // OK
    }
}

define_and_invoke_ambig!();
```

即使两个定义都来自同一个宏的调用，也无关紧要；最外层候选仍被视为“展开程度较低”，因为它不在包含最内层候选定义的展开之内。

```rust,compile_fail,E0659
# macro_rules! define_ambig {
#     () => {
#         macro_rules! ambig {
#             () => {}
#         }
#     }
# }
define_ambig!();
define_ambig!();
ambig!(); // ERROR: `ambig` is ambiguous.
```

只要该名称的最内层候选来自宏展开之内，这也适用于导入。

```rust,compile_fail,E0659
macro_rules! define_ambig {
    () => {
        mod ambig {
            pub struct Name;
        }
    }
}

mod ambig {
    pub struct Name;
}

const _: () = {
    // Introduce innermost candidate for
    // `ambig` mod in this macro expansion.
    define_ambig!();
    use ambig::Name; // ERROR: `ambig` is ambiguous.
};
```

<div class="rule" id="r-names.resolution.expansion.macros.ambiguity.built-in-attr"><a class="rule-link" href="#r-names.resolution.expansion.macros.ambiguity.built-in-attr" title="names.resolution.expansion.macros.ambiguity.built-in-attr"><span>[names<wbr>.resolution<wbr>.expansion<wbr>.macros<wbr>.ambiguity<wbr>.built-in-attr]</span></a>
</div>

用户定义的属性或 derive 宏不得遮蔽内置非宏属性（例如 inline）。

<!-- ignore: test doesn't support proc-macro -->

```rust,ignore
// with-helper/src/lib.rs
# use proc_macro::TokenStream;
#[proc_macro_derive(WithHelperAttr, attributes(non_exhaustive))]
//                                             ^^^^^^^^^^^^^^
//                                   User-defined attribute candidate.
// ...
# pub fn derive_with_helper_attr(_item: TokenStream) -> TokenStream {
#     TokenStream::new()
# }
```

<!-- ignore: requires external crates -->

```rust,ignore
// src/lib.rs
#[derive(with_helper::WithHelperAttr)]
#[non_exhaustive] // ERROR: `non_exhaustive` is ambiguous.
struct S;
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 无论内置属性是作为哪个名称的候选，这都适用：
 > 
 > <!-- ignore: test doesn't support proc-macro -->
 > 
 > ```rust,ignore
 > // with-helper/src/lib.rs
 > # use proc_macro::TokenStream;
 > #
 > #[proc_macro_derive(WithHelperAttr, attributes(helper))]
 > //                                             ^^^^^^
 > //                                 User-defined attribute candidate.
 > // ...
 > # pub fn derive_with_helper_attr(_item: TokenStream) -> TokenStream {
 > #     TokenStream::new()
 > # }
 > ```
 > 
 > <!-- ignore: requires external crates -->
 > 
 > ```rust,ignore
 > // src/lib.rs
 > use inline as helper;
 > //            ^----- Built-in attribute candidate via reexport.
 > 
 > #[derive(with_helper::WithHelperAttr)]
 > #[helper] // ERROR: `helper` is ambiguous.
 > struct S;
 > ```

</div>

<div class="rule" id="r-names.resolution.primary"><a class="rule-link" href="#r-names.resolution.primary" title="names.resolution.primary"><span>[names<wbr>.resolution<wbr>.primary]</span></a>
</div>

## 主名称解析

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这是一个占位内容，供日后扩展主名称解析的说明。

</div>

<div class="rule" id="r-names.resolution.type-relative"><a class="rule-link" href="#r-names.resolution.type-relative" title="names.resolution.type-relative"><span>[names<wbr>.resolution<wbr>.type-relative]</span></a>
</div>

## 类型相对解析

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这是一个占位内容，供日后扩展类型依赖解析的说明。

</div>
