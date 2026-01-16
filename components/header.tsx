"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            Nosotros
          </a>
          <a
            href="#servicios"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Servicios
          </a>
          <a
            href="#equipo"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Equipo
          </a>
          <a
            href="#opiniones"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Opiniones
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contacto
          </a>
        </nav>

        <div className="hidden md:block">
          <a href="#reservas"><Button className="bg-primary text-primary-foreground hover:bg-secondary">Reservar Cita</Button></a>
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
            <a
              href="#nosotros"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#equipo"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Equipo
            </a>
            <a
              href="#opiniones"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Opiniones
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <a href="#reservas"><Button className="bg-primary text-primary-foreground hover:bg-secondary w-full mt-2">Reservar Cita</Button></a>
          </nav>
        </div>
      )}
    </header>
  )
}
