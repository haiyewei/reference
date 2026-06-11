r[cfg]
# 条件编译

r[cfg.syntax]
```grammar,configuration
ConfigurationPredicate ->
      ConfigurationOption
    | ConfigurationAll
    | ConfigurationAny
    | ConfigurationNot
    | `true`
    | `false`

ConfigurationOption ->
    IDENTIFIER ( `=` ( STRING_LITERAL | RAW_STRING_LITERAL ) )?

ConfigurationAll ->
    `all` `(` ConfigurationPredicateList? `)`

ConfigurationAny ->
    `any` `(` ConfigurationPredicateList? `)`

ConfigurationNot ->
    `not` `(` ConfigurationPredicate `)`

ConfigurationPredicateList ->
    ConfigurationPredicate (`,` ConfigurationPredicate)* `,`?
```

r[cfg.intro]
_条件编译的源代码_ 是只在特定条件下才编译的源代码。

r[cfg.attributes-macro]
可以使用 [`cfg`](#the-cfg-attribute) 和 [`cfg_attr`](#the-cfg_attr-attribute) [属性](attributes.md)，以及内置的 [`cfg!`](#the-cfg-macro) 和 [`cfg_select!`](#the-cfg_select-macro) [宏](macros.md)，使源代码进行条件编译。

r[cfg.conditional]
是否编译可以取决于被编译 crate 的目标架构、传递给编译器的任意值，以及下文进一步描述的其他因素。

r[cfg.predicate]
每种条件编译形式都接受一个求值为 true 或 false 的_配置谓词_。该谓词是以下之一：

r[cfg.predicate.option]
* 配置选项。如果该选项已设置，则谓词为 true；如果未设置，则为 false。

r[cfg.predicate.all]
* `all()` 加上以逗号分隔的配置谓词列表。如果给定的所有谓词均为 true，或者列表为空，则它为 true。

r[cfg.predicate.any]
* `any()` 加上以逗号分隔的配置谓词列表。如果给定谓词中至少一个为 true，则它为 true。如果没有谓词，则它为 false。

r[cfg.predicate.not]
* `not()` 加上一个配置谓词。如果其谓词为 false，则它为 true；如果其谓词为 true，则它为 false。

r[cfg.predicate.literal]
* `true` 或 `false` 字面量，分别始终为 true 或 false。

r[cfg.option-spec]
_配置选项_ 要么是名称，要么是键值对，并且要么已设置，要么未设置。

r[cfg.option-name]
名称写作单个标识符，例如 `unix`。

r[cfg.option-key-value]
键值对写作一个标识符、`=`，然后是一个字符串，例如 `target_arch = "x86_64"`。

> [!NOTE]
> `=` 周围的空白会被忽略，因此 `foo="bar"` 与 `foo = "bar"` 等价。

r[cfg.option-key-uniqueness]
键不需要唯一。例如，`feature = "std"` 和 `feature = "serde"` 可以同时被设置。

r[cfg.options.set]
## 设置配置选项

r[cfg.options.intro]
哪些配置选项被设置，是在 crate 编译期间静态确定的。

r[cfg.options.target]
某些选项会基于编译相关数据而_由编译器设置_。

r[cfg.options.other]
其他选项会基于代码之外传递给编译器的输入而_任意设置_。

r[cfg.options.crate]
无法从正在编译的 crate 的源代码内部设置配置选项。

> [!NOTE]
> 对于 `rustc`，任意设置的配置选项使用 [`--cfg`](../rustc/command-line-arguments.html#--cfg-configure-the-compilation-environment) 标志设置。可以用 `rustc --print cfg --target $TARGET` 显示指定目标的配置值。

> [!NOTE]
> 键为 `feature` 的配置选项是 [Cargo](../cargo/reference/features.html) 用来指定编译时选项和可选依赖项的一种约定。

r[cfg.target_arch]
### `target_arch`

r[cfg.target_arch.def]
键值选项，按目标的 CPU 架构设置一次。该值类似于平台目标三元组的第一个元素，但并不完全相同。

r[cfg.target_arch.values]
示例值：

* `"x86"`
* `"x86_64"`
* `"mips"`
* `"powerpc"`
* `"powerpc64"`
* `"arm"`
* `"aarch64"`

r[cfg.target_feature]
### `target_feature`

r[cfg.target_feature.def]
键值选项，会为当前编译目标可用的每个平台特性分别设置。

r[cfg.target_feature.values]
示例值：

* `"avx"`
* `"avx2"`
* `"crt-static"`
* `"rdrand"`
* `"sse"`
* `"sse2"`
* `"sse4.1"`

关于可用特性的更多细节，见 [`target_feature` 属性](attributes/codegen.md#the-target_feature-attribute)。

r[cfg.target_feature.crt_static]
`target_feature` 选项还可使用一个附加特性 `crt-static`，用于表示有[静态 C 运行时](linkage.md#static-and-dynamic-c-runtimes)可用。

r[cfg.target_os]
### `target_os`

r[cfg.target_os.def]
键值选项，按目标的操作系统设置一次。该值类似于平台目标三元组的第二和第三个元素。

r[cfg.target_os.values]
示例值：

* `"windows"`
* `"macos"`
* `"ios"`
* `"linux"`
* `"android"`
* `"freebsd"`
* `"dragonfly"`
* `"openbsd"`
* `"netbsd"`
* `"none"`（嵌入式目标的典型值）

r[cfg.target_family]
### `target_family`

r[cfg.target_family.def]
键值选项，提供对目标更通用的描述，例如目标通常所属的操作系统族或架构族。可以设置任意数量的 `target_family` 键值对。

r[cfg.target_family.values]
示例值：

* `"unix"`
* `"windows"`
* `"wasm"`
* 同时为 `"unix"` 和 `"wasm"`

r[cfg.target_family.unix]
### `unix` 和 `windows`

如果设置了 `target_family = "unix"`，则会设置 `unix`。

r[cfg.target_family.windows]
如果设置了 `target_family = "windows"`，则会设置 `windows`。

r[cfg.target_env]
### `target_env`

r[cfg.target_env.def]
键值选项，设置为关于目标平台的进一步消歧信息，包括所用 ABI 或 `libc` 的信息。出于历史原因，只有在确实需要消歧时，该值才被定义为非空字符串。因此，例如在许多 GNU 平台上，该值会为空。该值类似于平台目标三元组的第四个元素。一个区别是，诸如 `gnueabihf` 这样的嵌入式 ABI 只会将 `target_env` 定义为 `"gnu"`。

r[cfg.target_env.values]
示例值：

* `""`
* `"gnu"`
* `"msvc"`
* `"musl"`
* `"sgx"`
* `"sim"`
* `"macabi"`

r[cfg.target_abi]
### `target_abi`

r[cfg.target_abi.def]
键值选项，设置为关于目标 ABI 的信息，用于进一步消除目标的歧义。

r[cfg.target_abi.disambiguation]
出于历史原因，只有在确实需要消歧时，该值才被定义为非空字符串。因此，例如在许多 GNU 平台上，该值会为空。

r[cfg.target_abi.values]
示例值：

* `""`
* `"llvm"`
* `"eabihf"`
* `"abi64"`

r[cfg.target_endian]
### `target_endian`

键值选项，根据目标 CPU 的字节序设置一次，其值为 "little" 或 "big"。

r[cfg.target_pointer_width]
### `target_pointer_width`

r[cfg.target_pointer_width.def]
键值选项，按目标的指针宽度（位数）设置一次。

r[cfg.target_pointer_width.values]
示例值：

* `"16"`
* `"32"`
* `"64"`

r[cfg.target_vendor]
### `target_vendor`

r[cfg.target_vendor.def]
键值选项，按目标的供应商设置一次。

r[cfg.target_vendor.values]
示例值：

* `"apple"`
* `"fortanix"`
* `"pc"`
* `"unknown"`

r[cfg.target_has_atomic]
### `target_has_atomic`

r[cfg.target_has_atomic.def]
键值选项，会为目标支持原子加载、存储和比较并交换操作的每个位宽分别设置。

r[cfg.target_has_atomic.stdlib]
当存在此 cfg 时，所有与相关原子宽度对应的稳定 [`core::sync::atomic`](../core/sync/atomic/index.html) API 都可用。

r[cfg.target_has_atomic.values]
可能的值：

* `"8"`
* `"16"`
* `"32"`
* `"64"`
* `"128"`
* `"ptr"`

r[cfg.target_has_atomic_primitive_alignment]
### `target_has_atomic_primitive_alignment`

r[cfg.target_has_atomic_primitive_alignment.def]
键值选项，会为 [atomic](../core/sync/atomic/index.html) 类型与对应整数类型具有相同对齐的每个位宽分别设置。

> [!NOTE]
> 对于给定位宽，对齐通常相同。但是，在某些目标（例如 32 位 x86）上，诸如 [`AtomicI64`](../core/sync/atomic/type.AtomicI64.html) 的 64 位原子类型具有 8 字节对齐，而 `i64` 只对齐到 4 字节。在这种情况下，不会设置 `target_has_atomic_primitive_alignment = "64"`。

r[cfg.target_has_atomic_primitive_alignment.values]
可能的值：

* `"8"`
* `"16"`
* `"32"`
* `"64"`
* `"128"`
* `"ptr"`

r[cfg.test]
### `test`

编译测试框架时启用。使用 `rustc` 时，通过 [`--test`](../rustc/command-line-arguments.html#--test-build-a-test-harness) 标志完成。关于测试支持的更多内容，见 [Testing](attributes/testing.md)。

r[cfg.debug_assertions]
### `debug_assertions`

默认在不启用优化进行编译时启用。可用于在开发中启用额外调试代码，而不在生产中启用。例如，它控制标准库 [`debug_assert!`](../core/macro.debug_assert.html) 宏的行为。

r[cfg.proc_macro]
### `proc_macro`

当正在编译的 crate 使用 `proc_macro` [crate 类型](linkage.md)编译时设置。

r[cfg.panic]
### `panic`

r[cfg.panic.def]
键值选项，会根据 [panic 策略](panic.md#panic-strategy)设置。注意，未来可能会添加更多值。

r[cfg.panic.values]
示例值：

* `"abort"`
* `"unwind"`

[panic strategy]: panic.md#panic-strategy

## 条件编译的形式

<!-- template:attributes -->
r[cfg.attr]
### `cfg` 属性

r[cfg.attr.intro]
_`cfg` [属性](attributes.md)_ 会基于配置谓词有条件地包含它所附加到的形式。

> [!EXAMPLE]
> ```rust
> // The function is only included in the build when compiling for macOS
> #[cfg(target_os = "macos")]
> fn macos_only() {
>   // ...
> }
>
> // This function is only included when either foo or bar is defined
> #[cfg(any(foo, bar))]
> fn needs_foo_or_bar() {
>   // ...
> }
>
> // This function is only included when compiling for a unixish OS with a 32-bit
> // architecture
> #[cfg(all(unix, target_pointer_width = "32"))]
> fn on_32bit_unix() {
>   // ...
> }
>
> // This function is only included when foo is not defined
> #[cfg(not(foo))]
> fn needs_not_foo() {
>   // ...
> }
>
> // This function is only included when the panic strategy is set to unwind
> #[cfg(panic = "unwind")]
> fn when_unwinding() {
>   // ...
> }
> ```

r[cfg.attr.syntax]
`cfg` 属性的语法是：

```grammar,configuration
@root CfgAttribute -> `cfg` `(` ConfigurationPredicate `)`
```

r[cfg.attr.allowed-positions]
`cfg` 属性可以用在任何允许属性的位置。

r[cfg.attr.duplicates]
`cfg` 属性可以在一个形式上使用任意多次。如果任意一个 `cfg` 谓词为 false，则这些属性所附加到的形式不会被包含，但 [cfg.attr.crate-level-attrs](conditional-compilation.md#r-cfg.attr.crate-level-attrs) 中所述情形除外。

r[cfg.attr.effect]
如果谓词为 true，该形式会被重写为不带有这些 `cfg` 属性。如果任意谓词为 false，该形式会从源代码中移除。

r[cfg.attr.crate-level-attrs]
当 crate 级 `cfg` 的谓词为 false 时，crate 本身仍然存在。位于该 `cfg` 之前的所有 crate 属性会保留，位于该 `cfg` 之后的所有 crate 属性会被移除，后续的全部 crate 内容也会被移除。

> [!EXAMPLE]
> 不移除前置属性的这种行为，使你可以执行诸如包含 `#![no_std]` 以避免链接 `std` 之类的操作，即使 `#![cfg(...)]` 以其他方式移除了 crate 的内容。例如：
>
> <!-- ignore: test infrastructure can't handle no_std -->
> ```rust,ignore
> // This `no_std` attribute is kept even though the crate-level `cfg`
> // attribute is false.
> #![no_std]
> #![cfg(false)]
>
> // This function is not included.
> pub fn example() {}
> ```

<!-- template:attributes -->
r[cfg.cfg_attr]
### `cfg_attr` 属性

r[cfg.cfg_attr.intro]
_`cfg_attr` [属性](attributes.md)_ 会基于配置谓词有条件地包含属性。

> [!EXAMPLE]
> 以下模块会基于目标在 `linux.rs` 或 `windows.rs` 中被找到。
>
> <!-- ignore: `mod` needs multiple files -->
> ```rust,ignore
> #[cfg_attr(target_os = "linux", path = "linux.rs")]
> #[cfg_attr(windows, path = "windows.rs")]
> mod os;
> ```

r[cfg.cfg_attr.syntax]
`cfg_attr` 属性的语法是：

```grammar,configuration
@root CfgAttrAttribute -> `cfg_attr` `(` ConfigurationPredicate `,` CfgAttrs? `)`

CfgAttrs -> Attr (`,` Attr)* `,`?
```

r[cfg.cfg_attr.allowed-positions]
`cfg_attr` 属性可以用在任何允许属性的位置。

r[cfg.cfg_attr.duplicates]
`cfg_attr` 属性可以在一个形式上使用任意多次。

r[cfg.cfg_attr.attr-restriction]
[`crate_type`](linkage.md) 和 [`crate_name`](crates-and-source-files.md#the-crate_name-attribute) 属性不能与 `cfg_attr` 一起使用。

r[cfg.cfg_attr.behavior]
当配置谓词为 true 时，`cfg_attr` 会展开为谓词之后列出的属性。

r[cfg.cfg_attr.attribute-list]
可以列出零个、一个或多个属性。多个属性会分别展开为独立的属性。

> [!EXAMPLE]
> <!-- ignore: fake attributes -->
> ```rust,ignore
> #[cfg_attr(feature = "magic", sparkles, crackles)]
> fn bewitched() {}
>
> // When the `magic` feature flag is enabled, the above will expand to:
> #[sparkles]
> #[crackles]
> fn bewitched() {}
> ```

> [!NOTE]
> `cfg_attr` 可以展开为另一个 `cfg_attr`。例如，`#[cfg_attr(target_os = "linux", cfg_attr(feature = "multithreaded", some_other_attribute))]` 是有效的。此示例等价于 `#[cfg_attr(all(target_os = "linux", feature = "multithreaded"), some_other_attribute)]`。

r[cfg.macro]
### `cfg` 宏

内置的 `cfg` 宏接受单个配置谓词，并在该谓词为 true 时求值为 `true` 字面量，在其为 false 时求值为 `false` 字面量。

例如：

```rust
let machine_kind = if cfg!(unix) {
  "unix"
} else if cfg!(windows) {
  "windows"
} else {
  "unknown"
};

println!("I'm running on a {} machine!", machine_kind);
```

r[cfg.cfg_select]
### `cfg_select` 宏

r[cfg.cfg_select.intro]
内置的 [`cfg_select!`](../core/macros/macro.cfg_select.html) 宏可用于基于多个配置谓词在编译时选择代码。

> [!EXAMPLE]
> ```rust
> cfg_select! {
>     unix => {
>         fn foo() { /* unix specific functionality */ }
>     }
>     target_pointer_width = "32" => {
>         fn foo() { /* non-unix, 32-bit functionality */ }
>     }
>     _ => {
>         fn foo() { /* fallback implementation */ }
>     }
> }
>
> let is_unix_str = cfg_select! {
>     unix => "unix",
>     _ => "not unix",
> };
> ```

r[cfg.cfg_select.syntax]
```grammar,configuration
@root CfgSelect -> CfgSelectArms?

CfgSelectArms ->
    CfgSelectConfigurationPredicate `=>`
    (
        `{` ^ TokenTree `}` `,`? CfgSelectArms?
      | ExpressionWithBlockNoAttrs `,`? CfgSelectArms?
      | ExpressionWithoutBlockNoAttrs ( `,` CfgSelectArms? )?
    )

CfgSelectConfigurationPredicate ->
    ConfigurationPredicate | `_`
```

r[cfg.cfg_select.first-arm]
`cfg_select` 会展开为第一个配置谓词求值为 true 的分支的载荷。

r[cfg.cfg_select.braces]
如果整个载荷包裹在花括号中，则在展开期间会移除这些花括号。

r[cfg.cfg_select.wildcard]
配置谓词 `_` 始终求值为 true。

r[cfg.cfg_select.fallthrough]
如果没有任何谓词求值为 true，则为编译错误。

r[cfg.cfg_select.well-formed]
每个右侧都必须是在调用该宏的位置处语法有效的展开。

[Testing]: attributes/testing.md
[`--cfg`]: ../rustc/command-line-arguments.html#--cfg-configure-the-compilation-environment
[`--test`]: ../rustc/command-line-arguments.html#--test-build-a-test-harness
[`cfg`]: #the-cfg-attribute
[`cfg!`]: #the-cfg-macro
[`cfg_attr`]: #the-cfg_attr-attribute
[`cfg_select!`]: #the-cfg_select-macro
[`crate_name`]: crates-and-source-files.md#the-crate_name-attribute
[`crate_type`]: linkage.md
[`target_feature` attribute]: attributes/codegen.md#the-target_feature-attribute
[attribute]: attributes.md
[attributes]: attributes.md
[cargo-feature]: ../cargo/reference/features.html
[crate type]: linkage.md
[macros]: macros.md
[static C runtime]: linkage.md#static-and-dynamic-c-runtimes
