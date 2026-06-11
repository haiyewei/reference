r[items.extern]
# 外部块

r[items.extern.syntax]
```grammar,items
ExternBlock ->
    `unsafe`?[^unsafe-2024] `extern` Abi? `{`
        InnerAttribute*
        ExternalItem*
    `}`

ExternalItem ->
    OuterAttribute* (
        MacroInvocationSemi
      | Visibility? StaticItem
      | Visibility? Function
    )
```

[^unsafe-2024]: Starting with the 2024 Edition, the `unsafe` keyword is required semantically.

r[items.extern.intro]
外部块提供当前 crate 中未_定义_的项的_声明_，并且是 Rust 外部函数接口（FFI）的基础。它们类似于未经检查的导入。

r[items.extern.allowed-kinds]
外部块中允许两种项_声明_：[函数](functions.md)和[静态项](static-items.md)。

r[items.extern.safety]
调用外部块中声明的 unsafe 函数，或访问其中声明的 unsafe 静态项，只允许在 [`unsafe` 上下文](../unsafe-keyword.md)中进行。

r[items.extern.namespace]
外部块会在其所在模块或块的[值命名空间](../names/namespaces.md)中定义它的函数和静态项。

r[items.extern.unsafe-required]
对于外部块，语义上要求 `unsafe` 关键字出现在 `extern` 关键字之前。

r[items.extern.edition2024]
> [!EDITION-2024]
> 在 2024 edition 之前，`unsafe` 关键字是可选的。只有当外部块本身被标记为 `unsafe` 时，才允许使用 `safe` 和 `unsafe` 项限定符。

r[items.extern.fn]
## 函数

r[items.extern.fn.body]
外部块中的函数以与其他 Rust 函数相同的方式声明，区别在于它们不得有函数体，而是以分号结束。

r[items.extern.fn.param-patterns]
参数中不允许使用模式，只可以使用 [IDENTIFIER](../identifiers.md#grammar-IDENTIFIER) 或 `_`。

r[items.extern.fn.qualifiers]
允许使用 `safe` 和 `unsafe` 函数限定符，但不允许使用其他函数限定符（例如 `const`、`async`、`extern`）。

r[items.extern.fn.foreign-abi]
外部块中的函数可以由 Rust 代码调用，就像在 Rust 中定义的函数一样。Rust 编译器会自动在 Rust ABI 与外部 ABI 之间转换。

r[items.extern.fn.safety]
在 extern 块中声明的函数默认隐式为 `unsafe`，除非存在 `safe` 函数限定符。

r[items.extern.fn.fn-ptr]
当被强制转换为函数指针时，在 extern 块中声明的函数具有类型 `for<'l1, ..., 'lm> extern "abi" fn(A1, ..., An) -> R`，其中 `'l1`、...、`'lm` 是它的生命周期参数，`A1`、...、`An` 是其参数的声明类型，`R` 是声明的返回类型。

r[items.extern.static]
## 静态项

r[items.extern.static.intro]
外部块中的静态项以与外部块之外的[静态项](static-items.md)相同的方式声明，但它们没有用于初始化其值的表达式。

r[items.extern.static.safety]
除非在 extern 块中声明的静态项被限定为 `safe`，否则访问该项就是 `unsafe`，无论它是否可变；因为没有任何东西能保证该静态项内存中的位模式对其声明类型是有效的，这是因为某些任意代码（例如 C 代码）负责初始化该静态项。

r[items.extern.static.mut]
extern 静态项可以是不可变的，也可以是可变的，就像外部块之外的[静态项](static-items.md)一样。

r[items.extern.static.read-only]
不可变静态项_必须_在任何 Rust 代码执行之前初始化。仅在 Rust 代码从该静态项读取之前完成初始化是不够的。一旦 Rust 代码运行，修改不可变静态项（无论从 Rust 内部还是外部修改）都是 UB，除非修改发生在 `UnsafeCell` 内部的字节上。

r[items.extern.abi]
## ABI

r[items.extern.abi.intro]
`extern` 关键字后可以跟一个可选的 [ABI](../glossary.md#r-glossary.abi) 字符串。ABI 指定块中函数的调用约定。调用约定为函数定义低层接口，例如参数如何放入寄存器或栈中、返回值如何传递，以及由谁负责清理栈。

> [!EXAMPLE]
> ```rust
> // Windows API 的接口。
> unsafe extern "system" { /* ... */ }
> ```

r[items.extern.abi.default]
如果未指定 ABI 字符串，则默认为 `"C"`。

> [!NOTE]
> 不带显式 ABI 的 `extern` 语法正在逐步淘汰，因此最好始终显式写出 ABI。
>
> 更多细节见 [Rust issue #134986](https://github.com/rust-lang/rust/issues/134986)。

r[items.extern.abi.standard]
以下 ABI 字符串在所有平台上都受支持：

r[items.extern.abi.rust]
* `unsafe extern "Rust"` --- Rust 函数和闭包的原生调用约定。当函数声明未使用 [`extern fn`](functions.md#r-items.fn.extern) 时，这是默认值。Rust ABI 不提供稳定性保证。

r[items.extern.abi.c]
* `unsafe extern "C"` --- "C" ABI 与目标平台上主流 C 编译器所选择的默认 ABI 匹配。

r[items.extern.abi.system]
* `unsafe extern "system"` --- 这等价于 `extern "C"`，但在 Windows x86_32 上例外：对于非变参函数，它等价于 `"stdcall"`；对于变参函数，它等价于 `"C"`。

  > [!NOTE]
  > 由于 Windows 上正确的底层 ABI 与目标相关，在尝试链接未使用显式定义 ABI 的 Windows API 函数时，最好使用 `extern "system"`。

r[items.extern.abi.unwind]
* `extern "C-unwind"` 和 `extern "system-unwind"` --- 分别与 `"C"` 和 `"system"` 相同，但当被调用方进行 unwind（通过 panic 或抛出 C++ 风格异常）时具有[不同的行为](functions.md#unwinding)。

r[items.extern.abi.platform]
还有一些平台特定的 ABI 字符串：

r[items.extern.abi.cdecl]
* `unsafe extern "cdecl"` --- x86_32 C 代码通常使用的调用约定。
  * 仅在 x86_32 目标上可用。
  * 对应于 MSVC 的 `__cdecl` 以及 GCC 和 clang 的 `__attribute__((cdecl))`。

  > [!NOTE]
  > 详情见：
  >
  > - <https://learn.microsoft.com/en-us/cpp/cpp/cdecl> - <https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl>

r[items.extern.abi.stdcall]
* `unsafe extern "stdcall"` --- [Win32 API](https://learn.microsoft.com/en-us/windows/win32/api/) 在 x86_32 上通常使用的调用约定。
  * 仅在 x86_32 目标上可用。
  * 对应于 MSVC 的 `__stdcall` 以及 GCC 和 clang 的 `__attribute__((stdcall))`。

  > [!NOTE]
  > 详情见：
  >
  > - <https://learn.microsoft.com/en-us/cpp/cpp/stdcall> - <https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall>

r[items.extern.abi.win64]
* `unsafe extern "win64"` --- Windows x64 ABI。
  * 仅在 x86_64 目标上可用。
  * 在 Windows x86_64 目标上，"win64" 与 "C" ABI 相同。
  * 对应于 GCC 和 clang 的 `__attribute__((ms_abi))`。

  > [!NOTE]
  > 详情见：
  >
  > - <https://learn.microsoft.com/en-us/cpp/build/x64-software-conventions> - <https://en.wikipedia.org/wiki/X86_calling_conventions#Microsoft_x64_calling_convention>

r[items.extern.abi.sysv64]
* `unsafe extern "sysv64"` --- System V ABI。
  * 仅在 x86_64 目标上可用。
  * 在非 Windows x86_64 目标上，"sysv64" 与 "C" ABI 相同。
  * 对应于 GCC 和 clang 的 `__attribute__((sysv_abi))`。

  > [!NOTE]
  > 详情见：
  >
  > - <https://wiki.osdev.org/System_V_ABI> - <https://en.wikipedia.org/wiki/X86_calling_conventions#System_V_AMD64_ABI>

r[items.extern.abi.aapcs]
* `unsafe extern "aapcs"` --- ARM 的软浮点 ABI。
  * 仅在 ARM32 目标上可用。
  * 在软浮点 ARM32 上，"aapcs" 与 "C" ABI 相同。
  * 对应于 clang 的 `__attribute__((pcs("aapcs")))`。

  > [!NOTE]
  > 详情见：
  >
  > - [Arm Procedure Call Standard](https://developer.arm.com/documentation/107656/0101/Getting-started-with-Armv8-M-based-systems/Procedure-Call-Standard-for-Arm-Architecture--AAPCS-)

r[items.extern.abi.fastcall]
* `unsafe extern "fastcall"` --- stdcall 的一种“快速”变体，会在寄存器中传递某些参数。
  * 仅在 x86_32 目标上可用。
  * 对应于 MSVC 的 `__fastcall` 以及 GCC 和 clang 的 `__attribute__((fastcall))`。

  > [!NOTE]
  > 详情见：
  >
  > - <https://learn.microsoft.com/en-us/cpp/cpp/fastcall> - <https://en.wikipedia.org/wiki/X86_calling_conventions#Microsoft_fastcall>

r[items.extern.abi.thiscall]
* `unsafe extern "thiscall"` --- x86_32 MSVC 上 C++ 类成员函数通常使用的调用约定。
  * 仅在 x86_32 目标上可用。
  * 对应于 MSVC 的 `__thiscall` 以及 GCC 和 clang 的 `__attribute__((thiscall))`。

  > [!NOTE]
  > 详情见：
  >
  > - <https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall> - <https://learn.microsoft.com/en-us/cpp/cpp/thiscall>

r[items.extern.abi.efiapi]
* `unsafe extern "efiapi"` --- [UEFI](https://uefi.org/specifications) 函数使用的 ABI。
  * 仅在 x86 和 ARM 目标（32 位和 64 位）上可用。

r[items.extern.abi.platform-unwind-variants]
与 `"C"` 和 `"system"` 一样，大多数平台特定 ABI 字符串也有[对应的 `-unwind` 变体](functions.md#unwinding)；具体包括：

* `"aapcs-unwind"`
* `"cdecl-unwind"`
* `"fastcall-unwind"`
* `"stdcall-unwind"`
* `"sysv64-unwind"`
* `"thiscall-unwind"`
* `"win64-unwind"`

r[items.extern.variadic]
## 变参函数

外部块中的函数可以通过将 `...` 指定为最后一个实参来成为变参函数。变参参数可以选择性地用标识符指定。

```rust
unsafe extern "C" {
    unsafe fn foo(...);
    unsafe fn bar(x: i32, ...);
    unsafe fn with_name(format: *const u8, args: ...);
    // SAFETY: This function guarantees it will not access
    // variadic arguments.
    safe fn ignores_variadic_arguments(x: i32, ...);
}
```

> [!WARNING]
> 除非 `extern` 块中的函数保证它完全不会访问变参实参，否则不应在该函数上使用 `safe` 限定符。向变参函数传递意外数量的实参或意外类型的实参可能导致[未定义行为](../behavior-considered-undefined.md#r-undefined)。

r[items.extern.variadic.conventions]
变参参数只能在带有以下 ABI 字符串或其对应 [`-unwind` 变体](functions.md#r-items.fn.extern.unwind)的 `extern` 块中指定：

- `"aapcs"`
- `"C"`
- `"cdecl"`
- `"efiapi"`
- `"system"`
- `"sysv64"`
- `"win64"`

r[items.extern.attributes]
## extern 块上的属性

r[items.extern.attributes.intro]
以下[属性](../attributes.md)控制外部块的行为。

r[items.extern.attributes.link]
### `link` 属性

r[items.extern.attributes.link.intro]
_`link` 属性_指定编译器应为 `extern` 块中的项链接的原生库名称。

r[items.extern.attributes.link.syntax]
它使用 [MetaListNameValueStr](../attributes.md#grammar-MetaListNameValueStr) 语法来指定其输入。`name` 键是要链接的原生库名称。`kind` 键是一个可选值，用于指定库的种类，可能的值如下：

r[items.extern.attributes.link.dylib]
- `dylib` --- 表示动态库。如果未指定 `kind`，这是默认值。

r[items.extern.attributes.link.static]
- `static` --- 表示静态库。

r[items.extern.attributes.link.framework]
- `framework` --- 表示 macOS framework。这仅对 macOS 目标有效。

r[items.extern.attributes.link.raw-dylib]
- `raw-dylib` --- 表示一种动态库，编译器会为其生成要链接的导入库（详情见下文的 [`dylib` versus `raw-dylib`](#dylib-versus-raw-dylib)）。这仅对 Windows 目标有效。

r[items.extern.attributes.link.name-requirement]
如果指定了 `kind`，则必须包含 `name` 键。

r[items.extern.attributes.link.modifiers]
可选的 `modifiers` 参数用于为要链接的库指定链接修饰符。

r[items.extern.attributes.link.modifiers.syntax]
修饰符被指定为以逗号分隔的字符串，每个修饰符前带有 `+` 或 `-` 前缀，分别表示启用或禁用该修饰符。

r[items.extern.attributes.link.modifiers.multiple]
目前不支持在单个 `link` 属性中指定多个 `modifiers` 参数，也不支持在同一个 `modifiers` 参数中指定多个相同的修饰符。例如：`#[link(name = "mylib", kind = "static", modifiers = "+whole-archive")]`。

r[items.extern.attributes.link.wasm_import_module]
从宿主环境导入符号时，可以使用 `wasm_import_module` 键为 `extern` 块中的项指定 [WebAssembly module](https://webassembly.github.io/spec/core/syntax/modules.html) 名称。如果未指定 `wasm_import_module`，默认模块名为 `env`。

<!-- ignore: requires extern linking -->
```rust,ignore
#[link(name = "crypto")]
unsafe extern {
    // …
}

#[link(name = "CoreFoundation", kind = "framework")]
unsafe extern {
    // …
}

#[link(wasm_import_module = "foo")]
unsafe extern {
    // …
}
```

r[items.extern.attributes.link.empty-block]
可以在空 extern 块上添加 `link` 属性。你可以用这种方式满足代码中其他位置（包括上游 crate）extern 块的链接要求，而不必为每个 extern 块添加该属性。

r[items.extern.attributes.link.modifiers.bundle]
#### 链接修饰符：`bundle`

r[items.extern.attributes.link.modifiers.bundle.allowed-kinds]
此修饰符只与 `static` 链接种类兼容。使用任何其他种类都会导致编译器错误。

r[items.extern.attributes.link.modifiers.bundle.behavior]
构建 rlib 或 staticlib 时，`+bundle` 表示原生静态库会被打包进 rlib 或 staticlib 归档中，然后在链接最终二进制文件时从中取出。

r[items.extern.attributes.link.modifiers.bundle.behavior-negative]
构建 rlib 时，`-bundle` 表示原生静态库会“按名称”注册为该 rlib 的依赖，并且其中的目标文件只会在链接最终二进制文件时包含进来，对该名称的文件搜索也会在最终链接期间执行。构建 staticlib 时，`-bundle` 表示原生静态库不会被包含进归档中，某个更高层的构建系统之后需要在链接最终二进制文件时添加它。

r[items.extern.attributes.link.modifiers.bundle.no-effect]
构建可执行文件或动态库等其他目标时，此修饰符没有效果。

r[items.extern.attributes.link.modifiers.bundle.default]
此修饰符的默认值是 `+bundle`。

关于此修饰符的更多实现细节，可在 [rustc 的 `bundle` 文档](../../rustc/command-line-arguments.html#linking-modifiers-bundle)中找到。

r[items.extern.attributes.link.modifiers.whole-archive]
#### 链接修饰符：`whole-archive`

r[items.extern.attributes.link.modifiers.whole-archive.allowed-kinds]
此修饰符只与 `static` 链接种类兼容。使用任何其他种类都会导致编译器错误。

r[items.extern.attributes.link.modifiers.whole-archive.behavior]
`+whole-archive` 表示将静态库作为完整归档进行链接，而不会丢弃任何目标文件。

r[items.extern.attributes.link.modifiers.whole-archive.default]
此修饰符的默认值是 `-whole-archive`。

关于此修饰符的更多实现细节，可在 [rustc 的 `whole-archive` 文档](../../rustc/command-line-arguments.html#linking-modifiers-whole-archive)中找到。

r[items.extern.attributes.link.modifiers.verbatim]
### 链接修饰符：`verbatim`

r[items.extern.attributes.link.modifiers.verbatim.allowed-kinds]
此修饰符与所有链接种类兼容。

r[items.extern.attributes.link.modifiers.verbatim.behavior]
`+verbatim` 表示 rustc 本身不会向库名称添加任何目标指定的库前缀或后缀（如 `lib` 或 `.a`），并且会尽力要求链接器做同样的事情。

r[items.extern.attributes.link.modifiers.verbatim.behavior-negative]
`-verbatim` 表示 rustc 会在将库名称传递给链接器之前添加目标特定的前缀和后缀，或者不会阻止链接器隐式添加它们。

r[items.extern.attributes.link.modifiers.verbatim.default]
此修饰符的默认值是 `-verbatim`。

关于此修饰符的更多实现细节，可在 [rustc 的 `verbatim` 文档](../../rustc/command-line-arguments.html#linking-modifiers-verbatim)中找到。

r[items.extern.attributes.link.kind-raw-dylib]
#### `dylib` 与 `raw-dylib`

r[items.extern.attributes.link.kind-raw-dylib.intro]
在 Windows 上，链接动态库要求向链接器提供导入库：这是一种特殊的静态库，它以某种方式声明动态库导出的所有符号，使链接器知道这些符号必须在运行时动态加载。

r[items.extern.attributes.link.kind-raw-dylib.import]
指定 `kind = "dylib"` 会指示 Rust 编译器基于 `name` 键链接一个导入库。随后链接器会使用其正常的库解析逻辑来查找该导入库。或者，指定 `kind = "raw-dylib"` 会指示编译器在编译期间生成一个导入库，并将其提供给链接器。

r[items.extern.attributes.link.kind-raw-dylib.platform-specific]
`raw-dylib` 仅在 Windows 上受支持。以其他平台为目标时使用它会导致编译器错误。

r[items.extern.attributes.link.import_name_type]
#### `import_name_type` 键

r[items.extern.attributes.link.import_name_type.intro]
在 x86 Windows 上，函数名称会被“修饰”（即添加特定前缀和/或后缀）以表示其调用约定。例如，名为 `fn1` 且没有参数的 `stdcall` 调用约定函数会被修饰为 `_fn1@0`。不过，[PE Format](https://learn.microsoft.com/windows/win32/debug/pe-format#import-name-type) 也允许名称没有前缀或不被修饰。此外，MSVC 和 GNU 工具链对相同调用约定使用不同的修饰方式，这意味着默认情况下，某些 Win32 函数无法通过 GNU 工具链使用 `raw-dylib` 链接种类来调用。

r[items.extern.attributes.link.import_name_type.values]
为了适应这些差异，使用 `raw-dylib` 链接种类时，还可以为 `import_name_type` 键指定以下值之一，以改变生成的导入库中函数的命名方式：

* `decorated`：函数名称将使用 MSVC 工具链格式进行完整修饰。
* `noprefix`：函数名称将使用 MSVC 工具链格式进行修饰，但跳过开头的 `?`、`@` 或可选的 `_`。
* `undecorated`：函数名称不会被修饰。

r[items.extern.attributes.link.import_name_type.default]
如果未指定 `import_name_type` 键，则函数名称将使用目标工具链的格式进行完整修饰。

r[items.extern.attributes.link.import_name_type.variables]
变量从不会被修饰，因此 `import_name_type` 键不会影响它们在生成的导入库中的命名方式。

r[items.extern.attributes.link.import_name_type.platform-specific]
`import_name_type` 键仅在 x86 Windows 上受支持。以其他平台为目标时使用它会导致编译器错误。

<!-- template:attributes -->
r[items.extern.attributes.link_name]
### `link_name` 属性

r[items.extern.attributes.link_name.intro]
_`link_name` [属性](../attributes.md)_可以应用于 `extern` 块内的声明，以指定要为给定函数或静态项导入的符号。

> [!EXAMPLE]
> ```rust
> unsafe extern "C" {
>     #[link_name = "actual_symbol_name"]
>     safe fn name_in_rust();
> }
> ```

r[items.extern.attributes.link_name.syntax]
`link_name` 属性使用 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 语法。

r[items.extern.attributes.link_name.invalid-names]
符号名称不得为空字符串，也不得包含任何 `U+0000`（NUL）字节。

r[items.extern.attributes.link_name.allowed-positions]
`link_name` 属性只能应用于 `extern` 块中的函数或静态项。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

r[items.extern.attributes.link_name.duplicates]
在一个项上，只有首次使用的 `link_name` 会生效。

> [!NOTE]
> `rustc` 会对第一次之后的任何使用发出未来兼容性警告。将来这可能会变成错误。

r[items.extern.attributes.link_name.link_ordinal]
`link_name` 属性不能与 [`link_ordinal`](external-blocks.md#r-items.extern.attributes.link_ordinal) 属性一起使用。

r[items.extern.attributes.link_ordinal]
### `link_ordinal` 属性

r[items.extern.attributes.link_ordinal.intro]
_`link_ordinal` 属性_可以应用于 `extern` 块内的声明，以表示生成要链接的导入库时使用的数字序号。在 Windows 上，序号是动态库导出的每个符号对应的唯一数字；加载该库时，可以使用它来查找该符号，而不必按名称查找。

> [!WARNING]
> `link_ordinal` 只应在已知符号序号稳定的情况下使用：如果构建包含该符号的二进制文件时没有显式设置该符号的序号，则会自动为它分配一个序号，而该分配的序号可能会在该二进制文件的不同构建之间变化。

```rust
# #[cfg(all(windows, target_arch = "x86"))]
#[link(name = "exporter", kind = "raw-dylib")]
unsafe extern "stdcall" {
    #[link_ordinal(15)]
    safe fn imported_function_stdcall(i: i32);
}
```

r[items.extern.attributes.link_ordinal.allowed-kinds]
此属性只与 `raw-dylib` 链接种类一起使用。使用任何其他种类都会导致编译器错误。

r[items.extern.attributes.link_ordinal.exclusive]
将此属性与 `link_name` 属性一起使用会导致编译器错误。

r[items.extern.attributes.fn-parameters]
### 函数形参上的属性

extern 函数参数上的属性遵循与[常规函数参数](functions.md#attributes-on-function-parameters)相同的规则和限制。

[ABI]: glossary.abi
[PE Format]: https://learn.microsoft.com/windows/win32/debug/pe-format#import-name-type
[UEFI]: https://uefi.org/specifications
[WebAssembly module]: https://webassembly.github.io/spec/core/syntax/modules.html
[`bundle` documentation for rustc]: ../../rustc/command-line-arguments.html#linking-modifiers-bundle
[`dylib` versus `raw-dylib`]: #dylib-versus-raw-dylib
[`extern fn`]: items.fn.extern
[`unsafe` context]: ../unsafe-keyword.md
[`verbatim` documentation for rustc]: ../../rustc/command-line-arguments.html#linking-modifiers-verbatim
[`whole-archive` documentation for rustc]: ../../rustc/command-line-arguments.html#linking-modifiers-whole-archive
[attributes]: ../attributes.md
[functions]: functions.md
[regular function parameters]: functions.md#attributes-on-function-parameters
[statics]: static-items.md
[unwind-behavior]: functions.md#unwinding
[value namespace]: ../names/namespaces.md
[win32 api]: https://learn.microsoft.com/en-us/windows/win32/api/
[`link_ordinal`]: items.extern.attributes.link_ordinal
