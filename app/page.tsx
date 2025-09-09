import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              30 Projects Glossary
            </h1>
            <p className="text-lg text-muted-foreground">
              A visual showcase of 30 projects from the daily coding challenge
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={`${project.number}-${project.id}`} 
              project={project} 
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            Built with Next.js, TailwindCSS, and shadcn/ui | 
            <span className="ml-1">
              {projects.length} projects and counting
            </span>
          </p>
        </footer>
      </main>
    </div>
  );
}
