<div class="rule" id="r-divergence"><a class="rule-link" href="#r-divergence" title="divergence"><span>[divergence]</span></a>
</div>

# 发散

<div class="rule" id="r-divergence.intro"><a class="rule-link" href="#r-divergence.intro" title="divergence.intro"><span>[divergence<wbr>.intro]</span></a>
</div>

\_发散表达式_是永远不会完成正常执行的表达式。

```rust
fn diverges() -> ! {
    panic!("This function never returns!");
}

fn example() {
    let x: i32 = diverges(); // 这一行永不完成。
    println!("This is never printed: {x}");
}
```

有关特定表达式发散行为，请参见以下规则：

- [expr.block.diverging](expressions/block-expr.md#r-expr.block.diverging) --- 块表达式。
- [expr.if.diverging](expressions/if-expr.md#r-expr.if.diverging) --- `if` 表达式。
- [expr.loop.block-labels.type](expressions/loop-expr.md#r-expr.loop.block-labels.type) --- 带有 `break` 的带标签块表达式。
- [expr.loop.break-value.diverging](expressions/loop-expr.md#r-expr.loop.break-value.diverging) --- 带有 `break` 的 `loop` 表达式。
- [expr.loop.break.diverging](expressions/loop-expr.md#r-expr.loop.break.diverging) --- `break` 表达式。
- [expr.loop.continue.diverging](expressions/loop-expr.md#r-expr.loop.continue.diverging) --- `continue` 表达式。
- [expr.loop.infinite.diverging](expressions/loop-expr.md#r-expr.loop.infinite.diverging) --- 无限 `loop` 表达式。
- [expr.match.diverging](expressions/match-expr.md#r-expr.match.diverging) --- `match` 表达式。
- [expr.match.empty](expressions/match-expr.md#r-expr.match.empty) --- 空 `match` 表达式。
- [expr.return.diverging](expressions/return-expr.md#r-expr.return.diverging) --- `return` 表达式。
- [type.never.constraint](types/never.md#r-type.never.constraint) --- 返回 `!` 的函数调用。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [`panic!`](../std/macro.panic.html) 宏以及像 [`unreachable!`](../core/macro.unreachable.html) 这样的相关 panic 生成宏也具有 [`!`](types/never.md#r-type.never) 类型，并且是发散的。

</div>

<div class="rule" id="r-divergence.never"><a class="rule-link" href="#r-divergence.never" title="divergence.never"><span>[divergence<wbr>.never]</span></a>
</div>

任何类型为 [`!`](types/never.md#r-type.never) 的表达式都是发散表达式。不过，发散表达式并不限于类型 [`!`](types/never.md#r-type.never)；其他类型的表达式也可能发散（例如，`Some(loop {})` 的类型是 `Option<!>`）。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 虽然 `!` 被视为无值类型，但一个类型无值并不足以使其发散。
 > 
 > ```rust,compile_fail,E0308
 > enum Empty {}
 > fn make_never() -> ! {loop{}}
 > fn make_empty() -> Empty {loop{}}
 > 
 > fn diverging() -> ! {
 >     // 这具有 `!` 类型。
 >     // 因此，整个函数被视为发散。
 >     make_never();
 >     // OK：主体的类型是 `!`，与返回类型匹配。
 > }
 > fn not_diverging() -> ! {
 >     // 此类型无值。
 >     // 然而，整个函数并不被视为发散。
 >     make_empty();
 >     // ERROR：主体的类型是 `()`，但期望类型是 `!`。
 > }
 > ```

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 发散可以传播到外围块。请参见 [expr.block.diverging](expressions/block-expr.md#r-expr.block.diverging)。

</div>

<div class="rule" id="r-divergence.fallback"><a class="rule-link" href="#r-divergence.fallback" title="divergence.fallback"><span>[divergence<wbr>.fallback]</span></a>
</div>

## 回退

如果待推断类型只与发散表达式统一，那么该类型将被推断为 [`!`](types/never.md#r-type.never)。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust,compile_fail,E0277
 > fn foo() -> i32 { 22 }
 > match foo() {
 >     // ERROR：trait 约束 `!: Default` 未被满足。
 >     4 => Default::default(),
 >     _ => return,
 > };
 > ```

</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2024</span> Edition differences</p>
 > 
 > 在 2024 edition 之前，该类型会改为被推断为 `()`。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 重要的是，类型统一可以_结构性地_发生，因此回退得到的 `!` 可能是更大类型的一部分。以下代码可以编译：
 > 
 > ```rust
 > fn foo() -> i32 { 22 }
 > // 这具有 `Option<!>` 类型，而不是 `!`
 > match foo() {
 >     4 => Default::default(),
 >     _ => Some(return),
 > };
 > ```

</div>

<!-- TODO: This last point should likely should be moved to a more general "type inference" section discussing generalization + unification. -->
