export default function ClientSection() {
  return (
    <div className="flex min-h-[800px] w-full flex-col items-center justify-center">
      <p className="text-[48px] font-bold uppercase">Nossos clientes</p>
      <div className="mt-[96px] grid h-full auto-rows-[176px] grid-cols-7 gap-[8px] px-[32px]">
        {[...Array(14).keys()]
          .map((i) => i + 1)
          .map(() => {
            return (
              <div className="size-[176px] bg-white text-black transition-all duration-300 ease-in-out hover:bg-yellow-400"></div>
            )
          })}
      </div>
    </div>
  )
}
