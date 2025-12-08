import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import ProductGrid from '@/components/ProductGrid'
import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <ProductGrid />
      <Testimonials />
      <CTA />
    </div>
  )
}
