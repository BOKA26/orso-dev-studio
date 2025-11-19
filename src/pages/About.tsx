import { Download, Code, Palette, Megaphone, Briefcase, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import aboutPhoto from "@/assets/about-photo-new.jpg";

const About = () => {
  const coreSkills = [
    { category: "Développement", icon: Code, items: ["React & TypeScript", "Supabase & API", "Applications SaaS", "Sites E-commerce"] },
    { category: "Design", icon: Palette, items: ["UI/UX Design", "Identité visuelle", "Prototypage", "Charte graphique"] },
    { category: "Communication", icon: Megaphone, items: ["Stratégie digitale", "Branding", "Contenu web", "Social media"] },
    { category: "Business", icon: Briefcase, items: ["MVP & SaaS", "Business Model", "Stratégie produit", "Monétisation"] },
  ];

  const experience = [
    {
      period: "2023 - Aujourd'hui",
      title: "Développeur Freelance Full-Stack",
      description: "Création de solutions web et mobile sur mesure pour PME et startups. Spécialisation dans les SaaS et marketplaces.",
      achievements: ["10+ projets livrés", "Applications mobiles natives", "Intégrations API complexes"]
    },
    {
      period: "2022 - 2023",
      title: "Designer & Développeur Web",
      description: "Conception et développement de sites vitrine et e-commerce. Accompagnement stratégique digital.",
      achievements: ["15+ clients satisfaits", "SEO & Performance", "Design système cohérent"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-sm px-4 py-1">👋 À propos de moi</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Orso Boka Jean
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Développeur web full-stack freelance passionné par la création de <span className="text-accent font-semibold">solutions digitales innovantes</span> qui allient performance technique, design soigné et expérience utilisateur intuitive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Ma Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ma mission est de vous aider à transformer vos idées en produits digitaux performants et esthétiques. 
                    Je m'engage à livrer des solutions sur mesure qui répondent précisément à vos besoins et dépassent vos attentes.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Mon Approche</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Grâce à ma <span className="text-primary font-semibold">triple expertise</span> en développement, design et stratégie digitale, 
                    j'aborde chaque projet de manière holistique. Je ne me contente pas de coder : je conçois des expériences complètes 
                    qui génèrent de la valeur pour vos utilisateurs et votre business.
                  </p>
                </div>

                <Button size="lg" className="gap-2 w-full md:w-auto">
                  <Download className="h-5 w-5" />
                  Télécharger mon CV
                </Button>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-large aspect-square border-4 border-accent/20 hover:border-accent/40 transition-colors">
                  <img
                    src={aboutPhoto}
                    alt="Orso Boka Jean - Développeur Full-Stack Freelance spécialisé en React, TypeScript et Supabase"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-sm px-4 py-1">💎 Compétences Clés</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Expertise Multidisciplinaire</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une maîtrise complète de la chaîne de valeur digitale, du concept à la mise en production
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {coreSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-soft border-2 border-border hover:border-accent/50 transition-all hover:shadow-medium"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <a href="/skills">Voir toutes mes compétences</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-sm px-4 py-1">🚀 Parcours</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Mon Expérience Professionnelle</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un parcours riche en projets variés et en défis techniques relevés avec succès
              </p>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft border-2 border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-xs font-mono">
                          {exp.period}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4 text-accent" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-sm px-4 py-1">🎓 Formation</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Diplômes & Certifications</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une formation solide et des certifications reconnues pour garantir des prestations de qualité
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft border-2 border-accent/20 hover:border-accent transition-colors">
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-accent">Diplôme Principal</h3>
                <p className="text-lg md:text-xl mb-3 font-semibold text-foreground">Licence 2 en Développement de Sites Internet et E-services</p>
                <p className="text-muted-foreground leading-relaxed">
                  Formation approfondie en développement web moderne, architecture logicielle et création de services numériques. 
                  Maîtrise des technologies front-end et back-end ainsi que des méthodologies agiles.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-soft border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">Formations Complémentaires</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg font-bold mt-0.5">✓</span>
                    <span className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Communication digitale</strong> — Stratégie de contenu et marketing digital
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg font-bold mt-0.5">✓</span>
                    <span className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Infographie professionnelle</strong> — Design graphique et identité visuelle
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg font-bold mt-0.5">✓</span>
                    <span className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">No-code avancé</strong> — Développement rapide de SaaS et applications complexes
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Travaillons Ensemble
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Vous avez un projet digital en tête ? Je serais ravi d'en discuter avec vous et de vous accompagner dans sa réalisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Me contacter</a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/portfolio">Voir mes réalisations</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
