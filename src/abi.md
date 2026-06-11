r[abi]
# 应用二进制接口（ABI）

r[abi.intro]
本节记录会影响 crate 编译输出 ABI 的特性。

有关为导出函数指定 ABI 的信息，请参阅 _[extern functions](items/functions.md#extern-function-qualifier)_。有关为链接外部库指定 ABI 的信息，请参阅 _[external blocks](items/external-blocks.md)_。

<!-- template:attributes -->
r[abi.used]
## `used` 属性

r[abi.used.intro]
_`used` [属性](attributes.md)_强制将 [static](items/static-items.md) 保留在输出目标文件（.o、.rlib 等，不包括最终二进制文件）中，即使它从未被 crate 中的任何其他项使用或引用。不过，链接器仍然可以移除它。

> [!EXAMPLE]
> ```rust
> // lib.rs
>
> // 由于 `#[used]`，这会被保留。
> #[used]
> static S1: u8 = 0;
>
> // 由于它未被使用，这可以被移除。
> #[allow(dead_code)]
> static S2: u8 = 0;
>
> // 由于它公开可达，这会被保留。
> pub static S3: u8 = 0;
>
> // 由于它被一个公开可达的函数
> // 引用，这会被保留。
> static S4: u8 = 0;
> #[unsafe(no_mangle)] pub fn f4() -> &'static u8 { &S4 }
>
> // 由于它只被一个私有且未使用的
> // （dead）函数引用，这可以被移除。
> static S5: u8 = 0;
> #[allow(dead_code)]
> fn f5() -> &'static u8 { &S5 }
> ```
>
> ```console
> $ rustc -O --emit=obj --crate-type=rlib lib.rs
> $ LC_ALL=C nm -C lib.o
> 0000000000000000 R lib::S1
> 0000000000000000 R lib::S3
> 0000000000000000 r lib::S4
> 0000000000000000 T f4
> ```

r[abi.used.syntax]
`used` 属性使用 [MetaWord](attributes.md#grammar-MetaWord) 语法。

r[abi.used.allowed-positions]
`used` 属性只能应用于 [`static` 项](items/static-items.md#r-items.static)。

r[abi.used.duplicates]
在一个项上，只有第一次使用 `used` 会生效。

> [!NOTE]
> `rustc` 会对第一次之后的任何使用发出 lint。

r[abi.no_mangle]
## `no_mangle` 属性

r[abi.no_mangle.intro]
_`no_mangle` 属性_可用于任何[项](items.md)，以禁用标准符号名修饰。该项的符号将是项名称的标识符。

r[abi.no_mangle.publicly-exported]
此外，类似于 [`used` 属性](#the-used-attribute)，该项将从生成的库或目标文件中公开导出。

r[abi.no_mangle.unsafe]
此属性是 unsafe 的，因为未修饰的符号可能会与同名的另一个符号（或知名符号）发生冲突，从而导致未定义行为。

```rust
#[unsafe(no_mangle)]
extern "C" fn foo() {}
```

r[abi.no_mangle.edition2024]
> [!EDITION-2024]
> 在 2024 edition 之前，允许在不带 `unsafe` 限定的情况下使用 `no_mangle` 属性。

r[abi.link_section]
## `link_section` 属性

r[abi.link_section.intro]
_`link_section` 属性_指定[函数](items/functions.md)或 [static](items/static-items.md) 的内容将被放入目标文件的哪个节。

r[abi.link_section.syntax]
`link_section` 属性使用 [MetaNameValueStr](attributes.md#grammar-MetaNameValueStr) 语法来指定节名称。

<!-- no_run: don't link. The format of the section name is platform-specific. -->
```rust,no_run
# #[cfg(target_os = "linux")] {
#[unsafe(no_mangle)]
#[unsafe(link_section = ".example_section")]
pub static VAR1: u32 = 1;
# }
```

r[abi.link_section.unsafe]
此属性是 unsafe 的，因为它允许用户将数据和代码放入并不预期它们的内存节中，例如将可变数据放入只读区域。

r[abi.link_section.duplicates]
在一个项上，只有第一次使用 `link_section` 会生效。

> [!NOTE]
> `rustc` 会对第一次之后的任何使用发出未来兼容性警告。将来这可能会变成错误。

r[abi.link_section.edition2024]
> [!EDITION-2024]
> 在 2024 edition 之前，允许在不带 `unsafe` 限定的情况下使用 `link_section` 属性。

r[abi.export_name]
## `export_name` 属性

r[abi.export_name.intro]
_`export_name` 属性_指定将在[函数](items/functions.md)或 [static](items/static-items.md) 上导出的符号名称。

r[abi.export_name.syntax]
`export_name `属性使用 [MetaNameValueStr](attributes.md#grammar-MetaNameValueStr) 语法来指定符号名称。

```rust
#[unsafe(export_name = "exported_symbol_name")]
pub fn name_in_rust() { }
```

r[abi.export_name.unsafe]
此属性是 unsafe 的，因为具有自定义名称的符号可能会与同名的另一个符号（或知名符号）发生冲突，从而导致未定义行为。

r[abi.export_name.duplicates]
在一个项上，只有第一次使用 `export_name` 会生效。

> [!NOTE]
> `rustc` 会对第一次之后的任何使用发出未来兼容性警告。将来这可能会变成错误。

r[abi.export_name.edition2024]
> [!EDITION-2024]
> 在 2024 edition 之前，允许在不带 `unsafe` 限定的情况下使用 `export_name` 属性。

[attribute]: attributes.md
[extern functions]: items/functions.md#extern-function-qualifier
[external blocks]: items/external-blocks.md
[function]: items/functions.md
[item]: items.md
[`static` items]: items.static
[static]: items/static-items.md
