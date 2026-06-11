r[attributes.type-system]
# 类型系统属性

以下[属性](../attributes.md)用于改变类型可以如何被使用。

r[attributes.type-system.non_exhaustive]
## `non_exhaustive` 属性

r[attributes.type-system.non_exhaustive.intro]
_`non_exhaustive` 属性_表示一个类型或变体将来可能会添加更多字段或变体。

r[attributes.type-system.non_exhaustive.allowed-positions]
它可以应用于 [`struct`](../items/structs.md)、[`enum`](../items/enumerations.md) 和 `enum` 变体。

r[attributes.type-system.non_exhaustive.syntax]
`non_exhaustive` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法，因此不接受任何输入。

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

// Non-exhaustive structs can be constructed as normal within the defining crate.
let config = Config { window_width: 640, window_height: 480 };
let token = Token;
let id = Id(4);

// Non-exhaustive structs can be matched on exhaustively within the defining crate.
let Config { window_width, window_height } = config;
let Token = token;
let Id(id_number) = id;

let error = Error::Other;
let message = Message::Reaction(3);

// Non-exhaustive enums can be matched on exhaustively within the defining crate.
match error {
    Error::Message(ref s) => { },
    Error::Other => { },
}

match message {
    // Non-exhaustive variants can be matched on exhaustively within the defining crate.
    Message::Send { from, to, contents } => { },
    Message::Reaction(id) => { },
    Message::Quit => { },
}
```

r[attributes.type-system.non_exhaustive.external-crate]
在定义它的 crate 之外，带有 `non_exhaustive` 标注的类型会受到一些限制，以便在添加新字段或变体时保持向后兼容性。

r[attributes.type-system.non_exhaustive.construction]
非穷尽类型不能在定义它的 crate 之外构造：

- 非穷尽变体（[`struct`](../items/structs.md) 或 [`enum` 变体](../items/enumerations.md)）不能用 [StructExpression](../expressions/struct-expr.md#grammar-StructExpression) 构造（包括使用[函数式更新语法](../expressions/struct-expr.md#functional-update-syntax)）。
- 隐式定义的 [unit-like struct](../items/structs.md) 的同名常量，或者 [tuple struct](../items/structs.md) 的同名构造函数，具有不大于 `pub(crate)` 的[可见性](../visibility-and-privacy.md)。也就是说，如果该 struct 的可见性是 `pub`，那么该常量或构造函数的可见性就是 `pub(crate)`；否则这两个项的可见性相同（与没有 `#[non_exhaustive]` 时一样）。
- 可以构造 [`enum`](../items/enumerations.md) 实例。

以下构造示例在定义它们的 crate 之外无法编译：

<!-- ignore: requires external crates -->
```rust,ignore
// These are types defined in an upstream crate that have been annotated as
// `#[non_exhaustive]`.
use upstream::{Config, Token, Id, Error, Message};

// Cannot construct an instance of `Config`; if new fields were added in
// a new version of `upstream` then this would fail to compile, so it is
// disallowed.
let config = Config { window_width: 640, window_height: 480 };

// Cannot construct an instance of `Token`; if new fields were added, then
// it would not be a unit-like struct any more, so the same-named constant
// created by it being a unit-like struct is not public outside the crate;
// this code fails to compile.
let token = Token;

// Cannot construct an instance of `Id`; if new fields were added, then
// its constructor function signature would change, so its constructor
// function is not public outside the crate; this code fails to compile.
let id = Id(5);

// Can construct an instance of `Error`; new variants being introduced would
// not result in this failing to compile.
let error = Error::Message("foo".to_string());

// Cannot construct an instance of `Message::Send` or `Message::Reaction`;
// if new fields were added in a new version of `upstream` then this would
// fail to compile, so it is disallowed.
let message = Message::Send { from: 0, to: 1, contents: "foo".to_string(), };
let message = Message::Reaction(0);

// Cannot construct an instance of `Message::Quit`; if this were converted to
// a tuple enum variant `upstream`, this would fail to compile.
let message = Message::Quit;
```

r[attributes.type-system.non_exhaustive.match]
在定义它们的 crate 之外对非穷尽类型进行匹配时存在一些限制：

- 对非穷尽变体（[`struct`](../items/structs.md) 或 [`enum` 变体](../items/enumerations.md)）进行模式匹配时，必须使用包含 `..` 的 [StructPattern](../patterns.md#grammar-StructPattern)。元组 enum 变体的构造函数的[可见性](../visibility-and-privacy.md)会降低到不大于 `pub(crate)`。
- 对非穷尽 [`enum`](../items/enumerations.md) 进行模式匹配时，匹配某个变体不会有助于分支的穷尽性。以下匹配示例在定义它们的 crate 之外无法编译：

<!-- ignore: requires external crates -->
```rust, ignore
// These are types defined in an upstream crate that have been annotated as
// `#[non_exhaustive]`.
use upstream::{Config, Token, Id, Error, Message};

// Cannot match on a non-exhaustive enum without including a wildcard arm.
match error {
  Error::Message(ref s) => { },
  Error::Other => { },
  // would compile with: `_ => {},`
}

// Cannot match on a non-exhaustive struct without a wildcard.
if let Ok(Config { window_width, window_height }) = config {
    // would compile with: `..`
}

// Cannot match a non-exhaustive unit-like or tuple struct except by using
// braced struct syntax with a wildcard.
// This would compile as `let Token { .. } = token;`
let Token = token;
// This would compile as `let Id { 0: id_number, .. } = id;`
let Id(id_number) = id;

match message {
  // Cannot match on a non-exhaustive struct enum variant without including a wildcard.
  Message::Send { from, to, contents } => { },
  // Cannot match on a non-exhaustive tuple or unit enum variant.
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

// Error: cannot cast an enum with a non-exhaustive variant when it's defined in another crate
let _ = EnumWithNonExhaustiveVariants::First as u8;
```

在下游 crate 中，非穷尽类型始终被视为有值。

[`match`]: ../expressions/match-expr.md
[attributes]: ../attributes.md
[enum]: ../items/enumerations.md
[functional update syntax]: ../expressions/struct-expr.md#functional-update-syntax
[struct]: ../items/structs.md
[visibility]: ../visibility-and-privacy.md
