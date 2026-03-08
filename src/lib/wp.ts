export const WP_BASE_URL = "https://ipmaustralia.com.au";
export const WP_API_BASE = `${WP_BASE_URL}/wp-json/wp/v2`;

export type WpRenderedField = {
  rendered: string;
};

export type WpBaseItem = {
  id: number;
  slug: string;
  link: string;
  date?: string;
  title: WpRenderedField;
  content?: WpRenderedField;
  excerpt?: WpRenderedField;
  categories?: number[];
  product_cat?: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
      media_details?: {
        sizes?: Record<string, { source_url?: string }>;
      };
    }>;
  };
};

export type WpCategory = {
  id: number;
  name: string;
  slug: string;
  link: string;
  taxonomy: string;
  parent: number;
  description: string;
};

export type WpItem = WpBaseItem & {
  path: string;
  titleText: string;
  contentHtml: string;
  excerptHtml: string;
  excerptText: string;
  featuredImage?: string;
  featuredAlt?: string;
};

const shortcodePattern = /\[[^\]]+]/g;
const encodedShortcodePattern = /&#91;[^&#93;]*&#93;/g;
const namedEncodedShortcodePattern = /&lbrack;[^&]*&rbrack;/g;
const shortcodeFragmentPattern =
  /\[(?:vc_|nectar_|image_with_animation|toggle|toggles)[^\]]*(?:\]|$)/gi;
const leftoverShortcodeTokenPattern = /\b(?:vc_|nectar_)[a-z0-9_-]+/gi;
const breadcrumbsPattern = /<div class="breadcrumbs[^>]*>[\s\S]*?<\/div>/g;

export const normalizePath = (path: string) => {
  if (!path) return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

export const wpLinkToPath = (link: string) => {
  try {
    return normalizePath(new URL(link).pathname);
  } catch {
    return normalizePath(link);
  }
};

export const sanitizeWpHtml = (html?: string) => {
  if (!html) return "";
  return html
    .replace(breadcrumbsPattern, "")
    .replace(shortcodeFragmentPattern, "")
    .replace(encodedShortcodePattern, "")
    .replace(namedEncodedShortcodePattern, "")
    .replace(shortcodePattern, "");
};

export const htmlToText = (html?: string) => {
  if (!html) return "";
  if (typeof document === "undefined") {
    return html
      .replace(encodedShortcodePattern, "")
      .replace(namedEncodedShortcodePattern, "")
      .replace(shortcodePattern, "")
      .replace(shortcodeFragmentPattern, "")
      .replace(leftoverShortcodeTokenPattern, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent || "")
    .replace(shortcodeFragmentPattern, "")
    .replace(leftoverShortcodeTokenPattern, "")
    .replace(encodedShortcodePattern, "")
    .replace(namedEncodedShortcodePattern, "")
    .replace(shortcodePattern, "")
    .replace(/\s+/g, " ")
    .trim();
};

const isExcerptLikelyShortcode = (text: string) =>
  /\b(?:vc_|nectar_|column_padding|row_position|column_padding_position)\b/i.test(text);

export const truncateText = (text: string, maxLength = 160) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trim()}…`;
};

export const getFeaturedImage = (item: WpBaseItem) => {
  const media = item._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return undefined;
  return (
    media.source_url ||
    media.media_details?.sizes?.large?.source_url ||
    media.media_details?.sizes?.full?.source_url
  );
};

export const getFeaturedAlt = (item: WpBaseItem) => {
  const media = item._embedded?.["wp:featuredmedia"]?.[0];
  return media?.alt_text || "";
};

export const toWpItem = (item: WpBaseItem): WpItem => {
  const contentHtml = sanitizeWpHtml(item.content?.rendered);
  const excerptHtml = sanitizeWpHtml(item.excerpt?.rendered);
  let excerptText = htmlToText(excerptHtml || contentHtml);
  if (!excerptText || isExcerptLikelyShortcode(excerptText)) {
    excerptText = htmlToText(contentHtml);
  }
  return {
    ...item,
    path: wpLinkToPath(item.link),
    titleText: htmlToText(item.title.rendered),
    contentHtml,
    excerptHtml,
    excerptText,
    featuredImage: getFeaturedImage(item),
    featuredAlt: getFeaturedAlt(item),
  };
};
