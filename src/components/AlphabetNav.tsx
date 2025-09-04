"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { states } from '@/data/states';
import { cultures } from '@/data/cultures';
import { generateTermId } from '@/lib/share';

interface AlphabetNavProps {
  showFixedSideNav?: boolean;
}

export function AlphabetNav({ showFixedSideNav = false }: AlphabetNavProps) {
  const pathname = usePathname();
  const [activeLetters, setActiveLetters] = useState<string[]>([]);
  const [currentLetter, setCurrentLetter] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get the items based on the current page
    const isCulturalTerms = pathname === '/cultural-terms';
    const items = isCulturalTerms ? cultures : states;
    
    // Get unique first letters from actual data
    const letters = items.map(item => item.name[0].toUpperCase());
    setActiveLetters([...new Set(letters)].sort());
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      // Get the items based on the current page
      const isCulturalTerms = pathname === '/cultural-terms';
      const items = isCulturalTerms ? cultures : states;
      
      // Check each item's position
      for (const item of items) {
        const element = document.getElementById(generateTermId(item.name));
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        // Account for navbar height (64px) plus padding
        if (rect.top <= 80) {
          setCurrentLetter(item.name[0].toUpperCase());
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToLetter = (letter: string) => {
    const isCulturalTerms = pathname === '/cultural-terms';
    const items = isCulturalTerms ? cultures : states;
    
    const item = items.find(i => i.name[0].toUpperCase() === letter);
    if (!item) return;

    const element = document.getElementById(generateTermId(item.name));
    if (!element) return;

    const navbarHeight = 64; // Height of the fixed navbar
    const padding = 16; // Additional padding
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - padding;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Horizontal nav at the top */}
      <nav 
        className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 mx-auto max-w-3xl"
        aria-label="Alphabetical navigation"
      >
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {activeLetters.map(letter => {
            const isCurrent = currentLetter === letter;
            
            return (
              <button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                className={`
                  w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg
                  font-semibold text-base sm:text-lg transition-all duration-200
                  hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:shadow-md
                  ${isCurrent 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-110' 
                    : 'bg-white/80 dark:bg-gray-700/50 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'}
                `}
                aria-label={`Jump to ${letter} section`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Vertical nav on the right - only show when showFixedSideNav is true */}
      {showFixedSideNav && (
        <nav 
          className={`fixed right-0 top-1/2 -translate-y-1/2 transition-all duration-300 z-20
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
            max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent
            @media (max-height: 600px) { max-height: 70vh }
          `}
          aria-label="Quick navigation"
        >
          <div className="flex flex-col gap-1 sm:gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-l-lg shadow-lg border-l-2 border-blue-500/20 p-1.5 sm:p-2 mr-0">
            {activeLetters.map(letter => {
              const isCurrent = currentLetter === letter;
              
              return (
                <button
                  key={letter}
                  onClick={() => scrollToLetter(letter)}
                  className={`
                    w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-l-md
                    font-semibold text-xs sm:text-sm transition-all duration-200
                    hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:shadow-md
                    ${isCurrent 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                      : 'bg-white/80 dark:bg-gray-700/50 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'}
                  `}
                  aria-label={`Jump to ${letter} section`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
}