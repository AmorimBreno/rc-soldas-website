import React, { useEffect, useRef, useState } from 'react'
import { Upload, X } from 'lucide-react'
import { FormsData } from '@/app/types/formsData'

type FormClienteProps = {
  formsData: FormsData
  handleFormsChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFormsSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const FormCliente: React.FC<FormClienteProps> = ({
  formsData,
  handleFormsChange,
  handleImageChange,
  handleFormsSubmit
}) => {
  const [images, setImages] = useState<File[]>([])
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Ajusta altura do textarea automaticamente
  useEffect(() => {
    const el = textAreaRef.current
    if (el) {
      el.style.height = 'auto'
      el.style.height = `${el.scrollHeight}px`
    }
  }, [formsData.details])

  // Quando o usuário seleciona novas imagens
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files)
      setImages((prev) => [...prev, ...newImages])
      handleImageChange(e)
    }
  }

  // Remover uma imagem da lista
  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <form
      onSubmit={handleFormsSubmit}
      className="grid w-full grid-cols-1 gap-7 px-4 sm:px-6 md:px-8 lg:w-2/3 lg:grid-cols-2"
    >
      <input
        type="text"
        name="fullname"
        value={formsData.fullname}
        onChange={handleFormsChange}
        placeholder="Nome completo"
        className="border-b-2 border-b-blue-950 p-2 text-sm focus:outline-none sm:text-base"
      />
      <input
        type="text"
        name="company"
        value={formsData.company}
        onChange={handleFormsChange}
        placeholder="Empresa"
        className="border-b-2 border-b-blue-950 p-2 text-sm focus:outline-none sm:text-base"
      />
      <input
        type="text"
        name="number"
        value={formsData.number}
        onChange={handleFormsChange}
        placeholder="Celular"
        className="border-b-2 border-b-blue-950 p-2 text-sm focus:outline-none sm:text-base"
      />
      <input
        type="email"
        name="email"
        value={formsData.email}
        onChange={handleFormsChange}
        placeholder="Email"
        className="border-b-2 border-b-blue-950 p-2 text-sm focus:outline-none sm:text-base"
      />

      <textarea
        ref={textAreaRef}
        name="details"
        value={formsData.details}
        onChange={handleFormsChange}
        placeholder="Conte mais sobre..."
        className="col-span-1 w-full resize-none overflow-hidden border-b-2 border-b-blue-950 p-2 text-sm focus:outline-none sm:text-base lg:col-span-2"
      />

      <div
        className={`col-span-1 flex gap-3 sm:gap-4 lg:col-span-2 ${
          images.length > 0 ? 'flex-col md:flex-row' : 'flex-col'
        }`}
      >
        {/* Caixa de upload */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded border-2 border-dashed border-blue-950 p-4 transition-colors hover:bg-blue-50 sm:p-6 ${
            images.length === 0 ? 'h-32 w-full sm:h-40' : 'w-full md:w-1/2'
          }`}
        >
          <Upload className="h-6 w-6 text-blue-950 sm:h-8 sm:w-8" />
          <p className="mt-2 text-xs text-blue-950 sm:text-sm">
            Clique para enviar imagens
          </p>
          <input
            title="input file images"
            ref={fileInputRef}
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={onImageChange}
            className="hidden"
          />
        </div>

        {/* Lista de imagens */}
        {images.length > 0 && (
          <div className="grid w-full grid-cols-1 gap-2 md:w-1/2">
            {images.map((img, index) => (
              <div
                key={index}
                className="flex max-h-8 items-center justify-between rounded border border-blue-200 bg-blue-50 px-2 py-1.5 sm:max-h-9 sm:px-3 sm:py-2"
              >
                <span className="truncate text-xs text-blue-950 sm:text-sm">
                  {img.name}
                </span>
                <button
                  title="remove"
                  type="button"
                  onClick={() => removeImage(index)}
                  className="ml-2 flex-shrink-0 text-blue-950 hover:text-red-600"
                >
                  <X size={14} className="sm:h-4 sm:w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="col-span-1 rounded bg-blue-950 p-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 sm:p-3 sm:text-base lg:col-span-2"
      >
        Enviar
      </button>
    </form>
  )
}

export default FormCliente
