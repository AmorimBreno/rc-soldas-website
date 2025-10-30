import heroImage from '../../../assets/heroImage.png'

export default function HeroSection() {
  return (
    <section id="hero">
      <div
        className="flex h-screen max-h-[960px] w-full flex-col items-start justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top'
        }}
      >
        {/* Conteúdo */}
        <div className="relative z-0 mt-16 sm:mt-20 md:mt-32">
          <p className="w-full text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:w-3/4 lg:text-6xl xl:w-2/3 xl:text-7xl">
            A <span className="text-yellow-400">FORÇA</span> POR TRÁS DA
            INOVAÇÃO INDUSTRIAL
          </p>
          <p className="mt-4 w-full text-base leading-relaxed sm:text-lg md:mt-6 md:text-xl lg:w-3/4 lg:text-2xl xl:w-2/3">
            Com 27 anos de experiência, somos o elo de confiança que garante a
            integridade e a durabilidade do seu projeto em cada ponto de solda.
          </p>
        </div>
      </div>
    </section>
  )
}
