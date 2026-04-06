'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, MessageCircle, Sparkles, HandHeart } from 'lucide-react';

const connectOptions = [
  {
    icon: Heart,
    title: 'Soberanía absoluta de Dios',
    description: 'Creemos que el Dios Trino continúa cumpliendo fielmente Su Palabra. Él sigue respondiendo las oraciones y obrando en la salvación de las almas, aun en este tiempo, conforme a Su soberanía absoluta.',
    cta: '1 Crónicas 29:10-14',
  },
  {
    icon: MessageCircle,
    title: 'El método de Dios',
    description: 'Creemos que Dios ha reunido y cumplido todos Sus métodos en un solo nombre: Cristo.',
    cta: 'Efesios 1:1-3',
  },
  {
    icon: Sparkles,
    title: 'Poder de Dios',
    description: 'Él es nuestra plataforma eterna, la respuesta perfecta para sanar todo problema espiritual, sostener los frutos del evangelismo y conquistar el mundo con el poder del evangelio.',
    cta: 'Hechos 1:8',
  },
  {
    icon: HandHeart,
    title: 'La Palabra de Dios',
    description: 'Recibe apoyo y orientación bíblica para las situaciones que enfrentas.',
    cta: 'Hebreos 4:12-13',
  },
  
];

export default function Connect() {
  return (
    <section id="contacto" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Conecta
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Cumplir la Gran Comisión de nuestro Señor Jesucristo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            El hombre, caído en el problema original —el pecado y el dominio de Satanás— tiene una única solución: Cristo Jesús.
          </p>
        </div>

        {/* Connect Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {connectOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-secondary rounded-lg border border-border hover:border-foreground/30 transition-all duration-300 text-center cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {option.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-foreground hover:bg-foreground/10 font-medium"
                >
                  {option.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Newsletter Section */}
        <div className="p-12 md:p-16 bg-secondary rounded-lg border border-border text-center">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Boletín
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mantente Conectado
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Suscríbete a nuestro boletín para recibir actualizaciones sobre eventos, 
            devocionales y noticias de nuestra iglesia.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
            <Button className="bg-foreground text-background hover:bg-foreground/90 px-8">
              Suscribirse
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
