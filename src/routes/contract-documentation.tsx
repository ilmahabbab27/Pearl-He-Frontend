import { ShieldCheck, Target, ClipboardList, HardHat, UsersRound, MessagesSquare, ChartNoAxesCombined, ArrowRight, ArrowLeft } from "lucide-react";

const benefits = [
  { icon: MessagesSquare, title: "INDEPENDENT\nPROFESSIONAL ADVICE", text: "Objective guidance to help you make informed decisions." },
  { icon: ChartNoAxesCombined, title: "TRANSPARENT\nPROJECT MANAGEMENT", text: "Open communication, clear reporting and full visibility at every stage." },
  { icon: ClipboardList, title: "CLEAR\nRESPONSIBILITIES", text: "Well-defined roles and accountability for a smooth delivery." },
  { icon: HardHat, title: "QUALIFIED CONSULTANTS AND\nCONTRACTORS", text: "We engage the best professionals for your project." },
  { icon: UsersRound, title: "SINGLE POINT\nOF COORDINATION", text: "You deal with one team - we manage the entire project for you." },
];

export default function ContractDocumentationPage() {
  return (
    <section className="bg-white px-6 py-14 text-[#003763]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <h1 className="text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">Our Contract<br />Structure</h1>
            <div className="mt-5 h-px max-w-[460px] bg-[#bfc0c4]"><div className="h-px w-40 bg-[#00b3e7]" /></div>
            <p className="mt-6 text-2xl font-medium leading-relaxed text-[#303b46]">You deal with <span className="font-semibold text-[#00b3e7]">ONE TEAM.</span><br />You receive <span className="font-semibold text-[#00b3e7]">TWO PROTECTIONS.</span></p>
            <p className="mt-5 max-w-[430px] text-lg font-light leading-relaxed">Our two-contract model is designed entirely for your protection, ensuring transparency, accountability and complete peace of mind.</p>

            <div className="mt-8 grid border border-[#bfc0c4] py-4 sm:grid-cols-2 sm:divide-x sm:divide-[#bfc0c4]">
              <div className="px-4 text-center">
                <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-[#a8aaae]" strokeWidth={1} aria-hidden="true" />
                <h2 className="mb-1 text-sm font-semibold">Two agreements. One Team. Total Protection.</h2>
                <p className="text-sm font-light leading-relaxed">The two-contract model gives you independent professional advice and a separate construction agreement - providing dual protection, while we handle everything for you through one coordinated team.</p>
              </div>
              <div className="mt-6 px-5 text-center sm:mt-0">
                <Target className="mx-auto mb-4 h-10 w-10 text-[#a8aaae]" strokeWidth={1} aria-hidden="true" />
                <p className="text-sm font-light leading-relaxed">Our commitment is simple:<br />Deliver your project with transparency, quality and accountability from concept to completion.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="text-center">
              <div className="mx-auto w-fit rounded-md bg-[#00b3e7] px-9 py-2 text-2xl text-white">CLIENT</div>
              <div className="mx-auto my-2 h-5 w-px bg-[#00b3e7]" />
              <h2 className="text-xl font-normal">ONE COORDINATED TEAM</h2>
              <p className="mt-1 text-base font-light">Managing your project from design to completion</p>
            </div>
            <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-[1fr_0.9fr_1fr] sm:gap-8">
              <article className="relative border border-[#bfc0c4] px-3 pb-5 pt-14 text-center">
                <div className="absolute -top-9 left-1/2 flex h-[72px] w-[72px] -translate-x-1/2 items-center justify-center rounded-full bg-[#a8aaae] text-white"><ClipboardList size={44} strokeWidth={1} aria-hidden="true" /></div>
                <h3 className="text-lg font-bold uppercase leading-tight text-[#303b46]">Consultancy<br />Agreement</h3>
                <p className="mt-3 text-sm font-semibold">With Pearl Heritance</p>
                <div className="mx-auto my-2 h-px w-20 bg-[#bfc0c4]" />
                <p className="text-sm font-light leading-snug">For professional consultancy and project management services.</p>
              </article>
              <div className="relative flex min-h-[210px] flex-col items-center justify-center rounded-[100px] border border-[#bfc0c4] px-3 py-5 text-center">
                <ArrowRight className="absolute -left-8 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-[#00b3e7] sm:block" strokeWidth={1} aria-hidden="true" />
                <UsersRound className="mb-2 h-10 w-10 text-[#303b46]" strokeWidth={1} aria-hidden="true" />
                <h3 className="text-lg font-bold uppercase leading-tight text-[#303b46]">Pearl<br />Heritance</h3>
                <p className="mt-3 text-sm font-light leading-snug">Your Single Point<br />of Responsibility</p>
                <ArrowLeft className="absolute -right-8 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-[#00b3e7] sm:block" strokeWidth={1} aria-hidden="true" />
              </div>
              <article className="relative mt-8 border border-[#bfc0c4] px-3 pb-5 pt-14 text-center sm:mt-0">
                <div className="absolute -top-9 left-1/2 flex h-[72px] w-[72px] -translate-x-1/2 items-center justify-center rounded-full bg-[#a8aaae] text-white"><HardHat size={44} strokeWidth={1} aria-hidden="true" /></div>
                <h3 className="text-lg font-bold uppercase leading-tight text-[#303b46]">Construction<br />Contract</h3>
                <p className="mt-3 text-sm font-semibold">With Selected Contractor</p>
                <div className="mx-auto my-2 h-px w-20 bg-[#bfc0c4]" />
                <p className="text-sm font-light leading-snug">For construction works and implementation.</p>
              </article>
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-7 text-center text-xl font-normal uppercase">Key Benefits for You</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-[#bfc0c4]">
          {benefits.map(item => (
            <article key={item.title} className="px-4 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center border border-[#bfc0c4] text-[#a8aaae]"><item.icon size={30} strokeWidth={1} aria-hidden="true" /></div>
              <h3 className="mb-2 whitespace-pre-line text-xs font-bold uppercase leading-tight text-[#303b46]">{item.title}</h3>
              <p className="text-xs leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
