import React from 'react'
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
  return (
    <form onSubmit={handleFormsSubmit} className="grid grid-cols-2 gap-4 p-4">
      <input
        type="text"
        name="fullname"
        value={formsData.fullname}
        onChange={handleFormsChange}
        placeholder="Nome completo"
        className="border-b-2 border-b-yellow-400 p-2"
      />
      <input
        type="text"
        name="company"
        value={formsData.company}
        onChange={handleFormsChange}
        placeholder="Empresa"
        className="border-b-2 border-b-yellow-400 p-2"
      />
      <input
        type="text"
        name="number"
        value={formsData.number}
        onChange={handleFormsChange}
        placeholder="Telefone"
        className="border-b-2 border-b-yellow-400 p-2"
      />
      <input
        type="email"
        name="email"
        value={formsData.email}
        onChange={handleFormsChange}
        placeholder="Email"
        className="border-b-2 border-b-yellow-400 p-2"
      />
      <textarea
        name="details"
        value={formsData.details}
        onChange={handleFormsChange}
        placeholder="Detalhes"
        className="border-b-2 border-b-yellow-400 p-2"
      />

      <input
        placeholder="Images"
        type="file"
        name="images"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        className="grid-cols-2 border"
      />

      <button type="submit" className="rounded bg-blue-500 p-2 text-white">
        Enviar
      </button>
    </form>
  )
}

export default FormCliente
