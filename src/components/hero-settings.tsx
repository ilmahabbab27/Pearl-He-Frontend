import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { api, useSiteSettings, type SiteSettings } from '@/lib/content';

export default function HeroSettings() {
  const settings = useSiteSettings();
  const client = useQueryClient();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  async function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError(''); setNotice('');
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!(data.get('hero_image') as File)?.size) data.delete('hero_image');
    try {
      const updated = await api<SiteSettings>('admin/settings', { method: 'POST', body: data });
      client.setQueryData(['site-settings'], updated);
      form.reset();
      setNotice('Homepage hero updated.');
    } catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  }
  if (settings.isPending) return <p role="status">Loading hero settings...</p>;
  if (settings.isError) return <p role="alert">Unable to load hero settings. <button onClick={() => settings.refetch()}>Retry</button></p>;
  return <section><h2 className="mb-4">Homepage hero image</h2>
    {error && <p role="alert" className="cms-error">{error}</p>}
    {notice && <p role="status" className="cms-notice">{notice}</p>}
    <form onSubmit={save} className="cms-card"><fieldset disabled={busy} className="cms-fields">
      <div className="cms-wide"><img src={settings.data.hero_image} alt={settings.data.hero_alt} className="max-h-96 w-full bg-slate-50 object-contain" /></div>
      <label>Replace hero image<input name="hero_image" type="file" accept="image/jpeg,image/png,image/webp" /><small>JPG, PNG or WebP, up to 4 MB. Leave empty to keep the current image.</small></label>
      <label>Image description<input name="hero_alt" defaultValue={settings.data.hero_alt} required maxLength={255} /><small>Describe the image for visitors using screen readers.</small></label>
      <button className="cms-primary" type="submit">{busy ? 'Saving...' : 'Save hero image'}</button>
    </fieldset></form>
  </section>;
}
