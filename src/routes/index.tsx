import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-architecture.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import projectInterior from "@/assets/project-interior.jpg";
import { company, process, values } from "@/data/company";

const integratedServices = [
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

const projects = [
  {
    slug: "residence-at-nawala",
    name: "Residence at Nawala",
    sector: "Residential",
    detail: "Design & build · 2,800 sqft",
    image: projectResidential,
    alt: "Modern private residence at Nawala",
  },
  {
    slug: "mini-apartment-complex-dehiwala",
    name: "Mini Apartment Complex, Dehiwala",
    sector: "Commercial",
    detail: "Project management · Multi-unit development",
    image: projectCommercial,
    alt: "Commercial apartment complex in Dehiwala",
  },
  {
    slug: "eco-lodge-retreat",
    name: "Eco Lodge Retreat",
    sector: "Hospitality",
    detail: "Design consultancy · Construction supervision",
    image: projectHospitality,
    alt: "Eco lodge retreat in the hill country",
  },
  {
    slug: "cafe-retail-fit-outs-colombo",
    name: "Café & Retail Fit-Outs, Colombo",
    sector: "Interiors",
    detail: "Interior design & built · Custom joinery",
    image: projectInterior,
    alt: "Café interior fit-out in Colombo",
  },
] as const;

const filters = ["All", "Residential", "Commercial", "Hospitality", "Interiors"] as const;

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [search, setSearch] = useState("");

  const visibleProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter = activeFilter === "All" || project.sector === activeFilter;
      const matchesSearch =
        query.length === 0 ||
        project.name.toLowerCase().includes(query) ||
        project.detail.toLowerCase().includes(query) ||
        project.sector.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);
  return (
    <>
      <section className="relative overflow-hidden border-b border-border px-6 pt-24 pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="animate-fade-up lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-tight text-accent">
              <span className="h-px w-8 bg-accent" />
              Design · Build · Project Management
            </div>
            <h1 className="mb-8 text-5xl leading-[0.95] font-black tracking-tight text-balance md:text-7xl">
              Bridging Vision and <span className="text-accent italic">Development.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Integrated solutions for the built environment. One client, one coordinated team, one
              point of responsibility — from first consultation to final handover.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground ring-1 ring-primary transition-colors hover:bg-transparent hover:text-foreground"
              >
                View Projects
              </Link>
              <Link
                to="/services"
                className="border border-accent bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-accent hover:text-white"
              >
                Our Expertise
              </Link>
            </div>
          </div>
          <div className="animate-fade-up lg:col-span-5">
            <img
              src={heroImage}
              alt="Contemporary Sri Lankan residence designed and delivered by Pearl Heritance"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
            <div className="mt-6 border-l border-accent/40 pl-6">
              <div className="mb-1 font-mono text-[11px] text-accent">[EXPERIENCE]</div>
              <div className="text-2xl font-bold tracking-tight">20+ Years</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                In Sri Lankan construction & property
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { k: "Model", v: "Consultant-Led" },
            { k: "Network", v: "CIDA Registered" },
            { k: "Delivery", v: "Design & Build" },
            { k: "Offices", v: "Nawala & Nugegoda" },
          ].map((item) => (
            <div key={item.k} className="p-8 text-center">
              <div className="font-mono text-xs text-accent">{item.k.toUpperCase()}</div>
              <div className="font-bold uppercase tracking-tight">{item.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-5 border border-border bg-card p-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground"
                      : "border border-input bg-background text-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="w-full max-w-md">
              <label className="sr-only" htmlFor="project-search-home">
                Search projects
              </label>
              <input
                id="project-search-home"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search projects..."
                className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          {visibleProjects.length === 0 ? (
            <div className="border border-border bg-card p-12 text-center">
              <h2 className="text-2xl font-black uppercase tracking-tight">No projects found</h2>
              <p className="mt-4 text-muted-foreground">
                Try another keyword or switch back to a different filter.
              </p>
            </div>
          ) : (
            <div className="grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
              {visibleProjects.map((p) => (
                <article key={p.name}>
                  <div className="relative">
                    <Link to={`/projects/${p.slug}`}>
                      <img
                        src={p.image}
                        alt={p.alt}
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </Link>
                    <span className="absolute right-4 top-4 bg-white/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary shadow-sm ring-1 ring-primary/20 backdrop-blur-sm">
                      {p.sector}
                    </span>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <Link to={`/projects/${p.slug}`} className="font-bold uppercase hover:text-accent">
                        {p.name}
                      </Link>
                      <p className="text-xs text-muted-foreground">{p.detail}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                01 // SERVICES
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-5xl">
                Integrated Building Solutions
              </h2>
            </div>
            <div className="max-w-xl text-base leading-relaxed text-muted-foreground">
              End-to-end expertise across design, project delivery and operational support.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {integratedServices.map((service) => (
              <article
                key={service.title}
                className="group flex min-h-[300px] flex-col border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_16px_35px_rgba(20,52,79,0.08)]"
              >
                <div className="mb-6 flex justify-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                    <svg
                      viewBox="0 0 64 64"
                      className="h-8 w-8 stroke-[1.7]"
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

                <h3 className="mb-5 whitespace-pre-line text-2xl font-black uppercase leading-tight tracking-tight text-foreground">
                  {service.title}
                </h3>

                {service.items.length > 0 && (
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Why Pearl Heritance</h2>
            <span className="font-mono text-[10px] text-muted-foreground">
              02 // OUR ADVANTAGE
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                title: "Client-first guidance",
                body: "We begin with the goal, budget and feasibility, then shape a practical route to delivery.",
              },
              {
                number: "02",
                title: "Single point of responsibility",
                body: "From design coordination to project execution, our team keeps every moving part aligned.",
              },
              {
                number: "03",
                title: "Built for long-term value",
                body: "Every decision balances quality, durability, lifestyle and future performance.",
              },
              {
                number: "04",
                title: "Trusted local expertise",
                body: "We understand Sri Lankan standards, market realities and the expectations of modern living.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-none border border-border bg-card p-8">
                <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {item.number}
                </div>
                <h3 className="mb-4 text-lg font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              03 // CORE VALUES
            </div>
            <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter">
              Built on principles that protect your investment.
            </h2>
            <div className="flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="border border-border bg-background px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
          <div className="border border-border bg-background p-8">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Commitment
            </div>
            <p className="text-lg leading-relaxed text-foreground/90">
              We work closely with clients, consultants and contractors to deliver spaces that are not
              only visually compelling, but also practical, efficient and durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#003b63] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-5xl font-black uppercase tracking-[-0.04em] text-white md:text-7xl">
            PROJECT DELIVERY PROCESS
          </h2>

          <p className="mb-16 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
            A proven process that ensures clarity, coordination and confidence at every stage of your
            project.
          </p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                step: "01",
                title: "CONSULTATION",
                text: "We listen, understand and assess your vision, requirements and objectives through in-depth consultation.",
              },
              {
                step: "02",
                title: "DESIGN &\nPLANNING",
                text: "We transform ideas into functional, innovative and sustainable designs with detailed planning and technical expertise.",
              },
              {
                step: "03",
                title: "TEAM FORMATION",
                text: "We assemble the right team of professionals and specialists to ensure seamless collaboration and project alignment.",
              },
              {
                step: "04",
                title: "CONTRACTS &\nPROJECT SETUP",
                text: "We establish clear contracts, define roles, set timelines and implement systems to ensure a strong foundation for successful delivery.",
              },
              {
                step: "05",
                title: "CONSTRUCTION\nMANAGEMENT",
                text: "We oversee construction with strict quality control, safety management and timely execution to bring your vision to life.",
              },
              {
                step: "06",
                title: "COMPLETION &\nAFTERCARE",
                text: "We deliver with pride and provide ongoing aftercare and support to ensure long-term value and client satisfaction.",
              },
            ].map((item) => (
              <article key={item.step} className="flex h-full flex-col">
                <div className="mb-6 flex h-24 w-24 items-center justify-center border border-white/80 text-3xl font-black text-white">
                  {item.step}
                </div>

                <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-tight text-white whitespace-pre-line">
                  {item.title}
                </h3>

                <p className="max-w-[18rem] text-base leading-relaxed text-white/80">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                04 // ARCHITECTURE FLOW
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter">Tree-like project structure</h2>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              INTEGRATED DELIVERY
            </span>
          </div>

          <div className="relative overflow-hidden border border-border bg-background p-8 md:p-12">
            <div className="absolute left-1/2 top-9 hidden h-16 w-px -translate-x-1/2 bg-accent/50 md:block" />
            <div className="absolute left-1/4 top-1/2 hidden h-px w-1/2 bg-gradient-to-r from-accent/40 to-transparent md:block" />
            <div className="absolute right-1/4 top-1/2 hidden h-px w-1/2 bg-gradient-to-l from-accent/40 to-transparent md:block" />

            <div className="grid gap-8 md:grid-cols-5">
              {[
                { label: '01', title: 'Brief', body: 'Understanding your vision, priorities and site realities.' },
                { label: '02', title: 'Design', body: 'Form, function and material decisions shaped by lifestyle and use.' },
                { label: '03', title: 'Build', body: 'Coordinated execution with quality control and disciplined timelines.' },
                { label: '04', title: 'Detail', body: 'Finishes, systems, and practical refinement to protect long-term value.' },
                { label: '05', title: 'Handover', body: 'A complete, well-managed delivery ready for living and operation.' },
              ].map((item) => (
                <div key={item.title} className="relative z-10">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border border-accent bg-card text-lg font-black text-accent">
                    {item.label}
                  </div>
                  <h3 className="mb-2 text-center text-sm font-bold uppercase tracking-widest">{item.title}</h3>
                  <p className="text-center text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Client Feedback</h2>
            <span className="font-mono text-[10px] text-muted-foreground">
              04 // TESTIMONIALS
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Pearl Heritance brought clarity, discipline and confidence to our project from the very first discussion.",
                name: "A. Silva",
                role: "Homeowner",
              },
              {
                quote:
                  "Their team balanced design sensibility with practical execution and kept the process organised throughout.",
                name: "M. Perera",
                role: "Property Developer",
              },
              {
                quote:
                  "The attention to detail and transparent communication made a complex project feel manageable and well controlled.",
                name: "R. Fernando",
                role: "Hospitality Client",
              },
            ].map((item) => (
              <blockquote key={item.name} className="border border-border bg-card p-8">
                <div className="mb-6 inline-flex gap-1 bg-transparent px-1 py-1">
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                </div>
                <p className="mb-8 text-base leading-relaxed text-foreground/80">“{item.quote}”</p>
                <div className="border-t border-border pt-4">
                  <div className="font-bold uppercase tracking-tight">{item.name}</div>
                  <div className="font-mono text-[10px] uppercase text-muted-foreground">{item.role}</div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Project Focus</h2>
            <span className="font-mono text-[10px] text-muted-foreground">
              05 // SPECIALTY AREAS
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Residential Living",
                body: "Homes designed for comfort, privacy, natural light and everyday practicality.",
              },
              {
                title: "Hospitality Spaces",
                body: "Guest-focused environments that feel authentic, memorable and commercially strong.",
              },
              {
                title: "Commercial Developments",
                body: "Efficient, adaptable spaces that support business performance and growth.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border bg-background p-8">
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Featured
                </div>
                <h3 className="mb-3 text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Latest Insights</h2>
            <Link to="/blogs" className="border-b border-accent pb-1 font-mono text-[10px] text-accent">
              VIEW ALL ARTICLES
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "How to plan a successful residential build",
                body: "A practical look at feasibility, scope and decision-making before construction begins.",
              },
              {
                title: "Design choices that improve long-term value",
                body: "Smart material, layout and circulation decisions that work for years to come.",
              },
              {
                title: "The role of project management in complex builds",
                body: "Why coordination, timelines and cost control matter just as much as design quality.",
              },
            ].map((item) => (
              <article key={item.title} className="border border-border bg-card p-8">
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Insight
                </div>
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <Link to="/blogs" className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card px-6 py-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              {company.promise}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Tell us about your project — we will advise on feasibility, cost and programme.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-accent px-8 py-4 text-xs font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-primary"
          >
            Start a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
