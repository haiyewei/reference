r[type.numeric]
# 数值类型

r[type.numeric.int]
## 整数类型

r[type.numeric.int.unsigned]
无符号整数类型包括：

| 类型 | 最小值 | 最大值 |
-------|---------|-------------------
`u8`   | 0       | 2<sup>8</sup>-1
`u16`  | 0       | 2<sup>16</sup>-1
`u32`  | 0       | 2<sup>32</sup>-1
`u64`  | 0       | 2<sup>64</sup>-1
`u128` | 0       | 2<sup>128</sup>-1

r[type.numeric.int.signed]
有符号二进制补码整数类型包括：

| 类型 | 最小值 | 最大值 |
-------|--------------------|-------------------
`i8`   | -(2<sup>7</sup>)   | 2<sup>7</sup>-1
`i16`  | -(2<sup>15</sup>)  | 2<sup>15</sup>-1
`i32`  | -(2<sup>31</sup>)  | 2<sup>31</sup>-1
`i64`  | -(2<sup>63</sup>)  | 2<sup>63</sup>-1
`i128` | -(2<sup>127</sup>) | 2<sup>127</sup>-1

r[type.numeric.float]
## 浮点类型

IEEE 754-2008 的 "binary32" 和 "binary64" 浮点类型分别是 `f32` 和 `f64`。

r[type.numeric.int.size]
## 机器相关整数类型

r[type.numeric.int.size.usize]
`usize` 类型是一种无符号整数类型，其位数与平台的指针类型相同。它可以表示进程中的每个内存地址。

> [!NOTE]
> 虽然 `usize` 可以表示每个*地址*，但将*指针*转换为 `usize` 不一定是可逆操作。更多信息请参见[类型转换表达式](../expressions/operator-expr.md#type-cast-expressions)、[`std::ptr`]，尤其是 [provenance（来源）][std::ptr#provenance] 的文档。

r[type.numeric.int.size.isize]
`isize` 类型是一种有符号二进制补码整数类型，其位数与平台的指针类型相同。对象和数组大小的理论上限是 `isize` 的最大值。这确保 `isize` 可用于计算指向对象或数组内部的指针之间的差值，并且能够寻址对象内的每个字节以及末尾之后一个字节。

r[type.numeric.int.size.minimum]
`usize` 和 `isize` 至少为 16 位宽。

> [!NOTE]
> 许多 Rust 代码可能假定指针、`usize` 和 `isize` 要么是 32 位，要么是 64 位。因此，对 16 位指针的支持是有限的，并且可能需要库显式谨慎处理并确认支持。

r[type.numeric.validity]
## 位有效性

对于每种数值类型 `T`，`T` 的位有效性等价于 `[u8; size_of::<T>()]` 的位有效性。未初始化字节不是有效的 `u8`。

[type cast expressions]: ../expressions/operator-expr.md#type-cast-expressions
