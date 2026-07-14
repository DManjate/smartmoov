import type { APIRoute } from 'astro';
import { SITE_URL } from '../config';

type SitemapEntry = {
  path: string;
};

const entries: SitemapEntry[] = [
  { path: '/' },
  { path: '/brands/' },
];

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = () => {
  const urls = entries
    .map((entry) => {
      const loc = new URL(entry.path, SITE_URL).href;

      return `  <url>
    <loc>${escapeXml(loc)}</loc>
  </url>`;
    })
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
