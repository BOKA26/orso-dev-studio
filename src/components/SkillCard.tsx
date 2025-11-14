import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

const SkillCard = ({ title, skills, icon: Icon }: SkillCardProps) => {
  return (
    <Card className="hover:shadow-medium transition-all duration-300 hover:scale-105">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/10">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span className="text-muted-foreground">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
