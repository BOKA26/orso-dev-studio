import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useGitHubProjects } from "@/hooks/useGitHubProjects";
import { Skeleton } from "@/components/ui/skeleton";

const Portfolio = () => {
  const { data: githubProjects, isLoading, error } = useGitHubProjects();

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

            {error && (
              <div className="text-center py-12">
                <p className="text-destructive text-lg">
                  Erreur lors du chargement des projets GitHub
                </p>
                <p className="text-muted-foreground mt-2">
                  Veuillez vérifier votre connexion internet et réessayer
                </p>
              </div>
            )}

            {!isLoading && !error && githubProjects && (
              <>
                {githubProjects.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      Aucun projet disponible pour le moment
                    </p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {githubProjects.map((repo) => (
                      <ProjectCard
                        key={repo.id}
                        title={repo.name}
                        description={repo.description || "Aucune description disponible"}
                        technologies={repo.topics.length > 0 ? repo.topics : [repo.language || "Code"]}
                        githubUrl={repo.html_url}
                        demoUrl={repo.homepage}
                        stars={repo.stargazers_count}
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
