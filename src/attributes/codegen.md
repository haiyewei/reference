r[attributes.codegen]
# 代码生成属性

以下[属性](../attributes.md)用于控制代码生成。

<!-- template:attributes -->
r[attributes.codegen.inline]
### `inline` 属性

r[attributes.codegen.inline.intro]
*`inline` [属性](../attributes.md)* 建议是否应将带属性函数的代码副本放置到调用者中，而不是生成对该函数的调用。

> [!EXAMPLE]
> ```rust
> #[inline]
> pub fn example1() {}
>
> #[inline(always)]
> pub fn example2() {}
>
> #[inline(never)]
> pub fn example3() {}
> ```

> [!NOTE]
> `rustc` 会在认为值得时自动内联函数。请谨慎使用此属性，因为对内联内容作出不佳决策可能会让程序变慢。

r[attributes.codegen.inline.syntax]
`inline` 属性的语法为：

```grammar,attributes
@root InlineAttribute ->
      `inline` `(` `always` `)`
    | `inline` `(` `never` `)`
    | `inline`
```

r[attributes.codegen.inline.allowed-positions]
`inline` 属性只能应用于具有[函数体](items.fn.body)的函数 --- [闭包](expr.closure)、[async 块](expr.block.async)、[自由函数](items.fn)、[固有 impl](items.impl.inherent) 或 [trait impl](items.impl.trait) 中的[关联函数](items.associated.fn)，以及 [trait 定义](items.traits)中那些具有[默认定义](items.traits.associated-item-decls)的关联函数。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

> [!NOTE]
> 尽管该属性可以应用于[闭包](expr.closure)和[async 块](expr.block.async)，但其用途有限，因为我们尚不支持在表达式上使用属性。
>
> ```rust
> // 我们允许语句上有属性。
> #[inline] || (); // 可以
> #[inline] async {}; // 可以
> ```
>
> ```rust,compile_fail,E0658
> // 我们尚不允许表达式上有属性。
> let f = #[inline] || (); // 错误
> ```

r[attributes.codegen.inline.duplicates]
在一个函数上，只有第一次使用 `inline` 会产生效果。

> [!NOTE]
> `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

r[attributes.codegen.inline.modes]
`inline` 属性支持以下模式：

- `#[inline]` *建议*执行内联展开。
- `#[inline(always)]` *建议*始终执行内联展开。
- `#[inline(never)]` *建议*永不执行内联展开。

> [!NOTE]
> 无论是哪种形式，该属性都是一种提示。编译器可以忽略它。

r[attributes.codegen.inline.trait]
当 `inline` 应用于 [trait](items.traits) 中的函数时，它只应用于[默认定义](items.traits.associated-item-decls)的代码。

r[attributes.codegen.inline.async]
当 `inline` 应用于 [async 函数](items.fn.async)或 [async 闭包](expr.closure.async)时，它只应用于生成的 `poll` 函数的代码。

> [!NOTE]
> 更多细节见 [Rust issue #129347](https://github.com/rust-lang/rust/issues/129347)。

r[attributes.codegen.inline.externally-exported]
如果函数通过 [`no_mangle`](abi.no_mangle) 或 [`export_name`](abi.export_name) 对外导出，则 `inline` 属性会被忽略。

<!-- template:attributes -->
r[attributes.codegen.cold]
### `cold` 属性

r[attributes.codegen.cold.intro]
*`cold` [属性](../attributes.md)* 建议带属性函数不太可能被调用，这可以帮助编译器生成更好的代码。

> [!EXAMPLE]
> ```rust
> #[cold]
> pub fn example() {}
> ```

r[attributes.codegen.cold.syntax]
`cold` 属性使用 [MetaWord] 语法。

r[attributes.codegen.cold.allowed-positions]
`cold` 属性只能应用于具有[函数体](items.fn.body)的函数 --- [闭包](expr.closure)、[async 块](expr.block.async)、[自由函数](items.fn)、[固有 impl](items.impl.inherent) 或 [trait impl](items.impl.trait) 中的[关联函数](items.associated.fn)，以及 [trait 定义](items.traits)中那些具有[默认定义](items.traits.associated-item-decls)的关联函数。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

> [!NOTE]
> 尽管该属性可以应用于[闭包](expr.closure)和[async 块](expr.block.async)，但其用途有限，因为我们尚不支持在表达式上使用属性。

<!-- TODO: rustc currently seems to allow cold on a trait function without a body, but it appears to be ignored. I think that may be a bug, and it should at least warn if not reject (like inline does). -->

r[attributes.codegen.cold.duplicates]
在一个函数上，只有第一次使用 `cold` 会产生效果。

> [!NOTE]
> `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

r[attributes.codegen.cold.trait]
当 `cold` 应用于 [trait](items.traits) 中的函数时，它只应用于[默认定义](items.traits.associated-item-decls)的代码。

<!-- template:attributes -->
r[attributes.codegen.naked]
## `naked` 属性

r[attributes.codegen.naked.intro]
*`naked` [属性](../attributes.md)* 会阻止编译器为带属性函数发出函数序言和尾声 --- 这样的函数称为 _naked function_。

> [!EXAMPLE]
> ```rust
> # #[cfg(target_arch = "x86_64")] {
> /// 将给定的数加 3。
> // SAFETY: 函数体遵循 "sysv64" 调用约定，
> // 满足该签名的要求，并且不会直通执行。
> #[unsafe(naked)]
> pub extern "sysv64" fn add_n(number: u64) -> u64 {
>     core::arch::naked_asm!(
>         "add rdi, {}",
>         "mov rax, rdi",
>         "ret",
>         const 3,
>     )
> }
> # }
> ```

r[attributes.codegen.naked.syntax]
`naked` 属性使用 [MetaWord] 语法。

r[attributes.codegen.naked.allowed-positions]
`naked` 属性只能应用于[自由函数](items.fn)、[固有 impl](items.impl.inherent) 或 [trait impl](items.impl.trait) 中的[关联函数](items.associated.fn)，以及 [trait 定义](items.traits)中那些具有[默认定义](items.traits.associated-item-decls)的关联函数。

r[attributes.codegen.naked.duplicates]
在一个函数上，只有第一次使用 `naked` 会产生效果。

> [!NOTE]
> `rustc` 会对第一次之后的任何使用发出 lint。

r[attributes.codegen.naked.unsafe]
`naked` 属性必须标记为 [`unsafe`][attributes.safety]，因为函数体必须遵守函数的调用约定、满足其签名，并且要么返回，要么发散（即不会直通执行到汇编代码末尾之后）。

r[attributes.codegen.naked.body]
[函数体](items.fn.body)必须正好由一个 [`naked_asm!`](asm) 宏调用组成。

r[attributes.codegen.naked.prologue-epilogue]
编译器不会为 naked function 发出序言或尾声：[`naked_asm!`](asm) 调用中的汇编代码构成其整个函数体。

r[attributes.codegen.naked.call-stack]
进入时，汇编代码可以假定调用栈和寄存器状态按照该函数的签名和调用约定是有效的。

r[attributes.codegen.naked.no-duplication]
除非在单态化多态函数时，否则编译器不得复制该汇编代码。

> [!NOTE]
> 这一保证对于定义符号的 naked function 很重要。

r[attributes.codegen.naked.unused-variables]
naked function 中会抑制 [`unused_variables` lint](../../rustc/lints/listing/warn-by-default.html#unused-variables)。

r[attributes.codegen.naked.inline]
[`inline` 属性](attributes.codegen.inline)不能应用于 naked function。

r[attributes.codegen.naked.track_caller]
[`track_caller` 属性](attributes.codegen.track_caller)不能应用于 naked function。

r[attributes.codegen.naked.testing]
[测试属性](attributes.testing)不能应用于 naked function。

r[attributes.codegen.naked.target_feature]
[`target_feature` 属性](attributes.codegen.target_feature)不能应用于 naked function。

<!-- TODO: Reflexive rules? -->

r[attributes.codegen.naked.abi]
naked function 不能使用 ["Rust" ABI](items.extern.abi.rust)。

<!-- template:attributes -->
r[attributes.codegen.no_builtins]
## `no_builtins` 属性

r[attributes.codegen.no_builtins.intro]
*`no_builtins` [属性](../attributes.md)* 会禁用某些代码模式的优化，这些代码模式与调用被假定存在的库函数有关。

<!-- TODO: This needs expanding, see <https://github.com/rust-lang/reference/issues/542>. -->

> [!EXAMPLE]
> ```rust
> #![no_builtins]
> ```

r[attributes.codegen.no_builtins.syntax]
`no_builtins` 属性使用 [MetaWord] 语法。

r[attributes.codegen.no_builtins.allowed-positions]
`no_builtins` 属性只能应用于 crate 根。

r[attributes.codegen.no_builtins.duplicates]
只有第一次使用 `no_builtins` 属性会产生效果。

> [!NOTE]
> `rustc` 会对第一次之后的任何使用发出 lint。

r[attributes.codegen.target_feature]
## `target_feature` 属性

r[attributes.codegen.target_feature.intro]
*`target_feature` [属性](../attributes.md)* 可以应用于函数，以便为特定平台架构特性启用该函数的代码生成。它使用 [MetaListNameValueStr] 语法，带有单个 `enable` 键，其值是一个由逗号分隔的、要启用的特性名称字符串。

```rust
# #[cfg(target_feature = "avx2")]
#[target_feature(enable = "avx2")]
fn foo_avx2() {}
```

r[attributes.codegen.target_feature.arch]
每个[目标架构](../conditional-compilation.md#target_arch)都有一组可以启用的特性。为 crate 并未针对其编译的目标架构指定特性是错误。

r[attributes.codegen.target_feature.closures]
在带有 `target_feature`-注解的函数内定义的闭包，会从外围函数继承该属性。

r[attributes.codegen.target_feature.target-ub]
调用一个使用当前代码运行平台不支持的特性编译的函数是[未定义行为](../behavior-considered-undefined.md)， *除非* 该平台明确将这种情况记录为安全。

r[attributes.codegen.target_feature.safety-restrictions]
除非下文平台规则另有规定，否则适用以下限制：

- 安全的 `#[target_feature]` 函数（以及继承该属性的闭包）只能在启用了被调用方所启用的全部 `target_feature` 的调用方中安全调用。此限制不适用于 `unsafe` 上下文。
- 安全的 `#[target_feature]` 函数（以及继承该属性的闭包）只能在启用了被强制转换对象所启用的全部 `target_feature` 的上下文中，被强制转换为*安全*函数指针。此限制不适用于 `unsafe` 函数指针。

隐式启用的特性也包含在此规则内。例如，`sse2` 函数可以调用标记为 `sse` 的函数。

```rust
# #[cfg(target_feature = "sse2")] {
#[target_feature(enable = "sse")]
fn foo_sse() {}

fn bar() {
    // 在这里调用 `foo_sse` 是 unsafe 的，因为我们必须先确保
    // SSE 可用，即使 `sse` 在目标平台上默认启用，
    // 或者作为编译器标志手动启用。
    unsafe {
        foo_sse();
    }
}

#[target_feature(enable = "sse")]
fn bar_sse() {
    // 在这里调用 `foo_sse` 是安全的。
    foo_sse();
    || foo_sse();
}

#[target_feature(enable = "sse2")]
fn bar_sse2() {
    // 在这里调用 `foo_sse` 是安全的，因为 `sse2` 蕴含 `sse`。
    foo_sse();
}
# }
```

r[attributes.codegen.target_feature.fn-traits]
带有 `#[target_feature]` 属性的函数 *永远不会* 实现 `Fn` trait 家族，但从外围函数继承特性的闭包会实现。

r[attributes.codegen.target_feature.allowed-positions]
`#[target_feature]` 属性不允许用于以下位置：

- [`main` 函数][crate.main]
- 一个 [`panic_handler` 函数][panic.panic_handler]
- 安全 trait 方法
- trait 中的安全默认函数

r[attributes.codegen.target_feature.inline]
标记有 `target_feature` 的函数不会被内联到不支持给定特性的上下文中。`#[inline(always)]` 属性不得与 `target_feature` 属性一起使用。

r[attributes.codegen.target_feature.availability]
### 可用特性

以下是可用特性名称列表。

r[attributes.codegen.target_feature.cfg-only]
此列表中标记为 "(cfg only)" 的目标特性名称只能与 [`target_feature`][cfg.target_feature] 条件编译选项一起使用，不能与 `target_feature` 属性一起使用。

r[attributes.codegen.target_feature.x86]
#### `x86` 或 `x86_64`

在此平台上，执行带有不受支持特性的代码是未定义行为。因此，在此平台上使用 `#[target_feature]` 函数遵循[上述限制][attributes.codegen.target_feature.safety-restrictions]。

| 特性 | 隐式启用 | 说明 |
------------|--------------------|-------------------
| `adx` |  | [ADX](https://en.wikipedia.org/wiki/Intel_ADX) --- 多精度带进位加法指令扩展 |
| `aes` | `sse2` | [AES](https://en.wikipedia.org/wiki/AES_instruction_set) --- 高级加密标准 |
| `avx` | `sse4.2` | [AVX](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions) --- 高级向量扩展 |
| `avx2` | `avx` | [AVX2](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX2) --- 高级向量扩展 2 |
| `avx512bf16` | `avx512bw` | [AVX512-BF16](https://en.wikipedia.org/wiki/AVX-512#BF16) --- 高级向量扩展 512 位 - Bfloat16 扩展 |
| `avx512bitalg` | `avx512bw` | [AVX512-BITALG](https://en.wikipedia.org/wiki/AVX-512#VPOPCNTDQ_and_BITALG) --- 高级向量扩展 512 位 - 位算法 |
| `avx512bw` | `avx512f` | [AVX512-BW](https://en.wikipedia.org/wiki/AVX-512#BW,_DQ_and_VBMI) --- 高级向量扩展 512 位 - 字节和字指令 |
| `avx512cd` | `avx512f` | [AVX512-CD](https://en.wikipedia.org/wiki/AVX-512#Conflict_detection) --- 高级向量扩展 512 位 - 冲突检测指令 |
| `avx512dq` | `avx512f` | [AVX512-DQ](https://en.wikipedia.org/wiki/AVX-512#BW,_DQ_and_VBMI) --- 高级向量扩展 512 位 - 双字和四字指令 |
| `avx512f` | `avx2`, `fma`, `f16c` | [AVX512-F](https://en.wikipedia.org/wiki/AVX-512) --- 高级向量扩展 512 位 - 基础 |
| `avx512fp16` | `avx512bw` | [AVX512-FP16](https://en.wikipedia.org/wiki/AVX-512#FP16) --- 高级向量扩展 512 位 - Float16 扩展 |
| `avx512ifma` | `avx512f` | [AVX512-IFMA](https://en.wikipedia.org/wiki/AVX-512#IFMA) --- 高级向量扩展 512 位 - 整数融合乘加 |
| `avx512vbmi` | `avx512bw` | [AVX512-VBMI](https://en.wikipedia.org/wiki/AVX-512#BW,_DQ_and_VBMI) --- 高级向量扩展 512 位 - 向量字节操作指令 |
| `avx512vbmi2` | `avx512bw` | [AVX512-VBMI2](https://en.wikipedia.org/wiki/AVX-512#VBMI2) --- 高级向量扩展 512 位 - 向量字节操作指令 2 |
| `avx512vl` | `avx512f` | [AVX512-VL](https://en.wikipedia.org/wiki/AVX-512) --- 高级向量扩展 512 位 - 向量长度扩展 |
| `avx512vnni` | `avx512f` | [AVX512-VNNI](https://en.wikipedia.org/wiki/AVX-512#VNNI) --- 高级向量扩展 512 位 - 向量神经网络指令 |
| `avx512vp2intersect` | `avx512f` | [AVX512-VP2INTERSECT](https://en.wikipedia.org/wiki/AVX-512#VP2INTERSECT) --- 高级向量扩展 512 位 - 向量对求交到一对掩码寄存器 |
| `avx512vpopcntdq` | `avx512f` | [AVX512-VPOPCNTDQ](https://en.wikipedia.org/wiki/AVX-512#VPOPCNTDQ_and_BITALG) --- 高级向量扩展 512 位 - 向量置位计数指令 |
| `avxifma` | `avx2` | [AVX-IFMA](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA) --- 高级向量扩展 - 整数融合乘加 |
| `avxneconvert` | `avx2` | [AVX-NE-CONVERT](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA) --- 高级向量扩展 - 无异常浮点转换指令 |
| `avxvnni` | `avx2` | [AVX-VNNI](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA) --- 高级向量扩展 - 向量神经网络指令 |
| `avxvnniint16` | `avx2` | [AVX-VNNI-INT16](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA) --- 高级向量扩展 - 使用 16 位整数的向量神经网络指令 |
| `avxvnniint8` | `avx2` | [AVX-VNNI-INT8](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA) --- 高级向量扩展 - 使用 8 位整数的向量神经网络指令 |
| `bmi1` |  | [BMI1](https://en.wikipedia.org/wiki/Bit_Manipulation_Instruction_Sets) --- 位操作指令集 |
| `bmi2` |  | [BMI2](https://en.wikipedia.org/wiki/Bit_Manipulation_Instruction_Sets#BMI2) --- 位操作指令集 2 |
| `cmpxchg16b` |  | [`cmpxchg16b`](https://www.felixcloutier.com/x86/cmpxchg8b:cmpxchg16b) --- 以原子方式比较并交换 16 字节（128 位）数据 |
| `f16c` | `avx` | [F16C](https://en.wikipedia.org/wiki/F16C) --- 16 位浮点转换指令 |
| `fma` | `avx` | [FMA3](https://en.wikipedia.org/wiki/FMA_instruction_set) --- 三操作数融合乘加 |
| `fxsr` |  | [`fxsave`](https://www.felixcloutier.com/x86/fxsave) and [`fxrstor`](https://www.felixcloutier.com/x86/fxrstor) --- 保存和恢复 x87 FPU、MMX 技术和 SSE 状态 |
| `gfni` | `sse2` | [GFNI](https://en.wikipedia.org/wiki/AVX-512#GFNI) --- 伽罗瓦域新指令 |
| `kl` | `sse2` | [KEYLOCKER](https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_Key_Locker_instructions) --- Intel Key Locker 指令 |
| `lzcnt` |  | [`lzcnt`](https://www.felixcloutier.com/x86/lzcnt) --- 前导零计数 |
| `movbe` |  | [`movbe`](https://www.felixcloutier.com/x86/movbe) --- 交换字节后移动数据 |
| `pclmulqdq` | `sse2` | [`pclmulqdq`](https://www.felixcloutier.com/x86/pclmulqdq) --- 打包四字无进位乘法 |
| `popcnt` |  | [`popcnt`](https://www.felixcloutier.com/x86/popcnt) --- 置位为 1 的位数 |
| `rdrand` |  | [`rdrand`](https://en.wikipedia.org/wiki/RdRand) --- 读取随机数 |
| `rdseed` |  | [`rdseed`](https://en.wikipedia.org/wiki/RdRand) --- 读取随机种子 |
| `sha` | `sse2` | [SHA](https://en.wikipedia.org/wiki/Intel_SHA_extensions) --- 安全散列算法 |
| `sha512` | `avx2` | [SHA512](https://en.wikipedia.org/wiki/Intel_SHA_extensions) --- 使用 512 位摘要的安全散列算法 |
| `sm3` | `avx` | [SM3](https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_SHA_and_SM3_instructions) --- 商密 3 散列算法 |
| `sm4` | `avx2` | [SM4](https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_SHA_and_SM3_instructions) --- 商密 4 密码算法 |
| `sse` |  | [SSE](https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions) --- 流式 <abbr title="Single Instruction Multiple Data">SIMD</abbr> 扩展 |
| `sse2` | `sse` | [SSE2](https://en.wikipedia.org/wiki/SSE2) --- 流式 SIMD 扩展 2 |
| `sse3` | `sse2` | [SSE3](https://en.wikipedia.org/wiki/SSE3) --- 流式 SIMD 扩展 3 |
| `sse4.1` | `ssse3` | [SSE4.1](https://en.wikipedia.org/wiki/SSE4#SSE4.1) --- 流式 SIMD 扩展 4.1 |
| `sse4.2` | `sse4.1` | [SSE4.2](https://en.wikipedia.org/wiki/SSE4#SSE4.2) --- 流式 SIMD 扩展 4.2 |
| `sse4a` | `sse3` | [SSE4a](https://en.wikipedia.org/wiki/SSE4#SSE4a) --- 流式 SIMD 扩展 4a |
| `ssse3` | `sse3` | [SSSE3](https://en.wikipedia.org/wiki/SSSE3) --- 补充流式 SIMD 扩展 3 |
| `tbm` |  | [TBM](https://en.wikipedia.org/wiki/X86_Bit_manipulation_instruction_set#TBM_(Trailing_Bit_Manipulation)) --- 尾随位操作 |
| `vaes` | `avx2`, `aes` | [VAES](https://en.wikipedia.org/wiki/AVX-512#VAES) --- 向量 AES 指令 |
| `vpclmulqdq` | `avx`, `pclmulqdq` | [VPCLMULQDQ](https://en.wikipedia.org/wiki/AVX-512#VPCLMULQDQ) --- 向量四字无进位乘法 |
| `widekl` | `kl` | [KEYLOCKER_WIDE](https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_Key_Locker_instructions) --- Intel Wide Keylocker 指令 |
| `xsave` |  | [`xsave`](https://www.felixcloutier.com/x86/xsave) --- 保存处理器扩展状态 |
| `xsavec` |  | [`xsavec`](https://www.felixcloutier.com/x86/xsavec) --- 以压缩形式保存处理器扩展状态 |
| `xsaveopt` |  | [`xsaveopt`](https://www.felixcloutier.com/x86/xsaveopt) --- 优化地保存处理器扩展状态 |
| `xsaves` |  | [`xsaves`](https://www.felixcloutier.com/x86/xsaves) --- 保存处理器 supervisor 扩展状态 |

<!-- Keep links near each table to make it easier to move and update. -->

[ADX]: https://en.wikipedia.org/wiki/Intel_ADX
[AES]: https://en.wikipedia.org/wiki/AES_instruction_set
[AVX]: https://en.wikipedia.org/wiki/Advanced_Vector_Extensions
[AVX2]: https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX2
[AVX512-BF16]: https://en.wikipedia.org/wiki/AVX-512#BF16
[AVX512-BITALG]: https://en.wikipedia.org/wiki/AVX-512#VPOPCNTDQ_and_BITALG
[AVX512-BW]: https://en.wikipedia.org/wiki/AVX-512#BW,_DQ_and_VBMI
[AVX512-CD]: https://en.wikipedia.org/wiki/AVX-512#Conflict_detection
[AVX512-DQ]: https://en.wikipedia.org/wiki/AVX-512#BW,_DQ_and_VBMI
[AVX512-F]: https://en.wikipedia.org/wiki/AVX-512
[AVX512-FP16]: https://en.wikipedia.org/wiki/AVX-512#FP16
[AVX512-IFMA]: https://en.wikipedia.org/wiki/AVX-512#IFMA
[AVX512-VBMI]: https://en.wikipedia.org/wiki/AVX-512#BW,_DQ_and_VBMI
[AVX512-VBMI2]: https://en.wikipedia.org/wiki/AVX-512#VBMI2
[AVX512-VL]: https://en.wikipedia.org/wiki/AVX-512
[AVX512-VNNI]: https://en.wikipedia.org/wiki/AVX-512#VNNI
[AVX512-VP2INTERSECT]: https://en.wikipedia.org/wiki/AVX-512#VP2INTERSECT
[AVX512-VPOPCNTDQ]:https://en.wikipedia.org/wiki/AVX-512#VPOPCNTDQ_and_BITALG
[AVX-IFMA]: https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA
[AVX-NE-CONVERT]: https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA
[AVX-VNNI]: https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA
[AVX-VNNI-INT16]: https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA
[AVX-VNNI-INT8]: https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#AVX-VNNI,_AVX-IFMA
[BMI1]: https://en.wikipedia.org/wiki/Bit_Manipulation_Instruction_Sets
[BMI2]: https://en.wikipedia.org/wiki/Bit_Manipulation_Instruction_Sets#BMI2
[`cmpxchg16b`]: https://www.felixcloutier.com/x86/cmpxchg8b:cmpxchg16b
[F16C]: https://en.wikipedia.org/wiki/F16C
[FMA3]: https://en.wikipedia.org/wiki/FMA_instruction_set
[`fxsave`]: https://www.felixcloutier.com/x86/fxsave
[`fxrstor`]: https://www.felixcloutier.com/x86/fxrstor
[GFNI]: https://en.wikipedia.org/wiki/AVX-512#GFNI
[KEYLOCKER]: https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_Key_Locker_instructions
[KEYLOCKER_WIDE]: https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_Key_Locker_instructions
[`lzcnt`]: https://www.felixcloutier.com/x86/lzcnt
[`movbe`]: https://www.felixcloutier.com/x86/movbe
[`pclmulqdq`]: https://www.felixcloutier.com/x86/pclmulqdq
[`popcnt`]: https://www.felixcloutier.com/x86/popcnt
[`rdrand`]: https://en.wikipedia.org/wiki/RdRand
[`rdseed`]: https://en.wikipedia.org/wiki/RdRand
[SHA]: https://en.wikipedia.org/wiki/Intel_SHA_extensions
[SHA512]: https://en.wikipedia.org/wiki/Intel_SHA_extensions
[SM3]: https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_SHA_and_SM3_instructions
[SM4]: https://en.wikipedia.org/wiki/List_of_x86_cryptographic_instructions#Intel_SHA_and_SM3_instructions
[SSE]: https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions
[SSE2]: https://en.wikipedia.org/wiki/SSE2
[SSE3]: https://en.wikipedia.org/wiki/SSE3
[SSE4.1]: https://en.wikipedia.org/wiki/SSE4#SSE4.1
[SSE4.2]: https://en.wikipedia.org/wiki/SSE4#SSE4.2
[SSE4a]: https://en.wikipedia.org/wiki/SSE4#SSE4a
[SSSE3]: https://en.wikipedia.org/wiki/SSSE3
[TBM]: https://en.wikipedia.org/wiki/X86_Bit_manipulation_instruction_set#TBM_(Trailing_Bit_Manipulation)
[VAES]: https://en.wikipedia.org/wiki/AVX-512#VAES
[VPCLMULQDQ]: https://en.wikipedia.org/wiki/AVX-512#VPCLMULQDQ
[`xsave`]: https://www.felixcloutier.com/x86/xsave
[`xsavec`]: https://www.felixcloutier.com/x86/xsavec
[`xsaveopt`]: https://www.felixcloutier.com/x86/xsaveopt
[`xsaves`]: https://www.felixcloutier.com/x86/xsaves

r[attributes.codegen.target_feature.aarch64]
#### `aarch64`

在此平台上，使用 `#[target_feature]` 函数遵循[上述限制][attributes.codegen.target_feature.safety-restrictions]。

关于这些特性的更多文档可在 [ARM 架构参考手册](https://developer.arm.com/documentation/ddi0487/latest) 中找到，或在 [developer.arm.com](https://developer.arm.com) 上的其他位置找到。

[ARM Architecture Reference Manual]: https://developer.arm.com/documentation/ddi0487/latest
[developer.arm.com]: https://developer.arm.com

> [!NOTE]
> 如果使用以下成对特性，应将它们同时标记为启用或禁用：
> - `paca` 和 `pacg`，LLVM 目前将它们作为一个特性实现。

| 特性 | 隐式启用 | 特性名称 |
-------        | ------------------ | ------------
| `aes` | `neon` | FEAT_AES & FEAT_PMULL --- 高级 <abbr title="Single Instruction Multiple Data">SIMD</abbr> AES 和 PMULL 指令 |
| `bf16` |  | FEAT_BF16 --- BFloat16 指令 |
| `bti` |  | FEAT_BTI --- 分支目标标识 |
| `crc` |  | FEAT_CRC --- CRC32 校验和指令 |
| `dit` |  | FEAT_DIT  --- 数据无关时序指令 |
| `dotprod` | `neon` | FEAT_DotProd --- 高级 SIMD Int8 点积指令 |
| `dpb` |  | FEAT_DPB --- 将数据缓存清理到持久点 |
| `dpb2` | `dpb` | FEAT_DPB2 --- 将数据缓存清理到深度持久点 |
| `f32mm` | `sve` | FEAT_F32MM --- SVE 单精度浮点矩阵乘法指令 |
| `f64mm` | `sve` | FEAT_F64MM --- SVE 双精度浮点矩阵乘法指令 |
| `fcma` | `neon` | FEAT_FCMA --- 浮点复数支持 |
| `fhm` | `fp16` | FEAT_FHM --- 半精度浮点 FMLAL 指令 |
| `flagm` |  | FEAT_FLAGM --- 条件标志操作 |
| `fp16` | `neon` | FEAT_FP16 --- 半精度浮点数据处理 |
| `frintts` |  | FEAT_FRINTTS --- 浮点到整数辅助指令 |
| `i8mm` |  | FEAT_I8MM --- Int8 矩阵乘法 |
| `jsconv` | `neon` | FEAT_JSCVT --- JavaScript 转换指令 |
| `lor` |  | FEAT_LOR --- 有限排序区域扩展 |
| `lse` |  | FEAT_LSE --- 大系统扩展 |
| `mte` |  | FEAT_MTE & FEAT_MTE2 --- 内存标记扩展 |
| `neon` |  | FEAT_AdvSimd & FEAT_FP --- 浮点和高级 SIMD 扩展 |
| `paca` |  | FEAT_PAUTH --- 指针认证（地址认证） |
| `pacg` |  | FEAT_PAUTH --- 指针认证（通用认证） |
| `pan` |  | FEAT_PAN --- 特权访问禁止扩展 |
| `pmuv3` |  | FEAT_PMUv3 --- 性能监视器扩展（v3） |
| `rand` |  | FEAT_RNG --- 随机数生成器 |
| `ras` |  | FEAT_RAS & FEAT_RASv1p1 --- 可靠性、可用性和可服务性扩展 |
| `rcpc` |  | FEAT_LRCPC --- 释放一致的处理器一致性 |
| `rcpc2` | `rcpc` | FEAT_LRCPC2 --- 带立即数偏移的 RcPc |
| `rdm` | `neon` | FEAT_RDM --- 舍入双倍乘法累加 |
| `sb` |  | FEAT_SB --- 推测屏障 |
| `sha2` | `neon` | FEAT_SHA1 & FEAT_SHA256 --- 高级 SIMD SHA 指令 |
| `sha3` | `sha2` | FEAT_SHA512 & FEAT_SHA3 --- 高级 SIMD SHA 指令 |
| `sm4` | `neon` | FEAT_SM3 & FEAT_SM4 --- 高级 SIMD SM3/4 指令 |
| `spe` |  | FEAT_SPE --- 统计剖析扩展 |
| `ssbs` |  | FEAT_SSBS & FEAT_SSBS2 --- 推测性存储绕过安全 |
| `sve` | `neon` | FEAT_SVE --- 可伸缩向量扩展 |
| `sve2` | `sve` | FEAT_SVE2 --- 可伸缩向量扩展 2 |
| `sve2-aes` | `sve2`, `aes` | FEAT_SVE_AES & FEAT_SVE_PMULL128 --- SVE AES 指令 |
| `sve2-bitperm` | `sve2` | FEAT_SVE2_BitPerm --- SVE 位排列 |
| `sve2-sha3` | `sve2`, `sha3` | FEAT_SVE2_SHA3 --- SVE SHA3 指令 |
| `sve2-sm4` | `sve2`, `sm4` | FEAT_SVE2_SM4 --- SVE SM4 指令 |
| `tme` |  | FEAT_TME --- 事务内存扩展 |
| `vh` |  | FEAT_VHE --- 虚拟化主机扩展 |

r[attributes.codegen.target_feature.loongarch]
#### `loongarch`

在此平台上，使用 `#[target_feature]` 函数遵循[上述限制][attributes.codegen.target_feature.safety-restrictions]。

| 特性 | 隐式启用 | 说明 |
------------|---------------------|-------------------
| `f` |  | [F](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-fp_sp) --- 单精度浮点指令 |
| `d` | `f` | [D](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-fp_dp) --- 双精度浮点指令 |
| `frecipe` |  | [FRECIPE](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-frecipe) --- 倒数近似指令 |
| `lasx` | `lsx` | [LASX](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lasx) --- 256 位向量指令 |
| `lbt` |  | [LBT](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lbt_x86) --- 二进制翻译指令 |
| `lsx` | `d` | [LSX](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lsx) --- 128 位向量指令 |
| `lvz` |  | [LVZ](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lvz) --- 虚拟化指令 |
| `div32` |  | [DIV32](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-div32) --- 接受非符号扩展 32 位操作数的除法指令 |
| `lam-bh` |  | [LAM-BH](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lam_bh) --- 面向字节和半字的原子交换与加法指令 |
| `lamcas` |  | [LAMCAS](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lamcas) --- 面向字节、半字、字和双字的原子比较并交换指令 |
| `ld-seq-sa` |  | [LD-SEQ-SA](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-ld_seq_sa) --- 对同一地址的加载操作进行顺序排序 |
| `scq` |  | [SCQ](https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-scq) --- 条件存储四字指令 |

<!-- Keep links near each table to make it easier to move and update. -->

[la-f]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-fp_sp
[la-d]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-fp_dp
[la-frecipe]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-frecipe
[la-lasx]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lasx
[la-lbt]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lbt_x86
[la-lsx]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lsx
[la-lvz]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lvz
[la-div32]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-div32
[la-lam-bh]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lam_bh
[la-lamcas]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-lamcas
[la-ld-seq-sa]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-ld_seq_sa
[la-scq]: https://loongson.github.io/LoongArch-Documentation/LoongArch-Vol1-EN.html#cpucfg-scq

r[attributes.codegen.target_feature.riscv]
#### `riscv32` 或 `riscv64`

在此平台上，使用 `#[target_feature]` 函数遵循[上述限制][attributes.codegen.target_feature.safety-restrictions]。

关于这些特性的更多文档可在其各自的规范中找到。许多规范在 [RISC-V ISA 手册](https://github.com/riscv/riscv-isa-manual)、[版本 20250508](https://github.com/riscv/riscv-isa-manual/tree/20250508) 中说明，或在 [RISC-V GitHub 账户](https://github.com/riscv) 托管的其他手册中说明。

[RISC-V ISA Manual]: https://github.com/riscv/riscv-isa-manual
[version 20250508]: https://github.com/riscv/riscv-isa-manual/tree/20250508
[RISC-V GitHub Account]: https://github.com/riscv

| 特性 | 隐式启用 | 说明 |
------------|---------------------|-------------------
| `a` | `zaamo`, `zalrsc` | [A](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/a-st-ext.adoc) --- 原子指令 |
| `b` | `zba`, `zbc`, `zbs` | [B](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 位操作指令 |
| `c` | `zca` | [C](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/c-st-ext.adoc) --- 压缩指令 |
| `d` | `f` | [D](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/d-st-ext.adoc) --- [仅 cfg](attributes.codegen.target_feature.cfg-only) 双精度浮点 |
| `e` |  | [E](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/rv32e.adoc) --- [仅 cfg](attributes.codegen.target_feature.cfg-only) 具有 16 个 GPR 的嵌入式指令集 |
| `f` | `zicsr` | [F](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/f-st-ext.adoc) --- [仅 cfg](attributes.codegen.target_feature.cfg-only) 单精度浮点 |
| `m` |  | [M](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/m-st-ext.adoc) --- 整数乘法和除法指令 |
| `za64rs` | `za128rs` | [Za64rs](https://github.com/riscv/riscv-profiles/blob/rva23-rvb23-ratified/src/rva23-profile.adoc) --- 平台行为：自然对齐的保留集，大小 ≦ 64 字节 |
| `za128rs` |  | [Za128rs](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：自然对齐的保留集，大小 ≦ 128 字节 |
| `zaamo` |  | [Zaamo](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/a-st-ext.adoc) --- 原子内存操作指令 |
| `zabha` | `zaamo` | [Zabha](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zabha.adoc) --- 字节和半字原子内存操作指令 |
| `zacas` | `zaamo` | [Zacas](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zacas.adoc) --- 原子比较并交换（CAS）指令 |
| `zalrsc` |  | [Zalrsc](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/a-st-ext.adoc) --- 加载保留/条件存储指令 |
| `zama16b` |  | [Zama16b](https://github.com/riscv/riscv-profiles/blob/rva23-rvb23-ratified/src/rva23-profile.adoc) --- 平台行为：对未跨越自然对齐 16 字节边界的主内存区域执行的未对齐加载、存储和 AMO 是原子的 |
| `zawrs` |  | [Zawrs](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zawrs.adoc) --- 等待保留集指令 |
| `zba` |  | [Zba](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 地址生成指令 |
| `zbb` |  | [Zbb](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 基本位操作 |
| `zbc` | `zbkc` | [Zbc](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 无进位乘法 |
| `zbkb` |  | [Zbkb](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 密码学位操作指令 |
| `zbkc` |  | [Zbkc](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 用于密码学的无进位乘法 |
| `zbkx` |  | [Zbkx](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 交叉开关置换 |
| `zbs` |  | [Zbs](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc) --- 单比特指令 |
| `zca` |  | [Zca](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zc.adoc) --- 压缩指令：整数部分子集 |
| `zcb` | `zca` | [Zcb](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zc.adoc) --- 简单节省代码大小的压缩指令 |
| `zcmop` | `zca` | [Zcmop](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zimop.adoc) --- 压缩 May-Be-Operations |
| `zic64b` |  | [Zic64b](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：自然对齐的 64 字节缓存块 |
| `zicbom` |  | [Zicbom](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/cmo.adoc) --- 缓存块管理指令 |
| `zicbop` |  | [Zicbop](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/cmo.adoc) --- 缓存块预取提示指令 |
| `zicboz` |  | [Zicboz](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/cmo.adoc) --- 缓存块清零指令 |
| `ziccamoa` |  | [Ziccamoa](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：可缓存且一致的主内存支持所有基本原子操作 |
| `ziccif` |  | [Ziccif](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：可缓存且一致的主内存支持取指，且最大为 `min(ILEN,XLEN)` 的自然对齐 2 的幂大小获取是原子的 |
| `zicclsm` |  | [Zicclsm](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：可缓存且一致的主内存支持未对齐加载/存储访问 |
| `ziccrse` |  | [Ziccrse](https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc) --- 平台行为：可缓存且一致的主内存保证 LR/SC 序列最终成功 |
| `zicntr` | `zicsr` | [Zicntr](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/counters.adoc) --- 基础计数器和定时器 |
| `zicond` |  | [Zicond](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zicond.adoc) --- 整数条件操作指令 |
| `zicsr` |  | [Zicsr](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zicsr.adoc) --- 控制与状态寄存器（CSR）指令 |
| `zifencei` |  | [Zifencei](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zifencei.adoc) --- 取指栅栏指令 |
| `zihintntl` |  | [Zihintntl](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zihintntl.adoc) --- 非时序局部性提示指令 |
| `zihintpause` |  | [Zihintpause](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zihintpause.adoc) --- 暂停提示指令 |
| `zihpm` | `zicsr` | [Zihpm](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/counters.adoc) --- 硬件性能计数器 |
`zimop`     |                     | [Zimop][rv-zimop] --- May-Be-Operations
| `zk` | `zkn`, `zkr`, `zks`, `zkt`, `zbkb`, `zbkc`, `zkbx` | [Zk](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 标量密码学 |
| `zkn` | `zknd`, `zkne`, `zknh`, `zbkb`, `zbkc`, `zkbx` | [Zkn](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- NIST 算法套件扩展 |
| `zknd` |  | [Zknd](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- NIST 套件：AES 解密 |
| `zkne` |  | [Zkne](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- NIST 套件：AES 加密 |
| `zknh` |  | [Zknh](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- NIST 套件：哈希函数指令 |
| `zkr` |  | [Zkr](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 熵源扩展 |
| `zks` | `zksed`, `zksh`, `zbkb`, `zbkc`, `zkbx` | [Zks](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 商密算法套件 |
| `zksed` |  | [Zksed](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 商密套件：SM4 分组密码指令 |
| `zksh` |  | [Zksh](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 商密套件：SM3 哈希函数指令 |
| `zkt` |  | [Zkt](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc) --- 数据无关执行延迟子集 |
| `ztso` |  | [Ztso](https://github.com/riscv/riscv-isa-manual/blob/20250508/src/ztso-st-ext.adoc) --- 总存储排序 |

<!-- Keep links near each table to make it easier to move and update. -->

[rv-a]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/a-st-ext.adoc
[rv-b]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc
[rv-c]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/c-st-ext.adoc
[rv-d]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/d-st-ext.adoc
[rv-e]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/rv32e.adoc
[rv-f]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/f-st-ext.adoc
[rv-m]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/m-st-ext.adoc
[rv-za64rs]: https://github.com/riscv/riscv-profiles/blob/rva23-rvb23-ratified/src/rva23-profile.adoc
[rv-za128rs]: https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc
[rv-zaamo]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/a-st-ext.adoc
[rv-zabha]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zabha.adoc
[rv-zacas]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zacas.adoc
[rv-zalrsc]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/a-st-ext.adoc
[rv-zama16b]: https://github.com/riscv/riscv-profiles/blob/rva23-rvb23-ratified/src/rva23-profile.adoc
[rv-zawrs]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zawrs.adoc
[rv-zba]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc
[rv-zbb]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc
[rv-zbc]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc
[rv-zbkb]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc
[rv-zbkc]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc
[rv-zbkx]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc
[rv-zbs]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/b-st-ext.adoc
[rv-zca]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zc.adoc
[rv-zcb]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zc.adoc
[rv-zcmop]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zimop.adoc
[rv-zic64b]: https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc
[rv-zicbom]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/cmo.adoc
[rv-zicbop]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/cmo.adoc
[rv-zicboz]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/cmo.adoc
[rv-ziccamoa]: https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc
[rv-ziccif]: https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc
[rv-zicclsm]: https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc
[rv-ziccrse]: https://github.com/riscv/riscv-profiles/blob/v1.0/profiles.adoc
[rv-zicntr]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/counters.adoc
[rv-zicond]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zicond.adoc
[rv-zicsr]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zicsr.adoc
[rv-zifencei]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zifencei.adoc
[rv-zihintntl]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zihintntl.adoc
[rv-zihintpause]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zihintpause.adoc
[rv-zihpm]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/counters.adoc
[rv-zimop]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/zimop.adoc
[rv-zk]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc
[rv-zkn]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc
[rv-zkne]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc
[rv-zknd]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc
[rv-zknh]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc
[rv-zkr]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc
[rv-zks]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc
[rv-zksed]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc
[rv-zksh]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc
[rv-zkt]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/scalar-crypto.adoc
[rv-ztso]: https://github.com/riscv/riscv-isa-manual/blob/20250508/src/ztso-st-ext.adoc

r[attributes.codegen.target_feature.wasm]
#### `wasm32` 或 `wasm64`

在 Wasm 平台上，安全的 `#[target_feature]` 函数始终可以在安全上下文中使用。无法通过 `#[target_feature]` 属性导致未定义行为，因为尝试使用 Wasm 引擎不支持的指令会在加载时失败，不会有被解释为与编译器预期不同方式的风险。

| 特性 | 隐式启用 | 说明 |
----------------------|---------------------|-------------------
| `bulk-memory` |  | [WebAssembly 批量内存操作提案](https://github.com/WebAssembly/bulk-memory-operations) |
| `extended-const` |  | [WebAssembly 扩展 const 表达式提案](https://github.com/WebAssembly/extended-const) |
| `mutable-globals` |  | [WebAssembly 可变全局提案](https://github.com/WebAssembly/mutable-global) |
| `nontrapping-fptoint` |  | [WebAssembly 非陷入式浮点到整数转换提案](https://github.com/WebAssembly/nontrapping-float-to-int-conversions) |
| `relaxed-simd` | `simd128` | [WebAssembly 宽松 simd 提案](https://github.com/WebAssembly/relaxed-simd) |
| `sign-ext` |  | [WebAssembly 符号扩展运算符提案](https://github.com/WebAssembly/sign-extension-ops) |
| `simd128` |  | [WebAssembly simd 提案](https://github.com/webassembly/simd) |
| `multivalue` |  | [WebAssembly 多值提案](https://github.com/webassembly/multi-value) |
| `reference-types` |  | [WebAssembly 引用类型提案](https://github.com/webassembly/reference-types) |
| `tail-call` |  | [WebAssembly 尾调用提案](https://github.com/webassembly/tail-call) |

[bulk-memory]: https://github.com/WebAssembly/bulk-memory-operations
[extended-const]: https://github.com/WebAssembly/extended-const
[mutable-globals]: https://github.com/WebAssembly/mutable-global
[nontrapping-fptoint]: https://github.com/WebAssembly/nontrapping-float-to-int-conversions
[relaxed-simd]: https://github.com/WebAssembly/relaxed-simd
[sign-ext]: https://github.com/WebAssembly/sign-extension-ops
[simd128]: https://github.com/webassembly/simd
[reference-types]: https://github.com/webassembly/reference-types
[tail-call]: https://github.com/webassembly/tail-call
[multivalue]: https://github.com/webassembly/multi-value

r[attributes.codegen.target_feature.s390x]
#### `s390x`

在 `s390x` 目标上，使用带有 `#[target_feature]` 属性的函数时，需遵循[上述限制][attributes.codegen.target_feature.safety-restrictions]。

关于这些特性的更多文档，可参见 _[z/Architecture Principles of Operation](https://publibfp.dhe.ibm.com/epubs/pdf/a227832d.pdf)_ 第一章中的 “Additions to z/Architecture” 一节。

| 特性 | 隐式启用 | 说明 |
---------------------------------------|---------------------------------------|---------------------
| `vector` |  | 128 位向量指令 |
| `vector-enhancements-1` | `vector` | 向量增强 1 |
| `vector-enhancements-2` | `vector-enhancements-1` | 向量增强 2 |
| `vector-enhancements-3` | `vector-enhancements-2` | 向量增强 3 |
| `vector-packed-decimal` | `vector` | 向量压缩十进制 |
| `vector-packed-decimal-enhancement` | `vector-packed-decimal` | 向量压缩十进制增强 |
| `vector-packed-decimal-enhancement-2` | `vector-packed-decimal-enhancement-2` | 向量压缩十进制增强 2 |
| `vector-packed-decimal-enhancement-3` | `vector-packed-decimal-enhancement-3` | 向量压缩十进制增强 3 |
| `nnp-assist` | `vector` | nnp 辅助 |
| `miscellaneous-extensions-2` |  | 杂项扩展 2 |
| `miscellaneous-extensions-3` |  | 杂项扩展 3 |
| `miscellaneous-extensions-4` |  | 杂项扩展 4 |

[z/Architecture Principles of Operation]: https://publibfp.dhe.ibm.com/epubs/pdf/a227832d.pdf

r[attributes.codegen.target_feature.info]
### 附加信息

r[attributes.codegen.target_feature.remark-cfg]
有关基于编译时设置选择性启用或禁用代码编译，请参见[`target_feature` 条件编译选项](../conditional-compilation.md#target_feature)。请注意，该选项不受 `target_feature` 属性影响，而仅由为整个 crate 启用的特性驱动。

r[attributes.codegen.target_feature.remark-rt]
是否启用了某项特性，可以在运行时使用标准库中平台特定的宏进行检查，例如 [`is_x86_feature_detected`](../../std/arch/macro.is_x86_feature_detected.html) 或 [`is_aarch64_feature_detected`](../../std/arch/macro.is_aarch64_feature_detected.html)。

> [!NOTE]
> `rustc` 会为每个目标和 CPU 默认启用一组特性。可以使用 [`-C target-cpu`](../../rustc/codegen-options/index.html#target-cpu) 标志选择 CPU。还可以使用 [`-C target-feature`](../../rustc/codegen-options/index.html#target-feature) 标志为整个 crate 启用或禁用单独的特性。

r[attributes.codegen.track_caller]
## `track_caller` 属性

r[attributes.codegen.track_caller.allowed-positions]
`track_caller` 属性可以应用于任何具有 [`"Rust"` ABI](../items/external-blocks.md#abi) 的函数，但入口点 `fn main` 除外。

r[attributes.codegen.track_caller.traits]
当该属性应用于 trait 声明中的函数和方法时，它会适用于所有实现。如果该 trait 提供了带有该属性的默认实现，那么该属性也适用于覆盖实现。

r[attributes.codegen.track_caller.extern]
当该属性应用于 `extern` 块中的函数时，任何链接到的实现也必须应用该属性，否则会导致未定义行为。当该属性应用于某个向 `extern` 块提供的函数时，`extern` 块中的声明也必须带有该属性，否则会导致未定义行为。

r[attributes.codegen.track_caller.behavior]
### 行为

将该属性应用于函数 `f` 后，`f` 内部的代码便可以获得导致调用 `f` 的“最顶层”已追踪调用的 [`Location`](core::panic::Location) 提示。在观察点上，某个实现的行为如同它从 `f` 的栈帧向上遍历调用栈，找到最近的未带属性函数 `outer` 的栈帧，并返回 `outer` 中该已追踪调用的 [`Location`](core::panic::Location)。

```rust
#[track_caller]
fn f() {
    println!("{}", std::panic::Location::caller());
}
```

> [!NOTE]
> `core` 提供了 [`core::panic::Location::caller`] 用于观测调用者位置。它封装了由 `rustc` 实现的 [`core::intrinsics::caller_location`] 内在函数。

> [!NOTE]
> 由于得到的 `Location` 只是一个提示，实现可以提前停止向上遍历调用栈。重要注意事项请参见[限制](#limitations)。

#### 示例

`calls_f` 直接调用 `f` 时，`f` 中的代码会观测到它在 `calls_f` 中的调用位置：

```rust
# #[track_caller]
# fn f() {
#     println!("{}", std::panic::Location::caller());
# }
fn calls_f() {
    f(); // <-- f() 打印此位置
}
```

当 `f` 由另一个带属性的函数 `g` 调用，而 `g` 又由 `calls_g` 调用时，`f` 和 `g` 中的代码都会观测到 `g` 在 `calls_g` 中的调用位置：

```rust
# #[track_caller]
# fn f() {
#     println!("{}", std::panic::Location::caller());
# }
#[track_caller]
fn g() {
    println!("{}", std::panic::Location::caller());
    f();
}

fn calls_g() {
    g(); // <-- g() 打印此位置两次：一次来自自身，一次来自 f()
}
```

当 `g` 由另一个带属性的函数 `h` 调用，而 `h` 又由 `calls_h` 调用时，`f`、`g` 和 `h` 中的所有代码都会观测到 `h` 在 `calls_h` 中的调用位置：

```rust
# #[track_caller]
# fn f() {
#     println!("{}", std::panic::Location::caller());
# }
# #[track_caller]
# fn g() {
#     println!("{}", std::panic::Location::caller());
#     f();
# }
#[track_caller]
fn h() {
    println!("{}", std::panic::Location::caller());
    g();
}

fn calls_h() {
    h(); // <-- 打印此位置三次：一次来自自身，一次来自 g()，一次来自 f()
}
```

以此类推。

r[attributes.codegen.track_caller.limits]
### 限制

r[attributes.codegen.track_caller.hint]
该信息只是提示，实现不必保留它。

r[attributes.codegen.track_caller.decay]
尤其是，将带有 `#[track_caller]` 的函数强制转换为函数指针时，会创建一个 shim；对观察者来说，它似乎是在该带属性函数的定义位置被调用的，从而在虚调用间丢失实际的调用者信息。这种强制转换的一个常见例子，是创建其方法带有该属性的 trait 对象。

> [!NOTE]
> 上述用于函数指针的 shim 是必要的，因为 `rustc` 在代码生成上下文中通过向函数 ABI 追加一个隐式参数来实现 `track_caller`，但这对于间接调用来说是不健全的，因为该参数不是函数类型的一部分，而给定的函数指针类型既可能引用带有该属性的函数，也可能不引用。创建 shim 会向函数指针的调用者隐藏这个隐式参数，从而保持健全性。

<!-- template:attributes -->
r[attributes.codegen.instruction_set]
## `instruction_set` 属性

r[attributes.codegen.instruction_set.intro]
*`instruction_set` [属性](../attributes.md)* 指定函数在代码生成期间将使用的指令集。这允许在单个程序中混用多种指令集。

> [!EXAMPLE]
> <!-- ignore: arm-only -->
> ```rust,ignore
> #[instruction_set(arm::a32)]
> fn arm_code() {}
>
> #[instruction_set(arm::t32)]
> fn thumb_code() {}
> ```

r[attributes.codegen.instruction_set.syntax]
`instruction_set` 属性使用 [MetaListPaths] 语法来指定单一路径，该路径由架构族名称和指令集名称组成。

r[attributes.codegen.instruction_set.allowed-positions]
`instruction_set` 属性只能应用于具有[函数体](items.fn.body)的函数 --- [闭包](expr.closure)、[async 块](expr.block.async)、[自由函数](items.fn)、[固有 impl](items.impl.inherent) 或 [trait impl](items.impl.trait) 中的[关联函数](items.associated.fn)，以及 [trait 定义](items.traits)中那些具有[默认定义](items.traits.associated-item-decls)的关联函数。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

> [!NOTE]
> 尽管该属性可以应用于[闭包](expr.closure)和[async 块](expr.block.async)，但其用途有限，因为我们尚不支持在表达式上使用属性。

r[attributes.codegen.instruction_set.duplicates]
`instruction_set` 属性在一个函数上只能使用一次。

r[attributes.codegen.instruction_set.target-limits]
`instruction_set` 属性只能用于支持给定值的目标。

r[attributes.codegen.instruction_set.inline-asm]
当使用 `instruction_set` 属性时，函数中的任何内联汇编都必须使用指定的指令集，而不是目标默认指令集。

r[attributes.codegen.instruction_set.arm]
### ARM 上的 `instruction_set`

以 `ARMv4T` 和 `ARMv5te` 架构为目标时，`instruction_set` 支持的值为：

- `arm::a32` --- 将函数生成为 A32 “ARM” 代码。
- `arm::t32` --- 将函数生成为 T32 “Thumb” 代码。

如果取出该函数的地址作为函数指针，则地址的最低位将取决于所选的指令集：

- 对于 `arm::a32`（“ARM”），它将为 0。
- 对于 `arm::t32`（“Thumb”），它将为 1。

[(cfg only)]: attributes.codegen.target_feature.cfg-only
[`-C target-cpu`]: ../../rustc/codegen-options/index.html#target-cpu
[`-C target-feature`]: ../../rustc/codegen-options/index.html#target-feature
[`export_name`]: abi.export_name
[`inline` attribute]: attributes.codegen.inline
[`is_aarch64_feature_detected`]: ../../std/arch/macro.is_aarch64_feature_detected.html
[`is_x86_feature_detected`]: ../../std/arch/macro.is_x86_feature_detected.html
[`Location`]: core::panic::Location
[`naked_asm!`]: asm
[`no_mangle`]: abi.no_mangle
[`target_feature` attribute]: attributes.codegen.target_feature
[`target_feature` conditional compilation option]: ../conditional-compilation.md#target_feature
[`track_caller` attribute]: attributes.codegen.track_caller
[`unused_variables` lint]: ../../rustc/lints/listing/warn-by-default.html#unused-variables
[associated functions]: items.associated.fn
[async blocks]: expr.block.async
[async closure]: expr.closure.async
[async function]: items.fn.async
[attribute]: ../attributes.md
[attributes]: ../attributes.md
[bodies]: items.fn.body
[closures]: expr.closure
[default definition]: items.traits.associated-item-decls
[free functions]: items.fn
[function body]: items.fn.body
[functions]: ../items/functions.md
[inherent impl]: items.impl.inherent
["Rust" ABI]: items.extern.abi.rust
[rust-abi]: ../items/external-blocks.md#abi
[target architecture]: ../conditional-compilation.md#target_arch
[testing attributes]: attributes.testing
[trait]: items.traits
[trait definition]: items.traits
[trait impl]: items.impl.trait
[undefined behavior]: ../behavior-considered-undefined.md
[unsafe attribute]: ../attributes.md#r-attributes.safety
