"use client";

import React from 'react';

import { BackToTop } from '@/components/BackToTop';


export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                How we protect and use your information
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Information We Collect
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We collect information you provide directly to us, such as when you submit suggestions or disputes through our forms. This may include your name, email address, and the content of your submissions.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  How We Use Your Information
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                  <li>To review and potentially incorporate your suggestions into our database</li>
                  <li>To respond to your inquiries and disputes</li>
                  <li>To improve our website and services</li>
                  <li>To communicate with you about updates to our platform</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Information Sharing
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Data Security
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Contact Us
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us through our website.
                </p>
              </div>
            </div>
          </section>
        </main>

        <BackToTop />
      </div>
  );
}
