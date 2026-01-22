import {MenuItem, Select, TextField, Button } from '@mui/material';
import { CATEGORIES, Category } from '../constants/categories';
import Grid from '@mui/material/GridLegacy'
interface Props {
  category: Category;
  query: string;
  onCategoryChange: (category: Category) => void;
  onQueryChange: (value: string) => void;
  onSearch: () => void;
}

export const Filters = ({
  category,
  query,
  onCategoryChange,
  onQueryChange,
  onSearch,
}: Props) => (
  <Grid container spacing={2} alignItems="center" mb={3}>
    <Grid item xs={12} md={4}>
      <Select fullWidth value={category} onChange={(e) => onCategoryChange(e.target.value as Category)}>
        {CATEGORIES.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </Grid>
    <Grid item xs={12} md={8}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
        style={{ display: 'flex', gap: 8 }}
      >
        <TextField
          fullWidth
          label="Search news"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </Grid>
  </Grid>
);