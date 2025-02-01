import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Clickasso | Agência de Marketing Digital e Criação de Sites",
  description:
    "Marketing Digital baseado em dados para aumentar suas vendas. Especialistas em SEO, Criação de Sites e Marketing Digital.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

