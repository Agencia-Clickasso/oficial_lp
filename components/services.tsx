import type React from "react"
import { ShoppingCart, LineChart, Megaphone, Server } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

function ServiceCard({ icon, title, description, className = "" }: ServiceCardProps) {
  return (
    <div className={`p-6 rounded-xl transition-transform hover:scale-105 ${className}`}>
      <div className="w-10 h-10 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  )
}

export function Services() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#9333E9]">Está em busca de</span> outros serviços?
          </h2>
          <p className="text-gray-600">
            Confira nossos outros serviços de Marketing Digital projetadas para impulsionar o crescimento do seu negócio
            e maximizar os resultados online:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={<ShoppingCart className="w-6 h-6" />}
            title="E-commerce"
            description="Plataformas de vendas online otimizadas para maximizar conversões e proporcionar a melhor experiência de compra."
            className="bg-[#9333E9]/5 text-[#9333E9]"
          />

          <ServiceCard
            icon={<LineChart className="w-6 h-6" />}
            title="CRO"
            description="Otimização contínua baseada em dados para transformar mais visitantes em clientes satisfeitos."
            className="bg-[#9333E9]/10 text-[#9333E9]"
          />

          <ServiceCard
            icon={<Megaphone className="w-6 h-6" />}
            title="Inbound Marketing"
            description="Estratégias personalizadas que atraem, engajam e convertem seu público-alvo em clientes fiéis."
            className="bg-black text-white"
          />

          <ServiceCard
            icon={<Server className="w-6 h-6" />}
            title="Hospedagem"
            description="Infraestrutura robusta e segura que garante performance excepcional para seu site 24/7."
            className="bg-teal-700 text-white"
          />
        </div>
      </div>
    </section>
  )
}

