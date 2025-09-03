import { MetadataRoute } from "next";
import { cultures } from "@/data/cultures";
import { states } from "@/data/states";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://talklikealocal.org";
  const now = new Date();

  const stateUrls = states.map((s) => ({
    url: `${base}/states/${s.slug ?? slugify(s.name)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const cultureUrls = cultures.map((c) => ({
    url: `${base}/tribes/${c.slug ?? slugify(c.name)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/cultural-terms`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/impact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...stateUrls,
    ...cultureUrls,
  ];
}
