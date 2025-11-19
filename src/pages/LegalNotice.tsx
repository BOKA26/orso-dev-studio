import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Mentions Légales</h1>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Éditeur du site</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Nom :</strong> Orso Boka Jean
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Statut :</strong> Développeur Web Freelance Indépendant
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Adresse :</strong> Cotonou, Bénin
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Email :</strong>{" "}
                    <a href="mailto:orsobokajean@gmail.com" className="text-accent hover:underline">
                      orsobokajean@gmail.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Téléphone :</strong> +229 96 49 19 23
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Hébergement</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Hébergeur :</strong> Lovable (GPT Engineer AB)
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Adresse :</strong> Suède
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Site web :</strong>{" "}
                    <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      lovable.dev
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Propriété intellectuelle</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    L'ensemble du contenu de ce site (textes, images, design, logos, etc.) est la propriété exclusive de Orso Boka Jean, 
                    sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Protection des données personnelles (RGPD)</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Collecte de données</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Les informations collectées via le formulaire de contact (nom, email, message) sont uniquement utilisées 
                    pour répondre à vos demandes de renseignements. Elles ne sont ni vendues, ni partagées avec des tiers.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Vos droits</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité 
                    de vos données personnelles. Pour exercer ces droits, contactez-nous à :{" "}
                    <a href="mailto:orsobokajean@gmail.com" className="text-accent hover:underline">
                      orsobokajean@gmail.com
                    </a>
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Durée de conservation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Les données sont conservées uniquement le temps nécessaire au traitement de votre demande, 
                    puis supprimées dans un délai de 3 ans maximum.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Cookies</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques nécessaires 
                    au bon fonctionnement du site peuvent être utilisés.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Responsabilité</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Nous nous efforçons de maintenir les informations du site à jour et exactes. Toutefois, nous ne pouvons garantir 
                    l'exactitude, la complétude ou l'actualité des informations diffusées. Nous déclinons toute responsabilité 
                    en cas d'erreur ou d'omission dans le contenu du site.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Liens externes</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Ce site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu 
                    ou des pratiques de confidentialité de ces sites tiers.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center text-muted-foreground text-sm">
              <p>Dernière mise à jour : 19 Novembre 2025</p>
              <p className="mt-2">
                Entreprise individuelle — Activité professionnelle déclarée
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalNotice;
