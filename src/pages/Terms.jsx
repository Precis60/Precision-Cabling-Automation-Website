import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { SITE } from "../site";

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service | Precision Cabling & Automation"
        description="Terms of Service for Precision Cabling & Automation, Yarraville. Victorian law, Australian Consumer Law, goods and services, and dispute resolution."
        path="/terms"
      />
      <article className="section">
        <div className="wrap prose">
          <span className="kicker">Policies</span>
          <h1>Terms of Service</h1>
          <p>
            These terms govern use of this website and the goods and services offered by the business.
            They carry the substance of the terms previously published for www.precisioncabling.com.au,
            edited so they describe this marketing and enquiry site rather than an online shop.
            Published October 2026. {SITE.abn}.
          </p>
          <p>
            The public name of the practice is {SITE.name}. The previous terms named the operator as Precision Cabling Suppliers.
            If the registered entity name differs, it will be confirmed with the ABN. Until then, contact {SITE.adminEmail}.
          </p>
          <p>
            By using this site, you indicate that you have read these terms and agree to abide by them.
            These terms contain a dispute resolution clause that affects how disputes are resolved. Read it carefully.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Content published on this site — including text, logos, documents, and downloadable files — is the property of the business and the site’s creators.
          </p>

          <h2>Age</h2>
          <p>
            The minimum age to use this site is 18. By using it, you agree that you are over 18. We do not accept responsibility for a false statement about age.
          </p>

          <h2>Accounts</h2>
          <p>
            This website does not offer customer accounts. If we later open an account for a project, you are responsible for keeping access details confidential, and for keeping the contact details we hold accurate. We may suspend access that is used unlawfully or in breach of these terms.
          </p>

          <h2>Goods and services</h2>
          <p>
            Goods and services are supplied under an agreed scope after enquiry. They are not sold from a cart on this website.
            The work covers security, networking, and electrical, and the services of installation and programming.
            Services are paid in full on completion of the service, unless a written scope says otherwise.
          </p>
          <p>
            Descriptions on this site are as accurate as we can make them. A written scope governs the job.
            You agree to purchase goods and services at your own risk, subject to the Australian Consumer Law and any rights that cannot be excluded.
            We may modify, reject, or cancel an order when it becomes necessary. If we cancel and have already taken payment, we refund the amount paid. You should check your payment record for the refund.
          </p>

          <h2>Third-party goods and services</h2>
          <p>
            A project may include goods or services from other parties. We do not guarantee the quality or accuracy of goods and services those parties provide on their own account.
          </p>

          <h2>Payments</h2>
          <p>
            We accept credit card and direct debit. When you give us payment details, you authorise us to charge the amount due to that instrument.
            If we believe a payment has broken the law or these terms, we may cancel or reverse the transaction.
          </p>

          <h2>Shipping and delivery of goods</h2>
          <p>
            When physical goods are supplied by post, delivery is standard post and takes 5–7 business days, excluding weekends and public holidays.
            Delivery is made as soon as reasonably possible. Times can move when circumstances intervene.
            Delivery charges are payable in addition to the price of the goods.
            You must give a complete delivery address and the recipient’s name. We are not liable for delivery to the wrong address or person because the details you gave were incomplete or inaccurate.
          </p>

          <h2>Consumer protection</h2>
          <p>
            Where the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010) or any other consumer protection legislation applies and cannot be excluded, these terms do not limit your rights under that legislation.
            These terms are read subject to those mandatory provisions. If there is a conflict, the mandatory provisions apply.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the extent the law allows, Precision Cabling Suppliers and {SITE.name}, and our directors, officers, agents, employees, and affiliates, are not liable for actions, claims, losses, damages, liabilities, and expenses, including legal fees, arising from your use of this site.
          </p>

          <h2>Indemnity</h2>
          <p>
            Except where prohibited by law, by using this site you indemnify those same parties against actions, claims, losses, damages, liabilities, and expenses, including legal fees, arising out of your use of the site or your breach of these terms.
          </p>

          <h2>Applicable law</h2>
          <p>These terms are governed by the laws of the State of Victoria.</p>

          <h2>Dispute resolution</h2>
          <p>
            If a dispute is not resolved by informal discussion, you and the business agree to submit it first to a non-binding mediator and, if mediation fails, to an arbitrator.
            The arbitrator’s decision is final and binding. The mediator or arbitrator must be a neutral person acceptable to both sides.
            The costs of mediation or arbitration are shared equally.
          </p>
          <p>
            Both sides keep the right to bring an action in a small claims court, and to seek injunctive relief or a remedy for intellectual property infringement.
          </p>

          <h2>Severability</h2>
          <p>
            If a provision is found inconsistent or invalid, it is removed. The remaining provisions continue.
          </p>

          <h2>Changes</h2>
          <p>
            These terms may be amended to stay within the law and to match how the site and the practice operate.
            Changes will be notified by email or by a notice on this site.
          </p>

          <h2>Contact</h2>
          <p>
            {SITE.street}, {SITE.locality}<br />
            Email: <a href={`mailto:${SITE.adminEmail}`}>{SITE.adminEmail}</a><br />
            Mobile: <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </p>
          <p>
            <Link to="/company-policies">All policies</Link>
          </p>
        </div>
      </article>
    </>
  );
}
