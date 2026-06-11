<div class="rule" id="r-macro.decl"><a class="rule-link" href="#r-macro.decl" title="macro.decl"><span>[macro<wbr>.decl]</span></a>
</div>

# 示例宏

<div class="rule" id="r-macro.decl.syntax"><a class="rule-link" href="#r-macro.decl.syntax" title="macro.decl.syntax"><span>[macro<wbr>.decl<wbr>.syntax]</span></a>
</div>

<div class="grammar-container">

**<sup>语法</sup>** <br> <span class="grammar-text grammar-production" id="grammar-MacroRulesDefinition" onclick="show_railroad()">[MacroRulesDefinition](macros-by-example.md#railroad-MacroRulesDefinition)</span> →  
    <span class="grammar-literal">macro\_rules</span> <span class="grammar-literal">!</span> <span class="grammar-text">[IDENTIFIER](identifiers.md#grammar-IDENTIFIER)</span> <span class="grammar-text">[MacroRulesDef](macros-by-example.md#grammar-MacroRulesDef)</span>

<span class="grammar-text grammar-production" id="grammar-MacroRulesDef" onclick="show_railroad()">[MacroRulesDef](macros-by-example.md#railroad-MacroRulesDef)</span> →  
      <span class="grammar-literal">(</span> <span class="grammar-text">[MacroRules](macros-by-example.md#grammar-MacroRules)</span> <span class="grammar-literal">)</span> <span class="grammar-literal">;</span>  
    \| <span class="grammar-literal">\[</span> <span class="grammar-text">[MacroRules](macros-by-example.md#grammar-MacroRules)</span> <span class="grammar-literal">\]</span> <span class="grammar-literal">;</span>  
    \| <span class="grammar-literal">{</span> <span class="grammar-text">[MacroRules](macros-by-example.md#grammar-MacroRules)</span> <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-MacroRules" onclick="show_railroad()">[MacroRules](macros-by-example.md#railroad-MacroRules)</span> →  
    <span class="grammar-text">[MacroRule](macros-by-example.md#grammar-MacroRule)</span> ( <span class="grammar-literal">;</span> <span class="grammar-text">[MacroRule](macros-by-example.md#grammar-MacroRule)</span> )<sup>\*</sup> <span class="grammar-literal">;</span><sup>?</sup>

<span class="grammar-text grammar-production" id="grammar-MacroRule" onclick="show_railroad()">[MacroRule](macros-by-example.md#railroad-MacroRule)</span> →  
    <span class="grammar-text">[MacroMatcher](macros-by-example.md#grammar-MacroMatcher)</span> <span class="grammar-literal">=></span> <span class="grammar-text">[MacroTranscriber](macros-by-example.md#grammar-MacroTranscriber)</span>

<span class="grammar-text grammar-production" id="grammar-MacroMatcher" onclick="show_railroad()">[MacroMatcher](macros-by-example.md#railroad-MacroMatcher)</span> →  
      <span class="grammar-literal">(</span> <span class="grammar-text">[MacroMatch](macros-by-example.md#grammar-MacroMatch)</span><sup>\*</sup> <span class="grammar-literal">)</span>  
    \| <span class="grammar-literal">\[</span> <span class="grammar-text">[MacroMatch](macros-by-example.md#grammar-MacroMatch)</span><sup>\*</sup> <span class="grammar-literal">\]</span>  
    \| <span class="grammar-literal">{</span> <span class="grammar-text">[MacroMatch](macros-by-example.md#grammar-MacroMatch)</span><sup>\*</sup> <span class="grammar-literal">}</span>

<span class="grammar-text grammar-production" id="grammar-MacroMatch" onclick="show_railroad()">[MacroMatch](macros-by-example.md#railroad-MacroMatch)</span> →  
      <span class="grammar-text">[Token](tokens.md#grammar-Token)</span><sub class="grammar-text">除 `$` 和 [delimiters](tokens.md#r-lex.token.delim)</sub>  
    \| <span class="grammar-text">[MacroMatcher](macros-by-example.md#grammar-MacroMatcher)</span>  
    \| <span class="grammar-literal">$</span> ( <span class="grammar-text">[IDENTIFIER_OR_KEYWORD](identifiers.md#grammar-IDENTIFIER_OR_KEYWORD)</span><sub class="grammar-text">除 `crate`</sub> | <span class="grammar-text">[RAW_IDENTIFIER](identifiers.md#grammar-RAW_IDENTIFIER)</span> ) <span class="grammar-literal">:</span> <span class="grammar-text">[MacroFragSpec](macros-by-example.md#grammar-MacroFragSpec)</span>  
    \| <span class="grammar-literal">$</span> <span class="grammar-literal">(</span> <span class="grammar-text">[MacroMatch](macros-by-example.md#grammar-MacroMatch)</span><sup>+</sup> <span class="grammar-literal">)</span> <span class="grammar-text">[MacroRepSep](macros-by-example.md#grammar-MacroRepSep)</span><sup>?</sup> <span class="grammar-text">[MacroRepOp](macros-by-example.md#grammar-MacroRepOp)</span>

<span class="grammar-text grammar-production" id="grammar-MacroFragSpec" onclick="show_railroad()">[MacroFragSpec](macros-by-example.md#railroad-MacroFragSpec)</span> →  
      <span class="grammar-literal">block</span> | <span class="grammar-literal">expr</span> | <span class="grammar-literal">expr\_2021</span> | <span class="grammar-literal">ident</span> | <span class="grammar-literal">item</span> | <span class="grammar-literal">lifetime</span> | <span class="grammar-literal">literal</span>  
    \| <span class="grammar-literal">meta</span> | <span class="grammar-literal">pat</span> | <span class="grammar-literal">pat\_param</span> | <span class="grammar-literal">path</span> | <span class="grammar-literal">stmt</span> | <span class="grammar-literal">tt</span> | <span class="grammar-literal">ty</span> | <span class="grammar-literal">vis</span>

<span class="grammar-text grammar-production" id="grammar-MacroRepSep" onclick="show_railroad()">[MacroRepSep](macros-by-example.md#railroad-MacroRepSep)</span> → <span class="grammar-text">[Token](tokens.md#grammar-Token)</span><sub class="grammar-text">除 [delimiters](tokens.md#r-lex.token.delim) 和 [MacroRepOp](macros-by-example.md#grammar-MacroRepOp)</sub>

<span class="grammar-text grammar-production" id="grammar-MacroRepOp" onclick="show_railroad()">[MacroRepOp](macros-by-example.md#railroad-MacroRepOp)</span> → <span class="grammar-literal">\*</span> | <span class="grammar-literal">+</span> | <span class="grammar-literal">?</span>

<span class="grammar-text grammar-production" id="grammar-MacroTranscriber" onclick="show_railroad()">[MacroTranscriber](macros-by-example.md#railroad-MacroTranscriber)</span> → <span class="grammar-text">[DelimTokenTree](macros.md#grammar-DelimTokenTree)</span>

<button class="grammar-toggle-railroad" type="button" title="切换铁路图显示" onclick="toggle_railroad()">显示铁路图</button>

</div>
<div class="grammar-railroad grammar-hidden">

<div style="width: 460px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroRulesDefinition"><svg class="railroad" viewBox="0 0 460 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros-by-example.md#grammar-MacroRulesDefinition">
<text class="comment" x="88" y="25">
MacroRulesDefinition</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="108" x="35" y="42"/>
<text x="89" y="58">
macro_rules</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="153" y="42"/>
<text x="167" y="58">
!</text>
</g>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="100" x="191" y="42"/>
<text x="241" y="58">
IDENTIFIER</text>
</g>
</a>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroRulesDef">
<g class="nonterminal">
<rect height="22" width="124" x="301" y="42"/>
<text x="363" y="58">
MacroRulesDef</text>
</g>
</a>
<path d=" M 143 53 h 10"/>
<path d=" M 181 53 h 10"/>
<path d=" M 291 53 h 10"/>
</g>
<path d=" M 435 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 425 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 332px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroRulesDef"><svg class="railroad" viewBox="0 0 332 140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros-by-example.md#grammar-MacroRulesDef">
<text class="comment" x="60" y="25">
MacroRulesDef</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 214 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="42"/>
<text x="73" y="58">
(</text>
</g>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroRules">
<g class="nonterminal">
<rect height="22" width="100" x="97" y="42"/>
<text x="147" y="58">
MacroRules</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="207" y="42"/>
<text x="221" y="58">
)</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="245" y="42"/>
<text x="259" y="58">
;</text>
</g>
<path d=" M 87 53 h 10"/>
<path d=" M 197 53 h 10"/>
<path d=" M 235 53 h 10"/>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 238 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 238 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 214 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="75"/>
<text x="73" y="91">
[</text>
</g>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroRules">
<g class="nonterminal">
<rect height="22" width="100" x="97" y="75"/>
<text x="147" y="91">
MacroRules</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="207" y="75"/>
<text x="221" y="91">
]</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="245" y="75"/>
<text x="259" y="91">
;</text>
</g>
<path d=" M 87 86 h 10"/>
<path d=" M 197 86 h 10"/>
<path d=" M 235 86 h 10"/>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 176 0 h 38 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="108"/>
<text x="73" y="124">
{</text>
</g>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroRules">
<g class="nonterminal">
<rect height="22" width="100" x="97" y="108"/>
<text x="147" y="124">
MacroRules</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="207" y="108"/>
<text x="221" y="124">
}</text>
</g>
<path d=" M 87 119 h 10"/>
<path d=" M 197 119 h 10"/>
</g>
</g>
<path d=" M 307 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 297 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 460px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroRules"><svg class="railroad" viewBox="0 0 460 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros-by-example.md#grammar-MacroRules">
<text class="comment" x="50" y="25">
MacroRules</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="macros-by-example.md#railroad-MacroRule">
<g class="nonterminal">
<rect height="22" width="92" x="35" y="55"/>
<text x="81" y="71">
MacroRule</text>
</g>
</a>
<g class="optional">
<path d=" M 137 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 154 m -74 0 l -5 -5 m 0 10 l 5 -5 m 74 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 161 66 h 12 m 130 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -130 m 68 0 l 5 -5 m 0 10 l -5 -5 m -68 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="173" y="55"/>
<text x="187" y="71">
;</text>
</g>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroRule">
<g class="nonterminal">
<rect height="22" width="92" x="211" y="55"/>
<text x="257" y="71">
MacroRule</text>
</g>
</a>
<path d=" M 201 66 h 10"/>
</g>
</g>
</g>
<g class="optional">
<path d=" M 349 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 28 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="373" y="55"/>
<text x="387" y="71">
;</text>
</g>
</g>
<path d=" M 127 66 h 10"/>
<path d=" M 339 66 h 10"/>
</g>
<path d=" M 435 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 425 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 390px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroRule"><svg class="railroad" viewBox="0 0 390 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros-by-example.md#grammar-MacroRule">
<text class="comment" x="46" y="25">
MacroRule</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="sequence">
<a class="link" xlink:href="macros-by-example.md#railroad-MacroMatcher">
<g class="nonterminal">
<rect height="22" width="116" x="35" y="42"/>
<text x="93" y="58">
MacroMatcher</text>
</g>
</a>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="161" y="42"/>
<text x="179" y="58">
=&gt;</text>
</g>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroTranscriber">
<g class="nonterminal">
<rect height="22" width="148" x="207" y="42"/>
<text x="281" y="58">
MacroTranscriber</text>
</g>
</a>
<path d=" M 151 53 h 10"/>
<path d=" M 197 53 h 10"/>
</g>
<path d=" M 365 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 355 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 366px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroMatcher"><svg class="railroad" viewBox="0 0 366 216" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros-by-example.md#grammar-MacroMatcher">
<text class="comment" x="57" y="25">
MacroMatcher</text>
</a>
<g class="sequence">
<path d=" M 10 66 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 66 h 24 m 248 0 h 24"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="55"/>
<text x="73" y="71">
(</text>
</g>
<g class="optional">
<path d=" M 97 66 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 121 66 h 12 m 100 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -100 m 53 0 l 5 -5 m 0 10 l -5 -5 m -53 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroMatch">
<g class="nonterminal">
<rect height="22" width="100" x="133" y="55"/>
<text x="183" y="71">
MacroMatch</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="279" y="55"/>
<text x="293" y="71">
)</text>
</g>
<path d=" M 87 66 h 10"/>
<path d=" M 269 66 h 10"/>
</g>
<path d=" M 35 66 a 12 12 0 0 1 12 12 v 22 m 272 0 v -22 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 112 v 46 m 272 0 v -46"/>
<path d=" M 47 100 v 12 a 12 12 0 0 0 12 12 m 248 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="113"/>
<text x="73" y="129">
[</text>
</g>
<g class="optional">
<path d=" M 97 124 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 121 124 h 12 m 100 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -100 m 53 0 l 5 -5 m 0 10 l -5 -5 m -53 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroMatch">
<g class="nonterminal">
<rect height="22" width="100" x="133" y="113"/>
<text x="183" y="129">
MacroMatch</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="279" y="113"/>
<text x="293" y="129">
]</text>
</g>
<path d=" M 87 124 h 10"/>
<path d=" M 269 124 h 10"/>
</g>
<path d=" M 47 158 v 12 a 12 12 0 0 0 12 12 m 248 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="171"/>
<text x="73" y="187">
{</text>
</g>
<g class="optional">
<path d=" M 97 182 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 124 m -59 0 l -5 -5 m 0 10 l 5 -5 m 59 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<g class="repeat">
<path d=" M 121 182 h 12 m 100 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -100 m 53 0 l 5 -5 m 0 10 l -5 -5 m -53 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroMatch">
<g class="nonterminal">
<rect height="22" width="100" x="133" y="171"/>
<text x="183" y="187">
MacroMatch</text>
</g>
</a>
</g>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="279" y="171"/>
<text x="293" y="187">
}</text>
</g>
<path d=" M 87 182 h 10"/>
<path d=" M 269 182 h 10"/>
</g>
</g>
<path d=" M 341 66 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 66 h 10"/>
<path d=" M 331 66 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 632px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroMatch"><svg class="railroad" viewBox="0 0 632 318" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros-by-example.md#grammar-MacroMatch">
<text class="comment" x="50" y="25">
MacroMatch</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 89 h 24 m 208 0 h 330 m -162 0 l -5 -5 m 0 10 l 5 -5 m 162 0"/>
<g class="sequence">
<g class="labeledbox">
<rect height="66" width="208" x="59" y="42"/>
<path d=" M 59 89 h 8 m 60 0 h 140 m -67 0 l -5 -5 m 0 10 l 5 -5 m 67 0"/>
<text class="comment" x="163" y="65">
except `$` and delimiters</text>
<a class="link" xlink:href="tokens.md#railroad-Token">
<g class="nonterminal">
<rect height="22" width="60" x="67" y="78"/>
<text x="97" y="94">
Token</text>
</g>
</a>
</g>
</g>
<path d=" M 35 89 a 12 12 0 0 1 12 12 v 17 m 538 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 118 v 33 m 538 0 v -33"/>
<path d=" M 47 186 v 74 m 0 -34 l -5 -5 m 10 0 l -5 5 m 0 34 m 538 0 v -74 m 0 40 l -5 5 m 10 0 l -5 -5 m 0 -40"/>
<path d=" M 47 118 v 0 a 12 12 0 0 0 12 12 m 116 0 h 398 m -196 0 l -5 -5 m 0 10 l 5 -5 m 196 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<a class="link" xlink:href="macros-by-example.md#railroad-MacroMatcher">
<g class="nonterminal">
<rect height="22" width="116" x="59" y="119"/>
<text x="117" y="135">
MacroMatcher</text>
</g>
</a>
</g>
<path d=" M 47 151 v 35 a 12 12 0 0 0 12 12 m 470 0 h 44 a 12 12 0 0 0 12 -12 v -35"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="187"/>
<text x="73" y="203">
$</text>
</g>
<g class="choice">
<path d=" M 97 198 h 24 m 212 0 h 24"/>
<g class="labeledbox">
<rect height="66" width="212" x="121" y="151"/>
<path d=" M 121 198 h 8 m 196 0 h 8"/>
<text class="comment" x="183" y="174">
except `crate`</text>
<a class="link" xlink:href="identifiers.md#railroad-IDENTIFIER_OR_KEYWORD">
<g class="nonterminal">
<rect height="22" width="196" x="129" y="187"/>
<text x="227" y="203">
IDENTIFIER_OR_KEYWORD</text>
</g>
</a>
</g>
<path d=" M 97 198 a 12 12 0 0 1 12 12 v 17 m 236 0 v -17 a 12 12 0 0 1 12 -12"/>
<path d=" M 109 227 v 0 a 12 12 0 0 0 12 12 m 132 0 h 80 m -37 0 l -5 -5 m 0 10 l 5 -5 m 37 0 a 12 12 0 0 0 12 -12 v 0"/>
<a class="link" xlink:href="identifiers.md#railroad-RAW_IDENTIFIER">
<g class="nonterminal">
<rect height="22" width="132" x="121" y="228"/>
<text x="187" y="244">
RAW_IDENTIFIER</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="367" y="187"/>
<text x="381" y="203">
:</text>
</g>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroFragSpec">
<g class="nonterminal">
<rect height="22" width="124" x="405" y="187"/>
<text x="467" y="203">
MacroFragSpec</text>
</g>
</a>
<path d=" M 87 198 h 10"/>
<path d=" M 357 198 h 10"/>
<path d=" M 395 198 h 10"/>
</g>
<path d=" M 47 260 v 12 a 12 12 0 0 0 12 12 m 514 0 h 0 a 12 12 0 0 0 12 -12 v -12"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="273"/>
<text x="73" y="289">
$</text>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="97" y="273"/>
<text x="111" y="289">
(</text>
</g>
<g class="repeat">
<path d=" M 135 284 h 12 m 100 0 h 12 m -12 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 1 -12 12 m 0 0 h -100 m 53 0 l 5 -5 m 0 10 l -5 -5 m -53 0 a 12 12 0 0 1 -12 -12 v 0 a 12 12 0 0 1 12 -12"/>
<g/>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroMatch">
<g class="nonterminal">
<rect height="22" width="100" x="147" y="273"/>
<text x="197" y="289">
MacroMatch</text>
</g>
</a>
</g>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="269" y="273"/>
<text x="283" y="289">
)</text>
</g>
<g class="optional">
<path d=" M 307 284 h 24 m -24 0 a 12 12 0 0 0 12 -12 v 0 a 12 12 0 0 1 12 -12 h 108 m -51 0 l -5 -5 m 0 10 l 5 -5 m 51 0 a 12 12 0 0 1 12 12 v 0 a 12 12 0 0 0 12 12 h -24"/>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroRepSep">
<g class="nonterminal">
<rect height="22" width="108" x="331" y="273"/>
<text x="385" y="289">
MacroRepSep</text>
</g>
</a>
</g>
<a class="link" xlink:href="macros-by-example.md#railroad-MacroRepOp">
<g class="nonterminal">
<rect height="22" width="100" x="473" y="273"/>
<text x="523" y="289">
MacroRepOp</text>
</g>
</a>
<path d=" M 87 284 h 10"/>
<path d=" M 125 284 h 10"/>
<path d=" M 259 284 h 10"/>
<path d=" M 297 284 h 10"/>
<path d=" M 463 284 h 10"/>
</g>
</g>
<path d=" M 607 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 597 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 210px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroFragSpec"><svg class="railroad" viewBox="0 0 210 536" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros-by-example.md#grammar-MacroFragSpec">
<text class="comment" x="60" y="25">
MacroFragSpec</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 60 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="59" y="42"/>
<text x="89" y="58">
block</text>
</g>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 116 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 116 0 v -33"/>
<path d=" M 47 107 v 33 m 116 0 v -33"/>
<path d=" M 47 140 v 33 m 116 0 v -33"/>
<path d=" M 47 173 v 33 m 116 0 v -33"/>
<path d=" M 47 206 v 33 m 116 0 v -33"/>
<path d=" M 47 239 v 33 m 116 0 v -33"/>
<path d=" M 47 272 v 33 m 116 0 v -33"/>
<path d=" M 47 305 v 33 m 116 0 v -33"/>
<path d=" M 47 338 v 33 m 116 0 v -33"/>
<path d=" M 47 371 v 33 m 116 0 v -33"/>
<path d=" M 47 404 v 33 m 116 0 v -33"/>
<path d=" M 47 437 v 33 m 116 0 v -33"/>
<path d=" M 47 470 v 33 m 116 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 52 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="75"/>
<text x="85" y="91">
expr</text>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 92 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="92" x="59" y="108"/>
<text x="105" y="124">
expr_2021</text>
</g>
<path d=" M 47 140 v 0 a 12 12 0 0 0 12 12 m 60 0 h 32 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="60" x="59" y="141"/>
<text x="89" y="157">
ident</text>
</g>
<path d=" M 47 173 v 0 a 12 12 0 0 0 12 12 m 52 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="174"/>
<text x="85" y="190">
item</text>
</g>
<path d=" M 47 206 v 0 a 12 12 0 0 0 12 12 m 84 0 h 8 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="84" x="59" y="207"/>
<text x="101" y="223">
lifetime</text>
</g>
<path d=" M 47 239 v 0 a 12 12 0 0 0 12 12 m 76 0 h 16 a 12 12 0 0 0 12 -12 v 0"/>
<g class="sequence">
<g class="terminal">
<rect height="22" rx="10" ry="10" width="76" x="59" y="240"/>
<text x="97" y="256">
literal</text>
</g>
</g>
<path d=" M 47 272 v 0 a 12 12 0 0 0 12 12 m 52 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="273"/>
<text x="85" y="289">
meta</text>
</g>
<path d=" M 47 305 v 0 a 12 12 0 0 0 12 12 m 44 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="306"/>
<text x="81" y="322">
pat</text>
</g>
<path d=" M 47 338 v 0 a 12 12 0 0 0 12 12 m 92 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="92" x="59" y="339"/>
<text x="105" y="355">
pat_param</text>
</g>
<path d=" M 47 371 v 0 a 12 12 0 0 0 12 12 m 52 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="372"/>
<text x="85" y="388">
path</text>
</g>
<path d=" M 47 404 v 0 a 12 12 0 0 0 12 12 m 52 0 h 40 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="52" x="59" y="405"/>
<text x="85" y="421">
stmt</text>
</g>
<path d=" M 47 437 v 0 a 12 12 0 0 0 12 12 m 36 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="438"/>
<text x="77" y="454">
tt</text>
</g>
<path d=" M 47 470 v 0 a 12 12 0 0 0 12 12 m 36 0 h 56 m -25 0 l -5 -5 m 0 10 l 5 -5 m 25 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="36" x="59" y="471"/>
<text x="77" y="487">
ty</text>
</g>
<path d=" M 47 503 v 0 a 12 12 0 0 0 12 12 m 44 0 h 48 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="44" x="59" y="504"/>
<text x="81" y="520">
vis</text>
</g>
</g>
<path d=" M 185 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 175 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 327px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroRepSep"><svg class="railroad" viewBox="0 0 327 118" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros-by-example.md#grammar-MacroRepSep">
<text class="comment" x="53" y="25">
MacroRepSep</text>
</a>
<g class="sequence">
<path d=" M 10 89 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="labeledbox">
<rect height="66" width="257" x="35" y="42"/>
<path d=" M 35 89 h 8 m 60 0 h 189 m -91 0 l -5 -5 m 0 10 l 5 -5 m 91 0"/>
<text class="comment" x="163" y="65">
except delimiters and MacroRepOp</text>
<a class="link" xlink:href="tokens.md#railroad-Token">
<g class="nonterminal">
<rect height="22" width="60" x="43" y="78"/>
<text x="73" y="94">
Token</text>
</g>
</a>
</g>
<path d=" M 302 89 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 89 h 10"/>
<path d=" M 292 89 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 146px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroRepOp"><svg class="railroad" viewBox="0 0 146 140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros-by-example.md#grammar-MacroRepOp">
<text class="comment" x="50" y="25">
MacroRepOp</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<g class="choice">
<path d=" M 35 53 h 24 m 28 0 h 24"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="42"/>
<text x="73" y="58">
*</text>
</g>
<path d=" M 35 53 a 12 12 0 0 1 12 12 v 9 m 52 0 v -9 a 12 12 0 0 1 12 -12"/>
<path d=" M 47 74 v 33 m 52 0 v -33"/>
<path d=" M 47 74 v 0 a 12 12 0 0 0 12 12 m 28 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="75"/>
<text x="73" y="91">
+</text>
</g>
<path d=" M 47 107 v 0 a 12 12 0 0 0 12 12 m 28 0 h 0 a 12 12 0 0 0 12 -12 v 0"/>
<g class="terminal">
<rect height="22" rx="10" ry="10" width="28" x="59" y="108"/>
<text x="73" y="124">
?</text>
</g>
</g>
<path d=" M 121 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 111 53 h 10"/>
</g>
</g>
</svg>
</div>
<div style="width: 202px; height: auto; max-width: 100%; max-height: 100%" class="railroad-production" id="railroad-MacroTranscriber"><svg class="railroad" viewBox="0 0 202 74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect class="railroad_canvas" height="100%" width="100%"/>
<g class="verticalgrid">
<a class="link" xlink:href="macros-by-example.md#grammar-MacroTranscriber">
<text class="comment" x="71" y="25">
MacroTranscriber</text>
</a>
<g class="sequence">
<path d=" M 10 53 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 m 10 0 h 5"/>
<a class="link" xlink:href="macros.md#railroad-DelimTokenTree">
<g class="nonterminal">
<rect height="22" width="132" x="35" y="42"/>
<text x="101" y="58">
DelimTokenTree</text>
</g>
</a>
<path d=" M 177 53 h 5 a 5 5 0 0 1 5 -5 a 5 5 0 0 1 5 5 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5"/>
<path d=" M 25 53 h 10"/>
<path d=" M 167 53 h 10"/>
</g>
</g>
</svg>
</div>
</div>

<div class="rule" id="r-macro.decl.intro"><a class="rule-link" href="#r-macro.decl.intro" title="macro.decl.intro"><span>[macro<wbr>.decl<wbr>.intro]</span></a>
</div>

`macro_rules` 允许用户以声明式方式定义语法扩展。我们称这类扩展为“示例宏”或简称“宏”。

每个示例宏都有一个名称，以及一条或多条<em>规则</em>。每条规则有两部分：<em>匹配器</em>，描述它所匹配的语法；以及<em>转录器</em>，描述将替换成功匹配的调用的语法。匹配器和转录器都必须由定界符包围。宏可以展开为表达式、语句、项（包括 trait、impl 和外部项）、类型或模式。

<div class="rule" id="r-macro.decl.transcription"><a class="rule-link" href="#r-macro.decl.transcription" title="macro.decl.transcription"><span>[macro<wbr>.decl<wbr>.transcription]</span></a>
</div>

## 转录

<div class="rule" id="r-macro.decl.transcription.intro"><a class="rule-link" href="#r-macro.decl.transcription.intro" title="macro.decl.transcription.intro"><span>[macro<wbr>.decl<wbr>.transcription<wbr>.intro]</span></a>
</div>

调用宏时，宏展开器会按名称查找宏调用，并依次尝试每条宏规则。它会转录第一个成功匹配的规则；如果这导致错误，则不会再尝试后续匹配。

<div class="rule" id="r-macro.decl.transcription.lookahead"><a class="rule-link" href="#r-macro.decl.transcription.lookahead" title="macro.decl.transcription.lookahead"><span>[macro<wbr>.decl<wbr>.transcription<wbr>.lookahead]</span></a>
</div>

匹配时不会进行向前看；如果编译器无法一次一个 token 地无歧义确定如何解析宏调用，那么这就是错误。在下面的示例中，编译器不会越过标识符向前查看下一个 token 是否为 `)`，即使那样能让它无歧义地解析该调用：

```rust,compile_fail
macro_rules! ambiguity {
    ($($i:ident)* $j:ident) => { };
}

ambiguity!(error); // Error: local ambiguity
```

<div class="rule" id="r-macro.decl.transcription.syntax"><a class="rule-link" href="#r-macro.decl.transcription.syntax" title="macro.decl.transcription.syntax"><span>[macro<wbr>.decl<wbr>.transcription<wbr>.syntax]</span></a>
</div>

在匹配器和转录器中，`$` token 用于调用宏引擎的特殊行为（下文的[元变量](#metavariables)和[重复](#repetitions)中会描述）。不属于这类调用的 token 会按字面方式匹配和转录，但有一个例外。例外是，匹配器的外层定界符会匹配任意一对定界符。因此，例如匹配器 `(())` 会匹配 `{()}`，但不会匹配 `{{}}`。字符 `$` 不能按字面方式匹配或转录。

<div class="rule" id="r-macro.decl.transcription.fragment"><a class="rule-link" href="#r-macro.decl.transcription.fragment" title="macro.decl.transcription.fragment"><span>[macro<wbr>.decl<wbr>.transcription<wbr>.fragment]</span></a>
</div>

### 转发已匹配的片段

将已匹配的片段转发给另一个示例宏时，第二个宏中的匹配器会看到该片段类型的不透明 AST。第二个宏不能用字面 token 来匹配匹配器中的这些片段，只能使用相同类型的片段说明符。`ident`、`lifetime` 和 `tt` 片段类型是例外，<em>可以</em>由字面 token 匹配。下面展示了这一限制：

```rust,compile_fail
macro_rules! foo {
    ($l:expr) => { bar!($l); }
// ERROR:               ^^ no rules expected this token in macro call
}

macro_rules! bar {
    (3) => {}
}

foo!(3);
```

下面展示了在匹配 `tt` 片段之后，token 如何可以被直接匹配：

```rust
// compiles OK
macro_rules! foo {
    ($l:tt) => { bar!($l); }
}

macro_rules! bar {
    (3) => {}
}

foo!(3);
```

<div class="rule" id="r-macro.decl.meta"><a class="rule-link" href="#r-macro.decl.meta" title="macro.decl.meta"><span>[macro<wbr>.decl<wbr>.meta]</span></a>
</div>

## 元变量

<div class="rule" id="r-macro.decl.meta.intro"><a class="rule-link" href="#r-macro.decl.meta.intro" title="macro.decl.meta.intro"><span>[macro<wbr>.decl<wbr>.meta<wbr>.intro]</span></a>
</div>

在匹配器中，`$`<em>name</em>`:`<em>fragment-specifier</em> 会匹配指定种类的 Rust 语法片段，并将其绑定到元变量 `$`<em>name</em>。

<div class="rule" id="r-macro.decl.meta.specifier"><a class="rule-link" href="#r-macro.decl.meta.specifier" title="macro.decl.meta.specifier"><span>[macro<wbr>.decl<wbr>.meta<wbr>.specifier]</span></a>
</div>

有效的片段说明符包括：

- `block`：一个 [BlockExpressionNoInnerAttributes](expressions/block-expr.md#grammar-BlockExpressionNoInnerAttributes)
- `expr`：一个 [Expression](expressions.md#grammar-Expression)
- `expr_2021`：一个 [Expression](expressions.md#grammar-Expression)，但不包括 [UnderscoreExpression](expressions/underscore-expr.md#grammar-UnderscoreExpression) 和 [ConstBlockExpression](expressions/block-expr.md#grammar-ConstBlockExpression)（见 [macro.decl.meta.edition2024](macros-by-example.md#r-macro.decl.meta.edition2024)）
- `ident`：一个 [IDENTIFIER_OR_KEYWORD](identifiers.md#grammar-IDENTIFIER_OR_KEYWORD)，但不包括 `_`、[RAW_IDENTIFIER](identifiers.md#grammar-RAW_IDENTIFIER) 或 [`$crate`](macros-by-example.md#r-macro.decl.hygiene.crate)
- `item`：一个 [Item](items.md#grammar-Item)
- `lifetime`：一个 [LIFETIME_TOKEN](tokens.md#grammar-LIFETIME_TOKEN)
- `literal`：匹配 `-`<sup>?</sup>[LiteralExpression](expressions/literal-expr.md#grammar-LiteralExpression)
- `meta`：一个 [Attr](attributes.md#grammar-Attr)，即属性的内容
- `pat`：一个 [Pattern](patterns.md#grammar-Pattern)（见 [macro.decl.meta.edition2021](macros-by-example.md#r-macro.decl.meta.edition2021)）
- `pat_param`：一个 [PatternNoTopAlt](patterns.md#grammar-PatternNoTopAlt)
- `path`：一个 [TypePath](paths.md#grammar-TypePath)
- `stmt`：一个不带尾随分号的 [Statement](statements.md#grammar-Statement)（需要分号的项语句除外）
- `tt`：一个 [TokenTree](macros.md#grammar-TokenTree)（单个 [token](tokens.md)，或匹配定界符 `()`、`[]` 或 `{}` 中的 token）
- `ty`：一个 [Type](types.md#grammar-Type)
- `vis`：一个可能为空的 [Visibility](visibility-and-privacy.md#grammar-Visibility) 限定符

<div class="rule" id="r-macro.decl.meta.transcription"><a class="rule-link" href="#r-macro.decl.meta.transcription" title="macro.decl.meta.transcription"><span>[macro<wbr>.decl<wbr>.meta<wbr>.transcription]</span></a>
</div>

在转录器中，元变量只需用 `$`<em>name</em> 引用，因为片段种类已在匹配器中指定。元变量会被替换为与之匹配的语法元素。元变量可以被转录多次，也可以完全不被转录。

<div class="rule" id="r-macro.decl.meta.dollar-crate"><a class="rule-link" href="#r-macro.decl.meta.dollar-crate" title="macro.decl.meta.dollar-crate"><span>[macro<wbr>.decl<wbr>.meta<wbr>.dollar-crate]</span></a>
</div>

关键字元变量 [`$crate`](macros-by-example.md#r-macro.decl.hygiene.crate) 可用于指代当前 crate。

<div class="rule" id="r-macro.decl.meta.edition2021"><a class="rule-link" href="#r-macro.decl.meta.edition2021" title="macro.decl.meta.edition2021"><span>[macro<wbr>.decl<wbr>.meta<wbr>.edition2021]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2021</span> Edition differences</p>
 > 
 > 从 2021 edition 开始，`pat` 片段说明符会匹配顶层 or-pattern（也就是说，它们接受 [Pattern](patterns.md#grammar-Pattern)）。
 > 
 > 在 2021 edition 之前，它们匹配的片段与 `pat_param` 完全相同（也就是说，它们接受 [PatternNoTopAlt](patterns.md#grammar-PatternNoTopAlt)）。
 > 
 > 相关 edition 是 `macro_rules!` 定义所处的 edition。

</div>

<div class="rule" id="r-macro.decl.meta.edition2024"><a class="rule-link" href="#r-macro.decl.meta.edition2024" title="macro.decl.meta.edition2024"><span>[macro<wbr>.decl<wbr>.meta<wbr>.edition2024]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2024</span> Edition differences</p>
 > 
 > 在 2024 edition 之前，`expr` 片段说明符在顶层不匹配 [UnderscoreExpression](expressions/underscore-expr.md#grammar-UnderscoreExpression) 或 [ConstBlockExpression](expressions/block-expr.md#grammar-ConstBlockExpression)。它们允许出现在子表达式内部。
 > 
 > `expr_2021` 片段说明符的存在是为了维持与 2024 之前 edition 的向后兼容性。

</div>

<div class="rule" id="r-macro.decl.repetition"><a class="rule-link" href="#r-macro.decl.repetition" title="macro.decl.repetition"><span>[macro<wbr>.decl<wbr>.repetition]</span></a>
</div>

## 重复

<div class="rule" id="r-macro.decl.repetition.intro"><a class="rule-link" href="#r-macro.decl.repetition.intro" title="macro.decl.repetition.intro"><span>[macro<wbr>.decl<wbr>.repetition<wbr>.intro]</span></a>
</div>

在匹配器和转录器中，重复通过将要重复的 token 放在 `$(`…`)` 内并跟随一个重复运算符来表示，中间还可以选择性地带有一个分隔符 token。

<div class="rule" id="r-macro.decl.repetition.separator"><a class="rule-link" href="#r-macro.decl.repetition.separator" title="macro.decl.repetition.separator"><span>[macro<wbr>.decl<wbr>.repetition<wbr>.separator]</span></a>
</div>

分隔符 token 可以是除定界符或重复运算符之外的任何 token，但 `;` 和 `,` 最常见。例如，`$( $i:ident ),*` 表示任意数量的标识符，以逗号分隔。允许嵌套重复。

<div class="rule" id="r-macro.decl.repetition.operators"><a class="rule-link" href="#r-macro.decl.repetition.operators" title="macro.decl.repetition.operators"><span>[macro<wbr>.decl<wbr>.repetition<wbr>.operators]</span></a>
</div>

重复运算符包括：

- `*` —— 表示任意次数的重复。
- `+` —— 表示任意次数，但至少一次。
- `?` —— 表示出现零次或一次的可选片段。

<div class="rule" id="r-macro.decl.repetition.optional-restriction"><a class="rule-link" href="#r-macro.decl.repetition.optional-restriction" title="macro.decl.repetition.optional-restriction"><span>[macro<wbr>.decl<wbr>.repetition<wbr>.optional-restriction]</span></a>
</div>

由于 `?` 表示至多出现一次，所以它不能与分隔符一起使用。

<div class="rule" id="r-macro.decl.repetition.fragment"><a class="rule-link" href="#r-macro.decl.repetition.fragment" title="macro.decl.repetition.fragment"><span>[macro<wbr>.decl<wbr>.repetition<wbr>.fragment]</span></a>
</div>

重复片段会匹配并转录为指定数量的片段，这些片段由分隔符 token 分隔。元变量会匹配其对应片段的每一次重复。例如，上面的 `$( $i:ident ),*` 例子会将 `$i` 匹配到列表中的所有标识符。

转录期间，对重复还会施加额外限制，以便编译器知道如何正确展开它们：

1. 元变量在转录器中出现时，必须与它在匹配器中一样，处于完全相同数量、种类和嵌套顺序的重复中。因此，对于匹配器 `$( $i:ident ),*`，转录器 `=> { $i }`、`=> { $( $( $i )* )* }` 和 `=> { $( $i )+ }` 都是非法的，但 `=> { $( $i );* }` 是正确的，它会把逗号分隔的标识符列表替换为分号分隔的列表。
1. 转录器中的每个重复都必须包含至少一个元变量，以决定它应展开多少次。如果同一个重复中出现多个元变量，它们必须绑定到相同数量的片段。例如，`( $( $i:ident ),* ; $( $j:ident ),* ) => (( $( ($i,$j) ),* ))` 必须将 `$i` 片段和 `$j` 片段绑定到相同数量。这意味着用 `(a, b, c; d, e, f)` 调用该宏是合法的，并会展开为 `((a,d), (b,e), (c,f))`，但 `(a, b, c; d, e)` 是非法的，因为它们的数量不相同。此要求适用于嵌套重复的每一层。

<div class="rule" id="r-macro.decl.scope"><a class="rule-link" href="#r-macro.decl.scope" title="macro.decl.scope"><span>[macro<wbr>.decl<wbr>.scope]</span></a>
</div>

## 作用域、导出和导入

<div class="rule" id="r-macro.decl.scope.intro"><a class="rule-link" href="#r-macro.decl.scope.intro" title="macro.decl.scope.intro"><span>[macro<wbr>.decl<wbr>.scope<wbr>.intro]</span></a>
</div>

由于历史原因，示例宏的作用域并不完全像项那样工作。宏有两种形式的作用域：文本作用域和基于路径的作用域。文本作用域基于事物在源文件中出现的顺序，甚至可以跨多个文件，并且是默认作用域。下文会进一步说明它。基于路径的作用域与项作用域的工作方式完全相同。宏的作用域、导出和导入很大程度上由属性控制。

<div class="rule" id="r-macro.decl.scope.unqualified"><a class="rule-link" href="#r-macro.decl.scope.unqualified" title="macro.decl.scope.unqualified"><span>[macro<wbr>.decl<wbr>.scope<wbr>.unqualified]</span></a>
</div>

当通过非限定标识符（不是多段路径的一部分）调用宏时，会首先在文本作用域中查找。如果这没有产生任何结果，则会在基于路径的作用域中查找。如果宏的名称带有路径限定，则只会在基于路径的作用域中查找。

<!-- ignore: requires external crates -->

```rust,ignore
use lazy_static::lazy_static; // Path-based import.

macro_rules! lazy_static { // Textual definition.
    (lazy) => {};
}

lazy_static!{lazy} // Textual lookup finds our macro first.
self::lazy_static!{} // Path-based lookup ignores our macro, finds imported one.
```

<div class="rule" id="r-macro.decl.scope.textual"><a class="rule-link" href="#r-macro.decl.scope.textual" title="macro.decl.scope.textual"><span>[macro<wbr>.decl<wbr>.scope<wbr>.textual]</span></a>
</div>

### 文本作用域

<div class="rule" id="r-macro.decl.scope.textual.intro"><a class="rule-link" href="#r-macro.decl.scope.textual.intro" title="macro.decl.scope.textual.intro"><span>[macro<wbr>.decl<wbr>.scope<wbr>.textual<wbr>.intro]</span></a>
</div>

文本作用域很大程度上基于事物在源文件中出现的顺序，其工作方式类似于用 `let` 声明的局部变量的作用域，只不过它也适用于模块级别。当使用 `macro_rules!` 定义宏时，该宏会在定义之后进入作用域（注意，它仍然可以递归使用，因为名称是从调用位置查找的），直到其外围作用域（通常是一个模块）闭合为止。这可以进入子模块，甚至跨越多个文件：

<!-- ignore: requires external modules -->

```rust,ignore
//// src/lib.rs
mod has_macro {
    // m!{} // Error: m is not in scope.

    macro_rules! m {
        () => {};
    }
    m!{} // OK: appears after declaration of m.

    mod uses_macro;
}

// m!{} // Error: m is not in scope.

//// src/has_macro/uses_macro.rs

m!{} // OK: appears after declaration of m in src/lib.rs
```

<div class="rule" id="r-macro.decl.scope.textual.shadow"><a class="rule-link" href="#r-macro.decl.scope.textual.shadow" title="macro.decl.scope.textual.shadow"><span>[macro<wbr>.decl<wbr>.scope<wbr>.textual<wbr>.shadow]</span></a>
</div>

多次定义同一个宏并不是错误；除非最近的声明已经离开作用域，否则它会遮蔽之前的声明。

```rust
macro_rules! m {
    (1) => {};
}

m!(1);

mod inner {
    m!(1);

    macro_rules! m {
        (2) => {};
    }
    // m!(1); // Error: no rule matches '1'
    m!(2);

    macro_rules! m {
        (3) => {};
    }
    m!(3);
}

m!(1);
```

宏也可以在函数内部局部声明和使用，其工作方式类似：

```rust
fn foo() {
    // m!(); // Error: m is not in scope.
    macro_rules! m {
        () => {};
    }
    m!();
}

// m!(); // Error: m is not in scope.
```

<div class="rule" id="r-macro.decl.scope.textual.shadow.path-based"><a class="rule-link" href="#r-macro.decl.scope.textual.shadow.path-based" title="macro.decl.scope.textual.shadow.path-based"><span>[macro<wbr>.decl<wbr>.scope<wbr>.textual<wbr>.shadow<wbr>.path-based]</span></a>
</div>

宏的文本作用域名称绑定会遮蔽宏的基于路径的作用域绑定。

```rust
macro_rules! m2 {
    () => {
        println!("m2");
    };
}

// Resolves to path-based candidate from use declaration below.
m!(); // prints "m2\n"

// Introduce second candidate for `m` with textual scope.
//
// This shadows path-based candidate from below for the rest of this
// example.
macro_rules! m {
    () => {
        println!("m");
    };
}

// Introduce `m2` macro as path-based candidate.
//
// This item is in scope for this entire example, not just below the
// use declaration.
use m2 as m;

// Resolves to the textual macro candidate from above the use
// declaration.
m!(); // prints "m\n"
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 对于不允许遮蔽的区域，见[名称解析歧义](names/name-resolution.md#r-names.resolution.expansion.imports.ambiguity)。

</div>

<div class="rule" id="r-macro.decl.scope.path-based"><a class="rule-link" href="#r-macro.decl.scope.path-based" title="macro.decl.scope.path-based"><span>[macro<wbr>.decl<wbr>.scope<wbr>.path-based]</span></a>
</div>

### 基于路径的作用域

<div class="rule" id="r-macro.decl.scope.path-based.intro"><a class="rule-link" href="#r-macro.decl.scope.path-based.intro" title="macro.decl.scope.path-based.intro"><span>[macro<wbr>.decl<wbr>.scope<wbr>.path-based<wbr>.intro]</span></a>
</div>

默认情况下，宏没有基于路径的作用域。宏可以通过两种方式获得基于路径的作用域：

- [use 声明重导出](items/use-declarations.md#use-visibility)
- [`macro_export`](#the-macro_export-attribute)

<div class="rule" id="r-macro.decl.scope.path.reexport"><a class="rule-link" href="#r-macro.decl.scope.path.reexport" title="macro.decl.scope.path.reexport"><span>[macro<wbr>.decl<wbr>.scope<wbr>.path<wbr>.reexport]</span></a>
</div>

宏可以被重导出，从而让它们从 crate 根以外的模块获得基于路径的作用域。

```rust
mac::m!(); // OK: Path-based lookup finds `m` in the mac module.

mod mac {
    // Introduce macro `m` with textual scope.
    macro_rules! m {
        () => {};
    }

    // Reexport with path-based scope from within `m`'s textual scope.
    pub(crate) use m;
}
```

<div class="rule" id="r-macro.decl.scope.path-based.visibility"><a class="rule-link" href="#r-macro.decl.scope.path-based.visibility" title="macro.decl.scope.path-based.visibility"><span>[macro<wbr>.decl<wbr>.scope<wbr>.path-based<wbr>.visibility]</span></a>
</div>

宏具有隐式的 `pub(crate)` 可见性。`#[macro_export]` 会将隐式可见性改为 `pub`。

```rust
// Implicit visibility is `pub(crate)`.
macro_rules! private_m {
    () => {};
}

// Implicit visibility is `pub`.
#[macro_export]
macro_rules! pub_m {
    () => {};
}

pub(crate) use private_m as private_macro; // OK.
pub use pub_m as pub_macro; // OK.
```

```rust,compile_fail,E0364
# // Implicit visibility is `pub(crate)`.
# macro_rules! private_m {
#     () => {};
# }
#
# // Implicit visibility is `pub`.
# #[macro_export]
# macro_rules! pub_m {
#     () => {};
# }
#
# pub(crate) use private_m as private_macro; // OK.
# pub use pub_m as pub_macro; // OK.
#
pub use private_m; // ERROR: `private_m` is only public within
                   // the crate and cannot be re-exported outside.
```

<!-- template:attributes -->

<div class="rule" id="r-macro.decl.scope.macro_use"><a class="rule-link" href="#r-macro.decl.scope.macro_use" title="macro.decl.scope.macro_use"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_use]</span></a>
</div>

### `macro_use` 属性

<div class="rule" id="r-macro.decl.scope.macro_use.intro"><a class="rule-link" href="#r-macro.decl.scope.macro_use.intro" title="macro.decl.scope.macro_use.intro"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_use<wbr>.intro]</span></a>
</div>

<em>`macro_use` [属性](attributes.md#r-attributes)</em>有两个用途：它可以用在模块上，以扩展其中定义的宏的作用域；也可以用在 [`extern crate`](items/extern-crates.md#r-items.extern-crate) 上，以将另一个 crate 中的宏导入 [`macro_use` prelude](names/preludes.md#macro_use-prelude)。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > #[macro_use]
 > mod inner {
 >     macro_rules! m {
 >         () => {};
 >     }
 > }
 > m!();
 > ```
 > 
 > ```rust,ignore
 > #[macro_use]
 > extern crate log;
 > ```

</div>

<div class="rule" id="r-macro.decl.scope.macro_use.syntax"><a class="rule-link" href="#r-macro.decl.scope.macro_use.syntax" title="macro.decl.scope.macro_use.syntax"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_use<wbr>.syntax]</span></a>
</div>

用在模块上时，`macro_use` 属性使用 [MetaWord](attributes.md#grammar-MetaWord) 语法。

用在 `extern crate` 上时，它使用 [MetaWord](attributes.md#grammar-MetaWord) 和 [MetaListIdents](attributes.md#grammar-MetaListIdents) 语法。关于这些语法可如何使用的更多信息，见 [macro.decl.scope.macro_use.prelude](macros-by-example.md#r-macro.decl.scope.macro_use.prelude)。

<div class="rule" id="r-macro.decl.scope.macro_use.allowed-positions"><a class="rule-link" href="#r-macro.decl.scope.macro_use.allowed-positions" title="macro.decl.scope.macro_use.allowed-positions"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_use<wbr>.allowed-positions]</span></a>
</div>

`macro_use` 属性可以应用于模块或 `extern crate`。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="rule" id="r-macro.decl.scope.macro_use.extern-crate-self"><a class="rule-link" href="#r-macro.decl.scope.macro_use.extern-crate-self" title="macro.decl.scope.macro_use.extern-crate-self"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_use<wbr>.extern-crate-self]</span></a>
</div>

`macro_use` 属性不能用于 [`extern crate self`](items/extern-crates.md#r-items.extern-crate.self)。

<div class="rule" id="r-macro.decl.scope.macro_use.duplicates"><a class="rule-link" href="#r-macro.decl.scope.macro_use.duplicates" title="macro.decl.scope.macro_use.duplicates"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_use<wbr>.duplicates]</span></a>
</div>

`macro_use` 属性可以在一个形式上使用任意多次。

可以指定多个使用 [MetaListIdents](attributes.md#grammar-MetaListIdents) 语法的 `macro_use` 实例。所有指定宏的并集将被导入。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 在模块上，`rustc` 会对第一个之后的任何 [MetaWord](attributes.md#grammar-MetaWord) `macro_use` 属性发出 lint。
 > 
 > 在 `extern crate` 上，`rustc` 会对任何无效果的 `macro_use` 属性发出 lint；这些属性之所以无效果，是因为它们没有导入任何尚未由另一个 `macro_use` 属性导入的宏。如果两个或更多 [MetaListIdents](attributes.md#grammar-MetaListIdents) `macro_use` 属性导入同一个宏，则会对第一个发出 lint。如果存在任何 [MetaWord](attributes.md#grammar-MetaWord) `macro_use` 属性，则会对所有 [MetaListIdents](attributes.md#grammar-MetaListIdents) `macro_use` 属性发出 lint。如果存在两个或更多 [MetaWord](attributes.md#grammar-MetaWord) `macro_use` 属性，则会对第一个之后的那些发出 lint。

</div>

<div class="rule" id="r-macro.decl.scope.macro_use.mod-decl"><a class="rule-link" href="#r-macro.decl.scope.macro_use.mod-decl" title="macro.decl.scope.macro_use.mod-decl"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_use<wbr>.mod-decl]</span></a>
</div>

当 `macro_use` 用在模块上时，该模块的宏作用域会延伸到模块的词法作用域之外。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > #[macro_use]
 > mod inner {
 >     macro_rules! m {
 >         () => {};
 >     }
 > }
 > m!(); // OK
 > ```

</div>

<div class="rule" id="r-macro.decl.scope.macro_use.prelude"><a class="rule-link" href="#r-macro.decl.scope.macro_use.prelude" title="macro.decl.scope.macro_use.prelude"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_use<wbr>.prelude]</span></a>
</div>

在 crate 根中的 `extern crate` 声明上指定 `macro_use`，会从该 crate 导入已导出的宏。

以这种方式导入的宏会导入到 [`macro_use` prelude](names/preludes.md#macro_use-prelude)，而不是按文本方式导入；这意味着它们可以被任何其他名称遮蔽。由 `macro_use` 导入的宏可以在导入语句之前使用。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 发生冲突时，`rustc` 目前偏向最后导入的宏。不要依赖这一点。此行为并不寻常，因为 Rust 中的导入通常与顺序无关。`macro_use` 的此行为将来可能会改变。
 > 
 > 详情见 [Rust issue #148025](https://github.com/rust-lang/rust/issues/148025)。

</div>

使用 [MetaWord](attributes.md#grammar-MetaWord) 语法时，会导入所有已导出的宏。使用 [MetaListIdents](attributes.md#grammar-MetaListIdents) 语法时，只会导入指定的宏。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > <!-- ignore: requires external crates -->
 > 
 > ```rust,ignore
 > #[macro_use(lazy_static)] // Or `#[macro_use]` to import all macros.
 > extern crate lazy_static;
 > 
 > lazy_static!{}
 > // self::lazy_static!{} // ERROR: lazy_static is not defined in `self`.
 > ```

</div>

<div class="rule" id="r-macro.decl.scope.macro_use.export"><a class="rule-link" href="#r-macro.decl.scope.macro_use.export" title="macro.decl.scope.macro_use.export"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_use<wbr>.export]</span></a>
</div>

要用 `macro_use` 导入的宏必须用 [`macro_export`](macros-by-example.md#r-macro.decl.scope.macro_export) 导出。

<!-- template:attributes -->

<div class="rule" id="r-macro.decl.scope.macro_export"><a class="rule-link" href="#r-macro.decl.scope.macro_export" title="macro.decl.scope.macro_export"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_export]</span></a>
</div>

### `macro_export` 属性

<div class="rule" id="r-macro.decl.scope.macro_export.intro"><a class="rule-link" href="#r-macro.decl.scope.macro_export.intro" title="macro.decl.scope.macro_export.intro"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_export<wbr>.intro]</span></a>
</div>

<em>`macro_export` [属性](attributes.md#r-attributes)</em>会从 crate 中导出宏，并使其可在 crate 根中用于基于路径的解析。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > self::m!();
 > //  ^^^^ OK: Path-based lookup finds `m` in the current module.
 > m!(); // As above.
 > 
 > mod inner {
 >     super::m!();
 >     crate::m!();
 > }
 > 
 > mod mac {
 >     #[macro_export]
 >     macro_rules! m {
 >         () => {};
 >     }
 > }
 > ```

</div>

<div class="rule" id="r-macro.decl.scope.macro_export.syntax"><a class="rule-link" href="#r-macro.decl.scope.macro_export.syntax" title="macro.decl.scope.macro_export.syntax"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_export<wbr>.syntax]</span></a>
</div>

`macro_export` 属性使用 [MetaWord](attributes.md#grammar-MetaWord) 和 [MetaListIdents](attributes.md#grammar-MetaListIdents) 语法。使用 [MetaListIdents](attributes.md#grammar-MetaListIdents) 语法时，它接受单个 [`local_inner_macros`](macros-by-example.md#r-macro.decl.scope.macro_export.local_inner_macros) 值。

<div class="rule" id="r-macro.decl.scope.macro_export.allowed-positions"><a class="rule-link" href="#r-macro.decl.scope.macro_export.allowed-positions" title="macro.decl.scope.macro_export.allowed-positions"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_export<wbr>.allowed-positions]</span></a>
</div>

`macro_export` 属性可以应用于 `macro_rules` 定义。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会忽略在其他位置的使用，但会对此发出 lint。将来这可能会变成错误。

</div>

<div class="rule" id="r-macro.decl.scope.macro_export.duplicates"><a class="rule-link" href="#r-macro.decl.scope.macro_export.duplicates" title="macro.decl.scope.macro_export.duplicates"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_export<wbr>.duplicates]</span></a>
</div>

在一个宏上，只有第一次使用 `macro_export` 会有效果。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > `rustc` 会对第一次之后的任何使用发出 lint。

</div>

<div class="rule" id="r-macro.decl.scope.macro_export.path-based"><a class="rule-link" href="#r-macro.decl.scope.macro_export.path-based" title="macro.decl.scope.macro_export.path-based"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_export<wbr>.path-based]</span></a>
</div>

默认情况下，宏只有[文本作用域](macros-by-example.md#r-macro.decl.scope.textual)，不能通过路径解析。使用 `macro_export` 属性时，宏会在 crate 根中可用，并且可以通过它的路径引用。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 没有 `macro_export` 时，宏只有文本作用域，因此该宏的基于路径的解析会失败。
 > 
 > ```rust,compile_fail,E0433
 > macro_rules! m {
 >     () => {};
 > }
 > self::m!(); // ERROR
 > crate::m!(); // ERROR
 > # fn main() {}
 > ```
 > 
 > 有了 `macro_export`，基于路径的解析就能工作。
 > 
 > ```rust
 > #[macro_export]
 > macro_rules! m {
 >     () => {};
 > }
 > self::m!(); // OK
 > crate::m!(); // OK
 > # fn main() {}
 > ```

</div>

<div class="rule" id="r-macro.decl.scope.macro_export.export"><a class="rule-link" href="#r-macro.decl.scope.macro_export.export" title="macro.decl.scope.macro_export.export"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_export<wbr>.export]</span></a>
</div>

`macro_export` 属性会使宏从 crate 根导出，从而可以在其他 crate 中通过路径引用它。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 给定 `log` crate 中的以下内容：
 > 
 > ```rust
 > #[macro_export]
 > macro_rules! warn {
 >     ($message:expr) => { eprintln!("WARN: {}", $message) };
 > }
 > ```
 > 
 > 在另一个 crate 中，可以通过路径引用该宏：
 > 
 > <!-- ignore: requires external crates -->
 > 
 > ```rust,ignore
 > fn main() {
 >     log::warn!("example warning");
 > }
 > ```

</div>

<div class="rule" id="r-macro.decl.scope.macro_export.macro_use"><a class="rule-link" href="#r-macro.decl.scope.macro_export.macro_use" title="macro.decl.scope.macro_export.macro_use"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_export<wbr>.macro_use]</span></a>
</div>

`macro_export` 允许在 `extern crate` 上使用 [`macro_use`](macros-by-example.md#r-macro.decl.scope.macro_use)，以将该宏导入 [`macro_use` prelude](names/preludes.md#macro_use-prelude)。

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > 给定 `log` crate 中的以下内容：
 > 
 > ```rust
 > #[macro_export]
 > macro_rules! warn {
 >     ($message:expr) => { eprintln!("WARN: {}", $message) };
 > }
 > ```
 > 
 > 在依赖 crate 中使用 `macro_use`，可以让你从 prelude 使用该宏：
 > 
 > <!-- ignore: requires external crates -->
 > 
 > ```rust,ignore
 > #[macro_use]
 > extern crate log;
 > 
 > pub mod util {
 >     pub fn do_thing() {
 >         // Resolved via macro prelude.
 >         warn!("example warning");
 >     }
 > }
 > ```

</div>

<div class="rule" id="r-macro.decl.scope.macro_export.local_inner_macros"><a class="rule-link" href="#r-macro.decl.scope.macro_export.local_inner_macros" title="macro.decl.scope.macro_export.local_inner_macros"><span>[macro<wbr>.decl<wbr>.scope<wbr>.macro_export<wbr>.local_inner_macros]</span></a>
</div>

向 `macro_export` 属性添加 `local_inner_macros`，会使宏定义中的所有单段宏调用都带有隐式的 `$crate::` 前缀。

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 这主要是作为一种迁移工具，用于迁移在 [`$crate`](macros-by-example.md#r-macro.decl.hygiene.crate) 加入语言之前编写的代码，使其能够与 Rust 2018 的基于路径的宏导入配合工作。不鼓励在新代码中使用它。

</div>

<div class="alert alert-example">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>Example</p>
 > 
 > ```rust
 > #[macro_export(local_inner_macros)]
 > macro_rules! helped {
 >     () => { helper!() } // Automatically converted to $crate::helper!().
 > }
 > 
 > #[macro_export]
 > macro_rules! helper {
 >     () => { () }
 > }
 > ```

</div>

<div class="rule" id="r-macro.decl.hygiene"><a class="rule-link" href="#r-macro.decl.hygiene" title="macro.decl.hygiene"><span>[macro<wbr>.decl<wbr>.hygiene]</span></a>
</div>

## 卫生性

<div class="rule" id="r-macro.decl.hygiene.intro"><a class="rule-link" href="#r-macro.decl.hygiene.intro" title="macro.decl.hygiene.intro"><span>[macro<wbr>.decl<wbr>.hygiene<wbr>.intro]</span></a>
</div>

示例宏具有<em>混合位置卫生性</em>。这意味着[循环标签](expressions/loop-expr.md#loop-labels)、[块标签](expressions/loop-expr.md#r-expr.loop.block-labels) 和局部变量会在宏定义位置查找，而其他符号会在宏调用位置查找。例如：

```rust
let x = 1;
fn func() {
    unreachable!("this is never called")
}

macro_rules! check {
    () => {
        assert_eq!(x, 1); // Uses `x` from the definition site.
        func();           // Uses `func` from the invocation site.
    };
}

{
    let x = 2;
    fn func() { /* does not panic */ }
    check!();
}
```

宏展开中定义的标签和局部变量不会在各次调用之间共享，因此这段代码无法编译：

```rust,compile_fail,E0425
macro_rules! m {
    (define) => {
        let x = 1;
    };
    (refer) => {
        dbg!(x);
    };
}

m!(define);
m!(refer);
```

<div class="rule" id="r-macro.decl.hygiene.crate"><a class="rule-link" href="#r-macro.decl.hygiene.crate" title="macro.decl.hygiene.crate"><span>[macro<wbr>.decl<wbr>.hygiene<wbr>.crate]</span></a>
</div>

一个特殊情况是 `$crate` 元变量。它指代定义该宏的 crate，并且可以用在路径开头，用于查找在调用位置不在作用域内的条目或宏。

<!-- ignore: requires external crates -->

```rust,ignore
//// Definitions in the `helper_macro` crate.
#[macro_export]
macro_rules! helped {
    // () => { helper!() } // This might lead to an error due to 'helper' not being in scope.
    () => { $crate::helper!() }
}

#[macro_export]
macro_rules! helper {
    () => { () }
}

//// Usage in another crate.
// Note that `helper_macro::helper` is not imported!
use helper_macro::helped;

fn unit() {
    helped!();
}
```

注意，因为 `$crate` 指代当前 crate，所以引用非宏条目时必须将它与完全限定模块路径一起使用：

```rust
pub mod inner {
    #[macro_export]
    macro_rules! call_foo {
        () => { $crate::inner::foo() };
    }

    pub fn foo() {}
}
```

<div class="rule" id="r-macro.decl.hygiene.vis"><a class="rule-link" href="#r-macro.decl.hygiene.vis" title="macro.decl.hygiene.vis"><span>[macro<wbr>.decl<wbr>.hygiene<wbr>.vis]</span></a>
</div>

此外，即使 `$crate` 允许宏在展开时引用其自身 crate 内的条目，它的使用也不会影响可见性。被引用的条目或宏仍然必须从调用位置可见。在下面的示例中，任何从其 crate 外部调用 `call_foo!()` 的尝试都会失败，因为 `foo()` 不是公开的。

```rust
#[macro_export]
macro_rules! call_foo {
    () => { $crate::foo() };
}

fn foo() {}
```

<div class="alert alert-note">

 > 
 > <p class="alert-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
 > 
 > 在 Rust 1.30 之前，`$crate` 和 [`local_inner_macros`](macros-by-example.md#r-macro.decl.scope.macro_export.local_inner_macros) 尚不受支持。它们是与[宏的基于路径的导入](macros-by-example.md#r-macro.decl.scope.macro_export)一同加入的，以确保导出宏的 crate 的用户不需要手动导入辅助宏。为较早 Rust 版本编写且使用辅助宏的 crate，需要修改为使用 `$crate` 或 `local_inner_macros`，才能与基于路径的导入良好配合。

</div>

<div class="rule" id="r-macro.decl.follow-set"><a class="rule-link" href="#r-macro.decl.follow-set" title="macro.decl.follow-set"><span>[macro<wbr>.decl<wbr>.follow-set]</span></a>
</div>

## Follow 集歧义限制

<div class="rule" id="r-macro.decl.follow-set.intro"><a class="rule-link" href="#r-macro.decl.follow-set.intro" title="macro.decl.follow-set.intro"><span>[macro<wbr>.decl<wbr>.follow-set<wbr>.intro]</span></a>
</div>

宏系统使用的解析器相当强大，但为了防止当前或未来语言版本中的歧义，它也受到限制。

<div class="rule" id="r-macro.decl.follow-set.token-restriction"><a class="rule-link" href="#r-macro.decl.follow-set.token-restriction" title="macro.decl.follow-set.token-restriction"><span>[macro<wbr>.decl<wbr>.follow-set<wbr>.token-restriction]</span></a>
</div>

特别是，除了关于歧义展开的规则外，由元变量匹配的非终结符后面必须跟随一个已被判定可安全用于该类匹配之后的 token。

举例来说，像 `$i:expr [ , ]` 这样的宏匹配器在今天的 Rust 中理论上可以被接受，因为 `[,]` 不能成为合法表达式的一部分，因此解析总是无歧义的。不过，因为 `[` 可以开始尾随表达式，不能安全地排除 `[` 出现在表达式之后的可能性。如果在较后的 Rust 版本中接受了 `[,]`，这个匹配器就会变得有歧义，或被错误解析，从而破坏可工作的代码。不过，像 `$i:expr,` 或 `$i:expr;` 这样的匹配器是合法的，因为 `,` 和 `;` 是合法的表达式分隔符。具体规则如下：

<div class="rule" id="r-macro.decl.follow-set.token-expr-stmt"><a class="rule-link" href="#r-macro.decl.follow-set.token-expr-stmt" title="macro.decl.follow-set.token-expr-stmt"><span>[macro<wbr>.decl<wbr>.follow-set<wbr>.token-expr-stmt]</span></a>
</div>

- `expr` 和 `stmt` 后面只能跟随以下之一：`=>`、`,` 或 `;`。

<div class="rule" id="r-macro.decl.follow-set.token-pat_param"><a class="rule-link" href="#r-macro.decl.follow-set.token-pat_param" title="macro.decl.follow-set.token-pat_param"><span>[macro<wbr>.decl<wbr>.follow-set<wbr>.token-pat_param]</span></a>
</div>

- `pat_param` 后面只能跟随以下之一：`=>`、`,`、`=`、`|`、`if` 或 `in`。

<div class="rule" id="r-macro.decl.follow-set.token-pat"><a class="rule-link" href="#r-macro.decl.follow-set.token-pat" title="macro.decl.follow-set.token-pat"><span>[macro<wbr>.decl<wbr>.follow-set<wbr>.token-pat]</span></a>
</div>

- `pat` 后面只能跟随以下之一：`=>`、`,`、`=`、`if` 或 `in`。

<div class="rule" id="r-macro.decl.follow-set.token-path-ty"><a class="rule-link" href="#r-macro.decl.follow-set.token-path-ty" title="macro.decl.follow-set.token-path-ty"><span>[macro<wbr>.decl<wbr>.follow-set<wbr>.token-path-ty]</span></a>
</div>

- `path` 和 `ty` 后面只能跟随以下之一：`=>`、`,`、`=`、`|`、`;`、`:`、`>`、`>>`、`[`、`{`、`as`、`where`，或片段说明符为 `block` 的宏变量。

<div class="rule" id="r-macro.decl.follow-set.token-vis"><a class="rule-link" href="#r-macro.decl.follow-set.token-vis" title="macro.decl.follow-set.token-vis"><span>[macro<wbr>.decl<wbr>.follow-set<wbr>.token-vis]</span></a>
</div>

- `vis` 后面只能跟随以下之一：`,`、除一个非 raw 的 `priv` 之外的标识符、任何可以开始类型的 token，或带有 `ident`、`ty` 或 `path` 片段说明符的元变量。

<div class="rule" id="r-macro.decl.follow-set.token-other"><a class="rule-link" href="#r-macro.decl.follow-set.token-other" title="macro.decl.follow-set.token-other"><span>[macro<wbr>.decl<wbr>.follow-set<wbr>.token-other]</span></a>
</div>

- 所有其他片段说明符没有限制。

<div class="rule" id="r-macro.decl.follow-set.edition2021"><a class="rule-link" href="#r-macro.decl.follow-set.edition2021" title="macro.decl.follow-set.edition2021"><span>[macro<wbr>.decl<wbr>.follow-set<wbr>.edition2021]</span></a>
</div>

<div class="alert alert-edition">

 > 
 > <p class="alert-title"><span class="alert-title-edition">2021</span> Edition differences</p>
 > 
 > 在 2021 edition 之前，`pat` 后面也可以跟随 `|`。

</div>

<div class="rule" id="r-macro.decl.follow-set.repetition"><a class="rule-link" href="#r-macro.decl.follow-set.repetition" title="macro.decl.follow-set.repetition"><span>[macro<wbr>.decl<wbr>.follow-set<wbr>.repetition]</span></a>
</div>

涉及重复时，这些规则会在考虑分隔符的情况下应用于每一种可能的展开次数。这意味着：

- 如果重复包含分隔符，则该分隔符必须能够跟随在重复内容之后。
- 如果重复可以重复多次（`*` 或 `+`），则其内容必须能够跟随其自身。
- 重复的内容必须能够跟随在其前面的任何内容之后，而其后面的任何内容也必须能够跟随在重复内容之后。
- 如果重复可以匹配零次（`*` 或 `?`），则其后面的任何内容必须能够跟随在其前面的任何内容之后。

更多细节见[形式化规约](macro-ambiguity.md)。