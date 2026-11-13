/**
 * English Immersion Hub · multi-publisher RSS aggregator
 * Public endpoint: /news
 * Headlines + metadata only; full article content remains on publisher sites.
 */
const FEEDS = [
  ["tech", "https://feeds.arstechnica.com/arstechnica/index", "tech"],
  ["games", "https://www.polygon.com/rss/index.xml", "games"],
  ["aviation", "https://simpleflying.com/feed/", "aviation"],
  ["weird", "https://www.upi.com/Odd_News/Top_News/rss/", "weird"],
  ["animals", "https://www.theguardian.com/world/animals/rss", "animals"],
  ["science", "https://www.sciencedaily.com/rss/top/science.xml", "science"],
  ["internet", "https://www.theverge.com/rss/index.xml", "internet"],
  ["transport", "https://www.railwaygazette.com/rss", "transport"],
  ["food", "https://www.eater.com/rss/index.xml", "food"],
  ["wholesome", "https://www.goodnewsnetwork.org/feed/", "wholesome"]
];
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Cache-Control",
  "Access-Control-Max-Age": "86400",
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0"
};
function decode(s = "") {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}
function getTag(x, name) {
  const safe = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = x.match(new RegExp("<" + safe + "(?:\\s[^>]*)?>([\\s\\S]*?)<\\/" + safe + ">", "i"));
  return m ? decode(m[1].replace(/^<!\[CDATA\[|\]\]>$/g, "").trim()) : "";
}
function cleanText(s) {
  return decode(String(s || "").replace(/<[^>]+>/g, " ").replace(/<!\[CDATA\[|\]\]>/g, " "))
    .replace(/&nbsp;/g, " ").replace(/\\s+/g, " ").trim();
}
function parse(xml, category, feedUrl) {
  const entries = [
    ...[...xml.matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi)].map(m => ({ xml: m[1], atom: false })),
    ...[...xml.matchAll(/<entry(?:\s[^>]*)?>([\s\S]*?)<\/entry>/gi)].map(m => ({ xml: m[1], atom: true }))
  ];
  const host = (() => { try { return new URL(feedUrl).hostname.replace(/^www\./, ""); } catch { return "News source"; } })();
  return entries.map(({ xml: x, atom }) => {
    let link = getTag(x, "link");
    if (atom || !link) {
      const links = [...x.matchAll(/<link\b([^>]*)\/?\s*>/gi)];
      const chosen = links.find(m => !/rel=["'](?:self|enclosure)["']/.test(m[1])) || links[0];
      const href = chosen?.[1]?.match(/href=["']([^"']+)["']/i);
      if (href) link = decode(href[1]);
    }
    const date = getTag(x, "pubDate") || getTag(x, "published") || getTag(x, "updated") || getTag(x, "dc:date");
    const rawDescription = getTag(x, "description") || getTag(x, "summary") || getTag(x, "content:encoded") || getTag(x, "content");
    const parsedDate = date ? new Date(date) : null;
    return {
      title: cleanText(getTag(x, "title")),
      url: cleanText(link),
      source: cleanText(getTag(x, "source")) || host,
      publishedAt: parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate.toISOString() : null,
      description: cleanText(rawDescription).slice(0, 300),
      category
    };
  }).filter(a => a.title && a.url && /^https?:\/\//i.test(a.url));
}
function score(a) {
  const t = (a.title + " " + a.description).toLowerCase();
  let n = 0;
  ["nvidia","gpu","game","gaming","steam","playstation","xbox","nintendo","weird","bizarre","strange","unusual","airport","plane","aircraft","pilot","animal","cat","dog","puppy","kitten","cute","rescue","viral","meme","space","robot","ai","unexpected","record","squirrel","penguin","duck","fox","turtle","technology","science","odd","rail","train","food","restaurant","good news","heartwarming"].forEach(k => { if (t.includes(k)) n += 2; });
  ["war","killed","death toll","murder","mass shooting","terror","graphic","fatal crash","fatal accident","victims","rape","suicide","explosion","disaster","earthquake","flood","wildfire"].forEach(k => { if (t.includes(k)) n -= 10; });
  return n;
}
export default {
  async fetch(request) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });
    const url = new URL(request.url);
    if (url.pathname !== "/news") return Response.json({ ok: true, service: "English Immersion Hub multi-publisher RSS aggregator", endpoint: "/news" }, { headers: CORS });
    const limit = Math.max(1, Math.min(100, Number(url.searchParams.get("limit") || 70)));
    const results = await Promise.allSettled(FEEDS.map(async ([category, feedUrl]) => {
      const res = await fetch(feedUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; EnglishImmersionHub/1.0; +https://github.com/Feuler1007/english-immersion-hub)",
          "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml, */*"
        },
        cf: { cacheTtl: 180, cacheEverything: true }
      });
      if (!res.ok) throw new Error(hostName(feedUrl) + " RSS " + res.status);
      const xml = await res.text();
      const articles = parse(xml, category, feedUrl);
      if (!articles.length) throw new Error(hostName(feedUrl) + " returned no parseable articles");
      return articles;
    }));
    const successful = results.filter(r => r.status === "fulfilled");
    if (!successful.length) {
      const failures = results.map(r => r.status === "rejected" ? r.reason?.message || String(r.reason) : "").filter(Boolean).join("; ");
      return Response.json({ ok: false, error: "All publisher RSS feeds failed: " + failures, articles: [] }, { status: 502, headers: CORS });
    }
    const unique = new Map();
    for (const article of successful.flatMap(r => r.value)) {
      const key = article.title.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (!unique.has(key)) unique.set(key, article);
    }
    const articles = [...unique.values()]
      .map(a => Object.assign(a, { score: score(a) }))
      .filter(a => a.score >= 0)
      .sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0) || b.score - a.score)
      .slice(0, limit);
    return Response.json({
      ok: true,
      provider: "Independent publisher RSS feeds",
      fetchedAt: new Date().toISOString(),
      feedCount: FEEDS.length,
      successfulFeedCount: successful.length,
      failedFeeds: results.map((r, i) => r.status === "rejected" ? { category: FEEDS[i][0], error: r.reason?.message || String(r.reason) } : null).filter(Boolean),
      articles
    }, { headers: CORS });
  }
};
function hostName(value) {
  try { return new URL(value).hostname.replace(/^www\./, ""); } catch { return "Publisher"; }
}
