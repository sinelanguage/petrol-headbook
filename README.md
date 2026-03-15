# petrol-headbook

A minimal creator-owned social platform demo built with Next.js, TypeScript, Tailwind, and default shadcn-style components.

## Included demo features

- Landing page with featured short-form video, long-form video, and podcast sections
- HLS playback for short-form and long-form pages using `hls.js`
- Podcast page with progress bar and chapter jumps
- Nested discussion threads with live cross-tab updates and presence-style counts
- Demo auth flow with optional Supabase Auth wiring for email and social sign-in
- Creator dashboard for managing example content entries
- PWA manifest, service worker registration, and offline fallback page
- Dockerfile and Docker Compose configuration for self-hosting

## Route screenshots

All screenshots below were refreshed after the system UI font update and captured at a 16:9 aspect ratio (1600×900).

### Landing page (`/`)

![Landing page screenshot](docs/screenshots/home-16x9.jpeg)

### Auth (`/auth`)

![Auth route screenshot](docs/screenshots/auth-16x9.jpeg)

### Dashboard (`/dashboard`)

![Dashboard route screenshot](docs/screenshots/dashboard-16x9.jpeg)

### Discussion thread (`/discussions/launch-day-brief`)

![Discussion route screenshot](docs/screenshots/discussions-16x9.jpeg)

### Podcast (`/podcasts/garage-notes-12`)

![Podcast route screenshot](docs/screenshots/podcast-16x9.jpeg)

### Short-form video (`/shorts/launch-day-brief`)

![Short-form route screenshot](docs/screenshots/shorts-16x9.jpeg)

### Long-form video (`/videos/garage-tour-cut`)

![Long-form route screenshot](docs/screenshots/videos-16x9.jpeg)

### Offline (`/offline`)

![Offline route screenshot](docs/screenshots/offline-16x9.jpeg)

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Optional Supabase configuration

Set these environment variables to enable Supabase Auth instead of the built-in demo session fallback:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Without those variables the app still works locally using demo auth so the platform can be evaluated from a fresh clone.

## Docker

```bash
docker compose up --build
```
