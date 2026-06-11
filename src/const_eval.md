<div class="rule" id="r-const-eval"><a class="rule-link" href="#r-const-eval" title="const-eval"><span>[const-eval]</span></a>
</div>

# 常量求值

<div class="rule" id="r-const-eval.intro"><a class="rule-link" href="#r-const-eval.intro" title="const-eval.intro"><span>[const-eval<wbr>.intro]</span></a>
</div>

常量求值是在编译期间计算[表达式](expressions.md)结果的过程。只有所有表达式中的一个子集可以在编译时求值。

<div class="rule" id="r-const-eval.const-expr"><a class="rule-link" href="#r-const-eval.const-expr" title="const-eval.const-expr"><span>[const-eval<wbr>.const-expr]</span></a>
</div>

## 常量表达式

<div class="rule" id="r-const-eval.const-expr.intro"><a class="rule-link" href="#r-const-eval.const-expr.intro" title="const-eval.const-expr.intro"><span>[const-eval<wbr>.const-expr<wbr>.intro]</span></a>
</div>

某些形式的表达式称为常量表达式，可以在编译时求值。

<div class="rule" id="r-const-eval.const-expr.const-context"><a class="rule-link" href="#r-const-eval.const-expr.const-context" title="const-eval.const-expr.const-context"><span>[const-eval<wbr>.const-expr<wbr>.const-context]</span></a>
</div>

[const 上下文](#const-context)中的表达式必须是常量表达式。

<div class="rule" id="r-const-eval.const-expr.evaluation"><a class="rule-link" href="#r-const-eval.const-expr.evaluation" title="const-eval.const-expr.evaluation"><span>[const-eval<wbr>.const-expr<wbr>.evaluation]</span></a>
</div>

const 上下文中的表达式总是在编译时求值。

<div class="rule" id="r-const-eval.const-expr.runtime-context"><a class="rule-link" href="#r-const-eval.const-expr.runtime-context" title="const-eval.const-expr.runtime-context"><span>[const-eval<wbr>.const-expr<wbr>.runtime-context]</span></a>
</div>

在 const 上下文之外，常量表达式_可以_在编译时求值，但不保证一定如此。

<div class="rule" id="r-const-eval.const-expr.error"><a class="rule-link" href="#r-const-eval.const-expr.error" title="const-eval.const-expr.error"><span>[const-eval<wbr>.const-expr<wbr>.error]</span></a>
</div>

如果值必须在编译时求值（即处于 const 上下文中），那么诸如越界[数组索引](expressions/array-expr.md#array-and-slice-indexing-expressions)或[溢出](expressions/operator-expr.md#overflow)这样的行为是编译器错误。否则，这些行为是警告，但很可能会在运行时 panic。

<div class="rule" id="r-const-eval.const-expr.list"><a class="rule-link" href="#r-const-eval.const-expr.list" title="const-eval.const-expr.list"><span>[const-eval<wbr>.const-expr<wbr>.list]</span></a>
</div>

只要所有操作数也是常量表达式，并且不会导致运行任何 [`Drop::drop`](destructors.md) 调用，以下表达式就是常量表达式。

<div class="rule" id="r-const-eval.const-expr.literal"><a class="rule-link" href="#r-const-eval.const-expr.literal" title="const-eval.const-expr.literal"><span>[const-eval<wbr>.const-expr<wbr>.literal]</span></a>
</div>

- [字面量](expressions/literal-expr.md)。

<div class="rule" id="r-const-eval.const-expr.parameter"><a class="rule-link" href="#r-const-eval.const-expr.parameter" title="const-eval.const-expr.parameter"><span>[const-eval<wbr>.const-expr<wbr>.parameter]</span></a>
</div>

- [Const 参数](items/generics.md)。

<div class="rule" id="r-const-eval.const-expr.path-item"><a class="rule-link" href="#r-const-eval.const-expr.path-item" title="const-eval.const-expr.path-item"><span>[const-eval<wbr>.const-expr<wbr>.path-item]</span></a>
</div>

- 指向[函数](items/functions.md)和[常量](items/constant-items.md)的[路径](expressions/path-expr.md)。不允许递归定义常量。

<div class="rule" id="r-const-eval.const-expr.path-static"><a class="rule-link" href="#r-const-eval.const-expr.path-static" title="const-eval.const-expr.path-static"><span>[const-eval<wbr>.const-expr<wbr>.path-static]</span></a>
</div>

- 指向 [static](items/static-items.md) 的路径需满足以下限制：
  
  - 在任何常量求值上下文中，都不允许写入 `static` 条目。
  - 在任何常量求值上下文中，都不允许读取 `extern` static。
  - 如果求值_不是_在 `static` 条目的初始化器中进行的，则不允许读取任何可变 `static`。可变 `static` 是 `static mut` 条目，或具有内部可变类型的 `static` 条目。
  这些要求仅在常量被求值时检查。换言之，只要这些访问永远不会被执行，就允许它们在语法上出现在 const 上下文中。

<div class="rule" id="r-const-eval.const-expr.tuple"><a class="rule-link" href="#r-const-eval.const-expr.tuple" title="const-eval.const-expr.tuple"><span>[const-eval<wbr>.const-expr<wbr>.tuple]</span></a>
</div>

- [元组表达式](expressions/tuple-expr.md)。

<div class="rule" id="r-const-eval.const-expr.array"><a class="rule-link" href="#r-const-eval.const-expr.array" title="const-eval.const-expr.array"><span>[const-eval<wbr>.const-expr<wbr>.array]</span></a>
</div>

- [数组表达式](expressions/array-expr.md)。

<div class="rule" id="r-const-eval.const-expr.constructor"><a class="rule-link" href="#r-const-eval.const-expr.constructor" title="const-eval.const-expr.constructor"><span>[const-eval<wbr>.const-expr<wbr>.constructor]</span></a>
</div>

- [结构体表达式](expressions/struct-expr.md)。

<div class="rule" id="r-const-eval.const-expr.block"><a class="rule-link" href="#r-const-eval.const-expr.block" title="const-eval.const-expr.block"><span>[const-eval<wbr>.const-expr<wbr>.block]</span></a>
</div>

- [块表达式](expressions/block-expr.md)，包括 `unsafe` 块和 `const` 块。
  - [let 语句](statements.md#let-statements)，以及由此产生的不可反驳[模式](patterns.md)，包括可变绑定
  - [赋值表达式](expressions/operator-expr.md#assignment-expressions)
  - [复合赋值表达式](expressions/operator-expr.md#compound-assignment-expressions)
  - [表达式语句](statements.md#expression-statements)

<div class="rule" id="r-const-eval.const-expr.field"><a class="rule-link" href="#r-const-eval.const-expr.field" title="const-eval.const-expr.field"><span>[const-eval<wbr>.const-expr<wbr>.field]</span></a>
</div>

- [字段表达式](expressions/field-expr.md)。

<div class="rule" id="r-const-eval.const-expr.index"><a class="rule-link" href="#r-const-eval.const-expr.index" title="const-eval.const-expr.index"><span>[const-eval<wbr>.const-expr<wbr>.index]</span></a>
</div>

- [数组和切片索引表达式](expressions/array-expr.md#array-and-slice-indexing-expressions)，其中索引是 `usize`。

<div class="rule" id="r-const-eval.const-expr.range"><a class="rule-link" href="#r-const-eval.const-expr.range" title="const-eval.const-expr.range"><span>[const-eval<wbr>.const-expr<wbr>.range]</span></a>
</div>

- [范围表达式](expressions/range-expr.md)。

<div class="rule" id="r-const-eval.const-expr.closure"><a class="rule-link" href="#r-const-eval.const-expr.closure" title="const-eval.const-expr.closure"><span>[const-eval<wbr>.const-expr<wbr>.closure]</span></a>
</div>

- 不捕获环境中变量的[闭包表达式](expressions/closure-expr.md)。

<div class="rule" id="r-const-eval.const-expr.builtin-arith-logic"><a class="rule-link" href="#r-const-eval.const-expr.builtin-arith-logic" title="const-eval.const-expr.builtin-arith-logic"><span>[const-eval<wbr>.const-expr<wbr>.builtin-arith-logic]</span></a>
</div>

- 用于整数和浮点类型、`bool` 以及 `char` 的内建[取负](expressions/operator-expr.md#negation-operators)、[算术](expressions/operator-expr.md#arithmetic-and-logical-binary-operators)、[逻辑](expressions/operator-expr.md#arithmetic-and-logical-binary-operators)、[比较](expressions/operator-expr.md#comparison-operators)或[惰性布尔](expressions/operator-expr.md#lazy-boolean-operators)运算符。

<div class="rule" id="r-const-eval.const-expr.borrows"><a class="rule-link" href="#r-const-eval.const-expr.borrows" title="const-eval.const-expr.borrows"><span>[const-eval<wbr>.const-expr<wbr>.borrows]</span></a>
</div>

- 所有形式的[借用](expressions/operator-expr.md#borrow-operators)，包括原始借用，但不包括其临时作用域会被延长（见[临时生命周期延长](destructors.md#r-destructors.scope.lifetime-extension)）到程序结束且满足以下任一条件的表达式借用：
  
  - 可变借用。
  - 产生具有[内部可变性](interior-mutability.md)的值的表达式的共享借用。
  ````````rust,compile_fail,E0764
  // 由于位于尾部位置，此借用会将该临时项的作用域延长到
  // 程序结束。由于该借用是可变的，
  // 这在 const 表达式中是不允许的。
  const C: &u8 = &mut 0; // ERROR 不允许
  ````````
  
  ````````rust,compile_fail,E0764
  // Const 块类似于 `const` 条目的初始化器。
  let _: &u8 = const { &mut 0 }; // ERROR 不允许
  ````````
  
  ````````rust,compile_fail,E0492
  # use core::sync::atomic::AtomicU8;
  // 这是不允许的，因为 1) 临时作用域被延长到
  // 程序结束，且 2) 该临时项具有内部可变性。
  const C: &AtomicU8 = &AtomicU8::new(0); // ERROR 不允许
  ````````
  
  ````````rust,compile_fail,E0492
  # use core::sync::atomic::AtomicU8;
  // As above.
  let _: &_ = const { &AtomicU8::new(0) }; // ERROR 不允许
  ````````
  
  ````````rust
  # #![allow(static_mut_refs)]
  // 尽管此借用是可变的，但它不是对临时项的借用，所以
  // 这是允许的。
  const C: &u8 = unsafe { static mut S: u8 = 0; &mut S }; // OK
  ````````
  
  ````````rust
  # use core::sync::atomic::AtomicU8;
  // 尽管此借用是对具有内部可变性的值的借用，
  // 但它不是对临时项的借用，所以这是允许的。
  const C: &AtomicU8 = {
      static S: AtomicU8 = AtomicU8::new(0); &S // OK
  };
  ````````
  
  ````````rust
  # use core::sync::atomic::AtomicU8;
  // 这个对内部可变临时项的共享借用是允许的，
  // 因为其作用域未被延长。
  const C: () = { _ = &AtomicU8::new(0); }; // OK
  ````````
  
  ````````rust
  // 尽管该借用是可变的，并且由于提升，该临时项会存活到
  // 程序结束，但这是允许的，因为该借用
  // 不在尾部位置，因此该临时项的作用域
  // 不会通过临时生命周期延长而被延长。
  const C: () = { let _: &'static mut [u8] = &mut []; }; // OK
  //                                              ~~
  //                                     被提升的临时项。
  ````````
  
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > 换句话说，为了聚焦于允许的情况而非不允许的情况，只有当被借用的[位置表达式](expressions.md#r-expr.place-value.place-memory-location)是_瞬时的\_、\_间接的_或 _static_ 时，内部可变数据的共享借用和可变借用才允许出现在 [const 上下文](#const-context)中。
   > 
   > 如果一个位置表达式是当前 const 上下文局部的变量，或是其临时作用域包含在当前 const 上下文内的表达式，则它是_瞬时的\_。
   > 
   > ````````rust
   > // 该借用是对初始化器局部变量的借用，因此
   > // 此位置表达式是瞬时的。
   > const C: () = { let mut x = 0; _ = &mut x; };
   > ````````
   > 
   > ````````rust
   > // 该借用是对作用域未被延长的临时项的借用，
   > // 因此此位置表达式是瞬时的。
   > const C: () = { _ = &mut 0u8; };
   > ````````
   > 
   > ````````rust
   > // 当临时项被提升但生命周期未被延长时，其
   > // 位置表达式仍被视为瞬时的。
   > const C: () = { let _: &'static mut [u8] = &mut []; };
   > ````````
   > 
   > 如果一个位置表达式是[解引用表达式](expressions/operator-expr.md#r-expr.deref)，则它是_间接的\_。
   > 
   > ````````rust
   > const C: () = { _ = &mut *(&mut 0); };
   > ````````
   > 
   > 如果一个位置表达式是 `static` 条目，则它是 _static_。
   > 
   > ````````rust
   > # #![allow(static_mut_refs)]
   > const C: &u8 = unsafe { static mut S: u8 = 0; &mut S };
   > ````````
  
  </div>
  
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > 这些规则的一个令人意外的结果是，我们允许这样写，
   > 
   > ````````rust
   > const C: &[u8] = { let x: &mut [u8] = &mut []; x }; // OK
   > //                                    ~~~~~~~
   > // 即使位于可变借用之后，空数组也会被提升。
   > ````````
   > 
   > 但不允许下面这段类似的代码：
   > 
   > ````````rust,compile_fail,E0764
   > const C: &[u8] = &mut []; // ERROR
   > //               ~~~~~~~
   > //           尾表达式。
   > ````````
   > 
   > 二者的区别在于，在第一个示例中，空数组会被[提升](destructors.md#constant-promotion)，但它的作用域不会经历[临时生命周期延长](destructors.md#r-destructors.scope.lifetime-extension)，因此我们认为该 [位置表达式](expressions.md#r-expr.place-value.place-memory-location)是瞬时的（尽管在提升之后，该位置确实会存活到程序结束）。在第二个示例中，空数组临时值的作用域确实会经历生命周期延长，因此它会因作为对生命周期被延长的临时值的可变借用而被拒绝（也因此借用了非瞬时的位置表达式）。
   > 
   > 这种效果令人意外，因为在此情形下，临时生命周期延长会使可编译的代码少于没有它时的情况。
   > 
   > 更多细节见 [issue #143129](https://github.com/rust-lang/rust/issues/143129)。
  
  </div>
  

<div class="rule" id="r-const-eval.const-expr.deref"><a class="rule-link" href="#r-const-eval.const-expr.deref" title="const-eval.const-expr.deref"><span>[const-eval<wbr>.const-expr<wbr>.deref]</span></a>
</div>

- [解引用表达式](expressions/operator-expr.md#r-expr.deref)。
  
  ````````rust,no_run
  # use core::cell::UnsafeCell;
  const _: u8 = unsafe {
      let x: *mut u8 = &raw mut *&mut 0;
      //                        ^^^^^^^
      //             对可变引用的解引用。
      *x = 1; // 对可变指针的解引用。
      *(x as *const u8) // 对 const 指针的解引用。
  };
  const _: u8 = unsafe {
      let x = &UnsafeCell::new(0);
      *x.get() = 1; // 对内部可变值的修改。
      *x.get()
  };
  ````````

<div class="rule" id="r-const-eval.const-expr.group"><a class="rule-link" href="#r-const-eval.const-expr.group" title="const-eval.const-expr.group"><span>[const-eval<wbr>.const-expr<wbr>.group]</span></a>
</div>

- [分组](expressions/grouped-expr.md)表达式。

<div class="rule" id="r-const-eval.const-expr.cast"><a class="rule-link" href="#r-const-eval.const-expr.cast" title="const-eval.const-expr.cast"><span>[const-eval<wbr>.const-expr<wbr>.cast]</span></a>
</div>

- [类型转换](expressions/operator-expr.md#type-cast-expressions)表达式，但不包括
  - 指针到地址的转换，以及
  - 函数指针到地址的转换。

<div class="rule" id="r-const-eval.const-expr.const-fn"><a class="rule-link" href="#r-const-eval.const-expr.const-fn" title="const-eval.const-expr.const-fn"><span>[const-eval<wbr>.const-expr<wbr>.const-fn]</span></a>
</div>

- 对 [const 函数](items/functions.md#const-functions)和 const 方法的调用。

<div class="rule" id="r-const-eval.const-expr.loop"><a class="rule-link" href="#r-const-eval.const-expr.loop" title="const-eval.const-expr.loop"><span>[const-eval<wbr>.const-expr<wbr>.loop]</span></a>
</div>

- [loop](expressions/loop-expr.md#infinite-loops) 和 [while](expressions/loop-expr.md#predicate-loops) 表达式。

<div class="rule" id="r-const-eval.const-expr.if-match"><a class="rule-link" href="#r-const-eval.const-expr.if-match" title="const-eval.const-expr.if-match"><span>[const-eval<wbr>.const-expr<wbr>.if-match]</span></a>
</div>

- [if](expressions/if-expr.md#if-expressions) 和 [match](expressions/match-expr.md) 表达式。

<div class="rule" id="r-const-eval.const-context"><a class="rule-link" href="#r-const-eval.const-context" title="const-eval.const-context"><span>[const-eval<wbr>.const-context]</span></a>
</div>

## const 上下文

<div class="rule" id="r-const-eval.const-context.def"><a class="rule-link" href="#r-const-eval.const-context.def" title="const-eval.const-context.def"><span>[const-eval<wbr>.const-context<wbr>.def]</span></a>
</div>

\_const 上下文_是下列情形之一：

<div class="rule" id="r-const-eval.const-context.array-length"><a class="rule-link" href="#r-const-eval.const-context.array-length" title="const-eval.const-context.array-length"><span>[const-eval<wbr>.const-context<wbr>.array-length]</span></a>
</div>

- [数组类型长度表达式](types/array.md)

<div class="rule" id="r-const-eval.const-context.repeat-length"><a class="rule-link" href="#r-const-eval.const-context.repeat-length" title="const-eval.const-context.repeat-length"><span>[const-eval<wbr>.const-context<wbr>.repeat-length]</span></a>
</div>

- [数组重复长度表达式](expressions/array-expr.md)

<div class="rule" id="r-const-eval.const-context.init"><a class="rule-link" href="#r-const-eval.const-context.init" title="const-eval.const-context.init"><span>[const-eval<wbr>.const-context<wbr>.init]</span></a>
</div>

- 下列项的初始化器
  - [常量](items/constant-items.md)
  - [静态项](items/static-items.md)
  - [枚举判别值](items/enumerations.md#discriminants)

<div class="rule" id="r-const-eval.const-context.generic"><a class="rule-link" href="#r-const-eval.const-context.generic" title="const-eval.const-context.generic"><span>[const-eval<wbr>.const-context<wbr>.generic]</span></a>
</div>

- 一个 [const 泛型实参](items/generics.md#const-generics)

<div class="rule" id="r-const-eval.const-context.block"><a class="rule-link" href="#r-const-eval.const-context.block" title="const-eval.const-context.block"><span>[const-eval<wbr>.const-context<wbr>.block]</span></a>
</div>

- 一个 [const 块](expressions/block-expr.md#const-blocks)

<div class="rule" id="r-const-eval.const-context.outer-generics"><a class="rule-link" href="#r-const-eval.const-context.outer-generics" title="const-eval.const-context.outer-generics"><span>[const-eval<wbr>.const-context<wbr>.outer-generics]</span></a>
</div>

数组类型长度表达式、数组重复长度表达式和 const 泛型实参在使用外层泛型参数方面受到限制：这样的表达式必须要么是单个 const 泛型参数，要么是不引用任何泛型参数的表达式。

<div class="rule" id="r-const-eval.const-fn"><a class="rule-link" href="#r-const-eval.const-fn" title="const-eval.const-fn"><span>[const-eval<wbr>.const-fn]</span></a>
</div>

## const 函数

<div class="rule" id="r-const-eval.const-fn.intro"><a class="rule-link" href="#r-const-eval.const-fn.intro" title="const-eval.const-fn.intro"><span>[const-eval<wbr>.const-fn<wbr>.intro]</span></a>
</div>

\_const 函数_是可以从 const 上下文调用的函数。它使用 `const` 限定符定义，并且还包括 [tuple struct](items/structs.md) 和 [tuple enum variant](items/enumerations.md) 构造器。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ````````rust
 > const fn square(x: i32) -> i32 { x * x }
 > 
 > const VALUE: i32 = square(12);
 > ````````

</div>

<div class="rule" id="r-const-eval.const-fn.const-context"><a class="rule-link" href="#r-const-eval.const-fn.const-context" title="const-eval.const-fn.const-context"><span>[const-eval<wbr>.const-fn<wbr>.const-context]</span></a>
</div>

当从 const 上下文调用时，const 函数会在编译时由编译器解释执行。解释执行发生在编译目标的环境中，而不是宿主环境中。因此，如果你是针对 `32` 位系统编译，那么 `usize` 就是 `32` 位，这与你是在 `64` 位系统还是 `32` 位系统上构建无关。

<div class="rule" id="r-const-eval.const-fn.outside-context"><a class="rule-link" href="#r-const-eval.const-fn.outside-context" title="const-eval.const-fn.outside-context"><span>[const-eval<wbr>.const-fn<wbr>.outside-context]</span></a>
</div>

当 const 函数从 const 上下文之外被调用时，其行为就像没有 `const` 限定符一样。

<div class="rule" id="r-const-eval.const-fn.body-restriction"><a class="rule-link" href="#r-const-eval.const-fn.body-restriction" title="const-eval.const-fn.body-restriction"><span>[const-eval<wbr>.const-fn<wbr>.body-restriction]</span></a>
</div>

const 函数的函数体只能使用[常量表达式](#constant-expressions)。

<div class="rule" id="r-const-eval.const-fn.async"><a class="rule-link" href="#r-const-eval.const-fn.async" title="const-eval.const-fn.async"><span>[const-eval<wbr>.const-fn<wbr>.async]</span></a>
</div>

const 函数不允许为 [async](items/functions.md#async-functions)。

<div class="rule" id="r-const-eval.const-fn.type-restrictions"><a class="rule-link" href="#r-const-eval.const-fn.type-restrictions" title="const-eval.const-fn.type-restrictions"><span>[const-eval<wbr>.const-fn<wbr>.type-restrictions]</span></a>
</div>

const 函数的参数类型和返回类型被限制为与 const 上下文兼容的类型。

<!-- TODO: Define the type restrictions. -->
