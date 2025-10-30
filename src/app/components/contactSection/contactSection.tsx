import { FormsData } from '@/app/types/formsData'
import { useState } from 'react'
import ContactMeForms from './ContactMeForms'

export default function ContactSection() {
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
        setFormsData((prev: any) => ({
          ...prev,
          number: formatted
        }))
      } else {
        // Se está apagando, mantém o valor como está
        setFormsData((prev: any) => ({
          ...prev,
          number: value
        }))
      }

      // Atualiza o valor anterior
      setPreviousPhoneDigits(digits)
    } else {
      setFormsData((prev: any) => ({
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
      setFormsData((prev: any) => ({
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
    <section
      id="contact"
      className="mt-[32px] flex h-screen max-h-[960px] w-full flex-col items-center justify-start gap-[64px] bg-white px-[32px] pb-[16px] pt-[96px] text-black"
    >
      <p className="text-[48px] font-bold">CONTATE-NOS</p>
      <ContactMeForms
        formsData={formsData}
        handleFormsChange={handleFormsChange}
        handleFormsSubmit={handleFormsSubmit}
        handleImageChange={handleImageChange}
      />
    </section>
  )
}
