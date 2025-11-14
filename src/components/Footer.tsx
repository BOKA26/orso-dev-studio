import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const navigation = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Compétences", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo et Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="OBJ Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Développeur Web & No-Code Expert spécialisé en Lovable, Supabase. Création de solutions digitales modernes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Développement SaaS</li>
              <li className="text-sm text-muted-foreground">Marketplace & E-commerce</li>
              <li className="text-sm text-muted-foreground">Applications Mobiles</li>
              <li className="text-sm text-muted-foreground">Design & Infographie</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:orso.aka28@gmail.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  orso.aka28@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>0757705986</div>
                  <div>0564945806</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Abidjan, Bergerville</span>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="mailto:orso.aka28@gmail.com"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Orso Boka Jean. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
