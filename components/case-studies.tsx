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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2017.30.21-drwUtsf4C8MFIjc0UDLWCppWfftzHw.png",
    logo: "/placeholder.svg?height=80&width=160",
    slug: "felix-pet",
    website: "https://felixpet.com.br",
  },
  {
    title: "Kefir Vitalis: E-commerce de produtos naturais com foco em conversão",
    description:
      "A Kefir Vitalis é especializada em kefir artesanal de alta qualidade. Criamos uma estratégia digital completa que aumentou a visibilidade da marca e as vendas online, estabelecendo uma forte presença no mercado de produtos naturais.",
    image:
      "https://sjc.microlink.io/UMtpRQkmU-QxzK0CbqpZpIT1FFvHRNkoDHoF5H2U_zfu7yBU6ClxTEbKbekRqtRMcjjG-j3R2AY1G-M8fJUkFw.jpeg",
    logo: "/placeholder.svg?height=80&width=160",
    slug: "kefir-vitalis",
    website: "https://kefirvitalis.com.br",
  },
  {
    title: "Jussara Massoterapeuta: Presença digital para profissional de saúde",
    description:
      "Desenvolvemos uma identidade digital profissional para a massoterapeuta Jussara, que resultou em um aumento significativo de agendamentos e reconhecimento da marca no mercado de bem-estar e saúde.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2017.30.53-x7ikXvyrDss7SphbuMqKuUGvyrr6Yu.png",
    logo: "/placeholder.svg?height=80&width=160",
    slug: "jussara-massoterapeuta",
    website: "https://jussaramassoterapeuta.com.br",
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
              <Link href={study.website} target="_blank" rel="noopener noreferrer">
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
                    <span className="text-white font-medium">Visitar site</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#9333E9] group-hover:text-[#7928CA] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{study.description}</p>
                  <Button
                    variant="link"
                    className="text-[#9333E9] p-0 h-auto font-semibold hover:no-underline group-hover:text-[#7928CA]"
                  >
                    Ver case completo
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

