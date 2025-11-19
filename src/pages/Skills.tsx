import { Monitor, Settings, Palette, Megaphone, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillCard from "@/components/SkillCard";

const Skills = () => {
  const skillsData = [
    {
      title: "Web & Mobile",
      icon: Monitor,
      skills: [
        "Développement de sites professionnels",
        "Front-end moderne (React, Tailwind, Next.js)",
        "Responsive design",
        "SEO & optimisation Google",
        "Performance optimisée",
        "URLs propres",
      ],
    },
    {
      title: "No-Code / Low-Code",
      icon: Settings,
      skills: [
        "Création de sites IA avec Lovable.dev",
        "Supabase (Auth, DB, API, RLS)",
        "Intégration d'APIs externes",
        "Automatisation n8n",
        "Apps mobiles avec Capacitor",
        "Intégration de paiements (Paystack, Stripe, CinetPay)",
      ],
    },
    {
      title: "Design & Identité",
      icon: Palette,
      skills: [
        "Logos & identités visuelles",
        "UI/UX Design",
        "Prototypage",
        "Affiches & supports print",
        "Création de chartes graphiques",
      ],
    },
    {
      title: "Communication digitale",
      icon: Megaphone,
      skills: [
        "Stratégies digitales",
        "Branding",
        "Présentations professionnelles",
        "Conception de pitch (30 secondes)",
        "Social media & gestion de contenu",
      ],
    },
    {
      title: "Business & SaaS",
      icon: TrendingUp,
      skills: [
        "Conception d'un MVP SaaS complet",
        "Business Model Canvas (BMC)",
        "Stratégie de lancement produit",
        "Monétisation SaaS",
        "Gestion d'abonnements",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mes Compétences
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Une expertise complète pour transformer vos idées en solutions digitales performantes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {skillsData.map((skill, index) => (
                <SkillCard
                  key={index}
                  title={skill.title}
                  skills={skill.skills}
                  icon={skill.icon}
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

export default Skills;
