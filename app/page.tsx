'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Ministries from '@/components/ministries';
import Events from '@/components/events';
import Connect from '@/components/connect';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Ministries />
      <Events />
      <Connect />
      <Footer />
    </main>
  );
}
