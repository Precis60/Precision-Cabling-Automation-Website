import { useEffect } from "react";
import { SITE } from "../site";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ title, description, path = "/", jsonLd }) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = "en-AU";
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "en_AU");
    upsertMeta("property", "og:url", `${SITE.pagesUrl}#${path === "/" ? "/" : path}`);

    const existing = document.getElementById("site-jsonld");
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "site-jsonld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const node = document.getElementById("site-jsonld");
      if (node) node.remove();
    };
  }, [title, description, path, jsonLd]);

  return null;
}
