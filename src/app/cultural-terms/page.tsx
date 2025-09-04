"use client";

import React, { useState, useEffect } from 'react';

import { SearchBar } from '@/components/SearchBar';
import { AlphabetNav } from '@/components/AlphabetNav';
import { BackToTop } from '@/components/BackToTop';

import { cultures } from '@/data/cultures';
import { Culture } from '@/types';
import { generateTermId } from '@/lib/share';

export default function CulturalTerms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCultures, setFilteredCultures] = useState<Culture[]>(cultures);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredCultures(cultures);
      return;
    }

    const filtered = cultures.filter(culture => {
      const cultureMatch = culture.name.toLowerCase().includes(searchTerm.toLowerCase());
      const termMatch = culture.terms.some(term => 
        term.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.phonetic?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return cultureMatch || termMatch;
    });

    setFilteredCultures(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Cultural Terms
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Explore Indigenous languages and cultural pronunciations across the United States
              </p>
            </div>
          </section>

          {/* Search Section */}
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <SearchBar onSearch={setSearchTerm} />
            </div>
          </section>

          {/* Alphabet Navigation */}
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <AlphabetNav showFixedSideNav={true} />
            </div>
          </section>

          {/* Cultures Section */}
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Indigenous Languages & Cultures
              </h2>
              <div className="space-y-8">
                {filteredCultures.map((culture) => (
                  <div key={culture.name} id={generateTermId(culture.name)} className="py-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {culture.name}
                        </h3>
                        {culture.websiteUrl && (
                          <a
                            href={culture.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            Visit Website
                          </a>
                        )}
                      </div>
                      
                      {culture.languageFamily && (
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Language Family: {culture.languageFamily}
                        </p>
                      )}

                      <div className="grid gap-4">
                        {culture.terms.map((term, index) => (
                          <div 
                            key={`${culture.name}-${term.word}-${index}`} 
                            id={generateTermId(term.word)}
                            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                                  {term.word}
                                </h4>
                                {term.phonetic && (
                                  <p className="text-gray-600 dark:text-gray-300">
                                    {term.phonetic}
                                  </p>
                                )}
                                {term.description && (
                                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                                    {term.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
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
