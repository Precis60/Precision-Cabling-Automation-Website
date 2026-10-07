import Seo from "../components/Seo";
import EnquiryForm from "../components/EnquiryForm";
import { SITE } from "../site";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Precision Cabling & Automation"
        description="Contact Precision Cabling & Automation in Yarraville. Book a consultation, request a site assessment, or call 0413 729 663 for urgent 24-hour support."
        path="/contact"
      />
      <section className="narrow-hero">
        <div className="wrap">
          <span className="kicker">Contact</span>
          <h1>Write, or call.</h1>
          <p className="lede">
            Use the form for a consultation, a site assessment, or a general note.
            For an urgent fault, call. Support and call-out are available 24 hours.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap contact-layout">
          <address className="contact-block panel">
            <strong>{SITE.name}</strong>
            <p>
              {SITE.street}<br />
              {SITE.locality}
            </p>
            <p>
              Mobile: <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a><br />
              Admin: <a href={`mailto:${SITE.adminEmail}`}>{SITE.adminEmail}</a><br />
              Support: <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
            </p>
            <p>{SITE.abn}</p>
            <p className="placeholder-note">
              Urgent support and call-out: telephone {SITE.phoneDisplay}, any hour.
              Routine correspondence is answered from the admin address.
            </p>
          </address>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
