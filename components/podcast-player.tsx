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

    audio.addEventListener("timeupdate", sync);
    audio.addEventListener("loadedmetadata", sync);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", sync);
      audio.removeEventListener("loadedmetadata", sync);
      audio.removeEventListener("ended", () => setIsPlaying(false));
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
    <div className="space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <audio preload="metadata" ref={audioRef} src={audioUrl} />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-500">Podcast playback</p>
          <p className="text-xl font-semibold text-zinc-950">Progress, chapters, and range-request friendly audio</p>
        </div>
        <Button onClick={togglePlayback}>{isPlaying ? "Pause" : "Play"}</Button>
      </div>

      <div className="space-y-2">
        <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
          <div className="h-full rounded-full bg-zinc-900" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <input
          aria-label="Seek podcast"
          className="w-full"
          max={duration || 0}
          min={0}
          onChange={(event) => seek(Number(event.target.value))}
          step={1}
          type="range"
          value={currentTime}
        />
      </div>

      <div className="grid gap-3">
        {chapters.map((chapter) => (
          <button
            className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 text-left transition hover:border-zinc-300 hover:bg-zinc-50"
            key={chapter.title}
            onClick={() => seek(chapter.time)}
            type="button"
          >
            <span className="font-medium text-zinc-900">{chapter.title}</span>
            <span className="text-sm text-zinc-500">{formatTime(chapter.time)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
