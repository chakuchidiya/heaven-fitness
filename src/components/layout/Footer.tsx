import { motion } from 'framer-motion'
import { NAV_LINKS, GYM_INFO } from '@/config/constants'
import { Globe, MessageCircle, Share2, AtSign } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const socialLinks = [
  { icon: AtSign, href: 'https://www.instagram.com/the_heaven_fitness/?hl=en', label: 'Instagram' },
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: Share2, href: '#', label: 'Youtube' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
]

export function Footer() {
  return (
    <footer className="bg-surface-900 border-t border-white/5">
      <div className="container-wide px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <ScrollReveal>
            <div>
              <a href="#" className="flex items-center gap-3 mb-6">
                <img src="/logo.jpg" alt="Heaven Fitness Logo" className="h-12 w-auto" />
                <span className="font-logo text-xl tracking-wide text-white">
                  Heaven Fitness
                </span>
              </a>
              <p className="text-white/40 font-body text-sm leading-relaxed mb-6">
                {GYM_INFO.tagline}. Your journey to a stronger, healthier self starts here.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full glass-sm flex items-center justify-center text-white/40 hover:text-brand-500 hover:border-brand-500/30 transition-all duration-300"
                    whileHover={{ y: -3 }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="font-heading text-sm font-semibold tracking-wider uppercase text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-brand-500 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="font-heading text-sm font-semibold tracking-wider uppercase text-white mb-6">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li>{GYM_INFO.phone}</li>
                <li>{GYM_INFO.email}</li>
                <li className="leading-relaxed">{GYM_INFO.address}</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Hours */}
          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="font-heading text-sm font-semibold tracking-wider uppercase text-white mb-6">
                Opening Hours
              </h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li>
                  <span className="text-white/60">Mon - Fri:</span>{' '}
                  {GYM_INFO.hours.weekdays}
                </li>
                <li>
                  <span className="text-white/60">Saturday:</span>{' '}
                  {GYM_INFO.hours.saturday}
                </li>
                <li>
                  <span className="text-white/60">Sunday:</span>{' '}
                  {GYM_INFO.hours.sunday}
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-6 md:px-8 lg:px-12 py-6">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {GYM_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
