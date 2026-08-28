import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/Hero/HeroSection'
import { AboutSection } from '@/components/sections/About/AboutSection'
import { FacilitiesSection } from '@/components/sections/Facilities/FacilitiesSection'
import { ProgramsSection } from '@/components/sections/Programs/ProgramsSection'
import { StatisticsSection } from '@/components/sections/Statistics/StatisticsSection'
import { TrainersSection } from '@/components/sections/Trainers/TrainersSection'
import { MembershipSection } from '@/components/sections/Membership/MembershipSection'
import { GallerySection } from '@/components/sections/Gallery/GallerySection'
import { TestimonialsSection } from '@/components/sections/Testimonials/TestimonialsSection'
import { ContactSection } from '@/components/sections/Contact/ContactSection'
import { DumbbellScroll, FloatingGymIcons } from '@/components/ui/GymAnimations'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-950 text-white overflow-x-hidden">
      <DumbbellScroll />
      <FloatingGymIcons />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FacilitiesSection />
        <ProgramsSection />
        <StatisticsSection />
        <TrainersSection />
        <MembershipSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
