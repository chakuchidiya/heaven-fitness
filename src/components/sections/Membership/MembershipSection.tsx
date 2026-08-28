import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Monthly',
    price: '₹1999/-',
    period: 'per month',
    features: [
      'Full gym access',
      'Locker room access',
      'Basic fitness assessment',
      'WiFi included',
    ],
    recommended: false,
  },
  {
    name: 'Quarterly',
    price: '₹3999/-',
    period: 'per quarter',
    features: [
      'Full gym access',
      'Locker room access',
      'Monthly fitness assessment',
      '2 PT sessions',
      'Nutrition guidance',
    ],
    recommended: false,
  },
  {
    name: 'Half-Yearly',
    price: '₹6999/-',
    period: 'per 6 months',
    features: [
      'Full gym access',
      'Premium locker',
      'Weekly assessments',
      '4 PT sessions/month',
      'Custom diet plan',
      'Recovery sessions',
    ],
    recommended: true,
  },
  {
    name: 'Yearly',
    price: '₹11999/-',
    period: 'per year',
    features: [
      'Full gym access',
      'Premium locker',
      'Daily assessments',
      'Unlimited PT sessions',
      'Custom diet plan',
      'Recovery sessions',
      'Guest passes',
    ],
    recommended: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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

export function MembershipSection() {
  return (
    <section id="membership" className="section-padding bg-surface-900/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="Membership"
          title="INVEST IN YOURSELF"
          description="Choose the plan that fits your goals. Every membership includes full facility access."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative rounded-lg p-8 flex flex-col ${
                plan.recommended
                  ? 'glass-md border-accent/30 shadow-[0_0_40px_rgba(34,197,94,0.15)]'
                  : 'glass-sm'
              }`}
              whileHover={{ y: -8 }}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-accent to-accent-600 text-xs font-heading font-semibold tracking-wider uppercase text-surface-950 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="font-display text-4xl text-white mb-1">
                  {plan.price}
                </div>
                <p className="text-sm text-white/30 font-body">{plan.period}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.recommended ? 'text-accent' : 'text-white/30'
                      }`}
                    />
                    <span className="text-sm text-white/50 font-body">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.recommended ? 'cta' : 'secondary'}
                size="md"
                className="w-full"
                href="#contact"
              >
                Get Started
              </Button>

              {/* Animated glow for recommended */}
              {plan.recommended && (
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(34,197,94,0.1)',
                      '0 0 40px rgba(34,197,94,0.2)',
                      '0 0 20px rgba(34,197,94,0.1)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
