import { Link } from "react-router-dom";
import { SITE } from "../site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <span className="mark" aria-hidden="true">PCA</span>
          <strong>{SITE.name}</strong>
          <address className="contact-block">
            {SITE.street}
            <br />
            {SITE.locality}
            <br />
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </address>
          <p>
            <a href={`mailto:${SITE.adminEmail}`}>{SITE.adminEmail}</a>
            <br />
            <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
          </p>
          <p>{SITE.abn}</p>
        </div>
        <div>
          <strong>Visit</strong>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/consultation">Consultation</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <strong>Policies</strong>
          <ul>
            <li><Link to="/company-policies">Policies</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/support-warranty">Support &amp; Warranty</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap fine">
        Urgent support and call-out: <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>, 24 hours.
      </div>
    </footer>
  );
}
