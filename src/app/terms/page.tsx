"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { BackToTop } from '@/components/BackToTop';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function Terms() {
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
                  Terms of Service
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Terms and conditions for using our platform
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Acceptance of Terms
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  By accessing and using Talk Like a Local, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Use License
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Permission is granted to temporarily download one copy of the materials on Talk Like a Local for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Disclaimer
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  The materials on Talk Like a Local are provided on an &apos;as is&apos; basis. Talk Like a Local makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Limitations
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  In no event shall Talk Like a Local or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Talk Like a Local.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Accuracy of Materials
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  The materials appearing on Talk Like a Local could include technical, typographical, or photographic errors. Talk Like a Local does not warrant that any of the materials on its website are accurate, complete, or current.
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
