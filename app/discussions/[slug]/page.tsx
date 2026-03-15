import { notFound } from "next/navigation";

import { DiscussionThread } from "@/components/discussion-thread";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentSession } from "@/lib/auth";
import { discussionSeeds, getPodcast, getShort, getVideo } from "@/lib/content";

export default async function DiscussionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const session = await getCurrentSession();
  const content = getShort(slug) ?? getVideo(slug) ?? getPodcast(slug);

  if (!content) {
    notFound();
  }

  const comments = discussionSeeds[slug] ?? [];

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <Badge className="w-fit">Community</Badge>
            <CardTitle className="mt-4">Discuss: {content.title}</CardTitle>
            <CardDescription>
              Threaded conversation stays close to the creator&apos;s content, with cross-tab updates so new replies feel immediate.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-zinc-600 md:grid-cols-3">
            <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">Nested replies help creators host deeper Q&amp;A without losing the thread.</p>
            <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">Presence-style counts show when other fans are active, giving the page live energy.</p>
            <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">Swap BroadcastChannel for Supabase Realtime when you wire a shared backend.</p>
          </CardContent>
        </Card>

        <DiscussionThread currentUser={session?.name ?? "Guest Driver"} seedComments={comments} slug={slug} />
      </main>
    </div>
  );
}
