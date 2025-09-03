"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { BackToTop } from '@/components/BackToTop';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function About() {
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
                  About Us
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Preserving linguistic diversity across the United States
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Talk Like a Local is dedicated to documenting and preserving the rich linguistic diversity found across the United States. We believe that understanding how locals pronounce names, places, and terms is essential for cultural appreciation and effective communication.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                  <li>Document local pronunciations from all 50 states</li>
                  <li>Preserve Indigenous language terms and pronunciations</li>
                  <li>Provide phonetic guides for travelers and language enthusiasts</li>
                  <li>Create a comprehensive database of regional linguistic variations</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Our Approach
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We work with local communities, language experts, and cultural organizations to ensure accuracy and authenticity in our documentation. Every pronunciation is verified through multiple sources and community input.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Get Involved
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Help us expand our database by submitting local pronunciations from your area. Whether you&apos;re a native speaker, language enthusiast, or cultural expert, your contributions help preserve linguistic heritage for future generations.
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
