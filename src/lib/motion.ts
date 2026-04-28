import type { Transition, Variants } from "framer-motion";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

export const motionTransition = {
  smooth: {
    duration: 0.5,
    ease: easeOut,
  } satisfies Transition,
  featured: {
    duration: 0.6,
    ease: easeOut,
  } satisfies Transition,
};

export function staggerContainer(staggerChildren = 0.08): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren },
    },
  };
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: motionTransition.smooth,
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: motionTransition.featured,
  },
};
