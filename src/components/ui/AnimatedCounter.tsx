import { useInViewCounter } from '@/hooks/useInViewCounter'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
}

export function AnimatedCounter({ value, suffix = '', label }: AnimatedCounterProps) {
  const { count, ref } = useInViewCounter(value)

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none">
        <span className="font-feature-tabular">{count}</span>
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="mt-3 font-heading text-sm md:text-base text-white/50 tracking-wide uppercase">
        {label}
      </p>
    </div>
  )
}
