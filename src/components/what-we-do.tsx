import ServiceIcon from "@/components/service-icon";

const integratedServices = [
  {
    title: "DESIGN",
    items: ["Architectural Design", "Interior Design", "Landscape Design"],
    icon: "design",
  },
  {
    title: "DESIGN & BUILD",
    items: [],
    icon: "design-build",
  },
  {
    title: "CONSULTANCY",
    items: ["Engineering Consultancy", "Quantity Surveying", "Feasibility Studies"],
    icon: "consultancy",
  },
  {
    title: "PROJECT\nMANAGEMENT",
    items: ["Planning", "Cost Management", "Tender Documentation", "Contractor Selection"],
    icon: "project",
  },
  {
    title: "CONSTRUCTION",
    items: ["Construction Management", "Construction Supervision"],
    icon: "construction",
  },
  {
    title: "DEVELOPMENT",
    items: ["Hospitality", "Residential", "Commercial"],
    icon: "development",
  },
  {
    title: "PROPERTY\nMANAGEMENT",
    items: ["Maintenance", "Asset Management"],
    icon: "property",
  },
  {
    title: "OVERSEAS CLIENT\nSUPPORT",
    items: [],
    icon: "support",
  },
] as const;

export default function WhatWeDo({ headingLevel: Heading = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <Heading className="text-4xl font-bold uppercase tracking-tight text-primary md:text-5xl">
              WHAT WE DO
            </Heading>
            <div className="mt-5 h-px max-w-md bg-border"><div className="h-px w-36 bg-accent" /></div>
            <p className="mt-8 text-lg text-muted-foreground">Integrated Building Solutions</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {integratedServices.map((service) => (
              <article
                key={service.title}
                className="group flex min-h-[180px] items-center gap-4 border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_16px_35px_rgba(20,52,79,0.08)]"
              >
                <div className="shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-transform duration-200 group-hover:scale-105">
                    <ServiceIcon name={service.icon} />
                  </div>
                </div>

                <div className="min-w-0">
                <h3 className="mb-2 whitespace-pre-line text-sm font-bold uppercase leading-normal text-foreground">
                  {service.title}
                </h3>

                {service.items.length > 0 && (
                  <ul className="space-y-1 text-xs leading-relaxed text-muted-foreground">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}
