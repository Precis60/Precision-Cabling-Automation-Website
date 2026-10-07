import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { SITE } from "../site";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Precision Cabling & Automation"
        description="Privacy policy for Precision Cabling & Automation. How contact-form and project information is collected, used, stored, and corrected under the Australian Privacy Principles."
        path="/privacy"
      />
      <article className="section">
        <div className="wrap prose">
          <span className="kicker">Policies</span>
          <h1>Privacy Policy</h1>
          <p>
            {SITE.name} handles personal information in line with the Australian Privacy Principles in the Privacy Act 1988 (Cth).
            This policy describes that handling for this website and for the consulting and delivery work that follows an enquiry.
            It replaces the short policy previously published on the old site, including the unfinished placeholder sentences in that text.
            Published October 2026. {SITE.abn}.
          </p>
          <p>
            A copy of the Australian Privacy Principles is available from the Office of the Australian Information Commissioner at{" "}
            <a href="https://www.oaic.gov.au/">www.oaic.gov.au</a>.
          </p>

          <h2>Who we are</h2>
          <p>
            The practice is {SITE.name}, {SITE.street}, {SITE.locality}.
            Privacy contact: <a href={`mailto:${SITE.adminEmail}`}>{SITE.adminEmail}</a>, {SITE.phoneDisplay}.
            The earlier policy used the name Precision Cabling Suppliers. Correspondence under either name is handled by this practice.
          </p>

          <h2>What we collect</h2>
          <p>Personal information is information or an opinion that identifies you. On this site and in the work that follows, that commonly includes:</p>
          <ul>
            <li>Name, email address, and phone number from the contact form, from email, or from a call.</li>
            <li>Site type, systems of interest, timeline, and the message you send.</li>
            <li>Project addresses, drawings, and notes you or your advisers give us so the work can be designed and installed.</li>
            <li>Payment details when a job is invoiced, held only as needed to take payment.</li>
          </ul>
          <p>
            We collect this from you: the form, email, telephone, and meetings. We may also receive it from your architect, builder, or building manager when you have asked them to involve us.
            We do not buy marketing lists.
          </p>

          <h2>Why we collect it</h2>
          <p>We use personal information to:</p>
          <ul>
            <li>Reply to enquiries and book consultations.</li>
            <li>Design, specify, install, program, and maintain the systems you engage us for.</li>
            <li>Keep client records, including warranty and support history.</li>
            <li>Meet legal and accounting duties.</li>
            <li>Send occasional notes about the practice, which you can opt out of by writing to {SITE.adminEmail}.</li>
          </ul>
          <p>
            We may use information for a secondary purpose closely related to the primary one, where you would reasonably expect that.
            We do not sell personal information.
          </p>

          <h2>Sensitive information</h2>
          <p>
            Sensitive information, as defined in the Privacy Act, includes health information and information about racial or ethnic origin, political or religious views, union membership, and criminal record.
            We do not seek it for marketing. If a project requires it — for example an access rule tied to a mobility need — we use it only for that purpose, for a directly related purpose, with your consent, or where the law requires or authorises it.
          </p>

          <h2>Contact form, email, and logs</h2>
          <p>
            The form asks for your name, email, phone, site type, systems of interest, timeline, and message.
            When the site is configured with a form service, the browser sends the enquiry to that service and it is delivered to {SITE.adminEmail}.
            When no form service is configured, the form opens your own email application addressed to {SITE.adminEmail} and does not pass through a third-party form processor.
          </p>
          <p>
            This site does not set advertising cookies and does not run a third-party analytics product unless one is later added and this policy is updated.
            The host (GitHub Pages, or a later host) may keep ordinary server logs, such as IP address and browser type, to operate and protect the site.
            Those logs are not used to build a marketing profile.
          </p>

          <h2>Disclosure</h2>
          <p>We disclose personal information:</p>
          <ul>
            <li>To trades and suppliers engaged on your job, limited to what they need.</li>
            <li>To the form or email provider that carries an enquiry, when one is in use.</li>
            <li>Where you consent.</li>
            <li>Where the law requires or authorises it.</li>
          </ul>
          <p>
            GitHub Pages and some email or form providers process data on servers that may be outside Australia.
            We use them to operate this site and to receive enquiries. We do not authorise them to use your information for their own marketing.
          </p>

          <h2>Storage and retention</h2>
          <p>
            We store personal information so as to protect it reasonably from misuse, loss, and unauthorised access, modification, or disclosure.
            When it is no longer needed, we take reasonable steps to destroy it or de-identify it.
            Client files are kept for a minimum of seven years.
          </p>

          <h2>Access and correction</h2>
          <p>
            You may ask for the personal information we hold about you, and you may ask us to correct it, subject to the exceptions in the Privacy Act.
            Write to <a href={`mailto:${SITE.adminEmail}`}>{SITE.adminEmail}</a>.
            We do not charge a fee to make the request. We may charge a reasonable administrative cost to provide a copy.
            We may ask you to confirm your identity before we release information.
          </p>
          <p>
            If you believe a record is inaccurate or out of date, tell us and we will take reasonable steps to correct it.
          </p>

          <h2>Complaints</h2>
          <p>
            Write to {SITE.adminEmail} or call {SITE.phoneDisplay}.
            Address: {SITE.street}, {SITE.locality}.
            If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner at www.oaic.gov.au.
          </p>

          <h2>Changes</h2>
          <p>This policy may be updated. The current version is the one on this page.</p>
          <p><Link to="/company-policies">All policies</Link></p>
        </div>
      </article>
    </>
  );
}
