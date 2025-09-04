"use client";

import React, { useState, useEffect } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { AlphabetNav } from '@/components/AlphabetNav';
import { StateSection } from '@/components/StateSection';
import { SuggestionsForm } from '@/components/SuggestionsForm';
import { BackToTop } from '@/components/BackToTop';
import { USMap } from '@/components/USMap';

import { states } from '@/data/states';
import { State } from '@/types';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedStates, setExpandedStates] = useState<Set<string>>(new Set());
  const [filteredStates, setFilteredStates] = useState<State[]>(states);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredStates(states);
      return;
    }

    const filtered = states.filter(state => {
      const stateMatch = state.name.toLowerCase().includes(searchTerm.toLowerCase());
      const termMatch = state.terms.some(term => 
        term.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.phonetic?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return stateMatch || termMatch;
    });

    setFilteredStates(filtered);
  }, [searchTerm]);

  const toggleState = (stateName: string) => {
    setExpandedStates(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stateName)) {
        newSet.delete(stateName);
      } else {
        newSet.add(stateName);
      }
      return newSet;
    });
  };

  const handleStateClick = (stateName: string) => {
    const state = states.find(s => s.name === stateName);
    if (state) {
      toggleState(stateName);
      // Scroll to the state section
      setTimeout(() => {
        const element = document.getElementById(`state-${stateName.toLowerCase().replace(/\s+/g, '-')}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-animate">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Talk Like a Local
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 hero-animate-delay-1">
                Discover how locals pronounce names, places, and terms across the United States
              </p>
              <div className="hero-animate-delay-2">
                <USMap onStateClick={handleStateClick} />
              </div>
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
              <AlphabetNav />
            </div>
          </section>

          {/* States Section */}
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Local Pronunciations by State
              </h2>
              <div className="space-y-4">
                {filteredStates.map((state) => (
                  <StateSection
                    key={state.name}
                    state={state}
                    isExpanded={expandedStates.has(state.name)}
                    onToggle={() => toggleState(state.name)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Suggestions Section */}
          <section id="suggestions" className="py-16 px-4 bg-white dark:bg-gray-800">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Make a Suggestion
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                Know a local pronunciation we&apos;re missing? Help us expand our database!
              </p>
              <SuggestionsForm />
            </div>
          </section>
        </main>

        <BackToTop />
      </div>
  );
}