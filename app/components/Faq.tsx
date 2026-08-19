"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Como saber se a bateria do carro está ruim?",
    answer:
      "Sinais comuns são partida lenta, luzes do painel piscando, faróis fracos ou a bateria com mais de 2 anos de uso. Se notar isso, testamos gratuitamente na hora.",
  },
  {
    question: "Vocês fazem entrega e instalação de bateria em Vespasiano?",
    answer:
      "Sim, entregamos e instalamos no mesmo dia em Vespasiano e região, com técnico especializado, sem custo extra na maioria dos casos.",
  },
  {
    question: "Qual a melhor bateria para o meu carro?",
    answer:
      "Depende do modelo e ano do veículo. Trabalhamos com Moura, Heliar e Zetta e te ajudamos a escolher a ideal pelo WhatsApp.",
  },
  {
    question: "Quanto tempo dura a instalação?",
    answer:
      "Em geral leva de 15 a 30 minutos, feita no local que você estiver.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos Pix, cartão de débito e crédito parcelado em até 12x.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-5 py-20 lg:px-12 lg:py-28">
      <div className="flex flex-col items-center text-center">
        <span className="w-fit rounded-full border border-yellow-200 bg-yellow-50 px-4 py-1 text-xs font-bold uppercase tracking-wide text-yellow-700">
          FAQ
        </span>

        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-black lg:text-5xl">
          Dúvidas frequentes sobre bateria automotiva
        </h2>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500 lg:max-w-lg lg:text-base">
          Respostas rápidas para as principais dúvidas de quem procura
          bateria em Vespasiano com entrega, instalação e atendimento rápido.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 lg:mx-auto lg:mt-14 lg:max-w-3xl">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="rounded-2xl bg-zinc-50 p-5">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-sm font-bold text-black">
                  {faq.question}
                </span>
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center text-yellow-500 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-yellow-500">
                    <path d="M11 5a1 1 0 1 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5z" />
                  </svg>
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-sm leading-relaxed text-zinc-500">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
