<div class="rule" id="r-dynamic-sized"><a class="rule-link" href="#r-dynamic-sized" title="dynamic-sized"><span>[dynamic-sized]</span></a>
</div>

# 动态大小类型

<div class="rule" id="r-dynamic-sized.intro"><a class="rule-link" href="#r-dynamic-sized.intro" title="dynamic-sized.intro"><span>[dynamic-sized<wbr>.intro]</span></a>
</div>

大多数类型都有在编译时已知的固定大小，并实现 trait [`Sized`](special-types-and-traits.md#sized)。大小只有在运行时才知道的类型称为_动态大小类型\_（_DST_），非正式地也称为 unsized 类型。[切片](types/slice.md)、[trait 对象](types/trait-object.md) 和 [str](types/str.md) 是 <abbr title="dynamically sized types">DSTs</abbr> 的例子。

<div class="rule" id="r-dynamic-sized.restriction"><a class="rule-link" href="#r-dynamic-sized.restriction" title="dynamic-sized.restriction"><span>[dynamic-sized<wbr>.restriction]</span></a>
</div>

这类类型只能在某些情况下使用：

<div class="rule" id="r-dynamic-sized.pointer-types"><a class="rule-link" href="#r-dynamic-sized.pointer-types" title="dynamic-sized.pointer-types"><span>[dynamic-sized<wbr>.pointer-types]</span></a>
</div>

- 指向 <abbr title="dynamically sized types">DSTs</abbr> 的[指针类型](types/pointer.md) 是有大小的，但其大小是指向有大小类型的指针的两倍
  - 指向切片和 `str` 的指针还会存储元素数量。
  - 指向 trait 对象的指针还会存储一个指向 vtable 的指针。

<div class="rule" id="r-dynamic-sized.question-sized"><a class="rule-link" href="#r-dynamic-sized.question-sized" title="dynamic-sized.question-sized"><span>[dynamic-sized<wbr>.question-sized]</span></a>
</div>

- <abbr title="dynamically sized types">DSTs</abbr> 可以作为类型实参提供给具有特殊 `?Sized` 边界的泛型类型形参。当对应的关联类型声明具有 `?Sized` 边界时，它们也可以用于关联类型定义。默认情况下，任何类型形参或关联类型都有 `Sized` 边界，除非使用 `?Sized` 将其放宽。

<div class="rule" id="r-dynamic-sized.trait-impl"><a class="rule-link" href="#r-dynamic-sized.trait-impl" title="dynamic-sized.trait-impl"><span>[dynamic-sized<wbr>.trait-impl]</span></a>
</div>

- 可以为 <abbr title="dynamically sized
  types">DSTs</abbr> 实现 trait。与泛型类型形参不同，在 trait 定义中 `Self: ?Sized` 是默认情况。

<div class="rule" id="r-dynamic-sized.struct-field"><a class="rule-link" href="#r-dynamic-sized.struct-field" title="dynamic-sized.struct-field"><span>[dynamic-sized<wbr>.struct-field]</span></a>
</div>

- 结构体可以包含一个 <abbr title="dynamically sized type">DST</abbr> 作为最后一个字段；这会使该结构体本身成为一个 <abbr title="dynamically sized type">DST</abbr>。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > [变量](variables.md)、函数形参、[const](items/constant-items.md) 项和 [static](items/static-items.md) 项必须是 `Sized`。

</div>
