import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Calendar } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string | null;
  stars?: number;
  category?: string;
  year?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  githubUrl, 
  demoUrl, 
  stars,
  category,
  year
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border-2 hover:border-accent group bg-card">
      {/* Image uniforme en 16:9 */}
      {image && (
        <div className="relative aspect-video overflow-hidden bg-secondary/30">
          <img
            src={image}
            alt={`Capture d'écran du projet ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Overlay avec catégorie */}
          {category && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary/90 text-white backdrop-blur-sm font-bold shadow-medium">
                {category}
              </Badge>
            </div>
          )}
          {/* Badge année si présent */}
          {year && (
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm font-semibold flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {year}
              </Badge>
            </div>
          )}
        </div>
      )}
      
      <CardHeader className="p-5 sm:p-6 pb-3">
        <CardTitle className="text-lg sm:text-xl font-bold flex items-start justify-between gap-2 text-foreground group-hover:text-accent transition-colors">
          <span className="line-clamp-2 leading-snug">{title.replace(/-/g, ' ')}</span>
          {stars !== undefined && stars > 0 && (
            <span className="flex items-center gap-1 text-sm text-muted-foreground font-normal shrink-0">
              <Star className="w-4 h-4 fill-accent text-accent" />
              {stars}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-5 sm:p-6 pt-0">
        {/* Description harmonisée */}
        <CardDescription className="text-sm sm:text-base mb-4 flex-1 line-clamp-3 leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
        
        {/* Technologies avec limite de 5 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 5).map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-accent/10 text-accent hover:bg-accent/20 font-semibold text-xs border border-accent/20"
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 5 && (
            <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
              +{technologies.length - 5}
            </Badge>
          )}
        </div>
        
        {/* Boutons d'action clairs */}
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          {demoUrl && (
            <Button
              variant="default"
              size="sm"
              className="w-full sm:flex-1 bg-primary hover:bg-primary/90 font-semibold"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir en ligne
              </a>
            </Button>
          )}
          {githubUrl && githubUrl !== "#" && (
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:flex-1 border-2 hover:bg-secondary font-semibold"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code source
              </a>
            </Button>
          )}
          {!demoUrl && (!githubUrl || githubUrl === "#") && (
            <Button
              variant="secondary"
              size="sm"
              className="w-full cursor-not-allowed"
              disabled
            >
              Projet privé
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
