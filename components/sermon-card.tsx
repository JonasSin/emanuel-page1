'use client';

import { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';

interface SermonCardProps {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
}

export function SermonCard({ id, title, description, youtubeUrl }: SermonCardProps) {
  const [fallbackUsed, setFallbackUsed] = useState(false);

  const imageUrl = useMemo(() => {
    const quality = fallbackUsed ? '0' : 'maxresdefault';
    return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
  }, [id, fallbackUsed]);

  const handleImageError = () => {
    setFallbackUsed(true);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-800">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="w-12 h-12 text-white" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-3 text-slate-800 dark:text-slate-200 line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
          {description}
        </CardDescription>
        <Button
          asChild
          className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
        >
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Ver en YouTube
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
