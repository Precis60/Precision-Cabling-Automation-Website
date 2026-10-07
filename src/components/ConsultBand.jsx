import { Link } from "react-router-dom";
import { SITE } from "../site";

export default function ConsultBand({
  title = "Book a consultation",
  text = "Tell us the site, the systems, and the timing. We will confirm whether a consultation is the right next step, and what it covers.",
}) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div className="inner">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <p className="urgent">
              Urgent fault: call{" "}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>. Support and call-out are available 24 hours.
            </p>
          </div>
          <div className="hero-actions">
            <Link className="button" to="/consultation">Book a consultation</Link>
            <Link className="button secondary" to="/contact?intent=assessment">Request a site assessment</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
