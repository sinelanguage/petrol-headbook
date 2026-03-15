import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Creator Garage",
    short_name: "CreatorGarage",
    description: "Creator-owned social platform demo for video, podcasts, and discussions.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#111827",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
