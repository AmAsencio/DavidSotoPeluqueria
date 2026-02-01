"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function BookingSection() {
  const { t } = useLanguage()

  return (
    <section id="reservas" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">{t.booking.subtitle}</p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-10">{t.booking.title}</h2>

        <div className="flex justify-center">
          <a
            href="https://davidsotoapp.web.app/p/home"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <Button
              size="lg"
              className="w-full md:min-w-[400px] bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-lg font-bold py-8 px-12 rounded-lg shadow-lg"
            >
              {t.booking.cta}
            </Button>
          </a>
        </div>

        <p className="mt-8 text-slate-500 text-sm font-semibold uppercase tracking-wide">
          {t.booking.appText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <a
            href="https://apps.apple.com/es/app/david-soto-maestros-barberos/id6449134109"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-80"
            aria-label="Descargar en App Store"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="h-12"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.gausswebapp.reservasdavidsoto&hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-80"
            aria-label="Disponible en Google Play"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
