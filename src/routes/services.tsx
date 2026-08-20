import { createFileRoute, Link } from "@tanstack/react-router";
import { process, services } from "@/data/company";

const title = "Services | Pearl Heritance Design & Build Consultancy";
const description =
  "Architectural design, engineering consultancy, project management, construction, development and property management delivered under one coordinated team.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            02 // Services
          </div>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-balance md:text-6xl">
            Integrated building solutions, delivered end to end.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Rather than a fixed team, we assemble the most suitable architects, engineers, quantity
            surveyors and contractors for each project — while you deal with one point of
            responsibility.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-border ring-1 ring-border md:grid-cols-2">
          {services.map((s) => (
            <article key={s.code} className="bg-background p-10 transition-colors hover:bg-card">
              <span className="mb-8 block font-mono text-[10px] text-accent">{s.code}</span>
              <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight">{s.title}</h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest"
                  >
                    <span className="h-px w-4 bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary px-6 py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-4xl font-black uppercase tracking-tighter">How We Work</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {process.map((p) => (
              <div key={p.step}>
                <div className="mb-4 text-4xl font-black text-accent/40">{p.step}</div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-widest">{p.title}</h3>
                <p className="text-xs leading-loose text-primary-foreground/50">{p.body}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-16 inline-block bg-accent px-8 py-4 text-xs font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-background hover:text-foreground"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
