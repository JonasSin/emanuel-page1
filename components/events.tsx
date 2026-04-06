'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import foto from '../public/foto.jpeg';
import foto2 from '../public/foto2.jpeg';

const events = [
  {
    title: 'Retiro de Remanentes',
    date: 'Abril 13 - 20, 2026',
    description: 'Únete a nosotros junto con el Cuerpo de Cristo global para honrar a Jesús durante la Semana Santa. Tendremos tiempos de oración, adoración y reflexión sobre la obra de Cristo en la Cruz.',
    image: foto,
    featured: true,
  },
  {
    title: 'Conferencia de Jóvenes',
    date: 'Mayo 15 - 17, 2026',
    description: 'Un encuentro poderoso para la nueva generación. Tres días de adoración, enseñanza y comunidad.',
    image: foto2,
    featured: false,
  },
  {
    title: 'Retiro de Matrimonios',
    date: 'Junio 5 - 7, 2026',
    description: 'Un fin de semana especial para fortalecer tu matrimonio y renovar tu compromiso.',
    image: foto,
    featured: false,
  },
];

export default function Events() {
  return (
    <section id="eventos" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Featured Event */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-0 bg-background rounded-lg overflow-hidden border border-border">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src={events[0].image}
                alt={events[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  Eventos
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {events[0].title}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-medium">{events[0].date}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {events[0].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  Ver Evento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-foreground/30 text-foreground hover:bg-foreground/10"
                >
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Events */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.slice(1).map((event, index) => (
            <div
              key={index}
              className="group bg-background rounded-lg overflow-hidden border border-border hover:border-foreground/30 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {event.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-foreground hover:bg-foreground/10 p-0 h-auto font-medium"
                >
                  Ver Detalles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
