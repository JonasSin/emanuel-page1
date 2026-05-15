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
            Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.
          </h2>
          <h3 className="text-xl md:text-3xl font-semibold text-gray-900">
            Hechos 1 : 8
          </h3>
        </div>

        {/* Secci[on] de 2 columnas */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-3">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Somos una iglesia que viva y testifique el poder del Espíritu Santo,
            </h3>
            <p className="text-lg text-teal-900 leading-relaxed mb-2">
              así como ocurrió en el Aposento Alto de Marcos, extendiendo el evangelio hasta lo último de la tierra.   
            </p>
            <p className="text-lg text-teal-900 leading-relaxed mb-8">
              Cristo es el verdadero Profeta, quien nos reveló el camino hacia Dios.
              Es el verdadero Sacerdote, quien murió en la cruz para deshacer toda maldición.
              Y es el verdadero Rey, quien aplastó la cabeza de Satanás y nos dio la victoria.</p>
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
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[6/7] overflow-hidden rounded-lg">
              <Image
                src={foto}
                alt="Comunidad de fe"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-16 -left-8 w-18 h-18 bg-secondary rounded-lg hidden lg:block border-2 border-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
