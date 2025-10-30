import logoChamfer from '../../../assets/logos/logoChamfer.jpg'
import logoChrisCintos from '../../../assets/logos/logoChrisCintos.svg'
import logoCobretec from '../../../assets/logos/logoCobretec.svg'
import logoCSN from '../../../assets/logos/logoCSN.png'
import logoOfner from '../../../assets/logos/logoOfner.png'
import logoOpenMall from '../../../assets/logos/logoOpenMall.jpg'
import logoPaoDeAcucar from '../../../assets/logos/logoPaoDeAcucar.png'
import logoSP from '../../../assets/logos/logoSP.png'

export default function ClientSection() {
  const logosClientes = [
    logoChamfer,
    logoChrisCintos,
    logoCobretec,
    logoCSN,
    logoOfner,
    logoOpenMall,
    logoPaoDeAcucar,
    logoSP
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center bg-white pt-12 md:pt-16">
      <p className="mb-6 px-4 text-center text-lg font-bold text-gray-500 sm:text-xl md:mb-8 md:text-2xl">
        Empresas parceiras que confiam em nós
      </p>
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden bg-white">
        {/* Marquee Track */}
        <div className="animate-marquee-mobile md:animate-marquee-desktop hover:pause-animation flex">
          {/* First set of logos */}
          {logosClientes.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="mx-2 flex h-32 w-32 flex-shrink-0 items-center justify-center transition-all duration-300 hover:scale-110 sm:mx-3 sm:h-40 sm:w-40 md:mx-4 md:h-48 md:w-48 lg:h-64 lg:w-64"
            >
              <span className="text-2xl font-bold text-slate-800">
                <img
                  src={logo}
                  alt={`Logo do cliente ${index + 1}`}
                  className="max-h-24 max-w-24 object-contain sm:max-h-32 sm:max-w-32 md:max-h-40 md:max-w-40 lg:max-h-48 lg:max-w-48"
                />
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logosClientes.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="mx-2 flex h-32 w-32 flex-shrink-0 items-center justify-center transition-all duration-300 hover:scale-110 sm:mx-3 sm:h-40 sm:w-40 md:mx-4 md:h-48 md:w-48 lg:h-64 lg:w-64"
            >
              <img
                src={logo}
                alt={`Logo do cliente ${index + 1}`}
                className="max-h-24 max-w-24 object-contain sm:max-h-32 sm:max-w-32 md:max-h-40 md:max-w-40 lg:max-h-48 lg:max-w-48"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-mobile {
          display: flex;
          animation: marquee 25s linear infinite;
          width: fit-content;
        }
        .animate-marquee-desktop {
          display: flex;
          animation: marquee 45s linear infinite;
          width: fit-content;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
