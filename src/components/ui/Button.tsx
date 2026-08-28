import { cn } from '@/lib/cn'
import { magneticHover } from '@/lib/motion'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'cta'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  onClick?: () => void
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-semibold tracking-wide uppercase transition-all duration-200 rounded-sm cursor-pointer'

  const variants = {
    primary:
      'bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-400 hover:to-brand-500 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02]',
    cta:
      'bg-gradient-to-r from-accent to-accent-600 text-surface-950 font-bold hover:from-accent-400 hover:to-accent-500 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02]',
    secondary:
      'border-2 border-white/20 text-white hover:border-accent hover:text-accent bg-transparent hover:bg-accent/5',
    ghost:
      'text-white/70 hover:text-white bg-transparent hover:bg-white/5',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-10 py-4 text-base',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...magneticHover}
        onClick={onClick}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      {...magneticHover}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
