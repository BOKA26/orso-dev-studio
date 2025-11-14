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
      <CardHeader>
        <CardTitle className="text-xl flex items-center justify-between">
          <span className="capitalize">{title.replace(/-/g, ' ')}</span>
          {stars !== undefined && stars > 0 && (
            <span className="flex items-center gap-1 text-sm text-muted-foreground font-normal">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {stars}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="text-base mb-4 flex-1">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 5).map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 capitalize">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
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
