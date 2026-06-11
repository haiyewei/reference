<div class="rule" id="r-attributes.debugger"><a class="rule-link" href="#r-attributes.debugger" title="attributes.debugger"><span>[attributes<wbr>.debugger]</span></a>
</div>

# 调试器属性

以下[属性](../attributes.md)用于在使用 GDB 或 WinDbg 等第三方调试器时增强调试体验。

<!-- template:attributes -->

<div class="rule" id="r-attributes.debugger.debugger_visualizer"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer" title="attributes.debugger.debugger_visualizer"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer]</span></a>
</div>

## `debugger_visualizer` 属性

<div class="rule" id="r-attributes.debugger.debugger_visualizer.intro"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer.intro" title="attributes.debugger.debugger_visualizer.intro"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer<wbr>.intro]</span></a>
</div>

\_`debugger_visualizer` [属性](../attributes.md)\_可用于将调试器可视化器文件嵌入到调试信息中。这会改善显示值时的调试器体验。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > <!-- ignore: requires external files-->
 > 
 > ```rust,ignore
 > #![debugger_visualizer(natvis_file = "Example.natvis")]
 > #![debugger_visualizer(gdb_script_file = "example.py")]
 > ```

</div>

<div class="rule" id="r-attributes.debugger.debugger_visualizer.syntax"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer.syntax" title="attributes.debugger.debugger_visualizer.syntax"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer<wbr>.syntax]</span></a>
</div>

`debugger_visualizer` 属性使用 [MetaListNameValueStr](../attributes.md#grammar-MetaListNameValueStr) 语法来指定其输入。必须指定以下键之一：

- [`natvis_file`](debugger.md#r-attributes.debugger.debugger_visualizer.natvis)
- [`gdb_script_file`](debugger.md#r-attributes.debugger.debugger_visualizer.gdb)

<div class="rule" id="r-attributes.debugger.debugger_visualizer.allowed-positions"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer.allowed-positions" title="attributes.debugger.debugger_visualizer.allowed-positions"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer<wbr>.allowed-positions]</span></a>
</div>

`debugger_visualizer` 属性只能应用于[模块](../items/modules.md)或 crate 根。

<div class="rule" id="r-attributes.debugger.debugger_visualizer.duplicates"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer.duplicates" title="attributes.debugger.debugger_visualizer.duplicates"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer<wbr>.duplicates]</span></a>
</div>

`debugger_visualizer` 属性可以在一个形式上使用任意次数。所有指定的可视化器文件都会被加载。

<div class="rule" id="r-attributes.debugger.debugger_visualizer.natvis"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer.natvis" title="attributes.debugger.debugger_visualizer.natvis"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer<wbr>.natvis]</span></a>
</div>

### 将 `debugger_visualizer` 与 Natvis 一起使用

<div class="rule" id="r-attributes.debugger.debugger_visualizer.natvis.intro"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer.natvis.intro" title="attributes.debugger.debugger_visualizer.natvis.intro"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer<wbr>.natvis<wbr>.intro]</span></a>
</div>

Natvis 是用于 Microsoft 调试器（如 Visual Studio 和 WinDbg）的基于 XML 的框架，它使用声明式规则来自定义类型的显示。有关 Natvis 格式的详细信息，请参阅 Microsoft 的 [Natvis 文档](https://docs.microsoft.com/en-us/visualstudio/debugger/create-custom-views-of-native-objects)。

<div class="rule" id="r-attributes.debugger.debugger_visualizer.natvis.msvc"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer.natvis.msvc" title="attributes.debugger.debugger_visualizer.natvis.msvc"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer<wbr>.natvis<wbr>.msvc]</span></a>
</div>

此属性只支持在 `-windows-msvc` 目标上嵌入 Natvis 文件。

<div class="rule" id="r-attributes.debugger.debugger_visualizer.natvis.path"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer.natvis.path" title="attributes.debugger.debugger_visualizer.natvis.path"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer<wbr>.natvis<wbr>.path]</span></a>
</div>

Natvis 文件的路径通过 `natvis_file` 键指定，该路径是相对于源文件的路径。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > <!-- ignore: requires external files and msvc -->
 > 
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

</div>

<div class="rule" id="r-attributes.debugger.debugger_visualizer.gdb"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer.gdb" title="attributes.debugger.debugger_visualizer.gdb"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer<wbr>.gdb]</span></a>
</div>

### 将 `debugger_visualizer` 与 GDB 一起使用

<div class="rule" id="r-attributes.debugger.debugger_visualizer.gdb.pretty"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer.gdb.pretty" title="attributes.debugger.debugger_visualizer.gdb.pretty"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer<wbr>.gdb<wbr>.pretty]</span></a>
</div>

GDB 支持使用一种结构化 Python 脚本，称为 _pretty printer（美化打印器）_，它描述一个类型应如何在调试器视图中可视化。有关 pretty printer 的详细信息，请参阅 GDB 的 [pretty printing 文档](https://sourceware.org/gdb/onlinedocs/gdb/Pretty-Printing.html)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 在 GDB 下调试二进制文件时，嵌入的 pretty printer 不会自动加载。
 > 
 > 有两种方式可以启用嵌入式 pretty printer 的自动加载：
 > 
 > 1. 用额外参数启动 GDB，以显式地将目录或二进制文件加入自动加载安全路径：`gdb -iex "add-auto-load-safe-path safe-path path/to/binary" path/to/binary`。有关更多信息，请参阅 GDB 的[自动加载文档](https://sourceware.org/gdb/onlinedocs/gdb/Auto_002dloading-safe-path.html)。
 > 1. 在 `$HOME/.config/gdb` 下创建名为 `gdbinit` 的文件（如果该目录尚不存在，你可能需要创建它）。将以下行添加到该文件中：`add-auto-load-safe-path path/to/binary`。

</div>

<div class="rule" id="r-attributes.debugger.debugger_visualizer.gdb.path"><a class="rule-link" href="#r-attributes.debugger.debugger_visualizer.gdb.path" title="attributes.debugger.debugger_visualizer.gdb.path"><span>[attributes<wbr>.debugger<wbr>.debugger_visualizer<wbr>.gdb<wbr>.path]</span></a>
</div>

这些脚本使用 `gdb_script_file` 键嵌入，该键是相对于源文件的路径。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > <!-- ignore: requires external files -->
 > 
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
 > [^rust-gdb]: 注意：这里假定你使用的是 `rust-gdb` 脚本，该脚本会为 `String` 等标准库类型配置 pretty-printer。

</div>

<!-- template:attributes -->

<div class="rule" id="r-attributes.debugger.collapse_debuginfo"><a class="rule-link" href="#r-attributes.debugger.collapse_debuginfo" title="attributes.debugger.collapse_debuginfo"><span>[attributes<wbr>.debugger<wbr>.collapse_debuginfo]</span></a>
</div>

## `collapse_debuginfo` 属性

<div class="rule" id="r-attributes.debugger.collapse_debuginfo.intro"><a class="rule-link" href="#r-attributes.debugger.collapse_debuginfo.intro" title="attributes.debugger.collapse_debuginfo.intro"><span>[attributes<wbr>.debugger<wbr>.collapse_debuginfo<wbr>.intro]</span></a>
</div>

\_`collapse_debuginfo` [属性](../attributes.md)\_控制在为调用此宏的代码生成 debuginfo 时，来自宏定义的代码位置是否折叠为与宏调用点关联的单一位置。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
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

</div>

<!-- TODO: I think it would be nice to extend this to explain a little more about why this is useful, and the kinds of scenarios where you would want one vs the other. See https://github.com/rust-lang/rfcs/pull/2117 for some guidance. -->

<div class="rule" id="r-attributes.debugger.collapse_debuginfo.syntax"><a class="rule-link" href="#r-attributes.debugger.collapse_debuginfo.syntax" title="attributes.debugger.collapse_debuginfo.syntax"><span>[attributes<wbr>.debugger<wbr>.collapse_debuginfo<wbr>.syntax]</span></a>
</div>

`collapse_debuginfo` 属性的语法是：

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-CollapseDebuginfoAttribute" onclick="show_railroad()">[CollapseDebuginfoAttribute](debugger.md#railroad-CollapseDebuginfoAttribute)</span> → <span class="grammar-literal">collapse\_debuginfo</span> <span class="grammar-literal">(</span> <span class="grammar-text">[CollapseDebuginfoOption](debugger.md#grammar-CollapseDebuginfoOption)</span> <span class="grammar-literal">)</span>

<span class="grammar-text grammar-production" id="grammar-CollapseDebuginfoOption" onclick="show_railroad()">[CollapseDebuginfoOption](debugger.md#railroad-CollapseDebuginfoOption)</span> →  
      <span class="grammar-literal">yes</span>  
    \| <span class="grammar-literal">no</span>  
    \| <span class="grammar-literal">external</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 532px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CollapseDebuginfoAttribute"><svg class="railroad" viewBox="0 0 532 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="debugger.md#grammar-CollapseDebuginfoAttribute">
<text class="comment" x="109" y="25">
CollapseDebuginfoAttribute</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="164" x="35" y="42"/>
<text x="117" y="58">
collapse_debuginfo</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="209" y="42"/>
<text x="223" y="58">
(</text>
</g>
<a class="link" xlink:href="debugger.md#railroad-CollapseDebuginfoOption">
<g class="nonterminal">
<rect height="22" width="212" x="247" y="42"/>
<text x="353" y="58">
CollapseDebuginfoOption</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="469" y="42"/>
<text x="483" y="58">
)</text>
</g>
<path d=" M 199 53 h 10"/>
<path d=" M 237 53 h 10"/>
<path d=" M 459 53 h 10"/>
</g>
<path d=" M 507 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 497 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 202px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-CollapseDebuginfoOption"><svg class="railroad" viewBox="0 0 202 140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="debugger.md#grammar-CollapseDebuginfoOption">
<text class="comment" x="99" y="25">
CollapseDebuginfoOption</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 44 0 h 64 m -29 0 l -5 -5 m 0 10 l 5 -5 m 29 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="42"/>
<text x="81" y="58">
yes</text>
</g>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 108 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 108 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 36 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="75"/>
<text x="77" y="91">
no</text>
</g>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 84 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="84" x="59" y="108"/>
<text x="101" y="124">
external</text>
</g>
</g>
<path d=" M 177 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 167 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-attributes.debugger.collapse_debuginfo.allowed-positions"><a class="rule-link" href="#r-attributes.debugger.collapse_debuginfo.allowed-positions" title="attributes.debugger.collapse_debuginfo.allowed-positions"><span>[attributes<wbr>.debugger<wbr>.collapse_debuginfo<wbr>.allowed-positions]</span></a>
</div>

`collapse_debuginfo` 属性只能应用于 [`macro_rules` 定义](../macros-by-example.md)。

<div class="rule" id="r-attributes.debugger.collapse_debuginfo.duplicates"><a class="rule-link" href="#r-attributes.debugger.collapse_debuginfo.duplicates" title="attributes.debugger.collapse_debuginfo.duplicates"><span>[attributes<wbr>.debugger<wbr>.collapse_debuginfo<wbr>.duplicates]</span></a>
</div>

`collapse_debuginfo` 属性只能在一个宏上使用一次。

<div class="rule" id="r-attributes.debugger.collapse_debuginfo.options"><a class="rule-link" href="#r-attributes.debugger.collapse_debuginfo.options" title="attributes.debugger.collapse_debuginfo.options"><span>[attributes<wbr>.debugger<wbr>.collapse_debuginfo<wbr>.options]</span></a>
</div>

`collapse_debuginfo` 属性接受以下选项：

- `#[collapse_debuginfo(yes)]` --- debuginfo 中的代码位置会被折叠。
- `#[collapse_debuginfo(no)]` --- debuginfo 中的代码位置不会被折叠。
- `#[collapse_debuginfo(external)]` --- 只有当宏来自不同的 crate 时，debuginfo 中的代码位置才会被折叠。

<div class="rule" id="r-attributes.debugger.collapse_debuginfo.default"><a class="rule-link" href="#r-attributes.debugger.collapse_debuginfo.default" title="attributes.debugger.collapse_debuginfo.default"><span>[attributes<wbr>.debugger<wbr>.collapse_debuginfo<wbr>.default]</span></a>
</div>

对于没有此属性的宏，除非它们是内置宏，否则 `external` 行为是默认行为。对于内置宏，默认值是 `yes`。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 有一个 [`-C collapse-macro-debuginfo`](../../rustc/codegen-options/index.html#collapse-macro-debuginfo) CLI 选项，可覆盖默认行为以及任何 `#[collapse_debuginfo]` 属性的值。

</div>
