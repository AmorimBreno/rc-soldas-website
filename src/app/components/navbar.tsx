import { RiMenu2Line } from 'react-icons/ri'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [fade, setFade] = useState(false)

  const handleOpenMenu = () => {
    setIsMenuOpen(true)
    setTimeout(() => {
      setFade(true)
    }, 100)
  }

  const handleCloseMenu = () => {
    setFade(false)
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 500)
  }

  return (
    <nav className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-black p-5 px-8 font-mont uppercase text-white backdrop-blur-md transition-all duration-700">
      <RiMenu2Line
        className="flex cursor-pointer text-2xl sm:hidden"
        onClick={handleOpenMenu}
      />
      <div className="hidden items-center gap-16 sm:flex">
        <div className="flex items-center gap-8 text-lg">
          <a href="#hero" className="cursor-pointer">
            Início
          </a>
          <a href="#clients" className="cursor-pointer">
            Clientes
          </a>
          <a href="#soldas" className="cursor-pointer">
            Nossa Solda
          </a>
          <a href="#materials" className="cursor-pointer">
            Materiais
          </a>
          <a href="#contact" className="cursor-pointer">
            Contato
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className={`absolute left-0 top-0 z-20 h-screen w-full bg-black/50 transition-all duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleCloseMenu}
          />
          <div
            style={{
              backgroundColor: 'rgba(10, 10, 10, 1)',
              color: 'white'
            }}
            className={`absolute left-0 top-0 z-30 flex h-screen w-4/5 flex-col gap-8 bg-white p-12 transition-all duration-700 ${fade ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
          >
            <IoClose
              className="absolute left-[85%] top-4 cursor-pointer text-4xl"
              onClick={handleCloseMenu}
            />
            <div className="flex flex-col justify-center gap-8 text-xl">
              <a
                href="#"
                className={`cursor-pointer transition-all duration-1000 ${fade ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              >
                Início
              </a>
              <a
                href="#"
                className={`cursor-pointer transition-all delay-100 duration-1000 ${fade ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              >
                Clientes
              </a>
              <a
                href="#"
                className={`cursor-pointer transition-all delay-100 duration-1000 ${fade ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              >
                Nossa Solda
              </a>
              <a
                href="#"
                className={`cursor-pointer transition-all delay-100 duration-1000 ${fade ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              >
                Materiais
              </a>
              <a
                href="#"
                className={`cursor-pointer transition-all delay-200 duration-1000 ${fade ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              >
                Contato
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
