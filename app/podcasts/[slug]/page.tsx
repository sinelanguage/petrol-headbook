import Link from "next/link";
import { notFound } from "next/navigation";

import { MediaRailItem } from "@/components/media-preview-card";
import { PodcastPlayer } from "@/components/podcast-player";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentSession } from "@/lib/auth";
import { getPodcast, podcastEpisodes } from "@/lib/content";

export default async function PodcastPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const episode = getPodcast(slug);
  const session = await getCurrentSession();

  if (!episode?.audioUrl) {
    notFound();
  }

  const relatedEpisodes = podcastEpisodes.filter((entry) => entry.slug !== episode.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-[1680px] flex-col gap-6 px-4 py-5 sm:px-6 lg:px-10">
        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.18fr)_380px]">
          <Card>
            <CardHeader className="border-b border-zinc-200 pb-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <Badge>{episode.eyebrow}</Badge>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950">{episode.title}</h1>
                  <p className="mt-3 max-w-5xl text-base leading-7 text-zinc-600">{episode.summary}</p>
                </div>
                <Link href={`/discussions/${episode.slug}`}>
                  <Button variant="outline">Episode discussion</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 pt-5 md:grid-cols-3">
              {episode.metrics.map((metric) => (
                <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4" key={metric.label}>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{metric.label}</p>
                  <p className="mt-2 text-xl font-semibold text-zinc-950">{metric.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Library rail</CardTitle>
              <CardDescription>Four adjacent episodes make the route feel like a real audio library rather than a one-off page.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {relatedEpisodes.map((entry) => (
                <MediaRailItem item={entry} key={entry.slug} meta="Cached next episode" />
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_380px]">
          <PodcastPlayer audioUrl={episode.audioUrl} chapters={episode.chapters} />

          <Card>
            <CardHeader>
              <CardTitle>Publishing context</CardTitle>
              <CardDescription>{episode.creator} · {episode.published}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-zinc-600">
              <p className="rounded-md border border-zinc-200 bg-zinc-50 p-4">Audio pages now have enough adjacent content to judge backlog browsing, chapter interactions, and future member-only rails.</p>
              <p className="rounded-md border border-zinc-200 bg-zinc-50 p-4">This flatter shell reads closer to a tool than a marketing site, which better suits creator teams managing recurring shows.</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {episode.tags.map((tag) => (
                  <Badge className="bg-white" key={tag}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
