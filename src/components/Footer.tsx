import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const navigation = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Compétences", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="border-t-2 border-border bg-secondary shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo et Description */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              aria-label="Retour à l'accueil"
            >
              <img src={logo} alt="Orso Boka Jean - Portfolio" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Développeur Full-Stack Freelance</strong>
              <br />
              Spécialisé en Lovable, Supabase, React. 
              <br />
              Création de solutions digitales modernes et performantes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-foreground mb-5 text-lg">Navigation</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-accent hover:translate-x-1 inline-block transition-all font-medium"
                  >
                    → {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-5 text-lg">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground font-medium">✦ Développement SaaS</li>
              <li className="text-sm text-muted-foreground font-medium">✦ Marketplace & E-commerce</li>
              <li className="text-sm text-muted-foreground font-medium">✦ Applications Mobiles</li>
              <li className="text-sm text-muted-foreground font-medium">✦ Design & Infographie</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-5 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:orso.boka28@gmail.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium hover:underline"
                >
                  orso.boka28@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+2250757705986"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium hover:underline"
                >
                  +225 0757705986
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-medium">Abidjan, Bingerville, Côte d'Ivoire</span>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="mailto:orso.boka28@gmail.com"
                className="p-3 rounded-xl bg-card hover:bg-accent hover:text-primary transition-all shadow-soft hover:shadow-medium hover:-translate-y-1"
                aria-label="Envoyer un email"
                title="Envoyer un email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/orso-boka-jean-0a0a0a0a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card hover:bg-accent hover:text-primary transition-all shadow-soft hover:shadow-medium hover:-translate-y-1"
                aria-label="Profil LinkedIn"
                title="Profil LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/orsobokajean"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card hover:bg-accent hover:text-primary transition-all shadow-soft hover:shadow-medium hover:-translate-y-1"
                aria-label="Profil GitHub"
                title="Profil GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t-2 border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-sm text-muted-foreground font-medium">
              © {new Date().getFullYear()} <span className="text-foreground font-bold">Orso Boka Jean</span> — Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm">
              <Link 
                to="/legal-notice" 
                className="text-muted-foreground hover:text-accent transition-colors font-semibold hover:underline"
              >
                Mentions légales
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/terms-of-service" 
                className="text-muted-foreground hover:text-accent transition-colors font-semibold hover:underline"
              >
                Conditions de service
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/privacy-policy" 
                className="text-muted-foreground hover:text-accent transition-colors font-semibold hover:underline"
              >
                Politique de confidentialité
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-accent transition-colors font-semibold hover:underline"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
