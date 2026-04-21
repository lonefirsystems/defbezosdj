"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Hero background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Def Bezos"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6 opacity-90">
          Portland, OR &nbsp;·&nbsp; Available Nationwide
        </p>
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[#f0ece4] leading-none mb-6 whitespace-nowrap">
          DEF BEZOS
        </h1>
        <p className="text-[#f0ece4]/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Every set starts with a conversation. Your vision, my decks.
        </p>
        <button
          onClick={scrollToContact}
          className="inline-block px-10 py-4 border border-white text-white text-sm tracking-[0.2em] uppercase bg-gray-500/20 hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 font-semibold"
        >
          Get In Touch
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-widest uppercase text-[#f0ece4]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c9a84c] to-transparent" />
      </div>
    </section>
  );
}
