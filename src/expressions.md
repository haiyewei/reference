r[expr]
# 表达式

r[expr.syntax]
```grammar,expressions
Expression ->
      ExpressionWithoutBlock
    | ExpressionWithBlock

ExpressionWithoutBlock ->
    OuterAttribute* ExpressionWithoutBlockNoAttrs

ExpressionWithoutBlockNoAttrs ->
      LiteralExpression
    | PathExpression
    | OperatorExpression
    | GroupedExpression
    | ArrayExpression
    | AwaitExpression
    | IndexExpression
    | TupleExpression
    | TupleIndexingExpression
    | StructExpression
    | CallExpression
    | MethodCallExpression
    | FieldExpression
    | ClosureExpression
    | AsyncBlockExpression
    | ContinueExpression
    | BreakExpression
    | RangeExpression
    | ReturnExpression
    | UnderscoreExpression
    | MacroInvocation

ExpressionWithBlock ->
    OuterAttribute* ExpressionWithBlockNoAttrs

ExpressionWithBlockNoAttrs ->
      BlockExpression
    | ConstBlockExpression
    | UnsafeBlockExpression
    | LoopExpression
    | IfExpression
    | MatchExpression
```

r[expr.intro]
表达式可以有两种作用：它总会产生一个_值_，并且可以具有_效果_（也称为“副作用”）。

r[expr.evaluation]
表达式会_求值为_一个值，并在_求值_期间产生效果。

r[expr.operands]
许多表达式包含子表达式，这些子表达式称为该表达式的_操作数_。

r[expr.behavior]
每种表达式的含义决定了若干事项：

* 在求值表达式时是否求值其操作数
* 求值操作数的顺序
* 如何组合操作数的值以获得表达式的值

r[expr.structure]
以这种方式，表达式的结构决定了执行的结构。块只是另一种表达式，因此块、语句、表达式以及再次出现的块可以递归地相互嵌套到任意深度。

> [!NOTE]
> 我们为表达式的操作数赋予名称，以便讨论它们，但这些名称并不稳定，可能会改变。

r[expr.precedence]
## 表达式优先级

Rust 运算符和表达式的优先级按如下顺序排列，从强到弱。同一优先级层级的二元运算符按其结合性给出的顺序分组。

| 运算符/表达式 | 结合性 |
|-----------------------------|---------------------|
| [路径](expressions/path-expr.md#r-expr.path) |  |
| [方法调用](expressions/method-call-expr.md#r-expr.method) |  |
| [字段表达式](expressions/field-expr.md#r-expr.field) | 从左到右 |
| [函数调用](expressions/call-expr.md#r-expr.call)、[数组索引](expressions/array-expr.md#r-expr.array.index) |  |
| [`?`](expressions/operator-expr.md#r-expr.try) |  |
| 一元 [`-`](expressions/operator-expr.md#r-expr.negate) [`!`](expressions/operator-expr.md#r-expr.negate) [`*`](expressions/operator-expr.md#r-expr.deref) [借用](expressions/operator-expr.md#r-expr.operator.borrow) |  |
| [`as`](expressions/operator-expr.md#r-expr.as) | 从左到右 |
| [`*`](expressions/operator-expr.md#r-expr.arith-logic) [`/`](expressions/operator-expr.md#r-expr.arith-logic) [`%`](expressions/operator-expr.md#r-expr.arith-logic) | 从左到右 |
| [`+`](expressions/operator-expr.md#r-expr.arith-logic) [`-`](expressions/operator-expr.md#r-expr.arith-logic) | 从左到右 |
| [`<<`](expressions/operator-expr.md#r-expr.arith-logic) [`>>`](expressions/operator-expr.md#r-expr.arith-logic) | 从左到右 |
| [`&`](expressions/operator-expr.md#r-expr.arith-logic) | 从左到右 |
| [`^`](expressions/operator-expr.md#r-expr.arith-logic) | 从左到右 |
| [<code>&#124;</code>][expr.arith-logic] | 从左到右 |
| [`==`](expressions/operator-expr.md#r-expr.cmp) [`!=`](expressions/operator-expr.md#r-expr.cmp) [`<`](expressions/operator-expr.md#r-expr.cmp) [`>`](expressions/operator-expr.md#r-expr.cmp) [`<=`](expressions/operator-expr.md#r-expr.cmp) [`>=`](expressions/operator-expr.md#r-expr.cmp) | 需要括号 |
| [`&&`](expressions/operator-expr.md#r-expr.bool-logic) | 从左到右 |
| [<code>&#124;&#124;</code>][expr.bool-logic] | 从左到右 |
| [`..`](expressions/range-expr.md#r-expr.range) [`..=`](expressions/range-expr.md#r-expr.range) | 需要括号 |
| [`=`][expr.assign] [`+=`][expr.compound-assign] [`-=`][expr.compound-assign] [`*=`][expr.compound-assign] [`/=`][expr.compound-assign] [`%=`][expr.compound-assign] <br> [`&=`][expr.compound-assign] [<code>&#124;=</code>][expr.compound-assign] [`^=`][expr.compound-assign] [`<<=`][expr.compound-assign] [`>>=`][expr.compound-assign] | 从右到左 |
| [`return`](expressions/return-expr.md#r-expr.return) [`break`](expressions/loop-expr.md#r-expr.loop.break) [闭包](expressions/closure-expr.md#r-expr.closure) |  |

r[expr.operand-order]
## 操作数的求值顺序

r[expr.operand-order.default]
下列各类表达式都以相同方式求值其操作数，具体见列表之后的说明。其他表达式要么不接受操作数，要么按其各自页面所述有条件地求值操作数。

* 解引用表达式
* 错误传播表达式
* 否定表达式
* 算术和逻辑二元运算符
* 比较运算符
* 类型转换表达式
* 分组表达式
* 数组表达式
* await 表达式
* 索引表达式
* 元组表达式
* 元组索引表达式
* struct 表达式
* 调用表达式
* 方法调用表达式
* 字段表达式
* break 表达式
* 范围表达式
* return 表达式

r[expr.operand-order.operands-before-primary]
这些表达式的操作数会在应用该表达式的效果之前求值。接受多个操作数的表达式会按照源代码中写出的顺序从左到右求值。

> [!NOTE]
> 哪些子表达式是某个表达式的操作数，由上一节所述的表达式优先级决定。

例如，两个 `next` 方法调用总会以相同顺序被调用：

```rust
# // Using vec instead of array to avoid references
# // since there is no stable owned array iterator
# // at the time this example was written.
let mut one_two = vec![1, 2].into_iter();
assert_eq!(
    (1, 2),
    (one_two.next().unwrap(), one_two.next().unwrap())
);
```

> [!NOTE]
> 由于这一规则会递归应用，这些表达式也会从最内层到最外层求值，并且会忽略同级表达式，直到不再有内部子表达式。

r[expr.place-value]
## 位置表达式和值表达式

r[expr.place-value.intro]
表达式分为两大类：位置表达式和值表达式；另外还有第三个较小的表达式类别，称为赋值目标表达式。在每个表达式内部，操作数同样可能出现在位置上下文或值上下文中。表达式的求值既取决于它自身的类别，也取决于它所处的上下文。

r[expr.place-value.place-memory-location]
_位置表达式_是表示内存位置的表达式。

r[expr.place-value.place-expr-kinds]
这些表达式包括引用局部变量的[路径](expressions/path-expr.md)、[静态变量](items/static-items.md)、[解引用](expressions/operator-expr.md#the-dereference-operator)（`*expr`）、[数组索引](expressions/array-expr.md#array-and-slice-indexing-expressions)表达式（`expr[expr]`）、[字段](expressions/field-expr.md)引用（`expr.f`），以及带括号的位置表达式。

r[expr.place-value.value-expr-kinds]
所有其他表达式都是值表达式。

r[expr.place-value.value-result]
_值表达式_是表示实际值的表达式。

r[expr.place-value.place-context]
以下上下文是_位置表达式_上下文：

* [复合赋值](expressions/operator-expr.md#compound-assignment-expressions)表达式的左操作数。
* 一元[借用](expressions/operator-expr.md#borrow-operators)、[原始借用](expressions/operator-expr.md#raw-borrow-operators)或[解引用](expressions/operator-expr.md#the-dereference-operator)运算符的操作数。
* [字段表达式](expressions/field-expr.md#r-expr.field)的操作数。
* [数组索引表达式](expressions/array-expr.md#r-expr.array.index)中被索引的操作数。
* [元组索引表达式](expressions/tuple-expr.md#r-expr.tuple-index)的元组操作数。
* 任何[隐式借用](#implicit-borrows)的操作数。
* [let 语句](statements.md#let-statements)的初始化器。
* [`if let`](expressions/if-expr.md#if-let-patterns)、[`match`](expressions/match-expr.md) 或 [`while let`](expressions/loop-expr.md#while-let-patterns) 表达式的[被匹配值](glossary.md#scrutinee)。
* [函数式更新](expressions/struct-expr.md#functional-update-syntax) struct 表达式的基底。

> [!NOTE]
> 从历史上看，位置表达式曾称为 _lvalues_，值表达式曾称为 _rvalues_。

r[expr.place-value.assignee]
_赋值目标表达式_是出现在[赋值](expressions/operator-expr.md#assignment-expressions)表达式左操作数中的表达式。明确地说，赋值目标表达式包括：

- 位置表达式。
- [下划线](expressions/underscore-expr.md)。
- 由赋值目标表达式组成的[元组](expressions/tuple-expr.md)。
- 由赋值目标表达式组成的[切片](expressions/array-expr.md#r-expr.array.index)。
- 由赋值目标表达式组成的[元组 struct](items/structs.md#r-items.struct.tuple)。
- 由赋值目标表达式组成的 [struct](expressions/struct-expr.md#r-expr.struct)（带有可选的命名字段）。
- [单元 struct](items/structs.md#r-items.struct.unit)

r[expr.place-value.parenthesis]
赋值目标表达式内部允许任意加括号。

r[expr.move]
### 移动和复制类型

r[expr.move.intro]
当位置表达式在值表达式上下文中求值，或在模式中按值绑定时，它表示该内存位置_中_保存的值。

r[expr.move.copy]
如果该值的类型实现了 [`Copy`](special-types-and-traits.md#copy)，则该值会被复制。

r[expr.move.requires-sized]
在其余情况下，如果该类型是 [`Sized`](special-types-and-traits.md#sized)，则可能可以移动该值。

r[expr.move.movable-place]
只有以下位置表达式可以被移出：

* 当前未被借用的[变量](variables.md)。
* [临时值](#temporaries)。
* 可以被移出且未实现 [`Drop`](special-types-and-traits.md#drop) 的位置表达式的[字段](expressions/field-expr.md)。
* 对类型为 [`Box<T>`](special-types-and-traits.md#boxt) 且本身也可以被移出的表达式进行[解引用](expressions/operator-expr.md#the-dereference-operator)所得的结果。

r[expr.move.deinitialization]
从求值为局部变量的位置表达式中移出后，该位置会被反初始化，并且在重新初始化之前不能再次读取。

r[expr.move.place-invalid]
在所有其他情况下，尝试在值表达式上下文中使用位置表达式都是错误。

r[expr.mut]
### 可变性

r[expr.mut.intro]
若要对一个位置表达式进行[赋值](expressions/operator-expr.md#assignment-expressions)、进行可变[借用](expressions/operator-expr.md#borrow-operators)、进行[隐式可变借用](#implicit-borrows)，或将其绑定到包含 `ref mut` 的模式，它必须是_可变的_。我们称这些表达式为_可变位置表达式_。相对地，其他位置表达式称为_不可变位置表达式_。

r[expr.mut.valid-places]
以下表达式可以是可变位置表达式上下文：

* 当前未被借用的可变[变量](variables.md)。
* [可变 `static` 条目](items/static-items.md#mutable-statics)。
* [临时值](#temporaries)。
* [字段](expressions/field-expr.md)：这会在可变位置表达式上下文中求值子表达式。
* 对 `*mut T` 指针的[解引用](expressions/operator-expr.md#the-dereference-operator)。
* 对类型为 `&mut T` 的变量或变量字段的解引用。注意：这是下一条规则要求的例外。
* 对实现了 `DerefMut` 的类型进行解引用：这随后要求被解引用的值在可变位置表达式上下文中求值。
* 对实现了 `IndexMut` 的类型进行[数组索引](expressions/array-expr.md#array-and-slice-indexing-expressions)：这随后会在可变位置表达式上下文中求值被索引的值，但不会在该上下文中求值索引。

r[expr.temporary]
### 临时值

在大多数位置表达式上下文中使用值表达式时，会创建一个临时的未命名内存位置，并用该值初始化它。该表达式随后会求值为这个位置，除非它被[提升](destructors.md#constant-promotion)为 `static`。该临时值的[drop 作用域](destructors.md#drop-scopes)通常是外围语句的末尾。

r[expr.super-macros]
### super 宏

r[expr.super-macros.intro]
某些内置宏可以创建[临时值](expressions.md#r-expr.temporary)，其[作用域](destructors.md#r-destructors.scope.temporary)可以被[延长](destructors.md#r-destructors.scope.lifetime-extension)。这些临时值是 _super 临时值_，这些宏是 _super 宏_。这些宏的[调用](macros.md#r-macro.invocation)是 _super 宏调用表达式_。这些宏的实参可以是 _super 操作数_。

> [!NOTE]
> 当 super 宏调用表达式是[延长表达式](destructors.md#r-destructors.scope.lifetime-extension.exprs)时，它的 super 操作数是[延长表达式](destructors.md#r-destructors.scope.lifetime-extension.exprs)，并且 super 临时值的[作用域](destructors.md#r-destructors.scope.temporary)会被[延长](destructors.md#r-destructors.scope.lifetime-extension)。见 [destructors.scope.lifetime-extension.exprs](destructors.md#r-destructors.scope.lifetime-extension.exprs)。

r[expr.super-macros.format_args]
#### `format_args!`

r[expr.super-macros.format_args.super-operands]
除格式字符串实参外，传给 [`format_args!`](../core/macro.format_args.html) 的所有实参都是 _super 操作数_。

```rust,edition2024
# fn temp() -> String { String::from("") }
// Due to the call being an extending expression and the argument
// being a super operand, the inner block is an extending expression,
// so the scope of the temporary created in its trailing expression
// is extended.
let _ = format_args!("{}", { &temp() }); // OK
```

r[expr.super-macros.format_args.super-temporaries]
[`format_args!`](../core/macro.format_args.html) 的 super 操作数会被[隐式借用](expressions.md#r-expr.implicit-borrow)，因此是[位置表达式上下文](expressions.md#r-expr.place-value)。当[值表达式](expressions.md#r-expr.place-value)作为实参传入时，它会创建一个 _super 临时值_。

```rust
# fn temp() -> String { String::from("") }
let x = format_args!("{}", temp());
x; // <-- The temporary is extended, allowing use here.
```

对 [`format_args!`](../core/macro.format_args.html) 的调用进行展开时，有时会创建其他内部 _super 临时值_。

```rust,compile_fail,E0716
let x = {
    // 此调用会创建一个内部临时值。
    let x = format_args!("{:?}", 0);
    x // <-- The temporary is extended, allowing its use here.
}; // <-- The temporary is dropped here.
x; // ERROR
```

```rust
// 此调用不会创建内部临时值。
let x = { let x = format_args!("{}", 0); x };
x; // OK
```

> [!NOTE]
> [`format_args!`](../core/macro.format_args.html) 何时会或不会创建内部临时值，其细节目前未指定。

r[expr.super-macros.pin]
#### `pin!`

r[expr.super-macros.pin.super-operands]
[`pin!`](../core/pin/macro.pin.html) 的实参是 _super 操作数_。

```rust,edition2024
# use core::pin::pin;
# fn temp() {}
// 与上面的 `format_args!` 相同。
let _ = pin!({ &temp() }); // OK
```

r[expr.super-macros.pin.super-temporaries]
[`pin!`](../core/pin/macro.pin.html) 的实参是[值表达式上下文](expressions.md#r-expr.place-value)，并会创建一个 _super 临时值_。

```rust
# use core::pin::pin;
# fn temp() {}
// 该实参会求值到一个 super 临时值中。
let x = pin!(temp());
// 临时值的作用域被延长，因此允许在这里使用它。
x; // OK
```

r[expr.implicit-borrow]
### 隐式借用

r[expr.implicit-borrow-intro]
某些表达式会通过隐式借用一个表达式而将其视为位置表达式。例如，可以直接比较两个未定大小的[切片](types/slice.md)是否相等，因为 `==` 运算符会隐式借用其操作数：

```rust
# let c = [1, 2, 3];
# let d = vec![1, 2, 3];
let a: &[i32];
let b: &[i32];
# a = &c;
# b = &d;
// ...
*a == *b;
// 等价形式：
::std::cmp::PartialEq::eq(&*a, &*b);
```

r[expr.implicit-borrow.application]
以下表达式中可能会发生隐式借用：

* [方法调用](expressions/method-call-expr.md)表达式中的左操作数。
* [字段](expressions/field-expr.md)表达式中的左操作数。
* [调用表达式](expressions/call-expr.md)中的左操作数。
* [数组索引](expressions/array-expr.md#array-and-slice-indexing-expressions)表达式中的左操作数。
* [解引用运算符](expressions/operator-expr.md#the-dereference-operator)（`*`）的操作数。
* [比较](expressions/operator-expr.md#comparison-operators)的操作数。
* [复合赋值](expressions/operator-expr.md#compound-assignment-expressions)的左操作数。
* 传给 [`format_args!`](../core/macro.format_args.html) 的实参，但格式字符串除外。

r[expr.overload]
## 重载 trait

以下许多运算符和表达式也可以使用 `std::ops` 或 `std::cmp` 中的 trait 为其他类型重载。这些 trait 也以相同名称存在于 `core::ops` 和 `core::cmp` 中。

r[expr.attr]
## 表达式属性

r[expr.attr.restriction]
表达式前的[外部属性](attributes.md)只允许出现在少数特定情形中：

* 出现在用作[语句](statements.md)的表达式之前。
* [数组表达式](expressions/array-expr.md)、[元组表达式](expressions/tuple-expr.md)、[调用表达式](expressions/call-expr.md)和元组式 [struct](expressions/struct-expr.md) 表达式的元素。
* [块表达式](expressions/block-expr.md)的尾表达式。
<!-- Keep list in sync with block-expr.md -->

r[expr.attr.never-before]
它们绝不允许出现在以下内容之前：
* [范围](expressions/range-expr.md)表达式。
* 二元运算符表达式（[ArithmeticOrLogicalExpression](expressions/operator-expr.md#grammar-ArithmeticOrLogicalExpression)、[ComparisonExpression](expressions/operator-expr.md#grammar-ComparisonExpression)、[LazyBooleanExpression](expressions/operator-expr.md#grammar-LazyBooleanExpression)、[TypeCastExpression](expressions/operator-expr.md#grammar-TypeCastExpression)、[AssignmentExpression](expressions/operator-expr.md#grammar-AssignmentExpression)、[CompoundAssignmentExpression](expressions/operator-expr.md#grammar-CompoundAssignmentExpression)）。

[`Box<T>`]:             special-types-and-traits.md#boxt
[`Copy`]:               special-types-and-traits.md#copy
[`Drop`]:               special-types-and-traits.md#drop
[`if let`]:             expressions/if-expr.md#if-let-patterns
[`format_args!`]:       core::format_args
[`pin!`]:               core::pin::pin
[`Sized`]:              special-types-and-traits.md#sized
[`while let`]:          expressions/loop-expr.md#while-let-patterns
[array expressions]:    expressions/array-expr.md
[array indexing]:       expressions/array-expr.md#array-and-slice-indexing-expressions
[array indexing expression]: expr.array.index
[assign]:               expressions/operator-expr.md#assignment-expressions
[block expressions]:    expressions/block-expr.md
[borrow]:               expressions/operator-expr.md#borrow-operators
[call expressions]:     expressions/call-expr.md
[comparison]:           expressions/operator-expr.md#comparison-operators
[compound assignment]:  expressions/operator-expr.md#compound-assignment-expressions
[deref]:                expressions/operator-expr.md#the-dereference-operator
[destructors]:          destructors.md
[drop scope]:           destructors.md#drop-scopes
[extended]:             destructors.scope.lifetime-extension
[extending expression]: destructors.scope.lifetime-extension.exprs
[extending expressions]: destructors.scope.lifetime-extension.exprs
[field]:                expressions/field-expr.md
[field expression]:     expr.field
[functional update]:    expressions/struct-expr.md#functional-update-syntax
[implicit borrow]:      #implicit-borrows
[implicitly borrowed]:  expr.implicit-borrow
[implicitly mutably borrowed]: #implicit-borrows
[interior mutability]:  interior-mutability.md
[let statement]:        statements.md#let-statements
[macro invocations]:    macro.invocation
[match]:                expressions/match-expr.md
[method-call]:          expressions/method-call-expr.md
[Mutable `static` items]: items/static-items.md#mutable-statics
[Outer attributes]:     attributes.md
[paths]:                expressions/path-expr.md
[place expression contexts]: expr.place-value
[promoted]:             destructors.md#constant-promotion
[Range]:                expressions/range-expr.md
[raw borrow]:           expressions/operator-expr.md#raw-borrow-operators
[scrutinee]:            glossary.md#scrutinee
[slice]:                types/slice.md
[statement]:            statements.md
[static variables]:     items/static-items.md
[struct]:               expressions/struct-expr.md
[Structs]:              expr.struct
[temporaries]:          expr.temporary
[temporary scopes]:     destructors.scope.temporary
[Temporary values]:     #temporaries
[tuple expressions]:    expressions/tuple-expr.md
[tuple indexing expression]: expr.tuple-index
[Tuple structs]:        items.struct.tuple
[Tuples]:               expressions/tuple-expr.md
[Underscores]:          expressions/underscore-expr.md
[Unit structs]:         items.struct.unit
[value expression context]: expr.place-value
[value expression]:     expr.place-value
[Variables]:            variables.md
