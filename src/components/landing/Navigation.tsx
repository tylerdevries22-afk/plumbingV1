import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.92]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.12]);
  const navBg = useMotionTemplate`rgba(8,15,30,${bgOpacity})`;
  const navBorder = useMotionTemplate`rgba(255,255,255,${borderOpacity})`;
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Services',    href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reviews',     href: '#reviews' },
    { label: 'Contact',     href: '#contact' },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        style={{
          backgroundColor: navBg,
          borderColor: navBorder,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '16px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
        }}
        className="w-full max-w-5xl overflow-hidden"
      >
        {/* Main bar */}
        <div className="px-5 h-[58px] flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-electric-400 to-electric-600 flex items-center justify-center shadow-lg shadow-electric-500/30">
              <span className="text-white font-black text-sm leading-none">T</span>
            </div>
            <span className="font-bold text-white text-[15px] tracking-tight">
              Tyrooter <span className="text-electric-400">Plumbing</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="tel:5555555555"
              className="hidden sm:flex items-center gap-2 bg-electric-500 hover:bg-electric-600 active:bg-electric-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-150 shadow-lg shadow-electric-500/20"
            >
              <Phone size={13} strokeWidth={2.5} />
              (555) 555-5555
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.07] hover:bg-white/[0.12] text-white transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden md:hidden"
            >
              <div
                className="px-5 pb-5 pt-3 flex flex-col gap-1 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(8,15,30,0.97)' }}
              >
                {links.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-slate-300 hover:text-white text-[15px] font-medium py-2.5 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="tel:5555555555"
                  className="flex items-center justify-center gap-2 bg-electric-500 text-white px-4 py-3.5 rounded-xl text-sm font-bold mt-2 shadow-lg shadow-electric-500/20"
                >
                  <Phone size={15} strokeWidth={2.5} />
                  Call Now — (555) 555-5555
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
