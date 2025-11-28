import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Politique de Confidentialité</h1>
            
            <div className="text-center mb-8">
              <p className="text-muted-foreground">
                Dernière mise à jour : 28 Novembre 2025
              </p>
            </div>

            <div className="mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Chez <strong className="text-foreground">bska.offotechword.com</strong>, nous accordons une importance primordiale 
                à la protection de vos données personnelles. Cette Politique de Confidentialité explique comment nous collectons, 
                utilisons, protégeons et gérons vos informations personnelles conformément au Règlement Général sur la Protection 
                des Données (RGPD).
              </p>
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">1. Responsable du traitement des données</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Responsable :</strong> Orso Boka Jean
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Entreprise :</strong> Offotechword (BSKA)
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Adresse :</strong> Abidjan, Bingerville, Côte d'Ivoire
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Email :</strong>{" "}
                    <a href="mailto:orso.boka28@gmail.com" className="text-accent hover:underline">
                      orso.boka28@gmail.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Téléphone :</strong> +225 0757705986
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">2. Données personnelles collectées</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <h3 className="text-lg font-semibold text-foreground mb-3">2.1 Données collectées directement</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Lorsque vous utilisez nos services, nous pouvons collecter :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li><strong className="text-foreground">Informations d'identité :</strong> nom, prénom, pseudonyme</li>
                    <li><strong className="text-foreground">Coordonnées :</strong> adresse email, numéro de téléphone</li>
                    <li><strong className="text-foreground">Informations professionnelles :</strong> entreprise, fonction, secteur d'activité</li>
                    <li><strong className="text-foreground">Messages et communications :</strong> contenu des formulaires de contact, emails échangés</li>
                    <li><strong className="text-foreground">Informations de paiement :</strong> données de facturation (traitées par des prestataires sécurisés)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">2.2 Données collectées automatiquement</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Données de navigation :</strong> pages visitées, durée de visite, parcours utilisateur</li>
                    <li><strong className="text-foreground">Données techniques :</strong> adresse IP, type de navigateur, système d'exploitation</li>
                    <li><strong className="text-foreground">Cookies et traceurs :</strong> identifiants uniques, préférences utilisateur</li>
                    <li><strong className="text-foreground">Données de performance :</strong> temps de chargement, interactions avec le site</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">3. Finalités du traitement</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vos données personnelles sont traitées pour les finalités suivantes :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Fourniture des services :</strong> répondre à vos demandes, exécuter les prestations commandées</li>
                    <li><strong className="text-foreground">Communication :</strong> répondre à vos questions, vous envoyer des informations sur nos services</li>
                    <li><strong className="text-foreground">Amélioration du site :</strong> analyser l'utilisation, optimiser l'expérience utilisateur</li>
                    <li><strong className="text-foreground">Gestion des comptes :</strong> créer et gérer votre compte utilisateur (si applicable)</li>
                    <li><strong className="text-foreground">Marketing (avec consentement) :</strong> envoi de newsletters, offres promotionnelles</li>
                    <li><strong className="text-foreground">Obligations légales :</strong> facturation, comptabilité, conformité réglementaire</li>
                    <li><strong className="text-foreground">Sécurité :</strong> prévention de la fraude, protection contre les abus</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">4. Base légale du traitement</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Conformément au RGPD, nous traitons vos données sur la base de :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Votre consentement :</strong> pour l'envoi de communications marketing, l'utilisation de cookies non essentiels</li>
                    <li><strong className="text-foreground">L'exécution d'un contrat :</strong> pour la fourniture des services demandés</li>
                    <li><strong className="text-foreground">Nos intérêts légitimes :</strong> amélioration du site, analyse d'audience, sécurité</li>
                    <li><strong className="text-foreground">Obligations légales :</strong> conservation des données de facturation, conformité fiscale</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">5. Durée de conservation des données</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Données de contact :</strong> 3 ans après le dernier contact</li>
                    <li><strong className="text-foreground">Données de facturation :</strong> 10 ans (obligation légale)</li>
                    <li><strong className="text-foreground">Données de navigation :</strong> 13 mois maximum</li>
                    <li><strong className="text-foreground">Comptes utilisateurs :</strong> jusqu'à la demande de suppression ou 3 ans d'inactivité</li>
                    <li><strong className="text-foreground">Consentements marketing :</strong> 3 ans, renouvelables</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    À l'issue de ces périodes, vos données sont supprimées ou anonymisées de manière irréversible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">6. Partage et transfert des données</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <h3 className="text-lg font-semibold text-foreground mb-3">6.1 Destinataires des données</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Vos données peuvent être partagées avec :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li><strong className="text-foreground">Personnel autorisé :</strong> uniquement les membres de notre équipe ayant besoin d'accéder aux données pour exercer leurs fonctions</li>
                    <li><strong className="text-foreground">Prestataires de services :</strong> hébergement (Lovable), paiement en ligne, services marketing (avec garanties contractuelles)</li>
                    <li><strong className="text-foreground">Autorités compétentes :</strong> en cas d'obligation légale ou de demande judiciaire</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">6.2 Transferts internationaux</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Certains de nos prestataires peuvent être situés en dehors de l'Union Européenne. Dans ce cas :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types de l'UE)</li>
                    <li>Nous vérifions que le pays bénéficie d'une décision d'adéquation de la Commission Européenne</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-foreground">Important :</strong> Nous ne vendons jamais vos données personnelles à des tiers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">7. Sécurité des données</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>L'accès non autorisé</li>
                    <li>La perte ou la destruction accidentelle</li>
                    <li>La modification ou la divulgation non autorisée</li>
                    <li>Les cyberattaques et violations de données</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Ces mesures incluent : chiffrement des données sensibles, protocoles HTTPS, contrôles d'accès stricts, 
                    sauvegardes régulières, surveillance de la sécurité.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">8. Vos droits (RGPD)</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">✓ Droit d'accès</h4>
                      <p className="text-muted-foreground text-sm">Obtenir une copie de vos données personnelles</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">✓ Droit de rectification</h4>
                      <p className="text-muted-foreground text-sm">Corriger des données inexactes ou incomplètes</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">✓ Droit à l'effacement ("droit à l'oubli")</h4>
                      <p className="text-muted-foreground text-sm">Demander la suppression de vos données (sous conditions)</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">✓ Droit à la limitation du traitement</h4>
                      <p className="text-muted-foreground text-sm">Demander la suspension du traitement de vos données</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">✓ Droit à la portabilité</h4>
                      <p className="text-muted-foreground text-sm">Recevoir vos données dans un format structuré et les transférer à un autre responsable</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">✓ Droit d'opposition</h4>
                      <p className="text-muted-foreground text-sm">Vous opposer au traitement de vos données (marketing, profilage)</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">✓ Droit de retirer votre consentement</h4>
                      <p className="text-muted-foreground text-sm">Retirer votre consentement à tout moment (sans affecter la licéité des traitements antérieurs)</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">✓ Droit de définir des directives post-mortem</h4>
                      <p className="text-muted-foreground text-sm">Définir le sort de vos données après votre décès</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Comment exercer vos droits ?</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Pour exercer l'un de ces droits, contactez-nous par email à :{" "}
                      <a href="mailto:orso.boka28@gmail.com" className="text-accent hover:underline">
                        orso.boka28@gmail.com
                      </a>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Nous nous engageons à répondre dans un délai d'un mois maximum. 
                      Une pièce d'identité pourra être demandée pour vérifier votre identité.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-foreground">Réclamation :</strong> Si vous estimez que vos droits ne sont pas respectés, 
                    vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) 
                    ou de l'autorité de protection des données compétente dans votre pays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">9. Cookies et technologies similaires</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <h3 className="text-lg font-semibold text-foreground mb-3">9.1 Qu'est-ce qu'un cookie ?</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d'un site web.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">9.2 Types de cookies utilisés</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li><strong className="text-foreground">Cookies essentiels :</strong> nécessaires au fonctionnement du site (sécurité, authentification)</li>
                    <li><strong className="text-foreground">Cookies analytiques :</strong> mesure d'audience et performance du site</li>
                    <li><strong className="text-foreground">Cookies de préférence :</strong> mémorisation de vos choix (langue, affichage)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">9.3 Gestion des cookies</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vous pouvez à tout moment :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Accepter ou refuser les cookies via le bandeau de consentement</li>
                    <li>Paramétrer votre navigateur pour bloquer les cookies</li>
                    <li>Supprimer les cookies déjà déposés sur votre terminal</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-foreground">Note :</strong> Le refus de certains cookies peut limiter l'accès à certaines fonctionnalités du site.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">10. Données des mineurs</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Nos services ne sont pas destinés aux personnes de moins de 16 ans. Nous ne collectons pas sciemment 
                    de données personnelles auprès de mineurs sans le consentement parental. Si vous pensez que nous avons 
                    collecté des informations d'un mineur, contactez-nous immédiatement pour que nous puissions les supprimer.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">11. Modifications de la politique</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment pour :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Refléter les changements dans nos pratiques</li>
                    <li>Nous conformer aux évolutions légales et réglementaires</li>
                    <li>Améliorer nos services</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    La date de dernière mise à jour est indiquée en haut de cette page. Les modifications importantes 
                    vous seront notifiées par email ou via un bandeau sur le site.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">12. Contact et DPO</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pour toute question concernant cette Politique de Confidentialité ou l'exercice de vos droits :
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Responsable du traitement :</strong> Orso Boka Jean
                    </p>
                    <p>
                      <strong className="text-foreground">📩 Email :</strong>{" "}
                      <a href="mailto:orso.boka28@gmail.com" className="text-accent hover:underline">
                        orso.boka28@gmail.com
                      </a>
                    </p>
                    <p>
                      <strong className="text-foreground">📞 Téléphone :</strong> +225 0757705986
                    </p>
                    <p>
                      <strong className="text-foreground">✉️ Adresse postale :</strong> Abidjan, Bingerville, Côte d'Ivoire
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-6">
                    Nous nous engageons à traiter votre demande dans les meilleurs délais et à vous fournir une réponse 
                    complète dans un délai maximum d'un mois.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-accent/10 rounded-lg text-center">
              <p className="text-foreground font-semibold mb-2">
                💼 Votre confiance est notre priorité
              </p>
              <p className="text-muted-foreground text-sm">
                Nous nous engageons à protéger vos données personnelles et à respecter votre vie privée 
                conformément aux normes les plus strictes du RGPD.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
