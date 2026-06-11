r[shebang]
# Shebang

r[shebang.intro]
_[shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))_ 是一个可选的行，通常在类 Unix 系统中用于指定执行该文件的解释器。

> [!EXAMPLE]
> <!-- ignore: tests don't like shebang -->
> ```rust,ignore
> #!/usr/bin/env rustx
>
> fn main() {
>     println!("Hello!");
> }
> ```

r[shebang.syntax]
```grammar,lexer
@root SHEBANG ->
    `#!` !((WHITESPACE | LINE_COMMENT | BLOCK_COMMENT)* `[`)
    ~LF* (LF | EOF)
```

r[shebang.syntax-description]
shebang 以字符 `#!` 开始，并延伸到第一个 `U+000A` (LF)，如果不存在 LF，则延伸到 EOF。如果 `#!` 字符后跟着 `[`（忽略中间出现的任何 [注释](comments.md) 或[空白](whitespace.md)），则该行不被视为 shebang（以避免与[内部属性](attributes.md)产生歧义）。

r[shebang.position]
shebang 可以紧接着出现在文件开头，或出现在可选的[字节顺序标记](https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8)之后。

[byte order mark]: https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8
[comments]: comments.md
[inner attribute]: attributes.md
[shebang]: https://en.wikipedia.org/wiki/Shebang_(Unix)
[whitespace]: whitespace.md
