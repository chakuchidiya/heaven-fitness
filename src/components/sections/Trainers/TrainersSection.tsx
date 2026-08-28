import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IMAGES } from '@/config/images'
import { AtSign, Award, Star, Flame } from 'lucide-react'

const trainers = [
  {
    image: IMAGES.trainers[0].img,
    name: 'Marcus Chen',
    designation: 'Head Trainer',
    specialization: 'Strength & Conditioning',
    bio: '10+ years of experience in competitive powerlifting and athletic performance training.',
    experience: '10+',
    clients: '200+',
    rating: 4.9,
  },
  {
    image: IMAGES.trainers[1].img,
    name: 'Sarah Williams',
    designation: 'Lead Instructor',
    specialization: 'HIIT & Functional Training',
    bio: 'Former CrossFit competitor with a passion for high-intensity workouts.',
    experience: '8+',
    clients: '150+',
    rating: 4.8,
  },
  {
    image: IMAGES.trainers[2].img,
    name: 'David Park',
    designation: 'Olympic Lifting Coach',
    specialization: 'Olympic Lifting',
    bio: 'Certified Olympic lifting coach with national-level competition experience.',
    experience: '12+',
    clients: '100+',
    rating: 4.9,
  },
  {
    image: IMAGES.trainers[3].img,
    name: 'Elena Rodriguez',
    designation: 'Wellness Director',
    specialization: 'Yoga & Mobility',
    bio: 'RYT-500 certified yoga instructor specializing in recovery and flexibility.',
    experience: '6+',
    clients: '180+',
    rating: 5.0,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

// Animated progress ring
function ProgressRing({ progress = 75, size = 40, strokeWidth = 3 }: { progress?: number; size?: number; strokeWidth?: number }) {
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

export function TrainersSection() {
  return (
    <section id="trainers" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          label="Our Trainers"
          title="ELITE COACHES"
          description="World-class trainers dedicated to unlocking your full potential."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.name}
              variants={itemVariants}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden">
                <motion.img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/20 to-transparent" />

                {/* Certification badge */}
                <motion.div
                  className="absolute top-4 left-4 glass-md px-2 py-1 rounded-lg flex items-center gap-1.5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Award size={12} className="text-accent" />
                  <span className="text-[10px] font-heading text-white/70">Certified</span>
                </motion.div>

                {/* Rating */}
                <motion.div
                  className="absolute top-4 right-4 glass-md px-2 py-1 rounded-lg flex items-center gap-1"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Star size={10} className="text-brand-500 fill-brand-500" />
                  <span className="text-[10px] font-heading text-white/70">{trainer.rating}</span>
                </motion.div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-surface-950/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <motion.div
                    initial={false}
                    className="translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                  >
                    <p className="text-sm text-white/60 font-body leading-relaxed mb-4">
                      {trainer.bio}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex justify-center gap-4 mb-4">
                      <div className="text-center">
                        <div className="font-display text-lg text-accent">{trainer.experience}</div>
                        <div className="text-[9px] text-white/40 uppercase">Years</div>
                      </div>
                      <div className="text-center">
                        <div className="font-display text-lg text-accent">{trainer.clients}</div>
                        <div className="text-[9px] text-white/40 uppercase">Clients</div>
                      </div>
                    </div>

                    <a
                      href="https://www.instagram.com/the_heaven_fitness/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-400 transition-colors"
                    >
                      <AtSign size={18} />
                      <span className="text-sm font-heading tracking-wider">Follow</span>
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 glass-sm">
                <h3 className="font-heading text-lg font-semibold text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-sm text-accent font-heading tracking-wider mb-1">
                  {trainer.designation}
                </p>
                <p className="text-xs text-white/30 font-heading tracking-wider uppercase">
                  {trainer.specialization}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
