r[undefined]
# 被视为未定义的行为

r[undefined.intro]
如果 Rust 代码表现出以下列表中的任何行为，则它是不正确的。这包括 `unsafe` 块和 `unsafe` 函数内的代码。`unsafe` 只意味着避免未定义行为由程序员负责；它并不会改变 Rust 程序绝不能导致未定义行为这一事实。

r[undefined.soundness]
编写 `unsafe` 代码时，程序员有责任确保任何与该 `unsafe` 代码交互的安全代码都不能触发这些行为。对于任何安全客户端都满足此属性的 `unsafe` 代码称为 *健全的*；如果 `unsafe` 代码能被安全代码误用而表现出未定义行为，则它是 *不健全的*。

> [!WARNING]
> 以下列表并非详尽无遗；它可能增加或减少。对于 unsafe 代码中哪些允许、哪些不允许，Rust 语义没有形式化模型，因此可能还有更多被视为 unsafe 的行为。我们也保留将来把该列表中的某些行为定义为有定义的权利。换言之，该列表并不是说在所有未来 Rust 版本中任何内容都 *一定* 会一直是未定义的（但我们将来可能会对某些列表项作出这样的承诺）。
>
> 编写 unsafe 代码之前，请阅读 [Rustonomicon](../nomicon/index.html)。

r[undefined.race]
* 数据竞争。

r[undefined.pointer-access]
* 访问（从中加载或向其中存储）一个[悬垂](#dangling-pointers)或[基于未对齐指针](#places-based-on-misaligned-pointers)的位置。

r[undefined.place-projection]
* 执行违反[界内指针算术](pointer#method.offset)要求的偏移式位置投影。偏移式位置投影是[字段表达式](expressions/field-expr.md)、[元组索引表达式](expressions/tuple-expr.md#tuple-indexing-expressions)或[数组/切片索引表达式](expressions/array-expr.md#array-and-slice-indexing-expressions)。

r[undefined.alias]
* 破坏指针别名规则。确切的别名规则尚未确定，但以下是一般原则的概要：

  `&T` 必须指向在它存活期间不会被修改的内存（[`UnsafeCell<U>`](std::cell::UnsafeCell) 内部的数据除外），而 `&mut T` 必须指向这样的内存：在它存活期间，不会被任何并非派生自该引用的指针读取或写入，并且没有其他引用指向它。就这些规则而言，`Box<T>` 的处理类似于 `&'static mut T`。确切的存活时长未指定，但存在一些界限：

  * 对于引用，存活时长以借用检查器分配的语法生命周期为上界；它不能比该生命周期存活得 *更久*。
  * 每当引用或 box 被解引用或重新借用时，它都被认为是存活的。
  * 每当引用或 box 被传递给函数或从函数返回时，它都被认为是存活的。
  * 当引用（但不是 `Box`！）被传递给函数时，它至少在该函数调用期间是存活的；同样，如果该 `&T` 包含 [`UnsafeCell<U>`](std::cell::UnsafeCell) 则除外。

  当这些类型的值通过复合类型的（嵌套）字段传递时，以上内容也适用，但通过指针间接层传递则不适用。

r[undefined.immutable]
* 修改不可变字节。通过 [const 提升](destructors.md#constant-promotion)表达式可到达的所有字节都是不可变的，在 `static` 和 `const` 初始化器中通过借用可到达且已被[生命周期延长](destructors.md#temporary-lifetime-extension)到 `'static` 的字节也是如此。不可变绑定或不可变 `static` 所拥有的字节是不可变的，除非这些字节是 [`UnsafeCell<U>`](std::cell::UnsafeCell) 的一部分。

  此外，共享引用所[指向](#pointed-to-bytes)的字节也是不可变的，包括通过其他引用（共享引用和可变引用）以及 `Box` 传递可达的字节；这种传递性包括存储在复合类型字段中的那些引用。

  修改是指任何超过 0 字节、并与任何相关字节重叠的写入（即使该写入不会改变内存内容）。

r[undefined.intrinsic]
* 通过编译器内部函数调用未定义行为。

r[undefined.target-feature]
* 执行使用当前平台不支持的平台特性编译的代码（见 [`target_feature`](attributes/codegen.md#the-target_feature-attribute)），*除非* 平台明确将此记录为安全。

r[undefined.call]
* 使用错误的[调用 ABI](items/external-blocks.md#abi) 调用函数，或越过不允许展开的栈帧进行展开（例如，调用一个被导入或 transmute 为 `"C"` 函数或函数指针的 `"C-unwind"` 函数）。

r[undefined.invalid]
* 产生[无效值](#invalid-values)。“产生”一个值发生在任何时候：将值赋给某个位置或从某个位置读取、传递给函数/原语操作，或从函数/原语操作返回。

r[undefined.asm]
* 错误使用内联汇编。有关更多细节，请参阅编写使用内联汇编的代码时需要遵守的[规则](inline-assembly.md#rules-for-inline-assembly)。

r[undefined.runtime]
* 违反 Rust 运行时的假设。Rust 运行时的大多数假设目前没有显式文档化。
  * 关于专门与展开相关的假设，见 [panic 文档](panic.md#unwinding-across-ffi-boundaries)。
  * 运行时假设 Rust 栈帧在未执行该栈帧所拥有局部变量的析构器之前不会被释放。像 `longjmp` 这样的 C 函数可能违反这一假设。

> [!NOTE]
> 未定义行为会影响整个程序。例如，调用一个表现出 C 未定义行为的 C 函数，意味着你的整个程序包含未定义行为，而这也可能影响 Rust 代码。反之亦然，Rust 中的未定义行为也可能对通过任何 FFI 调用执行的其他语言代码产生不利影响。

r[undefined.pointed-to]
## 所指向的字节

指针或引用“指向”的字节范围由指针值和被指向类型的大小（使用 `size_of_val`）决定。

r[undefined.misaligned]
## 基于未对齐指针的位置
[based on a misaligned pointer]: #places-based-on-misaligned-pointers

r[undefined.misaligned.ptr]
如果在位置计算期间最后一个 `*` 投影是在一个未按其类型对齐的指针上执行的，则称该位置“基于未对齐指针”。（如果位置表达式中没有 `*` 投影，那么这是在访问局部变量或 `static` 的字段，rustc 会保证正确对齐。如果有多个 `*` 投影，那么每个投影都会导致从内存中加载待解引用指针本身，而这些加载都受到对齐约束。注意，由于自动解引用，表层 Rust 语法中可以省略某些 `*` 投影；这里考虑的是完全展开后的位置表达式。）

例如，如果 `ptr` 的类型是 `*const S`，而 `S` 的对齐为 8，那么 `ptr` 必须是 8 字节对齐的，否则 `(*ptr).f` 就“基于未对齐指针”。即使字段 `f` 的类型是 `u8`（即对齐为 1 的类型），这一点也成立。换言之，对齐要求来自被解引用指针的类型，而 *不是* 正在访问的字段类型。

r[undefined.misaligned.load-store]
注意，基于未对齐指针的位置只有在从中加载或向其中存储时才会导致未定义行为。

r[undefined.misaligned.raw]
在这样的位置上使用 `&raw const`/`&raw mut` 是允许的。

r[undefined.misaligned.reference]
在某个位置上使用 `&`/`&mut` 要求满足字段类型的对齐（否则程序会“产生无效值”），这通常比基于已对齐指针的要求更宽松。

r[undefined.misaligned.packed]
在字段类型可能比包含它的类型具有更严格对齐的情况下，即 `repr(packed)`，获取引用会导致编译器错误。这意味着，基于已对齐指针始终足以确保新引用是对齐的，但并不总是必要条件。

r[undefined.dangling]
## 悬垂指针
[dangling]: #dangling-pointers

r[undefined.dangling.def]
如果一个引用/指针[指向](#pointed-to-bytes)的字节并非全部属于同一个活动分配（因此尤其必须全部属于 *某个* 分配），则该引用/指针是“悬垂”的。

r[undefined.dangling.zero-size]
如果[大小为 0](glossary.zst)，那么该指针显然绝不会是“悬垂”的（即使它是空指针）。

r[undefined.dangling.dynamic-size]
注意，动态大小类型（如切片和字符串）指向其整个范围，因此必须确保长度元数据绝不能过大。

r[undefined.dangling.alloc-limit]
尤其是，Rust 值的动态大小（由 `size_of_val` 确定）绝不能超过 `isize::MAX`，因为单个分配不可能大于 `isize::MAX`。

r[undefined.validity]
## 无效值
[invalid-values]: #invalid-values

r[undefined.validity.def]
Rust 编译器假定程序执行期间产生的所有值都是“有效的”，因此产生无效值会立即导致 UB。

值是否有效取决于其类型：

r[undefined.validity.bool]
* [`bool`](types/boolean.md) 值必须是 `false`（`0`）或 `true`（`1`）。

r[undefined.validity.fn-pointer]
* `fn` 指针值必须非空。

r[undefined.validity.char]
* `char` 值不得是代理项（即不得位于 `0xD800..=0xDFFF` 范围内），并且必须等于或小于 `char::MAX`。

r[undefined.validity.never]
* `!` 值绝不能存在。

r[undefined.validity.scalar]
* 整数（`i*`/`u*`）、浮点值（`f*`）或裸指针必须已初始化，即不得从未初始化内存获得。

r[undefined.validity.str]
* `str` 值按 `[u8]` 处理，即它必须已初始化。

r[undefined.validity.enum]
* `enum` 必须具有有效判别值，并且由该判别值指示的变体的所有字段都必须在其各自类型下有效。

r[undefined.validity.struct]
* `struct`、元组和数组要求所有字段/元素都在其各自类型下有效。

r[undefined.validity.union]
* 对于 `union`，确切的有效性要求尚未决定。显然，所有完全可以在安全代码中创建的值都是有效的。如果该 union 有一个[零大小](glossary.zst)字段，那么每个可能的值都是有效的。更多细节[仍在讨论中](https://github.com/rust-lang/unsafe-code-guidelines/issues/438)。

r[undefined.validity.reference-box]
* 引用或 [`Box<T>`] 必须对齐且非空，不能[悬垂](#dangling-pointers)，并且必须指向有效值（对于动态大小类型，使用由元数据确定的被指向对象的实际动态类型）。注意，最后一点（关于指向有效值）仍存在一些争议。

r[undefined.validity.wide]
* 宽引用、[`Box<T>`] 或裸指针的元数据必须与未定大小尾部的类型匹配：
  * `dyn Trait` 元数据必须是指向编译器为 `Trait` 生成的 vtable 的指针。（对于裸指针，这一要求仍存在一些争议。）
  * 切片（`[T]`）元数据必须是有效的 `usize`。此外，对于宽引用和 [`Box<T>`]，如果切片元数据使所指向值的总大小大于 `isize::MAX`，则该切片元数据无效。

r[undefined.validity.valid-range]
* 如果某个类型具有自定义的有效值范围，那么有效值必须在该范围内。在标准库中，这会影响 [`NonNull<T>`](core::ptr::NonNull) 和 [`NonZero<T>`](core::num::NonZero)。

  > [!NOTE]
  > `rustc` 通过不稳定的 `rustc_layout_scalar_valid_range_*` 属性实现这一点。

r[undefined.validity.const-provenance]
* **在 [const 上下文](const-eval.const-context)中**：除上文所述内容外，const 求值期间还适用更多与 provenance（来源）相关的要求。任何保存纯整数数据的值（`i*`/`u*`/`f*` 类型以及 `bool` 和 `char`、enum 判别值、切片元数据）都不得携带任何 provenance（来源）。任何保存指针数据的值（引用、裸指针、函数指针和 `dyn Trait` 元数据）必须要么不携带 provenance（来源），要么所有字节都必须是同一个原始指针值的片段，并且顺序正确。

  这意味着，如果指针（引用、裸指针或函数指针）具有 provenance（来源），那么将其 transmute 或以其他方式重新解释为非指针类型（如整数）是未定义行为。

  > [!EXAMPLE]
  > 以下所有情况都是 UB：
  >
  > ```rust,compile_fail
  > # use core::mem::MaybeUninit;
  > # use core::ptr;
  > // 不能把带有 provenance（来源）的指针重新解释为整数，
  > // 因为这样整数的字节就会带有 provenance（来源）。
  > const _: usize = {
  >     let ptr = &0;
  >     unsafe { (&raw const ptr as *const usize).read() }
  > };
  >
  > // 不能重新排列带有 provenance（来源）的指针的字节，
  > // 然后再把它们解释为引用，因为这样保存
  > // 指针数据的值会以错误顺序包含指针片段。
  > const _: &i32 = {
  >     let mut ptr = &0;
  >     let ptr_bytes = &raw mut ptr as *mut MaybeUninit::<u8>;
  >     unsafe { ptr::swap(ptr_bytes.add(1), ptr_bytes.add(2)) };
  >     ptr
  > };
  > ```

r[undefined.validity.undef]
**注意：** 对于任何有效值集合受限的类型，未初始化内存也隐式地无效。换言之，允许读取未初始化内存的唯一情况是在 `union` 内部以及在“填充”（类型字段之间的间隙）中。

[`bool`]: types/boolean.md
[`const`]: items/constant-items.md
[abi]: items/external-blocks.md#abi
[const contexts]: const-eval.const-context
[`target_feature`]: attributes/codegen.md#the-target_feature-attribute
[`UnsafeCell<U>`]: std::cell::UnsafeCell
[Rustonomicon]: ../nomicon/index.html
[`NonNull<T>`]: core::ptr::NonNull
[`NonZero<T>`]: core::num::NonZero
[place expression context]: expressions.md#place-expressions-and-value-expressions
[rules]: inline-assembly.md#rules-for-inline-assembly
[points to]: #pointed-to-bytes
[pointed to]: #pointed-to-bytes
[project-field]: expressions/field-expr.md
[project-tuple]: expressions/tuple-expr.md#tuple-indexing-expressions
[project-slice]: expressions/array-expr.md#array-and-slice-indexing-expressions
[unwinding-ffi]: panic.md#unwinding-across-ffi-boundaries
[const-promoted]: destructors.md#constant-promotion
[lifetime-extended]: destructors.md#temporary-lifetime-extension
[zero-sized]: glossary.zst
