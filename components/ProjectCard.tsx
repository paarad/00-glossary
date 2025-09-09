import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Project, getPreviewImageUrl } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const previewImageUrl = getPreviewImageUrl(project);

  return (
    <Card className="group overflow-hidden border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <a 
        href={project.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {/* Preview Image */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={previewImageUrl}
            alt={`${project.name} preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={parseInt(project.number) <= 6} // Priority loading for first 6 projects
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          
          {/* External Link Icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <ExternalLink className="h-4 w-4 text-foreground" />
            </div>
          </div>
        </div>

        {/* Card Content */}
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
              {project.number}. {project.name}
            </CardTitle>
          </div>
          <CardDescription className="text-sm text-muted-foreground">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-1">
            {project.stack.split(', ').map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </a>
    </Card>
  );
} 