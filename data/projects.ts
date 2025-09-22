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
        description: "Turn any image into a short story with GPT's imagination.",
        stack: "Next.js, OpenAI",
      },
      {
        number: "02",
        id: "market-sentiment-feed",
        name: "Market Sentiment Feed",
        url: "https://02-market-sentiment-feed.paarad.org",
        description: "See live crypto market vibes. Aggregated. Interpreted. AI-enhanced.",
        stack: "Next.js, OpenAI, Market APIs",
      },
      {
        number: "03",
        id: "coincerto",
        name: "Coincerto",
        url: "https://03-coincerto.paarad.org",
        description: "Use the data from the project 2 and create a music each day based on the market sentiment",
        stack: "Next.js, OpenAI",
      },
      {
        number: "04",
        id: "dao-proposal-tldr",
        name: "DAO Proposal TL;DR",
        url: "https://04-dao-proposal-tldr.paarad.org",
        description: "Paste a DAO proposal. Get a concise, readable TL;DR instantly.",
        stack: "Next.js, OpenAI",
      },
      {
          number: "05",
          id: "pfpmask",
          name: "PFPmask",
          url: "https://05-pfpmask.paarad.org",
          description: "Chrome Extension. Hide your face on browser video calls by replacing it with a tracked, talking NFT avatar. Local-only. Privacy-first.",
          stack: "Next.js, MediaPipe",
        },
        {
          number: "06",
          id: "jeandelafontaine",
          name: "Jean de la Fontaine",
          url: "https://06-jeandelafontaine.paarad.org",
          description: "Create AI-generated poems in the style of de La Fontaine.",
          stack: "Next.js, OpenAI",
        },
        {
          number: "07",
          id: "deadticker",
          name: "DeadTicker",
          url: "https://07-deadticker.paarad.org",
          description: "Twitter bot. Mention the bot with a $TICKER or contract address. It resolves the token, renders a consistent tombstone image",
          stack: "Next.js, TwitterAPI, Coin Data APIs",
        },
      {
        number: "08",
        id: "hopium-calculator",
        name: "Hopium Calculator",
        url: "https://08-hopium-calculator.paarad.org",
        description: "Input your bags. See how delusional your price targets really are.",
        stack: "Next.js, OpenAI",
      },
      {
        number: "09",
        id: "pfp-masquerade",
        name: "PFP Masquerade",
        url: "https://09-pfp-masquerade.paarad.org",
        description: "Generate high-quality, anonymous PFPs from a vibe, not a face.",
        stack: "Next.js, Replicate",
      },
      {
        number: "10",
        id: "cope-station",
        name: "Cope Station",
        url: "https://10-cope-station.paarad.org",
        description: "Get AI-generated copium quotes when markets dump or life dumps harder.",
        stack: "Next.js, OpenAI",
      },
      {
        number: "11",
        id: "autoflex",
        name: "Autoflex",
        url: "https://11-autoflex.paarad.org",
        description: "Auto-generate viral flex posts for LinkedIn with just a one-line input. (satire)",
        stack: "Next.js, OpenAI",
      },
      {
        number: "12",
        id: "shillgospel",
        name: "ShillGospel",
        url: "https://12-shillgospel.paarad.org",
        description: "AI-powered parody posts/threads that make any token sound god-tier. Use it for KOLs",
        stack: "Next.js, OpenAI",
      },
      {
        number: "13",
        id: "brandkit",
        name: "BrandKit",
        url: "https://13-brandkit.paarad.org",
        description: "Create clean, text-only logos powered by AI. Real or meme brands.",
        stack: "Next.js, OpenAI, DALL·E",
      },
      {
        number: "14",
        id: "genframes",
        name: "GenFrames",
        url: "https://14-genframes.paarad.org",
        description: "Generate storyboards with AI: frame count, scene titles, captions & pacing.",
        stack: "Next.js, OpenAI, DALL·E",
      },
      {
        number: "15",
        id: "youcanforgetnow",
        name: "youcanforgetnow",
        url: "https://15-youcanforgetnow.paarad.org",
        description: "Telegram bot. DM it like a friend. Store notes, reminders, or links and get pinged when it matters.",
        stack: "Next.js, TelegramBot, Supabase, OpenAI",
      },
      {
        number: "16",
        id: "moodshift",
        name: "Moodshift",
        url: "https://16-moodshift.paarad.org",
        description: "Pick your mindset (Zen or Warrior) and get a daily quote, reflection, and action.",
        stack: "Next.js, Supabase, OpenAI",
      },
      {
        number: "17",
        id: "justcook",
        name: "justcook",
        url: "https://17-justcook.paarad.org",
        description: "Input ingredients. Get AI-generated recipes with steps and title. Zero thinking needed.",
        stack: "Next.js, OpenAI",
      },
      {
        number: "18",
        id: "clonetime",
        name: "Clonetime",
        url: "https://18-clonetime.paarad.org",
        description: "Paste a product URL. Get a breakdown of tasks and estimated dev time to rebuild it.",
        stack: "Next.js, Supabase, OpenAI",
      },
      {
        number: "19",
        id: "bizprompt",
        name: "Bizprompt",
        url: "https://19-bizprompt.paarad.org",
        description: "Generate fresh startup ideas instantly based on themes or vibes. Built for makers.",
        stack: "Next.js, OpenAI",
      },
      {
        number: "20",
        id: "mamette",
        name: "Mamette",
        url: "https://20-mamette.paarad.org",
        description: "Generate stunning AI book covers in seconds using just a title, theme, and vibe.",
        stack: "Next.js, OpenAI (DALL·E), Supabase",
      },
      {
        number: "21",
        id: "moonlight-reader",
        name: "Moonlight Reader",
        url: "https://21-moonlight-reader.paarad.org",
        description: "Create personalized bedtime audiobooks with celebrity-style or family voiceovers.",
        stack: "Next.js, OpenAI (TTS), Supabase",
      },
      {
        number: "22",
        id: "havenmap",
        name: "Havenmap",
        url: "https://22-havenmap.paarad.org",
        description: "AI-scored survival map for locating rural safe zones with resources, remoteness, and low loot risk.",
        stack: "Next.js, OpenAI, Overpass API, Supabase",
      },
      {
        number: "23",
        id: "podprompt",
        name: "PodPrompt",
        url: "https://23-podprompt.paarad.org",
        description: "Turn podcast episodes into summaries, tweet threads, and content ideas — all in one click.",
        stack: "Next.js, OpenAI, Supabase",
      },
      {
        number: "24",
        id: "trendformer",
        name: "Trendformer",
        url: "https://24-trendformer.paarad.org",
        description: "Find trending topics in your niche and generate viral Twitter threads instantly.",
        stack: "Next.js, OpenAI, Reddit, Supabase",
      },
      {
        number: "25",
        id: "dumbgoodies",
        name: "Dumbgoodies",
        url: "https://25-dumbgoodies.paarad.org",
        description: "Upload a logo and get ridiculous merch mockups — funny, cursed, or genius.",
        stack: "Next.js, OpenAI (Vision), Supabase",
      },
      {
        number: "26",
        id: "unicornswipe",
        name: "UnicornSwipe",
        url: "https://26-unicornswipe.paarad.org",
        description: "Swipe through absurd or brilliant startup ideas and unlock your founder archetype.",
        stack: "Next.js, OpenAI, Supabase",
      },
      {
        number: "27",
        id: "backroom-generator",
        name: "Backroom Generator",
        url: "https://27-backroom-generator.paarad.org",
        description: "Enter a phrase, generate a full creepy 'backroom' level with lore, hazards, and visuals.",
        stack: "Next.js, OpenAI (GPT-4 + DALL·E), Supabase",
      },
      {
        number: "28",
        id: "worktales",
        name: "WorkTales",
        url: "https://28-worktales.paarad.org",
        description: "Pick a job — AI writes a short fictional story for TikTok-style narration (60–90s).",
        stack: "Next.js, OpenAI, Supabase",
      },
      {
        number: "29",
        id: "beef-arena",
        name: "Beef Arena",
        url: "https://29-beef-arena.paarad.org",
        description: "Cartoon-style celebrity fight generator",
        stack: "Next.js, nano banana, Supabase",
      },
      {
        number: "30",
        id: "palace-archive",
        name: "Palace Archive",
        url: "https://30-palace-archive.paarad.org",
        description: "Scrapes and archives Palace Skateboards’ funniest product descriptions.",
        stack: "Python, Next.js, Supabase, OpenAI",
      },
] as const;

// Helper function to get preview image URL
export const getLocalScreenshotUrl = (project: Project): string => {
  // Looks for /public/screenshots/{number}-{id}.jpg (fallback to .png)
  return `/screenshots/${project.number}-${project.id}.jpg`;
};

// Helper function to get a placeholder image URL for testing
export const getPlaceholderImageUrl = (project: Project): string => {
  // Create a data URL with SVG for reliable local placeholder
  const svg = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#2563eb"/>
    <text x="400" y="180" font-family="Inter, Arial, sans-serif" font-size="32" font-weight="600" 
          fill="white" text-anchor="middle">${project.number}. ${project.name}</text>
    <text x="400" y="220" font-family="Inter, Arial, sans-serif" font-size="18" 
          fill="#93c5fd" text-anchor="middle">${project.stack}</text>
    <text x="400" y="260" font-family="Inter, Arial, sans-serif" font-size="14" 
          fill="#dbeafe" text-anchor="middle">Preview Coming Soon</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}; 