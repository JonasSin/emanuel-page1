'use client';

import { Clock, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceSchedule = [
  {
    day: 'Domingo',
    times: ['11:00 AM', '12:00 PM', '2:00 PM'],
    description: 'Culto Dominical',
  },
  {
    day: 'Martes',
    times: ['10:00 AM'],
    description: 'Mensaje para Obreros',
  },
  {
    day: 'Jueves',
    times: ['10:00 AM'],
    description: 'Mensaje Escuela de evangelismo',
  },
  {
    day: 'Viernes',
    times: ['01:30 PM'],
    description: 'Mensaje para Universitarios',
  },
  {
    day: 'Viernes',
    times: ['6:00 PM'],
    description: 'Culto Oración',
  },
  {
    day: 'Sabado',
    times: ['10:00 AM'],
    description: 'Culto Núcleo',
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-gradient-to-br from-amber-900 to-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Horarios de Servicios
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Únete a Nosotros
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {serviceSchedule.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-background rounded-lg border border-border hover:border-foreground/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {service.day}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.description}
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.times.map((time, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground"
                  >
                    <Clock className="h-4 w-4" />
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Location Card */}
        <div className="p-8 md:p-12 bg-background rounded-lg border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Ubicación
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Betania, Ciudad de Panamá
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Tiempos de adoración, enseñanza y oración donde como iglesia nos reunimos para escuchar la Palabra de Dios, fortalecer nuestra fe y crecer en comunión.
              </p>
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                Obtener Direcciones
              </Button>
            </div>
            <div className="aspect-video bg-background rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15767.851756726285!2d-79.53!3d9.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMzYuMCJOIDc5wrAzMScxMi4wIlc!5e0!3m2!1sen!2spa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Iglesia Emanuel"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
