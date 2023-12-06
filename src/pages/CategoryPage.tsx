import { Grid } from "@mantine/core";
import { useContext, useState } from "react";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import MovieCard from "../components/MovieCard/MovieCard";
import { MovieContext } from "../contexts/MovieContext";

function CategoryPage() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const { movies } = useContext(MovieContext);

  // Filter movies based on selected genre
  const filteredMovies = selectedGenre
    ? movies.filter(movie => movie.genre.includes(selectedGenre))
    : movies;

  return (
    <div style={{ padding: "1rem" }}>
      <CategoryButton setSelectedGenre={setSelectedGenre} />
      <Grid gutter={20}>
        {filteredMovies.map(movie => (
          <Grid.Col span={{ base: 6, md: 3, lg: 2.4 }} key={movie.title}>
            <MovieCard {...movie} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}

export default CategoryPage;
