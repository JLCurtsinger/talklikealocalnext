"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { BackToTop } from '@/components/BackToTop';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { StateEntry } from '@/types';
import { generateTermId } from '@/lib/share';

interface StatePageProps {
  state: StateEntry;
}

export function StatePage({ state }: StatePageProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {state.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Local pronunciations and regional terms
              </p>
            </div>
          </section>

          {/* Terms Section */}
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {state.terms.map((term, index) => (
                  <div 
                    key={`${state.name}-${term.word}-${index}`} 
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
    </ThemeProvider>
  );
}
