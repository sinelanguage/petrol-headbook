"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { clearDemoSession, setDemoSession } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function buildMessagePath(message: string) {
  return `/auth?message=${encodeURIComponent(message)}`;
}

function getName(email: string) {
  return email.split("@")[0].replace(/[._-]/g, " ");
}

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  if (!email || !password) {
    redirect(buildMessagePath("Email and password are required."));
  }

  const supabase = await createSupabaseServerClient();
  if (supabase) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      redirect(buildMessagePath(error.message));
    }
  } else {
    await setDemoSession({
      email,
      name: getName(email),
      provider: "password",
    });
  }

  redirect("/dashboard");
}

export async function signUpAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim() || getName(email);

  if (!email || !password) {
    redirect(buildMessagePath("Name, email, and password are required."));
  }

  const supabase = await createSupabaseServerClient();
  if (supabase) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      redirect(buildMessagePath(error.message));
    }
  } else {
    await setDemoSession({
      email,
      name,
      provider: "password",
    });
  }

  redirect("/dashboard");
}

export async function socialSignInAction(formData: FormData) {
  const provider = String(formData.get("provider") ?? "").trim();

  if (provider !== "google" && provider !== "github") {
    redirect(buildMessagePath("Unsupported provider."));
  }

  const supabase = await createSupabaseServerClient();
  if (supabase) {
    const headerStore = await headers();
    const origin = headerStore.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    if (error || !data.url) {
      redirect(buildMessagePath(error?.message ?? "Unable to start social login."));
    }

    redirect(data.url);
  }

  await setDemoSession({
    email: `${provider}@demo.local`,
    name: provider === "google" ? "Google Demo User" : "GitHub Demo User",
    provider,
  });

  redirect("/dashboard");
}

export async function signOutAction() {
  const supabase = await createSupabaseServerClient();

  if (supabase) {
    await supabase.auth.signOut();
  }

  await clearDemoSession();
  redirect("/");
}
