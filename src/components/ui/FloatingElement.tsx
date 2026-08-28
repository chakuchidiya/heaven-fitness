import { motion } from 'framer-motion'

interface FloatingElementProps {
  className?: string
  delay?: number
  duration?: number
}

export function FloatingElement({
  className = '',
  delay = 0,
  duration = 6,
}: FloatingElementProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  )
}
