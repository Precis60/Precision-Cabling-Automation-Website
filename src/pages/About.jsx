import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { imageSrc } from "../images";
import { EXPERIENCE } from "../site";

export default function About() {
  return (
    <>
      <Seo
        title="About | Precision Cabling & Automation"
        description="Precision Cabling & Automation is led by Jamie Anderson, with 15 years in high-end residential work. Consultation, installation, programming and support across Melbourne, the Mornington Peninsula, and the Bellarine."
        path="/about-us"
      />
      <section className="narrow-hero">
        <div className="wrap">
          <span className="kicker">About</span>
          <h1>Precision Cabling &amp; Automation</h1>
        </div>
      </section>

      <section className="section light">
        <div className="wrap about-grid">
          <div className="prose">
            <h2>Jamie Anderson</h2>
            <p>
              Jamie Anderson is the principal, with {EXPERIENCE}. He consults on the building, specifies the systems, and stays for installation and programming. Clients deal with him from the first meeting through handover. Where a project needs other trades, they work to a scope he remains accountable for.
            </p>
            <p>
              The practice works across Melbourne, the Mornington Peninsula and the Bellarine. Private clients, architects, builders, and the people who run a building all start with a consultation. It covers residences and commercial sites, including large ones, and smaller jobs that still need the same care. Security, networks, lighting control, AV, and home and garden maintenance run from that consultation through handover. Maintenance and urgent call-out stay with the same contact.
            </p>
            <p>
              <Link className="button" to="/consultation">Book a consultation</Link>
            </p>
          </div>
          <figure className="about-figure">
            <img
              src={imageSrc("detail-interior.jpg")}
              alt="Illustrative photograph of a finished interior. Not the premises, and not a client project."
              width="1500"
              height="1125"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
