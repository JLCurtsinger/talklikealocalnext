"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { BackToTop } from '@/components/BackToTop';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function Impact() {
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
                  Our Impact
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Making a difference in linguistic preservation and cultural understanding
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</h3>
                  <p className="text-gray-600 dark:text-gray-300">States Covered</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">1000+</h3>
                  <p className="text-gray-600 dark:text-gray-300">Terms Documented</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">30+</h3>
                  <p className="text-gray-600 dark:text-gray-300">Indigenous Cultures</p>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Preserving Linguistic Heritage
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our platform serves as a digital archive for regional pronunciations and Indigenous language terms that might otherwise be lost to time. By documenting these linguistic variations, we&apos;re helping to preserve cultural identity and heritage.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Educational Impact
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Teachers, students, and language enthusiasts use our database to learn about regional variations in American English and to understand the rich diversity of Indigenous languages spoken across the United States.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Cultural Bridge
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our work helps bridge cultural gaps by providing accurate pronunciation guides that respect local traditions and Indigenous knowledge. This promotes understanding and appreciation for the linguistic diversity that makes America unique.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Community Engagement
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We actively engage with local communities, cultural organizations, and language experts to ensure our content is accurate, respectful, and beneficial to the communities we serve.
                </p>
              </div>
            </div>
          </section>
        </main>

        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
