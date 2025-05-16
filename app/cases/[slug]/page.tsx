import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ArrowLeft, ExternalLink } from "lucide-react"

// This would typically come from a CMS or API
const caseStudies = [
  {
    slug: "felix-pet",
    title: "Felix Pet: Transformação digital para adestramento canino profissional",
    client: "Felix Pet",
    industry: "Serviços Pet",
    website: "https://felixpet.com.br",
    challenge:
      "A Felix Pet precisava estabelecer uma presença digital profissional que refletisse a qualidade de seus serviços de adestramento e atraísse mais clientes qualificados.",
    solution:
      "Desenvolvemos uma estratégia digital completa, incluindo um website moderno e otimizado para conversões, integrado com sistema de agendamento e blog educativo sobre comportamento canino.",
    results: [
      "Aumento de 150% em leads qualificados",
      "Taxa de conversão de 12% para agendamentos",
      "Crescimento de 200% no tráfego orgânico",
      "Redução de 40% no custo por aquisição",
    ],
    testimonial: {
      quote:
        "A Clickasso transformou completamente nossa presença digital. O novo site não só trouxe mais clientes, mas também facilitou todo o processo de agendamento e comunicação.",
      author: "Jeferson Felix",
      role: "Fundador Felix Pet",
    },
    image:
      "/felix.png",
  },
  {
    slug: "kefir-vitalis",
    title: "Kefir Vitalis: E-commerce de produtos naturais com foco em conversão",
    client: "Kefir Vitalis",
    industry: "Alimentos Naturais",
    website: "https://kefirvitalis.com.br",
    challenge:
      "A Kefir Vitalis precisava de uma plataforma de e-commerce que transmitisse confiança e facilitasse a venda de seus produtos naturais, mantendo a essência artesanal da marca.",
    solution:
      "Criamos uma loja virtual completa com foco em experiência do usuário, incluindo blog educativo sobre benefícios do kefir, sistema de assinaturas e programa de fidelidade.",
    results: [
      "Aumento de 300% nas vendas online",
      "Redução de 25% na taxa de abandono do carrinho",
      "85% de taxa de renovação nas assinaturas",
      "Crescimento de 180% na base de clientes",
    ],
    testimonial: {
      quote:
        "A Clickasso não só criou nossa loja virtual, mas nos ajudou a construir uma presença digital que educa e engaja nossos clientes. Os resultados superaram todas as expectativas.",
      author: "Anne Puppe",
      role: "Fundadora Kefir Vitalis",
    },
    image:
      "/kefir.png",
  },
  {
    slug: "jussara-massoterapeuta",
    title: "Jussara Massoterapeuta: Presença digital para profissional de saúde",
    client: "Jussara Massoterapeuta",
    industry: "Saúde e Bem-estar",
    website: "https://jussaramassoterapeuta.com.br",
    challenge:
      "Jussara precisava estabelecer uma presença digital profissional que transmitisse confiança e facilitasse o agendamento de sessões, destacando sua experiência e especialidades.",
    solution:
      "Desenvolvemos um site profissional com sistema de agendamento integrado, blog sobre bem-estar e massoterapia, e estratégia de marketing digital focada em SEO local.",
    results: [
      "Aumento de 200% nos agendamentos online",
      "Primeira posição no Google para palavras-chave locais",
      "Redução de 60% no tempo gasto com gestão de agenda",
      "95% de taxa de satisfação dos clientes",
    ],
    testimonial: {
      quote:
        "O site e a estratégia digital desenvolvidos pela Clickasso transformaram meu negócio. Agora tenho uma agenda sempre cheia e clientes que me encontram facilmente online.",
      author: "Jussara Teresinha",
      role: "Massoterapeuta",
    },
    image:
      "/jussara.png",
  },
  {
    slug: "purple-stock",
    title: "Purple Stock: Sistema de Controle de Estoque Inteligente",
    client: "Purple Stock",
    industry: "Software",
    website: "https://www.purplestock.com.br",
    challenge:
      "O Purple Stock precisava de uma presença digital que comunicasse efetivamente os benefícios de sua solução de gestão de inventário e atraísse empresas inovadoras.",
    solution:
      "Desenvolvemos um site moderno e responsivo que destaca as funcionalidades do sistema, com demonstrações interativas e material educativo sobre gestão de estoque.",
    results: [
      "Aumento de 250% em leads qualificados",
      "Taxa de conversão de 15% para demonstrações",
      "Redução de 35% no custo por aquisição",
      "Crescimento de 180% na base de clientes",
    ],
    testimonial: {
      quote:
        "A estratégia digital desenvolvida pela Clickasso foi fundamental para estabelecermos nossa marca no mercado de sistemas de gestão. Os resultados superaram nossas expectativas.",
      author: "Matheus Puppe",
      role: "CEO Purple Stock",
    },
    image:
      "/purple.png",
  },
  {
    slug: "lucas-dog-walker",
    title: "Lucas Dog Walker: Presença digital para serviços de cuidados caninos",
    client: "Lucas Dog Walker",
    industry: "Serviços Pet",
    website: "https://lucasdogwalker.com.br",
    challenge:
      "O Lucas Dog Walker precisava estabelecer uma presença digital profissional que destacasse sua experiência de 7 anos e os serviços especializados em cuidados com cães na Zona Leste de São Paulo.",
    solution:
      "Desenvolvemos um site completo com sistema de agendamento, seção de serviços detalhada, apresentação da equipe e área de atuação, além de integração com WhatsApp para facilitar o contato.",
    results: [
      "Aumento de 200% nos agendamentos online",
      "Cobertura de 3 regiões principais de São Paulo",
      "Sistema de agendamento integrado com WhatsApp",
      "Destaque para certificações em primeiros socorros",
    ],
    testimonial: {
      quote:
        "A Clickasso transformou nossa presença digital, criando um site que reflete nossa dedicação e profissionalismo. O sistema de agendamento facilitou muito o contato com nossos clientes.",
      author: "Lucas",
      role: "Dog Walker & Cuidador",
    },
    image: "/lucas.png",
  },
]

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((study) => study.slug === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <>
      <Nav />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/cases" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar para Cases
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">{study.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>Cliente: {study.client}</span>
              <span>•</span>
              <span>Indústria: {study.industry}</span>
              <span>•</span>
              <Link
                href={study.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#9333E9] hover:text-[#7928CA]"
              >
                Visitar site
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="relative aspect-video">
              <Image
                src={study.image || "/placeholder.svg"}
                alt={study.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Desafio</h2>
                <p className="text-gray-600">{study.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Solução</h2>
                <p className="text-gray-600">{study.solution}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Resultados</h2>
                <ul className="space-y-2">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-[#9333E9]" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#9333E9]/5 rounded-2xl p-8 mb-16">
            <blockquote className="relative">
              <p className="text-xl text-gray-600 mb-4 italic">{study.testimonial.quote}</p>
              <footer>
                <div className="font-semibold">{study.testimonial.author}</div>
                <div className="text-gray-600">{study.testimonial.role}</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

