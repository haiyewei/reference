r[expr.method]
# 方法调用表达式

r[expr.method.syntax]
```grammar,expressions
MethodCallExpression -> Expression `.` PathExprSegment `(`CallParams? `)`
```

r[expr.method.intro]
_方法调用_由一个表达式（_接收者_）后跟单个点号、一个表达式路径段以及带括号的表达式列表组成。

r[expr.method.target]
方法调用会解析为特定 trait 上的关联[方法][methods]：如果左侧的确切 `self` 类型已知，则静态分派到某个方法；如果左侧表达式是间接 [trait 对象](../types/trait-object.md)，则动态分派。

```rust
let pi: Result<f32, _> = "3.14".parse();
let log_pi = pi.unwrap_or(1.0).log(2.72);
# assert!(1.14 < log_pi && log_pi < 1.15)
```

r[expr.method.autoref-deref]
查找方法调用时，可以对接收者自动解引用或借用，以便调用方法。由于可能有多个可调用的方法，这需要比其他函数更复杂的查找过程。使用以下过程：

r[expr.method.candidate-receivers]
第一步是构建候选接收者类型列表。通过反复对接收者表达式的类型进行[解引用](operator-expr.md#the-dereference-operator)来获得这些类型，将遇到的每个类型添加到列表中，然后最后尝试一次数组的 [unsized 强制转换](../type-coercions.md#unsized-coercions)，如果成功，则添加结果类型。

r[expr.method.candidate-receivers-refs]
然后，对于每个候选类型 `T`，在列表中紧接 `T` 之后添加 `&T` 和 `&mut T`。

例如，如果接收者的类型是 `Box<[i32;2]>`，则候选类型将是 `Box<[i32;2]>`、`&Box<[i32;2]>`、`&mut Box<[i32;2]>`、`[i32; 2]`（通过解引用）、`&[i32; 2]`、`&mut [i32; 2]`、`[i32]`（通过 unsized 强制转换）、`&[i32]`，最后是 `&mut [i32]`。

r[expr.method.candidate-search]
然后，对于每个候选类型 `T`，在以下位置搜索具有该类型接收者的[可见](../visibility-and-privacy.md)方法：

1. `T` 的固有方法（直接在 `T` 上实现的方法）。
1. 由 `T` 所实现的任何[可见](../visibility-and-privacy.md) trait 提供的方法。如果 `T` 是类型参数，则先查找 `T` 上 trait 约束提供的方法。然后查找作用域中的所有其余方法。

> [!NOTE]
> 查找会按顺序对每个类型进行，这有时可能导致意外的结果。下面的代码将打印 "In trait impl!"，因为会先查找 `&self` 方法，所以会在找到结构体的 `&mut self` 方法之前找到 trait 方法。
>
> ```rust
> struct Foo {}
>
> trait Bar {
>   fn bar(&self);
> }
>
> impl Foo {
>   fn bar(&mut self) {
>     println!("In struct impl!")
>   }
> }
>
> impl Bar for Foo {
>   fn bar(&self) {
>     println!("In trait impl!")
>   }
> }
>
> fn main() {
>   let mut f = Foo{};
>   f.bar();
> }
> ```

r[expr.method.ambiguous-target]
如果这导致多个可能的候选项，则为错误，并且必须将接收者[转换](call-expr.md#disambiguating-function-calls)为合适的接收者类型，才能进行方法调用。

r[expr.method.receiver-constraints]
此过程不会考虑接收者的可变性或生命周期，也不会考虑方法是否为 `unsafe`。一旦查找到某个方法，如果由于其中一个（或多个）原因而无法调用它，则结果是编译器错误。

r[expr.method.ambiguous-search]
如果到达某个步骤时存在多个可能的方法，例如泛型方法或 trait 被认为相同的情况，则为编译器错误。这些情况要求对方法和函数调用使用[消歧函数调用语法](call-expr.md#disambiguating-function-calls)。

r[expr.method.edition2021]
> [!EDITION-2021]
> 在 2021 edition 之前，在搜索可见方法期间，如果候选接收者类型是[数组类型](../types/array.md)，则会忽略标准库 [`IntoIterator`](../../core/iter/traits/collect/trait.IntoIterator.html) trait 提供的方法。
>
> 为此目的使用的 edition 由表示方法名的词法单元决定。
>
> 这个特殊情况将来可能会被移除。

> [!WARNING]
> 对于 [trait 对象](../types/trait-object.md)，如果存在与 trait 方法同名的固有方法，那么尝试在方法调用表达式中调用该方法时会产生编译器错误。相反，可以使用[消歧函数调用语法](call-expr.md#disambiguating-function-calls)调用该方法；在这种情况下，调用的是 trait 方法，而不是固有方法。没有办法调用该固有方法。不要在 trait 对象上定义与 trait 方法同名的固有方法即可。

[visible]: ../visibility-and-privacy.md
[array type]: ../types/array.md
[trait objects]: ../types/trait-object.md
[disambiguate call]: call-expr.md#disambiguating-function-calls
[disambiguating function call syntax]: call-expr.md#disambiguating-function-calls
[dereference]: operator-expr.md#the-dereference-operator
[methods]: ../items/associated-items.md#methods
[unsized coercion]: ../type-coercions.md#unsized-coercions
[`IntoIterator`]: std::iter::IntoIterator
