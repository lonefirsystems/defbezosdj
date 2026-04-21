"use client";

import { useState } from "react";
import Image from "next/image";

type Photo = { src: string; alt: string; imgClassName?: string } | { src: null; label: string };

// PLACEHOLDER: Add logo files to /public/logos/ and set src for each entry below
const logos: { name: string; src: string | null; className?: string; width?: number; height?: number }[] = [
  { name: "Adidas",        src: "/logos/adidas.png", className: "invert" },
  { name: "EA Sports",     src: "/logos/ea-sports.png", className: "invert" },
  { name: "Utah Athletics", src: "/logos/utah-athletics.jpg" },
  { name: "Ring",          src: "/logos/ring-new.png", className: "invert" },
  { name: "Secret Grove",  src: "/logos/secret-grove.png", width: 240, height: 80 },
  { name: "Breakaway SF",  src: "/logos/breakaway-sf.jpg", className: "invert" },
  { name: "Shift Festival", src: "/logos/shift-festival.png", width: 168, height: 56 },
  { name: "Beat Farm",     src: "/logos/beat-farm.png", className: "invert" },
];

// Add real photos here as you provide them. Placeholders fill the remaining slots.
// PLACEHOLDER: photos 3–6 below — replace { src: null } entries with { src: "/gallery/photoN.jpg", alt: "..." }
const photos: Photo[] = [
  { src: "/gallery/photo1.jpg", alt: "Def Bezos performing live" },
  { src: "/gallery/photo2.jpg", alt: "Def Bezos DJ set" },
  { src: "/gallery/photo3.jpg", alt: "Def Bezos performing live", imgClassName: "object-contain scale-125" },
  { src: "/gallery/photo4.jpg", alt: "Def Bezos performing live" },
  { src: "/gallery/photo5.jpg", alt: "Def Bezos performing live" },
  { src: "/gallery/photo6.jpg", alt: "Def Bezos performing live" },
];

export default function Media() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const activePhoto = photos[activeIndex];

  return (
    <section id="media" className="pt-12 pb-12 md:pt-16 md:pb-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Media</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#f0ece4] mb-16 leading-tight">
          Photos &amp; Video
        </h2>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative aspect-square border border-[#2a2a2a] overflow-hidden focus:outline-none focus:ring-1 focus:ring-[#c9a84c] ${"imgClassName" in photo && photo.src ? "bg-black" : "bg-[#111111]"}`}
              aria-label={photo.src ? photo.alt : ("label" in photo ? photo.label : `Photo ${index + 1}`)}
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`${"imgClassName" in photo && photo.imgClassName ? photo.imgClassName : "object-cover group-hover:scale-105 transition-transform duration-500"}`}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <svg className="w-8 h-8 text-[#c9a84c]/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#c9a84c]/30 text-[10px] tracking-widest uppercase px-2 text-center">
                    {"label" in photo ? photo.label : `Photo ${index + 1}`}
                  </p>
                </div>
              )}
              <div className="absolute inset-0 bg-[#c9a84c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#c9a84c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#c9a84c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* Corporate logos */}
        <div>
          <p className="text-[#f0ece4]/30 text-xs tracking-[0.4em] uppercase mb-8">Performed For</p>
          {/* PLACEHOLDER: Add logo image files to /public/logos/ and update the logos array above with { name, src } entries */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#2a2a2a]">
            {logos.map(({ name, src, className, width = 120, height = 40 }) => (
              <div
                key={name}
                className="bg-[#0a0a0a] flex items-center justify-center py-8 px-6 group hover:bg-[#111111] transition-colors duration-200"
              >
                {src ? (
                  <Image
                    src={src}
                    alt={name}
                    width={width}
                    height={height}
                    className={`object-contain opacity-30 group-hover:opacity-60 transition-opacity duration-200${className ? ` ${className}` : ""}`}
                  />
                ) : (
                  <span className="text-[#f0ece4]/25 group-hover:text-[#c9a84c]/50 text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-200 text-center">
                    {name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-[#f0ece4]/60 hover:text-[#c9a84c] transition-colors"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative bg-[#111111] border border-[#2a2a2a] flex items-center justify-center overflow-hidden"
            style={{ width: "min(90vw, 900px)", height: "min(80vh, 700px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {activePhoto.src ? (
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                className="object-contain"
              />
            ) : (
              <p className="text-[#c9a84c]/40 text-xs tracking-widest uppercase">
                {"label" in activePhoto ? activePhoto.label : `Photo ${activeIndex + 1}`} (lightbox view)
              </p>
            )}
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f0ece4]/60 hover:text-[#c9a84c] transition-colors"
            onClick={(e) => { e.stopPropagation(); setActiveIndex((activeIndex - 1 + photos.length) % photos.length); }}
            aria-label="Previous photo"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f0ece4]/60 hover:text-[#c9a84c] transition-colors"
            onClick={(e) => { e.stopPropagation(); setActiveIndex((activeIndex + 1) % photos.length); }}
            aria-label="Next photo"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 text-[#f0ece4]/30 text-xs tracking-widest uppercase">
            {activeIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
}
