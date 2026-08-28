import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TextReveal } from '@/components/ui/TextReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IMAGES } from '@/config/images'
import { Target, Heart, Users } from 'lucide-react'

const philosophy = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    description: 'Every workout is designed with intention. We help you set clear goals and crush them with precision.',
  },
  {
    icon: Heart,
    title: 'Holistic Wellness',
    description: 'Fitness is more than muscle. We nurture mind, body, and spirit for complete transformation.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'You are never alone in your journey. Our community lifts you up when you need it most.',
  },
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <section id="about" ref={ref} className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-500/5 to-transparent pointer-events-none" />

      <div className="container-wide">
        <SectionHeading
          label="About Us"
          title="WHERE STRENGTH MEETS PURPOSE"
          description="Heaven Fitness is not just a gym — it's a movement. We believe that true strength comes from within, and our mission is to unlock the powerful, unstoppable version of you."
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden rounded-lg">
              <motion.div style={{ y: imgY }}>
                <img
                  src={IMAGES.about.story}
                  alt="Heaven Fitness Interior"
                  className="w-full h-[400px] md:h-[500px] object-cover scale-110"
                  loading="lazy"
                />
              </motion.div>
              {/* Overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 bg-brand-500" />
                  <span className="font-heading text-sm tracking-wider uppercase text-white/70">
                    Est. 2019
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Story */}
          <div>
            <TextReveal>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wide text-white mb-6">
                OUR STORY
              </h3>
            </TextReveal>
            <TextReveal delay={0.1}>
              <p className="text-white/50 font-body leading-relaxed mb-6">
                Founded in 2019, Heaven Fitness was born from a simple belief: everyone deserves access to a world-class training experience. What started as a passion project has grown into Mumbai's premier fitness destination.
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-white/50 font-body leading-relaxed mb-8">
                Our state-of-the-art facility spans over 15,000 sq ft, featuring cutting-edge equipment, dedicated training zones, and an atmosphere that ignites your competitive spirit. We don't just build bodies — we build champions.
              </p>
            </TextReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="font-display text-4xl text-accent">15K+</div>
                  <div className="font-heading text-xs tracking-wider uppercase text-white/40 mt-1">Sq Ft Facility</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-accent">24/7</div>
                  <div className="font-heading text-xs tracking-wider uppercase text-white/40 mt-1">Access Available</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-accent">50+</div>
                  <div className="font-heading text-xs tracking-wider uppercase text-white/40 mt-1">Equipment Types</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophy.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <motion.div
                className="p-8 rounded-lg glass-sm group hover:border-accent/20 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-white/40 font-body leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
