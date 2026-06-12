r[comments]
# 注释

r[comments.syntax]
```grammar,lexer
@root COMMENT ->
      LINE_COMMENT
    | INNER_LINE_DOC
    | OUTER_LINE_DOC
    | INNER_BLOCK_DOC
    | OUTER_BLOCK_DOC
    | BLOCK_COMMENT

LINE_COMMENT ->
      `//` (~[`/` `!` LF] | `//`) ~LF*
    | `//` EOF
    | `//` _immediately followed by LF_

BLOCK_COMMENT ->
    `/*` ^
      ( BLOCK_COMMENT_OR_DOC | (!`*/` CHAR) )*
    `*/`

INNER_LINE_DOC ->
    `//!` ^ LINE_DOC_COMMENT_CONTENT (LF | EOF)

LINE_DOC_COMMENT_CONTENT -> (!CR ~LF)*

INNER_BLOCK_DOC ->
    `/*!` ^ ( BLOCK_COMMENT_OR_DOC | BLOCK_CHAR )* `*/`

OUTER_LINE_DOC ->
    `///` ^ LINE_DOC_COMMENT_CONTENT (LF | EOF)

OUTER_BLOCK_DOC ->
    `/**` ![`*` `/`]
      ^
      ( ~`*` | BLOCK_COMMENT_OR_DOC )
      ( BLOCK_COMMENT_OR_DOC | BLOCK_CHAR )*
    `*/`

BLOCK_CHAR -> (!(`*/` | CR) CHAR)

BLOCK_COMMENT_OR_DOC ->
      INNER_BLOCK_DOC
    | OUTER_BLOCK_DOC
    | BLOCK_COMMENT
```

r[comments.normal]
## 非文档注释

注释遵循常见的 C++ 风格的行注释（`//`）和块注释（`/* ... */`）形式。支持嵌套的块注释。

r[comments.normal.tokenization]
非文档注释会被解释为空白的一种形式。

r[comments.doc]
## 文档注释

r[comments.doc.syntax]
以恰好 *三个* 斜杠（`///`）开头的行文档注释，以及块文档注释（`/** ... */`）都是外部文档注释，会被解释为 [`doc` 属性](../rustdoc/the-doc-attribute.html)的特殊语法。

r[comments.doc.attributes]
也就是说，它们等价于围绕注释正文书写 `#[doc="..."]`，即 `/// Foo` 会变成 `#[doc=" Foo"]`，而 `/** Bar */` 会变成 `#[doc=" Bar "]`。因此，它们必须出现在接受外部属性的对象之前。

r[comments.doc.inner-syntax]
以 `//!` 开头的行注释和块注释 `/*! ... */` 是文档注释，它们应用于该注释的父级，而不是后面的项。

r[comments.doc.inner-attributes]
也就是说，它们等价于围绕注释正文书写 `#![doc="..."]`。`//!` 注释通常用于为占据一个源文件的模块编写文档。

r[comments.doc.bare-crs]
文档注释中不允许出现字符 `U+000D` (CR)。

> [!NOTE]
> 按照 `rustdoc` 的预期，文档注释通常包含 Markdown。然而，注释语法并不识别任何内部 Markdown。``/** `glob = "*/*.rs";` */`` 会在第一个 `*/` 处终止注释，剩余代码则会导致语法错误。与行文档注释相比，这会稍微限制块文档注释的内容。

> [!NOTE]
> 紧跟在 `U+000D` (CR) 之后的 `U+000A` (LF) 序列此前已经被转换为单个 `U+000A` (LF)。

## 示例

```rust
//! 适用于此 crate 的隐式匿名模块的文档注释

pub mod outer_module {

    //!  - 内部行文档注释
    //!! - 仍是内部行文档注释（但开头有一个叹号）

    /*!  - Inner block doc */
    /*!! - Still an inner block doc (but with a bang at the beginning) */

    //   - 只是注释
    ///  - 外部行文档注释（正好 3 个斜杠）
    //// - 只是注释

    /*   - Only a comment */
    /**  - Outer block doc (exactly) 2 asterisks */
    /*** - Only a comment */

    pub mod inner_module {}

    pub mod nested_comments {
        /* In Rust /* we can /* nest comments */ */ */

        // 所有三种块注释都可以包含任意其他类型，或嵌套在
        // 任意其他类型内部：

        /*   /* */  /** */  /*! */  */
        /*!  /* */  /** */  /*! */  */
        /**  /* */  /** */  /*! */  */
        pub mod dummy_item {}
    }

    pub mod degenerate_cases {
        // 空的内部行文档注释
        //!

        // 空的内部块文档注释
        /*!*/

        // 空的行注释
        //

        // 空的外部行文档注释
        ///

        // 空的块注释
        /**/

        pub mod dummy_item {}

        // 空的 2 星号块不是文档块，而是块注释
        /***/

    }

    /* The next one isn't allowed because outer doc comments
       require an item that will receive the doc */

    /// 我的项在哪里？
#   mod boo {}
}
```

[`doc` attributes]: ../rustdoc/the-doc-attribute.html
