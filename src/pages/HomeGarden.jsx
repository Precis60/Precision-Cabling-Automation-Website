import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ConsultBand from "../components/ConsultBand";
import { IconGarden, IconHome } from "../components/Icons";
import { imageSrc } from "../images";
import { SUBURBS } from "../site";

const SECTIONS = [
  { id: "home", label: "Home upkeep" },
  { id: "grounds", label: "Garden & grounds" },
  { id: "visits", label: "How visits run" },
  { id: "questions", label: "Questions" },
];

const FAQS = [
  {
    q: "Do I need to be home for a visit?",
    a: "No. Access is arranged at the site walk — a key, a code, or a concierge arrangement. Where the property has our access or intercom systems, entry can be managed without a key handover.",
  },
  {
    q: "Do you bring your own tools and equipment?",
    a: "Yes. Visits are self-sufficient — we bring what the agreed scope needs. We ask only for access, and for water and power where the job requires them.",
  },
  {
    q: "What happens if it rains?",
    a: "Work that cannot be done in the weather is rescheduled, or swapped for indoor or undercover jobs already on the scope. The visit is rearranged rather than lost.",
  },
  {
    q: "Is the practice insured?",
    a: "Credentials, including insurance, are published on the home page as they are confirmed. Ask on enquiry and the current certificate is sent with the scope.",
  },
  {
    q: "One-off visit, or a regular schedule?",
    a: "Both. A single visit for a tidy-up or a list of repairs, or an agreed interval — weekly, fortnightly, monthly, or seasonal — with the scope written down and priced per visit.",
  },
  {
    q: "How is a visit priced?",
    a: "Per visit, on the written scope agreed after the site walk. The price is confirmed before the first visit; there is no obligation from the walk itself.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HomeGarden() {
  return (
    <>
      <Seo
        title="Home & Garden Maintenance | Precision Cabling & Automation"
        description="A dedicated home and garden maintenance service from the same Yarraville practice. House upkeep, gardens and grounds, on an agreed visit interval, for residential and commercial sites."
        path="/home-garden"
        jsonLd={jsonLd}
      />
      <section className="narrow-hero">
        <div className="wrap">
          <span className="kicker">Home &amp; garden maintenance</span>
          <h1>One practice for the house and the grounds.</h1>
          <p className="lede">
            A dedicated maintenance service for the property as a whole — the house,
            the garden, and the grounds between them — on an interval agreed for that site.
          </p>
          <nav aria-label="Sections on this page">
            <ul className="jump">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <Link to={`/home-garden?section=${section.id}`}>{section.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <article className="service-block" id="home">
        <div className="wrap">
          <figure className="service-media">
            <img
              src={imageSrc("detail-interior.jpg")}
              alt="Illustrative photograph of a finished interior. Not a project by this practice."
              width="1500"
              height="1125"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="service-copy">
            <span className="kicker">01</span>
            <h2>
              <IconHome />
              Home upkeep
            </h2>
            <p className="lede">
              The list of jobs a house accumulates, handled on a visit instead of a search for another trade.
            </p>
            <ul className="points">
              <li>Minor repairs and adjustments — doors, fixtures, fittings, and the small faults that collect.</li>
              <li>Gutters, downpipes, and external checks, so the weather is not the inspection.</li>
              <li>Decks, paths, and paved areas kept clean and safe to use.</li>
              <li>One-off tidy-ups, including pre-sale and end-of-lease preparation.</li>
            </ul>
            <p>
              <Link className="button" to="/contact?intent=assessment">Request a site assessment</Link>
            </p>
          </div>
        </div>
      </article>

      <article className="service-block light flip" id="grounds">
        <div className="wrap">
          <figure className="service-media">
            <img
              src={imageSrc("service-garden.jpg")}
              alt="Illustrative photograph of a maintained garden. Not a project by this practice."
              width="1400"
              height="933"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="service-copy">
            <span className="kicker">02</span>
            <h2>
              <IconGarden />
              Garden &amp; grounds
            </h2>
            <p className="lede">
              Scheduled care of gardens and grounds — a private garden, or the grounds of a commercial site.
            </p>
            <ul className="points">
              <li>Lawns, beds, hedges, and edges, on the interval the site needs.</li>
              <li>Pruning, mulching, planting, and seasonal clean-ups.</li>
              <li>Paths, fences, and outdoor areas checked on the same visit.</li>
              <li>Homes, commercial grounds, and the shared areas of multi-residence sites.</li>
            </ul>
            <p>
              <Link className="button" to="/contact?intent=assessment">Request a site assessment</Link>
            </p>
          </div>
        </div>
      </article>

      <section className="section" id="visits" aria-labelledby="visits-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="visits-title">How visits run</h2>
            <p>
              A written scope and an agreed interval, so the property is maintained rather than rescued.
            </p>
          </div>
          <div className="grid-3">
            <article className="panel">
              <h3>Walk the property</h3>
              <p>
                We walk the house and the grounds with you, list what needs doing, and note what can wait.
              </p>
            </article>
            <article className="panel">
              <h3>Set the interval</h3>
              <p>
                Weekly, fortnightly, monthly, or seasonal. The scope is written down and priced per visit before the first one.
              </p>
            </article>
            <article className="panel">
              <h3>Same practice, each visit</h3>
              <p>
                This practice does the work and stays accountable for it. Changes to the scope go through the same contact.
              </p>
            </article>
          </div>
          <p className="after-block">
            Where the site already has our irrigation, outdoor lighting, or access systems, the maintenance visit is arranged around them.
          </p>
          <p className="after-block">
            Visits run across Yarraville and Melbourne’s inner west — {SUBURBS.slice(1).join(", ")} — with wider travel by arrangement.
          </p>
        </div>
      </section>

      <section className="section light" id="questions" aria-labelledby="questions-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="questions-title">Questions</h2>
            <p>What clients usually ask before the first visit.</p>
          </div>
          <div className="grid-2">
            {FAQS.map((item) => (
              <article className="panel" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConsultBand
        title="Arrange a maintenance visit"
        text="Tell us the property and what needs attention. We will confirm a scope and an interval, and the same practice carries out the visits."
      />
    </>
  );
}
