import { Box } from "@mantine/core";
import { Movie } from "../../contexts/MovieContext";
import { StyledMovieView } from "./MovieView.style";

interface Props {
  movie: Movie;
}

function MovieView({ movie }: Props) {
  const { title, thumbnail, genre, synopsis, year, rating, actors } = movie;

  return (
    <StyledMovieView>
      <img src={thumbnail}></img>
      <Box>
        <h1>{title}</h1>
        <p>{rating}</p>
        <p>{year}</p>
        <p>{synopsis}</p>
        <p>{actors}</p>
        <p>{genre}</p>
      </Box>
    </StyledMovieView>
  );
}

export default MovieView;
