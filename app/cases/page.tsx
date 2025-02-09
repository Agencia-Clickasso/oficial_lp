import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { CaseStudies } from "@/components/case-studies"

export default function CasesPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Cases de Sucesso</h1>
            <p className="text-xl text-gray-600">
              Conheça algumas das histórias de transformação digital que ajudamos a construir.
            </p>
          </div>
          <CaseStudies />
        </div>
      </main>
      <Footer />
    </>
  )
}

