'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Ministerios', href: '#ministerios' },
  { name: 'Eventos', href: '#eventos' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('#inicio')}
            className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
          >
            <Image
              src="/iglesia-logo.png"
              alt="Logo Iglesia Emanuel"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span>IGLESIA EMANUEL</span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#servici')}
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all"
            >
              Visítanos
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('#servicios')}
            variant="outline"
            className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background mt-4"
          >
            Visítanos
          </Button>
        </div>
      </div>
    </nav>
  );
}
