import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Calendar, ChevronDown, Shield, Clock, Star } from 'lucide-react';
import { HeroPipes } from './HeroPipes';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-electric-500/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-electric-400/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* 3D Pipe Network */}
      <HeroPipes />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/30 rounded-full px-4 py-1.5 text-electric-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
            Denver's Premier Plumbing Specialists
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Your plumbing system
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-electric-600">
              is working…
            </span>
            <span className="block text-slate-300 text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">
              until it isn't.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
          >
            From hidden leaks to burst pipes — Tyrooter Plumbing detects, diagnoses, and repairs before small problems become catastrophic ones.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="tel:5555555555" className="group flex items-center justify-center gap-3 bg-electric-500 hover:bg-electric-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-electric-500/30">
              <Phone size={20} className="group-hover:animate-bounce" />
              Call Now — (555) 555-5555
            </a>
            <a href="#contact" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105">
              <Calendar size={20} />
              Schedule Service
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Shield, text: 'Licensed & Insured' },
              { icon: Clock, text: '24/7 Emergency' },
              { icon: Star, text: '4.9★ (500+ Reviews)' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                <Icon size={16} className="text-electric-400" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
