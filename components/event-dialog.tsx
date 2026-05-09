'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight, Calendar, MapPin, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { eventData, EventName } from '@/lib/event-data';

interface EventDialogProps {
  eventName: EventName;
  trigger: React.ReactNode;
}

export default function EventDialog({ eventName, trigger }: EventDialogProps) {
  const [open, setOpen] = useState(false);
  const event = eventData[eventName];

  if (!event) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
            {event.title}
          </DialogTitle>
        </DialogHeader>

        {/* Event Info */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-medium">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">{event.location}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-muted-foreground leading-relaxed mb-4">
            {event.description}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {event.details}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
          <Image
            src={event.images[0]}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-foreground mb-4">Galería de Imágenes</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {event.images.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                <Image
                  src={image}
                  alt={`${event.title} - Imagen ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-foreground text-background hover:bg-foreground/90">
            Registrarse
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-foreground/30 text-foreground hover:bg-foreground/10"
          >
            Más Información
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}