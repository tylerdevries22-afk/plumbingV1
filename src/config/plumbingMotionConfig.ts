export const SPRING_GENTLE = { stiffness: 60, damping: 25 };
export const SPRING_SNAPPY = { stiffness: 200, damping: 40 };
export const SPRING_SLOW   = { stiffness: 30, damping: 20 };

export const CHAPTERS = {
  HIDDEN:    [0,    0.15],
  LEAK:      [0.15, 0.30],
  DIAGNOSE:  [0.30, 0.45],
  ESCALATE:  [0.45, 0.60],
  REPAIR:    [0.60, 0.75],
  INSTALL:   [0.75, 0.85],
  TRUST:     [0.85, 0.95],
  CTA:       [0.95, 1.00],
} as const;
