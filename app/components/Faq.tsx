"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Vocês cobram taxa de entrega e instalação em Vespasiano?",
    answer:
      "A entrega e instalação são gratuitas para a maior parte de Vespasiano. Você paga somente o valor anunciado da bateria.",
  },
  {
    question: "Quanto tempo a JF Baterias demora para chegar?",
    answer:
      "Em média chegamos entre 30 a 50 minutos após o chamado no WhatsApp, dependendo da sua localização em Vespasiano e região.",
  },
  {
    question: "E se o defeito não for a bateria?",
    answer:
      "Nosso técnico realiza o teste de carga e do alternador na hora com equipamento digital. Se a bateria ainda estiver boa ou o problema for outro, nós te avisamos com total transparência.",
  },
  {
    question: "Como funciona a garantia da bateria?",
    answer:
      "Todas as nossas baterias são novas, lacradas e acompanham certificado de garantia de fábrica válido de 12 a 24 meses (de acordo com a marca) em todo o Brasil.",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "O pagamento é realizado somente após a instalação e teste: aceitamos Pix com desconto, cartões de débito e parcelamento em até 12x no cartão de crédito.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-5 py-20 lg:px-12 lg:py-28">
      <div className="flex flex-col items-center text-center">
        <span className="w-fit rounded-full border border-yellow-200 bg-yellow-50 px-4 py-1 text-xs font-bold uppercase tracking-wide text-yellow-700">
          Tire suas Dúvidas
        </span>

        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-black lg:text-5xl">
          Perguntas Frequentes
        </h2>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500 lg:max-w-lg lg:text-base">
          Tudo o que você precisa saber sobre o socorro, troca e garantia da JF Baterias em Vespasiano.
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
