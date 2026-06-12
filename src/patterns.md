r[patterns]
# 模式

r[patterns.syntax]
```grammar,patterns
Pattern -> `|`? PatternNoTopAlt  ( `|` PatternNoTopAlt )*

PatternNoTopAlt ->
      PatternWithoutModernRange
    | ModernRangePattern

PatternWithoutModernRange ->
      LiteralPattern
    | IdentifierPattern
    | WildcardPattern
    | RestPattern
    | ReferencePattern
    | StructPattern
    | TupleStructPattern
    | TuplePattern
    | GroupedPattern
    | SlicePattern
    | PathPattern
    | MacroInvocation
    | ObsoleteRangePattern[^obsolete-range-edition]
```

[^obsolete-range-edition]: [ObsoleteRangePattern] 语法在 2021 edition 及以后版本中在语义上无效。

r[patterns.intro]
模式用于将值与结构相匹配，并可选地把变量绑定到这些结构内部的值。它们也用于变量声明以及函数和闭包的参数。

以下示例中的模式做了四件事：

* 测试 `person` 的 `car` 字段是否填有某个值。
* 测试这个人的 `age` 字段是否在 13 到 19 之间，并将其值绑定到 `person_age` 变量。
* 将指向 `name` 字段的引用绑定到变量 `person_name`。
* 忽略 `person` 的其余字段。剩余字段可以具有任意值，且不会绑定到任何变量。

```rust
# struct Car;
# struct Computer;
# struct Person {
#     name: String,
#     car: Option<Car>,
#     computer: Option<Computer>,
#     age: u8,
# }
# let person = Person {
#     name: String::from("John"),
#     car: Some(Car),
#     computer: None,
#     age: 15,
# };
if let
    Person {
        car: Some(_),
        age: person_age @ 13..=19,
        name: ref person_name,
        ..
    } = person
{
    println!("{} has a car and is {} years old.", person_name, person_age);
}
```

r[patterns.use]
模式用于：

r[patterns.let]
* [`let` 声明](statements.md#let-statements)

r[patterns.param]
* [函数](items/functions.md)和[闭包](expressions/closure-expr.md)参数

r[patterns.match]
* [`match` 表达式](expressions/match-expr.md)

r[patterns.if-let]
* [`if let` 表达式](expressions/if-expr.md)

r[patterns.while-let]
* [`while let` 表达式](expressions/loop-expr.md#while-let-patterns)

r[patterns.for]
* [`for` 表达式](expressions/loop-expr.md#iterator-loops)

r[patterns.destructure]
## 解构

r[patterns.destructure.intro]
模式可以用来*解构* [struct](items/structs.md)、[enum](items/enumerations.md) 和[元组](types/tuple.md)。解构会把一个值拆分为它的组成部分。所用语法几乎与创建这些值时相同。

r[patterns.destructure.wildcard]
在[被匹配值](glossary.md#scrutinee)表达式具有 `struct`、`enum` 或 `tuple` 类型的模式中，[通配符模式](#wildcard-pattern)（`_`）代表*单个*数据字段，而 [et cetera](#grammar-StructPatternEtCetera) 或[剩余模式][patterns.rest]（`..`）代表某个特定变体的*所有*剩余字段。

r[patterns.destructure.named-field-shorthand]
解构带有命名字段（但不是编号字段）的数据结构时，允许将 `fieldname` 写作 `fieldname: fieldname` 的简写。

```rust
# enum Message {
#     Quit,
#     WriteString(String),
#     Move { x: i32, y: i32 },
#     ChangeColor(u8, u8, u8),
# }
# let message = Message::Quit;
match message {
    Message::Quit => println!("Quit"),
    Message::WriteString(write) => println!("{}", &write),
    Message::Move{ x, y: 0 } => println!("move {} horizontally", x),
    Message::Move{ .. } => println!("other move"),
    Message::ChangeColor { 0: red, 1: green, 2: _ } => {
        println!("color change, red: {}, green: {}", red, green);
    }
};
```

r[patterns.refutable]
## 可反驳性

当一个模式有可能不匹配它所匹配的值时，称该模式是*可反驳的*。另一方面，*不可反驳的*模式始终匹配它所匹配的值。示例：

```rust
let (x, y) = (1, 2);               // "(x, y)" 是不可驳模式

if let (a, 3) = (1, 2) {           // "(a, 3)" 是可驳模式，并且不会匹配
    panic!("Shouldn't reach here");
} else if let (a, 4) = (3, 4) {    // "(a, 4)" 是可驳模式，并且会匹配
    println!("Matched ({}, 4)", a);
}
```

r[patterns.literal]
## 字面量模式

r[patterns.literal.syntax]
```grammar,patterns
LiteralPattern -> `-`? LiteralExpression
```

r[patterns.literal.intro]
*字面量模式*精确匹配由该字面量创建的同一个值。由于负数不是[字面量](expressions/literal-expr.md)，模式中的字面量可以带有一个可选的前置减号，其作用类似于取负运算符。

> [!WARNING]
> 字面量模式接受 C 字符串和原始 C 字符串字面量，但 `&CStr` 没有实现结构相等性（`#[derive(Eq, PartialEq)]`），因此任何这类针对 `&CStr` 的 `match` 都会因类型错误而被拒绝。

r[patterns.literal.refutable]
字面量模式始终是可反驳的。

示例：

```rust
for i in -2..5 {
    match i {
        -1 => println!("It's minus one"),
        1 => println!("It's a one"),
        2|4 => println!("It's either a two or a four"),
        _ => println!("Matched none of the arms"),
    }
}
```

r[patterns.ident]
## 标识符模式

r[patterns.ident.syntax]
```grammar,patterns
IdentifierPattern -> `ref`? `mut`? IDENTIFIER ( `@` PatternNoTopAlt )?
```

r[patterns.ident.intro]
标识符模式会把它们匹配的值绑定到[值命名空间](names.namespaces.kinds)中的一个变量。

r[patterns.ident.unique]
该标识符在模式中必须是唯一的。

r[patterns.ident.scope]
该变量会遮蔽作用域内任何同名变量。新绑定的[作用域](names/scopes.md)取决于模式使用位置的上下文（例如 `let` 绑定或 `match` 分支）。

r[patterns.ident.bare]
仅由一个标识符组成、可能带有 `mut` 的模式会匹配任何值，并将其绑定到该标识符。这是变量声明以及函数和闭包参数中最常用的模式。

```rust
let mut variable = 10;
fn sum(x: i32, y: i32) -> i32 {
#    x + y
# }
```

r[patterns.ident.scrutinized]
若要把模式匹配到的值绑定到变量，请使用语法 `variable @ subpattern`。例如，以下代码会把值 2 绑定到 `e`（不是整个范围：这里的范围是一个范围子模式）。

```rust
let x = 2;

match x {
    e @ 1 ..= 5 => println!("got a range element {}", e),
    _ => println!("anything"),
}
```

r[patterns.ident.move]
默认情况下，标识符模式会根据被匹配值是否实现 [`Copy`](special-types-and-traits.md#copy)，把变量绑定到被匹配值的副本，或者从被匹配值移动而来。

r[patterns.ident.ref]
可以使用 `ref` 关键字将其改为绑定到引用，或使用 `ref mut` 绑定到可变引用。例如：

```rust
# let a = Some(10);
match a {
    None => (),
    Some(value) => (),
}

match a {
    None => (),
    Some(ref value) => (),
}
```

在第一个 match 表达式中，该值会被复制（或移动）。在第二个 match 中，指向同一内存位置的引用会被绑定到变量 value。需要这种语法，是因为在解构子模式中，`&` 运算符不能应用到值的字段。例如，以下代码无效：

```rust,compile_fail
# struct Person {
#    name: String,
#    age: u8,
# }
# let value = Person { name: String::from("John"), age: 23 };
if let Person { name: &person_name, age: 18..=150 } = value { }
```

若要使其有效，请写成以下形式：

```rust
# struct Person {
#    name: String,
#    age: u8,
# }
# let value = Person { name: String::from("John"), age: 23 };
if let Person { name: ref person_name, age: 18..=150 } = value { }
```

r[patterns.ident.ref-ignored]
因此，`ref` 并不是被匹配的内容。它的目的仅仅是让匹配到的绑定成为引用，而不是可能复制或移动被匹配的内容。

r[patterns.ident.precedent]
[路径模式](#path-patterns)优先于标识符模式。

> [!NOTE]
> 当一个模式是单段标识符时，语法上无法确定它表示 [IdentifierPattern] 还是 [PathPattern]。这种歧义只能在[名称解析](names/name-resolution.md)之后解决。
>
> ```rust
> const EXPECTED_VALUE: u8 = 42;
> //    ^^^^^^^^^^^^^^ 此常量在作用域内会影响
> //                   以下模式会被处理。
>
> fn check_value(x: u8) -> Result<u8, u8> {
>     match x {
>         EXPECTED_VALUE => Ok(x),
>     //  ^^^^^^^^^^^^^^ 被解析为一个 `PathPattern`，其解析为
>     //                 常量 `42`。
>         other_value => Err(x),
>     //  ^^^^^^^^^^^ 被解析为一个 `IdentifierPattern`。
>     }
> }
>
> // 如果上面的 `EXPECTED_VALUE` 被视为一个 `IdentifierPattern`，
> // 那么该模式总会匹配，使函数总是返回
> // `Ok(_)`，无论输入是什么。
> assert_eq!(check_value(42), Ok(42));
> assert_eq!(check_value(43), Err(43));
> ```

r[patterns.ident.constraint]
如果指定了 `ref` 或 `ref mut`，且该标识符遮蔽了一个常量，则这是错误。

r[patterns.ident.refutable]
如果 `@` 子模式不可反驳，或者未指定该子模式，则标识符模式是不可反驳的。

r[patterns.ident.binding]
### 绑定模式

r[patterns.ident.binding.intro]
为了改善易用性，模式会以不同的*绑定模式*运行，以便更容易将引用绑定到值。当一个引用值由非引用模式匹配时，它会被自动视为 `ref` 或 `ref mut` 绑定。示例：

```rust
let x: &Option<i32> = &Some(3);
if let Some(y) = x {
    // y 被转换为 `ref y`，其类型为 &i32
}
```

r[patterns.ident.binding.non-reference]
*非引用模式*包括除绑定、[通配符模式](#wildcard-pattern)（`_`）、引用类型的 [`const` 模式](#path-patterns)以及[引用模式](#reference-patterns)之外的所有模式。

r[patterns.ident.binding.default-mode]
如果一个绑定型模式没有显式带有 `ref`、`ref mut` 或 `mut`，则它会使用*默认绑定模式*来确定变量如何绑定。

r[patterns.ident.binding.move]
默认绑定模式从 "move" 模式开始，该模式使用移动语义。

r[patterns.ident.binding.top-down]
匹配模式时，编译器会从模式外层开始并向内处理。

r[patterns.ident.binding.auto-deref]
每当使用非引用模式匹配一个引用时，它都会自动解引用该值并更新默认绑定模式。

r[patterns.ident.binding.ref]
引用会将默认绑定模式设为 `ref`。

r[patterns.ident.binding.ref-mut]
可变引用会将模式设为 `ref mut`，除非该模式已经是 `ref`，在这种情况下它会保持为 `ref`。

r[patterns.ident.binding.nested-references]
如果自动解引用后的值仍然是引用，则会继续解引用，并重复此过程。

r[patterns.ident.binding.mode-limitations-binding]
只有当默认绑定模式为 "move" 时，绑定型模式才可以显式指定 `ref` 或 `ref mut` 绑定模式，或用 `mut` 指定可变性。例如，以下形式不被接受：

```rust,edition2024,compile_fail
let [mut x] = &[()]; //~ ERROR
let [ref x] = &[()]; //~ ERROR
let [ref mut x] = &mut [()]; //~ ERROR
```

r[patterns.ident.binding.mode-limitations.edition2024]
> [!EDITION-2024]
> 在 2024 edition 之前，即使默认绑定模式不是 "move"，绑定也可以显式指定 `ref` 或 `ref mut` 绑定模式，并且可以在这类绑定上用 `mut` 指定可变性。在这些 edition 中，无论当前默认绑定模式如何，在绑定上指定 `mut` 都会把绑定模式设为 "move"。

r[patterns.ident.binding.mode-limitations-reference]
类似地，引用模式只可以在默认绑定模式为 "move" 时出现。例如，以下形式不被接受：

```rust,edition2024,compile_fail
let [&x] = &[&()]; //~ ERROR
```

r[patterns.ident.binding.mode-limitations-reference.edition2024]
> [!EDITION-2024]
> 在 2024 edition 之前，即使默认绑定模式不是 "move"，引用模式也可以出现，并且同时具有匹配被匹配值以及导致默认绑定模式重置为 "move" 的效果。

r[patterns.ident.binding.mixed]
移动绑定和引用绑定可以混合出现在同一个模式中。这样做会导致被绑定对象发生部分移动，该对象之后不能再使用。只有当该类型不能被复制时，这一点才适用。

在下面的示例中，`name` 被从 `person` 中移出。尝试把 `person` 作为整体使用或使用 `person.name` 会因为*部分移动*而导致错误。

示例：

```rust
# struct Person {
#    name: String,
#    age: u8,
# }
# let person = Person{ name: String::from("John"), age: 23 };
// `name` 从 person 移出，`age` 被引用
let Person { name, ref age } = person;
```

r[patterns.wildcard]
## 通配符模式

r[patterns.wildcard.syntax]
```grammar,patterns
WildcardPattern -> `_`
```

r[patterns.wildcard.intro]
*通配符模式*（下划线符号）匹配任何值。它用于忽略无关紧要的值。

r[patterns.wildcard.struct-matcher]
在其他模式内部，它匹配单个数据字段（相对于匹配剩余字段的 `..`）。

r[patterns.wildcard.no-binding]
不同于标识符模式，它不会复制、移动或借用它所匹配的值。

示例：

```rust
# let x = 20;
let (a, _) = (10, x);   // x 总是由 _ 匹配
# assert_eq!(a, 10);

// 忽略函数/闭包参数
let real_part = |a: f64, _: f64| { a };

// 忽略 struct 中的一个字段
# struct RGBA {
#    r: f32,
#    g: f32,
#    b: f32,
#    a: f32,
# }
# let color = RGBA{r: 0.4, g: 0.1, b: 0.9, a: 0.5};
let RGBA{r: red, g: green, b: blue, a: _} = color;
# assert_eq!(color.r, red);
# assert_eq!(color.g, green);
# assert_eq!(color.b, blue);

// 接受任何 Some，带有任何值
# let x = Some(10);
if let Some(_) = x {}
```

r[patterns.wildcard.refutable]
通配符模式始终是不可反驳的。

r[patterns.rest]
## 剩余模式

r[patterns.rest.syntax]
```grammar,patterns
RestPattern -> `..`
```

r[patterns.rest.intro]
*剩余模式*（`..` token）作为可变长度模式，匹配其前后尚未被匹配的零个或多个元素。

r[patterns.rest.allowed-patterns]
它只可以用于[元组](#tuple-patterns)、[元组结构体](#tuple-struct-patterns)和[切片](#slice-patterns)模式，并且在这些模式中只能作为其中一个元素出现一次。它也允许出现在[标识符模式](#identifier-patterns)中，但仅限于[切片模式](#slice-patterns)。

r[patterns.rest.refutable]
剩余模式始终是不可反驳的。

示例：

```rust
# let words = vec!["a", "b", "c"];
# let slice = &words[..];
match slice {
    [] => println!("slice is empty"),
    [one] => println!("single element {}", one),
    [head, tail @ ..] => println!("head={} tail={:?}", head, tail),
}

match slice {
    // 忽略除最后一个元素以外的所有元素，最后一个元素必须是 "!"。
    [.., "!"] => println!("!!!"),

    // `start` 是除最后一个元素之外所有内容的切片，而最后一个元素必须是 "z"。
    [start @ .., "z"] => println!("starts with: {:?}", start),

    // `end` 是除第一个元素之外所有内容的切片，而第一个元素必须是 "a"。
    ["a", end @ ..] => println!("ends with: {:?}", end),

    // 'whole' 是整个切片，`last` 是最后一个元素
    whole @ [.., last] => println!("the last element of {:?} is {}", whole, last),

    rest => println!("{:?}", rest),
}

if let [.., penultimate, _] = slice {
    println!("next to last is {}", penultimate);
}

# let tuple = (1, 2, 3, 4, 5);
// 剩余模式也可以用在元组和元组
// struct 模式中。
match tuple {
    (1, .., y, z) => println!("y={} z={}", y, z),
    (.., 5) => println!("tail must be 5"),
    (..) => println!("matches everything else"),
}
```

r[patterns.range]
## 范围模式

r[patterns.range.syntax]
```grammar,patterns
ModernRangePattern ->
      RangeExclusivePattern
    | RangeInclusivePattern
    | RangeFromPattern
    | RangeToExclusivePattern
    | RangeToInclusivePattern

RangeExclusivePattern ->
      RangePatternBound `..` RangePatternBound

RangeInclusivePattern ->
      RangePatternBound `..=` RangePatternBound

RangeFromPattern ->
      RangePatternBound `..`

RangeToExclusivePattern ->
      `..` RangePatternBound

RangeToInclusivePattern ->
      `..=` RangePatternBound

ObsoleteRangePattern ->
    RangePatternBound `...` RangePatternBound

RangePatternBound ->
      LiteralPattern
    | PathExpression
```

r[patterns.range.intro]
*范围模式*匹配由其边界定义的范围内的标量值。它们由一个 _sigil_（符号标记，`..` 或 `..=`）以及一侧或两侧的边界组成。

该 sigil 左侧的边界称为*下界*。右侧的边界称为*上界*。

r[patterns.range.exclusive]
*排除上界的范围模式*匹配从下界开始直到上界、但不包括上界的所有值。它写作下界，后接 `..`，再后接上界。

例如，模式 `'m'..'p'` 只会匹配 `'m'`、`'n'` 和 `'o'`，明确**不**包括 `'p'`。

r[patterns.range.inclusive]
*包含上界的范围模式*匹配从下界开始直到并包括上界的所有值。它写作下界，后接 `..=`，再后接上界。

例如，模式 `'m'..='p'` 只会匹配值 `'m'`、`'n'`、`'o'` 和 `'p'`。

r[patterns.range.from]
*起始范围模式*匹配所有大于或等于下界的值。它写作下界后接 `..`。

例如，`1..` 会匹配任何大于或等于 1 的整数，例如 1、9、9001，或者 9007199254740991（如果它的大小合适），但不匹配 0；对于有符号整数，也不匹配负数。

r[patterns.range.to-exclusive]
*排除终止范围模式*匹配所有小于上界的值。它写作 `..` 后接上界。

例如，`..10` 会匹配任何小于 10 的整数，例如 9、1、0；对于有符号整数类型，还会匹配所有负值。

r[patterns.range.to-inclusive]
*包含终止范围模式*匹配所有小于或等于上界的值。它写作 `..=` 后接上界。

例如，`..=10` 会匹配任何小于或等于 10 的整数，例如 10、1、0；对于有符号整数类型，还会匹配所有负值。

r[patterns.range.constraint-nonempty]
范围模式必须非空；它必须覆盖其类型的可能值集合中的至少一个值。换言之：

* 在 `a..=b` 中，必须满足 a ≤ b。例如，范围模式 `10..=0` 是错误，但允许 `10..=10`。
* 在 `a..b` 中，必须满足 a \< b。例如，范围模式 `10..0` 或 `10..10` 是错误。
* 在 `..b` 中，b 不得是其类型的最小值。例如，范围模式 `..-128i8` 或 `..f64::NEG_INFINITY` 是错误。

r[patterns.range.bound]
边界写作以下形式之一：

* 字符、字节、整数或浮点数字面量。
* 一个 `-` 后接整数或浮点数字面量。
* 一个[路径](expressions/path-expr.md)。

> [!NOTE]
>
> 对于 _[RangePatternBound]_，我们在语法上接受的内容多于这些。其他内容随后会在语义上被拒绝。

r[patterns.range.constraint-bound-path]
如果边界写作路径，则在宏解析之后，该路径必须解析为类型为 `char`、整数类型或浮点数类型的常量项。

r[patterns.range.type]
范围模式匹配其上界和下界的类型，二者必须是同一类型。

r[patterns.range.path-value]
如果边界是[路径](expressions/path-expr.md)，则该边界匹配该路径所解析到的[常量](items/constant-items.md)的类型，并具有该常量的值。

r[patterns.range.literal-value]
如果边界是字面量，则该边界匹配对应[字面量表达式](expressions/literal-expr.md)的类型，并具有该字面量表达式的值。

r[patterns.range.negation]
如果边界是前面带有 `-` 的字面量，则该边界匹配对应[字面量表达式](expressions/literal-expr.md)的相同类型，并具有对该字面量表达式的值进行[取负](expressions/operator-expr.md#negation-operators)后的值。

r[patterns.range.float-restriction]
对于浮点数范围模式，该常量不可以是 `NaN`。

示例：

```rust
# let c = 'f';
let valid_variable = match c {
    'a'..='z' => true,
    'A'..='Z' => true,
    'α'..='ω' => true,
    _ => false,
};

# let ph = 10;
println!("{}", match ph {
    0..7 => "acid",
    7 => "neutral",
    8..=14 => "base",
    _ => unreachable!(),
});

# let uint: u32 = 5;
match uint {
    0 => "zero!",
    1.. => "positive number!",
};

// 使用指向常量的路径：
# const TROPOSPHERE_MIN : u8 = 6;
# const TROPOSPHERE_MAX : u8 = 20;
#
# const STRATOSPHERE_MIN : u8 = TROPOSPHERE_MAX + 1;
# const STRATOSPHERE_MAX : u8 = 50;
#
# const MESOSPHERE_MIN : u8 = STRATOSPHERE_MAX + 1;
# const MESOSPHERE_MAX : u8 = 85;
#
# let altitude = 70;
#
println!("{}", match altitude {
    TROPOSPHERE_MIN..=TROPOSPHERE_MAX => "troposphere",
    STRATOSPHERE_MIN..=STRATOSPHERE_MAX => "stratosphere",
    MESOSPHERE_MIN..=MESOSPHERE_MAX => "mesosphere",
    _ => "outer space, maybe",
});

# pub mod binary {
#     pub const MEGA : u64 = 1024*1024;
#     pub const GIGA : u64 = 1024*1024*1024;
# }
# let n_items = 20_832_425;
# let bytes_per_item = 12;
if let size @ binary::MEGA..=binary::GIGA = n_items * bytes_per_item {
    println!("It fits and occupies {} bytes", size);
}

# trait MaxValue {
#     const MAX: u64;
# }
# impl MaxValue for u8 {
#     const MAX: u64 = (1 << 8) - 1;
# }
# impl MaxValue for u16 {
#     const MAX: u64 = (1 << 16) - 1;
# }
# impl MaxValue for u32 {
#     const MAX: u64 = (1 << 32) - 1;
# }
// 使用限定路径：
println!("{}", match 0xfacade {
    0 ..= <u8 as MaxValue>::MAX => "fits in a u8",
    0 ..= <u16 as MaxValue>::MAX => "fits in a u16",
    0 ..= <u32 as MaxValue>::MAX => "fits in a u32",
    _ => "too big",
});
```

r[patterns.range.refutable]
对于固定宽度整数和 `char` 类型，如果范围模式覆盖某个类型的整个可能值集合，则它们是不可反驳的。例如，`0u8..=255u8` 是不可反驳的。

r[patterns.range.refutable-integer]
整数类型的取值范围是从其最小值到最大值的闭区间。

r[patterns.range.refutable-char]
`char` 类型的取值范围恰好是包含所有 Unicode 标量值的那些范围：`'\u{0000}'..='\u{D7FF}'` 和 `'\u{E000}'..='\u{10FFFF}'`。

r[patterns.range.constraint-slice]
[RangeFromPattern] 不能用作[切片模式](#slice-patterns)中子模式的顶层模式。例如，模式 `[1.., _]` 不是有效模式。

r[patterns.range.edition2021]
> [!EDITION-2021]
> 在 2021 edition 之前，同时具有下界和上界的范围模式也可以使用 `...` 代替 `..=` 来书写，含义相同。

r[patterns.ref]
## 引用模式

r[patterns.ref.syntax]
```grammar,patterns
ReferencePattern -> (`&`|`&&`) `mut`? PatternWithoutModernRange
```

r[patterns.ref.intro]
引用模式会解引用正在被匹配的指针，并因此借用它们。

例如，以下两个针对 `x: &i32` 的匹配是等价的：

```rust
let int_reference = &3;

let a = match *int_reference { 0 => "zero", _ => "some" };
let b = match int_reference { &0 => "zero", _ => "some" };

assert_eq!(a, b);
```

r[patterns.ref.ref-ref]
引用模式的语法产生式必须匹配 token `&&` 才能匹配对引用的引用，因为它本身就是一个 token，而不是两个 `&` token。

r[patterns.ref.mut]
添加 `mut` 关键字会解引用可变引用。可变性必须与该引用的可变性匹配。

r[patterns.ref.refutable]
引用模式始终是不可反驳的。

r[patterns.struct]
## 结构体模式

r[patterns.struct.syntax]
```grammar,patterns
StructPattern ->
    PathInExpression `{`
        StructPatternElements?
    `}`

StructPatternElements ->
      StructPatternFields (`,` | `,` StructPatternEtCetera)?
    | StructPatternEtCetera

StructPatternFields ->
    StructPatternField (`,` StructPatternField)*

StructPatternField ->
    OuterAttribute*
    (
        TUPLE_INDEX `:` Pattern
      | IDENTIFIER `:` Pattern
      | `ref`? `mut`? IDENTIFIER
    )

StructPatternEtCetera -> `..`
```

r[patterns.struct.intro]
结构体模式匹配满足其子模式所定义全部条件的 struct、enum 和 union 值。它们也用于[解构](#destructuring) struct、enum 或 union 值。

r[patterns.struct.ignore-rest]
在结构体模式中，字段通过名称、索引（对于元组结构体）引用，或通过使用 `..` 忽略：

```rust
# struct Point {
#     x: u32,
#     y: u32,
# }
# let s = Point {x: 1, y: 1};
#
match s {
    Point {x: 10, y: 20} => (),
    Point {y: 10, x: 20} => (),    // 顺序无关紧要
    Point {x: 10, ..} => (),
    Point {..} => (),
}

# struct PointTuple (
#     u32,
#     u32,
# );
# let t = PointTuple(1, 2);
#
match t {
    PointTuple {0: 10, 1: 20} => (),
    PointTuple {1: 10, 0: 20} => (),   // 顺序无关紧要
    PointTuple {0: 10, ..} => (),
    PointTuple {..} => (),
}

# enum Message {
#     Quit,
#     Move { x: i32, y: i32 },
# }
# let m = Message::Quit;
#
match m {
    Message::Quit => (),
    Message::Move {x: 10, y: 20} => (),
    Message::Move {..} => (),
}
```

r[patterns.struct.constraint-struct]
如果未使用 `..`，则用于匹配 struct 的结构体模式必须指定所有字段：

```rust
# struct Struct {
#    a: i32,
#    b: char,
#    c: bool,
# }
# let mut struct_value = Struct{a: 10, b: 'X', c: false};
#
match struct_value {
    Struct{a: 10, b: 'X', c: false} => (),
    Struct{a: 10, b: 'X', ref c} => (),
    Struct{a: 10, b: 'X', ref mut c} => (),
    Struct{a: 10, b: 'X', c: _} => (),
    Struct{a: _, b: _, c: _} => (),
}
```

r[patterns.struct.constraint-union]
用于匹配 union 的结构体模式必须恰好指定一个字段（见 [union 上的模式匹配](items/unions.md#pattern-matching-on-unions)）。

r[patterns.struct.binding-shorthand]
[IDENTIFIER] 语法匹配任何值，并将其绑定到与给定字段同名的变量。它是 `fieldname: fieldname` 的简写。可以包含 `ref` 和 `mut` 限定符，其行为如 [patterns.ident.ref] 所述。

```rust
# struct Struct {
#    a: i32,
#    b: char,
#    c: bool,
# }
# let struct_value = Struct{a: 10, b: 'X', c: false};
#
let Struct { a, b, c } = struct_value;
```

r[patterns.struct.refutable]
如果 [PathInExpression] 解析到具有多个变体的 enum 的构造器，或者其某个子模式是可反驳的，则结构体模式是可反驳的。

r[patterns.struct.namespace]
结构体模式匹配其构造器由 [PathInExpression] 在[类型命名空间](names.namespaces.kinds)中解析得到的 struct、union 或 enum 变体。更多细节见 [patterns.tuple-struct.namespace]。

r[patterns.tuple-struct]
## 元组结构体模式

r[patterns.tuple-struct.syntax]
```grammar,patterns
TupleStructPattern -> PathInExpression `(` TupleStructItems? `)`

TupleStructItems -> Pattern ( `,` Pattern )* `,`?
```

r[patterns.tuple-struct.intro]
元组结构体模式匹配满足其子模式所定义全部条件的元组结构体和 enum 值。它们也用于[解构](#destructuring)元组结构体或 enum 值。

r[patterns.tuple-struct.refutable]
如果 [PathInExpression] 解析到具有多个变体的 enum 的构造器，或者其某个子模式是可反驳的，则元组结构体模式是可反驳的。

r[patterns.tuple-struct.namespace]
元组结构体模式匹配其构造器由 [PathInExpression] 在[值命名空间](names.namespaces.kinds)中解析得到的元组结构体或[类元组 enum 变体](items.enum.tuple-expr)。

> [!NOTE]
> 反过来，用于元组结构体或[类元组 enum 变体](items.enum.tuple-expr)的结构体模式，例如 `S { 0: _ }`，会匹配其构造器在[类型命名空间](names.namespaces.kinds)中解析得到的元组结构体或变体。
>
> ```rust,no_run
> enum E1 { V(u16) }
> enum E2 { V(u32) }
>
> // 仅从类型命名空间导入 `E1::V`。
> mod _0 {
>     const V: () = (); // 用于命名空间遮蔽。
>     pub(super) use super::E1::*;
> }
> use _0::*;
>
> // 仅从值命名空间导入 `E2::V`。
> mod _1 {
>     struct V {} // 用于命名空间遮蔽。
>     pub(super) use super::E2::*;
> }
> use _1::*;
>
> fn f() {
>     // 此结构体模式匹配类元组形式的 enum 变体，
>     // 其构造器是在类型
>     // 命名空间中找到的。
>     let V { 0: ..=u16::MAX } = (loop {}) else { loop {} };
>     // 此元组结构体模式匹配类元组形式的 enum 变体，
>     // 其构造器是在值
>     // 命名空间中找到的。
>     let V(..=u32::MAX) = (loop {}) else { loop {} };
> }
> # // 这是必需的，因为 `super` 在函数内的行为比较特殊。
> # fn main() {}
> ```
>
> 语言团队（Lang team）已作出某些决定，例如 [PR #138458](https://github.com/rust-lang/rust/pull/138458) 中的决定，这些决定引发了关于在模式中以这种方式使用值命名空间是否可取的问题，如 [PR #140593](https://github.com/rust-lang/rust/pull/140593#issuecomment-2972338457) 所述。在你的代码中不刻意依赖这种细微行为，可能是较为谨慎的做法。

r[patterns.tuple]
## 元组模式

r[patterns.tuple.syntax]
```grammar,patterns
TuplePattern -> `(` TuplePatternItems? `)`

TuplePatternItems ->
      Pattern `,`
    | RestPattern
    | Pattern (`,` Pattern)+ `,`?
```

r[patterns.tuple.intro]
元组模式匹配满足其子模式所定义全部条件的元组值。它们也用于[解构](#destructuring)元组。

r[patterns.tuple.rest-syntax]
带有单个 [RestPattern] 的形式 `(..)` 是一种特殊形式，它不需要逗号，并匹配任意大小的元组。

r[patterns.tuple.refutable]
当元组模式的某个子模式可反驳时，该元组模式是可反驳的。

使用元组模式的示例：

```rust
let pair = (10, "ten");
let (a, b) = pair;

assert_eq!(a, 10);
assert_eq!(b, "ten");
```

r[patterns.paren]
## 分组模式

r[patterns.paren.syntax]
```grammar,patterns
GroupedPattern -> `(` Pattern `)`
```

r[patterns.paren.intro]
将模式括在圆括号中可以用于显式控制复合模式的优先级。例如，像 `&0..=5` 这样引用模式紧邻范围模式的形式是有歧义的，因而不允许使用，但可以用圆括号表达。

```rust
let int_reference = &3;
match int_reference {
    &(0..=5) => (),
    _ => (),
}
```

r[patterns.slice]
## 切片模式

r[patterns.slice.syntax]
```grammar,patterns
SlicePattern -> `[` SlicePatternItems? `]`

SlicePatternItems -> Pattern (`,` Pattern)* `,`?
```

r[patterns.slice.intro]
切片模式既可以匹配固定大小的数组，也可以匹配动态大小的切片。

```rust
// 固定大小
let arr = [1, 2, 3];
match arr {
    [1, _, _] => "starts with one",
    [a, b, c] => "starts with something else",
};
```
```rust
// 动态大小
let v = vec![1, 2, 3];
match v[..] {
    [a, b] => { /* this arm will not apply because the length doesn't match */ }
    [a, b, c] => { /* this arm will apply */ }
    _ => { /* this wildcard is required, since the length is not known statically */ }
};
```

r[patterns.slice.refutable-array]
匹配数组时，只要每个元素都是不可反驳的，切片模式就是不可反驳的。

r[patterns.slice.refutable-slice]
匹配切片时，只有带有单个 `..` [剩余模式][patterns.rest]的形式，或以 `..` 剩余模式作为子模式的[标识符模式](#identifier-patterns)，才是不可反驳的。

r[patterns.slice.restriction]
在切片内部，没有同时具备下界和上界的范围模式必须括在圆括号中，如 `(a..)`，以明确它意在匹配单个切片元素。像 `a..=b` 这样同时具有下界和上界的范围模式不需要括在圆括号中。

r[patterns.path]
## 路径模式

r[patterns.path.syntax]
```grammar,patterns
PathPattern -> PathExpression
```

r[patterns.path.intro]
*路径模式*是指向常量值，或者指向没有字段的 struct 或 enum 变体的模式。

r[patterns.path.unqualified]
非限定路径模式可以指向：

* enum 变体
* struct
* 常量
* 关联常量

r[patterns.path.qualified]
限定路径模式只能指向关联常量。

r[patterns.path.refutable]
当路径模式指向 struct、仅有一个变体的 enum 的某个 enum 变体，或类型不可反驳的常量时，它们是不可反驳的。当它们指向可反驳常量，或具有多个变体的 enum 的 enum 变体时，它们是可反驳的。

r[patterns.const]
### 常量模式

r[patterns.const.partial-eq]
当类型为 `T` 的常量 `C` 被用作模式时，我们首先检查 `T: PartialEq`。

r[patterns.const.structural-equality]
此外，我们要求 `C` 的值*具有（递归的）结构相等性*，其递归定义如下：

r[patterns.const.primitive]
- 整数以及 `str`、`bool` 和 `char` 值始终具有结构相等性。

r[patterns.const.builtin-aggregate]
- 如果元组、数组和切片的所有字段/元素都具有结构相等性，则它们具有结构相等性。（特别是，`()` 和 `[]` 始终具有结构相等性。）

r[patterns.const.ref]
- 如果引用所指向的值具有结构相等性，则该引用具有结构相等性。

r[patterns.const.aggregate]
- 如果 `struct` 或 `enum` 类型的值的 `PartialEq` 实例是通过 `#[derive(PartialEq)]` 派生的，并且所有字段（对于 enum：活动变体的所有字段）都具有结构相等性，则该值具有结构相等性。

r[patterns.const.pointer]
- 如果原始指针被定义为常量整数（然后被强制转换/transmute），则它具有结构相等性。

r[patterns.const.float]
- 如果浮点数值不是 `NaN`，则它具有结构相等性。

r[patterns.const.exhaustive]
- 其他任何东西都不具有结构相等性。

r[patterns.const.generic]
特别是，`C` 的值必须在模式构建时已知（即单态化前，pre-monomorphization）。这意味着涉及泛型参数的关联 const 不能用作模式。

r[patterns.const.immutable]
`C` 的值不得包含任何指向可变静态项（`static mut` 项或内部可变的 `static` 项）或 `extern` 静态项的引用。

r[patterns.const.translation]
在确保所有条件都满足之后，该常量值会被转换为一个模式，并且现在的行为完全如同直接写出了该模式一样。特别是，它会完整参与穷尽性检查。（对于原始指针，常量是书写这类模式的唯一方式。对于这些类型，只有 `_` 会被认为是穷尽的。）

r[patterns.or]
## Or-patterns（或模式）

*Or-patterns（或模式）*是匹配两个或多个子模式之一的模式（例如 `A | B | C`）。它们可以任意嵌套。在语法上，or-patterns 可以出现在允许其他模式出现的任何位置（由 [Pattern] 产生式表示），但 `let`-绑定以及函数和闭包参数例外（由 [PatternNoTopAlt] 产生式表示）。

r[patterns.constraints]
### 静态语义

r[patterns.constraints.pattern]
1. 给定某个深度处的模式 `p | q`，其中 `p` 和 `q` 是任意模式；如果满足以下情况，则该模式被认为是形式不良的：

   + 为 `p` 推断出的类型不能与为 `q` 推断出的类型合一，或
   + `p` 和 `q` 中引入的不是同一组绑定，或
   + `p` 和 `q` 中任何两个同名绑定的类型在类型或绑定模式方面不能合一。

   上述所有情况下，类型合一都是精确的，隐式[类型强制转换](type-coercions.md)不适用。

r[patterns.constraints.match-type-check]
2. 对表达式 `match e_s { a_1 => e_1, ... a_n => e_n }` 进行类型检查时，对于每个包含 `p_i | q_i` 形式模式的 match 分支 `a_i`，如果在它所在的深度 `d` 处，`e_s` 在深度 `d` 的表达式片段的类型不能与 `p_i | q_i` 合一，则模式 `p_i | q_i` 被认为是形式不良的。

r[patterns.constraints.exhaustiveness-or-pattern]
3. 就穷尽性检查而言，模式 `p | q` 被认为既覆盖 `p`，也覆盖 `q`。对于某个构造器 `c(x, ..)`，分配律适用，使得 `c(p | q, ..rest)` 覆盖与 `c(p, ..rest) | c(q, ..rest)` 相同的值集合。这可以递归应用，直到除了位于顶层的 `p | q` 形式模式之外，不再存在嵌套的这类模式。

   注意，所谓 *"构造器"* 并不是指元组结构体模式，而是指任何积类型的模式。这包括 enum 变体、元组结构体、带命名字段的 struct、数组、元组和切片。

r[patterns.behavior]
### 动态语义

r[patterns.behavior.nested-or-patterns]
1. 在深度 `d` 处，将被匹配值表达式 `e_s` 与模式 `c(p | q, ..rest)` 进行模式匹配的动态语义，被定义为与 `c(p, ..rest) | c(q, ..rest)` 的动态语义相同；其中 `c` 是某个构造器，`p` 和 `q` 是任意模式，`rest` 可选地表示 `c` 中任何剩余的潜在因子。

r[patterns.precedence]
### 与其他无定界模式的优先级

如本章其他地方所示，有几类模式在语法上是无定界的，包括标识符模式、引用模式和 or-patterns（或模式）。Or-patterns 始终具有最低优先级。这使我们能够为未来可能的类型标注特性保留语法空间，也能减少歧义。例如，`x @ A(..) | B(..)` 会导致错误，因为 `x` 并未在所有模式中绑定。`&A(x) | B(x)` 会导致不同子模式中的 `x` 之间出现类型不匹配。

[PR #138458]: https://github.com/rust-lang/rust/pull/138458
[PR #140593]: https://github.com/rust-lang/rust/pull/140593#issuecomment-2972338457
[`Copy`]: special-types-and-traits.md#copy
[constant]: items/constant-items.md
[enums]: items/enumerations.md
[literals]: expressions/literal-expr.md
[literal expression]: expressions/literal-expr.md
[name resolution]: names/name-resolution.md
[negating]: expressions/operator-expr.md#negation-operators
[path]: expressions/path-expr.md
[pattern matching on unions]: items/unions.md#pattern-matching-on-unions
[range expressions]: expressions/range-expr.md
[scope]: names/scopes.md
[structs]: items/structs.md
[tuples]: types/tuple.md
[scrutinee]: glossary.md#scrutinee
[tuple-like enum variant]: items.enum.tuple-expr
[type coercions]: type-coercions.md
[type namespace]: names.namespaces.kinds
[value namespace]: names.namespaces.kinds
