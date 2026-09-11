import { Link } from "react-router-dom";
import projectResidential from "@/assets/project-residential.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import projectInterior from "@/assets/project-interior.jpg";

const blogPosts = [
  {
    slug: "what-to-consider-before-starting-a-residential-build",
    category: "Design Insight",
    title: "What to consider before starting a residential build",
    summary:
      "A practical look at feasibility, budget alignment and decision-making milestones for residential projects.",
    readTime: "5 min read",
    image: projectResidential,
    alt: "Modern residential project exterior",
  },
  {
    slug: "how-a-consultant-led-model-keeps-delivery-on-track",
    category: "Project Management",
    title: "How a consultant-led model keeps delivery on track",
    summary:
      "Learn how clear governance, staged approvals and disciplined coordination reduce delays and improve outcomes.",
    readTime: "7 min read",
    image: projectHospitality,
    alt: "Hospitality development and eco lodge concept",
  },
  {
    slug: "design-choices-that-improve-long-term-value",
    category: "Sustainability",
    title: "Design choices that improve long-term value",
    summary:
      "Thoughtful planning can improve efficiency, reduce maintenance issues and support better long-term performance.",
    readTime: "6 min read",
    image: projectInterior,
    alt: "Interior design and detail of a polished contemporary space",
  },
] as const;

export default function BlogsPage() {
  return (
    <>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            06 // Insights
          </div>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-balance md:text-6xl">
            Articles and perspectives from the field.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Practical guidance for clients planning developments, managing consultants and making confident project decisions.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="overflow-hidden border border-border bg-card transition-colors hover:border-accent/40">
              <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-8">
                <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {post.category}
                </div>
                <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight">{post.title}</h2>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
                <div className="flex items-center justify-between border-t border-border pt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{post.readTime}</span>
                  <Link to={`/blogs/${post.slug}`} className="hover:text-accent">
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
