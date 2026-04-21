const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Corporate Events & Galas",
    description:
      "Polished, professional sets that elevate company milestones, award ceremonies, and black-tie galas — reading the room from ambient background to dance-floor energy.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Brand Activations & Product Launches",
    description:
      "Custom-curated music experiences that reinforce your brand identity and keep attendees engaged from first impression to final goodbye.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Private Parties & Executive Retreats",
    description:
      "Discreet, high-caliber entertainment for intimate gatherings, milestone celebrations, and executive hospitality events — tailored to your guest list.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: "Festival & Live Entertainment",
    description:
      "Main-stage-ready performance with festival-caliber production sensibility — delivering high-energy sets that command large crowds and open-air venues.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Livestream & Virtual Events",
    description:
      "Broadcast-ready DJ sets optimized for virtual audiences, hybrid events, and branded livestream experiences on any platform.",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-12 pb-12 md:pt-16 md:pb-16 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Services</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#f0ece4] mb-16 max-w-xl leading-tight">
          What I Bring<br />to Your Event
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2a2a]">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#0d0d0d] p-8 group hover:bg-[#111111] transition-colors duration-300"
            >
              <div className="text-[#c9a84c] mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-[#f0ece4] font-semibold text-base tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-[#f0ece4]/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* Spacer to fill last grid slot on lg screens */}
          <div className="bg-[#0d0d0d] p-8 hidden lg:flex items-center justify-center">
            <p className="text-[#c9a84c]/20 text-xs tracking-widest uppercase text-center leading-relaxed">
              Corporate &amp; Entertainment<br />Portland · Nationwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
