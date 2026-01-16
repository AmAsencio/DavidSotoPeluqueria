import { Scissors, Award, Clock } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Nuestra Historia</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
              Una Década de Artesanía en Estepona
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Desde 2014, David Soto ha sido el destino preferido para caballeros exigentes que buscan un cuidado
              excepcional en Estepona. Combinamos las tradiciones de barbería de toda la vida con técnicas
              contemporáneas para ofrecer una experiencia inigualable.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Nuestros maestros barberos están formados en técnicas clásicas de navaja transmitidas de generación en
              generación, asegurando que cada visita te deje con el mejor aspecto y sensación posible.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                  <Scissors className="h-5 w-5 text-accent" />
                </div>
                <p className="font-serif text-2xl font-semibold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Años de Experiencia</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <p className="font-serif text-2xl font-semibold text-foreground">4.7</p>
                <p className="text-sm text-muted-foreground">Valoración</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <p className="font-serif text-2xl font-semibold text-foreground">5000+</p>
                <p className="text-sm text-muted-foreground">Clientes Satisfechos</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
              <img
                src="/professional-barber-giving-haircut-to-client-in-up.webp"
                alt="Barbero trabajando"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary p-6 rounded-lg hidden md:flex flex-col justify-center">
              <p className="text-accent text-sm font-medium tracking-wider uppercase mb-1">Establecidos</p>
              <p className="font-serif text-5xl font-semibold text-primary-foreground">2014</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
