"use client";

import Hls from "hls.js";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export function VideoPlayer({
  src,
  className,
  muted = false,
}: {
  src: string;
  className?: string;
  muted?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => {
        hls.destroy();
      };
    }

    video.src = src;
  }, [src]);

  return (
    <video
      className={cn("h-full w-full rounded-[inherit] bg-black object-cover", className)}
      controls
      muted={muted}
      playsInline
      ref={videoRef}
    />
  );
}
