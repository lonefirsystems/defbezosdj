import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-12">About</p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Def Bezos — Keagen Edwards"
                fill
                className="object-cover object-center"
              />
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c9a84c]/40 z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c9a84c]/40 z-10" />
            </div>
          </div>

          {/* Bio text */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f0ece4] mb-8 leading-tight">
              Keagen<br />Edwards
            </h2>

            <div className="space-y-5 text-[#f0ece4]/65 leading-relaxed text-base md:text-lg">
              <p>
                Def Bezos is Portland-based DJ and house music specialist Keagen
                Edwards, bringing high-energy, crowd-driven performances to corporate
                events, brand activations, and private entertainment.
              </p>
              <p>
                With main stage credits at Breakaway San Francisco and appearances at
                Shift Festival and Beat Farm, plus support slots for nationally touring
                artists including Odd Mob, Sidepiece, and Matroda, Def Bezos brings
                festival-caliber energy to every setting.
              </p>
              <p>
                He has delivered live performances for Amazon, Ring, Adidas, and EA
                Sports at events ranging from CES Las Vegas to executive retreats, and
                produced the official pregame hype mix for the Utah women's soccer team.
              </p>
              <p>
                A founding member of Secret Grove Collective and host of Portland's
                monthly The Pour Over club night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
