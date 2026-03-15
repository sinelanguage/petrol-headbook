"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import type { Chapter } from "@/lib/content";

function formatTime(value: number) {
  if (!Number.isFinite(value)) {
    return "00:00";
  }

  const minutes = Math.floor(value / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export function PodcastPlayer({ audioUrl, chapters }: { audioUrl: string; chapters: Chapter[] }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const sync = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", sync);
    audio.addEventListener("loadedmetadata", sync);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", sync);
      audio.removeEventListener("loadedmetadata", sync);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const progress = useMemo(() => {
    if (!duration) {
      return 0;
    }

    return Math.min((currentTime / duration) * 100, 100);
  }, [currentTime, duration]);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  }

  function seek(time: number) {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.currentTime = time;
    setCurrentTime(time);
  }

  return (
    <div className="rounded-lg border border-zinc-200 bg-white">
      <audio preload="metadata" ref={audioRef} src={audioUrl} />
      <div className="border-b border-zinc-200 px-5 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">Podcast playback</p>
            <p className="mt-1 text-2xl font-semibold text-zinc-950">Progress, chapters, and direct audience handoff</p>
          </div>
          <Button onClick={togglePlayback}>{isPlaying ? "Pause" : "Play"}</Button>
        </div>
      </div>

      <div className="space-y-5 p-5">
        <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4">
          <div className="h-2 overflow-hidden rounded-full bg-zinc-200">
            <div className="h-full rounded-full bg-zinc-900" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <input
            aria-label="Seek podcast"
            className="mt-3 w-full accent-zinc-900"
            max={duration || 0}
            min={0}
            onChange={(event) => seek(Number(event.target.value))}
            step={1}
            type="range"
            value={currentTime}
          />
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {chapters.map((chapter) => (
            <button
              className="flex items-center justify-between rounded-md border border-zinc-200 bg-white px-4 py-3 text-left transition-colors hover:bg-zinc-50"
              key={chapter.title}
              onClick={() => seek(chapter.time)}
              type="button"
            >
              <div>
                <p className="text-sm font-semibold text-zinc-950">{chapter.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">Jump to chapter</p>
              </div>
              <span className="text-sm text-zinc-500">{formatTime(chapter.time)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
