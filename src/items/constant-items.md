r[items.const]
# 常量项

r[items.const.syntax]
```grammar,items
ConstantItem ->
    `const` ( IDENTIFIER | `_` ) `:` Type ( `=` Expression )? `;`
```

r[items.const.intro]
*常量项*是一个可以有名称也可以没有名称的 *[常量值](../const_eval.md#constant-expressions)*，它不与程序中的特定内存位置关联。

r[items.const.behavior]
常量本质上会在使用处内联，也就是说，使用常量时会将它们直接复制到相关上下文中。这包括来自外部 crate 的常量以及非 [`Copy`](../special-types-and-traits.md#copy) 类型。对同一常量的引用不一定保证指向同一内存地址。

r[items.const.namespace]
常量声明会在其所在模块或块的[值命名空间](../names/namespaces.md)中定义该常量值。

r[items.const.static]
常量必须显式标注类型。其类型必须具有 `'static` 生命周期：初始化式中的任何引用都必须具有 `'static` 生命周期。常量类型中的引用默认采用 `'static` 生命周期；参见[static 生命周期省略](../lifetime-elision.md#const-and-static-elision)。

r[items.const.static-temporary]
如果常量值符合[提升](destructors.scope.const-promotion)条件，对该常量的引用将具有 `'static` 生命周期；否则，将创建一个临时值。

```rust
const BIT1: u32 = 1 << 0;
const BIT2: u32 = 1 << 1;

const BITS: [u32; 2] = [BIT1, BIT2];
const STRING: &'static str = "bitstring";

struct BitsNStrings<'a> {
    mybits: [u32; 2],
    mystring: &'a str,
}

const BITS_N_STRINGS: BitsNStrings<'static> = BitsNStrings {
    mybits: BITS,
    mystring: STRING,
};
```

r[items.const.expr-omission]
只有在 [trait 定义](traits.md) 中才可以省略常量表达式。

r[items.const.destructor]
## 带析构器的常量

常量可以包含析构器。当值离开作用域时会运行析构器。

```rust
struct TypeWithDestructor(i32);

impl Drop for TypeWithDestructor {
    fn drop(&mut self) {
        println!("Dropped. Held {}.", self.0);
    }
}

const ZERO_WITH_DESTRUCTOR: TypeWithDestructor = TypeWithDestructor(0);

fn create_and_drop_zero_with_destructor() {
    let x = ZERO_WITH_DESTRUCTOR;
    // x 在函数结束时被丢弃，调用 drop。
    // 打印 "Dropped. Held 0."。
}
```

r[items.const.unnamed]
## 未命名常量

r[items.const.unnamed.intro]
与[关联常量](../items/associated-items.md#associated-constants)不同，[自由](../glossary.md#free-item)常量可以通过使用下划线代替名称而成为未命名常量。例如：

```rust
const _: () =  { struct _SameNameTwice; };

// OK，虽然它与上面的名称相同：
const _: () =  { struct _SameNameTwice; };
```

r[items.const.unnamed.repetition]
与[下划线导入](use-declarations.md#underscore-imports)一样，宏可以在同一作用域中安全地多次发出相同的未命名常量。例如，以下代码不应产生错误：

```rust
macro_rules! m {
    ($item: item) => { $item $item }
}

m!(const _: () = (););
// 这会展开为：
// const _: () = ();
// const _: () = ();
```

r[items.const.eval]
## 求值

[自由](../glossary.md#free-item)常量总是在编译时[求值](../const_eval.md)以暴露 panic。即使位于未使用的函数中也是如此：

```rust,compile_fail
// 编译时 panic
const PANIC: () = std::unimplemented!();

fn unused_generic_function<T>() {
    // 一个失败的编译时断言
    const _: () = assert!(usize::BITS == 0);
}
```

[const_eval]: ../const_eval.md
[associated constant]: ../items/associated-items.md#associated-constants
[constant value]: ../const_eval.md#constant-expressions
[free]: ../glossary.md#free-item
[static lifetime elision]: ../lifetime-elision.md#const-and-static-elision
[trait definition]: traits.md
[underscore imports]: use-declarations.md#underscore-imports
[`Copy`]: ../special-types-and-traits.md#copy
[value namespace]: ../names/namespaces.md
[promotion]: destructors.scope.const-promotion
