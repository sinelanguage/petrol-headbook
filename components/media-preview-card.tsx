import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { MediaCard } from "@/lib/content";

export function MediaPreviewCard({
  item,
  footerLabel = "Open experience",
}: {
  item: MediaCard;
  footerLabel?: string;
}) {
  return (
    <Link className="block h-full" href={item.href}>
      <Card className="h-full overflow-hidden">
        <div className="border-b border-zinc-200 p-4" style={{ backgroundImage: item.artwork }}>
          <div className="flex min-h-36 flex-col justify-between rounded-md border border-white/20 bg-black/10 p-4 text-white backdrop-blur-[2px]">
            <div className="flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-[0.16em] text-white/88">
              <span>{item.eyebrow}</span>
              <span>{item.duration}</span>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-white/78">{item.creator}</p>
              <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
            </div>
          </div>
        </div>

        <CardContent className="space-y-4 p-4">
          <div className="flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((tag) => (
              <Badge className="bg-zinc-100" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-sm leading-6 text-zinc-600">{item.summary}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {item.metrics.map((metric) => (
              <div className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2" key={metric.label}>
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{metric.label}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-950">{metric.value}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-zinc-200 pt-3 text-xs text-zinc-500">
            <span>{item.published}</span>
            <span>{footerLabel}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function MediaRailItem({
  item,
  href = item.href,
  meta,
}: {
  item: MediaCard;
  href?: string;
  meta?: string;
}) {
  return (
    <Link className="block" href={href}>
      <div className="flex gap-3 rounded-md border border-zinc-200 bg-white p-3 transition-colors hover:bg-zinc-50">
        <div
          className="flex h-20 w-28 shrink-0 items-end rounded-md border border-zinc-200 p-3 text-white"
          style={{ backgroundImage: item.artwork }}
        >
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/75">{item.eyebrow}</p>
            <p className="text-sm font-semibold leading-tight">{item.title}</p>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-zinc-950">{item.title}</p>
            <span className="text-xs text-zinc-500">{item.duration}</span>
          </div>
          <p className="mt-1 text-sm leading-6 text-zinc-600">{item.summary}</p>
          <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
            <span>{item.creator}</span>
            <span>{meta ?? item.published}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
