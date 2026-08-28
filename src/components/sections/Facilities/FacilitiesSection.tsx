import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IMAGES } from '@/config/images'
import { Dumbbell, Heart, Zap, Users, Sparkles, Trophy } from 'lucide-react'

const facilities = [
  {
    icon: Dumbbell,
    title: 'Strength Training Zone',
    description: 'Premium machines and free weights for serious strength gains.',
    metric: '50+',
    metricLabel: 'Equipment',
  },
  {
    icon: Heart,
    title: 'Cardio Theater',
    description: 'State-of-the-art cardio equipment with immersive entertainment.',
    metric: '30+',
    metricLabel: 'Machines',
  },
  {
    icon: Zap,
    title: 'Functional Training',
    description: 'Dynamic functional zones for athletic performance.',
    metric: '2000',
    metricLabel: 'Sq Ft',
  },
  {
    icon: Users,
    title: 'Group Fitness Studio',
    description: 'High-energy group classes led by expert instructors.',
    metric: '15+',
    metricLabel: 'Classes/Week',
  },
  {
    icon: Sparkles,
    title: 'Yoga & Recovery',
    description: 'Dedicated space for mindfulness, flexibility, and recovery.',
    metric: '10+',
    metricLabel: 'Sessions',
  },
  {
    icon: Trophy,
    title: 'Olympic Lifting Platform',
    description: 'Professional-grade platforms for serious lifters.',
    metric: '4',
    metricLabel: 'Platforms',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export function FacilitiesSection() {
  return (
    <section id="facilities" className="section-padding bg-surface-900/50">
      <div className="container-wide">
        <SectionHeading
          label="Our Facilities"
          title="GYM + CARDIO + CROSSFIT"
          description="Every inch of Heaven Fitness is designed to elevate your training experience."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg glass-sm hover:border-accent/20 transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={IMAGES.facilities[i].img}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/40 to-transparent" />
                
                {/* Metric badge */}
                <motion.div
                  className="absolute top-4 right-4 glass-md px-3 py-1.5 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="font-display text-lg text-accent leading-none">{facility.metric}</div>
                  <div className="text-[10px] text-white/50 font-heading uppercase">{facility.metricLabel}</div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-500 group-hover:scale-110">
                  <facility.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  {facility.title}
                </h3>
                <p className="text-sm text-white/40 font-body leading-relaxed">
                  {facility.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_60px_rgba(34,197,94,0.05)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
