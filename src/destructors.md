r[destructors]
# 析构器

r[destructors.intro]
当一个[已初始化](glossary.md#initialized)的[变量](variables.md)或[临时值](expressions.md#temporaries)离开[作用域](#drop-scopes)时，会运行它的*析构器*，或者说它会被*丢弃*。[赋值](expressions/operator-expr.md#assignment-expressions)也会在其左操作数已初始化时运行该左操作数的析构器。如果变量只被部分初始化，则只会丢弃其已初始化的字段。

r[destructors.operation]
类型 `T` 的析构器由以下部分组成：

1. 如果 `T: Drop`，调用 [`<T as core::ops::Drop>::drop`](core::ops::Drop::drop)
2. 递归运行其所有字段的析构器。
    * [结构体](types/struct.md)的字段按声明顺序丢弃。
    * 活动的[枚举变体](types/enum.md)的字段按声明顺序丢弃。
    * [元组](types/tuple.md)的字段按顺序丢弃。
    * [数组](types/array.md)或拥有所有权的 [slice](types/slice.md) 的元素从第一个到最后一个依次丢弃。
    * [闭包](types/closure.md)通过 move 捕获的变量以未指定的顺序丢弃。
    * [Trait 对象](types/trait-object.md)会运行底层类型的析构器。
    * 其他类型不会导致任何进一步的丢弃。

r[destructors.drop_in_place]
如果必须手动运行析构器，例如在实现自己的智能指针时，可以使用 [`core::ptr::drop_in_place`]。

一些示例：

```rust
struct PrintOnDrop(&'static str);

impl Drop for PrintOnDrop {
    fn drop(&mut self) {
        println!("{}", self.0);
    }
}

let mut overwritten = PrintOnDrop("drops when overwritten");
overwritten = PrintOnDrop("drops when scope ends");

let tuple = (PrintOnDrop("Tuple first"), PrintOnDrop("Tuple second"));

let moved;
// 赋值时不运行析构器。
moved = PrintOnDrop("Drops when moved");
// 现在丢弃，但随后处于未初始化状态。
moved;

// 未初始化值不会丢弃。
let uninitialized: PrintOnDrop;

// 部分移动后，只丢弃剩余字段。
let mut partial_move = (PrintOnDrop("first"), PrintOnDrop("forgotten"));
// 执行一次部分移动，只留下 `partial_move.0` 已初始化。
core::mem::forget(partial_move.1);
// 当 partial_move 的作用域结束时，只丢弃第一个字段。
```

r[destructors.scope]
## drop 作用域

r[destructors.scope.intro]
每个变量或临时值都关联到一个 *drop 作用域*。当控制流离开某个 drop 作用域时，所有关联到该作用域的变量都会按声明（对变量而言）或创建（对临时值而言）的逆序丢弃。

r[destructors.scope.desugaring]
drop 作用域可以通过将 [`for`](expressions/loop-expr.md#iterator-loops)、[`if`](expressions/if-expr.md#if-expressions) 和 [`while`](expressions/loop-expr.md#predicate-loops) 表达式替换为使用 [`match`](expressions/match-expr.md)、[`loop`](expressions/loop-expr.md#infinite-loops) 和 `break` 的等价表达式来确定。

r[destructors.scope.operators]
重载运算符不与内建运算符区分，也不考虑[绑定模式](patterns.md#binding-modes)。

r[destructors.scope.list]
给定一个函数或闭包时，以下项都有 drop 作用域：

r[destructors.scope.function]
* 整个函数

r[destructors.scope.statement]
* 每个[语句](statements.md)

r[destructors.scope.expression]
* 每个[表达式](expressions.md)

r[destructors.scope.block]
* 每个块，包括函数体
    * 对于[块表达式](expressions/block-expr.md)，块的作用域和表达式的作用域是同一个作用域。

r[destructors.scope.match-arm]
* `match` 表达式的每个分支

r[destructors.scope.nesting]
drop 作用域按如下方式相互嵌套。当一次离开多个作用域时，例如从函数返回时，变量会从内向外丢弃。

r[destructors.scope.nesting.function]
* 整个函数作用域是最外层作用域。

r[destructors.scope.nesting.function-body]
* 函数体块包含在整个函数的作用域内。

r[destructors.scope.nesting.expr-statement]
* 表达式语句中的表达式的父作用域是该语句的作用域。

r[destructors.scope.nesting.let-initializer]
* [`let` 语句](statements.md#let-statements)初始化器的父作用域是该 `let` 语句的作用域。

r[destructors.scope.nesting.statement]
* 语句作用域的父作用域是包含该语句的块的作用域。

r[destructors.scope.nesting.match-guard]
* `match` 守卫表达式的父作用域是该守卫所属分支的作用域。

r[destructors.scope.nesting.match-arm]
* `match` 表达式中 `=>` 之后的表达式的父作用域是其所在分支的作用域。

r[destructors.scope.nesting.match]
* 分支作用域的父作用域是其所属 `match` 表达式的作用域。

r[destructors.scope.nesting.other]
* 所有其他作用域的父作用域都是直接包围它的表达式的作用域。

r[destructors.scope.params]
### 函数参数的作用域

所有函数参数都在整个函数体的作用域内，因此在函数求值时最后丢弃。每个实际函数参数会在该参数的模式引入的任何绑定之后丢弃。

```rust
# struct PrintOnDrop(&'static str);
# impl Drop for PrintOnDrop {
#     fn drop(&mut self) {
#         println!("drop({})", self.0);
#     }
# }
// 依次丢弃 `y`、第二个参数、`x`、第一个参数
fn patterns_in_parameters(
    (x, _): (PrintOnDrop, PrintOnDrop),
    (_, y): (PrintOnDrop, PrintOnDrop),
) {}

// 丢弃顺序为 3 2 0 1
patterns_in_parameters(
    (PrintOnDrop("0"), PrintOnDrop("1")),
    (PrintOnDrop("2"), PrintOnDrop("3")),
);
```

r[destructors.scope.bindings]
### 局部变量的作用域

r[destructors.scope.bindings.let]
在 `let` 语句中声明的局部变量关联到包含该 `let` 语句的块的作用域。

```rust
# struct PrintOnDrop(&'static str);
# impl Drop for PrintOnDrop {
#     fn drop(&mut self) {
#         println!("drop({})", self.0);
#     }
# }
let declared_first = PrintOnDrop("Dropped last in outer scope");
{
    let declared_in_block = PrintOnDrop("Dropped in inner scope");
}
let declared_last = PrintOnDrop("Dropped first in outer scope");
```

r[destructors.scope.bindings.match-arm]
在 `match` 表达式或模式匹配 `match` 守卫中声明的局部变量关联到声明它们的 `match` 分支的分支作用域。

```rust
# #![allow(irrefutable_let_patterns)]
# struct PrintOnDrop(&'static str);
# impl Drop for PrintOnDrop {
#     fn drop(&mut self) {
#         println!("drop({})", self.0);
#     }
# }
match PrintOnDrop("Dropped last in the first arm's scope") {
    // 当守卫求值成功时，控制流停留在该分支中，
    // 值可以从被匹配值移动到该分支的绑定中，
    // 从而使它们在该分支的作用域中被丢弃。
    x if let y = PrintOnDrop("Dropped second in the first arm's scope")
        && let z = PrintOnDrop("Dropped first in the first arm's scope") =>
    {
        let declared_in_block = PrintOnDrop("Dropped in inner scope");
        // 模式匹配守卫的绑定和临时值按逆序丢弃，
        // 每个守卫条件操作数的绑定会先于其临时值丢弃。
        // 最后，丢弃由该分支的模式绑定的变量。
    }
    _ => unreachable!(),
}

match PrintOnDrop("Dropped in the enclosing temporary scope") {
    // 当守卫求值失败时，控制流离开该分支作用域，
    // 导致来自较早模式匹配守卫条件操作数的绑定和临时值被丢弃。
    // 这发生在对下一个分支的守卫或主体求值之前。
    _ if let y = PrintOnDrop("Dropped in the first arm's scope")
        && false => unreachable!(),
    // 当守卫因自重叠的 or-patterns（或模式）而执行多次时，
    // 控制流会在守卫失败时离开分支作用域，
    // 并在再次执行守卫前重新进入该分支作用域。
    _ | _ if let y = PrintOnDrop("Dropped in the second arm's scope twice")
        && false => unreachable!(),
    _ => {},
}
```

r[destructors.scope.bindings.patterns]
模式中的变量会按其在模式内声明的逆序丢弃。

```rust
# struct PrintOnDrop(&'static str);
# impl Drop for PrintOnDrop {
#     fn drop(&mut self) {
#         println!("drop({})", self.0);
#     }
# }
let (declared_first, declared_last) = (
    PrintOnDrop("Dropped last"),
    PrintOnDrop("Dropped first"),
);
```

r[destructors.scope.bindings.or-patterns]
就丢弃顺序而言，[or-patterns（或模式）](patterns.md#or-patterns)按第一个子模式给出的顺序声明绑定。

```rust
# struct PrintOnDrop(&'static str);
# impl Drop for PrintOnDrop {
#     fn drop(&mut self) {
#         println!("drop({})", self.0);
#     }
# }
// 先丢弃 `x`，再丢弃 `y`。
fn or_pattern_drop_order<T>(
    (Ok([x, y]) | Err([y, x])): Result<[T; 2], [T; 2]>
//   ^^^^^^^^^^   ^^^^^^^^^^^ 这是第二个子模式。
//   |
//   这是第一个子模式。
//
//   在第一个子模式中，`x` 先于 `y` 声明。因为它是
//   第一个子模式，所以即使匹配的是绑定声明顺序相反的
//   第二个子模式，也会使用这个顺序。
) {}

// 这里匹配第一个子模式，丢弃按照第一个子模式中的
// 声明顺序发生。
or_pattern_drop_order(Ok([
    PrintOnDrop("Declared first, dropped last"),
    PrintOnDrop("Declared last, dropped first"),
]));

// 这里匹配第二个子模式，而丢弃仍然按照第一个子模式中的
// 声明顺序发生。
or_pattern_drop_order(Err([
    PrintOnDrop("Declared last, dropped first"),
    PrintOnDrop("Declared first, dropped last"),
]));
```

r[destructors.scope.temporary]
### 临时作用域

r[destructors.scope.temporary.intro]
表达式的 *临时作用域* 是一个作用域：当该表达式在[位置上下文](expressions.md#place-expressions-and-value-expressions)中使用时，保存该表达式结果的临时变量会使用这个作用域，除非该表达式被[提升](destructors.md#constant-promotion)。

r[destructors.scope.temporary.enclosing]
除生命周期延长之外，表达式的临时作用域是包含该表达式且属于以下项之一的最小作用域：

* 整个函数。
* 一个语句。
* [`if`](expressions/if-expr.md#if-expressions)、[`while`](expressions/loop-expr.md#predicate-loops) 或 [`loop`](expressions/loop-expr.md#infinite-loops) 表达式的主体。
* `if` 表达式的 `else` 块。
* `if` 或 `while` 表达式的非模式匹配条件表达式，或者非模式匹配的 `match` [守卫条件操作数](expressions/match-expr.md#match-guard-chains)。
* `match` 分支的模式匹配守卫（如果存在）以及主体表达式。
* [惰性布尔表达式](expressions/operator-expr.md#lazy-boolean-operators)的每个操作数。
* [`if`](expressions/if-expr.md#if-expressions) 的模式匹配条件以及后件主体（[destructors.scope.temporary.edition2024]）。
* [`while`](expressions/loop-expr.md#predicate-loops) 的模式匹配条件和循环体。
* 块尾表达式的整体（[destructors.scope.temporary.edition2024]）。

> [!NOTE]
> `match` 表达式的[被匹配值](glossary.md#scrutinee)不是临时作用域，因此被匹配值中的临时值可以在 `match` 表达式之后才丢弃。例如，`match 1 { ref mut z => z };` 中 `1` 的临时值会存活到该语句结束。

> [!NOTE]
> [解构赋值](expr.assign.destructure)的脱糖会限制其被赋值操作数（RHS）的临时作用域。详情见 [expr.assign.destructure.tmp-scopes]。

r[destructors.scope.temporary.edition2024]
> [!EDITION-2024]
> 2024 版次新增了两条临时作用域收窄规则：`if let` 临时值会在 `else` 块之前丢弃，块尾表达式的临时值会在尾表达式求值后立即丢弃。

一些示例：

```rust
# #![allow(irrefutable_let_patterns)]
# struct PrintOnDrop(&'static str);
# impl Drop for PrintOnDrop {
#     fn drop(&mut self) {
#         println!("drop({})", self.0);
#     }
# }
let local_var = PrintOnDrop("local var");

// 条件求值完成后即丢弃
if PrintOnDrop("If condition").0 == "If condition" {
    // 在块末尾丢弃
    PrintOnDrop("If body").0
} else {
    unreachable!()
};

if let "if let scrutinee" = PrintOnDrop("if let scrutinee").0 {
    PrintOnDrop("if let consequent").0
    // `if let 后件` 在这里丢弃
}
// `if let 被匹配值` 在这里丢弃
else {
    PrintOnDrop("if let else").0
    // `if let else` 在这里丢弃
};

while let x = PrintOnDrop("while let scrutinee").0 {
    PrintOnDrop("while let loop body").0;
    break;
    // `while let 循环体` 在这里丢弃。
    // `while let 被匹配值` 在这里丢弃。
}

// 在第一个 || 之前丢弃
(PrintOnDrop("first operand").0 == ""
// 在 ) 之前丢弃
|| PrintOnDrop("second operand").0 == "")
// 在 ; 之前丢弃
|| PrintOnDrop("third operand").0 == "";

// 被匹配值在函数末尾、局部变量之前丢弃
// （因为这是函数体块的尾表达式）。
match PrintOnDrop("Matched value in final expression") {
    // 非模式匹配守卫的临时值会在条件
    // 求值完成后丢弃
    _ if PrintOnDrop("guard condition").0 == "" => (),
    // 模式匹配守卫的临时值会在离开
    // 分支作用域时丢弃
    _ if let "guard scrutinee" = PrintOnDrop("guard scrutinee").0 => {
        let _ = &PrintOnDrop("lifetime-extended temporary in inner scope");
        // `内层作用域中生命周期被延长的临时值` 在这里丢弃
    }
    // `守卫被匹配值` 在这里丢弃
    _ => (),
}
```

r[destructors.scope.operands]
### 操作数

在对其他操作数求值期间，也会创建临时值来保存表达式操作数的结果。这些临时值关联到包含该操作数的表达式的作用域。由于表达式一经求值完成就会从这些临时值中移出，因此丢弃它们没有效果，除非该表达式的某个操作数跳出该表达式、返回，或发生 [panic](panic.md)。

```rust
# struct PrintOnDrop(&'static str);
# impl Drop for PrintOnDrop {
#     fn drop(&mut self) {
#         println!("drop({})", self.0);
#     }
# }
loop {
    // 元组表达式未完成求值，因此操作数按逆序丢弃
    (
        PrintOnDrop("Outer tuple first"),
        PrintOnDrop("Outer tuple second"),
        (
            PrintOnDrop("Inner tuple first"),
            PrintOnDrop("Inner tuple second"),
            break,
        ),
        PrintOnDrop("Never created"),
    );
}
```

r[destructors.scope.const-promotion]
### 常量提升

当一个值表达式可以写在常量中并被借用，而且该借用可以在该表达式原本所在的位置被解引用且不改变运行时行为时，就会发生到 `'static` 存储槽的提升。也就是说，被提升的表达式可以在编译时求值，并且所得值不包含[内部可变性](interior-mutability.md)或[析构器](destructors.md)（这些性质会在可能时基于该值确定，例如 `&None` 始终具有类型 `&'static Option<_>`，因为它不包含任何被禁止的内容）。

r[destructors.scope.lifetime-extension]
### 临时生命周期延长

> [!NOTE]
> 临时生命周期延长的确切规则可能会改变。这里描述的只是当前行为。

r[destructors.scope.lifetime-extension.let]
`let` 语句中表达式的临时作用域有时会被 *延长* 到包含该 `let` 语句的块的作用域。基于某些语法规则，当通常的临时作用域过小时，就会这样做。例如：

```rust
let x = &mut 0;
// 通常临时值到这里已经会被丢弃，但 `0` 的临时值会存活
// 到块的末尾。
println!("{}", x);
```

r[destructors.scope.lifetime-extension.static]
生命周期延长也适用于 `static` 和 `const` 项，在这些项中它会让临时值存活到程序结束。例如：

```rust
const C: &Vec<i32> = &Vec::new();
// 通常这会成为悬垂引用，因为该 `Vec` 只会存在于 `C` 的
// 初始化器表达式内部，但这里该借用会被生命周期延长，
// 因而实际上具有 `'static` 生命周期。
println!("{:?}", C);
```

r[destructors.scope.lifetime-extension.sub-expressions]
如果[借用](expr.operator.borrow)、[解引用](expressions/operator-expr.md#the-dereference-operator)、[字段](expressions/field-expr.md)或[元组索引表达式](expressions/tuple-expr.md#tuple-indexing-expressions)具有被延长的临时作用域，那么它的操作数也如此。如果[索引表达式](expressions/array-expr.md#array-and-slice-indexing-expressions)具有被延长的临时作用域，那么被索引的表达式也具有被延长的临时作用域。

r[destructors.scope.lifetime-extension.patterns]
#### 基于模式的延长

r[destructors.scope.lifetime-extension.patterns.extending]
*延长模式* 是以下两者之一：

* 通过引用或可变引用绑定的[标识符模式](patterns.md#identifier-patterns)。

  ```rust
  # fn temp() {}
  let ref x = temp(); // 通过引用绑定。
  # x;
  let ref mut x = temp(); // 通过可变引用绑定。
  # x;
  ```

* 至少一个直接子模式是延长模式的[结构体](patterns.md#struct-patterns)、[元组](patterns.md#tuple-patterns)、[元组结构体](patterns.md#tuple-struct-patterns)、[切片](patterns.md#slice-patterns)或 [or-pattern（或模式）](patterns.md#or-patterns)。

  ```rust
  # use core::sync::atomic::{AtomicU64, Ordering::Relaxed};
  # static X: AtomicU64 = AtomicU64::new(0);
  struct W<T>(T);
  # impl<T> Drop for W<T> { fn drop(&mut self) { X.fetch_add(1, Relaxed); } }
  let W { 0: ref x } = W(()); // 结构体模式。
  # x;
  let W(ref x) = W(()); // 元组结构体模式。
  # x;
  let (W(ref x),) = (W(()),); // 元组模式。
  # x;
  let [W(ref x), ..] = [W(())]; // 切片模式。
  # x;
  let (Ok(W(ref x)) | Err(&ref x)) = Ok(W(())); // Or 模式。
  # x;
  //
  // 以上所有临时值在这里仍然存活。
  # assert_eq!(0, X.load(Relaxed));
  ```

因此 `ref x`、`V(ref x)` 和 `[ref x, y]` 都是延长模式，但 `x`、`&ref x` 和 `&(ref x,)` 不是。

r[destructors.scope.lifetime-extension.patterns.let]
如果 `let` 语句中的模式是延长模式，则初始化器表达式的临时作用域会被延长。

```rust
# fn temp() {}
// 这是延长模式，因此临时作用域会被延长。
let ref x = *&temp(); // 可以
# x;
```

```rust,compile_fail,E0716
# fn temp() {}
// 这既不是延长模式，也不是延长表达式，
// 因此临时值会在分号处丢弃。
let &ref x = *&&temp(); // 错误
# x;
```

```rust
# fn temp() {}
// 这不是延长模式，但它是延长表达式，
// 因此临时值会存活到 `let` 语句之后。
let &ref x = &*&temp(); // 可以
# x;
```

r[destructors.scope.lifetime-extension.exprs]
#### 基于表达式的延长

r[destructors.scope.lifetime-extension.exprs.extending]
对于带初始化器的 let 语句，*延长表达式* 是以下表达式之一：

* 初始化器表达式。
* 延长[借用](expr.operator.borrow)表达式的操作数。
* 延长 [super 宏调用](expr.super-macros)表达式的 [super 操作数](expr.super-macros)。
* 延长[数组](expressions/array-expr.md#array-expressions)、[类型转换](expressions/operator-expr.md#type-cast-expressions)、[大括号结构体](expressions/struct-expr.md)或[元组](expressions/tuple-expr.md#tuple-expressions)表达式的操作数。
* 延长[元组结构体](type.struct.tuple)或[元组枚举变体](type.enum.declaration)构造器表达式的实参。
* 延长[块表达式](expressions/block-expr.md)的末尾表达式，但 [async 块表达式](expr.block.async)除外。
* 延长 [`if`](expressions/if-expr.md#if-expressions) 表达式的后件、`else if` 或 `else` 块的末尾表达式。
* 延长 [`match`](expressions/match-expr.md) 表达式的分支表达式。

> [!NOTE]
> [解构赋值](expr.assign.destructure)的脱糖会使其被赋值操作数（RHS）成为新引入块内的延长表达式。详情见 [expr.assign.destructure.tmp-ext]。

因此，`&mut 0`、`(&1, &mut 2)` 和 `Some(&mut 3)` 中的借用表达式都是延长表达式。`&0 + &1` 和 `f(&mut 0)` 中的借用则不是。

r[destructors.scope.lifetime-extension.exprs.borrows]
延长[借用](expr.operator.borrow)表达式的操作数，其[临时作用域](destructors.scope.temporary)会被[延长](destructors.scope.lifetime-extension)。

r[destructors.scope.lifetime-extension.exprs.super-macros]
延长 [super 宏调用](expr.super-macros)表达式的 [super 临时值](expr.super-macros)，其[作用域](destructors.scope.temporary)会被[延长](destructors.scope.lifetime-extension)。

> [!NOTE]
> `rustc` 不会把延长[数组](types/array.md)表达式的[数组重复操作数](expr.array.repeat-operand)视为延长表达式。是否应当如此仍是开放问题。
>
> 详情见 [Rust issue #146092](https://github.com/rust-lang/rust/issues/146092)。

#### 示例

下面是一些表达式具有被延长的临时作用域的示例：

```rust,edition2024
# use core::pin::pin;
# use core::sync::atomic::{AtomicU64, Ordering::Relaxed};
# static X: AtomicU64 = AtomicU64::new(0);
# #[derive(Debug)] struct S;
# impl Drop for S { fn drop(&mut self) { X.fetch_add(1, Relaxed); } }
# const fn temp() -> S { S }
let x = &temp(); // 借用的操作数。
# x;
let x = &raw const *&temp(); // 原始借用的操作数。
# assert_eq!(X.load(Relaxed), 0);
let x = &temp() as &dyn Send; // 类型转换的操作数。
# x;
let x = (&*&temp(),); // 元组构造器的操作数。
# x;
struct W<T>(T);
let x = W(&temp()); // 元组结构体构造器的实参。
# x;
let x = Some(&temp()); // 元组枚举变体构造器的实参。
# x;
let x = { [Some(&temp())] }; // 块的末尾表达式。
# x;
let x = const { &temp() }; // `const` 块的末尾表达式。
# x;
let x = unsafe { &temp() }; // `unsafe` 块的末尾表达式。
# x;
let x = if true { &temp() } else { &temp() };
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//           `if`/`else` 块的末尾表达式。
# x;
let x = match () { _ => &temp() }; // `match` 分支表达式。
# x;
let x = pin!(temp()); // super 宏调用表达式的 super 操作数。
# x;
let x = pin!({ &mut temp() }); // 同上。
# x;
let x = format_args!("{:?}", temp()); // 同上。
# x;
//
// 以上所有临时值在这里仍然存活。
# assert_eq!(0, X.load(Relaxed));
```

下面是一些表达式不具有被延长的临时作用域的示例：

```rust,compile_fail,E0716
# fn temp() {}
// 函数调用的实参不是延长表达式。
// 临时值会在分号处丢弃。
let x = core::convert::identity(&temp()); // 错误
# x;
```

```rust,compile_fail,E0716
# fn temp() {}
# trait Use { fn use_temp(&self) -> &Self { self } }
# impl Use for () {}
// 方法调用的接收者不是延长表达式。
let x = (&temp()).use_temp(); // 错误
# x;
```

```rust,compile_fail,E0716
# fn temp() {}
// match 表达式的被匹配值不是延长表达式。
let x = match &temp() { x => x }; // 错误
# x;
```

```rust,compile_fail,E0515
# fn temp() {}
// `async` 块的末尾表达式不是延长表达式。
let x = async { &temp() }; // 错误
# x;
```

```rust,compile_fail,E0515
# fn temp() {}
// 闭包的末尾表达式不是延长表达式。
let x = || &temp(); // 错误
# x;
```

```rust,compile_fail,E0716
# fn temp() {}
// loop break 的操作数不是延长表达式。
let x = loop { break &temp() }; // 错误
# x;
```

```rust,compile_fail,E0716
# fn temp() {}
// 到标签的 break 的操作数不是延长表达式。
let x = 'a: { break 'a &temp() }; // 错误
# x;
```

```rust,edition2024,compile_fail,E0716
# use core::pin::pin;
# fn temp() {}
// 只有当 `pin!` 调用本身是延长表达式时，传给 `pin!` 的实参
// 才是延长表达式。由于这里不是，内部块也不是延长表达式，
// 所以其尾随表达式中的临时值会立即丢弃。
pin!({ &temp() }); // 错误
```

```rust,edition2024,compile_fail,E0716
# fn temp() {}
// 同上。
format_args!("{:?}", { &temp() }); // 错误
```

r[destructors.forget]
## 不运行析构器

r[destructors.manually-suppressing]
### 手动抑制析构器

[`core::mem::forget`] 可用于防止变量的析构器运行，而 [`core::mem::ManuallyDrop`] 提供了一个包装器，用于防止变量或字段被自动丢弃。

> [!NOTE]
> 通过 [`core::mem::forget`] 或其他方式防止析构器运行是安全的，即使相关值的类型不是 `'static` 也是如此。除了本文档定义的保证析构器会运行的位置之外，类型不能为了健全性而依赖析构器会运行。

r[destructors.process-termination]
### 不展开而终止进程

有一些方式会在不[展开](panic.md#unwinding)的情况下终止进程，此时析构器不会运行。

标准库提供了 [`std::process::exit`] 和 [`std::process::abort`] 来显式执行这种终止。此外，如果 [panic 处理器][panic.panic_handler.std] 被设置为 `abort`，则 panic 始终会在不运行析构器的情况下终止进程。

还有一种额外情况需要注意：当 panic 到达[非展开式 ABI 边界](items/functions.md#unwinding)时，要么不会运行任何析构器，要么会运行直到该 ABI 边界为止的所有析构器。

[Assignment]: expressions/operator-expr.md#assignment-expressions
[binding modes]: patterns.md#binding-modes
[closure]: types/closure.md
[destructors]: destructors.md
[destructuring assignment]: expr.assign.destructure
[expression]: expressions.md
[guard condition operand]: expressions/match-expr.md#match-guard-chains
[identifier pattern]: patterns.md#identifier-patterns
[initialized]: glossary.md#initialized
[interior mutability]: interior-mutability.md
[lazy boolean expression]: expressions/operator-expr.md#lazy-boolean-operators
[non-unwinding ABI boundary]: items/functions.md#unwinding
[panic]: panic.md
[place context]: expressions.md#place-expressions-and-value-expressions
[promoted]: destructors.md#constant-promotion
[scrutinee]: glossary.md#scrutinee
[statement]: statements.md
[temporary]: expressions.md#temporaries
[unwinding]: panic.md#unwinding
[variable]: variables.md

[array]: types/array.md
[enum variant]: types/enum.md
[slice]: types/slice.md
[struct]: types/struct.md
[Trait objects]: types/trait-object.md
[tuple]: types/tuple.md

[or-patterns]: patterns.md#or-patterns
[slice pattern]: patterns.md#slice-patterns
[struct pattern]: patterns.md#struct-patterns
[tuple pattern]: patterns.md#tuple-patterns
[tuple struct pattern]: patterns.md#tuple-struct-patterns
[tuple struct]: type.struct.tuple
[tuple enum variant]: type.enum.declaration

[array expression]: expressions/array-expr.md#array-expressions
[array repeat operands]: expr.array.repeat-operand
[async block expression]: expr.block.async
[block expression]: expressions/block-expr.md
[borrow]: expr.operator.borrow
[cast expression]: expressions/operator-expr.md#type-cast-expressions
[dereference expression]: expressions/operator-expr.md#the-dereference-operator
[extended]: destructors.scope.lifetime-extension
[field expression]: expressions/field-expr.md
[indexing expression]: expressions/array-expr.md#array-and-slice-indexing-expressions
[struct expression]: expressions/struct-expr.md
[super macro call]: expr.super-macros
[super operands]: expr.super-macros
[super temporaries]: expr.super-macros
[temporary scope]: destructors.scope.temporary
[temporary scopes]: destructors.scope.temporary
[tuple expression]: expressions/tuple-expr.md#tuple-expressions
[tuple indexing expression]: expressions/tuple-expr.md#tuple-indexing-expressions

[`for`]: expressions/loop-expr.md#iterator-loops
[`if let`]: expressions/if-expr.md#if-let-patterns
[`if`]: expressions/if-expr.md#if-expressions
[`let` statement]: statements.md#let-statements
[`loop`]: expressions/loop-expr.md#infinite-loops
[`match`]: expressions/match-expr.md
[`while let`]: expressions/loop-expr.md#while-let-patterns
[`while`]: expressions/loop-expr.md#predicate-loops
