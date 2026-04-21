import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#0a0a0a]">
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
                Def Bezos is the performance alias of Keagen Edwards, a Portland-based DJ and house music specialist whose sets bring professional, curated sonic energy to corporate events, brand activations, and private entertainment.
              </p>
              <p>
                On the festival circuit, Def Bezos has performed on the main stage at Breakaway San Francisco, alongside appearances at Shift Festival and Beat Farm. His club work spans support slots for nationally touring acts including Odd Mob, Sidepiece, Matroda, George Smeddles, and Zingara.
              </p>
              <p>
                Beyond the dance floor, Def Bezos has brought that same energy to some of the world&apos;s most recognizable brands. He has headlined corporate events for Ring at CES in Las Vegas, performed at Hiya&apos;s executive retreat at Semiahmoo Resort, and provided live DJ sets for Adidas and EA Sports via livestream — demonstrating a rare ability to translate club-level performance energy into branded entertainment environments that demand professionalism and adaptability. His work extends into sports entertainment as well, having produced the official pregame hype mix for the Utah women&apos;s soccer team.
              </p>
              <p>
                A committed figure in Portland&apos;s house music community, Keagen is a founding member of Secret Grove Collective, a local DJ collective dedicated to cultivating the city&apos;s underground dance music scene. He also curates and hosts The Pour Over, a monthly club night focused on showcasing local house music talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
