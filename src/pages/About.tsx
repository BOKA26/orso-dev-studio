import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutPhoto from "@/assets/about-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">À propos de moi</h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Je suis <span className="text-accent font-semibold">Orso Boka Jean</span>, développeur web et créateur de solutions digitales.
                    J'ai une Licence 2 en Développement de Sites Internet et E-services.
                    J'ai aussi suivi une formation en communication et en infographie, ce qui me donne une approche complète : 
                    technique, design, et stratégie.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Je maîtrise le no-code avancé avec <span className="text-accent font-semibold">Lovable</span>, 
                    <span className="text-accent font-semibold"> Supabase</span>, 
                    <span className="text-accent font-semibold"> Capacitor</span>, 
                    <span className="text-accent font-semibold"> Paystack</span>, et d'autres technologies modernes. 
                    Je crée des SaaS, marketplaces, applications mobiles et plateformes complètes avec dashboards.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Mon approche combine créativité et technique pour livrer des produits qui non seulement fonctionnent parfaitement, 
                    mais qui sont aussi beaux et intuitifs à utiliser.
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-medium aspect-square">
                  <img
                    src={aboutPhoto}
                    alt="Orso Boka Jean"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Education & Training */}
            <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Formation & Diplômes</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="text-xl font-semibold mb-3 text-accent">Diplôme Principal</h3>
                  <p className="text-lg mb-2 font-medium">Licence 2 en Développement de Sites Internet et E-services</p>
                  <p className="text-muted-foreground">Formation complète en développement web et création de services en ligne.</p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="text-xl font-semibold mb-3 text-accent">Formations Complémentaires</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span className="text-muted-foreground">Communication digitale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span className="text-muted-foreground">Infographie professionnelle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span className="text-muted-foreground">Développement no-code / SaaS créateur</span>
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
