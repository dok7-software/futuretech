
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin, Instagram, Facebook } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Inicio", id: "hero" },
    { label: "¿Qué es?", id: "about" },
    { label: "Dirigido", id: "target" },
    { label: "Beneficios", id: "benefits" },
    { label: "Catalunya Hub", id: "catalunya" },
    { label: "Fechas", id: "dates" },
    { label: "Contacto", id: "contact" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-future-tech-primary/95 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-tt-lakes font-bold text-future-tech-accent">
              Future Tech
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-future-tech-secondary hover:text-future-tech-accent transition-colors font-montreal text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-future-tech-secondary hover:text-future-tech-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
            <Button 
              size="sm" 
              className="bg-future-tech-accent text-future-tech-primary hover:bg-future-tech-accent/90 font-tt-lakes font-semibold ml-4"
              onClick={() => window.open('https://forms.gle/9BWufxkJmet4Rt9C9', '_blank')}
            >
              Aplica Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-future-tech-secondary hover:text-future-tech-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-700 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-future-tech-secondary hover:text-future-tech-accent transition-colors font-montreal text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-future-tech-secondary hover:text-future-tech-accent transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <Button 
                size="sm" 
                className="bg-future-tech-accent text-future-tech-primary hover:bg-future-tech-accent/90 font-tt-lakes font-semibold w-fit"
                onClick={() => window.open('https://forms.gle/9BWufxkJmet4Rt9C9', '_blank')}
              >
                Aplica Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
