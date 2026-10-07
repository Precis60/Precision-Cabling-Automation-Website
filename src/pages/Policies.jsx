import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function Policies() {
  return (
    <>
      <Seo
        title="Policies | Precision Cabling & Automation"
        description="Terms of Service, Privacy Policy, and Support and Warranty for Precision Cabling & Automation, Yarraville."
        path="/company-policies"
      />
      <section className="narrow-hero">
        <div className="wrap">
          <span className="kicker">Policies</span>
          <h1>Terms, privacy, and warranty.</h1>
          <p className="lede">
            These pages carry the substance of the previous website’s terms and warranty, edited for this site,
            and a privacy policy written for Australian practice. Have a solicitor review them before you rely on them in a dispute.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap policy-links">
          <Link to="/terms">
            Terms of Service
            <span>Use of this website, sale of goods and services, Victorian law, and dispute resolution.</span>
          </Link>
          <Link to="/privacy">
            Privacy Policy
            <span>What the contact form collects, how long client files are kept, and how to ask for access or correction.</span>
          </Link>
          <Link to="/support-warranty">
            Support &amp; Warranty
            <span>How to reach support, including urgent call-out, and the 365-day limited warranty on physical goods.</span>
          </Link>
        </div>
      </section>
    </>
  );
}
