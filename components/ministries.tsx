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
    <section id="ministerios" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Ministerios
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Hay un lugar para ti en lo que
              <br />
              Dios está haciendo en nuestra casa.
            </h2>
          </div>
          <Button
            variant="outline"
            className="mt-8 lg:mt-0 border-foreground/30 text-foreground hover:bg-foreground/10"
          >
            Conecta con un Ministerio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Ministry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-secondary rounded-lg border border-border hover:border-foreground/30 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {ministry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
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
