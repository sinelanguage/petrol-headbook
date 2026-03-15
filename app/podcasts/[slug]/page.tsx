import Link from "next/link";
import { notFound } from "next/navigation";

import { PodcastPlayer } from "@/components/podcast-player";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentSession } from "@/lib/auth";
import { getPodcast } from "@/lib/content";

export default async function PodcastPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const episode = getPodcast(slug);
  const session = await getCurrentSession();

  if (!episode?.audioUrl) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge>{episode.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">{episode.title}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">{episode.summary}</p>
          </div>
          <Link href={`/discussions/${episode.slug}`}>
            <Button variant="outline">Episode discussion</Button>
          </Link>
        </div>

        <PodcastPlayer audioUrl={episode.audioUrl} chapters={episode.chapters} />

        <Card>
          <CardHeader>
            <CardTitle>Podcast publishing</CardTitle>
            <CardDescription>Minimal controls with enough structure for repeat listening and chapter-aware navigation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-zinc-600">
            <p>Audio is streamed over a standard URL so creators can back it with object storage or a CDN that supports range requests.</p>
            <p>Pairing the episode with direct sign-in and discussion hooks gives creators stronger audience retention than a generic RSS-only experience.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
