import { redirect } from "next/navigation";

import { DashboardManager } from "@/components/dashboard-manager";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentSession } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/auth?message=Sign%20in%20to%20open%20the%20dashboard.");
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Welcome back, {session.name}</CardTitle>
            <CardDescription>
              Manage uploads, queue stories, and keep your creator-owned instance stocked with video, audio, and discussion posts.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm text-zinc-600 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="font-medium text-zinc-950">Audience ownership</p>
              <p className="mt-2">Everything here is deployable on your own domain with Docker and optional Supabase services.</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="font-medium text-zinc-950">Media mix</p>
              <p className="mt-2">Short-form clips, long-form films, podcasts, and threaded discussions share one editorial system.</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="font-medium text-zinc-950">Auth source</p>
              <p className="mt-2">Currently signed in via {session.source === "demo" ? "local demo auth" : "Supabase auth"}.</p>
            </div>
          </CardContent>
        </Card>

        <DashboardManager />
      </main>
    </div>
  );
}
