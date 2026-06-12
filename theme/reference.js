/* Toggles the popup for uncovered tests on the test summary page. */
function spec_toggle_uncovered(item_index) {
    let el = document.getElementById(`uncovered-${item_index}`);
    const currently_hidden = el.classList.contains('popup-hidden');
    const all = document.querySelectorAll('.uncovered-rules-popup');
    all.forEach(element => {
        element.classList.add('popup-hidden');
    });
    if (currently_hidden) {
        el.classList.remove('popup-hidden');
    }
}

function spec_toggle_tests(rule_id) {
    let el = document.getElementById(`tests-${rule_id}`);
    const currently_hidden = el.classList.contains('popup-hidden');
    const all = document.querySelectorAll('.tests-popup');
    all.forEach(element => {
        element.classList.add('popup-hidden');
    });
    if (currently_hidden) {
        el.classList.remove('popup-hidden');
    }
}

function toggle_railroad() {
    const grammarRailroad = get_railroad();
    set_railroad(!grammarRailroad);
    update_railroad();
}

function show_railroad() {
    set_railroad(true);
    update_railroad();
}

function get_railroad() {
    let grammarRailroad = null;
    try {
        grammarRailroad = localStorage.getItem('grammar-railroad');
    } catch (e) {
        // Ignore error.
    }
    grammarRailroad = grammarRailroad === 'true' ? true : false;
    return grammarRailroad;
}

function set_railroad(newValue) {
    try {
        localStorage.setItem('grammar-railroad', newValue);
    } catch (e) {
        // Ignore error.
    }
}

function update_railroad() {
    const grammarRailroad = get_railroad();
    const railroads = document.querySelectorAll('.grammar-railroad');
    railroads.forEach(element => {
        if (grammarRailroad) {
            element.classList.remove('grammar-hidden');
        } else {
            element.classList.add('grammar-hidden');
        }
    });
    const buttons = document.querySelectorAll('.grammar-toggle-railroad');
    buttons.forEach(button => {
        if (grammarRailroad) {
            button.innerText = "隐藏语法图";
        } else {
            button.innerText = "显示语法图";
        }
    });
}

(function railroad_onload() {
    update_railroad();
})();

(function cjk_search_fallback() {
    const cjkPattern = /[\u3400-\u9fff\uf900-\ufaff]/;
    const resultLimit = 30;
    let lastRenderedQuery = "";
    let installed = false;
    let observer = null;

    function escapeHTML(text) {
        return String(text).replace(/[&<>'"]/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&#34;",
            "'": "&#39;",
        }[character]));
    }

    function normalizeText(text) {
        return String(text || "").replace(/\s+/g, " ").trim();
    }

    function queryTerms(query) {
        return normalizeText(query).split(/\s+/).filter(Boolean);
    }

    function includesTerm(text, term) {
        if (cjkPattern.test(term)) {
            return text.includes(term);
        }
        return text.toLowerCase().includes(term.toLowerCase());
    }

    function countTerm(text, term) {
        if (!term) {
            return 0;
        }
        const haystack = cjkPattern.test(term) ? text : text.toLowerCase();
        const needle = cjkPattern.test(term) ? term : term.toLowerCase();
        let count = 0;
        let index = haystack.indexOf(needle);
        while (index !== -1) {
            count++;
            index = haystack.indexOf(needle, index + Math.max(needle.length, 1));
        }
        return count;
    }

    function scoreDoc(doc, terms) {
        const title = normalizeText(doc.title);
        const breadcrumbs = normalizeText(doc.breadcrumbs);
        const body = normalizeText(doc.body);
        if (!terms.every(term => includesTerm(`${title} ${breadcrumbs} ${body}`, term))) {
            return 0;
        }
        let score = 0;
        for (const term of terms) {
            score += countTerm(title, term) * 20;
            score += countTerm(breadcrumbs, term) * 8;
            score += countTerm(body, term);
        }
        return score || 1;
    }

    function findFirstMatch(text, terms) {
        let best = -1;
        let bestTerm = "";
        for (const term of terms) {
            const index = cjkPattern.test(term)
                ? text.indexOf(term)
                : text.toLowerCase().indexOf(term.toLowerCase());
            if (index !== -1 && (best === -1 || index < best)) {
                best = index;
                bestTerm = text.slice(index, index + term.length);
            }
        }
        return {index: best, term: bestTerm};
    }

    function highlightTerms(text, terms) {
        let escaped = escapeHTML(text);
        const sorted = [...terms].sort((left, right) => right.length - left.length);
        for (const term of sorted) {
            const escapedTerm = escapeHTML(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            if (!escapedTerm) {
                continue;
            }
            escaped = escaped.replace(new RegExp(escapedTerm, "gi"), "<em>$&</em>");
        }
        return escaped;
    }

    function makeTeaser(body, terms) {
        const text = normalizeText(body);
        if (!text) {
            return "";
        }
        const match = findFirstMatch(text, terms);
        const start = match.index === -1 ? 0 : Math.max(0, match.index - 60);
        const end = match.index === -1
            ? Math.min(text.length, 160)
            : Math.min(text.length, match.index + match.term.length + 100);
        const prefix = start > 0 ? "..." : "";
        const suffix = end < text.length ? "..." : "";
        return `${prefix}${highlightTerms(text.slice(start, end), terms)}${suffix}`;
    }

    function renderResults(query) {
        const search = window.search;
        const docs = search && search.index && search.index.documentStore
            ? search.index.documentStore.docs
            : null;
        if (!docs || !search.doc_urls) {
            return false;
        }

        const terms = queryTerms(query);
        if (!terms.length || !terms.some(term => cjkPattern.test(term))) {
            lastRenderedQuery = "";
            return false;
        }

        const scored = Object.keys(docs)
            .map(ref => ({ref, doc: docs[ref], score: scoreDoc(docs[ref], terms)}))
            .filter(result => result.score > 0)
            .sort((left, right) => right.score - left.score || Number(left.ref) - Number(right.ref))
            .slice(0, resultLimit);

        const searchresults = document.getElementById("mdbook-searchresults");
        const searchresultsOuter = document.getElementById("mdbook-searchresults-outer");
        const searchresultsHeader = document.getElementById("mdbook-searchresults-header");
        if (!searchresults || !searchresultsOuter || !searchresultsHeader) {
            return false;
        }

        searchresults.textContent = "";
        searchresultsHeader.innerText = scored.length === 0
            ? `未找到“${query}”的搜索结果。`
            : `找到 ${scored.length} 个“${query}”搜索结果：`;

        const encodedSearch = encodeURIComponent(query).replace(/'/g, "%27");
        for (const result of scored) {
            const item = document.createElement("li");
            const url = String(search.doc_urls[result.ref] || "").split("#");
            if (url.length === 1) {
                url.push("");
            }
            const link = `${path_to_root}${url[0]}?highlight=${encodedSearch}#${url[1]}`;
            item.innerHTML = `<a href="${escapeHTML(link)}">${escapeHTML(result.doc.breadcrumbs)}</a>`
                + `<span class="teaser" aria-label="搜索结果摘要">`
                + `${makeTeaser(result.doc.body, terms)}</span>`;
            searchresults.appendChild(item);
        }

        searchresultsOuter.classList.remove("hidden");
        lastRenderedQuery = query;
        return true;
    }

    function maybeRenderResults() {
        const searchbar = document.getElementById("mdbook-searchbar");
        if (!searchbar) {
            return;
        }
        const query = searchbar.value.trim();
        if (!query || !cjkPattern.test(query)) {
            lastRenderedQuery = "";
            return;
        }
        if (query === lastRenderedQuery) {
            return;
        }
        renderResults(query);
    }

    function install() {
        if (installed) {
            return;
        }
        const searchbar = document.getElementById("mdbook-searchbar");
        const searchresultsHeader = document.getElementById("mdbook-searchresults-header");
        if (!searchbar || !searchresultsHeader) {
            window.setTimeout(install, 100);
            return;
        }
        const schedule = () => window.setTimeout(maybeRenderResults, 0);
        searchbar.addEventListener("input", schedule);
        searchbar.addEventListener("keyup", schedule);
        observer = new MutationObserver(schedule);
        observer.observe(searchresultsHeader, {childList: true, characterData: true, subtree: true});
        installed = true;
        schedule();
    }

    window.referenceCjkSearchFallback = {
        refresh: maybeRenderResults,
        render: renderResults,
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", install, {once: true});
    } else {
        install();
    }
    window.setTimeout(install, 0);
    window.setTimeout(install, 500);
})();

(function localize_builtin_ui() {
    let observerInstalled = false;
    const translations = new Map([
        ["Keyboard shortcuts", "键盘快捷键"],
        ["Table of contents", "目录"],
        ["Press ← or → to navigate between chapters", "按 ← 或 → 在章节之间导航"],
        ["Press S or / to search in the book", "按 S 或 / 在书中搜索"],
        ["Press ? to show this help", "按 ? 显示此帮助"],
        ["Press Esc to hide this help", "按 Esc 隐藏此帮助"],
        ["Auto", "自动"],
        ["Light", "浅色"],
        ["Rust", "Rust"],
        ["Coal", "深色"],
        ["Navy", "蓝色"],
        ["Ayu", "Ayu"],
        ["Themes", "主题"],
        ["Change theme", "更改主题"],
        ["Print this book", "打印本书"],
        ["Toggle Table of Contents", "切换目录"],
        ["Toggle Searchbar", "切换搜索栏"],
        ["Search (`/`)", "搜索（`/`）"],
        ["Git repository", "翻译仓库"],
        ["Copy to clipboard", "复制到剪贴板"],
        ["Run this code", "运行此代码"],
        ["Show hidden lines", "显示隐藏行"],
        ["Hide hidden lines", "隐藏隐藏行"],
        ["Page navigation", "页面导航"],
        ["Next chapter", "下一章"],
        ["Previous chapter", "上一章"],
        ["Page not found", "页面未找到"],
        ["Search Result Teaser", "搜索结果摘要"],
    ]);

    function translated(text) {
        return translations.get(String(text || "").trim());
    }

    function localizeTextNodes(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }
        for (const node of nodes) {
            const value = translated(node.nodeValue);
            if (value) {
                node.nodeValue = value;
            }
        }
    }

    function localizeAttributes(root) {
        const selector = "[title], [aria-label]";
        for (const element of root.querySelectorAll(selector)) {
            for (const attr of ["title", "aria-label"]) {
                const value = translated(element.getAttribute(attr));
                if (value) {
                    element.setAttribute(attr, value);
                }
            }
        }
    }

    function localizeHelpText() {
        const help = document.getElementById("mdbook-help-container");
        if (!help) {
            return;
        }
        for (const paragraph of help.querySelectorAll("p")) {
            const keys = Array.from(paragraph.querySelectorAll("kbd"))
                .map(key => key.textContent.trim())
                .join(" ");
            if (keys === "← →") {
                paragraph.innerHTML = "按 <kbd>←</kbd> 或 <kbd>→</kbd> 在章节之间导航";
            } else if (keys === "S /") {
                paragraph.innerHTML = "按 <kbd>S</kbd> 或 <kbd>/</kbd> 在书中搜索";
            } else if (keys === "?") {
                paragraph.innerHTML = "按 <kbd>?</kbd> 显示此帮助";
            } else if (keys === "Esc") {
                paragraph.innerHTML = "按 <kbd>Esc</kbd> 隐藏此帮助";
            }
        }
    }

    function localizeTitle() {
        if (document.title.startsWith("Page not found - ")) {
            document.title = document.title.replace("Page not found", "页面未找到");
        }
    }

    function chromeRoots() {
        return [
            document.getElementById("mdbook-help-container"),
            document.getElementById("mdbook-menu-bar"),
            document.getElementById("searchresults-outer"),
            document.getElementById("mdbook-searchresults-outer"),
        ].filter(Boolean);
    }

    function installObserver() {
        if (observerInstalled) {
            return;
        }
        const searchResults = document.getElementById("mdbook-searchresults-outer");
        if (!searchResults) {
            return;
        }
        const observer = new MutationObserver(apply);
        observer.observe(searchResults, {childList: true, subtree: true});
        observerInstalled = true;
    }

    function apply() {
        for (const root of chromeRoots()) {
            localizeTextNodes(root);
        }
        localizeAttributes(document.body);
        localizeHelpText();
        localizeTitle();
        installObserver();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", apply, {once: true});
    } else {
        apply();
    }
    window.setTimeout(apply, 0);
    window.setTimeout(apply, 500);
})();
