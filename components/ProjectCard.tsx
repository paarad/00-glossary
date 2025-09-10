'use client';

import Image from 'next/image';
import { ExternalLink, FileImage } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Project, getPreviewImageUrl, getPlaceholderImageUrl } from '@/data/projects';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const previewImageUrl = getPreviewImageUrl(project);
  const placeholderImageUrl = getPlaceholderImageUrl(project);
  const [imageError, setImageError] = useState(false);
  
  // Switch to real OG images from your deployed projects
  const [useRealImage, setUseRealImage] = useState(true);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

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
          {showPlaceholder ? (
            // Use simple CSS-based placeholder for reliability
            <div className="flex flex-col items-center justify-center h-full bg-blue-600 text-white transition-transform duration-300 group-hover:scale-105">
              <div className="text-center px-4">
                <h3 className="text-2xl font-bold mb-2">{project.number}. {project.name}</h3>
                <p className="text-blue-200 text-sm mb-1">{project.stack}</p>
                <p className="text-blue-100 text-xs">Preview Coming Soon</p>
              </div>
            </div>
          ) : !imageError ? (
            <Image
              src={previewImageUrl}
              alt={`${project.name} preview`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={parseInt(project.number) <= 6} // Priority loading for first 6 projects
              onError={() => {
                console.log(`Failed to load image for ${project.name}, showing placeholder`);
                setShowPlaceholder(true);
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-muted">
              <div className="text-center">
                <FileImage className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Preview Coming Soon</p>
              </div>
            </div>
          )}
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