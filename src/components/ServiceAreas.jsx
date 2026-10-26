import { SERVICE_AREAS } from "../site";

export default function ServiceAreas({ text }) {
  return (
    <section className="section" aria-labelledby="areas-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="areas-title">Where we work</h2>
          <p>{text}</p>
        </div>
        <div className="grid-3">
          {SERVICE_AREAS.map((area) => (
            <article className="panel" key={area.region}>
              <h3>{area.region}</h3>
              <p>{area.suburbs.join(", ")}.</p>
            </article>
          ))}
        </div>
        <p className="after-block">Other locations by arrangement.</p>
      </div>
    </section>
  );
}
