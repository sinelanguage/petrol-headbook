import { redirect } from "next/navigation";

import { DashboardManager } from "@/components/dashboard-manager";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
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
      <main className="mx-auto flex w-full max-w-[1680px] flex-col gap-8 px-4 py-8 sm:px-6 lg:px-10">
        <Card>
          <CardHeader className="border-b border-zinc-200 pb-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Badge>Creator operations</Badge>
                <CardTitle className="mt-4 text-4xl">Welcome back, {session.name}</CardTitle>
                <CardDescription className="mt-2 max-w-4xl text-base">
                  Manage uploads, seed richer content, and judge how the product feels when multiple shorts, films, podcasts, and discussions are flowing at once.
                </CardDescription>
              </div>
              <Badge className="w-fit bg-white">{session.source === "demo" ? "Demo auth" : "Supabase auth"}</Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 pt-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Audience ownership</p>
              <p className="mt-2 text-xl font-semibold text-zinc-950">Direct destination</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">Everything here can live on the creator&apos;s own domain with Docker and optional Supabase services.</p>
            </div>
            <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Surface density</p>
              <p className="mt-2 text-xl font-semibold text-zinc-950">Board + rails</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">The dashboard now previews how a fuller creator workflow can look without decorative cards or shadows.</p>
            </div>
            <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Loaded batch</p>
              <p className="mt-2 text-xl font-semibold text-zinc-950">6 active drops</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">Enough seeded content to judge queue depth, board columns, and future archive pagination.</p>
            </div>
            <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Media mix</p>
              <p className="mt-2 text-xl font-semibold text-zinc-950">4 formats</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">Short-form clips, long-form films, podcasts, and discussion posts share one minimal operations shell.</p>
            </div>
          </CardContent>
        </Card>

        <DashboardManager />
      </main>
    </div>
  );
}
