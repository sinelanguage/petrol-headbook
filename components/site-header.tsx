"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { signOutAction } from "@/app/auth/actions";
import { Button } from "@/components/ui/button";
import type { SessionUser } from "@/lib/auth";
import { creatorProfile } from "@/lib/content";

const links = [
  { href: "/shorts/launch-day-brief", label: "Shorts", match: "/shorts" },
  { href: "/videos/garage-tour-cut", label: "Videos", match: "/videos" },
  { href: "/podcasts/garage-notes-12", label: "Podcast", match: "/podcasts" },
  { href: "/discussions/launch-day-brief", label: "Discussions", match: "/discussions" },
];

export function SiteHeader({ session }: { session: SessionUser | null }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/96 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1680px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <div className="flex min-w-0 items-center gap-6">
          <Link className="flex items-center gap-3 py-4" href="/">
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-300 bg-zinc-50 text-sm font-semibold text-zinc-950">
              {creatorProfile.logo}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-zinc-950">{creatorProfile.name}</p>
              <p className="truncate text-xs text-zinc-500">Creator-owned publishing stack</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.match);

              return (
                <Link
                  className={`border-b-2 px-3 py-5 text-sm font-medium transition-colors ${
                    active
                      ? "border-zinc-900 text-zinc-950"
                      : "border-transparent text-zinc-500 hover:text-zinc-900"
                  }`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2 py-3">
          {session ? (
            <>
              <div className="hidden border-r border-zinc-200 pr-4 text-right sm:block">
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
