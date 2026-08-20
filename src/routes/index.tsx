import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-architecture.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import { company, process, services } from "@/data/company";

const title = "Pearl Heritance | Design, Build & Project Management Consultancy";
const description =
  "Pearl Heritance (Pvt) Ltd is a Sri Lankan consultant-led design, build and project management consultancy delivering residential, commercial and hospitality developments.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
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
                className="border border-input px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
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
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Integrated Services</h2>
            <span className="font-mono text-[10px] text-muted-foreground">
              01 // CORE CAPABILITIES
            </span>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border ring-1 ring-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.code} className="bg-background p-10 transition-colors hover:bg-card">
                <span className="mb-8 block font-mono text-[10px] text-accent">{s.code}/06</span>
                <h3 className="mb-4 text-xl font-bold uppercase">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-28 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 max-w-2xl">
            <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-5xl">
              Project Delivery Process
            </h2>
            <p className="text-primary-foreground/60">
              A proven process that ensures clarity, coordination and confidence at every stage of
              your project.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="relative">
                <div className="mb-4 text-4xl font-black text-accent/40">{p.step}</div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-widest">{p.title}</h3>
                <p className="text-xs leading-loose text-primary-foreground/50">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Portfolio</h2>
            <Link
              to="/projects"
              className="border-b border-accent pb-1 font-mono text-[10px] text-accent"
            >
              VIEW FULL ARCHIVE
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <article>
              <img
                src={projectResidential}
                alt="Private residence project in Nawala"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="mt-6 flex justify-between">
                <div>
                  <h3 className="font-bold uppercase">Residence at Nawala</h3>
                  <p className="text-xs text-muted-foreground">Residential / Design & Build</p>
                </div>
                <div className="font-mono text-[10px] uppercase text-accent">Completed</div>
              </div>
            </article>
            <article>
              <img
                src={projectHospitality}
                alt="Eco lodge retreat in the Sri Lankan hill country"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="mt-6 flex justify-between">
                <div>
                  <h3 className="font-bold uppercase">Eco Lodge Retreat</h3>
                  <p className="text-xs text-muted-foreground">Hospitality / Consultancy</p>
                </div>
                <div className="font-mono text-[10px] uppercase text-accent">In Development</div>
              </div>
            </article>
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
