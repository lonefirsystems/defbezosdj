"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Media", href: "#media" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#2a2a2a]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-[#c9a84c] font-bold tracking-[0.2em] text-lg uppercase"
        >
          Def Bezos
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href)}
                className="text-sm tracking-widest uppercase text-[#f0ece4]/70 hover:text-[#c9a84c] transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#f0ece4] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-6 h-px bg-[#f0ece4] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#f0ece4] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-b border-[#2a2a2a] py-4">
          <ul className="flex flex-col items-center gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLink(link.href)}
                  className="text-sm tracking-widest uppercase text-[#f0ece4]/70 hover:text-[#c9a84c] transition-colors duration-200 cursor-pointer py-2"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
