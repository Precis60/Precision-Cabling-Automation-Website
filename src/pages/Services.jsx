import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ConsultBand from "../components/ConsultBand";
import { IconAv, IconGarden, IconLighting, IconNetwork, IconSecurity } from "../components/Icons";
import { imageSrc } from "../images";

const ICONS = {
  security: IconSecurity,
  networks: IconNetwork,
  lighting: IconLighting,
  av: IconAv,
  garden: IconGarden,
};

const PILLARS = [
  {
    id: "security",
    index: "01",
    title: "Security & access",
    file: "service-security.jpg",
    width: 1400,
    height: 933,
    alt: "Illustrative photograph of a bright interior. Not a project by this practice.",
    lead: "Who may enter, what is recorded, and how people are told. Designed as one system, then installed and programmed.",
    points: [
      "Access control, intercom, CCTV, and alarm, as one design.",
      "Discreet work in homes, and commercial work where the audit trail and the door hardware agree.",
      "Survey, specify, install, and program users, schedules, and notifications.",
      "After handover, an urgent fault is a phone call.",
    ],
  },
  {
    id: "networks",
    index: "02",
    title: "Networks & infrastructure",
    file: "service-networks.jpg",
    width: 1400,
    height: 934,
    alt: "Illustrative photograph of network equipment racks. Not a project by this practice.",
    lead: "The cabling and the network every other system stands on. Pathways designed, installed, and commissioned.",
    points: [
      "Structured cabling for homes and commercial floors, including the routes the build has to allow.",
      "Switching, wireless, and separation of occupant, guest, and building-services traffic where the site needs it.",
      "A record of what was pulled, and where it terminates.",
      "A dwelling, a tenancy, or a larger site — any size we can stay accountable for.",
    ],
  },
  {
    id: "lighting",
    index: "03",
    title: "Lighting & automation",
    file: "service-lighting.jpg",
    width: 1400,
    height: 934,
    alt: "Illustrative photograph of interior lighting. Not a project by this practice.",
    lead: "Control matched to the architecture and the way the place is used. Designed, installed, and programmed.",
    points: [
      "Lighting control coordinated with security and AV, so one control does not fight another system.",
      "Keypads, loads, and scenes specified before anything is ordered, then programmed on site.",
      "Handover that leaves you able to live with the system, and a path to change it later.",
      "A small adjustment or a whole building, when we can own the result.",
    ],
  },
  {
    id: "av",
    index: "04",
    title: "AV & collaboration",
    file: "service-av.jpg",
    width: 1400,
    height: 934,
    alt: "Illustrative photograph of a living room with a screen. Not a project by this practice.",
    lead: "Rooms for living, and rooms where people meet. Display, audio, and control, with the network and the lighting.",
    points: [
      "Homes specified around the architecture, not a rack brochure.",
      "Commercial and institutional rooms the network and the furniture can actually support.",
      "Consultation, signal paths, installation, and programming of the control.",
      "Support after the room is in use, including urgent call-out.",
    ],
  },
  {
    id: "garden",
    index: "05",
    title: "Garden & landscape maintenance",
    file: "service-garden.jpg",
    width: 1400,
    height: 933,
    alt: "Illustrative photograph of a maintained garden. Not a project by this practice.",
    lead: "Scheduled care of gardens and grounds, for homes and for commercial sites.",
    points: [
      "A private garden, or the grounds of a commercial site.",
      "Beds, lawns, and the edges of the property.",
      "A visit interval agreed for that site.",
      "Arranged with outdoor lighting, irrigation control, or access when those are already in scope.",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Precision Cabling & Automation"
        description="Security and access, networks, lighting and automation, AV, and garden and landscape maintenance. Consultation, specification, installation, and grounds care for residential and commercial sites."
        path="/services"
      />
      <section className="narrow-hero">
        <div className="wrap">
          <span className="kicker">Services</span>
          <h1>Five disciplines, delivered by the same practice.</h1>
          <p className="lede">
            We consult, design, and specify, then install and program. Garden and landscape maintenance is the ongoing care of the grounds.
          </p>
          <nav aria-label="Services on this page">
            <ul className="jump">
              {PILLARS.map((pillar) => (
                <li key={pillar.id}>
                  <Link to={`/services?pillar=${pillar.id}`}>{pillar.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="figure-note">Photographs below are illustrative placeholders, not projects of this practice.</p>
        </div>
      </section>
      {PILLARS.map((pillar, index) => {
        const Icon = ICONS[pillar.id];
        const flip = index % 2 === 1;
        return (
          <article
            className={flip ? "service-block light flip" : "service-block"}
            id={pillar.id}
            key={pillar.id}
          >
            <div className="wrap">
              <figure className="service-media">
                <img
                  src={imageSrc(pillar.file)}
                  alt={pillar.alt}
                  width={pillar.width}
                  height={pillar.height}
                />
              </figure>
              <div className="service-copy">
                <span className="kicker">{pillar.index}</span>
                <h2>
                  <Icon />
                  {pillar.title}
                </h2>
                <p className="lede">{pillar.lead}</p>
                <ul className="points">
                  {pillar.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p>
                  <Link className="button" to="/consultation">Start with a consultation</Link>
                </p>
              </div>
            </div>
          </article>
        );
      })}
      <ConsultBand
        title="Start with a consultation"
        text="Bring the site and the problem. We will say whether we should design and deliver it, and what the first session will produce."
      />
    </>
  );
}
