r[vis]
# 可见性和私有性

r[vis.syntax]
```grammar,items
Visibility ->
      `pub`
    | `pub` `(` `crate` `)`
    | `pub` `(` `self` `)`
    | `pub` `(` `super` `)`
    | `pub` `(` `in` SimplePath `)`
```

r[vis.intro]
这两个术语通常可以互换使用，它们试图表达的是这个问题的答案：“这个项能否在此位置使用？”

r[vis.name-hierarchy]
Rust 的名称解析在命名空间的全局层次结构上运行。该层次结构中的每一层都可以被看作某个项。这些项是上文提到的那些项之一，但也包括外部 crate。声明或定义一个新模块，可以看作是在定义所在位置向该层次结构中插入一棵新树。

r[vis.privacy]
为了控制接口是否可以跨模块使用，Rust 会检查项的每次使用，以判断是否应该允许。这就是生成私有性警告的地方，换句话说，也就是“你使用了另一个模块的私有项，而这是不被允许的”。

r[vis.default]
默认情况下，所有内容都是 *私有* 的，但有两个例外：`pub` Trait 中的关联项默认是公开的；`pub` enum 中的枚举变体也默认是公开的。当某个项被声明为 `pub` 时，可以认为它可被外部世界访问。例如：

```rust
# fn main() {}
// 声明一个私有结构体
struct Foo;

// 声明一个带有私有字段的公开结构体
pub struct Bar {
    field: i32,
}

// 声明一个带有两个公开变体的公开枚举
pub enum State {
    PubliclyAccessibleState,
    PubliclyAccessibleState2,
}
```

r[vis.access]
根据项是公开还是私有这一概念，Rust 在两种情况下允许访问项：

1. 如果一个项是公开的，并且从某个模块 `m` 可以访问该项的所有祖先模块，那么它就可以从 `m` 外部访问。也有可能可以通过重导出来命名该项。见下文。
2. 如果一个项是私有的，则当前模块及其后代可以访问它。

这两种情况在创建模块层次结构时出人意料地强大，可以在暴露公开 API 的同时隐藏内部实现细节。为帮助说明，下面列出几个用例以及它们意味着什么：

* 库开发者需要向链接到其库的 crate 暴露功能。作为第一种情况的结果，这意味着任何可从外部使用的内容，从根到目标项的整条路径都必须是 `pub`。链上的任何私有项都会禁止外部访问。

* 一个 crate 需要一个对自身全局可用的“辅助模块”，但不希望把该辅助模块作为公开 API 暴露出去。为实现这一点，crate 层次结构的根会有一个私有模块，而该模块内部又有一套“公开 API”。因为整个 crate 都是根的后代，所以整个本地 crate 都可以通过第二种情况访问这个私有模块。

* 为一个模块编写单元测试时，一种常见惯用法是在待测试模块下创建一个直接子模块，名为 `mod test`。该模块可以通过第二种情况访问父模块的任何项，这意味着也可以从子模块无缝测试内部实现细节。

在第二种情况中，提到私有项“可以被当前模块及其后代访问”，但访问一个项的确切含义取决于该项是什么。

r[vis.use]
例如，访问一个模块意味着查看其内部（以导入更多项）。另一方面，访问一个函数意味着调用它。此外，路径表达式和导入语句也被认为是在访问项，因为只有当目标位于当前可见性作用域内时，该导入或表达式才是有效的。

下面是一个程序示例，它展示了上文概述的三种情况：

```rust
// 这个模块是私有的，这意味着没有外部 crate 可以访问此
// 模块。不过，因为它在当前 crate 的根处是私有的，crate 中的任何
// 模块都可以访问此模块中任何公开可见的项。
mod crate_helper_module {

    // 这个函数可以被当前 crate 中的任何内容使用
    pub fn crate_helper() {}

    // 这个函数*不能*被 crate 中的其他任何内容使用。它在
    // `crate_helper_module` 外部不是公开可见的，所以只有这个
    // 当前模块及其后代可以访问它。
    fn implementation_detail() {}
}

// 这个函数“对根公开”，这意味着它可供链接到此 crate 的
// 外部 crate 使用。
pub fn public_api() {}

// 与 'public_api' 类似，这个模块是公开的，因此外部 crate 可以查看
// 其内部。
pub mod submodule {
    use crate::crate_helper_module;

    pub fn my_method() {
        // 本地 crate 中的任何项都可以通过上述两条规则的组合
        // 调用辅助模块的公开接口。
        crate_helper_module::crate_helper();
    }

    // 对于任何不是 `submodule` 后代的模块，
    // 这个函数都是隐藏的
    fn my_implementation() {}

    #[cfg(test)]
    mod test {

        #[test]
        fn test_my_implementation() {
            // 因为这个模块是 `submodule` 的后代，所以它被允许
            // 访问 `submodule` 内部的私有项，而不会造成私有性
            // 违规。
            super::my_implementation();
        }
    }
}

# fn main() {}
```

要让 Rust 程序通过私有性检查阶段，所有路径都必须是在上述两条规则下有效的访问。这包括所有 use 语句、表达式、类型等。

r[vis.scoped]
## `pub(in path)`、`pub(crate)`、`pub(super)` 和 `pub(self)`

r[vis.scoped.intro]
除了公开和私有之外，Rust 还允许用户将项声明为仅在给定作用域内可见。`pub` 限制的规则如下：

r[vis.scoped.in]
- `pub(in path)` 使项在所提供的 `path` 内可见。`path` 必须是一个简单路径，并解析为正在声明可见性的项的祖先模块。`path` 中的每个标识符都必须直接指向一个模块（而不是指向由 `use` 语句引入的名称）。

r[vis.scoped.crate]
- `pub(crate)` 使项在当前 crate 内可见。

r[vis.scoped.super]
- `pub(super)` 使项对父模块可见。这等价于 `pub(in super)`。

r[vis.scoped.self]
- `pub(self)` 使项对当前模块可见。这等价于 `pub(in self)` 或完全不使用 `pub`。

r[vis.scoped.edition2018]
> [!EDITION-2018]
> 从 2018 edition 开始，`pub(in path)` 的路径必须以 `crate`、`self` 或 `super` 开头。2015 edition 还可以使用以 `::` 开头的路径，或从 crate 根开始的模块。

下面是一个示例：

```rust,edition2015
pub mod outer_mod {
    pub mod inner_mod {
        // 这个函数在 `outer_mod` 内可见
        pub(in crate::outer_mod) fn outer_mod_visible_fn() {}
        // 与上面相同，这只在 2015 版次中有效。
        pub(in outer_mod) fn outer_mod_visible_fn_2015() {}

        // 这个函数对整个 crate 可见
        pub(crate) fn crate_visible_fn() {}

        // 这个函数在 `outer_mod` 内可见
        pub(super) fn super_mod_visible_fn() {
            // 这个函数可见，因为我们在同一个 `mod` 中
            inner_mod_visible_fn();
        }

        // 这个函数仅在 `inner_mod` 内可见，
        // 这与让它保持私有相同。
        pub(self) fn inner_mod_visible_fn() {}
    }
    pub fn foo() {
        inner_mod::outer_mod_visible_fn();
        inner_mod::crate_visible_fn();
        inner_mod::super_mod_visible_fn();

        // 这个函数不再可见，因为我们在 `inner_mod` 外部
        // 错误！`inner_mod_visible_fn` 是私有的
        //inner_mod::inner_mod_visible_fn();
    }
}

fn bar() {
    // 这个函数仍然可见，因为我们在同一个 crate 中
    outer_mod::inner_mod::crate_visible_fn();

    // 这个函数不再可见，因为我们在 `outer_mod` 外部
    // 错误！`super_mod_visible_fn` 是私有的
    //outer_mod::inner_mod::super_mod_visible_fn();

    // 这个函数不再可见，因为我们在 `outer_mod` 外部
    // 错误！`outer_mod_visible_fn` 是私有的
    //outer_mod::inner_mod::outer_mod_visible_fn();

    outer_mod::foo();
}

fn main() { bar() }
```

> [!NOTE]
> 此语法只会给项的可见性再增加一项限制。它并不保证该项在指定作用域的所有部分内都可见。要访问一个项，从该项到当前作用域之间的所有父项也仍然必须可见。

r[vis.reexports]
## 重导出和可见性

r[vis.reexports.intro]
Rust 允许通过 `pub use` 指令公开重导出项。因为这是一个公开指令，它允许该项通过上述规则在当前模块中使用。它实质上允许公开访问被重导出的项。例如，以下程序是有效的：

```rust
pub use self::implementation::api;

mod implementation {
    pub mod api {
        pub fn f() {}
    }
}

# fn main() {}
```

这意味着，任何引用 `implementation::api::f` 的外部 crate 都会收到私有性违规，而路径 `api::f` 则会被允许。

r[vis.reexports.private-item]
重导出私有项时，可以认为这是允许通过重导出短路“私有性链”，而不是像通常那样经过命名空间层次结构。
