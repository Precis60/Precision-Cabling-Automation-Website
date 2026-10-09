import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import EnquiryForm from "../components/EnquiryForm";
import { SITE } from "../site";

export default function Consultation() {
  return (
    <>
      <Seo
        title="Book a consultation | Precision Cabling & Automation"
        description="A consultation for homes and commercial sites of any size. Session scope, who should attend, duration, and the options memo. Fees confirmed on enquiry. We install and program the work we design."
        path="/consultation"
      />
      <section className="narrow-hero">
        <div className="wrap">
          <span className="kicker">Consultation</span>
          <h1>The front door for the work.</h1>
          <p className="lede">
            A consultation is how a project starts. It is a working session on the site and the systems,
            and it leads, when the fit is right, to design, specification, installation, and programming.
            We take that path on projects of any size.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          <ul className="fact-list">
            <li>
              <span className="label">Fee</span>
              <strong>Confirmed on enquiry</strong>
              <span>Consultation fees confirmed on enquiry.</span>
            </li>
            <li>
              <span className="label">Duration</span>
              <strong>60–90 minutes</strong>
              <span>On site, or by arrangement. A large site may need a second visit before the memo.</span>
            </li>
            <li>
              <span className="label">Deliverable</span>
              <strong>Options memo</strong>
              <span>With a schematic where it helps, and budget bands rather than a single invented figure.</span>
            </li>
            <li>
              <span className="label">Urgent</span>
              <strong>24-hour call-out</strong>
              <span>
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>What the session covers</h2>
          <ul>
            <li>How the place is used, and by whom.</li>
            <li>Which systems are in play: security and access, networks, lighting and automation, AV and collaboration, and garden and landscape maintenance when the grounds are part of the brief.</li>
            <li>Constraints already set by the architecture, the builder, existing plant, timing, and discretion.</li>
            <li>What handover has to look like, including who will operate the system day to day.</li>
          </ul>

          <h2>Who should attend</h2>
          <p>
            The person who can decide, and the architect, builder, or facilities lead if one is already appointed.
            A small group is enough. We do not need every stakeholder in the room to begin.
          </p>

          <h2>What you leave with</h2>
          <p>
            An options memo. A schematic when a drawing will make the decision clearer.
            Budget bands for the paths worth taking. If you engage us beyond the consultation, that memo becomes the start of specification, then installation and programming.
          </p>

          <h2>What follows</h2>
          <p>After the consultation, a typical engagement is one of these:</p>
          <ul>
            <li>Design, specification, installation, and programming — we deliver the system.</li>
            <li>Design and specification for a builder or another trade, where you want the documents and will arrange delivery separately.</li>
            <li>Care of a system already installed: adjustments, programming changes, and urgent call-out.</li>
          </ul>

          <h2>Whether we take the work</h2>
          <p>
            Residential and commercial projects of any size are welcome when the systems need to be thought through and then installed or programmed as one job.
            We confirm that fit before the session is booked. We step back when the request is only a box of product, or when we cannot be the accountable party for the outcome.
            An urgent fault can be called in without waiting for this process.
          </p>
          <p>
            Consultation fees confirmed on enquiry. There is no published dollar figure until that is set.
          </p>
          <p>
            <Link to="/contact?intent=consultation">Prefer to write first? Use the contact form.</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="book-title">
        <div className="wrap contact-layout">
          <div>
            <h2 id="book-title">Book the session</h2>
            <p>
              Send the site type, the systems, and the timing. We reply from {SITE.adminEmail} with the fee and the next available session.
            </p>
            <p>
              If something has failed and the site cannot wait, call{" "}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>. Urgent support and call-out are available 24 hours.
            </p>
          </div>
          <EnquiryForm defaultIntent="consultation" />
        </div>
      </section>
    </>
  );
}
