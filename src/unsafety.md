r[safety]
# 不安全性

r[safety.intro]
不安全操作是那些可能违反 Rust 静态语义所提供的内存安全保证的操作。

r[safety.unsafe-ops]
以下语言级特性不能在 Rust 的安全子集中使用：

r[safety.unsafe-deref]
- 解引用[裸指针](types/pointer.md)。

r[safety.unsafe-static]
- 读取或写入[可变](items/static-items.md#mutable-statics)静态变量，或 unsafe [外部](items/external-blocks.md)静态变量。

r[safety.unsafe-union-access]
- 访问 [`union`](items/unions.md) 的字段，但为其赋值除外。

r[safety.unsafe-call]
- 调用 unsafe 函数。

r[safety.unsafe-target-feature-call]
- 从一个没有 `target_feature` 属性来启用相同特性的函数中，调用标记了 [`target_feature`](attributes/codegen.md#r-attributes.codegen.target_feature) 的安全函数（参见 [attributes.codegen.target_feature.safety-restrictions](attributes/codegen.md#r-attributes.codegen.target_feature.safety-restrictions)）。

r[safety.unsafe-impl]
- 实现 [unsafe trait](items/traits.md#unsafe-traits)。

r[safety.unsafe-extern]
- 声明 [`extern`](items/external-blocks.md) 块[^extern-2024]。

r[safety.unsafe-attribute]
- 将 [unsafe 属性](attributes.md)应用于项。

[^extern-2024]: Prior to the 2024 edition, extern blocks were allowed to be declared without `unsafe`.

[`extern`]: items/external-blocks.md
[`union`]: items/unions.md
[mutable]: items/static-items.md#mutable-statics
[external]: items/external-blocks.md
[raw pointer]: types/pointer.md
[unsafe trait]: items/traits.md#unsafe-traits
[unsafe attribute]: attributes.md
