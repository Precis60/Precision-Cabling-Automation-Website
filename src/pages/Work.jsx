import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ConsultBand from "../components/ConsultBand";
import { CASE_STUDIES, CREDENTIALS } from "../site";

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
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Credentials</h2>
            <p className="placeholder-note">
              Insurance, licences, and the manufacturers this practice specifies are listed here once confirmed.
              Empty on purpose.
            </p>
          </div>
          <ul className="cred-list">
            {CREDENTIALS.map((item) => (
              <li key={item.label}>
                <span className="label">Placeholder</span>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
          <p className="after-block">
            <Link className="more" to="/consultation">Discuss a current project</Link>
          </p>
        </div>
      </section>
      <ConsultBand />
    </>
  );
}
