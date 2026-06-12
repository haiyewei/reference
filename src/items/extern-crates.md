r[items.extern-crate]
# `extern crate` 声明

r[items.extern-crate.syntax]
```grammar,items
ExternCrate -> `extern` `crate` CrateRef AsClause? `;`

CrateRef -> IDENTIFIER | `self`

AsClause -> `as` ( IDENTIFIER | `_` )
```

r[items.extern-crate.intro]
*`extern crate` 声明* 指定对外部 crate 的依赖。

r[items.extern-crate.namespace]
随后，该外部 crate 会在声明所在作用域中，作为给定的[标识符](../identifiers.md)绑定到[类型命名空间](../names/namespaces.md)。

r[items.extern-crate.extern-prelude]
此外，如果 `extern crate` 出现在 crate 根中，则 crate 名也会被加入 [extern prelude](../names/preludes.md#extern-prelude)，使其在所有模块中自动进入作用域。

r[items.extern-crate.as]
`as` 子句可用于将导入的 crate 绑定到另一个名称。

r[items.extern-crate.lookup]
外部 crate 会在编译时解析为特定的 `soname`，并且对该 `soname` 的运行时链接需求会被传递给链接器，以便在运行时加载。`soname` 的编译时解析方式是扫描编译器的库路径，并将可选提供的 `crate_name` 与外部 crate 编译时声明的 [`crate_name` 属性](../crates-and-source-files.md#the-crate_name-attribute)进行匹配。如果未提供 `crate_name`，则假定有一个默认的 `name` 属性，其值等于 `extern crate` 声明中给出的[标识符](../identifiers.md)。

r[items.extern-crate.self]
可以导入 `self` crate，这会创建到当前 crate 的绑定。在这种情况下，必须使用 `as` 子句指定要将其绑定到的名称。

`extern crate` 声明的三个示例：

<!-- ignore: requires external crates -->
```rust,ignore
extern crate pcre;

extern crate std; // 等价于：extern crate std as std;

extern crate std as ruststd; // 以另一个名称链接到 'std'
```

r[items.extern-crate.name-restrictions]
命名 Rust crate 时，不允许使用连字符。不过，Cargo 包可以使用连字符。在这种情况下，如果 `Cargo.toml` 未指定 crate 名，Cargo 会透明地将 `-` 替换为 `_`（更多细节参见 [RFC 940](https://github.com/rust-lang/rfcs/blob/master/text/0940-hyphens-considered-harmful.md)）。

下面是一个示例：

<!-- ignore: requires external crates -->
```rust,ignore
// 导入 Cargo 包 hello-world
extern crate hello_world; // 连字符替换为下划线
```

r[items.extern-crate.underscore]
## 下划线导入

r[items.extern-crate.underscore.intro]
可以使用下划线以 `extern crate foo as _` 的形式声明外部 crate 依赖，而不在作用域中绑定其名称。对于只需要被链接、但从不被引用的 crate，这可能很有用，并且可以避免被报告为未使用。

r[items.extern-crate.underscore.macro_use]
[`macro_use` 属性](../macros-by-example.md#the-macro_use-attribute)照常工作，并将宏名称导入 [`macro_use` prelude](../names/preludes.md#macro_use-prelude)。

<!-- template:attributes -->
r[items.extern-crate.no_link]
## `no_link` 属性

r[items.extern-crate.no_link.intro]
*`no_link` [属性][attributes]* 可以应用于 `extern crate` 项，以阻止链接该 crate。

> [!NOTE]
> 例如，当只需要某个 crate 的宏时，这会很有用。

> [!EXAMPLE]
> <!-- ignore: requires external crates -->
> ```rust,ignore
> #[no_link]
> extern crate other_crate;
>
> other_crate::some_macro!();
> ```

r[items.extern-crate.no_link.syntax]
`no_link` 属性使用 [MetaWord] 语法。

r[items.extern-crate.no_link.allowed-positions]
`no_link` 属性只能应用于 `extern crate` 声明。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

r[items.extern-crate.no_link.duplicates]
在 `extern crate` 声明上，只有第一次使用 `no_link` 会产生效果。

> [!NOTE]
> `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

[identifier]: ../identifiers.md
[RFC 940]: https://github.com/rust-lang/rfcs/blob/master/text/0940-hyphens-considered-harmful.md
[`macro_use` attribute]: ../macros-by-example.md#the-macro_use-attribute
[extern prelude]: ../names/preludes.md#extern-prelude
[`macro_use` prelude]: ../names/preludes.md#macro_use-prelude
[`crate_name` attributes]: ../crates-and-source-files.md#the-crate_name-attribute
[type namespace]: ../names/namespaces.md
