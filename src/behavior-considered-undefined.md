<div class="rule" id="r-undefined"><a class="rule-link" href="#r-undefined" title="undefined"><span>[undefined]</span></a>
</div>

# 被视为未定义的行为

<div class="rule" id="r-undefined.intro"><a class="rule-link" href="#r-undefined.intro" title="undefined.intro"><span>[undefined<wbr>.intro]</span></a>
</div>

如果 Rust 代码表现出以下列表中的任何行为，则它是不正确的。这包括 `unsafe` 块和 `unsafe` 函数内的代码。`unsafe` 只意味着避免未定义行为由程序员负责；它并不会改变 Rust 程序绝不能导致未定义行为这一事实。

<div class="rule" id="r-undefined.soundness"><a class="rule-link" href="#r-undefined.soundness" title="undefined.soundness"><span>[undefined<wbr>.soundness]</span></a>
</div>

编写 `unsafe` 代码时，程序员有责任确保任何与该 `unsafe` 代码交互的安全代码都不能触发这些行为。对于任何安全客户端都满足此属性的 `unsafe` 代码称为 _健全的_；如果 `unsafe` 代码能被安全代码误用而表现出未定义行为，则它是 _不健全的_。

<div class="alert alert-warning">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
 > 
 > 以下列表并非详尽无遗；它可能增加或减少。对于 unsafe 代码中哪些允许、哪些不允许，Rust 语义没有形式化模型，因此可能还有更多被视为 unsafe 的行为。我们也保留将来把该列表中的某些行为定义为有定义的权利。换言之，该列表并不是说在所有未来 Rust 版本中任何内容都一定会一直是未定义的（但我们将来可能会对某些列表项作出这样的承诺）。
 > 
 > 编写 unsafe 代码之前，请阅读 [Rustonomicon](../nomicon/index.html)。

</div>

<div class="rule" id="r-undefined.race"><a class="rule-link" href="#r-undefined.race" title="undefined.race"><span>[undefined<wbr>.race]</span></a>
</div>

- 数据竞争。

<div class="rule" id="r-undefined.pointer-access"><a class="rule-link" href="#r-undefined.pointer-access" title="undefined.pointer-access"><span>[undefined<wbr>.pointer-access]</span></a>
</div>

- 访问（从中加载或向其中存储）一个[悬垂](#dangling-pointers)或[基于未对齐指针](#places-based-on-misaligned-pointers)的位置。

<div class="rule" id="r-undefined.place-projection"><a class="rule-link" href="#r-undefined.place-projection" title="undefined.place-projection"><span>[undefined<wbr>.place-projection]</span></a>
</div>

- 执行违反[界内指针算术](../std/primitive.pointer.html#method.offset)要求的偏移位置投影。偏移位置投影是[字段表达式](expressions/field-expr.md)、[元组索引表达式](expressions/tuple-expr.md#tuple-indexing-expressions)或[数组/切片索引表达式](expressions/array-expr.md#array-and-slice-indexing-expressions)。

<div class="rule" id="r-undefined.alias"><a class="rule-link" href="#r-undefined.alias" title="undefined.alias"><span>[undefined<wbr>.alias]</span></a>
</div>

- 破坏指针别名规则。确切的别名规则尚未确定，但以下是一般原则的概要：
  
  `&T` 必须指向在它存活期间不会被修改的内存（[`UnsafeCell<U>`](../core/cell/struct.UnsafeCell.html) 内部的数据除外），而 `&mut T` 必须指向这样的内存：在它存活期间，不会被任何并非派生自该引用的指针读取或写入，并且没有其他引用指向它。就这些规则而言，`Box<T>` 的处理类似于 `&'static mut T`。确切的存活时长未指定，但存在一些界限：
  
  - 对于引用，存活时长以借用检查器分配的语法生命周期为上界；它不能比该生命周期存活得_更久\_。
  - 每当引用或 box 被解引用或重新借用时，它都被认为是存活的。
  - 每当引用或 box 被传递给函数或从函数返回时，它都被认为是存活的。
  - 当引用（但不是 `Box`！）被传递给函数时，它至少在该函数调用期间是存活的；同样，如果该 `&T` 包含 [`UnsafeCell<U>`](../core/cell/struct.UnsafeCell.html) 则除外。
  当这些类型的值通过复合类型的（嵌套）字段传递时，以上内容也适用，但通过指针间接层传递则不适用。

<div class="rule" id="r-undefined.immutable"><a class="rule-link" href="#r-undefined.immutable" title="undefined.immutable"><span>[undefined<wbr>.immutable]</span></a>
</div>

- 修改不可变字节。通过 [const 提升](destructors.md#constant-promotion)表达式可到达的所有字节都是不可变的，在 `static` 和 `const` 初始化器中通过借用可到达且已被[生命周期延长](destructors.md#temporary-lifetime-extension)到 `'static` 的字节也是如此。不可变绑定或不可变 `static` 所拥有的字节是不可变的，除非这些字节是 [`UnsafeCell<U>`](../core/cell/struct.UnsafeCell.html) 的一部分。
  
  此外，共享引用所[指向](#pointed-to-bytes)的字节也是不可变的，包括通过其他引用（共享引用和可变引用）以及 `Box` 传递可达的字节；这种传递性包括存储在复合类型字段中的那些引用。
  
  修改是指任何超过 0 字节、并与任何相关字节重叠的写入（即使该写入不会改变内存内容）。

<div class="rule" id="r-undefined.intrinsic"><a class="rule-link" href="#r-undefined.intrinsic" title="undefined.intrinsic"><span>[undefined<wbr>.intrinsic]</span></a>
</div>

- 通过编译器内部函数调用未定义行为。

<div class="rule" id="r-undefined.target-feature"><a class="rule-link" href="#r-undefined.target-feature" title="undefined.target-feature"><span>[undefined<wbr>.target-feature]</span></a>
</div>

- 执行使用当前平台不支持的平台特性编译的代码（见 [`target_feature`](attributes/codegen.md#the-target_feature-attribute)），_除非_ 平台明确将此记录为安全。

<div class="rule" id="r-undefined.call"><a class="rule-link" href="#r-undefined.call" title="undefined.call"><span>[undefined<wbr>.call]</span></a>
</div>

- 使用错误的[调用 ABI](items/external-blocks.md#abi) 调用函数，或越过不允许展开的栈帧进行展开（例如，调用一个被导入或 transmute 为 `"C"` 函数或函数指针的 `"C-unwind"` 函数）。

<div class="rule" id="r-undefined.invalid"><a class="rule-link" href="#r-undefined.invalid" title="undefined.invalid"><span>[undefined<wbr>.invalid]</span></a>
</div>

- 产生[无效值](#invalid-values)。“产生”一个值发生在任何时候：将值赋给某个位置或从某个位置读取、传递给函数/原语操作，或从函数/原语操作返回。

<div class="rule" id="r-undefined.asm"><a class="rule-link" href="#r-undefined.asm" title="undefined.asm"><span>[undefined<wbr>.asm]</span></a>
</div>

- 错误使用内联汇编。有关更多细节，请参阅编写使用内联汇编的代码时需要遵守的[规则](inline-assembly.md#rules-for-inline-assembly)。

<div class="rule" id="r-undefined.runtime"><a class="rule-link" href="#r-undefined.runtime" title="undefined.runtime"><span>[undefined<wbr>.runtime]</span></a>
</div>

- 违反 Rust 运行时的假设。Rust 运行时的大多数假设目前没有显式文档化。
  - 关于专门与展开相关的假设，见 [panic 文档](panic.md#unwinding-across-ffi-boundaries)。
  - 运行时假设 Rust 栈帧在未执行该栈帧所拥有局部变量的析构器之前不会被释放。像 `longjmp` 这样的 C 函数可能违反这一假设。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 未定义行为会影响整个程序。例如，调用一个表现出 C 未定义行为的 C 函数，意味着你的整个程序包含未定义行为，而这也可能影响 Rust 代码。反之亦然，Rust 中的未定义行为也可能对通过任何 FFI 调用执行的其他语言代码产生不利影响。

</div>

<div class="rule" id="r-undefined.pointed-to"><a class="rule-link" href="#r-undefined.pointed-to" title="undefined.pointed-to"><span>[undefined<wbr>.pointed-to]</span></a>
</div>

## 所指向的字节

指针或引用“指向”的字节范围由指针值和被指向类型的大小（使用 `size_of_val`）决定。

<div class="rule" id="r-undefined.misaligned"><a class="rule-link" href="#r-undefined.misaligned" title="undefined.misaligned"><span>[undefined<wbr>.misaligned]</span></a>
</div>

## 基于未对齐指针的位置

<div class="rule" id="r-undefined.misaligned.ptr"><a class="rule-link" href="#r-undefined.misaligned.ptr" title="undefined.misaligned.ptr"><span>[undefined<wbr>.misaligned<wbr>.ptr]</span></a>
</div>

如果在位置计算期间最后一个 `*` 投影是在一个未按其类型对齐的指针上执行的，则称该位置“基于未对齐指针”。（如果位置表达式中没有 `*` 投影，那么这是在访问局部变量或 `static` 的字段，rustc 会保证正确对齐。如果有多个 `*` 投影，那么每个投影都会导致从内存中加载待解引用指针本身，而这些加载都受到对齐约束。注意，由于自动解引用，表层 Rust 语法中可以省略某些 `*` 投影；这里考虑的是完全展开后的位置表达式。）

例如，如果 `ptr` 的类型是 `*const S`，而 `S` 的对齐为 8，那么 `ptr` 必须是 8 字节对齐的，否则 `(*ptr).f` 就“基于未对齐指针”。即使字段 `f` 的类型是 `u8`（即对齐为 1 的类型），这一点也成立。换言之，对齐要求来自被解引用指针的类型，而_不是_正在访问的字段类型。

<div class="rule" id="r-undefined.misaligned.load-store"><a class="rule-link" href="#r-undefined.misaligned.load-store" title="undefined.misaligned.load-store"><span>[undefined<wbr>.misaligned<wbr>.load-store]</span></a>
</div>

注意，基于未对齐指针的位置只有在从中加载或向其中存储时才会导致未定义行为。

<div class="rule" id="r-undefined.misaligned.raw"><a class="rule-link" href="#r-undefined.misaligned.raw" title="undefined.misaligned.raw"><span>[undefined<wbr>.misaligned<wbr>.raw]</span></a>
</div>

在这样的位置上使用 `&raw const`/`&raw mut` 是允许的。

<div class="rule" id="r-undefined.misaligned.reference"><a class="rule-link" href="#r-undefined.misaligned.reference" title="undefined.misaligned.reference"><span>[undefined<wbr>.misaligned<wbr>.reference]</span></a>
</div>

在某个位置上使用 `&`/`&mut` 要求满足字段类型的对齐（否则程序会“产生无效值”），这通常比基于已对齐指针的要求更宽松。

<div class="rule" id="r-undefined.misaligned.packed"><a class="rule-link" href="#r-undefined.misaligned.packed" title="undefined.misaligned.packed"><span>[undefined<wbr>.misaligned<wbr>.packed]</span></a>
</div>

在字段类型可能比包含它的类型具有更严格对齐的情况下，即 `repr(packed)`，获取引用会导致编译器错误。这意味着，基于已对齐指针始终足以确保新引用是对齐的，但并不总是必要条件。

<div class="rule" id="r-undefined.dangling"><a class="rule-link" href="#r-undefined.dangling" title="undefined.dangling"><span>[undefined<wbr>.dangling]</span></a>
</div>

## 悬垂指针

<div class="rule" id="r-undefined.dangling.def"><a class="rule-link" href="#r-undefined.dangling.def" title="undefined.dangling.def"><span>[undefined<wbr>.dangling<wbr>.def]</span></a>
</div>

如果一个引用/指针[指向](#pointed-to-bytes)的字节并非全部属于同一个活动分配（因此尤其必须全部属于_某个_分配），则该引用/指针是“悬垂”的。

<div class="rule" id="r-undefined.dangling.zero-size"><a class="rule-link" href="#r-undefined.dangling.zero-size" title="undefined.dangling.zero-size"><span>[undefined<wbr>.dangling<wbr>.zero-size]</span></a>
</div>

如果[大小为 0](glossary.md#r-glossary.zst)，那么该指针平凡地绝不会是“悬垂”的（即使它是空指针）。

<div class="rule" id="r-undefined.dangling.dynamic-size"><a class="rule-link" href="#r-undefined.dangling.dynamic-size" title="undefined.dangling.dynamic-size"><span>[undefined<wbr>.dangling<wbr>.dynamic-size]</span></a>
</div>

注意，动态大小类型（如切片和字符串）指向其整个范围，因此必须确保长度元数据绝不能过大。

<div class="rule" id="r-undefined.dangling.alloc-limit"><a class="rule-link" href="#r-undefined.dangling.alloc-limit" title="undefined.dangling.alloc-limit"><span>[undefined<wbr>.dangling<wbr>.alloc-limit]</span></a>
</div>

尤其是，Rust 值的动态大小（由 `size_of_val` 确定）绝不能超过 `isize::MAX`，因为单个分配不可能大于 `isize::MAX`。

<div class="rule" id="r-undefined.validity"><a class="rule-link" href="#r-undefined.validity" title="undefined.validity"><span>[undefined<wbr>.validity]</span></a>
</div>

## 无效值

<div class="rule" id="r-undefined.validity.def"><a class="rule-link" href="#r-undefined.validity.def" title="undefined.validity.def"><span>[undefined<wbr>.validity<wbr>.def]</span></a>
</div>

Rust 编译器假定程序执行期间产生的所有值都是“有效”的，因此产生无效值会立即导致 UB。

值是否有效取决于其类型：

<div class="rule" id="r-undefined.validity.bool"><a class="rule-link" href="#r-undefined.validity.bool" title="undefined.validity.bool"><span>[undefined<wbr>.validity<wbr>.bool]</span></a>
</div>

- [`bool`](types/boolean.md) 值必须是 `false`（`0`）或 `true`（`1`）。

<div class="rule" id="r-undefined.validity.fn-pointer"><a class="rule-link" href="#r-undefined.validity.fn-pointer" title="undefined.validity.fn-pointer"><span>[undefined<wbr>.validity<wbr>.fn-pointer]</span></a>
</div>

- `fn` 指针值必须非空。

<div class="rule" id="r-undefined.validity.char"><a class="rule-link" href="#r-undefined.validity.char" title="undefined.validity.char"><span>[undefined<wbr>.validity<wbr>.char]</span></a>
</div>

- `char` 值不得是代理项（即不得位于 `0xD800..=0xDFFF` 范围内），并且必须等于或小于 `char::MAX`。

<div class="rule" id="r-undefined.validity.never"><a class="rule-link" href="#r-undefined.validity.never" title="undefined.validity.never"><span>[undefined<wbr>.validity<wbr>.never]</span></a>
</div>

- `!` 值绝不能存在。

<div class="rule" id="r-undefined.validity.scalar"><a class="rule-link" href="#r-undefined.validity.scalar" title="undefined.validity.scalar"><span>[undefined<wbr>.validity<wbr>.scalar]</span></a>
</div>

- 整数（`i*`/`u*`）、浮点值（`f*`）或裸指针必须已初始化，即不得从未初始化内存获得。

<div class="rule" id="r-undefined.validity.str"><a class="rule-link" href="#r-undefined.validity.str" title="undefined.validity.str"><span>[undefined<wbr>.validity<wbr>.str]</span></a>
</div>

- `str` 值按 `[u8]` 处理，即它必须已初始化。

<div class="rule" id="r-undefined.validity.enum"><a class="rule-link" href="#r-undefined.validity.enum" title="undefined.validity.enum"><span>[undefined<wbr>.validity<wbr>.enum]</span></a>
</div>

- `enum` 必须具有有效判别值，并且由该判别值指示的变体的所有字段都必须在其各自类型下有效。

<div class="rule" id="r-undefined.validity.struct"><a class="rule-link" href="#r-undefined.validity.struct" title="undefined.validity.struct"><span>[undefined<wbr>.validity<wbr>.struct]</span></a>
</div>

- `struct`、元组和数组要求所有字段/元素都在其各自类型下有效。

<div class="rule" id="r-undefined.validity.union"><a class="rule-link" href="#r-undefined.validity.union" title="undefined.validity.union"><span>[undefined<wbr>.validity<wbr>.union]</span></a>
</div>

- 对于 `union`，确切的有效性要求尚未决定。显然，所有完全可以在安全代码中创建的值都是有效的。如果该 union 有一个[零大小](glossary.md#r-glossary.zst)字段，那么每个可能的值都是有效的。更多细节[仍在讨论中](https://github.com/rust-lang/unsafe-code-guidelines/issues/438)。

<div class="rule" id="r-undefined.validity.reference-box"><a class="rule-link" href="#r-undefined.validity.reference-box" title="undefined.validity.reference-box"><span>[undefined<wbr>.validity<wbr>.reference-box]</span></a>
</div>

- 引用或 [`Box<T>`](../alloc/boxed/struct.Box.html) 必须对齐且非空，不能[悬垂](#dangling-pointers)，并且必须指向有效值（对于动态大小类型，使用由元数据确定的被指向对象的实际动态类型）。注意，最后一点（关于指向有效值）仍存在一些争议。

<div class="rule" id="r-undefined.validity.wide"><a class="rule-link" href="#r-undefined.validity.wide" title="undefined.validity.wide"><span>[undefined<wbr>.validity<wbr>.wide]</span></a>
</div>

- 宽引用、[`Box<T>`](../alloc/boxed/struct.Box.html) 或裸指针的元数据必须与未定大小尾部的类型匹配：
  - `dyn Trait` 元数据必须是指向编译器为 `Trait` 生成的 vtable 的指针。（对于裸指针，这一要求仍存在一些争议。）
  - 切片（`[T]`）元数据必须是有效的 `usize`。此外，对于宽引用和 [`Box<T>`](../alloc/boxed/struct.Box.html)，如果切片元数据使所指向值的总大小大于 `isize::MAX`，则该切片元数据无效。

<div class="rule" id="r-undefined.validity.valid-range"><a class="rule-link" href="#r-undefined.validity.valid-range" title="undefined.validity.valid-range"><span>[undefined<wbr>.validity<wbr>.valid-range]</span></a>
</div>

- 如果某个类型具有自定义的有效值范围，那么有效值必须在该范围内。在标准库中，这会影响 [`NonNull<T>`](../core/ptr/non_null/struct.NonNull.html) 和 [`NonZero<T>`](../core/num/nonzero/struct.NonZero.html)。
  
  <div class="alert alert-note">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
   > 
   > `rustc` 通过不稳定的 `rustc_layout_scalar_valid_range_*` 属性实现这一点。
  
  </div>
  

<div class="rule" id="r-undefined.validity.const-provenance"><a class="rule-link" href="#r-undefined.validity.const-provenance" title="undefined.validity.const-provenance"><span>[undefined<wbr>.validity<wbr>.const-provenance]</span></a>
</div>

- **在 [const 上下文](const_eval.md#r-const-eval.const-context)中**：除上文所述内容外，const 求值期间还适用更多与 provenance（来源）相关的要求。任何保存纯整数数据的值（`i*`/`u*`/`f*` 类型以及 `bool` 和 `char`、enum 判别值、切片元数据）都不得携带任何 provenance（来源）。任何保存指针数据的值（引用、裸指针、函数指针和 `dyn Trait` 元数据）必须要么不携带 provenance（来源），要么所有字节都必须是同一个原始指针值的片段，并且顺序正确。
  
  这意味着，如果指针（引用、裸指针或函数指针）具有 provenance（来源），那么将其 transmute 或以其他方式重新解释为非指针类型（如整数）是未定义行为。
  
  <div class="alert alert-example">
  
   > 
   > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
   > 
   > 以下所有情况都是 UB：
   > 
   > ```rust,compile_fail
   > # use core::mem::MaybeUninit;
   > # use core::ptr;
   > // We cannot reinterpret a pointer with provenance as an integer,
   > // as then the bytes of the integer will have provenance.
   > const _: usize = {
   >     let ptr = &0;
   >     unsafe { (&raw const ptr as *const usize).read() }
   > };
   > 
   > // We cannot rearrange the bytes of a pointer with provenance and
   > // then interpret them as a reference, as then a value holding
   > // pointer data will have pointer fragments in the wrong order.
   > const _: &i32 = {
   >     let mut ptr = &0;
   >     let ptr_bytes = &raw mut ptr as *mut MaybeUninit::<u8>;
   >     unsafe { ptr::swap(ptr_bytes.add(1), ptr_bytes.add(2)) };
   >     ptr
   > };
   > ```
  
  </div>
  

<div class="rule" id="r-undefined.validity.undef"><a class="rule-link" href="#r-undefined.validity.undef" title="undefined.validity.undef"><span>[undefined<wbr>.validity<wbr>.undef]</span></a>
</div>

**注意：** 对于任何有效值集合受限的类型，未初始化内存也隐式地无效。换言之，允许读取未初始化内存的唯一情况是在 `union` 内部以及在“填充”（类型字段之间的间隙）中。