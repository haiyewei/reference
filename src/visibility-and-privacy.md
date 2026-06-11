<div class="rule" id="r-vis"><a class="rule-link" href="#r-vis" title="vis"><span>[vis]</span></a>
</div>

# 可见性和私有性

<div class="rule" id="r-vis.syntax"><a class="rule-link" href="#r-vis.syntax" title="vis.syntax"><span>[vis<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-Visibility" onclick="show_railroad()">[Visibility](visibility-and-privacy.md#railroad-Visibility)</span> →  
      <span class="grammar-literal">pub</span>  
    \| <span class="grammar-literal">pub</span> <span class="grammar-literal">(</span> <span class="grammar-literal">crate</span> <span class="grammar-literal">)</span>  
    \| <span class="grammar-literal">pub</span> <span class="grammar-literal">(</span> <span class="grammar-literal">self</span> <span class="grammar-literal">)</span>  
    \| <span class="grammar-literal">pub</span> <span class="grammar-literal">(</span> <span class="grammar-literal">super</span> <span class="grammar-literal">)</span>  
    \| <span class="grammar-literal">pub</span> <span class="grammar-literal">(</span> <span class="grammar-literal">in</span> <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span> <span class="grammar-literal">)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 394px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-Visibility"><svg class="railroad" viewBox="0 0 394 206" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="visibility-and-privacy.md#grammar-Visibility">
<text class="comment" x="50" y="25">
Visibility</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 44 0 h 256 m -125 0 l -5 -5 m 0 10 l 5 -5 m 125 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="42"/>
<text x="81" y="58">
pub</text>
</g>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 300 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 300 0 v -33"/>
<path d=" M 47 107 v 33 m 300 0 v -33"/>
<path d=" M 47 140 v 33 m 300 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 190 0 h 86 m -40 0 l -5 -5 m 0 10 l 5 -5 m 40 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="75"/>
<text x="81" y="91">
pub</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="113" y="75"/>
<text x="127" y="91">
(</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="151" y="75"/>
<text x="181" y="91">
crate</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="221" y="75"/>
<text x="235" y="91">
)</text>
</g>
<path d=" M 103 86 h 10"/>
<path d=" M 141 86 h 10"/>
<path d=" M 211 86 h 10"/>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 182 0 h 94 m -44 0 l -5 -5 m 0 10 l 5 -5 m 44 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="108"/>
<text x="81" y="124">
pub</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="113" y="108"/>
<text x="127" y="124">
(</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="151" y="108"/>
<text x="177" y="124">
self</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="213" y="108"/>
<text x="227" y="124">
)</text>
</g>
<path d=" M 103 119 h 10"/>
<path d=" M 141 119 h 10"/>
<path d=" M 203 119 h 10"/>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 190 0 h 86 m -40 0 l -5 -5 m 0 10 l 5 -5 m 40 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="141"/>
<text x="81" y="157">
pub</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="113" y="141"/>
<text x="127" y="157">
(</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="151" y="141"/>
<text x="181" y="157">
super</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="221" y="141"/>
<text x="235" y="157">
)</text>
</g>
<path d=" M 103 152 h 10"/>
<path d=" M 141 152 h 10"/>
<path d=" M 211 152 h 10"/>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 276 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="174"/>
<text x="81" y="190">
pub</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="113" y="174"/>
<text x="127" y="190">
(</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="151" y="174"/>
<text x="169" y="190">
in</text>
</g>
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="197" y="174"/>
<text x="247" y="190">
SimplePath</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="307" y="174"/>
<text x="321" y="190">
)</text>
</g>
<path d=" M 103 185 h 10"/>
<path d=" M 141 185 h 10"/>
<path d=" M 187 185 h 10"/>
<path d=" M 297 185 h 10"/>
</g>
</g>
<path d=" M 369 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 359 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-vis.intro"><a class="rule-link" href="#r-vis.intro" title="vis.intro"><span>[vis<wbr>.intro]</span></a>
</div>

这两个术语通常可以互换使用，它们试图表达的是这个问题的答案：“这个项能否在此位置使用？”

<div class="rule" id="r-vis.name-hierarchy"><a class="rule-link" href="#r-vis.name-hierarchy" title="vis.name-hierarchy"><span>[vis<wbr>.name-hierarchy]</span></a>
</div>

Rust 的名称解析在命名空间的全局层次结构上运行。该层次结构中的每一层都可以被看作某个项。这些项是上文提到的那些项之一，但也包括外部 crate。声明或定义一个新模块，可以看作是在定义所在位置向该层次结构中插入一棵新树。

<div class="rule" id="r-vis.privacy"><a class="rule-link" href="#r-vis.privacy" title="vis.privacy"><span>[vis<wbr>.privacy]</span></a>
</div>

为了控制接口是否可以跨模块使用，Rust 会检查项的每次使用，以判断是否应该允许。这就是生成私有性警告的地方，换句话说，也就是“你使用了另一个模块的私有项，而这是不被允许的”。

<div class="rule" id="r-vis.default"><a class="rule-link" href="#r-vis.default" title="vis.default"><span>[vis<wbr>.default]</span></a>
</div>

默认情况下，所有内容都是 _私有_ 的，但有两个例外：`pub` Trait 中的关联项默认是公开的；`pub` enum 中的枚举变体也默认是公开的。当某个项被声明为 `pub` 时，可以认为它可被外部世界访问。例如：

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

<div class="rule" id="r-vis.access"><a class="rule-link" href="#r-vis.access" title="vis.access"><span>[vis<wbr>.access]</span></a>
</div>

根据项是公开还是私有这一概念，Rust 在两种情况下允许访问项：

1. 如果一个项是公开的，并且从某个模块 `m` 可以访问该项的所有祖先模块，那么它就可以从 `m` 外部访问。也有可能可以通过重导出来命名该项。见下文。
1. 如果一个项是私有的，则当前模块及其后代可以访问它。

这两种情况在创建模块层次结构时出人意料地强大，可以在暴露公开 API 的同时隐藏内部实现细节。为帮助说明，下面列出几个用例以及它们意味着什么：

- 库开发者需要向链接到其库的 crate 暴露功能。作为第一种情况的结果，这意味着任何可从外部使用的内容，从根到目标项的整条路径都必须是 `pub`。链上的任何私有项都会禁止外部访问。

- 一个 crate 需要一个对自身全局可用的“辅助模块”，但不希望把该辅助模块作为公开 API 暴露出去。为实现这一点，crate 层次结构的根会有一个私有模块，而该模块内部又有一套“公开 API”。因为整个 crate 都是根的后代，所以整个本地 crate 都可以通过第二种情况访问这个私有模块。

- 为一个模块编写单元测试时，一种常见惯用法是在待测试模块下创建一个直接子模块，名为 `mod test`。该模块可以通过第二种情况访问父模块的任何项，这意味着也可以从子模块无缝测试内部实现细节。

在第二种情况中，提到私有项“可以被当前模块及其后代访问”，但访问一个项的确切含义取决于该项是什么。

<div class="rule" id="r-vis.use"><a class="rule-link" href="#r-vis.use" title="vis.use"><span>[vis<wbr>.use]</span></a>
</div>

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

<div class="rule" id="r-vis.scoped"><a class="rule-link" href="#r-vis.scoped" title="vis.scoped"><span>[vis<wbr>.scoped]</span></a>
</div>

## `pub(in path)`、`pub(crate)`、`pub(super)` 和 `pub(self)`

<div class="rule" id="r-vis.scoped.intro"><a class="rule-link" href="#r-vis.scoped.intro" title="vis.scoped.intro"><span>[vis<wbr>.scoped<wbr>.intro]</span></a>
</div>

除了公开和私有之外，Rust 还允许用户将项声明为仅在给定作用域内可见。`pub` 限制的规则如下：

<div class="rule" id="r-vis.scoped.in"><a class="rule-link" href="#r-vis.scoped.in" title="vis.scoped.in"><span>[vis<wbr>.scoped<wbr>.in]</span></a>
</div>

- `pub(in path)` 使项在所提供的 `path` 内可见。`path` 必须是一个简单路径，并解析为正在声明可见性的项的祖先模块。`path` 中的每个标识符都必须直接指向一个模块（而不是指向由 `use` 语句引入的名称）。

<div class="rule" id="r-vis.scoped.crate"><a class="rule-link" href="#r-vis.scoped.crate" title="vis.scoped.crate"><span>[vis<wbr>.scoped<wbr>.crate]</span></a>
</div>

- `pub(crate)` 使项在当前 crate 内可见。

<div class="rule" id="r-vis.scoped.super"><a class="rule-link" href="#r-vis.scoped.super" title="vis.scoped.super"><span>[vis<wbr>.scoped<wbr>.super]</span></a>
</div>

- `pub(super)` 使项对父模块可见。这等价于 `pub(in super)`。

<div class="rule" id="r-vis.scoped.self"><a class="rule-link" href="#r-vis.scoped.self" title="vis.scoped.self"><span>[vis<wbr>.scoped<wbr>.self]</span></a>
</div>

- `pub(self)` 使项对当前模块可见。这等价于 `pub(in self)` 或完全不使用 `pub`。

<div class="rule" id="r-vis.scoped.edition2018"><a class="rule-link" href="#r-vis.scoped.edition2018" title="vis.scoped.edition2018"><span>[vis<wbr>.scoped<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 从 2018 版次开始，`pub(in path)` 的路径必须以 `crate`、`self` 或 `super` 开头。2015 版次还可以使用以 `::` 开头的路径，或从 crate 根开始的模块。

</div>

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

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 此语法只会给项的可见性再增加一项限制。它并不保证该项在指定作用域的所有部分内都可见。要访问一个项，从该项到当前作用域之间的所有父项也仍然必须可见。

</div>

<div class="rule" id="r-vis.reexports"><a class="rule-link" href="#r-vis.reexports" title="vis.reexports"><span>[vis<wbr>.reexports]</span></a>
</div>

## 重导出和可见性

<div class="rule" id="r-vis.reexports.intro"><a class="rule-link" href="#r-vis.reexports.intro" title="vis.reexports.intro"><span>[vis<wbr>.reexports<wbr>.intro]</span></a>
</div>

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

<div class="rule" id="r-vis.reexports.private-item"><a class="rule-link" href="#r-vis.reexports.private-item" title="vis.reexports.private-item"><span>[vis<wbr>.reexports<wbr>.private-item]</span></a>
</div>

重导出私有项时，可以认为这是允许通过重导出短路“私有性链”，而不是像通常那样经过命名空间层次结构。