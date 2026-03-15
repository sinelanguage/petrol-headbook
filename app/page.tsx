import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentSession } from "@/lib/auth";
import { creatorProfile, longFormContent, platformHighlights, podcastEpisodes, shortFormContent } from "@/lib/content";

function ContentGrid({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: typeof shortFormContent;
}) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
          <p className="text-sm text-zinc-600">{description}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link href={item.href} key={item.slug}>
            <Card className="h-full transition hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader>
                <Badge className="w-fit">{item.eyebrow}</Badge>
                <CardTitle className="mt-3">{item.title}</CardTitle>
                <CardDescription>{item.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-zinc-500">
                  <span>{item.duration}</span>
                  <span>Open experience</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default async function Home() {
  const session = await getCurrentSession();

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="space-y-6">
            <Badge>Creator-owned platform demo</Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                A clean, installable social platform for creators who want to own their audience.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                {creatorProfile.tagline} This example keeps the UI generic and content-first while showing short-form video,
                long-form playback, podcast listening, live discussion, and creator-side management in one stack.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/shorts/launch-day-brief">
                <Button size="lg">Open featured short</Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline">
                  Creator dashboard
                </Button>
              </Link>
            </div>
          </div>

          <Card className="border-dashed bg-zinc-50">
            <CardHeader>
              <CardTitle>What this demo ships</CardTitle>
              <CardDescription>Focused on the eight deliverables from the product brief.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-zinc-600">
              {platformHighlights.map((item) => (
                <div className="flex gap-3" key={item}>
                  <span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" />
                  <p>{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <ContentGrid description="Portrait-first HLS playback for quick reactions and social clips." items={shortFormContent} title="Short-form feed" />
        <ContentGrid description="Landscape playback with room for notes, chapters, and discussion hand-off." items={longFormContent} title="Long-form features" />
        <ContentGrid description="Podcast listening with progress and chapter navigation." items={podcastEpisodes} title="Podcast episodes" />

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Discussion threads</CardTitle>
              <CardDescription>Nested comments sync across tabs, creating a lightweight real-time community layer.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-zinc-600">
                The dedicated discussion pages keep conversation close to the media, with optional Supabase auth for creator
                access and demo-mode persistence for instant local evaluation.
              </p>
              <Link href="/discussions/launch-day-brief">
                <Button variant="secondary">Open discussion demo</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>PWA + self-hosting ready</CardTitle>
              <CardDescription>Manifest, service worker generation, Docker packaging, and a simple offline route are wired in.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                Install the app from your browser, run it with Docker Compose, and swap the demo auth/data layers for your own
                Supabase project when you are ready to go beyond the seeded showcase.
              </p>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs text-zinc-700">
                npm install<br />npm run dev<br />docker compose up --build
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
