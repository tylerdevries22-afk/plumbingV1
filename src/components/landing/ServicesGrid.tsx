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

const categories: Category[] = [
  {
    id: 'core',
    label: 'Core Services',
    icon: <Droplets size={18} />,
    color: '#38bdf8',
    services: [
      { name: 'Leak Detection & Repair', description: 'Advanced acoustic and thermal imaging to find leaks before they cause damage.', popular: true },
      { name: 'Pipe Repair & Replacement', description: 'Full pipe repair from pinhole leaks to complete section replacement.' },
      { name: 'Drain Cleaning', description: 'Mechanical and hydro-jet drain clearing for all drain types.', popular: true },
      { name: 'Sewer Line Repair & Replacement', description: 'Traditional and trenchless sewer repair options.' },
      { name: 'Faucet Repair & Installation', description: 'All brands, all fixture types — kitchens, baths, laundry.' },
      { name: 'Toilet Repair & Installation', description: 'Running toilets, clogs, full replacement and install.' },
      { name: 'Garbage Disposal Repair & Installation', description: 'Repair, replace, or install new garbage disposals.' },
      { name: 'Shower & Tub Repair', description: 'Valve replacement, cartridge repair, re-caulking and reseal.' },
      { name: 'Sump Pump Repair & Installation', description: 'Keep your basement dry — repair or install sump systems.' },
      { name: 'Water Pressure Issues', description: 'Diagnose and fix low or high pressure problems.' },
    ],
  },
  {
    id: 'water-heaters',
    label: 'Water Heaters',
    icon: <Wrench size={18} />,
    color: '#f97316',
    services: [
      { name: 'Water Heater Repair (Tank)', description: 'Fix heating elements, thermostats, anode rods, and more.', popular: true },
      { name: 'Tankless Water Heater Installation', description: 'Energy-efficient on-demand hot water systems.' },
      { name: 'Tankless Water Heater Repair', description: 'Scale removal, igniter repair, flow sensor replacement.' },
      { name: 'Water Heater Replacement', description: 'Same-day replacement with disposal of old unit.' },
      { name: 'Water Heater Flush', description: 'Annual maintenance flush to extend unit life.' },
    ],
  },
  {
    id: 'specialty',
    label: 'Advanced & Specialty',
    icon: <Settings size={18} />,
    color: '#a855f7',
    services: [
      { name: 'Hydro Jetting', description: 'High-pressure water jetting to blast through severe blockages.', popular: true },
      { name: 'Trenchless Sewer Repair', description: 'No-dig pipe lining and pipe bursting technology.' },
      { name: 'Video Camera Inspection', description: 'HD camera inspection of your drain and sewer lines.', popular: true },
      { name: 'Gas Line Repair & Installation', description: 'Licensed gas line work — repairs, extensions, new installs.' },
      { name: 'Slab Leak Repair', description: 'Detect and repair leaks beneath your concrete foundation.' },
      { name: 'Backflow Testing & Prevention', description: 'Testing, certification, and backflow preventer installation.' },
      { name: 'Whole-Home Repiping', description: 'Complete copper or PEX repipe for older or failing systems.' },
    ],
  },
  {
    id: 'installation',
    label: 'Installation & Remodel',
    icon: <Home size={18} />,
    color: '#22c55e',
    services: [
      { name: 'Kitchen Plumbing', description: 'Full kitchen rough-in, remodel plumbing, and fixture install.' },
      { name: 'Bathroom Plumbing', description: 'New baths, remodels, additions — all rough and finish work.' },
      { name: 'Appliance Hookups', description: 'Dishwasher, fridge water line, ice maker, washing machine.' },
      { name: 'New Construction Plumbing', description: 'Ground-up plumbing for residential new builds.' },
      { name: 'Remodel Plumbing', description: 'Repipe and replumb during kitchen or bath renovations.' },
    ],
  },
  {
    id: 'maintenance',
    label: 'Maintenance Plans',
    icon: <Zap size={18} />,
    color: '#eab308',
    services: [
      { name: 'Annual Plumbing Inspection', description: 'Comprehensive whole-home plumbing health check.', popular: true },
      { name: 'Preventative Maintenance Plan', description: 'Quarterly visits, priority scheduling, member discounts.' },
      { name: 'Drain Maintenance', description: 'Scheduled drain cleaning to prevent future blockages.' },
      { name: 'Water Heater Annual Flush', description: 'Flush sediment, inspect anode, test pressure relief valve.' },
    ],
  },
  {
    id: 'emergency',
    label: '24/7 Emergency',
    icon: <AlertTriangle size={18} />,
    color: '#ef4444',
    services: [
      { name: '24/7 Emergency Plumbing', description: 'No extra charge for nights and weekends. Real plumbers, fast response.', popular: true },
      { name: 'Burst Pipe Repair', description: 'Immediate response to stop water damage and restore flow.' },
      { name: 'Overflow & Flood Response', description: 'Emergency shutoff, extraction coordination, full repair.' },
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial',
    icon: <Building2 size={18} />,
    color: '#64748b',
    services: [
      { name: 'Commercial Plumbing Services', description: 'Restaurants, offices, retail — all commercial needs.' },
      { name: 'Multi-unit Property Management', description: 'Apartment complexes, condos, HOAs — service contracts available.' },
    ],
  },
];

function ServiceCard({ service, color }: { service: Service; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.25 }}
      className="relative p-4 rounded-xl border transition-all duration-300 group cursor-default"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(4px)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
      whileHover={{
        borderColor: `${color}40`,
        backgroundColor: 'rgba(255,255,255,0.08)',
      }}
    >
      {service.popular && (
        <span
          className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold"
          style={{ backgroundColor: `${color}20`, color }}
        >
          Popular
        </span>
      )}
      <h4 className="text-white font-semibold mb-1.5 text-sm pr-16 leading-snug">{service.name}</h4>
      <p className="text-slate-500 text-xs leading-relaxed">{service.description}</p>
    </motion.div>
  );
}

function CategoryAccordion({ category, defaultOpen }: { category: Category; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div
      className="rounded-2xl overflow-hidden border transition-colors duration-300"
      style={{
        borderColor: open ? `${category.color}25` : 'rgba(255,255,255,0.08)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200"
        style={{
          background: open ? `${category.color}08` : 'rgba(255,255,255,0.02)',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${category.color}15`, color: category.color }}
          >
            {category.icon}
          </div>
          <div>
            <span className="text-white font-semibold block leading-tight">{category.label}</span>
            <span className="text-slate-500 text-xs">{category.services.length} services</span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={18} className="text-slate-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {category.services.map(s => (
                <ServiceCard key={s.name} service={s} color={category.color} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/25 rounded-full px-4 py-1.5 text-electric-400 text-sm font-medium mb-4"
          >
            Full Service Plumbing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight"
          >
            Everything plumbing,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-electric-500">
              {' '}under one roof
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From a dripping faucet to a full home repipe — Tyrooter handles it all with licensed technicians and upfront pricing.
          </motion.p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <CategoryAccordion category={cat} defaultOpen={cat.id === 'core'} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
