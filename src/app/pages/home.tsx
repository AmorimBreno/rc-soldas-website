import HeroSection from '../components/heroSection/heroSection'
import ClientSection from '../components/clientsSection/clientsSection'
import SoldasSection from '../components/soldasSection/soldasSection'
import CarrouselSection from '../components/materialsSection/materialsSection'
import ContactSection from '../components/contactSection/contactSection'

export function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-black py-24 text-white transition-all duration-700 md:py-0">
      <HeroSection />
      <ClientSection />
      <SoldasSection />
      <CarrouselSection />
      <ContactSection />
    </main>
  )
}
