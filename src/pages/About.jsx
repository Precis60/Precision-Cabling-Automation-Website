import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ConsultBand from "../components/ConsultBand";
import { imageSrc } from "../images";
import { PROCESS } from "../site";

export default function About() {
  return (
    <>
      <Seo
        title="About | Precision Cabling & Automation"
        description="Precision Cabling & Automation is led by Jamie Anderson in Yarraville. Consultation, specification, installation, programming and ongoing support for homes and commercial sites."
        path="/about-us"
      />
      <section className="narrow-hero">
        <div className="wrap">
          <span className="kicker">About</span>
          <h1>Precision Cabling &amp; Automation</h1>
          <p className="lede">
            A Yarraville practice for security, networks, lighting control, AV, and garden and landscape maintenance.
            The work runs from the first consultation through installation, programming, handover, and maintenance.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="wrap about-grid">
          <div className="prose">
            <h2>Jamie Anderson, principal</h2>
            <p>
              Jamie Anderson is the principal. He consults on the building, specifies the systems, and stays for installation and programming.
              Clients deal with him from the first meeting through handover. Where a project needs other trades, they work to a scope he remains accountable for.
            </p>
            <p>
              The practice advises private clients and project teams on residences and on commercial sites, including large ones, and it also takes smaller jobs that still need the same care.
              The consultation decides the right scope, then the practice carries it out.
            </p>
          </div>
          <figure className="about-figure">
            <img
              src={imageSrc("detail-interior.jpg")}
              alt="Illustrative photograph of a finished interior. Not the premises, and not a client project."
              width="1500"
              height="1125"
            />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>How the practice operates</h2>
            <p>Design, specify, deliver, maintain.</p>
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
          <p className="after-block">
            <Link className="button" to="/consultation">Book a consultation</Link>
          </p>
        </div>
      </section>
      <ConsultBand />
    </>
  );
}
