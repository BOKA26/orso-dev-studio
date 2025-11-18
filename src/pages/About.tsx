import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutPhoto from "@/assets/about-photo-new.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">À propos de moi</h1>
            
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Je suis <span className="text-accent font-bold">Orso Boka Jean</span>, développeur web full-stack freelance passionné par la création de solutions digitales innovantes.
                  </p>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Titulaire d'une <span className="text-primary font-semibold">Licence 2 en Développement de Sites Internet et E-services</span>, 
                    j'ai également suivi des formations spécialisées en <span className="text-primary font-semibold">communication digitale</span> et 
                    en <span className="text-primary font-semibold">infographie professionnelle</span>. Cette triple expertise me permet d'aborder chaque projet 
                    sous trois angles complémentaires : technique, design et stratégie.
                  </p>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Je maîtrise les technologies no-code avancées comme <span className="text-accent font-semibold">Lovable</span>, 
                    <span className="text-accent font-semibold"> Supabase</span>, 
                    <span className="text-accent font-semibold"> React</span>, 
                    <span className="text-accent font-semibold"> TypeScript</span>, 
                    <span className="text-accent font-semibold"> Capacitor</span>, et 
                    <span className="text-accent font-semibold"> Paystack</span>. 
                    Je conçois et déploie des SaaS, marketplaces, applications mobiles et sites vitrine professionnels.
                  </p>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    <span className="text-primary font-semibold">Ma philosophie :</span> Créer des produits qui allient performance technique, 
                    esthétique soignée et expérience utilisateur intuitive. Chaque ligne de code, chaque pixel compte.
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-large aspect-square border-4 border-accent/20">
                  <img
                    src={aboutPhoto}
                    alt="Orso Boka Jean - Développeur Full-Stack Freelance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Education & Training */}
            <div className="bg-secondary rounded-3xl p-8 md:p-12 shadow-medium">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">Formation & Expertise</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-2xl p-8 shadow-soft border-2 border-accent/20 hover:border-accent transition-colors">
                  <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-accent">Diplôme Principal</h3>
                  <p className="text-lg md:text-xl mb-3 font-semibold text-foreground">Licence 2 en Développement de Sites Internet et E-services</p>
                  <p className="text-muted-foreground leading-relaxed">Formation approfondie en développement web moderne, architecture logicielle et création de services numériques.</p>
                </div>
                
                <div className="bg-card rounded-2xl p-8 shadow-soft border-2 border-primary/20 hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">Formations Complémentaires</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-lg font-bold mt-0.5">✓</span>
                      <span className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Communication digitale</strong> — Stratégie et contenu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-lg font-bold mt-0.5">✓</span>
                      <span className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Infographie professionnelle</strong> — Design et branding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-lg font-bold mt-0.5">✓</span>
                      <span className="text-muted-foreground leading-relaxed"><strong className="text-foreground">No-code avancé</strong> — SaaS et applications complexes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
