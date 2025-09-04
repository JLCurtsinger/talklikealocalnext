"use client";

import React from 'react';

import { BackToTop } from '@/components/BackToTop';

import { Culture } from '@/types';
import { generateTermId } from '@/lib/share';

interface CulturePageProps {
  culture: Culture;
}

export function CulturePage({ culture }: CulturePageProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {culture.name}
                </span>
              </h1>
              {culture.languageFamily && (
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                  Language Family: {culture.languageFamily}
                </p>
              )}
              {culture.websiteUrl && (
                <a
                  href={culture.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-lg"
                >
                  Visit Official Website
                </a>
              )}
            </div>
          </section>

          {/* Terms Section */}
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {culture.terms.map((term, index) => (
                  <div 
                    key={`${culture.name}-${term.word}-${index}`} 
                    id={generateTermId(term.word)}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold dark:text-white">{term.word}</h3>
                        {term.phonetic && (
                          <p className="text-gray-600 dark:text-gray-300">{term.phonetic}</p>
                        )}
                        {term.description && (
                          <p className="text-gray-500 dark:text-gray-400 mt-2">{term.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <BackToTop />
      </div>
  );
}
