import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import ConsultBand from "../components/ConsultBand";

const PILLARS = [
  {
    id: "security",
    index: "01",
    title: "Security & access",
    lead: "Who may enter, what is recorded, and how the household or the building is told — designed together, then installed and programmed.",
    points: [
      "Access control, intercom, CCTV, and alarm, treated as one design rather than four suppliers.",
      "Residential work where discretion matters, and commercial work where the audit trail and the door hardware have to agree.",
      "We survey, specify the devices and the cabling, install, and program users, schedules, and notifications.",
      "After handover, urgent faults are a phone call, not a ticket that waits until Monday.",
    ],
  },
  {
    id: "networks",
    index: "02",
    title: "Networks & infrastructure",
    lead: "The cabling and the network that every other system stands on. We design the pathways, install them, and commission the active equipment.",
    points: [
      "Structured cabling for homes and commercial floors, including the routes the architect and the builder need to allow.",
      "Switching, wireless, and separation between occupant, guest, and building-services traffic where the site requires it.",
      "Documentation of what was pulled and where it terminates, so the next change is not a guess.",
      "Assistance on projects of any size: a dwelling, a tenancy, or a site large enough to need a proper design before the first drum of cable.",
    ],
  },
  {
    id: "lighting",
    index: "03",
    title: "Lighting & automation",
    lead: "Control that matches the architecture and the way the place is occupied. We design the system, install it, and program the scenes.",
    points: [
      "Lighting control and related automation, coordinated with security and AV so one button does not fight another system.",
      "Specification of keypads, loads, and scenes before procurement, then programming on site.",
      "Handover that leaves the client able to live with the system, and a path to adjust it later.",
      "Small adjustments and full-building control are both in scope when we can stay accountable for the result.",
    ],
  },
  {
    id: "av",
    index: "04",
    title: "AV & collaboration",
    lead: "Rooms for living and rooms where people meet. Display, audio, and control, installed and programmed with the network and the lighting.",
    points: [
      "Homes: the rooms that have to work every day, specified around the architecture rather than a rack brochure.",
      "Commercial and institutional rooms: conferencing and display that the network and the furniture can actually support.",
      "We consult on the room, specify the signal paths, install, and program the control.",
      "Support continues after the first meeting is held in the room, including urgent call-out when a space cannot wait.",
    ],
  },
  {
    id: "garden",
    index: "05",
    title: "Garden & landscape maintenance",
    lead: "Ongoing care of gardens and grounds for homes and commercial sites. Visits are scheduled, and the work is the upkeep of the landscape between them.",
    points: [
      "Scheduled maintenance for a private garden, or for the grounds of a commercial site.",
      "Routine upkeep of planted beds, lawns, and the edges of the property.",
      "The interval is agreed for the site. A residence and a commercial frontage do not need the same one.",
      "Where outdoor lighting, irrigation control, or access is already in scope with this practice, the grounds visits can be arranged with that work.",
    ],
  },
];

export default function Services() {
  const [params] = useSearchParams();
  const pillar = params.get("pillar");

  useEffect(() => {
    if (!pillar) return;
    document.getElementById(pillar)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pillar]);

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
            We consult, design, and specify, then install and program.
            Garden and landscape maintenance is the ongoing care of the grounds.
            The sections below are how the work is organised.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {PILLARS.map((pillar) => (
            <article className="pillar" id={pillar.id} key={pillar.id}>
              <div>
                <span className="kicker">{pillar.index}</span>
              </div>
              <div className="prose">
                <h2>{pillar.title}</h2>
                <p>{pillar.lead}</p>
                <ul>
                  {pillar.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p>
                  <Link className="button" to="/consultation">Start with a consultation</Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ConsultBand
        title="Start with a consultation"
        text="Bring the site and the problem. We will say whether we should design and deliver it, and what the first session will produce."
      />
    </>
  );
}
