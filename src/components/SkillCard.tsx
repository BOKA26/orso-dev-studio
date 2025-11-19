import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

const SkillCard = ({ title, skills, icon: Icon }: SkillCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:scale-[1.02] rounded-xl border-border/50 bg-card h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <Icon className="h-8 w-8 text-accent" />
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-3">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-accent text-lg mt-0.5 font-bold">•</span>
              <span className="text-foreground/80 leading-relaxed">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
