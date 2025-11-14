import { Link } from "react-router-dom";
import { ArrowRight, Code, ShoppingCart, Palette, TrendingUp, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";
import infographic1 from "@/assets/infographic-1.jpg";
import infographic2 from "@/assets/infographic-2.jpg";
import infographic3 from "@/assets/infographic-3.jpg";
import infographic4 from "@/assets/infographic-4.jpg";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Création de sites modernes, rapides et responsive avec les dernières technologies.",
    },
    {
      icon: ShoppingCart,
      title: "SaaS & Marketplace",
      description: "Plateformes complètes avec paiements, gestion multi-rôles et dashboards.",
    },
    {
      icon: Palette,
      title: "Design & Communication",
      description: "Identité visuelle, UI/UX design et stratégie de communication digitale.",
    },
  ];

  const infographics = [
    {
      image: infographic1,
      title: "Visualisation de Données",
      description: "Tableaux de bord interactifs et graphiques statistiques professionnels",
      icon: TrendingUp,
    },
    {
      image: infographic2,
      title: "Communication Digitale",
      description: "Infographies pour réseaux sociaux et campagnes marketing",
      icon: Users,
    },
    {
      image: infographic3,
      title: "Processus & Workflows",
      description: "Diagrammes explicatifs et guides visuels étape par étape",
      icon: Target,
    },
    {
      image: infographic4,
      title: "Rapports Corporate",
      description: "Présentations et rapports d'entreprise avec identité visuelle forte",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Développeur Web & No-Code
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
              Je crée des SaaS, marketplaces et sites professionnels modernes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link to="/portfolio">
                  Voir mes projets <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                <Link to="/contact">Me contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Bio Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de moi</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je suis <span className="text-accent font-semibold">Orso Boka Jean</span>, développeur web no-code et designer.
              Titulaire d'une Licence 2 en Développement de Sites Internet, formé en Communication et Infographie.
              Je crée des plateformes modernes, rapides, sécurisées et prêtes pour la production.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que je fais</h2>
            <p className="text-lg text-muted-foreground">
              Des solutions digitales complètes pour vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infographic Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Design & Infographie</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Communication visuelle percutante pour valoriser vos données et messages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {infographics.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-medium transition-all duration-500 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 text-white">
                      <div className="p-2 rounded-lg bg-accent/90">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-white/90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/portfolio">
                Voir tous mes projets <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
