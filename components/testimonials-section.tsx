"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Carlos M.",
    text: "La mejor barbería de Estepona, sin duda. David y su equipo son verdaderos profesionales que se enorgullecen de su oficio.",
    rating: 5,
  },
  {
    name: "Miguel R.",
    text: "Llevo viniendo aquí durante años. El ambiente es fantástico y la atención al detalle es inigualable.",
    rating: 5,
  },
  {
    name: "James W.",
    text: "Como expatriado, encontrar un barbero de calidad era importante. David Soto superó todas mis expectativas. ¡Muy recomendable!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="opiniones" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Testimonios</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Lo Que Dicen Nuestros Clientes</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-primary-foreground/70 text-lg">Valoración media de 4.7 con más de 200 reseñas</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary border-secondary-foreground/10">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-accent/50 mb-6" />
                <p className="text-secondary-foreground/90 leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-secondary-foreground">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
