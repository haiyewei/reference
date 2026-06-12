r[type.fn-item]
# 函数项类型

r[type.fn-item.intro]
在被引用时，函数项，或者类元组结构体或枚举变体的构造器，会产生一个其*函数项类型*的[零大小](glossary.zst)值。

r[type.fn-item.unique]
该类型会显式标识该函数，即它的名称、类型实参以及早绑定生命周期实参（但不包括晚绑定生命周期实参，后者只有在调用函数时才会被赋值），因此该值不需要包含实际的函数指针，并且调用函数时也不需要间接访问。

r[type.fn-item.name]
没有语法可以直接引用函数项类型，但编译器会在错误消息中将该类型显示为类似 `fn(u32) -> i32 {fn_name}` 的形式。

由于函数项类型会显式标识该函数，不同函数的项类型，即不同项，或同一项带有不同泛型的情况，彼此是不同的；混用它们会产生类型错误：

```rust,compile_fail,E0308
fn foo<T>() { }
let x = &mut foo::<i32>;
*x = foo::<u32>; //~ ERROR mismatched types
```

r[type.fn-item.coercion]
不过，存在一种从函数项到具有相同签名的[函数指针](function-pointer.md)的[强制转换](../type-coercions.md)。这种转换不仅会在直接期望函数指针却使用函数项时触发，也会在具有相同签名的不同函数项类型出现在同一个 `if` 或 `match` 的不同分支中时触发：

```rust
# let want_i32 = false;
# fn foo<T>() { }

// `foo_ptr_1` 在这里具有函数指针类型 `fn()`
let foo_ptr_1: fn() = foo::<i32>;

// ... `foo_ptr_2` 也是如此 - 这能通过类型检查。
let foo_ptr_2 = if want_i32 {
    foo::<i32>
} else {
    foo::<u32>
};
```

r[type.fn-item.traits]
所有函数项都实现 [`Copy`](../special-types-and-traits.md#copy)、[`Clone`](../special-types-and-traits.md#clone)、[`Send`](../special-types-and-traits.md#send) 和 [`Sync`](../special-types-and-traits.md#sync)。

[`Fn`]、[`FnMut`] 和 [`FnOnce`] 会被实现，除非函数具有以下任一项：

- 一个 [`unsafe`][unsafe.fn] 限定符
- 一个 [`target_feature` 属性][attributes.codegen.target_feature]
- 一个不是 `"Rust"` 的 [ABI][items.fn.extern]

[`Clone`]: ../special-types-and-traits.md#clone
[`Copy`]: ../special-types-and-traits.md#copy
[`Send`]: ../special-types-and-traits.md#send
[`Sync`]: ../special-types-and-traits.md#sync
[coercion]: ../type-coercions.md
[function pointers]: function-pointer.md
[zero-sized]: glossary.zst
