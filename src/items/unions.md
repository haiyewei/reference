r[items.union]
# 联合体

r[items.union.syntax]
```grammar,items
Union ->
    `union` IDENTIFIER GenericParams? WhereClause? `{` StructFields? `}`
```

r[items.union.intro]
联合体声明使用与结构体声明相同的语法，只是用 `union` 代替 `struct`。

r[items.union.namespace]
联合体声明会在其所在模块或块的[类型命名空间](../names/namespaces.md)中定义给定名称。

```rust
#[repr(C)]
union MyUnion {
    f1: u32,
    f2: f32,
}
```

r[items.union.common-storage]
联合体的关键性质是，联合体的所有字段共享同一份存储。因此，写入联合体的一个字段可能覆盖其其他字段，并且联合体的大小由其最大字段的大小决定。

r[items.union.field-restrictions]
联合体字段类型被限制为以下类型子集：

r[items.union.field-copy]
- `Copy` 类型

r[items.union.field-references]
- 引用（任意 `T` 的 `&T` 和 `&mut T`）

r[items.union.field-manually-drop]
- `ManuallyDrop<T>`（任意 `T`）

r[items.union.field-tuple]
- 仅包含允许的联合体字段类型的元组和数组

r[items.union.drop]
这项限制尤其确保联合体字段永远不需要被丢弃。与结构体和枚举一样，可以为联合体 `impl Drop`，以手动定义它被丢弃时发生什么。

r[items.union.fieldless]
没有任何字段的联合体不会被编译器接受，但可以被宏接受。

r[items.union.init]
## 联合体的初始化

r[items.union.init.intro]
可以使用与结构体类型相同的语法创建联合体类型的值，只是必须恰好指定一个字段：

```rust
# union MyUnion { f1: u32, f2: f32 }
#
let u = MyUnion { f1: 1 };
```

r[items.union.init.result]
上面的表达式创建一个 `MyUnion` 类型的值，并使用字段 `f1` 初始化存储。可以使用与结构体字段相同的语法访问该联合体：

```rust
# union MyUnion { f1: u32, f2: f32 }
#
# let u = MyUnion { f1: 1 };
let f = unsafe { u.f1 };
```

r[items.union.fields]
## 读取和写入联合体字段

r[items.union.fields.intro]
联合体没有“活动字段”的概念。相反，每次联合体访问都只是将该存储解释为用于此次访问的字段的类型。

r[items.union.fields.read]
读取联合体字段会按该字段的类型读取联合体的位。

r[items.union.fields.offset]
字段可能具有非零偏移量（使用 [C 表示](../type-layout.md#reprc-unions)时除外）；在这种情况下，会读取从这些字段偏移量开始的位。

r[items.union.fields.validity]
程序员有责任确保数据对于该字段的类型是有效的。未能做到这一点会导致[未定义行为](../behavior-considered-undefined.md)。例如，从[布尔类型](../types/boolean.md)的字段读取值 `3` 是未定义行为。实际上，对于具有 [C 表示](../type-layout.md#reprc-unions)的联合体，先写入再读取类似于从写入所用类型到读取所用类型的 [`transmute`](../../core/intrinsics/fn.transmute.html)。

r[items.union.fields.read-safety]
因此，所有对联合体字段的读取都必须放在 `unsafe` 块中：

```rust
# union MyUnion { f1: u32, f2: f32 }
# let u = MyUnion { f1: 1 };
#
unsafe {
    let f = u.f1;
}
```

通常，使用联合体的代码会围绕不安全的联合体字段访问提供安全封装。

r[items.union.fields.write-safety]
相比之下，写入联合体字段是安全的，因为它们只是覆盖任意数据，而不能导致未定义行为。（注意，联合体字段类型永远不会有 drop glue，因此写入联合体字段永远不会隐式丢弃任何东西。）

r[items.union.pattern]
## 对联合体进行模式匹配

r[items.union.pattern.intro]
访问联合体字段的另一种方式是使用模式匹配。

r[items.union.pattern.one-field]
对联合体字段进行模式匹配使用与结构体模式相同的语法，只是该模式必须恰好指定一个字段。

r[items.union.pattern.safety]
由于模式匹配就像用特定字段读取联合体，因此它也必须放在 `unsafe` 块中。

```rust
# union MyUnion { f1: u32, f2: f32 }
#
fn f(u: MyUnion) {
    unsafe {
        match u {
            MyUnion { f1: 10 } => { println!("ten"); }
            MyUnion { f2 } => { println!("{}", f2); }
        }
    }
}
```

r[items.union.pattern.subpattern]
模式匹配可以将联合体作为更大结构的一个字段来匹配。特别是，当通过 FFI 使用 Rust 联合体实现 C 的 tagged union 时，这允许同时匹配标签和相应字段：

```rust
#[repr(u32)]
enum Tag { I, F }

#[repr(C)]
union U {
    i: i32,
    f: f32,
}

#[repr(C)]
struct Value {
    tag: Tag,
    u: U,
}

fn is_zero(v: Value) -> bool {
    unsafe {
        match v {
            Value { tag: Tag::I, u: U { i: 0 } } => true,
            Value { tag: Tag::F, u: U { f: num } } if num == 0.0 => true,
            _ => false,
        }
    }
}
```

r[items.union.ref]
## 对联合体字段的引用

r[items.union.ref.intro]
由于联合体字段共享同一份存储，获得对联合体某个字段的写访问可能会获得对其所有剩余字段的写访问。

r[items.union.ref.borrow]
借用检查规则必须调整以考虑这一事实。因此，如果联合体的一个字段被借用，其所有剩余字段也会在相同生命周期内被借用。

```rust,compile_fail
# union MyUnion { f1: u32, f2: f32 }
// ERROR: cannot borrow `u` (via `u.f2`) as mutable more than once at a time
fn test() {
    let mut u = MyUnion { f1: 1 };
    unsafe {
        let b1 = &mut u.f1;
//                    ---- first mutable borrow occurs here (via `u.f1`)
        let b2 = &mut u.f2;
//                    ^^^^ second mutable borrow occurs here (via `u.f2`)
        *b1 = 5;
    }
//  - first borrow ends here
    assert_eq!(unsafe { u.f1 }, 5);
}
```

r[items.union.ref.use]
可以看到，在许多方面（除布局、安全性和所有权之外），联合体的行为与结构体完全相同，这很大程度上是因为它们继承了结构体的语法形态。对于 Rust 语言中许多未提及的方面（如隐私性、名称解析、类型推断、泛型、trait 实现、固有实现、一致性、模式检查等等）也是如此。

[`transmute`]: std::mem::transmute
[boolean type]: ../types/boolean.md
[the C representation]: ../type-layout.md#reprc-unions
[type namespace]: ../names/namespaces.md
[undefined behavior]: ../behavior-considered-undefined.md
