import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ConsultBand from "../components/ConsultBand";
import { CASE_STUDIES, CREDENTIALS, PILLARS, PROCESS, SITE } from "../site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.pagesUrl,
  telephone: SITE.phoneTel,
  email: SITE.adminEmail,
  image: `${SITE.pagesUrl}favicon.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: "Yarraville",
    addressRegion: "VIC",
    postalCode: "3013",
    addressCountry: "AU",
  },
  areaServed: "Australia",
  description:
    "Consultation, design, installation and programming for security, networks, lighting control and AV on residential and commercial sites.",
};

export default function Home() {
  return (
    <>
      <Seo
        title="Precision Cabling & Automation | Consultation, design and delivery"
        description="Technology consulting, installation and programming for homes and commercial sites of any size. Security, networks, lighting control and AV. Book a consultation in Yarraville."
        path="/"
        jsonLd={jsonLd}
      />
      <section className="hero">
        <div className="wrap">
          <span className="kicker">Yarraville · Residential and commercial</span>
          <h1>Consultation and delivery for complex homes and commercial sites.</h1>
          <p className="lede">
            Security, networks, lighting control, and AV, designed as one system.
            We advise through projects of any size, then install and program the work ourselves.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/consultation">Book a consultation</Link>
            <Link className="button secondary" to="/contact?intent=assessment">Request a site assessment</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap section-head">
          <h2>Who we advise</h2>
          <p>
            Private clients, architects, builders, and the people who run a building.
            A single residence, a fit-out, or a large commercial site starts the same way:
            a consultation that stays with the job through specification, installation, programming, and handover.
            Jamie Anderson is the principal and the accountable contact.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="pillars-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="pillars-title">Four systems, one practice</h2>
            <p>
              Each pillar is scoped in consultation, then installed and programmed to the agreed design.
            </p>
          </div>
          <div className="grid-4">
            {PILLARS.map((pillar) => (
              <article className="card" key={pillar.id} id={pillar.id}>
                <h3>{pillar.title}</h3>
                <p>{pillar.summary}</p>
                <Link className="more" to={`/services?pillar=${pillar.id}`}>Read the approach</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap section-head">
          <h2>How an engagement starts</h2>
          <p>
            The commercial front door is a consultation. From there we design, specify, and deliver —
            installation and programming included — and we remain available after handover.
          </p>
        </div>
        <div className="wrap grid-2">
          <article className="panel">
            <h3>Consultation first</h3>
            <p>
              The session covers the site, the systems in play, and a deliverable you can decide from:
              an options memo, a schematic where it helps, and budget bands.
              Consultation fees confirmed on enquiry.
            </p>
            <Link className="more" to="/consultation">See what the session includes</Link>
          </article>
          <article className="panel">
            <h3>Then we build it</h3>
            <p>
              If the work fits, the same practice specifies the equipment and carries out installation and programming.
              Projects of any size are in scope, provided we can be accountable for the outcome.
            </p>
            <p className="urgent">
              Urgent faults do not wait on a consultation. Call{" "}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> — support and call-out are available 24 hours.
            </p>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="process-title">How we work</h2>
            <p>Discover, design, specify, deliver, handover. Delivery means we install and program.</p>
          </div>
          <div className="steps">
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

      <section className="section" aria-labelledby="work-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="work-title">Selected work</h2>
            <p>
              Three anonymised studies are reserved below. Narratives and outcomes will be added when they can be published.
              Nothing on this page is a claimed result.
            </p>
          </div>
          <div className="grid-3">
            {CASE_STUDIES.map((study) => (
              <article className="card study" key={study.id}>
                <span className="kicker">{study.label}</span>
                <h3>{study.title}</h3>
                <p>{study.text}</p>
                <span className="tag">{study.systems}</span>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link to="/work">Open the work page</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="credentials-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="credentials-title">Credentials</h2>
            <p className="placeholder-note">
              Placeholder strip. Insurance, licences, and manufacturer relationships are shown only once confirmed.
              No partner logos are displayed until the principal names the firms this practice specifies and installs.
            </p>
          </div>
          <ul className="cred-list">
            {CREDENTIALS.map((item) => (
              <li key={item.label}>
                <span className="label">Placeholder</span>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConsultBand />
    </>
  );
}
