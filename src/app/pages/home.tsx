import { useState } from 'react'
import { useTheme } from '../hooks/use-theme'
import { FormsData } from '../types/formsData';
import ContactMeForms from '../components/ContactMeForms';

export function Home() {
  const { theme } = useTheme()

  const [formsData, setFormsData] = useState<FormsData>({fullname:"", company: "", number: "", email:"", details:"",  images: []})
 

  const handleFormsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
  
    if (name === 'number') {
      const digits = value.replace(/\D/g, '');

      if (digits.length > 11) return;
  
      // Aplica formatação apenas se o número de dígitos aumentou
      if (digits.length > previousPhoneDigits.length) {
        const formatted = formatPhoneNumber(value);
        setFormsData(prev => ({
          ...prev,
          number: formatted
        }));
      } else {
        // Se está apagando, mantém o valor como está
        setFormsData(prev => ({
          ...prev,
          number: value
        }));
      }
  
      // Atualiza o valor anterior
      setPreviousPhoneDigits(digits);
    } else {
      setFormsData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  

  const [previousPhoneDigits, setPreviousPhoneDigits] = useState('');

  const formatPhoneNumber = (value: string): string => {

    const digits = value.replace(/\D/g, '').slice(0, 11);

    if (digits.length === 0) return '';
    if (digits.length === 1) return `(${digits}`;
    if (digits.length === 2) return `(${digits})`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };
  
  


  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormsData(prev => ({
        ...prev,
        images: Array.from(files)
      }));
    }
  };
  


  const handleFormsSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log("Dados enviados:", formsData);
  };
  


  return (
    <main
      style={{
        backgroundColor:
          theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 10, 10, 1)',
        color: theme === 'light' ? 'black' : 'white'
      }}
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 py-24 transition-all duration-700 md:py-0"
    >
      <div className='h-screen w-full flex flex-col items-start justify-center px-[32px]'>
        <p className='text-[64px] font-bold w-1/2 mt-[128px]'>A <span className='text-yellow-400 '>FORÇA</span> POR TRÁS DA INOVAÇÃO INDUSTRIAL</p>
        <p className='w-2/3 text-[24px] mt-[16px]'>Com 27 anos de experiência, somos o elo de confiança que garante a integridade e a durabilidade do seu projeto em cada ponto de solda.</p>
      </div>
      <div className='h-screen w-full flex flex-col items-center justify-start px-[32px] mt-[32px]'>
        <p className='text-[48px] uppercase font-bold'>Nossos clientes</p>
        <div className="px-[32px] h-full grid grid-cols-7 auto-rows-[176px] gap-[8px] mt-[96px]">
        {[...Array(14).keys()].map(i => i + 1).map(()=> {
          return <div className='size-[176px] bg-white text-black hover:bg-yellow-400 transition-all duration-300 ease-in-out'></div>
        })}
        </div>
      </div>
      <div className='h-screen w-full flex flex-row items-center justify-start px-[32px] pt-[96px] pb-[16px] mt-[32px] bg-white gap-[64px]'>
        <div className='w-full h-full flex flex-col  gap-[64px]'>
          <p className='uppercase text-[48px] text-black font-bold'>Soldas especiais para aplicações industriais exigentes</p>
          <p className='text-[16px] text-black'>Nossas soluções em soldagem foram desenvolvidas para atender aos mais altos padrões de qualidade e segurança em diversos segmentos industriais. Trabalhamos com processos precisos e materiais adequados a cada aplicação. <br/><br/>
Desde o aço inox utilizado na indústria alimentícia, que exige superfícies livres de impurezas e resíduos, até ligas especiais aplicadas em equipamentos de produtos químicos sensíveis, onde a integridade da solda é fundamental.</p>
        <div className='w-[320px] h-[80px] bg-yellow-400 flex items-center justify-center uppercase text-black text-[24px] font-bold rounded-[4px] hover:bg-yellow-300 cursor-pointer transition-all duration-300 ease-in-out'>entrar em contato</div>
        </div>
        <div className='w-full h-full flex justify-center items-center bg-blue-800 rounded-[4px]'></div>
      </div>
      <div className='w-full h-screen'>carrousel</div>
      <div className='h-screen w-full flex flex-col items-center justify-start px-[32px] pt-[96px] pb-[16px] mt-[32px] bg-white gap-[64px] text-black'>
        <p className='font-bold text-[48px]'>CONTATE-NOS</p>
        <ContactMeForms formsData={formsData} handleFormsChange={handleFormsChange} handleFormsSubmit={handleFormsSubmit} handleImageChange={handleImageChange}/>
      </div>
    </main>
  )
}
