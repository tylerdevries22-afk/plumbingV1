import { motion } from 'framer-motion';
import { Phone, Calendar, Shield, Star, Clock, AlertTriangle } from 'lucide-react';
import { ASSETS } from '../../config/plumbingAssets';

export function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.kitchen}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.18 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(2,8,23,0.97) 0%, rgba(10,22,40,0.93) 50%, rgba(15,32,68,0.90) 100%)',
          }}
        />
      </div>

      {/* Glow orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(14,165,233,0.08)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(56,189,248,0.06)' }}
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/25 rounded-full px-4 py-1.5 text-red-400 text-sm font-semibold mb-6"
        >
          <AlertTriangle size={14} className="animate-pulse" />
          Most plumbing emergencies get worse every hour.
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05]">
            Stop the leak before
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-electric-500">
              it stops you.
            </span>
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Same-day service available. Upfront pricing. Licensed, insured, and trusted by 5,000+ Denver homeowners.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="tel:5555555555"
            className="group flex items-center justify-center gap-3 bg-electric-500 hover:bg-electric-600 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-electric-500/30"
          >
            <Phone size={22} />
            Call Now — (555) 555-5555
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-3 bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-electric-500/30 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <Calendar size={22} />
            Schedule Online
          </a>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm"
        >
          {[
            { icon: Shield, text: 'Licensed & Insured' },
            { icon: Star, text: '4.9★ Rated' },
            { icon: Clock, text: '24/7 Emergency' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={15} className="text-electric-400" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
