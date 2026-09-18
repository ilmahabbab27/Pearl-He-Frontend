import YouTubePreview from '@/components/youtube-preview';
import { youtubeVideoId } from '@/lib/youtube';
import { useContent } from '@/lib/content';
import ContentStatus from '@/components/content-status';
import { Link } from "react-router-dom";


export default function BlogsPage() {
  const { data: blogPosts = [], isPending, isError, refetch } = useContent('blogs');
  if (isPending || isError) return <ContentStatus error={isError} retry={() => refetch()} />;

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
          {blogPosts.length === 0 && <p>No articles published yet.</p>}
          {blogPosts.map((post) => (
            <article key={post.id} className="overflow-hidden border border-border bg-card transition-colors hover:border-accent/40">
              {post.youtube_url && youtubeVideoId(post.youtube_url) ? (
                <YouTubePreview url={post.youtube_url} title={post.title + " - video preview"} />
              ) : <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                className="aspect-video min-h-[200px] w-full object-cover"
              />}
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
