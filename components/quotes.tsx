import Image from "next/image"
import { Quote } from "lucide-react"

interface QuoteProps {
  quote: string
  author: string
  role: string
  image: string
}

const quotes: QuoteProps[] = [
  {
    quote:
      "A Clickasso transformou completamente nossa presença online. Seus insights baseados em dados nos ajudaram a atingir um público que nem sabíamos que existia!",
    author: "Anne Puppe",
    role: "Fundadora Kefir Vitalis",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/441337957_1241614800345421_7475047349878831139_n.jpg-3dwQ88T2wwWEmC9iE9cG0LDpFuvcSr.jpeg",
  },
  {
    quote:
      "Desde que começamos a trabalhar com a Clickasso, nossas vendas online aumentaram em 200%. Eles realmente entendem o mercado pet!",
    author: "Jeferson Felix",
    role: "Felix Pet",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/420524581_427559219664965_8050834590203606426_n.jpg-0OU56kGThIf6J7FLPWUiravZhIlsnw.jpeg",
  },
  {
    quote:
      "A equipe da Clickasso não só melhorou minha visibilidade online, mas também me ajudou a entender melhor meu público-alvo. Estou muito satisfeita com os resultados!",
    author: "Jussara Teresinha",
    role: "Jussara Massoterapeuta",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2017.38.33-Mk938qV7kGmpVqJVPViArlgwIPZK6h.png",
  },
]

function QuoteCard({ quote, author, role, image }: QuoteProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg relative">
      <Quote className="w-12 h-12 text-[#9333E9] absolute -top-6 -left-6" />
      <p className="text-gray-600 mb-4 mt-4">{quote}</p>
      <div className="flex items-center gap-4">
        <Image src={image || "/placeholder.svg"} alt={author} width={48} height={48} className="rounded-full" />
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function Quotes() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 relative inline-block">
          O que nossos <span className="text-[#9333E9]">clientes</span> dizem
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} {...quote} />
          ))}
        </div>
      </div>
    </section>
  )
}

