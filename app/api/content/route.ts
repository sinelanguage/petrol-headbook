import { NextResponse } from "next/server";

import { longFormContent, podcastEpisodes, shortFormContent } from "@/lib/content";

export function GET() {
  return NextResponse.json({
    featured: {
      shorts: shortFormContent,
      videos: longFormContent,
      podcasts: podcastEpisodes,
    },
  });
}
