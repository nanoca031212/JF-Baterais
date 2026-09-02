import Image from "next/image";
import WhatsAppLink from "./WhatsAppLink";

const BRANDS = [
  {
    name: "Moura",
    image: "/produtos/Moura.png",
    badge: "Mais Pedida",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Máxima durabilidade e partida imediata em qualquer condição.",
    warranty: "Garantia até 24 meses",
  },
  {
    name: "Heliar",
    image: "/produtos/Heliar.png",
    badge: "Original de Montadora",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Tecnologia de ponta com alta resistência e proteção total.",
    warranty: "Garantia oficial Heliar",
  },
  {
    name: "Zetta",
    image: "/produtos/Zetta.png",
    badge: "Melhor Custo-Benefício",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    description: "Produzida com a qualidade Moura para quem busca economia.",
    warranty: "Garantia de fábrica",
  },
  {
    name: "Outras Baterias",
    image: null,
    badge: "Linha Completa",
    badgeColor: "bg-zinc-100 text-zinc-700 border-zinc-200",
    description: "Kondor, Delcar, Cral e outras opções prontas para o seu veículo.",
    warranty: "Consulte modelos",
  },
];

export default function BatteryCarousel() {
  return (
    <section id="marcas" className="bg-white py-20 lg:py-28">
      <div className="flex flex-col items-center px-5 text-center lg:mx-auto lg:max-w-4xl lg:px-12">
        <span className="rounded-full border border-yellow-200 bg-yellow-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-yellow-800">
          Estoque a Pronta Entrega
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-black lg:text-5xl">
          Marcas consagradas no mercado
        </h2>
        <p className="mt-3 max-w-xl text-base text-zinc-600 lg:text-lg">
          Trabalhamos apenas com linhas certificadas pelo Inmetro, alta durabilidade e garantia direto do fabricante.
        </p>
      </div>

      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-auto lg:mt-14 lg:grid lg:max-w-6xl lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-12 lg:pb-0">
        {BRANDS.map((brand) => (
          <div
            key={brand.name}
            className="group relative flex w-[78%] shrink-0 snap-start flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl lg:w-full"
          >
            <div>
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${brand.badgeColor}`}
                >
                  {brand.badge}
                </span>
                <span className="text-[11px] font-medium text-zinc-400">
                  {brand.warranty}
                </span>
              </div>

              <div className="relative mt-4 flex aspect-4/3 w-full items-center justify-center rounded-2xl bg-zinc-50/80 p-3 transition-colors group-hover:bg-zinc-100/70">
                {brand.image ? (
                  <Image
                    src={brand.image}
                    alt={`Bateria ${brand.name}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 78vw"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200/70 text-zinc-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-zinc-500">Todas as Amperagens</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold tracking-tight text-black">
                  {brand.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                  {brand.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-100">
              <WhatsAppLink className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-black active:scale-[0.98]">
                <span>Pedir no WhatsApp</span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </WhatsAppLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
