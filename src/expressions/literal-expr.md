r[expr.literal]
# 字面量表达式

r[expr.literal.syntax]
```grammar,expressions
LiteralExpression ->
      CHAR_LITERAL
    | STRING_LITERAL
    | RAW_STRING_LITERAL
    | BYTE_LITERAL
    | BYTE_STRING_LITERAL
    | RAW_BYTE_STRING_LITERAL
    | C_STRING_LITERAL
    | RAW_C_STRING_LITERAL
    | INTEGER_LITERAL
    | FLOAT_LITERAL
    | `true`
    | `false`
```

r[expr.literal.intro]
*字面量表达式*是由单个 token 而不是 token 序列组成的表达式；它立即且直接表示其求值结果，而不是通过名称或其他求值规则来引用该值。

r[expr.literal.const-expr]
字面量是一种[常量表达式](../const_eval.md#constant-expressions)，因此（主要）在编译时求值。

r[expr.literal.literal-token]
前面描述的每种词法[字面量](../tokens.md#literals)形式都可以构成字面量表达式，关键字 `true` 和 `false` 也可以。

```rust
"hello";   // 字符串类型
'5';       // 字符类型
5;         // 整数类型
```

r[expr.literal.string-representation]
在下面的描述中，token 的*字符串表示*是输入中与该 token 在 _Lexer_ 语法片段中的产生式相匹配的字符序列。

> [!NOTE]
> 这种字符串表示绝不会包含后面紧跟 `U+000A` (LF) 的 `U+000D` (CR) 字符：这一对字符此前已经被转换为单个 `U+000A` (LF)。

r[expr.literal.escape]
## 转义

r[expr.literal.escape.intro]
下面对文本字面量表达式的描述使用了若干形式的*转义*。

r[expr.literal.escape.sequence]
每种转义形式都由以下内容刻画：
 * 一个*转义序列*：一串字符，它总是以 `U+005C` (``) 开头
 * 一个*转义后的值*：单个字符或一个空字符序列

在下面的转义定义中：
 * *八进制数字*是范围 [`0`-`7`] 内的任意字符。
 * *十六进制数字*是范围 [`0`-`9`]、[`a`-`f`] 或 [`A`-`F`] 内的任意字符。

r[expr.literal.escape.simple]
### 简单转义

下表第一列中出现的每个字符序列都是一个转义序列。

在每种情况下，转义后的值都是第二列对应条目给出的字符。

| 转义序列 | 转义后的值 |
|-----------------|--------------------------|
| `\0`            | U+0000 (NUL)             |
| `\t`            | U+0009 (HT)              |
| `\n`            | U+000A (LF)              |
| `\r`            | U+000D (CR)              |
| `\"`            | U+0022 (QUOTATION MARK)  |
| `\'`            | U+0027 (APOSTROPHE)      |
| `\\`            | U+005C (REVERSE SOLIDUS) |

r[expr.literal.escape.hex-octet]
### 8 位转义

该转义序列由 `\x` 后跟两个十六进制数字组成。

转义后的值是这样一个字符：它的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)是将该转义序列中最后两个字符解释为十六进制整数的结果，如同以基数 16 调用 [`u8::from_str_radix`] 一样。

> [!NOTE]
> 因此，转义后的值具有位于 [`u8`](../types/numeric.md) 范围内的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)。

r[expr.literal.escape.hex-ascii]
### 7 位转义

该转义序列由 `\x` 后跟一个八进制数字，再后跟一个十六进制数字组成。

转义后的值是这样一个字符：它的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)是将该转义序列中最后两个字符解释为十六进制整数的结果，如同以基数 16 调用 [`u8::from_str_radix`] 一样。

r[expr.literal.escape.unicode]
### Unicode 转义

该转义序列由 `\u{` 后跟一串字符，再后跟 `}` 组成；这串字符中的每个字符都是十六进制数字或 `_`。

转义后的值是这样一个字符：它的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)是将该转义序列中包含的十六进制数字解释为十六进制整数的结果，如同以基数 16 调用 [`u32::from_str_radix`] 一样。

> [!NOTE]
> [CHAR_LITERAL] 或 [STRING_LITERAL] token 的允许形式保证存在这样的字符。

r[expr.literal.continuation]
### 字符串续行转义

该转义序列由 `` 后面立即跟随的 `U+000A` (LF)，以及在下一个非空白字符之前所有随后出现的空白字符组成。就此而言，空白字符是 `U+0009` (HT)、`U+000A` (LF)、`U+000D` (CR) 和 `U+0020` (SPACE)。

转义后的值是一个空字符序列。

> [!NOTE]
> 这种转义形式的效果是，字符串续行会跳过随后的空白，包括额外的换行。因此，`a`、`b` 和 `c` 相等：
>
> ```rust
> let a = "foobar";
> let b = "foo\
>          bar";
> let c = "foo\
>
>      bar";
>
> assert_eq!(a, b);
> assert_eq!(b, c);
> ```
>
> 跳过额外的换行（如示例 c 中所示）可能令人困惑且出乎意料。这个行为将来可能会调整。在作出决定之前，建议避免依赖通过续行跳过多个换行。更多信息见[此议题](https://github.com/rust-lang/reference/pull/1042)。

r[expr.literal.char]
## 字符字面量表达式

r[expr.literal.char.intro]
字符字面量表达式由单个 [CHAR_LITERAL] token 组成。

r[expr.literal.char.type]
该表达式的类型是基本类型 [`char`](../types/char.md)。

r[expr.literal.char.no-suffix]
该 token 不得带有后缀。

r[expr.literal.char.literal-content]
该 token 的*字面量内容*是其字符串表示中第一个 `U+0027` (`'`) 之后、最后一个 `U+0027` (`'`) 之前的字符序列。

r[expr.literal.char.represented]
字面量表达式*所表示的字符*按如下方式从字面量内容派生：

r[expr.literal.char.escape]
* 如果字面量内容是以下形式之一的转义序列，则所表示的字符是该转义序列的转义后的值：
    * [简单转义](#simple-escapes)
    * [7 位转义](#7-bit-escapes)
    * [Unicode 转义](#unicode-escapes)

r[expr.literal.char.single]
* 否则，所表示的字符就是组成该字面量内容的单个字符。

r[expr.literal.char.result]
该表达式的值是与所表示字符的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)相对应的 [`char`](../types/char.md)。

> [!NOTE]
> [CHAR_LITERAL] token 的允许形式保证这些规则总是产生单个字符。

字符字面量表达式的示例：

```rust
'R';                               // R
'\'';                              // '
'\x52';                            // R
'\u{00E6}';                        // 拉丁小写字母 AE (U+00E6)
```

r[expr.literal.string]
## 字符串字面量表达式

r[expr.literal.string.intro]
字符串字面量表达式由单个 [STRING_LITERAL] 或 [RAW_STRING_LITERAL] token 组成。

r[expr.literal.string.type]
该表达式的类型是指向基本类型 [`str`](../types/str.md) 的共享引用（具有 `static` 生命周期）。也就是说，该类型是 `&'static str`。

r[expr.literal.string.no-suffix]
该 token 不得带有后缀。

r[expr.literal.string.literal-content]
该 token 的*字面量内容*是其字符串表示中第一个 `U+0022` (`"`) 之后、最后一个 `U+0022` (`"`) 之前的字符序列。

r[expr.literal.string.represented]
字面量表达式*所表示的字符串*是按如下方式从字面量内容派生出的字符序列：

r[expr.literal.string.escape]
* 如果该 token 是 [STRING_LITERAL]，则字面量内容中出现的以下任一形式的每个转义序列都会被替换为该转义序列的转义后的值。
    * [简单转义](#simple-escapes)
    * [7 位转义](#7-bit-escapes)
    * [Unicode 转义](#unicode-escapes)
    * [字符串续行转义](#string-continuation-escapes)

  这些替换按从左到右的顺序进行。例如，token `"\x41"` 会被转换为字符 `` `x` `4` `1`。

r[expr.literal.string.raw]
* 如果该 token 是 [RAW_STRING_LITERAL]，则所表示的字符串与字面量内容相同。

r[expr.literal.string.result]
该表达式的值是对一个静态分配的 [`str`](../types/str.md) 的引用，该 [`str`](../types/str.md) 包含所表示字符串的 UTF-8 编码。

字符串字面量表达式的示例：

```rust
"foo"; r"foo";                     // foo
"\"foo\""; r#""foo""#;             // "foo"

"foo #\"# bar";
r##"foo #"# bar"##;                // foo #"# bar

"\x52"; "R"; r"R";                 // R
"\\x52"; r"\x52";                  // \x52
```

r[expr.literal.byte-char]
## 字节字面量表达式

r[expr.literal.byte-char.intro]
字节字面量表达式由单个 [BYTE_LITERAL] token 组成。

r[expr.literal.byte-char.literal]
该表达式的类型是基本类型 [`u8`](../types/numeric.md)。

r[expr.literal.byte-char.no-suffix]
该 token 不得带有后缀。

r[expr.literal.byte-char.literal-content]
该 token 的*字面量内容*是其字符串表示中第一个 `U+0027` (`'`) 之后、最后一个 `U+0027` (`'`) 之前的字符序列。

r[expr.literal.byte-char.represented]
字面量表达式*所表示的字符*按如下方式从字面量内容派生：

r[expr.literal.byte-char.escape]
* 如果字面量内容是以下形式之一的转义序列，则所表示的字符是该转义序列的转义后的值：
    * [简单转义](#simple-escapes)
    * [8 位转义](#8-bit-escapes)

r[expr.literal.byte-char.single]
* 否则，所表示的字符就是组成该字面量内容的单个字符。

r[expr.literal.byte-char.result]
该表达式的值是所表示字符的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)。

> [!NOTE]
> [BYTE_LITERAL] token 的允许形式保证这些规则总是产生单个字符，且其 Unicode 标量值位于 [`u8`](../types/numeric.md) 的范围内。

字节字面量表达式的示例：

```rust
b'R';                              // 82
b'\'';                             // 39
b'\x52';                           // 82
b'\xA0';                           // 160
```

r[expr.literal.byte-string]
## 字节字符串字面量表达式

r[expr.literal.byte-string.intro]
字节字符串字面量表达式由单个 [BYTE_STRING_LITERAL] 或 [RAW_BYTE_STRING_LITERAL] token 组成。

r[expr.literal.byte-string.type]
该表达式的类型是指向某个数组的共享引用（具有 `static` 生命周期），该数组的元素类型为 [`u8`](../types/numeric.md)。也就是说，该类型是 `&'static [u8; N]`，其中 `N` 是下面描述的所表示字符串中的字节数。

r[expr.literal.byte-string.no-suffix]
该 token 不得带有后缀。

r[expr.literal.byte-string.literal-content]
该 token 的*字面量内容*是其字符串表示中第一个 `U+0022` (`"`) 之后、最后一个 `U+0022` (`"`) 之前的字符序列。

r[expr.literal.byte-string.represented]
字面量表达式*所表示的字符串*是按如下方式从字面量内容派生出的字符序列：

r[expr.literal.byte-string.escape]
* 如果该 token 是 [BYTE_STRING_LITERAL]，则字面量内容中出现的以下任一形式的每个转义序列都会被替换为该转义序列的转义后的值。
    * [简单转义](#simple-escapes)
    * [8 位转义](#8-bit-escapes)
    * [字符串续行转义](#string-continuation-escapes)

  这些替换按从左到右的顺序进行。例如，token `b"\x41"` 会被转换为字符 `` `x` `4` `1`。

r[expr.literal.byte-string.raw]
* 如果该 token 是 [RAW_BYTE_STRING_LITERAL]，则所表示的字符串与字面量内容相同。

r[expr.literal.byte-string.result]
该表达式的值是对一个静态分配数组的引用，该数组按相同顺序包含所表示字符串中各字符的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)。

> [!NOTE]
> [BYTE_STRING_LITERAL] 和 [RAW_BYTE_STRING_LITERAL] token 的允许形式保证这些规则总是产生位于 [`u8`](../types/numeric.md) 范围内的数组元素值。

字节字符串字面量表达式的示例：

```rust
b"foo"; br"foo";                     // foo
b"\"foo\""; br#""foo""#;             // "foo"

b"foo #\"# bar";
br##"foo #"# bar"##;                 // foo #"# bar

b"\x52"; b"R"; br"R";                // R
b"\\x52"; br"\x52";                  // \x52
```

r[expr.literal.c-string]
## C 字符串字面量表达式

r[expr.literal.c-string.intro]
C 字符串字面量表达式由单个 [C_STRING_LITERAL] 或 [RAW_C_STRING_LITERAL] token 组成。

r[expr.literal.c-string.type]
该表达式的类型是指向标准库 [CStr](core::ffi::CStr) 类型的共享引用（具有 `static` 生命周期）。也就是说，该类型是 `&'static core::ffi::CStr`。

r[expr.literal.c-string.no-suffix]
该 token 不得带有后缀。

r[expr.literal.c-string.literal-content]
该 token 的*字面量内容*是其字符串表示中第一个 `"` 之后、最后一个 `"` 之前的字符序列。

r[expr.literal.c-string.represented]
字面量表达式*所表示的字节*是按如下方式从字面量内容派生出的字节序列：

r[expr.literal.c-string.escape]
* 如果该 token 是 [C_STRING_LITERAL]，则字面量内容会被视为一串项，其中每一项要么是除 `` 以外的单个 Unicode 字符，要么是一个[转义](#escapes)。这串项按如下方式转换为字节序列：
  * 每个单独的 Unicode 字符贡献其 UTF-8 表示。
  * 每个[简单转义](#simple-escapes)贡献其转义后的值的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)。
  * 每个 [8 位转义](#8-bit-escapes)贡献一个字节，该字节包含其转义后的值的 [Unicode 标量值](http://www.unicode.org/glossary/#unicode_scalar_value)。
  * 每个 [unicode 转义](#unicode-escapes)贡献其转义后的值的 UTF-8 表示。
  * 每个[字符串续行转义](#string-continuation-escapes)不贡献任何字节。

r[expr.literal.c-string.raw]
* 如果该 token 是 [RAW_C_STRING_LITERAL]，则所表示的字节是字面量内容的 UTF-8 编码。

> [!NOTE]
> [C_STRING_LITERAL] 和 [RAW_C_STRING_LITERAL] token 的允许形式保证所表示的字节绝不会包含空字节。

r[expr.literal.c-string.result]
该表达式的值是对一个静态分配的 [CStr](core::ffi::CStr) 的引用，其字节数组包含所表示的字节，并在其后跟有一个空字节。

C 字符串字面量表达式的示例：

```rust
c"foo"; cr"foo";                     // foo
c"\"foo\""; cr#""foo""#;             // "foo"

c"foo #\"# bar";
cr##"foo #"# bar"##;                 // foo #"# bar

c"\x52"; c"R"; cr"R";                // R
c"\\x52"; cr"\x52";                  // \x52

c"æ";                                // 拉丁小写字母 AE (U+00E6)
c"\u{00E6}";                         // 拉丁小写字母 AE (U+00E6)
c"\xC3\xA6";                         // 拉丁小写字母 AE (U+00E6)

c"\xE6".to_bytes();                  // [230]
c"\u{00E6}".to_bytes();              // [195, 166]
```

r[expr.literal.int]
## 整数字面量表达式

r[expr.literal.int.intro]
整数字面量表达式由单个 [INTEGER_LITERAL] token 组成。

r[expr.literal.int.suffix]
如果该 token 带有[后缀](../tokens.md#suffixes)，则后缀必须是某个[基本整数类型](../types/numeric.md)的名称：`u8`、`i8`、`u16`、`i16`、`u32`、`i32`、`u64`、`i64`、`u128`、`i128`、`usize` 或 `isize`，且该表达式具有该类型。

r[expr.literal.int.infer]
如果该 token 没有后缀，则表达式的类型由类型推断决定：

r[expr.literal.int.inference-unique-type]
* 如果可以从周围程序上下文*唯一*确定一个整数类型，则该表达式具有该类型。

r[expr.literal.int.inference-default]
* 如果程序上下文对该类型的约束不足，则默认使用有符号 32 位整数 `i32`。

r[expr.literal.int.inference-error]
* 如果程序上下文对该类型约束过度，则视为静态类型错误。

整数字面量表达式的示例：

```rust
123;                               // type i32
123i32;                            // type i32
123u32;                            // type u32
123_u32;                           // type u32
let a: u64 = 123;                  // type u64

0xff;                              // type i32
0xff_u8;                           // type u8

0o70;                              // type i32
0o70_i16;                          // type i16

0b1111_1111_1001_0000;             // type i32
0b1111_1111_1001_0000i64;          // type i64

0usize;                            // type usize
```

r[expr.literal.int.representation]
该表达式的值按如下方式从该 token 的字符串表示确定：

r[expr.literal.int.radix]
* 通过检查该字符串的前两个字符来选择整数基数，如下所示：

    * `0b` 表示基数 2
    * `0o` 表示基数 8
    * `0x` 表示基数 16
    * 否则基数为 10。

r[expr.literal.int.radix-prefix-stripped]
* 如果基数不是 10，则从该字符串中移除前两个字符。

r[expr.literal.int.type-suffix-stripped]
* 从该字符串中移除任何后缀。

r[expr.literal.int.separators-stripped]
* 从该字符串中移除任何下划线。

r[expr.literal.int.u128-value]
* 该字符串会按所选择的基数转换为一个 `u128` 值，如同调用 [`u128::from_str_radix`] 一样。如果该值无法放入 `u128`，则为编译器错误。

r[expr.literal.int.cast]
* 该 `u128` 值通过[数值转换](operator-expr.md#numeric-cast)转换为表达式的类型。

> [!NOTE]
> 如果字面量的值无法放入表达式的类型，最终转换会截断该值。`rustc` 包含一个名为 `overflowing_literals` 的 [lint 检查](../attributes/diagnostics.md#lint-check-attributes)，其默认级别为 `deny`，会拒绝发生这种情况的表达式。

> [!NOTE]
> 例如，`-1i8` 是将[取负运算符](operator-expr.md#negation-operators)应用于字面量表达式 `1i8`，而不是单个整数字面量表达式。关于如何表示有符号类型的最小负值，见[溢出](operator-expr.md#overflow)中的说明。

r[expr.literal.float]
## 浮点字面量表达式

r[expr.literal.float.intro]
浮点字面量表达式具有以下两种形式之一：
 * 单个 [FLOAT_LITERAL] token
 * 单个 [INTEGER_LITERAL] token，它带有后缀且没有进制指示符

r[expr.literal.float.suffix]
如果该 token 带有[后缀](../tokens.md#suffixes)，则后缀必须是某个[基本浮点数类型](../types/numeric.md#floating-point-types)的名称：`f32` 或 `f64`，且该表达式具有该类型。

r[expr.literal.float.infer]
如果该 token 没有后缀，则表达式的类型由类型推断决定：

r[expr.literal.float.inference-unique-type]
* 如果可以从周围程序上下文*唯一*确定一个浮点数类型，则该表达式具有该类型。

r[expr.literal.float.inference-default]
* 如果程序上下文对该类型的约束不足，则默认使用 `f64`。

r[expr.literal.float.inference-error]
* 如果程序上下文对该类型约束过度，则视为静态类型错误。

浮点字面量表达式的示例：

```rust
123.0f64;        // type f64
0.1f64;          // type f64
0.1f32;          // type f32
12E+99_f64;      // type f64
5f32;            // type f32
let x: f64 = 2.; // type f64
```

r[expr.literal.float.result]
该表达式的值按如下方式从该 token 的字符串表示确定：

r[expr.literal.float.type-suffix-stripped]
* 从该字符串中移除任何后缀。

r[expr.literal.float.separators-stripped]
* 从该字符串中移除任何下划线。

r[expr.literal.float.value]
* 该字符串会转换为表达式的类型，如同调用 [`f32::from_str`](../../core/primitive.f32.md#method.from_str) 或 [`f64::from_str`](../../core/primitive.f64.md#method.from_str) 一样。

> [!NOTE]
> 例如，`-1.0` 是将[取负运算符](operator-expr.md#negation-operators)应用于字面量表达式 `1.0`，而不是单个浮点字面量表达式。

> [!NOTE]
> `inf` 和 `NaN` 不是字面量 token。可以使用 [`f32::INFINITY`]、[`f64::INFINITY`]、[`f32::NAN`] 和 [`f64::NAN`] 常量来代替字面量表达式。在 `rustc` 中，大到足以被求值为无穷大的字面量会触发 `overflowing_literals` lint 检查。

r[expr.literal.bool]
## 布尔字面量表达式

r[expr.literal.bool.intro]
布尔字面量表达式由关键字 `true` 或 `false` 之一组成。

r[expr.literal.bool.result]
该表达式的类型是基本[布尔类型](../types/boolean.md)，其值为：
 * 如果关键字是 `true`，则为 true
 * 如果关键字是 `false`，则为 false

[Escape]: #escapes
[Simple escape]: #simple-escapes
[Simple escapes]: #simple-escapes
[8-bit escape]: #8-bit-escapes
[8-bit escapes]: #8-bit-escapes
[7-bit escape]: #7-bit-escapes
[7-bit escapes]: #7-bit-escapes
[Unicode escape]: #unicode-escapes
[Unicode escapes]: #unicode-escapes
[String continuation escape]: #string-continuation-escapes
[String continuation escapes]: #string-continuation-escapes
[boolean type]: ../types/boolean.md
[constant expression]: ../const_eval.md#constant-expressions
[CStr]: core::ffi::CStr
[floating-point types]: ../types/numeric.md#floating-point-types
[lint check]: ../attributes/diagnostics.md#lint-check-attributes
[literal tokens]: ../tokens.md#literals
[numeric cast]: operator-expr.md#numeric-cast
[numeric types]: ../types/numeric.md
[suffix]: ../tokens.md#suffixes
[negation operator]: operator-expr.md#negation-operators
[overflow]: operator-expr.md#overflow
[Unicode scalar value]: http://www.unicode.org/glossary/#unicode_scalar_value
[Unicode scalar values]: http://www.unicode.org/glossary/#unicode_scalar_value
[`char`]: ../types/char.md
[`f32::from_str`]: ../../core/primitive.f32.md#method.from_str
[`f64::from_str`]: ../../core/primitive.f64.md#method.from_str
[`str`]: ../types/str.md
