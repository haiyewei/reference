r[macro.ambiguity]
# 附录：宏 follow 集歧义形式化规约

本页记录 [Macros By Example](macros-by-example.md) 的 follow 规则的形式化规约。它们最初在 [RFC 550](https://github.com/rust-lang/rfcs/blob/master/text/0550-macro-future-proofing.md) 中规定，本文大部分内容复制自该 RFC，并在后续 RFC 中有所扩展。

r[macro.ambiguity.convention]
## 定义与约定

r[macro.ambiguity.convention.defs]
  - `macro`：源代码中任何可作为 `foo!(...)` 调用的东西。
  - `MBE`：macro-by-example，即由 `macro_rules` 定义的宏。
  - `matcher`：`macro_rules` 调用中某条规则的左侧，或其子部分。
  - `macro parser`：Rust 解析器中的一段代码，它会使用从所有 matcher 派生出的文法来解析输入。
  - `fragment`：给定 matcher 会接受（或“匹配”）的一类 Rust 语法。
  - `repetition`：遵循规则重复模式的 fragment
  - `NT`：非终结符，即可以出现在 matcher 中的各种“元变量”或 repetition matcher，在 MBE 语法中用前导 `$` 字符指定。
  - `simple NT`：“元变量”非终结符（下文会进一步讨论）。
  - `complex NT`：进行重复匹配的非终结符，通过 repetition operator（`*`、`+`、`?`）指定。
  - `token`：matcher 的原子元素；即标识符、运算符、开/闭分隔符，*以及* simple NT。
  - `token tree`：由 token（叶子）、complex NT 和 token tree 的有限序列形成的树结构。
  - `delimiter token`：用于分隔一个 fragment 的结尾和下一个 fragment 的开头的 token。
  - `separator token`：complex NT 中可选的 delimiter token，用于分隔匹配到的 repetition 中每一对元素。
  - `separated complex NT`：拥有自身 separator token 的 complex NT。
  - `delimited sequence`：token tree 的序列，其序列开头和结尾带有适当的开分隔符和闭分隔符。
  - `empty fragment`：分隔 token 的不可见 Rust 语法类别，即空白，或（在某些词法上下文中）空 token 序列。
  - `fragment specifier`：simple NT 中指定该 NT 接受哪种 fragment 的标识符。
  - `language`：上下文无关语言。

示例：

```rust,compile_fail
macro_rules! i_am_an_mbe {
    (start $foo:expr $($i:ident),* end) => ($foo)
}
```

r[macro.ambiguity.convention.matcher]
`(start $foo:expr $($i:ident),* end)` 是一个 matcher。整个 matcher 是一个 delimited sequence（带有开分隔符 `(` 和闭分隔符 `)`），而 `$foo` 和 `$i` 是 simple NT，其各自的 fragment specifier 分别为 `expr` 和 `ident`。

r[macro.ambiguity.convention.complex-nt]
`$(i:ident),*` *也是* 一个 NT；它是一个 complex NT，匹配由逗号分隔的标识符 repetition。`,` 是该 complex NT 的 separator token；它出现在匹配到的 fragment 中每一对元素（如果有）之间。

complex NT 的另一个例子是 `$(hi $e:expr ;)+`，它匹配形式为 `hi <expr>; hi <expr>; ...` 的任何 fragment，其中 `hi <expr>;` 至少出现一次。注意，这个 complex NT 没有专用的 separator token。

（注意，Rust 的解析器会确保 delimited sequence 总是以 token tree 结构的正确嵌套和开/闭分隔符的正确匹配出现。）

r[macro.ambiguity.convention.vars]
我们通常使用变量 "M" 表示 matcher，变量 "t" 和 "u" 表示任意单个 token，变量 "tt" 和 "uu" 表示任意 token tree。（"tt" 的使用确实会因其还作为 fragment specifier 而带来潜在歧义；但从上下文可以清楚看出所指的是哪种解释。）

r[macro.ambiguity.convention.set]
"SEP" 的取值范围是 separator token，"OP" 的取值范围是 repetition operator `*`、`+` 和 `?`，"OPEN"/"CLOSE" 的取值范围是围绕 delimited sequence 的匹配 token 对（例如 `[` 和 `]`）。

r[macro.ambiguity.convention.sequence-vars]
希腊字母 "α" "β" "γ" "δ" 表示可能为空的 token-tree 序列。（不过，希腊字母 "ε"（epsilon）在此表述中具有特殊角色，并不表示 token-tree 序列。）

  * 这种希腊字母约定通常只在序列的存在属于技术细节时使用；特别是，当我们希望 *强调* 正在操作 token-tree 序列时，会使用 "tt ..." 这一记号表示该序列，而不是使用希腊字母。

注意，matcher 只不过是一个 token tree。如上所述，"simple NT" 是元变量 NT；因此它不是 repetition。例如，`$foo:ty` 是 simple NT，但 `$($foo:ty)+` 是 complex NT。

还要注意，在此形式化体系的上下文中，术语 "token" 通常 *包括* simple NT。

最后，读者最好记住，按照此形式化体系的定义，没有 simple NT 会匹配空片段，同样也没有 token 会匹配 Rust 语法中的空片段。（因此，*唯一* 能够匹配空片段的 NT 是 complex NT。）这实际上并不正确，因为 `vis` matcher 可以匹配空片段。因此，出于形式化体系的目的，我们会把 `$v:vis` 视为实际上是 `$($v:vis)?`，并要求该 matcher 匹配空片段。

r[macro.ambiguity.invariant]
### matcher 不变式

r[macro.ambiguity.invariant.list]
要成为有效 matcher，必须满足以下三个不变式。FIRST 和 FOLLOW 的定义稍后描述。

1.  对于 matcher `M` 中任意两个连续的 token tree 序列（即 `M = ... tt uu ...`）且 `uu ...` 非空时，必须有 FOLLOW(`... tt`) ∪ {ε} ⊇ FIRST(`uu ...`)。
1.  对于 matcher 中的任意 separated complex NT，`M = ... $(tt ...) SEP OP ...`，必须有 `SEP` ∈ FOLLOW(`tt ...`)。
1.  对于 matcher 中的 unseparated complex NT，`M = ... $(tt ...) OP ...`，如果 OP = `*` 或 `+`，则必须有 FOLLOW(`tt ...`) ⊇ FIRST(`tt ...`)。

r[macro.ambiguity.invariant.follow-matcher]
第一个不变式说明，matcher 之后出现的任何实际 token（如果有）都必须位于预先确定的 follow 集中。这确保合法的宏定义即使在语言加入新的语法形式之后，也会继续对 `... tt` 在何处结束以及 `uu ...` 在何处开始作出相同判断。

r[macro.ambiguity.invariant.separated-complex-nt]
第二个不变式说明，separated complex NT 必须使用一个 separator token，且该 token 是该 NT 内部内容的预定 follow 集的一部分。这确保合法的宏定义即使在语言加入新的语法形式之后，也会继续把输入 fragment 解析为相同的 `tt ...` delimited sequence。

r[macro.ambiguity.invariant.unseparated-complex-nt]
第三个不变式说明，当 complex NT 可以匹配同一事物的两个或更多副本且它们之间没有分隔时，按照第一个不变式，必须允许它们彼此相邻放置。这个不变式还要求它们为非空，从而消除一种可能的歧义。

**注意：由于历史疏忽以及对该行为存在大量依赖，第三个不变式目前尚未强制执行。今后如何处理这一点目前尚未决定。不遵守该行为的宏可能会在 Rust 的未来 edition 中变为无效。参见 [tracking issue](https://github.com/rust-lang/rust/issues/56575)。**

r[macro.ambiguity.sets]
### FIRST 和 FOLLOW 的非正式说明

r[macro.ambiguity.sets.intro]
给定 matcher M 映射到三个集合：FIRST(M)、LAST(M) 和 FOLLOW(M)。

这三个集合都由 token 组成。FIRST(M) 和 LAST(M) 还可以包含一个特殊的非 token 元素 ε（"epsilon"），表示 M 可以匹配空片段。（但 FOLLOW(M) 始终只是 token 集合。）

非正式地说：

r[macro.ambiguity.sets.first]
  * FIRST(M)：收集把 fragment 与 M 匹配时可能首先使用的 token。

r[macro.ambiguity.sets.last]
  * LAST(M)：收集把 fragment 与 M 匹配时可能最后使用的 token。

r[macro.ambiguity.sets.follow]
  * FOLLOW(M)：允许紧跟在某个由 M 匹配的 fragment 之后的 token 集合。

    换言之：t ∈ FOLLOW(M) 当且仅当存在（可能为空的）token 序列 α、β、γ、δ，使得：

      * M 匹配 β，

      * t 匹配 γ，并且

      * 拼接结果 α β γ δ 是可解析的 Rust 程序。

r[macro.ambiguity.sets.universe]
我们使用简写 ANYTOKEN 表示所有 token（包括 simple NT）的集合。例如，如果在 matcher M 之后任何 token 都是合法的，则 FOLLOW(M) = ANYTOKEN。

（为了检验对上述非正式描述的理解，读者此时可以先跳到 [FIRST/LAST 的示例](#examples-of-first-and-last)，再阅读它们的形式化定义。）

r[macro.ambiguity.sets.def]
### FIRST、LAST

r[macro.ambiguity.sets.def.intro]
下面是 FIRST 和 LAST 的形式化归纳定义。

r[macro.ambiguity.sets.def.notation]
"A ∪ B" 表示集合并集，"A ∩ B" 表示集合交集，"A \ B" 表示集合差集（即 A 中所有不在 B 中出现的元素）。

r[macro.ambiguity.sets.def.first]
#### FIRST

r[macro.ambiguity.sets.def.first.intro]
FIRST(M) 通过对序列 M 及其第一个 token-tree（如果有）的结构分类讨论来定义：

r[macro.ambiguity.sets.def.first.epsilon]
  * 如果 M 是空序列，则 FIRST(M) = { ε }，

r[macro.ambiguity.sets.def.first.token]
  * 如果 M 以 token t 开头，则 FIRST(M) = { t }，

    （注意：这涵盖 M 以 delimited token-tree 序列开头的情况，`M = OPEN tt ... CLOSE ...`，此时 `t = OPEN`，因此 FIRST(M) = { `OPEN` }。）

    （注意：这关键依赖于没有 simple NT 会匹配空片段这一性质。）

r[macro.ambiguity.sets.def.first.complex]
  * 否则，M 是以 complex NT 开头的 token-tree 序列：`M = $( tt ... ) OP α`，或 `M = $( tt ... ) SEP OP α`，（其中 `α` 是 matcher 其余部分的 token tree 序列，可能为空）。

      * 令 SEP_SET(M) = { SEP }，如果 SEP 存在且 ε ∈ FIRST(`tt ...`)；否则 SEP_SET(M) = {}。

  * 令 ALPHA_SET(M) = FIRST(`α`)，如果 OP = `*` 或 `?`；如果 OP = `+`，则 ALPHA_SET(M) = {}。
  * FIRST(M) = (FIRST(`tt ...`) \ {ε}) ∪ SEP_SET(M) ∪ ALPHA_SET(M)。

complex NT 的定义值得作一些说明。SEP_SET(M) 定义了 separator 可能是 M 的有效首 token 的可能性，这发生在定义了 separator 且重复 fragment 可能为空时。ALPHA_SET(M) 定义了 complex NT 可能为空的可能性，意味着 M 的有效首 token 是后续 token-tree 序列 `α` 的首 token。使用 `*` 或 `?` 时会出现这种情况，因为可能存在零次重复。理论上，如果 `+` 与可能为空的 repeating fragment 一起使用，也可能出现这种情况，但第三个不变式禁止这样做。

由此可见，FIRST(M) 显然可以包含 SEP_SET(M) 或 ALPHA_SET(M) 中的任何 token；如果 complex NT 匹配结果非空，那么 FIRST(`tt ...`) 中作为起始的任何 token 也可以起作用。最后要考虑的是 ε。SEP_SET(M) 和 FIRST(`tt ...`) \ {ε} 不能包含 ε，但 ALPHA_SET(M) 可以。因此，当且仅当 ε ∈ ALPHA_SET(M) 时，此定义才允许 M 接受 ε。这是正确的，因为在 complex NT 情况下，要让 M 接受 ε，complex NT 和 α 都必须接受它。如果 OP = `+`，意味着 complex NT 不能为空，那么根据定义 ε ∉ ALPHA_SET(M)。否则，complex NT 可以接受零次重复，于是 ALPHA_SET(M) = FOLLOW(`α`)。所以这个定义对于 \varepsilon 也是正确的。

r[macro.ambiguity.sets.def.last]
#### LAST

r[macro.ambiguity.sets.def.last.intro]
LAST(M) 通过对 M 本身（一个 token-tree 序列）分类讨论来定义：

r[macro.ambiguity.sets.def.last.empty]
  * 如果 M 是空序列，则 LAST(M) = { ε }

r[macro.ambiguity.sets.def.last.token]
  * 如果 M 是单个 token t，则 LAST(M) = { t }

r[macro.ambiguity.sets.def.last.rep-star]
  * 如果 M 是重复零次或多次的单个 complex NT，`M = $( tt ... ) *`，或 `M = $( tt ... ) SEP *`

      * 如果 SEP 存在，则令 sep_set = { SEP }；否则 sep_set = {}。

      * 如果 ε ∈ LAST(`tt ...`)，则 LAST(M) = LAST(`tt ...`) ∪ sep_set

      * 否则，序列 `tt ...` 必须非空；LAST(M) = LAST(`tt ...`) ∪ {ε}。

r[macro.ambiguity.sets.def.last.rep-plus]
  * 如果 M 是重复一次或多次的单个 complex NT，`M = $( tt ... ) +`，或 `M = $( tt ... ) SEP +`

      * 如果 SEP 存在，则令 sep_set = { SEP }；否则 sep_set = {}。

      * 如果 ε ∈ LAST(`tt ...`)，则 LAST(M) = LAST(`tt ...`) ∪ sep_set

      * 否则，序列 `tt ...` 必须非空；LAST(M) = LAST(`tt ...`)

r[macro.ambiguity.sets.def.last.rep-question]
  * 如果 M 是重复零次或一次的单个 complex NT，`M = $( tt ...) ?`，则 LAST(M) = LAST(`tt ...`) ∪ {ε}。

r[macro.ambiguity.sets.def.last.delim]
  * 如果 M 是 delimited token-tree 序列 `OPEN tt ... CLOSE`，则 LAST(M) = { `CLOSE` }。

r[macro.ambiguity.sets.def.last.sequence]
  * 如果 M 是非空 token-tree 序列 `tt uu ...`，

      * 如果 ε ∈ LAST(`uu ...`)，则 LAST(M) = LAST(`tt`) ∪ (LAST(`uu ...`) \ { ε })。

      * 否则，序列 `uu ...` 必须非空；此时 LAST(M) = LAST(`uu ...`)。

### FIRST 和 LAST 的示例

下面是 FIRST 和 LAST 的一些示例。（请特别注意，特殊元素 ε 是如何基于输入各部分之间的相互作用被引入和消除的。）

第一个示例以树结构呈现，用来详细说明 matcher 的分析是如何组合起来的。（一些较简单的子树已被省略。）

```text
INPUT:  $(  $d:ident   $e:expr   );*    $( $( h )* );*    $( f ; )+   g
            ~~~~~~~~   ~~~~~~~                ~
                |         |                   |
FIRST:   { $d:ident }  { $e:expr }          { h }


INPUT:  $(  $d:ident   $e:expr   );*    $( $( h )* );*    $( f ; )+
            ~~~~~~~~~~~~~~~~~~             ~~~~~~~           ~~~
                        |                      |               |
FIRST:          { $d:ident }               { h, ε }         { f }

INPUT:  $(  $d:ident   $e:expr   );*    $( $( h )* );*    $( f ; )+   g
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~    ~~~~~~~~~~~~~~    ~~~~~~~~~   ~
                        |                       |              |       |
FIRST:        { $d:ident, ε }            {  h, ε, ;  }      { f }   { g }


INPUT:  $(  $d:ident   $e:expr   );*    $( $( h )* );*    $( f ; )+   g
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                        |
FIRST:                       { $d:ident, h, ;,  f }
```

因此：

 * FIRST(`$($d:ident $e:expr );* $( $(h)* );* $( f ;)+ g`) = { `$d:ident`, `h`, `;`, `f` }

但请注意：

 * FIRST(`$($d:ident $e:expr );* $( $(h)* );* $($( f ;)+ g)*`) = { `$d:ident`, `h`, `;`, `f`, ε }

下面是类似示例，不过这次针对 LAST。

 * LAST(`$d:ident $e:expr`) = { `$e:expr` }
 * LAST(`$( $d:ident $e:expr );*`) = { `$e:expr`, ε }
 * LAST(`$( $d:ident $e:expr );* $(h)*`) = { `$e:expr`, ε, `h` }
 * LAST(`$( $d:ident $e:expr );* $(h)* $( f ;)+`) = { `;` }
 * LAST(`$( $d:ident $e:expr );* $(h)* $( f ;)+ g`) = { `g` }

r[macro.ambiguity.sets.def.follow]
### FOLLOW(M)

r[macro.ambiguity.sets.def.follow.intro]
最后，FOLLOW(M) 的定义按如下方式构建。pat、expr 等表示带有给定 fragment specifier 的 simple nonterminal。

r[macro.ambiguity.sets.def.follow.pat]
  * FOLLOW(pat) = {`=>`, `,`, `=`, `|`, `if`, `in`}`。

r[macro.ambiguity.sets.def.follow.expr-stmt]
  * FOLLOW(expr) = FOLLOW(expr_2021) = FOLLOW(stmt) =  {`=>`, `,`, `;`}`。

r[macro.ambiguity.sets.def.follow.ty-path]
  * FOLLOW(ty) = FOLLOW(path) = {`{`, `[`, `,`, `=>`, `:`, `=`, `>`, `>>`, `;`, `|`, `as`, `where`, block nonterminal}。

r[macro.ambiguity.sets.def.follow.vis]
  * FOLLOW(vis) = {`,`l 除一个非 raw 的 `priv` 之外的任何关键字或标识符；任何可以开始类型的 token；ident、ty 和 path nonterminal}。

r[macro.ambiguity.sets.def.follow.simple]
  * 对于任何其他 simple token，FOLLOW(t) = ANYTOKEN，包括 block、ident、tt、item、lifetime、literal 和 meta simple nonterminal，以及所有 terminal。

r[macro.ambiguity.sets.def.follow.other-matcher]
  * 对于任何其他 M，FOLLOW(M) 定义为当 t 遍历 (LAST(M) \ {ε}) 时 FOLLOW(t) 的交集。

r[macro.ambiguity.sets.def.follow.type-first]
截至本文撰写时，可以开始一个类型的 token 包括 {`(`, `[`, `!`, `*`, `&`, `&&`, `?`, lifetime, `>`, `>>`, `::`, 任何非关键字标识符, `super`, `self`, `Self`, `extern`, `crate`, `$crate`, `_`, `for`, `impl`, `fn`, `unsafe`, `typeof`, `dyn`}，不过这个列表可能并不完整，因为新增此类 token 时人们并不总会记得更新本附录。

complex M 的 FOLLOW 示例：

 * FOLLOW(`$( $d:ident $e:expr )*`) = FOLLOW(`$e:expr`)
 * FOLLOW(`$( $d:ident $e:expr )* $(;)*`) = FOLLOW(`$e:expr`) ∩ ANYTOKEN = FOLLOW(`$e:expr`)
 * FOLLOW(`$( $d:ident $e:expr )* $(;)* $( f |)+`) = ANYTOKEN

### 有效和无效 matcher 的示例

有了上述规约，我们就可以说明为什么某些 matcher 是合法的，而另一些不是。

 * `($ty:ty < foo ,)`：非法，因为 FIRST(`< foo ,`) = { `<` } ⊈ FOLLOW(`ty`)

 * `($ty:ty , foo <)`：合法，因为 FIRST(`, foo <`) = { `,` } 是 ⊆ FOLLOW(`ty`)。

 * `($pa:pat $pb:pat $ty:ty ,)`：非法，因为 FIRST(`$pb:pat $ty:ty ,`) = { `$pb:pat` } ⊈ FOLLOW(`pat`)，并且 FIRST(`$ty:ty ,`) = { `$ty:ty` } 也 ⊈ FOLLOW(`pat`)。

 * `( $($a:tt $b:tt)* ; )`：合法，因为 FIRST(`$b:tt`) = { `$b:tt` } 是 ⊆ FOLLOW(`tt`) = ANYTOKEN，FIRST(`;`) = { `;` } 也是如此。

 * `( $($t:tt),* , $(t:tt),* )`：合法，（但任何实际使用此宏的尝试都会在展开期间报告局部歧义错误）。

 * `($ty:ty $(; not sep)* -)`：非法，因为 FIRST(`$(; not sep)* -`) = { `;`, `-` } 不在 FOLLOW(`ty`) 中。

 * `($($ty:ty)-+)`：非法，因为 separator `-` 不在 FOLLOW(`ty`) 中。

 * `($($e:expr)*)`：非法，因为 expr NT 不在 FOLLOW(expr NT) 中。

[Macros by Example]: macros-by-example.md
[RFC 550]: https://github.com/rust-lang/rfcs/blob/master/text/0550-macro-future-proofing.md
[tracking issue]: https://github.com/rust-lang/rust/issues/56575
