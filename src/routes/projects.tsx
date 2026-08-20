import { createFileRoute, Link } from "@tanstack/react-router";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import projectInterior from "@/assets/project-interior.jpg";

const title = "Projects | Pearl Heritance Residential, Commercial & Hospitality";
const description =
  "Selected residential, commercial, hospitality and interior fit-out projects delivered by Pearl Heritance across Sri Lanka.";

const projects = [
  {
    name: "Residence at Nawala",
    sector: "Residential",
    detail: "Design & build · 2,800 sqft",
    image: projectResidential,
    alt: "Modern private residence at Nawala",
  },
  {
    name: "Mini Apartment Complex, Dehiwala",
    sector: "Commercial",
    detail: "Project management · Multi-unit development",
    image: projectCommercial,
    alt: "Commercial apartment complex in Dehiwala",
  },
  {
    name: "Eco Lodge Retreat",
    sector: "Hospitality",
    detail: "Design consultancy · Construction supervision",
    image: projectHospitality,
    alt: "Eco lodge retreat in the hill country",
  },
  {
    name: "Café & Retail Fit-Outs, Colombo",
    sector: "Interiors",
    detail: "Interior design & built · Custom joinery",
    image: projectInterior,
    alt: "Café interior fit-out in Colombo",
  },
] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            03 // Portfolio
          </div>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-balance md:text-6xl">
            Projects that reflect craftsmanship and coordination.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Residential, commercial, hospitality and interior work delivered with quality
            craftsmanship, thoughtful design and disciplined project control.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name}>
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h2 className="font-bold uppercase">{p.name}</h2>
                  <p className="text-xs text-muted-foreground">{p.detail}</p>
                </div>
                <span className="font-mono text-[10px] uppercase text-accent">{p.sector}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl text-sm text-muted-foreground">
            Further project references, drawings and completion records are available on request.
          </p>
          <Link
            to="/contact"
            className="bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent"
          >
            Request a Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
