import { Code, Smartphone, Palette, Megaphone, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillCard from "@/components/SkillCard";

const Skills = () => {
  const skillsData = [
    {
      title: "Web & Mobile",
      icon: Code,
      skills: [
        "Création de sites professionnels",
        "Référencement SEO et optimisation Google",
        "Front-end moderne",
        "URLs propres",
        "Responsive design",
        "Performance optimisée",
        "Portfolio multimédia intelligent",
      ],
    },
    {
      title: "No-Code / Low-Code",
      icon: Smartphone,
      skills: [
        "Création de sites IA avec Lovable.dev",
        "Supabase (Auth, DB, API, RLS)",
        "Intégration d'APIs externes (Eventbrite, Calendly)",
        "Intégration de paiements (Paystack / CinetPay / Stripe)",
        "Création d'un chatbot IA avec OpenAI",
        "Capacitor (App mobile)",
        "n8n (automatisation)",
      ],
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        "Logos & Identité visuelle",
        "Affiches & Supports print",
        "UI/UX Design",
        "Prototypage",
        "Charte graphique",
      ],
    },
    {
      title: "Communication",
      icon: Megaphone,
      skills: [
        "Stratégie digitale",
        "Branding",
        "Présentations professionnelles",
        "Rédaction et présentation d'un pitch de 30 secondes",
        "Gestion de contenu",
        "Social media",
      ],
    },
    {
      title: "Business & SaaS",
      icon: Briefcase,
      skills: [
        "Conception d'un MVP SaaS complet",
        "Application du Business Model Canvas (BMC)",
        "Élaboration d'une stratégie de lancement produit",
        "Monétisation et gestion d'abonnements SaaS",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mes Compétences</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une expertise complète pour transformer vos idées en solutions digitales performantes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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
