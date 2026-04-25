import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const services = ['Leak Detection', 'Drain Cleaning', 'Water Heaters', 'Sewer Repair', 'Repiping', 'Emergency Service'];
  const company  = ['About Us', 'Service Areas', 'Reviews', 'Financing', 'Careers', 'Contact'];

  return (
    <footer
      className="border-t"
      style={{ background: '#020817', borderColor: 'rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-electric-400 to-electric-600 flex items-center justify-center shadow-lg shadow-electric-500/25">
                <span className="text-white font-black text-sm leading-none">T</span>
              </div>
              <span className="font-bold text-white text-[15px]">
                Tyrooter <span className="text-electric-400">Plumbing</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-5">
              Denver's premier plumbing specialists. Licensed, insured, and trusted by 5,000+ homeowners since 2012.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:5555555555" className="flex items-center gap-2.5 text-slate-400 hover:text-electric-400 text-sm transition-colors">
                <Phone size={13} /> (555) 555-5555
              </a>
              <a href="mailto:service@tyrooterplumbing.com" className="flex items-center gap-2.5 text-slate-400 hover:text-electric-400 text-sm transition-colors">
                <Mail size={13} /> service@tyrooterplumbing.com
              </a>
              <div className="flex items-center gap-2.5 text-slate-600 text-sm">
                <MapPin size={13} /> Denver, CO &amp; surrounding areas
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-slate-500 hover:text-electric-400 text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map(s => (
                <li key={s}>
                  <a href="#" className="text-slate-500 hover:text-electric-400 text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-slate-600 text-xs">
            © 2024 Tyrooter Plumbing. All rights reserved. License #PLM-2024-CO
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
