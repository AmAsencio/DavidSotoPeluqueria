"use client"

import { Scissors, TrendingUp, Sparkles, Palette } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Scissors,
      title: t.services.classicCut,
      description: t.services.classicCutDesc,
      price: "€25",
    },
    {
      icon: TrendingUp,
      title: t.services.modernTrends,
      description: t.services.modernTrendsDesc,
      price: "€22",
    },
    {
      icon: Sparkles,
      title: t.services.beardTrim,
      description: t.services.beardTrimDesc,
      price: "€18",
    },
    {
      icon: Palette,
      title: t.services.coloring,
      description: t.services.coloringDesc,
      price: "€35+",
    },
  ]

  return (
    <section id="servicios" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">{t.services.subtitle}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">{t.services.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.services.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent/50 transition-colors group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-foreground">{service.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">{t.services.footnote}</p>
        </div>
      </div>
    </section>
  )
}
