import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Dumbbell, Users, Calendar, TrendingUp } from 'lucide-react'

const stats = [
  { value: 500, suffix: '+', label: 'Active Members', icon: Users },
  { value: 10, suffix: '+', label: 'Certified Trainers', icon: Dumbbell },
  { value: 5, suffix: '+', label: 'Years of Experience', icon: Calendar },
  { value: 1000, suffix: '+', label: 'Transformations', icon: TrendingUp },
]

// Animated barbell between stats
function AnimatedBarbell() {
  return (
    <div className="hidden lg:flex items-center justify-center col-span-4 mt-8">
      <div className="flex items-center gap-2">
        <motion.div
          className="w-4 h-8 bg-brand-500/30 rounded-sm"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
        <motion.div
          className="w-3 h-12 bg-brand-500/40 rounded-sm"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        />
        <motion.div
          className="w-32 h-1.5 bg-gradient-to-r from-brand-500 to-accent rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
        <motion.div
          className="w-3 h-12 bg-accent/40 rounded-sm"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        />
        <motion.div
          className="w-4 h-8 bg-accent/30 rounded-sm"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        />
      </div>
    </div>
  )
}

export function StatisticsSection() {
  return (
    <section className="section-padding bg-surface-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          label="Our Impact"
          title="NUMBERS SPEAK LOUDER"
          description="Join a community of dedicated individuals who have transformed their lives through fitness."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <stat.icon size={22} className="text-accent" />
                </motion.div>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <AnimatedBarbell />
      </div>
    </section>
  )
}
