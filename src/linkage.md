<div class="rule" id="r-link"><a class="rule-link" href="#r-link" title="link"><span>[link]</span></a>
</div>

# 链接

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 本节更多地从编译器而非语言的角度进行描述。

</div>

<div class="rule" id="r-link.intro"><a class="rule-link" href="#r-link.intro" title="link.intro"><span>[link<wbr>.intro]</span></a>
</div>

编译器支持以静态和动态方式将 crate 链接在一起的多种方法。本节将探讨链接 crate 的各种方法，有关原生库的更多信息可以在[本书的 FFI 章节](../book/ch20-01-unsafe-rust.html#using-extern-functions-to-call-external-code)中找到。

<div class="rule" id="r-link.type"><a class="rule-link" href="#r-link.type" title="link.type"><span>[link<wbr>.type]</span></a>
</div>

在一次编译会话中，编译器可以通过使用命令行标志或 `crate_type` 属性来生成多个构件。如果指定了一个或多个命令行标志，则所有 `crate_type` 属性都会被忽略，而只构建命令行指定的构件。

<div class="rule" id="r-link.bin"><a class="rule-link" href="#r-link.bin" title="link.bin"><span>[link<wbr>.bin]</span></a>
</div>

- `--crate-type=bin`, `#![crate_type = "bin"]` - 将生成可运行的可执行文件。这要求 crate 中存在 `main` 函数，该函数会在程序开始执行时运行。这会链接所有 Rust 依赖和原生依赖，生成单个可分发的二进制文件。这是默认的 crate 类型。

<div class="rule" id="r-link.lib"><a class="rule-link" href="#r-link.lib" title="link.lib"><span>[link<wbr>.lib]</span></a>
</div>

- `--crate-type=lib`, `#![crate_type = "lib"]` - 将生成 Rust 库。由于库可以以多种形式呈现，具体生成什么并不明确。这个通用 `lib` 选项的目的是生成“编译器推荐”风格的库。输出的库始终可由 rustc 使用，但实际的库类型可能会不时变化。其余输出类型都是不同风味的库，而 `lib` 类型可以视为其中一种的别名（但实际是哪一种由编译器定义）。

<div class="rule" id="r-link.dylib"><a class="rule-link" href="#r-link.dylib" title="link.dylib"><span>[link<wbr>.dylib]</span></a>
</div>

- `--crate-type=dylib`, `#![crate_type = "dylib"]` - 将生成动态 Rust 库。这不同于 `lib` 输出类型，因为它强制生成动态库。生成的动态库可以作为其他库和/或可执行文件的依赖。此输出类型会在 Linux 上创建 `*.so` 文件，在 macOS 上创建 `*.dylib` 文件，在 Windows 上创建 `*.dll` 文件。

<div class="rule" id="r-link.staticlib"><a class="rule-link" href="#r-link.staticlib" title="link.staticlib"><span>[link<wbr>.staticlib]</span></a>
</div>

- `--crate-type=staticlib`, `#![crate_type = "staticlib"]` - 将生成静态系统库。这不同于其他库输出，因为编译器永远不会尝试链接到 `staticlib` 输出。此输出类型的目的是创建一个静态库，其中包含本地 crate 的所有代码以及所有上游依赖。此输出类型会在 Linux、macOS 和 Windows (MinGW) 上创建 `*.a` 文件，并在 Windows (MSVC) 上创建 `*.lib` 文件。建议在将 Rust 代码链接进现有非 Rust 应用程序等场景中使用这种格式，因为它不会对其他 Rust 代码具有动态依赖。
  
  请注意，静态库可能具有的任何动态依赖（例如对系统库的依赖，或对编译为动态库的 Rust 库的依赖），在从某处链接该静态库时都必须手动指定。`--print=native-static-libs` 标志可能对此有所帮助。
  
  请注意，由于生成的静态库包含所有依赖（包括标准库）的代码，并且还会导出它们的所有公共符号，因此将该静态库链接进可执行文件或共享库时可能需要特别小心。对于共享库，必须通过例如链接器脚本或符号版本脚本、导出符号列表 (macOS) 或模块定义文件 (Windows) 来限制导出符号列表。此外，可以移除未使用的节，以移除依赖中所有实际未使用的代码（例如 `--gc-sections`，或 macOS 上的 `-dead_strip`）。

<div class="rule" id="r-link.cdylib"><a class="rule-link" href="#r-link.cdylib" title="link.cdylib"><span>[link<wbr>.cdylib]</span></a>
</div>

- `--crate-type=cdylib`, `#![crate_type = "cdylib"]` - 将生成动态系统库。  这用于编译要从另一种语言加载的动态库。  此输出类型会在 Linux 上创建 `*.so` 文件，在 macOS 上创建 `*.dylib` 文件，在 Windows 上创建 `*.dll` 文件。

<div class="rule" id="r-link.rlib"><a class="rule-link" href="#r-link.rlib" title="link.rlib"><span>[link<wbr>.rlib]</span></a>
</div>

- `--crate-type=rlib`, `#![crate_type = "rlib"]` - 将生成一个“Rust 库”文件。它用作中间构件，可以将其视为“静态 Rust 库”。这些 `rlib` 文件不同于 `staticlib` 文件，会在之后的链接中由编译器解释。这实质上意味着 `rustc` 会像在动态库中查找元数据一样，在 `rlib` 文件中查找元数据。这种输出形式用于生成静态链接的可执行文件以及 `staticlib` 输出。

<div class="rule" id="r-link.proc-macro"><a class="rule-link" href="#r-link.proc-macro" title="link.proc-macro"><span>[link<wbr>.proc-macro]</span></a>
</div>

- `--crate-type=proc-macro`, `#![crate_type = "proc-macro"]` - 生成的输出未指定，但如果向其提供了 `-L` 路径，则编译器会将输出构件识别为宏，并且它可以被加载到程序中。用此 crate 类型编译的 crate 必须只导出[过程宏](procedural-macros.md)。编译器会自动设置 `proc_macro` [配置选项](conditional-compilation.md)。这些 crate 始终使用与编译器自身构建时相同的目标进行编译。例如，如果你在具有 `x86_64` CPU 的 Linux 上执行编译器，则目标将是 `x86_64-unknown-linux-gnu`，即使该 crate 是另一个为不同目标构建的 crate 的依赖也是如此。

<div class="rule" id="r-link.repetition"><a class="rule-link" href="#r-link.repetition" title="link.repetition"><span>[link<wbr>.repetition]</span></a>
</div>

请注意，这些输出是可叠加的，也就是说，如果指定了多个输出，编译器会生成每种形式的输出而无需重新编译。不过，这只适用于由同一方法指定的输出。如果只指定了 `crate_type` 属性，则它们都会被构建；但如果指定了一个或多个 `--crate-type` 命令行标志，则只会构建这些标志指定的输出。

<div class="rule" id="r-link.dependency"><a class="rule-link" href="#r-link.dependency" title="link.dependency"><span>[link<wbr>.dependency]</span></a>
</div>

有了所有这些不同种类的输出，如果 crate A 依赖 crate B，那么编译器可能会在整个系统中以各种不同形式找到 B。然而，编译器只会查找 `rlib` 格式和动态库格式。对于一个依赖库有这两种选项时，编译器必须在某个时刻在这两种格式之间作出选择。考虑到这一点，编译器在确定将使用哪种依赖格式时遵循以下规则：

<div class="rule" id="r-link.dependency-staticlib"><a class="rule-link" href="#r-link.dependency-staticlib" title="link.dependency-staticlib"><span>[link<wbr>.dependency-staticlib]</span></a>
</div>

1. 如果正在生成静态库，则所有上游依赖都要求以 `rlib` 格式可用。此要求源于动态库不能转换为静态格式这一原因。
   
   请注意，无法将原生动态依赖链接进静态库；在这种情况下，将针对所有未链接的原生动态依赖打印警告。

<div class="rule" id="r-link.dependency-rlib"><a class="rule-link" href="#r-link.dependency-rlib" title="link.dependency-rlib"><span>[link<wbr>.dependency-rlib]</span></a>
</div>

2. 如果正在生成 `rlib` 文件，则对上游依赖以何种格式可用没有限制。只要求所有上游依赖可供读取元数据。
   
   原因在于 `rlib` 文件不包含它们的任何上游依赖。让所有 `rlib` 文件都包含一份 `libstd.rlib` 的副本并不会很高效！

<div class="rule" id="r-link.dependency-prefer-dynamic"><a class="rule-link" href="#r-link.dependency-prefer-dynamic" title="link.dependency-prefer-dynamic"><span>[link<wbr>.dependency-prefer-dynamic]</span></a>
</div>

3. 如果正在生成可执行文件且未指定 `-C prefer-dynamic` 标志，则首先尝试以 `rlib` 格式查找依赖。如果某些依赖无法以 rlib 格式获得，则会尝试动态链接（见下文）。

<div class="rule" id="r-link.dependency-dynamic"><a class="rule-link" href="#r-link.dependency-dynamic" title="link.dependency-dynamic"><span>[link<wbr>.dependency-dynamic]</span></a>
</div>

4. 如果正在生成动态库或正在动态链接的可执行文件，则编译器会尝试调和以 rlib 或 dylib 格式可用的依赖，以创建最终产物。
   
   编译器的一个主要目标是确保一个库绝不会在任何构件中出现多于一次。例如，如果动态库 B 和 C 各自静态链接到库 A，那么某个 crate 就不能同时链接到 B 和 C，因为这样会有两份 A。编译器允许混合使用 rlib 和 dylib 格式，但必须满足此限制。
   
   编译器目前没有实现任何用于提示某个库应以何种格式链接的方法。进行动态链接时，编译器会尝试最大化动态依赖，同时仍允许通过 rlib 链接进某些依赖。
   
   在大多数情况下，如果进行动态链接，建议让所有库都能以 dylib 形式可用。对于其他情况，如果编译器无法确定各个库应以哪些格式链接，它会发出警告。

一般来说，`--crate-type=bin` 或 `--crate-type=lib` 应足以满足所有编译需求；其他选项只是为了在需要对 crate 的输出格式进行更细粒度控制时可用。

<div class="rule" id="r-link.crt"><a class="rule-link" href="#r-link.crt" title="link.crt"><span>[link<wbr>.crt]</span></a>
</div>

## 静态和动态 C 运行时

<div class="rule" id="r-link.crt.intro"><a class="rule-link" href="#r-link.crt.intro" title="link.crt.intro"><span>[link<wbr>.crt<wbr>.intro]</span></a>
</div>

标准库通常会尽力为适当的目标同时支持静态链接和动态链接的 C 运行时。例如，`x86_64-pc-windows-msvc` 和 `x86_64-unknown-linux-musl` 目标通常同时带有两种运行时，用户可以选择想要的那一种。编译器中的所有目标都有链接到 C 运行时的默认模式。通常目标默认动态链接，但也有默认静态链接的例外，例如：

- `arm-unknown-linux-musleabi`
- `arm-unknown-linux-musleabihf`
- `armv7-unknown-linux-musleabihf`
- `i686-unknown-linux-musl`
- `x86_64-unknown-linux-musl`

<div class="rule" id="r-link.crt.crt-static"><a class="rule-link" href="#r-link.crt.crt-static" title="link.crt.crt-static"><span>[link<wbr>.crt<wbr>.crt-static]</span></a>
</div>

C 运行时的链接配置会遵循 `crt-static` 目标特性。这些目标特性通常通过传给编译器本身的命令行标志来配置。例如，要启用静态运行时，可以执行：

```sh
rustc -C target-feature=+crt-static foo.rs
```

而要动态链接到 C 运行时，可以执行：

```sh
rustc -C target-feature=-crt-static foo.rs
```

<div class="rule" id="r-link.crt.ineffective"><a class="rule-link" href="#r-link.crt.ineffective" title="link.crt.ineffective"><span>[link<wbr>.crt<wbr>.ineffective]</span></a>
</div>

不支持在 C 运行时链接方式之间切换的目标会忽略此标志。建议在编译器成功后检查生成的二进制文件，以确保它按你的预期进行了链接。

<div class="rule" id="r-link.crt.target_feature"><a class="rule-link" href="#r-link.crt.target_feature" title="link.crt.target_feature"><span>[link<wbr>.crt<wbr>.target_feature]</span></a>
</div>

Crate 也可以获知 C 运行时的链接方式。例如，MSVC 上的代码需要根据所链接的运行时以不同方式编译（例如使用 `/MT` 或 `/MD`）。目前这通过 [`cfg` 属性的 `target_feature` 选项](conditional-compilation.md#target_feature)导出：

```rust
#[cfg(target_feature = "crt-static")]
fn foo() {
    println!("the C runtime should be statically linked");
}

#[cfg(not(target_feature = "crt-static"))]
fn foo() {
    println!("the C runtime should be dynamically linked");
}
```

还要注意，Cargo 构建脚本可以通过[环境变量](../cargo/reference/environment-variables.html#environment-variables-cargo-sets-for-build-scripts)获知此特性。在构建脚本中，可以通过以下方式检测链接方式：

```rust
use std::env;

fn main() {
    let linkage = env::var("CARGO_CFG_TARGET_FEATURE").unwrap_or(String::new());

    if linkage.contains("crt-static") {
        println!("the C runtime will be statically linked");
    } else {
        println!("the C runtime will be dynamically linked");
    }
}
```

要在本地使用此特性，通常会使用 `RUSTFLAGS` 环境变量，通过 Cargo 向编译器指定标志。例如，要在 MSVC 上编译静态链接的二进制文件，可以执行：

```sh
RUSTFLAGS='-C target-feature=+crt-static' cargo build --target x86_64-pc-windows-msvc
```

<div class="rule" id="r-link.foreign-code"><a class="rule-link" href="#r-link.foreign-code" title="link.foreign-code"><span>[link<wbr>.foreign-code]</span></a>
</div>

## 混合 Rust 与外部代码库

<div class="rule" id="r-link.foreign-code.foreign-linkers"><a class="rule-link" href="#r-link.foreign-code.foreign-linkers" title="link.foreign-code.foreign-linkers"><span>[link<wbr>.foreign-code<wbr>.foreign-linkers]</span></a>
</div>

如果你将 Rust 与外部代码（例如 C、C++）混合使用，并希望生成包含这两类代码的单个二进制文件，那么最终的二进制链接有两种做法：

- 使用 `rustc`。通过 `-L <directory>` 和 `-l<library>` rustc 参数传递任何非 Rust 库，和/或在 Rust 代码中使用 `#[link]` 指令。如果需要链接 `.o` 文件，可以使用 `-Clink-arg=file.o`。
- 使用你的外部链接器。在这种情况下，你首先需要生成一个 Rust `staticlib` 目标，并将其传给你的外部链接器调用。如果需要链接多个 Rust 子系统，你需要生成_单个\_ `staticlib`，也许要使用许多 `extern crate` 语句来包含多个 Rust `rlib`。多个 Rust `staticlib` 文件很可能发生冲突。

目前不支持将 `rlib` 直接传给外部链接器。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 就本节而言，使用另一个 Rust 运行时实例编译或链接的 Rust 代码算作“外部代码”。

</div>

<div class="rule" id="r-link.unwinding"><a class="rule-link" href="#r-link.unwinding" title="link.unwinding"><span>[link<wbr>.unwinding]</span></a>
</div>

### 被禁止的链接与展开

<div class="rule" id="r-link.unwinding.intro"><a class="rule-link" href="#r-link.unwinding.intro" title="link.unwinding.intro"><span>[link<wbr>.unwinding<wbr>.intro]</span></a>
</div>

只有在二进制文件按以下规则一致地构建时，才能使用 panic 展开。

<div class="rule" id="r-link.unwinding.potential"><a class="rule-link" href="#r-link.unwinding.potential" title="link.unwinding.potential"><span>[link<wbr>.unwinding<wbr>.potential]</span></a>
</div>

如果满足以下任一条件，则称 Rust 构件为_可能展开\_：

- 该构件使用 [`unwind` panic 处理器](panic.md#r-panic.panic_handler)。
- 该构件包含一个使用 `unwind` [panic 策略](panic.md#panic-strategy)构建的 crate，且该 crate 会调用使用 `-unwind` ABI 的函数。
- 该构件对运行在另一个 Rust 构件中的代码进行 `"Rust"` ABI 调用，后者具有单独的 Rust 运行时副本，并且后者是可能展开的。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这个定义刻画的是 Rust 构件内部的 `"Rust"` ABI 调用是否可能展开。

</div>

<div class="rule" id="r-link.unwinding.prohibited"><a class="rule-link" href="#r-link.unwinding.prohibited" title="link.unwinding.prohibited"><span>[link<wbr>.unwinding<wbr>.prohibited]</span></a>
</div>

如果某个 Rust 构件是可能展开的，则其所有 crate 都必须使用 `unwind` [panic 策略](panic.md#panic-strategy)构建。否则，展开可能导致未定义行为。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 如果你使用 `rustc` 进行链接，这些规则会自动强制执行。如果你_没有_使用 `rustc` 进行链接，则必须谨慎确保在整个二进制文件中一致地处理展开。不使用 `rustc` 的链接包括使用 `dlopen` 或类似设施，即由系统运行时在没有 `rustc` 参与的情况下完成链接。这只会在混合使用带有不同 [`-C panic`](../rustc/codegen-options/index.html#panic) 标志的代码时发生，因此大多数用户不必关心这一点。

</div>

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 为了保证无论链接时使用哪种 panic 运行时，库都是健全的（并且可用 `rustc` 链接），可以使用 [`ffi_unwind_calls` lint](../rustc/lints/listing/allowed-by-default.html#ffi-unwind-calls)。该 lint 会标记对 `-unwind` 外部函数或函数指针的任何调用。

</div>
