import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0.3, 0.85]);
  const [open, setOpen] = useState(false);

  const links = ['Services', 'How It Works', 'About', 'Reviews', 'Contact'];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        className="w-full max-w-5xl"
        style={{
          borderRadius: '1rem',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          backgroundColor: `rgba(10,22,40,${bgOpacity.get()})`,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        <motion.div
          style={{ backgroundColor: `rgba(10,22,40,${bgOpacity})` as unknown as string }}
          className="rounded-2xl px-6 h-14 flex items-center justify-between"
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-400 to-electric-600 flex items-center justify-center shadow-lg shadow-electric-500/30">
              <span className="text-white font-black text-sm">T</span>
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              Tyrooter <span className="text-electric-400">Plumbing</span>
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, '-')}`}
                className="text-slate-300 hover:text-electric-400 text-sm font-medium transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:5555555555"
              className="hidden sm:flex items-center gap-2 bg-electric-500 hover:bg-electric-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/30"
            >
              <Phone size={13} />
              (555) 555-5555
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile drawer */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-3 rounded-b-2xl"
            style={{ backgroundColor: 'rgba(10,22,40,0.95)' }}
          >
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, '-')}`}
                onClick={() => setOpen(false)}
                className="text-slate-300 text-sm font-medium py-1 hover:text-electric-400 transition-colors"
              >
                {l}
              </a>
            ))}
            <a
              href="tel:5555555555"
              className="flex items-center justify-center gap-2 bg-electric-500 text-white px-4 py-3 rounded-full text-sm font-bold mt-1"
            >
              <Phone size={14} /> (555) 555-5555
            </a>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
}
