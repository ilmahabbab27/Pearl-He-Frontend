import BlogVideoField from '@/components/blog-video-field';
import HeroSettings from '@/components/hero-settings';
import ContactMessages from '@/components/contact-messages';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { api, type ApiError, type ContentItem } from '@/lib/content';
import logo from '@/assets/pearl-mark.svg';
import './admin.css';

type Kind = 'blogs' | 'projects' | 'messages' | 'hero';
export default function AdminPage() {
  const client = useQueryClient();
  const [kind, setKind] = useState<Kind>('blogs');
  const [editing, setEditing] = useState<ContentItem | 'new' | null>(null);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  const user = useQuery({ queryKey: ['admin-user'], queryFn: () => api<{name: string}>('user'), retry: (attempt, error) => (error as ApiError).status !== 401 && attempt < 1 });
  const items = useQuery({ queryKey: ['admin', kind], queryFn: () => api<ContentItem[]>(`admin/${kind}`), enabled: !!user.data && (kind === 'blogs' || kind === 'projects') });
  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError('');
    try { await api('login', { method: 'POST', body: new FormData(event.currentTarget) }); await user.refetch(); }
    catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  }
  async function refresh() {
    await Promise.all([client.invalidateQueries({ queryKey: ['admin'] }), client.invalidateQueries({ queryKey: ['content'] })]);
  }
  async function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError('');
    const data = new FormData(event.currentTarget);
    data.set('published', data.get('published') ? '1' : '0');
    for (const name of ['partner_logo', 'image', 'image_2', 'image_3', 'image_4', 'image_5']) {
      if (!(data.get(name) as File)?.size) data.delete(name);
    }
    try {
      await api(`admin/${kind}${editing !== 'new' && editing ? `/${editing.id}` : ''}`, { method: 'POST', body: data });
      setEditing(null); setNotice('Saved successfully. Published content is now visible on the website.'); await refresh();
    } catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  }
  async function remove(item: ContentItem) {
    if (!window.confirm(`Delete “${item.title}”? This cannot be undone.`)) return;
    setBusy(true); setError('');
    try { await api(`admin/${kind}/${item.id}`, { method: 'DELETE' }); setNotice('Content deleted.'); await refresh(); }
    catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  }
  async function logout() {
    setBusy(true); setError('');
    try { await api('logout', { method: 'POST' }); client.clear(); setEditing(null); }
    catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  }
  const item = editing && editing !== 'new' ? editing : null;
  if (user.isPending) return <div className="cms"><p>Loading admin panel…</p></div>;
  if (!user.data) return <div className="cms cms-login"><form onSubmit={login} className="cms-card">
    <img src={logo} alt="Pearl Heritance" width="48" /><p className="cms-eyebrow">PEARL HERITANCE</p><h1>Admin sign in</h1><p>Manage your projects and insights.</p>
    {user.error && (user.error as ApiError).status !== 401 && <p role="alert">Unable to reach the backend. <button type="button" onClick={() => user.refetch()}>Retry</button></p>}
    {error && <p role="alert" className="cms-error">{error}</p>}
    <label>Email<input name="email" type="email" autoComplete="username" required /></label>
    <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
    <button disabled={busy} className="cms-primary">{busy ? 'Signing in…' : 'Sign in'}</button><Link to="/">Back to website</Link>
  </form></div>;
  return <div className="cms"><header className="cms-header"><div className="cms-brand"><img src={logo} alt="" width="38" /><div><strong>PEARL HERITANCE</strong><p>Content management</p></div></div><div className="cms-actions"><Link to="/">View website</Link><button onClick={logout} disabled={busy}>Sign out</button></div></header>
    <main className="cms-main"><p className="cms-eyebrow">WELCOME, {user.data.name}</p><h1>Your website content</h1><p>Create, update and publish your latest work and articles.</p>
      <nav className="cms-tabs" aria-label="Content type">{(['blogs', 'projects', 'messages', 'hero'] as Kind[]).map(value => <button disabled={busy} key={value} aria-pressed={kind === value} onClick={() => { setKind(value); setEditing(null); setError(''); setNotice(''); }}>{value === 'blogs' ? 'Blog articles' : value === 'projects' ? 'Projects' : value === 'messages' ? 'Contact messages' : 'Hero image'}</button>)}</nav>
      {error && <p role="alert" className="cms-error">{error}</p>}{notice && <p role="status" className="cms-notice">{notice}</p>}
      {kind === 'hero' ? <HeroSettings /> : kind === 'messages' ? <ContactMessages /> : editing ? <form key={`${kind}-${item?.id || 'new'}`} onSubmit={save} className="cms-card"><div className="cms-actions"><h2>{item ? 'Edit' : 'New'} {kind === 'blogs' ? 'article' : 'project'}</h2><button type="button" disabled={busy} onClick={() => setEditing(null)}>Cancel</button></div>
        <fieldset disabled={busy} className="cms-fields"><label>Title<input name="title" defaultValue={item?.title} required maxLength={255} /></label>
        <label>URL slug<input name="slug" defaultValue={item?.slug} required pattern="[a-z0-9]+(-[a-z0-9]+)*" maxLength={255} placeholder="example-project-title" /><small>Lowercase words separated by hyphens.</small></label>
        <label>{kind === 'blogs' ? 'Category' : 'Sector'}{kind === 'projects' ? <select name="category" defaultValue={item?.category || 'Residential'}>{['Residential', 'Commercial', 'Hospitality', 'Interiors'].map(v => <option key={v}>{v}</option>)}</select> : <input name="category" defaultValue={item?.category} required maxLength={255} />}</label>
        <label>{kind === 'blogs' ? 'Reading time' : 'Project details'}<input name={kind === 'blogs' ? 'read_time' : 'detail'} defaultValue={kind === 'blogs' ? item?.read_time : item?.detail} maxLength={255} placeholder={kind === 'blogs' ? '5 min read' : 'Design & build · 2,800 sqft'} /></label>
        {kind === 'blogs' && <BlogVideoField key={item?.id || 'new'} initialUrl={item?.youtube_url} />}
        <label className="cms-wide">Summary<textarea name="summary" defaultValue={item?.summary} required rows={3} maxLength={5000} /></label>
        <label className="cms-wide">{kind === 'blogs' ? 'Article text' : 'Project description'}<textarea name={kind === 'blogs' ? 'body' : 'description'} defaultValue={kind === 'blogs' ? item?.body.join('\n\n') : item?.description} required rows={10} maxLength={kind === 'blogs' ? 100000 : 50000} /><small>Plain text. Separate paragraphs with a blank line.</small></label>
        <label>{kind === 'projects' ? 'Image 1 (cover)' : 'Cover image'}<input name="image" type="file" accept="image/jpeg,image/png,image/webp" required={!item} /><small>JPG, PNG or WebP, up to 2 MB. Leave empty to keep the existing image.</small>{item?.image && <img className="cms-preview" src={item.image} alt={item.alt} />}</label>
        <label>Image description<input name="alt" defaultValue={item?.alt} required maxLength={255} /><small>Describe the image for visitors using screen readers.</small></label>
        {kind === 'projects' && <div className="cms-wide"><h2>Project gallery</h2><p className="mb-5">Add up to four more images (five total including the cover). JPG, PNG or WebP, up to 2 MB each.</p><div className="cms-fields">{[2, 3, 4, 5].map(slot => <div key={slot}>
          <label>Image {slot}<input name={`image_${slot}`} type="file" accept="image/jpeg,image/png,image/webp" /><small>Choose a file to add or replace this image.</small></label>
          {item?.gallery?.[slot - 2] && <><img className="cms-preview my-3" src={item.gallery[slot - 2]!} alt={`Project image ${slot}`} /><label className="cms-checkbox"><input type="checkbox" name={`remove_image_${slot}`} value="1" />Remove image {slot}</label></>}
        </div>)}</div></div>}
        {kind === 'projects' && <div className="cms-wide"><h2>Partner company</h2><p className="mb-5">Optional company credit displayed on this project.</p><div className="cms-fields">
          <label>Company name<input name="partner_name" defaultValue={item?.partner_name || ''} maxLength={255} /><small>Required when a partner logo is included.</small></label>
          <div><label>Company logo<input name="partner_logo" type="file" accept="image/jpeg,image/png,image/webp" /><small>JPG, PNG or WebP, up to 2 MB. Leave empty to keep the current logo.</small></label>
          {item?.partner_logo && <><img src={item.partner_logo} alt={item.partner_name || 'Partner company logo'} className="my-3 h-24 w-40 border border-border bg-white p-3 object-contain" /><label className="cms-checkbox"><input type="checkbox" name="remove_partner_logo" value="1" />Remove partner logo</label></>}
          </div></div></div>}
        <label className="cms-checkbox cms-wide"><input type="checkbox" name="published" defaultChecked={item?.published} />Publish on website</label>
        <button className="cms-primary" type="submit">{busy ? 'Saving…' : 'Save content'}</button></fieldset>
      </form> : <><div className="cms-actions"><h2>{kind === 'blogs' ? 'Blog articles' : 'Projects'} ({items.data?.length ?? 0})</h2><button className="cms-primary" onClick={() => { setEditing('new'); setNotice(''); }}>+ Add {kind === 'blogs' ? 'article' : 'project'}</button></div>
        {items.isPending ? <p>Loading…</p> : items.isError ? <p role="alert">Could not load content. <button onClick={() => items.refetch()}>Retry</button></p> : !items.data.length ? <div className="cms-card">No content yet. Add your first {kind === 'blogs' ? 'article' : 'project'}.</div> : <div className="cms-list">{items.data.map(entry => <article className="cms-row" key={entry.id}><img src={entry.image} alt={entry.alt} /><div><h3>{entry.title}</h3><p>{entry.category} · <span>{entry.published ? 'Published' : 'Draft'}</span></p></div><div className="cms-actions"><button disabled={busy} onClick={() => { setEditing(entry); setNotice(''); }}>Edit</button>{entry.published && <Link to={`/${kind}/${entry.slug}`}>View</Link>}<button className="cms-delete" disabled={busy} onClick={() => remove(entry)}>Delete</button></div></article>)}</div>}
      </>}
    </main></div>;
}
