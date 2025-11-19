import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, Linkedin, Github, Send, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(100, { message: "Le nom ne peut pas dépasser 100 caractères" }),
  email: z.string()
    .trim()
    .email({ message: "Veuillez entrer une adresse email valide" })
    .max(255, { message: "L'email ne peut pas dépasser 255 caractères" }),
  message: z.string()
    .trim()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" })
    .max(1000, { message: "Le message ne peut pas dépasser 1000 caractères" })
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validation avec zod
    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);

      // Encode les données pour WhatsApp
      const whatsappMessage = encodeURIComponent(
        `*Nouveau message depuis le portfolio*\n\nNom: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`
      );
      const whatsappUrl = `https://wa.me/22996491923?text=${whatsappMessage}`;

      // Ouvrir WhatsApp dans un nouvel onglet
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      toast({
        title: "Message préparé !",
        description: "Votre message a été préparé pour WhatsApp. Vous pouvez l'envoyer maintenant.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Erreur de validation",
          description: "Veuillez vérifier les champs du formulaire.",
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "orsobokajean@gmail.com",
      href: "mailto:orsobokajean@gmail.com",
      description: "Réponse sous 24h"
    },
    {
      icon: Phone,
      title: "Téléphone / WhatsApp",
      value: "+229 96 49 19 23",
      href: "tel:+22996491923",
      description: "Lun-Ven 9h-18h"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Cotonou, Bénin",
      description: "Disponible en remote"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/orso-boka-jean-0a0a0a0a0/",
      color: "hover:text-[#0A66C2]"
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/orsobokajean",
      color: "hover:text-foreground"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 text-sm px-4 py-1">📬 Contact</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contactez-moi</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Vous avez un projet en tête ? Discutons-en ensemble. <span className="text-accent font-semibold">Je réponds sous 24h</span>.
              </p>
            </div>

            {/* Availability Banner */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6 mb-12 border-2 border-accent/20">
              <div className="flex items-center justify-center gap-3 flex-wrap text-center">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <p className="text-lg font-semibold text-foreground">
                  Actuellement disponible pour de nouveaux projets
                </p>
                <Badge variant="secondary" className="gap-1">
                  <Calendar className="h-3 w-3" />
                  Démarrage possible immédiat
                </Badge>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="border-2 hover:border-accent/50 transition-all shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Send className="h-6 w-6 text-accent" />
                    Envoyez un message
                  </CardTitle>
                  <CardDescription className="text-base">
                    Décrivez votre projet ou votre besoin. Le message sera envoyé via WhatsApp.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                        Votre nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                        Votre adresse email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean.dupont@exemple.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                        Votre message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet, vos besoins, votre budget et vos délais..."
                        rows={6}
                        className={`resize-none ${errors.message ? "border-destructive" : ""}`}
                      />
                      <div className="flex justify-between items-center mt-1">
                        {errors.message && (
                          <p className="text-sm text-destructive">{errors.message}</p>
                        )}
                        <p className="text-xs text-muted-foreground ml-auto">
                          {formData.message.length}/1000 caractères
                        </p>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full gap-2" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      <MessageCircle className="h-5 w-5" />
                      {isSubmitting ? "Préparation..." : "Envoyer via WhatsApp"}
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      * Champs obligatoires
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information & Social */}
              <div className="space-y-6">
                {/* Contact Methods */}
                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Coordonnées directes</CardTitle>
                    <CardDescription className="text-base">
                      Vous préférez un contact direct ? Voici plusieurs moyens de me joindre.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {contactMethods.map((method, index) => {
                      const Icon = method.icon;
                      return (
                        <div 
                          key={index}
                          className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/60 transition-all group border border-transparent hover:border-accent/20"
                        >
                          <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">{method.title}</p>
                            {method.href ? (
                              <a 
                                href={method.href}
                                className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium block mb-1"
                                target={method.href.startsWith('http') ? '_blank' : undefined}
                                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {method.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground text-sm font-medium mb-1">
                                {method.value}
                              </p>
                            )}
                            <p className="text-xs text-muted-foreground">{method.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Réseaux professionnels</CardTitle>
                    <CardDescription>
                      Suivez mon actualité et mes projets
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-3 bg-secondary/30 rounded-xl hover:bg-secondary transition-all border-2 border-transparent hover:border-accent/30 ${social.color} flex-1 justify-center`}
                            aria-label={`Voir mon profil ${social.name}`}
                          >
                            <Icon className="h-5 w-5" />
                            <span className="font-semibold text-sm">{social.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Availability Info */}
                <Card className="border-2 border-border bg-gradient-to-br from-card to-secondary/20 shadow-soft">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">🌍 Zone géographique</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Basé à <span className="text-foreground font-semibold">Cotonou, Bénin</span>. 
                          Je travaille principalement en <span className="text-accent font-semibold">remote</span> avec des clients 
                          dans toute l'Afrique francophone et en Europe.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">💼 Statut professionnel</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Développeur freelance indépendant. Je suis disponible pour des missions 
                          de développement web, consulting technique et accompagnement digital.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">⚡ Délais de réponse</h3>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            Email : Réponse sous 24h maximum
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            WhatsApp : Réponse rapide en journée
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            Horaires : Lun-Ven 9h-18h (GMT+1)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;