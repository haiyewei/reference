# AGENTS.md

## Repository Focus

This repository is the Rust Reference source. Translation work must follow the `mdbook-i18n-helpers` Gettext workflow:

- Treat the synced fork `master` source ref as the only English source of truth.
- Translate this language branch by editing its PO file (`po/zh.po` for `I18n/zh-CN`).
- Translate only into the locale of the current language branch; do not mix in other target languages.
- Treat `po/messages.pot` as a generated file.
- Treat `src/` on a language branch as a localized Markdown snapshot generated from the synced fork `master` source ref plus the branch PO file.
- Do not use localized `src/` to regenerate `po/messages.pot` or to decide English source wording.
- Do not edit generated HTML under `book/`.
- Do not create parallel snapshot directories such as `src-zh/` unless the user explicitly asks for them.

## Translation Workflow

Use this four-stage workflow for each translation batch.

### 1. Direct Translation

- Translate the selected `msgid` into natural, precise Simplified Chinese in `msgstr`.
- Preserve Markdown structure, links, anchors, tables, code spans, code blocks, HTML tags, footnote markers, and placeholder syntax exactly unless the text itself requires localization.
- Follow the Markdown Format Rules below for emphasis, links, comments, and structural syntax.
- Treat Markdown HTML comments (`<!-- ... -->`) as comments. Translate natural-language prose inside them when that text is present in an extracted PO `msgid`.
- Do not translate Rust keywords, identifiers, crate names, type names, grammar production names, attributes, ABI names, command names, file paths, URLs, or code examples.
- Preserve control markers inside HTML comments, such as `template:attributes`, `ignore:`, and `no_run:`. If an extracted comment contains explanatory prose after such a marker, translate only the prose and keep the marker syntax intact.
- Prefer established Rust Chinese terminology. If a term is uncertain, keep the English term with a concise Chinese explanation rather than inventing a new term.
- Preserve normative force: translate "must" as "必须", "must not" as "不得" or "不能", "may" as "可以", "undefined behavior" as "未定义行为", and "unspecified" as "未指定" when context fits.

### 2. Semantic Check

- Compare every translated `msgstr` against its `msgid` before moving on.
- When surrounding source context is needed, read it from the synced fork `master` source ref, not from the localized `src/` snapshot.
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

## Markdown Format Rules

- Preserve Markdown syntax exactly unless the visible prose itself requires localization.
- For emphasized translated prose, use `*...*` rather than `_..._`; underscore emphasis is sensitive to adjacent prose characters and may render as literal underscores after localization.
- Keep emphasis around the same semantic span as the source text. Do not move emphasis onto nearby words, punctuation, links, or code just to make the translated prose smoother, and do not add spaces solely to make `_..._` render.
- Do not change Markdown delimiters inside code spans, code blocks, Rust identifiers, grammar fragments, file paths, URLs, anchors, or Markdown link targets.
- Preserve link targets and anchors byte-for-byte unless the source itself changed. Translate only the link text when it is natural language.
- Preserve code spans and code blocks exactly except for natural-language comments that are explicitly in scope for translation.
- Preserve list markers, blockquote markers, admonition markers, tables, footnotes, headings, raw HTML tags, and rule anchors. Translate their prose content without changing their structural role.
- Treat Markdown HTML comments as comments: translate natural-language prose when it is extracted into `po/zh.po`, but keep control markers such as `template:attributes`, `ignore:`, `no_run:`, and URL-only comments unchanged.

## Working With PO Files

- Keep PO syntax valid. Multi-line strings must remain valid quoted PO strings.
- Do not manually edit generated source references unless a tool updates them.
- Do not translate the header entry except metadata fields that are intentionally maintained.
- Do not translate standalone HTML comments by hand in generated or exported `src/` snapshots. If an HTML comment is not present in `po/messages.pot` / `po/zh.po`, report it as an extraction gap and update the current extraction workflow before translating it.
- When the extraction workflow is expanded to include previously ignored standalone HTML comments, expect `msgmerge` to add new entries to `po/zh.po`; review and translate those new `msgid`s normally.
- When English source changes, update the template from the synced fork `master` source ref and merge it into the branch PO file. Do not extract from the localized branch `src/`.

```bash
# Set SOURCE_REF to the synced fork master commit used by the language workflow.
SOURCE_REF=<synced-fork-master-sha>
git worktree add --detach target/i18n-source "$SOURCE_REF"
(
  cd target/i18n-source
  MDBOOK_OUTPUT='{"xgettext": {}}' \
  MDBOOK_PREPROCESSOR__GETTEXT__AFTER='["links"]' \
  MDBOOK_PREPROCESSOR__SPEC__RENDERERS='["html"]' \
  mdbook build -d ../../po
)
git worktree remove target/i18n-source
msgmerge --update po/zh.po po/messages.pot
```

- After merging, review all `fuzzy` entries before treating them as complete.

## Localized Markdown Snapshot Workflow

- The language branch `src/` should mirror the current translation state, but it is a generated snapshot, not the translation source of truth.
- Generate the snapshot from the synced fork `master` source ref plus the branch PO file after translation batches or when the user asks to refresh the Markdown source.
- The snapshot export must preserve Rust Reference source shape: `SUMMARY.md`, `r[...]` rule markers, grammar fences, mdBook/admonition syntax, links, and comments must remain valid source Markdown.
- Do not sync raw Markdown renderer output directly into `src/` if it contains rendered artifacts or escaped source markers such as `r\[...\]`.
- Use a reviewed PO-to-source exporter or an equivalent reviewed export procedure. This step is mechanical snapshot generation, not translation: it must copy the synced fork `master` `src/`, apply only existing reviewed non-fuzzy `msgstr` values from `po/zh.po`, and fail on unmatched source references in strict mode.
- Do not use obsolete Markdown-renderer repair, rsync overlay, regex replacement, or helper scripts as workflow authority.
- Before replacing `src/`, check for unrelated local edits and do not overwrite user changes silently.
- If a formatting or wording issue is found in the localized `src/`, fix the corresponding `po/zh.po` entry first, then regenerate the snapshot. Direct `src/` edits are only acceptable as temporary diagnostics or when the user explicitly asks for a snapshot-only patch.
- After refreshing `src/`, build the localized book from the refreshed snapshot and verify the visible output.

## Validation Commands

Run these after editing `po/zh.po`:

```bash
msgfmt --check --statistics -o /dev/null po/zh.po

# Refresh src/ from the synced fork master source ref plus po/zh.po.
# Set PO_TO_SRC_EXPORTER to a reviewed PO-to-source exporter.
SOURCE_REF=<synced-fork-master-sha>
PO_TO_SRC_EXPORTER=<path-to-reviewed-po-to-src-exporter>
rm -rf target/i18n/source target/i18n/src-export-failures.txt
mkdir -p target/i18n/source target/i18n
git archive "$SOURCE_REF" | tar -x -C target/i18n/source
python3 "$PO_TO_SRC_EXPORTER" \
  --source-src target/i18n/source/src \
  --po po/zh.po \
  --out src \
  --failure-report target/i18n/src-export-failures.txt \
  --strict

MDBOOK_BOOK__LANGUAGE=zh-CN MDBOOK_BOOK__TITLE='Rust 参考手册' mdbook build -d book/zh
```

Run the English build from the synced fork `master` source ref when translation workflow or book configuration changes:

```bash
# Run this in a checkout/worktree of the source ref.
mdbook build
```

Use targeted checks to confirm visible translated text:

```bash
rg -n "待检查的中文词句" book/zh
```

Use targeted checks for hidden Markdown HTML comments in the localized source snapshot:

```bash
rg -n "<!--|-->" src
```

Classify remaining ASCII text in HTML comments before treating it as untranslated prose. Control markers (`template:attributes`, `ignore:`, `no_run:`), URLs, code identifiers, file paths, and Rust terminology may remain in English when required by tooling or technical precision; natural-language prose should be translated through `po/zh.po` when it is extracted.

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
