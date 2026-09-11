import { UsersRound, Sprout, HardHat, BriefcaseBusiness, ShieldCheck, UserRoundCheck, Network, BadgeCheck } from "lucide-react";

const groups = [
  { title: "PROFESSIONAL CONSULTANTS", icon: UsersRound, items: ["Architects", "Engineers", "Quantity Surveyors", "Interior Designers", "Landscape Architects"] },
  { title: "SPECIALIST CONSULTANTS", icon: Sprout, items: ["Environmental", "Fire & Safety", "MEP Experts", "Green Experts"] },
  { title: "CONSTRUCTION NETWORK", icon: HardHat, items: ["CIDA Registered Contractors", "Specialist Contractors", "Trade Contractors"] },
  { title: "CORPORATE SERVICES", icon: BriefcaseBusiness, items: ["Finance", "Administration", "Legal"] },
];

const commitments = [
  { title: "PROFESSIONAL\nINDEPENDENCE", icon: UserRoundCheck, text: "Independent advice and oversight at every stage to protect your interests." },
  { title: "CLEAR\nRESPONSIBILITIES", icon: ShieldCheck, text: "Well-defined roles and accountability for every party involved." },
  { title: "TRANSPARENT\nPROJECT MANAGEMENT", icon: Network, text: "Open communication, full visibility and honest reporting throughout the project." },
  { title: "QUALIFIED\nPROFESSIONALS", icon: BadgeCheck, text: "Chartered professionals and CIDA-registered contractors selected to suit each project's needs." },
  { title: "SINGLE POINT\nOF COORDINATION", icon: UsersRound, text: "You deal with one team for a seamless, hassle-free project experience." },
];

export default function NetworkCommitment() {
  return (
    <section className="bg-white px-6 pb-10 pt-14 text-[#003763]" aria-labelledby="network-commitment-title">
      <div className="mx-auto max-w-[1232px]">
        <h2 id="network-commitment-title" className="text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">Our<br />Commitment</h2>
        <div className="mt-5 h-px max-w-[460px] bg-[#bfc0c4]"><div className="h-px w-40 bg-[#00b3e7]" /></div>
        <p className="mt-5 text-lg font-light leading-relaxed">Rather than maintaining a fixed construction team, we select professionals and contractors based on their qualifications, experience, availability, and suitability for each project.</p>
        <p className="mt-1 text-lg leading-relaxed text-[#00b3e7]">This enables us to provide our clients with independent, transparent, and project-specific solutions while maintaining professional standards and regulatory compliance.</p>

        <h3 className="mx-auto mb-4 mt-5 max-w-[530px] border border-[#bfc0c4] px-4 py-2 text-center text-xl font-normal">Project Planning &amp; Management</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map(group => (
            <div key={group.title} className="px-3">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#bfc0c4] text-[#a8aaae]"><group.icon className="h-7 w-7" strokeWidth={1} aria-hidden="true" /></div>
              <h4 className="mb-1 text-sm font-bold text-[#303b46]">{group.title}</h4>
              <ul className="list-disc space-y-0.5 pl-3 text-sm font-light leading-snug marker:text-[8px]">
                {group.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-5 flex max-w-[1040px] items-center gap-3 rounded-md border border-[#bfc0c4] px-3 py-2">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#bfc0c4] text-[#a8aaae]"><ShieldCheck className="h-7 w-7" strokeWidth={1} aria-hidden="true" /></div>
          <p className="text-sm font-light leading-relaxed">Our professional network includes Chartered Architects, Chartered Engineers, Chartered Quantity Surveyors, and CIDA-registered contractors, ensuring that appropriately qualified professionals undertake every project in accordance with Sri Lankan regulations.</p>
        </div>

        <h3 className="mb-5 mt-4 text-center text-xl font-normal uppercase">Our Commitment to You</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-[#bfc0c4]">
          {commitments.map(item => (
            <article key={item.title} className="px-4 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#bfc0c4] text-[#a8aaae]"><item.icon className="h-7 w-7" strokeWidth={1} aria-hidden="true" /></div>
              <h4 className="mb-2 whitespace-pre-line text-xs font-bold uppercase leading-tight text-[#303b46]">{item.title}</h4>
              <p className="text-xs leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
