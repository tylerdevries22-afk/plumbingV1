import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Phone } from 'lucide-react';
import { ASSETS } from '../../config/plumbingAssets';

interface Chapter {
  number: string;
  label: string;
  title: string;
  body: string;
  accent: string;
  bgImage: string;
  featureImage: string;
}

const CHAPTERS: Chapter[] = [
  {
    number: '01',
    label: 'The Silent Threat',
    title: 'Your plumbing is working… until it isn\'t.',
    body: 'Hidden behind walls and beneath floors, pipes face constant pressure. Most failures start as tiny warnings — weeks before disaster. One slow drip today is a flooded basement tomorrow.',
    accent: '#38bdf8',
    bgImage: ASSETS.pipes_copper,
    featureImage: ASSETS.pipes_copper,
  },
  {
    number: '02',
    label: 'The Leak Forms',
    title: 'A drip becomes a flood in 72 hours.',
    body: 'Water finds every crack, every weakness. What starts as a slow drip under the sink can silently saturate walls, floors, and foundations — causing $5,000–$50,000 in damage.',
    accent: '#38bdf8',
    bgImage: ASSETS.water_heater,
    featureImage: ASSETS.drain,
  },
  {
    number: '03',
    label: 'Rapid Diagnosis',
    title: 'We find it in minutes. Not days.',
    body: 'Our techs use acoustic sensors, thermal cameras, and HD sewer scopes to pinpoint problems invisible to the naked eye. No guesswork. No unnecessary demolition. Just answers.',
    accent: '#f59e0b',
    bgImage: ASSETS.tools,
    featureImage: ASSETS.plumber_working,
  },
  {
    number: '04',
    label: 'Expert Repair',
    title: 'Every repair done to code. Guaranteed.',
    body: 'Licensed, permitted, photographed. We don\'t just fix the symptom — we document the cause, the repair, and the test results. Full transparency from first call to final inspection.',
    accent: '#a855f7',
    bgImage: ASSETS.plumber_working,
    featureImage: ASSETS.pipes_copper,
  },
  {
    number: '05',
    label: 'Peace of Mind',
    title: 'Leave it cleaner than we found it.',
    body: 'Shoe covers. Drop cloths. When we leave, you\'d never know we were there — except your water pressure is perfect and your pipes carry a 10-year warranty.',
    accent: '#4ade80',
    bgImage: ASSETS.kitchen,
    featureImage: ASSETS.bathroom,
  },
];

/* ── Per-chapter view ──────────────────────────────────────────── */
function ChapterView({
  chapter,
  index,
  progress,
}: {
  chapter: Chapter;
  index: number;
  progress: MotionValue<number>;
}) {
  const start  = index * 0.2;
  const end    = start + 0.2;
  const mid    = start + 0.1;
  const buffer = 0.035;

  const bgOpacity      = useTransform(progress, [start, start + buffer, end - buffer, end], [0, 1, 1, 0]);
  const bgScale        = useTransform(progress, [start, end], [1.06, 1.0]);
  const contentOpacity = useTransform(progress, [start, start + 0.07, end - 0.05, end], [0, 1, 1, 0]);
  const contentY       = useTransform(progress, [start, start + 0.09], [52, 0]);
  const imageOpacity   = useTransform(progress, [start, start + 0.09, end - 0.05, end], [0, 1, 1, 0]);
  const imageX         = useTransform(progress, [start, start + 0.09], [60, 0]);
  // Unused but kept for potential future use
  void mid;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* BG photo */}
      <motion.div className="absolute inset-0" style={{ opacity: bgOpacity }}>
        <motion.img
          src={chapter.bgImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ scale: bgScale, transformOrigin: 'center center' }}
          loading="lazy"
        />
        {/* Overlays */}
        <div className="absolute inset-0" style={{ background: 'rgba(2,8,23,0.80)' }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(135deg, rgba(2,8,23,0.55) 0%, transparent 60%, rgba(2,8,23,0.3) 100%)`,
        }} />
        {/* Scan line */}
        <div className="scanline" />
      </motion.div>

      {/* Chapter watermark */}
      <div
        className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 font-black select-none pointer-events-none"
        style={{
          fontSize: 'clamp(5rem, 18vw, 16rem)',
          color: chapter.accent,
          opacity: 0.055,
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        {chapter.number}
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-8 lg:px-12 xl:px-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">

          {/* Left */}
          <motion.div style={{ opacity: contentOpacity, y: contentY }}>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-5 tracking-wide"
              style={{ color: chapter.accent, border: `1px solid ${chapter.accent}35`, background: `${chapter.accent}12` }}
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: chapter.accent }} />
              {chapter.label}
            </div>

            <h2
              className="font-black text-white leading-[1.07] mb-5"
              style={{ fontSize: 'clamp(1.85rem, 4vw, 3.25rem)' }}
            >
              {chapter.title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg mb-8">
              {chapter.body}
            </p>

            <a
              href="tel:5555555555"
              className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-150 hover:opacity-80"
              style={{ color: chapter.accent }}
            >
              <Phone size={14} strokeWidth={2.5} />
              Get help now →
            </a>
          </motion.div>

          {/* Right — feature image */}
          <motion.div
            style={{ opacity: imageOpacity, x: imageX }}
            className="hidden lg:block"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07), 0 0 50px ${chapter.accent}18`,
              }}
            >
              <img
                src={chapter.featureImage}
                alt={chapter.label}
                className="w-full object-cover"
                style={{ height: 'clamp(260px, 32vw, 420px)' }}
                loading="lazy"
              />
              {/* Colour tint */}
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${chapter.accent}10 0%, transparent 55%)` }}
              />
              {/* Accent border */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ border: `1px solid ${chapter.accent}25` }}
              />
              {/* Label pill on image */}
              <div
                className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl text-xs font-semibold"
                style={{ background: 'rgba(2,8,23,0.75)', border: `1px solid ${chapter.accent}35`, color: chapter.accent, backdropFilter: 'blur(8px)' }}
              >
                {chapter.label}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── Dot indicator ─────────────────────────────────────────────── */
function ChapterDot({
  index,
  progress,
  accent,
}: {
  index: number;
  progress: MotionValue<number>;
  accent: string;
}) {
  const start  = index * 0.2;
  const mid    = start + 0.1;
  const end    = start + 0.2;
  const scale  = useTransform(progress, [start, mid, end], [1, 1.8, 1]);
  const opaque = useTransform(progress, [start, mid, end], [0.3, 1, 0.3]);

  return (
    <motion.div style={{ scale, opacity: opaque }} className="w-2 h-2 rounded-full shrink-0" title={`Chapter ${index + 1}`}>
      <div className="w-full h-full rounded-full" style={{ background: accent }} />
    </motion.div>
  );
}

/* ── Main component ────────────────────────────────────────────── */
export function ScrollPipeStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={containerRef}
      id="how-it-works"
      className="relative"
      style={{ height: '550vh' }}
    >
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: '100dvh', background: '#020817' }}
      >
        {/* Chapters */}
        <div className="absolute inset-0">
          {CHAPTERS.map((ch, i) => (
            <ChapterView
              key={i}
              chapter={ch}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {/* Section label */}
        <div className="absolute top-[76px] left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <p className="text-electric-400 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
            The Tyrooter Process
          </p>
        </div>

        {/* Right edge — chapter dots */}
        <div className="absolute right-5 sm:right-7 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3.5">
          {CHAPTERS.map((ch, i) => (
            <ChapterDot
              key={i}
              index={i}
              progress={scrollYProgress}
              accent={ch.accent}
            />
          ))}
        </div>

        {/* Bottom progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px]" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <motion.div
            className="h-full"
            style={{ width: progressWidth, background: 'linear-gradient(to right, #38bdf8, #0ea5e9)' }}
          />
        </div>
      </div>
    </div>
  );
}
