export const CATEGORIES = [
  'general',
  'business',
  'technology',
  'sports',
  'health',
  'science',
  'entertainment',
] as const;

export type Category = typeof CATEGORIES[number];