import { useState, useEffect } from "react";
import { Download, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Vérifie si l'app est déjà installée
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Capture l'événement beforeinstallprompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }

    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Smartphone className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Installer l'Application
            </h1>
            <p className="text-lg text-muted-foreground">
              Installez Orso Dev Studio sur votre appareil pour une expérience optimale
            </p>
          </div>

          {isInstalled ? (
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-accent/20">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h2 className="text-2xl font-bold mb-2">Application déjà installée !</h2>
              <p className="text-muted-foreground">
                Vous pouvez accéder à l'application depuis votre écran d'accueil.
              </p>
            </Card>
          ) : isInstallable ? (
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20">
              <Button
                onClick={handleInstallClick}
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                <Download className="mr-2 h-5 w-5" />
                Installer l'Application
              </Button>
              <div className="mt-6 text-left space-y-4">
                <h3 className="font-semibold text-lg">Avantages de l'installation :</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                    <span>Accès rapide depuis votre écran d'accueil</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                    <span>Fonctionne hors ligne</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                    <span>Expérience fluide comme une application native</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                    <span>Chargement ultra-rapide</span>
                  </li>
                </ul>
              </div>
            </Card>
          ) : (
            <Card className="p-8 bg-card/80 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Installation manuelle</h2>
              <div className="text-left space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground mr-2">1</span>
                    Sur iPhone/iPad (Safari)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-10">
                    <li>• Appuyez sur le bouton de partage 
                      <svg className="inline w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"/>
                      </svg>
                    </li>
                    <li>• Sélectionnez "Sur l'écran d'accueil"</li>
                    <li>• Appuyez sur "Ajouter"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground mr-2">2</span>
                    Sur Android (Chrome)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-10">
                    <li>• Ouvrez le menu (⋮) en haut à droite</li>
                    <li>• Sélectionnez "Installer l'application" ou "Ajouter à l'écran d'accueil"</li>
                    <li>• Confirmez l'installation</li>
                  </ul>
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Install;
