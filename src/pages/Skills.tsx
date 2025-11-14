import { Code, Smartphone, Palette, Megaphone } from "lucide-react";
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
        "Front-end moderne",
        "URLs propres",
        "Responsive design",
        "Performance optimisée",
      ],
    },
    {
      title: "No-Code / Low-Code",
      icon: Smartphone,
      skills: [
        "Lovable.dev (expert)",
        "Supabase (Auth, DB, API, RLS)",
        "Capacitor (App mobile)",
        "n8n (automatisation)",
        "Intégrations API",
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
        "Gestion de contenu",
        "Social media",
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
