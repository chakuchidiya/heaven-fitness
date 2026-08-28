import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  return (
    <div className={`overflow-hidden ${className || ''}`}>
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.77, 0, 0.175, 1] as [number, number, number, number],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
