import logo from "@/assets/logo-BqvBdEiO.svg";

const professionalConsultants = [
  "Chartered Architects",
  "Structural Engineers",
  "Civil Engineers",
  "Mechanical Engineers",
  "Electrical Engineers",
  "Quantity Surveyors",
  "Interior Designers",
  "Landscape Architects",
  "Environmental Consultants",
  "Fire & Safety Consultants",
  "Town Planners",
  "Legal Advisors",
] as const;

const constructionNetwork = [
  "CIDA-Registered Contractors",
  "MEP Contractors",
  "Steel Specialists",
  "Road Contractors",
  "Swimming Pool Specialists",
  "ICT & Security Contractors",
  "Waterproofing Specialists",
  "Solar Installers",
  "Lift & Escalator Specialists",
] as const;

const benefits = [
  {
    title: "ONE COORDINATED\nTEAM",
    text: "You work with one team that manages everything.",
    icon: "team",
  },
  {
    title: "TWO AGREEMENTS,\nYOUR PROTECTION",
    text: "Two contracts designed entirely to protect you.",
    icon: "shield",
  },
  {
    title: "COMPLETE TRANSPARENCY\n& ACCOUNTABILITY",
    text: "Clear processes, open reporting and defined responsibilities.",
    icon: "transparency",
  },
  {
    title: "DESIGN TO COMPLETION",
    text: "We manage your project from concept through to completion seamlessly.",
    icon: "target",
  },
  {
    title: "QUALITY, SAFETY\n& COMPLIANCE",
    text: "Our network upholds the highest standards in every aspect of delivery.",
    icon: "badge",
  },
] as const;

const iconMap: Record<string, JSX.Element> = {
  team: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="24" cy="22" r="8" />
      <path d="M14 46c2-6 7-10 14-10s12 4 14 10" />
      <circle cx="42" cy="22" r="6" />
      <path d="M36 42c1-5 5-8 9-8" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 14 48 20v12c0 9-6 17-16 22-10-5-16-13-16-22V20l16-6Z" />
      <path d="M24 32l5 5 11-13" />
    </svg>
  ),
  transparency: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 20h28v24H18z" />
      <path d="M24 26h16M24 32h16M24 38h10" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="32" cy="32" r="18" />
      <circle cx="32" cy="32" r="8" />
      <path d="M32 14v8M32 42v8M14 32h8M42 32h8" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 18 42 22v10c0 7-5 13-10 16-5-3-10-9-10-16V22l10-4Z" />
      <path d="M26 32l4 4 8-10" />
    </svg>
  ),
};

export default function TeamPage() {
  return (
    <>
      <section className="bg-[#f3f3f1] px-6 py-16 text-[#0c3b5d]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1.2fr]">
            <div>
              <h1 className="text-[clamp(3rem,5vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.08em] text-[#0d3b5f]">
                OUR PROFESSIONAL
                <br />
                NETWORK
              </h1>
              <div className="mt-6 h-[2px] w-full bg-[#1d7eb8]/60" />
            </div>

            <div className="hidden lg:block" />
          </div>

          <p className="mt-6 max-w-[1180px] text-[clamp(1.15rem,1.8vw,2rem)] font-light leading-relaxed text-[#234b69]">
            A strong network of trusted professionals and specialized contractors, working together
            seamlessly to deliver exceptional results.
          </p>
        </div>
      </section>

      <section className="bg-[#f3f3f1] px-6 pb-16 pt-0 text-[#0c3b5d]">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_220px_1fr] lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#0d3b5f] px-5 py-3 text-[0.8rem] font-black uppercase tracking-[0.2em] text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <svg viewBox="0 0 64 64" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="22" cy="24" r="8" />
                    <path d="M12 46c2-6 7-10 14-10s12 4 14 10" />
                    <circle cx="42" cy="24" r="6" />
                    <path d="M36 42c1-5 5-8 9-8" />
                  </svg>
                </span>
                Professional Consultants
              </div>

              <div className="space-y-3">
                {professionalConsultants.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-full border border-[#0d3b5f]/27 bg-white/70 px-4 py-3 text-[0.95rem] font-medium text-[#0c3b5d] shadow-[0_1px_0_rgba(13,59,93,0.08)]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0d87c8]/60 bg-[#eaf7ff] text-[#0d87c8]">
                      <svg viewBox="0 0 64 64" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 46V20l14-10 14 10v26" />
                        <path d="M22 28h20M22 34h20M22 40h14" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-center py-8 lg:py-0">
              <div className="flex h-[200px] w-[200px] items-center justify-center">
                <img
                  src={logo}
                  alt="Pearl Heritance logo"
                  className="h-[150px] w-auto object-contain"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#0d3b5f] px-5 py-3 text-[0.8rem] font-black uppercase tracking-[0.2em] text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <svg viewBox="0 0 64 64" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 50V20h16l16 12v18" />
                    <path d="M20 20V14h12v6" />
                    <path d="M22 34h20" />
                  </svg>
                </span>
                Construction Network
              </div>

              <div className="space-y-3">
                {constructionNetwork.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-full border border-[#0d3b5f]/27 bg-white/70 px-4 py-3 text-[0.95rem] font-medium text-[#0c3b5d] shadow-[0_1px_0_rgba(13,59,93,0.08)]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0d87c8]/60 bg-[#eaf7ff] text-[#0d87c8]">
                      <svg viewBox="0 0 64 64" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 46V16h20l12 12v18" />
                        <path d="M20 22h12M20 30h20M20 38h16" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0d3b5f]/20 bg-[#f3f3f1] px-6 pb-20 pt-8 text-[#0c3b5d]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {benefits.map((item) => (
              <div key={item.title} className="border border-[#0d3b5f]/25 bg-[#f7f7f6] p-5 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#0d87c8]/60 bg-white text-[#0d87c8] shadow-sm">
                  {iconMap[item.icon]}
                </div>
                <h3 className="mb-3 text-[0.75rem] font-black uppercase leading-relaxed tracking-[0.12em] whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-[0.85rem] leading-relaxed text-[#234b69]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
