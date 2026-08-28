import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TextReveal } from '@/components/ui/TextReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { GYM_INFO } from '@/config/constants'
import { IMAGES } from '@/config/images'
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: GYM_INFO.phone,
    href: `tel:${GYM_INFO.phone}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: `https://wa.me/${GYM_INFO.whatsapp}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: GYM_INFO.email,
    href: `mailto:${GYM_INFO.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: GYM_INFO.address,
    href: '#',
  },
  {
    icon: Navigation,
    label: 'Get there',
    value: '15 mins',
    href: 'https://www.google.com/maps/dir/?api=1&destination=Heaven+Fitness+Dombivli',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          label="Contact Us"
          title="GET IN TOUCH"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Info + CTA */}
          <div>
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 group p-3 rounded-lg glass-sm hover:border-accent/20 transition-all duration-300"
                    target={item.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      item.label === 'WhatsApp' ? 'bg-accent/10 group-hover:bg-accent/20' : 'bg-brand-500/10 group-hover:bg-brand-500/20'
                    }`}>
                      <item.icon size={18} className={item.label === 'WhatsApp' ? 'text-accent' : 'text-brand-500'} />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 font-heading tracking-wider uppercase">
                        {item.label}
                      </p>
                      <p className="text-sm text-white/70 font-body group-hover:text-white transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Hours */}
            <ScrollReveal delay={0.4}>
              <div className="p-4 rounded-lg glass-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} className="text-brand-500" />
                  <h4 className="font-heading text-xs font-semibold tracking-wider uppercase text-white">
                    Opening Hours
                  </h4>
                </div>
                <div className="space-y-1 text-sm font-body">
                  <div className="flex justify-between text-white/50">
                    <span>Mon - Sat</span>
                    <span>{GYM_INFO.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Sunday</span>
                    <span>{GYM_INFO.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Button */}
            <ScrollReveal delay={0.5}>
              <div className="mt-6">
                <Button variant="cta" size="lg" href="#membership">
                  Join Now
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Map */}
          <ScrollReveal direction="right">
            <div className="rounded-lg overflow-hidden glass-sm h-full min-h-[400px] relative">
              <motion.div
                className="w-full h-full"
                initial={{ scale: 1.3, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <iframe
                  src={IMAGES.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Heaven Fitness Location"
                  className="w-full h-full min-h-[400px]"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
