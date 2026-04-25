import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-400 to-electric-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">T</span>
              </div>
              <span className="font-bold text-white text-lg">Tyrooter <span className="text-electric-400">Plumbing</span></span>
            </div>
            <p className="text-slate-500 text-sm mb-4 max-w-xs">Denver's premier plumbing specialists. Licensed, insured, and trusted since 2012.</p>
            <div className="flex flex-col gap-2">
              <a href="tel:5555555555" className="flex items-center gap-2 text-slate-400 hover:text-electric-400 text-sm transition-colors">
                <Phone size={14} /> (555) 555-5555
              </a>
              <a href="mailto:service@tyrooterplumbing.com" className="flex items-center gap-2 text-slate-400 hover:text-electric-400 text-sm transition-colors">
                <Mail size={14} /> service@tyrooterplumbing.com
              </a>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <MapPin size={14} /> Denver, CO &amp; surrounding areas
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              {['Leak Detection', 'Drain Cleaning', 'Water Heaters', 'Sewer Repair', 'Repiping', 'Emergency Service'].map(s => (
                <li key={s}><a href="#services" className="hover:text-electric-400 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              {['About Us', 'Service Areas', 'Reviews', 'Financing', 'Careers', 'Contact'].map(s => (
                <li key={s}><a href="#" className="hover:text-electric-400 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
          <p>© 2024 Tyrooter Plumbing. All rights reserved. License #PLM-2024-CO</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
