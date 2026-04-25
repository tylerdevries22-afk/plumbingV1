import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
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
    title: 'Your plumbing system is working… until it isn\'t.',
    body: 'Hidden behind walls and beneath floors, your pipes are under constant pressure. Most failures start as tiny warnings — weeks before disaster strikes.',
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
    body: 'Our technicians use acoustic sensors, thermal cameras, and HD sewer scopes to pinpoint problems invisible to the naked eye. No guesswork. No unnecessary demolition.',
    accent: '#f59e0b',
    bgImage: ASSETS.tools,
    featureImage: ASSETS.plumber_working,
  },
  {
    number: '04',
    label: 'Expert Repair',
    title: 'Every repair done to code. Guaranteed.',
    body: 'Licensed, permitted, photographed. We don\'t just fix the leak — we document the cause, the repair, and the test results. Full transparency from first call to final inspection.',
    accent: '#a855f7',
    bgImage: ASSETS.plumber_working,
    featureImage: ASSETS.pipes_copper,
  },
  {
    number: '05',
    label: 'Clean Home. Peace of Mind.',
    title: 'Leave it cleaner than we found it.',
    body: 'We wear shoe covers. We lay drop cloths. When we\'re done, you\'d never know we were there — except your water pressure is perfect and your pipes are warranted for 10 years.',
    accent: '#22c55e',
    bgImage: ASSETS.kitchen,
    featureImage: ASSETS.bathroom,
  },
];

function ChapterView({
  chapter,
  index,
  scrollYProgress,
}: {
  chapter: Chapter;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index * 0.2;
  const end = start + 0.2;

  const bgOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.04, end - 0.04, end],
    [0, 1, 1, 0]
  );
  const bgScale = useTransform(scrollYProgress, [start, end], [1.05, 1.0]);

  const contentY = useTransform(scrollYProgress, [start, start + 0.08], [60, 0]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.06, end],
    [0, 1, 1, 0]
  );

  const imageX = useTransform(scrollYProgress, [start, start + 0.1], [80, 0]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.06, end],
    [0, 1, 1, 0]
  );

  return (
    <div className="absolute inset-0">
      {/* Full-screen background image */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: bgOpacity }}
      >
        <motion.img
          src={chapter.bgImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ scale: bgScale }}
        />
        {/* Dark + blur overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(2,8,23,0.82)',
            backdropFilter: 'blur(2px)',
          }}
        />
      </motion.div>

      {/* Chapter number watermark */}
      <div
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 font-black select-none pointer-events-none"
        style={{
          fontSize: 'clamp(6rem, 15vw, 14rem)',
          color: chapter.accent,
          opacity: 0.06,
          lineHeight: 1,
        }}
      >
        {chapter.number}
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-8 lg:px-16">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left panel */}
          <motion.div style={{ y: contentY, opacity: contentOpacity }}>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border"
              style={{
                color: chapter.accent,
                borderColor: `${chapter.accent}35`,
                backgroundColor: `${chapter.accent}12`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: chapter.accent }}
              />
              {chapter.label}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              {chapter.title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg mb-8">
              {chapter.body}
            </p>

            <a
              href="tel:5555555555"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: chapter.accent }}
            >
              Get help now
              <span style={{ color: chapter.accent }}>→</span>
            </a>
          </motion.div>

          {/* Right panel — feature image */}
          <motion.div
            style={{ x: imageX, opacity: imageOpacity }}
            className="hidden lg:block"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07), 0 0 60px ${chapter.accent}18`,
              }}
            >
              <img
                src={chapter.featureImage}
                alt={chapter.label}
                className="w-full h-72 lg:h-96 object-cover"
              />
              {/* Glass overlay on image */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${chapter.accent}08 0%, transparent 60%)`,
                }}
              />
              {/* Accent border */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  border: `1px solid ${chapter.accent}25`,
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ChapterDot({
  index,
  scrollYProgress,
  accent,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
  accent: string;
}) {
  const start = index * 0.2;
  const mid = start + 0.1;
  const end = start + 0.2;
  const scale = useTransform(scrollYProgress, [start, mid, end], [1, 1.6, 1]);
  const opacity = useTransform(scrollYProgress, [start, mid, end], [0.3, 1, 0.3]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className="w-2 h-2 rounded-full"
      title={`Chapter ${index + 1}`}
    >
      <div
        className="w-full h-full rounded-full"
        style={{ backgroundColor: accent }}
      />
    </motion.div>
  );
}

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
      style={{ height: '600vh' }}
    >
      <div
        className="sticky top-0 overflow-hidden bg-navy-950"
        style={{ height: '100vh' }}
      >
        {/* Chapters — stacked absolutely */}
        <div className="absolute inset-0">
          {CHAPTERS.map((ch, i) => (
            <ChapterView
              key={i}
              chapter={ch}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Right edge — chapter indicator dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {CHAPTERS.map((ch, i) => (
            <ChapterDot
              key={i}
              index={i}
              scrollYProgress={scrollYProgress}
              accent={ch.accent}
            />
          ))}
        </div>

        {/* Bottom progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-white/10">
          <motion.div
            className="h-full bg-electric-400"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Section label top-center */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
          <p className="text-electric-400 text-xs font-semibold uppercase tracking-widest opacity-70">
            The Tyrooter Process
          </p>
        </div>
      </div>
    </div>
  );
}
