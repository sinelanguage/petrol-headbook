"use client";

import { useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type DraftAsset = {
  id: string;
  title: string;
  format: string;
  description: string;
  status: "Draft" | "Queued" | "Published";
  owner: string;
  eta: string;
  channel: string;
  artwork: string;
};

const storageKey = "petrol-headbook-dashboard-assets";

const formatThemes = {
  "Short-form video": {
    channel: "Short feed",
    artwork: "linear-gradient(135deg, #111827 0%, #991b1b 40%, #ef4444 100%)",
  },
  "Long-form video": {
    channel: "Watch tab",
    artwork: "linear-gradient(135deg, #111827 0%, #312e81 40%, #7c3aed 100%)",
  },
  Podcast: {
    channel: "Audio tab",
    artwork: "linear-gradient(135deg, #111827 0%, #1e3a8a 42%, #60a5fa 100%)",
  },
  "Discussion post": {
    channel: "Community",
    artwork: "linear-gradient(135deg, #111827 0%, #14532d 45%, #84cc16 100%)",
  },
} satisfies Record<string, { channel: string; artwork: string }>;

const defaultAssets: DraftAsset[] = [
  {
    id: "asset-1",
    title: "SF90 XX launch stack",
    format: "Short-form video",
    description: "Four vertical cuts approved for homepage rail, push alert, and members recap.",
    status: "Queued",
    owner: "Launch Desk",
    eta: "Today · 18:00",
    channel: "Short feed",
    artwork: formatThemes["Short-form video"].artwork,
  },
  {
    id: "asset-2",
    title: "765LT ownership debrief",
    format: "Long-form video",
    description: "Sponsor markers and chapter notes staged for the next 24-hour release window.",
    status: "Queued",
    owner: "Northline Drive",
    eta: "Tomorrow · 09:30",
    channel: "Watch tab",
    artwork: formatThemes["Long-form video"].artwork,
  },
  {
    id: "asset-3",
    title: "Collectors line #07",
    format: "Podcast",
    description: "Chapters, art, and outbound mail hook approved for publication.",
    status: "Published",
    owner: "Audio Team",
    eta: "Live now",
    channel: "Audio tab",
    artwork: formatThemes.Podcast.artwork,
  },
  {
    id: "asset-4",
    title: "Tourbillon first look Q&A",
    format: "Discussion post",
    description: "Pinned prompt, moderation notes, and recap links ready for members.",
    status: "Published",
    owner: "Community Lead",
    eta: "Live now",
    channel: "Community",
    artwork: formatThemes["Discussion post"].artwork,
  },
  {
    id: "asset-5",
    title: "Revuelto road film assembly",
    format: "Long-form video",
    description: "Still waiting on thumbnail copy, end-screen exports, and route map notes.",
    status: "Draft",
    owner: "Midnight Autobahn",
    eta: "Needs review",
    channel: "Watch tab",
    artwork: "linear-gradient(135deg, #111827 0%, #0f766e 42%, #14b8a6 100%)",
  },
  {
    id: "asset-6",
    title: "Senna GTR paddock burst",
    format: "Short-form video",
    description: "Queued as a next-up preload card for endless-scroll style short feed continuation.",
    status: "Draft",
    owner: "Track Desk",
    eta: "Needs captions",
    channel: "Short feed",
    artwork: "linear-gradient(135deg, #111827 0%, #9a3412 38%, #f97316 100%)",
  },
  {
    id: "asset-7",
    title: "Huayra sunrise warmup",
    format: "Short-form video",
    description: "Approved as a preloaded queue item so the short-form route looks active the moment DDE lands on it.",
    status: "Queued",
    owner: "Pagani Lane",
    eta: "Today · 20:10",
    channel: "Short feed",
    artwork: "linear-gradient(135deg, #111827 0%, #115e59 38%, #2dd4bf 100%)",
  },
  {
    id: "asset-8",
    title: "Factory radio #03 notes",
    format: "Podcast",
    description: "Transcript pass, show notes, and discussion prompt ready for the fuller audio library launch.",
    status: "Published",
    owner: "Audio Team",
    eta: "Live now",
    channel: "Audio tab",
    artwork: "linear-gradient(135deg, #111827 0%, #14532d 40%, #22c55e 100%)",
  },
  {
    id: "asset-9",
    title: "Atelier delivery watch page",
    format: "Long-form video",
    description: "Thumbnail, companion podcast link, and discussion handoff scheduled to keep the watch tab busy.",
    status: "Draft",
    owner: "Atelier Journal",
    eta: "Awaiting review",
    channel: "Watch tab",
    artwork: "linear-gradient(135deg, #111827 0%, #4c1d95 40%, #8b5cf6 100%)",
  },
];

function normalizeAsset(asset: DraftAsset, index: number): DraftAsset {
  const theme = formatThemes[asset.format as keyof typeof formatThemes] ?? formatThemes["Discussion post"];

  return {
    ...asset,
    owner: asset.owner || "Creator Desk",
    eta: asset.eta || "Needs schedule",
    channel: asset.channel || theme.channel,
    artwork: asset.artwork || Object.values(formatThemes)[index % Object.values(formatThemes).length].artwork,
  };
}

const columns: DraftAsset["status"][] = ["Draft", "Queued", "Published"];

export function DashboardManager() {
  const [assets, setAssets] = useState<DraftAsset[]>(defaultAssets);
  const [title, setTitle] = useState("");
  const [format, setFormat] = useState<keyof typeof formatThemes>("Short-form video");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      setAssets((JSON.parse(stored) as DraftAsset[]).map(normalizeAsset));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(assets));
  }, [assets]);

  function addAsset() {
    if (!title.trim() || !description.trim()) {
      return;
    }

    const theme = formatThemes[format];

    setAssets((current) => [
      {
        id: globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2),
        title: title.trim(),
        format,
        description: description.trim(),
        status: "Draft",
        owner: "Creator Desk",
        eta: "Needs review",
        channel: theme.channel,
        artwork: theme.artwork,
      },
      ...current,
    ]);
    setTitle("");
    setFormat("Short-form video");
    setDescription("");
  }

  const groupedAssets = useMemo(
    () =>
      columns.map((status) => ({
        status,
        items: assets.filter((asset) => asset.status === status),
      })),
    [assets],
  );

  return (
    <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
      <Card>
        <CardHeader>
          <CardTitle>Publishing intake</CardTitle>
          <CardDescription>
            Stage new drops with just enough structure to judge the design in a fuller, more production-like dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-3">
            <Input onChange={(event) => setTitle(event.target.value)} placeholder="Episode or post title" value={title} />
            <select
              className="flex h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
              onChange={(event) => setFormat(event.target.value as keyof typeof formatThemes)}
              value={format}
            >
              <option>Short-form video</option>
              <option>Long-form video</option>
              <option>Podcast</option>
              <option>Discussion post</option>
            </select>
            <Textarea
              onChange={(event) => setDescription(event.target.value)}
              placeholder="What ships in this drop? Mention thumbnails, follow-up rails, preload behavior, or sponsor notes."
              value={description}
            />
            <Button className="w-full" onClick={addAsset}>
              Add to pipeline
            </Button>
          </div>

          <div className="space-y-3 rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
            <p className="font-medium text-zinc-950">Visible state</p>
            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Loaded now</p>
                <p className="mt-1 font-semibold text-zinc-950">{assets.length} cards</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Prefetched next</p>
                <p className="mt-1 font-semibold text-zinc-950">12 cards</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Cache horizon</p>
                <p className="mt-1 font-semibold text-zinc-950">48h</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-zinc-950">Content board</p>
            <p className="text-sm text-zinc-600">Flat multi-column view inspired by issue trackers and creator ops boards.</p>
          </div>
          <Badge>{assets.length} active items</Badge>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {groupedAssets.map((column) => (
            <div className="rounded-lg border border-zinc-200 bg-white" key={column.status}>
              <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-zinc-950">{column.status}</p>
                  <p className="text-xs text-zinc-500">{column.items.length} items</p>
                </div>
                <Badge>{column.status}</Badge>
              </div>
              <div className="space-y-3 p-4">
                {column.items.map((asset) => (
                  <div className="rounded-md border border-zinc-200 bg-zinc-50 p-3" key={asset.id}>
                    <div className="flex gap-3">
                      <div className="h-16 w-16 rounded-md border border-zinc-200" style={{ backgroundImage: asset.artwork }} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-zinc-950">{asset.title}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">{asset.format}</p>
                          </div>
                          <Badge className="bg-white">{asset.channel}</Badge>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">{asset.description}</p>
                        <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
                          <span>{asset.owner}</span>
                          <span>{asset.eta}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-5 py-4 text-sm text-zinc-600">
          Showing the first {assets.length} cards in the active workspace · next backlog batch and archive pages can be prefetched into the same board shell.
        </div>
      </div>
    </div>
  );
}
