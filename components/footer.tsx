import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-semibold mb-4">David Soto</h3>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Barbería premium que ofrece cortes clásicos y estilos modernos en el corazón de Estepona.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">Ubicación</h4>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin className="h-5 w-5 mt-1 shrink-0 text-accent" />
              <p>
                Calle Terraza, Edf. Grimaldi, 3
                <br />
                Estepona
                <br />
                Málaga, España
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">Horario</h4>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <Clock className="h-5 w-5 mt-1 shrink-0 text-accent" />
              <div>
                <p className="mb-2">
                  <span className="font-medium text-primary-foreground">Lun - Vie</span>
                  <br />
                  10:00 - 14:00
                  <br />
                  17:00 - 20:30
                </p>
                <p>
                  <span className="font-medium text-primary-foreground">Sáb - Dom</span>
                  <br />
                  Cerrado
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">Contacto</h4>
            <div className="flex items-start gap-3 text-primary-foreground/70 mb-6">
              <Phone className="h-5 w-5 mt-1 shrink-0 text-accent" />
              <a href="tel:+34952806592" className="hover:text-accent transition-colors">
                952 80 65 92
              </a>
            </div>
            <a href="#reservas">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">Reservar Ahora</Button>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary">
          <div className="aspect-[16/9] md:aspect-[21/9] bg-secondary rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.9!2d-5.1489!3d36.4267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDI1JzM2LjEiTiA1wrAwOCc1Ni4wIlc!5e0!3m2!1sen!2ses!4v1!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de David Soto Barbería"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-secondary">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 David Soto Barbería. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
