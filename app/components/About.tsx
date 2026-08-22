import Image from "next/image";
import AnimatedHighlightCard from "./AnimatedHighlightCard";

const HIGHLIGHTS = [
  {
    title: "Instalação na hora",
    description: "Trocamos sua bateria no local, sem enrolação.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437 5.877-5.877"
      />
    ),
  },
  {
    title: "Garantia de fábrica",
    description: "Todas as marcas com garantia direto do fabricante.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    ),
  },
  {
    title: "Entrega expressa",
    description: "Levamos sua bateria no mesmo dia, em toda a região.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25h5.397m0 0a2.25 2.25 0 0 1 2.093 1.44l1.263 3.28c.107.28.164.582.164.883v3.9c0 .621-.504 1.125-1.125 1.125h-1.5m-6.892-8.628L11.25 6.75"
      />
    ),
  },
  {
    title: "Parcelamento fácil",
    description: "Pague no cartão em até 12x ou combine no WhatsApp.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a1.5 1.5 0 0 0 1.5-1.5V6.75a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5Z"
      />
    ),
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="overflow-x-hidden bg-white px-5 py-24 lg:px-12 lg:py-32"
    >
      <div className="lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative w-full overflow-hidden rounded-4xl bg-zinc-100 lg:order-2 shadow-lg">
          <Image
            src="/sobre.png"
            alt="Sobre a Rufino Baterias"
            width={800}
            height={1000}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="lg:order-1">
          <h2 className="mt-8 text-3xl font-extrabold tracking-tight text-black lg:mt-0 lg:text-5xl">
            Sobre a Rufino Baterias
          </h2>

          <p className="mt-3 text-base leading-relaxed text-zinc-600 lg:mt-6 lg:text-lg">
            Somos especialistas em baterias automotivas em Vespasiano:
            atendimento rápido, instalação profissional e as principais marcas
            do mercado para você voltar pra estrada sem dor de cabeça.
          </p>

          <p className="mt-4 text-base leading-relaxed text-zinc-600 lg:text-lg">
            Trabalhamos com carros, motos e caminhões, oferecendo entrega e
            instalação no mesmo dia, sem enrolação. Nossa equipe é treinada para
            orientar você na escolha certa, com transparência no preço e
            garantia de fábrica em todas as baterias vendidas.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 lg:mx-auto lg:mt-16 lg:grid lg:max-w-6xl lg:grid-cols-4 lg:gap-6">
        {HIGHLIGHTS.map((item) => (
          <AnimatedHighlightCard key={item.title}>
            <div className="flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  className="h-7 w-7"
                >
                  {item.icon}
                </svg>
              </div>
              <div>
                <p className="text-base font-bold text-black">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </div>
            </div>
          </AnimatedHighlightCard>
        ))}
      </div>
    </section>
  );
}
