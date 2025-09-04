import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { states } from '@/data/states';
import { StatePage } from './StatePage';

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export async function generateStaticParams() {
  return states.map((state) => ({
    slug: state.slug ?? slugify(state.name),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const state = states.find(s => (s.slug ?? slugify(s.name)) === slug);
  
  if (!state) {
    return {
      title: 'State Not Found',
    };
  }

  return {
    title: `${state.name} - Local Pronunciations`,
    description: `Discover how locals pronounce names, places, and terms in ${state.name}. Learn authentic regional pronunciations and cultural terms.`,
    openGraph: {
      title: `${state.name} - Local Pronunciations`,
      description: `Discover how locals pronounce names, places, and terms in ${state.name}.`,
    },
    alternates: {
      canonical: `/states/${slug}`,
    },
  };
}

export default async function StatePageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const state = states.find(s => (s.slug ?? slugify(s.name)) === slug);
  
  if (!state) {
    notFound();
  }

  return <StatePage state={state} />;
}
