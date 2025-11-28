import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Conditions de Service</h1>
            
            <div className="text-center mb-8">
              <p className="text-muted-foreground">
                Dernière mise à jour : 28 Novembre 2025
              </p>
            </div>

            <div className="mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Bienvenue sur <strong className="text-foreground">bska.offotechword.com</strong>.
                En accédant à ce site ou en utilisant nos services, vous acceptez pleinement les présentes Conditions de Service.
                Veuillez les lire attentivement avant toute utilisation.
              </p>
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">1. Objet des Conditions de Service</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Les présentes Conditions définissent les règles d'utilisation de la plateforme bska.offotechword.com, incluant :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>la consultation du site</li>
                    <li>l'utilisation des outils numériques proposés</li>
                    <li>l'accès aux services d'automatisation, de développement, d'assistance ou de formations</li>
                    <li>la création ou l'utilisation de comptes utilisateurs (si applicable)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    En utilisant ce site, vous reconnaissez avoir pris connaissance des Conditions de Service et les accepter sans réserve.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">2. Accès au site</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Le site est accessible gratuitement 24h/24 et 7j/7, sauf :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>interruptions de maintenance</li>
                    <li>modifications ou mises à jour du service</li>
                    <li>indisponibilités indépendantes de notre volonté (hébergeur, réseau, etc.)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Nous nous réservons le droit de suspendre ou limiter l'accès au site, temporairement ou définitivement, sans préavis.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">3. Création de compte (si applicable)</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pour accéder à certains services, un compte utilisateur peut être nécessaire.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vous vous engagez à :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>fournir des informations exactes</li>
                    <li>ne pas usurper l'identité de tiers</li>
                    <li>garder vos identifiants confidentiels</li>
                    <li>être seul responsable de l'utilisation de votre compte</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Toute activité suspecte peut entraîner la suspension immédiate du compte.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">4. Utilisation du site</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vous vous engagez à ne pas :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>utiliser le site à des fins illégales ou frauduleuses</li>
                    <li>tenter d'accéder aux serveurs par intrusion</li>
                    <li>perturber le bon fonctionnement du site</li>
                    <li>envoyer des données malveillantes (virus, scripts, bots)</li>
                    <li>violer les droits d'auteur ou les lois en vigueur</li>
                    <li>récolter des données sans autorisation</li>
                    <li>nuire à l'image de Offotechword ou de BSKA</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Nous nous réservons le droit de prendre toute mesure nécessaire en cas de non-respect.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">5. Services proposés</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La plateforme peut proposer :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>création d'outils digitaux</li>
                    <li>services IA et automatisation</li>
                    <li>formation et accompagnement</li>
                    <li>solutions personnalisées</li>
                    <li>prestations professionnelles selon devis</li>
                    <li>contenus gratuits ou premium</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Chaque service peut présenter ses propres conditions spécifiques, précisées lors de la commande ou de l'usage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">6. Tarifs et Paiements</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Lorsque des services payants sont proposés :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>les prix indiqués sont en FCFA ou en EUR</li>
                    <li>le paiement doit être effectué avant exécution du service</li>
                    <li>aucun service ne sera livré avant validation du paiement</li>
                    <li>aucun remboursement n'est possible une fois le service exécuté ou téléchargé</li>
                    <li>les devis personnalisés sont valables pour une durée limitée</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">7. Propriété intellectuelle</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Tous les contenus du site sont protégés :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>logos</li>
                    <li>textes</li>
                    <li>images</li>
                    <li>vidéos</li>
                    <li>design</li>
                    <li>codes</li>
                    <li>contenus éducatifs</li>
                    <li>outils IA</li>
                    <li>modèles créés par Offotechword</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Toute reproduction, modification, diffusion ou exploitation est strictement interdite sans autorisation écrite.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">8. Données personnelles (RGPD)</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Lors de l'utilisation du site, certaines données peuvent être collectées :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>nom</li>
                    <li>prénom</li>
                    <li>email</li>
                    <li>numéro de téléphone</li>
                    <li>données de navigation</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ces données sont utilisées uniquement pour :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>fournir les services</li>
                    <li>améliorer l'expérience utilisateur</li>
                    <li>respecter les obligations légales</li>
                    <li>assurer un support personnalisé</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Nous ne vendons jamais vos données à des tiers.</strong>
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vous disposez de droits :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>accès</li>
                    <li>modification</li>
                    <li>suppression</li>
                    <li>portabilité</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Contact :</strong>{" "}
                    <a href="mailto:support@offotechword.com" className="text-accent hover:underline">
                      support@offotechword.com
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">9. Cookies</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Le site utilise des cookies pour :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>mesurer l'audience</li>
                    <li>analyser le trafic</li>
                    <li>personnaliser les contenus</li>
                    <li>améliorer la navigation</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Vous pouvez accepter ou refuser les cookies via le bandeau prévu.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">10. Limitation de responsabilité</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nous ne pouvons être tenus responsables de :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>problèmes techniques (hébergeur, connexion, maintenance)</li>
                    <li>pertes de données externes</li>
                    <li>dommages résultants d'une mauvaise utilisation</li>
                    <li>décisions prises sur la base de nos outils ou conseils</li>
                    <li>interruptions des services tiers (Meta, Google, API externes…)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    L'utilisateur utilise le site à ses propres risques.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">11. Modification des conditions</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nous nous réservons le droit de modifier les Conditions de Service à tout moment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    En continuant d'utiliser le site après une mise à jour, vous acceptez les nouvelles conditions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">12. Contact</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pour toute question concernant ces Conditions :
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">📩 Email :</strong>{" "}
                      <a href="mailto:support@offotechword.com" className="text-accent hover:underline">
                        support@offotechword.com
                      </a>
                    </p>
                    <p>
                      <strong className="text-foreground">📞 Téléphone :</strong> +225 0757705986
                    </p>
                    <p>
                      <strong className="text-foreground">🌐 Site web :</strong>{" "}
                      <a href="https://bska.offotechword.com" className="text-accent hover:underline">
                        bska.offotechword.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
