r[ident]
# 标识符

r[ident.syntax]
```grammar,lexer
IDENTIFIER_OR_KEYWORD -> ( XID_Start | `_` ) XID_Continue*

XID_Start -> <`XID_Start` defined by Unicode>

XID_Continue -> <`XID_Continue` defined by Unicode>

RAW_IDENTIFIER -> `r#` IDENTIFIER_OR_KEYWORD

NON_KEYWORD_IDENTIFIER -> IDENTIFIER_OR_KEYWORD _except a [strict][lex.keywords.strict] or [reserved][lex.keywords.reserved] keyword_

IDENTIFIER -> NON_KEYWORD_IDENTIFIER | RAW_IDENTIFIER

RESERVED_RAW_IDENTIFIER ->
    `r#` (`_` | `crate` | `self` | `Self` | `super`) !XID_Continue
```

<!-- When updating the version, update the UAX links, too. -->
r[ident.unicode]
标识符遵循 [Unicode Standard Annex #31](https://www.unicode.org/reports/tr31/tr31-43.html) 中针对 Unicode 17.0 版本的规范，并带有下文描述的补充。标识符的一些示例：

* `foo`
* `_identifier`
* `r#true`
* `Москва`
* `東京`

r[ident.profile]
所使用的 UAX #31 profile 是：

* Start := [`XID_Start`](http://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5B%3AXID_Start%3A%5D&abb=on&g=&i=)，加上下划线字符 (U+005F)
* Continue := [`XID_Continue`]
* Medial := 空

> [!NOTE]
> 以下划线开头的标识符通常用于表示有意不使用的标识符，并会抑制 `rustc` 中的未使用警告。

r[ident.keyword]
如果没有下文[原始标识符](#raw-identifiers)中描述的 `r#` 前缀，标识符不能是[严格关键字](keywords.md#strict-keywords)或[保留关键字](keywords.md#reserved-keywords)。

r[ident.zero-width-chars]
标识符中不允许出现零宽不连字字符（ZWNJ U+200C）和零宽连字字符（ZWJ U+200D）。

r[ident.ascii-limitations]
在以下情形中，标识符被限制为 [`XID_Start`](http://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5B%3AXID_Start%3A%5D&abb=on&g=&i=) 和 [`XID_Continue`](http://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5B%3AXID_Continue%3A%5D&abb=on&g=&i=) 的 ASCII 子集：

* [`extern crate`](items/extern-crates.md) 声明（[AsClause] 标识符除外）
* [路径](paths.md)中引用的外部 crate 名称
* 在没有 [`path` 属性](items/modules.md#r-items.mod.outlined.path)的情况下从文件系统加载的[模块](items/modules.md)名称
* 带有 [`no_mangle`](abi.md#the-no_mangle-attribute) 属性的项
* [外部块](items/external-blocks.md)中的项名称

r[ident.normalization]
## 规范化

标识符会使用 [Unicode Standard Annex #15](https://www.unicode.org/reports/tr15/tr15-57.html) 中定义的规范化形式 C（NFC）进行规范化。如果两个标识符的 NFC 形式相等，则这两个标识符相等。

[过程宏](procedural-macros.md)和[声明式宏](macros-by-example.md)在其输入中接收规范化后的标识符。

r[ident.raw]
## 原始标识符

r[ident.raw.intro]
原始标识符类似普通标识符，但带有 `r#` 前缀。（注意，`r#` 前缀不包含在实际标识符中。）

r[ident.raw.allowed]
与普通标识符不同，原始标识符可以是任意严格关键字或保留关键字，但上面对 `RAW_IDENTIFIER` 列出的那些除外。

r[ident.raw.reserved]
使用 [RESERVED_RAW_IDENTIFIER] token 是错误。

[`extern crate`]: items/extern-crates.md
[`no_mangle`]: abi.md#the-no_mangle-attribute
[`path` attribute]: items/modules.md#the-path-attribute
[`XID_Continue`]: http://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5B%3AXID_Continue%3A%5D&abb=on&g=&i=
[`XID_Start`]:  http://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5B%3AXID_Start%3A%5D&abb=on&g=&i=
[external blocks]: items/external-blocks.md
[mbe]: macros-by-example.md
[module]: items/modules.md
[path]: paths.md
[proc-macro]: procedural-macros.md
[reserved]: keywords.md#reserved-keywords
[strict]: keywords.md#strict-keywords
[UAX15]: https://www.unicode.org/reports/tr15/tr15-57.html
[UAX31]: https://www.unicode.org/reports/tr31/tr31-43.html
