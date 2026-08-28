import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Member since 2021',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    content:
      'Heaven Fitness completely transformed my life. I lost 25kg in 8 months with the help of their incredible trainers. The atmosphere here is unmatched — every session feels like a privilege.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Member since 2022',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    content:
      'The group classes are phenomenal. Sarah\'s HIIT sessions push you to your limits while keeping it fun. I\'ve never been more consistent with my fitness routine.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Member since 2020',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    content:
      'As a competitive powerlifter, I need serious equipment and coaching. Heaven Fitness delivers on both fronts. Marcus helped me add 50kg to my deadlift in one year.',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    role: 'Member since 2023',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    content:
      'The yoga and recovery sessions are a game-changer. Elena\'s classes have improved my flexibility and reduced my chronic back pain significantly. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Member since 2021',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    content:
      'Best gym in Mumbai, hands down. The facilities are world-class, the trainers are elite, and the community keeps you accountable. This place is special.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <section className="section-padding bg-surface-900/50 overflow-hidden">
      <div className="container-wide">
        <SectionHeading
          label="Testimonials"
          title="WHAT OUR MEMBERS SAY"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <div className="absolute -top-4 left-0 md:left-8 text-brand-500/20">
            <Quote size={80} />
          </div>

          {/* Testimonial */}
          <div className="relative min-h-[320px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full text-center px-4 md:px-16"
              >
                {/* Avatar */}
                <div className="mb-6 flex justify-center">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-500/30"
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-500 text-brand-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-white/70 font-body leading-relaxed mb-8 italic">
                  "{testimonials[current].content}"
                </p>

                {/* Name */}
                <h4 className="font-heading text-lg font-semibold text-white">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-brand-500 font-heading tracking-wider">
                  {testimonials[current].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-sm flex items-center justify-center text-white/40 hover:text-white hover:border-brand-500/30 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-brand-500'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-sm flex items-center justify-center text-white/40 hover:text-white hover:border-brand-500/30 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
