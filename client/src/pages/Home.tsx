import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyFinora from '@/components/WhyFinora';
import ChatDemo from '@/components/ChatDemo';
import DownloadApp from '@/components/DownloadApp';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/lib/utils';

export default function Home() {
  // Initialize scroll reveal effect
  const cleanupScrollReveal = useScrollReveal();

  useEffect(() => {
    return () => {
      cleanupScrollReveal();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <WhyFinora />
        <ChatDemo />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
}
