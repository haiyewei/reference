r[input]
# 输入格式

r[input.syntax]
```grammar,lexer
CHAR -> [U+0000-U+D7FF U+E000-U+10FFFF] // a Unicode scalar value

ASCII -> [U+0000-U+007F]

NUL -> U+0000

EOF -> !CHAR  // End of file or input
```

r[input.intro]
本章描述如何将源文件解释为一系列 token。

关于程序如何组织成文件，参见 [crate 和源文件](crates-and-source-files.md)。

r[input.encoding]
## 源码编码

r[input.encoding.utf8]
每个源文件都被解释为一个以 UTF-8 编码的 Unicode 字符序列。

r[input.encoding.invalid]
如果文件不是有效的 UTF-8，则为错误。

r[input.byte-order-mark]
## 字节顺序标记移除

如果序列中的第一个字符是 `U+FEFF` ([BYTE ORDER MARK](https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8))，则移除它。

r[input.crlf]
## CRLF 规范化

每一对由 `U+000D` (CR) 后紧跟 `U+000A` (LF) 组成的字符都会替换为单个 `U+000A` (LF)。此操作只发生一次，而非反复进行，因此在规范化之后，输入中仍可能存在 `U+000D` (CR) 后紧跟 `U+000A` (LF) 的情况（例如原始输入包含 "CR CR LF LF" 时）。

字符 `U+000D` (CR) 的其他出现位置会保留原样（它们会被视为 [空白](whitespace.md)）。

r[input.shebang]
## Shebang 移除

r[input.shebang.removal]
如果存在 [shebang](shebang.md)，则会从输入序列中移除它（因而会忽略它）。

r[input.tokenization]
## 词法单元化

然后，得到的字符序列会按照本章其余部分的描述转换为词法单元。

> [!NOTE]
> 标准库 [`include!`] 宏会对其读取的文件应用以下转换：
>
> - 字节顺序标记移除。
> - CRLF 规范化。
> - 在项上下文中调用时移除 shebang（区别于表达式或语句上下文）。
>
> [`include_str!`] 和 [`include_bytes!`] 宏不会应用这些转换。

[BYTE ORDER MARK]: https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8
[Crates and source files]: crates-and-source-files.md
[shebang]: shebang.md
[whitespace]: whitespace.md
