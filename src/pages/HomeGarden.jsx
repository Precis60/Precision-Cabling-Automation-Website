import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ConsultBand from "../components/ConsultBand";
import { IconGarden, IconHome } from "../components/Icons";
import { imageSrc } from "../images";

const SECTIONS = [
  { id: "home", label: "Home upkeep" },
  { id: "grounds", label: "Garden & grounds" },
  { id: "visits", label: "How visits run" },
];

export default function HomeGarden() {
  return (
    <>
      <Seo
        title="Home & Garden Maintenance | Precision Cabling & Automation"
        description="A dedicated home and garden maintenance service from the same Yarraville practice. House upkeep, gardens and grounds, on an agreed visit interval, for residential and commercial sites."
        path="/home-garden"
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
        </div>
      </section>

      <ConsultBand
        title="Arrange a maintenance visit"
        text="Tell us the property and what needs attention. We will confirm a scope and an interval, and the same practice carries out the visits."
      />
    </>
  );
}
