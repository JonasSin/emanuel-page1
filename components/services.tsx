'use client';

import { Clock, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceSchedule = [
  {
    day: 'Domingo',
    times: ['11:00 AM'],
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
    times: ['7:00 PM'],
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
    <section id="servicios" 
  className="py-32 bg-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.4em] uppercase text-black/60 mb-4">
            Horarios de Servicios
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/60">
            Únete a Nosotros
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {serviceSchedule.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-[#FCA311]/600    " >{/* rounded-lg border border-border hover:border-foreground/30 transition-all duration-300*/ }
               
              <div className="flex items-center gap-3 mb-5">
                <Calendar className="h-6 w-5 text-black/60" />
                <span className="text-sm font-medium uppercase tracking-wider text-black/60">
                  {service.day}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground/100 mb-8">
                {service.description}
              </h3>

              <div className="flex flex-wrap gap-2">
                {service.times.map((time, idx) => ( //idx es el índice del tiempo dentro del arreglo de tiempos
                <span
                  key={idx}
                  /* Cambios: bg-white para fondo blanco sólido, text-black para texto negro */
                  className="flex items-center gap-2 px-4 py-2 bg-[#E5E5E5] rounded-full text-sm font-medium text-black border border-gray-100"
                >
                  {/* Cambio: stroke-black o text-black para que el icono sea negro */}
                  <Clock className="h-4 w-4 text-black" />
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
              <h3 className="text-3xl md:text-4xl font-bold text-[#FCA311] mb-3">
                Panamá, Provincia de Panamá - Bethania, Club X.
              </h3>
              <p className="text-lg text-[#FCA311]/80 mb-8 leading-relaxed">
               Sostenemos y disfrutamos el pacto de Dios las 24 horas del día, caminando bajo su soberanía absoluta y confiando plenamente en su gobierno perfecto.
              </p>
              <Button className="bg-white/80 text-background/80 hover:bg-[#FCA311]/100 cursor-pointer">
                Ubicación en Google Maps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="aspect-video bg-background rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633.7452158117254!2d-79.52135098317981!3d9.013889003443543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca915ac1e2b2b%3A0xfe34064ac755026f!2sRUTC%20Latinamerica!5e0!3m2!1ses!2spa!4v1776914110945!5m2!1ses!2spa"
                
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
