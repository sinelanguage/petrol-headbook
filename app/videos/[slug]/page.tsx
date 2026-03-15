import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VideoPlayer } from "@/components/video-player";
import { getCurrentSession } from "@/lib/auth";
import { getVideo } from "@/lib/content";

export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getVideo(slug);
  const session = await getCurrentSession();

  if (!item?.streamUrl) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge>{item.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">{item.title}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600">{item.summary}</p>
          </div>
          <div className="flex gap-3">
            <Link href="/podcasts/garage-notes-12">
              <Button variant="secondary">Related podcast</Button>
            </Link>
            <Link href={`/discussions/${item.slug}`}>
              <Button variant="outline">Open discussion</Button>
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-black shadow-lg">
          <div className="aspect-video">
            <VideoPlayer src={item.streamUrl} />
          </div>
        </div>

        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <CardHeader>
              <CardTitle>Long-form publishing</CardTitle>
              <CardDescription>Structured presentation for reviews, launches, road trips, and garage stories.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                This layout is intentionally spare so creators can foreground the content itself while preserving room for notes,
                sponsorship disclosures, chapters, and discussion context.
              </p>
              <p>
                Swapping in managed video origins, storage, and recommendation layers can happen without reworking the page shell.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Companion actions</CardTitle>
              <CardDescription>Guide the audience into the next owned touchpoint instead of shipping them back to third-party feeds.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-zinc-600">
              <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">Pair the film with a podcast recap, chapter-based notes, and a live discussion page.</p>
              <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">Creators can steer fans toward sign-in, install prompts, and recurring direct traffic.</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
