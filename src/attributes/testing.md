r[attributes.testing]
# 测试属性

以下[属性](../attributes.md)用于指定执行测试的函数。以 "test" 模式编译 crate 会启用测试函数的构建，并同时构建用于执行测试的测试框架。启用测试模式也会启用 [`test` 条件编译选项](../conditional-compilation.md#test)。

<!-- template:attributes -->
r[attributes.testing.test]
## `test` 属性

r[attributes.testing.test.intro]
_`test` [属性](../attributes.md)_ 将函数标记为要作为测试执行。

> [!EXAMPLE]
> ```rust,no_run
> # pub fn add(left: u64, right: u64) -> u64 { left + right }
> #[test]
> fn it_works() {
>     let result = add(2, 2);
>     assert_eq!(result, 4);
> }
> ```

r[attributes.testing.test.syntax]
`test` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

r[attributes.testing.test.allowed-positions]
`test` 属性只能应用于单态、不接受参数且返回类型实现了 [`Termination`](../../std/process/trait.Termination.html) trait 的[自由函数](../glossary.md#free-item)。

> [!NOTE]
> Some of types that implement the [`Termination`] trait include: * `()` * `Result<T, E> where T: Termination, E: Debug`

r[attributes.testing.test.duplicates]
在一个函数上，只有第一次使用 `test` 会生效。

> [!NOTE]
> `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

<!-- TODO: This is a minor lie. Currently rustc warns that duplicates are ignored, but it then generates multiple test entries with the same name. I would vote for rejecting this in the future. -->

r[attributes.testing.test.stdlib]
`test` 属性由标准库 prelude 以 [`std::prelude::v1::test`](../../core/macros/builtin/attr.test.html) 导出。

r[attributes.testing.test.enabled]
这些函数只在测试模式下编译。

> [!NOTE]
> 通过向 `rustc` 传递 `--test` 参数或使用 `cargo test` 可以启用测试模式。

r[attributes.testing.test.success]
测试框架会调用返回值的 [`report`](../../std/process/trait.Termination.html#tymethod.report) 方法，并根据产生的 [`ExitCode`](../../std/process/struct.ExitCode.html) 是否表示成功终止，将测试归类为通过或失败。具体来说：
* 返回 `()` 的测试只要会终止且不 panic，就会通过。
* 返回 `Result<(), E>` 的测试只要返回 `Ok(())`，就会通过。
* 返回 `ExitCode::SUCCESS` 的测试会通过，而返回 `ExitCode::FAILURE` 的测试会失败。
* 不会终止的测试既不通过也不失败。

> [!EXAMPLE]
> ```rust,no_run
> # use std::io;
> # fn setup_the_thing() -> io::Result<i32> { Ok(1) }
> # fn do_the_thing(s: &i32) -> io::Result<()> { Ok(()) }
> #[test]
> fn test_the_thing() -> io::Result<()> {
>     let state = setup_the_thing()?; // expected to succeed
>     do_the_thing(&state)?;          // expected to succeed
>     Ok(())
> }
> ```

<!-- template:attributes -->
r[attributes.testing.ignore]
## `ignore` 属性

r[attributes.testing.ignore.intro]
_`ignore` [属性](../attributes.md)_ 可以与 [`test` 属性](testing.md#r-attributes.testing.test)一起使用，用来告知测试框架不要将该函数作为测试执行。

> [!EXAMPLE]
> ```rust,no_run
> #[test]
> #[ignore]
> fn check_thing() {
>     // …
> }
> ```

> [!NOTE]
> `rustc` 测试框架支持 `--include-ignored` 标志，用于强制运行被忽略的测试。

r[attributes.testing.ignore.syntax]
`ignore` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 和 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 语法。

r[attributes.testing.ignore.reason]
`ignore` 属性的 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 形式提供了一种指定测试被忽略原因的方式。

> [!EXAMPLE]
> ```rust,no_run
> #[test]
> #[ignore = "not yet implemented"]
> fn mytest() {
>     // …
> }
> ```

r[attributes.testing.ignore.allowed-positions]
`ignore` 属性只能应用于以 `test` 属性标注的函数。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

r[attributes.testing.ignore.duplicates]
在一个函数上，只有第一次使用 `ignore` 会生效。

> [!NOTE]
> `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

r[attributes.testing.ignore.behavior]
在测试模式下，被忽略的测试仍会被编译，但不会被执行。

<!-- template:attributes -->
r[attributes.testing.should_panic]
## `should_panic` 属性

r[attributes.testing.should_panic.intro]
_`should_panic` [属性](../attributes.md)_ 使测试仅在应用该属性的[测试函数](testing.md#r-attributes.testing.test) panic 时通过。

> [!EXAMPLE]
> ```rust,no_run
> #[test]
> #[should_panic(expected = "values don't match")]
> fn mytest() {
>     assert_eq!(1, 2, "values don't match");
> }
> ```

r[attributes.testing.should_panic.syntax]
`should_panic` 属性有以下形式：

- [MetaWord]
  > [!EXAMPLE]
  > ```rust,no_run
  > #[test]
  > #[should_panic]
  > fn mytest() { panic!("error: some message, and more"); }
  > ```

- [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) --- 给定字符串必须出现在 panic 消息中，测试才会通过。
  > [!EXAMPLE]
  > ```rust,no_run
  > #[test]
  > #[should_panic = "some message"]
  > fn mytest() { panic!("error: some message, and more"); }
  > ```

- [MetaListNameValueStr](../attributes.md#grammar-MetaListNameValueStr) --- 与 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 语法一样，给定字符串必须出现在 panic 消息中。
  > [!EXAMPLE]
  > ```rust,no_run
  > #[test]
  > #[should_panic(expected = "some message")]
  > fn mytest() { panic!("error: some message, and more"); }
  > ```

r[attributes.testing.should_panic.allowed-positions]
`should_panic` 属性只能应用于以 `test` 属性标注的函数。

> [!NOTE]
> `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

r[attributes.testing.should_panic.duplicates]
在一个函数上，只有第一次使用 `should_panic` 会生效。

> [!NOTE]
> `rustc` 会对第一次之后的任何使用发出未来兼容性警告。将来这可能会变成错误。

r[attributes.testing.should_panic.expected]
使用 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 形式，或使用带有 `expected` 键的 [MetaListNameValueStr](../attributes.md#grammar-MetaListNameValueStr) 形式时，给定字符串必须出现在 panic 消息中的某处，测试才会通过。

r[attributes.testing.should_panic.return]
测试函数的返回类型必须是 `()`。

[`Termination`]: std::process::Termination
[`report`]: std::process::Termination::report
[`test` conditional compilation option]: ../conditional-compilation.md#test
[attributes]: ../attributes.md
[`ExitCode`]: std::process::ExitCode
[free functions]: ../glossary.md#free-item
