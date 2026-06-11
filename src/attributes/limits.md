<div class="rule" id="r-attributes.limits"><a class="rule-link" href="#r-attributes.limits" title="attributes.limits"><span>[attributes<wbr>.limits]</span></a>
</div>

# 限制

以下[属性](../attributes.md)会影响编译时限制。

<div class="rule" id="r-attributes.limits.recursion_limit"><a class="rule-link" href="#r-attributes.limits.recursion_limit" title="attributes.limits.recursion_limit"><span>[attributes<wbr>.limits<wbr>.recursion_limit]</span></a>
</div>

## `recursion_limit` 属性

<div class="rule" id="r-attributes.limits.recursion_limit.intro"><a class="rule-link" href="#r-attributes.limits.recursion_limit.intro" title="attributes.limits.recursion_limit.intro"><span>[attributes<wbr>.limits<wbr>.recursion_limit<wbr>.intro]</span></a>
</div>

_`recursion_limit` 属性_ 可以应用于 [crate](../crates-and-source-files.md) 级别，用于为宏展开或自动解引用等潜在无限递归的编译时操作设置最大深度。

<div class="rule" id="r-attributes.limits.recursion_limit.syntax"><a class="rule-link" href="#r-attributes.limits.recursion_limit.syntax" title="attributes.limits.recursion_limit.syntax"><span>[attributes<wbr>.limits<wbr>.recursion_limit<wbr>.syntax]</span></a>
</div>

它使用 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 语法来指定递归深度。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 中的默认值是 128。

</div>

```rust,compile_fail
#![recursion_limit = "4"]

macro_rules! a {
    () => { a!(1); };
    (1) => { a!(2); };
    (2) => { a!(3); };
    (3) => { a!(4); };
    (4) => { };
}

// This fails to expand because it requires a recursion depth greater than 4.
a!{}
```

```rust,compile_fail
#![recursion_limit = "1"]

// This fails because it requires two recursive steps to auto-dereference.
(|_: &u8| {})(&&&1);
```

<!-- template:attributes -->

<div class="rule" id="r-attributes.limits.type_length_limit"><a class="rule-link" href="#r-attributes.limits.type_length_limit" title="attributes.limits.type_length_limit"><span>[attributes<wbr>.limits<wbr>.type_length_limit]</span></a>
</div>

## `type_length_limit` 属性

<div class="rule" id="r-attributes.limits.type_length_limit.intro"><a class="rule-link" href="#r-attributes.limits.type_length_limit.intro" title="attributes.limits.type_length_limit.intro"><span>[attributes<wbr>.limits<wbr>.type_length_limit<wbr>.intro]</span></a>
</div>

_`type_length_limit` [属性](../attributes.md)_ 设置在单态化期间构造具体类型时允许的类型替换最大数量。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 只有在 nightly `-Zenforce-type-length-limit` 标志启用时，`rustc` 才会强制执行该限制。
 > 
 > 更多信息见 [Rust PR #127670](https://github.com/rust-lang/rust/pull/127670)。

</div>

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > <!-- ignore: not enforced without nightly flag -->
 > 
 > ```rust,ignore
 > #![type_length_limit = "4"]
 > 
 > fn f<T>(x: T) {}
 > 
 > // This fails to compile because monomorphizing to
 > // `f::<((((i32,), i32), i32), i32)>` requires more
 > // than 4 type elements.
 > f(((((1,), 2), 3), 4));
 > ```

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 中的默认值是 `1048576`。

</div>

<div class="rule" id="r-attributes.limits.type_length_limit.syntax"><a class="rule-link" href="#r-attributes.limits.type_length_limit.syntax" title="attributes.limits.type_length_limit.syntax"><span>[attributes<wbr>.limits<wbr>.type_length_limit<wbr>.syntax]</span></a>
</div>

`type_length_limit` 属性使用 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 语法。字符串中的值必须是非负数。

<div class="rule" id="r-attributes.limits.type_length_limit.allowed-positions"><a class="rule-link" href="#r-attributes.limits.type_length_limit.allowed-positions" title="attributes.limits.type_length_limit.allowed-positions"><span>[attributes<wbr>.limits<wbr>.type_length_limit<wbr>.allowed-positions]</span></a>
</div>

`type_length_limit` 属性只能应用于 crate 根。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="rule" id="r-attributes.limits.type_length_limit.duplicates"><a class="rule-link" href="#r-attributes.limits.type_length_limit.duplicates" title="attributes.limits.type_length_limit.duplicates"><span>[attributes<wbr>.limits<wbr>.type_length_limit<wbr>.duplicates]</span></a>
</div>

在一个项上，只有第一次使用 `type_length_limit` 会生效。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

</div>
