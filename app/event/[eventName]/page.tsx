import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/navbar';
import EventDetail from '@/components/event-detail';
import Footer from '@/components/footer';
import { eventData, type EventName } from '@/lib/event-data';

interface EventPageProps {
  params: Promise<{ eventName: EventName }>;
}

export async function generateStaticParams() {
  return Object.keys(eventData).map((eventName) => ({
    eventName,
  }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { eventName } = await params;
  const event = eventData[eventName];

  if (!event) {
    return {
      title: 'Evento no encontrado',
      description: 'El evento solicitado no existe.',
    };
  }

  return {
    title: `${event.title} | Iglesia Emanuel de Panamá`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: 'website',
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { eventName } = await params;
  const event = eventData[eventName];

  if (!event) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <EventDetail eventName={eventName} />
      <Footer />
    </>
  );
}
