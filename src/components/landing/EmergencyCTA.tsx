import { Phone, Zap } from 'lucide-react';

export function EmergencyCTA() {
  return (
    <div
      className="relative z-40 border-b"
      style={{
        background: 'linear-gradient(90deg, #7f1d1d 0%, #991b1b 50%, #7f1d1d 100%)',
        borderColor: 'rgba(239,68,68,0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-center gap-3 sm:gap-5">
        <div className="flex items-center gap-1.5">
          <Zap size={12} className="text-red-300 shrink-0 animate-pulse" />
          <span className="text-red-100 text-xs font-semibold">24/7 Emergency Service</span>
        </div>
        <div className="h-3 w-px bg-red-700/60 hidden sm:block" />
        <a
          href="tel:5555555555"
          className="flex items-center gap-1.5 text-white font-bold text-xs hover:text-red-200 transition-colors"
        >
          <Phone size={11} strokeWidth={2.5} />
          (555) 555-5555
        </a>
        <div className="h-3 w-px bg-red-700/60 hidden md:block" />
        <span className="hidden md:block text-red-300/60 text-xs">
          Burst pipe? Flood? We dispatch immediately.
        </span>
      </div>
    </div>
  );
}
