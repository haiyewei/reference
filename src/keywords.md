<div class="rule" id="r-lex.keywords"><a class="rule-link" href="#r-lex.keywords" title="lex.keywords"><span>[lex<wbr>.keywords]</span></a>
</div>

# 关键字

Rust 将关键字分为三类：

- [严格关键字](#strict-keywords)
- [保留关键字](#reserved-keywords)
- [弱关键字](#weak-keywords)

<div class="rule" id="r-lex.keywords.strict"><a class="rule-link" href="#r-lex.keywords.strict" title="lex.keywords.strict"><span>[lex<wbr>.keywords<wbr>.strict]</span></a>
</div>

## 严格关键字

<div class="rule" id="r-lex.keywords.strict.intro"><a class="rule-link" href="#r-lex.keywords.strict.intro" title="lex.keywords.strict.intro"><span>[lex<wbr>.keywords<wbr>.strict<wbr>.intro]</span></a>
</div>

这些关键字只能在其正确的上下文中使用。它们不能用作以下对象的名称：

- [项](items.md)
- [变量](variables.md)和函数形参
- 字段和[变体](items/enumerations.md)
- [类型参数](types/parameters.md)
- 生命周期参数或[循环标签](expressions/loop-expr.md#loop-labels)
- [宏](macros.md)或[属性](attributes.md)
- [宏占位符](macros-by-example.md)
- [crate](crates-and-source-files.md)

<div class="rule" id="r-lex.keywords.strict.list"><a class="rule-link" href="#r-lex.keywords.strict.list" title="lex.keywords.strict.list"><span>[lex<wbr>.keywords<wbr>.strict<wbr>.list]</span></a>
</div>

以下关键字存在于所有 edition 中：

- `_`
- `as`
- `async`
- `await`
- `break`
- `const`
- `continue`
- `crate`
- `dyn`
- `else`
- `enum`
- `extern`
- `false`
- `fn`
- `for`
- `if`
- `impl`
- `in`
- `let`
- `loop`
- `match`
- `mod`
- `move`
- `mut`
- `pub`
- `ref`
- `return`
- `self`
- `Self`
- `static`
- `struct`
- `super`
- `trait`
- `true`
- `type`
- `unsafe`
- `use`
- `where`
- `while`

<div class="rule" id="r-lex.keywords.strict.edition2018"><a class="rule-link" href="#r-lex.keywords.strict.edition2018" title="lex.keywords.strict.edition2018"><span>[lex<wbr>.keywords<wbr>.strict<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 以下关键字是在 2018 edition 中添加的：
 > 
 > - `async`
 > - `await`
 > - `dyn`

</div>

<div class="rule" id="r-lex.keywords.reserved"><a class="rule-link" href="#r-lex.keywords.reserved" title="lex.keywords.reserved"><span>[lex<wbr>.keywords<wbr>.reserved]</span></a>
</div>

## 保留关键字

<div class="rule" id="r-lex.keywords.reserved.intro"><a class="rule-link" href="#r-lex.keywords.reserved.intro" title="lex.keywords.reserved.intro"><span>[lex<wbr>.keywords<wbr>.reserved<wbr>.intro]</span></a>
</div>

这些关键字尚未使用，但已为将来使用而保留。它们具有与严格关键字相同的限制。这样做的理由是，通过禁止当前程序使用这些关键字，使其向前兼容 Rust 的未来版本。

<div class="rule" id="r-lex.keywords.reserved.list"><a class="rule-link" href="#r-lex.keywords.reserved.list" title="lex.keywords.reserved.list"><span>[lex<wbr>.keywords<wbr>.reserved<wbr>.list]</span></a>
</div>

- `abstract`
- `become`
- `box`
- `do`
- `final`
- `gen`
- `macro`
- `override`
- `priv`
- `try`
- `typeof`
- `unsized`
- `virtual`
- `yield`

<div class="rule" id="r-lex.keywords.reserved.edition2018"><a class="rule-link" href="#r-lex.keywords.reserved.edition2018" title="lex.keywords.reserved.edition2018"><span>[lex<wbr>.keywords<wbr>.reserved<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > `try` 关键字是在 2018 edition 中作为保留关键字添加的。

</div>

<div class="rule" id="r-lex.keywords.reserved.edition2024"><a class="rule-link" href="#r-lex.keywords.reserved.edition2024" title="lex.keywords.reserved.edition2024"><span>[lex<wbr>.keywords<wbr>.reserved<wbr>.edition2024]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2024</span> Edition differences</p>
 > 
 > `gen` 关键字是在 2024 edition 中作为保留关键字添加的。

</div>

<div class="rule" id="r-lex.keywords.weak"><a class="rule-link" href="#r-lex.keywords.weak" title="lex.keywords.weak"><span>[lex<wbr>.keywords<wbr>.weak]</span></a>
</div>

## 弱关键字

<div class="rule" id="r-lex.keywords.weak.intro"><a class="rule-link" href="#r-lex.keywords.weak.intro" title="lex.keywords.weak.intro"><span>[lex<wbr>.keywords<wbr>.weak<wbr>.intro]</span></a>
</div>

这些关键字只在特定上下文中具有特殊含义。例如，可以声明名为 `union` 的变量或方法。

- `'static`
- `macro_rules`
- `raw`
- `safe`
- `union`

<div class="rule" id="r-lex.keywords.weak.macro_rules"><a class="rule-link" href="#r-lex.keywords.weak.macro_rules" title="lex.keywords.weak.macro_rules"><span>[lex<wbr>.keywords<wbr>.weak<wbr>.macro_rules]</span></a>
</div>

- `macro_rules` 用于创建自定义[宏](macros.md)。

<div class="rule" id="r-lex.keywords.weak.union"><a class="rule-link" href="#r-lex.keywords.weak.union" title="lex.keywords.weak.union"><span>[lex<wbr>.keywords<wbr>.weak<wbr>.union]</span></a>
</div>

- `union` 用于声明 [union](items/unions.md)，并且只有在 union 声明中使用时才是关键字。

<div class="rule" id="r-lex.keywords.weak.lifetime-static"><a class="rule-link" href="#r-lex.keywords.weak.lifetime-static" title="lex.keywords.weak.lifetime-static"><span>[lex<wbr>.keywords<wbr>.weak<wbr>.lifetime-static]</span></a>
</div>

- `'static` 用于表示静态生命周期，不能用作[泛型生命周期参数](items/generics.md)或[循环标签](expressions/loop-expr.md#loop-labels)
  
  ```compile_fail
  // error[E0262]: invalid lifetime parameter name: `'static`
  fn invalid_lifetime_parameter<'static>(s: &'static str) -> &'static str { s }
  ```

<div class="rule" id="r-lex.keywords.weak.safe"><a class="rule-link" href="#r-lex.keywords.weak.safe" title="lex.keywords.weak.safe"><span>[lex<wbr>.keywords<wbr>.weak<wbr>.safe]</span></a>
</div>

- `safe` 用于函数和静态项，在[外部块](items/external-blocks.md)中具有含义。

<div class="rule" id="r-lex.keywords.weak.raw"><a class="rule-link" href="#r-lex.keywords.weak.raw" title="lex.keywords.weak.raw"><span>[lex<wbr>.keywords<wbr>.weak<wbr>.raw]</span></a>
</div>

- `raw` 用于[原始借用运算符](expressions/operator-expr.md#raw-borrow-operators)，并且只有在匹配原始借用运算符形式（如 `&raw const expr` 或 `&raw mut expr`）时才是关键字。

<div class="rule" id="r-lex.keywords.weak.dyn.edition2018"><a class="rule-link" href="#r-lex.keywords.weak.dyn.edition2018" title="lex.keywords.weak.dyn.edition2018"><span>[lex<wbr>.keywords<wbr>.weak<wbr>.dyn<wbr>.edition2018]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2018</span> Edition differences</p>
 > 
 > 在 2015 edition 中，当 [`dyn`](types/trait-object.md) 用于类型位置，并后跟一个不以 `::` 或 `<` 开头的路径、生命周期、问号、`for` 关键字或左括号时，它是一个关键字。
 > 
 > 自 2018 edition 起，`dyn` 已提升为严格关键字。

</div>
