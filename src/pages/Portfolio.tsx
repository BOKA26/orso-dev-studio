import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useGitHubProjects } from "@/hooks/useGitHubProjects";
import { Skeleton } from "@/components/ui/skeleton";
import projectMarketplace from "@/assets/project-marketplace.jpg";
import projectChurch from "@/assets/project-church.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectOffotechword from "@/assets/project-offotechword.png";

const Portfolio = () => {
  const { data: githubProjects, isLoading, error } = useGitHubProjects();

  // Projets de fallback si GitHub échoue
  const staticProjects = [
    {
      id: 1,
      name: "BokaTrade Marketplace",
      description: "Marketplace complète avec système multi-rôle (vendeur, acheteur, livreur), escrow pour sécuriser les transactions, paiement intégré via Paystack, géolocalisation Mapbox et application mobile.",
      topics: ["Lovable", "Supabase", "Paystack", "Mapbox", "Capacitor"],
      html_url: "#",
      homepage: null,
      stargazers_count: 0,
      image: projectMarketplace,
    },
    {
      id: 2,
      name: "SaaS de Gestion d'Église",
      description: "Plateforme multi-tenant pour la gestion d'églises avec dashboard administrateur, gestion des fidèles, événements, dons en ligne et système de communication intégré.",
      topics: ["Supabase", "Lovable", "Tailwind CSS", "React"],
      html_url: "#",
      homepage: "https://saas.offotechword.com",
      stargazers_count: 0,
      image: projectChurch,
    },
    {
      id: 3,
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
  const projectLinks: Record<string, { homepage?: string; image?: string }> = {
    "saas-gestion-d-eglise": { 
      homepage: "https://saas.offotechword.com",
      image: projectChurch 
    },
    "Saas Gestion D Eglise": { 
      homepage: "https://saas.offotechword.com",
      image: projectChurch 
    },
    "portfolio": {
      homepage: "https://portfolio.offotechword.com"
    },
    "mevos": {
      homepage: "https://mevos.lovable.app",
      image: projectMarketplace
    },
    "offotechword": {
      homepage: "https://offotechword.lovable.app",
      image: projectOffotechword
    },
  };

  // Enrichir les projets GitHub avec les liens et images personnalisés
  const enrichedGithubProjects = githubProjects?.map(repo => {
    const customData = projectLinks[repo.name] || projectLinks[repo.name.toLowerCase()];
    if (customData) {
      return {
        ...repo,
        homepage: customData.homepage || repo.homepage,
        image: customData.image,
      };
    }
    return repo;
  });

  // Utiliser les projets GitHub enrichis ou les projets statiques en fallback
  const displayProjects = error ? staticProjects : enrichedGithubProjects;

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
                        technologies={repo.topics.length > 0 ? repo.topics : [repo.language || "Code"]}
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
