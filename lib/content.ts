export type MediaCard = {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  eyebrow: string;
  href: string;
  streamUrl?: string;
  audioUrl?: string;
};

export type Chapter = {
  title: string;
  time: number;
};

export type SeedComment = {
  id: string;
  parentId: string | null;
  author: string;
  body: string;
  createdAt: string;
};

export const creatorProfile = {
  name: "Creator Garage",
  logo: "CG",
  tagline: "Creator-owned video, audio, and discussion hub for automotive stories.",
};

export const shortFormContent: MediaCard[] = [
  {
    slug: "launch-day-brief",
    title: "Launch day brief",
    summary: "A portrait-first clip format for quick reactions, spec highlights, and social-first storytelling.",
    duration: "00:58",
    eyebrow: "Short-form",
    href: "/shorts/launch-day-brief",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    slug: "pit-lane-notes",
    title: "Pit lane notes",
    summary: "Quick track-day dispatches with clean captions, swipe pacing, and adaptive HLS playback.",
    duration: "01:12",
    eyebrow: "Short-form",
    href: "/shorts/pit-lane-notes",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
];

export const longFormContent: MediaCard[] = [
  {
    slug: "garage-tour-cut",
    title: "Garage tour cut",
    summary: "A long-form viewing experience with structured copy, chapter cues, and discussion hand-off.",
    duration: "18:42",
    eyebrow: "Long-form video",
    href: "/videos/garage-tour-cut",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    slug: "ownership-review",
    title: "Ownership review",
    summary: "Feature deep-dives, route notes, and a page layout tuned for creator-owned editorial control.",
    duration: "24:09",
    eyebrow: "Long-form video",
    href: "/videos/ownership-review",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
];

export const podcastEpisodes: (MediaCard & { chapters: Chapter[] })[] = [
  {
    slug: "garage-notes-12",
    title: "Garage notes #12",
    summary: "Podcast playback with chapter jumps, progress persistence, and a discussion CTA.",
    duration: "32:10",
    eyebrow: "Podcast",
    href: "/podcasts/garage-notes-12",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    chapters: [
      { title: "Opening brief", time: 0 },
      { title: "Track-day prep", time: 320 },
      { title: "Creator Q&A", time: 910 },
      { title: "What ships next", time: 1500 },
    ],
  },
];

export const discussionSeeds: Record<string, SeedComment[]> = {
  "launch-day-brief": [
    {
      id: "seed-1",
      parentId: null,
      author: "Workshop Weekly",
      body: "The short-form feed feels quick and clean. I’d keep the page focused on caption-first context like this.",
      createdAt: "2026-03-15T08:00:00.000Z",
    },
    {
      id: "seed-2",
      parentId: "seed-1",
      author: "Track Club",
      body: "Agreed. The creator-owned angle matters more when the discussion is easy to follow without ads around it.",
      createdAt: "2026-03-15T08:07:00.000Z",
    },
  ],
  "garage-tour-cut": [
    {
      id: "seed-3",
      parentId: null,
      author: "Sunday Drive",
      body: "This is the sort of long-form layout that works well for first drives, owner updates, and route films.",
      createdAt: "2026-03-15T09:00:00.000Z",
    },
  ],
  "garage-notes-12": [
    {
      id: "seed-4",
      parentId: null,
      author: "Apex Stories",
      body: "Chapters make this much easier to revisit than a generic embedded audio player.",
      createdAt: "2026-03-15T10:30:00.000Z",
    },
  ],
};

export const platformHighlights = [
  "Next.js App Router with TypeScript and responsive Tailwind layouts",
  "Creator landing page with featured short-form, long-form, podcast, and discussion entry points",
  "PWA manifest, install prompt support, and offline document fallback",
  "Demo auth flow with optional Supabase Auth wiring for email and social sign-in",
  "Nested discussions with local real-time sync and presence-style updates across tabs",
  "Docker and Docker Compose files for self-hosted deployment",
];

export function getShort(slug: string) {
  return shortFormContent.find((item) => item.slug === slug);
}

export function getVideo(slug: string) {
  return longFormContent.find((item) => item.slug === slug);
}

export function getPodcast(slug: string) {
  return podcastEpisodes.find((item) => item.slug === slug);
}
