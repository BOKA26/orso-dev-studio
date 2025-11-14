import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useGitHubProjects } from "@/hooks/useGitHubProjects";
import { Skeleton } from "@/components/ui/skeleton";
import projectMarketplace from "@/assets/project-marketplace.jpg";
import projectChurch from "@/assets/project-church.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectOffotechword from "@/assets/project-offotechword.png";
import projectMevos from "@/assets/project-mevos.png";
import projectPortfolio from "@/assets/project-portfolio.png";
import projectEgliConnect from "@/assets/project-egliconnect.png";
import projectDadi from "@/assets/project-dadi.png";
import projectChambreHaute from "@/assets/project-chambre-haute.png";

const Portfolio = () => {
  const { data: githubProjects, isLoading, error } = useGitHubProjects();

  // Projets de fallback si GitHub échoue
  const staticProjects = [
    {
      id: 1,
      name: "Offotechword - Solutions IA Sans Code",
      description: "Plateforme de services IA sans code pour entreprises et startups. Intégration d'outils IA, création de chatbots intelligents 24/7, automatisation de processus métiers et formation personnalisée.",
      topics: ["IA", "Lovable", "Chatbots", "Automatisation", "No-Code"],
      html_url: "#",
      homepage: "https://offotechword.lovable.app",
      stargazers_count: 0,
      image: projectOffotechword,
    },
    {
      id: 2,
      name: "La Chambre Haute - Site Web Église",
      description: "Site web pour l'Église Pentecôtiste Unie Internationale de Bingerville. Présentation de l'église, horaires des cultes, diffusion en direct, départements, galerie photos et formulaire de contact.",
      topics: ["Lovable", "Église", "Streaming", "React", "Tailwind CSS"],
      html_url: "#",
      homepage: "https://chambre-haute.lovable.app",
      stargazers_count: 0,
      image: projectChambreHaute,
    },
    {
      id: 3,
      name: "DADI - Site Web ONG",
      description: "Site web pour l'ONG Droit À la Différence. Prévention VIH/SIDA, accompagnement psychologique, lutte contre les violences basées sur le genre, système de dons en ligne et galerie de projets.",
      topics: ["Lovable", "ONG", "Solidarité", "Dons en ligne", "React"],
      html_url: "#",
      homepage: "https://ong-dadi.offotechword.com",
      stargazers_count: 0,
      image: projectDadi,
    },
    {
      id: 3,
      name: "BokaTrade Marketplace",
      description: "Marketplace complète avec système multi-rôle (vendeur, acheteur, livreur), escrow pour sécuriser les transactions, paiement intégré via Paystack, géolocalisation Mapbox et application mobile.",
      topics: ["Lovable", "Supabase", "Paystack", "Mapbox", "Capacitor"],
      html_url: "#",
      homepage: "https://db-forge-spark.lovable.app/",
      stargazers_count: 0,
      image: projectMarketplace,
    },
    {
      id: 4,
      name: "EgliConnect - SaaS de Gestion d'Église",
      description: "Plateforme SaaS multi-tenant pour la gestion complète d'églises. Gestion des membres et fidèles, suivi des dons avec paiement Paystack, demandes de prière, annonces et événements, sécurité multi-tenant et assistant spirituel IA intégré.",
      topics: ["Supabase", "Lovable", "Paystack", "OpenAI", "Multi-tenant"],
      html_url: "#",
      homepage: "https://saas.offotechword.com",
      stargazers_count: 0,
      image: projectEgliConnect,
    },
    {
      id: 5,
      name: "App Mobile E-Commerce",
      description: "Application mobile e-commerce complète avec catalogue produits, panier d'achat, paiement sécurisé, notifications push et synchronisation temps réel.",
      topics: ["Capacitor", "Lovable", "Supabase", "Push Notifications"],
      html_url: "#",
      homepage: null,
      stargazers_count: 0,
      image: projectMobile,
    },
  ];

  // Mapping des liens homepage pour certains projets GitHub
  const projectLinks: Record<string, { homepage?: string; image?: string; name?: string; description?: string }> = {
    "saas-gestion-d-eglise": { 
      name: "EgliConnect - SaaS de Gestion d'Église",
      description: "Plateforme SaaS multi-tenant pour la gestion complète d'églises. Gestion des membres et fidèles, suivi des dons avec paiement Paystack, demandes de prière, annonces et événements, sécurité multi-tenant et assistant spirituel IA intégré.",
      homepage: "https://saas.offotechword.com",
      image: projectEgliConnect 
    },
    "Saas Gestion D Eglise": { 
      name: "EgliConnect - SaaS de Gestion d'Église",
      description: "Plateforme SaaS multi-tenant pour la gestion complète d'églises. Gestion des membres et fidèles, suivi des dons avec paiement Paystack, demandes de prière, annonces et événements, sécurité multi-tenant et assistant spirituel IA intégré.",
      homepage: "https://saas.offotechword.com",
      image: projectEgliConnect 
    },
    "portfolio": {
      name: "Portfolio Professionnel Offotechword",
      description: "Site vitrine professionnel présentant services IA, compétences techniques, projets réalisés et témoignages clients. Design moderne avec blog intégré et système de contact.",
      homepage: "https://portfolio.offotechword.com",
      image: projectPortfolio
    },
    "mevos": {
      name: "MEVOS - Mission Évangélique La Voie du Salut",
      description: "Plateforme web pour mission évangélique avec gestion de cultes, prières en ligne, verset du jour, espace membre, système de demande de prière et communication WhatsApp intégrée.",
      homepage: "https://mevos.lovable.app",
      image: projectMevos
    },
    "offotechword": {
      name: "Offotechword - Solutions IA Sans Code",
      description: "Plateforme de services IA sans code pour entreprises et startups. Intégration d'outils IA, création de chatbots intelligents 24/7, automatisation de processus métiers et formation personnalisée.",
      homepage: "https://offotechword.lovable.app",
      image: projectOffotechword
    },
    "offotechword1": {
      name: "Offotechword - Solutions IA Sans Code",
      description: "Plateforme de services IA sans code pour entreprises et startups. Intégration d'outils IA, création de chatbots intelligents 24/7, automatisation de processus métiers et formation personnalisée.",
      homepage: "https://offotechword.lovable.app",
      image: projectOffotechword
    },
    "dadi": {
      name: "DADI - Site Web ONG",
      description: "Site web pour l'ONG Droit À la Différence. Prévention VIH/SIDA, accompagnement psychologique, lutte contre les violences basées sur le genre, système de dons en ligne et galerie de projets.",
      homepage: "https://ong-dadi.offotechword.com",
      image: projectDadi
    },
    "Dadi Dignity Compass": {
      name: "DADI - Site Web ONG",
      description: "Site web pour l'ONG Droit À la Différence. Prévention VIH/SIDA, accompagnement psychologique, lutte contre les violences basées sur le genre, système de dons en ligne et galerie de projets.",
      homepage: "https://ong-dadi.offotechword.com",
      image: projectDadi
    },
    "dadi dignity compass": {
      name: "DADI - Site Web ONG",
      description: "Site web pour l'ONG Droit À la Différence. Prévention VIH/SIDA, accompagnement psychologique, lutte contre les violences basées sur le genre, système de dons en ligne et galerie de projets.",
      homepage: "https://ong-dadi.offotechword.com",
      image: projectDadi
    },
    "chambre-haute": {
      name: "La Chambre Haute - Site Web Église",
      description: "Site web pour l'Église Pentecôtiste Unie Internationale de Bingerville. Présentation de l'église, horaires des cultes, diffusion en direct, départements, galerie photos et formulaire de contact.",
      homepage: "https://chambre-haute.lovable.app",
      image: projectChambreHaute
    },
  };

  // Enrichir les projets GitHub avec les liens et images personnalisés
  const enrichedGithubProjects = githubProjects?.map(repo => {
    const customData = projectLinks[repo.name] || projectLinks[repo.name.toLowerCase()];
    if (customData) {
      return {
        ...repo,
        name: customData.name || repo.name,
        description: customData.description || repo.description,
        homepage: customData.homepage || repo.homepage,
        image: customData.image,
      };
    }
    return repo;
  });

  // Fusionner les projets statiques avec les projets GitHub enrichis
  // En cas d'erreur GitHub, utiliser uniquement les projets statiques
  const displayProjects = error ? staticProjects : [
    ...staticProjects,
    ...(enrichedGithubProjects || []).filter(ghProject => 
      !staticProjects.some(sp => sp.homepage === ghProject.homepage)
    )
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mon Portfolio</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez mes projets GitHub mis à jour en temps réel
              </p>
            </div>

            {isLoading && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="h-48 w-full rounded-lg" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            )}

            {!isLoading && displayProjects && (
              <>
                {displayProjects.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      Aucun projet disponible pour le moment
                    </p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProjects.map((repo) => (
                      <ProjectCard
                        key={repo.id}
                        title={repo.name}
                        description={repo.description || "Projet de développement web"}
                        technologies={repo.topics.length > 0 ? repo.topics : ["language" in repo ? repo.language || "Code" : "Code"]}
                        githubUrl={repo.html_url !== "#" ? repo.html_url : undefined}
                        demoUrl={repo.homepage}
                        stars={repo.stargazers_count}
                        image={"image" in repo ? (repo as any).image : undefined}
                      />
                    ))}
                  </div>
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
