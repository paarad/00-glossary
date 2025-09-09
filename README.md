# 30 Projects Glossary

A visual, scrollable, responsive grid showcasing all 30 projects from the daily coding challenge. Each project is displayed as a card with a homepage preview, description, and tech stack.

![30 Projects Glossary Screenshot](https://via.placeholder.com/800x400/000/fff?text=30+Projects+Glossary)

## 🚀 Features

- **Responsive Grid Layout**: 3-column grid that adapts to 2 or 1 column on smaller screens
- **Project Cards**: Each card includes:
  - Project number and name
  - Live preview image from `https://[number]-[slug].paarad.org/og.png`
  - One-liner description
  - Technology stack badges
  - External link to live project (opens in new tab)
- **Performance Optimized**: 
  - Lazy-loaded image previews
  - Priority loading for first 6 projects
  - Next.js Image optimization
- **Clean Design**: Minimal style using shadcn/ui neutral theme
- **SEO Ready**: Comprehensive metadata and Open Graph tags

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **Styling**: TailwindCSS + shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Hosting**: Ready for Vercel deployment

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with grid layout
│   └── globals.css         # Global styles
├── components/
│   ├── ProjectCard.tsx     # Individual project card component
│   └── ui/                 # shadcn/ui components
├── data/
│   └── projects.ts         # Project data and types
├── lib/
│   └── utils.ts           # Utility functions
└── next.config.js         # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:paarad/00-glossary.git
   cd 00-glossary
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Deployment

Deploy on Vercel:

```bash
npm run build
```

Or use the Vercel CLI:
```bash
vercel
```

## 📊 Project Data Format

Projects are defined in `/data/projects.ts`:

```typescript
type Project = {
  number: string;      // e.g. "01"
  id: string;          // e.g. "image-to-story"
  name: string;        // e.g. "Image to Story"
  url: string;         // e.g. "https://01-image-to-story.paarad.org"
  description: string; // one-liner
  stack: string;       // tech stack
};
```

Preview images are automatically loaded from:
`https://[number]-[id].paarad.org/og.png`

## ✏️ Adding New Projects

To add a new project:

1. Open `/data/projects.ts`
2. Add a new project object to the `projects` array:
   ```typescript
   {
     number: "31",
     id: "my-new-project",
     name: "My New Project",
     url: "https://31-my-new-project.paarad.org",
     description: "Amazing new project description",
     stack: "Next.js, TypeScript, API"
   }
   ```
3. Ensure the OG image exists at the project URL: `/og.png`

## 🔧 Configuration

### External Images

The project is configured to load images from `*.paarad.org` domains. To add other domains, update `next.config.js`:

```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.paarad.org',
      },
      // Add more patterns as needed
    ],
  },
};
```

## 🎨 Styling

The project uses:
- **TailwindCSS**: For utility-first styling
- **shadcn/ui**: For consistent UI components
- **CSS Variables**: For theme customization
- **Responsive Design**: Mobile-first approach

## 📱 Mobile Optimization

- Grid collapses from 3 → 2 → 1 columns based on screen size
- Touch-friendly hover states
- Optimized image loading with `sizes` attribute
- Readable typography scaling

## 🔮 Future Enhancements (v2)

- [ ] **Tags/Filters**: Filter projects by technology stack
- [ ] **Search Bar**: Search projects by name or description
- [ ] **Favorites**: Star your favorite projects
- [ ] **Clone Links**: Direct links to project repositories
- [ ] **CMS Integration**: Connect to Supabase for dynamic project data
- [ ] **Analytics**: Track project views and interactions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- GitHub: [@paarad](https://github.com/paarad)
- Project Link: [https://github.com/paarad/00-glossary](https://github.com/paarad/00-glossary)
