export const SITE = {
  name: "Precision Cabling & Automation",
  shortName: "Precision Cabling & Automation",
  phoneDisplay: "0413 729 663",
  phoneTel: "+61413729663",
  email: "jamie@projects-consultant.com",
  locality: "Yarraville VIC 3013",
  abn: "ABN: 94 921 400 822",
  pagesUrl: "https://precis60.github.io/Precision-Cabling-Automation-Website/",
};

export const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services", menu: "services" },
  { to: "/consultation", label: "Consultation" },
  { to: "/about-us", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const EXPERIENCE = "15 years in high-end residential work";

/**
 * Shop link for a future Shopify storefront.
 * Set enabled to true and href to the store URL to show it in the header and footer.
 */
export const SHOP_NAV = {
  enabled: false,
  label: "Shop",
  href: "",
};

export const SERVICE_AREAS = [
  {
    region: "Melbourne",
    suburbs: [
      "Toorak",
      "South Yarra",
      "Armadale",
      "Malvern",
      "Kew",
      "Hawthorn",
      "Canterbury",
      "Camberwell",
      "Balwyn",
      "Brighton",
      "Sandringham",
      "Black Rock",
      "Albert Park",
      "Middle Park",
    ],
  },
  {
    region: "Mornington Peninsula",
    suburbs: [
      "Portsea",
      "Sorrento",
      "Blairgowrie",
      "Red Hill",
      "Merricks",
      "Flinders",
      "Shoreham",
      "Mount Martha",
      "Mornington",
    ],
  },
  {
    region: "Bellarine Peninsula",
    suburbs: [
      "Barwon Heads",
      "Point Lonsdale",
      "Queenscliff",
      "Ocean Grove",
      "Portarlington",
    ],
  },
];

export const AREA_SUMMARY = "Melbourne, the Mornington Peninsula, and the Bellarine";

export const PROCESS = [
  {
    step: "01",
    title: "Consult",
    text: "We walk the site and understand how it's used.",
  },
  {
    step: "02",
    title: "Design",
    text: "Security, network, lighting and AV planned as one system.",
  },
  {
    step: "03",
    title: "Install & program",
    text: "Our team installs, programs and commissions everything.",
  },
  {
    step: "04",
    title: "Support",
    text: "Clear handover, maintenance options and 24/7 urgent support.",
  },
];

export const CASE_STUDIES = [
  {
    id: "01",
    label: "Placeholder — outcome not published",
    title: "Private residence",
    systems: "Security & access",
    text: "Reserved for an anonymised home: the brief, the systems that were designed and installed, and what changed for the household. No results are claimed until the principal supplies the narrative.",
  },
  {
    id: "02",
    label: "Placeholder — outcome not published",
    title: "Commercial site",
    systems: "Networks & collaboration",
    text: "Reserved for an anonymised workplace or institutional building. Site name, scale, and outcomes stay blank until they can be published with permission.",
  },
  {
    id: "03",
    label: "Placeholder — outcome not published",
    title: "Lighting & automation",
    systems: "Control, scenes, and handover",
    text: "Reserved for a project where lighting control or automation was designed, programmed, and left in the client’s hands. Photography and measured outcomes are not invented here.",
  },
];

export const SITE_TYPES = [
  "Private residence",
  "Multi-residence",
  "Commercial",
  "Institutional or other",
];

export const SYSTEM_OPTIONS = [
  "Security & CCTV",
  "Access & intercom",
  "Networks & cabling",
  "Lighting & automation",
  "AV & meeting rooms",
  "Home & garden",
  "Not sure yet",
];

export const TIMELINES = [
  "Urgent — call as well",
  "This month",
  "This quarter",
  "Planning, no fixed date",
];

export const ENQUIRY_TYPES = [
  { value: "consultation", label: "Book a consultation" },
  { value: "assessment", label: "Request a site assessment" },
  { value: "urgent", label: "Urgent fault" },
  { value: "general", label: "General enquiry" },
];
