const testimonials = [
  {
    name: "R. Perera",
    role: "Homeowner, Nawala",
    project: "Residence transformation",
    quote:
      "Pearl Heritance gave us clarity from the first site visit. Their project leadership, technical guidance and open communication kept the build moving smoothly and the final result exceeded our expectations.",
  },
  {
    name: "M. Fernando",
    role: "Developer, Colombo",
    project: "Mixed-use development",
    quote:
      "Their consultant-led model was exactly what we needed. The team coordinated design decisions, approvals and contractor scheduling with professionalism, which saved both time and unnecessary stress.",
  },
  {
    name: "S. Jayawardena",
    role: "Hospitality investor",
    project: "Eco lodge concept",
    quote:
      "From feasibility and planning through to construction oversight, the team took ownership at every step. We felt supported, informed and confident throughout the entire process.",
  },
  {
    name: "A. Gunasekara",
    role: "Retail business owner",
    project: "Commercial fit-out",
    quote:
      "The project management discipline was exceptional. Decisions were thoughtful, communication was clear and the finished space aligned perfectly with our brand and operating requirements.",
  },
] as const;

export default function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            05 // Testimonials
          </div>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-balance md:text-6xl">
            Clients trust our process and value our partnership.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            We work closely with clients across residential, commercial and hospitality projects,
            delivering practical guidance, disciplined coordination and quality outcomes.
          </p>

          <div className="mt-12 rounded-none border border-border bg-card p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Google Business Profile
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight">
                Verified client feedback from our Google profile.
              </h2>
            </div>
            <div className="mt-6 md:mt-0 md:text-right">
              <div className="text-3xl font-black tracking-tight">4.9/5</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Average rating
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Pearl+Heritance"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex bg-primary px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent md:mt-0"
            >
              View Google Profile
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.name} className="border border-border bg-card p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="inline-flex gap-1 bg-transparent px-1 py-1">
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Google review
                </span>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-foreground/90">“{item.quote}”</p>
              <div className="border-t border-border pt-5">
                <h2 className="text-lg font-bold uppercase tracking-tight">{item.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.role}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-accent">
                  {item.project}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-primary px-6 py-24 text-primary-foreground">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Build with confidence
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter md:text-5xl">
            Ready to start your next project?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-primary-foreground/70">
            Let’s discuss your objectives, timeline and design priorities with a clear project road map.
          </p>
        </div>
      </section>
    </>
  );
}
