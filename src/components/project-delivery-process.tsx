import processPhotos from "@/assets/delivery-process-photos.png";

const steps = [
  { number: "01", title: "CONSULTATION", text: "We listen, understand and assess your vision, requirements and objectives through in-depth consultation.", photo: "0% 0%", order: "lg:order-1" },
  { number: "02", title: "DESIGN & PLANNING", text: "We transform ideas into functional, innovative and sustainable designs with detailed planning and technical expertise.", photo: "50% 0%", order: "lg:order-2" },
  { number: "03", title: "TEAM FORMATION", text: "We assemble the right team of professionals and specialists to ensure seamless collaboration and project alignment.", photo: "100% 0%", order: "lg:order-3" },
  { number: "04", title: "CONTRACTS & PROJECT SETUP", text: "We establish clear contracts, define roles, set timelines and implement systems to ensure a strong foundation for successful delivery.", photo: "0% 100%", order: "lg:order-6" },
  { number: "05", title: "CONSTRUCTION MANAGEMENT", text: "We oversee construction with strict quality control, safety management and timely execution to bring your vision to life.", photo: "50% 100%", order: "lg:order-5" },
  { number: "06", title: "COMPLETION & AFTERCARE", text: "We deliver with pride and provide ongoing aftercare and support to ensure long-term value and client satisfaction.", photo: "100% 100%", order: "lg:order-4" },
];

export default function ProjectDeliveryProcess({ headingLevel: Heading = "h1" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section className="overflow-hidden bg-white px-6 py-20 text-[#003763]">
      <div className="mx-auto max-w-[1320px]">
        <Heading className="max-w-xl text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">Project Delivery<br />Process</Heading>
        <div className="mt-5 h-px max-w-lg bg-[#bfc0c4]"><div className="h-px w-40 bg-[#00b3e7]" /></div>
        <p className="mb-12 mt-8 text-lg font-light leading-relaxed md:text-xl">A proven process that ensures clarity, coordination and confidence at every stage of your project</p>

        <div className="relative grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-6">
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[calc(50%+12px)] border-r-[3px] border-t-[3px] border-[#00b3e7] lg:block" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 top-[calc(50%+12px)] hidden border-t-[3px] border-[#00b3e7] lg:block" aria-hidden="true" />
          <span className="absolute -top-[9px] left-0 hidden h-0 w-0 border-y-[10px] border-l-[18px] border-y-transparent border-l-[#00b3e7] lg:block" aria-hidden="true" />
          <span className="absolute left-0 top-[calc(50%+3px)] hidden h-0 w-0 border-y-[10px] border-r-[18px] border-y-transparent border-r-[#00b3e7] lg:block" aria-hidden="true" />
          {steps.map(step => (
            <article key={step.number} className={`relative grid min-h-[265px] grid-cols-[1.2fr_1fr] border border-[#bfc0c4] border-t-[3px] border-t-[#00b3e7] ${step.order}`}>
              <span className="absolute -top-7 left-6 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#bfc0c4] bg-white p-1">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-[#bfc0c4] text-2xl font-semibold text-white">{step.number}</span>
              </span>
              <div className="pb-5 pl-4 pr-3 pt-12">
                <h3 className="mb-2 text-lg font-bold uppercase leading-tight tracking-tight text-[#33383d]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#344454]">{step.text}</p>
              </div>
              <div className="overflow-hidden" aria-hidden="true">
                <div className="h-full w-full" style={{ backgroundImage: `url(${processPhotos})`, backgroundSize: "auto 200%", backgroundPosition: step.photo }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
