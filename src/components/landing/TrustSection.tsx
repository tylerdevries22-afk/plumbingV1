import { motion } from 'framer-motion';
import { Star, Shield, Award, Clock, ThumbsUp, Users } from 'lucide-react';
import { REVIEWS } from '../../config/plumbingAssets';

function ReviewCard({ review, index }: { review: typeof REVIEWS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-electric-500/30 transition-colors"
    >
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-4">"{review.text}"</p>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-white font-semibold text-sm">{review.name}</div>
          <div className="text-slate-500 text-xs">{review.location}</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-electric-500/20 flex items-center justify-center text-electric-400 font-bold text-sm">
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
    <section id="reviews" className="py-24 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badges */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
          >
            Trusted by thousands of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-electric-600"> Denver homeowners</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {badges.map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-electric-500/30 transition-colors"
            >
              <Icon size={24} className="text-electric-400 mx-auto mb-2" />
              <div className="text-white text-xs font-semibold leading-tight">{label}</div>
              <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">What our customers say</h3>
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-2 text-slate-400 text-sm">4.9 average · 500+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
