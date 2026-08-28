import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/config/constants'
import { Button } from '@/components/ui/Button'

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-surface-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
      initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
      exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="flex flex-col items-center gap-8">
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="font-display text-4xl sm:text-5xl text-white hover:text-accent transition-colors duration-300 uppercase tracking-wide"
            onClick={onClose}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4"
        >
          <Button
            variant="cta"
            size="lg"
            href="#membership"
            onClick={onClose}
          >
            Join Now
          </Button>
        </motion.div>
      </nav>
    </motion.div>
  )
}
