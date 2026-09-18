import ProjectGallery from '@/components/project-gallery';
import { useContent } from '@/lib/content';
import ContentStatus from '@/components/content-status';
import { Link, useParams } from "react-router-dom";


export default function ProjectDetailPage() {
  const { data: projects = [], isPending, isError, refetch } = useContent('projects');
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (isPending || isError) return <ContentStatus error={isError} retry={() => refetch()} />;

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
          <ProjectGallery key={project.slug} images={project.images?.length ? project.images : [project.image]} alt={project.alt} />

          <div className="mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-foreground/90">
            <p>{project.summary}</p>
            <p>{project.description}</p>
            {project.partner_name && <aside aria-label="Partner company" className="flex flex-wrap items-center gap-5 border border-border bg-card p-6">
              {project.partner_logo && <img src={project.partner_logo} alt={project.partner_name + ' logo'} loading="lazy" className="h-20 w-32 bg-white p-2 object-contain" />}
              <div><p className="text-xs uppercase tracking-widest text-muted-foreground">Partner company</p><p className="mt-1 text-lg font-semibold">{project.partner_name}</p></div>
            </aside>}
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
