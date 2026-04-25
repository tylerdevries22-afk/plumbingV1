import { motion } from 'framer-motion';
import { Phone, Calendar, Shield, Star, Clock } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-electric-500/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-electric-400/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-electric-400 text-sm font-semibold uppercase tracking-widest mb-4">Ready to Get Started?</div>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Stop the leak before
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-electric-600">it stops you.</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
            Same-day service available. Upfront pricing. Licensed, insured, and trusted by 5,000+ Denver homeowners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="tel:5555555555" className="group flex items-center justify-center gap-3 bg-electric-500 hover:bg-electric-600 text-white px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-electric-500/30">
            <Phone size={22} className="group-hover:animate-bounce" />
            Call Now — (555) 555-5555
          </a>
          <a href="#contact" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all hover:scale-105">
            <Calendar size={22} />
            Schedule Online
          </a>
        </motion.div>

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
              <Icon size={16} className="text-electric-400" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
