r[lex.whitespace]
# 空白

r[whitespace.syntax]
```grammar,lexer
WHITESPACE ->
      U+0009 // Horizontal tab, `'\t'`
    | U+000A // Line feed, `'\n'`
    | U+000B // Vertical tab
    | U+000C // Form feed
    | U+000D // Carriage return, `'\r'`
    | U+0020 // Space, `' '`
    | U+0085 // Next line
    | U+200E // Left-to-right mark
    | U+200F // Right-to-left mark
    | U+2028 // Line separator
    | U+2029 // Paragraph separator

TAB -> U+0009 // Horizontal tab, `'\t'`

LF -> U+000A  // Line feed, `'\n'`

CR -> U+000D  // Carriage return, `'\r'`
```

r[lex.whitespace.intro]
空白是任何非空字符串，且该字符串仅包含具有 [`Pattern_White_Space`](https://www.unicode.org/reports/tr31/) Unicode 属性的字符。

r[lex.whitespace.token-sep]
Rust 是一种“自由格式”语言，这意味着所有形式的空白在语法中仅用于分隔 _token_，而没有语义意义。

r[lex.whitespace.replacement]
如果将每个空白元素替换为任何其他合法的空白元素，例如单个空格字符，Rust 程序的含义保持不变。

[`Pattern_White_Space`]: https://www.unicode.org/reports/tr31/
