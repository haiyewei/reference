r[items.mod]
# 模块

r[items.mod.syntax]
```grammar,items
Module ->
      `unsafe`? `mod` IDENTIFIER `;`
    | `unsafe`? `mod` IDENTIFIER `{`
        InnerAttribute*
        Item*
      `}`
```

r[items.mod.intro]
模块是零个或多个[项](../items.md)的容器。

r[items.mod.def]
*模块项* 是一个带有名称、用花括号包围并以关键字 `mod` 为前缀的模块。模块项会向构成 crate 的模块树中引入一个新的具名模块。

r[items.mod.nesting]
模块可以任意嵌套。

模块示例：

```rust
mod math {
    type Complex = (f64, f64);
    fn sin(f: f64) -> f64 {
        /* ... */
#       unimplemented!();
    }
    fn cos(f: f64) -> f64 {
        /* ... */
#       unimplemented!();
    }
    fn tan(f: f64) -> f64 {
        /* ... */
#       unimplemented!();
    }
}
```

r[items.mod.namespace]
模块定义在其所在模块或块的[类型命名空间](../names/namespaces.md)中。

r[items.mod.multiple-items]
在一个模块内的同一命名空间中定义多个同名项是错误。关于限制和遮蔽行为的更多细节，参见[作用域章节](../names/scopes.md)。

r[items.mod.unsafe]
`unsafe` 关键字在语法上允许出现在 `mod` 关键字之前，但会在语义层面被拒绝。这允许宏先消费该语法并使用 `unsafe` 关键字，然后再将其从 token 流中移除。

r[items.mod.outlined]
## 模块源文件名

r[items.mod.outlined.intro]
没有主体的模块会从外部文件加载。当模块没有 `path` 属性时，文件路径会对应逻辑上的[模块路径](../paths.md)。

r[items.mod.outlined.search]
祖先模块路径组件是目录，而模块内容位于以模块名加 `.rs` 扩展名命名的文件中。例如，以下模块结构可以有与之对应的文件系统结构：

| 模块路径 | 文件系统路径 | 文件内容 |
------------------------- | ---------------  | -------------
`crate`                   | `lib.rs`         | `mod util;`
`crate::util`             | `util.rs`        | `mod config;`
`crate::util::config`     | `util/config.rs` |

r[items.mod.outlined.search-mod]
模块文件名也可以是以模块名命名的目录，内容则位于该目录内名为 `mod.rs` 的文件中。上面的示例也可以改为用名为 `util/mod.rs` 的文件表示 `crate::util` 的内容。不允许同时存在 `util.rs` 和 `util/mod.rs`。

> [!NOTE]
> 在 `rustc` 1.30 之前，使用 `mod.rs` 文件是加载带有嵌套子模块的模块的方式。推荐使用新的命名约定，因为它更加一致，并避免项目中出现许多名为 `mod.rs` 的文件。

r[items.mod.outlined.path]
### `path` 属性

r[items.mod.outlined.path.intro]
用于加载外部文件模块的目录和文件可以受到 `path` 属性的影响。

r[items.mod.outlined.path.search]
对于不在内联模块块内的模块上的 `path` 属性，文件路径相对于源文件所在的目录。例如，以下代码片段会根据其所在位置使用所示路径：

<!-- ignore: requires external files -->
```rust,ignore
#[path = "foo.rs"]
mod c;
```

| 源文件 | `c` 的文件位置 | `c` 的模块路径 |
-------------- | ------------------- | ----------------------
`src/a/b.rs`   | `src/a/foo.rs`      | `crate::a::b::c`
`src/a/mod.rs` | `src/a/foo.rs`      | `crate::a::c`

r[items.mod.outlined.path.search-nested]
对于内联模块块内的 `path` 属性，文件路径的相对位置取决于 `path` 属性所在源文件的种类。“mod-rs” 源文件是根模块（如 `lib.rs` 或 `main.rs`）以及文件名为 `mod.rs` 的模块。“non-mod-rs” 源文件是所有其他模块文件。在 mod-rs 文件中，内联模块块内 `path` 属性的路径相对于 mod-rs 文件所在目录，并将内联模块组件作为目录包含在内。对于 non-mod-rs 文件，规则相同，只是路径以一个按该 non-mod-rs 模块命名的目录开头。例如，以下代码片段会根据其所在位置使用所示路径：

<!-- ignore: requires external files -->
```rust,ignore
mod inline {
    #[path = "other.rs"]
    mod inner;
}
```

| 源文件 | `inner` 的文件位置 | `inner` 的模块路径 |
-------------- | --------------------------| ----------------------------
`src/a/b.rs`   | `src/a/b/inline/other.rs` | `crate::a::b::inline::inner`
`src/a/mod.rs` | `src/a/inline/other.rs`   | `crate::a::inline::inner`

下面是一个组合使用内联模块上的 `path` 属性规则以及其中嵌套模块规则的示例（适用于 mod-rs 和 non-mod-rs 文件）：

<!-- ignore: requires external files -->
```rust,ignore
#[path = "thread_files"]
mod thread {
    // 从相对于此源文件目录的 `thread_files/tls.rs`
    // 加载 `local_data` 模块。
    #[path = "tls.rs"]
    mod local_data;
}
```

r[items.mod.attributes]
## 模块上的属性

r[items.mod.attributes.intro]
模块与所有项一样，接受外部属性。它们也接受内部属性：对于带有主体的模块，内部属性位于 `{` 之后；或者位于源文件开头，在可选的 BOM 和 shebang 之后。

r[items.mod.attributes.supported]
在模块上有意义的内置属性包括 [`cfg`](../conditional-compilation.md)、[`deprecated`](../attributes/diagnostics.md#the-deprecated-attribute)、[`doc`](../../rustdoc/the-doc-attribute.html)、[lint 检查属性](../attributes/diagnostics.md#lint-check-attributes)、[`path`](#r-items.mod.outlined.path) 和 [`no_implicit_prelude`](../names/preludes.md#the-no_implicit_prelude-attribute)。模块也接受宏属性。

[`cfg`]: ../conditional-compilation.md
[`deprecated`]: ../attributes/diagnostics.md#the-deprecated-attribute
[`doc`]: ../../rustdoc/the-doc-attribute.html
[`no_implicit_prelude`]: ../names/preludes.md#the-no_implicit_prelude-attribute
[`path`]: #the-path-attribute
[attribute]: ../attributes.md
[items]: ../items.md
[module path]: ../paths.md
[scopes chapter]: ../names/scopes.md
[the lint check attributes]: ../attributes/diagnostics.md#lint-check-attributes
[type namespace]: ../names/namespaces.md
