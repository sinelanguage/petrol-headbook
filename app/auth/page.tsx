import Link from "next/link";

import { signInAction, signUpAction, socialSignInAction } from "@/app/auth/actions";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getCurrentSession } from "@/lib/auth";

const authExamples = [
  {
    title: "Daily drop channel",
    description: "For creators posting shorts every day and wanting a cleaner owned archive than TikTok or Instagram.",
  },
  {
    title: "Members club studio",
    description: "For long-form YouTubers who want discussion, podcasts, and gated workflows in the same minimal shell.",
  },
];

export default async function AuthPage({
  searchParams,
}: {
  searchParams?: Promise<{ message?: string }>;
}) {
  const session = await getCurrentSession();
  const params = await searchParams;

  return (
    <div className="min-h-screen bg-zinc-50">
      <SiteHeader session={session} />
      <main className="mx-auto flex w-full max-w-[1680px] flex-col gap-8 px-4 py-8 sm:px-6 lg:px-10">
        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_460px]">
          <Card>
            <CardHeader>
              <Badge className="w-fit">Authentication</Badge>
              <CardTitle className="mt-4 text-4xl">Creator and fan sign-in that matches the calmer product shell.</CardTitle>
              <CardDescription className="mt-2 max-w-4xl text-base">
                Email, password, and social sign-in continue to work with Supabase when configured, while demo mode keeps the app reviewable from a fresh clone.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4">
                <p className="font-medium text-zinc-900">Demo mode</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">Use any email and password to create a local session and inspect the creator board with seeded hypercar content.</p>
              </div>
              {params?.message ? <p className="rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800">{params.message}</p> : null}
              <div className="grid gap-4 md:grid-cols-2">
                {authExamples.map((example) => (
                  <div className="rounded-md border border-zinc-200 bg-white p-4" key={example.title}>
                    <p className="text-sm font-semibold text-zinc-950">{example.title}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{example.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <form action={socialSignInAction}>
                  <input name="provider" type="hidden" value="google" />
                  <Button type="submit" variant="outline">
                    Continue with Google
                  </Button>
                </form>
                <form action={socialSignInAction}>
                  <input name="provider" type="hidden" value="github" />
                  <Button type="submit" variant="outline">
                    Continue with GitHub
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sign in</CardTitle>
                <CardDescription>Open the creator dashboard and saved community features.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={signInAction} className="space-y-3">
                  <Input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
                  <Input autoComplete="current-password" minLength={6} name="password" placeholder="Password" required type="password" />
                  <Button className="w-full" type="submit">
                    Sign in
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Create account</CardTitle>
                <CardDescription>Register a new creator-owned instance user.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={signUpAction} className="space-y-3">
                  <Input autoComplete="name" name="name" placeholder="Display name" required />
                  <Input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
                  <Input autoComplete="new-password" minLength={6} name="password" placeholder="Password" required type="password" />
                  <Button className="w-full" type="submit">
                    Create account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <Link className="text-sm text-zinc-500 transition hover:text-zinc-900" href="/">
          ← Back to landing page
        </Link>
      </main>
    </div>
  );
}
