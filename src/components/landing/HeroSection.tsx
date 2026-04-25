import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Calendar, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import { ASSETS } from '../../config/plumbingAssets';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-950"
    >
      {/* Real photo background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={ASSETS.hero}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.35 }}
          loading="eager"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(2,8,23,0.97) 0%, rgba(2,8,23,0.88) 50%, rgba(2,8,23,0.55) 100%), linear-gradient(to bottom, rgba(2,8,23,0.3) 0%, transparent 40%, rgba(2,8,23,0.8) 100%)',
        }}
      />

      {/* CSS-only water particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left — 60% */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/25 rounded-full px-4 py-1.5 text-electric-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
              Denver's Premier Plumbing Specialists
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
            >
              Your pipes are
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-electric-500">
                working hard.
              </span>
              <span className="block text-slate-200 text-4xl sm:text-5xl lg:text-6xl font-bold mt-1">
                Until they're not.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-slate-400 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
            >
              From hidden leaks to burst pipes — Tyrooter detects, diagnoses, and repairs before small problems become catastrophic ones. Same-day service available.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="tel:5555555555"
                className="group flex items-center justify-center gap-3 bg-electric-500 hover:bg-electric-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-electric-500/30"
              >
                <Phone size={20} />
                Call Now — (555) 555-5555
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-electric-500/30 backdrop-blur-sm"
              >
                <Calendar size={20} />
                Schedule Service
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-5"
            >
              {[
                { icon: Shield, text: 'Licensed & Insured' },
                { icon: Clock, text: '24/7 Emergency' },
                { icon: Star, text: '4.9★ (500+ Reviews)' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon size={15} className="text-electric-400" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Emergency dispatch widget — 40% */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div
              className="rounded-3xl p-8 border border-white/10"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              {/* Available status */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                </div>
                <span className="text-green-400 font-semibold text-sm">Technicians Available Now</span>
              </div>

              <h3 className="text-white text-xl font-bold mb-2">Emergency Dispatch</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                We have licensed plumbers standing by in Denver and surrounding areas. Average arrival time under 60 minutes.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { value: '< 60 min', label: 'Response Time' },
                  { value: '24/7', label: 'Availability' },
                  { value: 'Licensed', label: '& Insured' },
                  { value: 'Upfront', label: 'Pricing' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-3 text-center"
                  >
                    <div className="text-electric-400 font-bold text-sm">{value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="tel:5555555555"
                className="flex items-center justify-center gap-3 w-full bg-electric-500 hover:bg-electric-600 text-white py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/30 mb-3"
              >
                <Phone size={18} />
                Call for Emergency Service
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center text-slate-400 hover:text-electric-400 text-sm transition-colors py-1"
              >
                Or schedule non-emergency online
              </a>

              {/* Certifications */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center gap-2 flex-wrap">
                {['State Licensed', 'BBB A+', 'EPA Certified'].map(cert => (
                  <div
                    key={cert}
                    className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.07]"
                  >
                    <CheckCircle size={11} className="text-green-400" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-electric-400"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
