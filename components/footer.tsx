'use client';

import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  connect: [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Involúcrate', href: '#ministerios' },
    { name: 'Calendario', href: '#eventos' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Contacto', href: '#contacto' },
  ],
  resources: [
    { name: 'Mensajes', href: '#' },
    { name: 'Devocionales', href: '#' },
    { name: 'Música', href: '#' },
    { name: 'Podcast', href: '#' },
  ],
  more: [
    { name: 'Dar', href: '#' },
    { name: 'Noticias', href: '#' },
    { name: 'Privacidad', href: '#' },
    { name: 'Términos', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-4">
              IGLESIA EMANUEL
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Cumplir la Gran Comisión de nuestro Señor Jesucristo, proclamando el evangelio con poder, formando discípulos firmes en la Palabra y caminando en unidad para alcanzar a todas las naciones con el mensaje de salvación.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Conecta
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Recursos
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Más
            </h4>
            <ul className="space-y-3">
              {footerLinks.more.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Betania, Ciudad de Panamá</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+507 XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@iglesiaemmanuel.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Iglesia Emanuel de Panamá. Todos los derechos reservados.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
}
