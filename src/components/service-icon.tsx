const shapes = {
  design: <><path d="M3 3h18v18H3z" /><path d="M7 7h10v10H7zM7 12h5V7M12 12v5" fill="none" stroke="white" strokeWidth="1.4" /><path d="m15 19 5-5 2 2-5 5-3 1z" stroke="white" strokeWidth="1" /></>,
  "design-build": <><path d="m2 11 10-9 10 9h-3v11H5V11z" /><path d="m9 10 6 7m0-7-6 7" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" /><path d="m13 8 4 3-2 2-4-3z" fill="white" /></>,
  consultancy: <><path d="M2 2h15v10H9l-4 4v-4H2z" /><path d="M5 5h9M5 8h6" stroke="white" strokeWidth="1.4" /><circle cx="17" cy="15" r="3" /><path d="M11 23v-2a6 6 0 0 1 12 0v2z" /></>,
  project: <><rect x="4" y="3" width="17" height="20" rx="2" /><rect x="8" y="1" width="9" height="5" rx="1" stroke="white" strokeWidth="1" /><path d="m7 10 1 1 2-2m-3 6 1 1 2-2m-3 6 1 1 2-2M13 10h5M13 15h5M13 20h5" stroke="white" strokeWidth="1.3" fill="none" /></>,
  construction: <><path d="M3 16v-3a9 9 0 0 1 18 0v3zM1 17h22v4H1z" /><path d="M10 4v10h4V4M6 9v5m12-5v5" fill="none" stroke="white" strokeWidth="1.5" /></>,
  development: <><path d="M2 9h7v14H2zM10 2h8v21h-8zM19 12h4v11h-4z" /><path d="M4 12h3m-3 4h3m-3 4h3M12 6h4m-4 4h4m-4 4h4m-4 4h4M20 16h2m-2 4h2" stroke="white" strokeWidth="1.3" /></>,
  property: <><path d="m1 10 9-8 9 8h-3v11H4V10z" /><path d="M8 13h4v8H8z" fill="white" /><circle cx="18" cy="15" r="4" stroke="white" strokeWidth="1" /><circle cx="18" cy="15" r="1.3" fill="white" /><path d="M17 18h3v5h-3zM19 21h3v2h-3z" /></>,
  support: <><circle cx="12" cy="11" r="10" /><ellipse cx="12" cy="11" rx="4" ry="9" fill="none" stroke="white" strokeWidth="1.2" /><path d="M3 7h18M3 14h18" stroke="white" strokeWidth="1.2" /><path d="M14 15h9v7h-3l-3 2v-2h-3z" stroke="white" strokeWidth="1" /></>,
};

export default function ServiceIcon({ name }: { name: keyof typeof shapes }) {
  return <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor" aria-hidden="true">{shapes[name]}</svg>;
}
