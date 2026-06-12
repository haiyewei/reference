r[attributes]
# 属性

r[attributes.syntax]
```grammar,attributes
InnerAttribute -> `#` `!` `[` Attr `]`

OuterAttribute -> `#` `[` Attr `]`

Attr ->
      SimplePath AttrInput?
    | `unsafe` `(` SimplePath AttrInput? `)`

AttrInput ->
      DelimTokenTree
    | `=` Expression
```

r[attributes.intro]
*属性*是一种通用的、自由形式的元数据，会根据名称、约定、语言和编译器版本来解释。属性借鉴了 [ECMA-335](https://www.ecma-international.org/publications-and-standards/standards/ecma-335/) 中的 Attributes，其语法来自 [ECMA-334](https://www.ecma-international.org/publications-and-standards/standards/ecma-334/) (C#)。

r[attributes.inner]
*内部属性*写作在井号 (`#`) 之后带一个感叹号 (`!`)，应用于声明该属性所在的形式。

> [!EXAMPLE]
> ```rust
> // 应用于外围模块或 crate 的通用元数据。
> #![crate_type = "lib"]
>
> // 内部属性应用于整个函数。
> fn some_unused_variables() {
>   #![allow(unused_variables)]
>
>   let x = ();
>   let y = ();
>   let z = ();
> }
> ```

r[attributes.outer]
*外部属性*写作时不在井号之后带感叹号，应用于该属性后面的形式。

> [!EXAMPLE]
> ```rust
> // 标记为单元测试的函数
> #[test]
> fn test_foo() {
>     /* ... */
> }
>
> // 按条件编译的模块
> #[cfg(target_os = "linux")]
> mod bar {
>     /* ... */
> }
>
> // 用于抑制警告/错误的 lint 属性
> #[allow(non_camel_case_types)]
> type int8_t = i8;
> ```

r[attributes.input]
属性由指向该属性的路径组成，后面可以跟一个可选的带定界符的 token 树，其解释由该属性定义。除宏属性以外的属性还允许输入为等号 (`=`) 后跟一个表达式。更多细节见下方的[元项语法](#r-attributes.meta)。

r[attributes.safety]
属性在应用时可能是不安全的。为避免在使用这些属性时产生未定义行为，必须满足某些编译器无法检查的义务。为断言这些义务已经满足，需要将属性包裹在 `unsafe(..)` 中，例如 `#[unsafe(no_mangle)]`。

以下属性是不安全的：

* [`export_name`]
* [`link_section`]
* [`naked`]
* [`no_mangle`]

r[attributes.kind]
属性可以分为以下几类：

* [内置属性](#r-attributes.builtin)
* [过程宏属性](procedural-macros.md#the-proc_macro_attribute-attribute)
* [派生宏辅助属性](procedural-macros.md#derive-macro-helper-attributes)
* [工具属性](#r-attributes.tool)

r[attributes.allowed-position]
属性可以应用于语言中的许多形式：

* 所有[项声明](items.md)都接受外部属性，而[外部块](items/external-blocks.md)、[函数](items/functions.md)、[实现](items/implementations.md)和[模块](items/modules.md)接受内部属性。
* 大多数[语句](statements.md)接受外部属性（表达式语句的限制见[表达式属性](expressions.md#expression-attributes)）。
* [块表达式](expressions/block-expr.md)接受外部属性和内部属性，但仅限于该块表达式是[表达式语句](statements.md#expression-statements)的外层表达式或另一个块表达式的最终表达式时。
* [枚举](items/enumerations.md)变体以及[结构体](items/structs.md)和[联合体](items/unions.md)字段接受外部属性。
* [match 表达式分支](expressions/match-expr.md)接受外部属性。
* [泛型生命周期或类型形参](items/generics.md)接受外部属性。
* 表达式在有限情形下接受外部属性，详情见[表达式属性](expressions.md#expression-attributes)。
* [函数](items/functions.md)、[闭包](expressions/closure-expr.md)和[函数指针](types/function-pointer.md)形参接受外部属性。这包括函数指针和[外部块](items/external-blocks.html#variadic-functions)中用 `...` 表示的变参形参上的属性。
* [内联汇编](inline-assembly.md)模板字符串和操作数接受外部属性。语义上只接受某些属性；详情见 [asm.attributes.supported-attributes]。

r[attributes.meta]
## 元项属性语法

r[attributes.meta.intro]
“元项”是大多数[内置属性](#r-attributes.builtin)用于 [Attr] 规则的语法。其语法如下：

r[attributes.meta.syntax]
```grammar,attributes
@root MetaItem ->
      SimplePath
    | SimplePath `=` Expression
    | SimplePath `(` MetaSeq? `)`

MetaSeq ->
    MetaItemInner ( `,` MetaItemInner )* `,`?

MetaItemInner ->
      MetaItem
    | Expression
```

r[attributes.meta.literal-expr]
元项中的表达式必须经宏展开为字面量表达式，且这些字面量表达式不得包含整数或浮点类型后缀。不是字面量表达式的表达式会在语法上被接受（并且可以传给过程宏），但会在解析之后被拒绝。

r[attributes.meta.order]
注意，如果属性出现在另一个宏内部，它将在那个外层宏之后展开。例如，以下代码会先展开 `Serialize` 过程宏；为了让 `include_str!` 调用能够展开，该过程宏必须保留此调用：

```rust ignore
#[derive(Serialize)]
struct Foo {
    #[doc = include_str!("x.md")]
    x: u32
}
```

r[attributes.meta.order-macro]
另外，属性中的宏只会在应用到该项的所有其他属性之后展开：

```rust ignore
#[macro_attr1] // expanded first
#[doc = mac!()] // `mac!` is expanded fourth.
#[macro_attr2] // expanded second
#[derive(MacroDerive1, MacroDerive2)] // expanded third
fn foo() {}
```

r[attributes.meta.builtin]
各种内置属性使用元项语法的不同子集来指定其输入。以下语法规则展示了一些常用形式：

r[attributes.meta.builtin.syntax]
```grammar,attributes
@root MetaWord ->
    IDENTIFIER

MetaNameValueStr ->
    IDENTIFIER `=` (STRING_LITERAL | RAW_STRING_LITERAL)

@root MetaListPaths ->
    IDENTIFIER `(` ( SimplePath (`,` SimplePath)* `,`? )? `)`

@root MetaListIdents ->
    IDENTIFIER `(` ( IDENTIFIER (`,` IDENTIFIER)* `,`? )? `)`

@root MetaListNameValueStr ->
    IDENTIFIER `(` ( MetaNameValueStr (`,` MetaNameValueStr)* `,`? )? `)`
```

元项的一些示例如下：

样式 | 示例
------|--------
[MetaWord] | `no_std`
[MetaNameValueStr] | `doc = "example"`
[MetaListPaths] | `allow(unused, clippy::inline_always)`
[MetaListIdents] | `macro_use(foo, bar)`
[MetaListNameValueStr] | `link(name = "CoreFoundation", kind = "framework")`

r[attributes.activity]
## 活跃属性和惰性属性

r[attributes.activity.intro]
属性要么是活跃的，要么是惰性的。在属性处理过程中，*活跃属性*会从其所在的形式上移除自身，而 *惰性属性*会保留下来。

[`cfg`](conditional-compilation.md#the-cfg-attribute) 和 [`cfg_attr`](conditional-compilation.md#the-cfg_attr-attribute) 属性是活跃的。[属性宏](procedural-macros.md#the-proc_macro_attribute-attribute)是活跃的。所有其他属性都是惰性的。

r[attributes.tool]
## 工具属性

r[attributes.tool.intro]
编译器可以允许外部工具使用属性，其中每个工具都位于 [tool prelude](names/preludes.md#tool-prelude) 中自己的模块内。属性路径的第一个段是工具名称，后面可以有一个或多个附加段，其解释由工具决定。

r[attributes.tool.ignored]
未使用某个工具时，该工具的属性会被接受且不发出警告。使用该工具时，该工具负责处理和解释它的属性。

r[attributes.tool.prelude]
如果使用了 [`no_implicit_prelude`](names/preludes.md#the-no_implicit_prelude-attribute) 属性，则工具属性不可用。

```rust
// 告诉 rustfmt 工具不要格式化以下元素。
#[rustfmt::skip]
struct S {
}

// 控制 clippy 工具的“圈复杂度”阈值。
#[clippy::cyclomatic_complexity = "100"]
pub fn f() {}
```

> [!NOTE]
> `rustc` 目前识别工具 "clippy"、"rustfmt"、"diagnostic"、"miri" 和 "rust_analyzer"。

r[attributes.builtin]
## 内置属性索引

以下是所有内置属性的索引。

- 条件编译
  - [`cfg`](conditional-compilation.md#the-cfg-attribute) --- 控制条件编译。
  - [`cfg_attr`](conditional-compilation.md#the-cfg_attr-attribute) --- 有条件地包含属性。

- 测试
  - [`test`](attributes/testing.md#the-test-attribute) --- 将函数标记为测试。
  - [`ignore`](attributes/testing.md#the-ignore-attribute) --- 禁用测试函数。
  - [`should_panic`](attributes/testing.md#the-should_panic-attribute) --- 指示测试应产生 panic。

- 派生
  - [`derive`](attributes/derive.md) --- 自动实现 trait。
  - [`automatically_derived`](attributes/derive.md#the-automatically_derived-attribute) --- 由 `derive` 创建的实现的标记。

- 宏
  - [`macro_export`](macros-by-example.md#the-macro_export-attribute) --- 导出 `macro_rules` 宏，以供跨 crate 使用。
  - [`macro_use`](macros-by-example.md#the-macro_use-attribute) --- 扩展宏可见性，或从其他 crate 导入宏。
  - [`proc_macro`](procedural-macros.md#the-proc_macro-attribute) --- 定义类函数宏。
  - [`proc_macro_derive`](macro.proc.derive) --- 定义派生宏。
  - [`proc_macro_attribute`](procedural-macros.md#the-proc_macro_attribute-attribute) --- 定义属性宏。

- 诊断
  - [`allow`](attributes/diagnostics.md#lint-check-attributes), [`expect`](attributes/diagnostics.md#lint-check-attributes), [`warn`](attributes/diagnostics.md#lint-check-attributes), [`deny`](attributes/diagnostics.md#lint-check-attributes), [`forbid`](attributes/diagnostics.md#lint-check-attributes) --- 更改默认 lint 级别。
  - [`deprecated`](attributes/diagnostics.md#the-deprecated-attribute) --- 生成弃用通知。
  - [`must_use`](attributes/diagnostics.md#the-must_use-attribute) --- 为未使用的值生成 lint。
  - [`diagnostic::on_unimplemented`](attributes/diagnostics.md#the-diagnosticon_unimplemented-attribute) --- 如果某个 trait 未实现，则提示编译器发出特定错误消息。
  - [`diagnostic::do_not_recommend`](attributes/diagnostics.md#the-diagnosticdo_not_recommend-attribute) --- 提示编译器不要在错误消息中显示某个 trait impl。

- ABI、链接、符号和 FFI
  - [`link`](items/external-blocks.md#the-link-attribute) --- 指定要与 `extern` 块链接的原生库。
  - [`link_name`](items/external-blocks.md#the-link_name-attribute) --- 指定 `extern` 块中函数或静态项的符号名称。
  - [`link_ordinal`](items/external-blocks.md#the-link_ordinal-attribute) --- 指定 `extern` 块中函数或静态项的符号序号。
  - [`no_link`](items/extern-crates.md#the-no_link-attribute) --- 阻止链接 extern crate。
  - [`repr`](type-layout.md#representations) --- 控制类型布局。
  - [`crate_type`](linkage.md) --- 指定 crate 的类型（库、可执行文件等）。
  - [`no_main`](crates-and-source-files.md#the-no_main-attribute) --- 禁用发出 `main` 符号。
  - [`export_name`](abi.md#the-export_name-attribute) --- 指定函数或静态项的导出符号名称。
  - [`link_section`](abi.md#the-link_section-attribute) --- 指定函数或静态项要使用的目标文件节。
  - [`no_mangle`](abi.md#the-no_mangle-attribute) --- 禁用符号名称编码。
  - [`used`](abi.md#the-used-attribute) --- 强制编译器在输出目标文件中保留静态项。
  - [`crate_name`](crates-and-source-files.md#the-crate_name-attribute) --- 指定 crate 名称。

- 代码生成
  - [`inline`](attributes/codegen.md#the-inline-attribute) --- 提示内联代码。
  - [`cold`](attributes/codegen.md#the-cold-attribute) --- 提示某函数不太可能被调用。
  - [`naked`](attributes/codegen.md#the-naked-attribute) --- 防止编译器发出函数序言和尾声。
  - [`no_builtins`](attributes/codegen.md#the-no_builtins-attribute) --- 禁用某些内置函数的使用。
  - [`target_feature`](attributes/codegen.md#the-target_feature-attribute) --- 配置平台特定的代码生成。
  - [`track_caller`](attributes/codegen.md#the-track_caller-attribute) --- 将父级调用位置传递给 `std::panic::Location::caller()`。
  - [`instruction_set`](attributes/codegen.md#the-instruction_set-attribute) --- 指定用于生成函数代码的指令集。

- 文档
  - `doc` --- 指定文档。更多信息见 [The Rustdoc Book](../rustdoc/the-doc-attribute.html)。[文档注释](comments.md#doc-comments)会转换为 `doc` 属性。

- Prelude
  - [`no_std`](names/preludes.md#the-no_std-attribute) --- 从 prelude 中移除 std。
  - [`no_implicit_prelude`](names/preludes.md#the-no_implicit_prelude-attribute) --- 禁用模块内的 prelude 查找。

- 模块
  - [`path`](items/modules.md#the-path-attribute) --- 指定模块的文件名。

- 限制
  - [`recursion_limit`](attributes/limits.md#the-recursion_limit-attribute) --- 设置某些编译期操作的最大递归限制。
  - [`type_length_limit`](attributes/limits.md#the-type_length_limit-attribute) --- 设置多态类型的最大大小。

- 运行时
  - [`panic_handler`](panic.md#the-panic_handler-attribute) --- 设置用于处理 panic 的函数。
  - [`global_allocator`](runtime.md#the-global_allocator-attribute) --- 设置全局内存分配器。
  - [`windows_subsystem`](runtime.md#the-windows_subsystem-attribute) --- 指定要链接的 Windows 子系统。

- 特性
  - `feature` --- 用于启用不稳定或实验性编译器特性。有关 `rustc` 中实现的特性，见 [The Unstable Book](../unstable-book/index.html)。

- 类型系统
  - [`non_exhaustive`](attributes/type_system.md#the-non_exhaustive-attribute) --- 指示未来会为类型添加更多字段/变体。

- 调试器
  - [`debugger_visualizer`](attributes/debugger.md#the-debugger_visualizer-attribute) --- 嵌入一个指定某个类型的调试器输出的文件。
  - [`collapse_debuginfo`](attributes/debugger.md#the-collapse_debuginfo-attribute) --- 控制宏调用如何编码到 debuginfo 中。

[Doc comments]: comments.md#doc-comments
[ECMA-334]: https://www.ecma-international.org/publications-and-standards/standards/ecma-334/
[ECMA-335]: https://www.ecma-international.org/publications-and-standards/standards/ecma-335/
[Expression Attributes]: expressions.md#expression-attributes
[The Rustdoc Book]: ../rustdoc/the-doc-attribute.html
[The Unstable Book]: ../unstable-book/index.html
[`allow`]: attributes/diagnostics.md#lint-check-attributes
[`automatically_derived`]: attributes/derive.md#the-automatically_derived-attribute
[`cfg_attr`]: conditional-compilation.md#the-cfg_attr-attribute
[`cfg`]: conditional-compilation.md#the-cfg-attribute
[`cold`]: attributes/codegen.md#the-cold-attribute
[`collapse_debuginfo`]: attributes/debugger.md#the-collapse_debuginfo-attribute
[`crate_name`]: crates-and-source-files.md#the-crate_name-attribute
[`crate_type`]: linkage.md
[`debugger_visualizer`]: attributes/debugger.md#the-debugger_visualizer-attribute
[`deny`]: attributes/diagnostics.md#lint-check-attributes
[`deprecated`]: attributes/diagnostics.md#the-deprecated-attribute
[`derive`]: attributes/derive.md
[`export_name`]: abi.md#the-export_name-attribute
[`expect`]: attributes/diagnostics.md#lint-check-attributes
[`forbid`]: attributes/diagnostics.md#lint-check-attributes
[`global_allocator`]: runtime.md#the-global_allocator-attribute
[`ignore`]: attributes/testing.md#the-ignore-attribute
[`inline`]: attributes/codegen.md#the-inline-attribute
[`instruction_set`]: attributes/codegen.md#the-instruction_set-attribute
[`link_name`]: items/external-blocks.md#the-link_name-attribute
[`link_ordinal`]: items/external-blocks.md#the-link_ordinal-attribute
[`link_section`]: abi.md#the-link_section-attribute
[`link`]: items/external-blocks.md#the-link-attribute
[`macro_export`]: macros-by-example.md#the-macro_export-attribute
[`macro_use`]: macros-by-example.md#the-macro_use-attribute
[`must_use`]: attributes/diagnostics.md#the-must_use-attribute
[`naked`]: attributes/codegen.md#the-naked-attribute
[`no_builtins`]: attributes/codegen.md#the-no_builtins-attribute
[`no_implicit_prelude`]: names/preludes.md#the-no_implicit_prelude-attribute
[`no_link`]: items/extern-crates.md#the-no_link-attribute
[`no_main`]: crates-and-source-files.md#the-no_main-attribute
[`no_mangle`]: abi.md#the-no_mangle-attribute
[`no_std`]: names/preludes.md#the-no_std-attribute
[`non_exhaustive`]: attributes/type_system.md#the-non_exhaustive-attribute
[`panic_handler`]: panic.md#the-panic_handler-attribute
[`path`]: items/modules.md#the-path-attribute
[`proc_macro_attribute`]: procedural-macros.md#the-proc_macro_attribute-attribute
[`proc_macro_derive`]: macro.proc.derive
[`proc_macro`]: procedural-macros.md#the-proc_macro-attribute
[`recursion_limit`]: attributes/limits.md#the-recursion_limit-attribute
[`repr`]: type-layout.md#representations
[`should_panic`]: attributes/testing.md#the-should_panic-attribute
[`target_feature`]: attributes/codegen.md#the-target_feature-attribute
[`test`]: attributes/testing.md#the-test-attribute
[`track_caller`]: attributes/codegen.md#the-track_caller-attribute
[`type_length_limit`]: attributes/limits.md#the-type_length_limit-attribute
[`used`]: abi.md#the-used-attribute
[`warn`]: attributes/diagnostics.md#lint-check-attributes
[`windows_subsystem`]: runtime.md#the-windows_subsystem-attribute
[attribute macros]: procedural-macros.md#the-proc_macro_attribute-attribute
[block expressions]: expressions/block-expr.md
[built-in attributes]: #built-in-attributes-index
[derive macro helper attributes]: procedural-macros.md#derive-macro-helper-attributes
[enum]: items/enumerations.md
[expression statement]: statements.md#expression-statements
[external blocks]: items/external-blocks.md
[functions]: items/functions.md
[generics]: items/generics.md
[implementations]: items/implementations.md
[item declarations]: items.md
[match expressions]: expressions/match-expr.md
[modules]: items/modules.md
[statements]: statements.md
[struct]: items/structs.md
[tool prelude]: names/preludes.md#tool-prelude
[union]: items/unions.md
[closure]: expressions/closure-expr.md
[function pointer]: types/function-pointer.md
[variadic functions]: items/external-blocks.html#variadic-functions
[`diagnostic::on_unimplemented`]: attributes/diagnostics.md#the-diagnosticon_unimplemented-attribute
[`diagnostic::do_not_recommend`]: attributes/diagnostics.md#the-diagnosticdo_not_recommend-attribute
[Inline assembly]: inline-assembly.md
