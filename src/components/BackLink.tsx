"use client";

import { useRouter } from "next/navigation";

export function BackLink() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mb-8 inline-block text-sm underline underline-offset-4 hover:text-(--text-secondary)"
    >
      ← Back
    </button>
  );
}
