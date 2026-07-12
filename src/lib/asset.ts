// Prefix a public asset path (canvas frames, <video> src, <img> logo, etc.)
// with the deploy base path. Next.js only rewrites next/image & next/link
// automatically, so raw absolute paths need this to work on GitHub Pages.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE}${path}`;
}
