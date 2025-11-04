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

  const handleFormsSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (!formsData.fullname || !formsData.email) {
      alert('❌ Por favor, preencha nome e email')
      return
    }

    try {
      // Criar FormData para enviar arquivos
      const formData = new FormData()

      // Adicionar campos de texto
      formData.append('fullname', formsData.fullname)
      formData.append('company', formsData.company || '')
      formData.append('number', formsData.number)
      formData.append('email', formsData.email)
      formData.append('details', formsData.details || '')

      // Adicionar imagens
      // Verificar limite de imagens
      if (formsData.images && formsData.images.length > 5) {
        alert('❌ Você pode enviar no máximo 5 imagens.')
        return
      }

      // Adicionar imagens (limitadas a 5)
      if (formsData.images && formsData.images.length > 0) {
        formsData.images.slice(0, 5).forEach((image, index) => {
          formData.append(`image${index}`, image)
        })
      }

      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL

      const response = await fetch(webhookUrl, {
        method: 'POST',
        // NÃO adicione Content-Type, o browser faz automaticamente
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        alert(
          '✅ Mensagem enviada com sucesso! Entraremos em contato em breve.'
        )

        setFormsData({
          fullname: '',
          company: '',
          number: '',
          email: '',
          details: '',
          images: []
        })
        setPreviousPhoneDigits('')
      } else {
        alert(`❌ ${data.error || 'Erro ao enviar mensagem'}`)
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('❌ Erro ao enviar mensagem. Tente novamente.')
    }
  }

  return (
    <section
      id="contact"
      className="mt-[32px] flex h-screen w-full flex-col items-center justify-center gap-8 bg-white text-black lg:max-h-[960px] lg:gap-[64px] lg:px-[32px] lg:pb-[16px] lg:pt-[96px]"
    >
      <p className="text-4xl font-bold md:text-5xl lg:text-[48px]">
        CONTATE-NOS
      </p>
      <ContactMeForms
        formsData={formsData}
        handleFormsChange={handleFormsChange}
        handleFormsSubmit={handleFormsSubmit}
        handleImageChange={handleImageChange}
      />
    </section>
  )
}
