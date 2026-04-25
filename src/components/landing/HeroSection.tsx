import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Calendar, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import { ASSETS } from '../../config/plumbingAssets';

const CARD_STYLE = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  boxShadow: '0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
} as const;

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY       = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const textY     = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const opacity   = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#020817' }}
    >
      {/* Photo background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={ASSETS.hero}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.28 }}
          fetchPriority="high"
        />
      </motion.div>

      {/* Layered overlays */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to right, rgba(2,8,23,0.98) 0%, rgba(2,8,23,0.88) 55%, rgba(2,8,23,0.60) 100%)',
      }} />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(2,8,23,0.4) 0%, transparent 30%, transparent 70%, rgba(2,8,23,0.9) 100%)',
      }} />

      {/* Blue glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)' }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* ── Left panel ─────────────────────────────────── */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-electric-400 text-sm font-semibold mb-7"
              style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.25)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
              Denver's Premier Plumbing Specialists
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="font-black text-white leading-[1.04] mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}
            >
              Your pipes are
              <span className="block gradient-text">working hard.</span>
              <span className="block text-slate-300 font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}>
                Until they're not.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.5 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mb-9"
            >
              From hidden leaks to burst pipes — Tyrooter detects, diagnoses, and repairs before small problems become catastrophic ones. Same-day service available.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="tel:5555555555"
                className="flex items-center justify-center gap-2.5 bg-electric-500 hover:bg-electric-600 active:bg-electric-700 text-white px-7 py-4 rounded-2xl text-base font-bold transition-all duration-200 hover:shadow-xl hover:shadow-electric-500/25 hover:scale-[1.02]"
              >
                <Phone size={18} strokeWidth={2.5} />
                Call Now — (555) 555-5555
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2.5 text-white px-7 py-4 rounded-2xl text-base font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Calendar size={18} />
                Schedule Service
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.62, duration: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Shield, text: 'Licensed & Insured' },
                { icon: Clock,  text: '24/7 Emergency' },
                { icon: Star,   text: '4.9★ (500+ Reviews)' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon size={14} className="text-electric-400" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right panel — Emergency widget ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl p-7 sm:p-8" style={CARD_STYLE}>
              {/* Status */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="relative shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
                </div>
                <span className="text-green-400 font-semibold text-sm">Technicians Available Now</span>
              </div>

              <h3 className="text-white text-xl font-bold mb-2">Emergency Dispatch</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Licensed plumbers on standby across Denver. Average arrival under 60 minutes, any time of day.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {[
                  { value: '< 60 min', label: 'Avg. Response' },
                  { value: '24 / 7',   label: 'Availability' },
                  { value: 'Licensed', label: '& Insured'    },
                  { value: 'Upfront',  label: 'Pricing'      },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-xl p-3 text-center"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div className="text-electric-400 font-bold text-sm">{value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              <a
                href="tel:5555555555"
                className="flex items-center justify-center gap-2.5 w-full bg-electric-500 hover:bg-electric-600 text-white py-4 rounded-2xl font-bold text-[15px] transition-all duration-200 hover:shadow-lg hover:shadow-electric-500/25 mb-3"
              >
                <Phone size={17} strokeWidth={2.5} />
                Call for Emergency Service
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center text-slate-400 hover:text-electric-400 text-sm transition-colors py-1"
              >
                Or schedule non-emergency online →
              </a>

              {/* Certs */}
              <div
                className="mt-5 pt-5 flex flex-wrap gap-2"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                {['State Licensed', 'BBB A+', 'EPA Certified'].map(cert => (
                  <div
                    key={cert}
                    className="flex items-center gap-1.5 text-xs text-slate-400 rounded-full px-2.5 py-1"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <CheckCircle size={10} className="text-green-400" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs z-10 select-none"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <div className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
          <motion.div
            className="w-1 h-2 rounded-full bg-electric-400"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
