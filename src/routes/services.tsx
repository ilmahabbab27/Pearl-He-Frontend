const serviceGroups = [
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

const serviceIcons: Record<string, JSX.Element> = {
  design: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 46V18h28v28" />
      <path d="M22 22h20M22 30h20M22 38h12" />
    </svg>
  ),
  consultancy: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 46V20l14-10 14 10v26" />
      <path d="M22 28h20M22 34h20M22 40h16" />
    </svg>
  ),
  project: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 18h24l8 8v20H20z" />
      <path d="M44 18v8h8" />
      <path d="M24 32h16M24 40h12" />
    </svg>
  ),
  construction: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 48V16h20l12 12v20" />
      <path d="M22 22h12M22 30h16M22 38h12" />
    </svg>
  ),
  "design-build": (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 46V18l14-10 14 10v28" />
      <path d="M26 22h12M26 32h20M26 42h16" />
    </svg>
  ),
  development: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 46h36L32 18 14 46z" />
      <path d="M26 36h12M32 28v16" />
    </svg>
  ),
  property: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 46V28l14-12 14 12v18" />
      <path d="M26 46V34h12v12" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="22" cy="24" r="8" />
      <circle cx="40" cy="24" r="8" />
      <path d="M12 46c2-7 6-10 10-10s8 3 10 10" />
      <path d="M30 46c2-7 6-10 10-10s8 3 10 10" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            02 // Services
          </div>
          <h1 className="max-w-4xl text-5xl font-black uppercase tracking-tight text-balance md:text-6xl">
            Integrated Building Solutions
          </h1>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceGroups.map((group) => (
            <article
              key={group.title}
              className="group flex h-full flex-col border border-border bg-background p-7 transition-colors duration-200 hover:border-accent/60 hover:bg-card"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                {serviceIcons[group.icon]}
              </div>

              <h2 className="mb-5 text-2xl font-black uppercase leading-tight tracking-tight whitespace-pre-line">
                {group.title}
              </h2>

              {group.items.length > 0 ? (
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                      <span className="text-sm uppercase tracking-[0.12em] text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-auto h-10" />
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#003a63] px-6 py-24 text-white">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-8 text-[clamp(3.5rem,6vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
            PROJECT DELIVERY PROCESS
          </h2>

          <p className="mb-16 max-w-[900px] text-[clamp(1.2rem,2vw,2.15rem)] font-light leading-relaxed text-sky-100/95">
            A proven process that ensures clarity, coordination and confidence at every stage of your
            project.
          </p>

          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "CONSULTATION",
                text: "We listen, understand and assess your vision, requirements and objectives through in-depth consultation.",
              },
              {
                step: "02",
                title: "DESIGN & PLANNING",
                text: "We transform ideas into functional, innovative and sustainable designs with detailed planning and technical expertise.",
              },
              {
                step: "03",
                title: "TEAM FORMATION",
                text: "We assemble the right team of professionals and specialists to ensure seamless collaboration and project alignment.",
              },
              {
                step: "04",
                title: "MANAGE",
                text: "Coordinating teams, monitoring progress, and ensuring quality and compliance at every stage.",
              },
              {
                step: "05",
                title: "BUILD",
                text: "Executing construction with precision, safety, and quality to bring the vision to life.",
              },
              {
                step: "06",
                title: "HANDOVER",
                text: "Delivering a completed project with documentation, training, and ongoing support.",
              },
            ].map((item) => (
              <article key={item.step} className="flex h-full flex-col">
                <div className="mb-6 flex h-32 w-32 items-center justify-center border border-white/60 bg-transparent text-5xl font-black text-white md:h-36 md:w-36">
                  {item.step}
                </div>

                <h3 className="mb-4 text-[2rem] font-black uppercase leading-[1.1] tracking-[-0.04em] text-white">
                  {item.title}
                </h3>

                <p className="max-w-[21rem] text-lg leading-[1.7] text-sky-50/90">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
