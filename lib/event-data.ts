// Datos de eventos con imágenes y textos
export const eventData = {
  'retiro': {
    title: 'Retiro de Remanentes',
    date: 'Abril 13 - 20, 2026',
    time: '8:00 a. m. - 12:00 p. m.',
    location: 'Centro de Retiros Betania',
    description: 'Únete a nosotros junto con el Cuerpo de Cristo global para honrar a Jesús durante la Semana Santa. Tendremos tiempos de oración, adoración y reflexión sobre la obra de Cristo en la Cruz.',
    images: [
      '/retiro/foto2.jpeg',
    ],
    details: 'Este retiro especial incluye sesiones de adoración, talleres de oración y momentos de comunión. Ven preparado para una experiencia transformadora.',
  },
  'conferencia': {
    title: 'Jóvenes',
    date: 'Mayo 15 - 17, 2026',
    time: '7:00 p. m. - 10:00 p. m.',
    location: 'Auditorio Principal',
    description: 'Un encuentro poderoso para la nueva generación. Tres días de adoración, enseñanza y comunidad.',
    images: [
      '/conferencia/foto2.jpeg',
    ],
    details: 'La conferencia incluye sesiones con oradores invitados, talleres interactivos y momentos de alabanza. Ideal para jóvenes de 18-30 años.',
  },
  'matrimonios': {
    title: 'Retiro',
    date: 'Junio 5 - 7, 2026',
    time: '9:00 a. m. - 5:00 p. m.',
    location: 'Centro de Convenciones',
    description: 'Un fin de semana especial para fortalecer tu matrimonio y renovar tu compromiso.',
    images: [
      '/matrimonios/foto2.jpeg',
    ],
    details: 'Sesiones enfocadas en comunicación, amor y fe en el matrimonio. Actividades para parejas y tiempo de descanso.',
  },
};

export type EventName = keyof typeof eventData;