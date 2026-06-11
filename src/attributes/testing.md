<div class="rule" id="r-attributes.testing"><a class="rule-link" href="#r-attributes.testing" title="attributes.testing"><span>[attributes<wbr>.testing]</span></a>
</div>

# 测试属性

以下[属性](../attributes.md)用于指定执行测试的函数。以 "test" 模式编译 crate 会启用测试函数的构建，并同时构建用于执行测试的测试框架。启用测试模式也会启用 [`test` 条件编译选项](../conditional-compilation.md#test)。

<!-- template:attributes -->

<div class="rule" id="r-attributes.testing.test"><a class="rule-link" href="#r-attributes.testing.test" title="attributes.testing.test"><span>[attributes<wbr>.testing<wbr>.test]</span></a>
</div>

## `test` 属性

<div class="rule" id="r-attributes.testing.test.intro"><a class="rule-link" href="#r-attributes.testing.test.intro" title="attributes.testing.test.intro"><span>[attributes<wbr>.testing<wbr>.test<wbr>.intro]</span></a>
</div>

_`test` [属性](../attributes.md)_ 将函数标记为要作为测试执行。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust,no_run
 > # pub fn add(left: u64, right: u64) -> u64 { left + right }
 > #[test]
 > fn it_works() {
 >     let result = add(2, 2);
 >     assert_eq!(result, 4);
 > }
 > ```

</div>

<div class="rule" id="r-attributes.testing.test.syntax"><a class="rule-link" href="#r-attributes.testing.test.syntax" title="attributes.testing.test.syntax"><span>[attributes<wbr>.testing<wbr>.test<wbr>.syntax]</span></a>
</div>

`test` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 语法。

<div class="rule" id="r-attributes.testing.test.allowed-positions"><a class="rule-link" href="#r-attributes.testing.test.allowed-positions" title="attributes.testing.test.allowed-positions"><span>[attributes<wbr>.testing<wbr>.test<wbr>.allowed-positions]</span></a>
</div>

`test` 属性只能应用于单态、不接受参数且返回类型实现了 [`Termination`](../../std/process/trait.Termination.html) trait 的[自由函数](../glossary.md#free-item)。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 实现 [`Termination`](../../std/process/trait.Termination.html) trait 的一些类型包括：
 > 
 > - `()`
 > - `Result<T, E> where T: Termination, E: Debug`

</div>

<div class="rule" id="r-attributes.testing.test.duplicates"><a class="rule-link" href="#r-attributes.testing.test.duplicates" title="attributes.testing.test.duplicates"><span>[attributes<wbr>.testing<wbr>.test<wbr>.duplicates]</span></a>
</div>

在一个函数上，只有第一次使用 `test` 会生效。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

</div>

<!-- TODO: This is a minor lie. Currently rustc warns that duplicates are ignored, but it then generates multiple test entries with the same name. I would vote for rejecting this in the future. -->

<div class="rule" id="r-attributes.testing.test.stdlib"><a class="rule-link" href="#r-attributes.testing.test.stdlib" title="attributes.testing.test.stdlib"><span>[attributes<wbr>.testing<wbr>.test<wbr>.stdlib]</span></a>
</div>

`test` 属性由标准库 prelude 以 [`std::prelude::v1::test`](../../core/macros/builtin/attr.test.html) 导出。

<div class="rule" id="r-attributes.testing.test.enabled"><a class="rule-link" href="#r-attributes.testing.test.enabled" title="attributes.testing.test.enabled"><span>[attributes<wbr>.testing<wbr>.test<wbr>.enabled]</span></a>
</div>

这些函数只在测试模式下编译。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 通过向 `rustc` 传递 `--test` 参数或使用 `cargo test` 可以启用测试模式。

</div>

<div class="rule" id="r-attributes.testing.test.success"><a class="rule-link" href="#r-attributes.testing.test.success" title="attributes.testing.test.success"><span>[attributes<wbr>.testing<wbr>.test<wbr>.success]</span></a>
</div>

测试框架会调用返回值的 [`report`](../../std/process/trait.Termination.html#tymethod.report) 方法，并根据产生的 [`ExitCode`](../../std/process/struct.ExitCode.html) 是否表示成功终止，将测试归类为通过或失败。具体来说：

- 返回 `()` 的测试只要会终止且不 panic，就会通过。
- 返回 `Result<(), E>` 的测试只要返回 `Ok(())`，就会通过。
- 返回 `ExitCode::SUCCESS` 的测试会通过，而返回 `ExitCode::FAILURE` 的测试会失败。
- 不会终止的测试既不通过也不失败。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
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

</div>

<!-- template:attributes -->

<div class="rule" id="r-attributes.testing.ignore"><a class="rule-link" href="#r-attributes.testing.ignore" title="attributes.testing.ignore"><span>[attributes<wbr>.testing<wbr>.ignore]</span></a>
</div>

## `ignore` 属性

<div class="rule" id="r-attributes.testing.ignore.intro"><a class="rule-link" href="#r-attributes.testing.ignore.intro" title="attributes.testing.ignore.intro"><span>[attributes<wbr>.testing<wbr>.ignore<wbr>.intro]</span></a>
</div>

_`ignore` [属性](../attributes.md)_ 可以与 [`test` 属性](testing.md#r-attributes.testing.test)一起使用，用来告知测试框架不要将该函数作为测试执行。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust,no_run
 > #[test]
 > #[ignore]
 > fn check_thing() {
 >     // …
 > }
 > ```

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 测试框架支持 `--include-ignored` 标志，用于强制运行被忽略的测试。

</div>

<div class="rule" id="r-attributes.testing.ignore.syntax"><a class="rule-link" href="#r-attributes.testing.ignore.syntax" title="attributes.testing.ignore.syntax"><span>[attributes<wbr>.testing<wbr>.ignore<wbr>.syntax]</span></a>
</div>

`ignore` 属性使用 [MetaWord](../attributes.md#grammar-MetaWord) 和 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 语法。

<div class="rule" id="r-attributes.testing.ignore.reason"><a class="rule-link" href="#r-attributes.testing.ignore.reason" title="attributes.testing.ignore.reason"><span>[attributes<wbr>.testing<wbr>.ignore<wbr>.reason]</span></a>
</div>

`ignore` 属性的 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 形式提供了一种指定测试被忽略原因的方式。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust,no_run
 > #[test]
 > #[ignore = "not yet implemented"]
 > fn mytest() {
 >     // …
 > }
 > ```

</div>

<div class="rule" id="r-attributes.testing.ignore.allowed-positions"><a class="rule-link" href="#r-attributes.testing.ignore.allowed-positions" title="attributes.testing.ignore.allowed-positions"><span>[attributes<wbr>.testing<wbr>.ignore<wbr>.allowed-positions]</span></a>
</div>

`ignore` 属性只能应用于以 `test` 属性标注的函数。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="rule" id="r-attributes.testing.ignore.duplicates"><a class="rule-link" href="#r-attributes.testing.ignore.duplicates" title="attributes.testing.ignore.duplicates"><span>[attributes<wbr>.testing<wbr>.ignore<wbr>.duplicates]</span></a>
</div>

在一个函数上，只有第一次使用 `ignore` 会生效。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次使用之后的任何使用发出 lint。这在将来可能会变成错误。

</div>

<div class="rule" id="r-attributes.testing.ignore.behavior"><a class="rule-link" href="#r-attributes.testing.ignore.behavior" title="attributes.testing.ignore.behavior"><span>[attributes<wbr>.testing<wbr>.ignore<wbr>.behavior]</span></a>
</div>

在测试模式下，被忽略的测试仍会被编译，但不会被执行。

<!-- template:attributes -->

<div class="rule" id="r-attributes.testing.should_panic"><a class="rule-link" href="#r-attributes.testing.should_panic" title="attributes.testing.should_panic"><span>[attributes<wbr>.testing<wbr>.should_panic]</span></a>
</div>

## `should_panic` 属性

<div class="rule" id="r-attributes.testing.should_panic.intro"><a class="rule-link" href="#r-attributes.testing.should_panic.intro" title="attributes.testing.should_panic.intro"><span>[attributes<wbr>.testing<wbr>.should_panic<wbr>.intro]</span></a>
</div>

_`should_panic` [属性](../attributes.md)_ 使测试仅在应用该属性的[测试函数](testing.md#r-attributes.testing.test) panic 时通过。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust,no_run
 > #[test]
 > #[should_panic(expected = "values don't match")]
 > fn mytest() {
 >     assert_eq!(1, 2, "values don't match");
 > }
 > ```

</div>

<div class="rule" id="r-attributes.testing.should_panic.syntax"><a class="rule-link" href="#r-attributes.testing.should_panic.syntax" title="attributes.testing.should_panic.syntax"><span>[attributes<wbr>.testing<wbr>.should_panic<wbr>.syntax]</span></a>
</div>

`should_panic` 属性有以下形式：

- [MetaWord](../attributes.md#grammar-MetaWord)
  
  <div class="alert alert-example">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
   > 
   > ```rust,no_run
   > #[test]
   > #[should_panic]
   > fn mytest() { panic!("error: some message, and more"); }
   > ```
  
  </div>
  
- [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) --- 给定字符串必须出现在 panic 消息中，测试才会通过。
  
  <div class="alert alert-example">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
   > 
   > ```rust,no_run
   > #[test]
   > #[should_panic = "some message"]
   > fn mytest() { panic!("error: some message, and more"); }
   > ```
  
  </div>
  
- [MetaListNameValueStr](../attributes.md#grammar-MetaListNameValueStr) --- 与 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 语法一样，给定字符串必须出现在 panic 消息中。
  
  <div class="alert alert-example">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
   > 
   > ```rust,no_run
   > #[test]
   > #[should_panic(expected = "some message")]
   > fn mytest() { panic!("error: some message, and more"); }
   > ```
  
  </div>
  

<div class="rule" id="r-attributes.testing.should_panic.allowed-positions"><a class="rule-link" href="#r-attributes.testing.should_panic.allowed-positions" title="attributes.testing.should_panic.allowed-positions"><span>[attributes<wbr>.testing<wbr>.should_panic<wbr>.allowed-positions]</span></a>
</div>

`should_panic` 属性只能应用于以 `test` 属性标注的函数。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="rule" id="r-attributes.testing.should_panic.duplicates"><a class="rule-link" href="#r-attributes.testing.should_panic.duplicates" title="attributes.testing.should_panic.duplicates"><span>[attributes<wbr>.testing<wbr>.should_panic<wbr>.duplicates]</span></a>
</div>

在一个函数上，只有第一次使用 `should_panic` 会生效。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次之后的任何使用发出未来兼容性警告。将来这可能会变成错误。

</div>

<div class="rule" id="r-attributes.testing.should_panic.expected"><a class="rule-link" href="#r-attributes.testing.should_panic.expected" title="attributes.testing.should_panic.expected"><span>[attributes<wbr>.testing<wbr>.should_panic<wbr>.expected]</span></a>
</div>

使用 [MetaNameValueStr](../attributes.md#grammar-MetaNameValueStr) 形式，或使用带有 `expected` 键的 [MetaListNameValueStr](../attributes.md#grammar-MetaListNameValueStr) 形式时，给定字符串必须出现在 panic 消息中的某处，测试才会通过。

<div class="rule" id="r-attributes.testing.should_panic.return"><a class="rule-link" href="#r-attributes.testing.should_panic.return" title="attributes.testing.should_panic.return"><span>[attributes<wbr>.testing<wbr>.should_panic<wbr>.return]</span></a>
</div>

测试函数的返回类型必须是 `()`。