import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Star, Shield, Award, Clock, ThumbsUp, Users } from 'lucide-react';
import { REVIEWS, ASSETS } from '../../config/plumbingAssets';

function AnimatedCounter({
  to,
  suffix = '',
  prefix = '',
  duration = 1.8,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, v => `${prefix}${Math.round(v).toLocaleString()}${suffix}`);
  const isInView = useInView(inViewRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, to, { duration, ease: 'easeOut' });
      return controls.stop;
    }
  }, [isInView, to, duration, motionVal]);

  return (
    <span ref={inViewRef}>
      <motion.span ref={ref}>{rounded}</motion.span>
    </span>
  );
}

const stats = [
  { value: 5000, suffix: '+', label: 'Customers Served', prefix: '' },
  { value: 4.9, suffix: '★', label: 'Average Rating', prefix: '', isFloat: true },
  { value: 12, suffix: '+', label: 'Years Experience', prefix: '' },
  { value: 500, suffix: '+', label: 'Reviews Online', prefix: '' },
];

function ReviewCard({ review, index }: { review: typeof REVIEWS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="rounded-2xl p-6 border transition-all duration-300 group"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(8px)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
      whileHover={{ borderColor: 'rgba(56,189,248,0.25)' }}
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-5">"{review.text}"</p>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-white font-semibold text-sm">{review.name}</div>
          <div className="text-slate-500 text-xs mt-0.5">{review.location}</div>
        </div>
        <div className="w-9 h-9 rounded-full bg-electric-500/15 border border-electric-500/20 flex items-center justify-center text-electric-400 font-bold text-sm">
          {review.name[0]}
        </div>
      </div>
    </motion.div>
  );
}

const badges = [
  { icon: Shield, label: 'Licensed & Insured', sub: 'State certified' },
  { icon: Award, label: 'A+ BBB Rating', sub: '12+ years' },
  { icon: Clock, label: '24/7 Availability', sub: 'No extra charge' },
  { icon: ThumbsUp, label: '100% Satisfaction', sub: 'Guaranteed' },
  { icon: Users, label: '5,000+ Customers', sub: 'Served locally' },
  { icon: Star, label: '4.9 Star Rating', sub: '500+ reviews' },
];

export function TrustSection() {
  return (
    <section id="reviews" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/25 rounded-full px-4 py-1.5 text-electric-400 text-sm font-medium mb-4"
          >
            Why Denver Trusts Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight"
          >
            Trusted by thousands of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-electric-500">
              {' '}Denver homeowners
            </span>
          </motion.h2>
        </div>

        {/* Animated stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center rounded-2xl py-8 px-4 border"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
            >
              <div className="text-4xl sm:text-5xl font-black text-white mb-1">
                {s.isFloat ? (
                  <span className="text-electric-400">4.9★</span>
                ) : (
                  <span className="text-electric-400">
                    <AnimatedCounter to={s.value} suffix={s.suffix} prefix={s.prefix} />
                  </span>
                )}
              </div>
              <div className="text-slate-400 text-sm font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team photo + badges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)' }}
          >
            <img
              src={ASSETS.team}
              alt="Tyrooter Plumbing Team"
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(2,8,23,0.7) 0%, transparent 60%)',
              }}
            />
            <div className="absolute bottom-5 left-5">
              <div className="text-white font-bold text-lg">The Tyrooter Team</div>
              <div className="text-slate-300 text-sm">Licensed professionals since 2012</div>
            </div>
          </motion.div>

          {/* Badges grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {badges.map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="rounded-2xl p-4 text-center border transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.08)',
                }}
                whileHover={{ borderColor: 'rgba(56,189,248,0.25)' }}
              >
                <Icon size={22} className="text-electric-400 mx-auto mb-2" />
                <div className="text-white text-xs font-semibold leading-tight">{label}</div>
                <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reviews grid */}
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">What our customers say</h3>
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-2 text-slate-400 text-sm">4.9 average · 500+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
