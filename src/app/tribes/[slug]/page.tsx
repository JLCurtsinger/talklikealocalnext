import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cultures } from '@/data/cultures';
import { CulturePage } from './CulturePage';

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export async function generateStaticParams() {
  return cultures.map((culture) => ({
    slug: culture.slug ?? slugify(culture.name),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const culture = cultures.find(c => (c.slug ?? slugify(c.name)) === params.slug);
  
  if (!culture) {
    return {
      title: 'Culture Not Found',
    };
  }

  return {
    title: `${culture.name} - Cultural Terms`,
    description: `Explore ${culture.name} language terms and cultural pronunciations. Learn about Indigenous languages and cultural heritage.`,
    openGraph: {
      title: `${culture.name} - Cultural Terms`,
      description: `Explore ${culture.name} language terms and cultural pronunciations.`,
    },
    alternates: {
      canonical: `/tribes/${params.slug}`,
    },
  };
}

export default function CulturePageRoute({ params }: { params: { slug: string } }) {
  const culture = cultures.find(c => (c.slug ?? slugify(c.name)) === params.slug);
  
  if (!culture) {
    notFound();
  }

  return <CulturePage culture={culture} />;
}
