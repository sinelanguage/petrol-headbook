import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VideoPlayer } from "@/components/video-player";
import { getCurrentSession } from "@/lib/auth";
import { getShort } from "@/lib/content";

export default async function ShortPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getShort(slug);
  const session = await getCurrentSession();

  if (!item?.streamUrl) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge>{item.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">{item.title}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">{item.summary}</p>
          </div>
          <Link href={`/discussions/${item.slug}`}>
            <Button variant="outline">Open discussion</Button>
          </Link>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-zinc-200 bg-black p-3 shadow-xl">
          <div className="aspect-[9/16] overflow-hidden rounded-[1.6rem] bg-black">
            <VideoPlayer muted src={item.streamUrl} />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Short-form delivery</CardTitle>
            <CardDescription>Portrait ratio, adaptive streaming, and a lightweight shell tuned for mobile-first viewing.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-zinc-600 sm:grid-cols-3">
            <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">HLS playback loads through hls.js with native fallback when the browser can play it directly.</p>
            <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">The page keeps controls simple so it can translate to a PWA shell without extra theming.</p>
            <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">Discussion stays one click away so the clip can feed community conversation on the creator&apos;s domain.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
