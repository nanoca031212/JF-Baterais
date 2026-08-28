const TESTIMONIALS = [
  {
    name: "Rodrigo Martins",
    vehicle: "Honda Civic · Bairro Célvia",
    quote:
      "O carro não pegou de manhã na garagem. Chamei a JF Baterias pelo WhatsApp e em menos de 40 minutos o técnico já estava aqui, trocou e ainda mediu o alternador.",
  },
  {
    name: "Camila Fonseca",
    vehicle: "VW Gol · Centro de Vespasiano",
    quote:
      "Atendimento muito transparente. O valor combinado no WhatsApp foi o mesmo cobrado na máquina de cartão na entrega, sem taxa escondida de instalação.",
  },
  {
    name: "Thiago Oliveira",
    vehicle: "Fiat Toro · Jardim da Glória",
    quote:
      "Precisei com urgência e o socorro foi imediato. Coloquei uma Heliar lacrada, certificado preenchido na hora e nota fiscal. Recomendo demais!",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-yellow-400">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[#0530A1] py-20 lg:py-28 text-white">
      <div className="px-5 lg:mx-auto lg:max-w-6xl lg:px-12">
        <span className="rounded-full bg-yellow-400 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-black">
          Opinião de Clientes
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white lg:text-5xl">
          Quem precisou da JF Baterias aprova
        </h2>
        <p className="mt-2 text-base text-blue-100 lg:text-lg">
          Atendimento de confiança e rapidez para motoristas em Vespasiano e região.
        </p>
      </div>

      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-auto lg:mt-12 lg:grid lg:max-w-6xl lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-12 lg:pb-0">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex w-[82%] shrink-0 snap-start flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-xl lg:w-full"
          >
            <div className="flex flex-col gap-3">
              <Stars />
              <p className="text-sm leading-relaxed text-zinc-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>

            <div className="mt-2 flex items-center gap-3 border-t border-zinc-100 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0530A1] text-sm font-bold text-white shadow-sm">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-zinc-500">{testimonial.vehicle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
