export type Term = { 
  word: string; 
  phonetic?: string; 
  description: string; 
  audioUrl?: string;
};

export type Culture = {
  name: string;
  languageFamily?: string;
  terms: Term[];
  resources?: { name: string; url: string }[];
  slug?: string;
  websiteUrl?: string;
};

export type StateEntry = {
  name: string;
  abbreviation?: string;
  terms: Term[];
  resources?: { name: string; url: string }[];
  slug?: string;
};

// Legacy alias for backward compatibility
export type State = StateEntry;