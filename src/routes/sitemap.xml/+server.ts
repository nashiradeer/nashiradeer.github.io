import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '$lib/i18n';
import type { RequestHandler } from './$types';

export const prerender = true;

/** Generate a URL and its localized versions */
function generateUrl(domain: string, page: string, langs: string[]) {
	const langsWithoutDefault = langs.filter((lang) => lang !== DEFAULT_LANGUAGE);

	const localizedUrls = langsWithoutDefault.map((lang) => {
		return `<xhtml:link
        rel="alternate"
        hreflang="${lang}"
        href="${domain}/${lang}${page}"
      />`;
	});

	return `<url>
      <loc>${domain}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      ${localizedUrls.join('\n      ')}
    </url>`;
}

/** Domain of the website */
const DOMAIN: string = 'https://www.nashiradeer.com';

/** List of pages to include in the sitemap */
const PAGES: string[] = ['/', '/blog', '/certificates', '/fursonas', '/games', '/projects'];

export const GET: RequestHandler = async () => {
	const langs = Object.keys(AVAILABLE_LANGUAGES);

	const urls = PAGES.map((page) => generateUrl(DOMAIN, page, langs)).join('\n    ');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${urls}
  </urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
