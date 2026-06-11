<div class="rule" id="r-safety"><a class="rule-link" href="#r-safety" title="safety"><span>[safety]</span></a>
</div>

# 不安全性

<div class="rule" id="r-safety.intro"><a class="rule-link" href="#r-safety.intro" title="safety.intro"><span>[safety<wbr>.intro]</span></a>
</div>

不安全操作是那些可能违反 Rust 静态语义所提供的内存安全保证的操作。

<div class="rule" id="r-safety.unsafe-ops"><a class="rule-link" href="#r-safety.unsafe-ops" title="safety.unsafe-ops"><span>[safety<wbr>.unsafe-ops]</span></a>
</div>

以下语言级特性不能在 Rust 的安全子集中使用：

<div class="rule" id="r-safety.unsafe-deref"><a class="rule-link" href="#r-safety.unsafe-deref" title="safety.unsafe-deref"><span>[safety<wbr>.unsafe-deref]</span></a>
</div>

- 解引用[裸指针](types/pointer.md)。

<div class="rule" id="r-safety.unsafe-static"><a class="rule-link" href="#r-safety.unsafe-static" title="safety.unsafe-static"><span>[safety<wbr>.unsafe-static]</span></a>
</div>

- 读取或写入[可变](items/static-items.md#mutable-statics)静态变量，或 unsafe [外部](items/external-blocks.md)静态变量。

<div class="rule" id="r-safety.unsafe-union-access"><a class="rule-link" href="#r-safety.unsafe-union-access" title="safety.unsafe-union-access"><span>[safety<wbr>.unsafe-union-access]</span></a>
</div>

- 访问 [`union`](items/unions.md) 的字段，但为其赋值除外。

<div class="rule" id="r-safety.unsafe-call"><a class="rule-link" href="#r-safety.unsafe-call" title="safety.unsafe-call"><span>[safety<wbr>.unsafe-call]</span></a>
</div>

- 调用 unsafe 函数。

<div class="rule" id="r-safety.unsafe-target-feature-call"><a class="rule-link" href="#r-safety.unsafe-target-feature-call" title="safety.unsafe-target-feature-call"><span>[safety<wbr>.unsafe-target-feature-call]</span></a>
</div>

- 从一个没有 `target_feature` 属性来启用相同特性的函数中，调用标记了 [`target_feature`](attributes/codegen.md#r-attributes.codegen.target_feature) 的安全函数（参见 [attributes.codegen.target_feature.safety-restrictions](attributes/codegen.md#r-attributes.codegen.target_feature.safety-restrictions)）。

<div class="rule" id="r-safety.unsafe-impl"><a class="rule-link" href="#r-safety.unsafe-impl" title="safety.unsafe-impl"><span>[safety<wbr>.unsafe-impl]</span></a>
</div>

- 实现 [unsafe trait](items/traits.md#unsafe-traits)。

<div class="rule" id="r-safety.unsafe-extern"><a class="rule-link" href="#r-safety.unsafe-extern" title="safety.unsafe-extern"><span>[safety<wbr>.unsafe-extern]</span></a>
</div>

- 声明 [`extern`](items/external-blocks.md) 块[^extern-2024]。

<div class="rule" id="r-safety.unsafe-attribute"><a class="rule-link" href="#r-safety.unsafe-attribute" title="safety.unsafe-attribute"><span>[safety<wbr>.unsafe-attribute]</span></a>
</div>

- 将 [unsafe 属性](attributes.md)应用于项。

[^extern-2024]: 在 2024 edition 之前，允许在不使用 `unsafe` 的情况下声明 extern 块。