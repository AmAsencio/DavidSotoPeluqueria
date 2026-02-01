"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"


export function HeroSection() {
const { t } = useLanguage()

  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/premium-barber-shop-interior-dark-moody-lighting-v.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6">{t.hero.location}</p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-primary-foreground leading-tight mb-8 text-balance">
          {t.hero.headline1}
          <br />
          {t.hero.headline2}
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#reservas">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#servicios">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 bg-transparent"
            >
              {t.hero.viewServices}
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
        <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
        <div className="w-px h-12 bg-primary-foreground/30 animate-pulse" />
      </div>
    </section>
  )
}
