import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "David Soto",
    experience: "20 años de experiencia",
    image: "/professional-male-barber-portrait-mature-spanish-m.webp",
  },
  {
    name: "Antonio García",
    experience: "15 años de experiencia",
    image: "/professional-male-barber-portrait-young-spanish-ma.webp",
  },
  {
    name: "Carlos Martínez",
    experience: "10 años de experiencia",
    image: "/professional-male-barber-portrait-spanish-man-mode.webp",
  },
]

export function TeamSection() {
  return (
    <section id="equipo" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Profesionales</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">Nuestro Equipo</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conoce a los maestros barberos que hacen posible tu mejor versión cada día.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden group">
              <div className="aspect-square bg-muted overflow-hidden relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-accent font-medium text-sm uppercase tracking-wider">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
