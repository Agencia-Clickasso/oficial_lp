import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-[#9333E9]">
          Clickasso
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-600 hover:text-[#9333E9]">
            Serviços
          </Link>
          <Link href="#" className="text-gray-600 hover:text-[#9333E9]">
            Cases
          </Link>
          <Link href="#" className="text-gray-600 hover:text-[#9333E9]">
            Conteúdos
          </Link>
          <Link href="#" className="text-gray-600 hover:text-[#9333E9]">
            Empresa
          </Link>
          <Button className="bg-[#9333E9] hover:bg-[#7928CA]">Agende uma reunião</Button>
        </div>
      </div>
    </nav>
  )
}

