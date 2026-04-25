import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ['rgba(2,8,23,0)', 'rgba(2,8,23,0.95)']);
  const [open, setOpen] = useState(false);

  const links = ['Services', 'How It Works', 'About', 'Reviews', 'Contact'];

  return (
    <motion.nav
      style={{ backgroundColor: bg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-400 to-electric-600 flex items-center justify-center">
            <span className="text-white font-black text-sm">T</span>
          </div>
          <span className="font-bold text-white text-lg tracking-tight">Tyrooter <span className="text-electric-400">Plumbing</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g,'-')}`} className="text-slate-300 hover:text-electric-400 text-sm font-medium transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:5555555555" className="hidden sm:flex items-center gap-2 bg-electric-500 hover:bg-electric-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
            <Phone size={14} />
            (555) 555-5555
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy-900 border-t border-white/10 px-4 py-4 flex flex-col gap-4"
        >
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g,'-')}`} onClick={() => setOpen(false)} className="text-slate-300 text-sm font-medium">
              {l}
            </a>
          ))}
          <a href="tel:5555555555" className="flex items-center gap-2 bg-electric-500 text-white px-4 py-3 rounded-full text-sm font-semibold justify-center">
            <Phone size={14} /> (555) 555-5555
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
