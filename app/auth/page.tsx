import Link from "next/link";

import { signInAction, signUpAction, socialSignInAction } from "@/app/auth/actions";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getCurrentSession } from "@/lib/auth";

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
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card>
            <CardHeader>
              <CardTitle>Creator and fan authentication</CardTitle>
              <CardDescription>
                Email/password and social sign-in work with Supabase when environment variables are present, and fall back to a
                local demo session when they are not.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-zinc-600">
              <p>
                This keeps the example fully functional in a fresh clone while preserving a path to production auth without
                reworking the UI.
              </p>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="font-medium text-zinc-900">Demo mode</p>
                <p className="mt-1 text-sm text-zinc-600">Use any email and password to create a local session and unlock the dashboard.</p>
              </div>
              {params?.message ? <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">{params.message}</p> : null}
              <div className="flex gap-3">
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
