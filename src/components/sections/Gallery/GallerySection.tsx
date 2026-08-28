import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IMAGES } from '@/config/images'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.gallery.length)
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.gallery.length) % IMAGES.gallery.length)
  }

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(goNext, 4000)
    return () => clearInterval(timer)
  }, [])

  // Get visible slides (show 3 on desktop, 2 on tablet, 1 on mobile)
  const getVisibleSlides = () => {
    const slides = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % IMAGES.gallery.length
      slides.push({ ...IMAGES.gallery[index], originalIndex: index })
    }
    return slides
  }

  return (
    <section id="gallery" className="section-padding overflow-hidden">
      <div className="container-wide">
        <SectionHeading
          label="Gallery"
          title="OUR SPACE"
          description="Take a virtual tour of Heaven Fitness and see what awaits you."
        />

        {/* Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full glass-sm flex items-center justify-center text-white/60 hover:text-white hover:border-accent/30 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full glass-sm flex items-center justify-center text-white/60 hover:text-white hover:border-accent/30 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slides Container */}
          <div ref={sliderRef} className="overflow-hidden mx-8">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${currentIndex * (100 / 3)}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {IMAGES.gallery.map((item, i) => (
                <motion.div
                  key={i}
                  className="min-w-[calc(33.333%-11px)] md:min-w-[calc(33.333%-11px)] sm:min-w-[calc(50%-8px)] min-w-full flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div
                    className="relative rounded-lg overflow-hidden cursor-pointer group aspect-[4/3]"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-surface-950/0 group-hover:bg-surface-950/40 transition-all duration-500 flex items-center justify-center">
                      <span className="text-white font-heading text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {item.alt}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {IMAGES.gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'bg-accent w-6'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-surface-950/95 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex(
                  (selectedIndex - 1 + IMAGES.gallery.length) % IMAGES.gallery.length
                )
              }}
            >
              <ChevronLeft size={40} />
            </button>
            <button
              className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex((selectedIndex + 1) % IMAGES.gallery.length)
              }}
            >
              <ChevronRight size={40} />
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={IMAGES.gallery[selectedIndex].img}
              alt={IMAGES.gallery[selectedIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-heading text-sm tracking-wider">
                {IMAGES.gallery[selectedIndex].alt}
              </p>
              <p className="text-white/30 text-xs mt-1">
                {selectedIndex + 1} / {IMAGES.gallery.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
