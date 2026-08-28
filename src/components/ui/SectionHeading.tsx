import { TextReveal } from './TextReveal'
import { ScrollReveal } from './ScrollReveal'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-4 md:mb-6 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {label && (
        <ScrollReveal>
          <span className="inline-block font-heading text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            {label}
          </span>
        </ScrollReveal>
      )}
      <TextReveal>
        <h2
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight uppercase ${
            light ? 'text-white' : 'text-white'
          }`}
        >
          {title}
        </h2>
      </TextReveal>
      {description && (
        <TextReveal delay={0.1}>
          <p className="mt-4 text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-body leading-relaxed">
            {description}
          </p>
        </TextReveal>
      )}
    </div>
  )
}
