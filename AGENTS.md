# AGENTS.md

## Repository Focus

This repository is the Rust Reference source. Translation work must follow the `mdbook-i18n-helpers` Gettext workflow:

- Treat `src/` as the only English source of truth.
- Translate by editing `po/zh.po`.
- Treat `po/messages.pot` as a generated file.
- Do not edit generated HTML under `book/`.
- Do not create or edit `src-zh/` unless the user explicitly asks for a static Markdown snapshot workflow.

## Translation Workflow

Use this four-stage workflow for each translation batch.

### 1. Direct Translation

- Translate the selected `msgid` into natural, precise Simplified Chinese in `msgstr`.
- Preserve Markdown structure, links, anchors, tables, code spans, code blocks, HTML tags, footnote markers, and placeholder syntax exactly unless the text itself requires localization.
- Do not translate Rust keywords, identifiers, crate names, type names, grammar production names, attributes, ABI names, command names, file paths, URLs, or code examples.
- Prefer established Rust Chinese terminology. If a term is uncertain, keep the English term with a concise Chinese explanation rather than inventing a new term.
- Preserve normative force: translate "must" as "必须", "must not" as "不得" or "不能", "may" as "可以", "undefined behavior" as "未定义行为", and "unspecified" as "未指定" when context fits.

### 2. Semantic Check

- Compare every translated `msgstr` against its `msgid` before moving on.
- Check negation, conditions, exceptions, quantifiers, temporal wording, and requirement strength.
- Verify that no technical claim was added, removed, weakened, or strengthened.
- Ensure references such as "the following", "above", "below", "this chapter", and "this section" still point to the same context.
- If the English is ambiguous or the translation would require interpretation, leave a brief translator note in the final response rather than silently guessing.

### 3. Language Contrast

- Read the English and Chinese side by side.
- Make the Chinese fluent, but keep the sentence structure close enough that reviewers can map it back to the English source.
- Use Chinese punctuation for prose, while preserving punctuation inside code, literals, syntax forms, and grammar fragments.
- Keep terminology consistent inside the same chapter and across nearby entries.
- Avoid over-translating short UI/navigation titles when a standard Chinese technical title is clearer.

### 4. Final Translation

- Write only reviewed translations to `msgstr`.
- Remove a `fuzzy` flag only after the translation has passed semantic review.
- Leave `msgstr` empty when the entry is not ready; an empty translation is safer than a misleading translation.
- Do not batch-apply machine translation without human semantic review.
- In the final response, summarize the translated area, notable terminology choices, unresolved ambiguities, and validation commands run.

## Working With PO Files

- Keep PO syntax valid. Multi-line strings must remain valid quoted PO strings.
- Do not manually edit generated source references unless a tool updates them.
- Do not translate the header entry except metadata fields that are intentionally maintained.
- When English source changes, update the template and merge:

```bash
MDBOOK_OUTPUT='{"xgettext": {}}' mdbook build -d po
msgmerge --update po/zh.po po/messages.pot
```

- After merging, review all `fuzzy` entries before treating them as complete.

## Validation Commands

Run these after editing `po/zh.po`:

```bash
msgfmt --check --statistics -o /dev/null po/zh.po
MDBOOK_BOOK__LANGUAGE=zh MDBOOK_BOOK__TITLE='Rust 参考手册' mdbook build -d book/zh
```

Run the English build when translation workflow or book configuration changes:

```bash
mdbook build
```

Use targeted checks to confirm visible translated text:

```bash
rg -n "待检查的中文词句" book/zh
```

## Multi-Agent Translation Rules

- Split translation work by chapter, source reference range, or clearly bounded PO entry range.
- Multiple agents must not edit overlapping `po/zh.po` entries at the same time.
- Each agent should report the `msgid` range or source files it translated.
- One agent may do direct translation while another performs semantic review, but the reviewer must compare against the original English.
- Do not revert or overwrite another agent's translations. If conflicts appear, stop and ask for integration guidance.

## Quality Bar

Rust Reference is a language specification document. Correctness matters more than speed.

- Prefer precise, slightly literal Chinese over smooth but imprecise Chinese.
- Preserve all safety, validity, undefined behavior, implementation-defined, and grammar semantics exactly.
- Keep examples and code behavior unchanged.
- Do not make the translation more permissive or more restrictive than the English.
- If unsure, mark the item as unresolved in the response and leave the translation empty or conservative.
