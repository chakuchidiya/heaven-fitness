export interface NavLink {
  label: string
  href: string
}

export interface Facility {
  icon: string
  name: string
  description: string
}

export interface Program {
  image: string
  title: string
  description: string
  duration: string
}

export interface Trainer {
  image: string
  name: string
  designation: string
  specialization: string
  bio: string
}

export interface MembershipPlan {
  name: string
  price: string
  period: string
  features: string[]
  recommended: boolean
}

export interface Testimonial {
  name: string
  role: string
  image: string
  content: string
  rating: number
}

export interface GalleryItem {
  image: string
  alt: string
}

export interface StatItem {
  value: number
  suffix: string
  label: string
}
