import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 px-4 py-8 text-white sm:px-6 md:px-8 lg:px-16 lg:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        {/* Logo e Slogan */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-yellow-400">RC</span> SOLDAS
          </h2>
          <p className="max-w-xs text-sm text-slate-300 sm:text-base">
            A qualidade não se negocia. Ela se constrói, junta por junta.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded border-2 border-yellow-400 text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-slate-950"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded border-2 border-yellow-400 text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-slate-950"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded border-2 border-yellow-400 text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-slate-950"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-6 lg:items-end">
          <h3 className="text-xl font-semibold text-yellow-400 sm:text-2xl">
            INFORMAÇÕES DE CONTATO
          </h3>

          <div className="flex flex-col gap-4 text-sm sm:text-base lg:text-right">
            {/* Address */}
            <div className="flex items-start gap-3 lg:flex-row-reverse">
              <MapPin
                className="mt-1 flex-shrink-0 text-yellow-400"
                size={20}
              />
              <div>
                <p>Av. Gen. Asdrúbal da Cunha, 753 -</p>
                <p>Jardim Arpoador, São Paulo - SP,</p>
                <p>05576-100</p>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+551199241-8718"
              className="flex items-center gap-3 transition-colors hover:text-yellow-400 lg:flex-row-reverse"
            >
              <Phone className="flex-shrink-0 text-yellow-400" size={20} />
              <span>(11) 99241-8718</span>
            </a>

            {/* Email */}
            <a
              href="mailto:contato@rcsoldas.com"
              className="flex items-center gap-3 transition-colors hover:text-yellow-400 lg:flex-row-reverse"
            >
              <Mail className="flex-shrink-0 text-yellow-400" size={20} />
              <span>contato@rcsoldas.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright - Optional */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:text-sm lg:mt-12">
        <p>© 2025 RC Soldas. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
