import { Globe, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function WebsiteCreation() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#9333E9]/10 text-[#9333E9] font-medium text-sm mb-6">
              Criação de Sites
            </span>

            <h2 className="text-4xl font-bold leading-tight mb-6">
              Desenvolva um site que <span className="text-[#9333E9]">gera resultados</span> e impulsiona seu negócio
            </h2>

            <p className="text-gray-600 mb-8">
              Criamos sites que são verdadeiras máquinas de conversão. Nossa abordagem única combina design intuitivo
              com otimização técnica avançada, garantindo que cada visitante se torne uma oportunidade real de negócio.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#9333E9]/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#9333E9]" />
                </div>
                <span className="text-gray-700">Presença no maior sistema de buscas do mundo, o Google</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#9333E9]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#9333E9]" />
                </div>
                <span className="text-gray-700">Experiência do usuário focada em conversão</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#9333E9]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#9333E9]" />
                </div>
                <span className="text-gray-700">Tenha um vendedor 24h por dia</span>
              </div>
            </div>

            <Button className="bg-[#9333E9] hover:bg-[#7928CA]">Conheça mais</Button>
          </div>

          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1280"
              alt="Modern website design"
              width={640}
              height={480}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#9333E9]/10 flex items-center justify-center">
                  <span className="text-[#9333E9] font-bold">98</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Google PageSpeed</p>
                  <p className="font-medium">Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

