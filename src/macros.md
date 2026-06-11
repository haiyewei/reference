<div class="rule" id="r-macro"><a class="rule-link" href="#r-macro" title="macro"><span>[macro]</span></a>
</div>

# 宏

<div class="rule" id="r-macro.intro"><a class="rule-link" href="#r-macro.intro" title="macro.intro"><span>[macro<wbr>.intro]</span></a>
</div>

Rust 的功能和语法可以通过称为宏的自定义定义来扩展。宏具有名称，并通过一致的语法调用：`some_extension!(...)`。

定义新宏有两种方式：

- [示例宏](macros-by-example.md)以更高层次的声明式方式定义新的语法。
- [过程宏](procedural-macros.md)使用对输入 token 进行操作的函数，定义类函数宏、自定义派生和自定义属性。

<div class="rule" id="r-macro.invocation"><a class="rule-link" href="#r-macro.invocation" title="macro.invocation"><span>[macro<wbr>.invocation]</span></a>
</div>

## 宏调用

<div class="rule" id="r-macro.invocation.syntax"><a class="rule-link" href="#r-macro.invocation.syntax" title="macro.invocation.syntax"><span>[macro<wbr>.invocation<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-MacroInvocation" onclick="show_railroad()">[MacroInvocation](macros.md#railroad-MacroInvocation)</span> →  
    <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span> <span class="grammar-literal">!</span> <span class="grammar-text">[DelimTokenTree](macros.md#grammar-DelimTokenTree)</span>

<span class="grammar-text grammar-production" id="grammar-DelimTokenTree" onclick="show_railroad()">[DelimTokenTree](macros.md#railroad-DelimTokenTree)</span> →  
      <span class="grammar-literal">(</span> <span class="grammar-text">[TokenTree](macros.md#grammar-TokenTree)</span><sup>\*</sup> <span class="grammar-literal">)</span>  
    \| <span class="grammar-literal">\[</span> <span class="grammar-text">[TokenTree](macros.md#grammar-TokenTree)</span><sup>\*</sup> <span class="grammar-literal">\]</span>  
    \| <span class="grammar-literal">{</span> <span class="grammar-text">[TokenTree](macros.md#grammar-TokenTree)</span><sup>\*</sup> <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-TokenTree" onclick="show_railroad()">[TokenTree](macros.md#railroad-TokenTree)</span> →  
    <span class="grammar-text">[Token](tokens.md#grammar-Token)</span><sub class="grammar-text">除 [delimiters](tokens.md#r-lex.token.delim)</sub> | <span class="grammar-text">[DelimTokenTree](macros.md#grammar-DelimTokenTree)</span>

<span class="grammar-text grammar-production" id="grammar-MacroInvocationSemi" onclick="show_railroad()">[MacroInvocationSemi](macros.md#railroad-MacroInvocationSemi)</span> →  
      <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span> <span class="grammar-literal">!</span> <span class="grammar-literal">(</span> <span class="grammar-text">[TokenTree](macros.md#grammar-TokenTree)</span><sup>\*</sup> <span class="grammar-literal">)</span> <span class="grammar-literal">;</span>  
    \| <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span> <span class="grammar-literal">!</span> <span class="grammar-literal">\[</span> <span class="grammar-text">[TokenTree](macros.md#grammar-TokenTree)</span><sup>\*</sup> <span class="grammar-literal">\]</span> <span class="grammar-literal">;</span>  
    \| <span class="grammar-text">[SimplePath](paths.md#grammar-SimplePath)</span> <span class="grammar-literal">!</span> <span class="grammar-literal">{</span> <span class="grammar-text">[TokenTree](macros.md#grammar-TokenTree)</span><sup>\*</sup> <span class="grammar-literal">}</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 350px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroInvocation"><svg class="railroad" viewBox="0 0 350 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros.md#grammar-MacroInvocation">
<text class="comment" x="67" y="25">
MacroInvocation</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="35" y="42"/>
<text x="85" y="58">
SimplePath</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="145" y="42"/>
<text x="159" y="58">
!</text>
</g>
<a class="link" xlink:href="macros.md#railroad-DelimTokenTree">
<g class="nonterminal">
<rect height="22" width="132" x="183" y="42"/>
<text x="249" y="58">
DelimTokenTree</text>
</g>
</a>
<path d=" M 135 53 h 10"/>
<path d=" M 173 53 h 10"/>
</g>
<path d=" M 325 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 315 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 358px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-DelimTokenTree"><svg class="railroad" viewBox="0 0 358 216" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros.md#grammar-DelimTokenTree">
<text class="comment" x="64" y="25">
DelimTokenTree</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 66 h 24 m 240 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="55"/>
<text x="73" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 97 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 121 66 h 12 m 92 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -92 m 49 0 l 5 -5 m 0 10 l -5 -5 m -49 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="macros.md#railroad-TokenTree">
<g class="nonterminal">
<rect height="22" width="92" x="133" y="55"/>
<text x="179" y="71">
TokenTree</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="271" y="55"/>
<text x="285" y="71">
)</text>
</g>
<path d=" M 87 66 h 10"/>
<path d=" M 261 66 h 10"/>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 22 m 264 0 v -22 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 112 v 46 m 264 0 v -46"/>
<path d=" M 47 100 v 12 a 12 12 0 0 0 12 12 m 240 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="113"/>
<text x="73" y="129">
[</text>
</g>
<g class="optional">
<path d=" M 97 124 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 121 124 h 12 m 92 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -92 m 49 0 l 5 -5 m 0 10 l -5 -5 m -49 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="macros.md#railroad-TokenTree">
<g class="nonterminal">
<rect height="22" width="92" x="133" y="113"/>
<text x="179" y="129">
TokenTree</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="271" y="113"/>
<text x="285" y="129">
]</text>
</g>
<path d=" M 87 124 h 10"/>
<path d=" M 261 124 h 10"/>
</g>
<path d=" M 47 158 v 12 a 12 12 0 0 0 12 12 m 240 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="171"/>
<text x="73" y="187">
{</text>
</g>
<g class="optional">
<path d=" M 97 182 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 121 182 h 12 m 92 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -92 m 49 0 l 5 -5 m 0 10 l -5 -5 m -49 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="macros.md#railroad-TokenTree">
<g class="nonterminal">
<rect height="22" width="92" x="133" y="171"/>
<text x="179" y="187">
TokenTree</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="271" y="171"/>
<text x="285" y="187">
}</text>
</g>
<path d=" M 87 182 h 10"/>
<path d=" M 261 182 h 10"/>
</g>
</g>
<path d=" M 333 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 323 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 263px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-TokenTree"><svg class="railroad" viewBox="0 0 263 151" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros.md#grammar-TokenTree">
<text class="comment" x="46" y="25">
TokenTree</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 89 h 24 m 145 0 h 24"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="145" x="59" y="42"/>
<path d=" M 59 89 h 8 m 60 0 h 77 m -35 0 l -5 -5 m 0 10 l 5 -5 m 35 0"/>
<text class="comment" x="131" y="65">
except delimiters</text>
<a class="link" xlink:href="tokens.md#railroad-Token">
<g class="nonterminal">
<rect height="22" width="60" x="67" y="78"/>
<text x="97" y="94">
Token</text>
</g>
</a>
</g>
</g>
<path d=" M 35 89 a 12 12 0 0 1 12 12 v 17 m 169 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 118 v 0 a 12 12 0 0 0 12 12 m 132 0 h 13 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="macros.md#railroad-DelimTokenTree">
<g class="nonterminal">
<rect height="22" width="132" x="59" y="119"/>
<text x="125" y="135">
DelimTokenTree</text>
</g>
</a>
</g>
<path d=" M 238 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 228 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 544px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroInvocationSemi"><svg class="railroad" viewBox="0 0 544 216" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros.md#grammar-MacroInvocationSemi">
<text class="comment" x="81" y="25">
MacroInvocationSemi</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 66 h 24 m 426 0 h 24"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="55"/>
<text x="109" y="71">
SimplePath</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="55"/>
<text x="183" y="71">
!</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="207" y="55"/>
<text x="221" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 245 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 269 66 h 12 m 92 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -92 m 49 0 l 5 -5 m 0 10 l -5 -5 m -49 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="macros.md#railroad-TokenTree">
<g class="nonterminal">
<rect height="22" width="92" x="281" y="55"/>
<text x="327" y="71">
TokenTree</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="419" y="55"/>
<text x="433" y="71">
)</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="457" y="55"/>
<text x="471" y="71">
;</text>
</g>
<path d=" M 159 66 h 10"/>
<path d=" M 197 66 h 10"/>
<path d=" M 235 66 h 10"/>
<path d=" M 409 66 h 10"/>
<path d=" M 447 66 h 10"/>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 22 m 450 0 v -22 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 112 v 46 m 450 0 v -46"/>
<path d=" M 47 100 v 12 a 12 12 0 0 0 12 12 m 426 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="113"/>
<text x="109" y="129">
SimplePath</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="113"/>
<text x="183" y="129">
!</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="207" y="113"/>
<text x="221" y="129">
[</text>
</g>
<g class="optional">
<path d=" M 245 124 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 269 124 h 12 m 92 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -92 m 49 0 l 5 -5 m 0 10 l -5 -5 m -49 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="macros.md#railroad-TokenTree">
<g class="nonterminal">
<rect height="22" width="92" x="281" y="113"/>
<text x="327" y="129">
TokenTree</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="419" y="113"/>
<text x="433" y="129">
]</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="457" y="113"/>
<text x="471" y="129">
;</text>
</g>
<path d=" M 159 124 h 10"/>
<path d=" M 197 124 h 10"/>
<path d=" M 235 124 h 10"/>
<path d=" M 409 124 h 10"/>
<path d=" M 447 124 h 10"/>
</g>
<path d=" M 47 158 v 12 a 12 12 0 0 0 12 12 m 388 0 h 38 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<a class="link" xlink:href="paths.md#railroad-SimplePath">
<g class="nonterminal">
<rect height="22" width="100" x="59" y="171"/>
<text x="109" y="187">
SimplePath</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="169" y="171"/>
<text x="183" y="187">
!</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="207" y="171"/>
<text x="221" y="187">
{</text>
</g>
<g class="optional">
<path d=" M 245 182 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 116 m -55 0 l -5 -5 m 0 10 l 5 -5 m 55 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 269 182 h 12 m 92 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -92 m 49 0 l 5 -5 m 0 10 l -5 -5 m -49 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="macros.md#railroad-TokenTree">
<g class="nonterminal">
<rect height="22" width="92" x="281" y="171"/>
<text x="327" y="187">
TokenTree</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="419" y="171"/>
<text x="433" y="187">
}</text>
</g>
<path d=" M 159 182 h 10"/>
<path d=" M 197 182 h 10"/>
<path d=" M 235 182 h 10"/>
<path d=" M 409 182 h 10"/>
</g>
</g>
<path d=" M 519 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 509 66 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-macro.invocation.intro"><a class="rule-link" href="#r-macro.invocation.intro" title="macro.invocation.intro"><span>[macro<wbr>.invocation<wbr>.intro]</span></a>
</div>

宏调用会在编译时展开宏，并用宏的结果替换该调用。宏可以在以下情形中调用：

<div class="rule" id="r-macro.invocation.expr"><a class="rule-link" href="#r-macro.invocation.expr" title="macro.invocation.expr"><span>[macro<wbr>.invocation<wbr>.expr]</span></a>
</div>

- [表达式](expressions.md)和[语句](statements.md)

<div class="rule" id="r-macro.invocation.pattern"><a class="rule-link" href="#r-macro.invocation.pattern" title="macro.invocation.pattern"><span>[macro<wbr>.invocation<wbr>.pattern]</span></a>
</div>

- [模式](patterns.md)

<div class="rule" id="r-macro.invocation.type"><a class="rule-link" href="#r-macro.invocation.type" title="macro.invocation.type"><span>[macro<wbr>.invocation<wbr>.type]</span></a>
</div>

- [类型](types.md)

<div class="rule" id="r-macro.invocation.item"><a class="rule-link" href="#r-macro.invocation.item" title="macro.invocation.item"><span>[macro<wbr>.invocation<wbr>.item]</span></a>
</div>

- [项](items.md)，包括[关联项](items/associated-items.md)

<div class="rule" id="r-macro.invocation.nested"><a class="rule-link" href="#r-macro.invocation.nested" title="macro.invocation.nested"><span>[macro<wbr>.invocation<wbr>.nested]</span></a>
</div>

- [`macro_rules`](macros-by-example.md) 转录器

<div class="rule" id="r-macro.invocation.extern"><a class="rule-link" href="#r-macro.invocation.extern" title="macro.invocation.extern"><span>[macro<wbr>.invocation<wbr>.extern]</span></a>
</div>

- [外部块](items/external-blocks.md)

<div class="rule" id="r-macro.invocation.item-statement"><a class="rule-link" href="#r-macro.invocation.item-statement" title="macro.invocation.item-statement"><span>[macro<wbr>.invocation<wbr>.item-statement]</span></a>
</div>

用作项或语句时，如果没有使用花括号且末尾需要分号，则使用 [MacroInvocationSemi](macros.md#grammar-MacroInvocationSemi) 形式。[可见性限定符](visibility-and-privacy.md)绝不允许出现在宏调用或 [`macro_rules`](macros-by-example.md) 定义之前。

```rust
// Used as an expression.
let x = vec![1,2,3];

// Used as a statement.
println!("Hello!");

// Used in a pattern.
macro_rules! pat {
    ($i:ident) => (Some($i))
}

if let pat!(x) = Some(1) {
    assert_eq!(x, 1);
}

// Used in a type.
macro_rules! Tuple {
    { $A:ty, $B:ty } => { ($A, $B) };
}

type N2 = Tuple!(i32, i32);

// Used as an item.
# use std::cell::RefCell;
thread_local!(static FOO: RefCell<u32> = RefCell::new(1));

// Used as an associated item.
macro_rules! const_maker {
    ($t:ty, $v:tt) => { const CONST: $t = $v; };
}
trait T {
    const_maker!{i32, 7}
}

// Macro calls within macros.
macro_rules! example {
    () => { println!("Macro call in a macro!") };
}
// Outer macro `example` is expanded, then inner macro `println` is expanded.
example!();
```

<div class="rule" id="r-macro.invocation.name-resolution"><a class="rule-link" href="#r-macro.invocation.name-resolution" title="macro.invocation.name-resolution"><span>[macro<wbr>.invocation<wbr>.name-resolution]</span></a>
</div>

宏调用可以通过两类作用域解析：

- 文本作用域
  - [文本作用域 `macro_rules`](macros-by-example.md#r-macro.decl.scope.textual)
- 基于路径的作用域
  - [基于路径的作用域 `macro_rules`](macros-by-example.md#r-macro.decl.scope.path-based)
  - [过程宏](procedural-macros.md)