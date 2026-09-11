import NetworkCommitment from "@/components/network-commitment";
import logo from "@/assets/pearl-mark.svg";
import { Building2, Columns3, Construction, Settings, Zap, Calculator, Armchair, Sprout, Leaf, FireExtinguisher, Map, Scale, HardHat, Waves, ShieldCheck, Droplet, Sun, ArrowUpDown, UsersRound } from "lucide-react";
import type { CSSProperties } from "react";
import "./team.css";

const professionalConsultants = [
  "Chartered Architects",
  "Structural Engineers",
  "Civil Engineers",
  "Mechanical Engineers",
  "Electrical Engineers",
  "Quantity Surveyors",
  "Interior Designers",
  "Landscape Architects",
  "Environmental Consultants",
  "Fire & Safety Consultants",
  "Town Planners",
  "Legal Advisors",
] as const;

const constructionNetwork = [
  "CIDA-Registered Contractors",
  "MEP Contractors",
  "Steel Specialists",
  "Road Contractors",
  "Swimming Pool Specialists",
  "ICT & Security Contractors",
  "Waterproofing Specialists",
  "Solar Installers",
  "Lift & Escalator Specialists",
] as const;

const benefits = [
  {
    title: "ONE COORDINATED\nTEAM",
    text: "You work with one team that manages everything.",
    icon: "team",
  },
  {
    title: "TWO AGREEMENTS,\nYOUR PROTECTION",
    text: "Two contracts designed entirely to protect you.",
    icon: "shield",
  },
  {
    title: "COMPLETE TRANSPARENCY\n& ACCOUNTABILITY",
    text: "Clear processes, open reporting and defined responsibilities.",
    icon: "transparency",
  },
  {
    title: "DESIGN TO COMPLETION",
    text: "We manage your project from concept through to completion seamlessly.",
    icon: "target",
  },
  {
    title: "QUALITY, SAFETY\n& COMPLIANCE",
    text: "Our network upholds the highest standards in every aspect of delivery.",
    icon: "badge",
  },
] as const;

const iconMap: Record<string, JSX.Element> = {
  team: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="24" cy="22" r="8" />
      <path d="M14 46c2-6 7-10 14-10s12 4 14 10" />
      <circle cx="42" cy="22" r="6" />
      <path d="M36 42c1-5 5-8 9-8" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 14 48 20v12c0 9-6 17-16 22-10-5-16-13-16-22V20l16-6Z" />
      <path d="M24 32l5 5 11-13" />
    </svg>
  ),
  transparency: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 20h28v24H18z" />
      <path d="M24 26h16M24 32h16M24 38h10" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="32" cy="32" r="18" />
      <circle cx="32" cy="32" r="8" />
      <path d="M32 14v8M32 42v8M14 32h8M42 32h8" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 18 42 22v10c0 7-5 13-10 16-5-3-10-9-10-16V22l10-4Z" />
      <path d="M26 32l4 4 8-10" />
    </svg>
  ),
};

const consultantIcons = [Building2, Columns3, Construction, Settings, Zap, Calculator, Armchair, Sprout, Leaf, FireExtinguisher, Map, Scale];
const contractorIcons = [HardHat, Settings, Construction, Map, Waves, ShieldCheck, Droplet, Sun, ArrowUpDown];

export default function TeamPage() {
  return (
    <section className="network-page overflow-hidden bg-white pt-12 text-[#003763]">
      <div className="mx-auto max-w-[1280px] px-6">
        <h1 className="text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">Our Professional<br />Network</h1>
        <div className="mt-5 h-px max-w-[460px] bg-[#bfc0c4]"><div className="h-px w-40 bg-[#00b3e7]" /></div>
        <p className="mb-4 mt-5 text-lg font-light leading-relaxed">A strong network of trusted professionals and specialized contractors, working together seamlessly to deliver exceptional results.</p>

        <div className="network-diagram mx-auto max-w-[1100px]">
          <svg className="network-connectors" viewBox="0 0 1000 430" preserveAspectRatio="none" fill="none" stroke="#bfc0c4" strokeWidth="1" aria-hidden="true">
            {professionalConsultants.map((item, index) => {
              const y = 49 + index * 32;
              const x = 240 + index * 18;
              const bend = 445 + Math.max(0, index - 6) * 8;
              return <path key={item} d={`M${x} ${y}H${bend}V155H500`} />;
            })}
            {constructionNetwork.map((item, index) => {
              const y = 49 + index * 32;
              const x = 760 - index * 18;
              const bend = 555 - Math.max(0, index - 6) * 8;
              return <path key={item} d={`M${x} ${y}H${bend}V155H500`} />;
            })}
          </svg>

          <div className="network-center">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-[#bfc0c4] bg-white">
              <img src={logo} alt="Pearl Heritance" width={90} height={96} className="h-24 w-[90px]" />
              <p className="mt-2 text-center text-xs leading-tight text-black">Objective guidance<br />you make informed</p>
            </div>
          </div>

          <div className="network-group">
            <h2 className="network-label network-label-left"><UsersRound size={22} strokeWidth={1} aria-hidden="true" />Professional Consultants</h2>
            <ul className="network-list">
              {professionalConsultants.map((item, index) => {
                const Icon = consultantIcons[index];
                return <li key={item} className="network-node network-node-left" style={{ "--position": index } as CSSProperties}>
                  <span className="network-node-icon"><Icon size={21} strokeWidth={1} aria-hidden="true" /></span>
                  <span>{item}</span>
                </li>;
              })}
            </ul>
          </div>

          <div className="network-group">
            <h2 className="network-label network-label-right"><HardHat size={22} strokeWidth={1} aria-hidden="true" />Construction Network</h2>
            <ul className="network-list">
              {constructionNetwork.map((item, index) => {
                const Icon = contractorIcons[index];
                return <li key={item} className="network-node network-node-right" style={{ "--position": index } as CSSProperties}>
                  <span className="network-node-icon"><Icon size={21} strokeWidth={1} aria-hidden="true" /></span>
                  <span>{item}</span>
                </li>;
              })}
            </ul>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1100px] gap-6 border-t border-[#bfc0c4] pb-8 pt-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-[#bfc0c4]">
          {benefits.map(item => (
            <article key={item.title} className="px-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#bfc0c4] text-[#a8aaae]">{iconMap[item.icon]}</div>
              <h3 className="mb-2 whitespace-pre-line text-xs font-bold uppercase leading-tight text-[#303b46]">{item.title}</h3>
              <p className="text-xs leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
      <NetworkCommitment />
      <div className="bg-[#003763] px-6 py-4 text-sm text-white"><p className="mx-auto max-w-[1232px]">BUILDING TRUST. DELIVERING EXCELLENCE.</p></div>
    </section>
  );
}
