import Image from "next/image";
import AnimatedHighlightCard from "./AnimatedHighlightCard";
import WhatsAppLink from "./WhatsAppLink";

const VEHICLES = [
  {
    label: "Moto",
    image: "/automoveis/Moto (1).png",
  },
  {
    label: "Carro",
    image: "/automoveis/carro (2).png",
  },
  {
    label: "Caminhão",
    image: "/automoveis/Moto (3).png",
  },
];

export default function VehicleTypes() {
  return (
    <section
      id="veiculos"
      className="overflow-x-hidden bg-zinc-50 px-5 py-20 lg:px-12 lg:py-28"
    >
      <div className="lg:mx-auto lg:max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 rounded-full border border-zinc-200 bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-zinc-800 shadow-sm">
            Linha de Aplicação
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-black lg:text-5xl">
            A bateria certa para o seu veículo
          </h2>
          <p className="mt-3 max-w-lg text-sm text-zinc-600 lg:text-base">
            Trabalhamos com todas as amperagens e tecnologias (convencionais, EFB e AGM). Escolha a sua categoria e consulte valores no WhatsApp.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-6">
          {VEHICLES.map((vehicle) => (
            <AnimatedHighlightCard key={vehicle.label}>
              <WhatsAppLink className="group relative block h-[340px] w-full overflow-hidden rounded-[2rem] bg-zinc-100 shadow-md transition-all duration-300 active:scale-[0.98] hover:shadow-xl lg:h-[380px]">
                <Image
                  src={vehicle.image}
                  alt={`Baterias para ${vehicle.label}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-20 text-center lg:p-8 lg:pt-24">
                  <span className="text-2xl font-bold tracking-wide text-white drop-shadow-md lg:text-3xl">
                    {vehicle.label}
                  </span>
                  <p className="mt-1 text-xs font-medium text-zinc-300">
                    Consulte modelos e preços →
                  </p>
                </div>
              </WhatsAppLink>
            </AnimatedHighlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
