import { Laptop, ShoppingBag, Smartphone, Globe, Palette, Megaphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const servicesData = [
    {
      title: "Création de SaaS complet",
      description: "Développement de logiciels en tant que service (SaaS) avec authentification, base de données, API et interface d'administration complète.",
      icon: Laptop,
    },
    {
      title: "Création de Marketplace",
      description: "Plateformes e-commerce complètes avec système d'escrow, gestion vendeur/acheteur/livreur, paiements sécurisés et tableau de bord.",
      icon: ShoppingBag,
    },
    {
      title: "Développement d'App Mobile",
      description: "Applications mobiles natives pour iOS et Android avec Capacitor, notifications push, et synchronisation cloud.",
      icon: Smartphone,
    },
    {
      title: "Site Web Professionnel",
      description: "Création de sites web modernes, rapides et optimisés SEO. Design responsive et expérience utilisateur optimale.",
      icon: Globe,
    },
    {
      title: "Identité Visuelle & Design",
      description: "Conception de logos, chartes graphiques, supports de communication et interfaces utilisateur élégantes et modernes.",
      icon: Palette,
    },
    {
      title: "Communication Digitale",
      description: "Stratégie de communication digitale, gestion de contenu, branding et présence en ligne pour développer votre marque.",
      icon: Megaphone,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mes Services</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des solutions sur mesure pour concrétiser vos projets digitaux
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
