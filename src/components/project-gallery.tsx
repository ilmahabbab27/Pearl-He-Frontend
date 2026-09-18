import { useState } from 'react';

export default function ProjectGallery({ images, alt }: { images: string[]; alt: string }) {
  const [selected, setSelected] = useState(0);
  const active = Math.min(selected, images.length - 1);
  return <div className="mb-12" aria-label="Project gallery">
    <img src={images[active]} alt={active === 0 ? alt : `${alt} — view ${active + 1}`} className="aspect-[16/9] w-full object-contain bg-slate-50" />
    {images.length > 1 && <><div className="mt-3 grid grid-cols-5 gap-2 sm:gap-4">
      {images.map((image, index) => <button key={image} type="button" onClick={() => setSelected(index)} aria-label={`Show project image ${index + 1}`} aria-pressed={active === index} className={`overflow-hidden border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${active === index ? 'border-accent' : 'border-transparent'}`}>
        <img src={image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
      </button>)}
    </div><p className="mt-2 text-sm text-muted-foreground" aria-live="polite">Image {active + 1} of {images.length}</p></>}
  </div>;
}
