<div class="rule" id="r-notation"><a class="rule-link" href="#r-notation" title="notation"><span>[notation]</span></a>
</div>

# 记法

<div class="rule" id="r-notation.grammar"><a class="rule-link" href="#r-notation.grammar" title="notation.grammar"><span>[notation<wbr>.grammar]</span></a>
</div>

## 语法

<div class="rule" id="r-notation.grammar.syntax"><a class="rule-link" href="#r-notation.grammar.syntax" title="notation.grammar.syntax"><span>[notation<wbr>.grammar<wbr>.syntax]</span></a>
</div>

以下记号用于 _Lexer_ 和 _Syntax_ 语法片段：

|记法|示例|含义|
|--|--|--|
|CAPITAL|KW_IF, INTEGER_LITERAL|词法分析器产生的 token|
|_ItalicCamelCase_|_LetStatement_, _Item_|语法产生式|
|`string`|`x`, `while`, `*`|精确的字符|
|x<sup>?</sup>|`pub`<sup>?</sup>|可选项|
|x<sup>\*</sup>|_OuterAttribute_<sup>\*</sup>|x 的 0 次或多次重复|
|x<sup>+</sup>|_MacroMatch_<sup>+</sup>|x 的 1 次或多次重复|
|x<sup>a..b</sup>|HEX_DIGIT<sup>1..6</sup>|x 重复 a 到 b 次，不包含 b|
|x<sup>a..=b</sup>|HEX_DIGIT<sup>1..=5</sup>|x 重复 a 到 b 次，包含 b|
|x<sup>n:a..=b</sup>|`#`<sup>n:1..=255</sup>|x 重复 a 到 b 次（包含 b），并将计数绑定到名称 n|
|x<sup>n</sup>|`#`<sup>n</sup>|x 重复此前带标签重复绑定到 n 的次数|
|Rule1 Rule2|`fn` _Name_ _Parameters_|规则按顺序组成的序列|
|\||`u8` \| `u16`, Block \| Item|其中之一|
|!|!COMMENT|若该表达式未在当前位置随后出现则匹配，且不消耗任何输入|
|\[ \]|\[`b` `B`\]|列出的任意字符|
|\[ - \]|\[`a`\-`z`\]|范围内的任意字符|
|~\[ \]|~\[`b` `B`\]|除列出字符之外的任意字符|
|~`string`|~`\n`, ~`*/`|除该序列之外的任意字符|
|( )|(`,` _Parameter_)<sup>?</sup>|将项分组|
|^|`b'` ^ ASCII_FOR_CHAR|序列剩余部分必须匹配，否则解析无条件失败（[hard cut 运算符](notation.md#the-hard-cut-operator)）|
|U+xxxx..xxxxxx|U+0060|单个 Unicode 字符|
|\<text\>|\<除 CR 外的任意 ASCII 字符\>|应匹配内容的英文描述|
|Rule <sub>suffix</sub>|IDENTIFIER_OR_KEYWORD <sub>_except `crate`_</sub>|对前一条规则的修饰|
|// 注释。|// 单行注释。|延伸到行尾的注释。|

序列的优先级高于 `|` 交替。

<div class="rule" id="r-notation.grammar.cut"><a class="rule-link" href="#r-notation.grammar.cut" title="notation.grammar.cut"><span>[notation<wbr>.grammar<wbr>.cut]</span></a>
</div>

### hard cut 运算符

该语法使用有序交替：解析器从左到右尝试各个备选，并采用第一个匹配项。如果某个备选在序列中途失败，解析器通常会回溯并尝试下一个备选。cut 运算符 (`^`) 会阻止这种行为。一旦序列中 `^` 左侧的每个表达式都已匹配，序列剩余部分就必须匹配，否则解析会无条件失败。

Mizushima 等人将 [cut 运算符](https://kmizu.github.io/papers/paste513-mizushima.pdf) 引入解析表达式语法。在 PEG 文献中，_soft cut_ 只阻止在直接包围它的有序选择内回溯，外层选择仍可恢复。_hard cut_ 会阻止越过 cut 点的一切回溯；失败即为确定结果。本语法中使用的 `^` 是 hard cut。

hard cut 运算符是必要的，因为 Rust 中有些 token 以一个本身也是有效 token 的前缀开头。例如，`c"` 是 C 字符串字面量的开头，但单独的 `c` 是有效标识符。如果没有 cut，当 `c"\0"` 作为 C 字符串字面量词法分析失败时（因为 C 字符串中不允许空字节），解析器可能会回溯，并将其词法分析为两个 token：标识符 `c` 和字符串字面量 `"\0"`。[`c"` 之后的 cut](tokens.md#r-lex.token.str-c.syntax) 会阻止这种情况：一旦识别出起始定界符，解析器就不能返回。同样的推理也适用于[字节字面量](tokens.md#r-lex.token.byte.syntax)、[字节字符串字面量](tokens.md#r-lex.token.str-byte.syntax)、[原始字符串字面量](tokens.md#r-lex.token.literal.str-raw.syntax)，以及其他以前缀开头且该前缀本身也是有效 token 的字面量。

<div class="rule" id="r-notation.grammar.string-tables"><a class="rule-link" href="#r-notation.grammar.string-tables" title="notation.grammar.string-tables"><span>[notation<wbr>.grammar<wbr>.string-tables]</span></a>
</div>

### 字符串表产生式

语法中的某些规则，尤其是[一元运算符](expressions/operator-expr.md#borrow-operators)、[二元运算符](expressions/operator-expr.md#arithmetic-and-logical-binary-operators)和[关键字](keywords.md)，以一种简化形式给出：即可打印字符串列表。这些情况构成关于 [token](tokens.md) 规则的规则子集，并被假定为词法分析阶段向解析器供给的结果；该阶段由在所有此类字符串表项的析取上运行的 <abbr title="Deterministic Finite
Automaton">DFA</abbr> 驱动。

当这样的等宽字体字符串出现在语法内部时，它就是对此类字符串表产生式中单个成员的隐式引用。更多信息见 [token](tokens.md)。

<div class="rule" id="r-notation.grammar.visualizations"><a class="rule-link" href="#r-notation.grammar.visualizations" title="notation.grammar.visualizations"><span>[notation<wbr>.grammar<wbr>.visualizations]</span></a>
</div>

### 语法可视化

每个语法块下方都有一个按钮，用于切换显示[语法图](https://en.wikipedia.org/wiki/Syntax_diagram)。方形元素是非终结符规则，圆角矩形是终结符。