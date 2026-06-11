<div class="rule" id="r-memory"><a class="rule-link" href="#r-memory" title="memory"><span>[memory]</span></a>
</div>

# 内存模型

<div class="alert alert-warning">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
 > 
 > Rust 的内存模型尚不完整，也尚未完全确定。

</div>

<div class="rule" id="r-memory.bytes"><a class="rule-link" href="#r-memory.bytes" title="memory.bytes"><span>[memory<wbr>.bytes]</span></a>
</div>

## 字节

<div class="rule" id="r-memory.bytes.intro"><a class="rule-link" href="#r-memory.bytes.intro" title="memory.bytes.intro"><span>[memory<wbr>.bytes<wbr>.intro]</span></a>
</div>

Rust 中最基本的内存单元是字节。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 虽然字节通常会被降低为硬件字节，但 Rust 使用一种“抽象”的字节概念，可以作出硬件中不存在的区分，例如处于未初始化状态，或者存储指针的一部分。这些区分可能影响你的程序是否具有未定义行为，因此它们仍会对编译后的 Rust 程序的行为产生实际影响。

</div>

<div class="rule" id="r-memory.bytes.contents"><a class="rule-link" href="#r-memory.bytes.contents" title="memory.bytes.contents"><span>[memory<wbr>.bytes<wbr>.contents]</span></a>
</div>

每个字节可以具有以下值之一：

<div class="rule" id="r-memory.bytes.init"><a class="rule-link" href="#r-memory.bytes.init" title="memory.bytes.init"><span>[memory<wbr>.bytes<wbr>.init]</span></a>
</div>

- 包含一个 `u8` 值和可选 [provenance（来源）](../core/ptr/index.html#provenance)的已初始化字节，

<div class="rule" id="r-memory.bytes.uninit"><a class="rule-link" href="#r-memory.bytes.uninit" title="memory.bytes.uninit"><span>[memory<wbr>.bytes<wbr>.uninit]</span></a>
</div>

- 未初始化的字节。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 上述列表尚不保证是穷尽的。

</div>
