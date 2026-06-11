r[const-eval]
# 常量求值

r[const-eval.intro]
常量求值是在编译期间计算[表达式](expressions.md)结果的过程。只有所有表达式中的一个子集可以在编译时求值。

r[const-eval.const-expr]
## 常量表达式

r[const-eval.const-expr.intro]
某些形式的表达式称为常量表达式，可以在编译时求值。

r[const-eval.const-expr.const-context]
[const 上下文](#const-context)中的表达式必须是常量表达式。

r[const-eval.const-expr.evaluation]
const 上下文中的表达式总是在编译时求值。

r[const-eval.const-expr.runtime-context]
在 const 上下文之外，常量表达式_可以_在编译时求值，但不保证一定如此。

r[const-eval.const-expr.error]
如果值必须在编译时求值（即处于 const 上下文中），那么诸如越界[数组索引](expressions/array-expr.md#array-and-slice-indexing-expressions)或[溢出](expressions/operator-expr.md#overflow)这样的行为是编译器错误。否则，这些行为是警告，但很可能会在运行时 panic。

r[const-eval.const-expr.list]
只要所有操作数也是常量表达式，并且不会导致运行任何 [`Drop::drop`](destructors.md) 调用，以下表达式就是常量表达式。

r[const-eval.const-expr.literal]
* [字面量](expressions/literal-expr.md)。

r[const-eval.const-expr.parameter]
* [Const 参数](items/generics.md)。

r[const-eval.const-expr.path-item]
* 指向[函数](items/functions.md)和[常量](items/constant-items.md)的[路径](expressions/path-expr.md)。不允许递归定义常量。

r[const-eval.const-expr.path-static]
* 指向 [static](items/static-items.md) 的路径需满足以下限制：
  * 在任何常量求值上下文中，都不允许写入 `static` 条目。
  * 在任何常量求值上下文中，都不允许读取 `extern` static。
  * 如果求值_不是_在 `static` 条目的初始化器中进行的，则不允许读取任何可变 `static`。可变 `static` 是 `static mut` 条目，或具有内部可变类型的 `static` 条目。

  这些要求仅在常量被求值时检查。换言之，只要这些访问永远不会被执行，就允许它们在语法上出现在 const 上下文中。

r[const-eval.const-expr.tuple]
* [元组表达式](expressions/tuple-expr.md)。

r[const-eval.const-expr.array]
* [数组表达式](expressions/array-expr.md)。

r[const-eval.const-expr.constructor]
* [结构体表达式](expressions/struct-expr.md)。

r[const-eval.const-expr.block]
* [块表达式](expressions/block-expr.md)，包括 `unsafe` 块和 `const` 块。
    * [let 语句](statements.md#let-statements)，以及由此产生的不可反驳[模式](patterns.md)，包括可变绑定
    * [赋值表达式](expressions/operator-expr.md#assignment-expressions)
    * [复合赋值表达式](expressions/operator-expr.md#compound-assignment-expressions)
    * [表达式语句](statements.md#expression-statements)

r[const-eval.const-expr.field]
* [字段表达式](expressions/field-expr.md)。

r[const-eval.const-expr.index]
* [数组和切片索引表达式](expressions/array-expr.md#array-and-slice-indexing-expressions)，其中索引是 `usize`。

r[const-eval.const-expr.range]
* [范围表达式](expressions/range-expr.md)。

r[const-eval.const-expr.closure]
* 不捕获环境中变量的[闭包表达式](expressions/closure-expr.md)。

r[const-eval.const-expr.builtin-arith-logic]
* 用于整数和浮点类型、`bool` 以及 `char` 的内建[取负](expressions/operator-expr.md#negation-operators)、[算术](expressions/operator-expr.md#arithmetic-and-logical-binary-operators)、[逻辑](expressions/operator-expr.md#arithmetic-and-logical-binary-operators)、[比较](expressions/operator-expr.md#comparison-operators)或[惰性布尔](expressions/operator-expr.md#lazy-boolean-operators)运算符。

r[const-eval.const-expr.borrows]
* 所有形式的[借用](expressions/operator-expr.md#borrow-operators)，包括原始借用，但不包括其临时作用域会被延长（见[临时生命周期延长](destructors.md#r-destructors.scope.lifetime-extension)）到程序结束且满足以下任一条件的表达式借用：
  * 可变借用。
  * 产生具有[内部可变性](interior-mutability.md)的值的表达式的共享借用。

  ```rust,compile_fail,E0764
  // 由于位于尾部位置，此借用会将该临时项的作用域延长到
  // 程序结束。由于该借用是可变的，
  // 这在 const 表达式中是不允许的。
  const C: &u8 = &mut 0; // ERROR not allowed
  ```

  ```rust,compile_fail,E0764
  // Const 块类似于 `const` 条目的初始化器。
  let _: &u8 = const { &mut 0 }; // ERROR not allowed
  ```

  ```rust,compile_fail,E0492
  # use core::sync::atomic::AtomicU8;
  // 这是不允许的，因为 1) 临时作用域被延长到
  // 程序结束，且 2) 该临时项具有内部可变性。
  const C: &AtomicU8 = &AtomicU8::new(0); // ERROR not allowed
  ```

  ```rust,compile_fail,E0492
  # use core::sync::atomic::AtomicU8;
  // As above.
  let _: &_ = const { &AtomicU8::new(0) }; // ERROR not allowed
  ```

  ```rust
  # #![allow(static_mut_refs)]
  // 尽管此借用是可变的，但它不是对临时项的借用，所以
  // 这是允许的。
  const C: &u8 = unsafe { static mut S: u8 = 0; &mut S }; // OK
  ```

  ```rust
  # use core::sync::atomic::AtomicU8;
  // 尽管此借用是对具有内部可变性的值的借用，
  // 但它不是对临时项的借用，所以这是允许的。
  const C: &AtomicU8 = {
      static S: AtomicU8 = AtomicU8::new(0); &S // OK
  };
  ```

  ```rust
  # use core::sync::atomic::AtomicU8;
  // 这个对内部可变临时项的共享借用是允许的，
  // 因为其作用域未被延长。
  const C: () = { _ = &AtomicU8::new(0); }; // OK
  ```

  ```rust
  // 尽管该借用是可变的，并且由于提升，该临时项会存活到
  // 程序结束，但这是允许的，因为该借用
  // 不在尾部位置，因此该临时项的作用域
  // 不会通过临时生命周期延长而被延长。
  const C: () = { let _: &'static mut [u8] = &mut []; }; // OK
  //                                              ~~
  //                                     被提升的临时项。
  ```

  > [!NOTE]
  > 换句话说，为了聚焦于允许的情况而非不允许的情况，只有当被借用的[位置表达式](expressions.md#r-expr.place-value.place-memory-location)是_瞬时的_、_间接的_或 _static_ 时，内部可变数据的共享借用和可变借用才允许出现在 [const 上下文](#const-context)中。
  >
  > 如果一个位置表达式是当前 const 上下文局部的变量，或是其临时作用域包含在当前 const 上下文内的表达式，则它是_瞬时的_。
  >
  > ```rust
  > // 该借用是对初始化器局部变量的借用，因此
  > // 此位置表达式是瞬时的。
  > const C: () = { let mut x = 0; _ = &mut x; };
  > ```
  >
  > ```rust
  > // 该借用是对作用域未被延长的临时项的借用，
  > // 因此此位置表达式是瞬时的。
  > const C: () = { _ = &mut 0u8; };
  > ```
  >
  > ```rust
  > // 当临时项被提升但生命周期未被延长时，其
  > // 位置表达式仍被视为瞬时的。
  > const C: () = { let _: &'static mut [u8] = &mut []; };
  > ```
  >
  > 如果一个位置表达式是[解引用表达式](expressions/operator-expr.md#r-expr.deref)，则它是_间接的_。
  >
  > ```rust
  > const C: () = { _ = &mut *(&mut 0); };
  > ```
  >
  > 如果一个位置表达式是 `static` 条目，则它是 _static_。
  >
  > ```rust
  > # #![allow(static_mut_refs)]
  > const C: &u8 = unsafe { static mut S: u8 = 0; &mut S };
  > ```

  > [!NOTE]
  > 这些规则的一个令人意外的结果是，我们允许这样写，
  >
  > ```rust
  > const C: &[u8] = { let x: &mut [u8] = &mut []; x }; // OK
  > //                                    ~~~~~~~
  > // 即使位于可变借用之后，空数组也会被提升。
  > ```
  >
  > 但不允许下面这段类似的代码：
  >
  > ```rust,compile_fail,E0764
  > const C: &[u8] = &mut []; // ERROR
  > //               ~~~~~~~
  > //           尾表达式。
  > ```
  >
  > 二者的区别在于，在第一个示例中，空数组会被[提升](destructors.md#constant-promotion)，但它的作用域不会经历[临时生命周期延长](destructors.md#r-destructors.scope.lifetime-extension)，因此我们认为该 [位置表达式](expressions.md#r-expr.place-value.place-memory-location)是瞬时的（尽管在提升之后，该位置确实会存活到程序结束）。在第二个示例中，空数组临时值的作用域确实会经历生命周期延长，因此它会因作为对生命周期被延长的临时值的可变借用而被拒绝（也因此借用了非瞬时的位置表达式）。
  >
  > 这种效果令人意外，因为在此情形下，临时生命周期延长会使可编译的代码少于没有它时的情况。
  >
  > 更多细节见 [issue #143129](https://github.com/rust-lang/rust/issues/143129)。

r[const-eval.const-expr.deref]
* [解引用表达式](expressions/operator-expr.md#r-expr.deref)。

  ```rust,no_run
  # use core::cell::UnsafeCell;
  const _: u8 = unsafe {
      let x: *mut u8 = &raw mut *&mut 0;
      //                        ^^^^^^^
      //             对可变引用的解引用。
      *x = 1; // Dereference of mutable pointer.
      *(x as *const u8) // Dereference of constant pointer.
  };
  const _: u8 = unsafe {
      let x = &UnsafeCell::new(0);
      *x.get() = 1; // Mutation of interior mutable value.
      *x.get()
  };
  ```

r[const-eval.const-expr.group]

* [分组](expressions/grouped-expr.md)表达式。

r[const-eval.const-expr.cast]
* [类型转换](expressions/operator-expr.md#type-cast-expressions)表达式，但不包括
  * 指针到地址的转换，以及
  * 函数指针到地址的转换。

r[const-eval.const-expr.const-fn]
* 对 [const 函数](items/functions.md#const-functions)和 const 方法的调用。

r[const-eval.const-expr.loop]
* [loop](expressions/loop-expr.md#infinite-loops) 和 [while](expressions/loop-expr.md#predicate-loops) 表达式。

r[const-eval.const-expr.if-match]
* [if](expressions/if-expr.md#if-expressions) 和 [match](expressions/match-expr.md) 表达式。

r[const-eval.const-context]
## const 上下文
[const context]: #const-context

r[const-eval.const-context.def]
_const 上下文_是下列情形之一：

r[const-eval.const-context.array-length]
* [数组类型长度表达式](types/array.md)

r[const-eval.const-context.repeat-length]
* [数组重复长度表达式](expressions/array-expr.md)

r[const-eval.const-context.init]
* 下列项的初始化器
  * [常量](items/constant-items.md)
  * [静态项](items/static-items.md)
  * [枚举判别值](items/enumerations.md#discriminants)

r[const-eval.const-context.generic]
* 一个 [const 泛型实参](items/generics.md#const-generics)

r[const-eval.const-context.block]
* 一个 [const 块](expressions/block-expr.md#const-blocks)

r[const-eval.const-context.outer-generics]
数组类型长度表达式、数组重复长度表达式和 const 泛型实参在使用外层泛型参数方面受到限制：这样的表达式必须要么是单个 const 泛型参数，要么是不引用任何泛型参数的表达式。

r[const-eval.const-fn]
## const 函数

r[const-eval.const-fn.intro]
_const 函数_是可以从 const 上下文调用的函数。它使用 `const` 限定符定义，并且还包括 [tuple struct](items/structs.md) 和 [tuple enum variant](items/enumerations.md) 构造器。

> [!EXAMPLE]
> ```rust
> const fn square(x: i32) -> i32 { x * x }
>
> const VALUE: i32 = square(12);
> ```

r[const-eval.const-fn.const-context]
当从 const 上下文调用时，const 函数会在编译时由编译器解释执行。解释执行发生在编译目标的环境中，而不是宿主环境中。因此，如果你是针对 `32` 位系统编译，那么 `usize` 就是 `32` 位，这与你是在 `64` 位系统还是 `32` 位系统上构建无关。

r[const-eval.const-fn.outside-context]
当 const 函数从 const 上下文之外被调用时，其行为就像没有 `const` 限定符一样。

r[const-eval.const-fn.body-restriction]
const 函数的函数体只能使用[常量表达式](#constant-expressions)。

r[const-eval.const-fn.async]
const 函数不允许为 [async](items/functions.md#async-functions)。

r[const-eval.const-fn.type-restrictions]
const 函数的参数类型和返回类型被限制为与 const 上下文兼容的类型。 <!-- TODO: Define the type restrictions. -->

[arithmetic]:           expressions/operator-expr.md#arithmetic-and-logical-binary-operators
[array expressions]:    expressions/array-expr.md
[array indexing]:       expressions/array-expr.md#array-and-slice-indexing-expressions
[array type length expressions]: types/array.md
[assignment expressions]: expressions/operator-expr.md#assignment-expressions
[async]:                items/functions.md#async-functions
[compound assignment expressions]: expressions/operator-expr.md#compound-assignment-expressions
[block expressions]:    expressions/block-expr.md
[borrow]:               expressions/operator-expr.md#borrow-operators
[cast]:                 expressions/operator-expr.md#type-cast-expressions
[closure expressions]:  expressions/closure-expr.md
[comparison]:           expressions/operator-expr.md#comparison-operators
[const block]:          expressions/block-expr.md#const-blocks
[const functions]:      items/functions.md#const-functions
[const generic argument]: items/generics.md#const-generics
[const generic parameters]: items/generics.md#const-generics
[constant expressions]: #constant-expressions
[constants]:            items/constant-items.md
[Const parameters]:     items/generics.md
[dereference expression]: expr.deref
[dereference expressions]: expr.deref
[destructors]:          destructors.md
[enum discriminants]:   items/enumerations.md#discriminants
[expression statements]: statements.md#expression-statements
[expressions]:          expressions.md
[`extern` statics]:     items/external-blocks.md#statics
[field expressions]:    expressions/field-expr.md
[functions]:            items/functions.md
[grouped]:              expressions/grouped-expr.md
[interior mutability]:  interior-mutability.md
[if]:                   expressions/if-expr.md#if-expressions
[lazy boolean]:         expressions/operator-expr.md#lazy-boolean-operators
[let statements]:       statements.md#let-statements
[literals]:             expressions/literal-expr.md
[logical]:              expressions/operator-expr.md#arithmetic-and-logical-binary-operators
[loop]:                 expressions/loop-expr.md#infinite-loops
[match]:                expressions/match-expr.md
[negation]:             expressions/operator-expr.md#negation-operators
[overflow]:             expressions/operator-expr.md#overflow
[paths]:                expressions/path-expr.md
[patterns]:             patterns.md
[place expression]:     expr.place-value.place-memory-location
[promoted expression]:  destructors.md#constant-promotion
[promoted]:             destructors.md#constant-promotion
[range expressions]:    expressions/range-expr.md
[statics]:              items/static-items.md
[Struct expressions]:   expressions/struct-expr.md
[temporary lifetime extension]: destructors.scope.lifetime-extension
[tuple enum variant]:   items/enumerations.md
[tuple expressions]:    expressions/tuple-expr.md
[tuple struct]:         items/structs.md
[while]:                expressions/loop-expr.md#predicate-loops
