import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#9333E9]/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Logo and Social Links */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-[#9333E9]">
              Clickasso
            </Link>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-[#9333E9]">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#9333E9]">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#9333E9]">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#9333E9]">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <Link
                href="mailto:contato@clickasso.com.br"
                className="flex items-center gap-2 text-gray-600 hover:text-[#9333E9]"
              >
                <Mail className="w-4 h-4" />
                contato@clickasso.com.br
              </Link>
              <Link href="tel:11995597242" className="flex items-center gap-2 text-gray-600 hover:text-[#9333E9]">
                <Phone className="w-4 h-4" />
                (11) 99559-7242
              </Link>
              <Link
                href="https://calendly.com/matheus-puppe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9333E9] hover:bg-[#7928CA]"
              >
                Agendar reunião
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <nav className="space-y-3">
              <Link href="#" className="block text-gray-600 hover:text-[#9333E9]">
                Serviços
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-[#9333E9]">
                Cases
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-[#9333E9]">
                Blog
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-[#9333E9]">
                Empresa
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2025 Clickasso | Todos os direitos reservados | Desenvolvido por{" "}
              <Link href="#" className="text-[#9333E9] hover:underline">
                clickasso
              </Link>
            </p>
            <Link href="/politica-de-privacidade" className="text-sm text-[#9333E9] hover:underline">
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 flex flex-col gap-4">
        <Link
          href="https://wa.me/5511995597242"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.032 17.14c-.24.762-.896 1.4-1.657 1.631-.465.142-.937.213-1.41.213-.715 0-1.43-.143-2.145-.428-1.07-.428-2.14-1.071-3.21-1.928-1.428-1.142-2.856-2.57-3.998-4.283-.857-1.285-1.285-2.57-1.285-3.855 0-.714.143-1.428.428-2.142.286-.714.857-1.357 1.571-1.785l.072-.036c.428-.214.857-.357 1.285-.357.214 0 .428.036.643.107.214.071.428.214.571.428l1.285 1.785c.214.286.286.643.286.928 0 .286-.072.571-.214.857l-.5.714c-.143.214-.143.5 0 .714l.928 1.428c.286.428.643.857 1.071 1.214.214.214.5.214.714 0l.714-.5c.286-.143.571-.214.857-.214.286 0 .643.071.928.285l1.786 1.286c.214.143.357.357.428.571.071.214.107.428.107.643 0 .428-.143.857-.357 1.285z" />
          </svg>
        </Link>
        <Link
          href="https://calendly.com/matheus-puppe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#9333E9] text-white p-3 rounded-full shadow-lg hover:bg-[#7928CA] transition-colors"
          aria-label="Agendar reunião"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </Link>
      </div>
    </footer>
  )
}

