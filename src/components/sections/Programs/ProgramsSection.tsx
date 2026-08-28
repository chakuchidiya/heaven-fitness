import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TextReveal } from '@/components/ui/TextReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IMAGES } from '@/config/images'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    image: IMAGES.programs[0].img,
    title: 'Personal Training',
    description: 'One-on-one sessions with certified trainers tailored to your goals.',
    duration: '60 min',
  },
  {
    image: IMAGES.programs[1].img,
    title: 'Weight Loss',
    description: 'Science-backed programs designed to torch fat and build lean muscle.',
    duration: '45 min',
  },
  {
    image: IMAGES.programs[2].img,
    title: 'Muscle Building',
    description: 'Progressive overload training for serious mass and definition.',
    duration: '75 min',
  },
  {
    image: IMAGES.programs[3].img,
    title: 'Strength & Conditioning',
    description: 'Athletic performance training for power, speed, and endurance.',
    duration: '60 min',
  },
  {
    image: IMAGES.programs[4].img,
    title: 'Functional Training',
    description: 'Real-world movement patterns for everyday strength and mobility.',
    duration: '50 min',
  },
  {
    image: IMAGES.programs[5].img,
    title: 'Group Classes',
    description: 'High-energy group sessions including HIIT, Zumba, and more.',
    duration: '45 min',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export function ProgramsSection() {
  return (
    <section id="programs" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          label="Training Programs"
          title="FIND YOUR PATH"
          description="From beginner to advanced, we have the programs and expertise to guide your transformation."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={itemVariants}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/30 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-sm text-xs font-heading tracking-wider text-white/70">
                  {program.duration}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-sm text-white/40 font-body leading-relaxed mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-brand-500 text-sm font-heading tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-lg border border-white/0 group-hover:border-brand-500/20 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
