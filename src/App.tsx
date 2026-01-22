import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Container, CircularProgress } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { Article } from './types/news';
import { Category } from './constants/categories';
import { getTopHeadlines, searchNews } from './services/newsApi';
import { NewsCard } from './components/NewsCard';
import { Filters } from './components/Filters';

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState<Category>('general');
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTopHeadlines();
  }, [category]);

  const loadTopHeadlines = async () => {
    try {
      setLoading(true);
      setError(null);
      setArticles(await getTopHeadlines(category));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      setLoading(true);
      setError(null);
      setArticles(await searchNews(query.trim()));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">World News</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Filters
          category={category}
          query={query}
          onCategoryChange={setCategory}
          onQueryChange={setQuery}
          onSearch={handleSearch}
        />

        {loading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}

        <Grid container spacing={3}>
          {articles.map((article) => (
            <Grid component={'div'} xs={12} md={6} lg={4} key={article.url}>
              <NewsCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
