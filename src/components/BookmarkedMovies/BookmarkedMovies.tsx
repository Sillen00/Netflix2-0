import { Grid } from "@mantine/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";
import { titleToSlug } from "../../pages/MovieViewPage";
import MovieCard from "../MovieCard/MovieCard";
import { StyleBookmarkedMovie } from "./BookmarkedMovies.style";

function BookmarkedMovies() {
  const { bookmarkedMovies } = useContext(MovieContext);

  return (
    <StyleBookmarkedMovie>
      <Grid gutter={20}>
        {bookmarkedMovies.map(movie => (
          <Grid.Col className='grid-item' span={{ base: 6, md: 3, lg: 2.4 }} key={movie.title}>
            <Link to={`/movie/${titleToSlug(movie.title)}`}>
              <MovieCard {...movie} />
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </StyleBookmarkedMovie>
  );
}

export default BookmarkedMovies;
