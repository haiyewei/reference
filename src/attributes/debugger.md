r[attributes.debugger]
# 调试器属性

以下[属性](../attributes.md)用于在使用 GDB 或 WinDbg 等第三方调试器时增强调试体验。

<!-- template:attributes -->
r[attributes.debugger.debugger_visualizer]
## `debugger_visualizer` 属性

r[attributes.debugger.debugger_visualizer.intro]
_`debugger_visualizer` [属性](../attributes.md)_可用于将调试器可视化器文件嵌入到调试信息中。这会改善显示值时的调试器体验。

> [!EXAMPLE]
> <!-- ignore: requires external files-->
> ```rust,ignore
> #![debugger_visualizer(natvis_file = "Example.natvis")]
> #![debugger_visualizer(gdb_script_file = "example.py")]
> ```

r[attributes.debugger.debugger_visualizer.syntax]
`debugger_visualizer` 属性使用 [MetaListNameValueStr](../attributes.md#grammar-MetaListNameValueStr) 语法来指定其输入。必须指定以下键之一：

- [`natvis_file`](debugger.md#r-attributes.debugger.debugger_visualizer.natvis)
- [`gdb_script_file`](debugger.md#r-attributes.debugger.debugger_visualizer.gdb)

r[attributes.debugger.debugger_visualizer.allowed-positions]
`debugger_visualizer` 属性只能应用于[模块](../items/modules.md)或 crate 根。

r[attributes.debugger.debugger_visualizer.duplicates]
`debugger_visualizer` 属性可以在一个形式上使用任意次数。所有指定的可视化器文件都会被加载。

r[attributes.debugger.debugger_visualizer.natvis]
### 将 `debugger_visualizer` 与 Natvis 一起使用

r[attributes.debugger.debugger_visualizer.natvis.intro]
Natvis 是用于 Microsoft 调试器（如 Visual Studio 和 WinDbg）的基于 XML 的框架，它使用声明式规则来自定义类型的显示。有关 Natvis 格式的详细信息，请参阅 Microsoft 的 [Natvis 文档](https://docs.microsoft.com/en-us/visualstudio/debugger/create-custom-views-of-native-objects)。

r[attributes.debugger.debugger_visualizer.natvis.msvc]
此属性只支持在 `-windows-msvc` 目标上嵌入 Natvis 文件。

r[attributes.debugger.debugger_visualizer.natvis.path]
Natvis 文件的路径通过 `natvis_file` 键指定，该路径是相对于源文件的路径。

> [!EXAMPLE]
> <!-- ignore: requires external files and msvc -->
> ```rust ignore
> #![debugger_visualizer(natvis_file = "Rectangle.natvis")]
>
> struct FancyRect {
>     x: f32,
>     y: f32,
>     dx: f32,
>     dy: f32,
> }
>
> fn main() {
>     let fancy_rect = FancyRect { x: 10.0, y: 10.0, dx: 5.0, dy: 5.0 };
>     println!("set breakpoint here");
> }
> ```
>
> `Rectangle.natvis` 包含：
>
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <AutoVisualizer xmlns="http://schemas.microsoft.com/vstudio/debugger/natvis/2010">
>     <Type Name="foo::FancyRect">
>       <DisplayString>({x},{y}) + ({dx}, {dy})</DisplayString>
>       <Expand>
>         <Synthetic Name="LowerLeft">
>           <DisplayString>({x}, {y})</DisplayString>
>         </Synthetic>
>         <Synthetic Name="UpperLeft">
>           <DisplayString>({x}, {y + dy})</DisplayString>
>         </Synthetic>
>         <Synthetic Name="UpperRight">
>           <DisplayString>({x + dx}, {y + dy})</DisplayString>
>         </Synthetic>
>         <Synthetic Name="LowerRight">
>           <DisplayString>({x + dx}, {y})</DisplayString>
>         </Synthetic>
>       </Expand>
>     </Type>
> </AutoVisualizer>
> ```
>
> 在 WinDbg 下查看时，`fancy_rect` 变量会显示如下：
>
> ```text
> > Variables:
>   > fancy_rect: (10.0, 10.0) + (5.0, 5.0)
>     > LowerLeft: (10.0, 10.0)
>     > UpperLeft: (10.0, 15.0)
>     > UpperRight: (15.0, 15.0)
>     > LowerRight: (15.0, 10.0)
> ```

r[attributes.debugger.debugger_visualizer.gdb]
### 将 `debugger_visualizer` 与 GDB 一起使用

r[attributes.debugger.debugger_visualizer.gdb.pretty]
GDB 支持使用一种结构化 Python 脚本，称为 _pretty printer（美化打印器）_，它描述一个类型应如何在调试器视图中可视化。有关 pretty printer 的详细信息，请参阅 GDB 的 [pretty printing 文档](https://sourceware.org/gdb/onlinedocs/gdb/Pretty-Printing.html)。

> [!NOTE]
> 在 GDB 下调试二进制文件时，嵌入的 pretty printer 不会自动加载。
>
> 有两种方式可以启用嵌入式 pretty printer 的自动加载：
>
> 1. Launch GDB with extra arguments to explicitly add a directory or binary to the auto-load safe path: `gdb -iex "add-auto-load-safe-path safe-path path/to/binary" path/to/binary` For more information, see GDB's [auto-loading documentation]. 1. Create a file named `gdbinit` under `$HOME/.config/gdb` (you may need to create the directory if it doesn't already exist). Add the following line to that file: `add-auto-load-safe-path path/to/binary`.

r[attributes.debugger.debugger_visualizer.gdb.path]
这些脚本使用 `gdb_script_file` 键嵌入，该键是相对于源文件的路径。

> [!EXAMPLE]
> <!-- ignore: requires external files -->
> ```rust ignore
> #![debugger_visualizer(gdb_script_file = "printer.py")]
>
> struct Person {
>     name: String,
>     age: i32,
> }
>
> fn main() {
>     let bob = Person { name: String::from("Bob"), age: 10 };
>     println!("set breakpoint here");
> }
> ```
>
> `printer.py` 包含：
>
> ```python
> import gdb
>
> class PersonPrinter:
>     "Print a Person"
>
>     def __init__(self, val):
>         self.val = val
>         self.name = val["name"]
>         self.age = int(val["age"])
>
>     def to_string(self):
>         return "{} is {} years old.".format(self.name, self.age)
>
> def lookup(val):
>     lookup_tag = val.type.tag
>     if lookup_tag is None:
>         return None
>     if "foo::Person" == lookup_tag:
>         return PersonPrinter(val)
>
>     return None
>
> gdb.current_objfile().pretty_printers.append(lookup)
> ```
>
> 当把该 crate 的调试可执行文件传给 GDB[^rust-gdb] 时，`print bob` 会显示：
>
> ```text
> "Bob" is 10 years old.
> ```
>
> [^rust-gdb]: Note: This assumes you are using the `rust-gdb` script which configures pretty-printers for standard library types like `String`.

[auto-loading documentation]: https://sourceware.org/gdb/onlinedocs/gdb/Auto_002dloading-safe-path.html
[attributes]: ../attributes.md
[Natvis documentation]: https://docs.microsoft.com/en-us/visualstudio/debugger/create-custom-views-of-native-objects
[pretty printing documentation]: https://sourceware.org/gdb/onlinedocs/gdb/Pretty-Printing.html

<!-- template:attributes -->
r[attributes.debugger.collapse_debuginfo]
## `collapse_debuginfo` 属性

r[attributes.debugger.collapse_debuginfo.intro]
_`collapse_debuginfo` [属性](../attributes.md)_控制在为调用此宏的代码生成 debuginfo 时，来自宏定义的代码位置是否折叠为与宏调用点关联的单一位置。

> [!EXAMPLE]
> ```rust
> #[collapse_debuginfo(yes)]
> macro_rules! example {
>     () => {
>         println!("hello!");
>     };
> }
> ```
>
> 使用调试器时，调用 `example` 宏可能看起来像是在调用函数。也就是说，当你单步执行到调用点时，它可能会显示宏调用而不是展开后的代码。

<!-- TODO: I think it would be nice to extend this to explain a little more about why this is useful, and the kinds of scenarios where you would want one vs the other. See https://github.com/rust-lang/rfcs/pull/2117 for some guidance. -->

r[attributes.debugger.collapse_debuginfo.syntax]
`collapse_debuginfo` 属性的语法是：

```grammar,attributes
@root CollapseDebuginfoAttribute -> `collapse_debuginfo` `(` CollapseDebuginfoOption `)`

CollapseDebuginfoOption ->
      `yes`
    | `no`
    | `external`
```

r[attributes.debugger.collapse_debuginfo.allowed-positions]
`collapse_debuginfo` 属性只能应用于 [`macro_rules` 定义](../macros-by-example.md)。

r[attributes.debugger.collapse_debuginfo.duplicates]
`collapse_debuginfo` 属性只能在一个宏上使用一次。

r[attributes.debugger.collapse_debuginfo.options]
`collapse_debuginfo` 属性接受以下选项：

- `#[collapse_debuginfo(yes)]` --- debuginfo 中的代码位置会被折叠。
- `#[collapse_debuginfo(no)]` --- debuginfo 中的代码位置不会被折叠。
- `#[collapse_debuginfo(external)]` --- 只有当宏来自不同的 crate 时，debuginfo 中的代码位置才会被折叠。

r[attributes.debugger.collapse_debuginfo.default]
对于没有此属性的宏，除非它们是内置宏，否则 `external` 行为是默认行为。对于内置宏，默认值是 `yes`。

> [!NOTE]
> `rustc` 有一个 [`-C collapse-macro-debuginfo`](../../rustc/codegen-options/index.html#collapse-macro-debuginfo) CLI 选项，可覆盖默认行为以及任何 `#[collapse_debuginfo]` 属性的值。

[`-C collapse-macro-debuginfo`]: ../../rustc/codegen-options/index.html#collapse-macro-debuginfo
[`macro_rules` definition]: ../macros-by-example.md
[attribute]: ../attributes.md
[module]: ../items/modules.md
