import { notFound } from "next/navigation";

import { DiscussionThread } from "@/components/discussion-thread";
import { MediaRailItem } from "@/components/media-preview-card";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentSession } from "@/lib/auth";
import { allMedia, discussionSeeds, getDiscussionCards, getMedia } from "@/lib/content";

export default async function DiscussionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const session = await getCurrentSession();
  const content = getMedia(slug);

  if (!content) {
    notFound();
  }

  const comments = discussionSeeds[slug] ?? [];
  const relatedThreads = getDiscussionCards()
    .filter((entry) => entry.slug !== slug)
    .slice(0, 4);
  const linkedMedia = [content, ...allMedia.filter((entry) => entry.kind === content.kind && entry.slug !== slug)].slice(0, 4);

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-[1680px] flex-col gap-5 px-4 py-5 sm:px-6 lg:px-10">
        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.16fr)_380px]">
          <Card>
            <CardHeader className="space-y-1.5">
              <Badge className="w-fit">Community</Badge>
              <CardTitle className="mt-2 text-[1.75rem]">Discuss: {content.title}</CardTitle>
              <CardDescription>
                Threaded conversation now sits inside a denser, flatter shell that feels closer to a real issue tracker or members forum.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-3">
              <p className="rounded-md border border-zinc-200 bg-zinc-50 p-3 text-sm leading-6 text-zinc-600">Nested replies keep creator Q&amp;A coherent even as media pages fill out with more content and larger rails.</p>
              <p className="rounded-md border border-zinc-200 bg-zinc-50 p-3 text-sm leading-6 text-zinc-600">Live counts and adjacent thread cards make it easier to judge how this could scale into a busy members space.</p>
              <p className="rounded-md border border-zinc-200 bg-zinc-50 p-3 text-sm leading-6 text-zinc-600">The flatter surface lets the copy do the work instead of relying on elevation or oversized card chrome.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1.5">
              <CardTitle>Active threads</CardTitle>
              <CardDescription>More examples so the community route feels fully populated from the first screenshot.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2.5">
              {relatedThreads.map((entry) => (
                <MediaRailItem href={`/discussions/${entry.slug}`} item={entry} key={entry.slug} meta="Open thread" />
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_380px]">
          <DiscussionThread currentUser={session?.name ?? "Guest Driver"} seedComments={comments} slug={slug} />

          <Card>
            <CardHeader className="space-y-1.5">
              <CardTitle>Linked media</CardTitle>
              <CardDescription>Keep the thread anchored to the active media lane with a fuller related stack.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2.5">
              {linkedMedia.map((entry) => (
                <MediaRailItem item={entry} key={entry.slug} meta={`${comments.length} seeded replies`} />
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
