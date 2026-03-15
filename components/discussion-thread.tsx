"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { create } from "zustand";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import type { SeedComment } from "@/lib/content";

type Comment = SeedComment;

type DiscussionState = {
  commentsBySlug: Record<string, Comment[]>;
  hydrate: (slug: string, comments: Comment[]) => void;
  replace: (slug: string, comments: Comment[]) => void;
  add: (slug: string, comment: Comment) => void;
};

const useDiscussionStore = create<DiscussionState>((set) => ({
  commentsBySlug: {},
  hydrate: (slug, comments) =>
    set((state) => ({
      commentsBySlug: state.commentsBySlug[slug] ? state.commentsBySlug : { ...state.commentsBySlug, [slug]: comments },
    })),
  replace: (slug, comments) =>
    set((state) => ({
      commentsBySlug: { ...state.commentsBySlug, [slug]: comments },
    })),
  add: (slug, comment) =>
    set((state) => ({
      commentsBySlug: {
        ...state.commentsBySlug,
        [slug]: [...(state.commentsBySlug[slug] ?? []), comment],
      },
    })),
}));

function storageKey(slug: string) {
  return `petrol-headbook-comments:${slug}`;
}

function sortComments(comments: Comment[]) {
  return [...comments].sort((left, right) => left.createdAt.localeCompare(right.createdAt));
}

function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function CommentBranch({
  comments,
  onReply,
  parentId = null,
  depth = 0,
}: {
  comments: Comment[];
  onReply: (parentId: string | null) => void;
  parentId?: string | null;
  depth?: number;
}) {
  return (
    <div className="space-y-4">
      {comments
        .filter((comment) => comment.parentId === parentId)
        .map((comment) => (
          <div className="space-y-4" key={comment.id}>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-zinc-950">{comment.author}</p>
                  <p className="text-xs text-zinc-500">{formatTimestamp(comment.createdAt)}</p>
                </div>
                <Button onClick={() => onReply(comment.id)} size="sm" variant="ghost">
                  Reply
                </Button>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-700">{comment.body}</p>
            </div>

            <div className={depth > 2 ? "ml-4" : "ml-6 border-l border-zinc-200 pl-4"}>
              <CommentBranch comments={comments} depth={depth + 1} onReply={onReply} parentId={comment.id} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function DiscussionThread({
  slug,
  seedComments,
  currentUser,
}: {
  slug: string;
  seedComments: SeedComment[];
  currentUser: string;
}) {
  const clientId = useRef<string>("");
  const [draft, setDraft] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [onlineCount, setOnlineCount] = useState(1);
  const { commentsBySlug, hydrate, replace, add } = useDiscussionStore();
  const comments = commentsBySlug[slug] ?? seedComments;

  useEffect(() => {
    clientId.current = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey(slug));
    const initialComments = stored ? (JSON.parse(stored) as Comment[]) : seedComments;
    hydrate(slug, sortComments(initialComments));

    const channel = typeof BroadcastChannel === "undefined" ? null : new BroadcastChannel(`petrol-headbook-${slug}`);
    const activeClients = new Set<string>([clientId.current]);

    const syncCount = () => setOnlineCount(Math.max(activeClients.size, 1));

    const handleBroadcast = (event: MessageEvent<{ type: string; clientId?: string; comments?: Comment[] }>) => {
      if (event.data.type === "comments" && event.data.comments) {
        replace(slug, sortComments(event.data.comments));
      }

      if (event.data.type === "join" && event.data.clientId) {
        activeClients.add(event.data.clientId);
        syncCount();
      }

      if (event.data.type === "leave" && event.data.clientId) {
        activeClients.delete(event.data.clientId);
        syncCount();
      }
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === storageKey(slug) && event.newValue) {
        replace(slug, sortComments(JSON.parse(event.newValue) as Comment[]));
      }
    };

    channel?.addEventListener("message", handleBroadcast);
    window.addEventListener("storage", handleStorage);
    channel?.postMessage({ type: "join", clientId: clientId.current });
    syncCount();

    return () => {
      channel?.postMessage({ type: "leave", clientId: clientId.current });
      channel?.removeEventListener("message", handleBroadcast);
      channel?.close();
      window.removeEventListener("storage", handleStorage);
    };
  }, [hydrate, replace, seedComments, slug]);

  const totalReplies = useMemo(() => comments.filter((comment) => comment.parentId).length, [comments]);

  function publish(comment: Comment[]) {
    window.localStorage.setItem(storageKey(slug), JSON.stringify(comment));
    replace(slug, sortComments(comment));
    if (typeof BroadcastChannel !== "undefined") {
      const channel = new BroadcastChannel(`petrol-headbook-${slug}`);
      channel.postMessage({ type: "comments", comments: comment });
      channel.close();
    }
  }

  function submit(parentId: string | null) {
    if (!draft.trim()) {
      return;
    }

    const comment: Comment = {
      id: globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2),
      parentId,
      author: currentUser,
      body: draft.trim(),
      createdAt: new Date().toISOString(),
    };

    add(slug, comment);
    const nextComments = [...comments, comment];
    publish(nextComments);
    setDraft("");
    setReplyingTo(null);
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle>Discussion thread</CardTitle>
            <CardDescription>Nested comments with live sync across tabs and creator-owned moderation controls.</CardDescription>
          </div>
          <div className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600">
            {comments.length} comments · {totalReplies} replies · {onlineCount} live now
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3 rounded-xl border border-zinc-200 p-4">
          <p className="text-sm font-medium text-zinc-900">Commenting as {currentUser}</p>
          {replyingTo ? <p className="text-xs text-zinc-500">Replying to a thread branch.</p> : null}
          <Textarea onChange={(event) => setDraft(event.target.value)} placeholder="Add context, answer questions, or post creator updates..." value={draft} />
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => submit(replyingTo)}>Post comment</Button>
            {replyingTo ? (
              <Button onClick={() => setReplyingTo(null)} variant="outline">
                Cancel reply
              </Button>
            ) : null}
          </div>
        </div>

        <CommentBranch comments={comments} onReply={setReplyingTo} />
      </CardContent>
    </Card>
  );
}
