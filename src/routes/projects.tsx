import { useContent } from '@/lib/content';
import ContentStatus from '@/components/content-status';
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


const filters = ["All", "Residential", "Commercial", "Hospitality", "Interiors"] as const;

export default function ProjectsPage() {
  const { data: projects = [], isPending, isError, refetch } = useContent('projects');
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [search, setSearch] = useState("");

  const visibleProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter = activeFilter === "All" || project.sector === activeFilter;
      const matchesSearch =
        query.length === 0 ||
        project.name.toLowerCase().includes(query) ||
        (project.detail || '').toLowerCase().includes(query) ||
        project.sector.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search, projects]);

  if (isPending || isError) return <ContentStatus error={isError} retry={() => refetch()} />;

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
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-5 border border-border bg-card p-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground"
                      : "border border-input bg-background text-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="w-full max-w-md">
              <label className="sr-only" htmlFor="project-search">
                Search projects
              </label>
              <input
                id="project-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search projects..."
                className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          {visibleProjects.length === 0 ? (
            <div className="border border-border bg-card p-12 text-center">
              <h2 className="text-2xl font-black uppercase tracking-tight">No projects found</h2>
              <p className="mt-4 text-muted-foreground">
                Try another keyword or switch back to a different filter.
              </p>
            </div>
          ) : (
            <div className="grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
              {visibleProjects.map((p) => (
                <article key={p.name}>
                  <div className="relative">
                    <Link to={`/projects/${p.slug}`}>
                      <img
                        src={p.image}
                        alt={p.alt}
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </Link>
                    <span className="absolute right-4 top-4 bg-white/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                      {p.sector}
                    </span>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <Link to={`/projects/${p.slug}`} className="font-bold uppercase hover:text-accent">
                        {p.name}
                      </Link>
                      <p className="text-xs text-muted-foreground">{p.detail}</p>
                    </div>
                    {p.partner_logo && <img
                      src={p.partner_logo}
                      alt={`${p.partner_name || 'Partner company'} logo`}
                      loading="lazy"
                      className="h-14 w-28 shrink-0 bg-white object-contain"
                    />}
                  </div>
                </article>
              ))}
            </div>
          )}
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
