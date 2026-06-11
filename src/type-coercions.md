<div class="rule" id="r-coerce"><a class="rule-link" href="#r-coerce" title="coerce"><span>[coerce]</span></a>
</div>

# 类型强制转换

<div class="rule" id="r-coerce.intro"><a class="rule-link" href="#r-coerce.intro" title="coerce.intro"><span>[coerce<wbr>.intro]</span></a>
</div>

**类型强制转换**是改变值的类型的隐式操作。它们会在特定位置自动发生，并且对于实际可强制转换的类型有很严格的限制。

<div class="rule" id="r-coerce.as"><a class="rule-link" href="#r-coerce.as" title="coerce.as"><span>[coerce<wbr>.as]</span></a>
</div>

任何可由强制转换允许的转换，也都可以通过[类型转换运算符](expressions/operator-expr.md#type-cast-expressions) `as` 显式执行。

强制转换最初在 [RFC 401](https://github.com/rust-lang/rfcs/blob/master/text/0401-coercions.md) 中定义，并在 [RFC 1558](https://github.com/rust-lang/rfcs/blob/master/text/1558-closure-to-fn-coercion.md) 中得到扩展。

<div class="rule" id="r-coerce.site"><a class="rule-link" href="#r-coerce.site" title="coerce.site"><span>[coerce<wbr>.site]</span></a>
</div>

## 强制转换位置

<div class="rule" id="r-coerce.site.intro"><a class="rule-link" href="#r-coerce.site.intro" title="coerce.site.intro"><span>[coerce<wbr>.site<wbr>.intro]</span></a>
</div>

强制转换只能发生在程序中的某些强制转换位置；这些位置通常是期望类型显式给出，或可以从显式类型传播推导出来（不经过类型推断）的地方。可能的强制转换位置包括：

<div class="rule" id="r-coerce.site.let"><a class="rule-link" href="#r-coerce.site.let" title="coerce.site.let"><span>[coerce<wbr>.site<wbr>.let]</span></a>
</div>

- 给出了显式类型的 `let` 语句。
  
  例如，在下面的代码中，`&mut 42` 被强制转换为类型 `&i8`：
  
  ```rust
  let _: &i8 = &mut 42;
  ```

<div class="rule" id="r-coerce.site.value"><a class="rule-link" href="#r-coerce.site.value" title="coerce.site.value"><span>[coerce<wbr>.site<wbr>.value]</span></a>
</div>

- `static` 和 `const` 项声明（类似于 `let` 语句）。

<div class="rule" id="r-coerce.site.argument"><a class="rule-link" href="#r-coerce.site.argument" title="coerce.site.argument"><span>[coerce<wbr>.site<wbr>.argument]</span></a>
</div>

- 函数调用的实参
  
  被强制转换的值是实际参数，它会被强制转换为形式参数的类型。
  
  例如，在下面的代码中，`&mut 42` 被强制转换为类型 `&i8`：
  
  ```rust
  fn bar(_: &i8) { }
  
  fn main() {
      bar(&mut 42);
  }
  ```
  
  对于方法调用，接收者（`self` 参数）的类型会以不同方式强制转换；详情见[方法调用表达式](expressions/method-call-expr.md)的文档。

<div class="rule" id="r-coerce.site.constructor"><a class="rule-link" href="#r-coerce.site.constructor" title="coerce.site.constructor"><span>[coerce<wbr>.site<wbr>.constructor]</span></a>
</div>

- 结构体、联合体或枚举变体字段的实例化
  
  例如，在下面的代码中，`&mut 42` 被强制转换为类型 `&i8`：
  
  ```rust
  struct Foo<'a> { x: &'a i8 }
  
  fn main() {
      Foo { x: &mut 42 };
  }
  ```

<div class="rule" id="r-coerce.site.return"><a class="rule-link" href="#r-coerce.site.return" title="coerce.site.return"><span>[coerce<wbr>.site<wbr>.return]</span></a>
</div>

- 函数结果，即块中未以分号结束时的最后一行，或 `return` 语句中的任何表达式
  
  例如，在下面的代码中，`x` 被强制转换为类型 `&dyn Display`：
  
  ```rust
  use std::fmt::Display;
  fn foo(x: &u32) -> &dyn Display {
      x
  }
  ```

<div class="rule" id="r-coerce.site.assignment"><a class="rule-link" href="#r-coerce.site.assignment" title="coerce.site.assignment"><span>[coerce<wbr>.site<wbr>.assignment]</span></a>
</div>

- 赋值表达式中被赋的值操作数
  
  例如，在下面的代码中，`y` 被强制转换为类型 `&i8`：
  
  ```rust
  let mut x = &0i8;
  let y = &mut 42i8;
  x = y;
  ```

<div class="rule" id="r-coerce.site.subexpr"><a class="rule-link" href="#r-coerce.site.subexpr" title="coerce.site.subexpr"><span>[coerce<wbr>.site<wbr>.subexpr]</span></a>
</div>

如果这些强制转换位置之一中的表达式是会传播强制转换的表达式，那么该表达式中的相关子表达式也会成为强制转换位置。传播会从这些新的强制转换位置递归进行。会传播的表达式及其相关子表达式如下：

<div class="rule" id="r-coerce.site.array"><a class="rule-link" href="#r-coerce.site.array" title="coerce.site.array"><span>[coerce<wbr>.site<wbr>.array]</span></a>
</div>

- 数组字面量，其中数组具有类型 `[U; n]`。数组字面量中的每个子表达式都是强制转换到类型 `U` 的强制转换位置。

<div class="rule" id="r-coerce.site.repeat"><a class="rule-link" href="#r-coerce.site.repeat" title="coerce.site.repeat"><span>[coerce<wbr>.site<wbr>.repeat]</span></a>
</div>

- 带有重复语法的数组字面量，其中数组具有类型 `[U; n]`。被重复的子表达式是强制转换到类型 `U` 的强制转换位置。

<div class="rule" id="r-coerce.site.tuple"><a class="rule-link" href="#r-coerce.site.tuple" title="coerce.site.tuple"><span>[coerce<wbr>.site<wbr>.tuple]</span></a>
</div>

- 元组，其中元组是强制转换到类型 `(U_0, U_1, ..., U_n)` 的强制转换位置。每个子表达式都是强制转换到对应类型的强制转换位置，例如第零个子表达式是强制转换到类型 `U_0` 的强制转换位置。

<div class="rule" id="r-coerce.site.parenthesis"><a class="rule-link" href="#r-coerce.site.parenthesis" title="coerce.site.parenthesis"><span>[coerce<wbr>.site<wbr>.parenthesis]</span></a>
</div>

- 带括号的子表达式（`(e)`）：如果表达式具有类型 `U`，则该子表达式是强制转换到 `U` 的强制转换位置。

<div class="rule" id="r-coerce.site.block"><a class="rule-link" href="#r-coerce.site.block" title="coerce.site.block"><span>[coerce<wbr>.site<wbr>.block]</span></a>
</div>

- 块：如果块具有类型 `U`，则块中的最后一个表达式（如果它未以分号结束）是强制转换到 `U` 的强制转换位置。如果作为控制流语句一部分的块具有已知类型，这也包括例如 `if`/`else` 中的块。

<div class="rule" id="r-coerce.types"><a class="rule-link" href="#r-coerce.types" title="coerce.types"><span>[coerce<wbr>.types]</span></a>
</div>

## 强制转换类型

<div class="rule" id="r-coerce.types.intro"><a class="rule-link" href="#r-coerce.types.intro" title="coerce.types.intro"><span>[coerce<wbr>.types<wbr>.intro]</span></a>
</div>

下列类型之间允许强制转换：

<div class="rule" id="r-coerce.types.reflexive"><a class="rule-link" href="#r-coerce.types.reflexive" title="coerce.types.reflexive"><span>[coerce<wbr>.types<wbr>.reflexive]</span></a>
</div>

- 如果 `T` 是 `U` 的[子类型](subtyping.md)，则从 `T` 到 `U`（_自反情形_）

<div class="rule" id="r-coerce.types.transitive"><a class="rule-link" href="#r-coerce.types.transitive" title="coerce.types.transitive"><span>[coerce<wbr>.types<wbr>.transitive]</span></a>
</div>

- 从 `T_1` 到 `T_3`，其中 `T_1` 强制转换到 `T_2`，且 `T_2` 强制转换到 `T_3`（_传递情形_）
  
  注意，这尚未得到完全支持。

<div class="rule" id="r-coerce.types.mut-reborrow"><a class="rule-link" href="#r-coerce.types.mut-reborrow" title="coerce.types.mut-reborrow"><span>[coerce<wbr>.types<wbr>.mut-reborrow]</span></a>
</div>

- 从 `&mut T` 到 `&T`

<div class="rule" id="r-coerce.types.mut-pointer"><a class="rule-link" href="#r-coerce.types.mut-pointer" title="coerce.types.mut-pointer"><span>[coerce<wbr>.types<wbr>.mut-pointer]</span></a>
</div>

- 从 `*mut T` 到 `*const T`

<div class="rule" id="r-coerce.types.ref-to-pointer"><a class="rule-link" href="#r-coerce.types.ref-to-pointer" title="coerce.types.ref-to-pointer"><span>[coerce<wbr>.types<wbr>.ref-to-pointer]</span></a>
</div>

- 从 `&T` 到 `*const T`

<div class="rule" id="r-coerce.types.mut-to-pointer"><a class="rule-link" href="#r-coerce.types.mut-to-pointer" title="coerce.types.mut-to-pointer"><span>[coerce<wbr>.types<wbr>.mut-to-pointer]</span></a>
</div>

- 从 `&mut T` 到 `*mut T`

<div class="rule" id="r-coerce.types.deref"><a class="rule-link" href="#r-coerce.types.deref" title="coerce.types.deref"><span>[coerce<wbr>.types<wbr>.deref]</span></a>
</div>

- 如果 `T` 实现了 `Deref<Target = U>`，则从 `&T` 或 `&mut T` 到 `&U`。例如：
  
  ```rust
  use std::ops::Deref;
  
  struct CharContainer {
      value: char,
  }
  
  impl Deref for CharContainer {
      type Target = char;
  
      fn deref<'a>(&'a self) -> &'a char {
          &self.value
      }
  }
  
  fn foo(arg: &char) {}
  
  fn main() {
      let x = &mut CharContainer { value: 'y' };
      foo(x); //&mut CharContainer is coerced to &char.
  }
  ```

<div class="rule" id="r-coerce.types.deref-mut"><a class="rule-link" href="#r-coerce.types.deref-mut" title="coerce.types.deref-mut"><span>[coerce<wbr>.types<wbr>.deref-mut]</span></a>
</div>

- 如果 `T` 实现了 `DerefMut<Target = U>`，则从 `&mut T` 到 `&mut U`。

<div class="rule" id="r-coerce.types.unsize"><a class="rule-link" href="#r-coerce.types.unsize" title="coerce.types.unsize"><span>[coerce<wbr>.types<wbr>.unsize]</span></a>
</div>

- 从 TyCtor(`T`) 到 TyCtor(`U`)，其中 TyCtor(`T`) 是下列之一：
  
  - `&T`
  - `&mut T`
  - `*const T`
  - `*mut T`
  - `Box<T>`
  且其中 `U` 可以通过[非定长强制转换](#unsized-coercions)从 `T` 获得。
  
    <!--In the future, coerce_inner will be recursively extended to tuples and
    structs. In addition, coercions from subtraits to supertraits will be
    added. See [RFC 401] for more details.-->
  

<div class="rule" id="r-coerce.types.fn"><a class="rule-link" href="#r-coerce.types.fn" title="coerce.types.fn"><span>[coerce<wbr>.types<wbr>.fn]</span></a>
</div>

- 函数项类型到 `fn` 指针

<div class="rule" id="r-coerce.types.closure"><a class="rule-link" href="#r-coerce.types.closure" title="coerce.types.closure"><span>[coerce<wbr>.types<wbr>.closure]</span></a>
</div>

- 非捕获闭包到 `fn` 指针

<div class="rule" id="r-coerce.types.never"><a class="rule-link" href="#r-coerce.types.never" title="coerce.types.never"><span>[coerce<wbr>.types<wbr>.never]</span></a>
</div>

- `!` 到任意 `T`

<div class="rule" id="r-coerce.unsize"><a class="rule-link" href="#r-coerce.unsize" title="coerce.unsize"><span>[coerce<wbr>.unsize]</span></a>
</div>

### 非定长强制转换

<div class="rule" id="r-coerce.unsize.intro"><a class="rule-link" href="#r-coerce.unsize.intro" title="coerce.unsize.intro"><span>[coerce<wbr>.unsize<wbr>.intro]</span></a>
</div>

以下强制转换称为 `unsized coercions`（非定长强制转换），因为它们涉及将类型转换为非定长类型，并且如上所述，在少数其他强制转换不被允许的情形中也被允许。它们仍然可以在强制转换可以发生的其他任何位置发生。

<div class="rule" id="r-coerce.unsize.trait"><a class="rule-link" href="#r-coerce.unsize.trait" title="coerce.unsize.trait"><span>[coerce<wbr>.unsize<wbr>.trait]</span></a>
</div>

两个 trait，[`Unsize`](../core/marker/trait.Unsize.html) 和 [`CoerceUnsized`](../core/ops/unsize/trait.CoerceUnsized.html)，用于辅助这一过程，并将其暴露给库使用。以下强制转换是内建的；如果 `T` 可以通过其中之一强制转换为 `U`，则会为 `T` 提供 `Unsize<U>` 的实现：

<div class="rule" id="r-coerce.unsize.slice"><a class="rule-link" href="#r-coerce.unsize.slice" title="coerce.unsize.slice"><span>[coerce<wbr>.unsize<wbr>.slice]</span></a>
</div>

- `[T; n]` 到 `[T]`。

<div class="rule" id="r-coerce.unsize.trait-object"><a class="rule-link" href="#r-coerce.unsize.trait-object" title="coerce.unsize.trait-object"><span>[coerce<wbr>.unsize<wbr>.trait-object]</span></a>
</div>

- 当 `T` 实现 `U + Sized`，且 `U` 是 [dyn 兼容](items/traits.md#dyn-compatibility)的，则 `T` 到 `dyn U`。

<div class="rule" id="r-coerce.unsize.trait-upcast"><a class="rule-link" href="#r-coerce.unsize.trait-upcast" title="coerce.unsize.trait-upcast"><span>[coerce<wbr>.unsize<wbr>.trait-upcast]</span></a>
</div>

- 当 `U` 是 `T` 的[父 trait](items/traits.md#supertraits) 之一时，`dyn T` 到 `dyn U`。
  - 这允许丢弃 auto trait，即允许从 `dyn T + Auto` 到 `dyn U` 的强制转换。
  - 如果主 trait 将该 auto trait 作为父 trait，则这允许添加 auto trait，即给定 `trait T: U + Send {}`，允许从 `dyn T` 到 `dyn T + Send` 或到 `dyn U + Send` 的强制转换。

<div class="rule" id="r-coerce.unsized.composite"><a class="rule-link" href="#r-coerce.unsized.composite" title="coerce.unsized.composite"><span>[coerce<wbr>.unsized<wbr>.composite]</span></a>
</div>

- 在满足以下条件时，`Foo<..., T, ...>` 到 `Foo<..., U, ...>`：
  - `Foo` 是一个结构体。
  - `T` 实现 `Unsize<U>`。
  - `Foo` 的最后一个字段具有涉及 `T` 的类型。
  - 如果该字段的类型为 `Bar<T>`，则 `Bar<T>` 实现 `Unsize<Bar<U>>`。
  - `T` 不是任何其他字段类型的一部分。

<div class="rule" id="r-coerce.unsized.pointer"><a class="rule-link" href="#r-coerce.unsized.pointer" title="coerce.unsized.pointer"><span>[coerce<wbr>.unsized<wbr>.pointer]</span></a>
</div>

此外，当 `T` 实现 `Unsize<U>` 或 `CoerceUnsized<Foo<U>>` 时，类型 `Foo<T>` 可以实现 `CoerceUnsized<Foo<U>>`。这允许它提供到 `Foo<U>` 的非定长强制转换。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 虽然非定长强制转换的定义及其实现已经稳定，但这些 trait 本身尚未稳定，因此不能在 stable Rust 中直接使用。

</div>

<div class="rule" id="r-coerce.least-upper-bound"><a class="rule-link" href="#r-coerce.least-upper-bound" title="coerce.least-upper-bound"><span>[coerce<wbr>.least-upper-bound]</span></a>
</div>

## 最小上界强制转换

<div class="rule" id="r-coerce.least-upper-bound.intro"><a class="rule-link" href="#r-coerce.least-upper-bound.intro" title="coerce.least-upper-bound.intro"><span>[coerce<wbr>.least-upper-bound<wbr>.intro]</span></a>
</div>

在某些上下文中，编译器必须将多个类型共同强制转换，以尝试寻找最通用的类型。这称为“最小上界”（Least Upper Bound）强制转换。LUB 强制转换仅在以下情形中使用：

- 为一系列 if 分支寻找共同类型。
- 为一系列 match 分支寻找共同类型。
- 为数组元素寻找共同类型。
- 为[带标签块表达式](expressions/loop-expr.md#r-expr.loop.block-labels)在 break 操作数和最终块操作数之间寻找共同类型。
- 为[带 break 表达式的 `loop` 表达式](expressions/loop-expr.md#r-expr.loop.break-value)在各 break 操作数之间寻找共同类型。
- 为具有多个 return 语句的闭包的返回类型寻找类型。
- 为具有多个 return 语句的函数的返回类型检查类型。

<div class="rule" id="r-coerce.least-upper-bound.target"><a class="rule-link" href="#r-coerce.least-upper-bound.target" title="coerce.least-upper-bound.target"><span>[coerce<wbr>.least-upper-bound<wbr>.target]</span></a>
</div>

在每一种这样的情形中，都有一组类型 `T0..Tn` 需要相互强制转换到某个目标类型 `T_t`，而该目标类型起初是未知的。

<div class="rule" id="r-coerce.least-upper-bound.computation"><a class="rule-link" href="#r-coerce.least-upper-bound.computation" title="coerce.least-upper-bound.computation"><span>[coerce<wbr>.least-upper-bound<wbr>.computation]</span></a>
</div>

LUB 强制转换的计算以迭代方式完成。目标类型 `T_t` 初始为类型 `T0`。对于每个新类型 `Ti`，会考虑是否

<div class="rule" id="r-coerce.least-upper-bound.computation-identity"><a class="rule-link" href="#r-coerce.least-upper-bound.computation-identity" title="coerce.least-upper-bound.computation-identity"><span>[coerce<wbr>.least-upper-bound<wbr>.computation-identity]</span></a>
</div>

- 如果 `Ti` 可以强制转换为当前目标类型 `T_t`，则不做更改。

<div class="rule" id="r-coerce.least-upper-bound.computation-replace"><a class="rule-link" href="#r-coerce.least-upper-bound.computation-replace" title="coerce.least-upper-bound.computation-replace"><span>[coerce<wbr>.least-upper-bound<wbr>.computation-replace]</span></a>
</div>

- 否则，检查 `T_t` 是否可以强制转换为 `Ti`；如果可以，则将 `T_t` 改为 `Ti`。（此检查还以到目前为止所考虑的所有源表达式是否都有隐式强制转换为条件。）

<div class="rule" id="r-coerce.least-upper-bound.computation-unify"><a class="rule-link" href="#r-coerce.least-upper-bound.computation-unify" title="coerce.least-upper-bound.computation-unify"><span>[coerce<wbr>.least-upper-bound<wbr>.computation-unify]</span></a>
</div>

- 如果不可以，则尝试计算 `T_t` 和 `Ti` 的共同超类型，它将成为新的目标类型。

### 示例：

```rust
# let (a, b, c) = (0, 1, 2);
// For if branches
let bar = if true {
    a
} else if false {
    b
} else {
    c
};

// For match arms
let baw = match 42 {
    0 => a,
    1 => b,
    _ => c,
};

// For array elements
let bax = [a, b, c];

// For closure with multiple return statements
let clo = || {
    if true {
        a
    } else if false {
        b
    } else {
        c
    }
};
let baz = clo();

// For type checking of function with multiple return statements
fn foo() -> i32 {
    let (a, b, c) = (0, 1, 2);
    match 42 {
        0 => a,
        1 => b,
        _ => c,
    }
}
```

在这些示例中，`ba*` 的类型由 LUB 强制转换确定。并且在处理函数 `foo` 时，编译器会检查 `a`、`b`、`c` 的 LUB 强制转换结果是否为 `i32`。

### 注意事项

这一描述显然是非正式的。预计会将其进一步精确化，作为更精确地规定 Rust 类型检查器这一整体工作的一部分。