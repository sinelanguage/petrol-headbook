import Link from "next/link";
import { notFound } from "next/navigation";

import { MediaRailItem } from "@/components/media-preview-card";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VideoPlayer } from "@/components/video-player";
import { getCurrentSession } from "@/lib/auth";
import { getVideo, longFormContent, podcastEpisodes } from "@/lib/content";

export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getVideo(slug);
  const session = await getCurrentSession();

  if (!item?.streamUrl) {
    notFound();
  }

  const relatedVideos = longFormContent.filter((entry) => entry.slug !== item.slug).slice(0, 4);
  const relatedPodcast = podcastEpisodes[0];

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-[1680px] flex-col gap-6 px-4 py-5 sm:px-6 lg:px-10">
        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.18fr)_380px]">
          <Card>
            <CardHeader className="border-b border-zinc-200 pb-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <Badge>{item.eyebrow}</Badge>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950">{item.title}</h1>
                  <p className="mt-3 max-w-5xl text-base leading-7 text-zinc-600">{item.summary}</p>
                </div>
                <div className="flex gap-3">
                  <Link href={relatedPodcast.href}>
                    <Button variant="secondary">Related podcast</Button>
                  </Link>
                  <Link href={`/discussions/${item.slug}`}>
                    <Button variant="outline">Open discussion</Button>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 pt-5 md:grid-cols-3">
              {item.metrics.map((metric) => (
                <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4" key={metric.label}>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{metric.label}</p>
                  <p className="mt-2 text-xl font-semibold text-zinc-950">{metric.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next up</CardTitle>
              <CardDescription>Populate the watch experience with four more films plus cross-format handoff.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {relatedVideos.map((entry) => (
                <MediaRailItem item={entry} key={entry.slug} meta="Queued in watch rail" />
              ))}
              <MediaRailItem item={relatedPodcast} meta="Cross-promoted audio" />
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_380px]">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-black">
              <VideoPlayer src={item.streamUrl} />
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Publishing notes</CardTitle>
              <CardDescription>Large-format shells can stay calm and editorial without shadows or narrow max-widths.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-zinc-600">
              <p className="rounded-md border border-zinc-200 bg-zinc-50 p-4">This layout leaves room for chapters, sponsorship notes, related content, and comments while still feeling minimal.</p>
              <p className="rounded-md border border-zinc-200 bg-zinc-50 p-4">The right rail shows how creators can preload the next video and a related podcast without breaking the page rhythm.</p>
              <p className="rounded-md border border-zinc-200 bg-zinc-50 p-4">Using more screen real estate makes the shell feel closer to a professional creator dashboard than a template landing page.</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
