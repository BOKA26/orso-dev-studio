import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string | null;
  stars?: number;
}

const ProjectCard = ({ title, description, technologies, image, githubUrl, demoUrl, stars }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 hover:scale-105 flex flex-col h-full">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl flex items-center justify-between gap-2">
          <span className="capitalize line-clamp-2">{title.replace(/-/g, ' ')}</span>
          {stars !== undefined && stars > 0 && (
            <span className="flex items-center gap-1 text-sm text-muted-foreground font-normal shrink-0">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {stars}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4 sm:p-6">
        <CardDescription className="text-sm sm:text-base mb-3 sm:mb-4 flex-1 line-clamp-3">{description}</CardDescription>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {technologies.slice(0, 5).map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 capitalize text-xs sm:text-sm">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          {demoUrl && (
            <Button
              variant="default"
              size="sm"
              className="w-full"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visiter le site
              </a>
            </Button>
          )}
          {!demoUrl && githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Voir le code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
