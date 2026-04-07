'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import foto from '../public/foto.jpeg';

export default function About() {
  return (
    <section id="nosotros" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Statement */}
        <div className="max-w-4xl mb-32">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8">
            Una iglesia que viva y testifique el poder del Espíritu Santo, así como ocurrió en el Aposento Alto de Marcos, 
            extendiendo el evangelio hasta lo último de la tierra.
          </h2>
        </div>

        {/* Two Column Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Que el Trino Dios obre en nosotros, Gobierna nuestros corazones almas, cuerpos y mentes. 
            </h3>
            <p className="text-lg text-teal-900 leading-relaxed mb-8">
              Cristo es el verdadero Profeta, quien nos reveló el camino hacia Dios.
              Es el verdadero Sacerdote, quien murió en la cruz para deshacer toda maldición.
              Y es el verdadero Rey, quien aplastó la cabeza de Satanás y nos dio la victoria.
              Cuando aceptas a este Cristo como tu único y suficiente Salvador personal, recibes una nueva vida en Él, restaurando tu relación con Dios y entrando en el propósito eterno para el cual fuiste creado.

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/10"
              >
                Noticias de la Iglesia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/10"
              >
                Calendario de Eventos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={foto}
                alt="Comunidad de fe"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary rounded-lg hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
