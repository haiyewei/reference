r[type.closure]
# 闭包类型

r[type.closure.intro]
[闭包表达式](../expressions/closure-expr.md)会产生一个闭包值，其类型唯一、匿名且无法写出。闭包类型大致等价于一个包含被捕获值的 struct。例如，以下闭包：

```rust
#[derive(Debug)]
struct Point { x: i32, y: i32 }
struct Rectangle { left_top: Point, right_bottom: Point }

fn f<F : FnOnce() -> String> (g: F) {
    println!("{}", g());
}

let mut rect = Rectangle {
    left_top: Point { x: 1, y: 1 },
    right_bottom: Point { x: 0, y: 0 }
};

let c = || {
    rect.left_top.x += 1;
    rect.right_bottom.x += 1;
    format!("{:?}", rect.left_top)
};
f(c); // Prints "Point { x: 2, y: 1 }".
```

会生成大致如下的闭包类型：

<!-- ignore: simplified -->
```rust,ignore
// Note: This is not exactly how it is translated, this is only for
// illustration.

struct Closure<'a> {
    left_top : &'a mut Point,
    right_bottom_x : &'a mut i32,
}

impl<'a> FnOnce<()> for Closure<'a> {
    type Output = String;
    extern "rust-call" fn call_once(self, args: ()) -> String {
        self.left_top.x += 1;
        *self.right_bottom_x += 1;
        format!("{:?}", self.left_top)
    }
}
```

因此，对 `f` 的调用会像下面这样工作：

<!-- ignore: continuation of above -->
```rust,ignore
f(Closure{ left_top: &mut rect.left_top, right_bottom_x: &mut rect.right_bottom.x });
```

r[type.closure.capture]
## 捕获模式

r[type.closure.capture.intro]
_捕获模式_决定环境中的[位置表达式](../expressions.md#place-expressions-and-value-expressions)如何被借用或移动进闭包。捕获模式包括：

1. 不可变借用（`ImmBorrow`）--- 位置表达式会作为[共享引用](pointer.md#references--and-mut)被捕获。
2. 唯一不可变借用（`UniqueImmBorrow`）--- 这类似于不可变借用，但必须如[下文](#unique-immutable-borrows-in-captures)所述保持唯一。
3. 可变借用（`MutBorrow`）--- 位置表达式会作为[可变引用](pointer.md#mutable-references-mut)被捕获。
4. 移动（`ByValue`）--- 位置表达式通过将[值移动](../expressions.md#moved-and-copied-types)进闭包来捕获。

r[type.closure.capture.precedence]
来自环境的位置表达式会按第一个与被捕获值在闭包体内使用方式兼容的模式被捕获。该模式不受闭包周围代码影响，例如相关变量、字段或闭包自身的生命周期。

[moving the value]: ../expressions.md#moved-and-copied-types
[mutable reference]: pointer.md#mutable-references-mut
[place expression]: ../expressions.md#place-expressions-and-value-expressions
[shared reference]: pointer.md#references--and-mut

r[type.closure.capture.copy]
### `Copy` 值

被移动进闭包且实现 [`Copy`](../special-types-and-traits.md#copy) 的值，会以 `ImmBorrow` 模式捕获。

```rust
let x = [0; 1024];
let c = || {
    let y = x; // x captured by ImmBorrow
};
```

r[type.closure.async.input]
### async 输入捕获

async 闭包总是捕获所有输入实参，无论它们是否在闭包体内使用。

## 捕获精度

r[type.closure.capture.precision.capture-path]
_捕获路径_是一个序列，它以环境中的变量开头，后接从该变量出发的零个或多个位置投影。

r[type.closure.capture.precision.place-projection]
_位置投影_是应用于变量的[字段访问](../expressions/field-expr.md)、[元组索引](../expressions/tuple-expr.md#tuple-indexing-expressions)、[解引用](../expressions/operator-expr.md#the-dereference-operator)（以及自动解引用）、[数组或切片索引](../expressions/array-expr.md#array-and-slice-indexing-expressions)表达式，或[模式解构](../patterns.md#r-patterns.destructure)。

> [!NOTE]
> 在 `rustc` 中，模式解构会脱糖为一系列解引用以及字段或元素访问。

r[type.closure.capture.precision.intro]
闭包会借用或移动捕获路径，而该路径可能会根据下文描述的规则被截断。

例如：

```rust
struct SomeStruct {
    f1: (i32, i32),
}
let s = SomeStruct { f1: (1, 2) };

let c = || {
    let x = s.f1.1; // s.f1.1 captured by ImmBorrow
};
c();
```

这里的捕获路径是局部变量 `s`，后接字段访问 `.f1`，再后接元组索引 `.1`。此闭包捕获的是对 `s.f1.1` 的不可变借用。

[field access]: ../expressions/field-expr.md
[pattern destructuring]: patterns.destructure
[tuple index]: ../expressions/tuple-expr.md#tuple-indexing-expressions
[dereference]: ../expressions/operator-expr.md#the-dereference-operator
[array or slice index]: ../expressions/array-expr.md#array-and-slice-indexing-expressions

r[type.closure.capture.precision.shared-prefix]
### 共享前缀

当一个捕获路径及该路径的某个祖先路径都被同一闭包捕获时，祖先路径会使用两次捕获中较高的捕获模式来捕获，即 `CaptureMode = max(AncestorCaptureMode, DescendantCaptureMode)`，其中采用以下严格弱序：

`ImmBorrow < UniqueImmBorrow < MutBorrow < ByValue`

注意，这可能需要递归应用。

```rust
// 在此示例中，有三条不同的捕获路径拥有一个共享祖先：
# fn move_value<T>(_: T){}
let s = String::from("S");
let t = (s, String::from("T"));
let mut u = (t, String::from("U"));

let c = || {
    println!("{:?}", u); // u captured by ImmBorrow
    u.1.truncate(0); // u.1 captured by MutBorrow
    move_value(u.0.0); // u.0.0 captured by ByValue
};
c();
```

总体而言，此闭包会以 `ByValue` 捕获 `u`。

r[type.closure.capture.precision.dereference-shared]
### 最右共享引用截断

如果捕获路径中的解引用应用于共享引用，则捕获路径会在其中最右侧的此类解引用处截断。

允许这种截断，是因为通过共享引用读取的字段始终会经由共享引用或副本来读取。当额外的精度从借用检查角度看并无收益时，这有助于减小捕获的大小。

之所以选择_最右侧_解引用，是为了帮助避免生命周期短于必要范围。考虑以下示例：

```rust
struct Int(i32);
struct B<'a>(&'a i32);

struct MyStruct<'a> {
   a: &'static Int,
   b: B<'a>,
}

fn foo<'a, 'b>(m: &'a MyStruct<'b>) -> impl FnMut() + 'static {
    let c = || drop(&m.a.0);
    c
}
```

如果这里捕获 `m`，则该闭包将不再比 `'static` 活得更久，因为 `m` 受限于 `'a`。相反，它会以 `ImmBorrow` 捕获 `(*(*m).a)`。

r[type.closure.capture.precision.wildcard]
### 通配符模式绑定

r[type.closure.capture.precision.wildcard.reads]
闭包只捕获需要读取的数据。使用[通配符模式](../patterns.md#wildcard-pattern)绑定某个值并不会读取该值，因此该位置不会被捕获。

```rust,no_run
struct S; // A non-`Copy` type.
let x = S;
let c = || {
    let _ = x;  // Does not capture `x`.
};
let c = || match x {
    _ => (), // Does not capture `x`.
};
x; // OK: `x` can be moved here.
c();
```

r[type.closure.capture.precision.wildcard.destructuring]
解构元组、struct 和单变体 enum，本身不会导致读取，也不会导致该位置被捕获。

> [!NOTE]
> Enums marked with [`#[non_exhaustive]`][attributes.type-system.non_exhaustive] are always treated as having multiple variants. See *[type.closure.capture.precision.discriminants.non_exhaustive]*.

```rust,no_run
struct S; // A non-`Copy` type.

// 解构元组不会导致读取或捕获。
let x = (S,);
let c = || {
    let (..) = x; // Does not capture `x`.
};
x; // OK: `x` can be moved here.
c();

// 解构单元 struct 不会导致读取或捕获。
let x = S;
let c = || {
    let S = x; // Does not capture `x`.
};
x; // OK: `x` can be moved here.
c();

// 解构 struct 不会导致读取或捕获。
struct W<T>(T);
let x = W(S);
let c = || {
    let W(..) = x; // Does not capture `x`.
};
x; // OK: `x` can be moved here.
c();

// Destructuring single-variant enums does not cause a read
// or capture.
enum E<T> { V(T) }
let x = E::V(S);
let c = || {
    let E::V(..) = x; // Does not capture `x`.
};
x; // OK: `x` can be moved here.
c();
```

r[type.closure.capture.precision.wildcard.fields]
由 [RestPattern](../patterns.md#grammar-RestPattern)（`..`）或 [StructPatternEtCetera](../patterns.md#grammar-StructPatternEtCetera)（同样是 `..`）匹配的字段不会被读取，且这些字段不会被捕获。

```rust,no_run
struct S; // A non-`Copy` type.
let x = (S, S);
let c = || {
    let (x0, ..) = x;  // Captures `x.0` by `ByValue`.
};
// 闭包只捕获了第一个元组字段。
x.1; // OK: `x.1` can be moved here.
c();
```

r[type.closure.capture.precision.wildcard.array-slice]
不支持对数组和切片进行部分捕获；即使使用通配符模式匹配、索引或子切片，也总是捕获整个切片或数组。

```rust,compile_fail,E0382
struct S; // A non-`Copy` type.
let mut x = [S, S];
let c = || {
    let [x0, _] = x; // Captures all of `x` by `ByValue`.
};
let _ = &mut x[1]; // ERROR: Borrow of moved value.
```

r[type.closure.capture.precision.wildcard.initialized]
与通配符匹配的值仍然必须已初始化。

```rust,compile_fail,E0381
let x: u8;
let c = || {
    let _ = x; // ERROR: Binding `x` isn't initialized.
};
```

[wildcard pattern]: ../patterns.md#wildcard-pattern

r[type.closure.capture.precision.discriminants]
### 针对判别值读取的捕获

r[type.closure.capture.precision.discriminants.reads]
如果模式匹配会读取判别值，则包含该判别值的位置会以 `ImmBorrow` 捕获。

r[type.closure.capture.precision.discriminants.multiple-variant]
匹配具有多个变体的 enum 的某个变体会读取判别值，并以 `ImmBorrow` 捕获该位置。

```rust,compile_fail,E0502
struct S; // A non-`Copy` type.
let mut x = (Some(S), S);
let c = || match x {
    (None, _) => (),
//   ^^^^
// This pattern requires reading the discriminant, which
// causes `x.0` to be captured by `ImmBorrow`.
    _ => (),
};
let _ = &mut x.0; // ERROR: Cannot borrow `x.0` as mutable.
//           ^^^
// The closure is still live, so `x.0` is still immutably
// borrowed here.
c();
```

```rust,no_run
# struct S; // A non-`Copy` type.
# let x = (Some(S), S);
let c = || match x { // Captures `x.0` by `ImmBorrow`.
    (None, _) => (),
    _ => (),
};
// Though `x.0` is captured due to the discriminant read,
// `x.1` is not captured.
x.1; // OK: `x.1` can be moved here.
c();
```

r[type.closure.capture.precision.discriminants.single-variant]
匹配单变体 enum 的唯一变体不会读取判别值，也不会捕获该位置。

```rust,no_run
enum E<T> { V(T) } // A single-variant enum.
let x = E::V(());
let c = || {
    let E::V(_) = x; // Does not capture `x`.
};
x; // OK: `x` can be moved here.
c();
```

r[type.closure.capture.precision.discriminants.non_exhaustive]
If [`#[non_exhaustive]`][attributes.type-system.non_exhaustive] is applied to an enum, the enum is treated as having multiple variants for the purpose of deciding whether a read occurs, even if it actually has only one variant.

r[type.closure.capture.precision.discriminants.uninhabited-variants]
即使除被匹配的变体之外所有变体都不可能有值，从而使该模式[不可反驳](../patterns.md#r-patterns.refutable)，只要在其他情况下会读取判别值，这里仍然会读取判别值。

```rust,compile_fail,E0502
enum Empty {}
let mut x = Ok::<_, Empty>(42);
let c = || {
    let Ok(_) = x; // Captures `x` by `ImmBorrow`.
};
let _ = &mut x; // ERROR: Cannot borrow `x` as mutable.
c();
```


r[type.closure.capture.precision.range-patterns]
### 捕获与范围模式

r[type.closure.capture.precision.range-patterns.reads]
匹配[范围模式](../patterns.md#r-patterns.range)会读取被匹配的位置，即使该范围包含该类型的所有可能值，并且会以 `ImmBorrow` 捕获该位置。

```rust,compile_fail,E0502
let mut x = 0u8;
let c = || {
    let 0..=u8::MAX = x; // Captures `x` by `ImmBorrow`.
};
let _ = &mut x; // ERROR: Cannot borrow `x` as mutable.
c();
```

r[type.closure.capture.precision.slice-patterns]
### 捕获与切片模式

r[type.closure.capture.precision.slice-patterns.slices]
用[切片模式](../patterns.md#r-patterns.slice)匹配切片时，除只含单个[剩余模式](../patterns.md#r-patterns.rest)的模式（即 `[..]`）之外，都会被视为从该切片读取长度，并以 `ImmBorrow` 捕获该切片。

```rust,compile_fail,E0502
let x: &mut [u8] = &mut [];
let c = || match x { // Captures `*x` by `ImmBorrow`.
    &mut [] => (),
//       ^^
// This matches a slice of exactly zero elements. To know whether the
// scrutinee matches, the length must be read, causing the slice to
// be captured.
    _ => (),
};
let _ = &mut *x; // ERROR: Cannot borrow `*x` as mutable.
c();
```

```rust,no_run
let x: &mut [u8] = &mut [];
let c = || match x { // Does not capture `*x`.
    [..] => (),
//   ^^ 剩余模式。
};
let _ = &mut *x; // OK: `*x` can be borrow here.
c();
```

> [!NOTE]
> 也许令人意外的是，虽然长度包含在指向切片的（宽）_指针_中，但被视为读取并被捕获的是_被指向对象_（切片）的位置。
>
> ```rust,no_run
> fn f<'l: 's, 's>(x: &'s mut &'l [u8]) -> impl Fn() + 'l {
>     // 该闭包比 `'l` 活得更久，因为它捕获 `**x`。如果
>     // 它转而捕获 `*x`，则它就不会活得足够久，
>     // 无法满足 `impl Fn() + 'l` 约束。
>     || match *x { // Captures `**x` by `ImmBorrow`.
>         &[] => (),
>         _ => (),
>     }
> }
> ```
>
> 这样一来，其行为就与在被匹配值中解引用到切片一致。
>
> ```rust,no_run
> fn f<'l: 's, 's>(x: &'s mut &'l [u8]) -> impl Fn() + 'l {
>     || match **x { // Captures `**x` by `ImmBorrow`.
>         [] => (),
>         _ => (),
>     }
> }
> ```
>
> 详情请参见 [Rust PR #138961](https://github.com/rust-lang/rust/pull/138961)。

r[type.closure.capture.precision.slice-patterns.arrays]
由于数组长度由其类型固定，用切片模式匹配数组本身不会捕获该位置。

```rust,no_run
let x: [u8; 1] = [0];
let c = || match x { // Does not capture `x`.
    [_] => (), // Length is fixed.
};
x; // OK: `x` can be moved here.
c();
```

r[type.closure.capture.precision.move-dereference]
### 在 move 上下文中捕获引用

由于不允许从引用中移出字段，`move` 闭包只会捕获捕获路径的前缀，直到但不包括对引用的第一次解引用。该引用本身会被移动进闭包。

```rust
struct T(String, String);

let mut t = T(String::from("foo"), String::from("bar"));
let t_mut_ref = &mut t;
let mut c = move || {
    t_mut_ref.0.push_str("123"); // captures `t_mut_ref` ByValue
};
c();
```

r[type.closure.capture.precision.raw-pointer-dereference]
### 裸指针解引用

由于解引用裸指针是 `unsafe` 的，闭包只会捕获捕获路径的前缀，直到但不包括对裸指针的第一次解引用。

```rust
struct T(String, String);

let t = T(String::from("foo"), String::from("bar"));
let t_ptr = &t as *const T;

let c = || unsafe {
    println!("{}", (*t_ptr).0); // captures `t_ptr` by ImmBorrow
};
c();
```

r[type.closure.capture.precision.union]
### union 字段

由于访问 union 字段是 `unsafe` 的，闭包只会捕获捕获路径中直到 union 本身为止的前缀。

```rust
union U {
    a: (i32, i32),
    b: bool,
}
let u = U { a: (123, 456) };

let c = || {
    let x = unsafe { u.a.0 }; // captures `u` ByValue
};
c();

// 这也包括写入字段。
let mut u = U { a: (123, 456) };

let mut c = || {
    u.b = true; // captures `u` with MutBorrow
};
c();
```

r[type.closure.capture.precision.unaligned]
### 指向未对齐 `struct` 的引用

由于为结构中未对齐的字段创建引用是[未定义行为](../behavior-considered-undefined.md)，闭包只会捕获捕获路径的前缀，直到但不包括对使用 [`packed` 表示](../type-layout.md#the-alignment-modifiers)的结构进行的第一次字段访问。这包括所有字段，即使是已对齐的字段也包括在内，以防结构中的任何字段将来发生变化时引发兼容性问题。

```rust
#[repr(packed)]
struct T(i32, i32);

let t = T(2, 5);
let c = || {
    let a = t.0; // captures `t` with ImmBorrow
};
// 可以从 `t` 中复制出值。
let (a, b) = (t.0, t.1);
c();
```

类似地，取得未对齐字段的地址也会捕获整个 struct：

```rust,compile_fail,E0505
#[repr(packed)]
struct T(String, String);

let mut t = T(String::new(), String::new());
let c = || {
    let a = std::ptr::addr_of!(t.1); // captures `t` with ImmBorrow
};
let a = t.0; // ERROR: cannot move out of `t.0` because it is borrowed
c();
```

但如果它不是 packed 的，上述代码就可以工作，因为它会精确捕获该字段：

```rust
struct T(String, String);

let mut t = T(String::new(), String::new());
let c = || {
    let a = std::ptr::addr_of!(t.1); // captures `t.1` with ImmBorrow
};
// 这里的移动是允许的。
let a = t.0;
c();
```

[undefined behavior]: ../behavior-considered-undefined.md
[the `packed` representation]: ../type-layout.md#the-alignment-modifiers

r[type.closure.capture.precision.box-deref]
### `Box` 与其他 `Deref` 实现

[`Box`](../special-types-and-traits.md#boxt) 的 [`Deref`](../special-types-and-traits.md#deref-and-derefmut) trait 实现会被区别于其他 `Deref` 实现来处理，因为它被认为是一个特殊实体。

例如，来看涉及 `Rc` 和 `Box` 的示例。`*rc` 会脱糖为对 `Rc` 上定义的 trait 方法 `deref` 的调用，但由于 `*box` 会被区别处理，因此可以精确捕获 `Box` 的内容。

[`Box`]: ../special-types-and-traits.md#boxt
[`Deref`]: ../special-types-and-traits.md#deref-and-derefmut

r[type.closure.capture.precision.box-non-move.not-moved]
#### 非 `move` 闭包中的 `Box`

在非 `move` 闭包中，如果 `Box` 的内容没有被移动进闭包体，则 `Box` 的内容会被精确捕获。

```rust
struct S(String);

let b = Box::new(S(String::new()));
let c_box = || {
    let x = &(*b).0; // captures `(*b).0` by ImmBorrow
};
c_box();

// 将 `Box` 与另一种实现 Deref 的类型进行对比：
let r = std::rc::Rc::new(S(String::new()));
let c_rc = || {
    let x = &(*r).0; // captures `r` by ImmBorrow
};
c_rc();
```

r[type.closure.capture.precision.box-non-move.moved]
然而，如果 `Box` 的内容被移动进闭包，则整个 box 都会被捕获。这样做是为了最小化需要移动进闭包的数据量。

```rust
// This is the same as the example above except the closure
// moves the value instead of taking a reference to it.

struct S(String);

let b = Box::new(S(String::new()));
let c_box = || {
    let x = (*b).0; // captures `b` with ByValue
};
c_box();
```

r[type.closure.capture.precision.box-move.read]
#### move 闭包中的 `Box`

与在非 `move` 闭包中移动 `Box` 的内容类似，在 `move` 闭包中读取 `Box` 的内容会捕获整个 `Box`。

```rust
struct S(i32);

let b = Box::new(S(10));
let c_box = move || {
    let x = (*b).0; // captures `b` with ByValue
};
```

r[type.closure.unique-immutable]
## 捕获中的唯一不可变借用

捕获可以通过一种称为_唯一不可变借用_的特殊借用发生，这种借用不能在语言的其他任何地方使用，也不能显式写出。它会在修改可变引用的被引用对象时发生，如以下示例所示：

```rust
let mut b = false;
let x = &mut b;
let mut c = || {
    // 对 `x` 的一个 ImmBorrow 和一个 MutBorrow。
    let a = &x;
    *x = true; // `x` captured by UniqueImmBorrow
};
// The following line is an error:
// let y = &x;
c();
// 然而，下面这样是 OK 的。
let z = &x;
```

在此情况下，不可能可变借用 `x`，因为 `x` 不是 `mut`。但与此同时，不可变借用 `x` 又会使赋值非法，因为 `& &mut` 引用可能不是唯一的，所以不能安全地用于修改值。因此会使用唯一不可变借用：它以不可变方式借用 `x`，但像可变借用一样，它必须是唯一的。

在上面的示例中，如果取消 `y` 的声明的注释，将会产生错误，因为这会违反闭包对 `x` 的借用的唯一性；`z` 的声明是有效的，因为闭包的生命周期已在块的末尾结束，从而释放了该借用。

r[type.closure.call]
## 调用 trait 与强制转换

r[type.closure.call.intro]
所有闭包类型都实现 [`FnOnce`](../../core/ops/function/trait.FnOnce.html)，表示它们可以通过消耗闭包的所有权来调用一次。此外，某些闭包会实现更具体的调用 trait：

r[type.closure.call.fn-mut]
* 不会移出任何被捕获变量的闭包实现 [`FnMut`](../../core/ops/function/trait.FnMut.html)，表示它可以通过可变引用调用。

r[type.closure.call.fn]
* 不会修改或移出任何被捕获变量的闭包实现 [`Fn`](../../core/ops/function/trait.Fn.html)，表示它可以通过共享引用调用。

> [!NOTE]
> `move` 闭包仍然可以实现 [`Fn`](../../core/ops/function/trait.Fn.html) 或 [`FnMut`](../../core/ops/function/trait.FnMut.html)，即使它们通过移动来捕获变量。这是因为闭包类型实现哪些 trait 取决于闭包如何处理被捕获值，而不是它如何捕获这些值。

r[type.closure.non-capturing]
_非捕获闭包_是不从其环境捕获任何内容的闭包。非 async 的非捕获闭包可以被强制转换为具有匹配签名的函数指针（例如 `fn()`）。

```rust
let add = |x, y| x + y;

let mut x = add(5,7);

type Binop = fn(i32, i32) -> i32;
let bo: Binop = add;
x = bo(5,7);
```

r[type.closure.async.traits]
### async 闭包 trait

r[type.closure.async.traits.fn-family]
async 闭包对于是否实现 [`FnMut`](../../core/ops/function/trait.FnMut.html) 或 [`Fn`](../../core/ops/function/trait.Fn.html) 还有进一步限制。

async 闭包返回的 [`Future`](../../core/future/future/trait.Future.html) 具有与闭包类似的捕获特性。它会根据使用方式从 async 闭包中捕获位置表达式。如果 async 闭包具有以下任一性质，则称它向其 [`Future`](../../core/future/future/trait.Future.html) _借出_：

- `Future` 包含可变捕获。
- async 闭包按值捕获，但通过解引用投影访问该值时除外。

如果 async 闭包向其 `Future` 借出，则_不会_实现 [`FnMut`](../../core/ops/function/trait.FnMut.html) 和 [`Fn`](../../core/ops/function/trait.Fn.html)。[`FnOnce`](../../core/ops/function/trait.FnOnce.html) 总是会实现。

> **示例**：关于可变捕获的第一项条件可以用下面的代码说明：
>
> ```rust,compile_fail
> fn takes_callback<Fut: Future>(c: impl FnMut() -> Fut) {}
>
> fn f() {
>     let mut x = 1i32;
>     let c = async || {
>         x = 2;  // x captured with MutBorrow
>     };
>     takes_callback(c);  // ERROR: async closure does not implement `FnMut`
> }
> ```
>
> 关于常规值捕获的第二项条件可以用下面的代码说明：
>
> ```rust,compile_fail
> fn takes_callback<Fut: Future>(c: impl Fn() -> Fut) {}
>
> fn f() {
>     let x = &1i32;
>     let c = async move || {
>         let a = x + 2;  // x captured ByValue
>     };
>     takes_callback(c);  // ERROR: async closure does not implement `Fn`
> }
> ```
>
> 第二项条件的例外可以通过使用解引用来说明，这种方式确实允许实现 `Fn` 和 `FnMut`：
>
> ```rust
> fn takes_callback<Fut: Future>(c: impl Fn() -> Fut) {}
>
> fn f() {
>     let x = &1i32;
>     let c = async move || {
>         let a = *x + 2;
>     };
>     takes_callback(c);  // OK: implements `Fn`
> }
> ```

r[type.closure.async.traits.async-family]
async 闭包实现 [`AsyncFn`](../../core/ops/async_function/trait.AsyncFn.html)、[`AsyncFnMut`](../../core/ops/async_function/trait.AsyncFnMut.html) 和 [`AsyncFnOnce`](../../core/ops/async_function/trait.AsyncFnOnce.html) 的方式，类似于常规闭包实现 [`Fn`](../../core/ops/function/trait.Fn.html)、[`FnMut`](../../core/ops/function/trait.FnMut.html) 和 [`FnOnce`](../../core/ops/function/trait.FnOnce.html) 的方式；也就是说，取决于其闭包体内如何使用被捕获变量。

r[type.closure.traits]
### 其他 trait

r[type.closure.traits.intro]
所有闭包类型都实现 [`Sized`](../special-types-and-traits.md#sized)。此外，如果其存储的捕获项的类型允许，闭包类型还会实现以下 trait：

* [`Clone`](../special-types-and-traits.md#clone)
* [`Copy`](../special-types-and-traits.md#copy)
* [`Sync`](../special-types-and-traits.md#sync)
* [`Send`](../special-types-and-traits.md#send)

r[type.closure.traits.behavior]
[`Send`](../special-types-and-traits.md#send) 和 [`Sync`](../special-types-and-traits.md#sync) 的规则与普通 struct 类型的规则一致，而 [`Clone`](../special-types-and-traits.md#clone) 和 [`Copy`](../special-types-and-traits.md#copy) 的行为就像是[派生](../attributes/derive.md)得到的一样。对于 [`Clone`](../special-types-and-traits.md#clone)，被捕获值的克隆顺序是未指定的。

由于捕获通常通过引用进行，因此会得到以下一般规则：

* 如果所有被捕获值都是 [`Sync`](../special-types-and-traits.md#sync)，则闭包是 [`Sync`](../special-types-and-traits.md#sync)。
* 如果所有通过非唯一不可变引用捕获的值都是 [`Sync`](../special-types-and-traits.md#sync)，且所有通过唯一不可变引用、可变引用、复制或移动捕获的值都是 [`Send`](../special-types-and-traits.md#send)，则闭包是 [`Send`](../special-types-and-traits.md#send)。
* 如果闭包没有通过唯一不可变引用或可变引用捕获任何值，并且它通过复制或移动捕获的所有值分别都是 [`Clone`](../special-types-and-traits.md#clone) 或 [`Copy`](../special-types-and-traits.md#copy)，则该闭包是 [`Clone`](../special-types-and-traits.md#clone) 或 [`Copy`](../special-types-and-traits.md#copy)。

[`Clone`]: ../special-types-and-traits.md#clone
[`Copy`]: ../special-types-and-traits.md#copy
[`Send`]: ../special-types-and-traits.md#send
[`Sized`]: ../special-types-and-traits.md#sized
[`Sync`]: ../special-types-and-traits.md#sync
[closure expression]: ../expressions/closure-expr.md
[derived]: ../attributes/derive.md

r[type.closure.drop-order]
## 丢弃顺序

如果闭包按值捕获复合类型（例如 struct、元组和 enum）的某个字段，则该字段的生命周期现在会与闭包绑定。因此，复合类型中互不重叠的字段可能会在不同时间被丢弃。

```rust
{
    let tuple =
      (String::from("foo"), String::from("bar")); // --+
    { //                                               |
        let c = || { // ----------------------------+  |
            // tuple.0 is captured into the closure |  |
            drop(tuple.0); //                       |  |
        }; //                                       |  |
    } // 'c' and 'tuple.0' dropped here ------------+  |
} // tuple.1 dropped here -----------------------------+
```

r[type.closure.capture.precision.edition2018.entirety]
## 2018 edition 及以前版本

### 闭包类型差异

在 2018 edition 及以前版本中，闭包总是整体捕获变量，而不会使用其精确捕获路径。这意味着对于[闭包类型](#closure-types)一节中的示例，生成的闭包类型会改为大致如下：

<!-- ignore: simplified -->
```rust,ignore
struct Closure<'a> {
    rect : &'a mut Rectangle,
}

impl<'a> FnOnce<()> for Closure<'a> {
    type Output = String;
    extern "rust-call" fn call_once(self, args: ()) -> String {
        self.rect.left_top.x += 1;
        self.rect.right_bottom.x += 1;
        format!("{:?}", self.rect.left_top)
    }
}
```

而对 `f` 的调用会按如下方式工作：

<!-- ignore: continuation of above -->
```rust,ignore
f(Closure { rect: rect });
```

r[type.closure.capture.precision.edition2018.composite]
### 捕获精度差异

复合类型（例如 struct、元组和 enum）总是被整体捕获，而不是按单个字段捕获。因此，为了捕获单个字段，可能需要先借用到局部变量中：

```rust
# use std::collections::HashSet;
#
struct SetVec {
    set: HashSet<u32>,
    vec: Vec<u32>
}

impl SetVec {
    fn populate(&mut self) {
        let vec = &mut self.vec;
        self.set.iter().for_each(|&n| {
            vec.push(n);
        })
    }
}
```

如果该闭包改为直接使用 `self.vec`，则它会尝试通过可变引用捕获 `self`。但由于 `self.set` 已经被借用来进行迭代，这段代码将无法编译。

r[type.closure.capture.precision.edition2018.move]
如果使用 `move` 关键字，则所有捕获都会通过移动进行；对于 `Copy` 类型，则通过复制进行，而不考虑借用是否可行。`move` 关键字通常用于让闭包比被捕获值活得更久，例如闭包被返回或用于生成新线程时。

r[type.closure.capture.precision.edition2018.wildcard]
无论闭包是否会读取数据，例如在通配符模式的情况下，只要闭包内提到在闭包外定义的变量，该变量就会被整体捕获。

r[type.closure.capture.precision.edition2018.drop-order]
### 丢弃顺序差异

由于复合类型会被整体捕获，按值捕获其中某个复合类型的闭包，会在闭包被丢弃的同时丢弃整个被捕获变量。

```rust
{
    let tuple =
      (String::from("foo"), String::from("bar"));
    {
        let c = || { // --------------------------+
            // tuple is captured into the closure |
            drop(tuple.0); //                     |
        }; //                                     |
    } // 'c' and 'tuple' dropped here ------------+
}
```
