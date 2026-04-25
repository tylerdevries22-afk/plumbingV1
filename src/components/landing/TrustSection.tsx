import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Star, Shield, Award, Clock, ThumbsUp, Users, Quote } from 'lucide-react';
import { REVIEWS, ASSETS } from '../../config/plumbingAssets';

/* ── Animated counter ──────────────────────────────────── */
function Counter({ to, suffix = '', duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const nodeRef  = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded   = useTransform(motionVal, v => `${Math.round(v).toLocaleString()}${suffix}`);
  const isInView  = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const ctrl = animate(motionVal, to, { duration, ease: 'easeOut' });
      return ctrl.stop;
    }
  }, [isInView, to, duration, motionVal]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

const STATS = [
  { value: 5000, suffix: '+', label: 'Customers Served' },
  { value: 4.9,  suffix: '★', label: 'Avg. Rating',     fixed: true },
  { value: 12,   suffix: '+', label: 'Years Experience' },
  { value: 500,  suffix: '+', label: 'Online Reviews'   },
];

const BADGES = [
  { icon: Shield,   label: 'Licensed & Insured',  sub: 'State certified' },
  { icon: Award,    label: 'A+ BBB Rating',        sub: '12+ years'       },
  { icon: Clock,    label: '24/7 Availability',    sub: 'No extra charge' },
  { icon: ThumbsUp, label: '100% Satisfaction',    sub: 'Guaranteed'      },
  { icon: Users,    label: '5,000+ Customers',     sub: 'Served locally'  },
  { icon: Star,     label: '4.9 Star Rating',      sub: '500+ reviews'    },
];

/* ── Review card ────────────────────────────────────────── */
function ReviewCard({ review, index }: { review: typeof REVIEWS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="flex flex-col rounded-2xl p-6"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
        transition: 'border-color 200ms ease, box-shadow 200ms ease',
      }}
      whileHover={{
        borderColor: 'rgba(56,189,248,0.22)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(56,189,248,0.12), inset 0 1px 0 rgba(255,255,255,0.07)',
      }}
    >
      {/* Quote icon */}
      <Quote size={20} className="text-electric-500/40 mb-3 shrink-0" />

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-electric-400 font-bold text-sm shrink-0"
          style={{ background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.2)' }}
        >
          {review.name[0]}
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-tight">{review.name}</p>
          <p className="text-slate-500 text-xs mt-0.5">{review.location}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────── */
export function TrustSection() {
  return (
    <section id="reviews" className="section-pad relative overflow-hidden" style={{ background: '#080f1e' }}>
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{ width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 70%)', transform: 'translateX(-50%) translateY(-30%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-electric-400 text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.22)' }}
          >
            Why Denver Trusts Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.25rem)' }}
          >
            Trusted by thousands of
            <span className="gradient-text"> Denver homeowners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Real results, real reviews. Here's what our customers say after every job.
          </motion.p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              className="text-center rounded-2xl py-8 px-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              }}
            >
              <div
                className="font-black leading-none mb-2"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: '#38bdf8' }}
              >
                {s.fixed ? '4.9★' : <Counter to={s.value} suffix={s.suffix} />}
              </div>
              <p className="text-slate-400 text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Team photo + badges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)' }}
          >
            <img
              src={ASSETS.team}
              alt="Tyrooter Plumbing technician"
              className="w-full object-cover"
              style={{ height: 'clamp(240px, 30vw, 360px)' }}
              loading="lazy"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,8,23,0.75) 0%, transparent 55%)' }} />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white font-bold text-lg leading-tight">The Tyrooter Team</p>
              <p className="text-slate-300 text-sm mt-0.5">Licensed professionals serving Denver since 2012</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {BADGES.map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl p-4 text-center"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
                  transition: 'border-color 200ms, box-shadow 200ms',
                }}
                whileHover={{ borderColor: 'rgba(56,189,248,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(56,189,248,0.12)' }}
              >
                <Icon size={20} className="text-electric-400 mx-auto mb-2" />
                <p className="text-white text-xs font-semibold leading-tight">{label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reviews header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          <h3 className="text-xl font-bold text-white">What our customers say</h3>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-1 text-slate-400 text-sm">4.9 · 500+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
