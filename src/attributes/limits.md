r[attributes.limits]
# 限制

以下[属性](../attributes.md)会影响编译时限制。

r[attributes.limits.recursion_limit]
## `recursion_limit` 属性

r[attributes.limits.recursion_limit.intro]
*`recursion_limit` 属性*可以应用于 [crate](../crates-and-source-files.md) 级别，用于为宏展开或自动解引用等潜在无限递归的编译时操作设置最大深度。

r[attributes.limits.recursion_limit.syntax]
它使用 [MetaNameValueStr] 语法来指定递归深度。

> [!NOTE]
> `rustc` 中的默认值是 128。

```rust,compile_fail
#![recursion_limit = "4"]

macro_rules! a {
    () => { a!(1); };
    (1) => { a!(2); };
    (2) => { a!(3); };
    (3) => { a!(4); };
    (4) => { };
}

// 这会展开失败，因为它需要大于 4 的递归深度。
a!{}
```

```rust,compile_fail
#![recursion_limit = "1"]

// 这会失败，因为它需要两个递归步骤才能自动解引用。
(|_: &u8| {})(&&&1);
```

<!-- template:attributes -->
r[attributes.limits.type_length_limit]
## `type_length_limit` 属性

r[attributes.limits.type_length_limit.intro]
*`type_length_limit` [属性](../attributes.md)* 设置在单态化期间构造具体类型时允许的类型替换最大数量。

> [!NOTE]
> 只有在 nightly `-Zenforce-type-length-limit` 标志启用时，`rustc` 才会强制执行该限制。
>
> 更多信息见 [Rust PR #127670](https://github.com/rust-lang/rust/pull/127670)。

> [!EXAMPLE]
> <!-- ignore: not enforced without nightly flag -->
> ```rust,ignore
> #![type_length_limit = "4"]
>
> fn f<T>(x: T) {}
>
> // 这会编译失败，因为单态化为
> // `f::<((((i32,), i32), i32), i32)>` 需要超过 4 个
> // 类型元素。
> f(((((1,), 2), 3), 4));
> ```

> [!NOTE]
> `rustc` 中的默认值是 `1048576`。

r[attributes.limits.type_length_limit.syntax]
`type_length_limit` 属性使用 [MetaNameValueStr] 语法。字符串中的值必须是非负数。

r[attributes.limits.type_length_limit.allowed-positions]
`type_length_limit` 属性只能应用于 crate 根。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

r[attributes.limits.type_length_limit.duplicates]
在一个项上，只有第一次使用 `type_length_limit` 会生效。

> [!NOTE]
> `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

[attributes]: ../attributes.md
[crate]: ../crates-and-source-files.md
