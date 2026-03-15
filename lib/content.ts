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
  {
    kind: "short",
    slug: "huayra-dawn-warmup",
    title: "Huayra dawn warm-up",
    summary: "A sunrise pit-exit clip with crew chatter, warm tire haze, and fast-cut overlays built for a crowded short-form queue.",
    duration: "00:54",
    eyebrow: "Short-form",
    href: "/shorts/huayra-dawn-warmup",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    creator: "Pagani Lane",
    published: "Yesterday · 06:12",
    artwork: "linear-gradient(135deg, #0f172a 0%, #115e59 32%, #2dd4bf 66%, #ccfbf1 100%)",
    tags: ["Pagani", "Warmup", "Sunrise"],
    metrics: [
      { label: "Completion", value: "84%" },
      { label: "Shares", value: "1.1k" },
      { label: "Comments", value: "143" },
    ],
  },
  {
    kind: "short",
    slug: "f40-midnight-pull",
    title: "F40 midnight pull",
    summary: "An after-hours workshop blast with one clean launch pull, fluorescent reflections, and high-replay pacing for busy feeds.",
    duration: "01:05",
    eyebrow: "Short-form",
    href: "/shorts/f40-midnight-pull",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    creator: "Rosso Signals",
    published: "2 days ago",
    artwork: "linear-gradient(135deg, #111827 0%, #7f1d1d 34%, #f43f5e 70%, #fecdd3 100%)",
    tags: ["Ferrari", "Night", "Launch"],
    metrics: [
      { label: "Loop rate", value: "2.9x" },
      { label: "Saves", value: "963" },
      { label: "CTR", value: "7.2%" },
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
  {
    kind: "video",
    slug: "atelier-delivery-film",
    title: "Atelier delivery day film",
    summary: "A customer handover story with cinematic garage setup, document-table details, and a polished right-rail watch flow.",
    duration: "19:24",
    eyebrow: "Long-form video",
    href: "/videos/atelier-delivery-film",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    creator: "Atelier Journal",
    published: "2 days ago",
    artwork: "linear-gradient(135deg, #111827 0%, #4c1d95 34%, #8b5cf6 68%, #ede9fe 100%)",
    tags: ["Delivery", "Atelier", "Film"],
    metrics: [
      { label: "Avg watch", value: "12:36" },
      { label: "Bookmarks", value: "1.6k" },
      { label: "Members", value: "+96" },
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
  {
    kind: "podcast",
    slug: "factory-radio-03",
    title: "Factory radio #03",
    summary: "A workshop-floor audio diary with chapter jumps, launch prep notes, and a stronger backlog feel for the library rail.",
    duration: "36:18",
    eyebrow: "Podcast",
    href: "/podcasts/factory-radio-03",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    creator: "Atelier Journal",
    published: "Yesterday · 08:05",
    artwork: "linear-gradient(135deg, #111827 0%, #14532d 32%, #22c55e 66%, #dcfce7 100%)",
    tags: ["Workshop", "Radio", "Launch prep"],
    metrics: [
      { label: "Listeners", value: "3.3k" },
      { label: "Completion", value: "62%" },
      { label: "Replies", value: "51" },
    ],
    chapters: [
      { title: "Shop open", time: 0 },
      { title: "Build notes", time: 410 },
      { title: "Launch checklist", time: 1180 },
      { title: "Fan mailbag", time: 1705 },
    ],
  },
  {
    kind: "podcast",
    slug: "night-shift-21",
    title: "Night shift #21",
    summary: "A late-evening creator roundtable about edits, sponsor reads, and what a fuller owned library should feel like.",
    duration: "38:42",
    eyebrow: "Podcast",
    href: "/podcasts/night-shift-21",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    creator: "Midnight Autobahn",
    published: "2 days ago",
    artwork: "linear-gradient(135deg, #111827 0%, #172554 30%, #2563eb 66%, #dbeafe 100%)",
    tags: ["Roundtable", "Night shift", "Editing"],
    metrics: [
      { label: "Downloads", value: "2.8k" },
      { label: "Return rate", value: "64%" },
      { label: "Mentions", value: "205" },
    ],
    chapters: [
      { title: "Edit bay", time: 0 },
      { title: "Sponsor slots", time: 520 },
      { title: "Queue planning", time: 1280 },
      { title: "Community notes", time: 2010 },
    ],
  },
  {
    kind: "podcast",
    slug: "paddock-talk-04",
    title: "Paddock talk #04",
    summary: "A track-weekend audio recap with call sheets, tire notes, and enough adjacent depth to make the audio tab feel busy.",
    duration: "34:55",
    eyebrow: "Podcast",
    href: "/podcasts/paddock-talk-04",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    creator: "Apex Culture",
    published: "3 days ago",
    artwork: "linear-gradient(135deg, #111827 0%, #78350f 34%, #f59e0b 68%, #fef3c7 100%)",
    tags: ["Track", "Paddock", "Weekend"],
    metrics: [
      { label: "Listeners", value: "2.6k" },
      { label: "Completion", value: "57%" },
      { label: "Replies", value: "39" },
    ],
    chapters: [
      { title: "Out-lap notes", time: 0 },
      { title: "Pit wall stories", time: 360 },
      { title: "Tire strategy", time: 1030 },
      { title: "Next weekend", time: 1640 },
    ],
  },
];

export const discussionSeeds: Record<string, SeedComment[]> = {
  "launch-day-brief": [
    {
      id: "seed-1",
      parentId: null,
      author: "DDE Fans Club",
      body: "This vertical card style makes the SF90 clip feel premium instead of disposable. It reads like a proper launch note from the paddock instead of another throwaway reel.",
      createdAt: "2026-03-15T08:00:00.000Z",
    },
    {
      id: "seed-2",
      parentId: "seed-1",
      author: "Workshop Weekly",
      body: "Exactly. We watched the crew rehearse that first pit-lane pullout three times before sunrise, and the flatter layout finally gives that story enough room to breathe.",
      createdAt: "2026-03-15T08:07:00.000Z",
    },
    {
      id: "seed-16",
      parentId: "seed-2",
      author: "Scuderia Notes",
      body: "The best part was hearing the host mention that the camera op was wedged between flight cases while the transport truck doors were still open. That tiny bit of chaos sells the morning.",
      createdAt: "2026-03-15T08:12:00.000Z",
    },
    {
      id: "seed-17",
      parentId: "seed-16",
      author: "Redline Archive",
      body: "And then the team used the warm-up lap as the actual transition shot. You can feel the story arc: sleepy garage, ignition bark, then instant crowd around the car.",
      createdAt: "2026-03-15T08:18:00.000Z",
    },
    {
      id: "seed-18",
      parentId: "seed-17",
      author: "Pit Wall Stories",
      body: "That’s the kind of detail I want more of in the dummy content. Give me the early-call-time nerves, the camera battery scramble, and the moment the lead engineer finally nods to roll.",
      createdAt: "2026-03-15T08:24:00.000Z",
    },
    {
      id: "seed-3",
      parentId: null,
      author: "Collector Spec",
      body: "Would love a next-up queue underneath so the short page can feel more like a full feed instead of a single dead-end post. It should feel like the launch day keeps unfolding.",
      createdAt: "2026-03-15T08:29:00.000Z",
    },
    {
      id: "seed-19",
      parentId: "seed-3",
      author: "Maranello Mile",
      body: "Same. I want the follow-up story where they duck back into the tent, wipe brake dust off the lens, and argue over whether the second run sounded sharper in the onboard mix.",
      createdAt: "2026-03-15T08:35:00.000Z",
    },
    {
      id: "seed-20",
      parentId: "seed-19",
      author: "Studio Rosso",
      body: "Then surface the quiet bit after the crowd clears. A producer walking past stacks of still-warm tires with a checklist in hand is exactly the kind of detail that makes the route feel lived in.",
      createdAt: "2026-03-15T08:42:00.000Z",
    },
    {
      id: "seed-21",
      parentId: "seed-20",
      author: "Quarter Mile Club",
      body: "That would make the comments read like an actual debrief. Right now the bones are good; a few more made-up behind-the-scenes beats would turn it into a believable launch diary.",
      createdAt: "2026-03-15T08:48:00.000Z",
    },
    {
      id: "seed-22",
      parentId: "seed-21",
      author: "Late Apex",
      body: "Agreed. Keep the UI tight, then let the thread carry the story: first pass, crowd reaction, reset lap, and the exhausted wrap-up while the transporter loads back out.",
      createdAt: "2026-03-15T08:54:00.000Z",
    },
  ],
  "pit-lane-notes": [
    {
      id: "seed-4",
      parentId: null,
      author: "Track Club",
      body: "This is the kind of paddock recap I would binge if the creator page kept surfacing two or three more track clips underneath. It already sounds like the start of a full session diary.",
      createdAt: "2026-03-15T09:00:00.000Z",
    },
    {
      id: "seed-5",
      parentId: "seed-4",
      author: "Lap Data",
      body: "The minimal layout also makes the telemetry callouts stand out a lot more than the previous card-heavy version. You can imagine the host glancing down at tire temps while marshals wave cars through.",
      createdAt: "2026-03-15T09:11:00.000Z",
    },
    {
      id: "seed-23",
      parentId: "seed-5",
      author: "Paddock Film Room",
      body: "My favorite made-up beat is the crew member jogging back with a pressure gauge because the first out-lap felt greasy on turn-in. That tiny problem instantly makes the paddock feel real.",
      createdAt: "2026-03-15T09:17:00.000Z",
    },
    {
      id: "seed-24",
      parentId: "seed-23",
      author: "Kerbside Notes",
      body: "Then the next comment can carry it forward: coffee on the timing stand, someone calling out a cool-down lap, and the host realizing the clip they almost binned is actually the keeper.",
      createdAt: "2026-03-15T09:23:00.000Z",
    },
    {
      id: "seed-25",
      parentId: "seed-24",
      author: "Chicane Journal",
      body: "That’s the sweet spot for this demo. Denser spacing up front, then a thread deep enough to tell the whole pit-lane story from first fire-up to the final tire blanket going back on.",
      createdAt: "2026-03-15T09:29:00.000Z",
    },
  ],
  "revuelto-night-launch": [
    {
      id: "seed-6",
      parentId: null,
      author: "Event Journal",
      body: "Love the color separation in this launch cut. The brighter artwork helps the feed feel genuinely populated, like a real event night with multiple beats still unfolding.",
      createdAt: "2026-03-15T09:42:00.000Z",
    },
    {
      id: "seed-26",
      parentId: "seed-6",
      author: "After Hours Auto",
      body: "I can picture the story already: valet cones everywhere, someone chasing reflections off the bodywork, and the presenter whispering the intro because the venue DJ is still doing sound check.",
      createdAt: "2026-03-15T09:48:00.000Z",
    },
    {
      id: "seed-27",
      parentId: "seed-26",
      author: "Carbon Diaries",
      body: "Then the doors open, phones go up, and one clean tracking shot becomes the hero frame for the whole page. That kind of invented event detail makes the thread much more convincing.",
      createdAt: "2026-03-15T09:54:00.000Z",
    },
    {
      id: "seed-28",
      parentId: "seed-27",
      author: "Grid Walk",
      body: "Especially if the next reply mentions the coordinator pulling the car three feet left to catch the neon strip on the hood. Tiny production notes go a long way here.",
      createdAt: "2026-03-15T10:00:00.000Z",
    },
    {
      id: "seed-29",
      parentId: "seed-28",
      author: "Night Shift Garage",
      body: "Yes — keep stacking that stuff. By the fourth level it should feel like we heard the launch sequence, saw the crowd surge, and stayed long enough to watch the room settle back down.",
      createdAt: "2026-03-15T10:06:00.000Z",
    },
  ],
  "tourbillon-soundcheck": [
    {
      id: "seed-7",
      parentId: null,
      author: "Cold Start",
      body: "An audio-led short works well here. The next-up rail is where I’d expect preload and cache behavior to become obvious, especially if the comments tell a fuller soundcheck story.",
      createdAt: "2026-03-15T10:03:00.000Z",
    },
    {
      id: "seed-30",
      parentId: "seed-7",
      author: "Octane Ear",
      body: "Start with the host standing beside the diffuser while the engineer asks for one more blip at half throttle. That paints the whole clip before the waveform even loads.",
      createdAt: "2026-03-15T10:09:00.000Z",
    },
    {
      id: "seed-31",
      parentId: "seed-30",
      author: "Valve Timing",
      body: "Then mention the second take echoing off the concrete wall and everybody looking up at the same time. That sort of made-up scene gives the discussion page some real texture.",
      createdAt: "2026-03-15T10:15:00.000Z",
    },
    {
      id: "seed-32",
      parentId: "seed-31",
      author: "Turbo Static",
      body: "Exactly, and the tighter spacing helps because the story reads almost like release notes: first idle, second pull, reaction from the room, then the quiet wrap after the microphones come down.",
      createdAt: "2026-03-15T10:21:00.000Z",
    },
    {
      id: "seed-33",
      parentId: "seed-32",
      author: "Ignition Lounge",
      body: "That’s the version I’d screenshot. A compact thread with four layers deep makes the route feel populated even before anyone types their own reply.",
      createdAt: "2026-03-15T10:27:00.000Z",
    },
  ],
  "garage-tour-cut": [
    {
      id: "seed-8",
      parentId: null,
      author: "Sunday Drive",
      body: "This is exactly the sort of long-form layout that works for a real collection tour or behind-the-scenes upload. It feels ready for a full day-in-the-garage story.",
      createdAt: "2026-03-15T11:00:00.000Z",
    },
    {
      id: "seed-9",
      parentId: "seed-8",
      author: "Launch Control",
      body: "And it finally uses the full width of the viewport without relying on shadowed cards to create hierarchy. I can imagine the camera starting at the workshop door and walking rack by rack through the collection.",
      createdAt: "2026-03-15T11:07:00.000Z",
    },
    {
      id: "seed-34",
      parentId: "seed-9",
      author: "Garage Grid",
      body: "That’s the thread I want: a shelf of helmets by the entrance, a battery tender blinking in the corner, and the host deciding which car gets rolled out first while someone hunts for keys.",
      createdAt: "2026-03-15T11:13:00.000Z",
    },
    {
      id: "seed-35",
      parentId: "seed-34",
      author: "Flat Plane Daily",
      body: "Then a reply about the camera operator backing into a stack of tire totes because the F40 door is wider than expected. It’s small, believable, and way better than generic praise.",
      createdAt: "2026-03-15T11:19:00.000Z",
    },
    {
      id: "seed-36",
      parentId: "seed-35",
      author: "Workshop Stories",
      body: "Exactly. By the fourth level deep the page should read like a miniature production log: open shutters, move covers, fire up the first car, and end with the garage lights humming after wrap.",
      createdAt: "2026-03-15T11:25:00.000Z",
    },
  ],
  "ownership-review": [
    {
      id: "seed-10",
      parentId: null,
      author: "Northline Members",
      body: "A sponsor read, chapter list, and related podcast slot neatly into this shell without feeling like ad clutter. It already sounds like the start of an honest ownership diary.",
      createdAt: "2026-03-15T12:16:00.000Z",
    },
    {
      id: "seed-37",
      parentId: "seed-10",
      author: "Service Bay",
      body: "The made-up detail I’d add is the owner arriving early to find a trickle charger still connected and a handwritten note about brake squeal tucked under the wiper.",
      createdAt: "2026-03-15T12:22:00.000Z",
    },
    {
      id: "seed-38",
      parentId: "seed-37",
      author: "Long Route",
      body: "Then the reply becomes the drive itself: cold gearbox for the first ten minutes, fuel stop chat with another owner, and the moment the car finally settles into its stride.",
      createdAt: "2026-03-15T12:28:00.000Z",
    },
    {
      id: "seed-39",
      parentId: "seed-38",
      author: "GT Ledger",
      body: "That would make the comments feel like a proper cost-of-ownership thread instead of filler. I want invoices, tire wear, and one oddly specific rattling cupholder story in there.",
      createdAt: "2026-03-15T12:34:00.000Z",
    },
    {
      id: "seed-40",
      parentId: "seed-39",
      author: "Road Tax Club",
      body: "And because it’s four levels deep, you get that nice GitHub issue vibe where every reply adds another piece of the timeline instead of resetting back to generic applause.",
      createdAt: "2026-03-15T12:40:00.000Z",
    },
  ],
  "revuelto-road-film": [
    {
      id: "seed-11",
      parentId: null,
      author: "Night Run",
      body: "The road-film treatment works. It feels closer to GitHub’s density than a glossy automotive landing page, especially if the thread keeps the canyon drive going afterward.",
      createdAt: "2026-03-15T13:24:00.000Z",
    },
    {
      id: "seed-41",
      parentId: "seed-11",
      author: "Canyon Marker",
      body: "First reply should mention the crew missing golden hour by five minutes, then gambling on one more pass because the clouds finally opened above the ridge.",
      createdAt: "2026-03-15T13:30:00.000Z",
    },
    {
      id: "seed-42",
      parentId: "seed-41",
      author: "Downshift Society",
      body: "Second reply: a radio crackle, a photographer sprinting to the overlook, and that one shot where the brake lights smear into the dusk. Suddenly the dummy thread feels authored.",
      createdAt: "2026-03-15T13:36:00.000Z",
    },
    {
      id: "seed-43",
      parentId: "seed-42",
      author: "Switchback Files",
      body: "Then close it out with the low-key part — everyone parked at the turnout, trading SD cards and deciding whether the exhaust clip or the road noise better sells the film.",
      createdAt: "2026-03-15T13:42:00.000Z",
    },
    {
      id: "seed-44",
      parentId: "seed-43",
      author: "Summit Lane",
      body: "That’s exactly four levels deep and it reads great in a compact thread. Every reply moves the story from setup to run to review instead of just repeating 'looks amazing.'",
      createdAt: "2026-03-15T13:48:00.000Z",
    },
  ],
  "tourbillon-first-look": [
    {
      id: "seed-12",
      parentId: null,
      author: "Spec Watch",
      body: "The supporting rails make this feel like a real editorial system rather than a single embedded video page. It’s close to feeling like a full first-look briefing with follow-up notes.",
      createdAt: "2026-03-15T14:20:00.000Z",
    },
    {
      id: "seed-45",
      parentId: "seed-12",
      author: "Blueprint Daily",
      body: "I’d add a reply about the host rehearsing the opening beside a covered car while product staff debate which detail to reveal first. That instantly turns the page into a story.",
      createdAt: "2026-03-15T14:26:00.000Z",
    },
    {
      id: "seed-46",
      parentId: "seed-45",
      author: "Coachbuilt Club",
      body: "Then the thread can move to the reveal beat: sheet comes off, someone points out the clockwork-inspired trim, and the camera punches in because the room suddenly gets quiet.",
      createdAt: "2026-03-15T14:32:00.000Z",
    },
    {
      id: "seed-47",
      parentId: "seed-46",
      author: "Atelier Notes",
      body: "I like that because it gives the demo route texture without needing new components. The compact shell does its job, and the content supplies the sense of occasion.",
      createdAt: "2026-03-15T14:38:00.000Z",
    },
    {
      id: "seed-48",
      parentId: "seed-47",
      author: "Chronograph Lane",
      body: "Exactly — four layers deep, each one adding a beat: prep, reveal, close inspection, then the quiet designer chat after the main crowd drifts away.",
      createdAt: "2026-03-15T14:44:00.000Z",
    },
  ],
  "garage-notes-12": [
    {
      id: "seed-13",
      parentId: null,
      author: "Apex Stories",
      body: "Chapters make this much easier to revisit than a generic embedded player, especially when the page also surfaces the discussion thread. It feels like the start of a whole weekly show world.",
      createdAt: "2026-03-15T10:30:00.000Z",
    },
    {
      id: "seed-14",
      parentId: "seed-13",
      author: "Collector Radio",
      body: "Would love this paired with a notes rail that previews the next episode and cached backlog. The comments could easily carry the post-recording story too.",
      createdAt: "2026-03-15T10:41:00.000Z",
    },
    {
      id: "seed-49",
      parentId: "seed-14",
      author: "Late Night Mic Check",
      body: "Like the producer realizing one mic stand is loose five minutes before recording, then patching the intro twice because the studio door kept rattling every time someone walked past.",
      createdAt: "2026-03-15T10:47:00.000Z",
    },
    {
      id: "seed-50",
      parentId: "seed-49",
      author: "Drive Time FM",
      body: "Yes, and the next reply can cover the wrap: everyone still talking in the lounge after the red light goes off, deciding which tangent becomes next week’s opener.",
      createdAt: "2026-03-15T10:53:00.000Z",
    },
    {
      id: "seed-51",
      parentId: "seed-50",
      author: "Piston Broadcast",
      body: "That’s how you make demo podcast comments feel real. Four levels deep gives enough room for setup, recording, post-show chatter, and a teaser for the next episode.",
      createdAt: "2026-03-15T10:59:00.000Z",
    },
  ],
  "collectors-line-07": [
    {
      id: "seed-15",
      parentId: null,
      author: "Club Registry",
      body: "This is a strong members-style podcast format. The flatter chrome makes it feel much more trustworthy and less gimmicky, like a real collector roundtable with history behind it.",
      createdAt: "2026-03-15T15:02:00.000Z",
    },
    {
      id: "seed-52",
      parentId: "seed-15",
      author: "Auction Lane",
      body: "I’d push the fiction a bit further: one panelist calling in late from an airport lounge while another is flipping through service records on the desk before the mic goes live.",
      createdAt: "2026-03-15T15:08:00.000Z",
    },
    {
      id: "seed-53",
      parentId: "seed-52",
      author: "V12 Ledger",
      body: "Then someone mentions the car they almost bought at Monaco last spring and the whole panel detours into whether provenance or mileage really moves the market on rarer specs.",
      createdAt: "2026-03-15T15:14:00.000Z",
    },
    {
      id: "seed-54",
      parentId: "seed-53",
      author: "Registry Desk",
      body: "That kind of invented specificity makes the route look mature. It feels less like placeholder copy and more like a believable members archive with people who know each other.",
      createdAt: "2026-03-15T15:20:00.000Z",
    },
    {
      id: "seed-55",
      parentId: "seed-54",
      author: "Collectors Signal",
      body: "Exactly. Keep it compact, keep it dense, and let every parent thread descend four levels so the page looks fully inhabited in a single screenshot.",
      createdAt: "2026-03-15T15:26:00.000Z",
    },
  ],
  "huayra-dawn-warmup": [
    {
      id: "seed-56",
      parentId: null,
      author: "Sunrise Spec",
      body: "This is exactly the kind of short that makes the feed feel alive. It sounds like the crew unlocked the garage before the paddock even woke up.",
      createdAt: "2026-03-15T06:14:00.000Z",
    },
    {
      id: "seed-57",
      parentId: "seed-56",
      author: "Carbon Mornings",
      body: "Right, and the first reply should mention the camera fogging for a second when the engine cover lifted. That tiny sunrise detail makes the whole clip believable.",
      createdAt: "2026-03-15T06:20:00.000Z",
    },
    {
      id: "seed-58",
      parentId: "seed-57",
      author: "Aero Walk",
      body: "Then carry it into the warm-up lap: orange light across the mirrors, one mechanic jogging the car out, and the host whispering because everyone else is still half-asleep.",
      createdAt: "2026-03-15T06:26:00.000Z",
    },
    {
      id: "seed-59",
      parentId: "seed-58",
      author: "Pit Exit Club",
      body: "Exactly. It turns the demo from a random short into an actual morning scene with setup, ignition, and that quiet moment before the first proper pull.",
      createdAt: "2026-03-15T06:32:00.000Z",
    },
    {
      id: "seed-60",
      parentId: "seed-59",
      author: "Gold Hour Garage",
      body: "Keep stacking those beats and the page feels full immediately — sunrise checklist, engine bark, rolling shot, then the whole team finally smiling once the keeper take is in.",
      createdAt: "2026-03-15T06:38:00.000Z",
    },
  ],
  "f40-midnight-pull": [
    {
      id: "seed-61",
      parentId: null,
      author: "Night Garage",
      body: "This one feels busy in the best way. The fluorescent reflections make it look like the crew stayed late just to get one clean midnight pull on record.",
      createdAt: "2026-03-15T23:04:00.000Z",
    },
    {
      id: "seed-62",
      parentId: "seed-61",
      author: "Rosso Lane",
      body: "And the comments should say that out loud: shutters half down, one light still buzzing over the bench, and everyone waiting for the turbo note to clear the alley.",
      createdAt: "2026-03-15T23:10:00.000Z",
    },
    {
      id: "seed-63",
      parentId: "seed-62",
      author: "Workshop After Dark",
      body: "Then add the made-up production scramble — someone waving a scooter out of frame, the camera op backing into a tool chest, and the host deciding the first take is still the best one.",
      createdAt: "2026-03-15T23:16:00.000Z",
    },
    {
      id: "seed-64",
      parentId: "seed-63",
      author: "Flat Plane Echo",
      body: "That’s what sells it. Four levels deep gives enough room for the whole mini story: late setup, exhaust pull, alley reverb, then the quiet cool-down while the shutter comes back down.",
      createdAt: "2026-03-15T23:22:00.000Z",
    },
    {
      id: "seed-65",
      parentId: "seed-64",
      author: "Launch Street",
      body: "Exactly — the UI stays compact and the thread does the heavy lifting. It feels like a busy channel, not a barely-seeded mockup.",
      createdAt: "2026-03-15T23:28:00.000Z",
    },
  ],
  "atelier-delivery-film": [
    {
      id: "seed-66",
      parentId: null,
      author: "Delivery Desk",
      body: "The long-form shell looks great when the story is this specific. A delivery-day film instantly makes the watch page feel like part of a deeper library.",
      createdAt: "2026-03-15T16:04:00.000Z",
    },
    {
      id: "seed-67",
      parentId: "seed-66",
      author: "Coachbuilt Notes",
      body: "Especially if the first reply mentions the paperwork table, the covered car in the corner, and the customer trying not to grin before the reveal shot starts rolling.",
      createdAt: "2026-03-15T16:10:00.000Z",
    },
    {
      id: "seed-68",
      parentId: "seed-67",
      author: "Detail Bay",
      body: "Then the next level becomes the walkaround itself — doors open, everyone leans in on the interior trim, and the host slows down because the atelier lead keeps dropping great anecdotes.",
      createdAt: "2026-03-15T16:16:00.000Z",
    },
    {
      id: "seed-69",
      parentId: "seed-68",
      author: "Delivery Ledger",
      body: "That makes the route feel full. You can almost picture the second camera grabbing B-roll of signatures and key handover while the main mic catches the reaction in real time.",
      createdAt: "2026-03-15T16:22:00.000Z",
    },
    {
      id: "seed-70",
      parentId: "seed-69",
      author: "Atelier Walkthrough",
      body: "Exactly — setup, reveal, inspection, handover, and the final quiet recap after the customer drives out. That’s the level of invented detail the demo needs everywhere.",
      createdAt: "2026-03-15T16:28:00.000Z",
    },
  ],
  "factory-radio-03": [
    {
      id: "seed-71",
      parentId: null,
      author: "Shop Floor FM",
      body: "Adding more episodes like this immediately fixes the thin-library feeling. It sounds like a real show you’d keep in rotation.",
      createdAt: "2026-03-15T08:16:00.000Z",
    },
    {
      id: "seed-72",
      parentId: "seed-71",
      author: "Bench Notes",
      body: "Totally. The comments should open with the workshop already awake: kettle on, torque notes on the table, and the producer asking who remembered to arm the backup recorder.",
      createdAt: "2026-03-15T08:22:00.000Z",
    },
    {
      id: "seed-73",
      parentId: "seed-72",
      author: "Factory Voices",
      body: "Then a follow-up about a guest arriving with brake dust still on their jacket because they came straight from the garage. That kind of made-up texture carries the whole library.",
      createdAt: "2026-03-15T08:28:00.000Z",
    },
    {
      id: "seed-74",
      parentId: "seed-73",
      author: "Assembly Radio",
      body: "Exactly. It becomes a believable episode thread instead of placeholder praise: open the shop, check the mics, record the segment, then hang around for the extra stories after cut.",
      createdAt: "2026-03-15T08:34:00.000Z",
    },
    {
      id: "seed-75",
      parentId: "seed-74",
      author: "Launch Desk Audio",
      body: "That’s the right density for the demo — four layers deep and enough adjacent episodes that the audio tab finally feels busy instead of empty.",
      createdAt: "2026-03-15T08:40:00.000Z",
    },
  ],
  "night-shift-21": [
    {
      id: "seed-76",
      parentId: null,
      author: "Edit Bay Late",
      body: "This is the sort of podcast tile that makes the page feel populated. You can imagine the hosts recording long after the shoot wrapped.",
      createdAt: "2026-03-15T21:03:00.000Z",
    },
    {
      id: "seed-77",
      parentId: "seed-76",
      author: "Render Queue",
      body: "The first reply should mention export bars crawling on a second monitor while somebody rewrites a sponsor tag and another person raids the vending machine for one last coffee.",
      createdAt: "2026-03-15T21:09:00.000Z",
    },
    {
      id: "seed-78",
      parentId: "seed-77",
      author: "Studio Graveyard Shift",
      body: "Then you get the good behind-the-scenes beat: they finish the main topic, keep talking off-script, and realize the best teaser for next week came after the formal outro.",
      createdAt: "2026-03-15T21:15:00.000Z",
    },
    {
      id: "seed-79",
      parentId: "seed-78",
      author: "Blue Light Lounge",
      body: "That’s why these extra episodes matter. They don’t just fill a slot; they make the whole library feel like an active, recurring operation with momentum.",
      createdAt: "2026-03-15T21:21:00.000Z",
    },
    {
      id: "seed-80",
      parentId: "seed-79",
      author: "After Hours Edit",
      body: "Exactly — keep the layout tight, keep the shelf full, and let the comments supply the late-night studio energy that makes everything feel busy.",
      createdAt: "2026-03-15T21:27:00.000Z",
    },
  ],
  "paddock-talk-04": [
    {
      id: "seed-81",
      parentId: null,
      author: "Trackside Audio",
      body: "This is a strong add for the audio tab. A track-weekend recap immediately makes the podcast side of the site feel more complete.",
      createdAt: "2026-03-15T17:06:00.000Z",
    },
    {
      id: "seed-82",
      parentId: "seed-81",
      author: "Pit Wall Mic",
      body: "First reply should mention the hosts recording with timing sheets spread out on the table and one of them still wearing a radio headset from the last session.",
      createdAt: "2026-03-15T17:12:00.000Z",
    },
    {
      id: "seed-83",
      parentId: "seed-82",
      author: "Warm Tire Notes",
      body: "Then comes the fun part: they replay the out-lap, argue over tire pressures, and laugh about the marshal who wandered through the background of the best clip all weekend.",
      createdAt: "2026-03-15T17:18:00.000Z",
    },
    {
      id: "seed-84",
      parentId: "seed-83",
      author: "Kerbside Radio",
      body: "That kind of detail makes the whole product feel occupied. It’s not just one glossy episode page anymore; it feels like a living paddock archive.",
      createdAt: "2026-03-15T17:24:00.000Z",
    },
    {
      id: "seed-85",
      parentId: "seed-84",
      author: "Weekend Stint",
      body: "Exactly. With four-plus episodes in the rail and four-deep replies, the audio pages finally look like somewhere fans actually hang out.",
      createdAt: "2026-03-15T17:30:00.000Z",
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
