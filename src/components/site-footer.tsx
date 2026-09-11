import { Link } from "react-router-dom";
import { company } from "@/data/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card px-6 pt-24 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-6 text-2xl font-black tracking-tighter">PEARL HERITANCE</div>
            <p className="text-sm leading-loose text-muted-foreground">
              A consultant-led design, build and project management consultancy. More than two
              decades of experience bridging architectural vision and delivered development.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-accent">
              Business Reg. No. {company.regNumber}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5">
            {company.offices.map((office) => (
              <div key={office.label}>
                <h2 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
                  {office.label}
                </h2>
                <address className="text-xs leading-relaxed not-italic text-foreground/80">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <a href={`tel:${office.phoneHref}`} className="mt-4 block font-bold hover:text-accent">
                    {office.phone}
                  </a>
                </address>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
              New Inquiries
            </h2>
            <a
              href={`mailto:${company.email}`}
              className="text-xl font-bold underline decoration-border underline-offset-8 transition-colors hover:text-accent"
            >
              {company.email}
            </a>
            <div className="mt-8 flex flex-col gap-2 text-xs font-semibold uppercase tracking-widest">
              <Link to="/services" className="hover:text-accent">
                Services
              </Link>
              <Link to="/projects" className="hover:text-accent">
                Projects
              </Link>
              <Link to="/testimonials" className="hover:text-accent">
                Testimonials
              </Link>
              <Link to="/blogs" className="hover:text-accent">
                Blogs
              </Link>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-12 md:flex-row">
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
            {company.promise}
          </p>
        </div>
      </div>
    </footer>
  );
}
