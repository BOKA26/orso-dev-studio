import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Navigation dans un ordre logique : Accueil → À propos → Portfolio → Services → Compétences → Contact
  const navigation = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Compétences", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-background shadow-soft">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            aria-label="Retour à l'accueil"
          >
            <img src={logo} alt="Orso Boka Jean - Portfolio" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-accent bg-accent/10 shadow-sm"
                    : "text-foreground hover:text-accent hover:bg-secondary/50"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-t-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="hover:bg-accent/10"
            >
              {isOpen ? (
                <X className="h-7 w-7 text-foreground" />
              ) : (
                <Menu className="h-7 w-7 text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-2 animate-fade-in border-t border-border mt-2">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-5 py-3.5 rounded-xl text-base font-semibold transition-all ${
                  isActive(item.path)
                    ? "text-accent bg-accent/15 shadow-sm border-l-4 border-accent"
                    : "text-foreground hover:text-accent hover:bg-secondary/70"
                }`}
              >
                <span>{item.name}</span>
                {isActive(item.path) && (
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                )}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
