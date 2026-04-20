// PLACEHOLDER: Replace these dummy testimonials with real client quotes.
// Each testimonial needs: quote (string), name (string), title (string)
const testimonials = [
  {
    quote:
      "PLACEHOLDER — Replace with actual client testimonial. Example: Working with Def Bezos transformed our product launch into an unforgettable experience. The energy was exactly right — professional, high-caliber, and perfectly matched to our brand.",
    name: "Client Name",
    title: "Event Type — Company or Organization",
  },
  {
    quote:
      "PLACEHOLDER — Replace with actual client testimonial. Example: We have hired a lot of DJs for corporate events and none of them have read the room the way Keagen does. Guests were still talking about it weeks later.",
    name: "Client Name",
    title: "Event Type — Company or Organization",
  },
  {
    quote:
      "PLACEHOLDER — Replace with actual client testimonial. Example: Def Bezos headlined our annual gala and delivered exactly what we needed — polished, energetic, and completely professional from load-in to close.",
    name: "Client Name",
    title: "Event Type — Company or Organization",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#f0ece4] mb-16 leading-tight">
          What Clients Say
        </h2>

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
