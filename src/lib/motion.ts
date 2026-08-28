import type { Transition } from 'framer-motion'

const cubicEase = [0.22, 1, 0.36, 1] as const
const smoothEase = [0.77, 0, 0.175, 1] as const

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: cubicEase as unknown as number[] },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: cubicEase as unknown as number[] },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: cubicEase as unknown as number[] },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: cubicEase as unknown as number[] },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicEase as unknown as number[] },
  },
}

export const magneticHover = {
  whileHover: { scale: 1.03, y: -2 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
}

export const cardHover = {
  whileHover: {
    y: -8,
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
  },
}

export const textRevealLine = {
  initial: { y: '110%', opacity: 0 },
  animate: { y: '0%', opacity: 1 },
  transition: { duration: 0.8, ease: smoothEase as unknown as number[] },
}
