<div class="rule" id="r-type.fn-item"><a class="rule-link" href="#r-type.fn-item" title="type.fn-item"><span>[type<wbr>.fn-item]</span></a>
</div>

# 函数项类型

<div class="rule" id="r-type.fn-item.intro"><a class="rule-link" href="#r-type.fn-item.intro" title="type.fn-item.intro"><span>[type<wbr>.fn-item<wbr>.intro]</span></a>
</div>

在被引用时，函数项，或者类元组结构体或枚举变体的构造器，会产生一个其_函数项类型_的[零大小](../glossary.md#r-glossary.zst)值。

<div class="rule" id="r-type.fn-item.unique"><a class="rule-link" href="#r-type.fn-item.unique" title="type.fn-item.unique"><span>[type<wbr>.fn-item<wbr>.unique]</span></a>
</div>

该类型会显式标识该函数，即它的名称、类型实参以及早期绑定的生命周期实参（但不包括后期绑定的生命周期实参，后者只有在调用函数时才会被赋值），因此该值不需要包含实际的函数指针，并且调用函数时也不需要间接访问。

<div class="rule" id="r-type.fn-item.name"><a class="rule-link" href="#r-type.fn-item.name" title="type.fn-item.name"><span>[type<wbr>.fn-item<wbr>.name]</span></a>
</div>

没有语法可以直接引用函数项类型，但编译器会在错误消息中将该类型显示为类似 `fn(u32) -> i32 {fn_name}` 的形式。

由于函数项类型会显式标识该函数，不同函数的项类型，即不同项，或同一项带有不同泛型的情况，彼此是不同的；混用它们会产生类型错误：

```rust,compile_fail,E0308
fn foo<T>() { }
let x = &mut foo::<i32>;
*x = foo::<u32>; //~ ERROR mismatched types
```

<div class="rule" id="r-type.fn-item.coercion"><a class="rule-link" href="#r-type.fn-item.coercion" title="type.fn-item.coercion"><span>[type<wbr>.fn-item<wbr>.coercion]</span></a>
</div>

不过，函数项可以[强制转换](../type-coercions.md)为具有相同签名的[函数指针](function-pointer.md)。这种转换不仅会在直接期望函数指针却使用函数项时触发，也会在具有相同签名的不同函数项类型出现在同一个 `if` 或 `match` 的不同分支中时触发：

```rust
# let want_i32 = false;
# fn foo<T>() { }

// `foo_ptr_1` has function pointer type `fn()` here
let foo_ptr_1: fn() = foo::<i32>;

// ... and so does `foo_ptr_2` - this type-checks.
let foo_ptr_2 = if want_i32 {
    foo::<i32>
} else {
    foo::<u32>
};
```

<div class="rule" id="r-type.fn-item.traits"><a class="rule-link" href="#r-type.fn-item.traits" title="type.fn-item.traits"><span>[type<wbr>.fn-item<wbr>.traits]</span></a>
</div>

所有函数项都实现 [`Copy`](../special-types-and-traits.md#copy)、[`Clone`](../special-types-and-traits.md#clone)、[`Send`](../special-types-and-traits.md#send) 和 [`Sync`](../special-types-and-traits.md#sync)。

除非函数具有以下任一项，否则它会实现 [`Fn`](../../core/ops/function/trait.Fn.html)、[`FnMut`](../../core/ops/function/trait.FnMut.html) 和 [`FnOnce`](../../core/ops/function/trait.FnOnce.html)：

- 一个 [`unsafe`](../unsafe-keyword.md#r-unsafe.fn) 限定符
- 一个 [`target_feature` 属性](../attributes/codegen.md#r-attributes.codegen.target_feature)
- 一个不是 `"Rust"` 的 [ABI](../items/functions.md#r-items.fn.extern)