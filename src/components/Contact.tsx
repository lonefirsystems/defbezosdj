export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#f0ece4] mb-6 leading-tight">
          Get In Touch
        </h2>

        <p className="text-[#f0ece4]/60 text-lg max-w-xl mb-16 leading-relaxed">
          Available for bookings in Portland and nationwide. Reach out to discuss your event.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {/* Email */}
          <div className="border border-[#2a2a2a] p-8 group hover:border-[#c9a84c]/30 transition-colors duration-300">
            <div className="text-[#c9a84c] mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-[#f0ece4]/40 text-xs tracking-widest uppercase mb-2">Email</p>
            {/* PLACEHOLDER: Replace href and display text with your actual email address */}
            <a
              href="mailto:PLACEHOLDER@email.com"
              className="text-[#f0ece4] text-sm hover:text-[#c9a84c] transition-colors duration-200 break-all"
            >
              PLACEHOLDER — your@email.com
            </a>
          </div>

          {/* Phone */}
          <div className="border border-[#2a2a2a] p-8 group hover:border-[#c9a84c]/30 transition-colors duration-300">
            <div className="text-[#c9a84c] mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-[#f0ece4]/40 text-xs tracking-widest uppercase mb-2">Phone</p>
            {/* PLACEHOLDER: Replace href and display text with your actual phone number */}
            <a
              href="tel:PLACEHOLDER"
              className="text-[#f0ece4] text-sm hover:text-[#c9a84c] transition-colors duration-200"
            >
              PLACEHOLDER — (503) 000-0000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
