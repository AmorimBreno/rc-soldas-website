import heroImage from '../../../assets/heroImage.png'

export default function HeroSection() {
  return (
    <section id="hero">
      <div
        className={
          'flex h-screen max-h-[960px] w-full flex-col items-start justify-center px-[32px]'
        }
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <p className="mt-[128px] w-2/3 text-[64px] font-bold">
          A <span className="text-yellow-400">FORÇA</span> POR TRÁS DA INOVAÇÃO
          INDUSTRIAL
        </p>
        <p className="mt-[16px] w-2/3 text-[24px]">
          Com 27 anos de experiência, somos o elo de confiança que garante a
          integridade e a durabilidade do seu projeto em cada ponto de solda.
        </p>
      </div>
    </section>
  )
}
