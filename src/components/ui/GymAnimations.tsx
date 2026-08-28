import { motion, useScroll, useTransform } from 'framer-motion'
import { Dumbbell, Heart, Flame, Zap, Target, Trophy } from 'lucide-react'

// Dumbbell that moves up as you scroll
export function DumbbellScroll() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['100vh', '-100vh'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <motion.div
      className="fixed right-8 top-0 z-10 pointer-events-none opacity-10 hidden xl:block"
      style={{ y, rotate }}
    >
      <Dumbbell size={60} className="text-brand-500" strokeWidth={1.5} />
    </motion.div>
  )
}

// Animated weight plates in background
export function WeightPlateDecor({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <motion.div
        className="w-32 h-32 rounded-full border-4 border-white/5 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-20 h-20 rounded-full border-4 border-white/5" />
        <div className="absolute w-4 h-4 rounded-full bg-white/5" />
      </motion.div>
    </div>
  )
}

// Floating gym icons
export function FloatingGymIcons() {
  const icons = [
    { Icon: Dumbbell, delay: 0, x: '5%', y: '20%', size: 24 },
    { Icon: Heart, delay: 1, x: '90%', y: '30%', size: 20 },
    { Icon: Flame, delay: 2, x: '8%', y: '60%', size: 22 },
    { Icon: Zap, delay: 0.5, x: '85%', y: '70%', size: 18 },
    { Icon: Target, delay: 1.5, x: '12%', y: '85%', size: 20 },
    { Icon: Trophy, delay: 2.5, x: '88%', y: '15%', size: 22 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block">
      {icons.map(({ Icon, delay, x, y, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-white/5"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay,
            ease: 'easeInOut',
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  )
}

// Pulsing heartbeat line
export function HeartbeatLine() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none opacity-20">
      <svg
        viewBox="0 0 1200 100"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 L200,50 L250,20 L300,80 L350,30 L400,70 L450,50 L1200,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-500"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

// Animated muscle flex icon
export function MuscleFlex({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`inline-flex ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, -5, 5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-500">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    </motion.div>
  )
}

// Barbell loading animation
export function BarbellLoader({ progress = 0 }: { progress?: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="w-3 h-8 bg-white/10 rounded-sm" />
      <div className="w-2 h-12 bg-white/10 rounded-sm" />
      <motion.div
        className="w-16 h-2 bg-brand-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <div className="w-2 h-12 bg-white/10 rounded-sm" />
      <div className="w-3 h-8 bg-white/10 rounded-sm" />
    </div>
  )
}

// Rep counter animation
export function RepCounter({ reps = 12, label = 'REPS' }: { reps?: number; label?: string }) {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex gap-1">
        {Array.from({ length: reps }).map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-brand-500/30"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          />
        ))}
      </div>
      <span className="font-display text-sm text-white/40">{label}</span>
    </motion.div>
  )
}

// Animated progress ring
export function ProgressRing({ 
  progress = 75, 
  size = 60, 
  strokeWidth = 4 
}: { 
  progress?: number
  size?: number
  strokeWidth?: number 
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        className="text-accent"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
    </svg>
  )
}
