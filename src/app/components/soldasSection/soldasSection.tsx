import heroImage from '../../../assets/soldaTIG.jpg'

export default function SoldasSection() {
  return (
    <section
      id="soldas"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-white px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:h-screen lg:max-h-[960px] lg:flex-row lg:gap-[64px] lg:px-[64px] lg:py-[96px]"
    >
      <div className="flex h-full w-full flex-col items-start justify-between gap-6 lg:gap-[64px] lg:text-5xl">
        <p className="text-3xl font-bold uppercase text-black sm:text-4xl md:text-5xl lg:text-[40px]">
          Soldas especiais para aplicações industriais exigentes
        </p>
        <p className="text-sm text-black sm:text-base md:text-lg">
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
        <div className="hidden h-16 w-full cursor-pointer items-center justify-center rounded bg-yellow-400 text-lg font-bold uppercase text-black transition-all duration-300 ease-in-out hover:bg-yellow-300 sm:h-20 sm:text-xl md:w-80 md:text-2xl lg:flex">
          entrar em contato
        </div>
      </div>
      <div
        className="flex h-64 w-full items-center justify-center rounded-[4px] sm:h-80 md:h-96 lg:h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="flex h-16 w-full cursor-pointer items-center justify-center rounded bg-yellow-400 text-lg font-bold uppercase text-black transition-all duration-300 ease-in-out hover:bg-yellow-300 sm:h-20 sm:text-xl lg:hidden">
        entrar em contato
      </div>
    </section>
  )
}
