"use client";

import { useEffect, useState } from "react";

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
};

const storageKey = "petrol-headbook-dashboard-assets";

const defaultAssets: DraftAsset[] = [
  {
    id: "asset-1",
    title: "Launch day brief",
    format: "Short-form video",
    description: "Queued for vertical edit review.",
    status: "Queued",
  },
  {
    id: "asset-2",
    title: "Garage notes #12",
    format: "Podcast",
    description: "Podcast artwork and chapters approved.",
    status: "Published",
  },
];

export function DashboardManager() {
  const [assets, setAssets] = useState<DraftAsset[]>(defaultAssets);
  const [title, setTitle] = useState("");
  const [format, setFormat] = useState("Short-form video");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      setAssets(JSON.parse(stored) as DraftAsset[]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(assets));
  }, [assets]);

  function addAsset() {
    if (!title.trim() || !description.trim()) {
      return;
    }

    setAssets((current) => [
      {
        id: globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2),
        title: title.trim(),
        format,
        description: description.trim(),
        status: "Draft",
      },
      ...current,
    ]);
    setTitle("");
    setFormat("Short-form video");
    setDescription("");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card>
        <CardHeader>
          <CardTitle>Upload queue</CardTitle>
          <CardDescription>Creator-side content intake with room for video, audio, and discussion publishing flows.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            <Input onChange={(event) => setTitle(event.target.value)} placeholder="Episode title" value={title} />
            <select
              className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20"
              onChange={(event) => setFormat(event.target.value)}
              value={format}
            >
              <option>Short-form video</option>
              <option>Long-form video</option>
              <option>Podcast</option>
              <option>Discussion post</option>
            </select>
            <Textarea onChange={(event) => setDescription(event.target.value)} placeholder="What is shipping in this content drop?" value={description} />
            <Button onClick={addAsset}>Add to dashboard</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Content inventory</CardTitle>
          <CardDescription>Demo persistence uses local storage so the dashboard stays functional without backend setup.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {assets.map((asset) => (
            <div className="rounded-xl border border-zinc-200 p-4" key={asset.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-zinc-950">{asset.title}</p>
                  <p className="mt-1 text-sm text-zinc-600">{asset.format}</p>
                </div>
                <Badge>{asset.status}</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{asset.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
