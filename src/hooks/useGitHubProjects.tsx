import { useQuery } from "@tanstack/react-query";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  homepage: string | null;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

const GITHUB_USERNAME = "BOKA26";

export const useGitHubProjects = () => {
  return useQuery({
    queryKey: ["github-projects"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`
      );
      
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des projets GitHub");
      }
      
      const repos: GitHubRepo[] = await response.json();
      
      // Filtrer les forks et trier par date de mise à jour
      return repos
        .filter(repo => !repo.fork)
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    },
    staleTime: 1000 * 60 * 5, // Cache pendant 5 minutes
  });
};

export type { GitHubRepo };
