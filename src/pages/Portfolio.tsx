import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import projectMarketplace from "@/assets/project-marketplace.jpg";
import projectChurch from "@/assets/project-church.jpg";
import projectMobile from "@/assets/project-mobile.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "BokaTrade Marketplace",
      description: "Marketplace complète avec système multi-rôle (vendeur, acheteur, livreur), escrow pour sécuriser les transactions, paiement intégré via Paystack, géolocalisation Mapbox et application mobile.",
      technologies: ["Lovable", "Supabase", "Paystack", "Mapbox", "Capacitor"],
      image: projectMarketplace,
    },
    {
      title: "SaaS de Gestion d'Église",
      description: "Plateforme multi-tenant pour la gestion d'églises avec dashboard administrateur, gestion des fidèles, événements, dons en ligne et système de communication intégré.",
      technologies: ["Supabase", "Lovable", "Tailwind CSS", "React"],
      image: projectChurch,
    },
    {
      title: "App Mobile E-Commerce",
      description: "Application mobile e-commerce complète avec catalogue produits, panier d'achat, paiement sécurisé, notifications push et synchronisation temps réel.",
      technologies: ["Capacitor", "Lovable", "Supabase", "Push Notifications"],
      image: projectMobile,
    },
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
                Découvrez quelques-uns des projets que j'ai réalisés
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
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

export default Portfolio;
