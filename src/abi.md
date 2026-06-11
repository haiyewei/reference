<div class="rule" id="r-abi"><a class="rule-link" href="#r-abi" title="abi"><span>[abi]</span></a>
</div>

# 应用二进制接口（ABI）

<div class="rule" id="r-abi.intro"><a class="rule-link" href="#r-abi.intro" title="abi.intro"><span>[abi<wbr>.intro]</span></a>
</div>

本节记录会影响 crate 编译输出 ABI 的特性。

有关为导出函数指定 ABI 的信息，请参阅 _[extern functions](items/functions.md#extern-function-qualifier)_。有关为链接外部库指定 ABI 的信息，请参阅 _[external blocks](items/external-blocks.md)_。

<!-- template:attributes -->

<div class="rule" id="r-abi.used"><a class="rule-link" href="#r-abi.used" title="abi.used"><span>[abi<wbr>.used]</span></a>
</div>

## `used` 属性

<div class="rule" id="r-abi.used.intro"><a class="rule-link" href="#r-abi.used.intro" title="abi.used.intro"><span>[abi<wbr>.used<wbr>.intro]</span></a>
</div>

\_`used` [属性](attributes.md)\_强制将 [static](items/static-items.md) 保留在输出目标文件（.o、.rlib 等，不包括最终二进制文件）中，即使它从未被 crate 中的任何其他项使用或引用。不过，链接器仍然可以移除它。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
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

</div>

<div class="rule" id="r-abi.used.syntax"><a class="rule-link" href="#r-abi.used.syntax" title="abi.used.syntax"><span>[abi<wbr>.used<wbr>.syntax]</span></a>
</div>

`used` 属性使用 [MetaWord](attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-abi.used.allowed-positions"><a class="rule-link" href="#r-abi.used.allowed-positions" title="abi.used.allowed-positions"><span>[abi<wbr>.used<wbr>.allowed-positions]</span></a>
</div>

`used` 属性只能应用于 [`static` 项](items/static-items.md#r-items.static)。

<div class="rule" id="r-abi.used.duplicates"><a class="rule-link" href="#r-abi.used.duplicates" title="abi.used.duplicates"><span>[abi<wbr>.used<wbr>.duplicates]</span></a>
</div>

在一个项上，只有第一次使用 `used` 会生效。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次之后的任何使用发出 lint。

</div>

<div class="rule" id="r-abi.no_mangle"><a class="rule-link" href="#r-abi.no_mangle" title="abi.no_mangle"><span>[abi<wbr>.no_mangle]</span></a>
</div>

## `no_mangle` 属性

<div class="rule" id="r-abi.no_mangle.intro"><a class="rule-link" href="#r-abi.no_mangle.intro" title="abi.no_mangle.intro"><span>[abi<wbr>.no_mangle<wbr>.intro]</span></a>
</div>

\_`no_mangle` 属性_可用于任何[项](items.md)，以禁用标准符号名修饰。该项的符号将是项名称的标识符。

<div class="rule" id="r-abi.no_mangle.publicly-exported"><a class="rule-link" href="#r-abi.no_mangle.publicly-exported" title="abi.no_mangle.publicly-exported"><span>[abi<wbr>.no_mangle<wbr>.publicly-exported]</span></a>
</div>

此外，类似于 [`used` 属性](#the-used-attribute)，该项将从生成的库或目标文件中公开导出。

<div class="rule" id="r-abi.no_mangle.unsafe"><a class="rule-link" href="#r-abi.no_mangle.unsafe" title="abi.no_mangle.unsafe"><span>[abi<wbr>.no_mangle<wbr>.unsafe]</span></a>
</div>

此属性是 unsafe 的，因为未修饰的符号可能会与同名的另一个符号（或知名符号）发生冲突，从而导致未定义行为。

```rust
#[unsafe(no_mangle)]
extern "C" fn foo() {}
```

<div class="rule" id="r-abi.no_mangle.edition2024"><a class="rule-link" href="#r-abi.no_mangle.edition2024" title="abi.no_mangle.edition2024"><span>[abi<wbr>.no_mangle<wbr>.edition2024]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2024</span> Edition differences</p>
 > 
 > 在 2024 edition 之前，允许在不带 `unsafe` 限定的情况下使用 `no_mangle` 属性。

</div>

<div class="rule" id="r-abi.link_section"><a class="rule-link" href="#r-abi.link_section" title="abi.link_section"><span>[abi<wbr>.link_section]</span></a>
</div>

## `link_section` 属性

<div class="rule" id="r-abi.link_section.intro"><a class="rule-link" href="#r-abi.link_section.intro" title="abi.link_section.intro"><span>[abi<wbr>.link_section<wbr>.intro]</span></a>
</div>

\_`link_section` 属性_指定[函数](items/functions.md)或 [static](items/static-items.md) 的内容将被放入目标文件的哪个节。

<div class="rule" id="r-abi.link_section.syntax"><a class="rule-link" href="#r-abi.link_section.syntax" title="abi.link_section.syntax"><span>[abi<wbr>.link_section<wbr>.syntax]</span></a>
</div>

`link_section` 属性使用 [MetaNameValueStr](attributes.md#grammar-MetaNameValueStr) 语法来指定节名称。

<!-- no_run: don't link. The format of the section name is platform-specific. -->

```rust,no_run
# #[cfg(target_os = "linux")] {
#[unsafe(no_mangle)]
#[unsafe(link_section = ".example_section")]
pub static VAR1: u32 = 1;
# }
```

<div class="rule" id="r-abi.link_section.unsafe"><a class="rule-link" href="#r-abi.link_section.unsafe" title="abi.link_section.unsafe"><span>[abi<wbr>.link_section<wbr>.unsafe]</span></a>
</div>

此属性是 unsafe 的，因为它允许用户将数据和代码放入并不预期它们的内存节中，例如将可变数据放入只读区域。

<div class="rule" id="r-abi.link_section.duplicates"><a class="rule-link" href="#r-abi.link_section.duplicates" title="abi.link_section.duplicates"><span>[abi<wbr>.link_section<wbr>.duplicates]</span></a>
</div>

在一个项上，只有第一次使用 `link_section` 会生效。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次之后的任何使用发出未来兼容性警告。将来这可能会变成错误。

</div>

<div class="rule" id="r-abi.link_section.edition2024"><a class="rule-link" href="#r-abi.link_section.edition2024" title="abi.link_section.edition2024"><span>[abi<wbr>.link_section<wbr>.edition2024]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2024</span> Edition differences</p>
 > 
 > 在 2024 edition 之前，允许在不带 `unsafe` 限定的情况下使用 `link_section` 属性。

</div>

<div class="rule" id="r-abi.export_name"><a class="rule-link" href="#r-abi.export_name" title="abi.export_name"><span>[abi<wbr>.export_name]</span></a>
</div>

## `export_name` 属性

<div class="rule" id="r-abi.export_name.intro"><a class="rule-link" href="#r-abi.export_name.intro" title="abi.export_name.intro"><span>[abi<wbr>.export_name<wbr>.intro]</span></a>
</div>

\_`export_name` 属性_指定将在[函数](items/functions.md)或 [static](items/static-items.md) 上导出的符号名称。

<div class="rule" id="r-abi.export_name.syntax"><a class="rule-link" href="#r-abi.export_name.syntax" title="abi.export_name.syntax"><span>[abi<wbr>.export_name<wbr>.syntax]</span></a>
</div>

`export_name `属性使用 [MetaNameValueStr](attributes.md#grammar-MetaNameValueStr) 语法来指定符号名称。

```rust
#[unsafe(export_name = "exported_symbol_name")]
pub fn name_in_rust() { }
```

<div class="rule" id="r-abi.export_name.unsafe"><a class="rule-link" href="#r-abi.export_name.unsafe" title="abi.export_name.unsafe"><span>[abi<wbr>.export_name<wbr>.unsafe]</span></a>
</div>

此属性是 unsafe 的，因为具有自定义名称的符号可能会与同名的另一个符号（或知名符号）发生冲突，从而导致未定义行为。

<div class="rule" id="r-abi.export_name.duplicates"><a class="rule-link" href="#r-abi.export_name.duplicates" title="abi.export_name.duplicates"><span>[abi<wbr>.export_name<wbr>.duplicates]</span></a>
</div>

在一个项上，只有第一次使用 `export_name` 会生效。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次之后的任何使用发出未来兼容性警告。将来这可能会变成错误。

</div>

<div class="rule" id="r-abi.export_name.edition2024"><a class="rule-link" href="#r-abi.export_name.edition2024" title="abi.export_name.edition2024"><span>[abi<wbr>.export_name<wbr>.edition2024]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2024</span> Edition differences</p>
 > 
 > 在 2024 edition 之前，允许在不带 `unsafe` 限定的情况下使用 `export_name` 属性。

</div>
