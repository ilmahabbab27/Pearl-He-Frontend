import { Link } from "react-router-dom";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import projectInterior from "@/assets/project-interior.jpg";

const stats = [
  { value: "20+", label: "Years" },
  { value: "250+", label: "Projects" },
  { value: "6+", label: "Disciplines" },
  { value: "100%", label: "Professional" },
] as const;

const projectHighlights = [
  {
    name: "Housing scheme",
    location: "Kandy",
    type: "Residential",
    image: projectResidential,
  },
  {
    name: "Tourist Amenities & eco-friendly buildings",
    location: "Ella",
    type: "Tourism",
    image: projectHospitality,
  },
  {
    name: "Apartment Complex",
    location: "Dehiwala",
    type: "Commercial",
    image: projectCommercial,
  },
  {
    name: "Prime Digital",
    location: "Interior",
    type: "Interior",
    image: projectInterior,
  },
] as const;

const strengths = [
  {
    title: "Client-Focused",
    description:
      "We identify core needs and deliver tailored solutions aligned with your budget, priorities, and timeline.",
  },
  {
    title: "Qualified Team",
    description:
      "A multi-disciplinary team including architects, engineers, finance consultants, business advisors, marketers, and legal professionals.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Structured planning, transparent reporting, and accountability — ensuring a smooth, hassle-free experience.",
  },
  {
    title: "Value Enhancement",
    description:
      "We align your property with market demands to strengthen usability, positioning, and long-term commercial value.",
  },
] as const;

const services = [
  {
    title: "DESIGN",
    items: ["Architectural Design", "Interior Design", "Landscape Design"],
    icon: "design",
  },
  {
    title: "CONSULTANCY",
    items: ["Engineering Consultancy", "Quantity Surveying", "Feasibility Studies"],
    icon: "consultancy",
  },
  {
    title: "PROJECT\nMANAGEMENT",
    items: ["Planning", "Cost Management", "Tender Documentation", "Contractor Selection"],
    icon: "project",
  },
  {
    title: "CONSTRUCTION",
    items: ["Construction Management", "Construction Supervision"],
    icon: "construction",
  },
  {
    title: "DESIGN & BUILD",
    items: [],
    icon: "design-build",
  },
  {
    title: "DEVELOPMENT",
    items: ["Hospitality", "Residential", "Commercial"],
    icon: "development",
  },
  {
    title: "PROPERTY\nMANAGEMENT",
    items: ["Maintenance", "Asset Management"],
    icon: "property",
  },
  {
    title: "OVERSEAS CLIENT\nSUPPORT",
    items: [],
    icon: "support",
  },
] as const;

const faqItems = [
  {
    question: "How Long Does A Typical Project Take?",
    answer:
      "Project timelines vary depending on scope, complexity, and approvals. On average, design projects may take 2–6 weeks, while full builds depend on construction phases.",
  },
  {
    question: "What Services Do You Offer?",
    answer:
      "We provide construction project consultation, property development, property management, construction services, renovations and extensions, and strategic business advisory for projects.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            About Pearl Heritance
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-balance md:text-6xl">
            Building lasting value through practical expertise.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground">
            Pearl Heritance (Pvt) Ltd. is a well-established company (Reg. No. PV 00309762) based
            in the Western Province of Sri Lanka. We specialize in construction project
            consultation, property development, property management, and construction services.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
                Who we are
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                For the past twenty years, we’ve observed that many properties in Sri Lanka are not
                utilized to their fullest potential. There is also a clear gap in trusted professional
                property management services.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                By analyzing market requirements, we deliver practical solutions that improve
                performance and enhance long-term commercial value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-border bg-card p-8 text-center">
                  <div className="text-4xl font-black tracking-tight">{stat.value}</div>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
              Our Professional Network
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              A trusted network of specialists
            </h2>
            <p className="mt-6 text-muted-foreground">
              We work with a carefully selected network of architects, engineers, quantity surveyors,
              project managers, consultants, and specialist partners to deliver integrated solutions
              that align design, cost, quality, and project performance from concept through handover.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Architecture",
              "Engineering",
              "Quantity Surveying",
              "Project Management",
              "Interior Design",
              "Planning & Approvals",
              "Finance & Feasibility",
              "Legal & Compliance",
            ].map((item) => (
              <div
                key={item}
                className="border border-border bg-background p-5 font-mono text-[10px] uppercase tracking-[0.2em]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-primary px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent"
            >
              Talk to Us
            </Link>
            <Link
              to="/projects"
              className="border border-input px-8 py-4 text-[10px] font-bold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
              Featured Projects
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              Beautiful spaces with lasting appeal
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {projectHighlights.map((project, index) => (
              <article key={project.name} className="overflow-hidden border border-border bg-card">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">{project.name}</h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {project.type}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{project.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary px-6 py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
              Our Philosophy
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Vision & Mission</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-primary-foreground/15 bg-primary/70 p-10">
              <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Our Vision
              </h3>
              <p className="text-2xl font-bold uppercase tracking-tight">
                Creating Elevated Value
              </p>
              <p className="mt-6 text-sm leading-relaxed text-primary-foreground/75">
                Transforming properties to meet high-end commercial standards, ensuring long-term
                value, efficiency, and sustainable growth.
              </p>
            </div>

            <div className="border border-primary-foreground/15 bg-primary/70 p-10">
              <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Our Mission
              </h3>
              <p className="text-2xl font-bold uppercase tracking-tight">
                Delivering Hassle-Free Expertise
              </p>
              <p className="mt-6 text-sm leading-relaxed text-primary-foreground/75">
                Deliver client-focused, reliable, and professionally qualified services through a
                seamless, all-in-one consultancy and construction experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
              Our Strength
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              Why Choose Pearl Heritance
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item) => (
              <div key={item.title} className="border border-border bg-card p-8">
                <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  0{strengths.indexOf(item) + 1}
                </div>
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
              What We Do
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              Services & Expertise
            </h2>
            <p className="mt-6 text-muted-foreground">
              Choose a service to view scope, outcomes, and what you can expect from our process.
            </p>
          </div>

          <div className="mb-12 flex justify-end">
            <Link
              to="/contact"
              className="bg-primary px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent"
            >
              Get a Quote
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex min-h-[280px] flex-col border border-border bg-card p-8 text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-background">
                    <svg
                      viewBox="0 0 64 64"
                      className="h-10 w-10 stroke-[1.8] text-foreground"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {service.icon === "design" && (
                        <>
                          <path d="M18 45V24l14-12 14 12v21" />
                          <path d="M22 29h20M22 35h20M26 45V39h12v6" />
                        </>
                      )}
                      {service.icon === "consultancy" && (
                        <>
                          <circle cx="18" cy="24" r="7" />
                          <circle cx="32" cy="18" r="7" />
                          <circle cx="46" cy="24" r="7" />
                          <path d="M10 45c2-6 8-10 16-10s14 4 16 10" />
                          <path d="M24 45c2-6 7-10 13-10s11 4 13 10" />
                        </>
                      )}
                      {service.icon === "project" && (
                        <>
                          <path d="M20 18h24v28H20z" />
                          <path d="M24 18V12h16v6M24 28h16M24 34h10" />
                          <path d="M18 46h28" />
                        </>
                      )}
                      {service.icon === "construction" && (
                        <>
                          <path d="M18 44V20h28v24" />
                          <path d="M22 26h20M22 32h20M22 38h16" />
                          <path d="M14 44h36" />
                          <path d="M30 12l6 8h-12l6-8z" />
                        </>
                      )}
                      {service.icon === "design-build" && (
                        <>
                          <path d="M16 44V22h16l16 10v12" />
                          <path d="M20 22V16h12v6M28 18h8" />
                          <path d="M22 30h20M22 36h20" />
                        </>
                      )}
                      {service.icon === "development" && (
                        <>
                          <path d="M20 42V20h24v22" />
                          <path d="M16 26h6M42 26h6M16 42h32" />
                          <path d="M28 20v22M36 20v22" />
                        </>
                      )}
                      {service.icon === "property" && (
                        <>
                          <circle cx="32" cy="22" r="8" />
                          <path d="M18 44c2-6 7-10 14-10s12 4 14 10" />
                          <path d="M16 26l16-10 16 10" />
                        </>
                      )}
                      {service.icon === "support" && (
                        <>
                          <circle cx="32" cy="24" r="10" />
                          <path d="M22 42c2-6 6-8 10-8s8 2 10 8" />
                          <path d="M12 28c2-8 8-14 20-14s18 6 20 14" />
                        </>
                      )}
                    </svg>
                  </div>
                </div>

                <h3 className="mb-4 whitespace-pre-line text-2xl font-black uppercase leading-tight tracking-tight">
                  {service.title}
                </h3>

                {service.items.length > 0 && (
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center justify-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 border border-border bg-background p-10">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Selected Service
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight">
              Construction Project Consultation
            </h3>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              Strategic planning and technical guidance to reduce risk, improve feasibility, and
              align delivery with real-world constraints.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  What’s Included
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Feasibility + scope definition</li>
                  <li>• Budget & timeline planning</li>
                  <li>• Authority approvals guidance</li>
                  <li>• Contractor selection support</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Best For
                </h4>
                <p className="text-sm text-muted-foreground">New Builds</p>
                <div className="mt-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    Typical Engagement
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Varies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
              Professional Insights
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              For Confident Decisions
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="border border-border bg-background p-8">
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight">{item.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <p className="text-sm text-muted-foreground">Still have questions?</p>
            <Link
              to="/contact"
              className="bg-primary px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
                Get Started
              </div>
              <h2 className="max-w-xl text-4xl font-black uppercase tracking-tighter">
                Ready to transform your property?
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-primary px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent"
              >
                Contact Us
              </Link>
              <Link
                to="/projects"
                className="border border-input px-8 py-4 text-[10px] font-bold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
              >
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
