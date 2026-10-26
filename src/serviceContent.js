/** Service catalogue. Copy is drawn from existing site facts and the approved page lines. */

export const PILLAR_REDIRECTS = {
  security: "security-cctv",
  networks: "networks-cabling",
  lighting: "lighting-automation",
  av: "av-meeting-rooms",
  garden: "home-garden",
};

export const SERVICES = [
  {
    slug: "security-cctv",
    title: "Security & CCTV",
    icon: "security",
    blurb: "CCTV, alarms and monitoring, installed and programmed.",
    hero: "CCTV, alarms and monitoring designed around your property, then installed and programmed by us.",
    image: {
      file: "service-security.jpg",
      width: 1400,
      height: 933,
      alt: "Illustrative photograph of a bright interior. Not a project by this practice.",
    },
    sections: [
      {
        title: "Around the property",
        points: [
          "CCTV and alarms planned around how the property is used.",
          "What is recorded, and how people are told.",
          "Discreet placement in a home.",
        ],
      },
      {
        title: "With access",
        points: [
          "Designed as one system with access control and intercom.",
          "Commercial sites where the audit trail and the door hardware agree.",
        ],
      },
      {
        title: "Installed and programmed",
        points: [
          "We survey, specify, install, and program.",
          "After handover, an urgent fault is a phone call.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does CCTV include access control?",
        a: "They are designed as one system. Access and intercom are set out on their own page when entry is the brief.",
      },
      {
        q: "What if something fails after handover?",
        a: "Call us. Urgent support and call-out are available 24 hours, and do not wait on a consultation.",
      },
    ],
    related: { slug: "access-intercom", text: "Access and intercom" },
  },
  {
    slug: "access-intercom",
    title: "Access & intercom",
    icon: "access",
    blurb: "Keyless entry, intercoms and user schedules.",
    hero: "Keyless entry, intercoms and user schedules that work seamlessly with your security system.",
    image: {
      file: "detail-interior.jpg",
      width: 1500,
      height: 1125,
      alt: "Illustrative photograph of a finished interior. Not a project by this practice.",
    },
    sections: [
      {
        title: "Entry",
        points: [
          "Keyless entry and intercom, designed with the security system.",
          "Who may enter is decided in that same design.",
          "Users, schedules, and notifications programmed on site.",
          "Discreet work in a home.",
        ],
      },
      {
        title: "Commercial sites",
        points: [
          "Door hardware and the audit trail specified together.",
        ],
      },
      {
        title: "Installed and programmed",
        points: [
          "We survey, specify, install, and program.",
          "Schedules can be changed after handover. An urgent fault is a phone call.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does entry work with CCTV and alarms?",
        a: "Yes. Access, intercom, CCTV and alarm are designed as one system.",
      },
      {
        q: "Who is programmed onto the system?",
        a: "Users, schedules and notifications are programmed on site, then handed over.",
      },
    ],
    related: { slug: "security-cctv", text: "Security and CCTV" },
  },
  {
    slug: "networks-cabling",
    title: "Networks & cabling",
    icon: "networks",
    blurb: "Structured cabling, switching and whole-of-site Wi-Fi.",
    hero: "Structured cabling, switching and whole-of-site Wi-Fi: the foundation every other system relies on.",
    image: {
      file: "service-networks.jpg",
      width: 1400,
      height: 934,
      alt: "Illustrative photograph of network equipment racks. Not a project by this practice.",
    },
    sections: [
      {
        title: "Cabling",
        points: [
          "Structured cabling for homes and commercial floors.",
          "Routes the build has to allow, designed before the cable is pulled.",
          "Security, lighting and AV rely on this network.",
        ],
      },
      {
        title: "Switching and Wi-Fi",
        points: [
          "Switching and wireless, commissioned with the cabling.",
          "Occupant, guest, and building-services traffic separated where the site needs it.",
        ],
      },
      {
        title: "What you keep",
        points: [
          "A record of what was pulled, and where it terminates.",
          "A dwelling, a tenancy, or a larger site — any size we can stay accountable for.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you only pull the cable?",
        a: "No. Pathways are designed, cable is installed, and switching and wireless are commissioned.",
      },
    ],
  },
  {
    slug: "lighting-automation",
    title: "Lighting & automation",
    icon: "lighting",
    blurb: "Scenes and control for how you use the space.",
    hero: "Lighting scenes and control designed around how you use the space, programmed and handed over simply.",
    image: {
      file: "service-lighting.jpg",
      width: 1400,
      height: 934,
      alt: "Illustrative photograph of interior lighting. Not a project by this practice.",
    },
    sections: [
      {
        title: "Scenes and control",
        points: [
          "Control matched to the architecture and the way the place is used.",
          "Keypads, loads, and scenes specified before anything is ordered.",
          "Programmed on site.",
        ],
      },
      {
        title: "With the other systems",
        points: [
          "Coordinated with security and AV, so one control does not fight another.",
          "The same practice specifies the loads, then programs them on site.",
        ],
      },
      {
        title: "Handover",
        points: [
          "You leave able to live with the system, with a path to change it later.",
          "A small adjustment or a whole building, when we can own the result.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who programs the scenes?",
        a: "We do. The same practice specifies, installs, and programs, then stays for handover.",
      },
    ],
  },
  {
    slug: "av-meeting-rooms",
    title: "AV & meeting rooms",
    icon: "av",
    blurb: "Displays, audio and control for living and meeting rooms.",
    hero: "Displays, audio and control for living rooms, home cinemas and meeting rooms, integrated with everything else.",
    image: {
      file: "service-av.jpg",
      width: 1400,
      height: 934,
      alt: "Illustrative photograph of a living room with a screen. Not a project by this practice.",
    },
    sections: [
      {
        title: "Rooms",
        points: [
          "Living rooms, home cinemas and meeting rooms: display, audio, and control.",
          "Homes specified around the architecture, not a rack brochure.",
          "Commercial and institutional rooms the network and the furniture can support.",
        ],
      },
      {
        title: "With the rest of the site",
        points: [
          "Planned with the network and the lighting.",
          "Consultation, signal paths, installation, and programming of the control.",
        ],
      },
      {
        title: "After the room is in use",
        points: [
          "Support once the room is in use, including urgent call-out.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you only advise on the room?",
        a: "No. We consult on the signal paths, then install and program the control on site.",
      },
    ],
  },
  {
    slug: "home-garden",
    title: "Home & garden",
    icon: "garden",
    blurb: "Scheduled care of the house, garden and grounds.",
    hero: "Scheduled care of the house, garden and grounds, on a visit interval agreed for your site.",
    image: {
      file: "service-garden.jpg",
      width: 1400,
      height: 933,
      alt: "Illustrative photograph of a maintained garden. Not a project by this practice.",
    },
    sections: [
      {
        id: "home",
        title: "Home upkeep",
        points: [
          "Minor repairs: doors, fixtures, fittings, and small faults.",
          "Gutters, downpipes, and external checks.",
          "Decks, paths, and paved areas kept clean and safe to use.",
          "One-off tidy-ups, including pre-sale and end-of-lease preparation.",
        ],
      },
      {
        id: "grounds",
        title: "Garden and grounds",
        points: [
          "Lawns, beds, hedges, and edges, on the interval the site needs.",
          "Pruning, mulching, planting, and seasonal clean-ups.",
          "Paths, fences, and outdoor areas checked on the same visit.",
          "Homes, holiday properties, commercial grounds, and shared multi-residence areas across Melbourne, the Mornington Peninsula and the Bellarine.",
        ],
      },
      {
        id: "visits",
        title: "How visits run",
        points: [
          "A walk, a written scope, and an interval agreed for the site.",
          "The same practice each visit, arranged around irrigation, outdoor lighting, or access already fitted.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to be home for a visit?",
        a: "No. Access is a key, a code, or a concierge, arranged at the walk. Fitted access or intercom avoids a key handover.",
      },
      {
        q: "Do you bring tools and equipment?",
        a: "Yes. We bring what the scope needs, and ask for access, water, and power where required.",
      },
      {
        q: "What happens if it rains?",
        a: "Outdoor work is rescheduled, or swapped for indoor or undercover jobs already on the scope.",
      },
      {
        q: "Is the practice insured?",
        a: "Ask on enquiry. The current insurance certificate is sent with the scope, with any licences that apply.",
      },
      {
        q: "One-off visit, or a regular schedule?",
        a: "Both. A tidy-up or repairs, or weekly, fortnightly, monthly, or seasonal.",
      },
      {
        q: "How is a visit priced?",
        a: "Per visit, on the written scope. Confirmed before the first visit. The walk is not an obligation.",
      },
    ],
    cta: {
      title: "Arrange a maintenance visit",
      text: "Tell us the property and what needs attention.",
    },
  },
];

export function getService(slug) {
  return SERVICES.find((service) => service.slug === slug);
}
