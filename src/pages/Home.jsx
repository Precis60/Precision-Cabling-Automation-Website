import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ServiceAreas from "../components/ServiceAreas";
import ServiceCards from "../components/ServiceCards";
import { imageSrc } from "../images";
import { AREA_SUMMARY, EXPERIENCE, PROCESS, SERVICE_AREAS, SITE } from "../site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.pagesUrl,
  telephone: SITE.phoneTel,
  email: SITE.email,
  image: `${SITE.pagesUrl}favicon.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yarraville",
    addressRegion: "VIC",
    postalCode: "3013",
    addressCountry: "AU",
  },
  areaServed: SERVICE_AREAS.flatMap((area) => [area.region, ...area.suburbs]),
  description:
    `Consultation-led design, installation and programming for security, networks, lighting, AV, and home and garden maintenance across ${AREA_SUMMARY}. ${EXPERIENCE}.`,
};

const FACTS = [
  "Consultation first",
  "15 years in high-end residential",
  "We install and program",
  "24/7 urgent support",
  "Melbourne · Mornington Peninsula · Bellarine",
];

function exploreServices() {
  const target = document.getElementById("services");
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export default function Home() {
  return (
    <>
      <Seo
        title="Precision Cabling & Automation | Security, networks, lighting and AV"
        description="Consultation-led design, then installed and programmed, for security, networks, lighting and AV across Melbourne, the Mornington Peninsula and the Bellarine. 15 years in high-end residential work."
        path="/"
        jsonLd={jsonLd}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>Security, networks, lighting and AV for premium homes and commercial sites.</h1>
            <p className="lede">
              Consultation-led design, then installed and programmed by us across Melbourne, the Mornington Peninsula and the Bellarine.
            </p>
            <div className="hero-actions">
              <Link className="button" to="/consultation">Book a consultation</Link>
              <button className="button secondary" type="button" onClick={exploreServices}>
                Explore services
              </button>
            </div>
            <p className="hero-urgent">
              Urgent fault? Call <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>, 24/7.
            </p>
          </div>
          <figure className="hero-figure">
            <img
              src={imageSrc("hero-interior.jpg")}
              alt="Illustrative photograph of a finished living room. Not a project by this practice."
              width="1320"
              height="1650"
            />
          </figure>
        </div>
      </section>

      <section className="section" id="services" aria-labelledby="services-title">
        <div className="wrap">
          <h2 className="centred-title" id="services-title">Services</h2>
          <ServiceCards />
        </div>
      </section>

      <section className="section light" id="how-we-work" aria-labelledby="process-title">
        <div className="wrap">
          <h2 id="process-title">How we work</h2>
          <div className="process">
            {PROCESS.map((item) => (
              <article className="step" key={item.step}>
                <span className="num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fact-strip" aria-label="Practice facts">
        <ul className="wrap">
          {FACTS.map((label, index) => (
            <li key={label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
            </li>
          ))}
        </ul>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="inner">
            <div>
              <h2>Tell us about your site and we'll recommend the right next step.</h2>
              <div className="hero-actions">
                <Link className="button" to="/consultation">Book a consultation</Link>
              </div>
            </div>
          </div>
          <ServiceAreas collapsible />
        </div>
      </section>
    </>
  );
}
