import { motion } from 'framer-motion';
import { Phone, Calendar, Shield, Star, Clock, AlertTriangle } from 'lucide-react';
import { ASSETS } from '../../config/plumbingAssets';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden section-pad">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img src={ASSETS.kitchen} alt="" className="w-full h-full object-cover" style={{ opacity: 0.15 }} loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(2,8,23,0.97) 0%, rgba(8,15,30,0.94) 60%, rgba(13,26,48,0.92) 100%)' }} />
      </div>

      {/* Glow orbs */}
      <motion.div
        className="absolute top-0 left-1/3 rounded-full pointer-events-none"
        style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(14,165,233,0.09) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 rounded-full pointer-events-none"
        style={{ width: 360, height: 360, background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 65%)' }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-red-400 text-sm font-semibold mb-8"
          style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)' }}
        >
          <AlertTriangle size={14} className="animate-pulse" />
          Most plumbing emergencies get worse every hour.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <h2
            className="font-black text-white leading-[1.04] mb-5"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Stop the leak before
            <span className="block gradient-text">it stops you.</span>
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Same-day service. Upfront pricing. Licensed, insured, and trusted by over 5,000 Denver homeowners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="tel:5555555555"
            className="flex items-center justify-center gap-3 bg-electric-500 hover:bg-electric-600 text-white font-bold transition-all duration-200 hover:shadow-2xl hover:shadow-electric-500/30 hover:scale-[1.03] rounded-2xl"
            style={{ padding: '18px 36px', fontSize: '18px' }}
          >
            <Phone size={20} strokeWidth={2.5} />
            Call Now — (555) 555-5555
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-3 text-white font-semibold transition-all duration-200 hover:scale-[1.03] rounded-2xl"
            style={{ padding: '18px 36px', fontSize: '18px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.13)' }}
          >
            <Calendar size={20} />
            Schedule Online
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.26 }}
          className="flex flex-wrap justify-center gap-7 text-slate-400 text-sm"
        >
          {[
            { icon: Shield, text: 'Licensed & Insured' },
            { icon: Star,   text: '4.9★ Rated'         },
            { icon: Clock,  text: '24/7 Emergency'      },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={14} className="text-electric-400" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
