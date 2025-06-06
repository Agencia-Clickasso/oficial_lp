"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CaseStudy {
  title: string
  description: string
  image: string
  logo: string
  slug: string
  website: string
}

const caseStudies: CaseStudy[] = [
  {
    title: "Felix Pet: Transformação digital para adestramento canino profissional",
    description:
      "A Felix Pet é referência em adestramento e comportamento canino. Desenvolvemos uma presença digital que reflete a excelência e profissionalismo da marca, resultando em um aumento significativo de leads qualificados e conversões.",
    image:
      "/felix.png",
    logo: "/placeholder.svg?height=80&width=160",
    slug: "felix-pet",
    website: "https://felixpet.com.br",
  },
  {
    title: "Kefir Vitalis: E-commerce de produtos naturais com foco em conversão",
    description:
      "A Kefir Vitalis é especializada em kefir artesanal de alta qualidade. Criamos uma estratégia digital completa que aumentou a visibilidade da marca e as vendas online, estabelecendo uma forte presença no mercado de produtos naturais.",
    image: "/kefir.png",
    logo: "/placeholder.svg?height=80&width=160",
    slug: "kefir-vitalis",
    website: "https://kefirvitalis.com.br",
  },
  {
    title: "Jussara Massoterapeuta: Presença digital para profissional de saúde",
    description:
      "Desenvolvemos uma identidade digital profissional para a massoterapeuta Jussara, que resultou em um aumento significativo de agendamentos e reconhecimento da marca no mercado de bem-estar e saúde.",
    image:
      "/jussara.png",
    logo: "/placeholder.svg?height=80&width=160",
    slug: "jussara-massoterapeuta",
    website: "https://jussaramassoterapeuta.com.br",
  },
  {
    title: "Purple Stock: Sistema de Controle de Estoque Inteligente",
    description:
      "Desenvolvemos uma plataforma completa de gestão de inventário que transformou a maneira como empresas controlam seus estoques. O Purple Stock oferece eficiência e precisão para empresas inovadoras.",
    image:
      "/purple.png",
    logo: "/placeholder.svg?height=80&width=160",
    slug: "purple-stock",
    website: "https://www.purplestock.com.br",
  },
  {
    title: "Lucas Dog Walker: Presença digital para serviços de cuidados caninos",
    description:
      "Desenvolvemos uma identidade digital completa para o Lucas Dog Walker, destacando seus 7 anos de experiência e serviços especializados em cuidados com cães na Zona Leste de São Paulo.",
    image: "/lucas.png",
    logo: "/placeholder.svg?height=80&width=160",
    slug: "lucas-dog-walker",
    website: "https://lucasdogwalker.com.br",
  },
]

export function CaseStudies() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold relative inline-block">
            Resultados que dão orgulho
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group">
              <div className="relative aspect-video">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  loader={({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link
                    href={study.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium bg-[#9333E9] px-4 py-2 rounded-md hover:bg-[#7928CA] transition-colors"
                  >
                    Visitar site
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#9333E9] group-hover:text-[#7928CA] transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{study.description}</p>
                <Button
                  asChild
                  variant="link"
                  className="text-[#9333E9] p-0 h-auto font-semibold hover:no-underline group-hover:text-[#7928CA]"
                >
                  <Link href={`/cases/${study.slug}`}>Ver case completo</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

