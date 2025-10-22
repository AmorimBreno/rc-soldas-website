import React from 'react';
import { FormsData } from '../types/formsData';



type FormClienteProps = {
  formsData: FormsData;
  handleFormsChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormsSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

};

const FormCliente: React.FC<FormClienteProps> = ({
  formsData,
  handleFormsChange,
  handleImageChange,
  handleFormsSubmit
}) => {
  return (
    <form onSubmit={handleFormsSubmit} className="flex flex-col gap-4 p-4">
      <input
        type="text"
        name="fullname"
        value={formsData.fullname}
        onChange={handleFormsChange}
        placeholder="Nome completo"
        className="border p-2"
      />
      <input
        type="text"
        name="company"
        value={formsData.company}
        onChange={handleFormsChange}
        placeholder="Empresa"
        className="border p-2"
      />
      <input
        type="text"
        name="number"
        value={formsData.number}
        onChange={handleFormsChange}
        placeholder="Telefone"
        className="border p-2"
      />
      <input
        type="email"
        name="email"
        value={formsData.email}
        onChange={handleFormsChange}
        placeholder="Email"
        className="border p-2"
      />
      <textarea
        name="details"
        value={formsData.details}
        onChange={handleFormsChange}
        placeholder="Detalhes"
        className="border p-2"
      />
      
      <input
        type="file"
        name="images"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        className="border p-2"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Enviar
      </button>
    </form>
  );
};

export default FormCliente;