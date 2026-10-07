import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./site.css";
import App from "./App.jsx";

const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN?.trim();
if (domain) {
  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = domain;
  script.src = "https://plausible.io/js/script.js";
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
