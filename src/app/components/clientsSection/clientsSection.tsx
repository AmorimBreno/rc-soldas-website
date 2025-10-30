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
    <div className="] flex w-full flex-col items-center justify-center bg-white pt-[64px]">
      <p className="mb-8 text-2xl font-bold text-gray-500">
        Empresas parceiras que confiam em nós
      </p>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden bg-white">
        {/* Marquee Track */}
        <div className="animate-marquee hover:pause-animation flex">
          {/* First set of logos */}
          {logosClientes.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="mx-4 flex h-64 w-64 flex-shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <span className="text-2xl font-bold text-slate-800">
                <img
                  src={logo}
                  alt={`Logo do cliente ${index + 1}`}
                  className="max-h-48 max-w-48 object-contain"
                />
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logosClientes.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="mx-4 flex h-64 w-64 flex-shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <img
                src={logo}
                alt={`Logo do cliente ${index + 1}`}
                className="max-h-48 max-w-48 object-contain"
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

        .animate-marquee {
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
