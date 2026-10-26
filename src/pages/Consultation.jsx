import Seo from "../components/Seo";
import EnquiryForm from "../components/EnquiryForm";
import { SITE } from "../site";

export default function Consultation() {
  return (
    <>
      <Seo
        title="Book a consultation | Precision Cabling & Automation"
        description="A 60–90 minute consultation. You leave with an options memo, a schematic where it helps, and budget bands. Fees confirmed on enquiry. We install and program the work we design."
        path="/consultation"
      />
      <section className="narrow-hero">
        <div className="wrap">
          <span className="kicker">Consultation</span>
          <h1>Book a consultation</h1>
          <p className="lede">
            A working session on the site and the systems. When the fit is right, it leads to design, installation and programming.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          <ul className="fact-list">
            <li>
              <span className="label">Fee</span>
              <strong>Confirmed on enquiry</strong>
              <span>No published dollar figure.</span>
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

      <section className="section" aria-label="What the consultation includes">
        <div className="wrap prose">
          <div className="disclosure">
            <details>
              <summary>What it covers</summary>
              <div className="disclosure-body">
                <ul>
                  <li>How the place is used, and by whom.</li>
                  <li>Security and access, networks, lighting and automation, AV, and garden maintenance when the grounds are in the brief.</li>
                  <li>Constraints already set by the architecture, the builder, existing plant, timing, and discretion.</li>
                  <li>What handover has to look like, and who operates the system.</li>
                  <li>The person who can decide, plus the architect, builder, or facilities lead if one is appointed. A small group is enough.</li>
                </ul>
              </div>
            </details>
            <details>
              <summary>What you leave with</summary>
              <div className="disclosure-body">
                <p>
                  An options memo, a schematic when a drawing helps, and budget bands. If you continue with us, that memo starts the specification, then installation and programming.
                </p>
              </div>
            </details>
            <details>
              <summary>What follows</summary>
              <div className="disclosure-body">
                <ul>
                  <li>Design, specification, installation, and programming — we deliver the system.</li>
                  <li>Design and specification for a builder or another trade, where you want the documents and will arrange delivery separately.</li>
                  <li>Care of a system already installed: adjustments, programming changes, and urgent call-out.</li>
                </ul>
                <p>
                  Projects of any size are welcome. We confirm the fit before booking, and we step back if the request is only a box of product or we cannot be accountable. An urgent fault can be called without this process.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section light" aria-labelledby="book-title">
        <div className="wrap contact-layout">
          <div>
            <h2 id="book-title">Book the session</h2>
            <p>
              Tell us the site, the systems, and the timing. We reply from {SITE.email} with the fee and the next session.
            </p>
            <p className="callout">
              If it cannot wait, call{" "}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>. Urgent support is available 24 hours.
            </p>
          </div>
          <div className="form-panel">
            <EnquiryForm defaultIntent="consultation" />
          </div>
        </div>
      </section>
    </>
  );
}
