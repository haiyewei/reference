<div class="rule" id="r-type.numeric"><a class="rule-link" href="#r-type.numeric" title="type.numeric"><span>[type<wbr>.numeric]</span></a>
</div>

# 数值类型

<div class="rule" id="r-type.numeric.int"><a class="rule-link" href="#r-type.numeric.int" title="type.numeric.int"><span>[type<wbr>.numeric<wbr>.int]</span></a>
</div>

## 整数类型

<div class="rule" id="r-type.numeric.int.unsigned"><a class="rule-link" href="#r-type.numeric.int.unsigned" title="type.numeric.int.unsigned"><span>[type<wbr>.numeric<wbr>.int<wbr>.unsigned]</span></a>
</div>

无符号整数类型包括：

|类型|最小值|最大值|
|--|---|---|
|`u8`|0|2<sup>8</sup>\-1|
|`u16`|0|2<sup>16</sup>\-1|
|`u32`|0|2<sup>32</sup>\-1|
|`u64`|0|2<sup>64</sup>\-1|
|`u128`|0|2<sup>128</sup>\-1|

<div class="rule" id="r-type.numeric.int.signed"><a class="rule-link" href="#r-type.numeric.int.signed" title="type.numeric.int.signed"><span>[type<wbr>.numeric<wbr>.int<wbr>.signed]</span></a>
</div>

有符号二进制补码整数类型包括：

|类型|最小值|最大值|
|--|---|---|
|`i8`|\-(2<sup>7</sup>)|2<sup>7</sup>\-1|
|`i16`|\-(2<sup>15</sup>)|2<sup>15</sup>\-1|
|`i32`|\-(2<sup>31</sup>)|2<sup>31</sup>\-1|
|`i64`|\-(2<sup>63</sup>)|2<sup>63</sup>\-1|
|`i128`|\-(2<sup>127</sup>)|2<sup>127</sup>\-1|

<div class="rule" id="r-type.numeric.float"><a class="rule-link" href="#r-type.numeric.float" title="type.numeric.float"><span>[type<wbr>.numeric<wbr>.float]</span></a>
</div>

## 浮点类型

IEEE 754-2008 的 "binary32" 和 "binary64" 浮点类型分别是 `f32` 和 `f64`。

<div class="rule" id="r-type.numeric.int.size"><a class="rule-link" href="#r-type.numeric.int.size" title="type.numeric.int.size"><span>[type<wbr>.numeric<wbr>.int<wbr>.size]</span></a>
</div>

## 机器相关整数类型

<div class="rule" id="r-type.numeric.int.size.usize"><a class="rule-link" href="#r-type.numeric.int.size.usize" title="type.numeric.int.size.usize"><span>[type<wbr>.numeric<wbr>.int<wbr>.size<wbr>.usize]</span></a>
</div>

`usize` 类型是一种无符号整数类型，其位数与平台的指针类型相同。它可以表示进程中的每个内存地址。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 虽然 `usize` 可以表示每个 _地址_，但将 _指针_ 转换为 `usize` 不一定是可逆操作。更多信息请参见[类型转换表达式](../expressions/operator-expr.md#type-cast-expressions)、[`std::ptr`](../../core/ptr/index.html)，尤其是 [provenance](../../core/ptr/index.html#provenance) 的文档。

</div>

<div class="rule" id="r-type.numeric.int.size.isize"><a class="rule-link" href="#r-type.numeric.int.size.isize" title="type.numeric.int.size.isize"><span>[type<wbr>.numeric<wbr>.int<wbr>.size<wbr>.isize]</span></a>
</div>

`isize` 类型是一种有符号二进制补码整数类型，其位数与平台的指针类型相同。对象和数组大小的理论上限是 `isize` 的最大值。这确保 `isize` 可用于计算指向对象或数组内部的指针之间的差值，并且能够寻址对象内的每个字节以及末尾之后一个字节。

<div class="rule" id="r-type.numeric.int.size.minimum"><a class="rule-link" href="#r-type.numeric.int.size.minimum" title="type.numeric.int.size.minimum"><span>[type<wbr>.numeric<wbr>.int<wbr>.size<wbr>.minimum]</span></a>
</div>

`usize` 和 `isize` 至少为 16 位宽。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 许多 Rust 代码可能假定指针、`usize` 和 `isize` 要么是 32 位，要么是 64 位。因此，对 16 位指针的支持是有限的，并且可能需要库显式谨慎处理并确认支持。

</div>

<div class="rule" id="r-type.numeric.validity"><a class="rule-link" href="#r-type.numeric.validity" title="type.numeric.validity"><span>[type<wbr>.numeric<wbr>.validity]</span></a>
</div>

## 位有效性

对于每种数值类型 `T`，`T` 的位有效性等价于 `[u8; size_of::<T>()]` 的位有效性。未初始化字节不是有效的 `u8`。