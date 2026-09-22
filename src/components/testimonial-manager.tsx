import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { api, type Testimonial } from '@/lib/content';

export default function TestimonialManager() {
  const client = useQueryClient();
  const items = useQuery({ queryKey: ['admin', 'testimonials'], queryFn: () => api<Testimonial[]>('admin/testimonials') });
  const [editing, setEditing] = useState<Testimonial | 'new' | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const item = editing && editing !== 'new' ? editing : null;

  async function refresh() {
    await Promise.all([client.invalidateQueries({ queryKey: ['admin', 'testimonials'] }), client.invalidateQueries({ queryKey: ['testimonials'] })]);
  }

  async function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError(''); setNotice('');
    const data = new FormData(event.currentTarget);
    data.set('published', data.has('published') ? '1' : '0');
    try {
      await api(`admin/testimonials${item ? `/${item.id}` : ''}`, { method: 'POST', body: data });
      setEditing(null); setNotice('Testimonial saved.'); await refresh();
    } catch (cause) { setError((cause as Error).message); } finally { setBusy(false); }
  }

  async function remove(entry: Testimonial) {
    if (!window.confirm(`Delete testimonial from ${entry.name}? This cannot be undone.`)) return;
    setBusy(true); setError(''); setNotice('');
    try {
      await api(`admin/testimonials/${entry.id}`, { method: 'DELETE' });
      setNotice('Testimonial deleted.'); await refresh();
    } catch (cause) { setError((cause as Error).message); } finally { setBusy(false); }
  }

  return <>
    {error && <p role="alert" className="cms-error">{error}</p>}
    {notice && <p role="status" className="cms-notice">{notice}</p>}
    {editing ? <form className="cms-card" onSubmit={save}>
      <div className="cms-actions"><h2>{item ? 'Edit' : 'New'} testimonial</h2><button type="button" disabled={busy} onClick={() => setEditing(null)}>Cancel</button></div>
      <fieldset disabled={busy} className="cms-fields">
        <label>Client name<input name="name" defaultValue={item?.name} required maxLength={255} /></label>
        <label>Client role or location<input name="role" defaultValue={item?.role} required maxLength={255} /></label>
        <label>Project<input name="project" defaultValue={item?.project} required maxLength={255} /></label>
        <label>Display order<input name="sort_order" type="number" min="0" max="1000000" defaultValue={item?.sort_order ?? (items.data?.length ?? 0) + 1} required /></label>
        <label className="cms-wide">Quote<textarea name="quote" defaultValue={item?.quote} required rows={6} maxLength={5000} /></label>
        <label className="cms-checkbox cms-wide"><input type="checkbox" name="published" defaultChecked={item?.published} />Publish on website</label>
        <button type="submit" className="cms-primary">{busy ? 'Saving…' : 'Save testimonial'}</button>
      </fieldset>
    </form> : <>
      <div className="cms-actions"><h2>Testimonials ({items.data?.length ?? 0})</h2><button className="cms-primary" disabled={busy} onClick={() => setEditing('new')}>+ Add testimonial</button></div>
      {items.isPending ? <p>Loading…</p> : items.isError ? <p role="alert">Could not load testimonials. <button onClick={() => items.refetch()}>Retry</button></p> : !items.data.length ? <div className="cms-card">No testimonials yet.</div> : <div className="cms-list">{items.data.map(entry => <article className="cms-row" key={entry.id}><div><h3>{entry.name}</h3><p>{entry.role} · {entry.project} · {entry.published ? 'Published' : 'Draft'}</p><p>{entry.quote}</p></div><div className="cms-actions"><button disabled={busy} onClick={() => setEditing(entry)}>Edit</button><button className="cms-delete" disabled={busy} onClick={() => remove(entry)}>Delete</button></div></article>)}</div>}
    </>}
  </>;
}
