r[attributes.type-system]
# 类型系统属性

以下[属性](../attributes.md)用于改变类型可以如何被使用。

r[attributes.type-system.non_exhaustive]
## `non_exhaustive` 属性

r[attributes.type-system.non_exhaustive.intro]
*`non_exhaustive` 属性*表示一个类型或变体将来可能会添加更多字段或变体。

r[attributes.type-system.non_exhaustive.allowed-positions]
它可以应用于 [`struct`](../items/structs.md)、[`enum`](../items/enumerations.md) 和 `enum` 变体。

r[attributes.type-system.non_exhaustive.syntax]
`non_exhaustive` 属性使用 [MetaWord] 语法，因此不接受任何输入。

r[attributes.type-system.non_exhaustive.same-crate]
在定义它的 crate 内，`non_exhaustive` 没有效果。

```rust
#[non_exhaustive]
pub struct Config {
    pub window_width: u16,
    pub window_height: u16,
}

#[non_exhaustive]
pub struct Token;

#[non_exhaustive]
pub struct Id(pub u64);

#[non_exhaustive]
pub enum Error {
    Message(String),
    Other,
}

pub enum Message {
    #[non_exhaustive] Send { from: u32, to: u32, contents: String },
    #[non_exhaustive] Reaction(u32),
    #[non_exhaustive] Quit,
}

// 非穷尽结构体可以在定义它的 crate 内照常构造。
let config = Config { window_width: 640, window_height: 480 };
let token = Token;
let id = Id(4);

// 非穷尽结构体可以在定义它的 crate 内被穷尽匹配。
let Config { window_width, window_height } = config;
let Token = token;
let Id(id_number) = id;

let error = Error::Other;
let message = Message::Reaction(3);

// 非穷尽枚举可以在定义它的 crate 内被穷尽匹配。
match error {
    Error::Message(ref s) => { },
    Error::Other => { },
}

match message {
    // 非穷尽变体可以在定义它的 crate 内被穷尽匹配。
    Message::Send { from, to, contents } => { },
    Message::Reaction(id) => { },
    Message::Quit => { },
}
```

r[attributes.type-system.non_exhaustive.external-crate]
在定义它的 crate 之外，带有 `non_exhaustive` 标注的类型会受到一些限制，以便在添加新字段或变体时保持向后兼容性。

r[attributes.type-system.non_exhaustive.construction]
非穷尽类型不能在定义它的 crate 之外构造：

- 非穷尽变体（[`struct`](../items/structs.md) 或 [`enum` 变体](../items/enumerations.md)）不能用 [StructExpression] 构造（包括使用[函数式更新语法](../expressions/struct-expr.md#functional-update-syntax)）。
- 隐式定义的 [unit-like struct](../items/structs.md) 的同名常量，或者 [tuple struct](../items/structs.md) 的同名构造函数，具有不大于 `pub(crate)` 的[可见性](../visibility-and-privacy.md)。也就是说，如果该 struct 的可见性是 `pub`，那么该常量或构造函数的可见性就是 `pub(crate)`；否则这两个项的可见性相同（与没有 `#[non_exhaustive]` 时一样）。
- 可以构造 [`enum`](../items/enumerations.md) 实例。

以下构造示例在定义它们的 crate 之外无法编译：

<!-- ignore: requires external crates -->
```rust,ignore
// 这些类型是在上游 crate 中定义，并被标注为
// `#[non_exhaustive]`.
use upstream::{Config, Token, Id, Error, Message};

// 无法构造 `Config` 的实例；如果在
// `upstream` 的新版本中添加了新字段，那么这将编译失败，因此
// 不允许这样做。
let config = Config { window_width: 640, window_height: 480 };

// 无法构造 `Token` 的实例；如果添加了新字段，那么
// 它将不再是类单元结构体，因此由其作为类单元结构体而创建的同名常量
// 在 crate 外部不是公有的；
// 这段代码编译失败。
let token = Token;

// 无法构造 `Id` 的实例；如果添加了新字段，那么
// 其构造函数签名将会改变，因此其构造
// 函数在 crate 外部不是公有的；这段代码编译失败。
let id = Id(5);

// 可以构造 `Error` 的实例；引入新的变体
// 不会导致这段代码编译失败。
let error = Error::Message("foo".to_string());

// 无法构造 `Message::Send` 或 `Message::Reaction` 的实例；
// 如果在 `upstream` 的新版本中添加了新字段，那么这将
// 编译失败，因此不允许这样做。
let message = Message::Send { from: 0, to: 1, contents: "foo".to_string(), };
let message = Message::Reaction(0);

// 无法构造 `Message::Quit` 的实例；如果将其转换为
// `upstream` 中的元组枚举变体，这将编译失败。
let message = Message::Quit;
```

r[attributes.type-system.non_exhaustive.match]
在定义它们的 crate 之外对非穷尽类型进行匹配时存在一些限制：

- 对非穷尽变体（[`struct`](../items/structs.md) 或 [`enum` 变体](../items/enumerations.md)）进行模式匹配时，必须使用包含 `..` 的 [StructPattern]。元组 enum 变体的构造函数的[可见性](../visibility-and-privacy.md)会降低到不大于 `pub(crate)`。
- 对非穷尽 [`enum`](../items/enumerations.md) 进行模式匹配时，匹配某个变体不会有助于分支的穷尽性。以下匹配示例在定义它们的 crate 之外无法编译：

<!-- ignore: requires external crates -->
```rust, ignore
// 这些类型是在上游 crate 中定义，并被标注为
// `#[non_exhaustive]`.
use upstream::{Config, Token, Id, Error, Message};

// 如果不包含通配符分支，则无法匹配非穷尽 enum。
match error {
  Error::Message(ref s) => { },
  Error::Other => { },
  // 使用 `_ => {},` 则会编译通过
}

// 如果没有通配符，则无法匹配非穷尽 struct。
if let Ok(Config { window_width, window_height }) = config {
    // 使用 `..` 则会编译通过
}

// 除非使用带通配符的大括号 struct 语法，否则无法匹配
// 非穷尽的类单元 struct 或元组 struct。
// 写成 `let Token { .. } = token;` 则会编译通过
let Token = token;
// 写成 `let Id { 0: id_number, .. } = id;` 则会编译通过
let Id(id_number) = id;

match message {
  // 如果不包含通配符，则无法匹配非穷尽的结构体式 enum 变体。
  Message::Send { from, to, contents } => { },
  // 无法匹配非穷尽的元组或类单元 enum 变体。
  Message::Reaction(type) => { },
  Message::Quit => { },
}
```

也不允许对包含任何非穷尽变体的 enum 使用数值转换（`as`）。

例如，以下 enum 可以转换，因为它不包含任何非穷尽变体：

```rust
#[non_exhaustive]
pub enum Example {
    First,
    Second,
}
```

但是，如果 enum 中哪怕只包含一个非穷尽变体，转换也会导致错误。请看同一 enum 的这个修改版本：

```rust
#[non_exhaustive]
pub enum EnumWithNonExhaustiveVariants {
    First,
    #[non_exhaustive]
    Second,
}
```

<!-- ignore: needs multiple crates -->
```rust,ignore
use othercrate::EnumWithNonExhaustiveVariants;

// 错误：当 enum 定义在另一个 crate 中且具有非穷尽变体时，不能强制转换该 enum
let _ = EnumWithNonExhaustiveVariants::First as u8;
```

在下游 crate 中，非穷尽类型始终被视为有值。

[`match`]: ../expressions/match-expr.md
[attributes]: ../attributes.md
[enum]: ../items/enumerations.md
[functional update syntax]: ../expressions/struct-expr.md#functional-update-syntax
[struct]: ../items/structs.md
[visibility]: ../visibility-and-privacy.md
