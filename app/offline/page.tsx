import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-lg border border-zinc-200 bg-white p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">Offline mode</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950">You&apos;re offline, but the shell still feels complete.</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
            Reconnect to continue streaming video or audio. Installed users can still reopen the cached landing experience, browse the creator dashboard shell, and understand the product without broken chrome.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/">
              <Button>Back home</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">Open dashboard shell</Button>
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-5">
          <p className="text-sm font-semibold text-zinc-950">Cached surfaces</p>
          <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-600">
            <p className="font-medium text-zinc-950">Landing experience</p>
            <p className="mt-2">Hero copy, route overview, and seeded media rails can still render from the app shell.</p>
          </div>
          <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-600">
            <p className="font-medium text-zinc-950">Creator dashboard</p>
            <p className="mt-2">Board layout, queue states, and locally saved demo entries continue to communicate the product direction offline.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
