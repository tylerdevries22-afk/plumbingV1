import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/30 rounded-full px-4 py-1.5 text-electric-400 text-sm font-medium mb-6"
            >
              Get In Touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black text-white mb-6"
            >
              Schedule your service today
            </motion.h2>
            <p className="text-slate-400 mb-10">Same-day and next-day appointments available. Upfront pricing — no surprises.</p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Call or Text', value: '(555) 555-5555', href: 'tel:5555555555' },
                { icon: Mail, label: 'Email Us', value: 'service@tyrooterplumbing.com', href: 'mailto:service@tyrooterplumbing.com' },
                { icon: MapPin, label: 'Service Area', value: 'Denver Metro & surrounding areas', href: '#' },
                { icon: Clock, label: 'Hours', value: '24/7 Emergency · Mon–Sat 7am–8pm', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 group-hover:bg-electric-500/20 transition-colors shrink-0 mt-0.5">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-0.5">{label}</div>
                    <div className="text-white font-medium group-hover:text-electric-400 transition-colors">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-electric-500/20 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-electric-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Request received!</h3>
                <p className="text-slate-400">We'll contact you within 1 hour to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5">Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-electric-500/50 transition-colors" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5">Phone Number *</label>
                    <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-electric-500/50 transition-colors" placeholder="(555) 555-5555" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs mb-1.5">Email Address</label>
                  <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-electric-500/50 transition-colors" placeholder="john@email.com" />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs mb-1.5">Service Needed</label>
                  <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-electric-500/50 transition-colors">
                    <option value="">Select a service...</option>
                    <option>Leak Detection &amp; Repair</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater Service</option>
                    <option>Sewer Repair</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs mb-1.5">Describe the Issue</label>
                  <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-electric-500/50 transition-colors resize-none" placeholder="Tell us what's happening..." />
                </div>
                <button type="submit" className="w-full bg-electric-500 hover:bg-electric-600 text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                  <Send size={16} />
                  Request Service
                </button>
                <p className="text-slate-500 text-xs text-center">We typically respond within 1 hour during business hours.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
