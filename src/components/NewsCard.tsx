import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { Article } from '../types/news';

interface Props {
  article: Article;
}

export const NewsCard = ({ article }: Props) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {article.description ?? 'No description available.'}
      </Typography>
    </CardContent>
    <CardActions sx={{ mt: 'auto' }}>
      <Button
        size="small"
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </Button>
    </CardActions>
  </Card>
);