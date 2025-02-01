import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-16 relative">
      <Image
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Team working on digital marketing strategy"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#9333E9]/10 text-[#9333E9] font-medium text-sm mb-6 backdrop-blur-sm">
              Agência de Marketing Digital
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Transforme dados em <span className="text-[#9333E9]">resultados reais</span> para seu{" "}
              <span className="relative">
                negócio digital!
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.5C47.6667 2.33333 154.4 -2.4 199 6" stroke="#9333E9" strokeWidth="2" />
                </svg>
              </span>
            </h1>

            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Somos especialistas em transformar dados em estratégias efetivas. Combinamos análise avançada com técnicas
              comprovadas de SEO e marketing digital para impulsionar seu crescimento online.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-[#9333E9] hover:bg-[#7928CA] w-full sm:w-auto">
                Agendar reunião
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#9333E9] text-[#9333E9] hover:bg-[#9333E9] hover:text-white w-full sm:w-auto backdrop-blur-sm"
              >
                Cases de sucesso
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

