r[lex.token]
# Token

r[lex.token.syntax]
```grammar,lexer
Token ->
      RESERVED_TOKEN
    | RAW_IDENTIFIER
    | CHAR_LITERAL
    | STRING_LITERAL
    | RAW_STRING_LITERAL
    | BYTE_LITERAL
    | BYTE_STRING_LITERAL
    | RAW_BYTE_STRING_LITERAL
    | C_STRING_LITERAL
    | RAW_C_STRING_LITERAL
    | FLOAT_LITERAL
    | INTEGER_LITERAL
    | LIFETIME_TOKEN
    | PUNCTUATION
    | IDENTIFIER_OR_KEYWORD
```

r[lex.token.intro]
token 是由正则（非递归）语言定义的语法中的基础产生式。Rust 源输入可以分解为下列几类 token：

* [关键字](keywords.md)
* [标识符](identifiers.md)
* [字面量](#literals)
* [生命周期](#lifetimes-and-loop-labels)
* [标点符号](#punctuation)
* [定界符](#delimiters)

在本文档的语法中，"simple" token 以[字符串表产生式](notation.md#string-table-productions)的形式给出，并以 `monospace` 等宽字体显示。

[string table production]: notation.md#string-table-productions

r[lex.token.literal]
## 字面量

字面量是用于[字面量表达式](expressions/literal-expr.md)中的 token。

### 示例

#### 字符与字符串

|  | 示例 | `#` 组数[^nsets] | 字符 | 转义 |
|----------------------------------------------|-----------------|------------|-------------|---------------------|
| [字符](#character-literals) | `'H'` | 0 | 所有 Unicode 字符 | [引号](#quote-escapes) & [ASCII](#ascii-escapes) & [Unicode](#unicode-escapes) |
| [字符串](#string-literals) | `"hello"` | 0 | 所有 Unicode 字符 | [引号](#quote-escapes) & [ASCII](#ascii-escapes) & [Unicode](#unicode-escapes) |
| [原始字符串](#raw-string-literals) | `r#"hello"#` | <256 | 所有 Unicode 字符 | `N/A` |
| [字节](#byte-literals) | `b'H'` | 0 | 所有 ASCII 字符 | [引号](#quote-escapes) & [字节](#byte-escapes) |
| [字节字符串](#byte-string-literals) | `b"hello"` | 0 | 所有 ASCII 字符 | [引号](#quote-escapes) & [字节](#byte-escapes) |
| [原始字节字符串](#raw-byte-string-literals) | `br#"hello"#` | <256 | 所有 ASCII 字符 | `N/A` |
| [C 字符串](#c-string-literals) | `c"hello"` | 0 | 所有 Unicode 字符 | [引号](#quote-escapes) & [字节](#byte-escapes) & [Unicode](#unicode-escapes) |
| [原始 C 字符串](#raw-c-string-literals) | `cr#"hello"#` | <256 | 所有 Unicode 字符 | `N/A` |

[^nsets]: 同一字面量两侧的 `#` 数量必须相同。


#### ASCII 转义

|  | 名称 |
|---|------|
| `\x41` | 7 位字符码（恰好 2 个十六进制数字，最大到 0x7F） |
| `\n` | 换行 |
| `\r` | 回车 |
| `\t` | 制表符 |
| `\\` | 反斜杠 |
| `\0` | 空字符 |

#### 字节转义

|  | 名称 |
|---|------|
| `\x7F` | 8 位字符码（恰好 2 个十六进制数字） |
| `\n` | 换行 |
| `\r` | 回车 |
| `\t` | 制表符 |
| `\\` | 反斜杠 |
| `\0` | 空字符 |

#### Unicode 转义

|  | 名称 |
|---|------|
| `\u{7FFF}` | 24 位 Unicode 字符码（最多 6 个十六进制数字） |

#### 引号转义

|  | 名称 |
|---|------|
| `\'` | 单引号 |
| `\"` | 双引号 |

#### 数值

| [数值字面量](#number-literals)[^nl] | 示例 | 指数部分 |
|----------------------------------------|---------|----------------|
| 十进制整数 | `98_222` | `N/A` |
| 十六进制整数 | `0xff` | `N/A` |
| 八进制整数 | `0o77` | `N/A` |
| 二进制整数 | `0b1111_0000` | `N/A` |
| 浮点数 | `123.0E+77` | `Optional` |

[^nl]: 所有数值字面量都允许使用 `_` 作为视觉分隔符：`1_234.0E+18f64`

r[lex.token.literal.suffix]
#### 后缀

r[lex.token.literal.literal.suffix.intro]
后缀是紧跟在字面量主体部分之后（中间不得有空白）的字符序列，其形式与非原始标识符或关键字相同。

r[lex.token.literal.suffix.syntax]
```grammar,lexer
SUFFIX ->
      `_` ^ XID_Continue+
    | XID_Start XID_Continue*
```

r[lex.token.literal.suffix.validity]
带有任意后缀的任意种类字面量（字符串、整数等）都是有效的 token。

带有任意后缀的字面量 token 都可以传给宏而不产生错误。宏自身将决定如何解释这样的 token，以及是否产生错误。特别是，示例宏中的 `literal` 片段说明符会匹配带有任意后缀的字面量 token。

```rust
macro_rules! blackhole { ($tt:tt) => () }
macro_rules! blackhole_lit { ($l:literal) => () }

blackhole!("string"suffix); // 可以
blackhole_lit!(1suffix); // 可以
```

r[lex.token.literal.suffix.parse]
然而，被解释为字面量表达式或模式的字面量 token，其后缀会受到限制。非数值字面量 token 上的任何后缀都会被拒绝，而数值字面量 token 只接受下列后缀。

| 整数 | 浮点数 |
|---------|----------------|
| `u8`, `i8`, `u16`, `i16`, `u32`, `i32`, `u64`, `i64`, `u128`, `i128`, `usize`, `isize` | `f32`, `f64` |

### 字符和字符串字面量

r[lex.token.literal.char]
#### 字符字面量

r[lex.token.literal.char.syntax]
```grammar,lexer
CHAR_LITERAL ->
    `'`
        ( ~[`'` `\` LF CR TAB] | QUOTE_ESCAPE | ASCII_ESCAPE | UNICODE_ESCAPE )
    `'` SUFFIX?

QUOTE_ESCAPE -> `\'` | `\"`

ASCII_ESCAPE ->
      `\x` OCT_DIGIT HEX_DIGIT
    | `\n` | `\r` | `\t` | `\\` | `\0`

UNICODE_ESCAPE ->
    `\u{` ( HEX_DIGIT `_`* ){1..=6} _valid hex char value_ `}`[^valid-hex-char]
```

[^valid-hex-char]: 见 [lex.token.literal.char-escape.unicode]。

r[lex.token.literal.char.intro]
*字符字面量*是由两个 `U+0027`（单引号）字符包围的单个 Unicode 字符；`U+0027` 本身除外，它必须通过前置的 `U+005C` 字符（``）进行*转义*。

r[lex.token.literal.str]
#### 字符串字面量

r[lex.token.literal.str.syntax]
```grammar,lexer
STRING_LITERAL ->
    `"` (
        ~[`"` `\` CR]
      | QUOTE_ESCAPE
      | ASCII_ESCAPE
      | UNICODE_ESCAPE
      | STRING_CONTINUE
    )* `"` SUFFIX?

STRING_CONTINUE -> `\` LF
```

r[lex.token.literal.str.intro]
*字符串字面量*是由两个 `U+0022`（双引号）字符包围的任意 Unicode 字符序列；`U+0022` 本身除外，它必须通过前置的 `U+005C` 字符（``）进行*转义*。

r[lex.token.literal.str.linefeed]
字符串字面量中允许出现换行，换行由字符 `U+000A`（LF）表示。字符 `U+000D`（CR）不得出现在字符串字面量中。当未转义的 `U+005C` 字符（``）紧接在换行之前时，该换行不会出现在这个 token 所表示的字符串中。详见[字符串续行转义](expressions/literal-expr.md#string-continuation-escapes)。

r[lex.token.literal.char-escape]
#### 字符转义

r[lex.token.literal.char-escape.intro]
字符字面量或非原始字符串字面量中还可以使用一些额外的*转义*。转义以 `U+005C`（``）开头，并继续为以下形式之一：

r[lex.token.literal.char-escape.ascii]
* *7 位码点转义*以 `U+0078`（`x`）开头，后跟恰好两个值不超过 `0x7F` 的*十六进制数字*。它表示值等于所给十六进制值的 ASCII 字符。更大的值是不允许的，因为它们究竟表示 Unicode 码点还是字节值会产生歧义。

r[lex.token.literal.char-escape.unicode]
* *24 位码点转义*以 `U+0075`（`u`）开头，后跟由花括号 `U+007B`（`{`）和 `U+007D`（`}`）包围的至多六个*十六进制数字*。它表示等于所给十六进制值的 Unicode 码点。该值必须是有效的 Unicode 标量值。

r[lex.token.literal.char-escape.whitespace]
* *空白转义*是字符 `U+006E`（`n`）、`U+0072`（`r`）或 `U+0074`（`t`）之一，分别表示 Unicode 值 `U+000A`（LF）、`U+000D`（CR）或 `U+0009`（HT）。

r[lex.token.literal.char-escape.null]
* *空值转义*是字符 `U+0030`（`0`），表示 Unicode 值 `U+0000`（NUL）。

r[lex.token.literal.char-escape.slash]
* *反斜杠转义*是字符 `U+005C`（``），它必须被转义才能表示其自身。

r[lex.token.literal.str-raw]
#### 原始字符串字面量

r[lex.token.literal.str-raw.syntax]
```grammar,lexer
RAW_STRING_LITERAL ->
      `r` `"` ^ RAW_STRING_CONTENT `"` SUFFIX?
    | `r` `#`{n:1..=255} ^ `"` RAW_STRING_CONTENT_HASHED `"` `#`{n} SUFFIX?

RAW_STRING_CONTENT -> (!`"` ~CR )*

RAW_STRING_CONTENT_HASHED -> (!(`"` `#`{n}) ~CR )*
```

r[lex.token.literal.str-raw.intro]
原始字符串字面量不处理任何转义。它们以字符 `U+0072`（`r`）开头，后跟少于 256 个字符 `U+0023`（`#`）以及一个 `U+0022`（双引号）字符。

r[lex.token.literal.str-raw.body]
*原始字符串体*可以包含除 `U+000D`（CR）之外的任意 Unicode 字符序列。它只会由另一个 `U+0022`（双引号）字符终止，且该字符后面必须跟着与起始 `U+0022`（双引号）字符之前相同数量的 `U+0023`（`#`）字符。

r[lex.token.literal.str-raw.content]
原始字符串体中包含的所有 Unicode 字符都表示其自身；字符 `U+0022`（双引号）（除非后面跟着至少与开始该原始字符串字面量时相同数量的 `U+0023`（`#`）字符）或 `U+005C`（``）没有任何特殊含义。

字符串字面量的示例：

```rust
"foo"; r"foo";                     // foo
"\"foo\""; r#""foo""#;             // "foo"

"foo #\"# bar";
r##"foo #"# bar"##;                // foo #"# bar

"\x52"; "R"; r"R";                 // R
"\\x52"; r"\x52";                  // \x52
```

### 字节和字节字符串字面量

r[lex.token.byte]
#### 字节字面量

r[lex.token.byte.syntax]
```grammar,lexer
BYTE_LITERAL ->
    `b'` ^ ( ASCII_FOR_CHAR | BYTE_ESCAPE )  `'` SUFFIX?

ASCII_FOR_CHAR -> ![`'` `\` LF CR TAB] ASCII

BYTE_ESCAPE ->
      `\x` HEX_DIGIT HEX_DIGIT
    | `\n` | `\r` | `\t` | `\\` | `\0` | `\'` | `\"`
```

r[lex.token.byte.intro]
*字节字面量*是单个 ASCII 字符（在 `U+0000` 到 `U+007F` 范围内）或单个*转义*，其前面是字符 `U+0062`（`b`）和 `U+0027`（单引号），后面跟着字符 `U+0027`。如果字符 `U+0027` 出现在字面量内部，则必须通过前置的 `U+005C`（``）字符进行*转义*。它等价于 `u8` 无符号 8 位整数*数字字面量*。

r[lex.token.str-byte]
#### 字节字符串字面量

r[lex.token.str-byte.syntax]
```grammar,lexer
BYTE_STRING_LITERAL ->
    `b"` ^ ( ASCII_FOR_STRING | BYTE_ESCAPE | STRING_CONTINUE )* `"` SUFFIX?

ASCII_FOR_STRING -> ![`"` `\` CR] ASCII
```

r[lex.token.str-byte.intro]
非原始*字节字符串字面量*是 ASCII 字符和*转义*的序列，其前面是字符 `U+0062`（`b`）和 `U+0022`（双引号），后面跟着字符 `U+0022`。如果字符 `U+0022` 出现在字面量内部，则必须通过前置的 `U+005C`（``）字符进行*转义*。另外，字节字符串字面量也可以是下面定义的*原始字节字符串字面量*。

r[lex.token.str-byte.linefeed]
字节字符串字面量中允许出现换行，换行由字符 `U+000A`（LF）表示。字符 `U+000D`（CR）不得出现在字节字符串字面量中。当未转义的 `U+005C` 字符（``）紧接在换行之前时，该换行不会出现在这个 token 所表示的字符串中。详见[字符串续行转义](expressions/literal-expr.md#string-continuation-escapes)。

r[lex.token.str-byte.escape]
字节字面量或非原始字节字符串字面量中还可以使用一些额外的*转义*。转义以 `U+005C`（``）开头，并继续为以下形式之一：

r[lex.token.str-byte.escape-byte]
* *字节转义*以 `U+0078`（`x`）开头，后跟恰好两个*十六进制数字*。它表示等于所给十六进制值的字节。

r[lex.token.str-byte.escape-whitespace]
* *空白转义*是字符 `U+006E`（`n`）、`U+0072`（`r`）或 `U+0074`（`t`）之一，分别表示字节值 `0x0A`（ASCII LF）、`0x0D`（ASCII CR）或 `0x09`（ASCII HT）。

r[lex.token.str-byte.escape-null]
* *空值转义*是字符 `U+0030`（`0`），表示字节值 `0x00`（ASCII NUL）。

r[lex.token.str-byte.escape-slash]
* *反斜杠转义*是字符 `U+005C`（``），它必须被转义才能表示其 ASCII 编码 `0x5C`。

r[lex.token.str-byte-raw]
#### 原始字节字符串字面量

r[lex.token.str-byte-raw.syntax]
```grammar,lexer
RAW_BYTE_STRING_LITERAL ->
      `br` `"` ^ RAW_BYTE_STRING_CONTENT `"` SUFFIX?
    | `br` `#`{n:1..=255} ^ `"` RAW_BYTE_STRING_CONTENT_HASHED `"` `#`{n} SUFFIX?

RAW_BYTE_STRING_CONTENT -> (!`"` ASCII_FOR_RAW )*

RAW_BYTE_STRING_CONTENT_HASHED -> (!(`"` `#`{n}) ASCII_FOR_RAW )*

ASCII_FOR_RAW -> !CR ASCII
```

r[lex.token.str-byte-raw.intro]
原始字节字符串字面量不处理任何转义。它们以字符 `U+0062`（`b`）开头，后跟 `U+0072`（`r`），再后跟少于 256 个字符 `U+0023`（`#`）以及一个 `U+0022`（双引号）字符。

r[lex.token.str-byte-raw.body]
*原始字符串体*可以包含除 `U+000D`（CR）之外的任意 ASCII 字符序列。它只会由另一个 `U+0022`（双引号）字符终止，且该字符后面必须跟着与起始 `U+0022`（双引号）字符之前相同数量的 `U+0023`（`#`）字符。原始字节字符串字面量不能包含任何非 ASCII 字节。

r[lex.token.literal.str-byte-raw.content]
原始字符串体中包含的所有字符都表示其 ASCII 编码；字符 `U+0022`（双引号）（除非后面跟着至少与开始该原始字符串字面量时相同数量的 `U+0023`（`#`）字符）或 `U+005C`（``）没有任何特殊含义。

字节字符串字面量的示例：

```rust
b"foo"; br"foo";                     // foo
b"\"foo\""; br#""foo""#;             // "foo"

b"foo #\"# bar";
br##"foo #"# bar"##;                 // foo #"# bar

b"\x52"; b"R"; br"R";                // R
b"\\x52"; br"\x52";                  // \x52
```

### C 字符串和原始 C 字符串字面量

r[lex.token.str-c]
#### C 字符串字面量

r[lex.token.str-c.syntax]
```grammar,lexer
C_STRING_LITERAL ->
    `c"` ^ (
        ~[`"` `\` CR NUL]
      | BYTE_ESCAPE _except `\0` or `\x00`_
      | UNICODE_ESCAPE _except `\u{0}`, `\u{00}`, …, `\u{000000}`_
      | STRING_CONTINUE
    )* `"` SUFFIX?
```

r[lex.token.str-c.intro]
*C 字符串字面量*是 Unicode 字符和*转义*的序列，其前面是字符 `U+0063`（`c`）和 `U+0022`（双引号），后面跟着字符 `U+0022`。如果字符 `U+0022` 出现在字面量内部，则必须通过前置的 `U+005C`（``）字符进行*转义*。另外，C 字符串字面量也可以是下面定义的*原始 C 字符串字面量*。

[CStr]: core::ffi::CStr

r[lex.token.str-c.null]
C 字符串会隐式地以字节 `0x00` 终止，因此 C 字符串字面量 `c""` 等价于从字节字符串字面量 `b"\x00"` 手动构造 `&CStr`。除隐式终止符之外，C 字符串中不允许出现字节 `0x00`。

r[lex.token.str-c.linefeed]
C 字符串字面量中允许出现换行，换行由字符 `U+000A`（LF）表示。字符 `U+000D`（CR）不得出现在 C 字符串字面量中。当未转义的 `U+005C` 字符（``）紧接在换行之前时，该换行不会出现在这个 token 所表示的字符串中。详见[字符串续行转义](expressions/literal-expr.md#string-continuation-escapes)。

r[lex.token.str-c.escape]
非原始 C 字符串字面量中还可以使用一些额外的*转义*。转义以 `U+005C`（``）开头，并继续为以下形式之一：

r[lex.token.str-c.escape-byte]
* *字节转义*以 `U+0078`（`x`）开头，后跟恰好两个*十六进制数字*。它表示等于所给十六进制值的字节。

r[lex.token.str-c.escape-unicode]
* *24 位码点转义*以 `U+0075`（`u`）开头，后跟由花括号 `U+007B`（`{`）和 `U+007D`（`}`）包围的至多六个*十六进制数字*。它表示等于所给十六进制值的 Unicode 码点，并编码为 UTF-8。

r[lex.token.str-c.escape-whitespace]
* *空白转义*是字符 `U+006E`（`n`）、`U+0072`（`r`）或 `U+0074`（`t`）之一，分别表示字节值 `0x0A`（ASCII LF）、`0x0D`（ASCII CR）或 `0x09`（ASCII HT）。

r[lex.token.str-c.escape-slash]
* *反斜杠转义*是字符 `U+005C`（``），它必须被转义才能表示其 ASCII 编码 `0x5C`。

r[lex.token.str-c.char-unicode]
C 字符串表示没有已定义编码的字节，但 C 字符串字面量可以包含高于 `U+007F` 的 Unicode 字符。这样的字符会被替换为该字符 UTF-8 表示中的字节。

以下 C 字符串字面量是等价的：

```rust
c"æ";        // 拉丁小写字母 AE (U+00E6)
c"\u{00E6}";
c"\xC3\xA6";
```

r[lex.token.str-c.edition2021]
> [!EDITION-2021]
> C 字符串字面量在 2021 edition 或更新 edition 中被接受。在更早的 edition 中，token `c""` 会被词法分析为 `c ""`。

r[lex.token.str-c-raw]
#### 原始 C 字符串字面量

r[lex.token.str-c-raw.syntax]
```grammar,lexer
RAW_C_STRING_LITERAL ->
      `cr` `"` ^ RAW_C_STRING_CONTENT `"` SUFFIX?
    | `cr` `#`{n:1..=255} ^ `"` RAW_C_STRING_CONTENT_HASHED `"` `#`{n} SUFFIX?

RAW_C_STRING_CONTENT -> (!`"` ~[CR NUL] )*

RAW_C_STRING_CONTENT_HASHED -> (!(`"` `#`{n}) ~[CR NUL] )*
```

r[lex.token.str-c-raw.intro]
原始 C 字符串字面量不处理任何转义。它们以字符 `U+0063`（`c`）开头，后跟 `U+0072`（`r`），再后跟少于 256 个字符 `U+0023`（`#`）以及一个 `U+0022`（双引号）字符。

r[lex.token.str-c-raw.body]
*原始 C 字符串体*可以包含除 `U+0000`（NUL）和 `U+000D`（CR）之外的任意 Unicode 字符序列。它只会由另一个 `U+0022`（双引号）字符终止，且该字符后面必须跟着与起始 `U+0022`（双引号）字符之前相同数量的 `U+0023`（`#`）字符。

r[lex.token.str-c-raw.content]
原始 C 字符串体中包含的所有字符都以 UTF-8 编码表示其自身。字符 `U+0022`（双引号）（除非后面跟着至少与开始该原始 C 字符串字面量时相同数量的 `U+0023`（`#`）字符）或 `U+005C`（``）没有任何特殊含义。

r[lex.token.str-c-raw.edition2021]
> [!EDITION-2021]
> 原始 C 字符串字面量在 2021 edition 或更新 edition 中被接受。在更早的 edition 中，token `cr""` 会被词法分析为 `cr ""`，而 `cr#""#` 会被词法分析为 `cr #""#`（这不符合语法）。

#### C 字符串和原始 C 字符串字面量的示例

```rust
c"foo"; cr"foo";                     // foo
c"\"foo\""; cr#""foo""#;             // "foo"

c"foo #\"# bar";
cr##"foo #"# bar"##;                 // foo #"# bar

c"\x52"; c"R"; cr"R";                // R
c"\\x52"; cr"\x52";                  // \x52
```

r[lex.token.literal.num]
### 数字字面量

*数字字面量*是*整数字面量*或*浮点字面量*。用于识别这两类字面量的语法是混合在一起的。

r[lex.token.literal.int]
#### 整数字面量

r[lex.token.literal.int.syntax]
```grammar,lexer
INTEGER_LITERAL ->
    ( BIN_LITERAL | OCT_LITERAL | HEX_LITERAL | DEC_LITERAL )
    ^ !RESERVED_FLOAT SUFFIX?

DEC_LITERAL -> DEC_DIGIT (DEC_DIGIT|`_`)*

BIN_LITERAL -> `0b` ^ `_`* BIN_DIGIT (BIN_DIGIT|`_`)* ![`e` `E` `2`-`9`]

OCT_LITERAL -> `0o` ^ `_`* OCT_DIGIT (OCT_DIGIT|`_`)* ![`e` `E` `8`-`9`]

HEX_LITERAL -> `0x` ^ `_`* HEX_DIGIT (HEX_DIGIT|`_`)*

BIN_DIGIT -> [`0`-`1`]

OCT_DIGIT -> [`0`-`7`]

DEC_DIGIT -> [`0`-`9`]

HEX_DIGIT -> [`0`-`9` `a`-`f` `A`-`F`]

RESERVED_FLOAT -> `.` !(`.` | `_` | XID_Start)
```

r[lex.token.literal.int.kind]
*整数字面量*有四种形式之一：

r[lex.token.literal.int.kind-dec]
* *十进制字面量*以*十进制数字*开头，并继续为*十进制数字*和*下划线*的任意混合。

r[lex.token.literal.int.kind-hex]
* *十六进制字面量*以字符序列 `U+0030` `U+0078`（`0x`）开头，并继续为十六进制数字和下划线的任意混合（其中至少有一个数字）。

r[lex.token.literal.int.kind-oct]
* *八进制字面量*以字符序列 `U+0030` `U+006F`（`0o`）开头，并继续为八进制数字和下划线的任意混合（其中至少有一个数字）。

r[lex.token.literal.int.kind-bin]
* *二进制字面量*以字符序列 `U+0030` `U+0062`（`0b`）开头，并继续为二进制数字和下划线的任意混合（其中至少有一个数字）。

r[lex.token.literal.int.suffix]
与任何字面量一样，整数字面量后面可以（立即、无任何空格地）跟随上文所述的后缀。后缀不得以 `e` 或 `E` 开头，因为那会被解释为浮点字面量的指数。关于这些后缀的效果，见[整数字面量表达式](expressions/literal-expr.md#integer-literal-expressions)。

作为字面量表达式被接受的整数字面量示例：

```rust
# #![allow(overflowing_literals)]
123;
123i32;
123u32;
123_u32;

0xff;
0xff_u8;
0x01_f32; // 整数 7986，而不是浮点数 1.0
0x01_e3;  // 整数 483，而不是浮点数 1000.0

0o70;
0o70_i16;

0b1111_1111_1001_0000;
0b1111_1111_1001_0000i64;
0b________1;

0usize;

// 这些值对其类型而言过大，但会被接受为字面量表达式。
128_i8;
256_u8;

// 这是整数字面量，会被接受为浮点数字面量表达式。
5f32;
```

注意，例如 `-1i8` 会被分析为两个 token：`-` 后跟 `1i8`。

不作为字面量表达式被接受的整数字面量示例：

```rust
# #[cfg(false)] {
0invalidSuffix;
123AFB43;
0b010a;
0xAB_CD_EF_GH;
0b1111_f32;
# }
```

r[lex.token.literal.int.invalid]
##### 无效整数字面量

r[lex.token.literal.int.invalid.intro]
某些整数字面量形式是无效的。为避免歧义，词法切分器会拒绝它们，而不是将它们拆分为多个独立 token。

```rust,compile_fail
0b0102;  // 这不是 `0b010` 后接 `2`。
0o1279;  // 这不是 `0o127` 后接 `9`。
0x80.0;  // 这不是 `0x80` 后接 `.` 和 `0`。
0b101e;  // 这不是带后缀的字面量，也不是 `0b101` 后接 `e`。
0b;      // 这不是整数字面量，也不是 `0` 后接 `b`。
0b_;     // 这不是整数字面量，也不是 `0` 后接 `b_`。
2em;     // 这不是带后缀的字面量，也不是 `2` 后接 `em`。
2.0em;   // 这不是带后缀的字面量，也不是 `2.0` 后接 `em`。
```

r[lex.token.literal.int.out-of-range]
无后缀二进制或八进制字面量后面若无间隔空白地跟随一个超出其进制范围的十进制数字，则是错误。

r[lex.token.literal.int.period]
无后缀二进制、八进制或十六进制字面量后面若无间隔空白地跟随一个句点字符，则是错误（句点后可跟随的内容受到与浮点字面量中相同的限制）。

r[lex.token.literal.int.exp]
无后缀二进制或八进制字面量后面若无间隔空白地跟随字符 `e` 或 `E`，则是错误。

r[lex.token.literal.int.empty-with-radix]
基数前缀后面在任意可选的前导下划线之后，若未跟随至少一个对其进制有效的数字，则是错误。

r[lex.token.literal.int.tuple-field]
#### 元组索引

r[lex.token.literal.int.tuple-field.syntax]
```grammar,lexer
TUPLE_INDEX -> DEC_LITERAL | BIN_LITERAL | OCT_LITERAL | HEX_LITERAL
```

r[lex.token.literal.int.tuple-field.intro]
元组索引用于引用[元组](types/tuple.md)、[元组结构体](items/structs.md)和[元组枚举变体](items/enumerations.md)的字段。

r[lex.token.literal.int.tuple-field.eq]
元组索引会直接与字面量 token 进行比较。元组索引从 `0` 开始，之后每个索引都按十进制值递增 `1`。因此，只有十进制值会匹配，并且该值不得带有任何额外的 `0` 前缀字符。

元组索引不得包含任何后缀（例如 `usize`）。

```rust,compile_fail
let example = ("dog", "cat", "horse");
let dog = example.0;
let cat = example.1;
// 以下示例无效。
let cat = example.01;  // ERROR 没有名为 `01` 的字段
let horse = example.0b10;  // ERROR 没有名为 `0b10` 的字段
let unicorn = example.0usize; // ERROR 元组索引上的后缀无效
let underscore = example.0_0; // ERROR 类型 `(&str, &str, &str)` 上没有字段 `0_0`
```

r[lex.token.literal.float]
#### 浮点字面量

r[lex.token.literal.float.syntax]
```grammar,lexer
FLOAT_LITERAL ->
      DEC_LITERAL (`.` DEC_LITERAL)? FLOAT_EXPONENT SUFFIX?
    | DEC_LITERAL `.` DEC_LITERAL SUFFIX?
    | DEC_LITERAL `.` !(`.` | `_` | XID_Start)

FLOAT_EXPONENT ->
    (`e`|`E`) ^ (`+`|`-`)? `_`* DEC_DIGIT (DEC_DIGIT|`_`)*
```

r[lex.token.literal.float.form]
*浮点字面量*有两种形式之一：

* *十进制字面量*后跟一个句点字符 `U+002E`（`.`）。其后可以可选地跟随另一个十进制字面量，并带有可选的*指数*。
* 单个*十进制字面量*后跟一个*指数*。

r[lex.token.literal.float.suffix]
与整数字面量一样，浮点字面量可以跟随后缀，只要后缀前的部分不以 `U+002E`（`.`）结尾。如果字面量不包含指数，则后缀不得以 `e` 或 `E` 开头。关于这些后缀的效果，见[浮点字面量表达式](expressions/literal-expr.md#floating-point-literal-expressions)。

作为字面量表达式被接受的浮点字面量示例：

```rust
123.0f64;
0.1f64;
0.1f32;
12E+99_f64;
let x: f64 = 2.;
```

最后一个示例不同，因为不能对以句点结尾的浮点字面量使用后缀语法。`2.f64` 会尝试在 `2` 上调用名为 `f64` 的方法。

注意，例如 `-1.0` 会被分析为两个 token：`-` 后跟 `1.0`。

不作为字面量表达式被接受的浮点字面量示例：

```rust
# #[cfg(false)] {
2.0f80;
2e5f80;
2e5e6;
2.0e5e6;
1.3e10u64;
# }
```

r[lex.token.literal.float.invalid-exponent]
浮点字面量的指数不含数字是错误。

```rust,compile_fail
2e;   // 这不是浮点数字面量，也不是 `2` 后接 `e`。
2.0e; // 这不是浮点数字面量，也不是 `2.0` 后接 `e`。
```

r[lex.token.life]
## 生命周期和循环标签

r[lex.token.life.syntax]
```grammar,lexer
LIFETIME_TOKEN ->
      RAW_LIFETIME
    | `'` IDENTIFIER_OR_KEYWORD !`'`

LIFETIME_OR_LABEL ->
      RAW_LIFETIME
    | `'` NON_KEYWORD_IDENTIFIER !`'`

RAW_LIFETIME ->
    `'r#` ^ IDENTIFIER_OR_KEYWORD !`'`

RESERVED_RAW_LIFETIME -> `'r#` (`_` | `crate` | `self` | `Self` | `super`) !(`'` | XID_Continue)
```

r[lex.token.life.intro]
生命周期参数和[循环标签](expressions/loop-expr.md#loop-labels)使用 LIFETIME_OR_LABEL token。任何 LIFETIME_TOKEN 都会被词法分析器接受，例如可以在宏中使用。

r[lex.token.life.raw.intro]
原始生命周期类似于普通生命周期，但其标识符带有 `r#` 前缀。（注意，`r#` 前缀不作为实际生命周期的一部分。）

r[lex.token.life.raw.allowed]
不同于普通生命周期，原始生命周期可以是任何严格关键字或保留关键字，但上面为 `RAW_LIFETIME` 列出的那些关键字除外。

r[lex.token.life.raw.reserved]
使用 [RESERVED_RAW_LIFETIME] token 是错误。

r[lex.token.life.raw.edition2021]
> [!EDITION-2021]
> 原始生命周期在 2021 edition 或更新 edition 中被接受。在更早的 edition 中，token `'r#lt` 会被词法分析为 `'r # lt`。

r[lex.token.punct]
## 标点

r[lex.token.punct.intro]
标点 token 用作运算符、分隔符以及语法中的其他部分。

r[lex.token.punct.syntax]
```grammar,lexer
PUNCTUATION ->
      `...`
    | `..=`
    | `<<=`
    | `>>=`
    | `!=`
    | `%=`
    | `&&`
    | `&=`
    | `*=`
    | `+=`
    | `-=`
    | `->`
    | `..`
    | `/=`
    | `::`
    | `<-`
    | `<<`
    | `<=`
    | `==`
    | `=>`
    | `>=`
    | `>>`
    | `^=`
    | `|=`
    | `||`
    | `!`
    | `#`
    | `$`
    | `%`
    | `&`
    | `(`
    | `)`
    | `*`
    | `+`
    | `,`
    | `-`
    | `.`
    | `/`
    | `:`
    | `;`
    | `<`
    | `=`
    | `>`
    | `?`
    | `@`
    | `[`
    | `]`
    | `^`
    | `{`
    | `|`
    | `}`
    | `~`
```

> [!NOTE]
> 关于标点字符用法的链接，见[语法索引](syntax-index.md#operators-and-punctuation)。

r[lex.token.delim]
## 定界符

括号标点用于语法的多个部分。开括号必须始终与闭括号配对。括号以及其中的 token 在[宏](macros-by-example.md)中称为“token 树”。三种括号是：

| 括号 | 类型 |
|---------|-----------------|
| `{` `}` | 花括号 |
| `[` `]` | 方括号 |
| `(` `)` | 圆括号 |

r[lex.token.reserved]
## 保留 token

r[lex.token.reserved.intro]
有几种 token 形式被保留以供将来使用或避免混淆。源输入匹配这些形式之一是错误。

r[lex.token.reserved.syntax]
```grammar,lexer
RESERVED_TOKEN ->
      RESERVED_GUARDED_STRING_LITERAL
    | RESERVED_POUNDS
    | RESERVED_RAW_IDENTIFIER
    | RESERVED_RAW_LIFETIME
    | RESERVED_TOKEN_DOUBLE_QUOTE
    | RESERVED_TOKEN_LIFETIME
    | RESERVED_TOKEN_POUND
    | RESERVED_TOKEN_SINGLE_QUOTE
```

r[lex.token.reserved-prefix]
## 保留前缀

r[lex.token.reserved-prefix.syntax]
```grammar,lexer
RESERVED_TOKEN_DOUBLE_QUOTE ->
    IDENTIFIER_OR_KEYWORD _except `b` or `c` or `r` or `br` or `cr`_ `"`

RESERVED_TOKEN_SINGLE_QUOTE ->
    IDENTIFIER_OR_KEYWORD _except `b`_ `'`

RESERVED_TOKEN_POUND ->
    IDENTIFIER_OR_KEYWORD _except `r` or `br` or `cr`_ `#`

RESERVED_TOKEN_LIFETIME ->
    `'` IDENTIFIER_OR_KEYWORD _except `r`_ `#`
```

r[lex.token.reserved-prefix.intro]
某些称为*保留前缀*的词法形式被保留以供将来使用。

r[lex.token.reserved-prefix.id]
如果源输入本来会被词法解释为非原始标识符（或关键字），并且其后立即跟随 `#`、`'` 或 `"` 字符（中间没有空白），则会被识别为保留前缀。

r[lex.token.reserved-prefix.raw-token]
注意，原始标识符、原始字符串字面量和原始字节字符串字面量可以包含 `#` 字符，但不会被解释为包含保留前缀。

r[lex.token.reserved-prefix.strings]
类似地，在原始字符串字面量、字节字面量、字节字符串字面量、原始字节字符串字面量、C 字符串字面量和原始 C 字符串字面量中使用的 `r`、`b`、`br`、`c` 和 `cr` 前缀，不会被解释为保留前缀。

r[lex.token.reserved-prefix.life]
如果源输入本来会被词法解释为非原始生命周期（或关键字），并且其后立即跟随 `#` 字符（中间没有空白），则会被识别为保留生命周期前缀。

r[lex.token.reserved-prefix.edition2021]
> [!EDITION-2021]
> 从 2021 edition 开始，保留前缀会由词法分析器报告为错误（特别是，它们不能传给宏）。
>
> 在 2021 edition 之前，保留前缀会被词法分析器接受，并解释为多个 token（例如，一个表示标识符或关键字的 token，后跟一个 `#` token）。
>
> 在所有 edition 中都被接受的示例：
> ```rust
> macro_rules! lexes {($($_:tt)*) => {}}
> lexes!{a #foo}
> lexes!{continue 'foo}
> lexes!{match "..." {}}
> lexes!{r#let#foo}         // 三个记号：r#let # foo
> lexes!{'prefix #lt}
> ```
>
> 在 2021 edition 之前被接受、但之后被拒绝的示例：
> ```rust,edition2018
> macro_rules! lexes {($($_:tt)*) => {}}
> lexes!{a#foo}
> lexes!{continue'foo}
> lexes!{match"..." {}}
> lexes!{'prefix#lt}
> ```

r[lex.token.reserved-guards]
## 保留防护

r[lex.token.reserved-guards.syntax]
```grammar,lexer
RESERVED_GUARDED_STRING_LITERAL -> `#`+ STRING_LITERAL

RESERVED_POUNDS -> `#`{2..}
```

r[lex.token.reserved-guards.intro]
保留防护是为将来使用而保留的语法；如果使用，将产生编译错误。

r[lex.token.reserved-guards.string-literal]
*保留带防护字符串字面量*是由一个或多个 `U+0023`（`#`）后面立即跟随一个 [STRING_LITERAL] 所构成的 token。

r[lex.token.reserved-guards.pounds]
*保留井号序列*是由两个或更多 `U+0023`（`#`）构成的 token。

r[lex.token.reserved-guards.edition2024]
> [!EDITION-2024]
> 在 2024 edition 之前，保留防护会被词法分析器接受，并解释为多个 token。例如，`#"foo"#` 形式会被解释为三个 token。`##` 会被解释为两个 token。

[Floating-point literal expressions]: expressions/literal-expr.md#floating-point-literal-expressions
[identifier]: identifiers.md
[Integer literal expressions]: expressions/literal-expr.md#integer-literal-expressions
[keywords]: keywords.md
[literal expressions]: expressions/literal-expr.md
[loop labels]: expressions/loop-expr.md#loop-labels
[macros]: macros-by-example.md
[String continuation escapes]: expressions/literal-expr.md#string-continuation-escapes
[syntax index]: syntax-index.md#operators-and-punctuation
[tuple structs]: items/structs.md
[tuple enum variants]: items/enumerations.md
[tuples]: types/tuple.md
