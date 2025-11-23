import { useState, useEffect } from 'react';

export type ContentType = 'מארחים' | 'מתארחים';

export interface Content {
  hero: {
    title: string;
    backgroundImage: string;
  };
  intro: {
    title: string;
    buttonText: string;
    subtitle: string;
    image: string;
  };
  about: {
    title: string;
    description: string;
    image: string;
  };
  packages: {
    title: string;
    buttonText: string;
    mainImage: string;
    decorativeImage1: string;
    decorativeImage2: string;
    monthLabel: string;
  };
  faq: {
    title: string;
    icon: string;
    items: Array<{
      id: string;
      question: string;
      answer: string;
    }>;
    viewPackagesButton: string;
    dividerImage: string;
  };
}

export const useContent = (type: ContentType) => {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const fileName = type === 'מארחים' ? 'hosts.json' : 'guests.json';
        const response = await fetch(`/${fileName}`);
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.statusText}`);
        }
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Failed to load content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [type]);

  return { content, loading };
};
