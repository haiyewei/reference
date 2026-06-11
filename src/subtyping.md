<div class="rule" id="r-subtype"><a class="rule-link" href="#r-subtype" title="subtype"><span>[subtype]</span></a>
</div>

# 子类型化与型变

<div class="rule" id="r-subtype.intro"><a class="rule-link" href="#r-subtype.intro" title="subtype.intro"><span>[subtype<wbr>.intro]</span></a>
</div>

子类型化是隐式的，可以发生在类型检查或推断的任何阶段。

<div class="rule" id="r-subtype.kinds"><a class="rule-link" href="#r-subtype.kinds" title="subtype.kinds"><span>[subtype<wbr>.kinds]</span></a>
</div>

子类型化仅限于两种情况：关于生命周期的型变，以及具有高阶生命周期的类型之间的子类型化。如果从类型中擦除生命周期，那么唯一的子类型化将来自类型相等。

考虑以下示例：字符串字面量始终具有 `'static` 生命周期。尽管如此，我们仍可以将 `s` 赋给 `t`：

```rust
fn bar<'a>() {
    let s: &'static str = "hi";
    let t: &'a str = s;
}
```

由于 `'static` 比生命周期参数 `'a` 存活得更久，`&'static str` 是 `&'a str` 的子类型。

<div class="rule" id="r-subtype.higher-ranked"><a class="rule-link" href="#r-subtype.higher-ranked" title="subtype.higher-ranked"><span>[subtype<wbr>.higher-ranked]</span></a>
</div>

[高阶](../nomicon/hrtb.html)[函数指针](types/function-pointer.md)和 [trait 对象](types/trait-object.md)具有另一种子类型关系。它们是由替换高阶生命周期所给出的类型的子类型。一些示例：

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

<div class="rule" id="r-subtyping.variance"><a class="rule-link" href="#r-subtyping.variance" title="subtyping.variance"><span>[subtyping<wbr>.variance]</span></a>
</div>

## 型变

<div class="rule" id="r-subtyping.variance.intro"><a class="rule-link" href="#r-subtyping.variance.intro" title="subtyping.variance.intro"><span>[subtyping<wbr>.variance<wbr>.intro]</span></a>
</div>

型变是泛型类型相对于其实参所具有的属性。泛型类型在某个参数上的 _型变_，表示该参数的子类型化如何影响该类型的子类型化。

<div class="rule" id="r-subtyping.variance.covariant"><a class="rule-link" href="#r-subtyping.variance.covariant" title="subtyping.variance.covariant"><span>[subtyping<wbr>.variance<wbr>.covariant]</span></a>
</div>

- 如果 `T` 是 `U` 的子类型会推出 `F<T>` 是 `F<U>` 的子类型，则 `F<T>` 对 `T` 是_协变\_ 的（子类型化“传递通过”）

<div class="rule" id="r-subtyping.variance.contravariant"><a class="rule-link" href="#r-subtyping.variance.contravariant" title="subtyping.variance.contravariant"><span>[subtyping<wbr>.variance<wbr>.contravariant]</span></a>
</div>

- 如果 `T` 是 `U` 的子类型会推出 `F<U>` 是 `F<T>` 的子类型，则 `F<T>` 对 `T` 是_逆变\_ 的

<div class="rule" id="r-subtyping.variance.invariant"><a class="rule-link" href="#r-subtyping.variance.invariant" title="subtyping.variance.invariant"><span>[subtyping<wbr>.variance<wbr>.invariant]</span></a>
</div>

- 否则，`F<T>` 对 `T` 是 _不变_ 的（无法导出子类型关系）

<div class="rule" id="r-subtyping.variance.builtin-types"><a class="rule-link" href="#r-subtyping.variance.builtin-types" title="subtyping.variance.builtin-types"><span>[subtyping<wbr>.variance<wbr>.builtin-types]</span></a>
</div>

类型的型变按如下方式自动确定

|类型|在 `'a` 上的型变|在 `T` 上的型变|
|--|-----------|----------|
|`&'a T`|协变|协变|
|`&'a mut T`|协变|不变|
|`*const T`||协变|
|`*mut T`||不变|
|`[T]` 和 `[T; n]`||协变|
|`fn() -> T`||协变|
|`fn(T) -> ()`||逆变|
|`std::cell::UnsafeCell<T>`||不变|
|`std::marker::PhantomData<T>`||协变|
|`dyn Trait<T> + 'a`|协变|不变|

<div class="rule" id="r-subtyping.variance.user-composite-types"><a class="rule-link" href="#r-subtyping.variance.user-composite-types" title="subtyping.variance.user-composite-types"><span>[subtyping<wbr>.variance<wbr>.user-composite-types]</span></a>
</div>

其他 `struct`、`enum` 和 `union` 类型的型变，通过查看其字段类型的型变来决定。如果参数被用在具有不同型变的位置中，则该参数是不变的。例如，以下结构体在 `'a` 和 `T` 上是协变的，在 `'b`、`'c` 和 `U` 上是不变的。

```rust
use std::cell::UnsafeCell;
struct Variance<'a, 'b, 'c, T, U: 'a> {
    x: &'a U,               // 这使 `Variance` 在 'a 上协变，并且本会使它
                            // 在 U 上协变，但 U 稍后还会被使用
    y: *const T,            // 在 T 上协变
    z: UnsafeCell<&'b f64>, // 在 'b 上不变
    w: *mut U,              // 在 U 上不变，使整个结构体不变

    f: fn(&'c ()) -> &'c () // 同时协变和逆变，使 'c 在该结构体中
                            // 不变。
}
```

<div class="rule" id="r-subtyping.variance.builtin-composite-types"><a class="rule-link" href="#r-subtyping.variance.builtin-composite-types" title="subtyping.variance.builtin-composite-types"><span>[subtyping<wbr>.variance<wbr>.builtin-composite-types]</span></a>
</div>

当在 `struct`、`enum` 或 `union` 之外使用时，参数的型变会在每个位置分别检查。

```rust
# use std::cell::UnsafeCell;
fn generic_tuple<'short, 'long: 'short>(
    // 'long 在元组内同时用于协变位置和不变位置。
    x: (&'long u32, UnsafeCell<&'long u32>),
) {
    // 由于这些位置上的型变是分别计算的，
    // 我们可以在协变位置自由缩短 'long。
    let _: (&'short u32, UnsafeCell<&'long u32>) = x;
}

fn takes_fn_ptr<'short, 'middle: 'short>(
    // 'middle 同时用于协变位置和逆变位置。
    f: fn(&'middle ()) -> &'middle (),
) {
    // 由于这些位置上的型变是分别计算的，
    // 我们可以在协变位置自由缩短 'middle，
    // 并在逆变位置扩展它。
    let _: fn(&'static ()) -> &'short () = f;
}
```