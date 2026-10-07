import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { SITE } from "../site";

export default function Warranty() {
  return (
    <>
      <Seo
        title="Support and Warranty | Precision Cabling & Automation"
        description="Support and the 365-day limited warranty on physical goods from Precision Cabling & Automation. Urgent call-out is available 24 hours on 0413 729 663."
        path="/support-warranty"
      />
      <article className="section">
        <div className="wrap prose">
          <span className="kicker">Policies</span>
          <h1>Support &amp; Warranty</h1>
          <p>
            This page states how to reach the practice, and the limited warranty on physical goods previously published for Precision Cabling Suppliers Pty Ltd.
            The unfinished help text on the old page — including browser-cache advice and a placeholder support address — is not carried across.
            Published October 2026.
          </p>

          <h2>How to get support</h2>
          <p>
            Contact us before arranging your own repair, so we can identify the fault and the sensible next step.
          </p>
          <p>
            {SITE.street}, {SITE.locality}<br />
            Email: <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a><br />
            Mobile: <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </p>
          <p>
            Urgent support and call-out are available 24 hours. Call the mobile and leave the site address and the fault if the line is engaged.
            Administration correspondence can also go to <a href={`mailto:${SITE.adminEmail}`}>{SITE.adminEmail}</a>.
          </p>
          <p>
            Installation and programming are carried out under the written scope for that job.
            The 365-day warranty below applies to physical goods. It is not a substitute for the guarantees the Australian Consumer Law does not allow us to exclude.
          </p>

          <h2>Limited warranty on physical goods</h2>
          <p>
            This limited warranty applies to physical goods, and only to physical goods, purchased from Precision Cabling Suppliers Pty Ltd (“Physical Goods”).
            {SITE.name} publishes it as the goods warranty of the practice. {SITE.abn}.
          </p>

          <h3>What this limited warranty covers</h3>
          <p>
            Defects in material or workmanship under normal use during the warranty period.
            During that period, Precision Cabling Suppliers Pty Ltd will repair or replace, at no charge, products or parts of a product that prove defective because of improper material or workmanship, under normal use and maintenance.
          </p>

          <h3>What we will do</h3>
          <p>
            We will repair the product at no charge, using new or refurbished replacement parts.
          </p>

          <h3>How long coverage lasts</h3>
          <p>
            The warranty period for physical goods purchased from Precision Cabling Suppliers Pty Ltd is 365 days from the date of purchase.
            A replacement physical good or part takes the remainder of the original warranty, or 365 days from the date of replacement or repair, whichever is longer.
          </p>

          <h3>What this limited warranty does not cover</h3>
          <p>
            Any problem caused by conditions, malfunctions, or damage that do not result from defects in material or workmanship.
          </p>

          <h3>What you need to do</h3>
          <p>
            Contact us first, using the address, support email, or mobile above, so we can determine the problem and the appropriate remedy.
          </p>
          <p>
            <Link to="/company-policies">All policies</Link>
            {" · "}
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </article>
    </>
  );
}
