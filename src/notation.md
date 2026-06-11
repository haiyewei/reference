r[notation]
# 记法

r[notation.grammar]
## 语法

r[notation.grammar.syntax]

以下记号用于 _Lexer_ 和 _Syntax_ 语法片段：

| 记法 | 示例 | 含义 |
|-------------------|-------------------------------|-------------------------------------------|
| CAPITAL | KW_IF, INTEGER_LITERAL | 词法分析器产生的 token |
| _ItalicCamelCase_ | _LetStatement_, _Item_ | 语法产生式 |
| `string` | `x`, `while`, `*` | 精确的字符 |
| x<sup>?</sup> | `pub`<sup>?</sup> | 可选项 |
| x<sup>\*</sup> | _OuterAttribute_<sup>\*</sup> | x 的 0 次或多次重复 |
| x<sup>+</sup> | _MacroMatch_<sup>+</sup> | x 的 1 次或多次重复 |
| x<sup>a..b</sup> | HEX_DIGIT<sup>1..6</sup> | x 重复 a 到 b 次，不包含 b |
| x<sup>a..=b</sup> | HEX_DIGIT<sup>1..=5</sup> | x 重复 a 到 b 次，包含 b |
| x<sup>n:a..=b</sup> | `#`<sup>n:1..=255</sup> | x 重复 a 到 b 次（包含 b），并将计数绑定到名称 n |
| x<sup>n</sup> | `#`<sup>n</sup> | x 重复此前带标签重复绑定到 n 的次数 |
| Rule1 Rule2 | `fn` _Name_ _Parameters_ | 规则按顺序组成的序列 |
| \ |  | `u8` \ | `u16`, Block \ | 项 | 其中之一 |
| ! | !COMMENT | 若该表达式未在当前位置随后出现则匹配，且不消耗任何输入 |
| \[ \] | \[`b` `B`\] | 列出的任意字符 |
| \[ - \] | \[`a`-`z`] | 范围内的任意字符 |
| ~\[ \] | ~\[`b` `B`\] | 除列出字符之外的任意字符 |
| ~`string` | ~`\n`, ~`*/` | 除该序列之外的任意字符 |
| ( ) | (`,` _Parameter_)<sup>?</sup> | 将项分组 |
| ^ | `b'` ^ ASCII_FOR_CHAR | 序列剩余部分必须匹配，否则解析无条件失败（[hard cut 运算符](notation.md#the-hard-cut-operator)） |
| U+xxxx..xxxxxx | U+0060 | 单个 Unicode 字符 |
| \<text\> | \<除 CR 外的任意 ASCII 字符\> | 应匹配内容的英文描述 |
| Rule <sub>suffix</sub> | IDENTIFIER_OR_KEYWORD <sub>_except `crate`_</sub> | 对前一条规则的修饰 |
| // 注释。 | // 单行注释。 | 延伸到行尾的注释。 |

序列的优先级高于 `|` 交替。

r[notation.grammar.cut]
### hard cut 运算符

该语法使用有序交替：解析器从左到右尝试各个备选，并采用第一个匹配项。如果某个备选在序列中途失败，解析器通常会回溯并尝试下一个备选。cut 运算符 (`^`) 会阻止这种行为。一旦序列中 `^` 左侧的每个表达式都已匹配，序列剩余部分就必须匹配，否则解析会无条件失败。

Mizushima 等人将 [cut 运算符](https://kmizu.github.io/papers/paste513-mizushima.pdf) 引入解析表达式语法。在 PEG 文献中，_soft cut_ 只阻止在直接包围它的有序选择内回溯，外层选择仍可恢复。_hard cut_ 会阻止越过 cut 点的一切回溯；失败即为确定结果。本语法中使用的 `^` 是 hard cut。

hard cut 运算符是必要的，因为 Rust 中有些 token 以一个本身也是有效 token 的前缀开头。例如，`c"` 是 C 字符串字面量的开头，但单独的 `c` 是有效标识符。如果没有 cut，当 `c"\0"` 作为 C 字符串字面量词法分析失败时（因为 C 字符串中不允许空字节），解析器可能会回溯，并将其词法分析为两个 token：标识符 `c` 和字符串字面量 `"\0"`。[`c"` 之后的 cut](tokens.md#r-lex.token.str-c.syntax) 会阻止这种情况：一旦识别出起始定界符，解析器就不能返回。同样的推理也适用于[字节字面量](tokens.md#r-lex.token.byte.syntax)、[字节字符串字面量](tokens.md#r-lex.token.str-byte.syntax)、[原始字符串字面量](tokens.md#r-lex.token.literal.str-raw.syntax)，以及其他以前缀开头且该前缀本身也是有效 token 的字面量。

r[notation.grammar.string-tables]
### 字符串表产生式

Some rules in the grammar &mdash; notably [unary operators], [binary operators], and [keywords] &mdash; are given in a simplified form: as a listing of printable strings. These cases form a subset of the rules regarding the [token][tokens] rule, and are assumed to be the result of a lexical-analysis phase feeding the parser, driven by a <abbr title="Deterministic Finite Automaton">DFA</abbr>, operating over the disjunction of all such string table entries.

当这样的等宽字体字符串出现在语法内部时，它就是对此类字符串表产生式中单个成员的隐式引用。更多信息见 [token](tokens.md)。

r[notation.grammar.visualizations]
### 语法可视化

每个语法块下方都有一个按钮，用于切换显示[语法图](https://en.wikipedia.org/wiki/Syntax_diagram)。方形元素是非终结符规则，圆角矩形是终结符。

[binary operators]: expressions/operator-expr.md#arithmetic-and-logical-binary-operators
[byte literals]: tokens.md#r-lex.token.byte.syntax
[byte string literals]: tokens.md#r-lex.token.str-byte.syntax
[cut after `c"`]: tokens.md#r-lex.token.str-c.syntax
[cut operator paper]: https://kmizu.github.io/papers/paste513-mizushima.pdf
[hard cut operator]: notation.md#the-hard-cut-operator
[keywords]: keywords.md
[raw string literals]: tokens.md#r-lex.token.literal.str-raw.syntax
[syntax diagram]: https://en.wikipedia.org/wiki/Syntax_diagram
[tokens]: tokens.md
[unary operators]: expressions/operator-expr.md#borrow-operators
