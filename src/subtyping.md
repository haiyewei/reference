r[subtype]
# 子类型化与型变

r[subtype.intro]
子类型化是隐式的，可以发生在类型检查或推断的任何阶段。

r[subtype.kinds]
子类型化仅限于两种情况：关于生命周期的型变，以及具有高阶生命周期的类型之间的子类型化。如果从类型中擦除生命周期，那么唯一的子类型化将来自类型相等。

考虑以下示例：字符串字面量始终具有 `'static` 生命周期。尽管如此，我们仍可以将 `s` 赋给 `t`：

```rust
fn bar<'a>() {
    let s: &'static str = "hi";
    let t: &'a str = s;
}
```

由于 `'static` 比生命周期参数 `'a` 存活得更久，`&'static str` 是 `&'a str` 的子类型。

r[subtype.higher-ranked]
[Higher-ranked]&#32;[function pointers] and [trait objects] have another subtype relation. They are subtypes of types that are given by substitutions of the higher-ranked lifetimes. Some examples:

```rust
// 这里用 'a 替换 'static
let subtype: &(for<'a> fn(&'a i32) -> &'a i32) = &((|x| x) as fn(&_) -> &_);
let supertype: &(fn(&'static i32) -> &'static i32) = subtype;

// 对 trait 对象也类似
let subtype: &(dyn for<'a> Fn(&'a i32) -> &'a i32) = &|x| x;
let supertype: &(dyn Fn(&'static i32) -> &'static i32) = subtype;

// 我们也可以用一个高阶生命周期替换另一个
let subtype: &(for<'a, 'b> fn(&'a i32, &'b i32)) = &((|x, y| {}) as fn(&_, &_));
let supertype: &for<'c> fn(&'c i32, &'c i32) = subtype;
```

r[subtyping.variance]
## 型变

r[subtyping.variance.intro]
型变是泛型类型相对于其实参所具有的属性。泛型类型在某个参数上的 _型变_，表示该参数的子类型化如何影响该类型的子类型化。

r[subtyping.variance.covariant]
* 如果 `T` 是 `U` 的子类型会推出 `F<T>` 是 `F<U>` 的子类型，则 `F<T>` 对 `T` 是_协变_ 的（子类型化“传递通过”）

r[subtyping.variance.contravariant]
* 如果 `T` 是 `U` 的子类型会推出 `F<U>` 是 `F<T>` 的子类型，则 `F<T>` 对 `T` 是_逆变_ 的

r[subtyping.variance.invariant]
* 否则，`F<T>` 对 `T` 是 _不变_ 的（无法导出子类型关系）

r[subtyping.variance.builtin-types]
类型的型变按如下方式自动确定

| 类型 | 在 `'a` 上的型变 | 在 `T` 上的型变 |
|-------------------------------|-------------------|-------------------|
| `&'a T` | 协变 | 协变 |
| `&'a mut T` | 协变 | 不变 |
| `*const T` |  | 协变 |
| `*mut T` |  | 不变 |
| `[T]` 和 `[T; n]` |  | 协变 |
| `fn() -> T` |  | 协变 |
| `fn(T) -> ()` |  | 逆变 |
| `std::cell::UnsafeCell<T>` |  | 不变 |
| `std::marker::PhantomData<T>` |  | 协变 |
| `dyn Trait<T> + 'a` | 协变 | 不变 |

r[subtyping.variance.user-composite-types]
其他 `struct`、`enum` 和 `union` 类型的型变，通过查看其字段类型的型变来决定。如果参数被用在具有不同型变的位置中，则该参数是不变的。例如，以下结构体在 `'a` 和 `T` 上是协变的，在 `'b`、`'c` 和 `U` 上是不变的。

```rust
use std::cell::UnsafeCell;
struct Variance<'a, 'b, 'c, T, U: 'a> {
    x: &'a U,               // This makes `Variance` covariant in 'a, and would
                            // make it covariant in U, but U is used later
    y: *const T,            // Covariant in T
    z: UnsafeCell<&'b f64>, // Invariant in 'b
    w: *mut U,              // Invariant in U, makes the whole struct invariant

    f: fn(&'c ()) -> &'c () // Both co- and contravariant, makes 'c invariant
                            // in the struct.
}
```

r[subtyping.variance.builtin-composite-types]
当在 `struct`、`enum` 或 `union` 之外使用时，参数的型变会在每个位置分别检查。

```rust
# use std::cell::UnsafeCell;
fn generic_tuple<'short, 'long: 'short>(
    // 'long 在元组内同时用于协变位置和不变位置。
    x: (&'long u32, UnsafeCell<&'long u32>),
) {
    // As the variance at these positions is computed separately,
    // we can freely shrink 'long in the covariant position.
    let _: (&'short u32, UnsafeCell<&'long u32>) = x;
}

fn takes_fn_ptr<'short, 'middle: 'short>(
    // 'middle 同时用于协变位置和逆变位置。
    f: fn(&'middle ()) -> &'middle (),
) {
    // As the variance at these positions is computed separately,
    // we can freely shrink 'middle in the covariant position
    // and extend it in the contravariant position.
    let _: fn(&'static ()) -> &'short () = f;
}
```

[function pointers]: types/function-pointer.md
[Higher-ranked]: ../nomicon/hrtb.html
[trait objects]: types/trait-object.md
