import { Link, useParams } from "react-router-dom";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import projectInterior from "@/assets/project-interior.jpg";

const projects = [
  {
    slug: "residence-at-nawala",
    name: "Residence at Nawala",
    sector: "Residential",
    detail: "Design & build · 2,800 sqft",
    image: projectResidential,
    alt: "Modern private residence at Nawala",
    summary:
      "A modern residence shaped around family living, natural light, and a clean architectural language that feels both elevated and practical.",
    description:
      "This private residence was designed to balance contemporary aesthetics with everyday functionality. The layout was carefully planned to support comfort, flow and long-term usability while creating a warm and refined living experience.",
  },
  {
    slug: "mini-apartment-complex-dehiwala",
    name: "Mini Apartment Complex, Dehiwala",
    sector: "Commercial",
    detail: "Project management · Multi-unit development",
    image: projectCommercial,
    alt: "Commercial apartment complex in Dehiwala",
    summary:
      "A multi-unit development delivered with strong coordination between planning, cost control, and construction oversight.",
    description:
      "This development required disciplined project coordination across stakeholder groups, design decisions and site execution. The result was a commercially viable multi-unit scheme built around efficient use of space and dependable delivery.",
  },
  {
    slug: "eco-lodge-retreat",
    name: "Eco Lodge Retreat",
    sector: "Hospitality",
    detail: "Design consultancy · Construction supervision",
    image: projectHospitality,
    alt: "Eco lodge retreat in the hill country",
    summary:
      "A hospitality concept designed around natural surroundings, guest experience, and environmentally sensitive development principles.",
    description:
      "The eco lodge concept combines hospitality design with careful site sensitivity and thoughtful guest circulation. The project reflects a balance between sustainable thinking, visual identity, and practical operations.",
  },
  {
    slug: "cafe-retail-fit-outs-colombo",
    name: "Café & Retail Fit-Outs, Colombo",
    sector: "Interiors",
    detail: "Interior design & built · Custom joinery",
    image: projectInterior,
    alt: "Café interior fit-out in Colombo",
    summary:
      "A retail and hospitality fit-out designed to create a memorable customer journey through tailored interior detailing.",
    description:
      "This interior-led project focused on creating a warm, functional and brand-aligned environment. Custom finishes, efficient circulation and layered textures helped transform the space into a high-impact commercial experience.",
  },
] as const;

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            Project not found
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight">Project unavailable</h1>
          <p className="mt-6 text-muted-foreground">
            The portfolio item you requested could not be found.
          </p>
          <Link to="/projects" className="mt-8 inline-block bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground">
            Back to portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            {project.sector}
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-balance md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {project.detail}
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <img src={project.image} alt={project.alt} className="mb-12 aspect-[16/9] w-full object-cover" />

          <div className="mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-foreground/90">
            <p>{project.summary}</p>
            <p>{project.description}</p>
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <Link to="/projects" className="inline-block border border-input px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent">
              ← Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
