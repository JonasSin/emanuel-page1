'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { eventData, type EventName } from '@/lib/event-data';

interface EventDetailProps {
  eventName: EventName;
}

export default function EventDetail({ eventName }: EventDetailProps) {
  const event = eventData[eventName];

  if (!event) {
    return (
      <section className="py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Evento no encontrado</h2>
          <p className="text-muted-foreground">El evento solicitado no existe.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white text-foreground py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-10 items-start">
          <div className="relative overflow-hidden shadow-lg border border-border min-h-[520px]">
            <Image
              src={event.images[0]}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-3">Eventos</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {event.title}
              </h1>
            </div>
          </div>

          <div className="rounded-[1rem] border border-border bg-white p-8 shadow-sm">
            <div className="space-y-6">
              <div>
               <h2 className="text-3xl font-bold text-gray-500 mb-3">{event.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-muted-foreground uppercase tracking-[0.25em] text-xs font-semibold">
                      Fecha
                    </div>
                    <div className="text-foreground font-medium">{event.date}</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-muted-foreground uppercase tracking-[0.25em] text-xs font-semibold">
                      Tiempo
                    </div>
                    <div className="text-foreground font-medium">{event.time}</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-muted-foreground uppercase tracking-[0.25em] text-xs font-semibold">
                      Ubicación
                    </div>
                    <div className="text-foreground font-medium">{event.location}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                  Regístrate ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-foreground/30 text-foreground hover:bg-foreground/10"
                >
                  Más Información
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-500">Detalles / Informaci[on</h3>
            <p className="text-muted-foreground leading-relaxed">
              {event.details}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestra experiencia está diseñada para darte un ambiente tranquilo donde puedas conectar con Dios, compartir en comunidad y descansar en la presencia de la iglesia.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-500">Galería</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden border border-border">
                  <Image
                    src={image}
                    alt={`${event.title} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}