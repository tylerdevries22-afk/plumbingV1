import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const INPUT = {
  base: 'w-full rounded-xl px-4 text-white text-[15px] focus:outline-none transition-all duration-200 placeholder-slate-600',
  style: {
    height: '48px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
  } as React.CSSProperties,
  focus: {
    border: '1px solid rgba(14,165,233,0.5)',
    boxShadow: '0 0 0 3px rgba(14,165,233,0.08)',
  },
};

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const getInputStyle = (field: string) => ({
    ...INPUT.style,
    ...(focused === field ? INPUT.focus : {}),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const CONTACTS = [
    { icon: Phone,  label: 'Call or Text',   value: '(555) 555-5555',              href: 'tel:5555555555' },
    { icon: Mail,   label: 'Email Us',        value: 'service@tyrooterplumbing.com', href: 'mailto:service@tyrooterplumbing.com' },
    { icon: MapPin, label: 'Service Area',    value: 'Denver Metro & surroundings',  href: '#' },
    { icon: Clock,  label: 'Hours',           value: '24/7 Emergency · Mon–Sat 7am–8pm', href: '#' },
  ];

  return (
    <section id="contact" className="section-pad" style={{ background: '#020817' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── Left ─────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-electric-400 text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.22)' }}
            >
              Get In Touch
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="font-black text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}
            >
              Schedule your<br className="hidden sm:block" /> service today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="text-slate-400 leading-relaxed mb-10"
            >
              Same-day and next-day appointments available. We arrive on time, give upfront pricing, and leave your home cleaner than we found it.
            </motion.p>

            <div className="flex flex-col gap-5">
              {CONTACTS.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i }}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-electric-400 shrink-0 transition-all duration-200 group-hover:scale-105"
                    style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.15)' }}
                  >
                    <Icon size={17} />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                    <p className="text-white font-medium text-[15px] group-hover:text-electric-400 transition-colors leading-snug">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Right — Form ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3 rounded-3xl p-7 sm:p-8"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.25)' }}
                >
                  <CheckCircle size={28} className="text-electric-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Request received!</h3>
                <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                  We'll call or text you within 1 hour to confirm your appointment and give an upfront quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className={INPUT.base}
                      style={getInputStyle('name')}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">Phone Number *</label>
                    <input
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                      className={INPUT.base}
                      style={getInputStyle('phone')}
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className={INPUT.base}
                    style={getInputStyle('email')}
                    placeholder="john@email.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    onFocus={() => setFocused('service')}
                    onBlur={() => setFocused(null)}
                    className={INPUT.base}
                    style={{ ...getInputStyle('service'), background: '#080f1e' }}
                  >
                    <option value="">Select a service…</option>
                    <option>Leak Detection &amp; Repair</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater Service</option>
                    <option>Sewer Repair</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">Describe the Issue</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    rows={4}
                    className={INPUT.base + ' resize-none pt-3'}
                    style={{ ...getInputStyle('message'), height: 'auto' }}
                    placeholder="Tell us what's happening…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-electric-500 hover:bg-electric-600 active:bg-electric-700 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-electric-500/25 hover:scale-[1.01]"
                  style={{ height: '52px', fontSize: '16px' }}
                >
                  Request Service →
                </button>

                <p className="text-slate-600 text-xs text-center">
                  We respond within 1 hour during business hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
