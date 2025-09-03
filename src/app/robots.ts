import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://talklikealocal.org";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
