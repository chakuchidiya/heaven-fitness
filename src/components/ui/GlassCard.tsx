import { cn } from '@/lib/cn'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cardHover } from '@/lib/motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

export function GlassCard({
  children,
  className,
  hover = true,
  gradient = false,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'relative rounded-lg overflow-hidden',
        'glass-sm',
        gradient && 'glass-gradient-border',
        className
      )}
      {...(hover ? cardHover : {})}
    >
      {children}
    </motion.div>
  )
}
