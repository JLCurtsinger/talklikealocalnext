export function generateTermId(term: string): string {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export async function shareTerm({ term, context }: { term: { word: string; phonetic?: string }; context: string }): Promise<boolean> {
  const shareData = {
    title: `${term.word} - Talk Like a Local`,
    text: `${term.word} (${term.phonetic}) - ${context}`,
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return true;
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
      return true;
    }
  } catch (error) {
    console.error('Error sharing:', error);
    return false;
  }
}
