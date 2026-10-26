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

export default function Seo({ title, description, path = "/", jsonLd, image }) {
  useEffect(() => {
    const shareImage = image || `${SITE.pagesUrl}images/band-commercial.jpg`;
    document.title = title;
    document.documentElement.lang = "en-AU";
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "en_AU");
    upsertMeta("property", "og:url", `${SITE.pagesUrl}#${path === "/" ? "/" : path}`);
    upsertMeta("property", "og:image", shareImage);
    upsertMeta("property", "og:image:width", "2000");
    upsertMeta("property", "og:image:height", "857");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

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
  }, [title, description, path, jsonLd, image]);

  return null;
}
