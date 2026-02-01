"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function TeamSection() {
  const { t } = useLanguage()

  const team = [
    {
      name: "David Soto",
      years: 20,
      image: "/professional-male-barber-portrait-mature-spanish-m.jpg",
    },
    {
      name: "Antonio García",
      years: 15,
      image: "/professional-male-barber-portrait-young-spanish-ma.jpg",
    },
    {
      name: "Carlos Martínez",
      years: 10,
      image: "/professional-male-barber-portrait-spanish-man-mode.jpg",
    },
  ]

  return (
    <section id="equipo" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">{t.team.subtitle}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">{t.team.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.team.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden group">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-accent font-medium text-sm uppercase tracking-wider">
                  {member.years} {t.team.yearsExperience}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
