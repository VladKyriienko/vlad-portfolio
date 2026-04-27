/**
 * Same value as in next.config (NEXT_PUBLIC_BASE_PATH). Used for static file URLs
 * in plain <img> and fetch() — Next does not rewrite those when basePath is set.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
