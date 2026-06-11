r[lifetime-elision]
# 生命周期省略

Rust 有一些规则，允许在编译器可以推断出合理默认选择的各种位置省略生命周期。

r[lifetime-elision.function]
## 函数中的生命周期省略

r[lifetime-elision.function.intro]
为了让常见模式更符合人体工学，可以在 [function item](types/function-item.md)、[function pointer](types/function-pointer.md) 和 [closure trait](types/closure.md) 签名中_省略_生命周期实参。以下规则用于为被省略的生命周期推断生命周期参数。

r[lifetime-elision.function.lifetimes-not-inferred]
省略无法推断的生命周期参数是错误。

r[lifetime-elision.function.explicit-placeholder]
占位生命周期 `'_` 也可以用于以相同方式让生命周期被推断。对于路径中的生命周期，优先使用 `'_`。

r[lifetime-elision.function.only-functions]
trait object 生命周期遵循[下文](#default-trait-object-lifetimes)讨论的不同规则。

r[lifetime-elision.function.implicit-lifetime-parameters]
* 参数中每个被省略的生命周期都会成为一个不同的生命周期参数。

r[lifetime-elision.function.output-lifetime]
* 如果参数中恰好使用了一个生命周期（无论是否被省略），该生命周期会被赋给_所有_被省略的输出生命周期。

r[lifetime-elision.function.receiver-lifetime]
在方法签名中还有另一条规则

* 如果接收者的类型为 `&Self`  或 `&mut Self`，则该指向 `Self` 的引用的生命周期会被赋给所有被省略的输出生命周期参数。

示例：

```rust
# trait T {}
# trait ToCStr {}
# struct Thing<'a> {f: &'a i32}
# struct Command;
#
# trait Example {
fn print1(s: &str);                                   // elided
fn print2(s: &'_ str);                                // also elided
fn print3<'a>(s: &'a str);                            // expanded

fn debug1(lvl: usize, s: &str);                       // elided
fn debug2<'a>(lvl: usize, s: &'a str);                // expanded

fn substr1(s: &str, until: usize) -> &str;            // elided
fn substr2<'a>(s: &'a str, until: usize) -> &'a str;  // expanded

fn get_mut1(&mut self) -> &mut dyn T;                 // elided
fn get_mut2<'a>(&'a mut self) -> &'a mut dyn T;       // expanded

fn args1<T: ToCStr>(&mut self, args: &[T]) -> &mut Command;                  // elided
fn args2<'a, 'b, T: ToCStr>(&'a mut self, args: &'b [T]) -> &'a mut Command; // expanded

fn other_args1<'a>(arg: &str) -> &'a str;             // elided
fn other_args2<'a, 'b>(arg: &'b str) -> &'a str;      // expanded

fn new1(buf: &mut [u8]) -> Thing<'_>;                 // elided - preferred
fn new2(buf: &mut [u8]) -> Thing;                     // elided
fn new3<'a>(buf: &'a mut [u8]) -> Thing<'a>;          // expanded
# }

type FunPtr1 = fn(&str) -> &str;                      // elided
type FunPtr2 = for<'a> fn(&'a str) -> &'a str;        // expanded

type FunTrait1 = dyn Fn(&str) -> &str;                // elided
type FunTrait2 = dyn for<'a> Fn(&'a str) -> &'a str;  // expanded
```

```rust,compile_fail
// The following examples show situations where it is not allowed to elide the
// lifetime parameter.

# trait Example {
// 无法推断，因为没有可供推断的参数。
fn get_str() -> &str;                                 // ILLEGAL

// 无法推断，不明确它是从第一个参数还是第二个参数借用而来。
fn frob(s: &str, t: &str) -> &str;                    // ILLEGAL
# }
```

r[lifetime-elision.trait-object]
## 默认 trait object 生命周期

r[lifetime-elision.trait-object.intro]
由 [trait object](types/trait-object.md) 持有的引用的假定生命周期称为其_默认对象生命周期约束_。这些约束在 [RFC 599](https://github.com/rust-lang/rfcs/blob/master/text/0599-default-object-bound.md) 中定义，并在 [RFC 1156](https://github.com/rust-lang/rfcs/blob/master/text/1156-adjust-default-object-bounds.md) 中修订。

r[lifetime-elision.trait-object.explicit-bound]
当生命周期约束被完全省略时，会使用这些默认对象生命周期约束，而不是上面定义的生命周期参数省略规则。

r[lifetime-elision.trait-object.explicit-placeholder]
如果将 `'_` 用作生命周期约束，则该约束遵循通常的省略规则。

r[lifetime-elision.trait-object.containing-type]
如果 trait object 被用作泛型类型的类型实参，则会先使用包含它的类型来尝试推断约束。

r[lifetime-elision.trait-object.containing-type-unique]
* 如果从包含类型得到唯一约束，则该约束就是默认值。

r[lifetime-elision.trait-object.containing-type-explicit]
* 如果从包含类型得到多个约束，则必须指定显式约束。

r[lifetime-elision.trait-object.trait-bounds]
如果这些规则都不适用，则使用 trait 上的约束：

r[lifetime-elision.trait-object.trait-unique]
* 如果 trait 定义时带有单个生命周期_约束_，则使用该约束。

r[lifetime-elision.trait-object.static-lifetime]
* 如果任一生命周期约束使用了 `'static`，则使用 `'static`。

r[lifetime-elision.trait-object.default]
* 如果 trait 没有生命周期约束，则生命周期在表达式中被推断，而在表达式之外为 `'static`。

```rust
// 对于以下 trait...
trait Foo { }

// 这二者相同，因为 Box<T> 对 T 没有生命周期约束
type T1 = Box<dyn Foo>;
type T2 = Box<dyn Foo + 'static>;

// ...这些也是如此：
impl dyn Foo {}
impl dyn Foo + 'static {}

// ...这些也是如此，因为 &'a T 要求 T: 'a
type T3<'a> = &'a dyn Foo;
type T4<'a> = &'a (dyn Foo + 'a);

// std::cell::Ref<'a, T> 也要求 T: 'a，所以这些相同
type T5<'a> = std::cell::Ref<'a, dyn Foo>;
type T6<'a> = std::cell::Ref<'a, dyn Foo + 'a>;
```

```rust,compile_fail
// 这是一个错误示例。
# trait Foo { }
struct TwoBounds<'a, 'b, T: ?Sized + 'a + 'b> {
    f1: &'a i32,
    f2: &'b i32,
    f3: T,
}
type T7<'a, 'b> = TwoBounds<'a, 'b, dyn Foo>;
//                                  ^^^^^^^
// Error: the lifetime bound for this object type cannot be deduced from context
```

r[lifetime-elision.trait-object.innermost-type]
注意，最内层对象会设置约束，因此 `&'a Box<dyn Foo>` 仍然是 `&'a Box<dyn Foo + 'static>`。

```rust
// 对于以下 trait...
trait Bar<'a>: 'a { }

// ...这二者相同：
type T1<'a> = Box<dyn Bar<'a>>;
type T2<'a> = Box<dyn Bar<'a> + 'a>;

// ...这些也是如此：
impl<'a> dyn Bar<'a> {}
impl<'a> dyn Bar<'a> + 'a {}
```

r[lifetime-elision.const-static]
## `const` 和 `static` 省略

r[lifetime-elision.const-static.implicit-static]
除非指定显式生命周期，否则引用类型的 [constant](items/constant-items.md) 声明和 [static](items/static-items.md) 声明都具有_隐式_的 `'static` 生命周期。因此，上面涉及 `'static` 的常量声明可以写成不带生命周期的形式。

```rust
// STRING: &'static str
const STRING: &str = "bitstring";

struct BitsNStrings<'a> {
    mybits: [u32; 2],
    mystring: &'a str,
}

// BITS_N_STRINGS: BitsNStrings<'static>
const BITS_N_STRINGS: BitsNStrings<'_> = BitsNStrings {
    mybits: [1, 2],
    mystring: STRING,
};
```

r[lifetime-elision.const-static.fn-references]
注意，如果 `static` 或 `const` 项包含函数引用或闭包引用，而这些引用本身又包含引用，则编译器会先尝试标准省略规则。如果它无法按通常规则解析生命周期，则会报错。例如：

```rust
# struct Foo;
# struct Bar;
# struct Baz;
# fn somefunc(a: &Foo, b: &Bar, c: &Baz) -> usize {42}
// 解析为 `for<'a> fn(&'a str) -> &'a str`。
const RESOLVED_SINGLE: fn(&str) -> &str = |x| x;

// 解析为 `for<'a, 'b, 'c> Fn(&'a Foo, &'b Bar, &'c Baz) -> usize`。
const RESOLVED_MULTIPLE: &dyn Fn(&Foo, &Bar, &Baz) -> usize = &somefunc;
```

```rust,compile_fail
# struct Foo;
# struct Bar;
# struct Baz;
# fn somefunc<'a,'b>(a: &'a Foo, b: &'b Bar) -> &'a Baz {unimplemented!()}
// There is insufficient information to bound the return reference lifetime
// relative to the argument lifetimes, so this is an error.
const RESOLVED_STATIC: &dyn Fn(&Foo, &Bar) -> &Baz = &somefunc;
//                                            ^
// this function's return type contains a borrowed value, but the signature
// does not say whether it is borrowed from argument 1 or argument 2
```

[closure trait]: types/closure.md
[constant]: items/constant-items.md
[function item]: types/function-item.md
[function pointer]: types/function-pointer.md
[RFC 599]: https://github.com/rust-lang/rfcs/blob/master/text/0599-default-object-bound.md
[RFC 1156]: https://github.com/rust-lang/rfcs/blob/master/text/1156-adjust-default-object-bounds.md
[static]: items/static-items.md
[trait object]: types/trait-object.md
