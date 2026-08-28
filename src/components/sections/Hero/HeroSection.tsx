import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { IMAGES } from '@/config/images'
import { ChevronDown, Dumbbell, Flame, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FloatingElement } from '@/components/ui/FloatingElement'

const headlineWords = ['BUILD', 'YOURSELF']

// Animated barbell SVG
function AnimatedBarbell() {
  return (
    <motion.div
      className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 0.15 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <svg width="180" height="24" viewBox="0 0 180 24" fill="none">
        {/* Left weight */}
        <motion.rect
          x="0" y="4" width="24" height="16" rx="2"
          stroke="currentColor" strokeWidth="2" className="text-brand-500"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        />
        <motion.rect
          x="28" y="6" width="16" height="12" rx="1"
          stroke="currentColor" strokeWidth="2" className="text-brand-500"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
        />
        {/* Bar */}
        <motion.line
          x1="44" y1="12" x2="136" y2="12"
          stroke="currentColor" strokeWidth="3" className="text-white/30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />
        {/* Right weight */}
        <motion.rect
          x="136" y="6" width="16" height="12" rx="1"
          stroke="currentColor" strokeWidth="2" className="text-brand-500"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.3, duration: 0.5 }}
        />
        <motion.rect
          x="156" y="4" width="24" height="16" rx="2"
          stroke="currentColor" strokeWidth="2" className="text-brand-500"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />
      </svg>
    </motion.div>
  )
}

// Weight plate decoration
function WeightPlate({ className = '', size = 80 }: { className?: string; size?: number }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1.8, duration: 1, type: 'spring' }}
    >
      <div
        className="rounded-full border-4 border-white/10 flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <div
          className="rounded-full border-2 border-white/5 flex items-center justify-center"
          style={{ width: size * 0.6, height: size * 0.6 }}
        >
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero.bg})` }}
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950/80 via-surface-950/60 to-surface-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-950/70 to-transparent" />
      </motion.div>

      {/* Gym Decorations */}
      <AnimatedBarbell />
      <WeightPlate className="right-12 top-1/4 hidden lg:block" size={100} />
      <WeightPlate className="right-32 bottom-1/4 hidden lg:block" size={60} />

      {/* Floating Decorative Elements */}
      <FloatingElement className="top-1/4 left-[10%] w-2 h-2 bg-accent/40 rounded-full" delay={0} />
      <FloatingElement className="top-1/3 right-[15%] w-3 h-3 bg-brand-500/30 rounded-full" delay={2} />
      <FloatingElement className="bottom-1/3 left-[20%] w-1.5 h-1.5 bg-accent/30 rounded-full" delay={1} />
      <FloatingElement className="top-[60%] right-[10%] w-2.5 h-2.5 bg-brand-500/25 rounded-full" delay={3} />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        style={{ opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-sm text-xs font-heading tracking-[0.2em] uppercase text-accent">
            <Dumbbell size={14} className="animate-pulse" />
            Premium Training Experience
          </span>
        </motion.div>

        {/* Headline - Word by word reveal */}
        <div className="mb-6">
          {headlineWords.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] leading-[0.85] tracking-tight text-white uppercase"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5 + i * 0.12,
                  ease: [0.77, 0, 0.175, 1] as [number, number, number, number],
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-white/60 max-w-lg font-body leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          आजचा घाम, उद्याचा अभिमान.<br />Today's sweat, tomorrow's pride.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Button variant="cta" size="lg" href="#membership">
            <Dumbbell size={18} className="mr-2" />
            Join Now
          </Button>
          <Button variant="secondary" size="lg" href="#about">
            Explore Our Gym
          </Button>
        </motion.div>

        {/* Stats preview */}
        <motion.div
          className="absolute bottom-24 left-8 hidden lg:flex flex-col gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 glass-sm px-4 py-2 rounded-lg">
            <Flame size={16} className="text-brand-500" />
            <span className="text-xs font-heading text-white/60">500+ Members</span>
          </div>
          <div className="flex items-center gap-3 glass-sm px-4 py-2 rounded-lg">
            <Trophy size={16} className="text-accent" />
            <span className="text-xs font-heading text-white/60">5+ Years</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-heading tracking-widest uppercase text-white/40">
              Scroll
            </span>
            <ChevronDown size={20} className="text-white/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
