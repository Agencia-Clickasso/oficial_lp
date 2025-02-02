import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

// This would typically come from a CMS or API
const blogPosts = [
  {
    slug: "analise-dados-marketing-2025",
    title: "Como a Análise de Dados está Revolucionando o Marketing Digital em 2025",
    date: "29 nov. 2024",
    excerpt:
      "Descubra como as empresas estão utilizando big data e inteligência artificial para criar campanhas de marketing mais eficientes e personalizadas do que nunca.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    slug: "estrategias-seo-2025",
    title: "7 Estratégias Avançadas de SEO que Realmente Funcionam em 2025",
    date: "27 nov. 2024",
    excerpt:
      "Aprenda as técnicas mais recentes de otimização para mecanismos de busca que estão ajudando websites a alcançar o topo dos resultados do Google.",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    slug: "guia-cro-2025",
    title: "O Guia Definitivo para Aumentar suas Conversões com CRO em 2025",
    date: "25 nov. 2024",
    excerpt:
      "Descubra as melhores práticas de Otimização da Taxa de Conversão (CRO) para transformar mais visitantes em clientes e maximizar o ROI do seu site.",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
]

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Blog da Clickasso</h1>
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border-b pb-8">
                <div className="md:flex md:items-center">
                  <div className="md:flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-[#9333E9]">
                        {post.title}
                      </Link>
                    </h2>
                    <time className="text-gray-500 mb-2 block">{post.date}</time>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <Button asChild variant="outline">
                      <Link href={`/blog/${post.slug}`}>Leia mais</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

