import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogPost {
  date: string
  title: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    date: "29 nov. 2024",
    title: "Como a Análise de Dados está Revolucionando o Marketing Digital em 2025",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1280",
    slug: "analise-dados-marketing",
  },
  {
    date: "27 nov. 2024",
    title: "7 Estratégias Avançadas de SEO que Realmente Funcionam",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1280",
    slug: "estrategias-seo",
  },
  {
    date: "27 nov. 2024",
    title: "O Guia Definitivo para Aumentar suas Conversões com CRO",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1280",
    slug: "guia-cro",
  },
]

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <time className="text-sm text-gray-500">{post.date}</time>
          <h3 className="font-semibold text-xl leading-tight group-hover:text-[#9333E9] transition-colors">
            {post.title}
          </h3>
          <Button variant="outline" className="text-[#9333E9] border-[#9333E9] hover:bg-[#9333E9] hover:text-white">
            Saiba mais
          </Button>
        </div>
      </Link>
    </article>
  )
}

export function BlogPosts() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-12">
          <div>
            <span className="text-[#9333E9] text-sm font-medium mb-2 block">Conteúdos de Marketing Digital</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Confira insights exclusivos e dicas <span className="text-[#9333E9]">dos nossos especialistas</span>
            </h2>
          </div>
          <Button className="bg-[#9333E9] hover:bg-[#7928CA]">Ir para o Blog</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

