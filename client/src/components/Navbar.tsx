import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center font-display font-bold text-2xl text-white">
            <span className="text-[#F59E0B]">Fin</span><span className="text-[#10B981]">ora</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
            Funcionalidades
          </a>
          <a href="#why-finora" className="text-muted-foreground hover:text-white transition-colors">
            ¿Por qué Finora?
          </a>
          <a href="#demo" className="text-muted-foreground hover:text-white transition-colors">
            Demo
          </a>
          <a href="#download" className="text-muted-foreground hover:text-white transition-colors">
            Descargar
          </a>
        </div>
        
        <div className="md:hidden">
          <button 
            type="button" 
            onClick={toggleMenu}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden bg-secondary absolute w-full border-b border-gray-800 transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "opacity-100 max-h-60" : "opacity-0 max-h-0 overflow-hidden"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#features" className="text-muted-foreground hover:text-white transition-colors py-2">
            Funcionalidades
          </a>
          <a href="#why-finora" className="text-muted-foreground hover:text-white transition-colors py-2">
            ¿Por qué Finora?
          </a>
          <a href="#demo" className="text-muted-foreground hover:text-white transition-colors py-2">
            Demo
          </a>
          <a href="#download" className="text-muted-foreground hover:text-white transition-colors py-2">
            Descargar
          </a>
        </div>
      </div>
    </nav>
  );
}
