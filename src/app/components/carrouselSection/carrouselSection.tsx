import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import imagemAluminio from '../../../assets/materials/aluminio.jpg'
import imagemAcoInox from '../../../assets/materials/inox.jpg'
import imagemCobre from '../../../assets/materials/cobre.jpg'
// import imagemAcoCarbono from '../../../assets/materials/acoCarbono.jpg'
// import imagemAcoGalvanizado from '../../../assets/materials/acoGalvanizado.jpg'
// import imagemFerroFundido from '../../../assets/materials/ferroFundido.jpg'

const WeldingMaterialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const materials = [
    {
      name: 'Aço Inoxidável',
      image: imagemAcoInox,
      shortDesc: 'Resistente à corrosão',
      description:
        'Material nobre com alta resistência à corrosão e oxidação, ideal para ambientes agressivos e aplicações sanitárias.',
      identification:
        'Cor prateada brilhante, não magnético (austenítico), superfície lisa',
      applications: 'Indústria alimentícia, hospitais, tanques químicos',
      processes: 'TIG, MIG/MAG com gás inerte'
    },
    {
      name: 'Alumínio',
      image: imagemAluminio,
      shortDesc: 'Leve e versátil',
      description:
        'Metal leve com excelente condutividade térmica, requer técnicas específicas devido à sua alta condutividade.',
      identification:
        'Cor prateada clara, muito leve, não magnético, oxidação branca',
      applications: 'Indústria naval, aeronáutica, esquadrias',
      processes: 'TIG, MIG com argônio'
    },
    {
      name: 'Cobre',
      image: imagemCobre,
      shortDesc: 'Condutividade superior',
      description:
        'Excelente condutor elétrico e térmico, usado em aplicações que exigem alta performance em transmissão de energia.',
      identification:
        'Cor avermelhada/alaranjada, não magnético, oxida em verde',
      applications: 'Sistemas elétricos, trocadores de calor, refrigeração',
      processes: 'TIG, MIG com gás inerte'
    },
    {
      name: 'Aço Carbono',
      image:
        'https://images.unsplash.com/photo-1565440555196-5e5f384e5153?w=800&q=80',
      shortDesc: 'Material mais comum em soldagem',
      description:
        'O aço carbono é o material mais utilizado em processos de soldagem devido ao seu excelente custo-benefício e facilidade de trabalho.',
      identification: 'Cor cinza escuro, magnético, pode apresentar ferrugem',
      applications:
        'Estruturas metálicas, tubulações industriais, equipamentos agrícolas',
      processes: 'MIG/MAG, Eletrodo Revestido, TIG'
    },
    {
      name: 'Aço Galvanizado',
      image:
        'https://images.unsplash.com/photo-1504624720567-64a41caa7f6c?w=800&q=80',
      shortDesc: 'Proteção anticorrosiva',
      description:
        'Aço carbono com revestimento de zinco que proporciona excelente proteção contra intempéries e corrosão.',
      identification: 'Padrão cristalino brilhante (spangled), cor acinzentada',
      applications: 'Torres de transmissão, estruturas externas, telhas',
      processes: 'MIG/MAG, Eletrodo (cuidados especiais)'
    },
    {
      name: 'Ferro Fundido',
      image:
        'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
      shortDesc: 'Durabilidade e rigidez',
      description:
        'Material duro e resistente, porém quebradiço. Requer pré-aquecimento e técnicas especializadas para soldagem.',
      identification: 'Cinza escuro fosco, granulado, magnético, quebradiço',
      applications: 'Blocos de motores, carcaças, peças industriais',
      processes: 'Eletrodo especial, TIG com varetas específicas'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % materials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + materials.length) % materials.length)
  }

  const getVisibleCards = () => {
    const prev = (currentIndex - 1 + materials.length) % materials.length
    const next = (currentIndex + 1) % materials.length
    return [prev, currentIndex, next]
  }

  const visibleIndices = getVisibleCards()

  return (
    <div className="h-screen max-h-[960px] w-full px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold uppercase text-white">
            Nossos Materiais
          </h1>
          <p className="text-2xl text-slate-400">
            Passe o mouse sobre os cards para conhecer mais detalhes
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex h-[600px] items-center justify-center">
          {/* Cards */}
          <div className="relative flex h-full w-full items-center justify-center">
            {materials.map((material, materialIndex) => {
              const position = visibleIndices.indexOf(materialIndex)
              const isVisible = position !== -1
              const isCenter = position === 1
              const isLeft = position === 0
              const isRight = position === 2
              const isHovered = hoveredCard === materialIndex

              return (
                <div
                  key={materialIndex}
                  className={`absolute transition-all duration-700 ease-out ${
                    !isVisible ? 'invisible opacity-0' : ''
                  } ${isLeft ? 'scale-85 -translate-x-full opacity-60' : ''} ${
                    isRight ? 'scale-85 translate-x-full opacity-60' : ''
                  } ${
                    isCenter ? 'translate-x-0 scale-100 opacity-100' : ''
                  } ${isCenter ? 'z-30' : 'z-10'}`}
                  onMouseEnter={() =>
                    isCenter ? setHoveredCard(materialIndex) : null
                  }
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-[560px] w-[480px] cursor-pointer">
                    {/* Card Base */}
                    <div
                      className="hover:shadow-3xl hover:shadow-white-500/20 absolute inset-0 transform overflow-hidden rounded bg-white shadow-2xl transition-transform duration-300"
                      onClick={
                        isCenter ? undefined : isLeft ? prevSlide : nextSlide
                      }
                    >
                      <img
                        src={material.image}
                        alt={material.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Material Name at Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="mb-2 text-3xl font-bold text-white">
                          {material.name}
                        </h3>
                        <p className="font-medium text-orange-400">
                          {material.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Hover Info Card */}
                    <div
                      className={`absolute inset-0 rounded bg-white p-8 shadow-2xl transition-all duration-500 ${
                        isHovered
                          ? 'visible scale-100 opacity-100'
                          : 'invisible scale-95 opacity-0'
                      }`}
                    >
                      <div className="h-full space-y-5 overflow-y-auto">
                        {/* Title */}
                        <div className="border-b-2 border-orange-500 pb-4">
                          <h3 className="text-3xl font-bold text-slate-900">
                            {material.name}
                          </h3>
                          <p className="mt-1 font-medium text-orange-600">
                            {material.shortDesc}
                          </p>
                        </div>

                        {/* Description */}
                        <div>
                          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-600">
                            Descrição
                          </h4>
                          <p className="leading-relaxed text-slate-700">
                            {material.description}
                          </p>
                        </div>

                        {/* Identification */}
                        <div className="rounded-xl bg-blue-50 p-4">
                          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-900">
                            Como Identificar
                          </h4>
                          <p className="text-sm text-blue-800">
                            {material.identification}
                          </p>
                        </div>

                        {/* Applications */}
                        <div className="rounded-xl bg-green-50 p-4">
                          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-green-900">
                            Aplicações
                          </h4>
                          <p className="text-sm text-green-800">
                            {material.applications}
                          </p>
                        </div>

                        {/* Processes */}
                        <div className="rounded-xl bg-orange-50 p-4">
                          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-900">
                            Processos de Soldagem
                          </h4>
                          <p className="text-sm font-medium text-orange-800">
                            {material.processes}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            title="navigation dot"
            onClick={prevSlide}
            className="absolute left-8 z-40 rounded-full bg-white/90 p-4 text-slate-900 shadow-xl transition-all hover:scale-110 hover:bg-white"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            type="button"
            title="navigation dot"
            onClick={nextSlide}
            className="absolute right-8 z-40 rounded-full bg-white/90 p-4 text-slate-900 shadow-xl transition-all hover:scale-110 hover:bg-white"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="mt-12 flex justify-center gap-3">
          {materials.map((_, index) => (
            <button
              type="button"
              title="navigation dot"
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'w-12 bg-orange-500'
                  : 'w-3 bg-slate-600 hover:bg-slate-500'
              } h-3 rounded-full`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeldingMaterialsCarousel
