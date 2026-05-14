'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Music, BookOpen, Heart } from 'lucide-react';

const ministries = [
  {
    icon: Users,
    title: 'Jóvenes',
    description: 'Acompañamos y guiamos a las nuevas generaciones para que descubran su identidad en Cristo y vivan su fe con convicción en medio de su entorno. Ministerio Universitario, Ministerio de Jóvenes, Ministerio de Niños, Ministerio de Adolescentes.',
  },
  {
    icon: Music,
    title: 'Academia',
    description: 'Es el espacio de entrenamiento continuo donde se forman discípulos dentro de la corriente de la Palabra. Aquí se establecen el pacto, la visión y el método de Dios, preparando obreros para sostener y multiplicar la obra evangelística.',
  },
  {
    icon: BookOpen,
    title: 'Misiones',
    description: 'Nos movemos con el sueño absoluto de la evangelización mundial, estableciendo núcleos y levantando discípulos en cada campo. Trabajamos para alcanzar las naciones, respondiendo espiritualmente a las zonas de desastre con el evangelio de Cristo.',
  },
  {
    icon: Heart,
    title: 'Adultos',
    description: 'Fortalecemos a hombres y mujeres en su vida espiritual, familiar y ministerial, capacitándolos para ser influencia en cada área de la sociedad.',
  },
];

export default function Ministries() {
  return (
    <section 
      id="ministerios" 
      className="py-32 relative"
      style={{
        backgroundImage: 'url(/ministerio.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/80"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"> 
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Ministerios
            </p>
            <h2 className="text-4xl md:text-4xl font-bold text-foreground">
              Centro donde se enseña la Palabra, 
              <br />
              se forman discípulos y se preparan obreros
            </h2>
          </div>
          <Button
            variant="outline"
            className="group mt-8 lg:mt-0 border-white/30 text-white hover:bg-white/10 cursor-pointer"
          >
          Conecta con un Ministerio
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        </div>

        {/* Ministry Cards */}
        <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white/70 rounded-lg border border-border hover:border-foreground/100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {ministry.title}
                </h3>
                <p className="text-black leading-relaxed text-sm">
                  {ministry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
