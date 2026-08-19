const TESTIMONIALS = [
  {
    name: "Marcos Silva",
    vehicle: "Fiat Argo",
    quote:
      "Bateria descarregou de manhã e em menos de uma hora já estava tudo resolvido, com instalação incluída.",
  },
  {
    name: "Juliana Costa",
    vehicle: "Chevrolet Onix",
    quote:
      "Atendimento rápido pelo WhatsApp, preço justo e a bateria Moura até hoje sem problema nenhum.",
  },
  {
    name: "Roberto Alves",
    vehicle: "Hyundai HB20",
    quote:
      "Vieram até minha casa trocar a bateria no mesmo dia. Recomendo pra quem não quer perder tempo.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
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
    <section id="depoimentos" className="bg-black/10 py-32 lg:py-36">
      <div className="px-5 lg:mx-auto lg:max-w-6xl lg:px-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-white lg:text-5xl">
          O que dizem nossos clientes
        </h2>
        <p className="mt-1 text-base text-blue-100 lg:text-lg">Quem já pediu, recomenda</p>
      </div>

      <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-auto lg:mt-12 lg:grid lg:max-w-6xl lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-12 lg:pb-0">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex w-[78%] shrink-0 snap-start flex-col gap-3 rounded-2xl bg-white p-5 lg:w-full lg:p-6"
          >
            <Stars />

            <p className="text-sm leading-relaxed text-zinc-700">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div className="mt-1 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-black">
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
