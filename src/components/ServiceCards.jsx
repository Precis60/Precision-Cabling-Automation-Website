import { Link } from "react-router-dom";
import { IconAccess, IconAv, IconGarden, IconLighting, IconNetwork, IconSecurity } from "./Icons";
import { imageSrc } from "../images";
import { SERVICES } from "../serviceContent";

const ICONS = {
  security: IconSecurity,
  access: IconAccess,
  networks: IconNetwork,
  lighting: IconLighting,
  av: IconAv,
  garden: IconGarden,
};

export default function ServiceCards({ as = "h3" }) {
  const Heading = as;

  return (
    <div className="service-grid">
      {SERVICES.map((service) => {
        const Icon = ICONS[service.icon];
        return (
          <Link className="service-card" key={service.slug} to={`/services/${service.slug}`}>
            <img
              src={imageSrc(service.image.file)}
              alt={service.image.alt}
              width={service.image.width}
              height={service.image.height}
              loading="eager"
              decoding="async"
            />
            <span className="service-card-body">
              <Heading>
                {Icon ? <Icon /> : null}
                {service.title}
              </Heading>
              <p>{service.blurb}</p>
              <span className="more">Learn more →</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
