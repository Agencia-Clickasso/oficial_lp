import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SmartMarketing() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative aspect-video">
                  <Image
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1280"
                    alt="Equipe analisando dados"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative aspect-video mt-12">
                  <Image
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1280"
                    alt="Reunião de estratégia"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#9333E9]/5 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              <span className="text-[#9333E9]">Marketing orientado por dados,</span>
              <br />
              crescimento comprovado!
            </h2>

            <div className="space-y-6 text-gray-600 mb-8">
              <p>
                Nossa abordagem única combina análise avançada de dados com estratégias comprovadas de marketing
                digital. Transformamos números em ações que geram resultados mensuráveis para seu negócio.
              </p>

              <p>
                Nossa missão é clara:{" "}
                <span className="font-medium text-gray-900">
                  revolucionar o marketing digital através da ciência de dados
                </span>
                . Com uma equipe de especialistas em análise de dados e marketing, oferecemos soluções que realmente
                fazem a diferença.
              </p>

              <p>
                Aqui, cada decisão é baseada em dados concretos, garantindo que seu investimento em marketing digital
                gere o máximo retorno possível.
              </p>
            </div>

            <Button className="bg-[#9333E9] hover:bg-[#7928CA] mb-12">Conheça mais</Button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <Image
                src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="Google Partner"
                width={150}
                height={60}
                className="grayscale hover:grayscale-0 transition-all"
              />
              <Image
                src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="Meta Business Partner"
                width={150}
                height={60}
                className="grayscale hover:grayscale-0 transition-all"
              />
              <Image
                src="https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="Agency Partner"
                width={150}
                height={60}
                className="grayscale hover:grayscale-0 transition-all"
              />
              <Image
                src="https://images.pexels.com/photos/11035382/pexels-photo-11035382.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="Additional Partner"
                width={150}
                height={60}
                className="grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

