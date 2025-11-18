import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useGitHubProjects } from "@/hooks/useGitHubProjects";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import projectMarketplace from "@/assets/project-marketplace.jpg";
import projectChurch from "@/assets/project-church.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectOffotechword from "@/assets/project-offotechword.png";
import projectMevos from "@/assets/project-mevos.png";
import projectPortfolio from "@/assets/project-portfolio.png";
import projectEgliConnect from "@/assets/project-egliconnect.png";
import projectDadi from "@/assets/project-dadi.png";
import projectChambreHaute from "@/assets/project-chambre-haute.png";

// Types de catégories
type ProjectCategory = "Tous" | "SaaS" | "E-Commerce" | "Site vitrine" | "Mobile";

const Portfolio = () => {
  const { data: githubProjects, isLoading, error } = useGitHubProjects();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("Tous");

  // Projets statiques avec catégories et années
  const staticProjects = [
    {
      id: 1,
      name: "Boutique Offotechword",
      description: "Boutique en ligne e-commerce complète avec gestion de produits, panier d'achat, paiement sécurisé via Stripe et système de commande en temps réel.",
      topics: ["React", "Supabase", "Stripe", "E-Commerce"],
      html_url: "#",
      homepage: "https://shop.offotechword.com",
      stargazers_count: 0,
      image: projectMarketplace,
      category: "E-Commerce" as const,
      year: "2024",
    },
    {
      id: 2,
      name: "AfricaTrade Marketplace",
      description: "Marketplace de commerce africain B2B/B2C avec système de gestion multi-vendeurs, transactions sécurisées, système d'évaluation et tableau de bord analytique.",
      topics: ["Marketplace", "Commerce", "Lovable", "Supabase"],
      html_url: "#",
      homepage: "https://africatrade.offotechword.com",
      stargazers_count: 0,
      image: projectMarketplace,
      category: "E-Commerce" as const,
      year: "2024",
    },
    {
      id: 3,
      name: "Offotechword - Solutions IA",
      description: "Plateforme SaaS de services IA no-code pour entreprises : création de chatbots intelligents, automatisation de processus métiers, intégration OpenAI et formation personnalisée.",
      topics: ["IA", "Lovable", "Chatbots", "Automatisation", "OpenAI"],
      html_url: "#",
      homepage: "https://offotechword.lovable.app",
      stargazers_count: 0,
      image: projectOffotechword,
      category: "SaaS" as const,
      year: "2024",
    },
    {
      id: 4,
      name: "La Chambre Haute - Église",
      description: "Site vitrine pour l'Église Pentecôtiste Unie Internationale : présentation de l'église, streaming en direct des cultes, calendrier d'événements, galerie photos et système de dons.",
      topics: ["React", "Streaming", "Tailwind CSS", "Site vitrine"],
      html_url: "#",
      homepage: "https://chambre-haute.lovable.app",
      stargazers_count: 0,
      image: projectChambreHaute,
      category: "Site vitrine" as const,
      year: "2024",
    },
    {
      id: 5,
      name: "DADI - Site Web ONG",
      description: "Site vitrine pour l'ONG Droit À la Différence : présentation des missions (VIH/SIDA, violences de genre), campagnes de sensibilisation, système de dons en ligne sécurisé et galerie projets.",
      topics: ["React", "ONG", "Solidarité", "Dons en ligne"],
      html_url: "#",
      homepage: "https://ong-dadi.offotechword.com",
      stargazers_count: 0,
      image: projectDadi,
      category: "Site vitrine" as const,
      year: "2024",
    },
    {
      id: 6,
      name: "BokaTrade Marketplace",
      description: "Marketplace mobile-first avec système multi-rôles (vendeur/acheteur/livreur), escrow pour transactions sécurisées, paiement Paystack, géolocalisation Mapbox et app mobile via Capacitor.",
      topics: ["Supabase", "Paystack", "Mapbox", "Capacitor"],
      html_url: "#",
      homepage: "https://db-forge-spark.lovable.app/",
      stargazers_count: 0,
      image: projectMarketplace,
      category: "Mobile" as const,
      year: "2024",
    },
    {
      id: 7,
      name: "EgliConnect - SaaS Gestion d'Église",
      description: "Plateforme SaaS multi-tenant pour gestion complète d'églises : gestion membres, suivi des dons avec Paystack, demandes de prière, événements, et assistant spirituel IA intégré.",
      topics: ["Supabase", "Lovable", "Paystack", "OpenAI", "Multi-tenant"],
      html_url: "#",
      homepage: "https://saas.offotechword.com",
      stargazers_count: 0,
      image: projectEgliConnect,
      category: "SaaS" as const,
      year: "2024",
    },
    {
      id: 8,
      name: "MEVOS - Mission Évangélique",
      description: "Plateforme web pour mission évangélique : gestion des cultes, prières en ligne temps réel, verset du jour, espace membre sécurisé, système de demandes de prière et intégration WhatsApp.",
      topics: ["React", "Supabase", "WhatsApp", "Église"],
      html_url: "#",
      homepage: "https://mevos.lovable.app",
      stargazers_count: 0,
      image: projectMevos,
      category: "Site vitrine" as const,
      year: "2024",
    },
    {
      id: 9,
      name: "App Mobile E-Commerce",
      description: "Application mobile e-commerce native avec catalogue produits dynamique, panier persistant, paiement mobile sécurisé, notifications push et synchronisation temps réel via Supabase.",
      topics: ["Capacitor", "Supabase", "Push Notifications", "Mobile"],
      html_url: "#",
      homepage: null,
      stargazers_count: 0,
      image: projectMobile,
      category: "Mobile" as const,
      year: "2024",
    },
  ];

  // Mapping des liens homepage pour les projets GitHub
  const projectLinks: Record<string, { homepage?: string; image?: string; name?: string; description?: string; category?: ProjectCategory; year?: string }> = {
    "shop": {
      name: "Boutique Offotechword",
      description: "Boutique en ligne e-commerce complète avec gestion de produits, panier d'achat, paiement sécurisé via Stripe et système de commande en temps réel.",
      homepage: "https://shop.offotechword.com",
      image: projectMarketplace,
      category: "E-Commerce",
      year: "2024",
    },
    "africatrade": {
      name: "AfricaTrade Marketplace",
      description: "Marketplace de commerce africain B2B/B2C avec système de gestion multi-vendeurs, transactions sécurisées, système d'évaluation et tableau de bord analytique.",
      homepage: "https://africatrade.offotechword.com",
      image: projectMarketplace,
      category: "E-Commerce",
      year: "2024",
    },
    "saas-gestion-d-eglise": {
      name: "EgliConnect - SaaS Gestion d'Église",
      description: "Plateforme SaaS multi-tenant pour gestion complète d'églises : gestion membres, suivi des dons avec Paystack, demandes de prière, événements, et assistant spirituel IA intégré.",
      homepage: "https://saas.offotechword.com",
      image: projectEgliConnect,
      category: "SaaS",
      year: "2024",
    },
    "portfolio": {
      name: "Portfolio Professionnel",
      description: "Site vitrine professionnel présentant services IA, compétences techniques, projets réalisés et témoignages clients. Design moderne avec blog intégré et système de contact.",
      homepage: "https://portfolio.offotechword.com",
      image: projectPortfolio,
      category: "Site vitrine",
      year: "2024",
    },
    "mevos": {
      name: "MEVOS - Mission Évangélique",
      description: "Plateforme web pour mission évangélique : gestion des cultes, prières en ligne temps réel, verset du jour, espace membre sécurisé, système de demandes de prière et intégration WhatsApp.",
      homepage: "https://mevos.lovable.app",
      image: projectMevos,
      category: "Site vitrine",
      year: "2024",
    },
    "offotechword": {
      name: "Offotechword - Solutions IA",
      description: "Plateforme SaaS de services IA no-code pour entreprises : création de chatbots intelligents, automatisation de processus métiers, intégration OpenAI et formation personnalisée.",
      homepage: "https://offotechword.lovable.app",
      image: projectOffotechword,
      category: "SaaS",
      year: "2024",
    },
    "dadi": {
      name: "DADI - Site Web ONG",
      description: "Site vitrine pour l'ONG Droit À la Différence : présentation des missions (VIH/SIDA, violences de genre), campagnes de sensibilisation, système de dons en ligne sécurisé et galerie projets.",
      homepage: "https://ong-dadi.offotechword.com",
      image: projectDadi,
      category: "Site vitrine",
      year: "2024",
    },
    "chambre-haute": {
      name: "La Chambre Haute - Église",
      description: "Site vitrine pour l'Église Pentecôtiste Unie Internationale : présentation de l'église, streaming en direct des cultes, calendrier d'événements, galerie photos et système de dons.",
      homepage: "https://chambre-haute.lovable.app",
      image: projectChambreHaute,
      category: "Site vitrine",
      year: "2024",
    },
  };

  // Enrichir les projets GitHub
  const enrichedGithubProjects = githubProjects?.map(repo => {
    const customData = projectLinks[repo.name] || projectLinks[repo.name.toLowerCase()];
    if (customData) {
      return {
        ...repo,
        name: customData.name || repo.name,
        description: customData.description || repo.description,
        homepage: customData.homepage || repo.homepage,
        image: customData.image,
        category: customData.category,
        year: customData.year,
      };
    }
    return repo;
  });

  // Fusionner les projets
  const displayProjects = error ? staticProjects : [
    ...staticProjects,
    ...(enrichedGithubProjects || []).filter(ghProject => 
      !staticProjects.some(sp => sp.homepage === ghProject.homepage)
    )
  ];

  // Filtrer les projets selon la catégorie active
  const filteredProjects = activeFilter === "Tous" 
    ? displayProjects 
    : displayProjects.filter(project => 
        ("category" in project && project.category === activeFilter)
      );

  // Catégories avec compteurs
  const categories: ProjectCategory[] = ["Tous", "SaaS", "E-Commerce", "Site vitrine", "Mobile"];
  const getProjectCount = (category: ProjectCategory) => {
    if (category === "Tous") return displayProjects.length;
    return displayProjects.filter(p => "category" in p && p.category === category).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* En-tête */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm font-bold text-accent uppercase tracking-wider mb-6">
                <Filter className="w-4 h-4" />
                Projets réalisés
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
                Mon Portfolio
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Découvrez une sélection de <span className="text-primary font-semibold">{displayProjects.length}+ projets</span> réalisés — SaaS, marketplaces, sites vitrine et applications mobiles
              </p>
            </div>

            {/* Système de filtrage */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="lg"
                  className={`font-semibold transition-all ${
                    activeFilter === category
                      ? "bg-primary hover:bg-primary/90 shadow-medium"
                      : "hover:bg-secondary border-2"
                  }`}
                >
                  {category}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                    activeFilter === category
                      ? "bg-white/20"
                      : "bg-primary/10 text-primary"
                  }`}>
                    {getProjectCount(category)}
                  </span>
                </Button>
              ))}
            </div>

            {/* Projets en chargement */}
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-56 w-full rounded-xl" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-8 w-24" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Liste des projets */}
            {!isLoading && filteredProjects && (
              <>
                {filteredProjects.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-6">
                      <Filter className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Aucun projet dans cette catégorie
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      Essayez de sélectionner une autre catégorie
                    </p>
                    <Button
                      onClick={() => setActiveFilter("Tous")}
                      variant="default"
                      size="lg"
                      className="bg-primary hover:bg-primary/90 font-semibold"
                    >
                      Voir tous les projets
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Grille uniforme et responsive */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {filteredProjects.map((repo) => (
                        <ProjectCard
                          key={repo.id}
                          title={repo.name}
                          description={repo.description || "Projet de développement web professionnel"}
                          technologies={repo.topics.length > 0 ? repo.topics : ["React", "Web"]}
                          githubUrl={repo.html_url !== "#" ? repo.html_url : undefined}
                          demoUrl={repo.homepage}
                          stars={repo.stargazers_count}
                          image={"image" in repo ? (repo as any).image : undefined}
                          category={"category" in repo ? (repo as any).category : undefined}
                          year={"year" in repo ? (repo as any).year : undefined}
                        />
                      ))}
                    </div>

                    {/* Call to action */}
                    <div className="mt-16 text-center p-8 bg-secondary rounded-3xl border-2 border-border">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Un projet en tête ?
                      </h3>
                      <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                        Travaillons ensemble pour transformer votre idée en réalité digitale
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary/90 font-bold shadow-large"
                      >
                        <a href="/contact">
                          Discutons de votre projet
                        </a>
                      </Button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
