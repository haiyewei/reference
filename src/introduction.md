# 引言

本书是 Rust 编程语言的主要参考资料。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 关于本书中已知的错误和遗漏，请参阅我们的 [GitHub issues](https://github.com/rust-lang/reference/issues)。如果你发现编译器行为与这里的文本不一致，请提交一个 issue，以便我们思考哪一方是正确的。

</div>

## Rust 发布版本

Rust 每六周发布一个新的语言版本。该语言的第一个稳定版本是 Rust 1.0.0，随后是 Rust 1.1.0，依此类推。工具（`rustc`、`cargo` 等）和文档（[标准库](../std/index.html)、本书等）会随语言版本一同发布。

与最新 Rust 版本相匹配的本书最新版本始终可以在 <https://doc.rust-lang.org/reference/> 找到。较早版本可以通过在 "reference" 目录前添加 Rust 版本号来找到。例如，Rust 1.49.0 的 Reference 位于 <https://doc.rust-lang.org/1.49.0/reference/>。

## _参考手册_ 不是什么

本书不是这门语言的入门教程。它假定读者已经具备该语言的背景知识。另有一本[书](../book/index.html)可以帮助你获得这类背景知识。

本书也不是语言发行版中所含[标准库](../std/index.html)的参考资料。这些库会通过从其源代码中提取文档属性来单独生成文档。许多人可能预期为语言特性的功能，在 Rust 中其实是库特性，因此你要找的内容可能在那里，而不是这里。

同样，本书通常也不记录 `rustc` 作为工具或 Cargo 的具体细节。`rustc` 有自己的[书](../rustc/index.html)。Cargo 有一本[书](../cargo/index.html)，其中包含一份[参考资料](../cargo/reference/index.html)。仍有少数页面，例如 [linkage](linkage.html)，会描述 `rustc` 的工作方式。

本书也只作为稳定 Rust 中可用内容的参考资料。对于正在开发中的不稳定特性，请参阅 [Unstable Book](https://doc.rust-lang.org/nightly/unstable-book/)。

Rust 编译器，包括 `rustc`，会执行优化。参考手册并不规定哪些优化是允许的或不允许的。相反，应把编译后的程序视为一个黑盒。你只能通过运行它、向它提供输入并观察输出来探测它。以这种方式发生的一切都必须符合参考手册的说明。

## 如何使用本书

本书并不假定你会按顺序阅读。每一章通常都可以独立阅读，但会交叉链接到其他章节，以引用那些它们涉及但不展开讨论的语言方面。

阅读本文档主要有两种方式。

第一种方式是回答某个具体问题。如果你知道哪一章回答了这个问题，可以直接跳到目录中的那一章。否则，你可以按 `s`，或点击顶部栏中的放大镜，搜索与你的问题相关的关键词。例如，假设你想知道在 let 语句中创建的临时值什么时候被丢弃。如果你还不知道[临时值的生命周期](expressions.html#temporaries)是在[表达式章节](expressions.html)中定义的，那么可以搜索 "temporary let"，第一个搜索结果会带你到相应小节。

第二种方式是总体上提升你对语言某个方面的了解。在这种情况下，只需浏览目录，直到看到你想进一步了解的内容，然后开始阅读。如果某个链接看起来有意思，就点击它并阅读该小节。

话虽如此，阅读本书没有错误的方式。以你觉得最有帮助的方式阅读即可。

### 约定

和所有技术书籍一样，本书在展示信息的方式上有一些约定。这些约定记录在这里。

- 定义术语的语句会将该术语放在_斜体_中。每当该术语在该章之外使用时，它通常会链接到包含此定义的小节。
  
  _示例术语_ 是一个被定义术语的示例。

- 正文描述最新的稳定 edition。与先前 edition 的差异会分隔在 edition 块中：
  
  <div class="alert alert-edition">
  
   > 
   > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
   > 
   > 在 2018 edition 之前，行为是这样的。自 2018 edition 起，行为是那样的。
  
  </div>
  
- 包含关于本书状态的有用信息，或指出有用但大多超出范围的信息的注释，会放在注释块中。
  
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > 这是一个示例注释。
  
  </div>
  
- 示例块展示一个用于演示某条规则或指出某个有趣方面的示例。有些示例可能包含隐藏行，可以通过点击在悬停或轻触示例时出现的眼睛图标来查看。
  
  <div class="alert alert-example">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
   > 
   > 这是一个代码示例。
   > 
   > ```rust
   > println!("hello world");
   > ```
  
  </div>
  
- 展示语言中的不健全行为，或语言特性之间可能令人困惑的交互的警告，会放在特殊的警告框中。
  
  <div class="alert alert-warning">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
   > 
   > 这是一个示例警告。
  
  </div>
  
- 文本中的内联代码片段位于 `<code>` 标签内。
  
  较长的代码示例位于带有语法高亮的框中，右上角有用于复制、执行和显示隐藏行的控件。
  
  ```rust
  # // This is a hidden line.
  fn main() {
      println!("This is a code example");
  }
  ```
  
  除非另有说明，所有示例均针对最新 edition 编写。

- 语法和词法产生式在[记法](notation.md)章节中描述。

<div class="rule" id="r-example.rule.label"><a class="rule-link" href="#r-example.rule.label" title="example.rule.label"><span>[example<wbr>.rule<wbr>.label]</span></a>
</div>

- 规则标识符出现在每条语言规则之前，并用方括号括起。这些标识符提供了一种引用并链接到语言中特定规则的方式（[例如](introduction.md#r-example.rule.label)）。规则标识符使用句点从最一般到最具体地分隔各个部分（例如 [destructors.scope.nesting.function-body](destructors.md#r-destructors.scope.nesting.function-body)）。在较窄的屏幕上，规则名称会折叠显示为 `[*]`。
  
  可以点击规则名称来链接到该规则。
  
  <div class="alert alert-warning">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
   > 
   > 规则的组织方式目前仍在变化中。暂时来说，这些标识符名称在不同发布版本之间并不稳定；如果它们发生变化，指向这些规则的链接可能会失效。我们打算在组织方式稳定后稳定这些名称，以便指向规则名称的链接不会在发布版本之间断开。
  
  </div>
  
- 有关联测试的规则会在其下方包含一个 `Tests` 链接（在较窄的屏幕上，该链接是 `[T]`）。点击该链接会弹出测试列表，可以点击其中的测试来查看。例如，请参阅 [input.encoding.utf8](input-format.md#r-input.encoding.utf8)。
  
  将规则链接到测试是一项持续进行的工作。概览请参阅 [Test summary](test-summary.md) 章节。

## 参与贡献

我们欢迎各种形式的贡献。

你可以通过在 [Rust Reference 仓库](https://github.com/rust-lang/reference/) 中打开 issue 或发送 pull request 来为本书做出贡献。如果本书没有回答你的问题，而你认为这个问题的答案属于本书范围，请不要犹豫，可以[提交 issue](https://github.com/rust-lang/reference/issues)，或在 [Zulip](https://rust-lang.zulipchat.com/#narrow/stream/237824-t-lang.2Fdoc) 上的 `t-lang/doc` stream 中提问。了解人们最常使用本书来做什么，有助于我们把注意力放在让这些部分达到最佳状态。当然，如果你发现任何错误，或者发现某些内容是非规范性的但没有被明确标出，也请[提交 issue](https://github.com/rust-lang/reference/issues)。