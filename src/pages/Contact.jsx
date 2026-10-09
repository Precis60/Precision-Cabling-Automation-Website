import Seo from "../components/Seo";
import EnquiryForm from "../components/EnquiryForm";
import { imageSrc } from "../images";
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
      <section className="section light contact-section">
        <div className="wrap contact-layout">
          <div className="contact-aside">
            <figure className="contact-figure">
              <img
                src={imageSrc("detail-interior.jpg")}
                alt="Illustrative photograph of a finished interior. Not a project by this practice, and not the premises."
                width="1500"
                height="1125"
              />
            </figure>
            <address className="contact-block">
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
              <p className="callout">
                Urgent support and call-out: telephone {SITE.phoneDisplay}, any hour.
                Routine correspondence is answered from the admin address.
              </p>
            </address>
          </div>
          <div className="form-panel">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
