import heroImage from '../../../assets/soldaTIG.jpg'

export default function SoldasSection() {
  return (
    <div className="flex h-[960px] w-full flex-row items-center justify-center gap-[64px] bg-white px-[64px] py-[96px]">
      <div className="flex h-full w-full flex-col items-start justify-between gap-[64px]">
        <p className="text-[48px] font-bold uppercase text-black">
          Soldas especiais para aplicações industriais exigentes
        </p>
        <p className="text-[20px] text-black">
          Nossas soluções em soldagem foram desenvolvidas para atender aos mais
          altos padrões de qualidade e segurança em diversos segmentos
          industriais. Trabalhamos com processos precisos e materiais adequados
          a cada aplicação. <br />
          <br />
          Desde o aço inox utilizado na indústria alimentícia, que exige
          superfícies livres de impurezas e resíduos, até ligas especiais
          aplicadas em equipamentos de produtos químicos sensíveis, onde a
          integridade da solda é fundamental.
        </p>
        <div className="flex h-[80px] w-[320px] cursor-pointer items-center justify-center rounded-[4px] bg-yellow-400 text-[24px] font-bold uppercase text-black transition-all duration-300 ease-in-out hover:bg-yellow-300">
          entrar em contato
        </div>
      </div>
      <div
        className="flex h-full w-full items-center justify-center rounded-[4px]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
    </div>
  )
}
