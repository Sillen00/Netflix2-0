import { Grid, Text } from "@mantine/core";
import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import MovieCard from "../MovieCard/MovieCard";
import { StyleBookmarkedMovie } from "./BookmarkedMovies.style";

function BookmarkedMovies() {
  const { bookmarkedMovies } = useContext(MovieContext);

  return (
    <StyleBookmarkedMovie>
      {bookmarkedMovies.length === 0 && (
        <Text className='empty-bookmark-message'>You dont have any movies bookmarked.</Text>
      )}
      <Grid gutter={20}>
        {bookmarkedMovies.map(movie => (
          <Grid.Col className='grid-item' span={{ base: 6, md: 3, lg: 2.4 }} key={movie.title}>
            <MovieCard {...movie} />
          </Grid.Col>
        ))}
      </Grid>
    </StyleBookmarkedMovie>
  );
}

export default BookmarkedMovies;
