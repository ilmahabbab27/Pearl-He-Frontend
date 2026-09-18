import { api } from '@/lib/content';
import { useState } from "react";
import { company } from "@/data/company";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true); setError(''); setSuccess('');
    try {
      const result = await api<{message: string}>('contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      setSuccess(result.message);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) { setError((error as Error).message); }
    finally { setBusy(false); }
  }

  return (
    <>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            05 // Contact
          </div>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-balance md:text-6xl">
            Let's talk about your project.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Share a few details and one of our consultants will respond with next steps on
            feasibility, cost and programme.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
          <form
            className="lg:col-span-7"
            onSubmit={submit}
          >
            <fieldset disabled={busy}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Full name
                </span>
                <input
                  required
                  maxLength={255}
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  maxLength={255}
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-accent"
                />
              </label>
            </div>
            <label className="mt-6 block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Phone
              </span>
              <input
                type="tel"
                maxLength={50}
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </label>
            <label className="mt-6 block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Project details
              </span>
              <textarea
                required
                rows={6}
                maxLength={10000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="mt-8 bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent"
            >
              {busy ? 'Sending...' : 'Send Inquiry'}
            </button>
            </fieldset>
            {success && <p role="status" className="mt-4 text-sm text-green-700">{success}</p>}
            {error && <p role="alert" className="mt-4 text-sm text-red-700">{error} Your message has not been sent. Please try again.</p>}
          </form>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-px bg-border ring-1 ring-border">
              {company.offices.map((office) => (
                <div key={office.label} className="bg-card p-8">
                  <h2 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
                    {office.label}
                  </h2>
                  <address className="text-sm leading-relaxed not-italic">
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                    <a
                      href={`tel:${office.phoneHref}`}
                      className="mt-4 block font-bold hover:text-accent"
                    >
                      {office.phone}
                    </a>
                  </address>
                </div>
              ))}
              <div className="bg-card p-8">
                <h2 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
                  Email
                </h2>
                <a href={`mailto:${company.email}`} className="font-bold hover:text-accent">
                  {company.email}
                </a>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Business Reg. No. {company.regNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
