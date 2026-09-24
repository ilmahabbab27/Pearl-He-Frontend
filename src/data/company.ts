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
      lines: ["No. 253B 1/1,", "Stanley Thilakarathne Road,", "Nugegoda, Sri Lanka."],
      phone: "+94 114 23 69 52",
      phoneHref: "+94114236952",
    },
  ],
} as const;

export const services = [
  {
    code: "01",
    title: "Residential Buildings",
    summary:
      "Thoughtful residential design and delivery for homes that balance comfort, function and long-term value.",
    points: ["New homes", "Luxury residences", "Custom residential projects"],
  },
  {
    code: "02",
    title: "Tourist Amenities & eco-friendly buildings",
    summary:
      "Sustainable hospitality and eco-conscious buildings designed to support memorable guest experiences and environmental responsibility.",
    points: ["Tourist facilities", "Eco-friendly design", "Sustainable hospitality spaces"],
  },
  {
    code: "03",
    title: "Commercial & other buildings",
    summary:
      "Professional planning and built solutions for commercial developments and a wide range of institutional or mixed-use projects.",
    points: ["Commercial buildings", "Mixed-use spaces", "Institutional developments"],
  },
  {
    code: "04",
    title: "Interior",
    summary:
      "Interior design and detailing that create refined, practical and high-performing spaces for everyday use.",
    points: ["Interior design", "Space planning", "Material coordination"],
  },
  {
    code: "05",
    title: "Renovations",
    summary:
      "Transforming existing spaces through sensitive upgrades, upgrades and efficient reconfiguration that improve performance and appearance.",
    points: ["Home renovations", "Building upgrades", "Refurbishment"],
  },
  {
    code: "06",
    title: "Property Management",
    summary:
      "Ongoing property oversight, coordination and maintenance support to protect asset value and resident experience.",
    points: ["Property oversight", "Maintenance management", "Asset care"],
  },
  {
    code: "07",
    title: "Maintenance",
    summary:
      "Reliable maintenance planning and execution to keep buildings performing properly and safely over time.",
    points: ["Preventive maintenance", "Repair coordination", "Building upkeep"],
  },
  {
    code: "08",
    title: "Manufacturing",
    summary:
      "Production-focused facilities and industrial spaces designed to support safe, efficient operations and future expansion.",
    points: ["Industrial facilities", "Production spaces", "Operational planning"],
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
