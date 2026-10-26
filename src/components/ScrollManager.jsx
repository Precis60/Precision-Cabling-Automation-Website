import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    const params = new URLSearchParams(search);
    const anchor = params.get("pillar") || params.get("section");
    const target = anchor ? document.getElementById(anchor) : null;
    if (target) target.scrollIntoView({ block: "start" });
    else window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, [pathname, search]);

  return null;
}
