import { motion } from 'framer-motion';
import { Phone, Zap } from 'lucide-react';

export function EmergencyCTA() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="relative z-40"
      style={{
        background: 'linear-gradient(90deg, rgba(127,29,29,0.9) 0%, rgba(153,27,27,0.88) 100%)',
        borderBottom: '1px solid rgba(239,68,68,0.25)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-4 flex-wrap text-sm">
        <div className="flex items-center gap-2 text-red-300">
          <Zap size={13} className="animate-pulse" />
          <span className="font-semibold">24/7 Emergency Service Available</span>
        </div>
        <span className="text-red-400/50 hidden sm:block">|</span>
        <a
          href="tel:5555555555"
          className="flex items-center gap-1.5 text-white font-bold hover:text-red-200 transition-colors"
        >
          <Phone size={13} />
          (555) 555-5555
        </a>
        <span className="text-red-300/60 hidden md:block">
          Burst pipe? Flood? We're dispatching now.
        </span>
      </div>
    </motion.div>
  );
}
