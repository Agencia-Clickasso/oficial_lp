"use client"

import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  image: string
}

const testimonials: TestimonialProps[] = [
  {
    quote:
      "A equipe superou todas as expectativas. Em apenas 3 meses, aumentamos nossa taxa de conversão em 150% e vimos um crescimento significativo no tráfego orgânico.",
    author: "Bruno Moura",
    role: "Diretor de Marketing",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    quote:
      "A metodologia baseada em dados transformou completamente nossa estratégia digital. Conseguimos triplicar nossas leads qualificadas em apenas 6 meses.",
    author: "Brenda França",
    role: "CEO",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    quote:
      "O ROI que alcançamos com as campanhas foi excepcional. Nossa receita online cresceu 200% no último trimestre graças às estratégias implementadas.",
    author: "André Mafra",
    role: "Diretor Comercial",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    quote:
      "A expertise em análise de dados combinada com estratégias de marketing nos ajudou a identificar e conquistar novos mercados de forma eficiente.",
    author: "Ábila Ribeiro",
    role: "Gerente de Crescimento",
    image: "/placeholder.svg?height=48&width=48",
  },
]

function TestimonialCard({ quote, author, role, image }: TestimonialProps) {
  return (
    <div className="bg-[#9333E9]/5 p-6 rounded-xl relative min-w-[300px] flex flex-col">
      <Quote className="w-8 h-8 text-[#9333E9] mb-4" />
      <p className="text-gray-600 mb-8 flex-grow">{quote}</p>
      <div className="flex items-center gap-3">
        <Image src={image || "/placeholder.svg"} alt={author} width={48} height={48} className="rounded-full" />
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 relative inline-block">
          <span className="text-[#9333E9]">Além dos resultados</span>, fortes parceiros
          <svg
            className="absolute -bottom-2 left-0 w-full"
            height="8"
            viewBox="0 0 200 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 5.5C47.6667 2.33333 154.4 -2.4 199 6" stroke="#9333E9" strokeWidth="2" />
          </svg>
        </h2>

        <div className="overflow-x-auto pb-8">
          <div className="flex gap-6 min-w-max lg:grid lg:grid-cols-4 lg:min-w-0">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

