// Site build configuration. You should not need to edit this file —
// all content is edited through Pages CMS (see README.md).
import { load as loadYaml } from "js-yaml";
import markdownIt from "markdown-it";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml,yaml", (contents) => loadYaml(contents));
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Version stamp appended to CSS/JS links so browsers never use stale files
  eleventyConfig.addGlobalData("build", () => Date.now().toString(36));

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  // Markdown (or HTML from the CMS rich-text editor) -> HTML
  const md = markdownIt({ html: true, linkify: true, breaks: false });
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("md", (value) => (value ? md.render(String(value)) : ""));

  // Wrap every <h2> section of a rendered page in a collapsible box.
  eleventyConfig.addFilter("foldSections", (html) => {
    if (!html) return "";
    const parts = String(html).split(/(?=<h2[\s>])/);
    return parts
      .map((part) => {
        const m = part.match(/^<h2[^>]*>([\s\S]*?)<\/h2>([\s\S]*)$/);
        if (!m) return part;
        return `<details class="fold"><summary><span>${m[1]}</span></summary><div class="fold-body">${m[2]}</div></details>`;
      })
      .join("");
  });

  // Render an author list; link co-authors to their homepages.
  eleventyConfig.addFilter("authorList", (authors, coauthors, me) => {
    if (!authors || !authors.length) return "";
    const directory = {};
    (coauthors || []).forEach((c) => {
      if (c && c.name && c.url) directory[normalize(c.name)] = c.url;
    });
    const items = authors.map((a) => {
      const name = typeof a === "string" ? a : a.name || "";
      const url = (typeof a === "object" && a.url) || directory[normalize(name)];
      const esc = escapeHtml(name);
      const mine = (Array.isArray(me) ? me : [me]).filter(Boolean).map(normalize);
      if (mine.includes(normalize(name))) return `<strong>${esc}</strong>`;
      return url ? `<a href="${escapeAttr(url)}">${esc}</a>` : esc;
    });
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} and ${items[1]}`;
    return items.slice(0, -1).join(", ") + ", and " + items[items.length - 1];
  });

  eleventyConfig.addFilter("byStatus", (papers, status) =>
    (papers || [])
      .filter((p) => p.data.status === status)
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99) || (b.data.year ?? 0) - (a.data.year ?? 0))
  );

  eleventyConfig.addFilter("slug2", (s) =>
    String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  );

  eleventyConfig.addCollection("papers", (api) => api.getFilteredByGlob("src/papers/*.md"));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}

function normalize(name) {
  return String(name)
    .replace(/\*/g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escapeAttr(s) {
  return escapeHtml(s).replace(/"/g, "&quot;");
}
