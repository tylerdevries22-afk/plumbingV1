import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Search, AlertTriangle, Wrench, CheckCircle } from 'lucide-react';

function PipeVisual({ color, leaking, cracked, repaired }: { color: string; leaking?: boolean; cracked?: boolean; repaired?: boolean }) {
  return (
    <div className="relative w-64 h-48 flex items-center justify-center">
      <svg viewBox="0 0 240 180" className="w-full h-full">
        <defs>
          <linearGradient id={`pipe-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="50%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Main horizontal pipe */}
        <rect x="20" y="75" width="200" height="30" rx="6" fill={`url(#pipe-${color.replace('#','')})`} stroke={color} strokeWidth="1" />

        {/* Pipe sheen */}
        <rect x="20" y="78" width="200" height="8" rx="3" fill="white" opacity="0.15" />

        {/* Vertical branch */}
        <rect x="100" y="20" width="30" height="65" rx="6" fill={`url(#pipe-${color.replace('#','')})`} stroke={color} strokeWidth="1" />

        {/* Joint circles */}
        <circle cx="115" cy="75" r="16" fill={cracked ? '#ef4444' : repaired ? '#22c55e' : color} stroke="white" strokeWidth="1.5" opacity="0.9" />
        <circle cx="40" cy="90" r="12" fill={color} stroke="white" strokeWidth="1.5" opacity="0.7" />
        <circle cx="200" cy="90" r="12" fill={color} stroke="white" strokeWidth="1.5" opacity="0.7" />

        {/* Crack */}
        {cracked && (
          <path d="M108 70 L112 78 L116 72 L120 82" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" />
        )}

        {/* Leak drops */}
        {leaking && (
          <>
            <circle cx="113" cy="100" r="3" fill="#38bdf8" opacity="0.9">
              <animateTransform attributeName="transform" type="translate" values="0,0;0,30;0,0" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="117" cy="105" r="2" fill="#38bdf8" opacity="0.7">
              <animateTransform attributeName="transform" type="translate" values="0,0;0,25;0,0" dur="1.8s" repeatCount="indefinite" begin="0.3s" />
            </circle>
          </>
        )}

        {/* Repair check */}
        {repaired && (
          <text x="108" y="80" fill="#22c55e" fontSize="12" fontWeight="bold">✓</text>
        )}
      </svg>
    </div>
  );
}

function PressureGauge({ value }: { value: number }) {
  const angle = -135 + value * 270;
  const rad = (angle * Math.PI) / 180;
  const x = 60 + 38 * Math.cos(rad);
  const y = 60 + 38 * Math.sin(rad);

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <circle cx="60" cy="60" r="54" fill="#0f2044" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="60" cy="60" r="48" fill="#0a1628" stroke="#1e3a6e" strokeWidth="1" />

        {/* Gauge arcs */}
        <path d="M 17.6 88.4 A 48 48 0 1 1 102.4 88.4" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeDasharray="0 100 151" />
        <path d="M 17.6 88.4 A 48 48 0 1 1 102.4 88.4" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeDasharray="151 100 0" strokeDashoffset="-100" opacity="0.5" />

        {/* Needle */}
        <line x1="60" y1="60" x2={x} y2={y} stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="60" cy="60" r="5" fill="#38bdf8" />

        <text x="60" y="82" textAnchor="middle" fill="#94a3b8" fontSize="8">PSI</text>
        <text x="60" y="95" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">{Math.round(value * 120)}</text>
      </svg>
    </div>
  );
}

interface ChapterConfig {
  range: [number, number];
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  visual: React.ReactNode;
}

// Extracted component so hooks are called at component level (not inside map)
function ChapterItem({ chapter, scrollYProgress }: { chapter: ChapterConfig; scrollYProgress: MotionValue<number> }) {
  const [start, end] = chapter.range;
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, start + 0.1], [40, 0]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity, y }}>
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 border"
            style={{ borderColor: `${chapter.accentColor}40`, color: chapter.accentColor, backgroundColor: `${chapter.accentColor}10` }}
          >
            {chapter.icon}
            {chapter.subtitle}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">{chapter.title}</h2>
          <p className="text-slate-400 text-lg leading-relaxed">{chapter.description}</p>
        </div>
        <div className="flex justify-center">{chapter.visual}</div>
      </div>
    </motion.div>
  );
}

// Extracted dot indicator so hooks are not called inside map
function ChapterDot({ chapter, scrollYProgress }: { chapter: ChapterConfig; scrollYProgress: MotionValue<number> }) {
  const [start, end] = chapter.range;
  const mid = (start + end) / 2;
  const opacity = useTransform(scrollYProgress, [start, mid, end], [0.3, 1, 0.3]);
  return (
    <motion.div className="h-1 rounded-full bg-electric-500" style={{ width: 40, opacity }} />
  );
}

export function ScrollPipeStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  const chapters: ChapterConfig[] = [
    {
      range: [0, 0.2],
      title: 'Hidden in your walls, trouble is building',
      subtitle: 'The Silent Threat',
      description: 'Most plumbing failures give warning signs weeks or months before catastrophe. Slow drips, pressure drops, discolored water — the system is trying to tell you something.',
      icon: <Droplets size={14} />,
      accentColor: '#38bdf8',
      visual: <PipeVisual color="#b87333" />,
    },
    {
      range: [0.2, 0.4],
      title: 'The leak finds its path',
      subtitle: 'Early Detection',
      description: "Water pressure drops. A faint drip. A small stain on the ceiling. These aren't inconveniences — they're the first symptoms of a system under stress.",
      icon: <Search size={14} />,
      accentColor: '#38bdf8',
      visual: <PipeVisual color="#b87333" leaking />,
    },
    {
      range: [0.4, 0.6],
      title: 'Pressure is rising. Fast.',
      subtitle: 'System Escalation',
      description: 'Without intervention, pressure builds. Joints weaken. Cracks form. What started as a $150 fix is now a $4,000 emergency. We catch it before it escalates.',
      icon: <AlertTriangle size={14} />,
      accentColor: '#f97316',
      visual: <PressureGauge value={0.85} />,
    },
    {
      range: [0.6, 0.8],
      title: 'Expert hands. Precision repair.',
      subtitle: 'Professional Repair',
      description: 'Our licensed technicians diagnose the root cause — not just the symptom. Every repair is done to code, backed by our warranty, and documented with photos.',
      icon: <Wrench size={14} />,
      accentColor: '#a855f7',
      visual: <PipeVisual color="#22c55e" cracked />,
    },
    {
      range: [0.8, 1.0],
      title: 'Clean water. Restored confidence.',
      subtitle: 'Complete Resolution',
      description: "New pipe. Proper fittings. Clean flow. We leave your home cleaner than we found it, with a documented repair and a system that's built to last.",
      icon: <CheckCircle size={14} />,
      accentColor: '#22c55e',
      visual: <PipeVisual color="#38bdf8" repaired />,
    },
  ];

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-navy-950 flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 w-full">
          <motion.div style={{ opacity: headerOpacity }}>
            <div className="text-center mb-8">
              <h2 className="text-sm font-semibold text-electric-400 uppercase tracking-widest mb-2">The Tyrooter Process</h2>
              <p className="text-slate-500 text-sm">Scroll to follow the story</p>
            </div>
          </motion.div>

          <div className="relative h-96">
            {chapters.map((chapter, i) => (
              <ChapterItem key={i} chapter={chapter} scrollYProgress={smoothProgress} />
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {chapters.map((chapter, i) => (
            <ChapterDot key={i} chapter={chapter} scrollYProgress={smoothProgress} />
          ))}
        </div>
      </div>
    </div>
  );
}
