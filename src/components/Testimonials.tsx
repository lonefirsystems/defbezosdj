// PLACEHOLDER: Replace these dummy testimonials with real client quotes.
// Each testimonial needs: quote (string), name (string), title (string)
const testimonials = [
  {
    quote:
      "Having Keagen play at our CES activation helped take it from an ordinary corporate booth to an award-winning experience [#2 Booth at CES]. The energy was exactly right: curated, professional, and perfectly matched what our brand was going for.",
    name: "Tim Jackowski",
    title: "Brand Strategy Director — Ring",
  },
  {
    quote:
      "Loved working with Def, he was a total pro. Professional, prepared, collaborative, fun, and great energy all around. His understanding of the Breakaway audience and ability to translate that into an engaging live set made him a standout to work with.",
    name: "Mika Sears",
    title: "Vice President Marketing & Media — Breakaway",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-16 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-white text-3xl md:text-4xl font-bold tracking-wide uppercase mb-12">Testimonials</p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] border border-[#2a2a2a] p-8 relative group hover:border-[#c9a84c]/30 transition-colors duration-300"
            >
              {/* Large quote mark */}
              <div className="text-[#c9a84c]/15 text-8xl font-serif leading-none absolute top-4 left-6 pointer-events-none select-none">
                &ldquo;
              </div>

              <blockquote className="relative z-10 text-[#f0ece4]/60 text-sm leading-relaxed mb-8 pt-6 italic">
                {t.quote}
              </blockquote>

              <div className="border-t border-[#2a2a2a] pt-5">
                <p className="text-[#f0ece4] text-sm font-semibold tracking-wide">
                  {t.name}
                </p>
                <p className="text-[#c9a84c]/60 text-xs tracking-widest uppercase mt-1">
                  {t.title}
                </p>
              </div>

              {/* Bottom corner accent */}
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#c9a84c]/0 group-hover:border-[#c9a84c]/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
