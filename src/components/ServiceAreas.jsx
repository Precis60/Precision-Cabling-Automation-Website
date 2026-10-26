import { SERVICE_AREAS } from "../site";

export default function ServiceAreas({ text, collapsible = false }) {
  const areas = (
    <div className="grid-3">
      {SERVICE_AREAS.map((area) => (
        <article className={collapsible ? "area-copy" : "panel"} key={area.region}>
          <h3>{area.region}</h3>
          <p>{area.suburbs.join(", ")}.</p>
        </article>
      ))}
    </div>
  );

  if (collapsible) {
    return (
      <details className="areas-details">
        <summary>Suburbs we cover</summary>
        <div className="disclosure-body">
          {areas}
          <p className="after-block">Other locations by arrangement.</p>
        </div>
      </details>
    );
  }

  return (
    <section className="section" aria-labelledby="areas-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="areas-title">Where we work</h2>
          {text ? <p>{text}</p> : null}
        </div>
        {areas}
        <p className="after-block">Other locations by arrangement.</p>
      </div>
    </section>
  );
}
