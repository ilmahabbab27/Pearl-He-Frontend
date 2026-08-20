import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { company } from "@/data/company";

const title = "Contact | Pearl Heritance (Pvt) Ltd, Nawala & Nugegoda";
const description =
  "Contact Pearl Heritance for design, build and project management consultancy in Sri Lanka. Offices in Nawala and Nugegoda. Email info@pearlhe.com.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
    `Project inquiry from ${form.name || "website"}`,
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
  )}`;

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
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Full name
                </span>
                <input
                  required
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
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="mt-8 bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent"
            >
              Send Inquiry
            </button>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Opens your email client addressed to {company.email}
            </p>
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
