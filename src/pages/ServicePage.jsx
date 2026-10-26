import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import ConsultBand from "../components/ConsultBand";
import FaqList from "../components/FaqList";
import { IconAccess, IconAv, IconGarden, IconLighting, IconNetwork, IconSecurity } from "../components/Icons";
import { imageSrc } from "../images";
import { getService } from "../serviceContent";
import { SITE } from "../site";
import NotFound from "./NotFound";

const ICONS = {
  security: IconSecurity,
  access: IconAccess,
  networks: IconNetwork,
  lighting: IconLighting,
  av: IconAv,
  garden: IconGarden,
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);
  const jsonLd = useMemo(() => {
    if (!service) return null;
    const graph = [
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: service.hero,
        provider: {
          "@type": "ProfessionalService",
          name: SITE.name,
          telephone: SITE.phoneTel,
          email: SITE.email,
        },
        areaServed: ["Melbourne", "Mornington Peninsula", "Bellarine"],
        url: `${SITE.pagesUrl}#/services/${service.slug}`,
      },
    ];
    if (service.faqs?.length) {
      graph.push({
        "@type": "FAQPage",
        mainEntity: service.faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      });
    }
    return { "@context": "https://schema.org", "@graph": graph };
  }, [service]);

  if (!service) return <NotFound />;

  const Icon = ICONS[service.icon];

  return (
    <>
      <Seo
        title={`${service.title} | Precision Cabling & Automation`}
        description={service.hero}
        path={`/services/${service.slug}`}
        jsonLd={jsonLd}
        image={`${SITE.pagesUrl}images/${service.image.file}`}
      />
      <section className="hero service-hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="kicker">Services</span>
            <h1>
              {Icon ? <Icon /> : null}
              {service.title}
            </h1>
            <p className="lede">{service.hero}</p>
          </div>
          <figure className="service-media">
            <img
              src={imageSrc(service.image.file)}
              alt={service.image.alt}
              width={service.image.width}
              height={service.image.height}
            />
          </figure>
        </div>
      </section>

      <section className="section service-detail">
        <div className="wrap service-sections">
          {service.sections.map((section) => (
            <div key={section.title} id={section.id}>
              <h2>{section.title}</h2>
              <ul className="points">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
          {service.related && (
            <p className="related-service">
              See <Link to={`/services/${service.related.slug}`}>{service.related.text}</Link>.
            </p>
          )}
        </div>
      </section>

      {service.faqs?.length > 0 && (
        <section className="section light" id="questions" aria-labelledby="questions-title">
          <div className="wrap service-sections">
            <h2 id="questions-title">Questions</h2>
            <FaqList items={service.faqs} />
          </div>
        </section>
      )}

      <ConsultBand
        title={service.cta?.title}
        text={service.cta?.text || "Tell us about your site and we'll recommend the right next step."}
      />
    </>
  );
}
