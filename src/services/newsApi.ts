import { Article, NewsResponse } from '../types/news';
import { Category } from '../constants/categories';

const API_KEY = '1e16297d452f42a18fd30eb2e7da87bf';
const BASE_URL = 'https://newsapi.org/v2';

const request = async (url: string): Promise<Article[]> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const data: NewsResponse = await response.json();
  return data.articles ?? [];
};

export const getTopHeadlines = (category: Category): Promise<Article[]> => {
  const url = `${BASE_URL}/top-headlines?category=${category}&language=en&apiKey=${API_KEY}`;
  return request(url);
};

export const searchNews = (query: string): Promise<Article[]> => {
  const url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`;
  return request(url);
};