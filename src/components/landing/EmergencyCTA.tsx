import { motion } from 'framer-motion';
import { Phone, Zap } from 'lucide-react';

export function EmergencyCTA() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-gradient-to-r from-red-900/90 to-red-800/90 border-b border-red-500/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2 text-red-300">
          <Zap size={14} className="animate-pulse" />
          <span className="font-semibold">24/7 Emergency Service Available</span>
        </div>
        <span className="text-red-400/60 hidden sm:block">|</span>
        <a href="tel:5555555555" className="flex items-center gap-1.5 text-white font-bold hover:text-red-200 transition-colors">
          <Phone size={13} />
          (555) 555-5555
        </a>
        <span className="text-red-300/60 hidden md:block">Burst pipe? Flood? We're dispatching now.</span>
      </div>
    </motion.div>
  );
}
