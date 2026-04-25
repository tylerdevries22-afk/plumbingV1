import { useScroll, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';

export interface ScrollScrub {
  scrollYProgress: MotionValue<number>;
  smoothProgress: MotionValue<number>;
  containerRef: React.RefObject<HTMLDivElement>;
}

export function useScrollScrub(): ScrollScrub {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.001 });
  return { scrollYProgress, smoothProgress, containerRef };
}
