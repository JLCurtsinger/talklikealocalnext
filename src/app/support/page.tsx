"use client";

import React from 'react';

import { BackToTop } from '@/components/BackToTop';


export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Support
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Get help and support for our platform
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  How Can We Help?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We&apos;re here to help you make the most of Talk Like a Local. Whether you have questions about pronunciations, want to submit corrections, or need technical support, we&apos;re ready to assist.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      How do I submit a pronunciation correction?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Use our &quot;Dispute a Term&quot; feature in the navigation menu to submit corrections with your credentials and reasoning.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      How do I suggest a new term?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Use our &quot;Make a Suggestion&quot; form to submit new local pronunciations from your area.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Are the pronunciations verified?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Yes, we work with local communities and language experts to verify pronunciations before adding them to our database.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Contact Us
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  For additional support or questions not covered in our FAQ, please use our contact form or reach out through our social media channels.
                </p>
              </div>
            </div>
          </section>
        </main>

        <BackToTop />
      </div>
  );
}
