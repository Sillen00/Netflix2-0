import { Box, Text, Title } from "@mantine/core";
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
        <Box className='top'>
          <Title order={4}>{year}</Title>
          <Title order={4}>{rating}</Title>
        </Box>
        <Title order={1}>{title}</Title>
        <Text>{synopsis}</Text>
        <Title order={5}>
          <b>Actors:</b> {actors}
        </Title>
        <Title order={5}>
          <b>Genre: </b>
          {genre}
        </Title>
      </Box>
    </StyledMovieView>
  );
}

export default MovieView;
