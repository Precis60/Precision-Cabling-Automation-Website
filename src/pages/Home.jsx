import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ConsultBand from "../components/ConsultBand";
import { IconAv, IconGarden, IconLighting, IconNetwork, IconSecurity } from "../components/Icons";
import { imageSrc } from "../images";
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
    "Consultation, design, installation and programming for security, networks, lighting control and AV, plus garden and landscape maintenance, on residential and commercial sites.",
};

const AUDIENCES = [
  {
    title: "Private clients",
    text: "A single residence, including a smaller job that still needs the same care.",
  },
  {
    title: "Architects and builders",
    text: "A fit-out or a build, where the systems are designed with the drawings.",
  },
  {
    title: "People who run a building",
    text: "A large commercial site. It starts the same way, and the consultation stays through handover.",
  },
];

const FACTS = [
  ["01", "Consultation first"],
  ["02", "We install and program"],
  ["03", "Projects of any size"],
  ["04", "Urgent support, 24 hours"],
];

const ICONS = {
  security: IconSecurity,
  networks: IconNetwork,
  lighting: IconLighting,
  av: IconAv,
  garden: IconGarden,
};

const TILES = {
  security: {
    file: "service-security.jpg",
    width: 1400,
    height: 933,
    alt: "Illustrative photograph of a bright interior. Not a project by this practice.",
  },
  networks: {
    file: "service-networks.jpg",
    width: 1400,
    height: 934,
    alt: "Illustrative photograph of network equipment racks. Not a project by this practice.",
  },
  lighting: {
    file: "service-lighting.jpg",
    width: 1400,
    height: 934,
    alt: "Illustrative photograph of interior lighting. Not a project by this practice.",
  },
  av: {
    file: "service-av.jpg",
    width: 1400,
    height: 934,
    alt: "Illustrative photograph of a living room with a screen. Not a project by this practice.",
  },
  garden: {
    file: "service-garden.jpg",
    width: 1400,
    height: 933,
    alt: "Illustrative photograph of a maintained garden. Not a project by this practice.",
  },
};

export default function Home() {
  return (
    <>
      <Seo
        title="Precision Cabling & Automation | Consultation, design and delivery"
        description="Technology consulting, installation and programming for homes and commercial sites of any size. Security, networks, lighting control, AV, and garden and landscape maintenance. Book a consultation in Yarraville."
        path="/"
        jsonLd={jsonLd}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="kicker">Yarraville · Residential and commercial</span>
            <h1>Consultation and delivery for complex homes and commercial&nbsp;sites.</h1>
            <p className="lede">
              Security, networks, lighting control, and AV, designed as one system.
              We advise on projects of any size, then install and program the work ourselves.
              Garden and landscape maintenance is offered on the same sites.
            </p>
            <div className="hero-actions">
              <Link className="button" to="/consultation">Book a consultation</Link>
              <Link className="button secondary" to="/contact?intent=assessment">Request a site assessment</Link>
            </div>
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

      <section className="fact-strip" aria-label="How the practice works">
        <ul className="wrap">
          {FACTS.map(([num, label]) => (
            <li key={num}>
              <span>{num}</span>
              {label}
            </li>
          ))}
        </ul>
      </section>

      <section className="section light">
        <div className="wrap">
          <div className="section-head">
            <h2>Who we advise</h2>
            <p>
              Private clients, architects, builders, and the people who run a building.
              Each engagement starts with a consultation that stays through specification, installation, programming, and handover.
            </p>
          </div>
          <div className="audience">
            {AUDIENCES.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="principal">Jamie Anderson is the principal and the accountable contact.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="pillars-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="pillars-title">Five services, one practice</h2>
            <p>Each service is scoped in consultation, then carried out by this practice.</p>
          </div>
          <div className="service-grid">
            {PILLARS.map((pillar) => {
              const Icon = ICONS[pillar.id];
              const tile = TILES[pillar.id];
              return (
                <article className="service-tile" key={pillar.id}>
                  <img
                    src={imageSrc(tile.file)}
                    alt={tile.alt}
                    width={tile.width}
                    height={tile.height}
                  />
                  <div className="service-tile-body">
                    <h3>
                      <Icon />
                      {pillar.title}
                    </h3>
                    <p>{pillar.summary}</p>
                    <Link className="more" to={`/services?pillar=${pillar.id}`}>Read the approach</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bleed" aria-label="Illustrative commercial interior">
        <img
          src={imageSrc("band-commercial.jpg")}
          alt="Illustrative photograph of a commercial interior. Not a project by this practice."
          width="2000"
          height="857"
        />
        <div className="wrap">
          <div className="bleed-card">
            <p>Designed as one system, then installed and programmed by the same practice.</p>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="wrap">
          <div className="section-head">
            <h2>How an engagement starts</h2>
            <p>
              The front door is a consultation. From there we design, specify, and deliver — installation and programming included — and we remain available after handover.
            </p>
          </div>
          <div className="grid-2">
            <article className="panel">
              <h3>Consultation first</h3>
              <p>
                The session covers the site, the systems, and a deliverable you can decide from: an options memo, a schematic where it helps, and budget bands. Fees are confirmed on enquiry.
              </p>
              <Link className="more" to="/consultation">See what the session includes</Link>
            </article>
            <article className="panel">
              <h3>Then we build it</h3>
              <p>
                If the work fits, the same practice specifies the equipment and carries out installation and programming. Any size is in scope, provided we can be accountable for the outcome.
              </p>
              <p className="urgent">
                Urgent faults do not wait on a consultation. Call{" "}
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>. Support and call-out are available 24 hours.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="process-title">How we work</h2>
            <p>Discover, design, specify, deliver, handover. Delivery means we install and program.</p>
          </div>
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

      <section className="section light" aria-labelledby="work-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="work-title">Selected work</h2>
            <p>
              Three anonymised studies are reserved below. Narratives and outcomes will be added when they can be published. Nothing here is a claimed result.
            </p>
          </div>
          <div className="grid-3">
            {CASE_STUDIES.map((study) => (
              <article className="study" key={study.id}>
                <div className="study-empty">Photography withheld</div>
                <div className="study-body">
                  <span className="kicker">{study.label}</span>
                  <h3>{study.title}</h3>
                  <p>{study.text}</p>
                  <span className="tag">{study.systems}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="after-block">
            <Link className="more" to="/work">Open the work page</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="credentials-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="credentials-title">Credentials</h2>
            <p className="placeholder-note">
              Placeholder strip. Insurance, licences, and manufacturer relationships are shown only once confirmed. No partner logos until the principal names the firms this practice specifies and installs.
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
