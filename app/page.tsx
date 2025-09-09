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
        {/* Challenge Explanation */}
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            🎯 Objective of the Challenge
          </h2>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6 text-center">
              The 30-day, 30-project challenge is a personal and public experiment in:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-card border rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  🚀 Rapid Prototyping
                </h3>
                <p className="text-sm text-muted-foreground">
                  Build and launch 1 micro-product per day using AI tools, modern web tech, 
                  and quick creative ideas — not waiting for perfection.
                </p>
              </div>
              
              <div className="text-center p-6 bg-card border rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  🧪 Product Exploration
                </h3>
                <p className="text-sm text-muted-foreground">
                  Each project explores a unique concept, format, or niche — from meme generators 
                  to productivity tools, crypto toys to storytelling UIs — to test what sticks.
                </p>
              </div>
              
              <div className="text-center p-6 bg-card border rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  📦 Small Scope, Real Output
                </h3>
                <p className="text-sm text-muted-foreground">
                  Instead of overplanning, the focus is on shippable apps: 1 idea, 1 core feature, 1 live link. 
                  The challenge proves that shipping often beats shipping big.
                </p>
              </div>
            </div>
          </div>
        </section>

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
