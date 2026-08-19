import AnimatedHighlightCard from "./AnimatedHighlightCard";

const VEHICLES = [
  {
    label: "Moto",
    description: "Baterias de 6Ah a 12Ah",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M8 16.5h4l2-5.5h3M13 8h2l1.5 2.5M9 11l1.5-2.5h2"
        />
        <circle cx="6" cy="16.5" r="2.2" strokeWidth={1.6} />
        <circle cx="17.5" cy="16.5" r="2.2" strokeWidth={1.6} />
      </>
    ),
  },
  {
    label: "Carro",
    description: "Baterias de 40Ah a 70Ah",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M3.5 15.5h17M5 15.5l1.3-4.2A1.8 1.8 0 0 1 8 10h8a1.8 1.8 0 0 1 1.7 1.3l1.3 4.2M8.5 10 9.5 7h5l1 3"
        />
        <circle cx="7" cy="16.5" r="1.4" strokeWidth={1.6} />
        <circle cx="17" cy="16.5" r="1.4" strokeWidth={1.6} />
      </>
    ),
  },
  {
    label: "Caminhão",
    description: "Baterias pesadas 100Ah+",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M3 15.5V8.5a1 1 0 0 1 1-1h7v8M11 15.5h4M15 15.5V11h2.5l2.5 3v1.5"
        />
        <circle cx="7" cy="17" r="1.4" strokeWidth={1.6} />
        <circle cx="17.5" cy="17" r="1.4" strokeWidth={1.6} />
      </>
    ),
  },
];

export default function VehicleTypes() {
  return (
    <section id="veiculos" className="overflow-x-hidden bg-zinc-50 px-5 py-12 lg:px-12 lg:py-24">
      <div className="lg:mx-auto lg:max-w-6xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-black lg:text-5xl">
          Baterias para todo tipo de veículo
        </h2>
        <p className="mt-1 text-base text-zinc-500 lg:text-lg">
          Moto, carro ou caminhão — temos a bateria certa
        </p>

        <div className="mt-8 flex flex-col gap-4 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-6">
          {VEHICLES.map((vehicle) => (
            <AnimatedHighlightCard key={vehicle.label}>
              <a
                href="#marcas"
                className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 text-center shadow-lg shadow-zinc-300/40 active:scale-[0.98]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    className="h-7 w-7"
                  >
                    {vehicle.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-black">
                    {vehicle.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                    {vehicle.description}
                  </p>
                </div>
              </a>
            </AnimatedHighlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
