'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img
          src="/emanuel.jpeg"
          alt="Emanuel Iglesia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Con su poder, seremos testigos hasta lo último de la tierra

        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
          Iglesia Emanuel
          <br />
          <span className="text-muted-foreground">De Panamá</span>
        </h1>

        <p className="text-lg md:text-xxl text-muted-foreground max-w-2xl mx-auto mb-9 leading-relaxed">
          Que el Trino Dios Obre en nosotros, Gobierna nuestros corazones almas, cuerpos y mentes. 
          </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => scrollToSection('#servicios')}
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium"
          >
            Únete en Persona
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={() => scrollToSection('#contacto')}
            variant="outline"
            size="lg"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 py-6 text-base font-medium"
          >
            Contáctanos
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
      </div>
    </section>
  );
}
