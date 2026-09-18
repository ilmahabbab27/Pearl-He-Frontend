import YouTubePreview from '@/components/youtube-preview';
import { useContent } from '@/lib/content';
import ContentStatus from '@/components/content-status';
import { Link, useParams } from "react-router-dom";


export default function BlogDetailPage() {
  const { data: blogPosts = [], isPending, isError, refetch } = useContent('blogs');
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (isPending || isError) return <ContentStatus error={isError} retry={() => refetch()} />;

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
          {post.youtube_url && <div className="mb-12"><YouTubePreview url={post.youtube_url} title={post.title + " - video"} /></div>}
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
