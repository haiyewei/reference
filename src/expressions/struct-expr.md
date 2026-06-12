r[expr.struct]
# 结构体表达式

r[expr.struct.syntax]
```grammar,expressions
StructExpression ->
    PathInExpression `{` (StructExprFields | StructBase)? `}`

StructExprFields ->
    StructExprField (`,` StructExprField)* (`,` StructBase | `,`?)

StructExprField ->
    OuterAttribute*
    (
        IDENTIFIER
      | (IDENTIFIER | TUPLE_INDEX) `:` Expression
    )

StructBase -> `..` Expression
```

r[expr.struct.intro]
*结构体表达式*创建 struct、enum 或 union 值。它由指向 [struct](../items/structs.md)、[枚举变体](../items/enumerations.md)或 [union](../items/unions.md) 项的路径，后跟该项各字段的值组成。

以下是结构体表达式的示例：

```rust
# struct Point { x: f64, y: f64 }
# struct NothingInMe { }
# mod game { pub struct User<'a> { pub name: &'a str, pub age: u32, pub score: usize } }
# enum Enum { Variant {} }
Point {x: 10.0, y: 20.0};
NothingInMe {};
let u = game::User {name: "Joe", age: 35, score: 100_000};
Enum::Variant {};
```

> [!NOTE]
> 元组结构体和元组枚举变体通常使用[调用表达式][expr.call]实例化，该调用表达式引用[值命名空间中的构造器][items.struct.tuple]。这不同于使用花括号、引用类型命名空间中的构造器的结构体表达式。
>
> ```rust
> struct Position(i32, i32, i32);
> Position(0, 0, 0);  // 创建元组结构体的典型方式。
> let c = Position;  // `c` 是一个接受 3 个实参的函数。
> let pos = c(8, 6, 7);  // 创建一个 `Position` 值。
>
> enum Version { Triple(i32, i32, i32) };
> Version::Triple(0, 0, 0);
> let f = Version::Triple;
> let ver = f(8, 6, 7);
> ```
>
> 调用路径的最后一段不能指向类型别名：
>
> ```rust
> trait Tr { type T; }
> impl<T> Tr for T { type T = T; }
>
> struct Tuple();
> enum Enum { Tuple() }
>
> // <Unit as Tr>::T(); // causes an error -- `::T` is a type, not a value
> <Enum as Tr>::T::Tuple(); // 可以
> ```
>
> ----
>
> 单元结构体和单元枚举变体通常使用[路径表达式][expr.path]实例化，该路径表达式引用[值命名空间中的常量][items.struct.unit]。
>
> ```rust
> struct Gamma;
> // Gamma 单元值，指向值命名空间中的 const。
> let a = Gamma;
> // 与 `a` 完全相同的值，但使用结构体表达式构造
> // 指向类型命名空间。
> let b = Gamma {};
>
> enum ColorSpace { Oklch }
> let c = ColorSpace::Oklch;
> let d = ColorSpace::Oklch {};
> ```

r[expr.struct.field]
## 字段结构体表达式

r[expr.struct.field.intro]
字段用花括号括起的结构体表达式允许以任意顺序为每个单独字段指定值。字段名与其值之间用冒号分隔。

r[expr.struct.field.union-constraint]
[union](../items/unions.md) 类型的值只能使用这种语法创建，并且必须恰好指定一个字段。

r[expr.struct.update]
## 函数式更新语法

r[expr.struct.update.intro]
构造结构体类型值的结构体表达式可以用语法 `..` 后跟一个表达式结尾，以表示函数式更新。

r[expr.struct.update.base-same-type]
`..` 后面的表达式（基底）必须与正在形成的新结构体类型具有相同的结构体类型。

r[expr.struct.update.fields]
整个表达式对已指定的字段使用给定值，并从基底表达式移动或复制其余字段。

r[expr.struct.update.visibility-constraint]
与所有结构体表达式一样，结构体的所有字段都必须是[可见的](../visibility-and-privacy.md)，即使是那些没有显式命名的字段。

```rust
# struct Point3d { x: i32, y: i32, z: i32 }
let mut base = Point3d {x: 1, y: 2, z: 3};
let y_ref = &mut base.y;
Point3d {y: 0, z: 10, .. base}; // OK，仅访问 base.x
drop(y_ref);
```

r[expr.struct.brace-restricted-positions]
结构体表达式不能直接用于 [loop](loop-expr.md) 或 [if](if-expr.md#if-expressions) 表达式的头部，也不能直接用于 [if let](if-expr.md#if-let-patterns) 或 [match](match-expr.md) 表达式的[被匹配表达式](../glossary.md#scrutinee)中。不过，如果结构体表达式位于另一个表达式内部，例如位于[带括号表达式](grouped-expr.md)内部，则可以在这些情形中使用。

r[expr.struct.tuple-field]
字段名可以是十进制整数值，以指定构造元组结构体时使用的索引。这可以与基底结构体一起使用，以填充未指定的其余索引：

```rust
struct Color(u8, u8, u8);
let c1 = Color(0, 0, 0);  // 创建元组结构体的典型方式。
let c2 = Color{0: 255, 1: 127, 2: 0};  // 按索引指定字段。
let c3 = Color{1: 0, ..c2};  // 使用基结构体填充所有其他字段。
```

r[expr.struct.field.named]
### 结构体字段初始化简写

在初始化带有命名（而非编号）字段的数据结构（struct、enum、union）时，允许写 `fieldname` 作为 `fieldname: fieldname` 的简写。这样可以使用更紧凑、重复更少的语法。例如：

```rust
# struct Point3d { x: i32, y: i32, z: i32 }
# let x = 0;
# let y_value = 0;
# let z = 0;
Point3d { x: x, y: y_value, z: z };
Point3d { x, y: y_value, z };
```

[enum variant]: ../items/enumerations.md
[if let]: if-expr.md#if-let-patterns
[if]: if-expr.md#if-expressions
[loop]: loop-expr.md
[match]: match-expr.md
[parentheses]: grouped-expr.md
[struct]: ../items/structs.md
[union]: ../items/unions.md
[visible]: ../visibility-and-privacy.md
[scrutinee]: ../glossary.md#scrutinee
