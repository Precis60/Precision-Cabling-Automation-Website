import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ConsultBand from "../components/ConsultBand";
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
            A Yarraville practice for security, networks, lighting control, and AV.
            The work runs from the first consultation through installation, programming, handover, and maintenance.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap prose">
          <h2>Jamie Anderson, principal</h2>
          <p>
            Jamie Anderson is the principal. He consults on the building, specifies the systems, and stays for installation and programming.
            Clients deal with him from the first meeting through handover. Where a project needs other trades, they work to a scope he remains accountable for.
          </p>
          <p>
            The practice advises private clients and project teams on residences and on commercial sites, including large ones, and it also takes smaller jobs that still need the same care.
            The point of the consultation is to decide the right scope, then to carry it out.
          </p>

          <h2>How the practice operates</h2>
          <p>Design, specify, deliver, maintain.</p>
          <ul>
            <li>Design — the systems and the way they meet.</li>
            <li>Specify — equipment, cabling, and responsibilities in writing.</li>
            <li>Deliver — installation and programming on site.</li>
            <li>Maintain — handover notes, later changes, and 24-hour access for urgent call-out.</li>
          </ul>
        </div>
        <div className="wrap" style={{ marginTop: "2.5rem" }}>
          <div className="steps">
            {PROCESS.map((item) => (
              <article className="step" key={item.step}>
                <span className="num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "2rem" }}>
            <Link to="/consultation">Book a consultation</Link>
          </p>
        </div>
      </section>
      <ConsultBand />
    </>
  );
}
