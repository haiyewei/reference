r[items.type]
# 类型别名

r[items.type.syntax]
```grammar,items
TypeAlias ->
    `type` IDENTIFIER GenericParams? ( `:` Bounds )?
        WhereClause?
        ( `=` Type WhereClause?)? `;`
```

r[items.type.intro]
*类型别名*在其所在模块或块的[类型命名空间](../names/namespaces.md)中，为现有[类型](../types.md)定义一个新名称。类型别名使用关键字 `type` 声明。每个值都有一个单一、具体的类型，但可以实现若干不同的 trait，也可以与若干不同的类型约束兼容。

例如，以下代码将类型 `Point` 定义为类型 `(u8, u8)` 的同义名；后者是由一对 8 位无符号整数组成的类型：

```rust
type Point = (u8, u8);
let p: Point = (41, 68);
```

r[items.type.constructor-alias]
指向元组结构体或单元结构体的类型别名不能用于限定该类型的构造器：

```rust,compile_fail
struct MyStruct(u32);

use MyStruct as UseAlias;
type TypeAlias = MyStruct;

let _ = UseAlias(5); // 可以
let _ = TypeAlias(5); // 不起作用
```

r[items.type.associated-type]
类型别名在不作为[关联类型](associated-items.md#associated-types)使用时，必须包含一个 [Type][grammar-Type]，且不得包含 [Bounds]。

r[items.type.associated-trait]
类型别名在作为 [trait](traits.md) 中的[关联类型](associated-items.md#associated-types)使用时，不得包含 [Type][grammar-Type] 说明，但可以包含 [Bounds]。

r[items.type.associated-impl]
类型别名在作为 [trait impl](implementations.md#trait-implementations) 中的[关联类型](associated-items.md#associated-types)使用时，必须包含 [Type][grammar-Type] 说明，且不得包含 [Bounds]。

r[items.type.deprecated]
[trait impl](implementations.md#trait-implementations) 中类型别名等号之前的 where 子句（如 `type TypeAlias<T> where T: Foo = Bar<T>`）已弃用。优先使用等号之后的 where 子句（如 `type TypeAlias<T> = Bar<T> where T: Foo`）。

[associated type]: associated-items.md#associated-types
[trait impl]: implementations.md#trait-implementations
[trait]: traits.md
[type namespace]: ../names/namespaces.md
[type]: ../types.md
