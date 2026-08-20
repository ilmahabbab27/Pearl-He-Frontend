export const company = {
  name: "Pearl Heritance (Pvt) Ltd",
  short: "Pearl Heritance",
  tagline: "Bridging Vision and Development",
  promise: "Building Trust. Delivering Excellence.",
  email: "info@pearlhe.com",
  regNumber: "PV00309762",
  offices: [
    {
      label: "Business Office",
      lines: ["Level 04, No. 192/10, 9th Lane,", "Nawala Road, Nawala,", "10250, Sri Lanka."],
      phone: "+94 117 59 84 60",
      phoneHref: "+94117598460",
    },
    {
      label: "Corporate Office",
      lines: ["No. 253B, 1/1,", "Stanley Thilakarathne Road,", "Nugegoda, Sri Lanka."],
      phone: "+94 114 23 69 52",
      phoneHref: "+94114236952",
    },
  ],
} as const;

export const services = [
  {
    code: "01",
    title: "Architectural & Interior Design",
    summary:
      "Concept development, architectural drawings, interior and landscape design that balance intent with buildability.",
    points: ["Architectural design", "Interior design", "Landscape design"],
  },
  {
    code: "02",
    title: "Consultancy",
    summary:
      "Engineering consultancy, quantity surveying and feasibility studies that de-risk a project before it breaks ground.",
    points: ["Engineering consultancy", "Quantity surveying", "Feasibility studies"],
  },
  {
    code: "03",
    title: "Project Management",
    summary:
      "Planning, cost management, tender documentation and contractor selection under one accountable team.",
    points: ["Planning & cost control", "Tender documentation", "Contractor selection"],
  },
  {
    code: "04",
    title: "Construction",
    summary:
      "Construction management and site supervision delivered through chartered professionals and CIDA-registered contractors.",
    points: ["Construction management", "Construction supervision", "Quality assurance"],
  },
  {
    code: "05",
    title: "Development",
    summary:
      "Hospitality, residential and commercial development managed from land assessment to handover.",
    points: ["Hospitality", "Residential", "Commercial"],
  },
  {
    code: "06",
    title: "Property Management",
    summary:
      "Maintenance, asset management and dedicated support for overseas clients investing in Sri Lanka.",
    points: ["Maintenance", "Asset management", "Overseas client support"],
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Consultation",
    body: "We listen, assess feasibility and align on vision, budget and programme before any drawing is issued.",
  },
  {
    step: "02",
    title: "Design & Planning",
    body: "Coordinated design, technical documentation and statutory approvals handled on your behalf.",
  },
  {
    step: "03",
    title: "Construction & Management",
    body: "One point of responsibility coordinating consultants, contractors, cost and quality on site.",
  },
  {
    step: "04",
    title: "Completion & Aftercare",
    body: "We hand over with pride and provide ongoing aftercare that protects long-term value.",
  },
] as const;

export const values = [
  "Integrity",
  "Professionalism",
  "Innovation",
  "Quality",
  "Transparency",
  "Collaboration",
  "Sustainability",
  "Client Satisfaction",
] as const;
