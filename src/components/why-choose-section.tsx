import { UserRound, UsersRound, Building2, ClipboardList, ShieldCheck, Target, Handshake, ChartNoAxesCombined } from "lucide-react";
import pearlMark from "@/assets/pearl-mark.svg";

const reasons = [
  { title: "CONSULTANT-LED PROJECT DELIVERY", icon: UserRound, body: "Every project is led by experienced professionals who provide independent advice and expert oversight." },
  { title: "20+ YEARS OF INDUSTRY EXPERIENCE", icon: null, body: "Over two decades of proven expertise across diverse sectors and complex projects." },
  { title: "INTEGRATED DESIGN & CONSTRUCTION SOLUTIONS", icon: Building2, body: "Seamless integration of design, planning and construction under one coordinated team." },
  { title: "TRUSTED PROFESSIONAL NETWORK", icon: UsersRound, body: "A strong network of qualified consultants and contractors ensuring the best solutions for every project." },
  { title: "TRANSPARENT PROJECT MANAGEMENT", icon: ClipboardList, body: "Clear communication, outlined processes and full visibility at every stage of the project." },
  { title: "COMMITMENT TO QUALITY, COST & TIMELY DELIVERY", icon: ShieldCheck, body: "We are committed to delivering the highest standards while respecting your budget and timeline." },
];

function ReasonCard({ index }: { index: number }) {
  const reason = reasons[index];
  return (
    <article className={`relative z-10 flex min-h-[150px] items-center gap-4 rounded-r-xl rounded-l-[80px] border border-[#bfc0c4] bg-white py-4 pl-3 pr-4 ${index === 1 ? "xl:-translate-x-8" : index === 4 ? "xl:translate-x-8" : ""}`}>
      <div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full border border-[#bfc0c4] p-1">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#a8aaae] text-white">
          {reason.icon ? <reason.icon className="h-12 w-12" strokeWidth={1.2} aria-hidden="true" /> : <span className="text-[38px] font-bold tracking-tight">20+</span>}
        </div>
      </div>
      <div className="min-w-0">
        <h3 className="text-[15px] font-bold leading-snug text-[#37383b]">
          <span className="mr-1">{String(index + 1).padStart(2, "0")}</span> {reason.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-[#414349]">{reason.body}</p>
      </div>
    </article>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="overflow-hidden bg-white px-6 py-20 text-[#37383b]">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-3xl font-bold uppercase tracking-tight text-primary md:text-4xl">WHY CHOOSE PEARL HERITANCE?</h2>
        <p className="mt-4 max-w-4xl text-lg text-muted-foreground">We combine expertise, experience and commitment to deliver projects that create lasting value.</p>

        <div className="relative mt-12 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_250px_minmax(0,1fr)] lg:gap-0 xl:mx-8">
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1200 490" preserveAspectRatio="none" fill="none" stroke="#bfc0c4" strokeWidth="1" aria-hidden="true">
            <path d="M390 75H810 M380 245H820 M390 415H555V255 M810 415H645V255" />
          </svg>
          <div className="space-y-4">{[0, 1, 2].map(index => <ReasonCard key={index} index={index} />)}</div>

          <div className="relative z-20 order-first mx-auto flex h-[250px] w-[250px] items-center justify-center rounded-full border border-dashed border-[#bfc0c4] bg-white lg:order-none lg:mt-10">
            <div className="flex h-[216px] w-[216px] items-center justify-center rounded-full border border-[#bfc0c4] p-2">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-[#bfc0c4]">
                <img src={pearlMark} alt="Pearl Heritance" width={100} height={107} className="h-[107px] w-[100px]" />
                <p className="mt-3 text-center text-sm leading-tight text-black">Objective guidance<br />you make informed</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">{[3, 4, 5].map(index => <ReasonCard key={index} index={index} />)}</div>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 divide-y divide-[#bfc0c4] rounded-lg border border-[#bfc0c4] py-5 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {[
            { icon: Target, text: "Our focus is your success." },
            { icon: UsersRound, text: "Your vision is our mission." },
            { icon: Handshake, text: "Your trust is our foundation." },
            { icon: ChartNoAxesCombined, text: "Your satisfaction is our legacy." },
          ].map(item => (
            <div key={item.text} className="flex flex-col items-center gap-3 px-3 py-3 lg:py-0">
              <item.icon className="h-12 w-12 text-[#a8aaae]" strokeWidth={1} aria-hidden="true" />
              <p className="text-center text-lg font-normal tracking-tight">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
