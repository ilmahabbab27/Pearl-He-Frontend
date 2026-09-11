import { ShieldCheck, UserRound, Lightbulb, BadgeCheck, Search, UsersRound, Leaf, Handshake, Trophy, ChartNoAxesCombined, Target, Eye, PencilRuler, Construction, ClipboardList, Quote } from "lucide-react";
import type { ReactNode } from "react";

const boardValues = [
  { label: "Professionalism", icon: ShieldCheck },
  { label: "Integrity", icon: Handshake },
  { label: "Accountability", icon: ChartNoAxesCombined },
  { label: "Innovation", icon: Lightbulb },
  { label: "Sustainability", icon: Leaf },
  { label: "Excellence", icon: Trophy },
];
const coreValues = [
  { label: "Integrity", icon: ShieldCheck },
  { label: "Professionalism", icon: UserRound },
  { label: "Innovation", icon: Lightbulb },
  { label: "Quality", icon: BadgeCheck },
  { label: "Transparency", icon: Search },
  { label: "Collaboration", icon: UsersRound },
  { label: "Sustainability", icon: Leaf },
  { label: "Client Satisfaction", icon: Handshake },
];

function SectionHeading({ children }: { children: ReactNode }) {
  return <div className="mb-10"><h2 className="text-3xl font-bold uppercase leading-tight tracking-tight text-[#003763] md:text-4xl">{children}</h2><div className="mt-5 h-px max-w-[520px] bg-[#bfc0c4]"><div className="h-px w-36 bg-[#00b3e7]" /></div></div>;
}

export default function AboutPage() {
  return (
    <div className="bg-white text-[#24415c]">
      <section className="px-6 py-16 md:py-20" aria-labelledby="philosophy-heading">
        <div className="mx-auto max-w-7xl">
          <h1 id="philosophy-heading" className="text-4xl font-bold uppercase leading-tight tracking-tight text-[#003763] md:text-5xl">Our<br />Philosophy</h1>
          <div className="mt-5 h-px w-48 bg-[#bfc0c4]"><div className="h-px w-16 bg-[#00b3e7]" /></div>
          <blockquote className="relative mt-12 max-w-4xl pl-8 md:pl-12">
            <Quote className="absolute -left-1 -top-5 h-9 w-9 rotate-180 fill-[#a8aaae] text-[#a8aaae]" aria-hidden="true" />
            <p className="text-xl font-light leading-[1.8] md:text-2xl">At Pearl Heritance, we believe that every successful project begins with a clear vision, professional guidance, thoughtful planning, and responsible execution.</p>
            <p className="mt-8 text-xl font-light leading-[1.8] md:text-2xl">Through our consultant-led Design-Manage-Build approach, we transform ideas into sustainable, functional, and lasting developments while building enduring relationships founded on trust, integrity, and excellence.</p>
            <Quote className="ml-auto mt-3 h-9 w-9 fill-[#a8aaae] text-[#a8aaae]" aria-hidden="true" />
          </blockquote>
        </div>
      </section>

      <section className="border-t border-[#bfc0c4]/50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading>Message From<br />the Board of Directors</SectionHeading>
          <div className="grid gap-10 lg:grid-cols-[230px_1fr]">
            <aside aria-label="Our values">
              <h3 className="mb-6 text-2xl font-medium text-[#303b46]">Our Values</h3>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {boardValues.map(value => <li key={value.label} className="flex items-center gap-3"><span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#bfc0c4] text-[#a8aaae]"><value.icon size={34} strokeWidth={1} aria-hidden="true" /></span><span className="text-xl font-light text-[#303b46]">{value.label}</span></li>)}
              </ul>
            </aside>
            <div>
              <h3 className="mb-4 text-2xl font-medium text-[#303b46]">Welcome to Pearl Heritance (Pvt) Ltd.</h3>
              <div className="space-y-6 text-base font-light leading-relaxed md:columns-2 md:gap-10">
                <p>At Pearl Heritance, we believe that every property represents an opportunity to create lasting value. Whether it is a new development, a renovation, an investment, or the long-term management of a property, our mission is to deliver professional solutions that inspire confidence and exceed expectations.</p>
                <p>Our journey has been shaped by more than two decades of experience in the construction and property industry. Throughout these years, we have observed that many projects face unnecessary challenges due to a lack of professional coordination, transparent project management, and reliable technical guidance. These experiences inspired us to establish Pearl Heritance as a consultant-led organization dedicated to providing integrated property and construction solutions with professionalism, integrity, and accountability.</p>
                <p>What distinguishes Pearl Heritance is our collaborative approach. Rather than relying on a fixed team, we bring together the most suitable architects, engineers, quantity surveyors, specialist consultants, and construction partners for each project. This enables us to deliver tailored solutions that meet our clients' unique requirements while maintaining the highest standards of quality, cost efficiency, and timely delivery.</p>
                <p>As the construction industry continues to evolve, we remain committed to innovation, sustainability, and continuous improvement. Our goal is not simply to complete projects, but to build lasting relationships founded on trust, transparency, and exceptional service.</p>
                <p>We extend our sincere appreciation to our clients, business partners, and professional associates for the confidence they place in us. We look forward to continuing our journey together and transforming ideas into successful developments that create enduring value for generations to come.</p>
                <p className="break-inside-avoid">Board of Directors<br />Pearl Heritance (Pvt) Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#bfc0c4]/50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading>Who We Are</SectionHeading>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="max-w-xl">
              <h3 className="mb-5 text-2xl font-medium leading-relaxed text-[#303b46]">Building Vision Through<br />Professional Consultancy</h3>
              <p className="text-base font-light leading-relaxed">Pearl Heritance (PVT) Ltd is a Design Build and Project Management Consultancy delivering integrated solutions across architecture, engineering, project planning, construction coordination, and development management.</p>
              <p className="mt-6 text-base font-light leading-relaxed">We combine professional expertise, innovative thinking, and strategic project delivery to transform ideas into successful developments while maintaining the highest standards of quality, transparency, and client satisfaction.</p>
            </div>
            <div className="flex flex-col justify-between gap-8 border-l border-[#bfc0c4] pl-6 text-2xl font-medium uppercase text-[#303b46]">
              {["Vision", "Coordinated Team", "Trusted Partner"].map(label => <p key={label}><span className="mb-1 block text-[#00b3e7]">One</span>{label}</p>)}
            </div>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { title: "Design", icon: PencilRuler, items: ["Architectural Design", "Interior Design", "Engineering Consultancy"] },
              { title: "Build", icon: Construction, items: ["Construction Coordination", "Quality Assurance", "Procurement Support"] },
              { title: "Project Management", icon: ClipboardList, items: ["Planning", "Cost Control", "Contract Administration"] },
            ].map(group => <article key={group.title} className="flex items-start gap-4 border border-[#bfc0c4] p-4"><div className="flex h-20 w-20 shrink-0 items-center justify-center bg-[#a8aaae] text-white"><group.icon size={52} strokeWidth={1} aria-hidden="true" /></div><div><h3 className="mb-2 text-sm font-bold uppercase text-[#303b46]">{group.title}</h3><ul className="list-disc space-y-1 pl-4 text-sm font-light">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div></article>)}
          </div>
        </div>
      </section>

      <section className="border-t border-[#bfc0c4]/50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading>Vision,<br />Mission &amp; Values</SectionHeading>
          <div className="grid gap-10 md:grid-cols-2">
            {[
              { title: "Vision", icon: Eye, text: "To become a trusted regional leader in integrated design and construction solutions, delivering projects that create lasting value for our clients and communities." },
              { title: "Mission", icon: Target, text: "To simplify the building journey by providing coordinated professional consultancy, project management, and construction services through one reliable point of responsibility." },
            ].map(item => <article key={item.title} className="flex items-start gap-5"><div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#bfc0c4] text-[#a8aaae]"><item.icon size={48} strokeWidth={1} aria-hidden="true" /></div><div><h3 className="mb-2 text-2xl font-semibold uppercase text-[#303b46]">{item.title}</h3><p className="text-base font-light leading-relaxed">{item.text}</p></div></article>)}
          </div>
          <h3 className="mb-6 mt-12 text-2xl font-semibold uppercase text-[#303b46]">Core Values</h3>
          <div className="grid max-w-4xl grid-cols-2 gap-px bg-[#bfc0c4] sm:grid-cols-4">
            {coreValues.map(value => <div key={value.label} className="bg-white px-3 py-5 text-center"><div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center border border-[#bfc0c4] text-[#a8aaae]"><value.icon size={52} strokeWidth={1} aria-hidden="true" /></div><h4 className="text-xs font-normal uppercase">{value.label}</h4></div>)}
          </div>
        </div>
      </section>
    </div>
  );
}
