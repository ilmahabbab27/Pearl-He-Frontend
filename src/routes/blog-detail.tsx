import { Link, useParams } from "react-router-dom";
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
    body: [
      "Before committing to a residential build, it is essential to establish the right brief, budget and timing. The strongest projects begin with clear goals, realistic expectations and a site strategy that reflects how the home will function in everyday life.",
      "Feasibility should consider site conditions, access, local regulations and the overall scope of works. Early planning also helps identify potential constraints before they become expensive design changes during construction.",
      "When the brief is clear and design decisions are aligned with budget and timeline, the project can move forward with fewer surprises. A well-structured approach protects both value and quality from concept through completion.",
    ],
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
    body: [
      "A consultant-led delivery model creates accountability from the outset. Instead of handling multiple separate contractors and design voices independently, the client deals with one coordinated team responsible for alignment and progress.",
      "This structure supports better decision-making, clearer communication and stronger cost control. It also allows project milestones to be monitored more effectively, reducing the common risk of fragmented communication between consultants and contractors.",
      "Whether the project is residential, hospitality or commercial, a single point of responsibility helps keep design intent connected to delivery reality. That connection is often what makes the difference between a stressful build and a stable, well-managed one.",
    ],
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
    body: [
      "Good design is not only about appearance; it is also about how a building performs over time. Thoughtful planning can improve comfort, reduce maintenance and protect long-term value for the owner.",
      "Material selection, orientation, circulation and durability should be considered together. These decisions influence both the experience of the space and the practicality of upkeep over the years.",
      "In modern developments, sustainable design is often simply good design. Higher-quality choices made early in the process can reduce future risk while creating better spaces for everyday living and working.",
    ],
  },
] as const;

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            Blog not found
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight">Article unavailable</h1>
          <p className="mt-6 text-muted-foreground">
            The blog post you requested could not be found.
          </p>
          <Link to="/blogs" className="mt-8 inline-block bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground">
            Back to blogs
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
            {post.category}
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-balance md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {post.readTime}
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <img src={post.image} alt={post.alt} className="mb-12 aspect-[16/9] w-full object-cover" />
          <article className="mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-foreground/90">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <div className="mt-16 border-t border-border pt-8">
            <Link to="/blogs" className="inline-block border border-input px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent">
              ← Back to all blogs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
