import Seo from "../components/Seo";
import ConsultBand from "../components/ConsultBand";
import { CASE_STUDIES } from "../site";

export default function Work() {
  return (
    <>
      <Seo
        title="Work | Precision Cabling & Automation"
        description="Anonymised case study shells for Precision Cabling & Automation. Project narratives and outcomes will be published when supplied. No results are invented."
        path="/work"
      />
      <section className="narrow-hero">
        <div className="wrap">
          <span className="kicker">Work</span>
          <h1>Case studies, when they can be told.</h1>
          <p className="lede">
            Clients in private homes and on commercial sites often require anonymity.
            The three shells below are reserved for that writing. They are labelled as placeholders.
            No performance claims are made.
          </p>
        </div>
      </section>
      <section className="section light">
        <div className="wrap grid-3">
          {CASE_STUDIES.map((study) => (
            <article className="study" key={study.id}>
              <div className="study-empty">Photography withheld</div>
              <div className="study-body">
                <span className="kicker">Study {study.id}</span>
                <h2>{study.title}</h2>
                <p><strong>{study.label}</strong></p>
                <p>{study.text}</p>
                <span className="tag">{study.systems}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ConsultBand />
    </>
  );
}
