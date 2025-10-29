import { useState } from 'react'
import { useTheme } from '../hooks/use-theme'
import { FormsData } from '../types/formsData'
import ContactMeForms from '../components/ContactMeForms'
import HeroSection from '../components/heroSection/heroSection'
import ClientSection from '../components/clientsSection/clientsSection'
import SoldasSection from '../components/soldasSection/soldasSection'
import CarrouselSection from '../components/carrouselSection/carrouselSection'

export function Home() {
  const { theme } = useTheme()

  const [formsData, setFormsData] = useState<FormsData>({
    fullname: '',
    company: '',
    number: '',
    email: '',
    details: '',
    images: []
  })

  const handleFormsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    if (name === 'number') {
      const digits = value.replace(/\D/g, '')

      if (digits.length > 11) return

      // Aplica formatação apenas se o número de dígitos aumentou
      if (digits.length > previousPhoneDigits.length) {
        const formatted = formatPhoneNumber(value)
        setFormsData((prev) => ({
          ...prev,
          number: formatted
        }))
      } else {
        // Se está apagando, mantém o valor como está
        setFormsData((prev) => ({
          ...prev,
          number: value
        }))
      }

      // Atualiza o valor anterior
      setPreviousPhoneDigits(digits)
    } else {
      setFormsData((prev) => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const [previousPhoneDigits, setPreviousPhoneDigits] = useState('')

  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '').slice(0, 11)

    if (digits.length === 0) return ''
    if (digits.length === 1) return `(${digits}`
    if (digits.length === 2) return `(${digits})`
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setFormsData((prev) => ({
        ...prev,
        images: Array.from(files)
      }))
    }
  }

  const handleFormsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Dados enviados:', formsData)
  }

  return (
    <main
      style={{
        backgroundColor:
          theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 10, 10, 1)',
        color: theme === 'light' ? 'black' : 'white'
      }}
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 py-24 transition-all duration-700 md:py-0"
    >
      <HeroSection />
      <ClientSection />
      <SoldasSection />
      <CarrouselSection />
      <div className="mt-[32px] flex h-screen w-full flex-col items-center justify-start gap-[64px] bg-white px-[32px] pb-[16px] pt-[96px] text-black">
        <p className="text-[48px] font-bold">CONTATE-NOS</p>
        <ContactMeForms
          formsData={formsData}
          handleFormsChange={handleFormsChange}
          handleFormsSubmit={handleFormsSubmit}
          handleImageChange={handleImageChange}
        />
      </div>
    </main>
  )
}
