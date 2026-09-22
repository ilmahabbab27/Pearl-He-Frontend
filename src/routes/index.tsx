import { useSiteSettings, useTestimonials } from '@/lib/content';
import ProjectDeliveryProcess from "@/components/project-delivery-process";
import WhatWeDo from "@/components/what-we-do";
import WhyChooseSection from "@/components/why-choose-section";
import { Link } from "react-router-dom";
import { MessagesSquare, Monitor, ClipboardList, UsersRound, Construction, Building2, BadgeCheck, CircleDollarSign, Clock3, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";
import { company, values } from "@/data/company";



// Enable when the home page insights section is ready to return.
const showLatestInsights = false;

export default function Home() {
  const { data: settings } = useSiteSettings();
  const testimonials = useTestimonials();
  return (
    <>
      <section className="relative overflow-hidden border-b border-border px-6 pt-24 pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="animate-fade-up lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-tight text-accent">
              <span className="h-px w-8 bg-accent" />
              Design · Build · Project Management
            </div>
            <h1 className="mb-8 text-5xl leading-[0.95] font-black tracking-tight text-balance md:text-7xl">
              Bridging Vision and <span className="text-accent italic">Development.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Integrated solutions for the built environment. One client, one coordinated team, one
              point of responsibility — from first consultation to final handover.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground ring-1 ring-primary transition-colors hover:bg-transparent hover:text-foreground"
              >
                View Projects
              </Link>
              <Link
                to="/services"
                className="border border-accent bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-accent hover:text-white"
              >
                Our Expertise
              </Link>
            </div>
          </div>
          <div className="animate-fade-up lg:col-span-5">
            <img
              src={settings?.hero_image || heroImage}
              alt={settings?.hero_alt || "Contemporary Sri Lankan residence designed and delivered by Pearl Heritance"}
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
            <div className="mt-6 border-l border-accent/40 pl-6">
              <div className="mb-1 font-mono text-[11px] text-accent">[EXPERIENCE]</div>
              <div className="text-2xl font-bold tracking-tight">20+ Years</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                In Sri Lankan construction & property
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { k: "Model", v: "Consultant-Led" },
            { k: "Network", v: "CIDA Registered" },
            { k: "Delivery", v: "Design & Build" },
            { k: "Offices", v: "Nawala & Nugegoda" },
          ].map((item) => (
            <div key={item.k} className="p-8 text-center">
              <div className="font-mono text-xs text-accent">{item.k.toUpperCase()}</div>
              <div className="font-bold uppercase tracking-tight">{item.v}</div>
            </div>
          ))}
        </div>
      </section>

      <WhatWeDo />

      <section className="border-y border-border bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-primary md:text-5xl">Our Approach</h2>
          <div className="mt-5 h-px max-w-md bg-border"><div className="h-px w-36 bg-accent" /></div>
          <p className="mt-8 text-2xl font-medium leading-relaxed">
            <span className="text-accent">One</span> Client. One Coordinated Team.<br />
            <span className="text-accent">One</span> Point of Responsibility.
          </p>
          <p className="mt-3 max-w-6xl text-lg leading-relaxed text-muted-foreground">
            At Pearl Heritance, every project is managed through a single coordinated team, ensuring seamless communication and professional oversight from concept to completion.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {[
              { title: "Consult", icon: MessagesSquare, text: "Understanding your vision, requirements and objectives through in-depth consultation." },
              { title: "Design", icon: Monitor, text: "Creating innovative, functional and sustainable design solutions tailored to your needs." },
              { title: "Plan", icon: ClipboardList, text: "Detailed planning, budgeting and resource allocation for efficient project execution." },
              { title: "Manage", icon: UsersRound, text: "Coordinating teams, monitoring progress and ensuring quality and compliance at every stage." },
              { title: "Build", icon: Construction, text: "Executing construction with precision, safety and quality to bring the vision to life." },
              { title: "Handover", icon: Building2, text: "Delivering a completed project with documentation, training and ongoing support." },
            ].map((item, index) => (
              <article key={item.title} className="relative">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-border text-muted-foreground">
                  <item.icon className="h-10 w-10" strokeWidth={1.2} aria-hidden="true" />
                </div>
                {index < 5 && <ArrowRight className="absolute right-0 top-7 hidden h-6 w-6 text-accent lg:block" strokeWidth={1} aria-hidden="true" />}
                <div className="text-2xl font-light">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mb-2 text-lg font-bold uppercase">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 border-t border-border pt-6">
            <h3 className="mb-7 text-center text-xl font-medium">Built On Three Strong Pillars</h3>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "Quality", icon: BadgeCheck, text: "We are committed to the highest standards of quality in design, construction and service delivery." },
                { title: "Cost", icon: CircleDollarSign, text: "We deliver value through efficient planning, cost control and transparent management." },
                { title: "Time", icon: Clock3, text: "We respect time by ensuring timely delivery through effective planning and execution." },
              ].map((item) => (
                <article key={item.title} className="flex items-start gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground">
                    <item.icon className="h-10 w-10" strokeWidth={1.2} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-medium uppercase">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectDeliveryProcess headingLevel="h2" />

      <WhyChooseSection />

      <section className="border-y border-border bg-card px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              03 // CORE VALUES
            </div>
            <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter">
              Built on principles that protect your investment.
            </h2>
            <div className="flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="border border-border bg-background px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
          <div className="border border-border bg-background p-8">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Commitment
            </div>
            <p className="text-lg leading-relaxed text-foreground/90">
              We work closely with clients, consultants and contractors to deliver spaces that are not
              only visually compelling, but also practical, efficient and durable.
            </p>
          </div>
        </div>
      </section>





      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Client Feedback</h2>
            <span className="font-mono text-[10px] text-muted-foreground">
              04 // TESTIMONIALS
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.isPending && <p>Loading client feedback…</p>}
            {testimonials.isError && <p role="alert">Could not load client feedback. <button onClick={() => testimonials.refetch()}>Retry</button></p>}
            {testimonials.data?.length === 0 && <p>No client feedback is published yet.</p>}
            {testimonials.data?.slice(0, 3).map((item) => (
              <blockquote key={item.id} className="border border-border bg-card p-8">
                <div className="mb-6 inline-flex gap-1 bg-transparent px-1 py-1">
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                  <span className="inline-block text-[#0b5ea8] drop-shadow-[0_0_0_#d4af37]">★</span>
                </div>
                <p className="mb-8 text-base leading-relaxed text-foreground/80">“{item.quote}”</p>
                <div className="border-t border-border pt-4">
                  <div className="font-bold uppercase tracking-tight">{item.name}</div>
                  <div className="font-mono text-[10px] uppercase text-muted-foreground">{item.role}</div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Project Focus</h2>
            <span className="font-mono text-[10px] text-muted-foreground">
              05 // SPECIALTY AREAS
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Residential Living",
                body: "Homes designed for comfort, privacy, natural light and everyday practicality.",
              },
              {
                title: "Hospitality Spaces",
                body: "Guest-focused environments that feel authentic, memorable and commercially strong.",
              },
              {
                title: "Commercial Developments",
                body: "Efficient, adaptable spaces that support business performance and growth.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border bg-background p-8">
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Featured
                </div>
                <h3 className="mb-3 text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showLatestInsights && (
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Latest Insights</h2>
            <Link to="/blogs" className="border-b border-accent pb-1 font-mono text-[10px] text-accent">
              VIEW ALL ARTICLES
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "How to plan a successful residential build",
                body: "A practical look at feasibility, scope and decision-making before construction begins.",
              },
              {
                title: "Design choices that improve long-term value",
                body: "Smart material, layout and circulation decisions that work for years to come.",
              },
              {
                title: "The role of project management in complex builds",
                body: "Why coordination, timelines and cost control matter just as much as design quality.",
              },
            ].map((item) => (
              <article key={item.title} className="border border-border bg-card p-8">
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Insight
                </div>
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <Link to="/blogs" className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      )}

      <section className="border-t border-border bg-card px-6 py-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              {company.promise}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Tell us about your project — we will advise on feasibility, cost and programme.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-accent px-8 py-4 text-xs font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-primary"
          >
            Start a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
