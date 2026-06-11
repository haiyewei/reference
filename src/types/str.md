<div class="rule" id="r-type.str"><a class="rule-link" href="#r-type.str" title="type.str"><span>[type<wbr>.str]</span></a>
</div>

# 字符串切片类型

<div class="rule" id="r-type.str.intro"><a class="rule-link" href="#r-type.str.intro" title="type.str.intro"><span>[type<wbr>.str<wbr>.intro]</span></a>
</div>

字符串切片（`str`）类型表示一个字符序列。

```rust
let greeting1: &str = "Hello, world!";
let greeting2: &str = "你好，世界";
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 有关 `str` 类型的 impl 信息，请参见 [标准库文档](../../std/primitive.str.html)。

</div>

<div class="rule" id="r-type.str.value"><a class="rule-link" href="#r-type.str.value" title="type.str.value"><span>[type<wbr>.str<wbr>.value]</span></a>
</div>

`str` 类型的值以与 `[u8]` 相同的方式表示，即一个 8 位无符号字节的切片。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 标准库对 `str` 作出额外假设：作用于 `str` 的方法会假设并确保它包含的数据是有效的 UTF-8。现在或将来，使用非 UTF-8 缓冲区调用 `str` 方法都可能导致 [未定义行为](../behavior-considered-undefined.md)。

</div>

<div class="rule" id="r-type.str.unsized"><a class="rule-link" href="#r-type.str.unsized" title="type.str.unsized"><span>[type<wbr>.str<wbr>.unsized]</span></a>
</div>

`str` 是一种 [动态大小类型](../dynamically-sized-types.md)。它只能通过指针类型来实例化，例如 `&str`。`&str` 的布局与 `&[u8]` 的布局相同。