"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          David Soto
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#nosotros"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.header.about}
          </a>
          <a
            href="#servicios"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.header.services}
          </a>
          <a
            href="#equipo"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.header.team}
          </a>
          <a
            href="#opiniones"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.header.reviews}
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.header.contact}
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 border border-border rounded-md"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <a href="#reservas"><Button className="bg-primary text-primary-foreground hover:bg-secondary">{t.header.bookAppointment}</Button></a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-6 gap-4">
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 border border-border rounded-md w-fit"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
            <a
              href="#nosotros"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.about}
            </a>
            <a
              href="#servicios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.services}
            </a>
            <a
              href="#equipo"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.team}
            </a>
            <a
              href="#opiniones"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.reviews}
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.contact}
            </a>
            <a href="#reservas"><Button className="bg-primary text-primary-foreground hover:bg-secondary w-full mt-2">{t.header.bookAppointment}</Button></a>

          </nav>
        </div>
      )}
    </header>
  )
}


