'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { SermonCard } from '@/components/sermon-card';

interface Sermon {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
}

const sermons: Sermon[] = [
  {
    id: 'rCuqrVtIDR4',
    title: 'Mensaje de Esperanza',
    description: 'MENSAJE COLOCAR UNS DESCRIPCI[ON DESPUES ] NO OLVIDAR PLEASE JAJAJAJA DISFRUTA.',
    youtubeUrl: 'https://youtu.be/rCuqrVtIDR4?si=FxvTi9BbN-FfDqUN',
  },
  {
    id: '7wfm218UqPA', // Ejemplo adicional
    title: 'La Importancia de la Comunidad',
    description: 'MENSAJE COLOCAR UNS DESCRIPCI[ON DESPUES ] NO OLVIDAR PLEASE JAJAJAJA DISFRUTA.',
    youtubeUrl: 'https://youtu.be/7wfm218UqPA?si=DDfgWpX2b67mR6rW',
  },
  {
    id: 'ZCfBs25MiBE', // Otro ejemplo
    title: 'Vivir con Propósito',
    description: 'MENSAJE COLOCAR UNS DESCRIPCI[ON DESPUES ] NO OLVIDAR PLEASE JAJAJAJA DISFRUTA.',
    youtubeUrl: 'https://youtu.be/ZCfBs25MiBE?si=BlosNS_ximXIc4vL',
  },
];

export default function Sermons() {
  return (
    <section id="mensajes" className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
            Mensajes del Pastor
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-300 max-w-3xl mx-auto">
            Tiempos de adoración, enseñanza y oración donde como iglesia nos reunimos para escuchar la Palabra de Dios, fortalecer nuestra fe y crecer en comunión.
          </p>
        </div>
{/* */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <SermonCard
              key={sermon.id}
              id={sermon.id}
              title={sermon.title}
              description={sermon.description}
              youtubeUrl={sermon.youtubeUrl}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-slate-300 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500"
          >
            <a
              href="https://www.youtube.com/@iglesiaemanueldepanama2773"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Mensajes en YouTube
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-slate-300 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Pastor Geon Won Park
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}