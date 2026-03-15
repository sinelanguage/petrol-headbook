import Link from "next/link";

import { MediaPreviewCard } from "@/components/media-preview-card";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentSession } from "@/lib/auth";
import {
  creatorProfile,
  getDiscussionCards,
  longFormContent,
  platformHighlights,
  podcastEpisodes,
  shortFormContent,
} from "@/lib/content";

function ContentGrid({
  title,
  description,
  note,
  items,
}: {
  title: string;
  description: string;
  note: string;
  items: ReturnType<typeof getDiscussionCards> | typeof shortFormContent;
}) {
  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 border-b border-zinc-200 pb-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
          <p className="mt-1 text-sm text-zinc-600">{description}</p>
        </div>
        <Badge className="w-fit bg-white">{note}</Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
        {items.map((item) => (
          <MediaPreviewCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}

export default async function Home() {
  const session = await getCurrentSession();
  const discussionCards = getDiscussionCards().slice(0, 4);

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-[1680px] flex-col gap-12 px-4 py-8 sm:px-6 lg:px-10">
        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_420px]">
          <Card>
            <CardHeader className="space-y-5 border-b border-zinc-200 pb-5">
              <Badge className="w-fit bg-white">Creator-owned platform demo</Badge>
              <div className="space-y-4">
                <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl xl:text-6xl">
                  Elegant, flat, full-width publishing for hypercar and supercar creators who want to own the audience relationship.
                </h1>
                <p className="max-w-4xl text-base leading-8 text-zinc-600 sm:text-lg">
                  {creatorProfile.tagline} The layout is intentionally sharper and calmer—more like GitHub or Jira than a glossy
                  social app—so creators can judge real content density, queue states, and next-up rails without decorative shadow.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/shorts/launch-day-brief">
                  <Button size="lg">Open short-form feed</Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline">
                    Open creator board
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 pt-5 md:grid-cols-3">
              <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Loaded on screen</p>
                <p className="mt-2 text-2xl font-semibold text-zinc-950">14 entries</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">Shorts, videos, podcasts, and discussion routes all show richer seeded states immediately.</p>
              </div>
              <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Prefetched next batch</p>
                <p className="mt-2 text-2xl font-semibold text-zinc-950">10 entries</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">The shell now previews how pagination, preload rails, and infinite-style continuation could feel.</p>
              </div>
              <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Surface style</p>
                <p className="mt-2 text-2xl font-semibold text-zinc-950">Zero shadow</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">Hierarchy comes from spacing, borders, typography, and color blocks instead of elevation.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What the shell is proving</CardTitle>
              <CardDescription>Enough populated content to judge layout density, hierarchy, and future lazy-loading behavior.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {platformHighlights.map((item) => (
                <div className="flex gap-3 rounded-md border border-zinc-200 bg-zinc-50 p-3" key={item}>
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                  <p className="text-sm leading-6 text-zinc-600">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <ContentGrid
          description="Portrait-first delivery with vivid artwork, retention stats, and a next-batch mental model."
          items={shortFormContent}
          note="Page 1 loaded · 4 clips live"
          title="Short-form feed"
        />
        <ContentGrid
          description="Long-form films use the full screen width while leaving room for related rails, notes, and discussion routing."
          items={longFormContent}
          note="2 more videos prewarmed"
          title="Long-form features"
        />
        <ContentGrid
          description="Podcast pages now feel like a proper library instead of a single isolated embed."
          items={podcastEpisodes}
          note="2 episodes visible"
          title="Podcast episodes"
        />
        <ContentGrid
          description="Thread entry cards show how discussion can sit alongside rich media without feeling cluttered."
          items={discussionCards}
          note="Live threads · flat board style"
          title="Discussion feed"
        />

        <section className="grid gap-6 xl:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Feed behavior</CardTitle>
              <CardDescription>Design cues for pagination, endless scroll, cache reuse, and route preloading without building a heavy data layer yet.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
                <p className="font-semibold text-zinc-950">Loaded batch</p>
                <p className="mt-2 leading-6">The first visible cards stay dense and readable across large monitors with no decorative chrome.</p>
              </div>
              <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
                <p className="font-semibold text-zinc-950">Prefetched next</p>
                <p className="mt-2 leading-6">Every page now exposes enough adjacent content to visualize lazy-loading and continuation states.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Run locally</CardTitle>
              <CardDescription>Same lightweight stack, just with fuller demo content and a much sharper surface treatment.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm text-zinc-700">
                npm install
                <br />
                npm run dev
                <br />
                docker compose up --build
              </div>
              <p className="text-sm leading-6 text-zinc-600">
                Swap the seeded content for real creator uploads later without reworking the route shells, rails, or dashboard flow.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
