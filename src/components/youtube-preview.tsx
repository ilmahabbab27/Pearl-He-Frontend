import { youtubeVideoId } from '@/lib/youtube';

export default function YouTubePreview({ url, title = 'YouTube video' }: { url: string; title?: string }) {
  const id = youtubeVideoId(url);
  if (!id) return null;
  return <div className="space-y-2">
    <iframe key={id} src={`https://www.youtube.com/embed/${id}`} title={title} className="aspect-video min-h-[200px] w-full border-0" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer" className="text-sm text-accent underline">Watch on YouTube</a>
  </div>;
}
