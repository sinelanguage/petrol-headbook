import Link from "next/link";

import { signOutAction } from "@/app/auth/actions";
import { Button } from "@/components/ui/button";
import type { SessionUser } from "@/lib/auth";
import { creatorProfile } from "@/lib/content";

const links = [
  { href: "/shorts/launch-day-brief", label: "Shorts" },
  { href: "/videos/garage-tour-cut", label: "Videos" },
  { href: "/podcasts/garage-notes-12", label: "Podcast" },
  { href: "/discussions/launch-day-brief", label: "Discussions" },
];

export function SiteHeader({ session }: { session: SessionUser | null }) {
  return (
    <header className="border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-900">
            {creatorProfile.logo}
          </div>
          <div>
            <Link className="text-sm font-semibold text-zinc-950" href="/">
              {creatorProfile.name}
            </Link>
            <p className="text-xs text-zinc-500">Creator-owned publishing stack</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          {links.map((link) => (
            <Link className="transition hover:text-zinc-950" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {session ? (
            <>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-zinc-900">{session.name}</p>
                <p className="text-xs text-zinc-500">{session.source === "demo" ? "Demo auth" : "Supabase auth"}</p>
              </div>
              <Link href="/dashboard">
                <Button size="sm" variant="outline">
                  Dashboard
                </Button>
              </Link>
              <form action={signOutAction}>
                <Button size="sm" variant="ghost" type="submit">
                  Sign out
                </Button>
              </form>
            </>
          ) : (
            <Link href="/auth">
              <Button size="sm">Sign in</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
