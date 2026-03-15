export type MediaKind = "short" | "video" | "podcast";

export type MediaStat = {
  label: string;
  value: string;
};

export type MediaCard = {
  kind: MediaKind;
  slug: string;
  title: string;
  summary: string;
  duration: string;
  eyebrow: string;
  href: string;
  streamUrl?: string;
  audioUrl?: string;
  creator: string;
  published: string;
  artwork: string;
  tags: string[];
  metrics: MediaStat[];
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
  tagline:
    "A creator-owned publishing stack for hypercar and supercar channels that want a sharper, calmer home base than social feeds.",
};

export const shortFormContent: MediaCard[] = [
  {
    kind: "short",
    slug: "launch-day-brief",
    title: "SF90 XX launch brief",
    summary: "A redline-ready vertical cut with lap telemetry, spec callouts, and clean overlays built for fast daily publishing.",
    duration: "00:58",
    eyebrow: "Short-form",
    href: "/shorts/launch-day-brief",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    creator: "Dawn Run Studio",
    published: "Today · 08:20",
    artwork: "linear-gradient(135deg, #0f172a 0%, #991b1b 35%, #ef4444 70%, #fca5a5 100%)",
    tags: ["Ferrari", "Launch", "Vertical"],
    metrics: [
      { label: "Retention", value: "78%" },
      { label: "Replay", value: "2.6x" },
      { label: "Comments", value: "184" },
    ],
  },
  {
    kind: "short",
    slug: "pit-lane-notes",
    title: "Senna GTR pit lane notes",
    summary: "Trackside impressions, tire temp snapshots, and a sharp portrait layout for fast reaction clips.",
    duration: "01:12",
    eyebrow: "Short-form",
    href: "/shorts/pit-lane-notes",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    creator: "Apex Culture",
    published: "Today · 10:05",
    artwork: "linear-gradient(135deg, #111827 0%, #9a3412 32%, #f97316 62%, #fdba74 100%)",
    tags: ["McLaren", "Track", "Paddock"],
    metrics: [
      { label: "Watch rate", value: "71%" },
      { label: "Saves", value: "842" },
      { label: "CTR", value: "6.4%" },
    ],
  },
  {
    kind: "short",
    slug: "revuelto-night-launch",
    title: "Revuelto night launch",
    summary: "A neon-toned teaser with arrival shots, venue audio, and bold end-card prompts for discussion handoff.",
    duration: "00:49",
    eyebrow: "Short-form",
    href: "/shorts/revuelto-night-launch",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    creator: "Midnight Autobahn",
    published: "Yesterday · 21:40",
    artwork: "linear-gradient(135deg, #111827 0%, #14532d 30%, #84cc16 68%, #d9f99d 100%)",
    tags: ["Lamborghini", "Event", "Launch"],
    metrics: [
      { label: "Shares", value: "1.3k" },
      { label: "Finish", value: "82%" },
      { label: "Clicks", value: "5.8%" },
    ],
  },
  {
    kind: "short",
    slug: "tourbillon-soundcheck",
    title: "Tourbillon soundcheck",
    summary: "A quick-spec audio-first clip staged for endless scroll, with preload-ready follow-up cards underneath.",
    duration: "01:03",
    eyebrow: "Short-form",
    href: "/shorts/tourbillon-soundcheck",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    creator: "Studio Twelve",
    published: "Yesterday · 16:10",
    artwork: "linear-gradient(135deg, #111827 0%, #1d4ed8 34%, #60a5fa 70%, #dbeafe 100%)",
    tags: ["Bugatti", "Sound", "Teaser"],
    metrics: [
      { label: "Loop rate", value: "3.1x" },
      { label: "Comments", value: "96" },
      { label: "Profile taps", value: "12%" },
    ],
  },
];

export const longFormContent: MediaCard[] = [
  {
    kind: "video",
    slug: "garage-tour-cut",
    title: "DDE-style hypercar garage tour",
    summary: "A full-width studio cut with chapter-ready pacing, sponsor-safe lower thirds, and strong companion CTAs.",
    duration: "18:42",
    eyebrow: "Long-form video",
    href: "/videos/garage-tour-cut",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    creator: "Creator Garage",
    published: "Today · 07:45",
    artwork: "linear-gradient(135deg, #0f172a 0%, #312e81 30%, #7c3aed 65%, #ddd6fe 100%)",
    tags: ["Garage", "Collection", "Studio"],
    metrics: [
      { label: "Avg watch", value: "11:08" },
      { label: "Members", value: "+142" },
      { label: "Watchlist", value: "3.4k" },
    ],
  },
  {
    kind: "video",
    slug: "ownership-review",
    title: "765LT ownership review",
    summary: "Feature deep-dives, route notes, and a clean editorial shell designed for sponsor reads and chapter links.",
    duration: "24:09",
    eyebrow: "Long-form video",
    href: "/videos/ownership-review",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    creator: "Northline Drive",
    published: "Yesterday · 19:10",
    artwork: "linear-gradient(135deg, #111827 0%, #78350f 34%, #d97706 68%, #fde68a 100%)",
    tags: ["McLaren", "Ownership", "Review"],
    metrics: [
      { label: "Avg watch", value: "14:52" },
      { label: "Email CTR", value: "8.1%" },
      { label: "Shares", value: "912" },
    ],
  },
  {
    kind: "video",
    slug: "revuelto-road-film",
    title: "Revuelto canyon road film",
    summary: "A minimal long-form layout for road stories, cinematic B-roll, and follow-up podcast cross-promotion.",
    duration: "21:33",
    eyebrow: "Long-form video",
    href: "/videos/revuelto-road-film",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    creator: "Midnight Autobahn",
    published: "Yesterday · 12:25",
    artwork: "linear-gradient(135deg, #111827 0%, #0f766e 34%, #14b8a6 68%, #ccfbf1 100%)",
    tags: ["Lamborghini", "Road film", "Tour"],
    metrics: [
      { label: "Completion", value: "63%" },
      { label: "Sign-ins", value: "228" },
      { label: "Bookmarks", value: "1.1k" },
    ],
  },
  {
    kind: "video",
    slug: "tourbillon-first-look",
    title: "Tourbillon first look",
    summary: "A first-look briefing with structure for chapters, notes, community follow-up, and large-format thumbnails.",
    duration: "16:51",
    eyebrow: "Long-form video",
    href: "/videos/tourbillon-first-look",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    creator: "Studio Twelve",
    published: "2 days ago",
    artwork: "linear-gradient(135deg, #111827 0%, #1e3a8a 36%, #3b82f6 68%, #bfdbfe 100%)",
    tags: ["Bugatti", "First look", "Studio"],
    metrics: [
      { label: "Avg watch", value: "10:41" },
      { label: "Site dwell", value: "+18%" },
      { label: "Comments", value: "256" },
    ],
  },
];

export const podcastEpisodes: (MediaCard & { chapters: Chapter[] })[] = [
  {
    kind: "podcast",
    slug: "garage-notes-12",
    title: "Garage notes #12",
    summary: "A creator-owned weekly hypercar show with chapters, direct discussion routing, and sponsor-safe playback surfaces.",
    duration: "32:10",
    eyebrow: "Podcast",
    href: "/podcasts/garage-notes-12",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    creator: "Creator Garage",
    published: "Today · 06:55",
    artwork: "linear-gradient(135deg, #111827 0%, #7f1d1d 30%, #ef4444 64%, #fecaca 100%)",
    tags: ["Weekly", "Roadmap", "Community"],
    metrics: [
      { label: "Listeners", value: "4.2k" },
      { label: "Completion", value: "58%" },
      { label: "Replies", value: "64" },
    ],
    chapters: [
      { title: "Launch recap", time: 0 },
      { title: "Track-day prep", time: 320 },
      { title: "Creator Q&A", time: 910 },
      { title: "What ships next", time: 1500 },
    ],
  },
  {
    kind: "podcast",
    slug: "collectors-line-07",
    title: "Collectors line #07",
    summary: "A buyer-focused supercar roundtable with chapter jumps, market notes, and subscriber callouts.",
    duration: "41:26",
    eyebrow: "Podcast",
    href: "/podcasts/collectors-line-07",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    creator: "Northline Drive",
    published: "Yesterday · 14:30",
    artwork: "linear-gradient(135deg, #111827 0%, #3f3f46 28%, #71717a 58%, #e4e4e7 100%)",
    tags: ["Collectors", "Market", "Members"],
    metrics: [
      { label: "Downloads", value: "2.1k" },
      { label: "Return rate", value: "61%" },
      { label: "Emails", value: "188" },
    ],
    chapters: [
      { title: "Market pulse", time: 0 },
      { title: "Auction watch", time: 470 },
      { title: "Service costs", time: 1180 },
      { title: "Members mailbag", time: 1895 },
    ],
  },
];

export const discussionSeeds: Record<string, SeedComment[]> = {
  "launch-day-brief": [
    {
      id: "seed-1",
      parentId: null,
      author: "DDE Fans Club",
      body: "This vertical card style makes the SF90 clip feel premium instead of disposable. The clean overlays are much easier to follow.",
      createdAt: "2026-03-15T08:00:00.000Z",
    },
    {
      id: "seed-2",
      parentId: "seed-1",
      author: "Workshop Weekly",
      body: "Exactly. The comments feel calmer when the page layout is flatter and the CTA goes straight into a proper thread.",
      createdAt: "2026-03-15T08:07:00.000Z",
    },
    {
      id: "seed-3",
      parentId: null,
      author: "Collector Spec",
      body: "Would love a next-up queue underneath so the short page can feel more like a full feed instead of a single dead-end post.",
      createdAt: "2026-03-15T08:12:00.000Z",
    },
  ],
  "pit-lane-notes": [
    {
      id: "seed-4",
      parentId: null,
      author: "Track Club",
      body: "This is the kind of paddock recap I would binge if the creator page kept surfacing two or three more track clips underneath.",
      createdAt: "2026-03-15T09:00:00.000Z",
    },
    {
      id: "seed-5",
      parentId: "seed-4",
      author: "Lap Data",
      body: "The minimal layout also makes the telemetry callouts stand out a lot more than the previous card-heavy version.",
      createdAt: "2026-03-15T09:11:00.000Z",
    },
  ],
  "revuelto-night-launch": [
    {
      id: "seed-6",
      parentId: null,
      author: "Event Journal",
      body: "Love the color separation in this launch cut. The brighter artwork helps the feed feel genuinely populated.",
      createdAt: "2026-03-15T09:42:00.000Z",
    },
  ],
  "tourbillon-soundcheck": [
    {
      id: "seed-7",
      parentId: null,
      author: "Cold Start",
      body: "An audio-led short works well here. The next-up rail is where I’d expect preload and cache behavior to become obvious.",
      createdAt: "2026-03-15T10:03:00.000Z",
    },
  ],
  "garage-tour-cut": [
    {
      id: "seed-8",
      parentId: null,
      author: "Sunday Drive",
      body: "This is exactly the sort of long-form layout that works for a real collection tour or behind-the-scenes upload.",
      createdAt: "2026-03-15T11:00:00.000Z",
    },
    {
      id: "seed-9",
      parentId: "seed-8",
      author: "Launch Control",
      body: "And it finally uses the full width of the viewport without relying on shadowed cards to create hierarchy.",
      createdAt: "2026-03-15T11:07:00.000Z",
    },
  ],
  "ownership-review": [
    {
      id: "seed-10",
      parentId: null,
      author: "Northline Members",
      body: "A sponsor read, chapter list, and related podcast slot neatly into this shell without feeling like ad clutter.",
      createdAt: "2026-03-15T12:16:00.000Z",
    },
  ],
  "revuelto-road-film": [
    {
      id: "seed-11",
      parentId: null,
      author: "Night Run",
      body: "The road-film treatment works. It feels closer to GitHub’s density than a glossy automotive landing page.",
      createdAt: "2026-03-15T13:24:00.000Z",
    },
  ],
  "tourbillon-first-look": [
    {
      id: "seed-12",
      parentId: null,
      author: "Spec Watch",
      body: "The supporting rails make this feel like a real editorial system rather than a single embedded video page.",
      createdAt: "2026-03-15T14:20:00.000Z",
    },
  ],
  "garage-notes-12": [
    {
      id: "seed-13",
      parentId: null,
      author: "Apex Stories",
      body: "Chapters make this much easier to revisit than a generic embedded player, especially when the page also surfaces the discussion thread.",
      createdAt: "2026-03-15T10:30:00.000Z",
    },
    {
      id: "seed-14",
      parentId: "seed-13",
      author: "Collector Radio",
      body: "Would love this paired with a notes rail that previews the next episode and cached backlog.",
      createdAt: "2026-03-15T10:41:00.000Z",
    },
  ],
  "collectors-line-07": [
    {
      id: "seed-15",
      parentId: null,
      author: "Club Registry",
      body: "This is a strong members-style podcast format. The flatter chrome makes it feel much more trustworthy and less gimmicky.",
      createdAt: "2026-03-15T15:02:00.000Z",
    },
  ],
};

export const platformHighlights = [
  "Flat GitHub-style interface with dense, creator-friendly content rails instead of decorative elevation",
  "Full-width responsive shells for shorts, long-form video, podcasts, discussions, and dashboard workflows",
  "Richer seeded hypercar and supercar demo data so every route feels populated and reviewable",
  "Reusable list patterns that preview loaded batches, preloaded next items, and cache-ready continuation states",
  "Demo auth with optional Supabase wiring for email and social sign-in without sacrificing local evaluation",
  "Installable PWA shell plus Docker self-hosting for creators who want total audience ownership",
];

export const allMedia: MediaCard[] = [...shortFormContent, ...longFormContent, ...podcastEpisodes];

export function getShort(slug: string) {
  return shortFormContent.find((item) => item.slug === slug);
}

export function getVideo(slug: string) {
  return longFormContent.find((item) => item.slug === slug);
}

export function getPodcast(slug: string) {
  return podcastEpisodes.find((item) => item.slug === slug);
}

export function getMedia(slug: string) {
  return allMedia.find((item) => item.slug === slug);
}

export function getDiscussionCards() {
  return allMedia.map((item) => ({
    ...item,
    href: `/discussions/${item.slug}`,
    eyebrow: "Discussion",
    summary: `Thread around ${item.title.toLowerCase()} with creator replies, fan prompts, and cross-tab live presence.`,
    metrics: [
      { label: "Replies", value: String(discussionSeeds[item.slug]?.length ?? 0) },
      { label: "Live now", value: item.kind === "podcast" ? "4" : item.kind === "video" ? "6" : "3" },
      { label: "Type", value: item.eyebrow.replace("-form ", " ") },
    ],
  }));
}
