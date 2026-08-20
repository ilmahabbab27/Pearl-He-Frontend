import { createFileRoute } from "@tanstack/react-router";
import { values } from "@/data/company";

const title = "About | Pearl Heritance (Pvt) Ltd";
const description =
  "A consultant-led organisation built on more than two decades of construction and property experience in Sri Lanka. Our philosophy, vision, mission and values.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            04 // Who We Are
          </div>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-balance md:text-6xl">
            Building vision through professional consultancy.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground">
            Pearl Heritance (Pvt) Ltd is a design, build and project management consultancy
            delivering integrated solutions across architecture, engineering, project planning,
            construction coordination and development management.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <blockquote className="max-w-4xl border-l-2 border-accent pl-8 text-2xl leading-relaxed font-medium text-balance md:text-3xl">
            “Every successful project begins with a clear vision, professional guidance, thoughtful
            planning and responsible execution. Through our consultant-led Design–Manage–Build
            approach, we transform ideas into sustainable, functional and lasting developments.”
          </blockquote>
          <p className="mt-6 pl-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Board of Directors, Pearl Heritance (Pvt) Ltd
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-border ring-1 ring-border md:grid-cols-2">
          <div className="bg-background p-10">
            <h2 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
              Vision
            </h2>
            <p className="text-lg leading-relaxed">
              To become a trusted regional leader in integrated design and construction solutions,
              delivering projects that create lasting value for our clients and communities.
            </p>
          </div>
          <div className="bg-background p-10">
            <h2 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
              Mission
            </h2>
            <p className="text-lg leading-relaxed">
              To simplify the building journey by providing coordinated professional consultancy,
              project management and construction services through one reliable point of
              responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-black uppercase tracking-tighter">Core Values</h2>
          <div className="grid grid-cols-2 gap-px bg-primary-foreground/10 ring-1 ring-primary-foreground/10 md:grid-cols-4">
            {values.map((v) => (
              <div key={v} className="bg-primary p-8">
                <span className="text-sm font-bold uppercase tracking-widest">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          {[
            {
              h: "Consultant-led delivery",
              b: "Chartered professionals and CIDA-registered contractors selected to suit each project's needs.",
            },
            {
              h: "Single point of coordination",
              b: "You deal with one team — we manage consultants, contractors and approvals for you.",
            },
            {
              h: "Cost, time and quality",
              b: "Efficient planning, transparent reporting and rigorous quality control at every stage.",
            },
          ].map((item) => (
            <div key={item.h}>
              <div className="mb-6 h-px w-12 bg-accent" />
              <h3 className="mb-3 text-lg font-bold uppercase tracking-tight">{item.h}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
