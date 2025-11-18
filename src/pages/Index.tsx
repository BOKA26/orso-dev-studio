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
      <section className="relative overflow-hidden bg-primary min-h-[650px] md:min-h-[700px] flex items-center">
        {/* Image de fond avec overlay sombre pour meilleur contraste */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Développement web moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-5xl">
            {/* Badge professionnel */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-white">Disponible pour vos projets</span>
            </div>
            
            {/* Nom du développeur mis en avant */}
            <p className="text-lg md:text-xl text-accent font-bold mb-3 tracking-wide uppercase">
              Orso Boka Jean
            </p>
            
            {/* Titre principal avec hiérarchie claire */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Développeur Full-Stack
              <br />
              <span className="text-accent">Freelance</span>
            </h1>
            
            {/* Accroche percutante et concise */}
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-4 font-medium leading-relaxed">
              Je conçois vos applications web et mobiles sur mesure
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed">
              SaaS, marketplaces, sites vitrine — Des solutions digitales complètes, performantes et évolutives, de la conception au déploiement.
            </p>
            
            {/* CTAs bien visibles avec icônes */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-bold shadow-large hover:shadow-xl transition-all hover:scale-105 text-base md:text-lg px-8 py-6"
              >
                <Link to="/contact">
                  Contactez-moi 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/90 text-white hover:bg-white hover:text-primary font-bold backdrop-blur-sm bg-white/10 transition-all hover:scale-105 text-base md:text-lg px-8 py-6"
              >
                <Link to="/portfolio">
                  Découvrir mes projets
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Élément décoratif pour renforcer l'identité visuelle */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Mini Bio Section - Contenu équilibré */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Badge de section */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm font-bold text-accent uppercase tracking-wider">
                À propos
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-foreground text-center">
              Qui suis-je ?
            </h2>
            
            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Je suis <span className="text-accent font-bold">Orso Boka Jean</span>, développeur full-stack freelance passionné par la création de solutions digitales innovantes.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Expert en <span className="text-primary font-semibold">Lovable, Supabase, React et TypeScript</span>, 
                je transforme vos idées en produits digitaux performants et évolutifs. 
                Du design à l'intégration, en passant par la gestion de base de données et le déploiement — 
                <span className="text-primary font-semibold"> je maîtrise l'ensemble du cycle de développement</span>.
              </p>
              
              {/* Mise en avant des compétences clés */}
              <div className="flex flex-wrap justify-center gap-3 pt-6">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold text-sm">
                  React & TypeScript
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg font-semibold text-sm">
                  Lovable & Supabase
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold text-sm">
                  UI/UX Design
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg font-semibold text-sm">
                  Mobile Apps
                </span>
              </div>
              
              <div className="pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold shadow-medium hover:shadow-large transition-all">
                  <Link to="/about">
                    Découvrir mon parcours 
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge de section */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-bold text-primary uppercase tracking-wider">
              Mes services
            </span>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Ce que je peux faire pour vous
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Des solutions digitales complètes et sur mesure pour concrétiser vos projets ambitieux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent bg-card group"
              >
                <CardHeader>
                  <div className="mx-auto mb-6 w-20 h-20 bg-accent/15 rounded-2xl flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                    <service.icon className="w-10 h-10 text-accent" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-foreground font-bold mb-3">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              variant="default" 
              className="bg-primary hover:bg-primary/90 font-bold shadow-medium hover:shadow-large transition-all"
            >
              <Link to="/services">
                Découvrir tous mes services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Infographic Gallery Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge de section */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm font-bold text-accent uppercase tracking-wider">
              Portfolio Design
            </span>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Design & Communication Visuelle
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Création d'identités visuelles impactantes, infographies professionnelles et supports de communication sur mesure
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
