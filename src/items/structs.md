r[items.struct]
# 结构体

r[items.struct.syntax]
```grammar,items
Struct ->
      StructStruct
    | TupleStruct

StructStruct ->
    `struct` IDENTIFIER GenericParams? WhereClause? ( `{` StructFields? `}` | `;` )

TupleStruct ->
    `struct` IDENTIFIER GenericParams? `(` TupleFields? `)` WhereClause? `;`

StructFields -> StructField (`,` StructField)* `,`?

StructField -> OuterAttribute* Visibility? IDENTIFIER `:` Type

TupleFields -> TupleField (`,` TupleField)* `,`?

TupleField -> OuterAttribute* Visibility? Type
```

r[items.struct.intro]
_结构体_ 是一种名义[结构体类型](../types/struct.md)，使用关键字 `struct` 定义。

r[items.struct.namespace]
结构体声明会在其所在模块或块的[类型命名空间](../names/namespaces.md)中定义给定名称。

下面是一个 `struct` 项及其用法示例：

```rust
struct Point {x: i32, y: i32}
let p = Point {x: 10, y: 11};
let px: i32 = p.x;
```

r[items.struct.tuple]
_元组结构体_ 是一种名义[元组类型](../types/tuple.md)，也使用关键字 `struct` 定义。除定义一个类型之外，它还会在[值命名空间](../names/namespaces.md)中定义一个同名构造器。该构造器是一个可被调用以创建结构体新实例的函数。例如：

```rust
struct Point(i32, i32);
let p = Point(10, 11);
let px: i32 = match p { Point(x, _) => x };
```

r[items.struct.unit]
_类单元结构体_ 是没有任何字段的结构体，通过完全省略字段列表来定义。这样的结构体会隐式定义一个同名的、类型为该结构体的[常量](constant-items.md)。例如：

```rust
struct Cookie;
let c = [Cookie, Cookie {}, Cookie, Cookie {}];
```

等价于

```rust
struct Cookie {}
const Cookie: Cookie = Cookie {};
let c = [Cookie, Cookie {}, Cookie, Cookie {}];
```

r[items.struct.layout]
结构体的精确内存布局未指定。可以使用 [`repr` 属性](../type-layout.md#representations)指定特定布局。

[`repr` attribute]: ../type-layout.md#representations
[constant]: constant-items.md
[struct type]: ../types/struct.md
[tuple type]: ../types/tuple.md
[type namespace]: ../names/namespaces.md
[value namespace]: ../names/namespaces.md
