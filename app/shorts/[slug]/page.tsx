import Link from "next/link";
import { notFound } from "next/navigation";

import { MediaRailItem } from "@/components/media-preview-card";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VideoPlayer } from "@/components/video-player";
import { getCurrentSession } from "@/lib/auth";
import { getShort, shortFormContent } from "@/lib/content";

export default async function ShortPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getShort(slug);
  const session = await getCurrentSession();

  if (!item?.streamUrl) {
    notFound();
  }

  const queue = shortFormContent.filter((entry) => entry.slug !== item.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-[1680px] flex-col gap-8 px-4 py-8 sm:px-6 lg:px-10">
        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_400px]">
          <Card>
            <CardHeader className="border-b border-zinc-200 pb-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <Badge>{item.eyebrow}</Badge>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950">{item.title}</h1>
                  <p className="mt-3 max-w-4xl text-base leading-7 text-zinc-600">{item.summary}</p>
                </div>
                <Link href={`/discussions/${item.slug}`}>
                  <Button variant="outline">Open discussion</Button>
                </Link>
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
              <CardTitle>Autoplay queue</CardTitle>
              <CardDescription>Additional shorts make the route feel like a real feed instead of a dead-end page.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {queue.map((entry) => (
                <MediaRailItem item={entry} key={entry.slug} meta="Preloaded next" />
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 xl:grid-cols-[440px_minmax(0,1fr)]">
          <Card className="overflow-hidden bg-[#0b0f19]">
            <div className="mx-auto w-full max-w-sm p-6">
              <div className="rounded-[28px] border border-white/10 bg-black p-3">
                <div className="aspect-[9/16] overflow-hidden rounded-[22px] bg-black">
                  <VideoPlayer muted src={item.streamUrl} />
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Why this page feels fuller</CardTitle>
                <CardDescription>Designed to judge scroll continuation, cached next cards, and creator prompts on large screens.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <p className="rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-600">
                  The portrait player stays focused, while the surrounding shell uses the remaining width for queue context and KPIs.
                </p>
                <p className="rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-600">
                  Full-color thumbnail panels help influencers judge how sponsor-safe brand surfaces will feel in a richer feed.
                </p>
                <p className="rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-600">
                  The next-up rail previews how endless scroll and route preloading could keep viewers inside the owned platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tags and publishing context</CardTitle>
                <CardDescription>{item.creator} · {item.published}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge className="bg-white" key={tag}>
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
