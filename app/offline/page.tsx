import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="max-w-md rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-medium text-zinc-500">Offline mode</p>
        <h1 className="mt-3 text-2xl font-semibold text-zinc-950">You&apos;re offline, but the app shell is still available.</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Reconnect to continue streaming video or audio. Installed users can still reopen the cached landing experience and dashboard shell.
        </p>
        <Link className="mt-6 inline-flex" href="/">
          <Button>Back home</Button>
        </Link>
      </div>
    </main>
  );
}
