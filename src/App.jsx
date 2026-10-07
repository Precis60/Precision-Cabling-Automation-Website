import { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const Consultation = lazy(() => import("./pages/Consultation"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Policies = lazy(() => import("./pages/Policies"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Warranty = lazy(() => import("./pages/Warranty"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Loading() {
  return (
    <div className="section">
      <div className="wrap">
        <p>Loading…</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <button
        type="button"
        className="skip-link"
        onClick={() => {
          const content = document.getElementById("content");
          if (!content) return;
          content.tabIndex = -1;
          content.focus();
        }}
      >
        Skip to content
      </button>
      <Header />
      <main id="content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company-policies" element={<Policies />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support-warranty" element={<Warranty />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </HashRouter>
  );
}
