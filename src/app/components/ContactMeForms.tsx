import React, { useEffect, useRef, useState } from 'react'
import { Upload, X } from 'lucide-react'
import { FormsData } from '../types/formsData'

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
      className="grid h-screen max-h-[960px] w-2/3 grid-cols-2 gap-4 p-4"
    >
      <input
        type="text"
        name="fullname"
        value={formsData.fullname}
        onChange={handleFormsChange}
        placeholder="Nome completo"
        className="border-b-2 border-b-blue-950 p-2 focus:outline-none"
      />
      <input
        type="text"
        name="company"
        value={formsData.company}
        onChange={handleFormsChange}
        placeholder="Empresa"
        className="border-b-2 border-b-blue-950 p-2 focus:outline-none"
      />
      <input
        type="text"
        name="number"
        value={formsData.number}
        onChange={handleFormsChange}
        placeholder="Celular"
        className="border-b-2 border-b-blue-950 p-2 focus:outline-none"
      />
      <input
        type="email"
        name="email"
        value={formsData.email}
        onChange={handleFormsChange}
        placeholder="Email"
        className="border-b-2 border-b-blue-950 p-2 focus:outline-none"
      />

      <textarea
        ref={textAreaRef}
        name="details"
        value={formsData.details}
        onChange={handleFormsChange}
        placeholder="Conte mais sobre..."
        className="col-span-2 w-full resize-none overflow-hidden border-b-2 border-b-blue-950 p-2 focus:outline-none"
      />

      <div
        className={`col-span-2 flex gap-4 ${
          images.length > 0 ? 'flex-row' : 'flex-col'
        }`}
      >
        {/* Caixa de upload */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded border-2 border-dashed border-blue-950 p-6 transition-colors hover:bg-blue-50 ${
            images.length === 0 ? 'h-48 w-full' : 'w-1/2'
          }`}
        >
          <Upload className="h-10 w-10 text-blue-950" />
          <p className="mt-2 text-blue-950">Clique para enviar imagens</p>
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

        {/* Lista de imagens (só aparece se houver imagens) */}
        {images.length > 0 && (
          <div className="grid w-1/2 grid-cols-1 gap-2">
            {images.map((img, index) => (
              <div
                key={index}
                className="flex max-h-[32px] items-center justify-between rounded border border-blue-200 bg-blue-50 px-3 py-2"
              >
                <span className="truncate text-sm text-blue-950">
                  {img.name}
                </span>
                <button
                  title="send"
                  type="button"
                  onClick={() => removeImage(index)}
                  className="text-blue-950 hover:text-red-600"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="col-span-2 rounded bg-blue-950 p-2 text-white hover:bg-blue-800"
      >
        Enviar
      </button>
    </form>
  )
}

export default FormCliente
