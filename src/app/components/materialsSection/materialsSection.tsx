import { useState } from 'react'
import imagemAluminio from '../../../assets/materials/aluminio.jpg'
import imagemAcoInox from '../../../assets/materials/inox.jpg'
import imagemCobre from '../../../assets/materials/cobre.jpg'
// import imagemAcoCarbono from '../../../assets/materials/acoCarbono.jpg'
// import imagemAcoGalvanizado from '../../../assets/materials/acoGalvanizado.jpg'
// import imagemFerroFundido from '../../../assets/materials/ferroFundido.jpg'

const WeldingMaterialsCarousel = () => {
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
      processes: 'TIG, MIG/MAG com gás inerte',
      gridClass: 'col-span-1 row-span-2'
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
      processes: 'TIG, MIG com argônio',
      gridClass: 'col-span-2 row-span-1'
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
      processes: 'TIG, MIG com gás inerte',
      gridClass: 'col-span-1 row-span-1'
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
      processes: 'MIG/MAG, Eletrodo Revestido, TIG',
      gridClass: 'col-span-1 row-span-2'
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
      processes: 'MIG/MAG, Eletrodo (cuidados especiais)',
      gridClass: 'col-span-1 row-span-1'
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
      processes: 'Eletrodo especial, TIG com varetas específicas',
      gridClass: 'col-span-1 row-span-1'
    }
  ]

  interface Material {
    name: string
    image: string
    shortDesc: string
    description: string
    identification: string
    applications: string
    processes: string
    gridClass: string
  }

  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
    null
  )

  return (
    <div className="flex h-screen max-h-[960px] items-center justify-center py-[64px]">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-center text-4xl font-bold uppercase text-white">
          Materiais de Soldagem
        </h1>
        <p className="mb-8 text-center text-slate-400">
          Conheça os principais materiais utilizados em processos de soldagem
        </p>

        <div className="grid auto-rows-[160px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {materials.map((material, index) => (
            <div
              key={index}
              className={`${material.gridClass} group relative cursor-pointer overflow-hidden rounded-[4px] transition-all duration-300 hover:scale-[1.02]`}
              onClick={() => setSelectedMaterial(material)}
            >
              <img
                src={material.image}
                alt={material.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="mb-2 transform text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {material.name}
                </h3>
                <p className="text-sm text-slate-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {material.shortDesc}
                </p>
              </div>

              <div className="absolute right-4 top-4 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMaterial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setSelectedMaterial(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                className="h-full w-full rounded-t-2xl object-cover"
              />
              <button
                onClick={() => setSelectedMaterial(null)}
                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <h2 className="mb-2 text-3xl font-bold text-white">
                {selectedMaterial.name}
              </h2>
              <p className="mb-6 text-lg text-blue-400">
                {selectedMaterial.shortDesc}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 flex items-center font-semibold text-white">
                    <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                    Descrição
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    {selectedMaterial.description}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center font-semibold text-white">
                    <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                    Identificação
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    {selectedMaterial.identification}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center font-semibold text-white">
                    <span className="mr-2 h-2 w-2 rounded-full bg-yellow-500"></span>
                    Aplicações
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    {selectedMaterial.applications}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center font-semibold text-white">
                    <span className="mr-2 h-2 w-2 rounded-full bg-purple-500"></span>
                    Processos de Soldagem
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    {selectedMaterial.processes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WeldingMaterialsCarousel
