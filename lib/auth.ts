import { cookies } from "next/headers";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export const demoSessionCookieName = "petrol-headbook-demo-session";

export type SessionUser = {
  name: string;
  email: string;
  provider: string;
  source: "demo" | "supabase";
};

function safeDecode(value: string) {
  try {
    return JSON.parse(Buffer.from(value, "base64url").toString("utf8")) as SessionUser;
  } catch {
    return null;
  }
}

export async function getCurrentSession() {
  const supabase = await createSupabaseServerClient();
  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user?.email) {
      return {
        name: user.user_metadata.full_name ?? user.email.split("@")[0],
        email: user.email,
        provider: user.app_metadata.provider ?? "email",
        source: "supabase" as const,
      } satisfies SessionUser;
    }
  }

  const cookieStore = await cookies();
  const value = cookieStore.get(demoSessionCookieName)?.value;

  if (!value) {
    return null;
  }

  return safeDecode(value);
}

export async function setDemoSession({ email, name, provider }: Omit<SessionUser, "source">) {
  const cookieStore = await cookies();
  const session: SessionUser = {
    email,
    name,
    provider,
    source: "demo",
  };

  cookieStore.set(demoSessionCookieName, Buffer.from(JSON.stringify(session)).toString("base64url"), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearDemoSession() {
  const cookieStore = await cookies();
  cookieStore.delete(demoSessionCookieName);
}
