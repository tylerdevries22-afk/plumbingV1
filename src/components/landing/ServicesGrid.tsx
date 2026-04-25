import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Droplets, Wrench, Home, Zap, AlertTriangle, Building2, Settings } from 'lucide-react';

interface Service {
  name: string;
  description: string;
  popular?: boolean;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  services: Service[];
}

const CATEGORIES: Category[] = [
  {
    id: 'core',
    label: 'Core Services',
    icon: <Droplets size={17} />,
    color: '#38bdf8',
    services: [
      { name: 'Leak Detection & Repair',          description: 'Acoustic & thermal imaging finds leaks before they cause damage.',           popular: true },
      { name: 'Pipe Repair & Replacement',        description: 'From pinhole leaks to full section replacement — any material.' },
      { name: 'Drain Cleaning',                   description: 'Mechanical and hydro-jet clearing for all drain types.',                     popular: true },
      { name: 'Sewer Line Repair & Replacement',  description: 'Traditional and trenchless options for every sewer situation.' },
      { name: 'Faucet Repair & Installation',     description: 'All brands, all fixture types — kitchens, baths, utility.' },
      { name: 'Toilet Repair & Installation',     description: 'Running toilets, clogs, wax rings, full replacement.' },
      { name: 'Garbage Disposal',                 description: 'Repair, replace, or fresh install of all major brands.' },
      { name: 'Shower & Tub Repair',              description: 'Valve replacement, cartridge repair, re-caulk, and reseal.' },
      { name: 'Sump Pump Service',                description: 'Repair or install sump systems to keep your basement dry.' },
      { name: 'Water Pressure Issues',            description: 'Diagnose and permanently fix low or high pressure problems.' },
    ],
  },
  {
    id: 'water-heaters',
    label: 'Water Heaters',
    icon: <Wrench size={17} />,
    color: '#f97316',
    services: [
      { name: 'Tank Water Heater Repair',         description: 'Elements, thermostats, anode rods, pressure relief valves.',               popular: true },
      { name: 'Tankless Installation',            description: 'Energy-efficient on-demand systems — gas and electric.' },
      { name: 'Tankless Repair',                  description: 'Scale removal, igniter repair, flow sensor replacement.' },
      { name: 'Water Heater Replacement',         description: 'Same-day replacement with disposal of old unit included.' },
      { name: 'Annual Flush',                     description: 'Flush sediment, inspect anode, test pressure relief valve.' },
    ],
  },
  {
    id: 'specialty',
    label: 'Advanced & Specialty',
    icon: <Settings size={17} />,
    color: '#a855f7',
    services: [
      { name: 'Hydro Jetting',                    description: 'High-pressure water blast through severe & recurring blockages.',           popular: true },
      { name: 'Trenchless Sewer Repair',          description: 'Pipe lining and pipe bursting — no digging required.' },
      { name: 'Video Camera Inspection',          description: 'HD camera inspection of drain and sewer lines.',                           popular: true },
      { name: 'Gas Line Repair & Installation',   description: 'Licensed gas work — repairs, extensions, new installs.' },
      { name: 'Slab Leak Repair',                 description: 'Detect and repair leaks beneath concrete foundations.' },
      { name: 'Backflow Testing & Prevention',    description: 'Certification, testing, and device installation.' },
      { name: 'Whole-Home Repiping',              description: 'Complete copper or PEX repipe for aging or failing systems.' },
    ],
  },
  {
    id: 'installation',
    label: 'Installation & Remodel',
    icon: <Home size={17} />,
    color: '#4ade80',
    services: [
      { name: 'Kitchen Plumbing',                 description: 'Full rough-in, remodel plumbing, and fixture installation.' },
      { name: 'Bathroom Plumbing',                description: 'New baths, remodels, additions — rough and finish work.' },
      { name: 'Appliance Hookups',                description: 'Dishwasher, fridge line, ice maker, washing machine.' },
      { name: 'New Construction',                 description: 'Ground-up plumbing for residential new builds.' },
      { name: 'Remodel Plumbing',                 description: 'Repipe and replumb during kitchen or bath renovations.' },
    ],
  },
  {
    id: 'maintenance',
    label: 'Maintenance Plans',
    icon: <Zap size={17} />,
    color: '#eab308',
    services: [
      { name: 'Annual Plumbing Inspection',       description: 'Comprehensive whole-home plumbing health evaluation.',                     popular: true },
      { name: 'Preventative Maintenance Plan',    description: 'Quarterly visits, priority scheduling, and member pricing.' },
      { name: 'Drain Maintenance',                description: 'Scheduled cleaning to prevent future blockages.' },
      { name: 'Water Heater Annual Flush',        description: 'Flush, inspect, and certify your water heater each year.' },
    ],
  },
  {
    id: 'emergency',
    label: '24/7 Emergency',
    icon: <AlertTriangle size={17} />,
    color: '#f87171',
    services: [
      { name: '24/7 Emergency Plumbing',          description: 'Real plumbers on call — nights, weekends, holidays, no surcharge.', popular: true },
      { name: 'Burst Pipe Repair',                description: 'Immediate dispatch to stop water damage and restore flow.' },
      { name: 'Overflow & Flood Response',        description: 'Emergency shutoff, extraction coordination, full repair.' },
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial',
    icon: <Building2 size={17} />,
    color: '#94a3b8',
    services: [
      { name: 'Commercial Plumbing',              description: 'Restaurants, offices, retail — all commercial plumbing needs.' },
      { name: 'Multi-unit / Property Management', description: 'Apartments, condos, HOAs — service contracts available.' },
    ],
  },
];

/* ── Service card ────────────────────────────────────────── */
function ServiceCard({ service, color }: { service: Service; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22 }}
      className="relative rounded-2xl p-5 group cursor-default"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)',
        transition: 'background 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
      }}
      whileHover={{
        backgroundColor: 'rgba(255,255,255,0.07)',
        borderColor: `${color}40`,
        boxShadow: `0 4px 20px rgba(0,0,0,0.35), 0 0 0 1px ${color}20, inset 0 1px 0 rgba(255,255,255,0.07)`,
      }}
    >
      {service.popular && (
        <span
          className="absolute top-3.5 right-3.5 text-[10px] px-2 py-0.5 rounded-full font-bold tracking-wide"
          style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
        >
          Popular
        </span>
      )}
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center mb-3 shrink-0"
        style={{ background: `${color}15` }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: color }} />
      </div>
      <h4 className="text-white font-semibold text-sm leading-snug mb-2 pr-12">{service.name}</h4>
      <p className="text-slate-500 text-xs leading-relaxed">{service.description}</p>
    </motion.div>
  );
}

/* ── Accordion ───────────────────────────────────────────── */
function CategoryAccordion({ category, defaultOpen }: { category: Category; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: `1px solid ${open ? `${category.color}28` : 'rgba(255,255,255,0.07)'}`,
        boxShadow: open ? `0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px ${category.color}10` : '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-200"
        style={{ background: open ? `${category.color}08` : 'rgba(255,255,255,0.02)' }}
      >
        <div className="flex items-center gap-3.5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${category.color}15`, color: category.color }}
          >
            {category.icon}
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-[15px] leading-tight">{category.label}</p>
            <p className="text-slate-500 text-xs mt-0.5">{category.services.length} services</p>
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }}>
          <ChevronDown size={17} className="text-slate-400 shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className="px-4 sm:px-5 pb-5 pt-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3"
              style={{ borderTop: `1px solid ${category.color}15` }}
            >
              {category.services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.035, duration: 0.22 }}
                >
                  <ServiceCard service={s} color={category.color} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────── */
export function ServicesGrid() {
  return (
    <section id="services" className="section-pad" style={{ background: '#020817' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-electric-400 text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.22)' }}
          >
            Full-Service Plumbing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.25rem)' }}
          >
            Everything plumbing,
            <span className="gradient-text"> under one roof</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From a dripping faucet to a full home repipe — licensed technicians, upfront pricing, and work that's built to last.
          </motion.p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.045 }}
            >
              <CategoryAccordion category={cat} defaultOpen={cat.id === 'core'} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
