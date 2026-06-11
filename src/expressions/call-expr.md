r[expr.call]
# 调用表达式

r[expr.call.syntax]
```grammar,expressions
CallExpression -> Expression `(` CallParams? `)`

CallParams -> Expression ( `,` Expression )* `,`?
```

r[expr.call.intro]
_调用表达式_调用函数。调用表达式的语法是一个称为_函数操作数_的表达式，后跟一个用括号括起、以逗号分隔的表达式列表，该列表称为_实参操作数_。

r[expr.call.convergence]
如果函数最终返回，则该表达式完成。

r[expr.call.trait]
对于[非函数类型](../types/function-item.md)，表达式 `f(...)` 会根据函数操作数，使用以下 trait 之一上的方法：

- [`Fn`](../../core/ops/function/trait.Fn.html) 或 [`AsyncFn`](../../core/ops/async_function/trait.AsyncFn.html) --- 共享引用。
- [`FnMut`](../../core/ops/function/trait.FnMut.html) 或 [`AsyncFnMut`](../../core/ops/async_function/trait.AsyncFnMut.html) --- 可变引用。
- [`FnOnce`](../../core/ops/function/trait.FnOnce.html) 或 [`AsyncFnOnce`](../../core/ops/async_function/trait.AsyncFnOnce.html) --- 值。

r[expr.call.autoref-deref]
如果需要，将进行自动借用。函数操作数也会按需被[自动解引用](field-expr.md#automatic-dereferencing)。

调用表达式的一些示例：

```rust
# fn add(x: i32, y: i32) -> i32 { 0 }
let three: i32 = add(1i32, 2i32);
let name: &'static str = (|| "Rust")();
```

r[expr.call.desugar]
## 消除函数调用歧义

r[expr.call.desugar.fully-qualified]
所有函数调用都是更显式的[完全限定语法](../paths.md#qualified-paths)的语法糖。

r[expr.call.desugar.ambiguity]
根据作用域内项所造成的调用歧义，函数调用可能需要完全限定。

> [!NOTE]
> 过去，文档、议题、RFC 和其他社区文字中曾使用过 "Unambiguous Function Call Syntax"、"Universal Function Call Syntax" 或 "UFCS" 这些术语。然而，这些术语描述力不足，并且可能混淆当前问题。我们在这里提及它们是为了便于搜索。

r[expr.call.desugar.limits]
有几种经常出现的情形会导致方法调用或关联函数调用的接收者或所指对象产生歧义。这些情形可以包括：

* 多个作用域内的 trait 为相同类型定义了同名方法
* 不希望发生自动 `deref`；例如，要区分智能指针本身上的方法和该指针所指对象上的方法
* 不接受实参并返回某个类型属性的方法，例如 [`default()`](../../core/default/trait.Default.html#tymethod.default) 和 [`size_of()`](../../core/mem/fn.size_of.html)

r[expr.call.desugar.explicit-path]
为解决歧义，程序员可以使用更具体的路径、类型或 trait 来指称所需的方法或函数。

例如，

```rust
trait Pretty {
    fn print(&self);
}

trait Ugly {
    fn print(&self);
}

struct Foo;
impl Pretty for Foo {
    fn print(&self) {}
}

struct Bar;
impl Pretty for Bar {
    fn print(&self) {}
}
impl Ugly for Bar {
    fn print(&self) {}
}

fn main() {
    let f = Foo;
    let b = Bar;

    // we can do this because we only have one item called `print` for `Foo`s
    f.print();
    // more explicit, and, in the case of `Foo`, not necessary
    Foo::print(&f);
    // if you're not into the whole brevity thing
    <Foo as Pretty>::print(&f);

    // b.print(); // Error: multiple 'print' found
    // Bar::print(&b); // Still an error: multiple `print` found

    // necessary because of in-scope items defining `print`
    <Bar as Pretty>::print(&b);
}
```

有关更多细节和动机，请参见 [RFC 132](https://github.com/rust-lang/rfcs/blob/master/text/0132-ufcs.md)。

[RFC 132]: https://github.com/rust-lang/rfcs/blob/master/text/0132-ufcs.md
[`default()`]: std::default::Default::default
[`size_of()`]: std::mem::size_of
[automatically dereferenced]: field-expr.md#automatic-dereferencing
[fully-qualified syntax]: ../paths.md#qualified-paths
[non-function types]: ../types/function-item.md
