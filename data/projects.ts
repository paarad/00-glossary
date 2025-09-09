export type Project = {
  number: string;      // e.g. "01"
  id: string;          // e.g. "image-to-story"
  name: string;        // e.g. "Image to Story"
  url: string;         // e.g. "https://01-image-to-story.paarad.org"
  description: string; // one-liner
  stack: string;       // tech stack
};

export const projects: Project[] = [
  {
    number: "01",
    id: "image-to-story",
    name: "Image to Story",
    url: "https://01-image-to-story.paarad.org",
    description: "Generate a short story from any image",
    stack: "Next.js, Tailwind, OpenAI"
  },
  {
    number: "02",
    id: "market-sentiment-feed",
    name: "Market Sentiment Feed",
    url: "https://02-market-sentiment-feed.paarad.org",
    description: "AI-powered crypto market sentiment feed",
    stack: "Next.js, Tailwind, OpenAI"
  },
  {
    number: "03",
    id: "coincerto",
    name: "Coincerto",
    url: "https://03-coincerto.paarad.org",
    description: "Tokenomics breakdown via AI",
    stack: "Next.js, Tailwind, OpenAI"
  },
  {
    number: "04",
    id: "project-four",
    name: "Project Four",
    url: "https://04-project-four.paarad.org",
    description: "Description for project four",
    stack: "Next.js, React, TypeScript"
  },
  {
    number: "05",
    id: "project-five",
    name: "Project Five",
    url: "https://05-project-five.paarad.org",
    description: "Description for project five",
    stack: "Next.js, Tailwind, API"
  },
  // Add more projects as needed - this structure allows for easy expansion
  // You can replace the placeholder projects (04-30) with actual project data
  ...Array.from({ length: 26 }, (_, i) => ({
    number: String(i + 6).padStart(2, '0'),
    id: `project-${String(i + 6).toLowerCase()}`,
    name: `Project ${i + 6}`,
    url: `https://${String(i + 6).padStart(2, '0')}-project-${String(i + 6).toLowerCase()}.paarad.org`,
    description: `Description for project ${i + 6}`,
    stack: "Next.js, React, TypeScript"
  }))
];

// Helper function to get preview image URL
export const getPreviewImageUrl = (project: Project): string => {
  return `https://${project.number}-${project.id}.paarad.org/og.png`;
}; 