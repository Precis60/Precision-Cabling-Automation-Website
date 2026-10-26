import { HashRouter, Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import HomeGarden from "./pages/HomeGarden";
import Work from "./pages/Work";
import Consultation from "./pages/Consultation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Warranty from "./pages/Warranty";
import NotFound from "./pages/NotFound";
import { PILLAR_REDIRECTS } from "./serviceContent";

function ServicesEntry() {
  const [params] = useSearchParams();
  const slug = PILLAR_REDIRECTS[params.get("pillar")];
  if (slug) return <Navigate to={`/services/${slug}`} replace />;
  return <Services />;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesEntry />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/home-garden" element={<HomeGarden />} />
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
      </main>
      <Footer />
    </HashRouter>
  );
}
