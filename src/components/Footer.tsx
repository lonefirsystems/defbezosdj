export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Wordmark */}
        <p className="text-[#c9a84c] font-bold tracking-[0.2em] text-sm uppercase">
          Def Bezos
        </p>

{/* Copyright */}
        <p className="text-[#f0ece4]/30 text-xs tracking-wide">
          © 2026 Def Bezos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
