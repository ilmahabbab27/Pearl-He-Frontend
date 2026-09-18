import { useState } from 'react';
import YouTubePreview from './youtube-preview';
import { youtubeVideoId } from '@/lib/youtube';

export default function BlogVideoField({ initialUrl }: { initialUrl?: string | null }) {
  const [url, setUrl] = useState(initialUrl || '');
  const invalid = !!url.trim() && !youtubeVideoId(url);
  return <div className="cms-wide space-y-4">
    <label>YouTube video link (optional)<input name="youtube_url" type="url" maxLength={2048} value={url} onChange={event => { setUrl(event.target.value); event.target.setCustomValidity(event.target.value.trim() && !youtubeVideoId(event.target.value) ? 'Enter a valid YouTube video link.' : ''); }} placeholder="https://www.youtube.com/watch?v=..." aria-invalid={invalid} aria-describedby="youtube-help" />
    <small id="youtube-help">Paste a YouTube watch, share, Shorts or live link to preview it. Clear the field and save to remove the video.</small></label>
    {invalid ? <p role="status" className="text-sm text-red-700">Enter a valid YouTube video link.</p> : <YouTubePreview url={url} title="Blog video preview" />}
  </div>;
}
