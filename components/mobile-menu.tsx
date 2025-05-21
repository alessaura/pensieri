"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen } from "lucide-react"

export default function MobileMenu({ scrolled = false }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { name: "Nossa História", href: "#nossa-história" },
    { name: "Editora", href: "#editora" },
    { name: "Biblioteca", href: "#biblioteca" },
    { name: "Comunicação", href: "#comunicação" },
    { name: "Contato", href: "#contato" },
    { name: "Termos de Uso", href: "/termos" },
    { name: "Política de Privacidade", href: "/privacidade" },
  ]

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className={`transition-colors duration-500 ${scrolled ? "text-neutral-800 dark:text-white" : "text-white"}`}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-emerald-900 dark:bg-neutral-900 bg-opacity-98">
          <div className="flex justify-end p-6">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center space-y-10 p-8 mt-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-3xl font-serif font-medium text-white hover:text-emerald-300 transition-colors"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <div className="flex flex-col items-center">
              <div className="relative w-12 h-12 mb-4">
                <div className="absolute inset-0 bg-white transform rotate-45"></div>
                <div className="absolute inset-1 bg-emerald-900 dark:bg-neutral-900 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-white/60 text-sm">© 2025 Editora Pensieri</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
