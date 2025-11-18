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
      <section className="relative overflow-hidden bg-primary min-h-[600px] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <img
            src={heroImage}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Développeur Full-Stack Freelance
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-4 font-light">
              Je conçois des applications web modernes
            </p>
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl">
              SaaS, marketplaces, sites vitrine — Des solutions digitales complètes, du design au déploiement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-large">
                <Link to="/contact">
                  Contactez-moi <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold">
                <Link to="/portfolio">Voir mes projets</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Bio Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">Qui suis-je ?</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Je suis <span className="text-accent font-bold">Orso Boka Jean</span>, développeur full-stack freelance spécialisé en solutions no-code avancées.
              Avec une expertise en <span className="text-primary font-semibold">Lovable, Supabase, React et TypeScript</span>, 
              je transforme vos idées en produits digitaux performants et évolutifs.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Du design à l'intégration, en passant par la gestion de base de données et le déploiement — 
              <span className="text-primary font-semibold"> je prends en charge l'ensemble du cycle de développement</span>.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-white">
              <Link to="/about">Découvrir mon parcours <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Mes Services</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions digitales complètes pour concrétiser vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent bg-card">
                <CardHeader>
                  <div className="mx-auto mb-6 w-20 h-20 bg-accent/15 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-accent" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-foreground font-bold mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90">
              <Link to="/services">Découvrir tous mes services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Infographic Gallery Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Design & Communication</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Création d'identités visuelles, infographies et supports de communication professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {infographics.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-large transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden bg-secondary/30">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 text-white">
                      <div className="p-2 rounded-lg bg-accent">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-sm text-white/95 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
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
