import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/content';

type Message = { id: number; name: string; email: string; phone: string | null; message: string; is_read: boolean; created_at: string };
type Inbox = { messages: { data: Message[]; current_page: number; last_page: number; total: number }; unread: number };
export default function ContactMessages() {
  const [page, setPage] = useState(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const client = useQueryClient();
  const inbox = useQuery({ queryKey: ['contact-messages', page], queryFn: () => api<Inbox>(`admin/messages?page=${page}`), refetchInterval: 30000 });
  async function update(message: Message, remove = false) {
    if (remove && !window.confirm(`Delete the message from ${message.name}? This cannot be undone.`)) return;
    setBusy(true); setError('');
    try {
      await api(`admin/messages/${message.id}`, remove ? { method: 'DELETE' } : { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ is_read: !message.is_read }) });
      if (remove && inbox.data?.messages.data.length === 1 && page > 1) setPage(page - 1);
      await client.invalidateQueries({ queryKey: ['contact-messages'] });
    } catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  }
  return <section aria-labelledby="inbox-title">
    <div className="cms-actions"><h2 id="inbox-title">Contact messages {inbox.data && `(${inbox.data.unread} unread)`}</h2><button disabled={inbox.isFetching} onClick={() => inbox.refetch()}>Refresh</button></div>
    {error && <p role="alert" className="cms-error">{error}</p>}
    {inbox.isPending ? <p role="status">Loading messages...</p> : inbox.isError ? <p role="alert">Unable to load messages. Use Refresh to try again.</p> : !inbox.data.messages.data.length ? <div className="cms-card">No messages yet. Inquiries submitted through the contact form will appear here.</div> : <>
      <div className="cms-list">{inbox.data.messages.data.map(message => <article key={message.id} className="cms-card">
        <div className="cms-actions"><div><h3>{message.name} <span className="ml-2 text-xs font-normal">{message.is_read ? 'Read' : 'New'}</span></h3><p className="text-xs"><time dateTime={message.created_at}>{new Date(message.created_at).toLocaleString()}</time></p></div><div className="cms-actions"><button disabled={busy} onClick={() => update(message)}>Mark {message.is_read ? 'unread' : 'read'}</button><button disabled={busy} className="cms-delete" onClick={() => update(message, true)}>Delete</button></div></div>
        <div className="mb-4 flex flex-wrap gap-x-6 gap-y-2"><a href={`mailto:${message.email}`}>{message.email}</a>{message.phone && <span>{message.phone}</span>}</div>
        <p className="whitespace-pre-wrap break-words">{message.message}</p>
      </article>)}</div>
      <nav className="cms-actions mt-5" aria-label="Message pages"><button disabled={page <= 1 || busy} onClick={() => setPage(page - 1)}>Previous</button><span>Page {inbox.data.messages.current_page} of {inbox.data.messages.last_page} ({inbox.data.messages.total} messages)</span><button disabled={page >= inbox.data.messages.last_page || busy} onClick={() => setPage(page + 1)}>Next</button></nav>
    </>}
  </section>;
}
